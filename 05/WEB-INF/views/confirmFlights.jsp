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
<meta name="viewport" content="user-scalable=0, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">

<title>${data.siteName} - Your booking confirmed</title>
<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="/resources/css/reset.css" rel="stylesheet">
<link href="/resources/travelopick/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/css/style.css" rel="stylesheet">
<link href="/resources/travelopick/css/header.css" rel="stylesheet">
<link href="/resources/css/font-awesome.css" rel="stylesheet">
<link href="/resources/travelopick/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/css/resultside.css" rel="stylesheet">
<link href="/resources/css/tooltip.css" rel="stylesheet">
<script src="/resources/lib/angular/angular.js"></script>
<script src="/resources/travelopick/js/jquery.1.11.1.min.js"></script>
 

<style type="text/css">.loading { border:1px solid #ddd; padding:20px; margin:40px 5px; width:80px;} .error { border:2px solid #f00 !important; background:rgb(251, 251, 219) none repeat scroll 0% 0%  !important; }
.featureddeal { border:1px solid #ddd; padding:20px; margin:40px 5px; width:80px;}
.sub_header h4 { color:#fff; }
</style>


<script type="application/javascript">(function(w,d,t,r,u){w[u]=w[u]||[];w[u].push({'projectId':'10000','properties':{'pixelId':'10009939'}});var s=d.createElement(t);s.src=r;s.async=true;s.onload=s.onreadystatechange=function(){var y,rs=this.readyState,c=w[u];if(rs&&rs!="complete"&&rs!="loaded"){return}try{y=YAHOO.ywa.I13N.fireBeacon;w[u]=[];w[u].push=function(p){y([p])};y(c)}catch(e){}};var scr=d.getElementsByTagName(t)[0],par=scr.parentNode;par.insertBefore(s,scr)})(window,document,"script","https://s.yimg.com/wi/ytc.js","dotq");</script>
 <c:forEach items="${bookingWrapperList}" var="booking"  >
 <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal}" />
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1575600346100223');
fbq('track', 'PageView');
fbq('track', 'Purchase', {value: '0.00', currency: 'USD'});
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1575600346100223&ev=PageView&noscript=1"
/></noscript></c:forEach>

            


<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>

<body>

			<!--- Header Section Start---->
			<jsp:include page="confirmed_header.jsp"></jsp:include>
			<!--- Header Section End---->
	
						<!----Pop Up-------------->
								<div class='popup_feedback'>
                                    <div class='feedback_content'>
                                    	<a href="#close" title="Close" class="close_new" id='x'>X</a>
                                        <div class='container-box'>
                                              
                                              <header class="popupheader">
                                            	<div class="popupheader_title"> Let Us Contact You Back ASAP </div>
                                              </header>
                                              <div class="popup_main">
                                              	<div class="popup_text"> Our Travel Agents have instant access to special unpublished fares that aren't available online. If you prefer not to call us now, please, leave a request, and one of our Travel Agents will be directly in touch. 
                                                </div>
                                              	<div class='name mb20'>
                                                    <input class='first' placeholder='First Name' type='text'>
                                                    <input class='last' placeholder='Last Name' type='text'>
                                                  </div>
                                                  <div class='name mb20'>
                                                    <input class='first' placeholder='Phone Number' type='text'>
                                                    <input class='last' placeholder='E-mail Address' type='text'>
                                                  </div>
                                                  
                                                  
                                                  <div class='message'>
                                                    <textarea class="textarea_feedback" placeholder='Your Suggestions Here!'></textarea>
                                                  </div>
                                                  <footer class="popup_footer">
                                                  	<div class="footercontct">How To Contact:</div>
                                                        <div class="b-request-popup-radio-buttons">
                                                        <input id="by-phone" class="b-request-popup-radio js-leave-request-by-phone" type="radio" value="byPhone" name="howtocontact">
                                                        <label class="b-request-popup-radio-label js-leave-request-by-phone" for="by-phone">By Phone</label>
                                                        <input id="by-email" class="b-request-popup-radio js-leave-request-by-email" type="radio" value="byEmail" name="howtocontact">
                                                        <label class="b-request-popup-radio-label js-leave-request-by-email" for="by-email">By E-mail</label>
                                                        <input id="by-any" class="b-request-popup-radio js-leave-request-by-any" type="radio" checked="checked" value="any" name="howtocontact">
                                                        <label class="b-request-popup-radio-label js-leave-request-by-any" for="by-any">Any</label>
                                                        </div>
                                                    <button class="btn-pop-action">GET A FREE QUOTE</button>
                                                  </footer>
                                              </div>
                                              
                                        </div>
                                    
                                    </div>
                                </div> 
                        <!---------Pop Up-------------->   
<!--- Main Section---->
	
    <div class="main">
    <%String classes="Economy"; %>
    	<c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
	<c:set var="classes" value="${search.cabinType}" scope="page"/>
	</c:forEach>
    
   		 <!----Flight Selection Nav ends------------>
   		
    <c:forEach items="${bookingWrapperList}" var="booking"  >
	<div class="container">
		<div class="row">
        	
                                         	<div id="flight-search" class="tab-pane fade in active">
           	
            <!---------Result Side------------->
            
               
                <!---Main Result Area--->
                <div class="col-xs-12 col-md-12 col-lg-9 main_result   result-padding">
				<div style="height:20px;"></div>	
					<div id=" " style="box-shadow:none;">
					<div class="col-md-12 whybook" style="text-align: center; line-height: 2em; padding: 20px 0px; margin: 35px 0px 15px; background:#ddfdfd; border: 1px solid rgb(184, 224, 254);">
							<div><img src="/resources/images/check-icon.png"></div>
							<h2 style="margin-bottom: 0px; text-transform: capitalize;">Your Booking is Confirmed</h2>
                	<c:set var="cjPnr" value="${booking.pnr}" />
                	<c:choose>
                	
						<c:when test="${booking.pnr=='X'}">
				
						<p>Thank you for booking with ${data.siteName} <br/> Your electronic ticket is pending with us. Our executive will call you shortly with your booking reference number No: <span style='font-size: 30px; display:block; font-weight:bold; color:#cc0000;'> <c:out value='${booking.unPnr}' /> </span> <br/>  kindly check your Email for booking details.</p><br />
						</c:when>
						
						<c:otherwise>
						
						<br />
					
						<p>Thank you for choosing ${data.siteName}, Your booking is confirmed and your booking reference number is: <span style='font-size: 30px; display:block; font-weight:bold; color:#000000;'> <c:out value='${booking.pnr}' /></span> kindly check your Email for booking details.</p><br />
						</c:otherwise>
					</c:choose>
					<c:set var="tgString" value='${booking.travelGuard}'/>
                            <c:if test="${tgString eq 'Yes'}">
                            <c:set var="tgpString" value='${booking.policyNumber}'/>
                           <c:if test="${tgpString ne 'X'}">
                            	<p>Your Travel Guard PolicyNumber:&nbsp; <span style='font-size: 20px; font-weight: bold; color: #cc0000;'><c:out value='${booking.policyNumber}' /></span></p><br />
					         </c:if>
                            </c:if>
					
					
							
							 
						
						</div>
						
						
										<br/><br/>	
                	<%-- Your Booking is Confirmed and your Reference Number is:	<c:out value='${booking.pnr}' /> --%>
                    		<!----------Flight Detail------------->
                    		<div class="results-box ">
                            	<div class="sub_header" style="margin-bottom:0; color:#fff;">
                               		<h4>Your Itinerary</h4>
                            	</div>
                                <!---------------------------------------Departure------------------------->
                                <div class="col-md-12 col-sm-12 col-lg-12 depart pa0">
                                	<p><img src="/resources/images/airIcon.png" style=" padding-right:10px;"> Departure</p>
                                </div>
                                
                                <!-- First Segment -->
                                  <% int departFlights=0; int departFli=0; %>
                                 <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl" >
                                   <c:if test="${flight.isReturnFlight ==  false}">
                                   <% departFlights=departFlights+1; %> 
                                   </c:if>
                                 </c:forEach>
                                 
                                 <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl" >
                                  <c:if test="${flight.isReturnFlight ==  false}">
                            	<div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 p30 mb10">
                                	<div class="col-md-2 col-sm-2 col-lg-2 pa0 col-xs-5">
                                    	<span class="flight-img simptip-position-top simptip-movable" data-cta-hover="Tip_EXT" data-cta-hover-value="FUEL_FF" data-tooltip="${flight.airline.code}">
                                        	
                                        	<img src="/resources/images/airline/<c:out value='${fn:toLowerCase(flight.airline.code)}' />.gif" />
                                        </span>
                                        <span class="Flight-name"><c:out value='${flight.airline.name}' /> </span>
                                        <span class="Flight-name">Flight No. <c:out value='${flight.flightCode}' /> </span>
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-sm-3">
                                    	<div  class="dest-name123"><c:out value='${flight.originAirport.cityName}' /> (<c:out value='${flight.originAirport.airportCode}' /> ) 
											<%-- -<c:choose>
											<c:when test="${flight.originAirport.country=='US'}">United States
											<br />
											</c:when>
											
											<c:otherwise><c:out value='${flight.originAirport.country}' />
											<br />
											</c:otherwise>
											</c:choose>
     										--%>
                                    	</div>
                                    	
  										<c:set var="dateParts" value="${fn:replace(flight.departureTime,'T', ' ')}" />
										<fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                                        <span class="departCity">
                                       <fmt:formatDate value="${dateObject }" pattern="EEE, dd MMM" />
                                       
                                        <fmt:formatDate value="${dateObject }" pattern="hh:mm a" /></span>
                                        <span class="dat-n-tim"></span>
                                        <div class="dest-name122"><c:out value='${flight.originAirport.airportName}' /></div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 col-sm-3 col-xs-12 citymove">
                                    	<p class="cityseprator"></p>
                                        <small>
                                            <span class="pull-left">
                                                <i class="fa fa-clock-o" style="margin-left:-30px;"></i>
                                               <%--  <c:set var="minutes" value="${fn:substringBefore((flight.EFT/2) div 60, '.')}"/> 
                                                <fmt:formatNumber var="seconds" minIntegerDigits="2" value="${fn:substringBefore( (flight.EFT/2) - (minutes*60), '.') }"/>
                                               <c:out value='${minutes}' />h <c:out value='${seconds}' />m --%>
                                            </span>
                                            <span class="pull-left">
                                                <span class="connect-info">
                                                    |&nbsp;&nbsp;&nbsp;
                                                    Non Stop
                                                </span>
                                            </span>
                                              <c:choose>
											<c:when test="${flight.airline.code != flight.operatingCarrier.code}">
											<span class="" style="width: 100%; float: left; margin-left: -16px; margin-top:26px;" ><i class="fa fa-info-circle"></i> Operated by <c:out value='${flight.operatingCarrier.name}' /> </span>
											</c:when>
                                          </c:choose> 
                                           <!--  <span class="" style="width: 100%; float: left; margin-left: -16px;">
                                                <strong>NOTE:</strong>
                                                Transit visa required
                                            </span> -->
                                        </small>
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-sm-4 destination">
                                    <div  class="dest-name123"><c:out value='${flight.destinationAirport.cityName}' /> (<c:out value='${flight.destinationAirport.airportCode}' /> ) 
											<%-- - <c:choose>
											<c:when test="${flight.destinationAirport.country=='US'}">United States
											<br />
											</c:when>
											
											<c:otherwise><c:out value='${flight.destinationAirport.country}' />
											<br />
											</c:otherwise>
											</c:choose> --%>
    
                                    	</div>
                                    	
  										<c:set var="dateParts" value="${fn:replace(flight.arrivalTime,'T', ' ')}" />
										 <fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                                        <span class="departCity">
                                     
                                       <fmt:formatDate value="${dateObject }" pattern="EEE, dd MMM" />
                                        <fmt:formatDate value="${dateObject }" pattern="hh:mm a"  /></span>
                                        <span class="dat-n-tim"></span>
                                        <div  class="dest-name122"><c:out value='${flight.destinationAirport.airportName}' /></div>
                                         <div><span class="class-bg"><img src="/resources/images/class.png" width="15"> <c:out value='${classes}' /> 
                                                <%-- 	<c:choose>
											<c:when test="${booking.flight.bookingClass=='1'}">Economy
											<br />
											</c:when>
											<c:when test="${booking.flight.bookingClass=='2'}">First
											<br />
											</c:when>
											<c:otherwise>Business
											<br />
											</c:otherwise>
											</c:choose> --%>
											
											
                                                    
                                                 </span>   
                                                </div>
                                        
                                    </div>
                                </div>
                                
                                  <%
                                  departFli=departFli+1;
                                  if(departFli >=1 && departFlights != departFli){ %>
                                
                                    <!-- if more than one leg -->
                                <div class="col-md-12 col-sm-12 col-lg-12 pa0">
                                	<div class="transit mb10">
                                    
                                        	<div class="col-md-1 col-lg-1 col-sm-1 col-xs-2">
                                            	<div class="form-group form-group-lg form-group-icon-left journey">
                                					 <img src="/resources/images/info-icon.png" width="20">
                                                </div>
                                            </div>
                                            <div class="col-md-5 col-lg-5 col-sm-5 col-xs-10">
                                            	<small>Change planes at <c:out value='${flight.destinationAirport.cityName}' />  (<c:out value='${flight.destinationAirport.airportCode}' /> )</small>
                                            </div>
                                            <div class="col-md-1 col-lg-1 col-sm-1 hidden-xs pa0">
                                            	<p style="text-align:center;">|</p>
                                            </div>
                                            <div class="col-md-5 col-lg-5 col-sm-5 col-xs-12 pad-l-r">
                                            	<small>Connecting flight from a different terminal</small>
                                            </div>
                                     
                                    </div>
                                </div>
                                <%} %>
                                 </c:if>
                                 </c:forEach> 
                                   <c:if test="${booking.flexSearch ==  'yes'}">
                                  <div class="Flight-name"  style="margin-top:3px; text-align:left;"> <span style="padding: 3px 10px; background: rgb(246, 246, 236) none repeat scroll 0% 0%; color: rgb(255, 102, 0); border: 1px dashed rgb(255, 102, 0); font-size: 13px;"><i aria-hidden="true" class="fa fa-info-circle"></i> This is a flexible date, please verify the date.</span> </div>
                                
                                  </c:if>
                                  <c:if test="${booking.nearBy==  'yes'}">
                                      <div class="Flight-name"  style="margin-top:3px; text-align:right;"> <span style="padding: 3px 10px; background: rgb(246, 246, 236) none repeat scroll 0% 0%; color: rgb(255, 102, 0); border: 1px dashed rgb(255, 102, 0); font-size: 13px;"><i aria-hidden="true" class="fa fa-info-circle"></i> This is a Near by Airport, please verify the Airport.</span> </div>
                                   
                                  </c:if>
                                
                               <% int returnFlights=0; %>
                                 <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl" >
                                   <c:if test="${flight.isReturnFlight ==  true}">
                                   <% returnFlights=returnFlights+1; %> 
                                   </c:if>
                                 </c:forEach>
                                <!---------------------------------------Return------------------------->
                                 <%if(returnFlights >= 1){ %>
                                <div class="col-md-12 col-sm-12 col-lg-12 depart pa0">
                                	<p><img src="/resources/images/airIcon2.png" style=" padding-right:10px;"> Return</p>
                                </div>
                                <% }
                                int returnSize=0; %>
                            	 <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl" >
                                  <c:if test="${flight.isReturnFlight ==  true}">
                            	<div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 p30 mb10 ">
                                	<div class="col-md-2 pa0 col-sm-2 col-lg-2 col-xs-5">
                                    	<span class="flight-img simptip-position-top simptip-movable" data-cta-hover="Tip_EXT" data-cta-hover-value="FUEL_FF" data-tooltip="${flight.airline.code}">
                                       	
                                        	<img src="/resources/images/airline/<c:out value='${fn:toLowerCase(flight.airline.code)}' />.gif" />
                                        </span>
                                        <span class="Flight-name"> <c:out value='${flight.airline.name}' /> </span>
                                          <span class="Flight-name">Flight No. <c:out value='${flight.flightCode}' /> </span>
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-sm-3 col-xs-7">
                                    	<div class="dest-name123"><c:out value='${flight.originAirport.cityName}' /> (<c:out value='${flight.originAirport.airportCode}' /> )<%-- - 
											<c:choose>
											<c:when test="${flight.originAirport.country=='US'}">United States
											<br />
											</c:when>
											
											<c:otherwise><c:out value='${flight.originAirport.country}' />
											<br />
											</c:otherwise>
											</c:choose> --%>
    
                                    	</div>
                                    	
  										<c:set var="dateParts" value="${fn:replace(flight.departureTime,'T', ' ')}" />
										<fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                                        <span class="departCity">
                                     <fmt:formatDate value="${dateObject }" pattern="EEE, dd MMM" />
                                       
                                        <fmt:formatDate value="${dateObject }" pattern="hh:mm a" /></span>
                                        <span class="dat-n-tim"></span>
                                        <div  class="dest-name122"><c:out value='${flight.originAirport.airportName}' /></div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 col-sm-3 col-xs-12 citymove">
                                    	<p class="cityseprator"></p>
                                        <small>
                                            <span class="pull-left">
                                                <i class="fa fa-clock-o" style="margin-left:-30px;"></i>
                                          
                                               <%-- <c:set var="minutes" value="${fn:substringBefore((flight.EFT/2) div 60, '.')}"/> 
                                                <fmt:formatNumber var="seconds" minIntegerDigits="2" value="${fn:substringBefore( (flight.EFT/2) - (minutes*60), '.') }"/>
                                                <c:out value='${minutes}' />h <c:out value='${seconds}' />m --%>
                                              
                                            </span>
                                            <span class="pull-left">
                                                <span class="connect-info">
                                                    |&nbsp;&nbsp;&nbsp;
                                                    Non Stop
                                                </span>
                                            </span>
                                             <c:choose>
											<c:when test="${flight.airline.code != flight.operatingCarrier.code}">
											<span class="" style="width: 100%; float: left; margin-left: -16px; margin-top:26px;" ><i class="fa fa-info-circle"></i> Operated by <c:out value='${flight.operatingCarrier.name}' /> </span>
											</c:when>
                                          </c:choose> 
                                           <!--  <span class="" style="width: 100%; float: left; margin-left: -16px;">
                                                <strong>NOTE:</strong>
                                                Transit visa required
                                            </span> -->
                                        </small>
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12 destination">
                                    <div class="dest-name123"><c:out value='${flight.destinationAirport.cityName}' /> (<c:out value='${flight.destinationAirport.airportCode}' />)<%-- - 
											<c:choose>
											<c:when test="${flight.destinationAirport.country=='US'}">United States
											<br />
											</c:when>
											
											<c:otherwise><c:out value='${flight.destinationAirport.country}' />
											<br />
											</c:otherwise>
											</c:choose> --%>
    
                                    	</div>
                                    	
  										<c:set var="dateParts" value="${fn:replace(flight.arrivalTime,'T', ' ')}" />
										<fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                                        <span class="departCity">
                                     
                                       <fmt:formatDate value="${dateObject }" pattern="EEE, dd MMM" />
                                        <fmt:formatDate value="${dateObject }" pattern="hh:mm a" /></span>
                                        <span class="dat-n-tim"></span>
                                        <div class="dest-name122"><c:out value='${flight.destinationAirport.airportName}' /></div>
										<div><span class="class-bg"><img src="/resources/images/class.png" width="15"> 
                                                <c:out value='${classes}' /> 
                                                	<%-- <c:choose>
											<c:when test="${booking.flight.bookingClass=='1'}">Economy
											<br />
											</c:when>
											<c:when test="${booking.flight.bookingClass=='2'}">First
											<br />
											</c:when>
											<c:otherwise>Business
											<br />
											</c:otherwise>
											</c:choose> --%> </span> </div>
                                        
                                        
                                    </div>
                                </div>
                              
                               <% returnSize=returnSize+1; %> 
                                 <%if(returnSize >= 1 && returnFlights != returnSize){ %>
                               
                                    <!-- if more than one leg -->
                                <div class="col-md-12 col-sm-12 col-lg-12 pa0">
                                	<div class="transit mb20">
                                    	<div>
                                        	<div class="col-md-1 col-lg-1 col-sm-1  col-xs-2">
                                            	<div class="form-group form-group-lg form-group-icon-left journey">
                                					<img src="/resources/images/info-icon.png" width="20">
                                                </div>
                                            </div>
                                            <div class="col-md-5 col-lg-5 col-sm-5 col-xs-10">
                                            	<small>Change planes at <c:out value='${flight.destinationAirport.cityName}' />  (<c:out value='${flight.destinationAirport.airportCode}' /> )</small>
                                            </div>
                                            <div class="col-md-1 col-lg-1 col-sm-1 hidden-xs pa0">
                                            	<p style="text-align:center;">|</p>
                                            </div>
                                            <div class="col-md-5 col-lg-5 col-sm-5 col-xs-12 pad-l-r">
                                            	<small>Connecting flight from a different terminal</small>
                                            </div>
                                        </div>
                                    </div>
                                </div> <%}%>
                                 
                                 </c:if>
                                
                                
                                 </c:forEach> 
 <c:if test="${booking.flexSearchTo ==  'yes'}">
                                  <div class="Flight-name"  style="margin-top:3px; text-align:left;"> <span style="padding: 3px 10px; background: rgb(246, 246, 236) none repeat scroll 0% 0%; color: rgb(255, 102, 0); border: 1px dashed rgb(255, 102, 0); font-size: 13px;"><i aria-hidden="true" class="fa fa-info-circle"></i> This is a flexible date, please verify the date.</span> </div>
                                
                                  </c:if>
                                  <c:if test="${booking.nearByTo ==  'yes'}">
                                      <div class="Flight-name"  style="margin-top:3px; text-align:right;"> <span style="padding: 3px 10px; background: rgb(246, 246, 236) none repeat scroll 0% 0%; color: rgb(255, 102, 0); border: 1px dashed rgb(255, 102, 0); font-size: 13px;"><i aria-hidden="true" class="fa fa-info-circle"></i> This is a Nearby Airport, please verify the Airport.</span> </div>
                                   
                                  </c:if>
                                
                   
                            </div>
                    		
                 
                       <div class= "results-box">
                        	<div class="sub_header">
                               <h4>Flight Booking Terms & Conditions</h4>
                            </div>
                            <div class="col-md-12 col-xs-12 col-sm-12 mt10 paymentcontent">
                            	
                               
								<p>Please make a note that tickets are non-transferable and name changes on tickets are not permitted. The Fare are non-refundable(see Fare Rules) for specific Airlines also our service fees is non-refundable. All service fees and taxes are included in the total ticket cost. However, tickets may be refunded if requested within four (4) hours from the time of purchase at no extra cost, and within twenty-four (24) hours from the time of purchase for a certain fee (Airline Specific). The date and re-routing changes will be accountable to Airline panelties and service fees. Fares are not guaranteed until the ticket is booked.</p>
                            	                            </div>
                            
                        </div>  
                                     
                    </div>
                </div>
                <!---------------Right Side Bar-------------->
                <div class="col-xs-3 col-md-3 detail_bar pr0" style="margin-top:10px;">
            		<!----------Help Section----------->
                    <!--<div class="help col-md-12 results-box">
                        <div class="contacthelp">
                            <div class="needhelp">Can we help?</div>
                            
                        </div>
                        
                                <i class="fa fa-phone-square phonehelp"></i>
                                <div class="chatnumber">
                                    
                                    <p>Toll-free Number At</p>
									+44-800-972-3035
                                </div>
                           
                    </div>-->
					<div style="height:20px;"></div>
					
				   	<!----------Help Section----------->
                    <!----------Fare Detail Section----------->
            		<div class="faredetail results-box" style=" margin-top:35px;">
                    	<div class="sub_header">
                            <h4>Price Summary</h4>
                        </div>
                        <div class="col-md-12 col-lg-12 col-xs-12 fare-det">
                        <div class=" ">
                            	<div class="col-md-8 pa0 col-xs-12 col-sm-8">
                                	<p>Traveler(s)   Ticket Price</p>
                                </div>
                                 <div class="col-md-4 col-xs-12 text-right col-sm-4">
                                	<p>Total</p>
                                </div>
                            </div>
                        		
                        <fmt:setLocale value="en_US"/>
                       
                         <c:if test="${booking.adult > 0}">
                        	<div class=" ">
						                        	
						                            	
						<div class="col-md-8 pa0 col-xs-12 col-sm-8">
													
							<p>Adult  <c:out value='${booking.adult}' />  X  <fmt:formatNumber var="adultFare" type="number" minFractionDigits="2" maxFractionDigits="2" value='${booking.fare.adultFare}' />$<c:out value="${adultFare}"/></p>
							</div>
							<div class="col-md-4 col-xs-12 text-right col-sm-4">
								<p><fmt:formatNumber var="formattedBillableTime" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.adultFare*booking.adult}" />
						
								$<c:out value='${formattedBillableTime}' /></p>
								</div>
						</div>
						</c:if>
						  <fmt:formatNumber var="CjpublishedFare" type="number" groupingUsed="false"  value="${((booking.fare.adultFare*booking.adult)+(booking.fare.childFare*booking.child)+(booking.fare.infantFare*booking.infant)+(booking.fare.infantWsFare*booking.infantWs))/(booking.infantWs+booking.infant+booking.child+booking.adult)}" />
								  <fmt:formatNumber var="RkpublishedFare" type="number" groupingUsed="false"  value="${(booking.fare.adultFare*booking.adult)+(booking.fare.childFare*booking.child)+(booking.fare.infantFare*booking.infant)+(booking.fare.infantWsFare*booking.infantWs)}" />
						
						<c:if test="${booking.child > 0}">
						<div class=" ">
							<div class="col-md-8 pa0 col-xs-12 col-sm-8">
								<p>Child  <c:out value='${booking.child}' />  X <fmt:formatNumber  type="number" minFractionDigits="2" maxFractionDigits="2"  var="childFare" value='${booking.fare.childFare}' />$<c:out value="${childFare}" /></p>
							</div>
							<div class="col-md-4 col-xs-12 text-right col-sm-4">
								<p><fmt:formatNumber  type="number" minFractionDigits="2" maxFractionDigits="2"  var="tchildFare"  value='${booking.fare.childFare*booking.child}' />$<c:out value="${tchildFare}" /></p>
							</div>
						</div>
						</c:if>
						<c:if test="${booking.infant > 0}">
						<div class=" ">
							<div class="col-md-8 col-xs-12 pa0 col-sm-8">
								<p>Infant  <c:out value='${booking.infant}' />  X <fmt:formatNumber  type="number" minFractionDigits="2" maxFractionDigits="2"  var="infantFare" value='${booking.fare.infantFare}' />$<c:out value="${infantFare}" /></p>
							</div>
							<div class="col-md-4 col-xs-12 text-right col-sm-4">
								<p><fmt:formatNumber  type="number" minFractionDigits="2" maxFractionDigits="2"  var="tinfantFare"  value='${booking.fare.infantFare*booking.infant}' />$<c:out value="${tinfantFare}"/></p>
							</div>
						</div>
						</c:if>
						<c:if test="${booking.infantWs > 0}">
						<div class=" ">
							<div class="col-md-8 pa0 col-xs-12 col-sm-8">
								<p>Infant W/S  <c:out value='${booking.infantWs}' />  X <fmt:formatNumber  type="number" minFractionDigits="2" maxFractionDigits="2"  var="infantwsFare" value='${booking.fare.infantWsFare}' />$<c:out value="${infantwsFare}" /></p>
							</div>
							<div class="col-md-4 text-right col-xs-12 col-sm-4">
								<p><fmt:formatNumber  type="number" minFractionDigits="2" maxFractionDigits="2"  var="tinfantwsFare" value='${booking.fare.infantWsFare*booking.infantWs}' />$<c:out value="${tinfantwsFare}"/></p>
							</div>
						</div>
						</c:if>
						 <div class="clearfix pa0"></div>
                            <div class="  feedetail">
                            	<div class="form-group col-md-8 pa0 col-xs-12 col-sm-8 ">
                                	 
                                	<p >Fee & Surcharges</p>
                                </div>
                                
                                <div class="col-md-4 col-xs-12 text-right col-sm-4">
                                	<p>
                                	<fmt:formatNumber var="feesch" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.tax+((booking.fare.markup+10)*(booking.infantWs+booking.infant+booking.child+booking.adult))}" />
									$<c:out value='${feesch}' /></p>
                                </div>
                            </div>  
                            
                            
                          
                              <!-- MACP -->
                             <c:set var="tgString" value='${booking.travelGuard}'/>
                            <c:if test="${tgString eq 'Yes'}">
                             <!-- MACP -->
                             <div class="clearfix pa0"></div>
                            <div class="  feedetail" id="macp" style="position: relative;">
                            	<div class="form-group col-md-8 pa0 col-xs-12 col-sm-8 ">
                                	  <fmt:formatNumber var="travelGuard"  type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.TGuardValue}" />
                                	<p >Travel Guard Fees</p>
                                </div>
                                 <fmt:formatNumber var="tggFees"  type="number" minFractionDigits="2" maxFractionDigits="2" value="${(travelGuard*(booking.infantWs+booking.infant+booking.child+booking.adult))}" />
								
                                <div class="col-md-4 col-xs-12 text-right col-sm-4" style="padding-left: 0 !important;">
                               	<p>$<c:out value='${tggFees}' /></p>
                                </div>
                            </div>
                            </c:if>
                              
                            <div class="clearfix pa0"></div>
                            <div class="  feedetail">
                            	<div class="form-group col-md-8 pa0 col-xs-12 col-sm-8 ">
                                	 
                                	<p >Instant Discount</p>
                                </div>
                                 <fmt:formatNumber var="discounts" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(10*(booking.infantWs+booking.infant+booking.child+booking.adult))}" />
								
                                <div class="col-md-4 col-xs-12 text-right col-sm-4" style="padding-left: 0 !important;">
                               	<p>-$<c:out value='${discounts}' /></p>
                                </div>
                            </div>
                             <c:set var="CjQTY" value='${(booking.infantWs+booking.infant+booking.child+booking.adult)}'/>
                            <c:set var="CouString" value='${booking.coupons}'/>
                            <c:set var="CJCouString" value='${booking.CouponsCode}'/>
                            
                            <c:if test="${CouString eq 'Yes'}">
                             <div class="clearfix pa0"></div>
                            <div class="  feedetail">
                            	<div class="form-group col-md-8 pa0 col-xs-12 col-sm-8 ">
                                	 
                                	<p>Coupons Discount</p>
                                </div>
                                 <fmt:formatNumber var="Coupdiscounts" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.couponsAmt}" />
                                  <fmt:formatNumber var="Cjdiscounts" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.couponsAmt}" />
								
                                <div class="col-md-4 col-xs-12 text-right col-sm-4" style="padding-left: 0 !important;">
                               	<p>-$<c:out value='${Coupdiscounts}' /></p>
                                </div>
                            </div>
                            </c:if>
                            
                            <div class="feesurchrge col-md-12 pa0 col-xs-12 col-lg-12">
                                    	<div class="surcharges">
                                            <div class="col-md-8 col-xs-12 col-sm-8">
                                                <p>Airline Fuel Surcharges</p>
                                            </div>
                                            <div class="col-md-4 text-right col-xs-12 col-sm-4">
                                                <p>$150</p>
                                            </div>
                                        </div>
                                        <div class="surcharges">
                                            <div class="col-md-8 pa0 col-xs-12 col-sm-8">
                                                <p>Passenger Service Fee</p>
                                            </div>
                                            <div class="col-md-4 text-right col-xs-12 col-sm-4">
                                                <p>$110</p>
                                            </div>
                                        </div>
                                        <div class="surcharges">
                                            <div class="col-md-8 pa0 col-xs-12 col-sm-8">
                                                <p>User Development Fee</p>
                                            </div>
                                            <div class="col-md-4 text-right col-xs-12 col-sm-4">
                                                <p>$129</p>
                                            </div>
                                        </div>
                                        <div class="surcharges" style="border:none;">
                                            <div class="col-md-8 pa0 col-xs-12 col-sm-8">
                                                <p>YST</p>
                                            </div>
                                            <div class="col-md-4 text-right col-xs-12 col-sm-4">
                                                <p>$161</p>
                                            </div>
                                        </div>
                                    </div>
                             <div class="clearfix"></div>
                            <div class="  pricetotal" style="background:#f1f1f1; border-top:1px solid #ccc; margin:0 -15px; padding-bottom: 10px !important;">
                            	<div class="col-md-6 col-xs-6 col-sm-6 mt10">
                                	You Pay
                                </div>
                                <div class="col-md-6 ar col-xs-6 col-sm-6">
                                 <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal}" />
                                  
									<h4>$<c:out value='${publishedFare}' /></h4>
                                </div>
								<div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                
				<div class="results-box " style="background:#f1f1f1; border:0; padding:20px 0;">
						<div align="center"><img src="/resources/images/add.jpg"></div>
						</div>
                
             </c:forEach>
                
            </div><!--Modification ends-->
            
        </div>
    </div>

