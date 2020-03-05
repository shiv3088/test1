<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE HTML>
<html lang="en" data-ng-app="carListApp">

<head>

	<title data-product="Don't forget to book">Car Search  | ${data.siteName}</title>
	<!-- <script>history.forward();</script> -->
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	
	<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
	
	<!-- Added style here-->
	<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
	<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
	<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
	<link href="/resources/car/css/car-style.css?26102018" rel="stylesheet">
	
	<!--<!-- Added javascript here-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="/resources/car/js/angular.js"></script>
    <script src="/resources/js/angular-animate/angular-animate.min.js"></script>
 	<script src="/resources/car/js/bootstrap.min.js"></script>
	<script src="/resources/lib/dirPagination.js"></script>
	<script src="/resources/car/js/car-custom.js"></script>
	
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

	<!--  / Google analytics \ -->
	<jsp:include page="../google-analytics.jsp"></jsp:include>
	<!--  / Google analytics \ -->
		
	<!--Title change script start here-->
    <script>
    var cffTitle = document.title,
	cffTitleBlur = document.getElementsByTagName('title')[0].getAttribute('data-product');
	window.onblur = function () {
		document.title = cffTitleBlur;
	}
	window.onfocus = function() {
		document.title = cffTitle;
	}
    </script>
<!--Title change script end here-->
</head>

<body class="car_flow result-body" data-ng-controller="CarResultController">
<input type="hidden" id="refreshed" value="no">
<script type="text/javascript">
   onload=function(){
	   var e=document.getElementById("refreshed");
	   if(e.value=="no")e.value="yes";
	   else{e.value="no";location.reload();}
   }
</script>



<c:forEach items="${carListWrapper}" var="carsearch" varStatus="se" >
	<div class="header-heading3">		
		<c:set var="pickup1" value="${carsearch.pickUpCity}" scope="page"/>
		<c:set var="dropoff1" value="${carsearch.dropOffCity}" scope="page"/> 
		<c:set var="pickupdate1" value="${carsearch.pickUpDate}" scope="page"/>
		<c:set var="dropdate1" value="${carsearch.dropOffDate}" scope="page"/>
		<c:set var="pickuptime1" value="${carsearch.pickUpHour}" scope="page"/> 
		<c:set var="droptime1" value="${carsearch.dropOffHour}" scope="page"/>
		<c:set var="carcompany1" value="${carsearch.vendorCode}" scope="page"/>
		<c:set var="cartype1" value="${carsearch.vehicleType}" scope="page"/>
	</div>
	<input type="hidden" id="selectedVendorCode" value="${carSearchWrapper.vendorCode}"/>
	<input type="hidden" id="selectedVehicleType" value="${carSearchWrapper.vehicleType}"/>
	<input type="hidden" id="selectedRateCode" value="${carSearchWrapper.rateCode}"/>
	<input type="hidden" id="selectedRatePlan" value="${carSearchWrapper.ratePlan}"/>
	<input type="hidden" id="selectedSupplierId" value="${carSearchWrapper.supplierId}"/>
	<input type="hidden" id="selectedLocationId" value="${carSearchWrapper.locationId}"/>
	<input type="hidden" id="utmSourceCheck" value="${carSearchWrapper.sourceMedia}"/>
	
	<c:set var = "destinationCar" value = "${fn:split(carSearch.pickupCity, ',')}" />
 <c:set var="destinationCarCountry" value="${destinationCar[3]}" />
 <c:set var="destinationCarState" value="${destinationCar[2]}" />
  <c:if test="${fn:length(destinationCar[3]) == 0}">
  <c:set var="destinationCarCountry" value="${destinationCar[2]}" />
  <c:set var="destinationCarState" value="" />
  </c:if>
	
</c:forEach>

