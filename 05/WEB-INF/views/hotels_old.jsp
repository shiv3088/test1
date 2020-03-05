<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html lang="en">
<head>
<!--[if lt IE 9]> 
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
	<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cheap Hotels, Hotel Deals, Discount Hotel Reservations - ${data.siteName}</title>
<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
<meta name="google-site-verification" content="V9YFZJy8QpVDF8LsvGdRg7Ec9eY-0lWEKH1tR4h33Hc" />
<meta name="msvalidate.01" content="810F3644AB49633270FA50B11816A103" />
<meta name="keywords" content="Cheap hotels, Hotel Reservations, hotel deals, Hotel Rooms, best hotel rates, hotel accommodations, airport hotels, beach hotels, last minute hotels, hotel discounts, luxury hotels, TraveloPick" />

<meta name="description" content="Find hotel reservations with exclusive hotel deals to the top destinations worldwide at ${data.siteName}. Book now and save time & money on hotel bookings!" />

<meta property="og:url" content="${data.siteUrl}">
<meta property="og:site_name" content="${data.siteName}"/>




<meta property="og:title" content="Cheap Online Hotel Booking Site, Hotel Room Deals & Reservation"/>
<meta name="twitter:title" content="Cheap Online Hotel Booking Site, Hotel Room Deals & Reservation"/>


<meta name="twitter:description" content="Find best hotel deals and cheap accommodations online with ${data.siteId}, a discount hotel website where rooms are easily available at affordable prices."/>
<!--Stylesheet-->
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css?1210217" rel="stylesheet">
<!--<link href="/resources/common/css/hotel-style.css?15112018" rel="stylesheet">-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>

<link href="https://plus.google.com/+${data.siteId}" rel="publisher">
<!-- start js -->
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/angular.js"></script>
<script src="/resources/common/js/slick_carousel.js?19062018"></script>
<script src="/resources/js/travel.min.js"></script>
 <!-- end js -->

<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->

</head>
<body class="hotelsection" data-ng-app="dynamicPageApp">
<!-- Header Section Start -->
<jsp:include page="home_header.jsp"></jsp:include>
<!-- Header Section End -->
<!-- Main seaction -->
<div class="main">
  
  <!-- Banner Box -->
  <div id="banner" style="background:url(/resources/images/banner/hotel-banner.jpg) no-repeat center ; background-size:cover ">
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

<div  class="excl-hotels-deals">
 <div class="heading2">
      <h3>Exclusive Hotels Deals</h3>

 </div>
    <div class="row city-slider" >
	  <div class="col-sm-3">
	  <a href="/hotelSearch/city/nyc/14189" target="_blank" > 
	  <div class="flight-destination">
          <img src="/resources/images/banner/hotel-img-1.jpg" >
        <div class="hotel-desti">
		 <div class="destination-name">
             The Edison Hotel<br />
             New York<br />
             <span><img src="/resources/images/banner/starts.png"></span>
             </div>
             <div class="dest-price">
                 <span class="starting">Starting from</span>
                 <span class="vtprice"><i class="fa fa-gbp" aria-hidden="true"></i>259.23</span>
                <span class="starting">Avg Per Night</span>
             </div>
           
		 </div>
           <div class="vt-location"><i class="fa fa-map-marker" aria-hidden="true"></i> 228 W 47th St, New York, NY-New York, US, 10036</div>
          <div class="clr"></div>
		</div> </a>
	   </div>
	   
	   <div class="col-sm-3">
	   <a href="/hotelSearch/city/lon/63982" target="_blank">
	  <div class="flight-destination"> <img src="/resources/images/banner/hotel-img-2.jpg" >
        <div class="hotel-desti">
		 <div class="destination-name">
            Ramada London South Ruislip<br />

            
             <span><img src="/resources/images/banner/starts.png"></span>
            
             </div>
              <div class="dest-price">
                 <span class="starting">Starting from</span>
                 <span class="vtprice"><i class="fa fa-gbp" aria-hidden="true"></i>133.26</span>
                <span class="starting">Avg Per Night</span>
             </div>
         
		 </div>
           <div class="vt-location"><i class="fa fa-map-marker" aria-hidden="true"></i> Long Drive Station Approach, Ruislip, London GB</div>
           <div class="clr"></div>
		</div> </a>
	   </div>
	   
	   <div class="col-sm-3">
	  <a href="/hotelSearch/city/orl/15195" target="_blank">
	  <div class="flight-destination"> <img src="/resources/images/banner/hotel-img-3.jpg" >
         <div class="hotel-desti">
		 <div class="destination-name">
          Monumental Hotel <br />
            Orlando<br />
             <span><img src="/resources/images/banner/starts.png"></span>
             </div>
              <div class="dest-price">
                 <span class="starting">Starting from</span>
                 <span class="vtprice"><i class="fa fa-gbp" aria-hidden="true"></i>72.04</span>
                <span class="starting">Avg Per Night</span>
             </div>
           
		 </div>
           <div class="vt-location"><i class="fa fa-map-marker" aria-hidden="true"></i> 12120 International Drive, Orlando, FL-Florida, US, 32821</div>
           <div class="clr"></div>
		</div> </a>
	   </div>
	   
	   <div class="col-sm-3">
	   <a href="/hotelSearch/city/las/10801" target="_blank">
	  <div class="flight-destination"> <img src="/resources/images/banner/hotel-img-4.jpg" >
        <div class="hotel-desti">
		 <div class="destination-name">
             Four Queens Hotel &amp; Casino<br />
           
             <span><img src="/resources/images/banner/starts.png"></span>
             </div>
             <div class="dest-price">
                 <span class="starting">Starting from</span>
                 <span class="vtprice"><i class="fa fa-gbp" aria-hidden="true"></i>46.44</span>
                <span class="starting">Avg Per Night</span>
             </div>
           
		 </div>
           <div class="vt-location"><i class="fa fa-map-marker" aria-hidden="true"></i> 202 Fremont St, Las Vegas, NV-Nevada, US, 89101</div>
           <div class="clr"></div>
		</div> </a>
	   </div>
	   
	   <div class="col-sm-3">
	   <a href="/hotelSearch/city/yyz/65326" target="_blank">
	  <div class="flight-destination"> <img src="/resources/images/banner/hotel-img-5.jpg" >
         <div class="hotel-desti">
		 <div class="destination-name">
             Holiday Inn Toronto Downtown Centre<br />
           
             <span><img src="/resources/images/banner/starts.png"></span>
             </div>
             <div class="dest-price">
                 <span class="starting">Starting from</span>
                 <span class="vtprice"><i class="fa fa-gbp" aria-hidden="true"></i>393.77</span>
                <span class="starting">Avg Per Night</span>
             </div>
           
		 </div>
          <div class="vt-location"><i class="fa fa-map-marker" aria-hidden="true"></i> Carlton Street, Toronto, ON-Ontario, CA, M5B2E9</div>
           <div class="clr"></div>
		</div> </a>
	   </div>
    </div>
 </div>
    
      
 
    </div>
