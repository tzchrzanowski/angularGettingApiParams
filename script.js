(function () {

	var app = angular.module("githubViewer", []);

	var MainController = function ($scope, $http) {

		var onUserComplete = function (response) {
			$scope.user = response.data;
		}
		var onError = function (reason) {
			$scope.error = "Could not get user";
		};

		$http.get("https://api.github.com/users/tzchrzanowski")
			.then(onUserComplete, onError);

		$scope.message = "data from github api";

	};

	app.controller("MainController", MainController);

}());