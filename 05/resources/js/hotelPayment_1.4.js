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
        	$('.textOnly').keyup(function () {
        		  if (this.value != this.value.replace(/[^a-zA-Z ]+/g, '')) {
        		       this.value = this.value.replace(/[^a-zA-Z ]+/g, '');
        		    }
        	});
        	
        	$("#Payments_Country").change(function () {
               
        		 if($("#payment_postalCode").val().length > 0){
        		$("#hotelBookingRequest").validate().element("#payment_postalCode");
        		 }
        	
            })
            
            $("#payment-card").change(function () {
               
            	if($("#payment-card").val()=="American Express"){
            		   var src = "/resources/images/ccv-img2.gif";
                       $("#ccvimg").attr("src", src);
                       $("#tooltip").html("<p class=\"text_link\">4 Digit Number From Your Card<span></span></p>");
            	}else{
            		   var src = "/resources/images/ccv-img.gif";
                       $("#ccvimg").attr("src", src);
                       $("#tooltip").html("<p class=\"text_link\">3 Digit Number From Your Card<span></span></p>");
            	}
            	
            	

            	var card_number = jQuery("#Payments_CardNumber").val();
            	if(card_number == ""){
            		card_number = jQuery("#Payments_MaskCardNumber").val();
            	}
            	
            	if(card_number != ""){
            		jQuery("#Payments_CardNumber").val("");
            		jQuery("#Payments_MaskCardNumber").val(card_number);
            	var conds=$("#hotelBookingRequest").validate().element("#Payments_MaskCardNumber");
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
        		$("#hotelBookingRequest").validate().element("#Payments_CardNumber");
        		 }
        		 if($("#Payments_MaskCardNumber").val().length > 0){
             		$("#hotelBookingRequest").validate().element("#Payments_CardNumber");
             		 }*/
        		 if($("#Payments_CvvNo").val().length > 0){
             		$("#hotelBookingRequest").validate().element("#Payments_CvvNo");
             		 }
            })
            
            
            //form validation rules
   $("#hotelBookingRequest").validate({
 
	
	  rules: {       
		
	   'rooms[0].FirstName': {
	    required: true,
	                		    requiredTextvalue: true,
	                		    lettersonly: true
		},
		'rooms[0].LastName': {
	    required: true,
	                		    requiredTextvalue: true,
	                		    lettersonly: true
		},
		
	    'rooms[1].FirstName': {
	    required: true,
	                		    requiredTextvalue: true,
	                		    lettersonly: true
		}, 
		'rooms[1].LastName': {
	    required: true,
	                		    requiredTextvalue: true,
	                		    lettersonly: true
		},
		
		 'rooms[2].FirstName': {
	    required: true,
	                		    requiredTextvalue: true,
	                		    lettersonly: true
		}, 
		'rooms[2].LastName': {
	    required: true,
	                		    requiredTextvalue: true,
	                		    lettersonly: true
		},
		    	
		 'rooms[3].FirstName': {
	    required: true,
	                		    requiredTextvalue: true,
	                		    lettersonly: true
		}, 
		'rooms[3].LastName': {
	    required: true,
	                		    requiredTextvalue: true,
	                		    lettersonly: true
		},
		
		 'rooms[4].FirstName': {
	    required: true,
	                		    requiredTextvalue: true,
	                		    lettersonly: true
		}, 
		'rooms[4].LastName': {
	    required: true,
	                		    requiredTextvalue: true,
	                		    lettersonly: true
		},
		           
	  'payment.cardCode': {
			selectcard: true
		},
		'payment.maskCardNumber': {
			required: true,
			ccMaskCheckvalue:true,
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
		'payment.cardNumber': {
			required: true,
	        number:true,
	        ccCheckvalue:true,
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
			zipval:true,		
	          
		},
		'contact.billingPhone': {
			required: true,
	                				minlength:10,
	                				maxlength: 15,
			number: true
		},
		'contact.mobile': {
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
	  }, 
	  onkeyup: false,
	    onblur:false,
	    onclick: false,
	    onfocusout: function (element) {
	        $(element).valid();
	    },
  highlight: function (element) {
    $(element).closest('.form-group').removeClass('valid').addClass('has-error');
    $(element).addClass('select-class');
    $(element).addClass('radio-class');
    
                		        if ($(element).attr("name") == "rooms[0].FirstName" || $(element).attr("name") == "rooms[0].LastName") {
                  		          $("#errors0").addClass('help-block').removeClass('valid');
                     		        }else if ($(element).attr("name") == "rooms[1].FirstName" || $(element).attr("name") == "rooms[1].LastName") {
                     		      	$("#errors1").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "rooms[2].FirstName" || $(element).attr("name") == "rooms[2].LastName") {
                     		       $("#errors2").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "rooms[3].FirstName" || $(element).attr("name") == "rooms[3].LastName") {
                     		       $("#errors3").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "rooms[4].FirstName" || $(element).attr("name") == "rooms[4].LastName") {
                     		       $("#errors4").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "payment.expiryMonth" || $(element).attr("name") == "payment.expiryYear") {
                     		         $("#Experrors").addClass('help-block');
           
        }
},
unhighlight: function (element) {
    $(element).closest('.form-group').removeClass('has-error').addClass('valid');
    $(element).removeClass('select-class');
    $(element).removeClass('radio-class');
    if ($(element).attr("name") == "payment.expiryMonth" || $(element).attr("name") == "payment.expiryYear") {
	         $("#Experrors").removeClass('help-block').addClass('valid');
	           
	        }
},
errorElement: 'span',
errorClass: 'help-block',
errorPlacement: function (error, element) {
	if (element.attr("name") == "rooms[0].FirstName" || element.attr("name") == "rooms[0].LastName") {
		$("#errors0").addClass('help-block');
		error.css('float', 'none');
		element.append($('<br />'));
		error.appendTo("#errors0");
		}else if (element.attr("name") == "rooms[1].FirstName" || element.attr("name") == "rooms[1].LastName") {
		$("#errors1").addClass('help-block');
		error.css('float', 'none');
		element.append($('<br />'));
		error.appendTo("#errors1");
		}else if (element.attr("name") == "rooms[2].FirstName" || element.attr("name") == "rooms[2].LastName") {
		$("#errors2").addClass('help-block');
		error.css('float', 'none');
		element.append($('<br />'));
		error.appendTo("#errors2");
		}else if (element.attr("name") == "rooms[3].FirstName" || element.attr("name") == "rooms[3].LastName") {
		$("#errors3").addClass('help-block');
		error.css('float', 'none');
		element.append($('<br />'));
		error.appendTo("#errors3");
		}else if (element.attr("name") == "rooms[4].FirstName" || element.attr("name") == "rooms[4].LastName") {
		$("#errors4").addClass('help-block');
		error.css('float', 'none');
		element.append($('<br />'));
		error.appendTo("#errors4");
		}else if (element.attr("name") == "payment.expiryMonth" || element.attr("name") == "payment.expiryYear") {
     //   error.insertAfter(".dateWrap");
    	$("#Experrors").addClass('help-block');
    	//error.removeClass("help-block");
        error.appendTo("#Experrors");
       
    } else error.insertAfter(element);

    if (element.parent('.input-group').length) {
        error.insertAfter(element.parent());
    } else {
        error.insertAfter(element);
    }
},
messages: {
    
	   'payment.postalCode': { 
		   remote: "Please provide valid Postal Code.",
		}
},
     errorElement: "span" , 
   
   messages: {
     
    		   'rooms[0].FirstName': { 
					required: "Please provide First name",
				},
				'rooms[0].LastName': { 
					required: "Please provide Last name",
				},
				'rooms[1].FirstName': { 
					required: "Please provide First name",
				},
				'rooms[1].LastName': { 
					required: "Please provide Last name",
				},
				'rooms[2].FirstName': { 
					required: "Please provide First name",
				},
				'rooms[2].LastName': { 
					required: "Please provide Last name",
				},
				'rooms[3].FirstName': { 
					required: "Please provide First name",
				},
				'rooms[3].LastName': { 
					required: "Please provide Last name",
				},
				'rooms[4].FirstName': { 
					required: "Please provide First name",
				},
				'rooms[4].LastName': { 
					required: "Please provide Last name",
				},
				
				'payment.maskcardNumber': {
 					required: "Please provide credit or debit card number",
 					minlength: "Please provide valid credit or debit card number",
 					maxlength: "Please provide valid credit or debit card number"
 				},
 				  /*'payment.cardNumber': {
   					required: "Please provide credit or debit card number",
   					minlength: "Please provide valid credit or debit card number",
   					maxlength: "Please provide valid credit or debit card number"
   				},*/
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
				'payment.country': {
 					required: "Please provide a billing country",
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
   			},
                submitHandler: function(form) {
                	
                	                	
                	 popup('divProgressbar', 30, 30);
                	 
                		
                	  /* var rndId = randomString(12);
                	   form.submit();*/
                	  
                	  var rndId=document.getElementById("finalId").value;
                	    var randId=document.getElementById("randamId").value;
                	    if(randId=="x123456"){
                	    document.getElementById("randamId").value=rndId;
                	    document.getElementById("randamIds").value="x123456";
                	    randId=rndId;
                	    }

                	    if(rndId == randId){
                	    	console.log("booking Start");
                	    	 form.submit();
                	    	
                	    }else{
                	    	console.log("booking again Start");
                	    	return false;
                	    }                  
                }
   			});
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
    	    	 
     
    	$.validator.messages.required = '';
    	 $.validator.addMethod("email", function(value, element) {  
    		    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);  
    		    }, "Please provide a valid email address");
    	 
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
      	}, "Please provide only numbers into card verification number");   
        jQuery.validator.addMethod('CCExp', function(value, element, params) {
        	
            var minMonth = new Date().getMonth() + 1;
            var minYear = new Date().getFullYear();
            var month = parseInt($(params.month).val(), 10);
            var year = parseInt($(params.year).val(), 10);
            return (year > minYear || (year === minYear && month >= minMonth));
      }, 'Your Credit Card Expiration date is invalid.');
        
    
        
    	$("#Payments_ExpiryMonth").change(function () {
     		 if($("#Payments_ExpiryYear").val() != "Year"){
     		$("#hotelBookingRequest").validate().element("#Payments_ExpiryYear");
     		 }
     	
         })
        jQuery.validator.addMethod("age_val", function(value, element, param) {
        	
        	
        	var Age=$("#passengerType"+param+"").val();
        	
        	var html="Age of Adult, should be greater than or equal to 12yrs.";
        	
        	if(Age == 'Adult'){
        		html="Age of Adult, should be greater than or equal to 12yrs.";
        	}else if(Age == 'Child'){
        		html="Age of Child, should be less than 12yrs and greater than or equal to 2yrs.";
        	}else if(Age == 'Infant'){
        		html="Age of Infant, should be less than 2yrs.";
        	}else if(Age == 'InfantWs'){
        		html="Age of Infant, should be less than 2yrs.";
        	}
        	
        	value=$("#paxdoy"+param+"").val();
        	   $("#error-message"+param+"").html("").removeClass("show").addClass("hide");
        	if (!isValidDate(value, $("#paxdom"+param+"").val(), $("#paxdob"+param+"").val())) {
                // make sure the date is valid
                $("#error-message"+param+"").html("Please provide Valid Day of Date Of Birth.").removeClass("hide").addClass("show");
                return false;
              } else if (!isOfAge(value, $("#paxdom"+param+"").val(), $("#paxdob"+param+"").val(), Age)) {
                // the person is too young
                $("#error-message"+param+"").html(html).removeClass("hide").addClass("show");
                return false;
              } else {
            	 // console.log("true");
            	  return true;
              }
        	
            return this.optional( element ) || value >= param;
        }, ""); 
        
        
        $.validator.addMethod('zipval', function (value, element) {
          
        	//debugger;
       
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
        	
        }, 'Please provide billing zip (postal code)');
        
          
        
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
         }, "Please provide valid credit or debit card number");
        
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
              return (value != 'Title');
          }, "");
      	
        $.validator.addMethod('selectcard', function (value) {
              return (value != 'Select a Card');
          }, "Please provide your payment method");
         $.validator.addMethod('selectExpMonth', function (value) {
              return (value != '0');
          }, "Please select card expiration month");
         $.validator.addMethod('selectExpYear', function (value) {
              return (value != 'Year');
          }, "Please select card expiration year");         
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
 
