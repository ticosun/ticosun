/**
* 引入jQuery库 及 自定义功能模块实现Tab切换
* Author: ticosun
* 2017/5/8
*/
require.config({
  baseUrl: './js/lib/',
  paths: {
    'jquery': 'jquery-1.11.1/jquery.min',
    'bootstrap': 'bootstrap-3.3.5/bootstrap.min',
    'switchTab': 'component/switchTab'
  },
  shim: {
    'bootstrap': ['jquery']
  }
})
require(['jquery', 'bootstrap', 'switchTab'], function ($, bootstrap, switchTab) {
  $(function () {
    switchTab.init()
  })
})
