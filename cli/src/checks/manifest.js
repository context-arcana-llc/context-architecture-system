'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SEMVER_RE = /^\d+\.\d+\.\d+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const VALID_TYPES = ['personal', 'business', 'commercial'];

function parseFrontmatter(content) {
  if (!content.startsWith('---')) return null;
  const end = content.indexOf('\n---', 3);
  if (end === -1) return null;
  return yaml.load(content.slice(4, end));
}

function checkManifest(shellPath, results) {
  const contextPath = path.join(shellPath, 'CONTEXT.md');

  if (!fs.existsSync(contextPath)) {
    results.push({ level: 'fail', msg: 'CONTEXT.md not found' });
    return null;
  }
  results.push({ level: 'pass', msg: 'CONTEXT.md present' });

  const content = fs.readFileSync(contextPath, 'utf8');

  let data;
  try {
    data = parseFrontmatter(content);
  } catch (e) {
    results.push({ level: 'fail', msg: `CONTEXT.md frontmatter is invalid YAML: ${e.message}` });
    return null;
  }

  if (!data) {
    results.push({ level: 'fail', msg: 'CONTEXT.md is missing YAML frontmatter' });
    return null;
  }
  results.push({ level: 'pass', msg: 'YAML frontmatter present and parseable' });

  // Required fields — all types
  for (const field of ['cas_version', 'type', 'owner', 'domain', 'created', 'updated']) {
    if (!data[field] && data[field] !== 0) {
      results.push({ level: 'fail', msg: `Manifest missing required field: ${field}` });
    }
  }

  // type
  if (data.type) {
    if (!VALID_TYPES.includes(data.type)) {
      results.push({ level: 'fail', msg: `Invalid type "${data.type}" — must be personal, business, or commercial` });
    } else {
      results.push({ level: 'pass', msg: `Shell type: ${data.type}` });
    }
  }

  // cas_version semver
  if (data.cas_version) {
    if (!SEMVER_RE.test(String(data.cas_version))) {
      results.push({ level: 'fail', msg: `cas_version "${data.cas_version}" is not valid semver (MAJOR.MINOR.PATCH)` });
    } else {
      results.push({ level: 'pass', msg: `CAS version: ${data.cas_version}` });
    }
  }

  // dates
  for (const field of ['created', 'updated']) {
    if (data[field] && !DATE_RE.test(String(data[field]))) {
      results.push({ level: 'fail', msg: `${field} "${data[field]}" is not a valid ISO 8601 date (YYYY-MM-DD)` });
    }
  }

  // staleness warning
  if (data.updated && DATE_RE.test(String(data.updated))) {
    const days = (Date.now() - new Date(data.updated)) / 86400000;
    if (days > 180) {
      results.push({ level: 'warn', msg: `updated is ${Math.floor(days)} days ago — shell may be stale` });
    }
  }

  // commercial-only fields
  if (data.type === 'commercial') {
    for (const field of ['shell_name', 'shell_version', 'shell_author']) {
      if (!data[field]) {
        results.push({ level: 'fail', msg: `Commercial shell missing required field: ${field}` });
      }
    }
    if (data.shell_version && !SEMVER_RE.test(String(data.shell_version))) {
      results.push({ level: 'fail', msg: `shell_version "${data.shell_version}" is not valid semver` });
    }
  }

  // language optional but recommended
  if (!data.language) {
    results.push({ level: 'warn', msg: 'language not specified — defaulting to en' });
  }

  return data;
}

module.exports = { checkManifest };
