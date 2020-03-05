
var myapp =angular.module("angularDeal", ['LocalStorageModule']);
(function(){

	myapp.controller('dealCtrl',['$http','$window','$scope','localStorageService','$timeout',function($http,$window,$scope,localStorageService, $timeout){
		var vm = this;
		 $scope.searchQueryList =  [];
		 $scope.sessQueryList =  [];
		 $scope.lastItem=[];
		 $scope.dealList=[];
		 $scope.cabinClass="Economy";
		
		  $scope.getDeal	 = function(longitude,latitude) {	
			  var post_data = {  //prepare payload for request
					    'longitude':longitude,
					    'latitude':latitude,
					   		}
				
    	$http.post('/getDeals',post_data).success(function(response){
		  
    		if(response != 'none'){
    		$scope.froCity=response;
    		$scope.PostDealss(response);
		    }
    		
	
		  })
			.error(function(error){
			
			})
			
	  }
		  
			$scope.showPNRDetails = function (pnr) 
			{
				//alert("PNR"+pnr);
				var query = "key="+pnr;
				//alert("key"+pnr);
				var left = screen.width / 2 - 200, top = screen.height / 2 - 250
				$window.open('/pnrDetails?'+query, '', "top=" + top + ",left=" + left + ", width=700, height=550");
			};
			
			$scope.ShowCardDetailsDiv = function (payment)
			{	
				//alert("payments"+payments);	
				/*alert(payment);
				
				alert("Payments"+payment.CardCode);*/
				
								  
				
					  //alert(${payment.CardCode});
				//Payments payment1=payment;
				
			//	alert(payment);
				 
				 $scope.cardCode = payment.CardCode;
				
				 $scope.cardNumber = payment.CardNumber;
				 $scope.cardHolderName = payment.CardHolderName;
				 $scope.expiryMonth = payment.ExpiryMonth;
				 $scope.expiryYear = payment.ExpiryYear;
				 $scope.cvv = payment.CvvNo;				 
				 $scope.address1 = payment.Address1;
				 $scope.address2 = payment.Address2;
				 
				 $scope.CardDetailsDiv = true;
				 var carddetail = document.getElementById('carddetail');
				  
					var vis = carddetail.style;			  	 
						  vis.display = 'block';
			};
			
			$scope.HidePop = function (id)
			{
				$scope.responseDiv = false;
			};		  
			
			// country code
			
			$scope.countries = [
								{ "id": "US" , "name": "United States"  },
								{ "id": "CA" , "name": "Canada"  },
								{ "id": "GB" , "name": "United Kingdom"  },
								{ "id": "AI" , "name": "Anguilla"  },
								{ "id": "AG" , "name": "Antigua and Barbuda"  },
								{ "id": "AR" , "name": "Argentina"  },
								{ "id": "AM" , "name": "Armenia"  },
								{ "id": "AW" , "name": "Aruba"  },
								{ "id": "AU" , "name": "Australia"  },
								{ "id": "AT" , "name": "Austria"  },
								{ "id": "AZ" , "name": "Azerbaijan"  },
								{ "id": "BS" , "name": "Bahamas"  },
								{ "id": "BH" , "name": "Bahrain"  },
								{ "id": "BB" , "name": "Barbados"  },
								{ "id": "BE" , "name": "Belgium"  },
								{ "id": "BZ" , "name": "Belize"  },
								{ "id": "BM" , "name": "Bermuda"  },
								{ "id": "BO" , "name": "Bolivia"  },
								{ "id": "BA" , "name": "Bosnia Herzegovina"  },
								{ "id": "BW" , "name": "Botswana"  },
								{ "id": "BR" , "name": "Brazil"  },
								{ "id": "VG" , "name": "British Virgin Islands"  },
								{ "id": "BN" , "name": "Brunei Darussalam"  },
								{ "id": "BG" , "name": "Bulgaria"  },
								{ "id": "KH" , "name": "Cambodia"  },
								{ "id": "KY" , "name": "Cayman Islands"  },
								{ "id": "CL" , "name": "Chile"  },
								{ "id": "CN" , "name": "China"  },
								{ "id": "CR" , "name": "Costa Rica"  },
								{ "id": "HR" , "name": "Croatia"  },
								{ "id": "CY" , "name": "Cyprus"  },
								{ "id": "CZ" , "name": "Czech Republic"  },
								{ "id": "DK" , "name": "Denmark"  },
								{ "id": "DM" , "name": "Dominica"  },
								{ "id": "DO" , "name": "Dominican Republic"  },
								{ "id": "EC" , "name": "Ecuador"  },
								{ "id": "EG" , "name": "Egypt"  },
								{ "id": "SV" , "name": "El Salvador"  },
								{ "id": "EE" , "name": "Estonia"  },
								{ "id": "FI" , "name": "Finland"  },
								{ "id": "FR" , "name": "France"  },
								{ "id": "GE" , "name": "Georgia"  },
								{ "id": "DE" , "name": "Germany"  },
								{ "id": "GR" , "name": "Greece"  },
								{ "id": "GD" , "name": "Grenada"  },
								{ "id": "GP" , "name": "Guadeloupe"  },
								{ "id": "GU" , "name": "Guam"  },
								{ "id": "GT" , "name": "Guatemala"  },
								{ "id": "GY" , "name": "Guyana"  },
								{ "id": "HT" , "name": "Haiti"  },
								{ "id": "HN" , "name": "Honduras"  },
								{ "id": "HK" , "name": "Hong Kong"  },
								{ "id": "HU" , "name": "Hungary"  },
								{ "id": "IS" , "name": "Iceland"  },
								{ "id": "IN" , "name": "India"  },
								{ "id": "id" , "name": "Indonesia"  },
								{ "id": "IQ" , "name": "Iraq"  },
								{ "id": "IE" , "name": "Ireland"  },
								{ "id": "IL" , "name": "Israel"  },
								{ "id": "IT" , "name": "Italy"  },
								{ "id": "JM" , "name": "Jamaica"  },
								{ "id": "JP" , "name": "Japan"  },
								{ "id": "JO" , "name": "Jordan"  },
								{ "id": "KZ" , "name": "Kazakstan"  },
								{ "id": "KW" , "name": "Kuwait"  },
								{ "id": "KG" , "name": "Kyrgyzstan"  },
								{ "id": "LA" , "name": "Lao Peoples Democratic Republic"  },
								{ "id": "LV" , "name": "Latvia"  },
								{ "id": "LB" , "name": "Lebanon"  },
								{ "id": "LT" , "name": "Lithuania"  },
								{ "id": "LU" , "name": "Luxembourg"  },
								{ "id": "MO" , "name": "Macau"  },
								{ "id": "MY" , "name": "Malaysia"  },
								{ "id": "MT" , "name": "Malta"  },
								{ "id": "MQ" , "name": "Martinique"  },
								{ "id": "MX" , "name": "Mexico"  },
								{ "id": "FM" , "name": "Micronesia"  },
								{ "id": "MN" , "name": "Mongolia"  },
								{ "id": "MS" , "name": "Montserrat"  },
								{ "id": "NA" , "name": "Namibia"  },
								{ "id": "NL" , "name": "Netherlands"  },
								{ "id": "AN" , "name": "Netherlands Antilles"  },
								{ "id": "NZ" , "name": "New Zealand"  },
								{ "id": "NI" , "name": "Nicaragua"  },
								{ "id": "NO" , "name": "Norway"  },
								{ "id": "OM" , "name": "Oman"  },
								{ "id": "PS" , "name": "Palestinian Territory, Occupied"  },
								{ "id": "PG" , "name": "Papua New Guinea"  },
								{ "id": "PY" , "name": "Paraguay"  },
								{ "id": "PH" , "name": "Philippines"  },
								{ "id": "PL" , "name": "Poland"  },
								{ "id": "PT" , "name": "Portugal"  },
								{ "id": "QA" , "name": "Qatar"  },
								{ "id": "MK" , "name": "Republic of Macedonia"  },
								{ "id": "RO" , "name": "Romania"  },
								{ "id": "RU" , "name": "Russia"  },
								{ "id": "SM" , "name": "San Marino"  },
								{ "id": "SA" , "name": "Saudi Arabia"  },
								{ "id": "RS" , "name": "Serbia"  },
								{ "id": "SG" , "name": "Singapore"  },
								{ "id": "SK" , "name": "Slovakia"  },
								{ "id": "SI" , "name": "Slovenia"  },
								{ "id": "ZA" , "name": "South Africa"  },
								{ "id": "KR" , "name": "South Korea"  },
								{ "id": "ES" , "name": "Spain"  },
								{ "id": "LK" , "name": "Sri Lanka"  },
								{ "id": "KN" , "name": "St. Christopher (St. Kitts) Nevis"  },
								{ "id": "LC" , "name": "St. Lucia"  },
								{ "id": "PM" , "name": "St. Pierre and Miquelon"  },
								{ "id": "VC" , "name": "St. Vincent and The Grenadines"  },
								{ "id": "SR" , "name": "Suriname"  },
								{ "id": "SE" , "name": "Sweden"  },
								{ "id": "CH" , "name": "Switzerland"  },
								{ "id": "SY" , "name": "Syrian Arab Republic"  },
								{ "id": "TW" , "name": "Taiwan"  },
								{ "id": "TH" , "name": "Thailand"  },
								{ "id": "TT" , "name": "Trinidad and Tobago"  },
								{ "id": "TR" , "name": "Turkey"  },
								{ "id": "TC" , "name": "Turks and Caicos Islands"  },
								{ "id": "UA" , "name": "Ukraine"  },
								{ "id": "AE" , "name": "United Arab Emirates"  },
								{ "id": "UY" , "name": "Uruguay"  },
								{ "id": "VI" , "name": "US Virgin Islands"  },
								{ "id": "VE" , "name": "Venezuela"  },
								{ "id": "VN" , "name": "Vietnam"  },
								{ "id": "YE" , "name": "Yemen"  }];
		    
		    
		    
		    
		    
		    $scope.states = [	{ "id": "0" , "name": "Please Select","countryId": "CA" },
		                     	{ "id":"AB", "name":"Alberta","countryId": "CA"},
								{ "id":"BC", "name":"British Columbia","countryId": "CA"  },
								{ "id":"MB", "name":"Manitoba","countryId": "CA"  },
								{ "id":"NB", "name":"New Brunswick","countryId": "CA"  },
								{ "id":"NF", "name":"Newfoundland and Labrador","countryId": "CA"  },
								{ "id":"NT", "name":"Northwest Territories","countryId": "CA"  },
								{ "id":"NS", "name":"Nova Scotia" ,"countryId": "CA" },
								{ "id":"NU", "name":"Nunavut" ,"countryId": "CA" },
								{ "id":"ON", "name":"Ontario" ,"countryId": "CA" },
								{ "id":"PE", "name":"Prince Edward Island" ,"countryId": "CA" },
								{ "id":"QC", "name":"Quebec" ,"countryId": "CA" },
								{ "id":"SK", "name":"Saskatchewan" ,"countryId": "CA" },
								{ "id":"YT", "name":"Yukon","countryId": "CA"  },
							
								{ "id": "AN", "name": "Andaman and Nicobar Islands" ,"countryId": "IN" },
								{ "id": "AP", "name": "Andhra Pradesh" ,"countryId": "IN" },
								{ "id": "AR", "name": "Arunachal Pradesh" ,"countryId": "IN" },
								{ "id": "AS", "name": "Assam" ,"countryId": "IN" },
								{ "id": "BR", "name": "Bihar" ,"countryId": "IN" },
								{ "id": "CH", "name": "Chandigarh" ,"countryId": "IN" },
								{ "id": "CT", "name": "Chhattisgarh" ,"countryId": "IN" },
								{ "id": "DN", "name": "Dadra and Nagar Haveli","countryId": "IN"  },
								{ "id": "DD", "name": "Daman and Diu" ,"countryId": "IN" },
								{ "id": "DL", "name": "Delhi" ,"countryId": "IN" },
								{ "id": "GA", "name": "Goa" ,"countryId": "IN" },
								{ "id": "GJ", "name": "Gujarat" ,"countryId": "IN" },
								{ "id": "HR", "name": "Haryana" ,"countryId": "IN" },
								{ "id": "HP", "name": "Himachal Pradesh" ,"countryId": "IN" },
								{ "id": "JK", "name": "Jammu and Kashmir" ,"countryId": "IN" },
								{ "id": "JH", "name": "Jharkhand" ,"countryId": "IN" },
								{ "id": "KA", "name": "Karnataka" ,"countryId": "IN" },
								{ "id": "KL", "name": "Kerala" ,"countryId": "IN" },
								{ "id": "LD", "name": "Lakshadweep" ,"countryId": "IN" },
								{ "id": "MP", "name": "Madhya Pradesh" ,"countryId": "IN" },
								{ "id": "MH", "name": "Maharashtra" ,"countryId": "IN" },
								{ "id": "MN", "name": "Manipur" ,"countryId": "IN" },
								{ "id": "ML", "name": "Meghalaya" ,"countryId": "IN" },
								{ "id": "MZ", "name": "Mizoram","countryId": "IN"  },
								{ "id": "NL", "name": "Nagaland" ,"countryId": "IN" },
								{ "id": "OR", "name": "Orissa" ,"countryId": "IN" },
								{ "id": "PY", "name": "Pondicherry" ,"countryId": "IN" },
								{ "id": "PB", "name": "Punjab" ,"countryId": "IN" },
								{ "id": "RJ", "name": "Rajasthan" ,"countryId": "IN" },
								{ "id": "SK", "name": "Sikkim" ,"countryId": "IN" },
								{ "id": "TN", "name": "Tamil Nadu" ,"countryId": "IN" },
								{ "id": "TR", "name": "Tripura" ,"countryId": "IN" },
								{ "id": "UP", "name": "Uttar Pradesh" ,"countryId": "IN" },
								{ "id": "UL", "name": "Uttaranchal" ,"countryId": "IN" },
								{ "id": "WB", "name": "West Bengal"  ,"countryId": "IN"},
								
								
								{ "id": "CT", "name": "Australian Capital Territory" ,"countryId": "AU" },
								{ "id": "NS", "name": "New South Wales" ,"countryId": "AU"  },
								{ "id": "NT", "name": "Northern Territory" ,"countryId": "AU"  },
								{ "id": "QL", "name": "Queensland" ,"countryId": "AU"  },
								{ "id": "SA", "name": "South Australia" ,"countryId": "AU"  },
								{ "id": "TS", "name": "Tasmania" ,"countryId": "AU"  },
								{ "id": "VI", "name": "Victoria" ,"countryId": "AU"  },
								{ "id": "WA", "name": "Western Australia" ,"countryId": "AU" },
								
								{ "id": "AA"  ,"name": "Armed Forces (the) Americas" ,"countryId": "US" },
								{ "id": "AE"  ,"name": "Armed Forces Europe" ,"countryId": "US" },
								{ "id": "AE"  ,"name": "Armed Forces Africa"  ,"countryId": "US"},
								{ "id": "AE"  ,"name": "Armed Forces Middle East"  ,"countryId": "US"},
								{ "id": "AE"  ,"name": "Armed Forces Canada" ,"countryId": "US" },
								{ "id": "AP"  ,"name": "Armed Forces Pacific"  ,"countryId": "US"},
								{ "id": "AL"  ,"name": "Alabama" ,"countryId": "US"},
								{ "id": "AK"  ,"name": "Alaska"  ,"countryId": "US"},
								{ "id": "AZ"  ,"name": "Arizona" ,"countryId": "US" },
								{ "id": "AR"  ,"name": "Arkansas"  ,"countryId": "US"},
								{ "id": "CA"  ,"name": "California"  ,"countryId": "US"},
								{ "id": "CO"  ,"name": "Colorado"  ,"countryId": "US"},
								{ "id": "CT"  ,"name": "Connecticut" ,"countryId": "US" },
								{ "id": "DE"  ,"name": "Delaware" ,"countryId": "US" },
								{ "id": "DC"  ,"name": "District of Columbia"  ,"countryId": "US"},
								{ "id": "FL"  ,"name": "Florida" ,"countryId": "US" },
								{ "id": "GA"  ,"name": "Georgia" ,"countryId": "US" },
								{ "id": "HI"  ,"name": "Hawaii" ,"countryId": "US" },
								{ "id": "id"  ,"name": "idaho" ,"countryId": "US" },
								{ "id": "IL"  ,"name": "Illinois" ,"countryId": "US" },
								{ "id": "IN"  ,"name": "Indiania" ,"countryId": "US" },
								{ "id": "IA"  ,"name": "Iowa" ,"countryId": "US" },
								{ "id": "KS"  ,"name": "Kansas" ,"countryId": "US" },
								{ "id": "KY"  ,"name": "Kentucky" ,"countryId": "US" },
								{ "id": "LA"  ,"name": "Louisiana" ,"countryId": "US" },
								{ "id": "ME"  ,"name": "Maine" ,"countryId": "US" },
								{ "id": "MD"  ,"name": "Maryland" ,"countryId": "US" },
								{ "id": "MA"  ,"name": "Massachusetts" ,"countryId": "US" },
								{ "id": "MI"  ,"name": "Michigan" ,"countryId": "US" },
								{ "id": "MN"  ,"name": "Minnesota" ,"countryId": "US" },
								{ "id": "MS"  ,"name": "Mississippi" ,"countryId": "US" },
								{ "id": "MO"  ,"name": "Missouri" ,"countryId": "US" },
								{ "id": "MT"  ,"name": "Montana" ,"countryId": "US" },
								{ "id": "NE"  ,"name": "Nebraska","countryId": "US"  },
								{ "id": "NV"  ,"name": "Nevada" ,"countryId": "US" },
								{ "id": "NH"  ,"name": "New Hampshire" ,"countryId": "US" },
								{ "id": "NJ"  ,"name": "New Jersey" ,"countryId": "US" },
								{ "id": "NM"  ,"name": "New Mexico" ,"countryId": "US" },
								{ "id": "NY"  ,"name": "New York" ,"countryId": "US" },
								{ "id": "NC"  ,"name": "North Carolina" ,"countryId": "US" },
								{ "id": "ND"  ,"name": "North Dakota" ,"countryId": "US" },
								{ "id": "OH"  ,"name": "Ohio" ,"countryId": "US" },
								{ "id": "OK"  ,"name": "Oklahoma" ,"countryId": "US" },
								{ "id": "OR"  ,"name": "Oregon" ,"countryId": "US" },
								{ "id": "PA"  ,"name": "Pennsylvania" ,"countryId": "US" },
								{ "id": "RI"  ,"name": "Rhode Island" ,"countryId": "US" },
								{ "id": "SC"  ,"name": "South Carolina" ,"countryId": "US" },
								{ "id": "SD"  ,"name": "South Dakota" ,"countryId": "US" },
								{ "id": "TN"  ,"name": "Tennessee" ,"countryId": "US" },
								{ "id": "TX"  ,"name": "Texas" ,"countryId": "US" },
								{ "id": "UT" , "name": "Utah" ,"countryId": "US" },
								{ "id": "VT"  ,"name": "Vermont" ,"countryId": "US" },
								{ "id": "VA"  ,"name": "Virginia" ,"countryId": "US" },
								{ "id": "WA" , "name": "Washington" ,"countryId": "US" },
								{ "id": "WV" , "name": "West Virginia" ,"countryId": "US" },
								{ "id": "WI" , "name": "Wisconsin" ,"countryId": "US" },
								{ "id": "WY" , "name": "Wyoming" ,"countryId": "US" } ];
		    
		    
		    
		    
		    $scope.cities = [{ "name": "Chandler","id": "CHD","stateId": "AZ"}, 
		                     { "name": "Fort Huachuca","id":"FHU","stateId": "AZ" }, 
		                     { "name": "Grand Canyon","id":"GCN" ,"stateId": "AZ"},
		                     { "name": "Kingman","id":"IGM","stateId": "AZ"}, 
		                     { "name": "Mesa","id":"MSC","stateId": "AZ"},
		                     { "name": "Page","id": "PGA","stateId": "AZ"}, 
		                     { "name": "Phoenix","id":"PHX","stateId": "AZ" }, 
		                     { "name": "Prescott","id": "PRC","stateId": "AZ"}, 
		                     { "name": "Tucson","id": "TUS","stateId": "AZ"},
		                     { "name": "Traverse City","id": "TVC","stateId": "AZ"}, 
		                     { "name": "Yuma","id":"YUM","stateId": "AZ"}, 
		                     
		                     
		                     { "name": "Anniston","id":"ANB","stateId": "AL"},
		                     { "name": "Birmingham","id":"BHM","stateId": "AL"}, 
		                     { "name": "Dothan","id": "DHN","stateId": "AL"},
		                     { "name": "Huntsville","id": "HSV","stateId": "AL"},
		                     { "name": "Montgomery","id": "MGM","stateId": "AL"}, 
		                     { "name": "Mobile","id":"MOB" ,"stateId": "AL"},
		                     { "name": "Muscle Shoals Florence","id": "MSL","stateId": "AL"},
		                     ];
		   

		       
		    
		    $scope.updateCountry = function(){
		      $scope.availableStates = [];
		      
		      angular.forEach($scope.states, function(value){
		        if(value.countryId == $scope.country.id){
		          $scope.availableStates.push(value);
		        }       
		        
		      });

		      if($scope.availableStates.length == '0')
	    	  {
		    	$("#mystate").css("display", "none");
		    	$("#nostate").css("display", "block");
	    	  }		  
			  if($scope.availableStates.length > '0')
			  {
				  $("#mystate").css("display", "block");
		    	          $("#nostate").css("display", "none");
			  }
		      
		    };
		    $scope.updateState = function(){
		        $scope.availableCities = [];
		        
		        angular.forEach($scope.cities, function(value){
		          if(value.stateId == $scope.state.id){
		            $scope.availableCities.push(value);
		          }       
		          
		        });
		      };
			
			//
		 $scope.convertToDate = function (stringDate){
			    var dateOut = new Date(stringDate);
			    dateOut.setDate(dateOut.getDate());
			    return dateOut;
			  };
			  $scope.submitSearch	 = function(id) {
				
				  if(id.stayCity  === undefined ){
				  
				    $scope.froCity=id.OriginAirport.CityName+"("+id.OriginAirport.AirportCode+"), "+id.OriginAirport.AirportName+", "+id.OriginAirport.Country;
			        $scope.toCity=id.DestinationAirport.CityName+"("+id.DestinationAirport.AirportCode+"), "+id.DestinationAirport.AirportName+", "+id.DestinationAirport.Country;
			        $scope.departDate=id.TravelDate;
			        $scope.returnDate=id.ReturnDate;
			       // alert("aaa"+id.TravelDate);
			        $scope.showSomething = function(input) {
			            return input == "true" ? "2" : "1";
			        };
			       $scope.tripType= $scope.showSomething(id.SearchReturnFlight);
			      
			       if(id.SearchReturnFlight == "true"){
			      // angular.element(document.getElementById('returnDate'))[0].disabled = false;
			       }else{
			    //	   angular.element(document.getElementById('returnDate'))[0].disabled = true;
			       }
			       
			        $scope.cabinClass=id.CabinType;
			        
			        $scope.adult=String(id.Adults);
			        $scope.child=String(id.Children);
			        $scope.infant=String(id.Infants);
			        $scope.infantWs=String(id.InfantWs);
			      //  alert(id.OriginAirport.CityName);
			        $scope.filterTextTimeout;
			        if ($scope.filterTextTimeout) $timeout.cancel($scope.filterTextTimeout);

			       
			        $scope.filterTextTimeout = $timeout(function() {
			        	submitForm();
			        }, 250); // delay 250 ms
				  }else{
					  
					  
					    $scope.stayCity=id.stayCity;
				        $scope.checkInDate=id.checkInDate;
				        $scope.checkOutDate=id.checkOutDate;
				        
				        $scope.rooms="1";
				        $scope.rooms0adult="1";
				        $scope.rooms0child="0";
				        
				        
				       $scope.filterTextTimeout;
				        if ($scope.filterTextTimeout) $timeout.cancel($scope.filterTextTimeout);

				       
				        $scope.filterTextTimeout = $timeout(function() {
				        	submitHotelForm();
				        }, 250); 
				  }
			        
			        
			  }
			 
			  
	
			  
			  $scope.PostDealss	 = function(city) {		
		$http.get('/PostDeals/'+city).success(function(response){
			//console.log(response);
			  $scope.dealList=response;
			if(localStorageService.get("lkhistory") != null){
	             $scope.sessQueryList=localStorageService.get("lkhistory");
	        
			
			   angular.forEach($scope.sessQueryList, function(tech) {
				   var res=JSON.parse(tech);
				 //  console.log(res.CabinType);
				   if(res.stayCity  === undefined ){
				   if (res.CabinType === undefined) {
					  // console.log("tech 2"+tech);
				   }else{
					 //  console.log("tech"+tech);
					   $scope.searchQueryList.push(JSON.parse(tech));
				   }}else{
					//   console.log("hotel:"+tech);
					   $scope.searchQueryList.push(JSON.parse(tech));
				   }
			       });
		        console.log($scope.searchQueryList);	  
			//
		        $scope.newarrs = [];
		        $scope.newarr = [];
		        $scope.unique = {};
		        
		        angular.forEach($scope.searchQueryList, function(item) {
		        	
		        	 if(item.stayCity  === undefined ){
		        	if(item.SearchReturnFlight == "true"){
		            if (! $scope.unique[item.TripType+item.OriginAirport.AirportCode+item.DestinationAirport.AirportCode+item.TravelDate+item.ReturnDate]) {
		            	 $scope.newarrs.push(item);
		            	 $scope.unique[item.TripType+item.OriginAirport.AirportCode+item.DestinationAirport.AirportCode+item.TravelDate+item.ReturnDate] = item;
		            }
		        	}else{
		        		 if (! $scope.unique[item.TripType+item.OriginAirport.AirportCode+item.DestinationAirport.AirportCode+item.TravelDate]) {
			            	 $scope.newarrs.push(item);
			            	 $scope.unique[item.TripType+item.OriginAirport.AirportCode+item.DestinationAirport.AirportCode+item.TravelDate] = item;
			            }
		        	}
		        	 }else{
		        		 if (! $scope.unique[item.stayCity+item.checkInDate+item.checkOutDate]) {
			            	 $scope.newarrs.push(item);
			            	 $scope.unique[item.stayCity+item.checkInDate+item.checkOutDate] = item;
			            }
		        		 
		        	 }
		        	
		        });
		        $scope.hotelItem=[];
		        $scope.currentItem=[];
		        $scope.lastItem=[];
		      //  $scope.listDeal = [];
		     //   console.log($scope.newarrs.length);	
		        if($scope.newarrs.length>=4){
		         $scope.newarr = $scope.newarrs.slice(-3);
		        }else{
		         $scope.newarr = $scope.newarrs;
		        }
		        console.log($scope.newarr);	
		        console.log("length:"+$scope.newarr.length);
		        var index=$scope.newarr.length;
		        
		       
		       // for(i=0;i<$scope.newarr.length; i++){
		        	 angular.forEach($scope.newarr, function(item) {
		        	//console.log($scope.lastItem);
			       // console.log($scope.hotelItem);
			      //  console.log("fL:"+$scope.lastItem.length);
			      //  console.log("index inside"+index);
		        if($scope.lastItem.length == 0){
		        	// console.log("Fli inside");
		        	 $scope.currentItem = item;
		        	// console.log($scope.currentItem);
		        	  if($scope.currentItem.CabinType === undefined){
		        		  
		        	  }else{
		        		  $scope.lastItem = item;
		        	  }
		        	
		        }	
		        if($scope.hotelItem.length == 0){
		        	
		        	 $scope.currentItem = item;
		        	  if($scope.currentItem.stayCity === undefined){
		        		  
		        	  }else{
		        		  $scope.hotelItem = item;
		        	  }
		        }
		        index=index-1;
		      
		        });
                
		        console.log("Flight:"+$scope.lastItem);
		        console.log("Hotel:"+$scope.hotelItem);
		       
		        if($scope.hotelItem.length != 0){
		        $scope.stayCity=$scope.hotelItem.stayCity;
		        $scope.checkInDate=$scope.hotelItem.checkInDate;
		        $scope.checkOutDate=$scope.hotelItem.checkOutDate;
		        $scope.rooms="1";
		        $scope.rooms0adult="1";
		        $scope.rooms0child="0";
		        var  minDate = new Date($scope.checkInDate);
				   var  returnsDate = new Date($scope.checkOutDate);
				   var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
								];
				   var weekday=new Array(7);
					weekday[1]="MON";
					weekday[2]="TUE";
					weekday[3]="WED";
					weekday[4]="THU";
					weekday[5]="FRI";
					weekday[6]="SAT";
					weekday[0]="SUN";
		    
                  day  = minDate.getDate(),  
     	           month = monthNames[minDate.getMonth()];
		           var days=weekday[minDate.getUTCDay()];
       
                  var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
                 $("#checkInDateDiv").html(divText);
        

        
		           day  = returnsDate.getDate(),  
		      	   month = monthNames[returnsDate.getMonth()];
				   var days=weekday[returnsDate.getUTCDay()];
				     
		           var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
					           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
		         
		           $("#checkOutDateDiv").html(divsText);
		           
		           
		        }else{
		        	 var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
										"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
										];
		        	 var weekday=new Array(7);
			   			weekday[1]="MON";
			   			weekday[2]="TUE";
			   			weekday[3]="WED";
			   			weekday[4]="THU";
			   			weekday[5]="FRI";
			   			weekday[6]="SAT";
			   			weekday[0]="SUN";
		        	   var ch = 2;    
			            checkInDate = new Date();
			           checkInDate.setDate(checkInDate.getDate() + ch); 
			           checkday  = checkInDate.getDate(),  
			                      
			         	month = monthNames[checkInDate.getMonth()];
			 		     days=weekday[checkInDate.getUTCDay()];
			 		    
			             var divcheckInText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+checkday+"</div>"+
						           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
			            
			           
			             $("#checkInDateDiv").html(divcheckInText);
			    	   
			             
			             var xs = 7; 
					        returnsDate = new Date();
					        returnsDate.setDate(returnsDate.getDate() + xs);
					               
					                 day  = returnsDate.getDate(),  
					            	month = monthNames[returnsDate.getMonth()];
					    		    var days=weekday[returnsDate.getUTCDay()];
					    		    
					    		     
					             var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
					   			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
					               
					                $("#checkOutDateDiv").html(divsText);
					                
					                
			             var checkInDate_from = $.datepicker.formatDate('yy-mm-dd', checkInDate);
			             var dt_from = $.datepicker.formatDate('yy-mm-dd', returnsDate);
			             $scope.checkInDate=checkInDate_from;
					     $scope.checkOutDate=dt_from;
			              
			            		    	   
			    	   $scope.rooms="1";
				        $scope.rooms0adult="1";
				        $scope.rooms0child="0";
		        }
		        
		        
		        
		        
		       if($scope.lastItem.length != 0){ 
		        
		       console.log($scope.lastItem.Adults);
		    //    $scope.froCity=$scope.lastItem.OriginAirport.CityName+"("+$scope.lastItem.OriginAirport.AirportCode+"), "+$scope.lastItem.OriginAirport.AirportName+", "+$scope.lastItem.OriginAirport.Country;
		    //    $scope.toCity=$scope.lastItem.DestinationAirport.CityName+"("+$scope.lastItem.DestinationAirport.AirportCode+"), "+$scope.lastItem.DestinationAirport.AirportName+", "+$scope.lastItem.DestinationAirport.Country;
		        $scope.departDate=$scope.lastItem.TravelDate;
		      
		   	        
		        $scope.showSomething = function(input) {
		            return input == "true" ? "2" : "1";
		        };
		       $scope.tripType= $scope.showSomething($scope.lastItem.SearchReturnFlight);
		      
		       if($scope.lastItem.SearchReturnFlight == "true"){
		     //  angular.element(document.getElementById('returnDate'))[0].disabled = false;
		       }else{
		    //	   angular.element(document.getElementById('returnDate'))[0].disabled = true;
		       }
		       
		       //console.log("tripType:"+$scope.tripType);
		       if ($scope.tripType == "2") {
		    	   
		    	   $scope.returnDate=$scope.lastItem.ReturnDate;
						     $("#journey").removeClass("fa fa-plus-circle");
						      $("#journey").addClass("fa fa-times-circle");
						      
						     $("#returnDateDiv").fadeTo("slow", 1.00);
						      $("#returnDateDivs").fadeTo("slow", 1.00);
							
							
							   var src = "/resources/images/return-errow1.png";
		                     $("#tripImage").attr("src", src);
		                     
		                     var  minDate = new Date($scope.departDate);
		  				   var  returnsDate = new Date($scope.returnDate);
		  				   var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
		  								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
		  								];
		  				   var weekday=new Array(7);
		  					weekday[1]="MON";
		  					weekday[2]="TUE";
		  					weekday[3]="WED";
		  					weekday[4]="THU";
		  					weekday[5]="FRI";
		  					weekday[6]="SAT";
		  					weekday[0]="SUN";
		  		    
		                     day  = minDate.getDate(),  
		        	           month = monthNames[minDate.getMonth()];
		  		           var days=weekday[minDate.getUTCDay()];
		          
		                     var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
		  			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
		                    $("#departDateDiv").html(divText);
		           

		           
		  		           day  = returnsDate.getDate(),  
		  		      	   month = monthNames[returnsDate.getMonth()];
		  				   var days=weekday[returnsDate.getUTCDay()];
		  				     
		  		           var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
		  					           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
		  		         
		  		           $("#returnDateDiv").html(divsText);
						}
						else if ($scope.tripType == "1") {
										   
						     
						      $("#returnDateDiv").fadeTo("slow", 0.15);
						       $("#returnDateDivs").fadeTo("slow", 0.15);
						      $("#journey").removeClass("fa fa-times-circle");
						     $("#journey").addClass("fa fa-plus-circle");
						   //  tripImage
						   var src =  "/resources/images/oneway-errow.png";
		                    $("#tripImage").attr("src", src);
							
		                    
		                    var  minDate = new Date($scope.departDate);
			  				
			  				   var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
			  								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
			  								];
			  				   var weekday=new Array(7);
			  					weekday[1]="MON";
			  					weekday[2]="TUE";
			  					weekday[3]="WED";
			  					weekday[4]="THU";
			  					weekday[5]="FRI";
			  					weekday[6]="SAT";
			  					weekday[0]="SUN";
			  		    
			                     day  = minDate.getDate(),  
			        	           month = monthNames[minDate.getMonth()];
			  		           var days=weekday[minDate.getUTCDay()];
			          
			                     var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			  			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
			                    $("#departDateDiv").html(divText);
			           
			                    $scope.tripType= "1";  
			                    angular.element(document.getElementById('tripType'))[0].value = "1";
						}
		       
		      
		       
		       
		        $scope.cabinClass=$scope.lastItem.CabinType;
		        
		        $scope.adult=String($scope.lastItem.Adults);
		        $scope.child=String($scope.lastItem.Children);
		        $scope.infant=String($scope.lastItem.Infants);
		        $scope.infantWs=String($scope.lastItem.InfantWs);
			}else{
				  $scope.tripType= "2";
				     angular.element(document.getElementById('tripType'))[0].value = "2";
				     //angular.element(document.getElementById('returnDate'))[0].disabled = false;
				     
				     
				     $("#journey").removeClass("fa fa-plus-circle");
				      $("#journey").addClass("fa fa-times-circle");
				      
				     $("#returnDateDiv").fadeTo("slow", 1.00);
				      $("#returnDateDivs").fadeTo("slow", 1.00);
					
					   var src = "/resources/images/return-errow1.png";
                 $("#tripImage").attr("src", src);
               
               
			        $scope.cabinClass="Economy";
			        
			        $scope.adult="1";
			        $scope.child="0";
			        $scope.infant="0";
			        $scope.infantWs="0";
			        
			        var mx = 1; 
			        var minDate = new Date();
			        minDate.setDate(minDate.getDate() + mx);
			        var x = 12; 
			        var  maxDate = new Date();
			         maxDate.setMonth(maxDate.getMonth() + x);
			        
			        var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
			     								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
			   								];
			        var weekday=new Array(7);
			   			weekday[1]="MON";
			   			weekday[2]="TUE";
			   			weekday[3]="WED";
			   			weekday[4]="THU";
			   			weekday[5]="FRI";
			   			weekday[6]="SAT";
			   			weekday[0]="SUN";
			        
			        
			   			var   day  = minDate.getDate();  
			   			var	month = monthNames[minDate.getMonth()];
			    		    var days=weekday[minDate.getUTCDay()];
			              
			                var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			   			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
			               
			              
			                 
			                 
			               $("#departDateDiv").html(divText);
			              
			               
			               var xs = 7; 
			        returnsDate = new Date();
			        returnsDate.setDate(returnsDate.getDate() + xs);
			               
			                 day  = returnsDate.getDate(),  
			            	month = monthNames[returnsDate.getMonth()];
			    		    var days=weekday[returnsDate.getUTCDay()];
			    		    
			    		     
			             var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			   			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
			               
			               $("#returnDateDiv").html(divsText);
			                $("#checkOutDateDiv").html(divsText);
			                 
			   			  var dt_to = $.datepicker.formatDate('yy-mm-dd', new Date());
			   			  var dt_from = $.datepicker.formatDate('yy-mm-dd', returnsDate);
			   			 
			   		   $scope.departDate=dt_to;
			    	   $scope.returnDate=dt_from;
			    	   
			    	   
			}
		       // console.log($scope.adult, typeof $scope.adult);
			}else{
				     $scope.tripType= "2";
				     angular.element(document.getElementById('tripType'))[0].value = "2";
				     //angular.element(document.getElementById('returnDate'))[0].disabled = false;
				     
				     
				     $("#journey").removeClass("fa fa-plus-circle");
				      $("#journey").addClass("fa fa-times-circle");
				      
				     $("#returnDateDiv").fadeTo("slow", 1.00);
				      $("#returnDateDivs").fadeTo("slow", 1.00);
					
					   var src = "/resources/images/return-errow1.png";
                    $("#tripImage").attr("src", src);
                  
                  
			        $scope.cabinClass="Economy";
			        
			        $scope.adult="1";
			        $scope.child="0";
			        $scope.infant="0";
			        $scope.infantWs="0";
			        
			        var mx = 1; 
			        var minDate = new Date();
			        minDate.setDate(minDate.getDate() + mx);
			        var x = 12; 
			        var  maxDate = new Date();
			         maxDate.setMonth(maxDate.getMonth() + x);
			        
			        var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
			     								"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
			   								];
			        var weekday=new Array(7);
			   			weekday[1]="MON";
			   			weekday[2]="TUE";
			   			weekday[3]="WED";
			   			weekday[4]="THU";
			   			weekday[5]="FRI";
			   			weekday[6]="SAT";
			   			weekday[0]="SUN";
			        
			        
			   			var   day  = minDate.getDate();  
			   			var	month = monthNames[minDate.getMonth()];
			    		    var days=weekday[minDate.getUTCDay()];
			              
			                var divText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			   			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
			               
			              
			                 
			                 
			               $("#departDateDiv").html(divText);
			              
			               
			               var xs = 7; 
			        returnsDate = new Date();
			        returnsDate.setDate(returnsDate.getDate() + xs);
			               
			                 day  = returnsDate.getDate(),  
			            	month = monthNames[returnsDate.getMonth()];
			    		    var days=weekday[returnsDate.getUTCDay()];
			    		    
			    		     
			             var divsText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+day+"</div>"+
			   			           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
			               
			               $("#returnDateDiv").html(divsText);
			                $("#checkOutDateDiv").html(divsText);
			                 
			   			  var dt_to = $.datepicker.formatDate('yy-mm-dd', new Date());
			   			  var dt_from = $.datepicker.formatDate('yy-mm-dd', returnsDate);
			   			 
			   		   $scope.departDate=dt_to;
			    	   $scope.returnDate=dt_from;
			    	   
			    	   
			    	   /**Hotel Setting***/
			    	   
			    	    var ch = 2;    
			            checkInDate = new Date();
			           checkInDate.setDate(checkInDate.getDate() + ch); 
			                      checkday  = checkInDate.getDate(),  
			                      
			         	month = monthNames[checkInDate.getMonth()];
			 		     days=weekday[checkInDate.getUTCDay()];
			 		    
			             var divcheckInText="<div style='color:#3992de; text-align:center; font-weight:bolder; font-size:40px; padding:8px; font-family:sans-serif;'>"+checkday+"</div>"+
						           "<div style='text-transform:uppercase; text-align:center; font-size:17px;'>"+days+", "+month+"</div>";
			            
			           
			             $("#checkInDateDiv").html(divcheckInText);
			    	   
			             var checkInDate_from = $.datepicker.formatDate('yy-mm-dd', checkInDate);
						  
			             $scope.checkInDate=checkInDate_from;
					        $scope.checkOutDate=dt_from;
			              
			            		    	   
			    	   $scope.rooms="1";
				        $scope.rooms0adult="1";
				        $scope.rooms0child="0";
			                
			}
		      		        
		  
		  //  console.log($scope.newarr.length);
		    if($scope.newarr.length==1){
		    	 var placeholder2 = document.getElementById('searchPadList'); //working
		           placeholder2.innerHTML = "<b class='history-show'>1</b>"; 
		    }else  if($scope.newarr.length==2){
		    	 var placeholder2 = document.getElementById('searchPadList'); //working
		           placeholder2.innerHTML = "<b class='history-show'>2</b>"; 
		    }else  if($scope.newarr.length > 2){
		    	 var placeholder2 = document.getElementById('searchPadList'); //working
		           placeholder2.innerHTML = "<b class='history-show'>3</b>"; 
		    }
		   
		    
		  
			
		})
		.error(function(error){
		
		})
			  }
		
	}]);
	    //end first controller
	
	/*myapp.controller('dealCtrl1',['$http','$window','$scope', function($http,$window,$scope)
  {
		var vm = this;
		$scope.showLogin=true;
		$scope.logindialog = false;
	
		
		
	$scope.login= function(){
		  //alert("1234");
		  $scope.logindialog = true;
		  
		  $scope.showLogin=false;	
	  };
	
	
	 $scope.logindialogOpen= function(){
		  //alert("1234");
		  $scope.logindialog = true;
	  };
	
	  $scope.logindialogClose= function(){
		  //alert("1234");
		  $scope.logindialog = false;
		  $('#login').modal('hide');
	  };
	  
	  
	  //forget
	  $scope.forget = function(){
		 
		  $scope.logindialog = false;
		  
		  $('#login').modal('hide');
	  };
	  
	  //end
	  
	  //social 
	  $scope.shareOnFacebook = function() {
		  //alert("facebook");
			$window.location.replace("/social/facebook/signin");
			
				//$window.post('/social/facebook/signin');
			
		};
		$scope.shareOnTwitter = function() {
			alert("twitter");
			$window.location.replace("/social/twitter/signin");
			//$window.post('/social/twitter/signin');
		};
	  //end
	  
	  //signup
	  $scope.signin = function(){
		  
		  //alert("Sign in form");
			
			 vcRecaptchaService.getResponse() gives you the g-captcha-response 
		      
			// Set form values & construct data to send
		  
				var post_data = {  //prepare payload for request
				
					'email':$scope.email,
					'password':$scope.password,
					
				}
				
				
				 Make Ajax request to our server with g-captcha-string 
				$http.post('/userLogin',post_data).success(function(response){
					//console.log(response);
					vm.name="";
					vm.email="";
					vm.message="";
					//alert("afterlogin response");
					
					if(response == "success"){
						
						var placeholder2 = document.getElementById('errorMessage'); //working
				           placeholder2.innerHTML = "Successfully verified and signed up the user"; 
				           $scope.logindialog = false;
				           $scope.showLogin=false;
				           //alert("after success response");
				         $('#login').modal('hide');
					}else{
						
						 var placeholder2 = document.getElementById('errorMessage'); //working
				           placeholder2.innerHTML = "User verification failed"; 
					}
				})
				.error(function(error){
				
				})
				
			
		};
	  //end
	 
	
  	}]).directive('logindialog', function () {
	      return {
	          restrict: 'E',
	          replace:false,
	          link: function (scope, element, attr) {
	                scope.$watch('logindialog', function (val) {
	                    if (val)
	                        $(element).show();
	                    else
	                        $(element).hide();
	                });
	          }
	        }
	    });  */  
	    



//end fuction
})();




