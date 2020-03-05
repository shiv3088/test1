<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!--Start XE -->
	    <c:choose>
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
       </c:choose>
  	<c:set var="dollar" value="${fn:toLowerCase(bookingWrapper.displayCurrencyCode)}"/>     
 <!--End XE -->

 <c:if test="${bookingWrapper.isBrbApplied ==true}">
<div class="cxl-overview-sec flight-itinerary">
    <h2 class="conf-head border">
        <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4">Baggage Protection</div>
            <div class="col-xs-12 col-sm-4 col-md-4"><span class="ref-no">Reference : ${bookingWrapper.brbServiceNumber}</small></div>
            <fmt:formatNumber var="brbFlightCost" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(bookingWrapper.infantWs+bookingWrapper.infant+bookingWrapper.child+bookingWrapper.adult)*bookingWrapper.brbProductPrice * (bookingWrapper.currencyConvertion)}" />
             <c:set var="brbFlightCostSplit" value="${fn:split(brbFlightCost.toString(),'.')}" />
            <div class="col-xs-12 col-sm-4 col-md-4 text-right"><small>Total Amount</small> <i class="fa fa-<c:out value="${dollar}"/>"></i>${brbFlightCostSplit[0]}<sup>.${brbFlightCostSplit[1]}</sup></div>
        </div>
    </h2>
