'use strict';

module.exports.getAbsoluteFSPath = function () {
  // detect whether we are running in a browser or nodejs
  if (typeof module !== "undefined" && module.exports) {
    return require("path").resolve(__dirname)
  }
  throw new Error('getAbsoluteFSPath can only be called within a Nodejs environment');
}
