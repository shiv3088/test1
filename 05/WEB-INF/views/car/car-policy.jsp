<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html lang="en" ng-app="carApp">
<head>

<title>Car Policy - ${data.siteName}</title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!--StyleSheet here-->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/car/css/car-style.css?29032018" rel="stylesheet">
<script src="/resources/js/jquery.1.11.1.min.js"></script>

<script src="/resources/js/travel.min.js"></script>
<!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
		<!--  / Google analytics \ -->
<jsp:include page="../google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
	
</head>
<body>

<!--  / Header Box \ -->
<jsp:include page="../home_header.jsp"></jsp:include>
<!-- Header Box -->

<!-- Banner Box -->

<div class="about-banner">
  
    <h1> Car Rental Policy </h1>
  
</div>
<!-- Banner Box -->
<div class="clearfix"></div>

<!--  / main container \ -->
<div class="mainCntr">
<div class="container">
  <div class="component-citypages">
      <div class="row">
        <div class="col-md-12">
          <div class="component-city-content" ng-controller="carCtrl">
          <c:if test="${(rpr.supplierName == 95)}">
				<div class="car-rental-policy">
					<h4>TCSection</h4>
					<c:forEach items="${rpr.termsAndCondition.tCSection}" var="tcs">
						<h5>${tcs.section}</h5>
						<c:forEach items="${tcs.sectionDesc}" var="sd">
							<li>${sd}</li>
						</c:forEach>
					</c:forEach>
				</div>
			</c:if>
			<c:if test="${(rpr.supplierName == 93)}">
				<div>
					<h4>Header</h4>
					<p>${rpr.termsAndCondition.header}</p>
				</div>
				
				<div>
					<h4>TCSection</h4>
					<c:forEach items="${rpr.termsAndCondition.tCSection}" var="tcs">
						<h5>${tcs.section}</h5>
						<c:forEach items="${tcs.sectionDesc}" var="sd">
							<li>${sd}</li>
						</c:forEach>
					</c:forEach>
				</div>
			</c:if>
			<c:if test="${(rpr.supplierName == 91)}">
	            <c:if test="${(rpr.caradditionalService[0] != null)}">
	              <div>
	                <h4>Car Additional Service</h4>
	                <c:forEach items="${rpr.caradditionalService}" var="cas">
	                  <h5>${cas.customName}</h5>
	                  <c:forEach items="${cas.customDesc}" var="cas_cd">
	                    <p>${cas_cd}</p>
	                  </c:forEach>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.ageSurchargeDesc[0] != null)}">
	              <div>
	                <h4>Age Surcharge Description</h4>
	                <c:forEach items="${rpr.ageSurchargeDesc}" var="asd">
	                  <p>${asd}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.ageDesc[0] != null)}">
	              <div>
	                <h4>Age Description</h4>
	                <c:forEach items="${rpr.ageDesc}" var="ad">
	                  <p>${ad}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.additionalDriverFeeDesc[0] != null)}">
	              <div>
	                <h4>Additional Driver Fee Description</h4>
	                <c:forEach items="${rpr.additionalDriverFeeDesc}" var="adfd">
	                  <p>${adfd}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.driverDesc[0] != null)}">
	              <div>
	                <h4>Driver Description</h4>
	                <c:forEach items="${rpr.driverDesc}" var="dd">
	                  <p>${dd}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.dropOffDesc[0] != null)}">
	              <div>
	                <h4>Drop-off Description</h4>
	                <c:forEach items="${rpr.dropOffDesc}" var="dod">
	                  <p>${dod}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.feeDesc[0] != null)}">
	              <div>
	                <h4>Fees Description</h4>
	                <c:forEach items="${rpr.feeDesc}" var="fd">
	                  <p>${fd}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.feeDesc[0] != null)}"> </c:if>
	            <c:if test="${(rpr.fuelDesc[0] != null)}">
	              <div>
	                <h4>Fuel Description</h4>
	                <c:forEach items="${rpr.fuelDesc}" var="fd">
	                  <p>${fd}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.geographicDesc[0] != null)}">
	              <div>
	                <h4>Geographic Description</h4>
	                <c:forEach items="${rpr.geographicDesc}" var="gd">
	                  <p>${gd}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.personalAccidentDesc[0] != null)}">
	              <div>
	                <h4>Personal Accident Description</h4>
	                <c:forEach items="${rpr.personalAccidentDesc}" var="pad">
	                  <p>${pad}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.insuranceDesc[0] != null)}">
	              <div>
	                <h4>Insurance Description</h4>
	                <c:forEach items="${rpr.insuranceDesc}" var="id">
	                  <p>${id}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.licenseDesc[0] != null)}">
	              <div>
	                <h4>License Description</h4>
	                <c:forEach items="${rpr.licenseDesc}" var="ld">
	                  <p>${ld}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.carspecification[0] != null)}">
	              <div>
	                <h4>Car Specification</h4>
					<div class="table-responsive">
	                <table class="table table-bordered">
	                  <tr>
	                    <th>Car Type</th>
	                    <th>Car Name</th>
	                    <th class="text-center">Num Of Bags</th>
	                    <th class="text-center">Num Of Doors</th>
	                    <th class="text-center">Num Of Pax</th>
	                    <th>Car Group Name</th>
	                  </tr>
	                  <c:forEach items="${rpr.carspecification}" var="cs">
	                    <tr>
	                      <td>${cs.carType}</td>
	                      <td>${cs.carName}</td>
	                      <td align="center">${cs.numOfBags}</td>
	                      <td align="center">${cs.numOfDoors}</td>
	                      <td align="center">${cs.numOfPax}</td>
	                      <td>${cs.carGroupName}</td>
	                    </tr>
	                  </c:forEach>
	                </table>
					</div>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.carSpecificationDesc[0] != null)}">
	              <div>
	                <h4>Car Specification Description</h4>
	                <c:forEach items="${rpr.carSpecificationDesc}" var="csd">
	                  <p>${csd}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.paymentDesc[0] != null)}">
	              <div>
	                <h4>Payment Description</h4>
					<div class="table-responsive">
	                <table class="table table-bordered">
	                  <tr>
	                    <th width="15%">Payment Code</th>
	                    <th width="15%">Payment Card Code</th>
	                    <th width="20%">Payment Card Type</th>
	                    <th width="50%">Payment Description</th>
	                  </tr>
	                  <c:forEach items="${rpr.paymentDesc}" var="pd">
	                    <tr>
	                      <td>${pd.paymentCode}</td>
	                      <c:set var="pccv" value=""/>
	                      <c:forEach var="pcl" items="${pd.paymentCardCode}">
	                        <c:set var="pccv" value="${pccv},${pcl}"/>
	                      </c:forEach>
	                      <td><c:out value="${fn:substring(pccv, 1, fn:length(pccv))}"/></td>
	                      <c:set var="pctv" value=""/>
	                      <c:forEach var="pctl" items="${pd.paymentCardType}">
	                        <c:set var="pctv" value="${pctv},${pctl}"/>
	                      </c:forEach>
	                      <td><c:out value="${fn:substring(pctv, 1, fn:length(pctv))}"/></td>
	                      <c:set var="pdv" value=""/>
	                      <c:forEach var="pdl" items="${pd.paymentDesc}">
	                        <c:set var="pdv" value="${pdv},${pdl}"/>
	                      </c:forEach>
	                      <td><c:out value="${fn:substring(pdv, 1, fn:length(pdv))}"/></td>
	                    </tr>
	                  </c:forEach>
	                </table>
					</div>
	              </div>
	            </c:if>
	            <div>
	              <h4>Shuttle Info</h4>
				  <div class="table-responsive">
	              <table class="table table-bordered">
	                <tr>
	                  <th width="20%">Shuttle Info Code</th>
	                  <th width="80%">Shuttle Description</th>
	                </tr>
	                <c:forEach items="${rpr.shuttleInfo}" var="si">
	                  <c:forEach items="${si.shuttleDesc}" var="si_sd">
	                    <tr>
	                      <td>${si.shuttleInfoCode}</td>
	                      <td>${si_sd}</td>
	                    </tr>
	                  </c:forEach>
	                </c:forEach>
	              </table>
				  </div>
	            </div>
	            <div>
	              <h4>Special Euip Info</h4>
				  <div class="table-responsive">
	              <table class="table table-bordered">
	                <tr>
	                  <th width="20%">Special Euip Code</th>
	                  <th width="20%">Special Euip Name</th>
	                  <th width="60%">Special Euip Desc</th>
	                </tr>
	                <c:forEach items="${rpr.specialEuipInfo}" var="sei">
	                  <c:forEach items="${sei.specialEuipDesc}" var="sed">
	                    <tr>
	                      <td>${sei.specialEuipCode}</td>
	                      <td>${sei.specialEuipName}</td>
	                      <td>${sed}</td>
	                    </tr>
	                  </c:forEach>
	                </c:forEach>
	              </table>
				  </div>
	            </div>
	            <c:if test="${(rpr.surchargeDesc[0] != null)}">
	              <div>
	                <h4>Surcharge Description</h4>
	                <c:forEach items="${rpr.surchargeDesc}" var="sd">
	                  <p>${sd}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.taxDesc[0] != null)}">
	              <div>
	                <h4>Tax Description</h4>
	                <c:forEach items="${rpr.taxDesc}" var="td">
	                  <p>${td}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.waiverInfo[0] != null)}">
	              <div>
	                <h4>Waiver Info</h4>
	                <c:forEach items="${rpr.waiverInfo}" var="wi">
	                  <p>${wi}</p>
	                </c:forEach>
	              </div>
	            </c:if>
	            <div>
	              <h4>Address Info</h4>
	              <address>
	              Address Type: ${rpr.addressinfo.addressType} <br>
	              Address: ${rpr.addressinfo.address} <br>
	              city Name: ${rpr.addressinfo.cityName} <br>
	              Country Code: ${rpr.addressinfo.countryCode} <br>
	              Postal Code: ${rpr.addressinfo.postalCode} <br>
	              State Code: ${rpr.addressinfo.stateCode} <br>
	              Street Number: ${rpr.addressinfo.streetNumber} <br>
	              Email Address: ${rpr.addressinfo.emailAddress}
	              </address>
	            </div>
	            <c:if test="${(rpr.vendorCode != null)}">
	              <div>
	                <h4>Vendor Code</h4>
	                <p>${rpr.vendorCode}</p>
	              </div>
	            </c:if>
	            <c:if test="${(rpr.vendorName != null)}">
	              <div>
	                <h4>Vendor Name</h4>
	                <p>${rpr.vendorName}</p>
	              </div>
	            </c:if>
	            <div>
	              <h4>Contact Info</h4>
	              <address>
	              Emergency: ${rpr.contactInfo.emergency} <br>
	              Fax: ${rpr.contactInfo.fax} <br>
	              Phone: ${rpr.contactInfo.phone}
	              </address>
	            </div>
	            <div>
	              <h4>Operation Schedule</h4>
				  <div class="table-responsive">
	              <table class="table table-bordered">
	                <tr>
	                  <th>Day Of Week</th>
	                  <th>Closing Time</th>
	                  <th>Opening Time</th>
	                </tr>
	                <c:forEach items="${rpr.operationSchedule}" var="os">
	                  <tr>
	                    <td>${os.dayOfWeek}</td>
	                    <c:forEach items="${os.openingTime}" var="ot">
	                      <td>${ot}</td>
	                    </c:forEach>
	                    <c:forEach items="${os.closingTime}" var="ct">
	                      <td>${ct}</td>
	                    </c:forEach>
	                  </tr>
	                </c:forEach>
	              </table>
				  </div>
			  </c:if>
            </div>
          </div>
        </div>
      </div>
   
  </div>
</div>
</div>
<!--  \ main container / -->

<!--  / footer Box \ -->
<jsp:include page="../home_footer.jsp"></jsp:include>
<!--  \ footer Box / -->
<script src="/resources/js/angular.js"></script>
</body>
</html>
