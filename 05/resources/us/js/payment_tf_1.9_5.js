function my_rounded_number(number , decimal_places){
    x = number * window.Math.pow(10 , decimal_places)
    x = window.Math.round(x)
    return  x * window.Math.pow(10 , -decimal_places)
}

function isNumber(evt, element) {

    var charCode = (evt.which) ? evt.which : event.keyCode

    if (
        (charCode != 45 || $(element).val().indexOf('-') != -1) &&      // “-” CHECK MINUS, AND ONLY ONE.
        (charCode != 46 || $(element).val().indexOf('.') != -1) &&      // “.” CHECK DOT, AND ONLY ONE.
        (charCode < 48 || charCode > 57))
        return false;

    return true;
}
function capture() {
	$('#target').html2canvas({
		onrendered: function (canvas) {
            //Set hidden field's value to image data (base-64 string)
			$('#img_val').val(canvas.toDataURL("image/png"));
		}
	});
}

(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
        	$('.numbersOnly').keyup(function () {
        	    if (this.value != this.value.replace(/[^0-9]/g, '')) {
        	       this.value = this.value.replace(/[^0-9]/g, '');
        	    }
        	});
        	
        	$('.agentAmont').keyup(function(){
     		    var val = $(this).val();
     		    if(isNaN(val)){
     		         val = val.replace(/[^0-9\.]/g,'');
     		         if(val.split('.').length>2) 
     		             val =val.replace(/\.+$/,"");
     		    }
     		   if((val.indexOf('-') != -1)){
 		        	 val =val.replace(/\-/g, "");
      		    }
				if((val>20000)){
 		        	val ="20000";
      		    }
     		   $(this).val(val.trim()); 
     		});
        	
        	 $('.alphanumerics').keyup(function() {
                 if (this.value != this.value.replace(/[^a-zA-Z0-9 ]/g, '')) {
                     this.value = this.value.replace(/[^a-zA-Z0-9 ]/g, '');
                 }
             });
        	  $('.addressOnly').keyup(function() {
                 
                 if($("#bookingGDS").val() == '9') {
                	 if (this.value != this.value.replace(/[^a-zA-Z0-9_./#, ]/g, '')) {
                         this.value = this.value.replace(/[^a-zA-Z0-9_./#, ]/g, '');
                     }
 				} else {
 					if (this.value != this.value.replace(/[^a-zA-Z0-9-_./#, ]/g, '')) {
 	                     this.value = this.value.replace(/[^a-zA-Z0-9-_./#, ]/g, '');
 	                 }
 				}
             });
        	 $('.groupOfAmont').keyup(function(){
     		    var val = $(this).val();
     		    if(isNaN(val)){
     		         val = val.replace(/[^0-9\.]/g,'');
     		         if(val.split('.').length>2) 
     		             val =val.replace(/\.+$/,"");
     		    }
     		   if((val.indexOf('-') != -1)){
 		        	 val =val.replace(/\-/g, "");
      		    }
     		   $(this).val(val.trim()); 
     		});
        	 
        	$('.numbersastOnly').keyup(function () {
        	    if (this.value != this.value.replace(/[^0-9\.*]/g, '')) {
        	       this.value = this.value.replace(/[^0-9\.*]/g, '');
        	    }
        	});
        	$('.numbersastseveOnly').keyup(function () {
           	 
        		if($("#payment-card").val()=="American Express"){
        			if (this.value.length>15) {
            	    	this.value = this.value.substring(0, 15);
            	    	return false;
        			}
	            }else{
        	    if (this.value.length>16) {
        	    	this.value = this.value.substring(0, 16);
        	    	return false;         	       
         	    }
	            }
        	});
        	$('.numbersastsevemaskOnly').keyup(function () {
              	 
        		if($("#payment-card2").val()=="American Express"){
        			if (this.value.length>15) {
            	    	this.value = this.value.substring(0, 15);
            	    	return false;
        			}
	            }else{
        	    if (this.value.length>16) {
        	    	this.value = this.value.substring(0, 16);
        	    	return false;         	       
         	    }
	            }
        	});
        	$('.textOnly').keyup(function () {
        		  if (this.value != this.value.replace(/[^a-zA-Z ]+/g, '')) {
        		       this.value = this.value.replace(/[^a-zA-Z ]+/g, '');
        		    }
        	});
        	
			$('.noSpace').on('keypress', function(e) {
			if (e.which == 32)
				return false;
			});
			
			$("input").on("keypress", function(e) {	
				if (e.which === 32 && !this.value.length)
					e.preventDefault();
			});
			
        	$("#Payments_Country").change(function () {
               // $('div.box').hide();
                //$('div.box.' + $(this).val()).show();
        		 if($("#payment_postalCode").val().length > 0){
        		$("#booking").validate().element("#payment_postalCode");
        		 }        	
            })
            
            $("#payment-card").change(function () {
               // $('div.box').hide();
                //$('div.box.' + $(this).val()).show();
            //	console.log($("#payment-card").val());
            	if($("#payment-card").val()=="American Express"){
            		   var src = "/resources/images/ccv-img2.gif";
                       $("#ccvimg").attr("src", src);//<a class="text_link">3 Digit Number From Your Card<span></span></a> 
                       $("#tooltip").html("<a class=\"text_link\">4 Digit Number From Your Card<span></span></a>");
            	}else if($("#payment-card").val()=="Master Card"){
         		   var src = "/resources/images/ccv-img.gif";
                   $("#ccvimg").attr("src", src);
                   $("#tooltip").html("<a class=\"text_link\">3/4 Digit Number From Your Card <span></span> </a>");
        	    }else{
            		   var src = "/resources/images/ccv-img.gif";
                       $("#ccvimg").attr("src", src);
                       $("#tooltip").html("<a class=\"text_link\">3 Digit Number From Your Card<span></span></a>");
            	}            	

            	var card_number = jQuery("#Payments_CardNumber").val();
            	if(card_number == ""){
            		card_number = jQuery("#Payments_MaskCardNumber").val();
            	}
            	
            	if(card_number != ""){
            		jQuery("#Payments_CardNumber").val("");
            		jQuery("#Payments_MaskCardNumber").val(card_number);
            	var conds=$("#booking").validate().element("#Payments_MaskCardNumber");
            	if(conds){
            		jQuery("#Payments_CardNumber").val(card_number);

            	 var new_card_number = "************";
            	 for(var loop2=12; loop2 < card_number.length; loop2++)
            	 {
            	     new_card_number = new_card_number+card_number.charAt(loop2);
            	 }
            	 jQuery("#Payments_MaskCardNumber").val(new_card_number);
            	}
            	}

           /*            	
        		if($("#Payments_CardNumber").val().length > 0){
        		$("#booking").validate().element("#Payments_CardNumber");
        		 }
        		 if($("#Payments_MaskCardNumber").val().length > 0){
             		$("#booking").validate().element("#Payments_CardNumber");
             		 }*/
        		 if($("#Payments_CvvNo").val().length > 0){
             		$("#booking").validate().element("#Payments_CvvNo");
             		 }
            })
          $("#payment-card2").change(function () {
               // $('div.box').hide();
                //$('div.box.' + $(this).val()).show();
            //	console.log($("#payment-card").val());
            	if($("#payment-card2").val()=="American Express"){
            		   var src = "/resources/images/ccv-img2.gif";
                       $("#ccvimg2").attr("src", src);
                       $("#tooltip2").html("<a class=\"text_link\">4 Digit Number From Your Card<span></span></a>");
            	}else{
            		   var src = "/resources/images/ccv-img.gif";
                       $("#ccvimg2").attr("src", src);
                       $("#tooltip2").html("<a class=\"text_link\">3 Digit Number From Your Card<span></span></a>");
            	}
            	
        		 if($("#Payments_CardNumber2").val().length > 0){
        		$("#booking").validate().element("#Payments_CardNumber2");
        		 }
        		 if($("#Payments_MaskCardNumber2").val().length > 0){
             		$("#booking").validate().element("#Payments_CardNumber2");
             		 }
        		 if($("#Payments_CvvNo2").val().length > 0){
             		$("#booking").validate().element("#Payments_CvvNo2");
             		 }
            })			   
            
            //form validation rules
            $("#booking").validate({            	
                rules: { 
		                   'passengerList[0].Title': {
		            		 required: function(element){
                 				if($("#bookingGDS").val() == '9') {
                					return true;
                				} else {
                					return false;
                				}
                				
                			},
		            		 titlereq: true
		            		},
                		   'passengerList[0].Gender': {
                		    required: true,
                		    genderreq: true
                			},
                		   'passengerList[0].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'passengerList[0].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true,
							minlength : 2
                			},
                			'passengerList[0].DobDate': {
                		     selectdate: true,
                		     age_val:0
                			},
                			'passengerList[0].DobMonth': {
                		     selectmonth: true,
                		     age_val:0
                		     
                			},
                			'passengerList[0].DobYear': {
                		     selectyear: true,
                		     age_val:0
                			},
                			/*'passengerList[0].Nationality': {
	   		            		 required: function(element){	                    			
	   		            			if($("#nationalityRequired").val() == 'true') {
	                   					return true;
	                   				} else {
	                   					return false;
	                   				}
	                   				
	                   			},
	                   			nationalityreq: true
  		            		},*/
                			'passengerList[1].Title': {
   		            		 required: function(element){
                 				if($("#bookingGDS").val() == '9') {
                					return true;
                				} else {
                					return false;
                				}
                				
                			},
   		            		 titlereq: true
   		            		},
                			'passengerList[1].Gender': {
                		    required: true,
                		    genderreq: true
                			},
                		    'passengerList[1].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                		    
                			}, 
                			'passengerList[1].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true,
							minlength : 2
                			},
                			'passengerList[1].DobDate': {
                		     selectdate: true,
                		     age_val:1
                			},
                			'passengerList[1].DobMonth': {
                		     selectmonth: true,
                		     age_val:1
                			},
                			'passengerList[1].DobYear': {
                		     selectyear: true,
                		     age_val:1
                			},
                			/*'passengerList[1].Nationality': {
	   		            		 required: function(element){	                    			
	   		            			if($("#nationalityRequired").val() == 'true') {
	                   					return true;
	                   				} else {
	                   					return false;
	                   				}
	                   				
	                   			},
	                   			nationalityreq: true
  		            		},*/
                			'passengerList[2].Title': {
   		            		 required: function(element){
                 				if($("#bookingGDS").val() == '9') {
                					return true;
                				} else {
                					return false;
                				}
                				
                			},
   		            		 titlereq: true
   		            		},
                			'passengerList[2].Gender': {
                		    required: true,
                		    genderreq: true
                			},
                			 'passengerList[2].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[2].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true,
							minlength : 2
                			},
                			'passengerList[2].DobDate': {
                		     selectdate: true,
                		     age_val:2
                			},
                			'passengerList[2].DobMonth': {
                		     selectmonth: true,
                		     age_val:2
                			},
                			'passengerList[2].DobYear': {
                		     selectyear: true,
                		     age_val:2
                			},
                			/*'passengerList[2].Nationality': {
	   		            		 required: function(element){	                    			
	   		            			if($("#nationalityRequired").val() == 'true') {
	                   					return true;
	                   				} else {
	                   					return false;
	                   				}
	                   				
	                   			},
	                   			nationalityreq: true
  		            		},*/
                			'passengerList[3].Title': {
   		            		 required: function(element){
                 				if($("#bookingGDS").val() == '9') {
                					return true;
                				} else {
                					return false;
                				}
                				
                			},
   		            		 titlereq: true
   		            		},
                			'passengerList[3].Gender': {
                		    required: true,
                		    genderreq: true
                			},
                			 'passengerList[3].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[3].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true,
							minlength : 2
                			},
                			'passengerList[3].DobDate': {
                		     selectdate: true,
                		     age_val:3
                			},
                			'passengerList[3].DobMonth': {
                		     selectmonth: true,
                		     age_val:3
                			},
                			'passengerList[3].DobYear': {
                		     selectyear: true,
                		     age_val:3
                			},
                			/*'passengerList[3].Nationality': {
	   		            		 required: function(element){	                    			
	   		            			if($("#nationalityRequired").val() == 'true') {
	                   					return true;
	                   				} else {
	                   					return false;
	                   				}
	                   				
	                   			},
	                   			nationalityreq: true
  		            		},*/
                			'passengerList[4].Title': {
   		            		 required: function(element){
                 				if($("#bookingGDS").val() == '9') {
                					return true;
                				} else {
                					return false;
                				}
                				
                			},
   		            		 titlereq: true
   		            		},
                			'passengerList[4].Gender': {
                		    required: true,
                		    genderreq: true
                			},
                			 'passengerList[4].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[4].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true,
							minlength : 2
                			},
                			'passengerList[4].DobDate': {
                		     selectdate: true,
                		     age_val:4
                			},
                			'passengerList[4].DobMonth': {
                		     selectmonth: true,
                		     age_val:4
                			},
                			'passengerList[4].DobYear': {
                		     selectyear: true,
                		     age_val:4
                			},
                			/*'passengerList[4].Nationality': {
	   		            		 required: function(element){	                    			
	   		            			if($("#nationalityRequired").val() == 'true') {
	                   					return true;
	                   				} else {
	                   					return false;
	                   				}
	                   				
	                   			},
	                   			nationalityreq: true
  		            		},*/
                			'passengerList[5].Title': {
   		            		 required: function(element){
                 				if($("#bookingGDS").val() == '9') {
                					return true;
                				} else {
                					return false;
                				}
                				
                			},
   		            		 titlereq: true
   		            		},
                			'passengerList[5].Gender': {
                		    required: true,
                		    genderreq: true
                			},
                			 'passengerList[5].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[5].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true,
							minlength : 2
                			},
                			'passengerList[5].DobDate': {
                		     selectdate: true,
                		     age_val:5
                			},
                			'passengerList[5].DobMonth': {
                		     selectmonth: true,
                		     age_val:5
                			},
                			'passengerList[5].DobYear': {
                		     selectyear: true,
                		     age_val:5
                			},
                			/*'passengerList[5].Nationality': {
	   		            		 required: function(element){	                    			
	   		            			if($("#nationalityRequired").val() == 'true') {
	                   					return true;
	                   				} else {
	                   					return false;
	                   				}
	                   				
	                   			},
	                   			nationalityreq: true
  		            		},*/
                			'passengerList[6].Title': {
   		            		 required: function(element){
                 				if($("#bookingGDS").val() == '9') {
                					return true;
                				} else {
                					return false;
                				}
                				
                			},
   		            		 titlereq: true
   		            		},
                			'passengerList[6].Gender': {
                		    required: true,
                		    genderreq: true
                			},
                			 'passengerList[6].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[6].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true,
							minlength : 2
                			},
                			'passengerList[6].DobDate': {
                		     selectdate: true,
                		     age_val:6
                			},
                			'passengerList[6].DobMonth': {
                		     selectmonth: true,
                		     age_val:6
                			},
                			'passengerList[6].DobYear': {
                		     selectyear: true,
                		     age_val:6
                			},
                			/*'passengerList[6].Nationality': {
	   		            		 required: function(element){	                    			
	   		            			if($("#nationalityRequired").val() == 'true') {
	                   					return true;
	                   				} else {
	                   					return false;
	                   				}
	                   				
	                   			},
	                   			nationalityreq: true
  		            		},*/
                			'passengerList[7].Title': {
   		            		 required: function(element){
                 				if($("#bookingGDS").val() == '9') {
                					return true;
                				} else {
                					return false;
                				}
                				
                			},
   		            		 titlereq: true
   		            		},
                			 'passengerList[7].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[7].Gender': {
                		    required: true,
                		    genderreq: true
                			},
                			'passengerList[7].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true,
               		        age_val:7,
							minlength : 2
                			},
                			'passengerList[7].DobDate': {
                		     selectdate: true,
                		     age_val:7
                			},
                			'passengerList[7].DobMonth': {
                		     selectmonth: true,
                		     age_val:7
                			},
                			'passengerList[7].DobYear': {
                		     selectyear: true
                			},
                			/*'passengerList[7].Nationality': {
	   		            		 required: function(element){	                    			
	   		            			if($("#nationalityRequired").val() == 'true') {
	                   					return true;
	                   				} else {
	                   					return false;
	                   				}
	                   				
	                   			},
	                   			nationalityreq: true
  		            		},*/
                			'passengerList[8].Title': {
   		            		 required: function(element){
                 				if($("#bookingGDS").val() == '9') {
                					return true;
                				} else {
                					return false;
                				}
                			},
   		            		 titlereq: true
   		            		},
                			'passengerList[8].Gender': {
                		    required: true,
                		    genderreq: true
                			},
                			'passengerList[8].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[8].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true,
							minlength : 2
                			},
                			'passengerList[8].DobDate': {
                		     selectdate: true,
                		     age_val:8
                			},
                			'passengerList[8].DobMonth': {
                		     selectmonth: true,
                		     age_val:8
                			},
                			'passengerList[8].DobYear': {
                		     selectyear: true,
                		     age_val:8
                			},
                			/*'passengerList[8].Nationality': {
	   		            		 required: function(element){	                    			
	   		            			if($("#nationalityRequired").val() == 'true') {
	                   					return true;
	                   				} else {
	                   					return false;
	                   				}
	                   				
	                   			},
	                   			nationalityreq: true
  		            		},*/
                		  'payment.cardCode': {
                				selectcard: true,
                				/*depends: function(element) {
                                    return (cc_brand_id($("#Payments_CardNumber").val(),$("#payment-card").val()));
                                },*/
                			//	cccardvalue:true
                			},
							 'payment.cardCode2': {
                				selectcard2: true
							 },
                			'payment.maskCardNumber': {
                				required: true,
                				ccMaskCheckvalue:true,
                				ccmasksamevalue: true,
                		        minlength : function(element){
                		            if($("#payment-card").val()=="American Express"){
                		                return 15;
                		            }
									else if($("#payment-card").val()=="Diners Club"){
										return 14;
									}
                		            else{
                		                return 16;
                		            } },
                				maxlength:function(element){
                		            if($("#payment-card").val()=="American Express"){
                		                return 15;
                		            }
									else if($("#payment-card").val()=="Diners Club"){
										return 14;
									}
                		            else{
                		                return 16;
                		            } },
                			},
								'payment.maskCardNumber2': {
                				required2: true,
                				ccMaskCheckvalue2:true,
                				ccmasksamevalue: true,
                		        minlength : function(element){
                		        	
                		            if($("#payment-card2").val()=="American Express"){
                		                return 15;
                		            }
									else if($("#payment-card2").val()=="Diners Club"){
										return 14;
									}
                		            else{
                		                return 16;
                		            } },
                				maxlength:function(element){
                				
                		            if($("#payment-card2").val()=="American Express"){
                		                return 15;
                		            }
									else if($("#payment-card2").val()=="Diners Club"){
										return 14;
									}
                		            else{
                		                return 16;
                		            } },
                			},
                			'payment.cardNumber': {
                				required: true,
                				//number:true,
                		        ccCheckvalue:true,
                		      /*  depends: function(element) {
                                    return (cc_brand_id($("#Payments_CardNumber").val(),$("#payment-card").val()));
                                },*/
                		        minlength : function(element){
                		        	
                		            if($("#payment-card").val()=="American Express"){
                		                return 15;
                		            }
									else if($("#payment-card").val()=="Diners Club"){
										return 14;
									}
                		            else{
                		                return 16;
                		            } },
                				//minlength: 15,
                				maxlength:function(element){
                		            if($("#payment-card").val()=="American Express"){
                		                return 15;
                		            }
									else if($("#payment-card").val()=="Diners Club"){
										return 14;
									}
                		            else{
                		                return 16;
                		            } },
                			},
								'payment.cardNumber2': {
									required2:true,
                				//number:true,
                		     
                		        minlength : function(element){
                		        	
                		            if($("#payment-card2").val()=="American Express"){
                		                return 15;
                		            }
									else if($("#payment-card2").val()=="Diners Club"){
										return 14;
									}
                		            else{
                		                return 16;
                		            } },
                				//minlength: 15,
                				maxlength:function(element){
                		            if($("#payment-card2").val()=="American Express"){
                		                return 15;
                		            }
									else if($("#payment-card2").val()=="Diners Club"){
										return 14;
									}
                		            else{
                		                return 16;
                		            } },
                			},
                			
                			'payment.cardHolderName': {
                				required: true,
                				requiredTextvalue: true,
                			    lettersonly: true
                			},
                			'payment.expiryMonth': {
                				selectExpMonth: true,
                			},
                			'payment.expiryYear': {
                				selectExpYear: true,
                				CCExp: {
                                    month: '#Payments_ExpiryMonth',
                                    year: '#Payments_ExpiryYear'
                              }
                			},
                			'payment.cvvNo': {
                				required: true,
                				ccvnumeric: true,
                				minlength : function(element){
                  		        	
                  		            if($("#payment-card").val()=="American Express"){
                  		                return 4;
                  		            }else if($("#payment-card").val()=="Master Card"){
                  		                return 3;
                  		            }
                  		            else{
                  		                return 3;
                  		            } },
                  				//minlength: 15,
                  				maxlength:function(element){
                  		            if($("#payment-card").val()=="American Express"){
                  		                return 4;
                  		            }else if($("#payment-card").val()=="Master Card"){
                  		                return 4;
                  		            }
                  		            else{
                  		                return 3;
                  		            } },
                			},
								'payment.expiryMonth2': {
                				selectExpMonth2: card2Required,
                			},
                			'payment.expiryYear2': {
                				selectExpYear2: card2Required,
                				
                				CCExp2: {
                                    month: '#Payments_ExpiryMonth2',
                                    year: '#Payments_ExpiryYear2'
                              }
                			},
                			'payment.amountToCharge2':{
                				
                				required: card2Required,
                				amountnumeric: true,
                				/* notEqual: '0.00',
                				 notEquals: '0'*/
                			},'payment.amountToCharge':{
                				required: card2Required,
                				amountnumeric: true,
                				 notEqual: '0.00',
                				 notEquals: '0'
                			},
                			'payment.cvvNo2': {
                				cvvrequired2: true,
                				ccvnumeric2: true,
                				minlength : function(element){
                					
                  		        	if(card2Required){
                  		            if($("#payment-card2").val()=="American Express"){
                  		                return 4;
                  		            }else if($("#payment-card2").val()=="Master Card"){
                  		                return 3;
                  		            }
                  		            else{
                  		                return 3;
                  		            } }
                  		        	else{
                  		        		return 3;
                  		        	}},
                  				maxlength:function(element){
                  					
                  					if(card2Required){
                  		            if($("#payment-card2").val()=="American Express"){
                  		                return 4;
                  		            }else if($("#payment-card2").val()=="Master Card"){
                  		                return 4;
                  		            }
                  		            else{
                  		                return 3;
                  		            }}else{
                  		            	return 3;
                  		        	} },
                			},
                			'payment.address1': {
                				required: true,
                				requiredTextvalue: true,
                				address1Eq: function(element){
                    				if($("#bookingGDS").val() == '9') {
                    					return true;
                    				} else {
                    					return false;
                    				}                    				
                    			},
                			},
                			'payment.address2': {
                				required: function(element){
                    				if($("#bookingGDS").val() == '9') {
                    					return true;
                    				} else {
                    					return false;
                    				}                    				
                    			},
                				//requiredTextvalue: true,
                			},
                			'payment.city': {
                				required: true,
                				requiredTextvalue: true,
                			},
                			'payment.country': {
                				required: true,
                				selectcountry: true
                		     },
                			'payment.state': {
                				//required: true,
                				selectstate: true
                			},
                			'payment.postalCode': {
                				required: true,
                			//	minlength: 5,
                                zipval:true,                           
                				/*remote: function() {
                					if($("#payment_postalCode").val().length>4){
                		            var r = {  
                		                url: '/json/checkZipcode',  
                		                type: "POST",  
                		                contentType: "application/json; charset=utf-8",  
                		                dataType: "json",  
                		                data: '{"countryName": "' + $("#Payments_Country").val() + '","zipCode": "' + $("#payment_postalCode").val() + '"}'
                		               }  
                		            return r; 
                					}
                		          }*/ 
                			  
                			},
                			'contact.billingPhone': {
                				required: true,
                				minlength:10,
                				maxlength: 15,
                				number: true
                			},
                			'contact.mobile': {
                				//required: true,
                				minlength:10,
                				maxlength: 15,
                				number: true
                			},
                			'contact.email': {
                				required: true,
                				email: true
                			},
                			'contact.email1': {
                				required: true,
                				email: true,
                				emailEq: true
                			},
                			'contact.intcode': {
                				/*required: true,
                				minlength: 1,
                				maxlength: 5,
                				number: true*/
                			},
                			'contact.areacode': {
                				/*required: true,
                				minlength: 1,
                				maxlength: 5,
                				number: true*/
                			},
                			'macp': {
                				/*required: function(element){
                    				if($("#bookingGDS").val() == '9') {
                    					return false;
                    				} else {
                    					return true;
                    				}
                    				
                    			},
                				requiredvalue: function(element){
                    				if($("#bookingGDS").val() == '9') {
                    					return false;
                    				} else {
                    					return true;
                    				}
                    				
                    			},*/                				
                			},
                			'TravelGuard': {
                				required: true,
                				requiredvalue: true,                				
                			},
                			'TripMate': {
                				//required: true,
                				//requiredvalue: true,
                				
                			},
                			'brb': {
                				/*required: function(element){
                    				if($("#bookingGDS").val() == '9') {
                    					return false;
                    				} else {
                    					return true;
                    				}
                    				
                    			},
                				requiredvalue: function(element){
                    				if($("#bookingGDS").val() == '9') {
                    					return false;
                    				} else {
                    					return true;
                    				}
                    				
                    			},*/                				
                			},
                		    },
                		    onkeyup: false,
                		    onblur: false,
                		    onclick: false,
                		    onfocusout: function (element) {
                		        $(element).valid();
                		    },
                		    highlight: function (element) {
                		    	//debugger
                		        $(element).closest('.form-group').removeClass('valid').addClass('has-error');
                		        $(element).addClass('select-class');
                		        $(element).addClass('radio-class');
                		        
                		        if ($(element).attr("name") == "passengerList[0].Title" || $(element).attr("name") == "passengerList[0].Gender" || $(element).attr("name") == "passengerList[0].FirstName" || $(element).attr("name") == "passengerList[0].LastName" || $(element).attr("name") == "passengerList[0].DobDate" || $(element).attr("name") == "passengerList[0].DobMonth" || $(element).attr("name") == "passengerList[0].DobYear" || $(element).attr("name") == "passengerList[0].Nationality") {
                  		          $("#errors0").addClass('help-block').removeClass('valid');
                     		        }else if ($(element).attr("name") == "passengerList[1].Title" || $(element).attr("name") == "passengerList[1].Gender" || $(element).attr("name") == "passengerList[1].FirstName" || $(element).attr("name") == "passengerList[1].LastName" || $(element).attr("name") == "passengerList[1].DobDate" || $(element).attr("name") == "passengerList[1].DobMonth" || $(element).attr("name") == "passengerList[1].DobYear" || $(element).attr("name") == "passengerList[1].Nationality") {
                     		      	$("#errors1").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[2].Title" || $(element).attr("name") == "passengerList[2].Gender" || $(element).attr("name") == "passengerList[2].FirstName" || $(element).attr("name") == "passengerList[2].LastName" || $(element).attr("name") == "passengerList[2].DobDate" || $(element).attr("name") == "passengerList[2].DobMonth" || $(element).attr("name") == "passengerList[2].DobYear" || $(element).attr("name") == "passengerList[2].Nationality") {
                     		       $("#errors2").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[3].Title" || $(element).attr("name") == "passengerList[3].Gender" || $(element).attr("name") == "passengerList[3].FirstName" || $(element).attr("name") == "passengerList[3].LastName" || $(element).attr("name") == "passengerList[3].DobDate" || $(element).attr("name") == "passengerList[3].DobMonth" || $(element).attr("name") == "passengerList[3].DobYear" || $(element).attr("name") == "passengerList[3].Nationality") {
                     		       $("#errors3").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[4].Title" || $(element).attr("name") == "passengerList[4].Gender" || $(element).attr("name") == "passengerList[4].FirstName" || $(element).attr("name") == "passengerList[4].LastName" || $(element).attr("name") == "passengerList[4].DobDate" || $(element).attr("name") == "passengerList[4].DobMonth" || $(element).attr("name") == "passengerList[4].DobYear" || $(element).attr("name") == "passengerList[4].Nationality") {
                     		       $("#errors4").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[5].Title" || $(element).attr("name") == "passengerList[5].Gender" || $(element).attr("name") == "passengerList[5].FirstName" || $(element).attr("name") == "passengerList[5].LastName" || $(element).attr("name") == "passengerList[5].DobDate" || $(element).attr("name") == "passengerList[5].DobMonth" || $(element).attr("name") == "passengerList[5].DobYear" || $(element).attr("name") == "passengerList[5].Nationality") {
                     		       $("#errors5").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[6].Title" || $(element).attr("name") == "passengerList[6].Gender" || $(element).attr("name") == "passengerList[6].FirstName" || $(element).attr("name") == "passengerList[6].LastName" || $(element).attr("name") == "passengerList[6].DobDate" || $(element).attr("name") == "passengerList[6].DobMonth" || $(element).attr("name") == "passengerList[6].DobYear" || $(element).attr("name") == "passengerList[6].Nationality") {
                     		       $("#errors6").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[7].Title" || $(element).attr("name") == "passengerList[7].Gender" || $(element).attr("name") == "passengerList[7].FirstName" || $(element).attr("name") == "passengerList[7].LastName" || $(element).attr("name") == "passengerList[7].DobDate" || $(element).attr("name") == "passengerList[7].DobMonth" || $(element).attr("name") == "passengerList[7].DobYear" || $(element).attr("name") == "passengerList[7].Nationality") {
                     		       $("#errors7").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[8].Title" || $(element).attr("name") == "passengerList[8].Gender" || $(element).attr("name") == "passengerList[8].FirstName" || $(element).attr("name") == "passengerList[8].LastName" || $(element).attr("name") == "passengerList[8].DobDate" || $(element).attr("name") == "passengerList[8].DobMonth" || $(element).attr("name") == "passengerList[8].DobYear" || $(element).attr("name") == "passengerList[8].Nationality") {
                     		       $("#errors8").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "payment.expiryMonth" || $(element).attr("name") == "payment.expiryYear") {
                     		         $("#Experrors").addClass('help-block');
                     		           
                     		        }else if ($(element).attr("name") == "payment.expiryMonth2" || $(element).attr("name") == "payment.expiryYear2") {
                     		         $("#Experrors2").addClass('help-block');
                     		        }else if (($(element).attr("name") == "macp") && ($("#bookingGDS").val() != '9')) {  
                     		        
                     		         $("#tcpid").addClass('help-block');
                     		        document.getElementById("tcpid").style.display='block'; 
                     		            
                     		        }else if ($(element).attr("name") == "TravelGuard") {
                     		         $("#tgpid").addClass('help-block');
                     		        }
                     		       else if ($(element).attr("name") == "brb"){
                       		         $("#brbError").addClass('help-block');
                       		      document.getElementById("brbError").style.display='block'; 
                       		        }
                     		       else if ($(element).attr("name") == "TripMate" ) {
                     		    
                     		    	  document.getElementById("tmpid").style.display='block'; 
                       		         $("#tmpid").addClass('help-block');
                       		          $("#tmpid").removeClass('tmpid');
                       		        }
                		    },
                		    unhighlight: function (element) {
                		    	//debugger
                		        $(element).closest('.form-group').removeClass('has-error').addClass('valid');
                		        $(element).removeClass('select-class');
                		        $(element).removeClass('radio-class');
                		        //console.log("element.attr(name):"+$(element).attr("name"));
                		      /*  if ($(element).attr("name") == "passengerList[0].FirstName" || $(element).attr("name") == "passengerList[0].LastName" || $(element).attr("name") == "passengerList[0].DobDate" || $(element).attr("name") == "passengerList[0].DobMonth" || $(element).attr("name") == "passengerList[0].DobYear") {
                    		          $("#errors0").removeClass('help-block').addClass('valid');
                       		        }else if ($(element).attr("name") == "passengerList[1].FirstName" || $(element).attr("name") == "passengerList[1].LastName" || $(element).attr("name") == "passengerList[1].DobDate" || $(element).attr("name") == "passengerList[1].DobMonth" || $(element).attr("name") == "passengerList[1].DobYear") {
                       		        	$("#errors1").removeClass('help-block').addClass('valid');
                       		       }else if ($(element).attr("name") == "passengerList[2].FirstName" || $(element).attr("name") == "passengerList[2].LastName" || $(element).attr("name") == "passengerList[2].DobDate" || $(element).attr("name") == "passengerList[2].DobMonth" || $(element).attr("name") == "passengerList[2].DobYear") {
                       		       $("#errors2").removeClass('help-block').addClass('valid');
                       		       }else if ($(element).attr("name") == "passengerList[3].FirstName" || $(element).attr("name") == "passengerList[3].LastName" || $(element).attr("name") == "passengerList[3].DobDate" || $(element).attr("name") == "passengerList[3].DobMonth" || $(element).attr("name") == "passengerList[3].DobYear") {
                       		       $("#errors3").removeClass('help-block').addClass('valid');
                       		       }else if ($(element).attr("name") == "passengerList[4].FirstName" || $(element).attr("name") == "passengerList[4].LastName" || $(element).attr("name") == "passengerList[4].DobDate" || $(element).attr("name") == "passengerList[4].DobMonth" || $(element).attr("name") == "passengerList[4].DobYear") {
                       		       $("#errors4").removeClass('help-block').addClass('valid');
                       		       }else if ($(element).attr("name") == "passengerList[5].FirstName" || $(element).attr("name") == "passengerList[5].LastName" || $(element).attr("name") == "passengerList[5].DobDate" || $(element).attr("name") == "passengerList[5].DobMonth" || $(element).attr("name") == "passengerList[5].DobYear") {
                       		       $("#errors5").removeClass('help-block').addClass('valid');
                       		       }else if ($(element).attr("name") == "passengerList[6].FirstName" || $(element).attr("name") == "passengerList[6].LastName" || $(element).attr("name") == "passengerList[6].DobDate" || $(element).attr("name") == "passengerList[6].DobMonth" || $(element).attr("name") == "passengerList[6].DobYear") {
                       		       $("#errors6").removeClass('help-block').addClass('valid');
                       		       }else if ($(element).attr("name") == "passengerList[7].FirstName" || $(element).attr("name") == "passengerList[7].LastName" || $(element).attr("name") == "passengerList[7].DobDate" || $(element).attr("name") == "passengerList[7].DobMonth" || $(element).attr("name") == "passengerList[7].DobYear") {
                       		       $("#errors7").removeClass('help-block').addClass('valid');
                       		       }else if ($(element).attr("name") == "passengerList[8].FirstName" || $(element).attr("name") == "passengerList[8].LastName" || $(element).attr("name") == "passengerList[8].DobDate" || $(element).attr("name") == "passengerList[8].DobMonth" || $(element).attr("name") == "passengerList[8].DobYear") {
                       		       $("#errors8").removeClass('help-block').addClass('valid');
                       		       }else */if ($(element).attr("name") == "payment.expiryMonth" || $(element).attr("name") == "payment.expiryYear") {
                   		         $("#Experrors").removeClass('help-block').addClass('valid');
                   		           
                   		        }else if ($(element).attr("name") == "payment.expiryMonth2" || $(element).attr("name") == "payment.expiryYear2") {
                   		         $("#Experrors2").removeClass('help-block').addClass('valid');
                   		           
                   		        }else if (($(element).attr("name") == "macp") && ($("#bookingGDS").val() != '9')) {
                   		        
                   		         $("#tcpid").removeClass('help-block');
                   		         document.getElementById("tcpid").style.display='none'; 
                   		     
                   		        }else if ($(element).attr("name") == "TravelGuard" ) {
                   		         $("#tgpid").removeClass('help-block');
                   		        }
                   		     else if ($(element).attr("name") == "TripMate") {
                   		         $("#tmpid").removeClass('help-block');
                   		      $("#tmpid").addClass('tmpid');
                   		   document.getElementById("tmpid").style.display='none'; 
                   		        }
                   		     else if ($(element).attr("name") == "brb") {
                   		         $("#brbError").removeClass('help-block');
                   		         	document.getElementById("brbError").style.display='none'; 
                   		        }
                		      },
                		    errorElement: 'div',
                		    //errorClass: 'help-block',
                		    errorPlacement: function (error, element) {
                		    	    if (element.attr("name") == "passengerList[0].Title" || element.attr("name") == "passengerList[0].Gender" || element.attr("name") == "passengerList[0].FirstName" || element.attr("name") == "passengerList[0].LastName" || element.attr("name") == "passengerList[0].DobDate" || element.attr("name") == "passengerList[0].DobMonth" || element.attr("name") == "passengerList[0].DobYear" || element.attr("name") == "passengerList[0].Nationality") {
                		    		$("#errors0").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors0");
                		    		}else if (element.attr("name") == "passengerList[1].Title" || element.attr("name") == "passengerList[1].Gender" || element.attr("name") == "passengerList[1].FirstName" || element.attr("name") == "passengerList[1].LastName" || element.attr("name") == "passengerList[1].DobDate" || element.attr("name") == "passengerList[1].DobMonth" || element.attr("name") == "passengerList[1].DobYear" || element.attr("name") == "passengerList[1].Nationality") {
                		    		$("#errors1").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors1");
                		    		}else if (element.attr("name") == "passengerList[2].Title" || element.attr("name") == "passengerList[2].Gender" || element.attr("name") == "passengerList[2].FirstName" || element.attr("name") == "passengerList[2].LastName" || element.attr("name") == "passengerList[2].DobDate" || element.attr("name") == "passengerList[2].DobMonth" || element.attr("name") == "passengerList[2].DobYear" || element.attr("name") == "passengerList[2].Nationality") {
                		    		$("#errors2").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors2");
                		    		}else if (element.attr("name") == "passengerList[3].Title" || element.attr("name") == "passengerList[3].Gender" || element.attr("name") == "passengerList[3].FirstName" || element.attr("name") == "passengerList[3].LastName" || element.attr("name") == "passengerList[3].DobDate" || element.attr("name") == "passengerList[3].DobMonth" || element.attr("name") == "passengerList[3].DobYear" || element.attr("name") == "passengerList[3].Nationality") {
                		    		$("#errors3").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors3");
                		    		}else if (element.attr("name") == "passengerList[4].Title" || element.attr("name") == "passengerList[4].Gender" || element.attr("name") == "passengerList[4].FirstName" || element.attr("name") == "passengerList[4].LastName" || element.attr("name") == "passengerList[4].DobDate" || element.attr("name") == "passengerList[4].DobMonth" || element.attr("name") == "passengerList[4].DobYear" || element.attr("name") == "passengerList[4].Nationality") {
                		    		$("#errors4").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors4");
                		    		}else if (element.attr("name") == "passengerList[5].Title" || element.attr("name") == "passengerList[5].Gender" || element.attr("name") == "passengerList[5].FirstName" || element.attr("name") == "passengerList[5].LastName" || element.attr("name") == "passengerList[5].DobDate" || element.attr("name") == "passengerList[5].DobMonth" || element.attr("name") == "passengerList[5].DobYear" || element.attr("name") == "passengerList[5].Nationality") {
                		    		$("#errors5").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors5");
                		    		}else if (element.attr("name") == "passengerList[6].Title" || element.attr("name") == "passengerList[6].Gender" || element.attr("name") == "passengerList[6].FirstName" || element.attr("name") == "passengerList[6].LastName" || element.attr("name") == "passengerList[6].DobDate" || element.attr("name") == "passengerList[6].DobMonth" || element.attr("name") == "passengerList[6].DobYear" || element.attr("name") == "passengerList[6].Nationality") {
                		    		$("#errors6").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors6");
                		    		}else if (element.attr("name") == "passengerList[7].Title" || element.attr("name") == "passengerList[7].Gender" || element.attr("name") == "passengerList[7].FirstName" || element.attr("name") == "passengerList[7].LastName" || element.attr("name") == "passengerList[7].DobDate" || element.attr("name") == "passengerList[7].DobMonth" || element.attr("name") == "passengerList[7].DobYear" || element.attr("name") == "passengerList[7].Nationality") {
                		    		$("#errors7").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors7");
                		    		}else if (element.attr("name") == "passengerList[8].Title" || element.attr("name") == "passengerList[8].Gender" || element.attr("name") == "passengerList[8].FirstName" || element.attr("name") == "passengerList[8].LastName" || element.attr("name") == "passengerList[8].DobDate" || element.attr("name") == "passengerList[8].DobMonth" || element.attr("name") == "passengerList[8].DobYear" || element.attr("name") == "passengerList[8].Nationality") {
                		    		$("#errors8").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors8");
                		    		}else  
                		        if (element.attr("name") == "payment.expiryMonth" || element.attr("name") == "payment.expiryYear") {
                		         //   error.insertAfter(".dateWrap");
                		        	error.css('float', 'none');
                		        	element.append($('<br />'));
                		        	$("#Experrors").addClass('help-block');
                		        	//error.removeClass("help-block");
                		            error.appendTo("#Experrors");
                		           
                		        }else  if (element.attr("name") == "payment.expiryMonth2" || element.attr("name") == "payment.expiryYear2") {
                		        	
                		        	error.css('float', 'none');
                		        	element.append($('<br />'));
                		        	$("#Experrors2").addClass('help-block');                		        	
                		            error.appendTo("#Experrors2");
                		            
                		        }else if (element.attr("name") == "macp" && $("#bookingGDS").val() != '9') {
                		         //   error.insertAfter(".dateWrap");
                		        	 document.getElementById("tcpid").style.display='block'; 
                		        	$("#tcpid").addClass('help-block');
                		        	//error.removeClass("help-block");
                		            
                		        }else if (element.attr("name") == "TravelGuard") {
                		         //   error.insertAfter(".dateWrap");
                		        	$("#tgpid").addClass('help-block');
                		        //	error.removeClass("help-block");
                		            
                		        }else if (element.attr("name") == "TripMate") {
                		         //   error.insertAfter(".dateWrap");
                		        	  document.getElementById("tmpid").style.display='block'; 
                		        	$("#tmpid").addClass('help-block');
                		        	$("#tmpid").removeClass('tmpid');
                		        //	error.removeClass("help-block");
                		            
                		        }
                		        else if (element.attr("name") == "brb") {
                   		         //   error.insertAfter(".dateWrap");
                		        	document.getElementById("brbError").style.display='block'; 
                   		        	$("#brbError").addClass('help-block');
                   		        //	error.removeClass("help-block");                   		            
                   		            
                   		        }
                		        else if (element.parent('.input-group').length) {                		        	
                		            error.insertAfter(element.parent());
                		        } else error.insertAfter(element);                		       
                		    },
                		    
                		                                
                		    messages: {
                		    	'payment.postalCode': { 
                		    		remote: "Please provide valid Postal Code.",
                		    	},
                		    	'passengerList[0].Title': { 
                  					required: "Please select the Title of the traveler",
                  				},
                		    	'passengerList[0].Gender': { 
                  					required: "Please select the Gender of the traveler",
                  				},
			         		   'passengerList[0].FirstName': { 
			     					required: "Please provide the First name of the traveler",
			     				},
			     				'passengerList[0].LastName': { 
			     					required: "Please provide the Last name of the traveler",
			     				},
			     				'passengerList[1].Title': { 
                  					required: "Please select the Title of the traveler",
                  				},
			     				 'passengerList[1].Gender': { 
			       					required: "Please select the Gender of the traveler",
			       				},
			     				'passengerList[1].FirstName': { 
			     					required: "Please provide the First name of the traveler",
			     				},
			     				'passengerList[1].LastName': { 
			     					required: "Please provide the Last name of the traveler",
			     				},
			     				'passengerList[1].Nationality': { 
                  					required: "Please select the Nationality of the traveler",
                  				},
			     				'passengerList[2].Title': { 
                  					required: "Please select the Title of the traveler",
                  				},
			     				 'passengerList[2].Gender': { 
			       					required: "Please select the Gender of the traveler",
			       				},
			     				'passengerList[2].FirstName': { 
			     					required: "Please provide the First name of the traveler",
			     				},
			     				'passengerList[2].LastName': { 
			     					required: "Please provide the Last name of the traveler",
			     				},
			     				'passengerList[2].Nationality': { 
                  					required: "Please select the Nationality of the traveler",
                  				},
			     				'passengerList[3].Title': { 
                  					required: "Please select the Title of the traveler",
                  				},
			     				 'passengerList[3].Gender': { 
			       					required: "Please select the Gender of the traveler",
			       				},
			     				'passengerList[3].FirstName': { 
			     					required: "Please provide the First name of the traveler",
			     				},
			     				'passengerList[3].LastName': { 
			     					required: "Please provide the Last name of the traveler",
			     				},
			     				'passengerList[3].Nationality': { 
                  					required: "Please select the Nationality of the traveler",
                  				},
			     				'passengerList[4].Title': { 
                  					required: "Please select the Title of the traveler",
                  				},
			     				 'passengerList[4].Gender': { 
			       					required: "Please select the Gender of the traveler",
			       				},
			     				'passengerList[4].FirstName': { 
			     					required: "Please provide the First name of the traveler",
			     				},
			     				'passengerList[4].LastName': { 
			     					required: "Please provide the Last name of the traveler",
			     				},
			     				'passengerList[4].Nationality': { 
                  					required: "Please select the Nationality of the traveler",
                  				},
			     				'passengerList[5].Title': { 
                  					required: "Please select the Title of the traveler",
                  				},
			     				 'passengerList[5].Gender': { 
			       					required: "Please select the Gender of the traveler",
			       				},
			     				'passengerList[5].FirstName': { 
			     					required: "Please provide the First name of the traveler",
			     				},
			     				'passengerList[5].LastName': { 
			     					required: "Please provide the Last name of the traveler",
			     				},
			     				'passengerList[5].Nationality': { 
                  					required: "Please select the Nationality of the traveler",
                  				},
			     				'passengerList[6].Title': { 
                  					required: "Please select the Title of the traveler",
                  				},
			     				 'passengerList[6].Gender': { 
			       					required: "Please select the Gender of the traveler",
			       				},
			     				'passengerList[6].FirstName': { 
			     					required: "Please provide the First name of the traveler",
			     				},
			     				'passengerList[6].LastName': { 
			     					required: "Please provide the Last name of the traveler",
			     				},
			     				'passengerList[6].Nationality': { 
                  					required: "Please select the Nationality of the traveler",
                  				},
			     				'passengerList[7].Title': { 
                  					required: "Please select the Title of the traveler",
                  				},
			     				 'passengerList[7].Gender': { 
			       					required: "Please select the Gender of the traveler",
			       				},
			     				'passengerList[7].FirstName': { 
			     					required: "Please provide the First name of the traveler",
			     				},
			     				'passengerList[7].LastName': { 
			     					required: "Please provide the Last name of the traveler",
			     				},
			     				'passengerList[7].Nationality': { 
                  					required: "Please select the Nationality of the traveler",
                  				},
			     				'passengerList[8].Title': { 
                  					required: "Please select the Title of the traveler",
                  				},
			     				 'passengerList[8].Gender': { 
			       					required: "Please select the Gender of the traveler",
			       				},
			     				'passengerList[8].FirstName': { 
			     					required: "Please provide the First name of the traveler",
			     				},
			     				'passengerList[8].LastName': { 
			     					required: "Please provide the Last name of the traveler",
			     				},
			     				'passengerList[8].Nationality': {
                  					required: "Please select the Nationality of the traveler",
                  				},
			                    'payment.maskcardNumber': {
			     					required: "Please provide credit or debit card number",
			     					minlength: "Please provide valid credit or debit card number",
			     					maxlength: "Please provide valid credit or debit card number"
			     				},
			     				  'payment.cardNumber': {
			       					//required: "Please provide credit or debit card number",
			       					minlength: "Please provide valid credit or debit card number",
			       					maxlength: "Please provide valid credit or debit card number"
			       				},
			       				'payment.maskCardNumber': {
			       					required: "Please provide credit or debit card number",
			       					minlength: "Please provide valid credit or debit card number",
			       					maxlength: "Please provide valid credit or debit card number"
			       				},
			     				'payment.cardHolderName': { 
			     					required: "Please provide Card Holder Name",
			     				},
			     				'payment.cvvNo': {
			        				required: "Please provide card verification number",
			        				ccvnumeric: "Please provide a valid card verification number",
			        				minlength : "Please provide a valid card verification number",
			          				maxlength: "Please provide a valid card verification number",
			        			},
			        			'payment.amountToCharge' :{
			        				required: "Please provide valid amount for charge",
			        			},'payment.amountToCharge2' :{
			        				required: "Please provide valid amount for charge",
			        			},
			        			'payment.cvvNo2': {
			        				required: "Please provide card verification number",
			        				ccvnumeric: "Please provide a valid card verification number",
			        				minlength : "Please provide a valid card verification number",
			          				maxlength: "Please provide a valid card verification number",
			        			},
			     	            'payment.country': {
			     					required: "Please provide a billing country",
			     				},
			     				'payment.address1': {
			     				required: "Please provide a billing address",
			     				},
			     				'payment.address2': {
				     				required: "Please provide a billing address",
				     				},
			     				'payment.city': {
			     				required: "Please provide a billing city",
			     				},
			     				'payment.state': {
			     				required: "Please select your billing State",
			     				},
			     				'payment.postalCode': {
			     				required: "Please provide billing zip (postal code)",
			     				},
			     				'contact.billingPhone': {
			     				required: "Please provide a valid billing phone",
			     				},'contact.mobile': {
			     				required: "Please provide a valid mobile phone",
			     				},
			     				'contact.email': {
			     				required: "Please provide a valid email address",
			     				},
			     				'contact.intcode': {
			         				required: "Please provide a valid international Code",
			         			},			         			
			         			'contact.areacode': {
			         				required: "Please provide a valid area Code",
			         			},
			     				'contact.email1': {
		         				required: "Please provide a valid email address",
		         				},
     				
                		    },
                submitHandler: function(form) {
                	popup('divProgressbar', 30, 30);
                	  
                	  var rndId=document.getElementById("finalId").value;
                	    var randId=document.getElementById("randamId").value;
                	    if(randId=="x123456"){
                	    document.getElementById("randamId").value=rndId;
                	    document.getElementById("randamIds").value="x123456";
                	    randId=rndId;
                	    }
                       $('#target').html2canvas({
                			onrendered: function (canvas) {
                	            //Set hidden field's value to image data (base-64 string)
                				$('#img_val').val(canvas.toDataURL("image/png", 0.9));
                				if(rndId == randId){
                         	    	////console.log("booking Start");
                         	    	 form.submit();
                         	    	
                         	    }else{
                         	    	////console.log("booking again Start");
                         	    	return false;
                         	    }
                			}
                		});
                        
                        
                	    
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
    	    	 
    	$.validator.setDefaults({ ignore: '' });
    	$.validator.messages.required = '';
    	 $.validator.addMethod("email", function(value, element) {  
    		    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);  
    		    }, "Please provide a valid email address");
    	 
    	 jQuery.validator.addMethod("notEqual", function (value, element, param) { 
    		    return this.optional(element) || value != '0.00';
    		}, "Please provide valid amount for charge");
    	 
    	 jQuery.validator.addMethod("notEquals", function (value, element, param) { 
 		    return this.optional(element) || value != '0';
 		}, "Please provide valid amount for charge");
 	 
    	 
        $.validator.addMethod("alphanumeric", function(value, element) {
        	if(value.length>0){
      	        return this.optional(element) || /^\w+$/i.test(value);
        	}else{
        		return false;
        	}
      	}, "Please provide Letters, numbers, and underscores only");
       
             $.validator.addMethod("emailEq", function(value, element) 
        		{
            	 //console.log($("#contact_email").val());
            	 var email1=$("#contact_email").val().toLowerCase();
             	var email2=value.toLowerCase();
        	    if(email1 != email2){
	                return false;
	            }
	            else{
	                return true;
	            } }, "Entered email addresses - do not match.");
	            
        $.validator.addMethod("lettersonly", function(value, element) 
      		  {
        	if(value.length>0){
      		    return this.optional(element) || /^[a-z ]+$/i.test(value);
        	}else{
        		return false;
        	}
      	}, "Please provide Letters and spaces only");   
        
        $.validator.addMethod("address1Eq", function(value, element) 
                {
              	var add2= $(".address2").val();
              	var add1= value;
              	
              	add1 = add1.replace(/\s/g,'');
              	add2 = add2.replace(/\s/g,''); 
              	
              	add1=add1.toLowerCase();
            	add2=add2.toLowerCase();
              	        	
                  /*console.log("add1 "+add1);
                  console.log("add2 "+add2);*/
          	   
              	if(add1 == add2){
          		    return false;
          		}
          		else{
          		    return true;
          		}
                }, "House Number and Street cannot be the same.");
      
        $.validator.addMethod("ccvnumeric", function(value, element) {
        	if(value.length>0){
      	        return this.optional(element) || /^[-+]?\d*\.?\d*$/.test(value);
        	}else{
        		return false;
        	}
      	}, "Please provide only numbers into card verification number");
   
        $.validator.addMethod("amountnumeric", function(value, element) {
        	if(value.length>0){
      	        return this.optional(element) || /^[-+]?\d*\.?\d*$/.test(value);
        	}else{
        		return false;
        	}
      	}, "Please provide valid amount");
        
        $.validator.addMethod("ccvnumeric2", function(value, element) {
        	
        	if(card2Required){
        	if(value.length>0){
      	        return this.optional(element) || /^[-+]?\d*\.?\d*$/.test(value);
        	}else{
        		return false;
        	}
        	}else{return true;}
      	}, "Please provide only numbers into card verification number");
   
        
        jQuery.validator.addMethod('CCExp', function(value, element, params) {
            var minMonth = new Date().getMonth() + 1;
            var minYear = new Date().getFullYear();
            var month = parseInt($(params.month).val(), 10);
            var year = parseInt($(params.year).val(), 10);
            return (year > minYear || (year === minYear && month >= minMonth));
      }, 'Your Credit Card Expiration date is invalid.');
        
        
        jQuery.validator.addMethod('CCExp2', function(value, element, params) {
        	if(card2Required){
            var minMonth = new Date().getMonth() + 1;
            var minYear = new Date().getFullYear();
            var month = parseInt($(params.month).val(), 10);
            var year = parseInt($(params.year).val(), 10);
            return (year > minYear || (year === minYear && month >= minMonth));
        	}else{
        		return true;
        	}
      }, 'Your Credit Card Expiration date is invalid.');
        
        
    	$("#Payments_ExpiryMonth").change(function () {
     		 if($("#Payments_ExpiryYear").val() != "Year"){
     		$("#booking").validate().element("#Payments_ExpiryYear");
     		 }
     	
         })
        jQuery.validator.addMethod("age_val", function(value, element, param) {
        	
        	
        	var Age=$("#passengerType"+param+"").val();
        	var agevalidate="1";
        	if(param == 0){
        		agevalidate="0";
        	}
        	var html="Age of Adult, should be greater than or equal to 12yrs at the time of travel.";
        	
        	if(Age == 'Adult'){
        		html="Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please call us at 1-888 509-5589.";
        		if(param == 0){
        			html="Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please call us at 1-888 509-5589.";
            		
            		
            	}else{
            		html="Age of Adult, should be greater than or equal to 12yrs at the time of travel.";
            	}
        	}else if(Age == 'Child'){
        		html="Age of Child, should be less than 12yrs and greater than or equal to 2yrs at the time of travel.";
        	}else if(Age == 'Infant'){
        		html=" Infant (on lap) should be under 2 years for the entire trip. Please search again with the child option in modify search.";
        	}else if(Age == 'InfantWs'){
        		html=" Infant (on seat) should be under 2 years for the entire trip. Please search again with the child option in modify search.";
        	}
        	
        	value=$("#paxdoy"+param+"").val();
        
        	
        	
        	   $("#error-message"+param+"").html("").removeClass("show").addClass("hide");
        	if (!isValidDate(value, $("#paxdom"+param+"").val(), $("#paxdob"+param+"").val())) {
                // make sure the date is valid
                $("#error-message"+param+"").html("Please provide Valid Day of Date Of Birth.").removeClass("hide").addClass("show");
                return false;
              } else if (!isOfAge(value, $("#paxdom"+param+"").val(), $("#paxdob"+param+"").val(), Age,agevalidate)) {
                // the person is too young
                $("#error-message"+param+"").html(html).removeClass("hide").addClass("show");
                 return false;
              } else {
            	
            	  return true;
              }
        	
            return this.optional( element ) || value >= param;
        }, ""); 
        
        
        $.validator.addMethod('zipval', function (value, element) {
          
        
       
        	if($("#Payments_Country").val() != "0"){
        		if($("#Payments_Country").val() == "GB"){
        			//return true;
					return postalUKFilter(value);
        		}else if($("#Payments_Country").val() == "US"){
		        	var numericReg = Zipmap($("#Payments_Country").val());
		        	
		        	var usan = new RegExp(numericReg);
		        	
		        	return this.optional(element) || usan.test(value);
        		 }else if($("#Payments_Country").val() == "CA"){
        			return postalFilter(value);
        	        }
        		 else {
        			 return postalFilterOther(value);
        		 }
        }else{
        	return true;
        }
        	
        }, 'Please provide billing zip (postal code)');
        
      /*  $.validator.addMethod(
                "zipval",
                function(value, element, regexp) {
                    var re = new RegExp(regexp);
                    return this.optional(element) || re.test(value);
                },
                "Please check your input."
        );*/
        
        
        $.validator.addMethod('requiredTextvalue', function (value) {
            return (value.trim() != '');
       }, "");
        
        $.validator.addMethod('requiredvalue', function (value) {
               return (value != '0.0');
          }, "");
        $.validator.addMethod('ccMaskCheckvalue', function (value) {
        	//var values=$("#Payments_CardNumber").val();
        	 if(value.indexOf('************') >= 0 && $("#Payments_CardNumber").val() != ""){
        		 return true;
        	 }
        	if(value.length>12){
        	//console.log("CC Mask value;"+cc_brand_id(value,$("#payment-card").val()));
        	return cc_brand_id(value,$("#payment-card").val());
        	}else{return true;}
         //   return (value != '0.0');
         }, "Please provide valid credit or debit card number");
        
          $.validator.addMethod('ccMaskCheckvalue2', function (value) {
        	  if(card2Required){
        
        	 if(value.indexOf('************') >= 0){
        		 return true;
        	 }
        	if(value.length>12){
        
        	return cc_brand_id(value,$("#payment-card2").val());
        	}else{return true;}
        	  }else{
        		  return true;
        	  }
         //   return (value != '0.0');
         }, "Please provide valid second credit or debit card number");
          
          
          
          $.validator.addMethod('ccmasksamevalue', function (value) {
        	  if(card2Required){
        	  var value = jQuery("#Payments_CardNumber").val();
        	  var value2 = jQuery("#Payments_CardNumber2").val();
        	  
        	  var card_number = jQuery("#Payments_MaskCardNumber").val();
        	  var card_number2 = jQuery("#Payments_MaskCardNumber2").val();
        	  
        	  if(card_number.indexOf('************') >= 0 && card_number2.indexOf('************') >= 0){
        		  
        	  
        	  if(value != "" && value2 != ""){
          	if(value == value2){
          		return false;
          	}else{return true;}
        	  }else{return true;}
        	  }else{return true;}
        	  }else{return true;}
           //   return (value != '0.0');
           }, "Please provide different second credit or debit card number");
            
        $.validator.addMethod('ccCheckvalue', function (value) {
        	var values=$("#Payments_CardNumber").val();
        	if(values.length>12){
        	//console.log("CC value;"+cc_brand_id(values,$("#payment-card").val()));
        		if(cc_brand_id(values,$("#payment-card").val())){
        			return true;
        		}else{
        			jQuery("#Payments_MaskCardNumber").val("");
        			return false;
        		}
        	//return cc_brand_id(values,$("#payment-card").val());
        	}else{return true;}
         //   return (value != '0.0');
         }, "Please provide valid credit or debit card number");
        
        
        $.validator.addMethod('cccardvalue', function (value) {
        	if($("#Payments_CardNumber").val().length>12){
        	//console.log("CC value;"+cc_brand_id($("#Payments_CardNumber").val(),value));
        	return cc_brand_id($("#Payments_CardNumber").val(),value);
        	}else{return true;}
         //   return (value != '0.0');
         }, "Please provide valid credit or debit card number");
      	$.validator.addMethod('titlereq', function (value) {
              return (value != '');
          }, "Please select the Title of the traveler");
      	
      	$.validator.addMethod('genderreq', function (value) {
            return (value != '0');
        }, "Please select the Gender of the traveler");
      	
        $.validator.addMethod('selectcard', function (value) {
              return (value != 'Select a Card');
          }, "Please provide your payment method");
		   $.validator.addMethod('selectcard2', function (value) {
			   if(card2Required){
            return (value != 'Select a Card');
			   }else{
				   return true;
			   }
        }, "Please provide your payment method");
		   $.validator.addMethod('required2', function (value) {
			   
			   if(card2Required){
            return (value != '');
			   }else{
				   return true;
			   }
        }, "");
       $.validator.addMethod('cvvrequired2', function (value) {
			   
			   if(card2Required){
            return (value != '');
			   }else{
				   return true;
			   }
        }, "Please provide card verification number");
		   
         $.validator.addMethod('selectExpMonth', function (value) {
              return (value != '0');
          }, "Please select card expiration month");
		 $.validator.addMethod('selectExpMonth2', function (value) {
             return (value != '0');
         }, "Please select card expiration month");
         $.validator.addMethod('selectExpYear', function (value) {
              return (value != 'Year');
          }, "Please select card expiration year");
		   $.validator.addMethod('selectExpYear2', function (value) {
             return (value != 'Year');
         }, "Please select card expiration year");
         $.validator.addMethod('selectdate', function (value) {
              return (value != 'Day');
          }, "Please select  the day of Date of Birth of the traveler");
          $.validator.addMethod('selectmonth', function (value) {
              return (value != '0');
          }, "Please select the Month of Birth of the traveler");
          $.validator.addMethod('selectyear', function (value) {
              return (value != 'Year');
          }, "Please select the Year of Birth of the traveler ");
          $.validator.addMethod('selectstate', function (value) {
        	  if($("#Payments_Country").val() == "US"){
              return (value != '0');
        	  }else  if($("#Payments_Country").val() == "CA"){
              return (value != '0');
        	  }else{
        		  return true;
        	  }
          }, "Please select your billing State");
          $.validator.addMethod('selectcountry', function (value) {
              return (value != '0');
          }, "Please select your billing Country");
          JQUERY4U.UTIL.setupFormValidation();
    });
  


    
})(jQuery, window, document);
      
