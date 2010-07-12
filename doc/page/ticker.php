<div class="tit">Y.Ticker 滚动播放</div>
<p class="author">最后更新日期：2010-07-12  by 李晶(拔赤) lijing00333@163.com</p>
<h2><strong>DEMO</strong></h2>
<div class="demo">
	<a class="button" href="../src/ticker/demo/demo.html">DEMO</a>
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
		'ticker-skin':{//默认皮肤
			fullpath:'../assets/skin.css',
			type:'css'
		},
		'ticker':{
			fullpath:'../ticker.js',
			requires:['ticker-skin','node']
		}
	}
}).use('ticker',function(Y){
	//your code
});
	</pre>
	<p>新建一个Y.Floatip对象</p>
	<pre class="brush: js;">
new Y.Ticker('J_ticker',{
	speed:80,
	data:[
		['灰熊双塔完爆湖人内线 科比压哨三分力挺卫冕冠军','url'],
		['ESPN实力榜：骑士湖人掘金前三 火箭终于止跌回升','url'],
		['斯科拉专访：火箭不是小菜一碟 黑豆应入选全明星','url'],
		['阿泰微博客：健身小贴士 如何拥有运动员般体魄','url'],
		['海耶斯:寄希望客场弥补糟糕战绩 阿帅已然做得很好','url']
	]
});
	</pre>
</div><!--/dec-->
<h2><strong>API</strong></h2>
<dl class="dec">
	<!--构造器-->
	<dt>Y.Ticker 构造器</dt>
	<dd>
		<dl>
			<dt>说明：</dt>	
			<dd>Ticker构造</dd>
			<dt>使用：</dt>	
			<dd>new Y.Ticker(id,config);</dd>
			<dt>参数：</dt>	
			<dd>
				<p><b>id</b>:{string} hook</p>
				<p><b>config</b>:{object}配置项</p>
			</dd>
			<dt>配置：</dt>	
			<dd><p><b>data</b>:{array}要显示的数据</p>
				<p><b>timeout</b>:{number} 时间间隔，单位毫秒</p>
				<p><b>speed</b>:{number} 显示速度</p>
			</dd>
		</dl>
	</dd>
</dl>
