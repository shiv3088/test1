<!--[if IE 8 ]>    <html lang="ar" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="ar" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> 
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%> 
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<html lang="en" class="no-js"> <!--<![endif]-->
<head> 
    <jsp:include page="components/header/theme.jsp" />  
    
    <script>
 		window.history.forward();
		// function noBack(){
		// 	window.history.forward();
		// }
		 function goBack() {
			//window.history.back();
            window.location.href = document.referrer;
            console.log(window.location.href);
		}
	</script>
	
</head>
<body class="body-wrapper" ng-app="angularPurchase" onpageshow="if (event.persisted) noBack();" onunload="">

<input type="hidden" value="${cartBean.carReference}" id="selectedCar">
<input type="hidden" value="${cartBean.hotelDetailRes}" id="selectedHotel">
<input type="hidden" value="${cartBean.parkingLot}" id="selectedPnf">
<input type="hidden" value="${cartBean.isNewCard}" id="isNewCard">
<input type="hidden" value="${bookingWrapper.payment.country}" id="countryName">
<c:choose>
	<c:when test="${bookingWrapper.payment.state == '0'}">
	 <input type="hidden" value="" id="stateName">
	</c:when>
	<c:otherwise>
	 <input type="hidden" value="${bookingWrapper.payment.state}" id="stateName">
	</c:otherwise>
</c:choose>

<input type="hidden" value="${bookingWrapper.payment.expiryMonth}" id="expiryMonth">

<input type="hidden" value="${bookingWrapper.passengerList[0].gender}" id="genderFlight">
<input type="hidden" value="${bookingWrapper.passengerList[0].dobDate}" id="dayFlight">
<input type="hidden" value="${bookingWrapper.passengerList[0].dobMonth}" id="monthFlight">
<input type="hidden" value="${bookingWrapper.passengerList[0].dobYear}" id="yearFlight">

<input type="hidden" id="hotelFinal" value="0.0"/>
<input type="hidden" id="carFinal" value="0.0"/>
<input type="hidden" id="pnfFinal" value="0.0"/>
<input type="hidden" id="totalPax" value="${bookingWrapper.passengerList.size()}"/>
<input type="hidden" id="carCouponAmt" value="0.00"/>
<input type="hidden" id="hotelCouponAmt" value="0.00"/>
<input type="hidden" id="carDamageFinal" value="0.0"/>

