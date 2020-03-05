<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE HTML>
<html lang="en" data-ng-app="angularConfirmation">

<head>

<title data-product="Congratulations for your recent booking">Car Confirmation  | ${data.siteName}</title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />

<!-- Added style here-->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/car/css/car-style.css?26052018" rel="stylesheet">

<!-- Added javascript here -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="/resources/car/js/angular.js"></script>
<script src="/resources/js/angular-animate/angular-animate.min.js"></script>
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="/resources/js/angular-busy.js"></script>

  <script src="/resources/car/js/bootstrap.min.js"></script>
<!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
	<c:set var="dollar" value="gbp"/>
	
		<!--  / Google analytics \ -->
<jsp:include page="../google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
	
	<script>
      $(document).ready(function(){
          $(".mailtext").click(function(){
              $(".printtext").toggle();
          });
      });
    </script>
    
    <script>
function imgError(img,srcc) {
    console.log(img, srcc);
    img.error="";
    img.src=srcc;
}
</script>
    
    
</head>
<body class="car_confirmation" data-ng-controller="confirmCtrl">
<%-- >>>>>>${carPaymentRequest.carDamageAmt} --%>
<input type="hidden" value="${carPaymentRequest.carDamageAmt}" id="cdAmt" />
<input type="hidden" value="${carPaymentRequest.criteria.pickUpDate}" id="pDate" />
<input type="hidden" value="${carPaymentRequest.criteria.returnDate}" id="dDate" />
			
<input type="hidden" ng-value="totalCarDamageAmt" id="totalCarDAmt" />

<!--  /  Header start here \ -->
<jsp:include page="../home_header.jsp"></jsp:include>
<!--  \  Header end here / -->

<!--  / main container start here \ -->
<div class="container">

