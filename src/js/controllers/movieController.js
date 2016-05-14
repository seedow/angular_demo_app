var app = angular.module('demo_app', []);

app.controller('movieController', function($scope, omdb) {


	$scope.searchMovie = function() {
		omdb.getMovie($scope.searchedMovie)
			.then(function(movies) {
				$scope.movies = movies;
			})
	}
})