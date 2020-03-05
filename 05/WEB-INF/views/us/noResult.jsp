<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<!DOCTYPE html>
<html lang="en" ng-app="angularTable">
 <head>
 <meta charset="utf-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
 <meta name="description" content="">
 <meta name="author" content="">
<link rel="icon" href="/resources/images/favicon.png" type="image/x-icon" />
 
 <title>Flights Searching: ${data.siteName} in Travel Deals, Cheap Flight Deals, Airline Deals</title>

 <!-- Bootstrap core CSS -->
 <link href="/resources/flight-result/css/bootstrap.min.css" rel="stylesheet">
 <link href="/resources/flight-result/css/font-awesome.min.css" rel="stylesheet">  
 <link href="/resources/us/css/jquery-ui.min.css" rel="stylesheet">
  <link href="/resources/us/css/result-style.css?01082019" rel="stylesheet">
 <link href="/resources/flight-result/css/notify.css" rel="stylesheet" type="text/css">

<!-- JavaScript -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="/resources/flight-result/js/jquery-ui.1.10.4.min.js?20170427"></script>
<script src="/resources/flight-result/js/bootstrap.min.js"></script>
<script src="/resources/flight-result/lib/angular/angular.js"></script>
<script src="/resources/flight-result/js/custom.js"></script> <!--global js impliment  -->  
<script src="/resources/flight-result/lib/dirPagination.js"></script>
<script src="/resources/flight-result/js/route-happy.js"></script>
<script src="/resources/us/js/listing.js?435347"></script> <!--on page script--> 
<script src="/resources/js/angular-initial-value.min.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.js"></script>
<script src="/resources/us/js/index_eng_min_1.0.js?546456542019"></script><!--Search-->
<script src="/resources/flight-result/js/jquery.validate.min.js"></script><!--Validation -->
<script src="/resources/flight-result/js/theme-scripts.js"></script><!--date time convert  -->
<script src="/resources/flight-result/js/jquery.sticky.js"></script>
<script src="/resources/flight-result/js/notify.js"></script><!--notify msg alerty type --> 
 
 <style>
 .result-inside { padding-bottom:0px; }
 .footer { height: auto; margin: 0px; }
 </style>

<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>

 <body class="result-bg" ng-controller="MainController" id="MainController">



<div class="result-inside">
<!-- Header Start -->
<jsp:include page="result_header.jsp"></jsp:include>

   <!--/Header start --> 
   
    <!-- Mobile itenery -->

<div class="mobile-itenery">
    <div class="visible-sm visible-xs result-itenery"> 

<span class="btn modifySearchMobile"><i class="fa fa-pencil"></i> Modify</span> 
  
<c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
                                  
         <c:set var="myfromCity" value="${search.originAirport.cityCode}"/>
          <c:set var="mytoCity" value="${search.destinationAirport.cityCode}"/>
          
                                           <input type="hidden" id="sfroCity" value="${search.originAirport.cityCode}"/>
                                            <input type="hidden" id="dtoCity" value="${search.destinationAirport.cityName}"/>
                                          <input type="hidden" id="stoCity" value="${search.destinationAirport.cityCode}"/>
                                          
                                           
										     <div class="city-itenery">
                                            <c:out value='${search.originAirport.cityCode}' />  
                                             <c:choose>
                                           <c:when test="${search.tripType=='2'}">
                                            <b> <i class="fa fa-exchange"></i> </b> 
                                           </c:when>
                                           <c:otherwise>
                                            <b> <i class="fa fa-long-arrow-right"></i> </b> 
                                           </c:otherwise>
                                           </c:choose>  
                                           <c:out value='${search.destinationAirport.cityCode}' /> 
                                        </div>
										
                                              
                                            <!-- <c:choose>
                                           <c:when test="${search.tripType=='2'}">
                                            <c:if test="${not empty search.returnOriginAirport.cityCode}">
                                            
                                        <div class="city-itenery">
                                            <c:out value='${search.returnOriginAirport.cityCode}' />
                                            <c:choose>
                                           <c:when test="${search.tripType=='2'}">
                                            <b> <i class="fa fa-exchange"></i> </b> 
                                           </c:when>
                                           <c:otherwise>
                                            <b> <i class="fa fa-long-arrow-right"></i> </b> 
                                           </c:otherwise>
                                           </c:choose>  
                                            
                                           <c:out value='${search.returnDestinationAirport.cityCode}' /> 
                                        </div></c:if>
                                        </c:when></c:choose>
                                        <div class="clearfix"></div>-->
                                       

                                        <div> <i class="fa fa-clock-o" aria-hidden="true"></i> 
                                            <c:set var="depart" value="${fn:split(search.travelDate,'T')}"/>
                                        <fmt:parseDate value="${depart[0]}" var="dateObject" pattern="MM-dd-yyyy" />
                                        <fmt:formatDate value="${dateObject }" pattern="EEE, MMM dd" />
                                         
                                           <c:choose>
                                           <c:when test="${search.tripType=='2'}">
                                           
                                           <span>-</span>
                                             <c:set var="returns" value="${fn:split(search.returnDate,'T')}"/>
                                             
                                        <fmt:parseDate value="${returns[0]}" var="rdateObject" pattern="MM-dd-yyyy" />
                                        <fmt:formatDate value="${rdateObject }" pattern="EEE, MMM dd" /> 
                                        
                                        </c:when></c:choose>
                                     
                                            <span>&nbsp; | &nbsp;</span>
                                             Class: 
                                          
                                             <b><c:out value='${search.cabinType}' /> </b>
                                        
                                        </div>
                                         
                                     
                                    </c:forEach>
                                    

        <!--Itenery End -->

    </div>
                                    
                                    


   
	
