
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
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<title>Flight Details &amp; Payment | ${data.siteName}</title> 
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="/resources/flight-result/css/bootstrap.min.css?28092017" rel="stylesheet">
<link href="/resources/flight-result/css/font-awesome.min.css" rel="stylesheet">
<link href="/resources/flight-result/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/flight-result/css/angular-busy.css" rel="stylesheet">
<link href="/resources/flight-result/css/slick-theme.css?11062018" rel="stylesheet">
 <link href="/resources/flight-result/css/result-style.css?5435435343" rel="stylesheet">
<link href="/resources/flight-result/css/flag-icon.css" rel="stylesheet">
<script src="/resources/flight-result/js/jquery.1.11.1.min.js"></script>
<script src="/resources/flight-result/lib/angular/angular.js"></script>
<script src="/resources/flight-result/js/local-cache.js"></script>
<script src="/resources/flight-result/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/flight-result/js/slick_carousel.js?19022018"></script>
<script src="/resources/flight-result/js/card-type.js"></script>
<!-- <script src="/resources/flight-result/js/jquery-exit-popup-18.js?25042018"></script>-->

<style>
#launcher { display:none !important; }
.border-dotted { border-bottom: 1px dotted #ccc; margin: 5px 0px; }
.border-dotted2 { border-bottom: 1px dotted #ccc; margin: 10px 0px; }
.seprate-layover {    position: absolute;   left: 50%;    bottom: -8px;     transform: translateX(-50%);    background: #fff; }
</style>

<!-- show hide Toggle -->
<script>
	$(document).ready(function(){ 
		
		$('.showbtn').click(function(){
			$(this).next().slideToggle();
				if($(this).text() == 'Hide')
				{
					$(this).text('Show');
				}
				else
				{
					$(this).text('Hide');   
				}
		
		});
		//}
		
		 $('.taxes-fees-toggle').click(function(){
	   		$('.taxes-fees-slide').slideToggle();
	   });
		
		
	});
	
  </script>  
  
<script type="text/javascript"> 
    window.history.forward();

    function noBack() {
        window.history.forward();
    }
    
      function goBack() {
        key=false; 
      //  window.history.go(-1);
         var path=window.location.origin;

          var rndId=$('#useridss').val();
		  var url=path+"/search/id/"+rndId+"";	
			 
         var encodedUrl = decodeURIComponent(url);
         $(location).attr("href", encodedUrl);
    }
</script>
<script type="text/javascript">

  function fadepopup(width, height) {
        try {
			
            var height1 = $(window).height();
            var width1 = $(window).width();
          
            $('#fadebackgrounds').height(height1 + "px");
            $('#fadebackgrounds').width(width1 + "px");
            $('#fadebackgrounds').show();
            
            return false;
        } catch (e) {
            return false;
        }
    }
	
	
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

<!--<script>

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-anchor').height($('#main_price').outerHeight());
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

</script>-->



<script type="text/javascript">
 var card2Required = false;
    $(document).ready(function(){
        $(".payment-more").click(function(){
            $(this).text($(this).text() == '[+] Pay with two credit or debit cards (optional)' ? '[-] Pay with one card' : '[+] Pay with two credit or debit cards (optional)');
            $('#payment-first,#payment-second').slideToggle(600);
           /*  card2Required = !card2Required; */
            
            var publishedFares = document.querySelector("#totalValue").value;
            	var convRatio = document.getElementById('convRatio').value;
            	if($("#grandTotalMacpSet").val() != 0.00){
            	 publishedFares = $("#grandTotalMacpSet").val();
            	}
            	  
                var newAmount=   ((publishedFares*25/100)*convRatio);
             var ele = document.querySelector("#payments_card_first_amount");
	       
             ele.value = (publishedFares-newAmount).toFixed(2);
             
             
              var ele2 = document.querySelector("#Payments_Card_second_amount");
	       
             ele2.value = (newAmount).toFixed(2);
            card2Required = false;
            document.querySelector("#Payments_MaskCardNumber2").value="";
            document.querySelector("#Payments_CardNumber2").value="";
            document.querySelector("#Payments_CvvNo2").value="";
           // document.querySelector("#Payments_ExpiryYear2").value="Year";
           //  document.querySelector("#payment_expiryMonth2").value="0";
            
            
        $("#booking").validate().element("#payments_card_first_amount");
    	$("#booking").validate().element("#Payments_MaskCardNumber2");
    	$("#booking").validate().element("#Payments_CardNumber2");
        $("#booking").validate().element("#Payments_CvvNo2");
        $("#booking").validate().element("#Payments_ExpiryYear2");
           // $('#payment-second').slideToggle(600);
          card2Required = true;  
		  if($(this).text() == '[+] Pay with two credit or debit cards (optional)'){
			   card2Required = false;
		   }
        });
    }); 
    
  
</script>


<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
<% String utmSource=(String)session.getAttribute("utm_source");
String siteId=(String)session.getAttribute("site_Id");
 %>
</head>
<body class="result-bg payment-page"   id="target" ng-controller="purchaseCtrl"  onLoad="noBack();" onpageshow="if (event.persisted) noBack();" onUnload="">

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
          <c:set var="xchangeCurrencyCode" value="GBP"/>
          <c:set var="dollar" value="gbp"/>
        </c:when>
        <c:when test="${not empty xchangeCurrencyCode}">
          <c:set var="dollar" value="gbp"/>
        </c:when>
      </c:choose>
      <!------------------ currencyRsponse end------------------->
	  

<input type="hidden" id="bookingGDS" value="${bookingWrapper.flight.gds}"/>
<input type="hidden" id="kountSessionIdd"/>
<div id="paxlen" hidden="hidden">${booking.passengerList.size()}</div>
<input type="hidden" id="totlugamt" value="0.0"/>
<input type="hidden" id="utmSourceValue" value="<%=utmSource%>"/> 

<c:set var="utmSource" value="<%=utmSource %>" scope="page"/>
<c:set var="siteId" value="<%=siteId %>" scope="page"/>
<!--Start: Session Time Out Massage-->
<div align="center" id="sessionTimeOutDiv"  style="display:none;" class=" sessionTimeOut">
  <div class="session-exp">
    <h2>Your session will expire in <br/>
      <mark id="sessionTime"> 15.00 </mark>
      minutes.</h2>
    <h3>Click
      <mark>"Continue Button"</mark>
      to working on this page.</h3>
    <div class="cancel">
      <button type="button" id="sessionTimeClose">Continue</button>
    </div>
    <!-- <p>No thanks. Take me to the <a href="/">home page</a>.</p> -->
    <!--<div style="font-size:50px; padding:20px 0px; color:#868686;"> <i class="fa fa-clock-o" aria-hidden="true"></i></div>-->
  </div>
</div>
<%
String useridss=""; %>
<c:forEach items="${userListWrapper}" var="userid"  begin="0" end="0" varStatus="uid" >
  <c:set var="userids" value="${userid.searchId}"/>
  <input type="hidden" id="useridss" value="${userid.searchId}" />
  <c:set var="myuseridss" value="${userid.searchId}"/>
  <% useridss=(String)pageContext.getAttribute("myuseridss");%>
</c:forEach>
<!--End: Session Time Out Massage-->
<!--Start: Session Alert Massage-->
<div align="center" id="divSessionOut" style="display:none; " class="popup-product">
  <div id="fadebackground"></div>
  <div class="session-exp">
    <h3>Session Expired!</h3>
    <p> Flight prices may change frequently owing to demand & availability. </br>
      Start a new search to view the best deals. </p>
    <div class="clock_tym"> <i class="fa fa-clock-o" aria-hidden="true"></i> </div>
    <div align="center" valign="middle">
      <!-- <a href="#" onclick="submitForm();" class="btn btn-primary btn-lg searchbtn">Search Again</a>
&nbsp; &nbsp;  OR  -->
      &nbsp; &nbsp; <a href="/" class="btn btn-primary btn-lg searchbtn">Go to Home</a> </div>
  </div>
</div>

 <!-- Price Cange Pop up IsPriceChanged -->
<c:if test="${bookingWrapper.isPriceChanged && bookingWrapper.getTFPriceDiff() > 0}">
<div align="center"  style="display:block; " class="popup-product pricechangepop">
  <div id="fadebackground"></div>
  <div class="session-exp">
  
      
    <fmt:formatNumber var="oldPrice" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(bookingWrapper.fare.grandTotal - bookingWrapper.getTFPriceDiff()) * curRsponse}" />
    <fmt:formatNumber var="newPrice" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.grandTotal * curRsponse}" />
    <fmt:formatNumber var="priceDifference" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.getTFPriceDiff() * curRsponse}" />
    <h3>Airlines increased the fare by <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value="${priceDifference}" /></h3>
	<p>Your updated total fare is <strong><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value="${newPrice}" /></strong> Previous total fare was <strong><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value="${oldPrice}" /></strong></p>
    
    <div align="center" valign="middle">
     <a  href="javascript:void(0);" class="go-back" onclick="pricechanged('Y')"> Continue Booking</a>
	<a  href="javascript:void(0);" class="go-back gray" onclick="pricechanged('N')">Select Another Flight </a> 
	</div>
	<small>Airlines keep updating their fares over their system <br> which causes fare changes from time to time.</small>
  </div>
</div>
</c:if>
<!-- End Price Cange Pop up --> 

<div id="fadebackgrounds" style="display: none;"></div>
<!--End: Session Alert Massage-->
<div id="divProgressbar" style="display: none;" class="popup-product">
  <div id="fadebackground"></div>
  <div align="center" class="booking-confim">
    <h3>Please wait while we confirm your <span class="dot">booking<span>.</span><span>.</span><span>.</span></span></h3>
    <div class="clearfix"></div>
  </div>
</div>

<!--- Header Section Start---->

<!--PDC code here -->

<div class="home_container makeHidden"> 
<div class="pdc-coupon-bg hidden-xs">
				<div class="container">

				 <div class="col-sm-3 text-center"> 
				 <img src="/resources/images/pdc-icon.png">
				 <span class="wow"> Wowza! Its here. </span>
				 </div>

				  <div class="col-sm-2 text-center"> 
				    <div class="code"> 
					<span>code</span>
					</div>
				  
				  </div>
				   <div class="col-sm-6 text-center"> 
				   <b>Congratulations.</b> It's here! Discount will be applied<br/> on the payment page. It's applicable only for this session.
				   </div>
				   <div class="col-sm-1 position-relative text-center">   
					 <div class="pdc-policy-main ">
					  <div class="pdc-tc  "> <a href="" onClick="show('mydiv')"> *T&C Apply</a> </div>
						  <div class="pdc-terms"> <span class="arrow"></span>
							 <p><b>Personlized discount code (PDC)</b><br/>
							  Once created, PDC can be used only within the session where it has been created. Each passenger can avail up to $5 discount. One PDC covers all the travelers, with discount up to $5 per passenger under the same PNR. Moving to any page(Home/Result/Payment) within the same session, your PDC would remain valid. No other promo code can be availed with PDC.</p> 
						  </div>
					 </div>   
				   </div>
				   
				</div> 
		
		  </div>
		  </div>
<!-- PDC code End Here -->

<jsp:include page="result_header.jsp"></jsp:include>
<div id="successMessage" style="display:none;">Coupon Code Successfully Applied !! </div>
<div class="result-inside">
 
<!-- Price Change Block 
<c:if test="${bookingWrapper.isPriceChanged}">

<fmt:formatNumber var="oldPrice" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.grandTotal - bookingWrapper.getTFPriceDiff()}" />
<fmt:formatNumber var="newPrice" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.fare.grandTotal}" />
<fmt:formatNumber var="priceDifference" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.getTFPriceDiff()}" />
  

<div class="container pricechangepop">
<div class="page-overlay1"></div>  
  <div class="travel-fusion-content ">
  
  
    <div class="row">    
      <div class="col-sm-7 col-xs-12">
	  		<h3>Airlines increased the fare by $<c:out value="${priceDifference}" /></h3>
			<p>Your updated total fare is <strong>$<c:out value="${newPrice}" /></strong>. Previous total fare was <strong>$<c:out value="${oldPrice}" /></strong></p>
         <div class=" col-sm-5 col-xs-12 pull-right">
			<a  href="javascript:void(0);" class="go-back" onclick="pricechangepop('Y')"> Continue booking</a>
			<a  href="javascript:void(0);" class="go-back gray" onclick="pricechangepop('N')">Pick another flight </a>
			</div>
		 </div>      
    </div>

	
  </div>
</div>
</c:if>
 Price Change Block -->
 <form:form method="POST" action="/booked" id="booking" modelAttribute="booking" novalidate="novalidate">
 <!--Top Price Summery Start-->
<div class="price-block-top" id="main_price">
  <div class="hilight-block">
    <div class="container">
    <div class="row">
    
        <c:set var="totMco1" value="${booking.fare.markup+booking.fare.instantDiscountAmt}" />
        <fmt:formatNumber var="totMco" type="number" value="${totMco1}" />
        <c:if test="${totMco1 >= 10.00}"><input type="hidden" value="0" id="callpopupopen"/></c:if>
        <c:if test="${totMco1  < 10.00}"><input type="hidden" value="1" id="callpopupopen"/></c:if>        
        <c:set var="orgMarkup" value="${booking.fare.markup}" />
        <fmt:setLocale value="en_US" />
        <fmt:formatNumber var="RkpublishedFare" type="number" groupingUsed="false" value="${((booking.fare.adultFare*booking.adult)+(booking.fare.childFare*booking.child)+(booking.fare.infantFare*booking.infant)+(booking.fare.infantWsFare*booking.infantWs))/(booking.infantWs+booking.infant+booking.child+booking.adult)}" />
        <input type="hidden" value="${booking.fare.grandTotal}" id="totalValue" />
          <input type="hidden" value="${(booking.fare.tax+((booking.fare.markup+10)*(booking.infantWs+booking.infant+booking.child+booking.adult))) * curRsponse}" id="totalTaxes" />
        
      <div class="col-lg-7 col-sm-7"><h2> PRICE SUMMARY <a class="hidden taxes-fees" onClick="window.open('/taxes-fees', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=900,height=600, screenX=50,screenY=50')" href="javascript: void(0);"> Taxes & Fees Info. </a> <a class="hidden taxes-fees" href="javascript: void(0);" data-toggle="modal" data-target="#popup_taxes_fees"> Taxes & Fees Info. </a> </h2> </div>
      <div class="col-lg-5 col-sm-5">
    
        <div class="top-price-section">

            <div class="row"><!--Head-->
              <div class="col-xs-6">Traveler(s)</div>
           <!--   <div class="col-xs-2">Count</div>
              <div class="col-xs-3">Base Fare</div>
              <div class="col-xs-3">Taxes & Fees</div>-->
              <div class="col-xs-6">Total</div>
            </div>
            <c:if test="${booking.adult > 0}">
            <fmt:formatNumber var="adultTotFare" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.adultFare)*(booking.adult) * (curRsponse)}' />
            <fmt:formatNumber var="adultTotTax" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.adultTax+totMco1)*(booking.adult) * (curRsponse)}' />
            <fmt:formatNumber var="formattedTotalAdultFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.adultFare+booking.fare.adultTax+totMco1)*(booking.adult) * (curRsponse)}" />
            <div class="row"><!--Data-->
              <div class="col-xs-6"> <c:out value='${booking.adult}' /> x <span> Adult</span> (s) </div>
             <!-- <div class="col-xs-2"><c:out value='${booking.adult}' /></div>
              <div class="col-xs-3"><i class="fa fa-<c:out value="${dollar}"/>"></i> <c:out value='${adultTotFare}' /></div>
              <div class="col-xs-3"><i class="fa fa-<c:out value="${dollar}"/>"></i> <c:out value='${adultTotTax}' /></div>-->
              <div class="col-xs-6 price"><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${formattedTotalAdultFare}' /> </div>
            </div>
            </c:if>
            
            <c:if test="${booking.child > 0}">
            <fmt:formatNumber var="childTotFare" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.childFare)*(booking.child)   * (curRsponse)}' />
            <fmt:formatNumber var="childTotTax" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.childTax+totMco1)*(booking.child) * (curRsponse)}' />
            <fmt:formatNumber var="formattedTotalChildFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.childFare+booking.fare.childTax+totMco1)*(booking.child) * (curRsponse)}" />
            <div class="row"><!--Data-->
              <div class="col-xs-6"><c:out value='${booking.child}' /> x Child</div>
             <!-- <div class="col-xs-2"><c:out value='${booking.child}' /></div>
              <div class="col-xs-3"><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${childTotFare}' /></div>
              <div class="col-xs-3"><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${childTotTax}' /></div>-->
              <div class="col-xs-6 price"><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${formattedTotalChildFare}' /></div>
            </div>
            </c:if>
            
            <c:if test="${booking.infant > 0}">
            <fmt:formatNumber var="infantTotFare" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.infantFare)*(booking.infant)   * (curRsponse)}' />
            <fmt:formatNumber var="infantTotTax" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.infantTax+totMco1)*(booking.infant) * (curRsponse)}' />
            <fmt:formatNumber var="tinfantFare" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.infantFare+booking.fare.infantTax+totMco1)*(booking.infant) * (curRsponse)}' />
            <div class="row"><!--Data-->
              <div class="col-xs-6"><c:out value='${booking.infant}' /> x Infant <sup>LAP</sup></div>
             <!-- <div class="col-xs-2"><c:out value='${booking.infant}' /></div>
              <div class="col-xs-3"><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value="${infantTotFare}" /></div>
              <div class="col-xs-3"><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${infantTotTax}' /></div>-->
              <div class="col-xs-6 price"><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value="${tinfantFare}" /></div>
            </div>
            </c:if>
            
            <c:if test="${booking.infantWs > 0}">
            <fmt:formatNumber var="infantwsTotFare" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.infantWsFare)  * (curRsponse)}'/>
            <fmt:formatNumber var="infantwsTotTax" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.infantWsTax+totMco1)  * (curRsponse)}' />
            <fmt:formatNumber var="tinfantwsFare" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.infantWsFare+booking.fare.infantWsTax+totMco1)*(booking.infantWs) * (curRsponse)}'/>
            <div class="row">
              <div class="col-xs-6"><c:out value='${booking.infantWs}' /> x Infant <sup>SEAT</sup></div>
             <!-- <div class="col-xs-2"><c:out value='${booking.infantWs}' /></div>
              <div class="col-xs-3"><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${infantwsTotFare}' /></div>
              <div class="col-xs-3"><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${infantwsTotTax}' /></div>-->
              <div class="col-xs-6"><i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value="${tinfantwsFare}" /></div>
            </div>
            </c:if>
            
            <c:if  test="${utmSource ==  'OffLine'}">
	          <div class="coupon_code row">
	            <div class="col-xs-8"> <a href="javascript:void(0);" class="agentfees text-red"> Agent Fees <i class="fa fa-angle-down"></i></a>
	             <span class="agentDiv" style="display:none;">
	              <form:input  path="agentFees" id="agFees"   class="text-box card_type agentAmont" type="text"  name="agentFees"/>
	              <div class="apply_btn" id="agFeesAdd" onClick="applyAgentfees('Y');">Apply</div>
	              <div class="apply_btn" id="agFeesRem" style="display: none;" onClick="applyAgentfees('N');">Remove</div>
	              <div id="agfApply" style="display:none; clear:both;"> <span>Click on apply </span> </div>
	              <div style="clear:both;"><span id="agfMessage"></span></div>
	              </span> </div>
	            <div class="col-xs-4 text-right" id="agFeesDis"> <i class="fa fa-<c:out value="${dollar}"/>"></i><span id="agFeesDisAmt">0.0</span> </div>
	          </div>
	        </c:if>
            <form:hidden id="fareAgentFees" path="fare.agentFees" value="0.0"/> 
            <input type="hidden" value="0.00" id="grandTotalMacpSet" />
            <input type="hidden" value="${booking.fare.seatAmt}" id="seatValue" />


        </div>
        

 
      </div>
    </div>
    </div>
    </div>

    <div class="container">
        <div class="row">
            
            <div class="col-sm-5 col-sm-push-7">
              <div class="price-block-section">                  
                  <input type="hidden" value="0.0" id="couponAmt" ng-model="couponAmt" ng-value="couponAmt" ng-init="couponAmt='0.0'" />
                   <!-- Display Luggage -->
                   <div class="row" id="luggdisplay_L" style="display: none; position: relative;"><!--Luggage 1-->
                    <div class="col-xs-6 text-left">Luggage Fees</div> 
                   
                    <div class="col-xs-6"><i class="fa fa-<c:out value="${dollar}"/>"></i><span id="lugg_L"></span></div>
                  </div>
                  <div class="row" id="luggdisplay_O" style="display: none; position: relative;"><!--Luggage 2-->
                    <div class="col-xs-6 text-left">Outward Luggage Fees</div> 
                    <div class="col-xs-6"><i class="fa fa-<c:out value="${dollar}"/>"></i><span id="lugg_O"></span></div>
                  </div>
                  <div class="row" id="luggdisplay_R" style="display: none; position: relative;"><!--Luggage 3-->
                    <div class="col-xs-6 text-left">Return Luggage Fees</div> 
                    <div class="col-xs-6"><i class="fa fa-<c:out value="${dollar}"/>"></i><span id="lugg_R"></span></div>
                  </div>
                  <!-- End Display Luggage -->
                  
                   
                    <c:set var="RKQTY" value='${(booking.infantWs+booking.infant+booking.child+booking.adult)}' />
                    <input type="hidden" id="totPax" value="${booking.infantWs+booking.infant+booking.child+booking.adult}" ng-model="totPax" ng-value="totPax" ng-init="totPax='${booking.infantWs+booking.infant+booking.child+booking.adult}'" />
                    <input type="hidden" id="macpAmt" value="${booking.fare.macp}" ng-model="macpAmt" ng-value="macpAmt" ng-init="macpAmt='${booking.fare.macp}'" />
                  <c:if test="${booking.discountAmt ne '0.0'}">
                  <div class="row"><!--Coupon-->
                    <div class="col-xs-6 text-left">${booking.discountType}</div> 
                    <div class="col-xs-6">-<i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${booking.discountAmt}' /></div>
                  </div>
                  </c:if>
                   
                  <!-- <div class="row">Coupon
                    <div class="col-xs-5 text-left">Travel Coupon Discount</div> 
                    <div class="col-xs-4"></div> 
                    <div class="col-xs-3">$110</div>
                  </div> -->
                  
                  <%-- <div class="coupon_code row" ng-disabled="isDisabled">
			          <div class="col-xs-9 text-left" ng-disabled="isDisabled"> <a href="" ng-model="collapsed" ng-click="collapsed=!collapsed;openCoupons();" id="couponHave">Have Coupon Code <span class="fa fa-angle-double-down"></span></a> <span style="display:block;" id="couponHave1"></span> <span id="CouponInp" ng-show="collapsed">
			            <input type="hidden" id="couponsType" value="X"/>
			            <input type="hidden" id="couponsValue" value="X"/>
			            <form:input  path="couponsCode" id="couponsCode" ng-disabled="isDisabled" ng-model="selectedCoupons" class="text-box card_type" type="text"  name="couponsCode" data-val-length-min="5" data-val-length-max="80" data-val="true"/>
			            <div class="apply_btn" ng-click="checkCoupons('X');" ng-disabled="isDisabled"><span ng-disabled="isDisabled" id="couponApply">{{subscribeButton}}</span></div>
			            <div id="popApply" style="display:none; clear:both;"> <span>Click on apply to avail this coupon</span> </div>
			            <div style="clear:both; text-align: left;"><span id="couponMessage"></span></div>
			            </span> 
			          </div>
			          <div class="col-xs-3 text-center" id="Coupon" ng-show="collapsed"> - <i class="fa fa-<c:out value="${dollar}"/>"></i><span id="couponAmtPlan">0.0</span> </div>
			      </div> --%>
			      
			      <div class="row feedetail" id="seatPriceid" style="display: none; position: relative;">
			          <div class="col-xs-6"> Seat Price </div>
			          <div class="col-xs-6 text-right" id="seatPriceidVal"> </div>
			      </div>

                  <div class="row pt-total" ><!--Total Cost-->
                    <div class="col-xs-6 text-left">Final Total Price</div>  
                    <div class="col-xs-6" id="publishedFare">
                     <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal}" />
                     <fmt:formatNumber var="publishedTotFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal * curRsponse }" />
                     <i class="fa fa-<c:out value="${dollar}"/>"></i><c:out value='${publishedTotFare}'/>
                    </div>
                  </div>
                  
                  <a id="fixed_price" class="mobile_price_fixed visible-xs">
			        <div class="col-xs-6 text-left"> <b>Final Total Price:</b> </div>
					<span class="view-detail">+ view detail</span>
			        <div class="col-xs-6 text-right" id="publishedFareMobile">
			          <fmt:formatNumber var="publishedmTotFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal * curRsponse }" />
			          <h4> &nbsp;&nbsp;<i class="fa fa-<c:out value="${dollar}"/>"></i>
			            <c:out value='${publishedmTotFare}'/>
			          </h4>
			        </div>
			        <!-- <span class="view-detail">+ view detail</span>  -->
			      </a>
			      <c:if test='${xchangeCurrencyCode  != "GBP" }'>
			      <div class="pricetotal">
		              <div class="col-xs-8 no-padding"> <b>Total charge in ${xchangeCurrencyCode}:</b> </div>
		              <div class="col-xs-4 text-right no-padding" id="publishedFareXe"> 
		                <b>
		                <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal}" />
		                <h4><i class="fa fa-<c:out value="${dollar}"/>"/></i>
		                  <c:out value='${publishedFare}'/>
		                </h4>
		                </b> 
		              </div>
		            </div>
		            </c:if>
                  
                  

              </div>
            </div>
			
            <div class="col-sm-7 col-sm-pull-5">
             <c:choose>
              <c:when test='${xchangeCurrencyCode  == "GBP" }'>
                <div class="policy-content"> <b>Please Note: </b>All Fares displayed are quoted in ${xchangeCurrencyCode} and inclusive of base fare, taxes and all fees. A charge may incur for any changes in the ticket issued. Kindly check if you require a changeable ticket.</div>
              </c:when>
              <c:otherwise>
                <div class="pol1 policy-content"> <b>Please Note: </b> All Fares displayed are quoted in ${xchangeCurrencyCode} and inclusive of base fare, taxes and all fees.</div>
                <div class="pol2 policy-content">
	               <fmt:formatNumber var="publishedFaress" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal * curRsponse}" />
	               <b>Please Note:</b> Your Credit/Debit Cards will be charged in GBP for a total amount of <span id="publishedFareMsg"><i class="fa fa-dollar"/></i>
                   <c:out value='${publishedFare}'/>
                    </span><br>
                </div>
              </c:otherwise>
             </c:choose>
              <c:if test="${booking.flight.isFusionFare == true}">
                <div class="policy-content"> <span class="visible-xs">ComboFare</span><p> Your fare is a combination of two one-way tickets,each subject to its own rules and restrictions.Any change or cancelation in any flight would not alter the other one.Changes to the other flight may incur a charge. </p></div>
              </c:if> 
            </div>
        </div>

    </div>

    


  </div>
    <!--Top Price Summery End-->

