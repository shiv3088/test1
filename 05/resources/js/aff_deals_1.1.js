




var affapp =angular.module("affDeal", []);


affapp.controller('affCtrl',['$http','$scope',function($http,$scope){
	
		 $scope.affList=[];
	
		  $scope.affDeals = function(city) {
			  
				$http.get('/PostDeals/'+city).success(function(response){
					
					  $scope.affList=response;
					
					
				})
				.error(function(error){
				
				})
		  };
		  
		  $scope.convertToDate = function (stringDate){
			    var dateOut = new Date(stringDate);
			    dateOut.setDate(dateOut.getDate());
			    return dateOut;
			  };
			  
		  $scope.getDeal	 = function(longitude,latitude) {	
			  var post_data = {  //prepare payload for request
					    'longitude':longitude,
					    'latitude':latitude,
					   		}
				
    	$http.post('/getDeals',post_data).success(function(response){
		  
    		if(response != 'none'){
    			$scope.froCity=response;
				var placeholder = document.getElementById('cityLoc'); //working
		       
		        var value="";
		        var lastspace = response.lastIndexOf('(');
                if (lastspace != -1) {
                    value = response.substr(0, lastspace);
                }  
                placeholder.innerHTML = value; 
                
    		    $scope.affDeals(response);
		    }
    		
	
		  })
			.error(function(error){
			
			})
			
	  }
		
	}]);
	




$(document).ready(function(){

	  var apiKey = "X74hmOunUSNWzzCjBEr5p8LJCX0YQOik";   
	    var language = "en";
	 
	    navigator.geolocation.watchPosition(callback);
		function callback(position){

	     var GEOCODING = '//maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';
	    
	        $.getJSON(GEOCODING).done(function(location) {
	        })
	        
		}   
});




