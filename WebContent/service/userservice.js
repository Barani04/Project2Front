/**
 * 
 */

app.factory('UserService',function($http){
	var userService={};
	var BASE_URL="http://localhost:8081/Project2back"
		userService.registerUser=function(user){
			return $http.post(BASE_URL+"/registeruser",user)
	}
	userService.validateUser=function(user){
		return $http.post(BASE_URL+"/validateuser",user)
	}
	
	userService.logout=function(){
		return $http.get(BASE_URL+"/logout")
	}
	
	return userService;
})