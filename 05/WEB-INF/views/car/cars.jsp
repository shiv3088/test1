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
<link href="/resources/car/css/car-style.css?0907" rel="stylesheet">
    <link href="/resources/car/css/car-deal.css" rel="stylesheet">
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
	<c:set var="dollar" value="gbp"/>
</head>
<body class="car_section" data-ng-controller="dealCtrl">
<!--  / Header Box \ -->
<jsp:include page="../home_header.jsp"></jsp:include>
<!-- Header Box -->
<div class="main">
  <div style="height:60px;" class="hidden-xs"></div>
  <!-- Banner Box -->
  <div id="banner" style="background:url(/resources/images/banner/car-banner2.jpg) no-repeat center; ">
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
	<div class="whybook">
		<div class="container">
				<ul> 
						<li>
								Live 24/7 <br>support
						</li>
						<li>
								Safe and <br>Secure
						</li>
						<li>
								Special Rental Car <br>Deals
						</li>
			 <li>
								Zero Booking <br> Fee
						</li>
				</ul>
		</div>    
</div>
 <div class="car-mid-section">   
      <div class="container">
       <div class="row">
        <div class="col-sm-6 col-xs-12">
         <div class="deal-heading">Domestic Deals</div>
          <div class="deal-section">
              
              <c:forEach items="${carLandingDeals.carDomesticDeal}" var="cdd">
              <fmt:formatNumber var="domesticAvg" type="number" minFractionDigits="2" maxFractionDigits="2" value="${cdd.avgPrice}" />
              	<c:set var="carLowestPrice" value="${fn:split(domesticAvg.toString(),'.')}"> </c:set>
	          	<fmt:parseDate value="${cdd.pickUpDate}" var="fromDate" pattern="yyyy-MM-dd" />
	            <fmt:parseDate value="${cdd.dropOffDate}" var="toDate" pattern="yyyy-MM-dd" />
	            
	            <div class="deals" onclick="OnCarDealSearch(${cdd.pickUpLocationID}, '${cdd.pickUpLocationDisplay}', '${cdd.pickUpCity}', '${cdd.dropOffCity}', '${cdd.pickUpDate}', '${cdd.dropOffDate}')">
                 <div class="row">
                    <div class="col-xs-3">
                      <div class="classes">
                        <img src="/resources/car/images/suppliers/${fn:toLowerCase(cdd.carVendor)}.jpg" class="img-responsive">
                      <div class="travel-class">${cdd.carType}</div>
                    </div>
                  </div>
                    <div class="col-xs-6">
                        <div class="city-date">
                        <div><span class="dates"><fmt:formatDate pattern="MMM d" value="${fromDate}" /> - <fmt:formatDate pattern="MMM d" value="${toDate}" /></span></div> 
                        <div class="cites">${cdd.pickUpLocationDisplay}</div>
                    </div>
                  </div>
                    <div class="col-xs-3">
                      <div class="price-sec">
                          <div class="starting-fare">Starting fare</div>
                          <div class="price"><i class="fa fa-<c:out value='${dollar}'/>"></i>${carLowestPrice[0]}.<c:if test="${fn:length(carLowestPrice[1].toString()) < 2 }">${carLowestPrice[1]}0
                          </c:if><c:if test="${fn:length(carLowestPrice[1].toString()) > 1 }">${carLowestPrice[1]}
                          </c:if>
                          </div>
                        <div class="starting-fare">Per day</div>
                      </div>
                  </div>
                                           
                    </div>
	                   
	                </div>
	             	
              </c:forEach>
              	
              	
           </div>
        </div>
 
       <div class="col-sm-6 col-xs-12">
         <div class="deal-heading">International Deals</div>
          <div class="deal-section">
              
              <c:forEach items="${carLandingDeals.carInternationalDeal}" var="cid">
              <fmt:formatNumber var="internationalAvg" type="number" minFractionDigits="2" maxFractionDigits="2" value="${cid.avgPrice}" />
              	<c:set var="carLowestPrice" value="${fn:split(internationalAvg.toString(),'.')}"> </c:set>
	          	<fmt:parseDate value="${cid.pickUpDate}" var="fromDate" pattern="yyyy-MM-dd" />
	            <fmt:parseDate value="${cid.dropOffDate}" var="toDate" pattern="yyyy-MM-dd" />
	            
	            <div class="deals" onclick="OnCarDealSearch(${cid.pickUpLocationID}, '${cid.pickUpLocationDisplay}', '${cid.pickUpCity}', '${cid.dropOffCity}', '${cid.pickUpDate}', '${cid.dropOffDate}')">
                 <div class="row">
                    <div class="col-xs-3">
                      <div class="classes">
                        <img src="/resources/car/images/suppliers/${fn:toLowerCase(cid.carVendor)}.jpg" class="img-responsive">
                      <div class="travel-class">${cid.carType}</div>
                    </div>
                  </div>
                    <div class="col-xs-6">
                        <div class="city-date">
                        <div><span class="dates"><fmt:formatDate pattern="MMM d" value="${fromDate}" /> - <fmt:formatDate pattern="MMM d" value="${toDate}" /></span></div> 
                        <div class="cites">${cid.pickUpLocationDisplay}</div>
                    </div>
                  </div>
                    <div class="col-xs-3">
                      <div class="price-sec">
                          <div class="starting-fare">Starting fare</div>
                          <div class="price"><i class="fa fa-<c:out value='${dollar}'/>"></i>${carLowestPrice[0]}.<c:if test="${fn:length(carLowestPrice[1].toString()) < 2 }">${carLowestPrice[1]}0
                          </c:if><c:if test="${fn:length(carLowestPrice[1].toString()) > 1 }">${carLowestPrice[1]}
                          </c:if>
                          </div>
                        <div class="starting-fare">Per day</div>
                      </div>
                  </div>
                                           
                    </div>
	                   
	                </div>
	             	
              </c:forEach>
              	
          </div>
        </div>
 
       </div>
 
      </div>
    </div>
  
  <!--Footer Start-->
  
  <!--Footer Closed-->
