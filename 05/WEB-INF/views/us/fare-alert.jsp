<!doctype html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html lang="en">
<head>
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fare Alert - Sign-Up for Travelopick, Latest Fare Alerts</title>
<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
<link href="/resources/us/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/common/css/event-style.css" rel="stylesheet">
<!-- start js -->
<script src="/resources/js/jquery.1.11.1.min.js"></script>
<script src="/resources/js/travel.min.js"></script>

<script src="/resources/js/angular.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular-messages.js"></script>
<script src="/resources/js/angular-recaptcha.min.js"></script>
<script src="/resources/js/angular-messages.min.js"></script>
<script src="/resources/js/fareAlertapp.js"></script>
<script src="/resources/js/index.js"></script>
<style>
.nav-stacked  { display:none;}
</style>


<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body>
<!-- Header Section Start -->
<jsp:include page="home_header.jsp"></jsp:include>
<!-- Header Section End -->
<!-- Main Section -->
<div class="main" ng-app="angularRecaptcha">
  <div class="security_bg whitebg_xs">
    <div class="container" ng-controller="recapCtrl as recap">
      <div class="margin-tb">
        <div class="row">
          <div class="col-md-6">
            <div class="fare-box">
              <h4>Sign-Up for Travelopick Fare Alerts</h4>
              <ul>
                <li> Receive Fare Alerts for your favorite destinations. </li>
                <li> Enter Origin and Destination cities.</li>
                <li> Enter a valid E-mail Address. (You will be required to confirm your email before any fare alerts are sent)</li>
                <li> Enter price. If Airfare for your request drops below this price you will receive Fare Alerts.</li>
                <li> It's that Simple and Free!</li>
                <li> Enter Origin and Destination cities.</li>
              </ul>
              <div class="signupForm" >
                <form name="recap.signupForm" ng-submit="recap.signup()" >
                  <h5 style="padding:5px 15px">Please fill the below information:</h5>
                  <div class="col-sm-6 col-xs-12 fare">
                    <label>Origin City</label>
                    <input ng-model="recap.froCity" id="froCity" type="text"  class="fare-input" placeholder="Enter Airport or City" required/>
                  </div>
                  <div class="col-sm-6 col-xs-12 fare">
                    <label>Destination City</label>
                    <input ng-model="recap.toCity"  id="toCity" type="text" class="fare-input" placeholder="Enter Airport or City" required/>
                  </div>
                  <div class="col-sm-6 col-xs-12 fare">
                    <label>Email - (e.g. abc@xyz.com)</label>
                    <input ng-model="recap.email" type="email" class="fare-input" ng-pattern="/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/" placeholder="Type Your Email Address" required/>
                    <div ng-messages="recap.signupForm.recap.email.$error">
                      <div ng-message="email">Your email address is invalid</div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xs-12 fare">
                    <label>Send Fare Alert if Price Drops Below</label>
                    <input ng-model="recap.amount" type="text" class="fare-input" placeholder="Enter Price" required/>
                  </div>
                  <div class="col-sm-7 col-xs-12 fare">
                    <div class="col-sm-6 col-xs-12 fare">
                      <div class="row">
                        <div vc-recaptcha key="recap.publicKey"></div>
                      </div>
                    </div>
                    <div class="col-sm-5 col-xs-12"> </div>
                  </div>
                  <div class="col-sm-5 col-xs-12">
                    <div class="modifybutton">
                      <button type="submit" class="btn btn-primary">Sign Up</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="fare-box">
              <h4>Latest Fare Alerts</h4>
              <div class="fare-hd" style="padding:5px 15px 5px 5px;">
                <loading></loading>
                <table width="100%" cellspacing="0" cellpadding="2" border="0">
                  <tbody>
                    <tr>
                      <th width="200"> <b>From</b></th>
                      <th width="150"> <b>TO</b></th>
                      <th width="112"> <b>Depart</b></th>
                      <th width="112"> <b>Return</b></th>
                      <th align="right"> <b>Fares*</b></th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style="height:470px; overflow:auto;">
                <div class="fare-alret" data-toggle="modal" data-target="#myModal">
                  <table width="100%" cellspacing="0" cellpadding="2" border="0" class="table w3-table-all  table-hover">
                    <tbody>
                      <tr ng-repeat="searchList in list">
                        <td width="200"><b>{{searchList.froCity.AirportName}} </b></td>
                        <td width="150"><b>{{searchList.toCity.AirportName}}</b></td>
                        <td width="112"> {{convertToDate(searchList.depDate) | date:'MMM dd, yyyy'}}</span> </td>
                        <td width="112">{{convertToDate(searchList.retDate) | date:'MMM dd, yyyy'}}</td>
                        <td width="" align="right"><a href=""><b style="color:#f60;">$</b><b style="color:#f60;">{{searchList.baseFare | number:2}}</b></a> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--Main-->
<!-- Modal -->
<div id="myModal" class="modal fade fade-s " style="z-index:5;" role="dialog">
  <div class="modal-dialog alert-box">
    <!-- Modal content-->
    <div class="modal-content alert-bg">
      <button type="button" class="close cros" data-dismiss="modal">&times;</button>
      <div class=" bg-search">
        <jsp:include page="${request.contextPath}/home_engine_new"></jsp:include>
      </div>
    </div>
  </div>
</div>
<!-- Footer Section Start -->
<jsp:include page="home_footer.jsp"></jsp:include>
<!-- Footer Section End -->
<script src="https://www.google.com/recaptcha/api.js?onload=vcRecaptchaApiLoaded&render=explicit" async defer></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular.js"></script>
							 -->
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.slides.min.js"></script>
<script src="/resources/js/index_eng_min_1.0.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.1.5/angular-local-storage.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/i18n/jquery-ui-i18n.js"></script>
<script src="/resources/js/inner_engine_en.js?22082017"></script>
</body>
</html>
