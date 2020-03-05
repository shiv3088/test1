
$(document).ready(function(){
	
	 angular.element(document.getElementById('travelopick')).scope().PostDealss("x12sfs");
	  var apiKey = "X74hmOunUSNWzzCjBEr5p8LJCX0YQOik";   
	    var language = "en";
	   // angular.element(document.getElementById('best-fare')).scope().getDeal('DEN');
	    navigator.geolocation.watchPosition(callback);
		function callback(position){

	     var GEOCODING = '//maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';
	    
	        $.getJSON(GEOCODING).done(function(location) {
	        	if($('#froCity').val()==""){
	          //  $('#country').html(location.results[0].address_components[5].long_name);
	          //  $('#froCity').val(location.results[0].address_components[5].long_name);
	          //  $('#city').html(location.results[0].address_components[2].long_name);
	          //  $('#address').html(location.results[0].formatted_address);
	          //  $('#latitude').html(position.coords.latitude);
	          //  $('#longitude').html(position.coords.longitude);
	            var city=location.results[0].address_components[5].long_name;
	            var country=location.results[0].address_components[6].long_name;
	            angular.element(document.getElementById('Travelopick')).scope().getDeal(position.coords.latitude,position.coords.longitude);
	           // angular.element(document.getElementById('travelopick')).scope().getWeather(city+', '+country);
	         
	        	}       
	            
	        })
	        
		}
	        
	        
	$(".bg-holder").bgswitcher({
		  images: ['/resources/images/banner/homepage.jpg','/resources/images/banner/homepage1.jpg','/resources/images/banner/homepage2.jpg','/resources/images/banner/homepage3.jpg','/resources/images/banner/homepage4.jpg','/resources/images/banner/homepage5.jpg','/resources/images/banner/homepage6.jpg','/resources/images/banner/homepage7.jpg','/resources/images/banner/homepage9.jpg','/resources/images/banner/homepage10.jpg']
		  
		});
	 
$(".toggle_container").hide(); 
$("button.reveal").click(function(){
    $(".toggle_container").slideToggle("fast");
    
    if ($.trim($(this).text()) === '+ Read More') {
        $(this).text('- Hide Text');
    } else {
        $(this).text('+ Read More');        
    }
    
    return false; 
});
 $("a[href='" + window.location.hash + "']").parent(".reveal").click();
});


        $(function() {
        
         
		var hours = 24; // Reset when storage is more than 24hours
		var now = new Date().getTime();
		var setupTime = localStorage.getItem('setupTime');
		if (setupTime == null) {
		}else{
		if(now-setupTime > hours*60*60*1000) {
		        localStorage.clear()
		       
		 }
		}  
		      
		if(localStorage.firstVisit == undefined) {
		
		$('#appId').show();
		} else  if(localStorage.firstVisit == false) {
		 
		    $('#appId').show();
		} else {
		
		    $('#appId').hide();
		}
 

    
     $(function() {
   $("#appIdimg").click(function() {
 
      $('#appId').hide();
     localStorage.firstVisit = true;
     if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if(now-setupTime > hours*60*60*1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
    }
}
   
    });
   });
    
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
        		
   $("#checkInDateDiv").click(function() {
        //  alert('ffd');
      // $("#checkInDate").show();
        $('#checkInDate').datepicker('show'); 
    });
    
 
    
			$( "#checkInDate" ).datepicker({
			  changeMonth: true,
			  changeYear: true,
			  dateFormat:"yy-mm-dd",
			  showButtonPanel: true,
			   minDate: checkInDate, maxDate: maxDate,
			 onClose: function () {
            var dateDepMin = $('#checkInDate').datepicker("getDate");
             day  = dateDepMin.getDate(),  
             year =  dateDepMin.getFullYear();
            var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
								];
 			month = monthNames[dateDepMin.getMonth()];
 			
 		  var weekday=new Array(7);
			weekday[0]="MON";
			weekday[1]="TUE";
			weekday[2]="WED";
			weekday[3]="THU";
			weekday[4]="FRI";
			weekday[5]="SAT";
			weekday[6]="SUN";
            
			
			
            var days=weekday[dateDepMin.getUTCDay()];
          
            
            
          var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
            
            $("#checkInDateDiv").html(divText);
            var dateRetMin = $('#checkOutDate').datepicker("getDate");
            if (dateDepMin != null && dateDepMin != '') {
          
		
                $("#checkOutDate").datepicker("change", { minDate: new Date(dateDepMin) });
                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
                if (dateRetMin != null) {
                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                    if (dMin > rMin) {
                        $('#checkOutDate').val($.datepicker.formatDate('yy-mm-dd', new Date(dMin)));
                      //  $("#checkOutDate").focus();
                          $('#checkOutDate').datepicker('show'); 
                    }
                }
                else {
                    $('#checkOutDate').val($.datepicker.formatDate('yy-mm-dd', new Date(dMin)));
                  //  $("#checkOutDate").focus();
                      $('#checkOutDate').datepicker('show'); 
                }
          
            }
        }
			});
		  });
	   $(function() {
		       $("#checkOutDateDiv").click(function() {
		     
        $('#checkOutDate').datepicker('show'); 
       
    });
    
    
				$( "#checkOutDate" ).datepicker({
				  changeMonth: true,
				  changeYear: true,
				   dateFormat:"yy-mm-dd",
				   showButtonPanel: true,
				   minDate: checkInDate, maxDate: maxDate,
			        onClose: function () {
			            var dateDepMin = $('#checkInDate').datepicker("getDate");
			            var dateRetMin = $('#checkOutDate').datepicker("getDate");
			            
			                
             day  = dateRetMin.getDate(),  
             year =  dateRetMin.getFullYear();
            var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
								];
 			month = monthNames[dateRetMin.getMonth()];
 			
 			var weekday=new Array(7);
			weekday[0]="MON";
			weekday[1]="TUE";
			weekday[2]="WED";
			weekday[3]="THU";
			weekday[4]="FRI";
			weekday[5]="SAT";
			weekday[6]="SUN";
            //alert(dateRetMin.getUTCDay());
            var days=weekday[dateRetMin.getUTCDay()];
           // alert(day+":"+days+":"+month);
            
            
          var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
            
            $("#checkOutDateDiv").html(divText);
            
            
			            if (dateDepMin != null && dateDepMin != '') {
			                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
			                if (dateRetMin != null) {
			                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
			                    if (dMin > rMin) {
			                        alert('Check Out date always equal or greater than Check In date!');
			                        $("#checkOutDate").val('');
									$("#checkOutDateDiv").html('');
			                    }
			                }
			            }
			        }
				});
			  });
		
    
		  $(function() {
		         $("#departDateDiv").click(function() {
        //  alert('ffd');
      // $("#departDate").show();
        $('#departDate').datepicker('show'); 
    });
    
 
    
			$( "#departDate" ).datepicker({
			  changeMonth: true,
			  changeYear: true,
			  dateFormat:"yy-mm-dd",
			  showButtonPanel: true,
			   minDate: minDate, maxDate: maxDate,
			 onClose: function () {
            var dateDepMin = $('#departDate').datepicker("getDate");
             day  = dateDepMin.getDate(),  
             year =  dateDepMin.getFullYear();
            var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
								];
 			month = monthNames[dateDepMin.getMonth()];
 			
 		    var weekday=new Array(7);
			weekday[0]="MON";
			weekday[1]="TUE";
			weekday[2]="WED";
			weekday[3]="THU";
			weekday[4]="FRI";
			weekday[5]="SAT";
			weekday[6]="SUN";
            
			/*var weekday = new Array();
			weekday[0] = "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";*/
			
            var days=weekday[dateDepMin.getUTCDay()];
           // alert(day+":"+days+":"+month);
            
            
          var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
            
            $("#departDateDiv").html(divText);
            var dateRetMin = $('#returnDate').datepicker("getDate");
            if (dateDepMin != null && dateDepMin != '') {
           
            if ($('#tripType').val()=='2'){
		
                $("#returnDate").datepicker("change", { minDate: new Date(dateDepMin) });
                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
                
               
                if (dateRetMin != null) {
                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                   
                   
                    if (dMin > rMin) {
                        $('#returnDate').val($.datepicker.formatDate('mm/dd/yy', new Date(dMin)));
                      //  $("#returnDate").focus();
                         $('#returnDate').datepicker('show'); 
                    }
                }
                else {
                    $('#returnDate').val($.datepicker.formatDate('mm/dd/yy', new Date(dMin)));
                   // $("#returnDate").focus();
                     $('#returnDate').datepicker('show'); 
                }
            }
            }
        }
			});
		  });
		    $(function() {
		       $("#returnDateDiv").click(function() {
		       if ($('#tripType').val() == "2") {
        $('#returnDate').datepicker('show'); 
        }
    });
    
    
				$( "#returnDate" ).datepicker({
				  changeMonth: true,
				  changeYear: true,
				   dateFormat:"yy-mm-dd",
				   showButtonPanel: true,
				   minDate: minDate, maxDate: maxDate,
			        onClose: function () {
			            var dateDepMin = $('#departDate').datepicker("getDate");
			            var dateRetMin = $('#returnDate').datepicker("getDate");
			            
			                
             day  = dateRetMin.getDate(),  
             year =  dateRetMin.getFullYear();
            var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
								];
 			month = monthNames[dateRetMin.getMonth()];
 			
 			var weekday=new Array(7);
			weekday[0]="MON";
			weekday[1]="TUE";
			weekday[2]="WED";
			weekday[3]="THU";
			weekday[4]="FRI";
			weekday[5]="SAT";
			weekday[6]="SUN";
            //alert(dateRetMin.getUTCDay());
            var days=weekday[dateRetMin.getUTCDay()];
           // alert(day+":"+days+":"+month);
            
            
          var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
            
            $("#returnDateDiv").html(divText);
            
            
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

    minDate = new Date();
//    maxDate = new Date(parseInt("2016", 10), (parseInt("1", 10) - 1) + 11, parseInt("31", 10));



     var x = 12; 
     maxDate = new Date();
     maxDate.setMonth(maxDate.getMonth() + x);
     
     var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
								];
     var weekday=new Array(7);
			weekday[1]="MON";
			weekday[2]="TUE";
			weekday[3]="WED";
			weekday[4]="THU";
			weekday[5]="FRI";
			weekday[6]="SAT";
			weekday[0]="SUN";
     
     
             day  = minDate.getDate(),  
         	month = monthNames[minDate.getMonth()];
 		    var days=weekday[minDate.getUTCDay()];
           
             var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
            
           
               
     
 		       
              
            $("#departDateDiv").html(divText);
             var ch = 2;    
            checkInDate = new Date();
           checkInDate.setDate(checkInDate.getDate() + ch); 
                      checkday  = checkInDate.getDate(),  
                      
         	month = monthNames[checkInDate.getMonth()];
 		     days=weekday[checkInDate.getUTCDay()];
 		    
             var divcheckInText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+checkday+"</div>"+
			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
            
           
             $("#checkInDateDiv").html(divcheckInText);
            
            var xs = 7; 
     returnsDate = new Date();
     returnsDate.setDate(returnsDate.getDate() + xs);
            
       
     
     
              day  = returnsDate.getDate(),  
         	month = monthNames[returnsDate.getMonth()];
 		    var days=weekday[returnsDate.getUTCDay()];
 		    
 		     
          var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
            
            $("#returnDateDiv").html(divsText);
             $("#checkOutDateDiv").html(divsText);
              
			  var dt_to = $.datepicker.formatDate('yy-mm-dd', new Date());
			  var dt_from = $.datepicker.formatDate('yy-mm-dd', returnsDate);
			   var checkInDate_from = $.datepicker.formatDate('yy-mm-dd', checkInDate);
			  
			 
              $("#departDate").val(dt_to);
              $("#returnDate").val(dt_from);
              
               $("#checkInDate").val(checkInDate_from);
              $("#checkOutDate").val(dt_from);
              
            
  /*  
 x = 12; //or whatever offset
maxDate = new Date();
dates = maxDate.getDate();
maxDate.setDate(1);
maxDate.setMonth(maxDate.getMonth()+X);
maxDate.setDate(dates);
*/ 

	$("#travelss").click(function(){
		$(".traveler").toggle();
	});
	$("#close-div").click(function(){
		$(".traveler").hide();
	});
															
    
    $("#adult,#child,#infant,#infantWs").change(
    function() {
   
        var val1 = $('#adult option:selected').val();
        var val2 = $('#child option:selected').val();
         var val3 = $('#infant option:selected').val();
          var val4 = $('#infantWs option:selected').val();
       
        var total=parseInt(val1);
        if(val2>0){
        total=parseInt(total)+parseInt(val2);
        }
        
        if(val3>0){
        total=parseInt(total)+parseInt(val3);
        }
        
        if(val4>0){
        total=parseInt(total)+parseInt(val4);
        }
       // alert("total:"+total);
        if(val3 > val1){
       // alert("Infant less than or equal to adult");
         $("div#error").html("<p>&raquo; Infant less than or equal to adult.</p>");
        }else{
        
        }
        if(total > 9){
        // alert("Total number of Passenger should be less than or equal to 9 only");
          $("div#error").html("<p>&raquo; Total number of Passenger should be less than or equal to 9 only.</p>");
        }else{
        
        if(total == 1){
         $("#travelss").val("1 Adult");
        }else{
         $("#travelss").val(total+" Travelers");
        }
        }
        // Do something with val1 and val2 ...
    }
  );


     numMonth = 1;
   // actionUrl = '/service/getairport';    
    $("#adult").val("1");
    $("#infant").val("0");
    $("#child").val("0");
    $("#infantws").val("0");
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
			
				if (ddlType == "1") {
					
					
					var myEl = angular.element( document.querySelector( '#ow' ) );
					myEl.addClass('active'); 
					
					var myRT = angular.element( document.querySelector( '#rt' ) );
					myRT.removeClass('active'); 
					
				    $('#tripType').val(1);
                     var dateDepMin = $('#departDate').datepicker("getDate");
                     $("#returnDate").datepicker("change", { minDate: new Date(dateDepMin) }); 
                     $("input[name='returnDate']").prop("disabled", true);
                     $( "#returnDate" ).prop( "disabled", true );
                      var xs = 7; 
				     returnsDate = new Date();
				     returnsDate.setDate(dateDepMin.getDate() + xs);
				            
		            day  = returnsDate.getDate(),  
		         	month = monthNames[returnsDate.getMonth()];
		 		    var days=weekday[returnsDate.getUTCDay()];
       
			        var dt_from = $.datepicker.formatDate('yy-mm-dd', returnsDate);
            
              $("#returnDate").val(dt_from);
              document.getElementById("returnDate").value=dt_from;
                     
				}
				else if (ddlType == "2") {
					
					var myEl = angular.element( document.querySelector( '#ow' ) );
					
					
					var myRT = angular.element( document.querySelector( '#rt' ) );
					myEl.removeClass('active'); 
					myRT.addClass('active'); 
					
				    $('#tripType').val(2);
				    $("input[name='returnDate']").prop("enabled", true);
				    $( "#returnDate" ).prop( "disabled", false );
				
				}else{
				 $('#tripType').val(2);
				   $( "#returnDate" ).prop( "disabled", false );
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


function submitHotelForm(){

 var validatorHotel = $("#searchHotel").validate({
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
   rules: {                   
 	stayCity: {
		required: true,
		minlength: 3
	},
	checkInDate: {
		required: true,
	},
	checkOutDate: {
	    required: true, 
	},
	room: {
		required: true,
		 range: [1, 5]
		
	},
  },  
     errorElement: "span" ,                              
     messages: {
               stayCity: {
					required: "Please enter a valid Destination City.",
					minlength: "Destination City must consist of at least 3 characters",
					
				},
				checkInDate: {
					required: "Please enter a valid Check-In Date.",
					
				},
	             checkOutDate: {
					required: "Please enter a valid Check-Out Date.",
					
				},
     }
     
 }); 
 
   

 // alert("val 2"+rndId);
  
   //$('form#flightSearch').attr({action: '/search/id/'+rndId});   
 // $('form#flightSearch').submit();
 // alert("val 3"+rndId); 
  if(validatorHotel.form()){ // validation perform
/*  var total = parseInt($("#adult").val()) + parseInt($("#child").val()) + parseInt($("#infantWs").val());
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
 } */
 // alert("val2");
  var rndId = randomString(12);
  $('form#searchHotel').attr({action: '/hotelSearch/id/'+rndId});   
  $('form#searchHotel').submit();
 
  
  
 //  $('form#flightSearch').attr({action: '/search/id/'+rndId});   
 // $('form#flightSearch').submit();
  
 }
 
}                        
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
				infant: {
				required: "Please enter a valid Return Date.",
				le: "Infant less than or equal to adult"},
     
     
     }
     
 });

   var adults=parseInt($("#adult").val());
   if(adults==0){
  $.notify('Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please call us at 1-888 509-5589. Otherwise please include at least 1 adult then hit "Search".', 'warning');
  return false;
  }
 if(validator.form()){ // validation perform
 var total = parseInt($("#adult").val()) + parseInt($("#child").val()) + parseInt($("#infantWs").val());
 var adults=parseInt($("#adult").val());
 var infants=parseInt($("#infant").val())
if (infants > adults) {
$("#error").html("<p>&raquo; Infant less than or equal to adult.</p>")
return false;
} 

  if(adults==0){
  $.notify('Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please call us at 1-888 509-5589. Otherwise please include at least 1 adult then hit "Search".', 'warning');
  return false;
  }
if (total >= 10) {
$("#error").html("<p>&raquo; Total number of Passenger should be less than or equal to 9 only.</p>")
return false;
} 
var startDate = new Date($('#froDate').val());
var endDate = new Date($('#returnDate').val());

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

function unaccompanied(){
$.notify('Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please call us at 1-888 509-5589. Otherwise please include at least 1 adult then hit "Search".', 'warning');
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

        var _mfq = _mfq || [];
        (function () {
        var mf = document.createElement("script"); mf.type = "text/javascript"; mf.async = true;
        mf.src = "//cdn.mouseflow.com/projects/12d10d9b-2948-4779-af73-ac5bd3868d89.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
      })();
      
      
      
      
      function addAge(kk){
	    var childNo = kk.value;
	 //  alert("room id:"+kk.id);
	 //   alert("childNo:"+childNo);
	  var str2 = kk.id.replace ( /[^\d.]/g, '' ); 
      var room = parseInt(str2);
     //  alert(room);
	    $("#age"+room).css({display: "block"});
	    if(childNo==0){
	     $("#age"+room).css({display: "none"});
	    }
	    for(i=0;i<5;i++){
	     $("#"+room+i).css({display: "none"});
	    }
	    for(i=0;i<childNo;i++){
	     $("#"+room+i).css({display: "block"});
	    }
	    
	    var room=$("#rooms").val();
	   
	 
	   var adult = $('#roomsadults option:selected').val();
	
	   
	  //    alert("adults:"+adult);
	     var child=$("#rooms0child :selected").text();

	 
	  if($('#rooms1adults').length && $('#rooms1adults').val().length){
	   
	     var adult1=  $("#rooms1adults").val();
	     var child1=  $("#rooms1child").val();
	      adult=parseInt(adult)+parseInt(adult1);
	      child=parseInt(child)+parseInt(child1);
	   }
	// alert("adult no:"+adult);
	   
	    if($('#rooms2adults').length && $('#rooms2adults').val().length){
	 var adult2=   $("#rooms2adults").val();
	 var child2=  $("#rooms2child").val();
	     adult=parseInt(adult)+parseInt(adult2);
	      child=parseInt(child)+parseInt(child2);
	   }
	   
	  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
	 var adult3=   $("#rooms3adults").val();
	 var child3=  $("#rooms3child").val();
	   
	      adult=parseInt(adult)+parseInt(adult3);
	      child=parseInt(child)+parseInt(child3);
	   
	   }
	   
	    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
	    
	 var adult4=   $("#rooms4adults").val();
	 var child4=  $("#rooms4child").val();
	    adult=parseInt(adult)+parseInt(adult4);
	      child=parseInt(child)+parseInt(child4);
	   
	   }
	   
	 
	
	   var text="";//room+"1 Room, 1 Adult, 0 Child";
	   
	    if(room == 1){
         text=text+"1 Room,";
        }else{
          text=text+room+" Rooms,";
        }
        
        if(adult==1){
         text=text+"1 Adult,";
        }else{
        text=text+adult+" Adults,";
        }
	   
	   if(child==0){
         text=text+"0 Child";
        }else if(child==1){
        text=text+child+" Child";
        }else{
        text=text+child+" Children";
        }
         $("#guest").val(text);
	    
	   }
	   
	
	   function addAdult(ad){
	  // var adultNo=ad.value;
	   var room=$("#rooms").val();
	 //  var adult=$("#adultNo").val();
	 //  var child=$("#childNo").val();
	//   var totAdult=adult+adultNo;
	//   $("#adultNo").val(adult+adultNo);
	   
	   //  alert("room:"+room);
	
	 
	  var adult = $('#roomsadults option:selected').val();
	
	   
	  //    alert("adults:"+adult);
	     var child=$("#rooms0child :selected").text();
	   
	   if($('#rooms1adults').length && $('#rooms1adults').val().length){
	   
	     var adult1=  $("#rooms1adults").val();
	     var child1=  $("#rooms1child").val();
	      adult=parseInt(adult)+parseInt(adult1);
	      child=parseInt(child)+parseInt(child1);
	   }
	// alert("adult no:"+adult);
	   
	    if($('#rooms2adults').length && $('#rooms2adults').val().length){
	 var adult2=   $("#rooms2adults").val();
	 var child2=  $("#rooms2child").val();
	     adult=parseInt(adult)+parseInt(adult2);
	      child=parseInt(child)+parseInt(child2);
	   }
	   
	  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
	 var adult3=   $("#rooms3adults").val();
	 var child3=  $("#rooms3child").val();
	   
	      adult=parseInt(adult)+parseInt(adult3);
	      child=parseInt(child)+parseInt(child3);
	   
	   }
	   
	    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
	    
	 var adult4=   $("#rooms4adults").val();
	 var child4=  $("#rooms4child").val();
	    adult=parseInt(adult)+parseInt(adult4);
	      child=parseInt(child)+parseInt(child4);
	   
	   }
	  
	 
	   
	   var text="";//room+"1 Room, 1 Adult, 0 Child";
	   
	    if(room == 1){
         text=text+"1 Room,";
        }else{
          text=text+room+" Rooms,";
        }
        
        if(adult==1){
         text=text+"1 Adult,";
        }else{
        text=text+adult+" Adults,";
        }
	   
	   if(child==0){
         text=text+"0 Child";
        }else if(child==1){
        text=text+child+" Child";
        }else{
        text=text+child+" Children";
        }
         $("#guest").val(text);
	   }
	   
 
															$(document).ready(function(){
																$("#guest").click(function(){
			$(".guests").toggle();
		});
		$("#h_close-div").click(function(){
			$(".guests").hide();
		});
		
		  var room_form_index=1;
		  var age_form_index=0;
		    $("#rooms").change(function(){
		     var cust_indexs = this.value;
		  //   alert("cust_indexs:"+cust_indexs);
		   //   alert("room_form_index:"+room_form_index);
		      // if(cust_indexs>room_form_index){
		   //    alert("inside");
		     var  row_index=cust_indexs-room_form_index;
		   //   alert("loop outside"+row_index);
		      if(row_index>0){
		    //  alert("loop"+row_index);
		      for (i = 1; i <= row_index; i++) {
		     // alert("start"+i);
		       var cust_index=room_form_index+(i-1);
		     //  alert("cust_index"+cust_index);
		        $('#childAge'+(Number(cust_index)-1)).after($("#cust").clone().attr("id","cust" + cust_index));
		      //  $(this).parent().after($("#cust").clone().attr("id","cust" + cust_index));
		          $("#cust" + cust_index).css("display","inline");
		           //$("#cust"+ cust_index).find("Room 1").attr("id","age"+(cust_index));
		    //  alert("cust_index"+(Number(cust_index)-1));
		    
		    $("#cust"+ cust_index).find("#roomNo0").attr("id","roomNo"+(cust_index));
		        var e = $("<div class='form-group form-group-lg form-group-select-plus'>Room "+(cust_index+1)+":</div>");
				$("#roomNo" + cust_index).html(e);
				
		        $("#cust" + cust_index + " select").each(function(){
		            if(this.id.indexOf('adults') != -1){
		            $(this).attr("name","rooms[" + cust_index+"].adults");
		            $(this).attr("id","rooms" + cust_index+"adults");
		            }else{
		              $(this).attr("name","rooms[" + cust_index+"].child");
		            $(this).attr("id","rooms" + cust_index+"child");
		            }
		            });
		            
		          
		            
		         $('#cust'+ cust_index).after($("#childAge0").clone().attr("id","childAge" + cust_index)); 
		         
		         $("#childAge"+ cust_index).find("#age0").attr("id","age"+(cust_index));
		         $("#childAge"+ cust_index).find("#0"+"0").attr("id",""+(cust_index)+"0");
		         $("#childAge"+ cust_index).find("#0"+"1").attr("id",""+(cust_index)+"1");
		         $("#childAge"+ cust_index).find("#0"+"2").attr("id",""+(cust_index)+"2");
		         $("#childAge"+ cust_index).find("#0"+"3").attr("id",""+(cust_index)+"3");
		         $("#childAge"+ cust_index).find("#0"+"4").attr("id",""+(cust_index)+"4");
		         
		       //  var e = $('<div>hello</div>');
				// $("#childAge" + cust_index).prepend(e);  
		       // $(this).parent().after($("#childAge").clone().attr("id","childAge" + cust_index));
		        
		         $("#childAge" + cust_index).css("display","block");
		          var chAge=0;
		          $("#childAge" + cust_index + " select").each(function(){
		           
		            $(this).attr("name","rooms[" + cust_index+"].children["+chAge+"].age");
		            $(this).attr("id","rooms" + cust_index+"children["+chAge+"].age");
		           chAge=chAge+1;
		            });
		     
		     }
		     room_form_index=row_index+room_form_index;
		     }else{
		     row_index=room_form_index-cust_indexs;
		   //   alert("loop outside"+row_index);
		      for (i = 1; i <= row_index; i++) {
		    //  alert("loop inside"+row_index);
		     
		      
		     
		      room_form_index=room_form_index-1;
		    //   alert("room_form_index inside"+room_form_index);
		     $("#cust" + room_form_index).remove();
		     $("#childAge" + room_form_index).remove();
		     
		     
		     }
		     } 
		      
		      
		       var room=$("#rooms").val();
   
															  var adult = $('#roomsadults option:selected').val();

   
																  //    alert("adults:"+adult);
			     var child=$("#rooms0child :selected").text();
			   
			   if($('#rooms1adults').length && $('#rooms1adults').val().length){
			   
			     var adult1=  $("#rooms1adults").val();
			     var child1=  $("#rooms1child").val();
			      adult=parseInt(adult)+parseInt(adult1);
			      child=parseInt(child)+parseInt(child1);
			   }
			// alert("adult no:"+adult);
			   
			    if($('#rooms2adults').length && $('#rooms2adults').val().length){
			 var adult2=   $("#rooms2adults").val();
			 var child2=  $("#rooms2child").val();
			     adult=parseInt(adult)+parseInt(adult2);
			      child=parseInt(child)+parseInt(child2);
			   }
			   
			  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
			 var adult3=   $("#rooms3adults").val();
			 var child3=  $("#rooms3child").val();
			   
			      adult=parseInt(adult)+parseInt(adult3);
			      child=parseInt(child)+parseInt(child3);
			   
			   }
			   
			    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
			    
			 var adult4=   $("#rooms4adults").val();
			 var child4=  $("#rooms4child").val();
			    adult=parseInt(adult)+parseInt(adult4);
			      child=parseInt(child)+parseInt(child4);
			   
			   }
																	   
	   var text="";//room+"1 Room, 1 Adult, 0 Child";
	   
	    if(room == 1){
         text=text+"1 Room,";
        }else{
          text=text+room+" Rooms,";
        }
        
        if(adult==1){
         text=text+"1 Adult,";
        }else{
        text=text+adult+" Adults,";
        }
	   
	   if(child==0){
         text=text+"0 Child";
        }else if(child==1){
        text=text+child+" Child";
        }else{
        text=text+child+" Children";
        }
         $("#guest").val(text);
        
	}); 
									    
		
	});
															
															
