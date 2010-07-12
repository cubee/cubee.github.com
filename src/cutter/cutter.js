YUI.namespace('Y.Cutter');
YUI.add('cutter',function(Y){
	Y.Cutter = function(){
		this.init.apply(this,arguments);
	};
	//Y.Cutter.prototype = ..
	Y.mix(Y.Cutter, {
		//构造器
		init:function(node,o){
			var that = this;
			that.node = node;
			that.buildParam(o);
			that.renderUI();
			that.bindEvent();
			return this;
		},
		renderUI:function(){
			var that = this;
			var w = that.width / 2;
			var h = that.height / 2;
			that.img_a = [];
			for(var i = 0;i<4;i++){
				that.img_a[i] = Y.Node.create('<div style="position:absolute;z-index:2;"></div>');
				that.img_a[i].setStyle('width',w +'px')
							.setStyle('height',h +'px')
							.setStyle('background','url("'+that.img+'") no-repeat');
				that.node.append(that.img_a[i]);
			}
			that.img_a[0].setStyle('left','0px').setStyle('top','0px');
			that.img_a[1].setStyle('right','0px').setStyle('top','0px').setStyle('backgroundPosition','-'+w+'px '+'0px');
			that.img_a[2].setStyle('left','0px').setStyle('bottom','0px').setStyle('backgroundPosition','0px -'+h+'px');
			that.img_a[3].setStyle('right','0px').setStyle('bottom','0px').setStyle('backgroundPosition','-'+w+'px -'+h+'px');
			that.node.query('img').remove();

			return this;

		},
		bindEvent:function(){
			var that = this;

			that.node.on('mouseover',function(e){
				e.halt();
				var w = that.width / 2;
				var h = that.height / 2;
				that.anim_out[0] = new Y.Anim({
					node:that.img_a[0],
					to:{
						top:-h,
						left:-w
					}
				});
				that.anim_out[1] = new Y.Anim({
					node:that.img_a[1],
					to:{
						top:-h,
						right:-w
					}
				});
				that.anim_out[2] = new Y.Anim({
					node:that.img_a[2],
					to:{
						left:-w,
						bottom:-h
					}
				});
				that.anim_out[3] = new Y.Anim({
					node:that.img_a[3],
					to:{
						bottom:-h,
						right:-w
					}
				});
				for(var i = 0;i<4;i++){
					if(that.anim_in[i])that.anim_in[i].stop();
					that.anim_out[i].set('duration',that.out_speed);
					that.anim_out[i].set('easing', Y.Easing.easeOut);
					that.anim_out[i].run();
				}
				
			});
			that.node.on('mouseout',function(e){
				e.halt();
				var w = that.width / 2;
				var h = that.height / 2;
				that.anim_in[0] = new Y.Anim({
					node:that.img_a[0],
					to:{
						top:0,
						left:0
					}
				});
				that.anim_in[1] = new Y.Anim({
					node:that.img_a[1],
					to:{
						top:0,
						right:0
					}
				});
				that.anim_in[2] = new Y.Anim({
					node:that.img_a[2],
					to:{
						left:0,
						bottom:0
					}
				});
				that.anim_in[3] = new Y.Anim({
					node:that.img_a[3],
					to:{
						bottom:0,
						right:0
					}
				});
				for(var i = 0;i<4;i++){
					if(that.anim_out[i])that.anim_out[i].stop();
					that.anim_in[i].set('duration',that.in_speed);
					that.anim_in[i].set('easing', Y.Easing.bounceOut);
					that.anim_in[i].run();
				}



			});
			return this;

		},
		buildParam:function(o){
			var that = this;
			if(typeof o == 'undefined' || o == null){
				var o = {};
			}
			that.out_speed = (typeof o.out_speed == 'undefined' || o.out_speed == null)?0.3:o.out_speed;
			that.in_speed = (typeof o.in_speed == 'undefined' || o.in_speed == null)?0.5:o.in_speed;


			//准备数据
			that.img = that.node.query('img').get('src');
			that.width = that.node.get('region').width;
			that.height = that.node.get('region').height;
			that.anim_out = [];
			that.anim_in = [];
			return this;
		}
	},0,null,4);

},'',{requires:['node','anim']});

