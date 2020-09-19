const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const os = require('os');
const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
// const happyThreadPool = HappyPack.ThreadPool({ size: 2 });

const srcDir = path.join(__dirname, '../src');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/main.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunk:8].js',
    // publicPath: '/',
    chunkFilename: 'chunk/[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        include: [srcDir],
        exclude: /(node_modules|bower_componets)/,
        use: ['happypack/loader?id=happybabel'],
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?gif|svg)(\?.*)?$/,
        use: ['url-loader'],
        include: [srcDir],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: ['url-loader'],
        include: [srcDir],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)$/,
        use: ['url-loader'],
        include: [srcDir],
      },
    ],
  },
  plugins: [
    // 开启 happypack 的线程池
    new HappyPack({
      id: 'happybabel',
      loaders: ['babel-loader?cacheDirectory=true'],
      ThreadPool: happyThreadPool,
      cache: true,
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`,
    }),
    new CopyWebpackPlugin([
      {
        from: `${srcDir}/assets/images/pieors.jpg`,
        to: `pieors.jpg`,
      },
    ]),
  ],
  resolve: {
    alias: {
      '@': srcDir,
      '@pages': `${srcDir}/pages`,
    },
  },
};