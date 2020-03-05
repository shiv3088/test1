<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>

<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 

<!doctype html>
<html lang="en" data-ng-app="appHotel">
<head>
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title data-alt-title="Don&#39;t forget to book">Hotel Search | ${data.siteName}</title>
<meta name="keywords" content="cheap hotels, hotel booking, hotel booking site, hotel reservations, online hotel booking, find hotel deals." />

<meta name="description" content="Discover and book cheap hotels with ${data.siteName}. Book now and save big with our discounted prices on hotel reservations." />

<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!-- start travel css -->
<link href="/resources/common/css/bootstrap.min.css?23012018" rel="stylesheet">
<link href="/resources/us/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/aminities-icons.css" rel="stylesheet">
<link href="/resources/common/css/hotel-style.css?10072019" rel="stylesheet">
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script>
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.sticky.js"></script>
<script src="/resources/lib/angular/angular.js"></script>
<script src="/resources/js/ui-bootstrap-tpls-0.10.0.js"></script> 
<script src="/resources/js/angular-initial-value.min.js"></script>
<script type="text/javascript" src="/resources/js/angular-local-storage.js"></script>
<script type="text/javascript"  src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-sanitize.js"></script>
<script src="/resources/js/modernizr.min.js"></script> 
<script src="/resources/js/respond.min.js"></script> 
<script src="/resources/lib/dirPagination.js"></script>
<script src="/resources/js/angular-animate/angular-animate.min.js" ></script>
<script src="/resources/js/toaster.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.js"></script>
<script src="/resources/js/hotelResult_1.4.1.js?10072019"></script>
<script src="/resources/js/hotel-custom.js?18102017"></script>
<script src="/resources/js/jquery-exit-popup_1.0.js"></script> 

 
<script>   

/* function display()
	{
	  $('.big_image').on('mouseenter','img',function(){ 
				 var imgsrc=$(this).attr('src');  
				$('.image_popup').remove();           
				$(this).parent().parent().parent().after().append("<div class='image_popup'><img src='"+imgsrc+"'></div>");
				
			})
	
		//image zoom js
		$('.big_image').on('mouseout','img',function(){ 
				 var imgsrc=$(this).attr('src');  
				$('.image_popup').remove();           
				
			})
	}; */
	$(document).ready(function(){
		$('.sortingBox li').click(function(){
		$('.sortingBox li').removeClass('active');
		$(this).addClass('active');
	});
//

$(window).scroll(function() {
       $(this).scrollTop() > 50 ? $("#go-top").fadeIn(200) : $("#go-top").fadeOut(800)
    }); 

$("#go-top").click(function(e) {
        e.preventDefault(), $("html, body").animate({
            scrollTop: 0
        }, "2000", "swing")
    });
//

});      


var originalTitle = document.title,
    blurredTitle = document.getElementsByTagName('title')[0].getAttribute('data-alt-title');

window.onblur = function () {
  document.title = blurredTitle;
}

window.onfocus = function() {
  document.title = originalTitle;
}

</script>

<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body  class="hotelsection" data-ng-controller="HotelController">

<input type="hidden" value="listing" id="pagetype">

<div align="center" id="divSessionOut" style="display:none; " class="popup-product">
<div id="fadebackground"></div>
<div class="session-exp">
	<h3>Session Expired!</h3>
	<p>Hotel prices may change frequently owing to demand & availability. </br>Start a new search to view the best hotel.</p>

<div class="clock_tym"> <i class="fa fa-clock-o" aria-hidden="true"></i>  </div>

<div align="center" valign="middle"><!-- <a href="#" onClick="submitHotelForm();" class="btn btn-primary btn-lg searchbtn">Search Again</a>
&nbsp; &nbsp;  OR &nbsp; &nbsp;  --> 
<a href="/" class="btn btn-primary btn-lg searchbtn">Go to Home</a></div>
</div>
</div>

<div id="myModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                
                <h4 class="modal-title">Session Expired!</h4>
            </div>
            <div class="modal-body">
				<p>Hotel prices may change frequently owing to demand & availability. </br>Start a new search to view the best hotel.</p>
                <div class="clock_tym"> <i class="fa fa-clock-o" aria-hidden="true"></i>  </div>

				<div align="center" valign="middle">
				    <a href="/" class="btn btn-primary btn-lg searchbtn">Go to Home</a>
				</div>
            </div>
        </div>
    </div>
</div>


<div  id="HotelController" data-ng-cloak>


