(function() {
  'use strict';

  angular
    .module('seizon')
    .directive('seizonEntry', seizonEntry);

  /** @ngInject */
  function seizonEntry() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/entry/entry.html',
      scope: {
          // creationDate: '='
      },
      controller: EntryController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function EntryController() {
      var vm = this;
    }
  }

})();
