<div class="tit">Y.Base 常用工具</div>
<p class="author">最后更新日期：2010-07-12  by 李晶(拔赤) lijing00333@163.com</p>
<h2><strong>DEMO</strong></h2>
<div class="demo">
	<a class="button" href="../src/cubee-base/demo/demo.html">DEMO</a>
</div>
<h2><strong>NOTE</strong></h2>
<ul class="dec">
	<li>基于YUI3</li>
	<li>项目中常用的一些函数，总结到这里</li>
	<li>依赖json,node</li>
</ul>
<h2><strong>USEAGE</strong></h2>
<div class="dec">
	<p>种子的引入</p>
	<p>引用方法如下</p>
	<pre class="brush: js;">
YUI({
	combine:true,
	modules:{
		'cubee-base':{//默认皮肤
			fullpath:'../cubee-base.js',
			requires:['json','node']
		}
	}
}).use('cubee-base',function(Y){
	//your code
});
	</pre>
</div><!--/dec-->
<h2><strong>Tools</strong></h2>
<dl class="dec">
	<!--构造器-->
	<dt>Y.Base 中的方法</dt>
	<dd>
		<dl>

			<dt>Y.Base.hasLayout(con)</dt>	
			<dd>
				<p>触发节点的haslayout属性</p>
				<p><b>con</b>:要触发hasLayout的node节点（常用作ie中的hack）</p>
			</dd>
			<dt>Y.Base.getLength(a)</dt>	
			<dd>
				<p>得到数组或者对象的长度</p>
				<p><b>a</b>:a可以是数组或者对象</p>
			</dd>
			<dt>Y.Base.createIframe(id,src,foo)</dt>	
			<dd>
				<p>创建一个隐藏的iframe</p>
				<p><b>id</b>:要创建iframe的id</p>
				<p><b>src</b>:iframe的src</p>
				<p><b>foo</b>:回调函数，参数为id</p>
			</dd>
			<dt>Y.Base.distinct(a)</dt>	
			<dd>
				<p>给数组去重,前向去重，若有重复，去掉前面的重复值,保留后面的</p>
				<p><b>a</b>:需要执行去重操作的数组</p>
				<p><b>return</b>:返回去重后的数组</p>
			</dd>
			<dt>Y.Base.getUrlValue(url)</dt>	
			<dd>
				<p>得到URL中search字段和hash字段的变量，hash字段优先</p>
				<p><b>url</b>:需要得到变量的URL，若为空，则默认为当前页面的链接</p>
				<p><b>return</b>:返回为JSON，可以通过getUrlValue()['key']来得到</p>
			</dd>
			<dt>Y.Base.setUrlValue(sUrl, data)</dt>	
			<dd>
				<p>给url设置key=value，surl为空时取当前页面链接，参照demo</p>
				<p><b>sUrl</b>:链接url，为空时取当前页面链接</p>
				<p><b>data</b>:Json，要设置的键值对</p>
			</dd>
			<dt>Y.Base.getHash(sUrl)</dt>
			<dd>
				<p>得到URL中hash字段的变量</p>
				<p><b>sUrl</b>需要得到变量的URL，默认为当前页面的链接</p>
				<p><b>return</b>返回为JSON，可以通过getHash()['key']来得到</p>
			</dd>
			<dt>Y.Base.setHash(sUrl, data)</dt>	
			<dd>
				<p>给url中的hash字段赋参数，返回一个完整的url</p>
				<p><b>sUrl</b>:链接url，为空时取当前页面链接</p>
				<p><b>data</b>:Json，要设置的键值对</p>
			</dd>
			<dt>Y.Base.removeArray(v,a)</dt>
			<dd>
				<p>删除数组中的item,只匹配第一个</p>
				<p><b>v</b>要删除的数值</p>
				<p><b>a</b>需要操作的数组</p>
			</dd>
			<dt>Y.Base.replaceArray(v,n,a)</dt>
			<dd>
				<p>替换数组中的item,只匹配第一个</p>
				<p><b>v</b>要替换的数值</p>
				<p><b>n</b>新的数值</p>
				<p><b>a</b>需要操作的数组</p>
			</dd>
			<dt>Y.Base.inArray(v,a)</dt>
			<dd>
				<p>判断数值是否存在数组中</p>
				<p><b>v</b>要匹配的数值</p>
				<p><b>a</b>存在的数组</p>
				<p><b>return</b>返回一个布尔值</p>
			</dd>
			<dt>Y.Base.cn_strlen(str)</dt>
			<dd>
				<p>计算字符长度,一个中文当成2个英文长度计算</p>
				<p><b>str</b>需要求长度的字符串</p>
				<p><b>return</b>得到计算得的长度</p>
			</dd>
			<dt>Y.Base.substr(str,length)</dt>
			<dd>
				<p>截字函数,可以兼容中文截取</p>
				<p><b>str</b>需要截取的字符串</p>
				<p><b>str</b>需要截取的长度（以英文为准，一个中文算两个英文，会自动加...）</p>
				<p><b>return</b>返回截取后的字符串</p>
			</dd>
			<dt>Y.Base.templetShow(templet, data)</dt>
			<dd>
				<p>模板函数</p>
				<p><b>templet</b>模板</p>
				<p><b>data</b>模板需要的数据</p>
				<p><b>return</b>输出按照模板整理好的字符串</p>
			</dd>
			<dt>Y.Base.AE(o,foo)</dt>
			<dd>
				<p>add event,给既定函数o添加fun的函数监听，使得o运行时自动执行fun</p>
				<p><b>o</b>被观察者 </p>
				<p><b>foo</b>要fire的函数</p>
				<p><b>return</b>绑定好的foo</p>
			</dd>
			<dt>Y.Base.wbtrim(str,count)</dt>
			<dd>
				<p>长连续字符的解决方案,过滤字符串</p>
				<p><b>str</b>原始字符串 </p>
				<p><b>count</b>截断的单位长度,默认为10</p>
				<p><b>return</b>返回过滤后的字符串</p>
			</dd>
			<dt>Y.Base.trimSize(str, bsize)</dt>
			<dd>
				<p>过滤输出长字符串,多余的部分使用省略号表示</p>
				<p><b>str</b>原始字符串 </p>
				<p><b>bsize</b>需要输出的字符串长度</p>
				<p><b>return</b>返回截取后的字符串</p>
			</dd>
			<dt>Y.Base.stripTags(str)</dt>
			<dd>
				<p>返回移除了任何 HTML 或 XML 标签的字符串</p>
			</dd>
			<dt>Y.Base.stripHTML(str)</dt>
			<dd>
				<p>返回过滤后的html文本</p>
			</dd>
			<dt>Y.Base.stripScripts(str)</dt>
			<dd>
				<p>返回移除了任何script块的字符串</p>
			</dd>
			<dt>Y.Base.DOMData(node,attr)</dt>
			<dd>
				<p>返回移除了任何script块的字符串</p>
				<p><b>node</b>要存储数据的节点</p>
				<p><b>attr</b>要存储的属性名称,为空的话取‘rev’</p>
				<p><b>return</b>返回一个对象，包含set(k,v)和get(k)两个方法</p>
			</dd>
		</dl>
	</dd>
</dl>
