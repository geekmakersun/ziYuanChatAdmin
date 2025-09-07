/** @format */

const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

// 环境变量
const env = process.env.NODE_ENV;
const isProduction = env === "production";

module.exports = {
  // 项目部署基础路径
  // 在新版本Vue CLI中，publicPath替代了baseUrl
  publicPath: "/admin/",

  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: false,

  // 是否为生产环境构建生成 source map
  // 设置为false可以加速生产环境构建并保护源代码
  productionSourceMap: false,

  // webpack配置
  chainWebpack: (config) => {
    // 设置路径别名
    config.resolve.alias.set("@", resolve("src")).set("_c", resolve("src/components"));
  },

  // webpack配置
  configureWebpack: {
    // 开发环境优化
    devtool: isProduction ? false : "source-map",

    // 性能优化
    performance: {
      hints: isProduction ? "warning" : false,
    },
  },

  // 开发服务器配置
  devServer: {
    // 端口号
    port: 8080,

    // 自动打开浏览器
    open: true,

    // 代理配置（解决跨域）
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },

  // CSS相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: isProduction,

    // 开启 CSS source maps
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      // 可以在此处配置各种css预处理器的选项
    }
  },
};