<!--  /  Send mail box start here \ -->
  <div class="row sendMail">
    <div class="col-md-12">
	
      <div class="print-mail"> 
	  
	  <a data-toggle="collapse" href="#collapse1" class="mailtext"> 
	  <img src="/resources/car/images/mail.png"/> Email</a>

      </div>
	  
	<div class="print-mail" onclick="javascript:window.print()" style="cursor: pointer;">
		<img src="/resources/car/images/print.png"/> Print
	</div>
	 <div class="printtext mail-txt-box panel-collapse collapse" id="collapse1">
          <form class="form-inline" >
            <div class="form-group">
              <label for="exampleInputEmail2">Email:</label>
              <input type="email" class="form-control" id="mailAgain" placeholder="jane.doe@example.com">
              <input type="hidden" value="${carPaymentRequest.session.customerSessionId}" id="customerSessionId" />
             </div>
             <button type="submit" formtarget="_self" class="btn btn-warning" ng-click="reSendMail()">Send Mail</button>
            <div style="color:#3eb543;display: block; margin-left: 47px; margin-top: 7px;" id="sendEmailError"></div>
          </form>
        </div>
	
    </div>
  </div>
 <!--  \  Send mail box end here / -->
  
  <!--  /  Booking Status block start here \ -->
  <div class="bookingStatus"> 
  <div class="row">
    <div class="col-sm-12">
	
      
	  	<img src="/resources/car/images/car.png">
        <c:set var="bookStatus" value="Received" /> 
         <c:if test="${bookingCarWrapper.bookingStatus == 'Confirmed' || bookingCarWrapper.bookingStatus == 'CNFM' || bookingCarWrapper.bookingStatus == 'Duplicate' || bookingCarWrapper.bookingStatus == 'Ticketed'}">
           <c:set var="bookStatus" value="Confirmed" /> 
         </c:if>
         <c:if test="${bookingCarWrapper.bookingStatus == 'Cancelled' || bookingCarWrapper.bookingStatus == 'Void'}">
           <c:set var="bookStatus" value="Cancelled" />
         </c:if>
        <h4>${bookStatus}!</h4>
        <c:set var="bookon" value="${fn:split(bookingCarWrapper.bookedOn,'T')[0]}" />
        <fmt:parseDate value="${bookon}" pattern="yyyy-MM-dd" var="bookon1"/>
        <fmt:formatDate value="${bookon1}" var="startFormat" pattern="EEEE, dd MMM yyyy"/>
      
        <p>${data.siteName}  Booking Date <b>${startFormat}</b> | Booking Reference Number:<b> ${bookingCarWrapper.bookingID}</b></p>
      </div>
	  
    </div>
   
  </div>
  
   <!--  \   Booking Status block end here / -->
  
   <!--  \   car confirm itenary here / -->
  	<div class="car_resultsBox">
		
		<h4 class="sub_header">
			<span>Rental Car Over View</span>
				<small>
				<c:if test="${(bookingCarWrapper.confirmationNumber != null) && (fn:length(bookingCarWrapper.confirmationNumber) > 0)}">Confirmation Number : <b>${bookingCarWrapper.confirmationNumber}</b></c:if>
				</small> 
		</h4>
		
		<div class="content car_confirmBox">
			
        <div class="row">
          <div class="col-sm-12">
            <div class="row">
			 <div class="col-sm-4 col-xs-12">
                <c:if test="${(carPaymentRequest.carVendorInfo != null) && (!fn:contains(carPaymentRequest.carVendorInfo.vendorCompleteAddress, ', ,'))}">
                	<h3>Rental Location</h3>
	    			<span> ${carPaymentRequest.carVendorInfo.vendorCompleteAddress} </span>
	    		</c:if>
			  </div>
              <div class="col-sm-4 col-xs-12">
                <h3>Pick-up</h3>
		<span>${carPaymentRequest.carReference.routeStationLst[0].stationName}</span>
                <c:set var="datePick" value="${fn:replace(carPaymentRequest.criteria.pickUpDate,'T', ' ')}" />
                <fmt:parseDate value="${datePick}" pattern="yyyy-MM-dd HH:mm:ss" var="myDate"/>
                <fmt:formatDate value="${myDate}" var="startFormat" pattern="EEEE, dd MMM yyyy"/>
                <span>${startFormat} - ${carPaymentRequest.criteria.pickUpTime}</span>
              </div>
			  <div class="col-sm-4 col-xs-12">
                <h3>Drop-off</h3>
		<span>${carPaymentRequest.carReference.routeStationLst[0].stationName}</span>
                <c:set var="dateDrop" value="${fn:replace(carPaymentRequest.criteria.returnDate,'T', ' ')}" />
                <fmt:parseDate value="${dateDrop}" pattern="yyyy-MM-dd HH:mm:ss" var="myDate"/>
                <fmt:formatDate value="${myDate}" var="startFormat" pattern="EEEE, dd MMM yyyy"/>
                <span>${startFormat} - ${carPaymentRequest.criteria.returnTime}</span>
              </div>
            </div>
			
            <div class="row">
              <div class="col-sm-4 col-xs-12">
                <h3>Driver Name</h3>
                <span>${carPaymentRequest.passengerRequest.firstName} &nbsp; ${carPaymentRequest.passengerRequest.lastName}</span>
				 </div>
              <div class="col-sm-4 col-xs-12">
                <c:if test="${(carPaymentRequest.carVendorInfo != null) && (carPaymentRequest.carVendorInfo.vendorPhone != '')}">
                <h3>${carPaymentRequest.carReference.vendorName} Number</h3>
                    	<span>${carPaymentRequest.carVendorInfo.vendorPhone}
                    	<c:if test="${(carPaymentRequest.carVendorInfo.vendorEmergencyPhone != carPaymentRequest.carVendorInfo.vendorPhone) && (carPaymentRequest.carVendorInfo.vendorEmergencyPhone != null) && (carPaymentRequest.carVendorInfo.vendorEmergencyPhone != '')}">
	            			, ${carPaymentRequest.carVendorInfo.vendorEmergencyPhone}
	            		</c:if>
	                    </span>
                </c:if>
		
		      </div>
			  
			  <div class="col-sm-4 col-xs-12">
             <h3>${carPaymentRequest.carReference.carType}</h3>
                <span><b>${carPaymentRequest.carReference.carName}</b> or Equivalent </span>
              <c:if test="${fn:substring(selectedCar.carReference.vehicleType, 0, 2) == 'XX'}">
              	<img src="/resources/images/car-images/cars/reveal.jpg" alt="${carPaymentRequest.carReference.carName}" onerror="javascript:imgError(this,'/resources/car/images/no-image.jpg')"/>
              </c:if>
              <c:if test="${fn:substring(selectedCar.carReference.vehicleType, 0, 2) != 'XX'}">
              	<c:set value="${fn:replace(carPaymentRequest.carReference.carName,' ','-')}" var="cartypeimg"/>
                <img src="/resources/images/car-images/cars/${fn:toLowerCase(cartypeimg)}.jpg" alt="${carPaymentRequest.carReference.carName}" onerror="javascript:imgError(this,'/resources/car/images/no-image.jpg')"/>
              </c:if>
			  <c:set value="${fn:replace (carPaymentRequest.carReference.vendorName,' ','-')}" var="suplier"/>
               <img src="/resources/images/car-images/suppliers/${fn:toLowerCase(suplier)}.jpg" />
          </div>
			  
			  
			  
            </div>
          </div>
        </div>
      
		</div>
		
	</div>
  <!--  \ car confirm itenary end here / -->
  
   <!--  \   Price box Start here / -->
  	<div class="car_resultsBox">
		
		<h4 class="sub_header">
			<span>Summary of Charges</span>
				
		</h4>
		
		<div class="content">
			<div class="car_confirm_priceBox">
        <div class="row">
          <div class="col-xs-6">Number of Days</div>
          <div class="col-xs-6 text-right">${carPaymentRequest.carReference.carAttribute.numOfDays} Days</div>
        </div>
        <div class="row">
          <div class="col-xs-6">Base Rental Price</div>
          <div class="col-xs-6 text-right"><span><i class="fa fa-<c:out value='${dollar}'/>"></i></span>${carPaymentRequest.carReference.pricing.dailyTotalAmount}</div>
        </div>
        <div class="row">
          <fmt:formatNumber var="totalTaxx" type="number" minFractionDigits="2" maxFractionDigits="2" value="${carPaymentRequest.carReference.pricing.totalTax}" />
          <div class="col-xs-6">Taxes &amp; Fees</div>
          <div class="col-xs-6 text-right"><i class="fa fa-<c:out value='${dollar}'/>"></i><c:out value="${totalTaxx}"/></div>
        </div>
        
        <c:choose>
	        <c:when test="${carPaymentRequest.carDamageGuard == 'Yes'}">
				<div class="row">
	            	<div class="col-xs-6">Rental Car Protection</div>
			            	  
	                <div class="col-xs-6 text-right"><i class="fa fa-<c:out value='${dollar}'/>"></i>
	                <fmt:formatNumber var="totalCarDamageAmtp" type="number" minFractionDigits="2" maxFractionDigits="2" value="${carPaymentRequest.insurancePricing[0].totalDisplayCost}" />
	                <c:out value="${totalCarDamageAmtp}"/>
	                </div>
	            </div>
			</c:when>
	     </c:choose>
	
	<c:choose>
        <c:when test="${carPaymentRequest.isCouponValid == true}">
			<div class="row">
            	<div class="col-xs-6">Coupon Discount (${carPaymentRequest.couponsCode})</div>
		            	  
                <div class="col-xs-6 text-right">-<i class="fa fa-<c:out value='${dollar}'/>"></i><fmt:formatNumber type = "number" minFractionDigits="2" maxFractionDigits="2" value = "${carPaymentRequest.couponsAmt}" /></div>
            </div>
		</c:when>
     </c:choose>
	    
        <div class="row">
          <div class="col-xs-6"><strong>Estimated Total</strong></div>
          <div class="col-xs-6 text-right"><strong><i class="fa fa-<c:out value='${dollar}'/>"></i><fmt:formatNumber type = "number" minFractionDigits="2" maxFractionDigits="2" value = "${carPaymentRequest.carReference.pricing.totalChargeAmount}" /></strong>
          </div>
          </div>
	<c:choose>
            	<c:when test="${carPaymentRequest.carReference.isPubCar == true || carPaymentRequest.carReference.isTaxPayableAtRentalDesk == true}">
            		<c:if test="${carPaymentRequest.carReference.pricing.totalDuesToCharge > 0.0}">
            		<div class="row">
				       	<div class="col-xs-6">Paid Amount </div>
				        <div class="col-xs-6 text-right"><i class="fa fa-<c:out value='${dollar}'/>"></i><fmt:formatNumber type = "number" minFractionDigits="2" maxFractionDigits="2" value = "${carPaymentRequest.carReference.pricing.totalDuesToCharge}"/></div>
				    </div>
			        </c:if>
			        <c:if test="${carPaymentRequest.carReference.pricing.totalDuesAtPickUp > 0.0}">
		            <div class="row">
		            	<div class="col-xs-6"><strong>Pay at Rental-Desk</strong></div>
		                <div class="col-xs-6 text-right"><b><i class="fa fa-<c:out value='${dollar}'/>"></i><fmt:formatNumber type = "number" minFractionDigits="2" maxFractionDigits="2" value = "${carPaymentRequest.carReference.pricing.totalDuesAtPickUp}"/></b> </div>
		            </div>
		            </c:if>
            	</c:when>
            </c:choose>
        
        </div>
      </div>
		</div>
		
	
	  <!--  \ Price box end here / -->
	   <c:choose>
	    <c:when test="${carPaymentRequest.carDamageGuard == 'Yes'}">
			<div class="car-insurancebox">
				<p>Thank you for purchasing the Rental Car Protection, to view your plan documents <a href="/rental-car-protection" style="color:#ff6600" target="_blank">Click here</a></p>				
			</div>
		</c:when>
	   </c:choose>
	     <!-- Rental Car Damage Guard start here-->
 			<c:if test="${carPaymentRequest.insuDisplay == 'Yes'}">
			<c:if test="${carPaymentRequest.isInsuranceApplied == false}">
			<form:form method="POST" action="/carInsuranceAfterBooking" id="booking" modelAttribute="carPaymentRequest" novalidate="novalidate">
          	<div class="car_resultsBox" id="carDamage">          	
            	<h4 class="sub_header"> <i class="fa-travel-protection"></i> Rental Car Protection  <span class="free-cancel"><i class="fa fa-check"></i> Free Cancellation </span><span class="tripprice protetion-lg">
					<i class="fa fa-<c:out value='${dollar}'/>"></i> ${carPaymentRequest.carDamageAmt} <span> Calendar Day</span></span></h4>
            <div class="insurance">				
				<div class="carinsurance">
				<div class="col-md-8 col-sm-12 col-xs-12">
				<h4>Be smart. Add Rental Car Protection</h4>
				<ul class="content-list">
				<li>Reimbursement up to $35,000 for covered losses and damages.</li>
				<li>Covers rental car damage from collision, theft or vandalism.</li>
				<li>Up to 7,500 for covered Emergency Evacuation and Repatriation.</li>
				<li>Primary coverage so you don't have to go through your auto insurance.</li>
				<li>All drivers on the rental agreement are covered.</li>
				<li>Round-the-clock customer assistance services.</li>
				</ul> 
				<h5>Travel Safe. <span>Book Now!</span></h5>
				<span class="tripprice protetion-mobile">
					<i class="fa fa-<c:out value='${dollar}'/>"></i> ${carPaymentRequest.carDamageAmt} <span>calendar Day</span></span>
				<div class="tripmate_radio" id="insurance_radio">
				<div class="add-insurance inputSet" id="cdgYess" >
				<label>
				<input id="cdgYes" name="carDamageGuard"  value="Yes" type="radio" ng-click="disableClick('no')">
				<!-- <input id="" name="insurance" onclick="" value="Yes" type="radio"> -->
				<span><b>Yes,</b> add Rental Car Protection <i class="fa fa-<c:out value='${dollar}'/>"></i>{{totalCarDamageAmt | number:2}}</span>
				</label>
				</div>
				<div class="remove-insurance inputSet" id="cdgNoo">
				<label>
				<input id="cdgNo" name="carDamageGuard"  value="No" type="radio" ng-click="disableClick('yes')">
				<span> <b>No,</b> thanks. I'll take my chances <!-- <i class="fa fa-<c:out value='${dollar}'/>"></i><c:out value='${totalCarDamageAmt}'/>--></span>
				</label>
				</div>
				</div>
				<div style="clear:both;"></div> 
				<p class="visible-lg"> To learn more   <a class="text_link" onclick="window.open('/rental-car-protection', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=800,height=600, screenX=50,screenY=50')" href="javascript: void(0);"><u>click here</u></a>.</p>
				<p class="hidden-lg"> To learn more   <a href="javascript: void(0);" class="text_link" data-toggle="modal" data-target="#pop-up-car-protection"><u>click here</u></a>.</p>
				<!-- <div class="w650">
				<div id="tmpid" class="tmpid" style="display:none;"><i class="fa fa-angle-double-right"></i> Please Choose your Car Damage Guard</div>
				</div> -->
				<div class="w650 text-center">
					<button id="btnSearchFlights" class="btn btn-lg btn-submit" type="button" onclick="submitForm(${carPaymentRequest.bookingId});">Pay Now
						<i class="fa fa-angle-double-right"></i>
					</button>
				</div>				
				<div class="w650">
				<div id="tmpid" class="tmpid" style="display:none;"><i class="fa fa-angle-double-right"></i> Please Choose your Car Damage Guard</div>
				</div>
				</div>
				<div class="col-md-4 col-xs-12 hidden-md-image no-padding">
				<img src="/resources/car/images/insurance.gif" class="car-travel_protection_image ">
				</div>
				</div>						
            </div>
          </div>
          </form:form>
          </c:if>
          </c:if>
          <!-- Rental Car Damage Guard end here-->
 
  
  
 <!--  \   Car Rent terms of condition Start here / --> 
  <div class="row">
        <div class="col-xs-12">
          <div class="cartnc_information">
            <p><b>Rental Information:</b> The following rules and restrictions are provided by the car rental company.</p>
            <p>*We recommend that you print a copy of this page and present it at the rental car counter to simplify the pick-up process. Payment for this reservation is due when the car is picked up and will be charged by ${carPaymentRequest.carReference.vendorName} Rent-A-Car. </p>
            <p>*Only the lead driver will be able to pick up this rental car at the counter. The driver must present a valid driver's license and credit card in their name upon pick-up. The credit card is required as a deposit when renting any vehicle. The deposit amount is held by the car rental company. Please ensure sufficient funds are available  on the card. International rentals may have different driver license requirements. An international driving license is required if the drivers' license is no-roman alphabet. </p>
            <p>*Additional charges may apply for drivers under the age of 25 or over 70.</p>
            <p>*Charges for refueling, additional drivers, etc. are not included in the total price. Special equipment such as child seats and GPS, can be purchased upon pick-up (if available).</p>
            <p><strong>For Detail Rental Information: <a style="color:#ff565c" href="/car/getrentalpolicy/${carPaymentRequest.session.customerSessionId}" target="_blank"> ${carPaymentRequest.carReference.vendorName} rental policy and rules information.</strong> </a></p>
          
            <!-- <p>More help: Visit our Customer Support page Or, Call us at +${data.tfnNo} or simply email us at <a href="mailto:helpdesk@${data.siteId}.com " style="color: #ee8627">helpdesk@${data.siteId}.com </a></p> -->
          </div>
        </div>
      </div>
  <!--  \  Car Rent terms of condition End here / -->
  </div>

