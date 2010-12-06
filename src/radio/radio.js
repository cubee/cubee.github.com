/**
 * radio.js 点击高亮控件
 * author:lover_116@163.com 灵玉
 * @class Y.Radio
 * @param {string} 容器或者触点selector 
 * @param {object} 配置项
 * @return {object} 生成一个radio实例
 * @requires {'node'}
 * 
 * Y.Radio：	
 *	说明：	radio构造器，通过new Y.Radio来render一个radio
 *	使用：	new Y.Radio(selector,config)
 *	参数:	selector:{string}容器选择器，获取多个node
 *	配置：	showindex {num} 默认显示所引
 *			onload:{function} 初始化扩展操作
 *			disable:{function} 触发事件，不可点击，参数为Array,[1,2,3]不可点击的所引，默认全部不可点击
 *			enable:{function} 恢复可点击，参数为Array,[1,2,3]恢复点击，默认全部可点
 *			closeable:{boolean} 是否单选关闭（弹出状态下起作用），默认为false
 *			anchor:{boolean}是否有锚点效果，去掉e.halt()
 *			range:{start:date,end:date} 默认选择范围
 *			refresh:{function} 重新加载
 */
YUI.namespace('Y.Radio');
YUI.add('radio',function(Y){
	Y.Radio = function(){
		this.init.apply(this,arguments);
	};
	Y.Radio.prototype = {
		/**
		 * 初始化
		 * @param {selector}容器选择器
		 * @param {config}初始配置
		 */
		init:function(selector,config){
			this.nodes = Y.one(selector).get('tagName') == 'A'?Y.all(selector):Y.all(selector).get('parentNode');
			this.buildEventCenter();
			this.bind();
			this.buildParam(config);
		},
		/**
		 * 事件中心 增加自定义change事件
		 * @return {object}
		 */
		buildEventCenter:function(){
			var that = this;
			var EventFactory = function(){
				this.publish("change");
			};
			Y.augment(EventFactory, Y.Event.Target);
			that.EventCenter = new EventFactory();
			return this;
		},
		/**
		 * 绑定click事件函数
		 * @mether bind 
		 * @param {node} object node对象
		 * @default {null} this.nodes
		 */
		bind:function(node){
			var that = this;
			if(typeof node === 'undefined' || node === null){
				this.nodes.on('click',function(e){
					if(!that.anchor){
						e.halt();
					}
					that.changeEvent(e);
				});
			}
			else{
				node.on('click',function(e){
					if(!that.anchor){
						e.halt();
					}
					that.changeEvent(e);
				});
			}
		},
		/**
		 * 绑定事件函数
		 * @mether on 
		 * @type event 
		 * @param {type} string 自定义时间名
		 * @param {foo} function 实现方法
		 */
		on:function(type,foo){
			var that = this;
			that.EventCenter.subscribe(type,foo);
			return this;
		},
		/**
		 * @mether changeEvent
		 * change事件的具体实现
		 * @param {e} 当前触发node
		 */
		changeEvent : function(e){
			var isA = e.target.get('tagName') == 'A'?true:false;
			var _n = isA?e.target:e.target.get('parentNode');
			var _i = this.nodes.indexOf(_n);
			this.nodes.removeClass('selected');
			_n.addClass('selected');
			//传递change事件的参数
			this.EventCenter.fire('change',{index:_i,show:"no"});
		},
		/**
		 * @attribute defaultShow
		 * @type num
		 * @param {i} 显示所引从1开始
		 * @default null
		 */
		defaultShow : function(i){
			if(i<1) {return;}
			this.nodes.item(i-1).addClass('selected');
			return this;
		},
		/**
		 * 失效事件实现
		 * @mether disable 
		 * @type function
		 * @param {param} array 节点索引
		 * @default null,所有节点失效
		 */
		disable : function(param){
			if(typeof param === 'undefined' || param === null){
				this.nodes.detach('click');
				this.nodes.removeClass('selected').addClass('nohover');
			}
			else{
				for(var i=0;i<param.length;i++){
					this.nodes.item(param[i]-1).removeClass('selected').addClass('nohover');
					this.nodes.item(param[i]-1).detach('click');
				}
			}
			return this;
		},
		/**
		 * 恢复事件实现
		 * @mether enable 
		 * @type function
		 * @param {param} array 节点索引
		 * @default null,所有节点恢复
		 */
		enable : function(param){
			if(typeof param === 'undefined' || param === null){
				this.bind();
				this.nodes.removeClass('nohover');
			}
			else{
				for(var i=0;i<param.length;i++){
					this.nodes.item(param[i]-1).removeClass('nohover');
					this.bind(this.nodes.item(param[i]-1));
				}
			}
			return this;
		},
		/**
		 * 重新加载 
		 * @mether refresh 
		 * @type function
		 */
		refresh: function(){
			this.nodes.refresh();
			this.bind();
			return this;
		},
		/**
		 * 参数构造 
		 * @mether buildParam 
		 * @type function
		 * @param {e} object 构造参数
		 */
		buildParam : function(o){
			if(typeof o === 'undefined' || o === null){
				o = {};
			}
			if(typeof o.onload !== 'undefined' && o.onload !== null){o.onload(this);}
			if(typeof o.showindex !== 'undefined' && o.showindex !== null){this.defaultShow(o.showindex);}
			if(typeof o.anchor !== 'undefined' && o.anchor !== null){this.anchor = o.anchor;}
		}
	};
},'3.0.0',{requires:['node']});
