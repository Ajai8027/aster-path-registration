import { copyFileSync } from 'node:fs';

copyFileSync('dist/index.html', 'index.html');
copyFileSync('dist/index.html', 'standalone.html');

console.log('Copied dist/index.html to index.html and standalone.html');
