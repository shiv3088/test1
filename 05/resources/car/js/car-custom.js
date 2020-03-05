//Shifting div using payment page
$(window).load(function() {
  siftingdiv();

 });
 
 function siftingdiv(){
		if($(window).width() < 1026)
	{
  		$('.priceBox').insertAfter('#billing_information');
	}
	
	else{
	  $('.priceBox').insertAfter('#add_block');
	  }
	  
	}
//Shifting div

$(document).ready(function(){
	
$('.showbtn').click(function(){
			$(this).next().slideToggle();
			$(this).toggleClass('hide-btn')
				if($(this).text() == 'Hide')
				{
					$(this).text('Show');
				}
				else
				{
					$(this).text('Hide');   
				}
		
		});
		
		//button 2
		$('.expend_rule').click(function(){
			$(this).next().slideToggle();
			$(this).toggleClass('hide-btn')
				if($(this).text() == 'Hide')
				{
					$(this).text('Show');
				}
				else
				{
					$(this).text('Hide');   
				}
		
		});
		
//

//filter for results page here js  
	
	$('.close-sidebar,.filterApply').click(function(){
		$('.carLeftCtrl').removeClass('open')
	   $('.page_overlay').hide();
	   $('#modifySection').removeClass('open')
		$('.result-body').removeClass('push')
   	});
	
	$('.filter-btn, .modifyFilterMobile').click(function(){
		$('.carLeftCtrl').addClass('open')
		$('.result-body').addClass('push')
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
 
	}); //document
	
//




