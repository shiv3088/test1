<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%> 

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
 <c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
 <fmt:parseDate value = "${search.travelDate}" var = "parsedDepartDate" pattern = "MM-dd-yyyy" />
    <fmt:parseDate value = "${search.returnDate}" var = "parsedReturnDate" pattern = "MM-dd-yyyy" />
     <c:set var="destinationCity" value="${search.destinationAirport.cityName}, ${search.destinationAirport.country}"/>
     <fmt:formatDate value="${parsedDepartDate}" var="checkInDateEng" pattern = "MM-dd-yyyy"/>
     <fmt:formatDate value="${parsedReturnDate}" var="checkOutDateEng" pattern = "MM-dd-yyyy"/>
  </c:forEach>


 <input type="hidden" id="tripMateFinal" value="0.0"/>
<input type="hidden" id="brbFinal" value="0.0"/>
<input type="hidden" id="hotelFinal" value="0.0"/>
<input type="hidden" id="carFinal" value="0.0"/>
<input type="hidden" id="pnfFinal" value="0.0"/>
<input type="hidden" id="totalPax" value="${bookingWrapper.passengerList.size()}"/>
<input type="hidden" id="carCouponAmt" value="0.00"/>
<input type="hidden" id="hotelCouponAmt" value="0.00"/>
<input type="hidden" id="carDamageFinal" value="0.0"/>
 
 <div class="addedInItinerary" id="addedInItinerary" style="display:none">
    <div>Added in Itinerary</div>
</div>

<!-- My(Flight) Itinerary -->
<div class="flight-itinerary">
    <div class="itinerary-head" id="flightInfo" onclick="infoOpen(this)">
        <div class="row">
            <div class="col-sm-10 col-xs-8">My Itinerary</div>
            <div class="col-sm-2 col-xs-4 text-right hand">
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
            <li>
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
                    <div class="col-sm-5 col-xs-5">
                        <div class="head-total">Flight Price</div>
                    </div>
                    <div class="col-sm-7 col-xs-7 text-right">
                    <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(bookingWrapper.fare.grandTotal+bookingWrapper.totlugamt) * curRsponse}" />
                        <div class="total-price"><i class="fa fa-<c:out value="${dollar}"/>" ></i> ${publishedFare}</div>
                    </div>
                </div>
            </li>
            <li>
                <div class="head">Paid with ${bookingWrapper.payment.cardCode}</div>
                <div class="type2">
                    <i class="card ${fn:toLowerCase(fn:replace(bookingWrapper.payment.cardCode,' ','-'))}"></i> ${bookingWrapper.payment.maskCardNumber}</div>
                    <!-- masterCard visaCard americanCard dinersCard discoverCard carteCard -->
            </li>
        </ul>
        </c:forEach>
    </div>
