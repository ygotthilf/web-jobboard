angular.module('app', ['ngResource', 'ngRoute']);

function RouteConfig ($routeProvider){

	$routeProvider.when('/jobs', {
		templateUrl : 'app/job/job-list.html',
		controller : 'JobListCtrl'
	});

	$routeProvider.otherwise ('/jobs');
}

angular.module('app').config(RouteConfig);