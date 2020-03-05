<%@ page import="java.util.Date" %>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>


<c:forEach items="${dynamicdeals}" var="searchs" begin="0" end="0">
<c:set var="dealType" value="${searchs.getJourneyType()}" scope="request"/>
</c:forEach>
<c:forEach items="${dynaDeals}" var="searchs" begin="0" end="0">
<c:set var="dealType" value="${searchs.getJourneyType()}" scope="request"/>
</c:forEach>
<c:forEach items="${pageDeals}" var="searchs" begin="0" end="0">
<c:set var="dealType" value="${searchs.getJourneyType()}" />
</c:forEach>

<%-- <c:set var="today" value="<%=new java.util.Date()%>" /> --%>

<c:set var="today" value="<%=new Date()%>"/>
<c:set var="yesterday" value="<%=new Date(new Date().getTime() - 60*60*24*1000)%>"/>


<%--
<c:set var="today" value="<%=new Date()%>"/>
<c:set var="tomorrow" value="<%=new Date(new Date().getTime() + 60*60*24*1000)%>"/>
<c:set var="yesterday" value="<%=new Date(new Date().getTime() - 60*60*24*1000)%>"/>
Today: <fmt:formatDate type="date" value="${today}" pattern="d"/>   
Tomorrow: <fmt:formatDate type="date" value="${tomorrow}" pattern="d"/>   
Yesterday: <fmt:formatDate type="date" value="${yesterday}" pattern="d"/>
Today Date : <fmt:formatDate pattern="E M/yyyy" value="${today}" />	 --%>

<p class="light-gray"> Last updated on <span class="text-red"><fmt:formatDate pattern="EEEE MM/dd/yyyy" value="${yesterday}" /> at 05:00 AM</span>, the fares mentioned below are for <%-- <c:out value="${dealType}"/> --%> ${dealType.replaceAll("(\\p{Ll})(\\p{Lu})","$1 $2")} flight tickets and inclusive of fuel surcharges, <a href="/taxes-fees" target="blank" style="text-decoration: underline;">service fee and taxes</a>. Based on historical data, these fares are subject to change without prior notice and cannot be guaranteed at the time of booking. Kindly go through our <a href="/terms-conditions" target="blank" style="text-decoration: underline;">terms and conditions</a> before booking. </p>
