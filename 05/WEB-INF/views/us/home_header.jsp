<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page import="com.cff.controller.FareAlertController" %>

 <%
    String utm_source = request.getParameter("utm_source");
    if (request.getParameter("utm_source") != null) {
        String utm_medium= request.getParameter("utm_medium");
        session.setAttribute("UserNameTest", utm_source);
        session.setAttribute("utm_source", utm_source);
        session.setAttribute("utm_medium", utm_medium);
        }
 %>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2MLW2R"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) --> 


	
<div class="cookies-strip hidden-xs" style="display:none;">Our site uses cookies so we can provide you with the best possible web experience. <a href="/us/privacy-policy?cookies" id="cookies" target="_blank">Click here</a> to learn more about how we use cookies.<span class="accept">Accept & Continue</span></div>   

<link href="/resources/us/css/common-style_4.0.css?v333" rel="stylesheet">
<script src="/resources/js/local-cache.js?19102019"></script> 
<link href="/resources/style/standAlone/css/style.css?19102019" rel="stylesheet" />
<link href="/resources/new-css/country-dropdown.css?v1244" rel="stylesheet" />

<header class="headerBox" >


<div class="cookies-strip hidden-lg hidden-md hidden-sm" style="display:none;"><p>This website uses cookies to ensure you get the best experience. <a href="/us/privacy-policy?cookies" id="cookies" target="_blank">Learn More</a></p> <span class="accept">Accept</span></div> 

 <c:set var="tollFree" value="${data.tfnNo}" scope="session" />

   <div class="col-xs-12 call_xs_div text-right  hidden">
<a itemprop="url" href="/contact" style="color:#fff; padding-right: 15px;"> Support </a>

    <!-- <p class="col-xs-6 text-white no-margin">Toll Free AT (24x7)</p>-->
    <!-- <div class="col-xs-6 text-right " > <a href="tel:<c:out value='${tollFree}' />" onClick="ga('send', 'event', 'Phone Call', 'Click to Call', '<c:out value='${tollFree}' />');"> <i class="fa fa-phone"></i> <c:out value='${tollFree}' /> </a> </div> -->
   <!-- <div class="col-xs-6 text-right " > <a href="tel:<c:out value='${data.tfnNo}' />" onClick="ga('send', 'event', 'Phone Call', 'Click to Call', '<c:out value='${data.tfnNo}' />');"> <i class="fa fa-phone"></i> <c:out value='${data.tfnNo}' /> </a> </div>-->
  </div>
   <div class="container">
    <div class="row">
	
      <!-- start of navigation_box -->
      <nav class="navbar main_menu">
        <!-- start navigattion -->
        <div class="navbar-header">
		<div class="select-language mobile-language visible-xs">
		 <a href="JavaScript:Void(0);" onclick="myFunction2()" class="dropbtn"> 
				<img src="/resources/images/united-flag.png">  United States <span class="fa fa-angle-down"></span>
			 </a>
			  <ul class=" dropdown-content" id="myDropdown2">
				<i class="fa fa-sort-up" aria-hidden="true"></i>
				<li><a href="/" class="change" data-attr="HongKong"><img src="/resources/images/uk-flag.png">  United Kingdom - English</a></li>
				<li><a href="/us" class="change" data-attr="USA"><img src="/resources/images/united-flag.png">  United States - English</a></li>
				
			  </ul>
			</div> 
			
          <button type="button" class="navbar-toggle border-white" style="border:0 !important;   " data-toggle="collapse" data-target="#myNavbar"> <span class="icon-bar bg-white"></span> <span class="icon-bar bg-white"></span> <span class="icon-bar bg-white"></span> </button>
          <a class="navbar-brand padding-sm-square" href="/us"> <img src="/resources/images/logo.png" class="center-block" alt="Travelopick"> </a> </div>
        <div class="collapse navbar-collapse xs-no-padding" id="myNavbar">
          <ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="nav navbar-nav navbar-right top_menu">
           
        <li class="select-language hidden-xs">
			<a href="JavaScript:Void(0);" onclick="myFunction()" class="dropbtn"> 
				<img src="/resources/images/united-flag.png">  United States <span class="fa fa-angle-down"></span>
			 </a>
			  <ul class=" dropdown-content" id="myDropdown">
				<i class="fa fa-sort-up" aria-hidden="true"></i>
				<li><a href="/" class="change" data-attr="HongKong"><img src="/resources/images/uk-flag.png">  United Kingdom - English</a></li>
				<li><a href="/us" class="change" data-attr="USA"><img src="/resources/images/united-flag.png">  United States - English</a></li>
				
			  </ul>
			  
			  <script> 
					function myFunction() {
					  document.getElementById("myDropdown").classList.toggle("show"); 
					}  											
					function myFunction2() {
					  document.getElementById("myDropdown2").classList.toggle("show"); 
					}  
					// Close the dropdown if the user clicks outside of it
					window.onclick = function(event) {
					  if (!event.target.matches('.dropbtn')) {
						var dropdowns = document.getElementsByClassName("dropdown-content"); 
						var i;
						for (i = 0; i < dropdowns.length; i++) {
						  var openDropdown = dropdowns[i];
						  if (openDropdown.classList.contains('show')) {
							openDropdown.classList.remove('show');
						  }
						}
					  }
					}
				</script> 
			</li>
			
            <li itemprop="name"> <a itemprop="url" href="/us"> Flights  </a> </li>
			<li itemprop="name"> <a itemprop="url" href="/us/contact"> Support </a> </li>
			<c:choose>
                    <c:when test="${fn:toLowerCase(utm_source) == 'google'}">
					<li class=""> <span class="help_no ">TOLL FREE (24x7)</span>
			                <img src="/resources/images/hotels/tel-icon.png" style="margin-top: 10px; margin-right: 10px; float:left;">
			                <a style="float:left;" href="tel:+1-833-781-5806"><span class="toll-free">+1-833-781-5806</span></a> 
			            </li>
                     </c:when>
                     <c:when test="${fn:toLowerCase(utm_source) == 'bing' || fn:toLowerCase(utm_source) == 'bingmobile' }">
                       <li class=""> <span class="help_no ">TOLL FREE (24x7)</span>
                            <img src="/resources/images/hotels/tel-icon.png" style="margin-top: 10px; margin-right: 10px; float:left;">
                            <a style="float:left;" href="tel:+1-844-307-3890"><span class="toll-free">+1-844-307-3890</span></a> 
                        </li>
                     </c:when>
                     <c:otherwise>
                     </c:otherwise>
              </c:choose>
		
            <li class="hidden-xs hidden "> <span class="help_no ">TOLL FREE (24x7)</span>
				<img src="/resources/images/hotels/tel-icon.png" style="margin-top: 10px; margin-right: 10px; float:left;">
				<a style="float:left;" href="tel:+1-888-737-8675"><span class="toll-free">+1-888-737-8675</span></a> 
			</li>
          </ul>
        </div>
      </nav>
      <!-- end navigattion -->
    </div>
  </div>
