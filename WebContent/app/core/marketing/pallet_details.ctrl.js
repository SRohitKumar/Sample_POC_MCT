/**
 * 
 */
(function() {
	
	
	ssnApp.controller('palletDetailsController', palletDetailsController);
	palletDetailsController.$inject = ['$scope', '$rootScope','$location', '$window', '$http', 'marketingPageService', '$uibModal']
	function palletDetailsController($scope, $rootScope, $location, $window, $http, marketingPageService, $uibModal) {
		var palletDtlCtrl = this;
		
		$http.get("mockedJson/palletDetails.json")
	    .then(function(response) {
	    	palletDtlCtrl.palletData = response.data;
	        angular.forEach(palletDtlCtrl.palletData,function(value,key){
	            if(value.requestId==1){
	            	palletDtlCtrl.palletDto= value;
	                //console.log(palletDtlCtrl.palletDto);
	            }
	        })
	    });
	        
		
		palletDtlCtrl.backToPalletFixtures = function ()  {
			 $location.path('/palletsFixtures');
		}
		
		palletDtlCtrl.submitReview = function() {
			//submitted successful dialog need to be shown.
			 $location.path('/palletsFixtures');
		}
	}
})();

/*
myAppRoot.controller('palletDetailsController', function($scope,$http) {
//define some object here
        $http.get("palletDetails.json")
    .then(function(response) {
        $scope.palletData = response.data;
        angular.forEach($scope.palletData,function(value,key){
            if(value.requestId==1){
               $scope.productDto= value;
                console.log($scope.productDto);
            }
        })
        
    });
});

*/
