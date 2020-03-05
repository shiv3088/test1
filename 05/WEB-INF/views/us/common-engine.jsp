<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-2"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

 <link href="/resources/css/reset.css" rel="stylesheet">
<link href="/resources/css/gallery-css.css" rel="stylesheet">
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/css/new-style.css" rel="stylesheet">
<link href="/resources/css/font-awesome.css" rel="stylesheet">
<link href="/resources/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/css/notify.css" rel="stylesheet" type="text/css">
<script src="//code.angularjs.org/1.4.0/angular.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular-messages.js"></script>
<link href="/resources/css/notify.css" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript" ></script>
<style type="text/css">
.navbar-default { border:0 !important; }
   #background { 
   background-size:cover;
   background-position:center right;
    }
	
</style> 






        <div class="bg-search">

			<div class="container">
		<div class="col-md-5 col-sm-6 col-xs-12 pull-right visible-lg visible-md hidden-sm hidden-xs save_online">
						
							<div class="save_off">Get <span style="color:#f60;">$10</span> Off</div>
							<div class="online_booking">On your Online Flight Booking</div>
							</div>
			
			<div class="header-heading header-heading_city">
			
			 
												<%
				
				String cabinClass="Economy";
                                                            
                if (request.getParameter("cabinClass") == null) {
                
                
                }else{
                cabinClass=request.getParameter("cabinClass");
                
                }  
                pageContext.setAttribute("timeslotid", cabinClass);                                          	
    if (request.getParameter("dname") == null) {
      
		 
         out.println("<div style='color: rgb(255, 255, 255); padding-top:25px; text-shadow:1px 1px 2px #333; margin-left:0; font-size:50px;'> Find Your Perfect <b style='font-weight: 600;'>Trip</b></div>");
		 
    } else {
   
		  if (request.getParameter("p1") == null) {
		  
           out.println("<div style='color: rgb(255, 255, 255); padding-top:5px; text-shadow:1px 1px 2px #333; margin-left:0;font-size:50px; margin-bottom:25px;'> Find Flights to "+request.getParameter("dname")+" & <b style='font-weight: 600;'>Save Big!</b> </div>");
		}else{  
		if (request.getParameter("p1").equals("null")) {
		 
		  if (request.getParameter("ppcPage") == null) {
           out.println("<div style='color: rgb(255, 255, 255); padding-top:5px; text-shadow:1px 1px 2px #333; margin-left:0;font-size:50px; margin-bottom:25px;'>Find Flights to "+request.getParameter("dname")+" & <b style='font-weight: 600;'>Save Big!</b> </div>");
           }else{
           out.println("<div style='color: rgb(255, 255, 255); padding-top:5px; text-shadow:1px 1px 2px #333; margin-left:0;font-size:50px; margin-bottom:25px;'>"+request.getParameter("ppcPage")+" & <b style='font-weight: 600;'>Save Big!</span></b>");
           }
		}else{
		    
			 out.println("<div style='color: rgb(255, 255, 255); padding-top:5px; text-shadow:1px 1px 2px #333; margin-left:0;font-size:50px;'>"+request.getParameter("p1")+"</div>");
		 }
		 }
    }