<!--  \ main container end here / -->

<!--  / footer start here \ -->
<jsp:include page="../confirm_footer.jsp"></jsp:include>
<!--  \ Footer end here / -->

<script src="/resources/car/js/car-confirmation.js?26062019"></script>

<script>

   
   $('#sendEmailID').click(function () {
	var emailId = $("#exampleInputEmail2").val();
	if(emailId=='')
	{
	$("#sendEmailError").text("please enter email address");
	$("#sendEmailError").show();
	return false;
	}
	
	var atpos = emailId.indexOf("@");
    var dotpos = emailId.lastIndexOf(".");
    if ((atpos<1) || (dotpos < (atpos+2)) || (dotpos+2) >= (emailId.length)) {
        $("#sendEmailError").text("please enter valid address");
        $("#sendEmailError").show();
        return false;
    }
	//alert(emailId);
	$.ajax({
        url: '/sendFlightEmail/'+emailId, // url where to submit the request 
        type : "POST", // type of action POST || GET
        success : function(result) {
           // alert(result);
            $("#sendEmailError").text(result);
            $("#sendEmailError").show().delay(3000).fadeOut();
            setTimeout(function(){ $("#exampleInputEmail2").val("");
            $(".printtext").hide();
             }, 4000);
          },
        error: function(xhr, resp, text) {
            
        }
    })
   });
