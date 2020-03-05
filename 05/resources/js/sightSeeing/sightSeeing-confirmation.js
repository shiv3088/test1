var sightSeeingConfirm = angular.module("SightSeeingConfirmationPage", []);


sightSeeingConfirm.controller("sightSeeingConfirmationController",['$scope','$http', '$window', '$timeout', function($scope, $http, $window, $timeout) {
	
	$scope.reSendMail = function() {
		
		var t = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		var url = '/activity/sendmailagain/';
		var csID = $('#customerSessionId').val();
		var mailId = $('#mailAgain').val();
		
		if(mailId == '') {
			document.getElementById('mailResponseId').innerHTML= "<div class='crError'>Please enter Email Id.</div>";
			document.getElementById('mailResponseId').style.display = "block";
		} else {
			
			if(t.test(mailId) == false) {
				document.getElementById('mailResponseId').innerHTML="<div class='crError'>Please enter valid Email id.</div>";
				document.getElementById('mailResponseId').style.display = "block";
			} else {
				url = url + csID;
				url = url + "/" + mailId;
				var response = $http.get(url);
				response.success(function(data, status) {
					if(data === "Found Issue in sending Mail!"){
						document.getElementById('mailResponseId').innerHTML= "<div class='crError'>Please enter valid Email Id.</div>";
						document.getElementById('mailResponseId').style.display = "block";
					} else {
						document.getElementById('mailResponseId').innerHTML= "<div class='crSuccess'>"+ data +"</div>";
						document.getElementById('mailResponseId').style.display = "block";
						
						$timeout(function() {
							document.getElementById('mailResponseId').innerHTML="";
							$scope.mailAgain="";
							document.getElementById('mailAgain').value="";
							document.getElementById('mailResponseId').style.display = "none";
							document.getElementById('mailSection').style.display = "none";
						}, 5000);
						
					}
				});
				
				response.error(function(error){
					document.getElementById('mailResponseId').innerHTML="<div class='crError'>Please enter valid Email id.</div>";
					document.getElementById('mailResponseId').style.display = "block";
				})
			}
			
		}
			
		
	}
	
}]);



function showMailForm(e){
    var div = document.getElementById("mailSection");
    if(div.style.display === "inline-block"){
        div.style.display = "none";
    }else{
        div.style.display = "inline-block";
    }
}


