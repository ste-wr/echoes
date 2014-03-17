//we have to load jquery in no-conflict mode
jQuery(document).ready(function($) {
	$('.sidebar-toggle').click(function() {
		if($('.sidebar').hasClass('open')) {
			$('.sidebar').removeClass('open');
			var set = parseInt($('#wrapper').css('margin-left').replace(/[^-\d\.]/g, ''))+200;
			$('#wrapper').animate({marginLeft: set+"px"}, 500);
			$('.sidebar').animate({width: "5px"}, 500);
		} else {
			$('.sidebar').addClass('open');
			var set = parseInt($('#wrapper').css('margin-left').replace(/[^-\d\.]/g, ''))-200;
			$('#wrapper').animate({marginLeft: set+"px"}, 500);
			$('.sidebar').animate({width: "400px"}, 500);
		}
	});
});