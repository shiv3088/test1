<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1">
  <title>${data.siteName} : Cheap Flights, Airline Tickets &amp; Airfares | Flight Deals </title>

  <meta name="description"
    content="Looking for cheap flight tickets? ${data.siteName} is your one-stop destination for Domestic and International flight bookings. Get exclusive discounts on flight booking and save time & money!" />
  <meta name="keywords"
    content="Cheap Flights, Cheap Tickets, Cheap Flights, Cheap Flight Tickets, Cheap Airline Tickets, Cheap Airfares" />
  <meta name="google-site-verification" content="_M31k-5VnZsDlcZmYw_wt_IcAHkZdeahg4ws3XSIxwA" />
  <link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />

  <meta property="og:url" content="${data.siteUrl}">
  <meta property="og:site_name" content="${data.siteId}" />


  <!--StyleSheet here-->
  
  <link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
  <link href="/resources/common/css/font-awesome.css" rel="stylesheet">
  <link href="/resources/us/css/jquery-ui.min.css?1111111" rel="stylesheet">
  <link href="/resources/us/css/home-style.css?11022020" rel="stylesheet" />
  <!-- end travel css -->
  <script type="text/javascript" src="resources/js/jquery.1.11.1.min.js"></script>
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

  <!--  / Google analytics \ -->
  <jsp:include page="google-analytics.jsp"></jsp:include>
  <!--  / Google analytics \ -->



</head>

<body data-ng-app="angularDeal">

  <div data-ng-controller="dealCtrl" class="main" id="Travelopick">

    <!--  / Header container \ -->
    <jsp:include page="pdc_header.jsp"></jsp:include>
    <!--  \ header container / -->
