<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!doctype html>
<html ng-app="angularPurchase">
<head>
<!--[if lt IE 9]>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Travelopick - Your flight details and Book</title>

<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="/resources/flight-result/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/flight-result/css/font-awesome.min.css" rel="stylesheet">  
<link href="/resources/us/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/flight-result/css/angular-busy.css" rel="stylesheet">
<link href="/resources/us/css/result-style.css?30062017" rel="stylesheet">
<link href="/resources/flight-result/css/flag-icon.css" rel="stylesheet">

<script src="/resources/flight-result/js/jquery.1.11.1.min.js"></script>
<script src="/resources/flight-result/lib/angular/angular.js"></script>
<script src="/resources/flight-result/js/local-cache.js"></script>
<script type="text/javascript"> 
    window.history.forward();

    function noBack() {
        window.history.forward();
    }
    
      function goBack() {
        key=false; 
        window.history.go(-1);
    }
</script>

<script type="text/javascript">
     function popup(divProgressBar, width, height) {
        try {
            var height1 = $(window).height();
            var width1 = $(window).width();
            $('#' + divProgressBar).height(height + "%");
            $('#' + divProgressBar).width(width + "%");
            $('#' + divProgressBar).css({
                top: ((height1 - ((height1 * parseInt(height)) / 100)) / 2).toFixed(0) + "px",
                left: ((width1 - ((width1 * parseInt(width)) / 100)) / 2).toFixed(0) + "px"
            });

            $('#fadebackground').height(height1 + "px");
            $('#fadebackground').width(width1 + "px");
            $('#fadebackground').toggle();
            $('#' + divProgressBar).toggle();
            return false;
        } catch (e) {
            return false;
        }
    }

    var sessionTimeout = 18;
    var secound = 0;
    window.onload = DisplaySessionTimeout();
    var xLoad = true;
    function DisplaySessionTimeout() {
        // sessionTimeout = sessionTimeout - 1;
      //  document.getElementById("xxxxx").innerHTML = sessionTimeout + " : " + secound;
     // console.log(sessionTimeout + " : " + secound);
        if (sessionTimeout < 10) {
            if(xLoad){
            $("#sessionTimeClose").on('click', function(){
                xLoad = false;
                console.log('Close the dic');
                $("#sessionTimeOutDiv").fadeOut();
            });
            $("#sessionTimeOutDiv").fadeIn();
            
            if (secound > 9) {
                document.getElementById("sessionTime").innerHTML = sessionTimeout + " : " + secound;
                //document.getElementById("&lt;%= lblSessionTime.ClientID %&gt;").innerText = sessionTimeout " : " secound;
            } else {
                document.getElementById("sessionTime").innerHTML = sessionTimeout + " : 0" + secound;
                //document.getElementById("&lt;%= lblSessionTime.ClientID %&gt;").innerText = sessionTimeout " : 0" secound;
            }
        }
        }
        if (secound == 0) {
            sessionTimeout = sessionTimeout - 1;
            secound = 59;
        } else {
            secound = secound - 1;
        }
        if (sessionTimeout >= 0) {

            window.setTimeout("DisplaySessionTimeout()", 1000);
        } else {
            callSessionTimeOut();
        }
    }
    function callSessionTimeOut() {
        popup('divSessionOut', 30, 30);
        $("#sessionTimeOutDiv").fadeOut();
        return true;
    };
     
        $(document).ready(function () {  
    localStorage.setItem('paymentpageopen', '0');
	localStorage.setItem('paymentpageairline', '');
	localStorage.setItem('paymentpagefares', '');
	localStorage.removeItem("paymentpageopen");
	localStorage.removeItem("paymentpagefares");
    localStorage.removeItem("paymentpageairline");
	});
    
    
</script>


<!--  / Google analytics \ -->

<!--  / Google analytics \ -->
<c:choose>
				<c:when test="${currentDevice.normal}">
				<input type="hidden" value="Normal" id="currentDevice"/>
				</c:when>
				<c:when test="${currentDevice.mobile}">
				<input type="hidden" value="Mobile" id="currentDevice"/>
				</c:when>
				<c:when test="${currentDevice.tablet}">
				<input type="hidden" value="Tablet" id="currentDevice"/>
				</c:when>
				<c:otherwise>
				<input type="hidden" value="Normal" id="currentDevice"/>
				</c:otherwise>
			</c:choose>
