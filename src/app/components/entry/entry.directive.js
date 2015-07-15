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
      link: function($scope, element, attrs) {
        $scope.del = function()
        {
          element.remove();
        }
      }
    };

    return directive;

    /** @ngInject */
    function EntryController($scope) {
      var entry = this;
    }
  }

})();
