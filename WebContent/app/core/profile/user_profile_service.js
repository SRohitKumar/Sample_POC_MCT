(function () {
	ssnApp.service('userProfileService', userProfileService);
    
    userProfileService.$inject = ['$http'];
    
    function userProfileService($http) {
    	
    	// call to service 'rest/user/userProfile' to load user profile 
    	this.getUserProfile = function(){
    		return $http.get('rest/user/userProfile');
    	};
    	
    	// call to service 'rest/user/userProfile' to load user profile 
    	this.getUserRole = function(){
    		return $http.get('rest/user/userRole');
    	};
    }

})();