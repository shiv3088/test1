<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!doctype html>
<html>
<head>

<!--[if lt IE 9]>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<c:forEach items="${bookingWrapperList}" var="booking"  >

<title>${data.siteName} - Your booking <c:out value='${booking.bookingStatus}' /></title>
</c:forEach>

<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="/resources/flight-result/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/flight-result/css/font-awesome.min.css" rel="stylesheet">  
<link href="/resources/us/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/flight-result/css/angular-busy.css" rel="stylesheet">
 <link href="/resources/us/css/result-style.css?17" rel="stylesheet">
<link href="/resources/flight-result/css/flag-icon.css" rel="stylesheet">
<script src="/resources/flight-result/lib/angular/angular.js"></script>
<script src="/resources/flight-result/js/jquery.1.11.1.min.js"></script>
<script src="/resources/flight-result/js/local-cache.js"></script>
<script src="/resources/flight-result/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.validate.js"></script> 
<script type="text/javascript" src="/resources/js/crossell/crosssell-script.js"></script>


 <c:forEach items="${bookingWrapperList}" var="booking"  >
 <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal}" />
</c:forEach>
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<!--  / Google analytics \ -->
<%
	int sessionId=0;
try {
		 sessionId=Integer.parseInt((String)request.getSession().getAttribute("SessionHit"));
	} catch (Exception e) {
		sessionId=0;
	}
	
if(sessionId == 0){

%>

<jsp:include page="google-analytics.jsp"></jsp:include>
<%}%>
<!--  / Google analytics \ -->



<!-- JavaScript -->


<script>
$(document).ready(function(){

$(".show-more a").on("click", function() {

var $this = $(this); 
var $content = $this.parent().prev("div.contentexpend");
var linkText = $this.text().toUpperCase(); 

if(linkText === "LEARN MORE"){
linkText = "Hide";
$content.switchClass("hideContent", "showContent", 400);
} else {
linkText = "Learn more";
$content.switchClass("showContent", "hideContent", 400);
};

$this.text(linkText);
});
});
//
</script> 

</head>

<body class="confirmation" id="target">
<input type="hidden" id="bookingGDS" value="${bookingWrapper.flight.gds}"/>
<input type="hidden" id="tmString" value="${bookingWrapper.tripMate}"/>
<input type="hidden" id="sourceMedia" value="${bookingWrapper.sourceMedia}">
<!-- Static navbar -->
<header>
  <nav class="navbar navbar-default navbar-static-top">
  
    <div class="container">
	
      <div class="row">
        <div class="col-sm-4 col-xs-5"> <a class="navbar-brand" href="/us"><img src="/resources/flight-result/images/logo.png?v1" alt="Travelopick Flight Booking"></a> </div>
        <div class="col-sm-8 col-xs-7"><!-- <img src="/resources/flight-result/images/header_img.gif" class="header_ad" alt="Free Airport Lounge Access on Next Flight Booking" />--> </div>
      </div>
     
    </div>
  </nav>
</header>

<!-- phone Strip -->

<div class="phone_strip">
	
	<div class="container">
		
		<div class="row">
			
			<div class="col-md-2"></div>
			<div class="col-sm-12 col-md-8 col-xs-12">
				
				<!-- <p><span class="hidden-xs">Need help, Our </span> 24x7 Toll Free Support : <a href="tel:1 888 509 5589">1 888 509 5589</a></p> -->
				<p><span class="hidden-xs">Need help, Our </span> 24x7 Toll Free Support : <a href="tel:+1-888-737-8675">+1-888-737-8675</a></p>
				
			</div>
			
		</div>
		
	</div>
	
</div>
<%String airlineCode="X"; %>


    
	 <%String classes="Economy";
	  String froCityg="SFO";
      String toCityg="LAX";
      String airlineg="AA";	 
      String UAAirline="OO";	
      String ResDesignCode="XX";	 %>
   	<c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
	
	<c:set var="classes" value="${search.cabinType}" scope="page"/>
	<c:set var="froCityg" value="${search.originAirport.cityName}" scope="page"/>
	<c:set var="toCityg" value="${search.destinationAirport.cityName}" scope="page"/>
	
	
	 <c:set var="coriginAirport" value="${search.originAirport.cityCode}" />
        <c:set var="cdestinationAirport" value="${search.destinationAirport.cityCode}" />
        <c:set var="ctravelDate" value="${fn:split(search.travelDate,'T')[0]}" />
        <c:set var="creturnDate" value="${fn:split(search.returnDate,'T')[0]}" />
        <c:set var="cadults" value="${search.adults}" />
        <c:set var="cchildren" value="${search.children}" />
        <c:set var="cinfants" value="${search.infants}" />  
		
		<c:set var="ctripType" value="O" /> 
<c:if test="${search.tripType == '2'}">
<c:set var="ctripType" value="R" /> 
</c:if>

<c:set var="ctripCategory" value="DOM" />
<c:if test="${(search.originAirport.country != 'US' && search.originAirport.country != 'CA') || (search.destinationAirport.country != 'US' && search.destinationAirport.country != 'CA')}">
<c:set var="ctripCategory" value="INT" /> 
</c:if>

	</c:forEach>



	<c:set var="originStateIndex1"  value="${fn:indexOf(flightSearchWrapper.froCity,'[')}}" />
<c:set var="originStateIndex2" value="${fn:indexOf(flightSearchWrapper.froCity,']')}}" />
<fmt:parseNumber var="i" type="number" value="${originStateIndex1}" />
<fmt:parseNumber var="j" type="number" value="${originStateIndex2}" />
<c:set var="originState" value="${fn:substring(flightSearchWrapper.froCity,i+1,j)}" />  

<c:set var="originStateIndex1"  value="${fn:indexOf(flightSearchWrapper.toCity,'[')}}" />
<c:set var="originStateIndex2" value="${fn:indexOf(flightSearchWrapper.toCity,']')}}" />
<fmt:parseNumber var="i" type="number" value="${originStateIndex1}" />
<fmt:parseNumber var="j" type="number" value="${originStateIndex2}" />
<c:set var="desState" value="${fn:substring(flightSearchWrapper.toCity,i+1,j)}" />


<fmt:parseDate value="${ctravelDate}" var="dateObject1" pattern="MM-dd-yyyy" />
<fmt:parseDate value="${creturnDate}" var="dateObject2" pattern="MM-dd-yyyy" />

<fmt:parseNumber  value="${ dateObject1.time / (1000*60*60*24) }" integerOnly="true" var="nowDays" scope="request"/>
<fmt:parseNumber value="${ dateObject2.time / (1000*60*60*24) }" integerOnly="true" var="otherDays" scope="page"/>
	<c:set value="${otherDays - nowDays}" var="dateDiff"/>
	
<c:forEach items="${bookingWrapperList}" var="booking"  >
<!-- /container \-->
<c:set var="dollar" value="usd"/> 
<c:set var="airCabinClass" value="${booking.cabinClass}" scope="page"/>
<div class="confirmationCntr">

	<div class="container">
	
		<div class="row">
		
			
			<div class="col-md-2"></div>
			<div class="col-sm-12 col-md-8 col-xs-12">
			<div class="hidden-xs">
			
				         <c:choose>
							<c:when test="${booking.macp =='Yes'}">
								<!-- <a href="tel:1-800-359-5040" onClick="ga('send', 'event', 'Phone Call', 'Click to Call', '1-800-359-5040');" style="width:100%;"> -->
								<a href="tel:+1-888-737-8675" onClick="ga('send', 'event', 'Phone Call', 'Click to Call', '+1-888-737-8675');" style="width:100%;">
								<img src="/resources/flight-result/images/concierge-program-lg.gif" class="img-responsive">
								</a>	
						    </c:when>
							<c:otherwise>
							    <!-- <a href="tel:1-866-374-4847" onClick="ga('send', 'event', 'Phone Call', 'Click to Call', '1-866-374-4847');" style="width:100%;">
								<img src="/resources/flight-result/images/conformation-lounge-top-banner.gif" alt="Lounge" class="img-responsive"> 
								</a>-->
							</c:otherwise>
						</c:choose>
			</div>
			<div class="visible-xs">
			    <c:choose>
					<c:when test="${booking.macp =='Yes'}">
						<!-- <a href="tel:1-800-359-5040"> -->
						<a href="tel:+1-888-737-8675">
						<img src="/resources/flight-result/images/concierge-program-lg.gif" class="img-responsive">
						</a>	
					</c:when>
					<c:otherwise>
						<!--  <a href="tel:1-866-218-1529"> <img src="/resources/flight-result/images/conformation-lounge-top-banner.gif" alt="Lounge" class="img-responsive"></a> -->
					</c:otherwise>
				</c:choose>
			</div>				
				
				<c:set var="sessionHit" value="${booking.sessionHit}" />
				<!-- / booking refrence number Box \-->
				<div class="booking_refBox">
				 <c:set var="cjPnr" value="${booking.bookingId}" />
				 <input type="hidden" value="${booking.bookingId}" id="bookingIdss"/>
				  <c:choose>
				 <c:when test="${booking.flight.bookingCarrrierCode.code=='B6' && booking.flight.gds==3}">
