<%@	taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!doctype html>
<html>
<head>
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="viewport" content="user-scalable=0, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
<title>Unsubscribe Newsletter - Travelopick</title>
<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/css/font-awesome.css" rel="stylesheet">


<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body>
<!--- Header Section Start---->
<jsp:include page="home_header.jsp"></jsp:include>
<!--- Header Section End---->
<!--- Main Section---->
<div class="main " ng-app="unsubApp">
  <div class="security_bg">
    <div class="container">
      <div class="row">
        <div class="col-sm-3 col-lg-4"> </div>
        <div class="col-sm-6 col-lg-4">
          <div class="unsubscribe-block">
            <div class="text-box">
              <div class="unsubscribe_box" ng-controller="unsubController">
                <h2><img src="/resources/images/check-icon.png" width="40"> Unsubscribe Email</h2>
                <h4>Please Insert your email for unsubscribe</h4>
                <form ng-submit="delEmail()" id="emailform">
                  <input type="email" required="" id="useremail" class="form-control" name="useremail" ng-model="useremail" placeholder="Enter email id ...">
                  <input class="btn btn-primary" type="submit" value="Click">
                  <div id="responseDiv" style="display:none">
                    <p id="signUpMessage" style="padding:5px 15px; color: green;font-size: medium;"> <a style="cursor:pointer;" onClick="HidePop('responseDiv');"><img src="/resources/images/close_button.png" alt="close"/></a> </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Main-->
  <!--- Footer Section Start---->
  <jsp:include page="home_footer.jsp"></jsp:include>
  <!--- Footer Section End---->
  <script src="/resources/js/jquery-1.8.2.min.js"></script>
  <script src="//code.angularjs.org/1.4.0/angular.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular-messages.js"></script>
  <script type="text/javascript">

angular.module('unsubApp', []).

  
  controller('unsubController', function($scope, $http) {  
  
  $scope.CardDetailsDiv = false; 
    
    $scope.delEmail = function () 
    {
           
       var demail=this.useremail;
      
       
     
       
        var deleteData =
		{
				'email' : demail
		};
		
		var response = $http.post('/unsubscribe/'+demail, 'Content-Type: application/json');
		response.success(function(data, status, headers, config)
		{	
		
		  message="We received your request and we're in the process of updating your account. You may continue to receive promotional emails from us until these changes are reflected in our system.";
			$scope.CardDetailsDiv = true;
			
			var placeholder2 = document.getElementById('signUpMessage'); 
			var responseDiv = document.getElementById('responseDiv');
			var vis = responseDiv.style;
			if(vis.display=='' || vis.display=='none') {
				 vis.display = 'block';										 							         	  
				 } 
			 placeholder2.innerHTML = message;
			
		});		
		
		response.error(function(data, status, headers, config)
		{
				message="Your email alredy Unsubscribe.";
				$scope.CardDetailsDiv = true;
				var placeholder2 = document.getElementById('signUpMessage'); 
			var responseDiv = document.getElementById('responseDiv');
			var vis = responseDiv.style;
			if(vis.display=='' || vis.display=='none') {
				 vis.display = 'block';										 							         	  
				 } 
			 placeholder2.innerHTML = message;
		
		});  
		
		$('#emailform').trigger("reset");
       
    };

    
    
  });


</script>
</div>
</body>
</html>
