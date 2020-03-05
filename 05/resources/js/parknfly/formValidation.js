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
				//alert("country");
               // $('div.box').hide();
                //$('div.box.' + $(this).val()).show();
        		 if($("#payment_postalCode").val().length > 0){
        		$("#parkingBookingRequest").validate().element("#payment_postalCode");
        		 }
        	
            });
            $("#Payments_State").change(function(){
				//alert("state");
			});
            $("#payment-card").change(function () {
				//alert("payment card");
               // $('div.box').hide();
                //$('div.box.' + $(this).val()).show();
            //	console.log($("#payment-card").val());
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
            	var conds=$("#parkingBookingRequest").validate().element("#Payments_MaskCardNumber");
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
        		$("#parkingBookingRequest").validate().element("#Payments_CardNumber");
        		 }
        		 if($("#Payments_MaskCardNumber").val().length > 0){
             		$("#parkingBookingRequest").validate().element("#Payments_CardNumber");
             		 }*/
        		 if($("#Payments_CvvNo").val().length > 0){
             		$("#parkingBookingRequest").validate().element("#Payments_CvvNo");
             		 }
        		 
            })
        
			   
            
            //form validation rules
            $("#parkingBookingRequest").validate({
            	
                rules: {       
                	       'customerDetail.gender': {
                		    required: true,
                		    titlereq: true
                			},
                		   'customerDetail.firstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'customerDetail.lastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'customerDetail.day': {
                		     selectdate: true,
                		     //age_val:0
                			},
                			'customerDetail.month': {
                		     selectmonth: true,
                		    // age_val:0
                		     
                			},
                			'customerDetail.year': {
                		     selectyear: true,
                		    // age_val:0
                			},
                			
                		  'payment.cardCode': {
                				selectcard: true,
                				/*depends: function(element) {
                                    return (cc_brand_id($("#Payments_CardNumber").val(),$("#payment-card").val()));
                                },*/
                			//	cccardvalue:true
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
							'payment.amountToCharge':{
                				//required: card2Required,
                				amountnumeric: true,
                				 notEqual: '0.00',
                				 notEquals: '0'
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
                		       if ($(element).attr("name") == "passengerList[0].FirstName" || $(element).attr("name") == "passengerList[0].LastName" || $(element).attr("name") == "passengerList[0].DobDate" || $(element).attr("name") == "passengerList[0].DobMonth" || $(element).attr("name") == "passengerList[0].DobYear") {
                    		          $("#errors0").removeClass('help-block').addClass('valid');
                       		        }else if ($(element).attr("name") == "payment.expiryMonth" || $(element).attr("name") == "payment.expiryYear") {
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
       			/*	'payment.maskCardNumber': {
       					required: "<i class='fa fa-angle-double-right'></i> Please provide credit or debit card number",
       					minlength: "<i class='fa fa-angle-double-right'></i> Please provide valid credit or debit card number",
       					maxlength: "<i class='fa fa-angle-double-right'></i> Please provide valid credit or debit card number"
       				},*/
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
                	/*    $('#target').html2canvas({
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
                		});*/
                	   
                   
                	form.submit();
              
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
        
       
        jQuery.validator.addMethod('CCExp', function(value, element, params) {
            var minMonth = new Date().getMonth() + 1;
            var minYear = new Date().getFullYear();
            var month = parseInt($(params.month).val(), 10);
            var year = parseInt($(params.year).val(), 10);
            return (year > minYear || (year === minYear && month >= minMonth));
      }, '<i class="fa fa-angle-double-right"></i> Your Credit Card Expiration date is invalid.');
        
        
         
    	$("#Payments_ExpiryMonth").change(function () {
     		 if($("#Payments_ExpiryYear").val() != "Year"){
     		$("#parkingBookingRequest").validate().element("#Payments_ExpiryYear");
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
          
         var card2Required = false; 
          
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
          }, "");
      	
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
          }, "");
          $.validator.addMethod('selectmonth', function (value) {
              return (value != 'Month');
          }, "");
          $.validator.addMethod('selectyear', function (value) {
              return (value != 'Year');
          }, " ");
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
	var conds=$("#parkingBookingRequest").validate().element("#Payments_MaskCardNumber");
	//console.log("cond 1:"+conds);
	if(conds){
		jQuery("#Payments_CardNumber").val(card_number);
	if(jQuery("#Payments_CardNumber").val() != ""){
		$("#parkingBookingRequest").validate().element("#Payments_CardNumber");
		$("#parkingBookingRequest").validate().element("#Payments_MaskCardNumber");
		var cond=$("#parkingBookingRequest").validate().element("#Payments_MaskCardNumber");
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
	var conds=$("#parkingBookingRequest").validate().element("#Payments_MaskCardNumber");
	//console.log("cond 1:"+conds);
	if(conds){
		jQuery("#Payments_CardNumber").val(card_number);
	if(jQuery("#Payments_CardNumber").val() != ""){
		$("#parkingBookingRequest").validate().element("#Payments_CardNumber");
		$("#parkingBookingRequest").validate().element("#Payments_MaskCardNumber");
		var cond=$("#parkingBookingRequest").validate().element("#Payments_MaskCardNumber");
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

/*

function submitForm(){
	alert("submitting...");
	var frm = $('form#parkingBookingRequest');
	
	 var rndId = randomString(12);
	 document.getElementById("finalId").value=rndId;
	 if($('#currentDevice').val()=="Normal"){
		  $('form#parkingBookingRequest').attr({action: '/flightbook/'+rndId});  
    }else if($('#currentDevice').val()=="Mobile"){
   	  $('form#parkingBookingRequest').attr({action: '/m/flightbook/'+rndId});  
    }else if($('#currentDevice').val()=="Tablet"){
   	  $('form#parkingBookingRequest').attr({action: '/t/flightbook/'+rndId});  
    }else{
   	  $('form#parkingBookingRequest').attr({action: '/flightbook/'+rndId});  
    }
	 bookButtonSetSeats();
    //  $('form#parkingBookingRequest').attr({action: '/flightbook/'+rndId});    
      $('form#parkingBookingRequest').submit();
     
	 }

*/
	 function getcardValue(sel,event){ 
		//alert("from get card value");
	$('.spnCardImg>a').removeClass("card-border");
	$('.spnCardImg>a[title="'+sel.value+'"]').addClass('card-border');
	}
	   $("#payment-card").change(function () {
				//alert("payment card");
               // $('div.box').hide();
                //$('div.box.' + $(this).val()).show();
            //	console.log($("#payment-card").val());
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
            	var conds=$("#parkingBookingRequest").validate().element("#Payments_MaskCardNumber");
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

           	
            	
        		 if($("#Payments_CardNumber").val().length > 0){
        		$("#parkingBookingRequest").validate().element("#Payments_CardNumber");
        		 }
        		 if($("#Payments_MaskCardNumber").val().length > 0){
             		$("#parkingBookingRequest").validate().element("#Payments_CardNumber");
             		 }
        		 if($("#Payments_CvvNo").val().length > 0){
             		$("#parkingBookingRequest").validate().element("#Payments_CvvNo");
             		 }
        		 
            });
function setccValue(id,event) {
    //alert("ok");
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
		console.log("card number : "+card_number);
   		jQuery("#Payments_MaskCardNumber").val(card_number);
   	var conds=$("#parkingBookingRequest").validate().element("#Payments_MaskCardNumber");
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
    		$("#parkingBookingRequest").validate().element("#Payments_CvvNo");
    		 }
		 
		 
	      $("#parkingBookingRequest").validate().element("#payment-card");
    	  if($("#Payments_CardNumber").val().length > 0){
        		$("#parkingBookingRequest").validate().element("#Payments_CardNumber");
        		 }
    	  if($("#Payments_MaskCardNumber").val().length > 0){
      		$("#parkingBookingRequest").validate().element("#Payments_CardNumber");
      		 }
        		 if($("#Payments_CvvNo").val().length > 0){
             		$("#parkingBookingRequest").validate().element("#Payments_CvvNo");
             		 }
 //     });
		
    };	
    
    function submitForm(){
    	
    	//popup('divProgressbar', 30, 30);
    	
    	var frm = $('form#parkingBookingRequest');
    	var parknflyId =  document.getElementById("parknflyId").value;
    	//alert("agent fee value is : "+$("#agentFee").val());
    	 key=false;
    	 var rndId = randomString(12);
    	// document.getElementById("finalId").value=rndId;
          $('form#parkingBookingRequest').attr({action: '/parknfly/booked'});    
         
          $('form#parkingBookingRequest').submit();
          
          
    	 }

    function submitForm2(){
    	//alert("yes submitting...");
    	var frm = $('form#parkingBookingRequest');
    	 var parknflyId =  document.getElementById("parknflyId").value;
    	 //alert("parking id: "+parknflyId);
    	 
//    	var data = JSON.stringify(frm.serializeArray());
//    	var bookingdata =jQuery.parseJSON(data);
    	//console.log(data);
//    	 cleaner(bookingdata, "payment.cardCode");
    	// console.log(bookingdata);
//    	localStorage.setItem('ls.paymentPage',JSON.stringify(bookingdata));
    	 frm.validate();
    	 var rndId = randomString(12);
    	console.log("rndId : "+rndId);
    	 
       	  $('form#parkingBookingRequest').attr({action: '/parknfly/booked/'+parknflyId+'/'+rndId});  
        
    	
          //$('form#parkingBookingRequest').attr({action: '/parknfly/booked/'+parknflyId+'/'+rndId});    
    	 //alert("yes submitting at.../parknfly/booked/"+parknflyId+"/"+rndId);
          $('form#parkingBookingRequest').submit();
        
    	
    	// frm.submit();
    	 }



   function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    console.log("making random number");	
    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log("Random No : "+ str);
    return str;
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

/*
    cardtype.add("Visa");
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



