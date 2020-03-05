<!doctype html>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<html lang="en">
<head>
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Travelopick Gift Cards</title>
<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
<meta name="keywords" content="Travelopick gift cards, gift cards, gift card, Travelopick, Travelopick gift card" />
<meta name="description" content="Special gift cards for our special customers. Submit your preference and get your gift card on your registered email." />
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!-- css -->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.css">
<link href="/resources/common/css/gift-style.css?454544" rel="stylesheet">
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script>

<%session.setAttribute("tollFree", "1-800-359-5040"); %>
<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body>
<input type="hidden" value="${detailsData.bookingID}" id="bookingId" />

<!-- Main container -->
<div class="main">
  <!-- Header Box -->
  <jsp:include page="home_header.jsp"></jsp:include>
  <!-- Header Box -->
 
  <!-- Banner Box -->
  <div class="gift_strip">
  <div class="container relative">
  	
	<img src="/resources/images/gift-voucher.png" class="gift_circle" alt="" />
	
  </div>
  </div>
  <!-- Banner Box -->
 
  <!-- info Box -->
  <div class="gift_info">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
        	
			<div class="gift_head">
				
				<h2>Your Personal Details</h2>
				
				<p>We will send you a Thanksgiving Gift Card on your registered email ID.</p>
				
			</div>
			
			
        </div>
      </div>
	  
	  <div class="user_info">
	  
	  <div class="row">
	  	
		<div class="col-sm-4">
			
			<label class="label">Email</label>
			<input type="text" placeholder="danzel.thomas@gmail.com" value="${detailsData.customerInfo.email}" id="emailId" readonly/>
		</div>
		
		<div class="col-sm-4 paddingLR">
			
			<label class="label">Latest PNR</label>
			<input type="text" placeholder="589045" value="${detailsData.customerInfo.PNR}" readonly/>
			
			</div>
			
	  </div>
	  
	  <div class="row paading-top">
	  	
		<div class="col-sm-4">
			
			<label class="label">First Name</label>
			<input type="text" placeholder="Danzel" value="${detailsData.customerInfo.firstName}" readonly/>
			
		</div>
		<div class="col-sm-4 paddingLR">
			
			<label class="label">Last Name</label>
			<input type="text" placeholder="Thomas" value="${detailsData.customerInfo.lastName}" readonly/>
			
		</div>
		
		
	  </div>
	  
	  </div>
	  
    </div>
  </div>
  <!-- info Box -->
  
    <!-- itenary Box -->
  <div class="gift_itenaryBox" style="display:block;">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
        	
			<div class="gift_head">
				
				<h2>Pick One</h2>
				
				<p>Please choose the one you like.</p>
				<c:if test="${detailsData.amenityID.size() > 0}">
				<p class="selected">Previously Selected Card:</p>
				<c:forEach items="${detailsGift}" var="gift">
				<c:if test="${detailsData.amenityID.get(0) == gift.giftAmenityID}">
				<span><b>${gift.amenityGroup}</b> / ${gift.amenityName}</span>
				
				<input type="hidden" value="${gift.amenityGroup} - ${gift.amenityName}" id="prevSelect">
				</c:if>
				</c:forEach>
				</c:if>
			</div>
			
			
        </div>
      </div>
	  
	  <div class="gift_tab">
	  	
		<div id="exTab1">
		  <div class="row">
			<div class="col-sm-3">
			  <ul  class="tabs">
				<li class="active"> <a  href="#1a" data-toggle="tab"><span class="lifestyle icon"></span> Lifestyle <span class="fa fa-long-arrow-right"></span></a> </li>
				<li><a href="#2a" data-toggle="tab"><span class="food icon"></span>Food <span class="fa fa-long-arrow-right"></span></a> </li>
				<li><a href="#3a" data-toggle="tab"><span class="travel icon"></span>Travel <span class="fa fa-long-arrow-right"></span></a> </li>
				
			  </ul>
			   
			  <div class="selected_iteam">
			   <p class="selected" style="display:none;">Selected Card:</p>
			  <strong id="categoryValue"></strong><span id="subCategoryValue"></span>
			  </div>
			  
			</div>
			<div class="col-sm-9">
			  <div class="tab-content clearfix">
				<div class="tab-pane active" id="1a">
				  
				  <div class="tab_detail">
				  	
					<div class="head">Select Lifestyle <span class="fa fa-caret-down"></span> </div>
					
						<ul class="list">
							<c:forEach items="${detailsGift}" var="gift">
							<c:if test="${gift.amenityGroup == 'Lifestyle'}">
							<li value="${gift.giftAmenityID}" data-category="${gift.amenityGroup}">${gift.amenityName}</li>
							</c:if>
							</c:forEach>
							
						</ul>
					
				  </div>
				  
				  
				</div>
				<div class="tab-pane" id="2a">
				  <div class="tab_detail">
				  	
					<div class="head">Select Food <span class="fa fa-caret-down"></span> </div>
					
						<ul class="list">
							
							<c:forEach items="${detailsGift}" var="gift">
							<c:if test="${gift.amenityGroup == 'FOOD'}">
							<li value="${gift.giftAmenityID}" data-category="${gift.amenityGroup}">${gift.amenityName}</li>
							</c:if>
							</c:forEach>
							
							
						</ul>
					
				  </div>
				</div>
				<div class="tab-pane" id="3a">
				  <div class="tab_detail">
				  	
					<div class="head">Select Travel <span class="fa fa-caret-down"></span> </div>
					
						<ul class="list">
							
							<c:forEach items="${detailsGift}" var="gift">
							<c:if test="${gift.amenityGroup == 'Travel'}">
							<li value="${gift.giftAmenityID}" data-category="${gift.amenityGroup}">${gift.amenityName}</li>
							</c:if>
							</c:forEach>
							
							
						</ul>
					
				  </div>
				</div>
				
			  </div>
			</div>
		  </div>
		</div>
	  
	  </div>
	  
	  <div class="row" style="display:none;" id="errorDiv">
	  	<p class="text-red text-right col-sm-12">Please select one option</p>
	  </div>
	  
	  
	  <div class="row">
	  	
		<div class="col-sm-12">
			
			<input class="submit_btn" id="submit_btn" type="submit" value="Submit" />
			<input class="submit_btn" id="update_btn" type="submit" value="Update" />
			
			<p class="text"> Submit your preference on or before 21st November 2017 and get your gift card on your registered e-mail ID. You will receive the gift card on or before 28th November 2017. </p>
			
		</div>
		
		
	  </div>
	  
	  
    </div>
  </div>
  <!-- itenary Box -->
  
 
  
  <!-- Thanks -- >
  
    <!-- Thanks start Box -->
  <div class="thanksBox" id="insert" style="display:none;">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
        	
			<img src="/resources/images/gift-card.png" />
			<h3>Great pick!</h3>
			<p>We appreciate your choice in finer things.<br/>
