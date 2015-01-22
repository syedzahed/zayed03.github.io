var app = angular.module('app', ['ngResource']);

app.factory('Post', ['$resource', function($resource) {
  return $resource("http://localhost:3000/posts/:id",
  {
    id: '@id'
  });
}]);

app.controller('indexCtrl', ['$scope', 'Post', function($scope, Post){

}]);

app.controller('newCtrl', ['$scope', 'Post', '$window', function($scope, Post, $window){
  $scope.post = {title: '', name: '', body: '', style: 'default'};
  $scope.styles = ["default", "success", "primary", "info", "warning", "danger"];
}]);

app.directive('preview', function(){
  return {
    restrict: 'E',
    templateUrl: 'show.html',
    scope: false,
    replace: true
  }

});