<div class="mapApp map-container" style="display:none">
    <div class="row">
       <div class="col-xs-6"><strong>Location Map</strong></div>
        <div class="col-xs-6 text-right">
            <i class="mapClose fa-times-circle fa"></i>
        </div>
    </div>
    <div id="htlMap" style="width:100%;height:350px"></div>
</div>
 
<!-- Main Section -->
<div class="main">
   <c:forEach items="${hotelListWrapper}" var="search" varStatus="se" >
		<div class="header-heading3">
		
		<c:set var="tRooms" value="${search.rooms.size()}" scope="page"/>
		<c:set var="depin" value="${search.checkInDate}" scope="page"/> 
		<c:set var="depout" value="${search.checkOutDate}" scope="page"/>
		<c:set var="searchLocation" value="${hotelSearchWrapper.stayCity}" scope="page"/>
	    <c:set var="agentId" value="${search.agentID}" scope="page"/>
						
		<c:forEach items="${search.rooms}" var="room" varStatus="pax" >
		    <input type="hidden" id="adultCount${pax.index}" value="${room.adults }" />
		    <input type="hidden" id="childCount${pax.index}" value="${room.children.size() }" />
		   <c:set var="childsCount" value="${childsCount+room.children.size()}" scope="page"/>
		   <c:set var="adultsCount" value="${adultsCount+room.adults}"  scope="page"/>
		    <c:forEach items="${room.children}" var="child" varStatus="paxChild" >
		  	<input type="hidden" id="childAge${pax.index}${paxChild.index}" value="${child}" />
		    </c:forEach>
		    		    
		 </c:forEach>
		
		</div>
	</c:forEach>
  
 

  <!-- Main Section -->
  
  <div class="mobile_fixed_header">
  
  <!-- Header Section Start -->
  <div id="headerrs" style="display:none">
    <jsp:include page="result_header.jsp"></jsp:include>
  </div>
  <!-- Header Section End -->
  
   <!-- Mobile itenery -->

<div class="mobile-itenery visible-sm visible-xs" id="mobile-itenery" data-ng-show="list.length" >
    <div class="result-itenery" data-ng-hide="mobitenery"> 

<span class="btn modifySearchMobile"><i class="fa fa-pencil"></i> Modify</span> 
  
		<div class="location">${searchLocation}</div>
		
		<c:set var="checkin" value="${fn:split(depin,'T')}"/>
        <fmt:parseDate value="${checkin[0]}" var="fromDate" pattern="MM-dd-yyyy" />
        		
		<c:set var="checkout" value="${fn:split(depout,'T')}"/>
        <fmt:parseDate value="${checkout[0]}" var="toDate" pattern="MM-dd-yyyy" />        
        
		<div class="date">
		
		  <fmt:formatDate value="${fromDate }" pattern="EEE, MMM dd, yyyy" /> - <fmt:formatDate value="${toDate }" pattern="EEE, MMM dd, yyyy" /></div>
		
		<div class="date">${tRooms} Room ,${adultsCount} Adults <c:if test="${childsCount != 0}">,${childsCount} Child</c:if></div>
		
                                    

        <!--Itenery End -->

    </div>
                                    
                                    


   <div class="mobile_filter_strip container" data-ng-hide="mobitenery">
            <div class="row">
            <div class="text-center">
                <span  class="sortby-price"><i class="fa fa-sort-amount-asc"></i>
                 
				 <select ng-model="sortListMob" ng-change="sortResultMobile()">
				 	<option value="sort by">Sort By</option>
					<option value="SrNo">Recommended</option>
					<option value="LowRate">Price</option>
					<option value="Rating">Stars</option>
					<!-- <option value="tripAdvisorRating">Guest Rating</option> -->
					<option value="proximityDistance">Distance</option>
					
				 </select>
				 
                    </span>			
                
                 <span class="btn modifyFilterMobile" ><i class="fa fa-filter"></i> Filter</span> 
                
                

            </div>
        </div>
    </div>
	
</div>

