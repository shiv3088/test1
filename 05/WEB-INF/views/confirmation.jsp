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

<title>Flight Confirmation  | ${data.siteName}</title>

<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="/resources/flight-result/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/flight-result/css/font-awesome.min.css" rel="stylesheet">  
<link href="/resources/flight-result/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/flight-result/css/angular-busy.css" rel="stylesheet">
<link href="/resources/flight-result/css/result-style_1_4.css" rel="stylesheet">
<link href="/resources/flight-result/css/flag-icon.css" rel="stylesheet">
<script src="/resources/flight-result/lib/angular/angular.js"></script>
<script src="/resources/flight-result/js/jquery.1.11.1.min.js"></script>
<script src="/resources/flight-result/js/local-cache.js"></script>

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
src="https://www.facebook.com/tr?id=1575600346100223&ev=PageView&noscript=1" alt="facebook"
/></noscript></c:forEach>

<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<script>
fbq('track', 'Purchase', {
value: 1,
});
</script>

<body>
<!-- Header Section Start -->
<jsp:include page="confirm_header.jsp"></jsp:include>

<div style="height:20px;"></div>
<!-- Main Section -->
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
	</c:forEach>

   <c:forEach items="${bookingWrapperList}" var="booking"  >




    <div class="container">
        <div class="row">


            <!-- Main Result Area -->
        <div class="col-sm-12 col-md-9">
			
			<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"  style="max-width:100%; min-width:320px; -webkit-text-size-adjust: 100%; font-family: 'Roboto', sans-serif; border:1px solid #b8e0fe; background:#fff  !important;"> 
	
       
         
		
        <tr>
         
        
        <td style="background:url(/resources/images/mailer/header-img.jpg) #ccc; device-width:320px;  width:inherit; width:100%; color: #000000; font-family: 'Roboto', sans-serif; font-size: 40px; text-align: center; font-weight:bold;">
        
        
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
              <tbody>
              <tr><td height="50"></td><td height="50"></td><td height="50"></td></tr>
              <tr>
                <td width="20"></td>
                <td style="font-size:26px; color: #fff; font-family: 'Roboto', sans-serif; line-height:39px;  font-weight:bold; text-align:center;">
                        <c:choose>
                	
						<c:when test="${booking.pnr=='X'}">
						<img src="/resources/images/mailer/pending-icon-big.png" align="top">
				Your booking is pending 
				</c:when>
						
						<c:otherwise>
						<img src="/resources/images/mailer/book-icon-big.png" align="top">
						Your booking is confirmed 
						</c:otherwise>
					</c:choose>
				</td>
                <td width="20"></td>
              </tr>
               <c:set var="cjPnr" value="${booking.pnr}" />
              <tr>
                <td></td>
                <td height="15"></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                	<c:choose>
                	
						<c:when test="${booking.pnr=='X'}">
<!-- 						    <td style="font-size:18px; font-weight:300; text-align:center; font-family: 'Roboto', sans-serif; color:#fff;line-height:22px;">Thank you for choosing Travelopick, Your reservation is pending and one of our executives will contact you shortly to confirm this, In case you do not receive a call  within one hour, we would request you to contact us <br> by calling on our toll free number: <c:out value='${data.tfnNo}' />  with reference number is</td> -->
						    <td style="font-size:18px; font-weight:300; text-align:center; font-family: 'Roboto', sans-serif; color:#fff;line-height:22px;">Thank you for choosing ${data.siteName}, Your reservation is pending and one of our executives will contact you shortly to confirm this, In case you do not receive a call  within one hour, we would request you to contact us <br> by calling on our toll free number: <c:out value='${data.tfnNo}' />  with reference number is</td>
						</c:when>
						
						<c:otherwise>
						  <!--  <td style="font-size:18px; font-weight:300; text-align:center; font-family: 'Roboto', sans-serif; color:#fff;line-height:22px;">Thank you for choosing Travelopick,  your booking <br> -->
						   <td style="font-size:18px; font-weight:300; text-align:center; font-family: 'Roboto', sans-serif; color:#fff;line-height:22px;">Thank you for choosing ${data.siteName},  your booking <br>