jQuery("#Payments_MaskCardNumber").focus(function(e){
    var value=jQuery("#Payments_MaskCardNumber").val();
    if(value.indexOf('*') >= 0)
	jQuery("#Payments_MaskCardNumber").val("");
});
jQuery("#Payments_MaskCardNumber2").focus(function(e){
	if(card2Required){
    var value=jQuery("#Payments_MaskCardNumber2").val();
    if(value.indexOf('*') >= 0)
	jQuery("#Payments_MaskCardNumber2").val("");
	}
});


jQuery("#Payments_MaskCardNumber").focusout(function(e){

	var card_number = jQuery(this).val();
	 if(card_number.indexOf('************') >= 0){
		 return true;
	 }

	//console.log("card_number 1:"+card_number);
	if(card_number == ""){
		card_number=jQuery("#Payments_CardNumber").val();
		jQuery("#Payments_MaskCardNumber").val(card_number);
	}
	
	if(card_number != ""){
	var conds=$("#booking").validate().element("#Payments_MaskCardNumber");
	//console.log("cond 1:"+conds);
	if(conds){
		jQuery("#Payments_CardNumber").val(card_number);
	if(jQuery("#Payments_CardNumber").val() != ""){
		$("#booking").validate().element("#Payments_CardNumber");
		$("#booking").validate().element("#Payments_MaskCardNumber");
		var cond=$("#booking").validate().element("#Payments_MaskCardNumber");
		//console.log("cond:"+cond);
		if(cond){
	 var new_card_number = "************";
	 for(var loop2=12; loop2 < card_number.length; loop2++)
     {
         new_card_number = new_card_number+card_number.charAt(loop2);
     }
	 //jQuery("#Payments_MaskCardNumber").val(new_card_number);
		}
}
	}
	}
}).blur(function(){
	var card_number = jQuery(this).val();
	 if(card_number.indexOf('************') >= 0){
		 return true;
	 }
	// console.log("cond IE");
	//console.log("card_number 1:"+card_number);
	if(card_number == ""){
		card_number=jQuery("#Payments_CardNumber").val();
		jQuery("#Payments_MaskCardNumber").val(card_number);
	}
	
	if(card_number != ""){
	var conds=$("#booking").validate().element("#Payments_MaskCardNumber");
	//console.log("cond 1:"+conds);
	if(conds){
		jQuery("#Payments_CardNumber").val(card_number);
	if(jQuery("#Payments_CardNumber").val() != ""){
		$("#booking").validate().element("#Payments_CardNumber");
		$("#booking").validate().element("#Payments_MaskCardNumber");
		var cond=$("#booking").validate().element("#Payments_MaskCardNumber");
		//console.log("cond:"+cond);
		if(cond){
	 var new_card_number = "************";
	 for(var loop2=12; loop2 < card_number.length; loop2++)
     {
         new_card_number = new_card_number+card_number.charAt(loop2);
     }
	 jQuery("#Payments_MaskCardNumber").val(new_card_number);
		}
}
	}
	}

	 
	});

