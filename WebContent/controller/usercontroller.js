/**
 * 
 */
app.controller('UserController',function(UserService,$scope,$location){
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
			$location.pat('/home')
		},function(response){
			$scope.error = response.data
			console.log(response.status)
			$location.path('/login')
		})
	}
	
	$scope.logout=function(){
		UserService.logout().then(function() {
			$scope.message='Logged Out Successfully'
			$location.path('/home')
		},function(){
			console.log(response.status)
			console.log(response.data)
		})
	}
})