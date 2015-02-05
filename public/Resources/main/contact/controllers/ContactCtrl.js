var junoonFoundation = angular.module('junoonFoundation');

junoonFoundation.controller('ContactCtrl', function($http, $scope, $rootScope, $route){
	$scope.init = function(){
		console.log("I am a contact controller");
	}
});