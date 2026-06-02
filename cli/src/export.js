'use strict';

const fs = require('fs');
const path = require('path');
const { exportClaude }   = require('./adapters/claude');
const { exportGpt }      = require('./adapters/gpt');
const { exportGemini }   = require('./adapters/gemini');
const { exportCursor }   = require('./adapters/cursor');
const { exportGeneric }  = require('./adapters/generic');

const ADAPTERS = {
  claude:  { fn: exportClaude,  file: 'claude.md'  },
  gpt:     { fn: exportGpt,     file: 'gpt.md'     },
  gemini:  { fn: exportGemini,  file: 'gemini.md'  },
  cursor:  { fn: exportCursor,  file: 'cursor.md'  },
  generic: { fn: exportGeneric, file: 'generic.md' },
};

const G = '\x1b[32m';
const R = '\x1b[31m';
const RESET = '\x1b[0m';

function exportShell(adapter, shellPath) {
  if (!adapter) {
    console.log('Usage: cas export <adapter> [path]\n');
    console.log('Adapters: claude, gpt, gemini, cursor, generic');
    process.exit(0);
  }

  const target = ADAPTERS[adapter];
  if (!target) {
    console.error(`${R}Unknown adapter "${adapter}"${RESET} — available: ${Object.keys(ADAPTERS).join(', ')}`);
    process.exit(1);
  }

  let output;
  try {
    output = target.fn(shellPath);
  } catch (err) {
    console.error(`${R}Export failed:${RESET} ${err.message}`);
    process.exit(1);
  }

  const exportsDir = path.join(shellPath, 'exports');
  fs.mkdirSync(exportsDir, { recursive: true });

  const outPath = path.join(exportsDir, target.file);
  fs.writeFileSync(outPath, output, 'utf8');

  const relPath = path.relative(process.cwd(), outPath);
  const tokens = Math.ceil(output.length / 4).toLocaleString();
  console.log(`${G}✓${RESET} Exported to ${relPath} (~${tokens} tokens)`);
}

module.exports = { exportShell };
