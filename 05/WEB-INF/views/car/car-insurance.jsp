<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

 <!-- Rental Car Damage Guard start here-->
			<c:if test="${carPaymentRequest.isInsuranceApplied == false}">
          	<div class="car_resultsBox" id="carDamage">
          	
            	<h4 class="sub_header"> <i class="fa-travel-protection"></i> Rental Car Protection  <span class="free-cancel"><i class="fa fa-check"></i> Free Cancellation </span><span class="tripprice protetion-lg">
					<i class="fa fa-usd"></i> ${carPaymentRequest.carDamageAmt} <span> Calendar Day</span></span></h4>
            <div class="insurance"> 
				
				<div class="add_insuranceMsg" style="display:none;">
					<i class="fa fa-check"></i> You've added rental protection to your trip. 
                    <a href="javascript:void(0);" class="show_detail text-orange">Change</a>
				</div>
                
				<div class="remove_insuranceMsg" style="display:none;">
					<i class="fa fa-warning" aria-hidden="true"></i> Your car is not protected. Save now, you pay more at the rental counter  
                    <a href="javascript:void(0);" class="show_detail button">Reconsider</a>
				</div>
				
				<div class="carinsurance">
				<div class="col-md-8 col-sm-12 col-xs-12">
				<h4>Be smart. Add Rental Car Protection</h4>
				<ul class="content-list">
				<li>Reimbursement up to $35,000 for covered losses and damages.</li>
				<li>Covers rental car damage from collision, theft or vandalism.</li>
				<li>Up to 7,500 for covered Emergency Evacuation and Repatriation.</li>
				<li>Primary coverage so you don't have to go through your auto insurance.</li>
				<li>All drivers on the rental agreement are covered.</li>
				<li>Round-the-clock customer assistance services.</li>
				</ul> 
				<h5>Travel Safe. <span>Book Now!</span></h5>
				<span class="tripprice protetion-mobile">
					<i class="fa fa-usd"></i> ${carPaymentRequest.carDamageAmt} <span>calendar Day</span></span>
				<div class="tripmate_radio" id="insurance_radio">
				<div class="add-insurance inputSet" id="cdgYess" onclick="macpSet('CDG','Y','Y');radioSelect('cdgYes');">
				<label>
				<form:radiobutton path="carDamageGuard" id="cdgYes" value="Yes" onclick="macpSet('CDG','Y','Y');" />
				<!-- <input id="" name="insurance" onclick="" value="Yes" type="radio"> -->
				<span><b>Yes,</b> add Rental Car Protection <i class="fa fa-usd"></i>{{totalCarDamageAmt | number:2}} </span>
				</label>
				</div>
				<div class="remove-insurance inputSet" id="cdgNoo" onclick="macpSet('CDG','N','N');radioSelect('cdgNo');">
				<label>
				<form:radiobutton path="carDamageGuard" id="cdgNo" value="No" onclick="macpSet('CDG','N','N');" />
				<span> <b>No,</b> thanks. I'll take my chances <!-- <i class="fa fa-usd"></i><c:out value='${totalCarDamageAmt}'/>--></span>
				</label>
				</div>
				</div>
				<div style="clear:both;"></div> 
				<p class="visible-lg"> To learn more   <a class="text_link" onclick="window.open('/rental-car-protection', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=800,height=600, screenX=50,screenY=50')" href="javascript: void(0);"><u>click here</u></a>.</p>
				<p class="hidden-lg"> To learn more   <a href="javascript: void(0);" class="text_link" data-toggle="modal" data-target="#pop-up-car-protection"><u>click here</u></a>.</p>
				<!-- <div class="w650">
				<div id="tmpid" class="tmpid" style="display:none;"><i class="fa fa-angle-double-right"></i> Please Choose your Car Damage Guard</div>
				</div> -->
				
				<div class="w650">
				<div id="tmpid" class="tmpid" style="display:none;"><i class="fa fa-angle-double-right"></i> Please Choose your Car Damage Guard</div>
				</div>
				</div>
				<div class="col-md-4 col-xs-12 hidden-md-image no-padding">
				<img src="/resources/car/images/insurance.gif" class="car-travel_protection_image ">
				</div>
				</div>
						
            </div>
          </div>
          </c:if>
          <!-- Rental Car Damage Guard end here-->