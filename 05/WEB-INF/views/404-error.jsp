<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE HTML>
<html lang="en" data-ng-app="dynamicPageApp">
  <head>
 
    <title>Page Not Found - ${data.siteName}</title>

<meta name="description" content="Page Not Found, Error 404 pages - ${data.siteName}"/> 
<meta name="keywords" content="Error 404 pages, page Not Found, page dos'nt exist "/>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">    

	<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon"/>
	<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
	<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
	<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
	
		
    <!-- end travel css -->
   
    <!-- start js -->
        
       <!-- start js -->

	<script src="/resources/travelopick/js/angular.js"></script>
    <script src="/resources/travelopick/js/jquery.1.11.1.min.js"></script> 
    <script src="/resources/travelopick/js/travel.min.js"></script>
 
    <!-- end js -->
    
    <!-- end js -->

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->


    
  

<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body>


    <!-- end of navigation_box -->
  
    	 <!-- header -->
       <jsp:include page="home_header.jsp"></jsp:include>
      <!--close header -->
      


<div id="banner" style="background:#4863db;">
 <div class="postion">
    <div class="container">
 <div class="row">
  
  
<div class=" text-center col-xs-12">
				


  <div class="error404msg_block" style="float:none; margin:auto;">  
  
<h1>400</h1>
<p class="msg"><i class="fa fa-clock-o" aria-hidden="true"></i> Not Found what you were Looking?         
</p>

<div class="margin-bottom">
 

</div> 



 

</div>



 

</div>

	 <!-- search engine -->
   <div class="col-md-12   search_engine" style="margin-top:20px;">
   <jsp:include page="/home_engine_new"></jsp:include>
 </div>	


 
 </div>       
 </div>
</div>
</div>
 



 


   <!-- Footer Section  --> 
 		<jsp:include page="home_footer.jsp"></jsp:include>
     <!-- Footer Section End Here --> 
  
  

 <!-- script engine -->
    
<script src="/resources/travelopick/js/jquery-ui.1.10.4.min.js"></script> 
<script src="/resources/travelopick/js/jquery.slides.min.js"></script>
<script src="/resources/travelopick/js/index_eng_min_1.0.js"></script>
<script type="text/javascript" src="/resources/travelopick/js/jquery.validate.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.min.js"></script>
<script src="/resources/travelopick/js/notify.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/i18n/jquery-ui-i18n.js"></script>
<script src="/resources/js/inner_engine_en.js?22082017"></script>
<script src="/resources/travelopick/js/jquery.bgswitcher.js"></script>
<script src="/resources/travelopick/js/angular-messages.js"></script>

 <!--end script engine -->
  
  


	</body>
	</html>
