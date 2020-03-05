 <%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
 <%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%> 
 <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
 <!--Start XE -->
	   <%--  <c:choose>
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
       </c:choose> --%>
       
    <c:set var="curRsponse" value="1"/>
	<c:set var="xchangeCurrencyCode" value="USD"/>
	<c:set var="dollar" value="${fn:toLowerCase(xchangeCurrencyCode)}"/>
    <input type="hidden" value="${curRsponse}" id="angularCurrency" ng-model="angularCurrency"/>   
 <!--End XE -->




<fmt:parseDate value = "${cartBean.carSearch.pickDate}" var = "parsedEmpDate1" pattern = "MM-dd-yyyy" />
<fmt:parseDate value = "${cartBean.carSearch.dropDate}" var = "parsedEmpDate2" pattern = "MM-dd-yyyy" />
<fmt:parseNumber value="${ parsedEmpDate1.time / (1000*60*60*24) }" integerOnly="true" var="nowDays" scope="request"/>
<fmt:parseNumber value="${ parsedEmpDate2.time / (1000*60*60*24) }" integerOnly="true" var="otherDays" scope="page"/>
<c:set value="${otherDays - nowDays}" var="dateDiff"/>
<c:set var="dayDiffInsFinal" value="${dateDiff+1}" scope="request"/>

<div class="cxl-wrapper">
    <div class="cxl-header">
        <div class="row">
            <div class="col-sm-5 col-xs-12">
                <div>Rental Car Protection (Recommended)</div>
            </div>
            <div class="col-sm-3 col-xs-12">
                <div class="fs14 green text-center hidden-xs" style="border: 1px dotted #1ccfbe; color: #1ccfbe;"><i class="fa fa-check"></i> Free Cancelation</div>
            </div>
            <div class="col-sm-4 hidden-xs text-right">
            	<fmt:formatNumber var="carDamageAmt1" type="number" minFractionDigits="2" maxFractionDigits="2" value="${carBookRequest.carDamageAmt* curRsponse}" />
                <i class="fa fa-usd"></i> ${carDamageAmt1}<small> /calendar day</small>
            </div>
        </div>
    </div>
<input type="hidden" id="carDamagePrice" value="${dayDiffInsFinal*carBookRequest.carDamageAmt* curRsponse}" />
    <div class="cxl-body car-protection">
        <div id="crDefaultMsg">
        <div class="cr-aminate-img text-center hidden-xs">
            <div class="text-right">
                <img src="/resources/images/crosssell-images/car-protection.png" alt="">
            </div>
            <div class="text-center">
                <img src="/resources/images/crosssell-images/car-animate.gif" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-sm-push-8 col-xs-12">
                <div class="cr-aminate-img text-center visible-xs">
                    <div class="text-right">
                        <img src="/resources/images/crosssell-images/car-protection.png" alt="">
                    </div>
                    <div class="text-center">
                        <img src="/resources/images/crosssell-images/car-animate.gif" alt="">
                    </div>
                </div>
                <div class="fs14 green text-center visible-xs" style="border: 1px dotted #ff9c00; color: #ff9c00;"><i class="fa fa-check"></i> Free Cancelation</div>
            </div>
            <div class="col-sm-8 col-sm-pull-4 col-xs-12">
                <h4>Be smart. Add Rental Car Protection</h4>
                <div class="row">
                    <div class="col-sm-6">
                        <ul class="car-protection-list fs12">
                            <li>Reimbursement up to <i class="fa fa-usd"></i>35,000 for covered losses and damages.</li> 
                            <li>Covers rental car damage from collision, theft or vandalism.</li> 
                            <li>Up to $7,500 for covered Emergency Evacuation and Repatriation.</li>
                        </ul>
                    </div>
                    <div class="col-sm-6">
                        <ul class="car-protection-list fs12">
                            <li>Primary coverage so you don't have to go through your auto insurance.</li>
                            <li>All drivers on the rental agreement are covered.</li>
                            <li>Round-the-clock customer assistance services.</li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h5>Travel Safe. <strong> Book Now!</strong></h5>
                    </div>
                </div>
                <div class="row check-rental-protection" id="crProtection">
                    <div class="col-sm-6">
                        <div class="cr-input-area" id="crYes">
                            <label>
                                <form:radiobutton path="carDamageGuard" value="Yes"/>
                                <span class="fs12"><strong>Yes,</strong> add Rental Car Protection 
                                        <fmt:formatNumber var="carDamagevalue" type="number" minFractionDigits="2" maxFractionDigits="2" value="${dayDiffInsFinal*carBookRequest.carDamageAmt* curRsponse}" />
                                        <i class="fa fa-usd"></i><c:out value='${carDamagevalue}' />
                                    </span>
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="cr-input-area" id="cdNo">
                            <label>
                                <form:radiobutton path="carDamageGuard" value="No" />
                                <span class="fs12"> 
                                    <strong>No,</strong> 
                                    thanks. I'll take my chances 
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="row">
            <div class="col-sm-12 fs12">
                <div class="cr-lear-more">To learn more <a class="addreq" href="javascript:void(0)" onclick="window.open('/rental-car-protection', 'rental-car-protection', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=800,height=600, screenX=50,screenY=50')" target="_blank">click here</a></div>
            </div>
            <div class="col-sm-12 fs12" id="carDamageError" style="display:none;color:red;">
                Please Select your Rental Car Protection
            </div>
        </div>
    </div>
        <div class="alert alert-success" id="crSuccessMsg" style="display: none;">
            <i class="fa fa-check"></i> You've added rental protection to your trip. <button type="button" id="crSuccessMsgBtn" class="btn-success"> Change</button>
        </div>
       
        <div class="alert alert-warning" id="crWarning" style="display: none;">
            <i class="fa fa-warning"></i> Your car is not protected. Save now, you may pay more at the rental counter <button type="button" id="crWarningBtn" class="btn-warning"> Reconsider</button>
        </div>
    </div>
</div>