reference number is</td></c:otherwise>
					</c:choose>
					
             
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td height="15"></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td align="center">
                <table width="200">
                <tr>
                <td style="border: 2px solid #a9a9a9;color: #fff;font-family: 'Roboto', sans-serif;font-size: 25px;font-weight: 500;line-height: 50px;text-align: center;width: 200px;">
			    <c:choose>
			    <c:when test="${booking.pnr=='X'}">
			<c:out value='${booking.unPnr}' />
									</c:when>
									
									<c:otherwise>
			<c:out value='${booking.pnr}' />
			</c:otherwise>
								</c:choose>
    
    </td>
	</tr>
   
    </table>
    
    </td>
                <td></td>
              </tr>
              
              <tr>
			  <td height="50"></td>
			  <td height="50"></td>
			  <td height="50"></td>
			  </tr>
              
            </tbody></table>
        
        
       </td>
        
        </tr>
        
        
        <tr> <td height="20"></td> </tr>
        
		
        <tr>
          <td style="background:#fff;">
		  
           <table width="100%" cellspacing="0" cellpadding="0" border="0">
       
        <c:if test="${booking.flexSearch ==  'yes'}">
          <tr>
           <td width="20"></td> 
          <td style="font-size:14px; color:#333333; ">
         <b>Kind Attention:</b> This is a flexible date that you Booked. In case you would like to enquire more about this you may call us on our toll free number: <c:out value='${data.tfnNo}' /> . </td>          
           <td width="20"></td>
          </tr>
         </c:if> 
         <c:if test="${booking.nearBy ==  'yes'}">
          <tr>
           <td width="20"></td>
          <td style="font-size:14px; color:#333333; ">
         <b>Kind Attention:</b> This is a Near By Airport that you Booked. In case you would like to enquire more about this you may call us on our toll free number: <c:out value='${data.tfnNo}' /> . </td>          
           <td width="20"></td>
          </tr>
         </c:if> 
		 <c:set var="tgString" value='${booking.travelGuard}'/>
		   <c:if test="${tgString eq 'Yes'}">
    
   
                           
                            <c:set var="tgpString" value='${booking.policyNumber}'/>
                           <c:if test="${tgpString ne 'X'}">
						    <tr>
           <td width="20"></td>
          <td style="font-size:14px; color:#333333; ">
             <b>
                            	Your Travel Guard PolicyNumber:&nbsp;<c:out value='${booking.policyNumber}' /></b>
								<br/>
								Your can check your Policy: <a href="<c:out value='${booking.policyLookup}' />"> <c:out value='${booking.policyLookup}' /></a></b>
								
			 </td>          
           <td width="20"></td>
          </tr>					 <tr><td></td><td height="20"> </td> <td> </td></tr>
					         </c:if>
							 
                            
                             </c:if>
							  
							  
         
           <c:if test="${booking.brb ==  'Yes'}">
          <tr>
           <td width="20"></td> 
          <td style="font-size:14px; color:#333333; ">
         <b>Baggage Protection Service Number :  <c:out value='${booking.brbServiceNumber}' /></b> </td>          
           <td width="20"></td>
          </tr>
          <tr><td></td><td height="20"> </td> <td> </td></tr>
         </c:if>
           <c:set var="tmString" value='${booking.tripMate}'/>
             
  <tbody><tr>
    <td width="20">&nbsp;</td>
    <td>
     
    
    <table style="" width="100%" cellspacing="0" cellpadding="0" border="0">
    
    <tbody><tr>
    
    <td><table style="border-collapse:collapse; " width="100%" cellspacing="0" cellpadding="0" bordercolor="#ccc" border="0" bgcolor="#165780">
  <tbody><tr style="background:#165780; color:#fff; border-bottom:2px solid #ccc;">
   <td width="15" height="40">&nbsp;</td>
    <td style="font-family: 'Roboto', sans-serif;line-height:35px; font-size:18px;">Flights Summary</td>
     
     
    <td style="font-family: 'Roboto', sans-serif; line-height: 22px; font-size:14px;" align="right">  
    
    <table cellspacing="0" cellpadding="0" border="0">
    
    <tbody><tr>
	  <c:choose>
			    <c:when test="${booking.pnr=='X'}">
			 <td><img src="/resources/images/mailer/pending-icon-small.png" align="top"> &nbsp; </td>
    <td> pending</td>
									</c:when>
									
									<c:otherwise>
			 <td><img src="/resources/images/mailer/book-icon-small.png" align="top"> &nbsp; </td>
    <td> Confirmed</td>
			</c:otherwise>
								</c:choose>
								
   
    </tr>
    
    </tbody></table>
    
    
    
     </td>
    <td width="15">&nbsp;</td>
  </tr>
    
    </tbody></table></td>
    
    </tr>
    
    <tr>
    <td style="font-family: 'Roboto', sans-serif;line-height:35px; color:#3d3d3d; font-size:18px;">
    
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
  <tbody><tr style="background:#eeeeee;   ">
   
   <td width="8" height="40">&nbsp;</td>
   
    <td width="29"><img src="/resources/images/mailer/plane-icon.png" align="bottom"></td> 
    <td > &nbsp; Departure Flight Details :- </td>
     
      
  </tr>
    
    </tbody></table>
    
    </td>
    </tr>
     <% int departFlights=0; int departFli=0; %>
                                 <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl" >
                                   <c:if test="${flight.isReturnFlight ==  false}">
                                   <% departFlights=departFlights+1; %> 
                                   </c:if>
                                 </c:forEach>
    
     <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl" >
     
                       <c:if test="${flight.isReturnFlight ==  false}">             
    <tr>
    
    <td>
      
    <table width="100%" cellspacing="0" cellpadding="0" border="0" >
    
    <tbody><tr>
    
    <td width="20"></td>
    <td>
    
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
    
    <tbody><tr>
    <td><table style="border-collapse:collapse;  " width="100%" cellspacing="0" cellpadding="0" bordercolor="#ccc" border="0">
    
    <tbody><tr>
  
     <c:if test="${UAAirline != 'UA'}">
     <c:set var="UAAirline" value="${flight.airline.code}" scope="page"/>
     </c:if>
     
      <c:if test="${ResDesignCode != 'N'}">
     <c:set var="ResDesignCode" value="${flight.resDesignCode}" scope="page"/>
     </c:if>
     
    <td width="6%" height="50"><img src="/resources/images/airline/<c:out value='${fn:toLowerCase(flight.airline.code)}' />.gif" ></td>
    <td style="font-family: 'Roboto', sans-serif; color:#3d3d3d; font-size:13px;" width="21%" height="30" align="left">&nbsp;<c:out value='${flight.airline.name}' /></td>
    <td style="font-family: 'Roboto', sans-serif; color:#3d3d3d; font-size:13px;" width="29%" align="left"><strong>Flight No:</strong> <c:out value='${flight.flightCode}' /></td>
    <td style="font-family: 'Roboto', sans-serif; color:#3d3d3d; font-size:13px;" width="30%" align="left"><strong>Class:</strong>  <c:out value='${classes}' /> </td>
    </tr>
    </tbody></table></td>
    </tr>
    
    <tr>
          <c:choose>
											<c:when test="${flight.airline.code != flight.operatingCarrier.code}">
											  <td style="font-family: 'Roboto', sans-serif; padding: 5px 12px; color:#3d3d3d; font-size:12px;border:1px solid #f3d24f;  border-radius: 20px; line-height:15px;" align="left">  <img src="/resources/images/mailer/info-icon.jpg" style="vertical-align:middle;"> &nbsp; Operated By  <c:out value='${flight.operatingCarrier.name}' />
    
   </td>
											</c:when>
                                          </c:choose> 
  
     
     
  </tr>
  
    <tr>
    <td>
    <table style="border-collapse:collapse;   " width="33%" cellspacing="0" cellpadding="0" border="0" align="left">
    
    <tbody><tr>
    
    <td style="font-family: 'Roboto', sans-serif; color:#000;  font-weight:bold; font-size:13px;" height="35"> Departing </td>
    
    </tr>
 
    
    <tr>
    
    <td width="100%">
    
    <table width="100%" cellspacing="0" cellpadding="0" border="0"> 
    
    <tbody><tr>
    <td style="font-family: 'Roboto', sans-serif; color:#575656; line-height:30px; font-size:18px;"><c:out value='${flight.originAirport.cityName}' /> (<c:out value='${flight.originAirport.airportCode}' /> ) </td>
    </tr>
    <c:set var="dateParts" value="${fn:replace(flight.departureTime,'T', ' ')}" />
	<fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
    <tr>
    <td style="font-family: 'Roboto', sans-serif; color:#575656; font-size:14px;"> <fmt:formatDate value="${dateObject }" pattern="MM/dd/yyyy" />
                                       
                                        <fmt:formatDate value="${dateObject }" pattern="hh:mm a" /></td>
    </tr>
    <tr><td height="15"></td></tr>
    
    </tbody></table>
     </td>
   
    </tr>
    </tbody></table>
    
    <table style="border-collapse:collapse;" width="33%" cellspacing="0" cellpadding="0" bordercolor="#ccc" border="0" align="left">
    
    <tbody><tr>
    
    <td style="font-family: 'Roboto', sans-serif; color:#000; font-weight:bold; font-size:13px;" width="165" height="35"> Stop/Duration </td>
    
    </tr>
    
    <tr>
    
    <td>
    <div style="font-family: 'Roboto', sans-serif; color:#575656; line-height:30px;padding-bottom: 10px; font-size:18px;"><img src="/resources/images/mailer/plane-aer-icon.png"></div>
    <div style="font-family: 'Roboto', sans-serif; color:#575656; font-size:14px;"> 
    
     <c:choose>
                <c:when test="${flight.techStops =='1'}">
                   One Stop
                   
                </c:when>    
                <c:otherwise>
                   Non Stop
                   
                </c:otherwise>
            </c:choose>
             <c:choose>
                <c:when test="${booking.gds =='1'}">
             /
<c:set var="minutes" value="${fn:substringBefore((flight.EFT/2) div 60, '.')}"/> 
                                                <fmt:formatNumber var="seconds" minIntegerDigits="2" value="${fn:substringBefore( (flight.EFT/2) - (minutes*60), '.') }"/>
                                               <c:out value='${minutes}' />h <c:out value='${seconds}' />m

</c:when>    
                <c:otherwise>
                 
                   
                </c:otherwise>
            </c:choose>
