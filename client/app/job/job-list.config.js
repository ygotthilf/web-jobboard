var resolver = {
  jobs : /* @ngInject */ function (Job){
    return Job.query().$promise;
  }
};

/* @ngInject */
function Config ($routeProvider){

  $routeProvider.when('/jobs', {
    templateUrl : '/app/job/job-list.html',
    controller: 'JobListCtrl',
    resolve : resolver
  });
}

angular.module('app').config(Config);
