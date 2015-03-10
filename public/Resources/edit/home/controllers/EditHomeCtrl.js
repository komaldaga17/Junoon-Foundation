'use-strict';

var junoonFoundation = angular.module('junoonFoundation');

junoonFoundation.controller('EditHomeCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
	$scope.init = function(){
		console.log("I am edit controller");
	}
	$scope.showIndex = function(index){
		console.log(index);
	}
}]);