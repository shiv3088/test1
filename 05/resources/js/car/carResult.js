
$(".dropdate").click(function() {
	 $('#dropDate').datepicker('show');
    });
	$(".pickDate").click(function() {
	 $('#pickupDate').datepicker('show');
    });
//M Responsive 
var numberOfMonthValue;
  $(window).resize(function() {
    
    if ($(window).width() < 768) {
      numberOfMonthValue =1;
	   $("#pickupDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
	    $("#dropDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
    } else {
      numberOfMonthValue =2;
	 
	   $("#pickupDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
	    $("#dropDate").datepicker("option", "numberOfMonths", numberOfMonthValue);
    }
  }).trigger('resize');
//Responsive 

(function(){
	$("body").addClass('carsection');
    $('.advanceOptLink').click(function(){
        $('#advanceOpt').slideToggle();
    })

    $('.pickUpDate').click(function(){
        if ($('input.dropOff').prop('checked'   )) {
        	$('#dropOffLocation').show();
            $('#pickUpLocation').removeClass('col-sm-4').addClass('col-sm-2');
        }else{
            $('#dropOffLocation').hide();
            $('#pickUpLocation').removeClass('col-sm-2').addClass('col-sm-4');
        }
    });   
    
       var checkInDate = $("#pickupDate").val();
	   var checkOutDate = $("#dropDate").val();	
	   var  minDate = new Date();
	   minDate.setDate(minDate.getDate()+2);
	   var  maxDate = new Date(checkInDate);
	   maxDate.setMonth(maxDate.getMonth() + 11);

    $("#pickupDate").datepicker({
        //changeMonth: true,
		//changeYear: true,
		numberOfMonths:numberOfMonthValue,
		dateFormat: "mm-dd-yy",
        showButtonPanel: true,
        
        minDate: minDate,maxDate: maxDate,
        autoClose: false,        
        onClose: function() {
            //alert();
           /* $(this).show();
            $(this).datepicker("show");
          var inputs = $(this).closest('.carSearhEngine').find(':input.cal');
          inputs.eq(inputs.index(this)).focus();*/
        	
        	var dropDateMin = $("#pickupDate").datepicker("getDate");
        	var dropDateMax = $("#dropDate").datepicker("getDate");        	
          
          try {
              if (dropDateMin != null && dropDateMin != '') 
              {
                      $("#dropDate").val($("#pickupDate").val());
                      $("#dropDate").datepicker("change", { minDate: new Date(dropDateMin) });
                      
                      var maxDate = new Date(dropDateMin);
                      maxDate.setMonth(maxDate.getMonth()+ 1);
                      $( "#dropDate" ).datepicker( "option", "maxDate", maxDate );
              }
          }catch(e)
              {
              }
          $("#dropDate").datepicker('show');
          
        }
    });
	   
	   
	   
	   
    /*$("#dropDate").datepicker({
        //changeMonth: true,
		//changeYear: true,
        dateFormat: "mm-dd-yy",        
        showButtonPanel: true,
        numberOfMonths: [ 1, 2 ],
        minDate: minDate,maxDate: maxDate,
        onClose: function() {
        	console.log('minDate onClose :::::'+minDate, ':::::::dropDate :::::' ,$("#dropDate").val(), ':::::::dropDate :::::',  $("#pickupDate").val());
        	console.log('maxDate onClose :::::'+maxDate);
          var inputs = $(this).closest('.carSearhEngine').find(':input.cal');
          inputs.eq(inputs.index(this)).focus();
        }
    });*/

})();

(function(){
	
	var pd = $("#pickupDate").datepicker("getDate");
	var dd = $("#dropDate").datepicker("getDate");
	
   var pDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
   var dDate = new Date(pd.getFullYear(), pd.getMonth(), pd.getDate());
   dDate.setDate(pDate.getDate());
   dDate.setMonth(pDate.getMonth()+1);
	   
   $("#dropDate").datepicker({
       //changeMonth: true,
	   //changeYear: true,
	   numberOfMonths:numberOfMonthValue,
       dateFormat: "mm-dd-yy",        
       showButtonPanel: true,
       
       minDate: pDate,maxDate: dDate,
       onClose: function() {
         /*var inputs = $(this).closest('.carSearhEngine').find(':input.cal');
         inputs.eq(inputs.index(this)).focus();*/
       }
    });
})();

function imgError(img,srcc) 
{
		 img.error="";
		 img.src=srcc;	
	}

function randomString(a) {
    var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
    a || (a = Math.floor(Math.random() * b.length));
    for (var c = "", d = 0; d < a; d++) c += b[Math.floor(Math.random() * b.length)];
    return c
}


function submitcar()
{
	
	if ( form_data == $('#searchCar').serialize()) {
	    $('#sameSearch').show();
	    $('#carError').html("");
	    return false;
	  } else {
	    	
	  $('#sameSearch').hide();
	  
	  var validatorHotel = $("#searchCar").validate({
		    showErrors: function() {
		          if (this.settings.highlight) {
		              for (var i = 0; this.errorList[i]; ++i) {
		                  this.settings.highlight.call(this, this.errorList[i].element,
		                      this.settings.errorClass, this.settings.validClass);
		              }
		          }
		          if (this.settings.unhighlight) {
		              for (var i = 0, elements = this.validElements(); elements[i]; ++i) {
		                  this.settings.unhighlight.call(this, elements[i],
		                      this.settings.errorClass, this.settings.validClass);
		              }
		          }
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
				required: true,
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
						}
		       }																       
		   	 }); 
	 
 
		    if(validatorHotel.form()){	
		    	
		    	var d1=$("#pickupDate").val();
		    	var d2=$("#dropDate").val();
		    	var t1=$("#pickupTime").val();
		    	var t2=$("#dropTime").val();
		    			    	
		    	if((d1 === d2) && (t1 >= t2))
		    	{
		    		$("#carError").html("<i class='fa fa-exclamation-triangle'></i> Drop time should be greater than Pick-up time.");
		  		  	return false;
		    	}
		    	else
		    		{
		    		
				    var b = randomString(12);
				    $("form#searchCar").attr({
				        action: "/carSearch/id/" + b
				    }), $("form#searchCar").submit();	
		    		
		    		}
		   }
	  }
	
};

var form_data = $('#searchCar').serialize();   


//-----------------------------Angular------------------------------

var carListApp = angular.module('carListApp', []);



var CarResultController=carListApp.controller('CarResultController',['$window','$scope','$http', 'carFactory', function($window,$scope, $http ,carFactory) {
	//alert("carController");
		
	$scope.loading = true;
	$scope.supplier=[];
	$scope.carType=[];
	$scope.supplierlist=[];
	$scope.carTypeList=[];
	$scope.selectedSupplier = [];
	$scope.selectedCarType = [];
	$scope.found=true;
	$scope.supplierLimit=4;
	$scope.cartypeLimit=4;
	$scope.carPaymentOption = [];
	$scope.carPaymentOptionChecked = [];
	
	$scope.carACOption = [];
	$scope.carACOptionChecked = [];
	
	$scope.carAutomaticManualOption = [];
	$scope.carAutomaticManualOptionChecked = [];
	$scope.banners = ['advantage', 'easirent', 'ezrent', 'sixt'];
	$scope.activeItem = "CarReference.Pricing.TotalChargeAmtWithoutSF";
				
	$scope.RandomBanners = function() {
		return $scope.banners[Math.floor((Math.random() * $scope.banners.length))];
	};
	$scope.showBanners=$scope.RandomBanners();
	var pageSize = 10;
	var pagesShown = 1;
	
	var promise = carFactory.searchCarList();
	
	promise.then(function (data) {
		
		$scope.carlist=[];
		
    	var _svc = $("#selectedVendorCode").val();
    	var _svt = $("#selectedVehicleType").val();
    	var _src = $("#selectedRateCode").val();
    	var _srp = $("#selectedRatePlan").val();
    	var _ssi = $("#selectedSupplierId").val();
    	var _sli = $("#selectedLocationId").val();
    	var _usc = $("#utmSourceCheck").val();
    	
    	var ca = data[0].CarAvailability;
    	
    	if(_usc == 'Offline'){
    		
    		if(_ssi == 93){
    			var select = _.filter(ca, function(obj){
        			return ((obj.CarReference.VehicleType == _svt) && (obj.CarReference.VendorCode == _svc) && (obj.CarReference.RouteStationLst[0].LocationID == _sli));
            	});
        		
        		var non_select = _.filter(ca, function(obj){
        			return !((obj.CarReference.VehicleType == _svt) && (obj.CarReference.VendorCode == _svc) && (obj.CarReference.RouteStationLst[0].LocationID == _sli));
            	});
        		
        		var response_data = _.union(select, non_select);
        		
        		data[0].CarAvailability = response_data;
    		} else {
    			var select = _.filter(ca, function(obj){
        			return ((obj.CarReference.VehicleType == _svt) && (obj.CarReference.VendorCode == _svc) && (obj.CarReference.RateCode == _src) && (obj.CarReference.RatePlan == _srp));
            	});
        		
        		var non_select = _.filter(ca, function(obj){
        			return !((obj.CarReference.VehicleType == _svt) && (obj.CarReference.VendorCode == _svc) && (obj.CarReference.RateCode == _src) && (obj.CarReference.RatePlan == _srp));
            	});
        		
        		var response_data = _.union(select, non_select);
        		
        		data[0].CarAvailability = response_data;
            	
    		}
    		
    	} else {
    		if((_svc != '') || (_svt != '')) {
        		var select = _.filter(ca, function(obj){
            		if((_svc != '') && (_svt != '')){
            			return ((obj.CarReference.VehicleType == _svt) && (obj.CarReference.VendorCode == _svc));
            		} else if(_svc != ''){
            			return (obj.CarReference.VendorCode == _svc);
            		} else if(_svt != ''){
            			return (obj.CarReference.VehicleType == _svt);
            		}
            	});
        		
            	var non_select = _.filter(ca, function(obj) {
            		if((_svc != '') && (_svt != '')){
            			return !((obj.CarReference.VehicleType == _svt) && (obj.CarReference.VendorCode == _svc));
            		} else if(_svc != ''){
            			return (obj.CarReference.VendorCode != _svc);
            		} else if(_svt != ''){
            			return (obj.CarReference.VehicleType != _svt);
            		}
            	});
            	
            	var response_data = _.union(select, non_select);
            	
            	data[0].CarAvailability = response_data;
        	}
    	}
		
		 angular.forEach(data, function(Flighth) {
			 $scope.carlist = Flighth.CarAvailability;
         });
		 
		 if($scope.carlist == undefined || $scope.carlist == null){
            	$scope.carlist = [];
            }
			
		 if($scope.carlist.length==0){
	    	  $scope.found=false;
	     } 
		 
		 _.each($scope.carlist, function(carData) {
			 if ($scope.supplier.indexOf(carData.CarReference.DisplayVendorCode) == -1) {
				 $scope.supplier.push(carData.CarReference.DisplayVendorCode);
				 $scope.supplierlist.push({'code': carData.CarReference.DisplayVendorCode, 'name': carData.CarReference.DisplayVendorName});
			 }
			 
			 if ($scope.carType.indexOf(carData.CarReference.CarTypeFilter) == -1) {
				 $scope.carType.push(carData.CarReference.CarTypeFilter);
				 $scope.carTypeList.push({'code': carData.CarReference.CarTypeFilter, 'name': carData.CarReference.CarTypeFilter});
			 }
			 
			 if((carData.CarReference.VehicleType[carData.CarReference.VehicleType.length-1]) == 'R'){
				 carData.CarReference['AC_NonAC'] = 'AC';
			 } else if((carData.CarReference.VehicleType[carData.CarReference.VehicleType.length-1]) == 'N'){
				 carData.CarReference['AC_NonAC'] = 'Non-AC';
			 }
			 
			 if((carData.CarReference.VehicleType[carData.CarReference.VehicleType.length-2]) == 'A'){
				 carData.CarReference['Auto_Manual'] = 'Automatic';
			 } else {
				 carData.CarReference['Auto_Manual'] = 'Manual';
			 }
			 
			 carData.CarReference.Pricing['TotalChargeAmtWithoutSF'] = (carData.CarReference.Pricing.TotalChargeAmount - carData.CarReference.Pricing.TotalSF);
			 
		 });
		 
		$scope.loading = false;
	 	document.getElementById('midblock').style.display="block";
  		document.getElementById('header').style.display="block";
    	document.getElementById('footer').style.display="block";
    	
    	$scope.carPaymentOption.push(_.countBy(data[0].CarAvailability, function(obj) { return obj.CarReference.isPubCar == true ? 'Pay Later': 'Pay Now'; }));
        if($scope.carPaymentOption[0]['Pay Now'] == undefined){
      	  $scope.carPaymentOption[0]['Pay Now'] = 0;
        } else if($scope.carPaymentOption[0]['Pay Later'] == undefined){
        	$scope.carPaymentOption[0]['Pay Later'] = 0;
        }
        
        $scope.carACOption.push(_.countBy(data[0].CarAvailability, function(obj) { return (obj.CarReference.VehicleType[obj.CarReference.VehicleType.length -1] == 'R') ? 'AC': (obj.CarReference.VehicleType[obj.CarReference.VehicleType.length -1] == 'N') ? 'Non-AC' : ''; }));
        if($scope.carACOption[0]['Non-AC'] == undefined){
      	  $scope.carACOption[0]['Non-AC'] = 0;
        } else if($scope.carACOption[0]['AC'] == undefined){
        	$scope.carACOption[0]['AC'] = 0;
        }
        
        $scope.carAutomaticManualOption.push(_.countBy(data[0].CarAvailability, function(obj) { return obj.CarReference.VehicleType[obj.CarReference.VehicleType.length -2] == 'A' ? 'Automatic': 'Manual'; }));
        if($scope.carAutomaticManualOption[0]['Automatic'] == undefined){
      	  $scope.carAutomaticManualOption[0]['Automatic'] = 0;
        } else if($scope.carAutomaticManualOption[0]['Manual'] == undefined){
        	$scope.carAutomaticManualOption[0]['Manual'] = 0;
        }
        
        $scope.carPriceSort('CarReference.Pricing.TotalChargeAmtWithoutSF');
        
	});
	
	$scope.carPriceSort = function(keyname){
	
        $scope.activeItem = keyname;
        $scope.sortKey = keyname;
        if(keyname === 'CarReference.Pricing.TotalChargeAmtWithoutSF') {
            $scope.reverse = false;
        } else{
            $scope.reverse = true;
        }
    };
	
	$scope.CarPaymentOptionFilter = function(cars) {
	    if ($scope.filteredCars != undefined) {
	      $scope.loadMoreResultFilter();
	    }
	    return (
	      $scope.carPaymentOptionChecked[cars.CarReference.isPubCar] ||
	      noFilter($scope.carPaymentOptionChecked)
	    );
	  };
	  
	$scope.CarAutomaticManualOptionFilter = function(cars) {
	    if ($scope.filteredCars != undefined) {
	      $scope.loadMoreResultFilter();
	    }
	    return (
	      $scope.carAutomaticManualOptionChecked[cars.CarReference.VehicleType[cars.CarReference.VehicleType.length-2]] ||
	      noFilter($scope.carAutomaticManualOptionChecked)
	    );
	  };
	  
	$scope.CarACOptionFilter = function(cars) {
	    if ($scope.filteredCars != undefined) {
	      $scope.loadMoreResultFilter();
	    }
	    return (
	      $scope.carACOptionChecked[cars.CarReference.VehicleType[cars.CarReference.VehicleType.length-1]] ||
	      noFilter($scope.carACOptionChecked)
	    );
	  };
	
	$scope.filterBySupplier = function (cars) {
		return $scope.selectedSupplier[cars.CarReference.DisplayVendorCode] || noFilter($scope.selectedSupplier);
	};
	    
	$scope.filterByCarType = function (cars) {
		return $scope.selectedCarType[cars.CarReference.CarTypeFilter] || noFilter($scope.selectedCarType);
	};
	
	$scope.subscribe = function(){
		  if(!$scope.newsLetterMail){
			  document.getElementById('newsLetterMsg').innerHTML="<h5>Please enter valid Email id.</h5>";
			  document.getElementById('newsLetterMsg').style.display = "block";
			  return;
		  }
		var url = '/car/newsletter/'+$scope.newsLetterMail;

		var response = $http.post(url);
		
		response.success(function(data, status){
			
			document.getElementById('newsLetterMsg').innerHTML="<h5>"+data.ErrorDescription+"</h5>";
			document.getElementById('newsLetterMsg').style.display = "block";
		});
		
		response.error(function(error){
			if(data.ErrorDescription == undefined){
				document.getElementById('newsLetterMsg').innerHTML="<h5>Please enter valid Email id.</h5>";
			}else{
				document.getElementById('newsLetterMsg').innerHTML="<h5>"+data.ErrorDescription+"</h5>";
			}
			
			document.getElementById('newsLetterMsg').style.display = "block";
		})
	  };
	    
	function noFilter(filterObj) {
		for (var key in filterObj) {
			if (filterObj[key]) {
				return false;
			}
		}
		return true;
	}
	 
	//load more
	$scope.hasMoreItemsToShow = function() {
		 var hasMoreFlag = true;
		 hasMoreFlag = this.filtered ? (pagesShown < (((this.filtered).length) / pageSize)) : false;
  		 return hasMoreFlag;
  	   };
	
  	$scope.paginationLimit = function(data) {
		return pageSize * pagesShown;
	};
	  	   
	$scope.showMoreItems = function() {
		$scope.restResult=($scope.carlist.length-10) - (pageSize * pagesShown);
		pagesShown = pagesShown + 1;       
	}; 

	//load more
	
	$scope.getSupplier = function(code)
	{
		return _.countBy($scope.carlist, function(obj) { return (obj.CarReference.DisplayVendorCode == code) ? code : ''})[code];
	};
	
	$scope.getCarType = function(code)
	{
		return _.countBy($scope.carlist, function(obj) { return (obj.CarReference.CarTypeFilter == code) ? code : ''})[code];
		
	};
	
	
	$scope.mySplit = function(string, nb) {
		
		
		console.log("string"+string);
	    var array = string.split('.');
	    console.log("array[0]"+array.length);	    
	    //var decval=array[nb];
	  //  console.log("Dec "+decval);
	    
	    if(array.length == 1)
	    	{
	    	array[1]='00'; 
	    	}
	    
	    
	    return array[nb];
	}
    /*$http({
        url: '../js/data.json',
        method: "GET"
    })
    .then(function(response) {
        $scope.carData = response.data.OTA_VehAvailRateRS.VehAvailRSCore;
        console.log('massage >> ' , $scope.carData);
    }, 
    function(response) {
        console.log('massage Fail >>');
    });*/
	
	$scope.category=[{M:'Mini'},{N:'Mini Elite'},{E:'Economy'},{H:'Economy Elite'},{C:'Compact'},{D:'Compact Elite'},{I:'Intermediate'},{J:'Intermediate Elite'},{S:'Standard'},{R:'Standard Elite'},{F:'Fullsize'},{G:'Fullsize Elite'},{P:'Premium'},{U:'Premium Elite'},{L:'Luxury'},{W:'Luxury Elite'},{O:'Oversize'},{X:'Special'}];
	$scope.type=[{B:'2-3 Door'},{C:'2/4 Door'},{D:'4/5 Door'},{W:'5 Door'},{V:'5 Door'},{T:'Convertible'},{F:'SUV'}];
	$scope.transmission=[{M:'Manual'},{N:'Manual'},{C:'Manual'},{A:'Automatic'},{B:'Automatic'},{D:'Automatic'}];
	$scope.fuelair=[{R:'A/C'},{N:'No A/C'}];
	
	$scope.carcategory=[{mini:['Fiat 500','Toyota Aygo','Kia Picanto','Chevrolet Matiz']}
				,{economy:['Toyota Yaris','Chevrolet Spark','Kia Rio','Ford Fiesta','Mitsubishi Mirage']}
				,{compact:['Nissan Versa','Ford Focus','Vauxhall Astra','Nissan Leaf','Chevrolet Aveo','Volkswagen Golf']}
				,{intermediate:['Skoda Octavia','Vauxhall Vectra','Hyundai Elantra','Kia Forte','Citroen Cactus','Dodge Avenger']}
				,{standard:['Toyota Corolla','Buick Verano','Nissan Sentra','Volkswagen Jetta','Audi A4','Ford Mondeo']}
				,{fullsize:['Nissan Altima','Ford Fusion','Toyota Camry','Mercedes Benz C Class','Chrysler 200','Chevrolet Malibu']}
				,{premium:['Buick Enclave','Ford Taurus','Nissan Maxima','Chevrolet Impala','Volvo XC70','Chrysler Pacifica']}
				,{luxury:['Cadillac XTS','Lincoln MKZ','Chrysler 300','Volvo V60','Mercedes Benz E250','Jaguar XF']}
				,{convertible:['Buick Cascada','Ford Mustang','Chevy Camaro','Audi A3','Audi A5','BMW 4 SERIES']}
				,{suv:['Kia Sportage','Vauxhall Mokka','Jeep Renegade','Ford Escape','Nissan Rogue','Toyota RAV4','Hyundai IX35','Nissan X-Trail','Hyundai Santa Fe','Ford Edge','Jeep Grand Cherokee','Chevrolet Traverse','Chevrolet Tahoe','Nissan Armada 7','Volvo XC60','Ford Kuga','Chevrolet Suburban','Mercedes Benz GLC','Land Rover Discovery','Lincoln Navigator','Toyota Land Cruiser','Audi Q7']}
				,{van:['Dodge Grand Caravan','Chrysler Town & Country','Nissan Quest','Mercedes Benz Metris','Ford S-Max','Volkswagen Touran','Vauxhall Zafira','Toyota Sienna','Seat Alhambra','Citroen Grand Picasso','Ford Transit','Chevrolet Express','Vauxhall Vivaro','Ford Galaxy','Volkswagen Sharan','Chevrolet Express 15','Vauxhall Vivaro LWB','Ford Custom Tourneo 9 Pass']}
				,{pickup:['Ram 1500 Quad Cab','Nissan Frontier','Ford F150 Supercab','Mitsubishi L200']}
				,{special:['Compact or larger - Vehicle determined upon pick-up']}
				,{other:['Vehicle determined upon pick-up']}];
	
	$scope.getCarEs = function(item,id)
	{			
		var result ="";
		angular.forEach(item, function(value, key){
	        angular.forEach(value,function(v1,k1){
	            //console.log(k1+":"+v1);
	            if(k1 == id){
	            	result=v1;
	            	return result;	
		        }
	          });
	        });
		//console.log(result);
		return result;
	};
	
	$scope.getCarCategory = function(id)
	{
		
		var result ="";
		angular.forEach($scope.carcategory, function(value, key){
	        angular.forEach(value,function(v1,k1){
	           // console.log(k1+":"+v1);
	            if(k1 == id.toLowerCase())
	            {
	            	//console.log(v1.length);
	            	if(v1.length > 2){
	            	result=v1[0]+", "+v1[1]+", "+v1[2];
	            	}else
	            		{
	            		result=v1[0];
	            		}
	            	return result;	
		        }
	          });
	        });
		//console.log(result);
		return result;
	};
	

	
	/*$scope.getRendomVal = function()
	{
		var show1="";
		var user=[];
		var myShows = ['Bones','Psych','Big Bang Theory','Mad Men','Breaking Bad','Modern Family','Game of Thrones','Dexter'];
		//alert();
		 //var show1= myShows[Math.floor((Math.random() * myShows.length)];
		user=myShows;
		var num=Math.floor((Math.random()*(myShows.length-1)));
		
		console.log(num);
		
		 show1= user[8];
		//console.log("Show : "+show);
		
		$scope.show=show1;
		return $scope.show;
	};*/
	
	/*$scope.getRendomVal = function()
	{
		var max=8;var min=0;
		return Math.floor(Math.random() * (max - min + 1)) + min;		
	};*/
	
	/*getRandomIndex = function(){
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}*/
	
	$scope.submitresult = function(id)
	{
		//alert("id "+id);
		
		if(window.screen.availWidth < 767)
	       {
		 	   $window.location.href = '/cars/detail/'+id;
	       }else
	    	   {
	    	   $window.location.href='/cars/detail/'+id;
	    	   }
	};
	
	$scope.getCap = function(amen)
	{                		
		return amen.replace(/([a-z])([A-Z])/g, "$1 $2");
	};
	
	$scope.getCar = (function(car){
		if (car.replace(/([a-z])([A-Z])/g, "$1 $2").indexOf(" SUV") != -1) {
			return "SUV";
			}else if (car.replace(/([a-z])([A-Z])/g, "$1 $2").indexOf(" Elite") != -1) {
				return "Elite";
			}else if (car.replace(/([a-z])([A-Z])/g, "$1 $2").indexOf(" VAN") != -1) {
				return "VAN";
			}
			else {
				return car;
			}
		})
	
	
	
}]);

carListApp.filter("capitalize", function() {
	  return function(input) {
	    var temp = input.split(" ");
	    var resStr = "";
	    angular.forEach(temp, function(val, key) {
	      if (key == temp.length - 1) {
	        resStr = resStr.concat(
	          !!val ? val.charAt(0).toUpperCase() + val.substr(1).toLowerCase() : ""
	        );
	      } else {
	        resStr = resStr.concat(
	          !!val
	            ? val.charAt(0).toUpperCase() + val.substr(1).toLowerCase()
	            : "",
	          " "
	        );
	      }
	    });
	    return resStr;
	  };
	});

carListApp.filter("nospace", function() {
	  return function(value) {
	    return !value ? "" : value.replace(/ /g, "-");
	  };
	});

carListApp.filter("getIntPart",

	    function () {

	        return function (value) {
	        var newValue	= value.toString();
	        return newValue.split('.')[0]
	        }
	});

carListApp.filter("getDecimalPart", function () {
	return function (value) {
		var newValue	= value.toString();
		var decimalPart = newValue.split('.')[1];
		if(decimalPart == undefined)
			decimalPart = "00";
		if(decimalPart.length == 1)
			decimalPart = decimalPart+"0";
		return decimalPart

	}
});


carListApp.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        //template: '<div class="srching-txt" style="text-align:center; height:300px; margin:70px 0;"><div class="progress progress-striped active"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"><span class="sr-only">100% Complete</span></div></div><h2 style="color:#03566c;">Just a moment more ...</h2><h4 style="font-weight:normal;">we want to make sure we find you the best price.</h4><div class="loader"><img src="/resources/images/hotels/loader.gif" alt=""/></div></div>',
        template: '',
        link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  })

 
carListApp.factory('carFactory', ['$http', function($http){
	 return {
		    searchCarList: function() {
		      return $http(
		      {
		        url: "/PostSearchCar",
		        method: "GET",
		      })
		      .then(function (response) {
		        return response.data;
		        });
		      
		      }
			  
    };
}]);

