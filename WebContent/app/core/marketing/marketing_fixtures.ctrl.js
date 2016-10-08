/**
 * 
 */
(function() {

	ssnApp.controller('marketingCtrl', marketingCtrl);
	marketingCtrl.$inject = ['$scope', '$rootScope','$window', '$http', 'marketingPageService', '$uibModal']
	function marketingCtrl($scope, $rootScope, $window, $http, marketingPageService, $uibModal) {
		var mctCtrl = this;
		mctCtrl.ppt = "ppt";
		mctCtrl.xlsx = "xlsx";
		mctCtrl.fileType = "ppt";
		mctCtrl.fixtures = marketingPageService.getFixtures();
		mctCtrl.show = function(pos){
			$window.open(pos+'.'+mctCtrl.fileType);
		};
		
		
	}
})();
