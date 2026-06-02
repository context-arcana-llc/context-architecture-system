'use strict';

const { execSync } = require('child_process');
const path = require('path');

const cas = path.join(__dirname, '../bin/cas.js');

const fixtures = [
  { name: 'valid-personal',        expectPass: true  },
  { name: 'valid-commercial',      expectPass: true  },
  { name: 'missing-context-dir',   expectPass: false },
  { name: 'invalid-manifest-type', expectPass: false },
  { name: 'missing-frontmatter',   expectPass: false },
];

let passed = 0;
let failed = 0;

for (const { name, expectPass } of fixtures) {
  const fixturePath = path.join(__dirname, 'fixtures', name);
  let exitedClean = false;
  try {
    execSync(`node "${cas}" validate "${fixturePath}"`, { stdio: 'pipe' });
    exitedClean = true;
  } catch {}

  const ok = exitedClean === expectPass;
  const symbol = ok ? '\x1b[32m✓\x1b[0m' : '\x1b[31m✗\x1b[0m';
  const note = !ok
    ? ` — expected ${expectPass ? 'PASS' : 'FAIL'} but got ${exitedClean ? 'PASS' : 'FAIL'}`
    : '';
  console.log(`${symbol} ${name}${note}`);
  ok ? passed++ : failed++;
}

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
