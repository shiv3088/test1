<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="en" class="no-js">
<head> 
<jsp:include page="components/header/theme.jsp" />  
<link rel="stylesheet" href="/resources/travelopick/css/slick_carousel.css" /> 

<script src="/resources/js/angular/angular.js"></script>
<script src="/resources/flight-result/js/local-cache.js"></script>	
<c:forEach items="${bookingWrapperList}" var="booking">
    <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal}" />
    
</c:forEach>
<%
int sessionId=0;
try {
		sessionId=Integer.parseInt((String)request.getSession().getAttribute("SessionHit"));
	} catch (Exception e) {
		sessionId=0;
	}
if(sessionId == 0){
%>
<jsp:include page="../google-analytics.jsp"></jsp:include>
<%}%>
<script type="text/javascript">


  var rkData = localStorage.getCacheItem("lufrkdata"); 
if (rkData != null) {
    (function (url) {
        if (!window.DataLayer) {
            window.DataLayer = {};
        }
        if (!DataLayer.events) {
            DataLayer.events = {};
        }
        DataLayer.events.SiteSection = "1";
        var loc, ct = document.createElement("script");
        ct.type = "text/javascript";
        ct.async = true;
        ct.src = url;
        loc = document.getElementsByTagName('script')[0];
        loc.parentNode.insertBefore(ct, loc);
    }(document.location.protocol + "//intljs.rmtag.com/115023.ct.js"));
}
</script>

<script src="/resources/travelopick/js/slick_carousel.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
  $(document).on('ready', function() {
   
    $(".hotel-vertical-carousel").slick({
      dots: false,
      vertical: true,
       arrows: true,
      centerMode: true,
      autoplay: true,
      centerPadding: '1px',
      slidesToShow: 3,
      slidesToScroll: 3
    });

    $(".car-vertical-carousel").slick({
      dots: false,
      vertical: true,
       arrows: true,
      centerMode: true,
      autoplay: true,
      centerPadding: '1px',
      slidesToShow: 3,
      slidesToScroll: 3
    });
   
   
  });
</script>

</head>

<body class="body-wrapper">
<jsp:include page="components/header/navigation.jsp" />  
  <!--Start XE -->
<%-- <c:choose>
    <c:when test="${empty curRsponse}">
        <c:set var="curRsponse" value="1"/>
    </c:when>
    <c:when test="${not empty curRsponse}">
        <c:set var="curRsponse" value="${curRsponse}"/>
    </c:when>
</c:choose>

<c:choose>
    <c:when test="${empty xchangeCurrencyCode}">
        <c:set var="xchangeCurrencyCode" value="USD"/>
            <c:set var="dollar" value="usd"/>
    </c:when>
    <c:when test="${not empty xchangeCurrencyCode}">
        <c:set var="dollar" value="${fn:toLowerCase(xchangeCurrencyCode)}"/>
    </c:when>
</c:choose> --%>

<c:set var="curRsponse" value="1"/>
<c:set var="xchangeCurrencyCode" value="USD"/>
<c:set var="dollar" value="${fn:toLowerCase(xchangeCurrencyCode)}"/>

 <!--End XE -->
  <%String classes="Economy";
	  String froCityg="SFO";
      String toCityg="LAX";
      String airlineg="AA";
       String UAAirline="OO";
      String ResDesignCode="XX"; %>
<c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
<fmt:parseDate value = "${search.travelDate}" var = "parsedDepartDate" pattern = "MM-dd-yyyy" />
<fmt:parseDate value = "${cartBean.carSearch.dropDate}" var = "parsedReturnDate" pattern = "MM-dd-yyyy" />
<fmt:formatDate value="${parsedDepartDate}" var="checkInDate" pattern = "MMM dd, yyyy"/>
<fmt:formatDate value="${parsedReturnDate}" var="checkOutDate" pattern = "MMM dd, yyyy"/>
<c:set var="destinationCity" value="${search.destinationAirport.cityName}, ${search.destinationAirport.country}"/>
<fmt:formatDate value="${parsedDepartDate}" var="checkInDateEng" pattern = "MM-dd-yyyy"/>
<fmt:formatDate value="${parsedReturnDate}" var="checkOutDateEng" pattern = "MM-dd-yyyy"/>
<fmt:parseDate value = "${cartBean.carSearch.pickDate}" var = "parsedPickDate" pattern = "MM-dd-yyyy" />
<fmt:formatDate value="${parsedPickDate}" var="carPickDate" pattern = "MMM dd, yyyy"/>
<fmt:formatDate value="${parsedPickDate}" var="carPickDateEng" pattern = "MM-dd-yyyy"/>

<fmt:parseDate value = "${cartBean.pnfSearch.arrivalDate}" var = "parsedHotelInDate" pattern = "MM-dd-yyyy" />
<fmt:formatDate value="${parsedHotelInDate}" var="hotelCheckInDate" pattern = "MMM dd, yyyy"/>
<fmt:formatDate value="${parsedHotelInDate}" var="hotelCheckInDateEng" pattern = "MM-dd-yyyy"/>
<fmt:parseDate value = "${cartBean.pnfSearch.exitDate}" var = "parsedHotelOutDate" pattern = "MM-dd-yyyy" />
<fmt:formatDate value="${parsedHotelOutDate}" var="hotelCheckOutDate" pattern = "MMM dd, yyyy"/>
<fmt:formatDate value="${parsedHotelOutDate}" var="hotelCheckOutDateEng" pattern = "MM-dd-yyyy"/>


<c:set var="coriginAirport" value="${search.originAirport.cityCode}" />
<c:set var="cdestinationAirport" value="${search.destinationAirport.cityCode}" />
<c:set var="ctravelDate" value="${fn:split(search.travelDate,'T')[0]}" />
<c:set var="creturnDate" value="${fn:split(search.returnDate,'T')[0]}" />
<c:set var="cadults" value="${search.adults}" />
<c:set var="cchildren" value="${search.children}" />
<c:set var="cinfants" value="${search.infants}" />  
<c:set var="classes" value="${search.cabinType}" scope="page"/>
<c:set var="froCityg" value="${search.originAirport.cityName}" scope="page"/>
<c:set var="toCityg" value="${search.destinationAirport.cityName}" scope="page"/>


<c:set var="ctripType" value="O" /> 
<c:if test="${search.tripType == '2'}">
<c:set var="ctripType" value="R" /> 
</c:if>

<c:set var="ctripCategory" value="DOM" />
<c:if test="${(search.originAirport.country != 'US' && search.originAirport.country != 'CA') || (search.destinationAirport.country != 'US' && search.destinationAirport.country != 'CA')}">
<c:set var="ctripCategory" value="INT" /> 
</c:if>

</c:forEach>

<c:set var="originStateIndex1"  value="${fn:indexOf(flightSearchWrapper.froCity,'[')}}" />
<c:set var="originStateIndex2" value="${fn:indexOf(flightSearchWrapper.froCity,']')}}" />
<fmt:parseNumber var="i" type="number" value="${originStateIndex1}" />
<fmt:parseNumber var="j" type="number" value="${originStateIndex2}" />
<c:set var="originState" value="${fn:substring(flightSearchWrapper.froCity,i+1,j)}" />  

<c:set var="originStateIndex1"  value="${fn:indexOf(flightSearchWrapper.toCity,'[')}}" />
<c:set var="originStateIndex2" value="${fn:indexOf(flightSearchWrapper.toCity,']')}}" />
<fmt:parseNumber var="i" type="number" value="${originStateIndex1}" />
<fmt:parseNumber var="j" type="number" value="${originStateIndex2}" />
<c:set var="desState" value="${fn:substring(flightSearchWrapper.toCity,i+1,j)}" />

<fmt:parseDate value="${ctravelDate}" var="dateObject1" pattern="MM-dd-yyyy" />
<fmt:parseDate value="${creturnDate}" var="dateObject2" pattern="MM-dd-yyyy" />

<fmt:parseNumber  value="${ dateObject1.time / (1000*60*60*24) }" integerOnly="true" var="nowDays" scope="request"/>
<fmt:parseNumber value="${ dateObject2.time / (1000*60*60*24) }" integerOnly="true" var="otherDays" scope="page"/>
<c:set value="${otherDays - nowDays}" var="dateDiff"/>
	
<div class="crosssell-container">
<input type="hidden" value="" id="selectedCar">
<input type="hidden" value="" id="selectedHotel">
<input type="hidden" id="totalAdult" value="${bookingWrapper.adult}">
<input type="hidden" id="totalChild" value="${bookingWrapper.child}">
<input type="hidden" id="sourceMedia" value="${bookingWrapper.sourceMedia}">
<c:forEach items="${bookingWrapperList}" var="booking"  >
<!-- /container \-->
<%-- <c:set var="dollar" value="${fn:toLowerCase(booking.displayCurrencyCode)}"/> --%> 
<c:set var="airCabinClass" value="${booking.cabinClass}" scope="page"/>
</c:forEach>

<fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.grandTotal * curRsponse}" />
<c:set var="cjPnr" value="${bookingWrapper.bookingId}" />
<c:forEach items="${bookingWrapper.flight.segments}" var="flight" varStatus="fl" >
                <c:if test="${flight.isReturnFlight ==  false}">
				<c:set var="flightIti" value="${flightIti} ${flight.originAirport.airportCode} - ${flight.destinationAirport.airportCode}" scope="page" />
				 <c:set var="airlineg" value="${flight.airline.code}" scope="page"/>
				 </c:if>
				 <c:if test="${flight.isReturnFlight ==  true}">
