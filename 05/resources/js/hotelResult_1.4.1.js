//M star date and end date selected in calender 
$('#ui-datepicker-div').on('mouseenter', 'td', function () {

    var startDate = $('#departDate').datepicker("getDate");

    if (startDate == null) {
        startDate = $('#checkIn').datepicker("getDate");
    }
    if (startDate) {
        var cell = $(this);
        cell.addClass('between-date');
        var hover_day = $(this).text();
        var hover_month = $(this).attr("data-month");
        var hover_year = $(this).parent().siblings('td').attr("data-year");
        $('#ui-datepicker-div tr td').removeClass('between-date');
        if (hover_day >= startDate.getDate() || hover_month >= startDate.getMonth()) {
            if (hover_month >= startDate.getMonth()) {
                $('tr td a').each(function (index, value) {
                    var month_match = parseInt($(this).text());
                    var pppp = $(this).parent().data('month');
                    if (month_match <= hover_day && pppp <= hover_month) {
                        $(this).parent().addClass('between-date');
                    }
                    if (pppp < hover_month) {
                        $(this).parent().addClass('between-date');
                    }
                });
            }
        }
    }
});

//M calendar div 	
$("#departDate_new, #returnDate_new, #departSDate_new, #departTDate_new, #checkInDatecheckInDate_new, #checkOutDate_new").click(function () {
    $(this).datepicker('show');
});

