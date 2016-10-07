/**
 * 
 */
(function() {

	ssnApp.controller('palletsFixturesCtrl', palletsFixturesCtrl);
	palletsFixturesCtrl.$inject = ['$scope', '$rootScope','$location', '$window', '$http', 'marketingPageService', '$uibModal']
	function palletsFixturesCtrl($scope, $rootScope, $location, $window, $http, marketingPageService, $uibModal) {
		var palletsCtrl = this;
		
		palletsCtrl.loadFixtures = function (type)  {
			 $location.path('/ictWalkReview');
		}
	}
})();
