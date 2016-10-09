(function () {

	ssnApp.controller('ModalInstanceCtrl',ModalInstanceCtrl );
	ModalInstanceCtrl.$inject=['$scope','$uibModalInstance', '$location'];
	function ModalInstanceCtrl($scope, $uibModalInstance , $location) {

		
	
	$scope.confirmYes = function() {
		 $location.path('/');
	};
	
	


	
}
})();