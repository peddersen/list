$(document).ready(function(){
	$('button').tap(function(){
		var toAdd = $('input[name=einkauf-element]').val();
		if (toAdd == ''){
			return false;
		}
		else {
			$('#liste').append('<div class="item item-red">' + toAdd + '</div>');
		};
		$('input').val('').focus();
		});

	$(document).on('tap', '.item', function(){
		$(this).toggleClass('item-red').toggleClass('item-green');
	});

	$(document).on('longTap', '.item', function(){
		$(this).remove();
	});
	
/*
	var timeoutId = 0;
	$(document).on('mousedown', '.item', function(){
		var $this= $(this);
		timeoutId = setTimeout(function(){ $this.remove() }, 500);
	}).bind('mouseup mouseleave', function() {
		clearTimeout(timeoutId);
	});
*/

	$('input').keypress(function (evt) {
		var charCode = evt.charCode || evt.keyCode;
		if (charCode  == 13) { //Enter key's keycode
			return false;
		}
	});

});

//