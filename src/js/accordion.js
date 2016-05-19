'use strict';

$(function() {
	$('.updates__banners__titles').click(function() {
		$('.updates__banners__titles span').html('+');
		if($(this).hasClass('updates__banners__titles-active')) {
			$(this).removeClass('updates__banners__titles-active');
			$(this).next().slideUp();
		} else {
			$('.updates__banners__text').slideUp();
			$('.updates__banners__titles').removeClass('updates__banners__titles-active');
			$(this).addClass('updates__banners__titles-active');
			$(this).children('span').html('-');
			$(this).next().slideDown();
		}
	});
});