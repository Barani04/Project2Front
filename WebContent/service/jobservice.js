/**
 * 
 */

app.factory('JobService',function($http){
	var jobService={}
	var BASE_URL="http://localhost:8081/Project2back"
	jobService.saveJob=function(job){
		console.log(job)
		return $http.post(BASE_URL+"/savejob",job)
	}
	return jobService;
})