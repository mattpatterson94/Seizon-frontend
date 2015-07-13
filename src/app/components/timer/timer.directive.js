(function() {
  'use strict';

  angular
    .module('seizon')
    .directive('seizonTimer', seizonTimer);

  /** @ngInject */
  function seizonTimer() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/timer/timer.html',
      scope: {
          // creationDate: '='
      },
      controller: TimerController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TimerController($rootScope) {
      var vm = this;

      vm.timerRunning = false;
      vm.firstStart = true;

      vm.startStopTimer = function(){
        if (vm.firstStart == true) {
          $rootScope.$broadcast('timer-start');
          vm.timerRunning = true;
          vm.firstStart = false;
        } else if (vm.timerRunning == true) {
          $rootScope.$broadcast('timer-stop');
          vm.timerRunning = false;
        } else {
          $rootScope.$broadcast('timer-resume');
          vm.timerRunning = true;
        }
      };
    }
  }

})();