%>
			
			</div>
			
			<div class="clearfix"></div>
			<div data-example-id="togglable-tabs" class="bs-example bs-example-tabs">
  <ul role="tablist" class="nav nav-tabs" id="myTabs">
    <li class="active" role="presentation"><a aria-expanded="true" aria-controls="flight" data-toggle="tab" role="tab"   href="#flight"> <i class="fa fa-plane" style=" transform:rotate(45deg);"></i> Flights</a></li>
    <li role="presentation" class=""><a aria-controls="hotels" data-toggle="tab"  role="tab" href="#hotels" aria-expanded="false" style="font-size:16px;"><i class="fa fa-hotel"></i> Hotels</a></li>
     
  </ul>
  <div class="tab-content" id="myTabContent">
    <div aria-labelledby="flight-tab" id="flight" class="tab-pane fade active in" role="tabpanel">
       
   
			<div class="engine-w-bg">
			
                <div>
                    
                    	<div class="search-tabs search-tabs-bg ">
                        	<div class="tabbable">
                            	<div class="tab-content">
                                	<div class="tab-pane fade in active" style="padding-bottom:0;">
                                        
                                        <form:form method="POST"  action="/search" modelAttribute="flightSearch" id="flightSearch">
                                        <div id="error" style="color:#E9800C; margin-bottom:10px;"></div>
                                               	<div id="flight-search" class="tab-pane fade in active">
                                            	<div class="row">
                                                	<div class="col-md-6 col-xs-12 col-lg-5 col-sm-6 pr0">
													
													
                                                     
															<div class="col-xs-10 pa0">
															<div class="form-group form-group-lg form-group-icon-left">
                                                        	<i class="fa fa-map-marker input-icon"></i> 
                                                            <div class="ausu-suggest">
                                                            <form:input path="froCity" ng-model="froCity" class="form-control dat" autocomplete="off" placeholder="LEAVING FROM" />
                                                             </div>
                                                        </div>
														
														<div class="form-group form-group-lg form-group-icon-left">
                                                            <i class="fa fa-map-marker input-icon"></i> 
                                                            <div class="ausu-suggest 2">
                                                            <form:input path="toCity"  ng-model="toCity" placeholder="WHERE TO" class="form-control dat" autocomplete="off"/>
                                                            </div>
                                                        </div>
															</div>
															<div class="col-xs-2">
															<img src="/resources/images/return-errow1.png" id="tripImage" style=" margin-left:-10px; cursor:pointer;"  onClick="ddlTypejourneyChange(this);">
															</div>
														 
														
														
                                                    </div>
                                                
                                                     
                                                   <!-- <div class="col-md-1 col-xs-12 col-lg-1 col-sm-6 pr0 w12">
                                                    	<div class="form-group form-group-lg form-group-icon-left">
                                                            <i class="fa fa-plane input-icon"></i>
                                                            <label>Journey</label>
                                                            <form:select class="form-control dat" path="tripType" onchange="ddlTypejourneyChange(this);" id="tripType" name="ddlTypejourney">
                                                                <form:option value="2" selected="selected">Return</form:option>
                                                                <form:option value="1">One Way</form:option>
                                                            </form:select>
                                                        </div>
                                                    </div> -->
													
													 <form:input type="hidden" style="height: 0px; width:0px; border: 0px;" ng-model="tripType" path="tripType" id="tripType" value="2" name="ddlTypejourney"/>
													<div class="col-md-6 col-xs-12 col-lg-3 col-sm-6 pa0">
													
													<div class="col-sm-6 col-xs-6 e_p_l  ">
													<div style="padding:5px; background:#fff;cursor:pointer;">
														<div style="border-bottom:1px solid #ccc;  padding-bottom:5px; text-transform:uppercase; font-size:17px;"><img src="/resources/images/depart-new.png"> Depart </div>
                                                        <div class="form-group form-group-lg form-group-icon-left form-group-filled" id="departDateDiv">
															<div style="color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;">07</div>
															<div style="text-transform:uppercase; text-align:center; font-size:17px;">TUE, AUG</div>
                                                           
                                                        </div>
                                                         
													</div>
													<form:input style="height: 0px; width:0px; border: 0px; background:none;" ng-model="departDate" path="froDate" id="departDate" name="tbDepart"/>
                                                   </div>
												   <div class="col-sm-6 col-xs-6 e_p_r ">
													<div style="padding:5px; background:#fff;cursor:pointer;">
													
													<i class="fa fa-times-circle" aria-hidden="true" id="journey" style="position: absolute; right: 9px; top:-6px; font-size: 22px; color: rgb(102, 102, 102); cursor: pointer;" onClick="ddlTypejourneyChange(this);"></i>
														<div style="border-bottom:1px solid #ccc;  padding-bottom:5px; text-transform:uppercase; font-size:17px;" id="returnDateDivs"><img src="/resources/images/return-new.png"> Return </div>
                                                        <div class="form-group form-group-lg form-group-icon-left form-group-filled" id="returnDateDiv">
															<div style="color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;">23</div>
															<div style="text-transform:uppercase; text-align:center; font-size:17px;">WED, AUG</div>
                                                          </div>
                                                  </div>
                                                    <form:input style="height: 0px; width:0px; border: 0px; background:none;" ng-model="returnDate" path="toDate" id="returnDate" name="tbReturn"/> 
                                                        
													
                                                   </div>
												   <div class="clearfix"></div>
													
													</div>
                                                    
												   
                                                    
                                                  <div class="col-md-6 col-xs-12 col-lg-2 col-sm-12 e_p_l">
                                                       <div calss="row">
													   <div class="col-sm-6 col-md-12 col-xs-12 e_p_n">
													   <div class="form-group form-group-lg form-group-icon-left">
                                                        	<i class="fa fa-male input-icon i_con"></i> 
                                                            <div class="ausu-suggest">
															<input  class="form-control dat" id="travelss" autocomplete="off" placeholder="1 Adult, 0 Child..." />
															</div>
                                                        </div>
														</div>
															

														<div class="traveler" style="display:none;">
														<i class="fa fa-times-circle" aria-hidden="true" id="close-div"></i>
													   <div calss="row">
													     <div class="col-sm-3 col-xs-6 e_p_l"><div>Adults</div>
															<div class="form-group form-group-lg form-group-select-plus">
															
															<i class="fa fa-male input-icon i_con"></i> 
															
															<form:select path="adult" items="${model.adult}" ng-model="adult" class="form-control " name="ddlAdults" alt="Select Adults" title="Select Adults" />
															
															</div>
														 </div>
														 <div class="col-sm-3 col-xs-6 e_p_l"><div>Children</div>
														   <div class="form-group form-group-lg form-group-select-plus">
														   
														   <i class="fa fa-child input-icon"></i> 
														   <form:select path="child" items="${model.child}" class="form-control" ng-model="child" name="ddlInfants" alt="Select Childs" title="Select Childs"/>
														   </div>
														 </div>
														 <div class="col-sm-3 col-xs-6 e_p_l">
														 <div>Infant</div>
															<div class="form-group form-group-lg form-group-select-plus">
															<i class="fa fa-child input-icon i_con"></i> 
															<form:select path="infant" items="${model.infant}" class="form-control" ng-model="infant" name="ddlInfants" alt="Select Infant" title="Select Infant"/>
															</div>
														</div>
														 <div class="col-sm-3 col-xs-6 e_p_l">
														 <div>Infant W/S</div>
														    <div class="form-group form-group-lg form-group-select-plus">
															<i class="fa fa-child input-icon i_con"></i> 
															  <form:select path="infantWs" items="${model.infant}" class="form-control" ng-model="infantWs" name="ddlInfants" alt="Select Infant with Seat" title="Select Infant with Seat"  />
															</div>
														 </div>  
														 
														 </div>
														 
														 </div>
														  
														 
														 
													   </div>
													   
													   <div class="">
														<div class=" col-xs-12 col-sm-6 col-md-12 choice_l">
														<div class="form-group form-group-lg">
														<i class="fa fa fa-wheelchair input-icon i_con"></i> 
																	<form:select path="cabinClass" class="form-control dat" ng-model="cabinClass">
																        <c:forEach items="${model.cabinClass}" var="curCategory" varStatus="loop">
																             <form:option value="${curCategory}">${curCategory}</form:option>
																         </c:forEach>
																     </form:select>
                                                       </div>
														</div>
													   </div>
													   
													   
                                                   </div>
												   
												   <div class="col-md-3 col-xs-12 col-lg-2 col-sm-4 search_btn text-right ">
												     <!-- <input id="btnSearchFlights"  type="button" class="btn btn-primary btn-lg srch-btn" value="Search Flights" onclick="submitForm();"/> -->
													 <button id="btnSearchFlights"  type="button" class="btn btn-primary btn-lg hidden-xs hidden-md hidden-sm" value="Search Flights" onclick="submitForm();">
													 
																<div class="srch-btn">SEARCH</div>
															</button>
															
															
															 <input type="button" onclick="submitForm();" value="Search Now" class="btn btn-primary btn-lg hidden-lg " style="width:100%" id="btnSearchFlights">
															
												   </div>
												   
												   
                                                </div><!-----From/To -------------->
												 
                                                <div class="submition" style="display:none;">
                                                	<div class="row">
                                                        <div class="col-md-2 col-xs-12 col-sm-6 pr0">
                                                        	<div class="form-group form-group-lg ">
                                                                <label>Airlines</label>
                                                                 
                                                                <select id="select-air" class="form-control dat" name="ddlAirline">
                                                                    <option value="All">All Airlines</option>
                                                                    <option value="EI">Aer Lingus</option>
                                                                    <option value="AR">Aerolineas Argentinas</option>
                                                                    <option value="AB">Air Berlin</option>
                                                                    <option value="AC">Air Canada</option>
                                                                    <option value="CA">Air China</option>
                                                                    <option value="UX">Air Europa Lineas Aereas</option>
                                                                    <option value="AF">Air France</option>
                                                                    <option value="AI">Air India</option>
                                                                    <option value="JM">Air Jamaica</option>
                                                                    <option value="KM">Air Malta</option>
                                                                    <option value="MK">Air Mauritius</option>
                                                                    <option value="SW">Air Namibia</option>
                                                                    <option value="NZ">Air New Zealand</option>
                                                                    <option value="HM">Air Seychelles</option>
                                                                    <option value="AZ">Alitalia</option>
                                                                    <option value="AA">American Airlines</option>
                                                                    <option value="NH">ANA</option>
                                                                    <option value="OZ">Asiana Airlines</option>
                                                                    <option value="OS">Austrian Airlines</option>
                                                                    <option value="BA">British Airways</option>
                                                                    <option value="SN">Brussels Airlines</option>
                                                                    <option value="BW">Caribbean Airlines</option>
                                                                    <option value="CX">Cathay Pacific Airways</option>
                                                                    <option value="CI">China Airlines</option>
                                                                    <option value="MU">China Eastern Airlines</option>
                                                                    <option value="CZ">China Southern Airlines</option>
                                                                    <option value="CO">Continental Airlines</option>
                                                                    <option value="CY">Cyprus Airways</option>
                                                                    <option value="OK">Czech Airlines</option>
                                                                   
                                                                    <option value="MS">Egypt Air</option>
                                                                    <option value="EK">Emirates Airways</option>
                                                                    <option value="OV">Estonian Air</option>
                                                                    <option value="ET">Ethiopian Airlines</option>
                                                                    <option value="EY">Etihad Airways</option>
                                                                    <option value="BR">EVA Air</option>
                                                                    <option value="AY">Finnair</option>
                                                                    <option value="BE">FlyBe</option>
                                                                    <option value="GA">Garuda Indonesia</option>
                                                                    <option value="GF">Gulf Air</option>
                                                                    <option value="IB">Iberia Airlines</option>
                                                                    <option value="FI">IcelandAir</option>
                                                                    <option value="JL">Japan Airlines</option>
                                                                    <option value="9W">Jet Airways</option>
                                                                    <option value="KL">KLM Royal Dutch Airlines</option>
                                                                    <option value="KE">Korean Air</option>
                                                                    <option value="KU">Kuwait Airways</option>
                                                                    <option value="LA">LAN Airlines</option>
                                                                    <option value="LO">LOT Polish Airlines</option>
                                                                    <option value="LH">Lufthansa</option>
                                                                    <option value="MH">Malaysia Airlines</option>
                                                                    <option value="ZB">Monarch Airlines</option>
                                                                    <option value="NW">Northwest Airlines</option>
                                                                    <option value="OA">Olympic Airlines</option>
                                                                    <option value="WY">Oman Air</option>
                                                                    <option value="QF">Qantas Airways</option>
                                                                    <option value="QR">Qatar Airways</option>
                                                                    <option value="AT">Royal Air Maroc</option>
                                                                    <option value="BI">Royal Brunei Airlines</option>
                                                                    <option value="RJ">Royal Jordanian</option>
                                                                    <option value="SK">SAS - Scandinavian Airlines</option>
                                                                    <option value="SQ">Singapore Airlines</option>
                                                                    <option value="SA">South African Airways</option>
                                                                    <option value="UL">SriLankan Airlines</option>
                                                                    <option value="LX">Swiss Airlines</option>
                                                                    <option value="JJ">TAM Airlines</option>
                                                                    <option value="TP">TAP Portugal</option>
                                                                    <option value="TG">Thai Airways</option>
                                                                    <option value="TK">Turkish Airlines</option>
                                                                    <option value="PS">Ukraine Intl.</option>
                                                                    <option value="UA">United Airlines</option>
                                                                    <option value="US">US Airways</option>
                                                                    <option value="HY">Uzbekistan Airways</option>
                                                                    <option value="RG">Varig Brazilian</option>
                                                                    <option value="VN">Vietnam Airlines</option>
                                                                    <option value="VS">Virgin Atlantic</option>
                                                                    <option value="VG">VLM Airlines</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2 col-xs-6 col-sm-3 pr0">
                                                            <div class="form-group form-group-lg form-group-select-plus">
                                                                
                                                                
                                                            </div>
                                                    	</div>
                                                        <div class="col-md-2 col-xs-6 col-sm-3 pr0">
                                                            <div class="form-group form-group-lg form-group-select-plus">
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2 col-xs-6 col-sm-3 pr0">
                                                            <div class="form-group form-group-lg form-group-select-plus">
                                                                  
                                                            </div>
                                                    	</div>
                                                        <div class="col-md-2 col-xs-6 col-sm-3 pr0">
                                                            <div class="form-group form-group-lg form-group-select-plus">
                                                                
                                                                
                                                            </div>
                                                    	</div>
                                                        <div class="col-md-2  col-xs-12 col-sm-6 mt10">
                                                         
                                                            <input id="btnSearchFlights"  type="button" class="btn btn-primary btn-lg srch-btn" value="Search Flights" onclick="submitForm();"/>
                                                        	<!-- <button id="btnSearchFlights" class="btn btn-primary btn-lg btn-sm" type="submit" style="padding:12px 30px; width:100%;">Search for Flights</button> -->
                                                       </div>
                                                    </div>
                                                </div>
												 
                                            </div>
                                        </form:form>
           
	
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                    
                </div>
				</div>
				
			 </div>	
				<div aria-labelledby="hotels-tab" id="hotels" class="tab-pane fade" role="tabpanel">  
	  <div class="engine-w-bg">
			
                <div>
                    
                    	<div class="search-tabs search-tabs-bg ">
                        	<div class="tabbable">
                            	<div class="tab-content">
                                	<div class="tab-pane fade in active">
                                        
                                        <form:form method="POST"  action="/hotelSearch" modelAttribute="hotelSearch" id="searchHotel">
                                        <div id="hotelerror" style="color:#E9800C"></div>
                                               	<div id="flight-search" class="tab-pane fade in active">
												<div style="margin-bottom:10px;"></div>
                                            	<div class="row">
                                                	<div class="col-md-6 col-xs-12 col-lg-5 col-sm-6">
													
													
                                                     <div class="form-group form-group-lg form-group-icon-left">
													 <div class="h_e_h"><h3>Where do you want to Stay?</h3></div>
													 <div style="clear:both; margin-bottom:20px;"> </div>
                                                        	
                                                            <div class="ausu-suggest">
															<i class="fa fa-map-marker input-icon i_con"></i> 
                                                            <form:input path="stayCity" class="form-control dat" autocomplete="off" placeholder="Where Do you want to Stay" />
                                                             </div>
                                                        </div>
														 
														
														
                                                    </div>
                                                
                                                      
											<div class="col-md-6 col-xs-12 col-lg-3 col-sm-6 pa0">
												<div class="col-sm-6 col-xs-6 h_p_l  ">
													<div style="padding:5px; background:#fff;cursor:pointer;">
														<div style="border-bottom:1px solid #ccc;   padding-bottom:5px; text-transform:uppercase; font-size:15px;"><img src="/resources/images/depart-new.png"> Check In </div>
                                                        <div class="form-group form-group-lg form-group-icon-left form-group-filled" id="checkInDateDiv">
															<div style="color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:5px; font-family:sans-serif;">18</div>
															<div style="text-transform:uppercase; text-align:center; font-size:17px;">TUE, AUG</div>
                                                             
                                                        </div>
													</div>
													<form:input style="height: 0px; width:0px; border: 0px; background:none;" path="checkInDate" id="checkInDate" name="tbcheckIn"/>
                                                   </div>
												<div class="col-sm-6 col-xs-6 h_p_n ">
													<div style="padding:5px; background:#fff;cursor:pointer;">
													
														<div style="border-bottom:1px solid #ccc;  padding-bottom:5px; text-transform:uppercase; font-size:15px;"><img src="/resources/images/return-new.png"> Check Out </div>
                                                        <div class="form-group form-group-lg form-group-icon-left form-group-filled" id="checkOutDateDiv">
															<div style="color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:5px; font-family:sans-serif;">27</div>
															<div style="text-transform:uppercase; text-align:center; font-size:17px;">WED, AUG</div>
                                                             
                                                        </div>
													</div>
                                                   </div>
                                                   <form:input style="height: 0px; width:0px; border: 0px; background:none;" path="checkOutDate" id="checkOutDate" name="tbcheckOut"/>
												   </div>
												    <input type="hidden" id="adultNo" value="1"/>
												    <input type="hidden" id="childNo" value="0"/>
                                               
                                                   <div class="col-md-6 col-xs-12 col-lg-2 col-sm-6 gust">
                                                       <div calss="row">
													   
													   <div class="form-group form-group-lg form-group-icon-left">
                                                        	<div class="h_e_h"><h3>Guests</h3></div>
													   <div style="clear:both; margin-bottom:20px;"> </div>
                                                        	
                                                            <div class="ausu-suggest">
															<i class="fa fa-male input-icon i_con"></i> 
														     <form:input class="form-control dat" autocomplete="off" path="guest" id="guest" placeholder="1 Room, 1 Adult...."  />
															</div>
                                                        </div>
														

														<div class="guests" style="display:none;">
														<i class="fa fa-times-circle" aria-hidden="true1" id="h_close-div"></i>
													   <div calss="row">
													     <div class="col-sm-12 col-xs-12 pl0">
														 <div>Rooms</div>
															<div class="form-group form-group-lg form-group-select-plus">
															<i class="fa fa-hotel input-icon i_con"></i> 
															<form:select path="room" items="${model.roomNo}" class="form-control " id="rooms" name="ddlRooms" alt="Select Rooms" title="Select Rooms" />
															</div>
														 </div>
																									 
														 </div>
														 
														 
														  <div calss="row" id="cust">
													     <div class="col-sm-12 col-xs-12 pl0" id="roomNo0">
														 <div></div>
															<div class="form-group form-group-lg form-group-select-plus">
															
															Room 1:
															</div>
														 </div>
														 <div class="col-sm-4 col-xs-6 pl0">
														 <div>Adults</div>
														   <div class="form-group form-group-lg form-group-select-plus">
														   <i class="fa fa-male input-icon i_con"></i> 
														   <form:select path="rooms[0].adults" items="${model.roomNo}" id="roomsadults" class="form-control" name="ddlInfants" alt="Select Adults" onchange="addAdult(this);" title="Select Adults"/>
														   </div>
														 </div>
														 <div class="col-sm-4 col-xs-6 pl0">
														 <div>Children</div>
															<div class="form-group form-group-lg form-group-select-plus">
															<i class="fa fa-child input-icon i_con"></i> 
															<form:select path="rooms[0].child" items="${model.childNo}" id="rooms0child"  class="form-control" name="ddlInfants" alt="Select Child" onchange="addAge(this);" title="Select Child"/>
															</div>
														</div> 
														 
														 </div>
														 
														 
														 <div class=" col-sm-12 col-xs-12" id="childAge0">
														  <div id="age0" style="display:none; padding-bottom:5px;">Ages of children at check-in </div>
														  <div class="col-sm-0 col-xs-12 e_p_n hidden-lg hidden-md">
														 
															
														  </div> 
														
															 <div class=" col-md-6 col-sm-6 col-xs-6 " id="00" style="display:none;">
														 
															<div class="form-group form-group-lg form-group-select-plus">
															 
															<form:select path="rooms[0].children[0].age" items="${model.childAge}" class="form-control child_age" name="ddlInfants" alt="Select Child Age" title="Select Child Age" />
															</div>
														</div> 
														<div class="col-md-6 col-sm-6 col-xs-6 " id="01" style="display:none;">
														 
															<div class="form-group form-group-lg form-group-select-plus">
															 
															<form:select path="rooms[0].children[1].age" items="${model.childAge}" class="form-control child_age" name="ddlInfants" alt="Select Child Age" title="Select Child Age"/>
															</div>
														</div> 
														<div class="col-md-6 col-sm-6 col-xs-6 " id="02" style="display:none;">
														 
															<div class="form-group form-group-lg form-group-select-plus">
															 
															<form:select path="rooms[0].children[2].age" items="${model.childAge}" class="form-control child_age" name="ddlInfants" alt="Select Child Age" title="Select Child Age"/>
															</div>
														</div> 
														<div class="col-md-6 col-sm-6 col-xs-6 " id="03" style="display:none;">
														 
															<div class="form-group form-group-lg form-group-select-plus">
															 
															<form:select path="rooms[0].children[3].age" items="${model.childAge}" class="form-control child_age" name="ddlInfants" alt="Select Child Age" title="Select Child Age"/>
															</div>
														</div> 
														<div class="col-md-6 col-sm-6 col-xs-6 " id="04" style="display:none;">
														 
															<div class="form-group form-group-lg form-group-select-plus">
															 
															<form:select path="rooms[0].children[4].age" items="${model.childAge}" class="form-control child_age" name="ddlInfants" alt="Select Child Age" title="Select Child Age"/>
															</div>
														</div>
														 <div class="col-sm-0 pa0 hidden-lg hidden-md">
														 
															
														  </div> 
														 </div>
														 
														 </div>
														  
														 
														 
													   </div> </div>
                                                   
												   
												   <div class="col-md-3 col-xs-12 col-lg-2 col-sm-3 search_btn_hotl text-right ">
												           <!--     <input id="btnSearchFlights"  type="button" class="btn btn-primary btn-lg" value="Search Hotels" onclick="submitHotelForm();"> -->
                                                  
													 <button id="btnSearchFlights"  type="submit" class="btn btn-primary btn-lg hidden-xs hidden-md hidden-sm" value="Search Flights" onclick="return submitHotelForm();">
													
																<div class="srch-btn">SEARCH</div>
															</button>
															
															 <input type="button" onclick="return submitHotelForm();" value="Search Now" class="btn btn-primary btn-lg hidden-lg " style="width:100%" id="btnSearchFlights">
												   </div>
												   
												   
                                                </div><!-----From/To -------------->
												 
                                                 
												 
                                            </div>
                                        </form:form>
           
	
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                    
                </div>
				</div>
				
    </div>
     
     
  </div>
</div>
				</div>
            </div>
			
		
<script src="/resources/js/jquery-1.8.2.min.js"></script> 
<script src="/resources/js/modernizr.min.js"></script> 
<script src="/resources/js/respond.min.js"></script> 
<script src="/resources/js/prefixfree.min.js"></script> 
<script src="/resources/js/bootstrap.min.js"></script>
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.slides.min.js"></script>
<script src="/resources/js/index_eng.js"></script>
<script src="/resources/js/common-engine.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.js"></script>
<script src="/resources/js/notify.js"></script>
<script src="/resources/js/fareDeals.js"></script>


            <!-----Search Engine row End-------------->