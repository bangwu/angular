var test=angular.module("test",[]);
test.controller("MyCtrl",['$scope',function($scope) {
  $scope.action = function() {
    $scope.name = 'OK';
  }
  $scope.name = 'World';
}]);