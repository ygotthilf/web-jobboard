angular.module('app', ['ngResource', 'ngRoute']);

function RoutesConfig($routeProvider) {

    $routeProvider
        .when('/jobs', {
            controller: 'JobListCtrl',
            templateUrl: 'app/job/job-list.html'
        })
        .when('/jobs/:id', {
            controller: 'JobDetailCtrl',
            templateUrl: 'app/job/job-detail.html',
            resolve: {
                job: fetchJob
            }
        })
        .otherwise('/jobs');
}


function fetchJob(Job, $route) {
    return Job.get({
        jobId: $route.current.params.id
    }).$promise;
}


angular.module('app').config(RoutesConfig);