<!-- Mobile itenery -->
</div>

  <c:forEach items="${hotelListWrapper}" var="search" varStatus="se" >
  	<loading>  	
  		<div class="result-mid-sec">  
		<!--<div class="luf-icon"><div class="luf-loader"></div></div>-->
        <div style="width: 100%;float:left; text-align: center; margin-top: 20px;"><img src="/resources/travelopick/images/logo.png" /></div>    
        <div style="width: 100%; float: left; clear: both;"><img src="/resources/images/loadingresult.gif" width="110" height="110"  /></div>
		
		<div class="location">${hotelSearchWrapper.stayCity}</div>
		
		<c:set var="checkin" value="${fn:split(depin,'T')}"/>
        <fmt:parseDate value="${checkin[0]}" var="fromDate" pattern="MM-dd-yyyy" />
        		
		<c:set var="checkout" value="${fn:split(depout,'T')}"/>
        <fmt:parseDate value="${checkout[0]}" var="toDate" pattern="MM-dd-yyyy" />
        
		<div class="date">
		
		  <fmt:formatDate value="${fromDate }" pattern="EEE, dd MMM, yyyy" /> - <fmt:formatDate value="${toDate }" pattern="EEE, dd MMM, yyyy" /></div>
		
		<div class="date">${tRooms} Room ,${adultsCount} Adult(s) <c:if test="${childsCount != 0}">,${childsCount} Child</c:if></div>
		<div class="wait"> Please wait,<br>
		While ${data.siteName} is searching for the best hotel <span class="dot">deals<span>.</span><span>.</span><span>.</span></span></div>
		</div>
  	
  	</loading>
  
  <!-- hotel main container start -->
  <div id="resultsmainCntr">
  	
	
	<!--  / Modify Search Box \ -->
	
	 <div class="modify-search">
	 
	 <div class="container">
		 
		 <div class="filter-main-head">

		Modify Your Search 
		<a href="#" class="close-sidebar fa fa-close"></a>
	
	</div>
		
		<div class="holder">
		
	 	 <form:form method="POST"  action="/hotelSearch" modelAttribute="hotelSearch" id="searchHotel"  placeholder="Select Location"> 
		
			<div class="row form-row">
				
				<div class="col-md-3 col-sm-12 col-xs-12 no-padding_left">
					<form:input class="input-field input_cont x onX" path = "stayCity"  autocomplete="off" placeholder="Select Location"/> 
				</div>
		
		<form:input type="hidden" data-ng-model="locationid" path="locationid" />
				
				<div class="col-md-9 col-sm-12 col-xs-12 no-padding ">
					
					<div id="checkInDate_new" class="col col-md-3 col-sm-12 col-xs-12 form-row">
						<form:input readonly="true" class="input-field" placeholder="Check In" path="checkInDate" />
		
						<span class="input-icon fa fa-calendar"></span>
			
					</div>
					<div id="checkOutDate_new" class="col col-md-3 col-sm-12 col-xs-12 form-row">
					
						<form:input  readonly="true" class="input-field" placeholder="Check Out" path="checkOutDate" />
		
			<span class="input-icon fa fa-calendar"></span>
			
					</div>
					<div class="col col-md-3 col-sm-12 col-xs-12 form-row">
						<input type="hidden" id="adultNo" value="1"/>
						<input type="hidden" id="childNo" value="0"/>
						<form:input type="text" class="input-field room-input dat" readonly="true" path="guest" id="guest" style="cursor:pointer" placeholder="1 Room, 1 Adult, 0 Child" />
						<div class="kids_group_detail">
			
			<span class="fa fa-caret-up up_arrow"></span>
			
			<div class="kids-row" id="cust0">
				
				<!-- <div><a  href="#" class="fa fa-close" id="close-div"></a></div> -->
				<!-- <label class="label" data-ng-model="room" id="roomNo0">Room 1</label> -->
				<div class="col">
				
				<label class="label2">Adults</label>
				
					<span class="select">
					  <form:select path="rooms[0].adults" items="${model.roomNo}" id="roomsadults" class="form-control"  alt="Select Adults" onchange="addAdult(this);" title="Select Adults"/>
					</span>
				</div>
				<div class="col">
				<label class="label2">Children</label>
					<span class="select">
					<form:select path="rooms[0].child" items="${model.childNo}" id="rooms0child"  class="form-control"  alt="Select Child" onchange="addAge(this);" title="Select Child"/>
					</span>
				</div>
				
				<div class="right" id="childAge0">					
					<label id="age0" class="label2" style="display:none;">Children's age</label>					
					<div class="col1" id="00" style="display:none;">
						<span class="select">
						<form:select path="rooms[0].children[0].age"  id="rooms0-children0-age" items="${model.childAge}" class="form-control"  alt="Select Child Age" title="Select Child Age" />
						</span>
					</div>
					
					<div class="col1" id="01" style="display:none;">
						<span class="select">
						<form:select path="rooms[0].children[1].age" id="rooms0-children1-age" items="${model.childAge}" class="form-control"  alt="Select Child Age" title="Select Child Age" />
						</span>
					</div>
					
					<div class="col1" id="02" style="display:none;">
						<span class="select">
						<form:select path="rooms[0].children[2].age" id="rooms0-children2-age" items="${model.childAge}" class="form-control"  alt="Select Child Age" title="Select Child Age" />
						</span>
					</div>
					
					<div class="col1" id="03" style="display:none;">
						<span class="select">
						<form:select path="rooms[0].children[3].age" id="rooms0-children3-age" items="${model.childAge}" class="form-control"  alt="Select Child Age" title="Select Child Age" />
						</span>
					</div>
					<div class="col1" id="04" style="display:none;">
						<span class="select">
						<form:select path="rooms[0].children[4].age" id="rooms0-children4-age" items="${model.childAge}" class="form-control"  alt="Select Child Age" title="Select Child Age" />
						</span>
					</div>					
				</div>
			</div>
						
			
		 <form:hidden path="room" value="${tRooms}" id="rooms"  />
			<div class="btn-row">
				
				<a href="#" class="add_room pull-left " id="addroom" alt="Select Rooms" title="Select Rooms"><span class="fa fa-plus"></span>Add room</a>
				<a href="#" class="add_room pull-left" id="removeroom" style="display: block;"><span class="fa fa-close"></span>Remove Room</a>
				<a href="#" class="confirm_room pull-right"><span class="fa fa-check"></span>Confirm</a>
				
			</div>
			
			
		</div>
		</div>
					<div class="col col-md-3 col-sm-12 col-xs-12 text-right no-padding_right form-row">
					
						<button class="button"  onclick="return submitHotelForm();" value="Search Hotels">MODIFY SEARCH</button>
					
					</div>
					
				</div>
				
		</div>
		<div class="row" id="sameSearch" style="display:none;">
                        <ul class="list-inline">
                          <li style="color:#ff0000">Please change your search criteria before clicking the "Search" button.</li>
                        </ul>
          </div>
				
		</form:form>		
		</div>
		
		</div>
		
	 </div>
	 
	 <!--  / Modify Search Box \ -->
	
	<div class="hotelMainCntr">
	<!--  / Left container \ -->
	
	<!--  / Left container \ -->
	
	<!--  / Center container \ -->
	<div class="centerCntr">
		
		<!--  / Sorting Box \ -->
		<div class="sortingBox">
			 <ul class="list-inline sortingBox">
                <li class="sort hidden-xs">Sort By:</li>
               <li class="active" ng-class="{active : activeMenu === 'SrNo'}" ng-click="sort('SrNo')">
                <a href="#"> Recommended</a>
                </li>
                <li ng-class="{active : activeMenu === 'LowRate'}" ng-click="sort('LowRate')" >
                <a href="#" class="priceSort"> Price</a>
                </li>
                <li><a href="#" data-ng-click="sort('Rating')">Stars</a></li>
                       
                <!-- <li ng-class="{active : activeMenu === 'PromoOffer'}" ng-click="sort('PromoOffer')">
                <a href="#"> Special Offers</a>
                </li>
               <li ng-class="{active : activeMenu === 'tripAdvisorRating'}" ng-click="sort('tripAdvisorRating')">
                <a href="#" class="priceSort "> Guest Ratings</a>
                </li>-->
                <li ng-class="{active : activeMenu === 'proximityDistance'}" ng-click="sort('proximityDistance')">
                <a href="#" class="priceSort"> Distance</a>
                </li>
            </ul>			 				        	        	      	       
		</div>
		<!--  / Sorting Box  \ -->
		
		<div class="alert alert-info" role="alert" ng-if="isSoldOut">
			<strong>Oops!</strong>{{soldOutMsg}}
		</div>
		
		<div class="resultsHolder row-flex" data-ng-if="list.length > 0">
		<!--  / Results Box \ -->
		<b> {{filtered.length}} Results Found <!--Hotels Found in ${search.address.city}--></b>
		<!--<h4 class="other" data-ng-class="{'other1': isActive(hotel.Active)}">Other great available hotels</h4>-->
	
             <div style="width: 100%;float:left; text-align: center; margin-top: 55px;"    ng-show="filtered.length == 0">
             <div style="width: 380px;background: #efefef;margin: auto;padding: 25px;border-radius: 10px;">
                <div style="width:100%; float:left; font-size: 24px;color: #4863db;;"> <strong>Sorry!</strong> No Result found for selected criteria.</div>
                <div  style="width:100%; float:left; font-size: 14px;font-weight: 600;">Please apply more or change filters.</div>
             <div style="clear:both;"></div>
             </div>
