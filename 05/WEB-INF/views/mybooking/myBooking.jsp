<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE HTML>
<html lang="en" data-ng-app="mybookingapp">
  <head>
   <title> Check My Bookings - Travelopick</title>
  
     	<link rel="icon" href="/resources/images/favicon.png" type="image/x-icon" />
     	<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
		<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
		<link href="/resources/common/css/event-style.css?jkjkjkjk" rel="stylesheet">
			<link href="/resources/flight-result/css/flag-icon.css" rel="stylesheet">
		<script src="/resources/travelopick/js/angular.js"></script>
    	<script src="/resources/travelopick/js/jquery.1.11.1.min.js"></script> 
    	<script src="/resources/travelopick/js/travel.min.js"></script>
    	<script src="/resources/flight-result/js/dirPagination.js"></script>
    	<script src="/resources/js/my-booking-controller.js?19022018a"></script>
		

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
								    <input type="text" name="lastName" ng-model="lastName" class="form-control" id="exampleInputContact" placeholder="Last Name">
								  </div> 
								  <div class="  col-sm-1"><div class="or-txt">OR</div></div>
								  <div class="  col-sm-4">
								    <label class="sr-only" for="exampleInputZip">Zip Code</label>
								    <input type="text" class="form-control" id="cus_zip" name="cus_zip" ng-model="cus_zip" placeholder="Zip Code">
								  </div> 
								
								  </div>
								
								<p class="info-txt">* Please fill last name or zip code.. </p>
								
								  </div>
								
								  <button type="submit" ng-disabled="!mybookingsearch.$valid" ng-click="getMyBooking(mybookingsearch.$valid)" class="btn subsc_btn subsc_btn1 ">View History</button>
								  </div>
								</form>
								
								</div>
								
								
								<!--Loader Start-->
								<div class="history-loader">	<loading></loading> </div>
								<!--Loader End -->
  

							<h3 ng-hide="detailstab">
							<div class="pull-right his-format"><a href="#" ng-click="backSearch();" class="btn btn-primary"><i class="fa fa-angle-left"></i> Back to Search</a></div>

							<span class="visible-xs pull-left"><i class="fa fa-history" aria-hidden="true"></i> &nbsp;</span> Welcome  <b><span ng-bind="cus_email"></span></b>
							
							<div class="clear"></div>							</h3>
							<div class="cityline_head" ng-if="bookinglist.MyBookings.length == '0'">  No Results Found</div>

						</div>


					</div>
					</div>

				</div>



			</div>
					<div class="col-sm-1"></div>
				</div>

    
						<div class="detail-bdr" ng-if="bookinglist.MyBookings.length > 0">
							<div class="cityline_head" >
							<div style="width:100%; display:inline-block;"> 

							<div class="history-head">
							Only the bookings (<b>{{bookinglist.MyBookings.length}}</b>) made post October 1, 2017 are displayed here </div>

							</div>
						<!-- 	<div class="table-responsive">
							 <table class="table-bordered table">
		  					       <thead>
											<tr>
												<th colspan="2">Fliter by Product</th>
											</tr>
										</thead>
										<tbody>
										<tr>
										<td colspan="2">Flight : <input type="checkbox" name="check" ng-model="filterProduct['Flight']" value="check1" /><br/>Hotel : <input type="checkbox" name="check"  ng-model="filterProduct['Hotel']" value="check1" /></td>
							 			</tr>
							 			</tbody>
							 			</table>
							 			</div> -->
							 							   
							  <div class="table-responsive">
							   <table class="table-bordered table">
		  					       <thead>
											<tr>
												<th>S.N.</th>
												<th>Reference  No.</th>
												<th>Status</th>	
												<th>Product</th>	
												<th>Origin</th>
												<th>Destination</th>
												<!-- <th>Travel Type</th>	 -->
												<th>Travel Date</th>
												<th>No. Of Pax(s)</th>
												<!-- <th>BRB Fees</th>
												<th>Travel Protection Fees</th> -->
												<th>Total Price</th>
												<th>Booking Date</th>
												<!-- <th></th> -->
											</tr>
										</thead>
										<tbody>
																				   
										   <tr dir-paginate="blist in bookinglist.MyBookings | filter:filterByProduct | orderBy:'-BookingID' | itemsPerPage:25" >
												
												<td>{{ $index + serial}}</td>
												<td ng-if="blist.BookingStatus != 'Cancelled' && blist.BookingStatus != 'Void'"><a href="" ng-click="getDetails(blist.UserSession,blist.BookingID,blist.ProductType)"><u>{{ blist.BookingID }}</u></a></td>
												<td ng-if="blist.BookingStatus == 'Cancelled' || blist.BookingStatus == 'Void'"><a href="" ng-click="getDetails(blist.UserSession,blist.BookingID,blist.ProductType)"><u>{{ blist.BookingID }}</u></a></td>
												
												<!-- <td data-ng-if="blist.BookingStatus == 'CCV' || blist.BookingStatus == 'CCVPEN' || blist.BookingStatus == 'New' || blist.BookingStatus == 'CCVOK' || blist.BookingStatus == 'CCVCL' || blist.BookingStatus == 'TKTPEN'">Confirm</td>
												<td data-ng-if="blist.BookingStatus == 'TKTED'">Ticketed</td>
												<td data-ng-if="blist.BookingStatus == 'FAILED' || blist.BookingStatus == 'EXCPEN' || blist.BookingStatus == 'FollowUp' || blist.BookingStatus == 'W84Pax'">In Progress</td>
												<td data-ng-if="blist.BookingStatus == 'CCVRG' || blist.BookingStatus == 'CCVRJ' || blist.BookingStatus == 'CCVRV' || blist.BookingStatus == 'CANCEL' || blist.BookingStatus == 'REFUND' || blist.BookingStatus == 'TKTCCDECMCO' || blist.BookingStatus == 'TKTCCDECTKT' || blist.BookingStatus == 'FRDALT' || blist.BookingStatus == 'CCVDEC' || blist.BookingStatus == 'CCVNEG' || blist.BookingStatus == 'TKTCCDEC' || blist.BookingStatus == 'CCVFRD'">Canceled</td>
												<td data-ng-if="blist.BookingStatus == 'VOID'">Void</td>
												<td data-ng-if="blist.BookingStatus != 'New' && blist.BookingStatus != 'CCV' && blist.BookingStatus != 'CCVPEN' && blist.BookingStatus != 'FAILED' && blist.BookingStatus != 'EXCPEN' && blist.BookingStatus != 'FollowUp' && blist.BookingStatus != 'W84Pax' && blist.BookingStatus != 'CCVOK' && blist.BookingStatus != 'CCVCL' && blist.BookingStatus != 'TKTED' && blist.BookingStatus != 'TKTPEN' && blist.BookingStatus != 'CANCEL' && blist.BookingStatus != 'REFUND' && blist.BookingStatus != 'TKTCCDECMCO' && blist.BookingStatus != 'TKTCCDECTKT' && blist.BookingStatus != 'CCVRG' && blist.BookingStatus != 'CCVRJ' && blist.BookingStatus != 'CCVRV' && blist.BookingStatus != 'VOID' && blist.BookingStatus != 'FRDALT' && blist.BookingStatus != 'CCVDEC' && blist.BookingStatus != 'CCVNEG' && blist.BookingStatus != 'TKTCCDEC' && blist.BookingStatus != 'CCVFRD'" >{{blist.BookingStatus}}</td> -->
												<td>{{blist.BookingStatus}}</td>
												<td>{{blist.ProductType}}</td>
												<td>{{ blist.Origin}}</td>
												<td>{{ blist.Destination}}</td>												
												<td>{{blist.TravelDate | date: 'dd-MMM-yyyy'}}<span data-ng-if="blist.ReturnDate != null && blist.ReturnDate != blist.TravelDate">- {{blist.ReturnDate | date: 'dd-MMM-yyyy'}}</span></td>													
												<td>{{ blist.TotalPax}}</td>
												<!-- <td><span>$</span>{{ blist.BRBAmount | number:2}}</td>
												<td><span>$</span>{{blist.InsuranceAmount | number:2}}</td> -->
												<td><span><i class="fa fa-{{blist.DisplayCurrency | lowercase}}"></i></span>{{(blist.Price * blist.ConvertionRatio) | number:2 }}</td>
												<td>{{blist.BookingDate | date: 'dd-MMM-yyyy'}}</td>
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
