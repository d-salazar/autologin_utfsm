$('.login').click(function(){
	$('#'+$(this).attr('data-target')).submit();
});

$('.tab').click(function(){
	var target = $('.active-form').attr('id');
	$('.active-form').toggleClass('active-form');
	if( $(this).attr('data-target') != target ){
		$('#'+$(this).attr('data-target')).toggleClass('active-form');
	}
});

$('input').change(function(){
	if( $(this).val() == "" ){
		var parent = $(this).parent();
		$('.login').each(function(index){
			if( $(this).attr('data-target')== parent.attr('id') ){
				$(this).addClass('no-ok');
			}
		});
	}
});