 <%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!--Listing Counter Banner Start-->
<div class="list-count hide hidden-lg">
	<div class="list-count-banner">
		<div class="close-btn">X</div>
		
		<div class="top-head">SAVE BIG! on Unpublished Deals</div>
		
		<div class="row">
			<div class="col-xs-7 col-sm-8">
				<div class="special-textt">	
					Special fare to
					<b>${searchListWrapper[0].destinationAirport.cityName}</b>
					<div class="offer2"><span>Limited time Offer!</span> Ends
					<span class="count-time Timer"> </span>
					</div>
				</div>
			</div> 	
			<div class="col-xs-5 col-sm-4 text-center pl0 ">
				 <span class="gray">Starting From </span> <span class="s-fare"><small>$</small><b>{{secretDealsPrice}}</b><sup>*</sup></span><br />
				 <b>Price Per Adult incl. Taxes</b>
			</div>
		</div>
		
		<div class="spacr"></div>
		
		<div align="center">
		
		    <c:choose>
		      <c:when test="${fn:toLowerCase(utm_source) == 'bing' || fn:toLowerCase(utm_source) == 'bingmobile' }">
		          <div class="call-button"><a href="tel:1-800-560-1674"><i class="fa fa-phone"></i>  <span style="font-size:16px">Call Now</span> <br /> 1-800-560-1674</a></div>
		      </c:when>
		      <c:when test="${fn:toLowerCase(utm_source) == 'google'}">
                  <div class="call-button"><a href="tel:1-888-813-1317"><i class="fa fa-phone"></i>  <span style="font-size:16px">Call Now</span> <br /> 1-888-813-1317</a></div>
              </c:when>
		      <c:otherwise>
		          <div class="call-button"><a href="tel:1-888-737-8675"><i class="fa fa-phone"></i>  <span style="font-size:16px">Call Now</span> <br /> 1-888-737-8675</a></div>
		      </c:otherwise>
		    </c:choose>
			<!-- <div class="call-button"><a href="tel:1-800-560-1674"><i class="fa fa-phone"></i>  <span style="font-size:16px">Call Now</span> <br /> 1-800-560-1674</a></div> -->
			
			<div class="green">Call Waiting time: Nearly Zero minutes</div>
		</div>
		
		<hr />
		<div class="trips-type">		
			<ul>
				<c:if test="${searchListWrapper[0].tripType=='2'}">
				<li>Round Trip, </li>
				</c:if>
				<c:if test="${searchListWrapper[0].tripType=='1'}">
				<li>One Way, </li>
				</c:if>
				<li>${searchListWrapper[0].adults} Adult, </li>
				<li>${searchListWrapper[0].cabinType} Class</li>
				<div class="clearfix"></div>
			</ul>			
		</div>
		
		<div class="row airport-blc">
		<div class="col-xs-4 pr0"> 
			<span class="head">${searchListWrapper[0].originAirport.airportCode}</span>
			<span><b>${searchListWrapper[0].originAirport.cityName}</b><br />
			   ${searchListWrapper[0].originAirport.country}
			   </span>
		</div>
		<div class="col-xs-2">
		<b class="trip-tpe-errow">
		<c:if test="${searchListWrapper[0].tripType=='2'}">
			<i class="fa fa-exchange" aria-hidden="true"></i> 
			</c:if>
			<c:if test="${searchListWrapper[0].tripType=='1'}">
			<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
			</c:if>
			</b>
		</div>
		<div class="col-xs-4 pr0">
			<span class="head">${searchListWrapper[0].destinationAirport.airportCode}</span>
			<span><b>${searchListWrapper[0].destinationAirport.cityName}</b><br />
			   ${searchListWrapper[0].destinationAirport.country}</span>
		</div>
		</div>
		
		
		<div class="spacr2"></div>
		
		<div class="row airport-blc">
		 
		<div class="col-xs-6  pr0">  
			 <div class="label-head"> <i class="fa fa-calendar-o" aria-hidden="true"></i> DEPART</div>
			<fmt:parseDate value="${ctravelDate}" var="dateObject" pattern="MM-dd-yyyy" />
			<fmt:parseDate value="${creturnDate}" var="dateObjectRet" pattern="MM-dd-yyyy" />
			 
			<span class="head"><fmt:formatDate value="${dateObject}" pattern="dd" /></span>
			<span>
			<b><fmt:formatDate value="${dateObject}" pattern="MMM YYYY" /></b><br />
			   <fmt:formatDate value="${dateObject}" pattern="EEEE" /> </span>
		</div> 
		<c:if test="${searchListWrapper[0].tripType=='2'}">
		<div class="col-xs-6 pr0"> 
		 
		<div class="label-head"><i class="fa fa-calendar-o" aria-hidden="true"></i> RETURN</div>
			<span class="head"><fmt:formatDate value="${dateObjectRet}" pattern="dd" /></span>
			<span>
			<b><fmt:formatDate value="${dateObjectRet}" pattern="MMM YYYY" /></b><br />
			   <fmt:formatDate value="${dateObjectRet}" pattern="EEEE" /> </span>
		</div>
		</c:if>
		</div>
		
		
		<div class="spacr"></div>
		<div align="center"> 
			  
						 
			<div style="color: #777;margin-top: 5px;">* Fares are subject to seat availability and not guaranteed until ticketed.</div>
		</div>
		
		<div class="spacr2"></div>
		
		
	</div>
	<div class="midum-overlay"></div>
</div>


<div class="count-top-icon pointer hide"> 
	<div class="strip-content"><i class="fa fa-bell-o" aria-hidden="true"></i> <span class="Timer"></span> (<small>$</small>{{secretDealsPrice}})</div>
</div>


<!--Listing Counter Banner End-->