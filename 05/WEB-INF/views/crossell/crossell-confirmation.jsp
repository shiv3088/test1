<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<html lang="en" class="no-js"> <!--<![endif]-->
<head> 
<jsp:include page="components/header/theme.jsp" />  
<script src="/resources/js/crossell/confirmation.js"></script>
<script>
    window.history.forward(-1);
    function noBack() {
        window.history.forward();
    }
    function imgError(img,srcc) {
        img.error="";
        img.src=srcc;
    }
</script>
</head>
<body onload="noBack();" onpageshow="if (event.persisted) noBack();" onunload="">
<jsp:include page="components/header/navigation.jsp" />  
<div class="confirmation-component">
    <div class="container">
        <div class="col-xs-12 col-md-10 col-md-push-1">
            

            <div class="row no-gutters border-bottom">
                <div class="col-sm-9">
                    <div class="toll-free-number hidden-xs">
                        <h1>Need help, Our 24x7 Toll Free Support :
                            <code><a href="tel:+44-800-972-3035">+44-800-972-3035</a></code>
                        </h1>
                    </div>
                    <div class="toll-free-number mobile visible-xs">
                        <h1>Our 24x7 Toll Free Support :
                            <code><a href="tel:+44-800-972-3035">+44-800-972-3035</a></code>
                        </h1>
                    </div>
                </div>
                <div class="col-sm-3 text-right">
                    <div class="cxl-print-detail">
                        <button class="btn btn-primary" onclick='javascript:window.print()'><i class="fa fa-mail"></i> Print </button> 
                        <button class="btn btn-primary" id="email"><i class="fa fa-email"></i> Email </button>
                        <div class="cxl-email-send text-left" id="sendEmail" style="display:none;">
                            <i class="fa fa-close cursor" id="closeMailBox"></i>
                            <div class="wrap-one">
                                <input type="text" id="emailName" placeholder="You email Id" />
                                <button onClick="sendMail();" class="btn btn-primary">Submit</button>
                            </div>
                            <p class="errorMsg" id="sendEmailError" style="display:none;">Massage error</p>
                            
                        </div>
                    </div>
                </div>
            </div>
			<c:if test="${bookingWrapper.macp =='Yes'}"> 
			<div class="row">
                <div class="col-sm-12 text-center">
                    <a class="img-responsive" href="tel:1-800-497-3580" onclick="ga('send', 'event', 'Phone Call', 'Click to Call', '1-800-497-3580');">
                        <img src="/resources/images/concierge-program-lg.gif" alt="">
                    </a>
                </div>
            </div>
			</c:if>
            <div class="row">
                <div class="col-sm-12">
                    <div class="car-conf-number">
                        <div class="conf-box two"><i class="fa fa-thumbs-up"></i></div>
                        <div class="conf-box two">
                            <div class="confirmed">
                                Your flight booking is confirmed and booking ID is
                            </div>
                        </div>
                        <div class="conf-box three">
                            <b>${bookingWrapper.bookingId}</b> <!-- / <b class="red">Pending</b> -->
                        </div>
                    </div>
                </div>
            </div>
 			<c:if test="${bookingWrapper.flexSearch ==  'yes' || bookingWrapper.nearBy ==  'yes'}">
            <div class="row">
                <div class="col-sm-12">
                <c:if test="${bookingWrapper.flexSearch ==  'yes'}">
                    <p class="cxl-flight-condition"><strong class="violet">Kind Attention:</strong> This is a flexible date that you Booked. In case you would like to enquire more about this you may call us on our toll free number: <a class="red" href="tel:+44-800-972-3035">+44-800-972-3035</a>.</p>
                    </c:if>
                    <c:if test="${bookingWrapper.nearBy ==  'yes'}">
                     <p class="cxl-flight-condition"><strong class="violet">Kind Attention:</strong> This is a Near By Airport that you Booked. In case you would like to enquire more about this you may call us on our toll free number: <a class="red" href="tel:+44-800-972-3035">+44-800-972-3035</a>.</p>
                     </c:if>
                </div>
            </div>
            </c:if>

            <!-- Rental Hotel Overview -->
            <jsp:include page="components/confirmation/flight.jsp" /> 
            <!-- End Rental Hotel Overview -->
            
            <!-- Rental Hotel Overview -->
            <c:if test="${bookingHotelWrapper.hotel != null}">
            <jsp:include page="components/confirmation/hotel.jsp" /> 
            <!-- End Rental Hotel Overview -->
            </c:if>

			<c:if test="${parkingBookRequest.parkingLotToBook != null}">
            <!-- Rental Park n Fly Overview -->
            <jsp:include page="components/confirmation/parkn-fly.jsp" /> 
            <!-- End Rental Park n Fly Overview -->
			</c:if>
            <c:if test="${carBookRequest.carReference != null}">
            <!-- Rental Car Overview -->
            <jsp:include page="components/confirmation/car.jsp" /> 
            <!-- End Rental Car Overview -->
             </c:if>
             
        </div>
    </div>
    <div class="top-space row"></div>
</div>
<jsp:include page="components/footer/footer.jsp" ></jsp:include> 
<script>
    var showMailDiv = function(){
        $('#cxlEmailDiv').slideDown();
    }
    $('#closeMailBox').click(function(){
        $(this).parent().slideUp();
    })
</script>
</body>
</html>