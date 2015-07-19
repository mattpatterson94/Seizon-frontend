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
      link: function($scope, element, attrs) {
        $scope.timerRunning = false;
        $scope.firstStart = true;
        $scope.timeStarted = "";
        $scope.timeEnded = "";
        $scope.test = "";

        $scope.$parent.$on('timer-start', function() {
          $scope.timerRunning = true;
          $scope.$parent.timeStarted = new Date();
          $scope.firstStart = false;
        });

        $scope.$parent.$on('timer-stop', function() {
          $scope.timerRunning = false;
          $scope.$parent.timeEnded = new Date();
        });

        $scope.$parent.$on('timer-resume', function() {
          $scope.timerRunning = true;
        });

        $scope.$watch('test', function() {
          console.log("Test changed");
        });

        $scope.startStopTimer = function(){
          if ($scope.firstStart == true) {
            // First time started
            $scope.$parent.$broadcast('timer-start');
          } else if ($scope.timerRunning == true) {
            // timer is currently running
            $scope.$parent.$broadcast('timer-stop');
          } else {
            // timer isn't currently running
            $scope.$parent.$broadcast('timer-resume');
          }
        };
      }
    };

    return directive;

    /** @ngInject */
    function TimerController() {}
  }

})();
