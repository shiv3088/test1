    
var numberOfMonthValue;
$(window).resize(function () {

    if ($(window).width() < 768) {
        numberOfMonthValue = 1;
        $("#departDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
        $("#returnDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
    } else {
        numberOfMonthValue = 2;
        $("#departDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
        $("#returnDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
    }
}).trigger('resize');


function split(t) {
    return t.split(/,\s*/);
}

function extractLast(t) 
{
    return split(t).pop();
}


$(document).ready(function() {
        
	$("#guestform").click(function(){
		$(".guests").toggle();
	});
	
	$('.confirm_room').click(function(){
		$('.guests').slideUp();		
		});	
	
	localStorage.removeItem('ls.couponsPopup');
        $('body').click(function() {           
     $('#personOuter').removeClass('open');
    });

    $('.dropdown-menu').click(function(event){
     event.stopPropagation();
    });
	
	 $("input").click(function() {
	      if (!$(this).attr("data-selected-all")) {
	        try {
	          $(this).selectionStart = 0;
	          $(this).selectionEnd = $(this).value.length + 1;
	          //add atribute allowing normal selecting post focus
	          $(this).attr("data-selected-all", true);
	        } catch (err) {
	          $(this).select();
	          //add atribute allowing normal selecting post focus
	          $(this).attr("data-selected-all", true);
	        }
	      }
	    });
	 
	 $("input").blur(function() {
	      if ($(this).attr("data-selected-all")) {
	        $(this).removeAttr("data-selected-all");
	      }
	    });
	 
	 	 // CLEARABLE INPUT
	 function tog(v){return v?'addClass':'removeClass';} 
	 $(document).on('input', '.input_cont', function(){
	  $(this)[tog(this.value)]('x');
	 }).on('mousemove', '.x', function( e ){
	  
	  $(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');
	 }).on('touchstart click', '.onX', function( ev ){
	  ev.preventDefault();
	  $(this).removeClass('x onX').val('').change();
	 });
	//

	$('.mobile_menu').click(function(){
	$('.about-menuBox ul').toggleClass('open')
	$(this).toggleClass('menu-close')
	$('.main').toggleClass('push')
	});
	
    var t = !0, e = !0;
    $("#froCity").autocomplete({
        source:function(t, e) {
            $.getJSON("/get_city_list", {
                term:extractLast(t.term),
                type:"flight"
            }, e);
        },
        search:function() {
            var t = extractLast(this.value);
            return t.length < 1 ? !1 :void 0;
        },
        focus:function() {
           // return !1;
        },
        select:function(e, i) {
            var r = split(this.value);
            return r.pop(), r.push(i.item.value), this.value = r, t = !1, $(" ").focus(), 
            !1;
        }
    }).blur(function() {
        t && -1 == $("#froCity").val().indexOf(",") && $("#froCity").val($("ul#ui-id-1 li:first a").text());
    }), $("#toCity").autocomplete({
        source:function(t, e) {
            $.getJSON("/get_city_list", {
                term:extractLast(t.term),
                type:"flight"
            }, e);
        },
        search:function() {
            var t = extractLast(this.value);
            return t.length < 1 ? !1 :void 0;
        },
        focus:function() {
           // return !1;
        },
        select:function(t, i) {
            var r = split(this.value);
            r.pop(), r.push(i.item.value);
            var u = i.item.value, n = u.indexOf("(");
            $("#departDate").datepicker("show");
          //  return u.indexOf(")"), u = u.substring(0, n), imgExists("/resources/images/banner/" + u.replace(" ", "").toLowerCase() + ".jpg") && $("#background").animate(), this.value = r, e = !1,  !1;
        }
    }).blur(function() {
		
        if (e) {
          t &&  -1 == $("#toCity").val().indexOf(",") && $("#toCity").val($("ul#ui-id-2 li:first a").text());
		    var t = $("ul#ui-id-2 li:first a").text(), i = t.indexOf("("), r = t.indexOf(")");
		    t = t.substring(i + 1, r);
        }
    });
    var i = !0, r = !0;
    $("#returnFroCity").autocomplete({
        source:function(t, e) {
            $.getJSON("/get_city_list", {
                term:extractLast(t.term),
                type:"flight"
            }, e);
        },
        search:function() {
            var t = extractLast(this.value);
            return t.length < 1 ? !1 :void 0;
        },
        focus:function() {
           // return !1;
        },
        select:function(t, e) {
            var r = split(this.value);
            return r.pop(), r.push(e.item.value), this.value = r, i = !1, !1;
        }
    }).blur(function() {
        i && $("#returnFroCity").val($("ul#ui-id-1 li:first a").text());
    }), $("#returnToCity").autocomplete({
        source:function(t, e) {
            $.getJSON("/get_city_list", {
                term:extractLast(t.term),
                type:"flight"
            }, e);
        },
        search:function() {
            var t = extractLast(this.value);
            return t.length < 1 ? !1 :void 0;
        },
        focus:function() {
           // return !1;
        },
        select:function(t, e) {
            var i = split(this.value);
            i.pop(), i.push(e.item.value);
            var u = e.item.value, n = u.indexOf("(");
            return u.indexOf(")"), u = u.substring(0, n), r = !1, this.value = i, !1;
        }
    }).blur(function() {
        if (r) {
            $("#returnToCity").val($("ul#ui-id-2 li:first a").text());
            var t = $("ul#ui-id-2 li:first a").text(), e = t.indexOf("("), i = t.indexOf(")");
            t = t.substring(e + 1, i);
        }
    }),$("#stayCity").autocomplete({
        source: function(request, response) {
            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "hotel"
            }, response)
        },
        change: function(event, ui) {
            if (!ui.item) {
            	$("#stayCity").val("");
            }
        },
        search: function() {
            var term = extractLast(this.value);
            
            if (term.length < 3) {
               // return !1
            }
        },
        focus: function(event, ui) {
            var terms = split(this.value);
        
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            
            //alert("Value : "+cityImage);            
            
            var hl=cityImage.split('</i>')[0]+'</i>';
            var h=cityImage.split('</i>')[1];
            var hdn=h.split("<span style='display: none;'>")[0];
            var hid=(h.split("<span style='display: none;'>")[1]).split("</span>")[0];
       
            $('#locationid').val(hid);
            
           // alert("hid "+hid);
            
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            selectTo = !1;
            this.value = hdn;            
            //alert("this.value : "+this.value);
            return !1
        },
        select: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            
            //alert("Value : "+cityImage);            
            
            var hl=cityImage.split('</i>')[0]+'</i>';
            var h=cityImage.split('</i>')[1];
            var hdn=h.split("<span style='display: none;'>")[0];
            var hid=(h.split("<span style='display: none;'>")[1]).split("</span>")[0];
            
            $('#locationid').val(hid);
            
           // alert("hid "+hid);
            
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            selectTo = !1;
            this.value = hdn;            
            //alert("this.value : "+this.value);
            return !1
        }
    }).blur(function() {
        if (selectTo) {/*
            $("#stayCity").val($('ul#ui-id-5 li:first a').text());
            var cityImage = $('ul#ui-id-5 li:first a').text();
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(n + 1, l)
        */}
    });
    
    var pSelectTo = null;
    
     $("#pickLocation").autocomplete({
        source:function(t, e) {
        	$.getJSON("/get_city_list", {
                term:extractLast(t.term),
                type:"car"
            }, e);
        },
        change: function(event, ui) {
            if (!ui.item) {
            	$("#pickLocation").val("");
            }
        },
        search:function() {
            var t = extractLast(this.value);
            return t.length < 3 ? !1 :void 0;
        },
        focus:function(event, ui) {
            var terms = split(this.value);
            
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            
            var hl = cityImage.split('</i>')[0]+'</i>';
            var h = cityImage.split('</i>')[1];
            var hdn = h.split("<span style='display: none;'>")[0];
            var hid = (h.split("<span style='display: none;'>")[1]).split("--")[0];
            var hCode = (cityImage.split('--')[1]).split("</span>")[0];
            hCode = ((hCode == null) || (hCode == 'null')) ? '' : hCode;
            
            $('#pickUpLocationID').val(hid);
            $('#pickUpLocationCode').val(hCode);
            
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            pSelectTo = !1;
            this.value = hdn;            
            return !1
        },
        select:function(event, ui) {
            /*var r = split(this.value);
            r.pop(), r.push(i.item.value);
            var u = i.item.value, n = u.indexOf("(");
            return u.indexOf(")"), u = u.substring(0, n), e = !1, this.value = r, !1;*/

            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            
            var hl=cityImage.split('</i>')[0]+'</i>';
            var h=cityImage.split('</i>')[1];
            var hdn=h.split("<span style='display: none;'>")[0];
            var hid=(h.split("<span style='display: none;'>")[1]).split("--")[0];
            var hCode = (cityImage.split('--')[1]).split("</span>")[0];
            hCode = ((hCode == null) || (hCode == 'null')) ? '' : hCode;
            
            $('#pickUpLocationID').val(hid);
            $('#pickUpLocationCode').val(hCode);
            
            console.log("select hid "+hid);
            
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            pSelectTo = !1;
            this.value = hdn;            
            return !1
        
        }
    }).blur(function() {
        if (pSelectTo) {
            $("#pickLocation").val($("ul#ui-id-6 li:first a").text());           
        }
    });
    
    var dSelectTo = null;
    $("#dropLocation").autocomplete({
        source:function(t, e) {
            $.getJSON("/get_city_list", {
                term:extractLast(t.term),
                type:"car"
            }, e);
        },
        search:function() {
            var t = extractLast(this.value);
            return t.length < 3 ? !1 :void 0;
        },
        change: function(event, ui) {
            if (!ui.item) {
            	$("#dropLocation").val("");
            }
        },
        focus:function(event, ui) {
            var terms = split(this.value);
            
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            
            var hl = cityImage.split('</i>')[0]+'</i>';
            var h = cityImage.split('</i>')[1];
            var hdn = h.split("<span style='display: none;'>")[0];
            var hid = (h.split("<span style='display: none;'>")[1]).split("--")[0];
            var hCode = (cityImage.split('--')[1]).split("</span>")[0];
            hCode = ((hCode == null) || (hCode == 'null')) ? '' : hCode;
            
            $('#dropOffLocationID').val(hid);
            $('#dropOffLocationCode').val(hCode);
            
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            dSelectTo = !1;
            this.value = hdn;            
            return !1
        },
        select:function(t, i) {
            /*var r = split(this.value);
            r.pop(), r.push(i.item.value);
            var u = i.item.value, n = u.indexOf("(");
            return u.indexOf(")"), u = u.substring(0, n), e = !1, this.value = r, !1;*/
        	
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            
            var hl=cityImage.split('</i>')[0]+'</i>';
            var h=cityImage.split('</i>')[1];
            var hdn=h.split("<span style='display: none;'>")[0];
            var hid=(h.split("<span style='display: none;'>")[1]).split("--")[0];
            var hCode = (cityImage.split('--')[1]).split("</span>")[0];
            hCode = ((hCode == null) || (hCode == 'null')) ? '' : hCode;
            
            $('#dropOffLocationID').val(hid);
            $('#dropOffLocationCode').val(hCode);
            
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            dSelectTo = !1;
            this.value = hdn;            
            return !1
        
        }
    }).blur(function() {
        if (dSelectTo) {
            $("#dropLocation").val($("ul#ui-id-7 li:first a").text());           
        }
    });
    
    $('.preFerredAirline').click(function(){
    	$("#airlineDiv").slideToggle();
    });
});

function monkeyPatchAutocomplete() {
    var oldFn = $.ui.autocomplete.prototype._renderItem;
    $.ui.autocomplete.prototype._renderItem = function(ul, item) {
        var re = new RegExp("^" + this.term, "i");
        var t = item.label.replace(re, "<span>" + this.term + "</span>");
        return $("<li></li>").data("item.autocomplete", item).append("<a>" + t + "</a>").appendTo(ul)
    }
}

$(document).ready(function() {
	   monkeyPatchAutocomplete();
	   minDate = new Date();
	     var x = 11; 
	     maxDate = new Date();
	     maxDate.setMonth(maxDate.getMonth() + x);
	     var x = 1; 
	     maxDateCar = new Date();
	     maxDateCar.setMonth(maxDateCar.getMonth() + x);
	     
	//     var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
	  	//							"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
		//							];
	   //  var weekday=new Array(7);
		//		weekday[1]="MON";
			//	weekday[2]="TUE";
		//		weekday[3]="WED";
		//		weekday[4]="THU";
		//		weekday[5]="FRI";
		//		weekday[6]="SAT";
		//		weekday[0]="SUN";
	     
	     
	        //     day  = minDate.getDate(),  
	      //   	month = monthNames[minDate.getMonth()];
	 	//	    var days=weekday[minDate.getUTCDay()];
	              
	            var ch = 2;    
	            checkInDate = new Date();
	           checkInDate.setDate(checkInDate.getDate() + ch); 
	         //             checkday  = checkInDate.getDate(),  
	                      
	        // 	month = monthNames[checkInDate.getMonth()];
	 		//     days=weekday[checkInDate.getUTCDay()];
	 		    
	            
	            var xs = 7; 
	     returnsDate = new Date();
	     returnsDate.setDate(returnsDate.getDate() + xs);
	            
	       
	     
	     
	          //    day  = returnsDate.getDate(),  
	        // 	month = monthNames[returnsDate.getMonth()];
	 		//    var days=weekday[returnsDate.getUTCDay()];
	 		    
	 	          
				  var dt_to = $.datepicker.formatDate('mm-dd-yy', new Date());
				  var dt_from = $.datepicker.formatDate('mm-dd-yy', returnsDate);
				  var checkInDate_from = $.datepicker.formatDate('mm-dd-yy', checkInDate);
				 // $("#departDate").val(dt_to); 
	             // $("#returnDate").val(dt_from);
	             // $("#checkInDate").val(checkInDate_from);
	            // $("#checkOutDate").val(dt_from);
				  $("#pickDate").val(checkInDate_from);
				  $("#dropDate").val(dt_from);
				  $.datepicker.setDefaults($.datepicker.regional['en-AU']);
	         
			  });

	 
		  $(function() {
		         $("#departDateDiv").click(function() {
        $('#departDate').datepicker('show'); 
    });
    
	         var nOm;
	         $(window).resize(function () {
	          
	          if ($(window).width() < 768) {
	           nOm = 1;
	           $("#departDate").datepicker("option", "numberOfMonths", nOm);
	          } else {
	           nOm = 2;
	           $("#departDate").datepicker("option", "numberOfMonths", nOm);
	          }
	         }).trigger('resize');
	         
    
			$( "#departDate" ).datepicker({
			  changeMonth: false,
			  changeYear: false,
			  dateFormat:"mm-dd-yy",
			  showButtonPanel: true,
			  beforeShowDay: function(date) {
               var startDate = $('#departDate').datepicker("getDate");
               var endDate = $('#returnDate').datepicker("getDate");
               var className;


               if (startDate && (date.getTime() == startDate.getTime())) {
                   className = "start-date"
               }
               else if (endDate && (date.getTime() == endDate.getTime())) {
                   className = "end-date";
               }
               else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                   className = "between-date";
               }
               else {
                   className = "";
               }
               
               return [true, className];
           },
			  minDate: minDate, maxDate: maxDate,
			  numberOfMonths: nOm,
			  showOtherMonths: true,
			  firstDay: 0,
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
            
            
          var dateRetMin = $('#returnDate').datepicker("getDate");
            if (dateDepMin != null && dateDepMin != '') {
           
            if ($('#tripType').val()=='2'){
		
                $("#returnDate").datepicker("change", { minDate: new Date(dateDepMin) });
                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
                
               
                if (dateRetMin != null) {
                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                   
                   
                    if (dMin > rMin) {
                        $('#returnDate').val($.datepicker.formatDate('mm-dd-yy', new Date(dMin)));
                      
                         $('#returnDate').datepicker('show'); 
                    }
                }
                else {
                    $('#returnDate').val($.datepicker.formatDate('mm-dd-yy', new Date(dMin)));
                   
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
    
		       var nOm;
		         $(window).resize(function () {
		          
		          if ($(window).width() < 768) {
		           nOm = 1;
		           $("#departDate").datepicker("option", "numberOfMonths", nOm);
		          } else {
		           nOm = 2;
		           $("#departDate").datepicker("option", "numberOfMonths", nOm);
		          }
		         }).trigger('resize');
		         
    
				$( "#returnDate" ).datepicker({
				  changeMonth: false,
				  changeYear: false,
				   dateFormat:"mm-dd-yy",
				   showButtonPanel: true,
				    firstDay: 0,
				   beforeShowDay: function(date) {
               var startDate = $('#departDate').datepicker("getDate");
               var endDate = $('#returnDate').datepicker("getDate");
               var className;


               if (startDate && (date.getTime() == startDate.getTime())) {
                   className = "start-date"
               }
               else if (endDate && (date.getTime() == endDate.getTime())) {
                   className = "end-date";
               }
               else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                   className = "between-date";
               }
               else {
                   className = "";
               }
               
               return [true, className];
           },
				   minDate: minDate, maxDate: maxDate,
				   numberOfMonths: nOm,
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
		
		    $(function () {
		    	
		    	var d = new Date();
		        var monthNames = ["January", "February", "March", "April", "May", "June",
		            "July", "August", "September", "October", "November", "December"];
		        today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
		        
		        var minDate = new Date();
		    	var maxDate =new Date();
		    	
		        $("#checkInDateDiv").click(function () {
		            $("#checkInDate").datepicker("show")
		        }), $("#checkInDate").datepicker({
		            //changeMonth: !0,
		            //changeYear: !0,
		            numberOfMonths: numberOfMonthValue,
		            dateFormat: "mm-dd-yy",
		            showButtonPanel: true,
					 firstDay: 0,
		            minDate: minDate,maxDate: "+11m",
		            onClose: function () {       	 
		            	 
		            	 var dropDateMin = $("#checkInDate").datepicker("getDate");

		                 try {
		                     if (dropDateMin != null && dropDateMin != '') 
		                     {                	 
		                             $("#checkOutDate").val($("#checkInDate").val());
		                             var from = $('#checkInDate').datepicker('getDate');
		                             var date_diff = Math.ceil((from.getTime() - Date.parse(today)) / 86400000);
		                             var maxDatedrop=date_diff+30+'d';
		                             $("#checkOutDate").datepicker("change", { minDate: new Date(dropDateMin)});
		                             $("#checkOutDate").datepicker("change", { maxDate: maxDatedrop });
		                     }
		                 }catch(e)
		                     {
		                     }
		                 $("#checkOutDate").datepicker('show'); 
		            }
		        })
		    }); $(function () {
		    	
		    	var d = new Date();
		        var monthNames = ["January", "February", "March", "April", "May", "June",
		            "July", "August", "September", "October", "November", "December"];
		        today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
		       
		            	
		        var maxDate1=new Date();			
		    	  
		    	   var from = new Date(maxDate1.getFullYear(), maxDate1.getMonth(), maxDate1.getDate());																	   
		    	  
		    	   //console.log("checkOutDate:"+from);
		          var date_diff = Math.ceil((from.getTime() - Date.parse(today)) / 86400000);
		          
		          //console.log("date_diff"+date_diff);
		          
		          maxDate1=date_diff+30+'d';
		    	
		        $("#checkOutDateDiv").click(function () {
		            $("#checkOutDate").datepicker("show")
		        }), $("#checkOutDate").datepicker({
		            //changeMonth: !0,
		            //changeYear: !0,
		            numberOfMonths: numberOfMonthValue,
		            dateFormat: "mm-dd-yy",
		            showButtonPanel: true,
					 firstDay: 0,
		            minDate:minDate,maxDate:maxDate1,
		        })
		    });
 $(function() {
		    	
		    	var d = new Date();
			    var monthNames = ["January", "February", "March", "April", "May", "June",
			        "July", "August", "September", "October", "November", "December"];
			    today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
			    
		    	  var nOm;
			         $(window).resize(function () {
			         
			          if ($(window).width() < 768) {
			           nOm = 1;
			           $("#departDate").datepicker("option", "numberOfMonths", nOm);
			          } else {
			           nOm = 2;
			           $("#departDate").datepicker("option", "numberOfMonths", nOm);
			          }
			         }).trigger('resize');
		        
		        $("#pickDate").datepicker({
		            changeMonth: false,
		            changeYear: false,
		            dateFormat: "mm-dd-yy",
		            showButtonPanel: true,
		            minDate: checkInDate,
		            maxDate: maxDate,
		            numberOfMonths: nOm,
					 firstDay: 0,
		            onClose: function() {
		                var a = $("#pickDate").datepicker("getDate");
		                day = a.getDate(), year = a.getFullYear();
		                var b = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
		                month = b[a.getMonth()];
		                var c = new Array(7);
		                c[0] = "MON", c[1] = "TUE", c[2] = "WED", c[3] = "THU", c[4] = "FRI", c[5] = "SAT", c[6] = "SUN";
		                var f = $("#dropDate").datepicker("getDate");
		              
		                if (null != a && "" != a) {
		                	
		                	var date_diff = Math.ceil((a.getTime() - Date.parse(today)) / 86400000);
	                        var maxDatedrop=date_diff+30+'d';
		                    
		                    $("#dropDate").datepicker("change", {
		                        minDate: new Date(a),
		                        maxDate: maxDatedrop
		                    });
		                    var g = new Date(a.getFullYear(), a.getMonth(), a.getDate());
		                    if (null != f) {
		                        var h = new Date(f.getFullYear(), f.getMonth(), f.getDate());
		                    	
		                        g > h && ($("#dropDate").val($.datepicker.formatDate("mm-dd-yy", new Date(g))), $("#dropDate").datepicker("show"))
		                    } else $("#dropDate").val($.datepicker.formatDate("mm-dd-yy", new Date(g))), $("#dropDate").datepicker("show")
		                }
		            }
		        });
		        
		        var pd = $("#pickDate").datepicker("getDate");
		    	var dd = $("#dropDate").datepicker("getDate");
		        var pDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
		        var dDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
		        dDate.setMonth(pDate.getMonth()+1);
		        
		        $("#dropDate").datepicker({
		            changeMonth: false,
		            changeYear: false,
		            dateFormat: "mm-dd-yy",
		            showButtonPanel: true,
		            minDate: pDate,
		            maxDate: dDate,
					 firstDay: 0,
		            numberOfMonths: nOm,
		            onClose: function() {
		                var a = $("#pickDate").datepicker("getDate"),
		                    b = $("#dropDate").datepicker("getDate");
		                day = b.getDate(), year = b.getFullYear();
		                var c = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
		                month = c[b.getMonth()];
		                var d = new Array(7);
		                d[0] = "MON", d[1] = "TUE", d[2] = "WED", d[3] = "THU", d[4] = "FRI", d[5] = "SAT", d[6] = "SUN";
		               
		               
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

			/*$(function(){
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
			}*/
			
			function ddlTypejourneyChange(ddlType) {
			
				if (ddlType == "1") {
					
				    $('#tripType').val(1);
                     var dateDepMin = $('#departDate').datepicker("getDate");
                     $("#returnDate").datepicker("change", { minDate: new Date(dateDepMin) });
                     
                     $("input[name='returnDate']").prop("disabled", true);
                     $( "#returnDate" ).prop( "disabled", true );
                     if ($(window).width() <= 768) {
                    	 $("#returnDateDiv").css('visibility', 'hidden');
                     }else{
                    	 
                    	 $("#returnDate").parent().addClass('disableReturnDate').parent().hide();
                         $("#departDateDiv").removeClass('col-md-3').addClass('col-md-6');
                     }
//                     $("#departDateDiv").removeClass('col-md-2');
//                     $("#departDateDiv").addClass('col-md-3');
                     $("#jawEngineLink").hide();
                     $("#jawEngineDiv").hide();
				  //    var xs = 7; 
				 //    returnsDate = new Date();
				    // returnsDate.setDate(dateDepMin.getDate() + xs);
		           // day  = returnsDate.getDate();
		         	//month = monthNames[returnsDate.getMonth()];
		 		    //var days=weekday[returnsDate.getUTCDay()];
			      //  var dt_from = $.datepicker.formatDate('mm-dd-yy', returnsDate);
                  //  $("#returnDate").val(dt_from);
              	//	document.getElementById("returnDate").value=dt_from;
				}
				else if (ddlType == "2") {
				    $('#tripType').val(2);
				    
				    
				    $("input[name='returnDate']").prop("enabled", true);
				    $( "#returnDate" ).prop( "disabled", false );
				    $("#jawEngineLink").show();
				   
//				    $("#departDateDiv").removeClass('col-md-3');
//                  $("#departDateDiv").addClass('col-md-2');
				           var xs = 7; 
					     // minDate=new Date($("#departDate").val());
					     // if(minDate == null){
					    	  var dd=$("#departDate").val().split("-");
					    	  minDate=new Date(dd[2]+"/"+dd[0]+"/"+dd[1]);
					    //  }
					      minDate.setDate(minDate.getDate() + xs);
					      
					      $("#returnDate").datepicker("change", { minDate: new Date(dd[2]+"-"+dd[0]+"-"+dd[1]) });
					      
				        var dt_from = $.datepicker.formatDate('mm-dd-yy', minDate);
	                    $("#returnDate").val(dt_from);
	              		document.getElementById("returnDate").value=dt_from;
				    
				    if ($(window).width() <= 768) {
				    	$("#returnDateDiv").css('visibility', 'visible');
				    }else{
				    	$("#returnDate").parent().addClass('disableReturnDate').parent().show();
					    $("#returnDate").parent().removeClass('disableReturnDate');
	                    $("#departDateDiv").removeClass('col-md-6').addClass('col-md-3');
				    }
				    
				} else {
					$('#tripType').val(2);
						$( "#returnDate" ).prop( "disabled", false );
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
	   if(messhow){
			messhow=false;
			
           $.notify('Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please call us at 1-844-811-1132. Otherwise please include at least 1 adult then hit "Search".', 'warning');

	   }return false;
  }
 if(validator.form()){ // validation perform
 var total = parseInt($("#adult").val()) + parseInt($("#child").val()) + parseInt($("#infant").val()) + parseInt($("#infantWs").val());
 var adults=parseInt($("#adult").val());
 var infants=parseInt($("#infant").val())
if (infants > adults) {
$("#error").html("<p>&raquo; Infant less than or equal to adult.</p>")
return false;
} 

  if(adults==0){
	  if(messhow){
			messhow=false;
		
  $.notify('Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please call us at 1-844-811-1132. Otherwise please include at least 1 adult then hit "Search".', 'warning');
	  }
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
 
 if ((airpotCode("#returnFroCity") == airpotCode("#froCity")) || (airpotCode("#returnToCity") == airpotCode("#toCity")) || ((airpotCode("#returnFroCity") == airpotCode("#toCity")) && (airpotCode("#returnToCity") == airpotCode("#froCity")))) {
	 //console.log("same city")
	 $("#error").html("<p>&raquo; Please enter a different Return From and To city/ airport code!</p>")
	 return false;
	 }
 if($.trim($("#returnFroCity").val()).length > 3 && $.trim($("#returnToCity").val()).length == 0 || $.trim($("#returnFroCity").val()).length == 0 && $.trim($("#returnToCity").val()).length > 3) {
	
	 $("#error").html("<p>&raquo; Please enter city different Return From and To city/ airport code!</p>")
	 return false;
 }
	 
 
      
var rndId = randomString(12);
if($('#currentDevice').val()=="Normal"){
	 $('form#flightSearch').attr({action: '/search/id/'+rndId});   
}else if($('#currentDevice').val()=="Mobile"){
	 $('form#flightSearch').attr({action: '/m/search/id/'+rndId});   
}else if($('#currentDevice').val()=="Tablet"){
	 $('form#flightSearch').attr({action: '/t/search/id/'+rndId});   
}else{
	 $('form#flightSearch').attr({action: '/search/id/'+rndId});   
} 
  $('form#flightSearch').submit();
  
  
 }
}

function airpotCode(id) {	
	var sval=$.trim($(id).val());
	if($.trim($(id).val()).length > 0 && $.trim($(id).val()).length > 3) {
		try {
			var f1=sval.split("(");
			var f2=f1[1].split(")");
			console.log("f2 "+f2)
			sval=f2[0];
		}
		catch(err) {			
		}
	}	
	 
	return sval;  
	}


function submitHotelForm() {
    var a = $("#searchHotel").validate({
        showErrors: function() {
            if (this.settings.highlight)
                for (var a = 0; this.errorList[a]; ++a) this.settings.highlight.call(this, this.errorList[a].element, this.settings.errorClass, this.settings.validClass);
            if (this.settings.unhighlight)
                for (var a = 0, b = this.validElements(); b[a]; ++a) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
        },
        rules: {
            stayCity: {
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
            stayCity: {
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
        var b = randomString(12);
        if($('#currentDevice').val()=="Normal"){
        	  $("form#searchHotel").attr({action: "/hotelSearch/id/" + b});  
       }else if($('#currentDevice').val()=="Mobile"){
    	   $("form#searchHotel").attr({action: "/m/hotelSearch/id/" + b});   
       }else if($('#currentDevice').val()=="Tablet"){
    	   $("form#searchHotel").attr({action: "/t/hotelSearch/id/" + b});     
       }else{
    	   $("form#searchHotel").attr({action: "/hotelSearch/id/" + b});    
       } 
         
      
        $("form#searchHotel").submit()
    }
}

var messhow=true;

function unaccompanied(){
	if(messhow){
		messhow=false;
		//$("#unaccompaniedText").toggle();
		$.notify('Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please call us at 1-844-811-1132. Otherwise please include at least 1 adult then hit "Search".', 'warning');
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

function jawEngineShow(){
	$("#jawEngineDiv").slideToggle();
}
function dropOffLocShow(){
	$("#dropOffLocDiv").slideToggle();
}
function advaOptionsShow(){
	$("#advaOptionsDiv").slideToggle();
}


///////////////// Traveller select drop script  ///////////////////////////////


$(document).ready(function() {
	var totpax=1;
	var adult=1;
	var child=0;
	var infant=0;
	var infantws=0;
	
	/*$("#person").click(function () {
	             
	            $(".traveler-dropdown").slideDown();


	        });
	        $(".done").click(function () {
	            $(".traveler-dropdown").slideUp();
	            $("#select_class").focus();
	        });*/

	        /* line1*/

	         $("#personOuter").on('click',function () {
	             
	            $(".travelerdropdown").slideDown();


	        });

	         $(".travelerClose").on('click',function () {
	             
	            $(".travelerdropdown").slideUp();


	        });


	        $("#sub1plus").click(function () {
	        	var sv = $("#adult").val();
	           if((parseInt(sv) + 1)==10){
	        	   return;
	           }
	           if((parseInt(totpax))>=9){
	        	   return;
	           }
	           adult=parseInt(adult) + 1;
	           totpax=parseInt(totpax)+1;
	            $("#adult").val(parseInt(sv) + 1);

	        });

	        $("#sub1minus").click(function () {
	        	
	            var sv = $("#adult").val();
	          
	            if (
	           parseInt(sv) != 0
	           )
	            	 if((parseInt(sv))<=1){
	                 	   return;
	                    }
	            
	            var sv2 = $("#infant").val();
	         
	            if(parseInt(sv2) > parseInt(sv-1)){
	            	totpax=parseInt(totpax)-1;
	            	$("#infant").val(sv-1);
	            	//console.log("infant:"+sv2);
	            	//console.log("totpax:"+totpax);
	            	//console.log("infant:"+sv);
	            	
	            }
	                 adult=parseInt(adult) - 1;
	                 totpax=parseInt(totpax)-1;
	                 
	                 
	                $("#adult").val(parseInt(sv) - 1);
	              //  console.log("final totpax:"+totpax);
	             //   console.log("final adult:"+adult);
	             //   console.log("*********************");
	                
	                if((parseInt($("#infant").val())+parseInt($("#infantWs").val())) > parseInt($("#adult").val())*2){
	                	var diff = ($("#adult").val()*2)-$("#infant").val();
	                	 var infant = $("#infantWs").val();
	            		$("#infantWs").val(diff);
	            		totpax=parseInt(totpax)-(infant-diff); 
			             }

	        });



	        /* line2*/

	        $("#sub2plus").click(function () {
	            var sv = $("#child").val();
	            if((parseInt(sv) + 1)>9){
	         	   return;
	            }
	            if((parseInt(totpax))>=9){
	         	   return;
	            }
	            child=parseInt(child) + 1;
	            totpax=parseInt(totpax)+1;
	            $("#child").val(parseInt(sv) + 1);

	        });

	        $("#sub2minus").click(function () {
	            var sv = $("#child").val();
	            
	            	
	            	 if(sv<=0){
	               	   return;
	                  }
	            	/* if(totpax==1){
	            	 	   return;
	            	    }*/
	            	child=parseInt(child) - 1;
	                totpax=parseInt(totpax)-1;
	                $("#child").val(parseInt(sv) - 1);

	        });




	        /* line3*/

	        $("#sub3plus").click(function () {
	            var sv = $("#infant").val();
	            var adultInfant = $("#adult").val();
	            var infantVal = $("#infantWs").val();
	            if((parseInt(sv) + 1+parseInt(infantVal))>adultInfant*2){
	            	
		          	   return;
		             }
	            
	                      
	            
	            if((parseInt(sv) + 1)>adultInfant){
	          	   return;
	             }
	            if((parseInt(totpax))>=9){
	          	   return;
	             }
	            infant=parseInt(infant) + 1;
	            totpax=parseInt(totpax)+1;
	            $("#infant").val(parseInt(sv) + 1);

	        });

	        $("#sub3minus").click(function () {
	        	   var sv = $("#infant").val();
	        	   
	        	   var adult = $("#adult").val();
	             
	        	  if(sv<=0){
	                  return;
	                 }
	             
	              if(adult<=0){ 
	                return;
	               }
	              
	              	infant=parseInt(infant) - 1;
	                totpax=parseInt(totpax)-1;
	                $("#infant").val(parseInt(sv) - 1);

	        });


	        $("#sub4plus").click(function () {
	            var sv = $("#infantWs").val();
	            var infantVal = $("#infant").val();
	            var adultVal = $("#adult").val();
	            if((parseInt(sv) + 1+parseInt(infantVal))>adultVal*2){
	            	
		          	   return;
		             }
	            if((parseInt(sv) + 1)>=9){
	          	   return;
	             }
	            if((parseInt(totpax))>=9){
	          	   return;
	             }
	            infantws=parseInt(infantws) + 1;
	            totpax=parseInt(totpax)+1;
	            $("#infantWs").val(parseInt(sv) + 1);

	        });

	        $("#sub4minus").click(function () {
	            var sv = $("#infantWs").val();
	            	
	            	if(sv<=0){
	                	   return;
	                   }
	            	if(totpax==1){
	         	 	   return;
	         	    }
	            	infantws=parseInt(infantws) - 1;
	                totpax=parseInt(totpax)-1;
	                $("#infantWs").val(parseInt(sv) - 1);

	        });




	        /* main*/


	        $(".maincalulation").click(function () {
	            var sv = $("#adult").val();
	            var sv1 = $("#child").val(); 
	            var sv2 = $("#infant").val();
	            var sv3 = $("#infantWs").val();
	           // var sv4=$("#cabinClass").val();
	           /* if(parseInt(sv2) > parseInt(sv)){
	            	totpax=parseInt(totpax)+1;
	            	$("#infant").val(sv);
	            }*/
	            var total = parseInt(sv) + parseInt(sv1) + parseInt(sv2)+ parseInt(sv3);
	            
	            if (total > 1) {
	            	 $("#person").val(total+ " Travelers");
	        	} else {
	        		 $("#person").val(total+ " Adult"); 
	        	}
	            
	            

	        });
	        
	        $("#newsSignss").click(function () {
	        	
	        	var  emailId = $("#newsEmail").val();
	        	
	      if(emailId == ''){
	    	  $("#submitSuccess").text("please enter emailId");
              return false;  
	      }
	      ValidateEmail(emailId);
	      
	        });
	        
	        function ValidateEmail(mail)  
	        {  
	        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	        if(mailformat.test(mail))  
	        {  
	        	$.ajax({
	                url: '/farealert/signup', // url where to submit the request
	                type : "POST", // type of action POST || GET
	                dataType : 'json', // data type
	                data : JSON.stringify({
	                    'emailId': mail,
	                    'alertType': 'NewsLetter' 
	                }), // post data || get data
	                Accept : "application/json;charset=utf-8",
	                contentType: "application/json; charset=utf-8",
	                success : function(result) {
	                	$("#submitSuccess").text(result);
	                    $("#submitSuccess").show().delay(5000).fadeOut();
	                    $('#newsEmail').val('');
	                   
	                },
	                error: function(xhr, resp, text) {
	                    
	                }
	            })  
	        }  
	        else  
	        {
	        	 $("#submitSuccess").text("please enter valid emailId");
	        return false;  
	        }  
	        } 
	});



///////////////////////// traveller pop script end //////////////////

function hotelTabClick(){
    $('.carTab').removeClass('active');
    $('.flightTab').removeClass('active');
    $('.hotelTab').addClass('active');    

	$("#flightEngineId").addClass('hide');
	$("#carEngineId").addClass('hide');
    $("#hotelEngineId").removeClass('hide');
}
function flightTabClick(){
    $('.carTab').removeClass('active');
    $('.hotelTab').removeClass('active');
    $('.flightTab').addClass('active');

    $("#hotelEngineId").addClass('hide');
    $("#carEngineId").addClass('hide');
    $("#flightEngineId").removeClass('hide');
}
function carTabClick(){
    $('.hotelTab').removeClass('active');
    $('.flightTab').removeClass('active');
    $('.carTab').addClass('active');

	$("#hotelEngineId").addClass('hide');
    $("#flightEngineId").addClass('hide');
    $("#carEngineId").removeClass('hide');
    $("#pickTime").val("10:00");
    $("#dropTime").val("10:00");
    
}




$(document).ready(function () {
	
	$("#pickTime").val("10:00");
    $("#dropTime").val("10:00");
    
    $('#select_room').click(function () {
        $('.roomdrop').show();

    });
    $('.doneroom').click(function () {
        $('.roomdrop').hide();

    });
    /*---Add room1*/
    $('#addRoomsTag').click(function () {
        var checkDisplay = 1;
        var totalPerson = 1;
        var room1Adult = $('#room1TextAdult').val();
        var room1Child = $('#room1TextChild').val();

        var room2Adult = $('#room2TextAdult').val();
        var room2Child = $('#room2TextChild').val();

        var room3Adult = $('#room3TextAdult').val();
        var room3Child = $('#room3TextChild').val();

        var room4Adult = $('#room4TextAdult').val();
        var room4Child = $('#room4TextChild').val();

        for (var i = 2; i <= 4; i++) {
            if (document.getElementById("divRoom" + i).style.display == 'none') {
                document.getElementById("divRoom" + i).style.display = 'block';

                checkDisplay = i;
                if (checkDisplay == 1) {
                    totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child));
                }
                if (checkDisplay == 2) {
                    totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child) + parseInt(room2Adult) + parseInt(room2Child));
                }

                if (checkDisplay == 3) {
                    totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child) + parseInt(room2Adult) + parseInt(room2Child) + parseInt(room3Adult) + parseInt(room3Child));
                }

                if (checkDisplay == 4) {
                    totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child) + parseInt(room2Adult) + parseInt(room2Child) + parseInt(room3Adult) + parseInt(room3Child) + parseInt(room4Adult) + parseInt(room4Child));
                }

                var _selectText = parseInt(checkDisplay) + ' Room ' + parseInt(totalPerson) + ' Person';
				//alert("add room : "+checkDisplay);
				$('#rooms').val(checkDisplay);
                $('#select_room').val(_selectText);
                break;
            }
        }
    });
    /* --- remove room*/
    $('#removeRoomsTag').click(function () {

        var checkDisplay = 1;
        var totalPerson = 1;
        var room1Adult = $('#room1TextAdult').val();
        var room1Child = $('#room1TextChild').val();

        var room2Adult = $('#room2TextAdult').val();
        var room2Child = $('#room2TextChild').val();

        var room3Adult = $('#room3TextAdult').val();
        var room3Child = $('#room3TextChild').val();

        var room4Adult = $('#room4TextAdult').val();
        var room4Child = $('#room4TextChild').val();


        for (var i = 4; i >= 2; i--) {
            if (document.getElementById("divRoom" + i).style.display == 'block') {
                document.getElementById("divRoom" + i).style.display = 'none';


                checkDisplay = parseInt(i - 1);
                if (checkDisplay == 1) {
                    totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child));
                }
                if (checkDisplay == 2) {
                    totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child) + parseInt(room2Adult) + parseInt(room2Child));
                }

                if (checkDisplay == 3) {
                    totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child) + parseInt(room2Adult) + parseInt(room2Child) + parseInt(room3Adult) + parseInt(room3Child));
                }

                if (checkDisplay == 4) {
                    totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child) + parseInt(room2Adult) + parseInt(room2Child) + parseInt(room3Adult) + parseInt(room3Child) + parseInt(room4Adult) + parseInt(room4Child));
                }

                var _selectText = parseInt(checkDisplay) + ' Room ' + parseInt(totalPerson) + ' Person';
				//alert("remove room : " + checkDisplay);
				$('#rooms').val(checkDisplay);
                $('#select_room').val(_selectText);
                break;
            }
        }
    });






    /*---room1 Adult*/
    $('#room1AdultPlus').click(function () {
        var room1TextAdult = $('#room1TextAdult').val();
        if (room1TextAdult < 9) {
            $('#room1TextAdult').val(parseInt(room1TextAdult) + 1);
        }
        else {
            $('#room1AdultPlus').addClass('disableButton');
        }
    });
    $('#room1AdultMinus').click(function () {
        var room1TextAdult = $('#room1TextAdult').val();
        if (parseInt(room1TextAdult) != 1) {
            $('#room1TextAdult').val(parseInt(room1TextAdult) - 1);
        }
        else {
            $('#room1AdultMinus').addClass('disableButton');
        }
    });

    /*---room1 Child plus minus*/
    $('#room1ChildPlus').click(function () {

        var room1ChildText = $('#room1TextChild').val();
        if (room1ChildText < 4) {
            $('#room1TextChild').val(parseInt(room1ChildText) + 1);
        }

        var room1ChildText = $('#room1TextChild').val();
        if (parseInt(room1ChildText) > 0 && parseInt(room1ChildText) < 4) {
            $('#divRoom1ChildAges1').show();
            if (parseInt(room1ChildText) == 1) {
                $('#divRoom1Child1Age').show();
            }
            if (parseInt(room1ChildText) == 2) {
                $('#divRoom1Child1Age').show();
                $('#divRoom1Child2Age').show();
            }
            if (parseInt(room1ChildText) == 3) {
                $('#divRoom1Child1Age').show();
                $('#divRoom1Child2Age').show();
                $('#divRoom1Child3Age').show();
            }

        }

        if (parseInt(room1ChildText) > 3) {
            $('#divRoom1ChildAges2').show();
            $('#divRoom1Child1Age').show();
            $('#divRoom1Child2Age').show();
            $('#divRoom1Child3Age').show();
            $('#divRoom1Child4Age').show();
        }


    });
    $('#room1ChildMinus').click(function () {
        var room1ChildText = $('#room1TextChild').val();
        if (parseInt(room1ChildText) != 0) {
            $('#room1TextChild').val(parseInt(room1ChildText) - 1);
        }

        room1ChildText = $('#room1TextChild').val();
        if (parseInt(room1ChildText) == 3) {
            $('#divRoom1ChildAges2').hide();
            $('#divRoom1Child4Age').hide();
        }
        if (parseInt(room1ChildText) == 2) {
            $('#divRoom1ChildAges2').hide();
            $('#divRoom1Child4Age').hide();
            $('#divRoom1Child3Age').hide();
        }
        if (parseInt(room1ChildText) == 1) {
            $('#divRoom1ChildAges2').hide();
            $('#divRoom1Child4Age').hide();
            $('#divRoom1Child3Age').hide();
            $('#divRoom1Child2Age').hide();
        }
        if (parseInt(room1ChildText) == 0) {
            $('#divRoom1ChildAges2').hide();
            $('#divRoom1Child4Age').hide();
            $('#divRoom1Child3Age').hide();
            $('#divRoom1Child2Age').hide();
            $('#divRoom1ChildAges1').hide();
            $('#divRoom1Child1Age').hide();
        }

    });
    /* room1 child ages plus minus*/
    $('#room1Child1AgePlus').click(function () {
        var room1TextChild1Age = $('#room1TextChild1Age').val();
        if (room1TextChild1Age < 17) {
            $('#room1TextChild1Age').val(parseInt(room1TextChild1Age) + 1);
        }

    });
    $('#room1Child1AgeMinus').click(function () {
        var room1TextChild1Age = $('#room1TextChild1Age').val();
        if (parseInt(room1TextChild1Age) != 1) {
            $('#room1TextChild1Age').val(parseInt(room1TextChild1Age) - 1);
        }

    });

    $('#room1Child2AgePlus').click(function () {
        var room1TextChild2Age = $('#room1TextChild2Age').val();
        if (room1TextChild2Age < 17) {
            $('#room1TextChild2Age').val(parseInt(room1TextChild2Age) + 1);
        }

    });
    $('#room1Child2AgeMinus').click(function () {
        var room1TextChild2Age = $('#room1TextChild2Age').val();
        if (parseInt(room1TextChild2Age) != 1) {
            $('#room1TextChild2Age').val(parseInt(room1TextChild2Age) - 1);
        }

    });

    $('#room1Child3AgePlus').click(function () {
        var room1TextChild2Age = $('#room1TextChild3Age').val();
        if (room1TextChild2Age < 17) {
            $('#room1TextChild3Age').val(parseInt(room1TextChild2Age) + 1);
        }

    });
    $('#room1Child3AgeMinus').click(function () {
        var room1TextChild2Age = $('#room1TextChild3Age').val();
        if (parseInt(room1TextChild2Age) != 1) {
            $('#room1TextChild3Age').val(parseInt(room1TextChild2Age) - 1);
        }

    });

    $('#room1Child4AgePlus').click(function () {
        var room1TextChild2Age = $('#room1TextChild4Age').val();
        if (room1TextChild2Age < 17) {
            $('#room1TextChild4Age').val(parseInt(room1TextChild2Age) + 1);
        }

    });
    $('#room1Child4AgeMinus').click(function () {
        var room1TextChild2Age = $('#room1TextChild4Age').val();
        if (parseInt(room1TextChild2Age) != 1) {
            $('#room1TextChild4Age').val(parseInt(room1TextChild2Age) - 1);
        }

    });
    /*---Add room2*/
    /*---room2 Adult*/
    $('#room2AdultPlus').click(function () {
        var room2TextAdult = $('#room2TextAdult').val();
        if (room2TextAdult < 9) {
            $('#room2TextAdult').val(parseInt(room2TextAdult) + 1);
        }
        else {
            $('#room2AdultPlus').addClass('disableButton');
        }
    });
    $('#room2AdultMinus').click(function () {
        var room2TextAdult = $('#room2TextAdult').val();
        if (parseInt(room2TextAdult) != 1) {
            $('#room2TextAdult').val(parseInt(room2TextAdult) - 1);
        }
        else {
            $('#room2AdultMinus').addClass('disableButton');
        }
    });

    /*---room2 Child plus minus*/
    $('#room2ChildPlus').click(function () {

        var room2ChildText = $('#room2TextChild').val();
        if (room2ChildText < 4) {
            $('#room2TextChild').val(parseInt(room2ChildText) + 1);
        }

        var room2ChildText = $('#room2TextChild').val();
        if (parseInt(room2ChildText) > 0 && parseInt(room2ChildText) < 4) {
            $('#divroom2ChildAges1').show();
            if (parseInt(room2ChildText) == 1) {
                $('#divroom2Child1Age').show();
            }
            if (parseInt(room2ChildText) == 2) {
                $('#divroom2Child1Age').show();
                $('#divroom2Child2Age').show();
            }
            if (parseInt(room2ChildText) == 3) {
                $('#divroom2Child1Age').show();
                $('#divroom2Child2Age').show();
                $('#divroom2Child3Age').show();
            }

        }

        if (parseInt(room2ChildText) > 3) {
            $('#divroom2ChildAges2').show();
            $('#divroom2Child1Age').show();
            $('#divroom2Child2Age').show();
            $('#divroom2Child3Age').show();
            $('#divroom2Child4Age').show();
        }


    });
    $('#room2ChildMinus').click(function () {
        var room2ChildText = $('#room2TextChild').val();
        if (parseInt(room2ChildText) != 0) {
            $('#room2TextChild').val(parseInt(room2ChildText) - 1);
        }

        room2ChildText = $('#room2TextChild').val();
        if (parseInt(room2ChildText) == 3) {
            $('#divroom2ChildAges2').hide();
            $('#divroom2Child4Age').hide();
        }
        if (parseInt(room2ChildText) == 2) {
            $('#divroom2ChildAges2').hide();
            $('#divroom2Child4Age').hide();
            $('#divroom2Child3Age').hide();
        }
        if (parseInt(room2ChildText) == 1) {
            $('#divroom2ChildAges2').hide();
            $('#divroom2Child4Age').hide();
            $('#divroom2Child3Age').hide();
            $('#divroom2Child2Age').hide();
        }
        if (parseInt(room2ChildText) == 0) {
            $('#divroom2ChildAges2').hide();
            $('#divroom2Child4Age').hide();
            $('#divroom2Child3Age').hide();
            $('#divroom2Child2Age').hide();
            $('#divroom2ChildAges1').hide();
            $('#divroom2Child1Age').hide();
        }

    });
    /* room2 child ages plus minus*/
    $('#room2Child1AgePlus').click(function () {
        var room2TextChild1Age = $('#room2TextChild1Age').val();
        if (room2TextChild1Age < 17) {
            $('#room2TextChild1Age').val(parseInt(room2TextChild1Age) + 1);
        }

    });
    $('#room2Child1AgeMinus').click(function () {
        var room2TextChild1Age = $('#room2TextChild1Age').val();
        if (parseInt(room2TextChild1Age) != 1) {
            $('#room2TextChild1Age').val(parseInt(room2TextChild1Age) - 1);
        }

    });

    $('#room2Child2AgePlus').click(function () {
        var room2TextChild2Age = $('#room2TextChild2Age').val();
        if (room2TextChild2Age < 17) {
            $('#room2TextChild2Age').val(parseInt(room2TextChild2Age) + 1);
        }

    });
    $('#room2Child2AgeMinus').click(function () {
        var room2TextChild2Age = $('#room2TextChild2Age').val();
        if (parseInt(room2TextChild2Age) != 1) {
            $('#room2TextChild2Age').val(parseInt(room2TextChild2Age) - 1);
        }

    });

    $('#room2Child3AgePlus').click(function () {
        var room2TextChild2Age = $('#room2TextChild3Age').val();
        if (room2TextChild2Age < 17) {
            $('#room2TextChild3Age').val(parseInt(room2TextChild2Age) + 1);
        }

    });
    $('#room2Child3AgeMinus').click(function () {
        var room2TextChild2Age = $('#room2TextChild3Age').val();
        if (parseInt(room2TextChild2Age) != 1) {
            $('#room2TextChild3Age').val(parseInt(room2TextChild2Age) - 1);
        }

    });

    $('#room2Child4AgePlus').click(function () {
        var room2TextChild2Age = $('#room2TextChild4Age').val();
        if (room2TextChild2Age < 17) {
            $('#room2TextChild4Age').val(parseInt(room2TextChild2Age) + 1);
        }

    });
    $('#room2Child4AgeMinus').click(function () {
        var room2TextChild2Age = $('#room2TextChild4Age').val();
        if (parseInt(room2TextChild2Age) != 1) {
            $('#room2TextChild4Age').val(parseInt(room2TextChild2Age) - 1);
        }

    });
    /*---- Add room3*/
    /*---room3 Adult*/
    $('#room3AdultPlus').click(function () {
        var room3TextAdult = $('#room3TextAdult').val();
        if (room3TextAdult < 9) {
            $('#room3TextAdult').val(parseInt(room3TextAdult) + 1);
        }
        else {
            $('#room3AdultPlus').addClass('disableButton');
        }
    });
    $('#room3AdultMinus').click(function () {
        var room3TextAdult = $('#room3TextAdult').val();
        if (parseInt(room3TextAdult) != 1) {
            $('#room3TextAdult').val(parseInt(room3TextAdult) - 1);
        }
        else {
            $('#room3AdultMinus').addClass('disableButton');
        }
    });

    /*---room3 Child plus minus*/
    $('#room3ChildPlus').click(function () {

        var room3ChildText = $('#room3TextChild').val();
        if (room3ChildText < 4) {
            $('#room3TextChild').val(parseInt(room3ChildText) + 1);
        }
        var room3ChildText = $('#room3TextChild').val();
        if (parseInt(room3ChildText) > 0 && parseInt(room3ChildText) < 4) {
            $('#divroom3ChildAges1').show();
            if (parseInt(room3ChildText) == 1) {
                $('#divroom3Child1Age').show();
            }
            if (parseInt(room3ChildText) == 2) {
                $('#divroom3Child1Age').show();
                $('#divroom3Child2Age').show();
            }
            if (parseInt(room3ChildText) == 3) {
                $('#divroom3Child1Age').show();
                $('#divroom3Child2Age').show();
                $('#divroom3Child3Age').show();
            }

        }

        if (parseInt(room3ChildText) > 3) {
            $('#divroom3ChildAges2').show();
            $('#divroom3Child1Age').show();
            $('#divroom3Child2Age').show();
            $('#divroom3Child3Age').show();
            $('#divroom3Child4Age').show();
        }


    });
    $('#room3ChildMinus').click(function () {
        var room3ChildText = $('#room3TextChild').val();
        if (parseInt(room3ChildText) != 0) {
            $('#room3TextChild').val(parseInt(room3ChildText) - 1);
        }
        room3ChildText = $('#room3TextChild').val();
        if (parseInt(room3ChildText) == 3) {
            $('#divroom3ChildAges2').hide();
            $('#divroom3Child4Age').hide();
        }
        if (parseInt(room3ChildText) == 2) {
            $('#divroom3ChildAges2').hide();
            $('#divroom3Child4Age').hide();
            $('#divroom3Child3Age').hide();
        }
        if (parseInt(room3ChildText) == 1) {
            $('#divroom3ChildAges2').hide();
            $('#divroom3Child4Age').hide();
            $('#divroom3Child3Age').hide();
            $('#divroom3Child2Age').hide();
        }
        if (parseInt(room3ChildText) == 0) {
            $('#divroom3ChildAges2').hide();
            $('#divroom3Child4Age').hide();
            $('#divroom3Child3Age').hide();
            $('#divroom3Child2Age').hide();
            $('#divroom3ChildAges1').hide();
            $('#divroom3Child1Age').hide();
        }

    });
    /* room3 child ages plus minus*/
    $('#room3Child1AgePlus').click(function () {
        var room3TextChild1Age = $('#room3TextChild1Age').val();
        if (room3TextChild1Age < 17) {
            $('#room3TextChild1Age').val(parseInt(room3TextChild1Age) + 1);
        }

    });
    $('#room3Child1AgeMinus').click(function () {
        var room3TextChild1Age = $('#room3TextChild1Age').val();
        if (parseInt(room3TextChild1Age) != 1) {
            $('#room3TextChild1Age').val(parseInt(room3TextChild1Age) - 1);
        }

    });

    $('#room3Child2AgePlus').click(function () {
        var room3TextChild2Age = $('#room3TextChild2Age').val();
        if (room3TextChild2Age < 17) {
            $('#room3TextChild2Age').val(parseInt(room3TextChild2Age) + 1);
        }

    });
    $('#room3Child2AgeMinus').click(function () {
        var room3TextChild2Age = $('#room3TextChild2Age').val();
        if (parseInt(room3TextChild2Age) != 1) {
            $('#room3TextChild2Age').val(parseInt(room3TextChild2Age) - 1);
        }

    });

    $('#room3Child3AgePlus').click(function () {
        var room3TextChild2Age = $('#room3TextChild3Age').val();
        if (room3TextChild2Age < 17) {
            $('#room3TextChild3Age').val(parseInt(room3TextChild2Age) + 1);
        }

    });
    $('#room3Child3AgeMinus').click(function () {
        var room3TextChild2Age = $('#room3TextChild3Age').val();
        if (parseInt(room3TextChild2Age) != 1) {
            $('#room3TextChild3Age').val(parseInt(room3TextChild2Age) - 1);
        }

    });

    $('#room3Child4AgePlus').click(function () {
        var room3TextChild2Age = $('#room3TextChild4Age').val();
        if (room3TextChild2Age < 17) {
            $('#room3TextChild4Age').val(parseInt(room3TextChild2Age) + 1);
        }

    });
    $('#room3Child4AgeMinus').click(function () {
        var room3TextChild2Age = $('#room3TextChild4Age').val();
        if (parseInt(room3TextChild2Age) != 1) {
            $('#room3TextChild4Age').val(parseInt(room3TextChild2Age) - 1);
        }

    });
    /*----Add room4*/
    /*---room4 Adult*/
    $('#room4AdultPlus').click(function () {
        var room4TextAdult = $('#room4TextAdult').val();
        if (room4TextAdult < 9) {
            $('#room4TextAdult').val(parseInt(room4TextAdult) + 1);
        }
        else {
            $('#room4AdultPlus').addClass('disableButton');
        }
    });
    $('#room4AdultMinus').click(function () {
        var room4TextAdult = $('#room4TextAdult').val();
        if (parseInt(room4TextAdult) != 1) {
            $('#room4TextAdult').val(parseInt(room4TextAdult) - 1);
        }
        else {
            $('#room4AdultMinus').addClass('disableButton');
        }
    });

    /*---room4 Child plus minus*/
    $('#room4ChildPlus').click(function () {

        var room4ChildText = $('#room4TextChild').val();
        if (room4ChildText < 4) {
            $('#room4TextChild').val(parseInt(room4ChildText) + 1);
        }

        var room4ChildText = $('#room4TextChild').val();
        if (parseInt(room4ChildText) > 0 && parseInt(room4ChildText) < 4) {
            $('#divroom4ChildAges1').show();
            if (parseInt(room4ChildText) == 1) {
                $('#divroom4Child1Age').show();
            }
            if (parseInt(room4ChildText) == 2) {
                $('#divroom4Child1Age').show();
                $('#divroom4Child2Age').show();
            }
            if (parseInt(room4ChildText) == 3) {
                $('#divroom4Child1Age').show();
                $('#divroom4Child2Age').show();
                $('#divroom4Child3Age').show();
            }

        }

        if (parseInt(room4ChildText) > 3) {
            $('#divroom4ChildAges2').show();
            $('#divroom4Child1Age').show();
            $('#divroom4Child2Age').show();
            $('#divroom4Child3Age').show();
            $('#divroom4Child4Age').show();
        }


    });
    $('#room4ChildMinus').click(function () {
        var room4ChildText = $('#room4TextChild').val();
        if (parseInt(room4ChildText) != 0) {
            $('#room4TextChild').val(parseInt(room4ChildText) - 1);
        }

        room4ChildText = $('#room4TextChild').val();
        if (parseInt(room4ChildText) == 3) {
            $('#divroom4ChildAges2').hide();
            $('#divroom4Child4Age').hide();
        }
        if (parseInt(room4ChildText) == 2) {
            $('#divroom4ChildAges2').hide();
            $('#divroom4Child4Age').hide();
            $('#divroom4Child3Age').hide();
        }
        if (parseInt(room4ChildText) == 1) {
            $('#divroom4ChildAges2').hide();
            $('#divroom4Child4Age').hide();
            $('#divroom4Child3Age').hide();
            $('#divroom4Child2Age').hide();
        }
        if (parseInt(room4ChildText) == 0) {
            $('#divroom4ChildAges2').hide();
            $('#divroom4Child4Age').hide();
            $('#divroom4Child3Age').hide();
            $('#divroom4Child2Age').hide();
            $('#divroom4ChildAges1').hide();
            $('#divroom4Child1Age').hide();
        }

    });
    /* room4 child ages plus minus*/
    $('#room4Child1AgePlus').click(function () {
        var room4TextChild1Age = $('#room4TextChild1Age').val();
        if (room4TextChild1Age < 17) {
            $('#room4TextChild1Age').val(parseInt(room4TextChild1Age) + 1);
        }

    });
    $('#room4Child1AgeMinus').click(function () {
        var room4TextChild1Age = $('#room4TextChild1Age').val();
        if (parseInt(room4TextChild1Age) != 1) {
            $('#room4TextChild1Age').val(parseInt(room4TextChild1Age) - 1);
        }

    });

    $('#room4Child2AgePlus').click(function () {
        var room4TextChild2Age = $('#room4TextChild2Age').val();
        if (room4TextChild2Age < 17) {
            $('#room4TextChild2Age').val(parseInt(room4TextChild2Age) + 1);
        }

    });
    $('#room4Child2AgeMinus').click(function () {
        var room4TextChild2Age = $('#room4TextChild2Age').val();
        if (parseInt(room4TextChild2Age) != 1) {
            $('#room4TextChild2Age').val(parseInt(room4TextChild2Age) - 1);
        }

    });

    $('#room4Child3AgePlus').click(function () {
        var room4TextChild2Age = $('#room4TextChild3Age').val();
        if (room4TextChild2Age < 17) {
            $('#room4TextChild3Age').val(parseInt(room4TextChild2Age) + 1);
        }

    });
    $('#room4Child3AgeMinus').click(function () {
        var room4TextChild2Age = $('#room4TextChild3Age').val();
        if (parseInt(room4TextChild2Age) != 1) {
            $('#room4TextChild3Age').val(parseInt(room4TextChild2Age) - 1);
        }

    });

    $('#room4Child4AgePlus').click(function () {
        var room4TextChild2Age = $('#room4TextChild4Age').val();
        if (room4TextChild2Age < 17) {
            $('#room4TextChild4Age').val(parseInt(room4TextChild2Age) + 1);
        }

    });
    $('#room4Child4AgeMinus').click(function () {
        var room4TextChild2Age = $('#room4TextChild4Age').val();
        if (parseInt(room4TextChild2Age) != 1) {
            $('#room4TextChild4Age').val(parseInt(room4TextChild2Age) - 1);
        }

    });
    /*------ Assign valuse to hidden fields for adult child and child ages*/
    $('#roomSelectionDon').click(function () {

        var checkDisplay = 1;
        var totalPerson = 1;
        var totalAdult = 1;
        var totalChild = 1;
        for (var i = 1; i < 5; i++) {
            if (document.getElementById("divRoom" + i).style.display == 'block') {
                checkDisplay = i;
                $('#hdnroomNumber').val(parseInt(checkDisplay));
            }
        }

        var room1Adult = $('#room1TextAdult').val();
        var room1Child = $('#room1TextChild').val();

        var room2Adult = $('#room2TextAdult').val();
        var room2Child = $('#room2TextChild').val();

        var room3Adult = $('#room3TextAdult').val();
        var room3Child = $('#room3TextChild').val();

        var room4Adult = $('#room4TextAdult').val();
        var room4Child = $('#room4TextChild').val();

        if (checkDisplay == 1) {
            totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child));
            $('#hdnroom1Adult').val(parseInt(room1Adult));
            $('#hdnroom1Child').val(parseInt(room1Child));
            totalAdult = parseInt(room1Adult);
            totalChild = parseInt(room1Child);

            var room1TextChild = $('#room1TextChild').val();
            room1TextChild = parseInt(room1TextChild);
            for (var i = 1; i <= room1TextChild; i++) {
                var hdnId = '#hdnroom1Child' + i + 'Age';
                var textId = '#room1TextChild' + i + 'Age';
                $(hdnId).val($(textId).val());
            }
        }
        if (checkDisplay == 2) {
            totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child) + parseInt(room2Adult) + parseInt(room2Child));
            $('#hdnroom1Adult').val(parseInt(room1Adult));
            $('#hdnroom1Child').val(parseInt(room1Child));
            $('#hdnroom2Adult').val(parseInt(room2Adult));
            $('#hdnroom2Child').val(parseInt(room2Child));
            totalAdult = parseInt(parseInt(room1Adult) + parseInt(room2Adult));
            totalChild = parseInt(parseInt(room1Child) + parseInt(room2Child));

            var room1TextChild = $('#room1TextChild').val();
            room1TextChild = parseInt(room1TextChild);
            for (var i = 1; i <= room1TextChild; i++) {
                var hdnId = '#hdnroom1Child' + i + 'Age';
                var textId = '#room1TextChild' + i + 'Age';
                $(hdnId).val($(textId).val());
            }

            var room2TextChild = $('#room2TextChild').val();
            room2TextChild = parseInt(room2TextChild);
            for (var i = 1; i <= room2TextChild; i++) {
                var hdnId = '#hdnroom2Child' + i + 'Age';
                var textId = '#room2TextChild' + i + 'Age';
                $(hdnId).val($(textId).val());

            }


        }

        if (checkDisplay == 3) {
            totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child) + parseInt(room2Adult) + parseInt(room2Child) + parseInt(room3Adult) + parseInt(room3Child));

            $('#hdnroom1Adult').val(parseInt(room1Adult));
            $('#hdnroom1Child').val(parseInt(room1Child));
            $('#hdnroom2Adult').val(parseInt(room2Adult));
            $('#hdnroom2Child').val(parseInt(room2Child));
            $('#hdnroom3Adult').val(parseInt(room3Adult));
            $('#hdnroom3Child').val(parseInt(room3Child));
            totalAdult = parseInt(parseInt(room1Adult) + parseInt(room2Adult) + parseInt(room3Adult));
            totalChild = parseInt(parseInt(room1Child) + parseInt(room2Child) + parseInt(room3Child));

            var room1TextChild = $('#room1TextChild').val();
            room1TextChild = parseInt(room1TextChild);
            for (var i = 1; i <= room1TextChild; i++) {
                var hdnId = '#hdnroom1Child' + i + 'Age';
                var textId = '#room1TextChild' + i + 'Age';
                $(hdnId).val($(textId).val());
            }

            var room2TextChild = $('#room2TextChild').val();
            room2TextChild = parseInt(room2TextChild);
            for (var i = 1; i <= room2TextChild; i++) {
                var hdnId = '#hdnroom2Child' + i + 'Age';
                var textId = '#room2TextChild' + i + 'Age';
                $(hdnId).val($(textId).val());

            }

            var room3TextChild = $('#room3TextChild').val();
            room3TextChild = parseInt(room3TextChild);
            for (var i = 1; i <= room3TextChild; i++) {
                var hdnId = '#hdnroom3Child' + i + 'Age';
                var textId = '#room3TextChild' + i + 'Age';
                $(hdnId).val($(textId).val());
            }

        }

        if (checkDisplay == 4) {
            totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child) + parseInt(room2Adult) + parseInt(room2Child) + parseInt(room3Adult) + parseInt(room3Child) + parseInt(room4Adult) + parseInt(room4Child));

            $('#hdnroom1Adult').val(parseInt(room1Adult));
            $('#hdnroom1Child').val(parseInt(room1Child));
            $('#hdnroom2Adult').val(parseInt(room2Adult));
            $('#hdnroom2Child').val(parseInt(room2Child));
            $('#hdnroom3Adult').val(parseInt(room3Adult));
            $('#hdnroom3Child').val(parseInt(room3Child));
            $('#hdnroom4Adult').val(parseInt(room4Adult));
            $('#hdnroom4Child').val(parseInt(room4Child));
            totalAdult = parseInt(parseInt(room1Adult) + parseInt(room2Adult) + parseInt(room3Adult) + parseInt(room4Adult));
            totalChild = parseInt(parseInt(room1Child) + parseInt(room2Child) + parseInt(room3Child) + parseInt(room4Child));


            var room1TextChild = $('#room1TextChild').val();
            room1TextChild = parseInt(room1TextChild);
            for (var i = 1; i <= room1TextChild; i++) {
                var hdnId = '#hdnroom1Child' + i + 'Age';
                var textId = '#room1TextChild' + i + 'Age';
                $(hdnId).val($(textId).val());
            }

            var room2TextChild = $('#room2TextChild').val();
            room2TextChild = parseInt(room2TextChild);
            for (var i = 1; i <= room2TextChild; i++) {
                var hdnId = '#hdnroom2Child' + i + 'Age';
                var textId = '#room2TextChild' + i + 'Age';
                $(hdnId).val($(textId).val());

            }

            var room3TextChild = $('#room3TextChild').val();
            room3TextChild = parseInt(room3TextChild);
            for (var i = 1; i <= room3TextChild; i++) {
                var hdnId = '#hdnroom3Child' + i + 'Age';
                var textId = '#room3TextChild' + i + 'Age';
                $(hdnId).val($(textId).val());
            }

            var room4TextChild = $('#room4TextChild').val();
            room4TextChild = parseInt(room4TextChild);
            for (var i = 1; i <= room4TextChild; i++) {
                var hdnId = '#hdnroom4Child' + i + 'Age';
                var textId = '#room4TextChild' + i + 'Age';
                $(hdnId).val($(textId).val());
            }

        }
        $('#hdtotalAdult').val(totalAdult);
        $('#hdtotalChild').val(totalChild);
        var _selectText = parseInt(checkDisplay) + ' Room ' + parseInt(totalPerson) + ' Person';

    });

    /*--- room1 Adult child calculation*/
    $('.roomsNoCalculation').click(function () {
        var checkDisplay = 1;
        var totalPerson = 1;
        for (var i = 1; i < 5; i++) {
            if (document.getElementById("divRoom" + i).style.display == 'block') {
                checkDisplay = i;
            }
        }

        var room1Adult = $('#room1TextAdult').val();
        var room1Child = $('#room1TextChild').val();

        var room2Adult = $('#room2TextAdult').val();
        var room2Child = $('#room2TextChild').val();

        var room3Adult = $('#room3TextAdult').val();
        var room3Child = $('#room3TextChild').val();

        var room4Adult = $('#room4TextAdult').val();
        var room4Child = $('#room4TextChild').val();

        if (checkDisplay == 1) {
            totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child));
        }
        if (checkDisplay == 2) {
            totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child) + parseInt(room2Adult) + parseInt(room2Child));
        }

        if (checkDisplay == 3) {
            totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child) + parseInt(room2Adult) + parseInt(room2Child) + parseInt(room3Adult) + parseInt(room3Child));
        }

        if (checkDisplay == 4) {
            totalPerson = parseInt(parseInt(room1Adult) + parseInt(room1Child) + parseInt(room2Adult) + parseInt(room2Child) + parseInt(room3Adult) + parseInt(room3Child) + parseInt(room4Adult) + parseInt(room4Child));
        }

        var _selectText = parseInt(checkDisplay) + ' Room ' + parseInt(totalPerson) + ' Person';
        $('#select_room').val(_selectText);
    });
});


