
        $(function() {
          $('.contain').slidesjs({	
            height: 450,
            navigation: false,
            pagination: false,
            effect: {
              fade: {
                speed: 100
              }
            },
            callback: {
                start: function(number)
                {			
                    $("#slider_content1,#slider_content2,#slider_content3").fadeOut(10);
                },
                complete: function(number)
                {			
                    $("#slider_content" + number).delay(500).fadeIn(1000);
                }		
            },
            play: {
                active: false,
                auto: true,
                interval: 6000,
                pauseOnHover: false,
                effect: "fade"
            }
          });
        });
		  $(function() {
			$( "#departDate" ).datepicker({
			  changeMonth: true,
			  changeYear: true,
			  dateFormat:"yy-mm-dd",
			  showButtonPanel: true,
			   minDate: minDate, maxDate: maxDate,
			 onClose: function () {
            var dateDepMin = $('#departDate').datepicker("getDate");
            var dateRetMin = $('#returnDate').datepicker("getDate");
            if (dateDepMin != null && dateDepMin != '') {
            if ($('#tripType').val()=='2'){
		
                $("#returnDate").datepicker("change", { minDate: new Date(dateDepMin) });
                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
                if (dateRetMin != null) {
                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                    if (dMin > rMin) {
                        $('#returnDate').val($.datepicker.formatDate('mm/dd/yy', new Date(dMin)));
                        $("#returnDate").focus();
                    }
                }
                else {
                    $('#returnDate').val($.datepicker.formatDate('mm/dd/yy', new Date(dMin)));
                    $("#returnDate").focus();
                }
            }
            }
        }
			});
		  });
		    $(function() {
				$( "#returnDate" ).datepicker({
				  changeMonth: true,
				  changeYear: true,
				   dateFormat:"yy-mm-dd",
				   showButtonPanel: true,
				   minDate: minDate, maxDate: maxDate,
			        onClose: function () {
			            var dateDepMin = $('#departDate').datepicker("getDate");
			            var dateRetMin = $('#returnDate').datepicker("getDate");
			            if (dateDepMin != null && dateDepMin != '') {
			                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
			                if (dateRetMin != null) {
			                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
			                    if (dMin > rMin) {
			                        alert('Returning date always equal or greater than departure date!');
			                        $("#returnDate").val('');
			                    }
			                }
			            }
			        }
				});
			  });
		
		  $('.form-group-select-plus').each(function () {
				var self = $(this),
					btnGroup = self.find('.btn-group').first(),
					select = self.find('select');
					
				btnGroup.children('label').last().click(function () {
					btnGroup.addClass('hidden');
					select.removeClass('hidden');
					
					
				});
				btnGroup.children('label:not(:last-child)').click(function () {
					select.val($(this).children("input:eq(0)").data("value"));
				});
			});
		/*	
			$('label').click(function() {
				  $("label.active").removeClass("active");
				  $(this).addClass('active');
			});*/
    
   minDate = new Date();
  //  maxDate = new Date(parseInt("2016", 10), (parseInt("1", 10) - 1) + 11, parseInt("31", 10));
    
    var x = 12; 
     maxDate = new Date();
     maxDate.setMonth(maxDate.getMonth() + x);
     
     
     numMonth = 1;
    actionUrl = '/service/getairport';    
    $("#adult").val("1");
    $("#senior").val("0");
    $("#child").val("0");
    $("#cabin").val("1");
    $(function () {
        $('.offcanvas-toggle-btn').click(function () {
            $('body').toggleClass('active');
        });

    })

			$(function(){
			var overlay = $('<div id="overlay" ></div>');
			$('.close_new').click(function(){
			$('.popup_feedback').hide();
			overlay.appendTo(document.body).remove();
			return false;
			});
			
			$('.click').click(function(e){
			overlay.show();
			overlay.appendTo(document.body);
			$('.popup_feedback').show();
			e.stopPropagation();
			return false;
			});
			});
			
			$(".popup_feedback").click(function(e){
				e.stopPropagation();
			});
			$("#overlay").click(function(e){
				e.stopPropagation();
			});

			$(document).click(function () {
			
				$("#overlay").hide();
			
				$('.popup_feedback').hide();
				
				});
				
			function toggleChevron(e) {
				$(e.target)
					.prev('.panel-heading')
					.find("i.indicator")
					.toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
			}
			$('#accordion').on('hidden.bs.collapse', toggleChevron);
			$('#accordion').on('shown.bs.collapse', toggleChevron);
			
			

			$(function(){
			var overlay = $('<div id="overlay" onclick="hideQuote()"></div>');
			$('.close_new').click(function(){
			$('.popup_feedback').hide();
			overlay.appendTo(document.body).remove();
			return false;
			});
			
			$('.x').click(function(){
			$('.popup_feedback').hide();
			overlay.appendTo(document.body).remove();
			return false;
			});
			
			$('.click').click(function(){
			overlay.show();
			overlay.appendTo(document.body);
			$('.popup_feedback').show();
			return false;
			});
			});
			function hideQuote(){
			$(document).ready(function () {
			$('#overlay').click(function () {
			
				$(this).hide();
			
				$('.popup_feedback').hide();
			
				});
			});
			}
			
			function ddlTypejourneyChange(ddlType) {
				if ($(ddlType).val() == "1") {
					$("input[name='toDate']").prop("disabled", true);
				}
				else {
					$("input[name='toDate']").prop("disabled", false);
				}
			}
