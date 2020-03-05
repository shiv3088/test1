var sightSeeingListResult = angular.module("SightSeeingListPage", []);

sightSeeingListResult.directive("loading", function() {
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

sightSeeingListResult.controller("sightSeeingListController",
		['$scope','$http','$window', 'orderByFilter', '$filter', '$timeout',
		function($scope, $http, $window, orderBy, $filter, $timeout) {
  $scope.noOfResult = 18;
  $scope.categoryLimit = 4;
  $scope.showMore = true;
  $scope.resultFound=false;
  $scope.loading=true;
  $scope.durationArr = [];
  $scope.reverse = false;
  $scope.propertyName = 'sortOrder';
  $scope.titleList = [];
  $scope.categories = [];
  $scope.durationCategoryArr = [];
  $scope.durationCategoryArrFinal = [];
  $scope.durationCategoryChecked = [];
  $scope.durationLimit = 5;
  $scope.categoryChecked = [];
  $scope.limitLetter = 180;
  $scope.limitTitle = 25;
  $scope.isVisible = false;
  $scope.cId = 0;
  $scope.checkSubCategory= [];
  $scope.dataListBK = [];
  $scope.totalActivity = 0;
  
  
  var searchId = $("#currentValue").val();
  $http
    .get("/postSearchSightSeeing/" + searchId)
    .then(function(response) {
    	
    	$scope.dataList = response.data.sightSeeingSearchAvailList;
    	$scope.dataListBK = response.data.sightSeeingSearchAvailList;
    	$scope.categories = response.data.sightSeeingCategory;
    	$scope.resultFound = (response.data.sightSeeingSearchAvailList.length > 0) ? true : false;
    	$scope.attractionCount = response.data.sightSeeingSearchAvailList.length;
    	$scope.loading = false;
    	
    	($scope.resultFound == true) ? document.getElementById("listingDiv").style.display="block" : "";
    	
    	
    	_.map($scope.categories, function(category){
    		return _.extend(category, {isVisible: false});
    	});
    	
    	angular.forEach($scope.dataList, function(activity){
    		
    		if(activity.ImageURL.indexOf(".jpg") == -1) {
    			activity.imageValidFlag = false;
    		} else {
    			activity.imageValidFlag = true;
    		}
    		
    		if($scope.durationArr.indexOf(activity.TimeDuration) === -1){
    			$scope.durationArr.push(activity.TimeDuration);
    		}
    		
    		if($scope.titleList.indexOf(activity.SightSeeingTitle) === -1){
    			$scope.titleList.push(activity.SightSeeingTitle);
    		}
    		
    		var ready = _.matcher({durationCategory: activity.durationCategory.Category});
    		var readyLength = _.filter($scope.durationCategoryArr, ready).length;
    		
    		if(readyLength == 0) {
    			$scope.durationCategoryArr.push({
    				durationCategory: activity.durationCategory.Category,
    				categoryHours: activity.durationCategory.Hours
    			})
    		}
    		
    		activity['sortedPrice'] = activity.sightSeeingPricing.TotalPrice;
    		
    	});
    	
    	angular.forEach($scope.durationCategoryArr, function(durationObject) {
    		
    		if(durationObject.durationCategory != '') {
    			$scope.durationCategoryArrFinal.push({
                    name: durationObject.durationCategory,
                    hrs: durationObject.categoryHours,
                    count: $scope.dataList.filter(function(item) {
                        return item.durationCategory.Category == durationObject.durationCategory;
                    }).length
                });
    		}
            
        });
    	
    	$scope.$watch("searchActivity", function(newValue, oldValue, scope){
    		
    		if(newValue == ''){
    			$scope.dataList = $scope.dataListBK;
    			$scope.attractionCount = $scope.dataList.length;
    			$('.clearAllClass').hide();
    		}
			
    	});
    	
    	$("#asId").autocomplete({
    		source: $scope.titleList,
    		select: function(event, ui) {
    			$scope.dataList = $scope.dataListBK;
    			var selected = _.filter($scope.dataList, function(obj){return obj.SightSeeingTitle == ui.item.value});
    			var non_selected = _.filter($scope.dataList, function(obj){return obj.SightSeeingTitle != ui.item.value});
    			
    			var response_data = _.union(selected, non_selected);
    			
    			$scope.dataList = response_data;
    			$scope.attractionCount = $scope.dataList.length;
    			
    			$scope.$digest();
    		}
    	});
    	
    	//$scope.dataList = orderBy($scope.dataList, $scope.propertyName, $scope.reverse);
    	
    	
    	$scope.sortSightSeeingList = function(propertyName) {
    		
    		//alert('propertyName'+propertyName);
    		
    			if(propertyName == 'Rating' || propertyName == 'Review') {
    				$scope.reverse = (propertyName !== null && $scope.propertyName === propertyName) ? !$scope.reverse : true;
    			} else {
    				$scope.reverse = (propertyName !== null && $scope.propertyName === propertyName) ? !$scope.reverse : false;
    			}
    			
    			$scope.propertyName = propertyName;
    			
    			
        		if(propertyName == 'recommended') {
        			$('.customsort').removeClass('active');
    				$('.'+propertyName+'Class').addClass('active');
        			$scope.dataList = _.sortBy($scope.dataList, 'sortOrder');
        		} else {
        			if($scope.reverse == false) {
        				$('.customsort').removeClass('active');
        			$('.'+propertyName+'Class').addClass('active');
            			$scope.dataList = _.sortBy($scope.dataList, propertyName);
            		} else {
            			$('.customsort').removeClass('active');
        				$('.'+propertyName+'Class').addClass('active');
            			$scope.dataList = _.sortBy($scope.dataList, propertyName).reverse();
            		}
        		}
        		
    			//$scope.dataList = orderBy($scope.dataList, $scope.propertyName, $scope.reverse);
    			/*$scope.propertyName = propertyName;
    			
    			var arr = ['recommended', 'sortedPrice', 'Rating', 'Review'];
    			
    			_.map(arr, function(e){
    				var className = '.'+e+'Class';
    				return (e == $scope.propertyName) ? $(className).addClass('active') : $(className).removeClass('active');
    			})
    			*/
    			
    			
    			// Below Commented Code Restricting sorting in one way only either increasing or decreasing order
    			
    			/*if($scope.propertyName == 'sortedPrice'){
    				$scope.dataList = orderBy($scope.dataList, $scope.propertyName, true);
    				//$("#sortedprice").addClass('active');
    			} else {
    				$scope.dataList = $scope.dataListBK;
    				$scope.dataList = orderBy($scope.dataList, $scope.propertyName, false).reverse();
    			}*/
    	};
    	
    	/*$scope.checkImageUrl = function(url) {
    		url.includes('.jpg') ? true : false;
    	}*/
    	
    });
  
  
  $scope.TimeDurationFilter = function(data) {
	  
      if ($scope.filteredData != undefined) {
          $scope.loadMoreResultFilter();
      }
	  return (
          $scope.durationCategoryChecked[data.durationCategory.Category] ||
          noFilter($scope.durationCategoryChecked)
      );
      
  };
  
  $scope.resetFilter = function() {
	  $scope.sortSightSeeingList('recommended');
	  document.getElementById("asId").value="";
	  $('.clearAllClass').hide();
	 // $('.submenu').addClass('ng-hide');
	  
	  removeActiveClass();
	  
	  $('.submenu').addClass('ng-hide');

	  return $scope.dataList = _.sortBy($scope.dataListBK, 'sortOrder');
  }

  $scope.ShowHide = function (id) {
	  $scope.searchActivity = '';
	  _.each($scope.categories, function(obj){
		  if(obj.categoryId == id){
			  obj.isVisible = !obj.isVisible;
		  } else {
			  obj.isVisible = false;
		  }
	  });
	 
	  
	  //$('.submenu').removeClass('ng-hide');

	  removeActiveClass();
  }
  
  $scope.findData = function(categoryId, subCategoryId, index) {
	  $scope.dataList = $scope.dataListBK;
	  $scope.dataList = _.filter($scope.dataList, function(obj){
		 if((_.contains(obj.categoryIds, categoryId)) && (_.contains(obj.subCategoryIds, subCategoryId))){
			 return obj;
		 }
	  });
	  
	  $('.clearAllClass').show();
	  removeActiveClass();
	  $('.subCatId'+index).addClass('active');
	  
	  $scope.attractionCount = $scope.dataList.length;
  }
  
  $scope.loadMoreResultFilter = function() {
	  if ($scope.noOfResult >= $scope.dataList.length){
		  $scope.showMore = false;
	  } else {
		  $scope.showMore = true;
	  }
  };

  $scope.moveSightSeeingDetailedPage = function(productId) {

	$window.location = "/activitydetail/" + productId;
  
  }
  
  $scope.moveViewCart = function() {
	
	$window.location = "/activityviewcart/";
  }
  
  $scope.loadMoreResult = function() {
	  $scope.noOfResult = $scope.noOfResult + 18;
	  if ($scope.noOfResult >= $scope.dataList.length){
		  $scope.showMore = false;
	  }
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
    return text.replace(/([a-z])([A-Z])/g, "$1 $2");
  };
  
}]);


sightSeeingListResult.filter("nospace", function() {
	return function(value) {
		return !value ? "" : value.replace(/ /g, "-");
	};
});

sightSeeingListResult.filter("getIntPart", function() {
	return function(value) {
		var newValue = value.toString();
		return newValue.split(".")[0];
	};
});

sightSeeingListResult.filter("getDecimalPart", function() {
	return function(value) {
		var newValue = value.toString();
	    var decimalPart = newValue.split(".")[1];
	    if (decimalPart == undefined) decimalPart = "00";
	    if (decimalPart.length == 1) decimalPart = decimalPart + "0";
	    return decimalPart;
	};
});

sightSeeingListResult.filter("getDecimalPart", function() {
	return function(value) {
		var newValue = value.toString();
	    var decimalPart = newValue.split(".")[1];
	    if (decimalPart == undefined) decimalPart = "00";
	    if (decimalPart.length == 1) decimalPart = decimalPart + "0";
	    return decimalPart;
	};
});

sightSeeingListResult.filter("capitalize", function() {
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

function removeActiveClass() {
	$(' #cssmenu ul li span').removeClass('active');
}

function getNumbers(num){
	var arr = [];
	for(var i=0; i<=num; i=i+0.5){
		arr.push(i);
	}
	
	return arr;
}

/*------------ jQuery starts here ------------*/
$('.asIdClass').on('keypress keydown', function(e) {
	if(e.keyCode == 8) {
		if(($(this).val().length == 0) || ($(this).val().length == 1)) {
			$('.clearAllClass').hide();
		}
	} else {
		$('.clearAllClass').show();
	}
})

$(document).ready(function() {
	
    var $window = $(window);
    var $pane = $('#pane1');

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 767) {
		
            $('.grid-view').show();
        $('.listing-view').hide();
		}
		else{
			$('.grid-view').show();
			$('.listing-view').hide();
		}
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

    
    
	$('.recommendedClass').addClass('active');
	
	/*$('.sorting-sightSeeing li a').click(function() {
		$('.sorting-sightSeeing li').removeClass('active');
		console.log(JSON.stringify($(this).parent()))
		$(this).parent().addClass('active');
	});*/

	/*$('.sorting-tab li').click(function(){
		$('.sorting-tab li').removeClass('active');
		$(this).addClass('active')
	});
	
	$('#listview').click(function(){
		$('.listing-view').show();
        $('.grid-view').hide();
	});
	
	$('#gridview').click(function(){
		$('.grid-view').show();
        $('.listing-view').hide();
	});
	
	$('.list-grid-btn').click(function(){
		$('.list-grid-btn').removeClass('active');
        $(this).addClass('active');
	});
	
	
	$("#crModifySearchBtn").click(function() {
		$("#sightSeeingSearch").slideToggle();
		if ($(this).text() === 'Modify Search') {
            $("#crModifySearchBtn").text("Close Search");
        } else {
            $("#crModifySearchBtn").text("Modify Search");
        }
	});*/
	
	$('#listview').click(function(){
		$('.listing-view').show();
        $('.grid-view').hide();
	});
	
	$('#gridview').click(function(){
		$('.grid-view').show();
        $('.listing-view').hide();
	});
	
	$('.list-grid-btn').click(function(){
		$('.list-grid-btn').removeClass('active');
        $(this).addClass('active');
	});
	
	
	$("#crModifySearchBtn").click(function() {
		$("#sightSeeingSearch").slideToggle();
		if ($(this).text() === 'Modify Search') {
            $("#crModifySearchBtn").text("Close Search");
        } else {
            $("#crModifySearchBtn").text("Modify Search");
        }
	});
});


/* Below disable back button browser functionality*/

history.pushState(null, null, location.href);
window.onpopstate = function () {
	history.go(1);
};

/* Above disable back button browser functionality*/