<%-- 					<p>Your booking has been successfully received, You may also buzz at<br/><b>1-888-737-8675</b> (Toll Free). Your booking reference number is <strong><c:out value='${booking.bookingId}' /></strong></p> --%>
					<p>Your booking has been successfully received, You may also buzz at<br/><b>+1-888-737-8675</b> (Toll Free). Your booking reference number is <strong><c:out value='${booking.bookingId}' /></strong></p>                        
				 </c:when>
				  <c:when test="${(booking.flight.bookingCarrrierCode.code=='B6' || booking.flight.bookingCarrrierCode.code=='DL') && booking.flight.gds==2}">
				         
					<%-- <p>Your booking has been successfully received, You may also buzz at<br/><b>1-888-737-8675</b> (Toll Free). Your booking reference number is <strong><c:out value='${booking.bookingId}' /></strong></p> --%>
					<p>Your booking has been successfully received, You may also buzz at<br/><b>+1-888-737-8675</b> (Toll Free). Your booking reference number is <strong><c:out value='${booking.bookingId}' /></strong></p>
				 </c:when>
				<c:otherwise>
				 <c:choose>
                	
				  <c:when test="${booking.pnr=='X'}">				
					
					<img src="${data.siteUrl}resources/flight-result/images/pending.png" alt="" />
					<p><b>Your booking is <c:out value='${booking.bookingStatus}' /> </b></p>
					<p>Our Associate will reach you shortly. You may also buzz at<br/>
						<!-- <b>1-888-737-8675</b> --> <b>+1-888-737-8675</b> (Toll Free). Your booking reference number is </p>
					<strong><c:out value='${booking.bookingId}' /></strong>
				  </c:when>
							<c:when test="${booking.getResponseStatus().getStatus() == 2}">
								<img src="/resources/flight-result/images/conf-icon.png" alt=""/>					
								<p>Your booking is <c:out value='${booking.bookingStatus}' /> , Your booking reference number is</p>
								<strong><c:out value='${booking.bookingId}' /></strong>
								<p><c:out value='${booking.getResponseStatus().getErrorDescription()}' /></p>					
							</c:when>
							<c:otherwise>
							 	<img src="/resources/flight-result/images/conf-icon.png" alt="" />	
							 	<c:choose>
							  	 <c:when test="${booking.bookingId == '2812150323'}">				
									 <p>Your booking is Pending , Your booking reference number is</p>
									 <strong>LUF4321</strong>
								 </c:when>
								 <c:otherwise>
									 <p>Your booking is <c:out value='${booking.bookingStatus}' /> , Your booking reference number is</p>
									 <strong><c:out value='${booking.bookingId}' /></strong>					 
								 </c:otherwise>
								</c:choose>
							</c:otherwise>
						</c:choose> 
					</c:otherwise>
				</c:choose>
				</div>
				<!-- \ booking refrence number Box /-->
				
				<c:if test="${booking.flexSearch ==  'yes' || booking.flexSearchTo ==  'yes'}">
					          
					         <p class="atten-txt">
<!-- 					         	<b>Kind Attention:</b> This is a flexible date that you Booked. In case you would like to enquire more about this you may call us on our toll free number: 1-888-737-8675.  -->
					         	<b>Kind Attention:</b> This is a flexible date that you Booked. In case you would like to enquire more about this you may call us on our toll free number: +1-888-737-8675. 
					         </p>          
					           
					         </c:if> 
					         
					         <c:if test="${booking.nearBy ==  'yes' || booking.nearByTo ==  'yes'}">
					          
					          <p class="atten-txt">
