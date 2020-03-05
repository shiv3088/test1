<!-- Footer Section Start Here -->  
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>

<footer id="footer-block">

<div class="hidden-xs">
  <!--  / Subscribe Box \ -->
  <div class="socail_bg" >
    <div class="container" >
      <div class="row">
        <div class="col-md-4 col-sm-6  col-xs-12">
          <div class="get_offer">Subscribe for Best Offers and Travel Deals</div>
        </div>

        <div class="col-md-4 col-sm-6  col-xs-12">
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
        
        <div class="col-md-4 col-sm-12  col-xs-12 text-right">

          <div class="get_offer"> <a href="https://www.facebook.com/${data.siteId}/" target="_blank"> <i class="fa fa-facebook"></i> </a> <a href="https://twitter.com/${data.siteId}" target="_blank"> <i class="fa fa-twitter"></i> </a> <a href="https://www.instagram.com/${data.siteId}/" target="_blank"> <i class="fa fa-instagram"></i> </a> <a href="https://www.pinterest.com/${data.siteId}/" target="_blank"> <i class="fa fa-pinterest" aria-hidden="true"></i> </a> <a href="https://www.youtube.com/channel/UCjVQNCXrkTtVlsrFzNsnhvQ" target="_blank"> <i class="fa fa-youtube" aria-hidden="true"></i> </a> <a href="https://plus.google.com/+${data.siteId}" target="_blank"> <i class="fa fa-google-plus"></i> </a></div>
        </div>
      </div>
    </div>
  </div>
  <!--  \ Subscribe Box / -->
  
  <div class="clearfix"></div>
  <!--  / footer top link Box \ -->
  <div class="footer-top">
    <div class="container"  >
      <h4>Top Car Rental Locations </h4>
      <div class="col-sm-3">
        <ul class="footer_link">
          <li><a href="/car-hire/denver/den">Cars in Denver</a></li>
          <li><a href="/car-hire/las-vegas/las">Cars in Las Vegas</a> </li>
        </ul>
      </div>
      <div class="col-sm-3">
        <ul class="footer_link">
          <li><a href="/car-hire/new-york/nyc">Cars in New York City</a></li>
          <li><a href="/car-hire/orlando/mco">Cars in Orlando</a> </li>
        </ul>
      </div>
      <div class="col-sm-3">
        <ul class="footer_link">
          <li><a href="/car-hire/rome/rom">Cars in Rome</a> </li>
          <li><a href="/car-hire/dublin/dub">Cars in Dublin</a> </li>
        </ul>
      </div>
      <div class="col-sm-3">
        <ul class="footer_link">
          <li><a href="/car-hire/madrid/mad">Cars in Madrid</a> </li>
          <li><a href="/car-hire/london/lon">Cars in London</a> </li>
        </ul>
      </div>
	  
	  <h4>Top Car Rental Companies </h4>
      <div class="col-sm-3">
        <ul class="footer_link">
          <li><a href="/car-supplier/advantage">Advantage Rent A-Car</a></li>
		  
        </ul>
      </div>
	  <div class="col-sm-3">
        <ul class="footer_link">
		  <li><a href="/car-supplier/easirent">Easirent Car Hire</a></li>
        </ul>
      </div>
	  <div class="col-sm-3">
        <ul class="footer_link">
          <li><a href="/car-supplier/ezrent">Ez Rent A Car</a></li>
        </ul>
      </div>
	  <div class="col-sm-3">
        <ul class="footer_link">
          <li><a href="/car-supplier/sixt">Sixt Auto</a></li>
		  <a href="/site-map?car-rental" style="text-decoration:underline; color:#e37214; padding-left:20px;">See More</a>
        </ul>
      </div>
	  
	  
	  
    </div>
  </div>
  <!--  \ footer top link Box / -->
  
  <!--  / footer bottom link Box \ -->
  <div class="footer_bottom">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <ul class="footer_link footer_bottom_link">
            <li><a class="fa fa-lock" href="/security">Security</a></li>
            <li><a class="fa fa-support" href="/privacy-policy">Privacy Policy</a></li>
            <li><a class="fa fa-suitcase" href="/baggage-fees">Baggage Fees</a></li>
            <li><a class="fa fa-globe" href="/affiliate-signup">Become An Affiliate</a></li>
          </ul>
        </div>
        <div class="col-sm-3">
          <ul class="footer_link footer_bottom_link">
            <li><a class="fa fa-info-circle " href="/terms-conditions">Terms and Conditions</a></li>
            <li><a class="fa fa-eraser" href="/cancellation-refund-policy">Cancellation Policy</a></li>
            <li><a class="fa fa-sitemap" href="/site-map">Sitemap</a></li>
            <li><a class="fa fa-plus-square" href="/travel-insurance"> Travel Protection</a></li>
          </ul>
        </div>
        <div class="col-sm-3">
          <ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="footer_link footer_bottom_link">
            <li><a class="fa fa-usd" href="/taxes-fees">Taxes &amp; Fees</a></li>
            <li itemprop="name"><a itemprop="url" class="fa fa-envelope" href="/support">Customer Support</a></li>
            <li><a class="fa fa-question-circle" href="/faqs">FAQs</a></li>
            <li itemprop="name"><a itemprop="url" class="fa fa-info-circle" href="/about" target="_blank">About Us</a></li>
          </ul>
        </div>
        <div class="col-sm-3">
          <ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="footer_link footer_bottom_link footerlast">
          
            <li><a class="fa fa-plus-square" href="${data.siteUrl}ccv/form">CCV Form</a></li>
            <li itemprop="name"><a itemprop="url" class="fa fa-info-circle" href="/about" target="_blank">About Us</a></li>
			<li itemprop="name"><a itemprop="url" class="fa fa-globe"  href="/contact-us">Contact Us</a></li>
			 <li itemprop="name"><a itemprop="url" class="fa-address-card" href="https://www.visahq.com/?a_aid=vaff11679" onClick="ga('send', 'event', { eventCategory: 'visa services', eventAction: 'click', eventLabel: 'visa'});" target="_blank">Visa Services</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!--  \ footer bottom link Box / -->
  
  <!--  / footer terms of condition Box \ -->
  <div class="car-footer-terms">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h3>Terms &amp; Conditions</h3>

          <p>The car rental companies listed on ${data.siteName} reflect the lowest rates available online. The rates displayed here may vary depending on availability, travel dates and destinations. Mentioned below are the terms and conditions for car rentals</p>
          <ul>
            <li> The quoted rates are subject to change without any prior notice.</li>
            <li> Customer will be charged taxes and fees upon returning the vehicle to the car rental company, when and where it's applicable.</li>
            <li> Additional restrictions and fees may apply based on the driver's age.</li>
            <li> Car type is subject to availability and may change at the sole discretion of the car rental company.</li>
        
            <li> ${data.siteName} does not accept any affinity program cards, so it is up to the client to contact the car rental company and find out about discount eligibility pertaining to affinity program cards.</li>
            <li> Note that there are many car rental companies which may not accept debit cards or other alternative payment systems. So, Customer need to check the terms and conditions of the car rental company before choosing one.</li>
            <li> Applying promo codes at the time of payment may enable you to make additional savings on convenience fee.</li>
            <li> Rates displayed are in USD and are average daily rates excluding various taxes and fees.</li>
            <li> A promo code expires on the date indicated and is subject to change any time, without any prior notice. </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!--  \ footer terms of condition Box / -->
  
  <!--  / disclaimer Box \ -->
  <div class="container">
    <div class="col-xs-12 discalmer">
      <h6>Disclaimer</h6>
 
        <p>${data.siteName} is a self-reliant online travel agency and not associated with any third party. By accessing and using ${data.siteName}.com website you agree that ${data.siteName} is not liable for any direct or indirect loss, however arising, from the use of any of the information, offers, materials or links to other sites found on this website.<br/>
        If you have any queries you can call us at our Toll Free
        <c:out value='${tollFree}' />
        or simply email us at <a href="mailto:helpdesk@${data.siteId}.com ">helpdesk@${data.siteId}.com </a></p>
    </div>
  </div>
  <!--  \ disclaimer Box / -->
  
  <!--  / secure Box \ -->
  <div class="secureBox">
    <div class="container">
      <div class="col-xs-12 no-padding animateblock right">
        <ul>
          <li><a href="https://www2.arccorp.com/support-training/arc-check-results/?acn=36709072&formSourceName=StandardForm&sp_exp=yes" target="_blank"><img src="/resources/images/travel-plan/arc.png" alt="ARC"></a></li>
	    <li><img src="/resources/images/travel-plan/asta.png" alt="American Society of Travel Agents"></li>
          <li class="hidden-xs"><img src="/resources/images/travel-plan/true.png" alt="ccra"></li> 

	
          <li class="hidden-sm hidden-xs"><img src="/resources/images/travel-plan/moneris.png" alt="Moneris Solutions"></li>
        </ul>
      </div>
    </div>
  </div>
  <!--  \ secure Box / -->
  </div>
  
  <div class="col-xs-12 copy_right">
    <div class="container"> &copy; 2016 -
      <script> document.write((new Date()).getFullYear()) </script>
      Fares Hub, LLC. All Rights Reserved. Use of this website signifies your agreement to the <a href="/terms-conditions">Terms of Use</a> </div>
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
      document.getElementById("searchPad").style.display="block";
    /*  $('#searchPad').show(); */
    }else
    {
    /* $('#searchPad').hide(); */
    document.getElementById("searchPad").style.display="none";
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




<script type="text/javascript" src="/resources/js/index_eng_min_1.4.js?03222018as"></script>
 <%
    if (session.getAttribute("utm_source") == null) {
       
    } else {
    String utmSou=(String)session.getAttribute("utm_source");
   
   
%>

<%    
    
    } %>
