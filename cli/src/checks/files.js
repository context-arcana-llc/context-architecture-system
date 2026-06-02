'use strict';

const fs = require('fs');
const path = require('path');

const REQUIRED = ['context'];

const RECOMMENDED = [
  'README.md',
  'SETUP_PROMPT.md',
  'AGENTS.md',
  '.githooks/pre-commit',
  '.githooks/pre-push',
];

const CONTEXT_SUBDIRS = [
  '00_index', '01_identity', '02_operations', '03_offers',
  '04_clients', '05_assets', '06_workflows', '07_decisions',
  '08_prompts', '09_outputs', '99_archive',
];

const COMMERCIAL_REQUIRED = [
  'shell',
  'shell/README.md',
  'shell/instructions.md',
  'shell/constraints.md',
];

const COMMERCIAL_RECOMMENDED = [
  'shell/knowledge',
  'shell/prompts',
];

function exists(shellPath, rel) {
  return fs.existsSync(path.join(shellPath, rel));
}

function checkFiles(shellPath, shellType, results) {
  for (const f of REQUIRED) {
    if (!exists(shellPath, f)) {
      results.push({ level: 'fail', msg: `Required directory missing: ${f}/` });
    } else {
      results.push({ level: 'pass', msg: `${f}/ present` });
    }
  }

  for (const f of RECOMMENDED) {
    if (!exists(shellPath, f)) {
      results.push({ level: 'warn', msg: `Recommended file missing: ${f}` });
    }
  }

  if (exists(shellPath, 'context')) {
    for (const sub of CONTEXT_SUBDIRS) {
      if (!exists(shellPath, `context/${sub}`)) {
        results.push({ level: 'warn', msg: `Standard context subdirectory missing: context/${sub}/` });
      }
    }
  }

  if (shellType === 'commercial') {
    for (const f of COMMERCIAL_REQUIRED) {
      if (!exists(shellPath, f)) {
        results.push({ level: 'fail', msg: `Commercial shell required path missing: ${f}` });
      } else {
        results.push({ level: 'pass', msg: `${f} present` });
      }
    }
    for (const f of COMMERCIAL_RECOMMENDED) {
      if (!exists(shellPath, f)) {
        results.push({ level: 'warn', msg: `Commercial shell recommended path missing: ${f}` });
      }
    }
  }
}

module.exports = { checkFiles };
