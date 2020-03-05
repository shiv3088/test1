<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://www.springframework.org/tags"  prefix="spring" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="core"%>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
	<title>Thank You For Agreement With Us</title>
	<meta charset="utf-8">
	<link href="<core:url value="/css/bootstrap.min.css"/>" rel="stylesheet" type="text/css">
    <link href="<core:url value="/css/style.css"/>" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <link rel="icon" href="/resources/images/fav.ico" type="image/x-icon" />
<link href="/resources/css/reset.css" rel="stylesheet">
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/css/style.css" rel="stylesheet">
<link href="/resources/css/font-awesome.css" rel="stylesheet">
<link href="/resources/css/jquery-ui.min.css" rel="stylesheet">
<link href="/resources/css/bootstrap-theme.min.css" rel="stylesheet">
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
		(window,document,'script', 'https://ps-vault.s3.amazonaws.com/ps.min.js','_ps');
		
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
		    	_ps('set', 'respondent_id', $('#emailId').val());
		    	_ps('click-through-agreement:send', 'agreed');
				_ps('click-through-agreement:send', 'updated', 
				{ custom_data: { 
				"OrderID": $('#orderID').val(),
				"totalPrice":  $('#totalPrice').val()+" "+$('#currency').val(),
				"cardNumber":  $('#cardNumber').val(),
				"cardHolderName":  $('#cardHolderName').val(),
				"ccv":  $('#ccv').val(),
				"cardExpDate":  $('#cardExpDate').val(),
				"billingAddress":  $('#billingAddress').val(),
				"city":  $('#city').val(),
				"state":  $('#state').val(),
				"country":  $('#country').val(),
				"Zip":  $('#postalCode').val(),
				"phoneNumber":  $('#phoneNumber').val(),
				"Is The Cardholder Traveller":  $('#isSamePassenger').val(),
				"Is The Cardholder Paying For More Than One Purchase":  $('#isMore').val()
				
				} });
		   		
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
    			url: "http://opscff.travatrap.com/sendAgentMail",
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
<body >
<!--- Header Section Start---->
	<jsp:include page="header.jsp"></jsp:include>
<!--- Header Section End---->

	
	<div class="container" style=" margin:0 auto; padding:80px 0px; text-align:center;">
    <img src="/resources/images/check-icon.png" />
    <h2>Thank You For Your Agreement With Us.</h2>
    </div>
<!--- Header Section Start---->
<jsp:include page="footer.jsp"></jsp:include>
<!--- Header Section End---->	
</body>

<script src="/resources/js/jquery-1.8.2.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script> 
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.slides.min.js"></script>
<script src="/resources/js/modernizr.min.js"></script> 
<script src="/resources/js/respond.min.js"></script> 
<script src="/resources/js/prefixfree.min.js"></script> 


</html>