</div>
        
            
            
		 <div class="resultsBox" data-ng-class="{'active1': isActive(hotel.Active)}"  ng-repeat-start="hotel in filtered = (list | filter:priceRange | filter:filterByStar | filter:filtersHotel | filter:filterByAmenties | orderBy:sortKey:reverse) | limitTo: paginationLimit()">	
					
			
			
				<div class="zoom_image">
				<div class="image">
				<!-- Lat>>>{{hotel.Address.Latitude}} >>>>>> Long >>>{{hotel.Address.Longtitude}}<br/> -->
				    <a class="big_image">
					      
			             <img class="noImage" ng-src="{{hotel.ThumbNailUrl}}" onerror="this.parentNode.removeChild(this);" />
			            </a>			
									
				</div>
				
				
					
				</div>
			
				<div class="detail">
					
					<div class="left">						
	
					<h2 title="{{hotel.HotelName}}"><span style="cursor: pointer;" >{{hotel.HotelName}}</span></h2>
						
					<div class="rating htl-map" >
							<span class="stars"><span data-ng-style="{'width': getStars(hotel.Rating)}"></span></span>
							
							 
                             <span data-lattitude="{{hotel.Address.Latitude}}" data-longitude="{{hotel.Address.Longtitude}}" data-hotel-name="{{hotel.HotelName}}" data-address="{{hotel.Address.CompleteAddress}}" class="mapLink">
                             <i class="fa fa-map-marker"></i> <b>Map</b></span>

						
							<c:if test="${agentId != 0 }">
							    <span data-ng-if="hotel.HotelSupplier == 32">-Hotelbeds</span>
							    <span data-ng-if="hotel.HotelSupplier == 33">-Tourico</span>
							    <span>averageBaseRate = {{hotel.Rooms[0].hotelFare.averageBaseRate}}</span>
							    <span>averageRate = {{hotel.Rooms[0].hotelFare.averageRate}}</span>
							    <span>averageRateWOMarkup = {{hotel.Rooms[0].hotelFare.averageRateWOMarkup}}</span>
							    <span>avgPerRoomPerNightTax = {{hotel.Rooms[0].hotelFare.avgPerRoomPerNightTax}}</span>
							    
							    <span>totalMarkup = {{hotel.Rooms[0].hotelFare.totalMarkup}}</span>
							    <span>totalServiceFee = {{hotel.Rooms[0].hotelFare.totalServiceFee}}</span>
							</c:if>
							
							 
						</div>
						<div class="rating" >
							<span >Distance From {{distanceFrom}} : {{hotel.proximityDistance | number : 2}} mi</span>
						</div>
						
                           <div style="padding:5px 0px 0px 0px; width:100%;" class="hidden-xs" data-ng-if="hotel.tripAdvisorRating != null && hotel.tripAdvisorRating != 0">
						   <span class="tripadvisor" >						  
							  <img src="/resources/images/ratingReview.png"> <span class="advisorCircle alignright"><span data-ng-style="{'width': getStars(hotel.tripAdvisorRating)}"></span></span>
							  
								<!-- <span data-ng-if="hotel.tripAdvisorRating == 1">Poor</span><span data-ng-if="hotel.tripAdvisorRating == 1.5">Poor</span><span data-ng-if="hotel.tripAdvisorRating == 2">Average</span><span data-ng-if="hotel.tripAdvisorRating == 2.5">Average</span><span data-ng-if="hotel.tripAdvisorRating == 3">Good</span><span data-ng-if="hotel.tripAdvisorRating == 3.5">Good</span><span data-ng-if="hotel.tripAdvisorRating == 4">Very Good</span><span data-ng-if="hotel.tripAdvisorRating == 4.5">Very Good</span><span data-ng-if="hotel.tripAdvisorRating == 5">Superb</span> {{hotel.tripAdvisorRating}}/5</span> -->
                                <span class="hidden" data-ng-if="hotel.tripAdvisorReviewCount != '0'" style="display: inline-block;margin-left:7px;"> <a href="${thisHotel.getHotel().getTripAdvisorRatingUrl()}" style="color:#333333;text-decoration:underline;" target="_blank"> {{hotel.tripAdvisorReviewCount}} Reviews </a></span>
								</span>
                           </div>
                                                
						<div class="location"><span class="fa fa-map-marker location-icon"></span>{{hotel.Address.CompleteAddress}}</div>
						<div class="offer-container" data-ng-if="hotel.Rooms.hotelFare.offers.length > 0">
						<a href="javascript:void(0);" class="pull-left offer_policy">special offer</a>
								
								<div class="show_policy">
								 <a href="javascript:void(0);" class="close_tooltip">X</a>
								 <span class="arrow"></span>
							      <i ng-repeat="offers in hotel.Rooms.hotelFare.offers"> {{offers}} </i>								  
								</div>
								
						 </div>  
                         <!-- <span class="free-cancel"><i class="fa fa-check"></i> Free Cancellation</span> -->
						<div class="hidden-xs breif_Discription" data-ng-if="hotel.Description != '' && hotel.Description != null"><span data-ng-bind-html="hotel.Description | limitTo: 120 | trusted "></span><a href="#" data-ng-click="moveDetailsPage(hotel.HotelId)" class="more">more...</a></div>
						
						<ul class="facility">
							
							<c:set value="0" var="count" />
							
							<li data-ng-repeat="amen in hotel.Amenties">
							   
							   <c:if test="${count < '3' }">
									 <span class="icon icon-{{getReplace(amen) | lowercase}}"></span>{{amen}}
									 
									<c:set var="count" value="${count+1}"/>
									
								  
							    </c:if>
							</li>
						
							
						</ul>
						
						<div class="hotel-offers " data-ng-if="hotel.IsPromoAvailable">
                    	<div class="offer-txt" ng-if="hotel.PromoTitle.indexOf('-') > -1" title="{{hotel.PromoDescription}}">
                    		{{hotel.PromoTitle.split('-')[0]}}<br/>                                                	
                            <b>{{hotel.PromoTitle.split('-')[1]}}</b>
                        </div>
                        <div class="offer-txt" ng-if="hotel.PromoTitle.indexOf('-') == -1" title="{{hotel.PromoDescription}}">{{hotel.PromoTitle}}<br/> <b></b> </div>
                     </div>
						
					</div>
					
					<div class="right" style="cursor: pointer;" data-ng-click="moveDetailsPage(hotel.HotelId)">
						<!-- <div class="tripadvisor" data-ng-click="tripAdvisorRating(hotel.tripAdvisorRatingUrl)"> -->
						
						<span data-ng-if="hotel.HighRate > hotel.LowRate">
							<!-- <span class="discount"><i class="fa fa-{{dollar}}" ></i>{{hotel.HighRate | number : 2}}</span> -->
							<span class="price"><i class="fa fa-{{dollar}}" ></i>{{hotel.LowRate | number : 2}}</span>
						</span>
						
						<span data-ng-if="hotel.HighRate <= hotel.LowRate">
							<span class="price"><i class="fa fa-{{dollar}}" ></i>{{hotel.LowRate | number : 2}}</span>
						</span>
						
						<small>average/ night</small>
						
						<a hreaf="#" class="select-button margin-top hidden-xs">Select <i class="fa fa-angle-right"></i> </a>
						<span style="color:#ffffff;font-size: 10px; line-height:1;display:block;" class="hidden-xs">HP-{{hotel.HotelSupplier}} HI-{{hotel.HotelId}} CHI-{{hotel.CFFHotelID}} HR-{{hotel.HotelRanking}} ADBR-{{hotel.Rooms[0].hotelFare.averageDBaseRate}} SCDT-{{hotel.Rooms[0].hotelFare.surchargeDTotal}}</span>
						
					</div>
	
					
				</div>
			
			<div class="clearfix"></div>
			
			  
			
		</div>
		<!-- banner code start 
		 <div  class="no-padding" style="margin-bottom: 16px;" ng-if="$index == 2">
		                		<div class="results_add hidden-xs"> <a href="/car-supplier/{{showBanners}}" onclick="callAPI('C-H-LSUB','3');" target="_blank"> <img src="/resources/car/images/banner/{{showBanners}}-Banner.jpg" class="img-responsive"/> </a> </div>
		                		<div class="results_add visibal-xs hidden-sm hidden-md hidden-lg">  <a href="/car-supplier/{{showBanners}}" onclick="callAPI('C-H-LSUB','3');" target="_blank"> <img src="/resources/car/images/banner/{{showBanners}}-Banner.jpg" class="img-responsive"/> </a></div>
                        	</div>
			<div class="clearfix"></div>-->
			<!-- banner code end -->
			
		 <div class='other other1' ng-show='isActive(hotel.Active)' ng-repeat-end >
		 
		<h4 ng-show='filtered.length > 1'>Other great available hotels</h4>
		 </div>
		
		
			
		<!--  / Results Box  \ -->
		<!-- <dir-pagination-controls max-size="5" direction-links="true" boundary-links="true" ></dir-pagination-controls> -->
		 <div class="clearfix"></div>
		 
		 <div ng-show="filtered.length > 10" id="loadmore">
		 	
			<div class="col-sm-12 more_results"   ng-show="hasMoreItemsToShow() && filtered.length > 10" style="cursor:pointer;" ng-click="showMoreItems()">Load More Results</div>
			
		 </div>
	</div>
	
	
	<!--<div class="resultsHolder row-flex" data-ng-if="list.length == 0">
	   <div class="resultsBox">
	     <div class="detail" style="text-align: center;">
	      <p style="color:#ea0000; font-size:16px;"> No Result Found!</p><br/>
	      <p style="color:#ea0000; font-size:16px;">Please try your request again.</p>
	     </div>
	   </div>
	 </div>	-->
         <div style="width: 100%;float:left; text-align: center; margin-top: 55px;"   data-ng-if="list.length == 0">
             <div style="width: 380px;background: #efefef;margin: auto;padding: 25px;border-radius: 10px;">
                <div style="width:100%; float:left; font-size: 24px;color: #4863db;;"> <strong>Sorry!</strong> No Result found</div>
                <div  style="width:100%; float:left; font-size: 14px;font-weight: 600;">Please try your request again.</div>
             <div style="clear:both;"></div>
             </div>
