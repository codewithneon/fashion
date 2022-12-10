
jQuery(document).ready(function () {
	$('.banner-area').backstretch([
		"images/backgrounds/1.jpg",
		"images/backgrounds/2.jpg",
		"images/backgrounds/3.jpg"
	], { duration: 3000, fade: 750 });
});
const austDay = new Date("April 15, 2023 00:00:00");
$('#countdown').countdown({
	until: austDay,
	layout: '<div class="item"><p>{dn}</p> {dl}</div> <div class="item"><p>{hn}</p> {hl}</div> <div class="item"><p>{mn}</p> {ml}</div> <div class="item"><p>{sn}</p> {sl}</div>'
});
$('#year').text(austDay.getFullYear());
$(function () {
	$('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			let target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({ scrollTop: target.offset().top }, 1000);
				return false;
			}
		}
	});
});