<jsp:include page="components/header/navigation.jsp" />  
<form:form action="/crossell-booked" modelAttribute="CrossellPaymentBean">
<div class="cxl-payment-component" ng-controller="purchaseCtrl">
    <div class="container">

        <div class="row top-caption">
            <div class="col-xs-12">
                <div class="row top-space">
                    <div class="col-sm-3 col-md-2 col-xs-12 text-center">
                        <button type="button" class="btn go2top fs14" onclick="goBack();">
                            <i class="fa fa-angle-double-left"></i> Back to Result</button>
                            <div style="margin: 10px;" class="visible-xs"></div>
                    </div>
                    <div class="col-sm-9 col-md-10 col-xs-12">
                        <h1 class="hidden-xs">
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i> 
                            You're Just a click away your smart & secure booking! 
                        </h1>
                        <h1 class="visible-xs">
                            <div class="row">
                                <div class="col-xs-2"><i class="fa fa-thumbs-up" aria-hidden="true"></i></div>
                                <div class="col-xs-10">You're Just a click away your smart & secure booking!</div>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="row">
            <div class="col-xs-12 col-md-9">
            <c:if test="${cartBean.parkingLot ne null}">
            <!-- Start : Park and Fly -->
            <jsp:include page="components/park-n-fly/park-n-fly-payment.jsp" /> 
            <!-- End : Park and Fly -->        
            </c:if>    
            <c:if test="${CrossellPaymentBean.rooms.size() > 0 && cartBean.hotelDetailRes ne null}">
                <!-- Start Hotel Itinerary -->
                
                <div class="cxl-wrapper">
                    <div class="cxl-header">
                        <div class="row">
                            <div class="col-sm-6 col-xs-8">
                                <div>Hotel Traveler(s) Information </div>
                            </div>
                            <div class="col-sm-6 col-xs-4 text-right">
                                <a id="hotelGuestInfoLink">Hide
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="cxl-body" id="hotelGuestInfoDiv">
                        <div class="row travel-info">
                            Guest Information (must be an adult)
                        </div>
                        <c:forEach items="${CrossellPaymentBean.rooms}" varStatus="room">
                        <div class="row">
                        
                        
                            <div class="col-sm-1 col-md-1 col-xs-2">
                                <div class="form-group form-group-sm">
                                    <label>Room ${room.index+1}</label>
                                    <div class="guest mob-font">Adult ${room.index+1}</div>
                                </div>
                            </div>
                            
                            <div class="col-sm-3 col-md-3 col-xs-5">
                                <div class="form-group form-group-sm">
                                    <label>First Name:</label>
                                    <form:input path="rooms[${room.index}].FirstName" placeholder="first name" class="form-control" value="${bookingWrapper.passengerList[room.index].firstName}"/>
                                </div>
                            </div>

                            <div class="col-sm-3 col-md-3 col-xs-5">
                                <div class="form-group form-group-sm">
                                    <label>Last Name:</label>
                                    <form:input path="rooms[${room.index}].LastName" placeholder="last name" class="form-control" value="${bookingWrapper.passengerList[room.index].lastName}"/>
                                </div>
                            </div>
                           

                        </div>
			</c:forEach>
                        <div class="alert alert-success alert-info alert-re fs12">
                            <strong>Important- </strong> Great choice! You chose the cheapest room at {{selectedHotelData.Hotel.HotelName}}. Don't wait, book now!
                        </div>


                    </div>
                </div>
                <!-- End Hotel Itinerary -->
                </c:if>
               
            <c:if test="${cartBean.carReference ne null}">
                <div class="cxl-wrapper">

                    <div class="cxl-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <div>Car : Enter Driver Details</div>
                            </div>
                        </div>
                    </div>

                    <div class="cxl-body">
                        <div class="row">
                            <div class="col-sm-1 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <label>Driver</label>
                                    <div class="pay-arrow">
                                        <form:select path="driverTitle" items="${model.title}" class="form-control" /> 
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-sm-3 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <label>First Name <sup class="red">*</sup></label>
                                    <form:input path="driverFirstName" class="form-control" value="${bookingWrapper.passengerList[0].firstName}"/>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <label>Middle Name</label>
                                    <form:input path="driverMiddleName" class="form-control" value="${bookingWrapper.passengerList[0].middleName}"/>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <label>Last Name <sup class="red">*</sup></label>
                                    <form:input path="driverLastName" class="form-control" value="${bookingWrapper.passengerList[0].lastName}"/>
                                </div>
                            </div>
                            <div class="col-sm-2 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <label>Driver Age <sup class="red">*</sup></label>
                                    <form:input path="driverAge" class="form-control" placeholder="Driver Age" />
                                </div>
                            </div>
                                
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <a href="/car/getRentalPolicy" target="_blank" class="addreq">Drivers under 25 or over 70 years of age may need to pay an extra fee.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Car Policy -->
                <jsp:include page="components/car-policy-on-protection.jsp" /> 
            </c:if>
			<%-- <c:if test="${cartBean.isNewCard == true}"> --%>
                <div class="cxl-wrapper">
                    <div class="cxl-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <div>Billing Information</div>
                            </div>
                        </div>
                    </div>

                    <div class="cxl-body">
                        <div class="row">
                            <div class="col-sm-4 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <label>Address 1 <sup class="red">*</sup></label>
                                    <form:input path="payment.address1" class="form-control" />
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <label>Address 2</label>
                                    <form:input  path="payment.address2" class="form-control" />
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <label>City <sup class="red">*</sup></label>
                                    <form:input  path="payment.city" class="form-control" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-4 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <label>Country <sup class="red">*</sup></label>
                                    <div class="pay-arrow"><form:select path="payment.country" id="Payments_Country" class="form-control" ng-options="opt.Name for opt in countryList track by opt.ID"  ng-model="selectedCountry" /></div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <label>State <sup class="red" id="statemad">*</sup></label>
                                    <div ng-hide="IsHidden"><form:input  path="payment.state" id="payment_states" class="form-control" /></div>
                                    <div ng-hide="IsShow" class="pay-arrow"><form:select path="payment.state" id="payment_state" class="form-control" ng-options="opt.Name for opt in usState track by opt.ID"  ng-model="selectedItem" /></div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <label>Pin Code <sup class="red">*</sup></label>
                                    <form:input  path="payment.postalCode"  id="payment_postalCode" class="form-control" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="cxl-wrapper">

                    <div class="cxl-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <div>Payment Information</div>
                            </div>
                        </div>
                    </div>


                    <div class="cxl-body form-horizontal">
                        <div class="row">
                            <div class="col-md-2 col-sm-3 col-xs-12">
                                <label class="control-label">Payment method
                                    <sup class="red">*</sup>
                                </label>
                            </div>
                            <div class="col-md-6 col-sm-4 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <div class="pay-arrow"><form:select id="payment-card" path="payment.cardCode" items="${model.cardtype}" class="form-control" onchange="getcardValue(this,event);" /></div>
                                        
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-5 col-xs-12">
                                <div id="cards" class="customer-card">
                                    <span title="Visa" class="visaCard" onclick="setccValue('Visa',event)" default="1"></span>
                                    <span title="Master Card" class="masterCard" onclick="setccValue('Master Card',event)" default="2"></span> 
                                    <span title="American Express" class="americanCard" onclick="setccValue('American Express',event)" default="3"></span> 
                                    <span title="Diners Club" class="dinersCard" onclick="setccValue('Diners Club',event)" default="4"></span> 
                                    <span title="Discover" class="discoverCard" onclick="setccValue('Discover',event)" default="5"></span>
                                    <span title="Carte Blanche" class="carteCard" onclick="setccValue('Carte Blanche',event)" default="6"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2 col-sm-3 col-xs-12">
                                <label class="control-label">Credit/Debit Card no.
                                    <sup class="red">*</sup>
                                </label>
                            </div>
                            <div class="col-md-6 col-sm-4 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <form:input id="Payments_MaskCardNumber" path="payment.maskCardNumber" class="form-control" maxlength="16"/>
                                    <form:hidden id="Payments_CardNumber" path="payment.cardNumber" name="Payments.CardNumber" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-5 col-xs-12 mob-font">Pay with credit or debit card</div>
                        </div>
                        <div class="row">
                            <div class="col-md-2 col-sm-3 col-xs-12">
                                <label class="control-label">Card Holder's Name <sup class="red">*</sup></label>
                            </div>
                            <div class="col-md-6 col-sm-4 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <form:input id="Payments_CardHolderName" path="payment.cardHolderName" class="form-control"  />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-5 col-xs-12 mob-font">(as it appears on your credit card/debit card)</div>
                        </div>
                        <div class="row">
                            <div class="col-md-2 col-sm-3 col-xs-12">
                                <label class="control-label">Expiraion Date <sup class="red">*</sup></label>
                            </div>
                            <div class="col-md-6 col-sm-4 col-xs-12">
                                <div class="row" style="margin:0 -5px">
                                    <div class="col-xs-6">
                                        <div class="form-group form-group-sm">
                                            <div class="pay-arrow">
                                                <form:select path="payment.expiryMonth" id="Payments_ExpiryMonth" class="form-control" >
                                                    <c:forEach items="${model.cardMonth}" var="curExp" varStatus="loop">
                                                            <option value="${loop.index}">${curExp}</option>
                                                    </c:forEach>
                                                </form:select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <div class="form-group form-group-sm">
                                            <div class="pay-arrow"><form:select id="Payments_ExpiryYear" path="payment.expiryYear" items="${model.cardyear}" class="form-control" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-5 col-xs-12"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-2 col-sm-3 col-xs-12">
                                <label class="control-label">Card Verification No. <sup class="red">*</sup></label>
                            </div>
                            <div class="col-md-6 col-sm-4 col-xs-12">
                                <div class="form-group form-group-sm">
                                    <form:password id="Payments_CvvNo" path="payment.cvvNo"  class="form-control" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-5 col-xs-12 ">
                                <div class="cvv-wrapper">
                                    <!-- ccvimg -->
                                    <img class="ccvimg" src="/resources/images/ccv-img.gif">
                                    <span class="numberCvv mob-font"> 3 Digit Number From Your Card </span>
                                    <i class="ccv-img2 hidden-xs  "></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
             
                
                <div class="cxl-wrapper">

                    <div class="cxl-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <div>Contact Information</div>
                            </div>
                        </div>
                    </div>

                    <div class="cxl-body">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group form-group-sm">
                                    <label>Billing Phone <small>(As on file with bank or credit card company)</small> <sup class="red">*</sup></label>
                                    <form:input  path="contact.billingPhone"  class="form-control" value="${bookingWrapper.contact.billingPhone}"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group form-group-sm">
                                    <label>Alternate Phone Number</label>
                                    <form:input  path="contact.mobile"  class="form-control" value="${bookingWrapper.contact.mobile}"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group form-group-sm">
                                    <label>Email Address
                                        <sup class="red">*</sup>
                                    </label>
                                    <form:input  path="contact.email" id="contact_email"  class="form-control" value="${bookingWrapper.contact.email}"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group form-group-sm">
                                    <label>Confirmation Email Address
                                        <sup class="red">*</sup>
                                    </label>
                                   <form:input path="contact.email1" id="contact_email1" placeholder="Retype Email"
				class="form-control"
				type="email" name="contact.email1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

 
                <div class="row hidden-xs">
                    <div class="col-sm-12 text-center">
                        <p>By clicking,
                            <b>Book Now</b> i agree that i have read and accepted Travelopick
                            <c:if test="${cartBean.carReference ne null}">
                                <a class="red" href="javascript:void(0)" onclick="loadBrowser(this)" name="/terms-conditions">Terms & Conditions </a>,
                                <a class="red" href="javascript:void(0)" onclick="loadBrowser(this)" name="/privacy-policy">Privacy Policy</a> 
                                and
                                <a class="red" href="javascript:void(0)" onclick="loadBrowser(this)" name="/car/getrentalpolicy"> Car Rental Policy</a>
                            </c:if>
                            <c:if test="${cartBean.carReference eq null}">
                                <a class="red" href="javascript:void(0)" onclick="loadBrowser(this)" name="/terms-conditions"> Terms & Conditions </a>and
                                <a class="red" href="javascript:void(0)" onclick="loadBrowser(this)" name="/privacy-policy"> Privacy Policy</a>.
                            </c:if>
                           <br /> 
                            Please note that the charges on your card will be levied by Airlines Repor XD AB.
                            
                        </p>
                    </div>
                    <div class="col-sm-12 text-center">
                        <button onclick="submitForm();" type="button" class="btn-book-now ">Book Now <i class="fa fa-angle-double-right"></i> </button>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-3 hidden-xs hidden-sm" id="paymentRightContainer">
                <jsp:include page="components/itinerary-payment.jsp" ></jsp:include>
            </div>
        </div>

        <div class="row mobile-book-now text-center visible-xs">
            <div class="col-xs-12">
                <p>By clicking,
                    <b>Book Now</b> i agree that i have read and accepted Travelopick
                    <c:if test="${cartBean.carReference ne null}">
                        <a class="red" href="javascript:void(0)" onclick="loadBrowser(this)" name="../terms-conditions"> Terms & Conditions </a>,
                        <a class="red" href="javascript:void(0)" onclick="loadBrowser(this)" name="../privacy-policy"> Privacy Policy</a> 
                        and
                        <a class="red" href="javascript:void(0)" onclick="loadBrowser(this)" name="/car/getrentalpolicy"> Car Rental Policy </a>
                    </c:if>
                    <c:if test="${cartBean.carReference eq null}">
                        <a class="red" href="javascript:void(0)" onclick="loadBrowser(this)" name="../terms-conditions"> Terms & Conditions </a> and
                        <a class="red" href="javascript:void(0)" onclick="loadBrowser(this)" name="../privacy-policy"> Privacy Policy </a>.
                    </c:if>
                    <br>
                    Please note that the charges on your card will be levied by Airlines Repor XD AB.
                    </p>
            </div>
            <div class="col-xs-12">
                <button onclick="submitForm();" type="button" class="btn-book-now ">Book Now <i class="fa fa-angle-double-right"></i> </button>
            </div>
        </div>


    </div>
