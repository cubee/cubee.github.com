
YUI.namespace('Y.Ticker');
YUI.add('ticker',function(Y){
	Y.Ticker = function(){
		this.init.apply(this,arguments);
	};
	Y.Ticker.prototype = {
		init:function(id,o){
			var that = this;
			that.con = Y.one('#'+id);
			that.buildParam(o);
			that.renderUI();
			that.bindEvent();
		},
		renderUI:function(){
			var that = this;
			clearTimeout(that.timer);
			that.timer = setTimeout(function(){
				that.next();
				that.timer = setTimeout(arguments.callee,Number(that.timeout));	
			},0);
			return this;
		},
		bindEvent:function(){
			var that = this;
			that.con.query('.back').on('click',function(e){
				e.halt();
				that.previous();
				that.stop().play();
			});
			that.con.query('.next').on('click',function(e){
				e.halt();
				that.next();
				that.stop().play();
			});
			return this;
		},
		buildParam:function(o){
			var that = this;
			if(typeof o == 'undefined' || o == null){
				var o = {};
			}
			that.data = (typeof o.data == 'undefined' || o.data == null)?[]:o.data;
			that.timeout =  (typeof o.timeout == 'undefined' || o.timeout == null)?6000:o.timeout;
			that.speed = (typeof o.speed == 'undefined' || o.speed == null)?110:o.speed;
			that.timer = null;//停等定时器
			that.fadetimer = null;//过渡定时器
			that.curr_index = 0;
			return this;

		},
		previous:function(){
			var that = this;
			var _index = that.curr_index + that.data.length-1;
			if(_index >= that.data.length){
				_index = _index % that.data.length;
			}
			that.goto(_index);
			return this;

		},
		next:function(){
			var that = this;
			var _index = that.curr_index + 1;
			if(_index >= that.data.length){
				_index = _index % that.data.length;
			}
			that.goto(_index);
			return this;
		},
		goto:function(index){
			var that = this;
			if(index >= that.data[index][0].length){
				index = index % that.data[index][0].length;
			}
			if(index == that.curr_index){
				return this;
			}
			that.curr_index = index;
			var inner_str = '';
			var txt_con = that.con.query('.ticontent');
			clearTimeout(that.fadetimer);
			that.fadetimer = setTimeout(function(){
				inner_str = that.data[index][0].substr(0,(inner_str.length+1));
				if(!that.setText(inner_str)){
					return;
				}
				that.fadetimer = setTimeout(arguments.callee,Number(that.speed));	
			},Number(that.speed));
			return this;

		},
		setText:function(str){
			var that = this;
			//var curr_txt = that.con.query('.ticontent').get('innerHTML');
			if(str.length == that.data[that.curr_index][0].length){
				that.con.query('.ticontent').set('innerHTML',str);
				that.con.query('.cursor').setStyle('visibility','hidden');
				return false;//停止
			}else {
				that.con.query('.cursor').setStyle('visibility','');
				that.con.query('.ticontent').set('innerHTML',str);
				return true;//继续
			}

		},
		play:function(){
			var that = this;
			if(that.timer != null)clearTimeout(that.timer);
			that.timer = setTimeout(function(){
				that.next();
				that.timer = setTimeout(arguments.callee,Number(that.timeout));	
			},Number(that.timeout));
			return this;
		},
		stop:function(){
			var that = this;
			clearTimeout(that.timer);
			that.timer = null;
			return this;
		}
	};

},'',{requires:['node']});