/*******************************************/
													

															var myapp =angular.module("angularDeal", ['LocalStorageModule']);
															(function(){

																myapp.controller('dealCtrl',['$http','$window','$scope','localStorageService','$timeout',function($http,$window,$scope,localStorageService, $timeout){
																	var vm = this;
																	 $scope.searchQueryList =  [];
																	 $scope.sessQueryList =  [];
																	 $scope.lastItem=[];
																	 $scope.dealList=[];
																	 $scope.cabinClass="Economy";
																	
																	  $scope.getDeal	 = function(longitude,latitude) {	
																		  var post_data = {  //prepare payload for request
																				    'longitude':longitude,
																				    'latitude':latitude,
																				   		}
																			
															    	$http.post('/getDeals',post_data).success(function(response){
																	  
															    		if(response != 'none'){
															    		$scope.froCity=response;
															    	//	$scope.returnToCity=response;
															    		$scope.PostDealss(response);
																	    }
															    		
																
																	  })
																		.error(function(error){
																		
																		})
																		
																  }
																	  
																	 /*  $scope.$watch('froCity', function(val) {
																	        if (val) {
																	           
																	        	$scope.returnToCity=val;
																	          
																	        }
																	    });
																	   
																	   $scope.$watch('searchQuery', function(val) {
																	        if (val) {
																	           
																	            $scope.searchQueryList.push(val);
																	           
																	        }
																	    });*/
																	   
																		$scope.showPNRDetails = function (pnr) 
																		{
																			//alert("PNR"+pnr);
																			var query = "key="+pnr;
																			//alert("key"+pnr);
																			var left = screen.width / 2 - 200, top = screen.height / 2 - 250
																			$window.open('/pnrDetails?'+query, '', "top=" + top + ",left=" + left + ", width=700, height=550");
																		};
																		
																		$scope.ShowCardDetailsDiv = function (payment)
																		{	
																			//alert("payments"+payments);	
																			/*alert(payment);
																			
																			alert("Payments"+payment.CardCode);*/
																			
																							  
																			
																				  //alert(${payment.CardCode});
																			//Payments payment1=payment;
																			
																		//	alert(payment);
																			 
																			 $scope.cardCode = payment.CardCode;
																			
																			 $scope.cardNumber = payment.CardNumber;
																			 $scope.cardHolderName = payment.CardHolderName;
																			 $scope.expiryMonth = payment.ExpiryMonth;
																			 $scope.expiryYear = payment.ExpiryYear;
																			 $scope.cvv = payment.CvvNo;				 
																			 $scope.address1 = payment.Address1;
																			 $scope.address2 = payment.Address2;
																			 
																			 $scope.CardDetailsDiv = true;
																			 var carddetail = document.getElementById('carddetail');
																			  
																				var vis = carddetail.style;			  	 
																					  vis.display = 'block';
																		};
																		
																		$scope.HidePop = function (id)
																		{
																			$scope.responseDiv = false;
																		};		  
																		
																		// country code
																		
																		$scope.countries = [
																							{ "id": "US" , "name": "United States"  },
																							{ "id": "CA" , "name": "Canada"  },
																							{ "id": "GB" , "name": "United Kingdom"  },
																							{ "id": "AI" , "name": "Anguilla"  },
																							{ "id": "AG" , "name": "Antigua and Barbuda"  },
																							{ "id": "AR" , "name": "Argentina"  },
																							{ "id": "AM" , "name": "Armenia"  },
																							{ "id": "AW" , "name": "Aruba"  },
																							{ "id": "AU" , "name": "Australia"  },
																							{ "id": "AT" , "name": "Austria"  },
																							{ "id": "AZ" , "name": "Azerbaijan"  },
																							{ "id": "BS" , "name": "Bahamas"  },
																							{ "id": "BH" , "name": "Bahrain"  },
																							{ "id": "BB" , "name": "Barbados"  },
																							{ "id": "BE" , "name": "Belgium"  },
																							{ "id": "BZ" , "name": "Belize"  },
																							{ "id": "BM" , "name": "Bermuda"  },
																							{ "id": "BO" , "name": "Bolivia"  },
																							{ "id": "BA" , "name": "Bosnia Herzegovina"  },
																							{ "id": "BW" , "name": "Botswana"  },
																							{ "id": "BR" , "name": "Brazil"  },
																							{ "id": "VG" , "name": "British Virgin Islands"  },
																							{ "id": "BN" , "name": "Brunei Darussalam"  },
																							{ "id": "BG" , "name": "Bulgaria"  },
																							{ "id": "KH" , "name": "Cambodia"  },
																							{ "id": "KY" , "name": "Cayman Islands"  },
																							{ "id": "CL" , "name": "Chile"  },
																							{ "id": "CN" , "name": "China"  },
																							{ "id": "CR" , "name": "Costa Rica"  },
																							{ "id": "HR" , "name": "Croatia"  },
																							{ "id": "CY" , "name": "Cyprus"  },
																							{ "id": "CZ" , "name": "Czech Republic"  },
																							{ "id": "DK" , "name": "Denmark"  },
																							{ "id": "DM" , "name": "Dominica"  },
																							{ "id": "DO" , "name": "Dominican Republic"  },
																							{ "id": "EC" , "name": "Ecuador"  },
																							{ "id": "EG" , "name": "Egypt"  },
																							{ "id": "SV" , "name": "El Salvador"  },
																							{ "id": "EE" , "name": "Estonia"  },
																							{ "id": "FI" , "name": "Finland"  },
																							{ "id": "FR" , "name": "France"  },
																							{ "id": "GE" , "name": "Georgia"  },
																							{ "id": "DE" , "name": "Germany"  },
																							{ "id": "GR" , "name": "Greece"  },
																							{ "id": "GD" , "name": "Grenada"  },
																							{ "id": "GP" , "name": "Guadeloupe"  },
																							{ "id": "GU" , "name": "Guam"  },
																							{ "id": "GT" , "name": "Guatemala"  },
																							{ "id": "GY" , "name": "Guyana"  },
																							{ "id": "HT" , "name": "Haiti"  },
																							{ "id": "HN" , "name": "Honduras"  },
																							{ "id": "HK" , "name": "Hong Kong"  },
																							{ "id": "HU" , "name": "Hungary"  },
																							{ "id": "IS" , "name": "Iceland"  },
																							{ "id": "IN" , "name": "India"  },
																							{ "id": "id" , "name": "Indonesia"  },
																							{ "id": "IQ" , "name": "Iraq"  },
																							{ "id": "IE" , "name": "Ireland"  },
																							{ "id": "IL" , "name": "Israel"  },
																							{ "id": "IT" , "name": "Italy"  },
																							{ "id": "JM" , "name": "Jamaica"  },
																							{ "id": "JP" , "name": "Japan"  },
																							{ "id": "JO" , "name": "Jordan"  },
																							{ "id": "KZ" , "name": "Kazakstan"  },
																							{ "id": "KW" , "name": "Kuwait"  },
																							{ "id": "KG" , "name": "Kyrgyzstan"  },
																							{ "id": "LA" , "name": "Lao Peoples Democratic Republic"  },
																							{ "id": "LV" , "name": "Latvia"  },
																							{ "id": "LB" , "name": "Lebanon"  },
																							{ "id": "LT" , "name": "Lithuania"  },
																							{ "id": "LU" , "name": "Luxembourg"  },
																							{ "id": "MO" , "name": "Macau"  },
																							{ "id": "MY" , "name": "Malaysia"  },
																							{ "id": "MT" , "name": "Malta"  },
																							{ "id": "MQ" , "name": "Martinique"  },
																							{ "id": "MX" , "name": "Mexico"  },
																							{ "id": "FM" , "name": "Micronesia"  },
																							{ "id": "MN" , "name": "Mongolia"  },
																							{ "id": "MS" , "name": "Montserrat"  },
																							{ "id": "NA" , "name": "Namibia"  },
																							{ "id": "NL" , "name": "Netherlands"  },
																							{ "id": "AN" , "name": "Netherlands Antilles"  },
																							{ "id": "NZ" , "name": "New Zealand"  },
																							{ "id": "NI" , "name": "Nicaragua"  },
																							{ "id": "NO" , "name": "Norway"  },
																							{ "id": "OM" , "name": "Oman"  },
																							{ "id": "PS" , "name": "Palestinian Territory, Occupied"  },
																							{ "id": "PG" , "name": "Papua New Guinea"  },
																							{ "id": "PY" , "name": "Paraguay"  },
																							{ "id": "PH" , "name": "Philippines"  },
																							{ "id": "PL" , "name": "Poland"  },
																							{ "id": "PT" , "name": "Portugal"  },
																							{ "id": "QA" , "name": "Qatar"  },
																							{ "id": "MK" , "name": "Republic of Macedonia"  },
																							{ "id": "RO" , "name": "Romania"  },
																							{ "id": "RU" , "name": "Russia"  },
																							{ "id": "SM" , "name": "San Marino"  },
																							{ "id": "SA" , "name": "Saudi Arabia"  },
																							{ "id": "RS" , "name": "Serbia"  },
																							{ "id": "SG" , "name": "Singapore"  },
																							{ "id": "SK" , "name": "Slovakia"  },
																							{ "id": "SI" , "name": "Slovenia"  },
																							{ "id": "ZA" , "name": "South Africa"  },
																							{ "id": "KR" , "name": "South Korea"  },
																							{ "id": "ES" , "name": "Spain"  },
																							{ "id": "LK" , "name": "Sri Lanka"  },
																							{ "id": "KN" , "name": "St. Christopher (St. Kitts) Nevis"  },
																							{ "id": "LC" , "name": "St. Lucia"  },
																							{ "id": "PM" , "name": "St. Pierre and Miquelon"  },
																							{ "id": "VC" , "name": "St. Vincent and The Grenadines"  },
																							{ "id": "SR" , "name": "Suriname"  },
																							{ "id": "SE" , "name": "Sweden"  },
																							{ "id": "CH" , "name": "Switzerland"  },
																							{ "id": "SY" , "name": "Syrian Arab Republic"  },
																							{ "id": "TW" , "name": "Taiwan"  },
																							{ "id": "TH" , "name": "Thailand"  },
																							{ "id": "TT" , "name": "Trinidad and Tobago"  },
																							{ "id": "TR" , "name": "Turkey"  },
																							{ "id": "TC" , "name": "Turks and Caicos Islands"  },
																							{ "id": "UA" , "name": "Ukraine"  },
																							{ "id": "AE" , "name": "United Arab Emirates"  },
																							{ "id": "UY" , "name": "Uruguay"  },
																							{ "id": "VI" , "name": "US Virgin Islands"  },
																							{ "id": "VE" , "name": "Venezuela"  },
																							{ "id": "VN" , "name": "Vietnam"  },
																							{ "id": "YE" , "name": "Yemen"  }];
																	    
																	    
																	    
																	    
																	    
																	    $scope.states = [	{ "id": "0" , "name": "Please Select","countryId": "CA" },
																	                     	{ "id":"AB", "name":"Alberta","countryId": "CA"},
																							{ "id":"BC", "name":"British Columbia","countryId": "CA"  },
																							{ "id":"MB", "name":"Manitoba","countryId": "CA"  },
																							{ "id":"NB", "name":"New Brunswick","countryId": "CA"  },
																							{ "id":"NF", "name":"Newfoundland and Labrador","countryId": "CA"  },
																							{ "id":"NT", "name":"Northwest Territories","countryId": "CA"  },
																							{ "id":"NS", "name":"Nova Scotia" ,"countryId": "CA" },
																							{ "id":"NU", "name":"Nunavut" ,"countryId": "CA" },
																							{ "id":"ON", "name":"Ontario" ,"countryId": "CA" },
																							{ "id":"PE", "name":"Prince Edward Island" ,"countryId": "CA" },
																							{ "id":"QC", "name":"Quebec" ,"countryId": "CA" },
																							{ "id":"SK", "name":"Saskatchewan" ,"countryId": "CA" },
																							{ "id":"YT", "name":"Yukon","countryId": "CA"  },
																						
																							{ "id": "AN", "name": "Andaman and Nicobar Islands" ,"countryId": "IN" },
																							{ "id": "AP", "name": "Andhra Pradesh" ,"countryId": "IN" },
																							{ "id": "AR", "name": "Arunachal Pradesh" ,"countryId": "IN" },
																							{ "id": "AS", "name": "Assam" ,"countryId": "IN" },
																							{ "id": "BR", "name": "Bihar" ,"countryId": "IN" },
																							{ "id": "CH", "name": "Chandigarh" ,"countryId": "IN" },
																							{ "id": "CT", "name": "Chhattisgarh" ,"countryId": "IN" },
																							{ "id": "DN", "name": "Dadra and Nagar Haveli","countryId": "IN"  },
																							{ "id": "DD", "name": "Daman and Diu" ,"countryId": "IN" },
																							{ "id": "DL", "name": "Delhi" ,"countryId": "IN" },
																							{ "id": "GA", "name": "Goa" ,"countryId": "IN" },
																							{ "id": "GJ", "name": "Gujarat" ,"countryId": "IN" },
																							{ "id": "HR", "name": "Haryana" ,"countryId": "IN" },
																							{ "id": "HP", "name": "Himachal Pradesh" ,"countryId": "IN" },
																							{ "id": "JK", "name": "Jammu and Kashmir" ,"countryId": "IN" },
																							{ "id": "JH", "name": "Jharkhand" ,"countryId": "IN" },
																							{ "id": "KA", "name": "Karnataka" ,"countryId": "IN" },
																							{ "id": "KL", "name": "Kerala" ,"countryId": "IN" },
																							{ "id": "LD", "name": "Lakshadweep" ,"countryId": "IN" },
																							{ "id": "MP", "name": "Madhya Pradesh" ,"countryId": "IN" },
																							{ "id": "MH", "name": "Maharashtra" ,"countryId": "IN" },
																							{ "id": "MN", "name": "Manipur" ,"countryId": "IN" },
																							{ "id": "ML", "name": "Meghalaya" ,"countryId": "IN" },
																							{ "id": "MZ", "name": "Mizoram","countryId": "IN"  },
																							{ "id": "NL", "name": "Nagaland" ,"countryId": "IN" },
																							{ "id": "OR", "name": "Orissa" ,"countryId": "IN" },
																							{ "id": "PY", "name": "Pondicherry" ,"countryId": "IN" },
																							{ "id": "PB", "name": "Punjab" ,"countryId": "IN" },
																							{ "id": "RJ", "name": "Rajasthan" ,"countryId": "IN" },
																							{ "id": "SK", "name": "Sikkim" ,"countryId": "IN" },
																							{ "id": "TN", "name": "Tamil Nadu" ,"countryId": "IN" },
																							{ "id": "TR", "name": "Tripura" ,"countryId": "IN" },
																							{ "id": "UP", "name": "Uttar Pradesh" ,"countryId": "IN" },
																							{ "id": "UL", "name": "Uttaranchal" ,"countryId": "IN" },
																							{ "id": "WB", "name": "West Bengal"  ,"countryId": "IN"},
																							
																							
																							{ "id": "CT", "name": "Australian Capital Territory" ,"countryId": "AU" },
																							{ "id": "NS", "name": "New South Wales" ,"countryId": "AU"  },
																							{ "id": "NT", "name": "Northern Territory" ,"countryId": "AU"  },
																							{ "id": "QL", "name": "Queensland" ,"countryId": "AU"  },
																							{ "id": "SA", "name": "South Australia" ,"countryId": "AU"  },
																							{ "id": "TS", "name": "Tasmania" ,"countryId": "AU"  },
																							{ "id": "VI", "name": "Victoria" ,"countryId": "AU"  },
																							{ "id": "WA", "name": "Western Australia" ,"countryId": "AU" },
																							
																							{ "id": "AA"  ,"name": "Armed Forces (the) Americas" ,"countryId": "US" },
																							{ "id": "AE"  ,"name": "Armed Forces Europe" ,"countryId": "US" },
																							{ "id": "AE"  ,"name": "Armed Forces Africa"  ,"countryId": "US"},
																							{ "id": "AE"  ,"name": "Armed Forces Middle East"  ,"countryId": "US"},
																							{ "id": "AE"  ,"name": "Armed Forces Canada" ,"countryId": "US" },
																							{ "id": "AP"  ,"name": "Armed Forces Pacific"  ,"countryId": "US"},
																							{ "id": "AL"  ,"name": "Alabama" ,"countryId": "US"},
																							{ "id": "AK"  ,"name": "Alaska"  ,"countryId": "US"},
																							{ "id": "AZ"  ,"name": "Arizona" ,"countryId": "US" },
																							{ "id": "AR"  ,"name": "Arkansas"  ,"countryId": "US"},
																							{ "id": "CA"  ,"name": "California"  ,"countryId": "US"},
																							{ "id": "CO"  ,"name": "Colorado"  ,"countryId": "US"},
																							{ "id": "CT"  ,"name": "Connecticut" ,"countryId": "US" },
																							{ "id": "DE"  ,"name": "Delaware" ,"countryId": "US" },
																							{ "id": "DC"  ,"name": "District of Columbia"  ,"countryId": "US"},
																							{ "id": "FL"  ,"name": "Florida" ,"countryId": "US" },
																							{ "id": "GA"  ,"name": "Georgia" ,"countryId": "US" },
																							{ "id": "HI"  ,"name": "Hawaii" ,"countryId": "US" },
																							{ "id": "id"  ,"name": "idaho" ,"countryId": "US" },
																							{ "id": "IL"  ,"name": "Illinois" ,"countryId": "US" },
																							{ "id": "IN"  ,"name": "Indiania" ,"countryId": "US" },
																							{ "id": "IA"  ,"name": "Iowa" ,"countryId": "US" },
																							{ "id": "KS"  ,"name": "Kansas" ,"countryId": "US" },
																							{ "id": "KY"  ,"name": "Kentucky" ,"countryId": "US" },
																							{ "id": "LA"  ,"name": "Louisiana" ,"countryId": "US" },
																							{ "id": "ME"  ,"name": "Maine" ,"countryId": "US" },
																							{ "id": "MD"  ,"name": "Maryland" ,"countryId": "US" },
																							{ "id": "MA"  ,"name": "Massachusetts" ,"countryId": "US" },
																							{ "id": "MI"  ,"name": "Michigan" ,"countryId": "US" },
																							{ "id": "MN"  ,"name": "Minnesota" ,"countryId": "US" },
																							{ "id": "MS"  ,"name": "Mississippi" ,"countryId": "US" },
																							{ "id": "MO"  ,"name": "Missouri" ,"countryId": "US" },
																							{ "id": "MT"  ,"name": "Montana" ,"countryId": "US" },
																							{ "id": "NE"  ,"name": "Nebraska","countryId": "US"  },
																							{ "id": "NV"  ,"name": "Nevada" ,"countryId": "US" },
																							{ "id": "NH"  ,"name": "New Hampshire" ,"countryId": "US" },
																							{ "id": "NJ"  ,"name": "New Jersey" ,"countryId": "US" },
																							{ "id": "NM"  ,"name": "New Mexico" ,"countryId": "US" },
																							{ "id": "NY"  ,"name": "New York" ,"countryId": "US" },
																							{ "id": "NC"  ,"name": "North Carolina" ,"countryId": "US" },
																							{ "id": "ND"  ,"name": "North Dakota" ,"countryId": "US" },
																							{ "id": "OH"  ,"name": "Ohio" ,"countryId": "US" },
																							{ "id": "OK"  ,"name": "Oklahoma" ,"countryId": "US" },
																							{ "id": "OR"  ,"name": "Oregon" ,"countryId": "US" },
																							{ "id": "PA"  ,"name": "Pennsylvania" ,"countryId": "US" },
																							{ "id": "RI"  ,"name": "Rhode Island" ,"countryId": "US" },
																							{ "id": "SC"  ,"name": "South Carolina" ,"countryId": "US" },
																							{ "id": "SD"  ,"name": "South Dakota" ,"countryId": "US" },
																							{ "id": "TN"  ,"name": "Tennessee" ,"countryId": "US" },
																							{ "id": "TX"  ,"name": "Texas" ,"countryId": "US" },
																							{ "id": "UT" , "name": "Utah" ,"countryId": "US" },
																							{ "id": "VT"  ,"name": "Vermont" ,"countryId": "US" },
																							{ "id": "VA"  ,"name": "Virginia" ,"countryId": "US" },
																							{ "id": "WA" , "name": "Washington" ,"countryId": "US" },
																							{ "id": "WV" , "name": "West Virginia" ,"countryId": "US" },
																							{ "id": "WI" , "name": "Wisconsin" ,"countryId": "US" },
																							{ "id": "WY" , "name": "Wyoming" ,"countryId": "US" } ];
																	    
																	    
																	    
																	    
																	    $scope.cities = [{ "name": "Chandler","id": "CHD","stateId": "AZ"}, 
																	                     { "name": "Fort Huachuca","id":"FHU","stateId": "AZ" }, 
																	                     { "name": "Grand Canyon","id":"GCN" ,"stateId": "AZ"},
																	                     { "name": "Kingman","id":"IGM","stateId": "AZ"}, 
																	                     { "name": "Mesa","id":"MSC","stateId": "AZ"},
																	                     { "name": "Page","id": "PGA","stateId": "AZ"}, 
																	                     { "name": "Phoenix","id":"PHX","stateId": "AZ" }, 
																	                     { "name": "Prescott","id": "PRC","stateId": "AZ"}, 
																	                     { "name": "Tucson","id": "TUS","stateId": "AZ"},
																	                     { "name": "Traverse City","id": "TVC","stateId": "AZ"}, 
																	                     { "name": "Yuma","id":"YUM","stateId": "AZ"}, 
																	                     
																	                     
																	                     { "name": "Anniston","id":"ANB","stateId": "AL"},
																	                     { "name": "Birmingham","id":"BHM","stateId": "AL"}, 
																	                     { "name": "Dothan","id": "DHN","stateId": "AL"},
																	                     { "name": "Huntsville","id": "HSV","stateId": "AL"},
																	                     { "name": "Montgomery","id": "MGM","stateId": "AL"}, 
																	                     { "name": "Mobile","id":"MOB" ,"stateId": "AL"},
																	                     { "name": "Muscle Shoals Florence","id": "MSL","stateId": "AL"},
																	                     ];
																	   

																	       
																	    
																	    $scope.updateCountry = function(){
																	      $scope.availableStates = [];
																	      
																	      angular.forEach($scope.states, function(value){
																	        if(value.countryId == $scope.country.id){
																	          $scope.availableStates.push(value);
																	        }       
																	        
																	      });

																	      if($scope.availableStates.length == '0')
																    	  {
																	    	$("#mystate").css("display", "none");
																	    	$("#nostate").css("display", "block");
																    	  }		  
																		  if($scope.availableStates.length > '0')
																		  {
																			  $("#mystate").css("display", "block");
																	    	          $("#nostate").css("display", "none");
																		  }
																	      
																	    };
																	    $scope.updateState = function(){
																	        $scope.availableCities = [];
																	        
																	        angular.forEach($scope.cities, function(value){
																	          if(value.stateId == $scope.state.id){
																	            $scope.availableCities.push(value);
																	          }       
																	          
																	        });
																	      };
																		
																		//
																	 $scope.convertToDate = function (stringDate){
																		    var dateOut = new Date(stringDate);
																		    dateOut.setDate(dateOut.getDate());
																		    return dateOut;
																		  };
																		  $scope.submitSearch	 = function(id) {
																			
																			  if(id.stayCity  === undefined ){
																			  
																			    $scope.froCity=id.OriginAirport.CityName+"("+id.OriginAirport.AirportCode+"), "+id.OriginAirport.AirportName+", "+id.OriginAirport.Country;
																		        $scope.toCity=id.DestinationAirport.CityName+"("+id.DestinationAirport.AirportCode+"), "+id.DestinationAirport.AirportName+", "+id.DestinationAirport.Country;
																		        $scope.departDate=id.TravelDate;
																		        $scope.returnDate=id.ReturnDate;
																		        $scope.airlines="All";
																		        $scope.FlexibleSearch="false";
																		       // alert("aaa"+id.TravelDate);
																		        $scope.showSomething = function(input) {
																		            return input == "true" ? "2" : "1";
																		        };
																		       $scope.tripType= $scope.showSomething(id.SearchReturnFlight);
																		      
																		       if(id.SearchReturnFlight == "true"){
																		      // angular.element(document.getElementById('returnDate'))[0].disabled = false;
																		       }else{
																		    //	   angular.element(document.getElementById('returnDate'))[0].disabled = true;
																		       }
																		       
																		        $scope.cabinClass=id.CabinType;
																		        
																		        $scope.adult=String(id.Adults);
																		        $scope.child=String(id.Children);
																		        $scope.infant=String(id.Infants);
																		        $scope.infantWs=String(id.InfantWs);
																		      //  alert(id.OriginAirport.CityName);
																		        $scope.filterTextTimeout;
																		        if ($scope.filterTextTimeout) $timeout.cancel($scope.filterTextTimeout);

																		       
																		        $scope.filterTextTimeout = $timeout(function() {
																		        	submitForm();
																		        }, 250); // delay 250 ms
																			  }else{
																				  
																				  
																				    $scope.stayCity=id.stayCity;
																			        $scope.checkInDate=id.checkInDate;
																			        $scope.checkOutDate=id.checkOutDate;
																			        
																			        $scope.rooms="1";
																			        $scope.rooms0adult="1";
																			        $scope.rooms0child="0";
																			        
																			        
																			       $scope.filterTextTimeout;
																			        if ($scope.filterTextTimeout) $timeout.cancel($scope.filterTextTimeout);

																			       
																			        $scope.filterTextTimeout = $timeout(function() {
																			        	submitHotelForm();
																			        }, 250); 
																			  }
																		        
																		        
																		  }
																		 
																		  
																		  $scope.signup = function(){
																			 
																				if($scope.email == null){
																					return null;
																				}
																				// Set form values & construct data to send
																				console.log($scope.email);
																		var post_data = {  //prepare payload for request
																			'emailId':$scope.email //send g-captcah-reponse to our server
																		}
																		
																		/* Make Ajax request to our server with g-captcha-string */
																		$http.post('/farealert/signup',post_data).success(function(response){
																			//console.log(response);
																			alert("Successfully signed up for Newsletter");
																			/*if(response == "Fare Alert Registered"){
																				alert("Successfully verified and signed up the user");
																			}else{
																				alert("User verification failed");
																			}*/
																		})
																		.error(function(error){
																		
																		})
																		
																	
																}
																		  
																		  $scope.PostDealss	 = function(city) {		
																	$http.get('/PostDeals/'+city).success(function(response){
																		//console.log(response);
																		  $scope.dealList=response;
																		if(localStorageService.get("lkhistory") != null){
																             $scope.sessQueryList=localStorageService.get("lkhistory");
																        
																		
																		   angular.forEach($scope.sessQueryList, function(tech) {
																			   var res=JSON.parse(tech);
																			 //  console.log(res.CabinType);
																			   if(res.stayCity  === undefined ){
																			   if (res.CabinType === undefined) {
																				  // console.log("tech 2"+tech);
																			   }else{
																				 //  console.log("tech"+tech);
																				   $scope.searchQueryList.push(JSON.parse(tech));
																			   }}else{
																				//   console.log("hotel:"+tech);
																				   $scope.searchQueryList.push(JSON.parse(tech));
																			   }
																		       });
																	        console.log($scope.searchQueryList);	  
																		//
																	        $scope.newarrs = [];
																	        $scope.newarr = [];
																	        $scope.unique = {};
																	        
																	        angular.forEach($scope.searchQueryList, function(item) {
																	        	
																	        	 if(item.stayCity  === undefined ){
																	        	if(item.SearchReturnFlight == "true"){
																	            if (! $scope.unique[item.TripType+item.OriginAirport.AirportCode+item.DestinationAirport.AirportCode+item.TravelDate+item.ReturnDate]) {
																	            	 $scope.newarrs.push(item);
																	            	 $scope.unique[item.TripType+item.OriginAirport.AirportCode+item.DestinationAirport.AirportCode+item.TravelDate+item.ReturnDate] = item;
																	            }
																	        	}else{
																	        		 if (! $scope.unique[item.TripType+item.OriginAirport.AirportCode+item.DestinationAirport.AirportCode+item.TravelDate]) {
																		            	 $scope.newarrs.push(item);
																		            	 $scope.unique[item.TripType+item.OriginAirport.AirportCode+item.DestinationAirport.AirportCode+item.TravelDate] = item;
																		            }
																	        	}
																	        	 }else{
																	        		 if (! $scope.unique[item.stayCity+item.checkInDate+item.checkOutDate]) {
																		            	 $scope.newarrs.push(item);
																		            	 $scope.unique[item.stayCity+item.checkInDate+item.checkOutDate] = item;
																		            }
																	        		 
																	        	 }
																	        	
																	        });
																	        $scope.hotelItem=[];
																	        $scope.currentItem=[];
																	        $scope.lastItem=[];
																	      //  $scope.listDeal = [];
																	     //   console.log($scope.newarrs.length);	
																	        if($scope.newarrs.length>=4){
																	         $scope.newarr = $scope.newarrs.slice(-3);
																	        }else{
																	         $scope.newarr = $scope.newarrs;
																	        }
																	        console.log($scope.newarr);	
																	     //   console.log("length:"+$scope.newarr.length);
																	        var index=$scope.newarr.length;
																	        
																	       
																	       // for(i=0;i<$scope.newarr.length; i++){
																	        	 angular.forEach($scope.newarr, function(item) {
																	        	//console.log($scope.lastItem);
																		       // console.log($scope.hotelItem);
																		      //  console.log("fL:"+$scope.lastItem.length);
																		      //  console.log("index inside"+index);
																	        if($scope.lastItem.length == 0){
																	        	// console.log("Fli inside");
																	        	 $scope.currentItem = item;
																	        	// console.log($scope.currentItem);
																	        	  if($scope.currentItem.CabinType === undefined){
																	        		  
																	        	  }else{
																	        		  $scope.lastItem = item;
																	        	  }
																	        	
																	        }	
																	        if($scope.hotelItem.length == 0){
																	        	
																	        	 $scope.currentItem = item;
																	        	  if($scope.currentItem.stayCity === undefined){
																	        		  
																	        	  }else{
																	        		  $scope.hotelItem = item;
																	        	  }
																	        }
																	        index=index-1;
																	      
																	        });
															                
																	     //   console.log("Flight:"+$scope.lastItem);
																	    //    console.log("Hotel:"+$scope.hotelItem);
																	       
																	        if($scope.hotelItem.length != 0){
																	        $scope.stayCity=$scope.hotelItem.stayCity;
																	        $scope.checkInDate=$scope.hotelItem.checkInDate;
																	        $scope.checkOutDate=$scope.hotelItem.checkOutDate;
																	        $scope.rooms="1";
																	        $scope.rooms0adult="1";
																	        $scope.rooms0child="0";
																	        var  minDate = new Date($scope.checkInDate);
																			   var  returnsDate = new Date($scope.checkOutDate);
																			   var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
																							"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
																							];
																			   var weekday=new Array(7);
																				weekday[1]="MON";
																				weekday[2]="TUE";
																				weekday[3]="WED";
																				weekday[4]="THU";
																				weekday[5]="FRI";
																				weekday[6]="SAT";
																				weekday[0]="SUN";
																	    
															                  day  = minDate.getDate(),  
															     	           month = monthNames[minDate.getMonth()];
																	           var days=weekday[minDate.getUTCDay()];
															       
															                  var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
																		           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
															                 $("#checkInDateDiv").html(divText);
															        

															        
																	           day  = returnsDate.getDate(),  
																	      	   month = monthNames[returnsDate.getMonth()];
																			   var days=weekday[returnsDate.getUTCDay()];
																			     
																	           var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
																				           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
																	         
																	           $("#checkOutDateDiv").html(divsText);
																	           
																	           
																	        }else{
																	        	 var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
																									"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
																									];
																	        	 var weekday=new Array(7);
																		   			weekday[1]="MON";
																		   			weekday[2]="TUE";
																		   			weekday[3]="WED";
																		   			weekday[4]="THU";
																		   			weekday[5]="FRI";
																		   			weekday[6]="SAT";
																		   			weekday[0]="SUN";
																	        	   var ch = 2;    
																		            checkInDate = new Date();
																		           checkInDate.setDate(checkInDate.getDate() + ch); 
																		           checkday  = checkInDate.getDate(),  
																		                      
																		         	month = monthNames[checkInDate.getMonth()];
																		 		     days=weekday[checkInDate.getUTCDay()];
																		 		    
																		             var divcheckInText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+checkday+"</div>"+
																					           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
																		            
																		           
																		             $("#checkInDateDiv").html(divcheckInText);
																		    	   
																		             
																		             var xs = 7; 
																				        returnsDate = new Date();
																				        returnsDate.setDate(returnsDate.getDate() + xs);
																				               
																				                 day  = returnsDate.getDate(),  
																				            	month = monthNames[returnsDate.getMonth()];
																				    		    var days=weekday[returnsDate.getUTCDay()];
																				    		    
																				    		     
																				             var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
																				   			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
																				               
																				                $("#checkOutDateDiv").html(divsText);
																				                
																				                
																		             var checkInDate_from = $.datepicker.formatDate('yy-mm-dd', checkInDate);
																		             var dt_from = $.datepicker.formatDate('yy-mm-dd', returnsDate);
																		             $scope.checkInDate=checkInDate_from;
																				     $scope.checkOutDate=dt_from;
																		              
																		            		    	   
																		    	   $scope.rooms="1";
																			        $scope.rooms0adult="1";
																			        $scope.rooms0child="0";
																	        }
																	        
																	        
																	        
																	        
																	       if($scope.lastItem.length != 0){ 
																	        
																	     //  console.log($scope.lastItem.Adults);
																	    //    $scope.froCity=$scope.lastItem.OriginAirport.CityName+"("+$scope.lastItem.OriginAirport.AirportCode+"), "+$scope.lastItem.OriginAirport.AirportName+", "+$scope.lastItem.OriginAirport.Country;
																	    //    $scope.toCity=$scope.lastItem.DestinationAirport.CityName+"("+$scope.lastItem.DestinationAirport.AirportCode+"), "+$scope.lastItem.DestinationAirport.AirportName+", "+$scope.lastItem.DestinationAirport.Country;
																	       // $scope.departDate=$scope.lastItem.TravelDate;
																	        var  TravelDate = new Date();
																	        $scope.departDate=$.datepicker.formatDate('yy-mm-dd', new Date());
																	        $scope.airlines="All";
																	        $scope.FlexibleSearch="false";
																	        $scope.showSomething = function(input) {
																	            return input == "true" ? "2" : "1";
																	        };
																	       $scope.tripType= "2";//$scope.showSomething($scope.lastItem.SearchReturnFlight);
																	      
																	       if($scope.lastItem.SearchReturnFlight == "true"){
																	     //  angular.element(document.getElementById('returnDate'))[0].disabled = false;
																	       }else{
																	    //	   angular.element(document.getElementById('returnDate'))[0].disabled = true;
																	       }
																	       
																	       //console.log("tripType:"+$scope.tripType);
																	       if ($scope.tripType == "2") {
																	    	   
																	    	             $scope.returnDate=$scope.lastItem.ReturnDate;
																					     $("#journey").removeClass("fa fa-plus-circle");
																					      $("#journey").addClass("fa fa-times-circle");
																					      
																					     $("#returnDateDiv").fadeTo("slow", 1.00);
																					      $("#returnDateDivs").fadeTo("slow", 1.00);
																						
																						
																						   var src = "/resources/images/return-errow1.png";
																	                     $("#tripImage").attr("src", src);
																	                     
																	                     var  minDate = new Date($scope.departDate);
																	  				   var  returnsDate = new Date($scope.returnDate);
																	  				   var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
																	  								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
																	  								];
																	  				   var weekday=new Array(7);
																	  					weekday[1]="MON";
																	  					weekday[2]="TUE";
																	  					weekday[3]="WED";
																	  					weekday[4]="THU";
																	  					weekday[5]="FRI";
																	  					weekday[6]="SAT";
																	  					weekday[0]="SUN";
																	  		    
																	                     day  = minDate.getDate(),  
																	        	           month = monthNames[minDate.getMonth()];
																	  		           var days=weekday[minDate.getUTCDay()];
																	          
																	                     var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
																	  			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
																	                    $("#departDateDiv").html(divText);
																	           

																	           
																	  		           day  = returnsDate.getDate(),  
																	  		      	   month = monthNames[returnsDate.getMonth()];
																	  				   var days=weekday[returnsDate.getUTCDay()];
																	  				     
																	  		           var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
																	  					           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
																	  		         
																	  		           $("#returnDateDiv").html(divsText);
																					}
																					else if ($scope.tripType == "1") {
																									   
																					     
																					      $("#returnDateDiv").fadeTo("slow", 0.15);
																					       $("#returnDateDivs").fadeTo("slow", 0.15);
																					      $("#journey").removeClass("fa fa-times-circle");
																					     $("#journey").addClass("fa fa-plus-circle");
																					   //  tripImage
																					   var src =  "/resources/images/oneway-errow.png";
																	                    $("#tripImage").attr("src", src);
																						
																	                    
																	                    var  minDate = new Date($scope.departDate);
																		  				
																		  				   var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
																		  								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
																		  								];
																		  				   var weekday=new Array(7);
																		  					weekday[1]="MON";
																		  					weekday[2]="TUE";
																		  					weekday[3]="WED";
																		  					weekday[4]="THU";
																		  					weekday[5]="FRI";
																		  					weekday[6]="SAT";
																		  					weekday[0]="SUN";
																		  		    
																		                     day  = minDate.getDate(),  
																		        	           month = monthNames[minDate.getMonth()];
																		  		           var days=weekday[minDate.getUTCDay()];
																		          
																		                     var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
																		  			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
																		                    $("#departDateDiv").html(divText);
																		           
																		                    $scope.tripType= "1";  
																		                    angular.element(document.getElementById('tripType'))[0].value = "1";
																					}
																	       
																	      
																	       
																	       
																	        $scope.cabinClass=$scope.lastItem.CabinType;
																	        
																	        $scope.adult=String($scope.lastItem.Adults);
																	        $scope.child=String($scope.lastItem.Children);
																	        $scope.infant=String($scope.lastItem.Infants);
																	        $scope.infantWs=String($scope.lastItem.InfantWs);
																		}else{
																			  $scope.tripType= "2";
																			     angular.element(document.getElementById('tripType'))[0].value = "2";
																			     //angular.element(document.getElementById('returnDate'))[0].disabled = false;
																			     
																			     $scope.airlines="All";
																			     $scope.FlexibleSearch="false";
																			     $("#journey").removeClass("fa fa-plus-circle");
																			      $("#journey").addClass("fa fa-times-circle");
																			      
																			     $("#returnDateDiv").fadeTo("slow", 1.00);
																			      $("#returnDateDivs").fadeTo("slow", 1.00);
																				
																				   var src = "/resources/images/return-errow1.png";
															                 $("#tripImage").attr("src", src);
															               
															               
																		        $scope.cabinClass="Economy";
																		        
																		        $scope.adult="1";
																		        $scope.child="0";
																		        $scope.infant="0";
																		        $scope.infantWs="0";
																		        
																		        var mx = 1; 
																		        var minDate = new Date();
																		        minDate.setDate(minDate.getDate() + mx);
																		        var x = 12; 
																		        var  maxDate = new Date();
																		         maxDate.setMonth(maxDate.getMonth() + x);
																		        
																		        var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
																		     								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
																		   								];
																		        var weekday=new Array(7);
																		   			weekday[1]="MON";
																		   			weekday[2]="TUE";
																		   			weekday[3]="WED";
																		   			weekday[4]="THU";
																		   			weekday[5]="FRI";
																		   			weekday[6]="SAT";
																		   			weekday[0]="SUN";
																		        
																		        
																		   			var   day  = minDate.getDate();  
																		   			var	month = monthNames[minDate.getMonth()];
																		    		    var days=weekday[minDate.getUTCDay()];
																		              
																		                var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
																		   			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
																		               
																		              
																		                 
																		                 
																		               $("#departDateDiv").html(divText);
																		              
																		               
																		               var xs = 7; 
																		        returnsDate = new Date();
																		        returnsDate.setDate(returnsDate.getDate() + xs);
																		               
																		                 day  = returnsDate.getDate(),  
																		            	month = monthNames[returnsDate.getMonth()];
																		    		    var days=weekday[returnsDate.getUTCDay()];
																		    		    
																		    		     
																		             var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
																		   			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
																		               
																		               $("#returnDateDiv").html(divsText);
																		                $("#checkOutDateDiv").html(divsText);
																		                 
																		   			  var dt_to = $.datepicker.formatDate('yy-mm-dd', new Date());
																		   			  var dt_from = $.datepicker.formatDate('yy-mm-dd', returnsDate);
																		   			 
																		   		   $scope.departDate=dt_to;
																		    	   $scope.returnDate=dt_from;
																		    	   
																		    	   
																		}
																	       // console.log($scope.adult, typeof $scope.adult);
																		}else{
																			     $scope.tripType= "2";
																			     angular.element(document.getElementById('tripType'))[0].value = "2";
																			     //angular.element(document.getElementById('returnDate'))[0].disabled = false;
																			     
																			     $scope.airlines="All";
																			     $scope.FlexibleSearch="false";
																			     $("#journey").removeClass("fa fa-plus-circle");
																			      $("#journey").addClass("fa fa-times-circle");
																			      
																			     $("#returnDateDiv").fadeTo("slow", 1.00);
																			      $("#returnDateDivs").fadeTo("slow", 1.00);
																				
																				   var src = "/resources/images/return-errow1.png";
															                    $("#tripImage").attr("src", src);
															                  
															                  
																		        $scope.cabinClass="Economy";
																		        
																		        $scope.adult="1";
																		        $scope.child="0";
																		        $scope.infant="0";
																		        $scope.infantWs="0";
																		        
																		        var mx = 1; 
																		        var minDate = new Date();
																		        minDate.setDate(minDate.getDate() + mx);
																		        var x = 12; 
																		        var  maxDate = new Date();
																		         maxDate.setMonth(maxDate.getMonth() + x);
																		        
																		        var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
																		     								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
																		   								];
																		        var weekday=new Array(7);
																		   			weekday[1]="MON";
																		   			weekday[2]="TUE";
																		   			weekday[3]="WED";
																		   			weekday[4]="THU";
																		   			weekday[5]="FRI";
																		   			weekday[6]="SAT";
																		   			weekday[0]="SUN";
																		        
																		        
																		   			var   day  = minDate.getDate();  
																		   			var	month = monthNames[minDate.getMonth()];
																		    		    var days=weekday[minDate.getUTCDay()];
																		              
																		                var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
																		   			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
																		               
																		              
																		                 
																		                 
																		               $("#departDateDiv").html(divText);
																		              
																		               
																		               var xs = 7; 
																		               returnsDate = new Date();
																		               returnsDate.setDate(returnsDate.getDate() + xs);
																		               
																		                 day  = returnsDate.getDate(),  
																		            	month = monthNames[returnsDate.getMonth()];
																		    		    var days=weekday[returnsDate.getUTCDay()];
																		    		    
																		    		     
																		             var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
																		   			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
																		               
																		               $("#returnDateDiv").html(divsText);
																		                $("#checkOutDateDiv").html(divsText);
																		                 
																		   			  var dt_to = $.datepicker.formatDate('yy-mm-dd', new Date());
																		   			  var dt_from = $.datepicker.formatDate('yy-mm-dd', returnsDate);
																		   			 
																		   		   $scope.departDate=dt_to;
																		    	   $scope.returnDate=dt_from;
																		    	   
																		    	   
																		    	   /**Hotel Setting***/
																		    	   
																		    	    var ch = 2;    
																		            checkInDate = new Date();
																		           checkInDate.setDate(checkInDate.getDate() + ch); 
																		                      checkday  = checkInDate.getDate(),  
																		                      
																		         	month = monthNames[checkInDate.getMonth()];
																		 		     days=weekday[checkInDate.getUTCDay()];
																		 		    
																		             var divcheckInText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+checkday+"</div>"+
																					           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
																		            
																		           
																		             $("#checkInDateDiv").html(divcheckInText);
																		    	   
																		             var checkInDate_from = $.datepicker.formatDate('yy-mm-dd', checkInDate);
																					  
																		             $scope.checkInDate=checkInDate_from;
																				        $scope.checkOutDate=dt_from;
																		              
																		            		    	   
																		    	   $scope.rooms="1";
																			        $scope.rooms0adult="1";
																			        $scope.rooms0child="0";
																		                
																		}
																	      		        
																	  
																	  //  console.log($scope.newarr.length);
																	    if($scope.newarr.length==1){
																	    	 var placeholder2 = document.getElementById('searchPadList'); //working
																	           placeholder2.innerHTML = "<b class='history-show'>1</b>"; 
																	    }else  if($scope.newarr.length==2){
																	    	 var placeholder2 = document.getElementById('searchPadList'); //working
																	           placeholder2.innerHTML = "<b class='history-show'>2</b>"; 
																	    }else  if($scope.newarr.length > 2){
																	    	 var placeholder2 = document.getElementById('searchPadList'); //working
																	           placeholder2.innerHTML = "<b class='history-show'>3</b>"; 
																	    }
																	   
																	    
																	  
																		
																	})
																	.error(function(error){
																	
																	})
																		  }
																	
																}]);
																    //end first controller
																
																/*myapp.controller('dealCtrl1',['$http','$window','$scope', function($http,$window,$scope)
															  {
																	var vm = this;
																	$scope.showLogin=true;
																	$scope.logindialog = false;
																
																	
																	
																$scope.login= function(){
																	  //alert("1234");
																	  $scope.logindialog = true;
																	  
																	  $scope.showLogin=false;	
																  };
																
																
																 $scope.logindialogOpen= function(){
																	  //alert("1234");
																	  $scope.logindialog = true;
																  };
																
																  $scope.logindialogClose= function(){
																	  //alert("1234");
																	  $scope.logindialog = false;
																	  $('#login').modal('hide');
																  };
																  
																  
																  //forget
																  $scope.forget = function(){
																	 
																	  $scope.logindialog = false;
																	  
																	  $('#login').modal('hide');
																  };
																  
																  //end
																  
																  //social 
																  $scope.shareOnFacebook = function() {
																	  //alert("facebook");
																		$window.location.replace("/social/facebook/signin");
																		
																			//$window.post('/social/facebook/signin');
																		
																	};
																	$scope.shareOnTwitter = function() {
																		alert("twitter");
																		$window.location.replace("/social/twitter/signin");
																		//$window.post('/social/twitter/signin');
																	};
																  //end
																  
																  //signup
																  $scope.signin = function(){
																	  
																	  //alert("Sign in form");
																		
																		 vcRecaptchaService.getResponse() gives you the g-captcha-response 
																	      
																		// Set form values & construct data to send
																	  
																			var post_data = {  //prepare payload for request
																			
																				'email':$scope.email,
																				'password':$scope.password,
																				
																			}
																			
																			
																			 Make Ajax request to our server with g-captcha-string 
																			$http.post('/userLogin',post_data).success(function(response){
																				//console.log(response);
																				vm.name="";
																				vm.email="";
																				vm.message="";
																				//alert("afterlogin response");
																				
																				if(response == "success"){
																					
																					var placeholder2 = document.getElementById('errorMessage'); //working
																			           placeholder2.innerHTML = "Successfully verified and signed up the user"; 
																			           $scope.logindialog = false;
																			           $scope.showLogin=false;
																			           //alert("after success response");
																			         $('#login').modal('hide');
																				}else{
																					
																					 var placeholder2 = document.getElementById('errorMessage'); //working
																			           placeholder2.innerHTML = "User verification failed"; 
																				}
																			})
																			.error(function(error){
																			
																			})
																			
																		
																	};
																  //end
																 
																
															  	}]).directive('logindialog', function () {
																      return {
																          restrict: 'E',
																          replace:false,
																          link: function (scope, element, attr) {
																                scope.$watch('logindialog', function (val) {
																                    if (val)
																                        $(element).show();
																                    else
																                        $(element).hide();
																                });
																          }
																        }
																    });  */  
																    



															//end fuction
															})();