<div style="height:60px;" class="hidden-xs"></div>
    <!--  / banner container \ -->
    <!--<div class="bg-holder" style="background: #eee url(/resources/images/banner/mardi-gras.jpg?12235) center top no-repeat;">-->
	<div class="bg-holder" >
      <div class="container">
        <div class="row"> 
          <div class="col-xs-12  search_engine">
			<div class="engine-caption">
				<h1> Let's Go Places. Pick Now!</h1>
				<p>Book now. Fly easy. </p>
			</div>
            <jsp:include page="/us/home_engine_new"></jsp:include>
          </div> 
        </div>
        <!-- end search engine -->

      </div>

    </div>

    <!--  \ banner container / -->

		 <jsp:include page="partial/why-book-travelopick.jsp"></jsp:include>
    

    <!--  / content container \ -->

    <div class="container hidden">

      <div style="padding: 10px 0px; width: 100%; float:left;">
        <div class="heading2">
          Our Top Flights Deals
        </div>
        <div class="row city-slider">
          <!--airportname-->
          <div class="col-sm-3"
            ng-click="flightDealSearch('Economy','RoundTrip','London','LGW','Gatwick','GB','Lisbon','LIS','LIS Airport','PT','10 Sep 2019','19 Sep 2019')">
            <a target="_blank" style="cursor: pointer">
              <div class="hotel-destination">
                <img src="/resources/images/banner/1.jpg">
                <div class="hotel-desti">
                  <div class="destination-name"> Lisbon </div>

                  <div class="dest-from">From Gatwick </div>
                  <div class="dest-price"><i class="fa fa-dollar" aria-hidden="true"></i>124.00 <sup>*</sup></div>
                  <span class="bookn">Book now</span>
                </div>
                <div class="clr"></div>
              </div>
            </a>
          </div>

          <div class="col-sm-3"
            ng-click="flightDealSearch('Economy','RoundTrip','Manchaster ','MAN','Manchaster','GB','Palma Mallorca','PMI','Palma Mallorca','ES','11 Sep 2019','18 Sep 2019')">
            <a target="_blank" style="cursor: pointer">
              <div class="hotel-destination">
                <img src="/resources/images/banner/2.jpg">
                <div class="hotel-desti">
                  <div class="destination-name"> Palma Mallorca </div>

                  <div class="dest-from">From Manchaster </div>
                  <div class="dest-price"><i class="fa fa-dollar" aria-hidden="true"></i>138.60 <sup>*</sup></div>
                  <span class="bookn">Book now</span>
                </div>
                <div class="clr"></div>
              </div>
            </a>
          </div>

          <div class="col-sm-3"
            ng-click="flightDealSearch('Economy','RoundTrip','Bristol','BRS','Bristol','GB','Tenerife','TCI','Tenerife All Airports','ES','10 Sep 2019','19 Sep 2019')">
            <a target="_blank" style="cursor: pointer">
              <div class="hotel-destination">
                <img src="/resources/images/banner/3.jpg">
                <div class="hotel-desti">
                  <div class="destination-name"> Tenerife </div>

                  <div class="dest-from">From Bristol </div>
                  <div class="dest-price"><i class="fa fa-dollar" aria-hidden="true"></i>192.70 <sup>*</sup></div>
                  <span class="bookn">Book now</span>
                </div>
                <div class="clr"></div>
              </div>
            </a>
          </div>
			
          <div class="col-sm-3"
            ng-click="flightDealSearch('Economy','RoundTrip','London','LTN','Luton','GB','Alicante','ALC','Alicante Airport','ES','08 Oct 2019','17 Oct 2019')">
            <a target="_blank" style="cursor: pointer">
              <div class="hotel-destination">
                <img src="/resources/images/banner/4.jpg">
                <div class="hotel-desti">
                  <div class="destination-name"> Alicante </div>

                  <div class="dest-from">From Luton </div>
                  <div class="dest-price"><i class="fa fa-dollar" aria-hidden="true"></i>196.40 <sup>*</sup></div>
                  <span class="bookn">Book now</span>
                </div>
                <div class="clr"></div>
              </div>
            </a>
          </div>

          <div class="col-sm-3"
            ng-click="flightDealSearch('Economy','RoundTrip','London','LTN','Luton','GB','Barcelona','BCN','Barcelona','ES','11 Sep 2019','18 Sep 2019')">
            <a target="_blank" style="cursor: pointer">
              <div class="hotel-destination">
                <img src="/resources/images/banner/5.jpg">
                <div class="hotel-desti">
                  <div class="destination-name"> Barcelona </div>

                  <div class="dest-from">From Luton</div>
                  <div class="dest-price"><i class="fa fa-dollar" aria-hidden="true"></i>257.40 <sup>*</sup></div>
                  <span class="bookn">Book now</span>
                </div>
                <div class="clr"></div>
              </div>
            </a>
          </div>
 
  
        </div>
      </div>

    </div>


    <section class="small-section bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-xs-12 ">
             <h2 class="heading2">Our Top Destinations</h2>
          </div>

        </div>
        <div class="row">
          <!-- Recomended item-->
          <div class="col-sm-6 col-xs-12">
            <div class="recom-item">
              <div class="recom-media"><a href="/us/destinations/flights-to-berlin-ber">
                  <div class="pic"><img src="/resources/images/banner/home/berlin.jpg" data-at2x="/resources/images/banner/home/berlin.jpg" alt=""></div><div class="location"><i class="flaticon-suntour-map"></i> Flights to Berlin</div></a>
                
              </div>
              <!-- Recomended Content-->
              <div class="recom-item-body"><a href="/us/destinations/flights-to-berlin-ber">
                  <h4 class="blog-title">Berlin</h4></a>
                <p class="mb-30">With its roots steeped firmly in history,Berlin is every history lover's delight. But history is not the only thing that the city is known for.Berlin's diverse cuisine, thriving art scene and illuminated nightlife are other reasons for which this German capital is included in...</p><a href="/us/destinations/flights-to-berlin-ber" class="recom-button">Read more</a>
              </div>
              <!-- Recomended Image-->
            </div>
          </div>
          <!-- ! Recomended item-->
          <!-- Recomended item-->
          <div class="col-sm-6 col-xs-12">
            <div class="recom-item">
              <div class="recom-media"><a href="/us/destinations/flights-to-frankfurt-fra">
                  <div class="pic"><img src="/resources/images/banner/home/frenkfurt.jpg" data-at2x="/resources/images/banner/home/frenkfurt.jpg" alt=""></div> <div class="location"><i class="flaticon-suntour-map"></i> Flights to Frankfurt</div></a>
               
              </div>
              <!-- Recomended Content-->
              <div class="recom-item-body"><a href="/us/destinations/flights-to-frankfurt-fra">
                  <h4 class="blog-title"> Frankfurt</h4></a>
                <p class="mb-30">Frankfurt, a central German city, may not be in every international travelers bucket list but certainly deserves a place there.Dating back to the 1st century, the city's skyline is filled with high-rises,and it confirms the fact that time has only made this place bigger and better... </p><a href="/us/destinations/flights-to-frankfurt-fra" class="recom-button">Read more</a>
              
              </div>
              <!-- Recomended Image-->
            </div>
          </div>
          <!-- ! Recomended item-->
          <!-- Recomended item-->
          <div class="col-sm-6 col-xs-12">
            <div class="recom-item">
              <div class="recom-media"><a href="/us/destinations/flights-to-cologne-cgn">
                  <div class="pic"><img src="/resources/images/banner/home/cologne.jpg" data-at2x="/resources/images/banner/home/cologne.jpg" alt=""></div> <div class="location"><i class="flaticon-suntour-map"></i> Flights to Cologne</div></a>
               
              </div>
              <!-- Recomended Content-->
               <div class="recom-item-body"><a href="/us/destinations/flights-to-cologne-cgn">
                  <h4 class="blog-title"> Cologne</h4></a>
                <p class="mb-30">Cologne, founded in 38 B.C., is a bustling city in Germany. This ancient city has learnt toembrace the beauty of the modern world. The structures of the city &ndash; some with old architecture and some with futuristic architecture &ndash; are a testament to this very fact... </p><a href="/us/destinations/flights-to-cologne-cgn" class="recom-button">Read more</a>
               
              </div>
              <!-- Recomended Image-->
            </div>
          </div>
          <!-- ! Recomended item-->
          <!-- Recomended item-->
          <div class="col-sm-6 col-xs-12">
            <div class="recom-item">
              <div class="recom-media"><a href="/us/destinations/flights-to-london-lon">
                  <div class="pic"><img src="/resources/images/banner/home/london.jpg" data-at2x="/resources/images/banner/home/london.jpg" alt=""></div><div class="location"><i class="flaticon-suntour-map"></i> Flights to London</div></a>
                
              </div>
              <!-- Recomended Content-->
             <div class="recom-item-body"><a href="/us/destinations/flights-to-london-lon">
                  <h4 class="blog-title"> London</h4></a>
                <p class="mb-30">London, the capital of the U.K., is the perfect example of how a city can preserve its history and culture while getting onboard with the advancements of the modern society at the same time. While there are many ancient structures dotting the city....  </p><a href="/us/destinations/flights-to-london-lon" class="recom-button">Read more</a>
                
              </div>
              <!-- Recomended Image-->
            </div>
          </div>
          <!-- ! Recomended item-->
         
        </div>
      </div>
    </section>
	
	<!--Trust Pilot Start -->
	 <jsp:include page="partial/trustpilot-review-home.jsp"></jsp:include>
	<!--Trust Pilot End --> 

    <!--  / footer container \ -->
    <jsp:include page="home_footer.jsp"></jsp:include>
    <!--  / footer container \ -->

    <!--  \ content Main Block / -->

    <div class="trasut">
      <div itemscope itemtype="http://schema.org/Product">
        <span itemprop="name">TravelAgency</span><br>
        <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
          Average Rating: <span itemprop="ratingValue">7.4</span><br>
          <meta itemprop="ratingValue" content="7.4" />
          <meta itemprop="bestRating" content="53" />
          <meta itemprop="worstRating" content="0" />
          Votes: <span itemprop="ratingCount">88</span><br>
          <div class="trustpilot-summary">
            <div class="trustpilot-stars">
              <div class="trustpilot-star-rating" style="width: 60.2%"></div>
            </div>
            <!-- <div class="trustpilot-text">Rated 60.2% based on 88 <a href="https://www.trustpilot.com/review/Travelopick.com" target="_blank">reviews</a></div> -->
            <div class="trustpilot-text">Rated 60.2% based on 88 <a
                href="https://www.trustpilot.com/review/${data.siteId}.com" target="_blank">reviews</a></div>
          </div>
          <!-- start of thumbnail Carousel js -->
        </div>
      </div>
    </div>
    <!-- end of thumbnail Carousel js -->

    <!-- start js -->
    <script type="text/javascript" src="/resources/js/travel.min.js?09072019"></script>
    <script type="text/javascript" src="/resources/js/angular.js"></script>
    <script type="text/javascript" src="/resources/common/js/slick_carousel.js?12365412"></script>
    <script type="text/javascript" src="/resources/js/jquery-ui.1.10.4.min.js"></script>
    <script type="text/javascript" src="/resources/js/jquery.validate.js"></script>
    <script type="text/javascript"
      src="//cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.min.js"></script>
    <!--    <script src="http://js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js"></script> 
   <script type="text/javascript" src="/resources/js/geop.js?ddddffffdfhfhf"></script>-->
    <script type="text/javascript" src="/resources/us/js/home_index.js?139"></script>
    <script src="/resources/js/jquery.ui.autocomplete.scroll.min.js"></script>
    <!-- end js -->
 


</body>

</html>