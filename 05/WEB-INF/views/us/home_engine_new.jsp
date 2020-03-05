<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%> 

<link href="/resources/new-css/engine-style.css?v23232" rel="stylesheet" />

<!--Safe pop's Start-->
	<jsp:include page="partial/data-safe.jsp"></jsp:include>
<!--Safe pop's  End-->


<div data-ng-controller="dealCtrl">
	<script>
		$(document).ready(function() {
			localStorage.removeItem('ls.couponsPopup');
		});
	</script>

	

	<!-- start search engine -->

	<ul class="engine-tab hidden-xs">
		<c:if test="${data.flightstab == true}">
			<li id="flight_tab" class="active" >
				<a href="#tab_a" id="fA" data-toggle="pill"> <span
					class="icn_plan"><i class="fa fa-plane"></i></span> <span
					class="serach_left_part">Flights</span>
				</a>
			</li>
		</c:if>
	</ul>

	<div class="new-engine-div">
		<!-- start tab content flights start here -->
		<c:if test="${data.flightstab == true}">
			<div class="active" id="tab_a">
				<form:form method="POST" action="/search"
					modelAttribute="flightSearch" id="flightSearch">
					<div id="error" class="alert-danger"></div>
					<div class="trip-type">
						<ul>
							  <li>
								<div class="inputSet2 radio mt0">
								  <label>
								  <input class="" type="radio" id="rt" onClick="ddlTypejourneyChange(2);" name="optradio" checked />
								  <span>Round Trip</span> </label>
								</div>
							  </li>
							  <li>
								<div class="inputSet2 radio mt0">
								  <label>
								  <input class="" type="radio" id="ow" onClick="ddlTypejourneyChange(1);" name="optradio">
								  <span>One Way</span> </label>
								</div>
							  </li>
						</ul>
					</div>
					
					<form:input type="hidden" data-ng-model="tripType" path="tripType"
						id="tripType" value="2" />

					<form:input type="hidden" path="pageType" id="pageType" value="" />
					<form:input type="hidden" path="pageID" id="pageID" value="" />
					<form:input type="hidden" path="sourceMedia" id="sourceMedia"
						value="" />
					<form:input type="hidden" path="airlinesPpc" name="airlinesPpc"
						id="airlinesPpc" value="" />
						
						<div class="engine-row">						
<div class="row no-margin">
	<div class="col-md-10 no-padding">
			<div class="row no-margin"> 

					<div class="col col-md-3 col-sm-6">
					
						<div class="input-group input_div ">

							<form:input path="froCity" data-ng-model="froCity"
								class="form-control input_cont" autocomplete="off"
								placeholder="Leaving From" />
							<span class="location-icon fa fa-map-marker"></span>
						</div>
					
					</div>
					<!-- start of WHERE TO -->
					<div class="col  col-md-3 col-sm-6  col-xs-12   ">
					
						<div class="input-group input_div">

							<form:input path="toCity" data-ng-model="toCity"
								placeholder="Where To" class="form-control input_cont"
								autocomplete="off" />
							<span class="location-icon fa fa-map-marker"></span>
						</div>
						
					</div>
					<!-- end of WHERE TO -->
					<!-- start of calendar -->
					<div class="col  col-md-3  col-xs-12 calender-div">
								<div class="col-xs-6 no-padding" id="depart-datediv">
							<div id="departDate_new" class="input_div  ">
								<form:input class="form-control input_cont "
									readonly="true" data-ng-model="departDate" path="froDate"
									placeholder="Depart date" id="departDate" style="border-right:0 !important;" />
								
								<span class="calender-icon fa fa-calendar"></span>	 								
								
							</div>
						</div>
						<!-- Retrun Calender -->
						<div class="col-xs-6  no-padding" id="returnDiv">
							<div id="returnDate_new" class=" ">
							<span class="devid-space">
								<form:input class="form-control input_cont pl15px"
									readonly="true" data-ng-model="returnDate" path="toDate"
									placeholder="Return date" id="returnDate" style="border-left:0 !important; background:#fff;" /> 
							</span>
							</div>
						</div>
						<!-- end of right -->
					</div>
					<!-- end of calendar -->
					
					<!--traveller Box Start-->
					<div id="traveller" class="col col-md-3 col-xs-12">
						<div class="arrow_down"> 
							<input type="text" id="person" class="pl10px" readonly="true" placeholder="1 Adult, Economy">
						</div> 

					<!-- start of adults -->					
					<div class="popup traveler-dropdown" style="display: none;">
						<div class="traveller-box">
							
							<div class="add-traveller">
								<label class="label">Adults</label> 
								<div class="content">
									<input type="button" class="traveler-plus maincalulation" value="+" id="sub1plus">
									<input type="button" class="traveler-minus maincalulation" value="-" id="sub1minus">
									<form:input path="adult" class="count"  id="sub1" readonly="true" value="1"/>	 									
									<div class="clearfix"> </div>									
								</div>
							</div>
							
							<div class="add-traveller">
								<label class="label">Child (2-11)</label> 
								<div class="content">
									<input type="button" class="traveler-plus maincalulation"
										value="+" id="sub2plus">
									<input type="button" class="traveler-minus maincalulation"
										value="-" id="sub2minus"> 
										<form:input path="child" class="count" id="sub2" value="0"
										readonly="true" />	 									
									<div class="clearfix"> </div>									
								</div>
							</div>
							
							
							<div class="add-traveller">
								<label class="label">Infant (0-2)</label> 
								<div class="content">
									<input type="button" class="traveler-plus maincalulation" value="+" id="sub3plus">
									<input type="button" class="traveler-minus maincalulation" value="-" id="sub3minus">
									<form:input path="infant" class="count" id="sub3" value="0"	readonly="true" /> 									
									<div class="clearfix"> </div>									
								</div>
							</div>
							
							
							<div class="add-traveller">
								<label class="label">Infant <small>with seat</small></label> 
								<div class="content">
									<input type="button" class="traveler-plus maincalulation" value="+" id="sub4plus">
									<input type="button" class="traveler-minus maincalulation" value="-" id="sub4minus">
									<form:input path="infantWs" class="count" id="sub4" value="0"	readonly="true" />	 									
									<div class="clearfix"> </div>									
								</div>
							</div>
							
							<!-- Cabin Class -->
							<div class="add-traveller">
									<div class="row">
									<div class="col-xs-4">
											<label class="label mt10px">Class</label> 
									</div>
									<div class="col-xs-8">  
										 <form:select path="cabinClass" class="form-control maincalulation" data-ng-model="cabinClass">
											<c:forEach items="${model.cabinClass}" var="curCategory" varStatus="loop">
												<form:option value="${curCategory}">${curCategory}</form:option>
											</c:forEach>
										</form:select>
									</div>
									</div>
								 </div>
								 
								 <a href="javascript:void(0);" onclick="unaccompanied();" class="extra_text2 " >Unaccompanied Minor</a>
							   
							  <a href="javascript:void(0);" class="done">Done</a> </div>
						 
								 
 		
					</div>					 
					<!-- end of adults -->
					
				</div>
				<!--Traveller Box End-->
				
				 </div>
			</div>
			 
	<div class="col-md-2 no-padding">
		<input type="button" onclick="submitForm();" value="Search" class="main-search-btn" id="btnSearchFlights"> 
	</div>
