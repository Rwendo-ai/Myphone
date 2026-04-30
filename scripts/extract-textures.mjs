// Extract textures from GLB as separate PNG files for React Native loading
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const INPUT = resolve('./assets/rwen/rwen_final.glb');
const TEX_DIR = resolve('./assets/rwen/textures');

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);

console.log('Reading GLB...');
const doc = await io.read(INPUT);

const textures = doc.getRoot().listTextures();
console.log(`Found ${textures.length} texture(s)`);

const textureMap = {};

textures.forEach((tex, i) => {
  const name = tex.getName() || `texture_${i}`;
  const mimeType = tex.getMimeType(); // e.g. 'image/jpeg' or 'image/png'
  const ext = mimeType === 'image/jpeg' ? 'jpg' : 'png';
  const image = tex.getImage();

  if (image) {
    const filename = `${name}.${ext}`;
    const filepath = `${TEX_DIR}/${filename}`;
    writeFileSync(filepath, Buffer.from(image));
    textureMap[name] = filename;
    console.log(`  ✓ ${filename} (${(image.byteLength / 1024).toFixed(0)}KB)`);
  }
});

// Print texture map for the component
console.log('\nTexture map for RwenAvatar.tsx:');
console.log(JSON.stringify(textureMap, null, 2));
