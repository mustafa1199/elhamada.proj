$("#ratings").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    dots: true,
    nav: false,
    animateOut: ''
});
$(".owl-carousel").owlCarousel();
$(document).ready(function () {
    $("#loader-wrapper").addClass("d-none");
    $(document).scroll(function(){
		if ($(document).scrollTop()>150) {
			$("#up-btn").css("opacity","1")
		}else {$("#up-btn").css("opacity","0")}
	})
});
