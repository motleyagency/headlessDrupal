require('ignore-styles');
require('@babel/polyfill');
require('@babel/register')({
  ignore: [/\/(build|node_modules)\//],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [['transform-assets', {
    extensions: ['svg'],
    name: '/static/media/[name].[hash:8].[ext]'
  }]]
});

require('./server');
