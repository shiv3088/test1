angular.module('surveyApp', []).

  
  controller('surveyController',['$http', '$window', '$scope','$timeout', function($http, $window, $scope,$timeout) { 
  
	$scope.message=""; 
	$scope.alertMessage=false;
	$scope.showMsgs = false;
	$scope.dobError=false;
	$scope.popUp=false;
	$scope.dd='';
	$scope.mm='';
	$scope.yy='';
	
	
		
	$scope.dobErr=function()
	{
	   $scope.dobError=false;	
	};
								  
	$scope.submitSurvey = function (surveyForm) 
    {
    
     if($scope.dd == '' || $scope.mm == '' || $scope.yy == '')
      {
        $scope.dobError=true;
      }    
      if ($scope[surveyForm].$valid )
      {
         //alert($scope.dd);alert($scope.mm);alert($scope.yy);
        
        if($scope.dd != '' && $scope.mm != '' && $scope.yy != '')
         {
         
          var dob=$scope.mm+"-"+$scope.dd+"-"+$scope.yy;
       
         $scope.serror=false;     
		       var pageData =
				{
						'FirstName' : document.getElementById('FirstName').value,
						'MiddleName' : document.getElementById('MiddleName').value,
						'LastName' : document.getElementById('LastName').value,
						'DateOfBirth' : dob,
						'Email' : document.getElementById('email1').value,
						'SocialMediaUrl' : document.getElementById('SocialMediaUrl').value,
						'DreamDestination' : document.getElementById('DreamDestination').value,
						'Message' : document.getElementById('usermessage').value,
						'SiteID' : 'travelopick'
				};
				
				var response = $http.post('smm/survey',pageData);
				response.success(function(data, status, headers, config)
				{	
				
				 	console.log(JSON.stringify({data: data}));
				 	
				 	$scope.message="Thank You! You are now part of the interested lot.";
								
								$timeout(function () { $scope.alertMessage = true; window.location="/deals/valentines-travel-offers";}, 5000);	
											
								$scope.alertMessage=false;	
								
								$scope.popUp=true;							
								 
				});		
				
				response.error(function(data, status, headers, config)
				{
						
					console.log(JSON.stringify({data: data}));
					
					$scope.message="Please Fill Mandatory Field ....";
																				
								/* $timeout(function () { $scope.alertMessage = true; window.location="/deals/valentines-travel-offers";}, 5000);
								$scope.alertMessage=false; */	
								//$scope.popUp=true;					
				});    
         }
         else
			{			 
			$scope.dobError = true;
			}
         
         }
       
		else
		{		 
		$scope.showMsgs = true;
		}
        
	  $('#surveyForm').trigger("reset");
       
    }; 
    
  }]);