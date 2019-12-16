const path = require('path');
const modulesincludePath1 = path.resolve(__dirname, '../src/components');
const modulesincludePath= path.resolve(__dirname, '../src/*');

const includePath = path.resolve(__dirname, '..');
const nodemodulesPath = path.resolve(__dirname, '../node_modules/*');
console.log(modulesincludePath);

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [

      {
        test: /(\.css)$/,
        // include: includePath,
        // exclude:[nodemodulesPath, modulesincludePath],
        include: [
        path.resolve(__dirname, "../")
      ],
      exclude: [
        /\.module\./,
        path.resolve(__dirname, "../src/*"),
        path.resolve(__dirname, '../node_modules/*')
      ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
   //          options: {
   //  importLoaders: 1,
   //  modules: true,
   //  minimize: true,
   //  sourceMap: true
   // }
          },
        ],
      },
      {
        test: /(\.module\.css)$/,
              include:     path.resolve(__dirname, "../"),
              // exclude: /node_modules/,
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                  options: {
          importLoaders: 1,
          modules: true,
          minimize: true,
          sourceMap: true
         }
                },
              ],
            },
      {
        test: /\.(woff|woff2|eot|ttf|svg|png|jpg|jpeg)$/,
        include: includePath,
        use: 'url-loader'
      }
    ],
  },
};
