<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE HTML>
<html lang="en" data-ng-app="dynamicPageApp">
<head>
<title>Car Supplier - Travelopick</title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />

<!--StyleSheet here-->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/car/css/car-style.css?18042018" rel="stylesheet">

<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/angular.js"></script>
<script src="/resources/common/js/slick_carousel.js"></script>
<script src="/resources/js/travel.min.js"></script>
<!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	
			<!--  / Google analytics \ -->
<jsp:include page="../../google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
	
</head>
<body class="car_destination_body">
<!--  / Header Box \ -->
<jsp:include page="../../home_header.jsp"></jsp:include>
<!-- Header Box -->

<div class="clearfix"></div>

<!--  / Banner Box \ -->
<div  class="destinationBanner" style="background-image:url(/resources/car/images/car-banner2.jpg)">
  <div class="container">
    <div class="row">
      <!-- search engine -->
   <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 search_engine">
        <jsp:include page="/home_engine_new"></jsp:include>
      </div>
	  
	   <div class="col-lg-7 hidden-xs hidden car-supplier-text">
	   <img src="/resources/car/images/suppliers/enterprise.jpg">
	   <h2>Find Best Car rentals with us</h2>
	  
	   </div>
      <!-- end search engine -->

    </div>
  </div>
</div>
<!--  \ Banner Box / -->

<!--  / main container \ -->
<div class="mainCntr hidden-xs">
  <div class="container">
   <div class="car-discount">Discount automatically applied. Nothing to enter to get this great deal!</div>
    <!--  / Top Box \ -->
    <div class="topBox">
      <div class="row row-flex">
        <div class="col-sm-4 block"> <span class="icon dedicated"></span>
          <h4>Dedicated Support</h4>
          <p>Support and special services around the clock</p>
        </div>
        <div class="col-sm-4 block"> <span class="icon best-price"></span>
          <h4>Best Price, Easy Booking</h4>
          <p>Serach compare &amp; book</p>
        </div>
        <div class="col-sm-4 block"> <span class="icon security"></span>
          <h4>Payment Security</h4>
          <p>Secure &amp; multiple payment options</p>
        </div>
      </div>
    </div>
    <!--  \ Top Box / -->
	
    <!--  / Text Box \ -->
    <div class="textBox">
      <div class="row">

        <div class="col-xs-12">
          <h2>Cruise Around the USA with Our Exclusive Car Rental Deals</h2>
          <p>All geared up for your escapades? Well, allow us to make your vacation a tad more special with our exciting selection of car rentals. With such a wide array of car rental deals to choose from, you're sure to find a ride that caters to all your conveyance needs.  </p>
		  <p>All the car rental offers are designed to serve the varied requirements of a traveler. Whether you're a tourist and want to spend your entire day exploring the city or you're visiting a place for business, we will find you the best ride that will make your transit in the city absolutely hassle-free. When you book with us, you can rest assured that you'll be well taken care of.      </p>
		  <p>hether you're looking for a comfortable SUV or a hatchback to keep your expenses in check, we promise to find you your desired vehicle.       </p>
		  <p>Uncover the Historical Chronicles of Boston in a hi-tech car.</p>
		  <p>Go wild in Las Vegas with a swanky ride. </p>
		  <p>Explore cosmopolitan NYC on luxury wheels. </p>
		  <p>No matter which part of the country you want to explore, you'll find the best car rental deals on our website. </p>
		  <h2>Compare Car Rental Deals and Grab Your Perfect Ride</h2>
		  <p>We offer the best car rental deals from top car rental companies in the United States of America. We associate only with the best names in the industry who over a period of time have established their own goodwill and are known to offer superlative services. Go through the names provided below, choose the option that suits you best and embark on a trip to remember. Bon voyage! </p>
		  
		  
        </div>
      </div>
    </div>
    <!--  \ Text Box / -->
	
    <!--  / Car rentals deals Box \ -->
    <div class="car-rentals-deals">
      <h2 class="heading">Car rentals deal in other cities</h2>
      <div class="row car-deal-slider">
        <div class="col-sm-3"> <a href="/car-hire/orlando/mco">
          <figure><img src="/resources/car/images/destinations/orlando.jpg" alt="car Image" class="img-responsive" /></figure>
          <div class="crDealDiscription">
            <div class="row">
              <div class="col-xs-12"> Car Rentals in Orlando </div>
            </div>
          </div>
          </a> </div>
        <div class="col-sm-3"> <a href="/car-hire/las-vegas/las">
          <figure><img src="/resources/car/images/destinations/las-vegas.jpg" alt="car Image" class="img-responsive" /></figure>
          <div class="crDealDiscription">
            <div class="row">
              <div class="col-xs-12"> Car Rentals in Las Vegas </div>
            </div>
          </div>
          </a> </div>
        <div class="col-sm-3"> <a href="/car-hire/london/lon">
          <figure><img src="/resources/car/images/destinations/london.jpg" alt="car Image" class="img-responsive" /></figure>
          <div class="crDealDiscription">
            <div class="row">
              <div class="col-xs-12"> Car Rentals in London </div>
            </div>
          </div>
          </a> </div>
        <div class="col-sm-3"> <a href="/car-hire/new-york/nyc">
          <figure><img src="/resources/car/images/destinations/new-york.jpg" alt="car Image" class="img-responsive" /></figure>
          <div class="crDealDiscription">
            <div class="row">
              <div class="col-xs-12"> Car Rentals in New York </div>
            </div>
          </div>
          </a> </div>

      </div>
    </div>
    <!--  \ Car rentals deals Box / -->
	
  </div>
</div>
<!--  \ main container / -->
<script>
$(document).ready(function(){
	$("#flight_tab").removeClass('active');
	$("#hotel_tab").removeClass('active');
    $("#car_tab").addClass('active');
	$("#tab_a").removeClass('active');
	$("#tab_b").removeClass('active');	
    $("#tab_c").addClass('active');	
	
});
 document.getElementById("driverAge").value = "31";
document.getElementById("vendorCode").value = "ET";   
</script>

<script type="text/javascript">
    document.getElementById("carS").className = "carSelect-icon";
</script>
 <jsp:include page="../../home_footer.jsp"></jsp:include>
<!--Footer-->
<!-- script engine -->
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.slides.min.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/i18n/jquery-ui-i18n.js"></script>
<script src="/resources/js/inner_engine_en.js?03272018"></script>
<script src="/resources/js/index_eng_min_1.4.js?03272018qwe"></script>
<!--Use only hotel engin home -->
<!-- <script src="/resources/car/js/carScript.js"></script> -->
</body>
</html>
