/**
 * 
 */
(function() {

	ssnApp.controller('palletsFixturesCtrl', palletsFixturesCtrl);
	palletsFixturesCtrl.$inject = ['$scope', '$rootScope','$location', '$window', '$http', 'marketingPageService', '$uibModal']
	function palletsFixturesCtrl($scope, $rootScope, $location, $window, $http, marketingPageService, $uibModal) {
		var palletsCtrl = this;
		
		palletsCtrl.showPalletDetails = function (type)  {
			 $location.path('/palletDetails');
		}
	}
})();