<!--- Header Section End---->
<div class="container">
  <div class="top-content">
    <div class="row">
      <div class="col-sm-12">
        <div class="go-back" onClick="goBack();"> <i class="fa fa-angle-left" aria-hidden="true"></i> Go Back </div>
         </div> 
    </div>
  </div>
</div>
<!--- Main Section---->




	  
	  
<%String classes="Economy"; %>
<%String airlineCode="X";
  String UAAirline="OO";
  String ResDesignCode="XX";%>
<c:forEach items="${searchListWrapper}" var="search" varStatus="se">
  <c:set var="classes" value="${search.cabinType}" scope="page" />
  <c:set var="airlineCode" value="X" scope="page"/>
  <c:set var="depart" value="${fn:split(search.travelDate,'T')}"/>
  <c:set var="ageDate" value="${depart[0]}" scope="page"/>
  <c:set var="rageDate" value="${depart[0]}" scope="page"/>
  <c:choose>
    <c:when test="${search.tripType=='2'}">
      <c:set var="returns" value="${fn:split(search.returnDate,'T')}"/>
      <c:set var="rageDate" value="${returns[0]}" scope="page"/>
    </c:when>
  </c:choose>
  
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

</c:forEach>
<!----Flight Selection Nav ends------------>

<input type="hidden" id="ageDate" value="${ageDate}" />
<input type="hidden" id="rageDate" value="${rageDate}" />

 <input type="hidden" value="${bookingWrapper.couponsAmt}" id="couponsAmtId" />
 <input type="hidden" value="${bookingWrapper.couponsCode}" id="couponsCodeId" />
 
 
<div class="container">
 
    <div class="row">
        <!---Main Result Area--->
        <div class="col-md-12 col-md-9">

  <!-- flights Itnery -->
  <div class="row">
    <div id="flight-search" class="col-xs-12 tab-pane fade in active">
      <!--Departure-->
      <div class="result" >
        <h4 class="sub_header"> 
		  <div class="tickets-left">
		  <c:if test="${booking.flight.maxSeats <=5 }">
                        <div class="ticket-text"> <span class="tickets"> Only <c:out value='${booking.flight.maxSeats}' /> tickets left at this price! </span> </div>
						     </c:if>
							 <c:if test="${booking.flight.maxSeats > 5 }">
                        <div class="ticket-text"> <span class="lightGray_color total-taxs"> Only 5 tickets left at this price!</span></div>
                        </c:if>
					  </div>
		<a class="btn hide-btn collapsed pull-right" role="button" data-toggle="collapse" data-target="#flightdetails" aria-expanded="false" aria-controls="flightdetails"> <span id="intro-switch">Hide <i class="fa fa-angle-down"></i></span> </a> <i class="fa-itinerary"></i> <strong>Your Itinerary</strong> - <span class="small-text hidden-xs hidden-sm">Review Trip Details and Book</span>
		
		<c:if test="${bookingWrapper.couponsAmt > 0}">
						<fmt:formatNumber var="fxlCouponAmt" type="number" minFractionDigits="2" maxFractionDigits="2" value="${bookingWrapper.couponsAmt * curRsponse}"/>
						<span class="blink_me">Woo-Hoo! You Just Saved <i class="fa fa-<c:out value="${dollar}"/>"></i>${fxlCouponAmt}</span>
						</c:if>
						
          <c:if  test="${utmSource ==  'OffLine'}">--
            <c:if test="${booking.flight.gds == 1}">Sabre </c:if>
            <c:if test="${booking.flight.gds == 0}">Amadeus </c:if>
            <c:if test="${booking.flight.gds == 2}">Skybird </c:if>
            <c:if test="${booking.flight.gds == 3}">Transam </c:if>
            <c:if test="${booking.flight.gds == 4}">Gtt Sabre </c:if>
            <c:if test="${booking.flight.gds == 9}">Travel Fusion </c:if>
          </c:if>
        </h4>
		
        <div id="flightdetails" class="collapse in">
          
		  <div class="depart" >
            <!-- First Segment -->
            <% int departFlights=0; int departFli=0; %>
            <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl">
              <c:if test="${flight.isReturnFlight ==  false}">
                <% departFlights=departFlights+1; %>
                <c:set var="departSeg" value="${departSeg+1}" scope="page" />
                  <c:if test = "${!fn:contains(departSegAirline, flight.displayAirline.code)}">
            <c:if test="${departSeg == 1 }">
              <c:set var="departSegAirline" value="${flight.displayAirline.code}" scope="page" />
            </c:if>
             <c:if test="${departSeg > 1 }">
              <c:set var="departSegAirline" value="${departSegAirline},${flight.displayAirline.code}" scope="page" />
                </c:if>
              </c:if>
              
              </c:if>
            </c:forEach>
            <c:set var="eft" value="${booking.flight.tft}" scope="page" />
            <c:set var="reft" value="${booking.flight.trft}" scope="page" />
            <c:set var="elt" value="${booking.flight.lot}" scope="page" />
            <c:set var="relt" value="${booking.flight.lrot}" scope="page" />
            <c:set var="efd" value="${booking.flight.tfd}" scope="page" />
            <c:set var="refd" value="${booking.flight.trfd}" scope="page" />
            <div class="depart-section" >
			 <div class="row">
                      <div class="col-sm-12">
                        <h4>Departure
						<c:if test="${booking.priceDiff > 5.0 }">
						<span class="save_fare"> <i class="fa fa-star"></i> Save <i class="fa fa-<c:out value="${dollar}"/>"></i><fmt:formatNumber  type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.priceDiff * curRsponse}" /> by selecting this 
                      
                      option!  <span class="save-fare-info"> <a href="javascript:void(0);"><i class="fa fa-info"></i></a> <span class="save-fare-detail right"><i class="arrow"></i>
                              ${data.siteName} takes pride in the fact that we help our customers save money. We do this by giving our customers the freedom to choose cheaper flights which are scheduled for alternate dates or from nearby airports. The amount saved is the difference between the cheapest flight on the previously selected date and the flights scheduled on the alternate date or nearby airport.
                              </span>
                   </span></span>
						</c:if>
						</h4>
                      </div>
                    </div>
              <div class="row">
                <div class="col-sm-12">
                  <c:if test="${booking.flexSearch ==  'yes'}">
                    <div class="lightGray_color total-taxs text-red"> <i class="fa fa-calendar"></i> <b>This is a Flexible Date, Please Verify the Date. </b></div>
                  </c:if>
                  <c:if test="${booking.nearBy==  'yes' || booking.nearByTo ==  'yes'}">
                    <div class="lightGray_color total-taxs text-red"> <i class="fa fa-map-marker"></i> <b>This is a Nearby Airport, Please Verify the Airport.</b></div>
                  </c:if>
                </div>

						
              </div>
			  
			    <!--Title here -->

              <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl">
                <c:if test="${flight.isReturnFlight ==  false}">
				<c:set var="departSegUpa" value="${departSegUpa+1}" scope="page" />
				<c:set var="flightIti" value="${flightIti} ${flight.originAirport.airportCode} - ${flight.destinationAirport.airportCode}" scope="page" />
                  <c:if test="${airlineCode ==  'X'}">
                    <c:set var="airlineCode" value="${flight.airline.code}" scope="page"/>
                  </c:if>
                  <div class="dep-mar border-dotted" > 
				  <div class="col-md-12 col-lg-12">
				   
				  
				 
                    <div class="row">
					 
					 <!--<div class="col-sm-1">
					 	
						 <fmt:parseNumber var = "routeScore" type = "number" value = "${flight.legsAmenities.routeScore}" />
						 <c:if test="${routeScore >= 0 }">
							<div class="flight_score_left {{happy_img('${flight.legsAmenities.routeScore}')}}">
                              <div class="flight-score">${flight.legsAmenities.routeScore}</div>
                              <img class="flight-score-icon" src="/resources/flight-result/images/route_happy/{{happy_img('${flight.legsAmenities.routeScore}')}}.png" alt="Route Happy">
                              <p>${flight.legsAmenities.routeScoreWord}</p>
                            </div>
                            </c:if>
							
					 </div>-->
					 
                      <div class="col-sm-4 col-xs-8">
                        
						<div class="flight-icon">
						<div class="major-airline">
                          <c:choose>
                            <c:when test="${flight.displayAirline.code == 'DLL'}"> <a href="javascript:void(0);"><img src="/resources/images/airline/mal.png"></a> <span class="fare_detail airfare">
                              <p>The airfares offered here are very cheap for which we are not authorized to reveal the name of the airline you select. But once your reservation is confirmed, we will reveal you the carrier's name. We also assure you that you will not be disappointed by the airline and its offer. For further details, review our Terms & Conditions. </p>
                              </span> </c:when>
                            <c:otherwise> <img src="/resources/images/airline/<c:out value='${fn:toLowerCase(flight.displayAirline.code)}' />.gif"> </c:otherwise>
                          </c:choose>
                        </div>
						
						
							
						</div>
						
                        <div class="airlines">
                          <div class="airlines-name" style="text-transform: capitalize;">
                            <c:choose>
                              <c:when test="${flight.displayAirline.code == 'DLL'}"> Major Airlines </c:when>
                              <c:otherwise>
                                <c:out value='${flight.displayAirline.name}' />
                              </c:otherwise>
                            </c:choose>
                          </div>
                          <div class="flight-no">Flight No.: <span class="num">
                            <c:out value='${flight.flightCode}' />
                            </span><c:if test="${booking.flight.gds != 9}"> &nbsp;| EQP-
                            <c:out value='${flight.equipmentType}' />
                            <c:if test="${flight.equipmentType != flight.equipmentTypeDes}"> <span class="combi-fare"> <a href="javascript:void(0);"><i class="fa fa-info"></i></a> <span class="combi_detail left"><i class="arrow"></i>
                              <c:out value='${flight.equipmentTypeDes}' />
                              </span> </span> </c:if>
							  <c:if test="${fn:contains(flight.equipmentTypeDes, 'TRAIN')}">
                           <div>Note: This is a Train Service</div>
							 </c:if>
							 <c:if test="${fn:contains(flight.equipmentType, 'BUS')}">
                               <div>Note: This is a Bus Service</div>
							 </c:if>
							 </c:if>
                          </div>
						  
						   <c:choose>
                          <c:when test="${flight.airline.code != flight.operatingCarrier.code}">
                            <div class="flight-no flight_operator"> <span>Operated by:
                              <c:choose>
                                <c:when test="${flight.operatingCarrier.code == 'DL'}"> Major Airlines </c:when>
                                <c:otherwise>
                                  <c:out value='${flight.operatingCarrier.name}' />
                                </c:otherwise>
                              </c:choose>
                              </span> </div>
                            <%-- <div class="col-sm-4 text-center">
											   <div class="layover"><span><i class="fa fa-clock-o" aria-hidden="true"></i></span> <em><c:out value='${elt}' /> layover in <c:out value='${flight.destinationAirport.cityName}' /> (<c:out value='${flight.destinationAirport.airportCode}' />) </em></div>
											 </div> --%>
                          </c:when>
                        </c:choose>
						
						  <!-- flights aminities start here -->
						 
						   <c:if test="${routeScore >= 0 }">
							<div class="flight_score_right">
							  <ul>
								<li class="{{entertainment['${flight.legsAmenities.entertainmentText}']}}"> <span class="icon_entertainment"></span>
								  <div ng-if="entertainment['${flight.legsAmenities.entertainmentText}'] != 'disable'" class="aminities_detail row-flex">
									<div class="left"> <span class="icon_entertainment"></span> </div>
									<div class="right_discription"> ${flight.legsAmenities.entertainmentText} </div>
								  </div>
								</li>
								<li class="{{food['${flight.legsAmenities.freshFoodText}']}}"> <span class="icon_food"></span>
								  <div ng-if="food['${flight.legsAmenities.freshFoodText}'] != 'disable'" class="aminities_detail row-flex">
									<div class="left"> <span class="icon_food"></span> </div>
									<div class="right_discription">${flight.legsAmenities.freshFoodText} </div>
								  </div>
								</li>
								<li class="{{layout['${flight.legsAmenities.layoutText}']}}"> <span class="icon_layout"></span>
								  <div ng-if="layout['${flight.legsAmenities.layoutText}'] != 'disable'" class="aminities_detail row-flex">
									<div class="left"> <span class="icon_layout"></span> </div>
									<div class="right_discription"> ${flight.legsAmenities.layoutText} </div>
								  </div>
								</li>
								<li class="{{powerAndUsb['${flight.legsAmenities.powerText}']}}"> <span class="icon_power"></span>
								  <div ng-if="powerAndUsb['${flight.legsAmenities.powerText}'] != 'disable'" class="aminities_detail row-flex">
									<div class="left"> <span class="icon_power"></span> </div>
									<div class="right_discription"> ${flight.legsAmenities.powerText} </div>
								  </div>
								</li>
								<li> <span class="icon_seat"></span>
								  <div class="aminities_detail row-flex">
									<div class="left"> <span class="icon_seat"></span> </div>
									<div class="right_discription"> ${flight.legsAmenities.seatText}</div>
								  </div>
								</li>
								<li class="{{wifi['${flight.legsAmenities.wiFiText}']}}"> <span class="icon_wifi"></span>
								  <div ng-if="wifi['${flight.legsAmenities.wiFiText}'] != 'disable'" class="aminities_detail row-flex">
									<div class="left"> <span class="icon_wifi"></span> </div>
									<div class="right_discription"> ${flight.legsAmenities.wiFiText} </div>
								  </div>
								</li>
							  </ul>
							</div>
							</c:if>
							<!-- flights aminities end here -->
                        </div>
                      </div>
                      <c:set var="UAAirline" value="${flight.displayAirline.code}" scope="page"/>
                      <c:if test="${ResDesignCode != 'N'}">
                        <c:set var="ResDesignCode" value="${flight.resDesignCode}" scope="page"/>
                      </c:if>
                      <div class="col-sm-3 col-xs-4 col-sm-push-5">
                        <div class="class text-right">
                          <div class="class-stop one-stop-air"> <strong>
                            <c:choose>
                              <c:when test="${flight.techStops == '0'}">Non Stop</c:when>
                              <c:when test="${flight.techStops == null}">Non Stop</c:when>
                              <c:when test="${flight.techStops == '1'}"><u>One Stop</u>
                                <c:forEach items="${flight.techStopDetails}" var="tech" varStatus="ts"> <span class="one-stop-air-hover popover left"><i class="icon icon-arrow arrow"></i> <em>Stops In</em><br/>
                                  <em> ${tech.OriginAirport.AirportCode}-${tech.OriginAirport.AirportName}</em><br/>
                                  <c:set var="dateTechArr" value="${fn:replace(tech.ArrivalTime,'T', ' ')}" />
                                  <fmt:parseDate value="${dateTechArr}" var="techArr" pattern="yyyy-MM-dd HH:mm:ss" />
                                  <c:set var="dateTechDep" value="${fn:replace(tech.DepartureTime,'T', ' ')}" />
                                  <fmt:parseDate value="${dateTechDep}" var="techDep" pattern="yyyy-MM-dd HH:mm:ss" />
                                  Arr <em class="time">
                                  <fmt:formatDate value="${techArr}" pattern="HH:mm" />
                                  </em>Dep <em class="time">
                                  <fmt:formatDate value="${techDep}" pattern="HH:mm" />
                                  </em><br/>
                                  </span> </span> </c:forEach>
                              </c:when>
                              <c:when test="${flight.techStops == '2'}"><u>Two Stop</u> <span class="one-stop-air-hover popover left">
                                <c:forEach items="${flight.techStopDetails}" var="tech" varStatus="ts"> <i class="icon icon-arrow arrow"></i> <em>Stops In</em><br/>
                                  <em> ${tech.OriginAirport.AirportCode}-${tech.OriginAirport.AirportName}</em><br/>
                                  <c:set var="dateTechArr" value="${fn:replace(tech.ArrivalTime,'T', ' ')}" />
                                  <fmt:parseDate value="${dateTechArr}" var="techArr" pattern="yyyy-MM-dd HH:mm:ss" />
                                  <c:set var="dateTechDep" value="${fn:replace(tech.DepartureTime,'T', ' ')}" />
                                  <fmt:parseDate value="${dateTechDep}" var="techDep" pattern="yyyy-MM-dd HH:mm:ss" />
                                  Arr <em class="time">
                                  <fmt:formatDate value="${techArr}" pattern="HH:mm" />
                                  </em>Dep <em class="time">
                                  <fmt:formatDate value="${techDep}" pattern="HH:mm" />
                                  </em><br/>
                                </c:forEach>
                                </span></c:when>
                              <c:otherwise>Non Stop</c:otherwise>
                            </c:choose>
                            </strong> <span>
                            <c:if test="${flight.cabinClass != booking.flight.bookingClass}">
									<span class="coach-hilight">
								</c:if>
								<c:if test="${flight.cabinClass == booking.flight.bookingClass}">
									<span>
								</c:if>
										
								<c:if test="${flight.cabinClass == '2'}">
									Premium Economy <c:if test="${flight.cabinCategory != ''}">
									         - <c:out value="${flight.cabinCategory}"/>
											  </c:if>
									</c:if>
									<c:if test="${flight.cabinClass == '3'}">
									Business
									</c:if>
									<c:if test="${flight.cabinClass == '4'}">
									First
									</c:if>
									<c:if test="${flight.cabinClass == '6'}">
									Basic Economy
									</c:if>
									<c:if test="${flight.cabinClass == '7'}">
									Lite Economy
								</c:if>
									
									</span>
                            </span>
                          		
                          </div>
                        </div>
						 <div class="basic-class">
						 <div>
						 <span  class="hidden-xs">
					  <c:if test="${flight.cabinClass == '1'}">
									<c:if test="${flight.cabinCategory != ''}">
									         <c:out value="${flight.cabinCategory}"/>-</c:if> 
											 Economy<c:if test="${flight.cabinCategory != ''}">
											 <span class="basic-info"> <a href="javascript:void(0);"><i class="fa fa-info"></i></a> <span class="basic-info_detail left "><i class="arrow"></i> <p>Basic Economy is a great choice for travelers who want to save some money. Traveling Basic Economy entails-</p>

											<ul>