jQuery("#Payments_MaskCardNumber2").focusout(function(e){
	

	var card_number = jQuery(this).val();
	var card_number2=jQuery("#Payments_CardNumber2").val();
	
	 if(card_number.indexOf('************') >= 0){
		 return true;
	 }


	if(card_number == ""){
		card_number=jQuery("#Payments_CardNumber2").val();
		jQuery("#Payments_MaskCardNumber2").val(card_number);
	}
	
	if(card_number != ""){
	var conds=$("#booking").validate().element("#Payments_MaskCardNumber2");
	
	if(conds){
		jQuery("#Payments_CardNumber2").val(card_number);
	if(jQuery("#Payments_CardNumber2").val() != ""){
		$("#booking").validate().element("#Payments_CardNumber2");
		$("#booking").validate().element("#Payments_MaskCardNumber2");
		var cond=$("#booking").validate().element("#Payments_MaskCardNumber2");
		//console.log("cond:"+cond);
		if(cond){
	 var new_card_number = "************";
	 for(var loop2=12; loop2 < card_number.length; loop2++)
     {
         new_card_number = new_card_number+card_number.charAt(loop2);
     }
	 jQuery("#Payments_MaskCardNumber2").val(new_card_number);
		}
}
	}
	}

}).blur(function(){

	var card_number = jQuery(this).val();
	 if(card_number.indexOf('************') >= 0){
		 return true;
	 }
	
	if(card_number == ""){
		card_number=jQuery("#Payments_CardNumber2").val();
		jQuery("#Payments_MaskCardNumber2").val(card_number);
	}
	
	if(card_number != ""){
	var conds=$("#booking").validate().element("#Payments_MaskCardNumber2");

	if(conds){
		jQuery("#Payments_CardNumber2").val(card_number);
	if(jQuery("#Payments_CardNumber2").val() != ""){
		$("#booking").validate().element("#Payments_CardNumber2");
		$("#booking").validate().element("#Payments_MaskCardNumber2");
		var cond=$("#booking").validate().element("#Payments_MaskCardNumber2");
		//console.log("cond:"+cond);
		if(cond){
	 var new_card_number = "************";
	 for(var loop2=12; loop2 < card_number.length; loop2++)
     {
         new_card_number = new_card_number+card_number.charAt(loop2);
     }
	 jQuery("#Payments_MaskCardNumber2").val(new_card_number);
		}
}
	}
	}


	});