///////////////////////////////////////////////////////////




/*$(document).ready(function(){
	$("#guestform").click(function(){
		$(".guests").toggle();
	});
	$("#close-div").click(function(){
		$(".guests").hide();
	});
	
	  var room_form_index=$("#rooms").val();
	  var age_form_index=0;
	    $("#rooms").change(function(){
	     var cust_indexs = this.value;
	    // alert("cust_indexs:"+cust_indexs);
	     // alert("room_form_index:"+room_form_index);
	   
	      // if(cust_indexs>room_form_index){
	      // alert("inside");
	     var   row_index=cust_indexs-room_form_index;
	     //  }else{
	    //	   row_index=room_form_index-cust_indexs;
	     //  }
	       if(row_index>0){
	     // alert("loop"+row_index);
	      for (i = 1; i <= row_index; i++) {
	     // alert("start"+i);
	       //var cust_index=room_form_index+(i-1);
	       var cust_index=Number(room_form_index)+Number(i-1);
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
	     room_form_index=Number(row_index)+Number(room_form_index); 
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
     $("#guestform").val(text);
    
}); 
								    
	
});*/

$(document).ready(function(){
	room_form_index=$("#rooms").val();
	//alert(room_form_index);
	removeFun(room_form_index-1);
	var room_form_index_new=0;
	//console.log("Total room "+room_form_index_new);
	 var chAge=0; 
	  
	  
	  
	/*  $("#addroom").click(function()
		{ 																 
		  room_form_index=$("#rooms").val();
		  removeFun(room_form_index);
		  if(room_form_index <5){
	     var cust_indexs = room_form_index;
	     var   row_index=room_form_index;
	       if(row_index>0){
	       var cust_index=Number(room_form_index);
	        $('#cust'+(Number(cust_index)-1)).after($("#cust"+(Number(cust_index)-1)).clone().attr("id","cust" + cust_index));
	        $("#cust"+ cust_index).find("#roomNo0").attr("id","roomNo"+(cust_index));
	    
			// var chAge=0;
	        $("#cust" + cust_index + " select").each(function(){
	            if(this.id.indexOf('adults') != -1){
	            $(this).attr("name","rooms[" + cust_index+"].adults");
	            $(this).attr("id","rooms" + cust_index+"adults");
	            }else if(this.id.indexOf('children') != -1){
	            	 $(this).attr("name","rooms[" + cust_index+"].children["+chAge+"].age");
			            $(this).attr("id","rooms" + cust_index+"children["+chAge+"].age");
			           chAge=chAge+1;
	            }else{
	            	  $(this).attr("name","rooms[" + cust_index+"].child");
			            $(this).attr("id","rooms" + cust_index+"child");
	            }
	            
	            
	        });
	        
	        
	        $("#cust"+cust_index).find(".right").attr("id","childAge"+cust_index); 
	        
	         $("#childAge"+ cust_index).find("#age0").attr("id","age"+(cust_index));
	         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"0").attr("id",""+(cust_index)+"0");
	         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"1").attr("id",""+(cust_index)+"1");
	         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"2").attr("id",""+(cust_index)+"2");
	         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"3").attr("id",""+(cust_index)+"3");
	         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"4").attr("id",""+(cust_index)+"4");
	        
	         $("#childAge" + cust_index).css("display","inline");
	          var chAge=0;
	          $("#childAge" + cust_index + " select").each(function(){															           
	        	  $(this).attr("name", "rooms[" + cust_index + "].children[" + chAge + "].age");
                    $(this).attr("id", "rooms" + cust_index + "children[" + chAge + "].age");
                    chAge = chAge + 1;
	            });
	            
	     room_form_index=Number(1)+Number(room_form_index); 
	     $("#rooms").val(room_form_index);
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
		     
		     $("#rooms"+(Number(room)-1)+"adults").val(1);	
		     $("#rooms"+(Number(room)-1)+"child").val(0);
		     
		     addAgeOnLoad(0,(Number(room)-1));
		    
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
  $("#guestform").val(text);
    
	  }
								    
});*/
	  
	  
	  $("#addroom").click(function()
				{ 																 
				  room_form_index=$("#rooms").val();
				  removeFun(room_form_index);
				  if(room_form_index <5){
			     var cust_indexs = room_form_index;
			     var   row_index=room_form_index;
			       if(row_index>0){
			       var cust_index=Number(room_form_index);
			        $('#cust'+(Number(cust_index)-1)).after($("#cust"+(Number(cust_index)-1)).clone().attr("id","cust" + cust_index));
			        $("#cust"+ cust_index).find("#roomNo0").attr("id","roomNo"+(cust_index));
			    
					// var chAge=0;
			        $("#cust" + cust_index + " select").each(function(){
			            if(this.id.indexOf('adults') != -1){
			            $(this).attr("name","rooms[" + cust_index+"].adults");
			            $(this).attr("id","rooms" + cust_index+"adults");
			            }else if(this.id.indexOf('children') != -1){
			            	 $(this).attr("name","rooms[" + cust_index+"].children["+chAge+"].age");
					         $(this).attr("id","rooms" + cust_index+"children["+chAge+"].age");
					         chAge=chAge+1;
			            }else{
			            	  $(this).attr("name","rooms[" + cust_index+"].child");
					          $(this).attr("id","rooms" + cust_index+"child");
			            }
			            
			            
			        });
			        
			        
			        $("#cust"+cust_index).find(".right").attr("id","childAge"+cust_index); 
			        
			         $("#childAge"+ cust_index).find("#age"+(cust_index-1)).attr("id","age"+(cust_index));
			         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"0").attr("id",""+(cust_index)+"0");
			         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"1").attr("id",""+(cust_index)+"1");
			         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"2").attr("id",""+(cust_index)+"2");
			         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"3").attr("id",""+(cust_index)+"3");
			         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"4").attr("id",""+(cust_index)+"4");
			         
			         
			        
			         $("#age"+cust_index).css("display","none");
			         $("#childAge" + cust_index).css("display","inline");
			          var chAge=0;
			          $("#childAge" + cust_index + " select").each(function(){															           
			        	  $(this).attr("name", "rooms[" + cust_index + "].children[" + chAge + "].age");
		                    $(this).attr("id", "rooms" + cust_index + "children[" + chAge + "].age");
		                    $(this).val(1);
		                   // $(this).attr("value", "0");
		                    /*$("#rooms" + cust_index + "children[" + chAge + "].age option[value='1']").attr("selected", true);
		                    $("rooms" + cust_index + "children[" + chAge + "].age").val("1");
		                    console.log($("rooms" + cust_index + "children[" + chAge + "].age").val());*/
		                  //  console.log($(this).val());
		                    chAge = chAge + 1;
			            });
			            
			     room_form_index=Number(1)+Number(room_form_index); 
			     $("#rooms").val(room_form_index);
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
				     
				     $("#rooms"+(Number(room)-1)+"adults").val(1);	
				     $("#rooms"+(Number(room)-1)+"child").val(0);
				     
				     addAgeOnLoad(0,(Number(room)-1));
				    
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
	         $("#guestform").val(text);
	        
			  }
										    
		});
	  
	  $("#removeroom").click(function(){
		  room_form_index=$("#rooms").val();
		  //alert(room_form_index);
		  
		  if(room_form_index>1){
			  
			  $("#cust" + (Number(room_form_index)-1)).remove();
			  $("#childAge" + (Number(room_form_index)-1)).remove();
			  room_form_index=Number(room_form_index)-Number(1); 
			     $("#rooms").val(room_form_index);
			 // alert($("#rooms").val);
			  var room=$("#rooms").val();
		       //alert("room:"+room);	
		      
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
         $("#guestform").val(text); 
			  
	 }  
		removeFun(room_form_index-1);	  
		
	});
		  
});

