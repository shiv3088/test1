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
 
<div class="cxl-overview-sec car-itinerary top-space">
    <h2 class="conf-head">
        <div class="row">
            <div class="col-xs-6 col-sm-4">Rental Car Overview</div>
            <fmt:formatNumber var="totalCarCost" type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carReference.pricing.totalChargeAmount * curRsponse}" />
             <c:set var="totalCarCostSplit" value="${fn:split(totalCarCost.toString(),'.')}" />
            <div class="col-xs-6 col-sm-4 col-sm-push-4 text-right"><small>Total Amount</small> <i class="fa fa-<c:out value="${dollar}"/>"></i>${totalCarCostSplit[0]}<sup>.${totalCarCostSplit[1]}</sup></div>
            <div class="col-xs-12 col-sm-4 col-sm-pull-4"><span class="ref-no">Confirmation : ${carBookRequest.bookingId}</small></div>
            
        </div>
    </h2>
    <div class="cxl-overview-body">
        <div class="row">
            <div class="col-xs-6 col-sm-2 col-md-2">
                <div class="pickup text-center">
                    <figure>
                        <img class="img-responsive" src="/resources/images/car-images/cars/${fn:toLowerCase(fn:replace(carBookRequest.carReference.carName,' ','-'))}.jpg" />
                    </figure>
                    <figure>
                        <img src="/resources/images/car-images/suppliers/${fn:toLowerCase(fn:replace(carBookRequest.carReference.vendorName,' ','-'))}.jpg" />
                    </figure>
                </div>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-4">
                <aside>
                    <div class="pickup">Rental Location</div>
                    <div class="date">${carBookRequest.carVendorInfo.vendorCompleteAddress}</div>
                </aside>
                <aside>
                    <div class="pickup">Car Type</div>
                    <div class="date">${carBookRequest.carReference.carType} - ${carBookRequest.carReference.carName} or Equivalent </div>
                </aside>
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3">
                <aside>
                    <div class="pickup">Pick up</div>
                    <fmt:parseDate value = "${carBookRequest.criteria.pickUpDate}" var = "parsedPickDate" pattern = "MM-dd-yyyy" />
                    <div class="date"><fmt:formatDate type = "date" value = "${parsedPickDate}" pattern = "EEE, MMMM dd, yyyy" />-${carBookRequest.criteria.pickUpTime}</div>
                </aside>
                <aside>
                    <div class="pickup">Phone Number</div>
                    <div class="date">${carBookRequest.carVendorInfo.vendorPhone}</div>
                </aside>
            </div>
            
            <div class="col-xs-6 col-sm-3 col-md-3">
                <aside>
                    <div class="pickup">Drop Off</div>
                    <fmt:parseDate value = "${carBookRequest.criteria.returnDate}" var = "parsedDropDate" pattern = "MM-dd-yyyy" />
                    <div class="date"><fmt:formatDate type = "date" value = "${parsedDropDate}" pattern = "EEE, MMMM dd, yyyy" /> -${carBookRequest.criteria.returnTime}</div>
                </aside>
                <aside>
                    <div class="pickup">Driver Name</div>
                    <div class="date">${carBookRequest.passengerRequest.firstName} &nbsp; ${carBookRequest.passengerRequest.lastName}</div>
                </aside>
            </div>
        </div>
		<%-- <c:set var="dollar" value="${fn:toLowerCase(bookingWrapper.displayCurrencyCode)}"/> --%>
        <div class="row">
            <div class="col-xs-12 col-sm-12">

                <div class="table-responsive detail-info">
                    <h4>Car Price Details (USD)</h4>
                    <table class="table">
                        <tr>
                            <td width="48%">Number of days</td>
                            <td width="48%">${carBookRequest.carReference.carAttribute.numOfDays}</td>
                        </tr>
                        <tr>
                            <td>Car Rental Price</td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carReference.pricing.basePrice * curRsponse}" /></td>
                        </tr>
                        <c:if test="${carBookRequest.carDamageGuard == 'yes' || carBookRequest.carDamageGuard == 'Yes'}">
                        <tr>
                            <td>Rental Car Protection </td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carDamageAmt * curRsponse}" /></td>
                        </tr>
                        </c:if>
                        <tr>
                            <td>Taxes & Fees</td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carReference.pricing.totalTax * curRsponse}" /></td>
                        </tr>
                        <c:if test="${carBookRequest.isCouponValid == true}">
                        <tr>
                            <td>Coupon Discount (${carBookRequest.couponsCode})</td>
                            <td>-<i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.couponsAmt * curRsponse}" /></td>
                        </tr>
                        </c:if>
                        <tr>
                            <th class="cnf-total-price">Estimated Total</th>
                            <th class="cnf-total-price"><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carReference.pricing.totalChargeAmount * curRsponse}" /></th>
                        </tr>
						<c:choose>
		            	<c:when test="${carBookRequest.carReference.isPubCar == false}">
		            	</c:when>
		            	<c:otherwise>
						<tr>
                            <td>Paid Amount</td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carReference.pricing.totalDuesToCharge * curRsponse}" /></td>
                        </tr>
						
						<tr>
                            <td>Pay at Rental-Desk</td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carReference.pricing.totalDuesAtPickUp * curRsponse}" /></td>
                        </tr>
						  </c:otherwise>
		            </c:choose>
						
                    </table>
                     <%-- <c:if test='${bookingWrapper.displayCurrencyCode   != "USD" }'>
                    <div class="exchange-price"><i>The amount paid are in USD equivalent of ${bookingWrapper.displayCurrencyCode} ${carBookRequest.carReference.pricing.totalChargeAmount}. Exchange rates may vary.</i></div>
                	</c:if> --%>
                </div>
            </div>
        </div>

         <div class="row">
            <div class="col-sm-12">
                <div class="cxl-cancellation-Policy">
                        <h4>Rental Policy</h4>
                        <p>For Detail Rental Information: <a class="red" href="/car/getrentalpolicy/${carBookRequest.session.customerSessionId}" target="_blank">${carBookRequest.carReference.vendorName} rental policy and rules information</a></p>
                </div>
            </div>
        </div>   
                      
		<c:choose>
	        <c:when test="${carBookRequest.carDamageGuard == 'yes' || carBookRequest.carDamageGuard == 'Yes'}">
			 <div class="row">
            <div class="col-sm-12">
				 <div class="car-insurancebox">

<p>Thank you for purchasing the Rental Car Protection, to view your plan documents <a href="/rental-car-protection" style="color:#ff6600" target="_blank">Click here</a></p>

</div> </div>
        </div>
			</c:when>
	     </c:choose>
        
    </div>
</div>

<!-- End Rental Car Overview -->