</div></td>
    
    </tr>
     <tr><td height="15"></td></tr>
    </tbody></table>
    
    
    <table style="border-collapse:collapse; " width="33%" cellspacing="0" cellpadding="0" bordercolor="#ccc" border="0">
    
    <tbody><tr>
    
    <td style="font-family: 'Roboto', sans-serif; color:#000; font-weight:bold; font-size:13px;" height="35"> Arrival </td>
    
    </tr>
    
    
    <tr>
    
    <td width="100%">
    
    <table width="100%" cellspacing="0" cellpadding="0" border="0"> 
    
    <tbody><tr>
    <td style="font-family: 'Roboto', sans-serif; color:#575656; line-height:30px; font-size:18px;"><c:out value='${flight.destinationAirport.cityName}' /> (<c:out value='${flight.destinationAirport.airportCode}' /> ) </td>
    </tr>
    <c:set var="dateParts" value="${fn:replace(flight.arrivalTime,'T', ' ')}" />
										 <fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                                     
                                       
    <tr>
    <td style="font-family: 'Roboto', sans-serif; color:#575656; font-size:14px;"><fmt:formatDate value="${dateObject }" pattern="MM/dd/yyyy" />
                                        <fmt:formatDate value="${dateObject }" pattern="hh:mm a"  /></td>
    </tr>
     <tr><td height="15"></td></tr>
    
    </tbody></table>
     </td>
    
    </tr>
    </tbody></table>
    
    </td>
    </tr>
    
    <tr><td height="15"></td></tr>
    
    </tbody></table>
    
    
       
    </td>
    <td width="20"></td>
    
    </tr>
     
    </tbody></table>
    
    </td>
    
    </tr>
    </c:if>
                                 </c:forEach> 
         <% int returnFlights=0; %>
                                 <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl" >
                                   <c:if test="${flight.isReturnFlight ==  true}">
                                   <% returnFlights=returnFlights+1; %> 
                                   </c:if>
                                 </c:forEach>
                                  <% if(returnFlights >= 1){ %> 
    <tr>
    <td style="font-family: 'Roboto', sans-serif;line-height:35px; color:#3d3d3d; font-size:18px;">
    
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
  <tbody><tr style="background:#eeeeee;   ">
   
   <td width="8" height="40">&nbsp;</td>
   
    <td width="29"><img src="/resources/images/mailer/plane-icon.png" align="bottom"></td> 
    <td width="623"> &nbsp; Return Flight Details :- </td>
     
      
  </tr>
    
    </tbody></table>
    
    </td>
    </tr>
   <% }
                                int returnSize=0; %>
    <tr>
    
    <td>
     <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl" >
                                  <c:if test="${flight.isReturnFlight ==  true}">
                       
								  
    <table width="100%" cellspacing="0" cellpadding="0" border="0"  style=" ">
    
    <tbody><tr>
    
    <td width="20"></td>
    <td>
    
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
    
    <tbody><tr>
    <td><table style="border-collapse:collapse;  " width="100%" cellspacing="0" cellpadding="0" bordercolor="#ccc" border="0">
     <c:set var="airlineg" value="${flight.airline.code}" scope="page"/>
    <tbody><tr>
       <c:if test="${UAAirline != 'UA'}">
     <c:set var="UAAirline" value="${flight.airline.code}" scope="page"/>
     </c:if>
     
      <c:if test="${ResDesignCode != 'N'}">
     <c:set var="ResDesignCode" value="${flight.resDesignCode}" scope="page"/>
     </c:if>
    <td width="6%" height="50"><img src="/resources/images/airline/<c:out value='${fn:toLowerCase(flight.airline.code)}' />.gif" /></td>
    <td style="font-family: 'Roboto', sans-serif; color:#3d3d3d; font-size:13px;" width="21%" height="30" align="left">&nbsp;<c:out value='${flight.airline.name}' /></td>
    <td style="font-family: 'Roboto', sans-serif; color:#3d3d3d; font-size:13px;" width="29%" align="left"><strong>Flight No:</strong> <c:out value='${flight.flightCode}' /></td>
    <td style="font-family: 'Roboto', sans-serif; color:#3d3d3d; font-size:13px;" width="30%" align="left"><strong>Class:</strong> <c:out value='${classes}' /></td>
    </tr>
    </tbody></table></td>
    </tr>
    
    <tr> <c:choose>
     <c:when test="${flight.airline.code != flight.operatingCarrier.code}">
       <td style="font-family: 'Roboto', sans-serif; padding: 5px 12px; color:#3d3d3d; font-size:12px;border:1px solid #f3d24f;  border-radius: 20px; line-height:15px;" align="left">  <img src="/resources/images/mailer/info-icon.jpg" style="vertical-align:middle;"> &nbsp; Operated By   <c:out value='${flight.operatingCarrier.name}' /> 
    
   </td>
											</c:when></c:choose>
  
     
     
  </tr>
  
    <tr>
    <td>
    <table style="border-collapse:collapse;   " width="33%" cellspacing="0" cellpadding="0" border="0" align="left">
    
    <tbody><tr>
    
    <td style="font-family: 'Roboto', sans-serif; color:#000;  font-weight:bold; font-size:13px;" height="35"> Departing </td>
    
    </tr>
    
    
    <tr>
    
    <td width="100%">
    
    <table width="100%" cellspacing="0" cellpadding="0" border="0"> 
    
    <tbody><tr>
    <td style="font-family: 'Roboto', sans-serif; color:#575656; line-height:30px; font-size:18px;"><c:out value='${flight.originAirport.cityName}' /> (<c:out value='${flight.originAirport.airportCode}' /> )</td>
    </tr>
    
    <tr>
    <td style="font-family: 'Roboto', sans-serif; color:#575656; font-size:14px;"><c:set var="dateParts" value="${fn:replace(flight.departureTime,'T', ' ')}" />
										<fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                                     <fmt:formatDate value="${dateObject }" pattern="MM/dd/yyyy" />
                                       
                                        <fmt:formatDate value="${dateObject }" pattern="hh:mm a" /></td>
    </tr>
     <tr><td height="15"></td></tr>
    </tbody></table>
     </td>
    
    </tr>
    </tbody></table>
    
    <table style="border-collapse:collapse;" width="33%" cellspacing="0" cellpadding="0" bordercolor="#ccc" border="0" align="left">
    
    <tbody><tr>
    
    <td style="font-family: 'Roboto', sans-serif; color:#000; font-weight:bold; font-size:13px;" width="165" height="35"> Stop/Duration </td>
    
    </tr>
    
    <tr>
    
    <td>
    <div style="font-family: 'Roboto', sans-serif; color:#575656; line-height:30px;padding-bottom: 10px; font-size:18px;"><img src="/resources/images/mailer/plane-aer-icon.png"></div>
    <div style="font-family: 'Roboto', sans-serif; color:#575656; font-size:14px;">     <c:choose>
                <c:when test="${flight.techStops =='1'}">
                   One Stop
                   
                </c:when>    
                <c:otherwise>
                   Non Stop
                   
                </c:otherwise>
            </c:choose>
             <c:choose>
                <c:when test="${booking.gds =='1'}">
             /
<c:set var="minutes" value="${fn:substringBefore((flight.EFT/2) div 60, '.')}"/> 
                                                <fmt:formatNumber var="seconds" minIntegerDigits="2" value="${fn:substringBefore( (flight.EFT/2) - (minutes*60), '.') }"/>
                                               <c:out value='${minutes}' />h <c:out value='${seconds}' />m

</c:when>    
                <c:otherwise>
                 
                   
                </c:otherwise>
            </c:choose></div></td>
    
    </tr>
     <tr><td height="15"></td></tr>
    </tbody></table>
    
    
    <table style="border-collapse:collapse; " width="33%" cellspacing="0" cellpadding="0" bordercolor="#ccc" border="0">
    
    <tbody><tr>
    
    <td style="font-family: 'Roboto', sans-serif; color:#000; font-weight:bold; font-size:13px;" height="35"> Arrival </td>
    
    </tr>
    
    
    <tr>
    
    <td width="100%">
    
    <table width="100%" cellspacing="0" cellpadding="0" border="0"> 
    
    <tbody><tr>
    <td style="font-family: 'Roboto', sans-serif; color:#575656; line-height:30px; font-size:18px;"><c:out value='${flight.destinationAirport.cityName}' /> (<c:out value='${flight.destinationAirport.airportCode}' />)</td>
    </tr>
    
    <tr>
    <td style="font-family: 'Roboto', sans-serif; color:#575656; font-size:14px;"><c:set var="dateParts" value="${fn:replace(flight.arrivalTime,'T', ' ')}" />
										<fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                                     
                                       <fmt:formatDate value="${dateObject }" pattern="MM/dd/yyyy" />
                                        <fmt:formatDate value="${dateObject }" pattern="hh:mm a" /></td>
    </tr>
     <tr><td height="15"></td></tr>
    </tbody></table>
     </td>
    
    </tr>
    </tbody></table>
    
    </td>
    </tr>
    
    <tr><td height="15"></td></tr>
    
    </tbody></table>
    
    
       
    </td>
    <td width="20"></td>
    
    </tr>
    
    </tbody></table>
      </c:if>
                                
                                
                                 </c:forEach>  
    
    
    <table style="border-collapse:collapse; border-right:1px solid #cccccc;  border-left:1px solid #cccccc;" width="100%" cellspacing="0" cellpadding="0" bordercolor="#ccc" border="0">
   
   
  <tbody><tr>
    <td width="40"></td>
    <td>
    
    <table style="border-collapse:collapse; " width="100%" cellspacing="0" cellpadding="0" bordercolor="#ccc" border="0">
   
   
   <tbody><tr>
     
    <td>
    
   </td>
     
     
  </tr>
   
  
   
  <tr>
     
    <td colspan="4" align="left">
   </td>
  </tr>
    </tbody></table>
    
    </td>
    <td width="40"></td>
     
  </tr>
    </tbody></table>

      
   
<table width="100%" cellspacing="0" cellpadding="0" border="0">
          
          <tbody><tr>
    <td colspan="3" height="25">&nbsp;</td>
    </tr>
          
          
          <tr>
                <td width="20"></td>
                <td style="font-size:18px; color: #000000; line-height:35px; text-align:left; ">Passenger Details </td>
                <td width="20"></td>
              </tr>
  <tr>
    <td width="20">&nbsp;</td>
    <td>
     
     
     