<c:set var="flightIti" value="${flightIti} | " scope="page" />
<c:set var="flightIti" value="${flightIti} ${flight.originAirport.airportCode} - ${flight.destinationAirport.airportCode}" scope="page" />
</c:if>	
				 </c:forEach>
				 <c:set var="CjQTY" value='${(bookingWrapper.infantWs+bookingWrapper.infant+bookingWrapper.child+bookingWrapper.adult)}'/>
				 	
				 	
					
					<fmt:formatNumber var="GapublishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(bookingWrapper.fare.adultFare*bookingWrapper.adult)+(bookingWrapper.fare.childFare*bookingWrapper.child)+(bookingWrapper.fare.infantFare*bookingWrapper.infant)+(bookingWrapper.fare.infantWsFare*bookingWrapper.infantWs)}" />
					
				 	<%-- <fmt:formatNumber var="GapublishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.grandTotal * (curRsponse)}" /> --%>
      					
      				
					   
      					<fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.grandTotal * (curRsponse)}" />
             			<fmt:formatNumber var="CjpublishedFare" type="number" groupingUsed="false"  value="${((bookingWrapper.fare.adultFare*bookingWrapper.adult)+(bookingWrapper.fare.childFare*bookingWrapper.child)+(bookingWrapper.fare.infantFare*bookingWrapper.infant)+(bookingWrapper.fare.infantWsFare*bookingWrapper.infantWs))/(bookingWrapper.infantWs+bookingWrapper.infant+bookingWrapper.child+bookingWrapper.adult)}" />
						<fmt:formatNumber var="rkfeesch" type="number"	minFractionDigits="2" maxFractionDigits="2"	value="${bookingWrapper.fare.tax+(bookingWrapper.fare.markup*(bookingWrapper.infantWs+bookingWrapper.infant+bookingWrapper.child+bookingWrapper.adult))}" />
                         <fmt:formatNumber var="singalPrice" type="number" minFractionDigits="2" maxFractionDigits="2" value="${((bookingWrapper.fare.grandTotal+bookingWrapper.couponsAmt) * curRsponse)/(bookingWrapper.infantWs+bookingWrapper.infant+bookingWrapper.child+bookingWrapper.adult)}" />
      			
						<fmt:formatNumber var="cadultFare" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(bookingWrapper.fare.adultFare+bookingWrapper.fare.adultTax+totMco)  * (curRsponse)}' />
						<fmt:formatNumber var="RkpublishedFare" type="number" groupingUsed="false"  minFractionDigits="2" maxFractionDigits="2" value="${(bookingWrapper.fare.adultFare*bookingWrapper.adult)+(bookingWrapper.fare.childFare*bookingWrapper.child)+(bookingWrapper.fare.infantFare*bookingWrapper.infant)+(bookingWrapper.fare.infantWsFare*bookingWrapper.infantWs)}" />
                         <c:set var="cadultFares" value='${cadultFare}'/>
						<fmt:formatNumber var="unitPrice" type="number" groupingUsed="false"  value="${RkpublishedFare/CjQTY}" />
					    <fmt:formatNumber var="Coupdiscounts" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.couponsAmt * (curRsponse)}" />
                        <fmt:formatNumber var="Cjdiscounts" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.couponsAmt * (curRsponse)}" />
						<c:set var="CjCouponCode" value='${bookingWrapper.couponsCode}'/>
						<fmt:formatNumber var="travelGuard"  type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.TGuardValue * (curRsponse)}" />
                        <fmt:formatNumber var="tggFees"  type="number" minFractionDigits="2" maxFractionDigits="2" value="${(travelGuard/(bookingWrapper.infantWs+bookingWrapper.infant+bookingWrapper.child+bookingWrapper.adult))}" />
							<c:set var="tmString" value='${bookingWrapper.tripMate}'/>
							
							<fmt:formatNumber var="MCTC" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.macp}" />
