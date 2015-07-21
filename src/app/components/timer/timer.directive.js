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
          size: '@',
          duplicate: '='
      },
      link: function($scope, element, attrs) {
        $scope.timerRunning = false;
        $scope.firstStart = true;
        $scope.timeStarted = "";
        $scope.timeEnded = "";

        $scope.$parent.$on('timer-start', function(event, args) {
          $scope.timerRunning = true;
          $scope.firstStart = false;
          if($scope.duplicate) return;
          $scope.$parent.timeStarted = args.date;
          $scope.$parent.timeLog.push({"type": "start", "time": args.date});
          console.log("start timeLog", $scope.$parent.timeLog);
        });

        $scope.$parent.$on('timer-stop', function(event, args) {
          $scope.timerRunning = false;
          if($scope.duplicate) return;
          $scope.$parent.timeEnded = args.date;
          $scope.$parent.timeLog.push({"type": "end", "time": args.date});
          console.log("end timeLog", $scope.$parent.timeLog);
        });

        $scope.$parent.$on('timer-resume', function(event, args) {
          $scope.timerRunning = true;
          if($scope.duplicate) return;
          $scope.$parent.timeStarted = args.date;
          $scope.$parent.timeLog.push({"type": "start", "time": args.date});
          console.log("start timeLog", $scope.$parent.timeLog);
        });

        $scope.$on('timer-tick', function (event, args) {
          if($scope.duplicate) return;
          $scope.$parent.totalTime = args.millis;
        });

        $scope.startStopTimer = function(){
          if ($scope.firstStart == true) {
            // First time started
            $scope.$parent.$broadcast('timer-start', {"date":moment()});
          } else if ($scope.timerRunning == true) {
            // timer is currently running
            $scope.$parent.$broadcast('timer-stop', {"date":moment()});
          } else {
            // timer isn't currently running
            $scope.$parent.$broadcast('timer-resume', {"date":moment()});
          }
        };
      }
    };

    return directive;

    /** @ngInject */
    function TimerController($moment) {}
  }

})();
