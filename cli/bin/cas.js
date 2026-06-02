#!/usr/bin/env node
'use strict';

const path = require('path');
const { validate } = require('../src/validate');

const [,, command, target] = process.argv;
const shellPath = target ? path.resolve(target) : process.cwd();

switch (command) {
  case 'validate':
    validate(shellPath);
    break;
  default:
    console.log('cas — Context Architecture System CLI\n');
    console.log('Usage:');
    console.log('  cas validate [path]   Validate a CAS shell (defaults to current directory)');
    process.exit(0);
}
