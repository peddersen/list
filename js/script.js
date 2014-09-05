$(document).ready(function(){
	$('button').tap(function(){
		var toAdd = $('input[name=einkaufelement]').val();
		if (toAdd == ''){
			return false;
		}
		else {
			$('#liste').append('<div class="item item-red">' + toAdd + '</div>');
		};
		$('input').val('');
		});

	$(document).on('tap', '.item', function(){
		$(this).toggleClass('item-red').toggleClass('item-green');
	});
/*
	$(document).on('tap', '#delete', function(){
		&('.item').remove();
	});
*/
	$(document).on('longTap', '.item', function(){
		$(this).remove();
	});

	$('input').keypress(function (evt) {
		var charCode = evt.charCode || evt.keyCode;
		if (charCode  == 13) { //Enter key's keycode
			return false;
		}
	});

});

//