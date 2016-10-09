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
			
			var modalInstance = $uibModal
			.open({
				templateUrl : 'app/core/marketing/saveConfirmation.html',
				controller : "ModalInstanceCtrl",
				scope : $scope
			});
			//submitted successful dialog need to be shown.
			// $location.path('/palletsFixtures');
			
		}
	}
})();


/*<div ng-controller="CustomModalController">
<div class="modal-header">
    <h3 class="modal-title">{{title}}</h3>
</div>
<div class="modal-body">
    {{message}}
</div>
<div class="modal-footer">
    <button class="ad-button ad-blue" type="button" ng-click="confirmAction()"></button>
    <button class="ad-button ad-blue" type="button" ng-click="cancelAction()"></button>
</div>
</div>*/

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
