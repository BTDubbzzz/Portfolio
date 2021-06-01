function vhTOpx(value) {
	var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		x = w.innerWidth || e.clientWidth || g.clientWidth,
		y = w.innerHeight || e.clientHeight || g.clientHeight;

	var result = (y * value) / 100;
	return result;
}

const pixels = vhTOpx(5);

$(function () {
	$.scrollIt({
		upKey: 38,
		downKey: 40,
		easing: 'linear',
		scrollTime: 600,
		activeClass: 'active',
		onPageChange: null,
		topOffset: pixels * -1,
	});
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
