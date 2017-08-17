/**
 * 
 */

app.factory('BlogService',function($http){
	var blogService={}
	
	var BASE_URL="http://localhost:8081/Project2back"
	
	blogService.addBlog=function(blog){
		return $http.post(BASE_URL+"/saveblog",blog)
	}
	
	return blogService;
})