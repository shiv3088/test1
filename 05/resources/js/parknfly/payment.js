(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
        	$('.numbersOnly').keyup(function () {
        	    if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
        	       this.value = this.value.replace(/[^0-9\.]/g, '');
        	    }
        	});
        	/* $('.groupOfAmont').keypress(function (event) {
        		 var a = event.charCode;
        	        if(a==0){return;}
                 return isNumber(event, this)
             });
        	 */
        	 $('.groupOfAmont').keyup(function(){
        		    var val = $(this).val();
        		    if(isNaN(val)){
        		         val = val.replace(/[^0-9\.]/g,'');
        		         if(val.split('.').length>2){ 
        		             val =val.replace(/\.+$/,"");
        		         }
        		        
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
            	console.log("Payment Card : "+$("#payment-card").val());
            	if($("#payment-card").val()=="American Express"){
            		   var src = "/resources/assets/ccv-img2.gif";
                       $("#ccvimg").attr("src", src);
                       $("#tooltip").html("<span  class=\"ccv-card\">4 Digit Number From Your Card<span class='cardImg'></span></span>");
                       $("#tooltipm").html("<span  class=\"ccv-card\">4 Digit Number From Your Card<span class='cardImg'></span></span>");
            	}else if($("#payment-card").val()=="Master Card"){
           		 var src = "/resources/assets/ccv-img.gif";
                 $("#ccvimg").attr("src", src);
                 $("#tooltip").html("<span class=\"ccv-card\">3/4 Digit Number From Your Card<span class='cardImg'></span></span>");
                 $("#tooltipm").html("<span class=\"ccv-card\">3/4 Digit Number From Your Card<span class='cardImg'></span></span>");
        	    }else{
            		   var src = "/resources/assets/ccv-img.gif";
                       $("#ccvimg").attr("src", src);
                       $("#tooltip").html("<span class=\"ccv-card\">3 Digit Number From Your Card<span class='cardImg'></span></span>");
                       $("#tooltipm").html("<span class=\"ccv-card\">3 Digit Number From Your Card<span class='cardImg'></span></span>");
            	}
            	
            	var card_number = jQuery("#Payments_CardNumber").val();
            	if(card_number == ""){
            		card_number = jQuery("#Payments_MaskCardNumber").val();
            	}
            	 var value=jQuery("#Payments_MaskCardNumber").val();
            	    if(value.indexOf('*') >= 0){
            	    	
            	    }else{
            	    	if(value != ""){
            	    		card_number = jQuery("#Payments_MaskCardNumber").val();
            	    	}
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
            		   var src = "/resources/assets/ccv-img2.gif";
                       $("#ccvimg2").attr("src", src);
                       $("#tooltip2").html("<span  class=\"ccv-card\">4 Digit Number From Your Card<span class='cardImg'></span></span>");
                       $("#tooltipm2").html("<span  class=\"ccv-card\">4 Digit Number From Your Card<span class='cardImg'></span></span>");
            	}else if($("#payment-card2").val()=="Master Card"){
           		 var src = "/resources/assets/ccv-img.gif";
                 $("#ccvimg2").attr("src", src);
                 $("#tooltip2").html("<span class=\"ccv-card\">3/4 Digit Number From Your Card<span class='cardImg'></span></span>");
                 $("#tooltipm2").html("<span class=\"ccv-card\">3/4 Digit Number From Your Card<span class='cardImg'></span></span>");
        	    }else{
            		   var src = "/resources/assets/ccv-img.gif";
                       $("#ccvimg2").attr("src", src);
                       $("#tooltip2").html("<span class=\"ccv-card\">3 Digit Number From Your Card<span class='cardImg'></span></span>");
                       $("#tooltipm2").html("<span class=\"ccv-card\">3 Digit Number From Your Card<span class='cardImg'></span></span>");
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
                	       'passengerList[0].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                		   'passengerList[0].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'passengerList[0].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
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
                			'passengerList[1].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                		    'passengerList[1].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                		    
                			}, 
                			'passengerList[1].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
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
                			'passengerList[2].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			 'passengerList[2].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[2].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
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
                			'passengerList[3].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			 'passengerList[3].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[3].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
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
                			'passengerList[4].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			 'passengerList[4].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[4].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
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
                			'passengerList[5].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			 'passengerList[5].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[5].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
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
                			'passengerList[6].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			 'passengerList[6].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[6].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
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
                			 'passengerList[7].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[7].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			'passengerList[7].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true,
               		        age_val:7
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
                			'passengerList[8].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			'passengerList[8].FirstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerList[8].LastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
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
                		            else{
                		                return 16;
                		            } },
                				maxlength:function(element){
                		            if($("#payment-card").val()=="American Express"){
                		                return 15;
                		            }
                		            else{
                		                return 16;
                		            } },
                			},
                			'customerDetail.firstName':{
                				required: true,
                				requiredTextvalue: true,
                			    lettersonly: true
                			},
                			'customerDetail.lastName':{
                				required: true,
                				requiredTextvalue: true,
                			    lettersonly: true
                			},
                			'payment.cardNumber': {
                				required: true,
                				number:true,
                		        ccCheckvalue:true,
                		      /*  depends: function(element) {
                                    return (cc_brand_id($("#Payments_CardNumber").val(),$("#payment-card").val()));
                                },*/
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
								'payment.cardNumber2': {
									required2:true,
                				number:true,
                		     
                		        minlength : function(element){
                		        	
                		            if($("#payment-card2").val()=="American Express"){
                		                return 15;
                		            }
                		            else{
                		                return 16;
                		            } },
                				//minlength: 15,
                				maxlength:function(element){
                		            if($("#payment-card2").val()=="American Express"){
                		                return 15;
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
                			'macp': {
                				required: true,
                				requiredvalue: true,
                				
                			},
                			'TravelGuard': {
                				required: true,
                				requiredvalue: true,
                				
                			},
                			'TripMate': {
                				required: true,
                				requiredvalue: true,
                				
                			},
                			'brb': {
                				required: true,
                				requiredvalue: true,
                				
                			},
                		    },
                		    onkeyup: false,
                		    onblur:false,
                		    onclick: false,
                		    onfocusout: function (element) {
                		        $(element).valid();
                		    },
                		    highlight: function (element) {
                		    	//debugger
                		        $(element).closest('.form-group').removeClass('valid').addClass('has-error');
                		        $(element).addClass('select-class');
                		        $(element).addClass('radio-class');
                		        
                		        if ($(element).attr("name") == "passengerList[0].Gender" || $(element).attr("name") == "passengerList[0].FirstName" || $(element).attr("name") == "passengerList[0].LastName" || $(element).attr("name") == "passengerList[0].DobDate" || $(element).attr("name") == "passengerList[0].DobMonth" || $(element).attr("name") == "passengerList[0].DobYear") {
                  		          $("#errors0").addClass('help-block').removeClass('valid');
                     		        }else if ($(element).attr("name") == "passengerList[1].Gender" || $(element).attr("name") == "passengerList[1].FirstName" || $(element).attr("name") == "passengerList[1].LastName" || $(element).attr("name") == "passengerList[1].DobDate" || $(element).attr("name") == "passengerList[1].DobMonth" || $(element).attr("name") == "passengerList[1].DobYear") {
                     		      	$("#errors1").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[2].Gender" || $(element).attr("name") == "passengerList[2].FirstName" || $(element).attr("name") == "passengerList[2].LastName" || $(element).attr("name") == "passengerList[2].DobDate" || $(element).attr("name") == "passengerList[2].DobMonth" || $(element).attr("name") == "passengerList[2].DobYear") {
                     		       $("#errors2").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[3].Gender" || $(element).attr("name") == "passengerList[3].FirstName" || $(element).attr("name") == "passengerList[3].LastName" || $(element).attr("name") == "passengerList[3].DobDate" || $(element).attr("name") == "passengerList[3].DobMonth" || $(element).attr("name") == "passengerList[3].DobYear") {
                     		       $("#errors3").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[4].Gender" || $(element).attr("name") == "passengerList[4].FirstName" || $(element).attr("name") == "passengerList[4].LastName" || $(element).attr("name") == "passengerList[4].DobDate" || $(element).attr("name") == "passengerList[4].DobMonth" || $(element).attr("name") == "passengerList[4].DobYear") {
                     		       $("#errors4").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[5].Gender" || $(element).attr("name") == "passengerList[5].FirstName" || $(element).attr("name") == "passengerList[5].LastName" || $(element).attr("name") == "passengerList[5].DobDate" || $(element).attr("name") == "passengerList[5].DobMonth" || $(element).attr("name") == "passengerList[5].DobYear") {
                     		       $("#errors5").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[6].Gender" || $(element).attr("name") == "passengerList[6].FirstName" || $(element).attr("name") == "passengerList[6].LastName" || $(element).attr("name") == "passengerList[6].DobDate" || $(element).attr("name") == "passengerList[6].DobMonth" || $(element).attr("name") == "passengerList[6].DobYear") {
                     		       $("#errors6").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[7].Gender" || $(element).attr("name") == "passengerList[7].FirstName" || $(element).attr("name") == "passengerList[7].LastName" || $(element).attr("name") == "passengerList[7].DobDate" || $(element).attr("name") == "passengerList[7].DobMonth" || $(element).attr("name") == "passengerList[7].DobYear") {
                     		       $("#errors7").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerList[8].Gender" || $(element).attr("name") == "passengerList[8].FirstName" || $(element).attr("name") == "passengerList[8].LastName" || $(element).attr("name") == "passengerList[8].DobDate" || $(element).attr("name") == "passengerList[8].DobMonth" || $(element).attr("name") == "passengerList[8].DobYear") {
                     		       $("#errors8").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "payment.expiryMonth" || $(element).attr("name") == "payment.expiryYear") {
                     		         $("#Experrors").addClass('help-block');
                     		           
                     		        }else if ($(element).attr("name") == "payment.expiryMonth2" || $(element).attr("name") == "payment.expiryYear2") {
                     		         $("#Experrors2").addClass('help-block');
                     		           
                     		        }else if ($(element).attr("name") == "macp") {
                     		         $("#tcpid").addClass('help-block');
                     		        document.getElementById("tcpid").style.display='block'; 
                     		            
                     		        }else if ($(element).attr("name") == "TravelGuard") {
                     		         $("#tgpid").addClass('help-block');
                     		        }
                     		       else if ($(element).attr("name") == "brb") {
                       		         $("#brbError").addClass('help-block');
                       		      document.getElementById("brbError").style.display='block'; 
                       		        }
                     		       else if ($(element).attr("name") == "TripMate") {
                     		    
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
                   		           
                   		        }else if ($(element).attr("name") == "macp") {
                   		         $("#tcpid").removeClass('help-block');
                   		         document.getElementById("tcpid").style.display='none'; 
                   		     
                   		        }else if ($(element).attr("name") == "TravelGuard") {
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
                		    errorClass: 'help-block',
                		    errorPlacement: function (error, element) {
                		    	    if (element.attr("name") == "passengerList[0].Gender" || element.attr("name") == "passengerList[0].FirstName" || element.attr("name") == "passengerList[0].LastName" || element.attr("name") == "passengerList[0].DobDate" || element.attr("name") == "passengerList[0].DobMonth" || element.attr("name") == "passengerList[0].DobYear") {
                		    		$("#errors0").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors0");
                		    		}else if (element.attr("name") == "passengerList[1].Gender" || element.attr("name") == "passengerList[1].FirstName" || element.attr("name") == "passengerList[1].LastName" || element.attr("name") == "passengerList[1].DobDate" || element.attr("name") == "passengerList[1].DobMonth" || element.attr("name") == "passengerList[1].DobYear") {
                		    		$("#errors1").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors1");
                		    		}else if (element.attr("name") == "passengerList[2].Gender" || element.attr("name") == "passengerList[2].FirstName" || element.attr("name") == "passengerList[2].LastName" || element.attr("name") == "passengerList[2].DobDate" || element.attr("name") == "passengerList[2].DobMonth" || element.attr("name") == "passengerList[2].DobYear") {
                		    		$("#errors2").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors2");
                		    		}else if (element.attr("name") == "passengerList[3].Gender" || element.attr("name") == "passengerList[3].FirstName" || element.attr("name") == "passengerList[3].LastName" || element.attr("name") == "passengerList[3].DobDate" || element.attr("name") == "passengerList[3].DobMonth" || element.attr("name") == "passengerList[3].DobYear") {
                		    		$("#errors3").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors3");
                		    		}else if (element.attr("name") == "passengerList[4].Gender" || element.attr("name") == "passengerList[4].FirstName" || element.attr("name") == "passengerList[4].LastName" || element.attr("name") == "passengerList[4].DobDate" || element.attr("name") == "passengerList[4].DobMonth" || element.attr("name") == "passengerList[4].DobYear") {
                		    		$("#errors4").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors4");
                		    		}else if (element.attr("name") == "passengerList[5].Gender" || element.attr("name") == "passengerList[5].FirstName" || element.attr("name") == "passengerList[5].LastName" || element.attr("name") == "passengerList[5].DobDate" || element.attr("name") == "passengerList[5].DobMonth" || element.attr("name") == "passengerList[5].DobYear") {
                		    		$("#errors5").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors5");
                		    		}else if (element.attr("name") == "passengerList[6].Gender" || element.attr("name") == "passengerList[6].FirstName" || element.attr("name") == "passengerList[6].LastName" || element.attr("name") == "passengerList[6].DobDate" || element.attr("name") == "passengerList[6].DobMonth" || element.attr("name") == "passengerList[6].DobYear") {
                		    		$("#errors6").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors6");
                		    		}else if (element.attr("name") == "passengerList[7].Gender" || element.attr("name") == "passengerList[7].FirstName" || element.attr("name") == "passengerList[7].LastName" || element.attr("name") == "passengerList[7].DobDate" || element.attr("name") == "passengerList[7].DobMonth" || element.attr("name") == "passengerList[7].DobYear") {
                		    		$("#errors7").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors7");
                		    		}else if (element.attr("name") == "passengerList[8].Gender" || element.attr("name") == "passengerList[8].FirstName" || element.attr("name") == "passengerList[8].LastName" || element.attr("name") == "passengerList[8].DobDate" || element.attr("name") == "passengerList[8].DobMonth" || element.attr("name") == "passengerList[8].DobYear") {
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
                		           
                		        }else if (element.attr("name") == "macp") {
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

                		       /* if (element.parent('.input-group').length) {
                		            error.insertAfter(element.parent());
                		        } else {
                		            error.insertAfter(element);
                		        }*/
                		    },
                		    
                		                                
                		    messages: {
                		    	'payment.postalCode': { 
                		    		remote: "Please provide valid Postal Code.",
                		    	},
                		    	
                		    	 'passengerList[0].Gender': { 
                  					required: "<i class='fa fa-angle-double-right'></i> Please select the Gender of the traveler",
                  				},
         		   'passengerList[0].FirstName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the First name of the traveler",
     				},
     				'passengerList[0].LastName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the Last name of the traveler",
     				},
     				 'passengerList[1].Gender': { 
       					required: "<i class='fa fa-angle-double-right'></i> Please select the Gender of the traveler",
       				},
     				'passengerList[1].FirstName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the First name of the traveler",
     				},
     				'passengerList[1].LastName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the Last name of the traveler",
     				},
     				 'passengerList[2].Gender': { 
       					required: "<i class='fa fa-angle-double-right'></i> Please select the Gender of the traveler",
       				},
     				'passengerList[2].FirstName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the First name of the traveler",
     				},
     				'passengerList[2].LastName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the Last name of the traveler",
     				},
     				 'passengerList[3].Gender': { 
       					required: "<i class='fa fa-angle-double-right'></i> Please select the Gender of the traveler",
       				},
     				'passengerList[3].FirstName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the First name of the traveler",
     				},
     				'passengerList[3].LastName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the Last name of the traveler",
     				},
     				 'passengerList[4].Gender': { 
       					required: "<i class='fa fa-angle-double-right'></i> Please select the Gender of the traveler",
       				},
     				'passengerList[4].FirstName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the First name of the traveler",
     				},
     				'passengerList[4].LastName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the Last name of the traveler",
     				},
     				 'passengerList[5].Gender': { 
       					required: "<i class='fa fa-angle-double-right'></i> Please select the Gender of the traveler",
       				},
     				'passengerList[5].FirstName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the First name of the traveler",
     				},
     				'passengerList[5].LastName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the Last name of the traveler",
     				},
     				 'passengerList[6].Gender': { 
       					required: "<i class='fa fa-angle-double-right'></i> Please select the Gender of the traveler",
       				},
     				'passengerList[6].FirstName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the First name of the traveler",
     				},
     				'passengerList[6].LastName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the Last name of the traveler",
     				},
     				 'passengerList[7].Gender': { 
       					required: "<i class='fa fa-angle-double-right'></i> Please select the Gender of the traveler",
       				},
     				'passengerList[7].FirstName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the First name of the traveler",
     				},
     				'passengerList[7].LastName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the Last name of the traveler",
     				},
     				 'passengerList[8].Gender': { 
       					required: "<i class='fa fa-angle-double-right'></i> Please select the Gender of the traveler",
       				},
     				'passengerList[8].FirstName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the First name of the traveler",
     				},
     				'passengerList[8].LastName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide the Last name of the traveler",
     				},
                    'payment.maskcardNumber': {
     					required: "<i class='fa fa-angle-double-right'></i> Please provide credit or debit card number",
     					minlength: "<i class='fa fa-angle-double-right'></i> Please provide valid credit or debit card number",
     					maxlength: "<i class='fa fa-angle-double-right'></i> Please provide valid credit or debit card number"
     				},
     				  'payment.cardNumber': {
       					required: "<i class='fa fa-angle-double-right'></i> Please provide credit or debit card number",
       					minlength: "<i class='fa fa-angle-double-right'></i> Please provide valid credit or debit card number",
       					maxlength: "<i class='fa fa-angle-double-right'></i> Please provide valid credit or debit card number"
       				},
       				'payment.maskCardNumber': {
       					required: "<i class='fa fa-angle-double-right'></i> Please provide credit or debit card number",
       					minlength: "<i class='fa fa-angle-double-right'></i> Please provide valid credit or debit card number",
       					maxlength: "<i class='fa fa-angle-double-right'></i> Please provide valid credit or debit card number"
       				},
     				'payment.cardHolderName': { 
     					required: "<i class='fa fa-angle-double-right'></i> Please provide Card Holder Name",
     				},
     				'payment.cvvNo': {
        				required: "<i class='fa fa-angle-double-right'></i> Please provide card verification number",
        				ccvnumeric: "<i class='fa fa-angle-double-right'></i> Please provide a valid card verification number",
        				minlength : "<i class='fa fa-angle-double-right'></i> Please provide a valid card verification number",
          				maxlength: "<i class='fa fa-angle-double-right'></i> Please provide a valid card verification number",
        			},
        			'payment.amountToCharge' :{
        				required: "<i class='fa fa-angle-double-right'></i> Please provide valid amount for charge",
        			},'payment.amountToCharge2' :{
        				required: "<i class='fa fa-angle-double-right'></i> Please provide valid amount for charge",
        			},
        			'payment.cvvNo2': {
        				required: "<i class='fa fa-angle-double-right'></i> Please provide card verification number",
        				ccvnumeric: "<i class='fa fa-angle-double-right'></i> Please provide a valid card verification number",
        				minlength : "<i class='fa fa-angle-double-right'></i> Please provide a valid card verification number",
          				maxlength: "<i class='fa fa-angle-double-right'></i> Please provide a valid card verification number",
        			},
     	            'payment.country': {
     					required: "<i class='fa fa-angle-double-right'></i> Please provide a billing country",
     				},
     				'payment.address1': {
     				required: "<i class='fa fa-angle-double-right'></i> Please provide a billing address",
     				},
     				'payment.city': {
     				required: "<i class='fa fa-angle-double-right'></i> Please provide a billing city",
     				},
     				'payment.state': {
     				required: "<i class='fa fa-angle-double-right'></i> Please select your billing State",
     				},
     				'payment.postalCode': {
     				required: "<i class='fa fa-angle-double-right'></i> Please provide billing zip (postal code)",
     				},
     				'contact.billingPhone': {
     				required: "<i class='fa fa-angle-double-right'></i> Please provide a valid billing phone",
     				},'contact.mobile': {
     				required: "<i class='fa fa-angle-double-right'></i> Please provide a valid mobile phone",
     				},
     				'contact.email': {
     				required: "<i class='fa fa-angle-double-right'></i> Please provide a valid email address",
     				},
     				'contact.email1': {
         				required: "<i class='fa fa-angle-double-right'></i> Please provide a valid email address",
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
                				$('#img_val').val(canvas.toDataURL("image/png"));
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
    		    }, "<i class='fa fa-angle-double-right'></i> Please provide a valid email address");
    	 
	 jQuery.validator.addMethod("notEqual", function (value, element, param) { 
    		    return this.optional(element) || value != '0.00';
    		}, "<i class='fa fa-angle-double-right'></i>  Please provide valid amount for charge");
    	 
    	 jQuery.validator.addMethod("notEquals", function (value, element, param) { 
 		    return this.optional(element) || value != '0';
 		}, "<i class='fa fa-angle-double-right'></i>  Please provide valid amount for charge");
 	 
        $.validator.addMethod("alphanumeric", function(value, element) {
        	if(value.length>0){
      	        return this.optional(element) || /^\w+$/i.test(value);
        	}else{
        		return false;
        	}
      	}, "<i class='fa fa-angle-double-right'></i> Please provide Letters, numbers, and underscores only");
       
             $.validator.addMethod("emailEq", function(value, element) 
        		{
            	 //console.log($("#contact_email").val());
        	    if($("#contact_email").val() != value){
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
      
        $.validator.addMethod("ccvnumeric", function(value, element) {
        	if(value.length>0){
      	        return this.optional(element) || /^[-+]?\d*\.?\d*$/.test(value);
        	}else{
        		return false;
        	}
      	}, "<i class='fa fa-angle-double-right'></i> Please provide only numbers into card verification number");
   
        $.validator.addMethod("amountnumeric", function(value, element) {
        	if(value.length>0){
      	        return this.optional(element) || /^[-+]?\d*\.?\d*$/.test(value);
        	}else{
        		return false;
        	}
      	}, "<i class='fa fa-angle-double-right'></i> Please provide valid amount");
        
        $.validator.addMethod("ccvnumeric2", function(value, element) {
        	
        	if(card2Required){
        	if(value.length>0){
      	        return this.optional(element) || /^[-+]?\d*\.?\d*$/.test(value);
        	}else{
        		return false;
        	}
        	}else{return true;}
      	}, "<i class='fa fa-angle-double-right'></i> Please provide only numbers into card verification number");
   
        jQuery.validator.addMethod('CCExp', function(value, element, params) {
            var minMonth = new Date().getMonth() + 1;
            var minYear = new Date().getFullYear();
            var month = parseInt($(params.month).val(), 10);
            var year = parseInt($(params.year).val(), 10);
            return (year > minYear || (year === minYear && month >= minMonth));
      }, '<i class="fa fa-angle-double-right"></i> Your Credit Card Expiration date is invalid.');
        
        
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
      }, '<i class="fa fa-angle-double-right"></i> Your Credit Card Expiration date is invalid.');
        
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
        	var html="<i class='fa fa-angle-double-right'></i> Age of Adult, should be greater than or equal to 12yrs at the time of travel.";
        	
        	if(Age == 'Adult'){
        		html="<i class='fa fa-angle-double-right'></i> Age of Adult, should be greater than or equal to 18yrs at the time of travel.";
        		if(param == 0){
        			html="<i class='fa fa-angle-double-right'></i> Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any<br/> questions, please call us at 1-844-811-1132.";
            	}else{
            		html="<i class='fa fa-angle-double-right'></i> Age of Adult, should be greater than or equal to 12yrs at the time of travel.";
            	}
        	}else if(Age == 'Child'){
        		html="<i class='fa fa-angle-double-right'></i> Age of Child, should be less than 12yrs and greater than or equal to 2yrs at the time of travel.";
        	}else if(Age == 'Infant'){
        		html="<i class='fa fa-angle-double-right'></i>  Infant (on lap) should be under 2 years for the entire trip. Please search again with the child option in modify search.";
        	}else if(Age == 'InfantWs'){
        		html="<i class='fa fa-angle-double-right'></i>  Infant (on seat) should be under 2 years for the entire trip. Please search again with the child option in modify search.";
        	}
        	
        	value=$("#paxdoy"+param+"").val();
        	   $("#error-message"+param+"").html("").removeClass("show").addClass("hide");
        	if (!isValidDate(value, $("#paxdom"+param+"").val(), $("#paxdob"+param+"").val())) {
                // make sure the date is valid
                $("#error-message"+param+"").html("<i class='fa fa-angle-double-right'></i> Please provide Valid Day of Date Of Birth.").removeClass("hide").addClass("show");
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
        			
        			return postalUKFilter(value);
        		}else if($("#Payments_Country").val() != "CA"){
        	var numericReg = Zipmap($("#Payments_Country").val());
        	
        	var usan = new RegExp(numericReg);
        	
        	return this.optional(element) || usan.test(value);
        		 }else{
        			return postalFilter(value);
        	        }
        }else{
        	return true;
        }
        	
        }, "<i class='fa fa-angle-double-right'></i> Please provide billing zip (postal code)");
        
      /*  $.validator.addMethod(
                "zipval",
                function(value, element, regexp) {
                    var re = new RegExp(regexp);
                    return this.optional(element) || re.test(value);
                },
                "Please check your input."
        );*/
        
        
        $.validator.addMethod('requiredTextvalue', function (value) {
            return (value != '');
       }, "");
        
        $.validator.addMethod('requiredvalue', function (value) {
               return (value != '0.0');
          }, "");
        $.validator.addMethod('ccMaskCheckvalue', function (value) {
        	//var values=$("#Payments_CardNumber").val();
        	 if(value.indexOf('************') >= 0){
        		 return true;
        	 }
        	if(value.length>12){
        	//console.log("CC Mask value;"+cc_brand_id(value,$("#payment-card").val()));
        	return cc_brand_id(value,$("#payment-card").val());
        	}else{return true;}
         //   return (value != '0.0');
         }, "<i class='fa fa-angle-double-right'></i> Please provide valid credit or debit card number");
        
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
         }, "<i class='fa fa-angle-double-right'></i> Please provide valid second credit or debit card number");
          
          
          
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
           }, "<i class='fa fa-angle-double-right'></i> Please provide different second credit or debit card number");
            
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
         }, "<i class='fa fa-angle-double-right'></i> Please provide valid credit or debit card number");
        
        
        $.validator.addMethod('cccardvalue', function (value) {
        	if($("#Payments_CardNumber").val().length>12){
        	//console.log("CC value;"+cc_brand_id($("#Payments_CardNumber").val(),value));
        	return cc_brand_id($("#Payments_CardNumber").val(),value);
        	}else{return true;}
         //   return (value != '0.0');
         }, "Please provide valid credit or debit card number");
      	$.validator.addMethod('titlereq', function (value) {
              return (value != '0');
          }, "<i class='fa fa-angle-double-right'></i> Please select the Gender of the traveler");
      	
        $.validator.addMethod('selectcard', function (value) {
              return (value != 'Select a Card');
          }, "<i class='fa fa-angle-double-right'></i> Please provide your payment method");
	  	   $.validator.addMethod('selectcard2', function (value) {
			   if(card2Required){
            return (value != 'Select a Card');
			   }else{
				   return true;
			   }
        }, "<i class='fa fa-angle-double-right'></i> Please provide your payment method");
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
        }, "<i class='fa fa-angle-double-right'></i> Please provide card verification number");
         $.validator.addMethod('selectExpMonth', function (value) {
              return (value != '0');
          }, "<i class='fa fa-angle-double-right'></i> Please select card expiration month");
		 $.validator.addMethod('selectExpMonth2', function (value) {
             return (value != '0');
         }, "<i class='fa fa-angle-double-right'></i> Please select card expiration month");
         $.validator.addMethod('selectExpYear', function (value) {
              return (value != 'Year');
          }, "<i class='fa fa-angle-double-right'></i> Please select card expiration year");
		   $.validator.addMethod('selectExpYear2', function (value) {
             return (value != 'Year');
         }, "<i class='fa fa-angle-double-right'></i> Please select card expiration year");
         $.validator.addMethod('selectdate', function (value) {
              return (value != 'Day');
          }, "<i class='fa fa-angle-double-right'></i> Please select  the day of Date of Birth of the traveler");
          $.validator.addMethod('selectmonth', function (value) {
              return (value != '0');
          }, "<i class='fa fa-angle-double-right'></i> Please select the Month of Birth of the traveler");
          $.validator.addMethod('selectyear', function (value) {
              return (value != 'Year');
          }, "<i class='fa fa-angle-double-right'></i> Please select the Year of Birth of the traveler ");
          $.validator.addMethod('selectstate', function (value) {
        	  if($("#Payments_Country").val() == "US"){
              return (value != '0');
        	  }else  if($("#Payments_Country").val() == "CA"){
              return (value != '0');
        	  }else{
        		  return true;
        	  }
          }, "<i class='fa fa-angle-double-right'></i> Please select your billing State");
          $.validator.addMethod('selectcountry', function (value) {
              return (value != '0');
          }, "<i class='fa fa-angle-double-right'></i> Please select your billing Country");
          JQUERY4U.UTIL.setupFormValidation();
    });
  


    
})(jQuery, window, document);
  
