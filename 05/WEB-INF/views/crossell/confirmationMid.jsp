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
<title>Travelopick - Your flight details and Book</title>

<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
 <link href="/resources/flight-result/css/bootstrap.min.css" rel="stylesheet">
 <link href="/resources/flight-result/css/font-awesome.min.css" rel="stylesheet">  
 <link href="/resources/flight-result/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/flight-result/css/angular-busy.css" rel="stylesheet">
<link href="/resources/flight-result/css/result-style.css?09162017" rel="stylesheet">
<script src="/resources/flight-result/lib/angular/angular.js"></script>
<script src="/resources/flight-result/js/jquery.1.11.1.min.js"></script>
<script src="/resources/flight-result/js/local-cache.js"></script>
<script>

    $(document).ready(function () { 
    currentLocation = window.location;
//alert("full value : "+currentLocation);
arr = currentLocation.toString().split('-');
strFile = arr[arr.length-1];
document.getElementById("currentLocation").value=strFile;


arr = currentLocation.toString().split('/');

url = "/crossell/booked-"+strFile;

      
          var encodedUrl = decodeURIComponent(url);
         if(encodedUrl == "undefined"){
         // $(location).attr("href", "https://www.travelopick.com/");
          }
          
     
     // $('form#booking').attr({action: '/booked/'+strFile});  
      //$('form#booking').attr({action: '/crossell/home/'+strFile});	  
	  $('form#CrossellPaymentBean').attr({action:url});	  
      $('form#CrossellPaymentBean').submit();
        
    }); 
    
   
</script>  
<script type="text/javascript">
    window.history.forward();

    function noBack() {
        window.history.forward();
    }
    
 
</script>

<jsp:include page="components/header/theme.jsp"></jsp:include> 
<!--  / Google analytics \ -->
<%-- <jsp:include page="google-analytics.jsp"></jsp:include> --%>
<!--  / Google analytics \ -->
</head>
<body onload="noBack();" onpageshow="if (event.persisted) noBack();" onunload="">

 <input type="hidden" id="currentLocation" value=""/>
<form:form action="/crossell-booked" modelAttribute="CrossellPaymentBean">
</form:form>
<!-- Main Section -->
    <div class="main">
		 
    <div class="confor-mid-sec">  
<div class="luf-icon"><div class="luf-loader"></div></div>
<div class="wait"> Please Wait,<br>
While We Are Booking Your <span class="dot">Ticket<span>.</span><span>.</span><span>.</span></span></div>
</div>

    </div><!--Main--> 

 
        
</body>
</html>