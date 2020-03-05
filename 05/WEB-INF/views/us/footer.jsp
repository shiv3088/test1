<%@page import="com.cff.data.CommonAppData"%>
<%@page import="org.springframework.context.support.ClassPathXmlApplicationContext"%>
<%@page import="org.springframework.context.ApplicationContext"%>
<footer>
 <%ApplicationContext context = new ClassPathXmlApplicationContext("springContext.xml");
 CommonAppData data = (CommonAppData)context.getBean("commonProperties");
  %>
 <div style="background:#31609f; color:#fff; text-align:center; padding:15px 0;" class="visible-lg visible-md visible-sm hidden-xs">
 
 <div class="container">
 
 <h3 style="color:#fff"><i aria-hidden="true" class="fa fa-newspaper-o"></i> Sign up Newsletter </h3>
 <p align="center">Sign up to get the handpicked deals in your mailbox!</p>
 
 <div class="row">
	<div class="col-sm-3 col-md-3"></div>
	<div class="col-sm-6 col-md-6 col-xs-12">
	
 
 <div class="input-group" ng-controller="signCtrl as recapSign"> 
	  <form name="recapSign.signupForm" ng-submit="recapSign.signup()" > 

	  <input ng-model="recapSign.email" class="form-control sumit" style="height:50px; border:0 !important;" type="email"  ng-pattern="/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/" placeholder="Your e-mail address" required/>
	 <span class="input-group-btn">
	    <button class="btn btn-warning sing-up" type="submit" style="height:50px; width:100%;">Sign Up!</button>
	   
	  </span>
  </form>
  <script src="/resources/js/signupNews.js"></script>
</div>
	</div>
 </div>

</div> 
 
</div>

