const nodeExternals = require(`webpack-node-externals`);

module.exports = {
  externals: [nodeExternals()],
  optimization: { minimize: !!process.env.production },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-typescript`, `@babel/preset-env`],
            plugins: [
              `@babel/plugin-transform-runtime`,
              `@babel/plugin-proposal-class-properties`,
              `@babel/plugin-transform-object-assign`,
              `@babel/plugin-proposal-object-rest-spread`
            ]
          }
        }
      }
    ]
  }
};
