const postcss = require('rollup-plugin-postcss');
const images = require('rollup-plugin-images');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({
        modules: true,
      }),
      images({
        include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
      }),
      ...config.plugins,
    ];

    return config;
  },
};
