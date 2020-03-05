<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE HTML>
<html lang="en" data-ng-app="dynamicPageApp">
<head>

<title data-product="Rent a Car, Cheap Car Rental, Hire a Car, Airport Car Rental">Rent a Car, Cheap Car Rental, Hire a Car, Airport Car Rental | ${data.siteName}</title>
<meta name="description" content="Looking for cheap rental cars? Rent a car at discounted rates with ${data.siteName}. For exclusive deals on your next rental car choose ${data.siteName} and save time & money." />
<meta name="keywords" content="cheap car rentals, rental cars, car rentals deals, car hire, rent a car, airport car rental" />
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!--StyleSheet here-->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/car/css/car-style.css?26042018" rel="stylesheet">
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/angular.js"></script>
<script src="/resources/common/js/slick_carousel.js"></script>
<script src="/resources/js/travel.min.js"></script>
<!-- end travel css -->
<!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<script>
    var cffTitle = document.title,
cffTitleBlur = document.getElementsByTagName('title')[0].getAttribute('data-product');
window.onblur = function () {
document.title = cffTitleBlur;
}
window.onfocus = function() {
document.title = cffTitle;
}
    </script>
	<!--  / Google analytics \ -->
<jsp:include page="../google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
	
</head>
<body class="car_section" data-ng-controller="dealCtrl">
<!--  / Header Box \ -->
<jsp:include page="../home_header.jsp"></jsp:include>
<!-- Header Box -->
<div class="main">
  
  <!-- Banner Box -->
  <div id="banner" style="background:url(/resources/car/images/car-banner2.jpg) no-repeat center ; background-size:cover ">
    <div class="container">
      <div class="row">
			<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 search_engine">
			  <!-- search engine -->
			  <jsp:include page="/home_engine_new"></jsp:include>
			   <!-- end search engine -->
			   </div>
			   <div class="col-lg-7 hidden-xs hidden">
              <div class="travel-deal"> 
			  <h5>Save on your stay this winter..</h5>
			  <div class="discount">Score a discount of  upto <span>$30</span><br>
					Coupon Code: <span>HTLOFF30<sup>*</sup> </span>
					<div class="review"><a href="javascript:void(0);"><i class="fa fa-info"></i></a>
						<span class="promo-detail"><i class="arrow"></i> ** Discounts may vary depending upon the destination of travel, day of the week, time of booking, duration of stay, and availability of hotel. The discounts displayed here are subject to change any time without prior notice. The Total Minimum Booking Amount needs to be $99 for the discount to be applicable. The discount might vary based on the number of rooms booked. A maximum discount of $6 per room shall be available.<br>
						Book by Date- 28 Feb 2019  <br>            
                        Travel by Date- 31 Jul 2019 </span>
					</div>
				</div>
				</div>
			</div>
      </div>
    </div>
  </div>
  <!-- Banner Box -->
  

		

<!-- car Slider Box --> 

<div class="container">
 
     <div class="crdeals hidden-xs" data-ng-controller="dealCtrl">
    <div class="car-heading">
        Best Car Rental Deals
    </div>
    <div class="row city-slider ">
	       <div class="col-sm-3">
		<div class="car-section" data-ng-click="CarDealSearch('Las Vegas McCarran Intl. Airport,Las Vegas,Nevada,United States', 'LAS', 'SC', '', '10:00', '', '10:00', '')">
		<figure><img src="/resources/car/images/cars/Economy/chevrolet-spark.jpg" alt="car Image"></figure>
        <div class="city-name"> 
            
           <div class="name-b">Las  Vegas (LAS), US </div>
            
            <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>19.78 <br /><small>per day</small></div>
            </div>	
        <div class="price-section"> 
		   <div class="car-name"> Volkswagen Jetta  <br />or Equivalent (Standard )</div>
            <div class="car-type"></div>
		 </div>
            <div class="clr"></div>
		</div>
	  </div>
	       <div class="col-sm-3">
		<div class="car-section" data-ng-click="CarDealSearch('Orlando Intl. Airport,Orlando,Florida,United States', 'MCO', 'eC', '', '10:00', '', '10:00', '')">
          		
		<figure><img src="/resources/car/images/cars/FullSize/chrysler-200.jpg" alt="car Image" /></figure>
        <div class="city-name">
            <div class="name-b">Orlando (MCO), US </div>
            <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>18.75<br /><small>per day</small></div></div>    
        <div class="price-section"> 
		   <div class="car-name"> Kia Roi  <br />or Equivalent (Economy) </div>
            <div class="car-type"></div> 
		 </div>
             <div class="clr"></div>
		</div>
	  </div>
	       <div class="col-sm-3">
		<div class="car-section" data-ng-click="CarDealSearch('Miami Intl. Airport,Miami,Florida,United States', 'MIA', 'SC', '', '10:00', '', '10:00', '')">
        	
		<figure><img src="/resources/car/images/cars/Midsize/dodge-avenger.jpg" alt="car Image" /></figure>
            <div class="city-name"> 
                <div class="name-b">Miami (MIA), US </div>
                <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>09.15<br /><small>per day</small></div> 
            </div>	
        <div class="price-section"> 
		   <div class="car-name"> Kia Roi  <br />or Equivalent (Economy )</div>
             <div class="car-type"></div>
		 </div>
             <div class="clr"></div>
		</div>
	  </div>
            <div class="col-sm-3">
		<div class="car-section" data-ng-click="CarDealSearch('New York City (NYC) - John F. Kennedy Airport,New York,United States', 'NYC', 'SC', '', '10:00', '', '10:00', '')">
       
		 <figure><img src="/resources/car/images/cars/Premium/chevrolet-impala.jpg" alt="car Image" /></figure>
        <div class="city-name"> 
            <div class="name-b">New York (JFK),US </div>
            <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>07.75<br /><small>per day</small></div></div>		    
        <div class="price-section"> 
		   <div class="car-name"> Hyundai Elantra  <br />or Equivalent  (Premium)</div>
            <div class="car-type"> </div> 
		 </div>
             <div class="clr"></div>
		</div>
	  </div>
            <div class="col-sm-3">
		<div class="car-section" data-ng-click="CarDealSearch('Las Vegas McCarran Intl. Airport,Las Vegas,Nevada,United States', 'LAS', 'SC', '', '10:00', '', '10:00', '')">
         		
		<figure><img src="/resources/car/images/cars/Economy/chevrolet-spark.jpg" alt="car Image"></figure>
            <div class="city-name"> <div class="name-b">Las  Vegas (LAS), US </div>
                <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>19.78<br /><small>per day</small></div></div>    
        <div class="price-section"> 
		  
		   <div class="car-name"> Volkswagen Jetta <br />or Equivalent (Standard)</div>
             <div class="car-type"> </div> 
		 </div>
             <div class="clr"></div>
		</div>
	  </div>
		
    </div>
