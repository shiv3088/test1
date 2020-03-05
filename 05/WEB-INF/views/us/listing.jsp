<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="en" ng-app="angularTable">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> 
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<title>Flight Search | ${data.siteName}</title>
<!-- Bootstrap core CSS -->
<link href="/resources/flight-result/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/flight-result/css/font-awesome.min.css" rel="stylesheet">
<link href="/resources/us/css/jquery-ui.min.css?1111111111" rel="stylesheet">
<link href="/resources/us/css/result-style.css?23122019" rel="stylesheet">
<link href="/resources/flight-result/css/flag-icon.css" rel="stylesheet">
<link href="/resources/flight-result/css/notify.css" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="/resources/flight-result/js/jquery-ui.1.10.4.min.js?24072017"></script>
<script src="/resources/flight-result/js/bootstrap.min.js"></script>
<script src="/resources/flight-result/lib/angular/angular.js"></script>
<script src="/resources/flight-result/js/custom.js"></script>
<script src="/resources/flight-result/js/activeTracker.js?03112017"></script><!--global js impliment  -->
<script src="/resources/flight-result/lib/dirPagination.js"></script>
<script src="/resources/flight-result/js/route-happy.js"></script>
<script src="/resources/us/js/listing.js?454_1"></script><!--on page script-->
<script src="/resources/flight-result/js/angular-initial-value.min.js"></script>
<script src="/resources/flight-result/js/angular-local-storage.js"></script>
<script src="/resources/us/js/index_eng_min_1.4.js"></script><!--Search-->
<script src="/resources/flight-result/js/jquery.validate.min.js"></script><!--Validation -->
<script src="/resources/flight-result/js/theme-scripts.js"></script><!--date time convert  -->
<script src="/resources/flight-result/js/jquery.sticky.js"></script>
<script src="/resources/flight-result/js/notify.js"></script>
<!--notify msg alerty type -->
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    

         
<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
<c:choose>
<c:when test="${currentDevice.normal}">
<input type="hidden" value="Normal" id="currentDevice"/>
</c:when>
<c:when test="${currentDevice.mobile}">
  <input type="hidden" value="Mobile" id="currentDevice"/>
</c:when>
<c:when test="${currentDevice.tablet}">
  <input type="hidden" value="Tablet" id="currentDevice"/>
</c:when>
<c:otherwise>
  <input type="hidden" value="Normal" id="currentDevice"/>
</c:otherwise>
</c:choose>
</head>
<body class="result-bg results-page"  ng-controller="MainController" id="MainController">
<input type="hidden" id="matrixSizeId" value="0" />
<input type="hidden" ng-model="conversionRatio" />
<% 
  
     
   if(request.getSession().getAttribute("utm_source") != null){
    System.out.println("get utmResSource : '");
   }else{
        request.getSession().setAttribute("utm_source","Online");
   }
    String utmResSource=(String)session.getAttribute("utm_source");
    System.out.println("utmResSource : '"+utmResSource);
     double valuess = 1;
     if(request.getSession().getAttribute("curRsponse") == null)
     {}
     else if(request.getSession().getAttribute("curRsponse") != null)
     {
        valuess = (Double)request.getSession().getAttribute("curRsponse");
     }
    %>
<%
         String  clss = "USD";
         if(request.getSession().getAttribute("xchangeCurrencyCode") == null)
         {}
         if(request.getSession().getAttribute("xchangeCurrencyCode") != null)
         { 
            clss = (String)request.getSession().getAttribute("xchangeCurrencyCode");
         }
    %>
    <input type="hidden" id="currencyConvRate" value="<%=valuess%>" />
    <input type="hidden" id="xchangeCurrencyCode" value="<%=clss%>" />
    <c:set var="utmResSource"  value="<%=utmResSource %>" scope="page"/>
    <input type="hidden" id="utmResSource" value="<%=utmResSource %>">
    
    <%
        String qantasMed="utm_source=listing&utm_campaign=non-brand&luf=qantas-airways-bannar";
        String qantasMeds="";
        String ssutmsource ="";
         if(session.getAttribute("utm_Medium") != null){
            ssutmsource=(String)session.getAttribute("utm_Medium");
            if(ssutmsource.equalsIgnoreCase("meta")){
                qantasMeds="Meta";
            }else if(ssutmsource.equalsIgnoreCase("cpc")){
                qantasMeds="cpc";
            }else if(ssutmsource.equalsIgnoreCase("ppc")){
                qantasMeds="ppc";
            }else {
                qantasMeds="";
            }
            if(qantasMeds.equalsIgnoreCase("")){
                qantasMed ="utm_source=listing&utm_campaign=non-brand&luf=qantas-airways-bannar";
            }else{
                qantasMed ="utm_source=listing&utm_medium="+qantasMeds+"&utm_campaign=non-brand&luf=qantas-airways-bannar";
            }
        }
    %>
    <!--PDC code here -->
    <div class="home_container makeHidden" ng-show="list.length">
      <div class="pdc-coupon-bg hidden-xs">
        <div class="container">
          <div class="col-sm-3 text-center"> <img src="/resources/images/pdc-icon.png"> <span class="wow">Wowza! Its here. </span> </div>
          <div class="col-sm-2 text-center">
            <div class="code"> <span>code</span> </div>
          </div>
          <div class="col-sm-6 text-center"> <b>Congratulations.</b> It's here! Discount will be applied<br/>
            on the payment page. It's applicable only for this session. </div>
          <div class="col-sm-1 position-relative text-center">
            <div class="pdc-policy-main ">
              <div class="pdc-tc  "> <a href="" onClick="show('mydiv')"> *T&C Apply</a> </div>
              <div class="pdc-terms"> <span class="arrow"></span>
                <p><b>Personlized discount code (PDC)</b><br/>
                  Once created, PDC can be used only within the session where it has been created. Each passenger can avail up to $5 discount. One PDC covers all the travelers, with discount up to $5 per passenger under the same PNR. Moving to any page(Home/Result/Payment) within the same session, your PDC would remain valid. No other promo code can be availed with PDC.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- PDC code End Here -->

  <div class="mobile_fixed_header" ng-show="list.length">
  <!-- Header Start -->
  <div id="headerrs" style="display:none">
    <jsp:include page="result_header.jsp"></jsp:include>
  </div>
  
  <!--Header start -->
  <!-- Mobile itenery -->
  <div class="mobile-itenery" id="mobile-itenery" style="display:none;">
    <div class="visible-sm visible-xs result-itenery"> <span class="btn modifySearchMobile"><i class="fa fa-pencil"></i> Modify</span>
      
      <c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
        <c:set var="myfromCity" value="${search.originAirport.cityCode}"/>
        <c:set var="mytoCity" value="${search.destinationAirport.cityCode}"/>
        <input type="hidden" id="sfroCity" value="${search.originAirport.cityCode}"/>
        <input type="hidden" id="dfroCity" value="${search.originAirport.cityName}"/>
        <input type="hidden" id="stoCity" value="${search.destinationAirport.cityCode}"/>
        <input type="hidden" id="dtoCity" value="${search.destinationAirport.cityName}"/>
        <input type="hidden" id="totPax"  value="${search.infantWs+search.infants+search.children+search.adults}"/>
        <c:set var="coriginAirport" value="${search.originAirport.cityCode}" />
        <c:set var="cdestinationAirport" value="${search.destinationAirport.cityCode}" />
        <c:set var="ctravelDate" value="${fn:split(search.travelDate,'T')[0]}"  scope="session"/>
        <c:set var="creturnDate" value="${fn:split(search.returnDate,'T')[0]}" scope="session"/>
        <c:set var="cadults" value="${search.adults}" />
        <c:set var="cchildren" value="${search.children}" />
        <c:set var="cinfants" value="${search.infants}" /> 
        
        <div class="city-itenery">
          <c:out value='${search.originAirport.cityCode}' />
          <c:choose>
            <c:when test="${search.tripType=='2'}"> <b> <i class="fa fa-exchange"></i> </b> </c:when>
            <c:otherwise> <b> <i class="fa fa-long-arrow-right"></i> </b> </c:otherwise>
          </c:choose>
          <c:out value='${search.destinationAirport.cityCode}' />
        </div>
        <div> <i class="fa fa-clock-o" aria-hidden="true"></i>
          <c:set var="depart" value="${fn:split(search.travelDate,'T')}"/>
          <fmt:parseDate value="${depart[0]}" var="dateObject" pattern="MM-dd-yyyy" />
          <fmt:formatDate value="${dateObject }" pattern="EEE,dd MMM" />
          <c:choose>
            <c:when test="${search.tripType=='2'}"> <span>-</span>
              <c:set var="returns" value="${fn:split(search.returnDate,'T')}"/>
              <fmt:parseDate value="${returns[0]}" var="rdateObject" pattern="MM-dd-yyyy" />
              <fmt:formatDate value="${rdateObject }" pattern="EEE,dd MMM" />
            </c:when>
          </c:choose>
          <span> | </span> Class:
          <c:out value='${search.cabinType}' />
          </div>
      </c:forEach>
      
      
    <c:set var="originStateIndex1"  value="${fn:indexOf(flightSearchWrapper.froCity,'[')}}" />
    <c:set var="originStateIndex2" value="${fn:indexOf(flightSearchWrapper.froCity,']')}}" />
    <fmt:parseNumber var="i" type="number" value="${originStateIndex1}" />
    <fmt:parseNumber var="j" type="number" value="${originStateIndex2}" />
    <c:set var="originState" value="${fn:substring(flightSearchWrapper.froCity,i+1,j)}" />  
    
    <c:set var="originStateIndex1"  value="${fn:indexOf(flightSearchWrapper.toCity,'[')}}" />
    <c:set var="originStateIndex2" value="${fn:indexOf(flightSearchWrapper.toCity,']')}}" />
    <fmt:parseNumber var="i" type="number" value="${originStateIndex1}" />
    <fmt:parseNumber var="j" type="number" value="${originStateIndex2}" />
    <c:set var="desState" value="${fn:substring(flightSearchWrapper.toCity,i+1,j)}" />

      <!--Itenery End -->
    </div>
    <div class="mobile_filter_strip container visible-sm visible-xs">
      <div class="row">
        <div class="text-center"> <span class="btn modifyFilterMobile" ><i class="fa fa-filter"></i> Filter</span> 
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile itenery -->
</div>
<!-- Results main container -->
<div id="resultsmainCntr" ng-show="list.length" style="display:none;">
  <div class="result-inside">
    <!--Modify Search Start-->
    <input  type="hidden" id="currentLocation" value="${searchListWrapper[0].bookingId}"/>
    <input type="hidden" id="lowerValue" value="0.0" />
    <input type="hidden" id="MaxValue" value="5000.0" />
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
    <c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
      <c:set var="myfromCity" value="${search.originAirport.cityCode}"/>
      <c:set var="mytoCity" value="${search.destinationAirport.cityCode}"/>
      
      
      <input type="hidden" id="dfroCity" value="${search.originAirport.cityName}"/>
      <input type="hidden" id="dtoCity" value="${search.destinationAirport.cityName}"/>
      
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
        </c:when>
      </c:choose>
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
    <!--Modify Search Start-->
    <div class="modify-search" id="modify-search" style="display:none;">
      <div class="container">
        <form:form method="POST" action="/search" modelAttribute="flightSearch" id="flightSearch">
          <div class="filter-main-head"> Modify Your Search <a href="#" class="close-sidebar fa fa-close"></a> </div>
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
				  
                    <form:input path="froCity" placeholder="Leaving From" autocomplete="off" class="form-control" />
                  
				  </div>
                  <div class="col col-md-6" id="toCityDiv">
				  
                    <form:input path="toCity" class="form-control" autocomplete="off"  placeholder="Where To" />
                  
				  </div>
                </div>
              </div>
              <div class="col-lg-6 no-padding">
                <div class="col col-md-3 col-xs-6" id="departDateDiv" style="cursor: pointer;">
                  <form:input path="froDate" id="departDate" class="form-control"  readonly="true" data-date-autoclose="true" data-date-role="start" name="tbDepart" placeholder="yyyy/mm/dd" />
                  <span class="calender-icon fa fa-calendar"></span>
				  
				  </div>
                <div class="col col-md-3 col-xs-6" id="returnDateLabel" style="cursor: pointer;">
                  <form:input path="toDate" id="returnDate"  class="form-control"  readonly="true" data-date-role="end" name="tbReturn" placeholder="yyyy/mm/dd" />
                  <span class="calender-icon fa fa-calendar"></span> 
				  
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
                        </span> </div>
                      <div class="select-row">
                        <label class="label"> Children (2-11)</label>
                        <span class="ad_right">
                        <input type="button" class="traveler-minus maincalulation" value="-" id="sub2minus">
                        <form:input path="child" class="count"  id="sub2" readonly="true"/>
                        <input type="button" class="traveler-plus  maincalulation" value="+" id="sub2plus">
                        </span> </div>
                      <div class="select-row">
                        <label class="label lap">Infant (0-2)
						<!--<div class="inlap hidden">
                                
                                <b>INFANT IN LAP</b><br>

