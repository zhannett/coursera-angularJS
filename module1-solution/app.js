(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.list = '';
    $scope.message = '';
    $scope.checkLunch = function() {
      $scope.message = '';
      if ($scope.list === '') {
        $scope.message = 'Please enter data first';
        $scope.fontcolor = {
          "color": "red"
        }
        $scope.bordercolor = {
          "border-color": "red"
        }
      } else if ($scope.list.split(',').length <= 3) {
        $scope.message = 'Enjoy!';
        $scope.fontcolor = {
          "color": "green"
        }
        $scope.bordercolor = {
          "border-color": "green"
        }
      } else {
        $scope.message = 'Too much!';
        $scope.fontcolor = {
          "color": "green"
        }
        $scope.bordercolor = {
          "border-color": "green"
        }
      }
    }
  }
})();