</div>
	</div>
	<div class="leftCntr" data-ng-show="list.length">
	
			
		<!--  / Filter head \ -->
		<div class="filter-main-head">

		Filters
		<a href="#" class="close-sidebar fa fa-close"></a>
	
	</div>
		<!--  / Filter head \ -->
		
		<div class="holder">
		
			<!-- Mobile tab-->
		<ul class="filterTabs visible-xs">
	
		<li class="active"><a data-toggle="tab" href="#tab-1"><i class="fa fa-building-o" aria-hidden="true"></i> Hotel</a></li>
		<li><a data-toggle="tab" href="#tab-2"><i class="fa fa-money" aria-hidden="true"></i> Price </a></li>
		<li><a data-toggle="tab" href="#tab-3"><i class="fa fa-star-o" aria-hidden="true"></i>  Rating</a></li>
		<li data-ng-if="amentiesList.length != 0"><a data-toggle="tab" href="#hotel-sidebarsticky"><i class="fa fa-shower" aria-hidden="true"></i> Amenities</a></li>
	
		</ul>

		<!-- Mobile tab-->
		<div class="clear"></div>
	
		
		<div class="filter-head">
		
		<h3 class="hidden-xs"><i class="fa fa-filter"></i> Filter By </h3>
			
		<p class="clearfilter" style="cursor:pointer" id="clearAll" data-ng-click="clearAllSelect();">Clear All</p>
			
		</div>
		
		   <div class="tab-content">
		<!--  / Filter Box \ -->
		
		<div id="tab-1" class="filterBox tab-pane active">
			
			<h4 class="head">Hotel Name</h4>
			
			<div class="block">
				
				<div class="form-row">
				
				<input type="text" class="input-field hotelName" placeholder="" id="hotelFilter" data-ng-model="selected" typeahead="hotel for hotel in hotelList | filter:$viewValue | limitTo:5" typeahead-editable="false" typeahead-min-length="1" typeahead-on-select="onSelect($item, $model, $label)"/>
				
				</div>
				
				<input type="button" id="gobtn" disabled="true" data-ng-click="filterByHotelName();" value="Go" class="go-btn" />				
				
			</div>
			
			</div>
			<!-- ---------PRICE RANGE------------------ -->
			
			<input type="hidden" id="lowerValue" value="0.0" />
			<input type="hidden" id="MaxValue" value="5000.0" />
			
			<div id="tab-2" class="filterBox tab-pane">
			<h4 class="head">Price Range</h4>			
			
			<div class="block">
				
				<!-- <input type="text" class="max-range" id="amount" readonly > -->
				<div class="pr-range"><span class="min-price-label min-range"></span> <span class="max-price-label max-range pull-right"></span> </div>
				<div id="price-range" class="slider-range"  data-ng-model-low="lower_price_bound" data-ng-model-high="upper_price_bound">
				  <div class="clearfix"></div>
				</div>				
				
			</div>
			
			</div>
			<!-- ---------PRICE RANGE END ------------- -->
		
			
			<div id="tab-3" class="filterBox tab-pane" data-ng-if="list.length > 0">
			<h4 class="head">Star Rating</h4>
			
			<div class="block1">
								 
			 <ul class="checkbox rating ">
			 
			    					
					<li class="col-xs-12" data-ng-repeat="star in starList">
					 <!--  <span data-ng-if="star.id != '0'"> -->
						<label class="pull-left">
						
							<input class="stars" type="checkbox" name="check" data-ng-model="selectedStar[star.id]" />
							<span >
									<i class="fa fa-star" data-ng-repeat="i in repeater(star.id)"></i>
							</span>
						
						</label>
						<div class="pull-right">	[{{getRange(star.id,list,list.length)}}]</div>							
							
						<!-- </span> -->
					</li>
				</ul>
				
			</div>
			</div>
			
			<div id="hotel-sidebarsticky" class="filterBox tab-pane" data-ng-if="amentiesList.length != 0" >			
					
			<div data-ng-repeat="amen in amentiesList | limitTo: -1">
			
			<h4 class="head">Amenities</h4>
			
			<div class="block">
				
				<ul class="checkbox">
					
					<li class="col-xs-12" data-ng-repeat="amen in amentiesList">
						<label>
							<input type="checkbox" name="check" value="check1" data-ng-model="amen.on" data-ng-change="checkChange()" />
							
							<span class="text-light-gray">{{getCap(amen.name)}}</span>
						</label>
					</li>
				
					
				</ul>
				

			</div>
			
			
			
		</div>
		
		</div>
		
		<div class="ad-box hidden-lg">
           <!-- <img src="/resources/images/hotels/side-bnr-luf.jpg" alt="winter season"> -->
           <div class="winter-terms-info"> 
		   <div class="review"><a href="javascript:void(0);"><i class="fa fa-info"></i></a>
						<span class="promo-detail"><i class="arrow"></i> Discounts may vary depending upon the destination of travel, day of the week, time of booking, duration of stay, and availability of hotel. The discounts displayed here are subject to change any time without prior notice. The Total Minimum Booking Amount needs to be $99 for the discount to be applicable. The discount might vary based on the number of rooms booked. A maximum discount of $6 per room shall be available. <br>
						Book by Date- 28 Feb 2019  <br>            
                        Travel by Date- 31 Jul 2019 </span>
					</div>
		   
		   </div>
            </div>
			
		 <a href="javascript:void(0);" class="filterApply">Apply Filters</a>
		<!--  / Filter Box \ -->
		</div>
		
		</div>
		
	</div>
	<!--  / Right container \ -->
	<!--<div class="rightCntr">
		<div id="stickeradd">
	        
          <div class="ad-box">
           <img src="/resources/images/hotels/side-bnr-luf.jpg" alt="winter season">
           <div class="winter-terms-info"> 
		   <div class="review"><a href="javascript:void(0);"><i class="fa fa-info"></i></a>
						<span class="promo-detail"><i class="arrow"></i> Discounts may vary depending upon the destination of travel, day of the week, time of booking, duration of stay, and availability of hotel. The discounts displayed here are subject to change any time without prior notice. The Total Minimum Booking Amount needs to be $99 for the discount to be applicable. The discount might vary based on the number of rooms booked. A maximum discount of $6 per room shall be available. <br>
						Book by Date- 28 Feb 2019  <br>            
                        Travel by Date- 31 Jul 2019 </span>
					</div>
		   
		   </div>
            </div>
            
		</div>
		
	</div>-->
	<!--  / Right container \ -->
	</div>
	
	
	
  </div>
  <!-- hotel main container End -->
   </c:forEach>
  
  <div class="clearfix"></div>
  

  <!-- Exit popup -->
