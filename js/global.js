/**
 * @ data:2012-01-10
 * @ 规范文档全局js
 */

$(function(){
	/**
	 * @ 空出位置来放置导航之类的模块
	 */
	$("body").css({"padding":"70px 10px 30px 10px"});
	$(".articleArea").css({"margin-left":"220px"});
	/**
	 * @ 定义公共头部
	 */
	var $header = '\
		<div id="header" class="header">\
		<h1 class="logo"><a href="index.html">医网公司-医院营销中心web设计制作规范</a></h1>\
		</div>\
		';
	
	/**
	 * 定义公共尾部
	 */
	var $footer = '\
		<footer id="footer" class="footer">\
		<p>&copy;2011 医网公司 医院营销中心技术部</p>\
		</footer>\
		';

	/**
	 * 定义导航
	 */
	var $menu = '\
	<div class="menu">\
		<h2 class="hd">规范目录</h2>\
		<ul class="list">\
			<li><b></b><a href="design_spec.html">设计规范</a></li>\
			<li><b></b><a href="css_spec.html">CSS规范</a></li>\
			<li><b></b><a href="html_spec.html">HTML规范</a></li>\
			<li><b></b><a href="universal_module.html">通用模块</a></li>\
			<li><b></b><a href="universal_solution.html">通用解决方案</a></li>\
			<li><b></b><a href="mobile_spec.html">移动规范方案</a></li>\
			<li><b></b><a href="fontFamily_spec.html">字体方案</a></li>\
			<li><b></b><a href="EDM_spec.html">EDM方案</a></li>\
		</ul>\
		<h2 class="hd">示例代码</h2>\
		<ul class="list">\
			<li><b></b><a href="layout_example.html">模块布局示例</a></li>\
			<li><b></b><a href="fontFamily_spec.html#ascii">中文字体拼音及ascii对照表</a></li>\
			<li><b></b><a href="reset_demo.html">通用全局标签重置示例</a></li>\
			<li><b></b><a href="mobile_media.html">media示例代码</a></li>\
		</ul>\
	</div>\
	';
	
	
	$("body").prepend($header);
	$("body").append($footer);
	$(".header").after($menu);
	
});

