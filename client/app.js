let app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: './partials/login.html'
			})
			.when('/home', {
				templateUrl: './partials/home.html'
			})
			.when('/create', {
				templateUrl: './partials/create.html'
			})
			.when('/survey/:id', {
				templateUrl : './partials/survey.html'
			})	
			.otherwise('/', {
				redirectTo: ('/')
			})			
})