<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<html lang="en" class="no-js" ng-app="carResultApp"> <!--<![endif]-->

<head> 
	<jsp:include page="components/header/theme.jsp" />  
	<script src="/resources/js/angular.js"></script>
	<script src="/resources/js/crossell/car-result.js"></script> 
	<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
	<script>
	    function goBack() {
			//window.history.back();
            window.location.href = document.referrer;
            console.log(window.location.href);
		}
		function imgError(img,srcc) {
	            img.error="";
	            img.src=srcc;
	        }
	</script>
	
</head>

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
<input type="hidden" value="${curRsponse}" id="angularCurrency" ng-model="angularCurrency"/>    
<!--End XE -->
<body class="body-wrapper" ng-controller="carResultController" id="carResultController">
<input type="hidden" id="carId" value="${carId}">
<input type="hidden" value="${cartBean.hotelDetailRes}" id="selectedHotel">
<input type="hidden" value="${cartBean.carReference}" id="selectedCar">
<input type="hidden" value="${cartBean.parkingLot}" id="selectedPnf">
<jsp:include page="components/header/navigation.jsp" />


<input type="hidden" value="${selectedVendorCode}" ng-model="selectedVendorCode" id="selectedVendorCode" />
<input type="hidden" value="${selectedVehicleType}" ng-model="selectedVehicleType" id="selectedVehicleType" />
<!--Start: Search Engine -->
<div class="carSearhEngine ">
<div class="container">
    <!-- <div class="container"> -->
        <div class="row cr-result-details">
                <div class="col-sm-2 col-xs-6">
                        <button class="btn goBackFromResult" onclick="goBack();"> <i class="fa fa-angle-double-left"></i> Go Back </button>
                    </div>
            <div class="col-sm-8 col-xs-12 hidden-xs">
                <ul class="list-inline cr-result-list">
                    <li>
                        <span class="data2">Pickup Location - </span>
                        <span class="data1"> ${cartBean.carSearch.pickLocation} </span>
                    </li> 
                    <li>
                        <span class="data2">Pickup Date - </span>
                        <span class="data1"> ${cartBean.carSearch.pickDate} </span>
                    </li> 
                    <li>
                        <span class="data2">Time - </span>
                        <span class="data1"> ${cartBean.carSearch.pickTime} </span>
                    </li> 
                    <li>
                        <span class="data2">Dropoff Date - </span>
                        <span class="data1"> ${cartBean.carSearch.dropDate} </span> 
                    </li> 
                    <li>
                        <span class="data2">Time - </span>
                        <span class="data1"> ${cartBean.carSearch.dropTime} </span> 
                    </li> 
                    <li>
                        <span class="data2"> Driver Age - </span>
                        <span class="data1"> ${cartBean.carSearch.driverAge} </span>
                    </li>
                </ul>
            </div>
            
            <div class="col-sm-2 col-xs-6 text-center">
                <button type="button" id="crModifySearchBtn" class="btn cr-btn-link">Modify Search</button>
            </div>
        </div>
        <form:form modelAttribute="cartBean" method="POST" id="searchHotelCar">
        <form:hidden path="isNewCard" />
            <div id="crModifySearchDiv" style="display:none;">
                <div class="row cr-destination-search">
                    <div class="col-lg-4 col-md-3 col-sm-6 col-xs-12" id="pickUpLocation">
                        <div class="form-group cffFormIcon">
                            <i class="icon fa fa-map-marker" aria-hidden="true"></i>
                            <form:input path="carSearch.pickLocation" id="pickLocation" class="form-control" placeholder="Pick-up" onfocus="this.select();" />
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-6">
                        <div class="form-group cffFormIcon">
                            <i class="icon fa fa-calendar" aria-hidden="true"></i>
                            <form:input path="carSearch.pickDate" id="pickDate" class="form-control"  placeholder="Pick-up Date"  readonly="true" />
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                        <div class="form-group arrow"> 
                            <form:select path="carSearch.pickTime" id="pickTime" items="${carTime}" class="form-control">
                            </form:select>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-6">
                        <div class="form-group cffFormIcon">
                            <i class="icon fa fa-calendar" aria-hidden="true"></i>
                            <form:input path="carSearch.dropDate" id="dropDate" class="form-control"  placeholder="Drop-off Date"  readonly="true" />
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                        <div class="form-group arrow">
                            <form:select path="carSearch.dropTime" id="dropTime" items="${carTime}" class="form-control"></form:select> 
                        </div>
                    </div>
                    
                    <div class="col-md-1 col-sm-3 col-xs-6">
                        <div class="form-group arrow">
                            <form:select path="carSearch.driverAge" items="${dAge}" class="form-control"></form:select>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-2 col-sm-3 col-xs-12">
                        <div class="form-group"> <!-- Button Desktop -->
                        <button class="form-control btn car-button" type="button" onClick="return submitCarForm('0')">Submit <i class="fa fa-angle-double-right"></i></button>
                        </div>
                    </div>
                </div>
                <div class="row hide">
                    <div class="col-sm-6 hidden-xs">
                        <div class="form-group">
                            <span class="cr-link customeCb pickUpDate"><label class="checkbox-inline"><input class="dropOff" type="checkbox"><span>Need a different drop-off location ?</span></label></span>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xs-12 text-right">
                        <div class="form-group">
                            <span class="cr-link advanceOptLink">Advanced Options <i class="fa fa-angle-down"></i></span>
                        </div>
                    </div>
                </div>
                <div class="row" id="advanceOpt" style="display:none;">
                    <div class="col-xs-6 col-sm-2 col-sm-push-8">
                        <div class="form-group arrow">
                            <form:select path="carSearch.vendorCode" items="${vendorCode}"  class="form-control" id="vendorCode" />
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-2 col-sm-push-8">
                        <div class="form-group arrow">
                            <form:select path="carSearch.vehicleType" items="${vehicleType}" class="form-control" id="vehicleType" />
                        </div>
                    </div>
                </div>
                
            </div>
            <form:input type="hidden" path="carSearch.pickUpLocationID" id="pickUpLocationID"  />
            <form:input type="hidden" path="carSearch.pickUpLocationCode" id="pickUpLocationCode"  />
        </form:form>
    <!-- </div> -->
