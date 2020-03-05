<!doctype html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html lang="en">
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<head>
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Support - Travelopick.com</title>
<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
<meta name="keywords" content="FAQs, Frequently Asked Questions, cheap flights, flights, tickets, discount flights, affordable flights, cheap airlines, airlines tickets" />
<meta name="description" content="Share's your Frequently Asked Questions about cheap flights tickets to the destinations worldwide. Book with Travelopick.com or call us now on <c:out value='${tollFree}' /> to get best deals online." />
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!-- start travel css -->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/event-style.css" rel="stylesheet">
<script src="/resources/js/jquery.1.11.1.min.js"></script>


<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<!-- <body ng-app="contactApp"> -->
<body>
<!-- Main Section -->
<div class="main" data-ng-controller="contactCtrl" data-ng-app="contactApp">
  <!-- Header Section Start -->
  <jsp:include page="home_header.jsp"></jsp:include>
  <!-- Header Section End -->
  <div class="security_bg">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="text-box margin-tb">
            <!--  -->
            <div class="row formBox" >
              <div class="col-sm-6">
                <h1 class="blueHead2">Generate Support Request</h1>
                <p>Couldn't find solution, self-help tool or FAQ that would meet your travel need? Don't Worry. Simply submit a request for customer support and our support team will respond at the earliest to suggest and provide valuable information to all your queries.</p>
                <p><small><span class="red">*</span> Please make a note that CANCELLATION requests cannot be accepted through this form or email. Please call our proficient customer service at <b> <c:out value='${tollFree}' /> (Toll Free)</b>.</small></p>
                <p><small><span class="red">*</span> Please do not provide Credit Card/Debit Card information or Bank detail in this form. </small></p>
              </div>
              <div class="col-sm-6"> <small class="form-sub-head"><span class="text-red">*</span> All fields are required</small>
                <form name="supportForm" id="supportForm">
                  <div class="row  feed-forum">
                    <div class="col-sm-6">
                      <div class="input-group btn-block no-border-radius"> <span class="input-group-addon no-border-radius">Name</span>
                        <input id="name" name="name" type="text" class="fare-input textOnly form-control" placeholder="Enter your Name" required/>
                      </div>
                      <span data-ng-show="supportForm.name.$error.pattern" class="text-red hide">Please enter valid Name.</span> </div>
                    <div class="col-sm-6">
                      <div class="input-group btn-block no-border-radius"> <span class="input-group-addon no-border-radius">Type</span>
                        <select name="supportType"  id="supportType" class="form-control form-input no-border-radius"  data-ng-init="support_type='2'" required>
                          <option value="2">New Travel Query</option>
                          <option value="1">Existing Booking Query</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row  feed-forum">
                    <div class="col-sm-6">
                      <div class="input-group btn-block no-border-radius"> <span class="input-group-addon no-border-radius">Email</span>
                        <input type="email" name="emailId" id="emailId" class="fare-input form-control" placeholder="Type Your Email" required/>
                      </div>
                      <span data-ng-show="supportForm.email.$error.pattern" class="text-red hide">Please enter valid Email.</span> </div>
                    <div class="col-sm-6">
                      <div class="input-group btn-block no-border-radius"> <span class="input-group-addon no-border-radius">Subject</span>
                        <select name="subject" id="subject" class="form-control form-input no-border-radius"  required>
                          <option value="">Select Subject</option>
                          <option value="Baggage">Baggage</option>
                          <option value="Class of Service">Class of Service</option>
                          <option value="Credit Card Acceptance">Credit Card Acceptance</option>
                          <option value="Credit Card verification">Credit Card verification</option>
                          <option value="Date Change">Date Change</option>
                          <option value="Electronic Tickets">Electronic Tickets</option>
                          <option value="Lost Tickets">Lost Tickets</option>
                          <option value="Meal Requests">Meal Requests</option>
                          <option value="Paper Ticket Delivery">Paper Ticket Delivery</option>
                          <option value="Pets">Pets</option>
                          <option value="Refunds">Refunds</option>
                          <option value="Reservation Confirmation Email">Reservation Confirmation Email</option>
                          <option value="Schedule Changes">Schedule Changes</option>
                          <option value="Seat Assignments">Seat Assignments</option>
                          <option value="Ticketing Confirmation Email">Ticketing Confirmation Email</option>
                          <option value="Travel Insurance">Travel Insurance</option>
                          <option value="Trouble booking online">Trouble booking online</option>
                          <option value="Types of Travelers">Types of Travelers </option>
                          <option value="Types of Trips">Types of Trips</option>
                          <option value="Unaccompanied Minors">Unaccompanied Minors</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row  feed-forum">
                    <div class="col-sm-6">
                      <div class="input-group btn-block no-border-radius"> <span class="input-group-addon no-border-radius">Booking</span>
                        <input name="booking" id="booking" type="text" class="fare-input form-control no-border-radius alphaNumaricOnly" placeholder="Enter your Booking Reference" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group btn-block no-border-radius"> <span class="input-group-addon no-border-radius">Phone</span>
                        <input name="phone" id="phone" type="text" class="fare-input form-control numbersOnly" placeholder="Enter your Phone/Mobile number" required/>
                      </div>
                      <span data-ng-show="supportForm.phone.$error.pattern" class="text-red hide">Please enter valid phone number.</span> </div>
                  </div>
                  <div class="row  feed-forum">
                    <div class="col-sm-12">
                      <div class="input-group btn-block no-border-radius"> <span class="input-group-addon no-border-radius">Message</span>
                        <textarea name="message" id="message" class="field-input form-control-mess mgs-control" rows="2" placeholder="Type Message here..."></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row feed-forum">
                    <div class="col-sm-12">
                      <button id="add-request-support" onclick="submitSupport()" class="submit-btn pull-right" type="button">Send Support Request</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Footer Section Start -->
<jsp:include page="home_footer.jsp"></jsp:include>
<!-- Footer Section End -->
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
