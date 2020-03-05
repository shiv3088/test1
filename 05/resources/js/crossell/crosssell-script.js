'use strict';
(function(){
    // Car
    $('#carModifySearchBtn').click(function(){
        var $this = $(this), ms = 'Modify Search', cs = 'Close Search', mst = $(this).find('span').text() === 'Modify Search';
        $('#carModifySearch').slideToggle();
        $('#hotelModifySearch').slideUp();
        mst ? $this.find('span').text(cs) : $this.find('span').text(ms);
    });

    // $('#closeCarSearch').click(function(){
    //     $('#carModifySearch').slideUp();
    // })

    //Hotel

    $('#hotelModifySearchBtn').click(function(){
        var $this = $(this), ms = 'Modify Search', cs = 'Close Search', mst = $(this).find('span').text() === 'Modify Search';
        $('#hotelModifySearch').slideToggle();
        $('#carModifySearch').slideUp();
        mst ? $this.find('span').text(cs) : $this.find('span').text(ms);
    });

    // $('#closeHtlSearch').click(function(){
    //     $('#hotelModifySearch').slideUp();
    // })

    var carTrip = $('.cxl-add2trip[data-btn="carAdd2Trip"]');
    var hotelTrip = $('.cxl-add2trip[data-btn="hotelAdd2Trip"]');

    function itineraryAdded(){
        $('#addedInItinerary').slideDown('slow'); 
        setTimeout(function(){
            $('#addedInItinerary').slideUp(); 
        }, 3000);
    }

    $('.cxl-add2trip').each(function(){
        $(this).click(function(){
            
            if($(this).data('btn') === "carAdd2Trip"){
                itineraryAdded();
                if(carTrip.hasClass('active')){
                    carTrip.find('span').text('Add To Trip');
                }
                $(this).find('span').text('Trip Added');
                carTrip.removeClass('active');
                $(this).addClass('active');
                $('.added2trip-itinerary').show();
               // $('#carAdded2Cart').slideDown();
            }
            if($(this).data('btn') === "hotelAdd2Trip"){
                itineraryAdded();
                if(hotelTrip.hasClass('active')){
                    hotelTrip.find('span').text('Add To Trip');
                }
                $(this).find('span').text('Trip Added');
                hotelTrip.removeClass('active');
                $(this).addClass('active');
                $('.added2trip-itinerary').show(); 
             //   $('#hotelAdded2Cart').slideDown();
            }
            if($(this).data('btn') === "parkNflyAdd2Trip"){
                itineraryAdded();
                $(this).find('span').text('Trip Added');
                $(this).addClass('active');
                $('.added2trip-itinerary').show();
                $('#airportTransfersAdded2Cart').slideDown();
            }

        })
    });

	  $('.removeTrip').each(function(){
        $(this).click(function(){
            if($(this).data('link') === "carRemove"){
                $('#carAdded2Cart').slideUp();
                carTrip.find('span').text('ADD To Trip');
                //carTrip.css('background-color','');
                carTrip.removeClass('active');
            }
            if($(this).data('link') === "hotelRemove"){
                $('#hotelAdded2Cart').slideUp();
                hotelTrip.find('span').text('ADD To Trip');
                //hotelTrip.css('background-color','');
                hotelTrip.removeClass('active');
            }
            if($(this).data('link') === "tpRemove"){
                $('#travelProtectionAdded2Cart').slideUp();
                $('#insuranceIcon').attr('src', '/resources/images/crosssell-images/insurance-icon-gray.png');
                $('#protectYes').prop('checked', false);
                $("#tripMate").val("No");
                $("#tripMateFinal").val(0.0);
                $("#isInsApplied").val(false);
            }
            if($(this).data('link') === "apRemove"){
                $('#airportTransfersAdded2Cart').slideUp();
                $('.cxl-add2trip[data-btn="parkNflyAdd2Trip"]').find('span').text('ADD To Trip');
                //$('.cxl-add2trip[data-btn="parkNflyAdd2Trip"]').css('background-color','');
                $('.cxl-add2trip[data-btn="parkNflyAdd2Trip"]').removeClass('active');

            }
            if($(this).data('link') === "brbRemove"){
               
                $('#brbAdded2Cart').slideUp();
                $("#brb").val("No");
                $("#brbFinal").val(0.0);
                $("#isBrbApplied").val(false);
            }
            finalTotalSet();
        })
    });
    
    $('#protectYes').click(function(){
        if(this.checked) {
            $('#insuranceIcon').attr('src', '/resources/images/crosssell-images/insurance-icon-green.png');
            $('#travelProtectionAdded2Cart').slideDown();
            $("#tripMate").val("Yes");            
            $("#tripMateFinal").val($("#formattedTripMate").val());
            $("#isInsApplied").val(true);
            finalTotalSet();
            $.post( "/addToCartInsurance",function(data) {
       		
       		});
        }
    });
    $('#protectNo').click(function(){
        if(this.checked) {
            $('#insuranceIcon').attr('src', '/resources/images/crosssell-images/insurance-icon-red.png');
            $('#travelProtectionAdded2Cart').slideUp();
            $("#tripMate").val("No");
            $("#tripMateFinal").val(0.0);
            $("#isInsApplied").val(false);
            finalTotalSet();
        }
    });

    // Brb Script //
    $('.brbGold').click(function(){
        itineraryAdded();
        if(this.checked) {
            $('#brbAdded2Cart').slideDown();
        }
    });
  
    $('.showRoom').click(function(){
        $('.showRoomDiv').slideToggle();
    });
    
    $(".cardSelectInput").click(function(){
    	
    	if($(this).val() == 'old'){
    		$("#isNewCard").val(false);
    		
    	}
    	else{
    		$("#isNewCard").val(true);
    	}
    	
    });
    
    if($("#isNewCard").val() == 'true'){
		   $("input:radio[name='card']").filter('[value="new"]').attr('checked', true);
	   }
   

})();

 
var flight = false;
//var hotel = true;
//var tp = true;
//var car = true;
function infoOpen(e){
    if(e.id === "flightInfo"){
        flight = !flight;
        $('#flightInfoDiv').slideToggle();
        if(flight){
            $('#flightInfo').find('.fa').removeClass('fa-plus').addClass('fa-minus');
        }else{
            $('#flightInfo').find('.fa').removeClass('fa-minus').addClass('fa-plus');
        }
    }

   
}


