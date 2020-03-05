<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<div class="container mb20">
        
        <div class="row row-wrap">
             <div style="margin-bottom:15px;" class="container">
			
			<div class="row">
				<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" >
					<div>
					 <div class="dyntncdate mar-lft--rt_3pr">
   
      <h1 class="blueHead2">${cityName} Flight Deals</h1>
      
    <p class="grtxt smtxt">${cityName} now offering exclusive cheap airfares on flight reservations for limited time! This Exciting flight sale is not for long time, so hurry up & book flight tickets at unbeatable price.    </p>
  </div>
  <div id="dynDeals">
    <div class="deals">
       <table class="table table-hover">
  <thead>
    <tr>
      <th>From</th>
      <th class="hidden-xs">Depart</th>
      <th class="hidden-xs">Return</th>
      <th class="text-right"> Fares*</th>
    </tr>
  </thead>

 
                  
 <c:forEach items="${websiteFare.websiteFare}" var="searchs" varStatus="ses" >
  <tbody>
     <tr data-org-name="Jacksonville" data-dest-name="Fort Lauderdale " class="deal-list">
      <c:set var="departDate" value="${searchs.depDate}" />
     <fmt:parseDate value="${departDate}" var="parsedCurrentDate" pattern="dd MMM yyyy" />
     
      <c:set var="returnDate" value="${searchs.retDate}" />
     <fmt:parseDate value="${returnDate}" var="parsedReturnDate" pattern="dd MMM yyyy" />
     
      <td>${searchs.fromCity.cityName}<span class="visible-xs"><fmt:formatDate pattern="MMM dd, yyyy" value="${parsedCurrentDate}" />   - <br>
        <fmt:formatDate pattern="MMM dd, yyyy" value="${parsedReturnDate}" /></span></td>
     
      <td class="hidden-xs"><fmt:formatDate pattern="MMM dd, yyyy" value="${parsedCurrentDate}" /></td>
      <td class="hidden-xs"><fmt:formatDate pattern="MMM dd, yyyy" value="${parsedReturnDate}" /></td>
      <td class="text-right deal-fare">${searchs.totalFare}</td>
    </tr>
     </tbody>
    </c:forEach>
  
   
   
 
 
</table>

    </div>
       </div>
					</div>
  <div style=" color:red;">*All fares are quoted in USD. These fares are based on historical data. Might differ and cannot be guaranteed at the time of booking.</div>
				</div>
				
				 <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 hidden-sm hidden-xs">
				 			<div style="padding:8px 0px 0 0;">
      
 <img src="/resources/images/add.jpg" width="100%">

</div>
				 </div> 	
				 
			</div>
			</div>
		</div>
		
	</div>

