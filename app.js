'use strict';

const fs = require('fs');
const path = require('path');
const { getAbsoluteFSPath } = require('./index');

module.exports = app => {
  // sync api to the same path of plugin
  syncApiToPlugin(app.baseDir);
};

async function syncApiToPlugin(rootDir) {
  // Get document, or throw exception on error
  try {
    const destFile = path.join(getAbsoluteFSPath(), '/swagger.yml');
    // copy api file
    if (fs.existsSync(path.join(rootDir, '/api.yml'))) {
      fs.copyFileSync(path.join(rootDir, '/api.yml'), destFile);
    } else if (fs.existsSync(path.join(rootDir, '/api.json'))) {
      fs.copyFileSync(path.join(rootDir, '/api.json'), destFile);
    } else {
      console.info('!!!Use default swagger.yml，please add your own api.yml/api.json in the root dir.');
    }
  } catch (e) {
    console.error('syncApiToPlugin error:', e);
  }
}