<div class="footer-block visible-lg visible-md visible-sm hidden-xs"> 
 <div class="container">
 
  <div class="row">
	<div class="col-sm-2 np_sm"><div class="head"> <i class="fa fa-angle-right pull-right"></i> Domestic Destinations  </div> </div>
	<div class="col-sm-10 footer_list">
	
	<ul>
	
	<li>  <a href="/cheap-flights-to-baltimore-bwi" rel="nofollow">Flights to Baltimore</a> </li>
	<li>  <a href="/cheap-flights-to-charlotte-clt" rel="nofollow">Flights to Charlotte</a> </li>
	<li>  <a href="/cheap-flights-to-denver-den" rel="nofollow">Flights to Denver</a> </li>
	<li>  <a href="/cheap-flights-to-honolulu-hnl" rel="nofollow">Flights to Honolulu</a>  </li>
	<li>  <a href="/cheap-flights-to-houston-hou" rel="nofollow">Flights to Houston</a> </li>
	<li>  <a href="/cheap-flights-to-lasvegas-las" rel="nofollow">Flights to Las Vegas</a>  </li>
	<li>  <a href="/cheap-flights-to-newyork-nyc" rel="nofollow">Flights to New York</a> </li>
	<li>  <a href="/cheap-flights-to-miami-mia" rel="nofollow">Flights to Miami</a> </li>
	<li>  <a href="/cheap-flights-to-orlando-orl" rel="nofollow">Flights to Orlando</a> </li>
	<li>  <a href="/cheap-flights-to-sanfrancisco-sfo" rel="nofollow">Flights to San Francisco</a> </li>
	<li>  <a href="/cheap-flights-to-phoenix-phx" rel="nofollow">Flights to Phoenix</a> </li>
	<li>  <a href="/cheap-flights-to-tampa-tpa" rel="nofollow">Flights to Tampa</a> </li>
	<li>  <a href="/cheap-flights-to-washington-was" rel="nofollow">Flights to Washington DC</a>  </li>

	</ul>
	
	
	  
	</div>
 
 </div>
 
 <div class="devider12"></div>
 
 <div class="row">
	<div class="col-sm-2 np_sm"><div class="head"> <i class="fa fa-angle-right pull-right"></i> International Destinations  </div> </div>
	<div class="col-sm-10 footer_list">
	<ul>
	
	<li> <a href="/cheap-flights-to-amsterdam-ams" rel="nofollow">Flights to Amsterdam</a> </li>
	<li> <a href="/cheap-flights-to-cancun-cun" rel="nofollow">Flights to Cancun</a> </li>
	<li> <a href="/cheap-flights-to-rome-rom" rel="nofollow">Flights to Rome</a> </li>
	<li> <a href="/cheap-flights-to-toronto-canada" rel="nofollow">Flights to Toronto</a> </li>
	<li> <a href="/cheap-flights-to-bangkok-bkk" rel="nofollow">Flights to Bangkok</a> </li>       
    <li> <a href="/cheap-flights-to-istanbul-ist" rel="nofollow">Flights to Istanbul</a> </li>		    
	<li> <a href="/cheap-flights-to-dubai-dxb" rel="nofollow">Flights to Dubai</a> </li>		
	<li> <a href="/cheap-flights-to-frankfurt-fra" rel="nofollow">Flights to Frankfurt</a> </li>		 
	<li> <a href="/cheap-flights-to-barcelona-bcn" rel="nofollow">Flights to Barcelona</a> </li>		 
	<li> <a href="/cheap-flights-to-paris-par" rel="nofollow">Flights to Paris</a> </li>		 
	<li> <a href="/cheap-flights-to-guadalajara-mexico" rel="nofollow">Flights to Guadalajara</a> </li>		
	<li> <a href="/cheap-flights-to-manila-mnl" rel="nofollow">Flights to Manila</a> </li>	     
	<li> <a href="/cheap-flights-to-london-lon" rel="nofollow">Flights to London</a> <li>		 
	<li> <a href="/cheap-flights-to-moscow-mow" rel="nofollow">Flights to Moscow</a> </li>		  
	<li> <a href="/cheap-flights-to-lima-peru" rel="nofollow">Flights to Lima</a> </li>		 
	<li>  <a href="/cheap-flights-to-dublin-dub" rel="nofollow">Flights to Dublin</a> </li>	     
			  
	</ul>		
			 
			     
	</div>
 
 </div>
 
 <div class="devider12"></div>
 
 <div class="row">
	<div class="col-sm-2 np_sm"><div class="head"> <i class="fa fa-angle-right pull-right"></i>  Special Deals </div> </div>
	<div class="col-sm-10">
	  <b>Travel By Class:</b>
			 <a href="/deals/deals-under-199">Deals Under $199</a> 
			 <a href="/deals/deals-under-99">Deals Under $99</a> 
			 <a href="/deals/first-class">First Class Travel Offers</a> 
			 <a href="/deals/business-class-flight-deals">Business Class Travel Offers</a>
			 <a href="/one-way-travel-offers">One Way Travel Offers</a> 
			 <a href="/round-trip-travel-offers">Round Trip Travel Offers</a>
	 
			 <br />
			 <b>Travel By Season:</b>
			
			 <a href="/spring-travel-offers">Spring Travel Offers</a> 
			  <a href="/deals/fall-season"></i>Fall Season</a> 
			 <br />
 
			 <b>Custom Travel:</b>
             <a href="/deals/last-minute-flights-deals">Last Minute Travel</a> 
			 <a href="/family-travel-offers">Family Travel Offers</a> 
			 <a href="/holiday-travel-offers">Holiday Travel Offers</a> 
			 <a href="/cheap-group-travel-tickets">Group Travel Offers</a> 
			 <a href="/senior-travel-deals-offers">Senior Travel Deals</a> 
			 <a href="/cheap-international-flights">International Flights</a> 
			 <a href="/deals/romantic-travel">Romantic Travel</a> 
			 <a href="/deals/weekend-travel">Weekend Travel</a> 
			 <a href="/military-travel-offers">Military Travel Offers</a>	 		 
			 <a href="/cheap-domestic-flights">Domestic Flights</a>
			 
		 
	</div>
 
 </div>
 
 <div class="devider12"></div>
 
 <div class="row">
	<div class="col-sm-2 np_sm"><div class="head"> <i class="fa fa-angle-right pull-right"></i> Top Airlines  </div> </div>
	
	<div class="col-sm-10 footer_list">
	<ul>
	
	<li> <a href="/cheap-airline/aer-lingus-ei-and-flight-deals" rel="nofollow"> Aer Lingus</a>  </li>
	<li> <a href="/cheap-airline/air-canada-ac-and-flight-deals" rel="nofollow"> Air Canada </a>  </li>
	<li> <a href="/cheap-airline/american-airlines-aa-and-flight-deals" rel="nofollow"> American Airlines </a>  </li>
    <li> <a href="/cheap-airline/british-airways-ba-and-flight-deals" rel="nofollow"> British Airways </a>  </li>
	<li> <a href="/cheap-airline/lufthansa-airlines-lh-and-flight-deals" rel="nofollow"> Lufthansa Airlines </a> </li>
	<li> <a href="/cheap-airline/eva-air-br-and-flight-deals" rel="nofollow"> Eva Airlines </a>   </li>       
    <li> <a href="/cheap-airline/philippine-airlines-pr-and-flight-deals" rel="nofollow"> Philippine Airlines</a>    </li>		    
	<li> <a href="/cheap-airline/qatar-airways-qr-and-flight-deals" rel="nofollow"> Qatar Airways </a>  </li>		
	<li> <a href="/cheap-airline/westjet-airlines-ws-and-flight-deals" rel="nofollow"> Westjet Airlines </a>  </li>		 
	<li> <a href="/cheap-airline/asiana-airlines-oz-and-flight-deals" rel="nofollow"> Asiana Airlines </a>  </li>		 
	<li> <a href="/cheap-airline/allnippon-airways-nh-and-flight-deals" rel="nofollow"> All Nippon Airways </a> </li>		 
	<li> <a href="/cheap-airline/cathaypacific-airways-cx-and-flight-deals" rel="nofollow">Cathay Pacific Airways </a>  </li>		
	<li> <a href="/cheap-airline/emirates-airlines-ek-and-flight-deals" rel="nofollow">Emirates Airlines </a>   </li>	     
	<li> <a href="/cheap-airline/etihad-airways-ey-and-flight-deals" rel="nofollow"> Etihad Airways </a>   <li>		 
	<li> <a href="/cheap-airline/garuda-indonesia-ga-and-flight-deals" rel="nofollow"> Garuda Airlines </a>  </li>		  
	<li> <a href="/cheap-airline/qantas-airways-qf-and-flight-deals" rel="nofollow"> Qantas Airways </a>  </li>		 
	<li> <a href="/cheap-airline/singapore-airlines-sq-and-flight-deals" rel="nofollow"> Singapore Airlines </a>  </li>
    <li> <a href="/cheap-airline/turkish-airlines-tk-and-flight-deals" rel="nofollow"> Turkish Airlines </a>   </li>
    <li> <a href="/cheap-airline/southwest-airlines-wn-and-flight-deals" rel="nofollow"> Southwest Airlines </a>  </li>
    <li> <a href="/cheap-airline/spirit-airlines-nk-and-flight-deals" rel="nofollow"> Spirit Airlines </a> </li>
    <li> <a href="/cheap-airline/jetblue-airways-B6-and-flight-deals" rel="nofollow"> Jetblue Airways </a> </li>	
			  
	</ul>		
			 
			     
	</div>
	
 
 </div>
 
 
 <div class="devider12" style="border:0;"></div>
 
 </div>
 
 <div style="background:#fff; padding:15px 0; border-top:1px solid #ccc;  border-bottom:1px solid #ccc;">
 <div class="container">
 <div class="row">
	<div class="col-md-12 col-xs-12 list">
			
            <div class="col-md-9 col-sm-6 col-xs-12">
			 <div class="row">
			 <div class="col-md-3 col-sm-6 col-xs-12">
             <ul>
             <li><a href="/security"><i class="fa fa-lock"></i>Security</a></li>
			 <li><a href="/privacy-policy"><i class="fa fa-support"></i>Privacy Policy</a></li>
			 <li><a href="/baggage-fees"><i class="fa fa-suitcase"></i>Baggage Fees</a></li>
			 <li><a href="/fashion"><i class="fa fa-globe"></i>TravelTrendy</a></li>
			 
			
             </ul>			
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">
             <ul>
            
			 <li><a href="/terms-conditions"><i class="fa fa-info-circle "></i>Terms and Conditions</a></li>
			 <li><a href="/cancellation-refund-policy"><i class="fa fa-eraser"></i>Cancellation Policy</a></li>
			 <li><a href="/site-map"><i class="fa fa-sitemap"></i>Sitemap</a></li>
			 <li><a href="/sports-vacation"><i class="fa fa-futbol-o"></i>Sports Vacation</a></li>
			 
			
             </ul>			
			</div>
			
			<div class="col-md-3 col-sm-6 col-xs-12">
             <ul>
          
			
			 <li><a href="/taxes-fees"><i class="fa fa-thumbs-o-up"></i>Taxes &amp; Fees</a></li>
			 <li><a href="/support"><i class="fa fa-envelope"></i>Customer Support</a></li>
			<li><a href="/faqs"><i class="fa fa-question-circle"></i>FAQs</a></li>
			<li><a href="https://play.google.com/store/apps/details?id=com.Travelopick" target="_blank"><i class="fa fa-android" aria-hidden="true"></i>Free Android App</a></li>
             </ul>			
			</div>
			
			<div class="col-md-3 col-sm-6 col-xs-12">
             <ul>
         
			 
			
			 <li><a href="https://www.travelopick.com/ccv/form"><i class="fa fa-plus-square"></i>CCV Form</a></li>
			 <li><a href="/cheap-flights-apps"><i class="fa fa-mobile" style="font-size:18px;"></i>Cheap Flights Apps</a></li>
			 <li><a href="/contact-us"><i class="fa fa-comment" aria-hidden="true"></i>Contact Us</a></li>
			
             </ul>			
			</div>
			 </div>
			</div>
			
			<div class="col-md-3 col-sm-6 col-xs-12">
			<div><b>CONNECT WITH US</b></div>
			<div class="row">
              <div class="col-xs-2 "><a href="https://www.facebook.com/travelopick/" target="_blank" title="Facebook"><i class="fa fa-facebook "></i></a></div>
	          <div class="col-xs-2 "><a href="https://twitter.com/Travelopick" target="_blank" title="Twitter"><i class="fa fa-twitter "></i></a></div>
	          <div class="col-xs-2 "><a href="https://www.pinterest.com/travelopick/" target="_blank" title="Pinterest"><i class="fa fa-pinterest-p "></i></a></div>
	          <div class="col-xs-2 "><a href="https://plus.google.com/+Travelopick" target="_blank" title="Google+"><i class="fa fa-google-plus "></i></a></div>
	          <div class="col-xs-2 "><a href="https://www.linkedin.com/company/Travelopick" target="_blank" title="Linkedin"><i class="fa fa-linkedin "></i></a></div>
              <div class="col-xs-2 "><a href=" https://www.instagram.com/travelopick/" target="_blank" title="Instagram"><i class="fa fa-instagram "></i></a></div>
	        
	          <div class="col-xs-2 "><a href="http://Travelopick.tumblr.com/" target="_blank" title="Tumblr"><i class="fa fa-tumblr "></i></a></div>
	          <div class="col-xs-2 "><a href="https://www.youtube.com/c/Travelopick" target="_blank" title="Youtube"><i class="fa fa-youtube "></i></a></div>
 
			</div>
			
			</div>
 
 
			</div>
 
 </div>
 
 
 
 
 
 
 </div>
 </div>