<fmt:formatNumber var="Guard" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.tripMateCost}" />
<fmt:formatNumber var="totbrb" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(bookingWrapper.infantWs+bookingWrapper.infant+bookingWrapper.child+bookingWrapper.adult)*bookingWrapper.brbProductPrice}" />

    <div class="container">
        <div class="row" style="margin-top:20px;">
            <div class="col-md-9 col-sm-8">
                <div class="row">
                <div class="col-md-7 col-xs-12 congratulations-msg">
                    <i class="fa fa-circle fa-thumbs-up hidden- xs"></i>
                    <span class="text1">Congratulations!</span>
                    <span class="text2"> Your Flight booking has been confirmed.</span>
                </div>
				<c:if test="${fn:length(topHotelResponse.hotelList) gt 0 && bookingWrapper.hotelTaken == false}">
                <div class="col-md-5 col-sm-10 col-xs-12 hotel-strip">
					<img src="/resources/images/crosssell-images/hotel-offer.png" alt="hotel-icon" />
					
                </div>
				</c:if>
            </div>
            </div>
            <div class="col-md-3 col-sm-4">
                <button onclick="openConfirmation('${bookingWrapper.userSessionID}');" class="btn cxl-btn-type-1">Go To Flight Confirmation
                    <i class="fa fa-long-arrow-right"></i>
                </button>
            </div>
        </div>
        <div class="separator"><!-- separator --></div>
        <div class="row">
            <!-- Left Container -->
            
            <div class="col-xs-12 col-lg-9">
             <form:form method="POST" action="/bookedCrossell" id="booking" modelAttribute="bookingWrapper">
            <form:hidden path="tripMate"/>
            <form:hidden path="brb"/>
               </form:form>
            <c:if test="${bookingWrapper.tripMate == 'No' || bookingWrapper.tripMate == 'NO'}">
                <div class="row">
                    <!-- Section 1 -->
                    <div class="col-sm-12">
                        <div class="protection-component">
                            <div class="protection-header">
                                <div class="row">
                                    <div class="col-sm-4 col-xs-7">
                                        Flight Travel Protection 
                                    </div>
                                    <div class="col-sm-8 col-xs-5 text-right">
                                        <ul class="protection-list">
										<fmt:formatNumber var="cadultFare" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(bookingWrapper.fare.adultFare+bookingWrapper.fare.adultTax+totMco)  * (curRsponse)}' />
										 <c:set var="cadultFares" value='${cadultFare}'/>
                                        <c:forEach items="${bookingWrapper.insurancePricing}" var="insurancePricing" varStatus="tripM">
                                        <fmt:formatNumber var="adultTripMate" type="number" minFractionDigits="2" maxFractionDigits="2" value="${insurancePricing.displayCost * curRsponse}" />
                                            <li> ${insurancePricing.passengerType}: <i class="fa fa-<c:out value="${dollar}"/>" ></i>${adultTripMate} </li>
                                        </c:forEach>
                                            <li> Per Pax</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="protection-body xlDesign">
                                <div class="protection-body-list">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="travel-protection">
                                                <div class="insurance-icon hidden-xs">
                                                    <img id="insuranceIcon" src="/resources/images/crosssell-images/insurance-icon-gray.png" alt="">
                                                </div>
                                                <div class="header">Why Do You Need Travel Protection? The Answer is Simple.</div>
                                                <ul class="travel-protection-list">
                                                    <li><i class="fa fa-plane"></i> If you get too sick to travel, remember that your ticket is non-refundable.</li>
                                                    <li><i class="fa fa-plane"></i> Should you sustain an unexpected injury and are not able to make it to your flight.</li>
                                                    <li><i class="fa fa-plane"></i> Your travel companion has a medical emergency and you do not want to travel without them.</li>
                                                </ul>
                                                <div class="protection-option">
                                                    <!-- <div id="tripMateError" class="red"><i class="fa fa-warning"></i> Please Choose your Trip Protection Plan</div> -->
                                                    <div class="row protection-separator">
                                                        <div class="col-sm-5">
                                                            <div class="inputSet2 radio">
                                                                <label><input id="protectYes" type="radio" name="rbtn">
                                                                    <span>Yes, I want to protect my trip.</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <div class="inputSet2 radio">
                                                                <label ><input id="protectNo" type="radio" name="rbtn">
                                                                    <span>No, I would risk my entire trip <i class="fa fa-<c:out value="${dollar}"/>" ></i>${publishedFare}</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cff-info">To learn more <a name="/travel-insurance2" onclick="loadBrowser(this)" href="javascript: void(0);">click here</a> </div>
                            <!-- <div class="cff-info"><i class="fa fa-info"></i> Please <a data-toggle="modal" data-target="#cxltravelprotectionplan" href="javascript: void(0);">click here</a> to view description of travel protection. </div> -->
                        </div>
                    </div>
                </div>
                <div class="separator"><!-- separator --></div>
                </c:if>
                
                <form:form method="POST" action="/crossell/hotelSearch" modelAttribute="cartBean" id="searchHotelCar">
                <form:hidden path="brbProductCode"/>
				<form:hidden path="brbProductPriceCart" id="brbProductPrice"/>
				 <form:hidden path="isNewCard"/>
				 <form:hidden path="pointOfSale" value="XSEL"/>
                <!-- Section 2 -->
                <div class="row">
               
                <c:if test="${fn:length(topHotelResponse.hotelList) gt 0 && bookingWrapper.hotelTaken == false}">
                <c:choose>
                    <c:when test="${fn:length(topCarResponse.carAvailability) eq 0}"><div class="col-xs-12"></c:when>
                    <c:otherwise><div class="col-xs-12 col-sm-12 col-md-6"></c:otherwise>
                 </c:choose>
                    
                        <div class="cxl-hotel-component"><!-- Hotel Result Section -->
                            <div class="hotel-header">
                                <div class="row htl-header-row flexM">
                                    <div class="col-sm-6 col-xs-6">Add Hotel </div>
                                    <div class="col-sm-6 col-xs-6 text-right flexDir"><button type="button" id="hotelModifySearchBtn" class="btn modify-search-btn"><span>Modify Search</span> <i class="fa fa-angle-double-right"></i> </button></div>
                                </div>
                                <hr>
                                <div class="row htl-header-row">
                                    <div class="col-sm-6 col-xs-5">${destinationCity}</div>
                                    <div class="col-sm-6 col-xs-7 text-right fs12">
                                            Check-In: ${hotelCheckInDate}<br/>
                                            Check-Out: ${hotelCheckOutDate}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="hotel-search-component" id="hotelModifySearch" style="display:none;">
                                <div class="row">
                                    <div class="col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <form:input path="hotelSearch.stayCity" id="stayCity" onClick="this.select();" class="form-control" placeholder="${destinationCity}" value="${destinationCity}" />
                                        </div>
                                    </div>
                                    <div class="col-sm-3 col-xs-6">
                                        <div class="form-group">
                                            <form:input path="hotelSearch.checkInDate" id="checkInDate" class="form-control"  placeholder="${hotelCheckInDateEng}" value="${hotelCheckInDateEng}" readonly="true" />
                                        </div>
                                    </div>
                                    <div class="col-sm-3 col-xs-6">
                                        <div class="form-group">
                                            <form:input path="hotelSearch.checkOutDate" id="checkOutDate" class="form-control"  placeholder="${hotelCheckOutDateEng}" value="${hotelCheckOutDateEng}" readonly="true" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <span class="showRoom">1 Rooms, 2 Adults, 0 Child</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="showRoomDiv" style="display:none">
                                    <div class="row">
                                        <div class="col-sm-4 col-xs-4">Rooms</div>
                                        <div class="col-sm-4 col-xs-4">Adults (18+)</div>
                                        <div class="col-sm-4 col-xs-4">Children  (0-17)</div>
                                    </div>
                                    <div id="room1">
                                    <div class="row">
                                        <div class="col-sm-4 col-xs-4">
                                            <div class="inputGroup">
                                                <div class="form-group input-group">
                                                    <span  id="subtInputRoom" class="input-group-addon guest" data-room="1"> - </span>
                                                    <form:input path="hotelSearch.room" id="room" class="form-control text-center"  readonly="true" value="1" />
                                                    <span  id="addInputRoom" class="input-group-addon guest" data-room="1"> + </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-4 col-xs-4">
                                            <div class="inputGroup">
                                                <div class="form-group input-group">
                                                    <span  class="input-group-addon subAdultsOnLoad guest" data-room="1"> - </span>
                                                    <form:input path="hotelSearch.rooms[0].adults" id="rooms0-adult" class="form-control text-center"  readonly="true" value="2" />
                                                    <span  class="input-group-addon addAdultsOnLoad guest" data-room="1"> + </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-4 col-xs-4">
                                            <div class="inputGroup">
                                                <div class="form-group input-group">
                                                    <span  class="input-group-addon removeChildAgesOnload guest" data-room="1"> - </span>
                                                    <form:input path="hotelSearch.rooms[0].child" id="rooms0-child" class="form-control text-center"  readonly="true" value="0" />
                                                    <span  class="input-group-addon addChildAgesOnload guest" data-room="1"> + </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row childAgeRoom1" style="display:block"></div>
                                    </div>
                                </div>  
                                <div class="row">
                                    <div class="col-sm-3 col-sm-push-9 col-xs-12 text-right">
                                        <button type="button" class="btn cxl-add2trip fluid" onClick="return submitHotelForm('0')">Search <i class="fa fa-angle-double-right"></i></button>
                                    </div>
                                    <!-- <div class="col-sm-5 col-xs-6 text-right">
                                        <button type="button" class="btn cxl-add2trip fluid" id="closeHtlSearch">Close Search <i class="fa fa-times"></i></button>
                                    </div> -->
                                </div>
                            </div>
                            
                            <form:hidden path="hotelSearch.guest" id="guest" value="1 Room 1 Adult"/>
                            <form:hidden path="hotelSearch.locationid" id="locationid" value="${topHotelResponse.locationID}"/>
                            <form:hidden path="hotelSearch.rooms[1].adults" id="rooms1_adults" value="1"/>
							<form:hidden path="hotelSearch.rooms[2].adults" id="rooms2_adults" value="1"/>
							<form:hidden path="hotelSearch.rooms[3].adults" id="rooms3_adults" value="1"/>
							<form:hidden path="hotelSearch.rooms[4].adults" id="rooms4_adults" value="1"/>
							<form:hidden path="hotelSearch.rooms[5].adults" id="rooms5_adults" value="1"/>
							
							<form:hidden path="hotelSearch.rooms[1].child" id="rooms1_child" value="0" />
							<form:hidden path="hotelSearch.rooms[2].child" id="rooms2_child" value="0" />
							<form:hidden path="hotelSearch.rooms[3].child" id="rooms3_child" value="0" />
							<form:hidden path="hotelSearch.rooms[4].child" id="rooms4_child" value="0" />
							<form:hidden path="hotelSearch.rooms[5].child" id="rooms5_child" value="0" />
							
							<form:hidden path="hotelSearch.rooms[0].children[0].age" id="rooms0_children0_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[0].children[1].age" id="rooms0_children1_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[0].children[2].age" id="rooms0_children2_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[0].children[3].age" id="rooms0_children3_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[0].children[4].age" id="rooms0_children4_age" value="1"/>
							
							<form:hidden path="hotelSearch.rooms[1].children[0].age" id="rooms1_children0_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[1].children[1].age" id="rooms1_children1_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[1].children[2].age" id="rooms1_children2_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[1].children[3].age" id="rooms1_children3_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[1].children[4].age" id="rooms1_children4_age" value="1"/>
							
							<form:hidden path="hotelSearch.rooms[2].children[0].age" id="rooms2_children0_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[2].children[1].age" id="rooms2_children1_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[2].children[2].age" id="rooms2_children2_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[2].children[3].age" id="rooms2_children3_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[2].children[4].age" id="rooms2_children4_age" value="1"/>
							
							<form:hidden path="hotelSearch.rooms[3].children[0].age" id="rooms3_children0_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[3].children[1].age" id="rooms3_children1_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[3].children[2].age" id="rooms3_children2_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[3].children[3].age" id="rooms3_children3_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[3].children[4].age" id="rooms3_children4_age" value="1"/>
							
							<form:hidden path="hotelSearch.rooms[4].children[0].age" id="rooms4_children0_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[4].children[1].age" id="rooms4_children1_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[4].children[2].age" id="rooms4_children2_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[4].children[3].age" id="rooms4_children3_age" value="1"/>
							<form:hidden path="hotelSearch.rooms[4].children[4].age" id="rooms4_children4_age" value="1"/>

                            
                            <div class="hotel-body xlDesign"> 
                        


            <div style="clear: both; margin-top: 50px;"></div>                             
                <section class="hotel-vertical-carousel slider">
                    
                    <c:forEach var="hotel" items="${topHotelResponse.hotelList}" varStatus="loop">
                                                    <c:if test="${loop.index==1}">
                                                    <div class=" "> 
                                                    </c:if>
                                                    <c:if test="${loop.index != 1}">
                                                    <div class=""> 
                                                    </c:if>
                                                            <div class="row hotel-result">
                                                                    <div onclick="return submitHotelForm('${hotel.hotelId}')" class="mobile-button visible-xs"></div>
                                                                    
                                                                    <div class="col-md-8 col-sm-9 col-xs-8 hotel-sec-2">
                                                                        <div class="hotel-itinarary">
                                                                        
                                                                            <div class="hotel-type">
                                                                                
                                                                                <span title="${hotel.hotelName}">
                                                                <c:if test="${fn:length(hotel.hotelName) <= 20}">${hotel.hotelName}</c:if>
                                                                <c:if test="${fn:length(hotel.hotelName) > 20}">${fn:substring(hotel.hotelName,0,20)}...</c:if>
                                                                </span>
                                                                <small title="${hotel.address.completeAddress}" style="text-transform: capitalize;">
                                                                <c:if test="${fn:length(hotel.address.completeAddress) <= 29}">${fn:toLowerCase(hotel.address.completeAddress)}</c:if>
                                                                <c:if test="${fn:length(hotel.address.completeAddress) > 29}">${fn:substring(fn:toLowerCase(hotel.address.completeAddress),0,29)}...</c:if>
                                                                </small>
                                                                                
                                                                            </div>
                                                                            
                                                                            <div class="star-rating star${hotel.ratingNDes}">
                                                                                    <i class="fa fa-star"></i>
                                                                                <i class="fa fa-star"></i>
                                                                                <i class="fa fa-star"></i>
                                                                                <i class="fa fa-star"></i>
                                                                                <i class="fa fa-star"></i>
                                                                            </div>
                                                                            
                                                                        <div>
                                                                        
                                                                        
                                                                        <c:if test="${hotel.tripAdvisorRating >= 4.6}">      
                                                    <div data-trip="Exceptional" class="trip-advisor">
                                                        <span class="trip-icon five"></span> <!-- | <span>Wonderful</span> -->
                                                    </div>
                                                    </c:if>
                                                    <c:if test="${hotel.tripAdvisorRating <= 4.5 && hotel.tripAdvisorRating > 4.0}"> 
                                                    <div data-trip="Wonderful" class="trip-advisor">
                                                        <span class="trip-icon five"></span> <!-- | <span>Wonderful</span> -->
                                                    </div>
                                                    </c:if>
                                                    <c:if test="${hotel.tripAdvisorRating <= 4.0 && hotel.tripAdvisorRating > 3.0}"> 
                                                    <div data-trip="Excellent" class="trip-advisor">
                                                        <span class="trip-icon four"></span> <!-- | <span>Wonderful</span> -->
                                                    </div>
                                                    </c:if>
                                                    <c:if test="${hotel.tripAdvisorRating <= 3.0 && hotel.tripAdvisorRating >= 2.0}"> 
                                                    <div data-trip="Good" class="trip-advisor">
                                                        <span class="trip-icon three"></span> <!-- | <span>Wonderful</span> -->
                                                    </div>
                                                    </c:if>
                                                    <c:if test="${hotel.tripAdvisorRating < 2.0}"> 
                                                    <div data-trip="Poor" class="trip-advisor">
                                                        <span class="trip-icon two"></span> <!-- | <span>Wonderful</span> -->
                                                    </div>
                                                    </c:if>
                                                    
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                    <fmt:formatNumber var="formattedHotelPrice" type="number" minFractionDigits="2" maxFractionDigits="2" value="${hotel.lowRate * curRsponse}" />
                                                                    <div class="col-md-4 col-sm-3 col-xs-4 hotel-sec-3 text-center"> 
                                                                        <div class="hotel-price offer">
                                                                        <c:if test="${hotel.promoTitle != null && hotel.promoTitle != ''}"> <div class="save10"><span class="corner"></span>${hotel.promoTitle}</div></c:if>	
                                                                            <div style="clear: both;"></div>
                                                                            <c:if test="${hotel.lowRate != hotel.highRate}">
                                                                                <del><i class="fa fa-<c:out value="${dollar}"/>" ></i>${hotel.highRate}</del>
                                                                            </c:if>	
                                                                                <i class="fa fa-<c:out value="${dollar}"/>" ></i><c:out value='${fn:split(formattedHotelPrice,".")[0]}'/><sup>.<c:out value='${fn:split(formattedHotelPrice,".")[1]}'/></sup>
                                                                                <small>avg/night</small>
                                                                            
                                                                        </div>
                                                                        <button onclick="return submitHotelForm('${hotel.hotelId}')" class="hidden-xs btn cxl-add2trip outline" data-btn="hotelAdd2Trip"><span>ADD TO TRIP</span> <i class="fa fa-angle-double-right"></i></button> 
                                                                    </div>
                                                            </div> 
                                                    </div>
                                                </c:forEach>
                                                
                </section>
                
                            <c:forEach var="hotel" items="${topHotelResponse.hotelList}" end="2" >
                                 
                                </c:forEach>
                               
                                <div class="see-more">
                                    <a onClick="return submitHotelForm('1')" class="btn see-more-btn">See More Hotels <i class="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div> <!-- End Hotel Result Section -->
                    </div>
                    </c:if>
                     
                
                    <c:if test="${bookingWrapper.carTaken == false}">
                    <c:if test="${fn:length(topCarResponse.carAvailability) gt 0}">
                     <c:choose>
                    <c:when test="${fn:length(topHotelResponse.hotelList) eq 0}"><div class="col-xs-12"></c:when>
                    <c:otherwise><div class="col-xs-12 col-sm-12 col-md-6"></c:otherwise>
                    </c:choose> 
                       <div>
                        <div class="cxl-car-component"> 
                            <div class="car-header">
                                <div class="row car-header-row flexM">
                                    <div class="col-sm-6 col-xs-6">Add Car</div>
                                    <div class="col-sm-6 col-xs-6 flexDir"><button type="button" id="carModifySearchBtn" class="btn modify-search-btn"><span>Modify Search</span> <i class="fa fa-angle-double-right"></i></button></div>
                                </div>
                                <hr>
                                <div class="row car-header-row">
                                    <div class="col-sm-6 col-xs-6">${destinationCity}</div>
                                    <div class="col-sm-6 col-xs-6 text-right fs12">
                                            Pick up: ${carPickDate}<br/>
                                            Drop: ${checkOutDate}
                                    </div>
                                </div>
                            </div>
                           
                            <div class="car-search-component" id="carModifySearch" style="display:none;">
                                <div class="row">
                                    <div class="col-sm-6 col-xs-6">
                                        <div class="form-group">
                                            <form:input path="carSearch.pickLocation" id="pickLocation" onClick="this.select();" class="form-control" placeholder="${destinationCity}" value="${destinationCity}" />
                                        </div>
                                    </div>
                                    <div class="col-sm-3 col-xs-6">
                                        <div class="form-group arrow">
                                            <form:select path="carSearch.driverAge" items="${dAge}" class="form-control">
											</form:select>
                                        </div>
                                    </div>
                                    <div class="col-sm-3 col-xs-6">
                                            <div class="form-group">
                                                <form:input path="carSearch.pickDate" id="pickDate" class="form-control" placeholder="${carPickDateEng}" value="${carPickDateEng}" readonly="true"/>
                                            </div>
                                        </div>
                                    <div class="col-sm-3 col-xs-6">
                                        <div class="form-group arrow">
                                            <form:select path="carSearch.pickTime" id="pickTime" items="${carTime}" class="form-control"></form:select>
                                        </div>
                                    </div>
                                
                                    <div class="col-sm-3 col-xs-6">
                                            <div class="form-group arrow">
                                                <form:input path="carSearch.dropDate" id="dropDate" class="form-control" placeholder="${checkOutDateEng}" value="${checkOutDateEng}" readonly="true"/>
                                            </div>
                                        </div>
                                    <div class="col-sm-3 col-xs-6">
                                        <div class="form-group arrow">
                                            <form:select path="carSearch.dropTime" id="dropTime" items="${carTime}" class="form-control"></form:select>
                                        </div>
                                    </div>
                                    
									<div class="col-sm-3 col-xs-6">
                                         <button type="button" class="btn cxl-add2trip fluid" onClick="return submitCarForm('0')">Search <i class="fa fa-angle-double-right"></i></button> 
                                       
                                    </div>
									
                                </div>
                                <div class="row">
                                    
                                    <!-- <div class="col-sm-5 col-xs-6 text-right">
                                        <button type="button" class="btn cxl-add2trip fluid" id="closeCarSearch">Close Search<i class="fa fa-times"></i></button>
                                    </div> -->
                                </div>
                            </div>
                            <form:input type="hidden"  path="carSearch.pickUpLocationID" id="pickUpLocationID" value="${topCarResponse.pickUpLocationID}" />
							<form:input type="hidden"  path="carSearch.pickUpLocationCode" id="pickUpLocationCode" value="${topCarResponse.pickUpCity}" />
							<form:input type="hidden"  path="carSearch.pickUpSearchedLocation" id="pickUpSearchedLocation" value="${topCarResponse.pickUpSearchedLocation}" />
                            
                            <div class="car-body xlDesign">
                            <c:forEach var="car" items="${topCarResponse.carAvailability}">
                                <div class="row car-result">
                                    <div class="mobile-button visible-xs" onClick="return submitCarForm('${car.carReference.vehicleType}-${car.carReference.vendorCode}')"></div>
                                    <div class="col-md-3 col-sm-3 col-xs-3 text-center">
                                        <div class="htl-thumb-img">
                                            <img class="img-responsive" onerror="javascript:imgError(this,'/resources/images/crosssell-images/no-image.jpg')" src="/resources/images/car-images/cars-sm/${fn:toLowerCase(fn:replace(fn:trim(car.carReference.carName),' ','-'))}.jpg" alt="Car" />
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-sm-6 col-xs-5 car-sec-2">
                                        <div class="car-type">
                                            <span title="${car.carReference.carType}">${car.carReference.carType}</span>
                                            <small title="${car.carReference.carName}"> ${car.carReference.carName}</small>

                                            <ul class="list-inline car-itinarary-list-mobile">
                                                <li>
                                                    <i class="fa icon-passenger"></i> ${car.carReference.carAttribute.numOfPassengers}
                                                </li>
                                                <li>
                                                    <i class="fa icon-door2"></i> ${car.carReference.carAttribute.numberOfDoors}
                                                </li>
                                                <li>
                                                    <i class="fa icon-luggage"></i> ${car.carReference.carAttribute.numOfLuggageLarge}
                                                </li>
                                                <li ng-if="car.CarReference.carAttribute.CarFuel == 'aircon'">
                                                    <i class=" fa fa-snowflake-o"></i> Aircon
                                                </li>
                                                <!-- <li ng-if="car.CarReference.carAttribute.CarFuel == 'non aircon'">
                                                    <i class=" fa fa-snowflake-o"></i> Non-Aircon
                                                </li> -->
                                                <li>
                                                    <c:if test="${car.carReference.carAttribute.transmission == 'Automatic'}">
                                                        <i class="fa icon-transmission-a"></i> ${car.carReference.carAttribute.transmission}
                                                    </c:if>
                                                    <c:if test="${car.carReference.carAttribute.transmission == 'Manual'}">
                                                        <i class="fa icon-transmission-m"></i> ${car.carReference.carAttribute.transmission}
                                                    </c:if>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
									<fmt:formatNumber var="formattedCarPrice" type="number" minFractionDigits="2" maxFractionDigits="2" value="${car.carReference.pricing.avgPrice * curRsponse}" />
                                    <div class="col-md-4 col-sm-3 col-xs-4 car-sec-3 text-center">
                                        <div class="car-price">
                                            <i class="fa fa-<c:out value="${dollar}"/>" ></i><c:out value='${fn:split(formattedCarPrice,".")[0]}'/><sup>.<c:out value='${fn:split(formattedCarPrice,".")[1]}'/></sup><small class="car">/ day</small>
                                            <small>Total : <i style="font-size:12px;" class="fa fa-<c:out value="${dollar}"/>" ></i>${car.carReference.pricing.totalChargeAmount} </small>
                                        </div>
                                        <button data-btn="carAdd2Trip" onClick="return submitCarForm('${car.carReference.vehicleType}-${car.carReference.vendorCode}')" class="btn cxl-add2trip outline hidden-xs"><span>Add to Trip</span> <i class="fa fa-angle-double-right"></i></button>
                                    </div>
                                </div>
                                </c:forEach>

                                <div class="see-more">
                                    <a onClick="return submitCarForm('1')" class="btn see-more-btn">See More Cars <i class="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                             
                        </div> <!--End Car Result Section -->
                    </div>  
                    </div>
                    </c:if>
                    </c:if>
                    </form:form>
                </div>
                <div class="separator"><!-- separator --></div>
                <!-- Section 3 -->                
                <div class="row">
                	<div class="col-sm-12">
					<c:if test="${(bookingWrapper.brb == 'No' || bookingWrapper.brb == 'YesNo') && fn:length(bookingWrapper.brbGetResponse.lstBrbProduct) gt 0}">
						<div class="row">
						<div class="col-sm-12">
							<div class="protection-component">
								<div class="protection-header brb-icon">
									<div class="row">
										<div class="col-sm-10 col-xs-10">
                                            Flight Baggage Protection <a class="red inline fs12" data-toggle="modal" data-target="#brbLink" href="javascript:void(0)">learn more</a>
										</div>
										<div class="col-sm-2 col-xs-2">
											<div class="brb-icon"><!-- BRB Icon --></div>
										</div>                                   
									</div>
								</div>
								<div class="protection-body xlDesign">
									<div class="protection-baggage-body text-center">
										<div class="row">
										<c:forEach items="${bookingWrapper.brbGetResponse.lstBrbProduct}" var="baggage" varStatus="bg">
										<fmt:formatNumber var="formattedbaggage" type="number" minFractionDigits="2" maxFractionDigits="2" value="${baggage.productPrice * curRsponse}" />
											<div class="col-sm-4 col-xs-6">
											<c:choose>
											<c:when test="${not bg.last}"><ul class="protection-body-list border"></c:when>
											<c:otherwise><ul class="protection-body-list"></c:otherwise>
											</c:choose>
												
													<!-- <li class="type">${baggage.productCode}</li> -->
                                               <!-- <c:if test="${baggage.productCode eq 'SILVER'}">
												<fmt:formatNumber var="SILVER" type="number" minFractionDigits="0" maxFractionDigits="0" value="${500 * curRsponse}" />
												<li class="pay">You get <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value="${SILVER}"/> per bag.</li>
												</c:if> -->
												<c:if test="${baggage.productCode eq 'GOLD'}">
												<fmt:formatNumber var="GOLD" type="number" minFractionDigits="0" maxFractionDigits="0" value="${1000 * curRsponse}" />
												<li class="pay">You get <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value="${GOLD}"/> per bag.</li>
												</c:if>
												
												 <c:if test="${baggage.productCode eq 'PLATINUM'}">
												<fmt:formatNumber var="GOLD" type="number" minFractionDigits="0" maxFractionDigits="0" value="${1500 * curRsponse}" />
												<li class="pay">You get <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value="${GOLD}"/> per bag.</li>
												</c:if>
												
												 <c:if test="${baggage.productCode eq 'DIAMOND'}">
												<fmt:formatNumber var="GOLD" type="number" minFractionDigits="0" maxFractionDigits="0" value="${2000 * curRsponse}" />
												<li class="pay">You get <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value="${GOLD}"/> per bag.</li>
												</c:if>

													<li class="price"><i class="fa fa-<c:out value="${dollar}"/>"></i> ${formattedbaggage}</li>
													<li class="pass">per pax</li>
													<li class="radioBtn">
														<div class="inputSet2 radio" onclick="brbSetValue('${baggage.productCode}','${formattedbaggage}');">
															<label> <input class="brbGold" type="radio" name="rbtnBrb">
																<span>&nbsp;</span>
															</label>
														</div>
													</li>
												</ul>
											</div>
											</c:forEach> 
										</div>

                                        <div class="row">
                                            <div class="col-xs-12 text-left">
                                                <p class="fs12">
                                                    NOTE: This service is applicable for this flight booking only. If you require any changes, you must report to
                                                    <a class="red inline" href="mailto:info@blueribbonbags.com">info@blueribbonbags.com</a>
                                                    prior to your scheduled departure.
                                                    <br> Please mention your Service Agreement Number in the subject line and it may require additional purchases.
                                                    <br> Once clicked on 'Add Baggage Protection', I agree to the
                                                    <a class="red inline" onclick="loadBrowser(this)" href="javascript:void(0)" name="/brb/description">Terms and Conditions</a>
                                                </p>
                                                <p>
                                                    <!-- <a class="red inline" data-toggle="modal" data-target="#brbLink" href="javascript:void(0)">learn more</a> -->
                                                </p>
                                            </div>
                                        </div>
									</div>
								</div>
							</div>
						</div>                    
					</div>
					</c:if>
					<div id="brbError" style="display:none; color: red;"><i class="fa fa-angle-double-right"></i>Please Choose your Baggage Protection Program</div>
                	</div>

                </div>
                <div class="separator"><!-- separator --></div>
				
				<!-- Section 4 -->
            	
				<c:if test="${fn:length(topParkingResponse.parkingAvailability) gt 0}">
                <div class="row">
				
                    <div class="col-sm-12 col-md-6">
                        <div class="protection-component">
                            <div class="protection-header">
                                Park at Airport 
                            </div>
							
                            <div class="protection-body xlDesign">
                                <div class="row other-option-airport">
                                    <div>
                                        <div class="col-xs-6 col-md-8"><strong>${topParkingResponse.lotName}</strong></div>
                                        <div class="col-xs-6 col-md-4 text-right"><button onClick="return submitPnfForm('1')" data-btn="parkNflyAdd2Trip" class="btn cxl-add2trip outline"><span>ADD TO TRIP</span> <i class="fa fa-angle-double-right"></i></button></div>
                                    </div>
                                </div>
                                
                                <c:forEach var="parking" items="${topParkingResponse.parkingAvailability}">
                                <div class="airport">
                                    <div class="row">
                                        <div class="col-xs-8">
										<strong>Parking Type</strong>
										<br>
                                            <ul class="airport-list">
                                                <li> 
                                                    <h5>${parking.typeName}</h5>
                                                   <!--  <p>Discount Rates Platinum $11.01 / AAA $11.66</p> -->
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-xs-4 text-center">
                                        <fmt:formatNumber var="formattedParkingPrice" type="number" minFractionDigits="2" maxFractionDigits="2" value="${parking.pricing.avgPrice * curRsponse}" />
                                            <div class="parknfly-price"><i class="fa fa-<c:out value="${dollar}"/>" ></i>${formattedParkingPrice}<small>Per Day</small></div>
                                        </div>
                                    </div>
                                </div> 
                                <div class="see-more">
                                    <a onclick="return submitPnfForm('1')" class="btn see-more-btn">See More Parkings <i class="fa fa-angle-double-right"></i></a>
                                </div>
                                </c:forEach>
                            </div>
							
							
                        </div>
                    </div>
                </div>
				</c:if>
                <div class="separator"><!-- separator --></div>
				<c:if test="${fn:length(topHotelResponse.hotelList) gt 0 && bookingWrapper.hotelTaken == false}">
				<div class="disclaimer">
					<p style="color:#666;"><b>Disclaimer:</b> Hotel Instant discount is applicable only for this session. The discount does not applies on specific room/hotel type. </p>
				</div>
				</c:if>
            </div>
            <!-- End Left Container -->
 
            <!-- right Container -->
            <!-- class="col-lg-3 col-xs-12 hidden-xs hidden-sm hidden-md" -->
            <div id="cxlPaymentSummary" class="col-lg-3 col-xs-12 hidden-xs hidden-sm hidden-md">
                <jsp:include page="components/itinerary.jsp" /> 
            </div>
            <!-- End right Container -->
        </div>
    </div>
