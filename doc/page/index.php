<div class="tit">Cubee 手册</div>
<p class="author">Cubee是淘宝北京UED开发并维护的UI库,这里是代码级的开发者手册。</p>
<h2><strong>What's Cubee?</strong></h2>
<!--div class="demo">
	<a class="button" href="../src/box/demo/demo-box.html">演示示例 DEMO</a>
</div-->
<ul class="dec">
	<li>cubee是由淘宝北京UED团队发起、维护的UI库和widget代码库；完全基于YUI3</li>
	<li>UI规范将指导北京数字产品的开发，降低设计和开发成本</li>
	<li>cubee组件力求简单、实用、开源</li>
	<li>任何人都可以参与cubee的开发</li>
</ul>
<h2><strong>维护</strong></h2>
<ul class="dec">
	<li>VD：李超(夏之)</li>
	<li>WD：蒋吉兵(乐渔)、李晶(拔赤)</li>

</ul>
<h2><strong>注意事项</strong></h2>
<ul class="dec">
	<li>代码路径：<a href="http://github.com/cubee/cubee.github.com" target=_blank>http://github.com/cubee/cubee.github.com</a></li>
	<li>全局内容：reset,grid,font等，包含在global.css中，组件开选依赖这些通用样式(可选)</li>
	<li>widget开发时命名空间统一使用类似“Y.MsgBox”的格式，如果是类或构造器（需要new的），使用Y.MsgBox的形式，首字母大写，如果是简单函数，使用Y.dosth的形式，首字母小写，多单词的名称使用驼峰命名，js编码规范不强制</li>
	<li>文件编码统一采用utf-8格式</li>
	<li>css中class的命名格式不强制，推荐使用"c-xx-yy"的格式，id的命名不强制</li>
	<li>在widget开发完成后，需要版本发布之前会有必要的代码review</li>
</ul>

<h2><strong>开发流程</strong></h2>
<ul class="dec">
	<li>参照现有的组件，给你的组件起名字，并在本地设计开发完成</li>
	<li>fork http://github.com/cubee/cubee.github.com</li>
	<li>将你的组件依照“开发须知”添加进sandbox中，调试完成后添加进src中</li>
	<li>你的代码会经过review和测试，并在注释添加完整之后正式发布版本</li>
	<li>请开发者配备完整的demo和readme，一并放在src中，并在调试完成后补充文档</li>
	<li>最后pull your request</li>
	<li>enjoy yourself~</li>
</ul>

<h2><strong>文档撰写</strong></h2>
<ul class="dec">
	<li>开发者整理完整一个模块的源码到src后，应当在这里完善相应的文档</li>
	<li>src中应当包含演示的demo，比如弹出层的demo在src/box/demo中</li>
	<li>文档起始页是start.html</li>
	<li>每个模块的文档页应当在doc/page/中，页面格式参照doc/page/box.php，通过http://url/doc/start.html#box，box为文件名，不包含后缀</li>
	<li>开发者需要整理的内容应当包含：演示、代码示例、API（如果需要）。</li>
	<li>文件编码一律采用urf-8</li>
</ul>
