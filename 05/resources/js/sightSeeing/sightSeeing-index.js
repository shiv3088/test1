jQuery(document).ready(function(){
	jQuery("#destinationName").keyup(function(event) {
		name = jQuery("#destinationName").val();
		name = name.replace(/[^a-zA-Z 0-9.]+/g,'');
		jQuery("#destinationName").val(name);
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

    var dSelectTo = null;

    var t = !0, e = !0;
    $("#destinationName").autocomplete({
        source: function(t, e) {
            $.getJSON("/get_sightSeeing_location_list", {
                term: extractLast(t.term)
            }, e);
        },
        change: function(event, ui) {
            if (!ui.item) {
                $("#destinationName").val("");
            }
        },
        search: function() {
            var t = extractLast(this.value);
            return t.length < 3 ? !1 : void 0;
        },
        focus: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;

            var hl = cityImage.split('</i>')[0] + '</i>';
            var h = cityImage.split('</i>')[1];
            var hdn = h.split("<span style='display: none;'>")[0];
            var hid = (h.split("<span style='display: none;'>")[1]).split("--")[0];
            var hCode = (cityImage.split('--')[1]).split("</span>")[0];
            hCode = ((hCode == null) || (hCode == 'null')) ? '' : hCode;
            
            $('#locationId').val(hid);
            $('#destinationCode').val(hCode);

            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            dSelectTo = !1;
            this.value = hdn;
            
            return !1
        },
        select: function(event, ui) {

            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;

            var hl = cityImage.split('</i>')[0] + '</i>';
            var h = cityImage.split('</i>')[1];
            var hdn = h.split("<span style='display: none;'>")[0];
            var hid = (h.split("<span style='display: none;'>")[1]).split("--")[0];
            var hCode = (cityImage.split('--')[1]).split("</span>")[0];
            hCode = ((hCode == null) || (hCode == 'null')) ? '' : hCode;
            
            $('#locationId').val(hid);
            $('#destinationCode').val(hCode);
            
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            dSelectTo = true;
            this.value = hdn;
            
            return !1
        }
    }).blur(function() {
    	if((dSelectTo == null) || (dSelectTo == false)) {
    		var dN = $("ul#ui-id-1 li:first a").html();
        	$('#locationId').val(dN.substring(dN.indexOf("display: none;\">")+16, dN.indexOf("--")));
        	dN = dN.substring(dN.indexOf("</i>")+4, dN.indexOf("<span style"))
        	t && -1 == $("#destinationName").val().indexOf(",") && $("#destinationName").val(dN);
    	}
    	
    })

});

$(function() {
    var dd = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    today = monthNames[dd.getMonth()] + ' ' + dd.getDate() + ' ' + dd.getFullYear();

    var ch = 2;
    checkInDate = new Date();
    checkInDate.setDate(checkInDate.getDate() + ch);

    var xs = 7;
    returnsDate = new Date();
    returnsDate.setDate(returnsDate.getDate() + xs);


    var dt_to = $.datepicker.formatDate('yy-mm-dd', new Date());
    var dt_from = $.datepicker.formatDate('yy-mm-dd', returnsDate);
    var checkInDate_from = $.datepicker.formatDate('yy-mm-dd', checkInDate);

    var sDate = $("#sDate").val();
    var eDate = $("#eDate").val();
    
    if (sDate != '') {
        $("#startDate").val(sDate);
        $("#endDate").val(eDate);
    } else {
        $("#startDate").val(checkInDate_from);
        $("#endDate").val(dt_from);
    }
    
    maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 11);

    var e = !0;
    var nOm;
    $(window).resize(function() {
        if ($(window).width() < 768) nOm = 1;
        else nOm = 2;
    }).trigger("resize");
    
    $("#startDate").datepicker({
        changeMonth: false,
        changeYear: false,
        dateFormat: "yy-mm-dd",
        //showButtonPanel: true,
        minDate: checkInDate,
        maxDate: maxDate,
        numberOfMonths: nOm,
        firstDay: 0,
        onClose: function() {
            var a = $("#startDate").datepicker("getDate");
            day = a.getDate(), year = a.getFullYear();
            var b = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            month = b[a.getMonth()];
            var c = new Array(7);
            c[0] = "MON", c[1] = "TUE", c[2] = "WED", c[3] = "THU", c[4] = "FRI", c[5] = "SAT", c[6] = "SUN";
            var f = $("#endDate").datepicker("getDate");

            if (null != a && "" != a) {

                var date_diff = Math.ceil((a.getTime() - Date.parse(today)) / 86400000);
                var maxDatedrop = date_diff + 30 + 'd';

                $("#endDate").datepicker("change", {
                    minDate: new Date(a),
                    maxDate: maxDatedrop
                });
                var g = new Date(a.getFullYear(), a.getMonth(), a.getDate());
                if (null != f) {
                    var h = new Date(f.getFullYear(), f.getMonth(), f.getDate());

                    g > h && ($("#endDate").val($.datepicker.formatDate("yy-mm-dd", new Date(g))), $("#endDate").datepicker("show"))
                } else $("#endDate").val($.datepicker.formatDate("yy-mm-dd", new Date(g))), $("#endDate").datepicker("show")
            }
        }
    });
    
    $("#startDateIcon").click(function(){
        $(".startDate").focus();        
    });
    
     $("#endDateIcon").click(function(){
        $("#endDate").focus();        
    });

    
    
    var pd = $("#startDate").datepicker("getDate");
    var dd = $("#endDate").datepicker("getDate");
    
    var pDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
    var dDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
    
    dDate.setMonth(pDate.getMonth() + 1);

    $("#endDate").datepicker({
        changeMonth: false,
        changeYear: false,
        dateFormat: "yy-mm-dd",
        //showButtonPanel: true,
        minDate: pDate,
        maxDate: dDate,
        firstDay: 0,
        numberOfMonths: nOm,
        onClose: function() {
            var a = $("#startDate").datepicker("getDate"),
                b = $("#endDate").datepicker("getDate");
            day = b.getDate(), year = b.getFullYear();
            var c = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            month = c[b.getMonth()];
            var d = new Array(7);
            d[0] = "MON", d[1] = "TUE", d[2] = "WED", d[3] = "THU", d[4] = "FRI", d[5] = "SAT", d[6] = "SUN";
            
            sightSeeingSearchSubmit(false);
        }
    });
    

})


