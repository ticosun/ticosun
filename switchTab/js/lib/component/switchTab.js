/*
 * 选项卡切换功能模块
 * Author: Avenstar
 * 2017/2/17
 * 
 * require函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象。
 * exports对象是当前模块的导出对象，用于导出模块公有方法和属性。
 * 别的模块通过require函数使用当前模块时得到的就是当前模块的exports对象。
 */
define(function(require, exports){
	//声明一个对象
	var switchTab = {};
	//初始化
	switchTab.initMain = function(){
		//初始化事件
		switchTab.init_event();
	}
	
	//初始化事件
	switchTab.init_event = function(){
		var $navTab = $("#nav-tab"), //选项卡对象
	        $tabCont = $(".tab-content"), //选项卡内容
	        $tabContList = $tabCont.find(".table-div"); //选项卡内容列表
	    //选项卡事件绑定
	    $navTab.on("click", "li", function(){
	        var $that = $(this);
	        //获取当前索引值
	        var navIndex = $that.attr("index"); 
	        //当前点击li添加active类，同级兄弟节点移除active类
	        $that.addClass("active").siblings().removeClass("active"); 
	        //当当前点击选项卡navIndex值与表格列表索引tabIndex值相等时显示，否则隐藏
	        $tabContList.each(function(i){
	            var $that = $(this);
	            var tabIndex = $that.attr("tab-index"); //表格列表索引
	            if(navIndex===tabIndex){
	                $that.show();
	            }else{
	                $that.hide();
	            }
	        })
	    });
	}
	
	//暴露初始化方法
	exports.init = switchTab.initMain;
})
