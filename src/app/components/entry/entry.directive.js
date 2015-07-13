(function() {
  'use strict';

  angular
    .module('seizon')
    .directive('seizonEntry', seizonEntry);

  /** @ngInject */
  function seizonEntry() {
    var directive = {
      require: "^seizonEntries",
      restrict: 'E',
      templateUrl: 'app/components/entry/entry.html',
      scope: {
          entryId: '='
      },
      controller: EntryController,
      controllerAs: 'entry',
      bindToController: true,
    };

    return directive;

    /** @ngInject */
    function EntryController($scope) {
      var entry = this;
      entry.del = function()
      {
        $scope.$parent.entries.entries.splice(entry.entryId, 1);
      }
    }
  }

})();
