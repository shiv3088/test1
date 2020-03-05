<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %> 
<!doctype html>
<html lang="en" ng-app="angularPurchase">
<c:set var="hotelBookingRequest" value="${bookingHotelWrapper}" />
<head>
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hotel Confirmation | ${data.siteName}</title>
<meta name="keywords" content="cheap hotels, hotel booking, hotel booking site, hotel reservations, online hotel booking, find hotel deals." />

<meta name="description" content="Discover and book cheap hotels with ${data.siteName}. Book now and save big with our discounted prices on hotel reservations." />

<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!-- start travel css -->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/hotel-style.css?2610ff217" rel="stylesheet">
<link href="/resources/css/tooltip.css" rel="stylesheet">

<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script>
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.sticky.js"></script>
<script src="/resources/js/hotel-custom.js"></script>
<script src="/resources/lib/angular/angular.js"></script>
<script src="/resources/js/modernizr.min.js"></script> 
<script src="/resources/js/respond.min.js"></script> 
<script src="/resources/js/prefixfree.min.js"></script> 
<script src="/resources/js/bootstrap.js"></script>
<script src="/resources/js/theme-scripts.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="/resources/js/angular-animate/angular-animate.js"></script>
<script type="text/javascript" src="/resources/js/angular-busy.js"></script>
<script type="text/javascript" src="/resources/js/hotelPayment_1.4.js"></script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>
<script src="/resources/js/toaster.js"></script>

<link href="/resources/css/angular-busy.css" rel="stylesheet">

<c:set var="curRsponse" value="1"/>
<c:set var="xchangeCurrencyCode" value="USD"/>
<c:set var="dollar" value="gbp"/>


<script type="text/javascript">
    function popup(divProgressBar, width, height)
    {
        try 
        {
            var height1 = $(window).height();
            var width1 = $(window).width();
            $('#' + divProgressBar).height(height + "%");
            $('#' + divProgressBar).width(width + "%");
            $('#' + divProgressBar).css({ top: ((height1 - ((height1 * parseInt(height)) / 100)) / 2).toFixed(0) + "px", left: ((width1 - ((width1 * parseInt(width)) / 100)) / 2).toFixed(0) + "px" });

            $('#fadebackground').height(height1 + "px");
            $('#fadebackground').width(width1 + "px");
            $('#fadebackground').toggle();
            $('#' + divProgressBar).toggle();
            return false;
        }
        catch (e) 
        {
        	return false; 
        }
    }
    
    var sessionTimeout = 30;
    
    window.onload = DisplaySessionTimeout;
    
    function DisplaySessionTimeout()
    {
        sessionTimeout = sessionTimeout - 1;
        if (sessionTimeout >= 0)
            window.setTimeout("DisplaySessionTimeout()", 30000);
        else 
        {
            callSessionTimeOut();
        }
    }
    
    function callSessionTimeOut()
    {
        popup('divSessionOut', 30, 30);
        return true;
    }
   
</script>

 


<!--  / Google analytics \ -->
<c:if test="${hotelBookingRequest.googleHit}">
<jsp:include page="google-analytics.jsp"></jsp:include>
</c:if>
<!--  / Google analytics \ -->
</head>
<script type="text/javascript">
	window.history.forward(-1);
	function noBack() { window.history.forward(); }
</script>

<body onload="noBack();" onpageshow="if (event.persisted) noBack();" onunload="" class="hotelsection"  ng-controller="purchaseCtrl">
	
