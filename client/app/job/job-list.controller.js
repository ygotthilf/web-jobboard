function JobListController ($scope, $resource){
	var Job = $resource('/api/jobs/:id');
	$scope.jobs = Job.query();
}

angular.module('app').controller('JobListCtrl', JobListController);