<table style="border-collapse:collapse; border:-0.1em solid #cccccc;" width="100%" cellspacing="0" cellpadding="10" bordercolor="#ccc" border="">
  <tbody><tr style="background:#eeeeee; color:#000000; border-top:2px solid #165780; font-family: 'Roboto', sans-serif; font-size:14px; line-height: 30px; ">
    <td width="36">&nbsp; <b>S.No.</b></td>
    <td width="281">&nbsp; <b>Name</b></td>
    <td width="116">&nbsp; <b>Gender</b></td>
    <td width="151">&nbsp; <b>DOB</b> </td>
  </tr>
  
   <c:forEach items="${booking.passengerList}" var="pax" varStatus="px" >
  <tr style="  color:#000000;  font-family: 'Roboto', sans-serif; font-size:14px; ">
    <td height="35" align="center">${px.index+1}.</td>
    <td>&nbsp; <c:out value='${pax.firstName}' /> <c:out value='${pax.lastName}' /></td>
    <td>&nbsp; 
    <c:choose>
   <c:when test="${pax.gender =='1'}">
   Male
   </c:when>
    <c:when test="${pax.gender =='2'}">
   Female
   </c:when>
   </c:choose>
    
    </td>
    <td>&nbsp; <c:out value='${pax.dobMonth}' />-<c:out value='${pax.dobDate}' />-<c:out value='${pax.dobYear}' />   </td>
  </tr>
   </c:forEach>
    </tbody></table>
    
    </td>
    <td width="20">&nbsp;</td>
  </tr>
</tbody></table>

 
 
 <table width="100%" cellspacing="0" cellpadding="0" border="0">
 
 <!--------------- Currency Exchange Class Start ------------->
	   <c:set var="dollar" value="${fn:toLowerCase(booking.displayCurrencyCode)}"/>  
  <!---------------  Currency Exchange Class End -------------->
 
          
          <tbody><tr>
    <td colspan="3" height="25">&nbsp;</td>
    </tr>
          
          
          <tr>
                <td width="20"></td>
                <td style="font-size:18px; color: #000000; line-height:35px; text-align:left; ">Contact Details </td>
                <td width="20"></td>
              </tr>
  <tr>
    <td width="20">&nbsp;</td>
    <td>
     
     
     
<table style="border-collapse:collapse; border:-0.1em solid #cccccc;" width="100%" cellspacing="0" cellpadding="8" bordercolor="#ccc" border="">
  <tbody><tr style="background:#eeeeee; color:#000000; border-top:2px solid #165780; font-family: 'Roboto', sans-serif; font-size:14px; line-height: 30px; ">
     
    <td width="333">&nbsp; <b>Email</b></td>
    <td width="118">&nbsp; <b>Billing Phone</b></td>
    <td width="151">&nbsp; <b>Mobile</b> </td>
  </tr>
    <tr style="color:#000000;  font-family: 'Roboto', sans-serif; font-size:14px; ">
     
    <td height="35">&nbsp; <c:out value='${booking.contact.email}' /></td>
    <td>&nbsp; <c:out value='${booking.contact.billingPhone}' /></td>
    <td>&nbsp; <c:out value='${booking.contact.mobile}' /> </td>
  </tr>
    
   
    </tbody></table>
    
    </td>
    <td width="5">&nbsp;</td>
  </tr>
