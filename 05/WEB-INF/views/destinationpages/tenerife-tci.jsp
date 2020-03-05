<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE HTML>
<html lang="en" data-ng-app="dynamicPageApp">
<head>
<title>Cheap Flights to Tenerife | Tenerife Flights ${data.siteName}</title>
<meta name="description" content="Looking for cheap flights to Tenerife? TraveloPick offers best airfare deals on airline tickets to Tenerife. Book now to get exciting deals on Tenerife flights." />
<meta name="keywords" content="Cheap Flights to Tenerife, Flights to Tenerife, Tenerife flights" />
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!--StyleSheet here-->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/common/css/dynamic-page-style.css?13082019" rel="stylesheet">

<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/angular.js"></script>
<script src="/resources/common/js/slick_carousel.js"></script>
<script src="/resources/js/travel.min.js"></script>
<!-- end travel css -->
<!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

	<!--  / Google analytics \ -->
<jsp:include page="../google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
	
</head>
<body class="car_section" data-ng-controller="dealCtrl">
<!--  / Header Box \ -->
<jsp:include page="../home_header.jsp"></jsp:include>
<!-- Header Box -->
<div class="main">
  
  <!-- Banner Box -->
  <div id="banner" style="background:url(/resources/images/banner/city/tenerife.jpg) no-repeat center ;  ">
    <div class="container">
      <div class="row">
			<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 search_engine">
			  <!-- search engine -->
			  <jsp:include page="/home_engine_new"></jsp:include>
			   </div>
      </div>
    </div>
  </div>
  <!-- Banner Box -->
  
    
<div class="clearfix"></div>
    <jsp:include page="../partial/why-book-travelopick.jsp"></jsp:include>
	
  
<c:set var="yesterday" value="<%=new Date(new Date().getTime() - 60*60*24*1000)%>"/>
<!-- car Slider Box --> 
<article>
    <div class="container-fluid body-bg-gray" data-ng-controller="airlineCtrl">
        <div class="container">
          <div class="row">
            <div class="cityline_head">
            <c:if test="${dynamicDeals.size() > 0}" >
              <div class="breadcrumbs"> <a href="/">Home</a> <i class="fa fa-angle-right"></i>  Tenerife</div>
              </c:if>
                    <c:set var="length"  value="${dynamicDeals.size()}"/>
                    <c:choose>
                     <c:when test="${length>1}">
                      <c:if test="${length<8}">
                        <c:set var="len"  value="${length/2}"/>
                        <fmt:parseNumber var="i" integerOnly="true" type="number" value="${len}" />
                        <c:set var="len"  value="${i*2}"/>
                      </c:if>
                      <c:if test="${length>=8}" >
                        <c:set var="len"  value="8"/>
                      </c:if>
              <h1> Cheap Flights to Tenerife</h1>
				<p class="light-gray"> Last updated on <span class="text-red"><fmt:formatDate pattern="EEEE dd/MM/yyyy" value="${yesterday}" /> at 05:00 AM</span>, the fares mentioned below are for Return Trip flight tickets and inclusive of fuel surcharges, service fee and taxes. Based on historical data, these fares are subject to change without prior notice and cannot be guaranteed at the time of booking. Kindly go through our <a href="/terms-and-conditions" target="blank" style="text-decoration: underline;">terms and conditions</a> before booking. </p>
                      <div class="deals-container row-flex margin-lg-top">
                        <c:forEach items="${dynamicDeals}" var="searchs" begin="0" end="${len-1}" >
                          
                            <c:set var="sear" value="'"/>
                            <c:set var="rep" value=""/>
                            
                            <c:set var="fairpot" value="${fn:replace(searchs.getFromCity().getAirportName(),sear,rep)}"/>
                            <c:set var="tairpot" value="${fn:replace(searchs.getToCity().getAirportName(),sear,rep)}"/>
                            
                             <c:set var="call" value=""/>
                             <c:if test="${fn:toLowerCase(searchs.getAirline().getCode()) == 'ccf'}" >
                                <c:set var="call" value="call-deal"/>
                             </c:if>
                           
                            <div class="deal_block ${call}" data-ng-click="dealClick('${searchs.getCabinClass()}','${searchs.getJourneyType()}','${searchs.getFromCity().getCityName()}','${searchs.getFromCity().getCityCode()}','${fairpot}','${searchs.getFromCity().getCountry()}','${searchs.getToCity().getCityName()}','${searchs.getToCity().getCityCode()}','${tairpot}','${searchs.getToCity().getCountry()}','${searchs.getDepDate()}','${searchs.getRetDate()}')">
                              <!-- data-ng-click="dealClick('Economy','RoundTrip','Bristol','BRS','Bristol','GB','Alicante','ALC','Alicante Airport','ES','09-24-2019','10-01-2019')" -->
                              <div class="col-md-9 col-sm-8 col-xs-9 ">
                                <c:choose>
                                  <c:when test="${not empty searchs.getRetDate()}">
                                    <div class="deal_date">${searchs.getDepDate()} - ${searchs.getRetDate()}</div>
                                  </c:when>
                                  <c:otherwise>
                                    <div class="deal_date">${searchs.getDepDate()}</div>
                                  </c:otherwise>
                                </c:choose>
                                <div class="col-md-5 col-sm-6 col-xs-6  no-padding city_name">
                                ${searchs.getFromCity().getCityCode()}
                                  <c:set var="fcity" value="${searchs.getFromCity().getCityName()}"/>
                                  <%-- <c:if test="${fn:length(fcity) gt 12}">                           
                                            <c:set var="fcity" value="${fn:substring(fcity,0,10)}.."/>
                                             </c:if> --%>
                                  <span class="city_name_full" title="${searchs.getFromCity().getCityName()}">${fcity}</span></div>
                                <div class="col-md-2 col-sm-2 hidden-sm hidden-xs" style="font-size:20px; padding-left:5px; color:#999999;"> <i class="fa fa-arrow-right" aria-hidden="true"></i> </div>
                                <div class="col-sm-5 col-xs-6 no-padding city_name">
                                ${searchs.getToCity().getCityCode()}
                                  <c:set var="fcity" value="${searchs.getToCity().getCityName()}"/>
                                  <%-- <c:if test="${fn:length(fcity) gt 12}">                           
                                          <c:set var="fcity" value="${fn:substring(fcity,0,10)}.."/>                               
                                        </c:if> --%>
                                  <span class="city_name_full" title="${searchs.getToCity().getCityName()}" >${fcity}</span></div>
                              </div>
                              <div class="col-md-3 col-sm-4 col-xs-3 no-padding-left xs-no-padding text-right">
                                <div class="text-black" ><span><a href="javascript:void(0)" class="eng-open" aria-hidden="true">$${searchs.getTotalFare()}</a> </span>
                                <span class="deal_trip">${searchs.getJourneyType()}</span> 
                                <!-- <span class="deal_book_btn">Book Now</span> --> </div>
                              </div>
                            
                            <c:if test="${fn:toLowerCase(searchs.getAirline().getCode()) == 'ccf'}" >
                                          
                                                    <div class="call-div">
                                                      <a href="javascript:void(0)" class="eng-close fa fa-close"> </a>
                                                             <span class="help_no"> TOLL FREE (24/7)</span>
                                                             <a href="tel:1-888-899-0183" onClick="ga('send', 'event', 'Phone Call', 'Click to Call', '1-888-899-0183');"><span class="toll-free">1-888-899-0183</span></a>
                                                             <span class="help_no">Call Only Fare </span>
                                                      </div>
                                                     <a class="mobile-div" href="tel:1-888-899-0183" onClick="ga('send', 'event', 'Phone Call', 'Click to Call', '1-888-899-0183');"></a>
                                                    
                                                </c:if>
                                </div>
                           
                        </c:forEach>
                      </div>
                      <div class="clear"></div>
                <div class="col-xs-12 text-red">*All fares are quoted in GBP.</div>
                    </c:when>
                    <c:otherwise>

                    </c:otherwise>
                  </c:choose>
                  
                  
            </div>
      </div>
     </div>
    </div>
