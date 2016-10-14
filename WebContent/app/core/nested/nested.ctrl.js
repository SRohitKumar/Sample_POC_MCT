/**
 * The controller doesn't do much more than setting the initial data model
 */
(function() {
	ssnApp.controller('NestedListsDemoController', NestedListsDemoController);

	NestedListsDemoController.$inject = ['$scope', '$rootScope','$location', '$http', 'marketingPageService']
	
	function NestedListsDemoController($scope, $rootScope, $location, $http, marketingPageService) {
		
    marketingPageService.initSlider();
		

	var nestedCtrl = this;
	
	nestedCtrl.showPalletDetails = function (type)  {
		 $location.path('/palletDetails');
	}
	
	
	nestedCtrl.designLayout=marketingPageService.getDesign();
	nestedCtrl.saveLayout = function ()  {
		var layout = nestedCtrl.models.dropzones;
		marketingPageService.setLayout(layout);
	};
    nestedCtrl.models = {
        selected: null,
        templates: [
            {type: "item", id: 2,label: "Item", title:''},
            {type: "pallet", id: 2,label: "", title:'Pallet'},
            {type: "halfpalleth", id: 3,label: "", title:'Half Pallet Vertical'},
            {type: "halfpalletv", id: 3,label: "", title:'Half Pallet Horizontal'},
            {type: "quarterpallet", id: 4,label: "", title:'Quarter Pallet'},
            {type: "separator", id: 3,label: "", title:'Separator'},
            {type: "standee", id: 2,label: "", title:''},
            {type: "stripe", id: 2,label: "", title:''},
            {type: "container", id: 1,label: "", title:'Container', columns: [[], []]}
        ],
        dropzones: {}
    };

	nestedCtrl.models.dropzones=marketingPageService.getLayout();
    $scope.$watch('models.dropzones', function(model) {
        nestedCtrl.modelAsJson = angular.toJson(model, true);
    }, true);

	}
})();
