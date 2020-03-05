<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!doctype html>
<html lang="en" ng-app="angularPurchase">
<head>
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title data-alt-title="Don&#39;t forget your booking">Hotel Payment | ${data.siteName}</title>
<meta name="keywords" content="cheap hotels, hotel booking, hotel booking site, hotel reservations, online hotel booking, find hotel deals." />

<meta name="description" content="Discover and book cheap hotels with ${data.siteName}. Book now and save big with our discounted prices on hotel reservations." />

<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!-- start travel css -->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/hotel-style.css?10072019" rel="stylesheet">
<link href="/resources/common/css/aminities-icons.css" rel="stylesheet">

<script src="/resources/lib/angular/angular.js"></script>
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script>
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.sticky.js?1210217"></script>
<script src="/resources/js/hotel-custom.js?1810217"></script>

<script type="text/javascript" src="/resources/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="/resources/js/angular-busy.js"></script>
<script src="/resources/flight-result/js/card-type.js"></script>
 <link href="https://plus.google.com/+${data.siteId}" rel="publisher">

<script type="text/javascript">

      window.history.forward();

        function noBack() {
            window.history.forward();
        }
        
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
    };
    
    function ordinal_suffix_of(n) {
	
		 var s=["th","st","nd","rd"],
	    v=n%100;
	      document.write(n+(s[(v-20)%10]||s[v]||s[0]));
	   };
  

var originalTitle = document.title,
    blurredTitle = document.getElementsByTagName('title')[0].getAttribute('data-alt-title');

window.onblur = function () {
  document.title = blurredTitle;
}

window.onfocus = function() {
  document.title = originalTitle;
}


</script>

<!-- <script type="text/javascript">
							  $(document).ready(
						            $('#x').text( $('#x').text().replace(/([a-z])([A-Z])/g, "$1 $2") );
						            );
							 </script> -->

<!--Checkbox -->
<script>
		
function isChecked(checkbox, btnSearchFlights) {
document.getElementById(btnSearchFlights).disabled = !checkbox.checked;
}
</script> 

<script type="text/javascript"> 
       
     function goBack() {
     //  key=false; 
     
         var path=window.location.origin;
          var rndId=$('#useridss').val();
		  var url=path+"/hotels/details/"+rndId+"";	
         var encodedUrl = decodeURIComponent(url);
         $(location).attr("href", encodedUrl);
    }
</script>

<c:set var="curRsponse" value="1"/>
<c:set var="xchangeCurrencyCode" value="GBP"/>
<c:set var="dollar" value="gbp"/>
<% String utmSource=(String)session.getAttribute("utm_source");
String siteId=(String)session.getAttribute("site_Id");
 %>