</header>


<div class="page-overlay"></div>
<!-- start loading model -->
<div class="preloader" id="loadingdiv" style="display: none;"> <img src="/resources/user/img/loading_1.gif" alt="loading"/> </div>

<!-- popup engine -->
			   
   
		
		<!--popup engine -->



<!--R Script start use for global js and static page about etc-->
<script type="text/javascript">
 $(document).ready(function(){
 	 // CLEARABLE INPUT
	function tog(v){return v?'addClass':'removeClass';} 
	$(document).on('input', '.input_cont', function(){
		$(this)[tog(this.value)]('x');
	}).on('mousemove', '.x', function( e ){
		$(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');
	}).on('touchstart click', '.onX', function( ev ){
		ev.preventDefault();
		$(this).removeClass('x onX').val('').change();
	});
//

$('.mobile_menu').click(function(){
$('.about-menuBox ul').toggleClass('open')
$(this).toggleClass('menu-close')
$('.main').toggleClass('push')
});

 
 });

 
  </script>
  
	    <script type="text/javascript">
 
		 /*function smallEnginePosition(){
			 $('.eng-open,.deal_block').click(function(event){
					$('.small_engin').show();
					$('.call-div').hide();
						$('.small_engin').css( {position:"absolute", top:event.pageY, left:event.pageX-250});
						$("html, body").animate({ scrollTop:event.pageY-80 });
				});
		 } */
		 
		 //mobile itenery fixed 
 $(window).scroll(function() {
 if ($(document).scrollTop() > 35) {
 $('.headerBox').addClass('shrink');
 }
 else {
 $('.headerBox').removeClass('shrink'); }
 });
 

		 
		 
	 $(document).ready(function(){
			
			$(".cupon-close").on('click', function (){
				$('.ppc-coupon-bg').fadeOut();
				$('.header_main').addClass('height')
				$('.headerBox').addClass('small_header')
			})
			
			$(".deal_block, .eng-open").on('click', function (){
				var deal = $(this).offset();
				var outerWidth = $(this).width();
				var innerWidth = $(".small_engin").width();
				
									
				  
			if ($(window).width() < 767) {
  			var small = $(".small_engin").css({position:"absolute", top:deal.top + 65, left:deal.left + (outerWidth - innerWidth)}); //left:deal.left + 250
				$(".small_engin").show();
				}
				else {
				   var small = $(".small_engin").css({position:"absolute", top:deal.top + 35, left:deal.left + (outerWidth - innerWidth)}); //left:deal.left + 250
								$(".small_engin").show();
				}
			
			
			});
			 $(".eng-close").on('click', function (event){
			 event.stopPropagation();
				$(this).parent().hide();
			}) 
			
				//Close function
				/* $('.eng-close').click(function(event){
					event.stopPropagation();
					$(this).parent().hide();
					//$('.small_engin').hide();
					//$('.call-div').hide();
				}); */
				
				////call  function	
				$('.deal_block.call-deal').click(function(event){
				event.stopPropagation();
				$('.small_engin').hide();
				if ($(window).width() < 767) {
   					$('.call-div').hide();
   					
   					
					}
				else {
				   $(this).find( '.call-div' ).show();
					$('html, body').stop();
					}
				
				});
				
	 }); 
	
		
  
	</script>
<script>
 var key = true;
var windowIMA;
function leave() {
if (key) {


        var w = 550;
        var h = 550;
        var left = Number((screen.width/2)-(w/2));
        var tops = Number((screen.height/2)-(h/2));



windowIMA=window.open("/feedback", "_blank", "width=550, height=550,scrollbars=yes, top="+tops+", left="+left+"");
}
}

$(document).on("click","a",function() {
      key=false; 
 });
 if (key) {
    //window.addEventListener('beforeunload', leave, true);
} 

/* checkFirstVisit();
function checkFirstVisit() {
  if(document.cookie.indexOf('mycookie')==-1) {
    document.cookie = 'mycookie=1';
  }
  else {
     
   windowIMA.close();
  }
} */
  
	</script>
	
	 <script>
	document.documentElement.classList.add('cooke');
      const showMsg = localStorage.getItem('showMsg');
      if(showMsg !== 'false'){
        $('.cookies-strip').show();
      }
      $('.accept').on('click', function(){
        $('.cookies-strip').fadeOut('slow');
        localStorage.setItem('showMsg', 'false');
      });
    </script>
