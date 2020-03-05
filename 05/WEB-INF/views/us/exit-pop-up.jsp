<!doctype html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ page import="com.cff.controller.FareAlertController" %>
 <%

String tollFree="1-888-737-8675";

if(session.getAttribute("tollFree") != null){
if (request.getParameter("tollFree") != null) {
tollFree=(String)request.getParameter("tollFree");
FareAlertController farealert=new FareAlertController();
tollFree=farealert.TollFree(tollFree);
session.setAttribute("tollFree", tollFree);
tollFree=(String)session.getAttribute("tollFree");
}else{
tollFree=(String)session.getAttribute("tollFree");
//System.out.println("tollFree:"+tollFree);
}
}else{
tollFree="1-888-737-8675";
session.setAttribute("tollFree", tollFree);
}
//System.out.println("tollFree 2:"+tollFree);
%>
<html lang="en" data-ng-app="dynamicPageApp">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
       <!-- start of select_box css -->
	<title>Use Coupon Code</title>
	
	<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
	<!-- start of select_box css -->
	<link href="/resources/common/css/bootstrap.min.css" rel="stylesheet">
	<link href="/resources/common/css/font-awesome.css" rel="stylesheet">
	<link href="/resources/us/css/jquery-ui.min.css" rel="stylesheet">
    <!-- start js -->
    <link href="/resources/us/css/common-style_4.0.css?10042017" rel="stylesheet">
        
       <!-- start js -->
	<script src="/resources/js/jquery.1.11.1.min.js"></script> 
    <script src="/resources/js/local-cache.js"></script> 
    <!-- end js -->
    
    <!-- end js -->

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<script>

    $(document).ready(function () {  
    
           var search=GetParameterValues('search');  
           console.log(search);
              var arr = search.split(',');
     //NYC,2,LAX,Thu%20May%2004%2000:00:00%20IST%202017,Tue%20May%2009%2000:00:00%20IST%202017,1,0,0,0,Economy         
              var froCity=arr[0];
              var toCity=arr[2];
              var froDate=arr[3];
              var toDate=arr[4];
              var adult=arr[5];
              var child=arr[6];
              var infant=arr[7];
              var tripType=arr[1];
              var cabinClass=arr[9];
			  var utm_medium=arr[10];
          var url="https://www.travelopick.com/lookupsearch/?froCity="+froCity+"&toCity="+toCity+"&froDate="+froDate+"&toDate="+toDate+"&adult="+adult+"&child="+child+"&infant="+infant+"&tripType="+tripType+"&cabinClass="+cabinClass+"&siteId=Travelopick&utm_source=PPC&utm_medium="+utm_medium+"&utm_campaign=lookup60";
        function GetParameterValues(param) {  
            var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');  
            for (var i = 0; i < url.length; i++) {  
                var urlparam = url[i].split('=');
                if (urlparam[0] == param) {  
                    return urlparam[1];  
                }  
            }  
        } 
        
        $('#Start').click(function(){
    	   var encodedUrl = decodeURIComponent(url);
           $(location).attr("href", encodedUrl);
          });
    
        function callUrl(){
         var encodedUrl = decodeURIComponent(url);
          $(location).attr("href", encodedUrl);
        }
        
         $('#close_window').on('click', function(){
      window.opener = self;
      window.close();
        });
     
    });  
    
   
</script>  
    
  

<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body class="exit-bg-main" data-ng-controller="airlineCtrl">
	<!-- Main Section -->
	
	<div class="exit-pop-up"> 
<%-- <div class="call-free"><c:out value='${tollFree}' /></div> --%>
<div class="call-free"><c:out value='${data.tfnNo}' /></div>
	<div class="coupon-info">
		<div class="coupon">Use Coupon Code</div>
		
		
		<div class="margin-top">
		<a href="#" id="Start" class="button btn btn-default">Continue</a>
		<a href="javascript:void(0);" id="close_window" class="button cancel btn btn-default">Cancel</a>
		</div>
	
	
	</div>

	

</div>
	 
<div class="app-overlay">
	  </div>
	
			<script>      
function submitForm(){

var validator = $("#flightSearch").validate({
showErrors: function() {
if (this.settings.highlight) {
for (var i = 0; this.errorList[i]; ++i) {
    this.settings.highlight.call(this, this.errorList[i].element,
        this.settings.errorClass, this.settings.validClass);
}
}
if (this.settings.unhighlight) {
for (var i = 0, elements = this.validElements(); elements[i]; ++i) {
    this.settings.unhighlight.call(this, elements[i],
        this.settings.errorClass, this.settings.validClass);
}
}
},

rules: {                   
froCity: {
required: true,
minlength: 3
},
toCity: {
required: true,
minlength: 3
},
froDate: {
required: true,
},
toDate: {
required: {
depends: function(element) {
if ($('#tripType').val()=='2'){
return true;
}else{
return false;
}
}
}
//	greaterThan: "#froDate" 
},
adult: {
required: true,
range: [1, 9]

},
infant: {
//required: true,
range: [0, 8]
// le: '#adult'
},
},  
errorElement: "span" ,                              
messages: {
    froCity: {
		required: "Please enter a valid Origin City.",
		minlength: "Origin City must consist of at least 3 characters"
	},
     toCity: {
		required: "Please enter a valid Destination City.",
		minlength: "Destination City must consist of at least 3 characters",
		
	},
	froDate: {
		required: "Please enter a valid Depart Date.",
		
	},
     toDate: {
		required: "Please enter a valid Return Date.",
		
		
	},
	infant: {
	    le: "Infant less than or equal to adult"
	},


}
});
if(validator.form()){ // validation perform
var total = parseInt($("#adult").val()) + parseInt($("#child").val()) + parseInt($("#infantWs").val());
var adults=parseInt($("#adult").val());
var infants=parseInt($("#infant").val())
if (infants > adults) {

$("#errorDiv").html("<p>&raquo; Infant less than or equal to adult!</p>");

return false;
} 

if (total >= 10) {
$("#errorDiv").html("<p>&raquo;Total number of Passenger should be less than or equal to 9 only!</p>")
return false;
} 
var startDate = new Date($('#froDate').val());
var endDate = new Date($('#toDate').val());

if (startDate < endDate){
$("#errorDiv").html("<p>&raquo;Return date should be equal or greater than Depart date!</p>")
return false;
}

if ($.trim($("#froCity").val()) == $.trim($("#toCity").val()) && ($.trim($("#toCity").val()).length > 0 || $.trim($("#froCity").val()).length > 0)) {
$("#errorDiv").html("<p>&raquo; Please enter a different From and To city/ airport code!</p>") 

return false;
}

var rndId = randomString(12);
$('form#flightSearch').attr({action: '/search/id/'+rndId});   
$('form#flightSearch').submit();


}
}</script>
<script type="text/javascript">
    var mfq = mfq || [];
    (function() {
        var mf = document.createElement("script");
        mf.type = "text/javascript"; mf.async = true;
        mf.src = "//cdn.mouseflow.com/projects/12d10d9b-2948-4779-af73-ac5bd3868d89.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
    })();
</script>

</body>
</html>