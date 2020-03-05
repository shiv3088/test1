(function(){

    $('.advanceOptLink').click(function(){
        $('#advanceOpt').slideToggle();
    })

    $('.pickUpDate').click(function(){
        if ($('input.dropOff').prop('checked'   )) {
            $('#dropOffLocation').show();
            $('#pickUpLocation').removeClass('col-sm-4').addClass('col-sm-2');
        }else{
            $('#dropOffLocation').hide();
            $('#pickUpLocation').removeClass('col-sm-2').addClass('col-sm-4');
        }
    });    

    $("#crUpDate").datepicker({
        changeMonth: true,
		changeYear: true,
		dateFormat: "mm-dd-yy",
        showButtonPanel: true,
        numberOfMonths: [ 1, 2 ],
        autoClose: false,        
        onClose: function() {
            //alert();
            $(this).show();
            $(this).datepicker("show");
          var inputs = $(this).closest('.carSearhEngine').find(':input.cal');
          inputs.eq(inputs.index(this)).focus();
        }
    });
    $("#crDropDate").datepicker({
        changeMonth: true,
		changeYear: true,
        dateFormat: "mm-dd-yy",        
        showButtonPanel: true,
        numberOfMonths: [ 1, 2 ],
        onClose: function() {
          var inputs = $(this).closest('.carSearhEngine').find(':input.cal');
          inputs.eq(inputs.index(this)).focus();
        }
    });

})();


//-----------------------------Angular------------------------------

var carListApp = angular.module('carListApp', []);



var CarResultController=carListApp.controller('CarResultController',['$scope','$http', 'carFactory', function($scope, $http ,carFactory) {
	//alert("carController");
	
	var promise = carFactory.searchCar();
	console.log("Response : "+promise);
	
	promise.then(function (data) {
		
		$scope.carlist=[];
		
		 angular.forEach(data, function(Flighth) 
		  {
        	$scope.carlist=Flighth.CarAvailability; 
          });
		//console.log("List Length: "+$scope.carlist.length);
		
	});
    /*$http({
        url: '../js/data.json',
        method: "GET"
    })
    .then(function(response) {
        $scope.carData = response.data.OTA_VehAvailRateRS.VehAvailRSCore;
        console.log('massage >> ' , $scope.carData);
    }, 
    function(response) {
        console.log('massage Fail >>');
    });*/
}]);


carListApp.directive('carloader', function () {
	//alert("carloader");
  return {
    restrict: 'E',
    replace:true,
    template: '<div class="srching-txt" style="text-align:center; height:300px; margin:30px 0;"><div class="progress progress-striped active"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"><span class="sr-only">100% Complete</span></div></div><h2 style="color:#03566c;">Just a moment more ...</h2><h4 style="font-weight:normal;">we want to make sure we find you the best price.</h4></div>',
    link: function (scope, element, attr) {
    scope.$watch('carloader', function (val) {
        if (val)
            $(element).show();
        else
            $(element).hide();
    });
    }
  }
})

 
carListApp.factory('carFactory', ['$http', function($http){   
	 return {
		    searchCar: function() {
		    	//alert("carItemFactory");
		      return $http(
		      {
		        url: "/PostSearchCar",
		        method: "GET",
		      })
		      .then(function (response) {
		    	console.log("PostSearchCar Response : ");  
		        return response.data;
		        });
		      
		      }
			  
    };
}]);