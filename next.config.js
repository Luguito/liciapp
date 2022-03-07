const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material', // If @mui/icons-material is being used
]);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

require('dotenv').config({
  path: '.env',
});

module.exports = withBundleAnalyzer(
  withTM({
    env:{
      UI_BACKEND_URI: process.env.UI_BACKEND_URI,
    },
    // Client-side available env variables.
    serverRuntimeConfig: {},
    // Any variable not listed here won't be available on the browser.
    publicRuntimeConfig: {
      UI_BACKEND_URI: process.env.UI_BACKEND_URI,
      LOGIN_URL: process.env.LOGIN_URL,
      PROJECT_URI: process.env.PROJECT_URI,
      GUEST_URI: process.env.GUEST_URI
    },
    images: {
      domains: ['s3.amazonaws.com'],
    },
    webpack: (config) => {
      // font-loading
      config.resolve.alias = {
        ...config.resolve.alias,
        '@mui/styled-engine': '@mui/styled-engine-sc',
      };
      config.module.rules.push({
        test: /\.(svg|eot|ttf|woff|woff2|otf)$/,
        use: {
          loader: 'url-loader',
          query: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      });
      return config;
    },
  }),
);
