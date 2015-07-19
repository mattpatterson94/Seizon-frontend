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
      link: function($scope, element, attrs) {
        $scope.collapsed = true;
        $scope.del = function()
        {
          var toDelete = confirm("Are you sure you want to delete this item?");
          if (toDelete) {
            element.remove();
          }
        }
      }
    };

    return directive;

    /** @ngInject */
    function EntryController() {}
  }

})();
