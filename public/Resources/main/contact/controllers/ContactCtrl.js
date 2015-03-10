'use-strict';

var junoonFoundation = angular.module('junoonFoundation');

junoonFoundation.controller('ContactCtrl', ['$http', '$scope', '$rootScope', '$route', function($http, $scope, $rootScope, $route){
	$scope.init = function(){
		console.log("I am a contact controller");
	}
}]);