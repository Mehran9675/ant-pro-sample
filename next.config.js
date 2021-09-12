const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  lessVarsFilePath: "./public/styles/variables.less",
  webpack(config) {
    return config;
  },
});
