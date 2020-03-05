$(document).ready(function() {
	$('.great-choice-fare').mouseover(function() {
		$('.pd').show();
	});
});

function leadingZero(value){
	if (value < 10) {
		return "0" + value.toString();
	}
	return value.toString();
}

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

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


function getIntPart() {
	var newValue = value.toString();
	
	return newValue.split(".")[0];
}

function getDecimalPart(value) {
	var newValue = value.toString();
    var decimalPart = newValue.split(".")[1];
    if (decimalPart == undefined) decimalPart = "00";
    if (decimalPart.length == 1) decimalPart = decimalPart + "0";
    
    return decimalPart;
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

function checkCoupon() {
	 
	if($('.promotionClass').val().length > 0) {
		document.getElementById("couponError").style.display = "none";
		document.getElementById("couponValidError").style.display = "block";
	} else {
		document.getElementById("couponError").style.display = "block";
		document.getElementById("couponValidError").style.display = "none"
	}
}

/* Below disable back button browser functionality*/

history.pushState(null, null, location.href);
window.onpopstate = function () {
	history.go(1);
};

/* Above disable back button browser functionality*/




var sightSeeingReview = angular.module("SightSeeingReviewPage", []);

sightSeeingReview.directive("loading", function() {
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

sightSeeingReview.controller("sightSeeingReviewController",['$scope','$http','$window', function($scope, $http, $window) {
	
	$scope.moveBackToSightSeeingDetailedPage = function(productId, travelDate) {
		
		var travelEndDate = new Date(travelDate).addDays(3);
		
		travelEndDate = travelEndDate.getFullYear()+"-"+leadingZero(travelEndDate.getMonth()+1)+"-"+leadingZero(travelEndDate.getDate());
		
		$('.customStartDate').val(travelDate);
		$('.customEndDate').val(travelEndDate);
		
		var actionUrl = "";
		
		actionUrl = "/activitydetail/" + productId;

		$("form#sightSeeingDetail").attr({
	    	action: actionUrl
		});
	    $("form#sightSeeingDetail").submit();
		
	}
	
	$scope.moveSightSeeingPaymentPage = function() {
		var rndId = randomString(12);
		
		$window.location = "/activitypayment/" + rndId;
	}
	
	$scope.removeToCart = function(productId, gradeCodeId) {
		alertify.confirm("<b>Are You Sure Want To Remove?</b>").set('onok', function() {
			
			$('form#sightSeeingCartForm').attr({action: "/activityreviewcart/" + productId + "/" + gradeCodeId});
			
			$("form#sightSeeingCartForm").submit();
		});
	}
	
	$scope.sightSeeingSearchSubmit = function(id) {
		
		if(id == 'home') {
			$window.location = "/activity/";
		} else {
			
			$('form#sightSeeingSearch').attr({action: "/activitysearch/id/" + id});
			
		    $("form#sightSeeingSearch").submit();
		}
		
	}
	
}]);


