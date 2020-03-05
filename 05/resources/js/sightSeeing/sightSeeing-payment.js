(function($, W, D){
	var JQUERY4U = {};
	JQUERY4U.UTIL = {
			setupFormValidation: function(){
	            $('.numbersOnly').keyup(function() {
	                if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
	                    this.value = this.value.replace(/[^0-9\.]/g, '');
	                }
	            });
	            $('.numbersastOnly').keyup(function() {
	                if (this.value != this.value.replace(/[^0-9\.*]/g, '')) {
	                    this.value = this.value.replace(/[^0-9\.*]/g, '');
	                }
	            });
	            
	            
	            $('.numbersastseveOnly').keyup(function() {

	                if ($("#payment-card").val() == "American Express") {
	                    if (this.value.length > 15) {
	                        this.value = this.value.substring(0, 15);
	                        return false;
	                    }
	                } else {
	                    if (this.value.length > 16) {
	                        this.value = this.value.substring(0, 16);
	                        return false;

	                    }
	                }
	            });

	            $('.textOnly').keyup(function() {
	                if (this.value != this.value.replace(/[^a-zA-Z ]+/g, '')) {
	                    this.value = this.value.replace(/[^a-zA-Z ]+/g, '');
	                }
	            });
	            
	            $('.noSpace').on('keypress', function(e) {
	            	if (e.which == 32)
	            		return false;
    			});
	            
	            $("#Payments_Country").change(function() {

	                if ($("#payment_postalCode").val().length > 0) {
	                    $("#sightSeeingBookingRequestAttr").validate().element("#payment_postalCode");
	                }

	            });


	            $("#payment-card").change(function() {

	                if ($("#payment-card").val() == "American Express") {
	                    var src = "/resources/assets/ccv-img2.gif";
	                    $("#ccvimg").attr("src", src);
	                    $("#tooltip").html("<span class=\"ccv-card\">4 Digit Number From Your Card<span class=\"cardImg\"></span></span>");
	                } else if ($("#payment-card").val() == "Master Card") {
	                    var src = "/resources/assets/ccv-img.gif";
	                    $("#ccvimg").attr("src", src);
	                    $("#tooltip").html("<span class=\"ccv-card\">3/4 Digit Number From Your Card<span class=\"cardImg\"></span></span>");
	                } else {
	                    var src = "/resources/assets/ccv-img.gif";
	                    $("#ccvimg").attr("src", src);
	                    $("#tooltip").html("<span class=\"ccv-card\">3 Digit Number From Your Card<span class=\"cardImg\"></span></span>");
	                }

	                var card_number = jQuery("#Payments_CardNumber").val();
	                if (card_number == "") {
	                    card_number = jQuery("#Payments_MaskCardNumber").val();
	                }

	                if (card_number != "") {
	                    jQuery("#Payments_CardNumber").val("");
	                    jQuery("#Payments_MaskCardNumber").val(card_number);
	                    var conds = $("#sightSeeingBookingRequestAttr").validate().element("#Payments_MaskCardNumber");
	                    if (conds) {
	                        jQuery("#Payments_CardNumber").val(card_number);

	                        var new_card_number = "************";
	                        for (var loop2 = 12; loop2 < card_number.length; loop2++) {
	                            new_card_number = new_card_number + card_number.charAt(loop2);
	                        }
	                        jQuery("#Payments_MaskCardNumber").val(new_card_number);
	                    }
	                }

	                if ($("#Payments_CvvNo").val().length > 0) {
	                    $("#sightSeeingBookingRequestAttr").validate().element("#Payments_CvvNo");
	                }
	            })


	            //form validation rules
	            $("#sightSeeingBookingRequestAttr").validate({

	                rules: {
	                	'sightSeeingBookingList[0].travellerDetail[0].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[0].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[0].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[0].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[0].travellerDetail[1].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[1].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[1].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[1].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[0].travellerDetail[2].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[2].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[2].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[2].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[0].travellerDetail[3].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[3].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[3].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[3].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[0].travellerDetail[4].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[4].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[4].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[4].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[0].travellerDetail[5].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[5].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[5].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[5].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[0].travellerDetail[6].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[6].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[6].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[6].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[0].travellerDetail[7].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[7].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[7].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[7].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[0].travellerDetail[8].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[8].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[0].travellerDetail[8].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[8].dob': { required: true, requiredTextvalue: true},

	                	'sightSeeingBookingList[1].travellerDetail[0].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[0].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[0].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[0].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[1].travellerDetail[1].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[1].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[1].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[1].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[1].travellerDetail[2].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[2].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[2].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[2].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[1].travellerDetail[3].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[3].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[3].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[3].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[1].travellerDetail[4].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[4].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[4].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[4].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[1].travellerDetail[5].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[5].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[5].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[5].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[1].travellerDetail[6].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[6].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[6].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[6].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[1].travellerDetail[7].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[7].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[7].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[7].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[1].travellerDetail[8].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[8].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[1].travellerDetail[8].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[8].dob': { required: true, requiredTextvalue: true},

	                	'sightSeeingBookingList[2].travellerDetail[0].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[0].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[0].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[0].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[2].travellerDetail[1].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[1].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[1].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[1].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[2].travellerDetail[2].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[2].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[2].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[2].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[2].travellerDetail[3].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[3].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[3].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[3].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[2].travellerDetail[4].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[4].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[4].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[4].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[2].travellerDetail[5].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[5].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[5].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[5].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[2].travellerDetail[6].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[6].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[6].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[6].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[2].travellerDetail[7].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[7].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[7].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[7].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[2].travellerDetail[8].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[8].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[2].travellerDetail[8].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[8].dob': { required: true, requiredTextvalue: true},

	                	'sightSeeingBookingList[3].travellerDetail[0].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[0].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[0].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[0].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[3].travellerDetail[1].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[1].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[1].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[1].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[3].travellerDetail[2].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[2].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[2].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[2].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[3].travellerDetail[3].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[3].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[3].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[3].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[3].travellerDetail[4].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[4].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[4].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[4].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[3].travellerDetail[5].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[5].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[5].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[5].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[3].travellerDetail[6].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[6].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[6].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[6].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[3].travellerDetail[7].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[7].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[7].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[7].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[3].travellerDetail[8].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[8].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[3].travellerDetail[8].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[8].dob': { required: true, requiredTextvalue: true},

	                	'sightSeeingBookingList[4].travellerDetail[0].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[0].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[0].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[0].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[4].travellerDetail[1].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[1].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[1].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[1].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[4].travellerDetail[2].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[2].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[2].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[2].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[4].travellerDetail[3].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[3].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[3].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[3].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[4].travellerDetail[4].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[4].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[4].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[4].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[4].travellerDetail[5].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[5].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[5].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[5].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[4].travellerDetail[6].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[6].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[6].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[6].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[4].travellerDetail[7].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[7].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[7].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[7].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[4].travellerDetail[8].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[8].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[4].travellerDetail[8].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[8].dob': { required: true, requiredTextvalue: true},

	                	'sightSeeingBookingList[5].travellerDetail[0].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[0].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[0].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[0].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[5].travellerDetail[1].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[1].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[1].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[1].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[5].travellerDetail[2].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[2].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[2].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[2].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[5].travellerDetail[3].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[3].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[3].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[3].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[5].travellerDetail[4].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[4].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[4].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[4].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[5].travellerDetail[5].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[5].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[5].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[5].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[5].travellerDetail[6].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[6].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[6].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[6].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[5].travellerDetail[7].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[7].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[7].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[7].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[5].travellerDetail[8].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[8].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[5].travellerDetail[8].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[8].dob': { required: true, requiredTextvalue: true},


	                	'sightSeeingBookingList[6].travellerDetail[0].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[0].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[0].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[0].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[6].travellerDetail[1].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[1].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[1].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[1].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[6].travellerDetail[2].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[2].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[2].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[2].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[6].travellerDetail[3].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[3].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[3].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[3].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[6].travellerDetail[4].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[4].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[4].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[4].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[6].travellerDetail[5].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[5].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[5].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[5].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[6].travellerDetail[6].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[6].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[6].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[6].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[6].travellerDetail[7].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[7].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[7].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[7].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[6].travellerDetail[8].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[8].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[6].travellerDetail[8].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[8].dob': { required: true, requiredTextvalue: true},


	                	'sightSeeingBookingList[7].travellerDetail[0].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[0].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[0].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[0].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[7].travellerDetail[1].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[1].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[1].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[1].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[7].travellerDetail[2].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[2].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[2].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[2].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[7].travellerDetail[3].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[3].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[3].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[3].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[7].travellerDetail[4].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[4].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[4].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[4].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[7].travellerDetail[5].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[5].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[5].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[5].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[7].travellerDetail[6].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[6].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[6].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[6].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[7].travellerDetail[7].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[7].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[7].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[7].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[7].travellerDetail[8].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[8].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[7].travellerDetail[8].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[8].dob': { required: true, requiredTextvalue: true},


	                	'sightSeeingBookingList[8].travellerDetail[0].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[0].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[0].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[0].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[8].travellerDetail[1].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[1].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[1].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[1].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[8].travellerDetail[2].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[2].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[2].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[2].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[8].travellerDetail[3].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[3].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[3].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[3].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[8].travellerDetail[4].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[4].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[4].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[4].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[8].travellerDetail[5].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[5].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[5].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[5].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[8].travellerDetail[6].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[6].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[6].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[6].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[8].travellerDetail[7].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[7].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[7].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[7].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[8].travellerDetail[8].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[8].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[8].travellerDetail[8].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[8].dob': { required: true, requiredTextvalue: true},


	                	'sightSeeingBookingList[9].travellerDetail[0].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[0].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[0].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[0].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[9].travellerDetail[1].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[1].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[1].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[1].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[9].travellerDetail[2].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[2].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[2].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[2].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[9].travellerDetail[3].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[3].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[3].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[3].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[9].travellerDetail[4].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[4].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[4].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[4].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[9].travellerDetail[5].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[5].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[5].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[5].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[9].travellerDetail[6].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[6].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[6].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[6].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[9].travellerDetail[7].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[7].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[7].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[7].dob': { required: true, requiredTextvalue: true},
	                	'sightSeeingBookingList[9].travellerDetail[8].firstName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[8].lastName': { required: true, requiredTextvalue: true, lettersonly: true },
	                	'sightSeeingBookingList[9].travellerDetail[8].weight': { required: true, requiredvalue: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[8].dob': { required: true, requiredTextvalue: true},
	                	
	                	'sightSeeingBookingList[0].bookingQuestionsList[0].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[0].bookingQuestionsList[1].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[0].bookingQuestionsList[2].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[0].bookingQuestionsList[3].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[0].bookingQuestionsList[4].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[0].bookingQuestionsList[5].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[0].bookingQuestionsList[6].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[0].bookingQuestionsList[7].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[0].bookingQuestionsList[8].queryResponse': { required: true, requiredTextvalue: true },

	                	'sightSeeingBookingList[1].bookingQuestionsList[0].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[1].bookingQuestionsList[1].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[1].bookingQuestionsList[2].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[1].bookingQuestionsList[3].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[1].bookingQuestionsList[4].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[1].bookingQuestionsList[5].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[1].bookingQuestionsList[6].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[1].bookingQuestionsList[7].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[1].bookingQuestionsList[8].queryResponse': { required: true, requiredTextvalue: true },

	                	'sightSeeingBookingList[2].bookingQuestionsList[0].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[2].bookingQuestionsList[1].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[2].bookingQuestionsList[2].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[2].bookingQuestionsList[3].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[2].bookingQuestionsList[4].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[2].bookingQuestionsList[5].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[2].bookingQuestionsList[6].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[2].bookingQuestionsList[7].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[2].bookingQuestionsList[8].queryResponse': { required: true, requiredTextvalue: true },

	                	'sightSeeingBookingList[3].bookingQuestionsList[0].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[3].bookingQuestionsList[1].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[3].bookingQuestionsList[2].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[3].bookingQuestionsList[3].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[3].bookingQuestionsList[4].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[3].bookingQuestionsList[5].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[3].bookingQuestionsList[6].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[3].bookingQuestionsList[7].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[3].bookingQuestionsList[8].queryResponse': { required: true, requiredTextvalue: true },

	                	'sightSeeingBookingList[4].bookingQuestionsList[0].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[4].bookingQuestionsList[1].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[4].bookingQuestionsList[2].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[4].bookingQuestionsList[3].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[4].bookingQuestionsList[4].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[4].bookingQuestionsList[5].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[4].bookingQuestionsList[6].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[4].bookingQuestionsList[7].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[4].bookingQuestionsList[8].queryResponse': { required: true, requiredTextvalue: true },

	                	'sightSeeingBookingList[5].bookingQuestionsList[0].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[5].bookingQuestionsList[1].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[5].bookingQuestionsList[2].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[5].bookingQuestionsList[3].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[5].bookingQuestionsList[4].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[5].bookingQuestionsList[5].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[5].bookingQuestionsList[6].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[5].bookingQuestionsList[7].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[5].bookingQuestionsList[8].queryResponse': { required: true, requiredTextvalue: true },

	                	'sightSeeingBookingList[6].bookingQuestionsList[0].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[6].bookingQuestionsList[1].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[6].bookingQuestionsList[2].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[6].bookingQuestionsList[3].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[6].bookingQuestionsList[4].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[6].bookingQuestionsList[5].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[6].bookingQuestionsList[6].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[6].bookingQuestionsList[7].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[6].bookingQuestionsList[8].queryResponse': { required: true, requiredTextvalue: true },

	                	'sightSeeingBookingList[7].bookingQuestionsList[0].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[7].bookingQuestionsList[1].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[7].bookingQuestionsList[2].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[7].bookingQuestionsList[3].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[7].bookingQuestionsList[4].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[7].bookingQuestionsList[5].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[7].bookingQuestionsList[6].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[7].bookingQuestionsList[7].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[7].bookingQuestionsList[8].queryResponse': { required: true, requiredTextvalue: true },

	                	'sightSeeingBookingList[8].bookingQuestionsList[0].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[8].bookingQuestionsList[1].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[8].bookingQuestionsList[2].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[8].bookingQuestionsList[3].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[8].bookingQuestionsList[4].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[8].bookingQuestionsList[5].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[8].bookingQuestionsList[6].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[8].bookingQuestionsList[7].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[8].bookingQuestionsList[8].queryResponse': { required: true, requiredTextvalue: true },

	                	'sightSeeingBookingList[9].bookingQuestionsList[0].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[9].bookingQuestionsList[1].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[9].bookingQuestionsList[2].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[9].bookingQuestionsList[3].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[9].bookingQuestionsList[4].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[9].bookingQuestionsList[5].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[9].bookingQuestionsList[6].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[9].bookingQuestionsList[7].queryResponse': { required: true, requiredTextvalue: true },
	                	'sightSeeingBookingList[9].bookingQuestionsList[8].queryResponse': { required: true, requiredTextvalue: true },
	                	
	                	'sightSeeingBookingList[0].travellerDetail[0].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[1].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[2].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[3].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[4].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[5].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[6].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[7].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[0].travellerDetail[8].passengerHeight': { required: true, number: true },

	                	'sightSeeingBookingList[1].travellerDetail[0].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[1].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[2].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[3].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[4].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[5].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[6].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[7].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[1].travellerDetail[8].passengerHeight': { required: true, number: true },

	                	'sightSeeingBookingList[2].travellerDetail[0].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[1].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[2].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[3].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[4].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[5].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[6].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[7].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[2].travellerDetail[8].passengerHeight': { required: true, number: true },

	                	'sightSeeingBookingList[3].travellerDetail[0].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[1].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[2].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[3].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[4].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[5].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[6].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[7].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[3].travellerDetail[8].passengerHeight': { required: true, number: true },

	                	'sightSeeingBookingList[4].travellerDetail[0].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[1].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[2].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[3].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[4].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[5].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[6].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[7].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[4].travellerDetail[8].passengerHeight': { required: true, number: true },

	                	'sightSeeingBookingList[5].travellerDetail[0].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[1].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[2].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[3].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[4].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[5].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[6].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[7].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[5].travellerDetail[8].passengerHeight': { required: true, number: true },

	                	'sightSeeingBookingList[6].travellerDetail[0].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[1].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[2].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[3].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[4].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[5].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[6].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[7].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[6].travellerDetail[8].passengerHeight': { required: true, number: true },

	                	'sightSeeingBookingList[7].travellerDetail[0].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[1].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[2].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[3].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[4].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[5].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[6].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[7].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[7].travellerDetail[8].passengerHeight': { required: true, number: true },

	                	'sightSeeingBookingList[8].travellerDetail[0].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[1].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[2].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[3].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[4].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[5].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[6].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[7].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[8].travellerDetail[8].passengerHeight': { required: true, number: true },

	                	'sightSeeingBookingList[9].travellerDetail[0].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[1].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[2].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[3].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[4].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[5].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[6].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[7].passengerHeight': { required: true, number: true },
	                	'sightSeeingBookingList[9].travellerDetail[8].passengerHeight': { required: true, number: true },

	                	
	                	'sightSeeingBookingList[0].languagePicked': {selectlanguage: true},
	                	'sightSeeingBookingList[1].languagePicked': {selectlanguage: true},
	                	'sightSeeingBookingList[2].languagePicked': {selectlanguage: true},
	                	'sightSeeingBookingList[3].languagePicked': {selectlanguage: true},
	                	'sightSeeingBookingList[4].languagePicked': {selectlanguage: true},
	                	'sightSeeingBookingList[5].languagePicked': {selectlanguage: true},
	                	'sightSeeingBookingList[6].languagePicked': {selectlanguage: true},
	                	'sightSeeingBookingList[7].languagePicked': {selectlanguage: true},
	                	'sightSeeingBookingList[8].languagePicked': {selectlanguage: true},
	                	'sightSeeingBookingList[9].languagePicked': {selectlanguage: true},
	                	
	                	'sightSeeingBookingList[0].hotelName': { required : function(){if($("#hotelListId0").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[1].hotelName': { required : function(){if($("#hotelListId1").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[2].hotelName': { required : function(){if($("#hotelListId2").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[3].hotelName': { required : function(){if($("#hotelListId3").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[4].hotelName': { required : function(){if($("#hotelListId4").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[5].hotelName': { required : function(){if($("#hotelListId5").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[6].hotelName': { required : function(){if($("#hotelListId6").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[7].hotelName': { required : function(){if($("#hotelListId7").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[8].hotelName': { required : function(){if($("#hotelListId8").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[9].hotelName': { required : function(){if($("#hotelListId9").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[10].hotelName': { required : function(){if($("#hotelListId10").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[11].hotelName': { required : function(){if($("#hotelListId11").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[12].hotelName': { required : function(){if($("#hotelListId12").is(":visible")){return true;} else {return false;}}},
	                	'sightSeeingBookingList[13].hotelName': { required : function(){if($("#hotelListId13").is(":visible")){return true;} else {return false;}}},
	                	

	                	
	                	'sightSeeingBookingList[0].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[0].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[0].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[0].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[0].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[0].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[0].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[0].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[0].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[1].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[1].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[1].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[1].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[1].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[1].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[1].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[1].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[1].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[2].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[2].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[2].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[2].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[2].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[2].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[2].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[2].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[2].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[3].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[3].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[3].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[3].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[3].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[3].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[3].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[3].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[3].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[4].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[4].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[4].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[4].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[4].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[4].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[4].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[4].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[4].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[5].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[5].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[5].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[5].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[5].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[5].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[5].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[5].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[5].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[6].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[6].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[6].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[6].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[6].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[6].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[6].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[6].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[6].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[7].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[7].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[7].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[7].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[7].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[7].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[7].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[7].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[7].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[8].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[8].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[8].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[8].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[8].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[8].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[8].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[8].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[8].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[9].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[9].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[9].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[9].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[9].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[9].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[9].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[9].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[9].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[10].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[10].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[10].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[10].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[10].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[10].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[10].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[10].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[10].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[11].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[11].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[11].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[11].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[11].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[11].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[11].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[11].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[11].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[12].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[12].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[12].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[12].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[12].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[12].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[12].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[12].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[12].travellerDetail[8].weightCategory': { selectWC: true },

	                	'sightSeeingBookingList[13].travellerDetail[0].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[13].travellerDetail[1].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[13].travellerDetail[2].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[13].travellerDetail[3].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[13].travellerDetail[4].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[13].travellerDetail[5].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[13].travellerDetail[6].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[13].travellerDetail[7].weightCategory': { selectWC: true },
	                	'sightSeeingBookingList[13].travellerDetail[8].weightCategory': { selectWC: true },

	                    'payment.cardCode': {
	                        selectcard: true
	                    },
	                    'payment.maskCardNumber': {
	                        required: true,
	                        ccMaskCheckvalue: true,
	                        minlength: function(element) {
	                            if ($("#payment-card").val() == "American Express") {
	                                return 15;
	                            } else {
	                                return 16;
	                            }
	                        },
	                        maxlength: function(element) {
	                            if ($("#payment-card").val() == "American Express") {
	                                return 15;
	                            } else {
	                                return 16;
	                            }
	                        },
	                    },
	                    'payment.cardNumber': {
	                        required: true,
	                        number: true,
	                        ccCheckvalue: true,
	                        minlength: function(element) {

	                            if ($("#payment-card").val() == "American Express") {
	                                return 15;
	                            } else {
	                                return 16;
	                            }
	                        },
	                        //minlength: 15,
	                        maxlength: function(element) {
	                            if ($("#payment-card").val() == "American Express") {
	                                return 15;
	                            } else {
	                                return 16;
	                            }
	                        },
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
	                        minlength: function(element) {

	                            if ($("#payment-card").val() == "American Express") {
	                                return 4;
	                            } else {
	                                return 3;
	                            }
	                        },
	                        //minlength: 15,
	                        maxlength: function(element) {
	                            if (($("#payment-card").val() == "American Express") || ($("#payment-card").val() == "Master Card")) {
	                                return 4;
	                            } else {
	                            	return 3;	
	                            }
	                        },
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
	                        zipval: true,
	                    },
	                    'contact.billingPhone': {
	                        required: true,
	                        minlength: 10,
	                        maxlength: 15,
	                        number: true
	                    },
	                    'contact.mobile': {
	                        minlength: 10,
	                        maxlength: 15,
	                        number: true
	                    },
	                    'contact.email': {
	                        required: true,
	                        email: true
	                    },
	                    'contact.email2': {
	                        required: true,
	                        email: true,
	        				emailEq: true
	                    },
	                },
	                onkeyup: false,
	                onblur: false,
	                onclick: false,
	                onfocusout: function(element) {
	                    $(element).valid();
	                },
	                highlight: function(element) {
	                    $(element).closest('.form-control.form-group').removeClass('valid').addClass('has-error');
	                    $(element).addClass('select-class');
	                    $(element).addClass('radio-class');
	                    
	                    if ($(element).attr("name") == "sightSeeingBookingList[0].travellerDetail[0].firstName" || $(element).attr("name") == "sightSeeingBookingList[0].travellerDetail[0].lastName" || $(element).attr("name") == "sightSeeingBookingList[0].travellerDetail[0].weight") {
	                        $("#errors0").addClass('help-block').removeClass('valid');
	                    } else if ($(element).attr("name") == "payment.expiryMonth" || $(element).attr("name") == "payment.expiryYear" || $(element).attr("name") == "payment.maskCardNumber") {
	                        $("#Experrors").addClass('help-block');
	                    }
	                },
	                unhighlight: function(element) {
						$(element).closest('.form-control.form-group').removeClass('has-error').addClass('valid');
	                    $(element).removeClass('select-class');
	                    $(element).removeClass('radio-class');
	                    if ($(element).attr("name") == "payment.expiryMonth" || $(element).attr("name") == "payment.expiryYear") {
	                        $("#Experrors").removeClass('help-block').addClass('valid');
	                    }
	                },
	                errorElement: 'span',
	                errorClass: 'help-block',
	                errorPlacement: function(error, element) {
	                    if (element.attr("name") == "payment.expiryMonth" || element.attr("name") == "payment.expiryYear") {
           		         //   error.insertAfter(".dateWrap");
        		        	error.css('float', 'none');
        		        	element.append($('<br />'));
        		        	$("#Experrors").addClass('help-block');
        		        	//error.removeClass("help-block");
        		            error.appendTo("#Experrors");
        		           
        		        } else if (element.parent('.input-group').length) {
	                        error.insertAfter(element.parent());
	                    } else error.insertAfter(element);

	                },
	                messages: {
	                    'payment.postalCode': {
	                        remote: "Please provide valid Postal Code.",
	                    },
	                    'sightSeeingBookingList[0].travellerDetail[0].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[0].travellerDetail[0].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[0].travellerDetail[0].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[0].travellerDetail[1].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[0].travellerDetail[1].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[0].travellerDetail[1].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[0].travellerDetail[2].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[0].travellerDetail[2].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[0].travellerDetail[2].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[0].travellerDetail[3].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[0].travellerDetail[3].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[0].travellerDetail[3].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[0].travellerDetail[4].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[0].travellerDetail[4].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[0].travellerDetail[4].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[0].travellerDetail[5].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[0].travellerDetail[5].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[0].travellerDetail[5].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[0].travellerDetail[6].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[0].travellerDetail[6].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[0].travellerDetail[6].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[0].travellerDetail[7].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[0].travellerDetail[7].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[0].travellerDetail[7].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[0].travellerDetail[8].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[0].travellerDetail[8].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[0].travellerDetail[8].weight': { required: "Please provide weight" },

	                    'sightSeeingBookingList[1].travellerDetail[0].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[1].travellerDetail[0].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[1].travellerDetail[0].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[1].travellerDetail[1].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[1].travellerDetail[1].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[1].travellerDetail[1].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[1].travellerDetail[2].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[1].travellerDetail[2].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[1].travellerDetail[2].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[1].travellerDetail[3].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[1].travellerDetail[3].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[1].travellerDetail[3].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[1].travellerDetail[4].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[1].travellerDetail[4].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[1].travellerDetail[4].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[1].travellerDetail[5].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[1].travellerDetail[5].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[1].travellerDetail[5].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[1].travellerDetail[6].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[1].travellerDetail[6].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[1].travellerDetail[6].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[1].travellerDetail[7].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[1].travellerDetail[7].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[1].travellerDetail[7].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[1].travellerDetail[8].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[1].travellerDetail[8].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[1].travellerDetail[8].weight': { required: "Please provide weight" },

	                    'sightSeeingBookingList[2].travellerDetail[0].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[2].travellerDetail[0].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[2].travellerDetail[0].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[2].travellerDetail[1].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[2].travellerDetail[1].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[2].travellerDetail[1].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[2].travellerDetail[2].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[2].travellerDetail[2].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[2].travellerDetail[2].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[2].travellerDetail[3].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[2].travellerDetail[3].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[2].travellerDetail[3].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[2].travellerDetail[4].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[2].travellerDetail[4].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[2].travellerDetail[4].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[2].travellerDetail[5].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[2].travellerDetail[5].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[2].travellerDetail[5].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[2].travellerDetail[6].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[2].travellerDetail[6].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[2].travellerDetail[6].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[2].travellerDetail[7].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[2].travellerDetail[7].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[2].travellerDetail[7].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[2].travellerDetail[8].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[2].travellerDetail[8].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[2].travellerDetail[8].weight': { required: "Please provide weight" },

	                    'sightSeeingBookingList[3].travellerDetail[0].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[3].travellerDetail[0].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[3].travellerDetail[0].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[3].travellerDetail[1].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[3].travellerDetail[1].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[3].travellerDetail[1].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[3].travellerDetail[2].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[3].travellerDetail[2].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[3].travellerDetail[2].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[3].travellerDetail[3].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[3].travellerDetail[3].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[3].travellerDetail[3].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[3].travellerDetail[4].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[3].travellerDetail[4].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[3].travellerDetail[4].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[3].travellerDetail[5].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[3].travellerDetail[5].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[3].travellerDetail[5].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[3].travellerDetail[6].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[3].travellerDetail[6].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[3].travellerDetail[6].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[3].travellerDetail[7].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[3].travellerDetail[7].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[3].travellerDetail[7].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[3].travellerDetail[8].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[3].travellerDetail[8].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[3].travellerDetail[8].weight': { required: "Please provide weight" },

	                    'sightSeeingBookingList[4].travellerDetail[0].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[4].travellerDetail[0].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[4].travellerDetail[0].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[4].travellerDetail[1].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[4].travellerDetail[1].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[4].travellerDetail[1].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[4].travellerDetail[2].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[4].travellerDetail[2].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[4].travellerDetail[2].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[4].travellerDetail[3].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[4].travellerDetail[3].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[4].travellerDetail[3].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[4].travellerDetail[4].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[4].travellerDetail[4].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[4].travellerDetail[4].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[4].travellerDetail[5].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[4].travellerDetail[5].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[4].travellerDetail[5].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[4].travellerDetail[6].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[4].travellerDetail[6].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[4].travellerDetail[6].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[4].travellerDetail[7].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[4].travellerDetail[7].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[4].travellerDetail[7].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[4].travellerDetail[8].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[4].travellerDetail[8].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[4].travellerDetail[8].weight': { required: "Please provide weight" },

	                    'sightSeeingBookingList[5].travellerDetail[0].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[5].travellerDetail[0].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[5].travellerDetail[0].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[5].travellerDetail[1].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[5].travellerDetail[1].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[5].travellerDetail[1].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[5].travellerDetail[2].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[5].travellerDetail[2].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[5].travellerDetail[2].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[5].travellerDetail[3].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[5].travellerDetail[3].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[5].travellerDetail[3].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[5].travellerDetail[4].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[5].travellerDetail[4].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[5].travellerDetail[4].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[5].travellerDetail[5].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[5].travellerDetail[5].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[5].travellerDetail[5].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[5].travellerDetail[6].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[5].travellerDetail[6].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[5].travellerDetail[6].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[5].travellerDetail[7].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[5].travellerDetail[7].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[5].travellerDetail[7].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[5].travellerDetail[8].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[5].travellerDetail[8].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[5].travellerDetail[8].weight': { required: "Please provide weight" },

	                    'sightSeeingBookingList[6].travellerDetail[0].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[6].travellerDetail[0].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[6].travellerDetail[0].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[6].travellerDetail[1].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[6].travellerDetail[1].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[6].travellerDetail[1].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[6].travellerDetail[2].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[6].travellerDetail[2].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[6].travellerDetail[2].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[6].travellerDetail[3].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[6].travellerDetail[3].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[6].travellerDetail[3].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[6].travellerDetail[4].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[6].travellerDetail[4].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[6].travellerDetail[4].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[6].travellerDetail[5].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[6].travellerDetail[5].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[6].travellerDetail[5].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[6].travellerDetail[6].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[6].travellerDetail[6].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[6].travellerDetail[6].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[6].travellerDetail[7].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[6].travellerDetail[7].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[6].travellerDetail[7].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[6].travellerDetail[8].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[6].travellerDetail[8].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[6].travellerDetail[8].weight': { required: "Please provide weight" },

	                    'sightSeeingBookingList[7].travellerDetail[0].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[7].travellerDetail[0].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[7].travellerDetail[0].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[7].travellerDetail[1].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[7].travellerDetail[1].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[7].travellerDetail[1].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[7].travellerDetail[2].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[7].travellerDetail[2].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[7].travellerDetail[2].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[7].travellerDetail[3].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[7].travellerDetail[3].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[7].travellerDetail[3].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[7].travellerDetail[4].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[7].travellerDetail[4].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[7].travellerDetail[4].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[7].travellerDetail[5].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[7].travellerDetail[5].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[7].travellerDetail[5].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[7].travellerDetail[6].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[7].travellerDetail[6].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[7].travellerDetail[6].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[7].travellerDetail[7].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[7].travellerDetail[7].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[7].travellerDetail[7].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[7].travellerDetail[8].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[7].travellerDetail[8].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[7].travellerDetail[8].weight': { required: "Please provide weight" },

	                    'sightSeeingBookingList[8].travellerDetail[0].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[8].travellerDetail[0].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[8].travellerDetail[0].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[8].travellerDetail[1].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[8].travellerDetail[1].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[8].travellerDetail[1].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[8].travellerDetail[2].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[8].travellerDetail[2].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[8].travellerDetail[2].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[8].travellerDetail[3].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[8].travellerDetail[3].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[8].travellerDetail[3].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[8].travellerDetail[4].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[8].travellerDetail[4].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[8].travellerDetail[4].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[8].travellerDetail[5].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[8].travellerDetail[5].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[8].travellerDetail[5].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[8].travellerDetail[6].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[8].travellerDetail[6].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[8].travellerDetail[6].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[8].travellerDetail[7].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[8].travellerDetail[7].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[8].travellerDetail[7].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[8].travellerDetail[8].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[8].travellerDetail[8].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[8].travellerDetail[8].weight': { required: "Please provide weight" },
	                    
	                    'sightSeeingBookingList[9].travellerDetail[0].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[9].travellerDetail[0].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[9].travellerDetail[0].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[9].travellerDetail[1].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[9].travellerDetail[1].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[9].travellerDetail[1].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[9].travellerDetail[2].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[9].travellerDetail[2].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[9].travellerDetail[2].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[9].travellerDetail[3].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[9].travellerDetail[3].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[9].travellerDetail[3].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[9].travellerDetail[4].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[9].travellerDetail[4].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[9].travellerDetail[4].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[9].travellerDetail[5].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[9].travellerDetail[5].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[9].travellerDetail[5].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[9].travellerDetail[6].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[9].travellerDetail[6].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[9].travellerDetail[6].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[9].travellerDetail[7].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[9].travellerDetail[7].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[9].travellerDetail[7].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[9].travellerDetail[8].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[9].travellerDetail[8].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[9].travellerDetail[8].weight': { required: "Please provide weight" },
	                    
	                    'sightSeeingBookingList[10].travellerDetail[0].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[10].travellerDetail[0].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[10].travellerDetail[0].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[10].travellerDetail[1].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[10].travellerDetail[1].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[10].travellerDetail[1].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[10].travellerDetail[2].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[10].travellerDetail[2].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[10].travellerDetail[2].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[10].travellerDetail[3].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[10].travellerDetail[3].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[10].travellerDetail[3].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[10].travellerDetail[4].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[10].travellerDetail[4].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[10].travellerDetail[4].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[10].travellerDetail[5].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[10].travellerDetail[5].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[10].travellerDetail[5].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[10].travellerDetail[6].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[10].travellerDetail[6].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[10].travellerDetail[6].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[10].travellerDetail[7].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[10].travellerDetail[7].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[10].travellerDetail[7].weight': { required: "Please provide weight" },
	                    'sightSeeingBookingList[10].travellerDetail[8].firstName': { required: "Please provide first name" },
	                    'sightSeeingBookingList[10].travellerDetail[8].lastName': { required: "Please provide last name" },
	                    'sightSeeingBookingList[10].travellerDetail[8].weight': { required: "Please provide weight" },
	                    
	                    'sightSeeingBookingList[0].bookingQuestionsList[0].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[0].bookingQuestionsList[1].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[0].bookingQuestionsList[2].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[0].bookingQuestionsList[3].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[0].bookingQuestionsList[4].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[0].bookingQuestionsList[5].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[0].bookingQuestionsList[6].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[0].bookingQuestionsList[7].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[0].bookingQuestionsList[8].queryResponse': { required: "Please provide Input" },

	                    'sightSeeingBookingList[1].bookingQuestionsList[0].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[1].bookingQuestionsList[1].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[1].bookingQuestionsList[2].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[1].bookingQuestionsList[3].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[1].bookingQuestionsList[4].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[1].bookingQuestionsList[5].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[1].bookingQuestionsList[6].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[1].bookingQuestionsList[7].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[1].bookingQuestionsList[8].queryResponse': { required: "Please provide Input" },

	                    'sightSeeingBookingList[2].bookingQuestionsList[0].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[2].bookingQuestionsList[1].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[2].bookingQuestionsList[2].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[2].bookingQuestionsList[3].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[2].bookingQuestionsList[4].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[2].bookingQuestionsList[5].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[2].bookingQuestionsList[6].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[2].bookingQuestionsList[7].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[2].bookingQuestionsList[8].queryResponse': { required: "Please provide Input" },

	                    'sightSeeingBookingList[3].bookingQuestionsList[0].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[3].bookingQuestionsList[1].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[3].bookingQuestionsList[2].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[3].bookingQuestionsList[3].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[3].bookingQuestionsList[4].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[3].bookingQuestionsList[5].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[3].bookingQuestionsList[6].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[3].bookingQuestionsList[7].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[3].bookingQuestionsList[8].queryResponse': { required: "Please provide Input" },

	                    'sightSeeingBookingList[4].bookingQuestionsList[0].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[4].bookingQuestionsList[1].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[4].bookingQuestionsList[2].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[4].bookingQuestionsList[3].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[4].bookingQuestionsList[4].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[4].bookingQuestionsList[5].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[4].bookingQuestionsList[6].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[4].bookingQuestionsList[7].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[4].bookingQuestionsList[8].queryResponse': { required: "Please provide Input" },

	                    'sightSeeingBookingList[5].bookingQuestionsList[0].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[5].bookingQuestionsList[1].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[5].bookingQuestionsList[2].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[5].bookingQuestionsList[3].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[5].bookingQuestionsList[4].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[5].bookingQuestionsList[5].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[5].bookingQuestionsList[6].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[5].bookingQuestionsList[7].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[5].bookingQuestionsList[8].queryResponse': { required: "Please provide Input" },

	                    'sightSeeingBookingList[6].bookingQuestionsList[0].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[6].bookingQuestionsList[1].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[6].bookingQuestionsList[2].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[6].bookingQuestionsList[3].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[6].bookingQuestionsList[4].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[6].bookingQuestionsList[5].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[6].bookingQuestionsList[6].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[6].bookingQuestionsList[7].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[6].bookingQuestionsList[8].queryResponse': { required: "Please provide Input" },

	                    'sightSeeingBookingList[7].bookingQuestionsList[0].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[7].bookingQuestionsList[1].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[7].bookingQuestionsList[2].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[7].bookingQuestionsList[3].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[7].bookingQuestionsList[4].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[7].bookingQuestionsList[5].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[7].bookingQuestionsList[6].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[7].bookingQuestionsList[7].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[7].bookingQuestionsList[8].queryResponse': { required: "Please provide Input" },

	                    'sightSeeingBookingList[8].bookingQuestionsList[0].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[8].bookingQuestionsList[1].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[8].bookingQuestionsList[2].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[8].bookingQuestionsList[3].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[8].bookingQuestionsList[4].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[8].bookingQuestionsList[5].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[8].bookingQuestionsList[6].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[8].bookingQuestionsList[7].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[8].bookingQuestionsList[8].queryResponse': { required: "Please provide Input" },

	                    'sightSeeingBookingList[9].bookingQuestionsList[0].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[9].bookingQuestionsList[1].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[9].bookingQuestionsList[2].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[9].bookingQuestionsList[3].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[9].bookingQuestionsList[4].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[9].bookingQuestionsList[5].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[9].bookingQuestionsList[6].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[9].bookingQuestionsList[7].queryResponse': { required: "Please provide Input" },
	                    'sightSeeingBookingList[9].bookingQuestionsList[8].queryResponse': { required: "Please provide Input" },
	                    
	                    'sightSeeingBookingList[0].travellerDetail[0].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[0].travellerDetail[1].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[0].travellerDetail[2].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[0].travellerDetail[3].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[0].travellerDetail[4].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[0].travellerDetail[5].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[0].travellerDetail[6].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[0].travellerDetail[7].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[0].travellerDetail[8].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[0].travellerDetail[9].dob': { required: "Please provide date of birth" },

	                    'sightSeeingBookingList[1].travellerDetail[0].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[1].travellerDetail[1].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[1].travellerDetail[2].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[1].travellerDetail[3].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[1].travellerDetail[4].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[1].travellerDetail[5].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[1].travellerDetail[6].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[1].travellerDetail[7].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[1].travellerDetail[8].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[1].travellerDetail[9].dob': { required: "Please provide date of birth" },

	                    'sightSeeingBookingList[2].travellerDetail[0].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[2].travellerDetail[1].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[2].travellerDetail[2].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[2].travellerDetail[3].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[2].travellerDetail[4].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[2].travellerDetail[5].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[2].travellerDetail[6].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[2].travellerDetail[7].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[2].travellerDetail[8].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[2].travellerDetail[9].dob': { required: "Please provide date of birth" },

	                    'sightSeeingBookingList[3].travellerDetail[0].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[3].travellerDetail[1].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[3].travellerDetail[2].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[3].travellerDetail[3].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[3].travellerDetail[4].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[3].travellerDetail[5].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[3].travellerDetail[6].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[3].travellerDetail[7].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[3].travellerDetail[8].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[3].travellerDetail[9].dob': { required: "Please provide date of birth" },

	                    'sightSeeingBookingList[4].travellerDetail[0].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[4].travellerDetail[1].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[4].travellerDetail[2].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[4].travellerDetail[3].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[4].travellerDetail[4].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[4].travellerDetail[5].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[4].travellerDetail[6].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[4].travellerDetail[7].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[4].travellerDetail[8].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[4].travellerDetail[9].dob': { required: "Please provide date of birth" },

	                    'sightSeeingBookingList[5].travellerDetail[0].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[5].travellerDetail[1].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[5].travellerDetail[2].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[5].travellerDetail[3].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[5].travellerDetail[4].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[5].travellerDetail[5].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[5].travellerDetail[6].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[5].travellerDetail[7].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[5].travellerDetail[8].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[5].travellerDetail[9].dob': { required: "Please provide date of birth" },

	                    'sightSeeingBookingList[6].travellerDetail[0].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[6].travellerDetail[1].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[6].travellerDetail[2].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[6].travellerDetail[3].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[6].travellerDetail[4].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[6].travellerDetail[5].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[6].travellerDetail[6].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[6].travellerDetail[7].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[6].travellerDetail[8].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[6].travellerDetail[9].dob': { required: "Please provide date of birth" },

	                    'sightSeeingBookingList[7].travellerDetail[0].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[7].travellerDetail[1].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[7].travellerDetail[2].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[7].travellerDetail[3].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[7].travellerDetail[4].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[7].travellerDetail[5].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[7].travellerDetail[6].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[7].travellerDetail[7].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[7].travellerDetail[8].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[7].travellerDetail[9].dob': { required: "Please provide date of birth" },

	                    'sightSeeingBookingList[8].travellerDetail[0].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[8].travellerDetail[1].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[8].travellerDetail[2].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[8].travellerDetail[3].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[8].travellerDetail[4].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[8].travellerDetail[5].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[8].travellerDetail[6].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[8].travellerDetail[7].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[8].travellerDetail[8].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[8].travellerDetail[9].dob': { required: "Please provide date of birth" },

	                    'sightSeeingBookingList[9].travellerDetail[0].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[9].travellerDetail[1].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[9].travellerDetail[2].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[9].travellerDetail[3].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[9].travellerDetail[4].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[9].travellerDetail[5].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[9].travellerDetail[6].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[9].travellerDetail[7].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[9].travellerDetail[8].dob': { required: "Please provide date of birth" },
	                    'sightSeeingBookingList[9].travellerDetail[9].dob': { required: "Please provide date of birth" },
	                    
	                    'sightSeeingBookingList[0].travellerDetail[0].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[0].travellerDetail[1].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[0].travellerDetail[2].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[0].travellerDetail[3].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[0].travellerDetail[4].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[0].travellerDetail[5].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[0].travellerDetail[6].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[0].travellerDetail[7].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[0].travellerDetail[8].passengerHeight': { required: "Please provide passenger height" },
	                    										      
	                    'sightSeeingBookingList[1].travellerDetail[0].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[1].travellerDetail[1].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[1].travellerDetail[2].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[1].travellerDetail[3].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[1].travellerDetail[4].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[1].travellerDetail[5].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[1].travellerDetail[6].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[1].travellerDetail[7].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[1].travellerDetail[8].passengerHeight': { required: "Please provide passenger height" },
	                    										      
	                    'sightSeeingBookingList[2].travellerDetail[0].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[2].travellerDetail[1].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[2].travellerDetail[2].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[2].travellerDetail[3].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[2].travellerDetail[4].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[2].travellerDetail[5].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[2].travellerDetail[6].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[2].travellerDetail[7].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[2].travellerDetail[8].passengerHeight': { required: "Please provide passenger height" },
	                    										      
	                    'sightSeeingBookingList[3].travellerDetail[0].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[3].travellerDetail[1].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[3].travellerDetail[2].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[3].travellerDetail[3].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[3].travellerDetail[4].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[3].travellerDetail[5].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[3].travellerDetail[6].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[3].travellerDetail[7].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[3].travellerDetail[8].passengerHeight': { required: "Please provide passenger height" },
	                    										      
	                    'sightSeeingBookingList[4].travellerDetail[0].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[4].travellerDetail[1].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[4].travellerDetail[2].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[4].travellerDetail[3].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[4].travellerDetail[4].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[4].travellerDetail[5].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[4].travellerDetail[6].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[4].travellerDetail[7].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[4].travellerDetail[8].passengerHeight': { required: "Please provide passenger height" },
	                    										      
	                    'sightSeeingBookingList[5].travellerDetail[0].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[5].travellerDetail[1].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[5].travellerDetail[2].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[5].travellerDetail[3].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[5].travellerDetail[4].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[5].travellerDetail[5].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[5].travellerDetail[6].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[5].travellerDetail[7].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[5].travellerDetail[8].passengerHeight': { required: "Please provide passenger height" },
	                    										      
	                    'sightSeeingBookingList[6].travellerDetail[0].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[6].travellerDetail[1].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[6].travellerDetail[2].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[6].travellerDetail[3].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[6].travellerDetail[4].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[6].travellerDetail[5].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[6].travellerDetail[6].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[6].travellerDetail[7].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[6].travellerDetail[8].passengerHeight': { required: "Please provide passenger height" },
	                    										      
	                    'sightSeeingBookingList[7].travellerDetail[0].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[7].travellerDetail[1].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[7].travellerDetail[2].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[7].travellerDetail[3].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[7].travellerDetail[4].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[7].travellerDetail[5].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[7].travellerDetail[6].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[7].travellerDetail[7].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[7].travellerDetail[8].passengerHeight': { required: "Please provide passenger height" },
	                    										      
	                    'sightSeeingBookingList[8].travellerDetail[0].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[8].travellerDetail[1].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[8].travellerDetail[2].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[8].travellerDetail[3].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[8].travellerDetail[4].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[8].travellerDetail[5].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[8].travellerDetail[6].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[8].travellerDetail[7].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[8].travellerDetail[8].passengerHeight': { required: "Please provide passenger height" },
	                    										      
	                    'sightSeeingBookingList[9].travellerDetail[0].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[9].travellerDetail[1].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[9].travellerDetail[2].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[9].travellerDetail[3].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[9].travellerDetail[4].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[9].travellerDetail[5].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[9].travellerDetail[6].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[9].travellerDetail[7].passengerHeight': { required: "Please provide passenger height" },
	                    'sightSeeingBookingList[9].travellerDetail[8].passengerHeight': { required: "Please provide passenger height" },
	                    
	                    'sightSeeingBookingList[0].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[0].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[0].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[0].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[0].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[0].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[0].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[0].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[0].travellerDetail[8].weightCategory': { required: "Please provide weight category" },

	                    'sightSeeingBookingList[1].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[1].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[1].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[1].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[1].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[1].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[1].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[1].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[1].travellerDetail[8].weightCategory': { required: "Please provide weight category" },

	                    'sightSeeingBookingList[2].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[2].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[2].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[2].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[2].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[2].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[2].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[2].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[2].travellerDetail[8].weightCategory': { required: "Please provide weight category" },

	                    'sightSeeingBookingList[3].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[3].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[3].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[3].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[3].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[3].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[3].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[3].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[3].travellerDetail[8].weightCategory': { required: "Please provide weight category" },

	                    'sightSeeingBookingList[4].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[4].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[4].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[4].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[4].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[4].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[4].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[4].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[4].travellerDetail[8].weightCategory': { required: "Please provide weight category" },

	                    'sightSeeingBookingList[5].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[5].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[5].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[5].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[5].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[5].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[5].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[5].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[5].travellerDetail[8].weightCategory': { required: "Please provide weight category" },

	                    'sightSeeingBookingList[6].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[6].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[6].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[6].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[6].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[6].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[6].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[6].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[6].travellerDetail[8].weightCategory': { required: "Please provide weight category" },

	                    'sightSeeingBookingList[7].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[7].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[7].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[7].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[7].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[7].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[7].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[7].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[7].travellerDetail[8].weightCategory': { required: "Please provide weight category" },

	                    'sightSeeingBookingList[8].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[8].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[8].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[8].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[8].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[8].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[8].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[8].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[8].travellerDetail[8].weightCategory': { required: "Please provide weight category" },

	                    'sightSeeingBookingList[9].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[9].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[9].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[9].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[9].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[9].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[9].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[9].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[9].travellerDetail[8].weightCategory': { required: "Please provide weight category" },

	                    'sightSeeingBookingList[10].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[10].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[10].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[10].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[10].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[10].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[10].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[10].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[10].travellerDetail[8].weightCategory': { required: "Please provide weight category" },

	                    'sightSeeingBookingList[11].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[11].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[11].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[11].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[11].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[11].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[11].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[11].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[11].travellerDetail[8].weightCategory': { required: "Please provide weight category" },

	                    'sightSeeingBookingList[12].travellerDetail[0].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[12].travellerDetail[1].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[12].travellerDetail[2].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[12].travellerDetail[3].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[12].travellerDetail[4].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[12].travellerDetail[5].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[12].travellerDetail[6].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[12].travellerDetail[7].weightCategory': { required: "Please provide weight category" },
	                    'sightSeeingBookingList[12].travellerDetail[8].weightCategory': { required: "Please provide weight category" },
	                    
	                    'sightSeeingBookingList[0].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[1].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[2].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[3].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[4].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[5].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[6].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[7].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[8].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[9].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[10].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[11].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[12].hotelName': { required: "Please provide hotel name" },
	                	'sightSeeingBookingList[13].hotelName': { required: "Please provide hotel name" },

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
	                        minlength: "Please provide a valid card verification number",
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
	                    },
	                    'contact.mobile': {
	                        required: "Please enter a valid mobile phone.",
	                    },
	                    'contact.email': {
	                        required: "Please enter a valid email address.",
	                    },
	                    'contact.email2': {
	                        required: "Please enter the same email address.",
	                    },
	                },
	                submitHandler: function(form) {
	                    popup('divProgressbar', 30, 30);
	                    form.submit();
	                }
	            });
	            
	            
	            
	        }
	};
	
	//when the dom has loaded setup form validation rules
    $(D).ready(function($) {
    	
        $.validator.setDefaults({
            ignore: ''
        });
        $.validator.messages.required = '';
        $.validator.addMethod("email", function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
        }, "Please provide a valid email address");

        $.validator.addMethod("alphanumeric", function(value, element) {
            if (value.length > 0) {
                return this.optional(element) || /^\w+$/i.test(value);
            } else {
                return false;
            }
        }, "Please provide Letters, numbers, and underscores only");

        $.validator.addMethod("emailEq", function(value, element) {
            //console.log($("#contact_email").val());
            if ($("#contact_email").val() != value) {
                return false;
            } else {
                return true;
            }
        }, "Entered email addresses - do not match.");
        
        $.validator.addMethod("lettersonly", function(value, element) {
            if (value.length > 0) {
                return this.optional(element) || /^[a-z ]+$/i.test(value);
            } else {
                return false;
            }
        }, "Please provide Letters and spaces only");

        $.validator.addMethod("ccvnumeric", function(value, element) {
            if (value.length > 0) {
                return this.optional(element) || /^[-+]?\d*\.?\d*$/.test(value);
            } else {
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



        $("#Payments_ExpiryMonth").change(function() {
            if ($("#Payments_ExpiryYear").val() != "Year") {
                $("#sightSeeingBookingRequestAttr").validate().element("#Payments_ExpiryYear");
            }

        })
        jQuery.validator.addMethod("age_val", function(value, element, param) {


            var Age = $("#passengerType" + param + "").val();

            var html = "Age of Adult, should be greater than or equal to 12yrs.";

            if (Age == 'Adult') {
                html = "Age of Adult, should be greater than or equal to 12yrs.";
            } else if (Age == 'Child') {
                html = "Age of Child, should be less than 12yrs and greater than or equal to 2yrs.";
            } else if (Age == 'Infant') {
                html = "Age of Infant, should be less than 2yrs.";
            } else if (Age == 'InfantWs') {
                html = "Age of Infant, should be less than 2yrs.";
            }

            value = $("#paxdoy" + param + "").val();
            $("#error-message" + param + "").html("").removeClass("show").addClass("hide");
            if (!isValidDate(value, $("#paxdom" + param + "").val(), $("#paxdob" + param + "").val())) {
                // make sure the date is valid
                $("#error-message" + param + "").html("Please provide Valid Day of Date Of Birth.").removeClass("hide").addClass("show");
                return false;
            } else if (!isOfAge(value, $("#paxdom" + param + "").val(), $("#paxdob" + param + "").val(), Age)) {
                // the person is too young
                $("#error-message" + param + "").html(html).removeClass("hide").addClass("show");
                return false;
            } else {
                // console.log("true");
                return true;
            }

            return this.optional(element) || value >= param;
        }, "");


        $.validator.addMethod('zipval', function(value, element) {

            //debugger;

            if ($("#Payments_Country").val() != "0") {
                if ($("#Payments_Country").val() == "GB") {

                    return postalUKFilter(value);
                } else if ($("#Payments_Country").val() != "CA") {
                    var numericReg = Zipmap($("#Payments_Country").val());

                    var usan = new RegExp(numericReg);

                    return this.optional(element) || usan.test(value);
                } else {
                    return postalFilter(value);
                }
            } else {
                return true;
            }

        }, 'Please provide billing zip (postal code)');



        $.validator.addMethod('requiredTextvalue', function(value) {
            return (value != '');
        }, "");

        $.validator.addMethod('requiredvalue', function(value) {
            return (value != '0.0');
        }, "");
        $.validator.addMethod('ccMaskCheckvalue', function(value) {
            //var values=$("#Payments_CardNumber").val();
            if (value.indexOf('************') >= 0) {
                return true;
            }
            if (value.length > 12) {
                //console.log("CC Mask value;"+cc_brand_id(value,$("#payment-card").val()));
                return cc_brand_id(value, $("#payment-card").val());
            } else {
                return true;
            }
            //   return (value != '0.0');
        }, "Please provide valid credit or debit card number");

        $.validator.addMethod('ccCheckvalue', function(value) {
            var values = $("#Payments_CardNumber").val();
            if (values.length > 12) {
                if (cc_brand_id(values, $("#payment-card").val())) {
                    return true;
                } else {
                    jQuery("#Payments_MaskCardNumber").val("");
                    return false;
                }
            } else {
                return true;
            }
        }, "Please provide valid credit or debit card number");


        $.validator.addMethod('cccardvalue', function(value) {
            if ($("#Payments_CardNumber").val().length > 12) {
                //console.log("CC value;"+cc_brand_id($("#Payments_CardNumber").val(),value));
                return cc_brand_id($("#Payments_CardNumber").val(), value);
            } else {
                return true;
            }
            //   return (value != '0.0');
        }, "Please provide valid credit or debit card number");
        $.validator.addMethod('titlereq', function(value) {
            return (value != 'Title');
        }, "");

        $.validator.addMethod('selectlanguage', function(value) {
            return (value != 'Select Language');
        }, "Please select tour language");
        $.validator.addMethod('selectWC', function(value) {
            return (value != 'Select');
        }, "");
        $.validator.addMethod('checkHotelValidation', function(value, element, params) {
        	if($("#hotelListId"+params.id).is(":visible")) {
        		return true;
        	} else {
        		return false;
        	}
        }, "Please select hotel name");
        $.validator.addMethod('selectcard', function(value) {
            return (value != 'Select a Card');
        }, "Please provide your payment method");
        $.validator.addMethod('selectExpMonth', function(value) {
            return (value != '0');
        }, "Please select card expiration month");
        $.validator.addMethod('selectExpYear', function(value) {
            return (value != 'Year');
        }, "Please select card expiration year");
        $.validator.addMethod('selectstate', function(value) {
            if ($("#Payments_Country").val() == "US") {
                return (value != '0');
            } else if ($("#Payments_Country").val() == "CA") {
                return (value != '0');
            } else {
                return true;
            }
        }, "Please select your billing State");
        $.validator.addMethod('selectcountry', function(value) {
            return (value != '0');
        }, "Please select your billing Country");
        JQUERY4U.UTIL.setupFormValidation();

        $("#Payments_MaskCardNumber").focus(function(e) {

            var value = jQuery("#Payments_MaskCardNumber").val();
            if (value.indexOf('*') >= 0)
                jQuery("#Payments_MaskCardNumber").val("");
        });

        $("#Payments_MaskCardNumber").focusout(function(e) {

            var card_number = jQuery(this).val();
            if (card_number.indexOf('************') >= 0) {
                return true;
            }

            //console.log("card_number 1:"+card_number);
            if (card_number == "") {
                card_number = jQuery("#Payments_CardNumber").val();
                jQuery("#Payments_MaskCardNumber").val(card_number);
            }

            if (card_number != "") {
                var conds = $("#sightSeeingBookingRequestAttr").validate().element("#Payments_MaskCardNumber");
                //console.log("cond 1:"+conds);
                if (conds) {
                    jQuery("#Payments_CardNumber").val(card_number);
                    if (jQuery("#Payments_CardNumber").val() != "") {
                        $("#sightSeeingBookingRequestAttr").validate().element("#Payments_CardNumber");
                        $("#sightSeeingBookingRequestAttr").validate().element("#Payments_MaskCardNumber");
                        var cond = $("#sightSeeingBookingRequestAttr").validate().element("#Payments_MaskCardNumber");
                        //console.log("cond:"+cond);
                        if (cond) {
                            var new_card_number = "************";
                            for (var loop2 = 12; loop2 < card_number.length; loop2++) {
                                new_card_number = new_card_number + card_number.charAt(loop2);
                            }
                            jQuery("#Payments_MaskCardNumber").val(new_card_number);
                        }
                    }
                }
            }
        }).blur(function() {
            var card_number = jQuery(this).val();
            if (card_number.indexOf('************') >= 0) {
                return true;
            }
            // console.log("cond IE");
            //console.log("card_number 1:"+card_number);
            if (card_number == "") {
                card_number = jQuery("#Payments_CardNumber").val();
                jQuery("#Payments_MaskCardNumber").val(card_number);
            }

            if (card_number != "") {
                var conds = $("#sightSeeingBookingRequestAttr").validate().element("#Payments_MaskCardNumber");
                //console.log("cond 1:"+conds);
                if (conds) {
                    jQuery("#Payments_CardNumber").val(card_number);
                    if (jQuery("#Payments_CardNumber").val() != "") {
                        $("#sightSeeingBookingRequestAttr").validate().element("#Payments_CardNumber");
                        $("#sightSeeingBookingRequestAttr").validate().element("#Payments_MaskCardNumber");
                        var cond = $("#sightSeeingBookingRequestAttr").validate().element("#Payments_MaskCardNumber");
                        //console.log("cond:"+cond);
                        if (cond) {
                            var new_card_number = "************";
                            for (var loop2 = 12; loop2 < card_number.length; loop2++) {
                                new_card_number = new_card_number + card_number.charAt(loop2);
                            }
                            jQuery("#Payments_MaskCardNumber").val(new_card_number);
                        }
                    }
                }
            }

        });
        
        
        // dob calender start
        
        $(".travellerDOB").datepicker({
        	yearRange: '1918:2018',
        	changeMonth: true,
            changeYear: true,
            dateFormat: "d MM yy",
            onSelect: function() {
            	this.focus();
            }
        })
        
        // dob calender end
        
        monkeyPatchAutocomplete();
        
        var pCode = '';
        var gCode = '';
        var indexing = '';
        
        $('.hotelListClass').autocomplete({
            source: function(t, e) {
            	var sourceObject = {
                    term: t.term,
                    pc: pCode,
                    gc: gCode
                };
            	$.getJSON("/onPurchasePageDetailResponse", sourceObject, e);
            },
            select: function(event, ui) {
            	
            	var arr = ui.item.value.split('~~~~');
            	var hAd = arr[1].split('<br>');
                var hn = hAd[0];
                
            	var pickupHotelID = 'sightSeeingBookingList'+indexing+'-pickupHotelID';
            	var pickupPoint = 'sightSeeingBookingList'+indexing+'-pickupPoint';
            	
                $('#'+pickupHotelID).val(arr[0]);
            	$("#"+pickupPoint).val(hn);
            	
            	this.value = hn;

            	return !1
            },
            search:function() {
            	pCode = $(this).attr('data-pc');
            	gCode = $(this).attr('data-gc');
            	indexing = $(this).attr('data-indexing');
            	
            	return this.value;
            },
            change: function(event, ui) {
                if (!ui.item) {
                    $("#hotelListId").val("");
                }
            },
            focus: function(event, ui) {
            	
                var arr = ui.item.value.split('~~~~');
                var hAd = arr[1].split('<br>');
                var hn = hAd[0];
            	this.value = hn;
            	
            	return !1
            },
            minLength: 0,
            scroll: true
        }).focus(function () {
            $(this).autocomplete("search", "");
            /*var hotelIndex = $(this).attr('data-indexing');
            var idd = 'sightSeeingBookingList'+hotelIndex+'-pickupPoint';
            console.log('hotelIndex :::::'+ hotelIndex);
            $(idd).val('')*/
        });
        
        if ($("#payment_cvvNos").val() != "") {
            $("#Payments_CvvNo").val($("#payment_cvvNos").val())
        }

        if ($("#payment-cardd").val() != "") {
            $("#payment-card").val($("#payment-cardd").val());
        }

        if ($("#payment_maskCardNumbers").val() != "") {
            $("#Payments_MaskCardNumber").val($("#payment_maskCardNumbers").val());
        }

        if ($("#payment_cardNumbers").val() != "") {
            $("#Payments_CardNumber").val($("#payment_cardNumbers").val());
        }


        if ($("#payment_cardHoldName").val() != "") {
            $("#Payments_CardHolderName").val($("#payment_cardHoldName").val())
        }

        if ($("#payment_expiryMnth").val() != "") {
            $("#Payments_ExpiryMonth").val($("#payment_expiryMnth").val())
        }

        if ($("#payment_countre").val() != "") {
            $("#Payments_Country").val($("#payment_countre").val())
        }
        
    });
	
})(jQuery, window, document);



$(document).on('focusout', '.hotelListClass', function() {
	var hotelIndex = $(this).attr('data-indexing');
	var hphId = '#sightSeeingBookingList'+hotelIndex+'-pickupHotelID';
	var hppId = '#sightSeeingBookingList'+hotelIndex+'-pickupPoint';
	if($(this).val() == '') {
		$(hphId).val('');
		$(hppId).val('');
	} else {
		var erId = '#hotelPickUpError'+hotelIndex;
		$(erId).css('display', 'none');
	}
});

var productCode = '';
var gradeCode = '';

function choose(id, flag) {
	var autocompleteId = '#hotelListId';
	var pickupHotelID = '#sightSeeingBookingList'+id+'-pickupHotelID';
	var pickupPoint = '#sightSeeingBookingList'+id+'-pickupPoint';
	
	if(flag == true) {
		$('#hotelListId'+id).show();
		$('#hotelListId'+id+'-error').show();
		$('#hotelListId'+id).removeClass('valid').addClass('has-error');;
	} else {
		$('#hotelListId'+id+'-error').hide();
		$('#hotelListId'+id).hide();
		$('#hotelListId'+id).removeClass('has-error').addClass('valid');
		$(pickupHotelID).val('');
		$(pickupPoint).val('');
	}
}

function monkeyPatchAutocomplete() {
	var oldFn = $.ui.autocomplete.prototype._renderItem;
	$.ui.autocomplete.prototype._renderItem = function(ul, item) {
		var t = item.label.split('~~~~')[1];
		if(t.includes('null')) {
			t = t.split('<br>')[0];
		}
		return $("<li></li>").data("item.autocomplete", item).append("<a>" + t + "</a>").appendTo(ul)		
	}
}

function getcardValue(sel, event) {
    $('.spnCardImg>a').removeClass("card-border");
    $('.spnCardImg>a[title="' + sel.value + '"]').addClass('card-border');
}

$(function() {

    $("#contact_email,#contact_email1,#contact_billingPhone,#contact_mobile,#Payments_MaskCardNumber").on("copy cut paste drop", function() {
        return false;
    });
});

function setccValue(id, event) {

    //  $timeout(function() {

    $target = $(event.target);
    $target.siblings().removeClass("card-border");
    $target.addClass('card-border');

    if (id == "American Express") {
        var src = "/resources/assets/ccv-img2.gif";
        $("#ccvimg").attr("src", src);
        $("#tooltip").html("<span class=\"ccv-card\">4 Digit Number From Your Card<span class=\"cardImg\"></span></span>");
    } else if (id == "Master Card") {
        var src = "/resources/assets/ccv-img.gif";
        $("#ccvimg").attr("src", src);
        $("#tooltip").html("<span class=\"ccv-card\">3/4 Digit Number From Your Card<span class=\"cardImg\"></span></span>");
    } else {
        var src = "/resources/assets/ccv-img.gif";
        $("#ccvimg").attr("src", src);
        $("#tooltip").html("<span class=\"ccv-card\">3 Digit Number From Your Card<span class=\"cardImg\"></span></span>");
    }


    $("#payment-card").val(id);
    var card_number = jQuery("#Payments_CardNumber").val();
    if (card_number == "") {
        card_number = jQuery("#Payments_MaskCardNumber").val();
    }

    if (card_number != "") {
        jQuery("#Payments_CardNumber").val("");
        jQuery("#Payments_MaskCardNumber").val(card_number);
        var conds = $("#sightSeeingBookingRequestAttr").validate().element("#Payments_MaskCardNumber");
        if (conds) {
            jQuery("#Payments_CardNumber").val(card_number);

            var new_card_number = "************";
            for (var loop2 = 12; loop2 < card_number.length; loop2++) {
                new_card_number = new_card_number + card_number.charAt(loop2);
            }
            jQuery("#Payments_MaskCardNumber").val(new_card_number);
        }
    }

    if ($("#Payments_CvvNo").val().length > 0) {
        $("#sightSeeingBookingRequestAttr").validate().element("#Payments_CvvNo");
    }


    $("#sightSeeingBookingRequestAttr").validate().element("#payment-card");
    if ($("#Payments_CardNumber").val().length > 0) {
        $("#sightSeeingBookingRequestAttr").validate().element("#Payments_CardNumber");
    }
    if ($("#Payments_MaskCardNumber").val().length > 0) {
        $("#sightSeeingBookingRequestAttr").validate().element("#Payments_MaskCardNumber");
    }
    if ($("#Payments_CvvNo").val().length > 0) {
        $("#sightSeeingBookingRequestAttr").validate().element("#Payments_CvvNo");
    }
    //     });
};

/*$('.hotelListClass').keyup(function() {
	var hotelIndex = $(this).attr('data-indexing');
	console.log('hotelIndex ::::'+ hotelIndex)
	var idd = 'sightSeeingBookingList'+hotelIndex+'-pickupPoint';
    $(idd).val(this.value); 
});*/

function submitForm() {
	
	//var flag = checkHotelPick();
	
	//$("#Payments_MaskCardNumber").val($("#payment_cardNumbers").val());
	
	var rndId = randomString(12);
    var csIdd = document.getElementById("csId").value;
    if (csIdd != '') {
        document.getElementById("finalId").value = csIdd;
        rndId = csIdd;
    } else {
        document.getElementById("finalId").value = rndId;
    }

    $('form#sightSeeingBookingRequestAttr').attr({
		action: '/activity-book/' + rndId
	});
    
    
    if ($("#sightSeeingBookingRequestAttr").valid() == true) {
        //popup('divProgressbar', 30, 30);
    }
    
	//if(!flag) {  
		$('form#sightSeeingBookingRequestAttr').submit();
	//}
	
}

function checkHotelPick() {

	/*var pickupPoint0Val = $('#sightSeeingBookingList0-pickupPoint').val();
	var pickupPoint1Val = $('#sightSeeingBookingList1-pickupPoint').val();
	var pickupPoint2Val = $('#sightSeeingBookingList2-pickupPoint').val();
	var pickupPoint3Val = $('#sightSeeingBookingList3-pickupPoint').val();
	var pickupPoint4Val = $('#sightSeeingBookingList4-pickupPoint').val();
	var pickupPoint5Val = $('#sightSeeingBookingList5-pickupPoint').val();
	var pickupPoint6Val = $('#sightSeeingBookingList6-pickupPoint').val();
	var pickupPoint7Val = $('#sightSeeingBookingList7-pickupPoint').val();
	var pickupPoint8Val = $('#sightSeeingBookingList8-pickupPoint').val();
	var pickupPoint9Val = $('#sightSeeingBookingList9-pickupPoint').val();
	var pickupPoint10Val = $('#sightSeeingBookingList10-pickupPoint').val();
	var pickupPoint11Val = $('#sightSeeingBookingList11-pickupPoint').val();*/
	
	
	var errorFlag = false;
	
	var hotelPickArr = [];
	for (var i = 0; i < 12; i++) {
		var ppDId = '#sightSeeingBookingList'+i+'-pickupPoint';
		var ppDHId = '#sightSeeingBookingList'+i+'-pickupHotelID';
		
		var ppEId = '#hotelPickUpError'+i;
		hotelPickArr[i] = $(ppDId).val();
		
		if(hotelPickArr[i] != undefined && hotelPickArr[i] != '') {
			console.log(i+'==='+hotelPickArr[i]+'~~~~first')
			$(ppEId).css('display', 'none');
			errorFlag = false;
		} else if(hotelPickArr[i] == undefined || hotelPickArr[i] == '') {
			console.log(i+'==='+hotelPickArr[i]+'~~~~second')
			$(ppEId).css('display', 'none');
			errorFlag = false;
		} else {
			console.log(i+'==='+hotelPickArr[i]+'~~~~third')
			$(ppEId).css('display', 'block');
			errorFlag = true;
		}
	}
	
	return errorFlag;
	
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

/* Below disable back button browser functionality*/

history.pushState(null, null, location.href);
window.onpopstate = function () {
	history.go(1);
};

/* Above disable back button browser functionality*/

function popup(divProgressBar, width, height) {
    try {
        var height1 = $(window).height();
        var width1 = $(window).width();
        
        $('#' + divProgressBar).height(height + "%");
        $('#' + divProgressBar).width(width + "%");
        $('#' + divProgressBar).css({
            top: ((height1 - ((height1 * parseInt(height)) / 100)) / 2).toFixed(0) + "px",
            left: ((width1 - ((width1 * parseInt(width)) / 100)) / 2).toFixed(0) + "px"
        });

        $('#fadebackground').height(height1 + "px");
        $('#fadebackground').width(width1 + "px");
        $('#fadebackground').toggle();
        $('#' + divProgressBar).toggle();
        return false;
    } catch (e) {
        return false;
    }
}

function postalUKFilter(postalCode) {

    if (!postalCode) {
        return null;
    }

    postalCode = postalCode.toString().trim();

    var ca = new RegExp(/[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}/i);

    if (ca.test(postalCode.toString().replace(/\W+/g, ''))) {
        return true;
    }
    return null;
}


function postalFilter(postalCode) {

    if (!postalCode) {
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

function Zipmap(val) {
    var Zipmapss = {
        "AD": "^(?:AD)*(\\d{3})$",
        "AM": "^(\\d{6})$",
        "AR": "^([A-Z]\\d{4}[A-Z]{3})$",
        "AT": "^(\\d{4})$",
        "AU": "^(\\d{4})$",
        "AX": "^(?:FI)*(\\d{5})$",
        "AZ": "^(?:AZ)*(\\d{4})$",
        "BA": "^(\\d{5})$",
        "BB": "^(?:BB)*(\\d{5})$",
        "BD": "^(\\d{4})$",
        "BE": "^(\\d{4})$",
        "BG": "^(\\d{4})$",
        "BH": "^(\\d{3}\\d?)$",
        "BM": "^([A-Z]{2}\\d{2})$",
        "BN": "^([A-Z]{2}\\d{4})$",
        "BR": "^(\\d{8})$",
        "BY": "^(\\d{6})$",
        /*"CA":"^([ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ]) ?(\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)$",*/
        //"CA":"^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$",
        //"CA":"^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\d{1}[A-Za-z]{1} *\d{1}[A-Za-z]{1}\d{1}$",
        "CA": "^/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i",
        //"CA":"^((\\d{5}-\\d{4})|(\\d{5})|([A-Z]\\d[A-Z]\\s\\d[A-Z]\\d))$",
        "CH": "^(\\d{4})$",
        "CL": "^(\\d{7})$",
        "CN": "^(\\d{6})$",
        "CR": "^(\\d{4})$",
        "CU": "^(?:CP)*(\\d{5})$",
        "CV": "^(\\d{4})$",
        "CX": "^(\\d{4})$",
        "CY": "^(\\d{4})$",
        "CZ": "^(\\d{5})$",
        "DE": "^(\\d{5})$",
        "DK": "^(\\d{4})$",
        "DO": "^(\\d{5})$",
        "DZ": "^(\\d{5})$",
        "EC": "^([a-zA-Z]\\d{4}[a-zA-Z])$",
        "EE": "^(\\d{5})$",
        "EG": "^(\\d{5})$",
        "ES": "^(\\d{5})$",
        "ET": "^(\\d{4})$",
        "FI": "^(?:FI)*(\\d{5})$",
        "FM": "^(\\d{5})$",
        "FO": "^(?:FO)*(\\d{3})$",
        "FR": "^(\\d{5})$",
        "GB": "^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
        "GE": "^(\\d{4})$",
        "GF": "^((97|98)3\\d{2})$",
        "GG": "^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
        "GL": "^(\\d{4})$",
        "GP": "^((97|98)\\d{3})$",
        "GR": "^(\\d{5})$",
        "GT": "^(\\d{5})$",
        "GU": "^(969\\d{2})$",
        "GW": "^(\\d{4})$",
        "HN": "^([A-Z]{2}\\d{4})$",
        "HR": "^(?:HR)*(\\d{5})$",
        "HT": "^(?:HT)*(\\d{4})$",
        "HU": "^(\\d{4})$",
        "ID": "^(\\d{5})$",
        "IL": "^(\\d{5})$",
        "IM": "^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
        "IN": "^(\\d{6})$",
        "IQ": "^(\\d{5})$",
        "IR": "^(\\d{10})$",
        "IS": "^(\\d{3})$",
        "IT": "^(\\d{5})$",
        "JE": "^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
        "JO": "^(\\d{5})$",
        "JP": "^(\\d{7})$",
        "KE": "^(\\d{5})$",
        "KG": "^(\\d{6})$",
        "KH": "^(\\d{5})$",
        "KP": "^(\\d{6})$",
        "KR": "^(?:SEOUL)*(\\d{6})$",
        "KW": "^(\\d{5})$",
        "KZ": "^(\\d{6})$",
        "LA": "^(\\d{5})$",
        "LB": "^(\\d{4}(\\d{4})?)$",
        "LI": "^(\\d{4})$",
        "LK": "^(\\d{5})$",
        "LR": "^(\\d{4})$",
        "LS": "^(\\d{3})$",
        "LT": "^(?:LT)*(\\d{5})$",
        "LU": "^(\\d{4})$",
        "LV": "^(?:LV)*(\\d{4})$",
        "MA": "^(\\d{5})$",
        "MC": "^(\\d{5})$",
        "MD": "^(?:MD)*(\\d{4})$",
        "ME": "^(\\d{5})$",
        "MG": "^(\\d{3})$",
        "MK": "^(\\d{4})$",
        "MM": "^(\\d{5})$",
        "MN": "^(\\d{6})$",
        "MQ": "^(\\d{5})$",
        "MT": "^([A-Z]{3}\\d{2}\\d?)$",
        "MV": "^(\\d{5})$",
        "MX": "^(\\d{5})$",
        "MY": "^(\\d{5})$",
        "MZ": "^(\\d{4})$",
        "NC": "^(\\d{5})$",
        "NE": "^(\\d{4})$",
        "NF": "^(\\d{4})$",
        "NG": "^(\\d{6})$",
        "NI": "^(\\d{7})$",
        "NL": "^(\\d{4}[A-Z]{2})$",
        "NO": "^(\\d{4})$",
        "NP": "^(\\d{5})$",
        "NZ": "^(\\d{4})$",
        "OM": "^(\\d{3})$",
        "PF": "^((97|98)7\\d{2})$",
        "PG": "^(\\d{3})$",
        "PH": "^(\\d{4})$",
        "PK": "^(\\d{5})$",
        "PL": "^(\\d{5})$",
        "PM": "^(97500)$",
        "PR": "^(\\d{9})$",
        "PT": "^(\\d{7})$",
        "PW": "^(96940)$",
        "PY": "^(\\d{4})$",
        "RE": "^((97|98)(4|7|8)\\d{2})$",
        "RO": "^(\\d{6})$",
        "RS": "^(\\d{6})$",
        "RU": "^(\\d{6})$",
        "SA": "^(\\d{5})$",
        "SD": "^(\\d{5})$",
        "SE": "^(?:SE)*(\\d{5})$",
        "SG": "^(\\d{6})$",
        "SH": "^(STHL1ZZ)$",
        "SI": "^(?:SI)*(\\d{4})$",
        "SK": "^(\\d{5})$",
        "SM": "^(4789\\d)$",
        "SN": "^(\\d{5})$",
        "SO": "^([A-Z]{2}\\d{5})$",
        "SV": "^(?:CP)*(\\d{4})$",
        "SZ": "^([A-Z]\\d{3})$",
        "TC": "^(TKCA 1ZZ)$",
        "TH": "^(\\d{5})$",
        "TJ": "^(\\d{6})$",
        "TM": "^(\\d{6})$",
        "TN": "^(\\d{4})$",
        "TR": "^(\\d{5})$",
        "TW": "^(\\d{5})$",
        "UA": "^(\\d{5})$",
        "US": "^((\\d{5}-\\d{4})|(\\d{5})|([A-Z]\\d[A-Z]\\s\\d[A-Z]\\d))$",
        "US": "^\\d{5}(-\\d{4})?$",
        "UY": "^(\\d{5})$",
        "UZ": "^(\\d{6})$",
        "VA": "^(\\d{5})$",
        "VE": "^(\\d{4})$",
        "VI": "^\\d{5}(-\\d{4})?$",
        "VN": "^(\\d{6})$",
        "WF": "^(986\\d{2})$",
        "YT": "^(\\d{5})$",
        "ZA": "^(\\d{4})$",
        "ZM": "^(\\d{5})$",
        "CS": "^(\\d{5})$"

    }
    return Zipmapss[val];
}

var hotelList = [];
function setPickupHotels(hotels) {
	hotelList = hotels;
	
	
}

function extractLast(t) {
    return split(t).pop();
}

function split(t) {
    return t.split(/,\s*/);
}

function cc_brand_id(cur_val, card_val) {
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
    var ccnum = cur_val;
    ccnum = ccnum.split("-").join("");
    // Checksum ("Mod 10")
    // Add even digits in even length strings or odd digits in odd length strings.
    var checksum = 0;
    for (var i = (2 - (ccnum.length % 2)); i <= ccnum.length; i += 2) {
        checksum += parseInt(ccnum.charAt(i - 1));
    }
    // Analyze odd digits in even length strings or even digits in odd length strings.
    for (var i = (ccnum.length % 2) + 1; i < ccnum.length; i += 2) {
        var digit = parseInt(ccnum.charAt(i - 1)) * 2;
        if (digit < 10) {
            checksum += digit;
        } else {
            checksum += (digit - 9);
        }
    }
    if ((sel_brand == card_val)) {
        if ((checksum % 10) == 0) return true;
        else return false;
    } else {
        return false;
    }

    return false;
}

function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (!length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}


var sessionTimeout = 18;
var secound = 0;
window.onload = DisplaySessionTimeout();
var xLoad = true;
function DisplaySessionTimeout() {
	if (sessionTimeout < 10) {
		if (xLoad) {
			$("#sessionTimeClose").on('click', function () {
				xLoad = false;
				$("#sessionTimeOutDiv").fadeOut();
			});
			$("#sessionTimeOutDiv").fadeIn();
			if (secound > 9) {
				document.getElementById("sessionTime").innerHTML = sessionTimeout + " : " + secound;
			} else {
				document.getElementById("sessionTime").innerHTML = sessionTimeout + " : 0" + secound;
			}
		}
	}
	if (secound == 0) {
		sessionTimeout = sessionTimeout - 1;
		secound = 59;
	} else {
		secound = secound - 1;
	}
	if (sessionTimeout >= 0) {

		window.setTimeout("DisplaySessionTimeout()", 1000);
	} else {
		callSessionTimeOut();
	}
}
function callSessionTimeOut() {
	popup('divSessionOut', 30, 30);
	$("#sessionTimeOutDiv").fadeOut();
	return true;
};

$(window).on('load resize', function() {
    //screen.width
    if ($(window).width() < 1280) {
        console.log("Its for Mobile");

    } else {
        console.log("Its for Desktop");


        $(function() {
            $.fn.scrollBottom = function() {
                return $(document).height() - this.scrollTop() - this.height();
            };

            var $sightSeeingPs = $('#sightSeeingPaymentSummary');
            var $window = $(window);

            $window.on("scroll resize", function() {
                //var gap = $window.height() - $el.height() - 10;
                var visibleFoot = 560 - $window.scrollBottom();
                var scrollTop = $window.scrollTop()
                if (scrollTop < 104) {
                    $sightSeeingPs.css({
                        top: (104 - scrollTop) + "px",
                        position: 'fixed',
                        marginRight: '15px',
                        bottom: "auto",
                        /*right:0,*/
                        width: 312,
                        zIndex: 1
                    });
                } else if (visibleFoot > 50) {
                    $sightSeeingPs.css({
                        top: "auto",
                        position: 'fixed',
                        marginRight: '15px',
                        bottom: visibleFoot + "px",
                        /*right:0,*/
                        width: 312,
                        zIndex: 1
                    });
                } else {
                    $sightSeeingPs.css({
                        top: 0,
                        position: 'fixed',
                        marginRight: '15px',
                        bottom: "auto",
                        /*right:0,*/
                        width: 312,
                        zIndex: 1
                    });
                }
            });
        });
    }
})




var sightSeeingPaymentModule = angular.module("SightSeeingPaymentPage", []);

/*sightSeeingPaymentModule.directive("loading", function() {
  return {
    restrict: "E",
    replace: true,
    template: "",
    link: function(scope, element, attr) {
      scope.$watch("loading", function(val) {
        if (val) $(element).show();
        else $(element).hide();
      });
    }
  };
});*/

sightSeeingPaymentModule.controller("sightSeeingPaymentController",['$scope','$http','$window', 'orderByFilter', function($scope, $http, $window, orderBy) {
  $scope.noOfResult = 5;
  $scope.showMore = true;
  $scope.resultFound=false;
  $scope.loading=true;
  $scope.durationArr = [];
  $scope.reverse = true;
  $scope.propertyName = null;
  
  var searchId = $("#currentValue").val();
  
  $scope.getCap = function(text) {
    return text.replace(/([a-z])([A-Z])/g, "$1 $2");
  };
  
  $scope.backToCart = function (productId, gradeCodeId) {
	$('form#sightSeeingCartForm').attr({action: "/activityreviewcart/" + productId + "/" + gradeCodeId});
	$("form#sightSeeingCartForm").submit();
  }
	
}]);


sightSeeingPaymentModule.filter("nospace", function() {
	return function(value) {
		return !value ? "" : value.replace(/ /g, "-");
	};
});

sightSeeingPaymentModule.filter("getIntPart", function() {
	return function(value) {
		var newValue = value.toString();
		return newValue.split(".")[0];
	};
});

sightSeeingPaymentModule.filter("getDecimalPart", function() {
	return function(value) {
		var newValue = value.toString();
	    var decimalPart = newValue.split(".")[1];
	    if (decimalPart == undefined) decimalPart = "00";
	    if (decimalPart.length == 1) decimalPart = decimalPart + "0";
	    return decimalPart;
	};
});

sightSeeingPaymentModule.filter("capitalize", function() {
	return function(input) {
		var temp = input.split(" ");
	    var resStr = "";
	    angular.forEach(temp, function(val, key) {
	    	if (key == temp.length - 1) {
	    		resStr = resStr.concat(!!val ? val.charAt(0).toUpperCase() + val.substr(1).toLowerCase() : "");
	    	} else {
	    		resStr = resStr.concat(!!val ? val.charAt(0).toUpperCase() + val.substr(1).toLowerCase() : "", " ");
	    	}
	    });
	    return resStr;
	};
});

