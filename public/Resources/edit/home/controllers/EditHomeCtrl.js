'use-strict';

var junoonFoundation = angular.module('junoonFoundation');

junoonFoundation.controller('EditHomeCtrl', ['$scope', '$http', '$rootScope', '$location', function($scope, $http, $rootScope, $location){
	$scope.init = function(){
		console.log("I am edit controller");
	}
	$scope.open = function(index, element){
		console.log(index);
		console.log(element);
		// if(element == '/quotes'){
		// 	 var path = $location.path() + element;
		// 	 console.log(path);
		// 	 $location.path(path);
		// 	 // $location.path(path + element);
		// 	 /*console.log($location.path(path + element));*/

		// }
	}

	console.log($rootScope.home.quotes);
	// $scope.editQuotes = {
	// 	[
	// 		{
	// 			"edit" : "0"
	// 		}
	// 	]
	// }
}]);