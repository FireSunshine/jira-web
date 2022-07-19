const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#5e90b8', '@font-size-base': '16px' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
