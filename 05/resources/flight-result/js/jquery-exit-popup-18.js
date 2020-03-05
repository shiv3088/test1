$(window).load(function() {
			$(document).mousemove(function (e) {
				if (e.clientY < 5) {
					 if($('#callpopupopen').val() == 0){
					$('.exit-pop-call').fadeIn();
					$('.cross,.thanks').click(function () {
						$(this).parent().fadeOut();
						$(this).parent().remove();
					});
					$('.apply').click(function(){
						 document.getElementById("couponsCode").value='INSTANT10';
						 angular.element(document.getElementById("target")).scope().collapsed =true;
		                 angular.element(document.getElementById("target")).scope().collapsed =true;
                         angular.element(document.getElementById("target")).scope().selectedCoupons='INSTANT10';
                         angular.element(document.getElementById("target")).scope().checkCoupons('X');
                    
					$(this).parent().remove();
                  });
					 }
        }
    });
});