function addAge(kk){
	
    var childNo = kk.value;
   // alert("room :"+kk);
  // alert("room id:"+kk.id);
  // alert("childNo:"+childNo);
  var str2 = kk.id.replace ( /[^\d.]/g, '' ); 
  var room = parseInt(str2);
   //alert(room);
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
     $("#guestform").val(text);
    
   }
   
   
   function addAgeOnLoad(kk,pp){
    var childNo = kk;
  var room = pp;
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
     $("#guestform").val(text);
    
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
     $("#guestform").val(text);
   }
   
   
   function removeFun(roomcount)
   {
	   
	   if(roomcount == '0')
		   {
		   $("#removeroom").css({display: "none"});
		   }
	   else
		   {
		   $("#removeroom").css({display: "block"});
		   }
    //removeroom
   };


/*function addAge(kk){
    var childNo = kk.value;
  // alert("room id:"+kk.id);
//    alert("childNo:"+childNo);
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
     $("#guestform").val(text);
    
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
	     $("#guestform").val(text);
	   }


*/























$(document).ready(function(){
	
	  var apiKey = "X74hmOunUSNWzzCjBEr5p8LJCX0YQOik";   
	    var language = "en";
 	    navigator.geolocation.watchPosition(callback);
		function callback(position){

	     var GEOCODING = '//maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';
	    
	        $.getJSON(GEOCODING).done(function(location) {
	        	if($('#froCity').val()==""){
	        		
	            var city=location.results[0].address_components[5].long_name;
	            var country=location.results[0].address_components[6].long_name;
	            angular.element(document.getElementById('cffId')).scope().getDeal(position.coords.latitude,position.coords.longitude);
	            $('#froCity').addClass('input_cont x');
	        	}       
	            
	        })
	        
		}

});



