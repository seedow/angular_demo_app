var omdb = function($http) {

	var baseOmdbSearchUrl = "https://api.themoviedb.org/3/";
	var ACTIONS = {
		search:"search",
		list_genres:"genre/tv/list"
	}
	var apiKey = "0f47a9ce7df633f38a49de2284fdd6a5";


	var getMovie = function(movieName) {
		return $http.get(baseOmdbSearchUrl+ACTIONS.search+"/movie?api_key=" + apiKey + "&query=" + movieName)
			.then(function(response) {
				return response.data.results.map(function(movie) {
					return {
						title: movie.title,
						poster_path: movie.poster_path ? "http://image.tmdb.org/t/p/w500" + movie.poster_path : 'http://www.northlandinspections.com/assets/img/Home/Question.png',
						overview: movie.overview,
						release_date: movie.release_date,
						vote_count: movie.vote_count
					}
				})
			})
	}

	var getActor = function(actorName) {
		return $http.get(baseOmdbSearchUrl+ACTIONS.search+ "/person?api_key=" + apiKey + "&query=" + actorName)
			.then(function(response) {
				return response.data.results.map(function(actor) {
					return {
						name: actor.name,
						popularity: actor.popularity,
						known_for: actor.known_for
					}
				})
			})
	}

	var getListOfGenres = function(){
		return $http.get(baseOmdbSearchUrl+ACTIONS.list_genres +"?api_key=" +apiKey)
			.then(function(response){
				return response.data.genres
			})
	}
// https://api.themoviedb.org/3/genre/16/movies?api_key=0f47a9ce7df633f38a49de2284fdd6a5
	var getMoviesInGenre = function(genreID) {
		return $http.get(baseOmdbSearchUrl+"genre/"+genreID+"/movies?api_key=" + apiKey)
			.then(function(response) {
				return response.data.results.map(function(movie) {
					return {
						title: movie.title,
						poster_path: movie.poster_path ? "http://image.tmdb.org/t/p/w500" + movie.poster_path : 'http://www.northlandinspections.com/assets/img/Home/Question.png',
						overview: movie.overview,
						release_date: movie.release_date,
						vote_count: movie.vote_count
					}
				})
			})
	}



	return {
		getMovie: getMovie,
		getActor: getActor,
		getListOfGenres: getListOfGenres,
		getMoviesInGenre: getMoviesInGenre
	};
}

var module = angular.module('demo_app');
module.factory('omdb', omdb)