/* @ngInject */
function Config ($routeProvider){
  $routeProvider.otherwise('/jobs');
}

angular.module('app').config(Config);
