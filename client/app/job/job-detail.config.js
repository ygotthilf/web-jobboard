var resolver = {
  job : /* @ngInject */ function ($route, Job){
    return Job.get({ jobId : $route.current.params.jobId }).$promise;
  }
};

/* @ngInject */
function Config ($routeProvider){

  $routeProvider.when('/jobs/:jobId', {
    templateUrl : '/app/job/job-detail.html',
    controller: 'JobDetailCtrl',
    resolve : resolver
  });
}

angular.module('app').config(Config);
