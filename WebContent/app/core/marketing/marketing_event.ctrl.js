(function() {
	ssnApp.controller('marketingEventCtrl', marketingEventCtrl);

	marketingEventCtrl.$inject = ['$scope', '$rootScope','$location', '$http', 'marketingPageService']
	function marketingEventCtrl($scope, $rootScope, $location, $http, marketingPageService) {
		var mctEventCtrl=this;
		marketingPageService.getMarketingEvents().then(
			function(response){
				marketingPageService.setEvents(response.data);
				mctEventCtrl.eventList = response.data;	
			}, function(response){
			}
		);
		
		mctEventCtrl.loadFixtures = function (type)  {
			 angular.forEach(mctEventCtrl.eventList, function(value,key) {
				 if(value.id == type){
					 marketingPageService.setFixtures(value.fixtures);
				 }
			 });
			 $location.path('/marketingFixtures');
		}
	};
		
	})();
