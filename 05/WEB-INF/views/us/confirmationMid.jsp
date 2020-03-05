<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!doctype html>
<html>
<head>
<!--[if lt IE 9]>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>${data.siteName} - Your flight details and Book</title>

<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
 <link href="/resources/flight-result/css/bootstrap.min.css" rel="stylesheet">
 <link href="/resources/flight-result/css/font-awesome.min.css" rel="stylesheet">  
 <link href="/resources/us/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/flight-result/css/angular-busy.css" rel="stylesheet">
<link href="/resources/us/css/result-style.css?23122019" rel="stylesheet">
<script src="/resources/flight-result/lib/angular/angular.js"></script>
<script src="/resources/flight-result/js/jquery.1.11.1.min.js"></script>
<script src="/resources/flight-result/js/local-cache.js"></script>
<script>

    $(document).ready(function () { 
    currentLocation = window.location;
//alert("full value : "+currentLocation);
arr = currentLocation.toString().split('/');
strFile = arr[arr.length-1];
document.getElementById("currentLocation").value=strFile;


arr = currentLocation.toString().split('/');

url = arr[0]+arr[1]+"//"+arr[2]+"/booked/"+strFile;
//alert("url value : "+url); 
      
          var encodedUrl = decodeURIComponent(url);
         if(encodedUrl == "undefined"){
         // $(location).attr("href", "https://www.travelopick.com/");
          }
          
     
      $('form#booking').attr({action: '/us/booked/'+strFile});  
      //$('form#booking').attr({action: '/crossell/home/'+strFile});	  
      $('form#booking').submit();
        
    }); 
    
   
</script>  
<script type="text/javascript">
    window.history.forward();

    function noBack() {
        window.history.forward();
    }
    
 
</script>


<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body onLoad="noBack();" onpageshow="if (event.persisted) noBack();" onUnload="">

<input type="hidden" id="bgds" value="${bookingWrapper.flight.gds}"/>
 <input type="hidden" id="currentLocation" value=""/>
<form:form method="POST" action="/booked" id="booking">
</form:form>
<!-- Main Section -->
    <div class="main">
		 
    <div class="confor-mid-sec">  
	<div style="height:20px;"></div>
<img src="/resources/travelopick/images/logo.png?v1" class="center-block" alt="Travelopick">
        
<div class="wait">
While your booking request is being <span class="dot">processed<span>.</span><span>.</span><span>.</span></span></div>

<p>Please do not close this page or press your browser's back button.</p>
</div>

    </div><!--Main--> 

 
        
</body>
</html>