function agecheck(xx){
	if(xx.id != 'paxdob0'){
		//console.log(xx.id);
		var lastChar = xx.id.substr(xx.id.length - 1);
		var paxId='passengerType'+lastChar;
		//console.log($('#'+paxId).val());
		var ages=2;
		if($('#'+paxId).val() == 'Child'){
			ages=12;
		}else if($('#'+paxId).val() == 'Infant'){
			ages=2;
		}
		if($('#'+paxId).val() != 'Adult'){
			if(isOfAge($("#paxdoy"+lastChar+"").val(), $("#paxdom"+lastChar+"").val(), $("#paxdob"+lastChar+"").val(), $('#'+paxId).val(),1)){
			//console.log(isOfAgeW($("#paxdoy"+lastChar+"").val(), $("#paxdom"+lastChar+"").val(), $("#paxdob"+lastChar+"").val(), $('#'+paxId).val(),1));
			if(isOfAgeW($("#paxdoy"+lastChar+"").val(), $("#paxdom"+lastChar+"").val(), $("#paxdob"+lastChar+"").val(), $('#'+paxId).val(),1)){
	        	   $("#warn-message"+lastChar+"").html("").removeClass("show").addClass("hide");
			}else{
				$("#warn-message"+lastChar+"").html("The Price may differ for "+$('#'+paxId).val()+" turning "+ages+" year enroute.").removeClass("hide").addClass("show");
			}
			}else{
				  $("#warn-message"+lastChar+"").html("").removeClass("show").addClass("hide");
			}
		}
	}
	
}
function isOfAgeW(year, month, day, type,agevalidate) {
	//console.log("year No:"+year);
	//console.log("age No:"+age);
	
	var age=18;
	var nextage=150;
	if(type == 'Adult'){
		
		age=12;
       if(agevalidate == 0){
    	   age=18;
		}
		nextage=150;
	}else if(type == 'Child'){
		age=2;
		nextage=12;
	}else if(type == 'Infant'){
		age=0;
		nextage=2;
	}else if(type == 'InfantWs'){
		age=0;
		nextage=2;
	}
	
	
	 var mydates=document.getElementById("rageDate").value;
	 var res = mydates.split("-");
	  var mydate = new Date();
	  mydate.setFullYear(year, month-1, day);
	  //08-04-2017
	  var currdate = new Date(res[2],res[0]-1,res[1]);
	 
	  currdate.setFullYear(currdate.getFullYear() - age);
	  var nextdate = new Date(mydates);
	  nextdate.setFullYear(nextdate.getFullYear() - nextage);
	
	  if ((mydate - nextdate) < 0){
		    return false;
		  }
	  if ((currdate - mydate) < 0){
	    return false;
	  }
	  var spdate = new Date();
	  var sdd = spdate.getDate();
	  var smm = spdate.getMonth();
	  var syyyy = spdate.getFullYear();
	  var today = new Date(syyyy,smm,sdd).getTime();
	//  console.log("currdate - newdate:"+(mydate > today));
	  if(mydate > today)
	  {
	    // alert("Date is not valid");
	     return false;
	  }
	  
	  return true;
	}

function isOfAge(year, month, day, type,agevalidate) {
	//console.log("year No:"+year);
	//console.log("age No:"+age);
	
	var age=18;
	var nextage=150;
	if(type == 'Adult'){
		
		age=12;
       if(agevalidate == 0){
    	   age=18;
		}
		nextage=150;
	}else if(type == 'Child'){
		age=2;
		nextage=12;
	}else if(type == 'Infant'){
		age=0;
		nextage=2;
	}else if(type == 'InfantWs'){
		age=0;
		nextage=2;
	}
	
	
	 var mydates=document.getElementById("ageDate").value;
	 var res = mydates.split("-");
	  var mydate = new Date();
	  mydate.setFullYear(year, month-1, day);
	  //08-04-2017
	  var currdate = new Date(res[2],res[0]-1,res[1]);
	 
	  currdate.setFullYear(currdate.getFullYear() - age);
	  var nextdate = new Date(mydates);
	  nextdate.setFullYear(nextdate.getFullYear() - nextage);
	
	  if ((mydate - nextdate) < 0){
		    return false;
		  }
	  if ((currdate - mydate) < 0){
	    return false;
	  }
	  var spdate = new Date();
	  var sdd = spdate.getDate();
	  var smm = spdate.getMonth();
	  var syyyy = spdate.getFullYear();
	  var today = new Date(syyyy,smm,sdd).getTime();
	//  console.log("currdate - newdate:"+(mydate > today));
	  if(mydate > today)
	  {
	    // alert("Date is not valid");
	     return false;
	  }
	  
	  return true;
	}
function isValidDate(year, month, day) {

	  // Create list of days of a month [assume there is no leap year by default]
	  var listofDays = [31,28,31,30,31,30,31,31,30,31,30,31];

	  if (month == 1  || month > 2) {

	    if (day > listofDays[month - 1]) {
	      // invalid date
	      return false;
	    }

	  }

	  if (month == 2) {

	    var lyear = false;

	    if ((!(year % 4) && year % 100) || !(year % 400)) {
	      lyear = true;
	    }

	    if ((lyear == false) && (day >= 29)) {
	      // invalid date (February - non-leap year)
	      return false;
	    }
	  
	    if ((lyear == true) && (day > 29)) {
	      // invalid date (February - leap year)
	      return false;
	    }
	  }

	  return true;
	}

function replaceSubstring(inSource, inToReplace, inReplaceWith) {

var outString = inSource;
while (true) {
var idx = outString.indexOf(inToReplace);
if (idx == -1) {
  break;
}
outString = outString.substring(0, idx) + inReplaceWith +
  outString.substring(idx + inToReplace.length);
}
return outString;

}

function getcardValue(sel,event){
	$('.spnCardImg>span').removeClass("card-border");
	$('.spnCardImg>span[title="'+sel.value+'"]').addClass('card-border');
}
function getcardValue2(sel,event){
	$('.spnCardImg2>span').removeClass("card-border");
	$('.spnCardImg2>span[title="'+sel.value+'"]').addClass('card-border');
}



function setccValue2(id,event) {
    
    //  $timeout(function() {
	//console.log(event.target);
	$target = $(event.target);   
	 $target.siblings().removeClass("card-border");
    $target.addClass('card-border');
	if(id=="American Express"){
		   var src = "/resources/images/ccv-img2.gif";
           $("#ccvimg2").attr("src", src);
           $("#tooltip2").html("<a  class=\"text_link\">4 Digit Number From Your Card <span></span> </a>");
	}else if(id=="Master Card"){
		   var src = "/resources/images/ccv-img.gif";
           $("#ccvimg2").attr("src", src);
           $("#tooltip2").html("<a class=\"text_link\">3/4 Digit Number From Your Card <span></span> </a>");
	}else{
		   var src = "/resources/images/ccv-img.gif";
           $("#ccvimg2").attr("src", src);
           $("#tooltip2").html("<a class=\"text_link\">3 Digit Number From Your Card<span> </span> </a>");
	}
	
	
	   
	      $("#payment-card2").val(id);
	   
   	var card_number = jQuery("#Payments_CardNumber2").val();
   	if(card_number == ""){
   		card_number = jQuery("#Payments_MaskCardNumber2").val();
   	}
   	
   	if(card_number != ""){
   		jQuery("#Payments_CardNumber2").val("");
   		jQuery("#Payments_MaskCardNumber2").val(card_number);
   	var conds=$("#booking").validate().element("#Payments_MaskCardNumber2");
   	if(conds){
   		jQuery("#Payments_CardNumber2").val(card_number);

   	 var new_card_number = "************";
   	 for(var loop2=12; loop2 < card_number.length; loop2++)
   	 {
   	     new_card_number = new_card_number+card_number.charAt(loop2);
   	 }
   	 jQuery("#Payments_MaskCardNumber2").val(new_card_number);
   	}
   	}

		 if($("#Payments_CvvNo2").val().length > 0){
    		$("#booking").validate().element("#Payments_CvvNo2");
    		 }
		 
		 
	      $("#booking").validate().element("#payment-card2");
    /*	  if($("#Payments_CardNumber").val().length > 0){
        		$("#booking").validate().element("#Payments_CardNumber");
        		 }
    	  if($("#Payments_MaskCardNumber").val().length > 0){
      		$("#booking").validate().element("#Payments_CardNumber");
      		 }*/		 
		 if($("#Payments_CvvNo2").val().length > 0){
     		$("#booking").validate().element("#Payments_CvvNo2");
     	 }
		 $("#booking").validate().element("#Payments_MaskCardNumber2");
 //     });
    };
function setccValue(id,event) {
    
    //  $timeout(function() {
	
	$target = $(event.target);   
	 $target.siblings().removeClass("card-border");
    $target.addClass('card-border');
	if(id=="American Express"){
		   var src = "/resources/images/ccv-img2.gif";
           $("#ccvimg").attr("src", src);
           $("#tooltip").html("<a class=\"text_link\">4 Digit Number From Your Card <span></span> </a>");
	}else if(id=="Master Card"){
		   var src = "/resources/images/ccv-img.gif";
           $("#ccvimg").attr("src", src);
           $("#tooltip").html("<a class=\"text_link\">3/4 Digit Number From Your Card <span></span> </a>");
	}else{
		   var src = "/resources/images/ccv-img.gif";
           $("#ccvimg").attr("src", src);
           $("#tooltip").html("<a class=\"text_link\">3 Digit Number From Your Card<span> </span> </a>");
	}
	
	
	   
	      $("#payment-card").val(id);
	   
   	var card_number = jQuery("#Payments_CardNumber").val();
   	if(card_number == ""){
   		card_number = jQuery("#Payments_MaskCardNumber").val();
   	}
   	
   	if(card_number != ""){
   		jQuery("#Payments_CardNumber").val("");
   		jQuery("#Payments_MaskCardNumber").val(card_number);
   	var conds=$("#booking").validate().element("#Payments_MaskCardNumber");
   	if(conds){
   		jQuery("#Payments_CardNumber").val(card_number);

   	 var new_card_number = "************";
   	 for(var loop2=12; loop2 < card_number.length; loop2++)
   	 {
   	     new_card_number = new_card_number+card_number.charAt(loop2);
   	 }
   	 jQuery("#Payments_MaskCardNumber").val(new_card_number);
   	}
   	}

		 if($("#Payments_CvvNo").val().length > 0){
    		$("#booking").validate().element("#Payments_CvvNo");
    		 }
		 
		 
	      $("#booking").validate().element("#payment-card");
    /*	  if($("#Payments_CardNumber").val().length > 0){
        		$("#booking").validate().element("#Payments_CardNumber");
        		 }
    	  if($("#Payments_MaskCardNumber").val().length > 0){
      		$("#booking").validate().element("#Payments_CardNumber");
      		 }*/		 
		 if($("#Payments_CvvNo").val().length > 0){
     		$("#booking").validate().element("#Payments_CvvNo");
     	 }
 //     });
		 if(card2Required){
		$("#booking").validate().element("#Payments_MaskCardNumber");
		 }
    };
    function cleaner(arr, id) {
    	
        for (var i = 0; i < arr.length; i++) {
            var cur = arr[i];
          //  console.log(cur);
            if (cur.name == 'payment.cardCode' || cur.name == 'payment.maskCardNumber' || cur.name == 'payment.cardNumber' || cur.name == 'payment.cardHolderName' || cur.name == 'payment.cvvNo' || cur.name == 'payment.expiryMonth' || cur.name == 'payment.expiryYear') {
            
            	arr.splice(i, 1);
            	i--;
            }
           
          
        }
    }

    var putThousandsSeparators;

    putThousandsSeparators = function(value, sep) {
      if (sep == null) {
        sep = ',';
      }
      // check if it needs formatting
      if (value.toString() === value.toLocaleString()) {
        // split decimals
        var parts = value.toString().split('.')
        // format whole numbers
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep);
        // put them back together
        value = parts[1] ? parts.join('.') : parts[0];
      } else {
        value = value.toLocaleString();
      }
      return value;
    };
    
   
function submitForm(){
	var frm = $('form#booking');


	 key=false;
	 var rndId = randomString(12);
	 document.getElementById("finalId").value=rndId;
	 
      $('form#booking').attr({action: '/us/flightbook/'+rndId});    
      $('form#booking').submit();
     
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
	
	$('#macpNo').attr('checked', false);
	
    //$(window).scroll(sticky_relocate);
   // sticky_relocate();
	//macpSet('macp','Y');
    
	 $( "#contact_email,#contact_email1,#contact_billingPhone,#contact_mobile,#Payments_MaskCardNumber,#Payments_MaskCardNumber2" ).on( "copy cut paste drop", function() {
         return false;
 });
});   


function postalUKFilter (postalCode) {

    if (! postalCode) {
        return null;
    }

    postalCode = postalCode.toString().trim();

    var ca = new RegExp(/[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}/i);

    if (ca.test(postalCode.toString().replace(/\W+/g, ''))) {
        return true;
    }
    return null;
}

function postalFilterOther (postalCode) {
	
	if (! postalCode) {
        return null;
    }
	
	var regex = /^[A-Za-z0-9 ]+$/
		 
    //Validate TextBox value against the Regex.
	postalCode = postalCode.toString().trim();
    var isValid = regex.test(postalCode);
    if (isValid) {
    	console.log("Does not contain Special Characters.");
    	return true;
    }

    return null;
}
function postalFilter (postalCode) {

    if (! postalCode) {
        return null;
    }

    postalCode = postalCode.toString().trim();

    var us = new RegExp("^\\d{5}(-{0,1}\\d{4})?$");
    var ca = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i);

  /*  if (us.test(postalCode.toString())) {
        return postalCode;
    }*/

    if (ca.test(postalCode.toString().replace(/\W+/g, ''))) {
        return true;
    }
    return null;
}
function Zipmap(val){
    var Zipmapss = {
			"AD":"^(?:AD)*(\\d{3})$",
    		"AM":"^(\\d{6})$",
    		"AR":"^([A-Z]\\d{4}[A-Z]{3})$",
    		"AT":"^(\\d{4})$",
    		"AU":"^(\\d{4})$",
    		"AX":"^(?:FI)*(\\d{5})$",
    		"AZ":"^(?:AZ)*(\\d{4})$",
    		"BA":"^(\\d{5})$",
    		"BB":"^(?:BB)*(\\d{5})$",
    		"BD":"^(\\d{4})$",
    		"BE":"^(\\d{4})$",
    		"BG":"^(\\d{4})$",
    		"BH":"^(\\d{3}\\d?)$",
    		"BM":"^([A-Z]{2}\\d{2})$",
    		"BN":"^([A-Z]{2}\\d{4})$",
    		"BR":"^(\\d{8})$",
    		"BY":"^(\\d{6})$",
    		/*"CA":"^([ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ]) ?(\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)$",*/
    		//"CA":"^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$",
    		//"CA":"^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\d{1}[A-Za-z]{1} *\d{1}[A-Za-z]{1}\d{1}$",
    		"CA":"^/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i",
    		//"CA":"^((\\d{5}-\\d{4})|(\\d{5})|([A-Z]\\d[A-Z]\\s\\d[A-Z]\\d))$",
    		"CH":"^(\\d{4})$",
    		"CL":"^(\\d{7})$",
    		"CN":"^(\\d{6})$",
    		"CR":"^(\\d{4})$",
    		"CU":"^(?:CP)*(\\d{5})$",
    		"CV":"^(\\d{4})$",
    		"CX":"^(\\d{4})$",
    		"CY":"^(\\d{4})$",
    		"CZ":"^(\\d{5})$",
    		"DE":"^(\\d{5})$",
    		"DK":"^(\\d{4})$",
    		"DO":"^(\\d{5})$",
    		"DZ":"^(\\d{5})$",
    		"EC":"^([a-zA-Z]\\d{4}[a-zA-Z])$",
    		"EE":"^(\\d{5})$",
    		"EG":"^(\\d{5})$",
    		"ES":"^(\\d{5})$",
    		"ET":"^(\\d{4})$",
    		"FI":"^(?:FI)*(\\d{5})$",
    		"FM":"^(\\d{5})$",
    		"FO":"^(?:FO)*(\\d{3})$",
    		"FR":"^(\\d{5})$",
    		//"GB":"^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
    		"GB":"/[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}/i",
    		"GE":"^(\\d{4})$",
    		"GF":"^((97|98)3\\d{2})$",
    		"GG":"^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
    		"GL":"^(\\d{4})$",
    		"GP":"^((97|98)\\d{3})$",
    		"GR":"^(\\d{5})$",
    		"GT":"^(\\d{5})$",
    		"GU":"^(969\\d{2})$",
    		"GW":"^(\\d{4})$",
    		"HN":"^([A-Z]{2}\\d{4})$",
    		"HR":"^(?:HR)*(\\d{5})$",
    		"HT":"^(?:HT)*(\\d{4})$",
    		"HU":"^(\\d{4})$",
    		"ID":"^(\\d{5})$",
    		"IL":"^(\\d{5})$",
    		"IM":"^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
    		"IN":"^(\\d{6})$",
    		"IQ":"^(\\d{5})$",
    		"IR":"^(\\d{10})$",
    		"IS":"^(\\d{3})$",
    		"IT":"^(\\d{5})$",
    		"JE":"^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
    		"JO":"^(\\d{5})$",
    		"JP":"^(\\d{7})$",
    		"KE":"^(\\d{5})$",
    		"KG":"^(\\d{6})$",
    		"KH":"^(\\d{5})$",
    		"KP":"^(\\d{6})$",
    		"KR":"^(?:SEOUL)*(\\d{6})$",
    		"KW":"^(\\d{5})$",
    		"KZ":"^(\\d{6})$",
    		"LA":"^(\\d{5})$",
    		"LB":"^(\\d{4}(\\d{4})?)$",
    		"LI":"^(\\d{4})$",
    		"LK":"^(\\d{5})$",
    		"LR":"^(\\d{4})$",
    		"LS":"^(\\d{3})$",
    		"LT":"^(?:LT)*(\\d{5})$",
    		"LU":"^(\\d{4})$",
    		"LV":"^(?:LV)*(\\d{4})$",
    		"MA":"^(\\d{5})$",
    		"MC":"^(\\d{5})$",
    		"MD":"^(?:MD)*(\\d{4})$",
    		"ME":"^(\\d{5})$",
    		"MG":"^(\\d{3})$",
    		"MK":"^(\\d{4})$",
    		"MM":"^(\\d{5})$",
    		"MN":"^(\\d{6})$",
    		"MQ":"^(\\d{5})$",
    		"MT":"^([A-Z]{3}\\d{2}\\d?)$",
    		"MV":"^(\\d{5})$",
    		"MX":"^(\\d{5})$",
    		"MY":"^(\\d{5})$",
    		"MZ":"^(\\d{4})$",
    		"NC":"^(\\d{5})$",
    		"NE":"^(\\d{4})$",
    		"NF":"^(\\d{4})$",
    		"NG":"^(\\d{6})$",
    		"NI":"^(\\d{7})$",
    		"NL":"^(\\d{4}[A-Z]{2})$",
    		"NO":"^(\\d{4})$",
    		"NP":"^(\\d{5})$",
    		"NZ":"^(\\d{4})$",
    		"OM":"^(\\d{3})$",
    		"PF":"^((97|98)7\\d{2})$",
    		"PG":"^(\\d{3})$",
    		"PH":"^(\\d{4})$",
    		"PK":"^(\\d{5})$",
    		"PL":"^(\\d{5})$",
    		"PM":"^(97500)$",
    		"PR":"^(\\d{9})$",
    		"PT":"^(\\d{7})$",
    		"PW":"^(96940)$",
    		"PY":"^(\\d{4})$",
    		"RE":"^((97|98)(4|7|8)\\d{2})$",
    		"RO":"^(\\d{6})$",
    		"RS":"^(\\d{6})$",
    		"RU":"^(\\d{6})$",
    		"SA":"^(\\d{5})$",
    		"SD":"^(\\d{5})$",
    		"SE":"^(?:SE)*(\\d{5})$",
    		"SG":"^(\\d{6})$",
    		"SH":"^(STHL1ZZ)$",
    		"SI":"^(?:SI)*(\\d{4})$",
    		"SK":"^(\\d{5})$",
    		"SM":"^(4789\\d)$",
    		"SN":"^(\\d{5})$",
    		"SO":"^([A-Z]{2}\\d{5})$",
    		"SV":"^(?:CP)*(\\d{4})$",
    		"SZ":"^([A-Z]\\d{3})$",
    		"TC":"^(TKCA 1ZZ)$",
    		"TH":"^(\\d{5})$",
    		"TJ":"^(\\d{6})$",
    		"TM":"^(\\d{6})$",
    		"TN":"^(\\d{4})$",
    		"TR":"^(\\d{5})$",
    		"TW":"^(\\d{5})$",
    		"UA":"^(\\d{5})$",
    		"US":"^((\\d{5}-\\d{4})|(\\d{5})|([A-Z]\\d[A-Z]\\s\\d[A-Z]\\d))$",
    		"US":"^\\d{5}(-\\d{4})?$",
    		"UY":"^(\\d{5})$",
    		"UZ":"^(\\d{6})$",
    		"VA":"^(\\d{5})$",
    		"VE":"^(\\d{4})$",
    		"VI":"^\\d{5}(-\\d{4})?$",
    		"VN":"^(\\d{6})$",
    		"WF":"^(986\\d{2})$",
    		"YT":"^(\\d{5})$",
    		"ZA":"^(\\d{4})$",
    		"ZM":"^(\\d{5})$",
    		"CS":"^(\\d{5})$"
    		
    }
   return Zipmapss[val];
    }
