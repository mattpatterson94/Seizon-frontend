(function() {
  'use strict';

  angular
    .module('seizon')
    .directive('seizonTotalTime', seizonTotalTime)
    .filter('totalTimeFormat', totalTimeFormat);

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
        $scope.$root.$on('timeChanged', function(event, args) {
          $scope.$root.time = 0;
          angular.forEach(args.timers, function(val) {
            if(!val) return;
            event.currentScope.time += val;
          });
        });
      }
    };

    return directive;

    /** @ngInject */
    function TotalTimeController($scope, $rootScope) {}
  }

  function totalTimeFormat() {

    function checkPlural(value, string) {
      return (value == 1) ? string : (string + "s")
    }

    function totalTimeFormatFilter(value) {
      if (typeof value === 'undefined' || value === null) {
        return '';
      }

      var totalTime = moment.duration(value);
      var result = "";
      if(totalTime.days())
        result += totalTime.days() + " " + checkPlural(totalTime.days(), 'day' + " ");

      if(totalTime.hours())
        result += totalTime.hours() + " " + checkPlural(totalTime.hours(), 'hour' + " ");

      if(totalTime.minutes())
        result += totalTime.minutes() + " " + checkPlural(totalTime.minutes(), 'minute' + " ");

      if(totalTime.seconds())
        result += totalTime.seconds() + " " + checkPlural(totalTime.seconds(), 'second');

      if(!result)
        result = "Nothing";

      return result;
    }

    return totalTimeFormatFilter;
  }

})();
