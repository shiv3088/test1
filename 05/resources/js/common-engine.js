   
$(document).ready(function() {	

		var id = '#dialog';
	
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		
	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
	
		//transition effect
		
		function openColorBox(){
			//transition effect		
		$('#mask').fadeIn(1000);	
		$('#mask').fadeTo("slow",0.8);	
       $(id).fadeIn(2000); 
      }
      
      function countDown(){
        seconds--;
        $("#seconds").text(seconds);
        if (seconds === 0){
          openColorBox();
          clearInterval(i);
        }
      }

      var seconds = 300;
        //  i = setInterval(countDown, 1000);	
	
	//if close button is clicked
	$('.window .caros').click(function (e){
		//Cancel the link behavior
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
	});		
	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});		
	
	

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
	     var  row_index=cust_indexs-room_form_index;
	      if(row_index>0){
	      for (i = 1; i <= row_index; i++) {
	       var cust_index=room_form_index+(i-1);
	        $('#childAge'+(Number(cust_index)-1)).after($("#cust").clone().attr("id","cust" + cust_index));
	          $("#cust" + cust_index).css("display","inline");
	    
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
	      for (i = 1; i <= row_index; i++) {
	     
	      
	     
	      room_form_index=room_form_index-1;
	     $("#cust" + room_form_index).remove();
	     $("#childAge" + room_form_index).remove();
	     
	     
	     }
	     } 
	      
	  var room=$("#rooms").val();

	  var adult = $('#roomsadults option:selected').val();
      var child=$("#rooms0child :selected").text();
		   
		   if($('#rooms1adults').length && $('#rooms1adults').val().length){
		   
		     var adult1=  $("#rooms1adults").val();
		     var child1=  $("#rooms1child").val();
		      adult=parseInt(adult)+parseInt(adult1);
		      child=parseInt(child)+parseInt(child1);
		   }
		   
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
   $("#checkInDateDiv").click(function() {
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
                          $('#checkOutDate').datepicker('show'); 
                    }
                }
                else {
                    $('#checkOutDate').val($.datepicker.formatDate('yy-mm-dd', new Date(dMin)));
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
            var days=weekday[dateRetMin.getUTCDay()];
            
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
            
            var days=weekday[dateDepMin.getUTCDay()];
            
            
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
                        $('#returnDate').val($.datepicker.formatDate('yy-mm-dd', new Date(dMin)));
                         $('#returnDate').datepicker('show'); 
                    }
                }
                else {
                    $('#returnDate').val($.datepicker.formatDate('yy-mm-dd', new Date(dMin)));
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
            var days=weekday[dateRetMin.getUTCDay()];
            
            
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
                      day  = checkInDate.getDate(),  
         	month = monthNames[checkInDate.getMonth()];
 		     days=weekday[checkInDate.getUTCDay()];
             var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
            
           
             $("#checkInDateDiv").html(divText);
            
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
        if(val3 > val1){
         $("div#error").html("<p>&raquo; Infant less than or equal to adult.</p>");
        }else{
        
        }
        if(total > 9){
          $("div#error").html("<p>&raquo; Total number of Passenger should be less than or equal to 9 only.</p>");
        }else{
        
        if(total == 1){
         $("#travelss").val("1 Adult");
        }else{
         $("#travelss").val(total+" Travelers");
        }
        }
    }
  );


     numMonth = 1;
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
				if ($('#tripType').val() == "1") {
				    $('#tripType').val(2);
				     $("#journey").removeClass("fa fa-plus-circle");
				      $("#journey").addClass("fa fa-times-circle");
				      
				     $("#returnDateDiv").fadeTo("slow", 1.00);
				      $("#returnDateDivs").fadeTo("slow", 1.00);
					
					
					   var src = "/resources/images/return-errow1.png";
                     $("#tripImage").attr("src", src);
                     
                     
                     var dateDepMin = $('#departDate').datepicker("getDate");
                     $("#returnDate").datepicker("change", { minDate: new Date(dateDepMin) }); 
                     
                      var xs = 7; 
				     returnsDate = new Date();
				     returnsDate.setDate(dateDepMin.getDate() + xs);
				            
		              day  = returnsDate.getDate(),  
		         	month = monthNames[returnsDate.getMonth()];
		 		    var days=weekday[returnsDate.getUTCDay()];
		 		    
 		     
        			  var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
            
            $("#returnDateDiv").html(divsText);
       
			  var dt_from = $.datepicker.formatDate('yy-mm-dd', returnsDate);
            
              $("#returnDate").val(dt_from);
              document.getElementById("returnDate").value=dt_from;
                     
				}
				else if ($('#tripType').val() == "2") {
				    $('#tripType').val(1);
				   
				     
				      $("#returnDateDiv").fadeTo("slow", 0.15);
				       $("#returnDateDivs").fadeTo("slow", 0.15);
				      $("#journey").removeClass("fa fa-times-circle");
				     $("#journey").addClass("fa fa-plus-circle");
				   var src =  "/resources/images/oneway-errow.png";
                    $("#tripImage").attr("src", src);
				}else{
				 $('#tripType').val(2);
				}
				
			}

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
 

  if(validatorHotel.form()){ // validation perform

  var rndId = randomString(12);
  $('form#searchHotel').attr({action: '/hotelSearch/id/'+rndId});   
  $('form#searchHotel').submit();
  
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
      
      function addAge(kk){
	    var childNo = kk.value;
	  var str2 = kk.id.replace ( /[^\d.]/g, '' ); 
      var room = parseInt(str2);
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
	
	     var child=$("#rooms0child :selected").text();

	 
	  if($('#rooms1adults').length && $('#rooms1adults').val().length){
	   
	     var adult1=  $("#rooms1adults").val();
	     var child1=  $("#rooms1child").val();
	      adult=parseInt(adult)+parseInt(adult1);
	      child=parseInt(child)+parseInt(child1);
	   }
	   
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
	   var room=$("#rooms").val();
       var adult = $('#roomsadults option:selected').val();
       var child=$("#rooms0child :selected").text();
	   
	   if($('#rooms1adults').length && $('#rooms1adults').val().length){
	   
	     var adult1=  $("#rooms1adults").val();
	     var child1=  $("#rooms1child").val();
	      adult=parseInt(adult)+parseInt(adult1);
	      child=parseInt(child)+parseInt(child1);
	   }
	   
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
	   
   
	$(document).ready(function(){/*
		$("#guest").click(function(){
			alert('sfsf');
			$(".guests").toggle();
		});
		$("#h_close-div").click(function(){
			$(".guests").hide();
		});
		
		  var room_form_index=1;
		  var age_form_index=0;
		    $("#rooms").change(function(){
		     var cust_indexs = this.value;
		     var  row_index=cust_indexs-room_form_index;
		      if(row_index>0){
		      for (i = 1; i <= row_index; i++) {
		       var cust_index=room_form_index+(i-1);
		        $('#childAge'+(Number(cust_index)-1)).after($("#cust").clone().attr("id","cust" + cust_index));
		          $("#cust" + cust_index).css("display","inline");
		    
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
		      for (i = 1; i <= row_index; i++) {
		     
		      
		     
		      room_form_index=room_form_index-1;
		     $("#cust" + room_form_index).remove();
		     $("#childAge" + room_form_index).remove();
		     
		     
		     }
		     } 
		      
		  var room=$("#rooms").val();
   
		  var adult = $('#roomsadults option:selected').val();
          var child=$("#rooms0child :selected").text();
			   
			   if($('#rooms1adults').length && $('#rooms1adults').val().length){
			   
			     var adult1=  $("#rooms1adults").val();
			     var child1=  $("#rooms1child").val();
			      adult=parseInt(adult)+parseInt(adult1);
			      child=parseInt(child)+parseInt(child1);
			   }
			   
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
									    
		
	*/});
															
															