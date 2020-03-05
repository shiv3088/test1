<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE HTML>
<html lang="en" ng-app="dynamicPageApp">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
<link rel="icon" href="/resources/images/favicon.png" type="image/x-icon" />
<link href="/resources/css/reset.css" rel="stylesheet">
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/style.css" rel="stylesheet">
<link href="/resources/css/font-awesome.css" rel="stylesheet">
<link href="/resources/us/css/jquery-ui.min.css" rel="stylesheet"> 
    
    <!-- end travel css -->
   
    <!-- start js -->
        
       <!-- start js -->

	<script src="/resources/travelopick/js/angular.js"></script>
    <script src="/resources/travelopick/js/jquery.1.11.1.min.js"></script> 
    <script src="/resources/travelopick/js/travel.min.js"></script>
    <script src="/resources/travelopick/js/parallax.js"></script>
    <script src="/resources/travelopick/js/jQuery.scrollSpeed.js"></script>
	<script src="/resources/travelopick/js/bootstrap-select.js"></script>
    <!-- end js -->
    
    <!-- end js -->

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<style>
.engin_div { background:rgba(10, 22, 37, 0.6) none repeat scroll 0 0 !important;  }
.nav-stacked > li.active > a, .nav-stacked > li.active > a:focus, .nav-stacked > li.active > a:hover {  background:rgba(10, 22, 37, 0.6) none repeat scroll 0 0 !important;   }
</style>

    
  

<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body>

<div class="main">
    <!-- end of navigation_box -->
  
    	 <!-- header -->
       <jsp:include page="home_header.jsp"></jsp:include>
      <!--close header -->
      


<div id="banner" style="background:#eee;">
 <div class="postion">
    <div class="container">
 <div class="row">
	
	  <!-- search engine -->
       <jsp:include page="/home_engine"></jsp:include>
      <!-- end search engine --> 

<div class="col-lg-7 col-md-5 text-center col-sm-4 col-xs-12">
				<!--
				<h1 style="color:#ff0; font-weight:900; font-size:150px; margin-top:50px;">404</h1>
				<div style="color:#fff; font-size: 24px; line-height: 38px; margin-bottom: 20px;"><img src="/resources/images/alert.png" style="vertical-align:middle; margin-right:10px;"> Not Found what you were Looking? </div>
				<div style="margin-bottom:20px;"><img src="/resources/images/steps.gif" align="center" ></div>
				<div style="color: rgb(255, 255, 255); margin-bottom:20px; background: #333; border-radius: 20px; padding: 9px; width: 300px; margin: auto;"> <i class="fa fa-angle-double-left"></i> &nbsp; No Issue try your Search here </div>
				 -->
				 
				   <div style="margin:20px 0; margin-top:90px; color:#333; text-align:center;">
			 <div class="text-center" style="margin-bottom:20px;"><img src="/resources/images/deal-expire.gif" class="img-responsive" ></div>
			 
          <div style=" margin-bottom:10px; border-radius:15px 15px 0 0; -o-border-radius:15px 15px 0 0; -moz-border-radius:15px 15px 0 0; -webkit-border-radius:15px 15px 0 0;">
			  
			  <div style=" font-family:Arial, Helvetica, sans-serif; color:#333;  font-size:20px; line-height:2em; padding:5px 5px; "> Sorry, No Results!! The Deal you are trying to Search has been expired. <br /><b style="color:#2e4665; font-size: 28px;">It's Never to late!! Click on the link below</b> </div>
			  <div style=" font-family:Arial, Helvetica, sans-serif; color:#333;  font-size:20px; line-height:1.5em; padding:5px 20px; margin-bottom:10px; "> <span  style="color:#2e4665;"> <a href="/" style="color:#2e4665; text-decoration:underline;">Return to Homepage</a>  &nbsp; | </span> &nbsp;  Get instant $10 off* </div>
			  
			  <div style=" font-family:Arial, Helvetica, sans-serif;  font-size:26px;"> <span style="background:#333;color: #fff;padding: 10px;font-size: 14px;border-radius: 50%;">OR</span> </div>
            <div style=" font-family:Arial, Helvetica, sans-serif; color:#f60; font-size:30px; margin-top:30px; font-weight:bold;">
              
              <i class="fa fa-phone" style="border-radius: 50%; padding: 9px;"></i> Call us at: 1-888-737-8675
              
            </div>
			
          </div>
          
        </div>
				
				 
				
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
 
  
 <script>
 $(window).scroll(function() {
 if ($(document).scrollTop() > 10) {
 $('.bg_trnsprnt').addClass('shrink');
 }
 else {
 $('.bg_trnsprnt').removeClass('shrink'); }
 });
</script>  
  


	</body>
	</html>
