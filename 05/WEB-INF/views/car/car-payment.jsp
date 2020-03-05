<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" data-ng-app="CarPayments">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title data-product="Don't forget to book">Car Details &amp; Payment  | ${data.siteName}</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!-- Added style here-->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/car/css/car-style.css?11072019" rel="stylesheet">

<!-- Added javascript here -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="/resources/car/js/angular.js"></script>
<script src="/resources/js/angular-animate/angular-animate.min.js"></script>
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/car/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="/resources/js/angular-busy.js"></script>
<script src="/resources/flight-result/js/card-type.js"></script>
<c:set var="dollar" value="gbp"/>

	<!--  / Google analytics \ -->
<jsp:include page="../google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->

<!--Title change script start here-->
<script>
function imgError(img,srcc) {
    console.log(img, srcc);
    img.error="";
    img.src=srcc;
}
</script>

<script>
	var cffTitle = document.title,
	cffTitleBlur = document.getElementsByTagName('title')[0].getAttribute('data-product');
	window.onblur = function () {
	document.title = cffTitleBlur;
	}
	window.onfocus = function() {
	document.title = cffTitle;
	}
	</script>
<!--Title change script End here -->	
<script>
	$(window).on('load resize', function () {
	//screen.width
	if($(window).width() < 480){
		console.log("Its for Mobile");
	
	}else{
		console.log("Its for Desktop");
	
	
		$(function() {
			$.fn.scrollBottom = function() {
				return $(document).height() - this.scrollTop() - this.height();
			};
		
			var $carPs = $('#carPaymentSummary');
			var $window = $(window);
		
		if($(window).width() > 1026)
	{
  		$window.on("scroll resize", function() {
				//var gap = $window.height() - $el.height() - 10;
				var visibleFoot = 300 - $window.scrollBottom();
				var scrollTop = $window.scrollTop()
				if(scrollTop < 135){
					$carPs.css({
						top: (135 - scrollTop) + "px",
						position: 'fixed',
						bottom: "auto"
					});
				}else if (visibleFoot > 140) {
					$carPs.css({
						top: "auto",
						position: 'fixed',
						bottom: visibleFoot + "px"
					});
				} else {
					$carPs.css({
						top: 0,
						position: 'fixed',
						bottom: "auto"
					});
				}
			});
	}
	
			
		});
	}
	});
	
	</script>
<script>    
	
	function myFunction() 
	{
	var popup = document.getElementById("myP");
	popup.classList.toggle("show");
	}
	
	window.history.forward();
	
	function goBack() {
	window.history.back();
	/* key=false; 
	//  window.history.go(-1);
	 var path=window.location.origin;
	
	  var rndId=$('#useridss').val();
	  //http://localhost:8080/hotels/details/167780
	  var url=path+"/carSearch/id/"+rndId;	
		 
	 var encodedUrl = decodeURIComponent(url);
	 $(location).attr("href", encodedUrl); */
	};
	
	function noBack() {
		window.history.forward();
	};       
	
	</script>

</head>

<body class="car_flow car_payment_page" data-ng-controller="paymentsController">

<c:set var = "destinationCar" value = "${fn:split(carSearchWrapper.pickupCity, ',')}" />
 <c:set var="destinationCarCountry" value="${destinationCar[3]}" />
  <c:if test="${fn:length(destinationCar[3]) == 0}">
  <c:set var="destinationCarCountry" value="${destinationCar[2]}" />
  </c:if>
  
<!--  / session expire popup start here \ -->
<div align="center" id="divSessionOut" style="display: none;" class="popup-product">
  <div id="fadebackground"></div>
  <div class="session-exp">
    <h3> Your session has expired </h3>
    <h4 >For search again, click Go to Home</h4>
    <div class="clock_tym"> <i class="fa fa-clock-o" aria-hidden="true"></i> </div>
    <div align="center" valign="middle"><a href="/cars" class="btn btn-primary btn-lg searchbtn">Go to Home</a></div>
    <div class="clearfix"></div>
  </div>
</div>
<!--  \ session expire popup end here / -->

<!--  / confirm booking popup start here \ -->
<div id="divProgressbar" style="display: none;" class="popup-product">
  <div id="fadebackground"></div>
  <div align="center" class="session-exp">
    <img src="/resources/travelopick/images/logo.png" class="center-block" alt="Travelopick">
    <h3 class="text-orange">Please wait while we confirm your booking</h3>
    <div class="clearfix"></div>
  </div>
</div>
<!--  \ Confirm Booking popup end here / -->

<!--  /  Header start here \ -->
<jsp:include page="../confirm_header.jsp"></jsp:include>
<!--  \  Header end here / -->
<div class="price-block-top" ng-clock>
	<div class="hilight-block">
	  <div class="container">
	  <div class="row">
	  
		<input type="hidden" value="0.0" id="callpopupopen">
		<input type="hidden" value="0.0" id="totalValue">
		<input type="hidden" value="0.0" id="totalTaxes">
		  
		<div class="col-lg-6 col-sm-4"><h2> PRICE SUMMARY  </h2> </div>
		<div class="col-lg-6 col-sm-8">
	  
		<div class="top-price-section ng-cloak">
		  
			  <div class="row"><!--Head-->
				<div class="col-xs-4">Number of day(s)</div>
				<div class="col-xs-4">Base Rental Price</div>
				<c:if test="${carPaymentRequest.isInsuranceApplied == true}">
				    <div class="col-xs-4">Car Rental Protection</div>
				</c:if>
				<div class="col-xs-4">Taxes & Fees</div>
			  </div>
			  <div class="row"><!--Data-->
				
		  
		        <div class="col-xs-4">{{carDetailsList.NumberOfDays}} Days</div>
				<div class="col-xs-4"><i class="fa fa-<c:out value='${dollar}'/>"></i> {{carDetailsList.Pricing.DailyTotalAmount}}</div>
				
				<c:if test="${carPaymentRequest.isInsuranceApplied == true}">
		                    <div class="col-xs-4"><i class="fa fa-<c:out value='${dollar}'/>" ></i> {{totalCarDamageAmt}}</div>
		                </c:if>
		                  
				<div class="col-xs-4"><i class="fa fa-<c:out value='${dollar}'/>" ></i>{{carDetailsList.Pricing.TotalTax | number:2}}</div>
			  </div>
		  
		   
			  <input id="fareAgentFees" name="fare.agentFees" value="0.0" type="hidden"><input type="hidden" value="0.00" id="grandTotalMacpSet">
			  <input type="hidden" value="10.0" id="seatValue">
		  
  
		  </div>
		  
  
		  </div>
	  </div>
	  </div>
	  </div>
