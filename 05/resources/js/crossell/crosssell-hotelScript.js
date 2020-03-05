'use strict';
  function split(t) {
    return t.split(/,\s*/);
}

function extractLast(t) {
    return split(t).pop();
}

function monkeyPatchAutocomplete() {
    var oldFn = $.ui.autocomplete.prototype._renderItem;
    $.ui.autocomplete.prototype._renderItem = function(ul, item) {
        var re = new RegExp("^" + this.term, "i");
        var t = item.label.replace(re, "<span>" + this.term + "</span>");
        return $("<li></li>").data("item.autocomplete", item).append("<a>" + t + "</a>").appendTo(ul)
    }
}



//(function(){
	
	$(document).ready(function(){
	monkeyPatchAutocomplete();
      
    var checkInDate = new Date();
    checkInDate.setDate(checkInDate.getDate() + 2); 
    var maxDate = new Date();
	maxDate.setMonth(maxDate.getMonth() + 11);
    
	var d = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
    
	var nOm;
  	$(window).resize(function() {
      //clearTimeout(nOm);
      if ($(window).width() < 768) {
        nOm = 1;
        $("#departDate").datepicker("option", "numberOfMonths", nOm);
      } else {
        nOm = 2;
        $("#departDate").datepicker("option", "numberOfMonths", nOm);
      }
    }).trigger("resize");
    
    $("#checkInDate").datepicker({
        changeMonth: false,
        changeYear: false,
        dateFormat: "mm-dd-yy",
        showButtonPanel: false,
        minDate: checkInDate,
        maxDate: maxDate,
        numberOfMonths: nOm,
        onClose: function() {
            var a = $("#checkInDate").datepicker("getDate");
            day = a.getDate(), year = a.getFullYear();
            var b = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            month = b[a.getMonth()];
            var c = new Array(7);
            c[0] = "MON", c[1] = "TUE", c[2] = "WED", c[3] = "THU", c[4] = "FRI", c[5] = "SAT", c[6] = "SUN";
            var f = $("#checkOutDate").datepicker("getDate");
            if (null != a && "" != a) {
            	
            	var date_diff = Math.ceil((a.getTime() - Date.parse(today)) / 86400000);
                var maxDatedrop=date_diff+30+'d';
                
                $("#checkOutDate").datepicker("change", {
                    minDate: new Date(a),
                    maxDate: maxDatedrop
                });
                var g = new Date(a.getFullYear(), a.getMonth(), a.getDate());
                if (null != f) {
                    var h = new Date(f.getFullYear(), f.getMonth(), f.getDate());
                    g > h && ($("#checkOutDate").val($.datepicker.formatDate("mm-dd-yy", new Date(g))), $("#checkOutDate").datepicker("show"))
                } else $("#checkOutDate").val($.datepicker.formatDate("mm-dd-yy", new Date(g))), $("#checkOutDate").datepicker("show")
            }
           
        }
    });
    var hotelSelectDate1 = $("#checkInDate").datepicker("getDate");
    var hotelDateMin = new Date(hotelSelectDate1.getFullYear(), hotelSelectDate1.getMonth(), hotelSelectDate1.getDate());
    var hotelDateMax = new Date(hotelSelectDate1.getFullYear(), hotelSelectDate1.getMonth(), hotelSelectDate1.getDate());
    hotelDateMax.setMonth(hotelDateMin.getMonth()+1);
    $("#checkOutDate").datepicker({
        changeMonth: false,
        changeYear: false,
        dateFormat: "mm-dd-yy",
        showButtonPanel: false,
        minDate: hotelDateMin,
        maxDate: hotelDateMax,
        numberOfMonths: nOm,
        onClose: function() {
            var a = $("#checkInDate").datepicker("getDate"),
                b = $("#checkOutDate").datepicker("getDate");
            day = b.getDate(), year = b.getFullYear();
            var c = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            month = c[b.getMonth()];
            var d = new Array(7);
            d[0] = "MON", d[1] = "TUE", d[2] = "WED", d[3] = "THU", d[4] = "FRI", d[5] = "SAT", d[6] = "SUN";
           
           
        }
    });
    var t = !0, e = !0;
    $("#stayCity").autocomplete({
        source:function(t, e) {
            $.getJSON("/get_city_list", {
                term:extractLast(t.term),
                type:"hotel"
            }, e);
        },
        search:function() {
            var t = extractLast(this.value);
            return t.length < 3 ? !1 :void 0;
        },
        focus: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            var hl=cityImage.split('</i>')[0]+'</i>';
            var h=cityImage.split('</i>')[1];
            var hdn=h.split("<span style='display: none;'>")[0];
            var hid=(h.split("<span style='display: none;'>")[1]).split("</span>")[0];
            $('#locationid').val(hid);
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            selectTo = !1;
            this.value = hdn;            
            return !1
        },
        select: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            var hl=cityImage.split('</i>')[0]+'</i>';
            var h=cityImage.split('</i>')[1];
            var hdn=h.split("<span style='display: none;'>")[0];
            var hid=(h.split("<span style='display: none;'>")[1]).split("</span>")[0];
            
            $('#locationid').val(hid);
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            selectTo = !1;
            this.value = hdn;            
            return !1
        }
    }).blur(function() {
        /*if (e) {
            $("#stayCity").val($("ul#ui-id-1 li:first a").text());
           var t = $("ul#ui-id-1 li:first a").text(), i = t.indexOf("("), r = t.indexOf(")");
           t = t.substring(i + 1, r);
             
           
        }*/
    });
    
    $("#addInputRoom").click(function(){
    	var room = $("#room").val();
    	if(room < 5){
    	var roomDiv = "room"+room+"";
    	room = Number(room)+Number(1);
    	var innerHtmlValue = addRoomElements(room);
    	$("#"+roomDiv).after(innerHtmlValue);
    	$("#room").val(room);
    //	}
    //	if(room <= 5){
    	 $(".addAdults"+room).click(function(){
    		  var roomVal = $(this).data('room');
    		  var indexVal = roomVal-1;
    	    	var adult = $("#rooms"+indexVal+"-adult").val();
    	    	if(adult < 5){
    	    	adult = Number(adult)+Number(1);
    	    	$("#rooms"+indexVal+"-adult").val(adult);
    	    	$("#rooms"+indexVal+"_adults").val(adult);
    	    	}
    	    });
    	 
    	 $(".addChildAges"+room).click(function(){
    	    	var roomVal = $(this).data('room');
    	    	var indexVal = roomVal-1;
    	    	var childVal = $("#rooms"+indexVal+"-child").val();
    	    	childVal = Number(childVal)+Number(1);
    	    	if(childVal <= 5){
    	    	var childDiv = "childAgeRoom"+roomVal;
    	    	$("#rooms"+indexVal+"-child").val(childVal);
    	    	$("#rooms"+indexVal+"_child").val(childVal);
    	    	var innerHtmlValue = childAgeBlock(childVal,roomVal);
    	    	$("."+childDiv).append(innerHtmlValue);
    	    	}
    	    	
    	    });
    	 
    	 $(".subAdults"+room).click(function(){
     		var roomVal = $(this).data('room');
   		  	var indexVal = roomVal-1;
         	var adult = $("#rooms"+indexVal+"-adult").val();
         	if(adult > 1){
         	adult = Number(adult)-Number(1);
         	$("#rooms"+indexVal+"-adult").val(adult);
         	$("#rooms"+indexVal+"_adults").val(adult);
         	}
         });
     	
     	$(".removeChildAges"+room).click(function(){
 	    	var roomVal = $(this).data('room');
 	    	var indexVal = roomVal-1;
 	    	var childVal = $("#rooms"+indexVal+"-child").val();
 	    	if(childVal > 0){
 	    	var childDiv = "childAgeRoom"+roomVal;
 	    	//var innerHtmlValue = childAgeBlock(childVal,roomVal);
 	    	var childRemove = "room"+roomVal+"child"+childVal+"";
 	    	$("."+childDiv).find("#"+childRemove).remove();
 	    	childVal = Number(childVal)-Number(1);
 	    	$("#rooms"+indexVal+"-child").val(childVal);
 	    	$("#rooms"+indexVal+"_child").val(childVal);
 	    	}
 	    	
 	    });
     	
     	$(".guest").click(function(){
        	var room = $("#room").val();
        	var adultVal = 0;
        	var childVal = 0;
        	for (var int = 0; int < room; int++) {
        		
        		 adultVal = Number(adultVal)+Number($("#rooms"+int+"-adult").val());
            	 childVal = Number(childVal)+Number($("#rooms"+int+"-child").val());
            	
    		}
        	var displayText  = room+" Rooms "+adultVal+" Adults "+childVal+" Child";
        	$(".showRoom").html(displayText);
        	$("#guest").val(displayText);
        });
     	  
    	}
    	
    });
    
    $("#subtInputRoom").click(function(){
    	var room = $("#room").val();
    	if(room > 1){
    		var roomDiv = "room"+room+"";
    		room = Number(room)-Number(1);
    		//var innerHtmlValue = addRoomElements(room);
        	$("#"+roomDiv).remove();
        	$("#room").val(room);
    	}
    	
    });
   
    $(".addAdultsOnLoad").click(function(){
    	var adult = $("#rooms0-adult").val();
    	if(adult < 5){
    	adult = Number(adult)+Number(1);
    	$("#rooms0-adult").val(adult);
    	}
    });
    
    $(".subAdultsOnLoad").click(function(){
    	var adult = $("#rooms0-adult").val();
    	if(adult > 1){
    	adult = Number(adult)-Number(1);
    	$("#rooms0-adult").val(adult);
    	}
    });
    	
    $(".addChildAgesOnload").click(function(){
    	var roomVal = $(this).data('room');
    	var indexVal = roomVal-1;
    	var childVal = $("#rooms"+indexVal+"-child").val();
    	childVal = Number(childVal)+Number(1);
    	if(childVal <= 5){
    	var childDiv = "childAgeRoom"+roomVal;
    	$("#rooms"+indexVal+"-child").val(childVal);
    	var innerHtmlValue = childAgeBlock(childVal,roomVal);
    	$("."+childDiv).append(innerHtmlValue);
    	}
    	
    });
    
    $(".removeChildAgesOnload").click(function(){
    	
    	var roomVal = $(this).data('room');
    	var indexVal = roomVal-1;
    	var childVal = $("#rooms"+indexVal+"-child").val();
    	if(childVal > 0){
    	var childDiv = "childAgeRoom"+roomVal;
    	//var innerHtmlValue = childAgeBlock(childVal,roomVal);
    	var childRemove = "room"+roomVal+"child"+childVal+"";
    	$("."+childDiv).find("#"+childRemove).remove();
    	childVal = Number(childVal)-Number(1);
    	$("#rooms"+indexVal+"-child").val(childVal);
    	}
    	
    });

    $(".guest").click(function(){
    	var room = $("#room").val();
    	/*var roomVal = $(this).data('room');
    	var indexVal = Number(roomVal)-Number(1);
    	var adultVal = $("#rooms"+indexVal+"-adult").val();
    	var childVal = $("#rooms"+indexVal+"-child").val();
    	adultVal = Number(adultVal)+Number(room)-Number(1);
    	var displayText  = room+" Rooms "+adultVal+" Adults "+childVal+" Child";
    	$(".showRoom").html(displayText);*/
    	var adultVal = 0;
    	var childVal = 0;
    	for (var int = 0; int < room; int++) {
    		
    		 adultVal = Number(adultVal)+Number($("#rooms"+int+"-adult").val());
        	 childVal = Number(childVal)+Number($("#rooms"+int+"-child").val());
        	
		}
    	var displayText  = room+" Rooms "+adultVal+" Adults "+childVal+" Child";
    	$(".showRoom").html(displayText);
    	$("#guest").val(displayText);
    });
    
    
    
    var totalAdult = $("#totalAdult").val();
    var totalChild = $("#totalChild").val();
    var totalPax = Number(totalAdult)+Number(totalChild);
    var roomCount = 1;
    
    if(totalAdult > 0 && totalChild > 0){
    	
    	if(totalAdult<=2){
        	$("#rooms0-adult").val(totalAdult);
    	}
    	else if(totalAdult==3 || totalAdult==4){
    		roomCount = 2;
    	}
    	else if(totalAdult==5 || totalAdult==6){
        	
    		roomCount = 3;
    	}
    	else if(totalAdult==7 || totalAdult==8){
        	
    		roomCount = 4;
    	}
    	else if(totalAdult==9){
        	
    		roomCount = 5;
    	}
    	
    	if(totalChild > 2){
    	var perRoomPax = Math.ceil(totalPax/4);	
    		if(perRoomPax > roomCount){
    			roomCount = perRoomPax;
    		}
    	}
    	
    	$("#room").val(roomCount);
    }
    
    ///////////////////////////// On load rooms, adults and child populate Start ///////////////////////////////
    var room = $("#room").val();
    
    for (var int = 1; int <= room; int++) {
    	if(int == 1){
    		var room0child = $("#rooms0-child").val();
    			for (var intChild = 1; intChild <= room0child; intChild++) {
    				
    	        	var childIndex = intChild-1;
    		    	var childDiv = "childAgeRoom"+int;
    		    	var innerHtmlValue = childAgeBlock(intChild,int);
    		    	$("."+childDiv).append(innerHtmlValue);
    		    	$("#rooms"+int+"-children"+intChild+"-age").val($("#rooms0_children"+childIndex+"_age").val());
    		    	
    		    	}
    	   	
    	}
    else if(int > 1){
    		var roomIndex = int-1;
    		var roomDiv = "room"+roomIndex;
        	var innerHtmlValue = addRoomElements(int);
        	$("#"+roomDiv).after(innerHtmlValue);
        	$("#rooms"+roomIndex+"-adult").val($("#rooms"+roomIndex+"_adults").val());
        	$("#rooms"+roomIndex+"-child").val($("#rooms"+roomIndex+"_child").val());
        	
        	var childVal = $("#rooms"+roomIndex+"-child").val();
	    	for (var intChild = 1; intChild <= childVal; intChild++) {
        	var childIndex = intChild-1;
	    	var childDiv = "childAgeRoom"+int;
	    	var innerHtmlValue = childAgeBlock(intChild,int);
	    	$("."+childDiv).append(innerHtmlValue);
	    	$("#rooms"+int+"-children"+intChild+"-age").val($("#rooms"+roomIndex+"_children"+childIndex+"_age").val());
	    	
	    	}
        	
        	
        	
        	$(".addAdults"+room).click(function(){
      		  var roomVal = $(this).data('room');
      		  var indexVal = roomVal-1;
      	    	var adult = $("#rooms"+indexVal+"-adult").val();
      	    	if(adult < 5){
      	    	adult = Number(adult)+Number(1);
      	    	$("#rooms"+indexVal+"-adult").val(adult);
      	    	$("#rooms"+indexVal+"_adults").val(adult);
      	    	}
      	    });
      	 
      	 $(".addChildAges"+room).click(function(){
      	    	var roomVal = $(this).data('room');
      	    	var indexVal = roomVal-1;
      	    	var childVal = $("#rooms"+indexVal+"-child").val();
      	    	childVal = Number(childVal)+Number(1);
      	    	if(childVal <= 5){
      	    	var childDiv = "childAgeRoom"+roomVal;
      	    	$("#rooms"+indexVal+"-child").val(childVal);
      	    	$("#rooms"+indexVal+"_child").val(childVal);
      	    	var innerHtmlValue = childAgeBlock(childVal,roomVal);
      	    	$("."+childDiv).append(innerHtmlValue);
      	    	}
      	    	
      	    });
      	 
      	 $(".subAdults"+room).click(function(){
       		var roomVal = $(this).data('room');
     		  	var indexVal = roomVal-1;
           	var adult = $("#rooms"+indexVal+"-adult").val();
           	if(adult > 1){
           	adult = Number(adult)-Number(1);
           	$("#rooms"+indexVal+"-adult").val(adult);
           	$("#rooms"+indexVal+"_adults").val(adult);
           	}
           });
       	
       	$(".removeChildAges"+room).click(function(){
   	    	var roomVal = $(this).data('room');
   	    	var indexVal = roomVal-1;
   	    	var childVal = $("#rooms"+indexVal+"-child").val();
   	    	if(childVal > 0){
   	    	var childDiv = "childAgeRoom"+roomVal;
   	    	//var innerHtmlValue = childAgeBlock(childVal,roomVal);
   	    	var childRemove = "room"+roomVal+"child"+childVal+"";
   	    	$("."+childDiv).find("#"+childRemove).remove();
   	    	childVal = Number(childVal)-Number(1);
   	    	$("#rooms"+indexVal+"-child").val(childVal);
   	    	$("#rooms"+indexVal+"_child").val(childVal);
   	    	}
   	    	
   	    });
       	
       	$(".guest").click(function(){
        	var room = $("#room").val();
        	var roomVal = $(this).data('room');
        	var indexVal = Number(roomVal)-Number(1);
        	var adultVal = $("#rooms"+indexVal+"-adult").val();
        	var childVal = $("#rooms"+indexVal+"-child").val();
        	adultVal = Number(adultVal)+Number(room)-Number(1);
        	var displayText  = room+" Rooms "+adultVal+" Adults "+childVal+" Child";
        	$(".showRoom").html(displayText);
        	var adultVal = 0;
        	var childVal = 0;
        	for (var int = 0; int < room; int++) {
        		
        		 adultVal = Number(adultVal)+Number($("#rooms"+int+"-adult").val());
            	 childVal = Number(childVal)+Number($("#rooms"+int+"-child").val());
            	
    		}
        	var displayText  = room+" Rooms "+adultVal+" Adults "+childVal+" Child";
        	//$(".showRoom").html(displayText);
        	$("#guest").val(displayText);
        });
       	
       
        
    	}
    	
    }
