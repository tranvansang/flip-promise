const corejs = 3
module.exports = api => {
  api.cache(true)
  return {
    presets: [
      ['@babel/preset-env', {modules: 'commonjs', useBuiltIns: 'entry', corejs}],
      ['@babel/preset-typescript', {isTSX: true, allExtensions: true}]
    ],
    plugins: [
      //comment the following line will make test pass
      ['@babel/plugin-transform-runtime', {corejs}]
    ]
  }
}
