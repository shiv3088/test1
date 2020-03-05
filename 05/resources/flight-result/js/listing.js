 //M star date and end date selected in calender 
$('#ui-datepicker-div').on('mouseenter', 'td', function() {
	
           var startDate = $('#departDate').datepicker("getDate");
           
           if(startDate==null){
            startDate = $('#checkIn').datepicker("getDate");
           }
           if (startDate) {
               var cell = $(this);
               cell.addClass('between-date');
               var hover_day = $(this).text();
               var hover_month = $(this).attr("data-month");
               var hover_year = $(this).parent().siblings('td').attr("data-year");
               $('#ui-datepicker-div tr td').removeClass('between-date');
                if(hover_day >= startDate.getDate() || hover_month >= startDate.getMonth()){
                  if(hover_month >= startDate.getMonth()){
                   $('tr td a').each(function (index, value){
                    var month_match = parseInt($(this).text());
					var pppp = $(this).parent().data('month');
					  if(month_match <= hover_day && pppp <= hover_month){
                       $(this).parent().addClass('between-date');
                      }
					  if(pppp < hover_month){
						  $(this).parent().addClass('between-date');
					  }
                    });
                 }
                }
           
           }

       });

//M star date and end date selected in calender
//M calendar div 	
$("#departDate_new, #returnDate_new, #departSDate_new, #departTDate_new, #checkInDate_new, #checkOutDate_new").click(function() {
        $(this).datepicker('show'); 
    });

	//M Responsive 
