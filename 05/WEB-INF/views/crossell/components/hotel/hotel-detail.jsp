<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
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
 
<div class="hote-details" ng-show="hotel.ShowHotelDetails" ng-if="hotelDetailData != null && hotelDetailData != ''">
    <div class="htl-details-row">
        <h2 class="head">Available Rooms 
            <small class="pull-right fs12">Average Nightly Rate</small>
        </h2> 
        
        <div class="htl-available" ng-repeat="rooms in hotelDetailData.Hotel.Rooms">
            <!-- New Changes -->
			  
            <div class="row hotel-detail-offer">
                <div class="col-sm-6 col-xs-12">
                    <div><strong class="cffRed">{{rooms.roomFullName}}</strong> </div>
                    <div  class="cancellation-Policy"><strong>Cancellation Policy:</strong> {{rooms.cancellationPolicy}}</div>
                </div> 
				
				<!--Hotel Offers Start-->
				<div class="col-sm-3 col-xs-6 " style="padding-right: 0">
					<div class="promo-discount" ng-if="rooms.PromoDescription.length > 0">
						<a href="javascript:void(0);" class="offer_policy">{{rooms.PromoDescription[0].Code}}</a>
						<div class="show_policy">
							<span class="top-arrow"></span>
							{{rooms.PromoDescription[0].Name}}
						</div>
					</div>
				</div>
				<!--Hotel Offers End-->
				
                <div class="col-sm-2 col-xs-4 " style="padding-right: 0"> 
				<div class="text-right">
                    <span class="price"><i class="fa fa-<c:out value='${dollar}'/>" ></i>{{rooms.hotelFare.averageBaseRate * angularCurrency | number : 2}}</span>
				</div>                    
                </div>
                <div class="col-sm-1 col-xs-2 text-center" style="padding-left: 0">
                    <div class="cursor green" ng-if="$index == 0">
                        <div ng-if="hotelId == hotelDetailData.Hotel.HotelId">
                            <span class="price"></span>
                            <div class="inputSet2 radio include">
                                <label>
                                    <input type="radio" id="defaultRoomSelected" name="room" ng-model="roomButton" ng-click="selectHotelRoom(hotelDetailData.Hotel.HotelId,rooms.RoomTypeCode,rooms.RateCode);" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                        <div ng-if="hotelId != hotelDetailData.Hotel.HotelId">
                            <div class="inputSet2 radio include">
                                <label>
                                    <input type="radio" name="room" ng-click="selectHotelRoom(hotelDetailData.Hotel.HotelId,rooms.RoomTypeCode,rooms.RateCode);">
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="cursor" style="color:#52beaf" ng-if="$index > 0">
                        <div class="inputSet2 radio include">
                            <label>
                                <input type="radio" name="room" ng-click="selectHotelRoom(hotelDetailData.Hotel.HotelId,rooms.RoomTypeCode,rooms.RateCode);">
                                <span class="fs14"></span>
                            </label>
                        </div>
                    </div>
                </div>

                
            </div>

            <div class="row roomDiscription" style="display: none;">
                <div class="col-sm-12 col-xs-12">
                    <div class="room-discription">
                        <!-- <p>Room Details</p> -->
                        <div class="bulletedX">
                            <!-- <li ng-repeat="amenities in rooms.ValueAdds track by $index">{{amenities}}</li> -->
                            {{rooms.RoomDescription}}
                            <br>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    </div>

    <div class="htl-details-row" ng-if="hotelDetailData.Hotel.Description != null && hotelDetailData.Hotel.Description != ''">
        <h2 class="head">{{hotelDetailData.Hotel.HotelName}}</h2>

    <div class="col-sm-4 col-xs-12 hotel-img-block" style="padding-right: 0;">
            <div class="hotel-img"><img class="img-responsive" ng-src="{{hotelDetailData.Hotel.ThumbNailUrl.replace('http','https')}}" onerror="javascript:imgError(this,'/resources/assets/crosssell-images/no-image.png')"></div>
            <a href="" class="fCancel cursor red" ng-click="showMoreImagesDetails(hotel.IcePortalID,hotel.ThumbNailUrl.replace('http','https'))"><i class="fa fa-image"></i> See More Images</a>
        </div>
    <div class="col-sm-8 col-xs-12" style="padding-left: 0;">
            <p class="data text-justify padding"  ng-if="hotelDetailData.Hotel.Description != null || hotelDetailData.Hotel.Description != ''">
                <strong>Property Location : </strong> 
                {{hotelDetailData.Hotel.Description | trusted}} 
            </p>
        </div>
        
    </div>
    <div class="htl-details-row" ng-if="hotelDetailData.Hotel.AmentiesFull.length > 0">
        <h2 class="head">Hotel Amenities</h2>
        <ul class="list-inline htl-details-aminities">
            <li ng-repeat="amentie in hotelDetailData.Hotel.AmentiesFull"><i class="icon icon-{{getCap(amentie) | lowercase}}"></i> {{amentie}}</li>
        </ul> 
    </div>
</div>






<div class="show-more-rooms modal" id="showMoreRooms" role="dialog">
<div class="modal-dialog modal-lg">
<!-- Modal content-->
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close hotelImagesClose" data-dismiss="modal">&times;</button>
<h4 class="modal-title">{{hotelDetailData.Hotel.HotelName}}</h4>
</div>
<div class="modal-body text-center">

<div id="myCarousel" class="carousel slide">
<!-- Indicators -->
 <ol class="carousel-indicators">
<li ng-repeat="images in hotelDetailData.Hotel.HotelImage" data-target="#myCarousel" data-slide-to="{{$index}}" ng-class="{'active':$index == 0}"></li>

</ol> 

<!-- Wrapper for slides -->
                            <div class="carousel-inner htl-carousel-inner">


<div ng-repeat="images in hotelDetailData.Hotel.HotelImage" class="item" ng-class="{'active':$index == 0}">
                                    <img src="{{images}}" class="img-responsive" />

</div> 


</div>

<!-- Left and right controls -->
<a class="left carousel-control" href="#myCarousel" data-slide="prev">
<span class="fa fa-arrow-circle-left"></span>
<span class="sr-only">Previous</span>
</a>
<a class="right carousel-control" href="#myCarousel" data-slide="next">
<span class="fa fa-arrow-circle-right"></span>
<span class="sr-only">Next</span>
</a>
</div>


</div>
<div class="modal-footer">
<button type="button" class="btn btn-default hotelImagesClose" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>