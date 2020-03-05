<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html lang="en">
<head>
<!--[if lt IE 9]> 
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
	<![endif]-->
<meta charset="utf-8">
 
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cheap Hotels, Hotel Deals, Discount Hotel Reservations - ${data.siteName}</title>
<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
<meta name="google-site-verification" content="V9YFZJy8QpVDF8LsvGdRg7Ec9eY-0lWEKH1tR4h33Hc" />
<meta name="msvalidate.01" content="810F3644AB49633270FA50B11816A103" />
<meta name="keywords" content="Cheap hotels, Hotel Reservations, hotel deals, Hotel Rooms, best hotel rates, hotel accommodations, airport hotels, beach hotels, last minute hotels, hotel discounts, luxury hotels, TraveloPick" />

<meta name="description" content="Find hotel reservations with exclusive hotel deals to the top destinations worldwide at ${data.siteName}. Book now and save time & money on hotel bookings!" />

<meta property="og:url" content="${data.siteUrl}">
<meta property="og:site_name" content="${data.siteName}"/>
<c:set var="dollar" value="gbp"/>



<meta property="og:title" content="Cheap Online Hotel Booking Site, Hotel Room Deals & Reservation"/>
<meta name="twitter:title" content="Cheap Online Hotel Booking Site, Hotel Room Deals & Reservation"/>


<meta name="twitter:description" content="Find best hotel deals and cheap accommodations online with ${data.siteId}, a discount hotel website where rooms are easily available at affordable prices."/>
<!--Stylesheet-->
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css?1210217" rel="stylesheet">
<!--<link href="/resources/common/css/hotel-style.css?15112018" rel="stylesheet">-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>

<link href="https://plus.google.com/+${data.siteId}" rel="publisher">
<!-- start js -->
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/angular.js"></script>
<script src="/resources/common/js/slick_carousel.js?19062018"></script>
<script src="/resources/js/travel.min.js"></script>
 <!-- end js -->

<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->

    <link href="/resources/common/css/hotel-deal.css" rel="stylesheet">
</head>
<body class="hotelsection" data-ng-app="dynamicPageApp">
<!-- Header Section Start -->
<jsp:include page="home_header.jsp"></jsp:include>
<!-- Header Section End -->
<!-- Main seaction -->
<div class="main">
  <div style="height:60px;" class="hidden-xs"></div>
  <!-- Banner Box -->
  <div id="banner" style="background:url(/resources/images/banner/hotel-banner.jpg) no-repeat center;">
    <div class="container">
      <div class="row">
			<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 search_engine">
			  <!-- search engine -->
			  <jsp:include page="/home_engine_new"></jsp:include>
			   <!-- end search engine -->
			   </div>
			   <div class="col-lg-7 hidden-xs hidden">
              <div class="travel-deal"> 
			  <h5>Save on your stay this winter..</h5>
			  <div class="discount">Score a discount of  upto <span>$30</span><br>
					Coupon Code: <span>HTLOFF30<sup>*</sup> </span>
					<div class="review"><a href="javascript:void(0);"><i class="fa fa-info"></i></a>
						<span class="promo-detail"><i class="arrow"></i> ** Discounts may vary depending upon the destination of travel, day of the week, time of booking, duration of stay, and availability of hotel. The discounts displayed here are subject to change any time without prior notice. The Total Minimum Booking Amount needs to be $99 for the discount to be applicable. The discount might vary based on the number of rooms booked. A maximum discount of $6 per room shall be available.<br>
						Book by Date- 28 Feb 2019  <br>            
                        Travel by Date- 31 Jul 2019 </span>
					</div>
				</div>
				</div>
			</div>
      </div>
    </div>
  </div>
  <!-- Banner Box -->
  
	<div class="whybook">
		<div class="container">
				<ul> 
						<li>
								Live 24/7 <br>support
						</li>
						<li>
								Safe and <br>Secure
						</li>
						<li>
								Special offers on <br>over 5000 Destinations
						</li>
			 <li>
								Zero Booking <br> Fee
						</li>
				</ul>
		</div>    
