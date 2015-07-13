(function() {
  'use strict';

  angular
    .module('seizon')
    .directive('seizonEntries', seizonEntries);

  /** @ngInject */
  function seizonEntries() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/entries/entries.html',
      scope: {
          defaultQty: '='
      },
      controller: EntriesController,
      controllerAs: 'entries',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function EntriesController() {
      var entries = this;
      entries.currentQty = entries.defaultQty;
      entries.entries = new Array(entries.currentQty);

      entries.add = function()
      {
        entries.entries.push("");
      }
    }
  }

})();