function checkMonth(dateString)      
{
	//console.log("enteredMS:"+dateString.replace(/-/g, '/'));
   var enteredMS = new Date(dateString.replace(/-/g, '/')).getTime();
  // console.log("enteredMS:"+enteredMS);
   var currentMS = new Date().getTime();
   var twoMonthMS = new Date(new Date().setMonth(new Date().getMonth() + 2)).getTime();

   if(enteredMS >= currentMS)
   {
      return true;
   }
   return false;
}


var myapp = angular.module("Cffhome", ["LocalStorageModule"]);
! function() {
	myapp.controller('homeCtrl',['$http','$window','$scope','localStorageService','$timeout',function($http,$window,$scope,localStorageService, $timeout){
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
			  // console.log(response);
	    		   if(!response.includes("DOCTYPE")){
	    		if(response != 'none'){
	    		$scope.froCity=response;
	    	//	$scope.returnToCity=response;
	    	//	$scope.PostDealss(response);
			    }
	    		
	    		   }else{
	             	  $('#froCity').removeClass('input_cont x');
	             }
			  })
				.error(function(error){
				
				})
				
		  };
			

			 $scope.convertToDate = function (stringDate){
				    var dateOut = new Date(stringDate);
				    dateOut.setDate(dateOut.getDate());
				    return dateOut;
				  };
			 
				  $scope.leadingZero = function(value) {
					  if (value < 10) {
					    return "0" + value.toString();
					  }
					  return value.toString();
					}
				  
			 $scope.CarDealSearch = function(city, cityCode, carType, pickupdate, pickuptime, dropoffdate, dropofftime, vendorCode){
				 
				 var currDate = new Date();
				 currDate.setMonth(currDate.getMonth()+1);
				 pickuptime = '10:00';
				 dropofftime = '10:00';
				 
				 var addedPickDate = $scope.leadingZero(currDate.getMonth()+1)+'-'+$scope.leadingZero(currDate.getDate())+'-'+currDate.getFullYear();
				 currDate.setDate(currDate.getDate()+3);
				 var addedDropDate = $scope.leadingZero(currDate.getMonth()+1)+'-'+$scope.leadingZero(currDate.getDate())+'-'+currDate.getFullYear();
				 
				 $('#pickLocation').val(city)
				 $('#vehicleType').val(carType)
				 $('#pickDate').val(addedPickDate)
				 $('#pickTime').val(pickuptime)
				 $('#dropDate').val(addedDropDate)
				 $('#dropTime').val(dropofftime)
				 $('#vendorCode').val(vendorCode)
				 $('#pickUpLocationCode').val(cityCode)
				 $('#dropOffLocationCode').val(cityCode)
				 $('#driverAge').val("21");
				 
				 carSearchSubmit();
			 }
				  $scope.submitSearch	 = function(id) {
					
					  if(id.stayCity  === undefined ){
					  
					    $scope.froCity=id.OriginAirport.CityName+"("+id.OriginAirport.AirportCode+"), "+id.OriginAirport.AirportName+", "+id.OriginAirport.Country;
				        $scope.toCity=id.DestinationAirport.CityName+"("+id.DestinationAirport.AirportCode+"), "+id.DestinationAirport.AirportName+", "+id.DestinationAirport.Country;
				       
				        
				        if(checkMonth(id.TravelDate)){
		 			        $scope.departDate=id.TravelDate;
		 			       }else{
		 			    	  var mx = 2; 
						        var minDate = new Date();
						        minDate.setDate(minDate.getDate() + mx);
						        var dt_to = $.datepicker.formatDate('mm-dd-yy', minDate);
		 			    	   $scope.departDate=dt_to;
		 			       }
				        
				        
				       
				        
				     //   $scope.departDate=id.TravelDate;
				     //   $scope.returnDate=id.ReturnDate;
				        $scope.airlines="All";
				        $scope.FlexibleSearch="false";
				       // alert("aaa"+id.TravelDate);
				        $scope.showSomething = function(input) {
				            return input == "true" ? "2" : "1";
				        };
				       $scope.tripType= $scope.showSomething(id.SearchReturnFlight);
				      
				       if(id.SearchReturnFlight == "true"){
				    	   ddlTypejourneyChange(2);
				           angular.element(document.getElementById('returnDate'))[0].disabled = false;
				           if(checkMonth(id.ReturnDate)){
			 			        $scope.returnDate=id.ReturnDate;
			 			       }else{
			 			    	  var mx = 9; 
							        var minDate = new Date();
							        minDate.setDate(minDate.getDate() + mx);
							        var dt_to = $.datepicker.formatDate('mm-dd-yy', minDate);
			 			    	   $scope.returnDate=dt_to;
			 			       }
				       }else{
				    	   ddlTypejourneyChange(1);
				    	   angular.element(document.getElementById('returnDate'))[0].disabled = true;
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
				        
				        
				  };
				 
				  $scope.newarr = [];
				
				if(localStorageService.get("lkhistory") != null){
		             $scope.sessQueryList=localStorageService.get("lkhistory");
		           //  console.log($scope.sessQueryList);
				
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
			     //   console.log($scope.searchQueryList);	  
				//
			        $scope.newarrs = [];
			      
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
			      //  console.log($scope.newarr);	
			     //   console.log("length:"+$scope.newarr.length);
			        var index=$scope.newarr.length;
			       
			       
			       // for(i=0;i<$scope.newarr.length; i++){
			        	 angular.forEach($scope.newarr, function(item) {
			        	//console.log($scope.lastItem);
				       // console.log($scope.hotelItem);
				      //  console.log("fL:"+$scope.lastItem.length);
				      //  console.log("index inside"+index);
			      //  if($scope.lastItem.length == 0){
			        	// console.log("Fli inside");
			        	 $scope.currentItem = item;
			        	// console.log($scope.currentItem);
			        	  if($scope.currentItem.CabinType === undefined){
			        		  
			        	  }else{
			        		  $scope.lastItem = item;
			        	  }
			        	
			       // }	
			       // if($scope.hotelItem.length == 0){
			        	
			        	// $scope.currentItem = item;
			        	  if($scope.currentItem.stayCity === undefined){
			        		  
			        	  }else{
			        		  $scope.hotelItem = item;
			        	  }
			       // }
			        index=index-1;
			      
			        });
	                
			      //  console.log("Flight:"+$scope.lastItem);
			       // console.log("Hotel:"+$scope.hotelItem);
			       
			        if($scope.hotelItem.length != 0){
			        $scope.stayCity=$scope.hotelItem.stayCity;
			        if(checkMonth($scope.hotelItem.checkInDate)){
			        	 $scope.checkInDate=$scope.hotelItem.checkInDate;
					        $scope.checkOutDate=$scope.hotelItem.checkOutDate;
				       }else{
				    	   var ch = 2;    
				            checkInDate = new Date();
				            checkInDate.setDate(checkInDate.getDate() + ch); 
				           
				             var xs = 7; 
						     returnsDate = new Date();
						     returnsDate.setDate(returnsDate.getDate() + xs);
					         var checkInDate_from = $.datepicker.formatDate('mm-dd-yy', checkInDate);
				             var dt_from = $.datepicker.formatDate('mm-dd-yy', returnsDate);
				             $scope.checkInDate=checkInDate_from;
						     $scope.checkOutDate=dt_from;
				              
				       }
			       
			        $scope.rooms="1";
			        $scope.rooms0adult="1";
			        $scope.rooms0child="0";
			           
			        }else{
			        	// console.log("Hotel:"+$scope.hotelItem);
			        	    var ch = 2;    
				            checkInDate = new Date();
				            checkInDate.setDate(checkInDate.getDate() + ch); 
				           
				             var xs = 7; 
						     returnsDate = new Date();
						     returnsDate.setDate(returnsDate.getDate() + xs);
					         var checkInDate_from = $.datepicker.formatDate('mm-dd-yy', checkInDate);
				             var dt_from = $.datepicker.formatDate('mm-dd-yy', returnsDate);
				             $scope.checkInDate=checkInDate_from;
						     $scope.checkOutDate=dt_from;
				              
				            		    	   
				    	   $scope.rooms="1";
					        $scope.rooms0adult="1";
					        $scope.rooms0child="0";
			        }
			        
			        
			        
			     //   console.log($scope.lastItem);
			       if($scope.lastItem.length != 0){ 
			        
			    //   console.log($scope.lastItem.Adults);
			        $scope.froCity=$scope.lastItem.OriginAirport.CityName+"("+$scope.lastItem.OriginAirport.AirportCode+"), "+$scope.lastItem.OriginAirport.AirportName+", "+$scope.lastItem.OriginAirport.Country;
			        $scope.toCity=$scope.lastItem.DestinationAirport.CityName+"("+$scope.lastItem.DestinationAirport.AirportCode+"), "+$scope.lastItem.DestinationAirport.AirportName+", "+$scope.lastItem.DestinationAirport.Country;
			       // console.log("Date is:"+checkMonth($scope.lastItem.TravelDate));
			        angular.element(document.getElementById("froCity")).addClass("input_cont x");
                    angular.element(document.getElementById("toCity")).addClass("input_cont x");
			        if(checkMonth($scope.lastItem.TravelDate)){
			        $scope.departDate=$scope.lastItem.TravelDate;
			       }else{
			    	   var mx = 2; 
				        var minDate = new Date();
				        minDate.setDate(minDate.getDate() + mx);
				        var dt_to = $.datepicker.formatDate('mm-dd-yy', minDate);
			    	   $scope.departDate=dt_to;
			       }
			      
			      //  console.log($scope.lastItem.TravelDate);
			     /*   var  TravelDate = new Date();
			        $scope.departDate=$.datepicker.formatDate('mm-dd-yy', new Date());*/
			     //   console.log($scope.departDate);
			        $scope.airlines="All";
			        $scope.FlexibleSearch="false";
			        $scope.showSomething = function(input) {
			            return input == "true" ? "2" : "1";
			        };
			       $scope.tripType= $scope.showSomething($scope.lastItem.SearchReturnFlight);
			      // console.log("tripType:"+$scope.tripType);
			            if ($scope.tripType == "2") {
			            	 if(checkMonth($scope.lastItem.ReturnDate)){
			 			        $scope.returnDate=$scope.lastItem.ReturnDate;
			 			       }else{
			 			    	  var mx = 9; 
							        var minDate = new Date();
							        minDate.setDate(minDate.getDate() + mx);
							        var dt_to = $.datepicker.formatDate('mm-dd-yy', minDate);
			 			    	   $scope.returnDate=dt_to;
			 			       }
			    	            // $scope.returnDate=$scope.lastItem.ReturnDate;
			    	             $scope.tripType= "2";  
			    	             angular.element(document.getElementById('tripType'))[0].value = "2";
			    	             ddlTypejourneyChange(2);
			    	            // $("input[name=optradio][value='rt']").prop("checked",true);
			    	             $('#rt').attr('checked','checked');
							}
							else if ($scope.tripType == "1") {
											
								    ddlTypejourneyChange(1);
				                    $scope.tripType= "1";  
				                    angular.element(document.getElementById('tripType'))[0].value = "1";
				                   // $("input[name=optradio][value='ow']").prop("checked",true);
				                    $('#ow').attr('checked','checked');
							}
			       
			      
			       
			       
			        $scope.cabinClass=$scope.lastItem.CabinType;
			        
			        $scope.adult=String($scope.lastItem.Adults);
			        $scope.child=String($scope.lastItem.Children);
			        $scope.infant=String($scope.lastItem.Infants);
			        $scope.infantWs=String($scope.lastItem.InfantWs);
			        
			        var sv = String($scope.lastItem.Adults);
		            var sv1 = String($scope.lastItem.Children); 
		            var sv2 = String($scope.lastItem.Infants);
		            var sv3 = String($scope.lastItem.InfantWs);
		          
		            var total = parseInt(sv) + parseInt(sv1) + parseInt(sv2)+ parseInt(sv3);
		            
		            if (total > 1) {
		            	 $("#person").val(total+ " Travelers");
		        	} else {
		        		 $("#person").val(total+ " Adult"); 
		        	}
			               
				}else{
					  $scope.tripType= "2";
					     angular.element(document.getElementById('tripType'))[0].value = "2";
					     //angular.element(document.getElementById('returnDate'))[0].disabled = false;
					   
					     $scope.airlines="All";
					     $scope.FlexibleSearch="false";
					     $scope.cabinClass="Economy";
				        
				        $scope.adult="1";
				        $scope.child="0";
				        $scope.infant="0";
				        $scope.infantWs="0";
				        
				        var mx = 2; 
				        var minDate = new Date();
				        minDate.setDate(minDate.getDate() + mx);
				        var x = 11; 
				        var  maxDate = new Date();
				        maxDate.setMonth(maxDate.getMonth() + x);
				        var xs = 7; 
				        returnsDate = new Date();
				        returnsDate.setDate(returnsDate.getDate() + xs);
				               
				        var dt_to = $.datepicker.formatDate('mm-dd-yy', minDate);
				   		var dt_from = $.datepicker.formatDate('mm-dd-yy', returnsDate);
				   		$scope.departDate=dt_to;
				    	$scope.returnDate=dt_from;
				    	   
				    	   
				}
			       // console.log($scope.adult, typeof $scope.adult);
				}else{
					     $scope.tripType= "2";
					     angular.element(document.getElementById('tripType'))[0].value = "2";
					     
					     $scope.airlines="All";
					     $scope.FlexibleSearch="false";
					     $scope.cabinClass="Economy";
				        
				        $scope.adult="1";
				        $scope.child="0";
				        $scope.infant="0";
				        $scope.infantWs="0";
				        
				        var mx = 2; 
				        var minDate = new Date();
				        minDate.setDate(minDate.getDate() + mx);
				        var x = 11; 
				        var  maxDate = new Date();
				         maxDate.setMonth(maxDate.getMonth() + x);
				               
				               var xs = 7; 
				               returnsDate = new Date();
				               returnsDate.setDate(returnsDate.getDate() + xs);
				                 
				   			  var dt_to = $.datepicker.formatDate('mm-dd-yy', minDate);
				   			  var dt_from = $.datepicker.formatDate('mm-dd-yy', returnsDate);
				   			
				   		   $scope.departDate=dt_to;
				    	   $scope.returnDate=dt_from;
				    	   
				    	   
				    	   /**Hotel Setting***/
				    	   
				    	    var ch = 2;    
				            checkInDate = new Date();
				           checkInDate.setDate(checkInDate.getDate() + ch); 
				             var checkInDate_from = $.datepicker.formatDate('mm-dd-yy', checkInDate);
				             $scope.checkInDate=checkInDate_from;
						        $scope.checkOutDate=dt_from;
				    	   $scope.rooms="1";
					        $scope.rooms0adult="1";
					        $scope.rooms0child="0";
				                
				}
			      		        
			  
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
			   
			
		}]);
	
}();