function cc_brand_id(cur_val,card_val) {
	  var sel_brand;

	  // the regular expressions check for possible matches as you type, hence the OR operators based on the number of chars
	  // regexp string length {0} provided for soonest detection of beginning of the card numbers this way it could be used for BIN CODE detection also

	  //JCB
	  jcb_regex = new RegExp('^(?:2131|1800|35)[0-9]{0,}$'); //2131, 1800, 35 (3528-3589)
	  // American Express
	  amex_regex = new RegExp('^3[47][0-9]{0,}$'); //34, 37
	  // Diners Club
	  diners_regex = new RegExp('^3(?:0[0-59]{1}|[689])[0-9]{0,}$'); //300-305, 309, 36, 38-39
	  // Visa
	  visa_regex = new RegExp('^4[0-9]{0,}$'); //4
	  // MasterCard
	  mastercard_regex = new RegExp('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$'); //2221-2720, 51-55
	  maestro_regex = new RegExp('^(5[06789]|6)[0-9]{0,}$'); //always growing in the range: 60-69, started with / not something else, but starting 5 must be encoded as mastercard anyway
	  //Discover
	  discover_regex = new RegExp('^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$');
	  ////6011, 622126-622925, 644-649, 65


/*    cardtype.add("Visa");
			    cardtype.add("MasterCard");
			    cardtype.add("American Express");
			    cardtype.add("Diners Club");
			    cardtype.add("Discover");
			    cardtype.add("Carte Blanche");*/
	  // get rid of anything but numbers
	  cur_val = cur_val.replace(/\D/g, '');

	  // checks per each, as their could be multiple hits
	  //fix: ordering matter in detection, otherwise can give false results in rare cases
	  if (cur_val.match(jcb_regex)) {
	    sel_brand = "jcb";
	  } else if (cur_val.match(amex_regex)) {
	    sel_brand = "American Express";
	  } else if (cur_val.match(diners_regex)) {
	    sel_brand = "Diners Club";
	  } else if (cur_val.match(visa_regex)) {
	    sel_brand = "Visa";
	  } else if (cur_val.match(mastercard_regex)) {
	    sel_brand = "Master Card";
	  } else if (cur_val.match(discover_regex)) {
	    sel_brand = "Discover";
	  } else if (cur_val.match(maestro_regex)) {
	    if (cur_val[0] == '5') { //started 5 must be mastercard
	      sel_brand = "Master Card";
	    } else {
	      sel_brand = "maestro"; //maestro is all 60-69 which is not something else, thats why this condition in the end
	    }
	  } else {
	    sel_brand = "unknown";
	  }
	  var ccnum=cur_val;
	  ccnum = ccnum.split("-").join("");
	   // Checksum ("Mod 10")
	   // Add even digits in even length strings or odd digits in odd length strings.
	   var checksum = 0;
	   for (var i=(2-(ccnum.length % 2)); i<=ccnum.length; i+=2) {
	      checksum += parseInt(ccnum.charAt(i-1));
	   }
	   // Analyze odd digits in even length strings or even digits in odd length strings.
	   for (var i=(ccnum.length % 2) + 1; i<ccnum.length; i+=2) {
	      var digit = parseInt(ccnum.charAt(i-1)) * 2;
	      if (digit < 10) { checksum += digit; } else { checksum += (digit-9); }
	   }
	   if ((sel_brand == card_val)){
	   if ((checksum % 10) == 0) return true; else return false;
	   }else{
		   return false;
	   }
	   
	  return false;
	}
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
try {
	var convRatio = document.getElementById('convRatio').value;


	var xchangeCurrencyCode = document.getElementById('xchangeCurrencyCode').value;
	var cls = xchangeCurrencyCode.toLowerCase();

} catch (e) {
	var convRatio=1;
	var xchangeCurrencyCode = "USD";
	var cls = xchangeCurrencyCode.toLowerCase();
	
}

function applyAgentfees(value){
	if(value == 'Y'){
	var agfees=agfees=$("#agFees").val();
	if(agfees == 0.0){
		alert("Please add fees first");
		return false;
	}else if(agfees == ""){
		alert("Please add fees first");
		return false;
	}else{
		macpSet('AGF','Y','Y');
	}
	}else{
		$("#agFees").val("0.0");
		macpSet('AGF','Y','N');
	}
	
}

