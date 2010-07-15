<div class="tit">Y.tipInput 文本输入框</div>
<p class="author">最后更新日期：2010-10-12  by 李晶(拔赤) lijing00333@163.com</p>
<h2><strong>DEMO</strong></h2>
<div class="demo">
	<a class="button" href="../src/tip-input/demo/demo.html">DEMO</a>
</div>
<h2><strong>NOTE</strong></h2>
<ul class="dec">
	<li>基于YUI3</li>
	<li>常用于包含默认值的input</li>
	<li>并不对tipInput的值做验证，只是对默认值的行为做了简单处理</li>
	<li>可以通过new Y.tipInput().input得到input（yui3-node）</li>
	<li>依赖node</li>
	<li>需要定义样式lightgray，用来定义默认状态的input样式</li>
	<li>在ie6,ie7,firefox2,firefox3.0/3.5/3.6,safari4.0,opera9.62,chrome3.0下测试通过</li>
</ul>
<h2><strong>USEAGE</strong></h2>
<div class="dec">
	<p>种子的引入</p>
	<p>引用方法如下</p>
	<pre class="brush: js;">
var Y = YUI({
	combine:true,
	modules:{
		'tip-input':{//默认皮肤
			fullpath:'../tipinput.js',
			requires:['node']
		}
	}
}).use('tip-input');
	</pre>
	<p>新建一个Y.tipInput对象</p>
	<pre class="brush: js;">
//生成实例
Y.use('tip-input',function(Y){
	//普通状态
	new Y.tipInput('Input_1');
	//传值
	new Y.tipInput('Input_2',{
		autoSelecte:true
	});
});
	</pre>
</div><!--/dec-->
<h2><strong>API</strong></h2>
<dl class="dec">
	<!--构造器-->
	<dt>Y.tipInput 构造器</dt>
	<dd>
		<dl>
			<dt>说明：</dt>	
			<dd>文本输入框</dd>
			<dt>使用：</dt>	
			<dd>new Y.tipInput(node,config);</dd>
			<dt>参数：</dt>	
			<dd>
				<p><b>node</b>:{yui3-node | string } yui3 node对象或者字符串类型</p>
				<p><b>config</b>:{object}配置项</p>
			</dd>
			<dt>配置：</dt>	
			<dd>
				<p><b>autoSelecte</b>:{boolean} 是否点选的时候选中</p>
			</dd>
		</dl>
	</dd>
</dl>
