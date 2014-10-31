/* @ngInject */
function JobListCtrl ($scope, jobs){
  $scope.jobs = jobs;
}

angular.module('app').controller('JobListCtrl', JobListCtrl);
