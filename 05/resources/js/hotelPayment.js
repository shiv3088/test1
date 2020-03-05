      
        function submitForm(){

      
 var validator = $("#hotelBookingRequest").validate({
  /*ignore: "input[type='text']:hidden",*/
/*  showErrors: function() {
         
         if (this.settings.highlight) {
            for (var i = 0; this.errorList[i]; ++i) {
            	
                this.settings.highlight.call(this, this.errorList[i].element,
                    this.settings.errorClass, this.settings.validClass);
                
            }
        }
        if (this.settings.unhighlight) {
            for (var i = 0, elements = this.validElements(); elements[i]; ++i) {
                this.settings.unhighlight.call(this, elements[i],
                    this.settings.errorClass, this.settings.validClass);
               
            }
        }
      
    },*/
	
  rules: {       
	  
   'rooms[0].FirstName': {
    required: true
	},
	'rooms[0].LastName': {
    required: true
	},
	'rooms[0].DobDate': {
     selectdate: true
	},
	'rooms[0].DobMonth': {
     selectmonth: true
     
	},
	'rooms[0].DobYear': {
     selectyear: true
	},
    'rooms[1].FirstName': {
    required: true
	}, 
	'rooms[1].LastName': {
    required: true
	},
	'rooms[1].DobDate': {
     selectdate: true
	},
	'rooms[1].DobMonth': {
     selectmonth: true
	},
	'rooms[1].DobYear': {
     selectyear: true
	},
	 'rooms[2].FirstName': {
    required: true
	}, 
	'rooms[2].LastName': {
    required: true
	},
	'rooms[2].DobDate': {
     selectdate: true
	},
	'rooms[2].DobMonth': {
     selectmonth: true
	},
	'rooms[2].DobYear': {
     selectyear: true
	},   
	 'rooms[3].FirstName': {
    required: true
	}, 
	'rooms[3].LastName': {
    required: true
	},
	'rooms[3].DobDate': {
     selectdate: true
	},
	'rooms[3].DobMonth': {
     selectmonth: true
	},
	'rooms[3].DobYear': {
     selectyear: true
	},   
	 'rooms[4].FirstName': {
    required: true
	}, 
	'rooms[4].LastName': {
    required: true
	},
	'rooms[4].DobDate': {
     selectdate: true
	},
	'rooms[4].DobMonth': {
     selectmonth: true
	},
	'rooms[4].DobYear': {
     selectyear: true
	},   
	 'rooms[5].FirstName': {
    required: true
	}, 
	'rooms[5].LastName': {
    required: true
	},
	'rooms[5].DobDate': {
     selectdate: true
	},
	'rooms[5].DobMonth': {
     selectmonth: true
	},
	'rooms[5].DobYear': {
     selectyear: true
	},   
	 'passengerList[6].FirstName': {
    required: true
	}, 
	'passengerList[6].LastName': {
    required: true
	},
	'passengerList[6].DobDate': {
     selectdate: true
	},
	'passengerList[6].DobMonth': {
     selectmonth: true
	},
	'passengerList[6].DobYear': {
     selectyear: true
	},   
	 'passengerList[7].FirstName': {
    required: true
	}, 
	'passengerList[7].LastName': {
    required: true
	},
	'passengerList[7].DobDate': {
     selectdate: true
	},
	'passengerList[7].DobMonth': {
     selectmonth: true
	},
	'passengerList[7].DobYear': {
     selectyear: true
	}, 
	'passengerList[8].FirstName': {
    required: true
	}, 
	'passengerList[8].LastName': {
    required: true
	},
	'passengerList[8].DobDate': {
     selectdate: true
	},
	'passengerList[8].DobMonth': {
     selectmonth: true
	},
	'passengerList[8].DobYear': {
     selectyear: true
	},             
  'payment.cardCode': {
		selectcard: true
	},
	'payment.cardNumber': {
		required: true,
        number:true,
        minlength : function(element){
        	
            if($("#payment-card").val()=="American Express"){
                return 15;
            }
            else{
                return 16;
            } },
		//minlength: 15,
		maxlength:function(element){
            if($("#payment-card").val()=="American Express"){
                return 15;
            }
            else{
                return 16;
            } },
	},
	'payment.cardHolderName': {
		required: true,
	},
	'payment.expiryMonth': {
		selectExpMonth: true,
	},
	'payment.expiryYear': {
		selectExpYear: true,
	},
	'payment.cvvNo': {
		required: true,
		minlength: 3,		
	},
	'payment.address1': {
		required: true
	},
	'payment.city': {
		required: true
	},
	'payment.country': {
		required: true,
		selectcountry: true
	},
	'payment.state': {
		required: true,
		selectstate: true
	},
	'payment.postalCode': {
		required: true
	},
	'contact.billingPhone': {
		required: true
	},
	'contact.mobile': {
		required: true
	},
	'contact.email': {
		required: true,
		email: true
	},
	'macp': {
		required: true,
		requiredvalue: true,
		
	},
	'TravelGuard': {
		required: true,
		requiredvalue: true,
		
	},
    },  
  highlight: function (element) {
    $(element).closest('.form-group').removeClass('valid').addClass('has-error');
    $(element).addClass('select-class');
    $(element).addClass('radio-class');
},
unhighlight: function (element) {
    $(element).closest('.form-group').removeClass('has-error').addClass('valid');
    $(element).removeClass('select-class');
    $(element).removeClass('radio-class');
},
errorElement: 'span',
errorClass: 'help-block',
errorPlacement: function (error, element) {
    if (element.attr("name") == "passengerList[0].DobDate" || element.attr("name") == "passengerList[0].DobDate" || element.attr("name") == "passengerList[0].DobDate") {
        error.insertAfter(".dateWrap");

    } else error.insertAfter(element);

    if (element.parent('.input-group').length) {
        error.insertAfter(element.parent());
    } else {
        error.insertAfter(element);
    }
},
    /* errorElement: "span" , 
   
   messages: {
     
    		   'passengerList[0].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[0].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[1].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[1].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[2].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[2].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[3].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[3].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[4].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[4].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[5].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[5].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[6].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[6].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[7].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[7].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[8].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[8].LastName': { 
					required: "Please provide Last name for traveler",
				},
               'payment.cardNumber': {
					required: "Please enter a valid card number.",
					minlength: "Please enter a valid card number.",
					maxlength: "Please enter a valid card number."
				},
				'payment.cardHolderName': { 
					required: "Please enter a valid card holder name.",
				},
	             'payment.cvvNo': {
					required: "Please enter a valid CVV number.",
					minlength: "CVV number must consist of at least 3 digit."
					
				},
				'payment.address1': {
				required: "Please enter a valid address.",
				},
				'payment.city': {
				required: "Please enter a valid city.",
				},
				'payment.state': {
				required: "Please enter a valid state.",
				},
				'payment.postalCode': {
				required: "Please enter a valid postal code.",
				},
				'contact.billingPhone': {
				required: "Please enter a valid billing phone.",
				},'contact.mobile': {
				required: "Please enter a valid mobile phone.",
				},
				'contact.email': {
				required: "Please enter a valid email address.",
				},
				
    },*/
        
 });
 
  jQuery.validator.messages.required = '';
  jQuery.validator.addMethod('requiredvalue', function (value) {
         return (value != '0.0');
    }, "");
  jQuery.validator.addMethod('selectcard', function (value) {
        return (value != 'Select a Card');
    }, "");
   jQuery.validator.addMethod('selectExpMonth', function (value) {
        return (value != '0');
    }, "");
   jQuery.validator.addMethod('selectExpYear', function (value) {
        return (value != 'Year');
    }, "");
 jQuery.validator.addMethod('selectdate', function (value) {
        return (value != 'Day');
    }, "");
    jQuery.validator.addMethod('selectmonth', function (value) {
        return (value != '0');
    }, "");
    jQuery.validator.addMethod('selectyear', function (value) {
        return (value != 'Year');
    }, "");
    jQuery.validator.addMethod('selectstate', function (value) {
        return (value != '0');
    }, "");
    jQuery.validator.addMethod('selectcountry', function (value) {
        return (value != '0');
    }, "");
    
// alert($("#payment\\.cardNumber").val());
 if(validator.form()){ // validation perform

	 
	 //Popup
	 popup('divProgressbar', 30, 30);
	 
	
var rndId = randomString(12);
  $('form#hotelBookingRequest').attr({action: '/hotels/booked/'+rndId+"/"+rndId});    
  $('form#hotelBookingRequest').submit();
 }
}
        
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
        
   function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}

