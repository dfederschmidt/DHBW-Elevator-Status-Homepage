$(document).ready(function(){

	var images = $("img"),
		arrows = $(".down-arrow");

	for(var i = 0; i < images.length; i++) {
		(function(index) {
			$(arrows[index]).click(function() { smoothScroll(images[index]) });
	   	}) (i);
			
	}

	function smoothScroll(image) {
			$('html, body').animate({
		        scrollTop: $(image).offset().top - 40
		    }, 1500);
	}

});