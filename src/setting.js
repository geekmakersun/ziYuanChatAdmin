/** @format */

// 应用配置文件
// 包含API地址、WebSocket配置、路由设置等全局配置项

// 检测运行环境
const isProduction = process.env.NODE_ENV === "production";

// 获取当前主机信息（带端口）
const getCurrentHost = () => {
  const { protocol, hostname, port } = window.location;
  return `${hostname}${port ? `:${port}` : ""}`;
};

// 构建完整的WebSocket URL
const buildWsUrl = () => {
  // 根据HTTP协议选择WebSocket协议
  const wsProtocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const host = getCurrentHost();
  // 添加默认的WebSocket路径
  return `${wsProtocol}//${host}/ws/admin`;
};

// API基础地址配置
const VUE_APP_API_URL = process.env.VUE_APP_API_URL || `${window.location.origin}/api/admin`;

// WebSocket地址配置
const VUE_APP_WS_ADMIN_URL = process.env.VUE_APP_WS_ADMIN_URL || buildWsUrl();

const Setting = {
  // 基本配置
  appName: "子源客服系统", // 应用名称
  version: "1.0.0", // 应用版本

  // 接口请求配置
  apiBaseURL: VUE_APP_API_URL, // 接口请求基础地址
  apiTimeout: 60000, // API请求超时时间（毫秒）
  retryCount: 0, // 请求失败自动重试次数

  // WebSocket配置
  wsSocketUrl: VUE_APP_WS_ADMIN_URL, // WebSocket连接地址
  wsReconnectInterval: 3000, // WebSocket重连间隔（毫秒）
  wsMaxReconnectAttempts: 5, // 最大重连次数

  // 路由配置
  routerMode: "history", // 路由模式：'history' 或 'hash'
  publicPath: process.env.BASE_URL || "/", // 项目基础路径

  // UI相关配置
  showProgressBar: true, // 页面切换时是否显示进度条
  sidebarLogo: true, // 是否显示侧边栏Logo
  fixedHeader: false, // 是否固定头部

  // 缓存配置
  tokenKey: "admin_token", // 存储token的key
  userInfoKey: "admin_user_info", // 存储用户信息的key
  cacheExpireTime: 3600, // 缓存过期时间（秒）

  // 开发配置
  debug: !isProduction, // 是否开启调试模式
  mock: !isProduction, // 是否使用Mock数据

  // 权限配置
  usePermission: true, // 是否使用权限控制

  // 国际化配置
  i18n: {
    locale: "zh-CN", // 默认语言
    fallbackLocale: "zh-CN", // 备用语言
    availableLocales: ["zh-CN", "en-US"], // 可用语言列表
  },
};

module.exports = Setting;