</div>
<br>
</c:if>
<!-- Rental Flight Overview -->
<div class="cxl-overview-sec flight-itinerary">
    <h2 class="conf-head border">
        <div class="row">
            <div class="col-sm-4 col-xs-7">Flight Itinerary Details</div>
            <fmt:formatNumber var="totalFlightCost" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.grandTotal * bookingWrapper.currencyConvertion}" />
             <c:set var="totalFlightCostSplit" value="${fn:split(totalFlightCost.toString(),'.')}" />
            <div class="col-sm-4 col-sm-push-4 col-xs-5 text-right"><small>Total Amount</small> <i class="fa fa-<c:out value="${dollar}"/>"></i>${totalFlightCostSplit[0]}<sup>.${totalFlightCostSplit[1]}</sup></div>
            <div class="col-sm-4 col-sm-pull-4 col-xs-12"><span class="ref-no">Reference : ${bookingWrapper.bookingId}</small></div>
        </div>
    </h2>
    <div class="cxl-overview-body"> 
    	<c:forEach items="${bookingWrapper.flight.segments}" var="segment" varStatus="loop">
        <c:if test="${segment.isReturnFlight == false}">
       <c:if test="${loop.index==0}"> 
       				<c:set var="dateParts" value="${fn:replace(bookingWrapper.flight.segments[0].departureTime,'T', ' ')}" />
					<fmt:parseDate value="${dateParts}" var="departDateObject" pattern="yyyy-MM-dd HH:mm:ss" />
       <div class="flight-running"><i class="fa fa-plane"></i> Departure Flights | <fmt:formatDate type="date" value="${departDateObject }" pattern="EEE, MMM dd, yyyy"/></div>
       </c:if>
        
        <div class="row">
            <div class="col-xs-6 col-sm-1 col-md-1">
                <div class="pickup">
                    <figure>
                        <img class="img-responsive" src="/resources/images/airline/${fn:toLowerCase(segment.airline.code)}.gif" />
                    </figure>
                </div>
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3">
                <aside>
                    <div class="pickup">${segment.airline.name}</div>
                    <div class="date">Flight No: ${segment.flightCode}</div>
                    <div class="date">Class: 
					
                    <c:if test="${segment.cabinCategory != ''}">
									         <c:out value="${segment.cabinCategory}"/>-</c:if>
									<c:if test="${segment.cabinClass == '1'}">
									 Economy
									</c:if>
									<c:if test="${segment.cabinClass == '2'}">
									 Premium Economy
									</c:if>
									<c:if test="${segment.cabinClass == '3'}">
									Business
									</c:if>
									<c:if test="${segment.cabinClass == '4'}">
									 First
									</c:if>
									<c:if test="${segment.cabinClass == '6'}">
									 Standard Economy
									</c:if>
									<br/>
									Check-in Baggage - ${segment.baggage}
					
                    </div>
                    <c:if test="${segment.airline.code != segment.operatingCarrier.code}">
		    		<div class="date"> Operated By : ${segment.operatingCarrier.name}</div>
		    		</c:if>
                </aside>
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3">
                <aside>
                    <div class="pickup">${segment.originAirport.airportCode}(${segment.originAirport.cityName})</div>
                    <div class="date">${segment.originAirport.cityName}</div>
                    <c:set var="dateParts" value="${fn:replace(segment.departureTime,'T', ' ')}" />
					<fmt:parseDate value="${dateParts}" var="departDateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                    <div class="duration"><fmt:formatDate type="date" dateStyle="full" value="${departDateObject }" pattern="MM/dd/yyyy"/>
                     | <fmt:formatDate value="${departDateObject }" pattern="hh:mm" /><fmt:formatDate var="departTimeAP" value="${departDateObject}" pattern="a" />
                     <c:out value="${fn:toLowerCase(fn:substring(departTimeAP,0,1))}" />
                    </div>
                </aside>
            </div>
            <div class="hidden-xs col-sm-2 col-md-2">
                <i class="flight-icon fa fa-plane"></i>
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3">
                <aside>
                    <div class="pickup">${segment.destinationAirport.airportCode}(${segment.destinationAirport.cityName})</div>
                    <div class="date">${segment.destinationAirport.cityName}</div>
                    <c:set var="dateParts" value="${fn:replace(segment.arrivalTime,'T', ' ')}" />
                    <fmt:parseDate value="${dateParts}" var="departDateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                    <div class="duration"><fmt:formatDate type="date" dateStyle="full" value="${departDateObject }" pattern="MM/dd/yyyy"/>
                     | <fmt:formatDate value="${departDateObject }" pattern="hh:mm" /><fmt:formatDate var="departTimeAP" value="${departDateObject}" pattern="a" />
                     <c:out value="${fn:toLowerCase(fn:substring(departTimeAP,0,1))}" />
                    </div>
		  <!--  <div class="date"><strong>Seats Selected : </strong>${segment.seatNumbers}</div> -->
                </aside>
            </div>
        </div>
        </c:if>
        </c:forEach>
        <hr>
        <c:forEach items="${bookingWrapper.flight.segments}" var="segment" varStatus="loop">
        <c:if test="${segment.isReturnFlight == true}">
        <c:set var="returnIndex" value="${returnIndex+1}"/>
     <c:if test="${returnIndex==1}"> 
     				<c:set var="dateParts" value="${fn:replace(bookingWrapper.flight.segments[loop.index].departureTime,'T', ' ')}" />
					<fmt:parseDate value="${dateParts}" var="departDateObject" pattern="yyyy-MM-dd HH:mm:ss" />  
     <div class="flight-running"><i class="fa fa-plane flip"></i> Return Flights | <fmt:formatDate type="date" value="${departDateObject }" pattern="EEE, MMM dd, yyyy"/></div>
     </c:if>
        
        <div class="row">
            <div class="col-xs-6 col-sm-1 col-md-1">
                <div class="pickup">
                    <figure>
                        <img class="img-responsive" src="/resources/images/airline/${fn:toLowerCase(segment.airline.code)}.gif" />
                    </figure>
                </div>
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3">
                <aside>
                    <div class="pickup">${segment.airline.name}</div>
                    <div class="date">Flight No: ${segment.flightCode}</div>
                    <div class="date">Class: 
					
                    <c:if test="${segment.cabinCategory != ''}">
									         <c:out value="${segment.cabinCategory}"/>-</c:if>
									<c:if test="${segment.cabinClass == '1'}">
									 Economy
									</c:if>
									<c:if test="${segment.cabinClass == '2'}">
									 Premium Economy
									</c:if>
									<c:if test="${segment.cabinClass == '3'}">
									Business
									</c:if>
									<c:if test="${segment.cabinClass == '4'}">
									 First
									</c:if>
									<c:if test="${segment.cabinClass == '6'}">
									 Standard Economy
									</c:if>
									<br/>
									Check-in Baggage - ${segment.baggage}
					
                    </div>
                    <c:if test="${segment.airline.code != segment.operatingCarrier.code}">
		    		<div class="date"> Operated By : ${segment.operatingCarrier.name}</div>
		    		</c:if>	
                </aside>
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3">
                <aside>
                    <div class="pickup">${segment.originAirport.airportCode}(${segment.originAirport.cityName})</div>
                    <div class="date">${segment.originAirport.cityName}</div>
                    <c:set var="dateParts" value="${fn:replace(segment.departureTime,'T', ' ')}" />
					<fmt:parseDate value="${dateParts}" var="departDateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                    <div class="duration"><fmt:formatDate type="date" dateStyle="full" value="${departDateObject }" pattern="MM/dd/yyyy"/>
                     | <fmt:formatDate value="${departDateObject }" pattern="hh:mm" /><fmt:formatDate var="departTimeAP" value="${departDateObject}" pattern="a" />
                     <c:out value="${fn:toLowerCase(fn:substring(departTimeAP,0,1))}" />
                    </div>
                </aside>
            </div>
            <div class="col-sm-2 hidden-xs">
                <i class="flight-icon fa fa-plane"></i>
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3">
                <aside>
                    <div class="pickup">${segment.destinationAirport.airportCode}(${segment.destinationAirport.cityName})</div>
                    <div class="date">${segment.destinationAirport.cityName}</div>
                    <c:set var="dateParts" value="${fn:replace(segment.arrivalTime,'T', ' ')}" />
                    <fmt:parseDate value="${dateParts}" var="departDateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                    <div class="duration"><fmt:formatDate type="date" dateStyle="full" value="${departDateObject }" pattern="MM/dd/yyyy"/>
                     | <fmt:formatDate value="${departDateObject }" pattern="hh:mm" /><fmt:formatDate var="departTimeAP" value="${departDateObject}" pattern="a" />
                     <c:out value="${fn:toLowerCase(fn:substring(departTimeAP,0,1))}" />
                    </div>
                  <!--  <div class="date"><strong>Seats Selected : </strong>${segment.seatNumbers}</div> -->
                </aside>
            </div>
        </div>
		</c:if>
        </c:forEach>
        
        <div class="row">
            <div class="col-xs-12 col-sm-12">
                <div class="table-responsive detail-info">
                    <h4>Traveler(s) Details</h4>
                    <table class="table">
                        <tr>
                            <th width="33%">Name</th>
                            <th width="33%">Gender</th>
                            <th width="33%">Date of Birth</th>
                        </tr>
                        <c:forEach items="${bookingWrapper.passengerList}" var="pax">
                        <tr>
                            <td>${pax.firstName} &nbsp; ${pax.middleName} &nbsp;${pax.lastName}</td>
                            <c:if test="${pax.gender == 2}">
                            <td>Female</td>
                            </c:if>
                            <c:if test="${pax.gender == 1}">
                            <td>Male</td>
                            </c:if>
                            <td>${pax.dobDate}/${pax.dobMonth}/${pax.dobYear}</td>
                        </tr>
                        </c:forEach>
                    </table>
                </div>
            
                <div class="table-responsive detail-info">
                    <h4>Contact Details</h4>
                    <table class="table">
                        <tr>
                            <th width="33%">Billing Phone</th>
                            <th width="33%">Alternate Phone</th>
                            <th width="33%">E-mail</th>
                        </tr>
                        <tr>
                            <td>${bookingWrapper.contact.billingPhone}</td>
                            <td>${bookingWrapper.contact.mobile}</td>
                            <td>${bookingWrapper.contact.email}</td>
                        </tr>
                      
                    </table>
                </div>
		
                <div class="table-responsive detail-info">
                    <h4>Flight Price Details (${bookingWrapper.displayCurrencyCode})</h4>
                    <table class="table">
                        <tr>
                            <td width="33%">Adult ${bookingWrapper.adult} X <i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.adultFare * (bookingWrapper.currencyConvertion)}" /></td>
                            <td width="33%"><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.adult*bookingWrapper.fare.adultFare * (bookingWrapper.currencyConvertion)}" /></td>
			    <td></td>
                        </tr>
                        <c:if test="${bookingWrapper.child > 0 }">
                        <tr>
                            <td width="33%">Child ${bookingWrapper.child} X <i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.childFare * (bookingWrapper.currencyConvertion)}" /></td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.child*bookingWrapper.fare.childFare * (bookingWrapper.currencyConvertion)}" /></td>
                        </tr>
                        </c:if>
                        <c:if test="${bookingWrapper.infantWs > 0 }">
                        <tr>
                            <td width="33%">Infant WS ${bookingWrapper.infantWs} X <i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.infantWsFare * (bookingWrapper.currencyConvertion)}" /></td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.infantWs*bookingWrapper.fare.infantWsFare * (bookingWrapper.currencyConvertion)}" /></td>
                        </tr>
                        </c:if>
                        <c:if test="${bookingWrapper.infant > 0 }">
                        <tr>
                            <td width="33%">Infant LAP ${bookingWrapper.infant} X <i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.infantFare * (bookingWrapper.currencyConvertion)}" /></td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.infant*bookingWrapper.fare.infantFare * (bookingWrapper.currencyConvertion)}" /></td>
                        </tr>
                        </c:if>
                        <tr>
                            <td>Taxes & Fees</td>
                            <td colspan="2"><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${(bookingWrapper.fare.tax+bookingWrapper.finalSeatPrice+bookingWrapper.fare.agentFees+((bookingWrapper.fare.markup+bookingWrapper.fare.instantDiscountAmt)*(bookingWrapper.infantWs+bookingWrapper.infant+bookingWrapper.child+bookingWrapper.adult)))* bookingWrapper.currencyConvertion}" /></td>
                        </tr>
						 <fmt:formatNumber var="discount" type="number" minFractionDigits="2" maxFractionDigits="2" value="${((bookingWrapper.fare.instantDiscountAmt)*(bookingWrapper.fare.noOfAdult+bookingWrapper.fare.noOfChild+bookingWrapper.fare.noOfInfant+bookingWrapper.fare.noOfInfantWs)) * bookingWrapper.currencyConvertion}" />
					<c:if test="${discount !=0.00}">
                        <tr>
                            <td>Instant Discount</td>
                            <td colspan="2">-<i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${discount}' /></td>
                            
                        </tr>
						</c:if>
                        <c:if test="${bookingWrapper.coupons =='Yes'}">
                        <tr>
                            <td>Coupon Discount (${bookingWrapper.couponsCode})</td>
                            <td colspan="2">-<i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.couponsAmt * bookingWrapper.currencyConvertion}" /></td>
                        </tr>
                        </c:if>
                        
                        <c:if test="${bookingWrapper.macp =='Yes'}">
                        <tr>
                            <td>Travelers&rsquo; Concierge Fees</td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.macp * (bookingWrapper.currencyConvertion)}" /></td>
			    			<td><a class="red" href="tel:1-800-497-3580">( <i class="fa fa-phone"></i> 1-800-497-3580)</a></td>
                        </tr>
                        </c:if>
                        <c:if test="${bookingWrapper.isBrbApplied ==true}">
                        <tr>
                            <td>Baggage Protection Fees</td>
                            <td><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${(bookingWrapper.infantWs+bookingWrapper.infant+bookingWrapper.child+bookingWrapper.adult)*bookingWrapper.brbProductPrice * (bookingWrapper.currencyConvertion)}" /></td>
			    			<td>Reference : ${bookingWrapper.brbServiceNumber}</td> 
                        </tr>
                        </c:if>
						<c:if test="${bookingWrapper.isInsuranceApplied ==true}">
                        <tr>
                            <td>Travel Protection Fees</td>
                            <td colspan="2"><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.tripMateCost  * (bookingWrapper.currencyConvertion)}" /></td>
                        </tr>
                        </c:if>
                        <tr>
                            <th class="cnf-total-price">Total Cost</th>
                            <th colspan="2" class="cnf-total-price"><i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.grandTotal  * (bookingWrapper.currencyConvertion)}" /></th>
                        </tr>
                    </table>
                  <c:if test='${bookingWrapper.displayCurrencyCode   != "USD" }'>
                  <div class="exchange-price"><i>The amount paid are in USD equivalent of ${bookingWrapper.displayCurrencyCode} ${bookingWrapper.fare.grandTotal}. Exchange rates may vary.</i></div>
                  </c:if>  
                    
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12">
                <div class="cxl-cancellation-Policy">
                    <br>
                    <!-- <h4>Cancellation Policy</h4> -->
                    <!-- <p>Any cancellation received within 14 days prior to arrival date will incur the first night charge. Failure to arrive at your hotel or property will be treated as a No-Show and no refund will be given (Property policy). </p> -->
                    <p>
                    	<c:if test="${bookingWrapper.isInsuranceApplied ==true}">
                        <span class="violet">Thank you for purchasing the Travel Protection Plan, to view your plan documents 
                       
				       <a class="red undreline" href="/travel-insurance" target="_blank">Click here</a>
				
                        </span><br>
                        </c:if>
                        *All fares are quoted in ${bookingWrapper.displayCurrencyCode} and inclusive of base fare, taxes and all fees. Additional <a class="red undreline" onclick="window.open('/baggage-fees-info?airline=${bookingWrapper.bagAirline}', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=800,height=600, screenX=50,screenY=50')" href="javascript: void(0);" style="margin-top: 6px; text-decoration: underline;">baggage fees</a>  may apply as per the airline policies.<br>
                        
                        **1 item that fits under the seat in front of you (no access to overhead bins)<br>
                        **Not eligible for upgrades<br>
                        **No flight changes or refunds<br>
                        **Board in last group<br>
                        **You can board with 1 item like a purse or small handbag that fits under the seat in front of you and is not larger than 18 x 14 x 8 inches (45 x 35 x 20 cm). You won't have access to overhead bins.<br>
                        **All other items must be checked at ticket counters and cannot be carried on. If you take them to the gate you will pay an extra $25 gate service fee per item plus the applicable bag fee.<br>
                    </p>
                </div>
            </div>
        </div>

        <div class="row text-center">
            <div class="col-xs-6 col-sm-5 col-sm-push-1 cxl-flight-insurance">
                <img src="/resources/flight-result/images/travel.png" alt="">
                <h4><a href="/travel-insurance" target="_blank">TRAVEL INSURANCE</a></h4>
                <p>Protect yourself from the unforeseen troubles.</p>
            </div>
            <div class="col-xs-6 col-sm-5 col-sm-push-1 cxl-flight-insurance">
                <img src="/resources/flight-result/images/baggage.png" alt="">
                <h4><a href="/baggage-protection" target="_blank">SPECIAL BAGGAGE PROTECTION</a></h4>
                <p>Finds and returns, else get refund with our special baggage protection.</p>
            </div>
        </div>
    </div>
</div>
<!-- End Rental Flight Overview -->