//M

$('#ui-datepicker-div').on('mouseenter', 'td', function() {
	
           var startDate = $('#departDate').datepicker("getDate");
           
           if(startDate==null){
            startDate = $('#checkIn').datepicker("getDate");
           }
		   if(startDate==null){
           if (startDate) {
               var cell = $(this);
               cell.addClass('between-date');
               var hover_day = $(this).text();
               var hover_month = $(this).attr("data-month");
               var hover_year = $(this).parent().siblings('td').attr("data-year");
               $('#ui-datepicker-div tr td').removeClass('between-date');
                if(hover_day >= startDate.getDate() || hover_month >= startDate.getMonth()){
                
                 
                  if(hover_month >= startDate.getMonth()){
                   $('tr td a').each(function (index, value){
                    var month_match = parseInt($(this).text());
					var pppp = $(this).parent().data('month');
					  if(month_match <= hover_day && pppp <= hover_month){
                       $(this).parent().addClass('between-date');
                      }
					  if(pppp < hover_month){
						  $(this).parent().addClass('between-date');
					  }
                    });
                 }
                }
           }
           }

       });



///////////////////////////////////// CAR JS START ///////////////////////////////////////
function pnfTest(){
	var searchDestinationId = document.getElementById("destinationSearchId").value;
	//var res = searchDestinationId.substring(searchDestinationId.search("(")+1, 3);
	var searchAirportCode = document.getElementById("toCity").value;
	var airportcode = searchAirportCode.split("(")[1].substring(0,3)
	var validatePNF = $("#pnfSearch").validate({
		rules:{
			location:{
				required:true,
				minlength: 3
			}
		},
		messages:{}
	});
	var rndId = randomString(12);
	$('form#pnfSearch').attr({action: '/pnfSearch/id/'+rndId});
	/*if(searchDestinationId == 'destination_search'){
		
		$('form#pnfSearch').attr({action: '/pnfSearch/id/'+rndId});
	} else {
	
		$('form#pnfSearch').attr({action: 'pnfSearch/id/'+rndId});
	}*/

	$('form#pnfSearch').submit();
	
	return true;
}

