/**
 * 引入jQuery库 及 自定义功能模块实现Tab切换
 * Author: Avenstar
 * 2017/2/17
 */
require.config({
	baseUrl : './js/lib/',
	paths: {
		'jquery' : 'jquery-1.11.1/jquery.min',  /*引入jQuery库*/
        'bootstrap' : 'bootstrap-3.3.5/bootstrap.min',
        'switchTab' : 'component/switchTab' 
	},
    /*shim参数中，指定了模块名称和它的依赖数组*/
    shim: {
        'bootstrap' : ['jquery']  /*Bootstrap's JavaScript requires jQuery*/
    }
})
//按需加载
require(['jquery','bootstrap', 'switchTab'], function($, bootstrap, switchTab){
	$(function(){
		//初始化
		switchTab.init();
	})
})
