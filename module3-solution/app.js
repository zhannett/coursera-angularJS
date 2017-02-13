(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "//davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);

  FoundItemsDirective.$inject = ['MenuSearchService'];
  function FoundItemsDirective() {
    return {
      scope: {
        foundItems: '<',
        title: '@',
        onRemove: '&'
      },
      templateUrl: 'foundItems.html',
      restrict: "A"
    }
  }

  NarrowItDownController.$inject['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.title = '';
    menu.found = [];
    menu.startSearch = function() {
      var searchTerm = document.querySelectorAll('input')[0].value.toLowerCase();
      if (searchTerm === '') {
        menu.found = [];
        menu.title = "Nothing found";
      } else {
        menu.found = MenuSearchService.getMatchedMenuItems(searchTerm)
         .then(function(result) {
           menu.found = result;
           menu.title = "Search Results for " + searchTerm;
           if (menu.found.length === 0) {
             menu.title = "Nothing found";
           }
        });
      }
    }
    menu.removeItem = function (itemIndex) {
      menu.found.splice(itemIndex, 1);
    };
  }

  MenuSearchService.$inject['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
      var foundItems = [];
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      })
      .then(function(result) {
        var allItems = result.data.menu_items;
        allItems.forEach(function(item) {
          if (item.description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(item);
          }
        });
        return foundItems;
      })
      .catch(function(error) {
        console.log("Something went terribly wrong.");
      });
    };
  }

})();
