var app = angular.module('demo_app', []);

app.controller('mainController', function($scope, omdb) {
	omdb.getMovie('Back to the future')
		.then(function(movies) {
			$scope.movies = movies;
		})
})