var i = 0, j=1, k=0;

function valueOnClick(e){

    // Add Room //
    if(e.id === 'addInputRoom'){
        if (i < 6 && i >= 0) {
            i++;
            $('#subRoomType0').clone().insertAfter('#subRoomType'+(i-1)).attr('id', 'subRoomType'+ i);
            $('#subRoomType' + i).find('.roomNum').html(i);
            $('#subRoomType' + i).find('#addInputSubRoom').attr('id', 'subRoomType'+ i);
            $('#subRoomType' + i).find('#subtInputSubRoom').attr('id', 'subRoomType'+ i);
        }
        document.getElementById('room').value = i;
    }
    if(e.id === 'subtInputRoom'){
        if (0<i && i<=6) {
            i--;
            $('#subRoomType' + i).hide();
            $('#subRoomType' - i).find('.roomNum').html(i);
        }
        document.getElementById('room').value = i;
    }
    
    // Add Adult //
    if(e.id === 'addInputAdults0'){
        if (j < 6 && j >=0) {
            j++;
        }
        document.getElementById('adult0').value = j;
    }
    if(e.id === 'subtInputAdults0'){
        if (0<j && j<=6) {
            j--;
        }
        document.getElementById('adult0').value = j;
    }
  
    if(e.id === 'addInputSubRoom'+i){
        if (k < 6 && k >=0) {
            k++;
        }
        document.getElementById('subRoom').value = k;
    }
    if(e.id === 'subtInputSubRoom'){
        if (0<k && k<=6) {
            k--;
        }
        document.getElementById('subRoom').value = k;
    }


}

