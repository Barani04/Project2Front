/**
 * 
 */
app.controller('UserController',function(UserService,$scope,$rootScope,$location,$cookieStore){
	$scope.user={}
	if($rootScope.currentUser!=undefined){
		UserService.getUser().then(function(response){
		$scope.user=response.data;
	},function(response){
		console.log(response.status)
		$location.path('/editprofile')
	})
	}
	
	$scope.registerUser=function(){
		UserService.registerUser($scope.user).then(function(response) {
			$rootScope.message='Registered Successfully...please login'
			$location.path('/login')	
		},function(response){
			console.log(response.status)
			console.log(response.data)
			$scope.error=response.data
			$location.path('/signup')
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
	
	
	
	$scope.updateUser=function(){
		UserService.updateUser($scope.user).then(function(response){
			alert("Updated Successfully")
			$location.path('/home')
		},function(response){
			console.log(response.data)
			$scope.error=response.data
			if(response.status==401)
				$location.path('/login')
			$location.path('/editprofile')
		})
	}
})