/*------ Angular start here -------*/
var sightSeeingDetailResult = angular.module("SightSeeingDetailPage", []);

sightSeeingDetailResult.directive("loading", function() {
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
});

sightSeeingDetailResult.controller("sightSeeingDetailController", ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.noOfResult = 5;
    $scope.showMore = true;
    $scope.resultFound = false;
    $scope.loading = true;
    $scope.totalpax = 1;
    $scope.data = '';
    $scope.productCode = '';
    
    $scope.totalPaxCount = 1;
    $scope.adultValue = 1;
    $scope.childValue = 0;
    $scope.infantValue = 0;
    $scope.youthValue = 0;
    $scope.seniorValue = 0;
    
    $scope.minPaxCount = 1;
    $scope.maxPaxCount = 10;
    $scope.activityDate = '';
    var searchId = $("#currentValue").val();
    $http
        .get("/postDetailedResponseSightSeeing/" + searchId)
        .then(function(response) {
            $scope.data = response.data;
            
            if($scope.data.AvailResponse.ImageURL.indexOf(".jpg") == -1) {
            	$scope.data.AvailResponse.imageValidFlag = false;
    		} else {
    			$scope.data.AvailResponse.imageValidFlag = true;
    		}
            
            if($scope.data.IsSoldOut == false) {
            	$scope.data.ageBandsList = _.sortBy($scope.data.ageBandsList, 'BandID');
                $scope.productCode = $scope.data.AvailResponse.ProductCode;
                $scope.data.SightSeeingSearchRQ.StartDate = $scope.data.SightSeeingSearchRQ.StartDate.substring(0, $scope.data.SightSeeingSearchRQ.StartDate.lastIndexOf('T'));
                $scope.data.SightSeeingSearchRQ.EndDate = $scope.data.SightSeeingSearchRQ.EndDate.substring(0, $scope.data.SightSeeingSearchRQ.EndDate.lastIndexOf('T'));
                var timeDura = $scope.data.AvailResponse.TimeDuration;
                var fPart = timeDura.substring(0, timeDura.indexOf(" ")+1);
                var sPart = timeDura.substring(timeDura.indexOf(" ")+1, timeDura.indexOf(" ")+2).toUpperCase();
                var tPart = timeDura.substring(timeDura.indexOf(" ")+2);
                $scope.data.AvailResponse.TimeDuration = fPart+sPart+tPart;
                	
                $('#activityBookDate').val($scope.data.selectedBookingDate);
                
                setDisabledDates($scope.data.AvailableDates);
                
                _.each($scope.data.ageBandsList, function(obj) {
                	if(obj.Desc === 'Adult') {
                		$scope.adultAgeFrom = obj.AgeFrom;
                		$scope.adultAgeTo = obj.AgeTo;
                	}
                	
                	if(obj.Desc === 'Child') {
                		$scope.childAgeFrom = obj.AgeFrom;
                		$scope.childAgeTo = obj.AgeTo;
                	}
                	
                	if(obj.Desc === 'Infant') {
                		$scope.infantAgeFrom = obj.AgeFrom;
                		$scope.infantAgeTo = obj.AgeTo;
                	}
                	
                	if(obj.Desc === 'Youth') {
                		$scope.youthAgeFrom = obj.AgeFrom;
                		$scope.youthAgeTo = obj.AgeTo;
                	}
                	
                	if(obj.Desc === 'Senior') {
                		$scope.seniorAgeFrom = obj.AgeFrom;
                		$scope.seniorAgeTo = obj.AgeTo;
                	}
                })
            }
            
            $scope.resultFound = true;
            document.getElementById("mainDiv").style.display = "block";
            $scope.loading = false;
        });
    
    
    $scope.moveViewCart = function() {
  	  
  	if($('#currentDevice').val()=="Normal") {
		$window.location = "/activityviewcart/";
	} else if($('#currentDevice').val()=="Mobile") {
		$window.location = "/m/activityviewcart/";
	} else if($('#currentDevice').val()=="Tablet") {
		$window.location = "/t/activityviewcart/";
	} else {
		$window.location = "/activityviewcart/";
	}
    }
    
	$scope.sightSeeingSearchSubmit = function(id) {
		
		$('form#sightSeeingSearch').attr({action: "/activitysearch/id/" + id});
		
	    $("form#sightSeeingSearch").submit();
		
	}

    $scope.addToCart = function(productId, gradeCodeId) {
        
        $('form#sightSeeingCartForm').attr({action: "/activityreviewcart/" + productId + "/" + gradeCodeId});
        
        $("form#sightSeeingCartForm").submit();
    }


    $scope.loadMoreResultFilter = function() {
        if ($scope.noOfResult >= $scope.dataList.length) {
            $scope.showMore = false;
        } else {
            $scope.showMore = true;
        }
    };

    $scope.loadMoreResult = function() {
        $scope.noOfResult = $scope.noOfResult + 5;
        if ($scope.noOfResult >= $scope.dataList.length) {
            $scope.showMore = false;
        }
    };

    $scope.range = function(min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };

    function noFilter(filterObj) {
        for (var key in filterObj) {
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    }
    
    $scope.backSearch = function(searchId) {
    	$window.location = '/activitysearch/id/' + searchId;
    }

    $scope.getCap = function(text) {
        return text.replace(/([a-z])([A-Z])/g, "$1 $2");
    };
    
    $scope.onChangeAge = function(ageBandName, type, bandId) {
    	
        $scope.adultFlag = (document.getElementById('AdultId') == null) ? false : true;
        $scope.childFlag = (document.getElementById('ChildId') == null) ? false : true;
        $scope.infantFlag = (document.getElementById('InfantId') == null) ? false : true;
        $scope.youthFlag = (document.getElementById('YouthId') == null) ? false : true;
        $scope.seniorFlag = (document.getElementById('SeniorId') == null) ? false : true;
    	
    	if(type == 'Add') {
    		if(ageBandName == 'Adult') {
    			$('#adultBand').val(bandId);
    			
    			if(($scope.totalPaxCount < $scope.maxPaxCount) && ($scope.totalPaxCount >= $scope.minPaxCount)) {
    				if($scope.totalPaxCount == 9){
        				
        			} else {
        				$scope.adultValue++;
            			$scope.totalPaxCount++;
        			}
        			
    			}
    		} else if(ageBandName == 'Child') {
    			$('#childBand').val(bandId);
    			
    			if(($scope.totalPaxCount < $scope.maxPaxCount) && ($scope.totalPaxCount >= $scope.minPaxCount)) {
    				if($scope.totalPaxCount == 9){
        				
        			} else {
        				$scope.childValue++;
        				$scope.totalPaxCount++;
        			}
    			}
    			
    		} else if(ageBandName == 'Infant'){
    			$('#infantBand').val(bandId);
    			
    			if(($scope.totalPaxCount< $scope.maxPaxCount) && ($scope.totalPaxCount >= $scope.minPaxCount)) {
    				if($scope.totalPaxCount == 9){
        				
        			} else {
        				$scope.infantValue++;
        				$scope.totalPaxCount++;
        			}
    			}
    		} else if(ageBandName == 'Youth'){
    			$('#youthBand').val(bandId);
    			
    			if(($scope.totalPaxCount< $scope.maxPaxCount) && ($scope.totalPaxCount >= $scope.minPaxCount)) {
    				if($scope.totalPaxCount == 9){
        				
        			} else {
        				$scope.youthValue++;
        				$scope.totalPaxCount++;
        			}
    			}
    			
    		} else if(ageBandName == 'Senior'){
    			$('#seniorBand').val(bandId);
    			
    			if(($scope.totalPaxCount< $scope.maxPaxCount) && ($scope.totalPaxCount >= $scope.minPaxCount)) {
    				if($scope.totalPaxCount == 9){
        				
        			} else {
        				$scope.seniorValue++;
        				$scope.totalPaxCount++;
        			}
    			}

    		}
    	}
    	
    	if(type == 'minus'){
    		if(ageBandName == 'Adult') {
    			if(($scope.totalPaxCount<= $scope.maxPaxCount) && ($scope.totalPaxCount >= $scope.minPaxCount)) {
    				if($scope.totalPaxCount == 1){
        				
        			} else if($scope.adultValue == 1) {
        				
        			} else {
        				$scope.adultValue--;
        				$scope.totalPaxCount--;
        			}
    			}
    		} else if(ageBandName == 'Child') {
    			if(($scope.totalPaxCount<= $scope.maxPaxCount) && ($scope.totalPaxCount > $scope.minPaxCount)) {
    				if($scope.totalPaxCount == 0){
        				
        			} else if($scope.childValue == 0) {
        				
        			} else {
        				$scope.childValue--;
        				$scope.totalPaxCount--;
        			}
    			}
    		} else if(ageBandName == 'Infant') {
    			if(($scope.totalPaxCount<= $scope.maxPaxCount) && ($scope.totalPaxCount > $scope.minPaxCount)) {
    				if($scope.totalPaxCount == 0){
        				
        			} else if($scope.infantValue == 0) {
        				
        			} else {
        				$scope.infantValue--;
        				$scope.totalPaxCount--;
        			}
    			}
    		} else if(ageBandName == 'Youth') {
    			if(($scope.totalPaxCount<= $scope.maxPaxCount) && ($scope.totalPaxCount > $scope.minPaxCount)) {
    				if($scope.totalPaxCount == 0){
        				
        			} else if($scope.youthValue == 0) {
        				
        			} else {
        				$scope.youthValue--;
        				$scope.totalPaxCount--;
        			}
    			}
    		} else if(ageBandName == 'Senior') {
    			if(($scope.totalPaxCount<= $scope.maxPaxCount) && ($scope.totalPaxCount > $scope.minPaxCount)) {
    				if($scope.totalPaxCount == 0){
        				
        			} else if($scope.seniorValue == 0) {
        				
        			} else {
        				$scope.seniorValue--;
        				$scope.totalPaxCount--;
        			}
    			}
    		}
    	}
    	
    	if($scope.adultFlag) {
    		document.getElementById('AdultId').value = $scope.adultValue;
    	}
    	
    	if($scope.childFlag) {
    		document.getElementById('ChildId').value = $scope.childValue;
    	}
    	
    	if($scope.infantFlag) {
    		document.getElementById('InfantId').value = $scope.infantValue;
    	}

    	if($scope.youthFlag) {
    		document.getElementById('YouthId').value = $scope.youthValue;
    	}
    	
    	if($scope.seniorFlag) {
    		document.getElementById('SeniorId').value = $scope.seniorValue;
    	}
    	
    	$('#adult').val($scope.adultValue);
    	$('#child').val($scope.childValue);
    	$('#infant').val($scope.infantValue);
    	$('#youth').val($scope.youthValue);
    	$('#senior').val($scope.seniorValue);
    	
    	/*if($scope.childAgeTo && $scope.childAgeTo < 2) {
    		$scope.totalpax = ($scope.adultValue  + $scope.infantValue + $scope.youthValue + $scope.seniorValue)
    	} else if($scope.infantAgeTo && $scope.infantAgeTo < 2) {
    		$scope.totalpax = ($scope.adultValue + $scope.childValue + $scope.youthValue + $scope.seniorValue)
    	} else {
    		$scope.totalpax = ($scope.adultValue + $scope.childValue + $scope.infantValue + $scope.youthValue + $scope.seniorValue)
    	}*/
    	
    	if($scope.infantAgeTo) {
    		$scope.totalpax = ($scope.adultValue + $scope.childValue + $scope.youthValue + $scope.seniorValue)
    	} else {
    		$scope.totalpax = ($scope.adultValue + $scope.childValue + $scope.infantValue + $scope.youthValue + $scope.seniorValue)
    	}
    	
    	$scope.totalPaxDisplay = $scope.adultValue + $scope.childValue + $scope.infantValue + $scope.youthValue + $scope.seniorValue;
    	
    	document.getElementById('countPaxId').value = $scope.totalPaxDisplay+' Traveler(s)';
    	
    }
    
}]);

