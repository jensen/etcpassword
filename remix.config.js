/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "src",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "netlify/functions/server/build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
};
