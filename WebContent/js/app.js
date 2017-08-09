/**
 * 
 */

var app=angular.module("myApp",['ngRoute','ngCookies'])
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
	
})
app.run(function($rootScope,$cookieStore) {
	if($rootScope.currentUser==undefined)
		$rootScope.currentUser = $cookieStore.get("currentUser")
})