<c:if test="${flight.displayAirline.code != 'AA'}"><li>No carry-ons other than a small personal item</li></c:if>
<c:if test="${flight.displayAirline.code == 'AA'}"><li>One carry-on item with small personal item allowed</li></c:if>
<c:if test="${flight.displayAirline.code == 'AA'}"><li>The carry-on item must fit in the overhead bin (Size: 56 x 36 x 23 cm)</li></c:if>
<c:if test="${flight.displayAirline.code == 'AA'}"><li>The personal item must fit under the seat (Size:45 x 35 x 20 cm)</li></c:if>
<c:if test="${flight.displayAirline.code != 'AA'}"><li>No access to overhead luggage bins</li></c:if>
<li>No check in baggage allowed</li>
<li>No refunds</li>
<li>No seat selection</li>
</ul></span> </span>
											 
											  </c:if> 
									</c:if>
									</span>
									
									<fmt:parseNumber type="number" integerOnly="true" var="fd_minutes" value="${flight.flightDuration % 60}" />
						        <fmt:parseNumber type="number" integerOnly="true" var="fd_t_hour" value="${flight.flightDuration / 60}" />						       
						        <fmt:parseNumber type="number" integerOnly="true" var="fd_hour" value="${fd_t_hour % 60}" />						        
                    			<c:if test="${flight.gds == '1' || flight.gds == '0'}">
									<span class="trip-time" >
										  			
									<span class="hidden-xs">	/ </span><c:out value='${fd_hour}' />h <c:out value='${fd_minutes}' />m
										
									</span>
								</c:if>
								
									</div>
									
									  <div class="visible-xs">
									 <c:if test="${flight.cabinClass == '1'}">
									<c:if test="${flight.cabinCategory == ''}">
									Economy
									</c:if> 
									</c:if> 
									 </div>
									
								
									</div>
					  
					  			<!--<c:if test="${flight.baggage != '' && flight.gds != '9'}">
									<c:if test="${flight.baggage == '0P'}">
									  <div class="basic-space-top"><i class="fa fa-suitcase text-red" aria-hidden="true"></i> <span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: 0P</a> <span class="baggage_detail"><i class="arrow"></i> <c:out value='Hand Luggage Only'/></span> </span></div>
									</c:if>
									<c:if test="${flight.baggage != '0P'}">
									  <div class="basic-space-top"><i class="fa fa-suitcase text-red" aria-hidden="true"></i><span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: ${flight.baggage}</a> <span class="baggage_detail"><i class="arrow"></i> The baggage information is for check-in baggage only and is just for reference. Please check with airline before check-in. 1 piece baggage is equivalent to 23 kgs or 50 lbs for adult/child and 10 kgs or 22 lbs for infants</span> </span></div>
									</c:if>
									
									</c:if>-->
						
                      </div>
					 
					  
                      <div class="col-sm-5 col-xs-12 col-sm-pull-3">
                        <div class="row">
                          <div class="col-xs-6">
                            <div class="city">
                              <c:set var="dateParts" value="${fn:replace(flight.departureTime,'T', ' ')}" />
                              <fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                              <div class="time">
                                <fmt:formatDate value="${dateObject }" pattern="HH:mm" />
                                
								
								<c:choose>
										<c:when test="${booking.flexSearch ==  'yes' && fl.index == 0}">
											<span class="date text-red">
                                <fmt:formatDate value="${dateObject }" pattern="EEE, dd MMM" />
                                </span> <i title="This is a flexible date" class="fa fa-calendar text-red"></i>
										</c:when>
										<c:otherwise>
												<span class="date">
                                <fmt:formatDate value="${dateObject }" pattern="EEE, dd MMM" />
                                </span>
										</c:otherwise>
									</c:choose>
									
									
								</div>
                              <c:set var="dateParts" value="${fn:replace(flight.arrivalTime,'T', ' ')}" />
                              <fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                              <div class="time">
                                <fmt:formatDate value="${dateObject }" pattern="HH:mm" />
                                <span class="date">
                                <fmt:formatDate value="${dateObject }" pattern="EEE, dd MMM" />
                                </span> </div>
                            </div>
                          </div>
                          <div class="col-xs-6">
                            <div class="city1">
                              <div class="city-name text-right-mobile"> 
							  <span title="<c:out value='${flight.originAirport.cityName}' />, <c:out value='${flight.originAirport.airportName}' /> (<c:out value='${flight.originAirport.airportCode}' />)">
								
								   <c:if test="${flight.nearBy == 'yes'}"><i class="fa fa-map-marker text-red" title="This is nearby airport"></i></c:if>
								<c:if test="${flight.nearBy == 'yes'}"><span class="text-red"><strong>
                                <c:out value='${flight.originAirport.airportCode}' />
                                </strong>
                                <c:out value='${flight.originAirport.cityName}' />
                                ,
                                <c:out value='${flight.originAirport.airportName}' /></span></c:if>
								<c:if test="${flight.nearBy == 'no'}"><strong>
                                <c:out value='${flight.originAirport.airportCode}' />
                                </strong>
                                <c:out value='${flight.originAirport.cityName}' />
                                ,
                                <c:out value='${flight.originAirport.airportName}' /></c:if>
								
                              </div>
                              <div class="city-name text-right-mobile" title="<c:out value='${flight.destinationAirport.cityName}' />, <c:out value='${flight.destinationAirport.airportName}' /> (<c:out value='${flight.destinationAirport.airportCode}' />)"> <c:if test="${flight.nearByTo == 'yes'}"><i class="fa fa-map-marker text-red" title="This is nearby airport"></i></c:if>
								<c:if test="${flight.nearByTo == 'yes'}"><span class="text-red"><strong>
                                <c:out value='${flight.destinationAirport.airportCode}' />
                                </strong>
                                <c:out value='${flight.destinationAirport.cityName}' />
                                ,
                                <c:out value='${flight.destinationAirport.airportName}' /></span></c:if>
								<c:if test="${flight.nearByTo == 'no'}"><strong>
                                <c:out value='${flight.destinationAirport.airportCode}' />
                                </strong>
                                <c:out value='${flight.destinationAirport.cityName}' />
                                ,
                                <c:out value='${flight.destinationAirport.airportName}' /></c:if>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>
				   <c:if	test="${flight.layoverTime != '00:00'}">
                 <c:set var="layHr" value="${fn:split(flight.layoverTime,':')[0]}" />
				<c:set var="layMin" value="${fn:split(flight.layoverTime,':')[1]}" />
				    <span class="seprate-layover"><i class="fa fa-clock-o" aria-hidden="true"></i> ${layHr} hr ${layMin} min layover in <c:out value='${flight.destinationAirport.cityName}' /> (<c:out value='${flight.destinationAirport.airportCode}' />)</span>
				   </c:if>
                  </div>
                </c:if>
              </c:forEach> 
			 
			  <div class="col-xs-12">
			   
              <ul class="layover_time">
			  <li class="hidden-xs">
			  <c:if test="${fn:indexOf(booking.flight.segments[0].baggage, '0P') > -1}">
			<span><i class="fa fa-suitcase text-red" aria-hidden="true"></i> <span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: 0P</a> <span class="baggage_detail"><i class="arrow"></i> Hand Luggage Only</span> </span></span>
            </c:if>
			<c:if test="${booking.flight.segments[0].baggage != '' && booking.flight.segments[0].baggage != '0P'}">
			<span class="basic-space-top"><i class="fa fa-suitcase text-red" aria-hidden="true"></i> <span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: ${booking.flight.segments[0].baggage}</a> <span class="baggage_detail"><i class="arrow"></i> The baggage information is for check-in baggage only and is just for reference. Please check with airline before check-in. 1 piece baggage is equivalent to 23 kgs or 50 lbs for adult/child and 10 kgs or 22 lbs for infants</span> </span></span>
            </c:if>
			</li>
			
			  <li class="newbaggage_fees"> 
			  
			  <c:choose>
	              <c:when test="${UAAirline == 'DL' || booking.flight.gds == 9}"> </c:when>
	              <c:otherwise>
	                <i class="fa fa-suitcase text-red" aria-hidden="true"></i><a class="visible-lg" onClick="window.open('/baggage-fees-info?airline=${departSegAirline}', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=900,height=600, screenX=50,screenY=50')" href="javascript: void(0);"> Baggage&nbsp;Fees </a> <a class="hidden-lg" href="javascript: void(0);" data-toggle="modal" data-target="#popup_baggage_fees">Baggage Fees</a>
	              </c:otherwise>
				</c:choose></li>
			
                <li><span>Flight Time</span> <span class="hidden-xs">:</span>
                  <c:out value='${eft}'/>
                </li>
                <c:if test="${elt != '0h 0m'}">
                  <li><span>Layover Time</span> <span class="hidden-xs">:</span>
                    <c:out value='${elt}'/>
                  </li>
                </c:if>
              
                <li><span>Total Trip Time </span> <span class="hidden-xs">:</span>
                  <c:out value='${efd}'/>
                </li>
              </ul>
			  </div>
			  
            </div>
            <% int returnFlights=0; %>
            <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl">
              <c:if test="${flight.isReturnFlight ==  true}">
              <% returnFlights=returnFlights+1; %>
              <c:if test = "${!fn:contains(retSegAirline, flight.displayAirline.code)}">
            <%   if(returnFlights == 1){ %>
              <c:set var="retSegAirline" value="${flight.displayAirline.code}" scope="page" />
             <%} %>
              <%   if(returnFlights > 1){ %>
              <c:set var="retSegAirline" value="${retSegAirline},${flight.displayAirline.code}" scope="page" />
               <%} %>
              </c:if>
              </c:if>
            </c:forEach>
            <!---------------------------------------Return------------------------->
            <% 
						int returnSize=0;
						if(returnFlights >= 1){ %>
            <div class="return-section" >
              
			  
			   <!--Title here -->
                    <div class="row">
                      <div class="col-sm-12">
                        <h4>Return</h4>
                      </div>
                    </div>
				
                <div class="row">
                <div class="col-sm-12">
			
				
                  <c:if test="${booking.flexSearchTo ==  'yes'}">
                    <div class="lightGray_color total-taxs text-red"> <i class="fa fa-calendar"></i><b> This is a Flexible Date, Please Verify the Date. </b></div>
                  </c:if>
                  <c:if test="${booking.nearBy ==  'yes' || booking.nearByTo ==  'yes'}">
                    <div class="lightGray_color total-taxs text-red"> <i class="fa fa-map-marker"></i><b> This is a Nearby Airport, Please Verify the Airport. </b></div>
                  </c:if>
                </div>
              </div>				
              <c:forEach items="${booking.flight.segments}" var="flight" varStatus="fl">
                <c:if test="${flight.isReturnFlight ==  true}">
				<c:set var="departSeg" value="${departSeg+1}" scope="page" />
                <c:set var="inboundIndex" value="${inboundIndex+1}" />
				<c:if test="${inboundIndex == 1}">
				<c:set var="flightIti" value="${flightIti} | " scope="page" />
				</c:if>
				<c:set var="flightIti" value="${flightIti} ${flight.originAirport.airportCode} - ${flight.destinationAirport.airportCode}" scope="page" />
                  <div class="dep-mar border-dotted2">
				   
				  <div class="col-md-12 col-lg-12">
				  
                    <div class="row">
					<!--<div class="col-sm-1">
						
						  <fmt:parseNumber var = "routeScore" type = "number" value = "${flight.legsAmenities.routeScore}" />
						<c:if test="${routeScore >= 0 }">
							<div class="flight_score_left {{happy_img('${flight.legsAmenities.routeScore}')}}">
                              <div class="flight-score">${flight.legsAmenities.routeScore}</div>
                              <img class="flight-score-icon" src="/resources/flight-result/images/route_happy/{{happy_img('${flight.legsAmenities.routeScore}')}}.png" alt="Route Happy">
                              <p>${flight.legsAmenities.routeScoreWord}</p>
                            </div>
                            </c:if>
							
					</div>-->
                      <div class="col-sm-4 col-xs-8">
					  <div class="flight-icon">
                        <div class="major-airline">
                          <c:choose>
                            <c:when test="${flight.displayAirline.code == 'DLL'}"> <a href="javascript:void(0);"><img src="/resources/images/airline/mal.png"></a> <span class="fare_detail airfare">
                              <p>The airfares offered here are very cheap for which we are not authorized to reveal the name of the airline you select. But once your reservation is confirmed, we will reveal you the carrier's name. We also assure you that you will not be disappointed by the airline and its offer. For further details, review our Terms & Conditions. </p>
                              </span> </c:when>
                            <c:otherwise> <img src="/resources/images/airline/<c:out value='${fn:toLowerCase(flight.displayAirline.code)}' />.gif"> </c:otherwise>
                          </c:choose>
                        </div>
						
						</div>
						
                        <div class="airlines">
                          <div class="airlines-name" style="text-transform: capitalize;">
                            <c:choose>
                              <c:when test="${flight.displayAirline.code == 'DLL'}"> Major Airlines </c:when>
                              <c:otherwise>
                                <c:out value='${flight.displayAirline.name}' />
                              </c:otherwise>
                            </c:choose>
                          </div>
                          <div class="flight-no">Flight No.: <span class="num">
                            <c:out value='${flight.flightCode}' />
                            </span><c:if test="${booking.flight.gds != 9}"> &nbsp; | EQP-
                            <c:out value='${flight.equipmentType}' />
                            <c:if test="${flight.equipmentType != flight.equipmentTypeDes}"> <span class="combi-fare"> <a href="javascript:void(0);"><i class="fa fa-info"></i></a> <span class="combi_detail left"><i class="arrow"></i>
                              <c:out value='${flight.equipmentTypeDes}' />
                              </span> </span> </c:if>
							  <c:if test="${fn:contains(flight.equipmentTypeDes, 'TRAIN')}">
                               <div>Note: This is a Train Service</div>
							 </c:if>
							  <c:if test="${fn:contains(flight.equipmentType, 'BUS')}">
                               <div>Note: This is a Bus Service</div>
							 </c:if>
							 </c:if>
                          </div>
						  
						   <c:choose>
                          <c:when test="${flight.airline.code != flight.operatingCarrier.code}">
                            <div class="flight-no flight_operator"> <span>Operated by:
                              <c:choose>
                                <c:when test="${flight.operatingCarrier.code == 'DL'}"> Major Airlines </c:when>
                                <c:otherwise>
                                  <c:out value='${flight.operatingCarrier.name}' />
                                </c:otherwise>
                              </c:choose>
                              </span> </div>
                          </c:when>
                        </c:choose>
						  <!-- flights aminities start here -->
						
						  <c:if test="${routeScore >= 0 }">
							<div class="flight_score_right">
							  <ul>
								<li class="{{entertainment['${flight.legsAmenities.entertainmentText}']}}"> <span class="icon_entertainment"></span>
								  <div ng-if="entertainment['${flight.legsAmenities.entertainmentText}'] != 'disable'" class="aminities_detail row-flex">
									<div class="left"> <span class="icon_entertainment"></span> </div>
									<div class="right_discription"> ${flight.legsAmenities.entertainmentText} </div>
								  </div>
								</li>
								<li class="{{food['${flight.legsAmenities.freshFoodText}']}}"> <span class="icon_food"></span>
								  <div ng-if="food['${flight.legsAmenities.freshFoodText}'] != 'disable'" class="aminities_detail row-flex">
									<div class="left"> <span class="icon_food"></span> </div>
									<div class="right_discription">${flight.legsAmenities.freshFoodText} </div>
								  </div>
								</li>
								<li class="{{layout['${flight.legsAmenities.layoutText}']}}"> <span class="icon_layout"></span>
								  <div ng-if="layout['${flight.legsAmenities.layoutText}'] != 'disable'" class="aminities_detail row-flex">
									<div class="left"> <span class="icon_layout"></span> </div>
									<div class="right_discription"> ${flight.legsAmenities.layoutText} </div>
								  </div>
								</li>
								<li class="{{powerAndUsb['${flight.legsAmenities.powerText}']}}"> <span class="icon_power"></span>
								  <div ng-if="powerAndUsb['${flight.legsAmenities.powerText}'] != 'disable'" class="aminities_detail row-flex">
									<div class="left"> <span class="icon_power"></span> </div>
									<div class="right_discription"> ${flight.legsAmenities.powerText} </div>
								  </div>
								</li>
								<li> <span class="icon_seat"></span>
								  <div class="aminities_detail row-flex">
									<div class="left"> <span class="icon_seat"></span> </div>
									<div class="right_discription"> ${flight.legsAmenities.seatText}</div>
								  </div>
								</li>
								<li class="{{wifi['${flight.legsAmenities.wiFiText}']}}"> <span class="icon_wifi"></span>
								  <div ng-if="wifi['${flight.legsAmenities.wiFiText}'] != 'disable'"class="aminities_detail row-flex">
									<div class="left"> <span class="icon_wifi"></span> </div>
									<div class="right_discription"> ${flight.legsAmenities.wiFiText} </div>
								  </div>
								</li>
							  </ul>
							</div>
							</c:if>
							<!-- flights aminities end here -->
                        </div>
                      </div>
                      <c:set var="UAAirline" value="${flight.displayAirline.code}" scope="page"/>
                      <c:if test="${ResDesignCode != 'N'}">
                        <c:set var="ResDesignCode" value="${flight.resDesignCode}" scope="page"/>
                      </c:if>
                      <div class="col-sm-3 col-xs-4 col-sm-push-5">
                        <div class="class text-right">
                          <div class="class-stop one-stop-air"> <strong>
                            <c:choose>
                              <c:when test="${flight.techStops == '0'}">Non Stop</c:when>
                              <c:when test="${flight.techStops == null}">Non Stop</c:when>
                              <c:when test="${flight.techStops == '1'}"><u>One Stop</u>
                                <c:forEach items="${flight.techStopDetails}" var="tech" varStatus="ts"> <span class="one-stop-air-hover popover left"><i class="icon icon-arrow arrow"></i> <em>Stops In</em><br/>
                                  <em> ${tech.OriginAirport.AirportCode}-${tech.OriginAirport.AirportName}</em><br/>
                                  <c:set var="dateTechArr" value="${fn:replace(tech.ArrivalTime,'T', ' ')}" />
                                  <fmt:parseDate value="${dateTechArr}" var="techArr" pattern="yyyy-MM-dd HH:mm:ss" />
                                  <c:set var="dateTechDep" value="${fn:replace(tech.DepartureTime,'T', ' ')}" />
                                  <fmt:parseDate value="${dateTechDep}" var="techDep" pattern="yyyy-MM-dd HH:mm:ss" />
                                  Arr <em class="time">
                                  <fmt:formatDate value="${techArr}" pattern="HH:mm" />
                                  </em>Dep <em class="time">
                                  <fmt:formatDate value="${techDep}" pattern="HH:mm" />
                                  </em><br/>
                                  </span> </span> </c:forEach>
                              </c:when>
                              <c:when test="${flight.techStops == '2'}"><u>Two Stop</u> <span class="one-stop-air-hover popover left">
                                <c:forEach items="${flight.techStopDetails}" var="tech" varStatus="ts"> <i class="icon icon-arrow arrow"></i> <em>Stops In</em><br/>
                                  <em> ${tech.OriginAirport.AirportCode}-${tech.OriginAirport.AirportName}</em><br/>
                                  <c:set var="dateTechArr" value="${fn:replace(tech.ArrivalTime,'T', ' ')}" />
                                  <fmt:parseDate value="${dateTechArr}" var="techArr" pattern="yyyy-MM-dd HH:mm:ss" />
                                  <c:set var="dateTechDep" value="${fn:replace(tech.DepartureTime,'T', ' ')}" />
                                  <fmt:parseDate value="${dateTechDep}" var="techDep" pattern="yyyy-MM-dd HH:mm:ss" />
                                  Arr <em class="time">
                                  <fmt:formatDate value="${techArr}" pattern="HH:mm" />
                                  </em>Dep <em class="time">
                                  <fmt:formatDate value="${techDep}" pattern="HH:mm" />
                                  </em><br/>
                                </c:forEach>
                                </span></c:when>
                              <c:otherwise>Non Stop</c:otherwise>
                            </c:choose>
                            </strong> <span>
                            <c:if test="${flight.cabinClass != booking.flight.bookingClass}">
									<span class="coach-hilight">
								</c:if>
								<c:if test="${flight.cabinClass == booking.flight.bookingClass}">
									<span>
								</c:if>
										
									<c:if test="${flight.cabinClass == '2'}">
									Premium Economy <c:if test="${flight.cabinCategory != ''}">
									         - <c:out value="${flight.cabinCategory}"/>
											  </c:if>
									</c:if>
									<c:if test="${flight.cabinClass == '3'}">
									Business
									</c:if>
									<c:if test="${flight.cabinClass == '4'}">
									First
									</c:if>
									<c:if test="${flight.cabinClass == '6'}">
									Basic Economy
									</c:if>
									<c:if test="${flight.cabinClass == '7'}">
									Lite Economy
									</c:if>
									
									</span>
                            </span>
                            	
                          </div>
                          <%-- <div class="trip-time" ng-if="Flights.Flights.Gds == '1'"><em>Flight Time:
                            <c:out value='${reft}' />
                            </em> 
                          </div> --%>
                        </div>
						<div class="basic-class">
						<div>
						<span class="hidden-xs">
					  <c:if test="${flight.cabinClass == '1'}">
									<c:if test="${flight.cabinCategory != ''}">
									         <c:out value="${flight.cabinCategory}"/>-</c:if> 
											 Economy<c:if test="${flight.cabinCategory != ''}">
											 <span class="basic-info"> <a href="javascript:void(0);"><i class="fa fa-info"></i></a> <span class="basic-info_detail left "><i class="arrow"></i> <p>Basic Economy is a great choice for travelers who want to save some money. Traveling Basic Economy entails-</p>

												<ul>
<c:if test="${flight.displayAirline.code != 'AA'}"><li>No carry-ons other than a small personal item</li></c:if>
<c:if test="${flight.displayAirline.code == 'AA'}"><li>One carry-on item with small personal item allowed</li></c:if>
<c:if test="${flight.displayAirline.code == 'AA'}"><li>The carry-on item must fit in the overhead bin (Size: 56 x 36 x 23 cm)</li></c:if>
<c:if test="${flight.displayAirline.code == 'AA'}"><li>The personal item must fit under the seat (Size:45 x 35 x 20 cm)</li></c:if>
<c:if test="${flight.displayAirline.code != 'AA'}"><li>No access to overhead luggage bins</li></c:if>
<li>No check in baggage allowed</li>
<li>No refunds</li>
<li>No seat selection</li>
</ul></span> </span>
											 
											  </c:if> 
									</c:if>
									</span>
									
									<fmt:parseNumber type="number" integerOnly="true" var="fd_minutes" value="${flight.flightDuration % 60}" />
						        <fmt:parseNumber type="number" integerOnly="true" var="fd_t_hour" value="${flight.flightDuration / 60}" />						       
						        <fmt:parseNumber type="number" integerOnly="true" var="fd_hour" value="${fd_t_hour % 60}" />						        
                    			<c:if test="${flight.gds == '1' || flight.gds == '0'}">
									<span class="trip-time" >
										 			
									<span class="hidden-xs">	/ </span> <c:out value='${fd_hour}' />h <c:out value='${fd_minutes}' />m
										
									</span>
								</c:if>
									
									</div>
									
									<div class="visible-xs">
									 <c:if test="${flight.cabinClass == '1'}">
									<c:if test="${flight.cabinCategory == ''}">
									Economy
									</c:if> 
									</c:if> 
									 </div>
									
									
									
					  </div>
					 <!-- <c:if test="${flight.baggage != '' && flight.gds != '9'}">
									<c:if test="${flight.baggage == '0P'}">
									   <div class="basic-space-top"><i class="fa fa-suitcase text-red" aria-hidden="true"></i> <span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: 0P</a> <span class="baggage_detail"><i class="arrow"></i> <c:out value='Hand Luggage Only'/></span> </span></div>
									</c:if>
									<c:if test="${flight.baggage != '0P'}">
									  <div class="basic-space-top"><i class="fa fa-suitcase text-red" aria-hidden="true"></i><span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: ${flight.baggage}</a> <span class="baggage_detail"><i class="arrow"></i> The baggage information is for check-in baggage only and is just for reference. Please check with airline before check-in. 1 piece baggage is equivalent to 23 kgs or 50 lbs for adult/child and 10 kgs or 22 lbs for infants</span> </span></div>
									</c:if>
									
									</c:if>-->
						
                      </div>
					  
					  
                      <div class="col-sm-5 col-xs-12 col-sm-pull-3">
                        <div class="row">
                          <div class="col-xs-6">
                            <div class="city">
                              <c:set var="dateParts" value="${fn:replace(flight.departureTime,'T', ' ')}" />
                              <fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                              <div class="time">
                                <fmt:formatDate value="${dateObject }" pattern="HH:mm" />
                                 <c:choose>
										<c:when test="${booking.flexSearchTo ==  'yes' && inboundIndex == 1}">
											 <span class="date text-red">
                                <fmt:formatDate value="${dateObject }" pattern="EEE, dd MMM" />
                                </span>  <i class="fa fa-calendar text-red"></i>
										</c:when>
										<c:otherwise>
											 <span class="date">
                                <fmt:formatDate value="${dateObject }" pattern="EEE, dd MMM" />
                                </span> 
										</c:otherwise>
									</c:choose> 
								
								</div>
                              <c:set var="dateParts" value="${fn:replace(flight.arrivalTime,'T', ' ')}" />
                              <fmt:parseDate value="${dateParts}" var="dateObject" pattern="yyyy-MM-dd HH:mm:ss" />
                              <div class="time">
                                <fmt:formatDate value="${dateObject }" pattern="HH:mm" />
                                <span class="date">
                                <fmt:formatDate value="${dateObject }" pattern="EEE, dd MMM" />
                                </span> </div>
                            </div>
                          </div>
                          <div class="col-xs-6">
                            <div class="city1">
                              <div class="city-name text-right-mobile" title="<c:out value='${flight.originAirport.cityName}' />, <c:out value='${flight.originAirport.airportName}' /> (<c:out value='${flight.originAirport.airportCode}' />)">							
								
								<c:if test="${flight.nearBy == 'yes'}"><i class="fa fa-map-marker text-red" title="This is nearby airport"></i></c:if>
								<c:if test="${flight.nearBy == 'yes'}"><b class="text-red"><strong>
                                <c:out value='${flight.originAirport.airportCode}' />
                                </strong>
                                <c:out value='${flight.originAirport.cityName}' />
                                ,
                                <c:out value='${flight.originAirport.airportName}' /></b></c:if>
								<c:if test="${flight.nearBy == 'no'}"><strong>
                                <c:out value='${flight.originAirport.airportCode}' />
                                </strong>
                                <c:out value='${flight.originAirport.cityName}' />
                                ,
                                <c:out value='${flight.originAirport.airportName}' />
								</c:if>
								 
								
								
                              </div>
                              <div class="city-name text-right-mobile" title="<c:out value='${flight.destinationAirport.cityName}' />, <c:out value='${flight.destinationAirport.airportName}' /> (<c:out value='${flight.destinationAirport.airportCode}' />)">
								
								
								<c:if test="${flight.nearByTo == 'yes'}"><i class="fa fa-map-marker text-red" title="This is nearby airport"></i></c:if>
								<c:if test="${flight.nearByTo == 'yes'}"><span class="text-red"><strong>
                                <c:out value='${flight.destinationAirport.airportCode}' />
                                </strong>
                                <c:out value='${flight.destinationAirport.cityName}' />
                                ,
                                <c:out value='${flight.destinationAirport.airportName}' /></span></c:if>
								<c:if test="${flight.nearByTo == 'no'}"><strong>
                                <c:out value='${flight.destinationAirport.airportCode}' />
                                </strong>
                                <c:out value='${flight.destinationAirport.cityName}' />
                                ,
                                <c:out value='${flight.destinationAirport.airportName}' /></c:if>
								
								
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
				  
				  <c:if	test="${flight.layoverTime != '00:00'}">
                 <c:set var="layHr" value="${fn:split(flight.layoverTime,':')[0]}" />
				<c:set var="layMin" value="${fn:split(flight.layoverTime,':')[1]}" />
				    <span class="seprate-layover"><i class="fa fa-clock-o" aria-hidden="true"></i> ${layHr} hr ${layMin} min layover in <c:out value='${flight.destinationAirport.cityName}' /> (<c:out value='${flight.destinationAirport.airportCode}' />)</span>
				   </c:if>
				   
				   
                  </div>
                </c:if>
              </c:forEach>
			  
			   <c:if test="${booking.flight.isUPAAvailable == false}">
				  <div class="col-md-12 col-lg-12">
				  </c:if>
				  <c:if test="${booking.flight.isUPAAvailable == true}">
				  <div class="col-md-12 col-lg-9">
				  </c:if>
              <%if(returnFlights >= 1){ %>
              <ul class="layover_time">
			  
			   <li class="hidden-xs">
			  <c:if test="${fn:indexOf(booking.flight.segments[booking.flight.segments.size()-1].baggage, '0P') > -1}">
			<span><i class="fa fa-suitcase text-red" aria-hidden="true"></i> <span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: 0P</a> <span class="baggage_detail"><i class="arrow"></i> Hand Luggage Only</span> </span></span>
            </c:if>
			<c:if test="${booking.flight.segments[booking.flight.segments.size()-1].baggage != '' && booking.flight.segments[booking.flight.segments.size()-1].baggage != '0P'}">
			<span class="basic-space-top"><i class="fa fa-suitcase text-red" aria-hidden="true"></i> <span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: ${booking.flight.segments[booking.flight.segments.size()-1].baggage}</a> <span class="baggage_detail"><i class="arrow"></i> The baggage information is for check-in baggage only and is just for reference. Please check with airline before check-in. 1 piece baggage is equivalent to 23 kgs or 50 lbs for adult/child and 10 kgs or 22 lbs for infants</span> </span></span>
            </c:if>
			</li>
			
			  <li class="newbaggage_fees"> 
			  
			  <c:choose>
              <c:when test="${UAAirline == 'DL' || booking.flight.gds == 9}"> </c:when>
              <c:otherwise>
                 <i class="fa fa-suitcase text-red" aria-hidden="true"></i> <a class="visible-lg" onClick="window.open('/baggage-fees-info?airline=${retSegAirline}', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=900,height=600, screenX=50,screenY=50')" href="javascript: void(0);"> Baggage Fees </a> <a class="hidden-lg" href="javascript: void(0);" data-toggle="modal" data-target="#popup_baggage_fees"> Baggage Fees </a> 
              </c:otherwise>
            </c:choose></li>
                <li><span>Flight Time</span> <span class="hidden-xs">:</span>
                  <c:out value='${reft}'/>
                </li>
                <c:if test="${relt != '0h 0m'}">
                  <li><span>Layover Time</span> <span class="hidden-xs">:</span>
                    <c:out value='${relt}'/>
                  </li>
                </c:if>
               
                <li><span>Total Trip Time</span> <span class="hidden-xs">:</span>
                  <c:out value='${refd}'/>
                </li>
              </ul>
              <!-- layover time -->
              <%} %>
			  </div>
            </div>
            <%} %>
          </div>
		   <div class="col-md-12 col-lg-9">
          <div class="fare_rule_main">
        <!--    <c:if test="${booking.fareRules.size() > 0}">
              <div class="fare_rule"> <a href="javascript:void(0);"><i class="fa fa-info"></i> Fare Rules</a> <span class="fare_detail left"> <i class="arrow"></i> <strong>**Fares Governed By This Rule Can Be Used To Create</strong>
                <ul>
                  <c:forEach items="${booking.fareRules}" var="rule" varStatus="vs">
                    <li>
                      <c:out value="${rule}"></c:out>
                    </li>
                  </c:forEach>
                </ul>
                </span> </div>
            </c:if> -->
			
			
			<c:choose><c:when test="${UAAirline == 'DL'}">
														
			   </c:when>
			   <c:otherwise>
			   <div class="fare_rule show-xs">
					<i class="fa fa-suitcase text-red" aria-hidden="true"></i><a  href="javascript: void(0);" data-toggle="modal" data-target="#popup_baggage_fees"> Baggage Fees </a> 
					
					</div>
				 </c:otherwise>
				 </c:choose>
				 
				 <c:if test="${booking.flight.segments[0].cabinCategory != ''}">
				 <div class="fare_rule visible-xs pull-right">
			<c:if test="${booking.flight.segments[0].cabinClass == '1'}">
									
									         <c:out value="${booking.flight.segments[0].cabinCategory}"/>- 
											 Economy<c:if test="${booking.flight.segments[0].cabinCategory != ''}">
											 <span class="basic-info"> <a href="javascript:void(0);"><i class="fa fa-info"></i></a> <span class="basic-info_detail left "><i class="arrow"></i> <p>Basic Economy is a great choice for travelers who want to save some money. Traveling Basic Economy entails-</p>