</div>




<div class="direct-flight-option"> 

<div class="row">
<div class="col-sm-4  col-xs-6">
	<div class="checkbox ">
		<label> <form:checkbox path="directFlight" data-ng-model="directFlight" value="true" />
			<span>Direct Flights Only</span>
		</label> 
	</div> 
</div>
<div class="col-sm-5"> </div>
<div class="col-sm-3 col-xs-6 text-right">
<a href="javascript:void(0);" class="advance-search-btn " data-toggle="collapse" data-target="#demo"> Preferred Airlines <span class="fa fa-angle-down"></span></a>
	<div id="demo" class="collapse hide-block">
		<div class=" arrow_down">
			<form:select id="select-air" class="form-control"
				path="airlines">
				<form:option value="All">Airlines</form:option>
				<form:options items="${airlineListNew}" />
			</form:select>
		</div>
	</div>
</div>
</div>
	
</div>

				
				
 


					<!--Discount coupon  start here -->
					<div class="col-xs-12 no-padding " id="cPopup" style="display:none;">
						<!-- discount Coupon -->
						<div class="discountCoupon">

							<p>
								Save $<span id="camt"></span> per passenger for this route Use
								coupon <b><span id="ccode"></span></b>.
							</p>

							<button type="button" class="button" onclick="ApplyCoupons();">Apply</button>

							<a href="javascript:void(0);" class="coupon_close"
								onclick="closeCoupons();">X</a>

						</div>

						<!-- discount Coupon -->
					</div>

					<!-- Coupon code apply -->
					<div class="col-xs-12 no-padding margin-bottom" id="cPopupApply"
						style="display:none;">

						<div class="couponApplied">
							<i class="fa fa-check"></i> You are eligible for coupon <span
								id="cCodesV"></span>
						</div>

					</div>
					<!-- Coupon code apply -->
 

					<div class="no-padding-left hidden-xs col-sm-12 "
						id="returnAnother">
						<!-- start of left -->
						<!-- <a href="javascript:void(0);" onclick="jawEngineToggle();"
							class="extra_text"> Return to or from another city/airport?
						</a> -->
						<div class="col-xs-12 no-padding">
							<!-- start of row_3 -->
							<div id="return" class="col-xs-12 no-padding"
								style="display:none;">
								<!-- start of Return_div -->
								<div class="row">
									<div class="col-sm-3">
										<div class="input-group input_div margin-bottom">

											<form:input path="returnFroCity"
												data-ng-model="returnFroCity"
												class="form-control input_cont" placeholder="Returning From"
												autocomplete="off" onfocus="this.select();" />
											<span class="location-icon fa fa-map-marker"></span>
										</div>
									</div>
									<div class="col-sm-3">
										<div class="input-group input_div margin-bottom">

											<form:input path="returnToCity" data-ng-model="returnToCity"
												autocomplete="off" class="form-control input_cont"
												placeholder="Where To" onfocus="this.select();" />
											<span class="location-icon fa fa-map-marker"></span>
										</div>
									</div>
								</div>




							</div>
							<!-- end of Return_div -->

						</div>
					</div>
					<!-- end of left -->

					<!-- end of row_3 -->
 
				</form:form>
			</div>
		</c:if>
		<!-- start tab content flights end here -->
 
 
	</div>
	<!-- end tab content -->
</div>
<!-- end search engine -->

</div>

<script>
	$(document).ready(function() {
		$("#lessOp").click(function() {
			$("#moreOp").show();
			$(this).hide();
		});
		$("#moreOp").click(function() {
			$(this).hide();
			$("#lessOp").show();
		});
	});
</script>

<script>
	$(document).ready(function() {
		console.log("pageType " + $('#pageType').val());
		console.log("pageID " + $('#pageID').val());
		console.log("sourceMedia " + $('#sourceMedia').val());

	});
</script>

<script>
	$(document).ready(function() { 	
	
	//traveller
		$("#person").click(function () { 
			$(".traveler-dropdown").slideDown(); 
		});
		$(".done").click(function () {
			$(".traveler-dropdown").slideUp();
			$("#select_class").focus();
		});
			
	});
</script> 