</head>
<body class="result-bg" ng-controller="purchaseCtrl" onLoad="noBack();" onpageshow="if (event.persisted) noBack();" onUnload="">
 

<!--Start: Session Time Out Massage-->
 <div align="center" id="sessionTimeOutDiv"  style="display:none;" class=" sessionTimeOut"> 
<div class="session-exp">
	 <h2>Your session will expire in <br/><mark id="sessionTime"> 15.00 </mark> minutes.</h2>
    <h3>Click <mark>"Close"</mark>to continue working on this page.</h3>
    <div class="cancel">
        <button type="button" id="sessionTimeClose">Close</button>
    </div>
    <p>No thanks. Take me to the <a href="/">home page</a>.</p>
    <!--<div style="font-size:50px; padding:20px 0px; color:#868686;"> <i class="fa fa-clock-o" aria-hidden="true"></i></div>-->
</div>
</div>


<!--End: Session Time Out Massage-->
<!--Start: Session Alert Massage-->
<div align="center" id="divSessionOut" style="display:none; " class="popup-product">
<div id="fadebackground"></div>
<div class="session-exp">
<h3>Session Expired!</h3>
	<p> 
	Flight prices may change frequently owing to demand & availability. </br>
	Start a new search to view the best deals.         
	</p>

<div class="clock_tym"> <i class="fa fa-clock-o" aria-hidden="true"></i>  </div>

<div align="center" valign="middle"><!-- <a href="#" onclick="submitForm();" class="btn btn-primary btn-lg searchbtn">Search Again</a>
&nbsp; &nbsp;  OR  -->&nbsp; &nbsp;  <a href="/" class="btn btn-primary btn-lg searchbtn">Go to Home</a>
</div>   
</div>
</div>



<!--End: Session Alert Massage-->
<div id="divProgressbar" style="display: none;">
<div align="center" class="popup-product">
    <h3 class="text-orange">Please Wait while we Confirm your Booking</h3>
    <div class="text-center"><img src="/resources/images/loader.gif" width="25"></div>
    <div class="clearfix"></div>
</div>

</div>

<!--- Header Section Start---->
<jsp:include page="result_header.jsp"></jsp:include>
<div class="result-inside">
<!--- Header Section End---->
<div class="container">
<div class="top-content">
<div class="row">
<div class="col-sm-12 col-md-9">

<span class="hidden-xs"><i class="fa fa-thumbs-o-up"></i> You're Just a Click Away From Your <b>Smart & Secure Booking!</b></span>
</div>
<div class="col-sm-12 col-md-3"> </div>
</div>
</div>
</div>

<!--- Main Section---->



