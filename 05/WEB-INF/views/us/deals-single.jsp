<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 

 


 <c:if test='${not empty websiteFare.websiteFare}'>

	<table class="table w3-table-all mb0 text-left table-hover">
  <thead>
    <tr>
      <th class="hidden-xs">Origin </th>
       <th class="visible-xs">Flights Deals </th>
      <th class="hidden-xs">Destinations</th>
      <th class="hidden-xs">Travel Dates</th>
      <th class="text-right"> Fares*</th>
    </tr>
  </thead>
  <tbody>
  
     <c:forEach items="${websiteFare.websiteFare}" var="searchs" varStatus="ses"  end="7">

     <tr data-org-name="${searchs.fromCity.cityName}" data-dest-name="${searchs.toCity.cityName}" class="deal-list" >
      <c:set var="departDate" value="${searchs.depDate}" />
     <fmt:parseDate value="${departDate}" var="parsedCurrentDate" pattern="dd MMM yyyy" />
     
      <c:set var="returnDate" value="${searchs.retDate}" />
      <fmt:parseDate value="${returnDate}" var="parsedReturnDate" pattern="dd MMM yyyy" />
      <td>${searchs.fromCity.cityName}<span class="visible-xs">to ${searchs.toCity.cityName}</span><span class="visible-xs"> <fmt:formatDate pattern="MMM dd" value="${parsedCurrentDate}" />-<br>
      <fmt:formatDate pattern="MMM dd, yyyy" value="${parsedReturnDate}" /></span></td>
      <td class="hidden-xs">${searchs.toCity.cityName}</td>
      <td class="hidden-xs"><fmt:formatDate pattern="MMM dd" value="${parsedCurrentDate}" /> - <fmt:formatDate pattern="MMM dd" value="${parsedReturnDate}" /></td>
      <c:set var="dealsfare" value="${fn:split(searchs.totalFare,'.')}" />		
	  <td class="text-right deal-fare">$ ${dealsfare[0]}<sup><b>.</b>${dealsfare[1]}</sup></td>
      </tr>
    
   
    </c:forEach>
	   
  </tbody>
</table>
</c:if>				
			
				 
			