</div>



<ul id="cxlPaymentClick" class="list-inline mobile-link-tab visible-sm visible-xs">
    <li class="pull-left"><a href="javascript:void(0)">Price Summary</a></li>
    <li class="gotoTop pull-right"><a href="javascript:void(0)"><i class="fa fa-arrow-up"></i></a></li>
</ul>


<div id="brbLink" class="modal fade  baggage-protection-popup" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <h3>A Comprehensive Overview</h3>
                <dl class="hotels">
                    <dt>Please note that this service is provided on Fares Hub by Blue Ribbon Bags.</dt>
                    <dd><i class="fa fa-check"></i> Once added to your booking, Blue Ribbon Bags (BRB) will track your delayed baggage and speed up its return within 96 hours (4 days of your flight arrival) of it being lost.</dd>
                    <dd><i class="fa fa-check"></i> Each purchase of BRB is per person, per round trip and does not include the connections during your flight trip.</dd>
                    <dd><i class="fa fa-check"></i> Under this protection plan categorized into three, Blue Ribbon Bag will pay you.</dd>
                </dl> 
                <p>Please click here to <a class="red inline" name="/baggage-protection" onclick="loadBrowser(this)" href="javascript:void(0)">View the description of baggage policy</a></p> 
            </div>
            <div class="modal-footer">
                <button type="button" class="btn cxl-add2trip" data-dismiss="modal">Close <i class="fa fa-angle-double-right"></i></button>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<!-- <div id="cxltravelprotectionplan" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div> -->