$(function () {
    //$(window).scroll(sticky_relocate);
   // sticky_relocate();
	//macpSet('macp','Y');
	 $( "#contact_email,#contact_email1,#contact_billingPhone,#contact_mobile,#Payments_MaskCardNumber" ).on( "copy cut paste drop", function() {
         return false;
 });
});  


function submitForm(){
	
	//popup('divProgressbar', 30, 30);
	
	var frm = $('form#hotelBookingRequest');
	var hotelIDs = document.getElementById("hotelIDs").value;
	//alert("agent fee value is : "+$("#agentFee").val());
	 key=false;
	 var rndId = randomString(12);
	 document.getElementById("finalId").value=rndId;
      $('form#hotelBookingRequest').attr({action: '/hotelsbook/'+hotelIDs+"/"+rndId});    
      $('form#hotelBookingRequest').submit();
      
      
	 }
    


function cc_brand_id(cur_val,card_val) {
	  var sel_brand;

	  
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



	  cur_val = cur_val.replace(/\D/g, '');


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
};     
        
   function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
};
   function cleaner(arr, id) {
  	 console.log(arr);
      for (var i = 0; i < arr.length; i++) {
          var cur = arr[i];
        //  console.log(cur);
          if (cur.name == 'payment.cardCode' || cur.name == 'payment.maskCardNumber' || cur.name == 'payment.cardNumber' || cur.name == 'payment.cardHolderName' || cur.name == 'payment.cvvNo' || cur.name == 'payment.expiryMonth' || cur.name == 'payment.expiryYear') {
          	console.log(cur);
          	arr.splice(i, 1);
          	i--;
          }
      }
  }

