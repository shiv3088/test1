<!-- Footer Section Start Here -->  
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

   <!-- <div id="call">
   		<div class="bottom-call-bar">
			<a href="tel:1-888-737-8675">
			<span><i class="fa fa-phone" aria-hidden="true"></i> </span>
			<div class="call-text">Call &amp; Get Unpublished Flight Deals!</div>
			<div class="phone">+1-888-737-8675</div>
		  </a>
    	</div>
	</div> -->
	<style>
	 @media only screen and (min-width:320px) and (max-width:767px){#launcher{display:none!important}}
	</style>
	
	
        <c:choose>
       <c:when test="${fn:toLowerCase(utm_source) == 'bing' || fn:toLowerCase(utm_source) == 'bingmobile' }">
          <div id="call">
            <div class="bottom-call-bar">
                <a href="tel:1-844-307-3890">
                <span><i class="fa fa-phone" aria-hidden="true"></i> </span>
                <div class="call-text">Call &amp; Get Unpublished Flight Deals!</div>
                <div class="phone">+1-844-307-3890</div>
              </a>
            </div>
        </div>
        </c:when>
        <c:when test="${fn:toLowerCase(utm_source) == 'google'}">
		<div id="call">
            <div class="bottom-call-bar">
                <a href="tel:1-833-781-5806">
                <span><i class="fa fa-phone" aria-hidden="true"></i> </span>
                <div class="call-text">Call &amp; Get Unpublished Flight Deals!</div>
                <div class="phone">+1-833-781-5806</div>
              </a>
            </div>
        </div>
        </c:when>
        </c:choose>
<footer id="footer-block">
<div class="container">
    <div class="row">
        <div class="col-md-12">&nbsp;</div>
    </div>
    <div class="row">
        <div class="col-sm-8 col-xs-12">
             <div class="col-md-3 col-sm-3 col-xs-6">
            <div class="footer-links">
                <h5>Top Destinations</h5>
                <ul>
                    <li><a href="/us/destinations/flights-to-berlin-ber">Berlin</a></li>
                    <li><a href="/us/destinations/flights-to-frankfurt-fra">Frankfurt</a></li>
                    <li><a href="/us/destinations/flights-to-cologne-cgn">Cologne</a></li>
                    <li><a href="/us/destinations/flights-to-london-lon">London</a></li>
                    <li><a href="/us/destinations/flights-to-manchester-man">Manchester</a></li>                
                </ul>
                </div>
            </div> 
            <div class="col-md-3 col-sm-3 col-xs-6 hidden">
                <div class="footer-links">
                <h5>Popular Airlines</h5>  
                <ul>              
                    
                    <li><a href="/us/airlines/jetblue-airways-b6">JetBlue Airways</a></li>     
                        <li><a href="/us/airlines/air-canada-ac">Air Canada</a></li>   
                        <li><a href="/us/airlines/westjet-airlines-ws">Westjet Airlines</a></li>  					
                        <li><a href="/us/airlines/american-airlines-aa">American Airlines</a></li>
                        <li><a href="/us/airlines/hawaiian-airlines-ha">Hawaiian Airlines</a></li> 
                        <li><a href="/us/airlines/united-airlines-ua">United Airlines</a></li> 
                </ul>
                </div>
            </div>
			
			<div class="col-md-6 col-sm-6 col-xs-12  ">
            <div class="footer-links">
                
				<h5>Traveler Assistance</h5>				
                <div class="row">
                    <div class="col-sm-6 col-xs-6"> 
                        <ul>
							<li><a href="/us/about">About us</a></li>
							<li><a href="/us/contact">Contact us</a></li>
							<li><a href="/us/cookie-policy">Cookie Policy</a></li>  
							<li><a href="/us/cancellation-policy">Cancellation Policy</a></li>
							<li><a href="/us/privacy-policy">Privacy Policy</a></li>
							
                        </ul>
                    </div>
                    <div class="col-sm-6 col-xs-6"> 
                        <ul> 
						<li><a href="/us/taxes-fees">Taxes Fees</a></li>
							<li><a href="/us/taxes-fees#post-ticketing">Post-Ticketing Fees</a></li>
							<li><a href="/us/baggage-fees">Baggage Fees</a></li>
							<li><a href="/us/terms-and-conditions">Terms &amp; Conditions</a></li>
							<li><a href="/us/site-map">Sitemap</a></li> 
                        </ul>
                    </div>
                </div>
                   
                </div>
             
            </div>
			
			
        </div>
        <div class="col-sm-4 col-xs-12">
            <div class="follow-us">
                     <h5>Follow us :</h5>
            <a href="https://www.facebook.com/Travelopickus/" target="_blank" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://twitter.com/travelopickus" target="_blank" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>  
            <a href="https://www.instagram.com/travelopickus/" target="_blank" title="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>     
            </div>
            <div class="subscribe-bx">
            <h6>Sign-up Now for Exclusive Email-only Offers</h6>            
            <form class="col-xs-12 no-padding subs_margn">
		    <div class="form-group col-xs-12 no-padding">
		      <div class="col-xs-8 no-padding">
			<input data-ng-model="email" class="form-control subscribe-input" id="email" type="email"  data-ng-pattern="/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/" placeholder="Enter your email address" required/>
			<div style="right:222px;color:green;display:none;" id="eMailSuccess"></div>
			<div style="right:222px;color:red;display:none;" id="eMailError"></div>
		      </div>
		      <div class="col-xs-4 no-padding">
			<div class="promotional-txt">You agree for deals and offers</div>
			<button type="button" onclick="signup()" class="btn subsc_btn xs-full-width" id="subsc">Subscribe</button>
		      </div>
		    </div>
		  </form>
            </div>
            
             <div class="address-support">
                <div class="vt-address">
                    <h6>Bluesky Tours Ltd.<br /></h6>
                    <p> <b>UK Headquarter:</b> 27 Olympia Place, Great Sankey, Warrington, WA5 8DQ, United Kingdom</p><br>
                    <p> <b>US Branch:</b> C/O WeWork 1372 Peachtree St NE Atlanta,  GA 30309</p>
                </div>
                <div class="vt-support">
                    <h6>Contact</h6>
                    <ul> 
                       <li><a href="/us/contact">Customer Support </a> </li>
                       <li><a href="mailto:support@travelopick.com">Email</a></li>
                       <li><a href="/us/terms-and-conditions">Terms of Use</a></li>
                    </ul>
                </div>
                <div>
                   <c:choose>
                    <c:when test="${fn:toLowerCase(utm_source) == 'google'}">
		                <div> 24/7 Toll Free :  <a href="tel:+1-833-781-5806" style="color:#fff; font-size: 16px;">+1-833-781-5806</a> </div>
		             </c:when>
		             <c:when test="${fn:toLowerCase(utm_source) == 'bing' || fn:toLowerCase(utm_source) == 'bingmobile' }">
		               <div> 24/7 Toll Free :  <a href="tel:+1-844-307-3890" style="color:#fff; font-size: 16px;">+1-844-307-3890</a> </div>
		             </c:when>
		             <c:otherwise>
		                <div> 24/7 Toll Free :  <a href="tel:+1-888-737-8675" style="color:#fff; font-size: 16px;">+1-888-737-8675</a> </div>
		             </c:otherwise>
		            </c:choose>
                </div>
                <div class="vt-secure">
                    <img src="/resources/images/arc-icon.png" />
                    <img src="/resources/images/godadday-icon.png" />
                </div>
            </div>
        </div>
    </div> 
   
  </div>
  
  <div class="container">
  <div class="col-xs-12 discalmer ">
      <h6>Disclaimer</h6>
	  
      <p>Travelopick is a self-reliant online travel agency and not associated with any third party. By accessing and using Travelopick.com website you agree that Travelopick is not liable for any direct or indirect loss, however arising, from the use of any of the information, offers, materials or links to other sites found on this website.<br />
If you have any queries you can call us at our Toll Free 
                <c:choose>
                    <c:when test="${fn:toLowerCase(utm_source) == 'google'}">
                        <a href="tel:1-833-781-5806">1-833-781-5806</a> 
                     </c:when>
                     <c:when test="${fn:toLowerCase(utm_source) == 'bing' || fn:toLowerCase(utm_source) == 'bingmobile' }">
                       <a href="tel:1-844-307-3890">1-844-307-3890</a> 
                     </c:when>
                     <c:otherwise>
                        <a href="tel:1-888-737-8675">+1-888-737-8675</a> 
                     </c:otherwise>
                  </c:choose>
or simply email us at <a href="mailto:support@travelopick.com">support@travelopick.com</a></p>
    </div>
	
	<div class="footer-logo col-xs-12 text-center">
		<img src="/resources/images/card-home.png" class="card-logo" alt="icon">
		<img src="/resources/images/cloudflare-footer-logo.png" class="cloudfare" alt="icon">
		<span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=WVbmUApKyT5BmJtgbE4xOcTLRKaxXEE5EkfHYbj6OsmWg9UWicRaeF4xOm13"></script></span>
		<img src="/resources/images/atol.png" /> <img src="/resources/images/tta.png"  />
		<a href="https://www.trustpilot.com/review/travelopick.com" target="_blank">
			<img src="/resources/images/trustpilot-logo.png" height="40">
		</a>
	</div>
	
</div>
  
  <div class="copy-right">
   <!-- <div class="container">Copyrights &copy;
      <script> document.write((new Date()).getFullYear()) </script>
        ${data.siteName}.com. All Rights Reserved.
       </div>-->
      <div class="container"> 
  
    ${data.siteName}.com is represented by Bluesky Tours Ltd. which is registered in England & Wales.  <b>Registration Number <span style="color: #ccc;">2199423</span>. VAT Number <span style="color: #ccc;">330640832</span>.</b> <br>
Copyrights &copy; 2019-2020 Bluesky Tours Ltd. All Rights Reserved.
    
       </div>
  </div>
</footer>
 
<script type="text/javascript">
    var mfq = mfq || [];
    (function() {
        var mf = document.createElement("script");
        mf.type = "text/javascript"; mf.async = true;
        mf.src = "//cdn.mouseflow.com/projects/12d10d9b-2948-4779-af73-ac5bd3868d89.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
    })();
</script>


<!-- header file js -->

   <script type="text/javascript">//searchPad
 $(document).ready(function() {
    var option = "/";
    //alert(option);
    var url = document.location.pathname;
   /*  document.myForm.signup.disabled = true; */
    //alert(url);
    if(option == url)
    {
      //document.getElementById("searchPad").style.display="block";
    /*  $('#searchPad').show(); */
    }else
    {
    /* $('#searchPad').hide(); */
    //document.getElementById("searchPad").style.display="none";
    }
    
   });

</script>
  
	  <script>
  $(document).ready(function() {
	  
	  $('.dropdown-toggle1').click(function(){
		   $(this).toggleClass('active');
		    $('.headerBox').toggleClass('header-bg-white');
			$('.page-overlay').toggle();
		$('#myNav').slideToggle(700);
		
		});
		
		 $('.page-overlay').click(function(){
		   $('.dropdown-toggle1').removeClass('active');
		    $('.headerBox').removeClass('header-bg-white');
			$('.page-overlay').toggle();
			$('#myNav').slideToggle(700);
		
		});
		
			
		});		
   
  </script>
  
  <script>
 $(window).scroll(function() {
 if ($(document).scrollTop() > 10) {
 $('.headerBox').addClass('shrink');
 }
 else {
 $('.headerBox').removeClass('shrink'); }
 });
</script> 


<script type="text/javascript" src="/resources/us/js/index_eng_min_1.4.js?01082019"></script>


	
