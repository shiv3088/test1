<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!doctype html>
<html lang="en">
<head>
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ticket  Withdrawal Security Program (TWSP)-Travelopick</title>
<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!-- start travel css -->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/event-style.css" rel="stylesheet">
<link href="/resources/us/css/jquery-ui.min.css" rel="stylesheet">
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script>


<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body>
<div class="main">
  <!-- Header Section Start -->
  <jsp:include page="home_header.jsp"></jsp:include>
  <!-- Header Section End -->
  <div class="macp_bg">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="text-box margin-tb">
            <h1 class="blueHead2"> Ticket  Withdrawal Security Program (TWSP)</h1>
            <img alt="macp" class="pull-right macp_logo" src="/resources/images/twsp_logo_big.png">
            <p>After booking an airline ticket, you may want to withdraw reservation and we understand. Hence, we bring to you the Travel Withdrawal Security Program to safeguard you of the withdrawal charges.   </p>
			
            <p>As per the Ticket  Withdrawal Security Program (TWSP), you are entitled to get a full refund, if the airline policy permits to withdraw your reservation within 24 hours of booking the airline ticket.</p>
            
            <h4>How does it work?</h4>
			
			<p>We like to keep it simple. </p>
			 <fmt:formatNumber var="macpTot" type="number" minFractionDigits="2" maxFractionDigits="2" value="${macpAmt}" />
			<p>All you have to do is add $${macpTot} to the total fare at the payment gateway. Once done, you become a protected traveler with our TWSP. So, if you decide to withdraw reservation within 24 hours of booking the airline ticket, Travelopick will initiate the request to the airline to refund the due amount to you as per the airline authorization.</p>
			
			<p>Enroll with TWSP now and get fully secured! </p>
			
            <h4>TWSP Terms &amp; Conditions</h4>
			
            <ul class="content-list">
              <li>TWSP Fees is applicable on per passenger booking and not per ticket.</li>
			  <li>TWSP is applicable only on major carriers and does not cover low cost carriers. </li>
			  <li>TWSP at no time guarantees refund on all airline tickets. The withdrawal policy of the airline varies. We will initiate the process to refund the withdrawal reservation only if we are in the position to secure waiver from the airline.</li>
			  <li>TWSP is not applicable if you are a "no show". No show refers to the situation where a passenger at the time of boarding is not present and provides no information regarding the same to the airline. </li>
			  <li>If TWSP applies, we will forward the request to the airline to initiate the process of refund within 24 hours from our end. However, it may take up to 7 days for your financial institution to post the credit to your account, and up to 2 billing cycles for that credit to show on your statement.</li>
			  <li>TWSP refund will be made in the same form of payment and currency used while booking the airline ticket.</li>
			  <li>Once the refund is initiated, you will be notified about it on your registered e-mail ID.</li>
			   <li>Keep traveling smart and secured with Travelopick!</li>
			  
              
			</ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer Section Start -->
  <jsp:include page="home_footer.jsp"></jsp:include>
  <!-- Footer Section End -->
</div>
<!--Main-->
</body>
</html>
