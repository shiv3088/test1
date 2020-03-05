//Shifting div
$(window).resize(function(){
	siftingdiv();

  });

$(window).load(function(){
	siftingdiv();

  });


function siftingdiv(){
		if($(window).width() < 1023)
	{
  		$('#price_block').insertAfter('#user_info');
	}
	
	else{
	  $('#price_block').insertBefore('#secure_block');
	  }
	  
	}
//Shifting div

$(document).ready(function(){

if ($(window).width() < 767) {

$('.cancellation_policy').click(function(){
					 
	$(this).next().show();
	
});


$('.close_tooltip').click(function(){

	$('.show_policy').hide();
	
});	

}
		
//Depart and Return Calender
  $( function() {
    $( "#depart-datepicker,#return-datepicker" ).datepicker();
  } );

  //sorting hover
 $('.sortby').click(function(){
 $('.sortingBox ul').slideToggle();

});

//

//filter for results page here js  

	$('.modify-search-btn, .modifySearchMobile').click(function(){
		$('.modify-search').addClass('open')	
		$('.hotelsection').addClass('push')
		$('.page_overlay').show();
	});
	
	
	$('.close-sidebar,.filterApply').click(function(){
	   $('.modify-search').removeClass('open')	
	   $('.hotelsection').removeClass('push')
	   $('.page_overlay').hide();
	   $('.leftCntr').removeClass('open')
   	});
	
	$('.filter-btn, .modifyFilterMobile').click(function(){
		$('.leftCntr').addClass('open')
		$('.hotelsection').addClass('push')
		$('.page_overlay').show();
		});
	
	
	
	//mobile itenery fixed	
	 $(window).scroll(function() {
	 
	 if ($(document).scrollTop() > 53) {
	 $('.mobile-itenery1').addClass('fixed');
	 }
	 else {
	 $('.mobile-itenery').removeClass('fixed'); }
	 });
 
	$('.filter_menu').click(function(){
		 $('.leftCntr').addClass('open')
		 $('.centerCntr').addClass('push')
	 });

$('.filter_close').click(function(){
  	$('.leftCntr').removeClass('open')
	 $('.centerCntr').removeClass('push')
  });


//Accordian js

 /*$(".thumbRoomDetail").click(function () {
	 
	$('.room-row').removeClass('selected').next().hide('.room-detail');
	$(this).parent().parent().addClass('selected')
	$(".room-row.selected").next().show();
	
	 $(this).children().toggleClass("fa-plus").toggleClass("fa-minus");
	
 });*/

 
  
//close document tag  
$('.room-input').focus(function(){
	
	$('.kids_group_detail').slideDown();
});
$('.confirm_room').click(function(){
	$('.kids_group_detail').slideUp();
	
	});

//add Room popup open on modify search here js  

//detail page js click about and room start here
$("#about_more").click(function() {
	$('html,body').animate({
		scrollTop: $("#about_hotel").offset().top - 50},
		'slow');
});
$("#selectRoom").click(function() {
	$('html,body').animate({
		scrollTop: $("#roomBlock").offset().top - 50},
		'slow');
	
	
	
	
});              
  
//detail page js click about and room end here




	}); //document
	
//




