/**
 * 
 */
var ssnApp;
(function(){
// Declare app level module which depends on views, and components
ssnApp = angular.module('ssnApp', ['ui.bootstrap', 'ngRoute', 'ngSanitize','blockUI','ui.select', 
             'ui.grid.cellNav','ui.grid','ui.grid.edit','ui.grid.selection','ui.grid.resizeColumns', 
             'ui.grid.pagination','ui.grid.exporter','ngJsonExportExcel','lr.upload','ssnApp.marketingPageMdl']);

ssnApp.config(['$routeProvider',function ($routeProvider) {
	 'use strict';
	 $routeProvider.when('/', {
    		templateUrl: 'app/core/marketing/marketing_event.tmplt.html',
    		controller: 'marketingEventCtrl as mctEventCtrl'
        }).when('/marketingFixtures', {
        	templateUrl: 'app/core/marketing/marketing_fixtures.tmplt.html',
            controller: 'marketingCtrl as mctCtrl'
     
        }).otherwise({
            redirectTo: '/'
        });
}]);

ssnApp.config(['blockUIConfig',function (blockUIConfig) {
    blockUIConfig.template = '<div class=\"block-ui-overlay\"></div><div class=\"block-ui-message-container\" aria-live=\"assertive\" aria-atomic=\"true\"><div ng-class=\"$_blockUiMessageClass\"><img src="app/images/loading_orange.gif"/></div></div>';
    blockUIConfig.requestFilter = function (config) {
      
    };
}]);

ssnApp.run(['$window', '$location',function($window, $location){
	$window.onload = function(e) {
		$location.path('#/');
	};
}]);


ssnApp.directive('decimalNumber', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            if (!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function (val) {
                if (angular.isUndefined(val)) {
                    val = '';
                }
                var clean = val.replace(/[^\d.\',']/g, '');
                var decimalCheck = clean.split('.');

                decimalCheck[0] = decimalCheck[0].replace(/[^\d]/g, '');
                
                clean = decimalCheck[0];
                
                if (!angular.isUndefined(decimalCheck[1])) {
                    decimalCheck[1] = decimalCheck[1].slice(0, 2);
                    clean = decimalCheck[0] + '.' + decimalCheck[1];
                }
                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }

                return clean;
            });
        }
    };
}]);

ssnApp.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});



})();