var app = angular.module('ormAddReview-ngApp',[]);

/************Directive************/


app.directive('fileModel', ['$parse', function ($parse) {
   return {
      restrict: 'A',
      link: function(scope, element, attrs) {
         var model = $parse(attrs.fileModel);
         var modelSetter = model.assign;
         var maxSize1 = 30720; //30KB
         var maxSize2 = 31457280  //30MB
         
         
         element.bind('change', function(){
            scope.$apply(function(){
               modelSetter(scope, element[0].files[0]);
               
               /** console.dir(element[0].files[0]);  **/
               
               var extention = element[0].files[0].name.slice((element[0].files[0].name.lastIndexOf(".") - 1 >>> 0) + 2); 
               
               //alert(extention);
               
               scope.maxSizeError1 = false;
               scope.maxSizeError2 = false;
              
              
               
               if((extention=='png'||extention=='jpeg'||extention=='jpg')){
            	
            	   //console.log("image"+extention);
            	   
	               if (element[0].files.length > 1) {
	                   modelSetter(scope, element[0].files);
	               } else {
	                   modelSetter(scope, element[0].files[0]);
	               }
	               
	               var fileSize = element[0].files[0].size;
	               if (fileSize > maxSize1) {
	                   scope.maxSizeError1 = true;   
	                   scope.profile_image = false; 
	                   scope.profile_image.error = true; 
	                   return false;
	               }
               }
               
               
               if((extention=='avi'||extention=='mp4'||extention=='flv'||extention=='wmv'||extention=='mov')){
             	  
	            	   //alert("video"+extention);
	            	   
	            	   if (element[0].files.length > 1) {
	                       modelSetter(scope, element[0].files);
	                   } else {
	                       modelSetter(scope, element[0].files[0]);
	                   }
	                   
	                   var fileSize = element[0].files[0].size;
	                   if (fileSize > maxSize2) {
	                       scope.maxSizeError2 = true;   
	                       scope.profile_video = false; 
	                       scope.profile_video.error = true; 
	                       return false;
	                   }
            	   
            	   
               }
               
               
            });
         });
         
         
      }
   };
}]);

