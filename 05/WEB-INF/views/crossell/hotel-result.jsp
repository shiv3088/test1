<!--[if IE 8 ]>    <html lang="ar" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="ar" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> 
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<html lang="en" class="no-js" ng-app="hotelResultApp"> <!--<![endif]-->

<head> 
	<jsp:include page="components/header/theme.jsp" />  
	<script src="/resources/js/angular.js"></script>
	<script src="/resources/js/crossell/hotel-result.js?23112018abc"></script> 
	
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
 
<body class="body-wrapper" ng-controller="hotelResultController" id="hotelResultController">
<input type="hidden" value="${cartBean.carReference}" id="selectedCar">
<input type="hidden" value="${cartBean.hotelDetailRes}" id="selectedHotel">
<input type="hidden" value="${cartBean.parkingLot}" id="selectedPnf">

<jsp:include page="components/header/navigation.jsp" />  

 <input type="hidden" id="hotelId" value="${hotelId}">
<input type="hidden" id="pickDate" value="${cartBean.hotelSearch.checkInDate}">
<!-- Start : Search Engine -->
<div class="container" style="padding: 0">
<div class="htlSearhEngine">
    <div class="row htl-result-details">
        <div class="col-xs-12 col-sm-9 col-sm-push-2 hidden-xs"> 
            <ul class="list-inline htl-result-list">
                <li>
                    <span class="data2">Destination - </span>
                    <span class="data1">${cartBean.hotelSearch.stayCity}</span>
                </li>
                <li>
                    <span class="data2">CheckIn Date - </span>
                    <span class="data1">${cartBean.hotelSearch.checkInDate}</span>
                </li>
                <li>
                    <span class="data2">CheckOut Date - </span>
                    <span class="data1">${cartBean.hotelSearch.checkOutDate}</span>
                </li>
                <li>
                    <span class="data2">Rooms - </span>
                    <span class="data1">${cartBean.hotelSearch.guest}</span>
                </li>
            </ul>
        </div>
        <div class="col-xs-6 col-sm-1 col-sm-pull-9">
            <button class="btn goBackFromResult" onclick="goBack();"> <i class="fa fa-angle-double-left"></i> Go Back</button>
        </div>
        <div class="col-xs-6 col-sm-2 text-right">
            <button type="button" id="htlModifySearchBtn" class="btn cr-btn-link">Modify Search</button>
        </div>
    </div> 
<form:form method="POST" action="/hotelSearchCross" modelAttribute="cartBean" id="searchHotelCar">
<form:hidden path="isNewCard" />

<div id="htlModifySearchDiv" style="display:none;">
    <div class="row htl-destination-search">
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="form-group cffFormIcon">
                <i class="icon fa fa-map-marker" aria-hidden="true"></i>
                <form:input path="hotelSearch.stayCity" id="stayCity" onClick="this.select();" class="form-control" placeholder="Your Destination" />
            </div>
        </div>
        <div class="col-md-2 col-sm-3 col-xs-6">
            <div class="form-group cffFormIcon">
                <i class="icon fa fa-calendar" aria-hidden="true"></i>
                <form:input path="hotelSearch.checkInDate" id="checkInDate" class="form-control" placeholder="MM/DD/YYYY" readonly="true"/>
            </div>
        </div>
        <div class="col-md-2 col-sm-3 col-xs-6">
            <div class="form-group cffFormIcon">
                <i class="icon fa fa-calendar" aria-hidden="true"></i>
                <form:input path="hotelSearch.checkOutDate" id="checkOutDate" class="form-control"  placeholder="MM/DD/YYYY" readonly="true"/>
            </div>
        </div>
        <div class="col-md-2 col-sm-4 col-xs-12">
            <div class="form-group cffFormIcon">
                <i class="icon fa fa-user" aria-hidden="true"></i>
                <form:input path="hotelSearch.guest" id="guest" class="form-control" placeholder="1 Room 1 Person" readonly="true"/>
            </div>
           
            <div class="showRoomDiv guestInfo-container" id="guestInfoDiv" style="display:none">
                <i class="fa fa-close" id="closeGuestInfo"></i>
                <div class="row no-gutters">
                    <div class="col-xs-4">
                        <label for="">Rooms</label>
                    </div>
                    <div class="col-xs-4">
                        <label for="">Adults</label>
                    </div>
                    <div class="col-xs-4">
                        <label for="">Children</label>
                    </div>
                </div>
                <div id="room1">
                    <div class="row no-gutters">
                        <div class="col-xs-4">
                            <div class="inputGroup">
                                <div class="form-group input-group">
                                    <span id="subtInputRoom" class="input-group-addon guest" data-room="1"> - </span>
                                    <form:input path="hotelSearch.room" id="room" class="form-control text-center" readonly="true"/>
                                    <span id="addInputRoom" class="input-group-addon guest" data-room="1"> + </span>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-xs-4">
                            <div class="inputGroup">
                                <div class="form-group input-group">
                                    <span class="input-group-addon subAdultsOnLoad guest" data-room="1"> - </span>
                                    <form:input path="hotelSearch.rooms[0].adults" id="rooms0-adult" class="form-control text-center" readonly="true" />
                                    <span class="input-group-addon addAdultsOnLoad guest" data-room="1"> + </span>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-xs-4">
                            <div class="inputGroup">
                                <div class="form-group input-group">
                                    <span class="input-group-addon removeChildAgesOnload guest" data-room="1"> - </span>
                                    <form:input path="hotelSearch.rooms[0].child" id="rooms0-child" class="form-control text-center" readonly="true"/>
                                    <span class="input-group-addon addChildAgesOnload guest" data-room="1"> + </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="childAgeRoom1 row" style="display:block"></div>
                </div>
            </div>
        </div>
        <div class="col-md-2 col-sm-3 col-xs-12">
            <div class="form-group">
                <button type="button" onClick="return submitHotelForm('0')" class="form-control btn htl-button">Submit <i class="fa fa-angle-double-right"></i></button>
            </div>
        </div>
    </div>
