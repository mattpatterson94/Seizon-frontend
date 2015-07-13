(function() {
  'use strict';

  angular
    .module('testGulpAngular')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