</script>



<!-- Facebook Pixel Code -->

<script>

!function(f,b,e,v,n,t,s)

{if(f.fbq)return;n=f.fbq=function(){n.callMethod?

n.callMethod.apply(n,arguments):n.queue.push(arguments)};

if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';

n.queue=[];t=b.createElement(e);t.async=!0;

t.src=v;s=b.getElementsByTagName(e)[0];

s.parentNode.insertBefore(t,s)}(window,document,'script',

'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1575600346100223');

fbq('track', 'Purchase',
{cc_content_type:'CAR',
cc_order_id:'<c:out value="${carPaymentRequest.bookingId}" />', 
cc_date1:'<c:out value="${carPaymentRequest.criteria.pickUpDate}" />',
cc_date2:'<c:out value="${carPaymentRequest.criteria.returnDate}" />',
cc_length_of_stay:'<c:out value="${carPaymentRequest.carReference.carAttribute.numOfDays}" />',
cc_brand:'<c:out value="${carPaymentRequest.carReference.displayVendorName}" />',
cc_type:'<c:out value="${carPaymentRequest.carReference.carType}"/>',
cc_trip_category:'<c:out value="${ctripCategory}"/>',
currency:'GBP',
value:'<c:out value="${totalWOTaxCar+totalCarDamageAmtp}"/>',
cc_coupon_code:'<c:out value="${carPaymentRequest.couponsCode}" />',
cc_coupon_amt:'<c:out value="${carPaymentRequest.couponsAmt}" />',
cc_destination_ids:'<c:out value="${carPaymentRequest.criteria.locationsuggest.locationID}" />',
cc_destination_city:'<c:out value="${carPaymentRequest.carVendorInfo.vendorCityName}" />',
cc_destination_region:'<c:out value="${carPaymentRequest.carVendorInfo.vendorStateCode}" />',
cc_destination_country:'<c:out value="${carPaymentRequest.carVendorInfo.vendorCountryCode}" />',
cc_billing_city:'<c:out value="${carPaymentRequest.payment.city}" />',
cc_billing_state:'<c:out value="${carPaymentRequest.payment.state}" />',
cc_billing_country:'<c:out value="${carPaymentRequest.payment.country}" />',
cc_device_type:'<c:out value="${currentDevice}" />',
cc_car_protection:'<c:out value="${carPaymentRequest.carDamageGuard}" />'
});

</script>

<noscript>

<img height="1" width="1"

src="https://www.facebook.com/tr?id=1575600346100223&ev=Purchase

&noscript=1"/>

</noscript>

<!-- End Facebook Pixel Code -->

</body>
</html>
