'use strict'

var angularTable = angular.module('pnfApp', ['initialValue', 'LocalStorageModule']);
angularTable.directive('loading', function () {
    return {
        restrict: 'E',
        replace: true,
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


angularTable.factory('itemsFactory', ['$http', function ($http) {
    return {
        pnfDetails: function (ids) {
        	return $http(
                {
                    url: "/PostSearchPnf/" + ids,
                    method: "GET",
                })
                .then(function (response) {
                    return response.data;
                });
        },
 };
}]);

var PnfController = function($scope, $http, itemsFactory, $window, $templateCache, $interval, localStorageService, $timeout) {
	
	$scope.loading = true;
	$scope.parkingLots;
	  var promise = itemsFactory.pnfDetails($scope.currentLocation);
        //console.log("working");
	    promise.then(function (data) {
	    	//console.log(data);
	    	$scope.parkingLots=data;
	    	$scope.loading = false;
	    	document.getElementById('resultPNF').style.display="block";
			document.getElementById('header').style.display="block";
			document.getElementById('resultPNF').style.display="block";
	    	var locationArray = [];
			
			if($scope.parkingLots.error == "error" || $scope.parkingLots.token == null){
 	    		document.getElementById('park-map').style.display="none";
 	    		document.getElementById('park-map-error').style.display="block";
 	    	} 
			
            angular.forEach($scope.parkingLots.parkings.ParkingLots, function(parking) {
            var locationObj =         {
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
             document.getElementById('park-map').style.display="block";
             
             
             
	    });
	    $scope.movePaymentPage = function (uniqueId) {
	        $window.location.href = "/parknfly/payment/"+uniqueId;
	    };
}

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



