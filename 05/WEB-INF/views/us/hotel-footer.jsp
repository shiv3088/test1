<!-- Footer Section Start Here -->  
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<footer id="footer-block" class="hotel_footer">
  <!--  / SubscribeBox container \ -->
  
<input type="hidden" id="stayCityName" value="${stayCityName}"/>
<input type="hidden" id="locationids" value="${locationid}"/>

  <!--  / SubscribeBox container \ -->
 <script>
$(document).ready(function(){

//$("#froCity").val($("#originCityName").val());
if($("#stayCity").val() == ""){
$("#stayCity").val($("#stayCityName").val());
$("#locationid").val($("#locationids").val());
}
})
</script> 
  <!--  \ content Main Block / -->
  <!--  / SubscribeBox container \ -->
  <div class="socail_bg hidden-xs">
    <div class="container" >
      <div class="row">
        <div class="col-md-4 col-sm-6  col-xs-12">
          <div class="get_offer">Subscribe for Best Offers and Travel Deals</div>
        </div>

        <!--<div class="col-md-4 col-sm-6  col-xs-12">
          <form name="signupForm" data-ng-submit="signup()" onsubmit="signup()" class="col-xs-12 no-padding subs_margn">
            <div class="form-group col-xs-12 no-padding">
              <div class="col-xs-8 no-padding">
                <input data-ng-model="email" class="form-control subscribe-input" id="email" type="email"  data-ng-pattern="/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/" placeholder="Enter your email address" required/>
              </div>
              <div class="col-xs-4 no-padding">
               <div class="promotional-txt" style="right:222px;color:red;display:none;" id="scmess"></div>
                <div class="promotional-txt">You agree for deals and offers</div>
                <button type="submit" class="btn subsc_btn xs-full-width" id="subsc">Subscribe</button>
              </div>
            </div>
          </form>
        </div>-->

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
         
        </div>
      </div>
    </div>
  </div>
  <!--  / SubscribeBox container \ -->
  <div class="container hidden-xs">

	<div class="footer-top hidden-xs visible-sm visible-md visible-lg ">
      <ul class="nav nav-tabs footer-tab">
        <li class="active"><a data-toggle="tab" href="#home">Domestic Destinations </a></li>
        <li><a data-toggle="tab" href="#menu1">International Destinations </a></li>
       
      </ul>
      <div class="tab-content">
        
		<div id="home" class="tab-pane fade in active">
          <div class="col-sm-3">
		    <ul class="footer_link">
              <li> <a href="/hotel/best-hotel-in-las-vegas-las" >Hotel in Las Vegas</a> </li>
              <li> <a href="/hotel/best-hotel-in-hawaii-hnl" >Hotel in Hawaii</a> </li>
              <li> <a href="/hotel/best-hotel-in-miami-mia" >Hotel in Miami Beach</a> </li>
			  <li> <a href="/hotel/best-hotel-in-new-orleans-msy" >Hotel in New Orleans</a> </li>
            </ul>
          </div>
          <div class="col-sm-3">
            <ul class="footer_link">
              <li> <a href="/hotel/best-hotel-in-new-york-nyc" >Hotel in New York</a> </li>
              <li> <a href="/hotel/best-hotel-in-orlando-orl" >Hotel in Orlando</a> </li>
              <li> <a href="/hotel/best-hotel-in-san-francisco-sfo" >Hotel in San Francisco</a> </li>
			   <li> <a href="/hotel/best-hotel-in-washington-was" >Hotel in Washington DC</a> </li>
			  

            </ul>
          </div>
          <div class="col-sm-3">
            <ul class="footer_link">
              <li> <a href="/hotel/best-hotel-in-chicago-chi" >Hotel in Chicago</a> </li>
              <li> <a href="/hotel/best-hotel-in-san-diego-san" >Hotel in San Diego</a> </li>
              <li> <a href="/hotel/best-hotel-in-los-angeles-lax" >Hotel in Los Angeles</a> </li>
			  <li> <a href="/hotel/best-hotel-in-myrtle-beach-myr" >Hotel in Myrtle Beach</a> </li>
			  
            </ul>
          </div>
          <div class="col-sm-3">
            <ul class="footer_link">
              <li> <a href="/hotel/best-hotel-in-denver-den" >Hotel in Denver</a> </li>
              <li> <a href="/hotel/best-hotel-in-boston-bos" >Hotel in Boston</a> </li>
              <li> <a href="/hotel/best-hotel-in-reno-rno" >Hotel in Reno</a> </li>
            </ul>
          </div>
        </div>
		
        <div id="menu1" class="tab-pane fade">
         <div class="col-sm-3">
		    <ul class="footer_link">
              <li> <a href="/hotel/best-hotel-in-bangkok-bkk" >Hotel in Bangkok</a> </li>
              <li> <a href="/hotel/best-hotel-in-dubai-dxb" >Hotel in Dubai</a> </li>
              
            </ul>
          </div>
          <div class="col-sm-3">
            <ul class="footer_link">
			<li> <a href="/hotel/best-hotel-in-hong-kong-hkg" >Hotel in Hong Kong</a> </li>
              <li> <a href="/hotel/best-hotel-in-london-lon" >Hotel in London</a> </li>
              
            </ul>
          </div>
          <div class="col-sm-3">
            <ul class="footer_link">
			<li> <a href="/hotel/best-hotel-in-madrid-mad" >Hotel in Madrid</a> </li>
              <li> <a href="/hotel/best-hotel-in-paris-par" >Hotel in Paris</a> </li>
             
             
            </ul>
          </div>
		  
		  <div class="col-sm-3">
            <ul class="footer_link">
			
              <li> <a href="/hotel/best-hotel-in-singapore-sin" >Hotel in Singapore</a> </li>
             
            </ul>
          </div>
          
        </div>
        
        
      </div>
    </div>
	
  </div>
  <div class="footer_bottom hidden-xs visible-sm visible-md visible-lg">
    <div class="container ">
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
          <li itemprop="name" ><a itemprop="url" class="fa fa-info-circle" href="/about" target="_blank">About Us</a></li>
        </ul>
      </div>
      <div class="col-sm-3">
        <ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="footer_link footer_bottom_link footerlast">
         
          <li><a class="fa fa-plus-square" href="https://www.travelopick.com/ccv/form">CCV Form</a></li>
          <li itemprop="name" ><a itemprop="url" class="fa fa-info-circle" href="/about" target="_blank">About Us</a></li>
          <li itemprop="name"><a itemprop="url" class="fa fa-globe" href="/contact-us">Contact Us</a></li>
		  <li itemprop="name"><a itemprop="url" class="fa-address-card" href="https://www.visahq.com/?a_aid=vaff11679" onClick="ga('send', 'event', { eventCategory: 'visa services', eventAction: 'click', eventLabel: 'visa'});" target="_blank">Visa Services</a></li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="clearfix"></div>
  <div class="container">
  <div class="col-xs-12 hotel-terms hidden-xs">
  <h6>Terms &amp; Conditions <sup>*</sup> </h6>
  <ul>
  <li>The quoted rates are subject to change without any prior notice.</li>
  <li>A promo code expires on the date indicated and is subject to change any time, without any prior notice.</li>
  <li>Please Note: Rates displayed are in USD and are average nightly rates excluding taxes and fees.</li>
  <li>Applying promo codes at the time of payment may enable you to make additional savings on convenience fee.</li>
  </ul>
  
  <ul>
  <li>Certain terms and conditions may apply on our Current Special Offers.</li>
  <li>Booking Window: Until - 31st Mar 2018 & Hotel Stay Window: Until 31st Oct 2018.</li>
  </ul>      
   
  <ul>
  <li>Holiday travel deal: $30 Off on the total booking amount.</li>
  <li>To avail this offer, the minimum total value of your hotel booking needs to be $300.</li>
  </ul>
  </div>
  
    <div class="col-xs-12 discalmer hidden-xs">
      <h6>Disclaimer</h6>
      <p>Travelopick is a self-reliant online travel agency and not associated with any third party. By accessing and using Travelopick.com website you agree that Travelopick is not liable for any direct or indirect loss, however arising, from the use of any of the information, offers, materials or links to other sites found on this website.<br/> If you have any queries you can call us at our Toll Free <c:out value='${tollFree}' /> or simply email us at <a href="mailto:helpdesk@Travelopick.com ">helpdesk@Travelopick.com </a></p>
    </div>
  </div>
  <div class="secureBox hidden-xs">
    <div class="container">
      <div class="col-xs-12 no-padding animateblock right">
        	<ul>
	        <li><img src="/resources/flight-result/images/trip-advisor-logo.png" alt="TripAdvisor"></li>
			<li><img src="/resources/images/travel-plan/asta.png" alt="American Society of Travel Agents"></li>
          <li class="hidden-xs"><img src="/resources/travelopick/images/travel-plan/true.png" alt="ccra"></li> 
		 
        </ul>
      </div>
    </div>
  </div>
  
  <div class="col-xs-12 copy_right">
    <div class="container"> &copy; 2016 -
      <script> document.write((new Date()).getFullYear()) </script>
      Fares Hub, LLC. All Rights Reserved. Use of this website signifies your agreement to the <a href="/terms-conditions">Terms of Use</a> </div>
  </div>
</footer>
     <!-- Footer Section End Here -->   



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




<script type="text/javascript" src="/resources/js/index_eng_min_1.4.js?29112017"></script>
 <%
    if (session.getAttribute("utm_source") == null) {
       
    } else {
    String utmSou=(String)session.getAttribute("utm_source");
    
   
%>

<%    
    
    } %>
