(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    var menuItems = MenuSearchService.getMenuItems();
    console.log('menuItems = ', menuItems);
  };

  MenuSearchService.$inject['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMenuItems = function() {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      });
      return response;
    }
  }

})();
