'use strict';

const { checkManifest } = require('./checks/manifest');
const { checkFiles } = require('./checks/files');
const { report, summary } = require('./reporter');

function validate(shellPath) {
  const results = [];

  console.log(`\nCAS Validator\n`);
  console.log(`Validating: ${shellPath}\n`);

  const manifest = checkManifest(shellPath, results);
  checkFiles(shellPath, manifest?.type ?? null, results);

  report(results);
  const passed = summary(results);

  process.exit(passed ? 0 : 1);
}

module.exports = { validate };
