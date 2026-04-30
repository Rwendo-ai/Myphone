// Process all Rwen poses:
// 1. Remove white background (flood fill from corners)
// 2. Resize to 512×512 (contain, no crop)
// 3. Save as WebP at quality 90 (transparency preserved)

import { Jimp } from 'jimp';
import sharp from 'sharp';
import { readdirSync, mkdirSync, writeFileSync } from 'fs';
import { resolve, basename, extname } from 'path';

const INPUT_DIR  = resolve('./assets/rwen poses');
const OUTPUT_DIR = resolve('./assets/rwen/processed');

mkdirSync(OUTPUT_DIR, { recursive: true });

const files = readdirSync(INPUT_DIR).filter(f =>
  ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase())
);

console.log(`Processing ${files.length} poses...\n`);

const THRESHOLD = 25; // white background sensitivity

function removeWhiteBg(img) {
  const width  = img.bitmap.width;
  const height = img.bitmap.height;
  const data   = img.bitmap.data;

  function getPixel(x, y) {
    const i = (y * width + x) * 4;
    return { r: data[i], g: data[i+1], b: data[i+2], a: data[i+3] };
  }

  function setTransparent(x, y) {
    const i = (y * width + x) * 4;
    data[i+3] = 0;
  }

  // Auto-detect background colour from corner pixels
  const corner = getPixel(0, 0);
  const isBlackBg = corner.r < 30 && corner.g < 30 && corner.b < 30;

  function isBg(r, g, b) {
    if (isBlackBg) return r < THRESHOLD && g < THRESHOLD && b < THRESHOLD;
    return r > (255 - THRESHOLD) && g > (255 - THRESHOLD) && b > (255 - THRESHOLD);
  }

  const visited = new Uint8Array(width * height);
  const stack = [];

  // Seed from all four corners + edges every 50px
  const seeds = [
    [0,0], [width-1,0], [0,height-1], [width-1,height-1],
  ];
  // Add edge seeds
  for (let x = 0; x < width; x += 50) { seeds.push([x, 0]); seeds.push([x, height-1]); }
  for (let y = 0; y < height; y += 50) { seeds.push([0, y]); seeds.push([width-1, y]); }

  for (const [x, y] of seeds) {
    const idx = y * width + x;
    if (visited[idx]) continue;
    const { r, g, b } = getPixel(x, y);
    if (isBg(r, g, b)) {
      stack.push([x, y]);
      visited[idx] = 1;
    }
  }

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
      if (isBg(r, g, b)) {
        visited[nidx] = 1;
        stack.push([nx, ny]);
      }
    }
  }
  return count;
}

for (const file of files) {
  const inputPath = `${INPUT_DIR}/${file}`;
  const name = basename(file, extname(file))
    .toLowerCase()
    .replace(/\s+/g, '_');
  const outputPath = `${OUTPUT_DIR}/${name}.webp`;

  process.stdout.write(`  ${name}... `);

  try {
    // Step 1: Remove background with Jimp
    const img = await Jimp.read(inputPath);
    const removed = removeWhiteBg(img);

    // Get raw RGBA buffer from Jimp
    const rawBuffer = Buffer.from(img.bitmap.data);
    const { width, height } = img.bitmap;

    // Step 2 & 3: Resize to 512×512 (contain) + convert to WebP with sharp
    const webpBuffer = await sharp(rawBuffer, {
      raw: { width, height, channels: 4 },
    })
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }, // transparent padding
      })
      .webp({ quality: 90, alphaQuality: 100, lossless: false })
      .toBuffer();

    writeFileSync(outputPath, webpBuffer);

    const kb = (webpBuffer.length / 1024).toFixed(0);
    console.log(`✓ ${kb}KB (${removed.toLocaleString()} bg pixels removed)`);
  } catch (e) {
    console.log(`✗ Error: ${e.message}`);
  }
}

console.log(`\n✅ All done! WebP files saved to: ${OUTPUT_DIR}`);
