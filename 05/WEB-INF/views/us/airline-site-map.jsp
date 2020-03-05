<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>


<!DOCTYPE HTML>
<html lang="en">
<head>
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="viewport" content="user-scalable=0, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
<title>Airline Sitemap | Travelopick</title>
<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
<meta name="keywords" content="" />
<meta name="description" content="Sitemap details of Travelopick" />
<link rel="icon" href="/resources/images/favicon.png" type="image/x-icon" />
<link href="/resources/css/reset.css" rel="stylesheet">
<link href="/resources/travelopick/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/css/style.css" rel="stylesheet">
<link href="/resources/travelopick/css/header.css" rel="stylesheet">
<link href="/resources/css/font-awesome.css" rel="stylesheet">
<link href="/resources/travelopick/css/jquery-ui.min.css" rel="stylesheet">
<script src="/resources/travelopick/js/jquery.1.11.1.min.js"></script> 	 

<style>
h1,h5{ color:#000;}
.sitemap-block a { font-size:13px; color:#000; }
</style>


<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>

<body>

	<!--- Header Section Start---->
	<jsp:include page="home_header.jsp"></jsp:include>
	<!--- Header Section End---->
	
						
<!--- Main Section---->
    <div class="main">
    	<div class="">
        	<div class="container">
            	<div class="row">
                	<div class="col-md-12 col-xs-12 col-lg-12 col-sm-12">
               
                     
                        	<div class="content-box sitemap-block" style="font-size:15px;">
                    <h1 style="border-bottom:1px solid #000; padding-bottom:5px; margin-top:20px; width:100%; float:left;">Top Airlines</h1>
                    
             <div >
             
			<%-- >>>>>>>><c:out value="${siteMapData.size()}"/> --%>
             
      <c:forEach items="${siteMapData}" var="siteMap" varStatus="loop">
            <c:if test="${loop.index == 0}">
      		   <div class="col-md-3 col-xs-12">
               <ul>
             </c:if>
              <li><a href="/airline/${fn:toLowerCase(fn:replace(siteMap.name,' ','-'))}-${fn:toLowerCase(siteMap.code)}"><i class="fa fa-angle-double-right"></i>${siteMap.name} Flights </a></li>
             <c:if test="${(loop.index+1)%10 == 0}">
             </ul>		
			</div>
			<div class="col-md-3 col-xs-12">
             <ul>
			</c:if> 
			 <c:if test="${siteMapData.size() == (loop.index)+1}">
					 	</ul>		
			</div>
					 </c:if>
					 
       </c:forEach> 
            
			
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
	

<script src="/resources/js/bootstrap.min.js"></script> 


        
</body>
</html>