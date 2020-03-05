//M star date and end date selected in calender 
$('#ui-datepicker-div').on('mouseenter', 'td', function () {

    var startDate = $('#departDate').datepicker("getDate");

    if (startDate == null) {
        startDate = $('#checkIn').datepicker("getDate");
    }
    if (startDate) {
        var cell = $(this);
        cell.addClass('between-date');
        var hover_day = $(this).text();
        var hover_month = $(this).attr("data-month");
        var hover_year = $(this).parent().siblings('td').attr("data-year");
        $('#ui-datepicker-div tr td').removeClass('between-date');
        if (hover_day >= startDate.getDate() || hover_month >= startDate.getMonth()) {
            if (hover_month >= startDate.getMonth()) {
                $('tr td a').each(function (index, value) {
                    var month_match = parseInt($(this).text());
                    var pppp = $(this).parent().data('month');
                    if (month_match <= hover_day && pppp <= hover_month) {
                        $(this).parent().addClass('between-date');
                    }
                    if (pppp < hover_month) {
                        $(this).parent().addClass('between-date');
                    }
                });
            }
        }

    }

});

var month_names =["Jan","Feb","Mar",
                      "Apr","May","Jun",
                      "Jul","Aug","Sep",
                      "Oct","Nov","Dec"];
					  
//M star date and end date selected in calender
//M19-06-
function toggleChevron(a) {
    $(a.target).prev(".panel-heading").find("i.indicator").toggleClass("glyphicon-chevron-down glyphicon-chevron-up")
}

function hideQuote() {
    $(document).ready(function () {
        $("#overlay").click(function () {
            $(this).hide(), $(".popup_feedback").hide()
        })
    })
}
function jawEngineToggle() {
    $("#return").slideToggle();
}
function ddlTypejourneyChange(a) {
    if ("1" == a) {
        var b = angular.element(document.querySelector("#ow"));
        b.addClass("active");
        var c = angular.element(document.querySelector("#rt"));
        c.removeClass("active"), $("#tripType").val(1);        
        var d = $("#departDate").datepicker("getDate");
        $("#return").hide();
        $("#returnDate").datepicker("change", {
            minDate: new Date(d)
        }), $("input[name='returnDate']").prop("disabled", !0), $("#returnDate").prop("disabled", !0), document.getElementById("returnDiv").style.display = "none", document.getElementById("returnAnother").style.display = "none", document.getElementById("return").style.display = "none";
        var e = 7;
        returnsDate = new Date, returnsDate.setDate(returnsDate.getDate() + e);
        var g = ($.datepicker.formatDate("mm-dd-yy", returnsDate));
        $("#returnDate").val(g), document.getElementById("returnDate").value = g
    } else if ("2" == a) {

        var xs = 7;
       // alert($("#departDate").val());
        var depDatee = $("#departDate").val().split('-');
        minDate = new Date(depDatee[2] + "/" + depDatee[0] + "/" + depDatee[1]);
        
        //alert("minDate"+minDate);
        //minDate=new Date($("#departDate").val());
        minDate.setDate(minDate.getDate() + xs);
        var dt_from = $.datepicker.formatDate('mm-dd-yy', minDate);
        
        $("#returnDate").val(dt_from);
        document.getElementById("returnDate").value = dt_from;


        var b = angular.element(document.querySelector("#ow"));
        document.getElementById("return").style.display = "block";
        var c = angular.element(document.querySelector("#rt"));
        $("#return").hide();
        b.removeClass("active"), c.addClass("active"), $("#tripType").val(2), $("input[name='returnDate']").prop("enabled", !0), $("#returnDate").prop("disabled", !1), document.getElementById("returnDiv").style.display = "block", document.getElementById("returnAnother").style.display = "block"
    } else $("#tripType").val(2), $("#returnDate").prop("disabled", !1)
}

