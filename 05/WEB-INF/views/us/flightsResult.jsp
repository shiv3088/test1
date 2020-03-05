<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 

<!DOCTYPE html>
<html lang="en" ng-app="angularTable">
<head> 
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8"> 
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="viewport" content="user-scalable=0, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
<title>Flights Searching: Travelopick in Travel Deals, Cheap Flight Deals, Airline Deals</title>
<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="/resources/css/reset.css" rel="stylesheet"> 
<link href="/resources/travelopick/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/css/style.css" rel="stylesheet">
<link href="/resources/travelopick/css/header.css" rel="stylesheet">
<link href="/resources/css/font-awesome.css" rel="stylesheet">
<link href="/resources/travelopick/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/css/resultside.css" rel="stylesheet">
<link href="/resources/css/tooltip.css" rel="stylesheet">
<script src="/resources/lib/angular/angular.js"></script>
<script src="/resources/travelopick/js/jquery.1.11.1.min.js"></script>
<link href="/resources/css/toaster.css" rel="stylesheet" />
<style> .form-group.form-group-lg { margin-bottom:0 !important; } .mainfotter { display:none !important; }  h4 {color:#fff;} .pull-left, .pull-right {color:#000;} .form-group .input-icon { font-size:18px !important; } </style>
<!-- <link rel="stylesheet" href="/flights/resources/css/angular-slider.css"> -->
<!-- <link rel="stylesheet" href="/flights/resources/angular-rangeslider/angular.rangeSlider.css"> -->
<!-- <script type="text/javascript" src='/flights/resources/lib/angular/angular-slider.js'  charset="utf-8"></script>     -->
  <script src="//cdn.jsdelivr.net/angular.initial-value/latest/angular-initial-value.min.js"></script>
   
<!--     <script type="text/javascript" src="https://cdn.jsdelivr.net/ngstorage/0.3.6/ngStorage.min.js"></script> -->
     <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.js"></script>
<style> 
.form-group.form-group-lg label { color:#fff !important; }
.journey .input-icon { top:30px !important; }
 .src-sorting-tab .nav > li.active > a {  padding:12px 30px; font-size:16px;border-bottom:0 !important; background:rgba(255, 255, 255, 0.99) none repeat scroll 0 0 ; color:#11a4cb;  }
.src-sorting-tab .nav > li > a {  padding:12px 30px; font-size:16px; background:#666; color:#fff;  }
.src-sorting-tab .nav > li > a:hover { background:rgba(17, 164, 203, 0.68) none repeat scroll 0 0 !important; color:#fff !important;  }
.src-sorting-tab .nav > li > a:focus { padding:12px 30px; font-size:16px; border:1px solid #11a4cb; !important; border-bottom:0 !important; background:rgba(255, 255, 255, 0.99) none repeat scroll 0 0 !important; color:#11a4cb !important;  }
 
.form-group.form-group-lg { margin-bottom:0 !important; } .mainfotter { display:none !important; }  h4 {color:#fff;} .pull-left, .pull-right {color:#000;}</style>

<script>
 	'use strict'


    var angularTable = angular.module('angularTable', ['angularUtils.directives.dirPagination','initialValue','LocalStorageModule','ngAnimate', 'toaster']);
	angularTable.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        template: '<div class="srching-txt" style="text-align:center; height:300px; margin:30px 0;"><img src="/resources/images/waiting-loader.gif"><h1 style="color:#03566c; font-size:30px; margin-top:20px;">We are looking the best flights for you ...</h1><div style="margin:50px 0 40px 0; position:relative; float:left; text-align:center; width:100%;"><img src="/resources/images/colarge-air-logo.gif" style="border:1px dashed #ccc; border-radius:20px;"></div></div>',
        link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  })
  
  angularTable.directive('featureddeal', function () {
      return {
        restrict: 'E',
        replace:false,
        // template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</div>',
        link: function (scope, element, attr) {
              scope.$watch('featureddeal', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  })
  
/*   angularTable.config(function($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
}) */
  
   /*  angularTable.directive('noResultFound', function () {
      return {
        restrict: 'E',
        replace:false,
        // template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</div>',
        link: function (scope, element, attr) {
              scope.$watch('noResultFound', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  })
  
    angularTable.directive('blackListedCountry', function () {
      return {
        restrict: 'E',
        replace:false,
        // template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</div>',
        link: function (scope, element, attr) {
              scope.$watch('blackListedCountry', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  }) */
  
 angularTable.factory('itemsFactory', ['$http', function($http){
 return {
    itemDetails: function(ids) {
      return $http(
      {
        url: "/PostSearchFlight/"+ids,
        method: "GET",
      })
      .then(function (response) {
        return response.data;
        });
      },
      
      getStateDataFromServer: function(id) {
	   return $http(
      {
        url: "/Details/"+id,
        method: "GET",
      })
      .then(function (response) {
       
        return response.data;
        });
     },
		
	  FlterByStop: function(id) {
	   return $http(
      {
        url: "/Fliter/"+id,
        method: "GET",
      })
      .then(function (response) {
       
        return response.data;
        });
     },
	  movePaymentPage: function(id) {
	 
	   return $http(
      {
        
        url: '/purchase/'+id,
        method: "POST",
      })
      .then(function (response) {
      
        return response.data;
        });
     }
     
    };	
   
  
}]);
  
  /*  angularTable.directive('inverted', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(val) { return !val; });
      ngModel.$formatters.push(function(val) { return !val; });
    }
  };
}); */
/* var DetailController = function($scope, $http) {
		       
		          $scope.getStateDataFromServer = function(id) {
            alert("Task Id is "+id);
		    $http.get('Details/'+id).success(function(data, status, headers, config) {
		        
		        $scope.flightsDetails = data;
		       // $('.featured-deal').show();
		       // $scope.divHtmlVar = $scope.divHtmlVar + '<br/><i>appended text</i>'; 
		     
		        alert("data:"+data);
		    }).error(function(data, status, headers, config){ 
		  }); 
		}
		
				   
  
 	 }; */
 	 
   
		var MainController = function($scope, $http,itemsFactory, $window , $templateCache, $interval,localStorageService, $timeout, toaster) {
		        $scope.user = []; //declare an empty array
		        $scope.selectedStop = [];
		        $scope.filter = {};
		        $scope.colourIncludes = [];
		        $scope.dataRes = "xyz";
		        $scope.featureddeal = false;
		       // $scope.blackListedCountry= false;
		       // $scope.noResultFound= false;
		        $scope.lower_price_bound = 0;
                $scope.upper_price_bound = 5000;
                 $scope.lower_price_slider = 0;
                 $scope.upper_price_slider = 5000;
                $scope.lower_depart_bound = "0000";
                $scope.upper_depart_bound = "2359";
                
                 $scope.lower_return_bound = "0000";
                $scope.upper_return_bound = "2359";
                $scope.searchQueryList =  [];
                if(localStorageService.get("lkhistory") != null){
               // $scope.searchQueryList.push(localStorageService.get("searchQuery"));
                 $scope.searchQueryList=localStorageService.get("lkhistory");
                }
                 $scope.$watch('searchQuery', function(val) {
			        if (val) {
			           
			            $scope.searchQueryList.push(val);
			           // console.log($scope.searchQueryList);
			           
			          //  localStorageService.set("searchQuery", JSON.stringify($scope.searchQueryList));
			              localStorageService.set("lkhistory",$scope.searchQueryList);
			            // $localStorage.LocalMessages = val;
			        }
			    });
			    
			   //  $scope.$location = {};
				/*   angular.forEach('protocol host port path search hash'.split(' '), function(method) {
				   $scope.$location[method] = function() {
				     var result = $location[method]();
				     return angular.isObject(result) ? angular.toJson(result) : result;
				   };
				  }); */
               //  console.log("Host:"+$location.host());
                //  console.log("port:"+$location.port());
                  //   console.log("path:"+$location.path());
                     // console.log($location.search());
               //   console.log($location.path().split('/')[3]);currentLocation
                 $scope.currentLocation=document.getElementById('currentLocation').value;
                 console.log($scope.currentLocation);
                 document.getElementById('resultApp').style.display="block";
                $scope.priceRangeList={};
                 $scope.filters = { };
                $scope.filtersPrice= { };
                $scope.currentPage = 0;
   				$scope.pageSize = 5;
               
    
    	       /*  $scope.filterList = {}; */
		        $scope.stopList = [{
				        id: 1,
				        name: 'Non Stop'
				    }, {
				        id: 2,
				        name: 'One Stop'
				    }, {
				        id: 3,
				        name: 'Two Stop'
				    }];
				   
                $scope.loading = true;
                var promise = itemsFactory.itemDetails($scope.currentLocation);
              //    var promise = itemsFactory.itemDetails();

			  	  promise.then(function (data) {
			   
			       // console.log("data flights:"+data);
			       
			        $scope.responseStatus=[];
			         $scope.cityPair;
			        $scope.loading = false;
			        $scope.mainlist=[];
			        $scope.flexlist=[];
			         $scope.nearBylist=[];
			        
			        $scope.list=[];
			        $scope.matrix=[];
			         $scope.matrixlist=[];
			        $scope.matrixFxlist=[];
			         $scope.matrixNBlist=[];
			         
			        $scope.airline = [];
			        $scope.priceRangeList=[];
			        $scope.blackListedCountry= [];
		            $scope.noResultFound= [];
		             $scope.noResultff= [];
			         angular.forEach(data, function(Flighth) {
			           $scope.list=Flighth.flightResponse;
			           $scope.mainlist=Flighth.flightResponse;
			            $scope.flexlist=Flighth.flexibleSearch;
			             $scope.nearBylist=Flighth.nearBy;
			            
			           $scope.matrix=Flighth.airlineStop;
			            $scope.matrixlist=Flighth.airlineStop;
			             $scope.matrixFxlist=Flighth.airlineFxStop;
			              $scope.matrixNBlist=Flighth.airlineNbStop;
			              
			           $scope.responseStatus=Flighth.responseStatus;
			            $scope.cityPair=Flighth.cityPair;
			          //  console.log("nearBylist:"+$scope.nearBylist);
			          //  console.log("flexlist:"+ $scope.flexlist);
			            
			         });
			         
			         
			         
			         $scope.numberOfPages=function(){
        				return Math.ceil($scope.matrix.length/$scope.pageSize);                
    					}
			      //  $scope.filterList = [];
			       //console.log("ErrorDescription:"+$scope.responseStatus.ErrorDescription);
			      // console.log($scope.responseStatus);
			       // console.log( "blackListedCountry");
			        // console.log($scope.blackListedCountry);
			       //  console.log("noResultFound"+ $scope.noResultFound);
			       //  console.log($scope.noResultFound);
						        if($scope.responseStatus.ErrorDescription == "BlackListedCountry"){
						              $scope.blackListedCountry=  [new String('Item 5')];
						             //console.log( $scope.blackListedCountry);
						             
									 var url = "/noResult/NO"+$scope.cityPair;
      								  $window.location.href = url;
						        }
						        
						        if($scope.responseStatus.ErrorDescription == "InternalError: Internal Error"){
						              $scope.noResultFound= [new String('Item 5')];

						           //  console.log( $scope.noResultFound);
						             var url = "/noResult/NO"+$scope.cityPair;
      								  $window.location.href = url;
						        }
						         if($scope.responseStatus.ErrorDescription == "NO ITINERARY FOUND FOR REQUESTED SEGMENT 1"){
						             $scope.noResultFound= [new String('Item 5')];
									// console.log( $scope.noResultFound);
									 var url = "/noResult/NO"+$scope.cityPair;
									 
      								  $window.location.href = url;
						        }
						       
						        if($scope.responseStatus.ErrorDescription == "Unknown City/Airport"){
						             $scope.noResultFound= [new String('Item 5')];
									// console.log( $scope.noResultFound);
									 var url = "/noResult/NO"+$scope.cityPair;
									 
      								  $window.location.href = url;
						        }
						         if($scope.responseStatus.Status == "1"){
						             $scope.noResultFound= [new String('Item 5')];
									// console.log( $scope.noResultFound);
									 var url = "/noResult/NO"+$scope.cityPair;
									 
      								  $window.location.href = url;
						        }
						        
						   
						        angular.forEach($scope.matrix, function(tech) {
						     
						          if ($scope.airline.indexOf(tech) == -1) {
						            $scope.airline.push(tech.airlineName);
						           
						          }
						        });
						        
						         $scope.dtoCity = document.getElementById('dtoCity').value;
						          $scope.stoCity = document.getElementById('stoCity').value;
						          
						         //  $scope.checkIn = document.getElementById('checkIn').value;
						        
						       //   $scope.checkOut = document.getElementById('checkOut').value;
						         
						         


						         /*$timeout(function() {
				    				  toaster.pop('hotel',  ""+$scope.dtoCity +" Hotels", ""+$scope.checkIn+" - "+$scope.checkOut+"");
				    				     // console.log('update with timeout fired')
				    			  }, 12000);*/
				      
								$scope.redirectToHotel = function () {
								      var url = "/hotelSearch/city/"+$scope.stoCity;
      								console.log("URLS"+url);
					                $window.open(url, '_blank');
					            };
					
					            $scope.changeList = function () {
					                var myEl = angular.element( document.querySelector( '#slR' ) );
									myEl.removeClass('active');
									 var amyEl = angular.element( document.querySelector( '#aslR' ) );
									amyEl.removeClass('bg-clor');
									
									
									var nbr = angular.element( document.querySelector( '#nbr' ) );
									nbr.removeClass('active');
									var anbr = angular.element( document.querySelector( '#nbr' ) );
									anbr.removeClass('bg-clor');
									
									var alr = angular.element( document.querySelector( '#alr' ) );
									alr.addClass('active');
									var aalr = angular.element( document.querySelector( '#aalr' ) );
									aalr.addClass('bg-clor');
									
									
									
									
								    $scope.list=$scope.flexlist;
								     $scope.matrix=$scope.matrixFxlist;
								      $scope.airline = [];
								       $scope.filterAirline = {};
								        angular.forEach($scope.matrix, function(tech) {
						     
						          if ($scope.airline.indexOf(tech) == -1) {
						            $scope.airline.push(tech.airlineName);
						           
						          }
						        });
								     //   console.log("flexlist:"+$scope.list);
					            };
					            
					             $scope.nearBySearch = function () {
					             
					               var myEl = angular.element( document.querySelector( '#slR' ) );
									myEl.removeClass('active');
									 var amyEl = angular.element( document.querySelector( '#aslR' ) );
									amyEl.removeClass('bg-clor');
									
									var nbr = angular.element( document.querySelector( '#nbr' ) );
									nbr.addClass('active');
									var anbr = angular.element( document.querySelector( '#anbr' ) );
									anbr.addClass('bg-clor');
									
									var alr = angular.element( document.querySelector( '#alr' ) );
									alr.removeClass('active');
									var aalr = angular.element( document.querySelector( '#aalr' ) );
									aalr.removeClass('bg-clor');
									
									
								    $scope.list=$scope.nearBylist;
								     $scope.matrix=$scope.matrixNBlist;
								      $scope.airline = [];
								       $scope.filterAirline = {};
								     //   console.log("nearBylist:"+$scope.list);
								        angular.forEach($scope.matrix, function(tech) {
						     
						          if ($scope.airline.indexOf(tech) == -1) {
						            $scope.airline.push(tech.airlineName);
						           
						          }
						        });
			           
					            };
					            
					             $scope.mainList = function () {
					                var myEl = angular.element( document.querySelector( '#slR' ) );
									myEl.addClass('active');
									 var amyEl = angular.element( document.querySelector( '#aslR' ) );
									amyEl.addClass('bg-clor');
									
									var nbr = angular.element( document.querySelector( '#nbr' ) );
									nbr.removeClass('active');
									var anbr = angular.element( document.querySelector( '#anbr' ) );
									anbr.removeClass('bg-clor');
									
									
									var alr = angular.element( document.querySelector( '#alr' ) );
									alr.removeClass('active');
									var aalr = angular.element( document.querySelector( '#aalr' ) );
									aalr.removeClass('bg-clor');
									
								    $scope.list=$scope.mainlist;
								     $scope.matrix=$scope.matrixlist;
								      $scope.airline = [];
								       $scope.filterAirline = {};
								        angular.forEach($scope.matrix, function(tech) {
						     
						          if ($scope.airline.indexOf(tech) == -1) {
						            $scope.airline.push(tech.airlineName);
						           
						          }
						        });
					            };
					            
						      angular.forEach(data, function(Fli) {
						       
						     
						        
						        angular.forEach(Fli.flightResponse, function(Flighth, index) {
						      // console.log(Flighth);
						  
						        
						      
						      /*   angular.forEach(Flighth.Flights.Segments, function(tech) {
						          if ($scope.airline.indexOf(tech) == -1) {
						            $scope.airline.push(tech.Airline);
						           
						          }
						        }); */
						        $scope.upper_price_bound =Flighth.Flights.PersonFare;
						         $scope.upper_price_slider =Math.ceil(Flighth.Flights.PersonFare);
						       if(index == 0){
						        var placeholder2 = document.getElementById('angularvalue'); //working
						        $scope.lower_price_slider = Math.floor(Flighth.Flights.PersonFare);
					           placeholder2.innerHTML = Flighth.Flights.PersonFare; 
					           $scope.google_price_bound= Flighth.Flights.PersonFare;
					           }
						        //$scope.filterList.push({airlineId: $scope.airlineId, flightId: Flighth.Flights.FlightId});
						      });
						    });
						      
       $("#price-range").slider({
                range: true,
                min: $scope.lower_price_slider,
                max: $scope.upper_price_slider,
                values: [ $scope.lower_price_slider, $scope.upper_price_slider ],
                slide: function( event, ui ) {
                    $(".min-price-label").html( "$" + ui.values[ 0 ]);
                    $(".max-price-label").html( "$" + ui.values[ 1 ]);
                     var scope = angular.element(document.getElementById('MainController')).scope();
                     scope.$apply(function() {
                             scope.lower_price_bound = ui.values[0];
						     scope.upper_price_bound = ui.values[1];
					  });
                   
                }
            });
            $(".min-price-label").html( "$" + $("#price-range").slider( "values", 0 ));
            $(".max-price-label").html( "$" + $("#price-range").slider( "values", 1 ));
            
					//$scope.priceRangeList.push({minPrice: $scope.lower_price_bound, maxPrice: $scope.upper_price_bound});
			    });


$scope.priceSlider = {
    range: {
        min: 0,
        max: 10050
    },
    minPrice: 1000,
    maxPrice: 4000
};

  
  $scope.priceRange = function(item) {
 // alert($scope.upper_price_bound);
  //alert(item.Flights.PersonFare);
    return (parseInt(item.Flights.PersonFare) >= parseInt($scope.lower_price_bound) && parseInt(item.Flights.PersonFare) <= parseInt($scope.upper_price_bound));
  };
  
   $scope.departRange = function(item) {
   // alert($scope.upper_depart_bound);
    
    return (parseInt(item.Depart) >= parseInt($scope.lower_depart_bound) && parseInt(item.Depart) <= parseInt($scope.upper_depart_bound));
  }; 
  
  $scope.returnRange = function(item) {
   // alert($scope.upper_depart_bound);
    
    return (parseInt(item.Return) >= parseInt($scope.lower_return_bound) && parseInt(item.Return) <= parseInt($scope.upper_return_bound));
  };
  
  
     $scope.filterAirline = {};

    
    $scope.filterByAirline = function (flights) {
        return $scope.filterAirline[flights.Airline] || noFilter($scope.filterAirline);
    };
    
    $scope.filterByStop = function (flights) {
    
        return $scope.selectedStop[flights.Stop] || noFilter($scope.selectedStop);
    };
          
   function noFilter(filterObj) {
        for (var key in filterObj) {
      
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    }
		/* 		var response = $http.get('PostSearchFlight');
				response.success(function(data, status, headers, config) {
				$scope.loading = false;
					$scope.list=data;
					$scope.user=data;
					
					
      				$scope.airline = [];
						      angular.forEach(data, function(Flighth) {
						        
						        angular.forEach(Flighth.Flights.Segments, function(tech) {
						          if ($scope.airline.indexOf(tech) == -1) {
						            $scope.airline.push(tech.Airline);
						          }
						        });
						      });
      
                             
                                            
					
				});
				response.error(function(data, status, headers, config) {
				$scope.loading = false;
					alert( "Exception details: " + JSON.stringify({data: data}));
				}); */
			
			$scope.sort = function(keyname){
				$scope.sortKey = keyname;   //set the sortKey to the param passed
				$scope.reverse = !$scope.reverse; //if true make it false and vice versa
			}
			
			$scope.closePopUP = function(keyname){
			  $scope.featureddeal = false;
			}
			
			$scope.getStateDataFromServer = function(id) {
            var Details = itemsFactory.getStateDataFromServer(id);
  				 //$scope.featureddeal = false;
			  	  Details.then(function (data) {
			          //  alert($scope.featureddeal);
				        console.log(data);
					        
					     
				        $scope.featureddeal = true;
				      //  alert($scope.featureddeal);
				        $scope.flightsDetails = data;
				       // alert("flightsDetails:"+$scope.flightsDetails);
			      
			    }, function(e) {
                  alert(e.stautsText);
                });
			    
			   }
			   
			   	$scope.FlterByStop = function(id) {
            var stops = itemsFactory.FlterByStop(id);
  				 //$scope.featureddeal = false;
			  	  stops.then(function (data) {
			          //  alert($scope.featureddeal);
				        console.log(data);
				        $scope.list=data;
					  
			    }, function(e) {
                  alert(e.stautsText);
                });
			    
			   }
			   
//$scope.post = {url: 'http://', title: ''};			   
$scope.flightsDetails = {};
    	
    $scope.movePaymentPage	 = function(id) {
            var purchase = itemsFactory.movePaymentPage(id);
  				 //$scope.featureddeal = false;
			  	  purchase.then(function (data) {
			          //  alert($scope.featureddeal);
				       // console.log(data);
					        
					     
				     //   $scope.featureddeal = true;
				      //  alert($scope.featureddeal);
				      //  $scope.flightsDetails = data;
				       // alert("flightsDetails:"+$scope.flightsDetails);
			      
			    }, function(e) {
                  alert(e.stautsText);
                });
			    
			   }
			   
	$scope.movePaymentPage = function(id) {
	//   $window.open('https://www.travelopick.com/purchase/'+id);
      $window.location.href = '/purchase/'+id;
    };
    
    		   
			   
    $scope.includeColour = function(colour) {
    
        var i = $.inArray(colour, $scope.colourIncludes);
        if (i > -1) {
            $scope.colourIncludes.splice(i, 1);
        } else {
            $scope.colourIncludes.push(colour);
        }
       // alert("includeColour"+$scope.colourIncludes.length);
    }
    
    $scope.colourFilter = function(flight) {
     // alert("colourFilter:"+$scope.colourIncludes.length);
      
       /*  if ($scope.colourIncludes.length > 0) {
            if ($.inArray(flight.colour, $scope.colourIncludes) < 0)
                return;
        } */
        
        return flight;
    }
    
      
     
  
 	 };
 // angularTable.controller('listdata', ['$scope', '$http', 'itemsFactory', function($scope, $http, itemsFactory){
 
  angularTable.filter('startFrom', function() {
     return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    }
    });
    
   angularTable.filter('nl2br', ['$sce', function ($sce) {
        return function (text) {
            return text ? $sce.trustAsHtml(text.replace(/'/g, '')) : '';
        };
    }])
    
  angularTable.controller("listdata", MainController);
   //angularTable.controller("detailsdata", DetailController);
  
 
 
  angularTable.filter('time', function() {
    
    var conversions = {
      'ss': angular.identity,
      'mm': function(value) { return value * 60; },
      'hh': function(value) { return value * 3600; }
    };
    
    var padding = function(value, length) {
      var zeroes = length - ('' + (value)).length,
          pad = '';
      while(zeroes-- > 0) pad += '0';
      return pad + value;
    };
    
    return function(value, unit, format, isPadded) {
      var totalSeconds = conversions[unit || 'ss'](value),
          hh = Math.floor(totalSeconds / 3600),
          mm = Math.floor((totalSeconds % 3600) / 60),
          ss = totalSeconds % 60;
      
      format = format || 'hh:mm:ss';
      isPadded = angular.isDefined(isPadded)? isPadded: true;
      hh = isPadded? padding(hh, 2): hh;
      mm = isPadded? padding(mm, 2): mm;
      ss = isPadded? padding(ss, 2): ss;
      
      return format.replace(/hh/, hh).replace(/mm/, mm).replace(/ss/, ss);
    };
  });
 /*  angularTable.filter('myfilter', function() {
   return function( items, airline) {
    var filtered = [];
     for(var key in airline){
   			alert(key);
		}
    
     angular.forEach(items, function(item) {
       if(types.luxury == false && types.double_suite == false) {
          filtered.push(item);
        }
        else if(types.luxury == true && types.double_suite == false && item.type == 'luxury'){
          filtered.push(item);
        }
        else if(types.double_suite == true && types.luxury == false && item.type == 'double suite'){
          filtered.push(item);
        }
    }); 
  
    return filtered;
  };
}); */

 /*  angularTable.filter('filterMultiple',['$filter',function ($filter) {
	return function (items, keyObj) {
		var filterObj = {
							data:items,
							filteredData:[],
							applyFilter : function(obj,key){
							
								var fData = [];
								if(this.filteredData.length == 0)
									this.filteredData = this.data;
								if(obj){
									var fObj = {};
									if(angular.isString(obj)){
										fObj[key] = obj;
										fData = fData.concat($filter('filter')(this.filteredData,fObj));
									}else if(angular.isArray(obj)){
										if(obj.length > 0){	
											for(var i=0;i<obj.length;i++){
												if(angular.isString(obj[i])){
													fObj[key] = obj[i];
													fData = fData.concat($filter('filter')(this.filteredData,fObj));	
												}
											}
											
										}										
									}									
									if(fData.length > 0){
										this.filteredData = fData;
									}
								}
								
							}
				};

		if(keyObj){
			angular.forEach(keyObj,function(obj,key){
				filterObj.applyFilter(obj,key);
			});			
		}
		
		return filterObj.filteredData;
	}
}]); */

angularTable.filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }
     
    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;
 		/* for(var key in item){
   			//alert(key);
		} */
        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i][filterOn]), extractValueToCompare(item[filterOn]))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }
		
      });
      items = newItems;
    }
    return items;
  };
});



