<div class="tit">iframe跨域高度自适应</div>
<p class="author">最后更新日期：2010-07-11  by 李晶 lijing00333@163.com</p>
<h2><strong>文件引用</strong></h2>
<div class="demo">
	<a class="button" href="../src/cross-domain-autoheight/proxy.html">proxy.html</a>
	<a class="button" href="../src/cross-domain-autoheight/cross.js">cross.js</a>
	<a class="button" href="../src/cross-domain-autoheight/fathor.js">fathor.js</a>
</div>
<h2><strong>NOTE</strong></h2>
<ul class="dec">
	<li>适用场景：iframe跨域高度自适应</li>
	<li>实现原理：通过子域中创建一个iframe（下图灰色iframe）指向父域的proxy.html，来实现控制父域的目的，在引用子域的时候，需要带上参数mathor_url=fathor.com，带入父域的域名<br />
	<img src="assets/images/x-domain.png" />
	</li>
</ul>
<h2><strong>USEAGE</strong></h2>
<div class="dec">
	<p>文件列表</p>
	<p>
		proxy.html 放在父域跟下，比如fathor.com/proxy.html
	</p>
	<p>
		cross.js 跨域js，由子域的iframe中引用
	</p>
	<p>
		fathor.js 父域js，由父域的页面中引用
	</p>
	<p>使用方法</p>
	父域引用子域的iframe时候，需要带上mathor_url=‘父域域名’（不带"http://"）
	<pre class="html">
<iframe src="sub_domain.com?mathor_url=main_domain.com"></iframe>
	</pre>
	<p>在父域页面中引入fathor.js</p>
	<pre class="html">
<script src="fathor.js"></script>
	</pre>
	<p>在子域iframe页面中引入cross.js</p>
	<pre class="html">
<script src="cross.js"></script>
	</pre>
</div><!--/dec-->
<h2><strong>DEMO</strong></h2>
<div class="demo">
	<a class="button" href="http://taobao.17k.com/read/45043/1636679/49290.html">DEMO</a>
</div>