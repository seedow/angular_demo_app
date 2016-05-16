var module = angular.module('demo_app');

module.controller('genreController', function($scope, omdb, $location) {

	$scope.genres = [];
	$scope.movies = [];
	$scope.movieContainerColumns = 9;
	$scope.movies = [];
	$scope.error = "";


	$scope.foundMoviesCount = function() {
		return $scope.movies.length
	}

	$scope.getListOfGenres = function() {
		omdb.getListOfGenres()
			.then(function(genres) {
				$scope.genres = genres;
			})
	}

	$scope.getMoviesInGenre = function(genreID) {
		$scope.movies = [];
		omdb.getMoviesInGenre(genreID)
			.then(function(movies) {
				$scope.movies = movies;
			}, function(errorMessage) {
				// $scope.error = errorMessage;
				$scope.error = "something went wrong :("
			})
	}

	$scope.redirectTo = function(route) {
		$location.path('/' + route);
	}

	$scope.getListOfGenres();
})