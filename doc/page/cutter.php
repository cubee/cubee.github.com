<div class="tit">Y.Cutter 图片展示</div>
<p class="author">最后更新日期：2010-10-12  by 李晶(拔赤) lijing00333@163.com</p>
<h2><strong>DEMO</strong></h2>
<div class="demo">
	<a class="button" href="../src/cutter/demo/demo.html">DEMO</a>
</div>
<h2><strong>NOTE</strong></h2>
<ul class="dec">
	<li>基于YUI3</li>
	<li>在ie6,ie7,firefox2,firefox3.0/3.5/3.6,safari4.0,opera9.62,chrome3.0下测试通过</li>
</ul>
<h2><strong>USEAGE</strong></h2>
<div class="dec">
	<p>种子的引入</p>
	<p>引用方法如下</p>
	<pre class="brush: js;">
YUI({
	modules:{
		'cutter':{
			fullpath:'../cutter.js',
			requires:['node','anim','cutter-skin']
		},
		'cutter-skin':{
			fullpath:'../assets/skin.css',
			type:'css'
		}
	}
}).use('cutter',function(Y){
	//your code
});
	</pre>
	<p>新建一个Y.Cutterp对象</p>
	<pre class="brush: js;">
//生成实例
var cons = Y.all('.mybox .cutter-mojo');
cons.each(function(node){
	new Y.Cutter(node);
});
	</pre>
</div><!--/dec-->
<h2><strong>API</strong></h2>
<dl class="dec">
	<!--构造器-->
	<dt>Y.Cutter构造器</dt>
	<dd>
		<dl>
			<dt>说明：</dt>	
			<dd>图片展示</dd>
			<dt>使用：</dt>	
			<dd>new Y.Cutter(node,config);</dd>
			<dt>参数：</dt>	
			<dd>
				<p><b>node</b>:{yui3-node}yui3 node对象</p>
				<p><b>config</b>:{object}配置项</p>
			</dd>
			<dt>配置：</dt>	
			<dd><p><b>out_speed</b>:{number} 移出速度，默认为0.3</p>
				<p><b>in_speed</b>:{number} 移入速度，默认为0.5</p>
			</dd>
		</dl>
	</dd>
</dl>
