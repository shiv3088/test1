<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1575600346100223');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1575600346100223&ev=PageView&noscript=1"
/></noscript>
 
<style>
.united-flag{ padding:13px 5px 13px 5px; color:rgba(0, 0, 0, 1); font-size:14px;}
.guide_phn_div > li.united-flag:hover::after{width: 0;  background:none;}
.ui-datepicker .ui-datepicker-title select { background:#fff !important; height:30px; margin-right:10px !important; text-align:center; width:80px !important; }
.call_xs_div { background: #272727 none repeat scroll 0 0; position: relative; z-index: 99; padding:5px 0; }
.call_xs_div a { color:#f60; }  .call_xs_div a:hover { color:#fff; } 
.error { border:1px solid #f00 !important;  }
</style>
<link rel="icon" href="/resources/images/favicon.png" type="image/x-icon" />
<header class="nav-wrapper header_bg container-fluid bg_trnsprnt no-padding" >

<div class="col-xs-12 visible-xs call_xs_div ">
			<div class="col-xs-6 ">
				<p class="text-white no-margin">Toll Free AT (24x7)</p>
			</div>
			<div class="col-xs-6 text-center ">
				<a href="tel:+44-800-972-3035">
					<i class="fa fa-phone"></i> +44-800-972-3035
				</a>
			</div>
		</div>


 
        <div class="container">
         <div class="row">
        <!-- start of navigation_box -->
        <nav class="navbar navbar-fixed-top  no-border no-margin-bottom main_menu"><!-- start navigattion -->
            <div class="navbar-header ln_full_div">
                <button type="button" class="navbar-toggle border-white" style="border:0 !important;" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar bg-white"></span>
                    <span class="icon-bar bg-white"></span>
                    <span class="icon-bar bg-white"></span>
                </button>
                <a class="navbar-brand padding-sm-square ln_full_div" href="/">
                    <img src="/resources/images/logo.png"  class=" center-block" alt="Travelopick">
                </a>
            </div>
            
            <div class="collapse navbar-collapse xs-no-padding" id="myNavbar">    
                <ul class="nav navbar-nav navbar-right guide_phn_div">
                    <li>
                      <a href="/cheap-flights"> <i class="fa fa-plane" style="transform: rotate(45deg);"></i> Flights </a> 
                    </li>
                    <li>
                        <a href="/hotels"> <i class="fa fa-bed"></i> Hotels </a> 
                    </li>
                    <li class="dropdown hidden-xs hidden-sm hidden-md" id="searchPad" style="" ng-hide="URL == '/'">
		                 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"  aria-haspopup="true" aria-expanded="false">My Searches <span id="searchPadList"></span><!-- <span ng-if="newarr.length == 1" class="history-show">{{newarr.length}}</span><span ng-if="newarr.length == 2" class="history-show">{{newarr.length}}</span><span ng-if="newarr.length >= 3" class="history-show">3</span> --><span class="caret"></span></a>
		                 <ul class="dropdown-menu hist">
		              
		                  <li class="histry"  ng-repeat="stops in newarr | limitTo: -3"><a href="#" style="cursor: pointer;" ng-click="submitSearch(stops)"> 
						<div class="history_icon"> 
						<i class="fa fa-plane" ng-if="stops.OriginAirport" aria-hidden="true" style="cursor: pointer;" ng-click="submitSearch(stops)"></i>
						<i class="fa fa-hotel" ng-if="stops.stayCity" aria-hidden="true" style="cursor: pointer;" ng-click="submitSearch(stops)"></i>
						</div>
						<div class="history_info" ng-if="stops.OriginAirport"> 
						<div class="item-title">{{stops.OriginAirport.CityCode}} to {{stops.DestinationAirport.CityCode}}</div>
		                <p class="item-date">{{stops.TravelDate | date: 'EEE, MMM-dd'}} <span ng-if="stops.TripType == '2'" style="font-weight: 300 !important; font-size: 14px !important;">- {{stops.ReturnDate | date: 'EEE, MMM-dd'}}</span></p>
		                <p class="item-date" ng-if="stops.TripType == '1'">One Way</p>
		                 <p class="item-date" ng-if="stops.TripType == '2'">Round trip</p>
		               	</div>
		               	<div class="history_info" ng-if="stops.stayCity"> 
						<div class="item-title">{{stops.stayCity.split(',')[0]}}</div>
		                <p class="item-date">{{stops.checkInDate | date: 'EEE, MMM-dd'}} <span style="font-weight: 300 !important; font-size: 14px !important;">- {{stops.checkOutDate | date: 'EEE, MMM-dd'}}</span></p>
		               
		               	</div>
						<div class="history_click"> <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div>
						</a></li>
					
		              </ul>			  
			  
               		 </li>
                
	               <li class="dropdown">
	                <a href="javascript: openwindow()"><i class="fa fa-comments" aria-hidden="true"></i>
 Chat Now</a>
	              </li> 
              
	                <c:if test="${loggedInUser == null}" >
		               <li class="dropdown hidden" id="userlogin">
			                <a href="#myModalLogin" data-toggle="modal" ><i class="fa fa-comments" aria-hidden="true"></i> Login</a>
			           </li>
			        </c:if>
			        <li class="dropdown hidden-xs hidden-sm" id="userlogout" style="display:none;">
			               <a href="#" class="dropdown-toggle" data-toggle="dropdown" ><i class="fa fa-user" aria-hidden="true">Welcome:</i><span id="userName"></span></a>
			               <ul class="dropdown-menu hist">
			                  <li><a href="/myprofile"> My Profile</a></li>
			                  <li><a href="/logout"> Logout</a></li>
					       </ul>
				    </li>
			            
			       <c:if test="${loggedInUser != null}" >	            
		              <li class="dropdown hidden-xs hidden-sm" id="userlogout" style="display:block;">
			               <a href="#" class="dropdown-toggle" data-toggle="dropdown" ><i class="fa fa-user" aria-hidden="true">Welcome:</i><span>${sessionScope.loggedInUser}</span></a>
			               <ul class="dropdown-menu hist">
			                  <li><a href="/myprofile"> My Profile</a></li>
			                  <li><a href="/logout"> Logout</a></li>
					       </ul>
				     </li>
		  			</c:if>   
		  			<li class="united-flag hidden-xs  hidden-sm"> <img src="/resources/images/us-flag.png" alt="Call"> United States</li>
                   <li class="toll-free hidden-xs hidden-sm visible-md visible-lg">
                    <img src="/resources/travelopick/images/phone-icon.png" alt="Toll Free"> <span class="help_no">24<span>x</span>7</span> +44-800-972-3035
                    </li>
                    <li class="toll-free hidden-lg hidden-md">
                    <a href="tel:+44-800-972-3035"> <img src="/resources/travelopick/images/phone-icon.png" alt="Toll Free"> <span class="help_no">24<span>x</span>7</span>+44-800-972-3035</a>
                    </li>
                   
                   <li class="dropdown dropdown_1 hidden-xs visible-sm visible-md visible-lg">
                        <a href="javascript:void();" class="dropdown-toggle1">
                           <span></span>
                        </a>
                        
                        <div id="myNav" class="overlay">
  <!-- tabs left -->
  <div class="container padding-md-top padding-md-bottom">
  
  <div class="col-sm-2 hide" style="font-size:22px; font-weight:700; color:#000;"> Menu</div>
      <ul class="nav nav-pills nav-stacked menu-stacked col-sm-2 col-xs-12 no-padding">
            <li class="active">
            	<a href="#tab_1" data-toggle="pill">
                 Special Deals <span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>
                </a>
            </li>
            <li>
            	<a href="#tab_2" data-toggle="pill">
                	
                    Domestic Cities <span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>
                </a>
            </li>
            <li>
            	<a href="#tab_3" data-toggle="pill">
                	
                   Canada Cities <span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>
                </a>
            </li>
            <li>
            	<a href="#tab_4" data-toggle="pill">
                	
                   International Cities <span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>
                </a>
            </li>
            <li>
            	<a href="#tab_5" data-toggle="pill">
                	
                   Top Airlines <span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>
                </a>
            </li>
            
        </ul>
        <div class="tab-content col-sm-9 col-xs-12 no-padding"><!-- start tab content -->
        
            <div class="tab-pane active col-xs-12" id="tab_1"><!-- start tab content_1 -->
            <div class="col-sm-4 menu_sub">
            <ul>
            <li> <a href="/deals/business-class-flight-deals"> <i class="fa fa-caret-right" aria-hidden="true"></i>  Business Class Deals </a></li>
            <li> <a href="/deals/deals-under-199"> <i class="fa fa-caret-right" aria-hidden="true"></i> Deals Under 199 </a></li>
            <li> <a href="/deals/deals-under-99"> <i class="fa fa-caret-right" aria-hidden="true"></i> Deals Under 99 </a></li>
            <li> <a href="/deals/fall-season"> <i class="fa fa-caret-right" aria-hidden="true"></i> Fall Season </a></li>
            <li> <a href="/business-class-group-travel"> <i class="fa fa-caret-right" aria-hidden="true"></i> Business Class Group Travel </a></li>
            <li> <a href="/round-trip-travel-offers"> <i class="fa fa-caret-right" aria-hidden="true"></i> Round Trip Travel </a></li>
            <li> <a href="/cheap-international-flights"> <i class="fa fa-caret-right" aria-hidden="true"></i> International Travel </a></li>
            
            
            </ul>
            
            
            </div>
            <div class="col-sm-4 menu_sub">
            <ul>
            <li> <a href="/deals/black-friday-flights-deals"> <i class="fa fa-caret-right" aria-hidden="true"></i>  Black Friday Flights Deals </a></li>
            <li> <a href="/deals/st-patrick-day-travel-offers"> <i class="fa fa-caret-right" aria-hidden="true"></i> ST Patrick Day</a></li>
            <li> <a href="/deals/todays-best-flights-fares"> <i class="fa fa-caret-right" aria-hidden="true"></i> Today Best Flights Fares </a></li>
            <li> <a href="/deals/weekend-travel"> <i class="fa fa-caret-right" aria-hidden="true"></i> Weekend Travel </a></li>
            <li> <a href="/senior-travel-deals-offers"> <i class="fa fa-caret-right" aria-hidden="true"></i> Senior Travel </a></li>
            <li> <a href="/holiday-travel-offers"> <i class="fa fa-caret-right" aria-hidden="true"></i> Holiday Travel </a></li>
            <li> <a href="/cheap-domestic-flights"> <i class="fa fa-caret-right" aria-hidden="true"></i> Domestic Flights </a></li>
            
            
            </ul>
            
            
            </div>
            <div class="col-sm-4 menu_sub">
            <ul>
            <li> <a href="/easter-travel-offers"> <i class="fa fa-caret-right" aria-hidden="true"></i>  Easter Travel Offers </a></li>
            <!--<li> <a href="/economy-class-group-travel"> <i class="fa fa-caret-right" aria-hidden="true"></i> Economy Class Group Travel </a></li>-->
            <li> <a href="/spring-break-travel-offers"> <i class="fa fa-caret-right" aria-hidden="true"></i> Spring Break Travel Offer </a></li>
            <li> <a href="/spring-travel-offers"> <i class="fa fa-caret-right" aria-hidden="true"></i> Spring Travel Offers </a></li>
            <li> <a href="/one-way-travel-offers"> <i class="fa fa-caret-right" aria-hidden="true"></i> One Way Travel Offers </a></li>
            <li> <a href="/cheap-group-travel-tickets"> <i class="fa fa-caret-right" aria-hidden="true"></i> Group Travel </a></li>
            <li> <a href="/student-travel-offers"> <i class="fa fa-caret-right" aria-hidden="true"></i> Student Travel Offers </a></li>
            
            
            </ul>
            
            
            </div>	
      
                
            </div><!-- end tab content_1 -->
            <div class="tab-pane col-xs-12" id="tab_2"><!-- start tab content_1 -->
            <div class="col-sm-4 menu_sub">
            <ul>
            <li> <a href="/cheap-flights-to-fortlauderdale-fll"> <i class="fa fa-caret-right" aria-hidden="true"></i> Flights to Fort Lauderdale </a></li>
            <li> <a href="/cheap-flights-to-austin-aus"> <i class="fa fa-caret-right" aria-hidden="true"></i> Flights to Austin </a></li>
            <li> <a href="/cheap-flights-to-baltimore-bwi"> <i class="fa fa-caret-right" aria-hidden="true"></i> Flights to Baltimore</a></li>
            <li> <a href="/cheap-flights-to-batonrouge-btr"> <i class="fa fa-caret-right" aria-hidden="true"></i> Flights to Baton rouge </a></li>
            <li> <a href="/cheap-flights-to-cincinnati-cvg"> <i class="fa fa-caret-right" aria-hidden="true"></i> Flights to Cincinnati </a></li>
            <li> <a href="/cheap-flights-to-charlotte-clt"> <i class="fa fa-caret-right" aria-hidden="true"></i> Flights to Charlotte </a></li>
            <li> <a href="/cheap-flights-to-dallas-dfw"> <i class="fa fa-caret-right" aria-hidden="true"></i> Flights to Dallas </a></li>
            
            
            </ul>
            
            
            </div>
            <div class="col-sm-4 menu_sub">
            <ul>
             <li><a href="/cheap-flights-to-jacksonville-jax"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Jacksonville</a></li>
			 <li><a href="/cheap-flights-to-kansascity-mci"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Kansas City</a></li>
			 <li><a href="/cheap-flights-to-lexington-lex"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Lexington</a></li>
             <li><a href="/cheap-flights-to-lihue-lih"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Lihue</a></li>
	         <li><a href="/cheap-flights-to-losangeles-lax"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Los Angeles</a></li>
			 <li><a href="/cheap-flights-to-louisville-sdf"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Louisville</a></li>
			 <li><a href="/cheap-flights-to-memphis-mem"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Memphis</a></li>
            
            </ul>
            
            
            </div>
            <div class="col-sm-4 menu_sub">
            <ul>
             <li><a href="/cheap-flights-to-phoenix-phx"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Phoenix</a></li>
			 <li><a href="/cheap-flights-to-pittsburgh-pit"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Pittsburgh</a></li>
			 <li><a href="/cheap-flights-to-reno-rno"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Reno</a></li>
			 <li><a href="/cheap-flights-to-richmond-ric"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Richmond</a></li>
			 <li><a href="/cheap-flights-to-rochester-roc"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Rochester</a></li>
			 <li><a href="/cheap-flights-to-sacramento-sac"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Sacramento</a></li>
			 <li><a href="/cheap-flights-to-salt-lake-city-slc"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Salt Lake City</a></li> 
            
            
            </ul>
            
            
            </div>	
      
                
            </div>
            <div class="tab-pane col-xs-12" id="tab_3"><!-- start tab content_1 -->
            <div class="col-sm-4 menu_sub">
            <ul>
            <li><a href="/cheap-flights-to-halifax-yhz"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Halifax</a></li>
		      <li><a href="/cheap-flights-to-winnipeg-ywg"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Winnipeg</a></li>
			  <li><a href="/cheap-flights-to-kingston-ygk"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Kingston</a></li>
			  <li><a href="/cheap-flights-to-ottawa-yow"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Ottawa</a></li>
			  <li><a href="/cheap-flights-to-peterborough-ypq"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Peterborough</a></li>
			  <li><a href="/cheap-flights-to-thunderbay-yqt"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Thunder Bay</a></li>
		      <li><a href="/cheap-flights-to-toronto-yto"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Toronto</a></li>
            
            
            </ul>
            
            
            </div>
            <div class="col-sm-4 menu_sub">
            <ul>
             <li><a href="/cheap-flights-to-trenton-ytr"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Trenton</a></li>
			 <li><a href="/cheap-flights-to-vancouver-yvr"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Vancouver</a></li>
		     <li><a href="/cheap-flights-to-montreal-ymq"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Montreal</a></li>
			 <li><a href="/cheap-flights-to-calgary-yyc"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Calgary</a></li>
			 <li><a href="/cheap-flights-to-sudbury-ysb"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Sudbury</a></li>
		     <li><a href="/cheap-flights-to-yarmouth-yqi"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Yarmouth</a></li>
		     <li><a href="/cheap-flights-to-barrie-ylk"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Barrie</a></li>
            
            
            </ul>
            
            
            </div>
            <div class="col-sm-4 menu_sub">
            <ul>
           <li><a href="/cheap-flights-to-edmonton-yea"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Edmonton</a></li>
			  <li><a href="/cheap-flights-to-regina-yqr"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Regina</a></li>
			  <li><a href="/cheap-flights-to-victoria-yyj"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Victoria</a></li>
			  <li><a href="/cheap-flights-to-quebec-yqb"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Quebec</a></li>
			  <li><a href="/cheap-flights-to-penticton-yyf"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Penticton</a></li>
		      <li><a href="/cheap-flights-to-moosejaw-ymj"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Moosejaw</a></li>
			  <li><a href="/cheap-flights-to-masset-zmt"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Masset</a></li>
            
            
            </ul>
            
            
            </div>	
      
                
            </div>
            <div class="tab-pane col-xs-12" id="tab_4"><!-- start tab content_1 -->
            <div class="col-sm-4 menu_sub">
            <ul>
            <li><a href="/cheap-flights-to-bangkok-bkk"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Bangkok</a></li>
	         <li><a href="/cheap-flights-to-barcelona-bcn"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Barcelona</a></li>
		     <li><a href="/cheap-flights-to-cancun-cun"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Cancun</a></li>
		     <li><a href="/cheap-flights-to-abudhabi-auh"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Abudhabi</a></li>
			 <li><a href="/cheap-flights-to-amsterdam-ams"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Amsterdam</a></li>
			 <li><a href="/cheap-flights-to-toronto-yto"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Toronto</a></li>
		     <li><a href="/cheap-flights-to-guadalajara-gdl "><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Guadalajara</a></li>
            
            
            </ul>
            
            
            </div>
            <div class="col-sm-4 menu_sub">
            <ul>
            <li><a href="/cheap-flights-to-mexico-mex"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Mexico</a></li>
			 <li><a href="/cheap-flights-to-moscow-mow"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Moscow</a></li>
		      <li><a href="/cheap-flights-to-nassau-nas"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Nassau</a></li>
			  <li><a href="/cheap-flights-to-puertovallarta-pvr"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Puertovallarta</a></li>
			  	<li><a href="/cheap-flights-to-lima-lim"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Lima</a></li>
			  <li><a href="/cheap-flights-to-dublin-dub"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Dublin</a></li>
		     
            
            
            </ul>
            
            
            </div>
            	
            <div class="col-sm-4 menu_sub">
            <ul>
           <li><a href="/cheap-flights-to-dubai-dxb"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Dubai</a></li>
			  <li><a href="/cheap-flights-to-london-lon"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to London</a></li>
			  <li><a href="/cheap-flights-to-paris-par"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Paris</a></li>
			  <li><a href="/cheap-flights-to-rome-rom"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Rome</a></li>
			  <li><a href="/cheap-flights-to-frankfurt-fra"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Frankfurt</a></li>
			  <li><a href="/cheap-flights-to-manila-mnl"><i class="fa fa-caret-right" aria-hidden="true"></i>Flights to Manila</a></li>
			  
            
            
            </ul>
            
            
            </div>
                
            </div>
            
            <div class="tab-pane col-xs-12" id="tab_5"><!-- start tab content_1 -->
            <div class="col-sm-4 menu_sub">
            <ul>
            <li><a href="/cheap-airline/aer-lingus-ei-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Aer Lingus Flights </a></li>
             <li><a href="/cheap-airline/air-canada-ac-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Air Canada Flights</a></li>
			  <li><a href="/cheap-airline/american-airlines-aa-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>American Airlines Flights</a></li>
			   <li><a href="/cheap-airline/british-airways-ba-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>British Airways Flights</a></li>
			   
				<li><a href="/cheap-airline/lufthansa-airlines-lh-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Lufthansa Airlines Flights</a></li>
			    <li><a href="/cheap-airline/philippine-airlines-pr-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Philippine Airlines Flights</a></li>
            
            
            </ul>
            
            
            </div>
            <div class="col-sm-4 menu_sub">
            <ul>
          <li><a href="/cheap-airline/qatar-airways-qr-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Qatar Airways Flights </a></li>
                   <li><a href="/cheap-airline/westjet-airlines-ws-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Westjet Airlines Flights</a></li>
			       <li><a href="/cheap-airline/asiana-airlines-oz-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Asiana Airlines Flights</a></li>
			       <li><a href="/cheap-airline/allnippon-airways-nh-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>All Nippon Airways Flights</a></li>
			    <li><a href="/cheap-airline/eva-air-br-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Eva Air Flights</a></li>
				<li><a href="/cheap-airline/cathaypacific-airways-cx-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Cathay Pacific Airways Flights</a></li>
			    <li><a href="/cheap-airline/emirates-airlines-ek-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Emirates Airlines Flights</a></li>
            
            
            </ul>
            
            
            </div>
            	
            <div class="col-sm-4 menu_sub">
            <ul>
         <li><a href="/cheap-airline/etihad-airways-ey-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Etihad Airways Flights </a></li>
             <li><a href="/cheap-airline/garuda-indonesia-ga-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Garuda Indonesia Flights</a></li>
			  <li><a href="/cheap-airline/qantas-airways-qf-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Qantas Airways Flights</a></li>
			   <li><a href="/cheap-airline/singapore-airlines-sq-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Singapore Airlines Flights</a></li>
			    <li><a href="/cheap-airline/turkish-airlines-tk-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Turkish Airlines Flights</a></li>
				<li><a href="/cheap-airline/southwest-airlines-wn-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Southwest Airlines Flights</a></li>
			   <li><a href="/cheap-airline/air-mauritius-mk-and-flight-deals"><i class="fa fa-caret-right" aria-hidden="true"></i>Air Mauritius Flights</a></li>
            
            
            </ul>
            
            
            </div>
                
            </div>
            
            
            
            
        </div>
        
        <div class="menu_read"> <a href="/site-map"> MORE DEALS</a></div>
        
        </div>
      <!-- /tabs -->
</div>
                        
                    </li> 
                   
                </ul>
            </div>
        </nav><!-- end navigattion -->
        </div>
        </div>
    </header>
	
	         <!-- start login Modal -->
    <div id="myModalLogin" style="" class="modal fade" role="dialog">
      <div class="modal-dialog popu_width row">
    
        <!-- Modal content-->
        <div class="modal-content no-border-radius no-padding col-sm-7 no-border no-box-shadow popup_heght"><!-- start of modal_popup -->
            <div class="modal-header no-border">
                <button type="button" class="close cls_btn" data-dismiss="modal">&times;</button>
                <h4 class="modal-title hide"><span class="border-bottom-orange">Log</span>in to Travelopick</h4>
            </div>
            <div class="modal-body col-xs-12 login_padding"><!-- start of body_section -->
                <div class="col-xs-12 no-padding"><!-- start of well -->
                    <ul class="nav nav-tabs login_tab"><!-- start of tab_part -->
                        <li class="active"><a href="#login" data-toggle="tab">Login</a></li>
                        <li><a href="#create" data-toggle="tab" class="register_clss">Register</a></li>
                    </ul><!-- end of tab_part -->
                    <div id="myTabContent" class="tab-content"><!-- start of tab_content -->
                        <div class="tab-pane active in padding-md-top padding-md-bottom" id="login"><!-- start of content_1 -->
                            <div class="row"><!-- start of row -->
                              <div class="col-sm-12 col-xs-12"><!-- start of col_1 -->
                              
                                  <form name="loginform" id="loginform"><!-- start of form -->
                                      <div class="form-group">
                                          <input type="text" class="form-control login_input_div" id="username" name="username" placeholder="Enter Email Id">
                                      </div>
                                      <div class="form-group no-margin">
                                          <input type="password" class="form-control login_input_div" id="userpassword" name="userpassword" placeholder="Enter Password">
                                      </div>
                                      <div class="checkbox">
                                          <label>
                                              <input type="checkbox" name="remember" id="remember"> Remember login
                                          </label>
                                          <label class="pull-right">
                                              <a href="#forgot" data-toggle="tab" class="forgt_text">I can't access my account</a>
                                          </label>
                                          <p class="help-block hide">(if this is a private computer)</p>
                                      </div>
                                      <button type="button" class="btn btn_logn btn-block margin-bottom" onclick="return checkIn();">Login</button>
                                      <button class="btn btn-block btn-social btn_facebook margin-bottom">
                                      	<span class="fa fa-facebook"></span> Login With Facebook
                                      </button>
                                      <button class="btn btn-block btn-social btn_twitter">
                                      	<span class="fa fa-twitter"></span> Login With Twitter
                                      </button>
                                  </form><!-- end of form -->
                                  
                                  <span id="errorMessage"></span> 
                                  
                              </div><!-- end of col_1 -->
                          </div><!-- end of row -->               
                        </div><!-- end of content_1 -->
                        
                        <div class="tab-pane fade" id="create"><!-- start of content_2 -->
                            <div class="col-xs-12 no-padding">
                                <form name="myForm" id="myForm" role="form" class="padding-md-bottom padding-md-top"><!-- start of form -->
                                    <h4 class="no-margin">Please Sign Up <small>It's free and always will be.</small></h4>
                                    <hr class="colorgraph">
                                    <div class="row">
                                        <div class="col-xs-12"><!-- start of full_name -->
                                            <div class="form-group">
                                            	<input type="text" class="form-control login_input_div" id="full_name" name="full_name" placeholder="Enter Full Name">
                                            </div>
                                        </div><!-- end of full_name -->
                                        <div class="col-xs-12"><!-- start of email -->
                                            <div class="form-group">
                                            	<input type="text" class="form-control login_input_div" id="email" name="email" placeholder="Enter Email Id">
                                            </div>
                                        </div><!-- end of email -->
                                        <div class="col-xs-12 col-sm-6 col-md-6"><!-- start of password -->
                                            <div class="form-group">
                                            	<input type="password" class="form-control login_input_div" id="password" name="password" placeholder="Enter Your password">
                                            </div>
                                        </div><!-- end of password -->
                                        <div class="col-xs-12 col-sm-6 col-md-6"><!-- start of password_confirmation -->
                                            <div class="form-group">
                                            	<input type="password" class="form-control login_input_div" id="password_confirmation" name="password_confirmation" placeholder="Re-Enter password">
                                            </div>
                                        </div><!-- end of password_confirmation -->
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-4 col-md-4 margin-sm-top">
                                            <span class="checkbox">
                                                <label>
                                              <input type="checkbox" name="agree" id="agree"> I Agree
                                          </label>
                                            </span>
                                        </div>
                                        <div class="col-xs-12 col-sm-8 col-md-8 font-12">
                                             By clicking <strong class="label label-primary">Register</strong>, you agree to the <a href="#">Terms and Conditions</a> set out by this site, including our Cookie Use.
                                        </div>
                                    </div>
                                    
                                    <hr class="colorgraph">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-sm-offset-3">
                                        	<button type="submit" class="btn btn_logn btn-block" onclick="register();">Register</button>
                                        </div>
                                    </div>
                                </form><!-- end of form -->
                            </div>
                        </div><!-- end of content_2 -->
                        
                        <div class="tab-pane padding-md-top padding-md-bottom fade" id="forgot"><!-- start of content_3 -->
                            <div class="row"><!-- start of row -->
                              <div class="col-sm-12 col-xs-12"><!-- start of col_1 -->
                                  <form method="POST" action="/login/" novalidate><!-- start of form -->
                                      <div class="form-group">
                                          <input type="text" class="form-control login_input_div" id="username" name="username" placeholder="Enter Your Email Id">
                                      </div>
                                      <button type="submit" class="btn btn_logn btn-block margin-bottom">Submit</button>
                                      <a href="#login" data-toggle="tab">
                                      	<button type="submit" class="btn btn_logn btn-block margin-bottom">Cancel</button>
                                      </a>
                                  </form><!-- end of form -->
                              </div><!-- end of col_1 -->
                          </div><!-- end of row -->               
                        </div><!-- end of content_3 -->
                        
                    </div><!-- end of tab_content -->
                </div><!-- end of well -->
            </div><!-- end of body_section -->
            <div class="modal-footer no-border no-padding"></div>
        </div><!-- end of modal_popup -->
        
        <div class="modal-content no-border-radius no-padding col-sm-5 register_div no-border no-box-shadow hidden-xs"><!-- start of register_content -->
            <div class="col-sm-12 col-xs-12 login_padding">
              <h3 class="lead no-margin-bottom">Register now for <span class="">FREE</span></h3>
              <ul class="list-unstyled margin-top line-height-30">
                  <li><span class="fa fa-check"></span> See all your orders</li>
                  <li><span class="fa fa-check"></span> Fast re-order</li>
                  <li><span class="fa fa-check"></span> Save your favorites</li>
                  <li><span class="fa fa-check"></span> Fast checkout</li>
                  <li><span class="fa fa-check"></span> Get a gift <small>(only new customers)</small></li>
              </ul>
              <!-- <a href="#create" data-toggle="tab">
              	<button class="btn btn_logn btn-block" type="submit">Register</button>
              </a> -->
            </div>
        </div><!-- end of register_content -->
    
      </div>
    </div>
    <!-- end login Modal -->
    
    <!-- start loading model -->
    <div class="preloader" id="loadingdiv" style="display: none;">
   		<div><img src="/resources/user/img/loading_1.gif" alt="loading"/></div>
	</div>
	
	<style>
		.preloader{
		  background:rgba(255,255,255,0.7);
		  position:fixed;
		  top:0px;
		  left:0px;
		  width:100%;
		  height:100%;
		  z-index:9998;
		  opacity:1;
		  transition: all 0.5s ease-in-out;
		  -moz-transition: all 0.5s ease-in-out;
		  -o-transition: all 0.5s ease-in-out;
		  -webkit-transition: all 0.5s ease-in-out;
		} 
		.preloader img{
		  position:fixed;
		  z-index:9999;
		  top:40%;
		  left:45%;
		}
   </style>
   
   <script type="text/javascript">//searchPad
 $(document).ready(function() {
    var option = "/";
    //alert(option);
    var url = document.location.pathname;
   /*  document.myForm.signup.disabled = true; */
    //alert(url);
    if(option == url)
    {
      document.getElementById("searchPad").style.display="block";
    /*  $('#searchPad').show(); */
    }else
    {
    /* $('#searchPad').hide(); */
    document.getElementById("searchPad").style.display="none";
    }
    
   });


</script>
    
 <script type="text/javascript">/* Login script */
 
  function checkIn()
	  {
	 	  
	  document.getElementById('errorMessage').innerHTML="";
	  
	  var emailExp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;   
	  
	   	var email= loginform.elements["username"].value.trim();
       	var password = loginform.elements["userpassword"].value.trim();
       
	      if(email == "")
	       {
	        document.getElementById('errorMessage').innerHTML="Please enter Login Id";
		    return false;
	       }
	       else if(!emailExp.test(email)) {
	    	  
		        document.getElementById('errorMessage').innerHTML="Please enter valid email";
		        return false;
		    } 
	        else if(password == "")
	       {
	        document.getElementById('errorMessage').innerHTML="Please enter Password";
		    return false;
	       }	       
	       else
	       {
	         alert("Ok");
	           signin();
	       	return true;
	         
		   }  
	  };

  function signin(){
     
      
       var email= loginform.elements["username"].value.trim();
       var password = loginform.elements["userpassword"].value.trim();
        
       var name="";
        	var post_data = {  //prepare payload for request
					email : email,
					password : password
				} 
				
				document.getElementById("loadingdiv").style.display='block';
				 $.ajax({
				        type: "POST",
				        url: "/userLogin",
				        crossDomain: true,
				        data: post_data,
				        success: function (response) {
				        
				        	var str = response;
									var myarray = str.split(',');
									for(var i = 0; i < myarray.length; i++)
									{
									  //alert(myarray[i]);
									} 
									var access=myarray[0];
									var name=myarray[1];
				             	if(access=="success")
				             	{
				             	  
				             	   document.getElementById("loginform").reset();
				             	   document.getElementById("loadingdiv").style.display='none';
				             	   document.getElementById("myModalLogin").style.display='none';
				             	   document.getElementById("userlogin").style.display='none';
				             	   document.getElementById("userlogout").style.display='block';
				             	   document.getElementById("userName").innerHTML=name;
				             	   alert("Success");
								}
								else
								{
									alert("Error");  
									document.getElementById("loginform").reset();
									document.getElementById("loadingdiv").style.display='none';
									document.getElementById("myModalLogin").style.display='none';
							  	}
				        },
				        dataType: "json",
				        error: function (response) {
				        	document.getElementById("myForm").reset();
				        	document.getElementById("loadingdiv").style.display='none';
				        	alert("Error");					  
				        }
    				}); 
    				$('#loginform').trigger("reset");
    				        
        };
        
        
        function register()
		{
		   var logindilog=document.getElementById("myModalLogin");
				 var newuser = {  //prepare payload for request
					firstname:myForm.elements["full_name"].value,
					/* middlename:myForm.elements["middlename"].value,
					lastname:myForm.elements["lastname"].value, */
					email : myForm.elements["email"].value,
					password : myForm.elements["password"].value,
					repassword : myForm.elements["password_confirmation"].value
					/* promoCode : myForm.elements["promoCode"].value */
				} 		
				 $.ajax({
				        type: "POST",
				        url: "/user_register",
				       	contentType : "application/json",
				        data : JSON.stringify(newuser),	
				        dataType : 'json',		         	             	
				        success: function (response) {
				        		var str = response;
								var myarray = str.split(',');
									var access=myarray[0];
									var message=myarray[1];
				             	if(access=="success")
				             	{
				             		alert("Success");
				             		logindilog.style.display='none';
				             		
								}
								else
								{
									
				             		alert("error");
				             		document.getElementById("myForm").reset();
				             		
							  	}
							 	
				        },
				        error: function (response) {				        
				             		
				             		alert("error");
				             		document.getElementById("myForm").reset();
				             		
				             		
				        }
    				});
    			 $('#myForm').trigger("reset");
		
		};
       

</script>



	

	  <script>
  $(document).ready(function() {
	  
	  $('.dropdown-toggle1').click(function(){
		   $(this).toggleClass('active');
  $('#myNav').slideToggle(700);
		
		});
			
		});		
   
  </script>
  
          		<script>
 $(window).scroll(function() {
 if ($(document).scrollTop() > 10) {
 $('.bg_trnsprnt').addClass('shrink');
 }
 else {
 $('.bg_trnsprnt').removeClass('shrink'); }
 });
</script> 
<div class="height50"></div>
<style> .a2a_kit { display:none; } </style>


 <div id="appId" class=" hidden-lg hidden-md hidden-sm"  style="width:100%; background:rgba(0,0,0,0.8); min-height:20px; display:none; height:auto; padding:10px; border-bottom:2px solid #88b230; margin-top:40px; position:absolute; top:10px;">
 <a href="https://goo.gl/GcSH4L" target="_blank">

<div class="col-xs-2 no-padding"> <img src="/resources/images/app-logo.png"> </div>
<div class="col-xs-10" style="padding-left:20px;"> <h4 style="font-size:18px; color:#fff; font-weight:400; padding-bottom:10px;"> Get the app for Android</h4>
<span style="color:#fff; float:left;"> Download Free </span> <span style="float:left; padding-left:10px;"><img src="/resources/images/app-icon.png">  </span></div>

 </a>
 <div style="position: absolute; top: -16px; right: 20px;" id="appIdimg"><img src="/resources/images/app-cross.png" style="cursor:pointer;"></div>
 
 </div>