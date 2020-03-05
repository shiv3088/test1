<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!doctype html>
<html lang="en" ng-app="appHotelDet">
<head>
<!--[if lt IE 9]>
 	<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
 <c:forEach items="${hotelDetailsResult}" var="hotelTitle">
	<title>Hotel Details  | ${data.siteName} 
     </title>
	</c:forEach>
<meta name="keywords" content="cheap hotels, hotel booking, hotel booking site, hotel reservations, online hotel booking, find hotel deals." />

<meta name="description" content="Discover and book cheap hotels with ${data.siteName}. Book now and save big with our discounted prices on hotel reservations." />

<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!-- start travel css -->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link rel="stylesheet" href="/resources/common/css/slick_carousel.css" type="text/css" />
<link href="/resources/common/css/lightbox.css" rel="stylesheet" type="text/css">
<link href="/resources/common/css/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css">
<link href="/resources/common/css/hotel-style.css?10072019" rel="stylesheet">
<link href="/resources/common/css/aminities-icons.css" rel="stylesheet">

<script src="/resources/lib/angular/angular.js"></script>
<script src="/resources/js/angular-initial-value.min.js"></script>
<script type="text/javascript" src="/resources/js/angular-local-storage.js"></script>
<script type="text/javascript"  src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-sanitize.js"></script>
<script src="/resources/js/modernizr.min.js"></script> 
<script src="/resources/js/respond.min.js"></script> 
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script>
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.sticky.js"></script>
<script type="text/javascript" src="/resources/common/js/slick_carousel.js?121210217"></script>	
<script src="/resources/js/hotel-custom.js?16102017"></script>
<script src="/resources/js/angular-animate/angular-animate.min.js" ></script>
<!--light box-->
<script src="/resources/js/custom-slider.js" type="text/javascript"></script>
<script src="/resources/js/lightbox.js" type="text/javascript"></script>
<script src="/resources/js/jquery.mCustomScrollbar.concat.min.js" type="text/javascript"></script>


<script>
	(function($){
		$(window).load(function(){
			$("#content-1").mCustomScrollbar({
				scrollButtons:{
					enable:true
				}
			});
		});
	})(jQuery);
</script>
	
<script type="text/javascript">
  $(document).ready(function(){
  
    $(".short").css({display: "block"});
       $(".brief").css({display: "none"});
  
  	$('#showmore').click(function()   
    {    
     /*  alert("click"); */
       $(".short").css({display: "none"});
       $(".brief").css({display: "block"});
       
    });  
    
    $('#showless').click(function()   
    {    
     /*  alert("click"); */
       $(".short").css({display: "block"});
       $(".brief").css({display: "none"});
      
    });
   
  });
</script>

<script type="text/javascript"> 
   /*  window.history.forward();

    function noBack() {
        window.history.forward();
    } */
    
    /*   function goBack() {
        key=false; 
        window.history.go(-1);
    } */
    
    function goBack() {
        key=false; 
      //  window.history.go(-1);
         var path=window.location.origin;

          var rndId=$('#useridss').val();
          //http://localhost:8080/hotels/details/167780
		  var url=path+"/hotelSearch/id/"+rndId;	
			 
         var encodedUrl = decodeURIComponent(url);
         $(location).attr("href", encodedUrl);
    }
</script>

<c:set var="curRsponse" value="1"/>
<c:set var="xchangeCurrencyCode" value="USD"/>
<c:set var="dollar" value="gbp"/>
	
<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->

</head>
<body class="hotelsection bodyBg" ng-controller="HotelDetController" id="HotelDetController">


<c:forEach items="${hotelListWrapper}" var="search" varStatus="se">
        <c:set var="searchCity" value="${search.address.city}" scope="page" />
        <c:set var="tRooms" value="${search.rooms.size()}" scope="page" />
        <c:set var="depin" value="${search.checkInDate}" scope="page" />
        <c:set var="depout" value="${search.checkOutDate}" scope="page" />
        <c:forEach items="${search.rooms}" var="room" varStatus="pax">
            <c:set var="childsCount" value="${childsCount+room.children.size()}" scope="page" />
            <c:set var="adultsCount" value="${adultsCount+room.adults}" scope="page" />
        </c:forEach>
    