function submitHotelForm() {
    var a = $("#searchHotel").validate({
        showErrors: function () {
            if (this.settings.highlight)
                for (var a = 0; this.errorList[a]; ++a) this.settings.highlight.call(this, this.errorList[a].element, this.settings.errorClass, this.settings.validClass);
            if (this.settings.unhighlight)
                for (var a = 0, b = this.validElements() ; b[a]; ++a) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
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
        $("form#searchHotel").attr({
            action: "/hotelSearch/id/" + b
        }), $("form#searchHotel").submit()
    }
}

//car submit start
function submitCarForm() {
	
	
	
/*	var b = randomString(12);
    $("form#searchCar").attr({
        action: "/carSearch/id/" + b
    }), $("form#searchCar").submit()*/
    
    var a = $("#searchCar").validate({
        showErrors: function () {
            if (this.settings.highlight){
            	for (var a = 0; this.errorList[a]; ++a) {
            		this.settings.highlight.call(this, this.errorList[a].element, this.settings.errorClass, this.settings.validClass);
            	}
            }
                
            if (this.settings.unhighlight) {
            	for (var a = 0, b = this.validElements() ; b[a]; ++a) {
                	this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
                }
            }
        },
        rules: {
		    pickupCity: {
		  		required: true,
		  		minlength: 3
		  	},
		  	pickupDate: {
		  		required: !0
		  	},
		  	dropDate: {
		  		required: !0 
		  	},
		  	pickupTime: {
		  		required: !0 
		  		
		  	},
		  	dropTime: {
		  		required: !0 
		  		
		  	},
		  	driverAge: {
		  		required: true
		  		
		  	},
		},  
	       errorElement: "span",
	       messages: {
		   		pickupCity: {
					required: "Please enter a valid Destination City.",
					minlength: "Destination City must consist of at least 3 characters",
				},
				pickupDate: {
					required: "Please enter a valid Check-In Date.",
				},
				dropDate: {
					required: "Please enter a valid Check-Out Date.",
				},
				driverAge: {
					required: "Please enter age.",
				}
	       }																       
		}); 
    if (a.form()) {
    	
    	var d1=$("#pickupDate").val();
    	var d2=$("#dropDate").val();
    	var t1=$("#pickupTime").val();
    	var t2=$("#dropTime").val();
    	
    	
    	
    	if((d1 === d2) && (t1 >= t2))
    	{
    		$("#carError").html("<i class='fa fa-exclamation-triangle'></i> Drop time should be greater than Pick-up time.");
  		  	return false;
    	}
    	else {
		

	        var b = randomString(12);
		    $("form#searchCar").attr({
		        action: "/carSearch/id/" + b
		    }), $("form#searchCar").submit()
   		 }
    }
}
//car submit end


function submitForm() {
    var a = $("#flightSearch").validate({
        showErrors: function () {
            if (this.settings.highlight)
                for (var a = 0; this.errorList[a]; ++a) this.settings.highlight.call(this, this.errorList[a].element, this.settings.errorClass, this.settings.validClass);
            if (this.settings.unhighlight)
                for (var a = 0, b = this.validElements() ; b[a]; ++a) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
        },
        rules: {
            froCity: {
                required: !0,
                minlength: 3
            },
            toCity: {
                required: !0,
                minlength: 3
            },
            froDate: {
                required: !0
            },
            toDate: {
                required: {
                    depends: function (a) {
                        return "2" == $("#tripType").val()
                    }
                }
            },
            adult: {
                required: !0,
                range: [1, 9]
            },
            infant: {
                //required: !0,
                range: [0, 8],
                le: "#sub1"
            },
            infantWs: {
            	infle: !0,
                range: [0, 8],
            }
        },
        errorElement: "span",
        messages: {
            froCity: {
                required: "Please enter a valid Origin City.",
                minlength: "Origin City must consist of at least 3 characters"
            },
            toCity: {
                required: "Please enter a valid Destination City.",
                minlength: "Destination City must consist of at least 3 characters"
            },
            froDate: {
                required: "Please enter a valid Depart Date."
            },
            toDate: {
                required: "Please enter a valid Return Date."
            },
            infant: {
                required: "Please enter a valid Return Date.",
                le: "Each Infant (in lap) should have at least one Adult traveling along"
            }
            ,
            infantWs: {
            	infle: "Airlines allow a maximum of 2 Infant per Adult."
            }
        }
    }),
        b = parseInt($("#sub1").val());
    if (0 == b) return messhow && (messhow = !1, $.notify("Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please <a href='/us/contact' target='_blank'>call us</a>. Otherwise please include at least 1 adult then hit 'Search'.", "warning")), !1;
    if (a.form()) {
        var c = parseInt($("#sub1").val()) + parseInt($("#sub2").val()) + parseInt($("#sub3").val()) + parseInt($("#sub4").val()),
            b = parseInt($("#sub1").val()),
            d = parseInt($("#sub3").val());
        	inw = parseInt($("#sub4").val());
        
        	if (((parseInt($("#sub3").val())+parseInt($("#sub4").val())) > (parseInt($("#sub1").val())*2)) && inw != 0 ) {
             	$("#error").html("<p>Airlines allow a maximum of 2 Infant per Adult.</p>")
             	
             	//console.log("inf-1");
             	
             	$("#sub3").addClass("error");
               $("#sub4").addClass("error");
             	return false;
             }
        
        if (d > b) return $("#error").html("<p>Each Infant (in lap) should have at least one Adult traveling along.</p>"), !1;
        if (0 == b) return messhow && (messhow = !1, $.notify("Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please <a href='/us/contact' target='_blank'>call us</a>. Otherwise please include at least 1 adult then hit 'Search'.", "warning")), !1;
        if (c >= 10) return $("#error").html("<p> Total number of Passenger should be less than or equal to 9 only.</p>"), !1;
        var e = new Date($("#froDate").val()),
            f = new Date($("#returnDate").val());
        if (e < f) return $("#error").html("<p>Return date should be equal or greater than Depart date.</p>"), !1;
        if ($.trim($("#froCity").val()) == $.trim($("#toCity").val()) && ($.trim($("#toCity").val()).length > 0 || $.trim($("#froCity").val()).length > 0)) return $("#error").html("<p>Please enter a different From and To city/ airport code!</p>"), !1;
        /*if ((parseInt($("#infant").val())+parseInt($("#infantWs").val())) > (parseInt($("#adult").val())*2) ) return $("#error").html("<p>Airlines allow a maximum of 2 Infant per Adult.</p>"), !1;*/
        
        
        localStorage.removeItem("underCutPriceShow");
	localStorage.removeItem("underCutPriceSet");
		
        var g = randomString(12);
        $("form#flightSearch").attr({
            action: "/us/search/id/" + g
        }), $("form#flightSearch").submit()
    }
}

function unaccompanied() {

    messhow && (messhow = !1, $.notify("Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please <a href='/us/contact' target='_blank'>call us</a>. Otherwise please include at least 1 adult then hit 'Search'.", "warning"));
}

function randomString(a) {
    var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
    a || (a = Math.floor(Math.random() * b.length));
    for (var c = "", d = 0; d < a; d++) c += b[Math.floor(Math.random() * b.length)];
    return c
}

function addAge(a) {
    var b = a.value,
        c = a.id.replace(/[^\d.]/g, ""),
        d = parseInt(c);
    for ($("#age" + d).css({
        display: "block"
    }), 0 == b && $("#age" + d).css({
        display: "none"
    }), i = 0; i < 5; i++) $("#" + d + i).css({
        display: "none"
    });
    for (i = 0; i < b; i++) $("#" + d + i).css({
        display: "block"
    });
    var d = $("#rooms").val(),
        e = $("#roomsadults option:selected").val(),
        f = $("#rooms0child :selected").text();
    if ($("#rooms1adults").length && $("#rooms1adults").val().length) {
        var g = $("#rooms1adults").val(),
            h = $("#rooms1child").val();
        e = parseInt(e) + parseInt(g), f = parseInt(f) + parseInt(h)
    }
    if ($("#rooms2adults").length && $("#rooms2adults").val().length) {
        var j = $("#rooms2adults").val(),
            k = $("#rooms2child").val();
        e = parseInt(e) + parseInt(j), f = parseInt(f) + parseInt(k)
    }
    if ($("#rooms3adults").length && $("#rooms3adults").val().length) {
        var l = $("#rooms3adults").val(),
            m = $("#rooms3child").val();
        e = parseInt(e) + parseInt(l), f = parseInt(f) + parseInt(m)
    }
    if ($("#rooms4adults").length && $("#rooms4adults").val().length) {
        var n = $("#rooms4adults").val(),
            o = $("#rooms4child").val();
        e = parseInt(e) + parseInt(n), f = parseInt(f) + parseInt(o)
    }
    var p = "";
    1 == d ? p += "1 Room," : p = p + d + " Rooms,", 1 == e ? p += "1 Adult," : p = p + e + " Adults,", 0 == f ? p += "0 Child" : p = 1 == f ? p + f + " Child" : p + f + " Children", $("#guest").val(p)
}


function addAgeOnLoad(kk, pp) {

    //console.log("addage on load " + pp);
    var childNo = kk;
    //var room = pp;
    var d = pp;
    // $("#childAge"+pp).css({display: "block"});
    if (childNo == 0) {

        //$("#childAge" + pp).find("#"+pp+i).css({display: "none"});
        // $("#childAge"+pp).css({display: "none"}); 
        // $("#childAge" + d).find("#age"+d).attr("id", "age" + d), $("#childAge" + d).find("#00").attr("id", "" + d + "0"), $("#childAge" + d).find("#01").attr("id", "" + d + "1"), $("#childAge" + d).find("#02").attr("id", "" + d + "2"), $("#childAge" + d).find("#03").attr("id", "" + d + "3"), $("#childAge" + d).find("#04").attr("id", "" + d + "4"), $("#childAge" + d).css("display", "none");
        $("#childAge" + d).find("#" + d + "0").css({ display: "none" });
        $("#childAge" + d).find("#" + d + "1").css({ display: "none" });
        $("#childAge" + d).find("#" + d + "2").css({ display: "none" });
        $("#childAge" + d).find("#" + d + "3").css({ display: "none" });
        $("#childAge" + d).find("#" + d + "4").css({ display: "none" });
        $("#childAge" + d).find("#age" + d).css({ display: "none" });
        //$("#childAge" + d).find("#"+d+"0").css({display: "none"});
    }

}



function addAdult(a) {
    var b = $("#rooms").val(),
        c = $("#roomsadults option:selected").val(),
        d = $("#rooms0child :selected").text();
    if ($("#rooms1adults").length && $("#rooms1adults").val().length) {
        var e = $("#rooms1adults").val(),
            f = $("#rooms1child").val();
        c = parseInt(c) + parseInt(e), d = parseInt(d) + parseInt(f)
    }
    if ($("#rooms2adults").length && $("#rooms2adults").val().length) {
        var g = $("#rooms2adults").val(),
            h = $("#rooms2child").val();
        c = parseInt(c) + parseInt(g), d = parseInt(d) + parseInt(h)
    }
    if ($("#rooms3adults").length && $("#rooms3adults").val().length) {
        var i = $("#rooms3adults").val(),
            j = $("#rooms3child").val();
        c = parseInt(c) + parseInt(i), d = parseInt(d) + parseInt(j)
    }
    if ($("#rooms4adults").length && $("#rooms4adults").val().length) {
        var k = $("#rooms4adults").val(),
            l = $("#rooms4child").val();
        c = parseInt(c) + parseInt(k), d = parseInt(d) + parseInt(l)
    }
    var m = "";
    1 == b ? m += "1 Room," : m = m + b + " Rooms,", 1 == c ? m += "1 Adult," : m = m + c + " Adults,", 0 == d ? m += "0 Child" : m = 1 == d ? m + d + " Child" : m + d + " Children", $("#guest").val(m)
};

///////////////// Traveller select drop script  ///////////////////////////////


$(document).ready(function() {
	var totpax=1;
	var adult=1;
	var child=0;
	var infant=0;
	var infantws=0;
	adult = $("#sub1").val();
	child = $("#sub2").val();
	infant = $("#sub3").val();
	infantws = $("#sub4").val();
	var cabinType=$("#cabinClass").val();

	
	var totpax = parseInt(adult) + parseInt(child) + parseInt(infant)+ parseInt(infantws);
	/*if (totpax > 1) {
		 $("#person").val(totpax+ " Travelers, "+cabinType);
	} else {
		 $("#person").val(totpax+ " Adult, "+cabinType); 
	}*/

	/*$("#person").click(function () {
	             
	            $(".traveler-dropdown").slideDown();


	        });*/
	        /*$(".done").click(function () {
	            $(".traveler-dropdown").slideUp();
	            $("#select_class").focus();
	        });*/

	        $("#sub1plus").click(function () {
	            var sv = $("#sub1").val();
	           if((parseInt(sv) + 1)==10){
	        	   return;
	           }
	           if((parseInt(totpax))>=9){
	        	   return;
	           }
	           adult=parseInt(adult) + 1;
	           totpax=parseInt(totpax)+1;
	            $("#sub1").val(parseInt(sv) + 1);

	        });

	        $("#sub1minus").click(function () {
	            var sv = $("#sub1").val();
	            if (
	           parseInt(sv) != 0
	           )
	            	 if((parseInt(sv))<=1){
	                 	   return;
	                    }
	            var sv2 = $("#sub3").val();
	            
	            if(parseInt(sv2) > parseInt(sv-1)){
	            	totpax=parseInt(totpax)-1;
	            	$("#sub3").val(sv-1);	            	
	            }
	                 adult=parseInt(adult) - 1;
	                 totpax=parseInt(totpax)-1;
	                 
	                 
	                $("#sub1").val(parseInt(sv) - 1);
	                
	                if((parseInt($("#sub3").val())+parseInt($("#sub4").val())) > parseInt($("#sub1").val())*2){
	                	
	                	var diff = ($("#sub1").val()*2)-$("#sub3").val();
	                	 var infant = $("#sub4").val();
	            		$("#sub4").val(diff);
	            		totpax=parseInt(totpax)-(infant-diff);
			          
	                }

	        });




	        $("#sub2plus").click(function () {
	            var sv = $("#sub2").val();
	            if((parseInt(sv) + 1)>9){
	         	   return;
	            }
	            if((parseInt(totpax))>=9){
	         	   return;
	            }
	            child=parseInt(child) + 1;
	            totpax=parseInt(totpax)+1;
	            $("#sub2").val(parseInt(sv) + 1);

	        });

	        $("#sub2minus").click(function () {
	            var sv = $("#sub2").val();            
	            	
	            	 if(sv<=0){
	               	   return;
	                  }
	            	 if(totpax==1){
	            	 	   return;
	            	    }
	            	child=parseInt(child) - 1;
	            totpax=parseInt(totpax)-1;
	                $("#sub2").val(parseInt(sv) - 1);
	        });


	        $("#sub3plus").click(function () {
	            var sv = $("#sub3").val();
	            var adultInfant = $("#sub1").val();
	            var infantVal = $("#sub4").val();
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
	            $("#sub3").val(parseInt(sv) + 1);

	        });

	        $("#sub3minus").click(function () {
	        	
	        	
	            var sv = $("#sub3").val();
	            	
	            	if(sv<=0){
	             	   return;
	                }
	            	if(totpax==1){
	            	  if(sv >= 1)
	                    {
	                    infant=parseInt(infant) - 1;
	                    totpax=parseInt(totpax)-1;
	                    $("#sub3").val(parseInt(sv) - 1);
	                    }
	         	 	   return;
	         	    }
	            	infant=parseInt(infant) - 1;
	                totpax=parseInt(totpax)-1;
	                $("#sub3").val(parseInt(sv) - 1);
	        });


	        $("#sub4plus").click(function () {
	            var sv = $("#sub4").val();
	            var infantVal = $("#sub3").val();
	            var adultVal = $("#sub1").val();
	            
	         
	            
	            if((parseInt(sv) + 1+parseInt(infantVal)) > (parseInt(adultVal)*2)){
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
	            $("#sub4").val(parseInt(sv) + 1);

	        });

	        $("#sub4minus").click(function () {
	            var sv = $("#sub4").val();
	            	
	            	if(sv<=0){
	                	   return;
	                   }
	            	if(totpax==1){
	         	 	   return;
	         	    }
	            	infantws=parseInt(infantws) - 1;
	            	totpax=parseInt(totpax)-1;
	                $("#sub4").val(parseInt(sv) - 1);

	        });



	        $(".maincalulation").click(function () {
	            var sv = $("#sub1").val();
	            var sv1 = $("#sub2").val();
	            var sv2 = $("#sub3").val();
	            var sv3 = $("#sub4").val();
	            var sv4=$("#cabinClass").val();
	            
	            var total = parseInt(sv) + parseInt(sv1) + parseInt(sv2)+ parseInt(sv3);
	            
	            if (total > 1) {
	            	 $("#person").val(total+ " Travelers, "+sv4);
	        	} else {
	        		 $("#person").val(total+ " Adult, "+sv4); 
	        	}

	        });
	});


$(document).ready(function() {

$('#ow').click(function(){
		$('#depart-datediv').addClass('col-xs-12').removeClass('col-xs-6');
		$("#departDate_new").addClass("border-right");
	});
	
	$('#rt').click(function(){
		$('#depart-datediv').removeClass('col-xs-12').addClass('col-xs-6');
		$("#departDate_new").removeClass("border-right");
	});
	var engineViewCok = document.cookie;
	var indexOfView = engineViewCok.indexOf("EngineView=");
	var engineView = engineViewCok.substring(indexOfView+11,indexOfView+17);
	if(engineView == "Hotell")
		{
		$("body").addClass('hotelsection');
		$("#flight_tab").removeClass('active');
		$("#hotel_tab").addClass('active');
		$("#car_tab").removeClass('active');
		$("#tab_a").removeClass('active');
		$("#tab_c").removeClass('active');	
		$("#tab_b").addClass('active');	
		//hideCouponHeader();
		//document.querySelector(".pdc-block").classList.add("makeHidden");
		}else if(engineView == "Cars")
		{
			$("body").addClass('carsection');
			$("#car_tab").addClass('active');
			$("#flight_tab").removeClass('active');
			$("#hotel_tab").removeClass('active');
			$("#tab_a").removeClass('active');
			$("#tab_b").removeClass('active');	
			$("#tab_c").addClass('active');	
		//	$("#carS").removeClass('carnoSelect-icon');	
		//	$("#carS").addClass('carSelect-icon');	
			
			
			//hideCouponHeader();
			//document.querySelector(".pdc-block").classList.add("makeHidden");
			}
	$("#flight_tab").click(function(){
			document.cookie = "EngineView=Flight";
	});
	$("#hotel_tab").click(function(){
			document.cookie = "EngineView=Hotell";
	});
	$("#car_tab").click(function(){
		document.cookie = "EngineView=Cars";
		$("body").addClass('carsection');
    });
	 var apiKey = "X74hmOunUSNWzzCjBEr5p8LJCX0YQOik";   
	    var language = "en";
	/*navigator.geolocation.watchPosition(callback);
    function callback(position) {
        //alert("a"+position);
        var b = "//maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "%2C" + position.coords.longitude + "&language=en";
        $.getJSON(b).done(function (b) {
            //console.log($("#froCity").val());
            if ("" == $("#froCity").val()) {
                $('#froCity').addClass('input_cont x');

                //  b.results[0].address_components[5].long_name, b.results[0].address_components[6].long_name;
                angular.element(document.getElementById("Travelopick")).scope().getDeal(position.coords.latitude, position.coords.longitude)
            }
        })
    }*/
/*	
    var onSuccess = function (geoipResponse) {
    	 angular.element(document.getElementById("Travelopick")).scope().getDeal(geoipResponse.location.latitude, geoipResponse.location.longitude)
    };
 
     If we get an error we will 
    var onError = function (error) {
        return;
    };
 
   
        geoip2.city( onSuccess, onError );*/
   
	 
    angular.element(document.getElementById("Travelopick")).scope().PostDealss("x12sfs");
    //console.log("froCit:" + $("#froCity").val());
	
	
	$(".toggle_container").hide(), $("button.reveal").click(function () {	
        return $(".toggle_container").slideToggle("fast"), "+ Read More" === $.trim($(this).text()) ? $(this).text("- Hide Text") : $(this).text("+ Read More"), !1
    }), $("a[href='" + window.location.hash + "']").parent(".reveal").click()
})/*, $(function () {
    var a = 24,
        b = (new Date).getTime(),
        c = localStorage.getItem("setupTime");
    null == c || b - c > 60 * a * 60 * 1e3 && localStorage.clear(), void 0 == localStorage.firstVisit ? $("#appId").show() : 0 == localStorage.firstVisit ? $("#appId").show() : $("#appId").hide(), $(function () {
        $("#appIdimg").click(function () {
            $("#appId").hide(), localStorage.firstVisit = !0, null == c ? localStorage.setItem("setupTime", b) : b - c > 60 * a * 60 * 1e3 && (localStorage.clear(), localStorage.setItem("setupTime", b))
        })
    })
})*/, $(function () {
	
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
                         var minDatedrop=date_diff+1+'d';
                         //$("#checkOutDate").val(minDatedrop);
                         $("#checkOutDate").datepicker("change", { minDate: minDatedrop });
                         $("#checkOutDate").datepicker("change", { maxDate: maxDatedrop });
                 }
             }catch(e)
                 {
                 }
             $("#checkOutDate").datepicker('show'); 
			 $("#checkInDateText").html(dropDateMin.getDate()+" "+month_names[dropDateMin.getMonth()]+" "+dropDateMin.getFullYear());
        }
    })
}), $(function () {
	
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
      
      var minDate1 =new Date();      
      minDate1=date_diff+2+'d';
	
    $("#checkOutDateDiv").click(function () {
        $("#checkOutDate").datepicker("show")
    }), $("#checkOutDate").datepicker({
        //changeMonth: !0,
        //changeYear: !0,
        numberOfMonths: numberOfMonthValue,
        dateFormat: "mm-dd-yy",
        showButtonPanel: true,
        minDate:minDate1,maxDate:maxDate1,
		onClose: function () {  
		var dropDateMin = $("#checkOutDate").datepicker("getDate");
		$("#checkOutDateText").html(dropDateMin.getDate()+" "+month_names[dropDateMin.getMonth()]+" "+dropDateMin.getFullYear());
		}
    })
}),