<!-- Close : Model Popup -->


<jsp:include page="components/footer/footer.jsp" /> 
<script type="text/javascript" src="/resources/js/crossell/crosssell-carScript.js"></script>
<script type="text/javascript" src="/resources/js/crossell/crosssell-hotelScript.js"></script>
<script>
$("#hotelDisable").hide();
$("#carDisable").hide();

</script>
<%
if(sessionId == 0){
%>
	
<!--Footer Closed-->
<!-- Google Code for Conversion Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 928632334;
var google_conversion_language = "en";
var google_conversion_format = "3";
var google_conversion_color = "ffffff";
var google_conversion_label = "sgKZCKz37WMQjpznugM";
var google_remarketing_only = false;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/928632334/?label=sgKZCKz37WMQjpznugM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>

<!-- Page-hiding snippet (recommended) Google For Optimise Code start  -->

<style>.async-hide { opacity: 0 !important} </style>
<script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'GTM-PTCJSP5':true});</script>

<!-- Page-hiding snippet (recommended) Google For Optimise Code end  -->

<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-73244320-1', 'Travelopick.com');
ga('require', 'GTM-PTCJSP5');
//ga('create', 'UA-87703050-1', {'name':'b'});
ga('send', 'pageview');
ga('b.send', 'pageview');
ga('require', 'ec');
</script>
<!-- Google Code for Remarketing Conversion Page -->
<script type="text/javascript">
ga('require', 'ecommerce');
ga('ecommerce:addTransaction', {
'id': '<c:out value="${cjPnr}"/>',                     // Transaction ID. Required.
'affiliation': 'Flight',   // Affiliation or store name.
'revenue': '<c:out value="${GapublishedFare}"/>',               // Grand Total.
'shipping': '0',                  // Shipping.
'tax': '<c:out value="${rkfeesch}"/>'                     // Tax.
});

