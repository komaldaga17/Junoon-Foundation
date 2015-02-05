var junoonFoundation = angular.module('junoonFoundation');

junoonFoundation.controller('WorkCtrl', function($scope, $rootScope, $route, $http){
	$scope.init = function()
	{
		console.log("I am Work Controller");
	}
});