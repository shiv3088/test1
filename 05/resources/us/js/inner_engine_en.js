//M calendar div 	
$("#departDate_new, #returnDate_new, #departSDate_new, #departTDate_new, #checkInDate_new, #checkOutDate_new, #pickUpDate_div, #dropDate_div").click(function() {
        $(this).datepicker('show'); 
    });
	//M Responsive 
var numberOfMonthValue;
  $(window).resize(function() {
    
    if ($(window).width() < 768) {
      numberOfMonthValue =1;
	  $("#departDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
	  $("#pickupDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
	  $("#dropDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
	  $("#checkInDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
	  $("#checkOutDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
    } else {
      numberOfMonthValue =2;
	  $("#departDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
	  $("#pickupDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
	  $("#dropDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
	  $("#checkInDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
	  $("#checkOutDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
    }
  }).trigger('resize');
//Responsive 
  
///////////////// Traveller select drop script  ///////////////////////////////

var month_names =["Jan","Feb","Mar",
                      "Apr","May","Jun",
                      "Jul","Aug","Sep",
                      "Oct","Nov","Dec"];
					  
  $(document).ready(function() {
  	var totpax=1;
  	var adult=1;
  	var child=0;
  	var infant=0;
  	var infantws=0;
  	adult = $("#sub1").val();
  	child = $("#sub2").val();
  	infant = $("#sub3").val();
  	infantws = $("#sub4").val();
  	var cabinType=$("#cabinClass").val();

  	
  	var totpax = parseInt(adult) + parseInt(child) + parseInt(infant)+ parseInt(infantws);
  	/*if (totpax > 1) {
  		 $("#person").val(totpax+ " Travelers, "+cabinType);
  	} else {
  		 $("#person").val(totpax+ " Adult, "+cabinType); 
  	}*/

  	/*$("#person").click(function () {
  	             
  	            $(".traveler-dropdown").slideDown();


  	        });*/
  	        /*$(".done").click(function () {
  	            $(".traveler-dropdown").slideUp();
  	            $("#select_class").focus();
  	        });*/

  	        $("#sub1plus").click(function () {
  	            var sv = $("#sub1").val();
  	           if((parseInt(sv) + 1)==10){
  	        	   return;
  	           }
  	           if((parseInt(totpax))>=9){
  	        	   return;
  	           }
  	           adult=parseInt(adult) + 1;
  	           totpax=parseInt(totpax)+1;
  	            $("#sub1").val(parseInt(sv) + 1);

  	        });

  	        $("#sub1minus").click(function () {
  	            var sv = $("#sub1").val();
  	            if (
  	           parseInt(sv) != 0
  	           )
  	            	 if((parseInt(sv))<=1){
  	                 	   return;
  	                    }
  	            var sv2 = $("#sub3").val();
  	            
  	            if(parseInt(sv2) > parseInt(sv-1)){
  	            	totpax=parseInt(totpax)-1;
  	            	$("#sub3").val(sv-1);	            	
  	            }
  	                 adult=parseInt(adult) - 1;
  	                 totpax=parseInt(totpax)-1;
  	                 
  	                 
  	                $("#sub1").val(parseInt(sv) - 1);
  	                
  	                if((parseInt($("#sub3").val())+parseInt($("#sub4").val())) > parseInt($("#sub1").val())*2){
  	                	
  	                	var diff = ($("#sub1").val()*2)-$("#sub3").val();
  	                	 var infant = $("#sub4").val();
  	            		$("#sub4").val(diff);
  	            		totpax=parseInt(totpax)-(infant-diff);
  			          
  	                }

  	        });




  	        $("#sub2plus").click(function () {
  	            var sv = $("#sub2").val();
  	            if((parseInt(sv) + 1)>9){
  	         	   return;
  	            }
  	            if((parseInt(totpax))>=9){
  	         	   return;
  	            }
  	            child=parseInt(child) + 1;
  	            totpax=parseInt(totpax)+1;
  	            $("#sub2").val(parseInt(sv) + 1);

  	        });

  	        $("#sub2minus").click(function () {
  	            var sv = $("#sub2").val();            
  	            	
  	            	 if(sv<=0){
  	               	   return;
  	                  }
  	            	 if(totpax==1){
  	            	 	   return;
  	            	    }
  	            	child=parseInt(child) - 1;
  	            totpax=parseInt(totpax)-1;
  	                $("#sub2").val(parseInt(sv) - 1);
  	        });


  	        $("#sub3plus").click(function () {
  	            var sv = $("#sub3").val();
  	            var adultInfant = $("#sub1").val();
  	            var infantVal = $("#sub4").val();
  	            if((parseInt(sv) + 1+parseInt(infantVal))>adultInfant*2){	            	
  		          	   return;
  		             }
  	            if((parseInt(sv) + 1)>adultInfant){
  	          	   return;
  	             }
  	           if((parseInt(totpax))>=9){
  	          	   return;
  	             }
  	            infant=parseInt(infant) + 1;
  	            totpax=parseInt(totpax)+1;
  	            $("#sub3").val(parseInt(sv) + 1);

  	        });

  	        $("#sub3minus").click(function () {
  	        	
  	        	
  	            var sv = $("#sub3").val();
  	            	
  	            	if(sv<=0){
  	             	   return;
  	                }
  	            	if(totpax==1){
  	            	  if(sv >= 1)
  	                    {
  	                    infant=parseInt(infant) - 1;
  	                    totpax=parseInt(totpax)-1;
  	                    $("#sub3").val(parseInt(sv) - 1);
  	                    }
  	         	 	   return;
  	         	    }
  	            	infant=parseInt(infant) - 1;
  	                totpax=parseInt(totpax)-1;
  	                $("#sub3").val(parseInt(sv) - 1);
  	        });


  	        $("#sub4plus").click(function () {
  	            var sv = $("#sub4").val();
  	            var infantVal = $("#sub3").val();
  	            var adultVal = $("#sub1").val();
  	            
  	         
  	            
  	            if((parseInt(sv) + 1+parseInt(infantVal)) > (parseInt(adultVal)*2)){
  		          	   return;
  		             }	            
  	            if((parseInt(sv) + 1)>=9){
  	          	   return;
  	             }
  	            if((parseInt(totpax))>=9){
  	          	   return;
  	             }
  	            infantws=parseInt(infantws) + 1;
  	            totpax=parseInt(totpax)+1;
  	            $("#sub4").val(parseInt(sv) + 1);

  	        });

  	        $("#sub4minus").click(function () {
  	            var sv = $("#sub4").val();
  	            	
  	            	if(sv<=0){
  	                	   return;
  	                   }
  	            	if(totpax==1){
  	         	 	   return;
  	         	    }
  	            	infantws=parseInt(infantws) - 1;
  	            	totpax=parseInt(totpax)-1;
  	                $("#sub4").val(parseInt(sv) - 1);

  	        });



  	        $(".maincalulation").click(function () {
  	            var sv = $("#sub1").val();
  	            var sv1 = $("#sub2").val();
  	            var sv2 = $("#sub3").val();
  	            var sv3 = $("#sub4").val();
  	            var sv4=$("#cabinClass").val();
  	            
  	            var total = parseInt(sv) + parseInt(sv1) + parseInt(sv2)+ parseInt(sv3);
  	            
  	            if (total > 1) {
  	            	 $("#person").val(total+ " Travelers, "+sv4);
  	        	} else {
  	        		 $("#person").val(total+ " Adult, "+sv4); 
  	        	}
  	            
  	            

  	        });
  	});
  
  
///////////////// Traveller select drop script for small engine  ///////////////////////////////

 
  $(document).ready(function() {
  	var totpaxse=1;
  	var adultse=1;
  	var childse=0;
  	var infantse=0;
  	var infantwsse=0;
  	
  	
  	$(".maincalulationse").click(function () {
          var sv = $("#sub1se").val();
          var sv1 = $("#sub2se").val();
          var sv2 = $("#sub3se").val();
          var sv3 = $("#sub4se").val();
          
          adultse = $("#sub1se").val();
        	childse = $("#sub2se").val();
        	infantse = $("#sub3se").val();
        	infantwsse = $("#sub4se").val();
          
          
          var total = parseInt(sv) + parseInt(sv1) + parseInt(sv2)+ parseInt(sv3);
          
          totpaxse = parseInt(adultse)+parseInt(childse)+parseInt(infantse)+parseInt(infantwsse);
          
      });
  	
   
  
   
  	/*if (totpax > 1) {
  		 $("#person").val(totpax+ " Travelers, "+cabinType);
  	} else {
  		 $("#person").val(totpax+ " Adult, "+cabinType); 
  	}*/

  	/*$("#person").click(function () {
  	             
  	            $(".traveler-dropdown").slideDown();


  	        });*/
  	        /*$(".done").click(function () {
  	            $(".traveler-dropdown").slideUp();
  	            $("#select_class").focus();
  	        });*/

  	        $("#sub1plusse").click(function () {
  	        	
  	        	//alert($("#sub1se").val())
  	        	
  	            var sv = $("#sub1se").val();
  	           if((parseInt(sv) + 1)==10){
  	        	   return;
  	           }
  	           if((parseInt(totpaxse))>=9){
  	        	   return;
  	           }
  	           adultse=parseInt(adultse) + 1;
  	           totpaxse=parseInt(totpaxse)+1;
  	            $("#sub1se").val(parseInt(sv) + 1);
  	            
  	        });

  	        $("#sub1minusse").click(function () {
  	            var sv = $("#sub1se").val();
  	            if (
  	           parseInt(sv) != 0
  	           )
  	            	 if((parseInt(sv))<=1){
  	                 	   return;
  	                    }
  	            var sv2 = $("#sub3se").val();
  	            
  	            if(parseInt(sv2) > parseInt(sv-1)){
  	            	totpaxse=parseInt(totpaxse)-1;
  	            	$("#sub3se").val(sv-1);	            	
  	            }
  	                 adultse=parseInt(adultse) - 1;
  	                 totpaxse=parseInt(totpaxse)-1;
  	                 
  	                 
  	                $("#sub1se").val(parseInt(sv) - 1);
  	                
  	                if((parseInt($("#sub3se").val())+parseInt($("#sub4se").val())) > parseInt($("#sub1se").val())*2){
  	                	
  	                	var diff = ($("#sub1se").val()*2)-$("#sub3se").val();
  	                	 var infant = $("#sub4se").val();
  	            		$("#sub4se").val(diff);
  	            		totpaxse=parseInt(totpaxse)-(infant-diff);
  			          
  	                }

  	        });




  	        $("#sub2plusse").click(function () {
  	            var sv = $("#sub2se").val();
  	            if((parseInt(sv) + 1)>9){
  	         	   return;
  	            }
  	            if((parseInt(totpaxse))>=9){
  	         	   return;
  	            }
  	            childse=parseInt(childse) + 1;
  	            totpaxse=parseInt(totpaxse)+1;
  	            $("#sub2se").val(parseInt(sv) + 1);

  	        });

  	        $("#sub2minusse").click(function () {
  	            var sv = $("#sub2se").val();            
  	            	
  	            	 if(sv<=0){
  	               	   return;
  	                  }
  	            	 if(totpaxse==1){
  	            	 	   return;
  	            	    }
  	            	childse=parseInt(childse) - 1;
  	            totpaxse=parseInt(totpaxse)-1;
  	                $("#sub2se").val(parseInt(sv) - 1);
  	        });


  	        $("#sub3plusse").click(function () {
  	            var sv = $("#sub3se").val();
  	            var adultInfant = $("#sub1se").val();
  	            var infantVal = $("#sub4se").val();
  	            if((parseInt(sv) + 1+parseInt(infantVal))>adultInfant*2){	            	
  		          	   return;
  		             }
  	            if((parseInt(sv) + 1)>adultInfant){
  	          	   return;
  	             }
  	           if((parseInt(totpaxse))>=9){
  	          	   return;
  	             }
  	            infantse=parseInt(infantse) + 1;
  	            totpaxse=parseInt(totpaxse)+1;
  	            $("#sub3se").val(parseInt(sv) + 1);

  	        });

  	        $("#sub3minusse").click(function () {
  	        	
  	        	
  	            var sv = $("#sub3se").val();
  	            	
  	            	if(sv<=0){
  	             	   return;
  	                }
  	            	if(totpaxse==1){
  	            	  if(sv >= 1)
  	                    {
  	                    infantse=parseInt(infantse) - 1;
  	                    totpaxse=parseInt(totpaxse)-1;
  	                    $("#sub3se").val(parseInt(sv) - 1);
  	                    }
  	         	 	   return;
  	         	    }
  	            	infantse=parseInt(infantse) - 1;
  	                totpaxse=parseInt(totpaxse)-1;
  	                $("#sub3se").val(parseInt(sv) - 1);
  	        });


  	        $("#sub4plusse").click(function () {
  	            var sv = $("#sub4se").val();
  	            var infantVal = $("#sub3se").val();
  	            var adultVal = $("#sub1se").val();
  	            
  	         
  	            
  	            if((parseInt(sv) + 1+parseInt(infantVal)) > (parseInt(adultVal)*2)){
  		          	   return;
  		             }	            
  	            if((parseInt(sv) + 1)>=9){
  	          	   return;
  	             }
  	            if((parseInt(totpaxse))>=9){
  	          	   return;
  	             }
  	            infantwsse=parseInt(infantwsse) + 1;
  	            totpaxse=parseInt(totpaxse)+1;
  	            $("#sub4se").val(parseInt(sv) + 1);

  	        });

  	        $("#sub4minusse").click(function () {
  	            var sv = $("#sub4se").val();
  	            	
  	            	if(sv<=0){
  	                	   return;
  	                   }
  	            	if(totpaxse==1){
  	         	 	   return;
  	         	    }
  	            	infantwsse=parseInt(infantwsse) - 1;
  	            	totpaxse=parseInt(totpaxse)-1;
  	                $("#sub4se").val(parseInt(sv) - 1);

  	        });



  	        
  	});
  

$(function () {


    var hours = 24; // Reset when storage is more than 24hours
    var now = new Date().getTime();
    var setupTime = localStorage.getItem('setupTime');
    if (setupTime == null) {
    } else {
        if (now - setupTime > hours * 60 * 60 * 1000) {
            localStorage.clear()

        }
    }

    if (localStorage.firstVisit == undefined) {

        $('#appId').show();
    } else if (localStorage.firstVisit == false) {

        $('#appId').show();
    } else {

        $('#appId').hide();
    }



    $(function () {
        $("#appIdimg").click(function () {

            $('#appId').hide();
            localStorage.firstVisit = true;
            if (setupTime == null) {
                localStorage.setItem('setupTime', now)
            } else {
                if (now - setupTime > hours * 60 * 60 * 1000) {
                    localStorage.clear()
                    localStorage.setItem('setupTime', now);
                }
            }

        });
    });

    
});

$(function () {
	
	var d = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
    
    var minDate = new Date();
	var maxDate =new Date();

    $("#checkInDateDiv").click(function () {	
        $('#checkInDate').datepicker('show');
    });



    $("#checkInDate").datepicker({
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
			$("#checkInDateText").html(dropDateMin.getDate()+" "+month_names[dropDateMin.getMonth()]+" "+dropDateMin.getFullYear());			 
        }
    });
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
      
    $("#checkOutDateDiv").click(function () {

        $('#checkOutDate').datepicker('show');

    });


    $("#checkOutDate").datepicker({
        //changeMonth: !0,
        //changeYear: !0,
        numberOfMonths: numberOfMonthValue,
        dateFormat: "mm-dd-yy",
        showButtonPanel: true,
        minDate:minDate,maxDate:maxDate1,
		onClose: function () {  
		var dropDateMin = $("#checkOutDate").datepicker("getDate");
		$("#checkOutDateText").html(dropDateMin.getDate()+" "+month_names[dropDateMin.getMonth()]+" "+dropDateMin.getFullYear());
		}
    });
});


$(function () {
	
    $("#departDateDiv").click(function () {
        //  alert('ffd');
        // $("#departDate").show();
        $('#departDate').datepicker('show');
    });

    $.datepicker.setDefaults($.datepicker.regional['en-AU']);
    
    $("#departDate").datepicker({
	       // changeMonth: true,
	       // changeYear: true,
			numberOfMonths:numberOfMonthValue,
	        dateFormat: "mm-dd-yy",
	        showButtonPanel: true,
			beforeShowDay: function(date) {
               var startDate = $('#departDate').datepicker("getDate");
               var endDate = $('#returnDate').datepicker("getDate");
               var className;


               if (startDate && (date.getTime() == startDate.getTime())) {
                   className = "start-date"
               }
               else if (endDate && (date.getTime() == endDate.getTime())) {
                   className = "end-date";
               }
               else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                   className = "between-date";
               }
               else {
                   className = "";
               }
               
               return [true, className];
           },
	        minDate: minDate, maxDate: maxDate,
	        onClose: function () {
	            var dateDepMin = $("#departDate").datepicker("getDate");
	            
	         try {  
	            if (dateDepMin != null && dateDepMin != '') {
	                if ($('#tripType').val() == '2') {
	                	 $("#returnDate").val($("#departDate").val());
	                    $("#returnDate").datepicker("change", { minDate: new Date(dateDepMin) });
	                    var dateRetMin = $('#returnDate').datepicker("getDate");
	                    var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());

						
	                    if (dateRetMin != null) {
	                        var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());


	                        if (dMin > rMin) {
	                            $('#returnDate').val($.datepicker.formatDate('mm-dd-yy', new Date(dMin)));
	                            //$("#returnDate").focus();
								if($(window).width() > 767){			   
												$('#returnDate').datepicker('show');
										   }
	                        }
	                        else
	                        	{
	                        	//$("#returnDate").focus();
	                        	$('#returnDate').val($.datepicker.formatDate('mm-dd-yy', new Date(dMin)));
	                           	if($(window).width() > 767){			   
												$('#returnDate').datepicker('show');
										   }
	                        	}
	                    }
	                    else {
	                        $('#returnDate').val($.datepicker.formatDate('mm-dd-yy', new Date(dMin)));
	                         //$("#returnDate").focus();
	                       	if($(window).width() > 767){			   
												$('#returnDate').datepicker('show');
										   }
	                    }
	                }
	            }
	        } catch (e) {

	        }  
	         $("#departDateText").html(dateDepMin.getDate()+" "+month_names[dateDepMin.getMonth()]+" "+dateDepMin.getFullYear());
			 
	            
	        }
	    });
});
$(function () {
    $("#returnDateDiv").click(function () {
        if ($('#tripType').val() == "2") {
            $('#returnDate').datepicker('show');
        }
    });


    $("#returnDate").datepicker({
       // changeMonth: true,
	// changeYear: true,
	numberOfMonths:numberOfMonthValue,
        dateFormat: "mm-dd-yy",
        showButtonPanel: true,
		beforeShowDay: function(date) {
               var startDate = $('#departDate').datepicker("getDate");
               var endDate = $('#returnDate').datepicker("getDate");
               var className;


               if (startDate && (date.getTime() == startDate.getTime())) {
                   className = "start-date"
               }
               else if (endDate && (date.getTime() == endDate.getTime())) {
                   className = "end-date";
               }
               else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                   className = "between-date";
               }
               else {
                   className = "";
               }
               
               return [true, className];
           },
        minDate: minDate, maxDate: maxDate,
        onClose: function () {
            var dateDepMin = $('#departDate').datepicker("getDate");
            var dateRetMin = $('#returnDate').datepicker("getDate");

        try {
             if (dateDepMin != null && dateDepMin != '') {
                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
                if (dateRetMin != null) {
                	
                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                    if (dMin > rMin) {
                        //alert('Returning date always equal or greater than departure date!');
                        $("#returnDate").val('');
                    }
                }
             }
           } catch (e) {

         }   
          $("#returnDateText").html(dateRetMin.getDate()+" "+month_names[dateRetMin.getMonth()]+" "+dateRetMin.getFullYear());  
        }
    });
});

$(function () {

    $("#sedepartDateDiv").click(function () {
       //alert('sedepartDate');
        // $("#checkInDate").show();
        $('#sedepartDate').datepicker('show');
    });
   
   
    	$( "#sedepartDate" ).datepicker({
	// changeMonth: true,
	// changeYear: true,
	numberOfMonths:numberOfMonthValue,
			  dateFormat:"mm-dd-yy",
			  showButtonPanel: true,
			  minDate: minDate, maxDate: maxDate,
			  onClose: function () {
              var dateDepMin = $('#sedepartDate').datepicker("getDate");
             
            
           
            if (dateDepMin != null && dateDepMin != '') {
            	  if ($('#tripTypeDeal').val() == '2') {
            	 var dateRetMin = $('#sereturnDate').datepicker("getDate");
                $("#sereturnDate").datepicker("change", { minDate: new Date(dateDepMin) });
                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
                if (dateRetMin != null) {
                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                    if (dMin > rMin) {
                        $('#sereturnDate').val($.datepicker.formatDate('mm-dd-yy', new Date(dMin)));
                        $("#sereturnDate").focus();
                    }
                    else
                	{
                	//$("#returnDate").focus();
                	$('#sereturnDate').val($.datepicker.formatDate('mm-dd-yy', new Date(dMin)));
                    $('#sereturnDate').datepicker('show');
                	}
                }
                else {
                    $('#sereturnDate').val($.datepicker.formatDate('mm-dd-yy', new Date(dMin)));
                    $("#sereturnDate").focus();
                }
            	  }
            }
        }
	});
  }); 

$(function () {

    $("#sereturnDateDiv").click(function () {
       //alert('sereturnDate');
        // $("#checkInDate").show();
        $('#sereturnDate').datepicker('show');
    });
    

 
		$( "#sereturnDate" ).datepicker({
				   // changeMonth: true,
					// changeYear: true,
					numberOfMonths:numberOfMonthValue,
				   dateFormat:"mm-dd-yy",
				   showButtonPanel: true,
				   minDate: minDate, maxDate: maxDate,
			       onClose: function () {
			       var dateDepMin = $('#sedepartDate').datepicker("getDate");
			       var dateRetMin = $('#sereturnDate').datepicker("getDate");
			            if (dateDepMin != null && dateDepMin != '') {
			                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
			                if (dateRetMin != null) {
			                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
			                    if (dMin > rMin) {
			                        alert('Check Out date always equal or greater than Check In date!');
			                      $("#sereturnDate").val('');
			                    }
			                }
			            }
			        }
				});
			  });
			  
			  

$('.form-group-select-plus').each(function () {
    var self = $(this),
        btnGroup = self.find('.btn-group').first(),
        select = self.find('select');

    btnGroup.children('label').last().click(function () {
        btnGroup.addClass('hidden');
        select.removeClass('hidden');


    });
    btnGroup.children('label:not(:last-child)').click(function () {
        select.val($(this).children("input:eq(0)").data("value"));
    });
});

minDate = new Date();

var x = 11;
maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + x);




numMonth = 1;
// actionUrl = '/service/getairport';    
$("#sub1").val("1");
$("#sub2").val("0");
$("#sub3").val("0");
$("#sub4").val("0");
$(function () {
    $('.offcanvas-toggle-btn').click(function () {
        $('body').toggleClass('active');
    });

})

$(function () {
    var overlay = $('<div id="overlay" ></div>');
    $('.close_new').click(function () {
        $('.popup_feedback').hide();
        overlay.appendTo(document.body).remove();
        return false;
    });

    $('.click').click(function (e) {
        overlay.show();
        overlay.appendTo(document.body);
        $('.popup_feedback').show();
        e.stopPropagation();
        return false;
    });
});

$(".popup_feedback").click(function (e) {
    e.stopPropagation();
});
$("#overlay").click(function (e) {
    e.stopPropagation();
});

$(document).click(function () {

    $("#overlay").hide();

    $('.popup_feedback').hide();

});

function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);


$(function () {
    var overlay = $('<div id="overlay" onclick="hideQuote()"></div>');
    $('.close_new').click(function () {
        $('.popup_feedback').hide();
        overlay.appendTo(document.body).remove();
        return false;
    });

    $('.x').click(function () {
        $('.popup_feedback').hide();
        overlay.appendTo(document.body).remove();
        return false;
    });

    $('.click').click(function () {
        overlay.show();
        overlay.appendTo(document.body);
        $('.popup_feedback').show();
        return false;
    });
});
function hideQuote() {
    $(document).ready(function () {
        $('#overlay').click(function () {

            $(this).hide();

            $('.popup_feedback').hide();

        });
    });
}
function jawEngineToggle(){
	$("#return").slideToggle();
}
function ddlTypejourneyChange(ddlType) {

    if (ddlType == "1") {


        var myEl = angular.element(document.querySelector('#ow'));
        myEl.addClass('active');

        var myRT = angular.element(document.querySelector('#rt'));
        myRT.removeClass('active');

        $('#tripType').val(1);
       // var dateDepMin = $('#departDate').datepicker("getDate");
       // $("#returnDate").datepicker("change", { minDate: new Date(dateDepMin) });
        $("input[name='returnDate']").prop("disabled", true);
        $("#returnDate").prop("disabled", true);
        document.getElementById("returnDiv").style.display = 'none';
        var xs = 7;
        returnsDate = new Date();
       // returnsDate.setDate(dateDepMin.getDate() + xs);

        day = returnsDate.getDate(),
        month = monthNames[returnsDate.getMonth()];
        var days = weekday[returnsDate.getUTCDay()];

        var dt_from = $.datepicker.formatDate('mm-dd-yy', returnsDate);

       // $("#returnDate").val(dt_from);
       // document.getElementById("returnDate").value = dt_from;
		$("#returnAnother").hide();
		$("#return").hide();
    }
    else if (ddlType == "2") {

        var myEl = angular.element(document.querySelector('#ow'));


        var myRT = angular.element(document.querySelector('#rt'));
        myEl.removeClass('active');
        myRT.addClass('active');

        $('#tripType').val(2);
        $("input[name='returnDate']").prop("enabled", true);
        $("#returnDate").prop("disabled", false);
        document.getElementById("returnDiv").style.display = 'block';
		$("#returnAnother").show();
		//$("#return").show();
		//alert($("#departDate").val());
		if($("#departDate").val() == ""){
			$("#returnDate").val();
		    document.getElementById("returnDate").value = "";
		}else{
	    var xs = 7;
        var depDatee = $("#departDate").val().split('-');
        minDate = new Date(depDatee[2] + "/" + depDatee[0] + "/" + depDatee[1]);
        //minDate=new Date($("#departDate").val());
        minDate.setDate(minDate.getDate() + xs);
        var dt_from = $.datepicker.formatDate('mm-dd-yy', minDate);
        $("#returnDate").val(dt_from);
        document.getElementById("returnDate").value = dt_from;
		}
        
		
    } else {
        $('#tripType').val(2);
        $("#returnDate").prop("disabled", false);
    }

}
/*			      
$.validator.addMethod("endGreaterThanBegin", function(value, element) {
    return adult <= infant
}, "* End Point Should be Greater than Start");
		
$.validator.addMethod("user_email_not_same", function(value, element) {
   alert("dd");
   return $('#adult').val() <= $('#infant').val()
}, "* User and Email should not match");
*/
$.validator.addMethod('le', function (value, element, param) {

    return this.optional(element) || value <= $(param).val();
}, 'Invalid value');

$.validator.addMethod("greaterThan", function (value, element, params) {

    if (!/Invalid|NaN/.test(new Date(value))) {
        return new Date(value) > new Date($(params).val());
    }

    return isNaN(value) && isNaN($(params).val())
        || (Number(value) > Number($(params).val()));
}, 'Must be greater than {0}.');


function submitHotelForm() {

    var validatorHotel = $("#searchHotel").validate({
        showErrors: function () {
            if (this.settings.highlight) {
                for (var i = 0; this.errorList[i]; ++i) {
                    this.settings.highlight.call(this, this.errorList[i].element,
                        this.settings.errorClass, this.settings.validClass);
                }
            }
            if (this.settings.unhighlight) {
                for (var i = 0, elements = this.validElements() ; elements[i]; ++i) {
                    this.settings.unhighlight.call(this, elements[i],
                        this.settings.errorClass, this.settings.validClass);
                }
            }
        },
        rules: {
            stayCity: {
                required: true,
                minlength: 3
            },
            checkInDate: {
                required: true,
            },
            checkOutDate: {
                required: true,
            },
            room: {
                required: true,
                range: [1, 5]

            },
        },
        errorElement: "span",
        messages: {
            stayCity: {
                required: "Please enter a valid Destination City.",
                minlength: "Destination City must consist of at least 3 characters",

            },
            checkInDate: {
                required: "Please enter a valid Check-In Date.",

            },
            checkOutDate: {
                required: "Please enter a valid Check-Out Date.",

            },
        }

    });



    // alert("val 2"+rndId);

    //$('form#flightSearch').attr({action: '/search/id/'+rndId});   
    // $('form#flightSearch').submit();
    // alert("val 3"+rndId); 
    if (validatorHotel.form()) { // validation perform
        /*  var total = parseInt($("#adult").val()) + parseInt($("#child").val()) + parseInt($("#infantWs").val());
         var adults=parseInt($("#adult").val());
         var infants=parseInt($("#infant").val())
        if (infants > adults) {
        $("#error").html("<p>&raquo; Each Infant (in lap) should have at least one Adult traveling along.</p>")
        return false;
        } 
        
        
        if (total >= 10) {
        $("#error").html("<p>&raquo; Total number of Passenger should be less than or equal to 9 only.</p>")
        return false;
        } 
        var startDate = new Date($('#froDate').val());
        var endDate = new Date($('#toDate').val());
        
        if (startDate < endDate){
        $("#error").html("<p>&raquo; Return date should be equal or greater than Depart date.</p>")
        return false;
        }
        
         if ($.trim($("#froCity").val()) == $.trim($("#toCity").val()) && ($.trim($("#toCity").val()).length > 0 || $.trim($("#froCity").val()).length > 0)) {
         $("#error").html("<p>&raquo; Please enter a different From and To city/ airport code!</p>") 
        
         return false;
         } */
        // alert("val2");
        var rndId = randomString(12);
        $('form#searchHotel').attr({ action: '/hotelSearch/id/' + rndId });
        $('form#searchHotel').submit();

        //  $('form#flightSearch').attr({action: '/search/id/'+rndId});   
        // $('form#flightSearch').submit();
    }

}
function submitForm() {
    var validator = $("#flightSearch").validate({
        showErrors: function () {
            if (this.settings.highlight) {
                for (var i = 0; this.errorList[i]; ++i) {
                    this.settings.highlight.call(this, this.errorList[i].element,
                        this.settings.errorClass, this.settings.validClass);
                }
            }
            if (this.settings.unhighlight) {
                for (var i = 0, elements = this.validElements() ; elements[i]; ++i) {
                    this.settings.unhighlight.call(this, elements[i],
                        this.settings.errorClass, this.settings.validClass);
                }
            }
        },
        /*  showErrors: function(errorMap, errorList) {
               // Do nothing here
           },
           onfocusout: false,
           onkeyup: false, */
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
                    depends: function (element) {
                        if ($('#tripType').val() == '2') {
                            return true;
                        } else {
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
                required: true,
                range: [0, 8],
                le: '#sub1'
            },
        },
        errorElement: "span",
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
                required: "Please enter a valid Return Date.",
                le: "Each Infant (in lap) should have at least one Adult traveling along"
            },
        }

    });

    var adults = parseInt($("#sub1").val());
    if (adults == 0) {
        if (messhow) {
            messhow = false;
            $.notify('Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please <a href="/us/contact" target="_blank">call us</a>. Otherwise please include at least 1 adult then hit "Search".', 'warning');
        } return false;
    }
    if (validator.form()) { // validation perform
        var total = parseInt($("#sub1").val()) + parseInt($("#sub2").val()) + parseInt($("#sub3").val()) + parseInt($("#sub4").val());
        var adults = parseInt($("#sub1").val());
        var infants = parseInt($("#sub3").val())
        var inw = parseInt($("#sub4").val());
        
        if (((parseInt($("#sub3").val())+parseInt($("#sub4").val())) > (parseInt($("#sub1").val())*2)) && inw != 0 ) {
         	$("#error").html("<p>Airlines allow a maximum of 2 Infant per Adult.</p>")
         	$("#sub3").addClass("error");
           $("#sub4").addClass("error");
         	return false;
         }
        
        if (infants > adults) {
            $("#error").html("<p>&raquo; Each Infant (in lap) should have at least one Adult traveling along.</p>")
            return false;
        }

        if (adults == 0) {
            if (messhow) {
                messhow = false;
                $.notify('Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please <a href="/us/contact" target="_blank">call us</a>. Otherwise please include at least 1 adult then hit "Search".', 'warning');
            } return false;
        }
        if (total >= 10) {
            $("#error").html("<p>&raquo; Total number of Passenger should be less than or equal to 9 only.</p>")
            return false;
        }
        var startDate = new Date($('#froDate').val());
        var endDate = new Date($('#returnDate').val());

        if (startDate < endDate) {
            $("#error").html("<p>&raquo; Return date should be equal or greater than Depart date.</p>")
            return false;
        }

        if ($.trim($("#froCity").val()) == $.trim($("#toCity").val()) && ($.trim($("#toCity").val()).length > 0 || $.trim($("#froCity").val()).length > 0)) {
            $("#error").html("<p>&raquo; Please enter a different From and To city/ airport code!</p>")

            return false;
        }
        
       localStorage.removeItem("underCutPriceShow");
		localStorage.removeItem("underCutPriceSet");

        var rndId = randomString(12);
        $('form#flightSearch').attr({ action: '/us/search/id/' + rndId });
        $('form#flightSearch').submit();


    }
}

//car submit start
function submitCarForm() {
	
	
	
/*	var b = randomString(12);
    $("form#searchCar").attr({
        action: "/carSearch/id/" + b
    }), $("form#searchCar").submit()*/
    
    var a = $("#searchCar").validate({
        showErrors: function () {
            if (this.settings.highlight)
                for (var a = 0; this.errorList[a]; ++a) this.settings.highlight.call(this, this.errorList[a].element, this.settings.errorClass, this.settings.validClass);
            if (this.settings.unhighlight)
                for (var a = 0, b = this.validElements() ; b[a]; ++a) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
        },
        rules: {                   
		    pickupCity: {
		  		required: true,
		  		minlength: 3
		  	},
		  	pickupDate: {
		  		required: !0
		  	},
		  	dropDate: {
		  		required: !0 
		  	},
		  	pickupTime: {
		  		required: !0 
		  		
		  	},
		  	dropTime: {
		  		required: !0 
		  		
		  	},
		  	driverAge: {
		  		required: true
		  		
		  	},
		},  
	       errorElement: "span" ,                              
	       messages: {
	   		pickupCity: {
				required: "Please enter a valid Destination City.",
				minlength: "Destination City must consist of at least 3 characters",
				
			},
			pickupDate: {
				required: "Please enter a valid Check-In Date.",
				
			},
			dropDate: {
				required: "Please enter a valid Check-Out Date.",
			},
			driverAge: {
				required: "",
			},
	       }																       
		}); 
    if (a.form()) {
        var b = randomString(12);
    $("form#searchCar").attr({
        action: "/carSearch/id/" + b
    }), $("form#searchCar").submit()
    }
}

function leadingZero(value) {
	if (value < 10) {
		return "0" + value.toString();
	}
	
	return value.toString();
}

function OnCarDealSearch(pickupLocationId, pickUpLocationDisplay, pickUpCity, dropOffCity, pickUpDate, dropOffDate) {
	
	if(pickUpDate == '' || dropOffDate == '') {
		var currDate = new Date();
     	currDate.setMonth(currDate.getMonth()+1);
        
     	var pickuptime = '10:00';
        var dropofftime = '10:00';
     	
     	var addedPickDate = leadingZero(currDate.getDate())+'-'+leadingZero(currDate.getMonth()+1)+'-'+currDate.getFullYear();
  		currDate.setDate(currDate.getDate()+3);
  		var addedDropDate = leadingZero(currDate.getDate())+'-'+leadingZero(currDate.getMonth()+1)+'-'+currDate.getFullYear();
  		
  		pickUpDate = addedPickDate;
  		dropOffDate = addedDropDate;
	} else {
		pickUpDate = pickUpDate.substring(0, pickUpDate.indexOf('T'));
		dropOffDate = dropOffDate.substring(0, dropOffDate.indexOf('T'));
		
		var pDate = new Date(pickUpDate);
		var dDate = new Date(dropOffDate);
		
		pickUpDate = leadingZero(pDate.getDate()) +'-'+leadingZero(pDate.getMonth()+1)+'-'+(pDate.getFullYear());
		dropOffDate = leadingZero(dDate.getDate()) +'-'+leadingZero(dDate.getMonth()+1)+'-'+(dDate.getFullYear());
	}
	
	
	
	$('#pickupCity').val(pickUpLocationDisplay);
	$('#pickUpLocationID').val(pickupLocationId);
	$('#pickUpLocationCode').val(pickUpCity);
	$('#dropOffLocationCode').val(dropOffCity);
	$('#dropCity').val('');
	$('#pickupDate').val(pickUpDate);
	$('#dropDate').val(dropOffDate);
	$('#driverAge').val(35);
	$('#pickupTime').val('10:00');
	$('#dropTime').val('10:00');
	
	var b = randomString(12);
	$("form#searchCar").attr({
    	action: "/carSearch/id/" + b
	});
	
	$("form#searchCar").submit();
}

//car submit end

//car clander
$(function(){
	
	
	 var d = new Date();
	    var monthNames = ["January", "February", "March", "April", "May", "June",
	        "July", "August", "September", "October", "November", "December"];
	    today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
	    
	
	$("#pickUpDate_div").click(function () {
	    $("#pickupDate").datepicker('show');
	});
	
	var minDate = new Date();
	minDate.setDate(minDate.getDate()+2);
	var maxDate=new Date();
	
	$("#pickupDate").datepicker({
		
		numberOfMonths:numberOfMonthValue,
		//changeMonth: true,
        //changeYear: true,
		dateFormat: "mm-dd-yy",
        showButtonPanel: true,
        minDate: minDate,maxDate: "+11m",
        onClose: function () {       	 
        	 
        	 var dropDateMin = $("#pickupDate").datepicker("getDate");

             try {
                 if (dropDateMin != null && dropDateMin != '') 
                 {
                	 $("#dropDate").val($("#pickupDate").val());
                     var from = $('#pickupDate').datepicker('getDate');
                     var date_diff = Math.ceil((from.getTime() - Date.parse(today)) / 86400000);
                     var maxDatedrop=date_diff+30+'d';
                     $("#dropDate").datepicker("change", { minDate: new Date(dropDateMin)});
                     $("#dropDate").datepicker("change", { maxDate: maxDatedrop });
                 }
             }catch(e)
                 {
                 }
             $("#dropDate").datepicker('show'); 
			 $("#pickupDateText").html(dropDateMin.getDate()+" "+month_names[dropDateMin.getMonth()]+" "+dropDateMin.getFullYear())
        }
    
		
	});
	
});

$(document).ready(function(){
	$("#roomsadults").val("2");
	//$("body").addClass('carsection');
	var ch = 2;    
    checkInDate = new Date();
    checkInDate.setDate(checkInDate.getDate() + ch);
   
   	var xs = 5; 
    returnsDate = new Date();
    returnsDate.setDate(returnsDate.getDate() + xs);
    
    var dt_to = $.datepicker.formatDate('mm-dd-yy', new Date());
	var dt_from = $.datepicker.formatDate('mm-dd-yy', returnsDate);
	var checkInDate_from = $.datepicker.formatDate('mm-dd-yy', checkInDate);
	
	$("#pickupDate").val(checkInDate_from);
	$("#dropDate").val(dt_from);
	$("#pickupDateText").html(checkInDate.getDate()+" "+month_names[checkInDate.getMonth()]+" "+checkInDate.getFullYear()),
	$("#dropDateText").html(returnsDate.getDate()+" "+month_names[returnsDate.getMonth()]+" "+returnsDate.getFullYear()),
    
    $(".needdif").click(function(){
        $("#needdif").toggle(200);
    });
	
	$("#dropDate_div").click(function () {
	    $("#dropDate").datepicker('show');
	});
	
	$(".advance").click(function(){
        $("#advance").toggle(200);
    });
	try{
	var pd = $("#pickupDate").datepicker("getDate");
	var dd = $("#dropDate").datepicker("getDate");
	
    var pDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
    var dDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
    
    dDate.setMonth(pDate.getMonth()+1);
	}
	catch(e){
		}
	$("#dropDate").datepicker({
		
		numberOfMonths: numberOfMonthValue,
		//changeMonth: true,
       // changeYear: true,
		dateFormat: "mm-dd-yy",
        showButtonPanel: true,
        minDate:pDate,
        maxDate: dDate,
		onClose: function () {  
		var dropDateMin = $("#dropDate").datepicker("getDate");
		$("#dropDateText").html(dropDateMin.getDate()+" "+month_names[dropDateMin.getMonth()]+" "+dropDateMin.getFullYear());
		}
	});
	
	
});

var messhow = true;
function unaccompanied() {
    if (messhow) {
        messhow = false;
        $.notify('Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any questions, please <a href="/us/contact" target="_blank">call us</a>. Otherwise please include at least 1 adult then hit "Search".', 'warning');
    }
}
function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (!length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

var _mfq = _mfq || [];
(function () {
    var mf = document.createElement("script"); mf.type = "text/javascript"; mf.async = true;
    mf.src = "//cdn.mouseflow.com/projects/12d10d9b-2948-4779-af73-ac5bd3868d89.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
})();




function addAge(kk) {
    var childNo = kk.value;
    //  alert("room id:"+kk.id);
    //   alert("childNo:"+childNo);
    var str2 = kk.id.replace(/[^\d.]/g, '');
    var room = parseInt(str2);
    //  alert(room);
    $("#age" + room).css({ display: "block" });
    if (childNo == 0) {
        $("#age" + room).css({ display: "none" });
    }
    for (i = 0; i < 5; i++) {
        $("#" + room + i).css({ display: "none" });
    }
    for (i = 0; i < childNo; i++) {
        $("#" + room + i).css({ display: "block" });
    }

    var room = $("#rooms").val();


    var adult = $('#roomsadults option:selected').val();


    //    alert("adults:"+adult);
    var child = $("#rooms0child :selected").text();


    if ($('#rooms1adults').length && $('#rooms1adults').val().length) {

        var adult1 = $("#rooms1adults").val();
        var child1 = $("#rooms1child").val();
        adult = parseInt(adult) + parseInt(adult1);
        child = parseInt(child) + parseInt(child1);
    }
    // alert("adult no:"+adult);

    if ($('#rooms2adults').length && $('#rooms2adults').val().length) {
        var adult2 = $("#rooms2adults").val();
        var child2 = $("#rooms2child").val();
        adult = parseInt(adult) + parseInt(adult2);
        child = parseInt(child) + parseInt(child2);
    }

    if ($('#rooms3adults').length && $('#rooms3adults').val().length) {
        var adult3 = $("#rooms3adults").val();
        var child3 = $("#rooms3child").val();

        adult = parseInt(adult) + parseInt(adult3);
        child = parseInt(child) + parseInt(child3);

    }

    if ($('#rooms4adults').length && $('#rooms4adults').val().length) {

        var adult4 = $("#rooms4adults").val();
        var child4 = $("#rooms4child").val();
        adult = parseInt(adult) + parseInt(adult4);
        child = parseInt(child) + parseInt(child4);

    }



    var text = "";//room+"1 Room, 1 Adult, 0 Child";

    if (room == 1) {
        text = text + "1 Room,";
    } else {
        text = text + room + " Rooms,";
    }

    if (adult == 1) {
        text = text + "1 Adult,";
    } else {
        text = text + adult + " Adults,";
    }

    if (child == 0) {
        text = text + "0 Child";
    } else if (child == 1) {
        text = text + child + " Child";
    } else {
        text = text + child + " Children";
    }
    $("#guest").val(text);

}

function addAgeOnLoad(kk,pp){
	   
	   console.log("addage on load "+pp);
var childNo = kk;
//var room = pp;
var d=pp;
//$("#childAge"+pp).css({display: "block"});
if(childNo==0){
	
		//$("#childAge" + pp).find("#"+pp+i).css({display: "none"});
		 // $("#childAge"+pp).css({display: "none"}); 
	// $("#childAge" + d).find("#age"+d).attr("id", "age" + d), $("#childAge" + d).find("#00").attr("id", "" + d + "0"), $("#childAge" + d).find("#01").attr("id", "" + d + "1"), $("#childAge" + d).find("#02").attr("id", "" + d + "2"), $("#childAge" + d).find("#03").attr("id", "" + d + "3"), $("#childAge" + d).find("#04").attr("id", "" + d + "4"), $("#childAge" + d).css("display", "none");
	 $("#childAge" + d).find("#"+d+"0").css({display: "none"});
	 $("#childAge" + d).find("#"+d+"1").css({display: "none"});
	 $("#childAge" + d).find("#"+d+"2").css({display: "none"});
	 $("#childAge" + d).find("#"+d+"3").css({display: "none"});
	 $("#childAge" + d).find("#"+d+"4").css({display: "none"});
	 $("#childAge" + d).find("#age"+d).css({display: "none"});
	 //$("#childAge" + d).find("#"+d+"0").css({display: "none"});
} 

}


function addAdult(ad) {
    // var adultNo=ad.value;
    var room = $("#rooms").val();
    //  var adult=$("#adultNo").val();
    //  var child=$("#childNo").val();
    //   var totAdult=adult+adultNo;
    //   $("#adultNo").val(adult+adultNo);

    //  alert("room:"+room);


    var adult = $('#roomsadults option:selected').val();


    //    alert("adults:"+adult);
    var child = $("#rooms0child :selected").text();

    if ($('#rooms1adults').length && $('#rooms1adults').val().length) {

        var adult1 = $("#rooms1adults").val();
        var child1 = $("#rooms1child").val();
        adult = parseInt(adult) + parseInt(adult1);
        child = parseInt(child) + parseInt(child1);
    }
    // alert("adult no:"+adult);

    if ($('#rooms2adults').length && $('#rooms2adults').val().length) {
        var adult2 = $("#rooms2adults").val();
        var child2 = $("#rooms2child").val();
        adult = parseInt(adult) + parseInt(adult2);
        child = parseInt(child) + parseInt(child2);
    }

    if ($('#rooms3adults').length && $('#rooms3adults').val().length) {
        var adult3 = $("#rooms3adults").val();
        var child3 = $("#rooms3child").val();

        adult = parseInt(adult) + parseInt(adult3);
        child = parseInt(child) + parseInt(child3);

    }

    if ($('#rooms4adults').length && $('#rooms4adults').val().length) {

        var adult4 = $("#rooms4adults").val();
        var child4 = $("#rooms4child").val();
        adult = parseInt(adult) + parseInt(adult4);
        child = parseInt(child) + parseInt(child4);

    }



    var text = "";//room+"1 Room, 1 Adult, 0 Child";

    if (room == 1) {
        text = text + "1 Room,";
    } else {
        text = text + room + " Rooms,";
    }

    if (adult == 1) {
        text = text + "1 Adult,";
    } else {
        text = text + adult + " Adults,";
    }

    if (child == 0) {
        text = text + "0 Child";
    } else if (child == 1) {
        text = text + child + " Child";
    } else {
        text = text + child + " Children";
    }
    $("#guest").val(text);
}


$(document).ready(function () {
	
		
    $("#guest").click(function () {
        $(".guests").toggle();
    });
    $("#h_close-div").click(function () {
        $(".guests").hide();
    });

    var room_form_index = 1;
    var age_form_index = 0;
    $("#rooms").change(function () {
        var cust_indexs = this.value;
        //   alert("cust_indexs:"+cust_indexs);
        //   alert("room_form_index:"+room_form_index);
        // if(cust_indexs>room_form_index){
        //    alert("inside");
        var row_index = cust_indexs - room_form_index;
        //   alert("loop outside"+row_index);
        if (row_index > 0) {
            //  alert("loop"+row_index);
            for (i = 1; i <= row_index; i++) {
                // alert("start"+i);
                var cust_index = room_form_index + (i - 1);
                //  alert("cust_index"+cust_index);
                $('#childAge' + (Number(cust_index) - 1)).after($("#cust").clone().attr("id", "cust" + cust_index));
                //  $(this).parent().after($("#cust").clone().attr("id","cust" + cust_index));
                $("#cust" + cust_index).css("display", "inline");
                //$("#cust"+ cust_index).find("Room 1").attr("id","age"+(cust_index));
                //  alert("cust_index"+(Number(cust_index)-1));

                $("#cust" + cust_index).find("#roomNo0").attr("id", "roomNo" + (cust_index));
                var e = $("<div class='form-group form-group-lg form-group-select-plus'>Room " + (cust_index + 1) + ":</div>");
                $("#roomNo" + cust_index).html(e);

                $("#cust" + cust_index + " select").each(function () {
                    if (this.id.indexOf('adults') != -1) {
                        $(this).attr("name", "rooms[" + cust_index + "].adults");
                        $(this).attr("id", "rooms" + cust_index + "adults");
                    } else {
                        $(this).attr("name", "rooms[" + cust_index + "].child");
                        $(this).attr("id", "rooms" + cust_index + "child");
                    }
                });



                $('#cust' + cust_index).after($("#childAge0").clone().attr("id", "childAge" + cust_index));

                $("#childAge" + cust_index).find("#age0").attr("id", "age" + (cust_index));
                $("#childAge" + cust_index).find("#0" + "0").attr("id", "" + (cust_index) + "0");
                $("#childAge" + cust_index).find("#0" + "1").attr("id", "" + (cust_index) + "1");
                $("#childAge" + cust_index).find("#0" + "2").attr("id", "" + (cust_index) + "2");
                $("#childAge" + cust_index).find("#0" + "3").attr("id", "" + (cust_index) + "3");
                $("#childAge" + cust_index).find("#0" + "4").attr("id", "" + (cust_index) + "4");

                //  var e = $('<div>hello</div>');
                // $("#childAge" + cust_index).prepend(e);  
                // $(this).parent().after($("#childAge").clone().attr("id","childAge" + cust_index));

                $("#childAge" + cust_index).css("display", "block");
                var chAge = 0;
                $("#childAge" + cust_index + " select").each(function () {

                    $(this).attr("name", "rooms[" + cust_index + "].children[" + chAge + "].age");
                    $(this).attr("id", "rooms" + cust_index + "children[" + chAge + "].age");
                    chAge = chAge + 1;
                });
                addAgeOnLoad(0,(Number(room_form_index+i)-1));
            }
            room_form_index = row_index + room_form_index;
        } else {
            row_index = room_form_index - cust_indexs;
            //   alert("loop outside"+row_index);
            for (i = 1; i <= row_index; i++) {
                //  alert("loop inside"+row_index);



                room_form_index = room_form_index - 1;
                //   alert("room_form_index inside"+room_form_index);
                $("#cust" + room_form_index).remove();
                $("#childAge" + room_form_index).remove();


            }
        }


        var room = $("#rooms").val();

        var adult = $('#roomsadults option:selected').val();


        //    alert("adults:"+adult);
        var child = $("#rooms0child :selected").text();

        if ($('#rooms1adults').length && $('#rooms1adults').val().length) {

            var adult1 = $("#rooms1adults").val();
            var child1 = $("#rooms1child").val();
            adult = parseInt(adult) + parseInt(adult1);
            child = parseInt(child) + parseInt(child1);
        }
        // alert("adult no:"+adult);

        if ($('#rooms2adults').length && $('#rooms2adults').val().length) {
            var adult2 = $("#rooms2adults").val();
            var child2 = $("#rooms2child").val();
            adult = parseInt(adult) + parseInt(adult2);
            child = parseInt(child) + parseInt(child2);
        }

        if ($('#rooms3adults').length && $('#rooms3adults').val().length) {
            var adult3 = $("#rooms3adults").val();
            var child3 = $("#rooms3child").val();

            adult = parseInt(adult) + parseInt(adult3);
            child = parseInt(child) + parseInt(child3);

        }

        if ($('#rooms4adults').length && $('#rooms4adults').val().length) {

            var adult4 = $("#rooms4adults").val();
            var child4 = $("#rooms4child").val();
            adult = parseInt(adult) + parseInt(adult4);
            child = parseInt(child) + parseInt(child4);

        }

        var text = "";//room+"1 Room, 1 Adult, 0 Child";

        if (room == 1) {
            text = text + "1 Room,";
        } else {
            text = text + room + " Rooms,";
        }

        if (adult == 1) {
            text = text + "1 Adult,";
        } else {
            text = text + adult + " Adults,";
        }

        if (child == 0) {
            text = text + "0 Child";
        } else if (child == 1) {
            text = text + child + " Child";
        } else {
            text = text + child + " Children";
        }
        $("#guest").val(text);

    });


});


/*******************************************/


var myapp = angular.module('dynamicPageApp', []);


myapp.controller('dealCtrl', ['$http', '$window', '$scope', function ($http, $window, $scope) {

    /*var myDate = new Date();	
    
    var nextDay = new Date(myDate); 	nextDay.setDate(myDate.getDate());
    
    var nextSevenDay = new Date(myDate);  nextSevenDay.setDate(myDate.getDate()+7);	
    
    var departDate = nextDay.getFullYear() + '-' + ('0' + (nextDay.getMonth() + 1)).slice(-2) + '-' + ('0' + nextDay.getDate()).slice(-2);
    
    var returnDate = nextSevenDay.getFullYear() + '-' + ('0' + (nextSevenDay.getMonth() + 1)).slice(-2) + '-' + ('0' + nextSevenDay.getDate()).slice(-2);
    
    alert(returnDate);
    
    var nextHotelDay = new Date(myDate); 	nextDay.setDate(myDate.getDate()+2);
    
    var nextHotelSevenDay = new Date(myDate);  nextSevenDay.setDate(myDate.getDate()+7);	
    
    var checkInDate = nextDay.getFullYear() + '-' + ('0' + (nextDay.getMonth() + 1)).slice(-2) + '-' + ('0' + nextDay.getDate()).slice(-2);
    
    var checkOutDate = nextSevenDay.getFullYear() + '-' + ('0' + (nextSevenDay.getMonth() + 1)).slice(-2) + '-' + ('0' + nextSevenDay.getDate()).slice(-2);*/

    /*alert(checkInDate);		*/

    /*$scope.checkInDate=checkInDate;
    $scope.checkOutDate=checkOutDate;
    $scope.departDate=departDate;
    $scope.returnDate=returnDate;*/


    
    $scope.checkInDate;
    $scope.checkOutDate;
    $scope.froCity;
    $scope.toCity;
    $scope.departDate;;
    $scope.returnDate;

    $scope.rooms = "1";
    $scope.rooms0adult = "1";
    $scope.rooms0child = "0";
    $scope.adult = "1";
    $scope.child = "0";
    $scope.infant = "0";
    $scope.infantWs = "0";
    $scope.airlines = "All";
    $scope.cabinClass = "Economy";
    $scope.pickupTime="10:00";
	$scope.dropTime="10:00";
    $scope.leadingZero = function(value) {
					  if (value < 10) {
					    return "0" + value.toString();
					  }
					  return value.toString();
					}

    $scope.CarDealSearch = function(city, cityCode, carType, pickupdate, pickuptime, dropoffdate, dropofftime, vendorCode) {
   	 
   	 var currDate = new Date();
   	 currDate.setMonth(currDate.getMonth()+1);
     pickuptime = '10:00';
     dropofftime = '10:00';
   	 
   	 var addedPickDate = $scope.leadingZero(currDate.getMonth()+1)+'-'+$scope.leadingZero(currDate.getDate())+'-'+currDate.getFullYear();
				 currDate.setDate(currDate.getDate()+3);
				 var addedDropDate = $scope.leadingZero(currDate.getMonth()+1)+'-'+$scope.leadingZero(currDate.getDate())+'-'+currDate.getFullYear();
				 

   	 
   	 $('#pickupCity').val(city)
   	 $('#pickupDate').val(addedPickDate)
   	 $('#pickupTime').val(pickuptime)
   	 $('#dropDate').val(addedDropDate)
   	 $('#dropTime').val(dropofftime)
   	 $('#vehicleType').val(carType)
   	 $('#vendorCode').val(vendorCode)
   	 $('#pickUpLocationCode').val(cityCode)
   	 $('#dropOffLocationCode').val(cityCode)
   	 $('#driverAge').val("21")
   	 
   	 submitCarForm();
   }


}]);
//end first controller

myapp.controller('airlineCtrl', ['$http', '$window', '$scope', '$filter', function ($http, $window, $scope, $filter) {
	
	$scope.pickupTime="10:00";
	$scope.dropTime="10:00";

	
	$scope.getDeal=function(longitude,latitude) {
		  var post_data = { 
			    'longitude':longitude,
			    'latitude':latitude,
	   		}
		  
	$http.post('/getDeals',post_data).success(function(response){
	  // console.log(">>>>>"+JSON.parse(response));
	  
		   if(!response.includes("DOCTYPE")){
		if(JSON.parse(response) != 'none'){
			if($("#froCitys").val() == ""){
					$scope.froCity=JSON.parse(response);
				 }
			 if ($('#froCity').val() == "") {
		$scope.froCity=JSON.parse(response);
			 }
	//	$scope.returnToCity=response;
	//	$scope.PostDealss(response);
	    }
		
		   }else{
     	  $('#froCity').removeClass('input_cont x');
     }
	  })
		.error(function(error){
		
		})
		
};

    $scope.dealClick = function (cabin, trip, f1, f2, f3, f4, t1, t2, t3, t4, depart, ret) {
		key=false;
        var myDate = new Date();


        var minDate = new Date($scope.checkInDate);
        var returnsDate = new Date($scope.checkOutDate);


        document.getElementById('froCity').value = f1 + "(" + f2 + "), " + f3 + ", " + f4;
        document.getElementById('toCity').value = t1 + "(" + t2 + "), " + t3 + ", " + t4;
        if (new Date(depart) < new Date(myDate)) {

            var departDate = $filter('date')(new Date(myDate), 'MM-dd-yyyy');
        }
        else {
			depart = depart.replace(/-/g, '/');
            var departDate = $filter('date')(new Date(depart), 'MM-dd-yyyy');
        }

        document.getElementById('departDate').value = departDate;
        if (trip == 'RoundTrip') {
            document.getElementById('tripType').value = 2;
            document.getElementById('returnDate').value = $filter('date')(new Date(ret.replace(/-/g, '/')), 'MM-dd-yyyy');
        }
        if (trip == 'OneWay') {
            document.getElementById('tripType').value = 1;
        }

        document.getElementById('cabinClass').value = cabin;
        /*document.getElementById('select-air').value=airline;*/

        submitForm();


    };

    $scope.airlinedealClick = function (airline, cabin, trip, f1, f2, f3, f4, t1, t2, t3, t4, depart, ret) {
		key=false;
        var myDate = new Date();

        document.getElementById('froCity').value = f1 + "(" + f2 + "), " + f3 + ", " + f4;
        document.getElementById('toCity').value = t1 + "(" + t2 + "), " + t3 + ", " + t4;
        if (new Date(depart) < new Date(myDate)) {

            var departDate = $filter('date')(new Date(myDate), 'MM-dd-yyyy');
        }
        else {
			depart = depart.replace(/-/g, '/');
            var departDate = $filter('date')(new Date(depart), 'MM-dd-yyyy');
        }

        document.getElementById('departDate').value = departDate;
        if (trip == 'RoundTrip') {
            document.getElementById('tripType').value = 2;
            document.getElementById('returnDate').value = $filter('date')(new Date(ret.replace(/-/g, '/')), 'MM-dd-yyyy');
        }
        if (trip == 'OneWay') {
            document.getElementById('tripType').value = 1;
        }

        document.getElementById('cabinClass').value = cabin;
        document.getElementById('select-air').value = airline;

        submitForm();


    };

    $scope.submitSearch = function (from, to, depart, ret) {
    	key=false;
        /*alert("search");*/
        var myDate = new Date();

        document.getElementById('froCity').value = from;
        document.getElementById('toCity').value = to;

        if (new Date(depart) < new Date(myDate)) 
        {
            var departDate = $filter('date')(new Date(myDate), 'MM-dd-yyyy');
        }
        else 
        {
            var departDate = $filter('date')(new Date(depart), 'MM-dd-yyyy');
        }

        document.getElementById('departDate').value = departDate;       
        document.getElementById('returnDate').value = $filter('date')(new Date(ret), 'MM-dd-yyyy');

        submitForm();
   };
	
	
	$scope.engineDetails=function(cabin, trip, f1, f2, f3, f4, t1, t2, t3, t4, depart, ret)
	{

    	$scope.trpTypeDeal="2";
    	$scope.cabinClassDeal="";
    	$scope.froCityDeal="";
    	$scope.toCityDeal="";
    	$scope.checkInDateDeal="";
    	$scope.checkOutDateDeal="";
    	$scope.adultDeal="1";
        $scope.childDeal="0";
        $scope.infantDeal="0";
        $scope.infantWsDeal="0";
        $scope.fvalid=true;
        
        var elem = angular.element(document.querySelector(".location"));
        elem.html("From "+f1+" to "+t1);
    	
		//alert(cabin+" "+trip+" "+f1+" "+f2+" "+f3+" "+f4+" "+t1+" "+t2+" "+t3+" "+t4+" "+depart+" "+ret); .Replace("stackover","NO");
		$scope.trpTypeDeal=trip;
		$scope.cabinClassDeal=cabin;
		$scope.froCityDeal= f1 + "(" + f2 + "), " + f3 + ", " + f4;
		$scope.toCityDeal= t1 + "(" + t2 + "), " + t3 + ", " + t4;
		$scope.checkInDateDeal= $filter('date')(new Date(depart), 'MM-dd-yyyy');
		
		document.getElementById('errorsm').innerHTML='';
		
		if ($scope.trpTypeDeal == 'OneWay') {
			
			var userdob = new Date($scope.checkInDateDeal);
			userdob.setDate(userdob.getDate()+7);
			userdob=$filter('date')(userdob, "MM-dd-yyyy");
			document.getElementById('sereturnDate').value=userdob;
			
			
			$scope.checkOutDateDeal= userdob;
			
			document.getElementById('tripTypeDeal').value = "1";
			
			var round = angular.element( document.querySelector( '#roundClick' ) );
			var oneway = angular.element( document.querySelector( '#onewayClick' ) );
			round.removeClass('active');
			oneway.addClass('active');
			
			var c_out = angular.element( document.querySelector( '.checkOut' ) );		
			c_out.addClass('hide');
			var c_in = angular.element( document.querySelector( '.checkIn' ) );
			c_in.removeClass('col-xs-6');
			c_in.addClass('col-xs-12');
		}
		if($scope.trpTypeDeal == 'RoundTrip'){
			
			var dept = new Date($scope.checkInDateDeal);
			var retu = new Date($scope.checkOutDateDeal);
			
			if(dept > retu)
				{
				var userdob = new Date($scope.checkInDateDeal);
				userdob.setDate(userdob.getDate()+7);
				userdob=$filter('date')(userdob, "MM-dd-yyyy");
				$scope.checkOutDateDeal= userdob;
				}
			else
				{
				$scope.checkOutDateDeal= $filter('date')(new Date(ret), 'MM-dd-yyyy');
				}
						
			document.getElementById('tripTypeDeal').value = "2";
			
			
			}
		
	
		
	};
	
	
	$scope.engineDetailsAir=function(air,cabin, trip, f1, f2, f3, f4, t1, t2, t3, t4, depart, ret)
	{
				
    	$scope.trpTypeDeal="2";
    	$scope.cabinClassDeal="";
    	$scope.froCityDeal="";
    	$scope.toCityDeal="";
    	$scope.checkInDateDeal="";
    	$scope.checkOutDateDeal="";
    	$scope.adultDeal="1";
        $scope.childDeal="0";
        $scope.infantDeal="0";
        $scope.infantWsDeal="0";
        $scope.fvalid=true;
     //   $scope.airlines=air;
        
        var elem = angular.element(document.querySelector(".location"));
        elem.html("From "+f1+" to "+t1);
    	
		//alert(cabin+" "+trip+" "+f1+" "+f2+" "+f3+" "+f4+" "+t1+" "+t2+" "+t3+" "+t4+" "+depart+" "+ret); .Replace("stackover","NO");
		$scope.trpTypeDeal=trip;
		$scope.cabinClassDeal=cabin;
		$scope.froCityDeal= f1 + "(" + f2 + "), " + f3 + ", " + f4;
		$scope.toCityDeal= t1 + "(" + t2 + "), " + t3 + ", " + t4;
		$scope.checkInDateDeal= $filter('date')(new Date(depart), 'MM-dd-yyyy');
		//document.getElementById('select-air').value = airline;
		
		document.getElementById('errorsm').innerHTML='';
		
		
		
		if ($scope.trpTypeDeal == 'OneWay') {
			
			var userdob = new Date($scope.checkInDateDeal);
			userdob.setDate(userdob.getDate()+7);
			userdob=$filter('date')(userdob, "MM-dd-yyyy");
			document.getElementById('sereturnDate').value=userdob;
			
			
			$scope.checkOutDateDeal= userdob;
			
			document.getElementById('tripTypeDeal').value = "1";
			
			var round = angular.element( document.querySelector( '#roundClick' ) );
			var oneway = angular.element( document.querySelector( '#onewayClick' ) );
			round.removeClass('active');
			oneway.addClass('active');
			
			var c_out = angular.element( document.querySelector( '.checkOut' ) );		
			c_out.addClass('hide');
			var c_in = angular.element( document.querySelector( '.checkIn' ) );
			c_in.removeClass('col-xs-6');
			c_in.addClass('col-xs-12');
		}
		if($scope.trpTypeDeal == 'RoundTrip'){
			
			var dept = new Date($scope.checkInDateDeal);
			var retu = new Date($scope.checkOutDateDeal);
			
			if(dept > retu)
				{
				var userdob = new Date($scope.checkInDateDeal);
				userdob.setDate(userdob.getDate()+7);
				userdob=$filter('date')(userdob, "MM-dd-yyyy");
				$scope.checkOutDateDeal= userdob;
				}
			else
				{
				$scope.checkOutDateDeal= $filter('date')(new Date(ret), 'MM-dd-yyyy');
				}
						
			document.getElementById('tripTypeDeal').value = "2";
			
			
			}
		
	
		
	};
	
	$scope.rountTripDeal=function()
	{
		//alert("round"); checkIn
		$scope.trpTypeDeal="RoundTrip";
		
		document.getElementById('tripTypeDeal').value = "2";
		
		var dept = new Date($scope.checkInDateDeal);
		var retu = new Date($scope.checkOutDateDeal);
		
		
		if($scope.checkOutDateDeal == "Invalid Date"){
			var depDatee = $scope.checkInDateDeal.split("-");
			var userdob = new Date(depDatee[2]+"/"+depDatee[0]+"/"+depDatee[1]);
			userdob.setDate(userdob.getDate()+7);
			userdob=$filter('date')(userdob, "MM-dd-yyyy");
			$scope.checkOutDateDeal= userdob;
			
		}else if(dept > retu)
			{
			var userdob = new Date($scope.checkInDateDeal);
			userdob.setDate(userdob.getDate()+7);
			userdob=$filter('date')(userdob, "MM-dd-yyyy");
			$scope.checkOutDateDeal= userdob;
			}
		
		var round = angular.element( document.querySelector( '#roundClick' ) );
		var oneway = angular.element( document.querySelector( '#onewayClick' ) );
		round.addClass('active');
		oneway.removeClass('active');
		
		var c_out = angular.element( document.querySelector( '.checkOut' ) );
		c_out.removeClass('hide');
		var c_in = angular.element( document.querySelector( '.checkIn' ) );
		c_in.removeClass('col-xs-12');
		c_in.addClass('col-xs-6');
		
		
	};
	
	$scope.onewayDeal=function()
	{
		//alert("oneway");
		$scope.trpTypeDeal="OneWay";
		
		document.getElementById('tripTypeDeal').value = "1";
				
		var round = angular.element( document.querySelector( '#roundClick' ) );
		var oneway = angular.element( document.querySelector( '#onewayClick' ) );
		round.removeClass('active');
		oneway.addClass('active');
		
		var c_out = angular.element( document.querySelector( '.checkOut' ) );		
		c_out.addClass('hide');
		var c_in = angular.element( document.querySelector( '.checkIn' ) );
		c_in.removeClass('col-xs-6');
		c_in.addClass('col-xs-12');
		
	};
	
	/*$scope.totalPass=function()
	{
		var tot=parseInt($scope.adultDeal)+parseInt($scope.childDeal)+parseInt($scope.infantDeal)+parseInt($scope.infantWsDeal);
		
		if(parseInt($scope.adultDeal)<parseInt($scope.infantDeal))
			{
			document.getElementById('errorsm').innerHTML='<p>&raquo;Each Infant (in lap) should have at least one Adult traveling along.<p>';
			$scope.fvalid=false;
			}
		else if(tot>9)
			{
			document.getElementById('errorsm').innerHTML='<p>&raquo; Total number of Passenger should be less than or equal to 9 only.</p>';
			$scope.fvalid=false;
			}
		else
			{
			document.getElementById('errorsm').innerHTML='';
			$scope.fvalid=true;
			}
			
		
		//alert("Total Pass :- "+tot);
	};*/
	
    
    $scope.submitDealEngine=function()
    {
    	key=false;
       if($scope.fvalid == true)
    	   {
    	     
    	     
		    	 //alert("submitDealEngine");
		       		document.getElementById('froCity').value = $scope.froCityDeal;
		           document.getElementById('toCity').value = $scope.toCityDeal;             
		           
		           if ($scope.trpTypeDeal == 'RoundTrip') {
		               document.getElementById('tripType').value = 2;
		               document.getElementById('departDate').value=document.getElementById('sedepartDate').value;
		               document.getElementById('returnDate').value=document.getElementById('sereturnDate').value;
		           }
		           if ($scope.trpTypeDeal == 'OneWay') {
		               document.getElementById('tripType').value = 1;
		               document.getElementById('departDate').value=document.getElementById('sedepartDate').value;
		           }
		
		           document.getElementById('cabinClass').value = $scope.cabinClassDeal;
		            $("#select-air").val($scope.airlines).change();
		            
		            $scope.adultDeal=document.getElementById('sub1se').value;
		            $scope.childDeal=document.getElementById('sub2se').value;
		            $scope.infantDeal=document.getElementById('sub3se').value;
		            $scope.infantWsDeal=document.getElementById('sub4se').value;
		           
		            /*alert($scope.adultDeal);
		            alert($scope.childDeal);
		            alert($scope.infantDeal);
		            alert($scope.infantWsDeal);*/
		            
		            document.getElementById('sub1').value =document.getElementById('sub1se').value;
			           document.getElementById('sub2').value =document.getElementById('sub2se').value;
			           document.getElementById('sub3').value =document.getElementById('sub3se').value;
			           document.getElementById('sub4').value =document.getElementById('sub4se').value;
    	   
		           submitForm();
    	    	 
    	   }
    	   
        
    };
	
	$scope.signup = function(){
    	    			 
		if($scope.email == null){
			return null;
			}
			// Set form values & construct data to send
			console.log($scope.email);
			var post_data = {  //prepare payload for request
				'emailId':$scope.email //send g-captcah-reponse to our server
			}
		
		/* Make Ajax request to our server with g-captcha-string */
		$http.post('/newssignup/'+$scope.email).success(function(response){
			//console.log(response);
			//alert("Successfully signed up for Newsletter");
			if(response == "already Registered"){
				alert("You are already subscribed");
			}else{
				alert("Cheers. You're Subscribed.");
			}
			$scope.email="";
		})
		.error(function(error){
		
		})

	  };

}]);

myapp.controller('headerCtrl', ['$http', '$window', '$scope', '$filter', function ($http, $window, $scope, $filter) {



}]);


//
   // call hide on resize function js
$(window).resize(function(){
  if($(window).width() > 767){
	  $('.bottom-call-bar').css('bottom','-66px');
	  }
	else{
		 $('.bottom-call-bar').css('bottom','-66px');
		}
  
  });

// call hide on scroll js
$(window).scroll(function(){
	if($(window).width() < 767){
	$('.bottom-call-bar').css('bottom','0px');
	setTimeout(function(){$('.bottom-call-bar').css('bottom','0px')	;},3000)
	}
	else{
		 $('.bottom-call-bar').css('bottom','-66px');
		}
	 
});

// input focus on scroll js
$('#froCity').focus(function(){
 if($(window).width() < 767){
 $('html,body').animate({
  scrollTop: $('#froCity').offset().top - 120},
  'slow');
  $('.bottom-call-bar').css('bottom','-66px');
	setTimeout(function(){$('.bottom-call-bar').css('bottom','0px')	;},3000)
 }

});
//

   

$(document).ready(function(){
	$('#ow').click(function(){
		$('#depart-datediv').addClass('col-xs-12').removeClass('col-xs-6');
	});
	
	$('#rt').click(function(){
		$('#depart-datediv').removeClass('col-xs-12').addClass('col-xs-6');
	});
	
});

function hotelDetailDealSearch(hotelid,cffHotelId,locationID,checkin,checkout)
{
	//alert(hotelid+"/"+cffHotelId+"/"+locationID+"/"+checkin+"/"+checkout)	
    window.location.href = '/hotelDeepLinkSearch/' + hotelid +"/"+ cffHotelId +"/"+ locationID +"/"+checkin+"/"+checkout;
   
};

$(document).ready(function(){
minDate = new Date;
var x = 11;
maxDate = new Date, maxDate.setMonth(maxDate.getMonth() + x);
var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    weekday = new Array(7);
weekday[1] = "MON", weekday[2] = "TUE", weekday[3] = "WED", weekday[4] = "THU", weekday[5] = "FRI", weekday[6] = "SAT", weekday[0] = "SUN", day = minDate.getDate(), month = monthNames[minDate.getMonth()];
var days = weekday[minDate.getUTCDay()],
    divText = "<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>" + day + "</div><div style='text-transform:uppercase; text-align:center; font-size:17px;'>" + days + ", " + month + "</div>";
$("#departDateDiv").html(divText);
var ch = 2;
checkInDate = new Date, checkInDate.setDate(checkInDate.getDate() + ch), checkday = checkInDate.getDate(), month = monthNames[checkInDate.getMonth()], days = weekday[checkInDate.getUTCDay()];
var divcheckInText = "<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>" + checkday + "</div><div style='text-transform:uppercase; text-align:center; font-size:17px;'>" + days + ", " + month + "</div>";
$("#checkInDateDiv").html(divcheckInText);
var xs = 7;
returnsDate = new Date, returnsDate.setDate(returnsDate.getDate() + xs), day = returnsDate.getDate(), month = monthNames[returnsDate.getMonth()];
var days = weekday[returnsDate.getUTCDay()],
    divsText = "<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>" + day + "</div><div style='text-transform:uppercase; text-align:center; font-size:17px;'>" + days + ", " + month + "</div>";
$("#returnDateDiv").html(divsText), $("#checkOutDateDiv").html(divsText);
var dt_to = $.datepicker.formatDate("mm-dd-yy", new Date),
    dt_from = $.datepicker.formatDate("mm-dd-yy", returnsDate),
    checkInDate_from = $.datepicker.formatDate("mm-dd-yy", checkInDate);
$("#departDate").val(dt_to), $("#returnDate").val(dt_from), $("#checkInDate").val(checkInDate_from), $("#checkOutDate").val(dt_from),
$("#departDateText").html(minDate.getDate()+" "+month_names[minDate.getMonth()]+" "+minDate.getFullYear()),
$("#returnDateText,#checkOutDateText").html(returnsDate.getDate()+" "+month_names[returnsDate.getMonth()]+" "+returnsDate.getFullYear()),
$("#checkInDateText").html(checkInDate.getDate()+" "+month_names[checkInDate.getMonth()]+" "+checkInDate.getFullYear())
});