/**
 * 
 */
app.controller('UserController',function(UserService,$scope,$rootScope,$location,$cookieStore){
	$scope.user={}
	
	$scope.registerUser=function(){
		UserService.registerUser($scope.user).then(function(response) {
			$scope.message='Registered Successfully...please login'
			$location.path('/login')	
		},function(response){
			console.log(response.status)
			console.log(response.data)
			$scope.error=response.data
			$location.path('/register')
		})
	}
	
	$scope.validateUser=function(){
		UserService.validateUser($scope.user).then(function(response) {
			console.log(response.data)
			$rootScope.currentUser=response.data
			$cookieStore.put("currentUser",response.data)
			$location.path('/home')
		},function(response){
			$scope.error = response.data
			console.log(response.status)
			$location.path('/login')
		})
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