/************Controller************/
app.controller('orm_review_controller',['$scope','$http','$window','$timeout',function($scope,$http,$window,$timeout){
	
	$scope.limit= 2;

	// loadMore function
	$scope.loadMore = function() {
		  $scope.limit =   $scope.limit + 2;
		}
	
	$scope.limit_v= 3;

	// loadMore function
	$scope.loadMore_v = function() {
		  $scope.limit_v =   $scope.limit_v + 3;
		}
	
	
    /** Start view part**/
	
	/****** Fetch text Review Start ******/
	var self = this;
	$scope.textReview = [];
	
	var formdata ={
			
				  "SiteID": 3,
				  "ReviewType": "Text"		
	}
	
	self.text_review = function()
	{
		var response = $http.post('/getTextReview',formdata, 'Content-Type: application/json');
		response.success(function(data, status, headers, config)
		{
			$scope.text_review = data;
			
		}),
		response.error(function(data, status, headers, config)
		{
			alert( "Exception details: " + JSON.stringify({data: data}));
		});
	}
	
	self.text_review();			
	/******  Fetch Text Review End *******/
					
	/****** Fetch Video Review Start ******/
	var self2 = this;
	$scope.videoReview = [];
	
	var formdata2 ={
			
				  "SiteID": 3,
				  "ReviewType": "Video"		
	}
	
	self.video_review = function()
	{
		var response1 = $http.post('/getVideoReview',formdata2, 'Content-Type: application/json');
		response1.success(function(data, status, headers, config)
		{
			$scope.video_review = data;
			
		}),
		response1.error(function(data, status, headers, config)
		{
			alert( "Exception details: " + JSON.stringify({data: data}));
		});
	}
	
	self2.video_review();			
	/******  Fetch Video Review End *******/
	
	
	
	
	
	
	
	/** End view part**/
	
	$scope.vi_disable = true;
	$scope.IsVisible_video = false;
	$scope.vi_required= false;
	
	$scope.tx_disable = false ;
	$scope.IsVisible_text = true;
	$scope.tx_required= true;
	
	
	
	$scope.videoShow = function(){
		
		$scope.vi_disable = false;
		$scope.IsVisible_video = true;
		$scope.vi_required= true;
		
		$scope.tx_disable = true ;
		$scope.IsVisible_text = false;
		$scope.tx_required= false;
		
	}
	
	$scope.textShow = function(){
		
		$scope.vi_disable = true;
		$scope.IsVisible_video = false;
		$scope.vi_required= false;
		
		$scope.tx_disable = false ;
		$scope.IsVisible_text = true;
		$scope.tx_required= true;
		
	}
	
	   $scope.ReviewsAbout = [{'id':'' ,'name':'Please Select'},{'id':'Booking Experience' ,'name':'Booking Experience'},
							{'id':'Website Experience' ,'name':'Website Experience'},
							{'id':'Customer Service' ,'name':'Customer Service'},
							{'id':'Others' ,'name':'Others'},{'id':'All' ,'name':'All'}];	
	
	   						$scope.reviewAboutText = '';
	   
	   
	   
		$scope.textreviewsubmit = function(ormAddTextReview){		
		
		if($scope[ormAddTextReview].$valid && !$scope.maxSizeError){			
						
			if($scope.middleName == "" || $scope.middleName == null){
				$scope.middleName = "";
			}
			
			if($scope.textreview == "" || $scope.textreview == null){
				$scope.textreview = "";
			}
					var SiteID = 3;
					var firstName = $scope.firstName;
					var middleName = $scope.middleName;
					var lastName = $scope.lastName;
					var location = $scope.location;
					var emailid = $scope.emailid;
					var reviewAboutText = $scope.reviewAboutText;
					var rating = $scope.rating;
					var reviewTitle = $scope.reviewTitle;
					var textreview = $scope.textreview;
					var file = null;
					
					if(angular.isDefined($scope.profile_image)){
						
						//alert("submit successfully-validate    ->"+$scope.profile_image.name);
						var extention11 = $scope.profile_image.name.slice(($scope.profile_image.name.lastIndexOf(".") - 1 >>> 0) + 2);
						//alert("extention11         #>"+extention11);
					}
					if(angular.isDefined($scope.profile_video)){
						
						//alert("submit successfully-validate    ->"+$scope.profile_video.name);
						var extention22 = $scope.profile_video.name.slice(($scope.profile_video.name.lastIndexOf(".") - 1 >>> 0) + 2);
						//alert("extention22         #>"+extention22);
					}
					
					
					 if(extention11=='png'||extention11=='jpeg'||extention11=='jpg'){
						 
					   // alert("hurrey");
						file = $scope.profile_image;
						var ReviewType = "Text";
					 }
					 
					 if((extention22=='avi'||extention22=='mp4'||extention22=='flv'||extention22=='wmv'||extention22=='mov')){
						 
						file = $scope.profile_video;
						var ReviewType = "Video";
						 
					 }
					
					//alert(">>>>>>>>>>>>>>>>>>>>>>>>>>>>"+file.name);
					
					var uploadUrl = "/save_orm_file";
					var fd = new FormData();       
					  fd.append('file', file);					
					  fd.append('SiteID', SiteID);
			          fd.append('FirstName', firstName);
			          fd.append('MiddleName', middleName);
			          fd.append('LastName', lastName);
			          fd.append('StarRating', rating);
			          fd.append('ReviewTitle', reviewTitle);
			          fd.append('Review', textreview);
			          fd.append('ReviewType', ReviewType);
			          fd.append('Location', location);
			          fd.append('Email', emailid);
			          fd.append('YourFeedbackIsAbout', reviewAboutText);
					
					//console.dir(...fd);
       
		          var response = $http.post(uploadUrl, fd, {
		        	  transformRequest: angular.identity,
		        	  headers: { 'Content-Type' : undefined}
		          })
       
		          response.success(function(data, status, headers, config){
        	  
        	      $scope.ormreview = data;	
        	      
        	      
        	      $('#Success').modal('show')
    	        	  
	        	  $scope[ormAddTextReview].$setPristine();
				  $scope[ormAddTextReview].$setUntouched();
				  $scope[ormAddTextReview].$submitted = false;
				  setTimeout(function (){$scope.$apply(function (){$scope.ormreview = "";});}, 20000000);
    				
    			});
		          
		          
		        response.error(function(data, status, headers, config){
				$scope.ormreview = data;				
				alert(data);
				setTimeout(function () {$scope.$apply(function (){$scope.ormreview = "";});}, 20000000);				
				});

		}else{
			//alert("may by issue");
			$scope.showMsgs = true;
		}
		
	}
	
}]);