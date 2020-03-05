var pnfResultApp = angular.module("pnfResultApp",[]);

pnfResultApp.directive('loading', function(){
    return {
      restrict: 'E',
      replace:true,
      template: '',
      link: function (scope, element, attr) {
            scope.$watch('loading', function (val) {
                if (val)
                    $(element).show();
                else
                    $(element).hide();
            });
      }
    }
});

pnfResultApp.controller('pnfResultController',function($scope,$http,$timeout,$window){
	$scope.loading = true;
	$scope.angularCurrency=1;
	$scope.carApplied = false;
	$scope.hotelApplied = false;
	$scope.IsHidden = true;
	$scope.selectedHotel = angular.element(document.querySelector('#selectedHotel')).val();
	$scope.selectedCar = angular.element(document.querySelector('#selectedCar')).val();
	$scope.selectedPnf = angular.element(document.querySelector('#selectedPnf')).val();
	$scope.angularCurrency = 	angular.element(document.querySelector('#angularCurrency')).val();
//	$scope.pnfdId="";
	
	
	
if($scope.selectedPnf.length > 0){
		
		var url = "/getCartPnf/";
		if($('#currentDevice').val()=="Normal"){
			url = "/getCartPnf/";
		}else if($('#currentDevice').val()=="Mobile"){
			url = "/m/getCartPnf/";
		}else if($('#currentDevice').val()=="Tablet"){
			url = "/t/getCartPnf/";
		}else{
			url = "/getCartPnf/";
		}
		
		$http.get(url)
		.then(function(response){
			$scope.selectedPnfData = angular.fromJson(response.data);
			console.log($scope.selectedPnfData);
			angular.element(document.querySelector('#pnfFinal')).val($scope.selectedPnfData.ParkingTypeToBook.Pricing.TotalChargeAmount * $scope.angularCurrency);
			angular.element(document.querySelector('#parkingAdded2Cart')).show();
			finalTotalSet();
			$scope.pnfApplied = true;
			$scope.IsHidden = false;
			$("#pnfContainer").show();
		})
		
		$timeout(function() {
    		var pnfdId = 	$scope.selectedPnfData.LotID+'-'+$scope.selectedPnfData.ParkingTypeToBook.TypeID;
    		$("#"+pnfdId+"-span").text("Trip Added");
    		$("#"+pnfdId).addClass("active");
    		$scope.pnfdId = $scope.selectedPnfData.LotID+'-'+$scope.selectedPnfData.ParkingTypeToBook.TypeID;
    	},1000);
		
		
	}

if($scope.selectedHotel.length > 0){
		
		var url = "/getCartHotel/";
		if($('#currentDevice').val()=="Normal"){
			url = "/getCartHotel/";
		}else if($('#currentDevice').val()=="Mobile"){
			url = "/m/getCartHotel/";
		}else if($('#currentDevice').val()=="Tablet"){
			url = "/t/getCartHotel/";
		}else{
			url = "/getCartHotel/";
		}
		
		$http.get(url)
		.then(function(response){
			$scope.selectedHotelData = angular.fromJson(response.data);
			console.log($scope.selectedHotelData);
			$scope.selectedHotelData.HotelName = $scope.selectedHotelData.Hotel.HotelName;
			$scope.selectedHotelData.Address = {"CompleteAddress" : $scope.selectedHotelData.Hotel.Address.CompleteAddress};
			angular.element(document.querySelector('#hotelFinal')).val($scope.selectedHotelData.Hotel.RoomToBook[0].hotelFare.total * $scope.angularCurrency);
			angular.element(document.querySelector('#hotelAdded2Cart')).show();
			finalTotalSet();
			$scope.hotelApplied = true;
			$scope.hotelDetailData = $scope.selectedHotelData;
		})
	}
	
	if($scope.selectedCar.length > 0){
		
		var url = "/getCartCar/";
		if($('#currentDevice').val()=="Normal"){
			url = "/getCartCar/";
		}else if($('#currentDevice').val()=="Mobile"){
			url = "/m/getCartCar/";
		}else if($('#currentDevice').val()=="Tablet"){
			url = "/t/getCartCar/";
		}else{
			url = "/getCartCar/";
		}
		
		$http.get(url)
		.then(function(response){
			$scope.selectedCarData = angular.fromJson(response.data);
			console.log($scope.selectedCarData);
			angular.element(document.querySelector('#carFinal')).val($scope.selectedCarData.Pricing.TotalChargeAmount * $scope.angularCurrency);
			angular.element(document.querySelector('#carAdded2Cart')).show();
			finalTotalSet();
			$scope.carApplied = true;
		})
		
		$timeout(function() {
    		//$scope.selected = $scope.selectedCarData.UniqueId;
	    	var cardId = 	$scope.selectedCarData.VehicleType+'-'+$scope.selectedCarData.VendorCode;
    		$("#"+cardId+"-span").text("Trip Added");
    		$("#"+cardId).addClass("active");
    		$scope.cardId = $scope.selectedCarData.VehicleType+'-'+$scope.selectedCarData.VendorCode;
    	},1000);
	}
	
	var posturl = "/postPnfSearchCross/";
	if($('#currentDevice').val()=="Normal"){
		posturl = "/postPnfSearchCross/";
	}else if($('#currentDevice').val()=="Mobile"){
		posturl = "/m/postPnfSearchCross/";
	}else if($('#currentDevice').val()=="Tablet"){
		posturl = "/t/postPnfSearchCross/";
	}else{
		posturl = "/postPnfSearchCross/";
	}
	
	$http.get(posturl)
	.then(function(response){
		$scope.loading = false;
		$scope.data = response.data;
		console.log($scope.data);
		$scope.IsHidden = false;
		$("#pnfContainer").show();
		var locationArray = [];
		angular.forEach($scope.data.parkings.ParkingLots, function(parking) {
		var locationObj = 	{
				address : parking.Address.LotAddress1,
				latitude : parking.Address.LotLatitude,
				logitude : parking.Address.LotLongitude
				
			}
		locationArray.push(locationObj);
		})
		//console.log(locationArray);
		angular.element(document.querySelector('#locationArray')).val(angular.toJson(locationArray));
		//console.log(angular.element(document.querySelector('#locationArray')).val());
		
		
		 $timeout( function(){
			 var lat = $("#latitude").val();
				var long =$("#longitude").val();
				initMap(lat, long, "cccccc");
	        }, 200 );
		
		
		 $scope.pnfId = angular.element(document.querySelector('#pnfId')).val();
			if($scope.pnfId == '1'){
				$scope.selectedPnfData = $scope.data.parkings.ParkingLots[0];
				$scope.selectedPnfData.ParkingTypeToBook=$scope.data.parkings.ParkingLots[0].ParkingTypes[0];
				console.log($scope.selectedPnfData);
				angular.element(document.querySelector('#parkingAdded2Cart')).show();
				angular.element(document.querySelector('#pnfFinal')).val($scope.selectedPnfData.ParkingTypeToBook.Pricing.TotalChargeAmount * $scope.angularCurrency);
	    		finalTotalSet();
	    		var pnfAddUrl = "/addToCartPnf/";
	    		if($('#currentDevice').val()=="Normal"){
	    			pnfAddUrl = "/addToCartPnf/";
	    		}else if($('#currentDevice').val()=="Mobile"){
	    			pnfAddUrl = "/m/addToCartPnf/";
	    		}else if($('#currentDevice').val()=="Tablet"){
	    			pnfAddUrl = "/t/addToCartPnf/";
	    		}else{
	    			pnfAddUrl = "/addToCartPnf/";
	    		}
				
	    		$http.post(pnfAddUrl,$scope.selectedPnfData)
		    	.then(function(response){
		    		console.log(response.data);
		    	})
		    	
		    	
		    	$timeout(function() {
		    		var pnfId = 	$scope.selectedPnfData.LotID+'-'+$scope.selectedPnfData.ParkingTypeToBook.TypeID;
		    		$("#"+pnfId+"-span").text("Trip Added");
		    		$("#"+pnfId).addClass("active");
		    		$scope.pnfdId = $scope.selectedPnfData.LotID+'-'+$scope.selectedPnfData.ParkingTypeToBook.TypeID;
		    	},500);
	    		
	    		$("#selectedPnf").val($scope.pnfId);
			}
			
			
	});
	
	
	$scope.addPnfToCart = function(lotId,typeId){
		  
		//$("#carRightContainer").removeClass('hidden-xs hidden-sm');
		$('html, body').animate({ scrollTop: $("#pnfRightContainer").position().top }, 'slow');
		$scope.selected = lotId; //.active
		 $(".removeText").text("Add to Trip");
		 $("#"+$scope.pnfdId+"-span").text("Add To Trip");
		 
			$("#"+$scope.pnfdId).removeClass("active");
		 
		  angular.forEach($scope.data.parkings.ParkingLots,function(item){
			  if(item.LotID == lotId){
				  angular.forEach(item.ParkingTypes,function(parking){
					  
					  if(parking.TypeID == typeId){
						  item.ParkingTypeToBook=parking;
						  $scope.selectedPnfData = item;
						 // $scope.selectedPnfData.ParkingTypeToBook[0] = parking;
						  var pnfdId = 	item.LotID+'-'+parking.TypeID;
						  $("#"+pnfdId+"-span").text("Trip Added");
						  $("#"+pnfdId).addClass("active");
						  $scope.pnfdId = pnfdId;
						  console.log($scope.selectedPnfData)
					  }
				  })
				  
			  }
			  
		  })
		

		  angular.element(document.querySelector('#pnfFinal')).val($scope.selectedPnfData.ParkingTypeToBook.Pricing.TotalChargeAmount * $scope.angularCurrency);
		  angular.element(document.querySelector('#isPnfSelected')).val(true);
		  finalTotalSet();
		  $('#parkingAdded2Cart').slideDown();
		  
		  var carAddUrl = "/addToCartPnf/";
			if($('#currentDevice').val()=="Normal"){
				carAddUrl = "/addToCartPnf/";
			}else if($('#currentDevice').val()=="Mobile"){
				carAddUrl = "/m/addToCartPnf/";
			}else if($('#currentDevice').val()=="Tablet"){
				carAddUrl = "/t/addToCartPnf/";
			}else{
				carAddUrl = "/addToCartPnf/";
			}
			
			$http.post(carAddUrl,$scope.selectedPnfData)
	    	.then(function(response){
	    		console.log(response.data);
	    	})
	    	
			$("#selectedPnf").val(lotId);	
			
			$("#pnfRightContainer").removeClass('hidden-xs hidden-sm hidden-md');
			$('html, body').animate({scrollTop:$("#pnfRightContainer").position().top}, 'slow');
	  }
	
	
	$scope.removePnf = function(id){
		
		//$scope.selected = null; 
	  //	$scope.carAdd2Trip="Add to Trip";
	  	$("#"+id+"-span").text("Add To Trip");
	  	$("#"+id).removeClass("active");
	  	
		var pnfRemoveUrl = "/removeCartPnf/";
		if($('#currentDevice').val()=="Normal"){
			pnfRemoveUrl = "/removeCartPnf/";
		}else if($('#currentDevice').val()=="Mobile"){
			pnfRemoveUrl = "/m/removeCartPnf/";
		}else if($('#currentDevice').val()=="Tablet"){
			pnfRemoveUrl = "/t/removeCartPnf/";
		}else{
			pnfRemoveUrl = "/removeCartPnf/";
		}
		
		
		$http.post(pnfRemoveUrl)
    	.then(function(response){
    		angular.element(document.querySelector('#pnfFinal')).val('0.00');
    		angular.element(document.querySelector('#parkingAdded2Cart')).slideUp();
    		finalTotalSet();
    		
    	})
    	$("#selectedPnf").val("");
	}
	
	$scope.removeCar = function(){
		
		var url = "/removeCartCar/";
		if($('#currentDevice').val()=="Normal"){
			url = "/removeCartCar/";
		}else if($('#currentDevice').val()=="Mobile"){
			url = "/m/removeCartCar/";
		}else if($('#currentDevice').val()=="Tablet"){
			url = "/t/removeCartCar/";
		}else{
			url = "/removeCartCar/";
		}
		
		$http.post(url)
    	.then(function(response){
    		angular.element(document.querySelector('#carFinal')).val('0.00');
    		finalTotalSet();
    		$scope.carApplied = false;
    	})
    	$("#selectedCar").val("");
	}
	
	$scope.removeHotel = function(){
		
		$scope.roomButton = false;
		
		var hotelRemoveUrl = "/removeCartHotel/";
		if($('#currentDevice').val()=="Normal"){
			hotelRemoveUrl = "/removeCartHotel/";
		}else if($('#currentDevice').val()=="Mobile"){
			hotelRemoveUrl = "/m/removeCartHotel/";
		}else if($('#currentDevice').val()=="Tablet"){
			hotelRemoveUrl = "/t/removeCartHotel/";
		}else{
			hotelRemoveUrl = "/removeCartHotel/";
		}
		
		
		$http.post(hotelRemoveUrl)
    	.then(function(response){
    		angular.element(document.querySelector('#hotelFinal')).val('0.00');
    		finalTotalSet();
    		$scope.hotelApplied = false;
    	})
    	$("#selectedHotel").val("");
	}
});