<div class="exit-popup-bg" id="exitpopup_bg"></div>

<div id="exitpopup" class="exit-pop-call"> 
	<div class="cross">x</div>
	
</div>
<!-- Exit popup -->




  <!-- Footer Section Start -->
  <div id="footerrs" style="display:none">
    <jsp:include page="hotel_footer.jsp"></jsp:include>
  </div>
  <!-- Footer Section End -->
</div>
<!-- Main Section -->
</div>

<div class="page_overlay"></div>
<div id="go-top"><i class="fa fa-angle-up fa-2x"></i></div>
   
<script type="text/javascript">
  $( document ).ready(function() {
    console.log( "ready!" );
    /* $('#ament').text( $('#ament').text().replace(/([a-z])([A-Z])/g,'$1 $2')); */
});

</script>

		

<script type="text/javascript">
 $(document).ready(function(){
 	 // CLEARABLE INPUT
	function tog(v){return v?'addClass':'removeClass';} 
	$(document).on('input', '.input_cont', function(){
		$(this)[tog(this.value)]('x');
	}).on('mousemove', '.x', function( e ){
		$(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');
	}).on('touchstart click', '.onX', function( ev ){
		ev.preventDefault();
		$(this).removeClass('x onX').val('').change();
	});
//

     
    
 });

 
  </script>
  

<script src="/resources/js/map.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJnw13NgUPpHAjBZthGDxTj4vXnbuW3A&libraries=places&callback=initMap"></script>
<script type="text/javascript" src="/resources/js/index_eng_min_1.4.js?10072019"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
<!-- End Google Map -->  


<!-- Facebook Pixel Code -->





</body>
</html>
