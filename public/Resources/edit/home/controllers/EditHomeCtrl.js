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
			$scope.quotesList[key].isActive = false;
			// console.log(quotes);
		}
		console.log($scope.quotesList);
		console.log(typeof($scope.quotesList));
	}	
	$scope.clicked = function(index){
		$scope.quotesList[index].isActive = true;
		console.log($scope.quotesList[index].isActive + "at" + index);
	}
	$scope.submit = function(){
		alert("I got clicked");
		var requestObject = [];
		// var url = "Resources/JSON/home.json";
		for(var key=0 in $scope.quotesList){
			if($scope.quotesList[key].name !== $rootScope.home.quotes[key].name || $scope.quotesList[key].content !== $rootScope.home.quotes[key].content){
				console.log("They are different");
				requestObject.push($scope.quotesList[key]);
				console.log(requestObject);		
			}else{
				requestObject.push(null);
				console.log("They are Same");
				console.log(requestObject[1]);
				console.log(requestObject[2]);
			}
		}
		$http({
			method : 'POST',
			url	: '/getQuotes',
			data : JSON.stringify(requestObject),
			headers : {'Content-Type' : 'application/json'}			
			}).success(function(data, status, headers, config){
				console.log("This is will execute when there is some response");
			}).error(function(data, status, headers, config){
				console.log("Error Comes while editing the stuff");
			});			
	}
}]);