</article>
<div class="container">
	<!--  about Start Here -->
		<div class="about-destinationBox">
			<div class="row">
            <div class="col-xs-12">
			<br/>
			
			<h2>Search Flights to Tenerife</h2>
			
					<p>A true traveller's paradise, Tenerife is where nature and man have made life more beautiful. It boasts so many enchanting experiences to visitors that once you've been here, you become an admirer of the city for the rest of your life.The carnival hosted by the city is only second to the one hosted in Rio.The crystal clear warm water is just another reason to plunge yourself in some tropical bliss. Take acheap flight to Tenerifeand indulge ineverything this amazing city offers.</p>
					
				</div>
			</div>
		</div>

	<!--/ about end -->
	
	<div class="attractionBox">
	
	<div class="row">
		<div class="col-sm-12">
			<h3>Major Tourist Attractions</h3>
		</div>
	</div>
	
		<div class="row row-flex">
			
			<div class="col-sm-4">
			<div class="block">
				<h4>Carnival De Santa Cruz</h4>
					
					<p>Synonymous to this city's identity CarnivalDe Santa Cruz is held every year in the month of February. This is when the entire town turns into a party venue for a month long celebration of colors, food, fun and life. If you want to be a part of this celebration, then book yourflight to Tenerifeaccordingly.   </p>
					</div>
			</div>
			
			<div class="col-sm-4">
			<div class="block">
				<h4>Playa De Las Americas</h4>
					
					<p>Famed for its eclectic nightlife, the Playa De Las Americas is a place that you shouldn't miss out on while vacationing in Tenerife. The entire area exudes such a lively personality that many visitors come here solely for this blissful experience. With attractions like light and music fountain, the Siam Park and gorgeous beaches, every moment spent here becomes a beautiful memory.</p>
			</div>
			</div>
			
			
			<div class="col-sm-4">
			<div class="block">
				<h4>Teide National Park</h4>
					
					<p>Situated on Mount Teide, which is the highest mountain in Spain, is this UNESCO World Heritage Site called Teide National Park. Famous for its rustic vistas, the place is perfect for nature lovers who want to spend some time traversing through the walking trails of this park.MakeTenerife flight reservations, fly to the city and explore this natural wonder on your next holiday.</p>
			</div>
			</div>
			
			
			
		</div>
	</div>
</div>

  
  <!--Footer Start-->
  
  <!--Footer Closed-->
</div>

<script>
$(document).ready(function(){
        $("#flight_tab").addClass('active');
        $("#hotel_tab").removeClass('active');
        $("#car_tab").removeClass('active');
        $("#tab_a").addClass('active');
        $("#tab_b").removeClass('active');        
        $("#tab_c").removeClass('active');
        
});

</script>
<jsp:include page="../home_footer.jsp"></jsp:include>
<!--Footer-->
<!-- script engine -->
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.slides.min.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/i18n/jquery-ui-i18n.js"></script>
<script src="/resources/js/inner_engine_en.js?080719122"></script>
<!--Use only hotel engin home -->
</body>
</html>
