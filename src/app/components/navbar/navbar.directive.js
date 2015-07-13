(function() {
  'use strict';

  angular
    .module('seizon')
    .directive('seizonNavbar', seizonNavbar);

  /** @ngInject */
  function seizonNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          // creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;
    }
  }

})();