function brbSetValue(code,value){
	var totalPax = $("#totalPax").val();
	$(".brbPriceDisplay").html(value);
	$(".brbPriceDisplayTotal").html((value*totalPax).toFixed(2));
	$(".brbProductDisplay").html(code);
	$("#brb").val("Yes");
	$("#brbFinal").val(value*totalPax);
	$("#isBrbApplied").val(true);
	$("#brbProductCode").val(code);
	$("#brbProductPrice").val(value);
	
	console.log("isBrbApplied : "+$("#isBrbApplied").val());
	console.log("brbProductCode : "+$("#brbProductCode").val());
	console.log("brbProductPriceFlight : "+$("#brbProductPriceFlight").val());
	finalTotalSet();
	$.post( "/addToCartBRB",function(data) {
   		
		});
}

function finalTotalSet(){
	
	
	
	var total = (Number($("#brbFinal").val())+Number(($("#tripMateFinal").val()).replace(",", ""))+Number($("#hotelFinal").val())+Number($("#carFinal").val())+Number($("#pnfFinal").val())+Number($("#carDamageFinal").val()))-(Number($("#carCouponAmt").val())+Number($("#hotelCouponAmt").val()));
	console.log("1"+$("#brbFinal").val())
	console.log("2"+$("#tripMateFinal").val())
	console.log("3"+$("#hotelFinal").val())
	console.log("4"+$("#carFinal").val())
	console.log("5"+$("#pnfFinal").val())
	console.log("6"+$("#carDamageFinal").val())
	console.log("7"+$("#carCouponAmt").val())
	console.log("8"+$("#hotelCouponAmt").val())
	
	console.log("9"+total)
	
	$("#finalTotalPrice,#finalTotalPriceMobile").html(total.toFixed(2));
}


function movePaymentPage(){
	
	var paymentURL = "/crossell/payment-";
	var finalTotalPrice = $("#finalTotalPrice").text();
	if(finalTotalPrice == 0.00){
		$("#productError").show();
		return false;
	}
	
		 var b = randomString(12);
		 if($("#selectedHotel").val() != ''){
			 paymentURL = paymentURL+"h";
		 }
		 if($("#selectedCar").val() != ''){
			 paymentURL = paymentURL+"c";
		 }
		 if($("#selectedPnf").val() != ''){
			 paymentURL = paymentURL+"p";
		 }
		 if($("#selectedHotel").val() == '' && $("#selectedCar").val() == '' && $("#selectedPnf").val() == ''){
			 paymentURL = paymentURL+"o";
		 }
		 
		 paymentURL = paymentURL+"/";
		 
		/*if($("#selectedHotel").val() != '' && $("#selectedCar").val() != ''){
			paymentURL = "/crossell/payment-hc/";
		}
		else if($("#selectedHotel").val() != ''){
			paymentURL = "/crossell/payment-h/";
		}
		else if($("#selectedCar").val() != ''){
			paymentURL = "/crossell/payment-c/";
		}
		else{
			paymentURL = "/crossell/payment-o/";
		}*/
		 
	//	if($("input[name='rbtnBrb']").is(":checked") ==  true || $("#protectYes").is(":checked") == true){ 
			if($('#currentDevice').val()=="Normal"){	
				$("form#searchHotelCar").attr({action: paymentURL+b});
			}else if($('#currentDevice').val()=="Mobile"){
				$("form#searchHotelCar").attr({action: "/m"+paymentURL+b});
			}else if($('#currentDevice').val()=="Tablet"){
				$("form#searchHotelCar").attr({action: "/t"+paymentURL+b});
			}else{
				$("form#searchHotelCar").attr({action: paymentURL+b});
			}
				
		$("form#searchHotelCar").submit()
		/*}
		else{
			$("#tripMateError").show();
			$("#brbError").show();
		}*/
	}

function removeBRB(){
	
	$.post( "/removeCartBRB", function(data) {
		 $("#brbFinal").val("0.00"); 
		finalTotalSet();
		});
	$("input[name='rbtnBrb']").prop('checked',false);
}

function removeInsurance(){
	$.post( "/removeCartInsurance",function(data) {
		 $("#tripMateFinal").val("0.00"); 
		finalTotalSet();
		});
	
}
function openConfirmation(id){
	//window.location.href = "/flight/booked/"+id;
	window.open( 'https://www.travelopick.com/flight/booked/'+id);
}   