</div>
    	
     
    <!--Main--> 

		
	<!--Footer Start-->
   <jsp:include page="confirmed_footer.jsp"></jsp:include>
	<!--Footer Closed-->
			
<script src="/resources/js/jquery-1.8.2.min.js"></script>
<script src="/resources/js/modernizr.min.js"></script> 
<script src="/resources/js/respond.min.js"></script> 
<script src="/resources/js/prefixfree.min.js"></script> 
<script src="/resources/js/bootstrap.js"></script>
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/theme-scripts.js"></script>
<script src="/resources/js/jquery.slides.min.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.min.js"></script>
<script src="/resources/js/local-cache.js"></script>  
     
        <script type="text/javascript">
        
        function submitForm(){
  
 var validator = $("#booking").validate({
  showErrors: function() {
        if (this.settings.highlight) {
            for (var i = 0; this.errorList[i]; ++i) {
                this.settings.highlight.call(this, this.errorList[i].element,
                    this.settings.errorClass, this.settings.validClass);
            }
        }
        if (this.settings.unhighlight) {
            for (var i = 0, elements = this.validElements(); elements[i]; ++i) {
                this.settings.unhighlight.call(this, elements[i],
                    this.settings.errorClass, this.settings.validClass);
            }
        }
    },
  rules: {       
   
   'passengerList[0].FirstName': {
    required: true
	},
	'passengerList[0].LastName': {
    required: true
	},
	'passengerList[0].DobDate': {
     selectdate: true
	},
	'passengerList[0].DobMonth': {
     selectmonth: true
	},
	'passengerList[0].DobYear': {
     selectyear: true
	},
    'passengerList[1].FirstName': {
    required: true
	}, 
	'passengerList[1].LastName': {
    required: true
	},
	'passengerList[1].DobDate': {
     selectdate: true
	},
	'passengerList[1].DobMonth': {
     selectmonth: true
	},
	'passengerList[1].DobYear': {
     selectyear: true
	},
	 'passengerList[2].FirstName': {
    required: true
	}, 
	'passengerList[2].LastName': {
    required: true
	},
	'passengerList[2].DobDate': {
     selectdate: true
	},
	'passengerList[2].DobMonth': {
     selectmonth: true
	},
	'passengerList[2].DobYear': {
     selectyear: true
	},   
	 'passengerList[3].FirstName': {
    required: true
	}, 
	'passengerList[3].LastName': {
    required: true
	},
	'passengerList[3].DobDate': {
     selectdate: true
	},
	'passengerList[3].DobMonth': {
     selectmonth: true
	},
	'passengerList[3].DobYear': {
     selectyear: true
	},   
	 'passengerList[4].FirstName': {
    required: true
	}, 
	'passengerList[4].LastName': {
    required: true
	},
	'passengerList[4].DobDate': {
     selectdate: true
	},
	'passengerList[4].DobMonth': {
     selectmonth: true
	},
	'passengerList[4].DobYear': {
     selectyear: true
	},   
	 'passengerList[5].FirstName': {
    required: true
	}, 
	'passengerList[5].LastName': {
    required: true
	},
	'passengerList[5].DobDate': {
     selectdate: true
	},
	'passengerList[5].DobMonth': {
     selectmonth: true
	},
	'passengerList[5].DobYear': {
     selectyear: true
	},   
	 'passengerList[6].FirstName': {
    required: true
	}, 
	'passengerList[6].LastName': {
    required: true
	},
	'passengerList[6].DobDate': {
     selectdate: true
	},
	'passengerList[6].DobMonth': {
     selectmonth: true
	},
	'passengerList[6].DobYear': {
     selectyear: true
	},   
	 'passengerList[7].FirstName': {
    required: true
	}, 
	'passengerList[7].LastName': {
    required: true
	},
	'passengerList[7].DobDate': {
     selectdate: true
	},
	'passengerList[7].DobMonth': {
     selectmonth: true
	},
	'passengerList[7].DobYear': {
     selectyear: true
	}, 
	'passengerList[8].FirstName': {
    required: true
	}, 
	'passengerList[8].LastName': {
    required: true
	},
	'passengerList[8].DobDate': {
     selectdate: true
	},
	'passengerList[8].DobMonth': {
     selectmonth: true
	},
	'passengerList[8].DobYear': {
     selectyear: true
	},             
  'payment.cardCode': {
		selectcard: true
	},
	'payment.cardNumber': {
		required: true,
		minlength: 15,
		maxlength: 16,
	},
	'payment.cardHolderName': {
		required: true,
	},
	'payment.expiryMonth': {
		selectExpMonth: true,
	},
	'payment.expiryYear': {
		selectExpYear: true,
	},
	'payment.cvvNo': {
		required: true,
		minlength: 3,		
	},
	'payment.address1': {
		required: true
	},
	'payment.city': {
		required: true
	},
	'payment.state': {
		required: true
	},
	'payment.postalCode': {
		required: true
	},
	'contact.billingPhone': {
		required: true
	},
	'contact.email': {
		required: true,
		email: true
	},
    },  
     errorElement: "span" ,                              
     messages: {
     
    		   'passengerList[0].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[0].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[1].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[1].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[2].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[2].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[3].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[3].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[4].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[4].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[5].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[5].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[6].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[6].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[7].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[7].LastName': { 
					required: "Please provide Last name for traveler",
				},
				'passengerList[8].FirstName': { 
					required: "Please provide First name for traveler",
				},
				'passengerList[8].LastName': { 
					required: "Please provide Last name for traveler",
				},
               'payment.cardNumber': {
					required: "Please enter a valid card number.",
					minlength: "Please enter a valid card number.",
					maxlength: "Please enter a valid card number."
				},
				'payment.cardHolderName': { 
					required: "Please enter a valid card holder name.",
				},
	             'payment.cvvNo': {
					required: "Please enter a valid CVV number.",
					minlength: "CVV number must consist of at least 3 digit."
					
				},
				'payment.address1': {
				required: "Please enter a valid address.",
				},
				'payment.city': {
				required: "Please enter a valid city.",
				},
				'payment.state': {
				required: "Please enter a valid state.",
				},
				'payment.postalCode': {
				required: "Please enter a valid postal code.",
				},
				'contact.billingPhone': {
				required: "Please enter a valid billing phone.",
				},
				'contact.email': {
				required: "Please enter a valid email address.",
				},
    }
    
    
   
    
 });
 
  jQuery.validator.addMethod('selectcard', function (value) {
        return (value != 'Select a Card');
    }, "Please select a valid card type");
   jQuery.validator.addMethod('selectExpMonth', function (value) {
        return (value != '0');
    }, "Please select a valid expiration month");
   jQuery.validator.addMethod('selectExpYear', function (value) {
        return (value != 'Year');
    }, "Please select a valid expiration year");
 jQuery.validator.addMethod('selectdate', function (value) {
        return (value != 'Day');
    }, "Please select a valid expiration year");
    jQuery.validator.addMethod('selectmonth', function (value) {
        return (value != '0');
    }, "Please select a valid expiration year");
    jQuery.validator.addMethod('selectyear', function (value) {
        return (value != 'Year');
    }, "Please select a valid expiration year");
// alert($("#payment\\.cardNumber").val());
 if(validator.form()){ // validation perform

var rndId = randomString(12);
  $('form#booking').attr({action: '/booked/'+rndId});   
  $('form#booking').submit();
  
 }
}
        
