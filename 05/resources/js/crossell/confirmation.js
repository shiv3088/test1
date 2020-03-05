$(document).ready(function(){

$("#email").click(function(){ 
	$("#sendEmail").slideDown();
})

});

function sendMail(){

	var emailId = $("#emailName").val();
	if(emailId=='')
	{
	$("#sendEmailError").text("please enter email address");
	$("#sendEmailError").show();
	return false;
	}

	var atpos = emailId.indexOf("@");
	    var dotpos = emailId.lastIndexOf(".");
	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailId.length) {
	        $("#sendEmailError").text("please enter valid address");
	        $("#sendEmailError").show();
	        return false;
	    }
	  var emailUrl=  '/sendCrossellEmail/'+emailId;
	 if($('#currentDevice').val()=="Normal"){
			  emailUrl=  '/sendCrossellEmail/'+emailId;
	     }else if($('#currentDevice').val()=="Mobile"){
	    	  emailUrl=  '/m/sendCrossellEmail/'+emailId;
	     }else if($('#currentDevice').val()=="Tablet"){
	    	   emailUrl=  '/t/sendCrossellEmail/'+emailId;
	     }else{
	    	  emailUrl=  '/sendCrossellEmail/'+emailId;
	     }

	//alert(emailId);
	$.ajax({
	                url: emailUrl, // url where to submit the request
	                type : "POST", // type of action POST || GET
	                success : function(result) {
	                   // alert(result);
	                    $("#sendEmailError").text(result);
	                    $("#sendEmailError").show().delay(5000).fadeOut();
	                    $("#sendEmail").slideUp(5000);
	                  },
	                error: function(xhr, resp, text) {

	                }
	            })
	            }