

    var appHotelDet = angular.module('appHotelDet', ['ngAnimate']);

  
 	var HotelDetController = function($scope, $window,$timeout) 
 	{
 		
 		$scope.windowWidth = $( window ).width();
 
			  $scope.getStars = function(rating) {
				    // Get the value
				   //  console.log( "rating:"+rating);
				    var val = parseFloat(rating);
				    // Turn value into number/100
				    var size = val/5*100;
				    return size + '%';
				  };
			    
						   
				$scope.movePurchasePage = function(hotelId,no) {
				//alert(hotelId);
				//alert(id);
					key=false;
			      //$window.location.href = '/hotels/purchase/'+hotelId+'/'+id+"-"+no;
			      $window.location.href = '/hotels/purchase/'+hotelId+'/'+no;
			    };
			    
			    $scope.getRandomIndex = function(length){
			        return Math.floor(Math.random() * length);
			    }
			      
			      
			     
 	 };
 
 	appHotelDet.controller("HotelDetController", HotelDetController);	

 	var sz=0;
 	var imgss=['_y.jpg', '_d.jpg','_e.jpg','_g.jpg','_n.jpg','_s.jpg','_l.jpg','_b.jpg'];
 	
 	function imgError(img,srcc) {
 		
 			 img.error="";
 			 img.src=srcc;
 		
 	}

 	function imgExists(imgPath) {
 		  var http = jQuery.ajax({
 		                type:"HEAD",
 		        url: imgPath,
 		        async: false
 		          });
 		  return http.status!=404;
 		}
 	 function popup(divProgressBar, width, height)
	  {
	      try 
	      {
	          var height1 = $(window).height();
	          var width1 = $(window).width();
	          $('#' + divProgressBar).height(height + "%");
	          $('#' + divProgressBar).width(width + "%");
	        //  $('#' + divProgressBar).css({ top: ((height1 - ((height1 * parseInt(height)) / 100)) / 2).toFixed(0) + "px", left: ((width1 - ((width1 * parseInt(width)) / 100)) / 2).toFixed(0) + "px" });
	           $('#' + divProgressBar).css({ top: "100px", left: ((width1 - ((width1 * parseInt(width)) / 100)) / 2).toFixed(0) + "px" });

	         /* $('#fadebackground').height(height1 + "px");
	          $('#fadebackground').width(width1 + "px");
	          $('#fadebackground').toggle();*/
	          $('#' + divProgressBar).toggle();
	          return false;
	      }
	      catch (e) 
	      {
	      	return false; 
	      }
	  }
	  
	  var sessionTimeout = 30;

	  window.onload = DisplaySessionTimeout();

	  function DisplaySessionTimeout()
	  {
	      sessionTimeout = sessionTimeout - 1;
	      console.log("DisplaySessionTimeout()");
	      if (sessionTimeout >= 0)
	          window.setTimeout("DisplaySessionTimeout()", 30000);
	      else 
	      {
	          callSessionTimeOut();
	      }
	  };

	  function callSessionTimeOut()
	  {
	  	 //form_data = "";
		  popup('divSessionOut', 30, 30);
		 // $("#myModal").modal('show');
	  	 console.log("Session Time out");
	       return true;
	  };

