(function() {
  'use strict';

  angular
    .module('seizon')
    .directive('seizonTimer', seizonTimer);

  /** @ngInject */
  function seizonTimer() {
    var directive = {
      require: "^seizonEntry",
      restrict: 'E',
      templateUrl: 'app/components/timer/timer.html',
      scope: {
          size: '@'
      },
      controller: TimerController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TimerController($scope) {
      var vm = this;

      vm.timerRunning = false;
      vm.firstStart = true;
      vm.timeStarted = "";
      vm.timeEnded = "";

      $scope.$parent.$on('timer-start', function() {
        vm.timerRunning = true;
        vm.timeStarted = new Date();
        vm.firstStart = false;
      });

      $scope.$parent.$on('timer-stop', function() {
        vm.timerRunning = false;
        vm.timeEnded = new Date();
      });

      $scope.$parent.$on('timer-resume', function() {
        vm.timerRunning = true;
      });

      vm.startStopTimer = function(){
        if (vm.firstStart == true) {
          // First time started
          $scope.$parent.$broadcast('timer-start');
        } else if (vm.timerRunning == true) {
          // timer is currently running
          $scope.$parent.$broadcast('timer-stop');
        } else {
          // timer isn't currently running
          $scope.$parent.$broadcast('timer-resume');
        }
      };
    }
  }

})();