<ul>
<c:if test="${flight.displayAirline.code != 'AA'}"><li>No carry-ons other than a small personal item</li></c:if>
<c:if test="${flight.displayAirline.code == 'AA'}"><li>One carry-on item with small personal item allowed</li></c:if>
<c:if test="${flight.displayAirline.code == 'AA'}"><li>The carry-on item must fit in the overhead bin (Size: 56 x 36 x 23 cm)</li></c:if>
<c:if test="${flight.displayAirline.code == 'AA'}"><li>The personal item must fit under the seat (Size:45 x 35 x 20 cm)</li></c:if>
<c:if test="${flight.displayAirline.code != 'AA'}"><li>No access to overhead luggage bins</li></c:if>
<li>No check in baggage allowed</li>
<li>No refunds</li>
<li>No seat selection</li>
</ul></span> </span>
											 
											  </c:if> 
									</c:if>
			</div>
			</c:if>
			
           
          </div>
		  </div>
		  
        </div>
      </div>
    </div>
  </div>
  <!--Flights Itnery -->




  
      <!---- Traveler Information Box start here ----->
      <div class="resultsBox">
        <div class="passenger_detail">
          <h4 class="sub_header"><i class="fa-traveler"></i> Traveler Information </h4>
          <div class="content">
            <div class="form-row hidden-xs">
              <div class="col_0 title"> Traveler </div>
              <c:if test="${booking.flight.gds == 9}">
              <div class="col_4 margin_mobile">
                <div class="title hidden-xs hidden-sm hidden-md ">Title <font color="red">*</font></div>
              </div>
              </c:if>
              <div class="col_1 margin_mobile">
                <div class="title hidden-xs hidden-sm hidden-md ">First Name <font color="red">*</font></div>
              </div>
              <div class="col_1 margin_mobile">
                <div class="title hidden-xs hidden-sm hidden-md">Middle Name</div>
              </div>
              <div class="col_1 margin_mobile">
                <div class="title hidden-xs hidden-sm hidden-md">Last Name <font color="red">*</font></div>
              </div>
              <div class="col_4 margin_mobile">
                <div class="title hidden-xs hidden-sm hidden-md">Gender <font color="red">*</font></div>
              </div>
              <div class="col_2">
                <div class="title hidden-xs hidden-sm hidden-md">D.O.B.<font color="red">*</font></div>
              </div>
            </div>
            <c:forEach items="${booking.passengerList}" var="pax" varStatus="vs">
              <div class="form-row">
                <div class="col_0">
                  <p class="traveler-sep">
                    <c:choose>
                      <c:when test="${pax.passengerType == 'InfantWs'}">${vs.index+1}. Infant <sup>seat</sup></c:when>
                      <c:when test="${pax.passengerType == 'Infant'}">${vs.index+1}. Infant <sup>lap</sup></c:when>
                      <c:otherwise> ${vs.index+1}.
                        <c:out value='${pax.passengerType}' />
                      </c:otherwise>
                    </c:choose>
                  </p>
                  <input type="hidden" value="${pax.passengerType}" id="passengerType${vs.index}"/>
                </div>
                <c:if test="${booking.flight.gds == 9}">
                <div class="col_4">
                  <div class="title hidden-xs hidden-lg">Title				
                  	<font color="red">*</font>
                  </div>                  
                  <div class="form-group-filled form-group"> <font class="validation_star" color="red">*</font>
                    <spring:bind path="passengerList[${vs.index}].Title">
						<select name="passengerList[${vs.index}].Title" class="form-control select manage-right" >										
							<option value="">Title</option>
							<option value="Mr">Mr</option>
							<option value="Mrs">Mrs</option>
							<option value="Miss">Miss</option>
						</select>
					 </spring:bind>
                  </div>
                </div>
                </c:if>
                
                <div class="col_1 margin_mobile">
                  <div class="title hidden-xs hidden-lg">First Name <font color="red">*</font></div>
                  <div class="form-group"> <font class="validation_star" color="red">*</font>
                    <form:input path="passengerList[${vs.index}].FirstName" placeholder="First Name" class="form-control textOnly" autocomplete="off" />
                  </div>
                </div>
                <div class="col_1 margin_mobile">
                  <div class="title hidden-xs hidden-lg">Middle Name</div>
                  <div class="form-group-filled ">
                    <form:input path="passengerList[${vs.index}].MiddleName" placeholder="Middle Name" class="form-control textOnly" autocomplete="off" />
                  </div>
                </div>
                <div class="col_1 margin_mobile">
                  <div class="title hidden-xs hidden-lg">Last Name <font color="red">*</font></div>
                  <div class="form-group-filled form-group"> <font class="validation_star" color="red">*</font>
                    <form:input path="passengerList[${vs.index}].LastName" placeholder="Last Name" class="form-control textOnly noSpace" autocomplete="off" />
                  </div>
                </div>
                <div class="col_4">
                  <div class="title hidden-xs hidden-lg">Gender <font color="red">*</font></div>                  
                  <div class="form-group-filled form-group"> <font class="validation_star" color="red">*</font>
                    <spring:bind path="passengerList[${vs.index}].Gender">
                      <select name="passengerList[${vs.index}].Gender" class="form-control select">
                        <c:forEach items="${model.gender}" var="curCategory" varStatus="loop">
                          <option value="${loop.index}">${curCategory}</option>
                        </c:forEach>
                      </select>
                    </spring:bind>
                  </div>
                </div>
                <div class="col_2">
                  <div class="title hidden-lg"><font class="dob_validation_start" color="red">*</font>D.O.B.<font class="hidden-xs" color="red">*</font></div>
                  <div class="form-group dob">
                    <form:select path="passengerList[${vs.index}].DobDate" id="paxdob${vs.index}" onchange="agecheck(this);" class="form-control select" ng-model="DobDate[${vs.index}]" name="ddlCabinClass" items="${model.days}" />
                  </div>
                  <div class="form-group dob">
                    <spring:bind path="passengerList[${vs.index}].DobMonth">
                      <select name="passengerList[${vs.index}].DobMonth" id="paxdom${vs.index}" onChange="agecheck(this);" class="form-control select" ng-model="DobMonth[${vs.index}]">
                        <c:forEach items="${model.month}" var="curCategory" varStatus="loop">
                          <option value="${loop.index}">${curCategory}</option>
                        </c:forEach>
                      </select>
                    </spring:bind>
                  </div>
                  <div class="form-group dob">
                    <c:if test="${pax.passengerType == 'Adult'}">
                      <form:select path="passengerList[${vs.index}].DobYear" id="paxdoy${vs.index}" class="form-control select" ng-model="DobYear[${vs.index}]" name="ddlCabinClass" items="${model.year}" />
                    </c:if>
                    <c:if test="${pax.passengerType == 'Child'}">
                      <form:select path="passengerList[${vs.index}].DobYear" id="paxdoy${vs.index}" onchange="agecheck(this);" class="form-control select" ng-model="DobYear[${vs.index}]" name="ddlCabinClass" items="${model.chyear}" />
                    </c:if>
                    <c:if test="${pax.passengerType == 'Infant'}">
                      <form:select path="passengerList[${vs.index}].DobYear" id="paxdoy${vs.index}" onchange="agecheck(this);" class="form-control select" ng-model="DobYear[${vs.index}]" name="ddlCabinClass" items="${model.infyear}" />
                    </c:if>
                    <c:if test="${pax.passengerType == 'InfantWs'}">
                      <form:select path="passengerList[${vs.index}].DobYear" id="paxdoy${vs.index}" onchange="agecheck(this);" class="form-control select" ng-model="DobYear[${vs.index}]" name="ddlCabinClass" items="${model.infyear}" />
                    </c:if>
                  </div>
                </div>
                <div class="form-group" id="errors${vs.index}">
                  <div class="form-group hide" style="color:#f00;" id="error-message${vs.index}"></div>
                </div>
              </div>
              
              <!-- Luggage Start -->
              <c:choose>
              <c:when test="${pax.passengerType == 'InfantWs'}"></c:when>
              <c:when test="${pax.passengerType == 'Infant'}"></c:when>
              <c:otherwise> 
               <c:if test="${booking.travelFusionLuggage.luggageOption.size() > 0}">
               <c:if test="${booking.travelFusionLuggage.isLuggagePP || booking.travelFusionLuggage.isOutwardLuggagePP || booking.travelFusionLuggage.isReturnLuggagePP}">
               <div class="form-row">  
                            
                <div class="col_0">                
                  <p class="traveler-sep">
                   <c:out value='${pax.passengerType}' /> Luggage
                  </p>
                                  
                </div>                               
                
                <c:if test="${booking.travelFusionLuggage.isLuggagePP}">
                <div class="col_3">                                  
                  <div class="form-group-filled form-group"> <font class="validation_star" color="red">*</font>
                    <%-- <spring:bind path="passengerList[${vs.index}].Luggage"> --%>
                      <form:select path="passengerList[${vs.index}].Luggage"  class="form-control select" id="pass${vs.index}L" onchange="getLuggage(${vs.index},'L')">
                      	<form:option value="0">Please Select Luggage</form:option>
                        <c:forEach items="${booking.travelFusionLuggage.luggageOption}" var="lugg" varStatus="loop">
                         <c:if test="${lugg.luggageType == 'SINGLE'}">
                          <fmt:formatNumber var="luggamunt" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(lugg.getAmount())   * (curRsponse)}' />
                          <form:option value="${lugg.rowID},${lugg.amount},${lugg.tfAmount},${lugg.luggageType}">${lugg.baggegeText} - <c:out value="${dollar} "/> ${luggamunt}</form:option>
                         </c:if>
                        </c:forEach>
                      </form:select>
                    <!-- </spring:bind> -->
                  </div>
                </div>
                </c:if>  
                              
                <c:if test="${booking.travelFusionLuggage.isOutwardLuggagePP}">
                <div class="col_3">                                
                  <div class="form-group-filled form-group"> <font class="validation_star" color="red">*</font>
                    <%-- <spring:bind path="passengerList[${vs.index}].OutwardLuggage"> --%>
                      <form:select path="passengerList[${vs.index}].OutwardLuggage" name="luggage" class="form-control select" id="pass${vs.index}O" onchange="getLuggage(${vs.index},'O')">
                      	<form:option value="0">Please Select Outward Luggage</form:option>
                        <c:forEach items="${booking.travelFusionLuggage.luggageOption}" var="lugg" varStatus="loop">
                         <c:if test="${lugg.luggageType == 'OUTWARD'}">
                          <fmt:formatNumber var="luggamunt" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(lugg.getAmount())   * (curRsponse)}' />
                          <form:option value="${lugg.rowID},${lugg.amount},${lugg.tfAmount},${lugg.luggageType}">${lugg.baggegeText} - <c:out value="${dollar} "/> ${luggamunt}</form:option>
                         </c:if>
                        </c:forEach>
                      </form:select>
                   <!--  </spring:bind> -->
                  </div>
                </div>
                </c:if> 
                               
                <c:if test="${booking.travelFusionLuggage.isReturnLuggagePP}">
                <div class="col_3">                               
                  <div class="form-group-filled form-group"> <font class="validation_star" color="red">*</font>
                    <%-- <spring:bind path="passengerList[${vs.index}].ReturnLuggage"> --%>
                      <form:select path="passengerList[${vs.index}].ReturnLuggage" name="luggage" class="form-control select" id="pass${vs.index}R" onchange="getLuggage(${vs.index},'R')">
                      	<form:option value="0">Please Select Return Luggage</form:option>
                        <c:forEach items="${booking.travelFusionLuggage.luggageOption}" var="lugg" varStatus="loop">
                         <c:if test="${lugg.luggageType == 'INWARD'}">
                          <fmt:formatNumber var="luggamunt" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(lugg.getAmount())   * (curRsponse)}' />
                          <form:option value="${lugg.rowID},${lugg.amount},${lugg.tfAmount},${lugg.luggageType}">${lugg.baggegeText} - <c:out value="${dollar} "/> ${luggamunt}</form:option>
                         </c:if>
                        </c:forEach>
                      </form:select>
                   <!--  </spring:bind> -->
                  </div>
                </div>
                </c:if> 
                
              </div>  
              </c:if>
              </c:if>
                          
              </c:otherwise> </c:choose>
              
              <!-- Luggage Stop -->
              
              <div class="form-group hide" style="color:#009c04;" id="warn-message${vs.index}"></div>
			   <!-- TSA start here-->
		  <div class="tsa-section">		  
		  <c:if test="${booking.flight.gds != 9 && booking.flight.gds != 1}"><span class="more-option" id="tsa${vs.index}" onclick="Showtsa(${vs.index})";>(+) More Info</span> <small>(Optional: TSA Precheck, redress and other details)</small></c:if> 
	 
		  <div class="tsa-bg" id="tsa-bg${vs.index}" style="display:none;">
		  <div class="tsa-mobile-view">
		   <c:if test="${vs.index == 0}">
		   <h5>Emergency Contact Information</h5>
		 <div class="tsa-section1">
		  <div class="form-row">
		  <div class="tsa-filed">
          <div class="heading">Emergency Contact Name</div>		  
		  <div class="form-group tsa-form">
		   <form:input path="contact.emergencyContactName" placeholder="Emergency Contact Name" class="form-control textOnly" autocomplete="off" />
           </div>
		  </div>
			  <div class="tsa-filed">
			  <div class="heading">Country Code</div>		  
				  <div class="form-group-filled form-group tsa-form">
				   <form:select path="contact.emergencyPhoneCode" id="contact_emergencyPhoneCode" ng-options="opt.Name for opt in usPhone track by opt.ID" class="form-control select" name="ddlCabinClass" ng-model="usPhoneCode"></form:select>
				  </div>
			  </div>
			  <div class="tsa-filed">
			    <div class="heading">Emergency Contact Number</div>		  
			      <div class="form-group tsa-form">
			       <form:input path="contact.emergencyPhoneNumber" placeholder="Emergency Contact Number" maxlength="11" class="form-control numbersOnly" autocomplete="off" />
			  </div>
			</div>  
		   </div>
		   </div>
		   </c:if>
		  <div class="tsa-section2"> 
		   <div class="form-row">
		  <div class="tsa-filed2">
          <div class="heading">TSA Precheck <span class="tsa-information"> <a href="javascript:void(0);"><i class="fa fa-info"></i></a> <span class="tsa_detail"><i class="arrow"></i>
                              The Known Traveler Number is also referred to as Pass ID, TSA PreCheck and Global Entry Number. It can be found on the top-left corner on the back of your Trusted Traveler membership card. 
                              </span> </span> </div>		  
		  <div class="form-group tsa-form">
		   <form:input path="passengerList[${vs.index}].TSAPrecheckNumber" placeholder="Known Traveler Number (Optional)" class="form-control alphanumerics" maxlength="11"  autocomplete="off" />
          
		   </div>
		  </div>
		  <div class="tsa-filed2">
          <div class="heading">Redress Number <span class="tsa-information"> <a href="javascript:void(0);"><i class="fa fa-info"></i></a> <span class="tsa_detail"><i class="arrow"></i>
                              A Redress is a unique number that is assigned to a passenger by the Department of Homeland Security (DHS) for the purpose of promoting the resolution with previous watch list alerts. 
                              </span> </span> </div>		  
		  <div class="form-group tsa-form">
		   <form:input path="passengerList[${vs.index}].TSARedressNumber" placeholder="(Optional)" class="form-control numbersOnly" maxlength="7" autocomplete="off" />
           </div>
		  </div>
		  </div>
	      </div>
		    <span class="tsa-button">save</span>
		  </div>
		  <span class="tsa-close">x</span>
		  
		
		  </div>
		  </div>
            </c:forEach>
          </div>
          <!-- Additional Service Request-->
          <!-- 
											 <div class="content">
											<a href="javascript:void(0);" class="advance-search-btn collapsed" data-toggle="collapse" data-target="#request" aria-expanded="false"><i class="fa fa-caret-down"></i> Additional Information</a>
											</div> 
											<div class="content hide-block collapse" id="request" aria-expanded="false">
														 <c:forEach items="${booking.passengerList}" var="pax" varStatus="vs">
														
															
															
															
															<div class="form-row">
						
						
																	<div class="col_0">
						
																		<div class="title">Traveler</div>
						
																		<p>
																		 <c:choose>
																		<c:when test="${pax.passengerType == 'Senior'}"> Infant (on lap):${vs.index+1}</p></c:when>
																		<c:otherwise> <c:out value='${pax.passengerType}' />:${vs.index+1}</p></c:otherwise>
																		</c:choose>
																
																		   <input type="hidden" value="${pax.passengerType}" id="passengerType${vs.index}"/>
						
																	</div>
						
																	  <div class="col_3">
																		<div class="title">Meal Preference: <font color="red">*</font></div>
																		<div class="form-group-icon-left form-group-filled">
																		  <form:select path="passengerList[${vs.index}].MealPreference" class="form-control select">
																		   <form:option value="NONE" label="Select"/>
																		   <form:options items="${mealType}" />
																		  </form:select>
																		  </div>
																	</div>
																	  <div class="col_3">
																		<div class="title">Special Service:<font color="red">*</font></div>
																		<div class="form-group-icon-left form-group-filled">
																				<form:select path="passengerList[${vs.index}].SpecialService" class="form-control select">
																				<form:option value="NONE" label="Select"/>
																				 <form:options items="${specialPrefer}" />
																				</form:select>
						
																		</div>
																	</div>
																 
														</div>
														
														
														
														</c:forEach>
						
														</div> -->
          <!-- Additional Service Request-->
          <div class="information"><b>Important-</b><ul><li>Kindly ensure that your name, date of birth is accurate as per your passport and the travel itinerary is correct. </li><li>Kindly ensure your passports are valid for 6 months beyond the period of your stay.</li></ul></div>
        </div>
      </div>
      <!---- Traveler Information Box End here ---->
     <input type="hidden" value="0.00" id="grandTotalMacpSet" />
      <form:hidden path="macp" id="macpNo" value="No"/>
        <c:if test="${booking.tripMateCost !=  0.0}">
          <jsp:include page="tripMate.jsp"></jsp:include>
        </c:if>
        <div class="clearfix"></div>
        <!-- insurance block -->        
        <!----------Fare Detail Section----------->
		<div id="sticky-anchor"></div>
    <%-- <div class="faredetail resultsBox">
      <h4 class="sub_header"><i class="fa-payment"></i> Price Summary</h4>
      <a class="hidden-xs hidden-md hidden-sm text-red taxes-fees" onClick="window.open('/taxes-fees', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=900,height=600, screenX=50,screenY=50')" href="javascript: void(0);"> Taxes & Fees Info. </a> <a class="hidden-lg text-red taxes-fees" href="javascript: void(0);" data-toggle="modal" data-target="#popup_taxes_fees"> Taxes & Fees Info. </a>
      <div class="content">
        <c:set var="totMco1" value="${booking.fare.markup+booking.fare.instantDiscountAmt}" />
        <fmt:formatNumber var="totMco" type="number" value="${totMco1}" />
  <c:if test="${totMco1 >= 10.00}"><input type="hidden" value="0" id="callpopupopen"/></c:if>
  <c:if test="${totMco1  < 10.00}"><input type="hidden" value="1" id="callpopupopen"/></c:if>
        
        <c:set var="orgMarkup" value="${booking.fare.markup}" />
        <fmt:setLocale value="en_US" />
        <c:if test="${booking.adult > 0}">
          <div class="row traveler-fees-toggle">
            <fmt:formatNumber var="adultFare" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.adultFare) * (curRsponse)}' />
            <fmt:formatNumber var="adultTax" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.adultTax+totMco1) * (curRsponse)}' />
            <fmt:formatNumber var="formattedTotalAdultFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.adultFare+booking.fare.adultTax+totMco1)*(booking.adult) * (curRsponse)}" />
            <div class="col-xs-8">
              <c:out value='${booking.adult}' />
              Traveler(s) : Adult <i class="fa fa-angle-double-down"></i> </div>
            <div class="col-xs-4 text-right"> <span> <i class="fa fa-<c:out value="${dollar}"/>"></i></span>
              <c:out value='${formattedTotalAdultFare}' />
            </div>
          </div>
          <!-- taxes fee -->
          <div class="traveler-fees-slide">
            <div class="row">
              <div class="col-xs-8">
                <div>Flight Charges
                  <c:if test="${booking.adult > 1}">per adult</c:if>
                </div>
                <div>Taxes & Fees
                  <c:if test="${booking.adult > 1}">per adult</c:if>
                </div>
              </div>
              <div class="col-xs-4 text-right">
                <div><span> <i class="fa fa-<c:out value="${dollar}"/>"></i></span>
                  <c:out value='${adultFare}' />
                </div>
                <div><span> <i class="fa fa-<c:out value="${dollar}"/>"></i></span>
                  <c:out value='${adultTax}' />
                </div>
              </div>
            </div>
          </div>
          <!-- taxes fee -->
        </c:if>
        <fmt:formatNumber var="RkpublishedFare" type="number" groupingUsed="false" value="${((booking.fare.adultFare*booking.adult)+(booking.fare.childFare*booking.child)+(booking.fare.infantFare*booking.infant)+(booking.fare.infantWsFare*booking.infantWs))/(booking.infantWs+booking.infant+booking.child+booking.adult)}" />
        <c:if test="${booking.child > 0}">
          <fmt:formatNumber var="childFare" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.childFare)   * (curRsponse)}' />
          <fmt:formatNumber var="childTax" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.childTax+totMco1) * (curRsponse)}' />
          <fmt:formatNumber var="formattedTotalChildFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${(booking.fare.childFare+booking.fare.childTax+totMco1)*(booking.child) * (curRsponse)}" />
          <div class="row traveler-fees-toggle">
            <div class="col-xs-8 ">
              <c:out value='${booking.child}' />
              Traveler(s) : Child <i class="fa fa-angle-double-down"></i> </div>
            <div class=" col-xs-4 text-right"> <span> <i class="fa fa-<c:out value="${dollar}"/>"></i></span>
              <c:out value='${formattedTotalChildFare}' />
            </div>
          </div>
          <div class="traveler-fees-slide">
            <div class="row">
              <div class="col-xs-8">
                <div>Flight Charges
                  <c:if test="${booking.child > 1}">per child</c:if>
                </div>
                <div>Taxes & Fees
                  <c:if test="${booking.child > 1}">per child</c:if>
                </div>
              </div>
              <div class="col-xs-4 text-right">
                <div><span> <i class="fa fa-<c:out value="${dollar}"/>"></i></span>
                  <c:out value='${childFare}' />
                </div>
                <div><span> <i class="fa fa-<c:out value="${dollar}"/>"></i></span>
                  <c:out value='${childTax}' />
                </div>
              </div>
            </div>
          </div>
        </c:if>
        <c:if test="${booking.infant > 0}">
          <fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" var="infantFare" value='${(booking.fare.infantFare)   * (curRsponse)}' />
          <fmt:formatNumber var="infantTax" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.infantTax+totMco1) * (curRsponse)}' />
          <fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" var="tinfantFare" value='${(booking.fare.infantFare+booking.fare.infantTax+totMco1)*(booking.infant) * (curRsponse)}' />
          <div class="row traveler-fees-toggle">
            <div class="col-xs-8">
              <c:out value='${booking.infant}' />
              Traveler(s) : Infant <sup>LAP</sup> <i class="fa fa-angle-double-down"></i> </div>
            <div class="col-xs-4 text-right"> <i class="fa fa-<c:out value="${dollar}"/>"></i>
              <c:out value="${tinfantFare}" />
            </div>
          </div>
          <div class="traveler-fees-slide" >
            <div class="row">
              <div class="col-xs-8">
                <div>Flight Charges
                  <c:if test="${booking.infant > 1}">per infant</c:if>
                </div>
                <div>Taxes & Fees
                  <c:if test="${booking.infant > 1}">per infant</c:if>
                </div>
              </div>
              <div class="col-xs-4 text-right">
                <div><span> <i class="fa fa-<c:out value="${dollar}"/>"></i></span>
                  <c:out value='${infantFare}' />
                </div>
                <div><span> <i class="fa fa-<c:out value="${dollar}"/>"></i></span>
                  <c:out value='${infantTax}' />
                </div>
              </div>
            </div>
          </div>
        </c:if>
        <c:if test="${booking.infantWs > 0}">
          <fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" var="infantwsFare" value='${(booking.fare.infantWsFare)  * (curRsponse)}'/>
          <fmt:formatNumber var="infantwsTax" type="number" minFractionDigits="2" maxFractionDigits="2" value='${(booking.fare.infantWsTax+totMco1)  * (curRsponse)}' />
          <fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" var="tinfantwsFare" value='${(booking.fare.infantWsFare+booking.fare.infantWsTax+totMco1)*(booking.infantWs) * (curRsponse)}'/>
          <div class="row traveler-fees-toggle">
            <div class="col-xs-8">
              <c:out value='${booking.infantWs}' />
              Traveler(s) : Infant <sup>SEAT</sup> <i class="fa fa-angle-double-down"></i> </div>
            <div class=" col-xs-4 text-right"> <span> <i class="fa fa-<c:out value="${dollar}"/>"></i></span>
              <c:out value="${tinfantwsFare}" />
            </div>
          </div>
          <div class="traveler-fees-slide" >
            <div class="row">
              <div class="col-xs-8">
                <div>Flight Charges
                  <c:if test="${booking.infantWs > 1}">per infant</c:if>
                </div>
                <div>Taxes & Fees
                  <c:if test="${booking.infantWs > 1}">per infant</c:if>
                </div>
              </div>
              <div class="col-xs-4 text-right">
                <div><span> <i class="fa fa-<c:out value="${dollar}"/>"></i></span>
                  <c:out value='${infantwsFare}' />
                </div>
                <div><span> <i class="fa fa-<c:out value="${dollar}"/>"></i></span>
                  <c:out value='${infantwsTax}' />
                </div>
              </div>
            </div>
          </div>
        </c:if>
        <c:if  test="${utmSource ==  'OffLine'}">
          <div class="coupon_code row">
            <div class="col-xs-9"> <a href="javascript:void(0);" class="agentfees text-red"> Agent Fees <i class="fa fa-angle-down"></i></a>
             <span class="agentDiv" style="display:none;">
              <form:input  path="agentFees" id="agFees"   class="text-box card_type agentAmont" type="text"  name="agentFees"/>
              <div class="apply_btn" id="agFeesAdd" onClick="applyAgentfees('Y');">Apply</div>
              <div class="apply_btn" id="agFeesRem" style="display: none;" onClick="applyAgentfees('N');">Remove</div>
              <div id="agfApply" style="display:none; clear:both;"> <span>Click on apply </span> </div>
              <div style="clear:both;"><span id="agfMessage"></span></div>
              </span> </div>
            <div class="col-xs-3 text-right" id="agFeesDis"> <i class="fa fa-<c:out value="${dollar}"/>"></i><span id="agFeesDisAmt">0.0</span> </div>
          </div>
        </c:if>
        <form:hidden id="fareAgentFees" path="fare.agentFees" value="0.0"/>
          
        
        <!-- Display Luggage -->
        <div class="row text-bold" id="luggdisplay_L" style="display: none; position: relative;">
          <div class="col-xs-8"> Luggage Fees </div>
          <div class="col-xs-4 text-right"> <i class="fa fa-<c:out value="${dollar}"/>"></i><span id="lugg_L"></span> </div>
        </div>
        <div class="row text-bold" id="luggdisplay_O" style="display: none; position: relative;">
          <div class="col-xs-8"> Outward Luggage Fees </div>
          <div class="col-xs-4 text-right"> <i class="fa fa-<c:out value="${dollar}"/>"></i><span id="lugg_O"></span> </div>
        </div>
        <div class="row text-bold" id="luggdisplay_R" style="display: none; position: relative;">
          <div class="col-xs-8"> Return Luggage Fees </div>
          <div class="col-xs-4 text-right"> <i class="fa fa-<c:out value="${dollar}"/>"></i><span id="lugg_R"></span> </div>
        </div>
        <!-- Display Luggage -->
        
    
        <c:set var="RKQTY" value='${(booking.infantWs+booking.infant+booking.child+booking.adult)}' />
        <input type="hidden" id="totPax" value="${booking.infantWs+booking.infant+booking.child+booking.adult}" ng-model="totPax" ng-value="totPax" ng-init="totPax='${booking.infantWs+booking.infant+booking.child+booking.adult}'" />
        <input type="hidden" id="macpAmt" value="${booking.fare.macp}" ng-model="macpAmt" ng-value="macpAmt" ng-init="macpAmt='${booking.fare.macp}'" />
        <!--  Coupons-->
        <c:if test="${booking.discountAmt ne '0.0'}">
          <div class="row">
            <div class="col-xs-8 "> ${booking.discountType} </div>
            <div class="col-xs-4 text-right"> -<i class="fa fa-<c:out value="${dollar}"/>"></i>
              <c:out value='${booking.discountAmt}' />
            </div>
          </div>
        </c:if>
        <div class="coupon_code row" ng-disabled="isDisabled">
          <div class="col-xs-9" ng-disabled="isDisabled"> <a href="" ng-model="collapsed" ng-click="collapsed=!collapsed;openCoupons();" id="couponHave">Have Coupon Code <span class="fa fa-angle-double-down"></span></a> <span id="couponHave1"></span> <span id="CouponInp" ng-show="collapsed">
            <input type="hidden" id="couponsType" value="X"/>
            <input type="hidden" id="couponsValue" value="X"/>
            <form:input  path="couponsCode" id="couponsCode" ng-disabled="isDisabled" ng-model="selectedCoupons" class="text-box card_type" type="text"  name="couponsCode" data-val-length-min="5" data-val-length-max="80" data-val="true"/>
            <div class="apply_btn" ng-click="checkCoupons('X');" ng-disabled="isDisabled"><span ng-disabled="isDisabled" id="couponApply">{{subscribeButton}}</span></div>
            <div id="popApply" style="display:none; clear:both;"> <span>Click on apply to avail this coupon</span> </div>
            <div style="clear:both;  text-align:left;"><span id="couponMessage"></span></div>
            </span> </div>
          <div class="col-xs-3 text-right" id="Coupon" ng-show="collapsed"> - <i class="fa fa-<c:out value="${dollar}"/>"></i><span id="couponAmtPlan">0.0</span> </div>
        </div>
        <!-- Seat -->
        <div class="row feedetail" id="seatPriceid" style="display: none; position: relative;">
          <div class="col-xs-8"> Seat Price </div>
          <div class="col-xs-4 text-right" id="seatPriceidVal"> </div>
        </div>
        <!-- Seat -->
        <div class="clearfix"></div>
        <div class="pricetotal text-bold">
          <div class="col-xs-6 no-padding"> Final Total Price: </div>
          <div class="col-xs-6 text-right" id="publishedFare">
            <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal}" />
            <fmt:formatNumber var="publishedTotFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal * curRsponse }" />
            <h4> &nbsp;&nbsp;<i class="fa fa-<c:out value="${dollar}"/>"></i>
              <c:out value='${publishedTotFare}'/>
            </h4>
          </div>
          <input type="hidden" value="${booking.fare.grandTotal}" id="totalValue" />
          <input type="hidden" value="${(booking.fare.tax+((booking.fare.markup+10)*(booking.infantWs+booking.infant+booking.child+booking.adult))) * curRsponse}" id="totalTaxes" />
        </div>
        <a id="fixed_price" class="mobile_price_fixed visible-xs">
        <div class="col-xs-6"> <b>Final Total Price:</b> </div>
        <div class="col-xs-6 text-right" id="publishedFareMobile">
          <fmt:formatNumber var="publishedmTotFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal * curRsponse }" />
          <h4> &nbsp;&nbsp;<i class="fa fa-<c:out value="${dollar}"/>"></i>
            <c:out value='${publishedmTotFare}'/>
          </h4>
        </div>
        <span class="view-detail">+ view detail</span> </a>
        <c:choose>
          <c:when test='${xchangeCurrencyCode  == "USD" }'>
            <div class="price_note"> <b>Please Note: </b>All Fares displayed are quoted in ${xchangeCurrencyCode} and inclusive of base fare, taxes and all fees.<c:choose><c:when test="${booking.flight.gds == 9}"></c:when><c:otherwise> Additional <a class="show-desktop text-red" onClick="window.open('/baggage-fees-info?airline=${departSegAirline}', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=900,height=600, screenX=50,screenY=50')" href="javascript: void(0);">baggage fees </a> <a class="hidden-lg" href="javascript: void(0);" data-toggle="modal" data-target="#popup_baggage_fees">baggage fees</a> may apply as per the airline policies.</c:otherwise></c:choose> </div>
          </c:when>
          <c:otherwise>
            <div class="price_note"> <b>Please Note: </b> All Fares displayed are quoted in ${xchangeCurrencyCode} and inclusive of base fare, taxes and all fees.<c:choose><c:when test="${booking.flight.gds == 9}"></c:when><c:otherwise> Additional <a class="show-desktop text-red" onClick="window.open('/baggage-fees-info?airline=${departSegAirline}', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=900,height=600, screenX=50,screenY=50')" href="javascript: void(0);">baggage fees</a> <a class="hidden-lg" href="javascript: void(0);" data-toggle="modal" data-target="#popup_baggage_fees">baggage fees</a> may apply as per the airline policies.</c:otherwise></c:choose> </div>
            <div class="pricetotal">
              <div class="col-xs-8 no-padding"> <b>Total charge in USD:</b> </div>
              <div class="col-xs-4 text-right no-padding" id="publishedFareXe"> <b>
                <fmt:formatNumber var="publishedFare" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal}" />
                <h4><i class="fa fa-dollar"/></i>
                  <c:out value='${publishedFare}'/>
                </h4>
                </b> </div>
            </div>
            <div class="price_note">
              <fmt:formatNumber var="publishedFaress" type="number" minFractionDigits="2" maxFractionDigits="2" value="${booking.fare.grandTotal * curRsponse}" />
              <b>Please Note:</b> Your Credit/Debit Cards will be charged in USD for a total amount of <span id="publishedFareMsg"><i class="fa fa-dollar"/></i>
              <c:out value='${publishedFare}'/>
              </span>, today's conversion rate of 1 USD  = ${curRsponse} ${xchangeCurrencyCode}. Your bank may apply a different conversion . <br>
            </div>
          </c:otherwise>
        </c:choose>
        <c:if test="${booking.flight.isFusionFare == true}">
          <div class="price_note"> <span class="visible-xs">ComboFare</span> Your fare is a combination of two one-way tickets,each subject to its own rules and restrictions.Any change or cancelation in any flight would not alter the other one.Changes to the other flight may incur a charge. </div>
        </c:if>
      </div>
    </div> --%>
    <!-- Price detail end-->


        <!--  Travel Guard -->
        <c:set var="theString" value='${booking.TGuardValue}' />
        <!--   <jsp:include page="tGuard.jsp"></jsp:include> -->
        <input type="hidden" value="0.0" id="tmValue" />
        <input type="hidden" value="NO" id="tmSelect" />
        <input type="hidden" value="${booking.tripMateCost}" id="tripMateCost" ng-model="tripMateCost" ng-value="tripMateCost" ng-init="tripMateCost='${booking.tripMateCost}'" />
        <input type="hidden" value="${curRsponse}" id="convRatio" />
        <input type="hidden" value="${xchangeCurrencyCode}" id="xchangeCurrencyCode" />
        <!--  Travel Guard -->
        <input type="hidden" value="NO" id="tgSelect" />
        <input type="hidden" value="0.0" id="tgValue" />
        <input type="hidden" value="0.0" id="macpValue" />
        <input type="hidden" value="${travelGuard}" id="tgInsValue" ng-value="tgIns" ng-init="tgIns='${travelGuard}'" />
        <input type="hidden" value="${booking.tgProductCode}" id="tgpCode" ng-model="tgPcode" ng-value="tgPcode" ng-init="tgPcode='${booking.tgProductCode}'" />
        <!--Billing Information Box Start here -->
        <div class="resultsBox">
          <h4 class="sub_header"><i class="fa-billing"></i>Billing Information (Card Holder)</h4>
          <div class="content">
            <div class="billing-sequre">
              <div class="row">
              
               <c:choose>
				<c:when test="${booking.flight.gds == 9}">
                <div class="col-sm-4 col-xs-12 form-group margin_mobile"><font class="validation_star-lg" color="red">*</font> 
                  <form:input path="payment.address2" id="payment.address2" class="address2 form-control text-box addressOnly" placeholder="House Number" type="text" name="Payments.Address1"  />                  
                  <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span> 
                </div>
                <div class="col-sm-4 col-xs-12 form-group margin_mobile"><font class="validation_star-lg" color="red">*</font>
                  <form:input path="payment.address1" id="payment.address1" class="address1 form-control text-box addressOnly" placeholder="Street" type="text" name="Payments.Address1"  />
                  <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span> 
                </div>
                </c:when>
                <c:otherwise>
                <div class="col-sm-4 col-xs-12 form-group margin_mobile"> <font class="validation_star-lg" color="red">*</font>
                  <form:input path="payment.address1" id="payment.address1" class="address1 form-control text-box addressOnly" placeholder="Address 1" type="text" name="Payments.Address1"  />
                  <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span> </div>
                <div class="col-sm-4 col-xs-12 form-group margin_mobile">
                  <form:input path="payment.address2" id="payment.address2" class="address2 form-control text-box addressOnly" placeholder="Address 2" type="text" name="Payments.Address1"  />
                  <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span> 
				</div>
				</c:otherwise>
			  </c:choose>
			  
                <div class="col-sm-4 col-xs-12 form-group margin_mobile"> <font class="validation_star-lg" color="red">*</font>
                  <form:input path="payment.city" id="payment.city" class="form-control text-box textOnly" placeholder="City/ Town" type="text" name="Payments.Address1"  />
                  <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span> </div>
              </div>
              <div class="row">
                <div class="col-sm-4 col-xs-12 form-group margin_mobile"> <font class="validation_star-lg" color="red">*</font>
                  <form:select path="payment.country" onchange="getInternationalCode()" id="Payments_Country" class="form-control card_type chosen-select valid" ng-options="opt.Name for opt in countryList track by opt.ID" name="Payments.Country" ng-model="selectedCountry" data-val-required="Select <b>billing address country</b>" data-val="true">
                    <!--    <option   data-ng-repeat="value in countryList" data-ng-value='value.ID'>{{value.Name}}</option>
						   -->
                  </form:select>
                  <div id="InternationalData" class="tooltipPopup" style="display:none;">Are you using a card which is issued outside USA or Canada? Please be advised payment through an international card online is accepted. However, the card holder will be contacted by our credit card verification team and will be required to send us few documents such as authorization form, copy of credit or debit card and Photo ID of the card holder. In case you would like to enquire more about this you may call us on
                    <c:out value='${tollFree}' />
                    .</div>
                </div>
                <div class="col-sm-4 col-xs-12 form-group margin_mobile" cg-busy="{promise:promise,templateUrl:templateUrl,message:message,backdrop:backdrop,delay:delay,minDuration:minDuration}"> <font class="validation_star-lg" id="statemad" color="red">*</font>
                  <div id="stateInp" ng-hide="IsHidden">
                    <form:input path="payment.state" id="Payments_States" class="form-control text-box card_type col-xs-12" placeholder="State/ Province" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span></div>
                  <div id="stateSel" ng-hide="IsShow">
                    <form:select path="payment.state" id="Payments_State" class="form-control card_type chosen-select valid" ng-options="opt.Name for opt in usState track by opt.ID" name="payment.state" ng-model="selectedItem"> </form:select>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-12 margin_mobile form-group"> <font class="validation_star-lg" color="red">*</font>
                  <form:input path="payment.postalCode" id="payment_postalCode" maxlength="10" class="form-control alphanumerics text-box card_type col-xs-12" placeholder="Postal/Zip Code" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                  <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span> </div>
              </div>
			  
	    <c:if test="${booking.flight.gds == 9}">
                <form:hidden path="contact.intcode" value="44" id="contact_intcode" class="form-control text-box" minlength="1" placeholder="Country Code"  maxlength="5" />
                <form:hidden path="contact.areacode" value="1" id="contact_areacode" minlength="1" placeholder="Area Code" maxlength="5" class="form-control text-box" />
            </c:if>
	     <div class="row form-group margin_mobile">
              <div class="col-sm-3 col-xs-12 hidden-xs">
                <label class="semi_bold">Billing Phone<font color="red">*</font></label>
              </div>
              <div class="col-sm-4 col-xs-12">
                <div class="form-group-icon-left form-group form-group-filled "> <font class="validation_star" color="red">*</font>
                  <form:input 
                  	path="contact.billingPhone" 
                  	id="contact_billingPhone" 
                  	minlength="10"  
                  	maxlength="15" 
                  	placeholder="Billing Phone"  
                  	class="form-control text-box card_type col-xs-12 numbersOnly" 
                  	type="text" 
                  	name="Payments.Address1" 
                  	data-val-required="Enter <b>billing address</b>" 
                  	data-val-length-min="5" 
                  	data-val-length-max="80" 
                  	data-val-length="Enter billing address length should be 5-80 characters" 
                  	data-val="true" />
                  <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span></div>
              </div>
              <div class="col-sm-5 col-xs-12 hidden-xs">
                <label>(As on file with bank or credit card company)</label>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-3 col-xs-12 hidden-xs">
                <label class="semi_bold">Alternate Phone</label>
              </div>
              <div class="col-sm-4 col-xs-12 margin_mobile">
                <div class="form-group-icon-left form-group-filled ">
                  <form:input path="contact.mobile" id="contact_mobile" minlength="10" placeholder="Alternate Phone"  maxlength="15" class="form-control text-box card_type col-xs-12 numbersOnly" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                  <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span></div>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-3 col-xs-12 hidden-xs">
                <label class="semi_bold">Email<font color="red">*</font></label>
              </div>
              <div class="col-sm-4 col-xs-12 margin_mobile"> <font class="validation_star" color="red">*</font>
                <form:input path="contact.email" id="contact_email" class="form-control text-box card_type col-xs-12" placeholder="Email" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="contact_email"></span></div>
            </div>
            <div class="row form-group">
              <div class="col-sm-3 col-xs-12 hidden-xs">
                <label class="semi_bold">Retype Email<font color="red">*</font></label>
              </div>
              <div class="col-sm-4 col-xs-12 margin_mobile"> <font class="validation_star" color="red">*</font>
                <form:input path="contact.email1" id="contact_email1" class="form-control text-box card_type col-xs-12" placeholder="Retype Email" type="text" name="contact.email1" />
                <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="contact_email1"></span></div>
            </div>
			
			
            </div>
          </div>
        </div>
        <!--Payment  Billing Information Start here -->
        <div class="resultsBox">
          <form:hidden path="affRef" value="Online"/>
          <form:hidden path="affSiteId" />
          <form:hidden path="affAid" />
          <form:hidden path="affPid" />
          <form:hidden path="affSid" />
          <form:hidden path="affentryTime" />
          <form:hidden path="Coupons"  value="N" id="couponId"/>
          <h4 class="sub_header"><i class="fa-payment"></i>Payment Information (Secure SSL Encrypted Transation)</h4>
          <div class="content">
            <div class="payment_detail">
			<div class="row form-group margin_mobile" id="payment-first" style="display:none;">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">First Card Amount<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12">
                  <div class="form-group-icon-left form-group-filled "> <font class="validation_star" color="red">*</font>
                    <form:input id="payments_card_first_amount" path="payment.amountToCharge" class="form-control text-box card_type col-xs-12 groupOfAmont" type="text" name="Payments.amountToCharge" data-val-required="Please provide <b>Card Holder Name</b><br/>" data-val-regex-pattern="^([A-Za-z ]+)$" data-val-regex="Please provide valid <b>Card Holder Name</b>(Entry must contain at least 2 letters (A-Z))<br/>" data-val-length-min="2" data-val-length-max="50" data-val-length="Card holder name length should be 2-50 characters<br/>" data-val="true" />
                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.amountToCharge"></span> </div>
                </div>
                <div class="col-sm-5 col-xs-12 hidden-xs">
                	<c:choose>
	              		<c:when test='${xchangeCurrencyCode  == "GBP" }'>
	              		</c:when>
	              		<c:otherwise>
	              			<label>(GBP)</label>
	              		</c:otherwise>
              		</c:choose>
                </div>
              </div>
			
            
			  <form:hidden id="payment-card" path="payment.cardCode" />
              <div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Credit/Debit Card No.<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12">
                  <div class="form-group-icon-left form-group-filled "> <font class="validation_star" color="red">*</font>
                    <form:input 
                    	id="Payments_MaskCardNumber" path="payment.maskCardNumber" 
                    	class="form-control text-box card_type col-xs-12 numbersOnly numbersastseveOnly cc-number" 
                    	placeholder="Credit/Debit Card No." 
                    	maxlength="16" data-numeric="0"
                    	type="text" 
                    	value="" 
                    	name="Payments.MaskCardNumber" 
                    	data-val-required="Please provide <b>credit or debit card number</b><br/>" 
                    	data-val-regex-pattern="^([0-9]+)$" 
                    	data-val-regex="Please provide valid <b>Card number</b>(Entry must contain digits (0-9))<br/>" data-val="true" />
                    <form:hidden id="Payments_CardNumber" path="payment.cardNumber" name="Payments.CardNumber" />
					<script>
					var J = Payment.J,
					numeric = document.querySelector('[data-numeric]'),
					number = document.querySelector('.cc-number'),
					validation = document.querySelector('.validation');
					Payment.restrictNumeric(numeric);
					Payment.formatCardNumber(number, 16);
				  </script>
                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CardNumber"></span>
                     <span id="cardRange" for=""> </span> </div>
                </div>
                <div class="col-sm-5 col-xs-12">
                  <div id="cards" class="spnCardImg"> 
						<span class="pvisa" title="Visa" ></span> 
						<span class="pmaster" title="Master Card"></span> 
						<span class="pamerican" title="American Express"></span> 
						<span class="pdiners" title="Diners Club"></span> 
						<span class="pdiscover" title="Discover"></span> 
					</div>
                </div>
              </div>
              <div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Card Holder's Name<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12">
                  <div class="form-group-icon-left form-group-filled "> <font class="validation_star" color="red">*</font>
                    <form:input id="payments_card_second" path="payment.cardHolderName" class="form-control text-box card_type col-xs-12 textOnly" placeholder="Card Holder's Name" type="text" name="Payments.CardHolderName" data-val-required="Please provide <b>Card Holder Name</b><br/>" data-val-regex-pattern="^([A-Za-z ]+)$" data-val-regex="Please provide valid <b>Card Holder Name</b>(Entry must contain at least 2 letters (A-Z))<br/>" data-val-length-min="2" data-val-length-max="50" data-val-length="Card holder name length should be 2-50 characters<br/>" data-val="true" />
                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CardHolderName"></span> </div>
                </div>
                <div class="col-sm-5 col-xs-12 hidden-xs">
                  <label>(As it appears on your credit card/debit card)</label>
                </div>
              </div>
              <div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Expiration Date<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12  no-padding">
                  <div class="col-xs-6"> <font class="validation_star" color="red">*</font>
                    <spring:bind path="payment.expiryMonth">
                      <select name="payment.expiryMonth" id="Payments_ExpiryMonth" class="form-control">
                        <c:forEach items="${model.cardMonth}" var="curExp" varStatus="loop">
                          <option value="${loop.index}">${curExp}</option>
                        </c:forEach>
                      </select>
                    </spring:bind>
                  </div>
                  <div class="col-xs-6"> <font class="validation_star" color="red">*</font>
                    <form:select id="Payments_ExpiryYear" path="payment.expiryYear" items="${model.cardyear}" class="form-control card_type" name="Payments.ExpiryYear" data-val-required="The ExpiryYear field is required." data-val-range-min="1" data-val-range-max="3000" data-val-range="Please select <b>card expiration year</b><br/>" data-val-number="The field ExpiryYear must be a number." data-val="true" />
                  </div>
                  <div class="col-xs-12">
                    <div  id="Experrors"> </div>
                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="payment.expiryMonth"></span> <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.ExpiryYear"></span> </div>
                </div>
              </div>
              <div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Card Verification No.<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12">
                  <div class="form-group-icon-left form-group-filled"> <font class="validation_star" color="red">*</font>
                    <form:password id="Payments_CvvNo" path="payment.cvvNo" class="form-control text-box card_type col-xs-12 numbersOnly" placeholder="Card Verification No." maxlength="4" name="Payments.CvvNo" />
                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CvvNo"></span> </div>
                </div>
                <div class="col-sm-5 col-xs-12">
                  <div class="cvvIcon"> <img src="/resources/images/ccv-img.gif" id="ccvimg"><span id="tooltip"><a href="" class="text_link">3 Digit Number From Your Card<span></span></a> </span> </div>
                </div>
                <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CvvNo"></span>
                <div class="col-sm-2 col-xs-12"> </div>
              </div>
            </div>
			
		
			<div class="payment_detail" id="payment-second" style="display:none;">
			
			<div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Second Card Amount<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12">
                  <div class="form-group-icon-left form-group-filled "> <font class="validation_star" color="red">*</font>
                    <form:input id="Payments_Card_second_amount" path="payment.amountToCharge2" class="form-control text-box card_type col-xs-12 groupOfAmont" type="text" name="Payments.CardHolderName" data-val-required="Please provide <b>Card Holder Name</b><br/>" data-val-regex-pattern="^([A-Za-z ]+)$" data-val-regex="Please provide valid <b>Card Holder Name</b>(Entry must contain at least 2 letters (A-Z))<br/>" data-val-length-min="2" data-val-length-max="50" data-val-length="Card holder name length should be 2-50 characters<br/>" data-val="true" />
                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CardHolderName2"></span> </div>
                </div>
                <div class="col-sm-5 col-xs-12 hidden-xs">
                    <c:choose>
                        <c:when test='${xchangeCurrencyCode  == "GBP" }'>
                        </c:when>
                        <c:otherwise>
                            <label>(GBP)</label>
                        </c:otherwise>
                    </c:choose>
                
                </div>
              </div>
              <div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Payment Method<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12"> <font class="validation_star" color="red">*</font>
                  <form:select id="payment-card2" path="payment.cardCode2" class="form-control" onchange="getcardValue2(this,event);" name="ddlCabinClass2" items="${model.cardtype}" />
                 </div>
                <div class="col-sm-5 col-xs-12">
                  <div id="cards2" class="spnCardImg"> 
                  	<span id="VI_32" class="pvisa" title="Visa" default="1" onClick="setccValue2('Visa',event)" style="border: none; cursor:pointer;"></span> 
                  	<span id="CA_32" class="pmaster" onClick="setccValue2('Master Card',event)" style="border: none; cursor:pointer;" title="Master Card" default="2" href="javascript:void(0);"></span> 
                  	<span id="AX_42" class="pamerican" onClick="setccValue2('American Express',event)" style="border: none; cursor:pointer;" title="American Express" default="3" href="javascript:void(0);"></span> 
                  	<span id="DC_32" class="pdiners" onClick="setccValue2('Diners Club',event)" style="border: none; cursor:pointer;" title="Diners Club" default="4" href="javascript:void(0);"></span> 
                  	<span id="DS_32" class="pdiscover" onClick="setccValue2('Discover',event)" style="border: none; cursor:pointer;" title="Discover" default="5" href="javascript:void(0);"></span> 
                  	<!--<span id="CB_32" class="pcarte" onClick="setccValue2('Carte Blanche',event)" style="border: none; cursor:pointer;" title="Carte Blanche" default="6" href="javascript:void(0);"></span> -->
                 </div>
                </div>
              </div>
              <div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Credit or Debit Card Number<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12">
                  <div class="form-group-icon-left form-group-filled "> <font class="validation_star" color="red">*</font>
                    <form:input 
                    	id="Payments_MaskCardNumber2" 
                    	path="payment.maskCardNumber2" 
                    	class="form-control text-box card_type col-xs-12 numbersOnly numbersastsevemaskOnly" 
                    	placeholder="Credit/Debit Card No." 
                    	maxlength="16" 
                    	type="text" 
                    	value="" 
                    	name="Payments.MaskCardNumber2" 
                    	data-val-required="Please provide <b>credit or debit card number</b><br/>" 
                    	data-val-regex-pattern="^([0-9]+)$" 
                    	data-val-regex="Please provide valid <b>Card number</b>(Entry must contain digits (0-9))<br/>" 
                    	data-val="true" />
                    <form:hidden id="Payments_CardNumber2" path="payment.cardNumber2" name="Payments.CardNumber2" />
                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CardNumber2"></span>
                    <span id="cardRange" for=""> </span>
                  </div>
                </div>
                <div class="col-sm-5 col-xs-12 hidden-xs">
                  <label>(Pay with credit or debit card)</label>
                </div>
              </div>
              <input type="hidden" id="totalFareAmount" value="${publishedFare}" />
              
              <div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Expiration Date<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12  no-padding">
                  <div class="col-xs-6"> <font class="validation_star" color="red">*</font>
                    <spring:bind path="payment.expiryMonth2">
                      <select name="payment.expiryMonth2" id="Payments_ExpiryMonth2" class="form-control">
                        <c:forEach items="${model.cardMonth}" var="curExp" varStatus="loop">
                          <option value="${loop.index}">${curExp}</option>
                        </c:forEach>
                      </select>
                    </spring:bind>
                  </div>
                  <div class="col-xs-6"> <font class="validation_star" color="red">*</font>
                    <form:select id="Payments_ExpiryYear2" path="payment.expiryYear2" items="${model.cardyear}" class="form-control card_type" name="Payments.ExpiryYear2" data-val-required="The ExpiryYear field is required." data-val-range-min="1" data-val-range-max="3000" data-val-range="Please select <b>card expiration year</b><br/>" data-val-number="The field ExpiryYear must be a number." data-val="true" />
                  </div>
                                  
                  <div class="col-xs-12">
                    <div  id="Experrors2"> </div>
                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.payment.expiryMonth2"></span> <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.ExpiryYear2"></span> </div>
                </div>
              </div>
              <div class="row form-group margin_mobile">
                <div class="col-sm-3 col-xs-12 hidden-xs">
                  <label class="semi_bold">Card Verification No.<font color="red">*</font></label>
                </div>
                <div class="col-sm-4 col-xs-12">
                  <div class="form-group-icon-left form-group-filled "> <font class="validation_star" color="red">*</font>
                    <form:password id="Payments_CvvNo2" path="payment.cvvNo2" class="form-control text-box card_type col-xs-12 numbersOnly" placeholder="Card Verification No." maxlength="4" name="CreditCardSecond.CvvNo2" />
                    <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CvvNo2"></span> </div>
                </div>
                <div class="col-sm-5 col-xs-12">
                  <div class="cvvIcon"> <img src="/resources/images/ccv-img.gif" id="ccvimg2"><span id="tooltip2"><a href="" class="text_link">3 Digit Number From Your Card<span></span></a> </span> </div>
                </div>
                <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.CvvNo2"></span>
                <div class="col-sm-2 col-xs-12"> </div>
              </div>
            </div>
			
			<c:if test="${booking.flight.gds != 9}"> <div class=" hide payment-more">[+] Pay with two credit or debit cards (optional)</div></c:if>
			
			
          </div>
          <div class="creditinformation"><i class="fa fa-shield"></i> Your credit card information is protected by a Secure SSL Encrypted by GoDaddy</div>
        </div>
        <!--Payment  Billing Information end -->
     <!--   <div class="resultsBox">
          <h4 class="sub_header"><i class="fa-billing"></i> Credit Card Contact Information</h4>
          <div class="clearfix"></div>
          <div class="content payment_detail">
          	
			<c:if test="${booking.flight.gds == 9}">
                <form:hidden path="contact.intcode" value="44" id="contact_intcode" class="form-control text-box" minlength="1" placeholder="Country Code"  maxlength="5" />
                <form:hidden path="contact.areacode" value="1" id="contact_areacode" minlength="1" placeholder="Area Code" maxlength="5" class="form-control text-box" />
            </c:if>
             
            <div class="row form-group margin_mobile">
              <div class="col-sm-3 col-xs-12 hidden-xs">
                <label class="semi_bold">Billing Phone<font color="red">*</font></label>
              </div>
              <div class="col-sm-4 col-xs-12">
                <div class="form-group-icon-left form-group form-group-filled "> <font class="validation_star" color="red">*</font>
                  <form:input 
                  	path="contact.billingPhone" 
                  	id="contact_billingPhone" 
                  	minlength="10"  
                  	maxlength="15" 
                  	placeholder="Billing Phone"  
                  	class="form-control text-box card_type col-xs-12 numbersOnly" 
                  	type="text" 
                  	name="Payments.Address1" 
                  	data-val-required="Enter <b>billing address</b>" 
                  	data-val-length-min="5" 
                  	data-val-length-max="80" 
                  	data-val-length="Enter billing address length should be 5-80 characters" 
                  	data-val="true" />
                  <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span></div>
              </div>
              <div class="col-sm-5 col-xs-12 hidden-xs">
                <label>(As on file with bank or credit card company)</label>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-3 col-xs-12 hidden-xs">
                <label class="semi_bold">Alternate Phone</label>
              </div>
              <div class="col-sm-4 col-xs-12 margin_mobile">
                <div class="form-group-icon-left form-group-filled ">
                  <form:input path="contact.mobile" id="contact_mobile" minlength="10" placeholder="Alternate Phone"  maxlength="15" class="form-control text-box card_type col-xs-12 numbersOnly" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                  <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="Payments.Address1"></span></div>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-3 col-xs-12 hidden-xs">
                <label class="semi_bold">Email<font color="red">*</font></label>
              </div>
              <div class="col-sm-4 col-xs-12 margin_mobile"> <font class="validation_star" color="red">*</font>
                <form:input path="contact.email" id="contact_email" class="form-control text-box card_type col-xs-12" placeholder="Email" type="text" name="Payments.Address1" data-val-required="Enter <b>billing address</b>" data-val-length-min="5" data-val-length-max="80" data-val-length="Enter billing address length should be 5-80 characters" data-val="true" />
                <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="contact_email"></span></div>
            </div>
            <div class="row form-group">
              <div class="col-sm-3 col-xs-12 hidden-xs">
                <label class="semi_bold">Retype Email<font color="red">*</font></label>
              </div>
              <div class="col-sm-4 col-xs-12 margin_mobile"> <font class="validation_star" color="red">*</font>
                <form:input path="contact.email1" id="contact_email1" class="form-control text-box card_type col-xs-12" placeholder="Retype Email" type="text" name="contact.email1" />
                <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="contact_email1"></span></div>
            </div>
          </div>
        </div> -->
        <!-- Credit card Information end -->
        <div class="bottom-text col-xs-12 text-center visible-lg">

          <p class="depture checkbox">By clicking, <b>Book Now</b> I agree that I have read and accepted ${data.siteName} &nbsp; <a class="text_link" href="/terms-and-conditions" target="_blank">Terms &amp; Conditions</a> and <a class="text_link" href="/privacy-policy" target="_blank">Privacy Policy</a>. <br />
            <div class="hidden-xs">We would however recommend reading them before proceeding further.</div></p>
        </div>
        <div class="bottom-text col-xs-12 text-center hidden-lg">

          <p class="depture checkbox">By clicking, <b>Book Now</b> I agree that I have read and accepted ${data.siteName} &nbsp; <a class="text_link" href="javascript:void(0);" data-toggle="modal" data-target="#popup_terms_and_condition">Terms &amp; Conditions</a> and <a class="text_link" href="javascript:void(0);" data-toggle="modal" data-target="#popup_privacy_policy">Privacy Policy</a>. </p>
        </div>
        <div class="col-xs-12">
          <div class="col-sm-4"></div>
          <div class="col-sm-4 text-center">
            <div class="buton button-width">
              <form:hidden path="UserSessionID" id="randamIds" name="UserSessionID" />
              <input type="hidden" id="finalId" value="x123456" />
              <input type="hidden" id="randamId" value="x123456" />
              <form:hidden name="img_val" path="img_val" id="img_val" value="" />
              <button id="btnSearchFlights" class="purchase-btn btn-lg" type="button" onClick="submitForm();"><i class="fa fa-lock" aria-hidden="true"></i> Book Now</button>
            </div>
          </div>
        </div>
        <div class="col-xs-12 text-secure hidden-xs"> Your payment details are secured via 256 Bit encryption by GoDaddy </div>
      </div>
      <!---------------Right Side Bar-------------->
      <div class="col-md-3 hidden-xs hidden-sm">
        
          <div class="resultsBox">
              <h4 class="sub_header"><i class="fa-payment"></i>Why Book with Travelopick?</h4>
              <div class="content">
			    <div class="new-list-view">&#10003; &nbsp;  Best Price Guarantee </div>
                <div class="new-list-view">&#10003; &nbsp;  Customer Support round the clock </div>
              
                <div class="new-list-view">&#10003; &nbsp; Quick, Easy and Safe booking flow </div>
				
				 <div align="center">
					<img src="/resources/images/cloudflare-footer-logo-black.png" height="30" />  &nbsp;
					<img src="/resources/images/godaddy-ssl.png" height="30" /><br />  <br />
						<img src="/resources/images/atol.png" height="40">&nbsp; &nbsp;
					<img src="/resources/images/tta.png" height="40">
				 </div>
				 
              </div>
          </div>


          <div class="resultsBox">
              <h4 class="sub_header"><i class="fa-payment"></i>Need Help: Support</h4>
              <div class="content">
                <div class="need-h-support">
                  <p>The team of professional travel experts are ready to help! Call us and we'll help you plan the perfect vacation for you and your family.</p>
                  <div class="call-no">
                    <a href="tel:${data.tfnNo}"><label>Call Us Toll Free 24/7</label>
                    <c:out value='${data.tfnNo}' /></a>
                  </div>
                  <div class="call-no">
                     <a href="mailto:${data.supportMail}"> <label>Email Support</label>                     
                      <i class="fa fa-envelope"></i></a>
                    </div>

                    <div class="call-no"><a href="mailto:Support@travelopick.com">Support@travelopick.com</a></div>

                </div>
              </div>
          </div>



      </div>
    </div>
    <!--Modification ends-->
  </div>

  <iframe width="1" height="1" frameborder="0" scrolling="no" src="${data.siteUrl}kountLogo/171285/${booking.searchId}"> <img width="1" height="1" src="${data.siteUrl}resources/${data.siteId}/images/logo.png?m=171285&s=${booking.searchId}"> </iframe>
  </form:form>
