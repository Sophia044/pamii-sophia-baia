const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Resolve o alias @/ para src/ (consistente com tsconfig paths)
config.resolver.alias = {
  '@': path.resolve(__dirname, 'src'),
};

module.exports = withNativeWind(config, { input: './src/global.css' });
