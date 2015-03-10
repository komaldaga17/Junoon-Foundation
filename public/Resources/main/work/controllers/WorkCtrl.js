'use-strict';

var junoonFoundation = angular.module('junoonFoundation');

junoonFoundation.controller('WorkCtrl', ['$scope', '$rootScope', '$route', '$http', function($scope, $rootScope, $route, $http){
	$scope.init = function()
	{
		console.log("I am Work Controller");
	}
}]);