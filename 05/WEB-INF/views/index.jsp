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
  <link rel="icon" href="/resources/images/fav.ico?v1" type="image/x-icon" />

  <meta property="og:url" content="${data.siteUrl}">
  <meta property="og:site_name" content="${data.siteId}" />


  <!--StyleSheet here-->

  <link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
  <link href="/resources/common/css/font-awesome.css" rel="stylesheet">
  <link href="/resources/common/css/jquery-ui.min.css?232323" rel="stylesheet">
  <link href="/resources/common/css/home-style.css?23102019" rel="stylesheet" />
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
    <div class="bg-holder" style="background-size: unset;">

      <div class="container">
        <div class="row">
          <div class="col-md-12 search_engine">
            <jsp:include page="/home_engine_new"></jsp:include>
          </div>

        </div>
        <!-- end search engine -->

      </div>

      <!--	<div class="bannerSlider">
		
	 
		
		</div>-->

    </div>
 
<div class="clearfix"></div>
    <jsp:include page="partial/why-book-travelopick.jsp"></jsp:include>

    <!--  / content container \ -->

    <div class="container">

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
                  <div class="dest-price"><i class="fa fa-gbp" aria-hidden="true"></i>124.00 <sup>*</sup></div>
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
                  <div class="dest-price"><i class="fa fa-gbp" aria-hidden="true"></i>138.60 <sup>*</sup></div>
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
                  <div class="dest-price"><i class="fa fa-gbp" aria-hidden="true"></i>192.70 <sup>*</sup></div>
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
                  <div class="dest-price"><i class="fa fa-gbp" aria-hidden="true"></i>196.40 <sup>*</sup></div>
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
                  <div class="dest-price"><i class="fa fa-gbp" aria-hidden="true"></i>257.40 <sup>*</sup></div>
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
          <div class="col-md-12">
        

                   <h2 class="heading2">Our Top Destinations</h2>
 
              
          </div>

        </div>
        <div class="row">
          <!-- Recomended item-->
          <div class="col-sm-6 col-xs-12">
            <div class="recom-item">
              <div class="recom-media"><a href="/cheap-flights-to-alicante-alc">
                  <div class="pic"><img src="/resources/images/banner/home/alicante.jpg" data-at2x="/resources/images/banner/home/alicante.jpg" alt=""></div>
				  <div class="location"><i class="flaticon-suntour-map"></i> Flights to Alicante</div>
				  </a>
                
              </div>
              <!-- Recomended Content-->
              <div class="recom-item-body"><a href="/cheap-flights-to-alicante-alc">
                  <h4 class="blog-title">Alicante</h4></a>
                <p class="mb-30">Alicante is a scintillating port city that features in every globetrotter's bucketlist.The warm sunny weather, cool breeze and soft waves crashing at the shorelinemake this Spanish beauty a favorite among travelers. </p><a href="/cheap-flights-to-alicante-alc" class="recom-button">Read more</a>
              </div>
              <!-- Recomended Image-->
            </div>
          </div>
          <!-- ! Recomended item-->
          <!-- Recomended item-->
          <div class="col-sm-6 col-xs-12">
            <div class="recom-item">
              <div class="recom-media"><a href="/cheap-flights-to-barcelona-bcn">
                  <div class="pic"><img src="/resources/images/banner/home/barcelona.jpg" data-at2x="/resources/images/banner/home/barcelona.jpg" alt=""></div>
				   <div class="location"><i class="flaticon-suntour-map"></i> Flights to Barcelona</div>
				  </a>
               
              </div>
              <!-- Recomended Content-->
              <div class="recom-item-body"><a href="/cheap-flights-to-barcelona-bcn">
                  <h4 class="blog-title"> Barcelona</h4></a>
                <p class="mb-30">Brilliant architecture, breathtaking vistas, intriguing attractions and a pulsating nightlife &#8212;Barcelona has it all. Adding an extra layer of charm to the city are the street musiciansserenading...  </p><a href="/cheap-flights-to-barcelona-bcn" class="recom-button">Read more</a>
              
              </div>
              <!-- Recomended Image-->
            </div>
          </div>
          <!-- ! Recomended item-->
          <!-- Recomended item-->
          <div class="col-sm-6 col-xs-12">
            <div class="recom-item">
              <div class="recom-media"><a href="/cheap-flights-to-lisbon-lis">
                  <div class="pic"><img src="/resources/images/banner/home/lisbon.jpg" data-at2x="/resources/images/banner/home/lisbon.jpg" alt=""></div> <div class="location"><i class="flaticon-suntour-map"></i> Flights to Lisbon</div></a>
               
              </div>
              <!-- Recomended Content-->
               <div class="recom-item-body"><a href="/cheap-flights-to-lisbon-lis">
                  <h4 class="blog-title"> Lisbon</h4></a>
                <p class="mb-30">Lisbon, a coastal city, also happens to be the capital of Portugal.The breathtaking landscapes, the vibrant nightlife, the friendly locals and a host of attractions make this city a popular destination amongst many... </p><a href="/cheap-flights-to-lisbon-lis" class="recom-button">Read more</a>
               
              </div>
              <!-- Recomended Image-->
            </div>
          </div>
          <!-- ! Recomended item-->
          <!-- Recomended item-->
          <div class="col-sm-6 col-xs-12">
            <div class="recom-item">
              <div class="recom-media"><a href="/cheap-flights-to-malta-mla">
                  <div class="pic"><img src="/resources/images/banner/home/malta.jpg" data-at2x="/resources/images/banner/home/malta.jpg" alt=""></div><div class="location"><i class="flaticon-suntour-map"></i> Flights to Malta</div></a>
                
              </div>
              <!-- Recomended Content-->
             <div class="recom-item-body"><a href="/cheap-flights-to-malta-mla">
                  <h4 class="blog-title"> Malta</h4></a>
                <p class="mb-30">A central Mediterraneanarchipelago, the landscapes of Malta are what dreams are made of.This beautiful beach destination is one of those places that needs to be visited at least once in a lifetime....  </p><a href="/cheap-flights-to-malta-mla" class="recom-button">Read more</a>
                
              </div>
              <!-- Recomended Image-->
            </div>
          </div>
          <!-- ! Recomended item-->
          <!-- Recomended item-->
          <div class="col-sm-6 col-xs-12">
            <div class="recom-item">
              <div class="recom-media"><a href="/cheap-flights-to-palma-pmi">
                  <div class="pic"><img src="/resources/images/banner/home/palma.jpg" data-at2x="/resources/images/banner/home/palma.jpg" alt=""></div> <div class="location"><i class="flaticon-suntour-map"></i> Flights to Palma</div></a>
               
              </div>
              <!-- Recomended Content-->
             <div class="recom-item-body"><a href="/cheap-flights-to-palma-pmi">
                  <h4 class="blog-title">Palma</h4></a>
                <p class="mb-30">Palma, a city that's filled with rich history, vibrant culture and a deep sense of modernity, is simply one of the best places to head to for a quintessential holiday.From historic monuments... </p><a href="/cheap-flights-to-palma-pmi" class="recom-button">Read more</a>
                
              </div>
              <!-- Recomended Image-->
            </div>
          </div>
          <!-- ! Recomended item-->
          <!-- Recomended item-->
          <div class="col-sm-6 col-xs-12">
            <div class="recom-item">
              <div class="recom-media"><a href="/cheap-flights-to-tenerife-tci">
                  <div class="pic"><img src="/resources/images/banner/home/tenerife.jpg" data-at2x="/resources/images/banner/home/tenerife.jpg" alt=""></div> <div class="location"><i class="flaticon-suntour-map"></i>Flights to Tenerife</div></a>
               
              </div>
              <!-- Recomended Content-->
               <div class="recom-item-body"><a href="/cheap-flights-to-tenerife-tci">
                  <h4 class="blog-title">Tenerife</h4></a>
                <p class="mb-30">A true traveller's paradise, Tenerife is where nature and man have made life more beautiful. It boasts so many enchanting experiences to visitors that once you've been here, you become an admirer of the city for the rest of your life...  </p><a href="/cheap-flights-to-tenerife-tci" class="recom-button">Read more</a>
              
              </div>
              <!-- Recomended Image-->
            </div>
          </div>
          <!-- ! Recomended item-->
        </div>
      </div>
    </section>
 

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


<!--safe pop's -Start-->
	 <jsp:include page="partial/data-safe.jsp"></jsp:include>
	<!--safe pop's  Start-->

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
    <script type="text/javascript" src="/resources/js/home_index.js?4512"></script>
    <!-- end js -->
 


</body>

</html>