<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>


<header>
 
    
 <!-- Static navbar -->
<nav class="navbar navbar-default navbar-static-top">

<span class="code" id="curCode"></span>
   <div class="container">
   <div class="row">
   
	<div class="col-sm-12">
	<a class="navbar-brand" href="/"><img src="/resources/travelopick/images/logo.png?v1225" alt="Travelopick Flight Booking"></a> 
	 	
	<ul class="pull-right top-links">
        <li itemprop="name"> <a itemprop="url" href="/contact"> Support </a> </li>
        <li class="hidden"><span class="hidden-xs">Toll Free (24/7) <span class="hidden-sm">Customer</span> Support:</span> <a href="tel:<c:out value='${data.tfnNo}' />"<span class="toll-free2"><i class="fa fa-phone mobilephone" style="font-size:16px;"></i><c:out value='${data.tfnNo}' /></span></a></li>
    </ul>
	</div>
   </div>
     
    <!--/.nav-collapse --> 
  </div>
 </nav>
 
 
    </header>
	
	
	

