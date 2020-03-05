var carResultApp = angular.module("carResultApp",[]);

carResultApp.directive('loading', function(){
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

carResultApp.controller('carResultController',['$scope', '$http', '$timeout', '$window', function ($scope, $http, $timeout, $window) 
{
	$scope.loading = true;
	$scope.noOfResult = 10;
	$scope.IsHidden = true;
	$scope.loadCarSupplier = 8;
	$scope.loadCarType = 8;
	//$scope.carShowValue = 8;
	$scope.carSupplierShowValue = "Show More";
	$scope.carTypeShowValue = "Show More";
	//$scope.carAdd2Trip="rrr";
	$scope.angularCurrency = 1;
	$scope.selected = null;
	$scope.carAdd2Trip = "Add to Trip";
	$scope.showMore = true;
	$scope.carSuppliersArr = [];
	$scope.carCategoryArr = [];
	$scope.carCategoryArrFinal = [];
	$scope.carSuppliersArrFinal = [];
	$scope.carVendorChecked = [];
	$scope.carTypeChecked = [];
	$scope.carPaymentOptionChecked = [];
	$scope.carPaymentOption = [];
	$scope.selectedCarData = "";
	console.log("carResultController called.....");
	$scope.carApplied = true;
	$scope.hotelApplied = false;
	$scope.pnfApplied = false;
	$scope.carACOption = [];
  $scope.carACOptionChecked = [];
	$scope.carAutomaticManualOption = [];
  $scope.carAutomaticManualOptionChecked = [];
	
	$scope.selectedHotel = angular.element(document.querySelector('#selectedHotel')).val();
	$scope.selectedCar = angular.element(document.querySelector('#selectedCar')).val();
	$scope.selectedPnf = angular.element(document.querySelector('#selectedPnf')).val();
	$scope.angularCurrency = angular.element(document.querySelector('#angularCurrency')).val();
	if ($scope.selectedHotel.length > 0) {

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
			
		})
	}
	if ($scope.selectedCar.length > 0) {

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
	
	var posturl = "/postCarSearchCross/";
	if($('#currentDevice').val()=="Normal"){
		posturl = "/postCarSearchCross/";
	}else if($('#currentDevice').val()=="Mobile"){
		posturl = "/m/postCarSearchCross/";
	}else if($('#currentDevice').val()=="Tablet"){
		posturl = "/t/postCarSearchCross/";
	}else{
		posturl = "/postCarSearchCross/";
	}
	
	$http.get(posturl)
	.then(function(response){
		console.log(response.data);
		$scope.data = response.data;
		$scope.loading = false;
		$scope.IsHidden = false;
		$("#carContainer").show();
		if($scope.selectedCar.length > 0){
		$timeout(function() {
    		var cardId = 	$scope.selectedCarData.VehicleType+'-'+$scope.selectedCarData.VendorCode;
    		$("#"+cardId+"-span").text("Trip Added");
    		$("#"+cardId).addClass("active");
    		$scope.cardId = $scope.selectedCarData.VehicleType+'-'+$scope.selectedCarData.VendorCode;
    	},500);
		}
		angular.forEach($scope.data.CarAvailability, function(Car) {
	        if (
	          $scope.carSuppliersArr.indexOf(Car.CarReference.DisplayVendorName) === -1
	        ) {
	          $scope.carSuppliersArr.push(Car.CarReference.DisplayVendorName); //Push it to array
	        }
	        if ($scope.carCategoryArr.indexOf(Car.CarReference.CarTypeFilter) === -1) {
	          $scope.carCategoryArr.push(Car.CarReference.CarTypeFilter); //Push it to array
	        }
	      });
		
		angular.forEach($scope.carCategoryArr, function(Car) {
	        $scope.carCategoryArrFinal.push({
	          name: Car,
	          count: $scope.data.CarAvailability.filter(function(item) {
	            return item.CarReference.CarTypeFilter == Car;
	          }).length
	        });
	      });

	      angular.forEach($scope.carSuppliersArr, function(Car) {
	        $scope.carSuppliersArrFinal.push({
	          name: Car,
	          count: $scope.data.CarAvailability.filter(function(item) {
	            //debugger;
	            item.date = new Date().getDate();
	            return item.CarReference.DisplayVendorName == Car;
	          }).length
	        });
	      });
	      
	      $scope.carId = angular.element(document.querySelector('#carId')).val();
			if($scope.carId != '1' && $scope.carId != '0'){
				$scope.selectedCarData = $scope.data.CarAvailability[0].CarReference;
				console.log($scope.selectedCarData);
				angular.element(document.querySelector('#carAdded2Cart')).show();
				//$scope.showHotelDetails($scope.hotelId);
				angular.element(document.querySelector('#carFinal')).val($scope.selectedCarData.Pricing.TotalChargeAmount * $scope.angularCurrency);
	    		finalTotalSet();
	    		var carAddUrl = "/addToCartCar/";
	    		if($('#currentDevice').val()=="Normal"){
	    			carAddUrl = "/addToCartCar/";
	    		}else if($('#currentDevice').val()=="Mobile"){
	    			carAddUrl = "/m/addToCartCar/";
	    		}else if($('#currentDevice').val()=="Tablet"){
	    			carAddUrl = "/t/addToCartCar/";
	    		}else{
	    			carAddUrl = "/addToCartCar/";
	    		}
				
	    		$http.post(carAddUrl,$scope.selectedCarData)
		    	.then(function(response){
		    		console.log(response.data);
		    	})
		    	
		    	
		    	$timeout(function() {
		    		//$scope.selected = $scope.selectedCarData.UniqueId;
			    	var cardId = 	$scope.selectedCarData.VehicleType+'-'+$scope.selectedCarData.VendorCode;
		    		$("#"+cardId+"-span").text("Trip Added");
		    		$("#"+cardId).addClass("active");
		    		$scope.cardId = $scope.selectedCarData.VehicleType+'-'+$scope.selectedCarData.VendorCode;
		    	},500);
	    		
	    		$("#selectedCar").val($scope.carId);
			}
			
			$scope.vendorSelected = $("#selectedVendorCode").val();
    		$scope.carSelected = $("#selectedVehicleType").val();
    		if($scope.vendorSelected != "" || $scope.carSelected != ""){
    		$scope.vendorSelectedList =$scope.data.CarAvailability.filter(function(item) {
    			
    			if($scope.vendorSelected != "" && $scope.carSelected != ""){
                return (item.CarReference.VendorCode == $scope.vendorSelected && item.CarReference.VehicleTypeEnum == $scope.carSelected);
    			}
    			else if($scope.vendorSelected != ""){
    			return (item.CarReference.VendorCode == $scope.vendorSelected);
    			}
    			else if($scope.carSelected != ""){
        		return (item.CarReference.VehicleTypeEnum == $scope.carSelected);
        		}
            })
            
            $scope.vendorRestList =$scope.data.CarAvailability.filter(function(item) {
    			
            	if($scope.vendorSelected != "" && $scope.carSelected != ""){
                    return (item.CarReference.VendorCode != $scope.vendorSelected || item.CarReference.VehicleTypeEnum != $scope.carSelected);
        			}
        			else if($scope.vendorSelected != ""){
        			return (item.CarReference.VendorCode != $scope.vendorSelected);
        			}
        			else if($scope.carSelected != ""){
            		return (item.CarReference.VehicleTypeEnum != $scope.carSelected);
            		}
            })
        	$scope.data.CarAvailability = $scope.vendorSelectedList.concat($scope.vendorRestList);
    		console.log($scope.data)
	}
    	
    	
    		$scope.carPaymentOption.push(_.countBy($scope.data.CarAvailability, function(obj) { return obj.CarReference.SupplierName == 91 ? 'Pay Later': 'Pay Now'; }));
    	      if($scope.carPaymentOption[0]['Pay Now'] == undefined){
    	              $scope.carPaymentOption[0]['Pay Now'] = 0;
    	      }

			$scope.carACOption.push(_.countBy($scope.data.CarAvailability, function(obj) {
                return (obj.CarReference.VehicleType[obj.CarReference.VehicleType.length - 1] == 'R') ? 'AC' : (obj.CarReference.VehicleType[obj.CarReference.VehicleType.length - 1] == 'N') ? 'Non-AC' : '';
            }));
            if ($scope.carACOption[0]['Non-AC'] == undefined) {
                $scope.carACOption[0]['Non-AC'] = 0;
            } else if ($scope.carACOption[0]['AC'] == undefined) {
                $scope.carACOption[0]['AC'] = 0;
            }

			$scope.carAutomaticManualOption.push(_.countBy($scope.data.CarAvailability, function(obj) {
                return obj.CarReference.VehicleType[obj.CarReference.VehicleType.length - 2] == 'A' ? 'Automatic' : 'Manual';
            }));
            if ($scope.carAutomaticManualOption[0]['Automatic'] == undefined) {
                $scope.carAutomaticManualOption[0]['Automatic'] = 0;
            } else if ($scope.carAutomaticManualOption[0]['Manual'] == undefined) {
                $scope.carAutomaticManualOption[0]['Manual'] = 0;
            }
	})
	
	
	$scope.CarVendorFilter = function(car) {
    if ($scope.filteredCars != undefined) {
      $scope.loadMoreResultFilter();
    }
    return ($scope.carVendorChecked[car.CarReference.DisplayVendorName] || noFilter($scope.carVendorChecked));
    
	};

	
	//loadItem
	$scope.loadItemCarSupplier = function() {
			
		if($scope.loadCarSupplier === 8 ){
			this.loadCarSupplier = "";
			this.carSupplierShowValue="Show Less";
		}else{
			this.loadCarSupplier = 8;
			this.carSupplierShowValue="Show More";
		}
	};

	$scope.loadItemCarType = function() {
		if($scope.loadCarType === 8 ){
			this.loadCarType = "";
			this.carTypeShowValue="Show Less";
		}else{
			this.loadCarType = 8;
			this.carTypeShowValue="Show More";
		}
	};

  $scope.CarTypeFilter = function(car) {
    if ($scope.filteredCars != undefined) {
      $scope.loadMoreResultFilter();
    }
    return (
      $scope.carTypeChecked[car.CarReference.CarTypeFilter] ||
      noFilter($scope.carTypeChecked)
    );
  };
  
  
  $scope.CarPaymentOptionFilter = function(car) {
      if ($scope.filteredCars != undefined) {
        $scope.loadMoreResultFilter();
      }
      return (
        $scope.carPaymentOptionChecked[car.CarReference.SupplierName] ||
        noFilter($scope.carPaymentOptionChecked)
      );
    };
  

	$scope.CarAutomaticManualOptionFilter = function(car) {
		//console.log("Its work");
        if ($scope.filteredCars != undefined) {
            $scope.loadMoreResultFilter();
        }
        return (
            $scope.carAutomaticManualOptionChecked[car.CarReference.VehicleType[car.CarReference.VehicleType.length - 2]] ||
            noFilter($scope.carAutomaticManualOptionChecked)
        );
	};
	
	$scope.CarACOptionFilter = function(car) {
		//console.log("Car AC");
        if ($scope.filteredCars != undefined) {
            $scope.loadMoreResultFilter();
        }
        return (
            $scope.carACOptionChecked[car.CarReference.VehicleType[car.CarReference.VehicleType.length - 1]] ||
            noFilter($scope.carACOptionChecked)
        );
    };
	function noFilter(filterObj) {
	    for (var key in filterObj) {
	      if (filterObj[key]) {
	        return false;
	      }
	    }
	    return true;
	  }

$scope.getCap = function(text) {
	//return text.replace(/([a-z])([A-Z])/g, "$1 $2");

	if (text.replace(/([a-z])([A-Z])/g, "$1 $2").indexOf(" SUV") != -1) {
		return "SUV";
	}else if (text.replace(/([a-z])([A-Z])/g, "$1 $2").indexOf(" Elite") != -1) {
		return "Elite";
	}else if (text.replace(/([a-z])([A-Z])/g, "$1 $2").indexOf(" VAN") != -1) {
		return "VAN";
	} 
	else {
		return text.replace(/([a-z])([A-Z])/g, "$1 $2");
	}
};
$scope.getCar = (function(car){
	if (car.replace(/([a-z])([A-Z])/g, "$1 $2").indexOf(" SUV") != -1) {
		return "SUV";
	}else if (car.replace(/([a-z])([A-Z])/g, "$1 $2").indexOf(" Elite") != -1) {
		return "Elite";
	}else if (car.replace(/([a-z])([A-Z])/g, "$1 $2").indexOf(" VAN") != -1) {
		return "VAN";
	} 
	else {
		return car;
	}
})

$scope.loadMoreResultFilter = function() {
	if ($scope.noOfResult >= $scope.filteredCars.length)
		$scope.showMore = false;
	else $scope.showMore = true;
};

		  $scope.moveDetailPage = function(uniqueId) {
			  
			  var url = "/crossell-payment/";
				if($('#currentDevice').val()=="Normal"){
					url = "/crossell-payment/";
				}else if($('#currentDevice').val()=="Mobile"){
					url = "/m/crossell-payment/";
				}else if($('#currentDevice').val()=="Tablet"){
					url = "/t/crossell-payment/";
				}else{
					url = "/crossell-payment/";
				}
				
		    $window.location = url + uniqueId;
		  };
		  
		  $scope.loadMoreResult = function() {
			    $scope.noOfResult = $scope.noOfResult + 5;
			    if ($scope.noOfResult >= $scope.data.CarAvailability.length)
			      $scope.showMore = false;
			  };
			  
			  $scope.addCarToCart = function(uniqueId){
				  
				$("#carRightContainer").removeClass('hidden-xs hidden-sm');
				$('html, body').animate({ scrollTop: $("#carRightContainer").position().top }, 'slow');
				$scope.selected = uniqueId; //.active
				/*if(this.carAdd2Trip === "Add to Trip"){
					this.carAdd2Trip="Trip Added";
				};*/
				 $(".removeText").text("Add to Trip");
				 $("#"+$scope.cardId+"-span").text("Add To Trip");
		    		$("#"+$scope.cardId).removeClass("active");
				 
				  angular.forEach($scope.filteredCars,function(item){
					  if(item.CarReference.UniqueID == uniqueId){
						  $scope.selectedCarData = item.CarReference;
						  var cardId = 	item.CarReference.VehicleType+'-'+item.CarReference.VendorCode;
						  $("#"+cardId+"-span").text("Trip Added");
				//$("#" + $scope.cardId).addClass("active");
			}
					  
				  })
				
		
				  angular.element(document.querySelector('#carFinal')).val($scope.selectedCarData.Pricing.TotalChargeAmount * $scope.angularCurrency);
				  angular.element(document.querySelector('#isCarSelected')).val(true);
				  finalTotalSet();
				  $('#carAdded2Cart').slideDown();
				  
				  var carAddUrl = "/addToCartCar/";
		    		if($('#currentDevice').val()=="Normal"){
		    			carAddUrl = "/addToCartCar/";
		    		}else if($('#currentDevice').val()=="Mobile"){
		    			carAddUrl = "/m/addToCartCar/";
		    		}else if($('#currentDevice').val()=="Tablet"){
		    			carAddUrl = "/t/addToCartCar/";
		    		}else{
		    			carAddUrl = "/addToCartCar/";
		    		}
					
		    		$http.post(carAddUrl,$scope.selectedCarData)
			    	.then(function(response){
			    		console.log(response.data);
			    	})
			    	
			    	$("#selectedCar").val(uniqueId);	
			  }
			  
			  $scope.removeCar = function(cardId){
				  	$scope.selected = null; 
				  	$scope.carAdd2Trip="Add to Trip";
				  	$("#"+cardId+"-span").text("Add To Trip");
				  	
					var carRemoveUrl = "/removeCartCar/";
					if($('#currentDevice').val()=="Normal"){
						carRemoveUrl = "/removeCartCar/";
					}else if($('#currentDevice').val()=="Mobile"){
						carRemoveUrl = "/m/removeCartCar/";
					}else if($('#currentDevice').val()=="Tablet"){
						carRemoveUrl = "/t/removeCartCar/";
					}else{
						carRemoveUrl = "/removeCartCar/";
					}
					
					$http.post(carRemoveUrl)
			    	.then(function(response){
			    		angular.element(document.querySelector('#carFinal')).val('0.00');
			    		finalTotalSet();
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
			  
			  $scope.removePnf = function(){
					
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
			    		$scope.pnfApplied = false;
			    	})
			    	$("#selectedPnf").val("");
				}
			  
			 
}]);

carResultApp.filter("nospace", function() {
	  return function(value) {
	    return !value ? "" : value.replace(/ /g, "-");
	  };
	});

carResultApp.filter(
		  "getIntPart",

		  function() {
		    return function(value) {
		      var newValue = value.toString();
		      return newValue.split(".")[0];
		    };
		  }
		);

carResultApp.filter("getDecimalPart", function() {
		  return function(value) {
		    var newValue = value.toString();
		    var decimalPart = newValue.split(".")[1];
		    if (decimalPart == undefined) decimalPart = "00";
		    if (decimalPart.length == 1) decimalPart = decimalPart + "0";
		    return decimalPart;
		  };
		});


carResultApp.filter("capitalize", function() {
	  return function(input) {
	    var temp = input.split(" ");
	    var resStr = "";
	    angular.forEach(temp, function(val, key) {
	      if (key == temp.length - 1) {
	        resStr = resStr.concat(
	          !!val ? val.charAt(0).toUpperCase() + val.substr(1).toLowerCase() : ""
	        );
	      } else {
	        resStr = resStr.concat(
	          !!val
	            ? val.charAt(0).toUpperCase() + val.substr(1).toLowerCase()
	            : "",
	          " "
	        );
	      }
	    });
	    return resStr;
	  };
	});

	
	
	$(document).ready(function(){
		
		if($("#isBrbApplied").val()=='true'){
			var value = $("#brbProductPrice").val();
			var code = $("#brbProductCode").val();
			$('#brbAdded2Cart').slideDown();
			var totalPax = $("#totalPax").val();
			$(".brbPriceDisplay").html(value);
			$(".brbPriceDisplayTotal").html(value*totalPax);
			$(".brbProductDisplay").html(code);
			$("#brbFinal").val(value*totalPax);
			finalTotalSet();
		}
		if($("#isInsApplied").val()=='true'){
			 $('#travelProtectionAdded2Cart').slideDown();
			 $("#tripMateFinal").val($("#formattedTripMate").val());
			 finalTotalSet();
		}
	$("#crModifySearchBtn").click(function(){
		$("#crModifySearchDiv").slideToggle();
		if($(this).text() === 'Modify Search'){
				$("#crModifySearchBtn").text("Close Search");
		}else{
				$("#crModifySearchBtn").text("Modify Search");
		}
	})
	});
	
	
	
$(document).ready(function () {
	// console.log(">>> ",isMobile.tablet);
	if (isMobile.phone || isMobile.tablet) {
		$("#carFilterClick").click(function () {
			$("#carLeftContainer").removeClass('hidden-xs hidden-sm');
			$("#carRightContainer").addClass('hidden-xs hidden-sm');
			$('html, body').animate({ scrollTop: $("#carLeftContainer").position().top }, 'slow');
		})

		$("#carPSummaryClick,#carPSummaryClickArrow").click(function () {
			$("#carLeftContainer").addClass('hidden-xs hidden-sm');
			$("#carRightContainer").removeClass('hidden-xs hidden-sm');
			$('html, body').animate({ scrollTop: $("#carRightContainer").position().top }, 'slow');
		})

		$("#gotoTop").click(function () {
			$("#carLeftContainer").addClass('hidden-xs hidden-sm');
			$("#carRightContainer").addClass('hidden-xs hidden-sm');
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		})
	}

	$(window).scroll(function () {
		var bottomSticky = $('.mobile-link-tab'),
			scroll = $(window).scrollTop();
		if (scroll > 150) {
			$('.mobile-link-tab').css('bottom', '10px');
		} else {
			$('.mobile-link-tab').css('bottom', '-100');
		}
	});

})

