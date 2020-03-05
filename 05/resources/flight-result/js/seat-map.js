$(document).ready(function(){
	$("#seatFlightId").text($("#defaultOpen0").attr("data-value"));
	$("#defaultOpen0").addClass('active');
	dynamicWidthSeatMap("first0");
	$(".seat_select_button").click(function(){
		
		if($("#finalSeatPrice").val() > 0){
			$(".notification").show();
			$(".seats_hide").hide();
			$("#confirmSeatError").hide();
			$('#intro-switch2').html('Show <i class="fa fa-angle-down"></i>');
		}
		else{
			$("#confirmSeatError").show();
		}

	});
	
	$(".seat-map-show").click(function(){
		$(".seats_hide").slideToggle();
		setTimeout(function(){
			if ($('.seats_hide').css('display') == 'none') {
				$('#intro-switch2').html('Show <i class="fa fa-angle-down"></i>');
			}
			else{
				$('#intro-switch2').html('Hide <i class="fa fa-angle-up"></i>');
				var TotalSeatmap = $("#TotalSeatmap").val();
				 for(var int = 0; int < TotalSeatmap; int++){
					 $("#first"+int).hide();
					 $("#defaultOpen"+int).removeClass('active');
					 }
				$("#defaultOpen0").addClass('active');
				$("#first0").show();
				$("#seatFlightId").text($("#defaultOpen0").attr("data-value"));
			}
			}, 500);
		
		
	});
//tooltip hide

if ($(window).width() < 767) {
	$('.seat_info a').click(function(){
		$('.seat_tooltip').show();
		
	});
	
	$('.close_seat_tooltip').click(function(){
		
		$('.seat_tooltip').hide();
		
	});
}


	
})	
var tabCount = 0;
function selectSeat(checkbox,seatName,flightNumber){
	
	var totpax=$("#totpaxSeat").val();
//	var totalSeatmap = $("#TotalSeatPaxSeg").val();
	var totSe="totSeat"+flightNumber;
	var totSeat=document.getElementById(totSe).value;
	
	var se="seatNo"+flightNumber;
	var seatNo=document.getElementById(se).value;
	var allFlightsNumber = $("#allFlightsNumber").val();
	//alert(allFlightsNumber);
	if(allFlightsNumber.indexOf(se) == -1){
	allFlightsNumber = allFlightsNumber+","+se;
	$("#allFlightsNumber").val(allFlightsNumber);
	}
	 //$("#seatSelectedCheck").val("No");
	 if (checkbox.checked)
    {
		 
       if(totSeat<totpax){
	if(totSeat == 0){
	seatNo=seatName;
	}
	else{
	seatNo=seatNo+","+seatName;
	}
	totSeat=Number(totSeat)+1;
	//totalSeatmap=Number(totalSeatmap)+1;
	document.getElementById(se).value=seatNo;
	document.getElementById(totSe).value=totSeat;
	$("#seatSelectedPax").val(totSeat);
	if(totSeat==totpax){
	var totalSeg =	$("#TotalSeatmap").val();
	$("#defaultOpen"+tabCount).removeClass("active");
	$("#first"+tabCount).hide();
	tabCount=tabCount+1;
	$("#defaultOpen"+tabCount).addClass("active");
	$("#first"+tabCount).show();
	$("#seatFlightId").text($("#defaultOpen"+tabCount).attr("data-value"));
	dynamicWidthSeatMap("first"+tabCount);
	}
	}
    
    else{
    	seatName = seatName+"-"+flightNumber;
	document.getElementById(seatName).checked = false;
	}
	
    }else{
    // console.log("false");
     
   
	
	var res = seatNo.split(","); 
	
    remove(res, seatName);

	seatNo=res;
	
	totSeat=Number(totSeat)-1;
//	totalSeatmap=Number(totalSeatmap)-1;
	document.getElementById(se).value=seatNo;
	document.getElementById(totSe).value=totSeat;
	$("#seatSelectedPax").val(totSeat);
	//$("#TotalSeatPaxSeg").val(totalSeatmap);
	
    }
	
	 setTimeout(function(){
		 if($("#finalSeatPrice").val() == 0.0)
		 $(".notification").hide(); 
		 },500);
	}

function remove(arr, what) {
    var found = arr.indexOf(what);

    while (found !== -1) {
        arr.splice(found, 1);
        found = arr.indexOf(what);
    }
    
}

