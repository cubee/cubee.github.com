//作者 李晶（拔赤）lijing00333@163.com
YUI.namespace('Y.Scalendar');
YUI.add('simple-calendar',function(Y){
	/**
	 * @param {node}
	 * @param {function} callback
	 * @param {object} options
	 *		date {string}
	 */
	Y.Scalendar = function(){
		this.init.apply(this,arguments);
	};
	Y.Scalendar.prototype = {
		init:function(node,callback,o){
			var that = this;
			that.callback = callback;
			that.buildParam(o);
			that.node = node;



			that.in_str = [
				'<div style="position:relative;zoom:1;display:block;" class="pos">',
				'<div class="hd t-corner-all">', 
					'<a class="prev t-corner-all" href="javascript:void(0);"></a>',
					'<b class="hdtxt">{$hdtxt}</b>',
					'<a class="next t-corner-all" href="javascript:void(0);"></a>',
				'</div>',
				'<div class="bd">',
					'<span>Sn</span>',
					'<span>Mo</span>',
					'<span>Tu</span>',
					'<span>We</span>',
					'<span>Th</span>',
					'<span>Fr</span>',
					'<span>Sa</span>',
				'</div>',
				'<div class="ft">' ,
					'{$ds}',
					'<!--<a href="#">1</a><a href="#">2</a><a href="#">3</a><a href="#">4</a><a href="#">5</a><a href="#">6</a><a href="#">7</a>-->',
				'</div>',
				'</div>'
			].join('');
			that.ds = '<a href="javascript:void(0);">{$d}</a>';
			that.con = Y.Node.create('<div class="t-calendar t-corner-all"></div>');
			that.con.setStyle('visibility','hidden');
			Y.one('body').appendChild(that.con);
			that.con.set('innerHTML',that.in_str);
			var _x = node.getXY()[0];
			var _y = node.getXY()[1]+node.get('region').height;
			that.con.setStyle('left',_x.toString()+'px');
			that.con.setStyle('top',_y.toString()+'px');
			//点击项目
			that.con.query('div.ft').on('click',function(e){
				e.halt();
				if(e.target.hasClass('null'))return;
				var selectedd = Number(e.target.get('innerHTML'));
				var d = new Date();
				d.setDate(selectedd);
				d.setMonth(that.month);
				d.setYear(that.year);
				that.callback(d);
				if(that.closeable){
					that.hide();
				}
			});
			//点击空白
			Y.Node.get('document').on('click',function(e){
				if(e.target.hasClass('t-calendar'))return;
				var f = e.target.ancestor(function(node){
					if(node.hasClass('t-calendar'))return true;
					else return false;
				});
				if(typeof f == 'undefined' || f == null){
					that.hide();
				}
			});
			//点击触点
			node.on('click',function(e){
				e.halt();
				if(that.con.getStyle('visibility') == 'hidden'){
					that.show();
				}else{
					that.hide();
				}
			});
			//向前
			that.con.query('a.prev').on('click',function(e){
				e.halt();
				that.monthMinus();
				that.render();
			});
			//向后
			that.con.query('a.next').on('click',function(e){
				e.halt();
				that.monthAdd();
				that.render();
			});

			that.render(o);
			return this;
		},
		show:function(){
			var that = this;
			//==========
			that.con.setStyle('opacity','1');
			that.con.setStyle('visibility','visible');
			that.con.setStyle('height',0);
			that.con.setStyle('width',0);
			that.con.setStyle('overflow','hidden');
			var anim = new Y.Anim({
				node:that.con,
				from:{
					opacity:1,
					height:0,
					width:0
				},
				to:{
					opacity:1,
					width:that._x,
					height:that._y
				},
				duration:that.duration,
				easing:that.easing
			});
			anim.on('end',function(){
				that.con.setStyle('height','auto');
			});
			anim.run();
			return this;
		},
		hide:function(){
			var that = this;
			var anim = new Y.Anim({
				node:that.con,
				to:{
					opacity:1,
					height:0,
					width:0
				},
				from:{
					opacity:1,
					width:that._x,
					height:that._y
				},
				duration:0.3,
				easing:Y.Easing.easeOut
			});
			anim.on('end',function(){
				that.con.setStyle('visibility','hidden');
			});
			anim.run();
			return this;
		},
		buildParam:function(o){
			var that = this;
			var o = o || {};
			that.date = (typeof o.date == 'undefined' || o.date == null)?new Date():o.date;
			that.selectedate= (typeof o.selectedate== 'undefined' || o.selectedate== null)?that.date:o.selectedate;
			that.duration = (typeof o.duration == 'undefined' || o.duration == null)?0.9:o.duration;
			that.easing = (typeof o.easing == 'undefined' || o.easing == null)?Y.Easing.elasticOut:o.easing;
			that.closeable= (typeof o.closeable == 'undefined' || o.closeable == null)?true:o.closeable;
			return this;
		},
		parseParam:function(o){
			var that = this;
			var o = o || {};
			for(var i in o){
				that[i] = o[i];
			}
			//date的类型处理
			if(that.date instanceof Date){
				that.date = that.date;
			}else if(typeof that.date == 'string'){
				that.date = new Date(that.date);
			}else{
				that.date = new Date();
			}
			//selecteddata的类型处理
			if(that.selectedate instanceof Date){
				that.selectedate = that.selectedate;
			}else if(typeof that.selectedate == 'string'){
				that.selectedate = new Date(that.selectedate);
			}else{
				that.selectedate = that.date;
			}
			that.handleDate();
			return this;
		},
		render:function(o){
			var that = this;
			var o = o || {};
			that.parseParam(o);

			var s = '';
			var startweekday = new Date(that.year+'/'+(that.month+1)+'/01').getDay();//当月第一天是星期几
			var k = that.getNumOfDays(that.year,that.month + 1) + startweekday;
			for(var i = 0;i< k;i++){
				if(i < startweekday){//null
					s += '<a href="javascript:void(0);" class="null">0</a>';
				}else if(i == (startweekday + that.selectedate.getDate() - 1) && that.month == that.selectedate.getMonth() && that.year == that.selectedate.getFullYear()){//selected
					s += '<a href="javascript:void(0);" class="selected">'+(i - startweekday + 1)+'</a>';
				}else if(i == (startweekday + (new Date()).getDate() - 1) && (new Date()).getFullYear() == that.year && (new Date()).getMonth() == that.month){//today
					s += '<a href="javascript:void(0);" class="today">'+(i - startweekday + 1)+'</a>';

				}else{//other
					s += '<a href="javascript:void(0);">'+(i - startweekday + 1)+'</a>';
				}
			}
			if(k%7 != 0){
				for(var i = 0;i<(7-k%7);i++){
					s += '<a href="javascript:void(0);" class="null">0</a>';
				}
			}
			that.con.query('div.ft').set('innerHTML',s);
			that.con.query('b.hdtxt').set('innerHTML',that.getHeadStr());
			that._x = 187;
			that._y = that.con.get('region').height - 4;
			return this;

		},
		handleDate:function(){
			var that = this;
			var date = that.date;
			that.weekday= date.getDay() + 1;//星期几 //指定日期是星期几
			that.day = date.getDate();//几号
			that.month = date.getMonth();//月份
			that.year = date.getFullYear();//年份
			return this;
		},
		getHeadStr:function(){
			var that = this;
			var h = '';
			var s = that.date.toDateString();
			var h = s.split(' ')[1]+' '+s.split(' ')[3];
			return h;
		},
		getNumOfDays:function(year,month){
			return 32-new Date(year,month-1,32).getDate();
		},
		monthAdd:function(){
			var that = this;
			if(that.month == 11){
				that.year++;
				that.month = 0;
			}else{
				that.month++;
			}
			that.date = new Date(that.year.toString()+'/'+(that.month+1).toString()+'/'+that.day.toString());
			return this;
		},
		monthMinus:function(){
			var that = this;
			if(that.month == 0){
				that.year-- ;
				that.month = 11;
			}else{
				that.month--;
			}
			that.date = new Date(that.year.toString()+'/'+(that.month+1).toString()+'/'+that.day.toString());
			return this;

		}


	};
	

},'',{requires:['dump','node','anim']});