<!-- 					         	<b>Kind Attention:</b> This is a Near By Airport that you Booked. In case you would like to enquire more about this you may call us on our toll free number: 1-888-737-8675.  -->
					         	<b>Kind Attention:</b> This is a Near By Airport that you Booked. In case you would like to enquire more about this you may call us on our toll free number: +1-888-737-8675. 
					         </p>          
					           
					         </c:if> 
					         <c:set var="tgString" value='${booking.travelGuard}'/>
					           <c:if test="${tgString eq 'Yes'}">
					                             <c:set var="tgpString" value='${booking.policyNumber}'/>
					                           <c:if test="${tgpString ne 'X'}">
					                           <div class="reference_num-bg">
					                           <div class="row">
						      <div class="col-xs-6"> Your Travel Guard Policy Number:&nbsp; </div> 
					          <div class="col-xs-6 reference-num"> <c:out value='${booking.policyNumber}' /> </div>
													
												 </div>
												 </div>
								 
								 				<div class="reference_num-bg">
					                           <div class="row">
						      <div class="col-xs-6"> Your can check your Policy: &nbsp; </div> 
						      <div class="col-xs-6 reference-num"> <a href="<c:out value='${booking.policyLookup}' />"> <c:out value='${booking.policyLookup}' /></a> </div>
						
							</div>
							</div>
        
					         </c:if>
                        </c:if>
                          <c:if test="${booking.brb ==  'Yes'}">

									
											
											<h3 class="confim_title">Baggage Protection</h3>
											
												<div class="reference_num-bg"> 
												<div class="row">
													<div class="col-xs-6">Your baggage reference number is:</div>
													<div class="col-xs-6 reference-num">
														<c:out
															value='${booking.brbServiceNumber}' />
													
													</div>
												</div>
														 
												 </div>
										
									</c:if>
				
				<c:if test="${booking.gds == '9' && booking.pnr !=  'X' && booking.pnr !=  ''}">																
					<div class="reference_num-bg"> 
						<div class="row">
							<div class="col-xs-6">Your Airline reference number is:</div>
							<div class="col-xs-6 reference-num">
							<c:out value='${booking.pnr}' />
							</div>
						</div>
					</div>										
				</c:if>
				
				<!-- / itenery detail Box \-->
				<div class="itinerary_detailBox">
					
					<h3 class="confim_title">Itinerary Details  </h3>
					
								<% int departFlights=0; int departFli=0; %>
                                 <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl" >
                                   <c:if test="${flight.isReturnFlight ==  false}">
                                   <% departFlights=departFlights+1; %> 
                                   </c:if>
                                 </c:forEach>
					
					<!-- / Depature \-->
					<c:set var="flreturn" value="false"/>
					<div class="itinerary">
					
					<div class="row">
					  <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl" >	
					      <c:if test="${flight.isReturnFlight ==  true}">	
					         <c:set var="flreturn" value="true"/>
					      </c:if>	
					      <c:if test="${flight.isReturnFlight ==  false}">		
		<c:set var="flightIti" value="${flightIti} ${flight.originAirport.airportCode} - ${flight.destinationAirport.airportCode}" scope="page" />						  
						  <c:if test="${fl.first}">
						   <c:set var="dateParts" value="${fn:replace(flight.departureTime,'T', ' ')}" />
							<fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
											
							<div class="col-xs-12"><p class="text-green"><strong>Departure Flights</strong>  | <fmt:formatDate type="date" dateStyle="full" value="${dateObject }" pattern="EEE, dd MMM, yyyy"/> </p></div>
						</c:if>
						</c:if>
					 </c:forEach>
					</div>
					<c:if test="${empty classes}">
					   <c:set var="classes" value="${booking.flight.bookingClass }"/>
					 </c:if>	
					
				 <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl">
                   <c:if test="${flight.isReturnFlight ==  false}">
                   					
				   <div class="return itineraryblock">
					<div class="row">
						<c:set var="airlineg" value="${flight.airline.code}" scope="page"/>
						<div class="col-sm-4 col-xs-5">
						  <c:if test="${UAAirline != 'UA'}">
						     <c:set var="UAAirline" value="${flight.airline.code}" scope="page"/>
						     </c:if>
						     
						      <c:if test="${ResDesignCode != 'N'}">
						     <c:set var="ResDesignCode" value="${flight.resDesignCode}" scope="page"/>
						     </c:if>
						     
							<img src="${data.siteUrl}resources/images/airline/<c:out value='${fn:toLowerCase(flight.airline.code)}' />.gif" alt="" class="flight_icon" />						
							<div class="padding_top airline_name"><c:out value='${flight.airline.name}' /></div>
							
						</div>
						<div class="col-sm-4 col-xs-3 text-center"><span class="padding_top"><strong>Flight No:</strong> <c:out value='${flight.flightCode}' /></span></div>
						<div class="col-sm-4 col-xs-4 text-right">
						
						<b>Class:</b>
						<c:if test="${flight.cabinClass != booking.flight.bookingClass}">
									<span class="padding_top coach-hilight">
								</c:if>
								<c:if test="${flight.cabinClass == booking.flight.bookingClass}">
									<span class="padding_top dis-blo">
								</c:if>
								<c:if test="${flight.cabinCategory != ''}">
									         <c:out value="${flight.cabinCategory}"/>-</c:if>
									<c:if test="${flight.cabinClass == '1'}">
									 Economy
									</c:if>
									<c:if test="${flight.cabinClass == '2'}">
									 Premium Economy
									</c:if>
									<c:if test="${flight.cabinClass == '3'}">
									Business
									</c:if>
									<c:if test="${flight.cabinClass == '4'}">
									 First
									</c:if>
									<c:if test="${flight.cabinClass == '6'}">
									 Standard Economy
									</c:if>
									</span>
									<c:if test="${booking.gds != '9'}">
									<div> Check-in Baggage  ${flight.baggage} </div>
									</c:if>
									
						</div>
						
					</div>
					
					<c:if test="${flight.airline.code != flight.operatingCarrier.code}">					
						<div class="row">
							<div class="col-xs-12 text-center">
								<small class="operated">Operated By : <c:out value='${flight.operatingCarrier.name}' /></small>
							</div>
						</div>
					</c:if>
						  <c:if test="${fn:contains(flight.equipmentTypeDes, 'TRAIN')}">
                      <div class="row">
						<div class="col-xs-12 text-center ">
								<small class="operated">Note: This is a Train Service</small>

						</div>
					   </div>
                       </c:if>
					   <c:if test="${fn:contains(flight.equipmentType, 'BUS')}">
                      <div class="row">
						<div class="col-xs-12 text-center ">
								<small class="operated">Note: This is a Bus Service</small>

						</div>
					   </div>
                       </c:if>
					<div class="row margin_top">
						
						<div class="col-xs-4">
						    <c:set var="dateParts" value="${fn:replace(flight.departureTime,'T', ' ')}" />
							<fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
							
							<div class="time"><fmt:formatDate type="date" dateStyle="full" value="${dateObject }" pattern="MM/dd/yyyy"/> | <fmt:formatDate value="${dateObject }" pattern="hh:mm a" /></div>
							<strong class="airline"><c:out value='${flight.originAirport.airportCode}' /><small>(<c:out value='${flight.originAirport.cityName}' />)</small></strong>
							<div class="full_airline"><c:out value='${flight.originAirport.airportName}' /></div>
						</div>
						
						<div class="col-xs-4 text-gray text-center">
						
							
							   <div>
							   	<c:choose>
                         <c:when test="${booking.gds == '1'}">
							   <i class="fa fa-clock-o"></i> 
				            		 
								<c:set var="minutes" value="${fn:substringBefore((flight.EFT/2) div 60, '.')}"/> 
								<fmt:formatNumber var="seconds" minIntegerDigits="2" value="${fn:substringBefore( (flight.EFT/2) - (minutes*60), '.') }"/>
								<c:out value='${minutes}' />h <c:out value='${seconds}' />m
						</c:when>    
                <c:otherwise>
                 
                   
                </c:otherwise>
            </c:choose>
							   </div> 
						   	
						   
						   <img src="/resources/flight-result/images/flights_sep.png" alt="" /> 
						
							<div>
							   <c:choose>
					                <c:when test="${flight.techStops =='1'}">
					                   One Stop
					                </c:when>    
					                <c:otherwise>
					                   Non Stop
					                </c:otherwise>
					            </c:choose>
							</div> 
						</div>
						
						<div class="col-xs-4 text-right">
						   <c:set var="dateParts" value="${fn:replace(flight.arrivalTime,'T', ' ')}" />
						   <fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
							<div class="time"><fmt:formatDate type="date" dateStyle="full" value="${dateObject }" pattern="MM/dd/yyyy"/> | <fmt:formatDate value="${dateObject }" pattern="hh:mm a"  />
							 </div>
							<strong class="airline"><c:out value='${flight.destinationAirport.airportCode}' /> <small>(<c:out value='${flight.destinationAirport.cityName}' />)</small></strong>
							<div class="full_airline"><c:out value='${flight.destinationAirport.airportName}' /> </div>
							
							<!-- <div class="full_airline"> <span class="padding_top">Seats Selected:
									<span class="padding_top">${flight.seatNumbers}</span>
									</span>  </div>-->
							
						</div>						
					 </div>
					</div>
					</c:if>
					</c:forEach>
					
					</div>
					
					<!-- / Return \-->
					
					 <c:if test="${flreturn == true}">
					
						<div class="itinerary">
						 
						    <c:set var="ret" value="0"/>				
							<c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl" >
							    <c:if test="${ret == 0}">
	                  			<c:if test="${flight.isReturnFlight ==  true}">				       
							         <c:set var="dateParts" value="${fn:replace(flight.departureTime,'T', ' ')}" />
									<fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
									<div class="row">								
										<div class="col-xs-12"><p class="text-green"><strong>Return Flights</strong>  | <fmt:formatDate type="date" dateStyle="full" value="${dateObject }" pattern="EEE, dd MMM, yyyy"/> </p></div>								
									</div>	
									<c:set var="ret" value="1"/>						  
								</c:if>
								</c:if>
							</c:forEach>
							 					
	                   <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl" >
	                  <c:if test="${flight.isReturnFlight ==  true}">
					  
					  <c:set var="flightIti" value="${flightIti} | " scope="page" />
				<c:set var="flightIti" value="${flightIti} ${flight.originAirport.airportCode} - ${flight.destinationAirport.airportCode}" scope="page" />
				
	                   <div class="return itineraryblock">
					<div class="row">
						
						<div class="col-sm-4 col-xs-5">
						  <c:if test="${UAAirline != 'UA'}">
						     <c:set var="UAAirline" value="${flight.airline.code}" scope="page"/>
						     </c:if>
						     
						      <c:if test="${ResDesignCode != 'N'}">
						     <c:set var="ResDesignCode" value="${flight.resDesignCode}" scope="page"/>
						     </c:if>
						     
						
							<img src="${data.siteUrl}resources/images/airline/<c:out value='${fn:toLowerCase(flight.airline.code)}' />.gif" alt="" class="flight_icon" />						
							<div class="padding_top airline_name"><c:out value='${flight.airline.name}' /></div>
							
						</div>
						<div class="col-sm-4 col-xs-3 text-center"><span class="padding_top"><strong>Flight No:</strong> <c:out value='${flight.flightCode}' /></span></div>
						<div class="col-sm-4 col-xs-4 text-right">
						<b>Class:</b>
						<c:if test="${flight.cabinClass != booking.flight.bookingClass}">
									<span class="padding_top coach-hilight">
								</c:if>
								<c:if test="${flight.cabinClass == booking.flight.bookingClass}">
									<span class="padding_top dis-blo">
								</c:if>
								<c:if test="${flight.cabinCategory != ''}">
									         <c:out value="${flight.cabinCategory}"/>-</c:if>
									<c:if test="${flight.cabinClass == '1'}">
									 Economy
									</c:if>
									<c:if test="${flight.cabinClass == '2'}">
									Premium Economy
									</c:if>
									<c:if test="${flight.cabinClass == '3'}">
									Business
									</c:if>
									<c:if test="${flight.cabinClass == '4'}">
									 First
									</c:if>
									<c:if test="${flight.cabinClass == '6'}">
									 Standard Economy
									</c:if>
									</span>
									<c:if test="${booking.gds != '9'}">
									<div> Check-in Baggage  ${flight.baggage} </div>
									</c:if>
									
									
						</div>
						
					</div>
					
					<c:if test="${flight.airline.code != flight.operatingCarrier.code}">					
						<div class="row">
							<div class="col-xs-12 text-center">
								<small class="operated">Operated By : <c:out value='${flight.operatingCarrier.name}' /></small>
							</div>
						</div>
					</c:if>
					  <c:if test="${fn:contains(flight.equipmentTypeDes, 'TRAIN')}">
                      <div class="row">
						<div class="col-xs-12 text-center ">
								<small class="operated">Note: This is a Train Service</small>
                        </div>
					   </div>
                       </c:if>
					     <c:if test="${fn:contains(flight.equipmentType, 'BUS')}">
                      <div class="row">
						<div class="col-xs-12 text-center ">
								<small class="operated">Note: This is a Bus Service</small>
                        </div>
					   </div>
                       </c:if>
					<div class="row margin_top">
						
						<div class="col-xs-4">
						    <c:set var="dateParts" value="${fn:replace(flight.departureTime,'T', ' ')}" />
							<fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
							
							<div class="time"><fmt:formatDate type="date" dateStyle="full" value="${dateObject }" pattern="MM/dd/yyyy"/> | <fmt:formatDate value="${dateObject }" pattern="hh:mm a" /></div>
							<strong class="airline"><c:out value='${flight.originAirport.airportCode}' /><small>(<c:out value='${flight.originAirport.cityName}' />)</small></strong>
							<div class="full_airline"><c:out value='${flight.originAirport.airportName}' /></div>
						</div>
						
						<div class="col-xs-4 text-gray text-center">
						
							
							   <div>
							         <c:choose>
                <c:when test="${booking.gds == '1'}">
                <i class="fa fa-clock-o"></i> 
							            		 
											<c:set var="minutes" value="${fn:substringBefore((flight.EFT/2) div 60, '.')}"/> 
											<fmt:formatNumber var="seconds" minIntegerDigits="2" value="${fn:substringBefore( (flight.EFT/2) - (minutes*60), '.') }"/>
											<c:out value='${minutes}' />h <c:out value='${seconds}' />m
											</c:when>    
                <c:otherwise>
                 
                   
                </c:otherwise>
            </c:choose>
							   </div> 
						   	
						   
						   <img src="/resources/flight-result/images/flights_sep.png" alt="" /> 
						
							<div>
							   <c:choose>
					                <c:when test="${flight.techStops =='1'}">
					                   One Stop
					                </c:when>    
					                <c:otherwise>
					                   Non Stop
					                </c:otherwise>
					            </c:choose>
							</div> 
						</div>
						
						<div class="col-xs-4 text-right">
						   <c:set var="dateParts" value="${fn:replace(flight.arrivalTime,'T', ' ')}" />
						   <fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
							<div class="time"><fmt:formatDate type="date" dateStyle="full" value="${dateObject }" pattern="MM/dd/yyyy"/> | <fmt:formatDate value="${dateObject }" pattern="hh:mm a"  />
							 </div>
							<strong class="airline"><c:out value='${flight.destinationAirport.airportCode}' /> <small>(<c:out value='${flight.destinationAirport.cityName}' />)</small></strong>
							<div class="full_airline"><c:out value='${flight.destinationAirport.airportName}' /> </div>
							
							<!-- <div class="full_airline"> <span class="padding_top">Seats Selected:
									<span class="padding_top">${flight.seatNumbers}</span>
									</span>  </div> -->
							
						</div>						
					 </div>
					</div>
					</c:if>
				  </c:forEach>
					
				</div>
				</c:if>		
					
				</div>
				<!-- \ itenery detail Box /-->
				<c:forEach items="${booking.passengerList}" var="pax" varStatus="px" >
								 <c:if test="${px.index == 0}">
					<c:if test="${not empty pax.airlineLocatorNumber}"> 
						<div class="reference_num-bg"> 
							<div class="row">
								<div class="col-xs-6 confim_title " style="padding:0;">Airline Confirmation Number:</div>
								<div class="col-xs-6 reference-num">
									<c:out value='${pax.airlineLocatorNumber}' /> &nbsp; </div>
							</div>														 
						 </div> 
					</c:if>
								 	
								</c:if></c:forEach>	
					<!-- / travel Box \-->
				<div class="traveler_informationBox">
					
					<h3 class="confim_title">Traveler(s) Details</h3>
					
						<div class="data">
						  <table class="large-only">
							<tbody>
							  <tr>
								<th class="hidden-xs">S.No</th>
								<th>Name</th>
								<th>Gender</th>
								<th>Date of Birth</th>
								 <c:forEach items="${booking.passengerList}" var="pax" varStatus="px" >
								 <c:if test="${px.index == 0}">
								
								<c:if test="${not empty pax.ticketNumber}">
								<th>Ticket Number</th>
								</c:if></c:if>
								 </c:forEach>
							  </tr>
							  <c:forEach items="${booking.passengerList}" var="pax" varStatus="px" >
							  <tr>
								<td class="hidden-xs">${px.index+1}.</td>
								<td><c:out value='${pax.title}' />&nbsp;<c:out value='${pax.firstName}' />&nbsp;<c:out value='${pax.middleName}' />&nbsp;<c:out value='${pax.lastName}' /><br>
								
								<c:if test="${not empty pax.TSAPrecheckNumber}">
									<span style="color:#939393;font-size:13px; padding-right:15px;">TSA: <c:out value='${pax.TSAPrecheckNumber}' /></span>
								</c:if>
								<c:if test="${not empty pax.TSARedressNumber}">
									<span style="color:#939393;font-size:13px;">Redress Number: <c:out value='${pax.TSARedressNumber}' /></span>
								</c:if>
								
								</td>
								<td><c:choose>
									   <c:when test="${pax.gender =='1'}">
									   Male
									   </c:when>
									    <c:when test="${pax.gender =='2'}">
									   Female
									   </c:when>
									    <c:otherwise>
			                             <c:out value='${pax.gender}' />
			                           </c:otherwise>
								   </c:choose></td>
								<td><fmt:formatNumber  minIntegerDigits="2" value="${pax.dobDate}" />-<fmt:formatNumber  minIntegerDigits="2" value="${pax.dobMonth}" />-<c:out value='${pax.dobYear}' /></td>
								
								<c:if test="${not empty pax.ticketNumber}">
								<td><c:out value='${pax.ticketNumber}' /></td>
								</c:if>
							  </tr>
							  </c:forEach>
							  							  
							</tbody>
						  </table>
						</div>

					
				</div>
				<!-- \ travel Box /-->
				<c:if test="${not empty booking.contact.emergencyContactName}">
					<div class="contact_informationBox">
					
					<h3 class="confim_title">Emergency Contact Information</h3>
					
							<div class="customer-info">
			<div class="data">
                
            <table>
                 
                <tr>
                    <td><c:out value='${booking.contact.emergencyContactName}' /></td>
                    <td>+<c:out value='${booking.contact.emergencyPhoneCode}' /> &nbsp;<c:out value='${booking.contact.emergencyPhoneNumber}' /></td>
                </tr>
               
            </table>
			</div>
            
	           </div>
				</div>
				</c:if>
				<!-- / contact information Box \-->
				<div class="contact_informationBox">
					
					<h3 class="confim_title">Contact Details</h3>
					
							<div class="customer-info">
			<div class="data">
                
            <table>
                <thead>
                <tr>
                    <th>Billing Phone</th>
                    <th>Alternate Phone</th>
                    <th>E-mail</th>
                    
                    
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><c:out value='${booking.contact.billingPhone}' /></td>
                    <td><c:out value='${booking.contact.mobile}' /></td>
                    <td><c:out value='${booking.contact.email}' /></td>
                    
                </tr>
                
                
                
                </tbody>
            </table>
			</div>
            
	</div>
				</div>
				<!-- \ contact information Box /-->
			
				<!-- <div class="add_horizontal">
					<a href="/lounge-pass" target="_blank" class="terms-link">T&amp;C apply </a>
					<img src="/resources/flight-result/images/lounge-add.jpg"  alt="lounge-add" width="100%" />
					
				</div>-->
				
				<!-- / payment Box \-->
				<div class="paymentBox">
					
					<h3 class="confim_title">Payment Details</h3>
					
					<div class="gray_bg"><strong>Price Details (USD)</strong></div>
					
					<ul>
						
						<c:if test="${booking.pageSource > 0}">
						<c:if test="${booking.fare.noOfAdult > 0}">
						 <fmt:formatNumber var="cAdultFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.adultFare+booking.fare.markup) * (booking.currencyConvertion)}" />
						 <fmt:formatNumber var="pubAdultFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${((booking.fare.adultFare+booking.fare.markup) * (booking.currencyConvertion))*booking.fare.noOfAdult}" />
						 <li><span class="pull-right"><i class="fa fa-<c:out value="${dollar}"/>"></i>${pubAdultFare}</span>Adult ${booking.fare.noOfAdult} X <i class="fa fa-<c:out value="${dollar}"/>"></i>${cAdultFare}</li>
						</c:if>
						
						<c:if test="${booking.fare.noOfChild > 0}">
						 	<fmt:formatNumber var="cChildFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.childFare+booking.fare.markup) * (booking.currencyConvertion)}" />
						 	<fmt:formatNumber var="pubChildFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${((booking.fare.childFare+booking.fare.markup) * (booking.currencyConvertion))*booking.fare.noOfChild}" />
							<li><span class="pull-right"><i class="fa fa-<c:out value="${dollar}"/>"></i>${pubChildFare}</span>Child ${booking.fare.noOfChild} X <i class="fa fa-<c:out value="${dollar}"/>"></i>${cChildFare}</li>
						</c:if>
						
						<c:if test="${booking.fare.noOfInfant > 0}">
						    <fmt:formatNumber var="cInfantFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.infantFare+booking.fare.markup) * (booking.currencyConvertion)}" />
						 	<fmt:formatNumber var="pubInfantFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${((booking.fare.infantFare+booking.fare.markup) * (booking.currencyConvertion))*booking.fare.noOfInfant}" />
							<li><span class="pull-right"><i class="fa fa-<c:out value="${dollar}"/>"></i>${pubInfantFare}</span>Infant ${booking.fare.noOfInfant} X <i class="fa fa-<c:out value="${dollar}"/>"></i>${cInfantFare}</li>
						</c:if>
						
						<c:if test="${booking.fare.noOfInfantWs > 0}">
							<fmt:formatNumber var="cInfantWsFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.infantWsFare+booking.fare.markup) * (booking.currencyConvertion)}" />
						 	<fmt:formatNumber var="pubInfantWsFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${((booking.fare.infantWsFare+booking.fare.markup) * (booking.currencyConvertion))*booking.fare.noOfInfantWs}" />
							<li><span class="pull-right"><i class="fa fa-<c:out value="${dollar}"/>"></i>${pubInfantWsFare}</span>InfantWs ${booking.fare.noOfInfantWs} X <i class="fa fa-<c:out value="${dollar}"/>"></i>${cInfantWsFare}</li>
						</c:if>
						
						<fmt:formatNumber var="tax" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.tax+booking.finalSeatPrice+booking.fare.agentFees+((booking.fare.instantDiscountAmt)*(booking.fare.noOfAdult+booking.fare.noOfChild+booking.fare.noOfInfant+booking.fare.noOfInfantWs))) * booking.currencyConvertion}" />
						<c:if test="${tax != 0.00}">
						  <li><span class="pull-right"><i class="fa fa-<c:out value="${dollar}"/>"></i>${tax}</span>Taxes & Fees <c:if test="${booking.finalSeatPrice > 0.00}"><div class="seat_price2"><small> (Incl. seat assignment request fee)</small> </div></c:if></li>
						</c:if>
						<fmt:formatNumber var="discount" type="number" minFractionDigits="2" maxFractionDigits="2" value="${((booking.fare.instantDiscountAmt)*(booking.fare.noOfAdult+booking.fare.noOfChild+booking.fare.noOfInfant+booking.fare.noOfInfantWs)) * booking.currencyConvertion}" />
					    <c:if test="${discount !=0.00}">
					       <li><span class="pull-right"><b>-<i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${discount}' /></b></span><b>Instant Discount</b></li>
						</c:if>
						
						</c:if>
						<c:if test="${booking.pageSource == 0}">
						<fmt:formatNumber var="FlightBookingCharges" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.baseFare+(booking.fare.tax+booking.finalSeatPrice+booking.fare.agentFees+((booking.fare.markup+booking.fare.instantDiscountAmt)*(booking.fare.noOfAdult+booking.fare.noOfChild+booking.fare.noOfInfant+booking.fare.noOfInfantWs)))) * booking.currencyConvertion}" />
						<li><span class="pull-right"><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${FlightBookingCharges}' /></span>Flight Booking Charges	</li>
						
						</c:if>
						
						<c:if test="${booking.coupons =='Yes'}">
   						   <fmt:formatNumber var="couponsAmt" type="number"  value="${booking.couponsAmt}" /> 
      						<fmt:formatNumber var="couponsAmts" type="number" minFractionDigits="2" maxFractionDigits="2" value="${couponsAmt * (booking.currencyConvertion)}" />
							<li><span class="pull-right">-<i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${couponsAmts}' /></span>Coupon Discount	</li>
						</c:if>
   						<c:if test="${booking.macp =='Yes'}">
   						   <fmt:formatNumber var="macpfares" type="number"  value="${booking.fare.macp}" /> 
      						<fmt:formatNumber var="macpfarestot" type="number" minFractionDigits="2" maxFractionDigits="2" value="${macpfares * (booking.currencyConvertion)}" />
							<li><span class="pull-right"> <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${macpfarestot}' /></span>Travelers&rsquo; Concierge Fees  <span class="concierge-toll" title="Toll Free">( <a href="tel:1-800-359-5040"><i class="fa fa-phone"></i> 1-800-359-5040</a> )</span>  </li>
						</c:if>
						
						
						<c:if test="${booking.brb =='Yes'}">
						    <fmt:formatNumber var="brbFinalAmount" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.infantWs+booking.infant+booking.child+booking.adult)*booking.brbProductPrice *(booking.currencyConvertion)}" />
							<li><span class="pull-right"> <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${brbFinalAmount}' /></span>Baggage Protection Fees	<c:if test="${booking.pageSource == 0}">
						<span class="concierge-toll" title="Baggage Reference Number">(<c:out
															value='${booking.brbServiceNumber}' />)</span>
						</c:if></li>
						</c:if>
						
						<c:if test="${booking.travelGuard =='Yes'}">
						  <fmt:formatNumber var="insuranceFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.TGuardValue * (booking.currencyConvertion)}" />
						  <li><span class="pull-right"> <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${insuranceFare}' /></span>Travel Guard Fees	</li>
						</c:if>
						
						<c:if test="${booking.tripMate =='Yes'}">
						  <fmt:formatNumber var="tripMateFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.tripMateCost * (booking.currencyConvertion)}" />
							<li><span class="pull-right"> <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${tripMateFare}' /></span>Travel Protection Fees<c:if test="${booking.isInsuranceApplied ==false}"> (Cancelled)</c:if>	</li>
						</c:if>
						
						<!-- Luggage -->
						<c:if test="${booking.lugamt > 0.0}">
						  <fmt:formatNumber var="lugfee" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.lugamt * (booking.currencyConvertion)}" />
						  <li><span class="pull-right"> <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${lugfee}' /></span>Luggage Fees	</li>
						</c:if>
						<c:if test="${booking.outwordamt > 0.0}">
						  <fmt:formatNumber var="outwordfee" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.outwordamt * (booking.currencyConvertion)}" />
						  <li><span class="pull-right"> <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${outwordfee}' /></span>Outward Luggage Fees	</li>
						</c:if>
						<c:if test="${booking.returnamt > 0.0}">
						  <fmt:formatNumber var="returnfee" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.returnamt * (booking.currencyConvertion)}" />
						  <li><span class="pull-right"> <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${returnfee}' /></span>Return Luggage Fees	</li>
						</c:if>
						<!-- Luggage -->
						
						
					</ul>
					<fmt:formatNumber var="finalpublishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.grandTotal+booking.totlugamt) * (booking.currencyConvertion)}" />
					<div class="gray_bg"><strong class="pull-right f21"> <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${finalpublishedFare}' /><c:if test="${booking.fareRules.size() > 0}">
      					<sup>**</sup></c:if></strong><strong><c:if test="${booking.pageSource > 0}">Total Cost</c:if><c:if test="${booking.pageSource == 0}">Total Trip Cost</c:if>	</strong>
      				</div>
					<fmt:formatNumber var="GapublishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal+booking.totlugamt}" />
					   
       				<fmt:formatNumber var="finalpublishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.grandTotal+booking.totlugamt) * (booking.currencyConvertion)}" />
                	<fmt:formatNumber var="CjpublishedFare" type="number" groupingUsed="false"  value="${((booking.fare.adultFare*booking.adult)+(booking.fare.childFare*booking.child)+(booking.fare.infantFare*booking.infant)+(booking.fare.infantWsFare*booking.infantWs))/(booking.infantWs+booking.infant+booking.child+booking.adult)}" />
					<fmt:formatNumber var="rkfeesch" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.tax+(booking.fare.markup*(booking.infantWs+booking.infant+booking.child+booking.adult))}" />
				 	<fmt:formatNumber var="singalPrice" type="number" minFractionDigits="2" maxFractionDigits="2" value="${((booking.fare.grandTotal+booking.couponsAmt) * booking.currencyConvertion)/(booking.infantWs+booking.infant+booking.child+booking.adult)}" />
      				<fmt:formatNumber var="RkpublishedFare" type="number" groupingUsed="false"  value="${(booking.fare.adultFare*booking.adult)+(booking.fare.childFare*booking.child)+(booking.fare.infantFare*booking.infant)+(booking.fare.infantWsFare*booking.infantWs)}" />
					 <c:set var="CjQTY" value='${(booking.infantWs+booking.infant+booking.child+booking.adult)}'/>	               
                   
					 <fmt:formatNumber var="unitPrice" type="number" groupingUsed="false"  value="${RkpublishedFare/CjQTY}" />
					
					
								  <fmt:formatNumber var="Coupdiscounts" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.couponsAmt}" />
                                  <fmt:formatNumber var="Cjdiscounts" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.couponsAmt}" />
								   <c:set var="CjCouponCode" value='${booking.couponsCode}'/>
								    <fmt:formatNumber var="travelGuard"  type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.TGuardValue}" />
                            
                                 <fmt:formatNumber var="tripMatefees" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.tripMateCost}" />
                                 <fmt:formatNumber var="tggFees"  type="number" minFractionDigits="2" maxFractionDigits="2" value="${(tripMatefees/(booking.infantWs+booking.infant+booking.child+booking.adult))}" />
						<c:set var="tmString" value='${booking.tripMate}'/>
    
				</div>
				<!-- \ payment Box /-->
				
				<div class="add_horizontal">
					
					<p>
					
					<c:if test="${booking.tripMate =='Yes'}">
					   Thank you for purchasing the Travel Protection Plan, to view your plan documents <a href="/travel-insurance">Click here</a>${bookingWrapper.flight.gds != 9}
					</c:if></p>
					<p><small>*All Fares displayed are quoted in USD and inclusive of base fare, taxes and all fees.<c:if test="${booking.flight.gds != 9}"> Additional 
					<a class="show-desktop" onClick="window.open('/us/baggage-fees-info?airline=${booking.bagAirline}', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=900,height=600, screenX=50,screenY=50')" href="javascript: void(0);"> Baggage Fees </a>
						<a class="hidden-lg" href="javascript: void(0);" data-toggle="modal" data-target="#popup_baggage_fees"> Baggage Fees </a>  may apply as per the airline policies.</c:if></small></p>
					<c:if test="${booking.flight.isFusionFare == true}"><p><small>*Your fare is a combination of two one-way tickets,each subject to its own rules and restrictions.Any change or cancelation in any flight would not alter the other one.Changes to the other flight may incur a charge.</small></p></c:if>
					
			        <c:choose>  
	                    <c:when test='${booking.displayCurrencyCode   != "USD" }'>
					          <div class="pricetotal" style="border:1px solid #dbd4a7">
                                <div class="col-xs-6">
                                    <b>Total charge equivalent in USD:</b>
                                </div>
                                <div class="col-xs-6 text-right" id="publishedFare">
                                     <b>
	                                     <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal+booking.totlugamt}" />
	                                     <h4 class="no-margin"><i class="fa fa-<c:out value='${dollar}'/>"></i><c:out value='${publishedFare}'/></h4>
                                    </b>
                                 </div>
                              </div> 
                        <div style="color:#056b2e; padding:5px 10px 10px 0px;; margin-bottom:-10px; font-size:12px;">
	                        <fmt:formatNumber var="publishedFaress" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.grandTotal+booking.totlugamt) * booking.currencyConvertion}" />
                           <b>Please Note:</b> Your Credit/Debit Cards will be charged in USD for a total amount of <i class="fa fa-dollar"/></i><c:out value='${publishedFare}'/>.
                        
                        </div>
					    </c:when> 
			         <c:otherwise>
			            
			       </c:otherwise>
			     </c:choose>       		
					
					
				</div>
				
				
				<c:if test="${booking.fareRules.size() > 0}">	
				<div class="conform-tc">
				  <c:forEach items="${booking.fareRules}" var="rule" varStatus="vs">
					<p> **<span> <c:out value="${rule}"></c:out> </span> </p>					
				  </c:forEach>
				</div>
				</c:if>

				<div style="padding:20px 0px; margin-top:20px; text-align:center;float:left;width:100%">
				
				<span><a href="#" style="color:#666; border: 1px solid #ccc; padding: 15px; border-radius: 30px;" onclick='javascript:window.print()'><i class="fa fa-print" aria-hidden="true"></i> Print Itinerary </a> </span> &nbsp;  &nbsp;  &nbsp;   
				<span><a data-toggle="collapse" href="#collapseExample"  style="color:#666; border: 1px solid #ccc; padding: 15px; border-radius: 30px;"><i class="fa fa-envelope-o" aria-hidden="true"></i>  Email Itinerary </a> </span>
				
				</div><c:if test="${booking.bookingStatus != 'cancelled'}">
				</c:if>
				<div style="padding:30px 0 20px 0; margin-top:2px; text-align:center; float:left;width:100%;" class="collapse" id="collapseExample">
				<div style="height:20px;"></div>
				   <form class="form-inline"> 
				  <div class="form-group">
				    <label for="exampleInputEmail2">Email:</label>
				    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
				  
				  <input type="button" id="sendEmailID" class="btn btn-warning" value="Send"/></div>
				  <div style="color:red; display: none;" id="sendEmailError"></div>
				  <input type="hidden" id="img_val" value=""/>
				</form>
				</div>
				
				<!-- <a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
 <i class="fa fa-envelope-o" aria-hidden="true"></i> Email
