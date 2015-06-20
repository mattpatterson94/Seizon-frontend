(function() {
  'use strict';

  angular
    .module('testGulpAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
