$(document).ready(function () {
	

//Mixitup
var mixer = mixitup('.grid-works-container');


//scrollify
$(function() {
	$.scrollify({
		section: ".scrollify",
		setHeights: false,
		updateHash: false,
	});
});
  


//smoth scroll
$(function () {
	$('.menu-item a, .scroll-down a').on('click', function () {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
		return false;
	});
});

	
	
UIkit.util.on('#js-scroll-trigger', 'scrolled', function () {
    alert('Done.');
});


$(document).on('click', 'ul li', function () {
	$(this).addClass('active').siblings().removeClass('active')
})
	
})

//Hamburgar Menu
function openNav() {
	document.getElementById('myNav').style.width = "100%";
}

function closeNav() {
	document.getElementById('myNav').style.width = "0%";
}

