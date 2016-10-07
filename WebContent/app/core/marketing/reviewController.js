/**
 * 
 */
(function() {

	ssnApp.controller('reviewController', reviewController);
	reviewController.$inject = ['$scope', '$rootScope','$location', '$window', '$http', 'marketingPageService', '$uibModal']
	function reviewController($scope, $rootScope, $location, $window, $http, marketingPageService, $uibModal) {
		var icwalkReview = this;
		
		$http.get("mockedJson/marekt.json")
	    .then(function(response) {
	        $scope.myData = response.data;
	    });
	}
})();