</div>



<div class="container">

  <div class="excl-hotels-deals">
    <div class="heading2">
      <h3>Exclusive Hotels Deals</h3>
    </div>
    <div class="row city-slider">
          <div class="col-sm-3">
            <a href="/hotelSearch/city/63982/27230" target="_blank">
              <div class="flight-destination">
                <img src="/resources/images/banner/hotel-img-1.jpg">
                <div class="hotel-desti">
                  <div class="destination-name">
                    Park Inn By Radisson <br />
                    London Heathrow<br />
                    <span><img src="/resources/images/banner/star4.png"></span>
                  </div>
                  <div class="dest-price">
                    <span class="starting">Starting from</span>
                    <span class="vtprice"><i class="fa fa-gbp" aria-hidden="true"></i>70.00</span>
                    <span class="starting">average/night</span>
                  </div>

                </div>
                <div class="vt-location"><i class="fa fa-map-marker" aria-hidden="true"></i> Bath road, west drayton, London , GB</div>
                <div class="clr"></div>
              </div>
            </a>
          </div>

          <div class="col-sm-3">
            <a href="/hotelSearch/city/27380/174361" target="_blank">
              <div class="flight-destination"> <img src="/resources/images/banner/hotel-img-2.jpg">
                <div class="hotel-desti">
                  <div class="destination-name">
                    Hilton Garden Inn Glasgow 
                    City Centre<br />

                <span><img src="/resources/images/banner/star4.png"></span>

              </div>
              <div class="dest-price">
                <span class="starting">Starting from</span>
                <span class="vtprice"><i class="fa fa-gbp" aria-hidden="true"></i>73.60</span>
                <span class="starting">average/night</span>
              </div>

            </div>
            <div class="vt-location"><i class="fa fa-map-marker" aria-hidden="true"></i> 
              Finnieston quay, glasgow , GB
            </div>
            <div class="clr"></div>
          </div>
        </a>
      </div>

          <div class="col-sm-3">
            <a href="/hotelSearch/city/61514/153103" target="_blank">
              <div class="flight-destination"> <img src="/resources/images/banner/hotel-img-3.jpg">
                <div class="hotel-desti">
                  <div class="destination-name">
                    Q Spa Resort<br /> 
                    <span><img src="/resources/images/banner/star4.png"></span>
                  </div>
                  <div class="dest-price">
                    <span class="starting">Starting from</span>
                    <span class="vtprice"><i class="fa fa-gbp" aria-hidden="true"></i>95.00</span>
                    <span class="starting">average/night</span>
                  </div>

            </div>
            <div class="vt-location"><i class="fa fa-map-marker" aria-hidden="true"></i> 
              Evren mahallesi 3, sokak no:6, side , tr, 7600
            </div>
            <div class="clr"></div>
          </div>
        </a>
      </div>

          <div class="col-sm-3">
            <a href="/hotelSearch/city/35666/153103" target="_blank">
              <div class="flight-destination"> <img src="/resources/images/banner/hotel-img-4.jpg">
                <div class="hotel-desti">
                  <div class="destination-name">
                    Novotel Warszawa    
                    Centrum<br />
                    <span><img src="/resources/images/banner/star4.png"></span>
                  </div>
                  <div class="dest-price">
                    <span class="starting">Starting from</span>
                    <span class="vtprice"><i class="fa fa-gbp" aria-hidden="true"></i>60</span>
                    <span class="starting">average/night</span>
                  </div>

                </div>
                <div class="vt-location"><i class="fa fa-map-marker" aria-hidden="true"></i> 
                  ul. marszalkowska 94/98, Warsaw , PL
                </div>
                <div class="clr"></div>
              </div>
            </a>
          </div>

          <div class="col-sm-3">
            <a href="/hotelSearch/city/61238/54940" target="_blank">
              <div class="flight-destination"> <img src="/resources/images/banner/hotel-img-5.jpg">
                <div class="hotel-desti">
                  <div class="destination-name">
                    Ramada Phuket Deevana patong<br />

                <span><img src="/resources/images/banner/star4.png"></span>
              </div>
              <div class="dest-price">
                  <span class="starting">Starting from</span>
                  <span class="vtprice"><i class="fa fa-gbp" aria-hidden="true"></i>47.00</span>
                  <span class="starting">average/night</span>
              </div>

                </div>
                <div class="vt-location"><i class="fa fa-map-marker" aria-hidden="true"></i> 
                    45/1 raj-u-thid 200 pee road, patong , Thailand
                </div>
                <div class="clr"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
 
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
       <script>
document.getElementById("caractive").className="active";
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
