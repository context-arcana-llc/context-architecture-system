'use strict';

const G = '\x1b[32m';
const Y = '\x1b[33m';
const R = '\x1b[31m';
const RESET = '\x1b[0m';

const SYMBOLS = { pass: `${G}✓${RESET}`, warn: `${Y}⚠${RESET}`, fail: `${R}✗${RESET}` };

function report(results) {
  for (const { level, msg } of results) {
    console.log(`  ${SYMBOLS[level]} ${msg}`);
  }
}

function summary(results) {
  const fails = results.filter(r => r.level === 'fail');
  const warns = results.filter(r => r.level === 'warn');

  if (fails.length > 0) {
    console.log(`\n${R}FAIL${RESET} — ${fails.length} error(s), ${warns.length} warning(s)\n`);
    return false;
  }
  if (warns.length > 0) {
    console.log(`\n${Y}PASS${RESET} with ${warns.length} warning(s)\n`);
    return true;
  }
  console.log(`\n${G}PASS${RESET}\n`);
  return true;
}

module.exports = { report, summary };
