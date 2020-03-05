
function callAPI(tfn,caction) {
	
	console.log("CallAPI"+tfn+" Action "+caction)
	var browser="";
	var clientip="";
	var device="";
	
	if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
		browser='Opera';
    }    else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
    	browser='Chrome';
    }    else if(navigator.userAgent.indexOf("Safari") != -1)    {
    	browser='Safari';
    }    else if(navigator.userAgent.indexOf("Firefox") != -1 )     {
    	browser='Firefox';
    }    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) /*IF IE > 10*/    {
    	browser='IE'; 
    }      else     {
    	browser='unknown';
    }
	//console.log("browser : "+browser)
	
	//console.log("clientip : "+document.getElementById("ipadd").value)
	//console.log("device : "+document.getElementById("currentDevice").value)
	/*clientip=document.getElementById("ipadd").value;*/
	device=document.getElementById("currentDevice").value;
	
	var d = new Date();
	var today = d.toISOString();
	var path=window.location.pathname.split("/");
	var pathlen=path.length;
	

	

	
	var data = {
		'ActivityTypeID':1,
		'TFNumber':tfn,
		'Device':device,
		'Browser':browser,
		'ClientIP':clientip,
		'CallOfAction':caction,
		'UserSession':path[pathlen-1],
		'PopUpVisibleOn':today.toString(),
	};
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "/getActiveTracker",
		data : JSON.stringify(data),
		dataType : 'json',
		timeout : 100000,
		success : function(data) {
			console.log("SUCCESS: ", data);			
		},
		error : function(e) {
			console.log("ERROR: ", e);			
		},
		done : function(e) {
			console.log("DONE");
		}
	});		
	
  };