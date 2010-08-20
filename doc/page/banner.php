<div class="tit">Y.Banner 对联广告</div>
<p class="author">最后更新日期：2010-08-17  by 李晶(拔赤) lijing00333@163.com</p>
<h2><strong>DEMO</strong></h2>
<div class="demo">
	<a class="button" href="../src/banner/demo/demo.html">DEMO</a>
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
		
		'banner':{
			fullpath:'../banner.js',
			requires:['anim','node']
		}
	}
}).use('banner',function(Y){
	//your code
});
	</pre>
	<p>新建一个Y.Banner对象</p>
	<pre class="brush: js;">
new Y.Banner({
	width:90,
	height:200,
	imgs:[
		{
			img:'1.jpg',
			href:''
		},
		{
			img:'2.jpg',
			href:''
		}
	],
	span:950,
	scroll:true
});
	</pre>
</div><!--/dec-->
<h2><strong>API</strong></h2>
<dl class="dec">
	<!--构造器-->
	<dt>Y.Banner 构造器</dt>
	<dd>
		<dl>
			<dt>说明：</dt>	
			<dd>对联广告构造</dd>
			<dt>使用：</dt>	
			<dd>new Y.Banner(config);</dd>
			<dt>参数：</dt>	
			<dd>
				<p><b>config</b>:{object}配置项</p>
			</dd>
			<dt>配置：</dt>	
			<dd><p><b>width</b>:{Number} 广告宽度，默认为300</p>
				<p><b>height</b>:{number} 广告高度，默认300</p>
				<p><b>span</b>:{number} 对联中间的跨度，默认300</p>
				<p><b>scroll</b>:{boolean} 是否随着页面上下滚动，默认为true</p>
				<p><b>anim</b>:{boolean} 滚动过程是否为动画显示，默认为true</p>
				<p><b>top</b>:{number} 对联距头部高度，默认100</p>
				<p><b>spread</b>:{boolean} 页面宽度太窄时，广告是否往中间挤压，默认为false</p>
				<p><b>text</b>:{string} 关闭的文案，默认为'x'</p>
				<p><b>closeable</b>:{boolean} 是否显示关闭按钮，默认为true</p>
				<p><b>autoHide</b>:{boolean} 浏览器宽度不够时是否自动隐藏，默认为true</p>

			</dd>
			<dt>方法：</dt>	
			<dd><p><b>hide</b>:隐藏广告</p>

			</dd>
		</dl>
	</dd>
</dl>

