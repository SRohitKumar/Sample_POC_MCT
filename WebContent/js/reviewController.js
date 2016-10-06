'use strict';
var myAppRoot = angular.module('ICWalkApp',[]); 

myAppRoot.controller('reviewController', function($scope,$http) {
//define some object here
    $http.get("json/marekt.json")
    .then(function(response) {
        $scope.myData = response.data;
    });
});


