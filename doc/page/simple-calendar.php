<div class="tit">Y.Scalendar 简单日历</div>
<p class="author">最后更新日期：2010-07-12  by lijing00333@163.com 李晶(拔赤)</p>
<h2><strong>DEMO</strong></h2>
<div class="demo">
	<a class="button" href="../src/simple-calendar/demo/demo.html">DEMO</a>
</div>
<h2><strong>NOTE</strong></h2>
<ul class="dec">
	<li>基于YUI3</li>
	<li>简单场景中使用</li>
	<li>在ie6,ie7,firefox2,firefox3.0/3.5/3.6,safari4.0,opera9.62,chrome3.0下测试通过</li>
</ul>
<h2><strong>USEAGE</strong></h2>
<div class="dec">
	<p>种子的引入</p>
	<p>需要两个文件，皮肤assets/skin.css和simple-calendar.js，引用方法如下</p>
	<pre class="brush: js;">
modules:{
	'calendar-skin-default':{//默认皮肤
		fullpath:'assets/skin.css',
		type:'css'
	},
	'calendar':{
		fullpath:'simple-calendar.js',
		requires:['calendar-skin-default','node']
	}
}
	</pre>
	<p>新建一个Y.Scalendar对象</p>
	<pre class="brush: js;">
new Y.Scalendar(Y.Node.get('#c1'),function(d){
	Y.log(d);
},{});
	</pre>
	<p>更多实例代码参照<a href="#">demo</a></p>
</div><!--/dec-->
<h2><strong>API</strong></h2>
<dl class="dec">
	<!--构造器-->
	<dt>Y.Calendar构造器</dt>
	<dd>
		<dl>
			<dt>说明：</dt>	
			<dd>日历构造器</dd>
			<dt>使用：</dt>	
			<dd>new Y.Scalendar(node,callback,options);</dd>
			<dt>参数：</dt>	
			<dd><p><b>id</b>:{object} 触点的node对象</p>
				<p><b>callback</b>:{function} 回调</p>
				<p><b>options</b>:{object} 配置项</p></dd>
			<dt>配置：</dt>	
			<dd><p><b>date</b>:{string or date} 默认选中的面板，(2009/02/02)</p>
				<p><b>selectedate</b>:{string or date} 当前选择的日期 (2009/02/02)</p>
				<p><b>easing</b>:{object} 展开的动画效果，默认为Y.Easing.elasticOut</p>
				<p><b>duration</b>:{number} 展开的速度，默认为0.9</p>
				<p><b>closeable</b>:{boolean} 是否单选就关闭,默认为true</p>
			</dd>
		</dl>
	</dd>
	<!--实例方法-->
	<dt>Y.Scalendar 方法</dt>
	<dd>
		<dl>
			<dt>方法：</dt>
			<dd>
				<p><b>init</b>:初始化，new的时候调用，一般用不着</p>
				<p><b>render(o)</b>:渲染，o为option</p>
				<p><b>show</b>:显示</p>
				<p><b>hide</b>:隐藏</p>
				<p><b>monthAdd</b>:显示下一月</p>
				<p><b>monthMinus</b>:显示上一月</p>
			</dd>
			<dt>事件类型：</dt>
			<dd>
				<p>无</p>
			</dd>
		</dl>
	</dd>
</dl>