<div class="container ">
  <div class="row">
    
    <div class="col-md-6 col-sm-5 col-sm-push-6 text-center">
    <div class="price-block-section">                  
      <input type="hidden" value="0.0" id="couponAmt" ng-model="couponAmt" ng-value="couponAmt" ng-init="couponAmt='0.0'" class="ng-pristine ng-valid">
      
      
       
        <input type="hidden" id="totPax" value="1" ng-model="totPax" ng-value="totPax" ng-init="totPax='1'" class="ng-pristine ng-valid">
        <input type="hidden" id="macpAmt" value="19.89" ng-model="macpAmt" ng-value="macpAmt" ng-init="macpAmt='19.89'" class="ng-pristine ng-valid">
      <!-- <div class="row">Coupon
        <div class="col-xs-5 text-left">Travel Coupon Discount</div> 
        <div class="col-xs-4"></div> 
        <div class="col-xs-3">$110</div>
      </div> -->
      
      <%-- <div class="coupon_code row" ng-disabled="isDisabled">
        <div class="col-xs-8" ng-disabled="isDisabled"> <a href="" ng-model="collapsed" ng-click="collapsed=!collapsed;openCoupons();" id="couponHave" class="ng-pristine ng-valid">Have Coupon Code <span class="fa fa-angle-double-right"></span>  &nbsp; </a> <span id="couponHave1"></span>  &nbsp;  <span id="CouponInp" ng-show="collapsed" class="ng-hide">
          <input type="hidden" id="couponsType" value="X">
          <input type="hidden" id="couponsValue" value="X">
          <input id="couponsCode" name="couponsCode" ng-disabled="isDisabled" data-val-length-min="5" data-val-length-max="80" ng-model="selectedCoupons" class="text-box card_type ng-pristine ng-valid" data-val="true" type="text" value=""><div class="apply_btn" ng-click="checkCoupons('X');" ng-disabled="isDisabled"><span ng-disabled="isDisabled" id="couponApply" class="ng-binding">Apply</span></div>
          <div id="popApply" style="display:none; clear:both;"> <span>Click on apply to avail this coupon</span> </div>
          <div style="clear:both;"><span id="couponMessage"></span></div>
          </span> 
        </div>
        <div class="col-xs-3 text-right ng-hide" id="Coupon" ng-show="collapsed"> - <i class="fa fa-<c:out value='${dollar}'/>"></i><span id="couponAmtPlan">0.0</span> </div>
      </div> --%>
      
      <div class="row feedetail" id="seatPriceid" style="display: none; position: relative;">
        <div class="col-xs-8"> Seat Price </div>
        <div class="col-xs-4 text-right" id="seatPriceidVal"> </div>
      </div>

      <c:if test="${carPaymentRequest.carReference.isPubCar == true || carPaymentRequest.carReference.getIsTaxPayableAtRentalDesk() == true}">
      	 
      	 <div class="row " ng-if="carDetailsList.Pricing.TotalDuesToCharge > 0.0"><!--Total Cost-->
	        <div class="col-xs-9 text-left">Pay Now <span class="pay_now"><i class="fa fa-info-circle"> </i>
	                         <div  class="pay_now_popup">
	                            <strong>Please note:</strong> In case you decide to cancel your car booking, please remember that the Convenience fee is non-refundable.
	                          </div>
	                          </span></div>  
	        <div class="col-xs-3" ng-if="carDetailsList.Pricing.TotalDuesToCharge > 0.0">
	            <i class="fa fa-<c:out value='${dollar}'/>"></i> <span class="fnt-w-700" id="payatpickuptot">{{carDetailsList.Pricing.TotalDuesToCharge | number : 2}}</span>
	        </div>
	      </div>
	      
	      <div class="row"><!--Total Cost-->
	        <div class="col-xs-9 text-left">Pay at pick-up</div>  
	        <div class="col-xs-3">
	         <i class="fa fa-<c:out value='${dollar}'/>"></i>{{carDetailsList.Pricing.TotalDuesAtPickUp | number:2}}</div>
	      </div>
      </c:if>
     
     <div class="row pt-total"><!--Total Cost-->
        <div class="col-xs-9 text-left">TOTAL PRICE</div>  
        <div class="col-xs-3" id="publishedFaretot">
         <i class="fa fa-<c:out value='${dollar}'/>"></i>{{carDetailsList.Pricing.TotalChargeAmount | number:2}}</div>
      </div>
      
      </div>
    </div>
    <div class="col-md-6 col-sm-7 col-sm-pull-6">
     <div class="policy-content"> <b>Please Note: </b>All price are quoted in ${fn:toUpperCase(dollar)}.</div>
     <div class="supplier_rule policy-content" >Car Supplier Rules &amp; Restrictions <a href="javascript:void(0);" class="expend_rule">Show</a>
      <div class="supplier_rule_detail" id="carRuleDetails" ng-repeat="rule in carDetailsList.HeaderText">({{rule}})</div>
    </div>
    </div>
  </div>