///////////////////////////// On load rooms, adults and child populate End ///////////////////////////////
    
if(totalAdult > 0 && totalChild > 0){
    	
    	if(totalAdult==2){
        	$("#rooms0-adult").val(totalAdult);
    	}
    	else if(totalAdult==3 || totalAdult==4){
    		$("#rooms0-adult").val('2');
    		$("#rooms1-adult").val(totalAdult-2);
    		$("#rooms1_adult").val(totalAdult-2);
    		//roomCount = 2;
    	}
    	else if(totalAdult==5 || totalAdult==6){
    		$("#rooms0-adult").val('2');
    		$("#rooms1-adult").val('2');
    		$("#rooms1_adult").val('2');
    		$("#rooms2-adult").val(totalAdult-4);
    		$("#rooms2_adult").val(totalAdult-4);
    		//roomCount = 3;
    	}
    	else if(totalAdult==7 || totalAdult==8){
    		$("#rooms0-adult").val('2');
    		$("#rooms1-adult").val('2');
    		$("#rooms1_adult").val('2');
    		$("#rooms2-adult").val('2');
    		$("#rooms2_adult").val('2');
    		$("#rooms3-adult").val(totalAdult-6);
    		$("#rooms3_adult").val(totalAdult-6);
    		//roomCount = 4;
    	}
    	else if(totalAdult==9){
    		$("#rooms0-adult").val('2');
    		$("#rooms1-adult").val('2');
    		$("#rooms1_adult").val('2');
    		$("#rooms2-adult").val('2');
    		$("#rooms2_adult").val('2');
    		$("#rooms3-adult").val('2');
    		$("#rooms3_adult").val('2');
    		$("#rooms4-adult").val(totalAdult-8);
    		$("#rooms4_adult").val(totalAdult-8);
    		//roomCount = 5;
    	}
    	if(totalChild <= 2){
        	$("#rooms0-child").val(totalChild);
    	}
    	else if(roomCount==2){
        	$("#rooms0-child").val('2');
        	$("#rooms1-child").val(totalChild-2);
        	$("#rooms1_child").val(totalChild-2);
    	}
    	else if(roomCount==3){
        	$("#rooms0-child").val('2');
        	$("#rooms1-child").val('2');
        	$("#rooms1_child").val('2');
        	$("#rooms2-child").val(totalChild-2);
        	$("#rooms2_child").val(totalChild-2);
    	}
    	else if(roomCount==4){
        	$("#rooms0-child").val('2');
        	$("#rooms1-child").val('2');
        	$("#rooms1_child").val('2');
        	$("#rooms2-child").val('2');
        	$("#rooms2_child").val('2');
        	$("#rooms3-child").val(totalChild-2);
        	$("#rooms3_child").val(totalChild-2);
    	}
    	else if(roomCount==5){
        	$("#rooms0-child").val('2');
        	$("#rooms1-child").val('2');
        	$("#rooms1_child").val('2');
        	$("#rooms2-child").val('2');
        	$("#rooms2_child").val('2');
        	$("#rooms3-child").val('2');
        	$("#rooms3_child").val('2');
        	$("#rooms4-child").val(totalChild-2);
        	$("#rooms4_child").val(totalChild-2);
    	}
    	$("#room").val(roomCount);
    	var displayText  = roomCount+" Rooms "+totalAdult+" Adults "+totalChild+" Child";
    	$(".showRoom").html(displayText);
    	$("#guest").val(displayText);
    }

	
});



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

