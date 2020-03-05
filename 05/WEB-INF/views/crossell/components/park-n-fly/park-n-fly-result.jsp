<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>

  
<script>
    function goBack() {
        //window.history.back();
        window.location.href = document.referrer;
    }
    function imgError(img,srcc) {
    img.error="";
    img.src=srcc;
    }
</script>

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

<form:form modelAttribute="cartBean" method="POST" id="searchHotelCar">
<form:hidden path="isNewCard" />
<div class="park-n-fly-component">
    <div class="container-fluid park-n-fly-SearhEngine">
        <div class="container "> 
        
            <div class="row cr-result-details">
                    <div class="col-sm-2 col-xs-6">
                            <button class="btn goBackFromResult" onclick="goBack();"> <i class="fa fa-angle-double-left"></i> Go Back </button>
                        </div>
                <div class="col-sm-8 col-xs-12 hidden-xs">
                    <ul class="list-inline cr-result-list">
                        <li>
                            <span class="data2">Pickup Location - </span>
                            <span class="data1"> ${pnfSearch.location}</span>
                        </li> 
                        <li>
                            <span class="data2">Pickup Date - </span>
                            <span class="data1"> ${pnfSearch.arrivalDate}</span>
                        </li> 
                        <li>
                            <span class="data2">Time - </span>
                            <span class="data1"> ${pnfSearch.arrivalHour}</span>
                        </li> 
                        <li>
                            <span class="data2">Dropoff Date - </span>
                            <span class="data1"> ${pnfSearch.exitDate}</span> 
                        </li> 
                        <li>
                            <span class="data2">Time - </span>
                            <span class="data1"> ${pnfSearch.exitHour}</span> 
                        </li>  
                    </ul>
                </div>
                
                <div class="col-sm-2 col-xs-6 text-right">
                    <button type="button" data-toggle="collapse" data-target="#pnfModifysearch" class="btn cr-btn-link">Modify Search</button>
                </div>
            </div>
        

        <div id="pnfModifysearch" class="pnfModifysearch collapse ">
             
            <div class="row pnf-destination-search">
                <div class="col-md-5 col-sm-12 col-xs-12" id="parkFlyLocation">
                    <div class="form-group cffFormIcon">
                        <i class="icon fa fa-map-marker"></i>
                        <form:input path="pnfSearch.location" onClick="this.select();" class="form-control" id="parkFlySearch" placeholder="Pick-up" />
                    </div>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <div class="form-group cffFormIcon">
                        <i class="icon fa fa-calendar"></i>
                        <form:input path="pnfSearch.arrivalDate" id="arrivalDate" class="form-control" placeholder="Select Arrival Date" readonly="true"/>
                    </div>
                </div>
                <div class="col-md-1 col-sm-2 col-xs-6">
                    <div class="form-group">
                        <form:select path="pnfSearch.arrivalHour"  items="${parkTime}" class="form-control">
                            
                        </form:select>
                    </div>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <div class="form-group cffFormIcon">
                        <i class="icon fa fa-calendar"></i>
                        <form:input path="pnfSearch.exitDate" id="exitDate" class="form-control"  placeholder="Select Exit Date" readonly="true" />
                    </div>
                </div>
                <div class="col-md-1 col-sm-2 col-xs-6">
                    <div class="form-group">
                        <form:select path="pnfSearch.exitHour" items="${parkTime}" class="form-control">
                            
                        </form:select>
                    </div>
                </div>
                <div class="col-md-1 col-sm-12 col-xs-12">
                    <div class="form-group">
                        <button class="form-control btn pnf-button" onClick="return submitPnfForm('0')">Submit</button>
                    </div>
                </div>            
        </div>
    </div>
        </div>
    </div>
    <form:hidden path="pnfSearch.numberOfDays" value="{{data.parkings.generalInfo.NumberOfDays}}"/>