<!--  / Mid page start here \ -->	
<loading>  				
	<div class="result-mid-sec"> 
	  <!-- <div class="luf-icon"><div class="luf-loader"></div></div>-->
            <div style="margin-top: 20px;width: 100%;float:left; text-align: center;"><img src="/resources/travelopick/images/logo.png" /></div> 
			<div style="width: 100%; float: left; clear: both;"><img src="/resources/images/loadingresult.gif" width="110" height="110"  /></div>
		<div class="location">${carSearchWrapper.pickupCity}</div>
		<c:set var="checkin" value="${fn:split(pickupdate1,'T')}"/>
		<fmt:parseDate value="${checkin[0]}" var="fromDate" pattern="MM-dd-yyyy" />	
		<c:set var="checkout" value="${fn:split(dropdate1,'T')}"/>
		<fmt:parseDate value="${checkout[0]}" var="toDate" pattern="MM-dd-yyyy" />
		<div class="date">
		  <fmt:formatDate value="${fromDate }" pattern="EEE, dd MMM, yyyy" /> - <fmt:formatDate value="${toDate }" pattern="EEE, dd MMM, yyyy" /></div>
        <div class="wait"> Please wait,<br>
		While ${data.siteName} is searching for the best car <span class="dot">deals<span>.</span><span>.</span><span>.</span></span></div>
		</div>
	
</loading>
<!--  \ Mid page end here / -->

<!--  / Header start here \ -->
<div id="header" style="display: none;">
	<jsp:include page="../confirm_header.jsp"></jsp:include>
 </div>
<!--  \ Header end here / -->

<div class="clearfix"></div>

<!--  / Main Container start here \ -->
<div style="display: none;" id="midblock">



<div class="carSearhEngine">
     
   <form:form method="POST" modelAttribute="carSearch" id="searchCar">


  	 <div class="container">
	   <!--  / Search itenary start here \ -->
		<div class="car_search_detail">
			 <div class="row">
				 <div class="col-md-10 col-sm-12">
					 <span class="data1 hidden-xs">Pickup Destination</span>
					 <span class="data2"> ${carSearchWrapper.pickupCity}</span>
					
					 <span class="col-6">
					 <span class="data2"> ${carSearchWrapper.pickupDate}</span> |
					 <span class="data2"> ${carSearchWrapper.pickupTime} hrs</span> |
					  <span class="data2"> ${carSearchWrapper.dropDate}</span> |
					 <span class="data2"> ${carSearchWrapper.dropTime} hrs</span>
					 </span>
					 <span class="data1">Driver Age</span>
			                 <i class="fa fa-long-arrow-right"></i>
			                 <span class="data2"> ${carSearchWrapper.driverAge}</span>
				 </div>
				 <div class="col-md-2 hidden-sm hidden-xs">
					 <button type="button"  class="searchModify"> Search</button>
				 </div>
			 </div>
			 
			 
			 <div class="mobile_filter_strip visible-sm visible-xs">
            <div class="row text-center">
           
                 <span class="btn modifyFilterMobile" ><i class="fa fa-filter"></i> Filter</span> 
				 <span class="btn modifySearchMobile"><i class="fa fa-pencil"></i> Modify</span> 
                
        </div>
    </div>
		 </div>
		<!--  \ Search itenary end here / -->
		
		<!--  / Modify Search start here \ -->
		<div id="modifySection" style="display: none;">
	
		<div class="filter-main-head">

		Modify Your Search 
		<a href="#" class="close-sidebar fa fa-close"></a>
	
	</div>
			<div class="holder">
			<div class="row">
				<div class="col-sm-3 full-width pickupcity" id="pickUpLocation">
					<div class="form-group">
						<form:input path="pickupCity" type="text" class="form-control input_cont" placeholder="Pick-up"/>
						<form:input type="hidden" data-ng-model="pickUpLocationID" path="pickUpLocationID" />
				<form:input type="hidden" data-ng-model="pickUpLocationCode" path="pickUpLocationCode" />
					</div>
				</div>
				<div class="col-sm-2" id="dropOffLocation" style="display:none">
					<div class="form-group">
						<form:input path="dropCity" type="text" class="form-control" placeholder="Drop-off"/>
					</div>
					<form:input type="hidden" data-ng-model="dropOffLocationID" path="dropOffLocationID" />
				<form:input type="hidden" data-ng-model="dropOffLocationCode" path="dropOffLocationCode" />
				</div>
				<div class="col-sm-2 pickDate">
					<div class="form-group">
						<form:input path="pickupDate" type="text" class="form-control cal" readonly="true" placeholder="Pick-up Date" value=""/>
						<span ></span>
					</div>
				</div>
				<div class="col-sm-1 picktime">
					<div class="form-group">
						<form:select path="pickupTime" class="form-control" items="${model.timeList}"/>
					</div>
				</div>
				<div class="col-sm-2 dropdate">
					<div class="form-group">
						<form:input path="dropDate" type="text" class="form-control cal" readonly="true" placeholder="Drop-off Date"/>
						<span></span>
					</div>
				</div>
				<div class="col-sm-1 droptime">
					<div class="form-group">
						<form:select path="dropTime" class="form-control" items="${model.timeList}"/>
					</div>
				</div>
				<div class="col-sm-1 col-xs-12 full-width">
					<div class="form-group">
			                <form:select path="driverAge" class="form-control" value="${carSearch.driverAge}" items="${model.dAge}"/>
			            </div>
			        </div>
			        <div class="col-md-2 col-sm-2 col-xs-12">
			            <div class="form-group">
						<button class="form-control btn car-btnSubmit" onClick="return submitcar();" value="Search Cars">Modify Search <i class="fa fa-angle-right" aria-hidden="true"></i></button>
					</div>
				</div>
			</div>
			<div class="row">
				
				<div class="col-md-push-6 col-md-6 text-right">
					<div class="form-group">
						<span class="cr-link advanceOptLink">Advanced Options <i class="fa fa-angle-down"></i></span>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6 hidden-xs">
					<div class="driverage ">Driver Age (30-65) 
						<i class="fa fa-info info-tooltip-icon" aria-hidden="true"></i>
							<div class="show_policy">
									<span class="arrow"></span>
									<p>Additional Fee may apply for driver under 30 Yrs or above 65 Yrs old, at the time of rental. Please check term and conditions on payment page.</p>
								</div>							 
					</div>
				</div>
			</div>
			<div class="row" id="advanceOpt" style="display:none;">
				<div class="col-md-2 col-sm-12 col-md-push-8 col-sm-pull">
					<div class="form-group">
						<form:select path="vendorCode" class="form-control" items="${model.supplier}"/>
					</div>
				</div>
				<div class="col-md-2 col-sm-12 col-md-push-8 col-sm-pull">
					<div class="form-group">
						<form:select path="vehicleType" class="form-control" items="${model.vehicleType}" />
					</div>
				</div>
			</div>
			
			<div id="sameSearch" class="crError" style="display: none;">
							<i class="fa fa-exclamation-triangle"></i> Please change your search criteria before clicking the "Modify Search" button.
						</div>
			<div class="crError" id="carError"></div>
						
			</div>
		
		   </div>
		<!--  \ Modify Search end here / -->
		</div>
   </form:form>
   
