/**
 * 生产环境
 */
;(function () {
  window.SITE_CONFIG = {};

  // api接口请求地址
  window.SITE_CONFIG['baseUrl'] = 'http://172.16.48.105:9080/tangshan-back/';
  window.SITE_CONFIG['wsUrl'] = 'ws://172.16.48.105:9080/tangshan-back/imserver/';
  // window.SITE_CONFIG['baseUrl'] = 'http://221.194.106.171:9080/tangshan-back/';
  // window.SITE_CONFIG['wsUrl'] = 'ws://221.194.106.171:9080/tangshan-back/imserver/';

  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain']  = './'; // 域名
  window.SITE_CONFIG['version'] = '';   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl']  = window.SITE_CONFIG.domain + window.SITE_CONFIG.version;
})();