function submitHotelForm(hotelId) {
    var a = $("#searchHotelCar").validate({
        showErrors: function() {
            if (this.settings.highlight)
                for (var a = 0; this.errorList[a]; ++a) this.settings.highlight.call(this, this.errorList[a].element, this.settings.errorClass, this.settings.validClass);
            if (this.settings.unhighlight)
                for (var a = 0, b = this.validElements(); b[a]; ++a) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
        },
        rules: {
        	'hotelSearch.stayCity': {
                required: !0,
                minlength: 3
            },
            checkInDate: {
                required: !0
            },
            checkOutDate: {
                required: !0
            },
            room: {
                required: !0,
                range: [1, 5]
            }
        },
        errorElement: "span",
        messages: {
        	'hotelSearch.stayCity': {
                required: "Please enter a valid Destination City.",
                minlength: "Destination City must consist of at least 3 characters"
            },
            checkInDate: {
                required: "Please enter a valid Check-In Date."
            },
            checkOutDate: {
                required: "Please enter a valid Check-Out Date."
            }
        }
    });
    
    if (a.form()) {
    	//$("#isHotelApplied").val(true);
        var b = randomString(12);
        if($('#currentDevice').val()=="Normal"){
        $("form#searchHotelCar").attr({action: "/crossell/hotelSearch/"+b+"/"+hotelId});
        }else if($('#currentDevice').val()=="Mobile"){
        $("form#searchHotelCar").attr({action: "/m/crossell/hotelSearch/"+b+"/"+hotelId});
        }else if($('#currentDevice').val()=="Tablet"){
        $("form#searchHotelCar").attr({action: "/t/crossell/hotelSearch/"+b+"/"+hotelId});
        }else{
        $("form#searchHotelCar").attr({action: "/crossell/hotelSearch/"+b+"/"+hotelId});
        }
        $("form#searchHotelCar").submit()
    }
}

function submitCarForm(hotelId) {
    var a = $("#searchHotelCar").validate({
        showErrors: function() {
            if (this.settings.highlight)
                for (var a = 0; this.errorList[a]; ++a) this.settings.highlight.call(this, this.errorList[a].element, this.settings.errorClass, this.settings.validClass);
            if (this.settings.unhighlight)
                for (var a = 0, b = this.validElements(); b[a]; ++a) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
        },
        rules: {
        	'carSearch.pickLocation': {
                required: true,
                minlength: 3
            },
            pickDate: {
                required: !0
            },
            dropDate: {
                required: !0
            },
            'carSearch.driverAge': {required:true}
        },
        errorElement: "span",
        messages: {
        	pickLocation: {
                required: "Please enter a valid Pick City.",
                minlength: "Pick City must consist of at least 3 characters"
            },
            pickDate: {
                required: "Please enter a valid pick Date."
            },
            dropDate: {
                required: "Please enter a valid drop Date."
            },
            driverAge: ""
        }
    });
    
    if (a.form()) {
    	//$("#isCarApplied").val(true);
        var b = randomString(12);
        if($('#currentDevice').val()=="Normal"){
        $("form#searchHotelCar").attr({action: "/crossell/carSearch/"+b+"/"+hotelId});
        }else if($('#currentDevice').val()=="Mobile"){
        $("form#searchHotelCar").attr({action: "/m/crossell/carSearch/"+b+"/"+hotelId});
        }else if($('#currentDevice').val()=="Tablet"){
        $("form#searchHotelCar").attr({action: "/t/crossell/carSearch/"+b+"/"+hotelId});
        }else{
        $("form#searchHotelCar").attr({action: "/crossell/carSearch/"+b+"/"+hotelId});
        }
        $("form#searchHotelCar").submit()
    }
}

