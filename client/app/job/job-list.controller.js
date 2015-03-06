function JobListController($scope, Job) {
    $scope.jobs = Job.query();
}

angular.module('app').controller('JobListCtrl', JobListController);