function childAgeBlock(childVal,roomVal){
	var innerTable = "<div class='col-sm-2' id='room"+roomVal+"child"+childVal+"'>\n";
	innerTable += "<div class='form-group'>\n";
	innerTable += "<label>Child "+childVal+"</label>\n";
	innerTable += "<div class='pay-arrow'><select class='form-control' id='rooms"+roomVal+"-children"+childVal+"-age' onchange='setChildAge("+childVal+","+roomVal+")'>\n";
	innerTable += "<option value='0'>Age</option>\n";
	innerTable += "<option value='1'>1</option>\n";
	innerTable += "<option value='2'>2</option>\n";
	innerTable += "<option value='3'>3</option>\n";
	innerTable += "<option value='4'>4</option>\n";
	innerTable += "<option value='5'>5</option>\n";
	innerTable += "<option value='6'>6</option>\n";
	innerTable += "<option value='7'>7</option>\n";
	innerTable += "<option value='8'>8</option>\n";
	innerTable += "<option value='9'>9</option>\n";
	innerTable += "<option value='10'>10</option>\n";
	innerTable += "<option value='11'>11</option>\n";
	innerTable += "<option value='12'>12</option>\n";
	innerTable += "<option value='13'>13</option>\n";
	innerTable += "<option value='14'>14</option>\n";
	innerTable += "<option value='15'>15</option>\n";
	innerTable += "<option value='16'>16</option>\n";
	innerTable += "<option value='17'>17</option>\n";
	innerTable += "</select></div>\n";
	innerTable += "</div>\n";
	innerTable += "</div>";
	return innerTable;
}

