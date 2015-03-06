function ApplyFactory($resource) {
    return $resource('/api/applies/:applyId')
}

angular.module('app').factory('Apply', ApplyFactory);
