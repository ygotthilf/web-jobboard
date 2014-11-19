function JobListController ($scope, $resource, $log){
	$scope.name = "Yoann";

	var Job = $resource('/api/jobs/:id');

	$scope.jobs = Job.query ();
}

angular.module('app').controller('JobListCtrl', JobListController);