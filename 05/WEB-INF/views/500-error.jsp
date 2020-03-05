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
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
<!-- end travel css -->
<!-- start js -->
<!-- start js -->
<script src="/resources/js/jquery.1.11.1.min.js"></script>
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
<div class="main">
<!-- end of navigation_box -->
<!-- header -->
<jsp:include page="home_header.jsp"></jsp:include>
<!--close header -->
<div id="banner" style="background:#3e72a4;">
<div class="container">
  <div class="row">
    <!-- search engine -->
    <div class=" col-lg-5 col-sm-8 col-md-6 col-xs-12 search_engine">
      <jsp:include page="/home_engine_new"></jsp:include>
    </div>
    <!-- end search engine -->
    <div class="col-lg-7 col-md-6 text-center col-sm-4 col-xs-12">
      <div class="error404msg_block">
        <h1>500</h1>
        <div class="margin-bottom"> <img src="/resources/images/steps.gif" align="center" > </div>
        <div class="session-exp session-error">
          <p class="msg">We are experience an Internet server problem. Please Try back later. </p>
          <div class="margin-bottom"> <i class="fa fa-clock-o icon clock_tym" aria-hidden="true"></i> </div>
          <div align="center" valign="middle"><a href="/" class="btn btn-primary btn-lg or" >Search Again</a></div>
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
<script src="/resources/js/angular.js"></script>
<script src="/resources/js/travel.min.js"></script>
<script src="/resources/js/notify.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular-messages.js"></script>
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.slides.min.js"></script>
<script src="/resources/js/index_eng_min_1.0.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/i18n/jquery-ui-i18n.js"></script>
<script src="/resources/js/inner_engine_en.js?22082017"></script>
<!--end script engine -->
</body>
</html>
