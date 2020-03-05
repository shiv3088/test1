<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!doctype html>
<html >
<head>
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="viewport" content="user-scalable=0, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
<title>Travelopick - PactSafe</title>

<link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="/resources/travelopick/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/travelopick/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/travelopick/css/font-awesome.css" rel="stylesheet">  
<link href="/resources/css/angular-busy.css" rel="stylesheet">
<link href="/resources/flight-result/css/result-style.css" rel="stylesheet">
<script src="/resources/travelopick/js/jquery.1.11.1.min.js"></script>

 <style type="text/css">
	/* These are the styles for the agreement display */
	.ps-agreement { height: 300px; overflow: scroll; border: 1px solid #ccc; padding: 10px; }
	.ps-agreement input.ps-agreement-target { display: none; }
 </style>

<%
	    String emailID = "";
	    String orderID = "";
		String totalPrice = "";
		String cardType = "";
		String cardNumber = "";
		String cardHolderName = "";
		String city = "";
		String state = "";
		String country = "";
		String cardExpDate = "";
		String ccv = "";
		String phoneNumber = "";
		String emailId = "";
		String billingAddress = "";
		String postalCode = "";
		String isSamePassenger = "";
		String isMore = "";
		String siteID = "";
		String agentEmailID = "";
		String currency = "";
		
		try
		{
			siteID = (String)request.getParameter("site");
			emailID = (String)request.getParameter("emailid");
			orderID = (String)request.getParameter("od");
			totalPrice = (String)request.getParameter("tp");
			currency = (String)request.getParameter("cur");
			cardNumber = (String)request.getParameter("cn");
			cardHolderName = (String)request.getParameter("chn");
			cardExpDate = (String)request.getParameter("ced");
			ccv = (String)request.getParameter("cv");
			phoneNumber = (String)request.getParameter("pn");
			city = (String)request.getParameter("city");
			state = (String)request.getParameter("state");
			country = (String)request.getParameter("country");
			billingAddress = (String)request.getParameter("ba");
			postalCode = (String)request.getParameter("pc");
			isSamePassenger = (String)request.getParameter("isp");
			isMore = (String)request.getParameter("ism");
			agentEmailID = (String)request.getParameter("aid");
			
			System.out.println(" SiteID "+siteID);
			System.out.println(" OrderID "+orderID);
			System.out.println(" Currency "+currency);
			System.out.println(" TotalPrice "+totalPrice);
			System.out.println(" CardNumber "+cardNumber);
			System.out.println(" CardHolderName "+cardHolderName);
			System.out.println(" CCV "+ccv);
			System.out.println(" PhoneNumber "+phoneNumber);
			System.out.println(" CardExpDate "+cardExpDate);
			System.out.println(" BillingAddress "+billingAddress);
			System.out.println(" City "+city);
			System.out.println(" State "+state);
			System.out.println(" Country "+country);
			System.out.println(" PostalCode "+postalCode);
			System.out.println(" isSamePassenger "+isSamePassenger);
			System.out.println(" isMore "+isMore);
			System.out.println(" AgentEmailID "+agentEmailID);
			
		}
		catch(Exception e) 
		{
			
		}
	%>
	
	<input type="hidden" name="siteID" id="siteID" value="<%=siteID%>"/>
	<input type="hidden" name="emailId" id="emailId" value="<%=emailID%>"/>
	<input type="hidden" name="orderID" id="orderID" value="<%=orderID%>"/> 
	<input type="hidden" name="totalPrice" id="totalPrice" value="<%=totalPrice%>"/>
	<input type="hidden" name="currency" id="currency" value="<%=currency%>"/>
	<input type="hidden" name="cardNumber" id="cardNumber" value="<%=cardNumber%>"/>
	<input type="hidden" name="cardHolderName" id="cardHolderName" value="<%=cardHolderName%>"/>
	<input type="hidden" name="ccv" id="ccv" value="<%=ccv%>"/>
	<input type="hidden" name="phoneNumber" id="phoneNumber" value="<%=phoneNumber%>"/>
	<input type="hidden" name="cardExpDate" id="cardExpDate" value="<%=cardExpDate%>"/>
	<input type="hidden" name="billingAddress" id="billingAddress" value="<%=billingAddress%>"/>
	<input type="hidden" name="city" id="city" value="<%=city%>"/>
	<input type="hidden" name="state" id="state" value="<%=state%>"/>
	<input type="hidden" name="country" id="country" value="<%=country%>"/>
	<input type="hidden" name="postalCode" id="postalCode" value="<%=postalCode%>"/>
	<input type="hidden" name="isSamePassenger" id="isSamePassenger" value="<%=isSamePassenger%>"/>
	<input type="hidden" name="isMore" id="isMore" value="<%=isMore%>"/>
	<input type="hidden" name="agentEmailID" id="agentEmailID" value="<%=agentEmailID%>"/>
	

	<script type="text/javascript">
		(function(w,d,s,c,n,a,b){w['PactSafeObject']=n;
		w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},
		w[n].t=1*new Date();a=d.createElement(s),
		b=d.getElementsByTagName(s)[0];
		a.async=1;a.src=c;b.parentNode.insertBefore(a,b)})
		(window, document,'script', 'https://ps-vault.s3.amazonaws.com/ps.min.js','_ps');
		
		_ps('create', '0910885f-fb13-492c-be6a-373ec23927f2');
		_ps('load', 'click-through-agreement', 'agreements');
		
	</script>
	
	<script type="text/javascript">
	    $(document).ready(function()
	    {	
	        newfunction();
	    });
	    
	    var tempInter = null;
	    function newfunction()
	    {
	    	tempInter = setInterval(function (){secondfun()},3000);
	    }
	    
	    var i=0;
	    function secondfun()
	    {	
		    if(i==1)
		    {	
		    	var custom_data_values = { 
		    				"OrderID": $('#orderID').val(),
							"TotalPrice":  $('#totalPrice').val()+" "+$('#currency').val(),
							"CardNumber":  $('#cardNumber').val(),
							"CardHolderName":  $('#cardHolderName').val(),
							"CVV":  $('#ccv').val(),
							"CardExpDate":  $('#cardExpDate').val(),
							"BillingAddress":  $('#billingAddress').val(),
							"City":  $('#city').val(),
							"State":  $('#state').val(),
							"Country":  $('#country').val(),
							"Zip":  $('#postalCode').val(),
							"PhoneNumber":  $('#phoneNumber').val(),
							"Is The Cardholder Traveller":  $('#isSamePassenger').val(),
							"Is The Cardholder Paying For More Than One Purchase":  $('#isMore').val()
		    	} ;
		    	
		    	_ps('set', 'respondent_id', $('#emailId').val());
		    	_ps('click-through-agreement:send', 'agreed');
				_ps('send', 'updated', { custom_data:custom_data_values });
		   		
		    	clearInterval(tempInter);
		    	
		    	callAction($('#orderID').val(), $('#siteID').val(), $('#agentEmailID').val(), $('#totalPrice').val(), $('#currency').val(), $('#cardNumber').val(), $('#cardHolderName').val(), $('#cardExpDate').val(),  $('#billingAddress').val(), $('#city').val(), $('#state').val(), $('#country').val(), $('#postalCode').val(), $('#phoneNumber').val(), $('#isSamePassenger').val(), $('#isMore').val());
		    	
		    }
		    i++;
	    }
   </script>
   
  <script type="text/javascript">
	function callAction(orderID, siteID, agentID, totalPrice, currency, cardNumber, cardHolderName, cardExpDate,  billingAddress, city, state, country, postalCode, phoneNumber, isSamePassenger, isMore)
	{
		$.ajax({
				type: "GET",
    			url: "https://www.travelopick.com/sendAgentMail",
    			data: { 
    			OrderID: orderID, SiteID: siteID, AgentEmail: agentID, totalPrice:totalPrice, currency:currency, cardNumber:cardNumber,
    			cardHolderName:cardHolderName, cardExpDate:cardExpDate,  billingAddress:billingAddress, city:city, state:state, 
    			country:country, postalCode:postalCode, phoneNumber:phoneNumber, isSamePassenger:isSamePassenger, isMore:isMore
    			}
       			
   		});
    
	}
	</script>




<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>

<body>
 
<!--- Header Section Start---->
<jsp:include page="result_header.jsp"></jsp:include>

<!--- Header Section End---->

<!--- Main Section---->
    <div class="main">
    	 
		 <div style="margin:100px 0;">
		 
		<div class="container">
			<div class="row">
			 <div class="col-sm-3"> </div>
			 <div class="col-sm-6">
			 
			 <div class="alert alert-info text-center" role="alert" style="padding:50px 0;">
			 <div style="margin-bottom:10px;">
			 <img src="/resources/images/check.png">
			 </div>
        <h2 style="margin-bottom: font-weight:300;">Thank You!</h2> 
		<h4 style="color:#333;">Thanks for your agreement with us. </h4>
      </div> 
			 </div>
			 
			 <div class="col-sm-3"> </div>
			</div>
		</div>
		 
		 
        </div>
    		
    </div><!--Main--> 

	
 
<!--Footer Start-->
<jsp:include page="result_footer.jsp"></jsp:include>
<!--Footer Closed-->
 
        
</body>
</html>