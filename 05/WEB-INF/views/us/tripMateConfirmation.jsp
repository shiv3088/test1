<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
  <div class="resultsBox" >
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
 
                    <h4 class="sub_header"><i class="fa fa-travel-protection"></i> Travel Protection Plan <span class="hidden-sm hidden-xs">(Recommended)</span></h4>
				
					
						<span class="tripprice hidden-md-image">
					<c:forEach items="${bookingWrapper.insurancePricing}" var="insurancePricing" varStatus="tripM">
					 <fmt:formatNumber var="adultTripMate" type="number" minFractionDigits="2" maxFractionDigits="2" value="${insurancePricing.displayCost * curRsponse}" />
                                 
					<small>
					<c:if test="${insurancePricing.passengerType eq 'Adult'}">
					<span class="male"></span>Adult</c:if><c:if test="${insurancePricing.passengerType eq 'Child'}">
					<span class="child"></span>Child</c:if><c:if test="${insurancePricing.passengerType eq 'Infant'}">
					<span class="infront"></span>Infant</c:if><c:if test="${insurancePricing.passengerType eq 'InfantWs'}">
					<span class="infront"></span>InfantWS</c:if>: 
					<i class="fa fa-<c:out value="${dollar}"/>" ></i><c:out value='${adultTripMate}' /></small> 
					
					</c:forEach>
					<em>Per Pax</em>
					</span>
					
			
					
				
					<a href="javascript:void(0);" class="showbtn hide-btn" style="display:none;">Show <i class="fa fa-angle-down"></i></a>
                    <div class="content paymentcontent tripmate_insurance">
						
									
						<div class="col-md-8 col-sm-12 col-xs-12">
						
						<h4>Why do you need Travel Protection? The answer is simple</h4>
												
                        <ul class="content-list">
                            <li>If you get too sick to travel, remember your ticket is non-refundable.</li>
                            <li>Should you sustain an unexpected injury and are not able to make your flight.</li>
							<li>Your travel companion has a medical emergency, and you do not want to travel without them.</li>
                        </ul> 
						
						<div class="tripprice insurance_image_md">
						<div class="mobile_passenger">Per Passenger</div>
						
					<c:forEach items="${bookingWrapper.insurancePricing}" var="insurancePricing" varStatus="tripM">
					 <fmt:formatNumber var="adultTripMate" type="number" minFractionDigits="2" maxFractionDigits="2" value="${insurancePricing.displayCost * curRsponse}" />
                                 
					<small>
					<c:if test="${insurancePricing.passengerType eq 'Adult'}">
					<span class="male"></span>Adult</c:if><c:if test="${insurancePricing.passengerType eq 'Child'}">
					<span class="child"></span>Child</c:if><c:if test="${insurancePricing.passengerType eq 'Infant'}">
					<span class="infront"></span>Infant</c:if><c:if test="${insurancePricing.passengerType eq 'InfantWs'}">
					<span class="infront"></span>InfantWS</c:if>: 
					<i class="fa fa-<c:out value="${dollar}"/>" ></i><c:out value='${adultTripMate}' /></small> 
					
					</c:forEach>
					
					</div>
						
						<fmt:formatNumber var="tripTotal" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.grandTotal * curRsponse}" />
						<div class="tripmate_radio" id="insurance_radio">
						<div class="add-mcp inputSet" onclick="enableButton();">
                       
						   <label >
						   <form:radiobutton path="TripMate" id="TripMateYes" value="Yes" onclick="macpSet('TM','Y','Y');" />
						    <span><b>Yes,</b> I want to protect my trip <i class="fa fa-<c:out value="${dollar}"/>" ></i><c:out value='${tripTotal}' /> </span></label>			   
						</div>
						<div class="remove-mcp inputSet" onclick="enableButton();">	
						 					 
						 <label><form:radiobutton path="TripMate" id="TripMateNo" value="No" onclick="macpSet('TM','N','N');" /><span> <b>No,</b> I would risk my entire trip <i class="fa fa-<c:out value="${dollar}"/>" ></i><c:out value='${tripTotal}' /></span></label>
					  
						  </div>
						  </div>
						  
						 <div style="clear:both;"></div> 
                         <p class="visible-lg"> To learn more   <a class="text_link" onclick="window.open('/travel-insurance2', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=800,height=600, screenX=50,screenY=50')" href="javascript: void(0);"><u>click here</u></a>.</p>
						  <p class="hidden-lg"> To learn more   <a href="javascript: void(0);" class="text_link" data-toggle="modal" data-target="#popup_travel_insurance"><u>click here</u></a>.</p>
                        <p id="tmpid" class="tmpid"> Please Choose your Travel Protection Plan </p> 
                 
					</div>
					
					<div class="col-md-4 hidden-md-image">
						<img src="/resources/flight-result/images/travel-protetion.gif" class="travel_protection_image">
						</div>

                    </div>

                </div>