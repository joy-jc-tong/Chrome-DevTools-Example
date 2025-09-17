const fs = require('fs');
const path = require('path');

const dist = path.resolve(__dirname, '..', 'dist');
const from = path.join(dist, 'index.html');
const to = path.join(dist, '404.html');

if (!fs.existsSync(from)) {
  console.error('[make404] dist/index.html 不存在，請先執行 build');
  process.exit(1);
}

fs.copyFileSync(from, to);
console.log('[make404] 404.html 已產生');
