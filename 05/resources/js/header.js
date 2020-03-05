function logindialogOpen(){
		  //alert("1234");
		  var logindilog = document.getElementById('login'); 
			var vis = logindilog.style;
		  	  if(vis.display=='' || vis.display=='none') {
				  vis.display = 'block';
				  }
		 };
		 function loading()
        {
        	document.getElementById('loadingdiv').style.display='block';
        	$(".preloader").fadeOut(5000);
        };
        
		 function logindialogClose(){
			  $('#login').modal('hide');
		  };
		 function HidePop(id)
			{
				var responseDiv = document.getElementById(id);
				var vis = responseDiv.style; 
				vis.display = 'none';
			};
		function referalBox()
			{
			 var responseDiv=document.getElementById('referall');
			   if(responseDiv.style.display=='none')
			   {
			     responseDiv.style.display='block';
			   }else
			   {
			   	responseDiv.style.display='none';
			   }		
			};
		 function shareOnFacebook() {
			window.location.replace("/social/facebook/signin");
			
		  };
		 function shareOnTwitter() {
			window.location.replace("/social/twitter/signin");
		 }; 
		function killsession() {
            Session.Clear();
            Session.Abandon();
        };
	  
        
	  function forget(){
	 
		 var forgetdiv = document.getElementById('myforgetModal');
		 $('#login').modal('hide');
		 forgetdiv.style.display='block';
	  };
	  
 	  function checkIn()
	  {
	 	  
	  document.getElementById('errorMessage').innerHTML="";
	  
	  var emailExp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
   
	  
	   	var email= signupForm.elements["email"].value.trim();
       	var password = signupForm.elements["password"].value.trim();
       
	      if(email == "")
	       {
	        document.getElementById('errorMessage').innerHTML="Please enter Login Id";
		    return false;
	       }
	       else if(!emailExp.test(email)) {
	    	  
		        document.getElementById('errorMessage').innerHTML="Please enter valid email";
		        return false;
		    } 
	        else if(password == "")
	       {
	        document.getElementById('errorMessage').innerHTML="Please enter Password";
		    return false;
	       }	       
	       else
	       {
	           signin();
	       	return true;
	         
		   }  
	  } 
	  
     function signin(){
     
      
       var email= signupForm.elements["email"].value.trim();
       var password = signupForm.elements["password"].value.trim();
               

        
       var name="";
        	var post_data = {  //prepare payload for request
					email : email,
					password : password
				} 
				 $.ajax({
				        type: "POST",
				        url: "/userLogin",
				        crossDomain: true,
				        data: post_data,
				        success: function (response) {
				        
				        loading();
				        		var str = response;
									var myarray = str.split(',');
									 for(var i = 0; i < myarray.length; i++)
									{
									  // alert(myarray[i]);
									} 
									var access=myarray[0];
									var name=myarray[1];
				             	if(access=="success")
				             	{
				             	   
				             		var user = document.getElementById('luser');
				             		user.innerHTML = name;
			  						var logindiv = document.getElementById('logindiv');
			  						var logoutdiv = document.getElementById('logoutdiv');
			  						var login = document.getElementById('login');
									var placeholder2 = document.getElementById('errorMessage'); //working
							           placeholder2.innerHTML = "Successfully verified and signed up the user"; 
							         var vis = logoutdiv.style;
									  if(vis.display=='' || vis.display=='none') {
										  vis.display = 'block';
										  logindiv.style.display='none';
										  $('#login').modal('hide');
							         	  login.style.display='none';
									  }
								}
								else
								{
									var placeholder2 = document.getElementById('errorMessage'); //working
									placeholder2.innerHTML = "Please enter valid userid and password";
						          	
							  	}
				        },
				        dataType: "json",
				        error: function (response) {
				        	//alert("error response from server");
				             var placeholder2 = document.getElementById('errorMessage'); //working
						           placeholder2.innerHTML = "Please enter valid userid and password";
						        var logindiv = document.getElementById('logindiv');
		  						var logoutdiv = document.getElementById('logoutdiv');
		  						var login = document.getElementById('login');
						          	login.style.display='block';
		  							logindiv.style.display='block';
		  							logoutdiv.style.display='none';					  
				        }
    				});
          $('#login-nav').trigger("reset");
        };       
        	
		function register()
		{
			loading();
			
		      			
       	    	 var newuser = {  //prepare payload for request
					firstname:myForm.elements["firstname"].value,
					middlename:myForm.elements["middlename"].value,
					lastname:myForm.elements["lastname"].value,
					email : myForm.elements["email"].value,
					password : myForm.elements["password"].value,
					repassword : myForm.elements["repassword"].value,
					promoCode : myForm.elements["promoCode"].value
				} 		
				 $.ajax({
				        type: "POST",
				        url: "/user_register",
				       	contentType : "application/json",
				        data : JSON.stringify(newuser),	
				        dataType : 'json',		         	             	
				        success: function (response) {
				        		var str = response;
								var myarray = str.split(',');
									var access=myarray[0];
									var message=myarray[1];
				             	if(access=="success")
				             	{
				             		var placeholder2 = document.getElementById('signUpMessage'); 
				             		var responseDiv = document.getElementById('responseDiv');
				             		var vis = responseDiv.style;
				             		if(vis.display=='' || vis.display=='none') {
										  vis.display = 'block';										  
										  $('#login').modal('hide');							         	  
									  } 
							          placeholder2.innerHTML = message;
								}
								else
								{
				             		var placeholder2 = document.getElementById('signUpMessage'); 
				             		var responseDiv = document.getElementById('responseDiv');
				             		var vis = responseDiv.style;
				             		if(vis.display=='' || vis.display=='none') {
										  vis.display = 'block';										  
										  $('#login').modal('hide');							         	  
									  } 
							          placeholder2.innerHTML = message;
							  	}
							 	
				        },
				        error: function (response) {				        
				             		document.getElementById("myForm").reset();
				             		var placeholder2 = document.getElementById('signUpMessage'); 
				             		var responseDiv = document.getElementById('responseDiv');
				             		var vis = responseDiv.style;
				             		if(vis.display=='' || vis.display=='none') {
										  vis.display = 'block';										  
										  $('#login').modal('hide');							         	  
									  } 
							          placeholder2.innerHTML = message; 
				        }
    				});
    			 $('#myForm').trigger("reset");
		
		}
		
		
		
		function checkEmail()
		  {
		  
		  
		  var emailExp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
		  
		   if((document.forgetForm.email.value).trim() == "") {
		    
		        document.getElementById('error').innerHTML="Please enter email";
		        return false;
		    } 
		    else if(!emailExp.test(document.forgetForm.email.value)) {
		      
		        document.getElementById('error').innerHTML="Please enter valid email";
		        return false;
		    } 
		    else
		    {
		      return true;
		    }
		   
		  }
		
		function convert(str)
			{
			  str = str.replace(/&amp;/g,"&");
			  str = str.replace(/&gt;/g,">");
			  str = str.replace(/&lt;/g,"<");
			  str = str.replace(/&quot;/g,'"');
			  str = str.replace(/&#039;/g,"'");
			  str = str.replace(/&#035;/g,"#");
			  
			//  alert(str);
			  return str;
			};
			
			
			function signupNewUser()
			{
				//alert("signupNewUser");
				
				var letters = /^[A-Za-z]+$/; 
	           	var minNumberofChars = 8;
				var maxNumberofChars = 16;
				var regularExpression  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
				var emailExp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
				
				var firstname=document.myForm.firstname.value;
				var middlename=document.myForm.middlename.value;
				var lastname=document.myForm.lastname.value;
				var email=document.myForm.email.value;
				var password=document.myForm.password.value;
				var repassword=document.myForm.repassword.value;
				var message=document.getElementById("errormessage");
				
				
				
				if((firstname.trim() == "") || !(firstname.match(letters)) ) 
				{	
					
					message.innerHTML='Please check first name';
					document.myForm.signup.disabled = true;
			    }
				else if((middlename.trim() != "") && !(middlename.match(letters)))
				{					
					
					message.innerHTML='Please check middle name';
					document.myForm.signup.disabled = true;
				}
				else if((lastname.trim() == "") || !(lastname.match(letters))) 
				{	
					
					message.innerHTML='Please check last name';
					document.myForm.signup.disabled = true;
			    }
				else if((email.trim() == "") || !(email.match(emailExp))) 
				{	
					
					message.innerHTML='Please check email address';
					document.myForm.signup.disabled = true;
			    }
				else if((password.trim() == "") || !(password.match(regularExpression))) 
				{	
					
					message.innerHTML='Please check password';
					document.myForm.signup.disabled = true;
			    }
				else if((repassword.trim() == "") || !(repassword.match(regularExpression))) 
				{	
					
					message.innerHTML='Please check Retype password';
					document.myForm.signup.disabled = true;
			    }
				else if(!(password.match(repassword))) 
				{	
					
					message.innerHTML='Password and retype password are not same';
					document.myForm.signup.disabled = true;
			    }
				else
				{
				    
				    message.innerHTML='';
				    document.myForm.signup.disabled = false;
				    
				}	
				
				/*alert("-"+firstname+"-"+middlename+"-"+lastname+"-"+email+"-"+password+"-"+repassword+"-"+error);*/
				
				
			};
			
					
			
			/*function validate()
			{
			   			   
			   var letters = /^[A-Za-z]+$/; 
	            var newPassword = document.myForm.password.value;
				var minNumberofChars = 8;
				var maxNumberofChars = 16;
				var regularExpression  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
				var emailExp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
				    
			  if((document.myForm.firstname.value).trim() == "" ) {				  
				  			  
			        document.getElementById('error').innerHTML="Please enter First Name";
			       
			    }
			    else if(!document.myForm.firstname.value.match(letters)) {	
			        document.getElementById('error').innerHTML="Please input alphabet only";
			        return false;
			    }
			    else if(!document.myForm.middlename.value.trim() == "")
			    {
			    	
			       if(!document.myForm.middlename.value.match(letters))
			       {
			    	  
			        document.getElementById('error').innerHTML="Please input alphabet only";
			        return false;
			        }
			    }		     
			    else if((document.myForm.lastname.value).trim() == "") {
			    	
			        document.getElementById('error').innerHTML="Please enter Last Name";
			        return false;
			    } 
			    else if(!document.myForm.lastname.value.match(letters)) {
			    	
			        document.getElementById('error').innerHTML="Please input alphabet only";
			        return false;
			    }
			    else if((document.myForm.email.value).trim() == "") {
			    	
			        document.getElementById('error').innerHTML="Please enter email";
			        return false;
			    } 
			    else if(!emailExp.test(document.myForm.email.value)) {
			    	
			        document.getElementById('error').innerHTML="Please enter valid email";
			        return false;
			    }
			    else if((document.myForm.password.value).trim() == "") {
			    	
			        document.getElementById('error').innerHTML="Please enter password";
			        return false;
			    }
			    else if((document.myForm.repassword.value).trim() == "") {
			    	
			        document.getElementById('error').innerHTML="Please enter repassword";
			        return false;
			    }		     
				else if(document.myForm.repassword.value.length < minNumberofChars || document.myForm.repassword.value.length > maxNumberofChars){
					
						document.getElementById('error').innerHTML="Your password must be at least 8 characters";
				        return false;
				    }
				else if(!regularExpression.test(document.myForm.repassword.value)) {
					
				        document.getElementById('error').innerHTML="password should contain atleast one number and one special character";
				        return false;
				    }
			    else
				    {
				    alert("Else");
				    document.myForm.signup.disabled = false;				   
				    return true;
				    }
			}; */