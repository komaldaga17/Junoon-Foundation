'use-strict';

var junoonFoundation = angular.module('junoonFoundation');

junoonFoundation.controller('EditHomeCtrl', ['$scope', function($scope){
	$scope.init = function(){
		console.log("I am edit controller");
	}
	$scope.showIndex = function(index){
		console.log(index);
	}
}]);