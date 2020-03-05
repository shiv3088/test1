
	$(function() {
		$('.numbersOnly').keyup(function () {
    	    if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
    	       this.value = this.value.replace(/[^0-9\.]/g, '');
    	    }
    	});
    	$('.textOnly').keyup(function () {
  		  if (this.value != this.value.replace(/[^a-zA-Z ]+/g, '')) {
  		       this.value = this.value.replace(/[^a-zA-Z ]+/g, '');
  		    }
    	});
    	$('.alphaNumaricOnly').keyup(function () {
    		  if (this.value != this.value.replace(/[^a-zA-Z0-9]+/g, '')) {
    		       this.value = this.value.replace(/[^a-zA-Z0-9]+/g, '');
    		    }
      	});
    	
	});
	//alert("svfmdl,nk");	
	
	
	var app = angular.module('contactApp', []);
	
	app.controller('contactCtrl',['$scope','$http',function($scope,$http)
	 {
		
		
	 }]);
	
	 app.controller('headerCtrl',['$http','$window','$scope','$filter', function($http,$window,$scope,$filter)
		{
																						
		}]);
	 $(document).ready(function($) {
	    	
	    	$.validator.addMethod("email", function(value, element) {  
			    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);  
			}, "Please provide a valid email address");
	    });
		
		function submitContactUs() {
	    var a = $("#contactForm").validate({
	    	
	        showErrors: function() {
	            if (this.settings.highlight)
	                for (var a = 0; this.errorList[a]; ++a) this.settings.highlight.call(this, this.errorList[a].element, this.settings.errorClass, this.settings.validClass);
	            if (this.settings.unhighlight)
	                for (var a = 0, b = this.validElements(); b[a]; ++a) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
	        },
	        rules: {
	        	
	            name:{
	            required : true
	            }
	            ,
	            phone:{
	            required : true,
	            minlength:6,
	            maxlength: 15
	            }
	            ,
	            emailId:{
	            required : true,
	            email: true
	            },
	            message:{
	            required : true
	            }            
	        },
	        errorElement: "span",
	        messages: {
	            
	            name:{
	                required : "please enter full name"
	            },
	            phone:{
	                required : "please enter phone no",
	                maxlength : "please enter valid phone no"
	            },
	            message:{
	                required : "please enter message"
	            },
	            
	            emailId:{
	                required : "please enter email Id",
	                email: "please enter correct emailId"
	            }
	        }
	    });    

	 
	    //alert("a.form() "+a.form())
	    if (a.form()) {
	    	
	    	
	    	document.getElementById("loadingbar").style.display = "block";
	        var oForm = document.forms["contactForm"];
			
			var name=oForm.elements["name"].value;
			var email=oForm.elements["emailId"].value;
			var phone=oForm.elements["phone"].value;		
			var message=oForm.elements["message"].value;			
						
			var EnqRequest = {  //prepare payload for request				
					'name':name,
					'emailId':email,
					'phone':phone,				
					'message':message,
				}
			
			
			//alert("pagefrom :- "+pagefrom);
			$.ajax({
		        type: 'POST',
		        url:'/contactus',
		        contentType: 'application/json; charset=utf-8',	       
		        data: JSON.stringify(EnqRequest),
		        dataType: 'json',
		        
		        success: function(result) {
		        	
		        	document.getElementById("loadingbar").style.display = "none";
		        	
		        	document.getElementById("submsg").innerHTML = "<b>Your Query is Submitted with us. Soon our Agent Contact You.</b>";
		        	document.getElementById("submsg").style.display = "block";

		            //alert("Your Query is Submitted with us. Soon our Agent Contact You.");
		            
		            oForm.elements["name"].value="";
					oForm.elements["emailId"].value="";
					oForm.elements["phone"].value="";
					oForm.elements["message"].value="";
					setTimeout(function(){document.getElementById("submsg").style.display = "none"},30000)
		        },

		        error: function(jqXHR, textStatus, errorThrown) {
		        	document.getElementById("loadingbar").style.display = "none";

		        	document.getElementById("submsg").innerHTML = "<b>Your Query is Submitted with us. Soon our Agent Contact You.</b>";
		        	document.getElementById("submsg").style.display = "block";
		        	
		            oForm.elements["name"].value="";
					oForm.elements["emailId"].value="";
					oForm.elements["phone"].value="";
					oForm.elements["message"].value="";
					
					setTimeout(function(){document.getElementById("submsg").style.display = "none"},30000)

		        }

		    }); 
	      
	        
	    }
	};

	function submitSupport() {
	    var a = $("#supportForm").validate({
	    	
	        showErrors: function() {
	            if (this.settings.highlight)
	                for (var a = 0; this.errorList[a]; ++a) this.settings.highlight.call(this, this.errorList[a].element, this.settings.errorClass, this.settings.validClass);
	            if (this.settings.unhighlight)
	                for (var a = 0, b = this.validElements(); b[a]; ++a) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
	        },
	        rules: {
	        	
	            name:{
	            required : true
	            }
	            ,
	            phone:{
	            required : true,
	            minlength:6,
	            maxlength: 15
	            }
	            ,
	            emailId:{
	            required : true,
	            email: true
	            }
	            ,
	            message:{
	            required : true
	            },
	            supportType:{
	            	required : true
	            },
	            subject:{
	            	required : true
	            },
	            
	        },
	        errorElement: "span",
	        messages: {
	            
	            name:{
	                required : "please enter full name"
	            },
	            phone:{
	                required : "please enter phone no",
	                maxlength : "please enter valid phone no"
	            },
	            message:{
	                required : "please enter message"
	            },
	            
	            emailId:{
	                required : "please enter email Id",
	                email: "please enter correct emailId"
	            },
	            supportType:{
	            	required : "Please select support type"
	            },
	            subject:{
	            	required : "Please select subject"
	            }
	        }
	    });
	    

	    //alert("a.form() "+a.form())
	    if (a.form()) {
	       
	       var oForm = document.forms["supportForm"];
			
	       var name=oForm.elements["name"].value;
	       var email=oForm.elements["emailId"].value;	
	       var supportType=oForm.elements["supportType"].value;
	       var subject=oForm.elements["subject"].value;
	       var booking=oForm.elements["booking"].value;
	       var phone=oForm.elements["phone"].value;
	       var message=oForm.elements["message"].value;
			
			alert()
					
			
			var EnqRequest = {  //prepare payload for request				
				'name':name,
				'emailId':email,
				'message':message,
				'subject':subject,
				'supportType':supportType,
				'booking':booking,
				'phone':phone
				}
			
			
			//alert("pagefrom :- "+pagefrom);
			$.ajax({
		        type: 'POST',
		        url:'/support',
		        contentType: 'application/json; charset=utf-8',	       
		        data: JSON.stringify(EnqRequest),
		        dataType: 'json',
		        
		        success: function(result) {

		            alert("Your Query is Submitted with us. Soon our Agent Contact You.");
		            
		            oForm.elements["name"].value="";
					oForm.elements["emailId"].value="";	
					oForm.elements["subject"].value="";
					oForm.elements["booking"].value="";
					oForm.elements["phone"].value="";
					oForm.elements["message"].value="";					
		        },

		        error: function(jqXHR, textStatus, errorThrown) {

		            alert("Your Query is Submitted with us. Soon our Agent Contact You.");
		            
		            oForm.elements["name"].value="";
					oForm.elements["emailId"].value="";	
					oForm.elements["subject"].value="";
					oForm.elements["booking"].value="";
					oForm.elements["phone"].value="";
					oForm.elements["message"].value="";
		        }

		    }); 
	      
	        
	    }
	};
	