function openCity(evt, id,ths,tabIndex) {
    var i, flightTab, flightContent;
    flightContent = document.getElementsByClassName("flightContent");
    $("#seatFlightId").text($(ths).attr("data-value"));
    for (i = 0; i < flightContent.length; i++) {
        flightContent[i].style.display = "none";
		flightContent[i].style.width = "auto";
    }
    flightTab = document.getElementsByClassName("flightTab");
    for (i = 0; i < flightTab.length; i++) {
        flightTab[i].className = flightTab[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
    tabCount = tabIndex;
    dynamicWidthSeatMap(id);
}

function bookButtonSetSeats(){
	 var allFlightsNumber = $("#allFlightsNumber").val();
	// console.log(allFlightsNumber);
	 if(allFlightsNumber != undefined){
	 var arr = allFlightsNumber.split(",");
	 var flightSeats = "";
	 for (var int = 0; int < arr.length; int++) {
		 if(arr[int] !=""){
		//console.log("flight num : " + arr[int]);
		//console.log("seat numbers : "+ $("#"+arr[int]).val());
		flightSeats = flightSeats+"#"+arr[int]+"-"+$("#"+arr[int]).val();
		 }
		 
	}
	// console.log("flightSeats is : " + flightSeats);
	 $("#seatSelectInfo").val(flightSeats);
	 }
}
function removeAllSeats(){
	var allFlightsNumber = $("#allFlightsNumber").val();
	var TotalSeatmap = $("#TotalSeatmap").val();
	//alert(allFlightsNumber);
	 if(allFlightsNumber != undefined){
	 var arr = allFlightsNumber.split(",");
	 
	 for (var int = 0; int < arr.length; int++) {
		 if(arr[int] !=""){
			// alert($("#"+arr[int]).val());
	
		var seatSize = $("#"+arr[int]).val().split(",");
		
		for (var j = 0; j < seatSize.length; j++) {
			if(seatSize[j] != ""){
		var removeSeatId = 	seatSize[j]+"-"+arr[int].substring(6,arr[int].length);
		//$("#"+removeSeatId).attr('checked', false);
		document.getElementById(removeSeatId).checked = false;
		}
		}
	
		$("#"+arr[int]).val("");
		$("#totSeat"+arr[int].substring(6,arr[int].length)).val("");
		 }
		 
	}
	 }
	 for(var int = 0; int < TotalSeatmap; int++){
		 $("#first"+int).hide();
		 $("#defaultOpen"+int).removeClass('active');
		 }
	 
	 $("#allFlightsNumber").val("");
	 $("#seatSelectInfo").val("");
	 $("#seatSelectedPax").val("0");
	 document.getElementById('seatAssgFee').innerHTML="<i class='fa fa-"+cls+"'></i>0.00";
	 document.getElementById('totalSeatFee').innerHTML="<i class='fa fa-"+cls+"'></i>0.00";
	 var totalTasex = Number($("#totalTaxes").val());
	 document.getElementById('totalTaxesValue').innerHTML=putThousandsSeparators(totalTasex.toFixed(2));
	 $("#grandTotalMacpSet").val();
	 $("#finalSeatPrice").val();
	 var totbsp = putThousandsSeparators(((Number($("#grandTotalMacpSet").val())- Number($("#finalSeatPrice").val()))*convRatio).toFixed(2));
	 var totbspXE = putThousandsSeparators((Number($("#grandTotalMacpSet").val())- Number($("#finalSeatPrice").val())).toFixed(2));
	 document.getElementById('publishedFare').innerHTML="<h4><i class='fa fa-"+cls+"'></i>"+totbsp+"</h4>";  
	 $(".notification").hide();
	 $(".seat_price").hide();
	 $(".seats_hide").show();
	 $('#intro-switch2').html('Hide <i class="fa fa-angle-up"></i>');
	 $("#finalSeatPrice").val("0.00");
	 $("#defaultOpen"+tabCount).removeClass("active");
	 $("#first"+tabCount).hide();
	 $("#seatFlightId").text($("#defaultOpen0").attr("data-value"));
	 $("#defaultOpen0").addClass('active');
	 $("#first0").show();
	 tabCount = 0;
	 document.getElementById('publishedFareXe').innerHTML="<h4><i class='fa fa-dollar'></i>"+totbspXE+"</h4>";
	 document.getElementById('publishedFareMsg').innerHTML="<h7><i class='fa fa-dollar'></i>"+totbspXE+"</h7>";
}

function dynamicWidthSeatMap(id){
	if ($('#'+id).length > 0) {
	var x = document.querySelector('#' +id).children[0];
    var singleList = x.children[0].children[0];
	var lengthOfList = x.children[0].children;
	var one = singleList.offsetWidth;
	var listWidth = one * lengthOfList.length;
	x.style.width = listWidth + 50 + 'px';	
	}
}


function putThousandsSeparators(value, sep) {
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