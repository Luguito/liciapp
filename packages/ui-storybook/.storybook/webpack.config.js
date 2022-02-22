const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      exclude: /(node_modules|bower_components)|\.d/,
      use: [
        {
          loader: 'ts-loader',
        }, {
          loader: 'react-docgen-typescript-loader',
        }
      ],
      include: path.resolve(__dirname, '../')
    },
    {
      test: /\.(sass|scss)$/,
      use: ['resolve-url-loader'],
      include: path.resolve(__dirname, '../')
    },
    {
      test: /fonts\/.*\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          },
        }
      ],
      include: path.resolve(__dirname, '../')
    },
    {
      test: /.*\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]',
          },
        }
      ],
      include: path.resolve(__dirname, '../')
    },
  );

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
