$(document).ready(function(){
	$('#delete').hide();

	//$(document).on('click', '#name-button', function(){ // <-- uncomment for desktop testing, comment for mobile
	
	$('#name-button').tap(function(){  // <-- comment for desktop testing, uncomment for mobile
		var listName = $('input[name=list-name]').val();
		if (listName == ''){
			return false;
		}
		else {
			$('#container').prepend('<h1>' + listName + '</h1>');
		};
		$('#list-name-form').remove();
		$('#name-button').remove();
		$('p').remove();
		$('#container').toggleClass('hide-see');
	})

	//$(document).on('click', '#list-button', function(){ // <-- uncomment for desktop testing, comment for mobile

	$('#list-button').tap(function(){  // <-- comment for desktop testing, uncomment for mobile
		var toAdd = $('input[name=einkaufelement]').val();
		if (toAdd == ''){
			return false;
		}
		else {
			$('#liste').append('<div class="item item-red">' + toAdd + '</div>');
		};
		$('#item-input').val('');
		$('#delete').show();
		});

	$(document).on('tap', '.item', function(){
		$(this).toggleClass('item-red').toggleClass('item-green');
	});

	$(document).on('tap', '#delete', function(){
		$('.item').remove();
		$(this).hide();
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