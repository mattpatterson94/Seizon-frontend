(function() {
  'use strict';

  angular
    .module('seizon')
    .directive('seizonLog', seizonLog);

  /** @ngInject */
  function seizonLog() {
    var directive = {
      require: "^seizonEntry",
      restrict: 'E',
      templateUrl: 'app/components/log/log.html',
      scope: {
          entryId: '=',
          timeLog: '='
      },
      link: function($scope, element, attrs) {
        $scope.$parent.$on("timeLogChange", function(event, args){
          console.log("timeLogChange!");
        });
      }
    };

    return directive;
  }

})();