$(function () {
    //$(window).scroll(sticky_relocate);
   // sticky_relocate();
	//macpSet('macp','Y');
	
	$("#payment-card").change(function () {
	     // $('div.box').hide();
	      //$('div.box.' + $(this).val()).show();
	  //	console.log($("#payment-card").val());
	  	if($("#payment-card").val()=="American Express"){
            		   var src = "/resources/images/ccv-img2.gif";
                       $("#ccvimg").attr("src", src);
                       $("#tooltip").html("<p class=\"text_link\">4 Digit Number From Your Card<span></span></p>");
            	}else{
            		   var src = "/resources/images/ccv-img.gif";
                       $("#ccvimg").attr("src", src);
                       $("#tooltip").html("<p class=\"text_link\">3 Digit Number From Your Card<span></span></p>");
            	}
	  	
			 if($("#Payments_CardNumber").val().length > 0){
			$("#hotelBookingRequest").validate().element("#Payments_CardNumber");
			 }
			 if($("#Payments_MaskCardNumber").val().length > 0){
	   		$("#hotelBookingRequest").validate().element("#Payments_CardNumber");
	   		 }
			 if($("#Payments_CvvNo").val().length > 0){
	   		$("#hotelBookingRequest").validate().element("#Payments_CvvNo");
	   		 }
	  });
});      
        
 function secondsToTime(m){
   
    var h  = Math.floor( m / 60 );
        m -= h * 60;
   
    return {
        "h": h,
        "m": m
    };
}
 
 

