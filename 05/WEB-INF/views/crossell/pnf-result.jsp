<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html lang="en" class="no-js" ng-app="pnfResultApp"> <!--<![endif]-->

<head> 
	<jsp:include page="components/header/theme.jsp" />  
	<script src="/resources/js/angular.js"></script>
	<script src="/resources/js/crossell/pnf-result.js?jhjjh"></script>
	<script>
	    function goBack() {
			//window.history.back();
			window.location.href = document.referrer;
        }
        function imgError(img,srcc) {
            img.error="";
            img.src=srcc;
        }
	</script>	
</head>

<body class="body-wrapper" ng-controller="pnfResultController">
<input type="hidden" id="pnfId" value="${pnfId}">
<input type="hidden" value="${cartBean.hotelDetailRes}" id="selectedHotel">
<input type="hidden" value="${cartBean.carReference}" id="selectedCar">
<input type="hidden" value="${cartBean.parkingLot}" id="selectedPnf">

<jsp:include page="components/header/navigation.jsp" />



<jsp:include page="components/park-n-fly/park-n-fly-result.jsp" />
<input type="hidden" id="latitude" value="{{data.parkings.generalInfo.Latitude}}"  />
<input type="hidden" id="longitude" value="{{data.parkings.generalInfo.Longitude}}"  />
<input type="hidden" id="locationArray" value=""  />


 
<loading>
<div class="cxl-mid-screen centerScreen">
    <div class="text-center">
        <div class="loader-icon">
            <div class="loader"></div>
        </div>
        <h1>${cartBean.pnfSearch.location}</h1>
        <div class="duration">
          <fmt:parseDate value="${cartBean.pnfSearch.arrivalDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  <fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
		  ${sdate}
            <i class="fa fa-long-arrow-right"></i>
          <fmt:parseDate value="${cartBean.pnfSearch.exitDate}" var="dateObject" pattern="MM-dd-yyyy" />
		  <fmt:formatDate value="${dateObject}" var="sdate" pattern="EEEE, MMM dd yyyy" />
             ${sdate}
        </div>
        <h2>Please Wait...</h2>
        <div class="text">While Travelopick is Searching for the best parking deals</div>
    </div>
</div>
</loading>

<jsp:include page="components/footer/footer.jsp" /> 
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJnw13NgUPpHAjBZthGDxTj4vXnbuW3A&libraries=places"></script>
</body>
</html>