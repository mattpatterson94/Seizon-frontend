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
    function EntriesController($scope, $compile, $element) {
      var entries = this;
      $scope.add = function()
      {
        $element.find('.entries').append($compile('<seizon-entry></seizon-entry>')($scope));
      }
    }
  }

})();
