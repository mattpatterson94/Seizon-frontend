(function() {
  'use strict';

  angular
    .module('seizon')
    .directive('seizonHeading', seizonHeading);

  /** @ngInject */
  function seizonHeading() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/heading/heading.html',
      scope: {
          // creationDate: '='
      },
      controller: HeadingController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function HeadingController() {
      var vm = this;
    }
  }

})();
