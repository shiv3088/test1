<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

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
    
    <c:set var="curRsponse" value="1.0"/>
	<c:set var="xchangeCurrencyCode" value="USD"/>
	<c:set var="dollar" value="${fn:toLowerCase(xchangeCurrencyCode)}"/>
    
    <input type="hidden" value="${curRsponse}" id="angularCurrency" ng-model="angularCurrency"/> 
    
      
 <!--End XE -->
 <c:set var="totalPax" value="${bookingWrapper.passengerList.size()}"/>
<!-- My(Flight) Itinerary -->
<div class="flight-itinerary">
    <div class="itinerary-head" id="flightInfo" onclick="infoOpen(this)">
        <div class="row">
            <div class="col-sm-8 col-XS-8">My Itinerary</div>
            <div class="col-sm-4 col-XS-4 text-right">
                <i class="fa fa-plus"></i>
            </div>
        </div>
    </div>
    <div class="itinerary-body flight-info">
        <ul class="itinerary-body-list">
            <li>
                <div class="head">Flight Summary</div>
                <div class="booking-number">Booking Number
                    <span>#${bookingWrapper.bookingId}</span>
                </div>
            </li>
        </ul>
    </div>
    <div class="itinerary-body flight-info" id="flightInfoDiv" style="display:none">
     <c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
     <fmt:parseDate value = "${search.travelDate}" var = "parsedDepartDate" pattern = "MM-dd-yyyy" />
    <fmt:parseDate value = "${search.returnDate}" var = "parsedReturnDate" pattern = "MM-dd-yyyy" />
        <ul class="itinerary-body-list">
            <li>
                <ul class="flight-destination" style="margin-top:0"> 
                    <li>
                        <small>From</small>
                        <h2>${search.originAirport.cityCode}</h2>
                        <small>${search.originAirport.cityName}</small>
                    </li>
                    <li>
                        <c:if test="${search.tripType == 2}">
                        <i class="fa fa-exchange"></i>
                    </c:if>
                    <c:if test="${search.tripType == 1}">
                        <i class="fa fa-long-arrow-right"></i>
                    </c:if>
                    </li>
                    <li>
                        <small>To</small>
                        <h2>${search.destinationAirport.cityCode}</h2>
                        <small>${search.destinationAirport.cityName}</small> 
                    </li>
                </ul>
            </li>
            
            <c:forEach items="${bookingWrapper.flight.segments}" var="flight" varStatus="loop" >
                         <c:if test="${flight.isReturnFlight ==  false}">
                            <c:set var="departStops" value="0"/>
                            <c:if test="${loop.index == 0}">
                            <c:set var="departDateObj1" value="${fn:replace(flight.departureTime,'T',' ')}"/> 
                            <c:set var="departDateObj2" value="${fn:replace(flight.arrivalTime,'T', ' ')}"/>
                            </c:if>  
                            <c:if test="${loop.index > 0}">
                            <c:set var="departStops" value="${departStops+1}"/>
                            <c:set var="departDateObj2" value="${fn:replace(flight.arrivalTime,'T', ' ')}"/>
                            </c:if>  
             			</c:if>
             			 <c:if test="${flight.isReturnFlight ==  true}">
                            <c:set var="returnStops" value="${returnStops+1}"/>
                             <c:if test="${returnStops == 1}">
                             <c:set var="returnDateObj1" value="${fn:replace(flight.departureTime,'T', ' ')}"/> 
                             <c:set var="returnDateObj2" value="${fn:replace(flight.arrivalTime,'T', ' ')}"/>
                             </c:if>
                             <c:if test="${returnStops > 1}">
                             <c:set var="returnDateObj2" value="${fn:replace(flight.arrivalTime,'T', ' ')}"/>
                             </c:if> 
             			</c:if>
            </c:forEach>
            <fmt:parseDate value="${departDateObj1}" var="departDateTime1" pattern="yyyy-MM-dd HH:mm:ss" />
            <fmt:parseDate value="${departDateObj2}" var="departDateTime2" pattern="yyyy-MM-dd HH:mm:ss" />
            <fmt:parseDate value="${returnDateObj1}" var="returnDateTime1" pattern="yyyy-MM-dd HH:mm:ss" />
            <fmt:parseDate value="${returnDateObj2}" var="returnDateTime2" pattern="yyyy-MM-dd HH:mm:ss" />
            <li>
                <div class="head">Departing Flight</div>
                <div class="type1"><fmt:formatDate type = "date" value = "${departDateTime1}" pattern = "EEE, MMM dd, yyyy" /></div>
                <div class="type2"><fmt:formatDate value="${departDateTime1}" pattern="hh:mm a" /> - <fmt:formatDate value="${departDateTime2}" pattern="hh:mm a" /> (${departStops} stop)</div>
            </li>
            <c:if test="${search.tripType == 2}">
            <li>
                <div class="head">Returning Flight</div>
                <div class="type1"><fmt:formatDate type = "date" value = "${returnDateTime1}" pattern = "EEE, MMM dd, yyyy" /></div>
                <div class="type2"><fmt:formatDate value="${returnDateTime1}" pattern="hh:mm a" /> - <fmt:formatDate value="${returnDateTime2}" pattern="hh:mm a" /> (${returnStops-1} stop)</div>
            </li>
            </c:if>
            <li>
                <div class="head">Trip Type</div>
                <c:if test="${search.tripType == 2}">
                <div class="type1">Round Trip</div>
                </c:if>
                <c:if test="${search.tripType == 1}">
                <div class="type1">One Way</div>
                </c:if>
            </li>
            <li class="total-bg">
                <div class="row">
                    <div class="col-xs-5">
                        <div class="head-total">Flight Price</div>
                    </div>
                    <div class="col-xs-7 text-right">
                    <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.grandTotal * curRsponse}" />
                        <div class="total-price"><i class="fa fa-<c:out value="${dollar}"/>" ></i> ${publishedFare}</div>
                    </div>
                </div>
            </li>
            <li>
                <div class="head">Paid with ${bookingWrapper.payment.cardCode}</div>
                <div class="type2">
                   <i class="card ${fn:toLowerCase(fn:replace(bookingWrapper.payment.cardCode,' ','-'))}"></i> ${bookingWrapper.payment.maskCardNumber}</div>
            </li>
        </ul>
        </c:forEach>
    </div>
