// Reads the Draco-compressed merged file and writes it uncompressed
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import draco3d from 'draco3d';
import { resolve } from 'path';
import { statSync } from 'fs';

const INPUT  = resolve('./assets/rwen/rwen_complete.glb');
const OUTPUT = resolve('./assets/rwen/rwen_final.glb');

// Read with Draco decoder
const ioWithDraco = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  });

console.log('Reading (Draco-compressed)...');
const doc = await ioWithDraco.read(INPUT);
console.log(`Animations: ${doc.getRoot().listAnimations().map(a => a.getName()).join(', ')}`);

// Write WITHOUT Draco — plain NodeIO, no extensions
const ioPlain = new NodeIO();
console.log('Writing (uncompressed)...');
await ioPlain.write(OUTPUT, doc);

const size = (statSync(OUTPUT).size / 1024 / 1024).toFixed(1);
console.log(`\n✅ rwen_final.glb = ${size}MB (uncompressed, React Native ready)`);
