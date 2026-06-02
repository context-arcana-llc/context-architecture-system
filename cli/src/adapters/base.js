'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Priority order for context sections — highest priority first
const SECTION_PRIORITY = [
  '01_identity', '02_operations', '03_offers', '06_workflows',
  '07_decisions', '08_prompts', '04_clients', '05_assets',
  '00_index', '09_outputs', '99_archive',
];

const SECTION_LABELS = {
  '00_index':    'Index',
  '01_identity': 'Identity',
  '02_operations': 'Operations',
  '03_offers':   'Offers',
  '04_clients':  'Clients',
  '05_assets':   'Assets',
  '06_workflows':'Workflows',
  '07_decisions':'Decisions',
  '08_prompts':  'Prompts',
  '09_outputs':  'Outputs',
  '99_archive':  'Archive',
};

function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

function parseFrontmatter(content) {
  if (!content.startsWith('---')) return { meta: null, body: content };
  const end = content.indexOf('\n---', 3);
  if (end === -1) return { meta: null, body: content };
  try {
    return { meta: yaml.load(content.slice(4, end)), body: content.slice(end + 4).trim() };
  } catch {
    return { meta: null, body: content };
  }
}

function readMarkdownFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath)
    .filter(f => f.endsWith('.md') && f !== 'README.md' && !f.startsWith('.'))
    .sort()
    .map(f => {
      const content = fs.readFileSync(path.join(dirPath, f), 'utf8');
      const { body } = parseFrontmatter(content);
      return { name: f.replace(/\.md$/, ''), content: body };
    });
}

function loadShell(shellPath) {
  const contextMdPath = path.join(shellPath, 'CONTEXT.md');
  if (!fs.existsSync(contextMdPath)) throw new Error('CONTEXT.md not found — is this a CAS shell?');

  const { meta } = parseFrontmatter(fs.readFileSync(contextMdPath, 'utf8'));
  if (!meta) throw new Error('CONTEXT.md is missing YAML frontmatter');

  // shell/ layer for commercial shells
  const shellLayer = [];
  if (meta.type === 'commercial') {
    const shellDir = path.join(shellPath, 'shell');
    for (const f of ['instructions.md', 'constraints.md']) {
      const fp = path.join(shellDir, f);
      if (fs.existsSync(fp)) {
        shellLayer.push({ name: f.replace(/\.md$/, ''), content: fs.readFileSync(fp, 'utf8') });
      }
    }
    const knowledgeDir = path.join(shellDir, 'knowledge');
    for (const file of readMarkdownFiles(knowledgeDir)) {
      shellLayer.push({ name: `knowledge/${file.name}`, content: file.content });
    }
  }

  // context/ sections in priority order
  const sections = [];
  for (const dir of SECTION_PRIORITY) {
    const files = readMarkdownFiles(path.join(shellPath, 'context', dir));
    if (files.length > 0) sections.push({ dir, label: SECTION_LABELS[dir], files });
  }

  return { meta, shellLayer, sections };
}

module.exports = { loadShell, estimateTokens, SECTION_LABELS };
