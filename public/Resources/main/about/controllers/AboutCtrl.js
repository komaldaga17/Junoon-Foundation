var junoonFoundation = angular.module('junoonFoundation');
junoonFoundation.controller('AboutCtrl', function($scope, $rootScope, $route, $http){
	$scope.init= function(){
		console.log("I am about controller");
		
	}
});