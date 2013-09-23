$(document).ready( function() {

	$("input").focusin( function() {
		$(this).stop().animate({ boxShadow: '0 0 3px 1px rgba(104, 170, 170, 0.5)' }, 100);
		if($(this).val() == $(this).attr('empty')) $(this).val('').css('color', '#464646')

	}).focusout( function() {
		$(this).stop().animate({ boxShadow: 'none' }, 100);
		if($(this).val() == '') $(this).val($(this).attr('empty')).css('color', '#c0c0c0')
	});

	$(".button").mousedown( function() {
		$(this).addClass('clicked');
	})

	$(document).mouseup( function() {
		$(".button").removeClass('clicked');
	})

	$(".button").each( function() {
		var text = '<br/>' + $(this).text();
		$('<span/>').html(text).appendTo($(this));
	});


	$(".toggle").click( function() {
		var handle = $(this).find('.handler');
		if(handle.hasClass('toggled')) {
			handle.stop().animate({left: -5}, 200).removeClass('toggled');
		} else {
			handle.stop().animate({left: 28}, 200).addClass('toggled');
		}

	});

});