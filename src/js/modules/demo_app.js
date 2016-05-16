var app = angular.module('demo_app', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
		.when('/home',{
			templateUrl:"dist/templates/home.html",
			controller:'HomeController'
		})
		.when('/movies',{
			templateUrl:"dist/templates/movieSearch.html",
			controller:'movieController'
		})
		.when('/actors',{
			templateUrl:"dist/templates/actorSearch.html",
			controller:'actorController'
		})
		.when('/genres',{
			templateUrl:"dist/templates/genreSearch.html",
			controller:'genreController'
		})
		.otherwise({ redirectTo: '/home' })

})