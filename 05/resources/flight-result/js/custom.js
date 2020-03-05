 // JavaScript Document
// With JQuery
$(document).ready(function(){
 //Tooltip
 $('[data-toggle="popover"]').popover();
 $("a.my-tool-tip").tooltip();
  //Matrix
	$('.matrix-btn').click(function(){
		$('.matrix-section').slideToggle(500);							   
	});
	

	//Filter pannel js
	
	$('.modify-search-btn, .modifySearchMobile').click(function(){
		$('.modify-search').addClass('open')	
		$('.result-bg').addClass('push')
		$('.page_overlay').show();
	});
	
	
	$('.close-sidebar,.filterApply').click(function(){
	   $('.modify-search').removeClass('open')	
	   $('.result-bg').removeClass('push')
	   $('.page_overlay').hide();
	   $('#leftCntr').removeClass('open')
   });
	
	$('.filter-btn, .modifyFilterMobile').click(function(){
		$('#leftCntr').addClass('open')
		$('.result-bg').addClass('push')
		$('.page_overlay').show();
		});
	
	
	
	
	//Search pannel
	
$("#traveller").click(function (event) {
	$(".traveler-dropdown").slideDown();
});

$(".done").click(function (event) {
	$(".traveler-dropdown").slideUp();

});

$('body').click(function(event){

  $('.traveler-dropdown').hide();

});

$('.traveler-dropdown').click(function(event){
  event.stopPropagation();
});

	
//window id change


	
//mobile itenery fixed	
 $(window).scroll(function() {
	 
 if ($(document).scrollTop() > 85) {
 $('.mobile-itenery').addClass('fixed');
 }
 else {
 $('.mobile-itenery').removeClass('fixed'); }
 });


//add class active for result sorting
$('.results-tabs-left .tab-btn').click(function(){
	$('.results-tabs-left .tab-btn').removeClass('tabactive')					 
	 $(this).addClass('tabactive')
	 
 });

$('.right_sorting .tab-btn').click(function(){
	$('.right_sorting .tab-btn').removeClass('tabactive')					 
	 $(this).addClass('tabactive')
	 
 });


//
$(window).load(function(){

$('.height45').height('.filter-logo');

});


//back to top

$(window).scroll(function() {
		if ($(window).width() > 768) {				  
       $(this).scrollTop() > 800 ? $("#go-top").fadeIn(200) : $("#go-top").fadeOut(800)
		}
		else{}
		
    }), 

$("#go-top").click(function(e) {
        e.preventDefault(), $("html, body").animate({
            scrollTop: 0
        }, "2000", "swing")
    })
//end back to top



//document clo	
});


