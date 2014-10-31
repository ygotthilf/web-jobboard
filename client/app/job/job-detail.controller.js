/* @ngInject */
function JobDetailCtrl ($scope, Apply, job){
  $scope.job = job;

  $scope.apply = new Apply({job : job._id});

  $scope.submitApply = function (){
    $scope.apply.$save();
  };
}

angular.module('app').controller('JobDetailCtrl', JobDetailCtrl);
