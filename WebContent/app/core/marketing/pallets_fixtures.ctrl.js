/**
 * 
 */
(function() {

	ssnApp.controller('palletsFixturesCtrl', palletsFixturesCtrl);
	palletsFixturesCtrl.$inject = ['$scope', '$rootScope','$location', '$window', '$http', 'marketingPageService', '$uibModal']
	function palletsFixturesCtrl($scope, $rootScope, $location, $window, $http, marketingPageService, $uibModal) {
		var palletsCtrl = this;
		
		$scope.eventName = "2016 RED, WHITE AND BLUE RACETRACK EVENT";  
		$scope.palletAisle = "LIGHT BULB AISLE"; 
		
		palletsCtrl.showPalletDetails = function (type)  {
			 $location.path('/palletDetails');
		}
		
		palletsCtrl.backToMainPage = function ()  {
			 $location.path('/');
		}
	}
})();