var numberOfMonthValue;
  $(window).resize(function() {
    
    if ($(window).width() < 768) {
      numberOfMonthValue =1;
	  $("#departDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
    } else {
      numberOfMonthValue =2;
	  $("#departDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
    }
  }).trigger('resize');
//Responsive 

 	'use strict'


    var angularTable = angular.module('angularTable', ['angularUtils.directives.dirPagination','initialValue','LocalStorageModule','routeHappy']);
	angularTable.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        /*template: '<div class="srching-txt" style="text-align:center; margin-top:50px;"><h1 style="color:#03566c; font-size:30px; margin-bottom:30px;">We are looking the best flights for you ...</h1><img src="/resources/images/waiting-loader.gif"></div>',
       */ link: function (scope, element, attr) {
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
  
 angularTable.factory('itemsFactory', ['$http', function($http){
	 return {
		    itemDetails: function(ids) {
		      return $http(
		      {
                url: "/PostSearchFlight/" + ids,
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
  
 
   
		var MainController = function($scope, $http, itemsFactory, $window , $templateCache, $interval,localStorageService, $timeout,routeHappy,$filter) {
			    $scope.dollar = "GBP";
			    //document.getElementById("curCode").innerHTML = $scope.dollar.toUpperCase();
		        $scope.selectedStop = [];
		        $scope.filter = {};
		        $scope.colourIncludes = [];
		        $scope.dataRes = "xyz";
		        $scope.featureddeal = false;
		       // $scope.blackListedCountry= false;
		       // $scope.noResultFound= false;
		        $scope.displayCab= false;
			    $scope.selectedSort ="SortBy";
			    $scope.airlineIncludes = [];  
				$scope.layoverIncludes = [];
			    $scope.cabinIncludes = [];
			    $scope.flightsTimesdept=[];
			    $scope.flightsTimesret=[];
			    $scope.adddepartAirport=[];
			    $scope.addreturnAirport=[];
				$scope.addreturnAirport=[];
				$scope.layOverAirport=[];
			    $scope.stop="all";
			    $scope.airlinem="all";
		        $scope.len=1;
		        $scope.tabs=1;
		        $scope.filterlimit = 6;
				$scope.layoverlimit= 3;
		        $scope.ConnectionTimess=[];
		        $scope.addtabs=1;
		        $scope.ConnectionTimeValue = 0;
		        $scope.ConnectionTimeMaxValue = 0;
		        $scope.mixAir = false;
		        $scope.lower_price_bound = 0;
                $scope.upper_price_bound = 5000;
                $scope.lower_price_slider = 0;
                $scope.upper_price_slider = 5000;
                $scope.lower_depart_bound = "0000";
                $scope.upper_depart_bound = "2359";
                $scope.cabinList = [];
                 $scope.lower_return_bound = "0000";
                $scope.upper_return_bound = "2359";
                $scope.searchQueryList =  [];
                $scope.arrivalAirport=[];
                $scope.departAirport=[];
                $scope.couponsPopup="X";
				$scope.banners = ['advantage', 'easirent', 'ezrent', 'sixt'];
				$scope.airlinebanners = [];
				$scope.intl=["QR-DOH","CX-MNL","EY-AUH","QR-BKK","CX-HKG","EY-CAI","CX-BJS"];
                $scope.dom_ca=["AC","WS"];
                $scope.dom_us=["AA","UA"];
                $scope.trans=["AA","UA","AC","WS"];
				$scope.showairlineBanners="G-Air";
				$scope.fxlContract = false;
				$scope.fxlAirline = "";
				$scope.fxlText = "";
				$scope.layoverShow = false;
				$scope.layoverText = "Show";
			    $scope.RandomBanners = function(){
				  return $scope.banners[Math.floor((Math.random() * $scope.banners.length))];
				};
				$scope.showBanners=$scope.RandomBanners();
                if(localStorageService.get("lkfhistory") != null){
               // $scope.searchQueryList.push(localStorageService.get("searchQuery"));
                 $scope.searchQueryList=localStorageService.get("lkfhistory");
                }
               
                if(localStorageService.get("couponsPopup") != null){
                    $scope.couponsPopup=localStorageService.get("couponsPopup");
                }
                
                document.getElementById('resultsmainCntr').style.display="block";
                
              
				  var obj;
				 $scope.searchstatus="x";
                 $scope.$watch('searchQuery', function(val) {
					   obj = JSON.parse(val);
					   if(obj.DestinationAirport.Country == "US" && obj.OriginAirport.Country == "US"){
						   $scope.searchstatus="dom-us";
						   $scope.airlinebanners = $scope.dom_us;
					   }else  if(obj.DestinationAirport.Country == "CA" && obj.OriginAirport.Country == "CA" ){
						   $scope.searchstatus="dom-ca";
						   $scope.airlinebanners = $scope.dom_ca;
					  }else  if((obj.DestinationAirport.Country == "US" && obj.OriginAirport.Country == "CA" ) || (obj.DestinationAirport.Country == "CA" && obj.OriginAirport.Country == "US" )){
						   $scope.searchstatus="trans";
						   $scope.airlinebanners = $scope.trans;
					    }else  if(obj.DestinationAirport.Country != "US" && obj.DestinationAirport.Country != "CA"){
						   $scope.searchstatus="intl";
						   $scope.airlinebanners = $scope.intl;
					   }else{
						    $scope.searchstatus="intl";
						   $scope.airlinebanners = $scope.intl;
					   }
			        if (val) {
						$scope.searchfound= JSON.stringify(val)
			            $scope.searchQueryList.push(val);
			            localStorageService.set("lkfhistory",$scope.searchQueryList);
			        }
					
					 $scope.RandomairBanners = function(){
				                return $scope.airlinebanners[Math.floor((Math.random() * $scope.airlinebanners.length))];
				          };
				$scope.showairlineBanners=$scope.RandomairBanners();
				
			    });
				
                 $scope.currentLocation=document.getElementById('currentLocation').value;
                 //console.log($scope.currentLocation);
                 document.getElementById('resultsection').style.display="block";
                 document.getElementById('matrixBlock').style.display="block";
                 document.getElementById('mobile-itenery').style.display="block";
                // document.getElementById('mid-banner-d').style.display="none";
				 document.getElementById('mid-banner-s').style.display="block";
                //document.getElementById('mid-banner-md').style.display="none";
				 document.getElementById('mid-banner-ms').style.display="block";
				 
                $scope.priceRangeList={};
                $scope.filters = { };
                $scope.filtersPrice= { };
                $scope.currentPage = 0;
   				$scope.pageSize = 5;
				
				$(window).resize(function(){
					matrixmobile();
					
				});
				
				$(window).load(function(){
					matrixmobile();
					
				});
				
				$scope.OpenPopupWindow = function (lists) {
					$scope.bagairline = [];
					// angular.forEach(lists, function(tech) {
				       
				          if ($scope.bagairline.indexOf(lists) == -1) {
				            $scope.bagairline.push(lists);
				          }
				      
				       // });
		               $window.open("/baggage-fees-info?airline="+$scope.bagairline, "popup", "width=900,height=600,left=10,top=150");
		           }
				
				$scope.OpenPopupWindowcase = function (lists) {
					$scope.bagairline = [];
					 angular.forEach(lists, function(tech) {
				       
				          if ($scope.bagairline.indexOf(tech.airline) == -1) {
				            $scope.bagairline.push(tech.airline);
				          }
				      
				        });
						
						if ($scope.bagairline.indexOf("DL") != -1) {
							return false
						}
						
						if ($scope.bagairline.indexOf("CCF") != -1) {
							return false
						}
						
						return true;
		               
		           }
				
				
              function matrixmobile(){
				  
				if($(window).width() < 700){
					   $scope.pageSize = 4;
				   }
				   
				   if($(window).width() < 767){
					   $scope.pageSize = 3;
				   }
				  
				  
			  }
			 
			 $scope.flexColor= function(flex,pos) {
				if(flex == true && pos == 0){ return "#ef8527";}else{ return "#4e4e4e";}
				
			 }
			 
			 
			  $scope.nearColor= function(flex) {
				 if(flex == true){ return "#ef8527";}else{ return "#4e4e4e";}
				
			 }
			 
			 
			  $scope.switchSort = function() {
            	 //   langKey = $scope.selectedSort;
            	    $scope.sortKey = $scope.selectedSort;   //set the sortKey to the param passed
                    $scope.reverse = $scope.reverse; //if true make it false and vice versa
                   // $scope.activeMenu = keyname;
            	    }
            	    
			 
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
                $scope.entertainment = routeHappy.entertainment();
                $scope.food = routeHappy.food();
                $scope.layout = routeHappy.layout();
                $scope.powerAndUsb = routeHappy.powerAndUsb();
                $scope.wifi = routeHappy.wifi();
               
                var promise = itemsFactory.itemDetails($scope.currentLocation);
               
			  	  promise.then(function (data) {
			    
			        // console.log("data flights:"+data);
			         //console.log(JSON.stringify({data: data}));
			  		 $scope.paymentpageopen= localStorage.getItem('paymentpageopen');
			    	 
			    	 $scope.paymentpageairline= localStorage.getItem('paymentpageairline');
			    	 $scope.paymentpagefares= localStorage.getItem('paymentpagefares');
			    	 $scope.catchResultID= localStorage.getItem('catchResultID');
			    	 document.getElementById('modify-search').style.display="block";
			    	 document.getElementById('headerrs').style.display="block";
			    	 document.getElementById('footerrs').style.display="block";
			    	 document.getElementById('mobile-itenery').style.display="block";
			    	 
			        // console.log("catchResultID:"+$scope.catchResultID);
			         if($scope.paymentpageopen == 1){
			         	document.getElementById('resultsection').style.display="block";
			        	document.getElementById('resultsmainCntr').style.display="block";
			        	document.getElementById('matrixBlock').style.display="block";
			        	 document.getElementById('modify-search').style.display="block";
			        	 document.getElementById('mobile-itenery').style.display="block";
			         }
			         $scope.displayCab= false;
			        $scope.responseStatus=[];
			         $scope.cityPair;
			        $scope.loading = false;
			        var leftPanel = angular.element( document.querySelector( '#leftCntr' ) );
			        leftPanel.removeClass('myClass');
			        var rightPanel = angular.element( document.querySelector( '#right' ) );
			        rightPanel.removeClass('myClass');
			        $scope.mainlist=[];
			        $scope.flexlist=[];
			         $scope.nearBylist=[];
			         $scope.ConnectionTimess=[];
			         $scope.selectedSort ="SortBy";
			        $scope.list=[];
					$scope.airlineList=[];
					$scope.airportList=[];
					$scope.aircraftList=[];
					
			        $scope.matrix=[];
			         $scope.matrixlist=[];
			        $scope.matrixFxlist=[];
			         $scope.matrixNBlist=[];
			         $scope.stop="all";
			        $scope.airline = [];
			        $scope.priceRangeList=[];
			        $scope.blackListedCountry= [];
		            $scope.noResultFound= [];
		             $scope.noResultff= [];
		             $scope.arrivalAirport=[];
		                $scope.departAirport=[];
		             if($(window).width() < 700){
						   $scope.pageSize = 4;
					   }
					   
					   if($(window).width() < 767){
						   $scope.pageSize = 3;
					   }
					  
		$scope.activeRow = "0";
	  $scope.isActive = function(index) {
	      return $scope.activeRow != index; 
	    }
	 
	 var pagesShown = 1;

	   var pageSize = 10;
	   
	   $scope.paginationLimit = function(data) {
	    return pageSize * pagesShown;
	   };

	   $scope.hasMoreItemsToShow = function() {
	    return pagesShown < ($scope.filtered.length / pageSize);
	   };

	   $scope.showMoreItems = function() {
		   
		   $scope.restResult=($scope.list.length-10) - (pageSize * pagesShown);
		   
	    pagesShown = pagesShown + 1;       
	   }; 
	   
	   $scope.happy_img = function(xx) {
		   
		   return  routeHappy.happy_img(xx);
	   }
	 
	  $scope.layoverClick  = function() {
		  if($scope.layoverShow == false){
			  $scope.layoverShow = true;
			  $scope.layoverText = "Hide";
			  angular.element(document.querySelector('#layoverDiv')).removeClass("abc");
		  }
		  else{
			  $scope.layoverShow = false;
			  $scope.layoverText = "Show";
			  angular.element(document.querySelector('#layoverDiv')).addClass("abc");
		  }
		  
	      }

      $scope.getAirlineName = function(airlineCode){
		   var name=airlineCode;
		  angular.forEach($scope.airlineList, function(tech) {
			  if(airlineCode == tech.Code){
				   name = tech.Name;
			   }
		  });
		   return name;
		  
	  }
	  
	  $scope.getAircraftName = function(aircraftCode){
		    var name=aircraftCode;
		  angular.forEach($scope.aircraftList, function(tech) {
			  if(aircraftCode == tech.AircraftCode){
				   name = tech.AircraftName;
			   }
		  });
		   return name;
		   
	  }
	
	  
	  $scope.getCityName = function(airportCode){
		    var name=airportCode;
		  angular.forEach($scope.airportList, function(tech) {
			  if(airportCode == tech.AirportCode){
				   name = tech.CityName;
			   }
		  });
		   return name;
		}
	  
	   $scope.getAirportName = function(airportCode){
		    var name=airportCode;
		  angular.forEach($scope.airportList, function(tech) {
			  if(airportCode == tech.AirportCode){
				   name = tech.AirportName;
			   }
		  });
		   return name;
		}
		
        
        $scope.MixedShow = function (mixAirline) {
        	$scope.clearFilter();
          	$scope.len=mixAirline;
          }
        
       $scope.includeAirline = function(airlineCode) {
        	
        	if($scope.tabs == 2){
         		  $scope.mainList();
         		 setTimeout(function(){
         			 //console.log("Wait Over");
         			$scope.$apply(function () {
         	            var i = $.inArray(airlineCode, $scope.airlineIncludes);
         	            if (i > -1) {
         	                $scope.airlineIncludes.splice(i, 1);
         	            } else {
         	                $scope.airlineIncludes.push(airlineCode);
         	            }
         	            if ($scope.airlineIncludes.length > 0) {
         	            $scope.sortKey = "PersonFare";  
         	            $scope.reverse = $scope.reverse;
         	            }else{
         	            	$scope.mainList();
         	            }
         	            $scope.airlinem="all";
         	          	});
         			
                  //console.log("Wait Over:"+$scope.airlinem);
               },800);
          	}else{
            var i = $.inArray(airlineCode, $scope.airlineIncludes);
            if (i > -1) {
                $scope.airlineIncludes.splice(i, 1);
            } else {
                $scope.airlineIncludes.push(airlineCode);
            }
            if ($scope.airlineIncludes.length > 0) {
            $scope.sortKey = "PersonFare";  
            $scope.reverse = $scope.reverse;
            }else{
            	//$scope.mainList();
            }
            $scope.airlinem="all";
          	}
        }
        
      /*  $scope.AirlineFilter = function(flights) {
        	
            if ($scope.airlineIncludes.length > 0) {
            	
            	var arr = flights.Airline.split(',');
     		   for(var i=0;i< arr.length;i++)
                {
     			  for(var j=0;j< $scope.airlineIncludes.length;j++)
                  {
					  var air=$scope.airlineIncludes[j];
					  if($scope.airlineIncludes[j].length>2){
						  air=air.substring(0,2)
					  }
     			   if (arr[i] == air ){
     				   return flights;
     			   }
                  }
     				   
                }
            }else{
            	return flights;
            }
        }
		*/
		   $scope.AirlineFilter = function(flights) {
        	
            if ($scope.airlineIncludes.length > 0) {
            	
				 for(var j=0;j< $scope.airlineIncludes.length;j++)
                  {
					var air=$scope.airlineIncludes[j];
					var arr = flights.Airline.split(',');
					if($scope.airlineIncludes[j].length>2 && arr.length>1){
					   for(var i=0;i< arr.length;i++)
						{
						   air=air.substring(0,2)
						  
						   if (arr[i] == air ){
							   return flights;
						   }
					   }
					   
					}else{
						if (arr == air ){
							   return flights;
						   }
					}
     				   
                }
            }else{
            	return flights;
            }
        }
           
      
          $scope.includeLayover = function(layoverCode) {
        	
        	if($scope.tabs == 2){
         		  $scope.mainList();
         		 setTimeout(function(){
         			 //console.log("Wait Over");
         			$scope.$apply(function () {
         	            var i = $.inArray(layoverCode, $scope.layoverIncludes);
         	            if (i > -1) {
         	                $scope.layoverIncludes.splice(i, 1);
         	            } else {
         	                $scope.layoverIncludes.push(layoverCode);
         	            }
         	            if ($scope.layoverIncludes.length > 0) {
         	            $scope.sortKey = "PersonFare";  
         	            $scope.reverse = $scope.reverse;
         	            }else{
         	            	$scope.mainList();
         	            }
         	            $scope.airlinem="all";
         	          	});
               },800);
          	}else{
            var i = $.inArray(layoverCode, $scope.layoverIncludes);
            if (i > -1) {
                $scope.layoverIncludes.splice(i, 1);
            } else {
                $scope.layoverIncludes.push(layoverCode);
            }
            if ($scope.layoverIncludes.length > 0) {
            $scope.sortKey = "PersonFare";  
            $scope.reverse = $scope.reverse;
            }else{
            	//$scope.mainList();
            }
           
          	}
        }
        
        $scope.LayoverFilter = function(flights) {
        	
            if ($scope.layoverIncludes.length > 0 && flights.layover.length>0) {
              for(var i=0;i< flights.layover.length;i++)
                {
     			  for(var j=0;j< $scope.layoverIncludes.length;j++)
                  {
     			   if (flights.layover[i] == $scope.layoverIncludes[j] ){
     				   return flights;
     			   }
                  }
     				   
                }
				
            }else{
            	return flights;
            }
        }
		
		   $scope.includedepartAirport = function(airportCode) {
        	
        	if($scope.tabs == 2){
         		  $scope.mainList();
         		 setTimeout(function(){
         			
         			$scope.$apply(function () {
         	            var i = $.inArray(airportCode, $scope.adddepartAirport);
         	            if (i > -1) {
         	                $scope.adddepartAirport.splice(i, 1);
         	            } else {
         	                $scope.adddepartAirport.push(airportCode);
         	            }
         	            if ($scope.adddepartAirport.length > 0) {
         	            $scope.sortKey = "PersonFare";  
         	            $scope.reverse = $scope.reverse;
         	            }else{
         	            	$scope.mainList();
         	            }
         	           
         	          	});
         			
               },800);
          	}else{
            var i = $.inArray(airportCode, $scope.adddepartAirport);
            if (i > -1) {
                $scope.adddepartAirport.splice(i, 1);
            } else {
                $scope.adddepartAirport.push(airportCode);
            }
            if ($scope.adddepartAirport.length > 0) {
            $scope.sortKey = "PersonFare";  
            $scope.reverse = $scope.reverse;
            }else{
            	//$scope.mainList();
            }
           
          	}
        }
         
         $scope.airportdeptFilter = function(flights) {
         	
             if ($scope.adddepartAirport.length > 0) {
             	
             	
      			  for(var j=0;j< $scope.adddepartAirport.length;j++)
                   {
      				 if(flights.DepartAirport == $scope.adddepartAirport[j]){
      					return flights;
      				 }
                   }
      			
             }else{
             	return flights;
             }
         } 
         
         
         
         $scope.includereturnAirport = function(airportCode) {
         	
         	if($scope.tabs == 2){
          		  $scope.mainList();
          		 setTimeout(function(){
          			
          			$scope.$apply(function () {
          	            var i = $.inArray(airportCode, $scope.addreturnAirport);
          	            if (i > -1) {
          	                $scope.addreturnAirport.splice(i, 1);
          	            } else {
          	                $scope.addreturnAirport.push(airportCode);
          	            }
          	            if ($scope.addreturnAirport.length > 0) {
          	            $scope.sortKey = "PersonFare";  
          	            $scope.reverse = $scope.reverse;
          	            }else{
          	            	$scope.mainList();
          	            }
          	           
          	          	});
          			
                   //console.log("Wait Over:"+$scope.airlinem);
                },800);
           	}else{
             var i = $.inArray(airportCode, $scope.addreturnAirport);
             if (i > -1) {
                 $scope.addreturnAirport.splice(i, 1);
             } else {
                 $scope.addreturnAirport.push(airportCode);
             }
             if ($scope.addreturnAirport.length > 0) {
             $scope.sortKey = "PersonFare";  
             $scope.reverse = $scope.reverse;
             }else{
             	//$scope.mainList();
             }
            
           	}
         }
          
          $scope.airportreturnFilter = function(flights) {
          	
              if ($scope.addreturnAirport.length > 0) {
              	
              	
       			  for(var j=0;j< $scope.addreturnAirport.length;j++)
                    {
       				 if(flights.ArrivalAirport == $scope.addreturnAirport[j]){
       					return flights;
       				 }
                    }
       			
              }else{
              	return flights;
              }
          } 
          
      
        
         $scope.includeTimesdept = function(deptTime) {
        	
        	if($scope.tabs == 2){
         		  $scope.mainList();
         		 setTimeout(function(){
         			
         			$scope.$apply(function () {
         	            var i = $.inArray(deptTime, $scope.flightsTimesdept);
         	            if (i > -1) {
         	                $scope.flightsTimesdept.splice(i, 1);
         	            } else {
         	                $scope.flightsTimesdept.push(deptTime);
         	            }
         	            if ($scope.flightsTimesdept.length > 0) {
         	            $scope.sortKey = "PersonFare";  
         	            $scope.reverse = $scope.reverse;
         	            }else{
         	            	$scope.mainList();
         	            }
         	           
         	          	});
         			
                  //console.log("Wait Over:"+$scope.airlinem);
               },800);
          	}else{
            var i = $.inArray(deptTime, $scope.flightsTimesdept);
            if (i > -1) {
                $scope.flightsTimesdept.splice(i, 1);
            } else {
                $scope.flightsTimesdept.push(deptTime);
            }
            if ($scope.flightsTimesdept.length > 0) {
            $scope.sortKey = "PersonFare";  
            $scope.reverse = $scope.reverse;
            }else{
            	//$scope.mainList();
            }
           
          	}
        }
         
         $scope.TimesdeptFilter = function(flights) {
         	
             if ($scope.flightsTimesdept.length > 0) {
             	
             	
      			  for(var j=0;j< $scope.flightsTimesdept.length;j++)
                   {
      				//  console.log($scope.flightsTimesdept[j]);
      				 var arr = $scope.flightsTimesdept[j].split('-');
      				// console.log("Wait Dept time:"+arr[0]+" and "+arr[1]);
      				 if(parseInt(flights.Depart) >= parseInt(arr[0]) && parseInt(flights.Depart) <= parseInt(arr[1])){
      					return flights;
      				 }
      				
                   }
      			
             }else{
             	return flights;
             }
         } 
         
         
         $scope.TimesrettFilter = function(flights) {
          	
             if ($scope.flightsTimesret.length > 0) {
             	
             	
      			  for(var j=0;j< $scope.flightsTimesret.length;j++)
                   {
      				//  console.log($scope.flightsTimesdept[j]);
      				 var arr = $scope.flightsTimesret[j].split('-');
      				// console.log("Wait Dept time:"+arr[0]+" and "+arr[1]);
      				 if(parseInt(flights.Return) >= parseInt(arr[0]) && parseInt(flights.Return) <= parseInt(arr[1])){
      					return flights;
      				 }
      				
                   }
      			
             }else{
             	return flights;
             }
         } 
         
         $scope.includeTimesret = function(returnTime) {
         	
         	if($scope.tabs == 2){
          		  $scope.mainList();
          		 setTimeout(function(){
          			
          			$scope.$apply(function () {
          	            var i = $.inArray(returnTime, $scope.flightsTimesret);
          	            if (i > -1) {
          	                $scope.flightsTimesret.splice(i, 1);
          	            } else {
          	                $scope.flightsTimesret.push(returnTime);
          	            }
          	            if ($scope.flightsTimesret.length > 0) {
          	            $scope.sortKey = "PersonFare";  
          	            $scope.reverse = $scope.reverse;
          	            }else{
          	            	$scope.mainList();
          	            }
          	           
          	          	});
          			
                },800);
           	}else{
             var i = $.inArray(returnTime, $scope.flightsTimesret);
             if (i > -1) {
                 $scope.flightsTimesret.splice(i, 1);
             } else {
                 $scope.flightsTimesret.push(returnTime);
             }
             if ($scope.flightsTimesret.length > 0) {
             $scope.sortKey = "PersonFare";  
             $scope.reverse = $scope.reverse;
             }else{
             	//$scope.mainList();
             }
            
           	}
         }
        
      
        $scope.includeCabin = function(cabinCode) {
        	
        	if($scope.tabs == 2){
         		  $scope.mainList();
         		 setTimeout(function(){
         			
         			$scope.$apply(function () {
         	            var i = $.inArray(cabinCode, $scope.cabinIncludes);
         	            if (i > -1) {
         	                $scope.cabinIncludes.splice(i, 1);
         	            } else {
         	                $scope.cabinIncludes.push(cabinCode);
         	            }
         	            if ($scope.cabinIncludes.length > 0) {
         	            $scope.sortKey = "PersonFare";  
         	            $scope.reverse = $scope.reverse;
         	            }else{
         	            	$scope.mainList();
         	            }
         	           
         	          	});
         			
                
               },800);
          	}else{
            var i = $.inArray(cabinCode, $scope.cabinIncludes);
            if (i > -1) {
                $scope.cabinIncludes.splice(i, 1);
            } else {
                $scope.cabinIncludes.push(cabinCode);
            }
            if ($scope.cabinIncludes.length > 0) {
            $scope.sortKey = "PersonFare";  
            $scope.reverse = $scope.reverse;
            }else{
            	//$scope.mainList();
            }
           
          	}
        }
        
    
        
     $scope.CabinFilter = function(flights) {
        	
            if ($scope.cabinIncludes.length > 0) {
            	
            	
     			  for(var j=0;j< $scope.cabinIncludes.length;j++)
                  {
     				  if($scope.cabinIncludes[j] == "Mixed"){
     					 var arr = flights.ResultCabin.split(',');
     					 if(arr.length>1){
     						 return flights;
     					 }
     				  }else{
     				
     			   if (flights.ResultCabin == $scope.cabinIncludes[j] ){
     				   return flights;
     			   }
                  
     				   
                }
                  }
            }else{
            	return flights;
            }
        }      
      
           $scope.ConnectionTime = function(flights) {
        	  
            if ($scope.ConnectionTimeValue < $scope.ConnectionMaxTimeValue) {
     			   if (flights.TotLayover <= ($scope.ConnectionTimeValue*60) ){
     				   return flights;
     			   }
               
            }else{
            	return flights;
            }
        }


        $scope.clearMatrixFilter = function () {
        	
        	$scope.matrixActive = '';
        	$scope.stop="all";
        	$scope.airlinem="all";
        	$scope.filtersPrice = {};
        	$scope.filters = {};
        	$scope.sortKey = "PersonFare";  
            $scope.reverse = $scope.reverse;
        }
        
        $scope.getFooUndef = function(foo){
            return ( foo === undefined );
        }
        
        $scope.airlineShow = function (airline) {
        	
     	   if($scope.tabs == 2){
        		  $scope.mainList();
        		 setTimeout(function(){
        			 
        			$scope.$apply(function () {
                 	$scope.airlinem = airline;
                	    $scope.sortKey = "PersonFare";  
                     $scope.reverse = $scope.reverse;
        		    });
        			
                 
              },800);
         	}else{
         	
         	$scope.clearMixAirline();
         	$scope.clearFilter();
         	$scope.airlinem = airline;
        	    //$scope.filters.Airline = airline;
        	    $scope.sortKey = "PersonFare";  
             $scope.reverse = $scope.reverse;
         	}
         }
        
        $scope.showAirline= function (flights) {
     	   if($scope.airlinem=="all"){
     		   return flights;
     	   }else{
			   var arr = flights.Airline.split(',');
			   if($scope.airlinem.length > 2 && arr.length>1){
     		   
     		   for(var i=0;i< arr.length;i++)
                {
					 var air=$scope.airlinem;
					  if($scope.airlinem.length > 2){
						  air=air.substring(0,2)
					  }
     			   
     			   if (arr[i] == air ){
     				   return flights;
     			   }
     				   
                }
               }else{
				   if (flights.Airline == $scope.airlinem ){
     				   return flights;
     			   }
			   } 
            }
        };
        
        $scope.showstop = function (flights) {
      	  if($scope.stop == "all"){
      		   return flights;
      	   }else {
      		 
      			   if (flights.Stops == $scope.stop ){
      				   return flights;
      			   }
      		 }
         };
        
        $scope.priceShow = function (price,airline,stops) {
          //	console.log(price);
		//	console.log(airline);
		//	console.log(stops);
    	    if($scope.tabs == 2){
       		   $scope.mainList();
       		 setTimeout(function(){
       		$scope.$apply(function () {
       		$scope.airlinem = airline;
         	$scope.filtersPrice.Price = price;
   		    $scope.matrixActive = price + airline;
   		    $scope.sortKey = "PersonFare";  
            $scope.reverse = $scope.reverse;
              });
             },800);
            
        	}
    	   
          	$scope.clearMixAirline();
          	$scope.clearFilter();
          	////$scope.filters.Airline = airline;
          	$scope.airlinem = airline;
         	$scope.filtersPrice.Price = price;
   		    $scope.matrixActive = price + airline;
   		    $scope.stop=stops;
   		    $scope.sortKey = "PersonFare";  
            $scope.reverse = $scope.reverse;
          }
        
        $scope.clearMixAirline = function () {
        	$scope.len = 1;
        	$scope.check=false;
           // document.getElementById('mixAir').checked=false;
            }
        
        $scope.clearFilter = function () {
     
        	$scope.airlinem="all";
        	$scope.stop="all";
        	$scope.filterAirline = {};
			$scope.filterlayover = {};
			$scope.filterTimesret= {};
			$scope.filterTimesdept= {};
			$scope.filterReturnAirport= {};
			$scope.filterdepartAirport= {};
			$scope.filterCabin= {};
        	$scope.filtersPrice = {};
        	 $scope.filters = {};
        	 $scope.airlineIncludes = [];
			 $scope.layoverIncludes = [];
        	 $scope.cabinIncludes = [];
        	 $scope.flightsTimesdept = [];
        	 $scope.flightsTimesret = [];
        	 $scope.ConnectionTimeValue = $scope.ConnectionMaxTimeValue;
        	 $scope.selectedStop = [];
        	 var lowerValue = document.getElementById('lowerValue').value; 
        	 var MaxValue = document.getElementById('MaxValue').value; 
        	 $scope.resetSlider(lowerValue,MaxValue);
        	 $scope.lower_price_bound=lowerValue;
        	// console.log("in clear filter lowerValue : " +lowerValue);
        	// console.log("in clear filter MaxValue : " +MaxValue);
        	 
        	 $scope.$watch($scope.conversionRatio, function (){ 
        	  $(".min-price-label").html( "<i class='fa fa-"+$scope.dollar+"'></i>" + Math.ceil(lowerValue * $scope.conversionRatio));
        	  $(".max-price-label").html( "<i class='fa fa-"+$scope.dollar+"'></i>" + Math.ceil(MaxValue * $scope.conversionRatio));
        	 });
        	 $scope.upper_price_bound=MaxValue;
        	 
        	 
        	 $scope.resetDepartSlider();
        	 $scope.resetReturnSlider();
        	 $(".start-time-label").html('12:00 AM');
        	 $(".end-time-label").html('11:59 PM');
        	 $(".start-time-return-label").html('12:00 AM');
        	 $(".end-time-return-label").html('11:59 PM');
        	
        	 $scope.lower_return_bound = '0000';
        	 $scope.upper_return_bound = '2359';
        	 
        	 $scope.lower_depart_bound = '0000';
        	 $scope.upper_depart_bound = '2359';
        	 $scope.sortKey ="";
        	
        }
        
        $scope.resetSlider= function (lowerValue,MaxValue) {
      	  var $slider = $("#price-range");
      	  $slider.slider("values", 0, lowerValue);
      	  $slider.slider("values", 1, MaxValue);
      	}
        
        $scope.resetDepartSlider= function () {
        	  var $slider = $("#flight-times");
        	  $slider.slider("values", 0, 0);
        	  $slider.slider("values", 1, 1439);
        	}
        
        $scope.resetReturnSlider= function () {
        	  var $slider = $("#flight-times-return");
        	  $slider.slider("values", 0, 0);
        	  $slider.slider("values", 1, 1439);
        	}
						angular.forEach(data, function(Flighth) {

						$scope.list=Flighth.flightResponse;
						//console.log($scope.list);
						$scope.mainlist=Flighth.flightResponse;
						$scope.flexlist=Flighth.flexibleSearch; 
						$scope.nearBylist=Flighth.nearBy;
						$scope.mainResult=Flighth.mainResult;
						$scope.matrix=Flighth.airlineStop;
						//console.log(Flighth.airlineStop);
						$scope.Newmatrix = Flighth.airlineStop;
						$scope.matrixlist=Flighth.airlineStop;
						$scope.matrixFxlist=Flighth.airlineFxStop;
						$scope.matrixNBlist=Flighth.airlineNbStop;

						$scope.arrivalAirport=Flighth.arrivalAirport;
						$scope.departAirport=Flighth.departAirport;
						$scope.airlineList=Flighth.AirlineList;
						$scope.airportList=Flighth.AirportList;
						$scope.aircraftList=Flighth.AircraftList;

						$scope.responseStatus=Flighth.responseStatus;
						$scope.cityPair=Flighth.cityPair;

						if(Flighth.airlinePPC != "AIR"){
						document.getElementById('airPPC').style.display="block";
						document.getElementById('airPPC').innerHTML=Flighth.airlinePPC;
						$scope.airPPc= true;
						} 

						});
			      
				    	
				    	
					 
			        // console.log(data[0].flightResponse);
			         $scope.backToTop = function() {
                                 $("html, body").animate({ scrollTop: 100 }, 1000);
			         }
			         
			         if($scope.paymentpageopen == 1){
			         	//localStorage.clear();
			         	document.getElementById('resultsmainCntr').style.display="none";
			         	 document.getElementById('modify-search').style.display="none";
			         	 document.getElementById('mobile-itenery').style.display="none";
			         	$scope.loading = true;
			         	bbuddykey = false;
			        	localStorage.removeItem("paymentpageopen");
			        	localStorage.removeItem("paymentpageairline");
			        	localStorage.removeItem("paymentpagefares");
			        	localStorage.removeItem("catchResultID");
			        	// $scope.catchResultID= localStorage.getItem('catchResultID');
			        	 if($scope.getFooUndef($scope.catchResultID)){
			        		// console.log("catchResultID 1:"+$scope.catchResultID);
			         	 if($scope.getFooUndef($scope.paymentpageairline)){
			         		 if($scope.getFooUndef($scope.paymentpagefares)){
			                   
			                   
			                   $timeout(function () { 
			                	   $scope.movePaymentPage(data[0].flightResponse[0].FlightId);
									  
									  }, 2000);
			         		 }else{

				         		 $scope.founds="0";
				         		 angular.forEach(data[0].flightResponse, function(tech) {
				         		$scope.maxPrices	=Math.ceil(tech.Price);
				         		$scope.minPrices	=Math.floor(tech.Price);
				 					    if ($scope.paymentpagefares >= $scope.minPrices && $scope.paymentpagefares <= $scope.maxPrices ) {
				 					    	  $scope.founds="1";
				 					    	 $scope.airfounds="0";
				 					    	
				 					    	 $timeout(function () { 
				 					    		  $scope.movePaymentPage(tech.FlightId);
													  
													  }, 2000);
				 					    }
				 					   $scope.maxPrices	=Math.ceil(tech.Price+3);
						         		$scope.minPrices	=Math.floor(tech.Price-3);
						         		if ($scope.paymentpagefares >= $scope.minPrices && $scope.paymentpagefares <= $scope.maxPrices ) {
				 					    	  $scope.founds="1";
				 					    	 $scope.airfounds="0";
				 					    	 
				 					    	 $timeout(function () { 
				 					    		 $scope.movePaymentPage(tech.FlightId);
													  
													  }, 2000);
				 					    }
				 					});
				         		 if( $scope.founds=="0"){
				         			
				         			 $timeout(function () { 
				         				 $scope.movePaymentPage(data[0].flightResponse[0].FlightId);
											  
											  }, 2000);
				         		 }
				         	 
			         		 }
			         		
			         	 }else{
			         		 $scope.founds="0";
			         		 $scope.airfounds="0";
			         		 angular.forEach(data[0].flightResponse, function(tech) {
			 					    if (tech.Airline == $scope.paymentpageairline){
			 					    	$scope.airfounds="1";
			 					    	 if($scope.founds=="0"){
			 					    	 if($scope.getFooUndef($scope.paymentpagefares)){
			 					    	  $scope.founds="1";
			 					    	  
			 					    	 $timeout(function () { 
			 					    		$scope.movePaymentPage(tech.FlightId);
												  
												  }, 2000);
			 					    	 }else{
							         		$scope.maxPrices	=Math.ceil(tech.Price);
							         		$scope.minPrices	=Math.floor(tech.Price);
							 					    if ($scope.paymentpagefares >= $scope.minPrices && $scope.paymentpagefares <= $scope.maxPrices ) {
							 					    	  $scope.founds="1";
							 					    	 $scope.airfounds="0";
							 					    	 $timeout(function () { 
								 					    		$scope.movePaymentPage(tech.FlightId);
																	  
																	  }, 2000);
							 					    	  
							 					    }
							 					   $scope.maxPrices	=Math.ceil(tech.Price+3);
									         		$scope.minPrices	=Math.floor(tech.Price-3);
									         		if ($scope.paymentpagefares >= $scope.minPrices && $scope.paymentpagefares <= $scope.maxPrices ) {
							 					    	  $scope.founds="1";
							 					    	 $scope.airfounds="0";
							 					    	 $timeout(function () { 
								 					    		$scope.movePaymentPage(tech.FlightId);
																	  
																	  }, 2000);
							 					    }
							 					    	         		 
			 					    	 }
			 					    	 }
			 					    }
			 					});
			         		 if( $scope.airfounds=="1"){
			         			 angular.forEach(data[0].flightResponse, function(tech) {
			         				 if($scope.founds=="0"){
				 					    if (tech.Airline == $scope.paymentpageairline) {
				 					    	 $scope.founds="1";
				 					    	 $timeout(function () { 
					 					    		$scope.movePaymentPage(tech.FlightId);
														  
														  }, 2000);
				 					     }
			         				 }
				 					});
			         		 }
			         		 
			         		 if( $scope.founds=="0"){
			         			
			         			 $timeout(function () { 
			         				 $scope.movePaymentPage(data[0].flightResponse[0].FlightId);
											  
											  }, 2000);
			         		 }
			         	 }
			         	 
			         }else{
			        	
			        	 angular.forEach($scope.list, function(tech) {
			        	
		 					    if (tech.FlightId == $scope.catchResultID) {
		 					    	 $scope.founds="1";
		 					    	
		 					    	 $timeout(function () { 
		 					    		 $scope.movePaymentPage(tech.FlightId);
												  
												  }, 2000);
		 					     }
	         				
		 					});
			        	 
			         }
			         	    $scope.loading = false;
			             	document.getElementById('resultsection').style.display="block";
				        	document.getElementById('resultsmainCntr').style.display="block";
				        	document.getElementById('matrixBlock').style.display="block";
				        	 document.getElementById('modify-search').style.display="block";
				        	 document.getElementById('mobile-itenery').style.display="block";
				        	 
			        	/* if( $scope.founds=="0"){
		         			 $scope.movePaymentPage(data[0].flightResponse[0].Flights.FlightId);
		         		 }*/
			         	 
			         }   
			         
			         $scope.numberOfPages=function(){
        				return Math.ceil($scope.matrix.length/$scope.pageSize);                
    					}
						
						        if($scope.responseStatus.ErrorDescription == "BlackListedCountry"){
						              $scope.blackListedCountry=  [new String('Item 5')];
									   if ($scope.cityPair.indexOf("null") != -1) {
										  var url = "/";
      								      $window.location.href = url;
									  }
									 var url = "/noResult/NO"+$scope.cityPair;
      								  $window.location.href = url;
						        }
						        
						        if($scope.responseStatus.ErrorDescription == "InternalError: Internal Error"){
						              $scope.noResultFound= [new String('Item 5')];
									  if ($scope.cityPair.indexOf("null") != -1) {
										  var url = "/";
      								      $window.location.href = url;
									  }
						             var url = "/";
      								  $window.location.href = url;
						        }
						         if($scope.responseStatus.ErrorDescription == "NO ITINERARY FOUND FOR REQUESTED SEGMENT 1"){
						             $scope.noResultFound= [new String('Item 5')];
									 if ($scope.cityPair.indexOf("null") != -1) {
										  var url = "/";
      								      $window.location.href = url;
									  }
									 var url = "/noResult/NO"+$scope.cityPair;
      								  $window.location.href = url;
						        }
						       
						        if($scope.responseStatus.ErrorDescription == "Unknown City/Airport"){
						             $scope.noResultFound= [new String('Item 5')];
									 if ($scope.cityPair.indexOf("null") != -1) {
										  var url = "/";
      								      $window.location.href = url;
									  }
									 var url = "/noResult/NO"+$scope.cityPair;
      								  $window.location.href = url;
						        }
						         if($scope.responseStatus.Status == "1"){
						             $scope.noResultFound= [new String('Item 5')];
									 if ($scope.cityPair.indexOf("null") != -1) {
										  var url = "/";
      								      $window.location.href = url;
									  }else{
									 var url = "/noResult/NO"+$scope.cityPair;
      								  $window.location.href = url;
									  }
						        }
						   
						        angular.forEach($scope.matrix, function(tech) {
						          if(tech.multi == 0){
						          if ($scope.airline.indexOf(tech) == -1) {
						            $scope.airline.push(tech.airlineName);
						           
						          }
						          }else{
						        	  $scope.mixAir=true;
						          }
						        });
						         $scope.dtoCity = document.getElementById('dtoCity').value;
						         $scope.stoCity = document.getElementById('stoCity').value;
								$scope.redirectToHotel = function () {
								      var url = "/hotelSearch/city/"+$scope.stoCity;
					                $window.open(url, '_blank');
					            };
					            $scope.provider = [];
					            $scope.cabins=[];
					            $scope.ConnectionTimess=[];
					            $scope.cabinsfound=0;
					            $scope.displayCab= false;
					            $scope.searchCabin="Economy";
					            $scope.displayCabin="Same";
					            $scope.cabinsList=[{id: 1,name : "Economy"},{id: 2,name : "PremiumEconomy"},{id: 3,name : "Business"},{id: 4,name : "First"},{id: 6,name : "StandardEconomy"},];
					            $scope.removeSpace = function(str) {
					           	 return str.replace(/ /g,"").replace("↵","");
					            };
					            angular.forEach($scope.list, function(Flighth, index) {
							          var layover=["None"];
							          if ($scope.provider.indexOf(Flighth.Gds) == -1) {
							            $scope.provider.push(Flighth.Gds);
							          }
									  
									  var departFlight = Flighth.OutSegments;
									   var returnFlight = Flighth.InSegments;
									   
                                       							           
									   angular.forEach(departFlight, function(Segments, index) {
											
											if(index==1){
												if (layover.indexOf(departFlight[0].destinationAirport) == -1) {
													layover.push(departFlight[0].destinationAirport);
													if($scope.layOverAirport.indexOf($scope.getAirportName(departFlight[0].destinationAirport)+"("+departFlight[0].destinationAirport+")") == -1) {
													$scope.layOverAirport.push($scope.getAirportName(departFlight[0].destinationAirport)+"("+departFlight[0].destinationAirport+")");
												    }
													}
												if (layover.indexOf(Segments.originAirport) == -1) {
													layover.push(Segments.originAirport);
													if($scope.layOverAirport.indexOf($scope.getAirportName(Segments.originAirport)+"("+Segments.originAirport+")") == -1) {
													$scope.layOverAirport.push($scope.getAirportName(Segments.originAirport)+"("+Segments.originAirport+")");
												    }
												}
												
											}else if(index==2){
												if (layover.indexOf(departFlight[1].destinationAirport) == -1) {
													layover.push(departFlight[1].destinationAirport);
													if($scope.layOverAirport.indexOf($scope.getAirportName(departFlight[1].destinationAirport)+"("+departFlight[1].destinationAirport+")") == -1) {
													$scope.layOverAirport.push($scope.getAirportName(departFlight[1].destinationAirport)+"("+departFlight[1].destinationAirport+")");
												    }
												}
												if (layover.indexOf(Segments.originAirport) == -1) {
													layover.push(Segments.originAirport);
													if($scope.layOverAirport.indexOf($scope.getAirportName(Segments.originAirport)+"("+Segments.originAirport+")") == -1) {
													$scope.layOverAirport.push($scope.getAirportName(Segments.originAirport)+"("+Segments.originAirport+")");
												    } 
												}
												
											} 
											
										   
									   });
									   
									   angular.forEach(returnFlight, function(Segments, index) {
											
											if(index==1){
												if (layover.indexOf(returnFlight[0].destinationAirport) == -1) {
													layover.push(returnFlight[0].destinationAirport);
													if($scope.layOverAirport.indexOf($scope.getAirportName(returnFlight[0].destinationAirport)+"("+returnFlight[0].destinationAirport+")") == -1) {
													$scope.layOverAirport.push($scope.getAirportName(returnFlight[0].destinationAirport)+"("+returnFlight[0].destinationAirport+")");
												    }
												}
												if (layover.indexOf(Segments.originAirport) == -1) {
													layover.push(Segments.originAirport);
													if($scope.layOverAirport.indexOf($scope.getAirportName(Segments.originAirport)+"("+Segments.originAirport+")") == -1) {
													$scope.layOverAirport.push($scope.getAirportName(Segments.originAirport)+"("+Segments.originAirport+")");
												    }
												}
											}else if(index==2){
												if (layover.indexOf(returnFlight[1].destinationAirport) == -1) {
													layover.push(returnFlight[1].destinationAirport);
													if($scope.layOverAirport.indexOf($scope.getAirportName(returnFlight[1].destinationAirport)+"("+returnFlight[1].destinationAirport+")") == -1) {
													$scope.layOverAirport.push($scope.getAirportName(returnFlight[1].destinationAirport)+"("+returnFlight[1].destinationAirport+")");
												    }
												}
												if (layover.indexOf(Segments.originAirport) == -1) {
													layover.push(Segments.originAirport);
													if($scope.layOverAirport.indexOf($scope.getAirportName(Segments.originAirport)+"("+Segments.originAirport+")") == -1) {
													$scope.layOverAirport.push($scope.getAirportName(Segments.originAirport)+"("+Segments.originAirport+")");
												    }
												}
											} 
											
										   
									   });
									   
									   Flighth['layover']=layover;
									  
									   
							          if((Flighth.TotLayover/60) == 0){
							        	  if ($scope.ConnectionTimess.indexOf(1) == -1) {
							        	  $scope.ConnectionTimess.push(1);
							        	  if($scope.ConnectionTimeValue<1){
							        	  $scope.ConnectionTimeValue=1;
			  	                    		$scope.ConnectionMaxTimeValue=1;
							        	  }
							        	  }
			  	                       }else{
			  	                    	 var ConnectionTi =(Flighth.TotLayover/60).toString();
			  	                    	
			  	                    	if ($scope.ConnectionTimess.indexOf(parseInt(ConnectionTi.split('.')[0])+1) == -1) {
			  	                    	 $scope.ConnectionTimess.push(parseInt(ConnectionTi.split('.')[0])+1);
			  	                    	 if($scope.ConnectionTimeValue<parseInt(ConnectionTi.split('.')[0])+1){
			  	                    		$scope.ConnectionTimeValue=parseInt(ConnectionTi.split('.')[0])+1;
			  	                    		$scope.ConnectionMaxTimeValue=parseInt(ConnectionTi.split('.')[0])+1;
			  	                    	 }
			  	                    	}
			  	                       }
							       
							         if(index == 0){
							        	 $scope.searchCabin = Flighth.BookingClass;
							        	
							         }
							       
							         angular.forEach($scope.cabinsList, function(cabinsL) {
							        	
							        	  if(cabinsL.id == $scope.searchCabin){
							        		  $scope.searchCabin=cabinsL.name;
							        	  }
							        	 
							          })
							        
							         
							          
							          if(Flighth.ResultCabin.indexOf(",") == -1){
							        	  if ($scope.cabins.indexOf(Flighth.ResultCabin) == -1) {
							     				 
						     				  if($scope.searchCabin === Flighth.ResultCabin){
						     					 
						     					 $scope.cabinsfound=1;
						     					 $scope.cabinList.push({id: 1, name:Flighth.ResultCabin});
						     				  }else{
						     					 $scope.cabinList.push({id: 1, name:Flighth.ResultCabin});
						     				  }
						     				 $scope.cabins.push(Flighth.ResultCabin);
						     			  }
							          }else{
							        	  if ($scope.cabins.indexOf("Mixed") == -1) {
							        		  $scope.cabinList.push({id: 1, name:'Mixed'});
						     				  $scope.cabins.push("Mixed");
						     				 $scope.displayCabin="Mixed";
						     			  }
							        	  if(Flighth.ResultCabin.indexOf(",") != -1){
							        	  var arr = Flighth.ResultCabin.split(',');
							     		   for(var i=0;i< arr.length;i++)
							                {
							        	  if ($scope.cabins.indexOf(arr[i]) == -1) {
						     				  if($scope.searchCabin === arr[i]){
						     					 $scope.cabinsfound=1;
						     				  }else{
						     				  }
						     			  }
							                }
							          }
							          }
							         
							          
							      	/*var arr = Flighth.ResultCabin.split(',');
						     		   for(var i=0;i< arr.length;i++)
						                {
						     			  if ($scope.cabins.indexOf(arr[i]) == -1) {
						     				 
						     				  if($scope.searchCabin === arr[i]){
						     					 //console.log("found");
						     					 $scope.cabinsfound=1;
						     					 $scope.cabinList.push({id: 1, name:$scope.removeSpace(arr[i])});
						     				  }else{
						     					 $scope.cabinList.push({id: 1, name:$scope.removeSpace(arr[i])});
						     				  }
						     				 $scope.cabins.push(arr[i]);
						     			  }
						     			 
						                }*/
							        });
					            
								
								angular.forEach($scope.matrix, function (airline) {
									if($scope.searchstatus !="intl" && $scope.searchCabin == 'Economy'){
										if((airline.airlineName == "AC" || airline.airlineName == "AA") && airline.multi==0){
											
											if(airline.airlineName == "AC") {
												$scope.fxlText="Save Big on Air Canada Flights.";
											} else if(airline.airlineName == "AA"){
												$scope.fxlText="Save Big on American Airline Flights.";
											} 
											
											$scope.fxlContract = false;
											if($scope.fxlAirline == "") {												
												$scope.fxlAirline = airline.airlineName;
											}else if($scope.fxlAirline != airline.airlineName) {												
												$scope.fxlText="Save Big on Flight Tickets.";
											}											
										}
									}
								});
					            $scope.$watch($scope.ConnectionMaxTimeValue, function(){
					            	$scope.ConnectionTimeValue=$scope.ConnectionMaxTimeValue;
					            	 setTimeout(function(){
					         			$scope.$apply(function () {
					         				$scope.ConnectionTimeValue=$scope.ConnectionMaxTimeValue;
					         				angular.element(document.querySelector('#connTimeOut')).val($scope.ConnectionTimeValue);
					         			});
					         		
					               },800);
					            
					            });
					            
					            if($scope.cabinList.length>1){
					            	$scope.displayCabin = "Mixed";
					            	
					            }
					            if($scope.cabinList.length==1){
					            	 if($scope.displayCabin=="Mixed"){
							            	 $scope.cabinList.push({id: 0, name:$scope.searchCabin});
							            }
					            }
					            
					            if($scope.cabinsfound==0){
					            	$scope.displayCabin = "NotSame";
					            	 $scope.cabinList.push({id: 0, name:$scope.searchCabin});
					            }
					            
					            if($scope.displayCabin == "Same" && $scope.cabinList.length==1){
					            	
					            }
							 
					            if( $scope.displayCabin == "Mixed"){
						        	  $scope.displayCab= true;
								         document.getElementById('cabinPPC').style.display="block";
								    	 document.getElementById('cabinPPC').innerHTML="Result include mixed cabin class flights. Use the cabin class filter to limit results.";
					        	  }
						          if( $scope.displayCabin == "NotSame"){
						        	  $scope.displayCab= true;
								         document.getElementById('cabinPPC').style.display="block";
								    	 document.getElementById('cabinPPC').innerHTML=$scope.searchCabin+" class is not available on this itineary.  Alternate options are below. Use the cabin class filter to limit results.";
					        	  }
					            $scope.changeList = function () {
									$scope.currentPage=0;
					                var myEl = angular.element( document.querySelector( '#slR' ) );
									myEl.removeClass('active');
									 var amyEl = angular.element( document.querySelector( '#aslR' ) );
									amyEl.removeClass('bg-clor');
									$scope.mixAir=false;
									
									var nbr = angular.element( document.querySelector( '#nbr' ) );
									nbr.removeClass('active');
									var anbr = angular.element( document.querySelector( '#nbr' ) );
									anbr.removeClass('bg-clor');
									
									var alr = angular.element( document.querySelector( '#alr' ) );
									alr.addClass('active');
									var aalr = angular.element( document.querySelector( '#aalr' ) );
									aalr.addClass('bg-clor');
									
							    	$scope.tabs = 2;
								    $scope.list=$scope.flexlist;
								     $scope.matrix=$scope.matrixFxlist;
								      $scope.airline = [];
								       $scope.filterAirline = {};
									   $scope.filterlayover = {};
									   	$scope.filterTimesret= {};
										$scope.filterTimesdept= {};
										$scope.filterReturnAirport= {};
										$scope.filterdepartAirport= {};
										$scope.filterCabin= {};
								       $scope.clearMixAirline();
								      
								        
								        angular.forEach($scope.matrix, function(tech) {
									          if(tech.multi == 0){
									          if ($scope.airline.indexOf(tech) == -1) {
									            $scope.airline.push(tech.airlineName);
									           
									          }
									          }else{
									        	  $scope.mixAir=true;
									          }
									        });
								        
								        

								        angular.forEach($scope.list, function(Flighth, index) {
								        	Flighth.PriceDiff=0.0;
									         if(Math.ceil($scope.upper_price_slider)  < Math.ceil(Flighth.PersonFare)){
									        	 $scope.upper_price_bound =Flighth.PersonFare;
										         $scope.upper_price_slider =Math.ceil(Flighth.PersonFare);
										         var MaxValue = document.getElementById('MaxValue'); 
										         MaxValue.value=Math.ceil(Flighth.PersonFare);
									        	 
									         }
									       if(index == 0){
									        var placeholder2 = document.getElementById('angularvalue'); //working
									        $scope.lower_price_slider = Math.floor(Flighth.PersonFare);
								           placeholder2.innerHTML = Flighth.PersonFare; 
								           $scope.google_price_bound= Flighth.PersonFare;
								           var lowerValue = document.getElementById('lowerValue'); 
								           lowerValue.value=Math.floor(Flighth.PersonFare);
								           
								           $scope.upper_price_bound =Flighth.PersonFare;
									         $scope.upper_price_slider =Math.ceil(Flighth.PersonFare);
									         var MaxValue = document.getElementById('MaxValue'); 
									         MaxValue.value=Math.ceil(Flighth.PersonFare);
									         
								           }else{
								        	   if(Math.floor($scope.lower_price_slider)  > Math.floor(Flighth.PersonFare)){
								        		   var placeholder2 = document.getElementById('angularvalue'); //working
										              $scope.lower_price_slider = Math.floor(Flighth.PersonFare);
									                  placeholder2.innerHTML = Flighth.PersonFare; 
									                  $scope.google_price_bound= Flighth.PersonFare;
									                 var lowerValue = document.getElementById('lowerValue'); 
									                  lowerValue.value=Math.floor(Flighth.PersonFare);
								        	  
								           }
								           }
								      });
								    
								        $scope.$watch($scope.lower_price_slider, function(){
						            	      $scope.lower_price_slider_cur = Math.floor($scope.lower_price_slider * $scope.conversionRatio);
						           		      $scope.upper_price_slider_cur = Math.ceil($scope.upper_price_slider * $scope.conversionRatio);
						           		      
						    	       	      $(".min-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>"+$scope.lower_price_slider_cur);
						    	       	      $(".max-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" +$scope.upper_price_slider_cur);
						    	       	   $scope.clearFilter();
								      });
								        
					            };
					            
					             $scope.nearBySearch = function () {
									 $scope.currentPage=0;
					               var myEl = angular.element( document.querySelector( '#slR' ));
									myEl.removeClass('active');
								//	 var amyEl = angular.element( document.querySelector( '#aslR' ) );
									 
								//	amyEl.removeClass('bg-clor');
									
									var nbr = angular.element( document.querySelector( '#nbr' ) );
									nbr.addClass('active');
								//	var anbr = angular.element( document.querySelector( '#anbr' ) );
								//	anbr.addClass('bg-clor');
									
									var alr = angular.element( document.querySelector( '#alr' ) );
									alr.removeClass('active');
								//	var aalr = angular.element( document.querySelector( '#aalr' ) );
								//	aalr.removeClass('bg-clor');
									 $scope.mixAir=false;
                                	 $scope.tabs = 2;
								     $scope.list=$scope.nearBylist;
								     $scope.matrix=$scope.matrixNBlist;
								     $scope.airline = [];
								     $scope.filterAirline = {};
									 $scope.filterlayover = {};
									 $scope.filterTimesret= {};
									 $scope.filterTimesdept= {};
									 $scope.filterReturnAirport= {};
									 $scope.filterdepartAirport= {};
									 $scope.filterCabin= {};
								     $scope.clearMixAirline();
								     //   console.log("nearBylist:"+$scope.list);
								     /*angular.forEach($scope.matrix, function(tech) {
						     
						          if ($scope.airline.indexOf(tech) == -1) {
						                $scope.airline.push(tech.airlineName);
						          }
						        });*/
								     
								     angular.forEach($scope.matrix, function(tech) {
								          if(tech.multi == 0){
								          if ($scope.airline.indexOf(tech) == -1) {
								            $scope.airline.push(tech.airlineName);
								          }
								          }else{
								        	  $scope.mixAir=true;
								          }
								        });
								     
								     angular.forEach($scope.list, function(Flighth, index) {
								    	 Flighth.PriceDiff=0.0;
								         if(Math.ceil($scope.upper_price_slider)  < Math.ceil(Flighth.PersonFare)){
								        	 $scope.upper_price_bound =Flighth.PersonFare;
									         $scope.upper_price_slider =Math.ceil(Flighth.PersonFare);
									         var MaxValue = document.getElementById('MaxValue'); 
									         MaxValue.value=Math.ceil(Flighth.PersonFare);
								        	 
								         }
								       if(index == 0){
								        var placeholder2 = document.getElementById('angularvalue'); //working
								        $scope.lower_price_slider = Math.floor(Flighth.PersonFare);
							           placeholder2.innerHTML = Flighth.PersonFare; 
							           $scope.google_price_bound= Flighth.PersonFare;
							           var lowerValue = document.getElementById('lowerValue'); 
							           lowerValue.value=Math.floor(Flighth.PersonFare);
							           
							           $scope.upper_price_bound =Flighth.PersonFare;
								         $scope.upper_price_slider =Math.ceil(Flighth.PersonFare);
								         var MaxValue = document.getElementById('MaxValue'); 
								         MaxValue.value=Math.ceil(Flighth.PersonFare);
								         
							           }else{
							        	   if(Math.floor($scope.lower_price_slider)  > Math.floor(Flighth.PersonFare)){
							        		   var placeholder2 = document.getElementById('angularvalue'); //working
									              $scope.lower_price_slider = Math.floor(Flighth.PersonFare);
								                  placeholder2.innerHTML = Flighth.PersonFare; 
								                  $scope.google_price_bound= Flighth.PersonFare;
								                 var lowerValue = document.getElementById('lowerValue'); 
								                  lowerValue.value=Math.floor(Flighth.PersonFare);
							        	  
							           }
							           }
							      });
								     
								     $scope.$watch($scope.lower_price_slider, function(){
					            	      $scope.lower_price_slider_cur = Math.floor($scope.lower_price_slider * $scope.conversionRatio);
					           		      $scope.upper_price_slider_cur = Math.ceil($scope.upper_price_slider * $scope.conversionRatio);
					           		      
					    	       	      $(".min-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>"+$scope.lower_price_slider_cur);
					    	       	      $(".max-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" +$scope.upper_price_slider_cur);
					    	       	   $scope.clearFilter();
							      });
								     
								     
					            };
					            
					          var currencyConvRate = document.getElementById('currencyConvRate'); //working
					          $scope.conversionRatio = currencyConvRate.value;
					          var xchangeCurrencyCode = document.getElementById('xchangeCurrencyCode'); //working
					          
					      	  $scope.xclass = xchangeCurrencyCode.value;
					      	  //console.log("Cur sign:" +$scope.xclass);
					      	  
					      	  $scope.$watch($scope.xclass, function (){  
				      		    $scope.dollar = $scope.xclass.toLowerCase();
					      	 });
					      	  
		 		    	           //document.getElementById("curCode").innerHTML = $scope.xclass;
					             $scope.mainList = function () {
									 $scope.currentPage=0;
									
					                var myEl = angular.element( document.querySelector( '#slR' ) );
									myEl.addClass('tabactive');
									var amyEl = angular.element( document.querySelector( '#aslR' ) );
									amyEl.addClass('bg-clor');
									 $scope.mixAir=false;
									var nbr = angular.element( document.querySelector( '#nbr' ) );
									nbr.removeClass('tabactive');
									var anbr = angular.element( document.querySelector( '#anbr' ) );
									anbr.removeClass('bg-clor');
									
									var alr = angular.element( document.querySelector( '#alr' ) );
									alr.removeClass('tabactive');
									var aalr = angular.element( document.querySelector( '#aalr' ) );
									aalr.removeClass('bg-clor');
                                    $scope.tabs = 1;
								    $scope.list=$scope.mainlist;
								    $scope.matrix=$scope.matrixlist;
								    $scope.airline = [];
								    $scope.ConnectionTimeValue = $scope.ConnectionMaxTimeValue;
								   // console.log($scope.ConnectionTimeValue);
								    $scope.filterAirline = {};
									$scope.filterlayover = {};
									$scope.filterTimesret= {};
									$scope.filterTimesdept= {};
									$scope.filterReturnAirport= {};
									$scope.filterdepartAirport= {};
									$scope.filterCabin= {};
								    $scope.clearMixAirline();
								   /* angular.forEach($scope.matrix, function(tech) {
						     
						          if ($scope.airline.indexOf(tech) == -1) {
						              $scope.airline.push(tech.airlineName);
						          }
						        });
								    */
								    angular.forEach($scope.matrix, function(tech) {
								          if(tech.multi == 0){
								          if ($scope.airline.indexOf(tech) == -1) {
								            $scope.airline.push(tech.airlineName);
								          }
								          }else{
								        	  $scope.mixAir=true;
								          }
								        });
								    
								    
								     
								    angular.forEach($scope.list, function(Flighth, index) {
								         if(Math.ceil($scope.upper_price_slider)  < Math.ceil(Flighth.PersonFare)){
								        	 $scope.upper_price_bound =Flighth.PersonFare;
									         $scope.upper_price_slider =Math.ceil(Flighth.PersonFare);
									         var MaxValue = document.getElementById('MaxValue'); 
									         MaxValue.value=Math.ceil(Flighth.PersonFare);
								        	 
								         }
								       if(index == 0){
								        var placeholder2 = document.getElementById('angularvalue'); //working
								        $scope.lower_price_slider = Math.floor(Flighth.PersonFare);
							           placeholder2.innerHTML = Flighth.PersonFare; 
							           $scope.google_price_bound= Flighth.PersonFare;
							           var lowerValue = document.getElementById('lowerValue'); 
							           lowerValue.value=Math.floor(Flighth.PersonFare);
							           
							           $scope.upper_price_bound =Flighth.PersonFare;
								         $scope.upper_price_slider =Math.ceil(Flighth.PersonFare);
								         var MaxValue = document.getElementById('MaxValue'); 
								         MaxValue.value=Math.ceil(Flighth.PersonFare);
								         
							           }else{
							        	   if(Math.floor($scope.lower_price_slider)  > Math.floor(Flighth.PersonFare)){
							        		   var placeholder2 = document.getElementById('angularvalue'); //working
									              $scope.lower_price_slider = Math.floor(Flighth.PersonFare);
								                  placeholder2.innerHTML = Flighth.PersonFare; 
								                  $scope.google_price_bound= Flighth.PersonFare;
								                 var lowerValue = document.getElementById('lowerValue'); 
								                  lowerValue.value=Math.floor(Flighth.PersonFare);
							        	  
							           }
							           }
							      });
								    
								    $scope.$watch($scope.lower_price_slider, function(){
					            	      $scope.lower_price_slider_cur = Math.floor($scope.lower_price_slider * $scope.conversionRatio);
					           		      $scope.upper_price_slider_cur = Math.ceil($scope.upper_price_slider * $scope.conversionRatio);
					           		      
					    	       	      $(".min-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>"+$scope.lower_price_slider_cur);
					    	       	      $(".max-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" +$scope.upper_price_slider_cur);
					    	       	   $scope.clearFilter();
							      });
					            };
					            
								$scope.shortestFlightFare = $filter('orderBy')($scope.list, 'TotalEFT')[0].PersonFare;
			
								$scope.shortestFlightList = function (keyname) {
									$scope.currentPage=0;
									
					                 $scope.mixAir=false;
									$scope.tabs = 1;
								    $scope.list=$scope.mainlist;
								    $scope.matrix=$scope.matrixlist;
								    $scope.airline = [];
								    $scope.ConnectionTimeValue = $scope.ConnectionMaxTimeValue;
								   // console.log($scope.ConnectionTimeValue);
								    $scope.filterAirline = {};
									$scope.filterlayover = {};
									$scope.filterTimesret= {};
									$scope.filterTimesdept= {};
									$scope.filterReturnAirport= {};
									$scope.filterdepartAirport= {};
									$scope.filterCabin= {};
								    $scope.clearMixAirline();
								   /* angular.forEach($scope.matrix, function(tech) {
						     
						          if ($scope.airline.indexOf(tech) == -1) {
						              $scope.airline.push(tech.airlineName);
						          }
						        });
								    */
								    angular.forEach($scope.matrix, function(tech) {
								          if(tech.multi == 0){
								          if ($scope.airline.indexOf(tech) == -1) {
								            $scope.airline.push(tech.airlineName);
								          }
								          }else{
								        	  $scope.mixAir=true;
								          }
								        });
								    
								    
								     
								    angular.forEach($scope.list, function(Flighth, index) {
								         if(Math.ceil($scope.upper_price_slider)  < Math.ceil(Flighth.PersonFare)){
								        	 $scope.upper_price_bound =Flighth.PersonFare;
									         $scope.upper_price_slider =Math.ceil(Flighth.PersonFare);
									         var MaxValue = document.getElementById('MaxValue'); 
									         MaxValue.value=Math.ceil(Flighth.PersonFare);
								        	 
								         }
								       if(index == 0){
								        var placeholder2 = document.getElementById('angularvalue'); //working
								        $scope.lower_price_slider = Math.floor(Flighth.PersonFare);
							           placeholder2.innerHTML = Flighth.PersonFare; 
							           $scope.google_price_bound= Flighth.PersonFare;
							           var lowerValue = document.getElementById('lowerValue'); 
							           lowerValue.value=Math.floor(Flighth.PersonFare);
							           
							           $scope.upper_price_bound =Flighth.PersonFare;
								         $scope.upper_price_slider =Math.ceil(Flighth.PersonFare);
								         var MaxValue = document.getElementById('MaxValue'); 
								         MaxValue.value=Math.ceil(Flighth.PersonFare);
								         
							           }else{
							        	   if(Math.floor($scope.lower_price_slider)  > Math.floor(Flighth.PersonFare)){
							        		   var placeholder2 = document.getElementById('angularvalue'); //working
									              $scope.lower_price_slider = Math.floor(Flighth.PersonFare);
								                  placeholder2.innerHTML = Flighth.PersonFare; 
								                  $scope.google_price_bound= Flighth.PersonFare;
								                 var lowerValue = document.getElementById('lowerValue'); 
								                  lowerValue.value=Math.floor(Flighth.PersonFare);
							        	  
							           }
							           }
							      });
								    
								    $scope.$watch($scope.lower_price_slider, function(){
					            	      $scope.lower_price_slider_cur = Math.floor($scope.lower_price_slider * $scope.conversionRatio);
					           		      $scope.upper_price_slider_cur = Math.ceil($scope.upper_price_slider * $scope.conversionRatio);
					           		      
					    	       	      $(".min-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>"+$scope.lower_price_slider_cur);
					    	       	      $(".max-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" +$scope.upper_price_slider_cur);
					    	       	   $scope.clearFilter();
							      });
								  
									$timeout( function(){ $scope.sortKey = keyname;  }, 1000);
								}
					           // console.log("couponsPopup:"+$scope.couponsPopup);
					            if($scope.couponsPopup != "X"){
					            	document.getElementById('couponsPopup').style.display="block";
					            	var totPax =  document.getElementById('totPax').value;
					            	 document.getElementById("couponsCode").innerHTML = $scope.couponsPopup.split(',')[1]*totPax;	
					            }
					            
					            
						      angular.forEach(data, function(Fli) {
						        angular.forEach(Fli.flightResponse, function(Flighth, index) {
						        	

								       
							         
							         if(Math.ceil($scope.upper_price_slider)  < Math.ceil(Flighth.PersonFare)){
							        	 $scope.upper_price_bound =Flighth.PersonFare;
								         $scope.upper_price_slider =Math.ceil(Flighth.PersonFare);
								      //   console.log("upper_price_slider:"+Math.floor(Flighth.PersonFare));
								         var MaxValue = document.getElementById('MaxValue'); 
								         MaxValue.value=Math.ceil(Flighth.PersonFare);
							        	 
							         }
							       if(index == 0){
							        var placeholder2 = document.getElementById('angularvalue'); //working
							        $scope.lower_price_slider = Math.floor(Flighth.PersonFare);
						           placeholder2.innerHTML = Flighth.PersonFare; 
						           $scope.google_price_bound= Flighth.PersonFare;
						           var lowerValue = document.getElementById('lowerValue'); 
						           lowerValue.value=Math.floor(Flighth.PersonFare);
						           
					             $scope.upper_price_bound = Flighth.PersonFare * $scope.conversionRatio;
							         $scope.upper_price_slider =Math.ceil(Flighth.PersonFare);
							      //   console.log("upper_price_slider:"+$scope.upper_price_slider);
							         var MaxValue = document.getElementById('MaxValue'); 
							         MaxValue.value=Math.ceil(Flighth.PersonFare);
							         
						           }else{
						        	  // console.log(Math.floor($scope.lower_price_slider));
						        	  // console.log(Math.floor(Flighth.PersonFare));
						        	 //  console.log("******************");
						        	   if(Math.floor($scope.lower_price_slider)  > Math.floor(Flighth.PersonFare)){
						        		  // console.log(Math.floor(Flighth.PersonFare));
						        		   var placeholder2 = document.getElementById('angularvalue'); //working
								              $scope.lower_price_slider = Math.floor(Flighth.PersonFare);
							                  placeholder2.innerHTML = Flighth.PersonFare; 
							                  $scope.google_price_bound= Flighth.PersonFare;
							                 var lowerValue = document.getElementById('lowerValue'); 
							                  lowerValue.value=Math.floor(Flighth.PersonFare);
						        	  
						           }
						           }
							      
							      
							   /*    
						      
							         $scope.upper_price_bound = Flighth.PersonFare * $scope.conversionRatio;
							      
						        $scope.upper_price_bound =Flighth.PersonFare;
						        $scope.upper_price_slider =Math.ceil(Flighth.PersonFare);
						        var MaxValue = document.getElementById('MaxValue'); 
						        MaxValue.value=Math.ceil(Flighth.PersonFare);
						       if(index == 0){
						          var placeholder2 = document.getElementById('angularvalue'); //working
						              $scope.lower_price_slider = Math.floor(Flighth.PersonFare);
					                  placeholder2.innerHTML = Flighth.PersonFare; 
					                  $scope.google_price_bound= Flighth.PersonFare;
					              var lowerValue = document.getElementById('lowerValue'); 
					                  lowerValue.value=Math.floor(Flighth.PersonFare);
					           }*/
						       //console.log(Math.floor(Flighth.PersonFare));
					        	  
						       //console.log("dd:"+$scope.ConnectionTimeValue);
						        //$scope.filterList.push({airlineId: $scope.airlineId, flightId: Flighth.FlightId});
						      });
						    });
						 $scope.$watch('conversionRatio', function(){
		            	      $scope.lower_price_slider_cur = Math.floor($scope.lower_price_slider * $scope.conversionRatio);
		           		      $scope.upper_price_slider_cur = Math.ceil($scope.upper_price_slider * $scope.conversionRatio);
		           		      
		    	       	      $(".min-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>"+$scope.lower_price_slider_cur);
		    	       	      $(".max-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" +$scope.upper_price_slider_cur);
				      });
						    
       $("#price-range").slider({
    	  
                range: true,
                min: $scope.lower_price_slider,
                max: $scope.upper_price_slider,
                values: [ $scope.lower_price_slider, $scope.upper_price_slider ],
                slide: function( event, ui ) {
                	
                $(".min-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" + Math.floor(ui.values[0] * $scope.conversionRatio)); 
                $(".max-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" + Math.ceil(ui.values[1] * $scope.conversionRatio));
                     var scope = angular.element(document.getElementById('MainController')).scope();
                     scope.$apply(function() {
                             scope.lower_price_bound = ui.values[0];
						     scope.upper_price_bound = ui.values[1];
					  });
                   
                }
       
            });
  
			$(".min-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" + $("#price-range").slider( "values", 0 ));
            $(".max-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" + $("#price-range").slider( "values", 1 ));
             document.getElementById('matrixSizeId').value = $scope.matrix.length;
			//$scope.priceRangeList.push({minPrice: $scope.lower_price_bound, maxPrice: $scope.upper_price_bound});
          //  console.log("bbuddykey:"+bbuddykey);
               if(bbuddykey){
            	  // console.log("bbuddykey 2:"+bbuddykey);
			      setTimeout(showEnterPopup, 3000);
			      }
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
    return (parseInt(item.PersonFare) >= parseInt($scope.lower_price_bound) && parseInt(item.PersonFare) <= parseInt($scope.upper_price_bound));
  };
  
   $scope.departRange = function(item) {
    return (parseInt(item.Depart) >= parseInt($scope.lower_depart_bound) && parseInt(item.Depart) <= parseInt($scope.upper_depart_bound));
  }; 
  
  $scope.returnRange = function(item) {
	 
	   if(item.Return === ''){
		   return item;
	   }else{
    return (parseInt(item.Return) >= parseInt($scope.lower_return_bound) && parseInt(item.Return) <= parseInt($scope.upper_return_bound));
	   }
  };
  
  $scope.orderByValue = function (value) {
      return value;
  };
    $scope.filterAirline = {};
	$scope.filterlayover= {};
	$scope.filterTimesret= {};
	$scope.filterTimesdept= {};
	$scope.filterReturnAirport= {};
	$scope.filterdepartAirport= {};
	$scope.filterCabin= {};
	
	
	
    $scope.filterByAirline = function (flights) {
    	//$scope.len=1;
    	//
        return $scope.filterAirline[flights.Airline] || noFilter($scope.filterAirline);
    };
    
    $scope.filterProvider = {};
    $scope.filterByProvider = function (flights) {
        return $scope.filterProvider[flights.Gds] || noFilter($scope.filterProvider);
    };
    
   
    $scope.mixAirline= function (flights) {
	            if (flights.Airline.length>$scope.len ){
	                return flights;
	            }
	};
      

    $scope.filterByStop = function (flights) {
    
        return $scope.selectedStop[flights.Stops] || noFilter($scope.selectedStop);
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
						        
						        angular.forEach(Flighth.Segments, function(tech) {
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
				        $scope.featureddeal = true;
				        $scope.flightsDetails = data;
			    }, function(e) {
                  alert(e.stautsText);
                });
			    
			   }
			   
			   	$scope.FlterByStop = function(id) {
                   var stops = itemsFactory.FlterByStop(id);
  				 //$scope.featureddeal = false;
			  	   stops.then(function (data) {
				   $scope.list=data;
			    }, function(e) {
                  alert(e.stautsText);
                });
			   }
			   
$scope.flightsDetails = {};
    	
   /* $scope.movePaymentPage	 = function(id) {
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
			    
			   }*/
			   
	$scope.movePaymentPage = function(id) {
		   key=false;
	   //console.log("payment id"+id);
	   
	   
     $window.location.href = '/purchase/'+id;
    };
    
    $scope.movePaymentPages = function(id,airline,toll) {
    	    	   key=false;
    	   
    	   //console.log("payment id"+id);
    	   if(airline == 'CCF'){
    		   $window.location.href = 'tel:'+toll;
    	   }else{
    		   $window.location.href = '/purchase/'+id;
    	   }
    	   
        
        };
    		   
			   
    $scope.includeColour = function(colour) {
    
        var i = $.inArray(colour, $scope.colourIncludes);
        if (i > -1) {
            $scope.colourIncludes.splice(i, 1);
        } else {
            $scope.colourIncludes.push(colour);
        }
    }
    $scope.getlayoverCode = function(layover){
		layover=layover.substring(layover.indexOf("(")+1, layover.indexOf(")"));
		return layover;
	}
    $scope.colourFilter = function(flight) {
        return flight;
    }
    
      $scope.signup = function(){
    	  var post_data = {  
					'emailId':$scope.email,
					'alertType':'NewsLetter',
					}
    	  $http.post('/farealert/signup',post_data).success(function(response){
				 if (response.indexOf("already") !=-1) {
    			  alert("Email already exists");
    		  }else{
    			  alert("Successfully verified and signed up the user");
    		  }
				$scope.email = "";
			})
			.error(function(error){
				alert("User verification failed");
			})
      }
     
      $scope.checkAll = function () {
    	  $scope.filterAirline['All'] = true;
      }
  
      $scope.trainContain = function (value) {
		
			if(value.match("TRAIN")) {
			  return true
			} else {
			  return false
			}
	  }
	   $scope.busContain = function (value) {
		
			if(value.match("BUS BUS")) {
			  return true
			} else {
			  return false
			}
	  }
      
      $scope.xclass ='USD';
      $scope.conversionRatio = 1;
      $scope.conversionRatio = document.getElementById("currencyConvRate").value;
      
      $scope.CurrencyCultureChange = function(code,clas)
 	  {	    
    	   // $scope.dollar = clas;
    	   // $scope.flags = flag;
    	  
    	    $scope.list = $scope.mainlist;
    	    var codes = code.toString();
    	    //document.getElementById("curCode").innerHTML = codes;
    	    
    	    var BaseCurrencyCode = document.getElementById("BaseCurrencyCodes").value;
    	    var XchangeCurrencyCode = document.getElementById("XchangeCurrencyCode").value = codes;
    	 
    	    var postData =
    		{
    	    		'BaseCurrencyCode' : BaseCurrencyCode//,
    	    		//'XchangeCurrencyCode' : XchangeCurrencyCode
    		};
    	    
		    if(code !== 'USD') 
		    {
 		       $http.post('/getCurrencyOnLoad/'+XchangeCurrencyCode,postData).success(function(data, status, headers, config)
 		       { 
 		    		  $scope.conversionRatio = data[0].ConversionRatio;
 		    	      var conversionRatio = data[0].ConversionRatio;
 		    	      
 		    	      var currencyConvRate = document.getElementById('currencyConvRate'); //working
 		    	      currencyConvRate.value = $scope.conversionRatio;
			           
 		    	      $scope.xclass = data[0].XchangeCurrencyCode; 
 		    	      
 		    	      var xchangeCurrencyCode = document.getElementById('xchangeCurrencyCode'); //working
 		    	      xchangeCurrencyCode.value = $scope.xclass;
 		    	      
 		    	      $scope.dollar = $scope.xclass.toLowerCase();    //clas;
 		    	     // console.log("$scope.dollar ::: " + $scope.dollar);
 		    	      
 		    	      $scope.response = data;
					
				  })
			      .error(function(data, status, headers, config)
				  {
			    	 //console.log( "Exception details in .error(): " + JSON.stringify({data: data}));
				  })
				 .then(function(){
					 //console.log("$scope.ConversionRatio si ::: " + $scope.conversionRatio);
				  })
    	  }
    	  else
    	  {
		    	 $scope.conversionRatio = 1;
				// console.log("code :: "+code);
				 $scope.xclass ='USD';
				 $scope.dollar ='usd';
				 
				 $scope.NoCurrencyCultureChange = function()
				 {
					     $http.get('/NoCurrencyCultureChange/').success(function(data, status, headers, config)
				 		  { 
					    	  var currencyConvRate = document.getElementById('currencyConvRate').value = $scope.conversionRatio; //working
					      	  var xchangeCurrencyCode = document.getElementById('xchangeCurrencyCode').value = $scope.xclass; //working
						  })
					      .error(function(data, status, headers, config)
						  {
					    	  //console.log( "Exception details in .error(): " + JSON.stringify({data: data}));
						  });
				      }
			       }
 	          };
			  
			  
			  $scope.differenceInDays = function (firstdate,seconddate) {
		        firstdate =  firstdate.split('T');
		        seconddate = seconddate.split('T');
		        var dt1 = firstdate[0].split('-'),
		            dt2 = seconddate[0].split('-'),
		            one = new Date(dt1[0], dt1[1]-1, dt1[2]),
		            two = new Date(dt2[0], dt2[1]-1, dt2[2]);

		        var millisecondsPerDay = 1000 * 60 * 60 * 24;
		        var millisBetween = two.getTime() - one.getTime();
		        var days = millisBetween / millisecondsPerDay;

		        return Math.floor(days);
		    };

 	            
 	         /*self.getCurrency = function()
 	 		 {	
 	 			   var response = $http.post('/getCurrency');
 	 			   response.success(function(data, status, headers, config)
 	 				{
 	 					$scope.getCurrency = data;
 	 				}),
 	 				response.error(function(data, status, headers, config)
 	 				{
 	 					alert( "Exception details: " + JSON.stringify({data: data}));
 	 				});
 	 		 };
 	 		 self.getCurrency();*/
 	            
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

angularTable.filter("commaBreak", function () {

	        return function (value) {

	        	 if(value != undefined){
	        	var regEx = 	 value.split(':');
	        	var hour = regEx[0];
	        	var minutes = regEx[1];
	             	return hour + " hr " + minutes +" min"
	         	} else{ 
	         		return "";
	         	}

	        }

	});

angularTable.filter("operatedBySplit", function () {

	        return function (value) {
				
				if(value.indexOf('(') != -1){
					//console.log(value);
			var airlineCode = value.substring(value.indexOf('(')+1, value.indexOf(')'));
			//console.log("airlineCode is " + airlineCode);
			var ailrlineText1 = value.substring(0,value.indexOf('(')).toLowerCase();
			var ailrlineText2 = value.substring(value.indexOf(')')+1,value.length).toLowerCase();
			//console.log(ailrlineText1);
			//console.log(ailrlineText2);
			var finaltext = ailrlineText1+"("+airlineCode.replace(' ','')+")"+ailrlineText2;
			return finaltext.replace('/','');
			
				}
				else{
					return value.toLowerCase();
				}

	        }

	});



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
		$("#returnDate").hide();
		$("#returnDateLabel").hide();
		//$("#fromCityDiv").removeClass('col-md-2');
		//$("#toCityDiv").removeClass('col-md-2');
		//$("#fromCityDiv").addClass('col-md-3');
		$("#departDateDiv").removeClass('col-md-3').addClass('col-md-5');
		$("#traveller").removeClass('col-md-3').addClass('col-md-4');
		$("#jawEngineLink").css('visibility', 'hidden');
		$("#jawEngineId").hide();
		$("#returnFroCity").val("");
		$("#returnToCity").val("");
		
		
	}
	else {
		$("input[name='toDate']").prop("disabled", false);
		$("#returnDate").show();
		$("#returnDateLabel").show();
		$("#departDateDiv").removeClass('col-md-5').addClass('col-md-3');
		$("#traveller").removeClass('col-md-4').addClass('col-md-3');
		//$("#fromCityDiv").removeClass('col-md-3');
		//$("#toCityDiv").removeClass('col-md-3');
		//$("#fromCityDiv").addClass('col-md-2');
		//$("#toCityDiv").addClass('col-md-2');
		$("#jawEngineLink").css('visibility', 'visible');
		
		//mm-dd-yy
       
        if($("#returnDate").val() == null){
        	  var xs = 7; 
			     
			     var dd=$("#departDate").val().split("-");
		    	  minDate=new Date(dd[2]+"/"+dd[1]+"/"+dd[0]);
		 
		      minDate.setDate(minDate.getDate() + xs);
	        var dt_from = $.datepicker.formatDate('dd-mm-yy', minDate);
	       $("#returnDate").datepicker("change", { minDate: new Date(dd[0]+"-"+dd[1]+"-"+dd[2]) });
	        
	        
		          $("#returnDate").val(dt_from);
        }else  if($("#returnDate").val() == ""){
        	  var xs = 7; 
			     
			     var dd=$("#departDate").val().split("-");
			
		    	  minDate=new Date(dd[2]+"/"+dd[1]+"/"+dd[0]);
				  
		    //  }
		      minDate.setDate(minDate.getDate() + xs);
	        var dt_from = $.datepicker.formatDate('dd-mm-yy', minDate);
	        
	       $("#returnDate").datepicker("change", { minDate: new Date(dd[0]+"-"+dd[1]+"-"+dd[2]) });
	        
		          $("#returnDate").val(dt_from);
				  $("#returnDateText").html(minDate.getDate()+" "+month_names[minDate.getMonth()]+" "+minDate.getFullYear());
        }else{
        	
        	 $("#returnDate").val($("#returnDate").val());
        }
		//$("#returnDate").datepicker.formatDate('mm-dd-yy', new Date($("#departDate").val()))
	}
}


$(document).ready(function() {
	
	if ($("#tripType").val() == "1") {
		/*$("input[name='toDate']").prop("disabled", true);
		$("#returnDate").hide();
		$("#returnDateLabel").hide();
		//$("#fromCityDiv").removeClass('col-md-2');
		//$("#toCityDiv").removeClass('col-md-2');
		//$("#fromCityDiv").addClass('col-md-3');
		//$("#toCityDiv").addClass('col-md-3');
		$("#jawEngineLink").hide();*/
		
		
		$("input[name='toDate']").prop("disabled", true);
		$("#returnDate").hide();
		$("#returnDateLabel").hide();
		//$("#fromCityDiv").removeClass('col-md-2');
		//$("#toCityDiv").removeClass('col-md-2');
		//$("#fromCityDiv").addClass('col-md-3');
		$("#departDateDiv").removeClass('col-md-3').addClass('col-md-5');
		$("#traveller").removeClass('col-md-3').addClass('col-md-4');
		$("#jawEngineLink").css('visibility', 'hidden');
		$("#jawEngineId").css("display", "none");
		
		
		
	}
	if($("#returnFroCity").val() != ""){
		$("#demo").addClass('in');
		$("#jawEngineId").show();
	}
	$("input[type='text']").on("click", function () {
     $(this).select();
  });
/*$("#price-range").slider({
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

*/
 
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
 


}); 


if($("#tripType").val() == 1){
$("input[name='toDate']").prop("disabled", true);
}

function changeTripType(){
	alert("trip value is :: " + $("#tripType").val());
	if($("#tripType").val() == 1){
		$("input[name='toDate']").prop("disabled", false);
		$("#tripType").val(2);
	}
	else{
		$("input[name='toDate']").prop("disabled", true);
		$("#tripType").val(1);
	}
}
var minDate = new Date();
// maxDate = new Date(parseInt("2016", 10), (parseInt("1", 10) - 1) + 11, parseInt("31", 10));
var x = 11; 
var maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + x);

var numMonth = 1;
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
	
	 $("#departDateDiv").click(function() {
	        $('#departDate').datepicker('show'); 
	    });
	    
	 
$( "#departDate" ).datepicker({
  // changeMonth: true,
  // changeYear: true,
numberOfMonths:numberOfMonthValue,
				
  dateFormat:"dd-mm-yy",
  showButtonPanel: true,
  beforeShowDay: function(date) {
               var startDate = $('#departDate').datepicker("getDate");
               var endDate = $('#returnDate').datepicker("getDate");
               var className;


               if (startDate && (date.getTime() == startDate.getTime())) {
                   className = "start-date"
               }
               else if (endDate && (date.getTime() == endDate.getTime())) {
                   className = "end-date";
               }
               else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                   className = "between-date";
               }
               else {
                   className = "";
               }
               
               return [true, className];
           },
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
            $('#returnDate').val($.datepicker.formatDate('dd-mm-yy', new Date(dMin)));
            $("#returnDate").focus();
			$('#returnDate').datepicker('show');
        }
    }
    else {
        $('#returnDate').val($.datepicker.formatDate('dd-mm-yy', new Date(dMin)));
        $("#returnDate").focus();
		$('#returnDate').datepicker('show');
    }
}
}

$("#departDateText").html(dateDepMin.getDate()+" "+month_names[dateDepMin.getMonth()]+" "+dateDepMin.getFullYear());
}
});
});
$(function() {
	
	 $("#returnDateLabel").click(function() {
		 var dateDepMin = $('#departDate').datepicker("getDate");
		  if ($('#tripType').val()=='2'){
		     $("#returnDate").datepicker("change", { minDate: new Date(dateDepMin) }); 
             $('#returnDate').datepicker('show'); 
         }
         
});
	 
	$( "#returnDate" ).datepicker({
	  //changeMonth: true,
	  //changeYear: true,
	  numberOfMonths:numberOfMonthValue,
	   dateFormat:"dd-mm-yy",
	   showButtonPanel: true,
	   beforeShowDay: function(date) {
               var startDate = $('#departDate').datepicker("getDate");
               var endDate = $('#returnDate').datepicker("getDate");
               var className;


               if (startDate && (date.getTime() == startDate.getTime())) {
                   className = "start-date"
               }
               else if (endDate && (date.getTime() == endDate.getTime())) {
                   className = "end-date";
               }
               else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                   className = "between-date";
               }
               else {
                   className = "";
               }
               
               return [true, className];
           },
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
			$("#returnDateText").html(dateRetMin.getDate()+" "+month_names[dateRetMin.getMonth()]+" "+dateRetMin.getFullYear());
        }
	});
  });


 