function submitPnfForm(pnfId) {
	
	
	var a = $("#searchHotelCar").validate({
        showErrors: function() {
            if (this.settings.highlight)
                for (var a = 0; this.errorList[a]; ++a) this.settings.highlight.call(this, this.errorList[a].element, this.settings.errorClass, this.settings.validClass);
            if (this.settings.unhighlight)
                for (var a = 0, b = this.validElements(); b[a]; ++a) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
        },
        rules: {
        	'pnfSearch.location': {
                required: true,
                minlength: 3
            },
            'pnfSearch.arrivalDate': {
                required: !0
            },
            'pnfSearch.exitDate': {
                required: !0
            }
            
        },
        errorElement: "span",
        
    });
	
    var b = randomString(12);
    if($('#currentDevice').val()=="Normal"){
    $("form#searchHotelCar").attr({action: "/crossell/pnfSearch/"+b+"/"+pnfId});
    }else if($('#currentDevice').val()=="Mobile"){
    $("form#searchHotelCar").attr({action: "/m/crossell/pnfSearch/"+b+"/"+pnfId});
    }else if($('#currentDevice').val()=="Tablet"){
    $("form#searchHotelCar").attr({action: "/t/crossell/pnfSearch/"+b+"/"+pnfId});
    }else{
    $("form#searchHotelCar").attr({action: "/crossell/pnfSearch/"+b+"/"+pnfId});
    }
    $("form#searchHotelCar").submit()

}
    function popup(divProgressBar, width, height) {
        try {
            $("#" + divProgressBar).toggle();
            return false;
        } catch (e) {
            return false;
        }
    }

	var sessionTimeout = 30;

	window.onload = DisplaySessionTimeout;

	function DisplaySessionTimeout() {
	  sessionTimeout = sessionTimeout - 1;
	  if (sessionTimeout >= 0) window.setTimeout("DisplaySessionTimeout()", 30000);
	  else {
	    callSessionTimeOut();
	  }
	}

	function callSessionTimeOut() {
		
	  form_data = "";
	  popup("divSessionOut", 30, 30);
	  return true;
	}
	
if(isMobile.phone || isMobile.tablet){
    console.log('isMobile 1', isMobile.phone );
    $("#cxlPaymentClick").click(function(){
        $("#cxlPaymentSummary").removeClass('hidden-xs hidden-sm');
        $('html, body').animate({scrollTop:$("#cxlPaymentSummary").position().top}, 'slow');
    })
    
    $("#pnfPaymentClick").click(function(){
        $("#pnfRightContainer").removeClass('hidden-xs hidden-sm');
        $('html, body').animate({scrollTop:$("#pnfRightContainer").position().top}, 'slow');
    })

    $("#gotoTop").click(function(){
        $("#cxlPaymentSummary").addClass('hidden-xs hidden-sm');
        $('html, body').animate({scrollTop:0}, 'slow');
    })
}

(function () {
    $(window).scroll(function () {
        var bottomSticky = $('.mobile-link-tab'),   
            scroll = $(window).scrollTop();
        if (scroll > 150) {
            $('.mobile-link-tab').css('bottom', '10px');
        } else {
            $('.mobile-link-tab').css('bottom', '-100');
        }
    });
})();


function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
} 

function imgError(img, srcc) {
    img.error = "";
    img.src = srcc;
}

function loadBrowser(e) {
    currentwindow = window.open(e.name, e.innerHTML, 'toolbar=no,location=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600');
    currentwindow.moveTo(0, 0);
}

function showDiv(e) {

    var x = e.id;
    console.log(x);
    if (x === 'cxlTermCondition') {
        $(".cxlTermNCondition").fadeIn();
    }
    if (x === 'cxlPrivacyPolicy') {
        $(".cxlPrivacyPolicy").fadeIn();
    }
    $(document).on("click", ".closePopupComponent", function () {
        $(this).parent().fadeOut();
    })
}

var _loc = window.location.href.split("/")[3]
if (_loc === 'crossellcrm') {
    document.querySelector('#goToConf').style.display = 'block';
}


/*var crossell = angular.module('crossellApp',[]);

crossell.controller('crossellController',function($scope,$http){
	
	$scope.carModifySearch = function(){
		
		console.log("carmofidfy seach called");
		$scope.b = randomString(12);
		
		var formData = {
		        firstname: "default",
		        emailaddress: "default",
		        textareacontent: "default",
		        gender: "default",
		        member: false,
		        file_profile: "default",
		        file_avatar: "default"
		    };

		
		 $scope.persons = $http({
	            url: '/carSearchCross/'+$scope.b+"/0",
	            method: "POST",
	            data:formData
	        }).success(function (data, status, headers, config) {
	        	
	        	$http.get("/postCarSearchCross/")
	        	.then(function(response){
	        		console.log(response.data);
	        	})
	        	
	            }).error(function (data, status, headers, config) {
	              
	            });
		
	}
})*/
