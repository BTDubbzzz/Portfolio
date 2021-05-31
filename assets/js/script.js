$(function () {
	$.scrollIt();
});

$(function () {
	const mainNav = $('nav');
	headerHeight = $('nav').height();

	$(window).scroll(function () {
		// if ($(this).scrollTop() > headerHeight) {
		// 	mainNav.addClass('sticky');
		// } else {
		// 	mainNav.removeClass('sticky');
		// }
		if ($(this).scrollTop() > headerHeight * 3) {
			mainNav.addClass('sticky');
			mainNav.addClass('inView');
		} else {
			mainNav.removeClass('sticky');
			mainNav.removeClass('inView');
		}
	});
});
