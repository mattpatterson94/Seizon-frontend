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
      vm.timeStarted = "";
      vm.timeEnded = "";

      vm.startStopTimer = function(){
        if (vm.firstStart == true) {
          // First time started
          $rootScope.$broadcast('timer-start');
          vm.timerRunning = true;
          vm.timeStarted = new Date();
          vm.firstStart = false;
        } else if (vm.timerRunning == true) {
          // timer is currently running
          $rootScope.$broadcast('timer-stop');
          vm.timerRunning = false;
          vm.timeEnded = new Date();
        } else {
          // timer isn't currently running
          $rootScope.$broadcast('timer-resume');
          vm.timerRunning = true;
        }
      };
    }
  }

})();