jQuery("#Payments_MaskCardNumber").focusout(function(e){

	var card_number = jQuery(this).val();
	 if(card_number.indexOf('************') >= 0){
		 return true;
	 }
	 console.log("cond Other");
	//console.log("card_number 1:"+card_number);
	if(card_number == ""){
		card_number=jQuery("#Payments_CardNumber").val();
		jQuery("#Payments_MaskCardNumber").val(card_number);
	}
	
	if(card_number != ""){
	var conds=$("#hotelBookingRequest").validate().element("#Payments_MaskCardNumber");
	//console.log("cond 1:"+conds);
	if(conds){
		jQuery("#Payments_CardNumber").val(card_number);
	if(jQuery("#Payments_CardNumber").val() != ""){
		$("#hotelBookingRequest").validate().element("#Payments_CardNumber");
		$("#hotelBookingRequest").validate().element("#Payments_MaskCardNumber");
		var cond=$("#hotelBookingRequest").validate().element("#Payments_MaskCardNumber");
		//console.log("cond:"+cond);
		if(cond){
	 var new_card_number = "************";
	 for(var loop2=12; loop2 < card_number.length; loop2++)
     {
         new_card_number = new_card_number+card_number.charAt(loop2);
     }
	// jQuery("#Payments_MaskCardNumber").val(new_card_number);
		}
}
	}
	}
}).blur(function(){
	var card_number = jQuery(this).val();
	 if(card_number.indexOf('************') >= 0){
		 return true;
	 }
	 //console.log("cond IE");
	//console.log("card_number 1:"+card_number);
	if(card_number == ""){
		card_number=jQuery("#Payments_CardNumber").val();
		jQuery("#Payments_MaskCardNumber").val(card_number);
	}
	
	if(card_number != ""){
	var conds=$("#hotelBookingRequest").validate().element("#Payments_MaskCardNumber");
	//console.log("cond 1:"+conds);
	if(conds){
		jQuery("#Payments_CardNumber").val(card_number);
	if(jQuery("#Payments_CardNumber").val() != ""){
		$("#hotelBookingRequest").validate().element("#Payments_CardNumber");
		$("#hotelBookingRequest").validate().element("#Payments_MaskCardNumber");
		var cond=$("#hotelBookingRequest").validate().element("#Payments_MaskCardNumber");
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


(function(){

	angular.module('angularPurchase', ['ngAnimate','cgBusy', 'toaster']).controller('purchaseCtrl',['$http','$scope','$timeout','$window','toaster','$filter',function($http,$scope,$timeout,$window,toaster, $filter){ 
		var vm = this;
		//alert("2");
		$scope.IsHidden = true;
		$scope.isDisabled= false;
		$scope.IsShow = false;
		$scope.delay = 0;
		$scope.minDuration = 0;
		$scope.subscribeButton="Apply";
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
				  
				  document.getElementById("popApply").style.display='none'; 
				  if($scope.subscribeButton == 'Apply'){
				  if($scope.selectedCoupons === undefined){
					  var placeholder2 = document.getElementById('couponMessage'); //working
			           placeholder2.innerHTML = "Please fill coupon code First";  
					 // alert("Please fill coupon code First");
				  }else if($scope.selectedCoupons === ""){
					  var placeholder2 = document.getElementById('couponMessage'); //working
			           placeholder2.innerHTML = "Please fill coupon code First"; 
					  //alert("Please fill coupon code First");
				  }else{
						var checkCoupon='/hotel/checkCoupon/'+$scope.selectedCoupons;
							  
				 $http.post(checkCoupon).success(function(response){
						console.log(response);
									
						 angular.forEach(response, function(Flighth) {
							 console.log(Flighth.responseStatus.Status);
							 if(Flighth.responseStatus.Status == 0){
								 $scope.subscribeButton = $scope.subscribed ? 'Apply' : 'Remove';
								 $scope.subscribed = !$scope.subscribed;
					       
					           
                               $scope.couponAmt=Flighth.CouponAmount;
							   
							   var couponId = document.getElementById('couponId'); //working
							   couponId.value = "Yes"; 
					           var placeholder = document.getElementById('couponAmtPlan'); //working

					           placeholder.innerHTML = "-$"+(Flighth.CouponAmount).toFixed(2); 
					           
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
				  }}else{
					  //console.log("subscribeButton: X");
					  $scope.subscribeButton = $scope.subscribed ? 'Apply' : 'Remove';
					  $scope.collapsed =false;
					  $scope.subscribed = !$scope.subscribed;
					  var placeholder = document.getElementById('couponAmtPlan'); //working
			           placeholder.innerHTML = ""; 
			           
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
			      
			      $timeout(function() {
			        var element = $window.document.getElementById(id);
			        if(element)
			          element.focus();
			      });
			    };
			    
			 
			  
			
			  $scope.DobDate=[];
			  $scope.DobMonth=[];
			  $scope.DobYear=[];
           
			  $scope.$watch('selectedCountry', function (newVal) {
                  if (newVal) {
                	  
                	  if(newVal.ID != "US"){
	                          if(newVal.ID == "CA"){
	     						  document.getElementById("statemad").style.display='inline-block'; 
	     					 }else{
	                         	  document.getElementById("statemad").style.display='none'; 
	     					 }
     					 }else
     						 {
     						 document.getElementById("statemad").style.display='inline-block'; 
     						 }
                      
                      if(newVal.ID == "CA"){
                    	  document.getElementById("statemad").style.display='inline-block'; 
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
                	  document.getElementById("statemad").style.display='inline-block'; 
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
                                	   document.getElementById("statemad").style.display='inline-block'; 
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
                                	   document.getElementById("statemad").style.display='inline-block'; 
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
                                       var id2Search = $("#payment_states").val();
                                       if(id2Search != ""){
                                       //filter the array
                                       var foundItem = $filter('filter')($scope.usState, { ID: id2Search  }, true)[0];
                                      // console.log("foundItem:"+foundItem);
                                       //get the index
                                       var index = $scope.usState.indexOf(foundItem);
                                      // console.log("index:"+index);
                                       $scope.selectedItem = $scope.usState[index];
                                       }else{
                                      	 $scope.selectedItem = $scope.usState[0];
                                       }
                                                }else  if(newVal.ID == "0"){
                                                	document.getElementById("statemad").style.display='inline-block'; 
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
                                                    
                                                     
                                                     var id2Search = $("#payment_states").val();
                                                     if(id2Search != ""){
                                                     //filter the array
                                                     var foundItem = $filter('filter')($scope.usState, { ID: id2Search  }, true)[0];
                                                   //  console.log("foundItem:"+foundItem);
                                                     //get the index
                                                     var index = $scope.usState.indexOf(foundItem);
                                                   //  console.log("index:"+index);
                                                     $scope.selectedItem = $scope.usState[index];
                                                     }else{
                                                    	 $scope.selectedItem = $scope.usState[0];
                                                     }
                                                     
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
			  $scope.selectedCountry = $scope.countryList[3];
			  $scope.selectedItem = $scope.usState[0];
			  
			  
        
			
			  
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
	function getcardValue(sel,event){
	$('.spnCardImg>span').removeClass("card-border");
	$('.spnCardImg>span[title="'+sel.value+'"]').addClass('card-border');
}
	
	function insertSpaces(string) {
	    string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
	    string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
	    return string;
	}
	
function setccValue(id,event) {
    
    //  $timeout(function() {
	
	$target = $(event.target);   
	 $target.siblings().removeClass("card-border");
    $target.addClass('card-border');
	if(id=="American Express"){
		   var src = "/resources/images/ccv-img2.gif";
           $("#ccvimg").attr("src", src);
           $("#tooltip").html("<p class=\"text_link\">4 Digit Number From Your Card <span></span> </p>");
	}else{
		   var src = "/resources/images/ccv-img.gif";
           $("#ccvimg").attr("src", src);
           $("#tooltip").html("<p class=\"text_link\">3 Digit Number From Your Card<span> </span> </p>");
	}
		
		
		$("#payment-card").val(id);
   	var card_number = jQuery("#Payments_CardNumber").val();
   	if(card_number == ""){
   		card_number = jQuery("#Payments_MaskCardNumber").val();
   	}
   	
   	if(card_number != ""){
   		jQuery("#Payments_CardNumber").val("");
   		jQuery("#Payments_MaskCardNumber").val(card_number);
   	var conds=$("#hotelBookingRequest").validate().element("#Payments_MaskCardNumber");
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
    		$("#hotelBookingRequest").validate().element("#Payments_CvvNo");
    		 }
		 
		 
	      $("#hotelBookingRequest").validate().element("#payment-card");
	    	  if($("#Payments_CardNumber").val().length > 0){
	        		$("#hotelBookingRequest").validate().element("#Payments_CardNumber");
	        		 }
	    	  if($("#Payments_MaskCardNumber").val().length > 0){
	      		$("#hotelBookingRequest").validate().element("#Payments_CardNumber");
	      		 }		 
	        		 if($("#Payments_CvvNo").val().length > 0){
	             		$("#hotelBookingRequest").validate().element("#Payments_CvvNo");
	             		 }
	 //     });
	    };
	    function cleaner(arr, id) {
	    	 console.log(arr);
	        for (var i = 0; i < arr.length; i++) {
	            var cur = arr[i];
	          //  console.log(cur);
	            if (cur.name == 'payment.cardCode' || cur.name == 'payment.maskCardNumber' || cur.name == 'payment.cardNumber' || cur.name == 'payment.cardHolderName' || cur.name == 'payment.cvvNo' || cur.name == 'payment.expiryMonth' || cur.name == 'payment.expiryYear') {
	            	console.log(cur);
	            	arr.splice(i, 1);
	            	i--;
	            }
	           
	          
	        }
	    }
	    
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
	        		"GB":"^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
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

	    function macpSet(types,values,status){
	    	
	    	var totalValue=document.getElementById('totalValue').value;
	    	var couponAmt=document.getElementById('couponAmt').value;
	    	 var agfees= $('#fareAgentFees').val();
	    	var totbsp=0.0;
	    	if(types == 'CO'){
	    		if(status == 'Y'){
	    			totbsp=(Number(totalValue)+Number(agfees))-Number(values);
	    		}else{
	    			totbsp=Number(totalValue)+Number(agfees)+Number(0);
	    		}
	    		

	    	}else if(types == 'AGF'){
	    		agfees=$("#agFees").val();
	    		if(status == 'Y'){
	    			totbsp=(Number(totalValue)+Number(agfees))-Number(couponAmt);
	    			$("#agFeesDisAmt").html(Number(agfees).toFixed(2));
	    			$("#agFeesRem").show();
	    			$("#agFeesAdd").hide();
	    			$("#fareAgentFees").val(Number(agfees).toFixed(2));
	    			 $( "#agFees" ).prop( "disabled", true );
	    			   
	    			//$("#agFeesDisAmt").disable();
	    		}else{
	    			agfees = 0.0;
	    			totbsp=(Number(totalValue)+Number(agfees))-Number(couponAmt);
	    			$("#agFeesDisAmt").html(Number(agfees).toFixed(2));
	    			$("#agFeesRem").hide();
	    			$("#agFeesAdd").show();
	    			$("#fareAgentFees").val(Number(agfees).toFixed(2));
	    			//$("#agFeesDisAmt").enable();
	    			 $( "#agFees" ).prop( "disabled", false );
	    		}
	    	}
	    	 document.getElementById('publishedFare').innerHTML="<h4><i class='fa fa-<c:out value='${dollar}'/>'></i>"+putThousandsSeparators((totbsp).toFixed(2))+"</h4>";
	      	
	    	
	    	
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
	    function popup(divProgressBar, width, height)
		  {
		      try 
		      {
		          var height1 = $(window).height();
		          var width1 = $(window).width();
		          $('#' + divProgressBar).height(height + "%");
		          $('#' + divProgressBar).width(width + "%");
		        //  $('#' + divProgressBar).css({ top: ((height1 - ((height1 * parseInt(height)) / 100)) / 2).toFixed(0) + "px", left: ((width1 - ((width1 * parseInt(width)) / 100)) / 2).toFixed(0) + "px" });
		           $('#' + divProgressBar).css({ top: "100px", left: ((width1 - ((width1 * parseInt(width)) / 100)) / 2).toFixed(0) + "px" });

		         /* $('#fadebackground').height(height1 + "px");
		          $('#fadebackground').width(width1 + "px");
		          $('#fadebackground').toggle();*/
		          $('#' + divProgressBar).toggle();
		          return false;
		      }
		      catch (e) 
		      {
		      	return false; 
		      }
		  }
		  
		  var sessionTimeout = 20;

		  window.onload = DisplaySessionTimeout();

		  function DisplaySessionTimeout()
		  {
		      sessionTimeout = sessionTimeout - 1;
		      console.log("DisplaySessionTimeout()");
		      if (sessionTimeout >= 0)
		          window.setTimeout("DisplaySessionTimeout()", 20000);
		      else 
		      {
		          callSessionTimeOut();
		      }
		  };

		  function callSessionTimeOut()
		  {
		  	 //form_data = "";
			  popup('divSessionOut', 30, 30);
			 // $("#myModal").modal('show');
		  	 console.log("Session Time out");
		       return true;
		  };
