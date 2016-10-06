'use strict';

angular.module('eventMgmtApp.version', [
  'eventMgmtApp.version.interpolate-filter',
  'eventMgmtApp.version.version-directive'
])

.value('version', '0.1');
