function JobFactory($resource) {
    return $resource('/api/jobs/:jobId')
}

angular.module('app').factory('Job', JobFactory);
