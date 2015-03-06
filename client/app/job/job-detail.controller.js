function JobDetailController($scope, Apply, job) {
    $scope.job = job;

    $scope.applySaved = false;

    $scope.submitApply = function (){

    	$scope.applySaved = false;

    	var apply = new Apply ($scope.apply)

    	apply.job = job._id;

    	apply.$save()
    	.then (function (){
    		$scope.applySaved = true;
    	});
    }
}

angular.module('app').controller('JobDetailCtrl', JobDetailController);
