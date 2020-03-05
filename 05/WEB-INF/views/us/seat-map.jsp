<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
<title>Seat Map</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="/resources/flight-result/js/jquery-ui.1.10.4.min.js?24072017"></script>
	<link href="/resources/common/css/seatMap.css" rel="stylesheet">
	<script>
	function selectSeat(checkbox,seatName,flightNumber){
	
	
	
	var totpax=document.getElementById("totpax").value;
	
	var totSe="totSeat"+flightNumber;
	var totSeat=document.getElementById(totSe).value;
	
	var se="seatNo"+flightNumber;
	var seatNo=document.getElementById(se).value;
	
	 if (checkbox.checked)
    {
       console.log("true");
       if(totSeat<totpax){
	if(totSeat == 0){
	seatNo=seatName;
	}else{
	seatNo=seatNo+","+seatName;
	}
	totSeat=Number(totSeat)+1;
	document.getElementById(se).value=seatNo;
	document.getElementById(totSe).value=totSeat;
	}else{
	document.getElementById(seatName).checked = false;
	}
	
    }else{
     console.log("false");
     
   
	
	var res = seatNo.split(","); 
	
    remove(res, seatName);

	seatNo=res;
	
	totSeat=Number(totSeat)-1;
	document.getElementById(se).value=seatNo;
	document.getElementById(totSe).value=totSeat;
	
	
	
    }
	
	
	console.log("totSeat:"+totSeat);
	console.log("totpax:"+totpax);
	console.log("seatNo:"+seatNo);
	console.log("flightNumber:"+flightNumber);
	console.log("seatName:"+seatName);
	}

function remove(arr, what) {
    var found = arr.indexOf(what);

    while (found !== -1) {
        arr.splice(found, 1);
        found = arr.indexOf(what);
    }
}

function openCity(evt, id) {
    var i, flightTab, flightContent;
    flightContent = document.getElementsByClassName("flightContent");
    for (i = 0; i < flightContent.length; i++) {
        flightContent[i].style.display = "none";
    }
    flightTab = document.getElementsByClassName("flightTab");
    for (i = 0; i < flightTab.length; i++) {
        flightTab[i].className = flightTab[i].className.replace(" active", "");
    }
    
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
}

	</script>
</head>
<body>
<div >
 Total Row: ${fn:length(allseatmap)}
 <input type="hidden" value="2" id="totpax"/>
 <input type="hidden" value="${fn:length(allseatmap)}" id="TotalSeatmap"/>
 <!--  TAB -->
  
   <c:forEach items="${allseatmap}" var="seatmap" varStatus="seat">
   <c:forEach items="${seatmap}" var="search" varStatus="stat">
    <c:if test="${stat.first}">
        
          
          <div class='flightTab first${seat.index}' onclick="openCity(event, 'first${seat.index}')" id='defaultOpen${seat.index}'>
	        <img src="/resources/images/airline/${fn:toLowerCase(search.companyDetails.marketingCompany)}.gif" onclick="openCity(event, 'first')"><br/>
         	<c:out value="${search.flightIdentification.flightNumber}" />
         </div>
         
         <input type="hidden" value="" id="seatNo${search.flightIdentification.flightNumber}"/>
         <input type="hidden" value="0" id="totSeat${search.flightIdentification.flightNumber}"/>
    </c:if>
	  </c:forEach>
	  </c:forEach>
	  
	  <!--  TAB -->
	  
	  
	  
	  
	  
	  
<c:forEach items="${allseatmap}" var="seatmap" varStatus="seat">

<!--  DIV --> 
<c:choose>
    <c:when test="${seat.index==0}">
       <div class="plane flightContent" id="first${seat.index}" >
    </c:when>    
    <c:otherwise>
      <div class="plane flightContent" id="first${seat.index}" style="display:none;">
    </c:otherwise>
</c:choose> 


<div class="plane-mid-body outter-border">
   <ol class="cabin">
   <c:forEach items="${seatmap}" var="search" varStatus="loop">
	    <li class="cabin-row">
	      <ol class="seats">
	       <c:forEach items="${search.seatRow[loop.index].seatCabin}" var="seatCabin" varStatus="sc">
	 		         <c:choose>
			          <c:when test="${seatCabin.seatCharacteristic == 'B'}">
			          <li class="seat v-hide">
			          	<input type="checkbox" />
			          	<label>&nbsp;</label>
			          </li>
			          </c:when>
			          <c:otherwise>
			          <li class="seat v-hide">
			          	
			          	<label>${seatCabin.seatColumn }</label>
			          </li>
			           </c:otherwise>
			          </c:choose>
	       </c:forEach>
	      </ol>
	    </li>
	      

	      
	      
	   <c:forEach items="${search.seatRow}" var="seatRow" varStatus="sr" >
	    <li class="cabin-row">
	      <ol class="seats">
	       <c:forEach items="${seatRow.seatCabin}" var="seatCabin" varStatus="sc">
	          <c:choose>
	          <c:when test="${seatCabin.description == 'C'}">
	          <li class="seat">
	          <span><c:out value="${seatCabin.seatName }"/></span>
	          </li>
	          </c:when>
	          <c:otherwise>
			          <c:choose>
			          <c:when test="${seatCabin.seatCharacteristic == 'B'}">
			          <li class="seat v-hide">
			          	<input type="checkbox" />
			          	<label>&nbsp;</label>
			          </li>
			          </c:when>
			          <c:otherwise>
			          <li class="seat">
			          <input type="checkbox" id="${seatCabin.seatName }" onClick="selectSeat(this,'${seatCabin.seatName }','${search.flightIdentification.flightNumber}');"/>
			          <label for="${seatCabin.seatName }" title="${seatCabin.seatName }"><c:out value="${seatCabin.seatColumn }"/></label>
			          </li>
			           </c:otherwise>
			          </c:choose>
	          </c:otherwise>
	          </c:choose>
	    
	        </c:forEach>
	       
	      </ol>
	    </li>
	      </c:forEach>
	    
	    </c:forEach>
	  </ol>
	
</div>


</div>
<!--  DIV -->
</c:forEach>

<script type="text/javascript">
	(function (){
		var x = document.querySelector('.plane-mid-body');
		var singleList = x.children[0].children[0];
		var lengthOfList = x.children[0].children;
		var one = singleList.offsetWidth;
		var listWidth = one * lengthOfList.length;
		x.style.width = listWidth + 'px';
	})();
	
	
	
</script>
</div>
</body>
</html>