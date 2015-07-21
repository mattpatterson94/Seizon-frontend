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
            $scope.$parent.timers[$scope.entryId] = 0;
            element.remove();
          }
        }

        $scope.timeLog = [];
        $scope.$watch('timeLog', function(newVal, oldVal){
          console.log('timeLogChange broadcast');
          if(newVal!=oldVal) {
            console.log('timeLogChange broadcast: newVal');
            $scope.$broadcast('timeLogChange',{"val":newVal});
          }
        }, true);

        $scope.$watch('timeEnded', function() {
          if(!$scope.$parent.timers[$scope.entryId]) $scope.$parent.timers[$scope.entryId] = 0;
          if (!$scope.timeEnded || !$scope.timeStarted) return;
          $scope.$parent.timers[$scope.entryId] += $scope.timeEnded.diff($scope.timeStarted, 'milliseconds', true);
        });
      }
    };

    return directive;

    /** @ngInject */
    function EntryController() {}
  }

})();
