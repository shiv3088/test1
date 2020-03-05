(function(){

	angular.module('angularRecaptcha',['vcRecaptcha','ngMessages'])
	
	.controller('recapCtrl',['vcRecaptchaService','$http','$scope','$timeout', '$filter',function(vcRecaptchaService,$http,$scope,$timeout,$filter){
		var vm = this;
		vm.publicKey = "6LdcWhkTAAAAAP1KKnEmNLoKAiQcPOpVBu8KpKtI";
		 $scope.list=[];
		 $scope.convertToDate = function (stringDate){
			    var dateOut = new Date(stringDate);
			    dateOut.setDate(dateOut.getDate());
			    return dateOut;
			  };
		
			  
			  $scope.tripType="2";
		      
		        //$scope.cabinClass=id.CabinType;
		        
		        $scope.adult="1";
		        $scope.child="0";
		        $scope.infant="0";
		        $scope.infantWs="0";
		$http.get('/PostFareAlert').success(function(response){
			
			//console.log(response);
		    $scope.list=response;
		  
			
		})
		.error(function(error){
		
		})
		
		$scope.formatDate = function(date){
            var date = date.split("-").join("/");
            var dateOut = new Date(date);
            return dateOut;
        }; 
        
      /*  $scope.deals = new StaticDealsFare()*/
    
		 $scope.submitSearch = function(from,to,depart,ret) {
			// console.log("id:"+id);
				   // $scope.froCity=id.froCity.AirportName;
			       
        	//$scope.deals=id;
			    
			 
				    $scope.froCity=from;
				    $scope.toCity=to;
				       
			       // $scope.toCity=id.toCity.AirportName;
			        //$scope.froDate=id.depDate; 2016-04-20
			        $scope.froDate=$filter('date')(new Date(depart), 'yyyy-MM-dd');
			        //$scope.froDate=id.depDate;
			       // $scope.toDate=id.retDate;
			        $scope.toDate= $filter('date')(new Date(ret), 'yyyy-MM-dd');
			        //console.log("id:"+id.depDate);
			       // console.log("id:"+id.cabinClass);
			        $scope.showSomething = function(input) {
			            return input == "true" ? "2" : "1";
			        };
			       $scope.tripType= "2";//$scope.showSomething(id.journeyType);
			       $scope.infant="0";
			     /*  if(id.SearchReturnFlight == "true"){
			       angular.element(document.getElementById('returnDate'))[0].disabled = false;
			       }else{
			    	   angular.element(document.getElementById('returnDate'))[0].disabled = true;
			       }*/
			       
			        $scope.cabinClass='Economy';
			        
			        $scope.adult=String(1);
			        $scope.child=String(0);
			        $scope.infant=String(0);
			        $scope.infantWs=String(0);
			       // alert(id.froCity.CityName);
			        $scope.filterTextTimeout;
			        if ($scope.filterTextTimeout) $timeout.cancel($scope.filterTextTimeout);

			       
			        $scope.filterTextTimeout = $timeout(function() {
			        	submitForm();
			        }, 250); // delay 250 ms
			        
			  }
		
	
		
		vm.signup = function(){
			
			/* vcRecaptchaService.getResponse() gives you the g-captcha-response */
			
			if(vcRecaptchaService.getResponse() === ""){ //if string is empty
				alert("Please resolve the captcha and submit!")
			}else {
				// Set form values & construct data to send
				var post_data = {  //prepare payload for request
					'froCity':vm.froCity,
					'toCity':vm.toCity,
					'emailId':vm.email,
					'amount':vm.amount,
					'grecaptcha_response':vcRecaptchaService.getResponse()  //send g-captcah-reponse to our server
				}
				
				/* Make Ajax request to our server with g-captcha-string */
				$http.post('/farealert/signup',post_data).success(function(response){
					//console.log(response);
					alert("Successfully verified and signed up the user");
					/*if(response == "Fare Alert Registered"){
						alert("Successfully verified and signed up the user");
					}else{
						alert("User verification failed");
					}*/
				})
				.error(function(error){
				
				})
				
			}
		}
	}])
})()