</c:forEach>

<div align="center" id="divSessionOut" style="display:none; " class="popup-product">
<div id="fadebackground"></div>
<div class="session-exp">
	<h3>Session Expired!</h3>
	<p>Hotel prices may change frequently owing to demand & availability. </br>Start a new search to view the best hotel.</p>

<div class="clock_tym"> <i class="fa fa-clock-o" aria-hidden="true"></i>  </div>

<div align="center" valign="middle"><!-- <a href="#" onClick="submitHotelForm();" class="btn btn-primary btn-lg searchbtn">Search Again</a>
&nbsp; &nbsp;  OR &nbsp; &nbsp; -->  
<a href="/" class="btn btn-primary btn-lg searchbtn">Go to Home</a></div>
</div>
</div>

<script>
				  jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});
				</script>
  <!-- Header Section Start -->
   <div id="headerrs">
    <jsp:include page="result_header.jsp"></jsp:include>
  </div>
  <!-- Header Section End -->
<!-- Main Section -->
<div class="main">

	<c:forEach items="${UserHotelListWrapper}" var="userid"  begin="0" end="0" varStatus="uid" >
      <c:set var="userids" value="${userid.searchId}" scope="page"/>
     
      <input type="hidden" id="useridss" value="${userid.searchId}" />
    </c:forEach>
 
   <form:form method="POST"  action="/hotels/details" modelAttribute="hotelDetailsResponse">
  <!-- hotel main container start -->
    
	<c:forEach items="${hotelDetails}" var="hotelDet">
  	<c:forEach items="${hotelDetailsResult}" var="hotel">
	 	
	<!--  / slider box \ -->
	 
	 <input type="hidden" value="<c:out value='${hotel.hotel.hotelName}' />" id="stayHotelId"/> 
	 <input type="hidden" value="<c:out value='${hotel.hotel.icePortalID}' />" id="IcePortalID"/>	
		
			
			<div class="hotelMainCntr">
			 <a href="#" onClick="goBack()" class="back_btn go-back"><i class="fa fa-angle-left" aria-hidden="true"></i> Back To Result</a> 
			 <div class="clearfix"></div>
			 
				<div class="hotel-name">
				<div class="row">
					<div class="col-sm-12">
						<h2>  <c:out value='${selectedHotel.getHotelName()}'/> </h2> <div class="rating">
						<span class="stars">
							<span ng-style="{'width': getStars('<c:out value='${selectedHotel.rating}' />')}"></span>
						</span>
						</div>
						<div class="location"><span class="fa fa-map-marker"></span>
						 <c:out value='${selectedHotel.getAddress().getCompleteAddress()}'/>
						</div>						
					</div>					
				</div>
				</div>
			
				<div class="section-view hidden-xs">
					<ul>
					<li><a href="javascript:void(0);" onClick="showSec('roomBlock')">Hotel Rooms</a></li>
					
					<c:if test="${not empty selectedHotel.amentiesFull}">
			<c:if test="${selectedHotel.amentiesFull.size() != 0}" >
						<li><a href="javascript:void(0);" onClick="showSec('amenities')">Hotel Amenities</a></li>
						</c:if>
						
					<c:if test="${not empty hotel.hotel.description}">
						<li><a href="javascript:void(0);" onClick="showSec('about_hotel')">About Hotel</a></li>
						</c:if>
						
						
						
						</c:if>
						<c:if test="${(hotel.hotel.hotelPolicy != null) || (hotel.hotel.businessAmenities != null) || (hotel.hotel.hotelSPA != null) || (hotel.hotel.extraFee != null) || (hotel.hotel.extraOffering != null)}">
						<c:if test="${(hotel.hotel.hotelPolicy != '') || (hotel.hotel.businessAmenities != '') || (hotel.hotel.hotelSPA != '') || (hotel.hotel.extraFee != '') || (hotel.hotel.extraOffering != '')}">
						<li><a href="javascript:void(0);" onClick="showSec('policies')">Hotel Policies</a></li>
						</c:if>
						</c:if>
						
						<c:if test="${hotel.hotel.hotelNearBy != null}">
						<li><a href="javascript:void(0);" onClick="showSec('NearByPlaces')">Near By Places</a></li>
						</c:if>
					</ul>	
				</div>
				
			<div id="topCntr">
			
				<!-- slider implimentation -->
				<div class="row">
					<div class="col-lg-9 col-md-12">
					<div class="slider-fulldiv">
					<c:choose>  
						
						<c:when test="${hotel.hotel.icePortalID != 0}">  
						       <iframe class="iceportal_frame" src="https://www.iceportal.com/brochures/ice/Brochure.aspx?did=14194&brochureid=${hotel.hotel.icePortalID}"> </iframe>   
						</c:when>
						
						<c:otherwise>
						<div id="photoBig">
						  <div id="mnpage"> 
							<c:forEach items="${hotel.hotel.hotelImage}" var="img" begin="0" end="1">
							  <a href="${img}" data-lightbox="example-set" data-title="">
							   <img src="${img}" class="example-image" id="limgm"  alt="" width="100%" height="100%">
							   </a>
							    
							 </c:forEach>   
							 
						   </div>
						  </div>						  
						<div class="thumnails_image" id="content-1">							
							<ul>
								<c:forEach items="${hotel.hotel.hotelImage}" var="img">
									<c:set var="count" value="${count + 1}" scope="page"/>									
									<li class="zoom_image cst${count}"><a href="${img}" data-lightbox="example-set"> <img src="${img}" onerror="imageErrorFun(${count})" class="example-image" alt="" id="limg"> </a> </li>
								</c:forEach>
							</ul>
						</div>						
					  	</c:otherwise>
					  </c:choose>
					  </div>
					</div>
					
					<div class="col-lg-3 col-md-12">
						<!--  / intro box \ -->
						<div class="introBox">
							<div class="info_detail">
							<c:if test="${thisHotel.getHotel().getTripAdvisorRating() != '' && thisHotel.getHotel().getTripAdvisorRating() != '0' && thisHotel.getHotel().getTripAdvisorRating() != null}">
							  <div class="tripadvisor_text hidden-xs">TripAdvisor Traveler Rating </div>
								<div class="tripadvisor_logo hidden-xs">				
								<img src="/resources/images/ratingReview.png"> <span class="advisorCircle"><span ng-style="{'width': getStars(${thisHotel.getHotel().getTripAdvisorRating()})}"></span></span>
								
								  <!--<span class="alignright">  <a href="${thisHotel.getHotel().getTripAdvisorRatingUrl()}" style="color:#333333;text-decoration:underline;" target="_blank">${thisHotel.getHotel().getTripAdvisorReviewCount()} Reviews</a></span>-->
								
							</div>
							</c:if>
							
							 <c:if test="${hotel.getHotel().getDescription() != 'null' && hotel.getHotel().getDescription() != ''}">
								<p class="mb5px" style="text-align: justify;"> <c:out value="${fn:substring(hotel.hotel.description,0,250)}" escapeXml="false"/>... <a id="about_more" href="javascript:void(0);">more</a></p>
							 </c:if>
							</div>
							
							<div class="detail-right-tab">
							<c:if test="${hotel.hotel.isPromoAvailable}">
								<div class="hotel-offers-inside">
									<c:choose>
									   <c:when test="${fn:containsIgnoreCase(hotel.hotel.promoTitle, '-')}">  
										<div class="offer-hd" title="${hotel.hotel.promoDescription}">
										 <c:out value='${fn:split(hotel.hotel.promoTitle,"-")[0]}' /><br/>                                                	
										 <b><c:out value='${fn:split(hotel.hotel.promoTitle,"-")[1]}' /></b>
										</div>
										</c:when>
									   <c:otherwise>                              
											  <div class="offer-hd" title="${hotel.hotel.promoDescription}">${hotel.hotel.promoTitle}<br/> <b></b> </div>
									   </c:otherwise>
									 </c:choose>
								</div>
							</c:if>
							
							<div class="priceBlock pull-right text-right">
								
									<c:set var="lowrate"><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${thisHotel.getHotel().getRooms().get(0).getHotelFare().getAverageBaseRate()}" /></c:set>
									<span class="price"><i class="fa fa-<c:out value='${dollar}'/>" ></i><c:out value="${lowrate}" /></span>
									
									<fmt:formatNumber var="nightlyRateTotals" type="number" minFractionDigits="2" maxFractionDigits="2" value="${hotel.hotel.rooms[0].hotelFare.nightlyRateTotal}"/>
														
									<small>average/ night</small>
									
							<c:if test="${thisHotel.getHotel().getIsSoldOut() == 'false'}">
								<a id="selectRoom" href="javascript:void(0);" class="select-button">Select Room</a>	
							</c:if>
							
							<c:if test="${thisHotel.getHotel().getIsSoldOut() == 'true'}">
								<a id="selectRoom" href="#" class="select-button">Sold Out</a>	
							</c:if>
							</div>
							</div>
							
							
						</div>
						<!--  / intro box \ -->
					</div>
				</div>
				<!-- slider implimentation end -->
			</div>
	</div>
	
	<!--  / Top container \ -->
	
		<!--  / room box \ -->
		
		<div class="hotelMainCntr">
		<!--  / room box \ -->
		<div id="roomBlock"  class="roomBox whiteBg">
				<h2 class="heading">Available Rooms</h2>
				
					<div class="block short" style="display: block;" id="accordion">
					<c:set var="roomNo" value="0"/>
					<c:forEach items='${hotel.hotel.rooms}' var="room" end="2">
						
						<div class="room-row">
							<input type="hidden" value="<c:out value='${roomFaretotal}' />" id="stayPrice"/> 
							<div class="col">
							 <c:out value="${room.getRoomFullName() }" /> 
							</div>
							
							<%--<div class="col col2">
								<ul class="facility-icon">							
									<li class="fa fa-wifi" title="Wifi"></li>
									<li class="fa fa-newspaper-o" title="Newspaper"></li>
									<li class="fa fa-product-hunt" title="Parking"></li>							
								</ul>		
							</div>--%>
							
							<div class="col col2">
								<div><p style="font-weight: bold; margin-bottom:0px;">
							  <c:choose>
									   <c:when test="${room.nonRefundable == 'false'}">Refundable</c:when> 
									   <c:otherwise>Non Refundable</c:otherwise>
							  </c:choose>
							 </p></div>
								<div >
								<c:if test="${room.cancellationPolicy != null}"> 
								<div class="col-xs-6 col-sm-12 col-lg-6 cancelation_policy_main no-padding">
								
							  <a href="javascript:void(0);" class="text-orange cancellation_policy">Cancellation Policy</a>
							  <div class="show_policy">
							   <a href="javascript:void(0);" class="close_tooltip">X</a>
							  <span class="arrow"></span>
							  <p class="mb5px"><c:out value="${room.cancellationPolicy}" escapeXml="false"/></p>
							  </div>
							  </div>
							  
							  </c:if>
							  <c:if test="${room.hotelFare.offers.size() > 0}"> 
								  <div class="col-xs-6 col-sm-12 col-lg-6 cancelation_policy_main no-padding text-right">						
									  <a href="javascript:void(0);" class="text-orange offer_policy">special offer</a>						  
									  <div class="show_policy">
									   <a href="javascript:void(0);" class="close_tooltip">X</a>
									  <span class="arrow"></span>
									  <c:forEach items="${room.hotelFare.offers}" var="offers">
										 <p class="mb5px"><c:out value="${offers.type}" escapeXml="false"/> - <c:out value="${offers.amount}" escapeXml="false"/></p>
									  </c:forEach>
									  </div>						  
								  </div>					  
							  </c:if>
							  </div>	
							</div>
							
							<div class="col col3" style="text-align: right;">
								<div class="priceBlock">
								
									<c:set var="lowrate"><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${room.getHotelFare().getAverageBaseRate()}" /></c:set>
									<span class="price"><i class="fa fa-<c:out value='${dollar}'/>" ></i><c:out value="${lowrate}" /></span>
								<%-- </c:if> --%>
									<small>average/ night</small>
								</div>
								<div ng-click="movePurchasePage(${hotel.getHotel().getHotelId()},${roomNo})" class="select-button pull-right" style="cursor:pointer">Book </div>
							</div>
							
						</div>
						
						<c:set var="roomNo" value="${roomNo + 1}" /> 
					</c:forEach>
					
					
					</div>
					
					<div class="block brief" style="display: none;" id="accordion1">
					<c:set var="roomNo" value="0" /> 
					<c:forEach items='${hotel.hotel.rooms}' var="room">
					  
						<div class="room-row">
							<input type="hidden" value="<c:out value='${roomFaretotal}' />" id="stayPrice"/> 
							<div class="col">
								<c:out value="${room.getRoomFullName() }" /> 
							</div>
							
							<!--<div class="col col2">
								<ul class="facility-icon">							
									<li class="fa fa-wifi" title="Wifi"></li>
									<li class="fa fa-newspaper-o" title="Newspaper"></li>
									<li class="fa fa-product-hunt" title="Parking"></li>							
								</ul>		
							</div>-->
							
							<div class="col col2">
								<div><p style="font-weight: bold; margin-bottom:0px;">
							  <c:choose>
									   <c:when test="${room.nonRefundable == 'false'}">Refundable</c:when> 
									   <c:otherwise>Non Refundable</c:otherwise>
							  </c:choose>
							 </p></div>
								<div >
								<c:if test="${room.cancellationPolicy != null}"> 
								<div class="col-xs-6 col-sm-12 col-lg-6 cancelation_policy_main no-padding">
								
							  <a href="javascript:void(0);" class="text-orange cancellation_policy">Cancellation Policy</a>
							  <div class="show_policy">
							   <a href="javascript:void(0);" class="close_tooltip">X</a>
							  <span class="arrow"></span>
							  <p class="mb5px"><c:out value="${room.cancellationPolicy}" escapeXml="false"/></p>
							  </div>
							  </div>
							  
							  </c:if>
							  <c:if test="${room.hotelFare.offers.size() > 0}"> 
								  <div class="col-xs-6 col-sm-12 col-lg-6 cancelation_policy_main no-padding text-right">						
									  <a href="javascript:void(0);" class="text-orange offer_policy">special offer</a>						  
									  <div class="show_policy">
									   <a href="javascript:void(0);" class="close_tooltip">X</a>
									  <span class="arrow"></span>
									  <c:forEach items="${room.hotelFare.offers}" var="offers">
										 <p class="mb5px"><c:out value="${offers.type}" escapeXml="false"/> - <c:out value="${offers.amount}" escapeXml="false"/></p>
									  </c:forEach>
									  </div>						  
								  </div>
							  </c:if>
							  </div>	
							</div>
							
							
							
							<div class="col col3" style="text-align: right;">
								<div class="priceBlock pull-left">
								 
									<c:set var="lowrate"><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${room.getHotelFare().getAverageBaseRate()}" /></c:set>
									<span class="price"><i class="fa fa-<c:out value='${dollar}'/>" ></i><c:out value="${lowrate}" /></span>
								
									<small>average/ night</small>
								</div>
								<div ng-click="movePurchasePage(${hotel.getHotel().getHotelId()},${roomNo})" class="select-button pull-right" style="cursor:pointer">Book </div>
							</div>					
						</div>
						
						
						<c:set var="roomNo" value="${roomNo + 1}"/> 
					</c:forEach>		    	
					
					</div>
				
				<div class="clearfix"></div>
				
				<c:if test="${fn:length(hotel.hotel.rooms) gt 3}">	
					<div id="showmore" class="showmore short">Show More Rooms(+) </div>
				</c:if>
				<div id="showless" class="showmore brief">Show Less Rooms(-) </div>
			
		</div>
		
		<!--  / Amenities box \ -->
		<c:if test="${not empty selectedHotel.amentiesFull}">
			<c:if test="${selectedHotel.amentiesFull.size() != 0}" >
			<div class="amenitiesBox whiteBg" id="amenities">
				 
				<h2 class="heading">Amenities &amp; Facilities</h2>
	
				<ul>			  
				   <c:forEach items='${selectedHotel.amentiesFull}' var="amen">				   
						<li><span class="icon icon-${fn:toLowerCase(amen.replaceAll(' ','-'))}"></span>${amen.replaceAll("(\\p{Ll})(\\p{Lu})","$1 $2")}</li>					
				   </c:forEach>
				</ul>
	
			</div>
			</c:if>
		</c:if>
		<!--  / Amenities box \ -->
	
		<!--  / about-hotel box \ -->
				
			<c:if test="${not empty hotel.hotel.description}">
			<div id="about_hotel" class="about-hotelBox whiteBg">
			<h2 class="heading"><c:out value='${hotel.hotel.hotelName}' /></h2>
			
			<p class="mb5px" style="text-align: justify;"><c:out value='${hotel.hotel.description}' escapeXml="false"/></p>
			
			<p class="mb5px"><c:out value='${hotel.checkInInstructions}' escapeXml="false"/></p>
			</div>
			</c:if>
		
  		
		
  			<!-- additional info-->
			<!-- Hotel Policies Start Here -->
				<div class="whiteBg" id="policies">
						<c:if test="${(hotel.hotel.hotelPolicy != null) || (hotel.hotel.businessAmenities != null) || (hotel.hotel.hotelSPA != null) || (hotel.hotel.extraFee != null) || (hotel.hotel.extraOffering != null)}">
						<c:if test="${(hotel.hotel.hotelPolicy != '') || (hotel.hotel.businessAmenities != '') || (hotel.hotel.hotelSPA != '') || (hotel.hotel.extraFee != '') || (hotel.hotel.extraOffering != '')}">
						
						<div class="polices-bg" >
							<h2 class="htl-head">Hotel Policies</h2>
							<div class="row htl-discription">
								<div class="col-xs-12">
									${hotel.hotel.hotelPolicy}
									<c:if test="${hotel.hotel.businessAmenities != null}">
									<c:if test="${hotel.hotel.businessAmenities != ''}">
										<p><strong>Business Amenities</strong></p>
										<p>${hotel.hotel.businessAmenities}</p>
									</c:if>
									</c:if>
									<c:if test="${hotel.hotel.hotelSPA != null}">
									<c:if test="${hotel.hotel.hotelSPA != ''}">
										<p><strong>Hotel SPA</strong></p>
										<p>${hotel.hotel.hotelSPA}</p>
									</c:if>
									</c:if>
									<c:if test="${hotel.hotel.extraFee != null}">
									<c:if test="${hotel.hotel.extraFee != ''}">
										<p><strong>Extra Fee</strong></p>
										<p>${hotel.hotel.extraFee}</p>
									</c:if>
									</c:if>
									<c:if test="${hotel.hotel.extraOffering != null}">
									<c:if test="${hotel.hotel.extraOffering != ''}">
										<p><strong>Extra Offering</strong></p>
										<p>${hotel.hotel.extraOffering}</p>
									</c:if>
									</c:if>							
								</div>
							</div>
						</div>
						
						</c:if>
						</c:if>
						
						</div>
				
				<!-- Hotel Policies End Here -->
				<!-- Near By Places Start here -->
				<c:if test="${hotel.hotel.hotelNearBy != null}">
				<c:if test="${hotel.hotel.hotelNearBy != ''}">
				
				<div class="whiteBg nearbyplace">
				
				<div class="polices-bg" id="NearByPlaces">
					<h2 class="htl-head">Near By Places</h2>
					<div class="row htl-discription">
						<div class="col-xs-12">
							<p>${hotel.hotel.hotelNearBy}</p>
						</div>
					</div>
				</div>
				
				</div>
				<!-- Near By Places end here -->
				</c:if>
				</c:if>
	<!-- additional info end-->
		
				<!--  / map box \ -->
					<div class="mapBox whiteBg locationMap">
						 
							<h2 class="heading">Location</h2>
							<div class="row">
						<div class="col-sm-12">
						   
							<div class="hotel-map">
								<div id="hotelMap" style="width:100%;height:300px;"></div>
							</div>
						</div>
					
						<script>
							function hotelMapFun() {
							var hotelName = '${selectedHotel.hotelName}';
							var address = '${selectedHotel.address.completeAddress}';
							var map = new google.maps.Map(document.getElementById("hotelMap"), {
							  center: {lat: ${selectedHotel.address.latitude}, lng: ${selectedHotel.address.longtitude}},
							  zoom: 16,
							  scrollwheel: false
							});
							
							//var myLatLng = new google.maps.LatLng(${hotelDetailsResObj.hotel.address.latitude},${hotelDetailsResObj.hotel.address.longtitude});
							var infowindow = new google.maps.InfoWindow();
						   // var service = new google.maps.places.PlacesService(map);
						   
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
										
										google.maps.event.addListener(marker, "click", function() {
											  infowindow.setContent("<div><strong>" + hotelName + "</strong><br>" +
											 //   "Place ID: " + place.place_id + "<br>" +
													  address + "</div>");
											  infowindow.open(map, this);
												
											});
										
										infowindow.setContent("<div><strong>" + hotelName + "</strong><br>" +
												//"Place ID: " + place.place_id + "<br>" +
												address + "</div>");
										infowindow.open(map,marker);
									  }
									}
						  }
					
						</script>
					
						<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJnw13NgUPpHAjBZthGDxTj4vXnbuW3A&libraries=places&callback=hotelMapFun"></script>
						</div>
						
					</div>
				<!--  / map box \ -->
				</div>
		
 
 
  <!-- hotel main container End -->
   	</c:forEach>
	</c:forEach>

	
  </form:form>
  <!-- Footer Section Start -->
    <div id="footerrs">
     <jsp:include page="hotel_footer.jsp"></jsp:include>
  </div>
  <!-- Footer Section End -->
  <div id="go-top"><i class="fa fa-angle-up fa-2x"></i></div>
