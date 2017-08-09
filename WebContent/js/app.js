/**
 * 
 */

var app=angular.module("myApp",['ngRoute'])
app.config(function($routeProvider) {
	$routeProvider
	.when('/home',{
		templateUrl:'views/home.html'
	})
	.when('/signup',{
		templateUrl:'views/signup.html',
		controller:'UserController'
	})
	.when('/signup',{
		templateUrl:'views/signup.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/logout',{
		controller:'UserController'
	})
})