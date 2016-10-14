(function(){
	
	marketingPageMdl.service('marketingPageService',marketingPageService);
	marketingPageService.$inject=['$http'];
	function marketingPageService($http) {
	
		this.fixtures=null;
		this.events=null;
		this.layout={
	            "A": [
	                  {
	                      "type": "container",
	                      "id": 1,
	                      "columns": [
	                          [
	                              {
	                                  "type": "pallet",
	                                  "label": "23",
	                                  "id": "1"
	                              }, {
	                                  "type": "halfpalleth",
	                                  "label": "24",
	                                  "id": "2"
	                              }, {
	                                  "type": "halfpalletv",
	                                  "label": "25",
	                                  "id": "3"
	                              }, {
	                                  "type": "quarterpallet",
	                                  "label": "26",
	                                  "id": "4"
	                              }, {
	                                  "type": "quarterpallet",
	                                  "label": "27",
	                                  "id": "5"
	                              }
	                          ],[]
	                      ]
	                  }
	              ]
		};
		this.design=true;
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
		this.getSystemHealth = function(){
			return $http({
			      url: 'rest/marketing/getSystemHealth',
			      method: 'GET'
			    });
			
		};
		this.getFixtures = function(){
			return this.fixtures;
		};
		this.setFixtures = function(f){
			this.fixtures = f;
		};
		this.getLayout = function(){
			return this.layout;
		};
		this.setLayout = function(f){
			this.layout = f;
		};

		this.getDesign = function(){
			return this.design;
		};
		this.setDesign = function(e){
			this.design = e;
		};
		
		this.getFixtures = function(){
			return this.fixtures;
		};
		
		this.getEvents = function(){
			return this.events;
		};
		this.setEvents = function(f){
			this.events = f;
		};
		
		this.initSlider = function(){
			 $.fn.draggable1 = function() {
			        var offset = null;
			        var start = function(e) {
			          var orig = e.originalEvent;
			          var pos = $(this).position();
			          offset = {
			            x: orig.changedTouches[0].pageX - pos.left,
			            y: orig.changedTouches[0].pageY - pos.top
			          };
			        };
			        var moveMe = function(e) {
			          e.preventDefault();
			          var orig = e.originalEvent;
			          $(this).css({
			            top: orig.changedTouches[0].pageY - offset.y,
			            left: orig.changedTouches[0].pageX - offset.x
			          });
			        };
			        this.bind("touchstart", start);
			        this.bind("touchmove", moveMe);
			      };

			      $(".draggable").draggable1();
				  $(".draggable1").draggable1();
				  $(".draggable2").draggable1();
				  $(".draggable3").draggable1();
		};

	};

})();