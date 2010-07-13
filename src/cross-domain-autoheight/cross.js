//taobao域的中间层 by jayli
//iframe的url中必须要带一个mathor_url的参数，mathor_url=b.com，否则不知道去哪里取proxy.html
var inner = inner || {};

var getUrlValue = function(url){
	var url = (url !== undefined) ? url : window.location.href;
	if(url.indexOf("#") > -1){
		var variable = url.split("#")[1];
	}else{
		var variable = url.split("?")[1];
	}
	if(variable === undefined){
		return {};
	}else{
		var value = {};
		variable = variable.split("&");
		for(var i = 0, m = variable.length; i<m; i++){
			value[variable[i].split("=")[0]] = variable[i].split("=")[1];
		}
		return value;
	}
};

var mathor_url = getUrlValue()['mathor_url'];

inner = {
    iframe_el : null,
    url : 'http://'+mathor_url,
    aid : 1,
    href : null,
    time : null,
    signA : false,
    autoHeight : true,
    getDocHeight : function(){
        var height = (navigator.appName == "Microsoft Internet Explorer") ? document.body.scrollHeight+20 : document.body.offsetHeight+20;
        return height;
    },
    //发送命令
    postAction : function(u){
        var fd = this;
        //清除时钟
        clearInterval(this.time);
        //发送命令
		//fd.iframe_el.src = fd.url+"/proxy.html#aid="+this.aid+"&"+u;
		//create new Iframe
		fd.iframe_el_new = document.createElement('iframe');
		fd.iframe_el_new.height = 0;
		fd.iframe_el_new.style.height = '0px';
		fd.iframe_el_new.style.width = '0px';
		fd.iframe_el_new.style.border = 'none';
		fd.iframe_el_new.width = 0;
		fd.iframe_el_new.frameborder = 0;
		fd.iframe_el_new.border = 0;
		fd.iframe_el_new.scrolling = 'no';
		fd.iframe_el_new.src = fd.url+"/proxy.html#aid="+this.aid+"&"+u;
		fd.iframe_el.parentNode.appendChild(fd.iframe_el_new);
		fd.iframe_el.parentNode.removeChild(fd.iframe_el);
		fd.iframe_el = fd.iframe_el_new;
        this.aid++;
    },
    //调整高度
    setHeight : function(height){
        if(height === undefined){
            height = this.getDocHeight();
        }
        this.postAction("action=setheight&height="+height);
    },
    start : function(){
		var fd = this;
			fd.iframe_el = document.getElementById("YAHOO_Iframe");
		if(this.autoHeight){
			fd.old_height = 0;
			var autoHeight = function(){
				if(fd.old_height != inner.getDocHeight()){

					fd.old_height = inner.getDocHeight();
					fd.setHeight();
				}
			}
			setInterval(autoHeight, 200);
		}
    }
};

document.write('<iframe id="YAHOO_Iframe" style="width:0; height:0; border:none;" frameborder="0" scrolling="no" src="'+inner.url+'proxy.html#aid=0&action=setheight&height='+inner.getDocHeight()+'"></iframe>');

inner.start();
