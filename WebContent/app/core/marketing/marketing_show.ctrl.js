(function() {
	ssnApp.controller('marketingShowPDFController30', marketingShowPDFController30);

	marketingShowPDFController30.$inject = ['$scope', '$rootScope', '$location','$uibModal', '$log', '$interval', '$filter', '$uibModalInstance']

	function marketingShowPDFController30($scope, $rootScope, $location, $uibModal, $log, $interval, $filter, $uibModalInstance) {
		var mctPDFCtrl30=this;
		mctPDFCtrl30.pdfDownloaded = false;
		mctPDFCtrl30.showPdf = false;
		
		mctPDFCtrl30.ok=function(){
			mctPDFCtrl30.pdfUrl = 'rest/marketing/showData?pos='+$rootScope.pos;
			mctPDFCtrl30.pdfDownloaded = true;
			mctPDFCtrl30.showPdf = true;
		}
		mctPDFCtrl30.ok();
		
		mctPDFCtrl30.closeButton=function(){
			$uibModalInstance.close();
		}
		
	};
		
	})();