function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}     
 function secondsToTime(m){
   
    var h  = Math.floor( m / 60 );
        m -= h * 60;
   
    return {
        "h": h,
        "m": m
    };
}
</script>
    <!-- Google Code for Conversion Conversion Page -->

<script type="text/javascript">var USI_orderID = '<c:out value="${cjPnr}"/>';var USI_orderAmt = '<c:out value='${publishedFare}' />';var USI_headID = document.getElementsByTagName("head")[0];var USI_dynScript = document.createElement("script");USI_dynScript.setAttribute('type','text/javascript');USI_dynScript.src = '//www.upsellit.com/active/Travelopick_pixel.jsp';USI_headID.appendChild(USI_dynScript);</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/928632334/?label=sgKZCKz37WMQjpznugM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>
<script type="text/javascript">
        var _mfq = _mfq || [];
        (function () {
        var mf = document.createElement("script"); mf.type = "text/javascript"; mf.async = true;
        mf.src = "//cdn.mouseflow.com/projects/12d10d9b-2948-4779-af73-ac5bd3868d89.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
      })();
    </script>
	


<script type="text/javascript" language="Javascript">
/* 
Action ID (TYPE in tag): 387870
Enterprise ID (CID in tag): 1538584
Container Tag ID: 15468
 */

 var cjData = localStorage.getCacheItem("lufcjdata"); 
        localStorage.removeItem("lufcjdata");   
   
       if(cjData != null){
        localStorage.clear();
     //      alert(cjData.AID);
    //    alert(cjData.PID);
    //     alert(cjData.SID);
     //     alert(cjData.ref);
                           
  //  alert(cjData.page);
       var QTY = '<c:out value="${CjQTY}"/>';
    var AMT = '<c:out value="${CjpublishedFare}"/>';
      var discount = '<c:out value="${Cjdiscounts}"/>';
        var cjPnr = '<c:out value="${cjPnr}"/>';
   if(cjPnr != 'X'){    
 //if(cjData.page == 'flight'){
var url ='https://www.emjcd.com/tags/c?containerTagId=15468&CID=1538584&TYPE=387870&CURRENCY=USD';
url += '&OID=' +cjPnr;
var items='Flight';
 if(discount != 0.0){    
//AMT = '<c:out value="${CjpublishedFare-Cjdiscounts}"/>';
url += '&DCNT1=' + discount;
items='Flight-coupon';
}
AMT=AMT.replace(/,/g , "");
url += '&ITEM1='+ items;
url += '&AMT1=' + AMT;
url += '&QTY1=' + QTY;



document.write('<iframe height="1" width="1" frameborder="0" scrolling="no" name="cj_conversion" src="' + url +
'"></iframe>');
 //  }
   }
   }
