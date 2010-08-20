YUI.add('banner',function(Y){
	Y.Banner = function(){
		this.init.apply(this,arguments);
	};
	Y.Banner.prototype = {
		html:[
			//'<div style="z-index:0;*left:0">',
				//'<div class="cpp-banner" style="display:none">',
				'	<div class="fk-l" style="display:none;">',
				'		<a href="" class="fk-a" target=_blank>',
				'			<img src="http://cn.yimg.com/space.gif" class="fk-img" />',
				'		</a>',
				'		<p style="line-height:5px;*line-height:12px;"><a href="javascript:void(0);" class="close">关闭</a></p>',
				'	</div>'
				//'	',
				//'	<div class="fk-r" style="float:right"> ',
				//'		<a href="" class="fk-a" target=_blank>',
				//'			<img src="http://cn.yimg.com/space.gif" class="fk-img" />',
				//'		</a>',
				//'		<p align=right style="line-height:5px;*line-height:12px;"><a href="javascript:void(0);" class="close">关闭</a></p>',
				//'	</div>'
				//'</div>'
			//'</div>'
		
		].join(''),
		init:function(config){
			var that = this;
			that.Anim = [];
			
			var con = that.con = [];
			con.push(Y.Node.create(this.html));
			con.push(Y.Node.create(this.html));
			Y.one('body').append(con[0]);
			Y.one('body').append(con[1]);

			that.buildParam(config);
			that.initUI();
			that.bind();
			that.setPos();
			return this;
		},
		bind:function(){
		
			var that = this;
			var con = that.con;
			//con[0].setStyle('position','absolute');
			Y.one('winow').on('scroll',function(e){
				//debugger;
				that.setPos();
			});
			Y.one('winow').on('resize',function(e){
				that.setPos();
			});
			con[0].query('.close').on('click',function(e){
				e.halt();
				that._hide = true;
				that.hide();
			});
			con[1].query('.close').on('click',function(e){
				e.halt();
				that._hide = true;
				that.hide();
			});

		
		},
		hide:function(){
			var that = this;
			that.con[0].setStyle('display','none');
			that.con[1].setStyle('display','none');
		},
		show:function(){
			var that = this;
			if(that._hide == false && that.con[0].getStyle('display') == 'none'){
				that.con[0].setStyle('display','block');
				that.con[1].setStyle('display','block');
			}
		},
		/**
		 * 构建参数
		 */
		buildParam:function(o){
			var o = o || {};
			this.width = (typeof o.width == 'undefined'||o.width == null)?300:o.width;
			this.autohide = (typeof o.autohide == 'undefined'||o.autohide == null)?false:o.autohide;
			this.height = (typeof o.height == 'undefined'||o.height == null)?300:o.height;
			this.span = (typeof o.span == 'undefined'||o.span == null)?300:o.span;
			this.scroll = (typeof o.scroll == 'undefined'||o.scroll == null)?true:o.scroll;
			this.anim = (typeof o.anim == 'undefined'||o.anim == null)?true:o.anim;
			this.top = (typeof o.top == 'undefined'||o.top == null)?100:o.top;
			this.spread  = (typeof o.spread  == 'undefined'||o.spread  == null)?false:o.spread;
			this.closeable = (typeof o.closeable == 'undefined'||o.closeable == null)?true:o.closeable;
			this._hide = false;
			/*
				[
					{
						img:'',
						href:''
					},
					{
						img:'',
						href:''
					}
				]
					
			*/
			this.imgs = o.imgs;
			
			return this;

		},
		setPos:function(){
			var that = this;
			var con = that.con,
				viewport = Y.one('body').get('viewportRegion');
			var span,top,
				scrollTop = viewport.top,

				scrollLeft = viewport.left,
				viewHeight = viewport.height,
				viewWidth = viewport.width;
			var r = [];
			if(that.spread && (that.width*2+that.span) > viewWidth){//可伸展
				span = viewWidth - that.width*2;		
			}else{
				span = that.span;
			}
			if(!that.scroll){
				top = that.top;
			}else{
				top = that.top+scrollTop;
			}
			r.push({
				top:top,
				left:(viewWidth - (that.width*2+span))/2 + scrollLeft
			});
			r.push({
				top:top,
				left:(viewWidth - (that.width*2+span))/2 + scrollLeft + (that.width+span)
			});

			if(that.autohide == true){
				if(viewWidth <= (that.width*2+that.span)){
					that.hide();
					return;
				}else{
					that.show();
				}

			}
			
			
			for(var i = 0;i<2;i++){
				if(that.anim){
					if(that.Anim[i]){
						that.Anim[i].stop();
					}
					var myAnim = new Y.Anim({
							node: con[i],
							to: {
								top: r[i].top
							},
							easing:Y.Easing.easeOut  
					});
					myAnim.run();

				}else{
					con[i].setStyle('top',r[i].top+'px');
				}
				con[i].setStyle('left',r[i].left+'px');
			}

		},
		initUI:function(){
			var that = this;
			var tno = that.imgs.length > 1?1:0;
			var con = that.con;

			con[0].query('.fk-img').setAttribute('src',that.imgs[0].img);
			con[1].query('.fk-img').setAttribute('src',that.imgs[tno].img);


			con[0].queryAll('.fk-a').setAttribute('href',that.imgs[0].href);

			con[1].queryAll('.fk-a').setAttribute('href',that.imgs[tno].href);

			con[0].queryAll('.fk-img').setStyle('width',that.width+'px');
			con[1].queryAll('.fk-img').setStyle('width',that.width+'px');
			con[0].queryAll('.fk-img').setStyle('height',that.height+'px');
			con[1].queryAll('.fk-img').setStyle('height',that.height+'px');
		
			con[0].queryAll('a').setStyle('color','#333');
			con[1].queryAll('a').setStyle('color','#333');

			var hw = that.width*2 + that.span;
			con[0].query('p').setStyle('textAlign','left');
			con[1].query('p').setStyle('textAlign','right');

			con[0].setStyle('position','absolute');
			con[1].setStyle('position','absolute');
	
			con[0].setStyle('display','block');
			con[1].setStyle('display','block');

			if(!that.closeable){
				con[0].query('.close').setStyle('display','none');
				con[1].query('.close').setStyle('display','none');
			}

		}

	};	
	
},'',{requires:['node','anim']});
