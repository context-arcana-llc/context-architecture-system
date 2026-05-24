#!/usr/bin/env bash
# CAS one-time setup. Installs the secret-scanning git hooks.
# Run from the repo root:  bash setup.sh

set -e

if ! command -v git >/dev/null 2>&1; then
  echo "Error: Git is not installed."
  echo "Install Git first: https://git-scm.com/downloads"
  exit 1
fi

if [ ! -d ".git" ]; then
  echo "Error: This doesn't look like a Git repository."
  echo "Run this script from the root of your CAS folder, after cloning or running 'git init'."
  exit 1
fi

echo "Configuring git to use .githooks/..."
git config core.hooksPath .githooks

echo "Making hook scripts executable..."
chmod +x .githooks/pre-commit .githooks/pre-push

echo ""
echo "Setup complete."
echo "  - The secret scanner will run before every commit and push."
echo "  - Next: open CONTEXT.md and start filling it in."
echo "  - Then copy SETUP_PROMPT.md into your AI assistant to activate."
