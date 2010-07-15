<div class="tit">cdn开发环境的配置</div>
<p class="author">最后更新日期：2010-07-11  by 李晶 lijing00333@163.com</p>
<h2><strong>NOTE</strong></h2>
<div class="dec">
	<p>
		和之前在雅虎的开发模式一样，wd在统一的一台服务器上做开发，css和js代码都放在这个机器上，开发者在本机配置这台开发机的host就可以，访问a.tbcdn.cn的时候apache首先在开发机上寻找文件，找不到去正式环境去download文件，一并返回给客户端。 
	</p>
</div>

<h2><strong>USEAGE</strong></h2>
<div class="dec">
	<p>以配置a.tbcdn.cn为例</p>
	<p>apache配置(linux)</p>
	<pre class="xml">
<VirtualHost *:80>
    DocumentRoot /home/a.tbcdn.cn/
    ServerName a.tbcdn.cn
    ErrorLog logs/tbcdn.log
    CustomLog logs/tbcdn-access_log common
    RewriteEngine On
    RewriteCond /home/a.tbcdn.cn/%{REQUEST_FILENAME} !-F
    RewriteRule ^/(.+)$ http://a.tbcdn.cn/$1 [QSA,P,L]
</VirtualHost>
	</pre>
	<p>apache配置(windows)</p>
	<pre class="xml">
<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host.example.com
    DocumentRoot "D:/mycode/a.tbcdn.cn/"
    ServerName a.tbcdn.cn
    RewriteEngine On
    RewriteCond D:/mycode/a.tbcdn.cn/%{REQUEST_FILENAME} !-F
    RewriteRule ^/(.+)$ http://a.tbcdn.cn/$1 [QSA,P,L]
    <Directory D:/mycode/a.tbcdn.cn/>
        Order deny,allow
        Allow from All
    </Directory>
</VirtualHost>
	</pre>
	<p>若在window下，请将DocumentRoot 和RewriteCond 中的路径（/home/a.tbcdn.cn/）自行修改。 在httpd.conf中请确保如下模块是打开状态</p>
	<pre class="js">
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_balancer_module modules/mod_proxy_balancer.so
LoadModule proxy_ftp_module modules/mod_proxy_ftp.so
LoadModule proxy_http_module modules/mod_proxy_http.so
LoadModule proxy_connect_module modules/mod_proxy_connect.so
LoadModule rewrite_module modules/mod_rewrite.so
	</pre>
	<p>若是在本机架设，为了避免死锁，则需要将a.tbcdn.cn指向ip</p>
	<p>并确保虚机名打开</p>
	<pre class="js">
NameVirtualHost *:80
	</pre>

</div><!--/dec-->

<h2><strong>更多配置</strong></h2>
<div class="dec">
	<p>增加gzip压缩、Expires头（有需要时增加，例如需要用yslow测试性能等），在http.conf中保证如下模块已经引入</p>
	<pre class="js">
LoadModule expires_module /usr/lib64/httpd/modules/mod_expires.so
LoadModule deflate_module /usr/lib64/httpd/modules/mod_deflate.so
	</pre>
	<p>虚拟主机配置段中增加如下配置</p>
	<pre class="xml">
<IfModule deflate_module>
	AddOutputFilterByType DEFLATE text/html text/plain text/css text/javascript image/gif image/png image/jpg image/jpeg image/x-icon
</IfModule>
<IfModule expires_module>
	ExpiresActive On
	ExpiresDefault "access plus 10 years"
</IfModule>
	</pre>
	<p>使用php模拟a.tbcdn.cn环境，支持combo和minify，可以参照项目<a href="http://github.com/jayli/combo">http://github.com/jayli/combo</a>，在cdn根目录下建立combo.php，增加apache的rewrite规则：</p>
	<pre class="js">
RewriteEngine On
RewriteRule ^/combo?(.+)$ /combo.php?$1 [QSA,L]
RewriteEngine On
RewriteRule ^/(.+\.js|.+\.css)$ /combo.php?$1 [QSA,L]
	</pre>
</div>