</div>
    <form:hidden path="hotelSearch.locationid" id="locationid"/>
    <form:hidden path="hotelSearch.rooms[1].adults" id="rooms1_adults" />
    <form:hidden path="hotelSearch.rooms[2].adults" id="rooms2_adults" />
    <form:hidden path="hotelSearch.rooms[3].adults" id="rooms3_adults" />
    <form:hidden path="hotelSearch.rooms[4].adults" id="rooms4_adults" />
    <form:hidden path="hotelSearch.rooms[5].adults" id="rooms5_adults" />
    
    <form:hidden path="hotelSearch.rooms[1].child" id="rooms1_child" />
    <form:hidden path="hotelSearch.rooms[2].child" id="rooms2_child" />
    <form:hidden path="hotelSearch.rooms[3].child" id="rooms3_child" />
    <form:hidden path="hotelSearch.rooms[4].child" id="rooms4_child" />
    <form:hidden path="hotelSearch.rooms[5].child" id="rooms5_child" />
    
    <form:hidden path="hotelSearch.rooms[0].children[0].age" id="rooms0_children0_age" />
    <form:hidden path="hotelSearch.rooms[0].children[1].age" id="rooms0_children1_age" />
    <form:hidden path="hotelSearch.rooms[0].children[2].age" id="rooms0_children2_age" />
    <form:hidden path="hotelSearch.rooms[0].children[3].age" id="rooms0_children3_age" />
    <form:hidden path="hotelSearch.rooms[0].children[4].age" id="rooms0_children4_age" />
    
    <form:hidden path="hotelSearch.rooms[1].children[0].age" id="rooms1_children0_age" />
    <form:hidden path="hotelSearch.rooms[1].children[1].age" id="rooms1_children1_age" />
    <form:hidden path="hotelSearch.rooms[1].children[2].age" id="rooms1_children2_age" />
    <form:hidden path="hotelSearch.rooms[1].children[3].age" id="rooms1_children3_age" />
    <form:hidden path="hotelSearch.rooms[1].children[4].age" id="rooms1_children4_age" />
    
    <form:hidden path="hotelSearch.rooms[2].children[0].age" id="rooms2_children0_age" />
    <form:hidden path="hotelSearch.rooms[2].children[1].age" id="rooms2_children1_age" />
    <form:hidden path="hotelSearch.rooms[2].children[2].age" id="rooms2_children2_age" />
    <form:hidden path="hotelSearch.rooms[2].children[3].age" id="rooms2_children3_age" />
    <form:hidden path="hotelSearch.rooms[2].children[4].age" id="rooms2_children4_age" />
    
    <form:hidden path="hotelSearch.rooms[3].children[0].age" id="rooms3_children0_age" />
    <form:hidden path="hotelSearch.rooms[3].children[1].age" id="rooms3_children1_age" />
    <form:hidden path="hotelSearch.rooms[3].children[2].age" id="rooms3_children2_age" />
    <form:hidden path="hotelSearch.rooms[3].children[3].age" id="rooms3_children3_age" />
    <form:hidden path="hotelSearch.rooms[3].children[4].age" id="rooms3_children4_age" />
    
    <form:hidden path="hotelSearch.rooms[4].children[0].age" id="rooms4_children0_age" />
    <form:hidden path="hotelSearch.rooms[4].children[1].age" id="rooms4_children1_age" />
    <form:hidden path="hotelSearch.rooms[4].children[2].age" id="rooms4_children2_age" />
    <form:hidden path="hotelSearch.rooms[4].children[3].age" id="rooms4_children3_age" />
    <form:hidden path="hotelSearch.rooms[4].children[4].age" id="rooms4_children4_age" />
