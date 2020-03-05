<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ page trimDirectiveWhitespaces="true"%>

<!DOCTYPE html>

<html lang="en" data-ng-app="appHotelDet">
<head>
<!--[if lt IE 9]> 
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
	<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${detailPageContent.hotel.hotelName}</title>

<c:forEach items="${detailPageContent.hotelMetaInfo}" var="metainfo">
	<meta name="${metainfo.metaKey}" content="${metainfo.metaContentValue}">
</c:forEach>

<meta name="google-site-verification" content="V9YFZJy8QpVDF8LsvGdRg7Ec9eY-0lWEKH1tR4h33Hc" />
<meta name="msvalidate.01" content="810F3644AB49633270FA50B11816A103" />
<meta property="og:url" content="https://www.travelopick.com/">
<meta property="og:site_name" content="Travelopick" />
<meta property="fb:page_id" content="1012558378815065" />
<meta name="twitter:site" content="@Travelopick">
<meta name="twitter:creator" content="@Travelopick">
<meta property="og:title" content="Cheap Online Hotel Booking Site, Hotel Room Deals & Reservation" />
<meta name="twitter:title" content="Cheap Online Hotel Booking Site, Hotel Room Deals & Reservation" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:description" content="Find best hotel deals and cheap accommodations online with Travelopick, a discount hotel website where rooms are easily available at affordable prices." />

<!--Stylesheet-->
<link rel="icon" href="/resources/images/fav.ico"
	type="image/x-icon" />
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/hotel-amenites.css?2092018" rel="stylesheet">
<link href="/resources/us/css/jquery-ui.min.css?2010217" rel="stylesheet">
<link href="/resources/common/css/hotel-deplink.css?20185215" rel="stylesheet">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
<link href="https://plus.google.com/+Travelopick" rel="publisher">
<!-- start js -->
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/angular.js"></script>
<script src="/resources/flight-result/js/slick_carousel.js?19022018"></script>
<script src="/resources/js/travel.min.js"></script>
<script src="/resources/js/angular-initial-value.min.js"></script>

<!-- end js -->