</div>

<form:hidden path="hotelCoupon" value="no" id="couponIdHotel" />
<form:hidden path="hotelCouponCode" value="no" id="couponCodeHotel" />
<form:hidden path="hotelCouponAmt" value="0.00" id="couponAmtHotel" />
<form:hidden path="carCoupon" value="no" id="couponIdCar" />		
<iframe width="1" height="1" frameborder="0" scrolling="no" src="https://www.travelopick.com/kountLogo/171285/${CrossellPaymentBean.kountId}">
    <img width="1" height="1" src="https://www.travelopick.com/resources/images/logo.png?m=171285&s=${CrossellPaymentBean.kountId}">  
</iframe> 
			
</form:form>

<!-- Secession Time out -->

<div id="divSessionOut" style="display:none;" class="session-timeout-container">
    <!-- <div id="fadebackground"></div> -->
    <div class="session-body">
        <h3>Session Expired! <i class="fa fa-clock-o" aria-hidden="true"></i></h3>
        <div class="session-body-para">
            Prices may change frequently owing to demand & availability. <br>
            Start a new search to view the best deals.
        </div>

        <div class="session-body-btn">
            <div class="row">
                <div class="col-sm-5 col-xs-5">
                    <a href="/crossellcrm/${bookingWrapper.userSessionID}" class="cursor btn cxl-btn">Go to Crossell <i class="fa fa-angle-double-right"></i></a>
                </div>
                <div class="col-sm-5 col-xs-7">
                   <a onclick="openConfirmation('${bookingWrapper.userSessionID}');" class="cursor btn cxl-btn">Go to Confirmation <i class="fa fa-angle-double-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>


<div id="divProgressbar" class="session-timeout-container" style="display:none;">
        <div class="session-body text-center">
            <br>
            <span class="room-loader"></span>
            <h3>Please wait</h3>
            <div class="session-body-para">
                while we confirm your Booking
            </div>
        </div>
    </div>
<ul class="list-inline mobile-link-tab visible-sm visible-xs">
    <li class="pull-left"><a id="PaymentSummaryClick" href="">Trip Summary</a></li>
    <li class="pull-left"><a href="javascript:void(0)">
        <div class="p-total">Total Price: <i class="fa fa-<c:out value="${dollar}"/>" ></i><span id="finalTotalPriceMobile">0.00</span></div>
    </a></li>
    <li class="gotoTop pull-right"><a id="gotoTop" href=""><i class="fa fa-arrow-up"></i></a></li>
</ul>

<div class="separator"><!-- separator --></div>
<jsp:include page="components/footer/footer.jsp" ></jsp:include> 

<script src="/resources/js/angular.js"></script>
<script type="text/javascript" src="/resources/js/crossell/crosssell-payment.js"></script>

</body>
</html>