ga('ecommerce:addItem', {
'id': '<c:out value="${cjPnr}"/>',                     // Transaction ID. Required.
'name': '<c:out value="${froCityg}"/> - <c:out value="${toCityg}"/>',    // Product name. Required.
'sku': '<c:out value="${airlineg}"/>',                 // SKU/code.
'category': 'Flight',         // Category or variation.
'price': '<c:out value="${unitPrice}"/>',                 // Unit price.
'quantity': '<c:out value="${CjQTY}"/>'                   // Quantity.
});

ga('ec:addProduct',{
// productFieldObject stores product click and other details
'id': '<c:out value="${cjPnr}"/>', // Product ID/SKU - Type: string
'name': '<c:out value="${froCityg}"/> - <c:out value="${toCityg}"/>', // Product name - Type: string
'category': 'Flight', // Product category - Type: string
'brand': '<c:out value="${airlineg}"/>', // Product brand - Type: string
'variant': '<c:out value="${airCabinClass}"/>', // Variant of the product like color, size etc - Type: string 
'price': '<c:out value="${unitPrice}"/>', // Product price - Type: numeric
'quantity': '<c:out value="${CjQTY}"/>', // Product quantity - Type: numeric
});
// Transaction level information is provided via actionFieldObject.
ga('ec:setAction', 'purchase',{
// actionFieldObject stores action data
'id': '<c:out value="${cjPnr}"/>', // Transaction id - Type: string
'affiliation': 'Flight', // Store name - Type: string
'revenue': '<c:out value="${unitPrice}"/>', // Total Revenue - Type: numeric
'tax': '<c:out value="${rkfeesch}"/>', // Tax - Type: numeric
'shipping': '0', // Shipping - Type: numeric
'coupon': '<c:out value="${CjCouponCode}"/>' // Order/Transaction coupon - Type: string  
});

ga('ecommerce:send');
ga('send', 'pageview');
</script>

<script type="text/javascript" language="Javascript">

 var cjData = localStorage.getCacheItem("lufcjdata"); 
localStorage.removeItem("lufcjdata");   

if(cjData != null){
localStorage.clear();
var QTY = '<c:out value="${CjQTY}"/>';
var AMT = '<c:out value="${CjpublishedFare}"/>';
var discount = '<c:out value="${Cjdiscounts}"/>';
var cjPnr = '<c:out value="${cjPnr}"/>';

var CjCouponCode = '<c:out value="${CjCouponCode}"/>';
if(cjPnr != 'X'){    
var url ='https://www.emjcd.com/u?containerTagId=15468&CID=1538584&TYPE=389528&CURRENCY=USD';
url += '&OID=' +cjPnr;
var items='AIR';
if(discount != 0.0){    
url += '&COUPON=' + CjCouponCode;
}

AMT=AMT.replace(/,/g , "");
url += '&ITEM1='+ 'AIR';
url += '&AMT1=' + AMT;
url += '&QTY1=' + QTY;

var cjtgpString= '<c:out value="${tmString}"/>';
if(cjtgpString == 'Yes'){
var TGAMT = '<c:out value="${tggFees}"/>';
url += '&ITEM2='+ 'AIRINSURANCE';
url += '&AMT2=' + TGAMT;
url += '&QTY2=' + QTY;
}
url += '&METHOD=IMG';
url += '&CJEVENT='+cjData.eventID;

document.write('<img height="1" width="20" border="0"  src="' + url +
'" />');

}
}
</script> 

<script type="text/javascript" language="Javascript">

    var CLXData = localStorage.getCacheItem("lufCldata"); 
        localStorage.removeItem("lufCldata");   
   
       if(CLXData != null){
    localStorage.clear();
    var AMT = '<c:out value="${CjpublishedFare}"/>';
    var cjPnr = '<c:out value="${cjPnr}"/>';
    
   if(cjPnr != 'X'){    
    var url ='https://www.clixGalore.com/AdvTransaction.aspx?AdID=16521&';
     AMT=AMT.replace(/,/g , "");
     url += 'SV=' + AMT;
     url += '&OID=' +cjPnr;

       document.write('<img height="0" width="0" border="0" src="' + url + '" />');

     }
   }
   
   
   function uts_readCookie(name) {

  var nameEQ = name + "=";

  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++)

  {

    var c = ca[i];

    while (c.charAt(0) == ' ') c = c.substring(1, c.length);

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);

  }

  return null;

}

 

if(uts_readCookie('uts_lctid')){

                var lc_val = uts_readCookie('uts_lctid');

} else {

                var lc_val = '';

};

   var LinkCData = localStorage.getCacheItem("lufLCdata"); 
        localStorage.removeItem("lufLCdata");   
   
       if(LinkCData != null){
    localStorage.clear();
    var AMT = '<c:out value="${CjpublishedFare}"/>';
    var cjPnr = '<c:out value="${cjPnr}"/>';
    var CjCouponCode = '<c:out value="${CjCouponCode}"/>';
	var CjCouponCode = '<c:out value="${CjCouponCode}"/>';
	var discount = '<c:out value="${Cjdiscounts}"/>';
	var currency = '<c:out value="${fn:toUpperCase(dollar)}"/>'
	 var QTY = '<c:out value="${CjQTY}"/>';
	 var product = 'Flight';
   if(cjPnr != 'X'){    
    var url ='//www.linkconnector.com/tm.php?lc=000000004637&';
     AMT=AMT.replace(/,/g , "");
     url += 'amt=' + AMT;
     url += '&oid=' +cjPnr;
	 url += '&lc_coupon=' +CjCouponCode;
	 url += '&lc_discount =' +discount;
	 url += '&lc_cur =' +currency; 
	 url += '&lc_pitem ='+product ;
	 url += '&lc_pqty =' +QTY;
	 url += '&lctid=' + lc_val;
       document.write('<img height="0" width="0" border="0" src="' + url + '" />');

     }
   }
   
   
 var saData = localStorage.getCacheItem("lufSAdata"); 
localStorage.removeItem("lufSAdata");   
if(saData != null){
localStorage.clear();
var QTY = '<c:out value="${CjQTY}"/>';
var AMT = '<c:out value="${CjpublishedFare}"/>';
var discount = '<c:out value="${Cjdiscounts}"/>';
var cjPnr = '<c:out value="${cjPnr}"/>';

var CjCouponCode = '<c:out value="${CjCouponCode}"/>';
if(cjPnr != 'X'){    
var url ='https://shareasale.com/sale.cfm?';
AMT=AMT.replace(/,/g , "");
url += 'amount=' + AMT;
url += '&tracking=' +cjPnr;
url += '&transtype=sale&merchantID=71605';
/* var items='AIR';
 if(discount != 0.0){    
url += '&COUPON=' + CjCouponCode;
}
 
url += '&ITEM1='+ 'AIR';
url += '&AMT1=' + AMT;
url += '&QTY1=' + QTY;

var cjtgpString= '<c:out value="${tmString}"/>';
if(cjtgpString == 'Yes'){
 var TGAMT = '<c:out value="${tggFees}"/>';
 url += '&ITEM2='+ 'AIRINSURANCE';
url += '&AMT2=' + TGAMT;
url += '&QTY2=' + QTY;
}
url += '&METHOD=IMG'; */

document.write('<img height="1" width="1"  src="' + url +
'" />');

 }
   }
</script> 

<script type="application/javascript">(function(w,d,t,r,u){w[u]=w[u]||[];w[u].push({'projectId':'10000','properties':{'pixelId':'10009940'}});var s=d.createElement(t);s.src=r;s.async=true;s.onload=s.onreadystatechange=function(){var y,rs=this.readyState,c=w[u];if(rs&&rs!="complete"&&rs!="loaded"){return}try{y=YAHOO.ywa.I13N.fireBeacon;w[u]=[];w[u].push=function(p){y([p])};y(c)}catch(e){}};var scr=d.getElementsByTagName(t)[0],par=scr.parentNode;par.insertBefore(s,scr)})(window,document,"script","https://s.yimg.com/wi/ytc.js","dotq");</script>

