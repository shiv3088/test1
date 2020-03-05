(function(){

	angular.module('angularSign',[])
	
	.controller('signCtrl',['$http',function($http){
		var vms = this;
	
		   
				
		vms.signup = function(){
			
						// Set form values & construct data to send
				var post_data = {  //prepare payload for request
					'emailId':vms.email //send g-captcah-reponse to our server
				}
				
				/* Make Ajax request to our server with g-captcha-string */
				$http.post('/farealert/signup',post_data).success(function(response){
					//console.log(response);
					alert("Successfully signed up for Newsletter");
					/*if(response == "Fare Alert Registered"){
						alert("Successfully verified and signed up the user");
					}else{
						alert("User verification failed");
					}*/
				})
				.error(function(error){
				
				})
				
			
		}
	}])
})()