<!-- Main Section -->
<div class="main">
  
  <!-- Header Section Start -->
  <div id="headerrs">
  <jsp:include page="home_header.jsp"></jsp:include>
  </div>
  
  <!-- Header Section End -->
      
  <!-- hotel main container start -->
  <div class="hotelMainCntr">
  	
	<!--  / Left container \ -->
	
	<div class="col-md-9 col-xs-12"  id="purchaseLeftCntr">
		
		<!--  / top info box \ -->
		<div class="top_info">
			<c:set var="countR" value="0" scope="page"/>   	
							<div class="col-xs-12 col-md-12 col-lg-12">
							<c:choose>
							<c:when test="${hotelBookingRequest.itinNumber == 'C'}">

							<h4 class="mb0"><img src="${data.siteUrl}resources/images/book-icon-big.png" width="30" align="top" style=""> Your Booking is Cancelled !</h3>
							</c:when>
						    <c:when test="${hotelBookingRequest.itinNumber != 'X'}">

							<h4 class="mb0"><img src="${data.siteUrl}resources/images/book-icon-big.png" width="30" align="top" style=""> Your Booking is Confirmed !</h3>
							</c:when>
							
							<c:otherwise>
							<h4 class="thank-you">Thank You !</h3>
							</c:otherwise>
							</c:choose>
							<c:set var="cjPnr" value="${hotelBookingRequest.itinNumber}" />
							
							<c:choose>
						<c:when test="${hotelBookingRequest.itinNumber =='X'}">
							
							<p>Your hotel booking request has been successfully received. Our customer service representative will reach you shortly with the confirmation.</p>
							<p> Your reference number is <span class="reference-number"> <c:out value='${hotelBookingRequest.unPnr}' /> </span>.<br/> kindly check your Email for booking details.</p>
						</c:when>
						<c:when test="${hotelBookingRequest.itinNumber =='C'}">
							
							<p>Your hotel booking has been Cancelled.</p>
							<p> Your reference number is <span class="reference-number"> <c:out value='${hotelBookingRequest.unPnr}' /> </span>.</p>
						</c:when>
						<c:otherwise>
						
						
					
						  
						  <p>Thank you for using ${data.siteName} to book your hotel accommodation.</p>
						  <p>Your ${data.siteName} Booking reference number: <span class="reference-number"> <c:out value='${hotelBookingRequest.unPnr}' /> </span> | Hotel confirmation number: <span class="reference-number"> <c:out value='${hotelBookingRequest.itinNumber}' />  </span>.
                                
                                
                                <br/> Kindly check your email for booking details.</p>
						 </c:otherwise>
						 </c:choose>
						</div>	
	
		</div>
		
		<!--  / top info box \ -->
		<%-- <c:choose>
			<c:when test="${hotelBookingRequest.itinNumber =='X'}">
				<div class="titleBlock_error">
			        <div class="error_container">
			            <i class="fa fa-close pull-left"></i>
			            Your booking could not be processed due to a <a href="#">credit card decline</a>
			        </div>
		   		 </div>	
				 <p><strong>Status:</strong> Your booking could not be processed due to a credit card decline. Please click on this link to update your credit card details and proceed with this booking. You may also call us back +44-800-972-3035 and we will assist you in processing your ticket.</p>
			</c:when>
			<c:otherwise>
			</c:otherwise>
		</c:choose> --%>
			
		<!--  / hotel_itenary box \ -->
		<div class="blockBox hotel_itenary">
			
			<h3 class="purchaseTitle">Hotel Detail</h3>
				
			<div class="holder">
				
					<h3 class="mb0" id="hotelNameId"><c:out value='${hotelBookingRequest.hotel.hotelName}'/> </h3>
					
					<span class="stars"><span data-ng-style="{'width': getStars(${hotelBookingRequest.hotel.rating})}"></span></span>
					
					<!-- Trip ad -->
					<!-- ${hotelBookingRequest.hotel.tripAdvisorRating}>>>>${hotelBookingRequest.hotel.tripAdvisorReviewCount} 
					<c:if test="${hotelBookingRequest.hotel.tripAdvisorRating != null}">
					<div class="tripadvisor">
					        <c:if test="${hotelBookingRequest.hotel.tripAdvisorRating != '0'}">
						    
							  <span class="advisorCircle alignright"><span data-ng-style="{'width': getStars(${hotelBookingRequest.hotel.rating})}"></span></span>							
							  <div>
							      <c:if test="${hotelBookingRequest.hotel.tripAdvisorRating == '1'}">Poor</c:if>
							      <c:if test="${hotelBookingRequest.hotel.tripAdvisorRating == '1.5'}">Poor</c:if>
							      <c:if test="${hotelBookingRequest.hotel.tripAdvisorRating == '2'}">Average</c:if>
							      <c:if test="${hotelBookingRequest.hotel.tripAdvisorRating == '2.5'}">Average</c:if>
							      <c:if test="${hotelBookingRequest.hotel.tripAdvisorRating == '3'}">Good</c:if>
							      <c:if test="${hotelBookingRequest.hotel.tripAdvisorRating == '3.5'}">Good</c:if>
							      <c:if test="${hotelBookingRequest.hotel.tripAdvisorRating == '4'}">Very Good</c:if>
							      <c:if test="${hotelBookingRequest.hotel.tripAdvisorRating == '4.5'}">Very Good</c:if>
							      <c:if test="${hotelBookingRequest.hotel.tripAdvisorRating == '5'}">Superb</c:if>
							            ${hotelBookingRequest.hotel.tripAdvisorRating}/5 &nbsp;&nbsp;
							      <c:if test="${hotelBookingRequest.hotel.tripAdvisorReviewCount != null}">
							         <b>${hotelBookingRequest.hotel.tripAdvisorReviewCount} reviews</b>
							      </c:if>
							  </div>
							
							</c:if>
					</div>
					</c:if>-->
					<!-- Trip ad -->
						
				<div class="hotelDetails_info">
				
				<div class="row">
					<div class="col-sm-12">
						
					<address>
						<c:out value='${hotelBookingRequest.hotel.address.completeAddress}'/>
					</address>
						
					</div>
					</div>
					
					<div class="row text-center">
					<div class="col-sm-4 text-left">
						<c:set var="dateParts" value="${fn:replace(hotelBookingRequest.checkInDate,'T', ' ')}" />
						  <fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd" />
						  
						  <c:set var="checkOut" value="${fn:replace(hotelBookingRequest.checkOutDate,'T', ' ')}" />
						  <fmt:parseDate value="${checkOut}" var="checkOutObject" pattern="yyyy-MM-dd" />
						<span class="smallText">Hotel Check-In</span>
						
						<p class="fs20"><fmt:formatDate value="${dateObject }" pattern="dd MMM yyyy" /></p>
						
						
						
					</div>			
				
				<div class="col-sm-4 text-left">
					<span class="smallText">Hotel Check-Out</span>
						
						<p class="fs20"><fmt:formatDate value="${checkOutObject }" pattern="dd MMM yyyy" /></p>
						
					 
					<fmt:formatDate value="${dateObject}" var="pCheckIn" pattern="MM-dd-yyyy" />
							<fmt:formatDate value="${checkOutObject}" var="pCheckOut" pattern="MM-dd-yyyy" />
							<fmt:parseNumber  value="${ dateObject.time / (1000*60*60*24) }" integerOnly="true" var="nowDays" scope="page"/>
							<fmt:parseNumber value="${ checkOutObject.time / (1000*60*60*24) }" integerOnly="true" var="otherDays" scope="page"/>
							<c:set value="${otherDays - nowDays}" var="dateDiff"/>
							
							<c:set var="ctripCategory" value="DOM" />
							<c:if test="${(hotelBookingRequest.hotel.address.country != 'US' && hotelBookingRequest.hotel.address.country != 'CA')}">
							<c:set var="ctripCategory" value="INT" /> 
							</c:if>
				</div>	
				
					<div class="col-sm-4 text-left">
						
				<span class="smallText">Nights </span>
				<p class="fs20">
				<c:if test="${fn:length(hotelBookingRequest.rooms[0].hotelFare.nightlyRate) eq 0}">
                    ${hotelBookingRequest.totalNights} 
				  </c:if>
				   <c:if test="${fn:length(hotelBookingRequest.rooms[0].hotelFare.nightlyRate) gt 0}">
				  ${fn:length(hotelBookingRequest.rooms[0].hotelFare.nightlyRate)}  </c:if>
				</p>
					<c:set var="total_guests" scope="page" value="0"/> 
					<c:forEach items="${hotelBookingRequest.rooms}" var="room" varStatus="myIndex">
						<c:set var="total_guests" scope="page" value="${total_guests+room.adults}"/>  
					</c:forEach>	
					</div>
				</div>
				
				
				</div>
				
					
				
			</div>
			
		</div>
		<!--  / hotel_itenary box \ -->
		
		<!--  / User information box \ -->
		<div class="blockBox user_information">
			
			<h3 class="purchaseTitle"> Guests and Rooms</h3>
			
			<div class="holder">
				<div class="hotel_room_top">
				
				<div class="row">					
					<div class="col-sm-4 fs17">Room(s): <strong><c:out value='${hotelBookingRequest.getRooms().size()}' /></strong></div>
					<div class="col-sm-4 fs17">Guest(s): <strong><c:out value='${total_guests}' /></strong></div>					
				</div>
				</div>
				<c:forEach items="${hotelBookingRequest.rooms}" var="Rooms" varStatus="myIndex">
						<c:set var="roomNameBook" value="${Rooms.roomFullName}" />
						<div class="row">				
							<div class="col-sm-4 fs18"><strong>Room(<c:out value="${myIndex.index+1}"/>)</strong>&nbsp;<span class="smallText"> <c:out value='${Rooms.roomFullName}'/></span></div>
							<div class="col-sm-4">
								
								<strong class="fs18"><c:out value='${Rooms.firstName}'/>&nbsp;&nbsp;<c:out value='${Rooms.lastName}'/></strong>
								
							</div>
							<div class="col-sm-4 fs18">
							      
								   <c:out value='${Rooms.adults}' />
								   <c:if test="${Rooms.adults == 1}">
								    Adult 
								   </c:if>
								   <c:if test="${Rooms.adults > 1}">
								    Adults 
								   </c:if>
								   <c:set var="noOfAdult" scope="session" value="${noOfAdult+ Rooms.adults}"/>
										<c:set var="noOfChildren" scope="session" value="${noOfChildren+ Rooms.children.size()}"/>
								  <c:if test="${Rooms.children.size() == 1}"> 
									  <c:out value='${Rooms.children.size()}'/> 
									  Child
								  </c:if>
								  <c:if test="${Rooms.children.size() > 1}"> 
									  <c:out value='${Rooms.children.size()}'/> 
									  Children
								  </c:if>
							</div>
						</div> 
						
				</c:forEach>
			</div>			
			
		</div>
		<!--  / User information box \ -->
		
		<!--  / Contact information box \ -->
		<div class="blockBox user_information">
			
			<h3 class="purchaseTitle"> Contact Details</h3>
			<div class="holder">
				<%-- <div class="hotel_room_top">				
					<div class="row">					
						<div class="col-sm-4 fs17">Room(s): <strong><c:out value='${hotelBookingRequest.getRooms().size()}' /></strong></div>
						<div class="col-sm-4 fs17">Guest(s): <strong><c:out value='${total_guests}' /></strong></div>					
					</div>
				</div> --%>
										
						<div class="row">				
							<div class="col-sm-6 fs18">Billing Number</div>
							
							<div class="col-sm-6 fs18">							      
								   <span>${hotelBookingRequest.contact.billingPhone}</span>
							</div>
						</div>	
						<div class="row">				
							<div class="col-sm-6 fs18">Contact Number</div>
							
							<div class="col-sm-6 fs18">							      
								   <span>${hotelBookingRequest.contact.mobile}</span>
							</div>
						</div>	
						<div class="row">				
							<div class="col-sm-6 fs18">Email ID</div>
							
							<div class="col-sm-6 fs18">							      
								   <span>${hotelBookingRequest.contact.email}</span>
							</div>
						</div>						
				
			</div>			
		</div>
		<!--  / Contact information box \ -->
		
		
			
		
	</div>
	
	<!--  / Left container \ -->
	
	<!--  / Right container \ -->
	<div class="col-md-3 col-xs-12 no-padding">
		
		<!--  / Price box \ -->
		<div id="main_price" class="purchaseSidebar priceBlock">
			
			<h4 class="purchaseTitle text-left">Price Details</h4>
			
			<div class="block">

				<div class="row">
				
				<c:forEach items="${hotelBookingRequest.rooms}" var="Rooms" varStatus="myIndex">	
				   <c:set var="roomtotalfare" value="0.0"/>		
				      <fmt:formatNumber var="avgRate" type="number" minFractionDigits="2" maxFractionDigits="2" value="${Rooms.hotelFare.averageBaseRate}" />	 
					<div class="col-xs-7 text-left">Room<span>&nbsp;<c:out value="${myIndex.index+1}"/></span>&nbsp;(${avgRate} X <c:if test="${fn:length(hotelBookingRequest.rooms[0].hotelFare.nightlyRate) eq 0}">
                    ${hotelBookingRequest.totalNights} 
				  </c:if>
				   <c:if test="${fn:length(hotelBookingRequest.rooms[0].hotelFare.nightlyRate) gt 0}">
				  ${fn:length(hotelBookingRequest.rooms[0].hotelFare.nightlyRate)}</c:if>)</div>
					<div class="col-xs-5 text-right">
						<fmt:formatNumber var="basefareamount" type="number" minFractionDigits="2" maxFractionDigits="2" value="${Rooms.hotelFare.nightlyRateTotalPerRoom}" />	
						<p><i class="fa fa-<c:out value='${dollar}'/>"></i><c:out value="${basefareamount}"/></p>
					</div>
					</c:forEach>	
					
				</div>
				
				 <div class="row">
					
					<div class="col-xs-4 text-left">Subtotal</div>
					<div class="col-xs-8 text-right">
					
					
						<fmt:formatNumber  type="number" minFractionDigits="2" maxFractionDigits="2"  var="roomFare"  value='${hotelBookingRequest.rooms[0].hotelFare.nightlyRateTotal}' />
						<i class="fa fa-<c:out value='${dollar}'/>"></i><c:out value="${roomFare}" />
					</div>
					
				</div> 
				
				<%-- <c:set var="totaltax" value="0.0"/> --%>
				
				<c:set var="roomCount" value="${fn:length(hotelBookingRequest.rooms)}" />
				
				<div class="row">
									
						
						
						<c:if test="${not empty hotelBookingRequest.rooms[0].hotelFare.surcharges}">
						   
							<c:forEach items="${hotelBookingRequest.rooms[0].hotelFare.surcharges}" var="surchFees" varStatus="loop">
							
							 <fmt:formatNumber var="surchargesamount" type="number" value="${surchFees.amount}" />
							<c:if test="${surchFees.amount != '0.0'}">
							
							<div class="col-xs-6">${surchFees.type}</div>			   
							<div class="col-xs-6 text-right">
                                <i class="fa fa-<c:out value='${dollar}'/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${surchargesamount}" /><br/>
							</div>	
							</c:if>
							</c:forEach>							
						</c:if>				
					</div>
					<div class="row">					   	
					  <c:if test="${not empty hotelBookingRequest.rooms[0].hotelFare.hotelFees}">
					  <c:forEach items="${hotelBookingRequest.rooms[0].hotelFare.hotelFees}" var="hotelFees" varStatus="loop">
					  <div class="col-xs-6">${hotelFees.description} (Pay At Property)</div>
					    
						<div class="col-xs-6 text-right">
					 							
	                            	<fmt:formatNumber var="hotelFeesamount" type="number" minFractionDigits="2" maxFractionDigits="2" value="${hotelFees.amount}" />
	                                 <i class="fa fa-<c:out value='${dollar}'/>"></i><c:out value='${hotelFeesamount}' />
							
						</div>
						</c:forEach>
					</c:if>					
					
				</div>
				 
				<c:choose>
							<c:when test="${hotelBookingRequest.coupons =='Yes'}">
							<div class="row">
								<div class="col-xs-8">
									Coupon Discount
								</div>

								<div class="col-xs-4 text-right">
									<fmt:formatNumber var="couponsAmt" type="number" minFractionDigits="2" maxFractionDigits="2" value="${hotelBookingRequest.couponsAmt}" />-<i class="fa fa-<c:out value='${dollar}'/>"></i><c:out value="${couponsAmt }"/></div>
							</div>
						</c:when></c:choose>				
			
		
			</div>
			<div class="total text-right">
					
					<!-- <div class="fs14" style="text-align: left; margin-bottom:10px;">Total reservation price:</div> -->
					<div class="fs30">
						   <input type="hidden" id="totPax" value="1" ng-model="totPax"  ng-value="totPax" ng-init="totPax='1'"/>
							
                         <!--  Coupons-->
                            
                          <div class="clearfix"></div>
                            <!-- <div class="feedetail" ng-disabled="true">
                            	<div class="form-group col-md-6 col-xs-7 col-sm-6  pa0 "  ng-disabled="true">
                            	<div class="col-sm-4 pa0">
                            	<a href="" ng-model="collapsed" ng-click="collapsed=!collapsed" style="cursor: pointer; text-decoration:underline; line-height:2.5em;" id="couponHave">Have Coupon Code</a>
                            	</div>
                            	<div class="col-sm-8 pa0">
                            	<span id="CouponInp" ng-show="collapsed" >
								
                            	<div class="col-sm-6 col-xs-12 pa0">
                            	<input id="couponsCode" name="couponsCode" data-val-length-min="5" ng-model="selectedCoupons" data-val-length-max="80" name="couponsCode" type="text" class="text-box card_type col-xs-12" ng-disabled="isDisabled" data-val="true" value=""/>
								
								</div>
                            	<div class="col-xs-12 apply_cupon pa0">
                            	<div style="" ng-click="checkCoupons();" ng-disabled="isDisabled"><span ng-disabled="isDisabled" id="couponApply">Apply</span></div>
                            	</div>
                            	<div style="clear:both;"><span id="couponMessage"></span></div>
                            	</span>
                            	</div>
                            	
                                </div>
                               <div class="col-md-6 ar col-xs-5 col-sm-6 text-right pa0" id="Coupon" ng-show="collapsed">
                                 - $<span id="couponAmtPlan">0.0</span>
                                </div>	                       
								<div class="clearfix"></div>
                            </div> -->
							<input type="hidden" value="0.0" id="couponAmt" ng-model="couponAmt"  ng-value="couponAmt" ng-init="couponAmt='0.0'"/>	
                          <!-- Coupons End --> 
                         
					       <div class="clearfix"></div>
                            <div class="pricetotal">
                            	<div class="col-xs-6 no-padding">
                            	<fmt:formatNumber var="hoteltotal" type="number" minFractionDigits="2" maxFractionDigits="2" value="${hotelBookingRequest.rooms[0].hotelFare.total}" /> 
                                	<h4 class="text-left">Total Price :</h4>
                                </div>
                                                               
                                <div class="col-xs-6 no-padding" id="publishedFare">
                                 
									<h4 class="text-right"><i class="fa fa-<c:out value='${dollar}'/>" ></i><c:out value='${hoteltotal}' /></h4>
                                </div>
                                
                                <input type="hidden" value="<c:out value='${hoteltotal}' />" id="totalValue"/>
								<div class="clearfix"></div>
								
					</div>
					
					<div class="price_note hidden-xs">
                                	Please note - All price are quoted in ${fn:toUpperCase(dollar)}.
                    </div>
                    
					<c:if test="${hotelBookingRequest.rooms[0].cancellationPolicy != null}">
					<div class="col-xs-6">
					<div class="cancelation_policy_main">						
						<a href="javascript:void(0);" class="pull-left cancellation_policy">Cancellation Policy</a>
                   
					     <div class="show_policy">
								 <a href="javascript:void(0);" class="close_tooltip">X</a>
								 <span class="arrow"></span>                           
							${hotelBookingRequest.rooms[0].cancellationPolicy}.
                     	
		            </div>
					     </div>
						  </div>
					</c:if>
					
					<c:if test="${hotelBookingRequest.rooms[0].hotelRemarks != null && hotelBookingRequest.rooms[0].hotelRemarks != ''}">
							<div class="col-xs-6 text-right hidden-xs">
							<div class="cancelation_policy_main">
								<a href="javascript:void(0);" class="cancellation_policy">Hotel Remarks</a>
									<div class="show_policy right">
								 <a href="javascript:void(0);" class="close_tooltip">X</a>
								 <span class="arrow"></span>
									   <div  style="overflow-y: scroll ;max-height: 250px; width: 300px;"><c:out value="${hotelBookingRequest.rooms[0].hotelRemarks}" escapeXml="false"/></div>																	
								</div>								
							  </div>					
							</div>
					</c:if>					
				</div>
			
		</div>
			</div>
		<!--  / Price box \ -->
		
		
		<!--  / add box \ -->
		<!-- <div class="purchaseSidebar">
		
			<img src="/resources/images/banner-bg.jpg" alt="">
			
		</div> -->
		<!--  / add box \ -->	
		
		
	</div>
	
	<!--  / Right container \ -->
	
	<div class="clearfix"></div>
	
	<div class="col-xs-12 col-sm-9 text-center" style="margin:15px 0;">
			<span><a href="#" style="color:#666; border: 1px solid #ccc; padding: 15px; border-radius: 30px;" onclick='javascript:window.print()'><i class="fa fa-print" aria-hidden="true"></i> Print Tickets </a> </span> &nbsp;  &nbsp;  &nbsp;   
				
			<span><a data-toggle="collapse" href="#collapseExample"  style="color:#666; border: 1px solid #ccc; padding: 15px; border-radius: 30px;"><i class="fa fa-envelope-o" aria-hidden="true"></i>  Email Tickets </a> </span>
				
	</div>	
		<div class="clearfix"></div>
	
	<div style="padding:0px 0 20px 0; margin-top:2px; text-align:center;" class="collapse" id="collapseExample">
				
				   <form class="form-inline"> 
				  <div class="form-group">
				    <label for="exampleInputEmail2">Email:</label>
				    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
				  </div>
				  <input type="button" id="sendEmailID" class="btn btn-warning" value="Send"/>
				  <div style="color:red; display: none;" id="sendEmailError"></div>
				  <input type="hidden" id="img_val" value=""/>
				</form>
				</div>
  </div>
  <!-- hotel main container End -->
   
  
  <!-- Footer Section Start -->
 
   <div id="footerrs">
    <jsp:include page="hotel_footer.jsp"></jsp:include>
  </div>
  
  <!-- Footer Section End -->
  
