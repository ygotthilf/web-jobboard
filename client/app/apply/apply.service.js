/* @ngInject */
function Apply ($resource){
  return $resource('/api/applies/:applyId', {applyId : '@_id'});
}

angular.module('app').factory('Apply', Apply);
