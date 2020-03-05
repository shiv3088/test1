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
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!-- start travel css -->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/event-style.css" rel="stylesheet">
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script>
</head>
<body>
<div class="main">
  <div class="baggage_bg">
    <div class="container">
    
      <div>
        <div class="row">
          <div class="col-xs-12">
            <div class="text-box">
              <h3 class="blueHead2">Baggage Fees</h1>
              <!-- <h2 class="blackhead">US Domestic Baggage Fees</h2> -->
              <div class="data table-responsive">
                <table class="large-only">
                  <tbody>
                    <tr>
                      <th>Airline </th>
                      <th>Baggage Details</th> 
                    </tr>
                    
                    <c:forEach items="${baggage}" var="baggages" varStatus="se">
                    
                      <tr>
                      <td><img src="/resources/images/airline/${baggages.airlineCode}.gif" alt="${baggages.airlineCode}"> <a href="${baggages.webLink}" rel="nofollow"  target="_blank">${baggages.airlineName}  </a> </td>
                      <td><a href="${baggages.webLink}" rel="nofollow"  target="_blank">View Policy</a></td> 
                      </tr>
                    </c:forEach>
					
					 <c:forEach items="${intbaggage}" var="baggages" varStatus="se">
                    
                      <tr>
                      <td><img src="/resources/images/airline/${baggages.airlineCode}.gif" alt="${baggages.airlineCode}"> <a href="${baggages.webLink}" rel="nofollow"  target="_blank">${baggages.airlineName}  </a> </td>
                      <td><a href="${baggages.webLink}" rel="nofollow"  target="_blank">View Policy</a></td> 
                      </tr>
                    </c:forEach>
					
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    
       
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
         <p class="note" style="font-size:12px;"> <span>Note:-</span> If you cannot find your preferred airline, please feel free to contact us at our toll-free 24X7 +1-888-737-8675.</p>
			<p class="note" style="font-size:12px;"> <span>*</span> If your itinerary includes more than one airlines, then please double check baggage allowances for the individual airlines. They may differ depending on the airlines you are flying with.</p>
    </div>
  </div>
</div>

</body>
</html>