$(function () {
    //$(window).scroll(sticky_relocate);
   // sticky_relocate();
	//macpSet('macp','Y');
});      
        
 function secondsToTime(m){
   
    var h  = Math.floor( m / 60 );
        m -= h * 60;
   
    return {
        "h": h,
        "m": m
    };
}

function macpValue(values){
	 var $menu = $('#macp');
	 var $publishedmacpFare = $('#publishedmacpFare');
	 var $publishedFare = $('#publishedFare');
if(values == 'Y'){
	 $menu.slideDown(200);
	 $publishedmacpFare.slideDown(200);
	 $publishedFare.slideUp(200);
	 
     if ($menu.is(':visible')) {
         // Slide away
    	// $menu.slideToggle("fast");
    	// $publishedmacpFare.slideToggle("fast");
    	// $publishedFare.slideToggle("fast");
    	 
        /* $menu.animate({left: -($menu.outerWidth() + 4)}, function() {
             $menu.hide();
         });
         
         $publishedmacpFare.animate({left: -($publishedmacpFare.outerWidth() + 4)}, function() {
             $publishedmacpFare.hide();
         });
         
             $publishedFare.show().animate({left: 0});*/
        
         
     }
     else {
         // Slide in
    	// $menu.slideToggle("fast");
    	// $publishedmacpFare.slideToggle("fast");
    	// $publishedFare.slideToggle("fast");
    	 
        /* $menu.show().animate({left: 0});
         $publishedmacpFare.show().animate({left: 0});
         $publishedFare.animate({left: -($publishedFare.outerWidth() + 4)}, function() {
             $publishedFare.hide();
         });*/
     }

//document.getElementById("publishedFare").display=none;
//document.getElementById("publishedmacpFare").display=block;
}else{
	 $menu.slideUp(200);
	 $publishedmacpFare.slideUp(200);
	 $publishedFare.slideDown(200);
	 
	//document.getElementById("macp").display=none;
	//document.getElementById("publishedFare").display=block;
	//document.getElementById("publishedmacpFare").display=none;
	
	
}
}


function macpSet(types,values){
	 var $menu = $('#macp');
	 var $ttg = $('#tgid');
	 var $tgNo = $('#tgNo');
	 
	var tgValue=document.getElementById('tgValue').value;
	var macpValue=document.getElementById('macpValue').value;
	var totalValue=document.getElementById('totalValue').value;
	var basep=document.getElementById('tgInsValue').value;
	var totPax=document.getElementById('totPax').value;
	var couponAmt=document.getElementById('couponAmt').value;
	
	//var tgInsValue=(basep*totPax).toFixed(2);
	var tgInsValue=basep;
	//alert("types:"+types);
	//alert("couponAmt:"+couponAmt);

	//alert("tgValue:"+tgInsValue);
	//alert("macpValue:"+macpValue);
	//alert("totalValue:"+totalValue);
	var totbsp=0.0;
	if(types == 'TG'){
		if(values == 'Y'){
			$ttg.slideDown(200);
			$tgNo.slideUp(200);
			
			document.getElementById('tgValue').value=tgInsValue;
			document.getElementById('tgidval').innerHTML=tgInsValue;
			totbsp=(Number(macpValue)+Number(tgInsValue)+Number(totalValue))-Number(couponAmt);
		//	alert("tgYes:"+totbsp);
		}else{
			 $ttg.slideUp(200);
			 $tgNo.slideDown(200);
			document.getElementById('tgValue').value="0.0";
			document.getElementById('tgidval').innerHTML="0.0";
			tgInsValue=0.0;
			totbsp=(Number(macpValue)+Number(tgInsValue)+Number(totalValue))-Number(couponAmt);
			//alert("tgNo:"+totbsp);
		}
		
	}else if(types == 'CO'){
		
			totbsp=(Number(macpValue)+Number(tgValue)+Number(totalValue))-Number(values);
				
		
	}else{
     if(values == 'Y'){
    	 $menu.slideDown(200);
    	 macpValue=14.99*totPax;
    	 document.getElementById('macpValue').value=macpValue;
    	 totbsp=(Number(macpValue)+Number(tgValue)+Number(totalValue))-Number(couponAmt);
    	// alert("macpYes:"+totbsp);
		}else{
			 $menu.slideUp(200);
			document.getElementById('macpValue').value="0.0";
			macpValue=0.0;
			totbsp=(Number(macpValue)+Number(tgValue)+Number(totalValue))-Number(couponAmt);
			// alert("macpNo:"+totbsp);
		}
	}
	
	// alert("Total:"+totbsp.toFixed(2));
	 document.getElementById('publishedFare').innerHTML="<h4 style='color:#000; line-height:2;'>USD$"+totbsp.toFixed(2)+"</h4>";
//	alert("a tgValue:"+tgValue);
//	alert("a macpValue:"+macpValue);
//	alert("a totalValue:"+totalValue);
	
	
}


