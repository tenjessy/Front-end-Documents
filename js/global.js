/**
 * @ data:2012-01-10
 * @ �淶�ĵ�ȫ��js
 */

$(function(){
	/**
	 * @ �ճ�λ�������õ���֮���ģ��
	 */
	$("body").css({"padding":"70px 10px 30px 10px"});
	$(".articleArea").css({"margin-left":"220px"});
	/**
	 * @ ���幫��ͷ��
	 */
	var $header = '\
		<div id="header" class="header">\
		<h1 class="logo"><a href="index.html">ҽ����˾-ҽԺӪ������web��������淶</a></h1>\
		</div>\
		';
	
	/**
	 * ���幫��β��
	 */
	var $footer = '\
		<footer id="footer" class="footer">\
		<p>&copy;2011 ҽ����˾ ҽԺӪ�����ļ�����</p>\
		</footer>\
		';

	/**
	 * ���嵼��
	 */
	var $menu = '\
	<div class="menu">\
		<h2 class="hd">�淶Ŀ¼</h2>\
		<ul class="list">\
			<li><b></b><a href="design_spec.html">��ƹ淶</a></li>\
			<li><b></b><a href="css_spec.html">CSS�淶</a></li>\
			<li><b></b><a href="html_spec.html">HTML�淶</a></li>\
			<li><b></b><a href="universal_module.html">ͨ��ģ��</a></li>\
			<li><b></b><a href="universal_solution.html">ͨ�ý������</a></li>\
			<li><b></b><a href="mobile_spec.html">�ƶ��淶����</a></li>\
			<li><b></b><a href="fontFamily_spec.html">���巽��</a></li>\
			<li><b></b><a href="EDM_spec.html">EDM����</a></li>\
		</ul>\
		<h2 class="hd">ʾ������</h2>\
		<ul class="list">\
			<li><b></b><a href="layout_example.html">ģ�鲼��ʾ��</a></li>\
			<li><b></b><a href="fontFamily_spec.html#ascii">��������ƴ����ascii���ձ�</a></li>\
			<li><b></b><a href="reset_demo.html">ͨ��ȫ�ֱ�ǩ����ʾ��</a></li>\
			<li><b></b><a href="mobile_media.html">mediaʾ������</a></li>\
		</ul>\
	</div>\
	';
	
	
	$("body").prepend($header);
	$("body").append($footer);
	$(".header").after($menu);
	
});