</div>
<!-- Main Section -->

<script src="/resources/js/hotelDetails.js"></script>
<!-- <script src="/resources/js/hotelResult_1.4.1.js"></script> -->


<!-- Facebook Pixel Code -->

<script>

!function(f,b,e,v,n,t,s)

{if(f.fbq)return;n=f.fbq=function(){n.callMethod?

n.callMethod.apply(n,arguments):n.queue.push(arguments)};

if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';

n.queue=[];t=b.createElement(e);t.async=!0;

t.src=v;s=b.getElementsByTagName(e)[0];

s.parentNode.insertBefore(t,s)}(window,document,'script',

'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1575600346100223');

fbq('track', 'AddToCart',
{atc_content_type:'HOTEL',
atc_date1:'<c:out value="${depin}"/>',
atc_date2:'<c:out value="${depout}"/>',
atc_value:'<c:out value="${nightlyRateTotals}"/>',
atc_brand:$("#hotelNameId").text(),
atc_num_people:'<c:out value="${adultsCount+childsCount}"/>',
atc_num_adults:'<c:out value="${adultsCount}"/>',
atc_num_children:'<c:out value="${childsCount}"/>',
atc_destination_City:'<c:out value="${hotelListWrapper[0].address.city}"/>',
atc_destination_state:'<c:out value="${hotelListWrapper[0].address.stateProvinceCode}"/>',
atc_destination_country:'<c:out value="${hotelListWrapper[0].address.country}"/>'
});
</script>

<noscript>

<img height="1" width="1"

src="https://www.facebook.com/tr?id=1575600346100223&ev=AddToCart

&noscript=1"/>

</noscript>

<script>
          function showSec(id,id1) {
            $('html,body').animate({
                scrollTop: $("#" + id).offset().top - 50},
                'slow');        
        }
		
		$(window).scroll(function() {
       $(this).scrollTop() > 50 ? $("#go-top").fadeIn(200) : $("#go-top").fadeOut(800)
    }); 

$("#go-top").click(function(e) {
        e.preventDefault(), $("html, body").animate({
            scrollTop: 0
        }, "2000", "swing")
    });
    </script>
<!-- End Facebook Pixel Code -->

</body>
</html>