</div> 
<!-- End  My(Flight) Itinerary -->
<!-- Added Itinerary -->
<div class="added2trip-itinerary">
    <div class="itinerary-head" id="hotelInfo">
        <div class="row">
            <div class="col-sm-8">Added To Trip </div>
            <!-- <div class="col-sm-4 text-right">
                <i class="fa fa-minus"></i>
            </div> -->
        </div>
    </div><!-- Closed Head -->
    
    
    
    
    
     <!-- Added park N Fly -->

    <div class="itinerary-body flight-info" id="parkingInfoDiv">
        <ul class="itinerary-body-list" id="parkingAdded2Cart" style="display:none;">
            <li>
                <div class="head">
                    <div class="row trip-type">
                        <div class="col-xs-6">
                            <strong>PARKING</strong>
                        </div>
                        <div class="col-xs-6 text-right">
                            <a data-link="parkFlyRemove" class="removeTrip" ng-click="removePnf(selectedPnfData.LotID+'-'+selectedPnfData.ParkingTypes[0].TypeID);" href="javascript:void(0)">
                                <i class="fa fa-times"></i> Remove
                            </a>
                        </div>
                    </div>
                </div>
                <div class="type1">
                    <strong>{{selectedPnfData.LotName}} {{selectedPnfData.ParkingTypeToBook.TypeName}}</strong>
                </div>
                <div class="type2">{{selectedPnfData.Address.LotAddress1}}, {{selectedPnfData.Address.LotCity}}, {{selectedPnfData.Address.LotStateName}}, {{selectedPnfData.Address.LotPostalCode}}</div>
            </li>
            <li>
            <fmt:parseDate value="${cartBean.pnfSearch.arrivalDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  	<fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
		  		<div class="row">
                <div class="head col-xs-4 col-sm-3"><b>Arrival</b></div>
                <div class="type2 col-xs-8 col-sm-9 text-right">${sdate} at ${cartBean.pnfSearch.arrivalHour}</div>
				</div>
            </li>
            <li>
            <fmt:parseDate value="${cartBean.pnfSearch.exitDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  	<fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
			<div class="row">
                <div class="head  col-xs-4 col-sm-3"><b>Exit</b></div>
                <div class="type2  col-xs-8 col-sm-9 text-right">
                    ${sdate} at ${cartBean.pnfSearch.exitHour}
                </div>
				</div>
            </li>
            
			<li class="spacing">
                <div class="row type2">
                    <div class=" col-xs-5 col-sm-6">
                        Number of Day(s):
                    </div>
					<c:if test="${cartBean.pnfSearch.numberOfDays != 0}">
                    <div class=" col-xs-7 col-sm-6 text-right">${cartBean.pnfSearch.numberOfDays}</div>
					</c:if>
					<c:if test="${cartBean.pnfSearch.numberOfDays == 0}">
					<div class=" col-xs-7 col-sm-6 text-right">{{data.parkings.generalInfo.NumberOfDays}}</div>
					</c:if>
                </div>
            
               
            </li>
			
			<li class="spacing">
                <div class="row type2">
                    <div class=" col-xs-4 col-sm-6">
                        Parking Fee:
                    </div>
                    <div class=" col-xs-8 col-sm-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedPnfData.ParkingTypeToBook.Pricing.TotalWOTax * angularCurrency | number : 2}}</div>
                </div>
            <!--     <div class="row type2">
                    <div class="col-sm-6">
                        Coupon Discount:
                    </div>
                    <div class="col-sm-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>0.00</div>
                </div>  -->
                <div class="row type2">
                    <div class=" col-xs-4 col-sm-6">
                        Taxes & Fees:
                    </div>
                    <div class="col-sm-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedPnfData.ParkingTypeToBook.Pricing.OriginalTax * angularCurrency | number : 2}}</div>
                </div>
				
				<div class="row type2">
                    <div class="col-sm-6">
                        Booking Fee:
                    </div>
                    <div class="col-xs-8 col-sm-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedPnfData.ParkingTypeToBook.Pricing.TotalSF * angularCurrency | number : 2}}</div>
                </div>
               
            </li>
            <li class="total-bg">
                <div class="row">
                    <div class=" col-xs-5 col-sm-7">
                        <div class="head-total">Parking Total</div>
                    </div>
                    <div class=" col-xs-7 col-sm-5 text-right">
                        <div class="total-price"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedPnfData.ParkingTypeToBook.Pricing.TotalChargeAmount * angularCurrency | number : 2}}</div>  
                    </div>
                </div>
            </li>
        </ul>
    
    </div>


    <!-- End park N Fly -->
    
    <div class="itinerary-body flight-info" id="hotelInfoDiv">
        <!-- Hotel itinerary after added to trip -->
        <ul class="itinerary-body-list" id="hotelAdded2Cart" style="display:none;">
            <li>
                <div class="head">
                    <div class="row trip-type">
                        <div class="col-sm-6 col-xs-6"><strong>Hotel </strong></div>
                        <div class="col-sm-6 col-xs-6 text-right"><a data-link="hotelRemove" class="removeTrip" href="javascript:void(0)" ng-click="removeHotel(hotelDetailData.Hotel.HotelId);"><i class="fa fa-times"></i> Remove</a></div>
                    </div>
                </div>
                <div class="type2"><strong>{{hotelDetailData.Hotel.HotelName}}</strong></div>
                <div class="type2">{{hotelDetailData.Hotel.Address.CompleteAddress}}</div>
            </li>
            <li>
                <div class="head">{{hotelDetailData.Hotel.RoomToBook[0].roomFullName}} <small>Room Only</small></div>
                <div class="type2">${UserHotelSeachRequest.guest}</div>
            </li>
            <li> 
            <fmt:parseDate value="${UserHotelSeachRequest.checkInDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  	<fmt:formatDate value="${dateObject}" var="checkIndate" pattern="EEEE, MMM dd yyyy" />
		  	<fmt:parseDate value="${UserHotelSeachRequest.checkOutDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  	<fmt:formatDate value="${dateObject}" var="checkOutdate" pattern="EEEE, MMM dd yyyy" />
                <div class="type2"><strong>Check-In: </strong> ${checkIndate}</div>
                <div class="type2"><strong>Check-Out: </strong> ${checkOutdate}</div>
                <br>
                <a class="link fs12" href="" data-on-hover="{{hotelDetailData.Hotel.RoomToBook[0].cancellationPolicy}}">Cancellation Policy</a>
            </li>
            <li class="space">
            	<div class="row type2">
                    <div class="col-sm-6 col-xs-6"><strong>Number of Nights:</strong></div>
                    <div class="col-sm-6 col-xs-6 text-right">{{hotelDetailData.Hotel.RoomToBook[0].hotelFare.nightlyRate.length}}</div>
                </div>
                
                <div class="row type2">
                    <div class="col-sm-6 col-xs-6"><strong>Hotel Price:</strong></div>
                    <div class="col-sm-6 col-xs-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{hotelDetailData.Hotel.RoomToBook[0].hotelFare.nightlyRateTotal * angularCurrency | number : 2}} </div>
                </div>
                <div class="row type2" ng-if="hotelDetailData.Hotel.RoomToBook[0].hotelFare.surcharges != 'null'" ng-repeat="taxes in hotelDetailData.Hotel.RoomToBook[0].hotelFare.surcharges">
               
                    <div class="col-sm-7 col-xs-7" ng-if="taxes.amount > 0"><strong>{{taxes.type}}:</strong></div>
                    <div class="col-sm-5 col-xs-5 text-right" ng-if="taxes.amount > 0"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{taxes.amount * angularCurrency | number : 2}}</div>
                </div>
               <!--  <a class="link" href="" data-on-hover="Text On hover2">Add Promo Code</a> -->
            </li>
            <li class="total-bg">
                <div class="row">
                    <div class="col-sm-5 col-xs-5">
                        <div class="head-total">Hotel Total</div>
                    </div>
                    <div class="col-sm-7 col-xs-7 text-right">
                        <div class="total-price"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{hotelDetailData.Hotel.RoomToBook[0].hotelFare.total * angularCurrency | number : 2}}</div>
                    </div>
                </div>
            </li>
        </ul><!-- End :: Hotel itinerary after added to trip -->
        <!-- Car itinerary after added to trip -->
        <ul class="itinerary-body-list" id="carAdded2Cart" style="display:none;">
            <li>
                <div class="head">
                    <div class="row trip-type">
                        <div class="col-sm-6 col-xs-6"><strong>{{selectedCarData.CarType}} Car </strong></div>
                        <div class="col-sm-6 col-xs-6 text-right"><a data-link="carRemove" class="removeTrip" ng-click="removeCar(selectedCarData.VehicleType+'-'+selectedCarData.VendorCode);" href="javascript:void(0)"><i class="fa fa-times"></i> Remove</a></div>
                    </div>
                </div>
                <div class="type2"><strong>{{selectedCarData.CarName}} or Equivalent</strong> </div>
                <div class="type2"><strong>Vehicle Provider :</strong> 
                    <span class="vehicle-provider">
                        <strong ng-if="selectedCarData.SupplierName == 91">{{selectedCarData.VendorName}}</strong>
                        <strong ng-if="selectedCarData.SupplierName == 93">AUTO EUROPE</strong>
                    </span> 
                </div>
            </li>
            <li>
                <div class="head">Pick-up Location</div>
                <div class="type2">{{selectedCarData.RouteStationLst[0].StationName}}</div>
            </li>
            <li>
            
                <div class="head">Drop-off Location</div>
                <div class="type2">Same as Pick-up location</div>
            </li>
            <li>
            <fmt:parseDate value="${cartBean.carSearch.pickDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  	<fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
                <div class="head">Pick-up Date & Time</div>
                <div class="type2">${sdate} / ${cartBean.carSearch.pickTime}</div>
            </li>
            <li>
            <fmt:parseDate value="${cartBean.carSearch.dropDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  	<fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
                <div class="head">Drop-off Date & Time</div>
                <div class="type2">${sdate} / ${cartBean.carSearch.dropTime}</div>
            </li>
            <li class="row">
                <div class="head col-xs-6">Number of day(s)</div>
                <div class="type2 col-xs-6 text-right">{{selectedCarData.carAttribute.NumOfDays}} - days</div>
            </li>

            <li class="space">
                <div class="row type2">
                    <div class="col-sm-6 col-xs-6"><strong>Car Rental Price:</strong></div>
                    <div class="col-sm-6 col-xs-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedCarData.Pricing.BasePrice * angularCurrency | number : 2}}</div>
                </div>
                <div class="row type2">
                    <div class="col-sm-6 col-xs-6"><strong>Taxes & Fees:</strong></div>
                    <div class="col-sm-6 col-xs-6 text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedCarData.Pricing.TotalTax * angularCurrency | number : 2}}</div>
                </div>
            </li>
            <li class="total-bg">
                <div class="row">
                    <div class="col-sm-5 col-xs-5">
                        <div class="head-total">Car Total</div>
                    </div>
                    <div class="col-sm-7 col-xs-7 text-right">
                        <div class="total-price"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedCarData.Pricing.TotalChargeAmount * angularCurrency | number : 2}}</div>
                    </div>
                </div>
            </li>
            
             <li class="space" ng-if="selectedCarData.isPubCar == true">
                <div class="row type2">
                    <div class="col-xs-6">
                        <span class="red">Pay Now
                            <span class="car-pay_now"><i class="fa fa-info-circle"> </i> 
                                <div class="car-pay_now_popup"> <strong>Please note:</strong> In case you decide to cancel your car booking, please remember that the Convenience fee is non-refundable. </div>
                                  </span>

                        </span>

                    </div>
                    <div class="col-xs-6 red text-right"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedCarData.Pricing.TotalDuesToCharge * angularCurrency | number : 2}}</div>
                </div>
                <div class="row type2">
                    <div class="col-xs-6"><span class="red">Pay at Rental Desk</span></div>
                  
                    <div class="col-xs-6 text-right red"><i class="fa fa-<c:out value="${dollar}"/>" ></i>{{selectedCarData.Pricing.TotalDuesAtPickUp * angularCurrency | number : 2}}</div>
                </div>
            </li>
            
        </ul><!--End :: Car itinerary after added to trip -->
        <!-- Travel Protection itinerary after added to trip -->
        <ul class="travelProtection-body-list" id="travelProtectionAdded2Cart" style="display:none"> 
            <li>
                <div class="head">
                    <div class="row">
                        <div class="col-sm-8"><strong>Travel Protection </strong></div>
                        <div class="col-sm-4 text-right" ><a onclick="removeInsurance();" data-link="tpRemove" class="removeTrip" href="javascript:void(0)"><i class="fa fa-times"></i>Remove</a></div>
                    </div>
                </div>
            <fmt:formatNumber var="formattedTripMate" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.tripMateCost * curRsponse}" />
            <input type="hidden" id="formattedTripMate" value="${formattedTripMate}">
                <div class="head">Travel Protection Amount</div>
                <div class="type2"><i class="fa fa-<c:out value="${dollar}"/>" ></i>${formattedTripMate}</div>
            </li>
            
            <li class="total-bg">
                <div class="row">
                    <div class="col-sm-7 col-xs-7">
                        <div class="head-total">Travel Protection</div>
                    </div>
                    <div class="col-sm-5 col-xs-5 text-right">
                        <div class="total-price"><i class="fa fa-<c:out value="${dollar}"/>" ></i>${formattedTripMate}</div>
                    </div>
                </div>
            </li>
        </ul>
        
        
        <!--End :: Travel Protection itinerary after added to trip -->
        <!-- Airport Transfers itinerary after added to trip -->
        <ul class="airportTransfers-body-list" id="airportTransfersAdded2Cart" style="display:none"> 
            <li>
                <div class="head">
                    <div class="row">
                        <div class="col-sm-8"><strong>Airport Transfers </strong></div>
                        <div class="col-sm-4 text-right"><a data-link="apRemove" class="removeTrip" href="javascript:void(0)"><i class="fa fa-times"></i> Remove</a></div>
                    </div>
                </div>
            </li>
            <li>
                <div class="head">Airport Transfers Amount</div>
                <div class="type2">$15.00</div>
            </li>
            
            <li class="total-bg">
                <div class="row">
                    <div class="col-sm-7 col-xs-7">
                        <div class="head-total">Airport Transfers</div>
                    </div>
                    <div class="col-sm-5 col-xs-5 text-right">
                        <div class="total-price">$322.32</div>
                    </div>
                </div>
            </li>
        </ul><!--End :: Airport Transfers itinerary after added to trip -->
        <!-- Airport Transfers itinerary after added to trip -->
        <ul class="brb-body-list" id="brbAdded2Cart" style="display:none"> 
            <li>
                <div class="head">
                    <div class="row">
                        <div class="col-sm-8"><strong>Baggage Protection</strong></div>
                        <div class="col-sm-4 text-right" ><a onclick="removeBRB();" data-link="brbRemove" class="removeTrip" href="javascript:void(0)"><i class="fa fa-times"></i> Remove</a></div>
                    </div>
                </div>
           
                <div class="head brbProductDisplay">Gold</div>
                <div class="type2"><i class="fa fa-<c:out value="${dollar}"/>" ></i><span class="brbPriceDisplay">0.00</span></div>
                
            </li>
            
            <li class="total-bg">
                <div class="row">
                    <div class="col-sm-5 col-xs-5">
                        <div class="head-total">BRB</div>
                    </div>
                    <div class="col-sm-7 col-xs-7 text-right">
                        <div class="total-price"><i class="fa fa-<c:out value="${dollar}"/>" ></i><span class="brbPriceDisplayTotal">0.00</span></div>
                    </div>
                </div>
            </li>
        </ul><!--End :: Airport Transfers itinerary after added to trip -->
    </div>
