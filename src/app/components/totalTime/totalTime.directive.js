(function() {
  'use strict';

  angular
    .module('seizon')
    .directive('seizonTotalTime', seizonTotalTime);

  /** @ngInject */
  function seizonTotalTime() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/totalTime/totalTime.html',
      scope: {},
      controller: TotalTimeController,
      controllerAs: 'time',
      bindToController: true,
      link: function($scope, element, attrs) {
        $scope.$root.time = 0;
        $scope.$root.totalTime = 0;
        $scope.$root.$on('timeChanged', function(event, args) {
          $scope.$root.totalTime = 0;
          angular.forEach(args.timers, function(val) {
            if(!val) return;
            event.currentScope.totalTime += val;
            event.currentScope.time = new Date(event.currentScope.totalTime);
          });
        });
      }
    };

    return directive;

    /** @ngInject */
    function TotalTimeController($scope, $rootScope) {}
  }

})();