//car clander
$(function(){
	
	 var d = new Date();
	    var monthNames = ["January", "February", "March", "April", "May", "June",
	        "July", "August", "September", "October", "November", "December"];
	    today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
	
	$("#pickUpDate_div").click(function () {
	    $("#pickupDate").datepicker('show');
	});
	
	var minDate = new Date();
	minDate.setDate(minDate.getDate()+2);
	var maxDate =new Date();
	
	$("#pickupDate").datepicker({
		
		numberOfMonths: numberOfMonthValue,
		dateFormat: "mm-dd-yy",
        showButtonPanel: true,
        minDate: minDate,maxDate: "+11m",
        onClose: function () {       	 
        	 
        	 var dropDateMin = $("#pickupDate").datepicker("getDate");

             try {
                 if (dropDateMin != null && dropDateMin != '') 
                 {                	 
                         $("#dropDate").val($("#pickupDate").val());
                         var from = $('#pickupDate').datepicker('getDate');
                         var date_diff = Math.ceil((from.getTime() - Date.parse(today)) / 86400000);
                         var maxDatedrop=date_diff+30+'d';
                         $("#dropDate").datepicker("change", { minDate: new Date(dropDateMin)});
                         $("#dropDate").datepicker("change", { maxDate: maxDatedrop });
                 }
             }catch(e)
                 {
                 }
             $("#dropDate").datepicker('show'); 
			 $("#pickupDateText").html(dropDateMin.getDate()+" "+month_names[dropDateMin.getMonth()]+" "+dropDateMin.getFullYear())
        }
    
		
	});
	
});

$(document).ready(function(){

$('#ow').click(function(){
		$('#depart-datediv').addClass('col-xs-12').removeClass('col-xs-6');
	});
	
	$('#rt').click(function(){
		$('#depart-datediv').removeClass('col-xs-12').addClass('col-xs-6');
	});
	
	var ch = 2;    
    checkInDate = new Date();
    checkInDate.setDate(checkInDate.getDate() + ch);
   
   	var xs = 5; 
    returnsDate = new Date();
    returnsDate.setDate(returnsDate.getDate() + xs);
    
    var dt_to = $.datepicker.formatDate('mm-dd-yy', new Date());
	var dt_from = $.datepicker.formatDate('mm-dd-yy', returnsDate);
	var checkInDate_from = $.datepicker.formatDate('mm-dd-yy', checkInDate);
	
	$("#pickupDate").val(checkInDate_from);
	$("#dropDate").val(dt_from);
	$("#pickupDateText").html(checkInDate.getDate()+" "+month_names[checkInDate.getMonth()]+" "+checkInDate.getFullYear()),
	$("#dropDateText").html(returnsDate.getDate()+" "+month_names[returnsDate.getMonth()]+" "+returnsDate.getFullYear()),
    
    $(".needdif").click(function(){
        $("#needdif").toggle(200);
    });
	
	$("#dropDate_div").click(function () {
	    $("#dropDate").datepicker('show');
	});
	
	$(".advance").click(function(){
        $("#advance").toggle(200);
    });
	
	try{
	var pd = $("#pickupDate").datepicker("getDate");
	var dd = $("#dropDate").datepicker("getDate");
	
    var pDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
    var dDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
	}catch(e){
		var pd = new Date();
		var dd = new Date();
		
	    var pDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
	    var dDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
	}
    
    
    dDate.setMonth(pDate.getMonth()+1);
	
	$("#dropDate").datepicker({
		
		numberOfMonths: numberOfMonthValue,
		dateFormat: "mm-dd-yy",
        showButtonPanel: true,
        minDate:pDate,
        maxDate: dDate,
		onClose: function () {  
		var dropDateMin = $("#dropDate").datepicker("getDate");
		$("#dropDateText").html(dropDateMin.getDate()+" "+month_names[dropDateMin.getMonth()]+" "+dropDateMin.getFullYear());
		}
	});
	
	$('#select-air').on('change', function() {
  
  $("#airlinesPpc").val(this.value);
	});
	
});



//M Select date 


//M calendar div 	
$("#departDate_new, #returnDate_new, #departSDate_new, #departTDate_new, #checkInDate_new, #checkOutDate_new").click(function () {
    $(this).datepicker('show');
});