<script type="text/javascript" language="Javascript">
 var rkData = localStorage.getCacheItem("lufrkdata"); 
localStorage.removeItem("lufrkdata");   
if(rkData != null){
localStorage.clear();
  
var cjPnr = '<c:out value="${cjPnr}"/>';
if(cjPnr != 'X'){ 
var rm_trans = {
affiliateConfig: {ranMID: '42135', discountType: 'item'},
orderid : <c:out value="${cjPnr}"/>,
currency: '<c:out value="${fn:toUpperCase(dollar)}"/>',
customerStatus: 'New',
conversionType: 'Sale',
customerID: ' <c:out value="${cjPnr}"/>',
discountCode: '<c:out value="${CjCouponCode}"/>',
discountAmount: <c:out value="${Cjdiscounts}"/>,
taxAmount: <c:out value="${rkfeesch}"/>,
lineitems : [{
quantity : <c:out value="${CjQTY}"/>,
unitPrice : <c:out value="${singalPrice}"/>,
unitPriceLessTax: <c:out value="${singalPrice}"/>,
SKU: 'AIR',
productName: 'AIR'
}]
};  
/*Do not edit any information beneath this line*/
if(!window.DataLayer){window.DataLayer={Sale:{Basket:rm_trans}}}else{DataLayer.Sale=DataLayer.Sale||{Basket:rm_trans};DataLayer.Sale.Basket=DataLayer.Sale.Basket||rm_trans}DataLayer.Sale.Basket.Ready = true; function __readRMCookie(e){for(var a=e+"=",r=document.cookie.split(";"),t=0;t<r.length;t++){for(var n=r[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(a))return n.substring(a.length,n.length)}return""}function __readRMCookiev2(e,a){for(var r=__readRMCookie(a=a||"rmStore");r!==decodeURIComponent(r);)r=decodeURIComponent(r);for(var t=r.split("|"),n=0;n<t.length;n++){var i=t[n].split(":")[0],o=t[n].split(":")[1];if(i===e)return o}return""}function __readParam(e,a,r,t){var n=e||"",i=a||"",o=r||"",s=t||{},d=__readRMCookiev2(n),u=s[i],m=(d=s.ignoreCookie||!1?0:d)||u||o;return m=("string"!=typeof m||"false"!==m.toLowerCase())&&m}function sRAN(){var e=DataLayer&&DataLayer.Sale&&DataLayer.Sale.Basket?DataLayer.Sale.Basket:{},a=e.affiliateConfig||{},r=__readParam("atm","tagType","pixel",a),t=__readParam("adr","discountType","order",a),n=__readParam("acs","includeStatus","false",a),i=__readParam("arto","removeOrderTax","false",a),o=__readParam("artp","removeTaxFromProducts","false",a),s=__readParam("artd","removeTaxFromDiscount","false",a),d=__readParam("atr","taxRate",0,a);d=Number(d);var u=__readParam("ald","land",!1,{})||(a.land&&!0===a.land?__readRMCookie("ranLandDateTime"):a.land)||!1,m=__readParam("atrv","tr",!1,{})||(a.tr&&!0===a.tr?__readRMCookie("ranSiteID"):a.tr)||!1,l=!1,c=__readParam("amid","ranMID","",a)||e.ranMID;if(!c)return!1;if(!(void 0===a.allowCommission||"false"!==a.allowCommission))return!1;var p=e.orderid||"OrderNumberNotAvailable",f="",y="",_="",v="",N=e.currency||"";N=N.toUpperCase();var h=e.taxAmount?Math.abs(Math.round(100*Number(e.taxAmount))):0,g=e.discountAmount?Math.abs(Math.round(100*Number(e.discountAmount))):0;if(s&&d)var C=(100+Number(d))/100,g=Math.round(g/C);var b="pixel"===r?"ep":"mop"===r?"eventnvppixel":"ep",S=e.customerStatus||"",D=document.location.protocol+"//track.linksynergy.com/"+b+"?",w="";null!=S&&""!=S&&(n&&"EXISTING"==S.toUpperCase()||n&&"RETURNING"==S.toUpperCase())&&(w="R_");for(var P=[],x=0,T=0;T<(e.lineitems?e.lineitems.length:0);T++){for(var R=!1,k=window.JSON?JSON.parse(JSON.stringify(e.lineitems[T])):e.lineitems[T],L=0;L<P.length;L++)P[L].SKU===k.SKU&&(R=!0,P[L].quantity=Number(P[L].quantity)+Number(k.quantity));R||P.push(k),x+=Number(k.quantity)*Number(k.unitPriceLessTax||k.unitPrice)*100}for(T=0;T<P.length;T++){var k=P[T],I=encodeURIComponent(k.SKU),M=k.unitPriceLessTax||k.unitPrice,U=k.quantity,A=encodeURIComponent(k.productName)||"",O=Math.round(Number(M)*Number(U)*100);!o||!d||k.unitPriceLessTax&&k.unitPriceLessTax!==k.unitPrice||(O/=C=(100+d)/100),"item"===t.toLowerCase()&&g&&(O-=g*O/x),f+=w+I+"|",y+=U+"|",_+=Math.round(O)+"|",v+=w+A+"|"}f=f.slice(0,-1),y=y.slice(0,-1),_=_.slice(0,-1),v=v.slice(0,-1),g&&"order"===t.toLowerCase()?(f+="|"+w+"DISCOUNT",v+="|"+w+"DISCOUNT",y+="|0",_+="|-"+g):g&&"item"===t.toLowerCase()&&(l=!0),i&&h&&(f+="|"+w+"ORDERTAX",y+="|0",_+="|-"+h,v+="|"+w+"ORDERTAX"),D+="mid="+c+"&ord="+p+"&skulist="+f+"&qlist="+y+"&amtlist="+_+"&cur="+N+"&namelist="+v+"&img=1&",u&&(D+="land="+u+"&"),m&&(D+="tr="+m+"&"),l&&(D+="discount="+g+"&"),"&"===D[D.length-1]&&(D=D.slice(0,-1));var E,B=document.createElement("img");B.setAttribute("src",D),B.setAttribute("height","1px"),B.setAttribute("width","1px"),(E=document.getElementsByTagName("script")[0]).parentNode.insertBefore(B,E)}function sDisplay(){var e=null,a=null,r=null,t=null,n=window.DataLayer&&window.DataLayer.Sale&&window.DataLayer.Sale.Basket?window.DataLayer.Sale.Basket:{},i=n.displayConfig||{},o=n.customerStatus||"",s=n.discountAmount?Math.abs(Number(n.discountAmount)):0,d=null,u=__readParam("dmid","rdMID","",i);if(!u)return!1;var m=__readParam("dtm","tagType","js",i),l="if"===(m="js"===m||"if"===m||"img"===m?m:"js")?"iframe":"img"===m?m:"script",c="//"+__readParam("ddn","domain","tags.rd.linksynergy.com",i)+"/"+m+"/"+u,p=__readParam("dis","includeStatus","false",i),f="";if(null!=o&&""!=o&&(p&&"EXISTING"==o.toUpperCase()||p&&"RETURNING"==o.toUpperCase())&&(f="R_"),!n.orderid||!n.conversionType)return!1;r=0,a=f+n.orderid,e="",t="conv",d=n.currency;for(var y=0;y<(n.lineitems?n.lineitems.length:0);y++)r+=Number(n.lineitems[y].unitPriceLessTax)*Number(n.lineitems[y].quantity)||Number(n.lineitems[y].unitPrice)*Number(n.lineitems[y].quantity),e+=encodeURIComponent(n.lineitems[y].SKU)+",";r=Math.round(100*(r-s))/100,(e=e.slice(0,-1))&&(c=c.indexOf("?")>-1?c+"&prodID="+e:c+"/?prodID="+e),a&&(c=c.indexOf("?")>-1?c+"&orderNumber="+a:c+"/?orderNumber="+a),r&&(c=c.indexOf("?")>-1?c+"&price="+r:c+"/?price="+r),d&&(c=c.indexOf("?")>-1?c+"&cur="+d:c+"/?cur="+d),t&&(c=c.indexOf("?")>-1?c+"&pt="+t:c+"/?pt="+t);var _=document.createElement(l);_.src=c,"script"===l?_.type="text/javascript":"iframe"===l&&_.setAttribute("style","display: none;"),document.getElementsByTagName("body")[0].appendChild(_)}function sSearch(){var e=window.DataLayer&&window.DataLayer.Sale&&window.DataLayer.Sale.Basket?window.DataLayer.Sale.Basket:{},a=e.searchConfig||{},r=__readParam("smid","rsMID","",a);if(!r)return!1;var t=function(){var t=e.discountAmount?Math.abs(Number(e.discountAmount)):0,n=__readParam("sct","conversionType","conv",a),i=0,o="";if(!e.orderid)return!1;i=0,o=e.orderid;for(var s=0;s<(e.lineitems?e.lineitems.length:0);s++)i+=Number(e.lineitems[s].unitPrice)*Number(e.lineitems[s].quantity);i=Math.round(100*(i-t))/100;window.DataLayer.Sale.Basket;var d=[];d[0]="id="+r,d[1]="type="+n,d[2]="val="+i,d[3]="orderId="+o,d[4]="promoCode="+e.discountCode||"",d[5]="valueCurrency="+e.currency||"USD",d[6]="GCID=",d[7]="kw=",d[8]="product=",k_trackevent(d,"113")},n=document.location.protocol.indexOf("s")>-1?"https://":"http://";n+="113.xg4ken.com/media/getpx.php?cid="+r;var i=document.createElement("script");i.type="text/javascript",i.src=n,i.onload=t,i.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||t()},document.getElementsByTagName("head")[0].appendChild(i)}sRAN(),sDisplay(),sSearch();
}
}
</script>
<script type="text/javascript" language="Javascript">
var Clickdeadata = localStorage.getCacheItem("lufcddata");
if (Clickdeadata != null) {
localStorage.clear();
}
 var lufUtmdata = localStorage.getCacheItem("lufUtmdata");
