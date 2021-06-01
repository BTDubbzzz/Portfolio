$(function () {
	$.scrollIt();
});

$(function () {
	const scrollNav = $('#scroll-nav');
	const topNav = $('#top-nav');
	headerHeight = $('#scroll-nav').height();

	$(window).scroll(function () {
		// scrollNav.addClass('upper');
		// if ($(this).scrollTop() > 250) {
		// 	scrollNav.addClass('sticky');
		// } else {
		// 	scrollNav.removeClass('sticky');
		// }
		if ($(this).scrollTop() > 250 * 3) {
			scrollNav.addClass('inView');
		} else {
			scrollNav.removeClass('inView');
		}
	});
});
