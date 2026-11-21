import { copyFileSync } from 'node:fs';

copyFileSync('dist/index.html', 'standalone.html');
console.log('Created standalone.html from the single-file build in dist/index.html');
