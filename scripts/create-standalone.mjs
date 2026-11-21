import { copyFileSync } from 'node:fs';

copyFileSync('dist/index.html', 'index.html');
copyFileSync('dist/index.html', 'standalone.html');
console.log('Updated index.html and standalone.html from the single-file build in dist/index.html');
