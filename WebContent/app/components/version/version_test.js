'use strict';

describe('eventMgmtApp.version module', function() {
  beforeEach(module('eventMgmtApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