</tbody></table>         
          
  
  
  <table style="border-collapse:collapse; " width="100%" cellspacing="0" cellpadding="8" bordercolor="#ccc" border="0">
  
  <tbody><tr>
    <td colspan="3" height="5">&nbsp;</td>
    </tr>
    
  <!-- BRB START -->
    <c:choose>
   <c:when test="${booking.brb =='Yes'}">
   <tr>
  <td width="10">&nbsp;</td>
    <td style="border-top:2px solid #165780;" width="50%"><div style="font-family: 'Roboto', sans-serif;line-height:35px; font-size:22px; color:#165780;">Baggage Protection Fee</div></td>
     
      <fmt:formatNumber var="brbFinalAmount" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.infantWs+booking.infant+booking.child+booking.adult)*booking.brbProductPrice *(booking.currencyConvertion)}" />
                                  
								
    <td style=" border-top:2px solid #165780;" width="50%" align="right"><div style="font-family: 'Roboto', sans-serif; line-height: 22px; font-weight:bold; font-size:26px; color:#4863db;"> <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${brbFinalAmount}' /></div></td>
    <td width="20">&nbsp;</td>
  </tr>
  </c:when>
  </c:choose>
  <!-- BRB END -->
  <c:choose>
    <c:when test="${booking.travelGuard =='Yes'}">
   <tr>
  <td width="20">&nbsp;</td>
  <td colspan="2">
  <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
    <td style="border-bottom:2px solid #165780;  border-top:2px solid #165780;" width="50%"><div style="font-family: 'Roboto', sans-serif;line-height:35px; font-size:22px; color:#165780;">Travel Guard Fee</div></td>
     
      <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.TGuardValue * (booking.currencyConvertion)}" />
                                  
								
    <td style="border-bottom:2px solid #165780;  border-top:2px solid #165780;" width="50%" align="right"><div style="font-family: 'Roboto', sans-serif; line-height: 22px; font-weight:bold; font-size:26px; color:#4863db;"> <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${publishedFare}' /></div></td>
    </tr>
	</table>
	</td>
	<td width="20">&nbsp;</td>
  </tr>
  </c:when>
  </c:choose>
  
   <c:choose>
    <c:when test="${booking.tripMate =='Yes'}">
   <tr>
  <td width="20">&nbsp;</td>
  <td colspan="2">
  <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
    <td style="border-top:2px solid #165780;" width="50%"><div style="font-family: 'Roboto', sans-serif;line-height:35px; font-size:22px; color:#165780;">Travel Protection Fee</div></td>
     
      <fmt:formatNumber var="tripMateFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.tripMateCost * (booking.currencyConvertion)}" />
                                  
								
    <td style=" border-top:2px solid #165780;" width="50%" align="right"><div style="font-family: 'Roboto', sans-serif; line-height: 22px; font-weight:bold; font-size:26px; color:#4863db;"> <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${tripMateFare}' /></div></td>
    </tr>
	</table>
	</td>
	<td width="20">&nbsp;</td>
  </tr>
  </c:when>
  </c:choose>
  
  
  <tr>
  <td width="20">&nbsp;</td>
  <td colspan="2">
  <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
    <td style="border-bottom:2px solid #165780;  border-top:2px solid #165780;" width="50%"><div style="font-family: 'Roboto', sans-serif;line-height:35px; font-size:22px; color:#165780;">Total Cost</div></td>
      <fmt:formatNumber var="GapublishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal}" />
      <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal}" />
     <fmt:formatNumber var="finalpublishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal * (booking.currencyConvertion)}" />
                <fmt:formatNumber var="CjpublishedFare" type="number" groupingUsed="false"  value="${((booking.fare.adultFare*booking.adult)+(booking.fare.childFare*booking.child)+(booking.fare.infantFare*booking.infant)+(booking.fare.infantWsFare*booking.infantWs))/(booking.infantWs+booking.infant+booking.child+booking.adult)}" />
				<fmt:formatNumber var="rkfeesch" type="number"
										minFractionDigits="2" maxFractionDigits="2"
										value="${booking.fare.tax+(booking.fare.markup*(booking.infantWs+booking.infant+booking.child+booking.adult))}" />
										
										
								  <fmt:formatNumber var="RkpublishedFare" type="number" groupingUsed="false"  value="${(booking.fare.adultFare*booking.adult)+(booking.fare.childFare*booking.child)+(booking.fare.infantFare*booking.infant)+(booking.fare.infantWsFare*booking.infantWs)}" />
					 <c:set var="CjQTY" value='${(booking.infantWs+booking.infant+booking.child+booking.adult)}'/>	               
                   
					 <fmt:formatNumber var="unitPrice" type="number" groupingUsed="false"  value="${RkpublishedFare/CjQTY}" />
					
					
								  <fmt:formatNumber var="Coupdiscounts" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.couponsAmt}" />
                                  <fmt:formatNumber var="Cjdiscounts" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.couponsAmt}" />
								   <c:set var="CjCouponCode" value='${booking.couponsCode}'/>
								    <fmt:formatNumber var="travelGuard"  type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.TGuardValue}" />
                            
                                 <fmt:formatNumber var="tripMatefees" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.tripMateCost}" />
                                 <fmt:formatNumber var="tggFees"  type="number" minFractionDigits="2" maxFractionDigits="2" value="${(tripMatefees/(booking.infantWs+booking.infant+booking.child+booking.adult))}" />
								
							
								
    <td style="border-bottom:2px solid #165780;  border-top:2px solid #165780;" width="50%" align="right"><div style="font-family: 'Roboto', sans-serif; line-height: 22px; font-weight:bold; font-size:26px; color:#4863db;"> <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${finalpublishedFare}' />
      <c:if test="${booking.fareRules.size() > 0}">
      <sup>**</sup>
      </c:if>
    </div>
    </td>
    </tr>
	</table>
	<table>
	<tr><td>
                       <c:choose>  
	                    <c:when test='${booking.displayCurrencyCode   == "USD" }'>
					      <div class=" " style="padding: 5px 10px; font-size: 12px;">
	                         <b>Please Note: </b>All Fares displayed are quoted in ${booking.displayCurrencyCode} and inclusive of base fare, taxes and all fees. Additional baggage fees may apply as per the airline policies. 
	                      </div>
					    </c:when> 
			         <c:otherwise>
			              <div class=" " style="padding: 5px 10px; font-size: 12px;">
	                         <b>Please Note: </b> All Fares displayed are quoted in ${booking.displayCurrencyCode} and inclusive of base fare, taxes and all fees. Additional baggage fees may apply as per the airline policies. 
	                      </div>
                            <div class="pricetotal" style="border:1px solid #dbd4a7">
                                <div class="col-xs-6">
                                    <b>Total charge equivalent in USD:</b>
                                </div>
                                <div class="col-xs-6 text-right" id="publishedFare">
                                     <b>
	                                     <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal}" />
	                                     <h4 class="no-margin"><i class="fa fa-dollar"/></i><c:out value='${publishedFare}'/></h4>
                                    </b>
                                 </div>
                              </div> 
                        <div style=" color:#056b2e; padding:5px 10px; margin-bottom:-10px; font-size:12px;">
	                        <fmt:formatNumber var="publishedFaress" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal * booking.currencyConvertion}" />
	                       <%--  <b>Please Note:</b> Your Credit Card will be charged in USD for a total amount of <i class="fa fa-dollar"/></i><c:out value='${publishedFare}'/>, the ${booking.displayCurrencyCode} amount of <i class="fa fa-<c:out value="${dollar}"/>"></i> <c:out value='${publishedFaress}'/> is an approx. amount based on today's conv. rate of 1 USD = ${booking.currencyConvertion} ${booking.displayCurrencyCode}. Your bank may have a different conv. rate and currency conv. fee which we do not have control. --%> 
                           <b>Please Note:</b> Your Credit/Debit Cards will be charged in USD for a total amount of <i class="fa fa-dollar"/></i><c:out value='${publishedFare}'/>, The <i class="fa fa-<c:out value="${dollar}"/>"></i> <c:out value='${publishedFaress}'/>  ${booking.displayCurrencyCode} is an approx. of your total USD amount based on today's conversion rate of 1 USD  = ${booking.currencyConvertion}  ${booking.displayCurrencyCode}. Your bank may apply a different conversion .
                        
                        </div>
			       </c:otherwise>
			     </c:choose>       
			     
	  </td></tr>
	</table>
	</td>
	<td width="20">&nbsp;</td>
  </tr>
  
   
    
    </tbody></table>        
          
		 
    
    </td>
    <td width="20">&nbsp;</td>
  </tr>  
  
		 <tr> <td height="20"></td> </tr>
         
         
         <tr>
          <td>
          
          <table width="100%">
          <tr>
                <td width="20"></td>
                <td>
				
				<table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                    <tbody><tr>
                      <td > 
						<table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
						
						<tr>
						   <c:choose>
						     <c:when test="${booking.tripMate =='Yes'}">
							<td>Thank you for purchasing the Travel Protection Plan, to view your plan documents <a href="https://www.tripmate.com/wpF540A">Click here</a></td>
							</c:when>
							</c:choose>
							<td style="font-size: 13px; text-align: right; color: rgba(0, 0, 0, 0.5);"><!-- *All fares are quoted in USD. --></td>
							
						</tr>
						
						</table>
						
					 </td>
                    </tr>
                    <tr>
                      <td height="10"></td>
                    </tr>
                    <tr>
                      <td style="background:#ebebeb; height:1px; font-size:0px;" height="1"></td>
                    </tr> 
                    <tr>
                      <td height="25"></td>
                    </tr>
                  </tbody></table>
				  </td>
                <td width="20"></td>
              </tr>
          </table>
          
          </td>
         </tr>
        
        
      
         <c:if test="${booking.fareRules.size() > 0}">
   
    <tr>
          <td>      
        
 <table width="100%" cellspacing="0" cellpadding="0" border="0">
          
          <tbody>
   <tr>
    <td width="20">&nbsp;</td>
    <td>
     
     
     
<table style="border-collapse:collapse; border:-0.1em solid #cccccc;" width="100%" cellspacing="0" cellpadding="8" bordercolor="#ccc" border="">
  <tbody>
<c:forEach items="${booking.fareRules}" var="rule" varStatus="vs">
							 		
							 		 <tr style="color:#000000; text-align:center; font-family: 'Roboto', sans-serif; font-size:12px;">
    <td>&nbsp; **<c:out value="${rule}"></c:out><br/>
		</td></tr>
							 	</c:forEach>
   
	
    
   
    </tbody></table>
    </td>
    <td width="5">&nbsp;</td>
  </tr>
</tbody></table>    
        
       </td>
       </tr> 
        </c:if>
   

        
        
        
        
          
        <tr>
          <td style="background:#fff;">
		  <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" >
              <tr>
                <td><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" >
                    <tr>
                      <td align="center" ><table width="60%" border="0" align="center" cellpadding="0" cellspacing="0">
                          <tr>
                            <td height="1" style="background:#dedfdf; height:1px; font-size:0px;"></td>
                          </tr>
                        </table></td>
                    </tr>
                    <tr>
                      <td height="22"></td>
                    </tr>
                    <tr>
                      <td style="font-size:16px; color: #969696; text-align:left;"><p style="font-family: 'Roboto', sans-serif; margin:0px; padding: 0px; line-height:18px;"><b>Booking Number: -</b> If you have questions about your reservation, please use our Customer Assistance Form and we will respond at the earliest.<br />
<br />
<b>For immediate assistance please call: -</b> For making changes to your ticketed reservation Call Us at our toll free number: <c:out value='${data.tfnNo}' /> 
</p></td>
                    </tr>
                    <tr>
                      <td height="25"></td>
                    </tr>
                    <tr>
                      <td align="center" ><table width="60%" border="0" align="center" cellpadding="0" cellspacing="0">
                          <tr>
                            <td height="1" style="background:#dedfdf; height:1px; font-size:0px;"></td>
                          </tr>
                        </table></td>
                    </tr>
                    <tr>
                      <td height="22"></td>
                    </tr>
                    <tr>
                      <td align="center">
					  
					 <table width="50%" border="0" align="left" cellpadding="0" cellspacing="0" class="responsivewidth-mobile" >
					 	
						<tr>
							 <td align="center" >
							

							<h4 style="font-size:14px; color: #6f6f6f; text-transform:uppercase; margin-bottom:10px; font-weight:600;   padding: 0px; letter-spacing:1px;"><a href="${data.siteUrl}privacy-policy">Privacy Policy</a></h4>
							
							<p style="font-size:12px; color: #969696;">We are dedicated towards protecting your privacy. See our privacy policy for details.</p>
							
							</td>
							
						</tr>
						
					 </table>
					  
					 
					 <table width="50%" border="0" align="left" cellpadding="0" cellspacing="0" class="responsivewidth-mobile" >
					 	
						<tr>
							 <td align="center" >
							
						
							<h4 style="font-size:14px; color: #6f6f6f; text-transform:uppercase; font-weight:600;  margin-bottom:10px; padding: 0px; letter-spacing:1px;"><a href="${data.siteUrl}support">Support</a></h4>
							
							<p style="font-size:12px; color: #969696;">Contact our customer support
                                team by phone & email
                                24x7.</p>
							
							</td>
							
						</tr>
						
					 </table>
					 
					  
					  </td>
                    </tr>
                    <tr>
                      <td height="22"></td>
                    </tr>
                    <tr>
                      <td style="font-size:13px; color:#f07f22; text-align: center;">3100 E 45th Street #310 Cleveland OH 44127</td>
                    </tr>
                    <tr>
                      <td height="22"></td>
                    </tr>
                    <tr>
                      <td style="font-size:12px; color:#8a8a8a; text-align: center;">
                      	<img width="22" src="/resources/images/mailer/e-mail.jpg" alt=""  />
                      </td>
                    </tr>
                    <tr>
                      <td height="10"></td>
                    </tr>
                    <tr>
                     
                      <td style="font-size:12px; color:#8a8a8a; text-align: center;">
                      	If you have any questions, please mail us at <a href="mailto:${data.supportMail}" style="text-decoration:underline;">${data.supportMail}</a>
                      </td>
                    </tr>
                    <tr>
                      <td height="22"></td>
                    </tr>
                  </table></td>
                <td width="20"></td>
              </tr>
            </table></td>
         
		</tr>
		
      </table>
			
        <div style="height:20px;"></div>
		</div>

	</td>
	<td width="20">&nbsp;</td>
     </tr>
