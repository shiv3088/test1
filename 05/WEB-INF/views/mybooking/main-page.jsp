<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE HTML>
<html lang="en" data-ng-app="mybookingapp">
  <head>
   
  
     	<link rel="icon" href="/resources/images/favicon.png" type="image/x-icon" />

     	<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
		<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
		<link href="/resources/common/css/event-style.css" rel="stylesheet">
		<script src="/resources/js/jquery.1.11.1.min.js"></script>
		<script src="/resources/js/bootstrap.min.js"></script>
 
    	<!-- start js -->
    	
		<script src="/resources/travelopick/js/angular.js"></script>
    	<script src="/resources/travelopick/js/jquery.1.11.1.min.js"></script> 
    	<script src="/resources/travelopick/js/travel.min.js"></script>
    	<script src="/resources/travelopick/js/parallax.js"></script>
    	<script src="/resources/travelopick/js/jQuery.scrollSpeed.js"></script>
		<script src="/resources/travelopick/js/bootstrap-select.js"></script>
		<script src="/resources/travelopick/js/slick_carousel.js"></script>
    	<!-- end js -->    	
    	<script src="/resources/flight-result/js/dirPagination.js"></script>
    	<script src="/resources/js/my-booking-controller.js?12"></script>
		

<!--  / Google analytics \ -->
 <jsp:include page="../google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body>

<div class="main">
    <!-- end of navigation_box -->
  
    	 <!--/ Header Box \-->
  <jsp:include page="../home_header.jsp"></jsp:include>
  <!--\ Header Box /-->
  <!--/ Banner Box \-->
  <div class="company-banner affiliate-banner">
    <h1> Check My Bookings</h1>
  </div>

  <style> 
   .booking-bdr .form-control { margin-bottom:10px;   }
  </style>
 
		<div class=" searchmybooking_bg" data-ng-controller="mybookingctrl">
		
			<div class="container">

				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-10">
						
			<div class="breadcrumbs"> 
				<a href="/"><i class="fa fa-home"></i> Home</a> &nbsp;   <i class="fa fa-angle-right"></i> &nbsp; My Booking</div>

				<div class="clear-b"></div>

				<div class="booking-bdr">

					<div class="row">
					<div class="col-sm-12">
						
						<div class="col-sm-1 "> <h3 class="history-plusbtn hidden-xs"><i class="fa fa-history" aria-hidden="true"></i>
