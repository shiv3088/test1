

    var appHotelDet = angular.module('appHotelDet', []);

  
 	var HotelDetController = function($scope, $window,$timeout) 
 	{
 		
 		$scope.windowWidth = $( window ).width();
 
			  $scope.getStars = function(rating) {
				    
				    var val = parseFloat(rating);
				    
				    var size = val/5*100;
				    return size + '%';
				  };
			    
						   
				  $scope.movePurchasePage = function(hotelId,no) {				
					key=false;			      
			      $window.location.href = '/hotels/purchase/'+hotelId+'/'+no;
			    };
			    
			    $scope.getRandomIndex = function(length){
			        return Math.floor(Math.random() * length);
			    }
			    
			    try{
			      $scope.stayHotel = document.getElementById('stayHotelId').value;			      
			      $scope.stayPrice = document.getElementById('stayPrice').value;
			      }catch(e){}
			      
			     /* $timeout(function() {
			    	  $scope.site = Math.floor(8 + (Math.random() * (15 - 8 + 1)));
			    	  toaster.pop('best-price', "Best Price", ' $'+$scope.stayPrice+' is better price than '+$scope.site+' other websites for '+$scope.stayHotel+' property.');			         
			      }, 3000);
			      
			      $timeout(function() {
			    	  $scope.pepole = Math.floor(4 + (Math.random() * (10 - 4 + 1)));
			    	  $scope.hr = Math.floor(1 + (Math.random() * (4 - 1 + 1)));
			    	  $scope.quotes = [ {  value: "hours" }, { value: "days" }, ];
			    	  $scope.dur = $scope.quotes[$scope.getRandomIndex($scope.quotes.length)].value;//hours or days
			    	  toaster.pop('herry', "Hurry! Few Left", ""+$scope.pepole+" people booked this property in last "+$scope.hr+" "+$scope.dur+".");			         
			      }, 6000);*/
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
	  
	  /*var sessionTimeout = 30;

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
	  };*/
 	 
 	//M Responsive 
 	var numberOfMonthValue;
 	$(window).resize(function () {

 	    if ($(window).width() < 768) {
 	        numberOfMonthValue = 1;
 	        $("#checkInDate_new").datepicker("option", "numberOfMonths", numberOfMonthValue);
 	        $("#checkOutDate_new").datepicker("option", "numberOfMonths", numberOfMonthValue);
 	    } else {
 	        numberOfMonthValue = 2;
 	        $("#checkInDate_new").datepicker("option", "numberOfMonths", numberOfMonthValue);
 	        $("#checkOutDate_new").datepicker("option", "numberOfMonths", numberOfMonthValue);
 	    }
 	}).trigger('resize');
 	//Responsive 
 	var minDate = new Date();
	var maxDate =new Date();
	
	 
 

		
 	$(function () {
 		
 		$("#roomsadults").val("2");
 		
 		 $.datepicker.setDefaults($.datepicker.regional['en-AU']);
 		
 		var d = new Date();
 	    var monthNames = ["January", "February", "March", "April", "May", "June",
 	        "July", "August", "September", "October", "November", "December"];
 	    today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
 	    
 	    
 		
 	    $("#checkInDate_new").click(function () {
 	        $("#checkInDate").datepicker("show")
 	    }), $("#checkInDate").datepicker({
 	        //changeMonth: !0,
 	        //changeYear: !0,
 	        numberOfMonths: numberOfMonthValue,
 	        dateFormat: "mm-dd-yy",
 	        showButtonPanel: true,
 	        minDate: minDate,maxDate: "+11m",
 	        onClose: function () {       	 
 	        	 
 	        	 var dropDateMin = $("#checkInDate").datepicker("getDate");

 	             try {
 	                 if (dropDateMin != null && dropDateMin != '') 
 	                 {                	 
 	                         $("#checkOutDate").val($("#checkInDate").val());
 	                         var from = $('#checkInDate').datepicker('getDate');
 	                         var date_diff = Math.ceil((from.getTime() - Date.parse(today)) / 86400000);
 	                         var maxDatedrop=date_diff+30+'d';
 	                         $("#checkOutDate").datepicker("change", { minDate: new Date(dropDateMin)});
 	                         $("#checkOutDate").datepicker("change", { maxDate: maxDatedrop });
 	                 }
 	             }catch(e)
 	                 {
 	                 }
 	             $("#checkOutDate").datepicker('show'); 
 	        }
 	    })
 	}); 
 	
 	$(function () {
 		
 		var d = new Date();
 	    var monthNames = ["January", "February", "March", "April", "May", "June",
 	        "July", "August", "September", "October", "November", "December"];
 	    today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
 	   
 	        	
 	    var maxDate1=new Date();			
 		  
 		   var from = new Date(maxDate1.getFullYear(), maxDate1.getMonth(), maxDate1.getDate());				   
 		  
 		   console.log("checkOutDate:"+from);
 	      var date_diff = Math.ceil((from.getTime() - Date.parse(today)) / 86400000);
 	      
 	      console.log("date_diff"+date_diff);
 	      
 	      maxDate1=date_diff+30+'d';
 		
 	    $("#checkOutDate_new").click(function () {
 	        $("#checkOutDate").datepicker("show")
 	    }), $("#checkOutDate").datepicker({
 	        //changeMonth: !0,
 	        //changeYear: !0,
 	        numberOfMonths: numberOfMonthValue,
 	        dateFormat: "mm-dd-yy",
 	        showButtonPanel: true,
 	        minDate:minDate,maxDate:maxDate1,
 	    })
 	});
 	
 	
 	
 	function addAge(kk){
 		
 	    var childNo = kk.value;
 	    //alert("room :"+childNo);
 	    //alert("room id:"+kk.id);
 	    //alert("childNo:"+childNo);
 	   
 	  var str2 = kk.id.replace ( /[^\d.]/g, '' ); 
 	  var room = parseInt(str2);
 	   //alert(room);
 	    $("#age"+room).css({display: "block"});
 	    if(childNo==0){
 	     $("#age"+room).css({display: "none"});
 	    }
 	    for(i=0;i<5;i++){
 	     $("#"+room+i).css({display: "none"});
 	    }
 	    for(i=0;i<childNo;i++){
 	     $("#"+room+i).css({display: "block"});
 	    }
 	    
 	    var room=$("#rooms").val();   
 	 
 	   var adult = $('#roomsadults option:selected').val();

 	   
 	  //    alert("adults:"+adult);
 	     var child=$("#rooms0child :selected").text();

 	 
 	  if($('#rooms1adults').length && $('#rooms1adults').val().length){
 	   
 	     var adult1=  $("#rooms1adults").val();
 	     var child1=  $("#rooms1child").val();
 	      adult=parseInt(adult)+parseInt(adult1);
 	      child=parseInt(child)+parseInt(child1);
 	   }
 	// alert("adult no:"+adult);
 	   
 	    if($('#rooms2adults').length && $('#rooms2adults').val().length){
 	 var adult2=   $("#rooms2adults").val();
 	 var child2=  $("#rooms2child").val();
 	     adult=parseInt(adult)+parseInt(adult2);
 	      child=parseInt(child)+parseInt(child2);
 	   }
 	   
 	  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
 	 var adult3=   $("#rooms3adults").val();
 	 var child3=  $("#rooms3child").val();
 	   
 	      adult=parseInt(adult)+parseInt(adult3);
 	      child=parseInt(child)+parseInt(child3);
 	   
 	   }
 	   
 	    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
 	    
 	 var adult4=   $("#rooms4adults").val();
 	 var child4=  $("#rooms4child").val();
 	    adult=parseInt(adult)+parseInt(adult4);
 	      child=parseInt(child)+parseInt(child4);
 	   
 	   }
 	   
 	 

 	   var text="";//room+"1 Room, 1 Adult, 0 Child";
 	   
 	    if(room == 1){
 	     text=text+"1 Room,";
 	    }else{
 	      text=text+room+" Rooms,";
 	    }
 	    
 	    if(adult==1){
 	     text=text+"1 Adult,";
 	    }else{
 	    text=text+adult+" Adults,";
 	    }
 	   
 	   if(child==0){
 	     text=text+"0 Child";
 	    }else if(child==1){
 	    text=text+child+" Child";
 	    }else{
 	    text=text+child+" Children";
 	    }
 	     $("#guest").val(text);
 	    
 	   }
 	   
 	   
 	   function addAgeOnLoad(kk,pp){
 		    var childNo = kk;
 		   var room = pp;
 		   
 		     $("#age"+room).css({display: "block"});
 		     if(childNo==0){
 		      $("#age"+room).css({display: "none"});
 		     }
 		     for(i=0;i<5;i++){
 		      $("#"+room+i).css({display: "none"});
 		     }
 		     for(i=0;i<childNo;i++){
 		      $("#"+room+i).css({display: "block"});
 		     }
 		     
 		     var room=$("#rooms").val();
 		    
 		  
 		    var adult = $('#roomsadults option:selected').val();

 		    
 		      var child=$("#rooms0child :selected").text();

 		  
 		   if($('#rooms1adults').length && $('#rooms1adults').val().length){
 		    
 		      var adult1=  $("#rooms1adults").val();
 		      var child1=  $("#rooms1child").val();
 		       adult=parseInt(adult)+parseInt(adult1);
 		       child=parseInt(child)+parseInt(child1);
 		    }
 		    
 		     if($('#rooms2adults').length && $('#rooms2adults').val().length){
 		  var adult2=   $("#rooms2adults").val();
 		  var child2=  $("#rooms2child").val();
 		      adult=parseInt(adult)+parseInt(adult2);
 		       child=parseInt(child)+parseInt(child2);
 		    }
 		    
 		   if($('#rooms3adults').length && $('#rooms3adults').val().length){   
 		  var adult3=   $("#rooms3adults").val();
 		  var child3=  $("#rooms3child").val();
 		    
 		       adult=parseInt(adult)+parseInt(adult3);
 		       child=parseInt(child)+parseInt(child3);
 		    
 		    }
 		    
 		     if($('#rooms4adults').length && $('#rooms4adults').val().length){   
 		     
 		  var adult4=   $("#rooms4adults").val();
 		  var child4=  $("#rooms4child").val();
 		     adult=parseInt(adult)+parseInt(adult4);
 		       child=parseInt(child)+parseInt(child4);
 		    
 		    }
 		    

 		    var text="";//room+"1 Room, 1 Adult, 0 Child";
 		    
 		     if(room == 1){
 		      text=text+"1 Room,";
 		     }else{
 		       text=text+room+" Rooms,";
 		     }
 		     
 		     if(adult==1){
 		      text=text+"1 Adult,";
 		     }else{
 		     text=text+adult+" Adults,";
 		     }
 		    
 		    if(child==0){
 		      text=text+"0 Child";
 		     }else if(child==1){
 		     text=text+child+" Child";
 		     }else{
 		     text=text+child+" Children";
 		     }
 		      $("#guest").val(text);
 		     
 		    }
 	   

 	   function addAdult(ad){
 	   var room=$("#rooms").val();

 	 
 	  var adult = $('#roomsadults option:selected').val();

 	   
 	     var child=$("#rooms0child :selected").text();
 	   
 	   if($('#rooms1adults').length && $('#rooms1adults').val().length){
 	   
 	     var adult1=  $("#rooms1adults").val();
 	     var child1=  $("#rooms1child").val();
 	      adult=parseInt(adult)+parseInt(adult1);
 	      child=parseInt(child)+parseInt(child1);
 	   }
 	   
 	    if($('#rooms2adults').length && $('#rooms2adults').val().length){
 	 var adult2=   $("#rooms2adults").val();
 	 var child2=  $("#rooms2child").val();
 	     adult=parseInt(adult)+parseInt(adult2);
 	      child=parseInt(child)+parseInt(child2);
 	   }
 	   
 	  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
 	 var adult3=   $("#rooms3adults").val();
 	 var child3=  $("#rooms3child").val();
 	   
 	      adult=parseInt(adult)+parseInt(adult3);
 	      child=parseInt(child)+parseInt(child3);
 	   
 	   }
 	   
 	    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
 	    
 	 var adult4=   $("#rooms4adults").val();
 	 var child4=  $("#rooms4child").val();
 	    adult=parseInt(adult)+parseInt(adult4);
 	      child=parseInt(child)+parseInt(child4);
 	   
 	   }
 	  
 	 
 	   
 	   var text="";//room+"1 Room, 1 Adult, 0 Child";
 	   
 	    if(room == 1){
 	     text=text+"1 Room,";
 	    }else{
 	      text=text+room+" Rooms,";
 	    }
 	    
 	    if(adult==1){
 	     text=text+"1 Adult,";
 	    }else{
 	    text=text+adult+" Adults,";
 	    }
 	   
 	   if(child==0){
 	     text=text+"0 Child";
 	    }else if(child==1){
 	    text=text+child+" Child";
 	    }else{
 	    text=text+child+" Children";
 	    }
 	     $("#guest").val(text);
 	   }
 	   
 	  function removeFun(roomcount)
 	   { 		   
 		   if(roomcount == '0') {
 			   $("#removeroom").css({display: "none"});
 			   }
 		   else {
 			   $("#removeroom").css({display: "block"});
 			   } 	    
 	   };
 		$(document).ready(function(){
 			
 			 $("#hotelFilter").change(function() {
 				 
 				 var str = $("#hotelFilter").val().trim();
 				 				 
 				 if(str.length > 0) {					 
 					  $("#gobtn").prop('disabled', false);
 					 } else {
 						 $("#gobtn").prop('disabled', true);
 					 }				 
 			}); 			 
 			 
 			room_form_index=$("#rooms").val();
 			//alert(room_form_index);
 			removeFun(room_form_index-1);
 			
 			var room_form_index_new=0;
 			//console.log("Total room "+room_form_index_new);
 			 var chAge=0;
 			if(room_form_index > 1)
 				{/* 
 				for(var j=1;j<room_form_index;j++)
 					{
 					room_form_index_new=j;
 				  if(room_form_index_new <5){
 				 
 			     var cust_indexs = room_form_index_new;
 			  
 			     var   row_index=room_form_index_new;
 			  
 			       if(row_index>0){
 			    	  // console.log("row_index");	   
 			       var cust_index=Number(room_form_index_new);
 			    
 			        $('#cust'+(Number(cust_index)-1)).after($("#cust"+(Number(cust_index)-1)).clone().attr("id","cust" + cust_index));
 			        
 			        $("#cust"+ cust_index).find("#roomNo0").attr("id","roomNo"+(cust_index));
 			      		    
 					 
 			        $("#cust" + cust_index + " select").each(function(){
 			        	
 			            if(this.id.indexOf('adults') != -1){
 			            $(this).attr("name","rooms[" + cust_index+"].adults");
 			            $(this).attr("id","rooms" + cust_index+"adults");
 			            }else if(this.id.indexOf('children') != -1){
 			            	 $(this).attr("name","rooms[" + cust_index+"].children["+chAge+"].age");
 					            $(this).attr("id","rooms" + cust_index+"children["+chAge+"].age");
 					           chAge=chAge+1;
 			            
 			            }else if(this.id.indexOf("s ages") != -1){
 			            	//console.log("s ages");
 			            	$(this).removeAttr("id");
 			            }else{
 			            	  $(this).attr("name","rooms[" + cust_index+"].child");
 					          $(this).attr("id","rooms" + cust_index+"child");
 							  $("#rooms" + cust_index+"child").val($("#childCount"+cust_index).val());
 							  
 			            }
 			            
 			        });
 			        
 			        //rooms1child
 	
 			         chAge=0;
 			        $("#cust"+cust_index).find(".right").attr("id","childAge"+cust_index); 
 			        
 			         $("#childAge"+ cust_index).find("#age"+(cust_index-1)).attr("id","age"+(cust_index));
 			         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"0").attr("id",""+(cust_index)+"0");
 			         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"1").attr("id",""+(cust_index)+"1");
 			         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"2").attr("id",""+(cust_index)+"2");
 			         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"3").attr("id",""+(cust_index)+"3");
 			         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"4").attr("id",""+(cust_index)+"4");
 			       
 			         $("#childAge"+ cust_index).css("display","inline");
 			        
 			          $("#childAge" + cust_index + " select").each(function(){		           
 			        	  $(this).attr("name", "rooms[" + cust_index + "].children[" + chAge + "].age");
 		                    $(this).attr("id", "rooms" + cust_index + "children[" + chAge + "].age");
 		                    //console.log($("#childAge"+cust_index+chAge).val());
 		                    if($("#childAge"+cust_index+chAge).val() == undefined){
 		                    	 $(this).val(1);
 		                    }else{
 		                    	 $(this).val($("#childAge"+cust_index+chAge).val());
 		                    }
 		                   
 		                    chAge = chAge + 1;
 			            });		            
 			        
 			       	}else{
 			    	  row_index=room_form_index_new-cust_indexs;
 					  
 				      for (i = 1; i <= row_index; i++) {
 				    	  room_form_index_new=room_form_index_new-1;
 				    	  $("#cust" + room_form_index_new).remove();
 				    	  $("#childAge" + room_form_index_new).remove(); 		    	 
 				      }
 			       	}
 			      
 			       	var room=$("#rooms").val();
 			      // alert("room:"+room);
 			       	var adult = $('#roomsadults option:selected').val();
 			       	var child=$("#rooms0child option:selected").text();
 				 
 				   if($('#rooms1adults').length && $('#rooms1adults').val().length){
 				    
 				     var adult1=  $("#rooms1adults").val();
 				     var child1=  $("#rooms1child").val();
 				      adult=parseInt(adult)+parseInt(adult1);
 				      child=parseInt(child)+parseInt(child1);
 				   }
 				   
 				  if($('#rooms2adults').length && $('#rooms2adults').val().length){
 				    	
 				    	var adult2=   $("#rooms2adults").val();
 				    	var child2=  $("#rooms2child").val();
 				    	adult=parseInt(adult)+parseInt(adult2);
 				    	child=parseInt(child)+parseInt(child2);
 				   }
 				   
 				  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
 					  var adult3=   $("#rooms3adults").val();
 					  var child3=  $("#rooms3child").val(); 				   
 				      adult=parseInt(adult)+parseInt(adult3);
 				      child=parseInt(child)+parseInt(child3); 				   
 				   }
 				   
 				  if($('#rooms4adults').length && $('#rooms4adults').val().length){   
 				    
 					  var adult4=   $("#rooms4adults").val();
 					  var child4=  $("#rooms4child").val();
 					  adult=parseInt(adult)+parseInt(adult4);
 				      child=parseInt(child)+parseInt(child4);
 				   }
 					   
 		   var text="";//room+"1 Room, 1 Adult, 0 Child";
 		   
 		    if(room == 1){
 	         text=text+"1 Room,";
 	        }else{
 	          text=text+room+" Rooms,";
 	        }
 	        
 	        if(adult==1){
 	         text=text+"1 Adult,";
 	        }else{
 	        text=text+adult+" Adults,";
 	        }
 		   
 		   if(child==0){
 	         text=text+"0 Child";
 	        }else if(child==1){
 	        text=text+child+" Child";
 	        }else{
 	        text=text+child+" Children";
 	        }
 	         $("#guest").val(text);
 	        
 			  }
 										    
 	//	  console.log("J : "+j);
 		}	
 	  
 	*/}
 			
 		
 			/*$("#guestform").click(function(){
 				$(".guests").toggle();
 			});
 			$("#close-div").click(function(){
 				$(".guests").hide();
 			});*/
 			
 			$('#close-div').click(function() {
 					$('.kids_group_detail').hide();
 				}); 			
 				
 			
 			$('.big_image').on('mouseenter','img',function(){ 
 				 var imgsrc=$(this).attr('src');  
 				$('.image_popup').remove();           
 				$(this).parent().after().append("<div class='image_popup'><img src='"+imgsrc+"'></div>");
 				
 			})

 			//image zoom js
 			$('.big_image').on('mouseout','img',function(){ 
 						 var imgsrc=$(this).attr('src');  
 						$('.image_popup').remove(); 						
 					}) 			  
 			  
 			  
 			 $("#addroom").click(function()
 					{ 																 
 					  room_form_index=$("#rooms").val();
 					 // alert("room_form_index "+room_form_index)
 					  removeFun(room_form_index);
 					  if(room_form_index <5){
 						  //alert("room_form_index")
 						var cust_indexs = room_form_index;
 						var row_index=room_form_index;
 				       if(row_index>0){
 				       var cust_index=Number(room_form_index);
 				        $('#cust'+(Number(cust_index)-1)).after($("#cust"+(Number(cust_index)-1)).clone().attr("id","cust" + cust_index));
 				        $("#cust"+ cust_index).find("#roomNo0").attr("id","roomNo"+(cust_index));
 				    
 						var chAge=0;
 				        $("#cust" + cust_index + " select").each(function(){
 				            if(this.id.indexOf('adults') != -1){
 				            $(this).attr("name","rooms[" + cust_index+"].adults");
 				            $(this).attr("id","rooms" + cust_index+"adults");
 				            }else if(this.id.indexOf('children') != -1){ 				            	
 				            	 $(this).attr("name","rooms[" + cust_index+"].children["+chAge+"].age");
 						         $(this).attr("id","rooms" + cust_index+"children["+chAge+"].age");
 						         chAge=chAge+1;
 				            }else{
 				            	  $(this).attr("name","rooms[" + cust_index+"].child");
 						          $(this).attr("id","rooms" + cust_index+"child");
 				            }
 				            
 				            
 				        });
 				        
 				        console.log("childAge "+cust_index)
 				        
 				        $("#cust"+cust_index).find(".right").attr("id","childAge"+cust_index); 
 				        
 				         $("#childAge"+ cust_index).find("#age"+(cust_index-1)).attr("id","age"+(cust_index));
 				         
 				         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"0").attr("id",""+(cust_index)+"0");
 				         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"1").attr("id",""+(cust_index)+"1");
 				         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"2").attr("id",""+(cust_index)+"2");
 				         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"3").attr("id",""+(cust_index)+"3");
 				         $("#childAge"+ cust_index).find("#"+(cust_index-1)+"4").attr("id",""+(cust_index)+"4");
 				         
 				         
 				        
 				         $("#age"+cust_index).css("display","none");
 				         $("#childAge" + cust_index).css("display","inline");
 				          //var chAge=0;
 				          $("#childAge" + cust_index + " select").each(function(){ 				        	  
 				        	  $(this).attr("name", "rooms[" + cust_index + "].children[" + chAge + "].age");
 			                    $(this).attr("id", "rooms" + cust_index + "children[" + chAge + "].age");
 			                    $(this).val(1);
 			                   // $(this).attr("value", "0");
 			                    /*$("#rooms" + cust_index + "children[" + chAge + "].age option[value='1']").attr("selected", true);
 			                    $("rooms" + cust_index + "children[" + chAge + "].age").val("1");
 			                    console.log($("rooms" + cust_index + "children[" + chAge + "].age").val());*/
 			                  //  console.log($(this).val());
 			                    chAge = chAge + 1;
 				            });
 				            
 				     room_form_index=Number(1)+Number(room_form_index); 
 				     $("#rooms").val(room_form_index);
 				     }else{
 				    	 
 				    	  row_index=room_form_index-cust_indexs;
 						  
 					      for (i = 1; i <= row_index; i++) {
 					    	  room_form_index=room_form_index-1;
 					    	  $("#cust" + room_form_index).remove();
 					    	  $("#childAge" + room_form_index).remove(); 			    	 
 					      }
 			     }
 				      
 				       var room=$("#rooms").val();
 				       var adult = $('#roomsadults option:selected').val();
 					     var child=$("#rooms0child :selected").text();
 					     
 					     $("#rooms"+(Number(room)-1)+"adults").val(1);	
 					     $("#rooms"+(Number(room)-1)+"child").val(0);
 					     
 					     addAgeOnLoad(0,(Number(room)-1));
 					    
 					   if($('#rooms1adults').length && $('#rooms1adults').val().length){
 					   
 					     var adult1=  $("#rooms1adults").val();
 					     var child1=  $("#rooms1child").val();
 					      adult=parseInt(adult)+parseInt(adult1);
 					      child=parseInt(child)+parseInt(child1);
 					   }
 					   
 					    if($('#rooms2adults').length && $('#rooms2adults').val().length){
 					 var adult2=   $("#rooms2adults").val();
 					 var child2=  $("#rooms2child").val();
 					     adult=parseInt(adult)+parseInt(adult2);
 					      child=parseInt(child)+parseInt(child2);
 					   }
 					   
 					  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
 					 var adult3=   $("#rooms3adults").val();
 					 var child3=  $("#rooms3child").val();
 					   
 					      adult=parseInt(adult)+parseInt(adult3);
 					      child=parseInt(child)+parseInt(child3);
 					   
 					   }
 					   
 					    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
 					    
 					 var adult4=   $("#rooms4adults").val();
 					 var child4=  $("#rooms4child").val();
 					    adult=parseInt(adult)+parseInt(adult4);
 					      child=parseInt(child)+parseInt(child4);
 					   
 					   }
 																			   
 			   var text="";//room+"1 Room, 1 Adult, 0 Child";
 			   
 			    if(room == 1){
 		         text=text+"1 Room,";
 		        }else{
 		          text=text+room+" Rooms,";
 		        }
 		        
 		        if(adult==1){
 		         text=text+"1 Adult,";
 		        }else{
 		        text=text+adult+" Adults,";
 		        }
 			   
 			   if(child==0){
 		         text=text+"0 Child";
 		        }else if(child==1){
 		        text=text+child+" Child";
 		        }else{
 		        text=text+child+" Children";
 		        }
 		         $("#guest").val(text);
 		        
 				  }
 											    
 			});
 			  
 			  $("#removeroom").click(function(){
 				  room_form_index=$("#rooms").val();
 				  //alert(room_form_index);
 				  
 				  if(room_form_index>1){
 					  
 					  $("#cust" + (Number(room_form_index)-1)).remove();
 					  $("#childAge" + (Number(room_form_index)-1)).remove();
 					  room_form_index=Number(room_form_index)-Number(1); 
 					     $("#rooms").val(room_form_index);
 					 // alert($("#rooms").val);
 					  var room=$("#rooms").val();
 				       //alert("room:"+room);	
 				      
 				       var adult = $('#roomsadults option:selected').val();
 					     var child=$("#rooms0child option:selected").text();
 					   
 					   if($('#rooms1adults').length && $('#rooms1adults').val().length){
 					   
 					     var adult1=  $("#rooms1adults").val();
 					     var child1=  $("#rooms1child").val();
 					      adult=parseInt(adult)+parseInt(adult1);
 					      child=parseInt(child)+parseInt(child1);
 					   }
 					   
 					    if($('#rooms2adults').length && $('#rooms2adults').val().length){
 					 var adult2=   $("#rooms2adults").val();
 					 var child2=  $("#rooms2child").val();
 					     adult=parseInt(adult)+parseInt(adult2);
 					      child=parseInt(child)+parseInt(child2);
 					   }
 					   
 					  if($('#rooms3adults').length && $('#rooms3adults').val().length){   
 					 var adult3=   $("#rooms3adults").val();
 					 var child3=  $("#rooms3child").val();
 					   
 					      adult=parseInt(adult)+parseInt(adult3);
 					      child=parseInt(child)+parseInt(child3);
 					   
 					   }
 					   
 					    if($('#rooms4adults').length && $('#rooms4adults').val().length){   
 					    
 					 var adult4=   $("#rooms4adults").val();
 					 var child4=  $("#rooms4child").val();
 					    adult=parseInt(adult)+parseInt(adult4);
 					      child=parseInt(child)+parseInt(child4);
 					   
 					   }
 						   
 			   var text="";//room+"1 Room, 1 Adult, 0 Child";
 			   
 			    if(room == 1){
 		         text=text+"1 Room,";
 		        }else{
 		          text=text+room+" Rooms,";
 		        }
 		        
 		        if(adult==1){
 		         text=text+"1 Adult,";
 		        }else{
 		        text=text+adult+" Adults,";
 		        }
 			   
 			   if(child==0){
 		         text=text+"0 Child";
 		        }else if(child==1){
 		        text=text+child+" Child";
 		        }else{
 		        text=text+child+" Children";
 		        }
 		         $("#guest").val(text);
 					  
 			 }
 			removeFun(room_form_index-1);	  
 				
 			});
 				  
 		});
 		
 		function randomString(a) {
 		    var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
 		    a || (a = Math.floor(Math.random() * b.length));
 		    for (var c = "", d = 0; d < a; d++) c += b[Math.floor(Math.random() * b.length)];
 		    return c
 		}
 		
 		
 		function submitHotelForm() {
 		    var a = $("#searchHotel").validate({
 		        showErrors: function () {
 		            if (this.settings.highlight)
 		                for (var a = 0; this.errorList[a]; ++a) this.settings.highlight.call(this, this.errorList[a].element, this.settings.errorClass, this.settings.validClass);
 		            if (this.settings.unhighlight)
 		                for (var a = 0, b = this.validElements() ; b[a]; ++a) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
 		        },
 		        rules: { 		            
 		            checkInDate: {
 		                required: !0
 		            },
 		            checkOutDate: {
 		                required: !0
 		            }, 		            
 		        },
 		        errorElement: "span",
 		        messages: { 		            
 		            checkInDate: {
 		                required: "Please enter a valid Check-In Date."
 		            },
 		            checkOutDate: {
 		                required: "Please enter a valid Check-Out Date."
 		            }
 		        }
 		    });
 		    if (a.form()) {
 		        var b = randomString(12);
 		       $("form#searchHotel").attr({action: "/hotelSearch/detail/" + b+"/"+$('#locationid').val()}), $("form#searchHotel").submit()
 		    }
 		};
 		
 		
 		function submitHotelForm2() {
            
            //checkInDate
            //checkOutDate
			var ch = 2;    
			 var checkInDate1 = new Date();
			 var checkOutDate1 = new Date();
			 checkInDate1.setDate(checkInDate1.getDate() + ch);
			 var checkInDate_from = $.datepicker.formatDate('mm-dd-yy', checkInDate1);
			 
			 checkOutDate1.setDate(checkOutDate1.getDate() + (ch+3));
			 var checkOutDate_from = $.datepicker.formatDate('mm-dd-yy', checkOutDate1);
			 
			 $('#checkInDate').val(checkInDate_from);
			 $('#checkOutDate').val(checkOutDate_from);
		    
			 var b = randomString(12);
		        $("form#searchHotel").attr({action: "/hotelSearch/detail/" + b+"/"+$('#locationid').val()}), $("form#searchHotel").submit()
		
		};
 	
 		
 	

