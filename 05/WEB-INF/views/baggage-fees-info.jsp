<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!doctype html>
<html lang="en">
<head>
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Baggage Fees - Domestic & International Airlines Baggage Fees</title>
<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<!-- start travel css -->
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/common/css/event-style.css" rel="stylesheet">
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script>
</head>
<body>
<div class="main">
  <div class="baggage_bg">
    <div class="container">
    <c:if test="${not empty baggage}">
      <div class="margin-tb">
        <div class="row">
          <div class="col-xs-12">
            <div class="text-box">
              <h1 class="blueHead2">Baggage Fees</h1>
              <h2 class="blackhead">Us Domestic Baggage Fees</h2>
              <div class="data table-responsive">
                <table class="large-only">
                  <tbody>
                    <tr>
                      <th>Airline </th>
                      <th>1st bag</th>
                      <th>2nd bag</th>
                      <th>Carryon</th>
                      <th>Additional Policy</th>
                    </tr>
                    
                    <c:forEach items="${baggage}" var="baggages" varStatus="se">
                    
                      <tr>
                      <td><img src="/resources/images/airline/${baggages.airlineCode}.gif" alt="${baggages.airlineCode}"> <a href="${baggages.webLink}" rel="nofollow"  target="_blank">${baggages.airlineName} &nbsp;<span class=" view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="${baggages.webLink}" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="${baggages.webLink}" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="${baggages.carryOn}" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="${baggages.addPolicy}" rel="nofollow"  target="_blank">View Policy</a></td>
                      </tr>
                    </c:forEach>
                   <!--  <tr>
                      <td><img src="/resources/images/airline/fl.gif" alt="f1"> <a href="https://www.southwest.com/html/customer-service/baggage/index.html?clk=GFOOTER-CUSTOMER-BAGS" rel="nofollow"  target="_blank">AirTran <span class=" view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.southwest.com/html/customer-service/baggage/index.html?clk=GFOOTER-CUSTOMER-BAGS" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.southwest.com/html/customer-service/baggage/index.html?clk=GFOOTER-CUSTOMER-BAGS" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.southwest.com/html/customer-service/baggage/index.html?clk=GFOOTER-CUSTOMER-BAGS" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.southwest.com/html/customer-service/baggage/index.html?clk=GFOOTER-CUSTOMER-BAGS" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/as.gif" alt="as"> <a href="https://www.alaskaair.com/content/travel-info/baggage/checked-bags.aspx" rel="nofollow"  target="_blank">Alaska Airlines <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.alaskaair.com/content/travel-info/baggage/checked-bags.aspx" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.alaskaair.com/content/travel-info/baggage/checked-bags.aspx" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.alaskaair.com/content/travel-info/baggage/checked-bags.aspx" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.alaskaair.com/content/travel-info/baggage/checked-bags.aspx" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/aa.gif" alt="aa"> <a href="https://www.aa.com/i18n/utility/aacom_services_charges.jsp?anchorEvent=false&from=footer#baggage" rel="nofollow"  target="_blank">American Airlines <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.aa.com/i18n/utility/aacom_services_charges.jsp?anchorEvent=false&from=footer#baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.aa.com/i18n/utility/aacom_services_charges.jsp?anchorEvent=false&from=footer#baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.aa.com/i18n/utility/aacom_services_charges.jsp?anchorEvent=false&from=footer#baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.aa.com/i18n/utility/aacom_services_charges.jsp?anchorEvent=false&from=footer#baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/ua.gif" alt="ua"> <a href="https://www.united.com/CMS/en-US/travel/Pages/BaggageCarry-On.aspx" rel="nofollow"  target="_blank">United Airlines <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.united.com/CMS/en-US/travel/Pages/BaggageCarry-On.aspx" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.united.com/CMS/en-US/travel/Pages/BaggageCarry-On.aspx" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.united.com/CMS/en-US/travel/Pages/BaggageCarry-On.aspx" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.united.com/CMS/en-US/travel/Pages/BaggageCarry-On.aspx" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/dl.gif" alt="dl"> <a href="http://www.delta.com/content/www/en_US/traveling-with-us/baggage/before-your-trip/checked.html?icid=Policy_Ck_Baggage_Ongoing" rel="nofollow"  target="_blank">Delta Airlines <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.delta.com/content/www/en_US/traveling-with-us/baggage/before-your-trip/checked.html?icid=Policy_Ck_Baggage_Ongoing" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.delta.com/content/www/en_US/traveling-with-us/baggage/before-your-trip/checked.html?icid=Policy_Ck_Baggage_Ongoing" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.delta.com/content/www/en_US/traveling-with-us/baggage/before-your-trip/checked.html?icid=Policy_Ck_Baggage_Ongoing" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.delta.com/content/www/en_US/traveling-with-us/baggage/before-your-trip/checked.html?icid=Policy_Ck_Baggage_Ongoing" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/f9.gif" alt="f9"> <a href="https://www.flyfrontier.com/travel-information/baggage/" rel="nofollow"  target="_blank">Frontier <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.flyfrontier.com/travel-information/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.flyfrontier.com/travel-information/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.flyfrontier.com/travel-information/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.flyfrontier.com/travel-information/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/ha.gif" alt="ha"> <a href="https://www.hawaiianairlines.com/legal/list-of-all-fees" rel="nofollow"  target="_blank">Hawaiian Airlines<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.hawaiianairlines.com/legal/list-of-all-fees" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.hawaiianairlines.com/legal/list-of-all-fees" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.hawaiianairlines.com/legal/list-of-all-fees" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.hawaiianairlines.com/legal/list-of-all-fees" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/b6.gif" alt="b6"> <a href="http://www.jetblue.com/help/" rel="nofollow"  target="_blank">JetBlue Airways <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.jetblue.com/help/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.jetblue.com/help/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.jetblue.com/help/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.jetblue.com/help/" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/yx.gif" alt="yx"> <a href="https://www.flyfrontier.com/travel-information/baggage/" rel="nofollow"  target="_blank">Midwest Airlines <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.flyfrontier.com/travel-information/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.flyfrontier.com/travel-information/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.flyfrontier.com/travel-information/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.flyfrontier.com/travel-information/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/sy.gif" alt="sy"> <a href="http://www.suncountry.com/page/1/baggage-information.jsp#six" rel="nofollow"  target="_blank">Sun Country <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.suncountry.com/page/1/baggage-information.jsp#six" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.suncountry.com/page/1/baggage-information.jsp#six" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.suncountry.com/page/1/baggage-information.jsp#six" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.suncountry.com/page/1/baggage-information.jsp#six" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/nk.gif" alt="nk"> <a href="https://www.spirit.com/OptionalServices" rel="nofollow"  target="_blank">Spirit Airlines <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.spirit.com/OptionalServices" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.spirit.com/OptionalServices" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.spirit.com/OptionalServices" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.spirit.com/OptionalServices" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/ws.gif" alt="ws"> <a href="http://www.westjet.com/guest/en/travel/basics/baggage/checked.shtml" rel="nofollow"  target="_blank">Westjet <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.westjet.com/guest/en/travel/basics/baggage/checked.shtml" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.westjet.com/guest/en/travel/basics/baggage/checked.shtml" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.westjet.com/guest/en/travel/basics/baggage/checked.shtml" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.westjet.com/guest/en/travel/basics/baggage/checked.shtml" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/us.gif" alt="us"> <a href="https://www.aa.com/i18n/utility/aacom_services_charges.jsp?anchorEvent=false&from=footer#baggage" rel="nofollow"  target="_blank">US airways <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.aa.com/i18n/utility/aacom_services_charges.jsp?anchorEvent=false&from=footer#baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.aa.com/i18n/utility/aacom_services_charges.jsp?anchorEvent=false&from=footer#baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.aa.com/i18n/utility/aacom_services_charges.jsp?anchorEvent=false&from=footer#baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.aa.com/i18n/utility/aacom_services_charges.jsp?anchorEvent=false&from=footer#baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/g4.gif" alt="g4"> <a href="https://www.allegiantair.com/popup/optional-services-fees#baggage" rel="nofollow"  target="_blank">Allegiant Air<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.allegiantair.com/popup/optional-services-fees#baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.allegiantair.com/popup/optional-services-fees#baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.allegiantair.com/popup/optional-services-fees#baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.allegiantair.com/popup/optional-services-fees#baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/vx.gif" alt="vx"> <a href="https://www.virginamerica.com/cms/vx-fees#/baggage" rel="nofollow"  target="_blank">Virgin America <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.virginamerica.com/cms/vx-fees#/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.virginamerica.com/cms/vx-fees#/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.virginamerica.com/cms/vx-fees#/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.virginamerica.com/cms/vx-fees#/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr> -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </c:if>
      
    
       <c:if test="${not empty intbaggage}">
      <div class="margin-md-bottom">
        <div class="row">
          <div class="col-xs-12">
            <div class="text-box">
              <h3 class="blackhead">International Airlines Baggage Fees</h3>
              <div class="data table-responsive">
                <table class="large-only">
                  <tbody>
                    <tr>
                      <th>Airline </th>
                      <th>1st bag</th>
                      <th>2nd bag</th>
                      <th>Carryon</th>
                      <th>Additional Policy</th>
                    </tr>
                      <c:forEach items="${intbaggage}" var="baggages" varStatus="se">
                    
                      <tr>
                      <td><img src="/resources/images/airline/${baggages.airlineCode}.gif" alt="${baggages.airlineCode}"> <a href="${baggages.webLink}" rel="nofollow"  target="_blank">${baggages.airlineName} &nbsp;<span class=" view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="${baggages.webLink}" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="${baggages.webLink}" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="${baggages.carryOn}" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="${baggages.addPolicy}" rel="nofollow"  target="_blank">View Policy</a></td>
                      </tr>
                    </c:forEach>
                  <!--   <tr>
                      <td><img src="/resources/images/airline/am.gif" alt="am"> <a href="http://aeromexico.com/en/travel-with-aeromexico/baggage/?site=us" rel="nofollow"  target="_blank">AeroMexico <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://aeromexico.com/en/travel-with-aeromexico/baggage/?site=us" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://aeromexico.com/en/travel-with-aeromexico/baggage/?site=us" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://aeromexico.com/en/travel-with-aeromexico/baggage/?site=us" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://aeromexico.com/en/travel-with-aeromexico/baggage/?site=us" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/ac.gif" alt="ac"> <a href="http://www.aircanada.com/en/travelinfo/airport/baggage/index.html" rel="nofollow"  target="_blank">Air Canada <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.aircanada.com/en/travelinfo/airport/baggage/index.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.aircanada.com/en/travelinfo/airport/baggage/index.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.aircanada.com/en/travelinfo/airport/baggage/index.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.aircanada.com/en/travelinfo/airport/baggage/index.html" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/af.gif" alt="af"> <a href="http://www.airfrance.us/US/en/local/page_flottante/hp/us_dot_regulation.htm" rel="nofollow"  target="_blank">Air France<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.airfrance.us/US/en/local/page_flottante/hp/us_dot_regulation.htm" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.airfrance.us/US/en/local/page_flottante/hp/us_dot_regulation.htm" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.airfrance.us/US/en/local/page_flottante/hp/us_dot_regulation.htm" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.airfrance.us/US/en/local/page_flottante/hp/us_dot_regulation.htm" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/ba.gif" alt="ba"> <a href="http://www.britishairways.com/en-us/information/baggage-essentials/checked-baggage-allowances" rel="nofollow"  target="_blank">British Airways<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.britishairways.com/en-us/information/baggage-essentials/checked-baggage-allowances" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.britishairways.com/en-us/information/baggage-essentials/checked-baggage-allowances" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.britishairways.com/en-us/information/baggage-essentials/checked-baggage-allowances" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.britishairways.com/en-us/information/baggage-essentials/checked-baggage-allowances" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/lh.gif" alt="lh"> <a href="http://www.lufthansa.com/in/en/Baggage-guide" rel="nofollow"  target="_blank">Lufthansa<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.lufthansa.com/in/en/Baggage-guide" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.lufthansa.com/in/en/Baggage-guide" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.lufthansa.com/in/en/Baggage-guide" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.lufthansa.com/in/en/Baggage-guide" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/ek.gif" alt="ek"> <a href="http://www.emirates.com/in/english/plan_book/essential_information/baggages/" rel="nofollow"  target="_blank">Emirates<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.emirates.com/in/english/plan_book/essential_information/baggages/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.emirates.com/in/english/plan_book/essential_information/baggages/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.emirates.com/in/english/plan_book/essential_information/baggages/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.emirates.com/in/english/plan_book/essential_information/baggages/" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/qr.gif" alt="qr"> <a href="http://www.qatarairways.com/us/en/baggage.page" rel="nofollow"  target="_blank">Qatar Airways<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.qatarairways.com/us/en/baggage.page" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.qatarairways.com/us/en/baggage.page" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.qatarairways.com/us/en/baggage.page" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.qatarairways.com/us/en/baggage.page" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/tk.gif" alt="tk"> <a href="http://www.turkishairlines.com/en-us/travel-information/baggage" rel="nofollow"  target="_blank">Turkish Airlines <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.turkishairlines.com/en-us/travel-information/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.turkishairlines.com/en-us/travel-information/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.turkishairlines.com/en-us/travel-information/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.turkishairlines.com/en-us/travel-information/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/lx.gif" alt="lx"> <a href="https://www.swiss.com/us/EN/prepare/baggage" rel="nofollow"  target="_blank">Swiss International<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.swiss.com/us/EN/prepare/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.swiss.com/us/EN/prepare/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.swiss.com/us/EN/prepare/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.swiss.com/us/EN/prepare/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/sa.gif" alt="sa"> <a href="http://www.flysaa.com/us/en/flyingSAA/baggage/baggage_tips.html" rel="nofollow"  target="_blank">South African Airways <span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.flysaa.com/us/en/flyingSAA/baggage/baggage_tips.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.flysaa.com/us/en/flyingSAA/baggage/baggage_tips.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.flysaa.com/us/en/flyingSAA/baggage/baggage_tips.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.flysaa.com/us/en/flyingSAA/baggage/baggage_tips.html" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/sk.gif" alt="sk"> <a href="http://www.flysas.com/en/us/travel-info/baggage/?WT.ac=Footer_TI4" rel="nofollow"  target="_blank">Scandinavian Airlines<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.flysas.com/en/us/travel-info/baggage/?WT.ac=Footer_TI4" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.flysas.com/en/us/travel-info/baggage/?WT.ac=Footer_TI4" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.flysas.com/en/us/travel-info/baggage/?WT.ac=Footer_TI4" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.flysas.com/en/us/travel-info/baggage/?WT.ac=Footer_TI4" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/fi.gif" alt="fi"> <a href="http://www.icelandair.us/information/baggage-information/" rel="nofollow"  target="_blank">Icelandair<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.icelandair.us/information/baggage-information/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.icelandair.us/information/baggage-information/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.icelandair.us/information/baggage-information/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.icelandair.us/information/baggage-information/" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/dy.gif" alt="dy"> <a href="http://www.norwegian.com/us/travel-info/baggage/" rel="nofollow"  target="_blank">Norwegian Air<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.norwegian.com/us/travel-info/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.norwegian.com/us/travel-info/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.norwegian.com/us/travel-info/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.norwegian.com/us/travel-info/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/az.gif" alt="az"> <a href="https://www.alitalia.com/en_us/support/baggage-assistance.html" rel="nofollow"  target="_blank">Alitalia<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.alitalia.com/en_us/support/baggage-assistance.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.alitalia.com/en_us/support/baggage-assistance.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.alitalia.com/en_us/support/baggage-assistance.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.alitalia.com/en_us/support/baggage-assistance.html" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/su.gif" alt="su"> <a href="http://www.aeroflot.com/ru-en/information/preparation/baggage/allowance" rel="nofollow"  target="_blank">Aeroflot<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.aeroflot.com/ru-en/information/preparation/baggage/allowance" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.aeroflot.com/ru-en/information/preparation/baggage/allowance" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.aeroflot.com/ru-en/information/preparation/baggage/allowance" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.aeroflot.com/ru-en/information/preparation/baggage/allowance" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/ey.gif" alt="ey"> <a href="http://www.etihad.com/en-us/before-you-fly/baggage-information/" rel="nofollow"  target="_blank">Etihad<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.etihad.com/en-us/before-you-fly/baggage-information/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.etihad.com/en-us/before-you-fly/baggage-information/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.etihad.com/en-us/before-you-fly/baggage-information/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.etihad.com/en-us/before-you-fly/baggage-information/" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/et.gif" alt="et"> <a href="https://www.ethiopianairlines.com/US/EN/information/baggage" rel="nofollow"  target="_blank">Ethiopian Airlines<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.ethiopianairlines.com/US/EN/information/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.ethiopianairlines.com/US/EN/information/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.ethiopianairlines.com/US/EN/information/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.ethiopianairlines.com/US/EN/information/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/ir.gif" alt="ir"> <a href="http://www.iranair.com/Portal/Home/Default.aspx?CategoryID=35564c00-509a-4442-aad9-2ebd5be13b1b" rel="nofollow"  target="_blank">Iran Air<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.iranair.com/Portal/Home/Default.aspx?CategoryID=35564c00-509a-4442-aad9-2ebd5be13b1b" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.iranair.com/Portal/Home/Default.aspx?CategoryID=35564c00-509a-4442-aad9-2ebd5be13b1b" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.iranair.com/Portal/Home/Default.aspx?CategoryID=35564c00-509a-4442-aad9-2ebd5be13b1b" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.iranair.com/Portal/Home/Default.aspx?CategoryID=35564c00-509a-4442-aad9-2ebd5be13b1b" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/pd.gif" alt="pd"> <a href="https://www.flyporter.com/travel-information/baggage/carry-on-allowance?culture=en-US" rel="nofollow"  target="_blank">Porter Airlines<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.flyporter.com/travel-information/baggage/carry-on-allowance?culture=en-US" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.flyporter.com/travel-information/baggage/carry-on-allowance?culture=en-US" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.flyporter.com/travel-information/baggage/carry-on-allowance?culture=en-US" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.flyporter.com/travel-information/baggage/carry-on-allowance?culture=en-US" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/en.gif" alt="en"> <a href="http://www.airdolomiti.eu/baggage" rel="nofollow"  target="_blank">Airdolomiti<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.airdolomiti.eu/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.airdolomiti.eu/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.airdolomiti.eu/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.airdolomiti.eu/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/ms.gif" alt="ms"> <a href="http://www.egyptair.com/en/fly/baggage/Pages/baggage-allowance.aspx" rel="nofollow"  target="_blank">Egyptair<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.egyptair.com/en/fly/baggage/Pages/baggage-allowance.aspx" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.egyptair.com/en/fly/baggage/Pages/baggage-allowance.aspx" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.egyptair.com/en/fly/baggage/Pages/baggage-allowance.aspx" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.egyptair.com/en/fly/baggage/Pages/baggage-allowance.aspx" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/bw.gif" alt="bw"> <a href="http://www.caribbean-airlines.com/index.php/plan-a-book/baggage-information" rel="nofollow"  target="_blank">Caribbean Airlines<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.caribbean-airlines.com/index.php/plan-a-book/baggage-information" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.caribbean-airlines.com/index.php/plan-a-book/baggage-information" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.caribbean-airlines.com/index.php/plan-a-book/baggage-information" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.caribbean-airlines.com/index.php/plan-a-book/baggage-information" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/vs.gif" alt="vs"> <a href="http://www.virgin-atlantic.com/us/en/travel-information/baggage.html" rel="nofollow"  target="_blank">Virgin Atlantic<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.virgin-atlantic.com/us/en/travel-information/baggage.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.virgin-atlantic.com/us/en/travel-information/baggage.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.virgin-atlantic.com/us/en/travel-information/baggage.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.virgin-atlantic.com/us/en/travel-information/baggage.html" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/u2.gif" alt="u2"> <a href="http://www.aeroflot.com/ru-en/information/preparation/baggage/allowance" rel="nofollow"  target="_blank">Easyjet<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.easyjet.com/en/help/preparing-to-fly/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.easyjet.com/en/help/preparing-to-fly/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.easyjet.com/en/help/preparing-to-fly/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.easyjet.com/en/help/preparing-to-fly/baggage" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/pr.gif" alt="pr"> <a href="https://www.philippineairlines.com/en/TravelInformation/BeforeYouFly/BaggageInformation" rel="nofollow"  target="_blank">Philippines Airlines<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.philippineairlines.com/en/TravelInformation/BeforeYouFly/BaggageInformation" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.philippineairlines.com/en/TravelInformation/BeforeYouFly/BaggageInformation" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.philippineairlines.com/en/TravelInformation/BeforeYouFly/BaggageInformation" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.philippineairlines.com/en/TravelInformation/BeforeYouFly/BaggageInformation" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/jl.gif" alt="jl"> <a href="http://www.ar.jal.com/arl/en/service/#ANC_BAGGAGE" rel="nofollow"  target="_blank">Japan Airlines<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.ar.jal.com/arl/en/service/#ANC_BAGGAGE" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.ar.jal.com/arl/en/service/#ANC_BAGGAGE" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.ar.jal.com/arl/en/service/#ANC_BAGGAGE" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.ar.jal.com/arl/en/service/#ANC_BAGGAGE" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/qf.gif" alt="qf"> <a href="http://www.qantas.com/travel/airlines/baggage/global/en" rel="nofollow"  target="_blank">Qantas<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.qantas.com/travel/airlines/baggage/global/en" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.qantas.com/travel/airlines/baggage/global/en" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.qantas.com/travel/airlines/baggage/global/en" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.qantas.com/travel/airlines/baggage/global/en" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/va.gif" alt="va"> <a href="http://www.virginaustralia.com/us/en/plan/baggage/checked-baggage/" rel="nofollow"  target="_blank">Virgin Australia<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.virginaustralia.com/us/en/plan/baggage/checked-baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.virginaustralia.com/us/en/plan/baggage/checked-baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.virginaustralia.com/us/en/plan/baggage/checked-baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.virginaustralia.com/us/en/plan/baggage/checked-baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/tg.gif" alt="tg"> <a href="http://www.thaiairways.com/en/Terms_condition/baggage_policy.page?" rel="nofollow"  target="_blank">Thai Airways<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.thaiairways.com/en/Terms_condition/baggage_policy.page?" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.thaiairways.com/en/Terms_condition/baggage_policy.page?" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.thaiairways.com/en/Terms_condition/baggage_policy.page?" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.thaiairways.com/en/Terms_condition/baggage_policy.page?" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/nh.gif" alt="nh"> <a href="http://www.ana.co.jp/wws/us/e/asw_common/prepare/baggage/" rel="nofollow"  target="_blank">All Nippon Airways<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.ana.co.jp/wws/us/e/asw_common/prepare/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.ana.co.jp/wws/us/e/asw_common/prepare/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.ana.co.jp/wws/us/e/asw_common/prepare/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.ana.co.jp/wws/us/e/asw_common/prepare/baggage/" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/ca.gif" alt="ca"> <a href="https://www.airchina.us/CAPortal/dyn/portal/DisplayPage?COUNTRY_SITE=US&SITE=B000CA00&LANGUAGE=GB&PAGE=USPS" rel="nofollow"  target="_blank">Air China<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.airchina.us/CAPortal/dyn/portal/DisplayPage?COUNTRY_SITE=US&SITE=B000CA00&LANGUAGE=GB&PAGE=USPS" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.airchina.us/CAPortal/dyn/portal/DisplayPage?COUNTRY_SITE=US&SITE=B000CA00&LANGUAGE=GB&PAGE=USPS" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.airchina.us/CAPortal/dyn/portal/DisplayPage?COUNTRY_SITE=US&SITE=B000CA00&LANGUAGE=GB&PAGE=USPS" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.airchina.us/CAPortal/dyn/portal/DisplayPage?COUNTRY_SITE=US&SITE=B000CA00&LANGUAGE=GB&PAGE=USPS" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/ci.gif" alt="ci"> <a href="https://www.china-airlines.com/us/en/fly/prepare-for-the-fly/baggage/index" rel="nofollow"  target="_blank">China Airlines<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="https://www.china-airlines.com/us/en/fly/prepare-for-the-fly/baggage/index" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.china-airlines.com/us/en/fly/prepare-for-the-fly/baggage/index" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.china-airlines.com/us/en/fly/prepare-for-the-fly/baggage/index" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="https://www.china-airlines.com/us/en/fly/prepare-for-the-fly/baggage/index" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/cz.gif" alt="cz"> <a href="http://global.csair.com/US/GB/INFO/XLFW/CKBA" rel="nofollow"  target="_blank">China Southern Airlines<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://global.csair.com/US/GB/INFO/XLFW/CKBA" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://global.csair.com/US/GB/INFO/XLFW/CKBA" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://global.csair.com/US/GB/INFO/XLFW/CKBA" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://global.csair.com/US/GB/INFO/XLFW/CKBA" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/mu.gif" alt="mu"> <a href="http://us.ceair.com/muovc/newsite/main/en_US/Static_pages/Baggage.html" rel="nofollow"  target="_blank">China Eastern Airlines<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://us.ceair.com/muovc/newsite/main/en_US/Static_pages/Baggage.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://us.ceair.com/muovc/newsite/main/en_US/Static_pages/Baggage.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://us.ceair.com/muovc/newsite/main/en_US/Static_pages/Baggage.html" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://us.ceair.com/muovc/newsite/main/en_US/Static_pages/Baggage.html" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr>
                    <tr>
                      <td><img src="/resources/images/airline/ul.gif" alt="ul"> <a href="http://www.srilankan.com/en_uk/plan-and-book/luggage" rel="nofollow"  target="_blank">Srilankan Airlines<span class="view_policy_xs">View Policy</span> </a> </td>
                      <td><a href="http://www.srilankan.com/en_uk/plan-and-book/luggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.srilankan.com/en_uk/plan-and-book/luggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.srilankan.com/en_uk/plan-and-book/luggage" rel="nofollow"  target="_blank">View Policy</a></td>
                      <td><a href="http://www.srilankan.com/en_uk/plan-and-book/luggage" rel="nofollow"  target="_blank">View Policy</a></td>
                    </tr> -->
                  </tbody>
                </table>
              </div>
			  
            </div>
          </div>
        </div>
      </div>
     </c:if>
        <c:if test="${(empty intbaggage) and (empty baggage)}">
         <div class="margin-tb">
        <div class="row">
          <div class="col-xs-12">
            <div class="text-box">
              <div class="data table-responsive">
                <table class="large-only">
                  <tbody>
                    <tr>
                  <th> No preferred airline found </th>
                    </tr>   </tbody>
                </table>
              </div>
			  
            </div>
          </div>
        </div>
      </div>
      
       </c:if>
<!--          <p class="note"> <span>Note:-</span> If you cannot find your preferred airline, please feel free to contact us at our toll-free 24X7 +44-800-972-3035.</p> -->
         <p class="note"> <span>Note:-</span> If you cannot find your preferred airline, please feel free to contact us at our toll-free 24X7 ${data.tfnNo}.</p>
			<p class="note"> <span>*</span> If your itinerary includes more than one flights, then please double check baggage allowances for the individual flights. They may differ depending on the airlines you are flying with.</p>
    </div>
  </div>
</div>

</body>
</html>