sightSeeingDetailResult.filter('escapeHtml', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

sightSeeingDetailResult.filter('range', function() {
    return function(input, from, to) {
        from = parseInt(from);
        to = parseInt(to);

        for (var i = from; i <= to; i++) {
            input.push(i);
        }
        return input;
    };
});


sightSeeingDetailResult.filter("nospace", function() {
    return function(value) {
        return !value ? "" : value.replace(/ /g, "-");
    };
});

sightSeeingDetailResult.filter("getIntPart", function() {
    return function(value) {
        var newValue = value ? value.toString() : "";
        return newValue.split(".")[0];
    };
});

sightSeeingDetailResult.filter("getDecimalPart", function() {
    return function(value) {
        var newValue = value ? value.toString() : "";
        var decimalPart = newValue.split(".")[1];
        if (decimalPart == undefined) decimalPart = "00";
        if (decimalPart.length == 1) decimalPart = decimalPart + "0";
        return decimalPart;
    };
});

sightSeeingDetailResult.filter("capitalize", function() {
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


/*-------------------- jQuery start here --------------------*/

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
    
    var count = 0;

    $("#startDate").datepicker({
        changeMonth: false,
        changeYear: false,
        dateFormat: "yy-mm-dd",
        //showButtonPanel: true,
        minDate: checkInDate,
        maxDate: maxDate,
        numberOfMonths: nOm,
        firstDay: 0,
        beforeShowDay: DisableSpecificDates,
        onClose: function() {
        	
        	// Below line will change the travel date of activity and will add to cart
        	$('#activityBookDate').val($('#startDate').val());
        	
        	var endD = $.datepicker.parseDate('yy-mm-dd', $('#startDate').val());
        	endD.setDate(endD.getDate() + 3);
        	endD = $.datepicker.formatDate('yy-mm-dd', endD);
        	
        	$('#endDate').val(endD);
        	
        	if($('#startDate').val() != $('#startDateBackButton').val()) {
        		
        		//updateDetailResponse();
        		
        		var pc = document.getElementById('productCodeId').value;
        		if($('#currentDevice').val()=="Normal"){
        			urls= "/travelDateChange";  
        		} else if($('#currentDevice').val()=="Mobile") {
        			urls= "/m/travelDateChange";  
        		} else if($('#currentDevice').val()=="Tablet") {
        			urls= "/t/travelDateChange";  
        		} else {
        			urls= "/farealert/signup";  
        		}
        		
        		$.ajax({
                	url : urls,
                    type: "POST",
                    dataType: "json",
                    data: JSON.stringify({
                    	startDate: document.getElementById('sightSeeingStartDate').value,
                    	endDate: document.getElementById('sightSeeingEndDate').value,
                    	productCode: pc
                    }),
                    Accept: "application/json;charset=utf-8",
                    contentType: "application/json; charset=utf-8",
                    success: function(e) {            	
                    },
                    error: function(e, t, a) {}
                })
        	}
        }
    }).attr('readonly','readonly');


    /*var pd = $("#startDate").datepicker("getDate");
    var dd = $("#endDate").datepicker("getDate");

    var pDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
    var dDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
    dDate.setMonth(pDate.getMonth() + 1);

    $("#endDate").datepicker({
        changeMonth: false,
        changeYear: false,
        dateFormat: "yy-mm-dd",
        showButtonPanel: true,
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


        }
    });*/
    
    
    
    $(".expand").on("click", function() {
		// $(this).next().slideToggle(200);
		$expand = $(this).find(">:first-child");

		if($expand.text() == "+") {
			$expand.text("-");
		} else {
			$expand.text("+");
		}
	});
    
})

function DisableSpecificDates(date) {
    var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
    return [disableddates.indexOf(string) != -1];
}

var disableddates = [];

function setDisabledDates(dates) {
	
	/** Days to be disabled as an array */
	disableddates = dates;		//document.getElementById('availableDates').value;//["12-3-2014", "12-11-2014", "12-25-2014", "12-20-2014"];
}

function addDays(theDate, count) {
	var addedDate = new Date();
	if(count == 1){
		addedDate = new Date();
	} else {
		addedDate = new Date(theDate.getTime() + count*24*60*60*1000);
	}
    return addedDate;
}

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};


/*function updateDetailResponse() {

    var productID = document.getElementById("currentValue").value;
    var actionUrl = "/activitydetail/" + productID;

    $("form#sightSeeingDetail").attr({
        action: actionUrl
    });
    $("form#sightSeeingDetail").submit();

}*/


$(document).ready(function() {
    $("#confirmAvail").click(function() {

        $('html,body').animate({
            scrollTop: $("#attractionListId").offset().top - 50
        }, 'slow');

    });
    
});



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


/* Below disable back button browser functionality*/

history.pushState(null, null, location.href);
window.onpopstate = function () {
	history.go(1);
};

/* Above disable back button browser functionality*/