function addRoomElements(room){
	var indexValue = Number(room)-Number(1);
	var innerTable = "<div class='added-room' id='room"+room+"'>\n";
	innerTable += "<div class='row'>\n";
	innerTable += "<div class='col-sm-4'>\n";
	innerTable += "<div class='inputGroup'>\n";
	innerTable += "Rooms <span class='roomNum'>"+room+"</span>\n";
	innerTable += "</div>\n";
	innerTable += "</div>\n";
	innerTable += "<div class='col-sm-4'>\n";
	innerTable += "<div class='inputGroup'>\n";
	innerTable += "<div class='form-group input-group'>\n";
	innerTable += "<span  class='input-group-addon subAdults"+room+" guest' data-room='"+room+"'> - </span>\n";
	innerTable += "<input type='text' id='rooms"+indexValue+"-adult' class='form-control text-center' aria-label='' readonly='true' value='1'>\n";
	innerTable += "<span  class='input-group-addon addAdults"+room+" guest' data-room='"+room+"'> + </span>\n";
	innerTable += "</div>\n";
	innerTable += "</div>\n";
	innerTable += "</div>\n";
	innerTable += "<div class='col-sm-4'>\n";
	innerTable += "<div class='inputGroup'>\n";
	innerTable += "<div class='form-group input-group'>\n";
	innerTable += "<span  class='input-group-addon removeChildAges"+room+" guest' data-room='"+room+"'> - </span>\n";
	innerTable += "<input type='text' id='rooms"+indexValue+"-child' class='form-control text-center' aria-label='' readonly='true' value='0'>\n";
	innerTable += "<span class='input-group-addon addChildAges"+room+" guest' data-room='"+room+"'> + </span>\n";
	innerTable += "</div>\n";
	innerTable += "</div>\n";
	innerTable += "</div>\n";
	innerTable += "</div>\n";
	innerTable += "<div class='childAgeRoom"+room+" row'>\n";
	innerTable += "</div>\n";
	innerTable += "</div>\n";
	return innerTable;
}

function setChildAge(childVal,roomVal){
	var childAge = $("#rooms"+roomVal+"-children"+childVal+"-age").val();
	childVal = Number(childVal)-Number(1);
	roomVal = Number(roomVal)-Number(1);
	$("#rooms"+roomVal+"_children"+childVal+"_age").val(childAge);
	
}

