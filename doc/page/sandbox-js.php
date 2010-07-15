<div class="tit">Sandbox-js 模块树的动态构建</div>
<p class="author">最后更新日期：2010-10-12  by 李晶(拔赤) lijing00333@163.com</p>
<h2><strong>项目地址</strong></h2>
<div class="demo">
	<a class="button" href="http://github.com/jayli/sandbox">http://github.com/jayli/sandbox</a>
</div>
<h2><strong>NOTE</strong></h2>
<ul class="dec">
	<li>实现类似yuiloader的一种模块管理机制</li>
	<li>类似YUI的代码组织风格</li>
	<li>什么都不依赖</li>
	<li>他很好玩</li>
</ul>
<h2><strong>USEAGE</strong></h2>
<div class="dec">
	<p>种子的引入</p>
	<pre class="html">
<script type="text/javascript" src="sandbox-seed.js"></script>
	</pre>
	<p>页面中的代码书写</p>
	<pre class="js">
//在domready后执行回调中的逻辑，js/tab.js的依赖由tab.js去定义
Sandbox.ready(function(S){
	S.Demo.init();
},{requires:['js/tab.js']});
	</pre>
	<p>模块中的代码书写</p>
	<pre class="js">
Sandbox.add('tab',function(S){
	S.namespace('S.Demo');
	S.Demo.init = function(){
		//模块的代码
	};
},{requires:[
	//这个模块依赖的文件
	'http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js',
	'http://ilikejquery.com/switchable/css/demo.css'
]});
	</pre>
	<p>使用已有的模块</p>
	<pre class="js">
//当event已经加载后，可以通过use方法来调用
Sandbox.use('event').add('node',function(S){
	//你的代码
});
	</pre>
</div><!--/dec-->
<h2><strong>DEMO</strong></h2>
<div class="demo">
	<a class="button" href="http://jayli.github.com/sandbox/examples/jq-tab.html">DEMO</a>
</div>
<h2><strong>API</strong></h2>
<dl class="dec">
	<!--构造器-->
	<dt>Sandbox的方法</dt>
	<dd>
		<dl>
			<dt>说明：</dt>	
			<dd>动态模块加载</dd>
			<dt>使用：</dt>	
			<dd>将种子文件引入进来之后会有Sandbox</dd>
			<dt>API：</dt>	
			<dd>
				<p><b>add</b>Sandbox.add(mojoname,callback,config),使用add添加模块的代码</p>
				<p><b>namespace</b>ui的namespace在闭包中对上下文要求太苛刻，重写之，只判断是否存在，不做类型处理</p>
				<p><b>ready</b>Sandbox.ready(callback,config)，开启沙箱,配置项中包含requires:[]，成员为外部脚本的fullpath</p>
				<p><b>use</b>使用已有的模块</p>
				<p><b>run</b>主线程开始调用各自的沙箱回调</p>
				<p><b>loadScript</b>Sandbox.loadScript(url, callback),load脚本</p>
				<p><b>loadCSS</b>load样式</p>
				<p><b>UA</b>浏览器嗅探，来自yui3</p>
			</dd>
		</dl>
	</dd>
</dl>
