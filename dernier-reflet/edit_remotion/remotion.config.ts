import {Config} from '@remotion/cli/config';
// Use the sandbox's pre-installed Chromium headless shell (no download).
Config.setBrowserExecutable('/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell');
Config.setVideoImageFormat('jpeg');
Config.setCodec('h264');
Config.setCrf(16);
