/**
*/
YUI.namespace('Y.tipInput');
YUI.add('tip-input',function(Y){

	Y.tipInput = function(){
		this.init.apply(this,arguments);
		this.render();
	};
	Y.tipInput.prototype = {
		setTxt:function(str){
			var fd = this;
			fd.defaultvalue = str;
		},
		init:function(inpt,conf){//input element
			var fd = this;
			var config = conf||{};
			if(typeof inpt == 'string'){
				var inpt = Y.one('#'+inpt);
			}
			if(!inpt)return;
			this.defaultvalue = inpt.get('value')||'';
			this.id = inpt.get('id')||'';
			this.input = inpt;
			inpt.addClass('lightgray');
			Y.on('focus',function(e){
				var el = e.target;
				if(fd.defaultvalue== el.get('value')){//默认文字
					//el.value = '';
					el.set('value','');
					el.removeClass('lightgray');
				}else{
					el.removeClass('lightgray');
					if(config.autoSelecte == true)el.select();
				}
			},inpt);
			Y.on('blur',function(e){
				var el = e.target;
				setTimeout(function(){
					if(el.get('value') == '' || el.get('value') == fd.defaultvalue){
						el.addClass('lightgray');
						el.set('value',fd.defaultvalue);
						//el.value = fd.defaultvalue;
					}
				},101);
			},inpt);
		},
		render:function(){
			var fd = this;
			if(!fd.input)return;
			fd.input.addClass('lightgray');
			fd.input.set('value',fd.defaultvalue);
			//fd.input.value = fd.defaultvalue;
		}
	};

});