var form_data = $('#flightSearch').serialize();   
$(document).ready( function () {
	  var airlines="<option value='All'>Airlines</option><option value='AQ'>9 AIR</option><option value='9B'>ACCESRAIL</option><option value='JP'>ADRIA AIRWAYS</option><option value='A3'>AEGEAN AIRLINES</option><option value='EI'>AER LINGUS</option><option value='NG'>AERO CONTRACTORS</option><option value='P5'>AERO REPUBLICA</option><option value='WV'>AERO VIP COMPANHIA TRANSPORTES</option><option value='H4'>AERO4M</option><option value='7L'>AEROCARIBBEAN</option><option value='SU'>AEROFLOT</option><option value='5P'>AEROLINEA PRINCIPAL CHILE</option><option value='AR'>AEROLINEAS ARGENTINAS</option><option value='2K'>AEROLINEAS GALAPAGOS</option><option value='P4'>AEROLINEAS SOSA</option><option value='A8'>AEROLINK UGANDA LIMITED</option><option value='5D'>AEROLITORAL</option><option value='VW'>AEROMAR</option><option value='AM'>AEROMEXICO</option><option value='VH'>AEROPOSTAL</option><option value='V5'>AEROVIAS DAP</option><option value='HN'>AFGHAN JET INTERNATIONAL</option><option value='AW'>AFRICA WORLD AIRLINES</option><option value='8U'>AFRIQIYAH AIRWAYS</option><option value='ZI'>AIGLE AZUR</option><option value='AH'>AIR ALGERIE</option><option value='3S'>AIR ANTILLES EXPRESS</option><option value='G9'>AIR ARABIA</option><option value='E5'>AIR ARABIA EGYPT</option><option value='9P'>AIR ARABIA JORDAN</option><option value='QN'>AIR ARMENIA</option><option value='AK'>AIR ASIA</option><option value='UU'>AIR AUSTRAL</option><option value='W9'>AIR BAGAN</option><option value='BT'>AIR BALTIC</option><option value='AB'>AIR BERLIN</option><option value='BP'>AIR BOTSWANA</option><option value='2J'>AIR BURKINA</option><option value='BX'>AIR BUSAN</option><option value='SM'>AIR CAIRO</option><option value='TY'>AIR CALEDONIE</option><option value='AC'>AIR CANADA</option><option value='TX'>AIR CARAIBES</option><option value='UY'>AIR CAUCASUS</option><option value='CA'>AIR CHINA</option><option value='3E'>AIR CHOICE ONE</option><option value='4F'>AIR CITY</option><option value='XK'>AIR CORSICA</option><option value='HF'>AIR COTE D IVOIRE</option><option value='YN'>AIR CREEBEC</option><option value='EN'>AIR DOLOMITI</option><option value='UX'>AIR EUROPA</option><option value='X4'>Air Excursions</option><option value='ED'>AIR EXPLORE</option><option value='F4'>AIR FLAMENCO</option><option value='AF'>AIR FRANCE</option><option value='ZX'>AIR GEORGIAN</option><option value='GL'>AIR GREENLAND</option><option value='GT'>AIR GUILIN</option><option value='NY'>AIR ICELAND</option><option value='KJ'>AIR INCHEON</option><option value='AI'>AIR INDIA</option><option value='IX'>AIR INDIA EXPRESS</option><option value='3H'>AIR INUIT</option><option value='I9'>AIR ITALY</option><option value='JM'>AIR JAMAICA</option><option value='NQ'>AIR JAPAN</option><option value='K7'>AIR KBZ</option><option value='JS'>AIR KORYO</option><option value='AL'>AIR LEISURE</option><option value='NX'>AIR MACAU</option><option value='MD'>AIR MADAGASCAR</option><option value='KM'>AIR MALTA</option><option value='ZM'>AIR MANAS</option><option value='6T'>AIR MANDALAY</option><option value='CW'>AIR MARSHALL ISLANDS</option><option value='MK'>AIR MAURITIUS</option><option value='MC'>AIR MOBILITY COMMAND</option><option value='9U'>AIR MOLDOVA</option><option value='SW'>AIR NAMIBIA</option><option value='NZ'>AIR NEW ZEALAND</option><option value='PX'>AIR NIUGINI</option><option value='4N'>AIR NORTH</option><option value='YW'>AIR NOSTRUM</option><option value='OP'>AIR PEGASUS</option><option value='GZ'>AIR RAROTONGA</option><option value='PJ'>AIR SAINT PIERRE</option><option value='JU'>AIR SERBIA</option><option value='L4'>AIR SERVICE LIEGE</option><option value='HM'>AIR SEYCHELLES</option><option value='4D'>AIR SINAI</option><option value='VT'>AIR TAHITI</option><option value='TN'>AIR TAHITI NUI</option><option value='TC'>AIR TANZANIA</option><option value='6C'>AIR TIMOR</option><option value='8T'>AIR TINDI</option><option value='TS'>AIR TRANSAT</option><option value='8C'>AIR TRANSPORT INTERNATIONAL</option><option value='3N'>AIR URGA</option><option value='NF'>AIR VANUATU</option><option value='ZW'>AIR WISCONSIN</option><option value='UM'>AIR ZIMBABWE</option><option value='PQ'>AIRASIA PHILIPPINES</option><option value='Z2'>AIRASIA ZEST</option><option value='D7'>AIRASIAX SDN BHD</option><option value='SB'>AIRCALIN</option><option value='SZ'>AIRCOMPANY SOMON AIR</option><option value='HD'>AIRDO</option><option value='QP'>AIRKENYA AVIATION</option><option value='CG'>AIRLINES PNG</option><option value='TL'>AIRNORTH</option><option value='AP'>AIRONE S.P.A.</option><option value='2P'>AIRPHIL EXPRESS</option><option value='FL'>AIRTRAN AIRWAYS</option><option value='J6'>AIRWAYS INTERNATIONAL</option><option value='IS'>AIS AIRLINES B V</option><option value='2B'>AK BARS AERO</option><option value='6L'>AKLAK AIR</option><option value='AS'>ALASKA AIRLINES</option><option value='AZ'>ALITALIA</option><option value='CT'>ALITALIA CITY LINER SPA</option><option value='NH'>ALL NIPPON AIRWAYS</option><option value='G4'>ALLEGIANT AIR</option><option value='9I'>ALLIANCE AIR</option><option value='UJ'>ALMASRIA UNIVERSAL AIRLINES</option><option value='K4'>ALS LTD</option><option value='6I'>ALSIE EXPRESS</option><option value='MZ'>AMAKUSA AIRLINES</option><option value='HP'>AMAPOLA FLYG AB</option><option value='ZP'>AMASZONAS DEL PARAGUAY</option><option value='Z8'>AMASZONAS S.A.</option><option value='AA'>AMERICAN AIRLINES</option><option value='2V'>AMTRAK</option><option value='OY'>ANDES LINEAS AEREAS</option><option value='IP'>APSARA INTERNATIONAL AIR</option><option value='FG'>ARIANA AFGHAN AIRLINES</option><option value='IZ'>ARKIA</option><option value='6A'>ARMENIA AIRWAYS</option><option value='AG'>ARUBA AIRLINES</option><option value='R7'>ASERCA</option><option value='HB'>ASIA ATLANTIC AIRLINES</option><option value='DM'>ASIAN AIR</option><option value='KV'>ASIAN EXPRESS AIRLINE</option><option value='YJ'>ASIAN WINGS AIRWAYS</option><option value='OZ'>ASIANA AIRLINES</option><option value='KP'>ASKY</option><option value='A2'>ASTRA AIRLINES</option><option value='RC'>ATLANTIC AIRWAYS</option><option value='L5'>ATLANTIQUE AIR</option><option value='5Y'>ATLAS AIR</option><option value='KK'>ATLASGLOBAL</option><option value='UI'>AURIC AIR</option><option value='GR'>AURIGNY AIR</option><option value='HZ'>AURORA AIRLINES</option><option value='AU'>AUSTRAL LINEAS AEREAS</option><option value='OS'>AUSTRIAN AIRLINES</option><option value='6V'>AVANZA</option><option value='YK'>AVIA TRAFFIC COMPANY</option><option value='AV'>AVIANCA</option><option value='O6'>AVIANCA BRASIL</option><option value='AO'>AVIANOVA LCC</option><option value='MV'>AVIASTAR MANDIRI</option><option value='GU'>AVIATECA</option><option value='X9'>AVION EXPRESS</option><option value='9V'>AVIOR</option><option value='3R'>AVIOR REGIONAL</option><option value='J2'>AZERBAIJAN AIRLINES</option><option value='AD'>AZUL BRAZILIAN AIRLINES</option><option value='JA'>B H AIRLINES</option><option value='CJ'>BA CITYFLYER</option><option value='J4'>BADR AIRLINES</option><option value='UP'>BAHAMASAIR</option><option value='PG'>BANGKOK AIRWAYS</option><option value='5B'>BASSAKA AIR</option><option value='BO'>BB AIRWAYS</option><option value='JV'>BEARSKIN AIRLINES</option><option value='JD'>BEIJING CAPITAL AIRLINES</option><option value='B2'>BELAVIA</option><option value='L9'>BELLE AIR</option><option value='CH'>BEMIDJI AIRLINES</option><option value='8E'>BERING AIR</option><option value='J8'>BERJAYA AIR</option><option value='8H'>BH AIR</option><option value='BG'>BIMAN BANGLADESH AIRLINE</option><option value='NT'>BINTER CANARIAS</option><option value='0B'>BLUE AIR AIRLINE</option><option value='BZ'>BLUE BIRD AIRWAYS</option><option value='BV'>BLUE PANORAMA AIRLINES</option><option value='KF'>BLUE1</option><option value='BM'>BMI REGIONAL</option><option value='OB'>BOLIVIANA DE AVIACION</option><option value='YB'>BORA JET</option><option value='4B'>BOUTIQUE AIR</option><option value='5Q'>BQB LINEAS AEREAS</option><option value='DC'>BRAATHENS REGIONAL</option><option value='BA'>BRITISH AIRWAYS</option><option value='SN'>BRUSSELS AIRLINES</option><option value='U4'>BUDDHA AIR</option><option value='FB'>BULGARIA AIR</option><option value='H6'>BULGARIAN AIR</option><option value='XM'>C.A.I. FIRST S.P.A.</option><option value='VE'>C.A.I. SECOND S.P.A</option><option value='MO'>CALM AIR INTERNATIONAL</option><option value='QC'>CAMAIR CO</option><option value='K6'>CAMBODIA ANGKOR AIR</option><option value='BD'>CAMBODIA BAYON AIRLINES</option><option value='5T'>CANADIAN NORTH</option><option value='9K'>CAPE AIR</option><option value='BW'>CARIBBEAN AIRLINES</option><option value='KA'>CATHAY DRAGON</option><option value='CX'>CATHAY PACIFIC</option><option value='KX'>CAYMAN AIRWAYS</option><option value='5J'>CEBU PACIFIC</option><option value='C2'>CEIBA INTERCONTINENTAL</option><option value='5Z'>CEMAIR</option><option value='9M'>CENTRAL MOUNTAIN AIR</option><option value='CE'>CHALAIR AVIATION</option><option value='6Q'>CHAM WINGS AIRLINES</option><option value='C5'>CHAMPLAIN ENTERPRISES</option><option value='9H'>CHANGAN AIRLINES</option><option value='RP'>CHAUTAUQUA AIRLINES</option><option value='EU'>CHENGDU AIRLINES</option><option value='CI'>CHINA AIRLINES</option><option value='MU'>CHINA EASTERN AIRLINES</option><option value='G5'>CHINA EXPRESS AIRLINES</option><option value='CZ'>CHINA SOUTHERN AIRLINES</option><option value='PN'>CHINA WEST AIR</option><option value='OQ'>CHONGQING AIRLINES</option><option value='QI'>CIMBER A/S</option><option value='C7'>CINNAMON AIR</option><option value='QG'>CITILINK</option><option value='E8'>CITY AIRWAYS</option><option value='WX'>CITYJET</option><option value='CC'>CM AIRLINES</option><option value='GY'>COLORFUL GUIZHOU AIRLINE</option><option value='MN'>COMAIR</option><option value='BU'>COMPAGNIE AFRICAINE D'AVIATION</option><option value='CP'>COMPASS AIRLINES</option><option value='DE'>CONDOR</option><option value='DF'>CONDOR BERLIN</option><option value='CO'>CONTINENTAL AIRLINES</option><option value='V0'>CONVIASA</option><option value='CM'>COPA AIRLINES</option><option value='CD'>CORENDON DUTCH AIRLINES</option><option value='SS'>CORSAIR</option><option value='OU'>CROATIA AIRLINES</option><option value='C8'>CRONOS AIRLINES</option><option value='CU'>CUBANA DE AVIACION</option><option value='OK'>CZECH AIRLINES</option><option value='D3'>DAALLO AIRLINES</option><option value='9J'>DANA AIRLINES</option><option value='DX'>DANISH AIR</option><option value='F7'>DARWIN AIRLINE</option><option value='DO'>DISCOVERY AIRWAYS</option><option value='Z6'>DNIPROAVIA</option><option value='3D'>DOKASCH</option><option value='R6'>DOT LT</option><option value='DH'>DOUNIAH AIRLINES</option><option value='KB'>DRUK AIR</option><option value='2D'>DYNAMIC AIRWAYS</option><option value='H7'>EAGLE AIR</option><option value='B5'>EAST AFRICAN SAFARI AIR</option><option value='EG'>EAST AIR</option><option value='EA'>EAST HORIZON AIRLINES</option><option value='ZE'>Eastar Jet</option><option value='T3'>EASTERN AIRWAYS</option><option value='U2'>EASYJET</option><option value='WK'>EDELWEISS AIR</option><option value='MS'>EGYPTAIR</option><option value='LY'>EL AL ISRAEL AIRLINES</option><option value='7Q'>ELITE AIRWAYS</option><option value='EL'>ELLINAIR</option><option value='EK'>EMIRATES</option><option value='9E'>ENDEAVOR AIR</option><option value='MQ'>ENVOY AIR</option><option value='LC'>EQUATORIAL CONGO AIRLINE</option><option value='E4'>ESTELAR LATINOAMERICA</option><option value='OV'>ESTONIAN AIR</option><option value='ET'>ETHIOPIAN AIRLINES</option><option value='EY'>ETIHAD AIRWAYS</option><option value='QY'>EUROPEAN AIR</option><option value='WL'>EUROPEAN COASTAL AIRLINE</option><option value='9F'>EUROSTAR</option><option value='EW'>EUROWINGS</option><option value='E2'>EUROWINGS EUROPE</option><option value='BR'>EVA AIR</option><option value='5V'>EVERTS</option><option value='EV'>EXPRESSJET AIRLINES</option><option value='6F'>FALCON AIR EXPRESS</option><option value='FE'>FAR EASTERN</option><option value='FN'>FASTJET AIRLINES</option><option value='FJ'>FIJI AIRWAYS</option><option value='AY'>FINNAIR</option><option value='7F'>FIRST AIR</option><option value='F8'>FLAIR AIRLINES</option><option value='W2'>FLEXFLIGHT</option><option value='7B'>FLY BLUE CRANE</option><option value='EF'>FLY CAMINTER</option><option value='5L'>FLY SALONE</option><option value='5K'>FLY TRANSPORTES AEREO</option><option value='BE'>FLYBE</option><option value='FZ'>FLYDUBAI</option><option value='FY'>FLYFIREFLY</option><option value='XY'>FLYNAS</option><option value='ND'>FMI AIR</option><option value='Q5'>FORTY MILE AIR</option><option value='RD'>FRENCH MILITARY FORCE</option><option value='F9'>FRONTIER AIRLINES</option><option value='JH'>FUJI DREAM AIRLINES</option><option value='FU'>FUZHOU AIRLINES</option><option value='3G'>GAMBIA BIRD AIRLINES</option><option value='GC'>GAMBIA INTL AIRLINES</option><option value='GA'>GARUDA INDONESIA</option><option value='4G'>GAZPROMAVIA</option><option value='A9'>GEORGIAN AIRWAYS</option><option value='ST'>GERMANIA</option><option value='GM'>GERMANIA FLUG AG</option><option value='4U'>GERMANWINGS</option><option value='G6'>GHADAMES AIR</option><option value='GH'>GLOBUS LLC</option><option value='Z5'>GMG AIRLINES</option><option value='G8'>GO AIRLINES</option><option value='G7'>GOJET AIRLINES</option><option value='G3'>GOL LINHAS AEREAS</option><option value='CN'>GRAND CHINA AIR</option><option value='ZK'>GREAT LAKES AIRLINES</option><option value='GX'>GUANGXI BEIDU GULF AIRLINES</option><option value='GF'>GULF AIR</option><option value='HR'>HAHN AIR</option><option value='H1'>HAHN AIR SYSTEM</option><option value='HU'>HAINAN AIRLINES</option><option value='H5'>HAITI AVIATION</option><option value='7Z'>HALCYON AIR CABO VERDE</option><option value='HA'>HAWAIIAN AIRLINES</option><option value='BH'>HAWKAIR</option><option value='YO'>HELI AIR</option><option value='UV'>HELICOPTEROS DEL SURESTE</option><option value='JB'>HELIJET INTERNATIONAL</option><option value='HJ'>HELLAS JET</option><option value='2L'>HELVETIC AIRWAYS</option><option value='H3'>HERMES AIRLINES</option><option value='H8'>HESA AIRLINES</option><option value='UD'>HEX AIR</option><option value='H9'>HIMALAYA AIRLINES</option><option value='OI'>HINTERLAND AVIATION</option><option value='HC'>HOLIDAYS CZECH AIRLINES</option><option value='HX'>HONG KONG AIRLINES</option><option value='UO'>HONG KONG EXPRESS AIRWAYS</option><option value='A5'>HOP</option><option value='AN'>HOP AIRLINAIR</option><option value='DB'>HOP BRIT AIR</option><option value='YS'>HOP REGIONAL</option><option value='QX'>HORIZON AIR</option><option value='MR'>HUNNU AIR</option><option value='IB'>IBERIA</option><option value='FW'>IBEX AIRLINES</option><option value='FI'>ICELAND AIR</option><option value='V8'>ILIAMNA AIR</option><option value='6E'>INDIGO</option><option value='XT'>INDONESIA AIRASIA EXTRA</option><option value='7I'>INSEL AIR INTERNATIONAL</option><option value='8I'>INSELAIR ARUBA</option><option value='D6'>INTER AIR</option><option value='I7'>INTER ILES AIR</option><option value='JY'>INTERCARIBBEAN AIRWAYS</option><option value='4O'>INTERJET</option><option value='IR'>IRAN AIR</option><option value='B9'>IRAN AIR TOURS</option><option value='NV'>IRANIAN NAFT AIRLINE</option><option value='IA'>IRAQI AIRWAYS</option><option value='WP'>ISLAND AIR</option><option value='Q2'>ISLAND AVIATION</option><option value='T6'>ISLAND TRANSVOYAGER</option><option value='WC'>ISLENA AIRLINES</option><option value='6H'>ISRAIR AIRLINES</option><option value='JC'>JAPAN AIR COMMUTER</option><option value='JL'>JAPAN AIRLINES</option><option value='JZ'>JATAYU GELANG SEJAHTERA</option><option value='J9'>JAZEERA AIRWAYS</option><option value='QK'>JAZZ AVIATION</option><option value='7C'>JEJU AIR</option><option value='9W'>JET AIRWAYS</option><option value='JF'>JET ASIA AIRWAYS</option><option value='S2'>JET LITE</option><option value='JO'>JET TIME</option><option value='LS'>JET2.COM</option><option value='TB'>JETAIRFLY</option><option value='B6'>JETBLUE</option><option value='GK'>JETSTAR</option><option value='JQ'>JETSTAR</option><option value='3K'>JETSTAR ASIA</option><option value='BL'>JETSTAR PACIFIC AIRLINES</option><option value='RY'>JIANGXI AIR</option><option value='LJ'>JIN AIR</option><option value='3B'>JOB AIR</option><option value='R5'>JORDAN AVIATION</option><option value='JR'>JOY AIR</option><option value='KC'>JSC AIR ASTANA</option><option value='DV'>JSC AIRCOMPANY SCAT</option><option value='R3'>JSC AIRCOMPANY YAKUTIA</option><option value='D9'>JSC DONAVIA</option><option value='IH'>JSC IRTYSH-AIR</option><option value='ZS'>JSC KAZAVIASPAS</option><option value='5N'>JSC NORDAVIA</option><option value='HO'>JUNEYAO AIRLINES</option><option value='RQ'>KAM AIR</option><option value='5R'>KARTHAGO AIRLINES</option><option value='M5'>KENMORE AIR</option><option value='4K'>KENN BOREK AIR</option><option value='KQ'>KENYA AIRWAYS</option><option value='KW'>KHARKIV AIRLINES</option><option value='2S'>KINDA AIRLINES</option><option value='KL'>KLM</option><option value='WA'>KLM CITYHOPPER</option><option value='7K'>KOGALYMAVIA AIRLINES</option><option value='KE'>KOREAN AIR</option><option value='KY'>KUNMING AIRLINES</option><option value='KU'>KUWAIT AIRWAYS</option><option value='LK'>KYRGYZ AIRLINES</option><option value='6K'>KYRGYZ TRANS AVIA</option><option value='B0'>LA COMPAGNIE</option><option value='WJ'>LABRADOR AIRWAYS LIMITED</option><option value='LR'>LACSA</option><option value='TM'>LAM MOZAMBIQUE</option><option value='LP'>LAN PERU</option><option value='QV'>LAO AIRLINES</option><option value='LF'>LAO CENTRAL AIRLINES</option><option value='4M'>LATAM AIRLINES ARGENTINA</option><option value='JJ'>LATAM AIRLINES BRASIL</option><option value='LU'>LATAM AIRLINES CHILE</option><option value='4C'>LATAM AIRLINES COLOMBIA</option><option value='XL'>LATAM AIRLINES ECUADOR</option><option value='LA'>LATAM AIRLINES GROUP</option><option value='PZ'>LATAM AIRLINES PARAGUAY</option><option value='OE'>LAUDAMOTION</option><option value='W4'>LC PERU</option><option value='LB'>LEPL</option><option value='HE'>LGW LUFTFAHRTGES WALTER</option><option value='LI'>LIAT</option><option value='LN'>LIBYAN AIRLINES</option><option value='8J'>LINEA AEREA ECO JET</option><option value='O2'>Linear Air Taxi</option><option value='IK'>LLC IKAR</option><option value='LM'>LOGANAIR</option><option value='LT'>LONGJIANG AIRLINES</option><option value='LO'>LOT POLISH AIRLINES</option><option value='8L'>Lucky Air</option><option value='LH'>LUFTHANSA</option><option value='CL'>LUFTHANSA CITYLINE</option><option value='LG'>LUXAIR</option><option value='W5'>MAHAN AIRLINES</option><option value='MH'>MALAYSIA AIRLINES</option><option value='MA'>MALEV HUNGARIAN AIRLINES</option><option value='OD'>MALINDO AIRWAYS</option><option value='TF'>MALMO AVIATION</option><option value='RI'>MANDALA AIRLINES</option><option value='AE'>MANDARIN AIRLINES</option><option value='JE'>MANGO</option><option value='7Y'>MANN YADANARPON AIRLINES</option><option value='MP'>MARTINAIR</option><option value='L6'>MAURITANIAN AIRLINES INT</option><option value='VM'>MAX AIR</option><option value='MY'>MAYA ISLAND AIR</option><option value='2M'>MAYA ISLAND AIR</option><option value='VL'>MED VIEW AIRLINES</option><option value='LV'>MEGA MALDIVES</option><option value='JI'>MERAJ AIR</option><option value='IG'>MERIDIANA FLY</option><option value='YV'>MESA AIRLINES</option><option value='MX'>MEXICANA</option><option value='LL'>MIAMI AIR INTERNATIONAL</option><option value='OM'>MIAT MONGOLIAN AIRLINES</option><option value='8G'>MID AFRICA AVIATION</option><option value='ME'>MIDDLE EAST AIRLINES</option><option value='MJ'>MIHIN LANKA</option><option value='MW'>MOKULELE FLIGHT</option><option value='QM'>MONACAIR</option><option value='ZB'>MONARCH AIRLINES</option><option value='YM'>MONTENEGRO AIRLINES</option><option value='5M'>MONTSERRAT AIRWAYS</option><option value='M9'>MOTOR-SICH JSC</option><option value='8M'>MYANMAR AIRWAYS</option><option value='UB'>MYANMAR NATIONAL AIRLINES</option><option value='IC'>NACIL INDIAN AIRLINE</option><option value='T2'>NAKINA AIR</option><option value='IN'>NAM AIR</option><option value='9Y'>NATIONAL AIRWAYS</option><option value='NC'>NATIONAL JET SYSTEMS</option><option value='ON'>NAURU AIRLINES</option><option value='ZN'>NAYSA</option><option value='NO'>NEOS SPA</option><option value='RA'>NEPAL AIRLINES</option><option value='EJ'>NEW ENGLAND AIRLINES</option><option value='E3'>NEW GEN</option><option value='JN'>NEW LIVINGSTON</option><option value='JX'>NICE HELICOPTERES</option><option value='HG'>NIKI</option><option value='DD'>NOK AIR</option><option value='XW'>NOKSCOOT AIRLINES</option><option value='N6'>NOMAD AVIATION</option><option value='N4'>Nordwind Airlines</option><option value='NA'>NORTH AMERICAN AIRLINES</option><option value='M3'>NORTH FLYING AS</option><option value='HW'>NORTH WRIGHT AIR</option><option value='NW'>NORTHWEST AIRLINES</option><option value='J3'>NORTHWESTERN AIR LEASE</option><option value='DY'>NORWEGIAN AIR</option><option value='DI'>Norwegian Air (UK)</option><option value='D8'>NORWEGIAN AIR INT'L</option><option value='DU'>NORWEGIAN LONG HAUL AS</option><option value='N9'>NOVA AIRLINES</option><option value='OA'>OLYMPIC AIR</option><option value='WY'>OMAN AIR</option><option value='8Q'>ONUR AIR</option><option value='EC'>OPENSKIES</option><option value='R2'>ORENAIR</option><option value='OC'>ORIENTAL AIR BRIDGE</option><option value='3F'>PACIFIC AIRWAYS</option><option value='8P'>PACIFIC COASTAL AIRLINES</option><option value='LW'>PACIFIC WINGS</option><option value='PK'>PAKISTAN INTERNATIONAL</option><option value='7N'>PAN AM WORLD AIRWAYS DOMINICANA</option><option value='8A'>PANAMA AIRWAYS</option><option value='HI'>PAPILLON AIRWAYS</option><option value='2Z'>PASSAREDO TRANSPORTES</option><option value='MM'>PEACH AVIATION</option><option value='PC'>PEGASUS AIRLINES</option><option value='KS'>PENAIR</option><option value='PE'>PEOPLES VIENNALINE</option><option value='YP'>PERIMETER AVIATION</option><option value='P9'>PERUVIAN AIRLINE</option><option value='PR'>PHILIPPINE AIRLINES</option><option value='PT'>PIEDMONT AIRLINES</option><option value='F6'>PLUS ULTRA</option><option value='PU'>PLUS ULTRA LINEAS AEREAS</option><option value='Z3'>PM AIR</option><option value='DP'>POBEDA AIRLINES</option><option value='PI'>POLAR AIRLINES</option><option value='YQ'>POLET AIRLINES</option><option value='OL'>POLYNESIAN</option><option value='PD'>PORTER AIRLINES</option><option value='NI'>PORTUGALIA</option><option value='PW'>PRECISION AIR</option><option value='PF'>PRIMERA AIR SCANDINAVIA</option><option value='P0'>PROFLIGHT ZAMBIA</option><option value='PB'>PROVINCIAL AIRLINES</option><option value='OH'>PSA AIRLINES</option><option value='QZ'>PT INDONESIA AIRASIA</option><option value='IW'>PT WINGS ABADI AIRLINES</option><option value='ZR'>PUNTO AZUL</option><option value='QF'>QANTAS AIRWAYS</option><option value='QR'>QATAR AIRWAYS</option><option value='IQ'>QAZAQ AIR</option><option value='QB'>QESHM AIR</option><option value='RT'>RAINBOW AIRLINES</option><option value='7H'>RAVN ALASKA</option><option value='WZ'>RED WINGS AIRLINES</option><option value='8N'>REGIONAL AIR SERVICES</option><option value='ZL'>REGIONAL EXPRESS</option><option value='R4'>RELIABLE UNIQUE</option><option value='4R'>RENFE VIAJEROS</option><option value='YX'>REPUBLIC AIRLINE</option><option value='FV'>ROSSIYA AIRLINES</option><option value='RR'>ROYAL AIR FORCE</option><option value='AT'>ROYAL AIR MAROC</option><option value='BI'>ROYAL BRUNEI</option><option value='RL'>ROYAL FALCON</option><option value='RJ'>ROYAL JORDANIAN</option><option value='DR'>RUILI AIRLINES</option><option value='7R'>RUSLINE</option><option value='RM'>RUTACA</option><option value='WB'>RWANDAIR</option><option value='FR'>RYANAIR</option><option value='FA'>SAFAIR</option><option value='PV'>SAINT BARTH COMMUTER</option><option value='RZ'>SANSA</option><option value='S3'>SANTA BARBARA AIRLINES</option><option value='6W'>SARATOV AIRLINES</option><option value='SP'>SATA AIR ACORES</option><option value='S4'>SATA AZORES AIRLINES</option><option value='SV'>SAUDI ARABIAN AIRLINES</option><option value='6S'>SAUDI GULF AIRLINES</option><option value='SK'>SCANDINAVIAN AIRLINES</option><option value='YR'>SCENIC AIRLINES</option><option value='TR'>SCOOT</option><option value='TZ'>SCOOT TIGERAIR</option><option value='BB'>SEABORNE AIRLINES</option><option value='XO'>SEAIR</option><option value='DN'>SENEGAL AIRLINES</option><option value='D2'>SEVERSTAL AIR</option><option value='NL'>SHAHEEN AIR INTL</option><option value='SC'>SHANDONG AIRLINES</option><option value='FM'>SHANGHAI AIRLINES</option><option value='ZH'>SHENZHEN AIRLINES</option><option value='5E'>SIAM GA</option>/*<option value='5E'>SIAM GA</option>*/<option value='S7'>SIBERIA AIRLINES</option><option value='3U'>SICHUAN AIRLINES</option><option value='MI'>SILKAIR</option><option value='3M'>SILVER AIRWAYS</option><option value='SQ'>SINGAPORE AIRLINES</option><option value='H2'>SKY AIRLINE</option><option value='ZA'>SKY ANGKOR AIRLINES</option><option value='GQ'>SKY EXPRESS</option><option value='TE'>SKY TAXI</option><option value='Q7'>SKYBAHAMAS AIRLINES</option><option value='GW'>SKYGREECE AIRLINES</option><option value='F3'>SKYKING</option><option value='BC'>SKYMARK AIRLINES</option><option value='6J'>SKYNET ASIA AIRWAYS</option><option value='NB'>SKYPOWER EXPRESS</option><option value='OO'>SKYWEST AIRLINES</option><option value='C9'>SKYWISE</option><option value='S5'>SMALL PLANET</option><option value='P7'>SMALL PLANET AIRLINE</option><option value='M4'>SMART AVIATION</option><option value='QS'>SMARTWINGS</option><option value='2E'>SMOKEY BAY AIR</option><option value='2C'>SNCF</option><option value='8R'>SOL LINEAS AEREAS</option><option value='IE'>SOLOMON AIRLINES</option><option value='S8'>SOUNDS AIR</option><option value='SA'>SOUTH AFRICAN AIRWAYS</option><option value='9X'>SOUTHERN AIRWAYS</option><option value='WN'>SOUTHWEST AIRLINES</option><option value='JK'>SPANAIR</option><option value='5W'>SPEED ALLIANCE WESTBAHN</option><option value='SG'>SPICEJET</option><option value='NK'>SPIRIT AIRLINES</option><option value='9C'>SPRING AIRLINES</option><option value='IJ'>SPRING AIRLINES</option><option value='UL'>SRILANKAN AIRLINES</option><option value='4S'>STAR AIRWAYS</option><option value='7G'>STAR FLYER</option><option value='2I'>STAR PERU</option><option value='S9'>STARBOW</option><option value='RE'>STOBART AIR</option><option value='8F'>STP AIRWAYS</option><option value='SD'>SUDAN AIRWAYS</option><option value='6G'>SUN AIR EXPRESS LLC</option><option value='EZ'>SUN AIR OF SCANDINAVIA</option><option value='SY'>SUN COUNTRY</option><option value='XQ'>SUN EXPRESS</option><option value='WG'>SUNWING AIRLINES</option><option value='PY'>SURINAM AIRWAYS</option><option value='HS'>SVENSKA DIREKTFLYG AB</option><option value='LZ'>SWISS GLOBAL AIR LINES</option><option value='LX'>SWISS INTERNATIONAL</option><option value='7E'>SYLT AIR GMBH</option><option value='FS'>SYPHAX AIRLINES SA</option><option value='RB'>SYRIAN ARAB AIRLINES</option><option value='DT'>TAAG</option><option value='HH'>TABAN AIRLINES</option><option value='TA'>TACA INTERNATIONAL AIRLINES</option><option value='7J'>TAJIK AIR</option><option value='EQ'>TAME LINEA AEREA</option><option value='4E'>TANANA AIR</option><option value='TQ'>TANDEM AERO</option><option value='TP'>TAP PORTUGAL</option><option value='K3'>TAQUAN AIR</option><option value='RO'>TAROM</option><option value='B3'>TASHI AIR</option><option value='U9'>TATARSTAN AIR</option><option value='FD'>THAI AIRASIA</option><option value='XJ'>THAI AIRASIA</option><option value='TG'>THAI AIRWAYS</option><option value='SL'>THAI LION MENTARI</option><option value='WE'>THAI SMILE AIRWAYS</option><option value='VZ'>THAI VIETJET AIR</option><option value='2H'>THALYS INTERNATIONAL</option><option value='MT'>THOMAS COOK AIRLINES</option><option value='DK'>THOMAS COOK AIRLINES</option><option value='GS'>TIANJIN AIRLINES</option><option value='3P'>TIARA AIR ARUBA</option><option value='TT'>TIGER AIRWAYS AUSTRALIA</option><option value='DG'>TIGERAIR PHILIPPINES</option><option value='IT'>TIGERAIR TAIWAN</option><option value='ZT'>TITAN AIRWAYS</option><option value='C3'>TRADE AIR</option><option value='TJ'>TRADEWIND AVIATION</option><option value='AX'>TRANS STATES AIRLINES</option><option value='TW'>TRANS WORLD AIRLINES</option><option value='HV'>TRANSAVIA AIRLINES</option><option value='PH'>TRANSAVIA DENMARK</option><option value='TO'>TRANSAVIA FRANCE</option><option value='8B'>TRANSNUSA AVIATION</option><option value='5U'>TRANSPORTES AEREOS</option><option value='4P'>TRAVEL AIR</option><option value='3Z'>TRAVEL SERVICE POLSKA</option><option value='T4'>TRIP</option><option value='9N'>Tropic Air</option><option value='X3'>TUIFLY</option><option value='OR'>TUIFLY NETHERLANDS</option><option value='TU'>TUNISAIR</option><option value='TK'>TURKISH AIRLINES</option><option value='T7'>TWIN JET</option><option value='PS'>UKRAINE INTL AIRLINES</option><option value='B7'>UNI AIRWAYS</option><option value='UA'>UNITED AIRLINES</option><option value='4H'>UNITED AIRWAYS BANGLADESH</option><option value='U6'>URAL AIRLINES</option><option value='UQ'>URUMQI AIRLINES</option><option value='US'>US AIRWAYS</option><option value='BS'>US-BANGLA AIRLINES</option><option value='UT'>UTAIR AVIATION JSC</option><option value='HY'>UZBEKISTAN AIRWAYS</option><option value='ZV'>V AIR</option><option value='VF'>VALUAIR</option><option value='V9'>VAN AIR EUROPE</option><option value='JW'>VANILLA AIR</option><option value='VC'>VIA AIRLINES</option><option value='V4'>VIEQUES AIR</option><option value='VJ'>VIETJET AVIATION</option><option value='VN'>VIETNAM AIRLINES</option><option value='BF'>VINCENT AVIATION</option><option value='VX'>VIRGIN AMERICA</option><option value='VS'>VIRGIN ATLANTIC</option><option value='VA'>VIRGIN AUSTRALIA</option><option value='UK'>VISTARA</option><option value='FC'>VIVA COLOMBIA</option><option value='VB'>VIVAAEROBUS</option><option value='Y4'>VOLARIS</option><option value='V7'>VOLOTEA</option><option value='VY'>VUELING AIRLINES</option><option value='EB'>WAMOS AIR</option><option value='WT'>WASAYA AIRWAYS</option><option value='WH'>WEST AFRICAN AIRLINES</option><option value='9L'>WEST LINK AIRWAYS</option><option value='WS'>WESTJET</option><option value='WR'>WESTJET ENCORE</option><option value='WF'>WIDEROE</option><option value='WM'>WINDWARD ISLAND AIRWAYS</option><option value='WW'>WOW AIR</option><option value='MF'>XIAMEN AIRLINES</option><option value='SE'>XL AIRWAYS FRANCE</option><option value='YC'>YAMAL AIRLINES</option><option value='YE'>YAN AIR</option><option value='Y8'>YANGTZE RIVER EXPRESS</option><option value='Y2'>YGNUS AIR</option><option value='A6'>YUNNAN HONG TU AIRLINES</option><option value='YI'>YUNNAN YINGAN AIRLINE</option><option value='ZO'>ZAGROS AIRLINES</option><option value='Z4'>ZAGROS JET</option><option value='B4'>ZANAIR</option><option value='GJ'>ZHEJIANG LOONG AIRLINES</option>";  
	    $("#select-air").html(airlines);
		var airlineSel=$("#selAirline").val();
		//console.log("dd 1:"+airlineSel);
		//console.log("dd 2:"+$("#select-air").val());
		if(airlineSel == ""){
			$("#select-air").val("All").attr("selected", "selected");
		}else{
			$("#select-air").val(airlineSel).attr("selected", "selected");
			
		}
   	   form_data = $('#flightSearch').serialize();
   	  // console.log("form_data 1:"+form_data);
   	});

        
