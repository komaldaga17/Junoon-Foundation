'use-strict';

var junoonFoundation = angular.module('junoonFoundation');

junoonFoundation.controller('AboutCtrl', ['$scope', '$rootScope', '$route', '$http', function($scope, $rootScope, $route, $http){

	$scope.init= function(){
		console.log("I am about controller");

	}
}]);