//M Responsive 
var numberOfMonthValue;
$(window).resize(function () {

    if ($(window).width() < 768) {
        numberOfMonthValue = 1;
        $("#checkInDate_new").datepicker("option", "numberOfMonths", numberOfMonthValue);
        $("#checkOutDate_new").datepicker("option", "numberOfMonths", numberOfMonthValue);
    } else {
        numberOfMonthValue = 2;
        $("#checkInDate_new").datepicker("option", "numberOfMonths", numberOfMonthValue);
        $("#checkOutDate_new").datepicker("option", "numberOfMonths", numberOfMonthValue);
    }
}).trigger('resize');
//Responsive 
//M star date and end date selected in calender

    var appHotel = angular.module('appHotel', ['angularUtils.directives.dirPagination','initialValue','LocalStorageModule','ngSanitize','ngAnimate', 'toaster','ui.bootstrap']);
    appHotel.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        //template: '<div class="srching-txt" style="text-align:center; height:300px; margin:70px 0;"><div class="progress progress-striped active"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"><span class="sr-only">100% Complete</span></div></div><h2 style="color:#03566c;">Just a moment more ...</h2><h4 style="font-weight:normal;">we want to make sure we find you the best price.</h4><div class="loader"><img src="/resources/images/hotels/loader.gif" alt=""/></div></div>',
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
  })
  
  appHotel.directive('featureddeal', function () {
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
  
 appHotel.factory('itemsFactory', ['$http', function($http){
 return {
    SearchHotel: function() {
      return $http(
      {
        url: "/PostSearchHotel",
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
    };     
}]);
  
var HotelController = function($scope, $http, itemsFactory, $window , $templateCache, $interval,localStorageService, $timeout, toaster,filterFilter) {

		        $scope.user = []; //declare an empty array
		        $scope.selectedStar = [];
		        $scope.filter = {};
		        $scope.showAll = true;
		        $scope.dataRes = "xyz";
		        $scope.featureddeal = false;
		        $scope.lower_price_bound = 10;
                $scope.upper_price_bound = 5000;
                $scope.lower_price_slider = 10;
                $scope.upper_price_slider = 5000;
                $scope.lower_depart_bound = "0000";
                $scope.upper_depart_bound = "2359";
                $scope.hotelslist=[];                
                 $scope.lower_return_bound = "0000";
                $scope.upper_return_bound = "2359";
                $scope.searchQueryList =  [];
                $scope.sortListMob="sort by";
                $scope.tempHotelName="";
                $scope.mobitenery=true;
                $scope.dollar="gbp";
               /* $scope.$watch('position', function() {
                    alert('hey, position has changed!');
                    $scope.addActive();
                });*/
                $scope.banners = ['advantage', 'easirent', 'ezrent', 'sixt'];
				
				$scope.RandomBanners = function(){
				  return $scope.banners[Math.floor((Math.random() * $scope.banners.length))];
				};
				$scope.showBanners=$scope.RandomBanners();
                
                $scope.removeActive = function()
                {
                	try{
                		//angular.element('#hotel'+$scope.position).addClass("active");
               	  } catch (e) {
               	      console.log("Got an error!");               	      
               	  }
                };
                
                $scope.getRange = function(count,hotellist,len)
                {
                	$scope.hotelslist=hotellist;
                	var leng=0;
                	//var len=$scope.hotelslist.length;
                	                	
                	  for (var i = 0; i < len; i++) { 
                		  if($scope.hotelslist[i].RatingNDes == count)
                			  {
                			  	leng++;
                			  }
                	  } 
                	  return leng;
                	};                
                
                if(localStorageService.get("lkhistory") != null){
                 $scope.searchQueryList=localStorageService.get("lkhistory");
                }
                 $scope.$watch('searchQuery', function(val) {
			        if (val) {			           
			            $scope.searchQueryList.push(val);
		              localStorageService.set("lkhistory",$scope.searchQueryList);
			        }
			    });
                 document.getElementById('resultsmainCntr').style.display="none";
				 // document.getElementById('mobile-itenery').style.display="none";
              
                $scope.priceRangeList={};
                $scope.filters = { };
                $scope.filtersPrice= { };
                $scope.currentPage = 0;
   				$scope.pageSize = 5;
		        $scope.starListOld = [/*{
				        id: 0,
				        name: '0'
				    }, */{
				        id: 1,
				        name: '1'
				    }, /*{
				        id: 1.5,
				        name: '1.5'
				    },*/ {
				        id: 2,
				        name: '2'
				    },/* {
				        id: 2.5,
				        name: '2.5'
				    },*/ {
				        id: 3,
				        name: '3'
				    },/* {
				        id: 3.5,
				        name: '3.5'
				    },*/ {
				        id: 4,
				        name: '4'
				    }, /*{
				        id: 4.5,
				        name: '4.5'
				    }, */{
				        id: 5,
				        name: '5'
				    }];
				   
		        $scope.starList = [{
			        id: 5,
			        name: '5'
			    }, {
			        id: 4,
			        name: '4'
			    }, {
			        id: 3,
			        name: '3'
			    }, {
			        id: 2,
			        name: '2'
			    }, {
			        id: 1,
			        name: '1'
			    },/*{
			        id: 0,
			        name: '0'
			    }*/];
		        $scope.selected = '';               
                
                $scope.loading = true;
                var promise = itemsFactory.SearchHotel();

			  	  promise.then(function (data) {
			  		  
			  		 document.getElementById('resultsmainCntr').style.display="block";
			  		document.getElementById('headerrs').style.display="block";
			    	 document.getElementById('footerrs').style.display="block";
					// document.getElementById('mobile-itenery').style.display="block";					 
			    	 
			        $scope.filtersHotel = { };
			  		//$scope.filtersHotel = [];  
			        $scope.responseStatus=[];
			        $scope.cityPair;
			        $scope.loading = false;
			        $scope.mobitenery=false;
			        $scope.list=[];
			        $scope.matrix=[];
			        $scope.amenties = [];
			        $scope.hotelList = [];
			        $scope.filtersHotelAdded = [];
			        $scope.amentiesList = [];
			        $scope.priceRangeList=[];
			        $scope.blackListedCountry= [];
		            $scope.noResultFound= [];
		            $scope.noResultff= [];	
		            $scope.isSoldOut=false;
		    		$scope.soldOutMsg="";
		    		$scope.distanceFrom="";
		           	            
		            
		       	 var pagesShown = 1;

		  	   var pageSize = 20;
		  	   
		  	   $scope.paginationLimit = function(data) {
		  	    return pageSize * pagesShown;
		  	   };

		  	   $scope.hasMoreItemsToShow = function() {
		  		 //console.log("hasMoreItemsToShow");
		  		   
		  		   return pagesShown < (this.filtered.length / pageSize);
		  	   };

		  	   $scope.showMoreItems = function() {
		  		   
		  		   $scope.restResult=($scope.list.length-10) - (pageSize * pagesShown);
		  		   
		  	    pagesShown = pagesShown + 1;       
		  	   }; 
					   
			         angular.forEach(data, function(Flighth) {
			        	 angular.forEach(Flighth.hotelResponse, function(result) {
			        		  $scope.list=result.HotelList;
			        		  $scope.isSoldOut=result.IsSoldOut;
			 				  $scope.soldOutMsg=result.SoldOutMessage;
			 				  $scope.distanceFrom=result.DistanceFrom;
			        	 })
			           
			           $scope.responseStatus=Flighth.hotelResponseStatus;
			            $scope.cityPair=Flighth.cityPair;
			         });
			         
			         $scope.getCap = function(amen) {                		
	                		return amen.replace(/([a-z])([A-Z])/g, "$1 $2");
	                	};
	                	
	                $scope.getReplace = function(amen) {
	                	return amen.replace(" ", "-");
	                }
			         		    
	                	   
				      angular.forEach(data, function(Fli) {
				      angular.forEach(Fli.hotelResponse, function(Flighth) {
				      $scope.hotelList=[];
				      angular.forEach(Flighth.HotelList, function(Flighths, index) {
				      $scope.hotelList.push(Flighths.HotelName); 
				    		  
				       if(index == 0){
			           $scope.google_price_bound= Flighths.LowRate;
			           $scope.lower_price_bound=Math.floor(Flighths.LowRate);
			           $scope.lower_price_slider=Math.floor(Flighths.LowRate);
			           $scope.upper_price_bound =Math.ceil(Flighths.LowRate);
				       $scope.upper_price_slider =Math.ceil(Flighths.LowRate);
				        
			           }else{
			        	    if(Flighths.LowRate < $scope.lower_price_slider){
			        	    	$scope.lower_price_bound =Math.floor(Flighths.LowRate);
		    			   $scope.lower_price_slider=Math.floor(Flighths.LowRate);
		    		        }
			        	  
			        	   if(Flighths.LowRate > $scope.upper_price_bound){
			        	   $scope.upper_price_bound =Math.ceil(Flighths.LowRate);
					         $scope.upper_price_slider =Math.ceil(Flighths.LowRate);
			        	   }
			           }
				    	   });
				      });
				    });
				      
				      $scope.startsWith = function(state, viewValue) 
				      {				    	
				    	  var len=document.getElementById("hotelFilter").value;
				    	
				    	  if(len.length == 0)
				    		  {
				    		  	  return "";
				    		  }
				    	  else
				    		  {
				    			  return state.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
				    		  }			             
			            }
				      
			            
				      if($scope.list.length>0){
				      $timeout(function() {
				    	  $scope.num = Math.floor(1 + (Math.random() * (5 - 1 + 1)));
				    	  //console.log('update with timeout fired'+$scope.num)
				    	  toaster.pop('alert', "Price Alert", 'Prices for the top five properties expected to go up in next '+$scope.num+' hours.');
				      }, 3000);
				      
				      $timeout(function() {
				    	  $scope.num = Math.floor(8 + (Math.random() * (15 - 8 + 1)));
				    	  toaster.pop('compare', "Best Compare", "Best price for your search $"+$scope.google_price_bound+", compared to "+$scope.num+" other websites.");
				      }, 9000);
				      
				      $timeout(function() {
				    	  $scope.num = Math.floor(3 + (Math.random() * (10 - 3 + 1)));
				    	  toaster.pop('popular', "Popular Destination", ""+$scope.num+" People looking for hotels in  "+ $scope.stayCity+" for same dates.");
				      }, 15000);
				      }
				      angular.forEach($scope.list, function(amenties) {
				    	  angular.forEach(amenties.Amenties, function(tech) {
				    		
				          if ($scope.amenties.indexOf(tech) == -1) {
				            $scope.amenties.push(tech);
				            $scope.amentiesList.push({'name': tech, 'on': false});				           
				          }
				    	  });
				        });
				     
			         $scope.numberOfPages=function(){
        				return Math.ceil($scope.matrix.length/$scope.pageSize);                
    					}
						        if($scope.responseStatus == "false"){
						              $scope.blackListedCountry=  [new String('Item 5')];
									 var url = "/noResult/NO"+$scope.cityPair;
      								  $window.location.href = url;
						        }
						        
						       /* if($scope.responseStatus == "InternalError: Internal Error"){
						              $scope.noResultFound= [new String('Item 5')];

						             var url = "/noResult/NO"+$scope.cityPair;
      								  $window.location.href = url;
						        }
						         if($scope.responseStatus.ErrorDescription == "NO ITINERARY FOUND FOR REQUESTED SEGMENT 1"){
						             $scope.noResultFound= [new String('Item 5')];
									 var url = "/noResult/NO"+$scope.cityPair;
									 
      								  $window.location.href = url;
						        }
						        */						
						      
       $("#price-range").slider({
                range: true,
                min: $scope.lower_price_bound,
                max: $scope.upper_price_bound,
                values: [ $scope.lower_price_slider, $scope.upper_price_slider ],
                slide: function( event, ui ) {
                    /*$("#amount").val( "£" + ui.values[ 0 ]+" - "+ "£" + ui.values[ 1 ]);*/
                    
                    $(".min-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" + Math.floor(ui.values[0])); 
                    $(".max-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" + Math.ceil(ui.values[1]));
                 
                     var scope = angular.element(document.getElementById('HotelController')).scope();
                     scope.$apply(function() {
                             scope.lower_price_bound = ui.values[0];
						     scope.upper_price_bound = ui.values[1];
					  });
                   
                }
            });
	       $(".min-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" + $("#price-range").slider( "values", 0 ));
	       $(".max-price-label").html("<i class='fa fa-"+$scope.dollar+"'></i>" + $("#price-range").slider( "values", 1 ));
	       
            /*$("#amount").val( "£" + $("#price-range").slider( "values", 0 )+" - "+ "£" + $("#price-range").slider( "values", 1 ) );*/
          });


			 	
				   
$scope.priceSlider = {
    range: {
        min: 0,
        max: 10050
    },
    minPrice: 1000,
    maxPrice: 4000
};

$scope.clearAllSelect = function()
{
	for(var i=0;i< $scope.list.length;i++)
    {
		 $scope.list[i].Active=0;
    }
	
	//console.log("clearAllSelect");
	
	$('.sortingBox li').removeClass('active');
	$( ".sortingBox li:nth-child(1)" ).addClass('active');
		
       	 
		 $scope.selectedStar=[];
	  
	   $("#amount").val( "$" + $scope.lower_price_slider+" - "+ "$" + $scope.upper_price_slider);
	    var lowerValue = $scope.lower_price_slider; 
		 var MaxValue = $scope.upper_price_slider; 
		 $scope.resetSlider(lowerValue,MaxValue);
		 $scope.lower_price_bound=lowerValue;
		 $(".min-price-label").html( "$" + lowerValue);
		 $(".max-price-label").html( "$" + MaxValue);
		 $scope.upper_price_bound=MaxValue;
				 
		 $('input[type=checkbox]').each(function() 
				  { 
				          this.checked = false; 
				  });
		  
		  $scope.showAll = true;
		  
		  for(var t in $scope.amentiesList){
			  $scope.amentiesList[t].on=false;
	        }
		  
		 $scope.sort('');
		  
		 //$scope.selected='';
		 $scope.priceRangeList={};
         $scope.filters = { };
         $scope.filtersPrice= { };
         
		 $scope.resetHotelName();
}

$scope.resetHotelName=function()
{	 
	$scope.selected='';
	 $scope.filtersHotel = { };
};
  
$scope.resetSlider= function (lowerValue,MaxValue) {
	  var $slider = $("#price-range");
	  $slider.slider("values", 0, lowerValue);
	  $slider.slider("values", 1, MaxValue);	  
	}
  
  $scope.priceRange = function(item) {
	
    return (parseInt(item.LowRate) >= parseInt($scope.lower_price_bound) && parseInt(item.LowRate) <= parseInt($scope.upper_price_bound));
  };
  
   $scope.departRange = function(item) {
    return (parseInt(item.Depart) >= parseInt($scope.lower_depart_bound) && parseInt(item.Depart) <= parseInt($scope.upper_depart_bound));
  }; 
  
  $scope.returnRange = function(item) {
    return (parseInt(item.Return) >= parseInt($scope.lower_return_bound) && parseInt(item.Return) <= parseInt($scope.upper_return_bound));
  };
  
  $scope.getFliterStars = function(rating) {
	    var val = parseFloat(rating);
	    var size = val/5*100;
	    return size + '%';
	  }
  
  $scope.getStars = function(rating) {
	    var val = parseFloat(rating);
	    var size = val/5*100;
	    return size + '%';
	  }
     $scope.filterAmenties = {};

     $scope.clearAll = function(){
    	 
     }
    $scope.filterByAmenties = function(a) {
        if($scope.showAll) { return true; }
        
        var sel = false;
        
         for(var tech in $scope.amentiesList){
             var t = $scope.amentiesList[tech];
             if(t.on){
            	 //console.log("Amenties "+a.Amenties)
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
        for(var t in $scope.amentiesList) {
            if($scope.amentiesList[t].on) {
                $scope.showAll = false;
                return;
            }
        }
        $scope.showAll = true;
    };
    
    $scope.filterByStar = function (flights) {
        return $scope.selectedStar[flights.RatingNDes] || noFilter($scope.selectedStar);
    };
          
    $scope.filterByHotelName2 = function () { 
    	
   	 var placeholder = document.getElementById('hotelFilter'); //working
   	 var text="<span style='padding: 8px 20px;background: #028fcc;border-radius: 50px; color: #fff;font-size: 14px;'>";
   	 text=text+"<i class='fa fa-times-circle' ng-click='clearHotelName();' style='position: absolute;font-size: 25px;color:#000;cursor: pointer;margin-left: -22px;margin-top: -22px;'></i>";
   	 text=text+$scope.selected+"</span>";
       // placeholder.innerHTML = text;
        //console.log( "text:"+text);
      $scope.filtersHotel = $scope.selected;
       // $scope.list = $scope.list;
       // console.log(typeof($scope.list[0].HotelName));
   };
   
   $scope.sortResultMobile = function(){
	   //console.log($scope.sortListMob);
	   $scope.sort($scope.sortListMob);
   }
   
    $scope.filterByHotelName = function () {
    	
    	$scope.sort('');
    	$scope.counter = 0;
    	 var placeholder = document.getElementById('hotelFilter').value; //working
		 if($scope.tempHotelName == placeholder){
			 $scope.counter = $scope.counter+Number(1);
		 }
		 else{
			 $("h4").remove(".other1");
		 }
		 $scope.tempHotelName = placeholder;
         if(placeholder)
          {
    	 var text="<span style='padding: 8px 20px;background: #028fcc;border-radius: 50px; color: #fff;font-size: 14px;'>";
    	 text=text+"<i class='fa fa-times-circle' ng-click='clearHotelName();' style='position: absolute;font-size: 25px;color:#000;cursor: pointer;margin-left: -22px;margin-top: -22px;'></i>";
    	 text=text+$scope.selected+"</span>";
    	 
         //placeholder.innerHTML = text;
    	 var selectedHotelObject;
    	 var text = $scope.selected;
         //console.log( "text:"+text);
    	 
    	 for(var i=0;i< $scope.list.length;i++)
         {
    		 $scope.list[i].Active=0;
         }
    	 $scope.filteredNew1 = [];
		 $scope.filteredNew2 = [];
         for(var i=0;i< $scope.list.length;i++)
         {
        	/* if($scope.list[i].HotelName === text)
        	 {
        		 selectedHotelObject = $scope.list[i];
        		 
        		for(var j=i; j > 0;j--)
        		 {
        			var l=$scope.list[j];
        			 $scope.list[j]=$scope.list[j-1];
        			 $scope.list[j-1]=l;
        		 }
        		
        		 selectedHotelObject.Active=1;
        		 
        		// console.log(selectedHotelObject.HotelName);
        		 //console.log(selectedHotelObject.Active);
        		// $scope.list.unshift(selectedHotelObject);
        		 break;
        	 } */
			 placeholder = placeholder.toLowerCase();
			if( $scope.list[i].HotelName.toLowerCase().indexOf(placeholder) >= 0 )
			{
				
				$scope.filteredNew1.push($scope.list[i]);
			}
			else{
				$scope.filteredNew2.push($scope.list[i]);
			}
         }
         
		 $scope.list = [];
			angular.forEach($scope.filteredNew2, function (item) {
				$scope.filteredNew1.push(item);
			});
			$scope.list=$scope.filteredNew1;
			
        // console.log("after Length"+$scope.list.length);
         //$scope.list.pop();
		// other hotel title add start here
		 $timeout(function() {
			 if($scope.counter ==0){
				         //console.log("$scope.counter >>>>>>> " + $scope.filtered.length);
				    	// $( ".active1" ).after( "<h4 class='other other1' ng-show='filtered.length > 1' data-ng-class='{'other1': isActive(hotel.Active)}'>Other great available hotels</h4>" );
						 $scope.counter = $scope.counter+Number(1);
		           }
				      }, 500);
					  
        
        }
    };// other hotel title add end here
    
    $scope.active = "0";
    $scope.isActive = function(index) {
        return $scope.active != index; 
      }
    
   
    
    
   
    
    function unselectedElement(listElement){
    	
    }
    $scope.clearHotelName = function () {
    	 var placeholder = document.getElementById('hotelFilter'); //working
    	
         placeholder.innerHTML = "";
    	$scope.selected='';
        $scope.filtersHotel = '';
   };
    
   function noFilter(filterObj) {
        for (var key in filterObj) {
      
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    }
   
   			//$scope.rev=0;
   					
			$scope.sort = function(keyname)
			{
				if(keyname == 'SrNo')
					{
					$scope.reverse=true;					
					}
												
				$scope.sortKey = keyname;   //set the sortKey to the param passed
				$scope.reverse = !$scope.reverse; //if true make it false and vice versa
				
			}
			
			
						
			$scope.closePopUP = function(keyname){
			  $scope.featureddeal = false;
			}
			
			$scope.getStateDataFromServer = function(id) {
            var Details = itemsFactory.getStateDataFromServer(id);
			  	  Details.then(function (data) {
				        //console.log(data);
					        
					     
				        $scope.featureddeal = true;
				        $scope.flightsDetails = data;
			      
			    }, function(e) {
                  alert(e.stautsText);
                });
			    
			   }
		
			   
    $scope.flightsDetails = {};
    	
  /*  $scope.movePaymentPage	 = function(id) {
            var purchase = itemsFactory.movePaymentPage(id);
  			  	  purchase.then(function (data) {
			      
			    }, function(e) {
                  alert(e.stautsText);
                });
			    
			   }*/
			   
	
    
      
    $scope.moveDetailsPage = function(id) {
    	
         //$window.location.href = '/hotels/details/'+id;
    	//alert(window.screen.availWidth);
    	 if(window.screen.availWidth < 767)
    	       {
    		 	   $window.location.href = '/hotels/details/'+id;
    	       }else
    	    	   {
    	    	   $window.location.href='/hotels/details/'+id;
    	    	   }
        //  $window.open('http://localhost:8080/hotels/details/'+id);
        };
        
        $scope.tripAdvisorRating = function(id) {
        //	alert(id);
        	//$window.open(+id);
             $window.location.href = id;
           };
                      
           $scope.repeater = function (range) {
        	    var arr = []; 
        	    for (var i = 0; i < range; i++) {
        	        arr.push(i);
        	    }
        	    return arr;
        	};
        	
        	$scope.onSelect = function ($item, $model, $label) {
        		$("#gobtn").prop('disabled', false);
        	};
        	
        	
           
 	 };
 
   
        
 	appHotel.filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace !== -1) {
                  //Also remove . and , so its gives a cleaner result.
                  if (value.charAt(lastspace-1) === '.' || value.charAt(lastspace-1) === ',') {
                    lastspace = lastspace - 1;
                  }
                  value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });
 	 
 	appHotel.filter('html', function($sce) {
 	    return function(val) {
 	        return $sce.trustAsHtml(val);
 	    };
 	});
 	
 	appHotel.filter('unsafe', function($sce) {
	    return function(val) {
	        return $sce.trustAsHtml(val);
	    };
	});
	
 	appHotel.filter('trusted', ['$sce', function($sce) {
 	    var div = document.createElement('div');
 	    return function(text) {
 	        div.innerHTML = text;
 	        return $sce.trustAsHtml(div.textContent);
 	    };
 	}]);
 	
  appHotel.filter('startFrom', function() {
     return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    }
    });
    
   appHotel.filter('nl2br', ['$sce', function ($sce) {
        return function (text) {
            return text ? $sce.trustAsHtml(text.replace(/'/g, '')) : '';
        };
    }])
    
  appHotel.controller("listdata", HotelController);
  
 
 
  appHotel.filter('time', function() {
    
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


appHotel.filter('unique', function () {

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


function addAge(kk){
	
	
    var childNo = kk.value;
   // alert("room :"+kk);
  // alert("room id:"+kk.id);
  // alert("childNo:"+childNo);
  var str2 = kk.id.replace ( /[^\d.]/g, '' ); 
  var room = parseInt(str2);
   //alert(room);
    $("#age"+room).css({display: "block"});
    if(childNo==0){
     $("#age"+room).css({display: "none"});
    }
    for(i=0;i<5;i++){
     $("#"+room+i).css({display: "none"});
    }
    for(i=0;i<childNo;i++){
     $("#"+room+i).css({display: "block"});
    }
    
    var room=$("#rooms").val();   
 
    
   var adult = $('#roomsadults :selected').val();
   

   
     var child=$("#rooms0child :selected").text();

 
  if($('#rooms1adults').length && $('#rooms1adults').val().length){
   
     var adult1=  $("#rooms1adults").val();
     var child1=  $("#rooms1child").val();
      adult=parseInt(adult)+parseInt(adult1);
      child=parseInt(child)+parseInt(child1);
   }
// alert("adult no:"+adult);
   
    if($('#rooms2adults').length && $('#rooms2adults').val().length){
 var adult2=   $("#rooms2adults").val();
 var child2=  $("#rooms2child").val();
     adult=parseInt(adult)+parseInt(adult2);
      child=parseInt(child)+parseInt(child2);
   }
   
  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
 var adult3=   $("#rooms3adults").val();
 var child3=  $("#rooms3child").val();
   
      adult=parseInt(adult)+parseInt(adult3);
      child=parseInt(child)+parseInt(child3);
   
   }
   
    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
    
 var adult4=   $("#rooms4adults").val();
 var child4=  $("#rooms4child").val();
    adult=parseInt(adult)+parseInt(adult4);
      child=parseInt(child)+parseInt(child4);
   
   }
   
 

   var text="";//room+"1 Room, 1 Adult, 0 Child";
   
    if(room == 1){
     text=text+"1 Room,";
    }else{
      text=text+room+" Rooms,";
    }
    
    if(adult==1){
     text=text+"1 Adult,";
    }else{
    text=text+adult+" Adults,";
    }
   
   if(child==0){
     text=text+"0 Child";
    }else if(child==1){
    text=text+child+" Child";
    }else{
    text=text+child+" Children";
    }
     $("#guest").val(text);
    
   }
   
   
   function addAgeOnLoad(kk,pp){
    var childNo = kk;
    var room = pp;
    $("#age"+room).css({display: "block"});
    if(childNo==0){
     $("#age"+room).css({display: "none"});
    }
    for(i=0;i<5;i++){
     $("#"+room+i).css({display: "none"});
    }
    for(i=0;i<childNo;i++){
     $("#"+room+i).css({display: "block"});
    }
   // alert("room:"+room);
  //  alert("childNo:"+childNo);
    var room=$("#rooms").val();
   
 
     var adult = $('#roomsadults :selected').val();
     var childCount0 = $("#childCount0").val();
     var child=$("#rooms0child option:selected").text();
     child=childCount0;
 
  if($('#rooms1adults').length && $('#rooms1adults').val().length){
   
     var adult1=  $("#rooms1adults").val();
     var child1=  $("#rooms1child").val();
      adult=parseInt(adult)+parseInt(adult1);
      child=parseInt(child)+parseInt(child1);
   }
   
    if($('#rooms2adults').length && $('#rooms2adults').val().length){
 var adult2=   $("#rooms2adults").val();
 var child2=  $("#rooms2child").val();
     adult=parseInt(adult)+parseInt(adult2);
      child=parseInt(child)+parseInt(child2);
   }
   
  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
 var adult3=   $("#rooms3adults").val();
 var child3=  $("#rooms3child").val();
   
      adult=parseInt(adult)+parseInt(adult3);
      child=parseInt(child)+parseInt(child3);
   
   }
   
    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
    
 var adult4=   $("#rooms4adults").val();
 var child4=  $("#rooms4child").val();
    adult=parseInt(adult)+parseInt(adult4);
      child=parseInt(child)+parseInt(child4);
   
   }
   

   var text="";//room+"1 Room, 1 Adult, 0 Child";
   
    if(room == 1){
     text=text+"1 Room,";
    }else{
      text=text+room+" Rooms,";
    }
    
    if(adult==1){
     text=text+"1 Adult,";
    }else{
    text=text+adult+" Adults,";
    }
   
   if(child==0){
     text=text+"0 Child";
    }else if(child==1){
    text=text+child+" Child";
    }else{
    text=text+child+" Children";
    }
     $("#guest").val(text);
    
   }
   

   function addAdult(ad){
   var room=$("#rooms").val();

 
  var adult = $('#roomsadults :selected').val();
   
     var child=$("#rooms0child :selected").text();
   
   if($('#rooms1adults').length && $('#rooms1adults').val().length){
   
     var adult1=  $("#rooms1adults").val();
     var child1=  $("#rooms1child").val();
      adult=parseInt(adult)+parseInt(adult1);
      child=parseInt(child)+parseInt(child1);
   }
   
    if($('#rooms2adults').length && $('#rooms2adults').val().length){
 var adult2=   $("#rooms2adults").val();
 var child2=  $("#rooms2child").val();
     adult=parseInt(adult)+parseInt(adult2);
      child=parseInt(child)+parseInt(child2);
   }
   
  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
 var adult3=   $("#rooms3adults").val();
 var child3=  $("#rooms3child").val();
   
      adult=parseInt(adult)+parseInt(adult3);
      child=parseInt(child)+parseInt(child3);
   
   }
   
    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
    
 var adult4=   $("#rooms4adults").val();
 var child4=  $("#rooms4child").val();
    adult=parseInt(adult)+parseInt(adult4);
      child=parseInt(child)+parseInt(child4);
   
   }
  
 
   
   var text="";//room+"1 Room, 1 Adult, 0 Child";
   
    if(room == 1){
     text=text+"1 Room,";
    }else{
      text=text+room+" Rooms,";
    }
    
    if(adult==1){
     text=text+"1 Adult,";
    }else{
    text=text+adult+" Adults,";
    }
   
   if(child==0){
     text=text+"0 Child";
    }else if(child==1){
    text=text+child+" Child";
    }else{
    text=text+child+" Children";
    }
     $("#guest").val(text);
   }
   
   function bg_image1(imgsrc1){
	   var imgsrc=$(this).attr('src');
	 
   };
  
   function removeFun(roomcount)
   {
	   
	   if(roomcount == '0')
		   {
		   $("#removeroom").css({display: "none"});
		   }
	   else
		   {
		   $("#removeroom").css({display: "block"});
		   }
    //removeroom
   };
														$(document).ready(function(){
															
															 $("#hotelFilter").change(function() {
																 
																 var str = $("#hotelFilter").val().trim();
																 																	 
																 if(str.length > 0) {																		 
																	  $("#gobtn").prop('disabled', false);
																	 } else {
																		 $("#gobtn").prop('disabled', true);
																	 }																	 
															});
															 
															 
															room_form_index=$("#rooms").val();
															//alert(room_form_index);
															removeFun(room_form_index-1);
															var room_form_index_new=0;
															//console.log("Total room "+room_form_index_new);
															 var chAge=0;
															if(room_form_index > 1)
																{ 
																for(var j=1;j<room_form_index;j++)
																	{
																	room_form_index_new=j;
																  if(room_form_index_new <5){
																 
															     var cust_indexs = room_form_index_new;
															  
															     var   row_index=room_form_index_new;
															  
															       if(row_index>0){
															    	  // console.log("row_index");														   
															       var cust_index=Number(room_form_index_new);
															    
															        $('#cust'+(Number(cust_index)-1)).after($("#cust"+(Number(cust_index)-1)).clone().attr("id","cust" + cust_index));
															        
															    $("#cust"+ cust_index).find("#roomNo0").attr("id","roomNo"+(cust_index));
															      															    
																	 
															        $("#cust" + cust_index + " select").each(function(){
															        	
															            if(this.id.indexOf('adults') != -1){
															            $(this).attr("name","rooms[" + cust_index+"].adults");
															            $(this).attr("id","rooms" + cust_index+"adults");
															            }else if(this.id.indexOf('children') != -1){
															            	 $(this).attr("name","rooms[" + cust_index+"].children["+chAge+"].age");
																	            $(this).attr("id","rooms" + cust_index+"children["+chAge+"].age");
																	           chAge=chAge+1;
															            
															            }else if(this.id.indexOf("s ages") != -1){
															            	//console.log("s ages");
															            	$(this).removeAttr("id");
															            }else{
															            	  $(this).attr("name","rooms[" + cust_index+"].child");
																	          $(this).attr("id","rooms" + cust_index+"child");
																			  $("#rooms" + cust_index+"child").val($("#childCount"+cust_index).val());
																			  
															            }
															            
															        });
															        
															        //rooms1child
/*															        <select id="rooms0.children0.age" name="rooms[0].children[0].age" title="Select Child Age" alt="Select Child Age" class="form-control">

															        <select id="rooms1-children5-age" name="rooms1.children5.age" title="Select Child Age" alt="Select Child Age" class="form-control">
															        */
															         chAge=0;
															        $("#cust"+cust_index).find(".right").attr("id","childAge"+cust_index); 
															        
															         $("#childAge"+ cust_index).find("#age"+(cust_index-1)).attr("id","age"+(cust_index));
															         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"0").attr("id",""+(cust_index)+"0");
															         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"1").attr("id",""+(cust_index)+"1");
															         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"2").attr("id",""+(cust_index)+"2");
															         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"3").attr("id",""+(cust_index)+"3");
															         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"4").attr("id",""+(cust_index)+"4");
															       
															         $("#childAge"+ cust_index).css("display","inline");
															        
															          $("#childAge" + cust_index + " select").each(function(){															           
															        	  $(this).attr("name", "rooms[" + cust_index + "].children[" + chAge + "].age");
														                    $(this).attr("id", "rooms" + cust_index + "children[" + chAge + "].age");
														                    //console.log($("#childAge"+cust_index+chAge).val());
														                    if($("#childAge"+cust_index+chAge).val() == undefined){
														                    	 $(this).val(1);
														                    }else{
														                    	 $(this).val($("#childAge"+cust_index+chAge).val());
														                    }
														                   
														                    chAge = chAge + 1;
															            });															            
															        
															     }else{
															    	  row_index=room_form_index_new-cust_indexs;
																	  
																      for (i = 1; i <= row_index; i++) {
																    	  room_form_index_new=room_form_index_new-1;
																     $("#cust" + room_form_index_new).remove();
																     $("#childAge" + room_form_index_new).remove();
														    	 
														     }
														     }
															      
															       var room=$("#rooms").val();
															  var adult = $('#roomsadults :selected').val();
															  var child = $("#rooms0child :selected").text();
																 
																   if($('#rooms1adults').length && $('#rooms1adults').val().length){
																    
																     var adult1=  $("#rooms1adults").val();
																     var child1=  $("#rooms1child").val();
																      adult=parseInt(adult)+parseInt(adult1);
																      child=parseInt(child)+parseInt(child1);
																   }
																   
																    if($('#rooms2adults').length && $('#rooms2adults').val().length){
																    	
																 var adult2=   $("#rooms2adults").val();
																 var child2=  $("#rooms2child").val();
																     adult=parseInt(adult)+parseInt(adult2);
																      child=parseInt(child)+parseInt(child2);
																   }
																   
																  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
																 var adult3=   $("#rooms3adults").val();
																 var child3=  $("#rooms3child").val();
																   
																      adult=parseInt(adult)+parseInt(adult3);
																      child=parseInt(child)+parseInt(child3);
																   
																   }
																   
																    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
																    
																 var adult4=   $("#rooms4adults").val();
																 var child4=  $("#rooms4child").val();
																    adult=parseInt(adult)+parseInt(adult4);
																      child=parseInt(child)+parseInt(child4);
																   }
																														   
														   var text="";//room+"1 Room, 1 Adult, 0 Child";
														   
														    if(room == 1){
													         text=text+"1 Room,";
													        }else{
													          text=text+room+" Rooms,";
													        }
													        
													        if(adult==1){
													         text=text+"1 Adult,";
													        }else{
													        text=text+adult+" Adults,";
													        }
														   
														   if(child==0){
													         text=text+"0 Child";
													        }else if(child==1){
													        text=text+child+" Child";
													        }else{
													        text=text+child+" Children";
													        }
													         $("#guest").val(text);
													        
															  }
																						    
													//	  console.log("J : "+j);
														}	
													  
													}
															
														
															/*$("#guestform").click(function(){
																$(".guests").toggle();
															});
															$("#close-div").click(function(){
																$(".guests").hide();
															});*/
															
															$('#close-div').click(function()
																{
																	$('.kids_group_detail').hide();
																});
															
																													
															
															$('.big_image').on('mouseenter','img',function(){ 
																 var imgsrc=$(this).attr('src');  
																$('.image_popup').remove();           
																$(this).parent().after().append("<div class='image_popup'><img src='"+imgsrc+"'></div>");
																
															})

															//image zoom js
															$('.big_image').on('mouseout','img',function(){ 
																		 var imgsrc=$(this).attr('src');  
																		$('.image_popup').remove();           
																		
																	})
															
															
															  
															  
															  
															  var age_form_index=0;
															  var room_form_index=$("#rooms").val();
															  
															  
															  
															  $("#addroom").click(function(){																  
																  																 
																  room_form_index=$("#rooms").val();
																  removeFun(room_form_index);
																  if(room_form_index <5){
															     var cust_indexs = room_form_index;
															     var   row_index=room_form_index;
															       if(row_index>0){
															       var cust_index=Number(room_form_index);
															        $('#cust'+(Number(cust_index)-1)).after($("#cust"+(Number(cust_index)-1)).clone().attr("id","cust" + cust_index));
															        $("#cust"+ cust_index).find("#roomNo0").attr("id","roomNo"+(cust_index));
															    
																	// var chAge=0;
															        $("#cust" + cust_index + " select").each(function(){
															            if(this.id.indexOf('adults') != -1){
															            $(this).attr("name","rooms[" + cust_index+"].adults");
															            $(this).attr("id","rooms" + cust_index+"adults");
															            }else if(this.id.indexOf('children') != -1){
															            	 $(this).attr("name","rooms[" + cust_index+"].children["+chAge+"].age");
																	            $(this).attr("id","rooms" + cust_index+"children["+chAge+"].age");
																	           chAge=chAge+1;
															            }else{
															            	  $(this).attr("name","rooms[" + cust_index+"].child");
																	            $(this).attr("id","rooms" + cust_index+"child");
															            }
															            
															            
															        });
															        
															        
															        $("#cust"+cust_index).find(".right").attr("id","childAge"+cust_index); 
															        
															         $("#childAge"+ cust_index).find("#age"+(cust_index-1)).attr("id","age"+(cust_index));
															         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"0").attr("id",""+(cust_index)+"0");
															         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"1").attr("id",""+(cust_index)+"1");
															         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"2").attr("id",""+(cust_index)+"2");
															         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"3").attr("id",""+(cust_index)+"3");
															         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"4").attr("id",""+(cust_index)+"4");
															         
															        // console.log("#age" + cust_index);
															       //  console.log("#age" + "display:none");
															         $("#age"+cust_index).css("display","none");
															         $("#childAge" + cust_index).css("display","inline");
															          var chAge=0;
															          $("#childAge" + cust_index + " select").each(function(){															           
															        	  $(this).attr("name", "rooms[" + cust_index + "].children[" + chAge + "].age");
														                    $(this).attr("id", "rooms" + cust_index + "children[" + chAge + "].age");
														                    $(this).val(1);
														                   // $(this).attr("value", "0");
														                    /*$("#rooms" + cust_index + "children[" + chAge + "].age option[value='1']").attr("selected", true);
														                    $("rooms" + cust_index + "children[" + chAge + "].age").val("1");
														                    console.log($("rooms" + cust_index + "children[" + chAge + "].age").val());*/
														                  //  console.log($(this).val());
														                    chAge = chAge + 1;
															            });
															            
															     room_form_index=Number(1)+Number(room_form_index); 
															     $("#rooms").val(room_form_index);
															     }else{
															    	  row_index=room_form_index-cust_indexs;
																	  
																      for (i = 1; i <= row_index; i++) {
																     room_form_index=room_form_index-1;
																     $("#cust" + room_form_index).remove();
																     $("#childAge" + room_form_index).remove();
														    	 
																  }
														        }
															      
															       var room=$("#rooms").val();
															       var adult = $('#roomsadults :selected').val();
															       var child = $("#rooms0child :selected").text();
																     
																     $("#rooms"+(Number(room)-1)+"adults").val(1);	
																     $("#rooms"+(Number(room)-1)+"child").val(0);
																     
																     addAgeOnLoad(0,(Number(room)-1));
																    
																   if($('#rooms1adults').length && $('#rooms1adults').val().length){
																   
																     var adult1=  $("#rooms1adults").val();
																     var child1=  $("#rooms1child").val();
																      adult=parseInt(adult)+parseInt(adult1);
																      child=parseInt(child)+parseInt(child1);
																   }
																   
																    if($('#rooms2adults').length && $('#rooms2adults').val().length){
																 var adult2=   $("#rooms2adults").val();
																 var child2=  $("#rooms2child").val();
																     adult=parseInt(adult)+parseInt(adult2);
																      child=parseInt(child)+parseInt(child2);
																   }
																   
																  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
																 var adult3=   $("#rooms3adults").val();
																 var child3=  $("#rooms3child").val();
																   
																      adult=parseInt(adult)+parseInt(adult3);
																      child=parseInt(child)+parseInt(child3);
																   
																   }
																   
																    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
																    
																 var adult4=   $("#rooms4adults").val();
																 var child4=  $("#rooms4child").val();
																    adult=parseInt(adult)+parseInt(adult4);
																      child=parseInt(child)+parseInt(child4);
																   
																   }
																														   
														   var text="";//room+"1 Room, 1 Adult, 0 Child";
														   
														    if(room == 1){
													         text=text+"1 Room,";
													        }else{
													          text=text+room+" Rooms,";
													        }
													        
													        if(adult==1){
													         text=text+"1 Adult,";
													        }else{
													        text=text+adult+" Adults,";
													        }
														   
														   if(child==0){
													         text=text+"0 Child";
													        }else if(child==1){
													        text=text+child+" Child";
													        }else{
													        text=text+child+" Children";
													        }
													         $("#guest").val(text);
													        
															  }
																						    
														});
															  
															  $("#removeroom").click(function(){
																  room_form_index=$("#rooms").val();
																  //alert(room_form_index);
																  
																  if(room_form_index>1){
																	  
																	  $("#cust" + (Number(room_form_index)-1)).remove();
																	  $("#childAge" + (Number(room_form_index)-1)).remove();
																	  room_form_index=Number(room_form_index)-Number(1); 
																	     $("#rooms").val(room_form_index);
																	 // alert($("#rooms").val);
																	  var room=$("#rooms").val();
																      
																       var adult = $('#roomsadults :selected').val();
																       var child = $("#rooms0child :selected").text();
																	   
																	   if($('#rooms1adults').length && $('#rooms1adults').val().length){
																	   
																	     var adult1=  $("#rooms1adults").val();
																	     var child1=  $("#rooms1child").val();
																	      adult=parseInt(adult)+parseInt(adult1);
																	      child=parseInt(child)+parseInt(child1);
																	   }
																	   
																	    if($('#rooms2adults').length && $('#rooms2adults').val().length){
																	 var adult2=   $("#rooms2adults").val();
																	 var child2=  $("#rooms2child").val();
																	     adult=parseInt(adult)+parseInt(adult2);
																	      child=parseInt(child)+parseInt(child2);
																	   }
																	   
																	  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
																	 var adult3=   $("#rooms3adults").val();
																	 var child3=  $("#rooms3child").val();
																	   
																	      adult=parseInt(adult)+parseInt(adult3);
																	      child=parseInt(child)+parseInt(child3);
																	   
																	   }
																	   
																	    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
																	    
																	 var adult4=   $("#rooms4adults").val();
																	 var child4=  $("#rooms4child").val();
																	    adult=parseInt(adult)+parseInt(adult4);
																	      child=parseInt(child)+parseInt(child4);
																	   
																	   }
																															   
															   var text="";//room+"1 Room, 1 Adult, 0 Child";
															   
															    if(room == 1){
														         text=text+"1 Room,";
														        }else{
														          text=text+room+" Rooms,";
														        }
														        
														        if(adult==1){
														         text=text+"1 Adult,";
														        }else{
														        text=text+adult+" Adults,";
														        }
															   
															   if(child==0){
														         text=text+"0 Child";
														        }else if(child==1){
														        text=text+child+" Child";
														        }else{
														        text=text+child+" Children";
														        }
														         $("#guest").val(text);
																	  
															 }
															removeFun(room_form_index-1);	  
																
															});
																  
														});
														

														  $(function() {
															  
															  $("#checkInDate").click(function() {
																  $('.kids_group_detail').hide();
															  });
															  $("#checkOutDate").click(function() {
																  $('.kids_group_detail').hide();
															  });
															 
															  var d = new Date();
															    var monthNames = ["January", "February", "March", "April", "May", "June",
															        "July", "August", "September", "October", "November", "December"];
															    today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
															    
															  var checkInDate = $("#checkInDate").val();
															  var checkOutDate = $("#checkOutDate").val();	
															//   alert("checkOutDate:"+checkOutDate);
															  var ch=2;
															  var  md = new Date();
															  var  minDate = new Date();
															  var  maxDate = new Date(checkInDate);
															   maxDate.setMonth(maxDate.getMonth() + 11);
															   //minDate.setDate(md.getDate() + ch);
															   minDate.setDate(md.getDate());
															  
															  
															   $("#checkInDateDiv, #checkInDate_new").click(function() {
															        //  alert('ffd');
															      // $("#checkInDate").show();
															        $('#checkInDate').datepicker('show'); 
															    });
														    
														 
														    
																	$( "#checkInDate" ).datepicker({
																		
																	
																		dateFormat: "dd-mm-yy",
																	 numberOfMonths: numberOfMonthValue,
																	 minDate: minDate,maxDate: maxDate,
																        autoClose: false,        
																        onClose: function() {
																            //alert();
																           /* $(this).show();
																            $(this).datepicker("show");
																          var inputs = $(this).closest('.carSearhEngine').find(':input.cal');
																          inputs.eq(inputs.index(this)).focus();*/
																        	
																        	var dropDateMin = $("#checkInDate").datepicker("getDate");
																        	var dropDateMax = $("#checkOutDate").datepicker("getDate");        	
																          
																          try {
																              if (dropDateMin != null && dropDateMin != '') 
																              {
																            	  $("#checkOutDate").val($("#checkInDate").val());
															                         var from = $('#checkInDate').datepicker('getDate');
															                         var date_diff = Math.ceil((from.getTime() - Date.parse(today)) / 86400000);
															                         var maxDatedrop=date_diff+30+'d';
															                         $("#checkOutDate").datepicker("change", { minDate: new Date(dropDateMin)});
															                         $("#checkOutDate").datepicker("change", { maxDate: maxDatedrop });
																              }
																          }catch(e)
																              {
																              }
																          $("#checkOutDate").datepicker('show');
																          
																        }
																	});
																  });
															   $(function() {
																   
																   var d = new Date();
																    var monthNames = ["January", "February", "March", "April", "May", "June",
																        "July", "August", "September", "October", "November", "December"];
																    today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
																   
																   var checkInDate = $("#checkInDate").datepicker("getDate");;
																	//  var checkOutDate = $("#checkOutDate").val();
																	 // console.log("checkInDate:"+checkInDate);
																	  
																	  var minDate = new Date(checkInDate.getFullYear(), checkInDate.getMonth(), checkInDate.getDate());
																	  var maxDate1 = new Date(checkInDate.getFullYear(), checkInDate.getMonth(), checkInDate.getDate());
																	  
																	   /*var  minDate = new Date(checkInDate);
																	   
																	   var maxDate=new Date(checkOutDate);	*/		
																	  
																	   var from = new Date(checkInDate.getFullYear(), checkInDate.getMonth(), checkInDate.getDate());																	   
																	   /*var from = new Date(checkInDate);*/
																	   //console.log("checkOutDate:"+from);
												                         var date_diff = Math.ceil((from.getTime() - Date.parse(today)) / 86400000);
												                         
												                         //console.log("date_diff"+date_diff);
												                         
												                         
												                         maxDate1=date_diff+30+'d';

																	   $("#checkOutDateDiv, #checkOutDate_new").click(function() {																		   
																		   
																		   //console.log("checkInDate "+checkInDate +" checkOutDate"+checkOutDate)																		   
																	        $('#checkOutDate').datepicker('show'); 																	       
																	    });														    
														    
																		$( "#checkOutDate" ).datepicker({
																		 // changeMonth: true,
																		 // changeYear: true,
																		   dateFormat:"dd-mm-yy",
																		   numberOfMonths: numberOfMonthValue,
																		   showButtonPanel: true,
																	        minDate:minDate,maxDate:maxDate1,
																		});
																	  });
															   
															      
															   
															   function randomString(a) {
																    var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
																    a || (a = Math.floor(Math.random() * b.length));
																    for (var c = "", d = 0; d < a; d++) c += b[Math.floor(Math.random() * b.length)];
																    return c
																}
															   
															   function imgError(img,srcc) 
															   { 		
																	 img.error="";
																	 img.src=srcc;	
																}															   
															   
															   
															   
															  $(document).ready(function(){									   
															   
															   
																	  var checkInDate = $("#checkInDate").val();
																	  var checkOutDate = $("#checkOutDate").val();	
																	   var  minDate = new Date(checkInDate);
																	
																	
																	
																	    
																	    var  returnsDate = new Date(checkOutDate);
																	   
															   var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
													  								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
																					];
													     var weekday=new Array(7);
																weekday[1]="MON";
																weekday[2]="TUE";
																weekday[3]="WED";
																weekday[4]="THU";
																weekday[5]="FRI";
																weekday[6]="SAT";
																weekday[0]="SUN";
													     
													     
													             day  = minDate.getDate(),  
													         	month = monthNames[minDate.getMonth()];
													 		    var days=weekday[minDate.getUTCDay()];
													           
													             var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
																           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
													            
													           
													              
													              
													          
													             $("#checkInDateDiv").html(divText);
													            
													   
													            
													              day  = returnsDate.getDate(),  
													         	month = monthNames[returnsDate.getMonth()];
													 		    var days=weekday[returnsDate.getUTCDay()];
													 		    
													 		     
													          var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
																           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
													            
													            
													             $("#checkOutDateDiv").html(divsText);
													              
													             var adultCount0 = $("#adultCount0").val();		
													             	var adultCount1 = $("#adultCount1").val();
																	var adultCount2 = $("#adultCount2").val();
																	var adultCount3 = $("#adultCount3").val();
																	var adultCount4 = $("#adultCount4").val();
																	var childCount0 = $("#childCount0").val();
																	var childCount1 = $("#childCount1").val();
																	var childCount2 = $("#childCount2").val();
																	var childCount3 = $("#childCount3").val();
																	var childCount4 = $("#childCount4").val();
																    
																       var room=$("#rooms").val();
	   
																       var adult = adultCount0;//$('#roomsadults option:selected').val();

																	     var child=childCount0;//$("#rooms0child option:selected").val();;
																	   if($('#rooms1adults').length && $('#rooms1adults').val().length){
																	   
																	     var adult1=  $("#rooms1adults").val();
																	     var child1=  $("#rooms1child").val();
																	      adult=parseInt(adult)+parseInt(adult1);
																	      child=parseInt(child)+parseInt(child1);
																	   }
																	   
																	    if($('#rooms2adults').length && $('#rooms2adults').val().length){
																	 var adult2=   $("#rooms2adults").val();
																	 var child2=  $("#rooms2child").val();
																	     adult=parseInt(adult)+parseInt(adult2);
																	      child=parseInt(child)+parseInt(child2);
																	   }
																	   
																	  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
																	 var adult3=   $("#rooms3adults").val();
																	 var child3=  $("#rooms3child").val();
																	   
																	      adult=parseInt(adult)+parseInt(adult3);
																	      child=parseInt(child)+parseInt(child3);
																	   
																	   }
																	   
																	    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
																	    
																	        var adult4=   $("#rooms4adults").val();
																	        var child4=  $("#rooms4child").val();
																	        adult=parseInt(adult)+parseInt(adult4);
																	        child=parseInt(child)+parseInt(child4);
																	   
																	   }
																	
																	
																	if(adultCount0 > 0)
																	{
																		//alert("adult:"+adultCount0);
																		$("#roomsadults").val(adultCount0); 
																		addAgeOnLoad(childCount0,0);
																		if(childCount0 > 0)
																		{
																			//alert("child:"+childCount0);
																			
																			$("#rooms0child").val(childCount0); 
																			
																			for (i = 0; i < childCount0; i++) { 
																				var childAge1 = $("#childAge0"+i+"").val();
																				var childAgeId = "rooms0-children"+i+"-age"; 
																				$("#"+childAgeId).val(childAge1);
																				
																				
																			}
																		}
																	}
																	
																	
																	if(adultCount1 > 0)
																	{
																		$("#rooms1adults").val(adultCount1); 
																		//alert(adultCount1);
																		addAgeOnLoad(childCount1,1); 
																		if(childCount1 > 0)
																		{
																			//alert(childCount1);
																			$("#rooms1child").val(childCount1); 
																			
																			for (i = 0; i < childCount1; i++) { 
																				var childAge1 = $("#childAge1"+i+"").val();
																				var childAgeId = "rooms1-children"+i+"-age"; 
																				$("#"+childAgeId).val(childAge1);
																				
																				
																			}
																		}
																	}
																	
																	if(adultCount2 > 0) 
																	{
																		$("#rooms2adults").val(adultCount2);
																		addAgeOnLoad(childCount2,2);
																		if(childCount2 > 0)
																		{
																			$("#rooms2child").val(childCount2); 
																			
																			for (i = 0; i < childCount2; i++) {
																				var childAge2 = $("#childAge2"+i+"").val();
																				var childAgeId = "rooms2-children"+i+"-age"; 
																				$("#"+childAgeId).val(childAge2);
																				
																				
																			}
																		}
																		
																	}
																	if(adultCount3 > 0)
																	{
																		$("#rooms3adults").val(adultCount3); 
																		addAgeOnLoad(childCount3,3);
																		if(childCount3 > 0)
																		{
																			$("#rooms3child").val(childCount3);
																			
																			for (i = 0; i < childCount3; i++) {
																				var childAge3 = $("#childAge3"+i+"").val();
																				var childAgeId = "rooms3-children"+i+"-age"; 
																				$("#"+childAgeId).val(childAge3);
																				
																				
																			}
																		}
																	}
																	if(adultCount4 > 0)
																	{
																		$("#rooms4adults").val(adultCount4); 
																		addAgeOnLoad(childCount4,4);
																		if(childCount4 > 0)
																		{
																			$("#rooms4child").val(childCount4);
																			
																			for (i = 0; i < childCount4; i++) {
																				var childAge4 = $("#childAge4"+i+"").val();
																				var childAgeId = "rooms4-children"+i+"-age"; 
																				$("#"+childAgeId).val(childAge4);
																				
																				
																			}
																		}
																	}
															   
															   });
															 
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

															         /* $('#fadebackground').height(height1 + "px");
															          $('#fadebackground').width(width1 + "px");
															          $('#fadebackground').toggle();*/
															          $('#' + divProgressBar).toggle();
															          return false;
															      }
															      catch (e) 
															      {
															      	return false; 
															      }
															  }
															  
															  var sessionTimeout = 30;

															  window.onload = DisplaySessionTimeout();

															  function DisplaySessionTimeout()
															  {
															      sessionTimeout = sessionTimeout - 1;
															     // console.log("DisplaySessionTimeout()");
															      if (sessionTimeout >= 0)
															          window.setTimeout("DisplaySessionTimeout()", 30000);
															      else 
															      {
															          callSessionTimeOut();
															      }
															  };

															  function callSessionTimeOut()
															  {
															  	 //form_data = "";
																  popup('divSessionOut', 30, 30);
																 // $("#myModal").modal('show');
															  	// console.log("Session Time out");
															       return true;
															  };	
															  
															  
															  var form_data = $('#searchHotel').serialize();
															   $(document).ready( function () {
																   
																   
																   
																   form_data = $('#searchHotel').serialize();
																   //console.log("form_data 1:"+form_data);
															   });


															   function submitHotelForm(){
																   
																   if ( form_data == $('#searchHotel').serialize()) { 
																		$('#sameSearch').show();
																        return false;
																      } else {
																    	 
																    	  $('#sameSearch').hide();
																	   var validatorHotel = $("#searchHotel").validate({
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
																	   	stayCity: {
																	  		required: true,
																	  		minlength: 3
																	  	},
																	  	checkInDate: {
																	  		required: !0
																	  	},
																	  	checkOutDate: {
																	  		required: !0 
																	  	},
																	  	room: {
																	  		required: true,
																	  		 range: [1, 5]
																	  		
																	  	},
																	    },  
																       errorElement: "span" ,                              
																       messages: {
																                 stayCity: {
																  					required: "Please enter a valid Destination City.",
																  					minlength: "Destination City must consist of at least 3 characters",
																  					
																  				},
																  				checkInDate: {
																  					required: "Please enter a valid Check-In Date.",
																  					
																  				},
																  	             checkOutDate: {
																  					required: "Please enter a valid Check-Out Date.",
																  					
																  				},
																       }
																       
																   }); 
																    if(validatorHotel.form()){ // validation perform
																    var rndId = randomString(12);
																    $('form#searchHotel').attr({action: '/hotelSearch/id/'+rndId});   
																    $('form#searchHotel').submit();
																   
																   }
																  }
																};
																
															   
															   
															   
															   
															   
															   
															   
															   
															   
															   
															   
															   
