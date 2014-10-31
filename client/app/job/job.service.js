/* @ngInject */
function Job ($resource){
  return $resource('/api/jobs/:jobId', {jobId : '@_id'});
}

angular.module('app').factory('Job', Job);
