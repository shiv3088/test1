                           

var hotelResultApp = angular.module("hotelResultApp",[]);

hotelResultApp.directive('loading', function(){
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

hotelResultApp.controller('hotelResultController',function($scope,$http,$timeout,$window){
	$scope.loading = true;
	$scope.IsHidden = true;
	$scope.numberOfResult = 10;
	$scope.selectedStar=[];
	//$scope.topHotelIds=[];
	$scope.sortKey = 'Recommend';
	$scope.loadMore = true;
	$scope.minPrice = 0;
	$scope.maxPrice = 0;
	$scope.hotelNameList = [];
	$scope.selectedHotelData = "";
	$scope.selectedRoomPrice = 0.00;
	$scope.lowerValue=0;
	$scope.higherValue=0;
	$scope.angularCurrency =1;
	$scope.hotelApplied = true;
	$scope.carApplied = false;
	$scope.pnfApplied = false;
	$scope.amentiesList = [];
	$scope.amenties = [];
	$scope.showAll = true;
	$scope.selectedCar = angular.element(document.querySelector('#selectedCar')).val();
	$scope.selectedHotel = angular.element(document.querySelector('#selectedHotel')).val();
	$scope.selectedPnf = angular.element(document.querySelector('#selectedPnf')).val();
	$scope.angularCurrency = angular.element(document.querySelector('#angularCurrency')).val();
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
			angular.element(document.querySelector('#carFinal')).val($scope.selectedCarData.Pricing.TotalChargeAmount * $scope.angularCurrency);
			angular.element(document.querySelector('#carAdded2Cart')).show();
			finalTotalSet();
			$scope.carApplied = true;
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
			$scope.selectedHotelData.HotelName = $scope.selectedHotelData.Hotel.HotelName;
			$scope.selectedHotelData.Address = {"CompleteAddress" : $scope.selectedHotelData.Hotel.Address.CompleteAddress};
			angular.element(document.querySelector('#hotelFinal')).val($scope.selectedHotelData.Hotel.RoomToBook[0].hotelFare.total * $scope.angularCurrency);
			angular.element(document.querySelector('#hotelAdded2Cart')).show();
			finalTotalSet();
			$scope.hotelApplied = true;
			$scope.hotelDetailData = $scope.selectedHotelData;
		})
	}
	
	var posturl = "/postHotelSearchCross/";
	if($('#currentDevice').val()=="Normal"){
		posturl = "/postHotelSearchCross/";
	}else if($('#currentDevice').val()=="Mobile"){
		posturl = "/m/postHotelSearchCross/";
	}else if($('#currentDevice').val()=="Tablet"){
		posturl = "/t/postHotelSearchCross/";
	}else{
		posturl = "/postHotelSearchCross/";
	}
	
	$http.get(posturl)
	.then(function(response){
		$scope.hotelList = response.data;
		$scope.loading = false;
		$scope.IsHidden = false;
		$("#hotelContainer").show();
		$scope.filteredList=$scope.hotelList.HotelList;
		
			
		angular.forEach($scope.hotelList.HotelList,function(item,index){
			if(index == 0){
			$scope.minPrice = item.LowRate;
			$scope.maxPrice = item.LowRate;
			}
			else{
			if(item.LowRate < $scope.minPrice)
			$scope.minPrice = Math.floor(item.LowRate);
			if(item.LowRate > $scope.maxPrice)
			$scope.maxPrice = Math.ceil(item.LowRate);
			}
			
			if($scope.hotelNameList.indexOf(item.HotelName) == -1) {
    			$scope.hotelNameList.push(item.HotelName);
    			}
			
			angular.forEach(item.Amenties, function(tech) {
	    		
		          if ($scope.amenties.indexOf(tech) == -1) {
		            $scope.amenties.push(tech);
		            $scope.amentiesList.push({'name': tech, 'on': false});				           
		          }
		    	  });
		});
		
		$scope.lowerValue = $scope.minPrice;
		$scope.higherValue=$scope.maxPrice;
		
		 $scope.zeroStarCount = $scope.hotelList.HotelList.filter(function(item) {
	            return item.Rating == "0" || item.Rating == "0.5" || item.Rating == "1" || item.Rating == "1.5";
	        })

	        $scope.oneStarCount = $scope.hotelList.HotelList.filter(function(item) {
	            return item.Rating == "1" || item.Rating == "1.5" ;
	        })

	        $scope.twoStarCount = $scope.hotelList.HotelList.filter(function(item) {
	            return item.Rating == "2" || item.Rating == "2.5" ;
	        })

	        $scope.threeStarCount = $scope.hotelList.HotelList.filter(function(item) {
	            return item.Rating == "3" || item.Rating == "3.5" ;
	       })

	        $scope.fourStarCount = $scope.hotelList.HotelList.filter(function(item) {
	            return item.Rating == "4" || item.Rating == "4.5" ;
	        })

	        $scope.fiveStarCount = $scope.hotelList.HotelList.filter(function(item) {
	            return item.Rating == "5" ;
	        })
	        
		$scope.starList = [{
	        id: 1,
	        name: '1',
	        count:	$scope.zeroStarCount.length
	    }, /*{
	        id: 1,
	        name: '1',
	        count:	$scope.oneStarCount.length
	    },*/  {
	        id: 2,
	        name: '2',
	        count:	$scope.twoStarCount.length
	    },  {
	        id: 3,
	        name: '3',
	        count:	$scope.threeStarCount.length
	    },  {
	        id: 4,
	        name: '4',
	        count:	$scope.fourStarCount.length
	    },  {
	        id: 5,
	        name: '5',
	        count:	$scope.fiveStarCount.length
	    }];
		 
		 
		 $("#htlPriceRange").slider({
				
				range: true,
				min: $scope.minPrice,
				max: $scope.maxPrice,
				values: [$scope.minPrice, $scope.maxPrice],
				slide: function (event, ui) {
					var minPrice = $(this).slider("values", 0);
					var maxPrice = $(this).slider("values", 1);
					$("#sliderPrice").html('<span>$' + minPrice + '</span>' + " - "  +  '<span>$' + maxPrice + '</span>');
					 var scope = angular.element(document.getElementById('hotelResultController')).scope();
		             scope.$apply(function() {
		            	 $scope.minPrice = minPrice;
		     			$scope.maxPrice = maxPrice;
					  });
				}
			
			
			});
			
			var minPrice = $("#htlPriceRange").slider("values", 0);
			var maxPrice = $("#htlPriceRange").slider("values", 1);
			$("#sliderPrice").append('<span>$' + minPrice + '</span>' + " - "  +  '<span>$' + maxPrice + '</span>');
			
			
			$scope.showHotelDetails = function(hotelId){
				$timeout(function() {
				$('html, body').animate({scrollTop: $("#"+hotelId+"-header").offset().top}, 2000);
				},500);
				$(".removeText").text("Add to Trip");
				$scope.selected = hotelId;
		        angular.forEach($scope.filteredList,function(item){ 
		        	item.ShowHotelDetails = false;
		        	item.ShowHotelDetailsLoading = false;
					if (item.HotelId == hotelId) {
						item.ShowHotelDetailsLoading = true;
	    			
	    				
	    				var detailurl = "/hotel/details/";
	    				if($('#currentDevice').val()=="Normal"){
	    					detailurl = "/hotel/details/";
	    				}else if($('#currentDevice').val()=="Mobile"){
	    					detailurl = "/m/hotel/details/";
	    				}else if($('#currentDevice').val()=="Tablet"){
	    					detailurl = "/t/hotel/details/";
	    				}else{
	    					detailurl = "/hotel/details/";
	    				}
	    				
		           $http.get(detailurl+hotelId)
		           .then(function(response){
		        	$scope.hotelDetailData = response.data;
		    		$scope.hotelDetailDataOrg = response.data;
		    		item.ShowHotelDetailsLoading = false;
		    		item.ShowHotelDetails = true;
		    		angular.element(document.querySelector('#hotelFinal')).val("0.00");
		    		finalTotalSet();
		    		angular.element(document.querySelector('#hotelAdded2Cart')).hide();
		    		console.log($scope.hotelDetailData);
		    		if($scope.hotelId == hotelId){
		    		
		    			$timeout(function() {
		    				$("#defaultRoomSelected").prop("checked","true");
				    		//angular.element(document.querySelector("#defaultRoomSelected")).checked;
				    	},500);
		    		
		    		
		    		angular.element(document.querySelector('#hotelFinal')).val($scope.selectedHotelData.Rooms[0].hotelFare.total * $scope.angularCurrency);
		    		finalTotalSet();
		    		$scope.hotelDetailData.Hotel.RoomToBook[0]=$scope.hotelDetailData.Hotel.Rooms[0];
		    		angular.element(document.querySelector('#hotelAdded2Cart')).show();
		    		
		    		var url = "/addToCartHotel/";
    				if($('#currentDevice').val()=="Normal"){
    					url = "/addToCartHotel/";
    				}else if($('#currentDevice').val()=="Mobile"){
    					url = "/m/addToCartHotel/";
    				}else if($('#currentDevice').val()=="Tablet"){
    					url = "/t/addToCartHotel/";
    				}else{
    					url = "/addToCartHotel/";
    				}
		    		
		    		$http.post(url,$scope.hotelDetailData)
			    	.then(function(response){
			    	})
			    	
			    	$("#selectedHotel").val($scope.hotelId);
		    		}
		    		
		    		
		    		});
		        }
		    	})
		        
		      
			}
			$scope.hotelId = angular.element(document.querySelector('#hotelId')).val();
			if($scope.hotelId != '1' && $scope.hotelId != '0'){
				$scope.selectedHotelData = $scope.hotelList.HotelList[0];
				//console.log($scope.selectedHotelData);
				//angular.element(document.querySelector('#hotelAdded2Cart')).show();
				$scope.showHotelDetails($scope.hotelId);
				
				
			}
		
			$scope.movePaymentPage = function(hotelId){
				
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
				$window.location = url+hotelId;
			}
			
			$scope.selectHotelRoom = function(hotelId,roomId,rateCode){
				console.log("hotelId :: " + hotelId + "roomId :: " + roomId);
				$("#"+hotelId).text("Trip Added");
				$scope.roomButton = false;
				angular.forEach($scope.filteredList, function (item) {
					if (item.HotelId == hotelId && item.HotelSupplier == 32) {
						$scope.selectedHotelData = item;
						angular.forEach($scope.selectedHotelData.Rooms, function (room, index) {
							if(room.RoomTypeCode==roomId){
								$scope.tempRoomObj = $scope.selectedHotelData.Rooms[0];
								$scope.selectedHotelData.Rooms[0]=$scope.selectedHotelData.Rooms[index];
								$scope.hotelDetailData.Hotel.RoomToBook[0]=$scope.selectedHotelData.Rooms[index];
								$scope.selectedHotelData.Rooms[index]=$scope.tempRoomObj;
								$scope.selectedRoomPrice = $scope.hotelDetailData.Hotel.RoomToBook[0].hotelFare.averageBaseRate
							}
							
						});
						
    				}
					else {

						$scope.selectedHotelData = $scope.hotelDetailData;
						angular.forEach($scope.selectedHotelData.Hotel.Rooms,function(room,index){
							if(room.RoomTypeCode==roomId && room.RateCode==rateCode){
								//$scope.tempRoomObj = $scope.selectedHotelData.Hotel.Rooms[0];
								//$scope.selectedHotelData.Hotel.Rooms[0]=$scope.selectedHotelData.Hotel.Rooms[index];
								$scope.hotelDetailData.Hotel.RoomToBook[0]=$scope.selectedHotelData.Hotel.Rooms[index];
								//$scope.selectedHotelData.Hotel.Rooms[index]=$scope.tempRoomObj;
								//$scope.selectedRoomPrice = $scope.hotelDetailData.Hotel.RoomToBook[0].hotelFare.averageBaseRate
							}
							
						});
						
						$scope.selectedHotelData.Rooms[0] = $scope.selectedHotelData.Hotel.Rooms[0];
						
					}
					
					
				});
				
				console.log($scope.hotelDetailData);
				
				var url = "/addToCartHotel/";
				if($('#currentDevice').val()=="Normal"){
					url = "/addToCartHotel/";
				}else if($('#currentDevice').val()=="Mobile"){
					url = "/m/addToCartHotel/";
				}else if($('#currentDevice').val()=="Tablet"){
					url = "/t/addToCartHotel/";
				}else{
					url = "/addToCartHotel/";
				}
				
				$http.post(url,$scope.hotelDetailData)
		    	.then(function(response){
		    		//console.log(response.data);
		    	})
		    	angular.element(document.querySelector('#hotelFinal')).val($scope.selectedHotelData.Rooms[0].hotelFare.total * $scope.angularCurrency);
				angular.element(document.querySelector('#hotelAdded2Cart')).show();
				finalTotalSet();
				
				if(isMobile.phone || isMobile.tablet){
					$("#htlRightContainer").removeClass('hidden-xs hidden-sm');
			        $('html, body').animate({scrollTop:$("#htlRightContainer").position().top}, 'slow');
				}else{
					$("html, body").animate({ scrollTop: 180 }, 2000);
				}
				$("#selectedHotel").val(hotelId);
			}
			
		
			
			$scope.removeHotel = function(hotelId){
				$('input:radio[name=room]:checked').prop('checked', false);
				$scope.roomButton = false;
				$("#"+hotelId).text("Add To Trip");
				var url = "/removeCartHotel/";
				if($('#currentDevice').val()=="Normal"){
					url = "/removeCartHotel/";
				}else if($('#currentDevice').val()=="Mobile"){
					url = "/m/removeCartHotel/";
				}else if($('#currentDevice').val()=="Tablet"){
					url = "/t/removeCartHotel/";
				}else{
					url = "/removeCartHotel/";
				}
				
				$http.post(url)
		    	.then(function(response){
		    		angular.element(document.querySelector('#hotelFinal')).val('0.00');
		    		finalTotalSet();
		    	})
		    	$("#selectedHotel").val("");
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
			
			$scope.sort = function(keyname){
				
				
				$scope.sortKey = keyname;   //set the sortKey to the param passed
				$scope.reverse = !$scope.reverse; //if true make it false and vice versa
			}
	});
	
	
	$scope.priceRange = function(item) {

		return (parseInt(item.LowRate) >= parseInt($scope.minPrice) && parseInt(item.LowRate) <= parseInt($scope.maxPrice));
	};
	
	$scope.loadMoreResults = function(){
		$scope.numberOfResult = $scope.numberOfResult+5;
		if($scope.numberOfResult >= $scope.filteredList.length)
		$scope.loadMore = false;
	}
	
	$scope.filterStar = function(item){
		if($scope.numberOfResult >= $scope.filteredList.length)
			$scope.loadMore = false;
		else
			$scope.loadMore = true;
		if(item.Rating == 0){
			item.Rating= 1;
		}
		
		return $scope.selectedStar[item.Rating] || noFilter($scope.selectedStar);
	}
	
	$scope.filterByAmenties = function(a) {
        if($scope.showAll) { return true; }
        
        var sel = false;
        
         for(var tech in $scope.amentiesList){
             var t = $scope.amentiesList[tech];
             if(t.on){
            	 
            	 if(a.Amenties != undefined)
                 if(a.Amenties.indexOf(t.name) != -1){
                     return  true;
                 }else{
                     sel = false;
                 }
             }           
         }
        return sel;
     };
    
    $scope.checkChange = function() {
        for(var t in $scope.amentiesList){
            if($scope.amentiesList[t].on){
                $scope.showAll = false;
                return;
            }
        }
        $scope.showAll = true;
    };
	
	$scope.autoHotelNameList=function(){
		$("#hotelSearchName" ).autocomplete({
	      source: $scope.hotelNameList
	    });
	    }
		
	var countHotel = 0;
	$scope.findHotelByName = function() {
		
		console.log("Hotel by name search enteredValue is : " + $scope.hotelSearchName);
		$("#hotelNameError").removeClass("error").text("");
		if($scope.hotelSearchName == "" || $scope.hotelSearchName == undefined){
			$("#hotelNameError").addClass("error").text("Please enter hotel name");
			return;
		}
		// if($scope.hotelSearchName == undefined){
		// 	$("#hotelNameError").addClass("error").text("please enter hotel name");
		// 	return;
		// }
		$scope.orgFilterList = $scope.filteredList;
		$scope.restItemsNew = [];
		//$scope.selectedHotelItem = "";
		$scope.filteredItemsNew = [];
	    angular.forEach($scope.filteredList, function(item) {
	        if (item.HotelName == $scope.hotelSearchName) {
	        	countHotel++;
	        	
	        	$scope.filteredItemsNew.push(item);
	        	//$scope.selectedHotelItem = item;
	        	angular.forEach($scope.filteredList, function(item1) {
	        		if(item.HotelName == item1.HotelName){

	        		}
	        		else{
	        		//	$scope.filteredItemsNew.push(item1);
	        		}
	        	});
	        	
	        	 //$scope.filteredItemsNew.push($scope.restItemsNew);
		    	//$scope.filteredList = $scope.filteredItemsNew;
	        	$scope.hotelList.HotelList = $scope.filteredItemsNew;
	        	//console.log($scope.filteredItemsNew);
	        	
	       }
	    	
	    });
	    
	    	
		
		
	    if(countHotel == 0){
	    	$("#hotelNameError").addClass("error").text("please select hotel from list or change filter");
	    }
	};
	
	
	$scope.showMoreImages = function(id,url){
		
		 $("#htlImgDiv").fadeIn();
		 $("#carousel-inner").empty();
		 if(id != 0){
			$("#carousel-inner").append("<iframe class='cxl-iceportal iceportal_frame' border='0' height='450' width='800' src='https://www.iceportal.com/brochures/ice/Brochure.aspx?brochureid=ICE" + id +"'></iframe>");
		 }
		else {
			$("#carousel-inner").append("<img src='" + url + "' onerror='javascript:imgError(this,\"/resources/assets/no-image-big.png\")' height='450' width='auto'>");
		}
	}
	
	$scope.showMoreImagesDetails = function(id,url){
		
		 $("#showMoreRooms").fadeIn();
		
	}
	
	
		$scope.clearStarRating = function(){
	$scope.selectedStar=[];
}

$scope.clearPriceRange = function(){
	 var $slider = $("#htlPriceRange");
  	  $slider.slider("values", 0, $scope.lowerValue);
  	  $slider.slider("values", 1, $scope.higherValue);
  	  $("#sliderPrice").html('<span>$' + $scope.lowerValue + '</span>' + " - "  +  '<span>$' + $scope.higherValue + '</span>');
  	  	$scope.minPrice = $scope.lowerValue;
			$scope.maxPrice =  $scope.higherValue;
	 
	
}

$scope.clearSearchBy = function(){
	angular.element(document.querySelector('#hotelSearchName')).val("");
	$("#hotelNameError").removeClass("error").text("");
	if(countHotel > 0){
	$scope.hotelList.HotelList = 	$scope.orgFilterList;
	}
	
}
	
function noFilter(filterObj) {
		
        for (var key in filterObj) {

            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    }

$scope.getCap = function(text) {
    return text.replace(/ /g, "-");
}

});

hotelResultApp.filter("getIntPart",

	    function () {

	        return function (value) {
	        var newValue	= value.toString();
	        return newValue.split('.')[0]
	        }
	});

hotelResultApp.filter("getDecimalPart", function () {
	return function (value) {
		var newValue	= value.toString();
		var decimalPart = newValue.split('.')[1];
		if(decimalPart == undefined)
			decimalPart = "00";
		if(decimalPart.length == 1)
			decimalPart = decimalPart+"0";
		return decimalPart

	}
});

hotelResultApp.filter('trusted', ['$sce', function($sce) {
	    var div = document.createElement('div');
	    return function(text) {
	        div.innerHTML = text;
	       var pppp = div.textContent.replace("<br />", "");
	      pppp = pppp.replace("<b>", "<b style='background: #dedadab3;padding: 5px;border-radius: 4px;line-height: 28px;color: #3f3c3c;font-size: 11px;'>");
	        return $sce.trustAsHtml(pppp);
	    };
	}]);
	


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
	$(".room-radio").attr('checked', 'checked');
	$('#guest').click(function(){
		$('#guestInfoDiv').show();
	});

	$('.showMoreRooms').on('click', function(){
		$('.show-more-rooms').show();
    });

    $('#closeGuestInfo').on('click', function(){
		$(this).parent().hide();
    });
    
    $(document).on("click", ".showHotelMap" ,function(){
    	
    	 $("#htlMapDiv").fadeIn();
       var lat =  $(this).data("lattitude");
       var long = $(this).data("longitude");
       var hotelName = $(this).data("hotel-name");
       var address = $(this).data("address");
       initMap(lat,long,hotelName,address);
    }) 
     $(document).on("click", ".htlMapClose" ,function(){
    	 $(this).parent().fadeOut();
     })
     $(document).on("click", ".hotelImagesClose" ,function(){
    	 $("#showMoreRooms").fadeOut();
     })
     
     $(document).on("click", ".roomDiscriptionLink" ,function(){
		var cxv = $(this).find('i')[0];
		$(".roomDiscription").hide();
		$('.roomDiscriptionLink').find('i').removeClass("fa fa-angle-double-up").addClass("fa fa-angle-double-down");

		if(cxv.className){
			$(this).find('i').removeClass("fa fa-angle-double-down").addClass("fa fa-angle-double-up");
			$(this).parent().parent().parent().find(".roomDiscription").show().css('background-color','antiquewhite');
		}
     });
      


 $("#htlModifySearchBtn").click(function(){
		$("#htlModifySearchDiv").slideToggle();
		if($(this).text() === 'Modify Search'){
				$("#htlModifySearchBtn").text("Close Search");
		}else{
				$("#htlModifySearchBtn").text("Modify Search");
		}
	});
 
 
	function imgError(img,srcc) {
 		 img.error="";
 		 img.src=srcc;
 	}

   if(isMobile.phone || isMobile.tablet){
       //console.log('isMobile 1', isMobile.phone );
       $("#htlFilterClick").click(function(){
           $("#htlLeftContainer").removeClass('hidden-xs hidden-sm');
           $('html, body').animate({scrollTop:$("#htlLeftContainer").position().top}, 'slow');
       })

		$("#htlPSummaryClick,#htlPSummaryClickArrow").click(function () {
           $("#htlRightContainer").removeClass('hidden-xs hidden-sm');
           $('html, body').animate({scrollTop:$("#htlRightContainer").position().top}, 'slow');
       })

       $("#gotoTop, #closeFilter").click(function(){
           $("#htlLeftContainer").addClass('hidden-xs hidden-sm');
           $("#htlRightContainer").addClass('hidden-xs hidden-sm');
           $('html, body').animate({scrollTop:0}, 'slow');
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
      
});



  
   