</head>
<body class="hotel-detail-sec" data-ng-controller="HotelDetController">

	<jsp:include page="home_header.jsp"></jsp:include>
	<!-- Header Section End -->
	<!-- Main Section -->
	<div class="main">

	<div class="hotel-heading"> </div>
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
				
					<div class="bed-cram"><a href="/hotels">Hotel</a>&nbsp; &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; <a onClick="submitHotelForm2()">${detailPageContent.locationCriteria.city}</a>&nbsp;&nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp; &nbsp;<span>${detailPageContent.hotel.hotelName}</span>
					</div>
					<div class="hotel-name">
						<h3>${detailPageContent.hotel.hotelName} &nbsp;<span class="star">
							<span data-ng-style="{'width': getStars('<c:out value='${detailPageContent.hotel.getRating()}' />')} " title="${detailPageContent.hotel.getRating()}"></span></span> </h3>
						
						<p>
							<i class="fa fa-map-marker" aria-hidden="true"></i>
							${detailPageContent.hotel.address.address},${detailPageContent.hotel.address.city},${detailPageContent.hotel.address.country}
							<!-- <span>1-888-737-8675</span> -->&nbsp; &nbsp;|&nbsp; &nbsp;<a href="javascript:void(0);" onClick="showSec('location')">Map</a>
						</p>
					</div>
					<div class="section-view">
						<ul>
						    <li><a href="javascript:void(0);" onClick="showSec('findroom')">Find Room</a></li>
							<li><a href="javascript:void(0);" onClick="showSec('similar')">Similar Hotels</a></li>
							<li><a href="javascript:void(0);" onClick="showSec('near')">Near By Hotels</a></li>
							<li><a href="javascript:void(0);" onClick="showSec('about-hotel')">About Us</a></li>
							<li><a href="javascript:void(0);" onClick="showSec('amenities')">Amenities</a></li>
							<li><a href="javascript:void(0);" onClick="showSec('policies')">Policies</a></li>
						</ul>
					</div>
				</div>

				<div class="col-xs-12">
					<div class="row">
						<div class="col-sm-7 col-md-8 col-xs-12">
							<div class="slider-section">
								<div id="slider_main">
				                  <c:forEach items="${detailPageContent.hotel.hotelImage}" var="htimg">
					              <div class="item"><img src="${htimg}" onerror="this.onerror=null;this.src='/resources/images/coming-soon.jpg';" class="img-responsive" alt="${htimg}" /></div>
				                  </c:forEach>
				             </div>
				             <h5>Professional Photos (${detailPageContent.hotel.hotelImage.size()})</h5>
								<div id="slider_thumb">
								   <c:forEach items="${detailPageContent.hotel.hotelImage}" var="htimg">
									<div class="item"><img src="${htimg}" onerror="this.onerror=null;this.src='/resources/images/coming-soon.jpg';" alt="${htimg}" /></div>
								   </c:forEach>
								</div>
							</div>
						</div>

						<div class="col-sm-5 col-md-4 col-xs-12">
							<div class="slider-right-section">
								<div class="slider-right-section-bg">
								   <c:if test="${detailPageContent.hotel.getTripAdvisorRating()  != ''}">
									<div class="tripadvisor_text hidden-xs">TripAdvisor Traveler Rating </div>
									<div class="tripadvisor">
										<img src="/resources/images/hotels/adviser.png"> <span class="advisorCircle" ><span ng-style="{'width': getStars(${detailPageContent.hotel.getTripAdvisorRating()})}" title="${detailPageContent.hotel.getTripAdvisorRating()}"> </span>
										</span>
										
										<c:if test="${detailPageContent.hotel.getTripAdvisorRating() == '5.0'  || detailPageContent.hotel.getTripAdvisorRating() == '4.5' }">
											<span class="trip-rating">Excellent</span>										
										</c:if>					
										<c:if test="${detailPageContent.hotel.getTripAdvisorRating() == '4.0'  || detailPageContent.hotel.getTripAdvisorRating() == '3.5' }">											
												<span class="trip-rating">Very Good</span>											
										</c:if>					
										<c:if test="${detailPageContent.hotel.getTripAdvisorRating() == '3.0'  || detailPageContent.hotel.getTripAdvisorRating() == '2.5' }">											
												<span class="trip-rating">Good</span>											
										</c:if>					
										<c:if test="${detailPageContent.hotel.getTripAdvisorRating() == '2.0'  || detailPageContent.hotel.getTripAdvisorRating() == '1.5' }">											
												<span class="trip-rating">Average</span>											
										</c:if>							
										
										<span class="rating-text">${detailPageContent.hotel.tripAdvisorReviewCount} Reviews</span>
									</div>
									<!-- <div class="rating"><span ></span></div> -->
									
									</c:if>
									<ul class="hotel-icon"> 
										<c:forEach items="${detailPageContent.hotel.amenties}" var="amentie">
											<c:set var="ament_css" value="${fn:replace(fn:trim(fn:toLowerCase(amentie)),' ', '-')}"/>
											<li><i class="icon icon-${ament_css}" title="${ament_css}"></i></li>					
										</c:forEach>					
									</ul>
									<h2>Hotel Description</h2>
									<p>${detailPageContent.hotel.descriptionShort}..... <a href="#about-hotel">More</a></p>
								</div>

							</div>
						</div>


					</div>
				</div>

				<form:form method="POST"  action="/hotelSearch" modelAttribute="hotelSearch" id="searchHotel"  placeholder="Select Location">
				<div class="col-xs-12">
					<div class="serach-section" id="findroom">
						<h4>Find Room</h4>
						
						<form:hidden path="stayCity" value="${detailPageContent.locationCriteria.locationDisplay},${detailPageContent.locationCriteria.city},${detailPageContent.locationCriteria.state},${detailPageContent.locationCriteria.country}"/>
						<form:hidden path="locationid" value="${detailPageContent.locationCriteria.getLocationID()}"/>
						<form:hidden path="supplierId" value="0"/>
						<form:hidden path="cffHotelId" value="${detailPageContent.hotel.getCFFHotelID()}"/>
						
						<div class="serach-section-bg">
							<div class="col-sm-4 col-md-3 col-xs-12">
								<div id="checkInDate_new" class="calendar" >
									<form:input type="text" placeholder="Check In" class="form-control input-lg date-picker" path="checkInDate" id="checkInDate" readonly="true"/> <span
										class="calender-icon fa fa-calendar"></span>
								</div>
							</div>
							<div class="col-sm-4 col-md-3 col-xs-12">
								<div id="checkOutDate_new" class="calendar">
									<form:input type="text" placeholder="Check Out" class="form-control input-lg date-picker" path="checkOutDate" id="checkOutDate" readonly="true"/> <span
										class="calender-icon fa fa-calendar"></span>
								</div>
							</div>
							<div class="col-sm-4 col-md-4 col-xs-12">
								<input type="hidden" id="adultNo" value="1"/>
								<input type="hidden" id="childNo" value="0"/>
								<div class="guest">
									<form:input type="text" class="input-field room-input dat" readonly="true" path="guest" id="guest" style="cursor:pointer" placeholder="1 Room, 2 Adult, 0 Child" />
									<span class="user-icon fa fa-user"></span>
									<div id="chose" class="chose-filed" style="display:none;">
										<span class="fa fa-caret-up up-arrow"> </span>
										<div class="select-row" id="cust0">
											<div class="col">
												<label class="select-sec">Adults</label>
												 <span class="select"> 
												 <form:select path="rooms[0].adults" items="${model.roomNo}" id="roomsadults" class="form-control"  alt="Select Adults" onchange="addAdult(this);" title="Select Adults"/>
												</span>
											</div>
											<div class="col">
												<label class="select-sec">Children</label> 
												<span class="select"> 
												<form:select path="rooms[0].child" items="${model.childNo}" id="rooms0child"  class="form-control"  alt="Select Child" onchange="addAge(this);" title="Select Child"/>
												</span>
											</div>

											<div class="children-age right" id="childAge0">
												<label id="age0" class="select-sec" style="display:none;">Children's age</label>
												<div class="add-col" id="00" style="display:none;">
													<span class="select"> 
													<form:select path="rooms[0].children[0].age"  id="rooms0-children0-age" items="${model.childAge}" class="form-control"  alt="Select Child Age" title="Select Child Age" />
													</span>
												</div>
												<div class="add-col" id="01" style="display:none;">
													<span class="select"> 
													<form:select path="rooms[0].children[1].age" id="rooms0-children1-age" items="${model.childAge}" class="form-control"  alt="Select Child Age" title="Select Child Age" />
													</span>
												</div>
												<div class="add-col" id="02" style="display:none;">
													<span class="select"> 
													<form:select path="rooms[0].children[2].age" id="rooms0-children2-age" items="${model.childAge}" class="form-control"  alt="Select Child Age" title="Select Child Age" />
													</span>
												</div>
												<div class="add-col" id="03" style="display:none;">
													<span class="select"> 
													<form:select path="rooms[0].children[3].age" id="rooms0-children3-age" items="${model.childAge}" class="form-control"  alt="Select Child Age" title="Select Child Age" />
													</span>
												</div>
												<div class="add-col" id="04" style="display:none;">
													<span class="select"> 
													<form:select path="rooms[0].children[4].age" id="rooms0-children4-age" items="${model.childAge}" class="form-control"  alt="Select Child Age" title="Select Child Age" />
													</span>
												</div>
											</div>
										</div>
										<form:hidden path="room" value="1" id="rooms"  />
										<div class="btn-section">
											<a class="pull-left" href="javascript:void(0);" id="addroom" title="Add Room"> <span class="fa fa-plus"></span> Add Room </a> 
											<a class="pull-left" href="javascript:void(0);" id="removeroom" style="display: block;" title="Remove Room"> <span class="fa fa-close"></span> Remove Room </a> 
											<a id="confirm" class="confirm-btn pull-right" href="javascript:void(0);" title="Confirm"> <span class="fa fa-check"></span> Confirm </a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-sm-4 col-md-2 col-xs-12 pull-right">
								<input type="button" onClick="return submitHotelForm();" class="" value="Find Room">
							</div>
						</div>
					</div>
				</div>
				</form:form>
				<div class="testimonials">
					<div class="col-xs-12" id="location">
						<h4>Location Map</h4>
						<div class="row">
		    <div class="col-sm-12">
		       
		        <div class="map hotel-map">
		            <div id="hotelMap" style="width:100%;height:300px;"></div>
		        </div>
			    </div>
			
			    <script>
			        function hotelMapFun() {
						
						/* console.log("latitude "+${detailPageContent.hotel.address.latitude} +","+${detailPageContent.hotel.address.latitude}); */
							var _lat = ${detailPageContent.hotel.address.latitude};
							var _lng = ${detailPageContent.hotel.address.longtitude};
							var hotelName = '${detailPageContent.hotel.hotelName}';
							var address = '${detailPageContent.hotel.address.address}, ${detailPageContent.hotel.address.city}, ${detailPageContent.hotel.address.stateProvinceCode}, ${detailPageContent.hotel.address.country} ${detailPageContent.hotel.address.postalCode}';
							var map = new google.maps.Map(document.getElementById("hotelMap"), {
								center: { lat: _lat, lng: _lng},
								zoom: 18,
								mapTypeId:google.maps.MapTypeId.HYBRID,
								scrollwheel: true
							});

						var infowindow = new google.maps.InfoWindow();

						var request = {
							location: map.getCenter(),
							radius: '500',
							query: address
						};

						var serviceNew = new google.maps.places.PlacesService(map);
						serviceNew.textSearch(request, callback);

						function callback(results, status) {

							if (status == google.maps.places.PlacesServiceStatus.OK) {
								var marker = new google.maps.Marker({
									map: map,
									place: {
										placeId: results[0].place_id,
										location: results[0].geometry.location
									}
									
								});
								google.maps.event.addListener(marker, "click", function () {
									infowindow.setContent("<div><strong>" + hotelName + "</strong><br>" +
										//   "Place ID: " + place.place_id + "<br>" +
										address + "</div>");
									infowindow.open(map, this);

								});

								infowindow.setContent("<div><strong>" + hotelName + "</strong><br>" +
									//"Place ID: " + place.place_id + "<br>" +
									address + "</div>");
								infowindow.open(map, marker);
							}
						}
					}
			
			    </script>
			
			    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJnw13NgUPpHAjBZthGDxTj4vXnbuW3A&libraries=places&callback=hotelMapFun"></script>
				</div>
					</div>

					<div class="col-xs-12" id="similar">
						<h4>Similar Hotels</h4>
						<div class="more-hotel testimonials-slid">
						 <c:forEach items="${detailPageContent.similarHotel}" var="similar" >
							<div class="col-sm-4 fourth-effect">
								<c:choose>
                            	  <c:when test="${similar.hotelImage == ''}">
                            	      <c:set var="imgval" value="/resources/images/coming-soon.jpg"/>
                            	  </c:when>
                            	  <c:otherwise>
                            	  		<c:set var="imgval" value="${similar.hotelImage}"/>                            	  		
                            	  </c:otherwise>
                            	</c:choose>
								<a href="${similar.hotelDeepLink}" target="_blank"> <img src="${imgval}" onerror="this.onerror=null;this.src='/resources/images/coming-soon.jpg';" alt="${similar.address.city}">
									<div class="more-hotel-detail">
										<div class="left-section">
											<h5 title="${similar.hotelName}">${similar.hotelName}</h5></a>
											<div class="star">
												<span data-ng-style="{'width': getStars('<c:out value='${similar.getStarRating()}' />')}" title="${similar.getStarRating()}"> </span>
											</div>											
										</div>
										<c:if test="${similar.getTripAdvisorRating() != ''}">
											<div class="tripadvisor">
												<img src="/resources/images/hotels/adviser.png"> <span class="advisorCircle" ><span ng-style="{'width': getStars(${similar.getTripAdvisorRating()})}" title="${similar.getTripAdvisorRating()}"> </span>
												</span>
												<c:if test="${similar.getTripAdvisorRating() == '5.0'  || similar.getTripAdvisorRating() == '4.5' }">
													<span class="trip-rating">Excellent</span>										
												</c:if>					
												<c:if test="${similar.getTripAdvisorRating() == '4.0'  || similar.getTripAdvisorRating() == '3.5' }">											
														<span class="trip-rating">Very Good</span>											
												</c:if>					
												<c:if test="${similar.getTripAdvisorRating() == '3.0'  || similar.getTripAdvisorRating() == '2.5' }">											
														<span class="trip-rating">Good</span>											
												</c:if>					
												<c:if test="${similar.getTripAdvisorRating() == '2.0'  || similar.getTripAdvisorRating() == '1.5' }">											
														<span class="trip-rating">Average</span>											
												</c:if>	
												<span class="rating-text">${similar.tripAdvisorReviewCount} Reviews</span>
											</div>
											 
										 </c:if>
										</div>
								
							</div>
							</c:forEach>
						</div>
					</div>

					<div class="col-xs-12" id="near">
						<h4>Near By Hotels</h4>
						<div class="more-hotel testimonials-slid">
						 <c:forEach items="${detailPageContent.nearByHotel}" var="nearbyhotel">
							<div class="col-sm-4 fourth-effect">
								<c:choose>
                            	  <c:when test="${nearbyhotel.hotelImage == ''}">
                            	      <c:set var="imgval" value="/resources/images/coming-soon.jpg"/>
                            	  </c:when>
                            	  <c:otherwise>
                            	  		<c:set var="imgval" value="${nearbyhotel.hotelImage}"/>                            	  		
                            	  </c:otherwise>
                            	</c:choose>
								<a href="${nearbyhotel.hotelDeepLink}" target="_blank"> <img src="${imgval}" onerror="this.onerror=null;this.src='/resources/images/coming-soon.jpg';" alt="${nearbyhotel.address.city}">
									<div class="more-hotel-detail near-hotel-detail">
										<div class="left-section">
											<h5 title="${nearbyhotel.hotelName}">${nearbyhotel.hotelName}</h5></a>
											<div class="star">
												<span data-ng-style="{'width': getStars('<c:out value='${nearbyhotel.getStarRating()}' />')}" title="${nearbyhotel.getStarRating()}"> </span>
											</div>
											
										</div>
										<c:if test="${nearbyhotel.getTripAdvisorRating() != ''}">
											<div class="tripadvisor">
												<img src="/resources/images/hotels/adviser.png"> <span class="advisorCircle" ><span ng-style="{'width': getStars(${nearbyhotel.getTripAdvisorRating()})}" title="${nearbyhotel.getTripAdvisorRating()}"> </span>
												</span>
												<c:if test="${nearbyhotel.getTripAdvisorRating() == '5.0'  || nearbyhotel.getTripAdvisorRating() == '4.5' }">
													<span class="trip-rating">Excellent</span>										
												</c:if>					
												<c:if test="${nearbyhotel.getTripAdvisorRating() == '4.0'  || nearbyhotel.getTripAdvisorRating() == '3.5' }">											
														<span class="trip-rating">Very Good</span>											
												</c:if>					
												<c:if test="${nearbyhotel.getTripAdvisorRating() == '3.0'  || nearbyhotel.getTripAdvisorRating() == '2.5' }">											
														<span class="trip-rating">Good</span>											
												</c:if>					
												<c:if test="${nearbyhotel.getTripAdvisorRating() == '2.0'  || nearbyhotel.getTripAdvisorRating() == '1.5' }">											
														<span class="trip-rating">Average</span>											
												</c:if>	
											
											<span class="rating-text"><span>${nearbyhotel.tripAdvisorReviewCount} Reviews</span></span>
											</div>
										 </c:if>
										</div>
								
							</div>
							</c:forEach>
						</div>
					</div>
		


					<div class="col-xs-12" id="about-hotel">
						<h4>About Hotel</h4>
						<div class="hotel-info-bg">
							${detailPageContent.hotel.description}
						</div>
					</div>

					<div class="col-xs-12" id="amenities">
						<h4>Hotel Amenites</h4>
						<div class="hotel-amenites">
							<ul>
							  <c:forEach items="${detailPageContent.hotel.amentiesFull}" var="amentie" >
									<c:set var="ament_css" value="${fn:replace(fn:trim(fn:toLowerCase(amentie)),' ', '-')}"/>
									<li><i class="icon icon-${ament_css}"></i> ${amentie}</li>
								</c:forEach>								
							</ul>
						</div>
					</div>

					<div class="col-xs-12" id="policies">
						<div class="row">
						<c:if test="${detailPageContent.hotel.hotelPolicy != '' || detailPageContent.hotel.businessAmenities != '' || detailPageContent.hotel.hotelSPA != '' || detailPageContent.hotel.extraFee != '' || detailPageContent.hotel.extraOffering != ''}">					
							<div class="col-xs-12">
								<div class="polices-section">
									<h4>Hotel Policies</h4>
									<div class="polices-bg">
									${detailPageContent.hotel.hotelPolicy}
										<c:if test="${detailPageContent.hotel.businessAmenities != ''}"><p><strong>Business Amenities</strong><br>${detailPageContent.hotel.businessAmenities}</p></c:if>
										<c:if test="${detailPageContent.hotel.hotelSPA != ''}"><p><strong>Hotel SPA</strong><br>${detailPageContent.hotel.hotelSPA}</p></c:if>
										<c:if test="${detailPageContent.hotel.extraFee != ''}"><p><strong>Extra Fee</strong><br>${detailPageContent.hotel.extraFee}</p></c:if>
										<c:if test="${detailPageContent.hotel.extraOffering != ''}"><p><strong>Extra Offering</strong><br>${detailPageContent.hotel.extraOffering}</p></c:if>
										
									</div>
								</div>
							</div>
							</c:if>
							
							<c:if test="${detailPageContent.hotel.hotelNearBy != ''}">
							<div class="col-xs-12">
								<div class="polices-section">
									<h4>Near By Places</h4>
									<div class="polices-bg">
										<p>${detailPageContent.hotel.hotelNearBy}</p>
									</div>
								</div>
							</div>
                          </c:if>
						</div>
					</div>

				</div>

			</div>
		</div>

		<jsp:include page="hotel_footer.jsp"></jsp:include>

	</div>

	<script>
		$(document).ready(function() {
			$(".guest").click(function() {
				$("#chose").show();
			});
			$(".confirm-btn").click(function() {
				$("#chose").hide(400);
			});

		});
	</script>
	
	<script>
          function showSec(id,id1) {
            $('html,body').animate({
                scrollTop: $("#" + id).offset().top - 50},
                'slow');        
        }
    </script>

	<!-- script engine -->
	<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
	<script src="/resources/js/jquery.slides.min.js"></script>
	<script type="text/javascript" src="/resources/js/jquery.validate.js"></script>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/i18n/jquery-ui-i18n.js"></script>
	
	<script src="/resources/js/hotelDetailsdeaplink.js"></script>
	<!--Use only hotel engin home -->

</body>
</html>
