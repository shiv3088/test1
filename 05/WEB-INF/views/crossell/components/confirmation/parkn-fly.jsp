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

<div class="cxl-overview-sec parknfly-itinerary top-space">
    <h2 class="conf-head">
        <div class="row">
            <div class="col-xs-12 col-sm-4">Parking Overview</div>
            <div class="col-xs-12 col-sm-4"><span class="ref-no">Confirmation # ${parkingBookRequest.bookingId}</span></div>
            <fmt:formatNumber var="totalPnfCost" type="number" minFractionDigits="2" maxFractionDigits="2" value="${parkingBookRequest.parkingLotToBook.parkingTypes[0].pricing.totalChargeAmount * curRsponse}"/>
            <c:set var="totalPnfCostSplit" value="${fn:split(totalPnfCost.toString(),'.')}" />
            <div class="col-xs-12 col-sm-4 text-right"><small>Total Amount</small> <i class="fa fa-<c:out value="${dollar}"/>"></i>${totalPnfCostSplit[0]}<sup>.${totalPnfCostSplit[1]}</sup></div>
        </div>
    </h2>
    <div class="cxl-overview-body">
        <div class="row">
            <div class="col-xs-6 col-sm-2  hidden">
                <div class="pickup text-center">
                    <figure>
                       <!-- <img class="img-responsive" src="/resources/images/crosssell-images/pnfly.png"> -->
                    </figure>
                </div>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-4">
                
                    <div class="pickup">${parkingBookRequest.parkingLotToBook.lotName} : ${parkingBookRequest.parkingLotToBook.parkingTypes[0].typeName}</div>
                    <div class="date">${parkingBookRequest.parkingLotToBook.address.lotAddress1}, ${parkingBookRequest.parkingLotToBook.address.lotCity}, ${parkingBookRequest.parkingLotToBook.address.lotStateName}, ${parkingBookRequest.parkingLotToBook.address.lotPostalCode}</div>
                 
                
            </div>
            <div class="col-xs-6 col-sm-4  ">
                <aside>
                    <div class="pickup">Arrival</div>
                    <fmt:parseDate value="${fn:split(parkingBookRequest.generalInfo.arrivalDate,'T')[0]}" var="parsedArrivalDate" pattern="yyyy-MM-dd" />
                    <div class="date"><fmt:formatDate type="date" value="${parsedArrivalDate}" pattern="EEE, MMMM dd, yyyy" /> at <fmt:parseDate type="time" var="parsedArrivalTime" pattern="HH:mm:ss" value="${parkingBookRequest.generalInfo.arrivalTime}" /> <fmt:formatDate type="time" value="${parsedArrivalTime}"/> </div>
                </aside>
            </div>
            <div class="col-xs-6 col-sm-4  ">
                <aside>
                    <div class="pickup">Exit</div>
                    <fmt:parseDate value="${fn:split(parkingBookRequest.generalInfo.exitDate,'T')[0]}" var="parsedExitDate" pattern="yyyy-MM-dd" />
                    <div class="date"><fmt:formatDate type="date" value="${parsedExitDate}" pattern="EEE, MMMM dd, yyyy" /> at 
					<fmt:parseDate type="time" var="parsedExitTime" pattern="HH:mm:ss" value="${parkingBookRequest.generalInfo.exitTime}" /> 
					<fmt:formatDate type="time" value="${parsedExitTime}"/>
					</div>
                </aside>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-sm-12">

                <div class="table-responsive detail-info">
                    <h4>Price Details</h4>
                    <table class="table">
                        <tbody><tr>
                            <td width="48%">Number of day(s)</td>
                            <td width="48%">${parkingBookRequest.generalInfo.numberOfDays}</td>
                        </tr>
						<tr>
                            <td>Base Fare</td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${parkingBookRequest.parkingLotToBook.parkingTypes[0].pricing.avgPrice * curRsponse}" /></td>
                        </tr>
                        <tr>
                            <td>Subtotal</td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${parkingBookRequest.parkingLotToBook.parkingTypes[0].pricing.originalRate * curRsponse}" /></td>
                        </tr>
                        <tr>
                            <td>Taxes &amp; Fees</td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${parkingBookRequest.parkingLotToBook.parkingTypes[0].pricing.originalTax * curRsponse}" /></td>
                        </tr>
						<tr>
                            <td>Booking Fee</td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${parkingBookRequest.parkingLotToBook.parkingTypes[0].pricing.totalSF * curRsponse}" /></td>
                        </tr>
                        <tr>
                            <td>Estimated Total</td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${parkingBookRequest.parkingLotToBook.parkingTypes[0].pricing.totalChargeAmount * curRsponse}" /></td>
                        </tr>
                        <tr>
                            <th class="cnf-total-price">Total Cost</th>
                            <th class="cnf-total-price"><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${parkingBookRequest.parkingLotToBook.parkingTypes[0].pricing.totalChargeAmount * curRsponse}" /></th>
                        </tr>
                    </tbody></table>
                    <%-- <c:if test='${bookingWrapper.displayCurrencyCode   != "USD" }'>
                    <div class="exchange-price"><i>The amount paid are in USD equivalent of ${bookingWrapper.displayCurrencyCode} ${carBookRequest.carReference.pricing.totalChargeAmount}. Exchange rates may vary.</i></div>
                    </c:if> --%>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-12">
                <div class="cxl-cancellation-Policy">
                        <h4>Parking Terms and Conditions</h4>                        
                        <p>* Carry the booking confirmation voucher and/or booking reference number.</p>
                        <p>* Carry the credit card used for making the booking.</p>
                        <p>* Be aware about the arrival procedure.</p>
                        <p>* Must be present at the parking check-in facility on the specified time.</p>
                        <p>* Remove possessions before parking the vehicle.</p>
                        <p>* Credit card is charged twice, once by the service provider and by once Travelopick.</p>
                        <p>* We do not accept payments in cheque.</p>
                        <p>* All cancellations must be processed through Travelopick.</p>
                        <p>* The booking fee stands non-refundable.</p>
                        <p>* Cancellations can be made up to the last hour.</p>
                        <p>* Refunds are not available for unused part stays.</p>
                        <p>* Booking can be cancelled due to various unavoidable situations.</p>
                </div>
            </div>
        </div>

        <!-- <div class="row">
            <div class="col-sm-12">
                <div class="cxl-cancellation-Policy">
                        <h4>Cancellation Policy</h4>
                        <p>Any cancellation received within 14 days prior to arrival date will incur the first night charge. Failure to arrive at your hotel or property will be treated as a No-Show and no refund will be given (Property policy). </p>
                </div>
            </div>
        </div>--> 
    </div>
</div>