</script> 


<script type="application/javascript">(function(w,d,t,r,u){w[u]=w[u]||[];w[u].push({'projectId':'10000','properties':{'pixelId':'10009940'}});var s=d.createElement(t);s.src=r;s.async=true;s.onload=s.onreadystatechange=function(){var y,rs=this.readyState,c=w[u];if(rs&&rs!="complete"&&rs!="loaded"){return}try{y=YAHOO.ywa.I13N.fireBeacon;w[u]=[];w[u].push=function(p){y([p])};y(c)}catch(e){}};var scr=d.getElementsByTagName(t)[0],par=scr.parentNode;par.insertBefore(s,scr)})(window,document,"script","https://s.yimg.com/wi/ytc.js","dotq");</script>

<script type="text/javascript" language="Javascript">
/* 
Action ID (TYPE in tag): 387870
Enterprise ID (CID in tag): 1538584
Container Tag ID: 15468
 */

 var rkData = localStorage.getCacheItem("lufrkdata"); 
  localStorage.removeItem("lufrkdata");   
       if(rkData != null){
       localStorage.clear();
        //   alert(rkData.AID);
      // alert(rkData.PID);
      //  alert(rkData.SID);
      //   alert(rkData.ref);
                           
  //  alert(cjData.page);
       var QTY = '<c:out value="${CjQTY}"/>';
    var AMT = '<c:out value="${RkpublishedFare}"/>';
    AMT = AMT*100;
   //   var discount = '<c:out value="${Cjdiscounts}"/>';
         var cjPnr = '<c:out value="${cjPnr}"/>';
   if(cjPnr != 'X'){    
// if(rkData.page == 'flight'){
 
var url ='http://track.linksynergy.com/eventnvppixel?mid=42135&cur=USD';
url += '&ord=' +cjPnr;
url += '&land=' +rkData.land;
var items='AIR';
var siteID = "lKW2Xiq9xN0-4.c_9w1X8ZpO94TUl4hg3D"; 
//AMT=AMT.replace(/,/g , "");
url += '&tr=' + siteID;
url += '&skulist='+ items;
url += '&namelist='+ items;
url += '&amtlist=' + AMT;
url += '&qlist=' + QTY;


document.write('<img height="1" width="1" border="0" name="rk_conversion" src="' + url +
'" />');
  // }
   }
   }
</script>

<script>(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"5281034"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");</script><noscript><img src="//bat.bing.com/action/0?ti=5281034&Ver=2" height="0" width="0" style="display:none; visibility: hidden;" alt="bing" /></noscript>




</body>
</html>