(function(){

	angular.module('angularPurchase', ['ngAnimate','cgBusy', 'toaster']).controller('purchaseCtrl',['$http','$scope','$timeout','$window','toaster',function($http,$scope,$timeout,$window,toaster){ 
		var vm = this;
		//alert("2");
		$scope.IsHidden = true;
		$scope.isDisabled= false;
		$scope.IsShow = false;
		$scope.delay = 0;
		$scope.minDuration = 0;
		$scope.message = 'Please Wait... While we update your Travel Guard Plan.';
		$scope.backdrop = true;
		$scope.promise = null;
		
		 $scope.openWindow = function() {
			
			    $scope.pp="/form/pdf/";
			   
			    $window.open($scope.pp+$scope.tgPcode,'Travel gaurd travel Insurance plan','width=700,height=500')
		      
		    };
		    
		    $scope.getStars = function(rating) {
			    // Get the value
			 //  console.log( "rating:"+rating);
			    var val = parseFloat(rating);
			    // Turn value into number/100
			    var size = val/5*100;
			    return size + '%';
			  }
		    
		    $timeout(function() {
		    	$scope.min = Math.floor(2 + (Math.random() * (4 - 2 + 1)));
		    	$scope.max = Math.floor(6 + (Math.random() * (10 - 6 + 1)));
		    	  toaster.pop('almost-sold', "Almost Sold Out", ''+$scope.min+' out of '+$scope.max+' similar rooms at the property are sold out');
		         // console.log('update with timeout fired')
		      }, 3000);
		    
		    $timeout(function() {
		    	$scope.max = Math.floor(6 + (Math.random() * (10 - 6 + 1)));
		    	  toaster.pop('secure', "Secure Fare Now", ""+$scope.max+" People viewing same prices, book now to save your price.");
		         // console.log('update with timeout fired')
		      }, 5000);
		      
		      $timeout(function() {
		    	  $scope.max = Math.floor(1 + (Math.random() * (3 - 1 + 1)));
		    	  toaster.pop('almost-sold', "Booking Status", ""+$scope.max+" person has started booking this property! it's almost yours! We just need a few more information.");
		         // console.log('update with timeout fired')
		      }, 20000);
		      
			  $scope.checkCoupons	 = function() {
				  if($scope.selectedCoupons === undefined){
					  alert("Please fill coupon code First");
				  }else{
					
				 $http.post('/hotel/checkCoupon/'+$scope.selectedCoupons).success(function(response){
						console.log(response);
									
						 angular.forEach(response, function(Flighth) {
							 console.log(Flighth.couponValid);
							 if(Flighth.couponValid == "Yes"){
							   $scope.couponAmt=Flighth.couponAmount;
					          // console.log(Flighth.couponAmount);
					           var placeholder = document.getElementById('couponAmtPlan'); //working
					           placeholder.innerHTML = Flighth.couponAmount+".00"; 
					           
					           var placeholder2 = document.getElementById('couponMessage'); //working
					           placeholder2.innerHTML = "Coupon Code is Applied"; 
					           
					           var placeholder = document.getElementById('couponApply'); //working
					           placeholder.innerHTML = ""; 
					           
					           var placeholder2 = document.getElementById('couponHave'); //working
					           placeholder2.innerHTML = ""; 
					           
					           macpSet('CO',$scope.couponAmt);
					           $scope.isDisabled= true;
					          					           
							  }else{
								  var placeholder2 = document.getElementById('couponMessage'); //working
								   placeholder2.innerHTML = "Coupon Code is not Applied or Wrong Code"; 
							  }
							    
							  
					      
					         });
						
						
					})
					.error(function(error){
						  $scope.isDisabled= true;
					})
				  }   
			  }
			  
			  $scope.focus	 =  function(id) {
			      // timeout makes sure that is invoked after any other event has been triggered.
			      // e.g. click events that need to run before the focus or
			      // inputs elements that are in a disabled state but are enabled when those events
			      // are triggered.
			      $timeout(function() {
			        var element = $window.document.getElementById(id);
			        if(element)
			          element.focus();
			      });
			    };
			    
			 
			  
			  $scope.$watch('selectedItem', function (newVal) {
                  if (newVal) {
                   //   console.log("Selected option " + newVal.ID);
                    //  alert(newVal.ID);
                    //  console.log("Selected Dob " + $scope.DobDate);
                    //  alert($scope.selectedCountry.ID);DobMonth,DobYear
                	  $scope.test=1;
                	
                	
                      if($scope.tgIns != 0.0){
                      if($scope.selectedCountry.ID == "US"){
                    	  for (var i = 0; i < $scope.DobDate.length; ++i) {
                    		  console.log("Selected day in " + $scope.DobDate[i]);
                    		  if($scope.DobDate[i] === "Day"){
                    			  $scope.test=0;
                    			 
                    		  }
                    	  }
                    	  for (var i = 0; i < $scope.DobMonth.length; ++i) {
                    		  console.log("Selected Month in " + $scope.DobMonth[i]);
                    		  if($scope.DobMonth[i] === "0"){
                    			  $scope.test=0;
                    		  }
                    	  }
                    	  
                    	  for (var i = 0; i < $scope.DobYear.length; ++i) {
                    		  console.log("Selected Year in " + $scope.DobYear[i]);
                    		  if($scope.DobYear[i] === "Year"){
                    			  $scope.test=0;
                    		  }
                    	  }
                    	  console.log("$scope.test :"+$scope.test);
                    	  if($scope.test != 0){
                    	  if($scope.selectedItem.ID != "0"){
                    	//  alert("Inside TG");
                    		 // $scope.loading = true;
                    		$scope.promise= $http.post('/tgQuote/'+newVal.ID+"/"+$scope.selectedCountry.ID+"/"+$scope.DobDate+"/"+$scope.DobMonth+"/"+$scope.DobYear).success(function(response){
    						console.log(response);
    						//alert(response);
    						//console.log(response.tgAmount);
    						 angular.forEach(response, function(Flighth) {
    							 if(Flighth.tgAv == "Yes"){
    					           $scope.tgIns=Flighth.tgAmount;
    					           $scope.tgPcode=Flighth.pdfFile;
    					           console.log(Flighth.tgAmount);
    					           var placeholder = document.getElementById('tgPlan'); //working
    					          // console.log(placeholder);
    					           placeholder.innerHTML = Flighth.tgAmount; 
    					           macpSet('TG','N');
    					           $scope.showHideTest = "";
    					         //  $scope.loading = false;
    					           alert("We Change your Travel Insurance amount. Please check before book the Flights.");
    					           
    							  }
    					         });
                    		  
    						
    					})
    					.error(function(error){
    					
    					})
    				
                      }
                      }else{
                    	  $scope.focus('paxName');
            			  $scope.selectedItem=$scope.usState[0];
                      }
                      }
                  }
                  }
              });
			  $scope.DobDate=[];
			  $scope.DobMonth=[];
			  $scope.DobYear=[];
           
			  $scope.$watch('selectedCountry', function (newVal) {
                  if (newVal) {
                      console.log("Selected option " + newVal.ID);
                      if(newVal.ID == "CA"){
                    	  $scope.IsHidden = true;
                  		$scope.IsShow = false;
                      $scope.usState = [
                        { 'ID': '0' , 'Name': 'Please Select'  },
                        { 'ID':'AB', 'Name':'Alberta'  },
						{ 'ID':'BC', 'Name':'British Columbia'  },
						{ 'ID':'MB', 'Name':'Manitoba'  },
						{ 'ID':'NB', 'Name':'New Brunswick'  },
						{ 'ID':'NF', 'Name':'Newfoundland and Labrador'  },
						{ 'ID':'NT', 'Name':'Northwest Territories'  },
						{ 'ID':'NS', 'Name':'Nova Scotia'  },
						{ 'ID':'NU', 'Name':'Nunavut'  },
						{ 'ID':'ON', 'Name':'Ontario'  },
						{ 'ID':'PE', 'Name':'Prince Edward Island'  },
						{ 'ID':'QC', 'Name':'Quebec'  },
						{ 'ID':'SK', 'Name':'Saskatchewan'  },
						{ 'ID':'YT', 'Name':'Yukon'  }];
                      $scope.selectedItem = $scope.usState[0];
                  }else  if(newVal.ID == "IN"){
                	  $scope.IsHidden = true;
              		$scope.IsShow = false;
                      $scope.usState = [ 
                                        { 'ID': '0' , 'Name': 'Please Select'  },
        								{ 'ID': 'AN', 'Name': 'Andaman and Nicobar Islands'  },
        								{ 'ID': 'AP', 'Name': 'Andhra Pradesh'  },
        								{ 'ID': 'AR', 'Name': 'Arunachal Pradesh'  },
        								{ 'ID': 'AS', 'Name': 'Assam'  },
        								{ 'ID': 'BR', 'Name': 'Bihar'  },
        								{ 'ID': 'CH', 'Name': 'Chandigarh'  },
        								{ 'ID': 'CT', 'Name': 'Chhattisgarh'  },
        								{ 'ID': 'DN', 'Name': 'Dadra and Nagar Haveli'  },
        								{ 'ID': 'DD', 'Name': 'Daman and Diu'  },
        								{ 'ID': 'DL', 'Name': 'Delhi'  },
        								{ 'ID': 'GA', 'Name': 'Goa'  },
        								{ 'ID': 'GJ', 'Name': 'Gujarat'  },
        								{ 'ID': 'HR', 'Name': 'Haryana'  },
        								{ 'ID': 'HP', 'Name': 'Himachal Pradesh'  },
        								{ 'ID': 'JK', 'Name': 'Jammu and Kashmir'  },
        								{ 'ID': 'JH', 'Name': 'Jharkhand'  },
        								{ 'ID': 'KA', 'Name': 'Karnataka'  },
        								{ 'ID': 'KL', 'Name': 'Kerala'  },
        								{ 'ID': 'LD', 'Name': 'Lakshadweep'  },
        								{ 'ID': 'MP', 'Name': 'Madhya Pradesh'  },
        								{ 'ID': 'MH', 'Name': 'Maharashtra'  },
        								{ 'ID': 'MN', 'Name': 'Manipur'  },
        								{ 'ID': 'ML', 'Name': 'Meghalaya'  },
        								{ 'ID': 'MZ', 'Name': 'Mizoram'  },
        								{ 'ID': 'NL', 'Name': 'Nagaland'  },
        								{ 'ID': 'OR', 'Name': 'Orissa'  },
        								{ 'ID': 'PY', 'Name': 'Pondicherry'  },
        								{ 'ID': 'PB', 'Name': 'Punjab'  },
        								{ 'ID': 'RJ', 'Name': 'Rajasthan'  },
        								{ 'ID': 'SK', 'Name': 'Sikkim'  },
        								{ 'ID': 'TN', 'Name': 'Tamil Nadu'  },
        								{ 'ID': 'TR', 'Name': 'Tripura'  },
        								{ 'ID': 'UP', 'Name': 'Uttar Pradesh'  },
        								{ 'ID': 'UL', 'Name': 'Uttaranchal'  },
        								{ 'ID': 'WB', 'Name': 'West Bengal'  },];
                      $scope.selectedItem = $scope.usState[0];
                                   }else  if(newVal.ID == "AU"){
                                	   $scope.IsHidden = true;
                               		$scope.IsShow = false;
                                       $scope.usState = [ 
											{ 'ID': '0', 'Name': 'Please Select'  },
											{ 'ID': 'CT', 'Name': 'Australian Capital Territory'  },
											{ 'ID': 'NS', 'Name': 'New South Wales'  },
											{ 'ID': 'NT', 'Name': 'Northern Territory'  },
											{ 'ID': 'QL', 'Name': 'Queensland'  },
											{ 'ID': 'SA', 'Name': 'South Australia'  },
											{ 'ID': 'TS', 'Name': 'Tasmania'  },
											{ 'ID': 'VI', 'Name': 'Victoria'  },
											{ 'ID': 'WA', 'Name': 'Western Australia'  },
                                                         ];
                                       $scope.selectedItem = $scope.usState[0];
                                   }else  if(newVal.ID == "US"){
                                	   $scope.IsHidden = true;
                               		$scope.IsShow = false;
                                       $scope.usState = [ 
                                                         { 'ID': '0' , 'Name': 'Please Select'  },
											{ 'ID': 'AA'  ,'Name': 'Armed Forces (the) Americas'  },
											{ 'ID': 'AE'  ,'Name': 'Armed Forces Europe'  },
											{ 'ID': 'AE'  ,'Name': 'Armed Forces Africa'  },
											{ 'ID': 'AE'  ,'Name': 'Armed Forces Middle East'  },
											{ 'ID': 'AE'  ,'Name': 'Armed Forces Canada'  },
											{ 'ID': 'AP'  ,'Name': 'Armed Forces Pacific'  },
											{ 'ID': 'AL'  ,'Name': 'Alabama'  },
											{ 'ID': 'AK'  ,'Name': 'Alaska'  },
											{ 'ID': 'AZ'  ,'Name': 'Arizona'  },
											{ 'ID': 'AR'  ,'Name': 'Arkansas'  },
											{ 'ID': 'CA'  ,'Name': 'California'  },
											{ 'ID': 'CO'  ,'Name': 'Colorado'  },
											{ 'ID': 'CT'  ,'Name': 'Connecticut'  },
											{ 'ID': 'DE'  ,'Name': 'Delaware'  },
											{ 'ID': 'DC'  ,'Name': 'District of Columbia'  },
											{ 'ID': 'FL'  ,'Name': 'Florida'  },
											{ 'ID': 'GA'  ,'Name': 'Georgia'  },
											{ 'ID': 'HI'  ,'Name': 'Hawaii'  },
											{ 'ID': 'ID'  ,'Name': 'Idaho'  },
											{ 'ID': 'IL'  ,'Name': 'Illinois'  },
											{ 'ID': 'IN'  ,'Name': 'Indiania'  },
											{ 'ID': 'IA'  ,'Name': 'Iowa'  },
											{ 'ID': 'KS'  ,'Name': 'Kansas'  },
											{ 'ID': 'KY'  ,'Name': 'Kentucky'  },
											{ 'ID': 'LA'  ,'Name': 'Louisiana'  },
											{ 'ID': 'ME'  ,'Name': 'Maine'  },
											{ 'ID': 'MD'  ,'Name': 'Maryland'  },
											{ 'ID': 'MA'  ,'Name': 'Massachusetts'  },
											{ 'ID': 'MI'  ,'Name': 'Michigan'  },
											{ 'ID': 'MN'  ,'Name': 'Minnesota'  },
											{ 'ID': 'MS'  ,'Name': 'Mississippi'  },
											{ 'ID': 'MO'  ,'Name': 'Missouri'  },
											{ 'ID': 'MT'  ,'Name': 'Montana'  },
											{ 'ID': 'NE'  ,'Name': 'Nebraska'  },
											{ 'ID': 'NV'  ,'Name': 'Nevada'  },
											{ 'ID': 'NH'  ,'Name': 'New Hampshire'  },
											{ 'ID': 'NJ'  ,'Name': 'New Jersey'  },
											{ 'ID': 'NM'  ,'Name': 'New Mexico'  },
											{ 'ID': 'NY'  ,'Name': 'New York'  },
											{ 'ID': 'NC'  ,'Name': 'North Carolina'  },
											{ 'ID': 'ND'  ,'Name': 'North Dakota'  },
											{ 'ID': 'OH'  ,'Name': 'Ohio'  },
											{ 'ID': 'OK'  ,'Name': 'Oklahoma'  },
											{ 'ID': 'OR'  ,'Name': 'Oregon'  },
											{ 'ID': 'PA'  ,'Name': 'Pennsylvania'  },
											{ 'ID': 'RI'  ,'Name': 'Rhode Island'  },
											{ 'ID': 'SC'  ,'Name': 'South Carolina'  },
											{ 'ID': 'SD'  ,'Name': 'South Dakota'  },
											{ 'ID': 'TN'  ,'Name': 'Tennessee'  },
											{ 'ID': 'TX'  ,'Name': 'Texas'  },
											{ 'ID': 'UT' , 'Name': 'Utah'  },
											{ 'ID': 'VT'  ,'Name': 'Vermont'  },
											{ 'ID': 'VA'  ,'Name': 'Virginia'  },
											{ 'ID': 'WA' , 'Name': 'Washington'  },
											{ 'ID': 'WV' , 'Name': 'West Virginia'  },
											{ 'ID': 'WI' , 'Name': 'Wisconsin'  },
											{ 'ID': 'WY' , 'Name': 'Wyoming'  },
                                                                      ];
                                       $scope.selectedItem = $scope.usState[0];
                                                }else  if(newVal.ID == "0"){
                                                	$scope.IsHidden = true;
                                            		$scope.IsShow = false;
                                                    $scope.usState = [ 
                                                                    { 'ID': '0' , 'Name': 'Please Select'  },
                          											{ 'ID': 'AA'  ,'Name': 'Armed Forces (the) Americas'  },
                          											{ 'ID': 'AE'  ,'Name': 'Armed Forces Europe'  },
                          											{ 'ID': 'AE'  ,'Name': 'Armed Forces Africa'  },
                          											{ 'ID': 'AE'  ,'Name': 'Armed Forces Middle East'  },
                          											{ 'ID': 'AE'  ,'Name': 'Armed Forces Canada'  },
                          											{ 'ID': 'AP'  ,'Name': 'Armed Forces Pacific'  },
                          											{ 'ID': 'AL'  ,'Name': 'Alabama'  },
                          											{ 'ID': 'AK'  ,'Name': 'Alaska'  },
                          											{ 'ID': 'AZ'  ,'Name': 'Arizona'  },
                          											{ 'ID': 'AR'  ,'Name': 'Arkansas'  },
                          											{ 'ID': 'CA'  ,'Name': 'California'  },
                          											{ 'ID': 'CO'  ,'Name': 'Colorado'  },
                          											{ 'ID': 'CT'  ,'Name': 'Connecticut'  },
                          											{ 'ID': 'DE'  ,'Name': 'Delaware'  },
                          											{ 'ID': 'DC'  ,'Name': 'District of Columbia'  },
                          											{ 'ID': 'FL'  ,'Name': 'Florida'  },
                          											{ 'ID': 'GA'  ,'Name': 'Georgia'  },
                          											{ 'ID': 'HI'  ,'Name': 'Hawaii'  },
                          											{ 'ID': 'ID'  ,'Name': 'Idaho'  },
                          											{ 'ID': 'IL'  ,'Name': 'Illinois'  },
                          											{ 'ID': 'IN'  ,'Name': 'Indiania'  },
                          											{ 'ID': 'IA'  ,'Name': 'Iowa'  },
                          											{ 'ID': 'KS'  ,'Name': 'Kansas'  },
                          											{ 'ID': 'KY'  ,'Name': 'Kentucky'  },
                          											{ 'ID': 'LA'  ,'Name': 'Louisiana'  },
                          											{ 'ID': 'ME'  ,'Name': 'Maine'  },
                          											{ 'ID': 'MD'  ,'Name': 'Maryland'  },
                          											{ 'ID': 'MA'  ,'Name': 'Massachusetts'  },
                          											{ 'ID': 'MI'  ,'Name': 'Michigan'  },
                          											{ 'ID': 'MN'  ,'Name': 'Minnesota'  },
                          											{ 'ID': 'MS'  ,'Name': 'Mississippi'  },
                          											{ 'ID': 'MO'  ,'Name': 'Missouri'  },
                          											{ 'ID': 'MT'  ,'Name': 'Montana'  },
                          											{ 'ID': 'NE'  ,'Name': 'Nebraska'  },
                          											{ 'ID': 'NV'  ,'Name': 'Nevada'  },
                          											{ 'ID': 'NH'  ,'Name': 'New Hampshire'  },
                          											{ 'ID': 'NJ'  ,'Name': 'New Jersey'  },
                          											{ 'ID': 'NM'  ,'Name': 'New Mexico'  },
                          											{ 'ID': 'NY'  ,'Name': 'New York'  },
                          											{ 'ID': 'NC'  ,'Name': 'North Carolina'  },
                          											{ 'ID': 'ND'  ,'Name': 'North Dakota'  },
                          											{ 'ID': 'OH'  ,'Name': 'Ohio'  },
                          											{ 'ID': 'OK'  ,'Name': 'Oklahoma'  },
                          											{ 'ID': 'OR'  ,'Name': 'Oregon'  },
                          											{ 'ID': 'PA'  ,'Name': 'Pennsylvania'  },
                          											{ 'ID': 'RI'  ,'Name': 'Rhode Island'  },
                          											{ 'ID': 'SC'  ,'Name': 'South Carolina'  },
                          											{ 'ID': 'SD'  ,'Name': 'South Dakota'  },
                          											{ 'ID': 'TN'  ,'Name': 'Tennessee'  },
                          											{ 'ID': 'TX'  ,'Name': 'Texas'  },
                          											{ 'ID': 'UT' , 'Name': 'Utah'  },
                          											{ 'ID': 'VT'  ,'Name': 'Vermont'  },
                          											{ 'ID': 'VA'  ,'Name': 'Virginia'  },
                          											{ 'ID': 'WA' , 'Name': 'Washington'  },
                          											{ 'ID': 'WV' , 'Name': 'West Virginia'  },
                          											{ 'ID': 'WI' , 'Name': 'Wisconsin'  },
                          											{ 'ID': 'WY' , 'Name': 'Wyoming'  },
                                                                                                ];
                                                    $scope.selectedItem = $scope.usState[0];
                                                                          }else{
                                                                        	  $scope.IsHidden = false;
                                                                      		$scope.IsShow = true;
                                                	
                                                }
                  }
              });
			  
			  
			  $timeout(function() {
		      $scope.countryList=[
                        { 'ID': '0' , 'Name': 'Please Select'  },
						{ 'ID': 'US' , 'Name': 'United States'  },
						{ 'ID': 'CA' , 'Name': 'Canada'  },
						{ 'ID': 'GB' , 'Name': 'United Kingdom'  },
						{ 'ID': 'AI' , 'Name': 'Anguilla'  },
						{ 'ID': 'AG' , 'Name': 'Antigua and Barbuda'  },
						{ 'ID': 'AR' , 'Name': 'Argentina'  },
						{ 'ID': 'AM' , 'Name': 'Armenia'  },
						{ 'ID': 'AW' , 'Name': 'Aruba'  },
						{ 'ID': 'AU' , 'Name': 'Australia'  },
						{ 'ID': 'AT' , 'Name': 'Austria'  },
						{ 'ID': 'AZ' , 'Name': 'Azerbaijan'  },
						{ 'ID': 'BS' , 'Name': 'Bahamas'  },
						{ 'ID': 'BH' , 'Name': 'Bahrain'  },
						{ 'ID': 'BB' , 'Name': 'Barbados'  },
						{ 'ID': 'BE' , 'Name': 'Belgium'  },
						{ 'ID': 'BZ' , 'Name': 'Belize'  },
						{ 'ID': 'BM' , 'Name': 'Bermuda'  },
						{ 'ID': 'BO' , 'Name': 'Bolivia'  },
						{ 'ID': 'BA' , 'Name': 'Bosnia Herzegovina'  },
						{ 'ID': 'BW' , 'Name': 'Botswana'  },
						{ 'ID': 'BR' , 'Name': 'Brazil'  },
						{ 'ID': 'VG' , 'Name': 'British Virgin Islands'  },
						{ 'ID': 'BN' , 'Name': 'Brunei Darussalam'  },
						{ 'ID': 'BG' , 'Name': 'Bulgaria'  },
						{ 'ID': 'KH' , 'Name': 'Cambodia'  },
						{ 'ID': 'KY' , 'Name': 'Cayman Islands'  },
						{ 'ID': 'CL' , 'Name': 'Chile'  },
						{ 'ID': 'CN' , 'Name': 'China'  },
						{ 'ID': 'CR' , 'Name': 'Costa Rica'  },
						{ 'ID': 'HR' , 'Name': 'Croatia'  },
						{ 'ID': 'CY' , 'Name': 'Cyprus'  },
						{ 'ID': 'CZ' , 'Name': 'Czech Republic'  },
						{ 'ID': 'DK' , 'Name': 'Denmark'  },
						{ 'ID': 'DM' , 'Name': 'Dominica'  },
						{ 'ID': 'DO' , 'Name': 'Dominican Republic'  },
						{ 'ID': 'EC' , 'Name': 'Ecuador'  },
						{ 'ID': 'EG' , 'Name': 'Egypt'  },
						{ 'ID': 'SV' , 'Name': 'El Salvador'  },
						{ 'ID': 'EE' , 'Name': 'Estonia'  },
						{ 'ID': 'FI' , 'Name': 'Finland'  },
						{ 'ID': 'FR' , 'Name': 'France'  },
						{ 'ID': 'GE' , 'Name': 'Georgia'  },
						{ 'ID': 'DE' , 'Name': 'Germany'  },
						{ 'ID': 'GR' , 'Name': 'Greece'  },
						{ 'ID': 'GD' , 'Name': 'Grenada'  },
						{ 'ID': 'GP' , 'Name': 'Guadeloupe'  },
						{ 'ID': 'GU' , 'Name': 'Guam'  },
						{ 'ID': 'GT' , 'Name': 'Guatemala'  },
						{ 'ID': 'GY' , 'Name': 'Guyana'  },
						{ 'ID': 'HT' , 'Name': 'Haiti'  },
						{ 'ID': 'HN' , 'Name': 'Honduras'  },
						{ 'ID': 'HK' , 'Name': 'Hong Kong'  },
						{ 'ID': 'HU' , 'Name': 'Hungary'  },
						{ 'ID': 'IS' , 'Name': 'Iceland'  },
						{ 'ID': 'IN' , 'Name': 'India'  },
						{ 'ID': 'ID' , 'Name': 'Indonesia'  },
						{ 'ID': 'IQ' , 'Name': 'Iraq'  },
						{ 'ID': 'IE' , 'Name': 'Ireland'  },
						{ 'ID': 'IL' , 'Name': 'Israel'  },
						{ 'ID': 'IT' , 'Name': 'Italy'  },
						{ 'ID': 'JM' , 'Name': 'Jamaica'  },
						{ 'ID': 'JP' , 'Name': 'Japan'  },
						{ 'ID': 'JO' , 'Name': 'Jordan'  },
						{ 'ID': 'KZ' , 'Name': 'Kazakstan'  },
						{ 'ID': 'KW' , 'Name': 'Kuwait'  },
						{ 'ID': 'KG' , 'Name': 'Kyrgyzstan'  },
						{ 'ID': 'LA' , 'Name': 'Lao Peoples Democratic Republic'  },
						{ 'ID': 'LV' , 'Name': 'Latvia'  },
						{ 'ID': 'LB' , 'Name': 'Lebanon'  },
						{ 'ID': 'LT' , 'Name': 'Lithuania'  },
						{ 'ID': 'LU' , 'Name': 'Luxembourg'  },
						{ 'ID': 'MO' , 'Name': 'Macau'  },
						{ 'ID': 'MY' , 'Name': 'Malaysia'  },
						{ 'ID': 'MT' , 'Name': 'Malta'  },
						{ 'ID': 'MQ' , 'Name': 'Martinique'  },
						{ 'ID': 'MX' , 'Name': 'Mexico'  },
						{ 'ID': 'FM' , 'Name': 'Micronesia'  },
						{ 'ID': 'MN' , 'Name': 'Mongolia'  },
						{ 'ID': 'MS' , 'Name': 'Montserrat'  },
						{ 'ID': 'NA' , 'Name': 'Namibia'  },
						{ 'ID': 'NL' , 'Name': 'Netherlands'  },
						{ 'ID': 'AN' , 'Name': 'Netherlands Antilles'  },
						{ 'ID': 'NZ' , 'Name': 'New Zealand'  },
						{ 'ID': 'NI' , 'Name': 'Nicaragua'  },
						{ 'ID': 'NO' , 'Name': 'Norway'  },
						{ 'ID': 'OM' , 'Name': 'Oman'  },
						{ 'ID': 'PS' , 'Name': 'Palestinian Territory, Occupied'  },
						{ 'ID': 'PG' , 'Name': 'Papua New Guinea'  },
						{ 'ID': 'PY' , 'Name': 'Paraguay'  },
						{ 'ID': 'PH' , 'Name': 'Philippines'  },
						{ 'ID': 'PL' , 'Name': 'Poland'  },
						{ 'ID': 'PT' , 'Name': 'Portugal'  },
						{ 'ID': 'QA' , 'Name': 'Qatar'  },
						{ 'ID': 'MK' , 'Name': 'Republic of Macedonia'  },
						{ 'ID': 'RO' , 'Name': 'Romania'  },
						{ 'ID': 'RU' , 'Name': 'Russia'  },
						{ 'ID': 'SM' , 'Name': 'San Marino'  },
						{ 'ID': 'SA' , 'Name': 'Saudi Arabia'  },
						{ 'ID': 'RS' , 'Name': 'Serbia'  },
						{ 'ID': 'SG' , 'Name': 'Singapore'  },
						{ 'ID': 'SK' , 'Name': 'Slovakia'  },
						{ 'ID': 'SI' , 'Name': 'Slovenia'  },
						{ 'ID': 'ZA' , 'Name': 'South Africa'  },
						{ 'ID': 'KR' , 'Name': 'South Korea'  },
						{ 'ID': 'ES' , 'Name': 'Spain'  },
						{ 'ID': 'LK' , 'Name': 'Sri Lanka'  },
						{ 'ID': 'KN' , 'Name': 'St. Christopher (St. Kitts) Nevis'  },
						{ 'ID': 'LC' , 'Name': 'St. Lucia'  },
						{ 'ID': 'PM' , 'Name': 'St. Pierre and Miquelon'  },
						{ 'ID': 'VC' , 'Name': 'St. Vincent and The Grenadines'  },
						{ 'ID': 'SR' , 'Name': 'Suriname'  },
						{ 'ID': 'SE' , 'Name': 'Sweden'  },
						{ 'ID': 'CH' , 'Name': 'Switzerland'  },
						{ 'ID': 'SY' , 'Name': 'Syrian Arab Republic'  },
						{ 'ID': 'TW' , 'Name': 'Taiwan'  },
						{ 'ID': 'TH' , 'Name': 'Thailand'  },
						{ 'ID': 'TT' , 'Name': 'Trinidad and Tobago'  },
						{ 'ID': 'TR' , 'Name': 'Turkey'  },
						{ 'ID': 'TC' , 'Name': 'Turks and Caicos Islands'  },
						{ 'ID': 'UA' , 'Name': 'Ukraine'  },
						{ 'ID': 'AE' , 'Name': 'United Arab Emirates'  },
						{ 'ID': 'UY' , 'Name': 'Uruguay'  },
						{ 'ID': 'VI' , 'Name': 'US Virgin Islands'  },
						{ 'ID': 'VE' , 'Name': 'Venezuela'  },
						{ 'ID': 'VN' , 'Name': 'Vietnam'  },
						{ 'ID': 'YE' , 'Name': 'Yemen'  }, 
						];		  
			  $scope.usState = [ { 'ID': '0' , 'Name': 'Please Select'  },
			                    { 'ID': 'AA'  ,'Name': 'Armed Forces (the) Americas'  },
								{ 'ID': 'AE'  ,'Name': 'Armed Forces Europe'  },
								{ 'ID': 'AE'  ,'Name': 'Armed Forces Africa'  },
								{ 'ID': 'AE'  ,'Name': 'Armed Forces Middle East'  },
								{ 'ID': 'AE'  ,'Name': 'Armed Forces Canada'  },
								{ 'ID': 'AP'  ,'Name': 'Armed Forces Pacific'  },
								{ 'ID': 'AL'  ,'Name': 'Alabama'  },
								{ 'ID': 'AK'  ,'Name': 'Alaska'  },
								{ 'ID': 'AZ'  ,'Name': 'Arizona'  },
								{ 'ID': 'AR'  ,'Name': 'Arkansas'  },
								{ 'ID': 'CA'  ,'Name': 'California'  },
								{ 'ID': 'CO'  ,'Name': 'Colorado'  },
								{ 'ID': 'CT'  ,'Name': 'Connecticut'  },
								{ 'ID': 'DE'  ,'Name': 'Delaware'  },
								{ 'ID': 'DC'  ,'Name': 'District of Columbia'  },
								{ 'ID': 'FL'  ,'Name': 'Florida'  },
								{ 'ID': 'GA'  ,'Name': 'Georgia'  },
								{ 'ID': 'HI'  ,'Name': 'Hawaii'  },
								{ 'ID': 'ID'  ,'Name': 'Idaho'  },
								{ 'ID': 'IL'  ,'Name': 'Illinois'  },
								{ 'ID': 'IN'  ,'Name': 'Indiania'  },
								{ 'ID': 'IA'  ,'Name': 'Iowa'  },
								{ 'ID': 'KS'  ,'Name': 'Kansas'  },
								{ 'ID': 'KY'  ,'Name': 'Kentucky'  },
								{ 'ID': 'LA'  ,'Name': 'Louisiana'  },
								{ 'ID': 'ME'  ,'Name': 'Maine'  },
								{ 'ID': 'MD'  ,'Name': 'Maryland'  },
								{ 'ID': 'MA'  ,'Name': 'Massachusetts'  },
								{ 'ID': 'MI'  ,'Name': 'Michigan'  },
								{ 'ID': 'MN'  ,'Name': 'Minnesota'  },
								{ 'ID': 'MS'  ,'Name': 'Mississippi'  },
								{ 'ID': 'MO'  ,'Name': 'Missouri'  },
								{ 'ID': 'MT'  ,'Name': 'Montana'  },
								{ 'ID': 'NE'  ,'Name': 'Nebraska'  },
								{ 'ID': 'NV'  ,'Name': 'Nevada'  },
								{ 'ID': 'NH'  ,'Name': 'New Hampshire'  },
								{ 'ID': 'NJ'  ,'Name': 'New Jersey'  },
								{ 'ID': 'NM'  ,'Name': 'New Mexico'  },
								{ 'ID': 'NY'  ,'Name': 'New York'  },
								{ 'ID': 'NC'  ,'Name': 'North Carolina'  },
								{ 'ID': 'ND'  ,'Name': 'North Dakota'  },
								{ 'ID': 'OH'  ,'Name': 'Ohio'  },
								{ 'ID': 'OK'  ,'Name': 'Oklahoma'  },
								{ 'ID': 'OR'  ,'Name': 'Oregon'  },
								{ 'ID': 'PA'  ,'Name': 'Pennsylvania'  },
								{ 'ID': 'RI'  ,'Name': 'Rhode Island'  },
								{ 'ID': 'SC'  ,'Name': 'South Carolina'  },
								{ 'ID': 'SD'  ,'Name': 'South Dakota'  },
								{ 'ID': 'TN'  ,'Name': 'Tennessee'  },
								{ 'ID': 'TX'  ,'Name': 'Texas'  },
								{ 'ID': 'UT' , 'Name': 'Utah'  },
								{ 'ID': 'VT'  ,'Name': 'Vermont'  },
								{ 'ID': 'VA'  ,'Name': 'Virginia'  },
								{ 'ID': 'WA' , 'Name': 'Washington'  },
								{ 'ID': 'WV' , 'Name': 'West Virginia'  },
								{ 'ID': 'WI' , 'Name': 'Wisconsin'  },
								{ 'ID': 'WY' , 'Name': 'Wyoming'  },
			                 ]
			  $scope.selectedCountry = $scope.countryList[0];
			  $scope.selectedItem = $scope.usState[0];
			  
			  
        	  for (var i = 0; i < $scope.totPax; ++i) {
        		  $scope.DobDate[i]="Day";
    			  $scope.DobMonth[i]="0";
    			  $scope.DobYear[i]="Year";
        	  }
			 /* $scope.DobDate[0]="Day";
			  $scope.DobMonth[0]="0";
			  $scope.DobYear[0]="Year";
			  
			  $scope.DobDate[1]="Day";
			  $scope.DobMonth[1]="0";
			  $scope.DobYear[1]="Year";
			  
			  $scope.DobDate[2]="Day";
			  $scope.DobMonth[2]="0";
			  $scope.DobYear[2]="Year";
			  
			  $scope.DobDate[3]="Day";
			  $scope.DobMonth[3]="0";
			  $scope.DobYear[3]="Year";
			  
			  $scope.DobDate[4]="Day";
			  $scope.DobMonth[4]="0";
			  $scope.DobYear[4]="Year";
			  
			  $scope.DobDate[5]="Day";
			  $scope.DobMonth[5]="0";
			  $scope.DobYear[5]="Year";
			  
			  $scope.DobDate[6]="Day";
			  $scope.DobMonth[6]="0";
			  $scope.DobYear[6]="Year";
			  
			  $scope.DobDate[7]="Day";
			  $scope.DobMonth[7]="0";
			  $scope.DobYear[7]="Year";
			  
			  
			  $scope.DobDate[8]="Day";
			  $scope.DobMonth[8]="0";
			  $scope.DobYear[8]="Year";*/
			  
			//  alert($scope.selectedCountry);
			//  alert($scope.countryList[0]['ID']);
			 // $scope.option = $scope.item['Values'][0]['Name'];
			  }, 1000);
			  
			  
	}])
})()

var sz=0;
 	var imgss=['_y.jpg', '_d.jpg','_e.jpg','_g.jpg','_n.jpg','_s.jpg','_l.jpg','_b.jpg'];
 	
 	function imgError(img,srcc) {
 		//alert(srcc);
 		//alert(imgss[sz]);
 		//alert(imgss[sz+1]);
 		//alert("NEW:"+srcc.replace(imgss[sz],imgss[sz+1]));
 		//console.log('update with timeout fired sz:'+sz)
 		/*if(sz<7){
 		if(imgExists(srcc)){*/
 			 img.error="";
 			 img.src=srcc;
 		/*}else{
 			
 			//alert("NEW:"+srcc.replace(img[sz],img[sz+1]));
 			imgError(img,srcc.replace(imgss[sz],imgss[sz+1]));
 			sz=sz+1;
 		}
 		}*/
 		//alert(srcc);
 	   
 	}
 	
	function imgExists(imgPath) {
		  var http = jQuery.ajax({
		                type:"HEAD",
		        url: imgPath,
		        async: false
		          });
		  return http.status!=404;
		}