</div>
</div>
<!--  / Top content start here \ -->
<div class="container">
  <div class="top-content ">
    <div class="row">
      <div class="col-sm-12 col-md-9"> <a href="#" onClick="goBack()" class="go-back"><i class="fa fa-angle-left"></i> Back to car listing</a> <span class="hidden-xs"><span class="right-check fa fa-check"></span> You're Just a Click Away Your Smart &amp; Secure Booking!</span> </div>
      <div class="col-sm-12 col-md-3"> </div>
    </div>
  </div>
</div>
<!--  \ Top content end here / -->

<!--  / payment block main container \ -->
<div class="mainCntr main-container" ng-cloak>
  <div class="container">
    <form:form action="/car/booked" modelAttribute="carPaymentRequest">
    <div class="row">
	<c:set var="utmSource" value="${carPaymentRequest.sourceMedia}" scope="page"/>
	<c:set var="siteId" value="${carPaymentRequest.siteID}" scope="page"/>

	<input type="hidden" value="${carPaymentRequest.UNCBID}" id="unconfirmedBId" />
	<input type="hidden" value="${carPaymentRequest.isCCVBooking}" id="isCCVBookingId" />
	<input type="hidden" value="${carPaymentRequest.agentID}" id="agId" />
	
        <!-- Left Side Bar Start here-->
        <div class="col-md-12 col-lg-9">
		
          <!-- Car itenary start here-->
          <div class="car_resultsBox car_itenary">
            <h4 class="sub_header">
              <span>${selectedCar.carReference.carType}</span>
			        <c:if test="${fn:substring(selectedCar.carReference.vehicleType, 0, 2) == 'XX'}">
					   <small class="hidden-xs">${selectedCar.carReference.carName}</small>
					 </c:if>
					  <c:if test="${fn:substring(selectedCar.carReference.vehicleType, 0, 2) != 'XX'}">
					   <small class="hidden-xs">${selectedCar.carReference.carName} or Equivalent </small>
					 </c:if>
					 
             </h4>
            <a href="javascript:void(0);" class="showbtn hide-btn">Hide</a>
            <c:if test="${CarDetailResWrapper.isCarSoldOut == true}">
					<!--Sold Out Case Start-->
					<div class="soldout-container hidden">
						<img src="/resources/car/images/car-soldout.png" class="car-soldout">
						<div class="blurbg"></div> 
						<div class="sold-backlink">
							<a href="javascript:void(0);" onclick="goBack();">Go Back to the Previous page</a>
							<a href="/cars">Go to Homepage</a>
						</div>
					</div>
					<!--Sold Out Case End-->
				</c:if>
            <div class="content" id="car_itenary_hide">
              <div class="row">
                <div class="col-sm-4 col-xs-12">
                   <div class="img-bx">
	                   <c:if test="${fn:substring(selectedCar.carReference.vehicleType, 0, 2) == 'XX'}">
	                   	<img class="img-responsive" src="/resources/images/car-images/cars/reveal.jpg" alt="${carBookRequest.carReference.carName}" onerror="javascript:imgError(this,'/resources/car/images/no-image.jpg')"/>
	                   </c:if>
	                   <c:if test="${fn:substring(selectedCar.carReference.vehicleType, 0, 2) != 'XX'}">
	                   	<c:set value="${fn:replace(selectedCar.carReference.carName,' ','-')}" var="car_name"/>
                    	<img class="img-tran" id="imgSet" src="/resources/images/car-images/cars/${fn:toLowerCase(car_name)}.jpg" alt="${car_name}" onerror="javascript:imgError(this,'/resources/car/images/no-image.jpg')"/>
	                   </c:if>
                   </div>
                  <div class="mobile-xs-6">
                    <div class="supplier" ng-show="priceResponse" ng-cloak> <img data-ng-src="/resources/images/car-images/suppliers/{{carDetailsList.CompanyName.replace(' ', '-') | lowercase}}.jpg" alt="{{carDetailsList.CompanyName}}"/> </div>
                    <div class="car_detail_show"> <a>Car Details</a>
                      <div class="car_detail"> <span id="up-triangle"></span> <strong>${selectedCar.carReference.carType}</strong>
                        <ul>
                          <li>${selectedCar.carReference.carAttribute.numOfPassengers} Passengers</li>
                          <li>${selectedCar.carReference.carAttribute.transmission} Transmission</li>
                          <li>${selectedCar.carReference.carAttribute.numOfLuggageLarge + selectedCar.carReference.carAttribute.numOfLuggageSmall} Bags</li>
                          <c:if test="${selectedCar.carReference.carAttribute.carFuel == 'aircon'}">
                            <li>Air Conditioning</li>
                          </c:if>
                          <c:if test="${selectedCar.carReference.carAttribute.carFuel == 'non aircon'}">
                            <li>Non Conditioning</li>
                          </c:if>
                          <li> ${selectedCar.carReference.carAttribute.numberOfDoors} Doors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8 col-xs-12">
                  <div class="row">
                    <div class="col-sm-6 col-xs-12">
                      <div class="pickup" ng-cloak>
                        <h5>Pick-up</h5>
                        <c:forEach items="${selectedCar.carReference.routeStationLst}" var="routstation" begin="0" end="0"> ${routstation.stationName}(${routstation.stationID})
                          <div class="ctime"> {{carDetailsList.PickUpDateTime | date:'EEE, dd MMM, yyyy'}} , <span>${routstation.getOperationHours()} Hrs</span> </div>
                        </c:forEach>
                      </div>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                      <div class="pickup" ng-cloak>
                        <h5>Drop Off</h5>
                        <c:forEach items="${selectedCar.carReference.routeStationLst}" var="routstation" begin="1" end="1"> ${routstation.getStationName()}(${routstation.getStationID()})
                          <div class="ctime"> {{carDetailsList.DropOffDateTime | date:'EEE, dd MMM, yyyy'}} , <span>${routstation.getOperationHours()} Hrs</span> </div>
                        </c:forEach>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12">
                      <div class="forfree"> <b>You will get for FREE</b><br />
                        <ul>
                          <li><i class="fa fa-check" aria-hidden="true"></i>Free Amendments</li>
                          <li ng-if="${CarDetailResWrapper.mileageAllowance == 'UNL'}"><i class="fa fa-check" aria-hidden="true"></i>Unlimited Mileage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Car itenary end here-->
          <c:set var="rpr" value="${CarDetailResWrapper.rentalPolicyResponse}" scope="session"/>
		  
          <!-- Driver Detail start here-->
          <div class="car_resultsBox">
            <h4 class="sub_header"><i class="fa-traveler"></i> Driver Details </h4>
            <div class="content">
              <div class="row">
                <div class="col-sm-2 col-xs-12 form-group">
                  <label class="semi_bold hidden-xs">Driver<font color="red">*</font></label>
                  <font class="validation_star" color="red">*</font>
                  <form:select path="passengerRequest.title" class="form-control textOnly" items="${model.title}"/>
                </div>
                <div class="col-sm-10 col-xs-12">
                  <div class="row">
                    <div class="col-sm-3 col-xs-12 form-group">
                      <label class="semi_bold hidden-xs">First Name <font color="red">*</font></label>
					  <font class="validation_star" color="red">*</font>
                      <form:input class="form-control textOnly" placeholder="First Name"  path="passengerRequest.firstName"  type="text" autocomplete="off"/>
                    </div>
                    <div class="col-sm-3 col-xs-12 form-group">
                      <label class="semi_bold hidden-xs">Middle Name</label>
                      <form:input class="form-control textOnly" placeholder="Middle Name" path="passengerRequest.middleName" type="text" autocomplete="off"/>
                    </div>
                    <div class="col-sm-3 col-xs-12 form-group">
                      <label class="semi_bold hidden-xs">Last Name <font color="red">*</font></label>
					  <font class="validation_star" color="red">*</font>
                      <form:input class="form-control textOnly" placeholder="Last Name" path="passengerRequest.lastName" type="text" autocomplete="off"/>
                    </div>
		    		<div class="col-sm-3 col-xs-12 form-group">
                      <label class="semi_bold hidden-xs">Driver Age<font color="red">*</font></label>
					  <font class="validation_star" color="red">*</font>
                      <form:input path="passengerRequest.driverAge" class="form-control" type="text" placeholder="Driver Age" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" >
                <div class="col-xs-12">
                 <a class="text_link" href="/car/getrentalpolicy" target="_blank" >                
                 Driver Age Under 30 or over 65 years of age may need to pay an extra fee.</a> </div>
              </div>
            </div>
          </div>
          <!-- Driver Detail end here-->
         	<input type="hidden" ng-bind="calculateTotalCarDamageAmt(${carPaymentRequest.carDamageAmt}, '${CarDetailResWrapper.pickUpDateTime}', '${CarDetailResWrapper.dropOffDateTime}')" />
			<input type="hidden" ng-value="totalCarDamageAmt" id="totalCarDAmt"/>
			<input type="hidden" ng-value="${carPaymentRequest.isInsuranceApplied}" id="isInsurancApplied"/>
         	
          <%-- <jsp:include page="car-insurance.jsp"></jsp:include> --%>
		  
          <!-- Billing information start here-->
          <div class="car_resultsBox" id="billing_information">
            <h4 class="sub_header"> <i class="fa-billing"></i> Billing Information</h4>
            <div class="content">
              <div class="row">
                <div class="col-sm-4 col-xs-12 form-group margin_mobile"> <font class="validation_star-lg" color="red">*</font>
                  <form:input class="form-control text-box" path="payment.address1" placeholder="Address 1"  type="text" />
                </div>
                <div class="col-sm-4 col-xs-12 margin_mobile">
                  <form:input path="payment.address2" class="form-control text-box" placeholder="Address 2" type="text" />
                </div>
                <div class="col-sm-4 col-xs-12 form-group margin_mobile"> <font class="validation_star-lg" color="red">*</font>
                  <form:input class="form-control text-box textOnly" placeholder="City/ Town" path="payment.city" type="text" data-val="true"/>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4 col-xs-12 form-group margin_mobile"> <font class="validation_star-lg" color="red">*</font>
                  <form:select class="form-control card_type chosen-select valid" path="payment.country" id="Payments_Country" ng-options="opt.Name for opt in countryList track by opt.ID" ng-model="selectedCountry" data-val="true"/>
                </div>
                <input type="hidden" value="${carPaymentRequest.payment.country}" id="payment_countre" />
                <div class="col-sm-4 col-xs-12 form-group margin_mobile"> <font class="validation_star-lg" id="statemad" color="red">*</font>
                  <div id="stateInp" ng-hide="IsHidden">
                    <form:input path="payment.state" id="payment_state1" class="form-control text-box card_type col-xs-12" placeholder="State/ Province" type="text" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span> </div>
                  <div id="stateSel" ng-hide="IsShow">
                    <form:select path="payment.state" id="payment_state" class="form-control card_type chosen-select valid" ng-options="opt.Name for opt in usState track by opt.ID" name="payment.state" ng-model="selectedItem"> </form:select>
                  </div>
                  <input type="hidden" value="${carPaymentRequest.payment.state}" id="payment_statesss" />
                  <%-- <form:hidden path="payment.states" id="payment_states" /> --%>
                  <form:hidden path="payment.countrys" id="payment_countrys" />
                  <form:hidden path="payment.expiryMonths" id="Payments_ExpiryMonths" />
				  <div id="maError">
            <a class="cr-txt-red" target="_blank" style="font-size: 12px; display: block; margin-bottom: 10px; margin-top: 5px; color:red">Rental Car Protection is invalid</a> 
	  </div>
                </div>
                <div class="col-sm-4 col-xs-12 margin_mobile form-group"> <font class="validation_star-lg" color="red">*</font>
                  <form:input class="form-control text-box card_type col-xs-12" placeholder="Postal/Zip Code" path="payment.postalCode" type="text" id="payment_postalCode" data-val-length-min="5" data-val-length-max="80" data-val="true"/>
                </div>
              </div>
            </div>
          </div>
          <!-- Billing information end here-->
		  
          <!-- payment information start here-->
          <div class="car_resultsBox payment_info">
            <h4 class="sub_header"> <i class="fa-billing"></i> Payment Information <span class="note hidden-xs"><b>Please note:</b> All fares are quoted in ${fn:toUpperCase(dollar)}</span></h4>
            <div class="content">
              <div class="payment_detail">
               
				<form:hidden id="payment-card" path="payment.cardCode" />
                <div class="row form-group margin_mobile">
                  <div class="col-sm-3 col-xs-12 hidden-xs">
                    <label class="semi_bold">Credit/Debit Card no.<font color="red">*</font></label>
                  </div>
                  <div class="col-sm-4 col-xs-12"> <font class="validation_star" color="red">*</font>
                    <form:input id="Payments_MaskCardNumber" path="payment.maskCardNumber" class="form-control text-box card_type col-xs-12 numbersOnly numbersastseveOnly cc-number" data-numeric="0" placeholder="Credit/Debit Card No." maxlength="16" type="text" value="" name="Payments.MaskCardNumber" data-val-required="Please provide <b>credit or debit card number</b><br/>" data-val-regex-pattern="^([0-9]+)$" data-val-regex="Please provide valid <b>Card number</b>(Entry must contain digits (0-9))<br/>" data-val="true" autocomplete="off"/>
                    <form:hidden id="Payments_CardNumber" path="payment.cardNumber" name="Payments.CardNumber" />
					<script>
										var J = Payment.J,
										numeric = document.querySelector('[data-numeric]'),
										number = document.querySelector('.cc-number'),
										validation = document.querySelector('.validation');
										Payment.restrictNumeric(numeric);
										Payment.formatCardNumber(number, 16);
									  </script>
                    <input type="hidden" value="${carPaymentRequest.payment.cardNumber}" id="payment_cardNumbers" />
                    <input type="hidden" value="${carPaymentRequest.payment.maskCardNumber}" id="payment_maskCardNumbers" />
                    <span id="cardRange" for=""> </span> </div>
                  <div class="col-sm-5 col-xs-12 hidden-xs">
                    <div id="cards" class="spnCardImg">
		    	 <span class="pvisa" title="Visa" ></span> 
        		<span class="pmaster" title="Master Card"></span> 
        		<span class="pamerican" title="American Express"></span> 
		        <span class="pdiners" title="Diners Club"></span> 
		        <span class="pdiscover" title="Discover"></span> 
		    </div>
                  </div>
                </div>
                <div class="row form-group margin_mobile">
                  <div class="col-sm-3 col-xs-12 hidden-xs">
                    <label class="semi_bold">Card Holder's Name<font color="red">*</font></label>
                  </div>
                  <div class="col-sm-4 col-xs-12"> <font class="validation_star" color="red">*</font>
                    <form:input class="form-control text-box card_type col-xs-12 textOnly" placeholder="Card Holder's Name" path="payment.cardHolderName" type="text" autocomplete="off"/>
                  </div>
                  <div class="col-sm-5 col-xs-12 hidden-xs">
                    <label>(as it appears on your credit card/debit card)</label>
                  </div>
                </div>
                <div class="row form-group margin_mobile">
                  <div class="col-sm-3 col-xs-12 hidden-xs">
                    <label class="semi_bold">Expiration Date <font color="red">*</font></label>
                  </div>
                  <div class="col-sm-4 col-xs-12  no-padding">
                    <div class="col-xs-6"> <font class="validation_star" color="red">*</font>
                      <spring:bind path="payment.expiryMonth">
                        <select name="payment.expiryMonth" id="Payments_ExpiryMonth" class="form-control">
                          <c:forEach items="${model.cardMonth}" var="curExp" varStatus="loop">
                            <option value="${loop.index}">${curExp}</option>
                          </c:forEach>
                        </select>
                        <input type="hidden" value="${carPaymentRequest.payment.expiryMonth}" id="payment_expiryMnth" />
                      </spring:bind>
                    </div>
                    <div class="col-xs-6"> <font class="validation_star" color="red">*</font>
                      <form:select path="payment.expiryYear" id="Payments_ExpiryYear" class="form-control" items="${model.cardyear}" data-val-range-min="1" data-val-range-max="3000"/>
                    </div>
                  </div>
                  <div class="col-sm-5 col-xs-12"></div>
                </div>
                <div class="row form-group margin_mobile">
                  <div class="col-sm-3 col-xs-12 hidden-xs">
                    <label class="semi_bold">Card Verification No.<font color="red">*</font></label>
                  </div>
                  <div class="col-sm-4 col-xs-12"> <font class="validation_star" color="red">*</font>
                    <form:password id="Payments_CvvNo"  class="form-control text-box card_type col-xs-12 numbersOnly" placeholder="Card Verification No." path="payment.cvvNo" maxlength="4" autocomplete="off"/>
                  </div>
                  <input type="hidden" value="${carPaymentRequest.payment.cvvNo}" id="payment_cvvNos" />
                  <div class="col-sm-5 col-xs-12 hidden-xs">
                    <div class="cvvIcon"> <img src="/resources/images/ccv-img.gif" id="ccvimg"><span id="tooltip"><a href="" class="text_link">3 Digit Number From Your Card<span></span></a> </span> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- payment information end here-->
		  
          <!-- Contact information start here-->
          <div class="car_resultsBox">
            <h4 class="sub_header"> <i class="fa-billing"></i> Contact Information</h4>
            <div class="content">
              <div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Phone Number<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12"> <font class="validation_star" color="red">*</font>
                  <form:input placeholder="Billing Phone"  class="form-control text-box card_type col-xs-12 numbersOnly" path="contact.billingPhone" type="text" />
                </div>
                <div class="col-sm-5 col-xs-12 hidden-xs"></div>
              </div>
              <div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Alternate Phone Number</label>
                </div>
                <div class="col-sm-4 col-xs-12">
                  <form:input class="form-control text-box card_type col-xs-12 numbersOnly" placeholder="Alternate Phone Number" path="contact.mobile" type="text" />
                </div>
                <div class="col-sm-5 col-xs-12 hidden-xs"></div>
              </div>
              <div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Email Address<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12"> <font class="validation_star" color="red">*</font>
                  <form:input class="form-control text-box card_type col-xs-12" placeholder="Email Address" path="contact.email" id="contact_email" type="text" />
                </div>
                <div class="col-sm-5 col-xs-12 hidden-xs"></div>
              </div>
              <div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Confirm Email Address<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12"> <font class="validation_star" color="red">*</font>
                  <form:input class="form-control text-box card_type col-xs-12" placeholder="Retype Email" path="contact.email1" id="contact_email1" type="text" />
                </div>
                <input type="hidden" value="${carPaymentRequest.contact.email}" id="contact_emaill" />
                <div class="col-sm-5 col-xs-12 hidden-xs"></div>
              </div>
            </div>
          </div>
          <!-- Contact information end here-->
		  
		  <!-- bottom text start here-->
          <div class="bottom-text col-xs-12 text-center visible-lg">

            <p class="depture">By clicking, <b>Book Now</b> I agree that I have read and accepted ${data.siteName} <a href="/terms-and-conditions" target="blank" class="text-orange">Terms & Conditions </a>, <a href="/privacy-policy" target="blank" class="text-orange">Privacy Policy</a> and <a href="/car/getrentalpolicy" target="_blank" class="text-orange">Rental Policy</a></p>
          </div>
		  
          <div class="bottom-text col-xs-12 text-center hidden-lg">
       
            <p class="depture">By clicking, <b>Book Now</b> I agree that I have read and accepted ${data.siteName} <a class="text-orange" href="javascript:void(0);" data-toggle="modal" data-target="#popup_terms_and_condition">Terms &amp; Conditions</a> and <a class="text-orange" href="javascript:void(0);" data-toggle="modal" data-target="#popup_privacy_policy">Privacy Policy</a> and <a class="text-orange" href="javascript:void(0);" data-toggle="modal" data-target="#popup_rental_policy">Rental Policy</a></p>
          </div>
          <input type="hidden" value="${carPaymentRequest.session.customerSessionId}" id="csId" />
          <div class="col-xs-12">
            <div class="col-sm-4"></div>
            <div class="col-sm-4 text-center">
              <div class="buton button-width">
                <form:hidden path="UserSessionID" id="randamIds" name="UserSessionID" />
                <input type="hidden" id="finalId" value="x123456" />
                <input type="hidden" id="randamId" value="x123456" />
                <button class="btn-book-now purchase-btn btn-lg" type="button" onclick="submitUserInfo()">Book Now </button>
              </div>
            </div>
          </div>
		   <!-- bottom text end here-->
		   
        </div>
        <!-- Right Side Bar Start here-->
        <div class="col-md-3 hidden-xs hidden-sm">
             <div class="resultsBox">
              <h4 class="sub_header"><i class="fa-payment"></i>Why Book with Us</h4>
              <div class="content">
			    <div class="new-list-view"><img src="/resources/images/whybook-icon2.png"> Live 24/7 Support </div>
                <div class="new-list-view"><img src="/resources/images/whybook-icon1.png"> Safe and Secure </div>
              
                <div class="new-list-view"><img src="/resources/images/whybook-icon3.png"> Zero Booking Fee </div>
              </div>
          </div>


          <div class="resultsBox">
              <h4 class="sub_header"><i class="fa-payment"></i>Need Help: Support</h4>
              <div class="content">
                <div class="need-h-support">
                  <p>The team of professional travel experts are ready to help! Call us and we'll help you plan the perfect vacation for you and your family.</p>
                  <div class="call-no">
                    <label>Call Us Toll Free 24/7</label>
                    <c:out value='${data.tfnNo}' />
                  </div>
                  <div class="call-no">
                      <label>Email Support</label>                     
                      <i class="fa fa-envelope"></i>
                    </div>
                    <div class="call-no"><a href="mailto:Support@travelopick.com">Support@travelopick.com</a></div>

                </div>
              </div>
          </div>
          <div id="add_block"></div>
		  <!-- PriceBox Start here-->
          <%--<div class="priceBox" ng-show="priceResponse">
            <div id="carPaymentSummary" class="price_block1">
              <div class="free-cancellation"> Free Cancellation upto 24 hours </div>
              <div class="car_resultsBox">
                <h4 class="sub_header"><i class="fa-payment"></i> Price Summary</h4>
                <div class="content">
                  <p>An estimate of your rental car reservation is show below. Price very depending on special requests and items purchased at the counter</p>
                  <div class="row">
                    <div class="col-xs-8"> Number of day(s)</div>
                    <div class="col-xs-4 text-right">{{carDetailsList.NumberOfDays}} Days</div>
                  </div>
                  <div class="row rental_price">
                    <div class="col-xs-8">Base Rental Price</div>
                    <div class="col-xs-4 text-right">$ {{carDetailsList.Pricing.DailyTotalAmount}}</div>
                  </div>
                  <div class="row">
                    <div class="col-xs-7">Taxes &amp; Fees</div>
                    <div class="col-xs-5 text-right">$ {{carDetailsList.Pricing.TotalTax | number:2}} </div>
                  </div>
                  
                  <c:if test="${carPaymentRequest.isInsuranceApplied == true}">
                  	<div class="row">
	                	<div class="col-xs-7">Rental Car Protection</div>
	                    <div class="col-xs-5 text-right">{{totalCarDamageAmt}} </div>
	                </div>
                  </c:if>
                  
                  <c:if test="${carPaymentRequest.isInsuranceApplied == false}">
                  	<div class="row" id="cdgp" style="display: none;">
	                	<div class="col-xs-7">Rental Car Protection</div>
	                    <div class="col-xs-5 text-right">{{totalCarDamageAmt}} </div>
	                </div>
                  </c:if>
					
                  
							
                  <c:choose>
                  	<c:when test="${carPaymentRequest.isCouponValid == true}">
                  		<form:hidden path="coupons" value="Yes" id="couponId" />
                  		<form:hidden path="couponsAmt" value="${carPaymentRequest.couponsAmt}" />
                  		<form:hidden path="isCouponValid" value="${carPaymentRequest.isCouponValid}" />
                      <form:hidden path="couponsCode" value="${carPaymentRequest.couponsCode}" />
                  		
						<div class="list-group-item-pri" ng-disabled="isDisabled">

							<div class="row">
								<div class="col-xs-8">
									Coupon Discount
								</div>

								<div class="col-xs-4 text-right">
									-${carPaymentRequest.couponsAmt}
								</div>
							</div>
						</div>
						<input type="hidden" value="${carPaymentRequest.couponsAmt}" id="couponAmt" ng-model="couponAmt" ng-value="couponAmt" ng-init="couponAmt='${carPaymentRequest.couponsAmt}'" />
                  	</c:when>
                  	<c:otherwise>
                  		<input type="hidden" value="0.0" id="couponAmt" ng-model="couponAmt"  ng-value="couponAmt" ng-init="couponAmt='0.0'"/>
                  		<c:if test="${(utmSource !=  'Offline') && (carPaymentRequest.isCCVBooking == false) && (carPaymentRequest.UNCBID == 0)}">
                  			<div class="coupon_code" ng-disabled="isDisabled" >
		                    <form:hidden path="coupons" value="Yes" id="couponId" />
	                  		<form:hidden path="couponsAmt" value="{{couponAmt}}" />
	                  		<form:hidden path="isCouponValid" value="{{isCouponValid}}" />
		                    <div class="row" ng-disabled="isDisabled">
		                      <div class="col-xs-8" ng-disabled="isDisabled"> <a href="" ng-model="collapsed" ng-click="collapsed=!collapsed" class="ng-pristine ng-untouched ng-valid ng-empty" id="couponHave">Have Coupon Code <i class="fa fa-angle-double-down" aria-hidden="true"></i></a> <span id="couponHave1"></span>
		                        <div class="coupon-code" id="CouponInp" ng-show="collapsed">
		                          <form:input  path="couponsCode"  ng-model="selectedCoupons" ng-disabled="isDisabled" class="text-box card_type ng-pristine ng-untouched ng-valid ng-empty" type="text" data-val-length-min="5" data-val-length-max="80" data-val="true"/>
		                          <div class="apply_btn" data-ng-click="checkCoupons();" ng-disabled="isDisabled"> <span id="couponApply" ng-disabled="isDisabled" class="ng-binding">{{subscribeButton}}</span> </div>
		                          <div id="popApply" style="display:none; clear:both;"> <span>Click on apply to avail this coupon</span> </div>
		                          <div class="coupon-error" style="clear:both;"><span id="couponMessage"></span></div>
		                        </div>
		                      </div>
		                      <div class="col-xs-4 text-right" id="Coupon"  ng-show="collapsed"> <b><span id="couponAmtPlan"></span></b> </div>
		                      
		                    </div>
		                  </div>
                  		</c:if>
                  	</c:otherwise>
                  </c:choose>
                  <!-- Coupons end-->
                  <!-- Agent Fee -->
                  <c:if  test="${(utmSource == 'Offline') && (carPaymentRequest.isCCVBooking == false) && (carPaymentRequest.UNCBID == 0)}">
                    <div class="row">
                      <div class="col-xs-8"> <a href="javascript:void(0);" class="agentfees text-orange"> Agent Fees <i class="fa fa-angle-down"></i></a>
                       <span class="agentDiv" style="display:none;">
                        <input id="agFees"   class="text-box card_type agentAmont" style="padding-left:5px;width:100px; float:left;" type="text" />
                        <div class="apply_btn" id="agFeesAdd" onClick="applyAgentfees('Y');">Apply</div>
                        <div class="apply_btn" id="agFeesRem" style="display: none;" onClick="applyAgentfees('N');">Remove</div>
                        <div id="agfApply" style="display:none; clear:both;"><span>Click on apply </span></div>
                        <div style="clear:both;"><span id="agfMessage"></span></div>
                        </span> </div>
                      <div class="col-xs-4 text-right" id="agFeesDis"> <i class="fa fa-<c:out value="${dollar}"/>"></i><span id="agFeesDisAmt">0.0</span> </div>
                    </div>
                  </c:if>
                  
                  <!-- Agent Fee end -->
                  <form:hidden path="carReference.pricing.employeeMarkUp" id="fareAgentFees" value="${carPaymentRequest.carReference.pricing.employeeMarkUp}"/>
                  <div class="pricetotal">
                    <div class="col-xs-6">Final Total price</div>
                    <div class="col-xs-6 text-right">
                      <input type="hidden" id="totalValue" ng-value="carDetailsList.Pricing.TotalChargeAmount"/>
                      <h4>$ <span id="publishedFaretot">{{carDetailsList.Pricing.TotalChargeAmount | number:2}}</span></h4>
                    </div>
                  </div><input type="hidden" id="totalpap" ng-value="carDetailsList.Pricing.TotalDues"/>
                  <input type="hidden" value="0.0" id="cdgValue" />
		  <div ng-if="carDetailsList.Pricing.TotalDues != 0">
	                  <div class="row text-green">
	                    <div class="col-xs-6"> Pay Now <span class="pay_now"><i class="fa fa-info-circle"> </i>
	                     <div  class="pay_now_popup">
                            <strong>Please note:</strong> In case you decide to cancel your car booking, please remember that the Convenience fee is non-refundable.
                          </div>
	                      </span></div>
	                    <div class="col-xs-6 text-right">
	                      $ <span class="fnt-w-700" id="payatpickuptot">{{carDetailsList.Pricing.TotalDuesToCharge | number : 2}}</span> </div>
	                  </div>
	                  <div class="row text-green">
	                    <div class="col-xs-6"><span>Pay at pick-up</span></div>
	                    <div class="col-xs-6 text-right">$ <span class="fnt-w-700">{{carDetailsList.Pricing.TotalDuesAtPickUp}}</span></div>
	                  </div>
		  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12">
                  <div class="supplier_rule" >Car Supplier Rules &amp; Restrictions <a href="javascript:void(0);" class="expend_rule">Show</a>
                    <div class="supplier_rule_detail" id="carRuleDetails" ng-repeat="rule in carDetailsList.HeaderText">({{rule}})</div>
                  </div>
                </div>
              </div>
            </div>
          </div> --%>
		  <!-- PriceBox end here-->
        </div>
        <!-- Right Side Bar end here-->
      </div>
     
            <iframe width="1" height="1" frameborder="0" scrolling="no" src="${data.siteUrl}kountLogo/171285/${carPaymentRequestAtt.kountId}">
            <img width="1" height="1" src="${data.siteUrl}resources/${data.siteId}/images/logo.png?m=171285&s=${carPaymentRequestAtt.kountId}">  