</div>
<!--Main-->
<!--Footer Start-->
<div class="hidden-xs">
  <jsp:include page="result_footer.jsp"></jsp:include>
</div>


<!--mobile popup -->
<!-- Strat popup Box 14-->
<!-- terms and condition -->
<div id="popup_terms_and_condition" class="modal fade hidden-lg" role="dialog">
  <div class="modal-content">
    <div class="close_window">
      <button type="button" class="back_btn" data-dismiss="modal"><span class="fa fa-angle-left"></span></button>
      Terms &amp; Conditions
      <button type="button" class="close_btn" data-dismiss="modal">X</button>
    </div>
    <jsp:include page="popup-terms-conditions.jsp"></jsp:include>
  </div>
</div>
<!-- Privacy policy popup-->
<div id="popup_privacy_policy" class="modal fade hidden-lg" role="dialog">
  <div class="modal-content">
    <div class="close_window">
      <button type="button" class="back_btn" data-dismiss="modal"><span class="fa fa-angle-left"></span></button>
      Privacy policy
      <button type="button" class="close_btn" data-dismiss="modal">X</button>
    </div>
    <jsp:include page="popup-privacy-policy.jsp"></jsp:include>
  </div>
</div>
<!-- travel-insurance popup-->
<div id="popup_travel_insurance" class="modal fade hidden-lg" role="dialog">
  <div class="modal-content">
    <div class="close_window">
      <button type="button" class="back_btn" data-dismiss="modal"><span class="fa fa-angle-left"></span></button>
      Travel Protection
      <button type="button" class="close_btn" data-dismiss="modal">X</button>
    </div>
    <jsp:include page="popup-travel-insurance2.jsp"></jsp:include>
  </div>
