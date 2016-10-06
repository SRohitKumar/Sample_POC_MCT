(function () {
	ssnApp.controller('ssnAppCtrl', ssnAppCtrl);
	
	// Injecting required dependencies
	ssnAppCtrl.$inject = ['$scope', '$rootScope', '$location', 'userProfileService'];
	
	// Controller callback function
	function ssnAppCtrl($scope, $rootScope, $location, userProfileService) {
		
		$scope.loadApplication = loadApplication;
		
		
		userProfileService.getUserProfile().then(function(response){
			if(response.data) {
				$scope.userName = response.data.commonName;
				$rootScope.userName= response.data.commonName;
				$rootScope.userId= response.data.userId;
				
			}
		});
		
		
		function loadApplication(type) {
			$location.path('/'+type);
		}
	}
})();