</table>
</td>
</tr>
</table>
	 
	 </table>

<!--Modification ends-->


</div>
 <!---------------Right Side Bar-------------->

          <div class="col-md-3 hidden-xs hidden-sm">
		  
		  <div style="margin-bottom:15px;">
		  
		  <a href="tel:<c:out value='${data.tfnNo}' /> "><img src="/resources/flight-result/images/hotel-booking.jpg" class="img-responsive" alt="hotel-booking"></a>
		  </div>
			
            <div class="resultsBox">

                <h4 class="sub_header">Book with Confidence</h4>

                <div class="content">

                    <ul id="check-icon">
                        <li>Best Purchase Guarantee!</li>
                        <li>All Discounts Updated Daily</li>
                        <li>24*7 Customer Service</li>
                        <li>Protected & Safe Booking</li>
                    </ul>


                </div>



            </div>
			
            <div class="resultsBox">

                <h4 class="sub_header"><img src="/resources/images/lock-icon.png" width="12" style="verticle-align:middle;"> Secure SSL Booking</h4>

                <div class="content">

                    <ul class="sidebar_SecureLoog">
 
							<li><img src="/resources/travelopick/images/arc.png" alt="ARC"></li> 
						<li><img src="/resources/travelopick/images/moneris.png" alt="Moneris Solutions"></li>
                        <li class="hidden-sm"><img src="/resources/travelopick/images/verified.jpg" alt="Verified by Godaddy"></li>
                        <li class="hidden-sm"><img src="/resources/travelopick/images/we-accept.jpg" alt="We Accept"></li>
                        <li><img src="/resources/travelopick/images/trust-pilot.png" alt="TrustPilot"></li>
						

                    </ul>

                </div>



            </div>
			

</div>


</div>

</div>


 </c:forEach>
 
<!--Main-->
<div style="height:30px;"></div>

<div class="container">
<div class="top-content">
<div class="row">
<div class="col-sm-12 col-md-9">
 <div class="go-back2">
 
	<a class="btn btn-primary" onclick='javascript:window.print()'><i class="fa fa-print" aria-hidden="true"></i> Print</a>
	 
 
<a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
 <i class="fa fa-envelope-o" aria-hidden="true"></i> Email
</a> 


<div class="collapse" id="collapseExample">
<div style="height:20px;"></div>
   <form class="form-inline"> 
  <div class="form-group">
    <label for="exampleInputEmail2">Email:</label>
    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
  </div>
  <input type="button" id="sendEmailID" class="btn btn-warning" value="Send"/>
  <div style="color:red; display: none;" id="sendEmailError"></div>
</form>
</div>

  
 </div> 
 
</div>
<div class="col-sm-12 col-md-3">

 </div>
</div>
</div>

<form:form method="POST" action="/booked" id="booking" modelAttribute="bookingWrapper" novalidate="novalidate">
<!-- Baggage Protection Start -->
<c:forEach items="${bookingWrapperList}" var="booking"  >
				
				<c:if test="${booking.pnr !='X'}">
				<c:if test="${booking.brb =='No'}">
				<c:if test="${booking.brbGetResponse.lstBrbProduct.size() > 0}">
				
				<form:hidden path="brbProductCode"/>
				<form:hidden path="brbProductPrice"/> 
			<div class="resultsBox">
					<h4 class="sub_header">Baggage Protection</h4>
					  <div class="content">
                        <img src="/resources/images/baggage-protection-icon.png" height="65" class="macp-logo" >
                        <div><b>A Comprehensive Overview</b></div>
							
							<p>Please note that this service is provided on ${data.siteName} by Blue Ribbon Bags.  </p>
							<ul type="square">
							
							<li>Once added to your booking, Blue Ribbon Bags (BRB) will track your delayed baggage and speed up its return within 96 hours 4 days of your flight arrival) of it being lost. </li>
			   <li>Each purchase of BRB is per person, per round trip regardless of the number of connections on-route your flight. </li>
			   <li>The plan is categorized into three categories under which Blue Ribbon Bags will pay you:</li>
			   
                            </ul>
							
		<!--------------- Currency Exchange Class Start -------------->
			<c:set var="dollar" value="${fn:toLowerCase(booking.displayCurrencyCode)}"/> 
		<!---------------  Currency Exchange Class End -------------->
						
							<div class="row">
							
							<div class="col-sm-12">
							
								
								<div class="baggage-holder">
									
									<c:forEach items="${booking.brbGetResponse.lstBrbProduct}" var="baggage" varStatus="bg">	
									<div class="baggage-policy" onclick="brbSetValue('${baggage.productCode}',${baggage.productPrice});macpSet('BRB','Y','Y');">
									
									<div class="price-detail inputSet">
									
									
		
									<label>
									
										<form:radiobutton path="brb" id="${baggage.productCode}" value="Yes" />
									<fmt:formatNumber var="formattedbaggage" type="number" minFractionDigits="2" maxFractionDigits="2" value="${baggage.productPrice * (booking.currencyConvertion)}" />
										<span><i class="fa fa-<c:out value="${dollar}"/>"></i>${formattedbaggage}</span>
										
									</label>
									
									<small>per passenger</small>
									
									</div>
									
									<div class="detail">
									
									<div class="head">${baggage.productCode}  </div>
									
									<p>Pays you 
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
									
									per bag. </p>
									
									
									
									</div>
									
									
									
									</div>
									</c:forEach> 	
									
									
								
								</div>
								
							
							</div>							
							
							</div>
						
						 <p> Please click here to <a href="/baggage-protection" target="_blank">View the discription of baggage policy</a></p>

							<%-- <div class="deselect-plan inputSet" onclick="brbSetValue('XXXBRB',0.0);macpSet('BRB','N','N');">
                              <label>  <form:radiobutton path="brb" id="XXXBRB" value="No" /> <span><b>NO,</b> I decline the option to purchase Baggage Protection.</span></label>

                            </div> --%>

                        <p><i>NOTE:</i> This service is  applicable for this flight booking only. If you require any changes, you must  report to <a href="mailto:info@blueribbonbags.com">info@blueribbonbags.com</a> prior to your scheduled departure. Please mention your Service  Agreement Number in the subject line and it may require additional purchases. </p> 
							  <p> Once clicked on 'Add Baggage Protection', I agree to the <a href="/brb/description" target="_blank">Terms and Conditions</a></p>
							   
				  <p  id="brbError" style="margin: 0px 0px 0px 20px;"> Please Choose your Baggage Protection Program </p> 
					 </div>
                    </div>
                <div class="col-xs-12">

                    <div class="col-sm-4"></div>

                    <div class="col-sm-4 text-center">
                        <div class="buton button-width">
                          
                            <button id="btnSearchFlights" class="purchase-btn btn-lg" type="button" onclick="submitForm('${booking.userSessionID}');">Purchase Now</button>
                        </div>
                    </div> 
					
					
                </div>


                <div class="col-xs-12 text-secure"> <img src="/resources/images/lock-icons2.jpg"> Your payment details are secured via 128 Bit encryption by GoDaddy </div>

                    
                    
                    
                    
				</c:if></c:if></c:if></c:forEach></form:form>
				<!-- Baggage Protection End -->
				
				
				
				
				
				
				
