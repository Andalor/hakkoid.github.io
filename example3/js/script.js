var bar = $("#navigation__bar"),
	nav = $("#navigation")
	navUl = $("#navigation__ul"),
	close = $("#navigation__close");


bar.on('click', function () {
	nav.addClass("navigation_full-page");
	navUl.addClass("navigation__ul_full-page");
	close.addClass("navigation__close_full-page");
})

close.on('click', function() {
	nav.removeClass("navigation_full-page");
	navUl.removeClass("navigation__ul_full-page");
	close.removeClass("navigation__close_full-page");
})

$('.navigation__li_mobile').each(function () {
	$(this).on('click', function() {
		nav.removeClass("navigation_full-page");
		navUl.removeClass("navigation__ul_full-page");
		close.removeClass("navigation__close_full-page");
	})
})