</div>

<div class="container" >
    <div class="row">
     <!--  / Results Section Start here \ -->  
        <div class="col-lg-10 col-md-9" >
        
         <!--Sorting and tab filter Div start -->
          <div class="col-sm-12 no-padding">
            <div style="width: 100%;float:left; text-align: center; margin-top: 55px;"   ng-show="carlist.length == 0 ">
                 <div style="width: 380px;background: #efefef;margin: auto;padding: 25px;border-radius: 10px;">
                   <div style="width:100%; float:left; font-size: 24px;color: #4863db;;"> <strong>Sorry!</strong> No Result found.</div>
                   <div  style="width:100%; float:left; font-size: 14px;font-weight: 600;">Please change search criteria.</div>
                   <div style="clear:both;"></div>
                 </div>
             </div>
           </div>
         </div>
      </div>
  </div>

  

 
<div class="container" >
    <div class="row">
	 <!--  / Results Section Start here \ -->  
        <div class="col-lg-10 col-md-9" data-ng-show="carlist.length">
		
		 <!--Sorting and tab filter Div start -->
          <div class="col-sm-12 no-padding">
		  <div class="results-sorting">
            <div class="results-found pull-left hidden-xs" ><span class=" text-orange fa fa-search" ></span>  {{filtered.length}} Cars Found  </div>

		
           
            <div class="sorting-tab">
              
			  <ul>
			  	<li><i class="fa fa-sort-amount-asc"></i>  Sort By </li>
			  	<li data-ng-class="{active : activeItem === 'CarReference.Pricing.TotalChargeAmtWithoutSF'}" data-ng-click="carPriceSort('CarReference.Pricing.TotalChargeAmtWithoutSF')" ><a>Lowest Price</a></li>
				<li data-ng-class="{active : activeItem === 'CarReference.IsCorporateDiscount'}" data-ng-click="carPriceSort('CarReference.IsCorporateDiscount')"><a>Exclusive Deals </a></li>
			  </ul>
			  
            </div>
			</div>
            <div style="width: 100%;float:left; text-align: center; margin-top: 55px;"   ng-show="filtered.length == 0 && found">
	             <div style="width: 380px;background: #efefef;margin: auto;padding: 25px;border-radius: 10px;">
	               <div style="width:100%; float:left; font-size: 24px;color: #4863db;;"> <strong>Sorry!</strong> No Result found.</div>
	               <div  style="width:100%; float:left; font-size: 14px;font-weight: 600;">Please apply more or change filters.</div>
	               <div style="clear:both;"></div>
	             </div>
             </div>
              
			<!--<div style="width: 100%;float:left; text-align: center;"  ng-show="filtered.length == 0 && found">
                <div style="width:100%; float:left; font-size: 24px;"> <strong>Sorry!</strong> No Result Found</div>
                <div  style="width:100%; float:left; font-size: 14px;">Please apply more or change filters.</div></div>
              -->
              
              
          </div>
		   <!--Sorting and tab filter Div End -->
		
		
		 <!--  / Results Box Start here \ -->  
            <div data-ng-repeat="carlist in filtered = (carlist | filter:filterBySupplier | filter:filterByCarType | filter:CarPaymentOptionFilter | filter:CarAutomaticManualOptionFilter | filter:CarACOptionFilter | orderBy:sortKey:reverse ) | limitTo: paginationLimit()" >
            <!-- <div ng-repeat="car in (filteredCars = (data.CarAvailability | filter:CarVendorFilter | filter:CarTypeFilter | filter:CarPaymentOptionFilter | filter:CarAutomaticManualOptionFilter | filter:CarACOptionFilter | orderBy:sortKey:reverse ))  | limitTo:paginationLimit() "> -->    
			<div class="car_resultsBox car_itenary">
			<h4 class="sub_header">
				<span>{{getCap(carlist.CarReference.CarType)}}</span>
                 <small data-ng-show="carlist.CarReference.CarName" ng-if="carlist.CarReference.VehicleType.substr(0,2) === 'XX'">&nbsp;&nbsp;<span>{{carlist.CarReference.CarName}}</span></small>
				 <small data-ng-show="carlist.CarReference.CarName" ng-if="carlist.CarReference.VehicleType.substr(0,2) != 'XX'">&nbsp;&nbsp;<span>{{carlist.CarReference.CarName}}</span> or Equivalent</small>
				 
				 <div class="venderCode hidden-xs"> {{carlist.CarReference.VendorCode}} - {{carlist.CarReference.VehicleType}} - {{carlist.CarReference.RateCode}} - {{carlist.CarReference.RatePlan}} - {{carlist.CarReference.UniqueID}} - {{carlist.CarReference.SupplierName}} - {{carlist.CarReference.RouteStationLst[0].LocationID}}</div>
			<img class="mob-supplier" id="imgSet" data-ng-src="/resources/images/car-images/suppliers/{{carlist.CarReference.DisplayVendorName | nospace | lowercase}}.jpg" title="{{carlist.CarReference.DisplayVendorName}}"  alt="{{carlist.CarReference.VendorName}}"/>
			</h4>
			
			<div class="content">
				<div class="row row-flex">
                     <div data-ng-click="submitresult(carlist.CarReference.UniqueID)" class="car-xs-link visible-xs"></div>				
					  <div class="col-sm-5 col-xs-7">
					  <div class="left_section">
					  <!-- Image -->				  
					  
					  <div class="img-bx">
					  
						  <img class="img-responsive" ng-if="carlist.CarReference.VehicleType.substr(0,2) == 'XX'" id="carImgSet" data-ng-src="/resources/images/car-images/cars/reveal.jpg" onerror="javascript:imgError(this,'/resources/car/images/no-image.jpg')" />
	                      
	                      <img class="img-responsive" ng-if="carlist.CarReference.VehicleType.substr(0,2) != 'XX' && !carlist.CarReference.ImageUrl" id="carImgSet" ng-src="/resources/images/car-images/cars/{{carlist.CarReference.CarName | nospace | lowercase}}.jpg" onerror="javascript:imgError(this,'/resources/car/images/no-image.jpg')" />
                          <img class="img-responsive" ng-if="carlist.CarReference.VehicleType.substr(0,2) != 'XX' && carlist.CarReference.ImageUrl" id="carImgSet" ng-src="{{carlist.CarReference.ImageUrl.trim()}}" onerror="javascript:imgError(this,'/resources/assets/car-images/no-image.jpg')" width="40%" />
                          
					  </div>
					  
					  <img class="reflection hidden-xs" id="imgSet" data-ng-src="/resources/images/car-images/suppliers/{{carlist.CarReference.DisplayVendorName | nospace | lowercase}}.jpg" title="{{carlist.CarReference.DisplayVendorName}}"  alt="{{carlist.CarReference.VendorName}}"/>
					  
					  <div class="clearfix"></div>
					  
						 <!-- itenary -->
						 <ul class="car-aminities hidden-xs">
							  <li data-hover="{{carlist.CarReference.carAttribute.NumOfPassengers}} Passengers">
							   	<span class="passenger-icon"></span> 
							   </li>
							   
							  <li data-hover="{{carlist.CarReference.carAttribute.NumberOfDoors}} Doors">
							   <span class="car-window-icon"></span> 
							   </li>
							   
							  <li data-hover="{{carlist.CarReference.carAttribute.NumOfLuggageLarge + carlist.CarReference.carAttribute.NumOfLuggageSmall}} Luggages"> 
							  	<span class="luggage-icon"></span> 
							  </li>
							  
							  <li data-hover="{{carlist.CarReference.carAttribute.CarFuel}}"> 
							  <span class="fa fa-snowflake-o"></span>
							   </li>
							   
							  <li ng-if="carlist.CarReference.carAttribute.Transmission == 'Manual'" data-hover="{{carlist.CarReference.carAttribute.Transmission}}">
							   <span class="transmission-M-icon"></span> 
							   </li>
							   
							  <li ng-if="carlist.CarReference.carAttribute.Transmission == 'Automatic'" data-hover="{{carlist.CarReference.carAttribute.Transmission}}">
							   <span class="transmission-A-icon"></span>
							    </li>
							</ul>
						
						</div>
						
					  </div>
					  
					  <div class="col-sm-4 hidden-xs col-xs-full">
					  
					 		 <div class="location hidden-xs"> <strong>Location</strong>
							 
							  <p data-ng-repeat="location in carlist.CarReference.RouteStationLst">
							   <span data-ng-if="location.RouteType == 1">{{location.StationName}}</span>
							  </p>
							  <div data-ng-show="carlist.CarReference.IsCorporateDiscount">
							    <div data-ng-if="carlist.CarReference.DisplayVendorCode != 'SX'" class="offer_images hidden-xs hidden-sm"></div>							  
							 	<div data-ng-if="carlist.CarReference.DisplayVendorCode == 'SX'" class="offer_images-sixt hidden-xs hidden-sm"></div>
							  </div>
                                                           <div data-ng-show="carlist.CarReference.IsCorporateDiscount">
							    <div data-ng-if="carlist.CarReference.DisplayVendorCode != 'SX'"> <img src="/resources/car/images/10-off.gif" class="car-vender-offer"></div>							  
							 	<div data-ng-if="carlist.CarReference.DisplayVendorCode == 'SX'"> <img src="/resources/car/images/15-off.gif" class="car-vender-offer"></div>
							  </div>
                             							  
							</div>
							
							<div class="offers hidden-xs">
							 
							  <div class="forfree"> <span class="crGreen"><b>You will get for FREE</b></span><br />
								<ul class="list-inline">
								  <li><i class="fa fa-check" aria-hidden="true"></i>Free Amendments</li><br />
								  <li ng-if="carlist.CarReference.carAttribute.HourMileage === 'UNL'"><i class="fa fa-check" aria-hidden="true"></i>Unlimited Mileage</li>
								</ul>
							  </div>
							</div>
						
						
					  </div>
					  
					  <div class="col-sm-3 col-xs-5">
						<div class="carBooking-cost text-center">
							<h3 class="price"><span><i class="fa fa-{{dollar}}"></i></span>{{carlist.CarReference.Pricing.AvgPrice | number:2 | getIntPart}}.<sup>{{carlist.CarReference.Pricing.AvgPrice | number:2 | getDecimalPart}}</sup> <span>/ Day</span></h3>
							<h4 class="total">Total: <i class="fa fa-{{dollar}}"></i></i>{{carlist.CarReference.Pricing.TotalChargeAmtWithoutSF | number:2 | getIntPart}}<sup>.{{carlist.CarReference.Pricing.TotalChargeAmtWithoutSF | number:2 | getDecimalPart}}</sup> </h4>
							<button class="car-btnSelect hidden-xs" data-ng-click="submitresult(carlist.CarReference.UniqueID)">Select <i class="fa fa-angle-right"></i></button>
							<div class="clearfix"></div>
							
							<div ng-if="!carlist.CarReference.isPubCar" class="hidden-xs"><i class="fa fa-check"></i> Pay Now and Save</div>
                            <div ng-if="carlist.CarReference.isPubCar" class="hidden-xs"><i class="fa fa-check"></i> Book Now Pay Later</div>
						</div>
					  </div>

                    <div class="col-xs-12 no-padding">
					
					<ul class="car-aminities show-mobile">
							  <li>
							   	<span class="passenger-icon"> {{carlist.CarReference.carAttribute.NumOfPassengers}}</span> 
							   </li>
							   
							  <li>
							   <span class="car-window-icon"> {{carlist.CarReference.carAttribute.NumberOfDoors}}</span> 
							   </li>
							   
							  <li> 
							  	<span class="luggage-icon"> {{carlist.CarReference.carAttribute.NumOfLuggageLarge + carlist.CarReference.carAttribute.NumOfLuggageSmall}}</span> 
							  </li>
							  
							  <li> 
							  <span class="fa fa-snowflake-o"></span> <b style="color: #989898; font-weight: normal;">{{carlist.CarReference.carAttribute.CarFuel}}</b>
							   </li>
							   
							  <li ng-if="carlist.CarReference.carAttribute.Transmission == 'Manual'">
							   <span class="transmission-M-icon"> {{carlist.CarReference.carAttribute.Transmission}}</span> 
							   </li>
							   
							  <li ng-if="carlist.CarReference.carAttribute.Transmission == 'Automatic'">
							   <span class="transmission-A-icon"> {{carlist.CarReference.carAttribute.Transmission}}</span>
							    </li>
							</ul>
					
					
					</div>
					  
				</div>				
			</div></div>
                <div  class="no-padding" style="margin-bottom: 16px; display:none;" ng-if="$index == 2">
					<div class="results_add hidden-xs"> <a href="/car-supplier/{{showBanners}}" onClick="callAPI('C-F-LSUB','3');" target="_blank"> <img src="/resources/car/images/banner/{{showBanners}}-Banner.jpg" class="img-responsive"/> </a> </div>
					<div class="results_add visibal-xs hidden-sm hidden-md hidden-lg">  <a href="/car-supplier/{{showBanners}}" onClick="callAPI('C-F-LSUB','3');" target="_blank"> <img src="/resources/car/images/banner/{{showBanners}}-Banner.jpg" class="img-responsive"/> </a></div>
				</div>
            </div>
			
			 <!--  \ Results Box end here / -->
			 
            <div class='other other1' data-ng-repeat-end >
		 			<h4 ng-show='filtered.length > 1'></h4>
			 </div>
			 
			<div ng-show="filtered.length > 10" id="loadmore">
		 	
				<div class="col-xs-12 more_results"  ng-show="hasMoreItemsToShow() && filtered.length > 10" ng-click="showMoreItems()">Load More Results</div>
				
			 </div> 
        </div>
		
		 <!--  \ Results Section End here / -->
        <!--  / Left Section Start here \ -->
        <div class="col-lg-2 col-md-3 carLeftCtrl">
           
		   <div class="filter-main-head">
				Filters
				<a href="#" class="close-sidebar fa fa-close"></a>
			</div>
	
			<!-- Mobile tab
				<ul class="filterTabs visible-xs visible-sm">
					<li class="active"><a data-toggle="tab" href="#tab-1"><i class="fa fa-stop" aria-hidden="true"></i> Supplier</a></li>
					<li><a data-toggle="tab" href="#tab-2"><i class="fa fa-money" aria-hidden="true"></i> Car Type</a></li>
				</ul>
			-->
				<!-- Mobile tab-->
				<div class="clear"></div>
				 <div class="tab-content">
					<div id="tab-1" class="filterBox tab-pane active" ng-if="carPaymentOption[0]['Pay Now'] != 0">
						<div class="head">Payment Option</div>
						
						<ul class="checkbox">
							<li ng-if="carPaymentOption[0]['Pay Now'] != 0">
							   <label class="checkbox-inline">
                                    <input type="checkbox" ng-model="carPaymentOptionChecked[false]">
                                    <span>Pay Now ({{carPaymentOption[0]['Pay Now']}})</span>
                                </label>
							</li> 
							<li ng-if="carPaymentOption[0]['Pay Later'] != 0">
							   <label class="checkbox-inline">
                                    <input type="checkbox" ng-model="carPaymentOptionChecked[true]">
                                    <span>Pay Later ({{carPaymentOption[0]['Pay Later']}})</span>
                                </label>
							</li> 
						</ul>
					</div>
					
					<div id="tab-2" class="filterBox tab-pane active" data-ng-show="supplierlist.length > 0">
						<div class="head">Car Specifications</div>
						
						<ul class="checkbox">
							<li ng-if="carAutomaticManualOption[0]['Automatic'] != 0">                        
							   <label class="checkbox-inline">
                                    <input type="checkbox" ng-model="carAutomaticManualOptionChecked['A']">
                                    <span>Automatic Transmision <!--({{carAutomaticManualOption[0]['Automatic']}})--> </span>
                                </label>
							</li> 
							<li ng-if="carAutomaticManualOption[0]['Manual'] != 0">                        
							   <label class="checkbox-inline">
                                    <input type="checkbox" ng-model="carAutomaticManualOptionChecked['M']">
                                    <span>Manual Transmision <!--({{carAutomaticManualOption[0]['Manual']}})--></span>
                                </label>
							</li>
							<li ng-if="carACOption[0]['AC'] != 0">                        
							   <label class="checkbox-inline">
                                    <input type="checkbox" ng-model="carACOptionChecked['R']">
                                    <span>Air Conditioning <!--({{carACOption[0]['AC']}})--></span>
                                </label>
							</li> 
							<li ng-if="carACOption[0]['Non-AC'] != 0">                       
							   <label class="checkbox-inline">
                                    <input type="checkbox" ng-model="carACOptionChecked['N']">
                                    <span>Non Air Conditioning <!-- ({{carACOption[0]['Non-AC']}})--></span>
                                </label>
							</li> 
						</ul>
					</div>
					
					<!--End Box Supplier -->
                    <!--End Box Payment Option -->
                            
					<!--Start Box Supplier -->
					<div id="tab-4" class="filterBox tab-pane active" data-ng-show="supplierlist.length > 0">
						<div class="head">Supplier</div>
						
						<ul class="checkbox">
							<li data-ng-repeat="supp in supplierlist | orderBy : 'name' | limitTo: supplierLimit">                        
							   <label class="checkbox-inline"><input type="checkbox" name="" data-ng-model="selectedSupplier[supp.code]"><span>{{supp.name | capitalize}} <!--({{getSupplier(supp.code)}})--></span></label>
							</li> 
							 <div align="right" ng-hide="supplierlist.length<5" style="cursor:pointer;" > <a ng-hide="supplierLimit === supplierlist.length" class="text-orange" ng-click="supplierLimit = supplierLimit +(supplierlist.length-4)">Show More <i class="fa fa-angle-down" aria-hidden="true"></i></a> <a ng-show="supplierLimit === supplierlist.length && supplierlist.length>4" class="text-orange" ng-click="supplierLimit = 4">Show less <i class="fa fa-angle-up" aria-hidden="true"></i></a> </div>
						</ul>
					</div>
					<!--End Box Supplier -->
					
					<!--Start Box Car Type -->
					<div id="tab-5" class="filterBox tab-pane active" data-ng-show="carTypeList.length > 0">
						<div class="head">Car Type</div>
					
						<ul class="checkbox">
							 <li data-ng-repeat="type in carTypeList | limitTo: cartypeLimit">                        
							   <label class="checkbox-inline"><input type="checkbox" name="" data-ng-model="selectedCarType[type.code]"><span>{{getCap(type.name)}} <!--({{getCarType(type.code)}})--></span></label>
							</li>
							 <div align="right" ng-hide="carTypeList.length<5" style="cursor:pointer;" > <a ng-hide="cartypeLimit === carTypeList.length" class="text-orange" ng-click="cartypeLimit = cartypeLimit +(carTypeList.length-4)">Show More <i class="fa fa-angle-down" aria-hidden="true"></i></a> <a ng-show="cartypeLimit === carTypeList.length && carTypeList.length>4" class="text-orange" ng-click="cartypeLimit = 4">Show less <i class="fa fa-angle-up" aria-hidden="true"></i></a> </div>
						</ul>
					</div>
					<!--End Box Car Type -->
         		 </div>
		  
        </div>
       <!--  \ Left Section End here / -->
       
		 <!--  / No Results found start here \ -->
		<div class="col-sm-10">
		  
		 
        <!--  / Right Section Start here \ -->
        <div class="col-lg-2  hidden-sm hidden-md  hidden-xs hidden">
		
            <div class="carRightCtrl">
			
                <!--  / Book with Confidence Start here \ -->
                <div class="bookwithBox" data-ng-show="filtered.length > 0">
					<div class="head2">Book with Confidence</div>
					
                    <ul class="content-list">
                        <li> Best Purchase Guarantee!</li>
                        <li>All discounts Updated Daily</li>
                        <li>24*7 Customer Service</li>
                        <li>Protected &amp; Safe BooKing</li>
                    </ul>
                </div>
                 <!--  \ Book with Confidence End here/ -->

               

            </div>

        </div>
       <!--  \ Right Section End here / -->

    </div>
