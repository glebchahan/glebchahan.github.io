$(function () {

	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		$('*').css({
			"cursor": "pointer"
		});
	}
	
	$(document).ready(function () {
		$('.magnificPopup__Box').magnificPopup({
			delegate: 'a',
			type: 'image',
			removalDelay: 300,
			callbacks: {
				beforeOpen: function () {
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure magnificPopup__Animus');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeOnContentClick: true,
			midClick: true
		})
	});

	$('.main-menu li').removeClass('active');
	var path = window.location.pathname;
	$('.main-menu li a').each(function () {
		var href = $(this).attr('href');
		if (path.slice(1).substring(0, href.length) === href) {
			$(this).parent('li').addClass('active');
		}
	});

	$('.top-line').after('<div class="mobile-menu d-lg-none">');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function () {
		$('.mobile-menu').stop().slideToggle();
	});

	$('.scroll-down').click (function() {
		$('html, body').animate({scrollTop: $('section.about').offset().top }, 'slow');
		return false;
	});

	$(window).on('load', function () {
		$('.preloader').delay(1000).fadeOut('slow');
		var lang = {
			"html": "100%",
			"css": "90%",
			"javascript": "70%",
			"wordpress": "75%",
			"gulp": "85%"
		};
		
		var multiply = 4;
		
		$.each( lang, function( language, pourcent) {
		
			var delay = 700;
			
			setTimeout(function() {
				$('#'+language+'-pourcent').html(pourcent);
			},delay*multiply);
			
			multiply++;
		
		});
	});

	$(".main-menu a, .button a").mPageScroll2id({
		scrollSpeed: 1000
	});

	

	

});
