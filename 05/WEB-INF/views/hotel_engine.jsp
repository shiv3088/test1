<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>


<div class="search_engine" ng-controller="dealCtrl"><!-- start search engine -->
         <style>.pl0 { padding-left:0;  } #roomNo0 { display:none; } </style>
        <ul class="nav nav-pills nav-stacked col-sm-2 col-xs-12 no-padding">
            <li class="active">
            	<a href="#tab_b" data-toggle="pill">
                	<span class="icn_hotel"><i class="fa fa-bed"></i></span>
                    <p class="serach_left_part">Hotels</p>
                </a>
            </li>
			<li >
            	<a href="#tab_a" data-toggle="pill">
                	<span class="icn_plan"><i class="fa fa-plane"></i></span>
                    <p class="serach_left_part">Flights</p>
                </a>
            </li  >
           
          <!--   <li>
            	<a href="#tab_c" data-toggle="pill">
                	<span class="icn_car"><i class="fa fa-car"></i></span>
                    <p class="serach_left_part">Car</p>
                </a>
            </li> -->
        </ul>
        <div class="tab-content col-sm-10 col-xs-12 no-padding engin_div"><!-- start tab content -->
        
            <div class="tab-pane  col-xs-12 padding-md-top padding-md-bottom" id="tab_a"><!-- start tab content_1 -->
            	 <form:form method="POST"  action="/search" modelAttribute="flightSearch" id="flightSearch">
				 <div id="error" class="alert-danger"></div>
                <div class="col-xs-12 no-padding">
                	<ul class="list-inline list-unstyled rou_one_div col-sm-10 col-sm-offset-2">
                    	<li>
                        	<a  class="round_text active" id="rt" onClick="ddlTypejourneyChange(2);">Round Trip</a>
                        </li>
                    	<li>
                        	<a  class="oneway_text" id="ow" onClick="ddlTypejourneyChange(1);">One Way</a>
                        </li>
                    </ul>
                </div>
                 <form:input type="hidden" style="height: 0px; width:0px; border: 0px;" ng-model="tripType" path="tripType" id="tripType" value="2" name="ddlTypejourney"/>
													
                <div class="col-xs-12 no-padding margin-bottom"><!-- start of LIVING FROM -->
                    <div class="input-group input_div">
                        <span class="input-group-addon left_img" id="basic-addon1">
                        	<img src="/resources/travelopick/images/location.png" alt="Location">
                        </span>
                         <form:input path="froCity" ng-model="froCity" class="form-control inpt_cont" autocomplete="off" placeholder="Leaving From" />
                   </div>
                </div><!-- end of LIVING FROM -->
            
                <div class="col-xs-12 no-padding margin-bottom"><!-- start of WHERE TO -->
                    <div class="input-group input_div">
                        <span class="input-group-addon left_img" id="basic-addon1">
                        	<img src="/resources/travelopick/images/location.png" alt="Location">
                        </span>
                         <form:input path="toCity"  ng-model="toCity" placeholder="Where To" class="form-control inpt_cont" autocomplete="off"/>
                    </div>
                </div><!-- end of WHERE TO -->
            
                <div class="col-xs-12 no-padding margin-bottom"><!-- start of calendar -->
                	<div class="col-sm-6 col-xs-6 no-padding-left m-left"><!-- start of left -->
                        <div class="input-group input_div">
                           	<form:input class="form-control inpt_cont no-border" readonly="true" ng-model="departDate" path="froDate" placeholder="Depart date" id="departDate" name="tbDepart"/>
                                                                       
                           
                        </div>
                    </div><!-- end of left -->
                	<div class="col-sm-6 col-xs-6 no-padding m-right" id="returnDiv" style=""><!-- start of right -->
                        <div class="input-group input_div">
                          <form:input class="form-control inpt_cont no-border" readonly="true" ng-model="returnDate" path="toDate" placeholder="Return date" id="returnDate" name="tbReturn"/> 
                        
                           
                        </div>
                    </div><!-- end of right -->
                </div><!-- end of calendar -->
            
                <div class="col-xs-12 no-padding margin-bottom"><!-- start of adults -->
                	<div class="col-sm-6 col-xs-12 no-padding-left m-padding margin-bottom"><!-- start of left -->
                    	<div class="col-sm-6 col-xs-6 no-padding-left padding-sm-right "><!-- start of adult -->
                        	<h5 class="no-margin-top text-bold">Adult </h5>
                            <div class="input-group col-xs-12">
                            	<form:select path="adult" items="${model.adult}" ng-model="adult" class="form-control arrow_down" name="ddlAdults" />
								
                            </div>
                        </div><!-- end of adult -->
                    	<div class="col-sm-6 col-xs-6 no-padding m-right"><!-- start of child -->
                        	<h5 class="no-margin-top text-bold">Child (2-11)</h5>
                            <div class="input-group col-xs-12">
                              <form:select path="child" items="${model.child}" class="form-control arrow_down"  ng-model="child" name="ddlChild" />
								
                            </div>
                        </div><!-- end of child -->
                    </div><!-- end of left -->
                	<div class="col-sm-6 col-xs-12 no-padding m-padding"><!-- start of right -->
                        <div class="col-sm-6 col-xs-6 no-padding-left padding-sm-right"><!-- start of infant -->
                        	<h5 class="no-margin-top text-bold">Infant (0-2)</h5>
                            <div class="input-group col-xs-12">
                            <form:select path="infant" items="${model.infant}" class="form-control arrow_down" ng-model="infant" name="ddlInfants"  />
								
                            </div>
                        </div><!-- end of infant -->
                    	<div class="col-sm-6 col-xs-6 no-padding m-right"><!-- start of infant seat -->
                        	<h5 class="no-margin-top text-bold">Infant <small>with seat</small></h5>
                            <div class="input-group col-xs-12">
                              <form:select path="infantWs" items="${model.infant}" class="form-control arrow_down" ng-model="infantWs" name="ddlInfants" />
								
                            </div>
                        </div><!-- end of infant seat -->
                    </div><!-- end of right -->
                </div><!-- end of adults -->
            
                <div class="col-xs-12 no-padding margin-bottom"><!-- start of airline_class -->
                	<div class="col-sm-6 col-xs-6 no-padding-left m-left"><!-- start of left -->
                        <div class="input-group col-xs-12">
                         
                            <select id="select-air" class=" form-control arrow_down" ng-model="airlines" path="airlines" name="airlines" id="airlines" >
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
                    </div><!-- end of left -->
                	<div class="col-sm-6 col-xs-6 no-padding m-right"><!-- start of right -->
                        <div class="input-group col-xs-12">
                        <form:select path="cabinClass" class="form-control arrow_down" ng-model="cabinClass" >
																        <c:forEach items="${model.cabinClass}" var="curCategory" varStatus="loop">
																             <form:option value="${curCategory}">${curCategory}</form:option>
																         </c:forEach>
																     </form:select>
                            
                        </div>
                    </div><!-- end of right -->
                </div><!-- end of airline_class -->
                
                <div class="col-xs-12 no-padding"><!-- start of other_search -->
                	<p class="col-sm-6 col-xs-5  no-padding">
                        <span class="text-white padding-sm-right">
							<label class="no-margin extra_text checkbox-inline no-padding"><form:radiobutton path="FlexibleSearch" ng-model="FlexibleSearch" value="false"  name="optradio"/> Exact dates </label> 
						</span>
						<span class="text-white padding-sm-right checkbox-inline no-padding">
							<label class="no-margin extra_text"><form:radiobutton path="FlexibleSearch" ng-model="FlexibleSearch"  value="true"  name="optradio"/> +/-2 days
