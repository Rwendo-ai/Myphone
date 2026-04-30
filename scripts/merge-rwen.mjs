import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { resolve } from 'path';
import draco3d from 'draco3d';

const RWEN_DIR = resolve('./assets/rwen');

// Animation files to merge — name maps to our animation system
const ANIMATIONS = [
  { file: 'arise.glb',      name: 'arise' },
  { file: 'victory.glb',    name: 'victory' },
  { file: 'wrong.glb',      name: 'wrong' },
  { file: 'hipdance.glb',   name: 'hipdance' },
  { file: 'breakdance.glb', name: 'breakdance' },
  { file: 'backflip.glb',   name: 'backflip' },
  { file: 'powerspin.glb',  name: 'powerspin' },
  { file: 'runfast.glb',    name: 'runfast' },
  { file: 'running.glb',    name: 'running' },
  { file: 'walking.glb',    name: 'walking' },
];

async function main() {
  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({
      'draco3d.decoder': await draco3d.createDecoderModule(),
      'draco3d.encoder': await draco3d.createEncoderModule(),
    });

  console.log('Loading base model (idle)...');
  const baseDoc = await io.read(`${RWEN_DIR}/idle.glb`);

  // Name the idle animation
  const idleAnim = baseDoc.getRoot().listAnimations()[0];
  if (idleAnim) idleAnim.setName('idle');

  // Build a name → node map from the base document
  const baseNodesByName = {};
  for (const node of baseDoc.getRoot().listNodes()) {
    baseNodesByName[node.getName()] = node;
  }

  console.log(`Base has ${Object.keys(baseNodesByName).length} nodes`);

  for (const { file, name } of ANIMATIONS) {
    console.log(`Merging animation: ${name}...`);
    try {
      const animDoc = await io.read(`${RWEN_DIR}/${file}`);
      const animations = animDoc.getRoot().listAnimations();

      if (animations.length === 0) {
        console.log(`  No animations found in ${file}, skipping`);
        continue;
      }

      const srcAnim = animations[0];

      // Create a new animation in the base document
      const newAnim = baseDoc.createAnimation(name);

      // For each channel, remap sampler and target node to base document
      for (const channel of srcAnim.listChannels()) {
        const srcSampler = channel.getSampler();
        const srcTarget = channel.getTargetNode();
        const targetPath = channel.getTargetPath();

        if (!srcTarget || !srcSampler) continue;

        const targetName = srcTarget.getName();
        const baseNode = baseNodesByName[targetName];

        if (!baseNode) {
          console.log(`  Warning: node "${targetName}" not found in base`);
          continue;
        }

        // Copy input (times) accessor
        const srcInput = srcSampler.getInput();
        const newInput = baseDoc.createAccessor()
          .setType(srcInput.getType())
          .setArray(srcInput.getArray().slice())
          .setBuffer(baseDoc.getRoot().listBuffers()[0]);

        // Copy output (values) accessor
        const srcOutput = srcSampler.getOutput();
        const newOutput = baseDoc.createAccessor()
          .setType(srcOutput.getType())
          .setArray(srcOutput.getArray().slice())
          .setBuffer(baseDoc.getRoot().listBuffers()[0]);

        // Create sampler in base doc
        const newSampler = baseDoc.createAnimationSampler()
          .setInput(newInput)
          .setOutput(newOutput)
          .setInterpolation(srcSampler.getInterpolation());

        newAnim.addSampler(newSampler);

        // Create channel in base doc targeting the base node
        const newChannel = baseDoc.createAnimationChannel()
          .setSampler(newSampler)
          .setTargetNode(baseNode)
          .setTargetPath(targetPath);

        newAnim.addChannel(newChannel);
      }

      console.log(`  ✓ ${name} merged`);
    } catch (e) {
      console.log(`  Error merging ${name}: ${e.message}`);
    }
  }

  const outputPath = `${RWEN_DIR}/rwen_complete.glb`;
  console.log(`\nWriting combined file to ${outputPath}...`);
  await io.write(outputPath, baseDoc);

  const { statSync } = await import('fs');
  const size = statSync(outputPath).size;
  console.log(`\n✅ Done! rwen_complete.glb = ${(size / 1024 / 1024).toFixed(1)}MB`);
  console.log('(vs 132MB for 11 separate files)');
}

main().catch(console.error);