</div> 
<!-- End  My(Flight) Itinerary -->
<!-- Added Itinerary -->
<div class="added2trip-itinerary">
    <div class="itinerary-head">
        <div class="row">
            <div class="col-sm-8">Added To Trip</div>
        </div>
    </div><!-- Closed Head -->





    <!--  -->

    <!-- Added park N Fly -->

    <div class="itinerary-body flight-info">
        <ul class="itinerary-body-list" id="parkingAdded2Cart" style="display:none;">
            <li>
                <div class="head">
                    <div class="row trip-type">
                        <div class="col-sm-6">
                            <strong>PARKING </strong>
                        </div>
                        
                    </div>
                </div>
                <div class="type1">
                    <strong>{{selectedPnfData.LotName}} {{selectedPnfData.ParkingTypeToBook.TypeName}}</strong>
                </div>
                <div class="type2">{{selectedPnfData.Address.LotAddress1}}, {{selectedPnfData.Address.LotCity}}, {{selectedPnfData.Address.LotStateName}}, {{selectedPnfData.Address.LotPostalCode}}</div>
            </li>
            <li>
			<div class="row">
                <div class="head col-sm-3"><b>Arrival</b></div>
                <fmt:parseDate value="${cartBean.pnfSearch.arrivalDate}" var="dateObject1" pattern="MM-dd-yyyy" />
		  		<fmt:formatDate value="${dateObject1}" var="sdate" pattern="EEE, MMM dd yyyy" />
                <div class="type2 col-sm-9 text-right">${sdate} at
				<fmt:parseDate type="time" var="parsedArrivalTime" pattern="HH:mm" value="${cartBean.pnfSearch.arrivalHour}" /> 
					<fmt:formatDate type="time" value="${parsedArrivalTime}"/>		
			
				
				</div>
				</div>
            </li>
            <li>
			<div class="row">
                <div class="head col-sm-3"><b>Exit</b></div>
                <div class="type2 col-sm-9 text-right">
                <fmt:parseDate value="${cartBean.pnfSearch.exitDate}" var="dateObject2" pattern="MM-dd-yyyy" />
		  		<fmt:formatDate value="${dateObject2}" var="sdate" pattern="EEE, MMM dd yyyy" />
                   ${sdate} at 
				   <fmt:parseDate type="time" var="parsedExitTime" pattern="HH:mm" value="${cartBean.pnfSearch.exitHour}" /> 
					<fmt:formatDate type="time" value="${parsedExitTime}"/>
				   
                </div>
				</div>
            </li>
			<li class="spacing">
                <div class="row type2">
                    <div class="col-sm-6">
                        Number of Day(s):
                    </div>
                    <div class="col-sm-6 text-right">${cartBean.pnfSearch.numberOfDays}</div>
                </div>
               
            </li>
			
            <li class="spacing">
                <div class="row type2">
                    <div class="col-sm-6">
                        Parking Fee:
                    </div>
                    <div class="col-sm-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedPnfData.ParkingTypeToBook.Pricing.OriginalRate * angularCurrency | number : 2}}</div>
                </div>
                <!-- <div class="row type2">
                    <div class="col-sm-6">
                        Coupon Discount:
                    </div>
                    <div class="col-sm-6 text-right">$0.00</div>
                </div> -->
                <div class="row type2">
                    <div class="col-sm-6">
                        Taxes & Fees:
                    </div>
                    <div class="col-sm-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedPnfData.ParkingTypeToBook.Pricing.OriginalTax * angularCurrency | number : 2}}</div>
                </div>
				
				<div class="row type2">
                    <div class="col-sm-6">
                        Booking Fee:
                    </div>
                    <div class="col-sm-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedPnfData.ParkingTypeToBook.Pricing.TotalSF * angularCurrency | number : 2}}</div>
                </div>
               
                <!-- <a class="link" href="javascript:void(0)"><u>Add Promo Code</u></a>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" type="button">Apply</button>
                    </span>
                </div> -->
            </li>
            <li class="total-bg">
                <div class="row">
                    <div class="col-sm-7">
                        <div class="head-total">Parking Total</div>
                    </div>
                    <div class="col-sm-5 text-right">
                        <div class="total-price"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedPnfData.ParkingTypeToBook.Pricing.TotalChargeAmount * angularCurrency | number : 2}}</div>
                    </div>
                </div>
            </li>
        </ul>
    
    </div>


    <!--  -->




    <div class="itinerary-body flight-info">
        <ul class="itinerary-body-list" id="hotelAdded2Cart" style="display:none;">
            <li>
                <div class="head">
                    <div class="row trip-type">
                        <div class="col-xs-12"><strong>Hotel </strong></div>
                    </div>
                </div>
                <div class="type2"><strong>{{selectedHotelData.Hotel.HotelName}}</strong></div>
                <div class="type2">{{selectedHotelData.Hotel.Address.CompleteAddress}}</div>
            </li>
            <li>
                <div class="head">{{selectedHotelData.Hotel.RoomToBook[0].roomFullName}} <small>Room Only</small></div>
                <div class="type2">${UserHotelSeachRequest.guest}</div>
            </li>
            <fmt:parseDate value="${UserHotelSeachRequest.checkInDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  	<fmt:formatDate value="${dateObject}" var="checkIndate" pattern="EEEE, MMM dd yyyy" />
		  	<fmt:parseDate value="${UserHotelSeachRequest.checkOutDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  	<fmt:formatDate value="${dateObject}" var="checkOutdate" pattern="EEEE, MMM dd yyyy" />
            <li>
                <div class="type2"><strong>Check-In: </strong> ${checkIndate}</div>
                <div class="type2"><strong>Check-Out: </strong>${checkOutdate}</div>
                <br>
                <a class="link fs12" href="" data-on-hover="{{selectedHotelData.Hotel.RoomToBook[0].cancellationPolicy}}">Cancellation Policy</a>
            </li>
            <li>
            
            <div class="row type2">
                    <div class="col-sm-6 col-xs-6"><strong>Number of Nights:</strong></div>
                    <div class="col-sm-6 col-xs-6 text-right">{{selectedHotelData.Hotel.RoomToBook[0].hotelFare.nightlyRate.length}}</div>
                </div>
                
                <div class="row type2">
                    <div class="col-xs-6"><strong>Hotel Price:</strong></div>
                    <div class="col-xs-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedHotelData.Hotel.RoomToBook[0].hotelFare.nightlyRateTotal * angularCurrency | number : 2}}</div>
                </div>
                <div class="row type2" ng-if="selectedHotelData.Hotel.RoomToBook[0].hotelFare.surcharges != 'null'" ng-repeat="taxes in selectedHotelData.Hotel.RoomToBook[0].hotelFare.surcharges">
                    <div class="col-xs-6" ng-if="taxes.amount > 0"><strong>{{taxes.type}}:</strong></div>
                    <div class="col-xs-6 text-right" ng-if="taxes.amount > 0"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{taxes.amount * angularCurrency | number : 2}}</div>
                </div>
                
                <div class="row type2" id="couponDisplayHotel" style="display:none;">
                    <div class="col-xs-6">Coupon Amount:</div>
                    <div class="col-xs-6 text-right"> - <i class="fa fa-<c:out value="${dollar}"/>" ></i>{{hotelCouponAmount * angularCurrency | number : 2}}</div>
                </div>
                <br>
                <div class="head cursor" id="showHotelCouponLink"><u>Add Promo Code</u></div>
                 <div class="input-group" id="showHotelCouponDiv" style="display:none;">
                    <input type="text" class="form-control" ng-model="selectedCouponsHotel" placeholder="enter coupon code">
                    <span class="input-group-btn">
                        <button ng-click="checkCouponsHotel();" class="btn add-promo-btn" type="button">{{subscribeHotelButton}}</button>
                    </span>
                </div> 
                <div id="couponMessageHotel"></div>
            </li>
            <li class="total-bg">
                <div class="row">
                    <div class="col-xs-5">
                        <div class="head-total">Hotel Total:</div>
                    </div>
                    <div class="col-xs-7 text-right">
                        <div class="total-price" id="hotelFinalTotal"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedHotelData.Hotel.RoomToBook[0].hotelFare.total * angularCurrency | number : 2}}</div>
                    </div>
                </div>
            </li>
        </ul><!-- End :: Hotel itinerary after added to trip -->
        <!-- Car itinerary after added to trip -->
        <ul class="itinerary-body-list" id="carAdded2Cart" style="display:none;">
            <li>
                <div class="head">
                    <div class="row trip-type">
                        <div class="col-xs-12">
                            <strong>{{selectedCarData.CarType}} Car </strong>
                        </div>
                    </div>
                </div>
                <div class="type2">
                    <strong>{{selectedCarData.CarName}} or Equivalent</strong>
                </div>
                <div class="type2">
                    <strong>Vehicle Provider :</strong>
                    <span class="vehicle-provider">
                        <span class="vehicle-provider">
                            <strong ng-if="selectedCarData.SupplierName == 91">{{selectedCarData.VendorName}}</strong>
                            <strong ng-if="selectedCarData.SupplierName == 93">AUTO EUROPE</strong>
                        </span>
                    </span>
                   
                </div>
            </li>
            <li>
                <span class="head">Pick-up Location</span>
                <span class="type2">{{selectedCarData.RouteStationLst[0].StationName}}</span>
            </li>
            <li>
                <div class="head">Drop-off Location</div>
                <div class="type2">Same as Pick-up location</div>
            </li> 
            <li>
            <fmt:parseDate value="${cartBean.carSearch.pickDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  	<fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
                <div class="head">Pick-up Date & Time</div>
                <div class="type2"> ${sdate} / ${cartBean.carSearch.pickTime}</div>
            </li>
            <li>
            <fmt:parseDate value="${cartBean.carSearch.dropDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  	<fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
                <div class="head">Drop-off Date & Time</div>
                <div class="type2">${sdate} / ${cartBean.carSearch.dropTime}</div>
            </li>
            <li class="row">
                <div class="head col-xs-6">Number of day(s)</div>
                <div class="type2 col-xs-6">${carBookRequest.carReference.carAttribute.numOfDays} Days</div>
            </li>
            <li class="space">
                <div class="row type2">
                    <div class="col-xs-6">
                            Car Rental Price:
                    </div>
                    <fmt:formatNumber var="carPrice" type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carReference.pricing.basePrice * curRsponse}" />
                    <div class="col-xs-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>${carPrice}</div>
                </div>

                <div class="row type2" id="crItineraryProtection" style="display: none;">
                    <div class="col-xs-6">
                        Rental Car Protection:
                    </div>
		   
                    <fmt:formatNumber var="carDamageAmt" type="number" minFractionDigits="2" maxFractionDigits="2" value="${dayDiffInsFinal*carBookRequest.carDamageAmt * curRsponse}" />
                    <div class="col-xs-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>${carDamageAmt}</div>
                </div>

                <div class="row type2">
                    <div class="col-xs-6">Taxes & Fees:</div>
                    <fmt:formatNumber var="carTax" type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carReference.pricing.totalTax * curRsponse}" />
                    <div class="col-xs-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>${carTax}</div>
                </div>
                <div class="row type2" id="couponDisplayCar" style="display:none;">
                    <div class="col-xs-6">Coupon Amount:</div>
                    <div class="col-xs-6 text-right"> - <i class="fa fa-<c:out value="${dollar}"/>" ></i>{{carCouponAmount * angularCurrency | number : 2}}</div>
                </div>
                <br>
                <div class="head cursor" id="showCarCouponLink"><u>Add Promo Code</u></div>
                 <div class="input-group" id="showCarCouponDiv" style="display:none;">
                    <input type="text" class="form-control" ng-model="selectedCouponsCar" placeholder="enter coupon code">
                    <span class="input-group-btn">
                        <button ng-click="checkCouponsCar();" class="btn add-promo-btn" type="button">{{subscribeCarButton}}</button>
                    </span>
                </div> 
                <div id="couponMessagecar"></div>
                
            </li>
            <li class="total-bg">
                <div class="row">
                    <div class="col-xs-5">
                        <div class="head-total">Car Total:</div>
                    </div>
                    <div class="col-xs-7 text-right">
                    	<fmt:formatNumber var="carTotal" type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carReference.pricing.totalChargeAmount * curRsponse}" />
                        <div class="total-price" id="carFinalTotal"><i class="fa fa-<c:out value="${dollar}"/>" ></i>${carTotal}</div>
                    </div>
                </div>
            </li>
            <c:if test="${carBookRequest.carReference.isPubCar == true}">
            <li class="space">
                <div class="row type2">
                    <div class="col-xs-6">
                        <!--<a class="link" href="javascript:void(0)" data-on-hover="In case you decide to cancel your car booking, please remember that the Convenience fee is non-refundable.">Pay Now
                            <i class="fa fa-info-circle"></i>
                        </a>-->
						<span class="red">Pay now	                    	
	                    	<span class="car-pay_now"><i class="fa fa-info-circle"> </i> 
                                <div class="car-pay_now_popup"> <strong>Please note:</strong> In case you decide to cancel your car booking, please remember that the Convenience fee is non-refundable. </div>
                            </span>
	                    </span>
                    </div>
                    <fmt:formatNumber var="carPayNow" type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carReference.pricing.totalDuesToCharge * curRsponse}" />
                    <input type="hidden" id="carPayNowHidden" value="${carPayNow}"/>
                    <div class="col-xs-6 text-right" id="carPayNow"><i class="fa fa-<c:out value="${dollar}"/>" ></i>${carPayNow}</div>
                </div>
                <div class="row type2">
                    <div class="col-xs-6"><span class="red">Pay at Rental Desk</span></div>
                    <fmt:formatNumber var="carPayLater" type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carReference.pricing.totalDuesAtPickUp * curRsponse}" />
                    <div class="col-xs-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>${carPayLater}</div>
                </div>
            </li>
			</c:if>
        </ul><!--End :: Car itinerary after added to trip -->
        <!-- Travel Protection itinerary after added to trip -->
        <c:if test="${cartBean.isInsApplied == true }">
        <ul class="travelProtection-body-list" id="travelProtectionAdded2Cart"> 
            <li>
                <div class="head">
                    <div class="row">
                        <div class="col-xs-8"><strong>Travel Protection </strong></div>
                        <!-- <div class="col-xs-4 text-right" ><a data-link="tpRemove" class="removeTrip" href="javascript:void(0)"><small>Remove</small></a></div> -->
                    </div>
                </div>
            <fmt:formatNumber var="formattedTripMate" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.tripMateCost * curRsponse}" />
            <input type="hidden" id="formattedTripMate" value="${formattedTripMate}">
                <div class="head">Travel Protection Amount</div>
                <div class="type2"><i class="fa fa-<c:out value="${dollar}"/>" ></i>${formattedTripMate}</div>
            </li>
            
            <li class="total-bg">
                <div class="row">
                    <div class="col-sm-7">
                        <div class="head-total">Travel Protection:</div>
                    </div>
                    <div class="col-sm-5 text-right">
                        <div class="total-price"><i class="fa fa-<c:out value="${dollar}"/>" ></i>${formattedTripMate}</div>
                    </div>
                </div>
            </li>
        </ul><!--End :: Travel Protection itinerary after added to trip -->
        <!-- Airport Transfers itinerary after added to trip -->
        <input type="hidden" id="tripMateFinal" value="${formattedTripMate}"/>
        </c:if>
         <c:if test="${cartBean.isInsApplied == false }">
         <input type="hidden" id="tripMateFinal" value="0.00"/>
         </c:if>
        <ul class="airportTransfers-body-list" id="airportTransfersAdded2Cart" style="display:none"> 
            <li>
                <div class="head">
                    <div class="row">
                        <div class="col-sm-8"><strong>Airport Transfers </strong></div>
                    </div>
                </div>
            </li>
            <li>
                <div class="head">Airport Transfers Amount</div>
                <div class="type2">$15.00</div>
            </li>
            
            <li class="total-bg">
                <div class="row">
                    <div class="col-sm-7">
                        <div class="head-total">Airport Transfers:</div>
                    </div>
                    <div class="col-sm-5 text-right">
                        <div class="total-price">$322.32</div>
                    </div>
                </div>
            </li>
        </ul><!--End :: Airport Transfers itinerary after added to trip -->
        <!-- Airport Transfers itinerary after added to trip -->
        <c:if test="${cartBean.isBrbApplied == true }">
        <ul class="brb-body-list" id="brbAdded2Cart"> 
            <li>
                <div class="head">
                    <div class="row">
                        <div class="col-sm-8"><strong>Baggage Protection</strong></div>
                       <!--  <div class="col-sm-4 text-right" ><a data-link="brbRemove" class="removeTrip" href="javascript:void(0)"><small>Remove</small></a></div> -->
                    </div>
                </div>
           
                <div class="head brbProductDisplay">${cartBean.brbProductCode}</div>
                <div class="type2"><i class="fa fa-<c:out value="${dollar}"/>" ></i><span class="brbPriceDisplay">${cartBean.brbProductPriceCart}</span></div>
            </li>
            
            <li class="total-bg">
                <div class="row">
                    <div class="col-sm-5">
                        <div class="head-total">BRB</div>
                    </div>
                    <div class="col-sm-7 text-right">
                        <div class="total-price"><i class="fa fa-<c:out value="${dollar}"/>" ></i><span class="brbPriceDisplayTotal">${cartBean.brbProductPriceCart*totalPax}</span></div>
                    </div>
                </div>
            </li>
        </ul><!--End :: Airport Transfers itinerary after added to trip -->
        <input type="hidden" id="brbFinal" value="${cartBean.brbProductPriceCart*totalPax}"/>
        </c:if>
        <c:if test="${cartBean.isBrbApplied == false }">
        <input type="hidden" id="brbFinal" value="0.00"/>
        </c:if>
    </div>
</div> 
<!-- End :: Added Itinerary -->



<!-- Book Now and Card Summary -->
<div class="book-itinerary">
    <div class="itinerary-body bdr-top">
        <ul class="itinerary-body-list total-amount-trip">
            <li>
                <div class="row final-amount">
                    <div class="col-xs-6">
                        <div class="f-total">Total Price</div>
                    </div>
                    <div class="col-xs-6 text-right">
                        <div class="p-total"><i class="fa fa-<c:out value="${dollar}"/>" ></i><span id="finalTotalPrice">0.00</span></div>
                    </div>
                </div>
            </li>
        </ul>
        
    </div>
</div>
<div class="top-caption">
    Note: All Fares displayed are quoted in USD and inclusive of base fare, taxes and all fees. 
</div>
<!-- End Book Now and Card Summary -->