pnfResultApp.filter(
		  "getIntPart",

		  function() {
		    return function(value) {
		      var newValue = value.toString();
		      return newValue.split(".")[0];
		    };
		  }
		);

pnfResultApp.filter("getDecimalPart", function() {
		  return function(value) {
		    var newValue = value.toString();
		    var decimalPart = newValue.split(".")[1];
		    if (decimalPart == undefined) decimalPart = "00";
		    if (decimalPart.length == 1) decimalPart = decimalPart + "0";
		    return decimalPart;
		  };
		});

function extractLast(t) 
{
    return split(t).pop();
}

function split(t) {
    return t.split(/,\s*/);
}

$(document).ready(function() {
	
	
	
	var t = !0, e = !0;
    $("#parkFlySearch").autocomplete({
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
            return r.pop(), r.push(i.item.value), this.value = r, t = !1,  !1;
        }
    }).blur(function() {
        t && -1 == $("#parkFlySearch").val().indexOf(",") && $("#parkFlySearch").val($("ul#ui-id-1 li:first a").text());
    })
    
    
    
    var nOm;
    $(window).resize(function() {
        if ($(window).width() < 768) {
          nOm = 1;
          $("#arrivalDate").datepicker("option", "numberOfMonths", nOm);
        } else {
          nOm = 2;
          $("#arrivalDate").datepicker("option", "numberOfMonths", nOm);
        }
    }).trigger("resize"); 
    
    checkInDate = new Date();
    checkInDate.setDate(checkInDate.getDate() + 2);  
    maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 11);
    
    var d = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
    
    $("#arrivalDate").datepicker({
        changeMonth: false,
        changeYear: false,
        dateFormat: "mm-dd-yy",
        showButtonPanel: false,
        minDate: checkInDate,
        maxDate: maxDate,
        numberOfMonths: nOm,
        onClose: function() {
            var a = $("#arrivalDate").datepicker("getDate");
            day = a.getDate(), year = a.getFullYear();
            var b = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            month = b[a.getMonth()];
            var c = new Array(7);
            c[0] = "MON", c[1] = "TUE", c[2] = "WED", c[3] = "THU", c[4] = "FRI", c[5] = "SAT", c[6] = "SUN";
            var f = $("#exitDate").datepicker("getDate");
            if (null != a && "" != a) {
            	
            	var date_diff = Math.ceil((a.getTime() - Date.parse(today)) / 86400000);
                var maxDatedrop=date_diff+26+'d';
                
                $("#exitDate").datepicker("change", {
                    minDate: new Date(a),
                    maxDate: maxDatedrop
                });
                var g = new Date(a.getFullYear(), a.getMonth(), a.getDate());
                if (null != f) {
                    var h = new Date(f.getFullYear(), f.getMonth(), f.getDate());
                    g > h && ($("#exitDate").val($.datepicker.formatDate("mm-dd-yy", new Date(g))), $("#exitDate").datepicker("show"))
                } else $("#exitDate").val($.datepicker.formatDate("mm-dd-yy", new Date(g))), $("#exitDate").datepicker("show")
            }
        }
    });
    
    var hotelSelectDate1 = $("#arrivalDate").datepicker("getDate");
    var hotelDateMin = new Date(hotelSelectDate1.getFullYear(), hotelSelectDate1.getMonth(), hotelSelectDate1.getDate());
    var hotelDateMax = new Date(hotelSelectDate1.getFullYear(), hotelSelectDate1.getMonth(), hotelSelectDate1.getDate());
   hotelDateMax.setMonth(hotelDateMin.getMonth()+3);
    //hotelDateMax.setDate(hotelDateMin.getDate()+26);
    
    $("#exitDate").datepicker({
        changeMonth: false,
        changeYear: false,
        dateFormat: "mm-dd-yy",
        showButtonPanel: false,
        minDate: hotelDateMin,
        maxDate: hotelDateMax,
        numberOfMonths: nOm,
        onClose: function() {
            var a = $("#arrivalDate").datepicker("getDate"),
                b = $("#exitDate").datepicker("getDate");
            day = b.getDate(), year = b.getFullYear();
            var c = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            month = c[b.getMonth()];
            var d = new Array(7);
            d[0] = "MON", d[1] = "TUE", d[2] = "WED", d[3] = "THU", d[4] = "FRI", d[5] = "SAT", d[6] = "SUN";
           
           
        }
    });
 
});





////////////////////////////////// MAP WORK START //////////////////////////////////////////////////

var map;
function initMap(latt, long, address) {
	
    map = new google.maps.Map(document.getElementById('htlMap'), {
        center: { lat: Number(latt), lng: Number(long) },
        zoom: 13,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT
        }
    });

    var request = {
        location: map.getCenter(),
        radius: '1500',
        query: address
    };

    var serviceNew = new google.maps.places.PlacesService(map);
    serviceNew.textSearch(request, callback);

    function callback(results, status) {
    	
    	var infowindow = new google.maps.InfoWindow();

        var marker, i;
       var locations =  jQuery.parseJSON($("#locationArray").val());
        for (i = 0; i < locations.length; i++) {  
        	marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].latitude, locations[i].logitude),
            map: map
          });
        	
          google.maps.event.addListener(marker, 'click', (function(marker, i,infowindow) {
            return function() {
              infowindow.setContent(locations[i].address);
              infowindow.open(map, marker);
            }
          })(marker, i,infowindow));
          
        }
    	
    }
}




//////////////////////////////////MAP WORK END //////////////////////////////////////////////////