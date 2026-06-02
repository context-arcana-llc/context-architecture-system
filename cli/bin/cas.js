#!/usr/bin/env node
'use strict';

const path = require('path');
const { validate }     = require('../src/validate');
const { exportShell }  = require('../src/export');

const [,, command, ...rest] = process.argv;

switch (command) {
  case 'validate': {
    const shellPath = rest[0] ? path.resolve(rest[0]) : process.cwd();
    validate(shellPath);
    break;
  }
  case 'export': {
    const adapter   = rest[0];
    const shellPath = rest[1] ? path.resolve(rest[1]) : process.cwd();
    exportShell(adapter, shellPath);
    break;
  }
  default: {
    console.log('cas — Context Architecture System CLI\n');
    console.log('Usage:');
    console.log('  cas validate [path]            Validate a CAS shell');
    console.log('  cas export <adapter> [path]    Export a shell for a specific AI tool');
    console.log('');
    console.log('Adapters: claude, gpt, gemini, cursor, generic');
    process.exit(0);
  }
}
