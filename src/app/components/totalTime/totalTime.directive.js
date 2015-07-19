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
        $scope.$root.time = new Date();
      }
    };

    return directive;

    /** @ngInject */
    function TotalTimeController($scope, $rootScope) {}
  }

})();