</form:form>


    <div class="container" ng-hide="IsHidden" style="display:none;" id="pnfContainer">
        <div class="row">
            <div class="col-md-7 col-lg-5 col-xs-12">            
            <div ng-if="data.parkings.ParkingLots == null">No Result Found!</div>
                <div class="pnf-repeater" ng-repeat="parking in data.parkings.ParkingLots">
                    <i class="pnf-icon icon-location"></i>
                    <div class="row pnf-header">
                        <div class="col-xs-12">
                            <div class="pnfName violet">{{parking.LotName}} 
                                <small>{{parking.Address.LotAddress1}}</small>
                            </div>
                        </div>
                        <div class="col-xs-5 col-sm-4 text-right">
                            <!-- <div class="pnf-logo"><img src="/resources/images/crosssell-images/pnfly.png" ></div> -->
                        </div>
                    </div>
                    <div class="row pnf-body" ng-repeat="parkingType in parking.ParkingTypes">
                        <div class="col-xs-7 col-sm-8">
                            <div class="location">
								<div class="parking-type"><strong>Parking Type</strong>: <span class="text-orange">{{parkingType.TypeName}}</span></div>
                                
                          <!--      <p>
                                    Discount Rates Platinum $16.15 / AAA $17.10
                                </p> -->
                            </div>

                            <div class="row pnf-services" ng-if="parking.AmenitiesAndServices != ''">
                                <div class="location">
                                    <strong>Services Available At This Location:</strong>
                                    <p class="bulet-points">
                                         <span ng-repeat="amenities in parking.AmenitiesAndServices">{{amenities.AmenityName}}    <!--<span ng-if="!$last"> </span>--> </span>
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="col-xs-5 col-sm-4">
                            <div class="pnfBooking-cost">
                                <div class="text-center">
                                    <div class="pnfSelectPrice">
                                        <h3 class="price">
                                            <i class="fa fa-<c:out value="${dollar}"/>"></i>{{parkingType.Pricing.AvgPrice * angularCurrency | number : 2 | getIntPart }}<sup>.{{parkingType.Pricing.AvgPrice * angularCurrency | number : 2 | getDecimalPart }}</sup>
                                            <small>Per day</small>
                                        </h3>
                                        <button type="button" ng-click="addPnfToCart(parking.LotID,parkingType.TypeID)" id="{{parking.LotID+'-'+parkingType.TypeID}}" class="btn cxl-add2trip carBtn">
                                            <span class="removeText" id="{{parking.LotID+'-'+parkingType.TypeID}}-span">Add to Trip</span>
                                            <i class="fa fa-angle-double-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                   
                </div>

            </div>

            <!--Start Right Container -->
            <div class="col-md-5 col-lg-4 col-xs-12">
                <div class="carRightCtrl">
                    <!--Start Alert Msg -->
                    <div class="boxSec">
                        <div class="pnf-map">
                           <!--  <h1>Map</h1> -->
                            
                            
								<div class="container-fluid" >
								
								    <div id="htlMap" style="width:100%;height:100%;"></div>
								
								</div> 

                        </div>
                    </div>
                    <!--End Alert Msg -->
                </div>
            </div>
            <div id="pnfRightContainer" class="col-xs-12 col-md-12 col-lg-3  hidden-xs hidden-sm">
            	<jsp:include page="../itinerary.jsp" /> 
            </div>
            <!--End Right Container -->
        </div>
    </div>
</div>


<ul id="pnfPaymentClick" class="list-inline mobile-link-tab visible-md visible-sm visible-xs">
    <li class="pull-left"><a href="javascript:void(0)">Price Summary</a></li>
    <li class="pull-left"><a href="javascript:void(0)">
        <div class="p-total">Total Price : <i class="fa fa-usd"></i><span id="finalTotalPriceMobile"> </span></div>
    </a></li>
    <li class="gotoTop pull-right"><a href="javascript:void(0)"><i class="fa fa-arrow-up"></i></a></li>
</ul>  