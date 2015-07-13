(function() {
  'use strict';

  angular
    .module('seizon')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
