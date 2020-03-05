<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<html>
<head>
    <title>Spring MVC Form Handling</title>
	<meta name="p:domain_verify" content="0c22a9f3ea30ccd7593c9cc46410e809"/>
     <link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" />
 
    <script type="text/javascript"
        src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
 


<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body>

<h2>Search</h2>
<form:form method="POST" action="/flights/search" modelAttribute="flightSearch">

   <table>
   <tr>
       
        <td colspan="2"><form:radiobutton path="tripType" value="RT" checked="checked" />Round Trip<form:radiobutton  
                            path="tripType" value="OW" />ONE Way</td>
    </tr>
     <tr>
        <td><form:label path="froCity">From City</form:label></td>
        <td><form:input path="froCity" /></td>
    </tr>
    <tr>
        <td><form:label path="toCity">To City</form:label></td>
        <td><form:input path="toCity" /></td>
    </tr>
    <tr>
        <td><form:label path="froDate">From Date</form:label></td>
        <td><form:input path="froDate" /></td>
    </tr>
    <tr>
        <td><form:label path="toDate">To Date</form:label></td>
        <td><form:input path="toDate" /></td>
    </tr>
    <tr>
        <td><form:label path="adult">Adult</form:label></td>
        <td><form:select path="adult" items="${model.adult}" /></td>
    </tr>
    <tr>
        <td><form:label path="child">child</form:label></td>
        <td><form:select path="child" items="${model.child}" /></td>
    </tr>
     <tr>
        <td><form:label path="infant">Infant</form:label></td>
        <td><form:select path="infant" items="${model.infant}" /></td>
    </tr>
     <tr>
        <td><form:label path="cabinClass">Cabin Class</form:label></td>
        <td><form:select path="cabinClass" items="${model.cabinClass}" /></td>
    </tr>
    <tr>
        <td colspan="2">
            <input type="submit" value="Submit"/>
        </td>
    </tr>
</table>  
</form:form>
<script type="text/javascript">
function split(val) {
    return val.split(/,\s*/);
}
function extractLast(term) {
    return split(term).pop();
}
 
$(document).ready(function() {
 
    $( "#froCity" ).autocomplete({
      source: function (request, response) {
         $.getJSON("${pageContext. request. contextPath}/get_city_list.html", {
                term: extractLast(request.term)
            }, response);
        },
        search: function () {
            // custom minLength
            var term = extractLast(this.value);
            if (term.length < 3) {
                return false;
            }
        },
        focus: function () {
            // prevent value inserted on focus
            return false;
        },
        select: function (event, ui) {
            var terms = split(this.value);
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push(ui.item.value);
            // add placeholder to get the comma-and-space at the end
            terms.push("");
            this.value = terms.join(", ");
            return false;
        }
    });
     
    $( "#toCity").autocomplete({
        source: function (request, response) {
            $.getJSON("${pageContext. request. contextPath}/get_city_list.html", {
                term: extractLast(request.term)
            }, response);
        },
        search: function () {
            // custom minLength
            var term = extractLast(this.value);
            if (term.length < 3) {
                return false;
            }
        },
        focus: function () {
            // prevent value inserted on focus
            return false;
        },
        select: function (event, ui) {
            var terms = split(this.value);
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push(ui.item.value);
            // add placeholder to get the comma-and-space at the end
            terms.push("");
            this.value = terms.join(", ");
            return false;
        }
    });
     
});
</script>
</body>
</html>