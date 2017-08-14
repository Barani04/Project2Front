/**
 * 
 */

app.controller("JobController", function(JobService,$scope,$location) {
					
		/*	$scope.skill = [
						"C",
						"C++",
						"Java",
						"HTML/CSS",
						"Angular","Ruby","Python","Bootstrap","Sql","PHP",
					]
					$scope.exp=[1,2,3,4,5,6,7,8,9,10]
					*/
					
				$scope.saveJob=function(){
				JobService.saveJob($scope.job).then(function(response){
					console.log(response.data)
					
					console.log(response.data)
					console.log(response.status)
					$location.path('/getalljobs')
					
				},function(response){
					/*if(response.status==401)
					$location.path('/home')
				if(response.status==500)
					$location.path('/savejob')*/
					$location.path('/home')
						
				})
			}
	})
		