<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<div class="main">
  <div class="baggage_bg">
    <div class="container">
    <%-- <c:if test="${not empty baggage}"> --%>
      <div class="margin-tb">
        <div class="row">
          <div class="col-xs-12">
            <div class="text-box1 text_box_mobile">
             
              <!-- <h2 class="blackhead">US Domestic Baggage Fees</h2> -->
              <div class="data">
                <table class="large-only">
                  <tbody>
                    <tr>
                      <th>Airline </th>
                      <th>Policy</th>
                     
                    </tr>
                    
                    <c:forEach items="${baggage}" var="baggages" varStatus="se">
                    
                      <tr>
                      <td><img src="/resources/images/airline/${baggages.airlineCode}.gif" alt="${baggages.airlineCode}"> <a href="${baggages.webLink}" rel="nofollow"  target="_blank">${baggages.airlineName} &nbsp;</a> </td>
                      <td><a href="${baggages.webLink}" rel="nofollow"  target="_blank">View</a></td>
                     
                      </tr>
                    </c:forEach>
                
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
     <%--  </c:if> --%>
      
    
       <%-- <c:if test="${not empty intbaggage}">
      <div class="margin-md-bottom">
        <div class="row">
          <div class="col-xs-12">
            <div class="text-box1">
              <!-- <h3 class="blackhead">International Airlines Baggage Fees</h3> -->
              <div class="data">
                <table class="large-only">
                  <tbody>
                    <tr>
                      <th>Airline </th>
                      <th>Policy</th>
                      
                    </tr>
                      <c:forEach items="${intbaggage}" var="baggages" varStatus="se">
                    
                      <tr>
                      <td><img src="/resources/images/airline/${baggages.airlineCode}.gif" alt="${baggages.airlineCode}"> <a href="${baggages.webLink}" rel="nofollow"  target="_blank">${baggages.airlineName} &nbsp; </a> </td>
                      <td><a href="${baggages.webLink}" rel="nofollow"  target="_blank">View</a></td>
                     
                      </tr>
                    </c:forEach>
                
                  </tbody>
                </table>
              </div>
			  
            </div>
          </div>
        </div>
      </div>
     </c:if> --%>
        <c:if test="${(empty intbaggage) and (empty baggage)}">
         <div class="text_box_mobile">
        <div class="row">
          <div class="col-xs-12">
            <div class="text-box1">
              <div class="data">
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
         <p class="note"> <span>Note:-</span> If you cannot find your preferred airline, please feel free to contact us at our toll-free 24X7 +1-888-737-8675.</p>
		 <p class="note"> <span>*</span> If your itinerary includes more than one flights, then please double check baggage allowances for the individual flights. They may differ depending on the airlines you are flying with.</p>
			
    </div>
  </div>
</div>



