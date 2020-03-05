(function(){

	angular.module('feedbackRecaptcha',[])
	
	.controller('recapCtrl',['$http','$scope',function($http,$scope){
		$scope.feedbackForm=true;
		 $scope.thankuForm=false;
		 $scope.support_type="";
		 $scope.email="";
		 $scope.list=[];
			  $scope.feedbackSubmit = function(){
				 
			if($scope.support_type == ""){
				document.getElementById("checkError").style.display = "block";
				return false;
			}
			if($scope.support_type != ""){
				  
				var mail = document.getElementById("emailId").value;
				if(mail ==""){
					document.getElementById("checkEmailError").style.display = "block";
			        return false;
				}
		        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
		        if(mailformat.test(mail))  
		        {
		        	 document.getElementById("checkEmailError").style.display = "none";
		 	        document.getElementById("checkEmailValidError").style.display = "none";
		        
		        }  
		        else  
		        {
		        document.getElementById("checkEmailError").style.display = "none";
		        document.getElementById("checkEmailValidError").style.display = "block";
		        return false;  
		        }  
		        
			}
				var post_data = { 
					'message':$scope.message,
					'supportType':$scope.support_type,
					//'subject':$scope.subject,
					'emailId':$scope.email
				}
				 
				$http.post('/feedbackSubmit',post_data).success(function(response){
					$scope.message="";
					$scope.feedbackForm=false;
					$scope.thankuForm=true;
				})
				.error(function(error){
				
				})
				
		},
		$scope.checkBoxClicked = function (value){
			if($scope.support_type == ""){
			$scope.support_type = value;
			document.getElementById("checkError").style.display = "none";
			}
			else{
				$scope.support_type = $scope.support_type+","+value;
			}
			
		}
		
	}])
})()


function ValidateEmail()  
	        {  
			var mail = document.getElementById("emailId").value;
			if(mail ==""){
				document.getElementById("checkEmailError").style.display = "block";
		        return false;
			}
	        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	        if(mailformat.test(mail))  
	        {
	        	 document.getElementById("checkEmailError").style.display = "none";
	 	        document.getElementById("checkEmailValidError").style.display = "none";
	        
	        }  
	        else  
	        {
	        document.getElementById("checkEmailError").style.display = "none";
	        document.getElementById("checkEmailValidError").style.display = "block";
	        return false;  
	        }  
	        } 