</label>
						</span> 
<!-- end of radio_button -->						
                        </p>
                	<div class="col-sm-6 col-xs-7 no-padding text-right"><!-- start of right -->
                       <span class="pull-right">
                                <label class="checkbox-inline">		<form:checkbox path="directFlight" ng-model="directFlight"  value="true"  name="optradio"/>Direct Flights Only</label>
					
                            </span>
                    </div><!-- end of right -->
                </div><!-- end of other_search -->
                 <!-- end of MoreAdvanced_div -->
	<div class="col-sm-12 col-xs-12 no-padding margin-sm-bottom">
						<a href="#" onclick="unaccompanied();" class="extra_text">Unaccompanied Minor</a>
					</div>				    
<div class="col-sm-12 col-xs-12 no-padding-left" style="" id="returnAnother"><!-- start of left -->
                        <a href="#return" data-toggle="collapse" class="extra_text" >
                            Return to or from another city/airport?
                        </a>
                    </div><!-- end of left -->
			
                <div class="col-xs-12 no-padding margin-bottom margin-top"><!-- start of row_3 -->
                    <div id="return" class="collapse col-xs-12 no-padding-left"><!-- start of Return_div -->
                        <div class="input-group input_div col-xs-12 margin-bottom">
                        	<span class="input-group-addon left_img" id="basic-addon1">
                                <img src="/resources/travelopick/images/location.png" alt="Location">
                            </span>
                            <form:input path="returnFroCity" ng-model="returnFroCity" aria-describedby="basic-addon1" class="form-control inpt_cont" placeholder="Returning From" autocomplete="off" />
                        </div>
                        <div class="input-group input_div col-xs-12 margin-bottom">
                        	<span class="input-group-addon left_img" id="basic-addon1">
                                <img src="/resources/travelopick/images/location.png" alt="Location">
                            </span>
                              <form:input path="returnToCity" ng-model="returnToCity"  aria-describedby="basic-addon1" autocomplete="off" class="form-control inpt_cont" placeholder="Where To" />
						
                        </div>
                    </div><!-- end of Return_div -->
                   
                </div><!-- end of row_3 -->
                
                <div class="col-xs-12 no-padding">
                 <input type="button" onclick="submitForm();" value="Search Flight" class="btn btn-div btn-block" style="width:100%" id="btnSearchFlights">
				
                </div>
                 </form:form>
            </div><!-- end tab content_1 -->
           
            <div class="tab-pane active col-xs-12 padding-md-top padding-md-bottom" id="tab_b">
               <form:form method="POST"  action="/hotelSearch" modelAttribute="hotelSearch" id="searchHotel">    
                
                <div class="col-xs-12 no-padding">
                <div class="hotel_text"> Select Your Preferred Location </div>
                	
                </div>
                
                <div class="col-xs-12 no-padding margin-bottom"><!-- start of LIVING FROM -->
                    <div class="input-group input_div">
                        <span class="input-group-addon left_img" id="basic-addon1">
                        	<img src="/resources/travelopick/images/location.png" alt="Location">
                        </span>
                          <form:input path="stayCity" ng-model="stayCity" class="form-control inpt_cont" autocomplete="off" placeholder="Select Location" />
                    </div>
                </div><!-- end of LIVING FROM -->

                <div class="col-xs-12 no-padding margin-bottom"><!-- start of calendar -->
                	<div class="col-sm-6 col-xs-6 no-padding-left m-left"><!-- start of left -->
                        <div class="input-group input_div">
                        	<form:input  ng-model="checkInDate" readonly="true" class="form-control inpt_cont no-border" placeholder="Check In" path="checkInDate" id="checkInDate" name="tbcheckIn"/>
                           
                        </div>
                    </div><!-- end of left -->
                	<div class="col-sm-6 col-xs-6 no-padding m-right"><!-- start of right -->
                        <div class="input-group input_div">
                         <form:input ng-model="checkOutDate" readonly="true" class="form-control inpt_cont no-border" placeholder="Check Out" path="checkOutDate" id="checkOutDate" name="tbcheckOut"/>
                           
                        </div>
                    </div><!-- end of right -->
                </div><!-- end of calendar -->
              <input type="hidden" id="adultNo" value="1"/>
												    <input type="hidden" id="childNo" value="0"/>
													<form:hidden class="form-control dat"  path="guest" id="guest" placeholder="1 Room, 1 Adult, 0 Child"  readonly="true"/>
                <div class="col-xs-12 no-padding margin-bottom"><!-- start of adults -->
                	<div class="col-sm-6 col-xs-12 no-padding-left m-padding margin-bottom"><!-- start of left -->
                    	<div class="col-sm-12 col-xs-12 no-padding "><!-- start of adult -->
                        	<h5 class="no-margin-top text-bold font-size:16px; color:#fff;">Room : 1 </h5>
                            <div class="input-group col-xs-12">
                            <form:select path="room" items="${model.roomNo}" class="form-control arrow_down" ng-model="rooms" id="rooms" name="ddlRooms" />
							
                            </div>
                        </div><!-- end of adult -->
                    	<!-- end of child -->
                    </div><!-- end of left -->
                     <div id="cust"> 
                             <div class="col-sm-6 col-xs-12 pl0" id="roomNo0" style="font-size:16px; color:#fff; margin-top:30px;">
                                                                     
                             </div>
                             
	                	<div class="col-sm-6 col-xs-12 no-padding m-padding " ><!-- start of right -->
	                	 
	                	  <!-- <div style="color:white">Room : <span id="rSize">1</span></div> -->
	                	    
	                        <div class="col-sm-6 col-xs-6 no-padding-left padding-sm-right"><!-- start of infant -->
	                        	<h5 class="no-margin-top  text-bold">Adult</h5>
	                            <div class="input-group col-xs-12 margin-bottom">
                              <form:select path="rooms[0].adults" items="${model.roomNo}" ng-model="rooms0adult" id="roomsadults" class="form-control arrow_down" name="ddlInfants"  onchange="addAdult(this);" />
							</div>
                        </div><!-- end of infant -->
                    	<div class="col-sm-6 col-xs-6 no-padding m-right"><!-- start of infant seat -->
                        	<h5 class="no-margin-top text-bold">Child</h5>
                            <div class="input-group col-xs-12 margin-bottom">
                             <form:select path="rooms[0].child" items="${model.childNo}" id="rooms0child" ng-model="rooms0child" class="form-control arrow_down" name="ddlInfants" onchange="addAge(this);"/>
															
                            </div>
                        </div><!-- end of infant seat -->
                    </div>
                     </div><!-- end of right -->
                   
             		 <div class=" col-sm-12 col-xs-12 no-padding" id="childAge0">
					  <div id="age0" style="display:none; padding-bottom:5px; color:#fff; border-bottom:1px solid #666; border-bottom:1px solid #666; margin-bottom:10px;">Ages of children at check-in </div>
					  <div class="col-sm-0 col-xs-12 hidden-lg hidden-md">
					 
						
					  </div> 
					
						 <div class=" col-md-4 col-sm-6 col-xs-6 margin-bottom no-padding-left" id="00" style="display:none;">
					 
						<div class="input-group col-xs-12">
						 
						<form:select path="rooms[0].children[0].age" items="${model.childAge}" class="form-control arrow_down" name="ddlInfants" />
						</div>
					</div> 
					<div class="col-md-4 col-sm-6 col-xs-6 margin-bottom no-padding-left" id="01" style="display:none;">
					 
						<div class="input-group col-xs-12">
						 
						<form:select path="rooms[0].children[1].age" items="${model.childAge}" class="form-control arrow_down" name="ddlInfants" />
						</div>
					</div> 
					<div class="col-md-4 col-sm-6 col-xs-6 margin-bottom no-padding-left" id="02" style="display:none;">
					 
						<div class="input-group col-xs-12">
						 
						<form:select path="rooms[0].children[2].age" items="${model.childAge}" class="form-control arrow_down" name="ddlInfants" />
						</div>
					</div> 
					<div class="col-md-4 col-sm-6 col-xs-6 margin-bottom no-padding-left" id="03" style="display:none;">
					 
						<div class="input-group col-xs-12">
						 
						<form:select path="rooms[0].children[3].age" items="${model.childAge}" class="form-control arrow_down" name="ddlInfants"/>
						</div>
					</div> 
					<div class="col-md-4 col-sm-6 col-xs-6 margin-bottom no-padding-left" id="04" style="display:none;">
					 
						<div class="input-group col-xs-12">
						 
						<form:select path="rooms[0].children[4].age" items="${model.childAge}" class="form-control arrow_down" name="ddlInfants" />
						</div>
					</div>
					 <div class="col-sm-0 pa0 hidden-lg hidden-md">
					 
						
					  </div> 
					 </div>
		 </div>												
                <!-- end of adults -->

                <div class="col-xs-12 no-padding">
          									
                    <button type="button" type="submit" class="btn btn-div btn-block" onclick="return submitHotelForm();">
                        Search Hotels
                    </button>
                </div>
                </form:form>
            </div>
            <div class="tab-pane col-xs-12 padding-md-top padding-md-bottom" id="tab_c">
                <div class="col-xs-12 no-padding">
                <div class="hotel_text"> Find Car Rental Deals </div>
                	
                </div>
                
                <div class="col-xs-12 no-padding margin-bottom"><!-- start of LIVING FROM -->
                    <div class="input-group input_div">
                        <span class="input-group-addon left_img" id="basic-addon1">
                        	<img src="/resources/travelopick/images/location.png" alt="Location">
                        </span>
                        <input type="text" class="form-control inpt_cont" placeholder="Where you go" aria-describedby="basic-addon1" id="ChooseCity" name="ChooseCity">
                    </div>
                     <div class="margin-top"><input onclick="" name="" id="" value="checkDropoff" type="checkbox">
				<span>Droping-off in a different location</span> </div>
                </div><!-- end of LIVING FROM -->

                <div class="col-xs-12 no-padding margin-bottom"><!-- start of calendar -->
                	<div class="col-sm-6 col-xs-6 no-padding-left m-left">
                   <!-- start of left -->
                        <div class="input-group input_div">
                            <input type="text" class="form-control inpt_cont no-border" placeholder="Pick-Up Date" aria-describedby="basic-addon1" id="ChooseCity" name="ChooseCity">
                            <span class="input-group-addon left_img" id="basic-addon1">
                                <img src="/resources/travelopick/images/depart.png" alt="Depart" class="minus_margin_top">
                            </span>
                        </div>
                    </div><!-- end of left -->
                	<div class="col-sm-6 col-xs-6 no-padding m-right">
                  <!-- start of right -->
                        <div class="input-group input_div">
                            <input type="text" class="form-control inpt_cont no-border" placeholder="Time" aria-describedby="basic-addon1" id="ChooseCity" name="ChooseCity">
                            <span class="input-group-addon left_img" id="basic-addon1">
                                <img src="/resources/travelopick/images/return.png" alt="Return" class="minus_margin_top">
                            </span>
                        </div>
                    </div><!-- end of right -->
                </div><!-- end of calendar -->
                
                <div class="col-xs-12 no-padding margin-bottom"><!-- start of calendar -->
                	<div class="col-sm-6 col-xs-6 no-padding-left m-left">
                   <!-- start of left -->
                        <div class="input-group input_div">
                            <input type="text" class="form-control inpt_cont no-border" placeholder="Drop-Off Date" aria-describedby="basic-addon1" id="ChooseCity" name="ChooseCity">
                            <span class="input-group-addon left_img" id="basic-addon1">
                                <img src="/resources/travelopick/images/depart.png" alt="Depart" class="minus_margin_top">
                            </span>
                        </div>
                    </div><!-- end of left -->
                	<div class="col-sm-6 col-xs-6 no-padding m-right">
                  <!-- start of right -->
                        <div class="input-group input_div">
                            <input type="text" class="form-control inpt_cont no-border" placeholder="Time" aria-describedby="basic-addon1" id="ChooseCity" name="ChooseCity">
                            <span class="input-group-addon left_img" id="basic-addon1">
                                <img src="/resources/travelopick/images/return.png" alt="Return" class="minus_margin_top">
                            </span>
                        </div>
                    </div><!-- end of right -->
                </div><!-- end of calendar -->
            
                <div class="col-xs-12 no-padding margin-bottom"><!-- start of adults -->
                	 	<div class="col-sm-6 col-xs-12 no-padding-left "><!-- start of adult -->
                        	<h5 class="no-margin-top text-bold">Driver Age:</h5>
                            <div class="input-group input_div col-xs-12">
                                <select id="drop_1" name="drop_1" class="selectpicker show-tick form-control select_cont">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                        </div><!-- end of adult -->

               
                </div><!-- end of adults -->

                <div class="col-xs-12 no-padding">
                    <button type="button" class="btn btn-div btn-block">
                        Search Car
                    </button>
                </div>
            </div>
        </div><!-- end tab content -->
    </div>
    <!-- end search engine -->

    