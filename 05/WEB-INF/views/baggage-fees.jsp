<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!doctype html>
<html lang="en">
<head>
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Baggage Fees - Domestic & International Airlines Baggage Fees</title>
<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
<meta name="description" content="Compare all domestic & international airlines at once. Search a best deal on the flight. We list, airline by airline, fees for checked bags, frequent flyer."/>
<meta name="keywords" content="Baggage Fees, Domestic Airlines Baggage Fees, International Airlines Baggage Fees"/>
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!-- start travel css -->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/event-style.css" rel="stylesheet">
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script>
<style>
.blog-responsive { width: 48%;
    float: left;
    border-bottom: 1px dashed #ccc;
    min-height: 50px;
    margin-bottom: 20px;
    margin-right: 20px; }
	
	.blog-responsive .col-xs-5 { text-align:center; }

@media only screen and (max-width: 1104px) {
	.blog-responsive {
		width:45%; 
	}
}
	
@media only screen and (max-width: 767px) {
	.blog-responsive {
		width:100%;
		float:none;
		margin-right:0;
	}
}
	
.blog-head {
	background: #4561db;
    color: #fff;
    padding: 13px;
    height: 50px;
}	
</style>

<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body>
<!-- Header Section Start -->
<jsp:include page="home_header.jsp"></jsp:include>
<!-- Header Section End -->
<!-- Main Section -->
<div class="main">
  <div class="baggage_bg">
    <div class="container">
    <c:if test="${not empty baggage}">
      <div class="margin-tb">
        <div class="row">
          <div class="col-xs-12">
            <div class="text-box">
              <h1 class="blueHead2">Baggage Fees</h1>
              <h2 class="blackhead">US Domestic Baggage Fees</h2>
              <div class="data table-responsive">
					<div class="blog-responsive blog-head">
						<div class="row">
						  <div class="col-xs-7">Airline </div>
						  <div class="col-xs-5">Baggage Details</div> 
						</div>
					</div>
					<div class="blog-responsive blog-head hidden-xs">
						<div class="row">
						  <div class="col-xs-7">Airline </div>
						  <div class="col-xs-5">Baggage Details</div> 
						</div>
					</div>
					
                    
                    <c:forEach items="${baggage}" var="baggages" varStatus="se">
                    <div class="blog-responsive">
						<div class="row">
						  <div class="col-xs-7"><img src="/resources/images/airline/${fn:toLowerCase(baggages.airlineCode)}.gif" alt="${baggages.airlineCode}"> <span>${baggages.airlineName}</span> </div>
						  <div class="col-xs-5"><a href="${baggages.webLink}" rel="nofollow" target="_blank">View Policy</a></div> 
						</div>
					</div>
					
                       
                    </c:forEach>
                    
              </div>
            </div>
          </div>
        </div>
      </div>
      </c:if>
      
    
       <c:if test="${not empty intbaggage}">
      <div class="margin-md-bottom">
        <div class="row">
          <div class="col-xs-12">
            <div class="text-box">
              <h3 class="blackhead">International Airlines Baggage Fees</h3>
              <div class="data table-responsive">
                
                    
					<div class="blog-responsive blog-head">
						<div class="row">
						  <div class="col-xs-7">Airline </div>
						  <div class="col-xs-5">Baggage Details</div> 
						</div>
					</div>
					<div class="blog-responsive blog-head hidden-xs">
						<div class="row">
						  <div class="col-xs-7">Airline </div>
						  <div class="col-xs-5">Baggage Details</div> 
						</div>
					</div>
					
                      <c:forEach items="${intbaggage}" var="baggages" varStatus="se">
                    
					<div class="blog-responsive">
						<div class="row">
						  <div class="col-xs-7"><img src="/resources/images/airline/${fn:toLowerCase(baggages.airlineCode)}.gif" alt="${baggages.airlineCode}"> <span>${baggages.airlineName}</span></div>
						  <div class="col-xs-5"><a href="${baggages.webLink}" rel="nofollow"  target="_blank">View Policy</a></div> 
						</div>
					</div>
					 
                    </c:forEach>
                   
              </div>
			  
            </div>
          </div>
        </div>
      </div>
     </c:if>
        <c:if test="${(empty intbaggage) and (empty baggage)}">
         <div class="margin-tb">
        <div class="row">
          <div class="col-xs-12">
            <div class="text-box">
              <div class="data table-responsive">
                <table class="large-only">
                  <tbody>
                    <tr>
                  <th> No preferred airline found </th>
                    </tr>   </tbody>
                </table>
              </div>
			  
            </div>
          </div>
        </div>
      </div>
      
       </c:if> 
         <!-- <p class="note"> <span>Note:-</span> If you cannot find your preferred airline, please feel free to contact us at our toll-free 24X7 +44-800-972-3035.</p> -->
         <p class="note"> <span>Note:-</span> If you cannot find your preferred airline, please feel free to contact us at our toll-free 24X7 ${data.tfnNo}.</p>
		 <p class="note"> <span>*</span> If your itinerary includes more than one flights, then please double check baggage allowances for the individual flights. They may differ depending on the airlines you are flying with.</p>
    </div>
  </div>
</div>
<!--Main-->
<!-- Footer Section Start -->
<jsp:include page="home_footer.jsp"></jsp:include>
<!-- Footer Section End -->
</body>
</html>