</div>

<!-- Mobile itenery -->

 <!-- Results main container -->
  <%
String lookfromCity="";
String looktoCity="";
String lookdepDate="";
String lookretDate="";

int lookadult=1;
int lookchild=0;
int lookinfant=0;
int lookinfantws=0;
String lookcabin="";
String looktrip="2";
%>
<div id="resultsmainCntr">

   <!--Modify Search Start-->
     <c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
          <c:set var="myfromCity" value="${search.originAirport.cityCode}"/>
          <c:set var="mytoCity" value="${search.destinationAirport.cityCode}"/>
          <c:set var="depart" value="${fn:split(search.travelDate,'T')}"/>
          
          <input type="hidden" id="selAirline" value="${search.airline.code}" />
            <c:set var="myAdult" value="${search.adults}"/>
              <c:set var="myChild" value="${search.children}"/>
                <c:set var="myInfant" value="${search.infants}"/>
                  <c:set var="myInfantWs" value="${search.infantWs}"/>
                    <c:set var="myCabin" value="${search.cabinType}"/>
                      <c:set var="myTrip" value="${search.tripType}"/>
                        
										<fmt:parseDate value="${depart[0]}" var="dateObject" pattern="MM-dd-yyyy" />
										<fmt:formatDate pattern="MM-dd-yyyy" value="${dateObject}" var="dateObject2"/>
										
										 <c:choose>
                                           <c:when test="${search.tripType=='2'}">
                                             <c:set var="returns" value="${fn:split(search.returnDate,'T')}"/>
                                             
										<fmt:parseDate value="${returns[0]}" var="rdateObject" pattern="MM-dd-yyyy" />
										<fmt:formatDate pattern="MM-dd-yyyy" value="${rdateObject}" var="rdateObject2"/>
										
										<%lookretDate=(String)pageContext.getAttribute("rdateObject2").toString(); %>
										</c:when></c:choose>
										
										
										   <% lookfromCity=(String)pageContext.getAttribute("myfromCity");
                                              looktoCity=(String)pageContext.getAttribute("mytoCity");
                                              lookdepDate=(String)pageContext.getAttribute("dateObject2").toString();
                                              lookadult=(Integer)pageContext.getAttribute("myAdult");
											  lookchild=(Integer)pageContext.getAttribute("myChild");
											  lookinfant=(Integer)pageContext.getAttribute("myInfant");
											  lookinfantws=(Integer)pageContext.getAttribute("myInfantWs");
											  lookcabin=(String)pageContext.getAttribute("myCabin");
											  looktrip=(String)pageContext.getAttribute("myTrip");


                                           %>
                                    </c:forEach>
                                    
    <form:form method="POST" action="/search" modelAttribute="flightSearch" id="flightSearch">
	
    
	 
	   <!--Modify Search Start-->
   
    <div class="modify-search no-resultspage" id="modify-search">
	
	<div class="container">
	 <form:form method="POST" action="/search" modelAttribute="flightSearch" id="flightSearch">
	 
	<div class="filter-main-head">

		Modify Your Search 
		<a href="#" class="close-sidebar fa fa-close"></a>
	
	</div>
		
	<div class="holder">
	
		
   		 <div id="errorDiv" style="color:#E9800C; display:none; margin-bottom:10px;"></div>
		
      	 <div class="row">
	   
	   	<div class="col-lg-6 no-padding">
			
			<div class="col col-md-3 no-padding_left">
				<form:select path="tripType" class="form-control" id="tripType" onchange="ddlTypejourneyChange(this);" name="ddlTypejourney" >
				<form:option value="2" selected="selected">Round Trip</form:option>
				<form:option value="1">One Way</form:option>
				</form:select>
			</div>
			
			<div class="col-md-9 no-padding">
			
				<div class="col col-md-6" id="fromCityDiv">
					
					<form:input path="froCity" placeholder="Leaving From" autocomplete="off" class="form-control"/>
					
				</div>
				
				<div class="col col-md-6" id="toCityDiv">
					 
					 <form:input path="toCity" class="form-control" autocomplete="off"  placeholder="Where To" />
					 
				</div>
			
			</div>
			
		</div>
		
		<div class="col-lg-6 no-padding">
		
		<div class="col col-md-3 col-xs-6" id="departDateDiv" style="cursor: pointer;">
           
           <form:input path="froDate" id="departDate" class="form-control"  readonly="true" data-date-autoclose="true" data-date-role="start" name="tbDepart" placeholder="mm/dd/yyyy" />
           </div>
		   
		   <div class="col col-md-3 col-xs-6" id="returnDateLabel" style="cursor: pointer;">
          
           <form:input path="toDate" id="returnDate"  class="form-control"  readonly="true" data-date-role="end" name="tbReturn" placeholder="mm/dd/yyyy" />
		 </div>
		 
		 <div id="traveller" class="col col-md-3 col-xs-12">
          
           <input type="text" id="person"   readonly="true" placeholder="1 Traveler(s), Economy">
           
           <div class="popup traveler-dropdown" style="display: none;">
		   
                    <div class="traveller-box">
					
					
										
						<div class="select-row">					
						
						
						<label class="label">Adults</label>
						
						<span class="ad_right">
						<input type="button" class="traveler-minus maincalulation" value="-" id="sub1minus">
						<form:input path="adult" class="count"  id="sub1" readonly="true"/> 
						<input type="button" class="traveler-plus maincalulation" value="+" id="sub1plus">
						</span>						</div>
						
						
						<div class="select-row">
						
						<label class="label"> Children (2-11)</label>
						
						
						<span class="ad_right">
						<input type="button" class="traveler-minus maincalulation" value="-" id="sub2minus">
						<form:input path="child" class="count"  id="sub2" readonly="true"/>
						<input type="button" class="traveler-plus  maincalulation" value="+" id="sub2plus">
						</span>						
						</div>
						
						<div class="select-row">
						
						<label class="label">Infant</label>
						
						<span class="ad_right">
						<input type="button" class="traveler-minus maincalulation" value="-" id="sub3minus">
						<form:input path="infant" class="count"  id="sub3" readonly="true"/> 
						<input type="button" class="traveler-plus maincalulation" value="+" id="sub3plus">
						</span>						
						</div>
						
						<div class="select-row">
						
						<label class="label">Infant with Seat</label>
						
						
						<span class="ad_right">
						<input type="button" class="traveler-minus maincalulation" value="-" id="sub4minus">
						
						<form:input path="infantWs" class="count" id="sub4" readonly="true" name="ddlInfants"/>
							
						<input type="button" class="traveler-plus maincalulation" value="+" id="sub4plus">
						</span>
						</div>
						
						<div class="select-row">
						
						<label class="label">Class</label>
						
						<form:select path="cabinClass" class="form-select maincalulation">
						<form:option value="Economy" selected="true">Economy</form:option>
						 <form:option value="PremiumEconomy">Premium Economy</form:option>
						<form:option value="Business">Business</form:option>
						<form:option value="First">First</form:option>
						</form:select>
						</div>
				 
                <a href="javascript:void(0);" class="done">Done</a>            </div>
                </div>
         </div>
		 
		 <div class="col col-md-3 col-xs-12 text-right no-padding_right">
		
		   <input type="button" onClick="submitForm();" ng-show="list.length" value="MODIFY SEARCH" class="btn btn-div btn-block button"  id="btnSearchFlights">
         </div>
		</div>
		
	  
       
      </div>
	  
	  <div class="clearfix"></div>

					  
	 	 <div class="row return_div">
	  	
		 <div class="col-md-4" id="jawEngineLink">
		<a href="javascript:void(0);" onClick="jawEngineToggle();">Return to or from another city/airport? <span class="fa fa-angle-down"></span> </a>		
		</div> 
		
		<div class="col-md-6">
			
			 <div class="col-sm-4 checkbox">
	     		<label class="checkbox-inline">
               <form:checkbox path="directFlight"  value="true"  name="optradio"/> 
                <span>Direct Flights Only</span></label> 	 
			  </div>
            <div class="col-sm-6 text-right"> <a class="link unaccompanied" href="javascript:void(0);" onClick="unaccompanied();">Unaccompanied Minor</a> </div>
		</div>
		
		<div class="col-md-2 text-right">
		
		<a href="javascript:void(0);" class="advance-search-btn" data-toggle="collapse" data-target="#demo">  Preferred Airlines <span class="fa fa-angle-down"></span></a>	</div>
		
	  </div>
	  
	 
			
			<div id="jawEngineId" class="pull-left" style="display: none;">
		
				<div class="col col-md-6 col-sm-6 col-xs-12 no-padding">
				   <form:input path="returnFroCity"  aria-describedby="basic-addon1" class="form-control inpt_cont" placeholder="Returning From" autocomplete="off" />
				 </div>
			 
				<div class="col col-md-6 col-sm-6 col-xs-12">
				   <form:input path="returnToCity"  aria-describedby="basic-addon1" autocomplete="off" class="form-control inpt_cont" placeholder="Where To" />
				 </div>
			 
			 
		 
		 </div>
			 
	
	  
	  <div class="row visible-sm visible-xs">
	  
		<div class="col-xs-12"><a style="margin-top:5px; display:inline-block;" href="javascript:void(0);" onClick="unaccompanied();">Unaccompanied Minor</a></div>
		
	  </div>
	  
	  <div class="advance-search pull-right">
        
        <div id="demo" class="collapse hide-block">
		
               	 <form:select  id="select-air" class="form-control arrow_down"   path="airlines" ></form:select>
            
          
         </div>
      </div>
	  
	  <div class="clerfix"></div>
	  
	 
	   <div class="row" id="sameSearch" style="display:none;">
			<ul class="list-inline">
			  <li style="color:#ff0000">Please change your search criteria before clicking the "Modify Search" button.</li>
			</ul>
          </div>
       
     </div>
	 
	 
    <!--Modify Search End-->
    </form:form>
	</div>
	
  </div>


 <!-- Modify Search end -->
	 
    <!--Modify Search End-->
    </form:form>
 <!-- Left container start here-->
  
  

 
 
 
            
            <div class="no_result_found">
			
				<span class="no_results">Sorry! No Result Found </span>
		
				<p>Let Our Agents Help You Find The Best Flight Option!</p>
				
				<span class="call_now">Now Call Us : +1-888-737-8675 </span>
				
 <a href="/us" class="btn btn-div btn-inline-block" style="
    background: #4863db;
    color: #fff;
    border-radius: 0;
    padding: 12px;
    margin-top: 20px;
    font-size: 21px;
">Back to Search</a>

		</div>
            
			<!--Sorting Div -->
            
		 
    
 </div>  
    
 </div> 
	 
	
<!-- /container -->


<!-- Footer Start -->
<jsp:include page="result_footer.jsp"></jsp:include>

   <!--/Footer start --> 


	
	
<div class="page_overlay"></div>
<script type="text/javascript">
var key=false;
currentLocation = window.location;
//alert("full value : "+currentLocation);
arr = currentLocation.toString().split('/');
strFile = arr[arr.length-1];
document.getElementById("currentLocation").value=strFile;
</script>
</body>
</html>
