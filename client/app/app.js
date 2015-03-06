angular.module('app', []);

function JobListController($scope) {

    var jobs = [{
        title: 'AngularJS developper'
    }, {
        title: 'Node.js developper'
    }, {
        title: '.NET developper'
    }, {
        title: 'PHP developper'
    }];

    $scope.jobs = jobs;
}

angular.module('app').controller('JobListCtrl', JobListController);