<p>Most airlines allow infants under the age of 24 months at the time of trip completion to travel in parent's lap. The cost of such ticket is typically 10% of the adult base fare (airport and government taxes are additional).</p>
<p>If you would like for your infant to occupy a reserved seat, the infant must be booked as a CHILD and the applicable children's fare will apply.</p>

                                </div>--></label>
                        <span class="ad_right">
                        <input type="button" class="traveler-minus maincalulation" value="-" id="sub3minus">
                        <form:input path="infant" class="count"  id="sub3" readonly="true"/>
                        <input type="button" class="traveler-plus maincalulation" value="+" id="sub3plus">
                        </span> </div>
						
						
                      <div class="select-row">
                        <label class="label">Infant with Seat</label>
                        <span class="ad_right">
                        <input type="button" class="traveler-minus maincalulation" value="-" id="sub4minus">
                        <form:input path="infantWs" class="count" id="sub4" readonly="true" name="ddlInfants"/>
                        <input type="button" class="traveler-plus maincalulation" value="+" id="sub4plus">
                        </span> </div>
                      <div class="select-row">
                        <label class="label">Class</label>
                        <form:select path="cabinClass" class="form-select ad_right maincalulation">
                          <form:option value="Economy" selected="true">Economy</form:option>
                          <form:option value="PremiumEconomy">Premium Economy</form:option>
                          <form:option value="Business">Business</form:option>
                          <form:option value="First">First</form:option>
                        </form:select>
                      </div>
                      <a href="javascript:void(0);" class="done">Done</a> </div>
                  </div>
                </div>
                <div class="col col-md-3 col-xs-12 text-right no-padding_right">
                  <input type="button" onClick="submitForm();" ng-show="list.length" value="MODIFY SEARCH" class="btn btn-div btn-block button"  id="btnSearchFlights">
                </div>
              </div>
              
                    <form:input type="hidden" path="pageType" id="pageType" />
                    <form:input type="hidden" path="pageID"  id="pageID" />
                    <form:input type="hidden" path="sourceMedia"  id="sourceMedia" />
              <form:input type="hidden" path="airlinesPpc" id="airlinesPpc" name="airlinesPpc" />
            </div>
			
			
			<div class="clearfix"></div>

					
            <div class="row return_div">
               <div class="col-md-4" id="jawEngineLink"> <a href="javascript:void(0);" onClick="jawEngineToggle();">Return to or from another city/airport? <span class="fa fa-angle-down"></span> </a> </div> 
              <div class="col-md-6">
                <div class="col-sm-4 checkbox">
                  <label class="checkbox-inline">
                  <form:checkbox path="directFlight"  value="true"  name="optradio"/>
                  <span>Direct Flights Only</span></label>
                </div>
                <div class="col-sm-8 text-right"> <a class="link unaccompanied" href="javascript:void(0);" onClick="unaccompanied();">Unaccompanied Minor</a> </div>
              </div>
               <div class="col-md-2 text-right"> <a href="javascript:void(0);" class="advance-search-btn" data-toggle="collapse" data-target="#demo"> Preferred Airlines <span class="fa fa-angle-down"></span></a> </div> 
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
              <div class="col-xs-6"><a style="margin-top:5px; display:inline-block;" href="javascript:void(0);" onClick="unaccompanied();">Unaccompanied Minor</a></div>
              <div class="col-xs-6 checkbox text-right">
                  <label class="checkbox-inline">
                  <form:checkbox path="directFlight"  value="true"  name="optradio"/>
                  <span>Direct Flights Only</span></label>
                </div>
            </div>
            <div class="advance-search pull-right">
              <div id="demo" class="collapse hide-block">
                <form:select  id="select-air" class="form-control arrow_down"   path="airlines" ></form:select>
              </div>
            </div>
            <div class="clerfix"></div>
            <div class="row" id="sameSearch" style="display:none;">
                <div class="col-xs-12">
              <ul class="list-inline">
                <li style="color:#ff0000">Please change your search criteria before clicking the "Modify Search" button.</li>
              </ul>
                    </div>
            </div>
          </div>
          <!--Modify Search End-->
        </form:form>
      </div>
    </div>
    <!-- Modify Search end -->
    
    <div class="clearfix"></div>
    <div class="container">
    
     
      
      <!-- Right container start here-->
      <div id="rightCntr" ng-show="list.length">
        <c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
          <input type="hidden" id="sfroCity" value="${search.originAirport.cityCode}"/>
          <input type="hidden" id="dtoCity" value="${search.destinationAirport.cityName}"/>
          <input type="hidden" id="stoCity" value="${search.destinationAirport.cityCode}"/>
        </c:forEach>
        <div id="angularvalue" style="display:none"></div>
        <!--Results Start Here -->
        <div id="resultsCntr" >
          <!--Matrix Start Here -->
          <div ng-show="directMsg" style="text-align: center; margin: 0 0 10px 0; padding:10px;" class="alert alert-warning clearfix">
            <h4 style="  margin: 0; font-size:15px;">We couldn't find any Nonstop flights from ${searchListWrapper[0].originAirport.cityName} to ${searchListWrapper[0].destinationAirport.cityName}. Here are some other flights that might work for you.</h4>
          </div>
		  
		   <div class="row">
		  	<div class="col-sm-12">
				 <div class="results-found pull-left hidden-xs" ><span class="fa fa-search" ></span>&nbsp; {{filtered.length}} Results Found </div>
			</div>
		  </div>
		  
		   
		  
		  <div class="intinery-info-detail  hidden-xs">
          <div class="row">
            <div class="col-sm-9">
                
                <c:forEach items="${searchListWrapper}" var="search" varStatus="mb">
                    <fmt:parseDate value="${depart[0]}" var="ddateObject" pattern="MM-dd-yyyy" />
                    <fmt:parseDate value="${returns[0]}" var="rdateObject" pattern="MM-dd-yyyy" />
                    <p class="title">${search.originAirport.cityName} to ${search.destinationAirport.cityName} &nbsp;
                      <c:choose>
                        <c:when test="${search.tripType=='2'}">
                            <small><fmt:formatDate value="${ddateObject }" pattern="EEE, dd MMM, yyyy" /> | <fmt:formatDate value="${rdateObject }" pattern="EEE, dd MMM, yyyy" /></small>
                        </c:when>
                        <c:otherwise>
                            <small><fmt:formatDate value="${ddateObject }" pattern="EEE, dd MMM, yyyy" /></small>
                        </c:otherwise>
                      </c:choose>
                    </p>
                </c:forEach>
                <p class="note-msg" ng-show="list.length"><b>Note:</b> *All Fares displayed are quoted in {{dollar | uppercase}}  and inclusive of base fare, taxes and all fees. Additional <a target="_blank" href="/us/baggage-fees" style="color:#4863db;">baggage fees</a> may apply as per the airline policies. Some flights displayed either may be for nearby airport(s).</p>
            </div>
			
             <div class="col-sm-3">
              <div class="text-right note-msg"> <img src="/resources/flight-result/images/matrix-airline.png" alt="Multiple Airlines" title="Multiple Airlines" /> Multiple Airlines Option </div>
            </div> 
                </div>
          </div>
		  
          <div class="offer" ng-show="fxlContract"><i class="fa fa-tags" aria-hidden="true"></i> {{fxlText}} Get up to<span> $50 off</span>. <span class="combi-fare"> <a href="javascript:void(0);"><i class="fa fa-info"></i></a> <span class="combi_detail left"><i class="arrow"></i>This offer will be applicable based on your searched route, cabin type selection and other associated factors.</span> </span></div>
          <%-- <div>
		  
          <div class="matrix-block" ng-show="list.length" id="matrixBlock" style="display:none;"> <a href="javascript:void(0);" class="matrix-btn"  ng-click="showDetails = ! showDetails"><i class="fa fa-list-ul"></i> Matrix View</a>

            <div class="discountcoupon" id="couponsPopup" style="display: none;"> <img src="/resources/flight-result/images/gift-pack.gif" alt="gift" /> <span class="bg">Redeem <b>$<span id="couponsCode"></span></b> on checkout.</span> </div>
            <div class="matrix-section"  ng-show="list.length" >
             <!-- <div class="head hidden-xs">
                <div class="clear-filter"> <a ng-click="clearFilter();" style="cursor: pointer; padding-left: 5px;">Reset filter</a></div>
             </div>-->
              <jsp:include page="matrix-new.jsp" ></jsp:include>
              <div class="clearfix"></div>
              <div id="matrixSize" ></div>
            </div>
          </div>
          </div>   --%>
		  <div class="matrix-block" ng-show="list.length" id="matrixBlock" style="display:none;"> <a href="javascript:void(0);" class="matrix-btn"  ng-click="showDetails = ! showDetails"><i class="fa fa-list-ul"></i> Matrix View</a>

            <div class="discountcoupon" id="couponsPopup" style="display: none;"> <img src="/resources/flight-result/images/gift-pack.gif" alt="gift" /> <span class="bg">Redeem <b>$<span id="couponsCode"></span></b> on checkout.</span> </div>
            <div class="matrix-section"  ng-show="list.length" >
              <div class="head">
                <div class="clear-filter"> <!-- <a ng-click="clearFilter();">Reset filter</a> -->
                  <!-- <a ng-click="filters.Airline = ''">clear filter</a>
                    <a ng-click="filtersPrice.Price = ''">clear Price filter</a> -->
                  <button class="filter-btn2 filter_prev" name="" ng-show="matrix.length > pageSize" type="button" ng-disabled="currentPage == 0" ng-click="currentPage=currentPage-1" > <span class="fa fa-angle-left"></span></button>
                  <button class="filter-btn2 filter_next"  name="" ng-show="matrix.length > pageSize" type="button" ng-disabled="currentPage >= matrix.length/pageSize - 1" ng-click="currentPage=currentPage+1"><span class="fa fa-angle-right"></span></button>
                </div>
              </div>
              <jsp:include page="matrix-new.jsp" ></jsp:include>
              <div class="clearfix"></div>
              <div id="matrixSize" ></div>
            </div>
          </div>
		 
          <!--Matrix end Here --> 
          
		  <!--trustpilot Start --> 
			<jsp:include page="partial/trustpilot-list.jsp" ></jsp:include> 
		  <!--trustpilot End -->
		  
          <!--Sorting and tab filter Div start -->
          <div class="col-sm-12 no-padding" ng-show="list.length">
           
          <!--  Sorting Div start--> 
            <div class="sorting-tab right_sorting pull-right hidden" ng-show="list.length" id="sortDivId">
              <div class=" pull-right" > <span class="tab-btn">Sort By:</span> <a order="price_low_to_high" class="tab-btn lowest-price tabactive" ng-click="sort('Flights.Fare.PublishedFare')" > Price</a> <a order="duration_shorter" class="tab-btn shortest-time only-mobile" ng-click="sort('Flights.EFT')">Duration</a> <a order="best_value" class="tab-btn best-value" ng-click="sort('Flights.Segments[0].displayAirline')">Airline</a> </div>
            </div>
            <!--Tab filter Div -->
            <div class="sorting-tab results-tabs-left pull-left" ng-show="list.length">
             <!-- <div class="tab-btn-wrap"> <a id="slR" order="price_low_to_high" ng-click="clearFilter();mainList()"  class="tab-btn lowest-price tabactive" href="#src-result"  aria-controls="src-result"> All Result</a></div>
			 <div class="tab-btn-wrap"> <a id="slR" order="price_low_to_high" ng-click="clearFilter();shortestFlightList('TotalEFT')"  class="tab-btn lowest-price" href="#src-result"  aria-controls="src-result"> Shortest Flight <span style="color:#4863db;">(<i class="fa fa-{{dollar}}"></i>{{shortestFlightFare * conversionRatio | number:2}})</span> </a></div>
			 <div class="tab-btn-wrap"> <a id="nbr" order="duration_shorter" ng-show="nearBylist.length" ng-click="clearFilter();nearBySearch()" class="tab-btn lowest-price" href="#near-airport"  aria-controls="near-airport">Near By Airport <span style="color:#4863db; font-size:12px;">(<i class="fa fa-{{dollar}}" ></i>{{nearBylist[0].PersonFare * conversionRatio | number:2}})</span></a></div>-->
               <div class="tab-btn-wrap"> 
			   <a id="slR" order="price_low_to_high" ng-click="clearFilter();mainList()"  class="tab-btn lowest-price tabactive" href="#src-result"  aria-controls="src-result"> All Result</a> 
			   <a id="nbr" order="duration_shorter" ng-show="nearBylist.length" ng-click="clearFilter();nearBySearch()" class="tab-btn shortest-time only-mobile" href="#near-airport"  aria-controls="near-airport">Near By Airport <span class="hidden-xs"  style="color:#4863db; font-size:12px;">(<i class="fa fa-{{dollar}}" ></i>{{nearBylist[0].PersonFare * conversionRatio | number:2}})</span></a> 
			   <a id="alr" order="flexible_dates" ng-show="flexlist.length" ng-click="clearFilter();changeList()" class="tab-btn flex-dates" href="#2days"  aria-controls="2days">Flexible Dates <span  class="" style="color:#4863db; font-size:12px;">(<i class="fa fa-{{dollar}}" ></i>{{flexlist[0].PersonFare * conversionRatio | number:2}})</span></a> 
			   <a id="sft" ng-click="clearFilter();shortestFlightList('TotalEFT')" class="tab-btn hidden-xs hidden-sm hidden-md">Shortest Flight<span  class="hidden-xs" style="color:#4863db; font-size:12px;">(<i class="fa fa-{{dollar}}" ></i>{{shortestFlightFare * conversionRatio | number:2}})</span></a>
			   </div> 
			   
            </div>
          </div>
           <!--Sorting and tab filter Div End -->
          
          <div class="clearfix"></div>
          <div ng-show="airPPc" id="airPPC" style="text-align: center; display: none; margin: 0; padding:10px;" class="alert alert-warning clearfix">
            <h4 style="  margin: 0; font-size:15px;">Oops! Desired Airline or Fare not found. Here are the best options for you.</h4>
          </div>
         
		
		  
          <div ng-show="displayCab && filtered.length > 0" id="cabinPPC" style="text-align: center; display: none;" class="alert alert-warning clearfix">
            <h4 style="margin: 0; font-size:15px;">Oops! Desired Airline or Fare not found. Here are the best options for you.</h4>
          </div>
          
          
          
          <div id="resultsection" style="display:none;">
            <div class="no_result_text" ng-show="filtered.length == 0">No Result found for selected criteria. Please apply or change more filter.<a ng-click="clearFilter();" style="cursor: pointer; padding-left: 5px;">Reset filter</a></div>
            <div  id="srchbox" class="no-padding col-xs-12" ng-repeat="Flights in filtered = (list | filter:filtersPrice | filter:filters: true |filter:showstop  |filter:showAirline | filter:mixAirline |filter:filterByStop |filter:priceRange | filter:departRange | filter:returnRange | filter:AirlineFilter  |filter:CabinFilter |filter:TimesdeptFilter |filter: TimesrettFilter |filter:airportdeptFilter | filter:LayoverFilter |filter:airportreturnFilter | filter:filterByProvider | filter:ConnectionTime |orderBy:sortKey:reverse) | limitTo: paginationLimit()">
            
            <input type="hidden" ng-init="totalPax=Flights.Fares.NoOfAdult+Flights.Fares.NoOfChild+Flights.Fares.NoOfInfant+Flights.Fares.NoOfInfantWs">

              <!-- Result Div Start -->
              <div class="result">
                <div class="hidden-xs">
                  <!-- Price Div -->
                  <div class="col-bg">
                    <div class="col-sm-7 price-hover">
                      <div class="column"> <span class="partial-price total-fare"><i class="fa fa-{{dollar}}" ></i>{{Flights.PersonFare * conversionRatio | number:2}}</span>
                        <div class="hidemobile price" ng-if="totalPax == 1"> ( <span><i class="fa fa-{{dollar}}"></i> {{Flights.PersonBaseFare * conversionRatio | number:2}}</span> <span class="price-fraction"></span> <span class="plus">+</span> <span><i class="fa fa-{{dollar}}" ></i> {{Flights.PersonTaxFare * conversionRatio | number:2}}</span> <span class="taxes"> Taxes </span> )
                        </div> 
                         <c:if  test="${utmResSource ==  'OffLine'}">
                            <div class="hidemobile price"> (Incl. Markup <i class="fa fa-{{dollar}}" ></i>{{Flights.Fares.Markup * conversionRatio | number:2}}) 
                              &nbsp;<span  ng-if="Flights.Gds == '1'">Sabre</span> <span  ng-if="Flights.Gds == '0'">Amadeus</span> <span  ng-if="Flights.Gds == '2'">Skybird</span> <span  ng-if="Flights.Gds == '3'">Transam</span> <span  ng-if="Flights.Gds == '4'">Gtt Sabre</span><span  ng-if="Flights.Gds == '9'">Travel Fusion</span> <span  style="margin-left:19px;" ng-if="Flights.FareType != 'RP' && Flights.Airline != 'CCF'">N</span> </div>
                          </c:if>
                        <span class="price-whole"></span> <!-- <span class="bookinggds" style="margin-left:19px;" ng-if="Flights.FareType != 'RD'">{{Flights.Fares.Markup * conversionRatio | number:2}} , {{Flights.Fares.MarkupID}}</span> --> <span class="bookinggds" ng-if="Flights.Gds == '1'">*</span> <span class="bookinggds" ng-if="Flights.Gds == '0'">a</span> <span class="bookinggds" ng-if="Flights.Gds == '2'">s</span> <span class="bookinggds" ng-if="Flights.Gds == '3'">t</span> <span class="bookinggds" ng-if="Flights.Gds == '4'">gs</span> <span class="bookinggds" ng-if="Flights.Gds == '5'">ga</span> <span class="bookinggds" ng-if="Flights.Gds == '6'">gw</span><span class="bookinggds" ng-if="Flights.Gds == '9'">tf</span> <span class="bookinggds" style="margin-left:19px;" ng-if="Flights.FareType != 'RP' && Flights.Airline != 'CCF'">N</span><span class="bookinggds" style="margin-left:-16px;" ng-if="Flights.FareType == 'RD'" >rd</span> <span class="combi-fare"  ng-if="Flights.isFusionFare === true"> ComboFare &nbsp;<a href="javascript:void(0);"><i class="fa fa-info"></i></a> <span class="combi_detail left"> <i class="arrow"></i>
                        <p>Your fare is a combination of two one-way tickets,each subject to its own rules and restrictions.Any change or cancelation in any flight would not alter the other one.Changes to the other flight may incur a charge.</p>
                        </span> </span> </div>
                      <!--   <div class="evg_price hidden-xs" ng-if="(Flights.Fare.NoOfAdult+Flights.Fare.NoOfChild+Flights.Fare.NoOfInfant+Flights.Fare.NoOfInfantWs) == 1"> Final total price (taxes & fees included) Instant Savings Applied</div>
                        <div class="evg_price hidden-xs" ng-if="(Flights.Fare.NoOfAdult+Flights.Fare.NoOfChild+Flights.Fare.NoOfInfant+Flights.Fare.NoOfInfantWs)  > 1"> Avg. price per person (taxes & fees included)</div>
                        -->
                      <div class="evg_price hidden-xs">Price per adult (taxes & fees included)</div>
                        
                    <!--  <div id="price-show" ng-if="totalPax > 1"> 
                        <input type="hidden" ng-init="totalPax=Flights.Fares.NoOfAdult+Flights.Fares.NoOfChild+Flights.Fares.NoOfInfant+Flights.Fares.NoOfInfantWs">
                        <input type="hidden" ng-init="totalPaxWI=Flights.Fares.NoOfAdult+Flights.Fares.NoOfChild+Flights.Fares.NoOfInfantWs">
                        <input type="hidden" ng-init="perPaxMCO=(Flights.Fares.Markup*totalPax)/totalPax">
                        
                        <div class="price-detail" ng-if="Flights.Fares.NoOfAdult > 0">
                            <div class="col-xs-6 heading">{{Flights.Fares.NoOfAdult}} Adult Ticket</div>
                            <div class="col-xs-6 main-price"><i class="fa fa-{{dollar}}"></i>{{(Flights.Fares.AdultFare+Flights.Fares.AdultTax+perPaxMCO) * conversionRatio | number:2}} <small>x {{Flights.Fares.NoOfAdult}}</small></div>
                            <div class="col-xs-6 more-detail">Base Fare</div>
                            <div class="col-xs-6 more-detail-price"><i class="fa fa-{{dollar}}"></i>{{Flights.Fares.AdultFare * conversionRatio | number:2}} </div>
                            <div class="col-xs-6 more-detail">Taxes & Fees</div>
                            <div class="col-xs-6 more-detail-price"><i class="fa fa-{{dollar}}"></i>{{(Flights.Fares.AdultTax+perPaxMCO) * conversionRatio | number:2}} </div>
                        </div>
                        <div class="price-detail" ng-if="Flights.Fares.NoOfChild > 0">
                            <div class="col-xs-6 heading">{{Flights.Fares.NoOfChild}} Child Ticket</div>
                            <div class="col-xs-6 main-price"><i class="fa fa-{{dollar}}"></i>{{(Flights.Fares.ChildFare+Flights.Fares.ChildTax+perPaxMCO) * conversionRatio | number:2}} <small>x {{Flights.Fares.NoOfChild}}</small></div>
                            <div class="col-xs-6 more-detail">Base Fare</div>
                            <div class="col-xs-6 more-detail-price"><i class="fa fa-{{dollar}}"></i>{{Flights.Fares.ChildFare * conversionRatio | number:2}} </div>
                            <div class="col-xs-6 more-detail">Taxes & Fees</div>
                            <div class="col-xs-6 more-detail-price"><i class="fa fa-{{dollar}}"></i>{{(Flights.Fares.ChildTax+perPaxMCO) * conversionRatio | number:2}} </div>
                        </div>
                        <div class="price-detail" ng-if="Flights.Fares.NoOfInfant > 0">
                            <div class="col-xs-6 heading">{{Flights.Fares.NoOfInfant}} Infant <sup>Lap</sup> Ticket</div>
                            <div class="col-xs-6 main-price"><i class="fa fa-{{dollar}}"></i>{{(Flights.Fares.InfantFare+Flights.Fares.InfantTax+perPaxMCO) * conversionRatio | number:2}} <small>x {{Flights.Fares.NoOfInfant}}</small></div>
                            <div class="col-xs-6 more-detail">Base Fare</div>
                            <div class="col-xs-6 more-detail-price"><i class="fa fa-{{dollar}}"></i>{{Flights.Fares.InfantFare * conversionRatio | number:2}} </div>
                            <div class="col-xs-6 more-detail">Taxes & Fees</div>
                            <div class="col-xs-6 more-detail-price"><i class="fa fa-{{dollar}}"></i>{{(Flights.Fares.InfantTax+perPaxMCO) * conversionRatio | number:2}} </div>
                        </div>
                        <div class="price-detail" ng-if="Flights.Fares.NoOfInfantWs > 0">
                            <div class="col-xs-6 heading">{{Flights.Fares.NoOfInfantWs}} Infant <sup>Seat</sup> Ticket</div>
                            <div class="col-xs-6 main-price"><i class="fa fa-{{dollar}}"></i>{{(Flights.Fares.InfantWsFare+Flights.Fares.InfantWsTax+perPaxMCO) * conversionRatio | number:2}} <small>x {{Flights.Fares.NoOfInfantWs}}</small></div>
                            <div class="col-xs-6 more-detail">Base Fare</div>
                            <div class="col-xs-6 more-detail-price"><i class="fa fa-{{dollar}}"></i>{{Flights.Fares.InfantWsFare * conversionRatio | number:2}} </div>
                            <div class="col-xs-6 more-detail">Taxes & Fees</div>
                            <div class="col-xs-6 more-detail-price"><i class="fa fa-{{dollar}}"></i>{{(Flights.Fares.InfantWsTax+perPaxMCO) * conversionRatio | number:2}} </div>
                        </div>
                        
                        <div class="total-fare">Total <span><i class="fa fa-{{dollar}}"></i>{{Flights.Fares.GrandTotal * conversionRatio | number:2}}</span></div>  
                        
                    </div> -->
                    
                    </div>
                   
                    <div class="col-sm-5">
                        <a href="" ng-if="Flights.Airline != 'CCF'" id="{{Flights.FlightId}}"  class="select-flight-btn" ng-click="movePaymentPage(Flights.FlightId)" type="submit">SELECT <i class="fa fa-angle-right"></i></a> <a class="select-flight-btn clicktocall" ng-if="Flights.Airline == 'CCF'" href="tel:<c:out value='${tollFree}' />"> <i class="fa fa-phone"></i> To Book </i></a>
                      
                        <div class="final-total-price text-right " ng-if="Flights.IsPriceChanged"> <span class="tickets update-price"> Updated Price</span></div>
                      
                     <!-- <div class="tickets-price" ng-show="Flights.MaxSeats >0 && Flights.MaxSeats <= 5">                        
                        <div class="final-total-price" > <span class="tickets">Only {{Flights.MaxSeats}} tickets left</span> at this price!</div>
                      </div>
                       
                      <div class="tickets-price" ng-show="Flights.MaxSeats > 5">                        
                        <div class="final-total-price" > <span class="tickets"> Only 5 tickets left</span> at this price!</div>
                      </div> -->
                      <!--<span class="elite2" ng-if="Flights.FareType != 'RP' && Flights.Airline != 'CCF'"><img src="/resources/images/elite-bnr.png"></span>  -->
                    </div>
                  </div>
                </div>
                <!-- Result Block Start -->
                <div class="depart">
                  <!-- Desktop depart section Start -->
                  <div class="depart-section hidden-xs">
                  
                    <!--Departure-->
                <div class="newresult-bx" >
                    <div class="row">
                     <div class="col-sm-12">
                        <div class="lightGray_color total-taxs text-red" ng-if="Flights.FlexFare == true || Flights.FlexFareTo == true"><i aria-hidden="true" class="fa fa-calendar"></i><b> This is a flexible date, please verify the date.</b></div>
                        
                        <div  class="lightGray_color total-taxs text-red"  ng-if="Flights.NearyBy == true || Flights.NearByTo == true"><i aria-hidden="true" class="fa fa-map-marker"></i><b> This is a Nearby Airport, please verify the Airport.</b></div>
                      </div>
                    </div>
                    <div class="row" ng-repeat="Segments in Flights.OutMobSegments">
                        <div class="col-md-4 col-sm-5 col-xs-6" >
                            <div class="airln-bx" ng-switch on="Segments.displayAirline">
                            <div>
                            <div class="airln-img" ng-switch-default> <img src="/resources/images/airline/{{Segments.displayAirline|lowercase}}.gif" alt="{{getAirlineName(Segments.displayAirline) | lowercase}}" title="{{getAirlineName(Segments.displayAirline) | lowercase}}"></div>
                            <div class="airln-img" ng-switch-when="CCF"> <img src="/resources/images/airline/{{Segments.displayAirline|lowercase}}.gif" alt="{{getAirlineName(Segments.displayAirline)}}" title="{{getAirlineName(Segments.displayAirline)}}"></div>
                            <c:if  test="${utmResSource ==  'OffLine'}"> ({{Segments.airline}}-{{Segments.cls}}) </c:if>
                            <div class="airln-img" class="major-airline" ng-switch-when="DLL"> <a href="javascript:void(0);"><img src="/resources/images/airline/mal.png"></a> <span class="fare_detail airfare">
                              <p>The airfares offered here are very cheap for which we are not authorized to reveal the name of the airline you select. But once your reservation is confirmed, we will reveal you the carrier's name. We also assure you that you will not be disappointed by the airline and its offer. For further details, review our Terms & Conditions. </p>
                              </span> 
                            </div>
                            </div>
                        <div class="airln">                            
                            <div class="fltname" ng-switch-when="CCF">Call Center Fares Only</div>
                            <div class="fltname" ng-switch-when="DLL" >Major Airlines</div>
                            <div class="fltname text-capitalize" ng-switch-default>{{getAirlineName(Segments.displayAirline) | lowercase}}</div>
                            <div class="fltno">Flight No.: <span class="num">{{Segments.flightNo}}</span><span ng-if="Flights.Gds != '9'"> | EQP-{{Segments.aircraftType}} </span><span class="combi-fare" ng-if="Flights.Gds != '9'"> <a href="javascript:void(0);"><i class="fa fa-info" ng-if="Flights.Gds != '9' && Flights.Gds != '4'"></i></a> <span  class="combi_detail left"><i class="arrow"></i> {{getAircraftName(Segments.aircraftType)}}</span> </span> <br/> <span ng-if="trainContain(getAircraftName(Segments.aircraftType))">Note: This is a Train Service</span><span ng-if="busContain(getAircraftName(Segments.aircraftType))">Note: This is a Bus Service</span></div>
                        </div>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-6 hidden" ng-if="Segments.routeScoreAmenity.RouteScore >= 0">
                        <!-- flights aminities start here -->
                            <div class="vt-routhappy"  >
                              <ul>
                                <li class="{{entertainment[Segments.routeScoreAmenity.EntertainmentText]}}"> <span class="icon_entertainment"></span>
                                  <div ng-if="entertainment[Segments.routeScoreAmenity.EntertainmentText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_entertainment"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.EntertainmentText}} </div>
                                  </div>
                                </li>
                                <li class="{{food[Segments.routeScoreAmenity.FreshFoodText]}}"> <span class="icon_food"></span>
                                  <div ng-if="food[Segments.routeScoreAmenity.FreshFoodText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_food"></span> </div>
                                    <div  class="right_discription">{{Segments.routeScoreAmenity.FreshFoodText}} </div>
                                  </div>
                                </li>
                                <li class="{{layout[Segments.routeScoreAmenity.LayoutText]}}"> <span class="icon_layout"></span>
                                  <div ng-if="layout[Segments.routeScoreAmenity.LayoutText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_layout"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.LayoutText}} </div>
                                  </div>
                                </li>
                                <li class="{{powerAndUsb[Segments.routeScoreAmenity.PowerText]}}"> <span class="icon_power"></span>
                                  <div ng-if="powerAndUsb[Segments.routeScoreAmenity.PowerText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_power"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.PowerText}} </div>
                                  </div>
                                </li>
                                <li> <span class="icon_seat"></span>
                                  <div class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_seat"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.SeatText}}</div>
                                  </div>
                                </li>
                                <li class="{{wifi[Segments.routeScoreAmenity.WiFiText]}}"> <span class="icon_wifi"></span>
                                  <div ng-if="wifi[Segments.routeScoreAmenity.WiFiText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_wifi"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.WiFiText}} </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <!-- flights aminities end here -->
                         </div>
                        <div class="col-md-5 col-sm-5 col-xs-6">
                            <div class="vt-trip">
                                <span class="basic-info ng-scope"  ng-if="Segments.cabinClass == '1'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">
                                   <span ng-if="Segments.cabinCategory != ''">{{Segments.cabinCategory}}-</span>Economy
                                </span>
                                <span ng-if="Segments.cabinClass == '2'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Premium Economy</span>
                                <span ng-if="Segments.cabinClass == '3'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Business</span>
                                <span ng-if="Segments.cabinClass == '4'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">First</span>
                                <span ng-if="Segments.cabinClass == '6'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Basic  Economy</span>
                                <span ng-if="Segments.cabinClass == '7'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Light  Economy</span>
                                
                                <div class="triptime">
                                    <ul>
                                        <li><span title="{{Segments.departureTime | date: 'hh:mm a'}} {{Segments.departureTime | date: 'EEE,dd MMM'}}">{{Segments.departureTime | date: 'hh:mm a' | lowercase}} </span> <i ng-if="Flights.FlexFare == true && $index == 0" title="This is a flexible date" ></i></li>
                                        <li ng-if="!Segments.layoverAirport"><img src="/resources/flight-result/images/loc-dis-icon.png?v1"></li>
                                        <li ng-if="Segments.layoverAirport.split(',').length == 1 && Segments.layoverAirport"><img src="/resources/flight-result/images/loc-dis-icon-1.png?v1"></li>
                                        <li ng-if="Segments.layoverAirport.split(',').length == 2"><img src="/resources/flight-result/images/loc-dis-icon-2.png?v1"></li>
                                        <li ng-if="Segments.layoverAirport.split(',').length == 3"><img src="/resources/flight-result/images/loc-dis-icon-3.png?v1"></li>
                                        <li ng-init="day_count = differenceInDays(Segments.departureTime,Segments.arrivalTime)">{{Segments.arrivalTime | date: 'hh:mm a'| lowercase}}<sup ng-if="day_count > 0">+{{day_count}}</sup></li>
                                    </ul>
                                </div>
                                <div class="tripdate">
                                    <ul>
                                    <li>{{Segments.departureTime | date: 'EEE,dd MMM'}}</li>
                                      <li>&nbsp;</li>   
                                    <li>{{Segments.arrivalTime | date: 'EEE,dd MMM'}}</li>
                                    </ul>
                                </div>
                                <div class="vt-dest">
                                <ul>
                                        <li class="txt-bold" style="color:{{nearColor(Segments.nearBy)}}" title="{{getCityName(Segments.originAirport)}}, {{getAirportName(Segments.originAirport)}} ({{Segments.originAirport}})"><i class="fa fa-map-marker text-red" ng-if="Segments.nearBy == true" ></i>&nbsp;{{Segments.originAirport}}</li>
                                        <li class="text-center">
                                          <spann ng-if="!Segments.layoverAirport" style="margin-top:-15px; margin-right:10px;">&nbsp;</spann>  
                                          <spann  style="margin-top:-15px; margin-right:10px;" ng-if="Segments.layoverAirport" ng-repeat="layAir in Segments.layoverAirport.split(',')" ng-class="{span_1:Segments.layoverAirport.split(',').length == 1,span_2:Segments.layoverAirport.split(',').length == 2,span_3:Segments.layoverAirport.split(',').length == 3}"  style="margin-top:-15px;">{{ layAir }}<!-- <br />56m --></spann>
                                        </li>
                                        <li class="txt-bold" style="color:{{nearColor(Segments.nearByTo)}}" title="{{getCityName(Segments.destinationAirport)}}, {{getAirportName(Segments.destinationAirport)}} ({{Segments.destinationAirport}})">&nbsp; <i class="fa fa-map-marker text-red" ng-if="Segments.nearByTo == true" ></i>&nbsp;{{Segments.destinationAirport}}</li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-md-3 col-sm-2 col-xs-6">
                        <div class="vt-layover">
                        <span class="vt-stop" ng-if="(Segments.techStops-1) == '0'">Non Stop</span>
                        <span class="vt-stop" ng-if="Segments.techStops == null">Non Stop</span> 
                        <span class="vt-stop" ng-if="Segments.techStops == '1\n'">Non Stop</span>
                        <span class="vt-stop" ng-if="(Segments.techStops-1) == '1'">1 Stop</span>
                        <span class="vt-stop" ng-if="(Segments.techStops-1) == '2'">2 Stop</span>
                        <span class="vt-stop-time">{{Flights.Tfd}}</span>
                        </div>
                        
                        </div>
                    </div>
                  </div>
                </div>
                <!--End Departure-->
                <div class="dvd"></div>
                <!--Return-->
                <div class="return-section hidden-xs" ng-show="Flights.InMobSegments.length" >
                <div class="newresult-bx" >
                    <div class="row" ng-repeat="Segments in Flights.InMobSegments">
                        <div class="col-md-4 col-sm-5 col-xs-6" >
                            <div class="airln-bx" ng-switch on="Segments.displayAirline">
                            <div>
                            <div class="airln-img" ng-switch-default> <img src="/resources/images/airline/{{Segments.displayAirline|lowercase}}.gif" alt="{{getAirlineName(Segments.displayAirline) | lowercase}}" title="{{getAirlineName(Segments.displayAirline) | lowercase}}"></div>
                            <div class="airln-img" ng-switch-when="CCF"> <img src="/resources/images/airline/{{Segments.displayAirline|lowercase}}.gif" alt="{{getAirlineName(Segments.displayAirline)}}" title="{{getAirlineName(Segments.displayAirline)}}"></div>
                            <c:if  test="${utmResSource ==  'OffLine'}"> ({{Segments.airline}}-{{Segments.cls}}) </c:if>
                            <div class="airln-img" class="major-airline" ng-switch-when="DLL"> <a href="javascript:void(0);"><img src="/resources/images/airline/mal.png"></a> <span class="fare_detail airfare">
                              <p>The airfares offered here are very cheap for which we are not authorized to reveal the name of the airline you select. But once your reservation is confirmed, we will reveal you the carrier's name. We also assure you that you will not be disappointed by the airline and its offer. For further details, review our Terms & Conditions. </p>
                              </span> 
                            </div>
                            </div>
                        <div class="airln">                            
                            <div class="fltname" ng-switch-when="CCF">Call Center Fares Only</div>
                            <div class="fltname" ng-switch-when="DLL" >Major Airlines</div>
                            <div class="fltname text-capitalize" ng-switch-default>{{getAirlineName(Segments.displayAirline) | lowercase}}</div>
                            <div class="fltno">Flight No.: <span class="num">{{Segments.flightNo}}</span><span ng-if="Flights.Gds != '9'"> | EQP-{{Segments.aircraftType}} </span><span class="combi-fare" ng-if="Flights.Gds != '9'"> <a href="javascript:void(0);"><i class="fa fa-info" ng-if="Flights.Gds != '9' && Flights.Gds != '4'"></i></a> <span  class="combi_detail left"><i class="arrow"></i> {{getAircraftName(Segments.aircraftType)}}</span> </span>  <br/><span ng-if="trainContain(getAircraftName(Segments.aircraftType))">Note: This is a Train Service</span><span ng-if="busContain(getAircraftName(Segments.aircraftType))">Note: This is a Bus Service</span></div>
                        </div>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-6 hidden" ng-if="Segments.routeScoreAmenity.RouteScore >= 0">
                        <!-- flights aminities start here -->
                            <div class="vt-routhappy"  >
                              <ul>
                                <li class="{{entertainment[Segments.routeScoreAmenity.EntertainmentText]}}"> <span class="icon_entertainment"></span>
                                  <div ng-if="entertainment[Segments.routeScoreAmenity.EntertainmentText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_entertainment"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.EntertainmentText}} </div>
                                  </div>
                                </li>
                                <li class="{{food[Segments.routeScoreAmenity.FreshFoodText]}}"> <span class="icon_food"></span>
                                  <div ng-if="food[Segments.routeScoreAmenity.FreshFoodText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_food"></span> </div>
                                    <div  class="right_discription">{{Segments.routeScoreAmenity.FreshFoodText}} </div>
                                  </div>
                                </li>
                                <li class="{{layout[Segments.routeScoreAmenity.LayoutText]}}"> <span class="icon_layout"></span>
                                  <div ng-if="layout[Segments.routeScoreAmenity.LayoutText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_layout"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.LayoutText}} </div>
                                  </div>
                                </li>
                                <li class="{{powerAndUsb[Segments.routeScoreAmenity.PowerText]}}"> <span class="icon_power"></span>
                                  <div ng-if="powerAndUsb[Segments.routeScoreAmenity.PowerText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_power"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.PowerText}} </div>
                                  </div>
                                </li>
                                <li> <span class="icon_seat"></span>
                                  <div class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_seat"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.SeatText}}</div>
                                  </div>
                                </li>
                                <li class="{{wifi[Segments.routeScoreAmenity.WiFiText]}}"> <span class="icon_wifi"></span>
                                  <div ng-if="wifi[Segments.routeScoreAmenity.WiFiText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_wifi"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.WiFiText}} </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <!-- flights aminities end here -->
                            </div>
                        <div class="col-md-5 col-sm-5 col-xs-6">
                            <div class="vt-trip">
                                <span class="basic-info ng-scope"  ng-if="Segments.cabinClass == '1'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">
                                   <span ng-if="Segments.cabinCategory != ''">{{Segments.cabinCategory}}-</span>Economy
                                </span>
                                <span ng-if="Segments.cabinClass == '2'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Premium Economy</span>
                                <span ng-if="Segments.cabinClass == '3'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Business</span>
                                <span ng-if="Segments.cabinClass == '4'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">First</span>
                                <span ng-if="Segments.cabinClass == '6'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Basic  Economy</span>
                                <span ng-if="Segments.cabinClass == '7'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Light  Economy</span>
                                <div class="triptime">
                                    <ul>
                                        <li><span title="{{Segments.departureTime | date: 'hh:mm  a'}} {{Segments.departureTime | date: 'EEE,dd MMM'}}">{{Segments.departureTime | date: 'hh:mm  a ' | lowercase}} </span> <i ng-if="Flights.FlexFare == true && $index == 0" title="This is a flexible date" ></i></li>
                                        <li ng-if="!Segments.layoverAirport"><img src="/resources/flight-result/images/loc-dis-icon.png?v1"></li>
                                        <li ng-if="Segments.layoverAirport.split(',').length == 1 && Segments.layoverAirport"><img src="/resources/flight-result/images/loc-dis-icon-1.png?v1"></li>
                                        <li ng-if="Segments.layoverAirport.split(',').length == 2"><img src="/resources/flight-result/images/loc-dis-icon-2.png?v1"></li>
                                        <li ng-if="Segments.layoverAirport.split(',').length == 3"><img src="/resources/flight-result/images/loc-dis-icon-3.png?v1"></li>
                                        <li ng-init="day_count = differenceInDays(Segments.departureTime,Segments.arrivalTime)">{{Segments.arrivalTime | date: 'hh:mm  a '| lowercase}} <sup ng-if="day_count > 0">+{{day_count}}</sup></li>
                                    </ul>
                                </div>
                                <div class="tripdate">
                                    <ul>
                                    <li>{{Segments.departureTime | date: 'EEE,dd MMM'}}</li>
                                    <li>&nbsp;</li>     
                                    <li>{{Segments.arrivalTime | date: 'EEE,dd MMM'}}</li>
                                    </ul>
                                </div>
                                <div class="vt-dest">
                                <ul>
                                        <li class="txt-bold" style="color:{{nearColor(Segments.nearBy)}}" title="{{getCityName(Segments.originAirport)}}, {{getAirportName(Segments.originAirport)}} ({{Segments.originAirport}})"><i class="fa fa-map-marker text-red" ng-if="Segments.nearBy == true" ></i>&nbsp;{{Segments.originAirport}}</li>
                                        <li class="text-center">
                                          <spann ng-if="!Segments.layoverAirport"    style="margin-top:-15px; margin-right:10px;">&nbsp;</spann>
                                          <spann  style="margin-top:-15px; margin-right:10px;" ng-if="Segments.layoverAirport" ng-repeat="layAir in Segments.layoverAirport.split(',')" ng-class="{span_1:Segments.layoverAirport.split(',').length == 1,span_2:Segments.layoverAirport.split(',').length == 2,span_3:Segments.layoverAirport.split(',').length == 3}">{{ layAir }}<!-- <br />56m --></spann>
                                        </li>
                                        <li class="txt-bold" style="color:{{nearColor(Segments.nearByTo)}}" title="{{getCityName(Segments.destinationAirport)}}, {{getAirportName(Segments.destinationAirport)}} ({{Segments.destinationAirport}})"><i class="fa fa-map-marker text-red" ng-if="Segments.nearByTo == true" ></i>&nbsp;{{Segments.destinationAirport}}</li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-md-3 col-sm-2 col-xs-6">
                        <div class="vt-layover">
                        <span class="vt-stop" ng-if="(Segments.techStops-1) == '0'">Non Stop</span>
                        <span class="vt-stop" ng-if="Segments.techStops == null">Non Stop</span> 
                        <span class="vt-stop" ng-if="Segments.techStops == '1\n'">Non Stop</span>
                        <span class="vt-stop" ng-if="(Segments.techStops-1) == '1'">1 Stop</span>
                        <span class="vt-stop" ng-if="(Segments.techStops-1) == '2'">2 Stop</span>
                        <span class="vt-stop-time">{{Flights.Trfd}}</span>
                        </div>
                        
                        </div>
                    </div>
                </div>
                <!--End Return-->
                </div>
                
                  <!-- Desktop depart section end -->
                  <!-- Desktop Return section Start -->
                  <div class="clarfix"></div>
                  <div class="text-center saveprice_discount" ng-init="value = ((filtered[1].PersonFare - filtered[$index].PersonFare) | number:2) == 0.00 ? 0 : (((filtered[1].PersonFare - filtered[$index].PersonFare) | number:2) > 0.00 ? 1 : null)" ng-switch="value"   ng-if="Flights.NearyBy == true || Flights.NearByTo == true || Flights.FlexFare == true || Flights.FlexFareTo == true" > <span  ng-switch-when = "1" ng-if="((Flights.PriceDiff | number:2) != 0.00 )&& ((filtered[1].PersonFare - filtered[$index].PersonFare) > 5) "  class="save">
                    <div class="save_fare"> <i class="fa fa-star"></i> Save <i class="fa fa-{{dollar}}" ></i>{{(filtered[1].PersonFare - filtered[$index].PersonFare) * conversionRatio | number:2}} by selecting this 
                      
                      option! </div>
                    </span> <span ng-switch-default ng-if="((Flights.PriceDiff | number:2) != 0.00 )&& ((filtered[2].PersonFare - filtered[$index].PersonFare) > 5) "  class="save">
                    <div class="save_fare"> <i class="fa fa-star"></i> Save <i class="fa fa-{{dollar}}" ></i>{{(filtered[2].PersonFare - filtered[$index].PersonFare) * conversionRatio | number:2}} by selecting this 
                      
                      option! </div>
                    </span> 
                  </div>       
         <div class="flightdetails-container">
			<ul>
				<li class="hidden-xs"><i class="fa fa-plane" aria-hidden="true"></i> <span class="hideFlightDetails" data-toggle="collapse" data-target="#fltDet_{{$index}}">Flights Details </span></li>
				
				<li><span ng-if="Flights.Airline != 'CCF'" ng-show="OpenPopupWindowcase(Flights.OutSegments)"><i class="fa fa-suitcase" aria-hidden="true"></i> 
                    <a href="javascript: void(0);" ng-click="OpenPopupWindow(Flights.Airline,Flights.OperatingAirline)" >Baggage Fees </a>
                    </span>
                </li>
                
				<li><span   ng-if="Flights.OutSegments[0].baggage.indexOf('0P') > -1"><i class="fa fa-suitcase " aria-hidden="true"></i> <span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: 0P</a> <span class="baggage_detail"><i class="arrow"></i> Hand Luggage Only</span> </span></span>
                    <span class="basic-space-top"  ng-if="Flights.OutSegments[0].baggage != '' && Flights.OutSegments[0].baggage != '0P'"><i class="fa fa-suitcase " aria-hidden="true"></i> <span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: {{Flights.OutSegments[0].baggage}}</a> <span class="baggage_detail"><i class="arrow"></i> The baggage information is for check-in baggage only and is just for reference. Please check with airline before check-in. 1 piece baggage is equivalent to 23 kgs or 50 lbs for adult/child and 10 kgs or 22 lbs for infants</span> </span></span>
                </li>
		    </ul>
		 
            <!-- <span class="basic-info ng-scope"  ng-if="Flights.InMobSegments[0].cabinClass == '1' && Segments.cabinCategory != ''" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">
                <span ng-if="Segments.cabinCategory != ''">{{Segments.cabinCategory}}-</span>Economy<a href="javascript:void(0);" ng-if="Segments.cabinCategory != ''"><i class="fa fa-info"></i></a> 
                <span ng-if="Segments.cabinCategory != ''" class="basic-info_detail left ng-binding"><i class="arrow"></i> <p>Basic Economy is a great choice for travelers who want to save some money. Traveling Basic Economy entails-</p>
                    <ul>
                        <li>No carry-ons other than a small personal item</li>
                        <li>No access to overhead luggage bins</li>
                        <li>No check in baggage (applicable on some airlines)</li>
                        <li>No refunds</li>
                        <li>No seat selection</li>
                    </ul>
                </span> 
            </span> -->
            
            <!-- <span class="norisk-txt">No risk! Book now and cancel online for free with 24 hours.</span> -->             
        </div>
        <div id="fltDet_{{$index}}" class="showFlightDetails  collapse">
       
			  <ul class="nav nav-tabs">
			    <li class="active"><a data-toggle="tab" href="#Depart_Tab_{{$index}}">Departure</a></li>
			    <li ng-show="Flights.InMobSegments.length"><a data-toggle="tab" href="#Return_Tab_{{$index}}">Return</a></li>
			   
			  </ul>
			
			  <div class="tab-content">
			  
			    <div id="Depart_Tab_{{$index}}" class="tab-pane fade in active">
			      
			      <div class="depart-section hidden-xs">
			       
			       <div class="row">
                     <div class="col-sm-12">
                        <div class="lightGray_color total-taxs text-red" ng-if="Flights.FlexFare == true"><i aria-hidden="true" class="fa fa-calendar"></i><b> This is a flexible date, please verify the date.</b></div>
                        
                        <div  class="lightGray_color total-taxs text-red"  ng-if="Flights.NearyBy == true"><i aria-hidden="true" class="fa fa-map-marker"></i><b> This is a Nearby Airport, please verify the Airport.</b></div>
                      </div>
                    </div>
                  
                    <div class="dep-mar"  ng-repeat="Segments in Flights.OutSegments">
                      <div class="connecting_airport"> <span ng-if="Flights.OutSegments[$index-1].destinationAirport != Flights.OutSegments[$index].originAirport && $index>0">Your connecting airport has changed</span> </div>
                      <!-- flight intenary row start-->
                      <div class="row">
                        <!-- flights score start here -->
                        <!-- <div class="col-sm-1">
                          <div class="flight_score_left {{happy_img(Segments.routeScoreAmenity.RouteScore)}}" ng-if="Segments.routeScoreAmenity.RouteScore >= 0" >
                            <div class="flight-score">{{Segments.routeScoreAmenity.RouteScore | number:1}}</div>
                            <img class="flight-score-icon" src="/resources/flight-result/images/route_happy/{{happy_img(Segments.routeScoreAmenity.RouteScore)}}.png" alt="Route Happy">
                            <p>{{Segments.routeScoreAmenity.RouteScoreWord}}</p>
                          </div>
                        </div> -->
                        <!-- flights score end here -->
                        <div class="col-sm-4 col-xs-6" ng-switch on="Segments.displayAirline">
                          <div class="flight-icon">
                            <div ng-switch-default> <img src="/resources/images/airline/{{Segments.displayAirline|lowercase}}.gif" alt="{{getAirlineName(Segments.displayAirline) | lowercase}}" title="{{getAirlineName(Segments.displayAirline) | lowercase}}"></div>
                            <div ng-switch-when="CCF"> <img src="/resources/images/airline/{{Segments.displayAirline|lowercase}}.gif" alt="{{getAirlineName(Segments.displayAirline)}}" title="{{getAirlineName(Segments.displayAirline)}}"></div>
                            <c:if  test="${utmResSource ==  'OffLine'}"> ({{Segments.airline}}-{{Segments.cls}}) </c:if>
                            <div class="major-airline" ng-switch-when="DLL"> <a href="javascript:void(0);"><img src="/resources/images/airline/mal.png"></a> <span class="fare_detail airfare">
                              <p>The airfares offered here are very cheap for which we are not authorized to reveal the name of the airline you select. But once your reservation is confirmed, we will reveal you the carrier's name. We also assure you that you will not be disappointed by the airline and its offer. For further details, review our Terms & Conditions. </p>
                              </span> </div>
                          </div>
                          <div class="airlines">
                            <div class="airlines-name" ng-switch-when="CCF">Call Center Fares Only</div>
                            <div class="airlines-name" ng-switch-when="DLL" >Major Airlines</div>
                            <div class="airlines-name text-capitalize" ng-switch-default>{{getAirlineName(Segments.displayAirline) | lowercase}}</div>
                            <div class="flight-no">Flight No.: <span class="num">{{Segments.flightNo}}</span><span ng-if="Flights.Gds != '9'"> | EQP-{{Segments.aircraftType}} </span><span class="combi-fare" ng-if="Flights.Gds != '9'"> <a href="javascript:void(0);"><i class="fa fa-info" ng-if="Flights.Gds != '9' && Flights.Gds != '4'"></i></a> <span  class="combi_detail left"><i class="arrow"></i> {{getAircraftName(Segments.aircraftType)}}</span> </span>  <br/><span ng-if="trainContain(getAircraftName(Segments.aircraftType))">Note: This is a Train Service</span><span ng-if="busContain(getAircraftName(Segments.aircraftType))">Note: This is a Bus Service</span>
                                                        </div>
                            <div class="flight_operator"  ng-if="Segments.airline != Segments.operatingCarrier" >
                              <div class="text-capitalize" ng-switch on="Segments.operatingCarrier"> <span ng-switch-when="DL">Operated by: {{getAirlineName(Segments.operatingCarrier) | operatedBySplit}} </span> <span ng-switch-default>Operated by: {{getAirlineName(Segments.operatingCarrier) | operatedBySplit}} </span></div>
                              <!-- <div class="col-sm-4" ng-if="Segments.LayoverTime != '00:00'">
			                       <div class="layover"><span><i class="fa fa-clock-o" aria-hidden="true"></i></span> <em>{{Segments.LayoverTime | commaBreak}} layover in {{getCityName(Segments.destinationAirport)}} ({{Segments.destinationAirport}}) </em></div>
			                  </div> -->
                            </div>
                            <!-- flights aminities start here -->
                            <div class="flight_score_right" ng-if="Segments.routeScoreAmenity.RouteScore >= 0" >
                              <ul>
                                <li class="{{entertainment[Segments.routeScoreAmenity.EntertainmentText]}}"> <span class="icon_entertainment"></span>
                                  <div ng-if="entertainment[Segments.routeScoreAmenity.EntertainmentText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_entertainment"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.EntertainmentText}} </div>
                                  </div>
                                </li>
                                <li class="{{food[Segments.routeScoreAmenity.FreshFoodText]}}"> <span class="icon_food"></span>
                                  <div ng-if="food[Segments.routeScoreAmenity.FreshFoodText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_food"></span> </div>
                                    <div  class="right_discription">{{Segments.routeScoreAmenity.FreshFoodText}} </div>
                                  </div>
                                </li>
                                <li class="{{layout[Segments.routeScoreAmenity.LayoutText]}}"> <span class="icon_layout"></span>
                                  <div ng-if="layout[Segments.routeScoreAmenity.LayoutText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_layout"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.LayoutText}} </div>
                                  </div>
                                </li>
                                <li class="{{powerAndUsb[Segments.routeScoreAmenity.PowerText]}}"> <span class="icon_power"></span>
                                  <div ng-if="powerAndUsb[Segments.routeScoreAmenity.PowerText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_power"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.PowerText}} </div>
                                  </div>
                                </li>
                                <li> <span class="icon_seat"></span>
                                  <div class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_seat"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.SeatText}}</div>
                                  </div>
                                </li>
                                <li class="{{wifi[Segments.routeScoreAmenity.WiFiText]}}"> <span class="icon_wifi"></span>
                                  <div ng-if="wifi[Segments.routeScoreAmenity.WiFiText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_wifi"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.WiFiText}} </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <!-- flights aminities end here -->
                          </div>
                        </div>
                        <div class="col-sm-5 col-xs-12">
                          <div class="row">
                            <div class="col-xs-7">
                              <div class="city">
                                <div class="time"> <span title="{{Segments.departureTime | date: 'hh:mm  a'}} {{Segments.departureTime | date: 'EEE,dd MMM'}}">{{Segments.departureTime | date: 'hh:mm  a ' | lowercase}} <span class="date" style="color:{{flexColor(Flights.FlexFare,$index)}}" >{{Segments.departureTime | date: 'EEE,dd MMM'}}</span></span> <i ng-if="Flights.FlexFare == true && $index == 0" title="This is a flexible date" class="fa fa-calendar text-red"></i> </div>
                                <div class="time" title="{{Segments.arrivalTime | date: 'hh:mm  a'}} {{Segments.arrivalTime | date: 'EEE,dd MMM'}}"> {{Segments.arrivalTime | date: 'hh:mm  a '| lowercase}} <span class="date">{{Segments.arrivalTime | date: 'EEE,dd MMM'}}</span> </div>
                              </div>
                            </div>
                            <div class="col-xs-5">
                              <div class="city1">
                                <div class="city-name"><span style="color:{{nearColor(Segments.nearBy)}}" title="{{getCityName(Segments.originAirport)}}, {{getAirportName(Segments.originAirport)}}({{Segments.originAirport}})"><strong>{{Segments.originAirport}}</strong>, {{getAirportName(Segments.originAirport)}}
                                  <!--{{Segments.OriginAirport.AirportName}}-->
                                  </span> &nbsp;<i ng-if="Segments.nearBy == true" class="fa fa-map-marker text-red"></i></div>
                                <div class="city-name" style="color:{{nearColor(Segments.nearByTo)}}" title="{{getCityName(Segments.destinationAirport)}}, {{getAirportName(Segments.destinationAirport)}}({{Segments.destinationAirport}})"><strong>{{Segments.destinationAirport}}</strong>, {{getAirportName(Segments.destinationAirport)}}
                                  <!--, {{Segments.DestinationAirport.AirportName}}-->
                                  &nbsp; <i ng-if="Segments.nearByTo == true" class="fa fa-map-marker text-red"></i> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3 col-xs-6">
                          <div class="class text-right">
                            <div class="class-stop"> <strong> <span ng-if="Segments.techStops == '0'">Non Stop</span> <span ng-if="Segments.techStops == null">Non Stop</span> <span ng-if="Segments.techStops == '1\n'">Non Stop</span> <span class="one-stop-air" ng-if="Segments.techStops == '1'"> <b>One Stop</b> <span class="one-stop-air-hover popover left" ng-repeat="tech in Segments.techStopDetails"><i class="icon icon-arrow arrow"></i> <strong>Stops In</strong> <span> {{tech.OriginAirport}}-{{getAirportName(tech.OriginAirport)}}</span><br>
                              <small>Arr {{tech.ArrivalTime | date: 'hh:mm  a'}} </small> - <small>Dep {{tech.DepartureTime | date: 'hh:mm  a'}} </small>
                              <!-- <em>{{tech.StopDuration | time:'mm':'hhh mmm':false}} </em> -->
                              </span> </span> </span> <span ng-if="Segments.techStops == '2'"><b>Two Stop</b> <span class="one-stop-air-hover popover left" ng-repeat="tech in Segments.techStopDetails"><i class="icon icon-arrow arrow"></i> <strong>Stops In</strong> <span> {{tech.OriginAirport}}-{{getAirportName(tech.OriginAirport)}}</span><br>
                              <small>Arr {{tech.ArrivalTime | date: 'hh:mm  a'}} </small> - <small>Dep {{tech.DepartureTime | date: 'hh:mm  a'}} </small>
                              <!-- <em>{{tech.StopDuration | time:'mm':'hhh mmm':false}} </em> -->
                              </span> </span> </span></strong>
                              
                                <div class="basic-class">
                                <span class="basic-info ng-scope"  ng-if="Segments.cabinClass == '1'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">
                                   <span ng-if="Segments.cabinCategory != ''">{{Segments.cabinCategory}}-</span>Economy<a href="javascript:void(0);" ng-if="Segments.cabinCategory != ''"><i class="fa fa-info"></i></a> 
                                   <span ng-if="Segments.cabinCategory != ''" class="basic-info_detail left ng-binding"><i class="arrow"></i> <p>Basic Economy is a great choice for travelers who want to save some money. Traveling Basic Economy entails-</p>
	                                <ul>
								<li ng-if="Segments.displayAirline != 'AA'">No carry-ons other than a small personal item</li>
								<li ng-if="Segments.displayAirline == 'AA'">One carry-on item with small personal item allowed</li>
								<li ng-if="Segments.displayAirline == 'AA'">The carry-on item must fit in the overhead bin (Size: 56 x 36 x 23 cm)</li>
								<li ng-if="Segments.displayAirline == 'AA'">The personal item must fit under the seat (Size:45 x 35 x 20 cm)</li>
								<li ng-if="Segments.displayAirline != 'AA'">No access to overhead luggage bins</li>
								<li>No check in baggage allowed</li>
								<li>No refunds</li>
								<li>No seat selection</li>
								</ul>
	                                </span> 
	                            </span>
                                <span ng-if="Segments.cabinClass == '2'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Premium Economy</span>
                                <span ng-if="Segments.cabinClass == '3'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Business</span>
                                <span ng-if="Segments.cabinClass == '4'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">First</span>
                                <span ng-if="Segments.cabinClass == '6'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Basic  Economy</span>
                                <span ng-if="Segments.cabinClass == '7'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Light  Economy</span> 
                                
                                
                                <span class="trip-time" ng-if="(Flights.Gds == '1' || Flights.Gds == '0') && Segments.flightDuration != '0'" > / {{Segments.flightDuration | time:'mm':'hhh mmm':false}} </span> 
                              
                              </div>
                              <div class="basic-space-top"  ng-if="Segments.baggage.indexOf('0P') > -1"><i class="fa fa-suitcase text-red" aria-hidden="true"></i> <span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: 0P</a> <span class="baggage_detail"><i class="arrow"></i> Hand Luggage Only</span> </span></div>
                               <div class="basic-space-top"  ng-if="Segments.baggage != '' && Segments.baggage != '0P'"><i class="fa fa-suitcase text-red" aria-hidden="true"></i> <span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: {{Segments.baggage}}</a> <span class="baggage_detail"><i class="arrow"></i> The baggage information is for check-in baggage only and is just for reference. Please check with airline before check-in. 1 piece baggage is equivalent to 23 kgs or 50 lbs for adult/child and 10 kgs or 22 lbs for infants</span> </span></div>
                               <!-- <div class="basic-space-top"  ng-if="Segments.baggage.indexOf('24P') > -1" title="Hand Luggage Only {{Segments.baggage}}"><i class="fa fa-suitcase text-red" aria-hidden="true"></i> Baggage: {{Segments.baggage}} </div>-->
                              
                              </div>
                          </div>
                        </div>
                      </div> 
                      <div class="row"> <span class="layovertimediv" ng-if="Segments.layoverTime != '00:00' "><i class="fa fa-clock-o" aria-hidden="true"></i> <em>{{Segments.layoverTime | commaBreak}} layover in {{getCityName(Segments.destinationAirport)}} ({{Segments.destinationAirport}})</em></span> </div>
                    </div>
                    <ul class="layover_time" >
                      
                      <li>Flight Time : {{Flights.Tft}}</li>
                      <!-- <li ng-if="Flights.Lot != '0h 0m'">Layover Time : {{Flights.Lot}}</li> -->
                      <li>Total Trip Time : {{Flights.Tfd}}</li>
                    </ul>
                  </div>
			    </div>
			    
			    <div id="Return_Tab_{{$index}}" class="tab-pane fade">
			   
			   <div class="row">
                     <div class="col-sm-12">
                        <div class="lightGray_color total-taxs text-red" ng-if="Flights.FlexFare == true "><i aria-hidden="true" class="fa fa-calendar"></i><b> This is a flexible date, please verify the date.</b></div>
                        
                        <div  class="lightGray_color total-taxs text-red"  ng-if="Flights.NearyBy == true "><i aria-hidden="true" class="fa fa-map-marker"></i><b> This is a Nearby Airport, please verify the Airport.</b></div>
                      </div>
                    </div>
			      <div class="return-section hidden-xs" ng-repeat="Segments in (Flights.InSegments | limitTo: -1)"> <span ng-if="Flights.InSegments[$index-1].destinationAirport != Flights.InSegments[$index].originAirport && $index>0">Your connecting airport has changed</span>

                    <div class="dep-mar"  ng-repeat="Segments in  Flights.InSegments">
                     <div class="connecting_airport"> <span ng-if="Flights.InSegments[$index-1].destinationAirport != Flights.InSegments[$index].originAirport && $index>0">Your connecting airport has changed</span> </div>
                      <div class="row">
                        <!-- flights score start here 
                        <div class="col-sm-1">
                          <div class="flight_score_left {{happy_img(Segments.routeScoreAmenity.RouteScore)}}" ng-if="Segments.routeScoreAmenity.RouteScore >= 0" >
                            <div class="flight-score">{{Segments.routeScoreAmenity.RouteScore | number:1}}</div>
                            <img class="flight-score-icon" src="/resources/flight-result/images/route_happy/{{happy_img(Segments.routeScoreAmenity.RouteScore)}}.png" alt="Route Happy">
                            <p>{{Segments.routeScoreAmenity.RouteScoreWord}}</p>
                          </div>
                        </div>-->
                        <!-- flights score end here -->
                        <div class="col-sm-4 col-xs-6" ng-switch on="Segments.displayAirline">
                          <div class="flight-icon">
                            <div ng-switch-default> <img src="/resources/images/airline/{{Segments.displayAirline|lowercase}}.gif" alt="{{getAirlineName(Segments.displayAirline) | lowercase}}" title="{{getAirlineName(Segments.displayAirline) | lowercase}}"></div>
                            <div ng-switch-when="CCF"> <img src="/resources/images/airline/{{Segments.displayAirline|lowercase}}.gif" alt="{{getAirlineName(Segments.displayAirline)}}" title="{{getAirlineName(Segments.displayAirline)}}"></div>
                            <c:if  test="${utmResSource ==  'OffLine'}"> ({{Segments.airline}}-{{Segments.cls}}) </c:if>
                            <div class="major-airline" ng-switch-when="DLL"> <a href="javascript:void(0);"><img src="/resources/images/airline/mal.png"></a></a> <span class="fare_detail airfare">
                              <p>The airfares offered here are very cheap for which we are not authorized to reveal the name of the airline you select. But once your reservation is confirmed, we will reveal you the carrier's name. We also assure you that you will not be disappointed by the airline and its offer. For further details, review our Terms & Conditions. </p>
                              </span> </div>
                          </div>
                          <div class="airlines">
                            <div class="airlines-name" ng-switch-when="CCF">Call Center Fares Only</div>
                            <div class="airlines-name" ng-switch-when="DLL" >Major Airlines</div>
                            <div class="airlines-name text-capitalize" ng-switch-default>{{getAirlineName(Segments.displayAirline) | lowercase}}</div>
                            <div class="flight-no">Flight No.: <span class="num">{{Segments.flightNo}}</span><span ng-if="Flights.Gds != '9'"> | EQP-{{Segments.aircraftType}} </span><span class="combi-fare" ng-if="Flights.Gds != '9'"> <a href="javascript:void(0);"><i class="fa fa-info" ng-if="Flights.Gds != '9' && Flights.Gds != '4'"></i></a> <span  class="combi_detail left"><i class="arrow"></i> {{getAircraftName(Segments.aircraftType)}}</span> </span> <br/> <span ng-if="trainContain(getAircraftName(Segments.aircraftType))">Note: This is a Train Service</span><span ng-if="busContain(getAircraftName(Segments.aircraftType))">Note: This is a Bus Service</span>  </div>
                            <div class="flight_operator flight-no text-capitalize" ng-if="Segments.airline != Segments.operatingCarrier">
                              <div ng-switch on="Segments.operatingCarrier"> <span ng-switch-when="DL">Operated by: {{getAirlineName(Segments.operatingCarrier) | operatedBySplit}} </span> <span ng-switch-default>Operated by: {{getAirlineName(Segments.operatingCarrier) | operatedBySplit}}</span></div>
                              <!--  <div class="col-sm-4 text-center" ng-if="Segments.LayoverTime != '00:00'">
                           <div class="layover"><span><i class="fa fa-clock-o" aria-hidden="true"></i></span> <em>{{Segments.LayoverTime | commaBreak}} layover in {{getCityName(Segments.destinationAirport)}} ({{Segments.destinationAirport}})</em></div>
                         </div> -->
                            </div>
                            <!-- flights aminities start here -->
                            <div class="flight_score_right" ng-if="Segments.routeScoreAmenity.RouteScore >= 0" >
                              <ul>
                                <li class="{{entertainment[Segments.routeScoreAmenity.EntertainmentText]}}"> <span class="icon_entertainment"></span>
                                  <div ng-if="entertainment[Segments.routeScoreAmenity.EntertainmentText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_entertainment"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.EntertainmentText}} </div>
                                  </div>
                                </li>
                                <li class="{{food[Segments.routeScoreAmenity.FreshFoodText]}}"> <span class="icon_food"></span>
                                  <div ng-if="food[Segments.routeScoreAmenity.FreshFoodText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_food"></span> </div>
                                    <div class="right_discription">{{Segments.routeScoreAmenity.FreshFoodText}} </div>
                                  </div>
                                </li>
                                <li class="{{layout[Segments.routeScoreAmenity.LayoutText]}}"> <span class="icon_layout"></span>
                                  <div ng-if="layout[Segments.routeScoreAmenity.LayoutText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_layout"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.LayoutText}} </div>
                                  </div>
                                </li>
                                <li class="{{powerAndUsb[Segments.routeScoreAmenity.PowerText]}}"> <span class="icon_power"></span>
                                  <div ng-if="powerAndUsb[Segments.routeScoreAmenity.PowerText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_power"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.PowerText}} </div>
                                  </div>
                                </li>
                                <li> <span class="icon_seat"></span>
                                  <div class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_seat"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.SeatText}}</div>
                                  </div>
                                </li>
                                <li class="{{wifi[Segments.routeScoreAmenity.WiFiText]}}"> <span class="icon_wifi"></span>
                                  <div ng-if="wifi[Segments.routeScoreAmenity.WiFiText] != 'disable'" class="aminities_detail row-flex">
                                    <div class="left"> <span class="icon_wifi"></span> </div>
                                    <div class="right_discription"> {{Segments.routeScoreAmenity.WiFiText}} </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <!-- flights aminities end here -->
                          </div>
                        </div>
                        <div class="col-sm-5 col-xs-12">
                          <div class="row">
                            <div class="col-xs-7">
                              <div class="city">
                                <div class="time"><span title="{{Segments.departureTime | date: 'hh:mm  a'}} {{Segments.departureTime | date: 'EEE,dd MMM'}}">{{Segments.departureTime | date: 'hh:mm  a'| lowercase}} <span class="date" style="color:{{flexColor(Flights.FlexFareTo,$index)}}">{{Segments.departureTime | date: 'EEE,dd MMM'}}</span></span> <i ng-if="Flights.FlexFareTo == true && $index == 0" title="This is a flexible date" class="fa fa-calendar text-red"></i> </div>
                                <div class="time" title="{{Segments.arrivalTime | date: 'hh:mm  a'}} {{Segments.arrivalTime | date: 'EEE,dd MMM'}}">{{Segments.arrivalTime | date: 'hh:mm  a'| lowercase}} <span class="date">{{Segments.arrivalTime | date: 'EEE,dd MMM'}}</span></div>
                              </div>
                            </div>
                            <div class="col-xs-5">
                              <div class="city1">
                                <div class="city-name"> <span style="color:{{nearColor(Segments.nearBy)}}" title="{{getCityName(Segments.originAirport)}}, {{getAirportName(Segments.originAirport)}}({{Segments.originAirport}})"><strong>{{Segments.originAirport}}</strong>, {{getAirportName(Segments.originAirport)}}</span>
                                  <!--, {{Segments.OriginAirport.AirportName}}-->
                                  <i ng-if="Segments.nearBy == true" class="fa fa-map-marker text-red"></i></div>
                                <div class="city-name" style="color:{{nearColor(Segments.nearByTo)}}" title="{{getCityName(Segments.destinationAirport)}}, {{getAirportName(Segments.destinationAirport)}}({{Segments.destinationAirport}})"> <strong>{{Segments.destinationAirport}}</strong>, {{getAirportName(Segments.destinationAirport)}} <i ng-if="Segments.nearByTo == true" class="fa fa-map-marker text-red"></i>
                                  <!--, {{Segments.DestinationAirport.AirportName}} -->
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3 col-xs-6">
                          <div class="class text-right">
                            <div class="class-stop"> <strong><span ng-if="Segments.techStops == '0'">Non Stop</span><span ng-if="Segments.techStops == null">Non Stop</span> <span ng-if="Segments.techStops == '1\n'">Non Stop</span> <span class="one-stop-air"  ng-if="Segments.techStops == '1'"><b>One Stop</b> <span class="one-stop-air-hover popover left" ng-repeat="tech in Segments.techStopDetails"><i class="icon icon-arrow arrow"></i> <strong>Stops In</strong> <span> {{tech.OriginAirport}}-{{getAirportName(tech.OriginAirport)}}</span><br>
                              <small>Arr {{tech.ArrivalTime | date: 'hh:mm  a'}} </small> - <small>Dep {{tech.DepartureTime | date: 'hh:mm  a'}} </small>
                              <!-- <em>{{tech.StopDuration | time:'mm':'hhh mmm':false}} </em> -->
                              </span> </span> <span ng-if="Segments.techStops == '2'"><b>Two Stop</b> <span class="one-stop-air-hover popover left" ng-repeat="tech in Segments.techStopDetails"><i class="icon icon-arrow arrow"></i> <strong>Stops In</strong> <span> {{tech.OriginAirport}}-{{getAirportName(tech.OriginAirport)}}</span><br>
                              <small>Arr {{tech.ArrivalTime | date: 'hh:mm  a'}} </small> - <small>Dep {{tech.DepartureTime | date: 'hh:mm  a'}} </small>
                              <!-- <em>{{tech.StopDuration | time:'mm':'hhh mmm':false}} </em> -->
                              </span> </span> </span></strong>

                                <div class="basic-class">
                                    <span class="basic-info ng-scope"  ng-if="Segments.cabinClass == '1'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}"><span ng-if="Segments.cabinCategory != ''">{{Segments.cabinCategory}}-</span>Economy<a href="javascript:void(0);" ng-if="Segments.cabinCategory != ''"><i class="fa fa-info"></i></a> <span ng-if="Segments.cabinCategory != ''" class="basic-info_detail left ng-binding"><i class="arrow"></i> <p>Basic Economy is a great choice for travelers who want to save some money. Traveling Basic Economy entails-</p>
                                    
                                    <ul>
								<li ng-if="Segments.displayAirline != 'AA'">No carry-ons other than a small personal item</li>
								<li ng-if="Segments.displayAirline == 'AA'">One carry-on item with small personal item allowed</li>
								<li ng-if="Segments.displayAirline == 'AA'">The carry-on item must fit in the overhead bin (Size: 56 x 36 x 23 cm)</li>
								<li ng-if="Segments.displayAirline == 'AA'">The personal item must fit under the seat (Size:45 x 35 x 20 cm)</li>
								<li ng-if="Segments.displayAirline != 'AA'">No access to overhead luggage bins</li>
								<li>No check in baggage allowed</li>
								<li>No refunds</li>
								<li>No seat selection</li>
								</ul></span> </span>
                                    
                                    <span ng-if="Segments.cabinClass == '2'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}"><span ng-if="Segments.cabinCategory != ''">{{Segments.cabinCategory}}-</span>Premium Economy </span><span ng-if="Segments.cabinClass == '3'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Business</span><span ng-if="Segments.cabinClass == '4'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">First</span><span ng-if="Segments.cabinClass == '6'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Basic Economy</span><span ng-if="Segments.cabinClass == '7'" ng-class="{'coach-hilight': Flights.BookingClass != Segments.cabinClass}">Light Economy</span>  <span class="trip-time" ng-if="(Flights.Gds == '1' || Flights.Gds == '0') && Segments.flightDuration != '0'" > / {{Segments.flightDuration | time:'mm':'hhh mmm':false}} </span> 
                                </div>
                             <div class="basic-space-top"  ng-if="Segments.baggage.indexOf('0P') > -1"><i class="fa fa-suitcase text-red" aria-hidden="true"></i> <span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: 0P</a> <span class="baggage_detail"><i class="arrow"></i> Hand Luggage Only</span> </span></div>
                             <div class="basic-space-top"  ng-if="Segments.baggage != '' && Segments.baggage != '0P'"><i class="fa fa-suitcase text-red" aria-hidden="true"></i> <span class="baggage-info"><a href="javascript:void(0);">Check-in Baggage: {{Segments.baggage}}</a> <span class="baggage_detail"><i class="arrow"></i> The baggage information is for check-in baggage only and is just for reference. Please check with airline before check-in. 1 piece baggage is equivalent to 23 kgs or 50 lbs for adult/child and 10 kgs or 22 lbs for infants</span> </span></div>
                            
                               <!-- <div class="basic-space-top"  ng-if="Segments.baggage.indexOf('24P') > -1" title="Hand Luggage Only {{Segments.baggage}}"><i class="fa fa-suitcase text-red" aria-hidden="true"></i> Baggage: {{Segments.baggage}} </div>-->
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--layover -->
                      <div class="row">
                        <div class="col-sm-12"> <span class="layovertimediv" ng-if="Segments.layoverTime != '00:00' "><i class="fa fa-clock-o" aria-hidden="true"></i> <em>{{Segments.layoverTime | commaBreak}} layover in {{getCityName(Segments.destinationAirport)}} ({{Segments.destinationAirport}})</em></span> </div>
                      </div>
                      <!--layover -->
                    </div>
                    <ul class="layover_time" >
                      
                      <li>Flight Time : {{Flights.Trft}}</li>
                      <!-- <li ng-if="Flights.Lrot != '0h 0m'">Layover Time : {{Flights.Lrot}}</li> -->
                      <li>Total Trip Time : {{Flights.Trfd}}</li>
                    </ul>
                  </div>
			    </div>
			  
			  </div>

        
        </div>
                </div>
                <!-- Desktop Return section end -->
                <!-- Mobile Section Start here -->
                <div class="mobile_results">
                <div class="final-total-price text-right" ng-if="Flights.IsPriceChanged"> <span class="tickets update-price"> Updated Price</span></div>
                  <!--Mobile depart section Start -->
                  <div class="visible-xs" ng-click="movePaymentPages(Flights.FlightId,Flights.OutSegments[0].displayAirline,'<c:out value='${tollFree}' />')">
                    <div ng-repeat="Segments in Flights.OutMobSegments" >
                      <div class="row">
                        <div class="col-xs-7">
                          <div class="flight-icon" ng-switch on="Segments.displayAirline">
                            <div class="flight-icon" ng-switch-default> <img src="/resources/images/airline/{{Segments.displayAirline|lowercase}}.gif" alt="{{getAirlineName(Segments.displayAirline) | lowercase}}" title="{{getAirlineName(Segments.displayAirline) | lowercase}}"></div>
                            <div class="flight-icon" ng-switch-when="CCF"> <img src="/resources/images/airline/{{Segments.displayAirline|lowercase}}.gif" alt="{{getAirlineName(Segments.displayAirline)}}" title="{{getAirlineName(Segments.displayAirline)}}"></div>
                            <div class="flight-icon major-airline" ng-switch-when="DLL"> <img src="/resources/images/airline/mal.png"></div>
                          </div>
                          <div class="airlines">
                            <div class="airlines-name" ng-if="Segments.displayAirline == 'CCF'">Call Center Fares Only</div>
                            <div class="airlines-name text-capitalize" ng-if="Segments.displayAirline != 'CCF'"><strong>{{getAirlineName(Segments.displayAirline) | lowercase}}</strong></div>
                          </div>
                          <span class="combi-fare"  ng-if="Flights.isFusionFare === true"> ComboFare &nbsp;<a href="javascript:void(0);"><i class="fa fa-info"></i></a>
                          <!--  <span class="combi_detail left">
                    
                    <i class="arrow"></i> 
                    
                  <p>Your fare is a combination of two one-way tickets,each subject to its own rules and restrictions.Any change or cancelation in any flight would not alter the other one.Changes to the other flight may incur a charge.</p>

              </span> -->
                          </span> </div>
                        <div class="col-xs-5">
                          <div class="mobile-price text-right">
                            <div  ng-if="Flights.Airline != 'CCF'"> 
                              <span class="partial-price total-fare" ng-if="Flights.Airline != 'AS'" ><i class="fa fa-{{dollar}}" ></i>{{Flights.PersonFare * conversionRatio | number:2}}</span> <span class="partial-price total-fare" ng-if="Flights.Airline == 'AS'"><i class="fa fa-{{dollar}}" ></i>{{(Flights.PersonFare)* conversionRatio | number:2}}</span> <i class="fa fa-chevron-right mobile_price_arrow" aria-hidden="true"></i>
                              <div style="margin-top:-8px; color:#999;"><small>Price per adult</small></div>
                            
                            </div>
                            <a class="select-flight-btn" ng-if="Flights.Airline == 'CCF'" href="tel:<c:out value='${tollFree}' />"><i class="fa fa-phone" aria-hidden="true"></i> Call </a> 
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xs-4 text-left"> <i class="fa fa-long-arrow-right pull-right time-top" aria-hidden="true"></i>
                          <div class="city">
                            <div class="city-name"><strong>{{Segments.originAirport}}</strong> <span>{{Segments.departureTime | date: 'hh:mm  a' | lowercase}}</span> </div>
                            <div class="time"> <span class="date">{{Segments.departureTime | date: 'EEE,dd MMM'}}</span> </div>
                          </div>
                        </div>
                        <div class="col-xs-4 text-left">
                          <div class="city1">
                            <div class="city-name"><strong>{{Segments.destinationAirport}}</strong> <span>{{Segments.arrivalTime | date: 'hh:mm  a' | lowercase}}</span></div>
                          </div>
                        </div>
                        <div class="col-xs-4 text-right">
                          <div class="time-top"><span ng-if="Segments.techStops == '0'">Non Stop</span><span ng-if="Segments.techStops == '1'">Non Stop</span><span ng-if="Segments.techStops == null">Non Stop</span><span ng-if="Segments.techStops == '1\n'">Non Stop</span><span ng-if="Segments.techStops > '1'" class="one-stop-air">{{Segments.techStops-1}} Stop</span>, <span class="flight_time_mobile" ng-repeat="Segments in Flights.SegmentsFull | filter:{ IsReturnFlight: false} | limitTo: -1"> {{Flights.Tfd}} </span> </div>
                        </div>
                      </div>
                    </div>
                    <!--<div class="col-sm-12 text-center" ng-if="Flights.NearyBy == true || Flights.NearByTo == true || Flights.FlexFare == true || Flights.FlexFareTo == true">
                    <span ng-if="(Flights.PriceDiff | number:2) != 0.00" style="background: #d2f2d6;padding: 2px 9px;border-radius: 15px;color: #32773b;font-size: 11px;">
                      <i class="fa fa-map-marker"></i> Save $ {{Flights.PriceDiff | number:2 }} by selecting this 
                    
                      </span>                   </div>-->
                  </div>
                  <!-- Mobile depart section end -->
                  <!--Mobile return section Start -->
                  <div class="visible-xs">
                    <div ng-repeat="Segments in Flights.InMobSegments">
                      <div class="row">
                        <div class="col-xs-4"> <i class="fa fa-long-arrow-right pull-right visible-xs time-top" aria-hidden="true"></i>
                          <div class="city">
                            <div class="city-name"><strong>{{Segments.originAirport}}</strong> <span>{{Segments.departureTime | date: 'hh:mm  a' | lowercase}}</span></div>
                            <div class="time"> <span class="date">{{Segments.departureTime | date: 'EEE,dd MMM'}}</span> </div>
                          </div>
                        </div>
                        <div class="col-xs-4 text-left">
                          <div class="city1">
                            <div class="city-name"><strong>{{Segments.destinationAirport}}</strong> <span>{{Segments.arrivalTime | date: 'hh:mm  a' | lowercase}}</span> </div>
                          </div>
                        </div>
                        <div class="col-xs-4 text-right">
                          <div class="time-top"> <span ng-if="Segments.techStops == '0'">Non Stop</span><span ng-if="Segments.techStops == '1'">Non Stop</span><span ng-if="Segments.techStops == null">Non Stop</span><span ng-if="Segments.techStops == '1\n'">Non Stop</span><span ng-if="Segments.techStops > '1'" class="one-stop-air"> {{Segments.techStops-1}} Stop</span>, <span class="flight_time_mobile" ng-repeat="Segments in Flights.SegmentsFull | filter:{ IsReturnFlight: true} | limitTo: -1"> {{Flights.Trfd}} </span> </div>
                        </div>
                        <div class="clearfix"></div>
                        <!-- <div class="col-sm-12" ng-if="Segments.airline != Segments.operatingCarrier">
                            <div class="layover" style="text-transform: capitalize;"><span><i class="fa fa-info-circle"></i></span> <em>Outbound Operated by {{Segments.operatingCarrier | lowercase}} </em></div>
                        </div>
                        <div class="col-sm-12" ng-if="Segments.airline != Segments.operatingCarrier">
                            <div class="layover" style="text-transform: capitalize;"><span><i class="fa fa-info-circle"></i></span> <em>Inbound Operated by {{Segments.operatingCarrier | lowercase}} </em></div>
                        </div> -->
                      </div>
                      <div class="col-xs-12 ">
                        <div class="lightGray_color total-taxs text-red" ng-if="Flights.FlexFare == true || Flights.FlexFareTo == true"> <i class="fa fa-calendar"></i> This is a flexible date, please verify the date.</div>
                        <div  class="lightGray_color total-taxs text-red"  ng-if="Flights.NearyBy == true || Flights.NearByTo == true"> <i class="fa fa-map-marker"></i> This is a Nearby Airport, please verify the Airport.</div>
                      </div>
                    </div>
                  </div>
                  <!-- Mobile return section end -->
                </div>
                <!-- Mobile Section end here -->
              </div>
              <!-- Result Block End -->
              <!--  <div  class="no-padding"  ng-if="($index+1) % 5 === 0">
                <div class="results_add hidden-xs"> <img src="/resources/flight-result/images/lounge-access.jpg" alt="lounge Pass"/> </div>
                <div class="results_add visibal-xs hidden-sm hidden-md hidden-lg"> <a href="tel:1-866-218-1529"><img src="/resources/flight-result/images/mob-lounge-access.gif" alt="lounge Pass" style="width:100%;" class="img-responsive"/></a> </div>
              </div>-->
              
             <!-- <c:if test="${searchListWrapper[0].pageType=='home' || searchListWrapper[0].pageType=='airlinepage' || searchListWrapper[0].pageType=='citypage'}">
         <div class="visa_listing_banner" style="margin-bottom:20px;" ng-if="$index == 1">
                <a href="https://www.visahq.com/?a_aid=vaff11679" onClick="ga('send', 'event', { eventCategory: 'visa banner', eventAction: 'click', eventLabel: 'listing'});" target="_blank"><img src="https://www.visahq.com/banners/visahq-648x60-v4.gif" title="" border="0" /></a>
               </div>
               </c:if>
               -->
             <!--  <c:forEach items="${searchListWrapper}" var="search" varStatus="mb" >
        <c:choose>
        
          <c:when test="${search.pageType=='home'}">
            
         
                        <div  class="no-padding" style="margin-bottom: 16px;" ng-if="$index == 2">
                                <div class="results_add hidden-xs" style="margin-top:0px;"> <a href="/car-supplier/{{showBanners}}" onclick="callAPI('C-H-LSUB','3');" target="_blank"> <img src="/resources/car/images/banner/{{showBanners}}-Banner.jpg" class="img-responsive"/> </a> </div>
                                <div class="results_add visibal-xs hidden-sm hidden-md hidden-lg" style="margin-top: 0px;">  <a href="/car-supplier/{{showBanners}}" onclick="callAPI('C-H-LSUB','3');" target="_blank"> <img src="/resources/car/images/banner/{{showBanners}}-Banner.jpg" class="img-responsive"/> </a></div>
                            </div>
                     </c:when>
          <c:otherwise>
                            <div  class="no-padding" style="margin-bottom: 16px;" ng-if="(($index+1) % 3 === 0 || $index === 0) && searchstatus != 'x'">
                                <div class="results_add hidden-xs" style="margin-top:0px;"> <img src="/resources/flight-result/images/banner/{{showairlineBanners}}.jpg" class="img-responsive"/>  </div>
                                <div class="results_add visibal-xs hidden-sm hidden-md hidden-lg" style="margin-top: 0px;">   <img src="/resources/flight-result/images/banner/{{showairlineBanners}}.jpg" class="img-responsive"/> </div>
                            </div>
          </c:otherwise>
          </c:choose>     
       </c:forEach>         -->
            </div>
          </div>
          <!--  <div  class="no-padding"  ng-if="($index+1) % 5 === 0">
                    <div class="result hidden-xs">
                        <img src="/resources/flight-result/images/lounge-access.jpg" alt="lounge Pass" class="img-responsive"/>
                    </div>
            
            <div class="result visibal-xs hidden-sm hidden-md hidden-lg">
            <a href="tel:1-866-218-1529"><img src="/resources/flight-result/images/mob-lounge-access.gif" alt="lounge Pass" style="width:100%;" class="img-responsive"/></a>
            </div>
            </div> -->
          <!--   <div class="text-center">
            <dir-pagination-controls
                    max-size="5"
                    direction-links="true"
                    on-page-change="backToTop()"
                    boundary-links="true" >
             </dir-pagination-controls>
                
         </div>-->
          
          <div class="clearfix"></div>
          <div class="row" ng-show="list.length" id="loadmore">
            <div class="col-sm-12 more_results"   ng-show="hasMoreItemsToShow() && filtered.length >= 10" style="cursor:pointer;" ng-click="showMoreItems()">Load More Results</div>
          </div>
        </div>
        <!--Results End Here -->
        <!--Rights End Here -->
        <!--Rights Start Here -->
        <div id="right" class="myClass" >
          <!-- <div class="email-alertbox">
            <form name="signupForm" ng-submit="signup()">
              <div class="head">Get an alert when the price drops</div>
              <div class="email-enter">
                <input ng-model="email" class="form-control inpt_cont" type="email"  ng-pattern="/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/" placeholder="Enter your email address" required/>
              </div>
              <button type="submit" class="subscribe-btn2" title="Price Drops Alert">Subscribe</button>
            </form>
          </div> -->
          <div class="email-alertbox">
            <div class="head">Book with Confidence</div>
            <ul class="content-list">
              <li>Best Purchase Guarantee!</li>
              <li>All discounts Updated Daily</li>
              <li>24*7 Customer Service</li>
              <li>Protected & Safe Booking</li>
            </ul>
          </div>
          
          <!--Trustpilot start here  -->
                    <div class="trustpilotDiv">
                        <img src="/resources/images/travel-plan/trust-pilot.png" alt="TrustPilot">
                    
                    <c:if test="${trustPilotResponse.trustPilotStars == '1'}">
                            <c:set var="starRating" value="one" />
                            </c:if>
                            <c:if test="${trustPilotResponse.trustPilotStars == '2'}">
                            <c:set var="starRating" value="two" />
                            </c:if>
                            <c:if test="${trustPilotResponse.trustPilotStars == '3'}">
                            <c:set var="starRating" value="three" />
                            </c:if>
                            <c:if test="${trustPilotResponse.trustPilotStars == '4'}">
                            <c:set var="starRating" value="four" />
                            </c:if>
                            <c:if test="${trustPilotResponse.trustPilotStars == '5'}">
                            <c:set var="starRating" value="five" />
                            </c:if>
                            
                            
                        <div class="tp-rating bigStar ${starRating}">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        <div class="ratingText">${trustPilotResponse.reviewsRatingDesc}</div>
                        <div class="reviewText">${trustPilotResponse.totalReviews} reviews</div>
                    </div>
                    
                    <!--TP Review -->
                    <div class="wrapper-reviews">
                        <div class="tp-widget-review">
                        <c:forEach items="${trustPilotResponse.trustPilotReviews}" var="trust" varStatus="mb" begin="0" end="4" >
                        <div class="block">
                            <div class="tp-name">${trust.customerName}</div>
                            
                            <time class="tp-time">${trust.reviewJustBefore}</time>
                            
                            <c:if test="${trust.stars == '1'}">
                            <c:set var="starRating" value="one" />
                            </c:if>
                            <c:if test="${trust.stars == '2'}">
                            <c:set var="starRating" value="two" />
                            </c:if>
                            <c:if test="${trust.stars == '3'}">
                            <c:set var="starRating" value="three" />
                            </c:if>
                            <c:if test="${trust.stars == '4'}">
                            <c:set var="starRating" value="four" />
                            </c:if>
                            <c:if test="${trust.stars == '5'}">
                            <c:set var="starRating" value="five" />
                            </c:if>
                            
                            <div class="tp-rating ${starRating}">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            
                            <div class="tp-title">${trust.reviewsTitle}</div>
                            
                            <p>${trust.reviewsText}</p>
                            
                            <a href="javascript:void(0);" class="readmore">Read more</a>
                            </div>
                            </c:forEach>
                            
                        </div>
                    </div>
                    
                    <!-- Trustpilot End here  -->
                    
          <%--  <div id="stickeradd" class="ad-box">
           <img src="/resources/flight-result/images/result-bnr.gif?03072017" alt="Easiest Way to Book Flight - <c:out value='${tollFree}' />">
           <div class="ad-toll-free"><c:out value='${tollFree}' /></div>
            </div> --%>
        <!--   <div class="ad-box"> <img src="/resources/flight-result/images/result-bnr.gif?03072017" alt="Lounge Access"> </div>-->
          <c:forEach items="${searchListWrapper}" var="search" varStatus="mb" >
        <c:choose>
          <c:when test="${search.pageType=='home'}">
            <div class="ad-box"> <a href="/cars" onClick="callAPI('L-F-BNPL','3');" target="_blank"><img src="/resources/flight-result/images/car-add.jpg" alt="Car Booking" border="0"> </a></div>
        
          </c:when>
          <c:otherwise>  <div class="ad-box"><img src="/resources/flight-result/images/car-add.jpg" alt="Car Booking" border="0"></div>
        </c:otherwise>
          </c:choose>     
       </c:forEach> 
          <!-- Right container end here-->
        </div>
      </div>
     <!-- Left container start here-->
      <div id="leftCntr" class="myClass" ng-show="list.length">
        <div class="filter-main-head"> Filters <a href="#" class="close-sidebar fa fa-close"></a> </div>
        <div class="holder">
          <!-- Mobile tab-->
          <ul class="filterTabs visible-xs">
            <!--<li><a data-toggle="tab" href="#tab-0" ng-click="clearFilter();"><i class="fa fa-stop" aria-hidden="true"></i> Reset</a></li>-->
            <li class="active"><a data-toggle="tab" href="#tab-1"><i class="fa fa-stop" aria-hidden="true"></i> Stop</a></li>
            <li><a data-toggle="tab" href="#tab-2"><i class="fa fa-money" aria-hidden="true"></i> Price</a></li>
            <li><a data-toggle="tab" href="#tab-3"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</a></li>
            <li><a data-toggle="tab" href="#tab-4"><i class="fa fa-plane" aria-hidden="true"></i> Airline</a></li>
          </ul>
          <!-- Mobile tab-->
          <div class="clear"></div>
		              
              <div class="reset-filter" ng-click="clearFilter();"><span><a href="#flight-stops-filter"></a> <i class="fa fa-refresh" aria-hidden="true"></i>  </span>Reset Filters </div>
			
          <div class="tab-content">
            
            
            
            <div id="tab-1" class="filter-block tab-pane active abc">
              <div class="head"><span><a href="#flight-stops-filter"></a> </span>Choose Stops </div>
              <a class="showFilter" href="javascript:void(0);">Hide</a>
              <ul class="checkbox" id="flight-stops-filter" data-ng-repeat="item in Newmatrix | limitTo: 1">
                <li ng-if="item.legs != 0"> <small class="farerate"></small>
                  <label>
                  <input type="checkbox" name="check" ng-click="clearMatrixFilter();" ng-model="selectedStop[0]" value="check1" />
                  <span class="text-light-gray"> Non Stop </span>
                  <div class="pull-right" ng-if="item.lowestnonStopPrice != 0.00"><i class="fa fa-{{dollar}}"></i>{{item.lowestnonStopPrice * conversionRatio | number:2}}</div>
                  </label>
                </li>
                <li ng-if="item.slegs != 0"> <small class="farerate"></small>
                  <label>
                  <input type="checkbox" name="check" ng-click="clearMatrixFilter();" ng-model="selectedStop[1]" value="check1" />
                  <span class="text-light-gray"> One Stop </span>
                  <div class="pull-right" ng-if="item.lowestoneStopPrice != 0.00"><i class="fa fa-{{dollar}}"></i>{{item.lowestoneStopPrice * conversionRatio | number:2}}</div>
                  </label>
                </li>
                <li ng-if="item.tlegs != 0"> <small class="farerate"></small>
                  <label>
                  <input type="checkbox" name="check" ng-click="clearMatrixFilter();" ng-model="selectedStop[2]" value="check1" />
                  <span class="text-light-gray"> Two Stop </span>
                  <div class="pull-right" ng-if="item.lowesttwoStopPrice != 0.00"><i class="fa fa-{{dollar}}"></i>{{item.lowesttwoStopPrice * conversionRatio | number:2}}</div>
                  </label>
                </li>
              </ul>
			
            </div>
            <div id="tab-2" class="filter-block tab-pane abc">
              <div class="head">Price</div>
              <a class="showFilter" href="javascript:void(0);">Hide</a>
              <div class="content">
			  <div class="checkbox-sec" id="price-filter">
                <div><span class="min-price-label min-range"></span> <span class="max-price-label max-range pull-right"></span> </div>
                <div class="p20px">
                  <div class="slider" id="price-range" style="width:100%;" ng-model-low="lower_price_bound" ng-model-high="upper_price_bound"></div>
                </div>
              </div>
			  </div>
            </div>
            
            
             <div id="tab-6" class="filter-block tab-pane abc" ng-show="displayCab">
              <div class="head">Cabin Class</div>
                <a class="showFilter" href="javascript:void(0);">Hide</a>
                  <div class="content">
				  <ul class="checkbox">
                  
                <li data-ng-repeat="item in cabinList" ng-if="item.id == 0" class="disable-checkbox"> <small class="farerate"></small>
                  <label>
                  <input type="checkbox" disabled="disabled" ng-click="clearMatrixFilter();includeCabin(item.name);backToTop();" />
                  <span class="text-light-gray"> {{item.name}} </span>
                  
                  </label>
                </li>
                <li data-ng-repeat="item in cabinList" ng-if="item.id != 0"> <small class="farerate"></small>
                  <label>
                   <input type="checkbox"  ng-model="filterCabin[item.name]" ng-click="clearMatrixFilter();includeCabin(item.name);backToTop();" />
                  <span class="text-light-gray"> {{item.name}} </span>
                  
                  </label>
                </li>
               
              </ul>
              	</div>
				
            </div>
            
            
             <div id="tab-5" class="filter-block tab-pane abc">
              <div class="head">Connection Time</div>
               <a class="showFilter" href="javascript:void(0);">Hide</a>
              <div class="content">
			  <div class="checkbox-sec">
               <div class="head2">Show Layover Time Up to:</div>
                  <select class="form-control input-sm" id="connTimeOut" data-ng-model="ConnectionTimeValue" >
                  <option value="{{Times}}" ng-repeat="Times in ConnectionTimess | orderBy:orderByValue" >{{Times}} hour</option>
                  </select>
              </div>
			  </div>
            </div>
            
         <!--   <div id="tab-3" class="filter-block tab-pane">
              <div class="head"><span><a href="#"></a> <a href="#"></a> </span> Flight Times </div>
              <div class="checkbox-sec" id="flight-times-filter">
                <div class="head2">Departure Time</div>
                <div><span class="start-time-label min-range"></span> <span class="end-time-label max-range pull-right"></span> </div>
                <div class="p20px">
                  <div class="slider" id="flight-times" style="width:100%;"></div>
                </div>
              </div>
              <c:forEach items="${searchListWrapper}" var="searchs" varStatus="ses" >
                <c:choose>
                  <c:when test="${searchs.tripType=='2'}">
                    <div class="checkbox-sec" id="flight-times-return-filter">
                      <div class="head2">Return Time</div>
                      <div><span class="min-range start-time-return-label"></span> <span class="end-time-return-label max-range pull-right"></span> </div>
                      <div class="p20px">
                        <div class="slider"  id="flight-times-return" style="width:100%;"></div>
                      </div>
                    </div>
                  </c:when>
                </c:choose>
              </c:forEach>
            </div>-->
            
             <c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
              <div id="airport" class="filter-block tab-pane abc" ng-show="departAirport.length > 1 || arrivalAirport.length > 1">
                <div class="head">Airports</div>
                 <a class="showFilter" href="javascript:void(0);">Hide</a>
                 <div class="content">
                <div>
				<ul class="checkbox" ng-show="departAirport.length == 1 && arrivalAirport.length > 1">
                 <div class="from">Departing From <c:out value="${search.originAirport.cityName}"/></div>
                   
                 <li id="airlines-filter" class="disable-checkbox" ng-repeat="airports in departAirport | orderBy:'price'"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" disabled="disabled" checked>
                    <span title="({{airports.airportCode}}) {{airports.airportName}}">({{airports.airportCode}}) {{getAirportName(airports.airportName)}}</span>
                     <div class="pull-right"><i class="fa fa-{{dollar}}"></i>{{airports.price * conversionRatio | number:2}}</div>
                    </label>
                  </li>
                  </ul>
                 <ul class="checkbox" ng-show="departAirport.length > 1">
                 <div class="from">Departing From <c:out value="${search.originAirport.cityName}"/></div>
                
                  <li id="airlines-filter" ng-repeat="airports in departAirport | orderBy:'price'"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" ng-model="filterdepartAirport[airports.airportCode]" ng-click="clearMatrixFilter();clearMixAirline();includedepartAirport(airports.airportCode);">
                    <span title="({{airports.airportCode}}) {{getAirportName(airports.airportName)}}">({{airports.airportCode}}) {{getAirportName(airports.airportName)}}</span>
                     <div class="pull-right"><i class="fa fa-{{dollar}}"></i>{{airports.price * conversionRatio | number:2}}</div>
                    </label>
                  </li>
                </ul>
              
               <c:choose>
            <c:when test="${search.tripType=='2'}"> 
               <ul class="checkbox" ng-show="arrivalAirport.length == 1 && departAirport.length > 1">
                 <div class="from">Departing From <c:out value="${search.destinationAirport.cityName}"/></div>
                   <li id="airlines-filter" class="disable-checkbox" ng-repeat="airports in arrivalAirport | orderBy:'price'"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" disabled="disabled" checked>
                    <span title="({{airports.airportCode}}) {{airports.airportName}}">({{airports.airportCode}}) {{getAirportName(airports.airportName)}}</span>
                     <div class="pull-right"><i class="fa fa-{{dollar}}"></i>{{airports.price * conversionRatio | number:2}}</div>
                    </label>
                  </li>
                </ul>
              <ul class="checkbox" ng-show="arrivalAirport.length > 1">
                 <div class="from">Departing From <c:out value="${search.destinationAirport.cityName}"/></div>
                  <li id="airlines-filter" ng-repeat="airports in arrivalAirport | orderBy:'price'"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" ng-model="filterReturnAirport[airports.airportCode]" ng-click="clearMatrixFilter();clearMixAirline();includereturnAirport(airports.airportCode);" >
                    <span title="({{airports.airportCode}}) {{getAirportName(airports.airportName)}}">({{airports.airportCode}}) {{getAirportName(airports.airportName)}}</span>
                     <div class="pull-right"><i class="fa fa-{{dollar}}"></i>{{airports.price * conversionRatio | number:2}}</div>
                    </label>
                  </li>
                </ul>
                </c:when>
          </c:choose>
          </div>
          </div>
		  </div>
         </c:forEach>
         
         
             <c:forEach items="${searchListWrapper}" var="search" varStatus="se" >
  
  
          
             <div id="tab-3"class="filter-block tab-pane abc" >
                <div class="head">Flights Times</div>
                 <a class="showFilter" href="javascript:void(0);">Hide</a>
                 <div class="content">
				 
				 <div >
                <div class="depart">Departure time</div>
                <ul class="checkbox" >
                 <div class="from">From <c:out value="${search.originAirport.cityName}"/></div>
                
                  <li id="airlines-filter"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" ng-model="filterTimesdept['0000-0459']" ng-click="clearMatrixFilter();clearMixAirline();includeTimesdept('0000-0459');">
                    <span>Early Morning </span>
                    <div class="pull-right"> (12:00 am - 4:59 am) </div>
                    </label>
                  </li>
                   <li id="airlines-filter"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" ng-model="filterTimesdept['0500-1159']" ng-click="clearMatrixFilter();clearMixAirline();includeTimesdept('0500-1159');">
                    <span>Morning </span>
                    <div class="pull-right"> (5:00 am - 11:59 am) </div>
                    </label>
                  </li>
                   <li id="airlines-filter"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" ng-model="filterTimesdept['1200-1759']" ng-click="clearMatrixFilter();clearMixAirline();includeTimesdept('1200-1759');">
                    <span>Afternoon </span>
                    <div class="pull-right"> (12:00 pm - 5:59 pm) </div>
                    
                    </label>
                  </li>
                   <li id="airlines-filter"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" ng-model="filterTimesdept['1800-2359']" ng-click="clearMatrixFilter();clearMixAirline();includeTimesdept('1800-2359');">
                    <span>Evening </span>
                    <div class="pull-right"> (6:00 pm - 11:59 pm) </div>
                    </label>
                  </li>
                </ul>
              
               <c:choose>
            <c:when test="${search.tripType=='2'}"> 
              <ul class="checkbox" >
                 <div class="from">From <c:out value="${search.destinationAirport.cityName}"/></div>
                  <li id="airlines-filter"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" ng-model="filterTimesret['0000-0459']" ng-click="clearMatrixFilter();clearMixAirline();includeTimesret('0000-0459');" >
                    <span>Early Morning </span>
                    <div class="pull-right"> (12:00 am - 4:59 am) </div>
                    </label>
                  </li>
                   <li id="airlines-filter"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" ng-model="filterTimesret['0500-1159']" ng-click="clearMatrixFilter();clearMixAirline();includeTimesret('0500-1159');" >
                    <span>Morning </span>
                    <div class="pull-right"> (5:00 am - 11:59 am) </div>
                    </label>
                  </li>
                   <li id="airlines-filter"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" ng-model="filterTimesret['1200-1759']" ng-click="clearMatrixFilter();clearMixAirline();includeTimesret('1200-1759');" >
                    <span>Afternoon </span>
                    <div class="pull-right"> (12:00 pm - 5:59 pm) </div>
                    </label>
                  </li>
                   <li id="airlines-filter"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" ng-model="filterTimesret['1800-2359']" ng-click="clearMatrixFilter();clearMixAirline();includeTimesret('1800-2359');" >
                    <span>Evening </span>
                    <div class="pull-right"> (6:00 pm - 11:59 pm) </div>
                    </label>
                  </li>
                </ul>
                </c:when>
          </c:choose>
          </div>
          </div>
         </c:forEach>
            <c:if  test="${utmResSource ==  'OffLine'}">
              <div class="filter-block tab-pane" >
                <div class="head">Provider</div>
                 <a class="showFilter" href="javascript:void(0);">Hide</a>
                <ul class="checkbox" >
                  <li ng-repeat="Flights in provider" id="airlines-filter"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" ng-click="clearMatrixFilter();clearMixAirline();" ng-model="filterProvider[Flights]">
                    <span  ng-if="Flights == '1'">Sabre</span> <span  ng-if="Flights == '0'">Amadeus</span> <span  ng-if="Flights == '2'">Skybird</span> <span  ng-if="Flights == '3'">Transam</span> <span  ng-if="Flights == '4'">Gtt Sabre</span> </label>
                  </li>
                </ul>
              </div>
              <div class="clear"></div>
            </c:if>
            <!--     <div id="sticker" class="filter-block tab-pane" >
       <div class="head"><span><a href="#"></a> <a href="#"></a> </span>Airlines</div>
     
       
        <ul class="checkbox" >
    
 
        <li ng-switch on="Flighth.Code" ng-model="selectedAirline" ng-repeat="Flighth in airline  | orderBy:'Name' | unique: 'Code' " id="airlines-filter"><small class="farerate"></small>
             <label>
        <input type="checkbox" ng-click="clearMatrixFilter();clearMixAirline();" ng-model="filterAirline[Flighth.Code]">
        <span ng-switch-when="CCF"> Call Center Fares Only</span>
        <span ng-switch-when="DL"> Major Airlines</span>
       
       <span ng-switch-default> {{ Flighth.Name | lowercase }}</span>       </label></li>
        </ul>
        
           <ul class="checkbox"  id="airlines-filter" ng-show="mixAir">
             <li style="border-top:1px dashed #c9c9c9;"><small class="farerate"></small>
             <label>
        <input type="checkbox"  id="mixAir" ng-model="check" ng-click="clearMatrixFilter();" ng-change="MixedShow(check)" ng-true-value="2" ng-false-value="1"/> 
       <span>  Mixed Airline</span></label></li>
        </ul>
        
     </div> -->
	 </div>
             <div class="filter-block tab-pane abc" id="layoverDiv" ng-if="layOverAirport.length > 0">
                <div class="head">Layover Airports</div>
                 <a class="showFilter" href="javascript:void(0);" ng-click="layoverClick()">{{layoverText}}</a>
                <div class="slideDiv" ng-show="layoverShow"> 
                <ul class="checkbox" >
                  <li ng-repeat="layover in layOverAirport | limitTo: layoverlimit" id="airlines-filter"><small class="farerate"></small>
                    <label>
                    <input type="checkbox" ng-model="filterlayover[getlayoverCode(layover)]" ng-click="clearMatrixFilter();clearMixAirline();includeLayover(getlayoverCode(layover));">
                    <span>{{layover}}</span> </label>
                  </li>
                      <div align="right" ng-hide="layOverAirport.length<3" style="cursor:pointer;" > <a ng-hide="layoverlimit === layOverAirport.length" class="text-red" ng-click="layoverlimit = layoverlimit +(layOverAirport.length-3)">Show More <i class="fa fa-angle-down" aria-hidden="true"></i></a> <a ng-show="layoverlimit === layOverAirport.length && layOverAirport.length>3" class="text-red" ng-click="layoverlimit = 3">Show less <i class="fa fa-angle-up" aria-hidden="true"></i></a> </div>
                </ul>
                </div>
			</div>
            <div class="clear"></div>
              
            <div id="tab-4"class="filter-block tab-pane abc" >
              <div class="head">Airlines</div>
              
               <a class="showFilter" href="javascript:void(0);">Hide</a>
              <div class="content"> 
			  <ul class="checkbox" >
                <li  ng-model="selectedAirline" ng-repeat="item in Newmatrix  | orderBy:'airlineName' | limitTo: filterlimit" id="airlines-filter"><small class="farerate"></small>
                  <label ng-switch on="item.airlineName">
                  <div class="pull-right"><i class="fa fa-{{dollar}}"></i>{{item.lowestPrice * conversionRatio | number:2 }}</div>
                  <input type="checkbox" ng-switch-when="DLL" ng-if="item.multi == '0'" ng-model="filterAirline[item.airlineName]" ng-click="clearMatrixFilter();includeAirline(item.airlineName);backToTop();" >
                  <input type="checkbox" ng-switch-when="CCF" ng-if="item.multi == '0'" ng-model="filterAirline[item.airlineName]" ng-click="clearMatrixFilter();includeAirline(item.airlineName);backToTop();" >
                  <input type="checkbox" ng-switch-default ng-if="item.multi == '0'" ng-model="filterAirline[item.airlineName]" ng-click="clearMatrixFilter();includeAirline(item.airlineName);backToTop();" >
                  <input type="checkbox" ng-switch-when="DLL" ng-if="item.multi != '0'" ng-model="filterAirline[item.airlineName+'M']" ng-click="clearMatrixFilter();includeAirline(item.airlineName+'M');backToTop();" >
                  <span ng-switch-when="DLL">Major Airlines <small  ng-if="item.multi != '0'"><img src="/resources/flight-result/images/matrix-airline.png" title="Multiple Airlines" class="filter-air-logo"></small></span>
                  <input type="checkbox" ng-switch-when="CCF" ng-if="item.multi != '0'" ng-model="filterAirline[item.airlineName+'M']" ng-click="clearMatrixFilter();includeAirline(item.airlineName+'M');backToTop();" >
                  <span ng-switch-when="CCF">Call Center Fares Only <small  ng-if="item.multi != '0'"><img src="/resources/flight-result/images/matrix-airline.png" title="Multiple Airlines" class="filter-air-logo"></small></span>
                  <input type="checkbox" ng-switch-default ng-if="item.multi != '0'" ng-model="filterAirline[item.airlineName+'M']" ng-click="clearMatrixFilter();includeAirline(item.airlineName+'M');backToTop();" >
                  <span ng-switch-default style="text-transform: capitalize;">{{getAirlineName(item.airlineName) | lowercase}}<small  ng-if="item.multi != '0'"><img src="/resources/flight-result/images/matrix-airline.png" title="Multiple Airlines" class="filter-air-logo"></small></span>
                  </label>
                  </label>
                </li>
                <div align="right" ng-hide="Newmatrix.length<6" style="cursor:pointer;" > <a ng-hide="filterlimit === Newmatrix.length" class="text-red" ng-click="filterlimit = filterlimit +(Newmatrix.length-6)">Show More <i class="fa fa-angle-down" aria-hidden="true"></i></a> <a ng-show="filterlimit === Newmatrix.length && Newmatrix.length>6" class="text-red" ng-click="filterlimit = 6">Show less <i class="fa fa-angle-up" aria-hidden="true"></i></a> </div>
              </ul>
			  </div>
            </div>
            <a href="javascript:void(0);" class="filterApply">Apply Filters</a> </div>
        </div>
      </div>
      <!-- Left container End here-->
    </div>
    
  <!-- /container -->
  <div id="call" class="visible-xs" ng-show="list.length">

    <div class="bottom-call-bar"> <a href="tel:+1-888-737-8675"> Nothing Is Free | But For A Deal <i class="fa fa-phone"></i></a> </div>
  </div>