<!----Flight Selection Nav ends------------>
<form:form method="POST" action="/booked" id="booking" modelAttribute="booking" novalidate="novalidate">

 <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal}" />
 
 
 
  <div class="col-sm-12 col-md-9">
          
                <div class="resultsBox">

                    <h4 class="sub_header">Billing Amount: <c:out  value="${publishedFare}" /></h4>

                    <div class="subtitle">
                        For PNR: <c:out  value="${booking.pnr}" />
                    </div>
                    
                </div></div>
    <div class="container">
        <div class="row">


            <!---Main Result Area--->
            <div class="col-sm-12 col-md-9">
          
                <div class="resultsBox">

                    <h4 class="sub_header">Billing Information</h4>

                    <div class="subtitle">
                        Your Billing Address (As per bank records Or credit card company)
                    </div>

                    <div class="content">
                        <div class="billing-sequre row ">
                            <div class="col-sm-8">

                                <div class="row form-row">

                                    <div class="col-sm-5">
                                        <label>Country<font color="red">*</font></label>
                                    </div>
                                    <div class="col-sm-7">

                                        <form:select path="payment.country" id="Payments_Country" class="form-control form-group card_type chosen-select valid" ng-options="opt.Name for opt in countryList track by opt.ID" name="Payments.Country" ng-model="selectedCountry" data-val-required="Select <b>billing address country</b>" data-val="true">

                             
                                        </form:select>



                                    </div>

                                    <div id="InternationalData" class="tooltipPopup" style="display:none;">Are you using a card which is issued outside USA or Canada? Please be advised payment through an international card online is accepted. However, the card holder will be contacted by our credit card verification team and will be required to send us few documents such as authorization form, copy of credit or debit card and Photo ID of the card holder. In case you would like to enquire more about this you may call us on <c:out value='${tollFree}' />.</div>


                                </div>

                                <div class="row form-row">
                                    <div class="col-sm-5">
                                        <label>Address 1<font color="red">*</font></label>
                                    </div>
                                    <div class="col-sm-7">

                                        <form:input path="payment.address1" id="payment.address1" class="form-control text-box form-group" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                                        <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span>

                                    </div>

                                </div>


                                <div class="row form-row">
                                    <div class="col-sm-5">
                                        <label>Address 2 </label>
                                    </div>
                                    <div class="col-sm-7">

                                        <form:input path="payment.address2" id="payment.address2" class="form-control text-box" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                                        <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span>
                                    </div>
                                </div>


                                <div class="row form-row">
                                    <div class="col-sm-5">
                                        <label>City/ Town<font color="red">*</font></label>
                                    </div>

                                    <div class="col-sm-7">

                                        <form:input path="payment.city" id="payment.city" class="form-control text-box form-group textOnly" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                                        <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span></div>

                                </div>

                                <div class="row form-row" cg-busy="{promise:promise,templateUrl:templateUrl,message:message,backdrop:backdrop,delay:delay,minDuration:minDuration}">
                                    <div class="col-sm-5">
                                        <label>State/ Province<font color="red" id="statemad" style="float: right;">*</font></label>
                                    </div>

                                    <div class="col-sm-7">
                                        <!--  style="display: none; position: relative;" -->
                                        <div id="stateInp" ng-hide="IsHidden">

                                            <form:input path="payment.state" id="payment.state" class="form-control form-group text-box card_type col-xs-12" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                                            <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span></div>

                                      
                                            <div id="stateSel" ng-hide="IsShow">
                                                <form:select path="payment.state" id="payment.state" class="form-control form-group card_type chosen-select valid" ng-options="opt.Name for opt in usState track by opt.ID" name="payment.state" ng-model="selectedItem">
                                                </form:select>

                                            </div>

                                    </div>
                                </div>

                                <div class="row form-row">
                                    <div class="col-sm-5">
                                        <label>Postal/Zip Code<font color="red">*</font></label>
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="form-group-icon-left form-group-filled ">

                                            <form:input path="payment.postalCode" id="payment_postalCode" class="form-control form-group text-box card_type col-xs-12" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                                            <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div class="resultsBox">
                   
                	
                    <h4 class="sub_header">Payment and Billing - <span class="safe">100% Safe and Secure Booking</span></h4>

                    <div class="creditinformation"><img src="/resources/images/lock-icon12.png"> Your credit card information is protected by a Secure SSL Encrypted by GoDaddy</div>

                    <div class="content">



                        <div class="payment_detail">
                            <div class="row form-row">


                                <div class="col-sm-3">
                                    <label>Payment Method<font color="red">*</font></label>
                                </div>
                                <div class="col-sm-4">
                                    <form:select id="payment-card" path="payment.cardCode" class="form-control form-group" onchnage="getcardValue(this);" name="ddlCabinClass" items="${model.cardtype}" />
                                </div>
                                <div class="col-sm-5">
                                    <div id="cards" class="spnCardImg">
                                        <a id="VI_3" class="pvisa" title="Visa" default="1" onClick="setccValue('Visa')" style="border: none; cursor:pointer;"></a>
                                        <a id="CA_3" class="pmaster" onClick="setccValue('Master Card')" style="border: none; cursor:pointer;" title="MasterCard" default="2" href="javascript:void(0);"></a>
                                        <a id="AX_4" class="pamerican" onClick="setccValue('American Express')" style="border: none; cursor:pointer;" title="American Express" default="3" href="javascript:void(0);"></a>
                                        <a id="DC_3" class="pdiners" onClick="setccValue('Diners Club')" style="border: none; cursor:pointer;" title="Diners Club" default="4" href="javascript:void(0);"></a>
                                        <a id="DS_3" class="pdiscover" onClick="setccValue('Discover')" style="border: none; cursor:pointer;" title="Discover" default="5" href="javascript:void(0);"></a>
                                        <a id="CB_3" class="pcarte hidden-xs" onClick="setccValue('Carte Blanche')" style="border: none; cursor:pointer;" title="Carte Blanche" default="6" href="javascript:void(0);"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="row form-row">
                                <div class="col-sm-3">
                                    <label>Credit/Debit Card No.<font color="red">*</font></label>
                                </div>
                                <div class="col-sm-4 ">
                                    <div class="form-group-icon-left form-group-filled ">
                                        <form:input id="Payments_MaskCardNumber" path="payment.maskCardNumber" class="form-control text-box card_type col-xs-12 numbersastOnly" maxlength="16" type="text" value="" name="Payments.MaskCardNumber" data-val-required="Please provide <b>credit or debit card number</b><br/>" data-val-regex-pattern="^([0-9]+)$" data-val-regex="Please provide valid <b>Card number</b>(Entry must contain digits (0-9))<br/>" data-val="true" />

                                        <form:hidden id="Payments_CardNumber" path="payment.cardNumber" name="Payments.CardNumber" />


                                        <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CardNumber"></span>
                                        <label id="cardRange" for=""> </label>
                                    </div>



                                </div>
                                <div class="col-sm-5">
                                    <label>(Pay with credit or debit card)</label>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-sm-3 col-xs-12">
                                    <label>Card Holder's Name<font color="red">*</font></label>
                                </div>
                                <div class="col-sm-4 col-xs-12">
                                    <div class="form-group-icon-left form-group-filled ">
                                        <form:input id="Payments_CardHolderName" path="payment.cardHolderName" class="form-control text-box card_type col-xs-12 textOnly" type="text" name="Payments.CardHolderName" data-val-required="Please provide <b>Card Holder Name</b><br/>" data-val-regex-pattern="^([A-Za-z ]+)$" data-val-regex="Please provide valid <b>Card Holder Name</b>(Entry must contain at least 2 letters (A-Z))<br/>" data-val-length-min="2" data-val-length-max="50" data-val-length="Card holder name length should be 2-50 characters<br/>" data-val="true" />
                                        <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CardHolderName"></span>
                                    </div>
                                </div>
                                <div class="col-sm-5 col-xs-12">
                                    <label>(As it appears on your credit card/debit card)</label>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-sm-3">
                                    <label>Expiration Date<font color="red">*</font></label>
                                </div>
                                <div class="col-xs-6 col-sm-2">

                         
                                        <spring:bind path="payment.expiryMonth">
                                            <select name="payment.expiryMonth" id="Payments_ExpiryMonth" class="form-control">

                                                <c:forEach items="${model.cardMonth}" var="curExp" varStatus="loop">
                                                    <option value="${loop.index}">${curExp}</option>

                                                </c:forEach>
                                            </select>
                                        </spring:bind>

                                <div class="form-group" id="Experrors">
                                  
                                     </div>
                                        <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="payment.expiryMonth"></span>
                                        <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.ExpiryYear"></span>
                                </div>
                                <div class="col-xs-6 col-sm-2">
                                    <form:select id="Payments_ExpiryYear" path="payment.expiryYear" items="${model.cardyear}" class="form-control card_type" name="Payments.ExpiryYear" data-val-required="The ExpiryYear field is required." data-val-range-min="1" data-val-range-max="3000" data-val-range="Please select <b>card expiration year</b><br/>" data-val-number="The field ExpiryYear must be a number." data-val="true" />
                                </div>
                                
                            </div>
                            <div class="row form-group">
                                <div class="col-sm-3 col-xs-12">
                                    <label>Card Verification No.<font color="red">*</font></label>
                                </div>
                                <div class="col-sm-2 col-xs-12">
                                    <div class="form-group-icon-left form-group-filled ">
                                        <form:password id="Payments_CvvNo" path="payment.cvvNo" class="form-control text-box card_type col-xs-12 numbersOnly" maxlength="4" name="Payments.CvvNo" />
                                        <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CvvNo"></span>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-xs-12">
                                    <div class="cvvIcon">
                                        <img src="/resources/images/ccv-img.gif" id="ccvimg"><span id="tooltip"><a href="" class="text_link">3 Digit Number From Your Card<span></span></a>
                                       
                                        </span>
                                    </div>
                                </div>

                                <div class="col-sm-3">
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <!-------------------Address Detail--------------->
                <div class="resultsBox">

                    <h4 class="sub_header"> Credit Card Contact Information</h4>


                    <div class="subtitle">
                        Contact Information
                    </div>

                    <div class="clearfix"></div>

                    <div class="content">
                        <div class="row form-row">
                            <div class="col-sm-3 col-xs-12">
                                <label>Billing Phone<font color="red">*</font></label>
                            </div>
                            <div class="col-sm-4 col-xs-12">
                                <div class="form-group form-group-icon-left form-group-filled ">

                                    <form:input path="contact.billingPhone" id="contact_billingPhone" minlength="10"  maxlength="15"  class="form-control form-group text-box card_type col-xs-12 numbersOnly" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span></div>
                            </div>
                             <div class="col-sm-5 col-xs-12">
                                    <label>(As on file with bank or credit card company)</label>
                             </div>
                        </div>

                        <div class="row form-row">
                            <div class="col-sm-3">
                                <label>Alternate Phone</label>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group-icon-left form-group-filled ">

                                    <form:input path="contact.mobile" id="contact_mobile" minlength="10"  maxlength="15" class="form-control form-group text-box card_type col-xs-12 numbersOnly" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span></div>
                            </div>
                        </div>

                        <div class="row form-row">
                            <div class="col-sm-3">
                                <label>Email<font color="red">*</font></label>
                            </div>
                            <div class="col-sm-4">

                                <form:input path="contact.email" id="contact_email" class="form-control form-group text-box card_type col-xs-12" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                                <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="contact_email"></span></div>

                        </div>
                        <div class="row form-row">
                            <div class="col-sm-3">
                                <label>Retype Email<font color="red">*</font></label>
                            </div>
                            <div class="col-sm-4">
                                <form:input path="contact.email1" id="contact_email1" class="form-control form-group text-box card_type col-xs-12" type="text" name="contact.email1" />

                                <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="contact_email1"></span></div>

                        </div>
                    </div>

                </div>
 

                <div class="bottom-text col-xs-12 text-center">
                    <p class="depture">By clicking, <b>Book Now</b> I agree that I have read and accepted Travelopick <a class="text_link" href="/terms-conditions" target="_blank">Terms &amp; Conditions</a> and <a class="text_link" href="/privacy-policy" target="_blank">Privacy Policy</a>.   
					<br /><span class="hidden-xs">Please confirm that the dates and times of flight departures are accurate, also confirm that the names of the traveler(s) are accurate.</span></p>
                </div>

                <div class="col-xs-12">

                    <div class="col-sm-4"></div>

                    <div class="col-sm-4 text-center">
                        <div class="buton button-width">
                            <form:hidden path="UserSessionID" id="randamIds" name="UserSessionID" />
                            <input type="hidden" id="finalId" value="x123456" />
                            <input type="hidden" id="randamId" value="x123456" />
                            <button id="btnSearchFlights" class="purchase-btn btn-lg" type="button" onClick="submitForm();">Payment</button>
                        </div>
                    </div> 
					
					
                </div>


                <div class="col-xs-12 text-secure hidden-xs"> <img src="/resources/images/lock-icons2.jpg"> Your payment details are secured via 128 Bit encryption by GoDaddy </div>


            </div>   



      
			
		

</div>



</div><input type="hidden" value="1" id="convRatio" />
 <input type="hidden" value="USD" id="xchangeCurrencyCode" />

</form:form>



</div>
<!--Main-->

<!--Footer Start-->
<div class="hidden-xs">
<jsp:include page="result_footer.jsp"></jsp:include>
</div>

<!--Footer Closed-->

<script src="/resources/flight-result/js/jquery-1.8.2.min.js"></script>
<script src="/resources/flight-result/js/modernizr.min.js"></script>
<script src="/resources/flight-result/js/respond.min.js"></script>
<script src="/resources/flight-result/js/prefixfree.min.js"></script>
<script src="/resources/flight-result/js/bootstrap.min.js"></script>
<script src="/resources/flight-result/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/flight-result/js/jquery.validate.min.js"></script>
<script src="/resources/flight-result/js/angular-animate/angular-animate.js"></script>
<script src="/resources/flight-result/js/angular-busy.js"></script>
<script src="/resources/flight-result/js/offlinepayment_1.9_5.js?030dd82017"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.min.js"></script>
<!--<script src="/resources/flight-result/js/jquery-exit-popup_1.0.js"></script>-->
<script src="/resources/flight-result/js/jquery.sticky.js"></script>

   

	
</body>
</html>