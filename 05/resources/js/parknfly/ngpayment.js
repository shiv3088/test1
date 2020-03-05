(function(){
	
	angular.module('angularPurchase', ['cgBusy','LocalStorageModule']).controller('purchaseCtrl',['$http','$scope','$timeout','$window','localStorageService',function($http,$scope,$timeout,$window,localStorageService){ 
		var vm = this;
		//alert("2");
		$scope.IsHidden = true;
		$scope.isDisabled= false;
		$scope.isRemDisabled= true;
		 $scope.subscribeButton="Apply";
		 $scope.subscribed = false; 
		$scope.IsShow = false;
		$scope.delay = 0;
		$scope.minDuration = 0;
		$scope.message = 'Please Wait... While we update your Travel Guard Plan.';
		$scope.backdrop = true;
		$scope.promise = null;
		$scope.selectedCard="Select a Card";
		 $scope.openWindow = function() {
			
			    $scope.pp="/form/pdf/";
			    //console.log("Code:"+$scope.tgPcode);
			    //console.log("Code:"+$scope.selectedCountry.ID);
			    //console.log("State:"+ $scope.selectedItem.ID);
			    if($scope.selectedCountry.ID == 0){
			    	$scope.tgUrl="https://webservices.travelguard.com/Product/FileRetrieval.aspx?CountryCode=US&StateCode=NW&ProductCode="+$scope.tgPcode+"&PlanCode=P1&FileType=PROD_PLAN_DOC";
				    //$window.open($scope.pp+$scope.tgPcode,'Travel gaurd travel Insurance plan','width=700,height=500')
				    $window.open($scope.tgUrl,'Travel gaurd travel Insurance plan','width=700,height=500','_blank')
			    }else{
			    $scope.tgUrl="https://webservices.travelguard.com/Product/FileRetrieval.aspx?CountryCode="+$scope.selectedCountry.ID+"&StateCode="+$scope.selectedItem.ID+"&ProductCode="+$scope.tgPcode+"&PlanCode=P1&FileType=PROD_PLAN_DOC";
			    //$window.open($scope.pp+$scope.tgPcode,'Travel gaurd travel Insurance plan','width=700,height=500')
			    $window.open($scope.tgUrl,'Travel gaurd travel Insurance plan','width=700,height=500','_blank')
			    }
		      
		    };
		    
		    if(localStorageService.get("paymentPage") != null){
	               // $scope.searchQueryList.push(localStorageService.get("searchQuery"));
	                 $scope.searchQueryList=localStorageService.get("paymentPage");
	                 //console.log($scope.searchQueryList);
	                }
	             
		    if(localStorageService.get("couponsPopup") != null){
                $scope.couponsPopup=localStorageService.get("couponsPopup");
               // console.log("couponsPopup:"+$scope.couponsPopup);
                  $scope.collapsed =true;
				  $scope.subscribed = !$scope.subscribed;
				  document.getElementById('couponsCode').value = $scope.couponsPopup.split(',')[0]; //working
				  $scope.selectedCoupons=$scope.couponsPopup.split(',')[0];
				  
				  document.getElementById("popApply").style.display='block'; 
		         //  console.log("couponsPopup 2:"+$scope.couponsPopup.split(',')[0]);
             }
		    
		    
			  $scope.checkCoupons	 = function() {
				  document.getElementById("popApply").style.display='none'; 
				  if($scope.subscribeButton == 'Apply'){				  
					  if($scope.selectedCoupons === undefined){
							  var placeholder2 = document.getElementById('couponMessage'); //working
					           placeholder2.innerHTML = "Please fill coupon code First";  
							 // alert("Please fill coupon code First");
						  }else if($scope.selectedCoupons === ""){
							  var placeholder2 = document.getElementById('couponMessage'); //working
					           placeholder2.innerHTML = "Please fill coupon code First"; 
							 // alert("Please fill coupon code First");
						  }else{
					var checkCoupon='/checkCoupon/'+$scope.selectedCoupons;
				  if($('#currentDevice').val()=="Normal"){
					  checkCoupon='/checkCoupon/'+$scope.selectedCoupons;
				    }else if($('#currentDevice').val()=="Mobile"){
				    	 checkCoupon='/m/checkCoupon/'+$scope.selectedCoupons; 
				    }else if($('#currentDevice').val()=="Tablet"){
				    	 checkCoupon='/t/checkCoupon/'+$scope.selectedCoupons;
				    }else{
				    	 checkCoupon='/checkCoupon/'+$scope.selectedCoupons;
				    }
					  
				 $http.post(checkCoupon).success(function(response){
						//console.log(response);
									
						 angular.forEach(response, function(Flighth) {
							 console.log(Flighth.responseStatus.Status);
							 if(Flighth.responseStatus.Status == 0){
								 $scope.subscribeButton = $scope.subscribed ? 'Apply' : 'Remove';
								 $scope.subscribed = !$scope.subscribed;
							   $scope.couponAmt=Flighth.CouponAmount;
							   
							   var couponId = document.getElementById('couponId'); //working
							   couponId.value = "Yes"; 
					           var placeholder = document.getElementById('couponAmtPlan'); //working

					           placeholder.innerHTML = "-<i class='fa fa-"+cls+"'></i>"+(Flighth.CouponAmount * convRatio).toFixed(2); 
					           
					           var placeholder2 = document.getElementById('couponMessage'); //working
					           placeholder2.innerHTML = "Coupon Code is Applied"; 
					           
					           var placeholder = document.getElementById('couponApply'); //working
					           placeholder.innerHTML = "X"; 
					           
					           var placeholder2 = document.getElementById('couponHave'); //working
					           placeholder2.innerHTML = ""; 
					           
					           var placeholder2 = document.getElementById('couponHave1'); //working
					           placeholder2.innerHTML = "Coupon Discount"; 
					           
					           var placeholder2 = document.getElementById('couponMessage'); //working
							   placeholder2.innerHTML = ""; 

					          
					           macpSet('CO',$scope.couponAmt,'Y');
					           $scope.isDisabled= true;
							  }else{
								  var placeholder2 = document.getElementById('couponMessage'); //working
								   placeholder2.innerHTML = Flighth.responseStatus.ErrorDescription; 

								   var couponId = document.getElementById('couponId'); //working
								   couponId.value = "N"; 
							  }
							    
							  
					      
					         });
						
						
					})
					.error(function(error){
						  $scope.isDisabled= true;
						  var couponId = document.getElementById('couponId'); //working
						   couponId.value = "N"; 
						  
					})
				  }
				  }else{
					  //console.log("subscribeButton: X");
					  $scope.subscribeButton = $scope.subscribed ? 'Apply' : 'Remove';
					  $scope.collapsed =false;
					  $scope.subscribed = !$scope.subscribed;
					  var placeholder = document.getElementById('couponAmtPlan'); //working
			           placeholder.innerHTML = "0.00"; 
			           
			           var placeholder2 = document.getElementById('couponMessage'); //working
			           placeholder2.innerHTML = ""; 
			           
			           var placeholder = document.getElementById('couponApply'); //working
			           placeholder.innerHTML = "Apply"; 
			           
			           var placeholder2 = document.getElementById('couponHave'); //working
			           placeholder2.innerHTML = "Have Coupon Code"; 
			           
			           var placeholder2 = document.getElementById('couponHave1'); //working
			           placeholder2.innerHTML = ""; 
			           
			           var couponsCode = document.getElementById('couponsCode'); //working
			           couponsCode.value = "";
			           
			           var couponId = document.getElementById('couponId'); //working
					   couponId.value = "N"; 
					   
			           //console.log("$scope.couponAmt:"+$scope.couponAmt);
			           macpSet('CO',$scope.couponAmt,'N');
			           $scope.couponAmt=0.0;
			           $scope.selectedCoupons=undefined;
			           $scope.isDisabled= false;	
				  }
			  }
			 
		
			  
			  $scope.focus	 =  function(id) {
			      // timeout makes sure that is invoked after any other event has been triggered.
			      // e.g. click events that need to run before the focus or
			      // inputs elements that are in a disabled state but are enabled when those events
			      // are triggered.
			      $timeout(function() {
			        var element = $window.document.getElementById(id);
			        if(element)
			          element.focus();
			      });
			    };
			    
			/*    $scope.setccValue	 =  function(id) {
				    
				    //  $timeout(function() {
				    	  $scope.selectedCard=id;
				    	  if($("#Payments_CardNumber").val().length > 0){
				        		$("#booking").validate().element("#Payments_CardNumber");
				        		 }
				        		 
				        		 if($("#Payments_CvvNo").val().length > 0){
				             		$("#booking").validate().element("#Payments_CvvNo");
				             		 }
				 //     });
				    };*/
			
			  
			  $scope.$watch('selectedItem', function (newVal) {
                  if (newVal) {
                   //   console.log("Selected option " + newVal.ID);
                    //  alert(newVal.ID);
                    //  console.log("Selected Dob " + $scope.DobDate);
                    //  alert($scope.selectedCountry.ID);DobMonth,DobYear
                	  $scope.test=1;
                	
                	
                      if($scope.tgIns != 0.0){
                      if($scope.selectedCountry.ID == "US"){
                    	  for (var i = 0; i < $scope.DobDate.length; ++i) {
                    		  //console.log("Selected day in " + $scope.DobDate[i]);
                    		  if($scope.DobDate[i] === "Day"){
                    			  $scope.test=0;
                    			 
                    		  }
                    	  }
                    	  for (var i = 0; i < $scope.DobMonth.length; ++i) {
                    		//  console.log("Selected Month in " + $scope.DobMonth[i]);
                    		  if($scope.DobMonth[i] === "0"){
                    			  $scope.test=0;
                    		  }
                    	  }
                    	  
                    	  for (var i = 0; i < $scope.DobYear.length; ++i) {
                    		//  console.log("Selected Year in " + $scope.DobYear[i]);
                    		  if($scope.DobYear[i] === "Year"){
                    			  $scope.test=0;
                    		  }
                    	  }
                    	  //console.log("$scope.test :"+$scope.test);
                    	  if($scope.test != 0){
                    	  if($scope.selectedItem.ID != "0"){
                    	//  alert("Inside TG");
                    		 // $scope.loading = true;
                    		$scope.promise= $http.post('/tgQuote/'+newVal.ID+"/"+$scope.selectedCountry.ID+"/"+$scope.DobDate+"/"+$scope.DobMonth+"/"+$scope.DobYear).success(function(response){
    						//console.log(response);
    						//alert(response);
    						//console.log(response.tgAmount);
    						 angular.forEach(response, function(Flighth) {
    							 if(Flighth.tgAv == "Yes"){
    					           $scope.tgIns=Flighth.tgAmount;
    					           $scope.tgPcode=Flighth.pdfFile;
    					           //console.log(Flighth.tgAmount);
    					           var placeholder = document.getElementById('tgPlan'); //working
    					          // console.log(placeholder);
    					           placeholder.innerHTML = Flighth.tgAmount; 
								   
    					           $scope.showHideTest = "";
    					         //  $scope.loading = false;
    					         //  alert("We Change your Travel Insurance amount. Please check before book the Flights.");
    					           if($scope.tgIns == "0.0"){
    					        	     // document.getElementById("tgBox").style.display='none'; 
    			                    	//  document.getElementById("tgBoxhide").style.display='block';
    					           }
    							  }
    					         });
								  $timeout(function () { 
								  var tgSelect=document.getElementById('tgSelect').value;
								   if(tgSelect == "Yes"){
								   macpSet('TG','N','Y');
								   }
								  }, 2000);
                    		      
    						
    					})
    					.error(function(error){
    					
    					})
    				
                      }else{
                    	  $scope.tgIns="0.0";
                    	//  document.getElementById("tgBox").style.display='none'; 
                    	 // document.getElementById("tgBoxhide").style.display='block'; 
                    	  
                      }
                      }else{
                    	  
                    	  $scope.focus('passengerList0.LastName');
            			  $scope.selectedItem=$scope.usState[0];
                      }
                      }
                  }
                  }
              });
			  $scope.DobDate=[];
			  $scope.DobMonth=[];
			  $scope.DobYear=[];
           
			  $scope.$watch('selectedCountry', function (newVal) {
				  
                  if (newVal) {
                	  if(newVal.ID != "US"){
                          if(newVal.ID == "CA"){
     						  document.getElementById("Payments_State").style.display='inline'; 
     					 }else{
							 
                         	  //document.getElementById("Payments_State").style.display='none'; 
                     	 
                     	//  document.getElementById("tgBoxhide").style.display='block'; 
     					 }
     					 // document.getElementById("tgBox").style.display='none'; 
                           }else{
                         	  document.getElementById("Payments_State").style.display='inline'; 
                         	//  $scope.tgIns=document.getElementById('tgInsValue').value;
                         	  //document.getElementById("tgBox").style.display='none'; 
                         //	  document.getElementById("tgBoxhide").style.display='none'; 
                           }
						  //  document.getElementById("tgBox").style.display='none'; 
                      if(newVal.ID == "CA"){
                    	  document.getElementById("Payments_State").style.display='inline'; 
                    	 // $('#InternationalData').hide();
                    	  $scope.IsHidden = true;
                  		$scope.IsShow = false;
                      $scope.usState = [
                        { 'ID': '0' , 'Name': 'Select State'  },
                        { 'ID':'AB', 'Name':'AB-Alberta'  },
						{ 'ID':'BC', 'Name':'BC-British Columbia'  },
						{ 'ID':'MB', 'Name':'MB-Manitoba'  },
						{ 'ID':'NB', 'Name':'NB-New Brunswick'  },
						{ 'ID':'NF', 'Name':'NF-Newfoundland and Labrador'  },
						{ 'ID':'NT', 'Name':'NT-Northwest Territories'  },
						{ 'ID':'NS', 'Name':'NS-Nova Scotia'  },
						{ 'ID':'NU', 'Name':'NU-Nunavut'  },
						{ 'ID':'ON', 'Name':'ON-Ontario'  },
						{ 'ID':'PE', 'Name':'PE-Prince Edward Island'  },
						{ 'ID':'QC', 'Name':'QC-Quebec'  },
						{ 'ID':'SK', 'Name':'SK-Saskatchewan'  },
						{ 'ID':'YT', 'Name':'YT-Yukon'  }];
                      $scope.selectedItem = $scope.usState[0];
                  }else  if(newVal.ID == "IN"){
                	//  $('#InternationalData').show();
                	  document.getElementById("Payments_State").style.display='none'; 
                	  $scope.IsHidden = true;
              		$scope.IsShow = false;
                      $scope.usState = [ 
                                        { 'ID': '0' , 'Name': 'Select State'  },
        								{ 'ID': 'AN', 'Name': 'AN-Andaman and Nicobar Islands'  },
        								{ 'ID': 'AP', 'Name': 'AP-Andhra Pradesh'  },
        								{ 'ID': 'AR', 'Name': 'AR-Arunachal Pradesh'  },
        								{ 'ID': 'AS', 'Name': 'AS-Assam'  },
        								{ 'ID': 'BR', 'Name': 'BR-Bihar'  },
        								{ 'ID': 'CH', 'Name': 'CH-Chandigarh'  },
        								{ 'ID': 'CT', 'Name': 'CT-Chhattisgarh'  },
        								{ 'ID': 'DN', 'Name': 'DN-Dadra and Nagar Haveli'  },
        								{ 'ID': 'DD', 'Name': 'DD-Daman and Diu'  },
        								{ 'ID': 'DL', 'Name': 'DL-Delhi'  },
        								{ 'ID': 'GA', 'Name': 'GA-Goa'  },
        								{ 'ID': 'GJ', 'Name': 'GJ-Gujarat'  },
        								{ 'ID': 'HR', 'Name': 'HR-Haryana'  },
        								{ 'ID': 'HP', 'Name': 'HP-Himachal Pradesh'  },
        								{ 'ID': 'JK', 'Name': 'JK-Jammu and Kashmir'  },
        								{ 'ID': 'JH', 'Name': 'JH-Jharkhand'  },
        								{ 'ID': 'KA', 'Name': 'KA-Karnataka'  },
        								{ 'ID': 'KL', 'Name': 'KL-Kerala'  },
        								{ 'ID': 'LD', 'Name': 'LD-Lakshadweep'  },
        								{ 'ID': 'MP', 'Name': 'MP-Madhya Pradesh'  },
        								{ 'ID': 'MH', 'Name': 'MH-Maharashtra'  },
        								{ 'ID': 'MN', 'Name': 'MN-Manipur'  },
        								{ 'ID': 'ML', 'Name': 'ML-Meghalaya'  },
        								{ 'ID': 'MZ', 'Name': 'MZ-Mizoram'  },
        								{ 'ID': 'NL', 'Name': 'NL-Nagaland'  },
        								{ 'ID': 'OR', 'Name': 'OR-Orissa'  },
        								{ 'ID': 'PY', 'Name': 'PY-Pondicherry'  },
        								{ 'ID': 'PB', 'Name': 'PB-Punjab'  },
        								{ 'ID': 'RJ', 'Name': 'RJ-Rajasthan'  },
        								{ 'ID': 'SK', 'Name': 'SK-Sikkim'  },
        								{ 'ID': 'TN', 'Name': 'TN-Tamil Nadu'  },
        								{ 'ID': 'TR', 'Name': 'TR-Tripura'  },
        								{ 'ID': 'UP', 'Name': 'UP-Uttar Pradesh'  },
        								{ 'ID': 'UL', 'Name': 'UL-Uttaranchal'  },
        								{ 'ID': 'WB', 'Name': 'WB-West Bengal'  },];
                      $scope.selectedItem = $scope.usState[0];
                                   }else  if(newVal.ID == "AU"){
                                	   document.getElementById("Payments_State").style.display='none'; 
                                	//   $('#InternationalData').show();
                                	   $scope.IsHidden = true;
                               		$scope.IsShow = false;
                                       $scope.usState = [ 
											{ 'ID': '0', 'Name': 'Select State'  },
											{ 'ID': 'CT', 'Name': 'CT-Australian Capital Territory'  },
											{ 'ID': 'NS', 'Name': 'NS-New South Wales'  },
											{ 'ID': 'NT', 'Name': 'NT-Northern Territory'  },
											{ 'ID': 'QL', 'Name': 'QL-Queensland'  },
											{ 'ID': 'SA', 'Name': 'SA-South Australia'  },
											{ 'ID': 'TS', 'Name': 'TS-Tasmania'  },
											{ 'ID': 'VI', 'Name': 'VI-Victoria'  },
											{ 'ID': 'WA', 'Name': 'WA-Western Australia'  },
                                                         ];
                                       $scope.selectedItem = $scope.usState[0];
                                   }else  if(newVal.ID == "US"){
                                	   document.getElementById("Payments_State").style.display='inline'; 
                                //	   $('#InternationalData').hide();
                                	   $scope.IsHidden = true;
                               		$scope.IsShow = false;
                                       $scope.usState = [ 
                                                         { 'ID': '0' , 'Name': 'Select State'  },
											{ 'ID': 'AA'  ,'Name': 'AA-Armed Forces (the) Americas'  },
											{ 'ID': 'AE'  ,'Name': 'AE-Armed Forces Elsewhere'  },
											{ 'ID': 'AP'  ,'Name': 'AP-Armed Forces Pacific'  },
											{ 'ID': 'AL'  ,'Name': 'AL-Alabama'  },
											{ 'ID': 'AK'  ,'Name': 'AK-Alaska'  },
											{ 'ID': 'AZ'  ,'Name': 'AZ-Arizona'  },
											{ 'ID': 'AR'  ,'Name': 'AR-Arkansas'  },
											{ 'ID': 'CA'  ,'Name': 'CA-California'  },
											{ 'ID': 'CO'  ,'Name': 'CO-Colorado'  },
											{ 'ID': 'CT'  ,'Name': 'CT-Connecticut'  },
											{ 'ID': 'DE'  ,'Name': 'DE-Delaware'  },
											{ 'ID': 'DC'  ,'Name': 'DC-District of Columbia'  },
											{ 'ID': 'FL'  ,'Name': 'FL-Florida'  },
											{ 'ID': 'GA'  ,'Name': 'GA-Georgia'  },
											{ 'ID': 'HI'  ,'Name': 'HI-Hawaii'  },
											{ 'ID': 'ID'  ,'Name': 'ID-Idaho'  },
											{ 'ID': 'IL'  ,'Name': 'IL-Illinois'  },
											{ 'ID': 'IN'  ,'Name': 'IN-Indiania'  },
											{ 'ID': 'IA'  ,'Name': 'IA-Iowa'  },
											{ 'ID': 'KS'  ,'Name': 'KS-Kansas'  },
											{ 'ID': 'KY'  ,'Name': 'KY-Kentucky'  },
											{ 'ID': 'LA'  ,'Name': 'LA-Louisiana'  },
											{ 'ID': 'ME'  ,'Name': 'ME-Maine'  },
											{ 'ID': 'MD'  ,'Name': 'MD-Maryland'  },
											{ 'ID': 'MA'  ,'Name': 'MA-Massachusetts'  },
											{ 'ID': 'MI'  ,'Name': 'MI-Michigan'  },
											{ 'ID': 'MN'  ,'Name': 'MN-Minnesota'  },
											{ 'ID': 'MS'  ,'Name': 'MS-Mississippi'  },
											{ 'ID': 'MO'  ,'Name': 'MO-Missouri'  },
											{ 'ID': 'MT'  ,'Name': 'MT-Montana'  },
											{ 'ID': 'NE'  ,'Name': 'NE-Nebraska'  },
											{ 'ID': 'NV'  ,'Name': 'NV-Nevada'  },
											{ 'ID': 'NH'  ,'Name': 'NH-New Hampshire'  },
											{ 'ID': 'NJ'  ,'Name': 'NJ-New Jersey'  },
											{ 'ID': 'NM'  ,'Name': 'NM-New Mexico'  },
											{ 'ID': 'NY'  ,'Name': 'NY-New York'  },
											{ 'ID': 'NC'  ,'Name': 'NC-North Carolina'  },
											{ 'ID': 'ND'  ,'Name': 'ND-North Dakota'  },
											{ 'ID': 'OH'  ,'Name': 'OH-Ohio'  },
											{ 'ID': 'OK'  ,'Name': 'OK-Oklahoma'  },
											{ 'ID': 'OR'  ,'Name': 'OR-Oregon'  },
											{ 'ID': 'PA'  ,'Name': 'PA-Pennsylvania'  },
											{ 'ID': 'RI'  ,'Name': 'RI-Rhode Island'  },
											{ 'ID': 'SC'  ,'Name': 'SC-South Carolina'  },
											{ 'ID': 'SD'  ,'Name': 'SD-South Dakota'  },
											{ 'ID': 'TN'  ,'Name': 'TN-Tennessee'  },
											{ 'ID': 'TX'  ,'Name': 'TX-Texas'  },
											{ 'ID': 'UT' , 'Name': 'UT-Utah'  },
											{ 'ID': 'VT'  ,'Name': 'VT-Vermont'  },
											{ 'ID': 'VA'  ,'Name': 'VA-Virginia'  },
											{ 'ID': 'WA' , 'Name': 'WA-Washington'  },
											{ 'ID': 'WV' , 'Name': 'WV-West Virginia'  },
											{ 'ID': 'WI' , 'Name': 'WI-Wisconsin'  },
											{ 'ID': 'WY' , 'Name': 'WY-Wyoming'  },
                                                                      ];
                                       $scope.selectedItem = $scope.usState[0];
                                                }else  if(newVal.ID == "0"){
                                                	//  document.getElementById("Payments_State").style.display='none'; 
                                                //	 $('#InternationalData').hide();
                                                	$scope.IsHidden = true;
                                            		$scope.IsShow = false;
                                                    $scope.usState = [ 
                                                                    { 'ID': '0' , 'Name': 'Select State'  },
                                                                    { 'ID': 'AA'  ,'Name': 'AA-Armed Forces (the) Americas'  },
                        											{ 'ID': 'AE'  ,'Name': 'AE-Armed Forces Elsewhere'  },
                        											{ 'ID': 'AP'  ,'Name': 'AP-Armed Forces Pacific'  },
                        											{ 'ID': 'AL'  ,'Name': 'AL-Alabama'  },
                        											{ 'ID': 'AK'  ,'Name': 'AK-Alaska'  },
                        											{ 'ID': 'AZ'  ,'Name': 'AZ-Arizona'  },
                        											{ 'ID': 'AR'  ,'Name': 'AR-Arkansas'  },
                        											{ 'ID': 'CA'  ,'Name': 'CA-California'  },
                        											{ 'ID': 'CO'  ,'Name': 'CO-Colorado'  },
                        											{ 'ID': 'CT'  ,'Name': 'CT-Connecticut'  },
                        											{ 'ID': 'DE'  ,'Name': 'DE-Delaware'  },
                        											{ 'ID': 'DC'  ,'Name': 'DC-District of Columbia'  },
                        											{ 'ID': 'FL'  ,'Name': 'FL-Florida'  },
                        											{ 'ID': 'GA'  ,'Name': 'GA-Georgia'  },
                        											{ 'ID': 'HI'  ,'Name': 'HI-Hawaii'  },
                        											{ 'ID': 'ID'  ,'Name': 'ID-Idaho'  },
                        											{ 'ID': 'IL'  ,'Name': 'IL-Illinois'  },
                        											{ 'ID': 'IN'  ,'Name': 'IN-Indiania'  },
                        											{ 'ID': 'IA'  ,'Name': 'IA-Iowa'  },
                        											{ 'ID': 'KS'  ,'Name': 'KS-Kansas'  },
                        											{ 'ID': 'KY'  ,'Name': 'KY-Kentucky'  },
                        											{ 'ID': 'LA'  ,'Name': 'LA-Louisiana'  },
                        											{ 'ID': 'ME'  ,'Name': 'ME-Maine'  },
                        											{ 'ID': 'MD'  ,'Name': 'MD-Maryland'  },
                        											{ 'ID': 'MA'  ,'Name': 'MA-Massachusetts'  },
                        											{ 'ID': 'MI'  ,'Name': 'MI-Michigan'  },
                        											{ 'ID': 'MN'  ,'Name': 'MN-Minnesota'  },
                        											{ 'ID': 'MS'  ,'Name': 'MS-Mississippi'  },
                        											{ 'ID': 'MO'  ,'Name': 'MO-Missouri'  },
                        											{ 'ID': 'MT'  ,'Name': 'MT-Montana'  },
                        											{ 'ID': 'NE'  ,'Name': 'NE-Nebraska'  },
                        											{ 'ID': 'NV'  ,'Name': 'NV-Nevada'  },
                        											{ 'ID': 'NH'  ,'Name': 'NH-New Hampshire'  },
                        											{ 'ID': 'NJ'  ,'Name': 'NJ-New Jersey'  },
                        											{ 'ID': 'NM'  ,'Name': 'NM-New Mexico'  },
                        											{ 'ID': 'NY'  ,'Name': 'NY-New York'  },
                        											{ 'ID': 'NC'  ,'Name': 'NC-North Carolina'  },
                        											{ 'ID': 'ND'  ,'Name': 'ND-North Dakota'  },
                        											{ 'ID': 'OH'  ,'Name': 'OH-Ohio'  },
                        											{ 'ID': 'OK'  ,'Name': 'OK-Oklahoma'  },
                        											{ 'ID': 'OR'  ,'Name': 'OR-Oregon'  },
                        											{ 'ID': 'PA'  ,'Name': 'PA-Pennsylvania'  },
                        											{ 'ID': 'RI'  ,'Name': 'RI-Rhode Island'  },
                        											{ 'ID': 'SC'  ,'Name': 'SC-South Carolina'  },
                        											{ 'ID': 'SD'  ,'Name': 'SD-South Dakota'  },
                        											{ 'ID': 'TN'  ,'Name': 'TN-Tennessee'  },
                        											{ 'ID': 'TX'  ,'Name': 'TX-Texas'  },
                        											{ 'ID': 'UT' , 'Name': 'UT-Utah'  },
                        											{ 'ID': 'VT'  ,'Name': 'VT-Vermont'  },
                        											{ 'ID': 'VA'  ,'Name': 'VA-Virginia'  },
                        											{ 'ID': 'WA' , 'Name': 'WA-Washington'  },
                        											{ 'ID': 'WV' , 'Name': 'WV-West Virginia'  },
                        											{ 'ID': 'WI' , 'Name': 'WI-Wisconsin'  },
                        											{ 'ID': 'WY' , 'Name': 'WY-Wyoming'  },
                                                                                                ];
                                                    $scope.selectedItem = $scope.usState[0];
                                                                          }else{
                                                                        	  document.getElementById("Payments_State").style.display='none'; 
                                                                        	//  $('#InternationalData').show();
                                                                        	  $scope.IsHidden = false;
                                                                      		$scope.IsShow = true;
                                                	
                                                }
                  }
              });
			  
			  
			  $timeout(function() {
		      $scope.countryList=[
                        { 'ID': '0' , 'Name': 'Select Country'  },
						{ 'ID': 'US' , 'Name': 'United States'  },
						{ 'ID': 'CA' , 'Name': 'Canada'  },
						{ 'ID': 'GB' , 'Name': 'United Kingdom'  },
						{ 'ID': 'AI' , 'Name': 'Anguilla'  },
						{ 'ID': 'AG' , 'Name': 'Antigua and Barbuda'  },
						{ 'ID': 'AR' , 'Name': 'Argentina'  },
						{ 'ID': 'AM' , 'Name': 'Armenia'  },
						{ 'ID': 'AW' , 'Name': 'Aruba'  },
						{ 'ID': 'AU' , 'Name': 'Australia'  },
						{ 'ID': 'AT' , 'Name': 'Austria'  },
						{ 'ID': 'AZ' , 'Name': 'Azerbaijan'  },
						{ 'ID': 'BS' , 'Name': 'Bahamas'  },
						{ 'ID': 'BH' , 'Name': 'Bahrain'  },
						{ 'ID': 'BB' , 'Name': 'Barbados'  },
						{ 'ID': 'BE' , 'Name': 'Belgium'  },
						{ 'ID': 'BZ' , 'Name': 'Belize'  },
						{ 'ID': 'BM' , 'Name': 'Bermuda'  },
						{ 'ID': 'BO' , 'Name': 'Bolivia'  },
						{ 'ID': 'BA' , 'Name': 'Bosnia Herzegovina'  },
						{ 'ID': 'BW' , 'Name': 'Botswana'  },
						{ 'ID': 'BR' , 'Name': 'Brazil'  },
						{ 'ID': 'VG' , 'Name': 'British Virgin Islands'  },
						{ 'ID': 'BN' , 'Name': 'Brunei Darussalam'  },
						{ 'ID': 'BG' , 'Name': 'Bulgaria'  },
						{ 'ID': 'KH' , 'Name': 'Cambodia'  },
						{ 'ID': 'KY' , 'Name': 'Cayman Islands'  },
						{ 'ID': 'CL' , 'Name': 'Chile'  },
						{ 'ID': 'CN' , 'Name': 'China'  },
						{ 'ID': 'CR' , 'Name': 'Costa Rica'  },
						{ 'ID': 'HR' , 'Name': 'Croatia'  },
						{ 'ID': 'CY' , 'Name': 'Cyprus'  },
						{ 'ID': 'CZ' , 'Name': 'Czech Republic'  },
						{ 'ID': 'DK' , 'Name': 'Denmark'  },
						{ 'ID': 'DM' , 'Name': 'Dominica'  },
						{ 'ID': 'DO' , 'Name': 'Dominican Republic'  },
						{ 'ID': 'EC' , 'Name': 'Ecuador'  },
						{ 'ID': 'EG' , 'Name': 'Egypt'  },
						{ 'ID': 'SV' , 'Name': 'El Salvador'  },
						{ 'ID': 'EE' , 'Name': 'Estonia'  },
						{ 'ID': 'FI' , 'Name': 'Finland'  },
						{ 'ID': 'FR' , 'Name': 'France'  },
						{ 'ID': 'GE' , 'Name': 'Georgia'  },
						{ 'ID': 'DE' , 'Name': 'Germany'  },
						{ 'ID': 'GR' , 'Name': 'Greece'  },
						{ 'ID': 'GD' , 'Name': 'Grenada'  },
						{ 'ID': 'GP' , 'Name': 'Guadeloupe'  },
						{ 'ID': 'GU' , 'Name': 'Guam'  },
						{ 'ID': 'GT' , 'Name': 'Guatemala'  },
						{ 'ID': 'GY' , 'Name': 'Guyana'  },
						{ 'ID': 'HT' , 'Name': 'Haiti'  },
						{ 'ID': 'HN' , 'Name': 'Honduras'  },
						{ 'ID': 'HK' , 'Name': 'Hong Kong'  },
						{ 'ID': 'HU' , 'Name': 'Hungary'  },
						{ 'ID': 'IS' , 'Name': 'Iceland'  },
						{ 'ID': 'IN' , 'Name': 'India'  },
						{ 'ID': 'ID' , 'Name': 'Indonesia'  },
						{ 'ID': 'IQ' , 'Name': 'Iraq'  },
						{ 'ID': 'IE' , 'Name': 'Ireland'  },
						{ 'ID': 'IL' , 'Name': 'Israel'  },
						{ 'ID': 'IT' , 'Name': 'Italy'  },
						{ 'ID': 'JM' , 'Name': 'Jamaica'  },
						{ 'ID': 'JP' , 'Name': 'Japan'  },
						{ 'ID': 'JO' , 'Name': 'Jordan'  },
						{ 'ID': 'KZ' , 'Name': 'Kazakstan'  },
						{ 'ID': 'KW' , 'Name': 'Kuwait'  },
						{ 'ID': 'KG' , 'Name': 'Kyrgyzstan'  },
						{ 'ID': 'LA' , 'Name': 'Lao Peoples Democratic Republic'  },
						{ 'ID': 'LV' , 'Name': 'Latvia'  },
						{ 'ID': 'LB' , 'Name': 'Lebanon'  },
						{ 'ID': 'LT' , 'Name': 'Lithuania'  },
						{ 'ID': 'LU' , 'Name': 'Luxembourg'  },
						{ 'ID': 'MO' , 'Name': 'Macau'  },
						{ 'ID': 'MY' , 'Name': 'Malaysia'  },
						{ 'ID': 'MT' , 'Name': 'Malta'  },
						{ 'ID': 'MQ' , 'Name': 'Martinique'  },
						{ 'ID': 'MX' , 'Name': 'Mexico'  },
						{ 'ID': 'FM' , 'Name': 'Micronesia'  },
						{ 'ID': 'MN' , 'Name': 'Mongolia'  },
						{ 'ID': 'MS' , 'Name': 'Montserrat'  },
						{ 'ID': 'NA' , 'Name': 'Namibia'  },
						{ 'ID': 'NL' , 'Name': 'Netherlands'  },
						{ 'ID': 'AN' , 'Name': 'Netherlands Antilles'  },
						{ 'ID': 'NZ' , 'Name': 'New Zealand'  },
						{ 'ID': 'NI' , 'Name': 'Nicaragua'  },
						{ 'ID': 'NO' , 'Name': 'Norway'  },
						{ 'ID': 'OM' , 'Name': 'Oman'  },
						{ 'ID': 'PS' , 'Name': 'Palestinian Territory, Occupied'  },
						{ 'ID': 'PG' , 'Name': 'Papua New Guinea'  },
						{ 'ID': 'PY' , 'Name': 'Paraguay'  },
						{ 'ID': 'PH' , 'Name': 'Philippines'  },
						{ 'ID': 'PL' , 'Name': 'Poland'  },
						{ 'ID': 'PT' , 'Name': 'Portugal'  },
						{ 'ID': 'QA' , 'Name': 'Qatar'  },
						{ 'ID': 'MK' , 'Name': 'Republic of Macedonia'  },
						{ 'ID': 'RO' , 'Name': 'Romania'  },
						{ 'ID': 'RU' , 'Name': 'Russia'  },
						{ 'ID': 'SM' , 'Name': 'San Marino'  },
						{ 'ID': 'SA' , 'Name': 'Saudi Arabia'  },
						{ 'ID': 'RS' , 'Name': 'Serbia'  },
						{ 'ID': 'SG' , 'Name': 'Singapore'  },
						{ 'ID': 'SK' , 'Name': 'Slovakia'  },
						{ 'ID': 'SI' , 'Name': 'Slovenia'  },
						{ 'ID': 'ZA' , 'Name': 'South Africa'  },
						{ 'ID': 'KR' , 'Name': 'South Korea'  },
						{ 'ID': 'ES' , 'Name': 'Spain'  },
						{ 'ID': 'LK' , 'Name': 'Sri Lanka'  },
						{ 'ID': 'KN' , 'Name': 'St. Christopher (St. Kitts) Nevis'  },
						{ 'ID': 'LC' , 'Name': 'St. Lucia'  },
						{ 'ID': 'PM' , 'Name': 'St. Pierre and Miquelon'  },
						{ 'ID': 'VC' , 'Name': 'St. Vincent and The Grenadines'  },
						{ 'ID': 'SR' , 'Name': 'Suriname'  },
						{ 'ID': 'SE' , 'Name': 'Sweden'  },
						{ 'ID': 'CH' , 'Name': 'Switzerland'  },
						{ 'ID': 'SY' , 'Name': 'Syrian Arab Republic'  },
						{ 'ID': 'TW' , 'Name': 'Taiwan'  },
						{ 'ID': 'TH' , 'Name': 'Thailand'  },
						{ 'ID': 'TT' , 'Name': 'Trinidad and Tobago'  },
						{ 'ID': 'TR' , 'Name': 'Turkey'  },
						{ 'ID': 'TC' , 'Name': 'Turks and Caicos Islands'  },
						{ 'ID': 'UA' , 'Name': 'Ukraine'  },
						{ 'ID': 'AE' , 'Name': 'United Arab Emirates'  },
						{ 'ID': 'UY' , 'Name': 'Uruguay'  },
						{ 'ID': 'VI' , 'Name': 'US Virgin Islands'  },
						{ 'ID': 'VE' , 'Name': 'Venezuela'  },
						{ 'ID': 'VN' , 'Name': 'Vietnam'  },
						{ 'ID': 'YE' , 'Name': 'Yemen'  }, 
						];		  
			  $scope.usState = [ { 'ID': '0' , 'Name': 'Please Select'  },
			                     { 'ID': 'AA'  ,'Name': 'AA-Armed Forces (the) Americas'  },
									{ 'ID': 'AE'  ,'Name': 'AE-Armed Forces Elsewhere'  },
									{ 'ID': 'AP'  ,'Name': 'AP-Armed Forces Pacific'  },
									{ 'ID': 'AL'  ,'Name': 'AL-Alabama'  },
									{ 'ID': 'AK'  ,'Name': 'AK-Alaska'  },
									{ 'ID': 'AZ'  ,'Name': 'AZ-Arizona'  },
									{ 'ID': 'AR'  ,'Name': 'AR-Arkansas'  },
									{ 'ID': 'CA'  ,'Name': 'CA-California'  },
									{ 'ID': 'CO'  ,'Name': 'CO-Colorado'  },
									{ 'ID': 'CT'  ,'Name': 'CT-Connecticut'  },
									{ 'ID': 'DE'  ,'Name': 'DE-Delaware'  },
									{ 'ID': 'DC'  ,'Name': 'DC-District of Columbia'  },
									{ 'ID': 'FL'  ,'Name': 'FL-Florida'  },
									{ 'ID': 'GA'  ,'Name': 'GA-Georgia'  },
									{ 'ID': 'HI'  ,'Name': 'HI-Hawaii'  },
									{ 'ID': 'ID'  ,'Name': 'ID-Idaho'  },
									{ 'ID': 'IL'  ,'Name': 'IL-Illinois'  },
									{ 'ID': 'IN'  ,'Name': 'IN-Indiania'  },
									{ 'ID': 'IA'  ,'Name': 'IA-Iowa'  },
									{ 'ID': 'KS'  ,'Name': 'KS-Kansas'  },
									{ 'ID': 'KY'  ,'Name': 'KY-Kentucky'  },
									{ 'ID': 'LA'  ,'Name': 'LA-Louisiana'  },
									{ 'ID': 'ME'  ,'Name': 'ME-Maine'  },
									{ 'ID': 'MD'  ,'Name': 'MD-Maryland'  },
									{ 'ID': 'MA'  ,'Name': 'MA-Massachusetts'  },
									{ 'ID': 'MI'  ,'Name': 'MI-Michigan'  },
									{ 'ID': 'MN'  ,'Name': 'MN-Minnesota'  },
									{ 'ID': 'MS'  ,'Name': 'MS-Mississippi'  },
									{ 'ID': 'MO'  ,'Name': 'MO-Missouri'  },
									{ 'ID': 'MT'  ,'Name': 'MT-Montana'  },
									{ 'ID': 'NE'  ,'Name': 'NE-Nebraska'  },
									{ 'ID': 'NV'  ,'Name': 'NV-Nevada'  },
									{ 'ID': 'NH'  ,'Name': 'NH-New Hampshire'  },
									{ 'ID': 'NJ'  ,'Name': 'NJ-New Jersey'  },
									{ 'ID': 'NM'  ,'Name': 'NM-New Mexico'  },
									{ 'ID': 'NY'  ,'Name': 'NY-New York'  },
									{ 'ID': 'NC'  ,'Name': 'NC-North Carolina'  },
									{ 'ID': 'ND'  ,'Name': 'ND-North Dakota'  },
									{ 'ID': 'OH'  ,'Name': 'OH-Ohio'  },
									{ 'ID': 'OK'  ,'Name': 'OK-Oklahoma'  },
									{ 'ID': 'OR'  ,'Name': 'OR-Oregon'  },
									{ 'ID': 'PA'  ,'Name': 'PA-Pennsylvania'  },
									{ 'ID': 'RI'  ,'Name': 'RI-Rhode Island'  },
									{ 'ID': 'SC'  ,'Name': 'SC-South Carolina'  },
									{ 'ID': 'SD'  ,'Name': 'SD-South Dakota'  },
									{ 'ID': 'TN'  ,'Name': 'TN-Tennessee'  },
									{ 'ID': 'TX'  ,'Name': 'TX-Texas'  },
									{ 'ID': 'UT' , 'Name': 'UT-Utah'  },
									{ 'ID': 'VT'  ,'Name': 'VT-Vermont'  },
									{ 'ID': 'VA'  ,'Name': 'VA-Virginia'  },
									{ 'ID': 'WA' , 'Name': 'WA-Washington'  },
									{ 'ID': 'WV' , 'Name': 'WV-West Virginia'  },
									{ 'ID': 'WI' , 'Name': 'WI-Wisconsin'  },
									{ 'ID': 'WY' , 'Name': 'WY-Wyoming'  },
			                 ]
			  $scope.selectedCountry = $scope.countryList[0];
			  $scope.selectedItem = $scope.usState[0];
			  
			  
        	  for (var i = 0; i < $scope.totPax; ++i) {
        		  $scope.DobDate[i]="Day";
    			  $scope.DobMonth[i]="0";
    			  $scope.DobYear[i]="Year";
        	  }
			 /* $scope.DobDate[0]="Day";
			  $scope.DobMonth[0]="0";
			  $scope.DobYear[0]="Year";
			  
			  $scope.DobDate[1]="Day";
			  $scope.DobMonth[1]="0";
			  $scope.DobYear[1]="Year";
			  
			  $scope.DobDate[2]="Day";
			  $scope.DobMonth[2]="0";
			  $scope.DobYear[2]="Year";
			  
			  $scope.DobDate[3]="Day";
			  $scope.DobMonth[3]="0";
			  $scope.DobYear[3]="Year";
			  
			  $scope.DobDate[4]="Day";
			  $scope.DobMonth[4]="0";
			  $scope.DobYear[4]="Year";
			  
			  $scope.DobDate[5]="Day";
			  $scope.DobMonth[5]="0";
			  $scope.DobYear[5]="Year";
			  
			  $scope.DobDate[6]="Day";
			  $scope.DobMonth[6]="0";
			  $scope.DobYear[6]="Year";
			  
			  $scope.DobDate[7]="Day";
			  $scope.DobMonth[7]="0";
			  $scope.DobYear[7]="Year";
			  
			  
			  $scope.DobDate[8]="Day";
			  $scope.DobMonth[8]="0";
			  $scope.DobYear[8]="Year";*/
			  
			//  alert($scope.selectedCountry);
			//  alert($scope.countryList[0]['ID']);
			 // $scope.option = $scope.item['Values'][0]['Name'];
			  }, 1000);
			  
			  
	}])
})()