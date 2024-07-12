$(document).ready(function(){
	// Mobile Menu
	// $('.logo a i').click(function(){
	// 	$('.menu ul').slideToggle(1000);

	// 	return false
	// });

	// Banner Carousel
	$('.machine_carousel').owlCarousel({
		items:10.4,
		loop:true,
		nav:false,
		margin:64,
		center:true,
		dots:false,
		autoplay:true,
		responsive : {
			// breakpoint from 0 up
			0 : { 
				items:5.4,
			},
			// breakpoint from 480 up
			480 : {
				items:7.4,
			},
			// breakpoint from 768 up
			768 : {
				items:10.4,
			}
		}
	});





});