function capture() {
	$('#target').html2canvas({
		onrendered: function (canvas) {
            //Set hidden field's value to image data (base-64 string)
			$('#img_val').val(canvas.toDataURL("image/png"));
            //Submit the form manually
			//document.getElementById("myForm").submit();
		}
	});
}

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
	 jQuery("#Payments_MaskCardNumber").val(new_card_number);
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
	//alert("card value");
	$('.spnCardImg>a').removeClass("card-border");
	$('.spnCardImg>a[title="'+sel.value+'"]').addClass('card-border');
}
function getcardValue2(sel,event){
	$('.spnCardImg2>a').removeClass("card-border");
	$('.spnCardImg2>a[title="'+sel.value+'"]').addClass('card-border');
}

function setccValue2(id,event) {
  
  //  $timeout(function() {
	//console.log(event.target);
	$target = $(event.target);   
	 $target.siblings().removeClass("card-border");
  $target.addClass('card-border');
	if(id=="American Express"){
	   var src = "/resources/assets/ccv-img2.gif";
         $("#ccvimg2").attr("src", src);
         $("#tooltip2").html("<span class=\"ccv-card\">4 Digit Number From Your Card<span class='cardImg'></span></span>");
         $("#tooltipm2").html("<span class=\"ccv-card\">4 Digit Number From Your Card<span class='cardImg'></span></span>");
	}else if(id=="Master Card"){
		 var src = "/resources/assets/ccv-img.gif";
       $("#ccvimg2").attr("src", src);
       $("#tooltip2").html("<span class=\"ccv-card\">3/4 Digit Number From Your Card<span class='cardImg'></span></span>");
       $("#tooltipm2").html("<span class=\"ccv-card\">3/4 Digit Number From Your Card<span class='cardImg'></span></span>");
	}else{
		   var src = "/resources/assets/ccv-img.gif";
         $("#ccvimg2").attr("src", src);
         $("#tooltip2").html("<span class=\"ccv-card\">3 Digit Number From Your Card<span class='cardImg'></span></span>");
         $("#tooltipm2").html("<span class=\"ccv-card\">3 Digit Number From Your Card<span class='cardImg'></span></span>");
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
		   var src = "/resources/assets/ccv-img2.gif";
         $("#ccvimg").attr("src", src);
         $("#tooltip").html("<span class=\"ccv-card\">4 Digit Number From Your Card<span class='cardImg'></span></span>");
         $("#tooltipm").html("<span class=\"ccv-card\">4 Digit Number From Your Card<span class='cardImg'></span></span>");
	}else if(id=="Master Card"){
		 var src = "/resources/assets/ccv-img.gif";
       $("#ccvimg").attr("src", src);
       $("#tooltip").html("<span class=\"ccv-card\">3/4 Digit Number From Your Card<span class='cardImg'></span></span>");
       $("#tooltipm").html("<span class=\"ccv-card\">3/4 Digit Number From Your Card<span class='cardImg'></span></span>");
	}else{
		   var src = "/resources/assets/ccv-img.gif";
         $("#ccvimg").attr("src", src);
         $("#tooltip").html("<span class=\"ccv-card\">3 Digit Number From Your Card<span class='cardImg'></span></span>");
         $("#tooltipm").html("<span class=\"ccv-card\">3 Digit Number From Your Card<span class='cardImg'></span></span>");
	}
	
	
	$("#payment-card").val(id);
 	var card_number = jQuery("#Payments_CardNumber").val();
 	if(card_number == ""){
 		card_number = jQuery("#Payments_MaskCardNumber").val();
 	}
 	
 	var value=jQuery("#Payments_MaskCardNumber").val();
  if(value.indexOf('*') >= 0){
  	
  }else{
  	if(value != ""){
  		card_number = jQuery("#Payments_MaskCardNumber").val();
  	}
  }
 	if(card_number != ""){
 		jQuery("#Payments_CardNumber").val(card_number);
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
	alert("submitting form");
	var data = JSON.stringify(frm.serializeArray());
	console.log("Form data :"+data);
//	var bookingdata =jQuery.parseJSON(data);
	//console.log(data);
//	 cleaner(bookingdata, "payment.cardCode");
	// console.log(bookingdata);
//	localStorage.setItem('ls.paymentPage',JSON.stringify(bookingdata));
	
	 var rndId = randomString(12);
	/* document.getElementById("finalId").value=rndId;
	 if($('#currentDevice').val()=="Normal"){
		  $('form#booking').attr({action: '/flightbook/'+rndId});  
  }else if($('#currentDevice').val()=="Mobile"){
 	  $('form#booking').attr({action: '/m/flightbook/'+rndId});  
  }else if($('#currentDevice').val()=="Tablet"){
 	  $('form#booking').attr({action: '/t/flightbook/'+rndId});  
  }else{
 	  $('form#booking').attr({action: '/flightbook/'+rndId});  
  }
	 bookButtonSetSeats();*/
  //  $('form#booking').attr({action: '/flightbook/'+rndId});    
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
  //$(window).scroll(sticky_relocate);
 // sticky_relocate();
//	macpSet('macp','N','N');radioSelect('macpNo');
//	brbSetValue('XXXBRB',0.0);macpSet('BRB','N','N');
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

(function(){
	
	angular.module('angularPurchase', ['cgBusy','LocalStorageModule']).controller('purchaseCtrl',['$http','$scope','$timeout','$window','localStorageService',function($http,$scope,$timeout,$window,localStorageService){ 
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
		    
		    
			  $scope.checkCoupons	 = function() {
				  document.getElementById("popApply").style.display='none'; 
				  if($scope.subscribeButton == 'Apply'){				  
					  if($scope.selectedCoupons === undefined){
							  var placeholder2 = document.getElementById('couponMessage'); //working
					           placeholder2.innerHTML = "Please fill coupon code First";  
							 // alert("Please fill coupon code First");
						  }else if($scope.selectedCoupons === ""){
							  var placeholder2 = document.getElementById('couponMessage'); //working
					           placeholder2.innerHTML = "Please fill coupon code First"; 
							 // alert("Please fill coupon code First");
						  }else{
					var checkCoupon='/checkCoupon/'+$scope.selectedCoupons;
				  if($('#currentDevice').val()=="Normal"){
					  checkCoupon='/checkCoupon/'+$scope.selectedCoupons;
				    }else if($('#currentDevice').val()=="Mobile"){
				    	 checkCoupon='/m/checkCoupon/'+$scope.selectedCoupons; 
				    }else if($('#currentDevice').val()=="Tablet"){
				    	 checkCoupon='/t/checkCoupon/'+$scope.selectedCoupons;
				    }else{
				    	 checkCoupon='/checkCoupon/'+$scope.selectedCoupons;
				    }
					  
				 $http.post(checkCoupon).success(function(response){
						//console.log(response);
									
						 angular.forEach(response, function(Flighth) {
							 console.log(Flighth.responseStatus.Status);
							 if(Flighth.responseStatus.Status == 0){
								 $scope.subscribeButton = $scope.subscribed ? 'Apply' : 'Remove';
								 $scope.subscribed = !$scope.subscribed;
							   $scope.couponAmt=Flighth.CouponAmount;
							   
							   var couponId = document.getElementById('couponId'); //working
							   couponId.value = "Yes"; 
					           var placeholder = document.getElementById('couponAmtPlan'); //working

					           placeholder.innerHTML = "-<i class='fa fa-"+cls+"'></i>"+(Flighth.CouponAmount * convRatio).toFixed(2); 
					           
					           var placeholder2 = document.getElementById('couponMessage'); //working
					           placeholder2.innerHTML = "Coupon Code is Applied"; 
					           
					           var placeholder = document.getElementById('couponApply'); //working
					           placeholder.innerHTML = "X"; 
					           
					           var placeholder2 = document.getElementById('couponHave'); //working
					           placeholder2.innerHTML = ""; 
					           
					           var placeholder2 = document.getElementById('couponHave1'); //working
					           placeholder2.innerHTML = "Coupon Discount"; 
					           
					           var placeholder2 = document.getElementById('couponMessage'); //working
							   placeholder2.innerHTML = ""; 

					          
					           macpSet('CO',$scope.couponAmt,'Y');
					           $scope.isDisabled= true;
							  }else{
								  var placeholder2 = document.getElementById('couponMessage'); //working
								   placeholder2.innerHTML = Flighth.responseStatus.ErrorDescription; 

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
				  }else{
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
					   
			           //console.log("$scope.couponAmt:"+$scope.couponAmt);
			           macpSet('CO',$scope.couponAmt,'N');
			           $scope.couponAmt=0.0;
			           $scope.selectedCoupons=undefined;
			           $scope.isDisabled= false;	
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
                	  if(newVal.ID != "US"){
                          if(newVal.ID == "CA"){
     						  document.getElementById("statemad").style.display='inline'; 
     					 }else{
                         	  document.getElementById("statemad").style.display='none'; 
                     	 
                     	//  document.getElementById("tgBoxhide").style.display='block'; 
     					 }
     					  document.getElementById("tgBox").style.display='none'; 
                           }else{
                         	  document.getElementById("statemad").style.display='inline'; 
                         	//  $scope.tgIns=document.getElementById('tgInsValue').value;
                         	  document.getElementById("tgBox").style.display='none'; 
                         //	  document.getElementById("tgBoxhide").style.display='none'; 
                           }
						    document.getElementById("tgBox").style.display='none'; 
                      if(newVal.ID == "CA"){
                    	  document.getElementById("statemad").style.display='inline'; 
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
                                	   document.getElementById("statemad").style.display='inline'; 
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