</a>	 -->		
				
			</div>
			
			
	<%-- <c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
			<fmt:parseDate value = "${search.travelDate}" var = "parsedDepartDate" pattern = "MM-dd-yyyy" />
			<fmt:parseDate value = "${cartBean.carSearch.dropDate}" var = "parsedReturnDate" pattern = "MM-dd-yyyy" />
			<fmt:formatDate value="${parsedDepartDate}" var="checkInDate" pattern = "MMM dd, yyyy"/>
			 <fmt:formatDate value="${parsedReturnDate}" var="checkOutDate" pattern = "MMM dd, yyyy"/>
			 <c:set var="destinationCity" value="${search.destinationAirport.cityName}, ${search.destinationAirport.country}"/>
			 <fmt:formatDate value="${parsedDepartDate}" var="checkInDateEng" pattern = "MM-dd-yyyy"/>
			 <fmt:formatDate value="${parsedReturnDate}" var="checkOutDateEng" pattern = "MM-dd-yyyy"/>
		</c:forEach>
  
  
			 <form:form method="POST" action="/crossell/hotelSearch" modelAttribute="cartBean" id="searchHotelCar">
			 <form:hidden path="pointOfSale" value="CNFM"/>
			 <form:hidden path="hotelSearch.stayCity" id="stayCity" onClick="this.select();" class="form-control" placeholder="${destinationCity}" value="${destinationCity}" />
			 <form:hidden path="hotelSearch.checkInDate" id="checkInDate" class="form-control"  placeholder="${checkInDateEng}" value="${checkInDateEng}"  />
			 <form:hidden path="hotelSearch.checkOutDate" id="checkOutDate" class="form-control"  placeholder="${checkOutDateEng}" value="${checkOutDateEng}"  />
			 <form:hidden path="hotelSearch.room" id="room" class="form-control text-center"  readonly="true" value="1" />
			 <form:hidden path="hotelSearch.rooms[0].adults" id="rooms0-adult" class="form-control text-center"  readonly="true" value="1" />
			 <form:hidden path="hotelSearch.rooms[0].child" id="rooms0-child" class="form-control text-center"  readonly="true" value="0" />
			 
			<form:hidden path="hotelSearch.guest" id="guest" value="1 Room 1 Adult"/>
			<form:hidden path="hotelSearch.locationid" id="locationid" value="${topHotelResponse.locationID}"/>
			<form:hidden path="hotelSearch.rooms[1].adults" id="rooms1_adults" value="1"/>
			<form:hidden path="hotelSearch.rooms[2].adults" id="rooms2_adults" value="1"/>
			<form:hidden path="hotelSearch.rooms[3].adults" id="rooms3_adults" value="1"/>
			<form:hidden path="hotelSearch.rooms[4].adults" id="rooms4_adults" value="1"/>
			<form:hidden path="hotelSearch.rooms[5].adults" id="rooms5_adults" value="1"/>
			
			<form:hidden path="hotelSearch.rooms[1].child" id="rooms1_child" value="0" />
			<form:hidden path="hotelSearch.rooms[2].child" id="rooms2_child" value="0" />
			<form:hidden path="hotelSearch.rooms[3].child" id="rooms3_child" value="0" />
			<form:hidden path="hotelSearch.rooms[4].child" id="rooms4_child" value="0" />
			<form:hidden path="hotelSearch.rooms[5].child" id="rooms5_child" value="0" />
			
			<form:hidden path="hotelSearch.rooms[0].children[0].age" id="rooms0_children0_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[0].children[1].age" id="rooms0_children1_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[0].children[2].age" id="rooms0_children2_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[0].children[3].age" id="rooms0_children3_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[0].children[4].age" id="rooms0_children4_age" value="1"/>
			
			<form:hidden path="hotelSearch.rooms[1].children[0].age" id="rooms1_children0_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[1].children[1].age" id="rooms1_children1_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[1].children[2].age" id="rooms1_children2_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[1].children[3].age" id="rooms1_children3_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[1].children[4].age" id="rooms1_children4_age" value="1"/>
			
			<form:hidden path="hotelSearch.rooms[2].children[0].age" id="rooms2_children0_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[2].children[1].age" id="rooms2_children1_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[2].children[2].age" id="rooms2_children2_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[2].children[3].age" id="rooms2_children3_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[2].children[4].age" id="rooms2_children4_age" value="1"/>
			
			<form:hidden path="hotelSearch.rooms[3].children[0].age" id="rooms3_children0_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[3].children[1].age" id="rooms3_children1_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[3].children[2].age" id="rooms3_children2_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[3].children[3].age" id="rooms3_children3_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[3].children[4].age" id="rooms3_children4_age" value="1"/>
			
			<form:hidden path="hotelSearch.rooms[4].children[0].age" id="rooms4_children0_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[4].children[1].age" id="rooms4_children1_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[4].children[2].age" id="rooms4_children2_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[4].children[3].age" id="rooms4_children3_age" value="1"/>
			<form:hidden path="hotelSearch.rooms[4].children[4].age" id="rooms4_children4_age" value="1"/>
							
			<div class="col-sm-4 hidden-xs" >
			<c:if test="${fn:length(topHotelResponse.hotelList) gt 0 && bookingWrapper.hotelTaken == false}">
			 <c:forEach var="hotel" items="${topHotelResponse.hotelList}">
			<div class="hotel-slider" onClick="return submitHotelForm('${hotel.hotelId}')" style="cursor:pointer;">
			<img src="${fn:replace(hotel.thumbNailUrl,'http','https')}" title="${hotel.hotelName}" alt="${hotel.hotelName}" onerror="javascript:imgError(this,'/resources/images/crosssell-images/no-image.png')" class="hotel-img">
				  
					<div class="col-xs-7 hotel_thum"> ${hotel.hotelName}
					<p><span class="stars"><span style="width: ${hotel.ratingNDes*20}%;"></span></span></p>
					</div>
											
					<div class="col-xs-5 hotel_sub_thum"> 
					<fmt:formatNumber var="formattedHotelPrice" type="number" minFractionDigits="2" maxFractionDigits="2" value="${hotel.lowRate * booking.currencyConvertion}" />
					  <p> <span><i class="fa fa-<c:out value="${dollar}"/>" ></i></span><span>${formattedHotelPrice}</span></p>
					  Per night
					</div>
					<div class="clearfix"></div>
				<!-- </a> -->
				</div>
				</c:forEach>
				</c:if>
				
			<c:if test="${fn:length(topCarResponse.carAvailability) gt 0 && bookingWrapper.carTaken == false}">
			
			<form:hidden path="carSearch.pickLocation" id="pickLocation" onClick="this.select();" class="form-control" placeholder="${destinationCity}" value="${destinationCity}" />
			<form:hidden path="carSearch.pickDate" id="pickDate" class="form-control" placeholder="${checkInDateEng}" value="${checkInDateEng}" />
			<form:hidden path="carSearch.pickTime" id="pickTime" value="10:00" class="form-control" />
			<form:hidden path="carSearch.dropDate" id="dropDate" class="form-control" placeholder="${checkOutDateEng}" value="${checkOutDateEng}" />
			<form:hidden path="carSearch.dropTime" id="dropTime" value="12:00" class="form-control" />
			<form:hidden path="carSearch.driverAge" value="21" class="form-control" />
			<form:hidden path="carSearch.pickUpLocationID" id="pickUpLocationID" value="${topCarResponse.pickUpLocationID}" />
			<form:hidden path="carSearch.pickUpLocationCode" id="pickUpLocationCode" value="${topCarResponse.pickUpCity}" />
			<form:hidden path="carSearch.pickUpSearchedLocation" id="pickUpSearchedLocation" value="${topCarResponse.pickUpSearchedLocation}" />
							
							
			<c:forEach var="car" items="${topCarResponse.carAvailability}">

            <div class="crdealsection" onClick="return submitCarForm('${car.carReference.vehicleType}-${car.carReference.vendorCode}')" style="cursor:pointer;">
			  <div class="state">${destinationCity}</div>
               <div class="crpic"><img src="/resources/images/car-images/cars/${fn:toLowerCase(fn:replace(fn:trim(car.carReference.carName),' ','-'))}.jpg" alt="car Image"></div>
                <div class="crdealdiscription">
                    <div class="row">
                        <div class="col-sm-5 car-class">${car.carReference.carType}</div>
						<fmt:formatNumber var="formattedCarPrice" type="number" minFractionDigits="2" maxFractionDigits="2" value="${car.carReference.pricing.avgPrice * booking.currencyConvertion}" />
                        <div class="col-sm-7 text-right crPrice"><i class="fa fa-<c:out value="${dollar}"/>" ></i>${formattedCarPrice}/<small>per day</small></div> 
                    </div>
                   <div class="information">${car.carReference.carName} or Equivalent</div>
                </div>
            </div>
			</c:forEach>
			</c:if>
			
				
				
			
			
			<!--<a href="tel:1-866-218-1529"><img src="/resources/flight-result/images/hotel-booking.jpg" class="img-responsive" alt="" /></a>-->
			
			
			</div>
			</form:form> --%>
			
		</div>
		
	</div>