</div>
    

 

    <div class="crdeals hidden-xs hidden" data-ng-controller="dealCtrl">
    <div class="heading">
        <h2>Hot Deals Sale Today</h2>
    </div>
    <div class="row city-slider ">
	  <div class="col-sm-3">
		<div class="car-section" data-ng-click="CarDealSearch('Las Vegas McCarran Intl. Airport,Las Vegas,Nevada,United States', 'LAS', 'SC', '', '10:00', '', '10:00', '')">
          <div class="city-name"> Las  Vegas (LAS), US </div>		
		<figure><img src="/resources/car/images/cars/Economy/chevrolet-spark.jpg" alt="car Image"></figure>
        <div class="price-section"> 
		   <div class="car-type">Standard </div> <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>19.78/<small>per day</small></div>
		   <div class="car-name"> Volkswagen Jetta or Equivalent </div>
		 </div>
		</div>
	  </div>
	  
	  <div class="col-sm-3">
		<div class="car-section" data-ng-click="CarDealSearch('Orlando Intl. Airport,Orlando,Florida,United States', 'MCO', 'eC', '', '10:00', '', '10:00', '')">
          <div class="city-name"> Orlando (MCO), US </div>		
		<figure><img src="/resources/car/images/cars/FullSize/chrysler-200.jpg" alt="car Image" /></figure>
        <div class="price-section"> 
		   <div class="car-type">Economy </div> <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>18.75/<small>per day</small></div>
		   <div class="car-name"> Kia Roi or Equivalent </div>
		 </div>
		</div>
	  </div>
	  
	  <div class="col-sm-3">
		<div class="car-section" data-ng-click="CarDealSearch('Miami Intl. Airport,Miami,Florida,United States', 'MIA', 'SC', '', '10:00', '', '10:00', '')">
          <div class="city-name"> Miami (MIA), US </div>		
		<figure><img src="/resources/car/images/cars/Midsize/dodge-avenger.jpg" alt="car Image" /></figure>
        <div class="price-section"> 
		   <div class="car-type">Economy </div> <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>09.15/<small>per day</small></div>
		   <div class="car-name"> Kia Roi or Equivalent </div>
		 </div>
		</div>
	  </div>
	  
	  <div class="col-sm-3">
		<div class="car-section" data-ng-click="CarDealSearch('New York City (NYC) - John F. Kennedy Airport,New York,United States', 'NYC', 'SC', '', '10:00', '', '10:00', '')">
          <div class="city-name"> New York (JFK),US </div>		
		 <figure><img src="/resources/car/images/cars/Premium/chevrolet-impala.jpg" alt="car Image" /></figure>
        <div class="price-section"> 
		   <div class="car-type">Premium </div> <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>07.75/<small>per day</small></div>
		   <div class="car-name"> Hyundai Elantra or Equivalent </div>
		 </div>
		</div>
	  </div>

    	  <div class="col-sm-3">
		<div class="car-section" data-ng-click="CarDealSearch('Las Vegas McCarran Intl. Airport,Las Vegas,Nevada,United States', 'LAS', 'SC', '', '10:00', '', '10:00', '')">
          <div class="city-name"> Las  Vegas (LAS), US </div>		
		<figure><img src="/resources/car/images/cars/Economy/chevrolet-spark.jpg" alt="car Image"></figure>
        <div class="price-section"> 
		   <div class="car-type">Standard </div> <div class="car-price"> <i class="fa fa-gbp" aria-hidden="true"></i>19.78/<small>per day</small></div>
		   <div class="car-name"> Volkswagen Jetta or Equivalent </div>
		 </div>
		</div>
	  </div>
		
    </div>