</div>



</div>

<!--  \ Main Container End here / -->
<div class="page_overlay"></div>
<!--  / footer start here \ -->
<div style="display: none;" id="footer">
<jsp:include page="../confirm_footer.jsp"></jsp:include>
</div>
<!--  \ Footer end here / -->

<script type="text/javascript" src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script type="text/javascript" src="/resources/travelopick/js/jquery.validate.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"></script>
<script src="/resources/car/js/carResult.js?1507019a"></script>
<script type="text/javascript" src="/resources/js/index_eng_min_1.4.js?29112017q"></script>

<script>
 function modifySearchDiv(){
		if($(window).width() > 769) // 769 se big apply condition
		{
			 $(".searchModify").click(function(){
				$(this).toggleClass('searchClose');
				$("#modifySection").show();
				$('.car_search_detail').hide();	
			});
		}
	}

 //doc
$(document).ready(function(){
	 modifySearchDiv();
	 //Use mobile
	$('.modifySearchMobile').click(function(){
		$('#modifySection').addClass('open').show();
		$('.page_overlay').show();
		 $('.result-body').addClass('push')
	});	
});

//Resize function on device
$(window).resize(function(){
	modifySearchDiv();
  $('.page_overlay').hide();
 if($(window).width() < 1023){
	 $('.car_search_detail').show();
	 $('.carLeftCtrl').removeClass('open')
	 $('#modifySection').removeClass('open').hide();
	 
 }
 else{
	 if($('.car_search_detail').is(':visible')){
		  $('.car_search_detail').show();
		  $('#modifySection').hide(); 
	 }
	 else{
		$('.car_search_detail').hide();  
	 }
	//$('.page_overlay').hide();	 
 }
 
});
</script>
<script>
function imgError(img,srcc) {
    console.log(img, srcc);
    img.error="";
    img.src=srcc;
}
</script>


<!-- Facebook Pixel Code -->

<script>

!function(f,b,e,v,n,t,s)

{if(f.fbq)return;n=f.fbq=function(){n.callMethod?

n.callMethod.apply(n,arguments):n.queue.push(arguments)};

if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';

n.queue=[];t=b.createElement(e);t.async=!0;

t.src=v;s=b.getElementsByTagName(e)[0];

s.parentNode.insertBefore(t,s)}(window,document,'script',

'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1575600346100223');

fbq('track', 'Search',
{s_content_type:'CAR',
s_date1:'<c:out value="${carSearchWrapper.pickupDate}"/>',
s_date2:'<c:out value="${carSearchWrapper.dropDate}"/>',
s_type:'<c:out value="${carSearchWrapper.vehicleType}"/>',
s_destination_city:'<c:out value="${destinationCar[1]}"/>',
s_destination_state:'<c:out value="${destinationCarState}" />',
s_destination_country:'<c:out value="${destinationCarCountry}"/>'});

</script>

<noscript>

<img height="1" width="1"

src="https://www.facebook.com/tr?id=1575600346100223&ev=Search

&noscript=1"/>

</noscript>

<!-- End Facebook Pixel Code -->

</body>

</html>