</iframe> 
    </form:form>
    <!-- form end here-->
  </div>
</div>
<!--  \ payment block main container / -->

<!--  / footer start here \ -->
<div class="footer" ng-cloak>
<jsp:include page="../confirm_footer.jsp"></jsp:include>
</div>
<!--  \ Footer end here / -->

<!-- pop up Space -->
<script>

$(document).ready(function () {
    $('#insurance_radio input').click(function () {
        $('#insurance_radio input:not(:checked)').parent().removeClass("selected_insurance");
        $('#insurance_radio input:checked').parent().addClass("selected_insurance");
    });
});	
	</script>
<!-- terms and condition -->
<div id="popup_terms_and_condition" class="modal fade hidden-lg" role="dialog">
  <div class="modal-content">
    <div class="close_window">
      <button type="button" class="back_btn" data-dismiss="modal"><span class="fa fa-angle-left"></span></button>
      Terms &amp; Conditions
      <button type="button" class="close_btn" data-dismiss="modal">X</button>
    </div>
    <jsp:include page="../popup-terms-conditions.jsp"></jsp:include>
  </div>
</div>

<!-- Privacy policy popup-->
<div id="popup_privacy_policy" class="modal fade hidden-lg" role="dialog">
  <div class="modal-content">
    <div class="close_window">
      <button type="button" class="back_btn" data-dismiss="modal"><span class="fa fa-angle-left"></span></button>
      Privacy policy
      <button type="button" class="close_btn" data-dismiss="modal">X</button>
    </div>
    <jsp:include page="../popup-privacy-policy.jsp"></jsp:include>
  </div>
