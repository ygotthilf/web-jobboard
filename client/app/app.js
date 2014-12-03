angular.module('app', ['ngResource', 'ngRoute']);

function RouteConfig ($routeProvider){

	$routeProvider
	.when('/jobs', {
		templateUrl : 'app/job/job-list.html',
		controller : 'JobListCtrl'
	})
	.when('/jobs/:jobId', {
		templateUrl : 'app/job/job-detail.html',
		controller : 'JobDetailCtrl'	
	})
	.otherwise ({
		redirectTo : '/jobs'
	});
}

angular.module('app').config(RouteConfig);