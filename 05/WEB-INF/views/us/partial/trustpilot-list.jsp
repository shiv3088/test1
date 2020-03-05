<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
 

<script>
  function operReadmore(id){
     $("#tp_readmore").html($("#tptext"+id).val());
    $(".full-review").slideDown(200);
  };
  function closeReadmore(id){
    $(".full-review").slideUp(50);
  };
</script>

<c:if test="${fn:length(trustPilotResponse.trustPilotReviews) gt 0}">
<section class="trustpilot-wraper">
	<div class="trustpilot-content">
		<div class="row">
			<div class="col-xs-5 col-sm-4  col-lg-3 pr0">
				<div class="title">
					<h4>${trustPilotResponse.reviewsRatingDesc}</h4>
					<div class="tp-rating bigStar five">
						<img src="/resources/images/trustpilot/stars-${trustPilotResponse.trustPilotStars}.svg">
					</div>
					<p>
						<span class="trust-score">${trustPilotResponse.trustScore}/5</span> <a
							href="https://www.trustpilot.com/review/travelopick.com" target="_blank" style="color:#00b67a;"><b>${trustPilotResponse.totalReviews}</b></a> Reviews
					</p>
				</div>
			</div>
			<div class="col-xs-7 col-sm-8 col-lg-9">
				<div class="slider">
				    <c:forEach items="${trustPilotResponse.trustPilotReviews}" var="trust" varStatus="loop" begin="0">
					<div class="review-block">
						<div class="rating-strip">
							<div class="time">${trust.reviewJustBefore}</div>
							<span class="first-letter">${fn:substring(trust.customerName,0,1)}</span>
							<div class="tp-rating position ">
								<img src="/resources/images/trustpilot/stars-${trust.stars}.svg" style="height:20px;" />
							</div>
						</div>
						<div class="clearfix"></div>
						<div class="name">${trust.customerName}</div>
						<input type="hidden" id="tptext${trust.reviewsID}" value="<c:out value="${trust.reviewsText}" escapeXml="true"/>"/>
						<p class="txt">${fn:substring(trust.reviewsText,0,70)}<c:if test="${fn:length(trust.reviewsText) > 70}">...<a class="read-more" id="${trust.reviewsID}" onmouseover="operReadmore(this.id)" onmouseleave="closeReadmore(this.id)" > Read more</a></c:if></p>
					</div>
					</c:forEach>
					
				</div>
				<span class="full-review" style="display: none;" id="tp_readmore"></span>
			</div>
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
		arrows : false,
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
				slidesToScroll : 1
			}
		}]
	});
</script>