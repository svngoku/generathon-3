#!/usr/bin/env bash
# Upload one local file to Arcads ONCE and record it in dernier-reflet/locked/arcads_assets.json,
# so every later call reuses the SAME reference (character consistency).
#
# 1. MCP  arcads_get_upload_url {mimeType, fileName}               -> presignedUrl + filePath
# 2. bash tools/arcads_put.sh <repo-file> '<presignedUrl>' <filePath>   (PUT + record the temp S3 path)
# 3. MCP  arcads_register_image {imagePath: filePath, title}        -> persistent asset id
# 4. bash tools/arcads_put.sh --asset <repo-file> <assetId>             (replace the temp path by the asset id)
# Tested from the cloud sandbox on 2026-10-31: PUT to s3-accelerate works (HTTP 200).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MANIFEST="$ROOT/dernier-reflet/locked/arcads_assets.json"

record() {  # record <repo-file> <value>
  python3 -c '
import json, sys, os
p, f, k = sys.argv[1:]
m = json.load(open(p)) if os.path.exists(p) else {}
m[f] = k
json.dump(m, open(p, "w"), indent=2, sort_keys=True)
print(f"recorded {f} -> {k}")' "$MANIFEST" "$1" "$2"
}

if [ "${1:-}" = "--asset" ]; then
  record "$2" "$3"; exit 0
fi

FILE="$1"; URL="$2"; KEY="$3"
case "${FILE,,}" in
  *.png) MIME=image/png ;; *.jpg|*.jpeg) MIME=image/jpeg ;; *.webp) MIME=image/webp ;;
  *.mp4) MIME=video/mp4 ;; *.mp3) MIME=audio/mpeg ;; *) echo "unknown type: $FILE" >&2; exit 2 ;;
esac
SIZE=$(stat -c%s "$ROOT/$FILE")
[ "$SIZE" -le 10485760 ] || { echo "file > 10 MB: downscale first (convert in.png -resize '2560x2560>' out.png)" >&2; exit 3; }
CODE=$(curl -sS -o /dev/null -w "%{http_code}" -X PUT -H "Content-Type: $MIME" --data-binary @"$ROOT/$FILE" "$URL")
[ "$CODE" = "200" ] || { echo "upload failed: HTTP $CODE" >&2; exit 1; }
record "$FILE" "$KEY"
