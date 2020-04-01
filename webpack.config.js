module.exports = {
  target: "webworker",
  entry: "./dist/main.js",
  mode: "production",
  context: __dirname,
  node: {
    fs: "empty"
  }
};
