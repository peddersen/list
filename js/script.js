$(document).ready(function(){
	$('button').click(function(){
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
	$(document).on('click', '.item', function(){
		$(this).toggleClass('item-red');
		$(this).toggleClass('item-green');

	});


	
	
});
