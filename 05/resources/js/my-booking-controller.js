
var myapp =angular.module("mybookingapp", ['angularUtils.directives.dirPagination']);
															

	myapp.controller('mybookingctrl',['$http','$window','$scope','$timeout',function($http,$window,$scope, $timeout){
		
		$scope.cus_email="";
		$scope.lastName="";
		$scope.cus_zip="";
		$scope.bookinglist=null;
		$scope.loading = false;
		$scope.searchtab=true;
		$scope.detailstab=true;
		$scope.emailRes="";
		$scope.sentmess=false;
		
		$scope.serial = 1;		   
		   
		
		 
		   $scope.indexCount = function(newPageNumber)
			{
			    $scope.serial = newPageNumber * 15 - 14;
			};
			
			$scope.backSearch=function(){
				$scope.searchtab=true;
				$scope.detailstab=true;
				$scope.bookinglist=null;
			}
		
		$scope.getMyBooking=function()
		{
			
			
			if($scope.cus_email == "")
			{
				alert("Please Enter email : ");				
			} 
			else if($scope.lastName == "" && $scope.cus_zip == "")
			{
				alert("Please Enter Last Name or Zip Code : ");
				$scope.pageMessage="Please Select Page Name !";					
				$timeout(function () { $scope.pageAlertMessage = true; }, 5000);
				
				$scope.pageAlertMessage=false;
			}			
			else
			{
				var post_data = 
						{
							'Email':$scope.cus_email,							
							'LastName':$scope.lastName,
							'postalCode':$scope.cus_zip
						  }
					$scope.loading = true;
					
					$http.post('/getMyBookings',post_data)
					
					.success(function(data,headers,status,config){
						$scope.searchtab=false;
						$scope.detailstab=false;
						
						//console.log("Got an Success!");
						//console.log(JSON.stringify({data: data}));
						$scope.loading = false;
						$scope.bookinglist=data;
												
						$timeout(function () { $scope.pageAlertMessage1 = true; }, 5000);						
						$scope.pageAlertMessage1=false;
						
					})
					.error(function(data,headers,status,config)
					{
						
						console.log("Got an error!");
						$scope.loading = false;
						/*$timeout(function () { $scope.pageAlertMessage1 = true; }, 5000);						
						$scope.pageAlertMessage1=false;*/
					});						
			}
			
		};
		
		$scope.filterProduct = {};
	    $scope.filterByProduct = function (blist) {
	        return $scope.filterProduct[blist.ProductType] || noFilter($scope.filterProduct);
	    };
	    
	    function noFilter(filterObj) {
	        for (var key in filterObj) {
	      
	            if (filterObj[key]) {
	                return false;
	            }
	        }
	        return true;
	    }
	    
		$scope.sendEmail=function(id)
		{
			//alert("Id : "+id);
		
			var query="key="+id;
			
				$http.post('/sendConfermationEmail?'+query)
				.success(function(data,headers,status,config){
					
					console.log("Got an Success!");
					console.log(JSON.stringify({data: data}));
					$scope.emailRes=data;
					
					$scope.sentmess = true;
					$timeout(function () { $scope.sentmess = false; }, 5000);					

				})
				.error(function(data,headers,status,config)
				{					
					console.log("Got an error!");
				});			
		};
		
		$scope.getDetails=function(b_id,id,p_t)
		{
			var left = screen.width / 2 - 200, top = screen.height / 2 - 250;
				if(p_t == 'Flight'){
			    $window.open('/booked/'+b_id, '', "scrollbars=1,resizable=1,top=" + top + ",left=" + left + ", width=950, height=600");
				}else if(p_t == 'Hotel'){
				$window.open('/hotels/bookeds/'+b_id+'/'+id, '', "scrollbars=1,resizable=1,top=" + top + ",left=" + left + ", width=950, height=600");
				}else if(p_t == 'Car'){
				$window.open('/car/bookeds/'+b_id+'/'+id, '', "scrollbars=1,resizable=1,top=" + top + ",left=" + left + ", width=950, height=600");
				}
				
		};
		
	}]);																  
																
	myapp.controller('mybookingctrl2',['$http','$window','$scope', function($http,$window,$scope){
																	
																	
	}]).directive('loading', function () {
		
				    return {
				      restrict: 'E',
				      replace:true,
				      template: '<div><img src="/resources/images/loader.gif" width="40"><h2 style="color:#03566c;">Please Wait.....</h2></div>',
				      link: function (scope, element, attr)
				      {
				            scope.$watch('loading', function (val) 
				            {
				                if (val)
				                    $(element).show();
				                else
				                    $(element).hide();
				            });
				      }
				    }
				
			});    
																    



														




