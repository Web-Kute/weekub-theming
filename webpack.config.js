// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { postcss } = require('autoprefixer');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: 'js/[name].js',
    publicPath: '',
    clean: true,
    assetModuleFilename: 'images/[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    hot: true,
    host: 'localhost',
    compress: true,
    historyApiFallback: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/images'), // Dossier source
          to: path.resolve(__dirname, 'public/assets/images'), // Dossier destination
        },
        {
          from: path.resolve(__dirname, 'src/fonts'),
          to: path.resolve(__dirname, 'public/assets/fonts'),
          toType: 'dir', // Ensure directory structure is preserved
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: 'css/styles.min.css',
      chunkFilename: '[id].css',
    }),
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          stylesHandler,
          {
            loader: 'css-loader',
            options: {
              url: true,
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ico|png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
          publicPath: '',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: ({ filename }) => {
            // Extract the immediate parent folder (e.g., roboto, roboto-slab)
            const relativePath = path.relative(
              path.resolve(__dirname, 'src/fonts'),
              filename
            );
            const folder = path.dirname(relativePath).split(path.sep)[0];
            return `fonts/${folder}/[name][ext]`;
          },
          publicPath: '',
        },
        include: path.resolve(__dirname, 'src/fonts'),
      },

    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};