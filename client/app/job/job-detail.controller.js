function JobDetailController ($scope, $resource, $routeParams){

	var jobId = $routeParams.jobId;

	var Job = $resource('/api/jobs/:id');

	$scope.job = Job.get({ id : jobId});
}

angular.module('app')
	.controller('JobDetailCtrl', JobDetailController);