</div>
</div>
<!-- Footer Start -->
<br/>
<div id="footerrs" class="hidden-xs" style="display:none">
  <jsp:include page="result_footer.jsp" ></jsp:include>
</div>
<div id="go-top"><i class="fa fa-angle-up fa-2x"></i></div>
<!-- Google Code for Remarketing Tag -->
<loading>
  <c:forEach items="${searchListWrapper}" var="search" varStatus="mb">
    <div class="result-mid-sec">
        <img  style="margin-top: 30px;" src="/resources/travelopick/images/logo.png?v111" />
     <div style="width: 100%; float: left; clear: both;"><img src="/resources/images/loadingresult.gif?v111" width="110" height="110"  /></div>
      <div class="location">
        <c:out value='${search.originAirport.cityName}'/> (<c:out value='${search.originAirport.cityCode}'/>)
        <span>
        <c:choose>
          <c:when test="${search.tripType=='2'}"><img src="/resources/flight-result/images/round-arrow.png?30062017"> </c:when>
          <c:otherwise><img src="/resources/flight-result/images/mid-arrow.png?444"></i></c:otherwise>
        </c:choose>
        </span>
        <c:out value='${search.destinationAirport.cityName}' /> (<c:out value='${search.destinationAirport.cityCode}' />)
      </div>
      <div class="date">
        <c:set var="depart" value="${fn:split(search.travelDate,'T')}"/>
        <fmt:parseDate value="${depart[0]}" var="dateObject" pattern="MM-dd-yyyy" />
        <fmt:formatDate value="${dateObject }" pattern="EEE,dd MMM, yyyy" />
        <c:choose>
          <c:when test="${search.tripType=='2'}"> -
            <c:set var="returns" value="${fn:split(search.returnDate,'T')}"/>
            <fmt:parseDate value="${returns[0]}" var="rdateObject" pattern="MM-dd-yyyy" />
            <fmt:formatDate value="${rdateObject }" pattern="EEE,dd MMM, yyyy" />
          </c:when>
        </c:choose>
      </div>
      <div class="wait"> Please Wait,<br>
        While ${data.siteName} is searching for the best <span class="dot">fares<span>.</span><span>.</span><span>.</span></span></div>
    <div style="display: none;">
      <span class="lounge-mob-hidden">
      <!--<img id="mid-banner-d" src="/resources/flight-result/images/banner/small/G-Air-M.gif" class="img-responsive">-->
      <img id="mid-banner-s" style="display:none" src="/resources/flight-result/images/banner/small/{{showairlineBanners}}-M.gif" class="img-responsive"> </span> <span class="lounge-mob-show">
      <!-- <img id="mid-banner-md" src="/resources/flight-result/images/banner/small/G-Air-M.gif" style="width:100%;" class="img-responsive"> -->
      <img id="mid-banner-ms" style="display:none" src="/resources/flight-result/images/banner/small/{{showairlineBanners}}-M.gif" style="width:100%;" class="img-responsive"></span>
      
      
      </div>
	  </div>
  </c:forEach>