</div> 
<!-- End :: Added Itinerary -->


<!-- Book Now and Card Summary -->
<div class="book-itinerary xlDesign">
    <div class="itinerary-body">

        <!-- Itinerary Buttons -->
        <ul class="itinerary-destination-btns"> 
         <form:form method="POST" action="/hotelSearchCross" modelAttribute="cartBean" id="searchHotelCar11"> 
         					<form:hidden path="isBrbApplied"/>
							<form:hidden path="brbProductCode"/>
							<form:hidden path="brbProductPriceCart" id="brbProductPrice"/>
                            <form:hidden path="isInsApplied"/>
                            <form:hidden path="isCarApplied"/>
                            <form:hidden path="isHotelApplied"/>
                            <form:hidden path="isPnfApplied"/>
                            <form:hidden path="isCarSelected"/>
                            <form:hidden path="isHotelSelected"/>
                            <form:hidden path="isPnfSelected"/>
                            <form:hidden path="isNewCard"/>
             <c:if test="${fn:length(topHotelResponse.hotelList) gt 0}">
            <li ng-if="hotelApplied == false" >
                <!-- <button id="hotelDisable" ng-if="hotelApplied == true"  disabled="disabled" class="btn itinerary-btn text-center">Add a Hotel</button> -->
                <button type="button" name="Hotel" onClick="return submitHotelForm('1');" class="btn itinerary-btn text-center">Add a Hotel</button>
               
            </li>
            </c:if>
            <c:if test="${fn:length(topCarResponse.carAvailability) gt 0}">
            <li ng-if="carApplied == false">
            	<!-- <button id="carDisable" ng-if="carApplied == true" disabled="disabled" class="btn itinerary-btn text-center">Add a Car</button> -->
                <button type="button" onClick="return submitCarForm('1');" class="btn itinerary-btn text-center">Add a Car</button>
            </li>
            </c:if>
            
            <c:if test="${fn:length(topParkingResponse.parkingAvailability) gt 0}"> 
            
            <li ng-if="pnfApplied == false">
                <button type="button" onClick="return submitPnfForm('0');" class="btn itinerary-btn text-center">Add a Parking</button>
            </li>
            </c:if>
            
             </form:form> 
        </ul>
        <!-- End: Itinerary Buttons -->
     
        <ul class="itinerary-body-list">
            <li>
                <div class="inputSet2 mt0 radio">
                    <label> <input class="cardSelectInput" type="radio" value="old" name="card" checked>
                        <span class="fs14">Existing card ${bookingWrapper.payment.cardCode} ${bookingWrapper.payment.maskCardNumber}</span>
                    </label>
                </div>
                <div class="inputSet2 radio">
                    <label> <input class="cardSelectInput" type="radio" value="new" name="card">
                        <span class="fs14">New Card</span>
                    </label>
                </div>
           
                <div class="row final-amount">
                    <div class="col-xs-6">
                        <div class="f-total">Total Price</div>
                    </div>
                    <div class="col-xs-6 text-right">
                        <div class="p-total"><i class="fa fa-<c:out value="${dollar}"/>" ></i><span id="finalTotalPrice">0.00</span></div>
                    </div>
                    
                </div>
            </li>
            <li>
                <div style="display:none;" class="errorBooknow" id="productError">please select any product</div>
                <button type="button" onclick="movePaymentPage();" class="btn cxl-btn-type-1 book-btn">Book Now</button>
                <div class="btn-policy hidden-xs">
                    By clicking Book Now, I agree that I have read and accepted Travelopick 
                    <a class="red" href="javascript:void(0)" name="/terms-conditions" onclick="loadBrowser(this)">Terms and Conditions</a> & 
                    <a class="red" href="javascript:void(0)" name="/privacy-policy" onclick="loadBrowser(this)">Privacy Policy</a>
                </div>
            </li>
        </ul>
        
    </div>
</div>
<!-- End Book Now and Card Summary -->

<div id="goToConf" style="display: none">
    <div class="separator"><!-- separator --></div>
    <button onclick="openConfirmation('${bookingWrapper.userSessionID}');" class="btn cxl-btn-type-1">Go To Flight Confirmation<i class="fa fa-long-arrow-right"></i></button>
</div>