</div>

<!-- Privacy policy popup-->
<div id="popup_rental_policy" class="modal fade hidden-lg" role="dialog">
  <div class="modal-content">
    <div class="close_window">
      <button type="button" class="back_btn" data-dismiss="modal"><span class="fa fa-angle-left"></span></button>
      Rental policy
      <button type="button" class="close_btn" data-dismiss="modal">X</button>
    </div>
    <jsp:include page="../car/popup-rental-policy.jsp"></jsp:include>
  </div>
</div>
<!-- popup_rental_policy popup-->

<!-- Exit popup -->
<div class="exit-popup-bg" id="exitpopup_bg"></div>
<div id="exitpopup" class="exit-pop-call">
  <div class="cross">x</div>
</div>
<!-- Exit popup -->

<div id="pop-up-car-protection" class="modal fade hidden-lg" role="dialog">
  <div class="modal-content">
    <div class="close_window">
      <button type="button" class="back_btn" data-dismiss="modal"><span class="fa fa-angle-left"></span></button>
      Rental Car Protection
      <button type="button" class="close_btn" data-dismiss="modal">X</button>
    </div>
    <jsp:include page="pop-up-car-protection.jsp"></jsp:include>
  </div>
</div>

<!--M -->
<script src="/resources/car/js/car_payment.js?11072019"></script>
<script src="/resources/car/js/car-custom.js"></script>
<script src="/resources/js/jquery-exit-popup_1.0.js"></script>

<script>
 //agent fees
    $(document).ready(function(){
		$('.agentfees').click(function(){
			$('.agentDiv').toggle();
		});
			// sticky
		var div_top = $('.price-block-top').offset().top;

$(window).scroll(function() {
    var window_top = $(window).scrollTop() - 0;
    if (window_top > div_top) {
        if (!$('.price-block-top').is('.sticky')) {
            $('.price-block-top').addClass('sticky');
        }
    } else {
        $('.price-block-top').removeClass('sticky');
    }
});

// sticky
	});
	
</script>



</body>
</html>