//M Responsive 
var numberOfMonthValue;
$(window).resize(function () {

    if ($(window).width() < 768) {
        numberOfMonthValue = 1;
        $("#departDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
        $("#returnDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
        $("#checkInDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
        $("#checkOutDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
		$("#pickUpDate_div").datepicker("option", "numberOfMonths", numberOfMonthValue);
		$("#dropDate_div").datepicker("option", "numberOfMonths", numberOfMonthValue);
		
    } else {
        numberOfMonthValue = 2;
        $("#departDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
        $("#returnDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
        $("#checkInDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
        $("#checkOutDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
		$("#pickUpDate_div").datepicker("option", "numberOfMonths", numberOfMonthValue);
		$("#dropDate_div").datepicker("option", "numberOfMonths", numberOfMonthValue);
    }
}).trigger('resize');
//Responsive 

$(function () {
    $("#departDateDiv").click(function () {
        $('#departDate').datepicker('show');
    });



    $("#departDate").datepicker({
        // changeMonth: true,
        // changeYear: true,
        numberOfMonths: numberOfMonthValue,
        dateFormat: "mm-dd-yy",
        showButtonPanel: true,
        beforeShowDay: function (date) {
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
        onClose: function () {
            var dateDepMin = $("#departDate").datepicker("getDate");

            try {


                if ($(window).width() > 767) {
                    $('#returnDate').datepicker('show');
                }
                if (dateDepMin != null && dateDepMin != '') {

                    if ($('#tripType').val() == '2') {
                        $("#returnDate").val($("#departDate").val());
                        $("#returnDate").datepicker("change", { minDate: new Date(dateDepMin) });
                        var dateRetMin = $('#returnDate').datepicker("getDate");
                        var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());


                        if (dateRetMin != null) {
                            var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());


                            if (dMin > rMin) {
                                $('#returnDate').val($.datepicker.formatDate('mm-dd-yy', new Date(dMin)));
                                //$("#returnDate").focus();
                                if ($(window).width() > 767) {
                                    $('#returnDate').datepicker('show');
                                }
                            }
                            else {
                                //$("#returnDate").focus();
                                $('#returnDate').val($.datepicker.formatDate('mm-dd-yy', new Date(dMin)));
                                if ($(window).width() > 767) {
                                    $('#returnDate').datepicker('show');
                                }
                            }
                        }
                        else {
                            $('#returnDate').val($.datepicker.formatDate('mm-dd-yy', new Date(dMin)));
                            //$("#returnDate").focus();

                            if ($(window).width() > 767) {
                                $('#returnDate').datepicker('show');
                            }
                        }
                    }
                }
            } catch (e) {

            }
				
				

        }
    });
}), $(function () {
    $("#returnDateDiv").click(function () {
        "2" == $("#tripType").val() && $("#returnDate").datepicker("show")
    }), $("#returnDate").datepicker({


        //changeMonth: !0,
        //changeYear: !0,
        dateFormat: "mm-dd-yy",
        numberOfMonths: numberOfMonthValue,
        showButtonPanel: true,
        beforeShowDay: function (date) {
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
        //changeMonth: !0,
        //changeYear: !0,
        numberOfMonths: numberOfMonthValue,
        showButtonPanel: true,
        dateFormat: "mm-dd-yy",
        minDate: minDate,
        maxDate: maxDate,
        onClose: function () {
            var a = $("#departDate").datepicker("getDate"),
                b = $("#returnDate").datepicker("getDate");
            day = b.getDate(), year = b.getFullYear();
            var c = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            month = c[b.getMonth()];
            var d = new Array(7);
            d[0] = "MON", d[1] = "TUE", d[2] = "WED", d[3] = "THU", d[4] = "FRI", d[5] = "SAT", d[6] = "SUN";
            var e = d[b.getUTCDay()],
                f = "<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>" + day + "</div><div style='text-transform:uppercase; text-align:center; font-size:17px;'>" + e + ", " + month + "</div>";
            if ($("#returnDateDiv").html(f), null != a && "" != a) {
                var g = new Date(a.getFullYear(), a.getMonth(), a.getDate());
                if (null != b) {
                    var h = new Date(b.getFullYear(), b.getMonth(), b.getDate());
                    g > h && ($("#returnDate").val(""))
                }
            }
			
        }
    })
}), $(".form-group-select-plus").each(function () {
    var a = $(this),
        b = a.find(".btn-group").first(),
        c = a.find("select");
    b.children("label").last().click(function () {
        b.addClass("hidden"), c.removeClass("hidden")
    }), b.children("label:not(:last-child)").click(function () {
        c.val($(this).children("input:eq(0)").data("value"))
    })
}), minDate = new Date;
var x = 11;
maxDate = new Date, maxDate.setMonth(maxDate.getMonth() + x);
var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    weekday = new Array(7);
weekday[1] = "MON", weekday[2] = "TUE", weekday[3] = "WED", weekday[4] = "THU", weekday[5] = "FRI", weekday[6] = "SAT", weekday[0] = "SUN", day = minDate.getDate(), month = monthNames[minDate.getMonth()];
var days = weekday[minDate.getUTCDay()],
    divText = "<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>" + day + "</div><div style='text-transform:uppercase; text-align:center; font-size:17px;'>" + days + ", " + month + "</div>";
$("#departDateDiv").html(divText);
var ch = 2;
checkInDate = new Date, checkInDate.setDate(checkInDate.getDate() + ch), checkday = checkInDate.getDate(), month = monthNames[checkInDate.getMonth()], days = weekday[checkInDate.getUTCDay()];
var divcheckInText = "<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>" + checkday + "</div><div style='text-transform:uppercase; text-align:center; font-size:17px;'>" + days + ", " + month + "</div>";
$("#checkInDateDiv").html(divcheckInText);
var xs = 7;
returnsDate = new Date, returnsDate.setDate(returnsDate.getDate() + xs), day = returnsDate.getDate(), month = monthNames[returnsDate.getMonth()];
var days = weekday[returnsDate.getUTCDay()],
    divsText = "<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>" + day + "</div><div style='text-transform:uppercase; text-align:center; font-size:17px;'>" + days + ", " + month + "</div>";
$("#returnDateDiv").html(divsText), $("#checkOutDateDiv").html(divsText);
var dt_to = $.datepicker.formatDate("mm-dd-yy", new Date),
    dt_from = $.datepicker.formatDate("mm-dd-yy", returnsDate),
    checkInDate_from = $.datepicker.formatDate("mm-dd-yy", checkInDate);
$("#departDate").val(dt_to), $("#returnDate").val(dt_from), $("#checkInDate").val(checkInDate_from), $("#checkOutDate").val(dt_from), 

$("#checkInDateText").html(checkInDate.getDate()+" "+month_names[checkInDate.getMonth()]+" "+checkInDate.getFullYear()),
 numMonth = 1, $("#adult").val("1"), $("#infant").val("0"), $("#child").val("0"), $("#infantws").val("0"), $(function () {
    $(".offcanvas-toggle-btn").click(function () {
        $("body").toggleClass("active")
    })
}), $(function () {
    var a = $('<div id="overlay" ></div>');
    $(".close_new").click(function () {
        return $(".popup_feedback").hide(), a.appendTo(document.body).remove(), !1
    }), $(".click").click(function (b) {
        return a.show(), a.appendTo(document.body), $(".popup_feedback").show(), b.stopPropagation(), !1
    })
}), $(".popup_feedback").click(function (a) {
    a.stopPropagation()
}), $("#overlay").click(function (a) {
    a.stopPropagation()
}), $(document).click(function () {
    $("#overlay").hide(), $(".popup_feedback").hide()
}), $("#accordion").on("hidden.bs.collapse", toggleChevron), $("#accordion").on("shown.bs.collapse", toggleChevron), $(function () {
    var a = $('<div id="overlay" onclick="hideQuote()"></div>');
    $(".close_new").click(function () {
        return $(".popup_feedback").hide(), a.appendTo(document.body).remove(), !1
    }), $(".x").click(function () {
        return $(".popup_feedback").hide(), a.appendTo(document.body).remove(), !1
    }), $(".click").click(function () {
        return a.show(), a.appendTo(document.body), $(".popup_feedback").show(), !1
    })
}), $.validator.addMethod("le", function (a, b, c) {
    return this.optional(b) || a <= $(c).val()
}, "Invalid value"),

$.validator.addMethod("infle", function (a, b, c) {
	 var a = $("#adult option:selected").val(),
     b = $("#child option:selected").val(),
     c = $("#infant option:selected").val(),
     d = $("#infantWs option:selected").val();
if(((parseInt(c)+parseInt(d)) > parseInt(a*2)) && parseInt(d) > 0 ) {
	return false;
}else{
	return true;
}
}, "Invalid value"),


$.validator.addMethod("greaterThan", function (a, b, c) {
    return /Invalid|NaN/.test(new Date(a)) ? isNaN(a) && isNaN($(c).val()) || Number(a) > Number($(c).val()) : new Date(a) > new Date($(c).val())
}, "Must be greater than {0}.");
var messhow = !0,
    _mfq = _mfq || [];
! function () {
    var a = document.createElement("script");
    a.type = "text/javascript", a.async = !0, a.src = "//cdn.mouseflow.com/projects/12d10d9b-2948-4779-af73-ac5bd3868d89.js", document.getElementsByTagName("head")[0].appendChild(a)
}(), $(document).ready(function () {
    $("#guest").click(function () {
        $(".guests").toggle()
    }), $("#h_close-div").click(function () {
        $(".guests").hide()
    });
    var a = 1;
    $("#rooms").change(function () {
        var b = this.value,
            c = b - a;
        if (c > 0) {
            for (i = 1; i <= c; i++) {
                var d = a + (i - 1);
                $("#childAge" + (Number(d) - 1)).after($("#cust").clone().attr("id", "cust" + d)), $("#cust" + d).css("display", "inline"), $("#cust" + d).find("#roomNo0").attr("id", "roomNo" + d);
                var e = $("<div class='form-group form-group-lg form-group-select-plus'>Room " + (d + 1) + ":</div>");
                $("#roomNo" + d).html(e), $("#cust" + d + " select").each(function () {
                    this.id.indexOf("adults") != -1 ? ($(this).attr("name", "rooms[" + d + "].adults"), $(this).attr("id", "rooms" + d + "adults")) : ($(this).attr("name", "rooms[" + d + "].child"), $(this).attr("id", "rooms" + d + "child"))
                }), $("#cust" + d).after($("#childAge0").clone().attr("id", "childAge" + d)), $("#childAge" + d).find("#age0").attr("id", "age" + d), $("#childAge" + d).find("#00").attr("id", "" + d + "0"), $("#childAge" + d).find("#01").attr("id", "" + d + "1"), $("#childAge" + d).find("#02").attr("id", "" + d + "2"), $("#childAge" + d).find("#03").attr("id", "" + d + "3"), $("#childAge" + d).find("#04").attr("id", "" + d + "4"), $("#childAge" + d).css("display", "block");
                var f = 0;
                $("#childAge" + d + " select").each(function () {
                    $(this).attr("name", "rooms[" + d + "].children[" + f + "].age"), $(this).attr("id", "rooms" + d + "children[" + f + "].age"), f += 1
                })
                //alert("Rooms : "+((a+i)-1));
                addAgeOnLoad(0, (Number(a + i) - 1));
            }
            a = c + a
        } else
            for (c = a - b, i = 1; i <= c; i++) a -= 1, $("#cust" + a).remove(), $("#childAge" + a).remove();
        var g = $("#rooms").val(),
            h = $("#roomsadults option:selected").val(),
            j = $("#rooms0child :selected").text();
        if ($("#rooms1adults").length && $("#rooms1adults").val().length) {
            var k = $("#rooms1adults").val(),
                l = $("#rooms1child").val();
            h = parseInt(h) + parseInt(k), j = parseInt(j) + parseInt(l)
        }
        if ($("#rooms2adults").length && $("#rooms2adults").val().length) {
            var m = $("#rooms2adults").val(),
                n = $("#rooms2child").val();
            h = parseInt(h) + parseInt(m), j = parseInt(j) + parseInt(n)
        }
        if ($("#rooms3adults").length && $("#rooms3adults").val().length) {
            var o = $("#rooms3adults").val(),
                p = $("#rooms3child").val();
            h = parseInt(h) + parseInt(o), j = parseInt(j) + parseInt(p)
        }
        if ($("#rooms4adults").length && $("#rooms4adults").val().length) {
            var q = $("#rooms4adults").val(),
                r = $("#rooms4child").val();
            h = parseInt(h) + parseInt(q), j = parseInt(j) + parseInt(r)
        }
        var s = "";
        1 == g ? s += "1 Room," : s = s + g + " Rooms,", 1 == h ? s += "1 Adult," : s = s + h + " Adults,", 0 == j ? s += "0 Child" : s = 1 == j ? s + j + " Child" : s + j + " Children", $("#guest").val(s)
    })
});
var myapp = angular.module("angularDeal", ["LocalStorageModule"]);
! function () {
    myapp.controller("dealCtrl", ["$http", "$window", "$scope", "localStorageService", "$timeout","$filter", function (a, b, c, d, e,f) {
    	
    	c.pickupTime="10:00";
    	c.dropTime="10:00";
        c.searchQueryList = [], c.sessQueryList = [], c.lastItem = [], c.dealList = [], c.cabinClass = "Economy",
        c.getDeal = function (b, d) {
            var e = {
                longitude: b,
                latitude: d
            };
            // console.log(e);	
            a.post("/getDeals", e).success(function (a) {
               
                if(!a.includes("DOCTYPE")){
            	//c.froCity = a;
                if (c.froCity == "") {
                    "none" != a && (c.froCity = a)
                }
                if (c.froCity == undefined ) {
                    "none" != a && (c.froCity = a)
                }
            }else{
            	  $('#froCity').removeClass('input_cont x');
            }
            }).error(function (a) {
            	
            })
        }, c.showPNRDetails = function (a) {
            var c = "key=" + a,
                d = screen.width / 2 - 200,
                e = screen.height / 2 - 250;
            b.open("/pnrDetails?" + c, "", "top=" + e + ",left=" + d + ", width=700, height=550")
        }, c.ShowCardDetailsDiv = function (a) {
            c.cardCode = a.CardCode, c.cardNumber = a.CardNumber, c.cardHolderName = a.CardHolderName, c.expiryMonth = a.ExpiryMonth, c.expiryYear = a.ExpiryYear, c.cvv = a.CvvNo, c.address1 = a.Address1, c.address2 = a.Address2, c.CardDetailsDiv = !0;
            var b = document.getElementById("carddetail"),
                d = b.style;
            d.display = "block"
        }, c.HidePop = function (a) {
            c.responseDiv = !1
        }, c.countries = [{
            id: "US",
            name: "United States"
        }, {
            id: "CA",
            name: "Canada"
        }, {
            id: "GB",
            name: "United Kingdom"
        }, {
            id: "AI",
            name: "Anguilla"
        }, {
            id: "AG",
            name: "Antigua and Barbuda"
        }, {
            id: "AR",
            name: "Argentina"
        }, {
            id: "AM",
            name: "Armenia"
        }, {
            id: "AW",
            name: "Aruba"
        }, {
            id: "AU",
            name: "Australia"
        }, {
            id: "AT",
            name: "Austria"
        }, {
            id: "AZ",
            name: "Azerbaijan"
        }, {
            id: "BS",
            name: "Bahamas"
        }, {
            id: "BH",
            name: "Bahrain"
        }, {
            id: "BB",
            name: "Barbados"
        }, {
            id: "BE",
            name: "Belgium"
        }, {
            id: "BZ",
            name: "Belize"
        }, {
            id: "BM",
            name: "Bermuda"
        }, {
            id: "BO",
            name: "Bolivia"
        }, {
            id: "BA",
            name: "Bosnia Herzegovina"
        }, {
            id: "BW",
            name: "Botswana"
        }, {
            id: "BR",
            name: "Brazil"
        }, {
            id: "VG",
            name: "British Virgin Islands"
        }, {
            id: "BN",
            name: "Brunei Darussalam"
        }, {
            id: "BG",
            name: "Bulgaria"
        }, {
            id: "KH",
            name: "Cambodia"
        }, {
            id: "KY",
            name: "Cayman Islands"
        }, {
            id: "CL",
            name: "Chile"
        }, {
            id: "CN",
            name: "China"
        }, {
            id: "CR",
            name: "Costa Rica"
        }, {
            id: "HR",
            name: "Croatia"
        }, {
            id: "CY",
            name: "Cyprus"
        }, {
            id: "CZ",
            name: "Czech Republic"
        }, {
            id: "DK",
            name: "Denmark"
        }, {
            id: "DM",
            name: "Dominica"
        }, {
            id: "DO",
            name: "Dominican Republic"
        }, {
            id: "EC",
            name: "Ecuador"
        }, {
            id: "EG",
            name: "Egypt"
        }, {
            id: "SV",
            name: "El Salvador"
        }, {
            id: "EE",
            name: "Estonia"
        }, {
            id: "FI",
            name: "Finland"
        }, {
            id: "FR",
            name: "France"
        }, {
            id: "GE",
            name: "Georgia"
        }, {
            id: "DE",
            name: "Germany"
        }, {
            id: "GR",
            name: "Greece"
        }, {
            id: "GD",
            name: "Grenada"
        }, {
            id: "GP",
            name: "Guadeloupe"
        }, {
            id: "GU",
            name: "Guam"
        }, {
            id: "GT",
            name: "Guatemala"
        }, {
            id: "GY",
            name: "Guyana"
        }, {
            id: "HT",
            name: "Haiti"
        }, {
            id: "HN",
            name: "Honduras"
        }, {
            id: "HK",
            name: "Hong Kong"
        }, {
            id: "HU",
            name: "Hungary"
        }, {
            id: "IS",
            name: "Iceland"
        }, {
            id: "IN",
            name: "India"
        }, {
            id: "id",
            name: "Indonesia"
        }, {
            id: "IQ",
            name: "Iraq"
        }, {
            id: "IE",
            name: "Ireland"
        }, {
            id: "IL",
            name: "Israel"
        }, {
            id: "IT",
            name: "Italy"
        }, {
            id: "JM",
            name: "Jamaica"
        }, {
            id: "JP",
            name: "Japan"
        }, {
            id: "JO",
            name: "Jordan"
        }, {
            id: "KZ",
            name: "Kazakstan"
        }, {
            id: "KW",
            name: "Kuwait"
        }, {
            id: "KG",
            name: "Kyrgyzstan"
        }, {
            id: "LA",
            name: "Lao Peoples Democratic Republic"
        }, {
            id: "LV",
            name: "Latvia"
        }, {
            id: "LB",
            name: "Lebanon"
        }, {
            id: "LT",
            name: "Lithuania"
        }, {
            id: "LU",
            name: "Luxembourg"
        }, {
            id: "MO",
            name: "Macau"
        }, {
            id: "MY",
            name: "Malaysia"
        }, {
            id: "MT",
            name: "Malta"
        }, {
            id: "MQ",
            name: "Martinique"
        }, {
            id: "MX",
            name: "Mexico"
        }, {
            id: "FM",
            name: "Micronesia"
        }, {
            id: "MN",
            name: "Mongolia"
        }, {
            id: "MS",
            name: "Montserrat"
        }, {
            id: "NA",
            name: "Namibia"
        }, {
            id: "NL",
            name: "Netherlands"
        }, {
            id: "AN",
            name: "Netherlands Antilles"
        }, {
            id: "NZ",
            name: "New Zealand"
        }, {
            id: "NI",
            name: "Nicaragua"
        }, {
            id: "NO",
            name: "Norway"
        }, {
            id: "OM",
            name: "Oman"
        }, {
            id: "PS",
            name: "Palestinian Territory, Occupied"
        }, {
            id: "PG",
            name: "Papua New Guinea"
        }, {
            id: "PY",
            name: "Paraguay"
        }, {
            id: "PH",
            name: "Philippines"
        }, {
            id: "PL",
            name: "Poland"
        }, {
            id: "PT",
            name: "Portugal"
        }, {
            id: "QA",
            name: "Qatar"
        }, {
            id: "MK",
            name: "Republic of Macedonia"
        }, {
            id: "RO",
            name: "Romania"
        }, {
            id: "RU",
            name: "Russia"
        }, {
            id: "SM",
            name: "San Marino"
        }, {
            id: "SA",
            name: "Saudi Arabia"
        }, {
            id: "RS",
            name: "Serbia"
        }, {
            id: "SG",
            name: "Singapore"
        }, {
            id: "SK",
            name: "Slovakia"
        }, {
            id: "SI",
            name: "Slovenia"
        }, {
            id: "ZA",
            name: "South Africa"
        }, {
            id: "KR",
            name: "South Korea"
        }, {
            id: "ES",
            name: "Spain"
        }, {
            id: "LK",
            name: "Sri Lanka"
        }, {
            id: "KN",
            name: "St. Christopher (St. Kitts) Nevis"
        }, {
            id: "LC",
            name: "St. Lucia"
        }, {
            id: "PM",
            name: "St. Pierre and Miquelon"
        }, {
            id: "VC",
            name: "St. Vincent and The Grenadines"
        }, {
            id: "SR",
            name: "Suriname"
        }, {
            id: "SE",
            name: "Sweden"
        }, {
            id: "CH",
            name: "Switzerland"
        }, {
            id: "SY",
            name: "Syrian Arab Republic"
        }, {
            id: "TW",
            name: "Taiwan"
        }, {
            id: "TH",
            name: "Thailand"
        }, {
            id: "TT",
            name: "Trinidad and Tobago"
        }, {
            id: "TR",
            name: "Turkey"
        }, {
            id: "TC",
            name: "Turks and Caicos Islands"
        }, {
            id: "UA",
            name: "Ukraine"
        }, {
            id: "AE",
            name: "United Arab Emirates"
        }, {
            id: "UY",
            name: "Uruguay"
        }, {
            id: "VI",
            name: "US Virgin Islands"
        }, {
            id: "VE",
            name: "Venezuela"
        }, {
            id: "VN",
            name: "Vietnam"
        }, {
            id: "YE",
            name: "Yemen"
        }], c.states = [{
            id: "0",
            name: "Please Select",
            countryId: "CA"
        }, {
            id: "AB",
            name: "Alberta",
            countryId: "CA"
        }, {
            id: "BC",
            name: "British Columbia",
            countryId: "CA"
        }, {
            id: "MB",
            name: "Manitoba",
            countryId: "CA"
        }, {
            id: "NB",
            name: "New Brunswick",
            countryId: "CA"
        }, {
            id: "NF",
            name: "Newfoundland and Labrador",
            countryId: "CA"
        }, {
            id: "NT",
            name: "Northwest Territories",
            countryId: "CA"
        }, {
            id: "NS",
            name: "Nova Scotia",
            countryId: "CA"
        }, {
            id: "NU",
            name: "Nunavut",
            countryId: "CA"
        }, {
            id: "ON",
            name: "Ontario",
            countryId: "CA"
        }, {
            id: "PE",
            name: "Prince Edward Island",
            countryId: "CA"
        }, {
            id: "QC",
            name: "Quebec",
            countryId: "CA"
        }, {
            id: "SK",
            name: "Saskatchewan",
            countryId: "CA"
        }, {
            id: "YT",
            name: "Yukon",
            countryId: "CA"
        }, {
            id: "AN",
            name: "Andaman and Nicobar Islands",
            countryId: "IN"
        }, {
            id: "AP",
            name: "Andhra Pradesh",
            countryId: "IN"
        }, {
            id: "AR",
            name: "Arunachal Pradesh",
            countryId: "IN"
        }, {
            id: "AS",
            name: "Assam",
            countryId: "IN"
        }, {
            id: "BR",
            name: "Bihar",
            countryId: "IN"
        }, {
            id: "CH",
            name: "Chandigarh",
            countryId: "IN"
        }, {
            id: "CT",
            name: "Chhattisgarh",
            countryId: "IN"
        }, {
            id: "DN",
            name: "Dadra and Nagar Haveli",
            countryId: "IN"
        }, {
            id: "DD",
            name: "Daman and Diu",
            countryId: "IN"
        }, {
            id: "DL",
            name: "Delhi",
            countryId: "IN"
        }, {
            id: "GA",
            name: "Goa",
            countryId: "IN"
        }, {
            id: "GJ",
            name: "Gujarat",
            countryId: "IN"
        }, {
            id: "HR",
            name: "Haryana",
            countryId: "IN"
        }, {
            id: "HP",
            name: "Himachal Pradesh",
            countryId: "IN"
        }, {
            id: "JK",
            name: "Jammu and Kashmir",
            countryId: "IN"
        }, {
            id: "JH",
            name: "Jharkhand",
            countryId: "IN"
        }, {
            id: "KA",
            name: "Karnataka",
            countryId: "IN"
        }, {
            id: "KL",
            name: "Kerala",
            countryId: "IN"
        }, {
            id: "LD",
            name: "Lakshadweep",
            countryId: "IN"
        }, {
            id: "MP",
            name: "Madhya Pradesh",
            countryId: "IN"
        }, {
            id: "MH",
            name: "Maharashtra",
            countryId: "IN"
        }, {
            id: "MN",
            name: "Manipur",
            countryId: "IN"
        }, {
            id: "ML",
            name: "Meghalaya",
            countryId: "IN"
        }, {
            id: "MZ",
            name: "Mizoram",
            countryId: "IN"
        }, {
            id: "NL",
            name: "Nagaland",
            countryId: "IN"
        }, {
            id: "OR",
            name: "Orissa",
            countryId: "IN"
        }, {
            id: "PY",
            name: "Pondicherry",
            countryId: "IN"
        }, {
            id: "PB",
            name: "Punjab",
            countryId: "IN"
        }, {
            id: "RJ",
            name: "Rajasthan",
            countryId: "IN"
        }, {
            id: "SK",
            name: "Sikkim",
            countryId: "IN"
        }, {
            id: "TN",
            name: "Tamil Nadu",
            countryId: "IN"
        }, {
            id: "TR",
            name: "Tripura",
            countryId: "IN"
        }, {
            id: "UP",
            name: "Uttar Pradesh",
            countryId: "IN"
        }, {
            id: "UL",
            name: "Uttaranchal",
            countryId: "IN"
        }, {
            id: "WB",
            name: "West Bengal",
            countryId: "IN"
        }, {
            id: "CT",
            name: "Australian Capital Territory",
            countryId: "AU"
        }, {
            id: "NS",
            name: "New South Wales",
            countryId: "AU"
        }, {
            id: "NT",
            name: "Northern Territory",
            countryId: "AU"
        }, {
            id: "QL",
            name: "Queensland",
            countryId: "AU"
        }, {
            id: "SA",
            name: "South Australia",
            countryId: "AU"
        }, {
            id: "TS",
            name: "Tasmania",
            countryId: "AU"
        }, {
            id: "VI",
            name: "Victoria",
            countryId: "AU"
        }, {
            id: "WA",
            name: "Western Australia",
            countryId: "AU"
        }, {
            id: "AA",
            name: "Armed Forces (the) Americas",
            countryId: "US"
        }, {
            id: "AE",
            name: "Armed Forces Europe",
            countryId: "US"
        }, {
            id: "AE",
            name: "Armed Forces Africa",
            countryId: "US"
        }, {
            id: "AE",
            name: "Armed Forces Middle East",
            countryId: "US"
        }, {
            id: "AE",
            name: "Armed Forces Canada",
            countryId: "US"
        }, {
            id: "AP",
            name: "Armed Forces Pacific",
            countryId: "US"
        }, {
            id: "AL",
            name: "Alabama",
            countryId: "US"
        }, {
            id: "AK",
            name: "Alaska",
            countryId: "US"
        }, {
            id: "AZ",
            name: "Arizona",
            countryId: "US"
        }, {
            id: "AR",
            name: "Arkansas",
            countryId: "US"
        }, {
            id: "CA",
            name: "California",
            countryId: "US"
        }, {
            id: "CO",
            name: "Colorado",
            countryId: "US"
        }, {
            id: "CT",
            name: "Connecticut",
            countryId: "US"
        }, {
            id: "DE",
            name: "Delaware",
            countryId: "US"
        }, {
            id: "DC",
            name: "District of Columbia",
            countryId: "US"
        }, {
            id: "FL",
            name: "Florida",
            countryId: "US"
        }, {
            id: "GA",
            name: "Georgia",
            countryId: "US"
        }, {
            id: "HI",
            name: "Hawaii",
            countryId: "US"
        }, {
            id: "id",
            name: "idaho",
            countryId: "US"
        }, {
            id: "IL",
            name: "Illinois",
            countryId: "US"
        }, {
            id: "IN",
            name: "Indiania",
            countryId: "US"
        }, {
            id: "IA",
            name: "Iowa",
            countryId: "US"
        }, {
            id: "KS",
            name: "Kansas",
            countryId: "US"
        }, {
            id: "KY",
            name: "Kentucky",
            countryId: "US"
        }, {
            id: "LA",
            name: "Louisiana",
            countryId: "US"
        }, {
            id: "ME",
            name: "Maine",
            countryId: "US"
        }, {
            id: "MD",
            name: "Maryland",
            countryId: "US"
        }, {
            id: "MA",
            name: "Massachusetts",
            countryId: "US"
        }, {
            id: "MI",
            name: "Michigan",
            countryId: "US"
        }, {
            id: "MN",
            name: "Minnesota",
            countryId: "US"
        }, {
            id: "MS",
            name: "Mississippi",
            countryId: "US"
        }, {
            id: "MO",
            name: "Missouri",
            countryId: "US"
        }, {
            id: "MT",
            name: "Montana",
            countryId: "US"
        }, {
            id: "NE",
            name: "Nebraska",
            countryId: "US"
        }, {
            id: "NV",
            name: "Nevada",
            countryId: "US"
        }, {
            id: "NH",
            name: "New Hampshire",
            countryId: "US"
        }, {
            id: "NJ",
            name: "New Jersey",
            countryId: "US"
        }, {
            id: "NM",
            name: "New Mexico",
            countryId: "US"
        }, {
            id: "NY",
            name: "New York",
            countryId: "US"
        }, {
            id: "NC",
            name: "North Carolina",
            countryId: "US"
        }, {
            id: "ND",
            name: "North Dakota",
            countryId: "US"
        }, {
            id: "OH",
            name: "Ohio",
            countryId: "US"
        }, {
            id: "OK",
            name: "Oklahoma",
            countryId: "US"
        }, {
            id: "OR",
            name: "Oregon",
            countryId: "US"
        }, {
            id: "PA",
            name: "Pennsylvania",
            countryId: "US"
        }, {
            id: "RI",
            name: "Rhode Island",
            countryId: "US"
        }, {
            id: "SC",
            name: "South Carolina",
            countryId: "US"
        }, {
            id: "SD",
            name: "South Dakota",
            countryId: "US"
        }, {
            id: "TN",
            name: "Tennessee",
            countryId: "US"
        }, {
            id: "TX",
            name: "Texas",
            countryId: "US"
        }, {
            id: "UT",
            name: "Utah",
            countryId: "US"
        }, {
            id: "VT",
            name: "Vermont",
            countryId: "US"
        }, {
            id: "VA",
            name: "Virginia",
            countryId: "US"
        }, {
            id: "WA",
            name: "Washington",
            countryId: "US"
        }, {
            id: "WV",
            name: "West Virginia",
            countryId: "US"
        }, {
            id: "WI",
            name: "Wisconsin",
            countryId: "US"
        }, {
            id: "WY",
            name: "Wyoming",
            countryId: "US"
        }], c.cities = [{
            name: "Chandler",
            id: "CHD",
            stateId: "AZ"
        }, {
            name: "Fort Huachuca",
            id: "FHU",
            stateId: "AZ"
        }, {
            name: "Grand Canyon",
            id: "GCN",
            stateId: "AZ"
        }, {
            name: "Kingman",
            id: "IGM",
            stateId: "AZ"
        }, {
            name: "Mesa",
            id: "MSC",
            stateId: "AZ"
        }, {
            name: "Page",
            id: "PGA",
            stateId: "AZ"
        }, {
            name: "Phoenix",
            id: "PHX",
            stateId: "AZ"
        }, {
            name: "Prescott",
            id: "PRC",
            stateId: "AZ"
        }, {
            name: "Tucson",
            id: "TUS",
            stateId: "AZ"
        }, {
            name: "Traverse City",
            id: "TVC",
            stateId: "AZ"
        }, {
            name: "Yuma",
            id: "YUM",
            stateId: "AZ"
        }, {
            name: "Anniston",
            id: "ANB",
            stateId: "AL"
        }, {
            name: "Birmingham",
            id: "BHM",
            stateId: "AL"
        }, {
            name: "Dothan",
            id: "DHN",
            stateId: "AL"
        }, {
            name: "Huntsville",
            id: "HSV",
            stateId: "AL"
        }, {
            name: "Montgomery",
            id: "MGM",
            stateId: "AL"
        }, {
            name: "Mobile",
            id: "MOB",
            stateId: "AL"
        }, {
            name: "Muscle Shoals Florence",
            id: "MSL",
            stateId: "AL"
        }], c.updateCountry = function() {
            c.availableStates = [], angular.forEach(c.states, function(a) {
                a.countryId == c.country.id && c.availableStates.push(a)
            }), "0" == c.availableStates.length && ($("#mystate").css("display", "none"), $("#nostate").css("display", "block")), c.availableStates.length > "0" && ($("#mystate").css("display", "block"), $("#nostate").css("display", "none"))
        }, c.updateState = function() {
            c.availableCities = [], angular.forEach(c.cities, function(a) {
                a.stateId == c.state.id && c.availableCities.push(a)
            })
        }, c.convertToDate = function(a) {
            var b = new Date(a);
            return b.setDate(b.getDate()), b
        }, c.submitSearch = function(id) {
    		
  		  if(id.stayCity  === undefined ){
  			document.cookie = "EngineView=Flight";
  		    c.froCity=id.OriginAirport.CityName+"("+id.OriginAirport.AirportCode+"), "+id.OriginAirport.AirportName+", "+id.OriginAirport.Country;
  	        c.toCity=id.DestinationAirport.CityName+"("+id.DestinationAirport.AirportCode+"), "+id.DestinationAirport.AirportName+", "+id.DestinationAirport.Country;
  	        $("#froCity").val(c.froCity);
            $("#toCity").val(c.toCity)
  	        
  	        if(checkMonth(id.TravelDate)){
  		        c.departDate=id.TravelDate;
  		       }else{
  		    	  var mx = 2; 
  			        var minDate = new Date();
  			        minDate.setDate(minDate.getDate() + mx);
  			        var dt_to = $.datepicker.formatDate('mm-dd-yy', minDate);
  		    	   c.departDate=dt_to;
  		       }
  	        
  	        
  	       
  	        
  	     //   c.departDate=id.TravelDate;
  	     //   c.returnDate=id.ReturnDate;
  	        c.airlines="All";
  	        c.FlexibleSearch="false";
  	       // alert("aaa"+id.TravelDate);
  	        c.showSomething = function(input) {
  	            return input == "true" ? "2" : "1";
  	        };
  	       c.tripType= c.showSomething(id.SearchReturnFlight);
  	      
  	       if(id.SearchReturnFlight == "true"){
  	    	 if(checkMonth(id.ReturnDate)){
    		        c.returnDate=id.ReturnDate;
    		       }else{
    		    	  var mx = 9; 
    			        var minDate = new Date();
    			        minDate.setDate(minDate.getDate() + mx);
    			        var dt_to = $.datepicker.formatDate('mm-dd-yy', minDate);
    		    	   c.returnDate=dt_to;
    		       }
  	    	 
  	    	  // ddlTypejourneyChange(2);
  	    	 	$("#returnDiv").show();
  	    	 	$("#rt").addClass("active");
  	    	 	$("#ow").removeClass("active");
				
  	           angular.element(document.getElementById('returnDate'))[0].disabled = false;
  	       }else{
  	    	
  	    	   ddlTypejourneyChange(1);
  	    	   angular.element(document.getElementById('returnDate'))[0].disabled = true;
  	       }
  	       
  	        c.cabinClass=id.CabinType;
  	        
  	        c.adult=String(id.Adults);
  	        c.child=String(id.Children);
  	        c.infant=String(id.Infants);
  	        c.infantWs=String(id.InfantWs);
  	      //  alert(id.OriginAirport.CityName);
  	        c.filterTextTimeout;
  	        if (c.filterTextTimeout) e.cancel(c.filterTextTimeout);

  	       
  	        c.filterTextTimeout = e(function() {
  	        	submitForm();
  	        }, 250); // delay 250 ms
  		  }else{
  			  
  			document.cookie = "EngineView=Hotell";
  			    c.stayCity=id.stayCity;
  		        c.checkInDate=id.checkInDate;
  		        c.checkOutDate=id.checkOutDate;
  		        
  		        c.rooms="1";
  		        c.rooms0adult="1";
  		        c.rooms0child="0";
  		        
  		        
  		       c.filterTextTimeout;
  		        if (c.filterTextTimeout) e.cancel(c.filterTextTimeout);

  		       
  		        c.filterTextTimeout = e(function() {
  		        	submitHotelForm();
  		        }, 250); 
  		  }
  	        
  	        
  	  },c.showSomething = function(a) {
          return "true" == a ? "2" : "1"
      }, c.signup = function() {
            if (null == c.email) return null;
            //console.log(c.email);
            ({
                emailId: c.email
            });
            a.post("/newssignup/" + c.email).success(function(a) {
                "already Registered" == a ? alert("You are already subscribed") : alert("You are Successfully subscribed. Please check your mail box and verify to complete your email subscription."), c.email = ""
            }).error(function(a) {})
        }, c.PostDealss = function(b) {
            a.get("/PostDeals/" + b).success(function(a) {
            	c.newarr = [];
            	c.searchQueryList =  [];
            	
            	/*if (c.dealList = a, null != d.get("lkfhistory")) {
                    c.sessQueryList = d.get("lkfhistory"), angular.forEach(c.sessQueryList, function(a) {
                        var b = JSON.parse(a);
                        void 0 === b.stayCity ? void 0 === b.CabinType || c.searchQueryList.push(JSON.parse(a)) : c.searchQueryList.push(JSON.parse(a))
                    }), console.log(c.searchQueryList), c.newarrs = [], c.unique = {}, angular.forEach(c.searchQueryList, function(a) {
                        void 0 === a.stayCity ? "true" == a.SearchReturnFlight ? c.unique[a.TripType + a.OriginAirport.AirportCode + a.DestinationAirport.AirportCode + a.TravelDate + a.ReturnDate] || (c.newarrs.push(a), c.unique[a.TripType + a.OriginAirport.AirportCode + a.DestinationAirport.AirportCode + a.TravelDate + a.ReturnDate] = a) : c.unique[a.TripType + a.OriginAirport.AirportCode + a.DestinationAirport.AirportCode + a.TravelDate] || (c.newarrs.push(a), c.unique[a.TripType + a.OriginAirport.AirportCode + a.DestinationAirport.AirportCode + a.TravelDate] = a) : c.unique[a.stayCity + a.checkInDate + a.checkOutDate] || (c.newarrs.push(a), c.unique[a.stayCity + a.checkInDate + a.checkOutDate] = a)
                    }), c.hotelItem = [], c.currentItem = [], c.lastItem = [], c.newarrs.length >= 4 ? c.newarr = c.newarrs.slice(-3) : c.newarr = c.newarrs, console.log(c.newarr);
                    var index = c.newarr.length;
                    if (angular.forEach(c.newarr, function(a) {
                    	 c.currentItem = a;
                    	  if(c.currentItem.CabinType === undefined){
                    	  }else{
                    		  c.lastItem = a;
                    	  }
                    	  if(c.currentItem.stayCity === undefined){
                    		  
                    	  }else{
                    		  c.hotelItem = a;
                    	  }
                    index=index-1;
                    
                    	
                            0 == c.lastItem.length && (c.currentItem = a, void 0 === c.currentItem.CabinType || (c.lastItem = a)), 0 == c.hotelItem.length && (c.currentItem = a, void 0 === c.currentItem.stayCity || (c.hotelItem = a)), b -= 1
                        }), 0 != c.hotelItem.length) {
                        c.stayCity = c.hotelItem.stayCity, c.checkInDate = c.hotelItem.checkInDate, c.checkOutDate = c.hotelItem.checkOutDate, c.rooms = "1", c.rooms0adult = "1", c.rooms0child = "0";
                        var e = new Date(c.checkInDate),
                            f = new Date(c.checkOutDate),
                            g = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                            h = new Array(7);
                        h[1] = "MON", h[2] = "TUE", h[3] = "WED", h[4] = "THU", h[5] = "FRI", h[6] = "SAT", h[0] = "SUN", r = e.getDate(), s = g[e.getMonth()];
                        var i = h[e.getUTCDay()];
                        r = f.getDate(), s = g[f.getMonth()];
                        var i = h[f.getUTCDay()]
                    } else {
                        var g = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                            h = new Array(7);
                        h[1] = "MON", h[2] = "TUE", h[3] = "WED", h[4] = "THU", h[5] = "FRI", h[6] = "SAT", h[0] = "SUN";
                        var j = 2;
                        checkInDate = new Date, checkInDate.setDate(checkInDate.getDate() + j), checkday = checkInDate.getDate(), s = g[checkInDate.getMonth()], i = h[checkInDate.getUTCDay()];
                        var k = 7;
                        f = new Date, f.setDate(f.getDate() + k), r = f.getDate(), s = g[f.getMonth()];
                        var i = h[f.getUTCDay()],
                            l = $.datepicker.formatDate("mm-dd-yy", checkInDate),
                            m = $.datepicker.formatDate("mm-dd-yy", f);
                        c.checkInDate = l, c.checkOutDate = m, c.rooms = "1", c.rooms0adult = "1", c.rooms0child = "0"
                    }
                    if (0 != c.lastItem.length) {
                        new Date;
                        c.froCity=c.lastItem.OriginAirport.CityName+"("+c.lastItem.OriginAirport.AirportCode+"), "+c.lastItem.OriginAirport.AirportName+", "+c.lastItem.OriginAirport.Country;
                        c.toCity=c.lastItem.DestinationAirport.CityName+"("+c.lastItem.DestinationAirport.AirportCode+"), "+c.lastItem.DestinationAirport.AirportName+", "+c.lastItem.DestinationAirport.Country;
                       // .input_cont.x
                        angular.element(document.getElementById("froCity")).addClass("input_cont x");
                        angular.element(document.getElementById("toCity")).addClass("input_cont x");
                        if(checkMonth(c.lastItem.TravelDate)){
                            c.departDate=c.lastItem.TravelDate;
                           }else{
                        	   var mx = 2; 
                    	        var minDate = new Date();
                    	        minDate.setDate(minDate.getDate() + mx);
                    	        var dt_to = $.datepicker.formatDate('mm-dd-yy', minDate);
                        	   c.departDate=dt_to;
                           }
                        c.airlines = "All", c.FlexibleSearch = "false";
                        c.tripType = c.showSomething(c.lastItem.SearchReturnFlight)
                        //console.log("c.lastItem.SearchReturnFlight"+c.lastItem.SearchReturnFlight);
                        //console.log(c.tripType);
                        if ("2" == c.tripType) {
                        	//console.log(c.tripType);
                        	if("2" == c.tripType){
                       	     if(checkMonth(c.lastItem.ReturnDate)){
            			        c.returnDate=c.lastItem.ReturnDate;
            			       }else{
            			    	  var mx = 9; 
           				        var minDate = new Date();
           				        minDate.setDate(minDate.getDate() + mx);
           				        var dt_to = $.datepicker.formatDate('mm-dd-yy', minDate);
            			    	   c.returnDate=dt_to;
            			       }
               	             c.tripType= "2";  
               	             angular.element(document.getElementById('tripType'))[0].value = "2";
               	               ddlTypejourneyChange("2");
               	            angular.element(document.getElementById('returnDate'))[0].disabled = false;
               	          //   $('#rt').attr('checked','checked');
                        	}
                        	
                        } else if ("1" == c.tripType) {

                        	//console.log(c.tripType);
    					    ddlTypejourneyChange("1");
    					    angular.element(document.getElementById('returnDate'))[0].disabled = true;
    	                    c.tripType= "1";  
    	                    angular.element(document.getElementById('tripType'))[0].value = "1";
    	                   // $("input[name=optradio][value='ow']").prop("checked",true);
    	                   // $('#ow').attr('checked','checked');
    				
                        }
                        //console.log(c.tripType);
                        ddlTypejourneyChange(c.tripType);
                        c.cabinClass = c.lastItem.CabinType, c.adult = String(c.lastItem.Adults), c.child = String(c.lastItem.Children), c.infant = String(c.lastItem.Infants), c.infantWs = String(c.lastItem.InfantWs)
                    } else {
                        c.tripType = "2", angular.element(document.getElementById("tripType"))[0].value = "2", c.airlines = "All", c.FlexibleSearch = "false", c.cabinClass = "Economy", c.adult = "1", c.child = "0", c.infant = "0", c.infantWs = "0";
                        var o = 1,
                            e = new Date;
                        e.setDate(e.getDate() + o);
                            k = 7;
                        f = new Date, f.setDate(f.getDate() + k);
                        var i = h[f.getUTCDay()],
                            t = $.datepicker.formatDate("mm-dd-yy", e),
                            m = $.datepicker.formatDate("mm-dd-yy", f);
                        c.departDate = t, c.returnDate = m
                    }
                } else {*/
                	c.tripType= "2";
		     angular.element(document.getElementById('tripType'))[0].value = "2";
		     
		     c.airlines="All";
		     c.FlexibleSearch="false";
		     c.cabinClass="Economy";
	        
	        c.adult="1";
	        c.child="0";
	        c.infant="0";
	        c.infantWs="0";
	        
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
	   			//console.log(dt_to);
	   			//console.log(dt_from);
	   			
	   		   c.departDate=dt_to;
	    	   c.returnDate=dt_from;
	    	   
	    	   
	    	   /**Hotel Setting***/
	    	   
	    	    var ch = 2;    
	            checkInDate = new Date();
	           checkInDate.setDate(checkInDate.getDate() + ch); 
	             var checkInDate_from = $.datepicker.formatDate('mm-dd-yy', checkInDate);
	             c.checkInDate=checkInDate_from;
			        c.checkOutDate=dt_from;
	    	   c.rooms="1";
		        c.rooms0adult="1";
		        c.rooms0child="0";
		        /*}*/
              //  var js = 2;
          	   // returnsDate = new Date, returnsDate.setDate(returnsDate.getDate()  + js);
                
				//c.returnDate = $.datepicker.formatDate("mm-dd-yy", returnsDate);
             
                if (1 == c.newarr.length) {
                    var u = document.getElementById("searchPadList");
                    u.innerHTML = "<b class='history-show'>1</b>"
                } else if (2 == c.newarr.length) {
                    var u = document.getElementById("searchPadList");
                    u.innerHTML = "<b class='history-show'>2</b>"
                } else if (c.newarr.length > 2) {
                    var u = document.getElementById("searchPadList");
                    u.innerHTML = "<b class='history-show'>3</b>"
                }
            }).error(function(a) {})
        },c.flightDealSearch = function(cabin, trip, f1, f2, f3, f4, t1, t2, t3, t4, depart, ret) {
        	
        	
        	
    		key=false;
            var myDate = new Date();


            var minDate = new Date(c.checkInDate);
            var returnsDate = new Date(c.checkOutDate);


            document.getElementById('froCity').value = f1 + "(" + f2 + "), " + f3 + ", " + f4;
            document.getElementById('toCity').value = t1 + "(" + t2 + "), " + t3 + ", " + t4;
            if (new Date(depart) < new Date(myDate)) {
                var departDate = f('date')(new Date(myDate), 'd-M-yyyy');
            }
            else {
                var departDate = f('date')(new Date(depart), 'd-M-yyyy');
            }

            document.getElementById('departDate').value = departDate;
            if (trip == 'RoundTrip') {
                document.getElementById('tripType').value = 2;
                document.getElementById('returnDate').value = f('date')(new Date(ret), 'd-M-yyyy');
            }
            if (trip == 'OneWay') {
                document.getElementById('tripType').value = 1;
            }

            document.getElementById('cabinClass').value = cabin;
            /*document.getElementById('select-air').value=airline;*/

            submitForm();
        },c.OnCarDealSearch = function (pickupLocationId, pickUpLocationDisplay, pickUpCity, dropOffCity, pickUpDate, dropOffDate) {
        	
        	var currDate = new Date();
         	currDate.setMonth(currDate.getMonth()+1);
            
         	var pickuptime = '10:00';
            var dropofftime = '10:00';
         	
         	var addedPickDate = leadingZeroAjax(currDate.getDate())+'-'+leadingZeroAjax(currDate.getMonth()+1)+'-'+currDate.getFullYear();
      		currDate.setDate(currDate.getDate()+3);
      		var addedDropDate = leadingZeroAjax(currDate.getDate())+'-'+leadingZeroAjax(currDate.getMonth()+1)+'-'+currDate.getFullYear();
      		
        	document.getElementById('pickupCity').value = pickUpLocationDisplay;
        	document.getElementById('pickUpLocationID').value =pickupLocationId;
        	document.getElementById('pickUpLocationCode').value =pickUpCity;
        	document.getElementById('dropOffLocationCode').value =dropOffCity;
        	document.getElementById('dropCity').value ='';
        	document.getElementById('pickupDate').value =addedPickDate;
        	document.getElementById('dropDate').value =addedDropDate;
        	document.getElementById('driverAge').value =35;
        	document.getElementById('pickupTime').value = pickuptime;
        	document.getElementById('dropTime').value = dropofftime;
        	
        	var b = randomString(12);
        	$("form#searchCar").attr({
            	action: "/carSearch/id/" + b
        	});
        	
        	$("form#searchCar").submit();
        }
    }])
    
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
}(); // JavaScript Document


// call hide on resize function js
$(window).resize(function(){
  if($(window).width() > 767){
	  $('.bottom-call-bar').css('bottom','-66px');
	  }
	else{
		 $('.bottom-call-bar').css('bottom','-66px');
		}
  
  });

// call hide on scroll js
$(window).scroll(function(){
	if($(window).width() < 767){
	$('.bottom-call-bar').css('bottom','0px');
	setTimeout(function(){$('.bottom-call-bar').css('bottom','0px')	;},3000)
	}
	else{
		 $('.bottom-call-bar').css('bottom','-66px');
		}
	 
});

// input focus on scroll js
$('#froCity').focus(function(){
 if($(window).width() < 767){
 $('html,body').animate({
  scrollTop: $('#froCity').offset().top - 75},
  'slow');
  $('.bottom-call-bar').css('bottom','-66px');
	setTimeout(function(){$('.bottom-call-bar').css('bottom','0px')	;},3000)
 }

});
//

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


/*function OnCarDealSearch(pickupLocationId, pickUpLocationDisplay, pickUpCity, dropOffCity, pickUpDate, dropOffDate) {
	
	pickUpDate = pickUpDate.substring(0, pickUpDate.indexOf('T'));
	dropOffDate = dropOffDate.substring(0, dropOffDate.indexOf('T'));
	
	var pDate = new Date(pickUpDate);
	var dDate = new Date(dropOffDate);
	
	pickUpDate = leadingZeroAjax(pDate.getMonth()+1) +'-'+leadingZeroAjax(pDate.getDate())+'-'+(pDate.getFullYear());
	dropOffDate = leadingZeroAjax(dDate.getMonth()+1) +'-'+leadingZeroAjax(dDate.getDate())+'-'+(dDate.getFullYear());
	
	$('#pickupCity').val(pickUpLocationDisplay);
	$('#pickUpLocationID').val(pickupLocationId);
	$('#pickUpLocationCode').val(pickUpCity);
	$('#dropOffLocationCode').val(dropOffCity);
	$('#dropCity').val('');
	$('#pickupDate').val(pickUpDate);
	$('#dropDate').val(dropOffDate);
	$('#driverAge').val(35);
	$('#pickupTime').val('10:00');
	$('#dropTime').val('10:00');
	
	var b = randomString(12);
	$("form#searchCar").attr({
    	action: "/carSearch/id/" + b
	});
	
	$("form#searchCar").submit();
}*/

function leadingZeroAjax(value) {
	if (value < 10) {
	return "0" + value.toString();
	}
	return value.toString();
}










