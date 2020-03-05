var angConfirm = angular.module('angularConfirmation', []);

angConfirm.controller('confirmCtrl', [ '$http', '$scope', '$location','$timeout',
function($http, $scope, $location,$timeout) {
	
	var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var cdAmt = $('#cdAmt').val();
    var pDate = $('#pDate').val();
    var dDate = $('#dDate').val();
    
    $scope.isDisplayIns="No";
    
   
    var diffDays = Math.round(Math.abs((new Date(pDate).getTime() - new Date(dDate).getTime()) / (oneDay)));
    diffDays = diffDays + 1;
    $scope.noOfInsuredDays = diffDays;
    $scope.totalCarDamageAmt = cdAmt * diffDays;
    $scope.carDamageAmt=cdAmt;
    $scope.checkCondition = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
	$scope.reSendMail = function() {
		var url = '/car/sendMailAgain/';
		var csID = $('#customerSessionId').val();
		var mailId = $('#mailAgain').val();
		url = url + csID;
		url = url + "/" + mailId;
		
		if(mailId == '') {
			document.getElementById('mailResponseId').innerHTML= "<div class='crError'>Please enter Email Id.</div>";
			document.getElementById('mailResponseId').style.display = "block";
		} else {
			if($scope.checkCondition.test(mailId) == false) {
				document.getElementById('mailResponseId').innerHTML="<div class='crError'>Please enter valid Email id.</div>";
				document.getElementById('mailResponseId').style.display = "block";
			} else {
				var response = $http.get(url);
				response.success(function(data, status){
					if(data === "Found Issue in sending Mail!"){
						document.getElementById('sendEmailError').innerHTML= "<div class='crError'>Please enter valid Email id.</div>";
						document.getElementById('sendEmailError').style.display = "block";
					} else {
						document.getElementById('sendEmailError').innerHTML= "<div class='crSuccess'>"+ data +"</div>";
						document.getElementById('sendEmailError').style.display = "block";
						
						$timeout(function() {
							document.getElementById('sendEmailError').innerHTML="";
							$scope.mailAgain="";
							document.getElementById('mailAgain').value="";
							document.getElementById('sendEmailError').style.display = "none";
							//document.getElementById('mailSection').style.display = "none";
					      }, 5000);
					}
				});
				
				response.error(function(error){
					document.getElementById('sendEmailError').innerHTML="<div class='crError'>Please enter valid Email id.</div>";
					// if(data === 'undefined') {
					// 	document.getElementById('mailResponseId').innerHTML="<p class='crError'>Please enter valid Email id.</p>";
					// } else {
					// 	document.getElementById('mailResponseId').innerHTML="<p class='crError'>"+data+"</p>";
					// }
					document.getElementById('sendEmailError').style.display = "block";
				})
			}
		}
		
		
		
	}
} ])


var cffTitle = document.title,
cffTitleBlur = document.getElementsByTagName('title')[0].getAttribute('data-product');
window.onblur = function () {
	document.title = cffTitleBlur;
}
window.onfocus = function() {
	document.title = cffTitle;
}

function submitForm(bookingId) {
	
	var damageGuard="No";
			
	damageGuard=$('input[name=carDamageGuard]:checked').val();
	
	if(damageGuard === undefined || damageGuard === null) {
		document.getElementById("tmpid").style.display='block'; 
		$("#tmpid").addClass('help-block');
		$("#tmpid").removeClass('tmpid');
	} else if(damageGuard === "Yes") {
		
		document.getElementById("tmpid").style.display='none'; 
		$("#tmpid").removeClass('help-block');
		$("#tmpid").addClass('tmpid');
		
		$('#btnSearchFlights').attr('disabled',true);
		
	    $('form#booking').attr({action: '/carInsuranceAfterBooking/'+bookingId});
		  
		$('form#booking').submit();
	} else if(damageGuard === "No") {
		document.getElementById("tmpid").style.display='none'; 
		$("#tmpid").removeClass('help-block');
		$("#tmpid").addClass('tmpid');
	}
};