/* angularTable.filter('searchFilter',function($filter) {
        return function(items,searchfilter) {
             var isSearchFilterEmpty = true;
            //searchfilter darf nicht leer sein 
              angular.forEach(searchfilter, function(searchstring) {   
                  if(searchstring !=null && searchstring !=""){
                      isSearchFilterEmpty= false;
                  }
              });
            alert(searchfilter);
        if(!isSearchFilterEmpty){
                var result = [];  
              
                angular.forEach(items, function(item) {  
                    var isFound = false;
                     angular.forEach(item, function(term,key) {                         
                         if(term != null &&  !isFound){
                             term = term.toLowerCase();
                                angular.forEach(searchfilter, function(searchstring) {      
                                    searchstring = searchstring.toLowerCase();
                                    if(searchstring !="" && term.indexOf(searchstring) !=-1 && !isFound){
                                       result.push(item);
                                        isFound = true;
                                        // console.log(key,term);
                                    }
                                });
                         }
                            });
                       });
            return result;
        }else{
        return items;
        }
    }
  }); */
  
 
    	</script>
    	
<style type="text/css">
   	#fadebackground {display: none; background-color: #777; opacity: 0.65; filter: alpha(opacity=65); position: fixed; z-index: 9001; top: 0px; left: 0px; width: 105%;	}
	.popup-itanery-table { border-collapse: collapse; width: 100%; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 12px; margin: 0px auto;}
	.popup-header {background-color: #1E6DAB; color: #fff; vertical-align: middle; text-align: left; padding-left: 10px; font-size: 16px; font-family: Verdana;height: 35px;}
	.popup-header a { color: #FF8000; font-size: 16px; font-family: Verdana; cursor: pointer; float: right; margin-right: 10px; }
</style>

<script type="text/javascript">
    function popup(divProgressBar, width, height)
    {
        try 
        {
            var height1 = $(window).height();
            var width1 = $(window).width();
            $('#' + divProgressBar).height(height + "%");
            $('#' + divProgressBar).width(width + "%");
          //  $('#' + divProgressBar).css({ top: ((height1 - ((height1 * parseInt(height)) / 100)) / 2).toFixed(0) + "px", left: ((width1 - ((width1 * parseInt(width)) / 100)) / 2).toFixed(0) + "px" });
             $('#' + divProgressBar).css({ top: "100px", left: ((width1 - ((width1 * parseInt(width)) / 100)) / 2).toFixed(0) + "px" });

            $('#fadebackground').height(height1 + "px");
            $('#fadebackground').width(width1 + "px");
            $('#fadebackground').toggle();
            $('#' + divProgressBar).toggle();
            return false;
        }
        catch (e) 
        {
        	return false; 
        }
    }
    
    var sessionTimeout = 30;
    
    window.onload = DisplaySessionTimeout;
    
    function DisplaySessionTimeout()
    {
        sessionTimeout = sessionTimeout - 1;
        if (sessionTimeout >= 0)
            window.setTimeout("DisplaySessionTimeout()", 30000);
        else 
        {
            callSessionTimeOut();
        }
    }
    
    function callSessionTimeOut()
    {
        popup('divSessionOut', 30, 30);
        return true;
    }
   
</script>

	

<jsp:include page="inside_header.jsp"></jsp:include>

<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body ng-controller="MainController" id="MainController">
<div id="fadebackground"></div>
	<div align="center" id="divSessionOut" style="display:none; " class="popup-product">
<div class="session-exp">
	<p>Session Expired! </br>
Flight prices may change frequently owing to demand & availability. </br>
Start a new search to view the best deals.         
</p>

<div style="font-size:50px; padding:20px 0px; color:#868686;"> <i class="fa fa-clock-o" aria-hidden="true"></i>  </div>

<div align="center" valign="middle"><a href="#" onclick="submitForm();" class="btn btn-primary btn-lg" style="padding: 10px 30px; font-size: 16px; margin-top:10px; width:auto;">Search Again</a>
<br/>OR<br/><a href="/" class="btn btn-primary btn-lg" style="padding: 10px 30px; font-size: 16px; margin-top:10px; width:auto;">Go to Home</a></div>
			 
	        </div>
	</div>
<!-- <input type="hidden" id="airlineList" value="{{filterList}}"/> -->

			<!--- Header Section Start---->
			
			<!--- Header Section End---->

<input initial-value type="hidden" ng-model="searchQuery" value='${searchQuery.replace("'", "")}'/>

<input  type="hidden" id="currentLocation" value=""/>
<%
String lookfromCity="";
String looktoCity="";
String lookdepDate="";
String lookretDate="";
%>
 

                        <!-------------------Flight Detail Pop Up------------------------------->
               
                  
                        <!------------------Flight Detail Pop up ends----------------------------->
<!--- Main Section---->
	
    <div class="main">
    
	
								  
								  

    
		<div class="">
	 
	 <div class="panel panel-default" style="border:0 !important;">
                                    
                                    <div class="panel-collapse collapse" id="collapseTwo">
                                      <!-------Modify Search-------------->
    	<div class="bg-nav bdr2">
        	<div class="container">
            	<div class="">
                	      
<form:form method="POST" action="/search" modelAttribute="flightSearch" id="flightSearch">
       <div id="errorDiv" style="color:#E9800C; margin-bottom:10px;"></div>
                    	<div class="row">
                            
                            <div class="col-lg-5 col-md-6 col-sm-6 col-xs-12">
                            	<div class="form-group form-group-lg form-group-icon-left form-group-filled journey">
								<label style="display:block; margin-bottom:0;">From </label>
                            	<i class="fa fa-map-marker input-icon"></i>
                            	    <form:input path="froCity" class="form-control" autocomplete="off" placeholder="Enter the City or Airport Name" />
                                   
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-6 col-sm-6 col-xs-12">
                            	<div class="form-group form-group-lg form-group-icon-left form-group-filled journey">
								<label style="display:block; margin-bottom:0;">To </label>
								<i class="fa fa-map-marker input-icon"></i>
                                    <form:input path="toCity" class="form-control" autocomplete="off" placeholder="Enter the City or Airport Name"/>
                                                           
                                </div>
                            </div>
							
							<div class=" col-lg-2 col-md-4 col-sm-4 col-xs-12 ">
                            	<div class="form-group form-group-lg form-group-icon-left journey">
                                	<label style="display:block; margin-bottom:0;">Trip Type </label>
                                    <i class="fa fa-plane input-icon box-icon-tfn-left box-icon-left " style="color"></i>
                                     
                                     <form:select path="tripType" class="form-control" id="tripType" onchange="ddlTypejourneyChange(this);" name="ddlTypejourney" >
                                          <form:option value="2" selected="selected">Return</form:option>
                                          <form:option value="1">One Way</form:option>
                                     </form:select>                        
                                                           
                                </div>
                            </div>
							 
                             <div class=" col-lg-2 col-md-4 col-sm-4 col-xs-12">
                            	<div class="form-group form-group-lg form-group-icon-left form-group-filled journey">
								<label style="display:block; margin-bottom:0;">Depart </label>
                                    <i class="fa fa-calendar-check-o input-icon"></i>
                                        <form:input path="froDate" id="departDate" class="form-control" data-date-autoclose="true" data-date-role="start" style="background:#fff !important;" name="tbDepart"/>
                                       
                                </div>
                            </div>
                            <div class=" col-lg-2 col-md-4 col-sm-4 col-xs-12">
                            	<div class="form-group form-group-lg form-group-icon-left form-group-filled journey">
								<label style="display:block; margin-bottom:0;">Return </label>
                                    <i class="fa fa-calendar-check-o input-icon"></i>
                                     <form:input path="toDate" id="returnDate"  class="form-control"  data-date-role="end" style="background:#fff !important;" name="tbReturn"/>
                                                         
                                </div>
                            </div>
                                   
                        
                               
                                    <div class="noOfPax iePasenger  col-lg-1 col-md-2 col-sm-3 col-xs-6 " data-flightagegroup="adult">
                                    	 
                                        <div class="col-md-12 pa0 ">
											Adult <br />
                                        	 <form:select path="adult"  class="form-control " name="ddlAdults">
                                        	 <form:option value="1">1</form:option>
                                        	  <form:option value="2">2</form:option>
                                        	   <form:option value="3">3</form:option>
                                        	    <form:option value="4">4</form:option>
                                        	     <form:option value="5">5</form:option>
                                        	      <form:option value="6">6</form:option>
                                        	       <form:option value="7">7</form:option>
                                        	        <form:option value="8">8</form:option>
                                        	        <form:option value="9">9</form:option>
                                        	 </form:select>
                                        </div>                                     
                                    </div>
                                    <div class="noOfPax iePasenger col-lg-1 col-md-2 col-sm-3 col-xs-6 " data-flightagegroup="adult">
                                    	 
                                        <div class="col-md-12 pa0 ">
                                        Children <br />
                                             <form:select path="child"  class="form-control " name="ddlInfants">
                                               <form:option value="0">0</form:option>
                                              <form:option value="1">1</form:option>
                                        	  <form:option value="2">2</form:option>
                                        	   <form:option value="3">3</form:option>
                                        	    <form:option value="4">4</form:option>
                                        	     <form:option value="5">5</form:option>
                                        	      <form:option value="6">6</form:option>
                                        	       <form:option value="7">7</form:option>
                                        	        <form:option value="8">8</form:option>
                                             </form:select>
                                                               
                                        </div>
                                       
                                    </div>
                                    <div class="noOfPax iePasenger  col-lg-1 col-md-2 col-sm-3 col-xs-6  " data-flightagegroup="adult">
                                    	 
                                        <div class="col-md-12 pa0 ">
                                        	Infants<br />
                                            <form:select path="infant"  class="form-control " name="ddlInfants">
                                               <form:option value="0">0</form:option>
                                              <form:option value="1">1</form:option>
                                        	  <form:option value="2">2</form:option>
                                        	   <form:option value="3">3</form:option>
                                        	    <form:option value="4">4</form:option>
                                        	     <form:option value="5">5</form:option>
                                        	      <form:option value="6">6</form:option>
                                        	       <form:option value="7">7</form:option>
                                        	        <form:option value="8">8</form:option>
                                             </form:select>
                                                                
                                        </div>
                                      
                                    </div>
                                    <div class="noOfPax iePasenger  col-lg-1 col-md-2 col-sm-3 col-xs-6  " data-flightagegroup="adult">
                                    	 
                                        <div class="col-md-12 pa0 ">
                                        	Infant: <span style="font-size:10px; position:absolute;">(with Seat)</span><br />
                                           <form:select path="infantWs" class="form-control " name="ddlInfants">
                                               <form:option value="0">0</form:option>
                                              <form:option value="1">1</form:option>
                                        	  <form:option value="2">2</form:option>
                                        	   <form:option value="3">3</form:option>
                                        	    <form:option value="4">4</form:option>
                                        	     <form:option value="5">5</form:option>
                                        	      <form:option value="6">6</form:option>
                                        	       <form:option value="7">7</form:option>
                                        	        <form:option value="8">8</form:option>
                                             </form:select>
                                        </div>
                                       
                                    </div>
									
									<div class="noOfPax iePasenger  col-lg-2 col-md-2 col-sm-3 col-xs-12  " data-flightagegroup="adult">
                                    	 
                                        <div class="col-md-12 pa0 ">
                                        	Coach<br />
                                           <form:select path="cabinClass" class="form-control ">
                                               <form:option value="Economy">Economy</form:option>
                                              <form:option value="First">First</form:option>
                                        	  <form:option value="Business">Business</form:option> 
                                             </form:select>
                                        </div>
                                       
                                    </div>
                                
								<div class=" col-lg-2  col-md-2 col-sm-3 col-xs-12  ">                            
                            <!-- 	<button id="btnSearchFlights" class="btn btn-primary btn-lg" type="button" onclick="submitForm();">Modify Search</button> -->
                            	 
								 
								 
								 <div class="modifybutton">
         <span style="float:right; z-index:9; margin-top:20px;">
		 <input id="btnSearchFlights"  type="button" class="btn btn-primary btn-lg srch-btn" value="Search Flights" onclick="submitForm();"/>
         </span>
         </div>
		 
                            </div>
							
                        </div>
                 
          
               </form:form> 	
                </div>
            </div>
        </div> 
     <!----Modify search ends------------>
                                      </div>
                                    </div>
									 </div>
									
                                  </div>
    	<div class="container result-bg ">
    		<div class="row">
            
       	 	<!--- Filter sidebar --->
			<div class="col-md-3 hidden-xs hidden-sm resultside12">
			<div style="background:#142d4b; padding:10px; color:#fff;">
			 <h4 style="margin-top:0;">
                            <i class="fa fa-search"></i> &nbsp;  <!-- {{filtered.length}} out of  -->{{list.length}}   Results Found</h4>
							</div>
           	 	<div class="resultside" ng-show="list.length">
				
				<h5 align="center" ng-show="list.length" style="padding-top:12px;"><i class="fa fa-filter" ng-show="list.length"></i> FILTER YOUR RESULTS </h5>

                           
                            <div class="toggle-container filters-container">
                                                              
                                <div class="panel style1 arrow-right" ng-show="list.length">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" href="#price-filter" class="collapsed"><i class="fa fa-dollar"></i> Price</a>
                                    </h4>
                                    <div id="price-filter" class="panel-collapse collapse">
                                        <div class="panel-content">
                                          <!--    <div id="price-range" ng-model-low="lower_price_bound" ng-model-high="upper_price_bound"></div> 
                                              --> 
                            <!--  <div range-slider min="priceSlider.range.min" max="priceSlider.range.max" model-min="priceSlider.minPrice" model-max="priceSlider.maxPrice" filter="currency:'$'" step="100"></div>
                            -->         <!--        
                                            <slider floor="50" step="5" ceiling="2000" ng-model-low="lower_price_bound" ng-model-high="upper_price_bound"></slider>
                                          -->   <!--    <slider floor="0" step="5" customFloor="lower_price_bound" ceiling="10000" customCeiling="upper_price_bound" ng-model-low="lower_price_bound" ng-model-high="upper_price_bound"></slider>
   <slider custom-floor="50" floor="100" custom-ceiling="upper_price_bound" ceiling="1000" step="10" precision="2"></slider>
 
                                           <slider floor="0" step="5" ceiling="2000" ng-model-low="lower_price_bound" ng-model-high="upper_price_bound"></slider>
                                           

 {{$scope.priceRangeList}}
 <div ng-repeat="item in priceRangeList">
    {{item}} , {{item.maxPrice}}
    <slider floor="10" ceiling="{{item.maxPrice}}" step="5" ng-model-low="item.minPrice" ng-model-high="item.maxPrice"></slider>
  </div>  --> 
                             <div id="price-range" ng-model-low="lower_price_bound" ng-model-high="upper_price_bound"></div>
                                            <br />
                                            <span class="min-price-label pull-left"></span>
                                            <span class="max-price-label pull-right"></span>
                                            <div class="clearer"></div>
                                        </div><!-- end content -->
                                    </div>
                                </div>
                                
                                <div class="panel style1 arrow-right" ng-show="list.length">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" href="#flight-times-filter" class="collapsed"><i class="fa fa-clock-o"></i> Flight Times (Depart)</a>
                                    </h4>
                                    <div id="flight-times-filter" class="panel-collapse collapse">
                                        <div class="panel-content">
                                         <!--    <div id="flight-times" class="slider-color-yellow"></div> -->
                                       <!--  <strong>{{lower_depart_bound}}
                                         </strong>      <strong>{{upper_depart_bound}}</strong> -->
                                      <!--  <slider floor="0000" step="5" ceiling="2359" ng-model-low="lower_depart_bound" ng-model-high="upper_depart_bound"></slider> -->
   											<div id="flight-times" class="slider-color-yellow"></div>
                                          
                                            <br />
                                            <span class="start-time-label pull-left"></span>
                                            <span class="end-time-label pull-right"></span>
                                            <div class="clearer"></div>
                                        </div><!-- end content -->
                                    </div>
                                </div>
                                
                                	<c:forEach items="${searchListWrapper}" var="searchs" varStatus="ses" >
                	                  <c:choose>
                                           <c:when test="${searchs.tripType=='2'}">
											
										
                                 <div class="panel style1 arrow-right" ng-show="list.length">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" href="#flight-times-return-filter" class="collapsed"><i class="fa fa-clock-o"></i> Flight Times (Return)</a>
                                    </h4>
                                    <div id="flight-times-return-filter" class="panel-collapse collapse">
                                        <div class="panel-content">
                                         <!--    <div id="flight-times" class="slider-color-yellow"></div> -->
                                       <!--  <strong>{{lower_depart_bound}}
                                         </strong>      <strong>{{upper_depart_bound}}</strong> -->
                                      <!--  <slider floor="0000" step="5" ceiling="2359" ng-model-low="lower_depart_bound" ng-model-high="upper_depart_bound"></slider> -->
   											<div id="flight-times-return" class="slider-color-yellow"></div>
                                          
                                            <br />
                                            <span class="start-time-return-label pull-left"></span>
                                            <span class="end-time-return-label pull-right"></span>
                                            <div class="clearer"></div>
                                        </div><!-- end content -->
                                    </div>
                                </div>
                                	
											
										</c:when></c:choose>
						</c:forEach>
                                
                                <div class="panel style1 arrow-right" ng-show="list.length">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" href="#flight-stops-filter" class="collapsed"><i class="fa fa-stop"></i> Flight Stops</a>
                                    </h4>
                                    <div id="flight-stops-filter" class="panel-collapse collapse">
                                        <div class="panel-content">
                                            <ul class="check-square filters-option">
                                            
                                                 <li data-ng-repeat="stops in stopList" > 
                                                 
 												<input type="checkbox" ng-model="selectedStop[stops.id]"/>{{stops.name}}
                   								 </li>
                                            </ul>
                                           
                                        </div>
                                    </div>
                                </div>
                        
                                <div class="panel style1 arrow-right" ng-show="list.length">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" href="#airlines-filter" class="collapsed"><i class="fa fa-plane"></i> Airlines</a>
                                    </h4>
                                  
                                    <div id="airlines-filter" class="panel-collapse collapse">
                                        <div class="panel-content" >
                                            <ul class="check-square filters-option" ng-model="selectedAirline" ng-repeat="Flighth in airline  | orderBy:'Name' | unique: 'Code'">
                                                <li ng-if="Flighth.Code != 'WN'">
                                                <!--  <input type="checkbox"  id="{{ Flighth.Code }}" onClick="FliterbyAirline();"/>{{ Flighth.Name }} -->
                                                <div style="display:inline-block;vertical-align:top;"> <input type="checkbox" ng-model="filterAirline[Flighth.Code]" /></div> <span style="display: inline-block; width: 73%;">{{ Flighth.Name }} </span></li>
                                                <li ng-if="Flighth.Code == 'WN'">
                                                <!--  <input type="checkbox"  id="{{ Flighth.Code }}" onClick="FliterbyAirline();"/>{{ Flighth.Name }} -->
                                                <input type="checkbox" ng-model="filterAirline[Flighth.Code]" />Call Center Fares Only</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
								
								
								<div class="results-box mt10">
                        	<div class="sub_header">
                               <h4>Book with Confidence</h4>
                            </div>
                            <div class="col-md-12 col-xs-12 col-sm-12 paymentcontent">
                            <div id="check-icon">
							<ul>
							<li>Best Purchase Guarantee</li>
							<li>All discounts Updated Daily</li>
							<li>24*7 Customer Service</li>
							<li>Protected &amp; Safe Booking</li>
							</ul>
							
							</div>
							
							
							</div>
                            
                        </div>
                                
                                <!--<div class="panel style1 arrow-right">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" href="#flight-type-filter" class="collapsed">Flight Type</a>
                                    </h4>
                                    <div id="flight-type-filter" class="panel-collapse collapse">
                                        <div class="panel-content">
                                            <ul class="check-square filters-option">
                                                <li><a href="#">Business</a></li>
                                                <li><a href="#">First class</a></li>
                                                <li class="active"><a href="#">Economy</a></li>
                                                <li><a href="#">Premium Economy</a></li>
                                            </ul>
                                            <a class="button btn-mini">MORE</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="panel style1 arrow-right">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" href="#inflight-experience-filter" class="collapsed">Inflight Experience</a>
                                    </h4>
                                    <div id="inflight-experience-filter" class="panel-collapse collapse">
                                        <div class="panel-content">
                                            <ul class="check-square filters-option">
                                                <li><a href="#">Inflight Dining</a></li>
                                                <li><a href="#">Music</a></li>
                                                <li class="active"><a href="#">Sky Shopping</a></li>
                                                <li><a href="#">Wi-fi</a></li>
                                                <li><a href="#">Seats &amp; Cabin</a></li>
                                            </ul>
                                            <a class="button btn-mini">MORE</a>
                                        </div>
                                    </div>
                                </div>-->
                                
                                
                            </div>
							
							
                        </div>
						
						
						<!--<div style="padding:10px 0px 0 0; margin-bottom:20px;" align="center">
                      <img src="/resources/images/add.jpg">
					</div> -->
  
					</div>
                        
            	<div class="col-md-9 col-xs-12  pt0 results result-padding" >
                	
                				
                        
            	        <div class="content pl0">
                            <fieldset class=" mb10">
							
							<%String classes="Economy"; %>
                            <c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
                                    <div style="border:1px solid #ddd; margin-bottom:10px; "> 
									  
									  <div class="modifybutton">
         <span style="float:right; z-index:9; margin:10px;"><a  href="#collapseTwo" data-parent="#accordion" data-toggle="collapse" class="accordion-toggle">
         <button id="btnSearchFlights" class="btn btn-primary btn-lg" type="submit">Modify Search</button> </a>
         </span>
         </div>
         <c:set var="myfromCity" value="${search.originAirport.cityCode}"/>
          <c:set var="mytoCity" value="${search.destinationAirport.cityCode}"/>
          
      									   <input type="hidden" id="sfroCity" value="${search.originAirport.cityCode}"/>
      									    <input type="hidden" id="dtoCity" value="${search.destinationAirport.cityName}"/>
									      <input type="hidden" id="stoCity" value="${search.destinationAirport.cityCode}"/>
									      
									       
									          
                                        <p class="modify-left">
                                            <c:out value='${search.originAirport.cityCode}' /> - <c:out value='${search.originAirport.cityName}' />, <c:out value='${search.originAirport.country}' />
                                            <b>To</b>
                                           <c:out value='${search.destinationAirport.cityCode}' /> - <c:out value='${search.destinationAirport.cityName}' />, <c:out value='${search.destinationAirport.country}' />
                                        </p>
                                         <c:choose>
                                           <c:when test="${search.tripType=='2'}">
                                            <c:if test="${not empty search.returnOriginAirport.cityCode}">
                                           <b class="modify-left" style="margin-left: 10px;">Return:</b>
                                        <p class="modify-left">
                                            <c:out value='${search.returnOriginAirport.cityCode}' /> - <c:out value='${search.returnOriginAirport.cityName}' />, <c:out value='${search.returnOriginAirport.country}' />
                                            <b>To</b>
                                           <c:out value='${search.returnDestinationAirport.cityCode}' /> - <c:out value='${search.returnDestinationAirport.cityName}' />, <c:out value='${search.returnDestinationAirport.country}' />
                                        </p></c:if>
                                        </c:when></c:choose>
                                        <p class="mb20">
                                            <b>Departure:</b>
                                            <c:set var="depart" value="${fn:split(search.travelDate,'T')}"/>
										<fmt:parseDate value="${depart[0]}" var="dateObject" pattern="yyyy-MM-dd" />
										<fmt:formatDate value="${dateObject }" pattern="EEE. MMM-dd-yyyy" />
										 <input type="hidden" id="checkIn" value="<fmt:formatDate value="${dateObject }" pattern="EEE, dd MMM" />"/>
									        
									         
                                           <!-- Fri. Aug-21-2015-->
                                           <c:choose>
                                           <c:when test="${search.tripType=='2'}">
											<b>Return:</b>
                                             <c:set var="returns" value="${fn:split(search.returnDate,'T')}"/>
                                             
										<fmt:parseDate value="${returns[0]}" var="rdateObject" pattern="yyyy-MM-dd" />
										<fmt:formatDate value="${rdateObject }" pattern="EEE. MMM-dd-yyyy" /> 
										 <input type="hidden" id="checkOut" value="<fmt:formatDate value="${rdateObject }" pattern="EEE, dd MMM" />"/>
										<%lookretDate=(String)pageContext.getAttribute("rdateObject").toString(); %>
										</c:when></c:choose><br />
                                            <b>Adult:</b>
                                            <c:out value='${search.adults}' />,
                                            <b>Child:</b>
                                            <c:out value='${search.children}' />,
                                            <b>Infant:</b>
                                            <c:out value='${search.infants}' />,
                                            <b>Infant with Seat:</b>
                                            <c:out value='${search.infantWs}' />,
                                            <c:choose>
											<c:when test="${search.tripType=='1'}">
											<b> OneWay</b>
											</c:when>
											<c:otherwise>
											<b>RoundTrip</b>
											</c:otherwise>
											</c:choose>
                                            ,
                                            <b>Class:</b>
                                            <c:set var="classes" value="${search.cabinType}" scope="page"/>
                                             <c:out value='${search.cabinType}' /> 
                                        
                                        </p>
										   <%lookfromCity=(String)pageContext.getAttribute("myfromCity");
                                             looktoCity=(String)pageContext.getAttribute("mytoCity");
 
                                             lookdepDate=(String)pageContext.getAttribute("dateObject").toString();
                                           %>
										
										
										</div>
										<div lass="col-lg-12 ">
										
										<div ng-show="noResultff.length"></div>
										
									
										
										
										
										
			
										
										
										
										
										
										
										
									<div class="col-lg-9 get-off" ng-show="list.length">Book a cheap flight, and get <b style="color:#ff6600">$10 Off</b> Instantly </div>
										
										<div class="col-lg-2 pa0 matrex-btn" ng-show="list.length"><a href="" ng-click="showDetails = ! showDetails" onclick="matrixOpen();"><b><i class="fa fa-th  box-icon "></i> Matrix View</b></a></div>
										
										</div>
									 
                                    </c:forEach>
                                </fieldset>
                          
                            <loading></loading>
                            
                          
                              
                        </div>
						<!-- Matrix Section Start-->
<div id="angularvalue" style="display:none"></div>
<div id="showDetails" style="display:none;">
<div class="">
<div class="martex" >
<img src="/resources/images/matrix-te.png" style="position: absolute;    right: 65px;    margin-top: -28px;">
<div class="col-lg-12 col-sm-12 clear-filter ">

<a ng-click="filters.Airline = ''">clear filter</a>
 <a ng-click="filtersPrice.Price = ''">clear Price filter</a>
 
 </div>
<div class="clearfix"></div>
<div class="col-lg-2 col-sm-2 martex-view-top">

<ul>
<li><img src="/resources/images/filterby.jpg"></li>

<li>No-Stop</li>

<li> 1 Stop</li>

<li> 2+Stops</li>

</ul>

</div>
   											

<div class="col-lg-2 col-sm-2 martex-view-top" ng-repeat="item in matrix | startFrom:currentPage*pageSize | limitTo:pageSize">

<ul >
<li> <a ng-click="filters.Airline = item.airlineName.Code"><img src="/resources/images/airline/{{item.airlineName.Code|lowercase}}.gif"></a></li>
<li> 
<span ng-switch on="item.nonStopPrice">
    <span ng-switch-when="0">
      -
    </span>
    <span ng-switch-default>
    <p>Flight</p>
       <a ng-click="filtersPrice.Price = item.nonStopPrice"><img src="/resources/images/USD.gif">
                               {{item.nonStopPrice}}*</a>
      <p>Per Pax</p>
	</span>
</span>

</li>

<li>
<span ng-switch on="item.oneStopPrice">
    <span ng-switch-when="0">
      -
    </span>
    <span ng-switch-default>
     <p>Flight</p>
       <a ng-click="filtersPrice.Price = item.oneStopPrice"><img src="/resources/images/USD.gif">
                               {{item.oneStopPrice}}*</a>
     <p>Per Pax</p>
	</span>
</span>

</li>

<li>
<span ng-switch on="item.twoStopPrice">
    <span ng-switch-when="0">
      -
    </span>
    <span ng-switch-default>
     <p>Flight</p>
       <a ng-click="filtersPrice.Price = item.twoStopPrice"><img src="/resources/images/USD.gif">
                               {{item.twoStopPrice}}*</a>
       <p>Per Pax</p>
	</span>
</span>

</li>


</ul>

</div>

<div class="col-lg-12 col-sm-12 martex-button">
<input name="" type="button" ng-disabled="currentPage == 0" ng-click="currentPage=currentPage-1" value="Previous">
        
    
	<span style=" float:left; width:30px; text-align:center; color:#fff; color:#000; line-height:28px;">{{currentPage+1}}/{{numberOfPages()}}</span>
	
	
    
    <input name="" type="button" ng-disabled="currentPage >= matrix.length/pageSize - 1" ng-click="currentPage=currentPage+1" value="Next">
        
    

</div>



</div>



</div>





</div>


 
<!-- Matrix Section Stop -->

 

<div style="clear:both; margin-top:10px; "></div>
 <div style="color:#333; font-size:13px; margin-bottom:10px;" ng-show="list.length">* All prices displayed are inclusive of base fare, taxes and all fees. Additional <a target="_blank" style="color:#1a6094; text-decoration:underline;" href="/baggage-fees">baggage fees</a> may apply as per the airline policies.</div>
						     <div class="p10 short-bg" ng-show="list.length" >
                                     <div class="navbar-header">
          <button type="button" class="navbar-toggle sort-toggle collapsed" data-toggle="collapse" data-target="#navbar1" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar sort-bar"></span>
            <span class="icon-bar sort-bar"></span>
            <span class="icon-bar sort-bar"></span>
          </button>
          <div class="navbar-brand no-padding sort-by">Sort By:</div>
        </div>
        
									<div id="navbar1" class="navbar-collapse collapse">
								    <div class="col-sm-2 Filed sort-btn" ng-click="sort('Flights.Segments[0].Airline.Code')">Airline
                                    <span class="glyphicon sort-icon" ng-show="sortKey=='Flights.Segments[0].Airline.Code'" 
                                    ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span></div>                
                                    <div class="col-sm-2 Filed sort-btn" ng-click="sort('Flights.Segments[0].DepartureTime')">Departure
                                    	<span class="glyphicon sort-icon" ng-show="sortKey=='Flights.Segments[0].DepartureTime'" 
                                    	ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
									</div>                 
                                    <div class="col-sm-2 Filed sort-btn" ng-click="sort('Flights.Segments[0].ArrivalTime')">Arrive
                                    <span class="glyphicon sort-icon" ng-show="sortKey=='Flights.Segments[0].ArrivalTime'" 
                                    	ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span></div>                  
                                    <div class="col-sm-2 Filed sort-btn" ng-click="sort('Flights.EFT')">Duration
                                    <span class="glyphicon sort-icon" ng-show="sortKey=='Flights.EFT'" 
                                    	ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span></div>
                                   	<div class="col-sm-2 Filed sort-btn"  ng-click="sort('Flights.Segments[0].techStops')">Stop(s)
                                    <span class="glyphicon sort-icon" ng-show="sortKey=='Flights.Segments[0].techStops'" 
                                    	ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span></div>
                                    <div class="col-sm-2 Filed sort-btn"  ng-click="sort('Flights.PersonFare')">Price
                                    <span class="glyphicon sort-icon" ng-show="sortKey=='Flights.PersonFare'" 
                                    	ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span></div>
                                   
									
									 </div>
									 <div class="clearfix"></div>
                                </div>
								<div style="clear:both;">
								<div style="height:2px; "></div>
								
								<div class="src-sorting-tab" ng-show="list.length">
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist" >
    <li role="presentation" class="active" ng-click="mainList()" id="slR" ><a href="#src-result" class="bg-clor" id="aslR" aria-controls="src-result" role="tab" data-toggle="tab">Search Result</a></li>
    <li role="presentation" ng-show="nearBylist.length" id="nbr" ng-click="nearBySearch()" ><a href="#near-airport" id="anbr" aria-controls="near-airport" role="tab" data-toggle="tab">Nearby Airports</a></li>
    <li role="presentation" ng-show="flexlist.length" id="alr" ng-click="changeList()"><a href="#2days" id="aalr"  aria-controls="2days" role="tab" data-toggle="tab">(+/-) Days</a></li> 
  </ul>


</div>
	<div style="clear:both;"> </div>

							<div class="srchdetail">	
								
                        <div class="content">
                          
                       <featureddeal class=" modal fade respo flight_detail" style=" background-color:#fff;"  id="myModal"   role="dialog">
                           
                                                 
                                    <section class="tabing">
                                    <div class="modal-header">
        
         
		<h4 style="color:#03566c;" class="modal-title" ng-repeat="val in flightsDetails"> Flight Details  <button type="button" class="close pop_up" data-dismiss="modal">&times;</button> </h4>
      </div>
	  
                                        
                                      
                                          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12 mb20" >
                                          <c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
                                                <div class="col-md-9 col-lg-9 col-xs-12 col-sm-9">
                                                    <div class="col-md-5 col-xs-12 col-lg-5 col-sm-5 flight-detail">
                                                        <h4 style="color:#000;"> <c:out value='${search.originAirport.cityName}' />(<c:out value='${search.originAirport.airportCode}' />)</h4>
                                                    </div>
                                                    <div class="col-md-2 col-xs-4 col-lg-2 col-sm-2">
                                                        <div class="mt10"><i class="fa fa-arrows-h"></i></div>
                                                    </div>
                                                    <div class="col-md-5 col-xs-12 col-lg-5 col-sm-5 flight-detail ">
                                                        <h4 style="color:#000;"> <c:out value='${search.destinationAirport.cityName}' />(<c:out value='${search.destinationAirport.airportCode}' />)</h4>
                                                    </div>
                                                </div>
                                                </c:forEach>
                                                <div class="col-md-3 col-lg-3 col-xs-12 col-sm-3">
                                                	<div class="col-lg-12 col-md-12 col-xs-12" ng-repeat="val in flightsDetails">
													<div class="modifybutton">
                                                	   <button id="btnSearchFlights" ng-click="movePaymentPage(val.Flights.FlightId)" class="btn btn-primary btn-lg pull-right" type="submit">View</button>
                                                     </div>
													 
													 </div>
                                                </div>
                                            </div>
                                             <!-- <div class="col-lg-12">
												<div class="itirt-detail"><b>Itinerary Details</b></div>
											 </div> -->
                                        
                                        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12 active topdelscrol" style="border:1px solid #ccc; margin:10px; padding:0;">
                                            <!----------------Itinerary Section----------------------------->
                                                <div id="domestic" ng-repeat="val in flightsDetails">
                                                    <div class=" col-md-12 col-lg-12 col-sm-12 col-xs-12 pa0">
                                        
                                         <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12 depart pa0"  ng-repeat="Segments in val.Flights.Segments | filter:{ IsReturnFlight: false} | limitTo: -1"">
                                                            <p style="display: initial;"> <span  style="float:right; margin-right:10px; font-size:16px; color:#333;"><c:out value='${classes}' /></span><i class="fa fa-plane">&nbsp;&nbsp;&nbsp;</i>Depart</p>  
                                                             
                                                        </div>
                           <!--                              
                                         <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12 depart">
                                                            <p style="display: initial;"> <i class="fa fa-plane">&nbsp;&nbsp;&nbsp;</i>Depart</p>
                                                        </div> -->
                                            
                                            
                                            
                                            <div ng-repeat="Segments in val.Flights.Segments | filter:{ IsReturnFlight: false}">
                                           <div class="row mob_bdr">
                                          	
                                            <div class="col-lg-3 col-sm-3 col-xs-5 align-center" >
                                                <span class="flight-img simptip-position-top simptip-movable"  data-tooltip="{{Segments.Airline.Code}}" data-cta-hover-value="FUEL_FF" data-cta-hover="Tip_EXT"><img src="/resources/images/airline/{{Segments.Airline.Code|lowercase}}.gif" /></span> 
                                                <span class="Flight-name"> {{Segments.Airline.Name}} </span>
                                          	</div>
                                          	<div class="col-lg-1 col-sm-3 col-xs-6 pa0 align-center">
                                          		
                                          		<div style="margin-top:12px;"> <span style="color:#666; ">Flight No.</span><br /><span  class="Dep-time" style="padding-top:0;">{{Segments.FlightCode}}</span>  
													</div>
                                            	 
                                            </div>
                                          	<div class="col-lg-3 col-sm-3 col-xs-6 align-center">
                                          		<div class="Dep-time"> {{Segments.DepartureTime | date: 'dd MMM, hh:mm a'}}</div>
                                            	<div class="Dep-place"><span class="Dep-place simptip-position-top simptip-movable"  data-tooltip="{{Segments.OriginAirport.CityName}}" data-cta-hover-value="FUEL_FF" data-cta-hover="Tip_EXT" title="">{{Segments.OriginAirport.CityName}}, {{Segments.OriginAirport.AirportName}} ({{Segments.OriginAirport.AirportCode}})</span></div> 
                                            </div>
                                            
                                            <div class="col-lg-3 col-sm-3 col-xs-5 align-center">
                                               <span class="Dep-time">
                                                 {{Segments.ArrivalTime | date: 'dd MMM, hh:mm a'}}
                                              
                                                </span>
                                               <div class="Dep-place" ><span class="Dep-place simptip-position-top simptip-movable"  data-tooltip="{{Segments.DestinationAirport.CityName}}" data-cta-hover-value="FUEL_FF" data-cta-hover="Tip_EXT" title="">{{Segments.DestinationAirport.CityName}}, {{Segments.DestinationAirport.AirportName}} ({{Segments.DestinationAirport.AirportCode}})</span></div>
                                            </div>
                                          	<div class="col-lg-2 col-sm-3 col-xs-12 align-center">
                                                <span class="Dep-time" ng-if="val.Flights.Gds == '1'">{{Segments.EFT | time:'mm':'hhh mmm':false}}</span> 
                                                <span class="non-stop_info" ng-if="!Segments.techStops">Non Stop</span> 
                                                <span class="non-stop_info" ng-if="Segments.techStops == '0'">Non Stop</span> 
                                                <span class="non-stop_info" ng-if="Segments.techStops == '1'">One Stop</span> 
                                                <span class="non-stop_info" ng-if="Segments.techStops == '2'">Two Stop</span> 
                                                
                                         	</div>
                                          </div>
                                             <div style="font-size:11px; color:#999; text-align:right; padding-right:20px" ng-if="Segments.Airline.Code != Segments.OperatingCarrier.Code"><i class="fa fa-info-circle"></i> Operated By {{Segments.OperatingCarrier.Name}} </div>
                                          
                                           </div>
                                            <!-- <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12 depart pa0"  ng-repeat="Segments in val.Flights.Segments | filter:{ IsReturnFlight: false} | limitTo: -1"">
                                                           <span class="Dep-time">Total Flight Time: {{val.Flights.EFT | time:'mm':'hhh mmm':false}}</span>
                                                        </div> -->
                                         <div class="col-md-12 col-sm-12 col-lg-12 pa0">
                                	<div class="transit" style="background:#f1f1f1;">
                                     
                                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-10"> 
                                            	<small>Flight Duration Time: <b>{{val.Flights.Tft}}</b>
                                            	 </small>
                                            </div>
                                            <div class="col-md-4 col-lg-4 col-sm-4 hidden-xs pa0 text-center">
                                            	<small style="text-align:center;">Layover Time: <b>{{val.Flights.Lot}}</b></small>
                                            </div>
                                            <div class="col-md-4 col-lg-4 col-sm-4 hidden-xs col-xs-12 pad-l-r text-right">
                                            	<small style="text-align:right;">
                                            	Total Trip Time: <b>{{val.Flights.Tfd}}</b>
                                            	</small>
                                           </div>
                                     
                                    </div>
                                             <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12 pa0 depart"  ng-repeat="Segments in val.Flights.Segments | filter:{ IsReturnFlight: true} | limitTo: -1"">
                                                            <p style="display: initial;"><span style="float:right; margin-right:10px; font-size:16px; color:#333;"><c:out value='${classes}' /></span> <i class="fa fa-plane">&nbsp;&nbsp;&nbsp;</i>Return</p> 
                                                        </div>
                                            <div ng-repeat="Segments in val.Flights.Segments | filter:{ IsReturnFlight: true}"">            
                                          <div class="row mob_bdr">
                                                  
                                            <div class="col-lg-3 col-sm-3 col-xs-5 align-center" >
                                                <span class="flight-img simptip-position-top simptip-movable"  data-tooltip="{{Segments.Airline.Code}}" data-cta-hover-value="FUEL_FF" data-cta-hover="Tip_EXT"><img src="/resources/images/airline/{{Segments.Airline.Code|lowercase}}.gif" /></span> 
                                                <span class="Flight-name"> {{Segments.Airline.Name}} </span>
                                          	</div>
											<div class="col-lg-1 col-sm-3 col-xs-6 pa0 align-center">
                                          		
                                          		<div style="margin-top:12px;"> <span style="color:#666; ">Flight No.</span><br /><span  class="Dep-time" style="padding-top:0;">{{Segments.FlightCode}}</span>  
											</div>
                                            	 
                                            </div> 
                                          	<div class="col-lg-3 col-sm-3 col-xs-6 align-center">
                                          		<div class="Dep-time"> {{Segments.DepartureTime | date: 'dd MMM, hh:mm a'}}</div>
                                            	<div class="Dep-place"><span class="Dep-place simptip-position-top simptip-movable"  data-tooltip="{{Segments.OriginAirport.CityName}}" data-cta-hover-value="FUEL_FF" data-cta-hover="Tip_EXT" title="">{{Segments.OriginAirport.CityName}}, {{Segments.OriginAirport.AirportName}} ({{Segments.OriginAirport.AirportCode}})</span></div> 
                                            </div>
                                            
                                            <div class="col-lg-3 col-sm-3 col-xs-5 align-center">
                                               <span class="Dep-time">
                                                 {{Segments.ArrivalTime | date: 'dd MMM, hh:mm a'}}
                                              
                                                </span>
                                               <div class="Dep-place" ><span class="Dep-place simptip-position-top simptip-movable"  data-tooltip="{{Segments.DestinationAirport.CityName}}" data-cta-hover-value="FUEL_FF" data-cta-hover="Tip_EXT" title="">{{Segments.DestinationAirport.CityName}}, {{Segments.DestinationAirport.AirportName}} ({{Segments.DestinationAirport.AirportCode}})</span></div>
                                            </div>
                                          	<div class="col-lg-2 col-sm-3 col-xs-12 align-center">
                                                 <span class="Dep-time" ng-if="val.Flights.Gds == '1'">{{Segments.EFT | time:'mm':'hhh mmm':false}}</span>  
                                                  <span class="non-stop_info" ng-if="!Segments.techStops">Non Stop</span> 
                                                <span class="non-stop_info" ng-if="Segments.techStops == '0'">Non Stop</span> 
                                                <span class="non-stop_info" ng-if="Segments.techStops == '1'">One Stop</span> 
                                                <span class="non-stop_info" ng-if="Segments.techStops == '2'">Two Stop</span> 
                                         	</div>
                                                </div>	
											
                                         <div style="font-size:11px; color:#999; text-align:right; padding-right:20px" ng-if="Segments.Airline.Code != Segments.OperatingCarrier.Code"><i class="fa fa-info-circle"></i> Operated By {{Segments.OperatingCarrier.Name}} </div>
                                        <!--   <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12 pa0 depart" >
                                            <span class="Dep-time">Total Flight Time: {{val.Flights.ReturnEFT/2 | time:'mm':'hhh mmm':false}}</span>
                                           </div> --></div>
                                        <div class="col-md-12 col-sm-12 col-lg-12 pa0" ng-repeat="Segments in val.Flights.Segments | filter:{ IsReturnFlight: true} | limitTo: -1"">
                                	<div class="transit" style="background:#f1f1f1;">
                                     
                                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-10"> 
                                            	<small>Flight Duration Time: <b>{{val.Flights.Trft}}</b>
                                            	 </small>
                                            </div>
                                            <div class="col-md-4 col-lg-4 col-sm-4 hidden-xs pa0 text-center">
                                            	<small style="text-align:center;">Layover Time: <b>{{val.Flights.Lrot}}</b></small>
                                            </div>
                                            <div class="col-md-4 col-lg-4 col-sm-4 hidden-xs col-xs-12 pad-l-r text-right">
                                            	<small style="text-align:right;">
                                            	Total Trip Time: <b>{{val.Flights.Trfd}}</b>
                                            	</small>
                                           </div>
                                     
                                    </div>
                                        </div>
                                        </div></div>
                                        
                                        
                                         
                                             <!---------------------Fare Detail Ends----------------------->  
                                        </section>
                                        
                                  
                                       
                     </featureddeal>
                      
			
                         <div id="resultApp" style="display:none;">      
                                
                        <div class="no_result_text" ng-show="(list | filter:filterByStop).length == 0">No Result found for selected criteria. Please apply or change more filter. </div>
                                <article  id="srchbox" class="mb0 pa0" dir-paginate="Flights in list | filter:filtersPrice | filter:filters  | filter:filterByAirline |filter:filterByStop |filter:priceRange | filter:departRange | filter:returnRange |orderBy:sortKey:reverse |itemsPerPage:10">
                                    <div class="content" id="{{Flights.Flights.FlightId}}">
                                        <div class="col-sm-9 xs-no-pad">
										
                                       <div class="xs-no-pad" style="margin-top:5px;">

                                        <!-- <div class="row"  ng-repeat="Segments in Flights.Flights.Segments | filter:{ IsReturnFlight: false} | limitTo: -1"">-->
                                          	<div class="show_row"   ng-repeat="Segments in Flights.Flights.Segments | filter:{ IsReturnFlight: false}">
                                          	<div class="col-sm-1 col-xs-2 align-center no-dis" ><img src="/resources/images/plane.png" alt="Depart" title="Depart" style="margin-top:20px;"></div>
                                            <div class="col-sm-3 col-xs-2 xs-no-pad align-center" >
                                                <span class="flight-img simptip-position-top simptip-movable"  data-tooltip="{{Segments.Airline.Code}}" data-cta-hover-value="FUEL_FF" data-cta-hover="Tip_EXT"><img src="/resources/images/airline/{{Segments.Airline.Code|lowercase}}.gif" /></span> 
                                               
                                                 <span class="Flight-name"  ng-if="Segments.Airline.Code == 'WN'"> Call Center Fares Only </span>
                                                 <span class="Flight-name"  ng-if="Segments.Airline.Code != 'WN'"> {{Segments.Airline.Name}} </span>
                                          	</div>
                                          	<div class="col-sm-3 col-xs-4 xs-no-pad align-center">
                                          		<div class="Dep-time"> {{Segments.DepartureTime | date: 'dd MMM, hh:mm a'}}</div>
                                            	<div class="Dep-place"><span class="Dep-place simptip-position-top simptip-movable"  data-tooltip="{{Segments.OriginAirport.CityName}}" data-cta-hover-value="FUEL_FF" data-cta-hover="Tip_EXT" title="">{{Segments.OriginAirport.CityName}}, {{Segments.OriginAirport.AirportName}} ({{Segments.OriginAirport.AirportCode}})</span></div> 
                                            </div>
                                            
                                            <div class="col-sm-3 col-xs-4 xs-no-pad align-center">
                                               <span class="Dep-time">
                                                 {{Segments.ArrivalTime | date: 'dd MMM, hh:mm a'}}
                                              
                                                </span>
                                               <div class="Dep-place" ><span class="Dep-place simptip-position-top simptip-movable"  data-tooltip="{{Segments.DestinationAirport.CityName}}" data-cta-hover-value="FUEL_FF" data-cta-hover="Tip_EXT" title="">{{Segments.DestinationAirport.CityName}}, {{Segments.DestinationAirport.AirportName}} ({{Segments.DestinationAirport.AirportCode}})</span></div>
                                            </div>
                                          	<div class="col-sm-2 col-xs-2 xs-no-pad align-center">
                                          	 
                                               <!--  <span class="Dep-time">{{Flights.Flights.EFT | time:'mm':'hhh mmm':false}}</span> -->
                                                 <span class="Dep-time"><c:out value='${classes}' /></span>
                                                <span class="non-stop" ng-if="Segments.techStops == '1'">Non Stop</span> 
                                                <span class="non-stop" ng-if="Segments.techStops == '2'">One Stop</span> 
                                                <span class="non-stop" ng-if="Segments.techStops == '3'">Two Stop</span> 
                                         	</div>
                                         	  <div align="center">
                                           <span class=" "  ng-if="Segments.FlexSearch == 'Yes'" style="margin-top:3px; text-align:center;"> <span style="padding: 3px 10px; background: rgb(246, 246, 236) none repeat scroll 0% 0%; color: rgb(255, 102, 0); border: 1px dashed rgb(255, 102, 0); font-size: 13px;"><i aria-hidden="true" class="fa fa-info-circle"></i> This is a flexible date, please verify the date.</span> </span>
                                         
                                          <span class=" "  ng-if="Segments.NearBy == 'Yes'" style="margin-top:3px; text-align:center;"> <span style="padding: 3px 10px; background: rgb(246, 246, 236) none repeat scroll 0% 0%; color: rgb(255, 102, 0); border: 1px dashed rgb(255, 102, 0); font-size: 13px; display:inline-block; margin-bottom:5px;"><i aria-hidden="true" class="fa fa-info-circle"></i> This is a Nearby Airport, please verify the Airport.</span> </span>
                                          </div>
                                          </div>
                                                 <div class="col-md-12 col-sm-12 col-lg-12 pa0">
                                	<div class="transit" style="background:#f1f1f1;">
                                     
                                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-10"> 
                                            	<small>Flight Duration Time: <b>{{Flights.Flights.Tft}}</b>
                                            	 </small>
                                            </div>
                                            <div class="col-md-4 col-lg-4 col-sm-4 hidden-xs pa0 text-center">
                                            	<small style="text-align:center;">Layover Time: <b>{{Flights.Flights.Lot}}</b></small>
                                            </div>
                                            <div class="col-md-4 col-lg-4 col-sm-4 hidden-xs col-xs-12 pad-l-r text-right">
                                            	<small style="text-align:right;">
                                            	Total Trip Time: <b>{{Flights.Flights.Tfd}}</b>
                                            	</small>
                                           </div>
                                     
                                    </div>
                                </div>
                                          <div style="clear:both; margin-bottom:7px;"></div>
                                        
                                          <div style="clear:both;"></div>
                                          <div style="border-bottom:1px dotted #ccc;"  ng-repeat="Segments in Flights.Flights.Segments | filter:{ IsReturnFlight: true} | limitTo: -1"">
                                           </div>
                                          <div class=""  ng-repeat="Segments in Flights.Flights.Segments | filter:{ IsReturnFlight: true}">
                                                    <div class="col-sm-1 col-xs-2 align-center no-dis"><img src="/resources/images/plane-left.png" alt="Return" title="Return" style="margin-top:20px;"></div>
                                            <div class="col-sm-3 col-xs-2 xs-no-pad align-center" >
                                                <span class="flight-img simptip-position-top simptip-movable"  data-tooltip="{{Segments.Airline.Code}}" data-cta-hover-value="FUEL_FF" data-cta-hover="Tip_EXT"><img src="/resources/images/airline/{{Segments.Airline.Code|lowercase}}.gif" /></span> 
                                                <span class="Flight-name"  ng-if="Segments.Airline.Code == 'WN'"> Call Center Fares Only </span>
                                                 <span class="Flight-name"  ng-if="Segments.Airline.Code != 'WN'"> {{Segments.Airline.Name}} </span>
                                          	</div>
                                          	<div class="col-sm-3 col-xs-4 xs-no-pad align-center">
                                          		<div class="Dep-time"> {{Segments.DepartureTime | date: 'dd MMM, hh:mm a'}}</div>
                                            	<div class="Dep-place"><span class="Dep-place simptip-position-top simptip-movable"  data-tooltip="{{Segments.OriginAirport.CityName}}" data-cta-hover-value="FUEL_FF" data-cta-hover="Tip_EXT" title="">{{Segments.OriginAirport.CityName}}, {{Segments.OriginAirport.AirportName}} ({{Segments.OriginAirport.AirportCode}})</span></div> 
                                            </div>
                                            
                                            <div class="col-sm-3 col-xs-4 xs-no-pad align-center">
                                               <span class="Dep-time">
                                                 {{Segments.ArrivalTime | date: 'dd MMM, hh:mm a'}}
                                                 
                                                </span>
                                               <div class="Dep-place" ><span class="Dep-place simptip-position-top simptip-movable"  data-tooltip="{{Segments.DestinationAirport.CityName}}" data-cta-hover-value="FUEL_FF" data-cta-hover="Tip_EXT" title="">{{Segments.DestinationAirport.CityName}}, {{Segments.DestinationAirport.AirportName}} ({{Segments.DestinationAirport.AirportCode}})</span></div>
                                            </div>
                                          	<div class="col-sm-2 col-xs-2 xs-no-pad align-center">
                                                <!-- <span class="Dep-time">{{Flights.Flights.ReturnEFT | time:'mm':'hhh mmm':false}}</span> -->
                                                 <span class="Dep-time"><c:out value='${classes}' /></span>
                                                <span class="non-stop" ng-if="Segments.techStops == '1'">Non Stop</span> 
                                                <span class="non-stop" ng-if="Segments.techStops == '2'">One Stop</span> 
                                                <span class="non-stop" ng-if="Segments.techStops == '3'">Two Stop</span> 
                                         	</div>
                                         		  <div align="center">
                                           <span class=" "  ng-if="Segments.FlexSearch == 'Yes'" style="margin-top:3px; text-align:center;"> <span style="padding: 3px 10px; background: rgb(246, 246, 236) none repeat scroll 0% 0%; color: rgb(255, 102, 0); border: 1px dashed rgb(255, 102, 0); font-size: 13px;"><i aria-hidden="true" class="fa fa-info-circle"></i> This is a flexible date, please verify the date.</span> </span>
                                         
                                          <span class=" "  ng-if="Segments.NearBy == 'Yes'" style="margin-top:3px; text-align:center;"> <span style="padding: 3px 10px; background: rgb(246, 246, 236) none repeat scroll 0% 0%; color: rgb(255, 102, 0); border: 1px dashed rgb(255, 102, 0); font-size: 13px; display:inline-block; margin-bottom:5px;"><i aria-hidden="true" class="fa fa-info-circle"></i> This is a Nearby Airport, please verify the Airport.</span> </span>
                                          </div>
                                                </div>	
                                        </div> 
                                        
                                  <div class="col-md-12 col-sm-12 col-lg-12 pa0" ng-repeat="Segments in Flights.Flights.Segments | filter:{ IsReturnFlight: true} | limitTo: -1"">
                                	<div class="transit" style="background:#f1f1f1;">
                                     
                                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-10"> 
                                            	<small>Flight Duration Time: <b>{{Flights.Flights.Trft}}</b>
                                            	 </small>
                                            </div>
                                            <div class="col-md-4 col-lg-4 col-sm-4 hidden-xs pa0 text-center">
                                            	<small style="text-align:center;">Layover Time: <b>{{Flights.Flights.Lrot}}</b></small>
                                            </div>
                                            <div class="col-md-4 col-lg-4 col-sm-4 hidden-xs col-xs-12 pad-l-r text-right">
                                            	<small style="text-align:right;">
                                            	Total Trip Time: <b>{{Flights.Flights.Trfd}}</b>
                                            	</small>
                                           </div>
                                     
                                    </div>
                                </div>
										</div>
                                          <!--pricing-->
                                        <div class="col-sm-3 col-xs-12 xs-no-pad align-center mt20 modifybutton">
										
                                            <h2><small>$</small>{{Flights.Flights.PersonFare | number:2}} </h2>
                                            <!-- <small>5 Seats left</small> -->
                                            <p>Fares quoted in USD</p>
                                            <div class="col-lg-12" ng-if="Flights.Airline != 'WN'">
                                            <button id="btnSearchFlights" ng-click="movePaymentPage(Flights.Flights.FlightId)" class="btn btn-primary btn-lg" type="submit">View</button>
                                            </div>
                                              <div class="col-lg-12 hidden-xs " ng-if="Flights.Airline == 'WN'">
                                             Call Center Fares Only<br/>
											 To Book this fare call Now 1-888-737-8675
                                              </div>
											  
											  <div class="col-xs-12 hidden-lg hidden-sm hidden-md" ng-if="Flights.Airline == 'WN'">
											  
											  <a class="btn btn-primary btn-lg" href="tel:888-509-5589 "> Click to Call for booking this fare</a>
                                           
                                              </div>
											  
                                        </div>
                             
                                        <div class="rsltfotr mt10">
                                        	<div class="row">
                                            	<div class="col-md-8 col-xs-6">
                                                	<ul class="resltfotr-left" ng-if="Flights.Airline != 'WN'">
                                                    	<li class="flightdetail">
                                                    	<!-- <a  class="flightdetailschek" data-ng-click="getStateDataFromServer(Flights.Flights.FlightId)" id="{{'featured-details-'+$index}}" ng-model="dataRes">
                                                         -->   
                                                        <!--  <a href="#" ng-click="showDetails = ! showDetails"> -->                       
                                                        	 <a  class="flightdetailschek" data-toggle="modal" data-target="#myModal" data-ng-click="getStateDataFromServer(Flights.Flights.FlightId)" id="{{'featured-details-'+$index}}">
                                                          	<i class="fa fa-plane input-icon"></i>
                                                                Flight Details
                                                            </a>
                                                        </li>
                                                       <!--  <li class="flightdetail">
                                                        	<a class="flightdetailschek">
                                                            	<i class="fa fa-usd input-icon"></i>
                                                                Fare Details
                                                            </a>
                                                        </li>-->
														<script type="text/javascript">
															function MM_openBrWindow(theURL,winName,features) { //v2.0
															  window.open(theURL,winName,features);
															}
															</script>

                                                        <li class="flightdetail bagges" style="border-right:0;">
                                                        	<a href="" target="_blank" onclick="MM_openBrWindow('/baggage-fees','sfds','scrollbars=yes,width=1000,height=800')" class="flightdetailschek">
                                                            	<i class="fa fa-suitcase input-icon"></i>
                                                                Baggage Fees
                                                            </a>
                                                        </li> 
                                                        
                                                        <li style="color:#f1f1f1;" ng-if="Flights.Flights.Gds == '1'">*</li>
                                                        <li style="color:#f1f1f1;" ng-if="Flights.Flights.Gds == '0'">a</li>
                                                        <li style="color:#f1f1f1;" ng-if="Flights.Flights.Gds == '2'">s</li>
                                                        <li style="color:#f1f1f1;" ng-if="Flights.Flights.Gds == '3'">t</li>
                                                        
                                                       
                                                    </ul>
                                                    
         <div id="{{'info-'+Flights.Flights.FlightId}}"style="color: green;"></div>
                                                </div>
                                                <div class="col-md-4 col-xs-6 text-right">
                                                 <div ng-if="Flights.Flights.FareType != 'RP'"><img src="/resources/images/elite-bnr.png"></div>
                                                </div>
                                            </div>
                                        </div>    
                                      </div>
                                </article>
                                
                         </div>       
                                
                           <dir-pagination-controls
					max-size="5"
					direction-links="true"
					boundary-links="true" >
				</dir-pagination-controls>     
                        </div>
                    </div>
            	</div> 
        	</div>                
        </div>
     </div>
    <!--Main--> 

		
<!--Footer Start-->
<!-- Google Code for Remarketing Tag -->

<script type="text/javascript">

var google_tag_params = {
flight_originid: '<%=lookfromCity%>',
flight_destid: '<%=looktoCity%>',
flight_startdate: '<%=lookdepDate%>',
<%if (lookretDate != ""){%>
flight_enddate: '<%=lookretDate%>',
<%}%>
flight_pagetype: 'flight_result',
flight_totalvalue:{{google_price_bound}},
};
</script>
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 928632334;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>    
<toaster-container   toaster-options="{'time-out': 60000, 
                'position-class': 'toast-bottom-right','close-button':true}"></toaster-container>
  <jsp:include page="inside_footer.jsp"></jsp:include>
 
			<!--Footer Closed-->
			
<script src="/resources/js/jquery-1.8.2.min.js"></script> 
<script src="/resources/js/modernizr.min.js"></script> 
<script src="/resources/js/respond.min.js"></script> 
<script src="/resources/js/prefixfree.min.js"></script> 
<script src="/resources/js/bootstrap.min.js"></script>
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<!-- <script src="/resources/js/jquery.slides.min.js"></script> -->
<script src="/resources/js/theme-scripts.js"></script>

<script src="/resources/js/index_eng.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.min.js"></script>
<script src="/resources/js/angular-animate/angular-animate.min.js" ></script>
 <script src="/resources/js/toaster.js"></script>
<script>
     /*    $(function() {
          $('.contain').slidesjs({	
            height: 450,
            navigation: false,
            pagination: false,
            effect: {
              fade: {
                speed: 100
              }
            },
            callback: {
                start: function(number)
                {			
                    $("#slider_content1,#slider_content2,#slider_content3").fadeOut(10);
                },
                complete: function(number)
                {			
                    $("#slider_content" + number).delay(500).fadeIn(1000);
                }		
            },
            play: {
                active: false,
                auto: true,
                interval: 6000,
                pauseOnHover: false,
                effect: "fade"
            }
          });
        });
		$(function() {
			$( "#departDate" ).datepicker({
			  changeMonth: true,
			  changeYear: true,
			  dateFormat:"yy-mm-dd"
			});
		  });
		    $(function() {
				$( "#returnDate" ).datepicker({
				  changeMonth: true,
				  changeYear: true,
				  dateFormat:"yy-mm-dd"
				});
			  });
		  
		  $('.form-group-select-plus').each(function () {
				var self = $(this),
					btnGroup = self.find('.btn-group').first(),
					select = self.find('select');
					
				btnGroup.children('label').last().click(function () {
					btnGroup.addClass('hidden');
					select.removeClass('hidden');
					
					
				});
				btnGroup.children('label:not(:last-child)').click(function () {
					select.val($(this).children("input:eq(0)").data("value"));
				});
			});
			
			$('label').click(function() {
				  $("label.active").removeClass("active");
				  $(this).addClass('active');
			});
			
			

			function show(target){
				document.getElementById(target).style.display = 'block';
				
			}
			function hide(target){
				document.getElementById(target).style.display = 'none';
				
			}
			  */
			
        </script>
        <script type='text/javascript'>
			$(function(){
			var overlay = $('<div id="overlay" onclick="hideQuote()"></div>');
			$('.close_new').click(function(){
			$('.popup_feedback').hide();
			overlay.appendTo(document.body).remove();
			return false;
			});
			
			$('.x').click(function(){
			$('.popup_feedback').hide();
			overlay.appendTo(document.body).remove();
			return false;
			});
			
			$('.click').click(function(){
			overlay.show();
			overlay.appendTo(document.body);
			$('.popup_feedback').show();
			return false;
			});
			});
			function hideQuote(){
			$(document).ready(function () {
			$('#overlay').click(function () {
			
				$(this).hide();
			
				$('.popup_feedback').hide();
			
				});
			});
			}
			
			function ddlTypejourneyChange(ddlType) {
				if ($(ddlType).val() == "1") {
					$("input[name='toDate']").prop("disabled", true);
				}
				else {
					$("input[name='toDate']").prop("disabled", false);
					$("#returnDate").datepicker("change", { minDate: new Date($("#departDate").val()) });
				}
			}
		</script>
        <script type="text/javascript">


        $(document).ready(function() {
        
            $("#price-range").slider({
                range: true,
                min: 100,
                max: 5000,
                values: [ 100, 5000 ],
                slide: function( event, ui ) {
                    $(".min-price-label").html( "$" + ui.values[ 0 ]);
                    $(".max-price-label").html( "$" + ui.values[ 1 ]);
                     var scope = angular.element(document.getElementById('MainController')).scope();
                     scope.$apply(function() {
                             scope.lower_price_bound = ui.values[0];
						     scope.upper_price_bound = ui.values[1];
					  });
                   
                }
            });
            $(".min-price-label").html( "$" + $("#price-range").slider( "values", 0 ));
            $(".max-price-label").html( "$" + $("#price-range").slider( "values", 1 ));

            function convertTimeToHHMM(t) {
                var minutes = t % 60;
                var hour = (t - minutes) / 60;
                var timeStr = (hour + "").lpad("0", 2) + ":" + (minutes + "").lpad("0", 2);
                var date = new Date("2014/01/01 " + timeStr + ":00");
                var hhmm = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
                return hhmm;
            }
             function convertTimeForHHMM(t) {
                var minutes = t % 60;
                var hour = (t - minutes) / 60;
                var timeStr = (hour + "").lpad("0", 2) + "" + (minutes + "").lpad("0", 2);
                var date = new Date("2014/01/01 " + timeStr + ":00");
                var hhmm = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
                return timeStr;
            }
            $("#flight-times").slider({
                range: true,
                min: 0,
                max: 1439,
                step: 5,
                values: [ 0, 1439 ],
                slide: function( event, ui ) {
                        var scope = angular.element(document.getElementById('MainController')).scope();
                  
                     scope.$apply(function() {
						    scope.lower_depart_bound = convertTimeForHHMM(ui.values[0]);
						     scope.upper_depart_bound = convertTimeForHHMM(ui.values[1]);
					  }); 
                      
                    $(".start-time-label").html( convertTimeToHHMM(ui.values[0]) );
                    $(".end-time-label").html( convertTimeToHHMM(ui.values[1]) );
                }
            });
            $(".start-time-label").html( convertTimeToHHMM($("#flight-times").slider( "values", 0 )) );
            $(".end-time-label").html( convertTimeToHHMM($("#flight-times").slider( "values", 1 )) );
            
            
            $("#flight-times-return").slider({
                range: true,
                min: 0,
                max: 1439,
                step: 5,
                values: [ 0, 1439 ],
                slide: function( event, ui ) {
                        var scope = angular.element(document.getElementById('MainController')).scope();
                  
                     scope.$apply(function() {
						    scope.lower_return_bound = convertTimeForHHMM(ui.values[0]);
						     scope.upper_return_bound = convertTimeForHHMM(ui.values[1]);
					  }); 
                      
                    $(".start-time-return-label").html( convertTimeToHHMM(ui.values[0]) );
                    $(".end-time-return-label").html( convertTimeToHHMM(ui.values[1]) );
                }
            });
            $(".start-time-return-label").html( convertTimeToHHMM($("#flight-times-return").slider( "values", 0 )) );
            $(".end-time-return-label").html( convertTimeToHHMM($("#flight-times-return").slider( "values", 1 )) );
            
        }); 
        
        
    </script>
     <script type="text/javascript">
    
     if($("#tripType").val() == 1){
     $("input[name='toDate']").prop("disabled", true);
     }
  
     minDate = new Date();
   // maxDate = new Date(parseInt("2016", 10), (parseInt("1", 10) - 1) + 11, parseInt("31", 10));
     var x = 12; 
     maxDate = new Date();
     maxDate.setMonth(maxDate.getMonth() + x);
    
     numMonth = 1;
   // actionUrl = '/service/getairport';    
  //  $("#adult").val("1");
  //  $("#senior").val("0");
  //  $("#child").val("0");
   // $("#cabin").val("1");
    $(function () {
        $('.offcanvas-toggle-btn').click(function () {
            $('body').toggleClass('active');
        });

    })
</script>
    <script>
   
	$(document).ready(function () {
        $("#domesticdeals").click(function () {
            $("#domestic").show();
            $("#Hotel").hide();
        });

        $("#interdeals").click(function () {
            $("#domestic").hide();
            $("#Hotel").show();
        });
        $("#Hotel").hide();
    });
  $(function(){
			var ovrlay = $('<div id="ovrlay" onClick="hidePopup()"></div>');
			$('.close_new').click(function(){
			$('.featured-deal').hide();
			ovrlay.appendTo(document.body).remove();
			return false;
			});
			
						
			$('.flightdetailschek').click(function(){
			ovrlay.show();
			ovrlay.appendTo(document.body);
			$('.featured-deal').show();
			return false;
			});
			
			});
			function hidePopup(){
			$(document).ready(function () {
			$('#ovrlay').click(function () {
			
				$(this).hide();
			
				$('.featured-deal').hide();
			
				});
			});
			
			} 

  $(function() {
			$( "#departDate" ).datepicker({
			  changeMonth: true,
			  changeYear: true,
			  dateFormat:"yy-mm-dd",
			  showButtonPanel: true,
			   minDate: minDate, maxDate: maxDate,
			 onClose: function () {
            var dateDepMin = $('#departDate').datepicker("getDate");
            var dateRetMin = $('#returnDate').datepicker("getDate");
            if (dateDepMin != null && dateDepMin != '') {
            if ($('#tripType').val()=='2'){
		
                $("#returnDate").datepicker("change", { minDate: new Date(dateDepMin) });
                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
                if (dateRetMin != null) {
                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                    if (dMin > rMin) {
                        $('#returnDate').val($.datepicker.formatDate('mm/dd/yy', new Date(dMin)));
                        $("#returnDate").focus();
                    }
                }
                else {
                    $('#returnDate').val($.datepicker.formatDate('mm/dd/yy', new Date(dMin)));
                    $("#returnDate").focus();
                }
            }
            }
        }
			});
		  });
		    $(function() {
				$( "#returnDate" ).datepicker({
				  changeMonth: true,
				  changeYear: true,
				   dateFormat:"yy-mm-dd",
				   showButtonPanel: true,
				   minDate: minDate, maxDate: maxDate,
			        onClose: function () {
			            var dateDepMin = $('#departDate').datepicker("getDate");
			            var dateRetMin = $('#returnDate').datepicker("getDate");
			            if (dateDepMin != null && dateDepMin != '') {
			                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
			                if (dateRetMin != null) {
			                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
			                    if (dMin > rMin) {
			                        alert('Returning date always equal or greater than departure date!');
			                        $("#returnDate").val('');
			                    }
			                }
			            }
			        }
				});
			  });
		
		$.validator.addMethod('le', function(value, element, param) {

      return this.optional(element) || value <= $(param).val();
}, 'Invalid value');
	
$.validator.addMethod("greaterThan", function(value, element, params) {

    if (!/Invalid|NaN/.test(new Date(value))) {
        return new Date(value) > new Date($(params).val());
    }

    return isNaN(value) && isNaN($(params).val()) 
        || (Number(value) > Number($(params).val())); 
},'Must be greater than {0}.');
	                           
function submitForm(){

 var validator = $("#flightSearch").validate({
  showErrors: function() {
        if (this.settings.highlight) {
            for (var i = 0; this.errorList[i]; ++i) {
                this.settings.highlight.call(this, this.errorList[i].element,
                    this.settings.errorClass, this.settings.validClass);
            }
        }
        if (this.settings.unhighlight) {
            for (var i = 0, elements = this.validElements(); elements[i]; ++i) {
                this.settings.unhighlight.call(this, elements[i],
                    this.settings.errorClass, this.settings.validClass);
            }
        }
    },
 /*  showErrors: function(errorMap, errorList) {
        // Do nothing here
    },
    onfocusout: false,
    onkeyup: false, */
  rules: {                   
   froCity: {
		required: true,
		minlength: 3
	},
	toCity: {
		required: true,
		minlength: 3
	},
	froDate: {
		required: true,
	},
	toDate: {
		required: {
		depends: function(element) {
		if ($('#tripType').val()=='2'){
		return true;
		}else{
		return false;
		}
		}
		}
	//	greaterThan: "#froDate" 
	},
	adult: {
		required: true,
		 range: [1, 9]
		
	},
	infant: {
		//required: true,
		 range: [0, 8]
		// le: '#adult'
	},
    },  
     errorElement: "span" ,                              
     messages: {
                froCity: {
					required: "Please enter a valid Origin City.",
					minlength: "Origin City must consist of at least 3 characters"
				},
	             toCity: {
					required: "Please enter a valid Destination City.",
					minlength: "Destination City must consist of at least 3 characters",
					
				},
				froDate: {
					required: "Please enter a valid Depart Date.",
					
				},
	             toDate: {
					required: "Please enter a valid Return Date.",
					
					
				},
				infant: {
				    le: "Infant less than or equal to adult"
				},
     
     
     }
 });
 if(validator.form()){ // validation perform
 var total = parseInt($("#adult").val()) + parseInt($("#child").val()) + parseInt($("#infantWs").val());
 var adults=parseInt($("#adult").val());
 var infants=parseInt($("#infant").val())
if (infants > adults) {

$("#errorDiv").html("<p>&raquo; Infant less than or equal to adult!</p>");

return false;
} 

if (total >= 10) {
$("#errorDiv").html("<p>&raquo;Total number of Passenger should be less than or equal to 9 only!</p>")
return false;
} 
var startDate = new Date($('#froDate').val());
var endDate = new Date($('#toDate').val());

if (startDate < endDate){
$("#errorDiv").html("<p>&raquo;Return date should be equal or greater than Depart date!</p>")
return false;
}

 if ($.trim($("#froCity").val()) == $.trim($("#toCity").val()) && ($.trim($("#toCity").val()).length > 0 || $.trim($("#froCity").val()).length > 0)) {
 $("#errorDiv").html("<p>&raquo; Please enter a different From and To city/ airport code!</p>") 

 return false;
 }
      
var rndId = randomString(12);
  $('form#flightSearch').attr({action: '/search/id/'+rndId});   
  $('form#flightSearch').submit();
  
  
 }
}

function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

function matrixOpen(){

$("#showDetails").toggle();
}
	</script>
	<!--  <script type="text/javascript" src='/resources/angular-rangeslider/angular.rangeSlider.js'  charset="utf-8"></script>  -->
    <script src="/resources/lib/dirPagination.js"></script>
<script type="text/javascript">
        var _mfq = _mfq || [];
        (function () {
        var mf = document.createElement("script"); mf.type = "text/javascript"; mf.async = true;
        mf.src = "//cdn.mouseflow.com/projects/12d10d9b-2948-4779-af73-ac5bd3868d89.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
      })();
    </script>
	
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-73244320-1', 'auto');
  ga('send', 'pageview');

</script>


	
<script type="text/javascript">
currentLocation = window.location;
//alert("full value : "+currentLocation);
arr = currentLocation.toString().split('/');
strFile = arr[arr.length-1];
document.getElementById("currentLocation").value=strFile;
</script>
  


</body>
</html>