function submitForm(){
	
	if ( form_data == $('#flightSearch').serialize()) {
	       
			$('#sameSearch').show();
	        return false;
	      } else {
	    	
	    	  $('#sameSearch').hide();
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
//le: '#adult'
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
var total = parseInt($("#sub1").val()) + parseInt($("#sub2").val()) + parseInt($("#sub3").val()) + parseInt($("#sub4").val());
var adults=parseInt($("#sub1").val());
var infants=parseInt($("#sub3").val())
if (infants > adults) {

$("#errorDiv").html("<p>&raquo; Infant less than or equal to adult!</p>");
$("#errorDiv").show();
return false;
} 
if (total >= 10) {
$("#errorDiv").html("<p>&raquo;Total number of Passenger should be less than or equal to 9 only!</p>");
$("#errorDiv").show();
return false;
} 
var startDate = new Date($('#froDate').val());
var endDate = new Date($('#toDate').val());

if (startDate < endDate){
$("#errorDiv").html("<p>&raquo;Return date should be equal or greater than Depart date!</p>");
$("#errorDiv").show();
return false;
}

if ($.trim($("#froCity").val()) == $.trim($("#toCity").val()) && ($.trim($("#toCity").val()).length > 0 || $.trim($("#froCity").val()).length > 0)) {
$("#errorDiv").html("<p>&raquo; Please enter a different From and To city/ airport code!</p>"); 
$("#errorDiv").show();
return false;
}

var rndId = randomString(12);
key=false; 
//$('form#flightSearch').attr({action: 'search/id/'+rndId}); 
/*if($('#currentDevice').val()=="Normal"){
	 $('form#flightSearch').attr({action: '/search/id/'+rndId});   
}else if($('#currentDevice').val()=="Mobile"){
	 $('form#flightSearch').attr({action: '/m/search/id/'+rndId});   
}else if($('#currentDevice').val()=="Tablet"){
	 $('form#flightSearch').attr({action: '/t/search/id/'+rndId});   
}else{
	 $('form#flightSearch').attr({action: '/search/id/'+rndId});   
}*/
$('form#flightSearch').attr({action: '/search/id/'+rndId});   
$('form#flightSearch').submit();


}
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
function jawEngineToggle(){
	$("#jawEngineId").slideToggle();
}
function sortDivToggle(){
	$("#sortDivId").slideToggle();
}
var messhow=true;
function unaccompanied(){
	if(messhow){
		messhow=false;
		$.notify('Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please <a href="/contact" target="_blank">call us</a>. Otherwise please include at least 1 adult then hit "Search".', 'warning');
		}
	}


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
	 form_data = "";
	 popup('divSessionOut', 30, 30);
     return true;
}


