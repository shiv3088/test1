(function(){
var app = angular.module('thingstodoApp',[]) 

app.controller('thingstodoCtrl',['$http','$scope','$window',function($http,$scope,$window)
{
	       $scope.cityName = "";
	       $scope.response ="";
	       $scope.cityURL ="";
	       
	       $scope.cityNameUrl = function () 
	       {
	  	       var cityNames = document.getElementById("cityName").value;
	  	       $scope.errorMessage = "";
			   $scope.showMsgs = false;
  	     
		  	   if(cityNames !="")
		  	   { 
			  	       var response = $http.get('/cityNameUrl/'+cityNames);
					   response.success(function(data, status, headers, config)
					   {
							$scope.response = data;
							
							//console.log("<<:::CityURL ::: >>"+JSON.stringify({data: data}));
							
							if(angular.isDefined(data.cityContentData[0]))
							{
								   $scope.cityURL = data.cityContentData[0].cityURL;
								   var cityUrls = $scope.cityURL;
								   
								   if(cityUrls == "" || cityUrls == null)
								   {//things-to-do-in-new-york-nyc
									   $window.location.href = '/activities/'+'things_noResult';
								   }
								   else
								   {
									    $window.location.href = cityUrls;
								   }
							}
							else if(angular.isUndefined(data.cityContentData[0]))
							{
								$window.location.href = '/activities/'+'things_noResult';
							}
						
					   }),
					   response.error(function(data, status, headers, config)
					   {
							alert( "Exception details " + JSON.stringify({data: data}));
					   });
		  	    }
			    else
	       	    {
			    	console.log("<<:::CityURL ::: >>error");
	        	    $scope.showMsgs = true;
			        $scope.errorMessage = "Please Enter City Name";
	       	    }
		   
         };
   }])
    
    function split(val) 
	{
	   return val.split(/,\s*/);
	}
    function extractLast(term) 
    {
       return split(term).pop();
    }

    $(document).ready(function ()
     {
    	   var cityName ;
    	   $( "#cityName").autocomplete({
    		      source: function (request, response) {
    		         $.getJSON("/activitiescity", {
    		                term: extractLast(request.term),
    		            }, response);
    		        // console.log("response is ::: " + response);
    		        },
    		        search: function () {
    		            var term = extractLast(this.value);
    		            if (term.length < 1) {
    		                return false;
    		            }
    		        },
    		        focus: function () {
    		            return false;
    		        },
    		        select: function (event, ui) {
    		            var terms = split(this.value);
    		            terms.pop();
    		            terms.push(ui.item.value);
    		            this.value = terms;
    		            cityName = false;

    		            return false;
    		        }
    		    }).blur(function () {
    		    	 if(cityName){
    		    		 if($("#cityName").val().indexOf(",") == -1){
    		             $("#cityName").val($('ul#ui-id-1 li:first a').text());
    		    		 }
    		    	 }
    		    });
    	
          })
})() 

