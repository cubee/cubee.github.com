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
 *		onload:{function} ��ʼ����չ����
 *		disable:{function} �����¼������ɵ��������ΪArray,[1,2,3]���ɵ����������Ĭ��ȫ�����ɵ��
 *		enable:{function} �ָ��ɵ��������ΪArray,[1,2,3]�ָ������Ĭ��ȫ���ɵ�
 *		refresh:{function} ���¼���
 *
 * Y.Checkbox��	
 *	˵����	�̳�Y.Radio��ʵ�ָ�ѡ����
 *	ʹ�ã�	new Y.Checkbox(selector,config)
 * 		changeEvent:{mether} ��дY.Radio��change�¼�
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
			if(!(this.con = Y.one(selector))) return;
			this.nodes = this.con.all('a');
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
		bind:function(){
			var that = this;
			Y.delegate('click',function(e){
				e.halt();
				that.changeEvent(e.target);
			},that.con,'a');
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
		changeEvent : function(node){
			var _i = this.nodes.indexOf(node);
			this.nodes.removeClass('selected');
			node.addClass('selected');
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
			if(!param){
				this.nodes.removeClass('selected').addClass('nohover');
				this.nodes.on('click',function(e){e.halt()});
			}
			else{
				for(var i=0;i<param.length;i++){
					this.nodes.item(param[i]-1).removeClass('selected').addClass('nohover');
					//��ֹ�¼�ð��
					this.nodes.item(param[i]-1).on('click',function(e){e.halt()});
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
			if(!param){
				this.nodes.removeClass('nohover');
				//�Ƴ������¼����ָ��¼�ð��
				this.nodes.detach('click');
			}
			else{
				for(var i=0;i<param.length;i++){
					this.nodes.item(param[i]-1).removeClass('nohover');
					//�Ƴ�ָ��������node�¼����ָ��¼�ð��
					this.nodes.item(param[i]-1).detach('click');
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
		 * @param {o} object �������
		 * o.onload() �����Զ����ʼ����
		 * defaultShow() �����Զ���Ĭ��ֵ
		 */
		buildParam : function(o){
			var o = o?o:{};
			if(typeof o.onload !== 'undefined' && o.onload !== null){o.onload(this);}
			if(typeof o.showindex !== 'undefined' && o.showindex !== null){this.defaultShow(o.showindex);}
		}
	};
	/**
     	 * Y.Checkbox �̳�Y.Radio��ʵ�ָ�ѡ���� 
	 * @mether changeEvent ��дY.Radio��change�¼�
	 * @param {node} ��ǰ������node 
	 */
	Y.namespace('Y.Checkbox');	
	Y.Checkbox = function() {
		Y.Checkbox.superclass.constructor.apply(this,arguments);
	};
	Y.extend(Y.Checkbox,Y.Radio);
	Y.Checkbox.prototype.changeEvent = function(node){
		var _i = this.nodes.indexOf(node);
		//ѡ�л�ȡ��
		node.toggleClass('selected');
		//����change�¼��Ĳ���
		this.EventCenter.fire('change',{index:_i,show:"no"});
	}
},'',{requires:['node']});
