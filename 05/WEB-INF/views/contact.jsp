<!doctype html>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<html lang="en">
<head >
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Contact Us | ${data.siteName}.com </title>
 
<meta name="description" content="Contact our 24/7 customer service for any assistance on your travel queries." />
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!--Style -->
<link href="resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/event-style.css?123654" rel="stylesheet">
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<style type="text/css">
#fadebackground { background:rgba(0,0,0,0.5); z-index:7; position: fixed; left: 0px; top: 0px; display: block!important; width:100%; height:100%;}
</style>
<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
 <body  data-ng-app="contactApp">

<!-- Main Section -->
<div data-ng-controller="contactCtrl" class="main">
  <!--/ Header Box \-->
  <jsp:include page="home_header.jsp"></jsp:include>
  <!--\ Header Box /-->
  <!--/ Banner Box \-->
  <div class="company-banner">
    <h1> Contact Us </h1>
  </div>
  <!--\ Banner Box /-->

  <!--/ Contact Box \-->
  <div class="container">
    <div class="row text-box"> 
      <div class="col-md-6 col-sm-12">
        <h3>UK Address</h3>
		
		<address class="addressBox" style="line-height:3em;">
		<b>Blue Sky Tours Ltd.</b> <br/> 
      <span><i class="fa fa-map-marker input-icon"></i>27 Olympia Place, Great Sankey, Warrington, WA5 8DQ.</span><br/>
     
        <span><i class="fa fa-phone input-icon"></i>Call Us (24/7) <c:out value='${data.tfnNo}' /> </span><br/>

        <div> <i class="fa fa-envelope input-icon"></i><a href="mailto:${data.supportMail}">${data.supportMail}</a></div>
        </address>
       
	   <h3>US Address</h3>
		 
		<address class="addressBox">
      <span><i class="fa fa-map-marker input-icon"></i>C/O WeWork 1372 Peachtree St NE<br /> Atlanta,  GA - 30309, USA</span><br/><br/>
     
        <span><i class="fa fa-phone input-icon"></i>Call Us (24/7) +1-888-737-8675 </span>
	<span style="display: block;margin-left: 114px;"> +1-844-307-3890 </span>
	

        <div> <i class="fa fa-envelope input-icon"></i><a href="mailto:${data.supportMail}">${data.supportMail}</a></div>
        </address>
	   
      </div>
      <div class="col-md-6">
          <form class="formBox" name="contactForm"  id="contactForm">
              <div class="feed-forum">
                <div class="input-group btn-block no-border-radius"> <span class="input-group-addon no-border-radius">Name<font color="red">*</font></span>
                  <input name="name" id="name" type="text"  class="fare-input textOnly form-control" placeholder="Enter your Name" required/>
                   </div>
              </div>
              <div class="feed-forum">
                <div class="input-group btn-block no-border-radius"> <span class="input-group-addon no-border-radius">Email<font color="red">*</font></span>
                  <input id="emailId" type="email" name="emailId" class="fare-input form-control" placeholder="Type Your Email" required/>
                   </div>
              </div>
              <div class="feed-forum">
                <div class="input-group btn-block no-border-radius"> <span class="input-group-addon numbersOnly no-border-radius">Phone<font color="red">*</font></span>              
                  <input name="phone" id="phone" type="text" class="fare-input form-control numbersOnly " placeholder="Enter your Phone/Mobile number" required/>              
                   </div>
              </div>
              <div class="feed-forum message-block ">
                <div class="input-group btn-block no-border-radius"> <span class="input-group-addon no-border-radius" style="height:62px">Message<font color="red">*</font></span>
                  <textarea id="message" class="field-input form-control-mess mgs-control" rows="2" cols="10" name="message" required placeholder="Type Message here..."></textarea>
                </div>
              </div>
              <div class="feed-forum">
                <button class="submit-btn pull-right" id="submit" onClick="submitContactUs()" style="padding:12px 25px; font-size:16px; margin-bottom:20px;" type="button" >Submit</button>
              </div>
            </form>
            <span id="submsg" style="display: none; color: green;"></span>
            <!-- <loading id="loadingbar" >
				<div>
				<div id="fadebackground"></div>
				    <img  style="margin-top: 10px;" src="/resources/travelopick/images/logo.png" />
				    <div style="width: 100%; float: left; clear: both;"><img src="/resources/images/loadingresult.gif" width="110" height="110"  /></div>
				    <div class="wait"> Please Wait ...</div>
				</div>
			</loading> -->
			<div align="center" id="loadingbar" style="display: none; class="popup-product">
			  <div id="fadebackground"></div>
			  <div style="background: #eaeaea;border-radius: 8px;color: #333;padding: 20px;width: 362px;left: 37%;position: fixed;top: 20%;z-index: 111;">
			         <img  style="margin-top: 10px;" src="/resources/travelopick/images/logo.png" />
                    <div style="width: 100%; float: left; clear: both;"><img src="/resources/images/loadingresult.gif" width="110" height="110"  /></div>
                    <div class="wait"> Please Wait ...</div>
			  </div>
			</div>

      </div>
    </div>
  </div>
  <!--\ Contact Box /-->
  <!-- Footer Section Start -->
  <jsp:include page="home_footer.jsp"></jsp:include>
  <!-- Footer Section End -->
</div>
<!-- Main -->
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/jquery.validate.js"></script> 
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/lib/angular/angular.js"></script>
<script src="/resources/js/angular-recaptcha.min.js"></script>
<script src="/resources/js/angular-messages.min.js"></script>
<script src="/resources/js/contactUs.js"></script>
<script src="/resources/js/bootstrap.min.js"></script>
</body>
</html>
