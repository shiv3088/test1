<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<script>
  function operReadmore(id){
    $("#tp_readmore").html($("#tptext"+id).val());
    $(".home-full-review").slideDown(200);
  };
  function closeReadmore(id){
    $(".home-full-review").slideUp(50);
  };
  
  function showModal(id, id1) {
		$('html,body').animate({
				scrollTop: $("#" + id).offset().top - 50
			},
			'slow');
	}
</script> 
<c:if test="${fn:length(trustPilotResponse.trustPilotReviews) gt 0}">
<section id="trustpilot-reviews" class="trustpilot-wraper">
	<div class="trustpilot-content">
		<div class="container">
			<div class="row">
				<div class="col-sm-6">
					<div class="title">
						<div class="tp-rating bigStar">
							<img src="/resources/images/trustpilot/stars-${trustPilotResponse.trustPilotStars}.svg"> <span
								class="rating">${trustPilotResponse.reviewsRatingDesc}</span>
						</div>
						<h4>
							<span class="trust-score">${trustPilotResponse.trustScore}/5</span> Reviews (<a
								href="https://www.trustpilot.com/review/travelopick.com" target="_blank" style="color:#00b67a;">${trustPilotResponse.totalReviews}</a>)
						</h4>
						<p>What our customers are saying about us</p>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="total-review">
						<img src="/resources/images/tp-logo.png?v1" />
					</div>
				</div>
			</div>
			<div class="slider">
			    <c:forEach items="${trustPilotResponse.trustPilotReviews}" var="trust" varStatus="loop" begin="0">
				<div class="review-block">
					<div class="rating-strip">
						<div class="time">${trust.reviewJustBefore}</div>
						<span class="first-letter">${fn:substring(trust.customerName,0,1)}</span>
						<div class="tp-rating position">
							<img src="/resources/images/trustpilot/stars-${trust.stars}.svg" />
						</div>
					</div>
					<div class="clearfix"></div>
					<div class="name">${trust.customerName}</div>
					<input type="hidden" id="tptext${trust.reviewsID}" value="<c:out value="${trust.reviewsText}" escapeXml="true"/>"/>
					<p class="txt">${fn:substring(trust.reviewsText,0,80)}  <c:if test="${fn:length(trust.reviewsText) > 80}">...<a class="read-more" id="${trust.reviewsID}" onmouseover="operReadmore(this.id)" onmouseleave="closeReadmore(this.id)"> Read more</a></c:if></p>
				</div>
				</c:forEach>
			</div>
			<span class="home-full-review" id="tp_readmore" style="display: none;"></span>
		</div>
	</div>
</section>
</c:if>
<script type="text/javascript"
	src="/resources/flight-result/js/slick_carousel.js?03102019"></script>
<link href="/resources/flight-result/css/slick-theme.css"
	rel="stylesheet">
<script>
	$('.slider').slick({
		infinite : true,
		slidesToShow : 3,
		slidesToScroll : 1,
		arrows : true,
		autoplay : true,
		autoplaySpeed : 3000,
		responsive : [ {
			breakpoint : 980,
			settings : {
				slidesToShow : 2,
				slidesToScroll : 1
			}
		}, {
			breakpoint : 767,
			settings : {
				slidesToShow : 1,
				slidesToScroll : 1,
				arrows : false
			}
		}
		]
	});
</script>
