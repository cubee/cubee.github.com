<div class="tit">combo脚本</div>
<p class="author">最后更新日期：2010-07-11  by 李晶 lijing00333@163.com</p>
<h2><strong>项目地址</strong></h2>
<div class="demo">
	<a class="button" href="http://github.com/jayli/combo">http://github.com/jayli/combo</a>
</div>
<h2><strong>NOTE</strong></h2>
<ul class="dec">
	<li>自动合并/压缩脚本</li>
	<li>要求php5及以上版本</li>
	<li>程序在找不到本地文件的情况下，会去指定的cdn上找同名文件</li>
	<li>需要定义combo.php和minify.php中的$YOUR_CDN变量</li>
	<li>如果只是合并压缩local文件，则不必重置$YOUR_CDN变量</li>
	<li>程序执行：程序会去线上取同名文件，用以方便在开发环境中的调试<br />
	<img src="assets/images/combo.jpg" />
	</li>
	<li>基本原理：<a href="http://www.uedmagazine.com/ued/comments.php?y=10&m=05&entry=entry100531-114633">基于YUI combo的代码自动压缩及合并 </a></li>
	<li>实践：<a href="http://www.uedmagazine.com/ued/comments.php?y=10&m=06&entry=entry100607-191844">基于YUI3 combo的实践 </a></li>
</ul>
<h2><strong>USEAGE</strong></h2>
<div class="dec">
	<p>文件列表</p>
	<p>
		combo.php 合并文件，不压缩
	</p>
	<p>
		minify.php 合并压缩文件
	</p>
	<p>
		cssmin.php 压缩css
	</p>
	<p>
		jsmin.php 压缩js
	</p>
</div><!--/dec-->