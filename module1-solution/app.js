(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
<<<<<<< HEAD
    $scope.textinput = '';
    $scope.message = '';
    $scope.checkLunch = function() {
      var items = $scope.textinput.split(',');
      $scope.message = '';
      $scope.emptyItemNote = '';
      if ($scope.textinput === '') {
=======
    $scope.list = '';
    $scope.message = '';
    $scope.checkLunch = function() {
      $scope.message = '';
      if ($scope.list === '') {
>>>>>>> 5d83dec217e6f3f5dc0af004b998fb3e586ad003
        $scope.message = 'Please enter data first';
        $scope.fontcolor = {
          "color": "red"
        }
        $scope.bordercolor = {
          "border-color": "red"
        }
<<<<<<< HEAD
      } else {
        items.forEach(function(item) {
          if (item === '')
          $scope.emptyItemNote = 'We do NOT consider and empty item, i.e., , , as an item towards to the count';
        });
        if (items.length <= 3) {
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
=======
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
>>>>>>> 5d83dec217e6f3f5dc0af004b998fb3e586ad003
        }
      }
    }
  }
})();
