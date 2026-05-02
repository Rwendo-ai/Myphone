const path = require('path');
const fs = require('fs');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Allow Metro to bundle .glb 3D model files
config.resolver.assetExts.push('glb', 'gltf', 'bin');

config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_conditionNames = ['require', 'default'];

// ─── Subpath-export workaround for `well-known-symbols` ───────────────────
//
// Metro's package-exports resolver doesn't handle subpath keys with dots in
// them (e.g. `./Symbol.asyncIterator/auto`). The package and target files
// are installed correctly, but Metro can't follow the exports map. We map
// `well-known-symbols/Symbol.X/auto` style imports directly to the file
// path on disk before falling back to the standard resolver.
//
// This is needed because `@livekit/react-native` (a transitive dep of
// `@elevenlabs/react-native`) requires several `well-known-symbols/*` paths
// at module-load time. Without this shim Metro fails the bundle with
// `Unable to resolve module well-known-symbols/Symbol.asyncIterator/auto`.
const wellKnownSymbolsDir = path.join(
  __dirname,
  'node_modules',
  'well-known-symbols',
);

const originalResolver = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName.startsWith('well-known-symbols/')) {
    const subpath = moduleName.substring('well-known-symbols/'.length);
    const candidate = path.join(wellKnownSymbolsDir, subpath + '.js');
    if (fs.existsSync(candidate)) {
      return { type: 'sourceFile', filePath: candidate };
    }
    const candidateIndex = path.join(wellKnownSymbolsDir, subpath, 'index.js');
    if (fs.existsSync(candidateIndex)) {
      return { type: 'sourceFile', filePath: candidateIndex };
    }
  }
  if (originalResolver) {
    return originalResolver(context, moduleName, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