</div>
<!--Footer Start-->
<jsp:include page="confirm_footer.jsp"></jsp:include>
<!--Footer Closed-->

<script src="/resources/flight-result/js/jquery-1.8.2.min.js"></script>
<script src="/resources/flight-result/js/modernizr.min.js"></script>
<script src="/resources/flight-result/js/respond.min.js"></script>
<script src="/resources/flight-result/js/prefixfree.min.js"></script>
<script src="/resources/flight-result/js/bootstrap.min.js"></script>
<script src="/resources/flight-result/js/jquery-ui.1.10.4.min.js"></script>
<script type="text/javascript" src="/resources/flight-result/js/confirmation.js"></script>
<script src="/resources/js/theme-scripts.js"></script>
<script src="/resources/flight-result/js/jquery.validate.min.js"></script>
<script src="/resources/flight-result/js/angular-animate/angular-animate.js"></script>
<script src="/resources/flight-result/js/angular-busy.js"></script>

    <!-- Google Code for Conversion Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 928632334;
var google_conversion_language = "en";
var google_conversion_format = "3";
var google_conversion_color = "ffffff";
var google_conversion_label = "sgKZCKz37WMQjpznugM";
var google_remarketing_only = false;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/928632334/?label=sgKZCKz37WMQjpznugM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>



<!-- Google Code for Remarketing Conversion Page -->
<script type="text/javascript">
		 
ga('require', 'ecommerce');
ga('ecommerce:addTransaction', {
  'id': '<c:out value="${cjPnr}"/>',                     // Transaction ID. Required.
  'affiliation': 'Flight',   // Affiliation or store name.
  'revenue': '<c:out value="${GapublishedFare}"/>',               // Grand Total.
  'shipping': '0',                  // Shipping.
  'tax': '<c:out value="${rkfeesch}"/>'                     // Tax.
});

ga('ecommerce:addItem', {
  'id': '<c:out value="${cjPnr}"/>',                     // Transaction ID. Required.
  'name': '<c:out value="${froCityg}"/> - <c:out value="${toCityg}"/>',    // Product name. Required.
  'sku': '<c:out value="${airlineg}"/>',                 // SKU/code.
  'category': 'Flight',         // Category or variation.
  'price': '<c:out value="${unitPrice}"/>',                 // Unit price.
  'quantity': '<c:out value="${CjQTY}"/>'                   // Quantity.
});
ga('ecommerce:send');
</script>

<script type="text/javascript" language="Javascript">


 var cjData = localStorage.getCacheItem("lufcjdata"); 
        localStorage.removeItem("lufcjdata");   
   
       if(cjData != null){
    localStorage.clear();
   var QTY = '<c:out value="${CjQTY}"/>';
var AMT = '<c:out value="${CjpublishedFare}"/>';
  var discount = '<c:out value="${Cjdiscounts}"/>';
    var cjPnr = '<c:out value="${cjPnr}"/>';
    
     var CjCouponCode = '<c:out value="${CjCouponCode}"/>';
   if(cjPnr != 'X'){    
var url ='https://www.emjcd.com/u?containerTagId=15468&CID=1538584&TYPE=389528&CURRENCY=USD';
url += '&OID=' +cjPnr;
var items='AIR';
 if(discount != 0.0){    
url += '&COUPON=' + CjCouponCode;
}
 

AMT=AMT.replace(/,/g , "");
url += '&ITEM1='+ 'AIR';
url += '&AMT1=' + AMT;
url += '&QTY1=' + QTY;

var cjtgpString= '<c:out value="${tmString}"/>';
if(cjtgpString == 'Yes'){
 var TGAMT = '<c:out value="${tggFees}"/>';
 url += '&ITEM2='+ 'AIRINSURANCE';
url += '&AMT2=' + TGAMT;
url += '&QTY2=' + QTY;
}
url += '&METHOD=IMG';


document.write('<img height="1" width="20" border="0"  src="' + url +
'" />');

 }
   }
</script> 


<script type="text/javascript" language="Javascript">


 var saData = localStorage.getCacheItem("lufSAdata"); 
        localStorage.removeItem("lufSAdata");   
   
       if(saData != null){
    localStorage.clear();
   var QTY = '<c:out value="${CjQTY}"/>';
var AMT = '<c:out value="${CjpublishedFare}"/>';
  var discount = '<c:out value="${Cjdiscounts}"/>';
    var cjPnr = '<c:out value="${cjPnr}"/>';
    
     var CjCouponCode = '<c:out value="${CjCouponCode}"/>';
   if(cjPnr != 'X'){    
var url ='https://shareasale.com/sale.cfm?';
AMT=AMT.replace(/,/g , "");
url += 'amount=' + AMT;
url += '&tracking=' +cjPnr;
url += '&transtype=sale&merchantID=71605';
/* var items='AIR';
 if(discount != 0.0){    
url += '&COUPON=' + CjCouponCode;
}
 


url += '&ITEM1='+ 'AIR';
url += '&AMT1=' + AMT;
url += '&QTY1=' + QTY;

var cjtgpString= '<c:out value="${tmString}"/>';
if(cjtgpString == 'Yes'){
 var TGAMT = '<c:out value="${tggFees}"/>';
 url += '&ITEM2='+ 'AIRINSURANCE';
url += '&AMT2=' + TGAMT;
url += '&QTY2=' + QTY;
}
url += '&METHOD=IMG'; */

document.write('<img height="1" width="1"  src="' + url +
'" />');

 }
   }
</script> 


<script type="application/javascript">(function(w,d,t,r,u){w[u]=w[u]||[];w[u].push({'projectId':'10000','properties':{'pixelId':'10009940'}});var s=d.createElement(t);s.src=r;s.async=true;s.onload=s.onreadystatechange=function(){var y,rs=this.readyState,c=w[u];if(rs&&rs!="complete"&&rs!="loaded"){return}try{y=YAHOO.ywa.I13N.fireBeacon;w[u]=[];w[u].push=function(p){y([p])};y(c)}catch(e){}};var scr=d.getElementsByTagName(t)[0],par=scr.parentNode;par.insertBefore(s,scr)})(window,document,"script","https://s.yimg.com/wi/ytc.js","dotq");</script>

<script type="text/javascript" language="Javascript">

