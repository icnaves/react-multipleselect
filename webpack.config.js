const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'production',
  entry: './src/MultipleSelect.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          // {
          //   // Options for PostCSS as we reference these options twice
          //   // Adds vendor prefixing based on your specified browser support in
          //   // package.json
          //   loader: require.resolve('postcss-loader'),
          //   options: {
          //     // Necessary for external CSS imports to work
          //     // https://github.com/facebook/create-react-app/issues/2677
          //     ident: 'postcss',
          //     plugins: () => [
          //       require('postcss-flexbugs-fixes'),
          //       require('postcss-preset-env')({
          //         autoprefixer: {
          //           flexbox: 'no-2009',
          //         },
          //         stage: 3,
          //       }),
          //     ],
          //     sourceMap: isEnvProduction && shouldUseSourceMap,
          //   },
          // },
          'css-loader',
          'sass-loader',
        ].filter(Boolean)
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ],
  },
  externals: {
    'react': 'commonjs react'
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'styles.css',
      chunkFilename: 'styles.chunk.css',
    }),
  ]
};