<div class="container">
    <div class="hidden-xs hidden">
 <div class="hotel-heading">
  Most Popular Destinations
 </div>
    <div class="row city-slider " style="margin-bottom: 50px;">
	  <div class="col-sm-3">
	  <a href="/hotelSearch/city/nyc/14189" target="_blank"> 
	  <div class="hotel-destination"><img src="/resources/images/hotels/new-york-sm.jpg" >
         <div class="hotel-desti">
		 <div class="destination-name"> New York (NYC)</div>
		  <div class="dest-price">1257 Hotels</div>
		 </div>	
          <div class="clr"></div>
		</div> </a>
	   </div>
	   
	   <div class="col-sm-3">
	   <a href="/hotelSearch/city/lon/63982" target="_blank">
	  <div class="hotel-destination"><img src="/resources/images/hotels/london-sm.jpg" >
         <div class="hotel-desti">
		 <div class="destination-name"> London (LON)</div>
	       <div class="dest-price">1257 Hotels</div>
		 </div>
           <div class="clr"></div>
		</div> </a>
	   </div>
	   
	   <div class="col-sm-3">
	  <a href="/hotelSearch/city/orl/15195" target="_blank">
	  <div class="hotel-destination"><img src="/resources/images/hotels/orlando-sm.jpg" >
         <div class="hotel-desti">
		 <div class="destination-name"> Orlando (ORL)</div>
	    <div class="dest-price">1257 Hotels</div>
		 </div>
           <div class="clr"></div>
		</div> </a>
	   </div>
	   
	   <div class="col-sm-3">
	   <a href="/hotelSearch/city/las/10801" target="_blank">
	  <div class="hotel-destination"><img src="/resources/images/hotels/las-vegas-sm.jpg" >
         <div class="hotel-desti">
		 <div class="destination-name"> Las Vegas(LAS)</div>
		 <div class="dest-price">1257 Hotels</div>
		 </div>
           <div class="clr"></div>
		</div> </a>
	   </div>
	   
	   <div class="col-sm-3">
	   <a href="/hotelSearch/city/yyz/65326" target="_blank">
	  <div class="hotel-destination"><img src="/resources/images/hotels/toronto-sm.jpg" >
         <div class="hotel-desti">
		 <div class="destination-name"> Toronto(YYZ)</div>
	       <div class="dest-price">1257 Hotels</div>
		 </div>	
           <div class="clr"></div>
		</div> </a>
	   </div>
    </div>
 </div>
    
     <div class="hidden-xs" data-ng-controller="dealCtrl">
    <div class="car-heading">
        <h3>Best Car Rental Deals</h3>
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
		   <div class="car-type">Premium </div> <div class="car-price"> $07.75/<small>per day</small></div>
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
		<div class="about-destinationBox hidden-xs">
			
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
  <jsp:include page="home_footer.jsp"></jsp:include>
  <!--Footer Closed-->
</div>
<!-- script engine -->
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.slides.min.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/i18n/jquery-ui-i18n.js"></script>
<script src="/resources/js/inner_engine_en.js?1210217"></script>
<!--Use only hotel engin home -->
<script>
$(document).ready(function(){
	$("#flight_tab").removeClass('active');
	$("#hotel_tab").addClass('active');
	$("#tab_a").removeClass('active');
	$("#tab_b").addClass('active');	
	
});

</script>
   
</body>
</html>
