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


	guardar();
});

$('#howtouse').click(function(){
	$('#howtouse_instructions').toggleClass('active-howtouse');
});

$('#editar').click(function(){
	$('#tabs').toggleClass('active-tabs');
	$('.tab').each(function(){
		if( $('#'+$(this).attr('data-target')).hasClass('active-form') ){
			$('#'+$(this).attr('data-target')).toggleClass('active-form');
		}
	});
});
/*
$('#limpiar').click(function(){
	$('form').each(function(){
		$(this).reset();
	});
	localStorage.clear();
});
*/

$(document).ready(function(){
	if(localStorage!=null){
		$('#aula_u').val(localStorage['aula_u']);
		$('#aula_p').val(localStorage['aula_p']);

		$('#siga_u').val(localStorage['siga_u']);
		$('#siga_e').val(localStorage['siga_e']);
		$('#siga_p').val(localStorage['siga_p']);

		$('#moodle_inf_u').val(localStorage['moodle_inf_u']);
		$('#moodle_inf_p').val(localStorage['moodle_inf_p']);

		$('#sg_industrias_u').val(localStorage['sg_industrias_u']);
		$('#sg_industrias_e').val(localStorage['sg_industrias_e']);
		$('#sg_industrias_p').val(localStorage['sg_industrias_p']);
	}
});

function guardar(){
	localStorage['aula_u'] = $('#aula_u').val();
	localStorage['aula_p'] = $('#aula_p').val();

	localStorage['siga_u'] = $('#siga_u').val();
	localStorage['siga_e'] = $('#siga_e').val();
	localStorage['siga_p'] = $('#siga_p').val();

	localStorage['moodle_inf_u'] = $('#moodle_inf_u').val();
	localStorage['moodle_inf_p'] = $('#moodle_inf_p').val();

	localStorage['sg_industrias_u'] = $('#sg_industrias_u').val();
	localStorage['sg_industrias_e'] = $('#sg_industrias_e').val();
	localStorage['sg_industrias_p'] = $('#sg_industrias_p').val();
}