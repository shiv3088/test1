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

<title>Please Wait | ${data.siteName}</title>

<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
 <link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
 <link href="/resources/common/css/font-awesome.min.css" rel="stylesheet">  
 <link href="/resources/us/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/flight-result/css/angular-busy.css" rel="stylesheet">
<link href="/resources/us/css/result-style.css?09162017" rel="stylesheet">
<script src="/resources/flight-result/lib/angular/angular.js"></script>
<script src="/resources/flight-result/js/jquery.1.11.1.min.js"></script>
<script src="/resources/flight-result/js/local-cache.js"></script>
<script>

    $(document).ready(function () {
    currentLocation = window.location;
//alert("full value : "+currentLocation);
arr = currentLocation.toString().split('/');
hotelId=arr[arr.length-2];
strFile = arr[arr.length-1];
document.getElementById("currentLocation").value=hotelId+"/"+strFile;

        url   ="/hotels/booked/"+hotelId+"/"+strFile;
       $('form#hotelBookingRequest').attr({action: url});
      $('form#hotelBookingRequest').submit();


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
<body onload="noBack();" onpageshow="if (event.persisted) noBack();" onunload="">

 <input type="hidden" id="currentLocation" value=""/>

<form:form method="POST" action="/hotels/booked" modelAttribute="hotelBookingRequest">
</form:form>
<!-- Main Section -->
    <div class="main">
		 
    <div class="confor-mid-sec">  
<div><img src="/resources/images/loadingresult.gif" width="80" height="80"></div>
<div class="wait"> Please Wait,<br>
	While your request is being <span class="dot">processed<span>.</span><span>.</span><span>.</span></span>
	</div>
	<div style="padding-bottom:30px; color:#888; font-size:14px; padding: 0 20px;">
       						Please do not close this page or press your browser's back button. 
       					</div>
</div>

    </div><!--Main--> 

 
        
</body>
</html>