</div>

	<!-- Hotel Testimonial -->

 <section class="hotel-most-popular-destination">
  <div class="container">
  <div class="hid den">
  <h2>Top  Domestic Destinations</h2>
	
    <div class="row">
       <c:set  var="count" value="0"/>
      <!-- Loop 1 -->
      <c:forEach items="${hotelDeals.locationAndHotelList}" var="h_deals">
      <c:if test="${h_deals.isDomestic && count < 4}">
      <c:set var="count" value="${count+1}"/>
      <div class="col-sm-6 col-xs-12">
        <div class="item">
        <div class="figure">
            <c:set var = "cityimg" value = "${fn:split(fn:toLowerCase(h_deals.city),'-')}" />
          <figure><img src="/resources/images/hotels/${fn:replace(fn:trim(cityimg[0]),' ','-')}-deal.jpg" alt="${h_deals.city}" class="img-responsive" /> </figure>         
          <div class="hotel-deal">
            <h3>${h_deals.city}</h3>
            <a  href="javascript:void(0)" class="deal-button hidden-xs">See Deals</a>
             <c:set var="addressList" value="${fn:split(h_deals.displayName,',')}"/>
             <c:set var="country" value="${addressList[fn:length(addressList)-1]}"/>             
          </div>
        </div>
            <!--Deal block start here -->
            <div class="deal-block">
                <ul>
                
                <c:set var="lsize" value="0" />
                <c:choose>
                 <c:when test="${h_deals.hotelPriceList.size() > 3}">
                    <c:set var="lsize" value="3" />
                 </c:when>
                 <c:otherwise>
                    <c:set var="lsize" value="${h_deals.hotelPriceList.size()}" />
                 </c:otherwise>
                </c:choose>
                
                
                
                 <!-- Loop 2 -->
                 <c:forEach items="${h_deals.hotelPriceList}" var="h_deals_list" end="${lsize}">
                <!-- hotelid,cffHotelId,locationID,checkin,checkout -->
                    <li  onclick="hotelDetailDealSearch('${h_deals_list.hotelCity}','${h_deals_list.cffHotelID}','${h_deals_list.locationID}','${h_deals_list.checkInDate}','${h_deals_list.checkOutDate}')">
                        <%-- onclick="hotelDetailDealSearch('${h_deals_list.locationID}','0','${h_deals_list.cffHotelID}','${h_deals_list.hotelCity}','${country}','${h_deals_list.checkInDate}','${h_deals_list.checkOutDate}')" --%>
                            <a class="row">
                            <div class="col-xs-8">
                                <h4>${h_deals_list.hotelName}</h4>
                                <div class="address ng-binding">                            
                                    <span class="fa fa-map-marker"></span> ${h_deals_list.hotelAddress}
                                </div>
                                <!--<div class="rating htl-stars">
                                    <span title="star${h_deals_list.starRating}" class="starRating" style="width: ${((h_deals_list.starRating/5)*100)}%"></span>
                                </div>-->
                                <c:if test="${h_deals_list.getTARating() > 0}">
                                <div class="tripadvisor_div">
                                                <div class="trip-advisor">
                                                    <div class="advisor-image">
                                                        <span class="advisorCircle">
                                                            <span class="trip-icon" style="width: ${((h_deals_list.getTARating()/5)*100)}%"></span>
                                                        </span>                                                     
                                                        <c:choose>
                                                            <c:when test="${h_deals_list.getTARating() == 5 || h_deals_list.getTARating() == 4.5}">
                                                               <span class="trip-rating">Excellent</span>
                                                            </c:when>
                                                            <c:when test="${h_deals_list.getTARating() == 4 || h_deals_list.getTARating() == 3.5}">
                                                               <span class="trip-rating">Very Good</span>
                                                            </c:when>
                                                            <c:when test="${h_deals_list.getTARating() == 3 || h_deals_list.getTARating() == 2.5}">
                                                               <span class="trip-rating">Good</span>
                                                            </c:when>
                                                            <c:when test="${h_deals_list.getTARating() == 2 || h_deals_list.getTARating() == 1.5}">
                                                               <span class="trip-rating">Average</span>
                                                            </c:when>                                                           
                                                        </c:choose>
                                                    </div>
                                                </div>
                                    </div>
                                </c:if>             
                                            
                                            
                            </div>
                            <div class="col-xs-4 text-right">
                                <div class="starting">Starting From</div>   
                                <div class="hotel-price"> <small><i class="fa fa-<c:out value='${dollar}'/>"></i></small><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${h_deals_list.avgNightlyPrice}" /></div> 
                                <span style="width:100%; float:right;">average/ night</span>
                                <div class="discount">${h_deals_list.promoTitle}</div>                              
                            </div>
                        </a>
                    </li>
                </c:forEach>        
                    
                </ul>
            </div>
            <!--Deal block end here -->
            
        </div>
      </div>
      </c:if>
      </c:forEach>
      
     
      
    </div>
    </div>  
    <div class="hid den">
    <h2>Top  International Destinations</h2>
    
    <div class="row">
      <!-- Loop 1 -->
      <c:set var="count" value="0"/>
      <c:forEach items="${hotelDeals.locationAndHotelList}" var="h_deals" >
      <c:if test="${!h_deals.isDomestic && count < 4}">
      <c:set var="count" value="${count+1}"/>
      <div class="col-sm-6 col-xs-12">
        <div class="item">
        <div class="figure">
            <c:set var = "cityimg" value = "${fn:split(fn:toLowerCase(h_deals.city),'-')}" />
          <figure><img src="/resources/images/hotels/${fn:replace(fn:trim(cityimg[0]),' ','-')}-deal.jpg" alt="${h_deals.city}" class="img-responsive" /> </figure>         
          <div class="hotel-deal">
            <h3>${h_deals.city}</h3>
            <a  href="javascript:void(0)" class="deal-button hidden-xs">See Deals</a>
             <c:set var="addressList" value="${fn:split(h_deals.displayName,',')}"/>
             <c:set var="country" value="${addressList[fn:length(addressList)-1]}"/>             
          </div>
        </div>
            <!--Deal block start here -->
            <div class="deal-block">
                <ul>
                
                <c:set var="lsize" value="0" />
                <c:choose>
                 <c:when test="${h_deals.hotelPriceList.size() > 3}">
                    <c:set var="lsize" value="3" />
                 </c:when>
                 <c:otherwise>
                    <c:set var="lsize" value="${h_deals.hotelPriceList.size()}" />
                 </c:otherwise>
                </c:choose>
                
                
                
                 <!-- Loop 2 -->
                 <c:forEach items="${h_deals.hotelPriceList}" var="h_deals_list" end="${lsize}">
                <!-- hotelid,cffHotelId,locationID,checkin,checkout -->
                    <li  onclick="hotelDetailDealSearch('${h_deals_list.hotelCity}','${h_deals_list.cffHotelID}','${h_deals_list.locationID}','${h_deals_list.checkInDate}','${h_deals_list.checkOutDate}')">
                        <%-- onclick="hotelDetailDealSearch('${h_deals_list.locationID}','0','${h_deals_list.cffHotelID}','${h_deals_list.hotelCity}','${country}','${h_deals_list.checkInDate}','${h_deals_list.checkOutDate}')" --%>
                            <a class="row">
                            <div class="col-xs-8">
                                <h4>${h_deals_list.hotelName}</h4>
                                <div class="address ng-binding">                            
                                    <span class="fa fa-map-marker"></span> ${h_deals_list.hotelAddress}
                                </div>
                                <!--<div class="rating htl-stars">
                                    <span title="star${h_deals_list.starRating}" class="starRating" style="width: ${((h_deals_list.starRating/5)*100)}%"></span>
                                </div>-->
                                <c:if test="${h_deals_list.getTARating() > 0}">
                                <div class="tripadvisor_div">
                                                <div class="trip-advisor">
                                                    <div class="advisor-image">
                                                        <span class="advisorCircle">
                                                            <span class="trip-icon" style="width: ${((h_deals_list.getTARating()/5)*100)}%"></span>
                                                        </span>                                                     
                                                        <c:choose>
                                                            <c:when test="${h_deals_list.getTARating() == 5 || h_deals_list.getTARating() == 4.5}">
                                                               <span class="trip-rating">Excellent</span>
                                                            </c:when>
                                                            <c:when test="${h_deals_list.getTARating() == 4 || h_deals_list.getTARating() == 3.5}">
                                                               <span class="trip-rating">Very Good</span>
                                                            </c:when>
                                                            <c:when test="${h_deals_list.getTARating() == 3 || h_deals_list.getTARating() == 2.5}">
                                                               <span class="trip-rating">Good</span>
                                                            </c:when>
                                                            <c:when test="${h_deals_list.getTARating() == 2 || h_deals_list.getTARating() == 1.5}">
                                                               <span class="trip-rating">Average</span>
                                                            </c:when>                                                           
                                                        </c:choose>
                                                    </div>
                                                </div>
                                    </div>
                                </c:if>             
                                            
                                            
                            </div>
                            <div class="col-xs-4 text-right">
                                <div class="starting">Starting From</div>   
                                <div class="hotel-price"> <small><i class="fa fa-<c:out value='${dollar}'/>"></i></small><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${h_deals_list.avgNightlyPrice}" /></div> 
                                <span style="width:100%; float:right;">average/ night</span>
                                <div class="discount">${h_deals_list.promoTitle}</div>                              
                            </div>
                        </a>
                    </li>
                </c:forEach>        
                    
                </ul>
            </div>
            <!--Deal block end here -->
            
        </div>
      </div>
      </c:if>
      </c:forEach>
      
     
      
    </div>
    
    <div class="container">
      <div class="crdeals hidden-xs">
        <div class="heading2">
          Our Exclusive Car Deals
        </div>
        <div class="row city-slider ">
          <div class="col-sm-3">
            <div class="car-section"
              onclick="OnCarDealSearch(62832, 'London Gatwick Airport, London Gatwick, United Kingdom', 'LGW', 'LGW', '', '')"
              style="cursor: pointer">

              <figure><img src="/resources/car/images/cars/Economy/chevrolet-spark.jpg" alt="car Image"></figure>
              <div class="city-name">

                <div class="name-b">Gatwick (LGW), London</div>

                <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>10.00 <br /><small>per day</small>
                </div>
              </div>
              <div class="price-section">
                <div class="car-name"> Nissan Versa <br />or Equivalent  </div>
                <div class="car-type"></div>
              </div>
              <div class="clr"></div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="car-section"
              onclick="OnCarDealSearch(29493, 'Liverpool John Lennon Airport, Liverpool, United Kingdom', 'LPL', 'LPL', '', '')"
              style="cursor: pointer">

              <figure><img src="/resources/car/images/cars/FullSize/chrysler-200.jpg" alt="car Image" /></figure>
              <div class="city-name">
                <div class="name-b">Liverpool (LPL), London </div>
                <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>20.00<br /><small>per day</small>
                </div>
              </div>
              <div class="price-section">
                <div class="car-name"> Vauxhall Corsa <br />or Equivalent   </div>
                <div class="car-type"></div>
              </div>
              <div class="clr"></div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="car-section"
              onclick="OnCarDealSearch(23870, 'Barcelona Intl. Airport, Barcelona, Spain', 'BCN', 'BCN', '', '')"
              style="cursor: pointer">

              <figure><img src="/resources/car/images/cars/Midsize/dodge-avenger.jpg" alt="car Image" /></figure>
              <div class="city-name">
                <div class="name-b">Barcelona (BCN), Spain </div>
                <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>24.60<br /><small>per day</small>
                </div>
              </div>
              <div class="price-section">
                <div class="car-name"> Fiat 500 <br />or Equivalent  </div>
                <div class="car-type"></div>
              </div>
              <div class="clr"></div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="car-section"
              onclick="OnCarDealSearch(34644, 'Santa Cruz de Tenerife North Airport, Tenerife Norte, Spain', 'TFN', 'TFN', '', '')"
              style="cursor: pointer">

              <figure><img src="/resources/car/images/cars/Premium/chevrolet-impala.jpg" alt="car Image" /></figure>
              <div class="city-name">
                <div class="name-b">Tenerife (TFN), Spain</div>
                <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>15.60<br /><small>per day</small>
                </div>
              </div>
              <div class="price-section">
                <div class="car-name"> Volkswagen Up  <br />or Equivalent</div>
                <div class="car-type"> </div>
              </div>
              <div class="clr"></div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="car-section"
              onclick="OnCarDealSearch(31075, 'Nice Cote D`Azur Airport, Nice, France', 'NCE', 'NCE', '', '')"
              style="cursor: pointer">

              <figure><img src="/resources/car/images/cars/Premium/chevrolet-impala.jpg" alt="car Image" /></figure>
              <div class="city-name">
                <div class="name-b">Nice (NCE), France</div>
                <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>31<br /><small>per day</small>
                </div>
              </div>
              <div class="price-section">
                <div class="car-name"> Fiat 500  <br />or Equivalent</div>
                <div class="car-type"> </div>
              </div>
              <div class="clr"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    	
  </div>
</section>
  
  <!--Footer Start-->
  <jsp:include page="home_footer.jsp"></jsp:include>
  <!--Footer Closed-->
</div>
<!-- script engine -->
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.slides.min.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/i18n/jquery-ui-i18n.js"></script>
<script src="/resources/js/inner_engine_en.js"></script>
<!--Use only hotel engin home -->
<script>
$(document).ready(function(){
	$("#flight_tab").removeClass('active');
	$("#hotel_tab").addClass('active');
	$("#tab_a").removeClass('active');
	$("#tab_b").addClass('active');	
	
});

</script>
   <script>
document.getElementById("homeactive").className="active";
</script>
</body>
</html>
