
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

                    <div class="resultsBox" id="tgBox">
                      <c:if test="${theString ne '0.0'}">
					<h4 class="sub_header">Cover Your Trip with Travel Insurance!</h4>
					  <div class="content">
                        
                        <div class="prepaid">Are You Prepared?</div>
                        <p> A Travel Guard travel insurance plan can help cover your vacation investment, offset expenses from travel mishaps and provide you with emergency travel assistance.
                        </p>


                        <div class="form-row input-group">

                            <fmt:formatNumber var="travelGuard" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.TGuardValue}" />
                            <div id="help2" style="cursor: pointer" onclick="macpSet('TG','Y','Y');radioSelect('TravelGuardYes');">
                                <form:radiobutton path="TravelGuard" id="TravelGuardYes" ng-model="showHideTest" value="Yes" onclick="macpSet('TG','Y','Y');" /> YES, include travel insurance for $<span id="tgPlan"><c:out value='${travelGuard}' /></span>
                                <%-- <c:out value='${booking.tgPlan}' /> --%> <span><i>(Available to U.S. Residents Only)</i></span></div>
                            <div class="insurence">I have read and understand the <span ng-click="openWindow();" style="color:#00A4E4; cursor: pointer;">Certificate of Insurance</span> and agree to the terms
                                <br/>and conditions of the insurance coverage provided.</div>


                            <div style="cursor: pointer" onclick="macpSet('TG','N','N');radioSelect('TravelGuardNo');">
                                <form:radiobutton path="TravelGuard" id="TravelGuardNo" ng-model="showHideTest" value="No" onclick="macpSet('TG','N','N');" /> NO, I decline the option to purchase travel insurance.

                            </div>


                             
                            <p>This insurance offer is not applicable for residents of CT, ID, HI, MA, NY, OH, PA, VT or WA. For information on travel insurance for these states please contact Travel Guard at 866-385-4839.</p>



                        </div>

                        <div class="clearfix"></div>


                        

                        <p> Coverage is Offered by Travel Guard Group, Inc., and limitations will apply. <span style="color:#00A4E4; cursor: pointer;" onclick="window.open('https://www.travelguard.com/disclaimer/','_blank')"> Click here </span> for full Disclaimer ! </p>
						 <div style="clear:both;"></div>
							  <p id="tgpid" style="margin: 0px 0px 0px 20px;"> Please Choose your Travel Insurance.</p>
							  <img src="/resources/images/aig-logo.jpg" class="ar-logo ">
					 </div>
					  </c:if>
                    </div>

