/**
 * 
 */
(function() {

	ssnApp.controller('marketingCtrl', marketingCtrl);
	marketingCtrl.$inject = ['$scope', '$rootScope','$window', '$http', 'marketingPageService', '$uibModal']
	function marketingCtrl($scope, $rootScope, $window, $http, marketingPageService, $uibModal) {
		var mctCtrl = this;
		mctCtrl.pdfDownloaded = false;
		mctCtrl.fileType = 0;
		mctCtrl.showPdf = false;
		//mctCtrl.event = [{id:1723,name:'Q1',fixture:'Case State Out'},]
		mctCtrl.fixtures = marketingPageService.getFixtures();
		mctCtrl.show = function(pos){
			//$window.open('pitch_21643_13.ppt');
			if(mctCtrl.fileType === 0){
				$window.open('pitch_21643_13.ppt');
			}else{
				$window.open('pitch_21643_13.xlsx');
			}
//			marketingPageService.marketingShowData(pos).then(
//					function(response){
//
//				           var file = new Blob([response.data], {type: 'application/pdf'});
//				           var fileURL = window.URL.createObjectURL(file);
//				           if(window.navigator.msSaveOrOpenBlob)
//				        	   window.navigator.msSaveOrOpenBlob(file, '1.pdf');
//				           else
//				        	   window.open(fileURL);
//					
//					}, function(response){
//					}
//				);
//
//			var modalInstance = $uibModal.open({
//				templateUrl : 'app/core/marketing/marketing_show_pdf.tmplt.html' ,
//				controller :'marketingShowPDFController30 as mctPDFCtrl30',
//				size : 'lg'
//			});
    		
		};
		
		
	}
})();
