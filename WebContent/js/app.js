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
	.when('/editprofile',{
		templateUrl:'views/updateprofile.html',
		controller:'UserController'
	})
	.when('/jobform',{
		templateUrl:'views/jobform.html',
		controller:'JobController'
	
	})
	
	.when('/getalljobs',{
		templateUrl:'views/jobspage.html',
		controller:'JobController'
	
	})
	
	.when('/addblog',{
		templateUrl:'views/blogform.html',
		controller:'BlogController'
	
	})
	
	.otherwise({
		templateUrl:'views/home.html'
	})
	
})
app.run(function(UserService,$rootScope,$cookieStore,$location) {
	if($rootScope.currentUser==undefined){
		$rootScope.currentUser = $cookieStore.get("currentUser")
	}
		$rootScope.logout=function(){
		UserService.logout().then(function(response) {
			$rootScope.message='Logged Out Successfully'
				delete $rootScope.currentUser
				$cookieStore.remove("currentUser")
				$location.path('/login')
		},function(response){
			$scope.error=response.data
			$location.path('/login')
		})
	}
})