function carSearchSubmit(){
	
	var searchDestinationId = document.getElementById("destinationSearchId").value;
	
	var validateCar = $("#carSearch").validate({
		rules:{
			pickLocation : {
				required : true,
				minlength : 3
			},
			pickDate: "required",
			dropDate: "required",
			driverAge: "required"
		},
		messages: {
			pickLocation : "",
			pickDate: "",
			dropDate: "",
			driverAge: ""
		}
	});
	
	var carStartDate = $('#pickDate').val();
	var carEndDate = $('#dropDate').val();
	
	var carStartTime = $('#pickTime').val();
	var carEndTime = $('#dropTime').val();
	
	  if((carStartDate == carEndDate) && (carStartTime >= carEndTime)){
		  $("#carError").html("<i class='fa fa-exclamation-triangle'></i> Drop time should be greater than Pick-up time.");
		  return false;
	  }
	
	var rndId = randomString(12);
	if(searchDestinationId == 'destination_search'){
	
		$('form#carSearch').attr({action: '/carSearch/id/'+rndId});
	} else {
	
		$('form#carSearch').attr({action: 'carSearch/id/'+rndId});
	}

	$('form#carSearch').submit();
}

function dropOffLocShow(){
	$("#dropOffLocDiv").slideToggle();
}
function advaOptionsShow(){
	$("#advaOptionsDiv").slideToggle();
}

function driverAgeShow(){
	$("#driverAgeDiv").slideToggle();
}
function movePaymentPage(uniqueId) {
    window.location = "/parknfly/payment/"+uniqueId;
  };
  
/////////////////////////////////// CAR JS END ///////////////////////////////////////