</div>


	<!-- Hotel about Start Here -->
		<div class="about-destinationBox hidden">
			
			<div class="row">
				
            <div class="col-xs-12">
					
					
					<h3>${data.siteName} Hotel Deals</h3>

					<p>${data.siteName} is a one stop solution for all your hotel-service related needs. We bring you great offers on hotel bookings so you do not have to break the bank every time you travel for business or leisure. </p>
					<p>Be it an emerging metropolis in Asia, bustling city in Australia, cultural hub in the Middle East or a destination in the Americas; wherever you wish to go, we find the perfect hotel for you. From palatial 5-star resorts for a luxury laden stay to budget hotels for a shoestring budget traveler, we offer it all. Just tell us your destination and the kind of hotel you seek and our travel experts will do their bit to bring you the choicest of hotels that fit all your requirements. </p>
					<p>And do not mistake low rates for any compromise on services. We strive to bring you world-class services and amenities at the lowest rates possible. You can get in touch with our customer care representatives through our toll free number. They're available 24x7, to answer your queries and help you with your booking.</p>
					<p>Book hotel with us once and we assure you that we will win you over as our regular customer for life.</p>
					
				</div>
			</div>
		</div>

	<!--/Hotel about end -->

</div>

<!-- hotel Slider Box --> 
 
   <!-- Hotel Testimonial Section Start Here -->
	  
	<!--<div class="testimonialBox hidden-xs">
	  <h2 class="destination_heading">Testimonials</h2>
	  <div class="container">
		<div class="row">
		  <div class="col-sm-12">
			<div class="testimonial-slider">
			 	
				 <div class="block">
				  <h4>Expectations met</h4>
					<p>I highly enjoyed the services offered by the hotel. The hotel was as per the expectations. I can safely say we paid for what we saw and booked. The hotel staff was courteous and helpful. Enjoyed booking with your website. I look forward to my next booking with you all. </p>
				  <span class="name">Samuel Carter I Sep 18, 2017</span>
				 </div>
				
				<div class="block">
				  <h4>Smooth Booking process </h4>
					<p>I absolutely appreciate the booking process. Smooth and hassle free. The hotel I chose to stay for my family vacation turned out to be really good. However, the hotel staff could have been a little polite is what I felt. But overall the experience was good. My family and I enjoyed it a lot. </p>
				  <span class="name">April Kunis I Sep 24, 2017</span>
				 </div>
				 
				 <div class="block">
				  <h4>Lucrative deals</h4>
					<p>I myself have been serving the hospitality industry for over a decade now and I was impressed with the services offered at the hotel. The booking process detailed out smallest of the details about the hotel which made booking so much easier. I recommend the website to everyone who are looking for lucrative deals at some finely chosen hotels. </p>
				  <span class="name">Aden Parker I Oct 15, 2017</span>
				 </div>
                
                <div class="block">
				  <h4>Improvement required </h4>
					<p>I can't rate my experiences great because I encountered some problems which I thought could have been settled out easily. The hotel staff being pesky spoiled the whole fun. The services were average.</p>
				  <span class="name">Lucas I Oct 21, 2017</span>
				 </div>
                
                <div class="block">
				  <h4>Worth Booking </h4>
					<p>Seems like I made a good choice with the hotel booking. The stay was good, food dainty and the staff helpful. Keep up the good work. Cheers!</p>
				  <span class="name">Elle Canon I Nov 02, 2017</span>
				 </div>
                
                <div class="block">
				  <h4>Average Experience </h4>
					<p>I had an okay time staying at the hotel. I think the services could have been better. Though not entirely disappointing. I hope next time, the website help suggest a better hotel. Not bad anyway. I had my share of fun.</p>
				  <span class="name">Sarah Conville I Nov 09, 2017</span>
				 </div>
				 
				 <div class="block">
				  <h4>Great customer support </h4>

					<p>I was a little skeptic in the beginning about booking hotels from this website. But, to be honest, the experience turned out great. The hotel I chose to stay was really good. The customer care of ${data.siteName} is really amazing and it helped me great deal in getting the best hotel within my budget requirements. Coming back to book again!</p>
				  <span class="name">Karen Willis I April 15, 2018</span>
				 </div>
				
			</div>
		  </div>
		</div>
	  </div>
	</div>-->

	<!-- Hotel Testimonial -->

 
  
  <!--Footer Start-->
  
  <!--Footer Closed-->
</div>

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
<jsp:include page="../home_footer.jsp"></jsp:include>
<!--Footer-->
<!-- script engine -->
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.slides.min.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/i18n/jquery-ui-i18n.js"></script>
<script src="/resources/js/inner_engine_en.js?032ff22018"></script>
<!--Use only hotel engin home -->
</body>
</html>
