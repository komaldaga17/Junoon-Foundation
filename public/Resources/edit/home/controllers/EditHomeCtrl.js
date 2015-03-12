'use-strict';

var junoonFoundation = angular.module('junoonFoundation');

junoonFoundation.controller('EditHomeCtrl', ['$scope', '$http', '$rootScope', '$location', function($scope, $http, $rootScope, $location){
	$scope.init = function(){
		console.log("I am edit controller");
		$scope.quotesList = [];
		console.log($rootScope.home.quotes);
		for(var key in $rootScope.home.quotes){
			$scope.quotesList[key] = {};
			$scope.quotesList[key].name = $rootScope.home.quotes[key].name;
			$scope.quotesList[key].content = $rootScope.home.quotes[key].content;
			// $scope.quotesList[key].isActive = function(){
			// 									return true;
			// 								}
			// console.log(quotes);
		}
		console.error($scope.quotesList);
		console.log(typeof($scope.quotesList));

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

	$scope.clicked = function(index){
		$scope.quotesList[index].isActive = true;;
		console.log($scope.quotesList[index].isActive + "at" + index);
	}
	// $scope.enableInput = false;
	// $scope.initializeEdit = function(index){
	// 	$scope.enableInput = true;
	// 	return $scope.enableInput;
	// }

	// var quotes = $rootScope.home.quotes;
	// console.log(quotes);
	// $scope.quotes = new Object();
}]);