$(document).ready(function(){
	$(document).on('tap', 'button', function(){
		var toAdd = $('input[name=einkauf-element]').val();
		if (toAdd == ''){
			return false;
		}
		else {
			$('#liste').append('<div class="item item-red">' + toAdd + '</div>');
		};
		$('input').val('');
		$('input').focus();
		});

	$(document).on('tap', '.item', function(){
		$(this).toggleClass('item-red').toggleClass('item-green');
	});

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