</form:form>

</div>
</div>
<!-- End : Search Engine -->
<div class="container" ng-hide="IsHidden" style="display:none;" id="hotelContainer">
    <div class="row">
        <!--Start Left side section -->
        <div id="htlLeftContainer" class="col-xs-12 col-sm-12 col-md-3 col-lg-2 hidden-xs hidden-sm">
            <div class="htlLeftCtrl">
                <!--Start Box Pick Up Location -->
                <div class="boxSec">
                    <ul class="list-group">
                        <li class="list-group-item active">Search By
                            <a class="removeTrip pull-right" href="javascript:void(0)" ng-click="clearSearchBy();">
                                <i class="fa fa-times"></i> 
                                Clear
                            </a>
                        </li>
                        <li class="list-group-item">
                        
                            <div class="input-group">
                                <input type="text" id="hotelSearchName" ng-model="hotelSearchName" ng-keyup="autoHotelNameList();" class="form-control htl-input" placeholder="Hotel Name" name="search">
                                <div class="input-group-btn">
                                    <button ng-click="findHotelByName();" class="btn htl-btn-search"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                            <div id="hotelNameError"></div>
                        </li>
                    </ul>
                </div>
                <!--End Box Pick Up Location -->
                <!--Start Box Supplier -->
                <div class="boxSec">
                    <ul class="list-group">
                        <li class="list-group-item active">Star Rating
                            <a class="removeTrip pull-right" href="javascript:void(0)" ng-click="clearStarRating();">
                                <i class="fa fa-times"></i> 
                                Clear
                            </a>
                        </li>

                        <li class="list-group-item">
                            <ul class="list-inline filter-starRating">
                                <li class="customeCb" ng-class="{ active : selectedStar[star.name], disabled : star.count == 0 }"  ng-repeat="star in starList">
                                    <label class="checkbox-inline" ng-class="{ disabled : star.count == 0 }" >
                                    
                                        <input type="checkbox" ng-model="selectedStar[star.name]" ng-if="star.count > 0">
                                        <input type="checkbox" ng-model="selectedStar[star.name]" ng-if="star.count == 0" disabled>
                                        <span class="star-rating star{{star.id}}">
                                            <div class="c1">{{star.name}}</div>
                                            <div class="c2"><i class="fa fa-star"></i></div>
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
                <!--End Box Supplier -->
                <!--Start Box Car Type -->
                <div class="boxSec">
                    <ul class="list-group">
                        <li class="list-group-item active">Price Range
                            <a class="removeTrip pull-right" href="javascript:void(0)" ng-click="clearPriceRange();">
                                <i class="fa fa-times"></i> 
                                Clear
                            </a>
                        </li>
                        <li class="list-group-item">
                            <div id="sliderPrice" class="text-center"></div>
                            <div id="htlPriceRange" data-max="100" data-min="1" class="price-range"></div>
                        </li>
                    </ul>
                </div>
                <!--End Box Car Type -->
                <!-- Start : Amenities Filter-->
                <div class="boxSec">
                    <ul class="list-group">
                        <li class="list-group-item active">Amenities</li>
                        
                        <li class="list-group-item crBorder customeCb" data-ng-repeat="amen in amentiesList">
                            <label class="checkbox-inline">
                               <input type="checkbox" name="check" value="check1" data-ng-model="amen.on" data-ng-change="checkChange()" />
                                <span>{{amen.name}}</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <!-- End : Amenities Filter-->
                <!--Start Box Car Type -->
                <div class="boxSec visible-xs">
                    <ul class="list-group">
                        <li class="list-group-item active">
                            <button id="closeFilter" class="btn close-filter-btn">Close Filter</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--End Left side section -->
        
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-7"> 
            <div class="row">
                <div class="col-sm-4">
                    <div class="number-of-hotel"><strong>{{filteredList.length}}</strong> Hotels Found</div>
                </div>
                <div class="col-sm-8">
                    <ul class="sorting-tab hidden-xs">
                        <li><i class="fa fa-sort-amount-desc"></i> Sort By </li>
                        <li ng-class="{active : sortKey === 'Recommend'}"><a href="javascript:void(0)" ng-click="sort('Recommend', 'SrNo')">Recommend</a></li>
                        <li ng-class="{active : sortKey === 'LowRate'}"><a href="javascript:void(0)" ng-click="sort('LowRate')">Price</a></li>
                        <li ng-class="{active : sortKey === 'Rating'}"><a href="javascript:void(0)" ng-click="sort('Rating')">Stars</a></li>
                        <li ng-class="{active : sortKey === 'proximityDistance'}"><a href="javascript:void(0)" ng-click="sort('proximityDistance')">Distance</a></li>
                    </ul>
                </div>
            </div>
            
            
            
            <div class="hotel-repeater"  ng-repeat="hotel in filteredList = (hotelList.HotelList | filter:filterStar | filter:priceRange | orderBy:sortKey:reverse) | limitTo:numberOfResult">
                <div class="row htl-header" id="{{hotel.HotelId}}-header">
                    <div class="mobile-button visible-xs" ng-click="showHotelDetails(hotel.HotelId)"></div>
                    <div class="col-xs-8 col-sm-10">
                        <div class="hotelName">
                            <a title="{{hotel.HotelName}}">{{hotel.HotelName | limitTo : 44}}</a>
                            <!-- <small title="{{hotel.Address.CompleteAddress}}">{{hotel.Address.CompleteAddress | limitTo : 65}}</small>
                            <span data-lattitude="{{hotel.Address.Latitude}}" data-longitude="{{hotel.Address.Longtitude}}" data-hotel-name="{{hotel.HotelName}}" data-address="{{hotel.Address.CompleteAddress}}" class="map-link red cursor showHotelMap hidden-xs"><i class="fa fa-map-marker"></i> Map</span> -->
                        </div>
                    </div>
                    <div class="col-xs-4 visible-xs">
                        <div class="price-xs">
                            <i class="fa fa-<c:out value='${dollar}'/>" ></i>{{hotel.LowRate * angularCurrency | number : 2 | getIntPart }}.<sup>{{hotel.LowRate * angularCurrency | number : 2 | getDecimalPart}}</sup>
                            <small>avg/night</small>
                        </div>
                    </div>
                    <div class="col-sm-2 text-right">
                        <div class="hotel-rating">
                            <span ng-if="hotel.tripAdvisorRating == 5 || hotel.tripAdvisorRating == 4.5" data-trip="Superb" class="trip-advisor cursor hidden-xs">
                                <i class="trip-icon five"></i> 
                            </span>
                            <span ng-if="hotel.tripAdvisorRating == 4 || hotel.tripAdvisorRating == 3.5" data-trip="Very Good" class="trip-advisor cursor hidden-xs">
                                <i class="trip-icon four"></i> 
                            </span>
                            <span ng-if="hotel.tripAdvisorRating == 3 || hotel.tripAdvisorRating == 2.5" data-trip="Good" class="trip-advisor cursor hidden-xs">
                                <i class="trip-icon three"></i> 
                            </span>
                            <span ng-if="hotel.tripAdvisorRating == 2 || hotel.tripAdvisorRating == 1.5" data-trip="Average" class="trip-advisor cursor hidden-xs">
                                <i class="trip-icon two"></i> 
                            </span>
                            <span ng-if="hotel.tripAdvisorRating == 1 || hotel.tripAdvisorRating == 0.5" data-trip="Poor" class="trip-advisor cursor hidden-xs">
                                <i class="trip-icon one"></i> 
                            </span>
                            <span ng-if="hotel.tripAdvisorRating == 0" data-trip="Poor" class="trip-advisor cursor hidden-xs">
                                <i class="trip-icon zero"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row htl-body"> 
                    <!-- onerror="javascript:imgError(this,'/resources/images/crosssell-images/no-image.png')"  -->
                    <div class="col-xs-3 col-sm-3">
                        <!--<figure class="htl-thumb-img">
                            <img ng-click="showMoreImages(hotel.IcePortalID,hotel.ThumbNailUrl.replace('http','https'))" class="img-responsive" 
                            ng-src="{{hotel.ThumbNailUrl.replace('http','https')}}" 
                            alt="{{hotel.HotelName}}"/>
                        </figure>-->
                      
			            <figure class="htl-thumb-img">
                            <img ng-click="showMoreImages(hotel.IcePortalID,hotel.ThumbNailUrl.replace('http','https'))" 
                            class="img-responsive" ng-src="{{hotel.ThumbNailUrl.replace('http','https')}}" 
                            onerror="javascript:imgError(this,'/resources/images/crosssell-images/no-image.png')" 
                            alt="{{hotel.HotelName}}" />
                        </figure>
                    </div>
                    <div class="col-xs-9 col-sm-6">
                        <div class="location">
                            <strong>Address </strong> <span class="hidden-xs cr-hidden-cam"> >>> {{hotel.HotelSupplier}}, {{hotel.HotelRanking}}, {{hotel.HotelId}}, {{hotel.CFFHotelID}}</span>
                            <p>
                                <span title="{{hotel.Address.CompleteAddress}}">{{hotel.Address.CompleteAddress | limitTo : 65}}</span>
                                <br><span data-lattitude="{{hotel.Address.Latitude}}" data-longitude="{{hotel.Address.Longtitude}}" data-hotel-name="{{hotel.HotelName}}" data-address="{{hotel.Address.CompleteAddress}}" class="map-link red cursor showHotelMap hidden-xs fs12"><i class="fa fa-map-marker"></i> Show on Map </span>
                            </p>

                        <div class="hotel-amenities">
                                <strong>Amenities</strong>
                                <ul class="list-inline">
                                    <li ng-repeat="amentie in hotel.Amenties | limitTo : 3"><i class="icon icon-{{getCap(amentie) | lowercase}}"></i> {{amentie}}</li>
                                </ul>
                            </div>
                        </div>

                        <div ng-if="hotel.tripAdvisorRating == 5 || hotel.tripAdvisorRating == 4.5" data-trip="Superb" class="trip-advisor cursor visible-xs">
                            <span class="trip-icon five"></span>
                        </div>
                        <div ng-if="hotel.tripAdvisorRating == 4 || hotel.tripAdvisorRating == 3.5" data-trip="Very Good" class="trip-advisor cursor visible-xs">
                            <span class="trip-icon five"></span>
                        </div>
                        <div ng-if="hotel.tripAdvisorRating == 3 || hotel.tripAdvisorRating == 2.5" data-trip="Good" class="trip-advisor cursor visible-xs">
                            <span class="trip-icon four"></span>
                        </div>
                        <div ng-if="hotel.tripAdvisorRating == 2 || hotel.tripAdvisorRating == 1.5" data-trip="Average" class="trip-advisor cursor visible-xs">
                            <span class="trip-icon three"></span>
                        </div>
                        <div ng-if="hotel.tripAdvisorRating == 1 || hotel.tripAdvisorRating == 0" data-trip="Poor" class="trip-advisor cursor visible-xs">
                            <span class="trip-icon two"></span>
                        </div>
                        
                    </div>
                    <div class="col-xs-12 col-sm-3 hidden-xs">
                        <!--Hotel Offer Start--> 
                        <div class="hidden-xs hotel-offers" ng-if="hotel.PromoTitle != null && hotel.PromoTitle != ''">
                            <div class="offer-txt" title="{{hotel.PromoDescription}}">
                                                                               	
                                <b> {{hotel.PromoTitle}}</b>
                            </div>
                        </div>
                        <!--Hotel Offer End-->
                        
                        <div class="htlBooking-cost">
                            <div class="flexBox1 text-center">
                                <div class="htlSelectPrice">
                                    <div class="hotel-rating">
                                        <span title="{{hotel.RatingNDes}} Star" class="starRating star{{hotel.RatingNDes}}">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span>
                                    </div>

                                    <h3 class="price">
                                        <div> <i class="fa fa-<c:out value='${dollar}'/>" ></i>{{hotel.LowRate * angularCurrency | number : 2 | getIntPart }}<sup>.{{hotel.LowRate * angularCurrency | number : 2 | getDecimalPart}}</sup></div>
                                        <div class="avgNight">avg/night</div>
                                    </h3>
                                    <button ng-class="{'active':hotel.HotelId == selected}" type="button"
                                        ng-click="showHotelDetails(hotel.HotelId)" class="btn htl-button fix-width"> <span class="removeText" id="{{hotel.HotelId}}">Add to Trip</span> 
                                        <i class="fa fa-angle-double-right"></i>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                
                <div class="data-loading" ng-show="hotel.ShowHotelDetailsLoading">
                    <span class="room-loader"></span> 
                     Your request is being processed... 
                </div>
                <jsp:include page="components/hotel/hotel-detail.jsp" />
            </div>
            
            <div class="no-result-found xlDesign" ng-show="hotelList.HotelList.length == 0">
                <div class="alert text-center">
                    <div class="text-1">
                        <i class="fa fa-warning red"></i> <b>Sorry! No Result Found</b>
                    </div>
                    <div class="text-2 red">
                        Let Our Agents Help You Find The Best Hotel Option!
                    </div>
                  
                    <div class="call-now">Now Call Toll Free
                        <a href="tel:+44-800-972-3035" class="red">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <b>+44-800-972-3035</b>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="row" ng-show="loadMore">
                <div class="col-sm-12"><button ng-click="loadMoreResults()" class="btn hotel-btnShowMore">Show More</button></div>
            </div>
            <div class="separator"><!-- separator --></div>
        </div>

        <!--Start Right Container -->
        <div id="htlRightContainer" class="col-lg-3 col-xs-12 hidden-xs hidden-sm hidden-md">
            <jsp:include page="components/itinerary.jsp" /> 
            <div class="separator"><!-- separator --></div>
            <div class="carRightCtrl">
                <!--Start Alert Msg -->
                <div class="boxSec">
                    <ul class="list-group bookConf">
                        <li class="list-group-item red"><strong>Book with Confidence </strong></li>
                        <li class="list-group-item list"><i class="fa"></i>Best Purchase Guarantee!</li>
                        <li class="list-group-item list"><i class="fa"></i>All discounts Updated Daily</li>
                        <li class="list-group-item list"><i class="fa"></i>24*7 Customer Service</li>
                        <li class="list-group-item list"><i class="fa"></i>Protected & Safe Booking</li>
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
        <h1>${searchHotelRequest.address.city}, ${searchHotelRequest.address.country}</h1>
        <div class="duration">
          <fmt:parseDate value="${searchHotelRequest.checkInDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  <fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
		  ${sdate}
            <i class="fa fa-long-arrow-right"></i>
          <fmt:parseDate value="${searchHotelRequest.checkOutDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  <fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
             ${sdate}
        </div>
        <div class="guest">
            ${hotelSearch.guest}
        </div>
        <h2>Please Wait...</h2>
        <div class="text">While Travelopick is Searching for the best hotel deals</div>
    </div>