///////////////// Traveller select drop script  ///////////////////////////////


$(document).ready(function() {
	var totpax=1;
	var adult=1;
	var child=0;
	var infant=0;
	var infantws=0;
	adult = $("#sub1").val();
	child = $("#sub2").val();
	infant = $("#sub3").val();
	infantws = $("#sub4").val();
	var cabinType=$("#cabinClass").val();

	
	var totpax = parseInt(adult) + parseInt(child) + parseInt(infant)+ parseInt(infantws);
	if (totpax > 1) {
		 $("#person").val(totpax+ " Travelers, "+cabinType);
	} else {
		 $("#person").val(totpax+ " Adult, "+cabinType); 
	}

	$("#person").click(function () {
	             
	            $(".traveler-dropdown").slideDown();


	        });
	        $(".done").click(function () {
	            $(".traveler-dropdown").slideUp();
	            $("#select_class").focus();
	        });

	        $("#sub1plus").click(function () {
	            var sv = $("#sub1").val();
	           if((parseInt(sv) + 1)==10){
	        	   return;
	           }
	           if((parseInt(totpax))>=9){
	        	   return;
	           }
	           adult=parseInt(adult) + 1;
	           totpax=parseInt(totpax)+1;
	            $("#sub1").val(parseInt(sv) + 1);

	        });

	        $("#sub1minus").click(function () {
	            var sv = $("#sub1").val();
	            if (
	           parseInt(sv) != 0
	           )
	            	 if((parseInt(sv))<=1){
	                 	   return;
	                    }
	            var sv2 = $("#sub3").val();
	            
	            if(parseInt(sv2) > parseInt(sv-1)){
	            	totpax=parseInt(totpax)-1;
	            	$("#sub3").val(sv-1);	            	
	            }
	                 adult=parseInt(adult) - 1;
	                 totpax=parseInt(totpax)-1;
	                 
	                 
	                $("#sub1").val(parseInt(sv) - 1);
	                
	                if((parseInt($("#sub3").val())+parseInt($("#sub4").val())) > parseInt($("#sub1").val())*2){
	                	
	                	var diff = ($("#sub1").val()*2)-$("#sub3").val();
	                	 var infant = $("#sub4").val();
	            		$("#sub4").val(diff);
	            		totpax=parseInt(totpax)-(infant-diff);
			          
	                }

	        });




	        $("#sub2plus").click(function () {
	            var sv = $("#sub2").val();
	            if((parseInt(sv) + 1)>9){
	         	   return;
	            }
	            if((parseInt(totpax))>=9){
	         	   return;
	            }
	            child=parseInt(child) + 1;
	            totpax=parseInt(totpax)+1;
	            $("#sub2").val(parseInt(sv) + 1);

	        });

	        $("#sub2minus").click(function () {
	            var sv = $("#sub2").val();
	            
	            	
	            	 if(sv<=0){
	               	   return;
	                  }
	            	 if(totpax==1){
	            	 	   return;
	            	    }
	            	child=parseInt(child) - 1;
	            totpax=parseInt(totpax)-1;
	                $("#sub2").val(parseInt(sv) - 1);

	        });


	        $("#sub3plus").click(function () {
	            var sv = $("#sub3").val();
	            var adultInfant = $("#sub1").val();
	            var infantVal = $("#sub4").val();
	            if((parseInt(sv) + 1+parseInt(infantVal))>adultInfant*2){	            	
		          	   return;
		             }
	            if((parseInt(sv) + 1)>adultInfant){
	          	   return;
	             }
	           if((parseInt(totpax))>=9){
	          	   return;
	             }
	            infant=parseInt(infant) + 1;
	            totpax=parseInt(totpax)+1;
	            $("#sub3").val(parseInt(sv) + 1);

	        });

	        $("#sub3minus").click(function () {
	        	
	        	
	            var sv = $("#sub3").val();
	            	
	            	if(sv<=0){
	             	   return;
	                }
	            	if(totpax==1){
	            	  if(sv >= 1)
	                    {
	                    infant=parseInt(infant) - 1;
	                    totpax=parseInt(totpax)-1;
	                    $("#sub3").val(parseInt(sv) - 1);
	                    }
	         	 	   return;
	         	    }
	            	infant=parseInt(infant) - 1;
	                totpax=parseInt(totpax)-1;
	                $("#sub3").val(parseInt(sv) - 1);
	        });


	        $("#sub4plus").click(function () {
	            var sv = $("#sub4").val();
	            var infantVal = $("#sub3").val();
	            var adultVal = $("#sub1").val();
	            
	         
	            
	            if((parseInt(sv) + 1+parseInt(infantVal)) > (parseInt(adultVal)*2)){
		          	   return;
		             }	            
	            if((parseInt(sv) + 1)>=9){
	          	   return;
	             }
	            if((parseInt(totpax))>=9){
	          	   return;
	             }
	            infantws=parseInt(infantws) + 1;
	            totpax=parseInt(totpax)+1;
	            $("#sub4").val(parseInt(sv) + 1);

	        });

	        $("#sub4minus").click(function () {
	            var sv = $("#sub4").val();
	            	
	            	if(sv<=0){
	                	   return;
	                   }
	            	if(totpax==1){
	         	 	   return;
	         	    }
	            	infantws=parseInt(infantws) - 1;
	            	totpax=parseInt(totpax)-1;
	                $("#sub4").val(parseInt(sv) - 1);

	        });



	        $(".maincalulation").click(function () {
	            var sv = $("#sub1").val();
	            var sv1 = $("#sub2").val();
	            var sv2 = $("#sub3").val();
	            var sv3 = $("#sub4").val();
	            var sv4=$("#cabinClass").val();
	            
	            var total = parseInt(sv) + parseInt(sv1) + parseInt(sv2)+ parseInt(sv3);
	            
	            if (total > 1) {
	            	 $("#person").val(total+ " Travelers, "+sv4);
	        	} else {
	        		 $("#person").val(total+ " Adult, "+sv4); 
	        	}
	            
	            

	        });
	});


function matrixFilter(len){
	 var matrixKey = false;
	/* if(len>5){
		 len=5;
	 }*/
	 for (var counter = 0; counter < len; counter++) {
	  var matrixTwoId = "twoStopId"+counter;
	  if($("#"+matrixTwoId).text() == ' -  '){
	  }
	  else{
	   matrixKey = true;
	  }
	 }
	 if(matrixKey){
	  
	 }
	 else{
	  for (var counter = 0; counter < len; counter++) {
	   var matrixTwoColId = "twoStopIdCol"+counter;
	   $("#"+matrixTwoColId).hide();
	   $("#twoStopLabel").hide();
	  }
	 }
	}

	$(document).ready(function() {
	   checkContainer();
	    $(".showFilter").click(function(){
			$(this).next().addClass('active').slideToggle();
            $(this).text($(this).text() == 'Show' ? 'Hide' : 'Show');
			$(this).parent().toggleClass('abc');
        });
	 });


	function checkContainer () {
	   if($('#matrixSize').is(':visible')){ //if the container is visible on the page
	    matrixFilter($("#matrixSizeId").val());
	   } else {
	     setTimeout(checkContainer, 1000); //wait 50 ms, then try again
	   }
	 }
	 
	 
