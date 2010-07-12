/**
 * simplepage.js | simplepage ��ҳ�ؼ�������list items�ͷ�ҳ��ҳ�룬ҳ�����߼�
 * autohr:lijing00333@163.com �γ�
 * @class Y.Spage
 * @param { yui3-node } nodelist:yui3��nodelist
 * @param { string } pageid:ҳ��������id,ҳ��Ϊa��ѡ�к�Ĭ�����classname 'selected'
 * @param { object } ������
 * @return { object } ����һ��Spageʵ��
 * @requires { 'node' }
 * 
 * Y.Spage��	
 *	˵����	�򵥷�ҳ������
 *	ʹ�ã�	new Y.Spage(nodelist,id,options);
 *	����:	nodelist:{yui3-nodelist}yui3��nodelist
 *	����:	id:{string}����id
 *	���ã�	selected_class {string} ѡ�е�a��className
 *			step:ÿҳ�Ĳ���
 *			index:��ǰ��ʾ�ڼ�ҳ
 *			
 *		
 */

YUI.namespace('Y.Spage');
YUI.add('spage',function(Y){
	Y.Spage = function(){
		this.init.apply(this,arguments);
	};
	Y.Spage.prototype = {
		/**
		 * ������
		 */
		init:function(nodelist,pageid,config){
			var that = this;
			that.buildParam(config);
			that.nodelist = nodelist;
			that.pageid = pageid;

			that.size = that.nodelist.size();
			that.pages = Math.ceil(that.size / that.step);
			that.buildEventCenter();
			that.buildHTML();
			that.bindEvent();
			that.render({index:1});
			return this;
		},
		/**
		 * �¼�����
		 */
		buildEventCenter:function(){
			var that = this;
			var EventFactory = function(){
				this.publish("pagechange");
			};
			Y.augment(EventFactory, Y.Event.Target);
			that.EventCenter = new EventFactory();
			return this;
		},
		/**
		 * �󶨺��� 
		 */
		on:function(type,foo){
			var that = this;
			that.EventCenter.subscribe(type,foo);
			return this;
		},
		/**
		 * ��Ⱦ 
		 */
		render:function(o){
			var that = this;
			var o = o || {};
			that.parseParam(o);
			if(that.index > that.pages)that.index = that.pages;
			that.showPage(that.index);
			return this;
		},
		/**
		 * ��������
		 */
		buildParam:function(o){
			var that = this;
			if(typeof o == 'undefined' || o == null){
				var o = {};
			}
			that.selected_class= (typeof o.selected_class == 'undefined' || o.selected_class == null)?'selected':o.selected_class;
			that.step = (typeof o.step == 'undefined' || o.step == null)?'10':o.step;
			that.index = (typeof o.index == 'undefined' || o.index == null)?1:o.index;
			return this;
		},
		/**
		 * ���˲����б�
		 */
		parseParam:function(o){
			var that = this;
			if(typeof o == 'undefined' || o == null){
				var o = {};
			}
			for(var i in o){
				that[i] = o[i];
			}
			return this;
		},
		showPage:function(index){
			var that = this;
			var as = Y.all('#'+that.pageid+' a');
			as.removeClass(that.selected_class);
			as.item(Number(index) - 1).addClass(that.selected_class);
				
			var rear = (Number(index) - 1) * that.step + 1;
			var top = (rear + that.step - 1 > that.size)?that.size:(rear + that.step - 1);
			that.nodelist.addClass('hidden');
			for(var i = rear;i<=top;i++){
				that.nodelist.item(i - 1).removeClass('hidden');
			}
			that.EventCenter.fire('pagechange',{
				rear:rear,
				top:top,
				index:index,
				step:that.step
			});

		},
		bindEvent:function(){
			var that = this;
			that.pagecon = Y.one('#'+that.pageid);
			that.pagecon.delegate('click',function(e){
				e.halt();	
				var pageNo = Number(e.target.get('innerHTML'));
				that.render({index:pageNo});
				//that.showPage(pageNo);
			},'a');
			return this;
		},

		/**
		 * ����ҳ��
		 */
		buildHTML:function(){
			var that = this;
			that.pagecon = Y.one('#'+that.pageid);
			for(var i = 0;i< that.pages;i++){
				that.pagecon.append(Y.Node.create('<a href="javascript:void(0);">'+Number(i+1)+'</a>'));
			}
		
		}


	};
});
