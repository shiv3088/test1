<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%> 
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<div class="cxl-wrapper">
    <div class="cxl-header">
        <div class="row">
            <div class="col-sm-12">
                <div>Itinerary Details</div>
            </div>
        </div>
    </div>

    <div class="cxl-body">
        <div class="row">
            <!-- <div class="col-sm-3 col-xs-12">
                <div class="form-group form-group-sm">
                    <figure>
					<strong>Parking Type</strong><br />
                        <img src="/resources/images/crosssell-images/pnfly.png" alt="PARK'N FLY"> 
                        <figcaption class="text-orange">${cartBean.parkingLot.parkingTypes[0].typeName}</figcaption>
                    </figure>
                </div>
            </div> -->
            <div class="col-sm-4 col-xs-12">
                <div class="form-group form-group-sm">
                    <strong>${cartBean.parkingLot.lotName}</strong>
                    <p>${cartBean.parkingLot.address.lotAddress1}, ${cartBean.parkingLot.address.lotCity}
                    <br>
                    ${cartBean.parkingLot.address.lotStateName}, ${cartBean.parkingLot.address.lotPostalCode}</p>
                </div>
            </div>
            <div class="col-sm-4 col-xs-12">
                <div class="form-group form-group-sm">
                <fmt:parseDate value="${cartBean.pnfSearch.arrivalDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  		<fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
                    <strong>Arrival</strong>
                    <p>${sdate} at ${cartBean.pnfSearch.arrivalHour}</p>
                </div>
            </div>
            <div class="col-sm-4 col-xs-12">
                <div class="form-group form-group-sm">
                <fmt:parseDate value="${cartBean.pnfSearch.exitDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  		<fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
                    <strong>Exit</strong>
                    <p>${sdate} at ${cartBean.pnfSearch.exitHour}</p>
                </div>
            </div>
        </div>
    </div>
</div>




<div class="cxl-wrapper">
    <div class="cxl-header">
        <div class="row">
            <div class="col-sm-12">
                <div>Traveler Information</div>
            </div>
        </div>
    </div>
    <div class="cxl-body">
        <div class="row travel-info">
            Enter Traveler Details Below
        </div>
        <div class="row">
            <div class="col-sm-2 col-md-2 col-xs-12">
                <div class="form-group form-group-sm">
                    <label>Traveler</label>
                    <div class="pay-arrow">
                        <form:select path="customerDetails.title" items="${model.title}" class="form-control"  />
                    </div>
                </div>
            </div>
            <div class="col-sm-5 col-md-3 col-xs-12">
                <div class="form-group form-group-sm">
                    <label>First Name
                        <sup class="red">*</sup>
                    </label>
                    <form:input path="customerDetails.firstName" class="form-control" value="${bookingWrapper.passengerList[0].firstName}" />
                </div>
            </div>
            <div class="col-sm-5 col-md-3 col-xs-12">
                <div class="form-group form-group-sm">
                    <label>Last Name
                        <sup class="red">*</sup>
                    </label>
                    <form:input path="customerDetails.lastName" class="form-control" value="${bookingWrapper.passengerList[0].lastName}" />
                </div>
            </div>
            <div class="col-sm-3 col-md-1 col-xs-12">
                <div class="form-group form-group-sm">
                    <label>Gender
                        <sup class="red">*</sup>
                    </label>
                    <div class="pay-arrow">
                        <form:select path="customerDetails.gender" id="pnfGender" class="form-control" value="${bookingWrapper.passengerList[0].gender}">
                        
                        				<c:forEach items="${model.gender}" var="curCategory"
											varStatus="loop">
											<option value="${loop.index+1}">${curCategory}</option>
										</c:forEach>
                        
                        </form:select>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 col-md-1 col-xs-12">
                <div class="form-group form-group-sm">
                    <label>Day
                        <sup class="red">*</sup>
                    </label>
                    <div class="pay-arrow">
                        <form:select path="customerDetails.day" id="pnfDay" class="form-control" items="${model.days}" value="${bookingWrapper.passengerList[0].dobDate}" />
                     
                    </div>
                </div>
            </div>
            <div class="col-sm-3 col-md-1 col-xs-12">
                <div class="form-group form-group-sm">
                    <label>Month
                        <sup class="red">*</sup>
                    </label>
                    <div class="pay-arrow">
                        <form:select path="customerDetails.month" id="pnfMonth" class="form-control" value="${bookingWrapper.passengerList[0].dobMonth}">
                        
                        			<c:forEach items="${model.month}" var="curCategory" varStatus="loop">
											<option value="${loop.index+1}">${curCategory}</option>
										</c:forEach>
                        
                        </form:select>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 col-md-1 col-xs-12">
                <div class="form-group form-group-sm">
                    <label>Year
                        <sup class="red">*</sup>
                    </label>
                    <div class="pay-arrow">
                        <form:select path="customerDetails.year" id="pnfYear" class="form-control" items="${model.year}" value="${bookingWrapper.passengerList[0].dobYear}"/>
              
                    </div>
                </div>
            </div>

        </div>
      
        <!-- <div class="alert alert-success alert-info fs12 ng-binding">
            <strong>Important- </strong> U.S Transportation Security Administration (TSA) Secure Flight Program Now Mandates All Travelers To Provide Date of Birth and Gender As in The Passport or Government Issued Photo ID. (Privacy Policy)
        </div> -->
    </div>
</div>