</div>
<!-- baggage policy popup-->
<div id="popup_baggage_policy" class="modal fade hidden-lg" role="dialog">
  <div class="modal-content">
    <div class="close_window">
      <button type="button" class="back_btn" data-dismiss="modal"><span class="fa fa-angle-left"></span></button>
      Baggage Protection
      <button type="button" class="close_btn" data-dismiss="modal">X</button>
    </div>
    <jsp:include page="popup-baggage-protection.jsp"></jsp:include>
  </div>
</div>
<!-- Baggage Fees popup-->
<div id="popup_baggage_fees" class="modal fade hidden-lg" role="dialog">
  <div class="modal-content">
    <div class="close_window">
      <button type="button" class="back_btn" data-dismiss="modal"><span class="fa fa-angle-left"></span></button>
      Baggage Fees
      <button type="button" class="close_btn" data-dismiss="modal">X</button>
    </div>
    <jsp:include page="/baggage-fees-popup?airline=${booking.bagAirline}"></jsp:include>
  </div>
</div>
<!-- Tax Fees popup-->
<div id="popup_taxes_fees" class="modal fade hidden-lg" role="dialog">
  <div class="modal-content">
    <div class="close_window">
      <button type="button" class="back_btn" data-dismiss="modal"><span class="fa fa-angle-left"></span></button>
      Taxes Fees
      <button type="button" class="close_btn" data-dismiss="modal">X</button>
    </div>
    <jsp:include page="popup-taxes-fees.jsp"></jsp:include>
  </div>