<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
<style>
    .btn[disabled]   { 
                opacity: .35 !important;
            background: #000 !important;   } 
    .hotel_itenary .facility li { width: 50%;}
</style>
</head>
<body class="hotelsection" ng-controller="purchaseCtrl" onload="noBack();" onpageshow="if (event.persisted) noBack();" onunload="">
<c:set var="utmSource" value="<%=utmSource %>" scope="page"/>
<c:set var="siteId" value="<%=siteId %>" scope="page"/>

<c:if test="${hotelBookingRequest.hotel.isSoldOut}">
<div align="center" id="divSoldOut" class="popup-product">
	<div id="fadebackground"></div>
	<div class="session-exp">
		<h3>Hotel SOLD OUT!</h3>
		<p>Seem Selected room type is sold out, Please chose anther Hotel.</p>
		<div class="clock_tym"> <i class="fa fa-clock-o" aria-hidden="true"></i></div>
		<div align="center" valign="middle"><!-- <a href="#" onClick="submitHotelForm();" class="btn btn-primary btn-lg searchbtn">Search Again</a>
			&nbsp; &nbsp;  OR &nbsp; &nbsp;  -->
			<a href="/hotelSearch/id/${hotelBookingRequest.session.customerSessionId}" class="btn btn-primary btn-lg searchbtn">Go to Listing</a>
		</div>
	</div>
</div>
</c:if>


<div align="center" id="divSessionOut" style="display:none; " class="popup-product">
	<div id="fadebackground"></div>
	<div class="session-exp">
		<h3>Session Expired!</h3>
		<p>Hotel prices may change frequently owing to demand & availability. </br>Start a new search to view the best hotel.</p>	
		<div class="clock_tym"> <i class="fa fa-clock-o" aria-hidden="true"></i></div>		
		<div align="center" valign="middle"><!-- <a href="#" onClick="submitHotelForm();" class="btn btn-primary btn-lg searchbtn">Search Again</a>
			&nbsp; &nbsp;  OR &nbsp; &nbsp;  --> 
			<a href="/" class="btn btn-primary btn-lg searchbtn">Go to Home</a>
		</div>
	</div>
</div>

	<!-- <div id="fadebackground"></div> -->
	
	<div align="center" id="divSessionOut" style="display: none; " class="popup-product">
	    <div style="padding:10px; height:200px; font-family:Helvetica; line-height:2em;">
	           <div><h3 style="color:#ffa500; font-size:23px;"> Your session has expired </h3></div>
	            <div align="center" valign="middle" style=" margin-bottom:30px;"><h4 >For Search Again, Click OK</h4></div>
	            <div align="center" valign="middle"><a href="/" class=" btn-primary " style="padding: 10px 30px; font-size: 16px; margin-top:10px;">OK</a></div>
	            <div class="clearfix"></div>
	        </div>
	</div>
	
	
	<div align="center" id="divProgressbar" style="display:none;">
	    	
	    	<div class="popup-product">	    	
	    	 <div style="text-align: center;" style="margin-top: 20px;"><img src="/resources/images/loadingresult.gif" width="80" height="80"></div>  
	         <h3 style=" margin: 0px; padding: 0px; color:#fff; padding-top:2px; margin: 0px; font-size: 20px;">Please Wait while we Confirm your Booking</h3>
	           
	         <div class="clearfix"></div>
	        </div>
	</div>

<!-- Main Section -->
<div class="main">
  
  <!-- Header Section Start -->
    <div id="headerrs">
    <jsp:include page="result_header.jsp"></jsp:include>
  </div>
  <!-- Header Section End -->
<form:form action="/hotels/booked" modelAttribute="hotelBookingRequest">
   <div class="price-block-top">
	<div class="hilight-block">
	  <div class="container">
	  <div class="row">
	    
		<div class="col-lg-6 col-sm-4"><h2> PRICE SUMMARY  </h2> </div>
		<div class="col-lg-6 col-sm-8">
	  
		  <div class="top-price-section">
  
			  <div class="row"><!--Head-->
				<div class="col-xs-3">Rooms</div>
				<div class="col-xs-3">Nights</div>
				<div class="col-xs-3">Base Fare</div>
				
				<div class="col-xs-3">Subtotal</div>
			  </div>
			  <c:forEach items="${hotelBookingRequest.rooms}" var="Rooms" varStatus="myIndex">
			     <c:set var="roomtotalfare" value="0.0"/>        
                 <fmt:formatNumber var="avgRate" type="number" minFractionDigits="2" maxFractionDigits="2" value="${Rooms.hotelFare.averageBaseRate}" />
				  <div class="row"><!--Data-->
					          
	                <div class="col-xs-3"><span><c:out value="${myIndex.index+1}"/></span> Room</div>
					<div class="col-xs-3">${fn:length(hotelBookingRequest.rooms[0].hotelFare.nightlyRate)}</div>
					<div class="col-xs-3"><i class="fa fa-<c:out value='${dollar}'/>"></i> ${avgRate}</div> 
					<div class="col-xs-3"><i class="fa fa-<c:out value='${dollar}'/>"></i>
					   <fmt:formatNumber var="basefareamount" type="number" minFractionDigits="2" maxFractionDigits="2" value="${Rooms.hotelFare.nightlyRateTotalPerRoom}" />
					   <c:out value="${basefareamount}"/>
					</div>
				  </div>
             </c:forEach> 
             
             <%-- <div class="row"><!--Data-->
                    <div class="col-xs-2"> </div>              
                    <div class="col-xs-3">Sub Total</div>
                    <div class="col-xs-2"></div>
                    <div class="col-xs-2"></div> 
                    <div class="col-xs-3"><i class="fa fa-<c:out value='${dollar}'/>"></i>
                       <fmt:formatNumber  type="number" minFractionDigits="2" maxFractionDigits="2"  var="roomFare"  value='${hotelBookingRequest.rooms[0].hotelFare.nightlyRateTotal}' />
                        <c:out value="${roomFare}" />
                    </div>
              </div> --%> 
		  </div>
		  
  
   
		</div>
	  </div>
	  </div>
	  </div>
  
	  <div class="container ">
		  <div class="row">
			  
			  <div class="col-sm-6 col-sm-push-6 text-center">
				<div class="price-block-section">
				    
										
					<div class="coupon_code row" ng-disabled="isDisabled">
					<!--  Coupons-->
	                <div class="block">
	                   <form:hidden path="Coupons" value="N" id="couponId" />
	                    <%-- <c:choose>
	                                <c:when test="${hotelBookingRequest.coupons eq 'Yes'}">
	                                    <form:hidden path="Coupons" value="Yes" id="couponId" />                                    
	                                    <div class="row">
	                                    <div class="col-xs-8">
	                                        Coupon Discount
	                                    </div>
	                                    <div class="col-xs-4 text-right">
	                                        <fmt:formatNumber var="couponsAmt" type="number" minFractionDigits="2" maxFractionDigits="2" value="${hotelBookingRequest.couponsAmt}" />-$</i><c:out value="${couponsAmt }"/></div>
	                                    </div>
	                                    <input type="hidden" value="${hotelBookingRequest.couponsAmt}" id="couponAmt" ng-model="couponAmt"  ng-value="couponAmt" ng-init="couponAmt='${hotelBookingRequest.couponsAmt}'"/>  
	                                </c:when>
	                                 
	                                <c:otherwise>                              
	                                    <form:hidden path="Coupons" value="N" id="couponId" />
	                                    <div class="coupon_code row" ng-disabled="isDisabled">
	                                        <div class="col-xs-9" ng-disabled="isDisabled">
	                                            <c:if  test="${utmSource !=  'OffLine'}">
	                                            <a href="" ng-model="collapsed" ng-click="collapsed=!collapsed" id="couponHave">Have Coupon Code <span class="fa fa-angle-down" ng-disabled="isDisabled"></span></a></c:if>
	                                            <span id="couponHave1"></span>
	                                            <span id="CouponInp" ng-show="collapsed">
	                                                <form:input  path="couponsCode" id="couponsCode" ng-disabled="isDisabled" ng-model="selectedCoupons" class="text-box card_type" type="text"  name="couponsCode" data-val-length-min="5" data-val-length-max="80" data-val="true"/>
	                                                <div class="apply_btn" ng-click="checkCoupons();" ng-disabled="isDisabled"><span ng-disabled="isDisabled" id="couponApply">{{subscribeButton}}</span></div>
	                                                <div id="popApply" style="display:none; clear:both;">
	                                                    <span>Click on apply to avail this coupon</span>
	                                                </div>
	                                                <div style="clear:both;"><span id="couponMessage"></span></div>
	                                            </span>
	                                        </div>
	                                        <div class="col-xs-3 text-right" id="Coupon" ng-show="collapsed">
	                                            <span id="couponAmtPlan"></span>
	                                        </div>
	                                    </div>
	                                    <input type="hidden" value="0.0" id="couponAmt" ng-model="couponAmt"  ng-value="couponAmt" ng-init="couponAmt='0.0'"/>  
	                                </c:otherwise>              
	                    </c:choose> --%>
	                    <c:if  test="${utmSource ==  'OffLine'}">                              
	                        <div class="coupon_code row" style="margin-bottom:20px;">
	                            <div class="col-xs-9">
	                                <a href="javascript:void(0);" class="agentfees text-orange"> Agent Fees <i class="fa fa-angle-down"></i></a>
	                                <span class="agentDiv" style="display:none;">
	                                    <input id="agFees"   class="text-box card_type agentAmont" style="padding-left:5px;" type="text" />
	                                    <div class="apply_btn" id="agFeesAdd" onClick="applyAgentfees('Y');">Apply</div>
	                                    <div class="apply_btn" id="agFeesRem" style="display: none;" onClick="applyAgentfees('N');">Remove</div>
	                                    <div id="agfApply" style="display:none; clear:both;">
	                                        <span>Click on apply </span>
	                                    </div>
	                                    <div style="clear:both;"><span id="agfMessage"></span></div>
	                                </span>
	                            </div>
	                            <div class="col-xs-3 text-right" id="agFeesDis">
	                                <i class="fa fa-<c:out value="${dollar}"/>"></i><span id="agFeesDisAmt">0.0</span>
	                            </div>
	                        </div>                           
	                    </c:if>
	                </div>
	                <!-- Coupons End -->
					</div>

					<c:if test="${not empty hotelBookingRequest.rooms[0].hotelFare.surcharges}">    
	                    <c:forEach items="${hotelBookingRequest.rooms[0].hotelFare.surcharges}" var="surchFees" varStatus="loop">
	                    <fmt:formatNumber var="surchargesamount" type="number" minFractionDigits="2" maxFractionDigits="2" value="${surchFees.amount}" />
					    <c:if test="${surchFees.amount != 0.0}">
					    <div class="row "><!--Total Cost-->
	                      <div class="col-xs-9 text-left"><c:out value="${fn:replace(surchFees.type, '(?<!_)(?=[A-Z])','$1')}" /></div>  
	                      <div class="col-xs-3">
	                       <i class="fa fa-<c:out value='${dollar}'/>"></i><c:out value='${surchargesamount}' /></div>
	                    </div>
	                    </c:if>
	                    </c:forEach>
                    </c:if>
					
					<input type="hidden" id="totPax" value="1" ng-model="totPax"  ng-value="totPax" ng-init="totPax='1'"/>
					  
                    <div class="row pt-total"><!--Total Cost-->
                    <fmt:formatNumber var="hoteltotal" type="number" minFractionDigits="2" maxFractionDigits="2" value="${hotelBookingRequest.rooms[0].hotelFare.total}" /> 
					  <div class="col-xs-9 text-left">Total Price :</div>  
					  <div class="col-xs-3" id="publishedFare">
					   <i class="fa fa-<c:out value='${dollar}'/>"></i><c:out value='${hoteltotal}' /></div>
					</div>
					<input type="hidden" value="<c:out value='${hotelBookingRequest.rooms[0].hotelFare.total}' />" id="totalValue"/>
					
					<c:if test="${not empty hotelBookingRequest.rooms[0].hotelFare.hotelFees}">
                        <c:forEach items="${hotelBookingRequest.rooms[0].hotelFare.hotelFees}" var="hotelFees" varStatus="loop">
                            <div class="pricetotal">
                               <div class="col-xs-9 no-padding text-left">${hotelFees.description.replaceAll("(\\p{Ll})(\\p{Lu})","$1 $2")} (pay at hotel)</div>                                        
                               <div class="col-xs-3 no-padding text-right">                                                                
                                   <fmt:formatNumber var="hotelFeesamount" type="number" minFractionDigits="2" maxFractionDigits="2" value="${hotelFees.amount}" />
                                   $<c:out value='${hotelFeesamount}' />
                               </div>
                            </div>
                         </c:forEach>
                    </c:if> 
					
				</div>
			  </div>
			  
			  <div class="col-sm-6 col-sm-pull-6">
				   <div class="policy-content"> <b>Please Note: </b>All price are quoted in ${fn:toUpperCase(dollar)}.</div>
				   <c:if test="${hotelBookingRequest.rooms[0].cancellationPolicy != null}">
				   <div class="cancelation_policy_main">
					    <a href="javascript:void(0);" class="pull-left cancellation_policy">Cancellation Policy</a>
						<div class="show_policy policy-content">
						 <a href="javascript:void(0);" class="close_tooltip">X</a>
						 <span class="arrow"></span>
												
						<c:out value="${hotelBookingRequest.hotel.rooms[0].cancellationPolicy}" />
						
						<c:set var = "string2" value = "${fn:replace(hotelBookingRequest.hotel.roomToBook[0].cancellationPolicy, '<br/>', '#')}" />
							
							<c:set var="cancel" value="${fn:split(string2, '#')}" />
							<c:forEach items="${cancel}" var="can">
							   <c:out value="${can}"/><br/>
							</c:forEach>								
						</div>								
				     </div>
				     </c:if>
				     <div class="clearfix"></div>
				     <c:if test="${hotelBookingRequest.hotel.roomToBook[0].hotelRemarks != null}">
				        <div class="cancelation_policy_main">
		                   <a href="javascript:void(0);" class="cancellation_policy">Hotel Remarks</a>
		                   <div class="show_policy policy-content">
		                       <a href="javascript:void(0);" class="close_tooltip">X</a>
		                       <span class="arrow"></span>
		                       <div>                              
		                          <c:out value="${hotelBookingRequest.hotel.roomToBook[0].hotelRemarks}" escapeXml="false"/>
		                                <c:set var = "string2" value = "${fn:replace(hotelBookingRequest.hotel.roomToBook[0].hotelRemarks, '<br/>', '#')}" />
		                                    
		                                    <c:set var="cancel" value="${fn:split(string2, '#')}" />
		                       </div>
		                    </div>                              
                        </div>
				     </c:if>
			  </div>
		  </div>
  
	  </div>
  
	  
  
  
	</div>
  
  <div class="container">
		<div class="top-content">
		<div class="row">
		<div class="col-sm-12 col-md-9">
		<a href="#" onClick="goBack()" class="back_btn go-back"><span class="fa fa-angle-left"></span> Back To Detail</a>
		<span class="hidden-xs"><span class="right-check fa fa-check"></span> You're Just a Click Away From Your Smart & Secure Booking!</span>
		</div>
		
		</div>
		</div>
</div>


  <!-- hotel main container start -->
  <div class="hotelMainCntr hotel-payment">
  	
	<!--  / Left container \ -->
	
	<div class="col-md-12 col-lg-9">
		
		<input type="hidden" id="useridss" value="${hotelBookingRequest.hotel.hotelId}" />
		<!--  / top info box \ -->
		
		 <%-- <form:form action="/hotels/booked" modelAttribute="hotelBookingRequest"> --%>
		<!--  / top info box \ -->
		
		<!--  / hotel_itenary box \ -->
		<div class="blockBox hotel_itenary">
			
			<h3 class="purchaseTitle">Hotel &amp; Room Details</h3>
			
			<div class="holder">
				
				<div class="block">
					
					<div class="image">
						<img ng-src="${hotelBookingRequest.hotel.thumbNailUrl}"  class="img-responsive" />
					</div>
					<input type="hidden" id="hotelIDs" value='${hotelBookingRequest.hotel.hotelId}'/>
					<div class="detail">
						<h4 class="hotelName1" id="hotelNameId"><c:out value='${hotelBookingRequest.hotel.hotelName}'/></h4>
						<div class="location">
							<span class="fa fa-map-marker location-icon"></span>
							<c:out value='${hotelBookingRequest.hotel.address.completeAddress}'/>
						</div>
						<div class="rating">
							<span class="stars">
							<span ng-style="{ 'width': getStars('<c:out value='${hotelBookingRequest.hotel.rating}' />') }"></span>
							</span>
						</div>
						
						<ul class="facility">						
						  <c:forEach items="${bookingHotelWrapper.hotel.amenties}" var="amen">
						      <%-- <li><span class="icon fa fa-check"></span><c:out value="${amen}"/></li> --%>
						      <li><span class="icon icon-${fn:toLowerCase(amen.replaceAll(' ','-'))}"></span>${amen.replaceAll("(\\p{Ll})(\\p{Lu})","$1 $2")}</li>
							</c:forEach>
							
						</ul>
			
					</div>
					
				</div>
				
				<div class="block">
					
					<div class="top">
					<div class="row">
					
					<div class="col-xs-7">
						<div class="subtitle">Room Type</div>
						<div class="small">(<c:out value="${hotelBookingRequest.getRooms().iterator().next().roomFullName}"/>) <strong class="blue">x</strong> <strong class="blue"><c:out value="${hotelBookingRequest.rooms.size()}" /></strong></div>
						
					</div>
					
					<div class="col-xs-5 text-right">
					      <c:set var="person" value="0" scope="page"/>
						 	<c:set var="nochildren" value="0" scope="page"/>
						  <c:forEach items="${hotelBookingRequest.rooms}" var="Room" varStatus="vs">  
						 	<c:set var="person" value="${person + Room.adults}" scope="page"/>						 	
						 	<c:set var="nochildren" value="${nochildren + Room.children.size()}" scope="page"/>
						 </c:forEach>
						 
						 
						<div class="subtitle"><c:out value= "${person}" />
						  					    
						    <c:choose>
							    <c:when test="${person eq 1}">
							       Adult
							    </c:when>
							    <c:when test="${person gt 1}">
							       Adults
							    </c:when>
							    <c:otherwise>
							    </c:otherwise>              
							</c:choose>
						<div class="subtitle"> 
							     							    
							    <c:choose>
							    <c:when test="${nochildren eq 1}">
							       And <c:out value= "${nochildren}" /> Child
							    </c:when>
							    <c:when test="${nochildren gt 1}">
							       And <c:out value= "${nochildren}" /> Children
							    </c:when>
							    <c:otherwise>
							    </c:otherwise>              
							</c:choose>
						</div>
						
					</div>
					
					</div>
					
					</div>
					
					
					<div class="checkinTime">
						
						<ul>
							<li>
							<div class="subtitle"><span class="fa fa-calendar"></span>Check in :</div>
							<div class="small">
							<c:set var="dateParts" value="${fn:replace(hotelBookingRequest.checkInDate,'T', ' ')}" />
		  					<fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd" />
		  					 <fmt:formatDate value="${dateObject }" pattern="dd MMM yyyy" />
							 <fmt:formatDate value="${dateObject}" var="pCheckIn" pattern="MM-dd-yyyy" />
							</div>
							</li>
							
							<li>
							
							<div class="subtitle"><span class="fa fa-calendar"></span>Check out :</div>
							<div class="small">
							<c:set var="checkOut" value="${fn:replace(hotelBookingRequest.checkOutDate,'T', ' ')}" />
		  					<fmt:parseDate value="${checkOut}" var="checkOutObject" pattern="yyyy-MM-dd" />
		  					 <fmt:formatDate value="${checkOutObject }" pattern="dd MMM yyyy" />
							 <fmt:formatDate value="${checkOutObject}" var="pCheckOut" pattern="MM-dd-yyyy" />
							</div>
							</li>
							
							<li>
							<div class="subtitle"><span class="fa fa-moon-o"></span> Nights : ${fn:length(hotelBookingRequest.rooms[0].hotelFare.nightlyRate)}</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</div>
		
		<!--  / hotel_itenary box \ -->
		
		<!--  / User information box \ -->
		<div id="user_info" class="blockBox user_information">
			
			<h3 class="purchaseTitle">Guest Details <em class="hidden-xs">(Enter Guest Names Below)</em></h3>
			
			<div class="holder">
			 <c:set var="count" value="0" scope="page" />
			 <c:forEach items="${hotelBookingRequest.rooms}" var="Rooms" varStatus="vs">  	
			 <c:set var="count" value="${count + 1}" scope="page"/>
				<div class="form-row">
					
					<div class="label">
						Room <c:out value="${count}" />
					</div>
					
					<div class="form">
					
					<div class="col_xs">
					
					<label class="semi_bold">Title:</label>
					
					
					<form:select path="rooms[${vs.index}].Title" class="form-control child_age" name="ddlCabinClass" items="${model.title}" />
					</div>
					
						
						<div class="col">
						<label class="semi_bold">First Name:<sup>*</sup></label>
						<div class="form-group-icon-left form-group-filled form-group">
						<form:input path="rooms[${vs.index}].FirstName" class="form-control" autocomplete="off"  />
						</div>
						</div>
						
						<div class="col">
						<label class="semi_bold">Last Name<sup>*</sup></label>
							<div class="form-group-icon-left form-group-filled form-group">
							<form:input path="rooms[${vs.index}].LastName" class="form-control" autocomplete="off"  />
						</div>
						</div>
						
					</div>
					
				</div>
				</c:forEach>
			</div>
			
			
		</div>
		<!--  / User information box \ -->
		
			
	 
		<!--  / Payment information box \ -->
		 <div class="blockBox payment_information">
			
			<h3 class="purchaseTitle">Payment Information <em class="hidden-xs">100% Safe and Secure Booking</em></h3>
			
			<div class="holder">
				
				
				
			
					<form:hidden id="payment-card" path="payment.cardCode" />
				
				<div class="row form-group">
										
					<div class="col-sm-3 col-xs-12">
                                    <label class="semi_bold">Credit/Debit Card No.<font color="red">*</font></label>
                                </div>
                                <div class="col-sm-4 col-xs-12">
                                    <div class="form-group-icon-left form-group-filled ">
                                        <form:input id="Payments_MaskCardNumber" path="payment.maskCardNumber" class="form-control text-box card_type col-xs-12 numbersOnly numbersastseveOnly cc-number" data-numeric="0" maxlength="16" type="text" value="" name="Payments.MaskCardNumber" data-val-required="Please provide <b>credit or debit card number</b><br/>" data-val-regex-pattern="^([0-9]+)$" data-val-regex="Please provide valid <b>Card number</b>(Entry must contain digits (0-9))<br/>" data-val="true" autocomplete="off"/>

                                        <form:hidden id="Payments_CardNumber" path="payment.cardNumber" name="Payments.CardNumber" />
											<script>
										var J = Payment.J,
										numeric = document.querySelector('[data-numeric]'),
										number = document.querySelector('.cc-number'),
										validation = document.querySelector('.validation');
										Payment.restrictNumeric(numeric);
										Payment.formatCardNumber(number, 16);
									  </script>

                                        <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CardNumber"></span>
                                        <span id="cardRange" for=""> </span>
                                    </div>



                                </div>
                                <div class="col-sm-5 col-xs-12">
                                     <div id="cards" class="spnCardImg"> 
                  				 <span class="pvisa" title="Visa" ></span> 
        <span class="pmaster" title="Master Card"></span> 
        <span class="pamerican" title="American Express"></span> 
        <span class="pdiners" title="Diners Club"></span> 
        <span class="pdiscover" title="Discover"></span> 

                </div>
                                </div>
					
				</div>
				
				<div class="row form-group">
					
					<div class="col-sm-3 col-xs-12">
						<label class="semi_bold">Card Holder Full Name<sup>*</sup></label>
					</div>
					
					<div class="col-sm-4 col-xs-12">

<div class="form-group-icon-left form-group-filled ">
						<form:input id="Payments_CardHolderName" path="payment.cardHolderName" class="form-control text-box card_type col-xs-12" type="text"  name="Payments.CardHolderName" data-val-required="Please provide <b>Card Holder Name</b><br/>" data-val-regex-pattern="^([A-Za-z ]+)$" data-val-regex="Please provide valid <b>Card Holder Name</b>(Entry must contain at least 2 letters (A-Z))<br/>" data-val-length-min="2" data-val-length-max="50" data-val-length="Card holder name length should be 2-50 characters<br/>" data-val="true" autocomplete="off"/>
                                    	<span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CardHolderName"></span>
						<form:hidden path="agentFee" name="agentFee" id="fareAgentFees" value="0.0"/>
						</div>
						
					</div>
				
					<div class="col-sm-5 col-xs-12">
					<span>(As it appears on your credit card/debit card)</span>
				</div>
					
				</div>
				
				
				
				<div class="row form-group">
					
					<div class="col-sm-3 col-xs-12">
                                    <label class="semi_bold">Expiration Date<font color="red">*</font></label>
                                </div>
                    <div class="col-sm-4 col-xs-12  no-padding">
                         				
										<div class="col-xs-7">
                                        <spring:bind path="payment.expiryMonth">
                                            <select name="payment.expiryMonth" id="Payments_ExpiryMonth" class="form-control">
                                                <c:forEach items="${model.cardMonth}" var="curExp" varStatus="loop">
                                                    <option value="${loop.index}">${curExp}</option>
                                                </c:forEach>
                                            </select>
                                        </spring:bind>
								</div>
								
								
								<div class="col-xs-5">
                                    <form:select id="Payments_ExpiryYear" path="payment.expiryYear" items="${model.cardyear}" class="form-control card_type" name="Payments.ExpiryYear" data-val-required="The ExpiryYear field is required." data-val-range-min="1" data-val-range-max="3000" data-val-range="Please select <b>card expiration year</b><br/>" data-val-number="The field ExpiryYear must be a number." data-val="true" />
                                </div>
								
								<div class="col-xs-12">
								
                                <div  id="Experrors">
                                  
                                     </div>
                                        <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="payment.expiryMonth"></span>
                                        <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.ExpiryYear"></span>
										</div>
										
                                </div>
                                
				
					
					
				</div>
				
				<div class="row form-group">
					
					<div class="col-sm-3 col-xs-12">
						<label class="semi_bold">Card Verification Number<sup>*</sup></label>
					</div>
					
					<div class="col-sm-4 col-xs-12 form-group-icon-left form-group-filled form-group">
                                        <c:if test="${not empty hotelBookingRequest.payment.cvvNo}">
					<form:input id="Payments_CvvNo" path="payment.cvvNo" class="form-control text-box card_type col-xs-12 numbersOnly" maxlength="4" name="Payments.CvvNo" autocomplete="off"/>
					</c:if>
					 <c:if test="${empty hotelBookingRequest.payment.cvvNo}">
					<form:password id="Payments_CvvNo" path="payment.cvvNo" class="form-control text-box card_type col-xs-12 numbersOnly" maxlength="4" name="Payments.CvvNo" autocomplete="off"/>
					</c:if>
                                        <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CvvNo"></span>
						
					</div>
				
					<div class="col-sm-5 col-xs-12">
						 <div class="cvvIcon">
                                        <img src="/resources/images/ccv-img.gif" id="ccvimg"><span id="tooltip"><p class="text_link">3 Digit Number From Your Card<span></span></p>
                                       
                                        </span>
                                    </div>
					</div>
					
				</div>
				
				
				
				
			</div>
			
			<div class="clearfix"></div>
			
			<div class="creditinformation"><img src="/resources/images/lock-icon12.png"> Your credit card information is protected by a Secure SSL Encrypted by GoDaddy</div>
			
		</div>
		<!--  / Payment information box \ -->
				
		<!--  / Billing information box \ -->
		<div class="blockBox billing_information">
			
			<h3 class="purchaseTitle">Billing Information <em class="hidden-xs"> (As per bank records Or credit card company)</em></h3>
			
			<div class="holder">
				
				
				
				
				
				<div class="row">
					
					<div class="col-sm-4 col-xs-12 form-group"> 
						
						<label class="semi_bold">Country<font color="red">*</font></label>
						
						<form:select path="payment.country" id="Payments_Country" class="form-control card_type chosen-select valid child_age" ng-options="opt.Name for opt in countryList track by opt.ID" name="Payments.Country" ng-model="selectedCountry" data-val-required="Select <b>billing address country</b>" data-val="true">
                    </form:select>
					
						
					 </div>
					
					<div class="col-sm-4 col-xs-12 form-group">
						
						<label class="semi_bold">Zip or Postal Code<font color="red">*</font></label>
						
						<form:input  path="payment.postalCode"  id="payment_postalCode" class="form-control text-box card_type col-xs-12" type="text"  name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" autocomplete="off"/>
					    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span>
						
						
					 </div>
					
					<div class="col-sm-4 col-xs-12">
						
						<label class="semi_bold">Town or City<font color="red">*</font></label>
						<form:input  path="payment.city"  id="payment.city" class="form-control text-box card_type col-xs-12 " type="text"  name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true"/>
						
					</div>
					
					
				</div>
				
				
				<div class="row">
				
					<div class="col-sm-4 col-xs-12 form-group"> 
					
						                        
                         <label class="semi_bold" >State or Province<font color="red" id="statemad">*</font></label>							
								  
							  <div id="stateInp" ng-hide="IsHidden">
								<form:input path="payment.state" id="payment.state" class="form-control text-box card_type col-xs-12" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
								<span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span></div>
							 
							  <div id="stateSel" ng-hide="IsShow">
								<form:select path="payment.state" id="payment.state" class="form-control card_type chosen-select valid" ng-options="opt.Name for opt in usState track by opt.ID" name="payment.state" ng-model="selectedItem"> </form:select>
							  </div>
							  
						   <form:hidden path="payment.states" id="payment_states" />
						   <form:hidden path="payment.countrys" id="payment_countrys" />
						   <form:hidden path="payment.expiryMonths" id="Payments_ExpiryMonths" /> 
						
					</div>
					
					<div class="col-sm-4 col-xs-12 form-group">
						
						<label class="semi_bold">Address line 1<font color="red">*</font></label>
						
						<form:input  path="payment.address1" id="payment.address1" class="form-control text-box card_type col-xs-12" type="text"  name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" autocomplete="off"/>
						<span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span>
						
						
					 </div>
					
					<div class="col-sm-4 col-xs-12"> 
					
					<label class="semi_bold">Address line 2</label>
					
					<form:input  path="payment.address2"  id="payment.address2" class="form-control text-box card_type col-xs-12" type="text"  name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" autocomplete="off"/>
					
					</div>
					
					
				</div>
				
				</div></div>		<div class="blockBox billing_information">
			
			<h3 class="purchaseTitle">Contact Information </h3>
			
			<div class="holder">
			
				
				<div class="row">
					
					<div class="col-sm-6 col-xs-12 form-group">
						
						<label class="semi_bold">Billing Phone <font color="red">*</font></label>
						
						<form:input  path="contact.billingPhone"  id="contact.billingPhone" class="form-control text-box card_type col-xs-12" type="text" 
						 name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80"
						  data-val-length="Enter billing address length should be 5-80 characters" data-val="true" autocomplete="off"/>
						
					</div>
					
					<div class="col-sm-6 col-xs-12">
						<label class="semi_bold">Contact Phone</label>
						<form:input  path="contact.mobile"  id="contact.mobile" class="form-control text-box card_type col-xs-12" type="text" name="Payments.Address1" autocomplete="off"/>
						
						
					</div>
					
					
			
				</div>
				
					<div class="row">
				
					<div class="col-sm-6 col-xs-12 form-group">
						
						<label class="semi_bold">Email <font color="red">*</font></label>
						
						<form:input  path="contact.email"  id="contact_email" class="form-control text-box card_type col-xs-12" type="text"  name="Payments.Address1" autocomplete="off"/>
						
					</div>
					
					<div class="col-sm-6 col-xs-12">
						<label class="semi_bold">Retype Email <font color="red">*</font></label>
						<form:input  path="contact.email1"  id="contact_email1" class="form-control text-box card_type col-xs-12" type="text" name="Payments.Address1" autocomplete="off"/>
						
						
					</div>
					
					
			
				</div>
			</div>
			
			
		</div>
		<!--  / Billing information box \ -->
		
		<div class="bottom-text col-xs-12 text-center">

                    <p class="depture checkbox"><label><input type="checkbox" id="termsChkbx " onChange="isChecked(this, 'btnSearchFlights')" /> <span class="no-margin">&nbsp;</span></label>By clicking, <b>Book Now</b> I agree that I have read and accepted ${data.siteName} <a class="text_link" href="/terms-and-conditions" target="_blank">Terms &amp; Conditions</a> and <a class="text_link" href="/privacy-policy" target="_blank">Privacy Policy</a>.   
					<!--<div>Please note that the charges on your card will be levied by Airlines Repor XD AB.</div>--></p>
                </div>
		
		<div class="col-xs-12 text-center">
		
			 <form:hidden path="UserSessionID" id="randamIds" name="UserSessionID" />
                            <input type="hidden" id="finalId" value="x123456" />
                            <input type="hidden" id="randamId" value="x123456" />
			<button id="btnSearchFlights" class="btn select-button" style="margin-bottom:10px;"  onclick="submitForm();" disabled="disabled">Book Now</button>
			
		</div>
		

     <iframe width="1" height="1" frameborder="0" scrolling="no" src="${data.siteUrl}kountLogo/171285/Hotel${hotelBookingRequest.hotel.hotelId}">
    <img width="1" height="1" src="${data.siteUrl}resources/${data.siteName}/images/logo.png?m=171285&s=Hotel${hotelBookingRequest.hotel.hotelId}">
      
</iframe>  

		</form:form>
	
	<div class="col-xs-12 text-secure"> <img src="/resources/images/lock-icons2.jpg"> Your payment details are secured via 128 Bit encryption by GoDaddy </div>
       <div class="row">
        <div class="col-md-12">
<div style="padding: 10px 0 0; color: #656565; font-size: 13px;">

        </div>
    </div>
	
	</div>
		
	<!--  / Left container \ -->
	
	<!--  / Right container \ -->

		
		<div class="col-md-3 hidden-xs hidden-sm">
			
			<div id="add_block"></div>
			
			
			</div>
			
			

	<!--  / Right container \ -->
	
	</div>
	
    <div  class="col-lg-3">
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
    </div>
	
	<div class="clearfix"></div>
	
	
	
  </div>
  

  <!-- Footer Section Start -->
    <div id="footerrs">
    <jsp:include page="hotel_footer.jsp"></jsp:include>
  </div>
  <!-- Footer Section End -->
  
<!-- Main Section -->

 <script src="/resources/js/modernizr.min.js"></script> 
<script src="/resources/js/respond.min.js"></script> 
<script src="/resources/js/prefixfree.min.js"></script> 
<script src="/resources/js/theme-scripts.js"></script> 
<script src="/resources/js/toaster.js"></script>

<script type="text/javascript" src="/resources/js/angular-animate/angular-animate.js"></script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>
<script type="text/javascript" src="/resources/js/hotelPayment_1.4.js?10072019"></script>


<script>
//Payment Price Summery fixed right side
 $(window).load(function() {
  priceScroll();
  siftingdiv();

 });
// 
  $(window).scroll(function() {
  priceScroll();
 });
 
 function priceScroll(){
   if($(this).scrollTop() != 0) {
  $('.right_price').css({"top": "0px", "position": "fixed"}); 
  
  
 } else {
  $('.right_price').css({"position": "static"}); 
  
 }
 }
 
function siftingdiv(){
		if($(window).width() < 1026)
	{
  		$('#main_price').insertAfter('#tripmate_block');
		 $('#main_price').removeClass('right_price')
	}
	
	else{
	  $('#main_price').insertBefore('#add_block');
	  $('#main_price').addClass('right_price');
	  }
	  
	}
//Shifting div

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