var Clickdeadata = localStorage.getCacheItem("lufcddata");
    if (Clickdeadata != null) {
       localStorage.clear();
    }
    

 var lufUtmdata = localStorage.getCacheItem("lufUtmdata");
         
    if (lufUtmdata != null) {
       localStorage.clear();
        $("#affRef").val(lufUtmdata.utm_medium);
        $("#affAid").val(lufUtmdata.utm_source);
        $("#affPid").val(lufUtmdata.utm_campaign);
        $("#affentryTime").val(lufUtmdata.land);
    }
    
 var rkData = localStorage.getCacheItem("lufrkdata"); 
  localStorage.removeItem("lufrkdata");   
       if(rkData != null){
       localStorage.clear();
      
       var QTY = '<c:out value="${CjQTY}"/>';
    var AMT = '<c:out value="${RkpublishedFare}"/>';
     var discount = '<c:out value="${Cjdiscounts}"/>';
     var CjCouponCode = '<c:out value="${CjCouponCode}"/>';
    AMT = AMT*100;
    var cjtgpString= '<c:out value="${tmString}"/>';
   //   var discount = '<c:out value="${Cjdiscounts}"/>';
         var cjPnr = '<c:out value="${cjPnr}"/>';
   if(cjPnr != 'X'){    
 
var url ='http://track.linksynergy.com/ep?mid=42135&cur=USD';
url += '&ord=' +cjPnr;
var items='AIR';
var siteID = rkData.siteID; 

url += '&img=1';


if(cjtgpString == 'Yes'){
 var TGAMT = '<c:out value="${tggFees}"/>';
  TGAMT = TGAMT*100;
url += '&namelist='+ items+'|AIRINSURANCE';
url += '&amtlist=' + AMT+'|'+TGAMT;
url += '&qlist=' + QTY+'|'+ QTY;
url += '&skulist='+ items+'|AIRINSURANCE';
}else{
url += '&namelist='+ items;
url += '&amtlist=' + AMT;
url += '&qlist=' + QTY;
url += '&skulist='+ items;
}
 if(discount != 0.0){    
url += '&COUPON=' + CjCouponCode;
}

document.write('<img height="1" width="1" border="0" name="rk_conversion" src="' + url +
'" />');
   }
   }
   
   
       var gwdata = localStorage.getCacheItem("lufgwdata");

    if (gwdata != null) {  
		
         localStorage.clear();
           var cjPnr = '<c:out value="${cjPnr}"/>';
           if(cjPnr != 'X'){  
        $("#affRef").val(gwdata.ref);
        $("#affAid").val(gwdata.AID);
        $("#affentryTime").val(gwdata.land);
	    $("#affSid").val(gwdata.CID);
		
		  var QTY = '<c:out value="${CjQTY}"/>';
          var AMT = '<c:out value="${RkpublishedFare}"/>';
	    
		var currentLocation = window.location;
        arr = currentLocation.toString().split('/');
        var str = arr[arr.length-1];
       
	    document.write("<scr"+"ipt src='https://a.qwepw.com/p.ashx?o=45116&e=5342&f=pb&r="+str+"&t="+cjPnr+"'></scr"+"ipt>"); 
		/*document.write("<scr"+"ipt src='https://a.epqog.com/p.ashx?o=44206&e=5342&f=js&p="+AMT+"&t="+cjPnr+"'></scr"+"ipt>"); 
		*/
		}
      }
	  
   
   
  
   
   
   
   
   
   
 var lufaddata = localStorage.getCacheItem("lufaddata"); 
  localStorage.removeItem("lufaddata");   
       if(lufaddata != null){
       localStorage.clear();
       var AID = lufaddata.AID; 
	  
		
		
       var QTY = '<c:out value="${CjQTY}"/>';
    var AMT = '<c:out value="${RkpublishedFare}"/>';
         var cjPnr = '<c:out value="${cjPnr}"/>';
     if(cjPnr != 'X'){  

 
var url ='//ad.admitad.com/r?campaign_code=541240145f&action_code=1&payment_type=sale&response_type=img';


url += '&uid='+AID;
url += '&tariff_code=1';

url += '&order_id=' +cjPnr;
url += '&position_id=1&currency_code=USD&position_count=1';
url += '&price=' +AMT;
url += '&quantity=1&product_id=""';

document.write('<img src="' + url +'" width="1" height="1" alt="" />');

   }
   }
   
   
   
   var lufKwdata = localStorage.getCacheItem("lufKwdata"); 
  localStorage.removeItem("lufKwdata");   
       if(lufKwdata != null){
       localStorage.clear();
     var PID = lufKwdata.PID; 
	  
		
		
       var QTY = '<c:out value="${CjQTY}"/>';
    var AMT = '<c:out value="${RkpublishedFare}"/>';
         var cjPnr = '<c:out value="${cjPnr}"/>';
   if(cjPnr != 'X'){    

 
var url ='https://action.metaffiliation.com/trk.php?mclic=G4DD511011';
url += '&argmon=' +AMT;
url += '&argann=' +cjPnr;
url += '&argmodp=creditcard';
url += '&nacur=USD';
/* url += '&altid=support@travelopick.com&cart=flight_ticket'; */
url += '&altid=${data.supportMail}&cart=flight_ticket';



document.write('<img src="' + url +'" width="1" height="1" border="0"  />');

   }
   }
   
   

   
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
</script>



<script>(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"5666394"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");</script><noscript><img src="//bat.bing.com/action/0?ti=5666394&Ver=2" height="0" width="0" style="display:none; visibility: hidden;" /></noscript>


  <%
String lookfromCity="";
String looktoCity="";
String lookdepDate="";
String lookretDate="";

int lookadult=1;
int lookchild=0;
int lookinfant=0;
int lookinfantws=0;
String lookcabin="";
String looktrip="2";
%>
    <!-- Right container start here-->
    
  
    <!--Modify Search Start-->
     <c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
          <c:set var="myfromCity" value="${search.originAirport.cityCode}"/>
          <c:set var="mytoCity" value="${search.destinationAirport.cityCode}"/>
          <c:set var="depart" value="${fn:split(search.travelDate,'T')}"/>
          
          
            <c:set var="myAdult" value="${search.adults}"/>
              <c:set var="myChild" value="${search.children}"/>
                <c:set var="myInfant" value="${search.infants}"/>
                  <c:set var="myInfantWs" value="${search.infantWs}"/>
                    <c:set var="myCabin" value="${search.cabinType}"/>
                      <c:set var="myTrip" value="${search.tripType}"/>
                        
										<fmt:parseDate value="${depart[0]}" var="dateObject" pattern="yyyy-MM-dd" />
										<fmt:formatDate pattern="yyyy-MM-dd" value="${dateObject}" var="dateObject2"/>
										
										 <c:choose>
                                           <c:when test="${search.tripType=='2'}">
                                             <c:set var="returns" value="${fn:split(search.returnDate,'T')}"/>
                                             
										<fmt:parseDate value="${returns[0]}" var="rdateObject" pattern="yyyy-MM-dd" />
										<fmt:formatDate pattern="yyyy-MM-dd" value="${rdateObject}" var="rdateObject2"/>
										
										<%lookretDate=(String)pageContext.getAttribute("rdateObject2").toString(); %>
										</c:when></c:choose>
										
										
										   <% lookfromCity=(String)pageContext.getAttribute("myfromCity");
                                              looktoCity=(String)pageContext.getAttribute("mytoCity");
                                              lookdepDate=(String)pageContext.getAttribute("dateObject2").toString();
                                              lookadult=(Integer)pageContext.getAttribute("myAdult");
											  lookchild=(Integer)pageContext.getAttribute("myChild");
											  lookinfant=(Integer)pageContext.getAttribute("myInfant");
											  lookinfantws=(Integer)pageContext.getAttribute("myInfantWs");
											  lookcabin=(String)pageContext.getAttribute("myCabin");
											  looktrip=(String)pageContext.getAttribute("myTrip");


                                           %>
                                    </c:forEach>

  <%
    if (session.getAttribute("utm_source") == null) {
       
    } else {
    String utmSou=(String)session.getAttribute("utm_source");
    
   
%>


<%    
     if(utmSou.equalsIgnoreCase("IntentMedia")) {
  
  %>
  <script type="text/javascript">
  currentLocation = window.location;
//alert("full value : "+currentLocation);
arr = currentLocation.toString().split('/');
strFile = arr[arr.length-1];
/* Data collection tag for Intent Media */
window.IntentMediaProperties = {
/* Sample values are provided in this section. */
/* IMPORTANT: replace these with dynamic values. */
page_id: strFile,      /* Unique page identifier for each page on your site. Any nomenclature is fine. */
product_category: 'FLIGHTS',    /* Must be one of: 'HOME', 'FLIGHTS', 'CARS', 'HOTELS', 'PACKAGE', 'EMAIL' */
page_view_type: 'CONVERSION',         /* Must be one of: 'HOME', 'LIST', 'DETAILS', 'CART', 'EMAIL', 'EMAIL_CONFIRMATION', 'CONVERSION' */
user_member_id: '',        /* Non PII Unique id to identify site members if logged in or previously logged in. Leave blank if not logged in.*/
/* If conversion page, add the following dynamic values (required, along with page_view_type above with value CONVERSION) */
order_id: '<c:out  value="${cjPnr}"/>',              /* Unique order_id in transaction system to allow for de-duplications */
conversion_value: '<c:out value="${GapublishedFare}"/>',     /* Conversion value. Be sure to omit currency symbols like $ (if absolutely unavailable, use a value of '1' for all purchases). */
conversion_currency: 'USD',     /* Standard 3-letter currency code.  IMPORTANT: If you are not supplying a conversion_value, set the conversion_currency to USD. */
/* Do not modify below here */
entity_id: '240491'             /* Set by Intent Media */
};
(function() {
var script = document.createElement("script");
var prefix = document.location.protocol === 'https:' ? 'https://a' : 'http://a.cdn';
var url = prefix + '.intentmedia.net/javascripts/intent_media_data.js';
script.src = url;
document.getElementsByTagName("head")[0].appendChild(script);
}());
</script>
  
  <%  }
    
    } %>
    




</body>
</html>