</h3> </div>
						<div class="col-sm-11"> 
						<div  ng-show="searchtab">
							<h3> <span class="visible-xs pull-left"><i class="fa fa-history" aria-hidden="true"></i> &nbsp;</span> Check My Booking History</h3>
							<p class="hidden-xs">Travelopick is one of the leading OTPs in America, offering travellers a comprehensive selection of air deals with over hundreds airlines. 	</p>


							<form class="form-inline" name="mybookingsearch">
							<div class="row">
								  <div class=" col-md-4">
								    <label class="sr-only" for="exampleInputEmail3">Email address</label>
								    <input type="email" required name="cus_email" data-ng-model="cus_email"  class="form-control" id="exampleInputEmail" ng-pattern = '/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i' placeholder="Email *">
								     <span data-ng-show="mybookingsearch.cus_email.$dirty && myForm.email.$invalid">
								      <span data-ng-show="mybookingsearch.cus_email.$error.required">Email is required.</span>
								      <span data-ng-show="mybookingsearch.cus_email.$error.email">Invalid email address.</span>
								      </span>
								    
								  </div>
								  <div class="col-md-5">
								  <div class="row">
								  	<div class="   col-sm-7">
								    <label class="sr-only" for="exampleInputContact">Contact Number</label>
								    <input type="text" name="cus_phone" ng-model="cus_phone" class="form-control" id="exampleInputContact" placeholder="Contact Number">
								  </div> 
								  <div class="  col-sm-1"><div class="or-txt">OR</div></div>
								  <div class="  col-sm-4">
								    <label class="sr-only" for="exampleInputZip">Zip Code</label>
								    <input type="text" class="form-control" id="cus_zip" name="cus_zip" ng-model="cus_zip" placeholder="Zip Code">
								  </div> 
								
								  </div>
								
								<p class="info-txt">* Please fill phone number or zip code.. </p>
								
								  </div>
								
								  <button type="submit" ng-disabled="!mybookingsearch.$valid" ng-click="getMyBooking(mybookingsearch.$valid)" class="btn subsc_btn subsc_btn1 ">View History</button>
								  </div>
								</form>
								
								</div>
								
								
								<!--Loader Start-->
								<div class="history-loader">	<loading></loading> </div>
								<!--Loader End -->
  

							<h3 ng-hide="detailstab">
							<div class="pull-right his-format"><a href="/searchmybooking" class="btn btn-primary"><i class="fa fa-angle-left"></i> Back to Search</a></div>

							<span class="visible-xs pull-left"><i class="fa fa-history" aria-hidden="true"></i> &nbsp;</span> Welcome  <b><span ng-bind="cus_email"></span></b>
							
							<div class="clear"></div>							</h3>
							<div class="cityline_head" ng-if="bookinglist.responseStatus.Status == '1'">  No Results Found</div>

						</div>


					</div>
					</div>

				</div>



			</div>
					<div class="col-sm-1"></div>
				</div>

    
						<div class="detail-bdr" ng-if="bookinglist.flightsBookingHistory.length > 0">
							<div class="cityline_head" >
							<div style="width:100%; display:inline-block;"> 

							<div class="history-head">You have <b>{{(bookinglist.flightsBookingHistory | filter:filterByStatus).length }} booking </b> with us.The details are given below :-</div>

							</div>
							 							   
							  <div class="table-responsive">
							   <table class="table-bordered table">
		  					       <thead>
											<tr>
												<th>S.N.</th>
												<th>Confirmation No.</th>
												<th>Status</th>							
												<th>Origin</th>
												<th>Destination</th>
												<th>Travel Type</th>	
												<th>Travel Date</th>
												<th>No. Of Pax(s)</th>
												<th>BRB Service</th>
												<th>T-G Service</th>
												<th>Total Price</th>
												<th>Booking Date</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
																				   
										   <tr dir-paginate="blist in bookinglist.flightsBookingHistory | orderBy:'-id' | itemsPerPage:15" data-ng-if="blist.flight_pnr != ''">
												
												<td>{{ $index + serial}}</td>
												<td>{{ blist.flight_pnr }}</td>
												
												<td data-ng-if="blist.status == 'CCV' || blist.status == 'CCVPEN' || blist.status == 'New' || blist.status == 'CCVOK' || blist.status == 'CCVCL' || blist.status == 'TKTPEN'">Confirm</td>
												<td data-ng-if="blist.status == 'TKTED'">Ticketed</td>
												<td data-ng-if="blist.status == 'FAILED' || blist.status == 'EXCPEN' || blist.status == 'FollowUp' || blist.status == 'W84Pax'">In Progress</td>
												<td data-ng-if="blist.status == 'CCVRG' || blist.status == 'CCVRJ' || blist.status == 'CCVRV' || blist.status == 'CANCEL' || blist.status == 'REFUND' || blist.status == 'TKTCCDECMCO' || blist.status == 'TKTCCDECTKT' || blist.status == 'FRDALT' || blist.status == 'CCVDEC' || blist.status == 'CCVNEG' || blist.status == 'TKTCCDEC' || blist.status == 'CCVFRD'">Canceled</td>
												<td data-ng-if="blist.status == 'VOID'">Void</td>
												<td data-ng-if="blist.status != 'New' && blist.status != 'CCV' && blist.status != 'CCVPEN' && blist.status != 'FAILED' && blist.status != 'EXCPEN' && blist.status != 'FollowUp' && blist.status != 'W84Pax' && blist.status != 'CCVOK' && blist.status != 'CCVCL' && blist.status != 'TKTED' && blist.status != 'TKTPEN' && blist.status != 'CANCEL' && blist.status != 'REFUND' && blist.status != 'TKTCCDECMCO' && blist.status != 'TKTCCDECTKT' && blist.status != 'CCVRG' && blist.status != 'CCVRJ' && blist.status != 'CCVRV' && blist.status != 'VOID' && blist.status != 'FRDALT' && blist.status != 'CCVDEC' && blist.status != 'CCVNEG' && blist.status != 'TKTCCDEC' && blist.status != 'CCVFRD'" >{{blist.status}}</td>
												
												<td>{{ blist.origin.CityName}} ({{blist.origin.CityCode}})</td>
												<td>{{ blist.destination.CityName}} ({{blist.destination.CityCode}})</td>
												<td>{{ blist.travelType}} </td>
												<td>{{blist.depDateTime.split(' ')[0]}}-{{blist.depDateTime.split(' ')[1]}}-{{blist.depDateTime.split(' ')[2]}}</td>													
												<td>{{ blist.noOfPax}}</td>
												<td><span>$</span>{{ blist.ServiceTotalAmount | number:2}}</td>
												<td><span>$</span>{{blist.InsAmount | number:2}}</td>
												<td><span>$</span>{{(blist.PublishedFare+blist.Markup+blist.Macp+blist.InsAmount+blist.ServiceTotalAmount)-(blist.couponsAmt) | number:2 }}</td>
												<td>{{blist.created_datetime.split(' ')[0]}}-{{blist.created_datetime.split(' ')[1]}}-{{blist.created_datetime.split(' ')[2]}}</td>
												<td><a href="" ng-click="getDetails(blist.userSessionID)">View Details</a></td>
																						
						                    </tr>
		  					    	</tbody>  					    
		  					    </table>
		  					   
		  					    </div>
		  					    <dir-pagination-controls max-size="5" direction-links="true" boundary-links="true" on-page-change="indexCount(newPageNumber)"></dir-pagination-controls>
		  					    
							</div>
						</div>



 
					 
			</div>
		</div>
		
		<article data-ng-controller="mybookingctrl">
			 
		</article>
</div>

   <!-- Footer Section  --> 
 		<jsp:include page="../home_footer.jsp"></jsp:include>
   <!-- Footer Section End Here --> 
  
  
	</body>
	</html>