</loading>


<!--/Footer start -->
<div align="center" id="divSessionOut" style="display:none; " class="popup-product">
  <div id="fadebackground"></div>
  <div class="session-exp">
    <h3>Session Expired!</h3>
    <p> Flight prices may change frequently owing to demand & availability. </br>
      Start a new search to view the best deals. </p>
    <div class="clock_tym"> <i class="fa fa-clock-o" aria-hidden="true"></i> </div>
    <div align="center" valign="middle"><a href="#" onClick="submitForm();" class="btn btn-primary btn-lg searchbtn">Search Again</a> &nbsp; &nbsp;  OR &nbsp; &nbsp; <a href="/us" class="btn btn-primary btn-lg searchbtn">Go to Home</a></div>
  </div>
</div>
<div class="page_overlay"></div>
<!-- Exit popup -->
<div style="display: none; width:100%; height:100%; position:fixed; background:rgba(0,0,0,0.8); top:0; filter:alpha(opacity=0.8); z-index:15;" id="exitpopup_bg"></div>
<div id="exitpopup" class="exit-pop-up">
  <div class="call-free">
    <c:out value='${tollFree}' />
  </div>
  
  <div class="cross">x</div>
</div>
<!-- Exit popup -->
<!-- Enter popup -->
<div class="modal fade" id="enterPopup" role="dialog">
  <div class="modal-dialog popup-meta">
    <!-- Modal content-->
    <div class="modal-content">
      <button type="button" class="close pop-close" data-dismiss="modal">&times;</button>
      <div class="hidden-xs"> <img class="img-responsive" src="/resources/flight-result/images/popup-meta1.jpg"/> </div>
      <div class="visible-xs"> <a href="tel:1-844-379-6604"><img class="img-responsive" src="/resources/flight-result/images/popup-meta1.jpg"/></a> </div>
    </div>
  </div>
</div>
<!-- Enter popup -->

 <jsp:include page="list-popup-countbnr.jsp"></jsp:include>

<input initial-value type="hidden" ng-model="searchQuery" value='${searchQuery.replace("'", "")}' / >
<script src="/resources/js/jquery.ui.autocomplete.scroll.min.js"></script>
</body>
</html>
