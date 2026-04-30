const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Allow Metro to bundle .glb 3D model files
config.resolver.assetExts.push('glb', 'gltf', 'bin');

config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_conditionNames = ['require', 'default'];

module.exports = config;