</div>
<!-- Main Section -->
<c:if test="${hotelBookingRequest.googleHit}">
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-73244320-1', 'auto');
  ga('send', 'pageview');

</script>
</c:if>
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
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailId.length) {
        $("#sendEmailError").text("please enter valid address");
        $("#sendEmailError").show();
        return false;
    }
//alert(emailId);
$.ajax({
                url: '/hotel/sendMailAgain/'+emailId, // url where to submit the request 
                type : "POST", // type of action POST || GET
                success : function(result) {
                   // alert(result);
                    $("#sendEmailError").text(result);
                    $("#sendEmailError").show().delay(5000).fadeOut();
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
{cc_content_type:'HOTEL',
cc_order_id:'<c:out value="${hotelBookingRequest.unPnr}" />', 
cc_date1:'<c:out value="${pCheckIn}" />',
cc_date2:'<c:out value="${pCheckOut}" />',
cc_length_of_stay:'<c:out value="${dateDiff}" />',
cc_brand:$("#hotelNameId").text(),
cc_type:'<c:out value="${roomNameBook}"/>',
cc_trip_category:'<c:out value="${ctripCategory}"/>',
currency:'GBP',
value:'<c:out value="${roomFare}"/>',
cc_coupon_code:'<c:out value="${hotelBookingRequest.couponsCode}" />',
cc_coupon_amt:'<c:out value="${hotelBookingRequest.couponsAmt}" />',
cc_number_of_people:'<c:out value="${noOfAdult+noOfChildren}"/>',
cc_num_adults:'<c:out value="${noOfAdult}"/>',
cc_num_children:'<c:out value="${noOfChildren}"/>',
cc_destination_ids:'<c:out value="${hotelBookingRequest.hotel.hotelId}" />',
cc_destination_city:'<c:out value="${hotelBookingRequest.hotel.address.city}" />',
cc_destination_region:'<c:out value="${hotelBookingRequest.hotel.address.stateProvinceCode}" />',
cc_destination_country:'<c:out value="${hotelBookingRequest.hotel.address.country}" />',
cc_hotel_name:$("#hotelNameId").text(),
cc_hotel_rating:'<c:out value="${hotelBookingRequest.hotel.rating}" />',
cc_hotel_rooms:'<c:out value="${hotelBookingRequest.rooms.size()}" />',
cc_billing_city:'<c:out value="${hotelBookingRequest.payment.city}" />',
cc_billing_state:'<c:out value="${hotelBookingRequest.payment.state}" />',
cc_billing_country:'<c:out value="${hotelBookingRequest.payment.country}" />',
cc_device_type:'<c:out value="${currentDevice}" />'

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
