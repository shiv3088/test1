$(document).ready(function(){
	
	 $('#slider_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '#slider_thumb'
});
$('#slider_thumb').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '#slider_main',
  dots: false,
  arrows: false,
  centerMode: true,
  swiping: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/* var mainSlider = $('#slider_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1, 
	fade: true,   
	infinite: false,
    asNavFor: $('#slider_thumb')
});
var navigationSlider = $('#slider_thumb').slick({
	slidesToShow: 10,
	slidesToScroll: 1,
	centerMode: false,
	focusOnSelect: true,
	arrows: false,
	infinite: false,
	asNavFor: $('#slider_main'),
}); */
//
$('.hotel-city-carousel').slick({
  dots: false,
  infinite: false,
   arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		dots: true,
		
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		dots: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//hotel aminities
$('.hotel-aminities').slick({
  dots: false,
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
	{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
	{
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//
$('#ModifySearchBtn').click(function(){
	$('#modify-engineDiv').slideToggle();
});
//doc
});