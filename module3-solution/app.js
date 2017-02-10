(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);

  FoundItemsDirective.$inject = ['MenuSearchService'];
  function FoundItemsDirective() {
    return {
      scope: {
        //menu: '<',
        foundItems: '@foundItems',
        onRemove: '&'
      },
      templateUrl: 'foundItems.html',
      restrict: "A",
      controller: NarrowItDownController,
      controllerAs: 'menu',
      bindToController: true
    };
  }


  NarrowItDownController.$inject['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    var searchTerm = document.querySelectorAll('input')[0].value.toLowerCase();

    menu.startSearch = function() {
       MenuSearchService.getMatchedMenuItems(searchTerm)
       .then(function(result) {
          console.log('typeof menuFound ', typeof result);
          console.log('menu.found.length = ', result.length);
          menu.found = result;
       });
    };
    //  menu.found = ['beef1', 'beef2', 'beef3'];
      //console.log('menu.found = ', menu.found);
    //  console.log('typeof menuFound ', typeof menu.found);
      //console.log('menu.found.length = ', menu.found.length);
    //}

    menu.removeItem = function (itemIndex) {
      console.log("'this' is: ", this);
      //menu.removeItem(itemIndex);
    };
  };

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
        result.data.menu_items.forEach(function(item) {
          if (item.description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(item.description);
          }
        });
        //console.log('found items = ', foundItems);
        //console.log('typeof found items = ', typeof foundItems);
        //console.log('found items length = ', foundItems.length);
        return foundItems;
      })
      .catch(function(error) {
        console.log("Something went terribly wrong.");
      });
    };
  }

})();
