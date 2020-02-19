const nodeExternals = require(`webpack-node-externals`);

module.exports = {
  ...(process.env.NODE_ENV === `production`
    ? {}
    : {
        devtool: `inline-source-map`,
        optimization: { minimize: false }
      }),
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(m?js|ts)$/,
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
