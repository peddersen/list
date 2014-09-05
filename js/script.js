$(document).ready(function(){

	$('#name-button').tap(function(){
		var listName = $('input[name=list-name]').val();
		if (listName == ''){
			return false;
		}
		else {
			$('#container').prepend('<h1>' + listName + '</h1>');
		};
		$('#list-name-form').remove();
		$('#name-button').remove();
		$('#container').toggleClass('hide-see');
	})

	$('#list-button').tap(function(){
		var toAdd = $('input[name=einkaufelement]').val();
		if (toAdd == ''){
			return false;
		}
		else {
			$('#liste').append('<div class="item item-red">' + toAdd + '</div>');
		};
		$('#item-input').val('');
		});

	$(document).on('tap', '.item', function(){
		$(this).toggleClass('item-red').toggleClass('item-green');
	});

	$(document).on('tap', '#delete', function(){
		$('.item').remove();
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