</div>
<!--  End popup Box 14 -->

<!-- Tax Fees popup-->
	
	<!-- UPA popup Model start-->	
	<div id="upaModal" style="display:none;">
	<div class="upaModel_outer">
		<div class="upapopup">
		 
		 <button type="button" class="close" data-dismiss="modal">&times;</button>
			<ul class="upa_airline_tab">
			 	 <c:forEach items="${booking.flight.segments}" var="flight" varStatus="loop">
				  <c:if test="${flight.routeMedia != null}">
				  <c:set var="loopCount" value="${loopCount+1}"/>
				  <c:if test="${loopCount == 1}">
					<li><a class="tab${loop.index+1}" href="javascript:void(0);"> ${flight.displayAirline.name} <span>Flight No.:${flight.flightCode}</span></a></li>
					</c:if>
					<c:if test="${loopCount > 1}">
					<li><a class="tab${loop.index+1}" href="javascript:void(0);">  ${flight.displayAirline.name}<span>Flight No.:${flight.flightCode}</span></a></li>
					</c:if>
					</c:if>
				   </c:forEach> 
			  </ul>
	  
	   <c:forEach items="${booking.flight.segments}" var="flight" varStatus="loop">
	   <c:if test="${flight.routeMedia != null}">
	   <c:set var="loopCountt" value="${loopCountt+1}"/>
	   <c:if test="${loopCountt == 1}">
      <div id="tab${loop.index+1}" class="tabdetail active">
      </c:if>
      <c:if test="${loopCountt > 1}">
      <div id="tab${loop.index+1}" class="tabdetail">
      </c:if>
	   <!-- Big images-->
        <div class="slider-for big-slider">
        <c:forEach items="${flight.routeMedia}" var="routeImg">
        <c:if test="${routeImg.type == 'photo'}">
          <div class="slide"><div class="big-image"><img src="${routeImg.largeURL}" /></div>
          </c:if>
          <c:if test="${routeImg.type == 'video'}">
          <div class="slide"><div class="big-image">
          <iframe width="420" height="315" src="${routeImg.embedURL}" ></iframe>
          </div>
          </c:if>
            <h2>${routeImg.headline}</h2>
            <p>${routeImg.desription}</p>
          </div>
          </c:forEach>
        </div>
		
		<!-- Thumnails start-->
        <div class="slider-nav thumnails-slider">
        
        <c:forEach items="${flight.routeMedia}" var="routeImg">
				<div><img src="${routeImg.thumbURL}"  /></div>
		</c:forEach>
		
          
        </div>
		<!-- Thumnails end-->
      </div>
      </c:if>
	  </c:forEach>
	  
		</div>
		</div>
	</div>
	<!-- UPA popup end-->	
	
	<!--  End UPA Popup Box -->

	<!-- Exit popup -->


