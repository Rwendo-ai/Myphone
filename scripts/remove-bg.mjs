import { Jimp, intToRGBA, rgbaToInt } from 'jimp';

const INPUT  = './assets/rwen/rwen.png';
const OUTPUT = './assets/rwen/rwen_transparent.png';

console.log('Removing white background from Rwen...');

const img = await Jimp.read(INPUT);

const width = img.bitmap.width;
const height = img.bitmap.height;
const THRESHOLD = 30;

function isWhite(r, g, b) {
  return r > (255 - THRESHOLD) && g > (255 - THRESHOLD) && b > (255 - THRESHOLD);
}

function getPixel(x, y) {
  const idx = (y * width + x) * 4;
  const d = img.bitmap.data;
  return { r: d[idx], g: d[idx+1], b: d[idx+2], a: d[idx+3] };
}

function setTransparent(x, y) {
  const idx = (y * width + x) * 4;
  img.bitmap.data[idx+3] = 0;
}

// Flood fill from corners
const visited = new Uint8Array(width * height);
const stack = [];

[[0,0],[width-1,0],[0,height-1],[width-1,height-1]].forEach(([x, y]) => {
  const idx = y * width + x;
  const { r, g, b } = getPixel(x, y);
  if (isWhite(r, g, b) && !visited[idx]) {
    stack.push([x, y]);
    visited[idx] = 1;
  }
});

let count = 0;
while (stack.length > 0) {
  const [cx, cy] = stack.pop();
  setTransparent(cx, cy);
  count++;

  for (const [nx, ny] of [[cx-1,cy],[cx+1,cy],[cx,cy-1],[cx,cy+1]]) {
    if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
    const nidx = ny * width + nx;
    if (visited[nidx]) continue;
    const { r, g, b } = getPixel(nx, ny);
    if (isWhite(r, g, b)) {
      visited[nidx] = 1;
      stack.push([nx, ny]);
    }
  }
}

console.log(`Made ${count} pixels transparent`);
await img.write(OUTPUT);
console.log(`✅ Saved: ${OUTPUT} (${width}×${height}px)`);
