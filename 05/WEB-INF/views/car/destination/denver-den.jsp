<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE HTML>
<html lang="en" data-ng-app="dynamicPageApp">
<head>
<title>Cheap Car Rentals in Denver, DEN Car Rental Deals - Travelopick</title>
<meta name="description" content="Search for cheap car rentals in Denver (DEN) with Travelopick. Easy to find great rental car deals in Denver. Book now to save big on your next trip. "/>
<meta name="keywords" content ="Cheap car rentals in Denver, Denver car rentals, Denver rental cars, rent a car in Denver, Denver car rental deals"/>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />

<!--StyleSheet here-->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/car/css/car-style.css" rel="stylesheet">

<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/angular.js"></script>
<script src="/resources/common/js/slick_carousel.js"></script>
<script src="/resources/js/travel.min.js"></script>
<!-- end travel css -->
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
<div  class="destinationBanner" style="background-image:url(/resources/car/images/destinations/denver_se_bg.jpg)">
  <div class="container">
    <div class="row">
      <!-- search engine -->
     <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 search_engine">
        <jsp:include page="/home_engine_new"></jsp:include>
      </div>
	  
	   <div class="col-lg-7 hidden-xs hidden">
        <div class="car-eng-text">
          <h3>Denver</h3>
          <h4>Find the best car deals!</h4>
          <p>Compare the best brands at the prices. Search by price, car type and more</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!--  \ Banner Box / -->

<!--  / main container \ -->
<div class="mainCntr hidden-xs">
  <div class="container">
  
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
      <div class="col-md-4 col-sm-5">
        <div class="car-dest-img"> <img src="/resources/car/images/destinations/denver.jpg" class="img-responsive"> </div>
      </div>
      <div class="col-md-8 col-sm-7">
        <h2>Denver</h2>
        <p>Welcome to "The Mile High City," a dreamland that woos you with 300 days of sunshine, a vibrant cultural scene, eclectic neighborhoods and natural beauty, all gelling up to entice visitors from all across the globe. </p>
        <p>Denver is a glutton's paradise. Housing numerous chef-owned restaurants, foodies get to relish some mouthwatering delicacies cooked with the finest of local ingredients. </p>
        <p>If you wish to discover true shades of Denver, head to its neighborhoods. Art buffs hit River North Art District and The Art District on Santa Fe. Shoppers will be lured to flex their budgets at Cherry Creek. Uptown and Highlands are other prominent hoods featuring cafes, bistros, pubs and gardens. </p>
        <p>Sports fanatics are in for a treat here. With downtown stadiums for football, baseball, hockey and basketball, you're sure to be spoilt for choices. </p>
        <h3>Popular Attractions </h3>
        <ul>
          <li>Denver Botanic Gardens</li>
          <li>Elitch Gardens Theme Park</li>
          <li>Downtown Aquarium</li>
          <li>Denver Zoo</li>
        </ul>
      </div>
    </div>
    <!--  \ Text Box / -->
	
        <!--  / Car rentals deals Box \ -->
    <div class="car-rentals-deals">
      <h2 class="heading">Car rentals deals in other cities</h2>
      <div class="row car-deal-slider">
        <div class="col-sm-3"> <a href="/car-hire/dublin/dub">
          <figure><img src="/resources/car/images/destinations/dublin.jpg" alt="car Image" class="img-responsive" /></figure>
          <div class="crDealDiscription">
            <div class="row">
              <div class="col-xs-12"> Car rentals in Dublin </div>
         
            </div>
          </div>
          </a> </div>
        <div class="col-sm-3"> <a href="/car-hire/las-vegas/las">
          <figure><img src="/resources/car/images/destinations/las-vegas.jpg" alt="car Image" class="img-responsive" /></figure>
          <div class="crDealDiscription">
            <div class="row">
              <div class="col-xs-12"> Car rentals in Las Vegas </div>
            </div>
          </div>
          </a> </div>
        <div class="col-sm-3"> <a href="/car-hire/london/lon">
          <figure><img src="/resources/car/images/destinations/london.jpg" alt="car Image" class="img-responsive" /></figure>
          <div class="crDealDiscription">
            <div class="row">
              <div class="col-xs-12"> Car rentals in London </div>
            </div>
          </div>
          </a> </div>
        <div class="col-sm-3"> <a href="/car-hire/los-angeles/lax">
          <figure><img src="/resources/car/images/destinations/los-angeles.jpg" alt="car Image" class="img-responsive" /></figure>
          <div class="crDealDiscription">
            <div class="row">
              <div class="col-xs-12"> Car rentals in Los Angeles </div>

            </div>
          </div>
          </a> </div>
        <div class="col-sm-3"> <a href="/car-hire/madrid/mad">
          <figure><img src="/resources/car/images/destinations/madrid.jpg" alt="car Image" class="img-responsive" /></figure>
          <div class="crDealDiscription">
            <div class="row">
              <div class="col-xs-12"> Car rentals in Madrid </div>
            </div>
          </div>
          </a> </div>
        <div class="col-sm-3"> <a href="/car-hire/orlando/mco">
          <figure><img src="/resources/car/images/destinations/orlando.jpg" alt="car Image" class="img-responsive" /></figure>
          <div class="crDealDiscription">
            <div class="row">
              <div class="col-xs-12"> Car rentals in Orlando </div>
            </div>
          </div>
          </a> </div>
        <div class="col-sm-3"> <a href="/car-hire/rome/rom">
          <figure><img src="/resources/car/images/destinations/rome.jpg" alt="car Image" class="img-responsive" /></figure>
          <div class="crDealDiscription">
            <div class="row">
              <div class="col-xs-12"> Car rentals in Rome </div>
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
</body>
</html>