</div>

<!-- \container /-->
</c:forEach>

<%-- >>>>>>>>${bookingWrapper.tripMate}   ${bookingWrapper.isAncillaryAvailable}    ${bookingWrapper.bookingStatus} ${bookingWrapper.ancillaryShow} --%>
<%-- <c:if test="${bookingWrapper.isAncillaryAvailable == true && bookingWrapper.bookingStatus != 'cancelled' && bookingWrapper.ancillaryShow == true}">

  <!------------------ currencyRsponse start------------------->
                            <c:choose>
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
							    
                            </c:choose>
                            
                  <!------------------ currencyRsponse end------------------->   
                   
				<form:form method="POST" action="/booked" id="booking" modelAttribute="bookingWrapper" novalidate="novalidate">
				<div class="container">
				<!-- Insurance Start -->
				
				
				
				<c:if test="${bookingWrapper.tripMate ==  'No' || bookingWrapper.tripMate ==  'NO'}">
				    <c:if test="${bookingWrapper.tripMateCost !=  0.0}">        
                 		<jsp:include page="tripMateConfirmation.jsp"></jsp:include>
                    </c:if>
                </c:if>
				  <div class="clearfix"></div>
				  >>>>>>>>>>>>>>>>>>>${bookingWrapper.macp}
				   <!-- insurance block -->
				 <div class="row" id="tripmate_block">
			   		<c:if test="${bookingWrapper.flight.gds != 9}">
			   		
						<c:if test="${(bookingWrapper.macp == 'No' || bookingWrapper.macp == 'NO') && bookingWrapper.isMacpShow}">
							<div class="col-md-12 col-xs-12">
						
							 <!-- (Travelers' Concierge Program) Box start -->
	
							<div class="resultsBox">
			
			
								<h4 class="sub_header"><i class="fa fa-concierge"></i>Travelers' Concierge Program </h4>
								
								<a href="javascript:void(0);" class="showbtn hide-btn" style="display:none;">Show <i class="fa fa-angle-down"></i></a>
								
								<div class="content insuranceContent macp_insurance">
			
									<div class="col-md-8 col-sm-12 col-xs-12">
									
									<h4>Avail Travelers' Concierge Program now and avoid service fees.</h4>
									<div class="sub-head">Free services within 24 hours from the date of booking!</div>
									
									
										<div class="row">
											<div class="col-sm-5">
												<ul class="content-list">
													<li><span>Free</span> Cancellation <sup>&dagger;</sup></li>
													<li><span>Free</span> Rebooking <sup>&dagger;</sup></li>
													<li><span>Free</span> Rescheduling and Name Change <sup>&dagger;</sup></li>
												</ul>
											</div>
											<div class="col-sm-7">
												<ul class="content-list no-sm-margin">
													<li><span>Free</span> Dedicated Personalized Service &amp; Toll-Free </li>
													<li><span>Free</span> Lounge Access on your Next Flight Booking </li>
													<li><span>Free</span> Seat and Meal Preference on international flights  </li>
												</ul>
											</div>
										</div>
										
									
								
								
								 <fmt:formatNumber var="macpTot" type="number" minFractionDigits="2" maxFractionDigits="2" value="${macpcrossAmt * curRsponse}" />
								   <p class="fare"><span class="fa fa-<c:out value="${dollar}"/>"></span><span class="big_price"><c:out value='${macpTot}'/></span> <small>Per Passenger</small></p>
								 <div id="insurance_radio" class="margin-tb">
									
									
									<div class="add-mcp inputSet" onClick="enableButton();">
										   <label style="cursor: pointer"> <form:radiobutton path="macp" id="macpYes" value="Yes" onclick="macpSet('macp','Y','Y');" /> <span><b>Yes,</b> Add my plan</span></label>
										</div>
									<div class="remove-mcp inputSet form-group" onClick="enableButton();">
										  <label  style="cursor: pointer">  <form:radiobutton path="macp" id="macpNo" value="No" onclick="macpSet('macp','N','N');" /><span> <b>No,</b> I am not interested </span></label>
										</div>
									
								</div>
								
								
		
									 
									 
						  <div class="clearfix"></div>
						  
						 
									
								<div class="contentexpend hideContent">
								
									<p>Signing up for "Travelers' Concierge Program" will entitle you to some remarkable benefits. It will let you cancel and rebook your flight tickets without paying any change and cancellation penalties and our service fee. And that's not it, you get a host of other benefits as well.									
									</p>
									
									<p>Travelers' Concierge program subscribers are warranted free rescheduling and name changes, individualized dedicated service without any charges, a separate Toll-Free Number along with complimentary seat assignment and meal preference on international sector.</p>
									
									<p><strong>For Spirit Airlines -</strong>
Once you book a ticket, it is deemed non-changeable and non-refundable.</p>
									
									<p><strong>For Frontier Airlines -</strong>
Passengers can cancel their tickets within 24 hours. However, no cancellation is applicable on Frontier Airlines flights that are scheduled for departure within 7 days from the date of booking.<br>
In case there is any change in the schedule of the flight, you may have to pay penalty charges levied by the airline. We do not impose any service fee.</p>
									
							
							<p><strong>For Frontier and Spirit Airlines -</strong>
If you want to make any changes in the name (s) of the passenger (s), you'll have to pay a nominal fee. Additional fare difference may also apply. </p>		
								<p><b>Note:</b> This is an additional service that we offer, other than Insurance plan and it is non-refundable. </p>	
									
								</div>
								
								<div class="show-more pull-right">
								<a style="cursor: pointer;">Learn more</a>
								  </div>
								  
								  <p class="pull-left note">
						 <small>&dagger; Limited on Frontier and Spirit Airlines. Any fare difference and penalty may also apply.  </small>
					 </p>
					 
								 <p  id="tcpid" class="tcpid" style="margin-bottom:8px;"> Please Choose your Travelers' Concierge Program </p>
								 
								 </div>
								 
		  					<div class="col-md-4 hidden-xs hidden-sm">
						<img src="/resources/flight-result/images/travelers-concierge.gif" class="travel_protection_image">
						</div>
		  
							</div>
		
						</div>
					
						  <!-- (TWSP) Box end -->
					  
						</div>
						</c:if>
					</c:if>
					
					<div class="col-md-12 col-xs-12">
					<form:hidden path="brbProductCode"/>
						<form:hidden path="brbProductPrice"/>
						
						<!-- Baggage Protection Start -->					
						<c:if test="${bookingWrapper.brb == 'No' || bookingWrapper.brb == 'YesNo'}">
						<c:if test="${bookingWrapper.brbGetResponse.isBRBAvailable}">
						<c:if test="${bookingWrapper.brbGetResponse.lstBrbProduct.size() > 0}">
						
						<div class="resultsBox brb_height">
							<h4 class="sub_header"><i class="fa-baggage-protection"></i>Baggage Protection</h4>
							
							<a href="javascript:void(0);" class="showbtn hide-btn" style="display:none;">Show <i class="fa fa-angle-down"></i></a>
							
							  <div class="content baggage_protection">
								<img src="/resources/images/baggage-protection-icon.png?19092017" style="width:80px" class="insurance_logo hidden-xs" >
								
								
								<div class="row">
									
									<div class="col-sm-12">
									
										
										<div class="baggage-holder">
											
											<c:forEach items="${bookingWrapper.brbGetResponse.lstBrbProduct}" var="baggage" varStatus="bg">	
											<div class="baggage-policy" onClick="brbSetValue('${baggage.productCode}',${baggage.productPrice});enableButton();">
											
											<div class="price-detail inputSet">
											
											<label>
											
												
											
											<fmt:formatNumber var="formattedbaggage" type="number" minFractionDigits="2" maxFractionDigits="2" value="${baggage.productPrice * curRsponse}" />									
												<form:radiobutton path="brb" id="${baggage.productCode}" value="Yes" />
												<span>
												
												<span class="fa fa-<c:out value="${dollar}"/>"></span>${formattedbaggage}
												 <small>Per Pax</small>
												</span> 
												<span> <p>(<span>Pays</span> 
											<!--<c:if test="${baggage.productCode eq 'SILVER'}">
											<fmt:formatNumber var="SILVER" type="number" minFractionDigits="0" maxFractionDigits="0" value="${500 * curRsponse}" />
											<i class="fa fa-<c:out value="${dollar}"/>"></i>${SILVER}
											</c:if> -->
											<c:if test="${baggage.productCode eq 'GOLD'}">
											<fmt:formatNumber var="GOLD" type="number" minFractionDigits="0" maxFractionDigits="0" value="${1000 * curRsponse}" />
											<i class="fa fa-<c:out value="${dollar}"/>"></i>${GOLD}
											</c:if> 
											
											 <c:if test="${baggage.productCode eq 'PLATINUM'}">
											<fmt:formatNumber var="PLATINUM" type="number" minFractionDigits="0" maxFractionDigits="0" value="${1500 * curRsponse}" />
											<i class="fa fa-<c:out value="${dollar}"/>"></i>${PLATINUM}
											</c:if> 
											<c:if test="${baggage.productCode eq 'DIAMOND'}">
											<fmt:formatNumber var="DIAMOND" type="number" minFractionDigits="0" maxFractionDigits="0" value="${2000 * curRsponse}" />
											<i class="fa fa-<c:out value="${dollar}"/>"></i>${DIAMOND}
											</c:if>
											
											per bag.)</p> </span>
											</label>
											</div>
											<div class="detail">
											
											<!--<div class="head">${baggage.productCode}  </div>-->
											
											
											</div>
											</div>
											</c:forEach> 											
										</div>
									</div>							
									</div>
									<div class="deselect-plan inputSet" onClick="brbSetValue('XXXBRB',0.0);enableButton();">
									  <label>  <form:radiobutton path="brb" id="XXXBRB" value="No" /> <span><b>NO,</b> I decline the option to purchase Baggage Protection.</span></label>
		
									</div>

								  <div class="clearfix"></div>
								  <img src="/resources/images/baggage-protection-icon.png" class="pull-right visible-xs" >
								  <p class="small_text"><i>NOTE:</i> This service is  applicable for this flight booking only. If you require any changes, you must  report to <a href="mailto:info@blueribbonbags.com">info@blueribbonbags.com</a> prior to your scheduled departure. Please mention your Service  Agreement Number in the subject line and it may require additional purchases.<br> Once clicked on 'Add Baggage Protection', I agree to the <a href="/brb/description" target="_blank">Terms and Conditions</a></p> 
									  <div class="contentexpend hideContent">
									A Comprehensive Overview
									<p>Please note that this service is provided on Fares Hub by Blue Ribbon Bags.</p>
									<ul class="content-list">
										
										<li>Once added to your booking, Blue Ribbon Bags (BRB) will track your delayed baggage and speed up its return within 96 hours (4 days of your flight arrival) of it being lost.</li>
										
										<li>Each purchase of BRB is per person, per round trip and does not include the connections during your flight trip. </li>
										<li>Under this protection plan categorized into three, Blue Ribbon Bag will pay you.</li>
									</ul>
									 <p> Please click here to <a class="hidden-md hidden-sm hidden-xs text_link" href="/baggage-protection" target="_blank">View the description of baggage policy</a> 
									 <a class="hidden-lg text_link" href="javascript:void(0);" data-toggle="modal" data-target="#popup_baggage_policy">View the description of baggage policy</a></p>

								</div>
								
									<div class="show-more pull-right">
								<a style="cursor: pointer;">Learn more</a>
								  </div>
								   
						  	<p  id="brbError"  class="brbError" style="margin-bottom:8px;"> Please Choose your Baggage Protection Program </p> 
						  
							 </div>
							</div>
							
						</c:if>
						</c:if>
						
						<!-- Baggage Protection End --> 
						</c:if>
					</div>
					
					
					
			   </div>
			   
<!--  Insurance End -->

<div class="text-center" id="ancilarryAdddiv" style="display: block;">
 <button id="ancilarryAdd" class="purchase-btn btn-lg" type="button" onClick="submitForm('${bookingWrapper.userSessionID}');" disabled="disabled">Add Now</button> 
</div>
 <br>
</div>
</form:form>
</c:if> --%>
<!--Footer Start-->

<c:forEach items="${bookingWrapperList}" var="booking"  >
<div id="popup_baggage_fees" class="modal fade hidden-lg" role="dialog">
      <div class="modal-content">
		
		<div class="close_window"> 
		<button type="button" class="back_btn" data-dismiss="modal"><span class="fa fa-angle-left"></span></button>  
		Baggage Fees
		<button type="button" class="close_btn" data-dismiss="modal">X</button> </div>
		
		<jsp:include page="/baggage-fees-popup?airline=${booking.bagAirline}"></jsp:include>
	 
  </div>
</div>
</c:forEach>

<jsp:include page="confirmed_footer.jsp"></jsp:include>
<script src="/resources/flight-result/js/html2canvas.js?12032018"></script>
<script src="/resources/flight-result/js/jquery.plugin.html2canvas.js?12032018"></script>
	
 <%
if(sessionId == 0){
%>
	<script type="text/javascript">
	$(document).ready(function(){
	
	$('#target').html2canvas({
		onrendered: function (canvas) {
            
			var bookingIds = $("#bookingIdss").val();
	        var sData = canvas.toDataURL("image/png", 0.9);
	        
	        var post_data = {  
					'BookingID':bookingIds,
					'ScreenData':sData,
					}
    	
             
             $.ajax({
                'type': 'POST',
                'url':"/saveConfirmationScreen",
                'contentType': 'application/json',
                'data': JSON.stringify(post_data),
                'dataType': 'json',
                success: function(data) {

                if (data == 'SUCCESS')
                {
               // alert(data);
                }
                else
                    {
                  //  alert(data);
                    }

                }
            });
    

	
		}
	});
});
	
	</script>
	
<!--Footer Closed-->
 

    <!-- Right container start here-->
    
  
   

  <%
    if (session.getAttribute("utm_source") == null) {
       
    } else {
    String utmSou=(String)session.getAttribute("utm_source");
   
   
%>


<%    
    if(utmSou.equalsIgnoreCase("IntentMedia")) {
  
  %>

  
  <%  }
    
    } %>
    <%} 
	request.getSession().setAttribute("SessionHit","1");%>
<script>

   
   $('#sendEmailID').click(function () {
var emailId = $("#exampleInputEmail2").val();
if(emailId=='')
{
$("#sendEmailError").text("please enter email address");
$("#sendEmailError").show();
return false;
}

var atpos = emailId.indexOf("@");
    var dotpos = emailId.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailId.length) {
        $("#sendEmailError").text("please enter valid address");
        $("#sendEmailError").show();
        return false;
    }
//alert(emailId);
$.ajax({
                url: '/sendFlightEmail/'+emailId, // url where to submit the request 
                type : "POST", // type of action POST || GET
                success : function(result) {
                   // alert(result);
                    $("#sendEmailError").text(result);
                    $("#sendEmailError").show().delay(5000).fadeOut();
                  },
                error: function(xhr, resp, text) {
                    
                }
            })
});

sessionStorage.removeItem(0);
sessionStorage.clear();
</script>    




</body>
<script src="/resources/flight-result/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/resources/flight-result/js/confirmation.js"></script>
</html>