Thank you for choosing the gift card. You'll receive your gift card on or before 28th November 2017.</p>
			
			<a href="/">EXPLORE NEW TRAVEL DEALS</a>
			
			
        </div>
      </div>
	  
	  
	  
    </div>
  </div>
  <!-- Thanks end  Box -->
  
    <!-- Thanks start Box -->
  <div class="thanksBox" id="update" style="display:none;">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
        	
			<img src="/resources/images/updated-gift.png" />
			<h3>Awesome Choice!</h3>
			<p>Thank you for updating the gift card. <br/>We hope you enjoy the experience. You'll receive your gift card on or before 28th November 2017.</p>
			
			<a href="/">EXPLORE NEW TRAVEL DEALS</a>
			
			
        </div>
      </div>
	  
	  
	  
    </div>
  </div>
  <!-- Thanks end  Box -->
  
  
   <!-- popup start Box -->
   <c:if test="${detailsData.amenityID.size() > 0}">
  <div class="gift_popup_outer">
  
  	<div class="gift_popup">
		
		<img src="/resources/images/card2.png" alt="" />
		
		<h3>Change of mind?</h3>
		
		<p>Do you want to update your gift card preference?</p>
		
		<a href="javascript:void(0);" id="yes_btn" class="button active">Yes</a>
		<a href="javascript:void(0);" id="no_btn" class="button">No</a>
		
	</div>
	
  
  </div>
  </c:if>
  <!-- popup end  Box -->
  
</div>
<!-- main container -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
<script>
	$(document).ready(function(){
	var selectedOpt = 0;
	var selectedValue = "";
	var prevSelectedValue = $("#prevSelect").val();
	
	$('#yes_btn').click(function(){
	$('#update_btn').show();
	$('#submit_btn').hide();
	$('.gift_popup_outer').hide();
	});
	
	$('#no_btn').click(function(){
		$('.gift_popup_outer').hide();
		$("#insert").show();
		$(".gift_itenaryBox").hide();
		$(".gift_info").hide();
	});
	
	$('.gift_tab .tab_detail ul.list li').click(function(){
	$("#errorDiv").hide();
	$('.gift_tab .tab_detail ul.list li').removeClass('active');
	$(this).addClass('active');
	selectedOpt = $(this).val();
	$(".selected").show();
	$("#categoryValue").text($(this).data("category")+" / ");
	$("#subCategoryValue").text($(this).text());
	selectedValue = $(this).data("category")+" - "+$(this).text();
});

$('#update_btn').click(function(){

	if(selectedOpt != 0){
	$("#errorDiv").hide();
	$("#update").show();
	$(".gift_itenaryBox").hide();
	$(".gift_info").hide();
	$(window).scrollTop($('#update').offset().top);
var bookingId = $("#bookingId").val();
var emailId = $("#emailId").val();
$.post( "/gift-card-update/"+selectedOpt+"/"+bookingId+"/"+emailId+"/"+selectedValue+"/"+prevSelectedValue, function(data) {

	});

	}
	else{
	$("#errorDiv").show();
	}

	});
	
	$('#submit_btn').click(function(){

	if(selectedOpt != 0){
	$("#errorDiv").hide();
	$("#insert").show();
	$(".gift_itenaryBox").hide();
	$(".gift_info").hide();
	$(window).scrollTop($('#insert').offset().top);
var bookingId = $("#bookingId").val();
var emailId = $("#emailId").val();
$.post( "/gift-card-submit/"+selectedOpt+"/"+bookingId+"/"+emailId+"/"+selectedValue, function(data) {

	});

	}
	else{
	$("#errorDiv").show();
	}

	});
	/*
$('#submit_btn,#update_btn').click(function(){

if(selectedOpt != 0){
$("#errorDiv").hide();
$(".thanksBox").show();
$(".gift_itenaryBox").hide();
$(".gift_info").hide();
$(window).scrollTop($('.thanksBox').offset().top);
var bookingId = $("#bookingId").val();
$.post( "/gift-card-submit/"+selectedOpt+"/"+bookingId, function(data) {
 
});

}
else{
$("#errorDiv").show();
}

});*/

	});
	
	(function($){
			$(window).on("load",function(){
				
				$(".gift_tab .tab_detail ul.list").mCustomScrollbar({
					setHeight:240,
					theme:"dark-3"
				});
				
			});
		})(jQuery);
		
</script>


<!-- Footer Box -->
<jsp:include page="home_footer.jsp"></jsp:include>
<!-- Footer Box -->
</body>
</html>