<div id="exitpopup" class="exit-pop-call hidden-xs">
<img src="/resources/flight-result/images/payment-exit.gif">
 <h5>Hold up!</h5>
 <p>Get $10 Off per passenger instantly.</p>
 <div class="coupon-code">Use Coupon Code:<span>INSTANT10</span> 
 <p>Applies to this booking only.</p>
 </div>
 <button class="apply" onClick="ga('send', 'event', { eventCategory: 'banner', eventAction: 'click to apply', eventLabel: 'exit pop up'});">Click to Apply</button> </br>
 <button class="thanks" onClick="ga('send', 'event', { eventCategory: 'banner', eventAction: 'no thanks click', eventLabel: 'exit pop up'});">No, thanks</button> 
	<div class="cross">x</div>	
</div>
<!-- Exit popup -->
	

<!--  End popup Box 14 -->
<!-- <script src="/resources/flight-result/js/jquery-1.8.2.min.js"></script>
<script src="/resources/flight-result/js/modernizr.min.js"></script>
<script src="/resources/flight-result/js/respond.min.js"></script>
<script src="/resources/flight-result/js/prefixfree.min.js"></script> -->
<script src="/resources/flight-result/js/bootstrap.min.js"></script>
<script src="/resources/flight-result/js/jquery.validate.min.js?22082017"></script>
<script src="/resources/flight-result/js/angular-animate/angular-animate.js"></script>
<script src="/resources/flight-result/js/angular-busy.js"></script>
<script src="/resources/flight-result/js/html2canvas.js?10042018"></script>
<script src="/resources/flight-result/js/jquery.plugin.html2canvas.js?10042018"></script>
<script src="/resources/flight-result/js/route-happy.js"></script>
<script src="/resources/flight-result/js/payment_tf_1.9_5.js?0907"></script>

<%-- <c:choose>
	<c:when test="${bookingWrapper.flight.gds == 9}"> --%>	   
		
	<%-- </c:when>
	<c:otherwise>	 
		<script src="/resources/flight-result/js/payment_1.9_5.js"></script>
	</c:otherwise>
</c:choose> --%>


<script src="/resources/flight-result/js/angular-local-storage.min.js"></script> 
<script>
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
    });
</script>

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
  <fmt:parseDate value="${depart[0]}" var="dateObject" pattern="MM-dd-yyyy" />
  <fmt:formatDate pattern="MM-dd-yyyy" value="${dateObject}" var="dateObject2"/>
  <c:choose>
    <c:when test="${search.tripType=='2'}">
      <c:set var="returns" value="${fn:split(search.returnDate,'T')}"/>
      <fmt:parseDate value="${returns[0]}" var="rdateObject" pattern="MM-dd-yyyy" />
      <fmt:formatDate pattern="MM-dd-yyyy" value="${rdateObject}" var="rdateObject2"/>
      <%lookretDate=(String)pageContext.getAttribute("rdateObject2").toString(); %>
    </c:when>
  </c:choose>
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
<div class="page_overlay"></div>
<!-- Exit popup -->
<div style="display: none; width:100%; height:100%; position:fixed; background:rgba(0,0,0,0.8); top:0; filter:alpha(opacity=0.8); z-index:15;" id="exitpopup_bg"></div>
<div id="exitpopup" class="exit-pop-up">
  <div class="coupon-info">
    <div class="coupon">Use Coupon Code</div>
    
  </div>
  <div class="cross">x</div>
</div>
<!-- Exit popup -->
<script type="text/javascript">
/* currentLocation = window.location;
//alert("full value : "+currentLocation);
arr = currentLocation.toString().split('/');
var strFile = arr[arr.length-1];
document.getElementById("currentLocation").value=strFile; */
</script>
<script>
var flight_originid= '<%=lookfromCity%>';
var flight_destid= '<%=looktoCity%>';
var flight_startdate='<%=lookdepDate%>';
var flight_looktrip='<%=looktrip%>';
var flight_enddate="";
<%if (looktrip.equalsIgnoreCase("2")){%>
 flight_enddate= '<%=lookretDate%>';
<%}%>

var flight_lookadult='<%=lookadult%>';
var flight_lookchild='<%=lookchild%>';
var flight_lookinfant='<%=lookinfant%>';
var flight_lookcabin='<%=lookcabin%>';
var flight_lookinfantws='<%=lookinfantws%>';



 var show = true;
 var key = false;
var windowIMA;
function leave() {
if (key) {
windowIMA=window.open("/existpopup?search="+flight_originid+","+flight_looktrip+","+flight_destid+","+flight_startdate+","+flight_enddate+","+flight_lookadult+","+flight_lookchild+","+flight_lookinfant+","+flight_lookinfantws+","+flight_lookcabin+",_p",  "scrollbars=yes");
//windowIMA.focus();

        // assign the methods focusPopup to the window events that may cause it to loose focus
      //  window.onmousedown = focusPopup;
     //   window.onkeyup = focusPopup;
     //   window.onmousemove = focusPopup;

       
}
}

       function focusPopup() {
            if (windowIMA && !windowIMA.closed) {
                windowIMA.focus();
            }
            }  
            
$(document).on("click","a",function() {
      key=false; 
 });
 if (key) {
   // window.addEventListener('beforeunload', leave, true);
} 
/* 
checkFirstVisit();
function checkFirstVisit() {
  if(document.cookie.indexOf('mycookie')==-1) {
    document.cookie = 'mycookie=1';
  }
  else {
     
   windowIMA.close();
  }
} */
  
 
</script>
<%
    if (session.getAttribute("utm_source") == null) {
       
    } else {
    String utmSou=(String)session.getAttribute("utm_source");
   
   
%>

<%    
    
    } %>
<!--M flights detail show hide 12-07-->
<script type="text/javascript">
$(document).ready(function(){
	$("#fixed_price").click(function() {
$('html,body').animate({
	scrollTop: $("#main_price").offset().top - 50},
	'slow');
});
});

function Showtsa(id){
    if ($(window).width() < 768) {
			$(".page_overlay").show();
			$("#tsa-bg"+id).show(600);
            $('body').addClass('open-upa');
		}
		else{
		$("#tsa"+id).text($("#tsa"+id).text() == '[-] Hide Info' ? '[+] More Info' : '[-] Hide Info');
		$("#tsa-bg"+id).slideToggle(600);
		}	
		
		
    }
    
$(document).ready(function(){
    
   /*  $(".more-option").click(function(){
		if ($(window).width() < 768) {
			$(".page_overlay").show();
			$(".tsa-bg").show(600);
            $('body').addClass('open-upa');
		}
		else{
		$(this).text($(this).text() == '[-] Hide Option' ? '[+] More Option' : '[-] Hide Option');
		$(".tsa-bg").slideToggle(600);
		}	
    }); */
	$(".tsa-close").click(function(){
		$(".tsa-bg").hide(600);
		$(".page_overlay").hide();
		$('body').removeClass('open-upa');
    });
    
    $(".tsa-button").click(function(){
		$(".tsa-bg").hide(600);
		$(".page_overlay").hide();
		$('body').removeClass('open-upa');
    });
	
});;
</script>
<script type="text/javascript">
	
	(function(){
	
	$('#flightdetails').on('hide.bs.collapse', function() {
		console.log('show');
	    $('#intro-switch').html('Show <i class="fa fa-angle-down"></i>');
	});
	$('#flightdetails').on('show.bs.collapse', function() {
	    $('#intro-switch').html('Hide <i class="fa fa-angle-up"></i>');
	})
	
	})();
	
	
	
	//fare rule
	
	$('.show_farerule').click(function(){
		if($(window).width() < 767){
		$('.fare_detail').slideToggle();
		}
	
	});
	
	
	</script>
<!--Content show hide -->
<script>
	 
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
//



    </script>
<script>
//Payment Price Summery fixed right side
	
 $(window).load(function() {
  priceScroll();
  siftingdiv();

 });
// 
  $(window).scroll(function() {
  priceScroll();
 });
 
 function priceScroll(){
   if($(this).scrollTop() > 700) {
$('.right_price').css({"top": "0px", "position": "fixed"}); 
  
  
 } else {
$('.right_price').css({"position": "static"}); 
  
 }
 }
	

</script>
<script>

$(document).ready(function () {
    $('#insurance_radio input').click(function () {
        $('#insurance_radio input:not(:checked)').parent().removeClass("selected_insurance");
        $('#insurance_radio input:checked').parent().addClass("selected_insurance");
    });   
	checkExpiration();
	//Payment price slide
	$('.traveler-fees-toggle').click(function(){
		$(".traveler-fees-slide").slideUp('slow');
		$(".fa-angle-double-up").removeClass("fa-angle-double-up").addClass("fa-angle-double-down");
		
		if (($(this).next(".traveler-fees-slide").css("display")) == "none") {
		$(this).next(".traveler-fees-slide").slideDown('slow');
		$(this).find(".fa-angle-double-down").removeClass("fa-angle-double-down").addClass("fa-angle-double-up");         
        }
	});
	//
	
	// 
});

function checkExpiration(){
		//hideCouponHeader();
		console.log("checking coupon");
		var values = sessionStorage.getItem(0);
		if(values){
			var values = sessionStorage.getItem(0).split(";");
		//console.log(document.querySelector(".code").firstChild);
		//document.querySelector(".code").firstChild.textContent = values[2];
		showCouponHeader(values[2]);
		//console.log(values[2]);
		//console.log("set date:"+values[3]);
		//console.log("Now date:"+ new Date());
		if (values[3] < new Date()) {
			document.querySelector(".code").firstChild.textContent = "";
		    sessionStorage.removeItem(0);
		}
		}else{
			//document.querySelector(".pdc-block").classList.remove("makeHidden");
			document.querySelector(".home_container").classList.add("makeHidden");
		}
		
	}
	var type = false;
function showCouponHeader(coupon){
        document.querySelector(".home_container").classList.remove("makeHidden");
		document.querySelector(".code").firstChild.textContent = coupon;
		var ele = document.querySelectorAll(".pdc-coupon-bg div");
		ele[4].innerHTML = "Congratulation! Your personalized discount <br/>code has been applied successfully.";
		document.getElementById("couponsValue").value=coupon;
		document.getElementById("couponsType").value="PDC";
		 angular.element(document.getElementById("target")).scope().collapsed =true;
    // angular.element(document.getElementById("target")).scope().subscribed = !angular.element(document.getElementById("target")).scope().subscribed;
     angular.element(document.getElementById("target")).scope().selectedCoupons=coupon;
     angular.element(document.getElementById("target")).scope().checkCoupons('PDC');
	}
	
	function eventFire(el, etype){
	  if (el.fireEvent) {
	    el.fireEvent('on' + etype);
	  } else {
	    var evObj = document.createEvent('Events');
	    evObj.initEvent(etype, true, false);
	    el.dispatchEvent(evObj);
	  }
	}
	
	
	  var ele = document.querySelector("#payments_card_first_amount");
	  var ele2 = document.querySelector("#Payments_Card_second_amount");
	  
	  var publishedFare =  ${fn:replace(publishedFare, ',', '')};
    ele.value = publishedFare.toFixed(2);
    ele2.value= "0.00";
  
     
    ele.addEventListener("focusout", function(){
    	this.value = (this.value - 0).toFixed(2);
    	publishedFare = $("#grandTotalMacpSet").val();
    	if(publishedFare == "0.00"){
    	publishedFare = $("#totalValue").val();
    	}
    	var convRatio = document.getElementById('convRatio').value;
    	 var f=  ((publishedFare) - this.value).toFixed(2)<0 ? 0 : 1;
    	//ele2.value = ((publishedFare) - this.value).toFixed(2);
    	if(f==0){
    	ele2.value=((publishedFare)).toFixed(2)
    	ele.value="0.00";
    	}else{
    	ele2.value = ((publishedFare) - this.value).toFixed(2);
    	}
    	/* if(((publishedFare) - this.value).toFixed(2)<0){
	   	ele.value=0.00;
	   	} */
    	paymentcard2.setAttribute('required',true);
    	$("#booking").validate().element("#Payments_Card_second_amount");
    	
    })
      
	  ele2.addEventListener("focusout", function(){
	   	this.value = (this.value - 0).toFixed(2);
	   	publishedFare = $("#grandTotalMacpSet").val();
	   	if(publishedFare == "0.00"){
    	publishedFare = $("#totalValue").val();
    	}
	   	var convRatio = document.getElementById('convRatio').value;
         var f=  ((publishedFare) - this.value).toFixed(2)<0 ? 0 : 1;
    	//ele2.value = ((publishedFare) - this.value).toFixed(2);
    	if(f==0){
    	ele.value=((publishedFare)).toFixed(2)
    	ele2.value="0.00";
    	card2Required = false;
    	}else{
    	ele.value = ((publishedFare) - this.value).toFixed(2);
    	card2Required = true;
    	}	

	    	if(((publishedFare) - this.value).toFixed(2)<0){
	   	ele2.value=0.00;
	   	 card2Required = false;
	   	}else{
	   	if(this.value>0){
	   	 card2Required = true;
	   	 }else{
	   	 	 card2Required = false;
	   	 }
	   	} 
    	//ele.value = ((publishedFare) - this.value).toFixed(2);
    	$("#booking").validate().element("#payments_card_first_amount");
    	$("#booking").validate().element("#Payments_MaskCardNumber2");
    	$("#booking").validate().element("#Payments_CardNumber2");
        $("#booking").validate().element("#Payments_CvvNo2");
        $("#booking").validate().element("#Payments_ExpiryYear2");
    })
    //agent fees
    $(document).ready(function(){
		$('.agentfees').click(function(){
			$('.agentDiv').toggle();
		});
		
		// sticky
		var div_top = $('.price-block-top').offset().top;

$(window).scroll(function() {
    var window_top = $(window).scrollTop() - 0;
    if (window_top > div_top) {
        if (!$('.price-block-top').is('.sticky')) {
            $('.price-block-top').addClass('sticky');
        }
    } else {
        $('.price-block-top').removeClass('sticky');
    }
});

// sticky
	});
	
//	window.onLoad = checkExpiration();
</script> 



	 <!-- Facebook Pixel Code -->





<!-- End Facebook Pixel Code -->

</body>
</html>
