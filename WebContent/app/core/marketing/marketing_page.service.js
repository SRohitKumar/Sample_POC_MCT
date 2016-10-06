(function(){
	
	marketingPageMdl.service('marketingPageService',marketingPageService);
	marketingPageService.$inject=['$http'];
	function marketingPageService($http) {
	
		this.fixtures=null;
		this.events=null;
		this.marketingShowData = function(pos){
			return $http({
			      url: 'rest/marketing/showData?pos='+pos,
			      method: 'GET'
			    });
			
		};
		this.getMarketingEvents = function(){
			return $http({
			      url: 'rest/marketing/getEvents',
			      method: 'GET'
			    });
			
		};
		this.setFixtures = function(f){
			this.fixtures = f;
		};
		this.getFixtures = function(){
			return this.fixtures;
		};
		this.setEvents = function(e){
			this.events = e;
		};
		this.getEvents = function(){
			return this.events;
		};
	};

})();