if (lufUtmdata != null) {
localStorage.clear();
$("#affRef").val(lufUtmdata.utm_medium);
$("#affAid").val(lufUtmdata.utm_source);
$("#affPid").val(lufUtmdata.utm_campaign);
$("#affentryTime").val(lufUtmdata.land);
}
       var gwdata = localStorage.getCacheItem("lufgwdata");
if (gwdata != null) {
    localStorage.clear();
    var cjPnr = '<c:out value="${cjPnr}"/>';
    if (cjPnr != 'X') {
        $("#affRef").val(gwdata.ref);
        $("#affAid").val(gwdata.AID);
        $("#affentryTime").val(gwdata.land);
        $("#affSid").val(gwdata.CID);
        var QTY = '<c:out value="${CjQTY}"/>';
        var AMT = '<c:out value="${RkpublishedFare}"/>';
        var currentLocation = window.location;
        arr = currentLocation.toString().split('/');
        var str = arr[arr.length - 1];
        document.write("<scr" + "ipt src='https://a.qwepw.com/p.ashx?o=45116&e=5342&f=pb&r=" + str + "&t=" + cjPnr + "'></scr" + "ipt>");
    }
}
   
 var lufaddata = localStorage.getCacheItem("lufaddata"); 
localStorage.removeItem("lufaddata");   
if(lufaddata != null){
localStorage.clear();
var AID = lufaddata.AID; 

var QTY = '<c:out value="${CjQTY}"/>';
var AMT = '<c:out value="${RkpublishedFare}"/>';
var cjPnr = '<c:out value="${cjPnr}"/>';
if(cjPnr != 'X'){  
var url ='//ad.admitad.com/r?campaign_code=541240145f&action_code=1&payment_type=sale&response_type=img';
url += '&uid='+AID;
url += '&tariff_code=1';
url += '&order_id=' +cjPnr;
url += '&position_id=1&currency_code=USD&position_count=1';
url += '&price=' +AMT;
url += '&quantity=1&product_id=""';
document.write('<img src="' + url +'" width="1" height="1" alt="" />');
}
}

   
</script>
<script>(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"5666394"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");</script><noscript><img src="//bat.bing.com/action/0?ti=5666394&Ver=2" height="0" width="0" style="display:none; visibility: hidden;" /></noscript>
<%
String lookfromCity="";
String looktoCity="";
String lookdepDate="";
String lookretDate="";

int lookadult=1;
int lookchild=0;
int lookinfant=0;
int lookinfantws=0;
String lookcabin="";
String looktrip="2";
%>
<!-- Right container start here-->
<!--Modify Search Start-->
<c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
<c:set var="myfromCity" value="${search.originAirport.cityCode}"/>
<c:set var="mytoCity" value="${search.destinationAirport.cityCode}"/>
<c:set var="depart" value="${fn:split(search.travelDate,'T')}"/>
<c:set var="myAdult" value="${search.adults}"/>
<c:set var="myChild" value="${search.children}"/>
<c:set var="myInfant" value="${search.infants}"/>
<c:set var="myInfantWs" value="${search.infantWs}"/>
<c:set var="myCabin" value="${search.cabinType}"/>
<c:set var="myTrip" value="${search.tripType}"/>
<fmt:parseDate value="${depart[0]}" var="dateObject" pattern="MM-dd-yyyy" />
<fmt:formatDate pattern="MM-dd-yyyy" value="${dateObject}" var="dateObject2"/>
<c:choose>
<c:when test="${search.tripType=='2'}">
<c:set var="returns" value="${fn:split(search.returnDate,'T')}"/>
<fmt:parseDate value="${returns[0]}" var="rdateObject" pattern="MM-dd-yyyy" />
<fmt:formatDate pattern="MM-dd-yyyy" value="${rdateObject}" var="rdateObject2"/>
<%lookretDate=(String)pageContext.getAttribute("rdateObject2").toString(); %>
</c:when></c:choose>

<% lookfromCity=(String)pageContext.getAttribute("myfromCity");
looktoCity=(String)pageContext.getAttribute("mytoCity");
lookdepDate=(String)pageContext.getAttribute("dateObject2").toString();
lookadult=(Integer)pageContext.getAttribute("myAdult");
lookchild=(Integer)pageContext.getAttribute("myChild");
lookinfant=(Integer)pageContext.getAttribute("myInfant");
lookinfantws=(Integer)pageContext.getAttribute("myInfantWs");
lookcabin=(String)pageContext.getAttribute("myCabin");
looktrip=(String)pageContext.getAttribute("myTrip");
%>
</c:forEach>
<%
if (session.getAttribute("utm_source") == null) {

} else {
String utmSou=(String)session.getAttribute("utm_source");

%>

<%    
 if(utmSou.equalsIgnoreCase("IntentMedia")) {
  %>
  <script type="text/javascript">
  currentLocation = window.location;
//alert("full value : "+currentLocation);
arr = currentLocation.toString().split('/');
strFile = arr[arr.length-1];
/* Data collection tag for Intent Media */
window.IntentMediaProperties = {
/* Sample values are provided in this section. */
/* IMPORTANT: replace these with dynamic values. */
page_id: strFile,      /* Unique page identifier for each page on your site. Any nomenclature is fine. */
product_category: 'FLIGHTS',    /* Must be one of: 'HOME', 'FLIGHTS', 'CARS', 'HOTELS', 'PACKAGE', 'EMAIL' */
page_view_type: 'CONVERSION',         /* Must be one of: 'HOME', 'LIST', 'DETAILS', 'CART', 'EMAIL', 'EMAIL_CONFIRMATION', 'CONVERSION' */
user_member_id: '',        /* Non PII Unique id to identify site members if logged in or previously logged in. Leave blank if not logged in.*/
/* If conversion page, add the following dynamic values (required, along with page_view_type above with value CONVERSION) */
order_id: '<c:out  value="${cjPnr}"/>',              /* Unique order_id in transaction system to allow for de-duplications */
conversion_value: '<c:out value="${GapublishedFare}"/>',     /* Conversion value. Be sure to omit currency symbols like $ (if absolutely unavailable, use a value of '1' for all purchases). */
conversion_currency: 'USD',     /* Standard 3-letter currency code.  IMPORTANT: If you are not supplying a conversion_value, set the conversion_currency to USD. */
/* Do not modify below here */
entity_id: '240491'             /* Set by Intent Media */
};
(function() {
var script = document.createElement("script");
var prefix = document.location.protocol === 'https:' ? 'https://a' : 'http://a.cdn';
var url = prefix + '.intentmedia.net/javascripts/intent_media_data.js';
script.src = url;
document.getElementsByTagName("head")[0].appendChild(script);
}());
</script>
<%}
} %>



<%} 
request.getSession().setAttribute("SessionHit","1");%>

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
{cc_content_type:'AIR',
cc_order_id:'<c:out value="${bookingWrapper.bookingId}" />',
cc_date1:'<c:out value="${ctravelDate}" />',
cc_date2:'<c:out value="${creturnDate}" />',
cc_length_of_stay:'<c:out value="${dateDiff}" />',
cc_brand:'<c:out value="${airlineg}"/>',
cc_outbound_origin_airport:'<c:out value="${coriginAirport}"/>',
cc_outbound_destination_airport:'<c:out value="${cdestinationAirport}"/>',
cc_return_origin_airport:'<c:out value="${cdestinationAirport}"/>',
cc_return_destination_airport:'<c:out value="${coriginAirport}"/>',
cc_itinerary:'<c:out value="${flightIti}"/>',
cc_trip_type:'<c:out value="${ctripType}"/>',
cc_type:'<c:out value="${classes}"/>',
cc_trip_category:'<c:out value="${ctripCategory}"/>',
currency:'<c:out value="${dollar}"/>',
value:'<c:out value="${RkpublishedFare+MCTC+Guard+totbrb}"/>',
cc_coupon_code:'<c:out value="${bookingWrapper.couponsCode}" />',
cc_coupon_amt:'<c:out value="${bookingWrapper.couponsAmt}" />',
cc_number_of_people:'<c:out value="${CjQTY}"/>',
cc_num_adults:'<c:out value="${cadults}"/>',
cc_num_children:'<c:out value="${cchildren}"/>',
cc_num_infants:'<c:out value="${cinfants}"/>',
cc_origin_country:'<c:out value="${searchListWrapper[0].originAirport.country}" />',
cc_destination_city:'<c:out value="${searchListWrapper[0].destinationAirport.cityName}" />',
cc_destination_region:'<c:out value="${desState}" />',
cc_destination_country:'<c:out value="${searchListWrapper[0].destinationAirport.country}" />',
cc_TMP_selected:'<c:out value="${bookingWrapper.tripMate}" />',
cc_TCP_selected:'<c:out value="${bookingWrapper.macp}" />',
cc_BRB_selected:'<c:out value="${bookingWrapper.brb}" />',
cc_billing_city:'<c:out value="${bookingWrapper.payment.city}" />',
cc_billing_state:'<c:out value="${bookingWrapper.payment.state}" />',
cc_billing_country:'<c:out value="${bookingWrapper.payment.country}" />',
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