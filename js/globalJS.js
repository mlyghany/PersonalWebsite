$(document).ready(function () {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}

	});
 });
 
/* The following are used for transitions and animations */

var ll = [];
var lh = [];
var wscroll = 0;
var wh = 0;
	
 function update_offsets(){
	lh = [];
  $('section').each(function(){
	var x = $(this).offset().top;
	lh.push(x);
  });
};

function lazy() {
  wscroll = $(window).scrollTop();
  for(i = 0; i < lh.length; i++){
	if(lh[i] <= wscroll + (wh - 100)){
	  $('section').eq(i).addClass('loaded');
	};
  };
};

$(window).on('scroll',function(){
	wh = $(window).height();
	update_offsets();
	lazy();
	
	//For Profile Picture
	profilePicture_checkVisible();
});

$(document).ready(function () {
	ll = $('section');
	wh = $(window).height();
	
	update_offsets();
	lazy();
	
	//For Profile Picture
	profilePicture_checkVisible();
});

function contactDetails_onClick(element){
	var parent = element.parentElement.id;
	
	var targetElement = "#" + parent + "ContactDetail";
	
	$(targetElement).toggleClass('contactDetailLoaded');
}

function profilePicture_checkVisible(){
	var element = document.getElementById("profilePicture");
	
	console.log(elementInViewport(element));
	if (elementInViewport(element)){
		$("#profilePicture").addClass('profilePictureLoaded');
	}
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}