</div>
 
            <div class="Copyrightsfooter" style=" background:#ededed; border-top:0;" >
			 
			
            	 <div class="container">
			<div style=" color:#000; clear:both; padding:5px 0; ">
		 
		
		 <div style="line-height:1.5em; margin-bottom:10px; font-size:12px;"><b>Disclaimer:</b> Travelopickis a self-reliant online travel agency and not associated with any third party. By accessing and using Travelopick.com website you agree that Travelopickis not liable for any direct or indirect loss, however arising, from the use of any of the information, offers, materials or links to other sites found on this website. If you have any queries you can call us at 1-888-737-8675 or simply email us at ${data.supportMail}.</div>
		
	 
		</div>
		
		<div style="background:#fff; border-top:1px solid #dadada; border-bottom:1px solid #dadada;" class="visible-lg visible-md visible-sm hidden-xs">
		 
		
		<div class=" col-md-6 col-xs-12">
		
		<img width="90%" src="/resources/images/security-img.jpg" alt="Security">
		
		</div>
		
		<div class="col-md-6 col-xs-12">
		
		<img width="90%" src="/resources/images/security-img1.jpg" alt="Security">
		
		</div>
		<div class="clearfix"></div>
		 
		</div>
			
			
            	 
                	<div class="row">
                    
                        
                        <div class="col-xs-12">
                        	<p style="text-align:center; padding:10px; color:#000; font-size:12px;  ">Copyrights &copy;  Travelopick.com, All Rights Reserved. Use of this website signifies your agreement to the <a style="color:#333; text-decoration:underline;" href="/terms-conditions">Terms of Use</a></p>
                        </div>
                    </div>
                </div>
				 
				 
				 
            </div>
