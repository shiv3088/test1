<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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
<!-- Rental Hotel Overview -->
        <div class="cxl-overview-sec hotel-itinerary top-space">
<h2 class="conf-head border">
    <div class="row">
        <div class="col-xs-6 col-sm-4">Hotel Itinerary </div>
        <fmt:formatNumber var="totalHotelCost" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingHotelWrapper.rooms[0].hotelFare.total * curRsponse}" />
        <c:set var="totalHotelCostSplit" value="${fn:split(totalHotelCost.toString(),'.')}" />
        <div class="col-xs-6 col-sm-4 col-sm-push-4 text-right"><small>Total Amount</small> <i class="fa fa-<c:out value="${dollar}"/>"></i>${totalHotelCostSplit[0]}<sup>.${totalHotelCostSplit[1]}</sup></div>
        <div class="col-xs-12 col-sm-4 col-sm-pull-4 text-center"><span class="ref-no">Confirmation : ${bookingHotelWrapper.unPnr}</small></div>
    </div>
</h2>
<div class="cxl-overview-body"> 
    <div class="row">
        <div class="col-xs-6 col-sm-2 col-md-2">
            <div class="pickup hotel-img">
                <figure>
                    <img class="img-responsive" src="${bookingHotelWrapper.hotel.thumbNailUrl}"
                    onerror="imgError(this,'/resources/assets/crosssell-images/htl-no-image.jpg')"
                     />
                </figure>
            </div>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4">
                        <aside>
                        <fmt:formatNumber var="hotelRating" type="number" minFractionDigits="0" maxFractionDigits="0" value="${bookingHotelWrapper.hotel.rating*10}" />
                            <div class="pickup">${bookingHotelWrapper.hotel.hotelName} <small class="star-rating star${hotelRating}"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></small></div>
                            <div class="date"><i class="fa fa-map-marker"></i> ${bookingHotelWrapper.hotel.address.completeAddress}</div>
                        </aside>
                        <aside>
                            <div class="pickup">Reservation Details</div>
                        </aside>
                    </div>
                    <div class="col-xs-6 col-sm-3 col-md-3">
                        <aside>
                            <div class="pickup">Check in</div>
                            <c:set var="checkInDate" value="${fn:split(bookingHotelWrapper.checkInDate.toString(),'T')}" />
                            <fmt:parseDate var="checkInDateObj" type="date" dateStyle="full" value="${checkInDate[0]}" pattern="MM-dd-yyyy"/>
                            <div class="date"><fmt:formatDate type="date" dateStyle="full" value="${checkInDateObj}" pattern="MMMM dd, yyyy"/> <!-- <span class="duration">(after 02:00 PM)</span> --></div>
                        </aside>
                        <aside>
                            <div><span class="pickup"> Number of Night(s)</span> : <span class="date"> ${fn:length(bookingHotelWrapper.rooms[0].hotelFare.nightlyRate)}</span></div>
                        </aside>
                    </div>
                    <div class="col-xs-6 col-sm-3 col-md-3">
                        <aside>
                            <div class="pickup">Check out</div>
                            <c:set var="checkOutDate" value="${fn:split(bookingHotelWrapper.checkOutDate.toString(),'T')}" />
                            <fmt:parseDate var="checkOutDateObj" type="date" dateStyle="full" value="${checkOutDate[0]}" pattern="MM-dd-yyyy"/>
                            <div class="date"><fmt:formatDate type="date" dateStyle="full" value="${checkOutDateObj}" pattern="MMMM dd, yyyy"/> <!-- <span class="duration">(before 12:00 PM)</span> --></div>
                        </aside>
                        <aside>
                            <div><span class="pickup">Room(s) </span> : <span class="date">${fn:length(bookingHotelWrapper.rooms)}</span></div>
                        </aside>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="table-responsive detail-info">
                            <h4>Room(s) Details</h4>
                            <table class="table">
                                <tr>
                                    <th width="25%">Room Type</th>
                                    <th width="25%">Guest Name</th>
                                    <th width="25%">Guest(s)</th>
                                </tr>
                                <c:forEach items="${bookingHotelWrapper.rooms}" var="room" varStatus="loop">
                                <tr>
                                    <td>${room.roomFullName}</td>
                                    <td>${room.firstName} &nbsp; ${room.lastName}</td>
                                    <td>${room.adults}-Adult. ${room.children.size()}-Child</td>
                                    <%-- <td>${bookingHotelWrapper.confirmationNumbers[loop.index]}</td> --%>
                                </tr>
                                </c:forEach>
                            </table>
                        </div>
                        <div class="table-responsive detail-info">
                            <h4>Contact Details</h4>
                            <table class="table">
                                <tr>
                                    <th width="50%">Contact Number</th>
                                    <th width="50%">E-mail</th>
                                </tr>
                                <tr>
                                    <td>${bookingHotelWrapper.contact.billingPhone}</td>
                                    <td>${bookingHotelWrapper.contact.email}</td>
                                </tr>
                            </table>
                        </div>
						<%-- <c:set var="dollar" value="${fn:toLowerCase(bookingWrapper.displayCurrencyCode)}"/> --%>
                        <div class="table-responsive detail-info">
                            <h4>Hotel Price Details (USD)</h4>
                            <table class="table">
                                <tr>
                                    <td width="50%">${fn:length(bookingHotelWrapper.rooms)} X ${bookingHotelWrapper.rooms[0].roomFullName}</td>
                                    <td width="50%"><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingHotelWrapper.rooms[0].hotelFare.nightlyRateTotal * curRsponse}" /></td>
                                </tr>
                                <c:if test="${not empty bookingHotelWrapper.rooms[0].hotelFare.surcharges}">
							 <c:forEach items="${bookingHotelWrapper.rooms[0].hotelFare.surcharges}" var="surcharges" varStatus="loop" begin="${fn:length(bookingHotelWrapper.rooms[0].hotelFare.surcharges)-1}">
                                <tr>
                                    <td>${surcharges.type}</td>
                                    <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${surcharges.amount * curRsponse}" /></td>
                                </tr>
                                </c:forEach></c:if>
                                <c:if test="${bookingHotelWrapper.coupons =='Yes'}">
                                <tr>
                                    <td>Coupon Discount (${bookingHotelWrapper.couponsCode})</td>
                                    <td>-<i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingHotelWrapper.couponsAmt * curRsponse}" /></td>
                                </tr>
                                </c:if>
                                <tr>
                                    <th class="cnf-total-price">Total Cost</th>
                                    <th class="cnf-total-price"><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingHotelWrapper.rooms[0].hotelFare.total * curRsponse}" /></th>
                                </tr>
                            </table>
                             <%-- <c:if test='${bookingWrapper.displayCurrencyCode   != "USD" }'>
                            <div class="exchange-price"><i>The amount paid are in USD equivalent of ${bookingWrapper.displayCurrencyCode} ${bookingHotelWrapper.rooms[0].hotelFare.total}. Exchange rates may vary.</i></div>
                       		</c:if> --%>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="cxl-cancellation-Policy">
                                <h4>Cancellation Policy</h4>
                                <p>${bookingHotelWrapper.rooms[0].cancellationPolicy}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- End Rental Hotel Overview -->