/*			      
$.validator.addMethod("endGreaterThanBegin", function(value, element) {
    return adult <= infant
}, "* End Point Should be Greater than Start");
		
$.validator.addMethod("user_email_not_same", function(value, element) {
   alert("dd");
   return $('#adult').val() <= $('#infant').val()
}, "* User and Email should not match");
*/
$.validator.addMethod('le', function(value, element, param) {

      return this.optional(element) || value <= $(param).val();
}, 'Invalid value');
		                           
$.validator.addMethod("greaterThan", function(value, element, params) {

    if (!/Invalid|NaN/.test(new Date(value))) {
        return new Date(value) > new Date($(params).val());
    }

    return isNaN(value) && isNaN($(params).val()) 
        || (Number(value) > Number($(params).val())); 
},'Must be greater than {0}.');
	                           
function submitForm(){

 var validator = $("#flightSearch").validate({
  showErrors: function() {
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
    },
 /*  showErrors: function(errorMap, errorList) {
        // Do nothing here
    },
    onfocusout: false,
    onkeyup: false, */
  rules: {                   
   froCity: {
		required: true,
		minlength: 3
	},
	toCity: {
		required: true,
		minlength: 3
	},
	froDate: {
		required: true,
	},
	toDate: {
		required: {
		depends: function(element) {
		if ($('#tripType').val()=='2'){
		return true;
		}else{
		return false;
		}
		}
		}
	//	greaterThan: "#froDate" 
	},
	adult: {
		required: true,
		 range: [1, 9]
		
	},
	infant: {
		required: true,
		 range: [0, 8],
		 le: '#adult'
	},
    },  
     errorElement: "span" ,                              
     messages: {
                froCity: {
					required: "Please enter a valid Origin City.",
					minlength: "Origin City must consist of at least 3 characters"
				},
	             toCity: {
					required: "Please enter a valid Destination City.",
					minlength: "Destination City must consist of at least 3 characters",
					
				},
				froDate: {
					required: "Please enter a valid Depart Date.",
					
				},
	             toDate: {
					required: "Please enter a valid Return Date.",
					
					
				},
				infant: {le: "Infant less than or equal to adult"},
     
     
     }
 });
 if(validator.form()){ // validation perform
 var total = parseInt($("#adult").val()) + parseInt($("#child").val()) + parseInt($("#infantWs").val());

 var adults=parseInt($("#adult").val());
 var infants=parseInt($("#infant").val())
if (infants > adults) {
$("#error").html("<p>&raquo; Infant less than or equal to adult.</p>")
return false;
} 


if (total >= 10) {
$("#error").html("<p>&raquo; Total number of Passenger should be less than or equal to 9 only.</p>")
return false;
} 
var startDate = new Date($('#froDate').val());
var endDate = new Date($('#toDate').val());

if (startDate < endDate){
$("#error").html("<p>&raquo; Return date should be equal or greater than Depart date.</p>")
return false;
}

 if ($.trim($("#froCity").val()) == $.trim($("#toCity").val()) && ($.trim($("#toCity").val()).length > 0 || $.trim($("#froCity").val()).length > 0)) {
 $("#error").html("<p>&raquo; Please enter a different From and To city/ airport code!</p>") 

 return false;
 }
      
var rndId = randomString(12);
  $('form#flightSearch').attr({action: '/search/id/'+rndId});   
  $('form#flightSearch').submit();
  
  
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
		
 