</div>
</div>
<!--End : Search Engine -->

<div class="container" ng-hide="IsHidden" style="display:none;" id="carContainer">
    <div class="row">
        <!--Start Left side section -->
        <div id="carLeftContainer" class="col-xs-12 col-sm-12 col-lg-2 hidden-xs hidden-sm hidden-md">
            <div class="carLeftCtrl">
               
                <!--Start Box Payment options -->
                <div class="boxSec effect2" id="carPaymentOpt" ng-if="carPaymentOption[0]['Pay Now'] != 0">
                    <ul class="list-group">
                        <li class="list-group-item active">Payment options</li>
                        <li class="list-group-item crBorder customeCb" ng-if="carPaymentOption[0]['Pay Now'] > 0">
                            <label class="checkbox-inline">
                                <input type="checkbox" ng-model="carPaymentOptionChecked[93]">
                                <span>Pay Now ({{carPaymentOption[0]['Pay Now']}})</span>
                            </label>
                        </li>
                        <li class="list-group-item crBorder customeCb" ng-if="carPaymentOption[0]['Pay Later'] > 0">
                            <label class="checkbox-inline">
                                <input type="checkbox" ng-model="carPaymentOptionChecked[91]">
                                <span>Pay Later ({{carPaymentOption[0]['Pay Later']}})</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <!--End Box Payment options -->
                
                <!--Start Box Supplier -->
                <div class="boxSec">
                    <ul class="list-group">
                        <li class="list-group-item active">Supplier</li>
                        <li class="list-group-item crBorder customeCb" ng-repeat="supplier in carSuppliersArrFinal | orderBy: 'name' | limitTo:loadCarSupplier">
                            <label class="checkbox-inline">
                            <input type="checkbox" ng-model="carVendorChecked[supplier.name]">
                            <span>{{supplier.name | capitalize}}</span> <i class="cxl-badge pull-right text-center">{{supplier.count}}</i>
                            </label>
                        </li>
                        <!--  ng-show="loadCarSupplier < 9 || loadCarSupplier==0", ng-click="loadItemCarSupplier()" -->
                        <li class="list-group-item crBorder customeCb" ng-show="loadCarSupplier < 9 || loadCarSupplier==0", ng-click="loadItemCarSupplier()">
                        <a class="red" href="javascript:void(0)">{{carSupplierShowValue}}</a>
                        </li>
                    </ul>
                </div>
                <!--End Box Supplier -->
                <!--Start Box Car Type -->
                <div class="boxSec">
                    <ul class="list-group">
                        <li class="list-group-item active">Car Type</li>
                        <li class="list-group-item crBorder customeCb" ng-repeat="category in carCategoryArrFinal | orderBy: 'name' | limitTo: loadCarType">
                            <label class="checkbox-inline"><input type="checkbox" ng-model="carTypeChecked[category.name]">
                                <span>{{getCap(category.name)}}</span> <i class="cxl-badge pull-right text-center">{{category.count}}</i>
                            </label>
                        </li>
                        <!-- ng-show="loadCarType < 9 || loadCarType==0" , ng-click="loadItemCarType()" -->
                        <li class="list-group-item crBorder customeCb" ng-show="loadCarType < 9 || loadCarType==0" , ng-click="loadItemCarType()">
                            <a class="red" href="javascript:void(0)">
                                {{carTypeShowValue}} 
                            </a></li>
                    </ul>
                </div>
                <!--End Box Car Type -->
            </div>
        </div>
        <!--End Left side section -->
        
        
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-7">
            <c:if test="${cartBean.isCarSold == true}"> 
                <div class="sold-out--msg">
                    Selected car sold out! Please select another car.
                </div>
            </c:if>
        
        
            <div class="car-repeater" ng-repeat="car in (filteredCars = (data.CarAvailability | filter:CarVendorFilter | filter:CarTypeFilter |filter:CarPaymentOptionFilter)) | limitTo:noOfResult | filter: CarAutomaticManualOptionFilter">
                <div class="row cr-header">
                    <div class="col-sm-10">
                        <div class="carName violet">
                            <!-- {{car.CarReference.CarName}} <small>or Equivalent {{getCap(car.CarReference.CarType)}}</small> -->
                            <div class="pull-left">
                                {{getCap(car.CarReference.CarType)}}
                                <small ng-if="car.CarReference.VehicleType.substr(0,2) === 'XX'"> {{car.CarReference.CarName}} </small>
                                <small ng-if="car.CarReference.VehicleType.substr(0,2) != 'XX'"> {{car.CarReference.CarName}} or Equivalent </small>
                                
                                <span class="hidden-xs cr-hidden-cam">{{car.CarReference.VendorCode}}, {{car.CarReference.VehicleType}}, {{car.CarReference.RateCode}},
                                    {{car.CarReference.RatePlan}}, {{car.CarReference.UniqueID}}, {{car.CarReference.RouteStationLst[0].LocationID}},{{car.CarReference.SupplierName}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 hidden-xs text-right">
                        <!-- <button ng-click="addCarToCart(car.CarReference.UniqueID)" class="btn car-button top10">Select <i class="fa fa-angle-double-right"></i></button> -->
                    </div>
                </div>
                <div class="row cr-body">
                    <div class="mobile-button visible-xs" ng-click="addCarToCart(car.CarReference.UniqueID)"><!-- Mobile Button --></div>
                    <div class="col-sm-5 col-xs-12">
                        <div class="row">
                            <div class="col-sm-9 col-xs-7">
                                <div class="car-images text-center">
                                    <img
                                    onerror="javascript:imgError(this,'/resources/images/crosssell-images/no-image.jpg')"
                                    ng-src="/resources/images/car-images/cars-sm/{{car.CarReference.CarName | nospace | lowercase}}.jpg" />
                                </div> 
                            </div>
                            <div class="col-sm-3 col-xs-5">
                                <!-- <div class="visible-xs text-right text-capitalize">Supplier : {{car.CarReference.VendorName | lowercase}}</div> -->

                                <div><!-- <img class="img-responsive" src="/resources/car-images/suppliers/{{car.CarReference.VendorName | nospace  | lowercase }}.jpg" title="supplier : {{car.CarReference.VendorName | lowercase}}"/> -->
                                        <img class="car-supplier" title="supplier : {{car.CarReference.DisplayVendorName | lowercase}}" id="imgSet" src="/resources/images/car-images/suppliers/{{car.CarReference.DisplayVendorName | nospace  | lowercase }}.jpg"
                                                alt="{{car.CarReference.DisplayVendorName}}" />
                                                </div>
                                <div class="crSelectPrice visible-xs text-center">
                                    <h3 class="price">
                                        <i class="fa fa-<c:out value="${dollar}"/>" ></i>{{car.CarReference.Pricing.AvgPrice * angularCurrency | number : 2 | getIntPart }}<sup>.{{car.CarReference.Pricing.AvgPrice * angularCurrency | number : 2 | getDecimalPart}}</sup><small>/ day</small>
                                    </h3>
                                </div>
                                <div class="total-charge visible-xs text-center">Total : <i class="fa fa-<c:out value="${dollar}"/>" ></i>{{car.CarReference.Pricing.TotalChargeAmount * angularCurrency | number : 2}}</div>
                                <c:if test="${cartBean.isCarSold == false}"> 
                                        <div class="pns visible-xs" ng-if="car.CarReference.SupplierName == 93"><i class="fa fa-check"></i> Pay Now and Save</div>
                                        <div class="pns visible-xs" ng-if="car.CarReference.SupplierName == 91"><i class="fa fa-check"></i> Book Now Pay Later</div>
                                    </c:if>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-xs-12">
                                <ul class="list-inline cr-d-itinarary-list">
                                    <li>
                                        <i class="fa icon-passenger"></i> {{car.CarReference.carAttribute.NumOfPassengers}}
                                    </li>
                                    <li>
                                        <i class="fa icon-door2"></i> {{car.CarReference.carAttribute.NumOfLuggageLarge + car.CarReference.carAttribute.NumOfLuggageSmall}}
                                    </li>
                                    <li>
                                        <i class="fa icon-luggage"></i> {{car.CarReference.carAttribute.NumOfLuggageLarge + car.CarReference.carAttribute.NumOfLuggageSmall}}
                                    </li>
                                    <li ng-if="car.CarReference.carAttribute.CarFuel == 'aircon'">
                                        <i class=" fa fa-snowflake-o"></i> Aircon
                                    </li>
                                    <li ng-if="car.CarReference.carAttribute.CarFuel == 'non aircon'">
                                        <i class=" fa fa-snowflake-o"></i> Non Aircon
                                </li>

                                    <li>
                                       <span ng-if="car.CarReference.carAttribute.Transmission == 'Automatic'">
                                            <i class="fa icon-transmission-a"></i> {{car.CarReference.carAttribute.Transmission}}
                                        </span>
                                        <span ng-if="car.CarReference.carAttribute.Transmission == 'Manual'">
                                            <i class="fa icon-transmission-m"></i> {{car.CarReference.carAttribute.Transmission}}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 hidden-xs"> <!-- Only For Desktop -->
                        <div class="location">
                            <strong>Location</strong>
                           <div ng-repeat="route in car.CarReference.RouteStationLst">
                                <span ng-if="route.RouteType === 1">
                                    <p> {{route.StationName}}</p>
                                </span>
                                <!--  Orlando International Airport -->
                            </div>
                        </div>
                        <div class="offers" ng-if="car.CarReference.SupplierName == 91">
                            <strong>You will get for FREE</strong>
                            <p>
                                <span>
                                    <i class="fa fa-check red"></i> Free Amendment
                                </span>
                                <br>
                                <span>
                                    <i class="fa fa-check red"></i> Unlimited Mileage
                                </span>
                            </p>
                        </div>
                        <div class="offers" ng-if="car.CarReference.SupplierName == 93">
                            <strong>You will get for FREE</strong>
                            <p>
                                <span>
                                    <i class="fa fa-check red"></i> Save up to 25% on publish rates
                                </span>
                                
                            </p>
                        </div>
                        <br/>
                    </div>
                    <div class="col-sm-3 hidden-xs">
                        <div class="crBooking-cost">
                            <div class="flexBox1 text-center">
                                <div class="crSelectPrice">
                                    <h3 class="price">
                                    <i class="fa fa-<c:out value="${dollar}"/>" ></i>{{car.CarReference.Pricing.AvgPrice * angularCurrency | number : 2 | getIntPart }}<sup>.{{car.CarReference.Pricing.AvgPrice * angularCurrency | number : 2 | getDecimalPart}}</sup><small>/day</small>
                                        <div class="total-charge">Total : <i class="fa fa-<c:out value="${dollar}"/>" ></i>{{car.CarReference.Pricing.TotalChargeAmount * angularCurrency | number : 2}}</div>
                                    </h3>
                                    <c:if test="${cartBean.isCarSold == true}">
                                     <span ng-if="car.CarReference.VehicleType+'-'+car.CarReference.VendorCode == '${cartBean.carReference.vehicleType}-${cartBean.carReference.vendorCode}'"> 
                                    <button class="btn car-button top10" disabled="disabled">Sold <i class="fa fa-angle-double-right"></i></button>
                                    </span> 
                                    <span ng-if="car.CarReference.VehicleType+'-'+car.CarReference.VendorCode != '${cartBean.carReference.vehicleType}-${cartBean.carReference.vendorCode}'"> 
                                        <button data-btn="carAdd2Trip" ng-click="addCarToCart(car.CarReference.UniqueID)" class="btn cxl-add2trip carBtn"><span class="removeText" id="{{car.CarReference.VehicleType+'-'+car.CarReference.VendorCode}}-span">Add to Trip</span> <i class="fa fa-angle-double-right"></i></button>
                                    </span>
                                    </c:if>
                                    <c:if test="${cartBean.isCarSold == false}">
                                        <!-- setClickedRow($index); --> <!-- {{carAdd2Trip}} -->
                                        
                                        <button id="{{car.CarReference.VehicleType+'-'+car.CarReference.VendorCode}}" ng-class="{'active':car.CarReference.UniqueID == selected}" 
                                        type="button" ng-click="addCarToCart(car.CarReference.UniqueID)" class="btn cxl-add2trip carBtn"><span class="removeText" id="{{car.CarReference.VehicleType+'-'+car.CarReference.VendorCode}}-span">Add to Trip</span> <i class="fa fa-angle-double-right"></i></button>
                                         <!-- Book Now and Pay Later --> 
                                        <div class="pns" ng-if="car.CarReference.SupplierName == 93"><i class="fa fa-check"></i> Pay Now and Save</div>
                                        <div class="pns" ng-if="car.CarReference.SupplierName == 91"><i class="fa fa-check"></i> Book Now Pay Later</div>
                                    </c:if>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div class="no-result-found xlDesign" ng-show="data.CarAvailability.length == 0">
                <div class="alert text-center">
                    <div class="text-1">
                        <i class="fa fa-warning red"></i> <b>Sorry! No Result Found</b>
                    </div>
                    <div class="text-2 red">
                        Let Our Agents Help You Find The Best Car Option!
                    </div>
                  
                    <div class="call-now">Now Call Toll Free
                        <a href="tel:+44-800-972-3035" class="red">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <b>+44-800-972-3035</b>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-sm-12">
                    <button ng-click="loadMoreResult();" ng-hide="filteredCars.length == 0 || filteredCars.length < 5" ng-show="showMore" class="btn car-btnShowMore">Load More Results <i class="fa fa-angle-double-right"></i></button>
                </div>
            </div>
            <div class="separator"></div>
        </div>

        <!--Start Right Container -->
        <div id="carRightContainer" class=" col-xs-12 col-md-3 col-lg-3 hidden-xs hidden-sm">
            <jsp:include page="components/itinerary.jsp" /> 

            <div class="carRightCtrl">
                <!--Start Alert Msg -->
                <div class="boxSec hide">
                    <ul class="list-group text-center">
                        <li class="list-group-item">
                            <div class="form-group">
                                <label for="usr">Get an Alert when the Price Drops.</label>
                                <input type="text" class="form-control" value="Enter Your Email Address" required />
                                <br/>
                                <div><button class="btn car-btnSubscribe text-uppercase">Subscribe</button></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--End Alert Msg -->
                <div class="separator"></div>
                <!--Start Alert Msg -->
                <div class="boxSec">
                    <ul class="list-group">
                        <li class="list-group-item"><strong><i class="fa fa-lock"></i> Book with Confidence </strong></li>
                        <li class="list-group-item list"><i class="fa fa-check"></i> Best Purchase Guarantee!</li>
                        <li class="list-group-item list"><i class="fa fa-check"></i> All discounts Updated Daily</li>
                        <li class="list-group-item list"><i class="fa fa-check"></i> 24*7 Customer Service</li>
                        <li class="list-group-item list"><i class="fa fa-check"></i> Protected & Safe Booking</li>
                    </ul>
                </div>
            </div>
        </div>
        <!--End Right Container -->
    </div>
</div>

<loading>
<div class="cxl-mid-screen centerScreen">
    <div class="text-center">
        <div class="loader-icon">
            <div class="loader"></div>
        </div>
        <h1>${cartBean.carSearch.pickLocation}</h1>
        <div class="duration">
          <fmt:parseDate value="${cartBean.carSearch.pickDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  <fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
		  ${sdate}
            <i class="fa fa-long-arrow-right"></i>
          <fmt:parseDate value="${cartBean.carSearch.dropDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  <fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
             ${sdate}
        </div>
        <h2>Please Wait...</h2>
        <div class="text">While Travelopick is Searching for the best car deals</div>
    </div>
</div>
</loading>




<!-- Secession Time out -->
<!-- <div id="divSessionOut" style="display:none;" class="session-timeout-container">
    <div class="session-body">
        <h3>Session Expired! <i class="fa fa-clock-o" aria-hidden="true"></i></h3>
        <div class="session-body-para">
            Car prices may change frequently owing to demand & availability.<br/>
            Start a new search to view the best deals.
        </div>

        <div class="session-body-btn">
            <div class="row">
                <div class="col-sm-5 col-xs-4">
                    <a onclick="openConfirmation('${bookingWrapper.userSessionID}');" class="cursor btn cxl-btn">Go to Confirmation <i class="fa fa-angle-double-right"></i></a>
                </div>
                <div class="col-sm-5 col-xs-8">
                    <a href="/crossellcrm/${bookingWrapper.userSessionID}" class="cursor btn cxl-btn">Go to Crossell <i class="fa fa-angle-double-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</div> -->
<span style="display:none;"><input type="radio" id="protectYes" checked></span>

<ul class="list-inline mobile-link-tab visible-sm visible-xs">
    <li class="pull-left"><a id="carFilterClick" href="javascript:void(0)">Filter</a></li>
    <li class="pull-left"><a id="carPSummaryClick" href="javascript:void(0)">Trip Summary</a></li>
    <li class="pull-left"><a href="javascript:void(0)">
            <div class="p-total">Total Price : <i class="fa fa-<c:out value="${dollar}"/>" ></i><span id="finalTotalPriceMobile">0.00</span></div>
    </a></li>
    <li class="gotoTop pull-right"><a id="carPSummaryClickArrow" href="javascript:void(0)"><i class="fa fa-arrow-up"></i></a></li>
</ul>

<jsp:include page="components/footer/footer.jsp" />  
<script type="text/javascript" src="/resources/js/crossell/crosssell-carScript.js"></script>


</body>
</html>