function extractLast(t) {
    return split(t).pop();
}

function split(t) {
    return t.split(/,\s*/);
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

/* -------- Below Session timed out ---------- */

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

/* -------- Above Session timed out ---------- */
var form_data = $('#sightSeeingSearch').serialize();

function sightSeeingSearchSubmit(flag) {
	
	if (form_data == $('#sightSeeingSearch').serialize()) {
		document.getElementById("sameSearch").style.display="block";
		
		document.getElementById('sightSeeingError').innerHTML = "";
		return false;
    } else {
    	var rndId = randomString(12);
        
        if(flag == true){
        	
        	var validateSightSeeing = $("#sightSeeingSearch").validate({
                rules: {
                    destinationName: {
                        required: true,
                        minlength: 3
                    },
                    /*startDate: "required",
                    endDate: "required"*/
                },
                errorPlacement: function(error, element) {
                },
                messages: {
                    destinationName: "",
                    /*startDate: "",
                    endDate: ""*/
                }
            });
        	
        	var startDate = moment().add(7, 'day').format('YYYY-MM-DD');
            var endDate = moment().add(10, 'day').format('YYYY-MM-DD')

            $('#startDate').val(startDate);
            $('#endDate').val(endDate);
            
            $('form#sightSeeingSearch').attr({action: '/activitysearch/id/'+rndId});
            
            $("form#sightSeeingSearch").submit();
        } else {
        	
        	var validateSightSeeing = $("#sightSeeingSearch1").validate({
                rules: {
                    destinationName: {
                        required: true,
                        minlength: 3
                    }
                },
                errorPlacement: function(error, element) {
                },
                messages: {
                    destinationName: ""
                }
            });
        	
        	$('form#sightSeeingSearch1').attr({action: '/activitysearch/id/'+rndId});
        	
            $("form#sightSeeingSearch1").submit();
        }
    }

}

function dealSearchToListing(destinationName, destinationId){
	
	/*$.ajax({
		url: "/get_deal_city_list/"+destinationName,
		type: "get",
		dataType: "JSON",
        success: function(response) {
        	
        	var currDate = new Date();
        	var firstD = new Date(currDate.setDate(currDate.getDate()+7));
        	var secD = new Date(currDate.setDate(currDate.getDate()+3));
        	
        	firstD = firstD.getFullYear()+'-'+leadingZero(firstD.getMonth()+1)+'-'+leadingZero(firstD.getDate())
        	secD = secD.getFullYear()+'-'+leadingZero(secD.getMonth()+1)+'-'+leadingZero(secD.getDate())
        	
        	document.getElementById("destinationName").value = destinationName;
        	document.getElementById("locationId").value = response[0];
        	document.getElementById("startDate").value = firstD;
        	document.getElementById("endDate").value = secD;
        	document.getElementById("startDateBackButton").value = "";
        	document.getElementById("endDateBackButton").value = "";
        	document.getElementById("destinationCode").value="";
        	
        	sightSeeingSearchSubmit(true);
        },
        error: function(error){
        	console.log(error)
        }
    });*/
	
	
	var currDate = new Date();
	var firstD = new Date(currDate.setDate(currDate.getDate()+7));
	var secD = new Date(currDate.setDate(currDate.getDate()+3));
	
	firstD = firstD.getFullYear()+'-'+leadingZero(firstD.getMonth()+1)+'-'+leadingZero(firstD.getDate())
	secD = secD.getFullYear()+'-'+leadingZero(secD.getMonth()+1)+'-'+leadingZero(secD.getDate())
	
	document.getElementById("destinationName").value = destinationName;
	document.getElementById("locationId").value = destinationId;
	document.getElementById("startDate").value = firstD;
	document.getElementById("endDate").value = secD;
	document.getElementById("startDateBackButton").value = "";
	document.getElementById("endDateBackButton").value = "";
	document.getElementById("destinationCode").value="";
	
	sightSeeingSearchSubmit(true);
	
}

function leadingZero(value){
	if (value < 10) {
		return "0" + value.toString();
	}
	return value.toString();
}


/* Below disable back button browser functionality*/

history.pushState(null, null, location.href);
window.onpopstate = function () {
	history.go(1);
};

/* Above disable back button browser functionality*/



var vApp = angular.module("sightSeeingApp", ["LocalStorageModule"]);

vApp.controller('sightSeeingHomeCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {

}]);