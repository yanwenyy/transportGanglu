/**
 * 开发环境
 */
;(function () {
  window.SITE_CONFIG = {};

  // api接口请求地址
  // window.SITE_CONFIG['baseUrl'] = 'http://59.110.54.1:8080/jinding-back/';
  // window.SITE_CONFIG['wsUrl'] = 'ws://59.110.54.1:8080/jinding-back/imserver/';
  window.SITE_CONFIG['baseUrl'] = 'http://27.188.74.31:9080/jinding-back/';
  window.SITE_CONFIG['wsUrl'] = 'ws://27.188.74.31:9080/jinding-back/imserver/';

  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain']  = './'; // 域名
  window.SITE_CONFIG['version'] = '';   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl']  = window.SITE_CONFIG.domain + window.SITE_CONFIG.version;
})();
