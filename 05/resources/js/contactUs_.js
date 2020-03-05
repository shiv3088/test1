(function(){

	angular.module('angularRecaptcha',['vcRecaptcha','ngMessages'])
	
	.controller('recapCtrl',['vcRecaptchaService','$http','$scope',function(vcRecaptchaService,$http,$scope){
		var vm = this;
		vm.publicKey = "6LdcWhkTAAAAAP1KKnEmNLoKAiQcPOpVBu8KpKtI";
		 $scope.list=[];
		 $scope.convertToDate = function (stringDate){
			    var dateOut = new Date(stringDate);
			    dateOut.setDate(dateOut.getDate());
			    return dateOut;
			  };
	
			  $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;  
			  $scope.ph_numbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
		vm.signup = function(){
			
			/* vcRecaptchaService.getResponse() gives you the g-captcha-response */
			
			if(vcRecaptchaService.getResponse() === ""){ //if string is empty
				alert("Please resolve the captcha and submit!")
			}else {
				// Set form values & construct data to send
				var post_data = {  //prepare payload for request
					'name':vm.name,
					'emailId':vm.email,
					'message':vm.message,
					
					'supportType':vm.support_type,
					'subject':vm.subject,
					'booking':vm.booking,
					'phone':vm.phone,
					
					
					'grecaptcha_response':vcRecaptchaService.getResponse()  //send g-captcah-reponse to our server
				}
				
				/* Make Ajax request to our server with g-captcha-string */
				$http.post('/contactus',post_data).success(function(response){
					//console.log(response);
					vm.name="";
					vm.email="";
					vm.message="";
					alert("Your Query is Submitted with us. Soon our Agent Contact You.");
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