</div>
</loading>

<jsp:include page="components/footer/footer.jsp" /> 
<!-- Map Popup -->
<div class="container-fluid htl-detail-component htl-map-component" id="htlMapDiv" style="display:none">
    <i class="fa fa-close cr-closeBtn cursor btn htlMapClose"></i><!-- Close Button -->
    <div id="htlMap" style="width:100%;height:100%;">Map Here</div>
</div> 
<div class="container-fluid htl-detail-component htl-map-component" id="htlImgDiv" style="display:none">
    <i class="fa fa-close cr-closeBtn cursor btn htlMapClose" ></i><!-- Close Button -->
     <div class="text-center carousel-show-image" id="carousel-inner"></div>
</div>
<span style="display:none;"><input type="radio" id="protectYes" checked></span>

<ul class="list-inline mobile-link-tab visible-sm visible-xs">
    <li class="pull-left"><a id="htlFilterClick" href="">Filter</a></li>
    <li class="pull-left"><a id="htlPSummaryClick" href="">Trip Summary</a></li>
    <li class="pull-left"><a href="javascript:void(0)">
            <div class="p-total">Total Price : <i class="fa fa-<c:out value="${dollar}"/>" ></i><span id="finalTotalPriceMobile">0.00</span></div>
    </a></li>
    <li class="gotoTop pull-right"><a id="htlPSummaryClickArrow" href=""><i class="fa fa-arrow-up"></i></a></li>
</ul>

<!-- <script type="text/javascript" src="/resources/js/crossell/crosssell-carScript.js"></script> -->
<script type="text/javascript" src="/resources/js/crossell/crosssell-hotelScript.js"></script>

<script src="/resources/js/map.js?asd"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJnw13NgUPpHAjBZthGDxTj4vXnbuW3A&libraries=places&callback=initMap"></script>
</body>
</html>