</footer> 			
			


<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="googleads" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/928632334/?value=0&amp;guid=ON&amp;script=0"/>
</div>
</noscript>
<script> window._izq = window._izq || []; window._izq.push(["init"]); </script> 
<script src="//cdn.izooto.com/scripts/004f62ba53db9a467296985f4d7a5121bde34d2e.js"></script>
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1575600346100223');
fbq('track', "PageView");</script>




<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1575600346100223&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
<script>
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
});
</script>


<script type="text/javascript">
var sc_project=11035615; 
var sc_invisible=0; 
var sc_security="7bb6819e"; 
var scJsHost = (("https:" == document.location.protocol) ?
"https://secure." : "http://www.");
document.write("<sc"+"ript type='text/javascript' src='" +
scJsHost+
"statcounter.com/counter/counter.js'></"+"script>");
</script>
<noscript><div class="statcounter"><a title="shopify
analytics ecommerce tracking"
href="http://statcounter.com/shopify/" target="_blank"><img
class="statcounter"
src="//c.statcounter.com/11035615/0/7bb6819e/0/"
alt="shopify analytics ecommerce
tracking"></a></div></noscript>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-73244320-1', 'auto');
  ga('send', 'pageview');

</script>

<script type="text/javascript">
    var mfq = mfq || [];
    (function() {
        var mf = document.createElement("script");
        mf.type = "text/javascript"; mf.async = true;
        mf.src = "//cdn.mouseflow.com/projects/12d10d9b-2948-4779-af73-ac5bd3868d89.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
    })();
</script>
<style> .footer_list ul li{ float:left;}</style>
