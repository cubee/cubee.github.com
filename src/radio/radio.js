/**
 * radio.js ��������ؼ�
 * author:lover_116@163.com ����
 * @class Y.Radio
 * @param {string} �������ߴ���selector 
 * @param {object} ������
 * @return {object} ����һ��radioʵ��
 * @requires {'node'}
 * 
 * Y.Radio��	
 *	˵����	radio��������ͨ��new Y.Radio��renderһ��radio
 *	ʹ�ã�	new Y.Radio(selector,config)
 *	����:	selector:{string}����ѡ��������ȡ���node
 *	���ã�	showindex {num} Ĭ����ʾ����
 *			onload:{function} ��ʼ����չ����
 *			disable:{function} �����¼������ɵ��������ΪArray,[1,2,3]���ɵ����������Ĭ��ȫ�����ɵ��
 *			enable:{function} �ָ��ɵ��������ΪArray,[1,2,3]�ָ������Ĭ��ȫ���ɵ�
 *			closeable:{boolean} �Ƿ�ѡ�رգ�����״̬�������ã���Ĭ��Ϊfalse
 *			anchor:{boolean}�Ƿ���ê��Ч����ȥ��e.halt()
 *			range:{start:date,end:date} Ĭ��ѡ��Χ
 *			refresh:{function} ���¼���
 */
YUI.namespace('Y.Radio');
YUI.add('radio',function(Y){
	Y.Radio = function(){
		this.init.apply(this,arguments);
	};
	Y.Radio.prototype = {
		/**
		 * ��ʼ��
		 * @param {selector}����ѡ����
		 * @param {config}��ʼ����
		 */
		init:function(selector,config){
			this.nodes = Y.one(selector).get('tagName') == 'A'?Y.all(selector):Y.all(selector).get('parentNode');
			this.buildEventCenter();
			this.bind();
			this.buildParam(config);
		},
		/**
		 * �¼����� �����Զ���change�¼�
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
		 * ��click�¼�����
		 * @mether bind 
		 * @param {node} object node����
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
		 * ���¼�����
		 * @mether on 
		 * @type event 
		 * @param {type} string �Զ���ʱ����
		 * @param {foo} function ʵ�ַ���
		 */
		on:function(type,foo){
			var that = this;
			that.EventCenter.subscribe(type,foo);
			return this;
		},
		/**
		 * @mether changeEvent
		 * change�¼��ľ���ʵ��
		 * @param {e} ��ǰ����node
		 */
		changeEvent : function(e){
			var isA = e.target.get('tagName') == 'A'?true:false;
			var _n = isA?e.target:e.target.get('parentNode');
			var _i = this.nodes.indexOf(_n);
			this.nodes.removeClass('selected');
			_n.addClass('selected');
			//����change�¼��Ĳ���
			this.EventCenter.fire('change',{index:_i,show:"no"});
		},
		/**
		 * @attribute defaultShow
		 * @type num
		 * @param {i} ��ʾ������1��ʼ
		 * @default null
		 */
		defaultShow : function(i){
			if(i<1) {return;}
			this.nodes.item(i-1).addClass('selected');
			return this;
		},
		/**
		 * ʧЧ�¼�ʵ��
		 * @mether disable 
		 * @type function
		 * @param {param} array �ڵ�����
		 * @default null,���нڵ�ʧЧ
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
		 * �ָ��¼�ʵ��
		 * @mether enable 
		 * @type function
		 * @param {param} array �ڵ�����
		 * @default null,���нڵ�ָ�
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
		 * ���¼��� 
		 * @mether refresh 
		 * @type function
		 */
		refresh: function(){
			this.nodes.refresh();
			this.bind();
			return this;
		},
		/**
		 * �������� 
		 * @mether buildParam 
		 * @type function
		 * @param {e} object �������
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