function macpSet(types,values,status){
	 var $menu = $('#macp');
	 var $ttg = $('#tgid');
	 var $tgNo = $('#tgNo');
	 var $ttm = $('#tmid');
     var agfees= $('#fareAgentFees').val();
     
	 var seatPrice = document.getElementById('seatValue').value;
	 var totSeat=0;
	 var seatSize =0;
	 
	 var allFlightsNumber = $("#allFlightsNumber").val();
	 if(allFlightsNumber != undefined){
	 var arr = allFlightsNumber.split(",");
	 for (var int = 0; int < arr.length; int++) {
		 if(arr[int] !=""){
		if($("#"+arr[int]).val().indexOf(",") != -1){
		seatSize = $("#"+arr[int]).val().split(",").length;
		}
	
		else if($("#"+arr[int]).val() != ""){
			totSeat=1;
			
		}
		else{
		}
		 
		 if(seatSize > totSeat){
				totSeat = seatSize;
			}
		 
		 }
		 
	}
	 }
	 seatPrice=seatPrice*totSeat;


	 
	var tgValue=document.getElementById('tgValue').value;
	var tmValue=document.getElementById('tmValue').value;
	var seatvalue = document.getElementById('seatValue').value;
	var macpValue=document.getElementById('macpValue').value;
	var totalValue=document.getElementById('totalValue').value;
	var totalTaxes=document.getElementById('totalTaxes').value;
	var basep=document.getElementById('tgInsValue').value;
	var totPax=document.getElementById('totPax').value;
	var couponAmt=document.getElementById('couponAmt').value;
	/*var brbPrice = $("#brbProductPrice").val();*/
	var brbPrice = 0.0;
	var totlugamt= $("#totlugamt").val();
	
	console.log("totlugamt "+totlugamt);
	//var tgInsValue=(basep*totPax).toFixed(2);
	var tgInsValue=basep;
	
	var tripMateCost=document.getElementById('tripMateCost').value;
	
	//alert("types:"+types);
	//alert("couponAmt:"+couponAmt);
	//console.log("tgValue:"+tgValue);
//	console.log("tgValue:"+tgInsValue);
//	console.log("macpValue:"+macpValue);
//	console.log("totalValue:"+totalValue);
	var totbsp=0.0;
	if(types == 'TG'){
		brbPrice=brbPrice*totPax;
		if(status == 'Y'){
			$ttg.slideDown(200);
			$tgNo.slideUp(200);
			document.getElementById('tgSelect').value = "Yes";
			document.getElementById('tgValue').value=tgInsValue;
			var tginvale=Number(tgInsValue);
			document.getElementById('tgidval').innerHTML="$"+tginvale.toFixed(2);
			totbsp=(Number(macpValue)+Number(totlugamt)+Number(tgInsValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
		//	alert("tgYes:"+totbsp);
		}else{
			 $ttg.slideUp(200);
			 $tgNo.slideDown(200);
			 document.getElementById('tgSelect').value = "NO";
			document.getElementById('tgValue').value="0.0";
			document.getElementById('tgidval').innerHTML="0.0";
			tgInsValue=0.0;
			totbsp=(Number(totlugamt)+Number(macpValue)+Number(tgInsValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
			//alert("tgNo:"+totbsp);
		}
		
	}else if(types == 'TM'){
		brbPrice=brbPrice*totPax;
		if(status == 'Y'){
			$ttm.slideDown(200);
			//$tgNo.slideUp(200);
			document.getElementById('tmSelect').value = "Yes";
			document.getElementById('tmValue').value=tripMateCost;
			var tginvale=Number(tripMateCost);
			document.getElementById('tmidval').innerHTML="<i class='fa fa-"+cls+"'></i>"+putThousandsSeparators((convRatio*tginvale).toFixed(2));//     "$"+tginvale.toFixed(2);
			totbsp=(Number(totlugamt)+Number(macpValue)+Number(tripMateCost)+Number(totalValue)+Number(brbPrice)+Number(tgValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
		//	alert("tgYes:"+totbsp);
		}else{
			 $ttm.slideUp(200);
			 $tgNo.slideDown(200);
			 document.getElementById('tmSelect').value = "NO";
			document.getElementById('tmValue').value="0.0";
			document.getElementById('tmidval').innerHTML="0.0";
			tripMateCost=0.0;
			totbsp=(Number(totlugamt)+Number(macpValue)+Number(tripMateCost)+Number(totalValue)+Number(brbPrice)+Number(tgValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
			//alert("tgNo:"+totbsp);
		}
		
	}else if(types == 'CO'){
		//console.log("types:"+types);
		//console.log("status:"+status);
		//console.log("values:"+values);
		brbPrice=brbPrice*totPax;
		if(status == 'Y'){
			totbsp=(Number(totlugamt)+Number(macpValue)+Number(tgValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(values);
		}else{
			totbsp=(Number(totlugamt)+Number(macpValue)+Number(tgValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))+Number(0);
		}
	}
	else if(types == 'BRB'){
		if(status == 'Y'){
			brbPrice=brbPrice*totPax;
			totbsp=(Number(totlugamt)+Number(macpValue)+Number(tgValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
			
		}else{
			brbPrice = 0.0;
			totbsp=(Number(totlugamt)+Number(macpValue)+Number(tgValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
		}
	}
	else if(types == 'Seat'){
	brbPrice=brbPrice*totPax;
		$("#finalSeatPrice").val((seatPrice).toFixed(2));
		if(status == 'Y'){
			totbsp=(Number(totlugamt)+Number(macpValue)+Number(tgValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
			//document.getElementById('seatPriceidVal').innerHTML="<i class='fa fa-"+cls+"'></i>"+putThousandsSeparators((convRatio*seatPrice).toFixed(2));
			//document.getElementById('totalTaxesValue').innerHTML=(Number(totalTaxes)+Number(putThousandsSeparators((convRatio*seatPrice).toFixed(2)))).toFixed(2);
			document.getElementById('totalTaxesValue').innerHTML=putThousandsSeparators((Number(totalTaxes)+Number((convRatio*seatPrice).toFixed(2))).toFixed(2));
			document.getElementById('seatAssgFee').innerHTML="<i class='fa fa-"+cls+"'></i>"+putThousandsSeparators((convRatio*seatPrice).toFixed(2));
			document.getElementById('totalSeatFee').innerHTML="<i class='fa fa-"+cls+"'></i>"+putThousandsSeparators((convRatio*seatPrice).toFixed(2));
			//$("#seatPriceid").slideDown(200);
			$(".seat_price").show();
		}else{
			seatPrice = 0.0;
			totbsp=(Number(totlugamt)+Number(macpValue)+Number(tgValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
			
		}
		if(seatPrice == 0.00){
			$(".seat_price").hide();
		}
	}else if(types == 'AGF'){
	    brbPrice=brbPrice*totPax;
		agfees=$("#agFees").val();
		if(status == 'Y'){
			totbsp=(Number(totlugamt)+Number(macpValue)+Number(tgValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
			
			$("#agFeesDisAmt").html(Number(agfees).toFixed(2));
			$("#agFeesRem").show();
			$("#agFeesAdd").hide();
			$("#fareAgentFees").val(Number(agfees).toFixed(2));
			//$("#agFeesDisAmt").disable();
		}else{
			agfees = 0.0;
			totbsp=(Number(totlugamt)+Number(macpValue)+Number(tgValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
			$("#agFeesDisAmt").html(Number(agfees).toFixed(2));
			$("#agFeesRem").hide();
			$("#agFeesAdd").show();
			$("#fareAgentFees").val(Number(agfees).toFixed(2));
			//$("#agFeesDisAmt").enable();
		}
	}else if(types == 'LG'){
		brbPrice=brbPrice*totPax;
		var totlug=values;
		console.log("totlug "+totlug)
		if(status == 'Y'){			
			totbsp=(Number(macpValue)+Number(totlug)+Number(tgInsValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
		
		}else{			
			totlug=0.0;
			totbsp=(Number(macpValue)+Number(totlug)+Number(tgInsValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
			
		}
		
	}else{
		brbPrice=brbPrice*totPax;
     if(status == 'Y'){
    	 $menu.slideDown(200);
    	 macpAmt = document.getElementById('macpAmt').value;
    	 macpValue=Number(macpAmt)*totPax;
    	 document.getElementById('macpValue').value=macpValue;
    	 totbsp=(Number(totlugamt)+Number(macpValue)+Number(tgValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
    	// alert("macpYes:"+totbsp);
		}else{
			 $menu.slideUp(200);
			document.getElementById('macpValue').value="0.0";
			macpValue=0.0;
			totbsp=(Number(totlugamt)+Number(macpValue)+Number(tgValue)+Number(totalValue)+Number(brbPrice)+Number(tmValue)+Number(seatPrice)+Number(agfees))-Number(couponAmt);
			// alert("macpNo:"+totbsp);
		}
	}
	$("#grandTotalMacpSet").val(totbsp.toFixed(2));
	document.getElementById('publishedFare').innerHTML="<h4><i class='fa fa-"+cls+"'></i>"+putThousandsSeparators((convRatio*totbsp).toFixed(2))+"</h4>";
//	console.log(convRatio);
	 document.getElementById('publishedFareMobile').innerHTML="<h4>$"+putThousandsSeparators((convRatio*totbsp).toFixed(2))+"</h4>";
	if(convRatio != 1){
	//document.getElementById('publishedFareMsg').innerHTML="<i class='fa fa-"+cls+"'></i>"+putThousandsSeparators((convRatio*totbsp).toFixed(2))+" ";
	 document.getElementById('publishedFareMsg').innerHTML="$"+putThousandsSeparators((totbsp).toFixed(2))+" ";
	 document.getElementById('publishedFareXe').innerHTML="<h4>$"+putThousandsSeparators(totbsp.toFixed(2))+"</h4>";
//	document.getElementById('publishedFareXeMsg').innerHTML="$"+putThousandsSeparators(totbsp.toFixed(2))+" ";
	}
//	alert("a tgValue:"+tgValue);
//	alert("a macpValue:"+macpValue);
//	alert("a totalValue:"+totalValue);
	
	 var ele = document.querySelector("#payments_card_first_amount");
     
     ele.value = (totbsp).toFixed(2);
     
      var ele2 = document.querySelector("#Payments_Card_second_amount");
   
     ele2.value = "0.00";
     card2Required = false;
  	$("#booking").validate().element("#payments_card_first_amount");
  	try {
	 	$("#booking").validate().element("#Payments_Card_second_amount");
	 	$("#booking").validate().element("#Payments_MaskCardNumber2");
	 	$("#booking").validate().element("#Payments_CardNumber2");
	    $("#booking").validate().element("#Payments_CvvNo2");
	    $("#booking").validate().element("#Payments_ExpiryYear2");
  	}catch(e) {		
	} 
}
function radioSelect(id){
	 $("#"+id).prop('checked', true);
	   $('.showbtn').text("Show");
	 if(id=="macpYes"){
		 $("#tcpid").removeClass('help-block');
		 document.getElementById("tcpid").style.display='none'; 
	 }else if (id== "macpNo"){
		 $("#tcpid").removeClass('help-block');
		 document.getElementById("tcpid").style.display='none'; 
	 }else if(id=="TravelGuardYes"){
		 $("#tgpid").removeClass('help-block');
		 document.getElementById("tgpid").style.display='none'; 
	 }else if (id== "TravelGuardNo"){
		 $("#tgpid").removeClass('help-block');
		 document.getElementById("tgpid").style.display='none'; 
	 }else if (id== "TripMateYes"){
		 $("#tmpid").removeClass('help-block');
		 $("#tmpid").addClass('tmpid');
		  document.getElementById("tmpid").style.display='none'; 
		
	 }else if (id== "TripMateNo"){
		 $("#tmpid").removeClass('help-block');
		 $("#tmpid").addClass('tmpid');
		  document.getElementById("tmpid").style.display='none'; 
		
	 }
	
	
	 
	}

function brbSetValue(productCode,productPrice){
	 $('.showbtn').text("Show");
	$("#"+productCode).prop('checked', true);
	 document.getElementById("brbError").style.display='none'; 
	$("#brbError").removeClass('help-block');
	$("#brbProductCode").val(productCode);
	$("#brbProductPrice").val(productPrice);
	var totPax = $("#totPax").val();
	var finalBrbPrice = Number(totPax)*convRatio*Number(productPrice);
	$("#brbFinalAmount").text(finalBrbPrice.toFixed(2));
	if (productPrice > 0) {
		$("#brbPriceBlock").show();
	} else {
		$("#brbPriceBlock").hide();
	}
	
	
}

var intnational_code='{"AD":"376","AE":"971","AF":"93","AG":"1","AI":"1","AL":"355","AM":"374","AN":"599","AO":"244","AQ":"672","AR":"54","AS":"684","AT":"43","AU":"61","AW":"297","AZ":"994","BA":"387","BB":"1","BD":"880","BE":"32","BF":"226","BG":"359","BH":"973","BI":"257","BJ":"229","BL":"590","BM":"1","BN":"673","BO":"591","BQ":"599","BR":"55","BS":"1","BT":"975","BW":"267","BY":"375","BZ":"501","CA":"1","CC":"672","CD":"243","CF":"236","CG":"242","CH":"41","CI":"225","CK":"682","CL":"56","CM":"237","CN":"86","CO":"57","CR":"506","CV":"238","CW":"599","CX":"1176","CY":"357","CZ":"420","DE":"49","DJ":"253","DK":"45","DM":"1","DO":"1","DZ":"213","EC":"593","EE":"372","EG":"20","EH":"212","ER":"291","ES":"34","ET":"251","FI":"358","FJ":"679","FK":"500","FM":"691","FO":"298","FR":"33","GA":"241","GB":"44","GD":"1","GE":"995","GF":"594","GH":"233","GI":"350","GL":"299","GM":"220","GN":"224","GP":"590","GQ":"240","GR":"30","GS":"500","GT":"502","GU":"1","GW":"245","GY":"592","HK":"852","HM":"334","HN":"504","HR":"385","HT":"509","HU":"36","ID":"62","IE":"353","IL":"972","IN":"91","IO":"246","IQ":"964","IR":"98","IS":"354","IT":"39","JM":"1","JO":"962","JP":"81","KE":"254","KG":"996","KH":"855","KI":"686","KM":"269","KN":"1","KP":"850","KR":"82","KW":"965","KY":"1","KZ":"7","LA":"856","LB":"961","LC":"1","LI":"423","LK":"94","LR":"231","LS":"266","LT":"370","LU":"352","LV":"371","LY":"218","MA":"212","MC":"377","MD":"373","ME":"382","MG":"261","MH":"692","MK":"389","ML":"223","MM":"95","MN":"976","MO":"853","MP":"1","MQ":"596","MR":"222","MS":"1664","MT":"356","MU":"230","MV":"960","MW":"265","MX":"52","MY":"60","MZ":"258","NA":"264","NC":"687","NE":"227","NF":"672","NG":"234","NI":"505","NL":"31","NO":"47","NP":"977","NR":"674","NU":"683","NZ":"64","OM":"968","PA":"507","PE":"51","PF":"689","PG":"675","PH":"63","PK":"92","PL":"48","PM":"508","PN":"64","PR":"1","PS":"970","PT":"351","PW":"680","PY":"595","QA":"974","RE":"262","RO":"40","RS":"381","RU":"7","RW":"250","SA":"966","SB":"677","SC":"248","E":"46","SG":"65","SH":"290","SI":"386","SJ":"47","SK":"421","SL":"232","SM":"378","SN":"221","SO":"252","SR":"597","ST":"239","SV":"503","SX":"1","SY":"963","SZ":"268","TC":"1","TD":"235","TG":"228","TH":"66","TJ":"992","TK":"690","TL":"670","TM":"993","TN":"216","TO":"676","TP":"670","TR":"90","TT":"1","TV":"688","TW":"886","TZ":"255","UA":"380","UG":"256","UM":"1","US":"1","UY":"598","UZ":"998","VA":"379","VC":"1","VE":"58","VG":"1","VI":"1","VN":"84","VU":"678","WF":"681","WS":"685","XK":"381","YE":"967","YT":"269","YU":"381","ZA":"27","ZM":"260","ZW":"263"}';
var area_code='{"AD":"1","AE":"1","AF":"1","AG":"268","AI":"264","AL":"1","AM":"1","AN":"1","AO":"1","AQ":"1","AR":"1","AS":"1","AT":"1","AU":"1","AW":"1","AZ":"1","BA":"1","BB":"246","BD":"1","BE":"1","BF":"1","BG":"1","BH":"1","BI":"1","BJ":"1","BL":"1","BM":"441","BN":"1","BO":"1","BQ":"1","BR":"1","BS":"242","BT":"1","BW":"1","BY":"1","BZ":"1","CA":"1","CC":"1","CD":"1","CF":"1","CG":"1","CH":"1","CI":"1","CK":"1","CL":"1","CM":"1","CN":"1","CO":"1","CR":"1","CV":"1","CW":"1","CX":"1","CY":"1","CZ":"1","DE":"1","DJ":"1","DK":"1","DM":"809","DO":"809","DZ":"1","EC":"1","EE":"1","EG":"1","EH":"1","ER":"1","ES":"1","ET":"1","FI":"1","FJ":"1","FK":"1","FM":"1","FO":"1","FR":"1","GA":"1","GB":"1","GD":"473","GE":"1","GF":"1","GH":"1","GI":"1","GL":"1","GM":"1","GN":"1","GP":"1","GQ":"1","GR":"1","GS":"1","GT":"1","GU":"671","GW":"1","GY":"1","HK":"1","HM":"1","HN":"1","HR":"1","HT":"1","HU":"1","ID":"1","IE":"1","IL":"1","IN":"1","IO":"1","IQ":"1","IR":"1","IS":"1","IT":"1","JM":"876","JO":"1","JP":"1","KE":"1","KG":"1","KH":"1","KI":"1","KM":"1","KN":"869","KP":"1","KR":"1","KW":"1","KY":"345","KZ":"1","LA":"1","LB":"1","LC":"1","LI":"1","LK":"1","LR":"1","LS":"1","LT":"1","LU":"1","LV":"1","LY":"1","MA":"1","MC":"1","MD":"1","ME":"1","MG":"1","MH":"1","MK":"1","ML":"1","MM":"1","MN":"1","MO":"1","MP":"1","MQ":"1","MR":"1","MS":"1","MT":"1","MU":"1","MV":"1","MW":"1","MX":"1","MY":"1","MZ":"1","NA":"1","NC":"1","NE":"1","NF":"1","NG":"1","NI":"1","NL":"1","NO":"1","NP":"1","NR":"1","NU":"1","NZ":"1","OM":"1","PA":"1","PE":"1","PF":"1","PG":"1","PH":"1","PK":"1","PL":"1","PM":"1","PN":"1","PR":"787","PS":"1","PT":"1","PW":"1","PY":"1","QA":"1","RE":"1","RO":"1","RS":"1","RU":"1","RW":"1","SA":"1","SB":"1","SC":"1","SD":"1","SE":"1","SG":"1","SH":"1","SI":"1","SJ":"1","SK":"1","SL":"1","SM":"1","SN":"1","SO":"1","SR":"1","ST":"1","SV":"1","SX":"1","SY":"1","SZ":"1","TC":"649","TD":"1","TG":"1","TH":"1","TJ":"1","TK":"1","TL":"1","TM":"1","TN":"1","TO":"1","TP":"1","TR":"1","TT":"868","TV":"1","TW":"1","TZ":"1","UA":"1","UG":"1","UM":"1","US":"1","UY":"1","UZ":"1","VA":"1","VC":"1","VE":"1","VG":"284","VI":"340","VN":"1","VU":"1","WF":"1","WS":"1","XK":"1","YE":"1","YT":"1","YU":"1","ZA":"1","ZM":"1","ZW":"1"}';

function getInternationalCode() {
	var code=$("#Payments_Country").val();
	//alert($("#Payments_Country").val());
	$.each($.parseJSON(intnational_code), function(k, v) {
	    //alert(k + ' is ' + v);
	    if(k == code)
	    {
	     var temp=v;
		 $("#contact_intcode").val(temp);
		     
		     /*try {		    	 
		    	var el = document.getElementById("intcodevalid");		    	
		    	el.classList.add("valid");
		    	el.classList.add("valid");
		    	el.classList.remove("has-error");
		    	document.getElementById("contact_intcode-error").style.display = "none";
			} catch (e) { }*/
			
	     return false;
	    }
	    else {
		    $("#contact_intcode").val('');			
	    }
	});
	
	$.each($.parseJSON(area_code), function(k, v) {
		//console.log(k + ' is ' + v);
	    if(k == code)
	    {
	     var temp=v;
		 $("#contact_areacode").val(temp);
		     
		    /* try {
		    	 
		    	var el = document.getElementById("areacodevalid");		    	
		    	el.classList.add("valid");
		    	el.classList.add("valid");
		    	el.classList.remove("has-error");
		    	document.getElementById("contact_areacode-error").style.display = "none";
			} catch (e) { }*/
			$("#Payments_State").focus();
	     return false;
	    }
	    else {
		    $("#contact_areacode").val('');		    
			$("#Payments_State").focus();
	    }
	});
};
function getSubInternationalCode() {
	var code=$("#subscribeCountry").val();
	$.each($.parseJSON(intnational_code), function(k, v) {	   
	    if(k == code)
	    {
	     var temp=v;
		 $("#contact_intcode").val(temp);
	     return false;
	    }
	    else {
		    $("#contact_intcode").val('');			
	    }
	});	
	$.each($.parseJSON(area_code), function(k, v) {		
	    if(k == code)
	    {
	     var temp=v;
		 $("#contact_areacode").val(temp);
		 $("#Payments_State").focus();
	     return false;
	    }
	    else {
		    $("#contact_areacode").val('');		    
			$("#Payments_State").focus();
	    }
	});
	
	
};

(function(){

	angular.module('angularPurchase', ['ngAnimate','cgBusy','LocalStorageModule','routeHappy']).controller('purchaseCtrl',['$http','$scope','$timeout','$window','localStorageService','routeHappy',function($http,$scope,$timeout,$window,localStorageService,routeHappy){ 
		var vm = this;
		//alert("2");
		$scope.IsHidden = true;
		$scope.isDisabled= false;
		$scope.isRemDisabled= true;
		 $scope.subscribeButton="Apply";
		 $scope.subscribed = false;
		$scope.IsShow = false;
		$scope.delay = 0;
		$scope.minDuration = 0;
		$scope.message = 'Please Wait... While we update your Travel Guard Plan.';
		$scope.backdrop = true;
		$scope.promise = null;
		$scope.selectedCard="Select a Card";
		$scope.entertainment = routeHappy.entertainment();
        $scope.food = routeHappy.food();
        $scope.layout = routeHappy.layout();
        $scope.powerAndUsb = routeHappy.powerAndUsb();
        $scope.wifi = routeHappy.wifi();
        $scope.happy_img = function(xx) {
 		   
 		   return  routeHappy.happy_img(xx);
 	   }
		 $scope.openWindow = function() {
			
			    $scope.pp="/form/pdf/";
			    //console.log("Code:"+$scope.tgPcode);
			    //console.log("Code:"+$scope.selectedCountry.ID);
			    //console.log("State:"+ $scope.selectedItem.ID);
			    if($scope.selectedCountry.ID == 0){
			    	$scope.tgUrl="https://webservices.travelguard.com/Product/FileRetrieval.aspx?CountryCode=US&StateCode=NW&ProductCode="+$scope.tgPcode+"&PlanCode=P1&FileType=PROD_PLAN_DOC";
				    //$window.open($scope.pp+$scope.tgPcode,'Travel gaurd travel Insurance plan','width=700,height=500')
				    $window.open($scope.tgUrl,'Travel gaurd travel Insurance plan','width=700,height=500','_blank')
			    }else{
			    $scope.tgUrl="https://webservices.travelguard.com/Product/FileRetrieval.aspx?CountryCode="+$scope.selectedCountry.ID+"&StateCode="+$scope.selectedItem.ID+"&ProductCode="+$scope.tgPcode+"&PlanCode=P1&FileType=PROD_PLAN_DOC";
			    //$window.open($scope.pp+$scope.tgPcode,'Travel gaurd travel Insurance plan','width=700,height=500')
			    $window.open($scope.tgUrl,'Travel gaurd travel Insurance plan','width=700,height=500','_blank')
			    }
		      
		    };
		    
		    if(localStorageService.get("paymentPage") != null){
	               // $scope.searchQueryList.push(localStorageService.get("searchQuery"));
	                 $scope.searchQueryList=localStorageService.get("paymentPage");
	                 //console.log($scope.searchQueryList);
	                }
	           
		    if(localStorageService.get("couponsPopup") != null){
                $scope.couponsPopup=localStorageService.get("couponsPopup");
               // console.log("couponsPopup:"+$scope.couponsPopup);
                  $scope.collapsed =true;
				  $scope.subscribed = !$scope.subscribed;
				  document.getElementById('couponsCode').value = $scope.couponsPopup.split(',')[0]; //working
				  $scope.selectedCoupons=$scope.couponsPopup.split(',')[0];
				  
				  document.getElementById("popApply").style.display='block'; 
		         //  console.log("couponsPopup 2:"+$scope.couponsPopup.split(',')[0]);
             }
		    
		    $scope.openCoupons = function() {
		      var placeholder2 = document.getElementById('couponMessage'); //working
	           placeholder2.innerHTML = "";
	           if(document.getElementById("couponsValue").value != 'X'){
	           $scope.selectedCoupons=document.getElementById("couponsValue").value;
	           }
	          
		    }
		    
		    $scope.init = function()
		    {
		    	//alert("Hey");
		    	if($("#utmSourceValue").val()=='Facebook-UA')
				  {
					  //alert("Hey");
						$scope.UACouponApply();
						
				  }
		    }
		    
	           var couponsAmtId = $("#couponsAmtId").val();
			  $scope.checkCoupons	 = function(type) {
				  //console.log("subscribeButton:"+$scope.subscribeButton);
				  document.getElementById("popApply").style.display='none'; 
				  if($scope.subscribeButton == 'Apply'){
					  //console.log("subscribeButton: Apply");
				  if($scope.selectedCoupons === undefined){
					  var placeholder2 = document.getElementById('couponMessage'); //working
			           placeholder2.innerHTML = "Please fill coupon code First";  
					  
					  //alert("Please fill coupon code First");
				  }else if($scope.selectedCoupons === ""){
					  var placeholder2 = document.getElementById('couponMessage'); //working
			           placeholder2.innerHTML = "Please fill coupon code First"; 
					 // alert("Please fill coupon code First");
				  }
				  else if($("#couponsAmtId").val() > 0){
								$scope.fxlCouponApply();
						}
				  else{
					  var URL='/checkCoupon/'+$scope.selectedCoupons;
					  type=  document.getElementById("couponsType").value;
					if(type == "PDC"){
						 $('#callpopupopen').val(1);
						var couponsValue=document.getElementById("couponsValue").value;
						if(couponsValue != 'X' && couponsValue.toLowerCase() ==$scope.selectedCoupons.toLowerCase()){
						URL='/checkPdcCoupon/'+$scope.selectedCoupons;
						}else{
							 $('#callpopupopen').val(0);
							 var placeholder2 = document.getElementById('couponMessage'); //working
					           placeholder2.innerHTML = "Please fill valid coupon code  '" + document.getElementById("couponsValue").value+"'"; 
					           return;
						}
					}else{
						URL='/checkCoupon/'+$scope.selectedCoupons;
					}
				 $http.post(URL).success(function(response){
					//	console.log(response);
									
						 angular.forEach(response, function(Flighth) {
							 //console.log(Flighth.responseStatus.Status);
							 if(Flighth.responseStatus.Status == 0){
								 $scope.subscribeButton = $scope.subscribed ? 'Apply' : 'Remove';
								 $scope.subscribed = !$scope.subscribed;
							   $scope.couponAmt=Flighth.CouponAmount;
					          // console.log(Flighth.couponAmount);
							   
							   var couponId = document.getElementById('couponId'); //working
							   couponId.value = "Yes"; 
					           var placeholder = document.getElementById('couponAmtPlan'); //working
					           
					           $scope.Math = my_rounded_number;
					        //    console.log(Flighth.CouponAmount*convRatio);
					             $scope.abc = $scope.Math((Flighth.CouponAmount*convRatio),2)
					        //    console.log($scope.abc);
					             
					             
					           placeholder.innerHTML = ($scope.abc).toFixed(2); 
					           
					           var placeholder2 = document.getElementById('couponMessage'); //working
					           placeholder2.innerHTML = "Coupon Code is Applied"; 
					           
					           var placeholder = document.getElementById('couponApply'); //working
					           placeholder.innerHTML = "X"; 
					           
					           var placeholder2 = document.getElementById('couponHave'); //working
					           placeholder2.innerHTML = ""; 
					           
					           var placeholder2 = document.getElementById('couponHave1'); //working
					           placeholder2.innerHTML = "Coupon Discount-"; 
					           $('#successMessage').show();
							   $('#callpopupopen').val(1);
					           macpSet('CO',$scope.couponAmt,'Y');
					           $scope.isDisabled= true;
							  }else{
								  var placeholder2 = document.getElementById('couponMessage'); //working
								   placeholder2.innerHTML = Flighth.responseStatus.ErrorDescription; 
                                              if(Flighth.responseStatus.ErrorDescription == undefined){
                                                                           placeholder2.innerHTML = "Coupon not valid for this fares.";
                                                                   }
								   var couponId = document.getElementById('couponId'); //working
								   couponId.value = "N"; 
							  }
							    
							  
					      
					         });
						
						
					})
					.error(function(error){
						  $scope.isDisabled= true;
						  var couponId = document.getElementById('couponId'); //working
						   couponId.value = "N"; 
						  
					})
				  }
				  }
				  
				  else if(couponsAmtId > 0 && $scope.subscribeButton == 'Remove'){
							  
					  $scope.subscribeButton = 'Apply';
					  $scope.collapsed =false;
					  var placeholder = document.getElementById('couponAmtPlan'); //working
			           placeholder.innerHTML = "0.00"; 
			           
			           var placeholder2 = document.getElementById('couponMessage'); //working
			           placeholder2.innerHTML = "use this coupon "+$scope.selectedCoupons; 
			           
			           var placeholder = document.getElementById('couponApply'); //working
			           placeholder.innerHTML = "Apply"; 
			           
			           var placeholder2 = document.getElementById('couponHave'); //working
			           placeholder2.innerHTML = "Have Coupon Code"; 
			           
			           var placeholder2 = document.getElementById('couponHave1'); //working
			           placeholder2.innerHTML = ""; 
			           
			           var couponId = document.getElementById('couponId'); //working
					   couponId.value = "N"; 
				        macpSet('CO',$scope.couponAmt,'N');
			           $scope.couponAmt=0.0;
			           $scope.isDisabled= false;
					   couponsAmtId = 0;
						  }
				  else{
					  //console.log("subscribeButton: X");
					  $scope.subscribeButton = $scope.subscribed ? 'Apply' : 'Remove';
					  $scope.collapsed =false;
					  $scope.subscribed = !$scope.subscribed;
					  var placeholder = document.getElementById('couponAmtPlan'); //working
			           placeholder.innerHTML = "0.00"; 
			           
			           var placeholder2 = document.getElementById('couponMessage'); //working
			           placeholder2.innerHTML = ""; 
			           
			           var placeholder = document.getElementById('couponApply'); //working
			           placeholder.innerHTML = "Apply"; 
			           
			           var placeholder2 = document.getElementById('couponHave'); //working
			           placeholder2.innerHTML = "Have Coupon Code"; 
			           
			           var placeholder2 = document.getElementById('couponHave1'); //working
			           placeholder2.innerHTML = ""; 
			           
			           var couponsCode = document.getElementById('couponsCode'); //working
			           couponsCode.value = "";
			           
			           var couponId = document.getElementById('couponId'); //working
					   couponId.value = "N"; 
					    $('#callpopupopen').val(0);
			           //console.log("$scope.couponAmt:"+$scope.couponAmt);
			           macpSet('CO',$scope.couponAmt,'N');
			           $scope.couponAmt=0.0;
			           $scope.selectedCoupons=undefined;
			           $scope.isDisabled= false;	
				  }
			  }
			  
			  $scope.UACouponApply = function()
			  {
				$timeout(function() {
				$scope.collapsed =true;
				$scope.subscribeButton = $scope.subscribed ? 'Apply' : 'Remove';
				couponsAmtId = $("#couponsAmtId").val();
				$scope.couponAmt = couponsAmtId;
				$scope.selectedCoupons = $("#couponsCodeId").val();
				//alert(" selectedCoupons >> "+selectedCoupons);
				$("#couponsCode").val($("#couponsCodeId").val());
				
				var couponId = document.getElementById('couponId'); //working
				couponId.value = "Yes";
				var placeholder2 = document.getElementById('couponMessage'); 
				placeholder2.innerHTML = "Coupon Code is Applied"; 
				var placeholder = document.getElementById('couponApply'); 
			    placeholder.innerHTML = "X";
				var placeholder2 = document.getElementById('couponHave'); 
			    placeholder2.innerHTML = "";
				var placeholder2 = document.getElementById('couponHave1'); 
				placeholder2.innerHTML = "Coupon Discount";
				var placeholder = document.getElementById('couponAmtPlan'); 
			    placeholder.innerHTML = ($scope.couponAmt * convRatio).toFixed(2); 
				$('#callpopupopen').val(1);
				//document.getElementById("popup-block").style.display='none';
				macpSet('CO',$scope.couponAmt,'Y');
				$scope.isDisabled= true;
				},1000);
			  }
			  
		$scope.fxlCouponApply = function(){
				  $timeout(function() {
				$scope.collapsed =true;
				$scope.subscribeButton = $scope.subscribed ? 'Apply' : 'Remove';
				couponsAmtId = $("#couponsAmtId").val();
				$scope.couponAmt = couponsAmtId;
				$scope.selectedCoupons = $("#couponsCodeId").val();
				$("#couponsCode").val($("#couponsCodeId").val());
				
				var couponId = document.getElementById('couponId'); //working
				couponId.value = "Yes";
				var placeholder2 = document.getElementById('couponMessage'); 
				placeholder2.innerHTML = "Coupon Code is Applied"; 
				var placeholder = document.getElementById('couponApply'); 
			    placeholder.innerHTML = "X";
				var placeholder2 = document.getElementById('couponHave'); 
			    placeholder2.innerHTML = "";
				var placeholder2 = document.getElementById('couponHave1'); 
				placeholder2.innerHTML = "Coupon Discount";
				var placeholder = document.getElementById('couponAmtPlan'); 
			    placeholder.innerHTML = ($scope.couponAmt * convRatio).toFixed(2); 
				$('#callpopupopen').val(1);
				//document.getElementById("popup-block").style.display='none';
				macpSet('CO',$scope.couponAmt,'Y');
				$scope.isDisabled= true;
				},1000);
			  }
			  if(couponsAmtId > 0){
				$scope.fxlCouponApply();
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
			    
			/*    $scope.setccValue	 =  function(id) {
				    
				    //  $timeout(function() {
				    	  $scope.selectedCard=id;
				    	  if($("#Payments_CardNumber").val().length > 0){
				        		$("#booking").validate().element("#Payments_CardNumber");
				        		 }
				        		 
				        		 if($("#Payments_CvvNo").val().length > 0){
				             		$("#booking").validate().element("#Payments_CvvNo");
				             		 }
				 //     });
				    };*/
			
			  
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
                    		  //console.log("Selected day in " + $scope.DobDate[i]);
                    		  if($scope.DobDate[i] === "Day"){
                    			  $scope.test=0;                    			 
                    		  }
                    	  }
                    	  for (var i = 0; i < $scope.DobMonth.length; ++i) {
                    		//  console.log("Selected Month in " + $scope.DobMonth[i]);
                    		  if($scope.DobMonth[i] === "0"){
                    			  $scope.test=0;
                    		  }
                    	  }
                    	  
                    	  for (var i = 0; i < $scope.DobYear.length; ++i) {
                    		//  console.log("Selected Year in " + $scope.DobYear[i]);
                    		  if($scope.DobYear[i] === "Year"){
                    			  $scope.test=0;
                    		  }
                    	  }
                    	  //console.log("$scope.test :"+$scope.test);
                    	  if($scope.test != 0){
                    	  if($scope.selectedItem.ID != "0"){
                    	//  alert("Inside TG");
                    		 // $scope.loading = true;
                    		$scope.promise= $http.post('/tgQuote/'+newVal.ID+"/"+$scope.selectedCountry.ID+"/"+$scope.DobDate+"/"+$scope.DobMonth+"/"+$scope.DobYear).success(function(response){
    						//console.log(response);
    						//alert(response);
    						//console.log(response.tgAmount);
    						 angular.forEach(response, function(Flighth) {
    							 if(Flighth.tgAv == "Yes"){
    					           $scope.tgIns=Flighth.tgAmount;
    					           $scope.tgPcode=Flighth.pdfFile;
    					           //console.log(Flighth.tgAmount);
    					           var placeholder = document.getElementById('tgPlan'); //working
    					          // console.log(placeholder);
    					           placeholder.innerHTML = Flighth.tgAmount; 
								   
    					           $scope.showHideTest = "";
    					         //  $scope.loading = false;
    					         //  alert("We Change your Travel Insurance amount. Please check before book the Flights.");
    					           if($scope.tgIns == "0.0"){
    					        	     // document.getElementById("tgBox").style.display='none'; 
    			                    	//  document.getElementById("tgBoxhide").style.display='block';
    					           }
    							  }
    					         });
								  $timeout(function () { 
								  var tgSelect=document.getElementById('tgSelect').value;
								   if(tgSelect == "Yes"){
								   macpSet('TG','N','Y');
								   }
								  }, 2000);
    					})
    					.error(function(error){    					
    					})
    				
                      }else{
                    	  $scope.tgIns="0.0";
                    	  document.getElementById("tgBox").style.display='none'; 
                    	  document.getElementById("tgBoxhide").style.display='block';                    	  
                      }
                      }else{
                    	  
                    	  $scope.focus('passengerList0.LastName');
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
                      //console.log("Selected option " + newVal.ID);
                	/*  if(newVal.ID != "US"){
                          if(newVal.ID == "CA"){
     						  document.getElementById("statemad").style.display='block'; 
     					 }else{
                         	  document.getElementById("statemad").style.display='none'; 
                     	 
                     	//  document.getElementById("tgBoxhide").style.display='block'; 
     					 }
     					  document.getElementById("tgBox").style.display='none'; 
                           }else{
                         	  document.getElementById("statemad").style.display='block'; 
                         	//  $scope.tgIns=document.getElementById('tgInsValue').value;
                         	  document.getElementById("tgBox").style.display='block'; 
                         //	  document.getElementById("tgBoxhide").style.display='none'; 
                           }*/
                	  
                      if(newVal.ID == "CA"){
                    	  document.getElementById("statemad").style.display='inline-block'; 
                    	 // $('#InternationalData').hide();
                    	  $scope.IsHidden = true;
                  		$scope.IsShow = false;
                      $scope.usState = [
                        { 'ID': '0' , 'Name': 'Select State'  },
                        { 'ID':'AB', 'Name':'AB-Alberta'  },
						{ 'ID':'BC', 'Name':'BC-British Columbia'  },
						{ 'ID':'MB', 'Name':'MB-Manitoba'  },
						{ 'ID':'NB', 'Name':'NB-New Brunswick'  },
						{ 'ID':'NF', 'Name':'NF-Newfoundland and Labrador'  },
						{ 'ID':'NT', 'Name':'NT-Northwest Territories'  },
						{ 'ID':'NS', 'Name':'NS-Nova Scotia'  },
						{ 'ID':'NU', 'Name':'NU-Nunavut'  },
						{ 'ID':'ON', 'Name':'ON-Ontario'  },
						{ 'ID':'PE', 'Name':'PE-Prince Edward Island'  },
						{ 'ID':'QC', 'Name':'QC-Quebec'  },
						{ 'ID':'SK', 'Name':'SK-Saskatchewan'  },
						{ 'ID':'YT', 'Name':'YT-Yukon'  }];
                      $scope.selectedItem = $scope.usState[0];
                  }else  if(newVal.ID == "IN"){
                	//  $('#InternationalData').show();
                	  document.getElementById("statemad").style.display='none'; 
                	  $scope.IsHidden = true;
              		$scope.IsShow = false;
                      $scope.usState = [ 
                                        { 'ID': '0' , 'Name': 'Select State'  },
        								{ 'ID': 'AN', 'Name': 'AN-Andaman and Nicobar Islands'  },
        								{ 'ID': 'AP', 'Name': 'AP-Andhra Pradesh'  },
        								{ 'ID': 'AR', 'Name': 'AR-Arunachal Pradesh'  },
        								{ 'ID': 'AS', 'Name': 'AS-Assam'  },
        								{ 'ID': 'BR', 'Name': 'BR-Bihar'  },
        								{ 'ID': 'CH', 'Name': 'CH-Chandigarh'  },
        								{ 'ID': 'CT', 'Name': 'CT-Chhattisgarh'  },
        								{ 'ID': 'DN', 'Name': 'DN-Dadra and Nagar Haveli'  },
        								{ 'ID': 'DD', 'Name': 'DD-Daman and Diu'  },
        								{ 'ID': 'DL', 'Name': 'DL-Delhi'  },
        								{ 'ID': 'GA', 'Name': 'GA-Goa'  },
        								{ 'ID': 'GJ', 'Name': 'GJ-Gujarat'  },
        								{ 'ID': 'HR', 'Name': 'HR-Haryana'  },
        								{ 'ID': 'HP', 'Name': 'HP-Himachal Pradesh'  },
        								{ 'ID': 'JK', 'Name': 'JK-Jammu and Kashmir'  },
        								{ 'ID': 'JH', 'Name': 'JH-Jharkhand'  },
        								{ 'ID': 'KA', 'Name': 'KA-Karnataka'  },
        								{ 'ID': 'KL', 'Name': 'KL-Kerala'  },
        								{ 'ID': 'LD', 'Name': 'LD-Lakshadweep'  },
        								{ 'ID': 'MP', 'Name': 'MP-Madhya Pradesh'  },
        								{ 'ID': 'MH', 'Name': 'MH-Maharashtra'  },
        								{ 'ID': 'MN', 'Name': 'MN-Manipur'  },
        								{ 'ID': 'ML', 'Name': 'ML-Meghalaya'  },
        								{ 'ID': 'MZ', 'Name': 'MZ-Mizoram'  },
        								{ 'ID': 'NL', 'Name': 'NL-Nagaland'  },
        								{ 'ID': 'OR', 'Name': 'OR-Orissa'  },
        								{ 'ID': 'PY', 'Name': 'PY-Pondicherry'  },
        								{ 'ID': 'PB', 'Name': 'PB-Punjab'  },
        								{ 'ID': 'RJ', 'Name': 'RJ-Rajasthan'  },
        								{ 'ID': 'SK', 'Name': 'SK-Sikkim'  },
        								{ 'ID': 'TN', 'Name': 'TN-Tamil Nadu'  },
        								{ 'ID': 'TR', 'Name': 'TR-Tripura'  },
        								{ 'ID': 'UP', 'Name': 'UP-Uttar Pradesh'  },
        								{ 'ID': 'UL', 'Name': 'UL-Uttaranchal'  },
        								{ 'ID': 'WB', 'Name': 'WB-West Bengal'  },];
                      $scope.selectedItem = $scope.usState[0];
                                   }else  if(newVal.ID == "AU"){
                                	   document.getElementById("statemad").style.display='none'; 
                                	//   $('#InternationalData').show();
                                	   $scope.IsHidden = true;
                               		$scope.IsShow = false;
                                       $scope.usState = [ 
											{ 'ID': '0', 'Name': 'Select State'  },
											{ 'ID': 'CT', 'Name': 'CT-Australian Capital Territory'  },
											{ 'ID': 'NS', 'Name': 'NS-New South Wales'  },
											{ 'ID': 'NT', 'Name': 'NT-Northern Territory'  },
											{ 'ID': 'QL', 'Name': 'QL-Queensland'  },
											{ 'ID': 'SA', 'Name': 'SA-South Australia'  },
											{ 'ID': 'TS', 'Name': 'TS-Tasmania'  },
											{ 'ID': 'VI', 'Name': 'VI-Victoria'  },
											{ 'ID': 'WA', 'Name': 'WA-Western Australia'  },
                                                         ];
                                       $scope.selectedItem = $scope.usState[0];
                                   }else  if(newVal.ID == "US"){
                                	   document.getElementById("statemad").style.display='inline-block'; 
                                //	   $('#InternationalData').hide();
                                	   $scope.IsHidden = true;
                               		$scope.IsShow = false;
                                       $scope.usState = [ 
                                                         { 'ID': '0' , 'Name': 'Select State'  },
											{ 'ID': 'AA'  ,'Name': 'AA-Armed Forces (the) Americas'  },
											{ 'ID': 'AE'  ,'Name': 'AE-Armed Forces Elsewhere'  },
											{ 'ID': 'AP'  ,'Name': 'AP-Armed Forces Pacific'  },
											{ 'ID': 'AL'  ,'Name': 'AL-Alabama'  },
											{ 'ID': 'AK'  ,'Name': 'AK-Alaska'  },
											{ 'ID': 'AZ'  ,'Name': 'AZ-Arizona'  },
											{ 'ID': 'AR'  ,'Name': 'AR-Arkansas'  },
											{ 'ID': 'CA'  ,'Name': 'CA-California'  },
											{ 'ID': 'CO'  ,'Name': 'CO-Colorado'  },
											{ 'ID': 'CT'  ,'Name': 'CT-Connecticut'  },
											{ 'ID': 'DE'  ,'Name': 'DE-Delaware'  },
											{ 'ID': 'DC'  ,'Name': 'DC-District of Columbia'  },
											{ 'ID': 'FL'  ,'Name': 'FL-Florida'  },
											{ 'ID': 'GA'  ,'Name': 'GA-Georgia'  },
											{ 'ID': 'HI'  ,'Name': 'HI-Hawaii'  },
											{ 'ID': 'ID'  ,'Name': 'ID-Idaho'  },
											{ 'ID': 'IL'  ,'Name': 'IL-Illinois'  },
											{ 'ID': 'IN'  ,'Name': 'IN-Indiania'  },
											{ 'ID': 'IA'  ,'Name': 'IA-Iowa'  },
											{ 'ID': 'KS'  ,'Name': 'KS-Kansas'  },
											{ 'ID': 'KY'  ,'Name': 'KY-Kentucky'  },
											{ 'ID': 'LA'  ,'Name': 'LA-Louisiana'  },
											{ 'ID': 'ME'  ,'Name': 'ME-Maine'  },
											{ 'ID': 'MD'  ,'Name': 'MD-Maryland'  },
											{ 'ID': 'MA'  ,'Name': 'MA-Massachusetts'  },
											{ 'ID': 'MI'  ,'Name': 'MI-Michigan'  },
											{ 'ID': 'MN'  ,'Name': 'MN-Minnesota'  },
											{ 'ID': 'MS'  ,'Name': 'MS-Mississippi'  },
											{ 'ID': 'MO'  ,'Name': 'MO-Missouri'  },
											{ 'ID': 'MT'  ,'Name': 'MT-Montana'  },
											{ 'ID': 'NE'  ,'Name': 'NE-Nebraska'  },
											{ 'ID': 'NV'  ,'Name': 'NV-Nevada'  },
											{ 'ID': 'NH'  ,'Name': 'NH-New Hampshire'  },
											{ 'ID': 'NJ'  ,'Name': 'NJ-New Jersey'  },
											{ 'ID': 'NM'  ,'Name': 'NM-New Mexico'  },
											{ 'ID': 'NY'  ,'Name': 'NY-New York'  },
											{ 'ID': 'NC'  ,'Name': 'NC-North Carolina'  },
											{ 'ID': 'ND'  ,'Name': 'ND-North Dakota'  },
											{ 'ID': 'OH'  ,'Name': 'OH-Ohio'  },
											{ 'ID': 'OK'  ,'Name': 'OK-Oklahoma'  },
											{ 'ID': 'OR'  ,'Name': 'OR-Oregon'  },
											{ 'ID': 'PA'  ,'Name': 'PA-Pennsylvania'  },
											{ 'ID': 'RI'  ,'Name': 'RI-Rhode Island'  },
											{ 'ID': 'SC'  ,'Name': 'SC-South Carolina'  },
											{ 'ID': 'SD'  ,'Name': 'SD-South Dakota'  },
											{ 'ID': 'TN'  ,'Name': 'TN-Tennessee'  },
											{ 'ID': 'TX'  ,'Name': 'TX-Texas'  },
											{ 'ID': 'UT' , 'Name': 'UT-Utah'  },
											{ 'ID': 'VT'  ,'Name': 'VT-Vermont'  },
											{ 'ID': 'VA'  ,'Name': 'VA-Virginia'  },
											{ 'ID': 'WA' , 'Name': 'WA-Washington'  },
											{ 'ID': 'WV' , 'Name': 'WV-West Virginia'  },
											{ 'ID': 'WI' , 'Name': 'WI-Wisconsin'  },
											{ 'ID': 'WY' , 'Name': 'WY-Wyoming'  },
                                                                      ];
                                       $scope.selectedItem = $scope.usState[0];
                                                }else  if(newVal.ID == "0"){
                                                	  document.getElementById("statemad").style.display='none'; 
                                                //	 $('#InternationalData').hide();
                                                	$scope.IsHidden = true;
                                            		$scope.IsShow = false;
                                                    $scope.usState = [ 
                                                                    { 'ID': '0' , 'Name': 'Select State'  },
                                                                    { 'ID': 'AA'  ,'Name': 'AA-Armed Forces (the) Americas'  },
                        											{ 'ID': 'AE'  ,'Name': 'AE-Armed Forces Elsewhere'  },
                        											{ 'ID': 'AP'  ,'Name': 'AP-Armed Forces Pacific'  },
                        											{ 'ID': 'AL'  ,'Name': 'AL-Alabama'  },
                        											{ 'ID': 'AK'  ,'Name': 'AK-Alaska'  },
                        											{ 'ID': 'AZ'  ,'Name': 'AZ-Arizona'  },
                        											{ 'ID': 'AR'  ,'Name': 'AR-Arkansas'  },
                        											{ 'ID': 'CA'  ,'Name': 'CA-California'  },
                        											{ 'ID': 'CO'  ,'Name': 'CO-Colorado'  },
                        											{ 'ID': 'CT'  ,'Name': 'CT-Connecticut'  },
                        											{ 'ID': 'DE'  ,'Name': 'DE-Delaware'  },
                        											{ 'ID': 'DC'  ,'Name': 'DC-District of Columbia'  },
                        											{ 'ID': 'FL'  ,'Name': 'FL-Florida'  },
                        											{ 'ID': 'GA'  ,'Name': 'GA-Georgia'  },
                        											{ 'ID': 'HI'  ,'Name': 'HI-Hawaii'  },
                        											{ 'ID': 'ID'  ,'Name': 'ID-Idaho'  },
                        											{ 'ID': 'IL'  ,'Name': 'IL-Illinois'  },
                        											{ 'ID': 'IN'  ,'Name': 'IN-Indiania'  },
                        											{ 'ID': 'IA'  ,'Name': 'IA-Iowa'  },
                        											{ 'ID': 'KS'  ,'Name': 'KS-Kansas'  },
                        											{ 'ID': 'KY'  ,'Name': 'KY-Kentucky'  },
                        											{ 'ID': 'LA'  ,'Name': 'LA-Louisiana'  },
                        											{ 'ID': 'ME'  ,'Name': 'ME-Maine'  },
                        											{ 'ID': 'MD'  ,'Name': 'MD-Maryland'  },
                        											{ 'ID': 'MA'  ,'Name': 'MA-Massachusetts'  },
                        											{ 'ID': 'MI'  ,'Name': 'MI-Michigan'  },
                        											{ 'ID': 'MN'  ,'Name': 'MN-Minnesota'  },
                        											{ 'ID': 'MS'  ,'Name': 'MS-Mississippi'  },
                        											{ 'ID': 'MO'  ,'Name': 'MO-Missouri'  },
                        											{ 'ID': 'MT'  ,'Name': 'MT-Montana'  },
                        											{ 'ID': 'NE'  ,'Name': 'NE-Nebraska'  },
                        											{ 'ID': 'NV'  ,'Name': 'NV-Nevada'  },
                        											{ 'ID': 'NH'  ,'Name': 'NH-New Hampshire'  },
                        											{ 'ID': 'NJ'  ,'Name': 'NJ-New Jersey'  },
                        											{ 'ID': 'NM'  ,'Name': 'NM-New Mexico'  },
                        											{ 'ID': 'NY'  ,'Name': 'NY-New York'  },
                        											{ 'ID': 'NC'  ,'Name': 'NC-North Carolina'  },
                        											{ 'ID': 'ND'  ,'Name': 'ND-North Dakota'  },
                        											{ 'ID': 'OH'  ,'Name': 'OH-Ohio'  },
                        											{ 'ID': 'OK'  ,'Name': 'OK-Oklahoma'  },
                        											{ 'ID': 'OR'  ,'Name': 'OR-Oregon'  },
                        											{ 'ID': 'PA'  ,'Name': 'PA-Pennsylvania'  },
                        											{ 'ID': 'RI'  ,'Name': 'RI-Rhode Island'  },
                        											{ 'ID': 'SC'  ,'Name': 'SC-South Carolina'  },
                        											{ 'ID': 'SD'  ,'Name': 'SD-South Dakota'  },
                        											{ 'ID': 'TN'  ,'Name': 'TN-Tennessee'  },
                        											{ 'ID': 'TX'  ,'Name': 'TX-Texas'  },
                        											{ 'ID': 'UT' , 'Name': 'UT-Utah'  },
                        											{ 'ID': 'VT'  ,'Name': 'VT-Vermont'  },
                        											{ 'ID': 'VA'  ,'Name': 'VA-Virginia'  },
                        											{ 'ID': 'WA' , 'Name': 'WA-Washington'  },
                        											{ 'ID': 'WV' , 'Name': 'WV-West Virginia'  },
                        											{ 'ID': 'WI' , 'Name': 'WI-Wisconsin'  },
                        											{ 'ID': 'WY' , 'Name': 'WY-Wyoming'  },
                                                                                                ];
                                                    $scope.selectedItem = $scope.usState[0];
                                                                          }else{
                                                                        	  document.getElementById("statemad").style.display='none'; 
                                                                        	//  $('#InternationalData').show();
                                                                        	  $scope.IsHidden = false;
                                                                      		$scope.IsShow = true;
                                                	
                                                }
                  }
              });
			  
			  
			  $timeout(function() {
		      $scope.countryList=[
                        { 'ID': '0' , 'Name': 'Select Country'  },
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
			                     { 'ID': 'AA'  ,'Name': 'AA-Armed Forces (the) Americas'  },
									{ 'ID': 'AE'  ,'Name': 'AE-Armed Forces Elsewhere'  },
									{ 'ID': 'AP'  ,'Name': 'AP-Armed Forces Pacific'  },
									{ 'ID': 'AL'  ,'Name': 'AL-Alabama'  },
									{ 'ID': 'AK'  ,'Name': 'AK-Alaska'  },
									{ 'ID': 'AZ'  ,'Name': 'AZ-Arizona'  },
									{ 'ID': 'AR'  ,'Name': 'AR-Arkansas'  },
									{ 'ID': 'CA'  ,'Name': 'CA-California'  },
									{ 'ID': 'CO'  ,'Name': 'CO-Colorado'  },
									{ 'ID': 'CT'  ,'Name': 'CT-Connecticut'  },
									{ 'ID': 'DE'  ,'Name': 'DE-Delaware'  },
									{ 'ID': 'DC'  ,'Name': 'DC-District of Columbia'  },
									{ 'ID': 'FL'  ,'Name': 'FL-Florida'  },
									{ 'ID': 'GA'  ,'Name': 'GA-Georgia'  },
									{ 'ID': 'HI'  ,'Name': 'HI-Hawaii'  },
									{ 'ID': 'ID'  ,'Name': 'ID-Idaho'  },
									{ 'ID': 'IL'  ,'Name': 'IL-Illinois'  },
									{ 'ID': 'IN'  ,'Name': 'IN-Indiania'  },
									{ 'ID': 'IA'  ,'Name': 'IA-Iowa'  },
									{ 'ID': 'KS'  ,'Name': 'KS-Kansas'  },
									{ 'ID': 'KY'  ,'Name': 'KY-Kentucky'  },
									{ 'ID': 'LA'  ,'Name': 'LA-Louisiana'  },
									{ 'ID': 'ME'  ,'Name': 'ME-Maine'  },
									{ 'ID': 'MD'  ,'Name': 'MD-Maryland'  },
									{ 'ID': 'MA'  ,'Name': 'MA-Massachusetts'  },
									{ 'ID': 'MI'  ,'Name': 'MI-Michigan'  },
									{ 'ID': 'MN'  ,'Name': 'MN-Minnesota'  },
									{ 'ID': 'MS'  ,'Name': 'MS-Mississippi'  },
									{ 'ID': 'MO'  ,'Name': 'MO-Missouri'  },
									{ 'ID': 'MT'  ,'Name': 'MT-Montana'  },
									{ 'ID': 'NE'  ,'Name': 'NE-Nebraska'  },
									{ 'ID': 'NV'  ,'Name': 'NV-Nevada'  },
									{ 'ID': 'NH'  ,'Name': 'NH-New Hampshire'  },
									{ 'ID': 'NJ'  ,'Name': 'NJ-New Jersey'  },
									{ 'ID': 'NM'  ,'Name': 'NM-New Mexico'  },
									{ 'ID': 'NY'  ,'Name': 'NY-New York'  },
									{ 'ID': 'NC'  ,'Name': 'NC-North Carolina'  },
									{ 'ID': 'ND'  ,'Name': 'ND-North Dakota'  },
									{ 'ID': 'OH'  ,'Name': 'OH-Ohio'  },
									{ 'ID': 'OK'  ,'Name': 'OK-Oklahoma'  },
									{ 'ID': 'OR'  ,'Name': 'OR-Oregon'  },
									{ 'ID': 'PA'  ,'Name': 'PA-Pennsylvania'  },
									{ 'ID': 'RI'  ,'Name': 'RI-Rhode Island'  },
									{ 'ID': 'SC'  ,'Name': 'SC-South Carolina'  },
									{ 'ID': 'SD'  ,'Name': 'SD-South Dakota'  },
									{ 'ID': 'TN'  ,'Name': 'TN-Tennessee'  },
									{ 'ID': 'TX'  ,'Name': 'TX-Texas'  },
									{ 'ID': 'UT' , 'Name': 'UT-Utah'  },
									{ 'ID': 'VT'  ,'Name': 'VT-Vermont'  },
									{ 'ID': 'VA'  ,'Name': 'VA-Virginia'  },
									{ 'ID': 'WA' , 'Name': 'WA-Washington'  },
									{ 'ID': 'WV' , 'Name': 'WV-West Virginia'  },
									{ 'ID': 'WI' , 'Name': 'WI-Wisconsin'  },
									{ 'ID': 'WY' , 'Name': 'WY-Wyoming'  },
			                 ];
			  
			  $scope.usPhone = [ 
			                    { 'ID': '1','Name': 'Puerto Rico (1)'},
			                    { 'ID': '93','Name': 'Afghanistan (93)'},
			                    { 'ID': '355','Name': 'Albania (355)'},
			                    { 'ID': '213','Name': 'Algeria (213)'},
			                    { 'ID': '1684','Name': 'American Samoa (1684)'},
			                    { 'ID': '376','Name': 'Andorra (376)'},
			                    { 'ID': '244','Name': 'Angola (244)'},
			                    { 'ID': '1264','Name': 'Anguilla (1264)'},
			                    { 'ID': '672','Name': 'Antarctica (672)'},
			                    { 'ID': '1268','Name': 'Antigua and Barbuda (1268)'},
			                    { 'ID': '54','Name': 'Argentina (54)'},
			                    { 'ID': '297','Name': 'Aruba (297)'},
			                    { 'ID': '61','Name': 'Australia (61)'},
			                    { 'ID': '43','Name': 'Austria (43)'},
			                    { 'ID': '1242','Name': 'Bahamas (1242)'},
			                    { 'ID': '973','Name': 'Bahrain (973)'},
			                    { 'ID': '880','Name': 'Bangladesh (880)'},
			                    { 'ID': '1246','Name': 'Barbados (1246)'},
			                    { 'ID': '32','Name': 'Belgium (32)'},
			                    { 'ID': '501','Name': 'Belize (501)'},
			                    { 'ID': '229','Name': 'Benin (229)'},
			                    { 'ID': '1441','Name': 'Bermuda (1441)'},
			                    { 'ID': '975','Name': 'Bhutan (975)'},
			                    { 'ID': '591','Name': 'Bolivia (591)'},
			                    { 'ID': '387','Name': 'Bosnia and Herzegovina (387)'},
			                    { 'ID': '267','Name': 'Botswana (267)'},
			                    { 'ID': '55','Name': 'Brazil (55)'},
			                    { 'ID': '673','Name': 'Brunei (673)'},
			                    { 'ID': '359','Name': 'Bulgaria (359)'},
			                    { 'ID': '226','Name': 'Burkina Faso (226)'},
			                    { 'ID': '257','Name': 'Burundi (257)'},
			                    { 'ID': '855','Name': 'Cambodia (855)'},
			                    { 'ID': '237','Name': 'Cameroon (237)'},
			                    { 'ID': '1','Name': 'Canada (1)'},
			                    { 'ID': '238','Name': 'Cape Verde (238)'},
			                    { 'ID': '1345','Name': 'Cayman Islands (1345)'},
			                    { 'ID': '236','Name': 'Central African Republic (236)'},
			                    { 'ID': '235','Name': 'Chad (235)'},
			                    { 'ID': '56','Name': 'Chile (56)'},
			                    { 'ID': '86','Name': 'China (86)'},
			                    { 'ID': '61','Name': 'Christmas Island (61)'},
			                    { 'ID': '61','Name': 'Cocos (Keeling) Islands (61)'},
			                    { 'ID': '57','Name': 'Colombia (57)'},
			                    { 'ID': '269','Name': 'Comoros (269)'},
			                    { 'ID': '243','Name': 'Democratic Republic of the Congo (243)'},
			                    { 'ID': '682','Name': 'Cook Islands (682)'},
			                    { 'ID': '506','Name': 'Costa Rica (506)'},
			                    { 'ID': '385','Name': 'Croatia (385)'},
			                    { 'ID': '357','Name': 'Cyprus (357)'},
			                    { 'ID': '420','Name': 'Czech Republic (420)'},
			                    { 'ID': '45','Name': 'Denmark (45)'},
			                    { 'ID': '253','Name': 'Djibouti (253)'},
			                    { 'ID': '1767','Name': 'Dominica (1767)'},
			                    { 'ID': '1809','Name': 'Dominican Republic (1809)'},
			                    { 'ID': '593','Name': 'Ecuador (593)'},
			                    { 'ID': '20','Name': 'Egypt (20)'},
			                    { 'ID': '503','Name': 'El Salvador (503)'},
			                    { 'ID': '240','Name': 'Equatorial Guinea (240)'},
			                    { 'ID': '372','Name': 'Estonia (372)'},
			                    { 'ID': '251','Name': 'Ethiopia (251)'},
			                    { 'ID': '500','Name': 'Falkland Islands (500)'},
			                    { 'ID': '298','Name': 'Faroe Islands (298)'},
			                    { 'ID': '679','Name': 'Fiji (679)'},
			                    { 'ID': '358','Name': 'Finland (358)'},
			                    { 'ID': '33','Name': 'France (33)'},
			                    { 'ID': '594','Name': 'French Guiana(594)'},
			                    { 'ID': '689','Name': 'French Polynesia (689)'},
			                    { 'ID': '241','Name': 'Gabon (241)'},
			                    { 'ID': '220','Name': 'Gambia (220)'},
			                    { 'ID': '49','Name': 'Germany (49)'},
			                    { 'ID': '233','Name': 'Ghana (233)'},
			                    { 'ID': '350','Name': 'Gibraltar (350)'},
			                    { 'ID': '30','Name': 'Greece (30)'},
			                    { 'ID': '299','Name': 'Greenland (299)'},
			                    { 'ID': '1473','Name': 'Grenada (1473)'},
			                    { 'ID': '1784','Name': 'Saint Vincent and the Grenadines (1784)'},
			                    { 'ID': '1671','Name': 'Guam (1671)'},
			                    { 'ID': '502','Name': 'Guatemala (502)'},
			                    { 'ID': '224','Name': 'Guinea (224)'},
			                    { 'ID': '245','Name': 'Guinea-Bissau (245)'},
			                    { 'ID': '592','Name': 'Guyana (592)'},
			                    { 'ID': '509','Name': 'Haiti (509)'},
			                    { 'ID': '504','Name': 'Honduras (504)'},
			                    { 'ID': '852','Name': 'Hong Kong (852)'},
			                    { 'ID': '36','Name': 'Hungary (36)'},
			                    { 'ID': '354','Name': 'Iceland (354)'},
			                    { 'ID': '91','Name': 'India (91)'},
			                    { 'ID': '62','Name': 'Indonesia (62)'},
			                    { 'ID': '98','Name': 'Iran (98)'},
			                    { 'ID': '964','Name': 'Iraq (964)'},
			                    { 'ID': '353','Name': 'Ireland (353)'},
			                    { 'ID': '972','Name': 'Israel (972)'},
			                    { 'ID': '39','Name': 'Italy (39)'},
			                    { 'ID': '225','Name': 'Ivory Coast (225)'},
			                    { 'ID': '1876','Name': 'Jamaica (1876)'},
			                    { 'ID': '81','Name': 'Japan (81)'},
			                    { 'ID': '962','Name': 'Jordan (962)'},
			                    { 'ID': '254','Name': 'Kenya (254)'},
			                    { 'ID': '686','Name': 'Kiribati (686)'},
			                    { 'ID': '850','Name': 'North Korea (850)'},
			                    { 'ID': '82','Name': 'South Korea (82)'},
			                    { 'ID': '965','Name': 'Kuwait (965)'},
			                    { 'ID': '371','Name': 'Latvia (371)'},
			                    { 'ID': '961','Name': 'Lebanon (961)'},
			                    { 'ID': '266','Name': 'Lesotho (266)'},
			                    { 'ID': '231','Name': 'Liberia (231)'},
			                    { 'ID': '370','Name': 'Lithuania (370)'},
			                    { 'ID': '352','Name': 'Luxembourg (352)'},
			                    { 'ID': '853','Name': 'Macau (853)'},
			                    { 'ID': '261','Name': 'Madagascar (261)'},
			                    { 'ID': '265','Name': 'Malawi (265)'},
			                    { 'ID': '60','Name': 'Malaysia (60)'},
			                    { 'ID': '960','Name': 'Maldives (960)'},
			                    { 'ID': '223','Name': 'Mali (223)'},
			                    { 'ID': '356','Name': 'Malta (356)'},
			                    { 'ID': '692','Name': 'Marshall Islands (692)'},
			                    { 'ID': '596','Name': 'Martinique(596)'},
			                    { 'ID': '222','Name': 'Mauritania (222)'},
			                    { 'ID': '230','Name': 'Mauritius (230)'},
			                    { 'ID': '262','Name': 'Mayotte (262)'},
			                    { 'ID': '52','Name': 'Mexico (52)'},
			                    { 'ID': '691','Name': 'Micronesia (691)'},
			                    { 'ID': '373','Name': 'Moldova (373)'},
			                    { 'ID': '377','Name': 'Monaco (377)'},
			                    { 'ID': '976','Name': 'Mongolia (976)'},
			                    { 'ID': '1664','Name': 'Montserrat (1664)'},
			                    { 'ID': '212','Name': 'Morocco (212)'},
			                    { 'ID': '258','Name': 'Mozambique (258)'},
			                    { 'ID': '95','Name': 'Burma (Myanmar) (95)'},
			                    { 'ID': '264','Name': 'Namibia (264)'},
			                    { 'ID': '674','Name': 'Nauru (674)'},
			                    { 'ID': '977','Name': 'Nepal (977)'},
			                    { 'ID': '31','Name': 'Netherlands (31)'},
			                    { 'ID': '599','Name': 'Netherlands Antilles (599)'},
			                    { 'ID': '687','Name': 'New Caledonia (687)'},
			                    { 'ID': '64','Name': 'New Zealand (64)'},
			                    { 'ID': '505','Name': 'Nicaragua (505)'},
			                    { 'ID': '227','Name': 'Niger (227)'},
			                    { 'ID': '234','Name': 'Nigeria (234)'},
			                    { 'ID': '683','Name': 'Niue (683)'},
			                    { 'ID': '672','Name': 'Norfolk Island(672)'},
			                    { 'ID': '1670','Name': 'Northern Mariana Islands (1670)'},
			                    { 'ID': '47','Name': 'Norway (47)'},
			                    { 'ID': '968','Name': 'Oman (968)'},
			                    { 'ID': '92','Name': 'Pakistan (92)'},
			                    { 'ID': '680','Name': 'Palau (680)'},
			                    { 'ID': '507','Name': 'Panama (507)'},
			                    { 'ID': '675','Name': 'Papua New Guinea (675)'},
			                    { 'ID': '595','Name': 'Paraguay (595)'},
			                    { 'ID': '51','Name': 'Peru (51)'},
			                    { 'ID': '63','Name': 'Philippines (63)'},
			                    { 'ID': '48','Name': 'Poland (48)'},
			                    { 'ID': '351','Name': 'Portugal (351)'},
			                    { 'ID': '1','Name': 'United States (1)'},
			                    { 'ID': '974','Name': 'Qatar (974)'},
			                    { 'ID': '40','Name': 'Romania (40)'},
			                    { 'ID': '7','Name': 'Russia (7)'},
			                    { 'ID': '250','Name': 'Rwanda (250)'},
			                    { 'ID': '1758','Name': 'Saint Lucia (1758)'},
			                    { 'ID': '685','Name': 'Samoa (685)'},
			                    { 'ID': '378','Name': 'San Marino (378)'},
			                    { 'ID': '239','Name': 'Sao Tome and Principe (239)'},
			                    { 'ID': '966','Name': 'Saudi Arabia (966)'},
			                    { 'ID': '221','Name': 'Senegal (221)'},
			                    { 'ID': '248','Name': 'Seychelles (248)'},
			                    { 'ID': '232','Name': 'Sierra Leone (232)'},
			                    { 'ID': '65','Name': 'Singapore (65)'},
			                    { 'ID': '421','Name': 'Slovakia (421)'},
			                    { 'ID': '386','Name': 'Slovenia (386)'},
			                    { 'ID': '677','Name': 'Solomon Islands (677)'},
			                    { 'ID': '252','Name': 'Somalia (252)'},
			                    { 'ID': '27','Name': 'South Africa (27)'},
			                    { 'ID': '34','Name': 'Spain (34)'},
			                    { 'ID': '94','Name': 'Sri Lanka (94)'},
			                    { 'ID': '290','Name': 'Saint Helena (290)'},
			                    { 'ID': '1869','Name': 'Saint Kitts and Nevis (1869)'},
			                    { 'ID': '508','Name': 'Saint Pierre and Miquelon (508)'},
			                    { 'ID': '249','Name': 'Sudan (249)'},
			                    { 'ID': '597','Name': 'Suriname (597)'},
			                    { 'ID': '268','Name': 'Swaziland (268)'},
			                    { 'ID': '46','Name': 'Sweden (46)'},
			                    { 'ID': '41','Name': 'Switzerland (41)'},
			                    { 'ID': '963','Name': 'Syria (963)'},
			                    { 'ID': '886','Name': 'Taiwan (886)'},
			                    { 'ID': '255','Name': 'Tanzania (255)'},
			                    { 'ID': '66','Name': 'Thailand (66)'},
			                    { 'ID': '228','Name': 'Togo (228)'},
			                    { 'ID': '676','Name': 'Tonga (676)'},
			                    { 'ID': '1868','Name': 'Trinidad and Tobago (1868)'},
			                    { 'ID': '216','Name': 'Tunisia (216)'},
			                    { 'ID': '90','Name': 'Turkey (90)'},
			                    { 'ID': '1649','Name': 'Turks and Caicos Islands (1649)'},
			                    { 'ID': '688','Name': 'Tuvalu (688)'},
			                    { 'ID': '256','Name': 'Uganda (256)'},
			                    { 'ID': '380','Name': 'Ukraine (380)'},
			                    { 'ID': '971','Name': 'United Arab Emirates (971)'},
			                    { 'ID': '44','Name': 'United Kingdom (44)'},
			                    { 'ID': '598','Name': 'Uruguay (598)'},
			                    { 'ID': '678','Name': 'Vanuatu (678)'},
			                    { 'ID': '58','Name': 'Venezuela (58)'},
			                    { 'ID': '84','Name': 'Vietnam (84)'},
			                    { 'ID': '1 284  ','Name': 'British Virgin Islands (1 284  )'},
			                    { 'ID': '1340','Name': 'US Virgin Islands (1340)'},
			                    { 'ID': '681','Name': 'Wallis and Futuna (681)'},
			                    { 'ID': '967','Name': 'Yemen (967)'},
			                    { 'ID': '243','Name': 'Zaire(243)'},
			                    { 'ID': '260','Name': 'Zambia (260)'},
			                    { 'ID': '263','Name': 'Zimbabwe (263)'},
			                    { 'ID': '374','Name': 'Armenia (374)'},
			                    { 'ID': '994','Name': 'Azerbaijan (994)'},
			                    { 'ID': '375','Name': 'Belarus (375)'},
			                    { 'ID': '53','Name': 'Cuba (53)'},
			                    { 'ID': '291','Name': 'Eritrea (291)'},
			                    { 'ID': '970','Name': 'Gaza Strip (970)'},
			                    { 'ID': '995','Name': 'Georgia (995)'},
			                    { 'ID': '39','Name': 'Holy See (Vatican City) (39)'},
			                    { 'ID': '7','Name': 'Kazakhstan (7)'},
			                    { 'ID': '381','Name': 'Kosovo (381)'},
			                    { 'ID': '996','Name': 'Kyrgyzstan (996)'},
			                    { 'ID': '856','Name': 'Laos (856)'},
			                    { 'ID': '218','Name': 'Libya (218)'},
			                    { 'ID': '423','Name': 'Liechtenstein (423)'},
			                    { 'ID': '389','Name': 'Macedonia (389)'},
			                    { 'ID': '382','Name': 'Montenegro (382)'},
			                    { 'ID': '850','Name': 'North Korea (850)'},
			                    { 'ID': '870','Name': 'Pitcairn Islands (870)'},
			                    { 'ID': '590','Name': 'Saint Barthelemy (590)'},
			                    { 'ID': '1599','Name': 'Saint Martin (1599)'},
			                    { 'ID': '381','Name': 'Serbia (381)'},
			                    { 'ID': '82','Name': 'South Korea (82)'},
			                    { 'ID': '992','Name': 'Tajikistan (992)'},
			                    { 'ID': '690','Name': 'Tokelau (690)'},
			                    { 'ID': '670','Name': 'Timor-Leste (670)'},
			                    { 'ID': '993','Name': 'Turkmenistan (993)'},
			                    { 'ID': '998','Name': 'Uzbekistan (998)'},
			                    { 'ID': '970','Name': 'West Bank (970)'},

			                    ];
			  $scope.selectedCountry = $scope.countryList[0];
			  $scope.selectedItem = $scope.usState[0];
			  $scope.usPhoneCode = $scope.usPhone[0];
			  
			  
        	  for (var i = 0; i < $scope.totPax; ++i) {
        		  $scope.DobDate[i]="Day";
    			  $scope.DobMonth[i]="0";
    			  $scope.DobYear[i]="Year";
        	  }
			  
			//  alert($scope.selectedCountry);
			//  alert($scope.countryList[0]['ID']);
			 // $scope.option = $scope.item['Values'][0]['Name'];
			  }, 1000);
	}])
})();

/*TF*/

function pricechanged(id)
 {
	if(id == 'Y') {
		$(".pricechangepop").css('display', 'none');
	}else if(id == 'N') {
		$(".pricechangepop").css('display', 'none');
		goBack();
	}else {		
	}
	
 };
 
 //tf_luggage
 


 
/* function getLuggage(lugglist,id,lugtype)   //lugtype  l,ol,rl
 {
	 alert("------");	 
	 //alert("---"+luglist.length);
	 
	 var obj = jQuery.parseJSON( '{ "name": "John" }' );
	 alert( obj.name === "John" );
 };*/
 
 function luggageDisplay(id,lugtype)   //lugtype  l,ol,rl
 {
	 alert("------");
	 //alert("---"+luglist.length);	 
	/* var obj = jQuery.parseJSON( '{ "name": "John" }' );
	 alert( obj.name === "John" );*/
	 alert("--"+id);
	 alert("----"+lugtype);
 };
 
 function getLuggage(id,lugtype)   //lugtype  l,ol,rl  pass${vs.index}L pass${vs.index}R
 {
 	//console.log("lugid "+id+"lugtype "+lugtype) 	
 	
 	var paxid="pass"+id+lugtype;
 	
 	
 	
 	//console.log(paxid+" - "+document.getElementById(paxid).value)
 	
 	
 	//var tfcls=document.getElementById('tfcls').value;
 	//var totaltfValue=document.getElementById('totaltfValue').value;
 	
 	var luglid='';  var lugolid='';	var lugrlid='';
 	//var lamid='';  var olamid='';	var rlamid='';
 	
 	var totlam=0.0;  var totolam=0.0;  var totrlam=0.0;
 	var totTFamt=0.0;
 	
 	
 	var paxl=Number($("#paxlen").html());
 	//alert(paxl)
 	for(var i=0;i<paxl;i++)
 		{
 			luglid='pass'+i+'L';  lugolid='pass'+i+'O';  lugrlid='pass'+i+'R';
 			
 			try {
 				if (document.getElementById(luglid).value != 0) {
 					var lugglist = document.getElementById(luglid).value.split(",");
 					var lrowid = lugglist[0];  var lamt = lugglist[1];  var ltfamt = 0;
 					if (lugglist.length > 2)
 						ltfamt = lugglist[2];
 					totlam=Number(totlam)+Number(lamt);
 					totTFamt=Number(totTFamt)+Number(ltfamt);
 				}
 			} catch (e) {
 				
 			}
 			try {
 			if(document.getElementById(lugolid).value !=0) {
 				var lugglist = document.getElementById(lugolid).value.split(",");
 				var lrowid=lugglist[0];  var lamt=lugglist[1];  var ltfamt=0;
 				if(lugglist.length > 2)
 				ltfamt=lugglist[2];
 				totolam=Number(totolam)+Number(lamt);
 				totTFamt=Number(totTFamt)+Number(ltfamt);
 			 }
 			} catch (e) {
 						
 					}
 			try {
 			if(document.getElementById(lugrlid).value !=0) {
 				var lugglist = document.getElementById(lugrlid).value.split(",");
 				var lrowid=lugglist[0];  var lamt=lugglist[1];  var ltfamt=0;
 				if(lugglist.length > 2)
 				ltfamt=lugglist[2];
 				totrlam=Number(totrlam)+Number(lamt);
 				totTFamt=Number(totTFamt)+Number(ltfamt);
 			 }
 			} catch (e) {
 				
 			}
 		
 			var currencyRess=Number($('#convRatio').val());
 			
 			$('#lugg_L').html((totlam*currencyRess).toFixed(2));
 			$('#lugg_O').html((totolam*currencyRess).toFixed(2));
 			$('#lugg_R').html((totrlam*currencyRess).toFixed(2));
 			
 			if(Number(totlam) > 0.0) {
 				document.getElementById('luggdisplay_L').style.display = "block";
 			}else{
 				document.getElementById('luggdisplay_L').style.display = "none";
 			}
 			if(Number(totolam) > 0.0) {
 				document.getElementById('luggdisplay_O').style.display = "block";
 			}else {
 				document.getElementById('luggdisplay_O').style.display = "none";
 			}
 			if(Number(totrlam) > 0.0) {
 				document.getElementById('luggdisplay_R').style.display = "block";
 			}else {
 				document.getElementById('luggdisplay_R').style.display = "none";
 			}
 			
 			//xegrandtotal
 			var totlug=Number(totlam)+Number(totolam)+Number(totrlam);
 			
 			
 			macpSet("LG",totlug,"Y");
 			
 			$("#totlugamt").val(totlug);
 				
 			//console.log("totTFamt "+ (Number(totTFamt)+Number(totaltfValue)))
 			//document.getElementById('tfpublishedFare').innerHTML="<h4><i class='fa fa-"+tfcls+"'></i>"+putThousandsSeparators((Number(totTFamt)+Number(totaltfValue)).toFixed(2))+"</h4>";				
 			//document.getElementById('tfpublishedFareMsg').innerHTML="<h7><i class='fa fa-"+tfcls+"'></i>"+putThousandsSeparators((Number(totTFamt)+Number(totaltfValue)).toFixed(2))+"</h7>";
 		}
 	  
 };
 
 function precisionRound(number, precision) {
	  var factor = Math.pow(10, precision);
	  return Math.round(number * factor) / factor;
	};
	$(".address2").change(function() {
		try {
			 var v1 = $(".address2").val();
			 if ( v1.length > 0 ) {
				if($(".address2").hasClass("has-error")){
					//radio-class
					$(".address2").removeClass("has-error radio-class").addClass("valid");
					
				}
			 }		
		} catch (e) {
			alert("Handler for .change() called")
		}
	});

function isChecked(checkbox, btnSearchFlights) {
document.getElementById(btnSearchFlights).disabled = !checkbox.checked;
}


