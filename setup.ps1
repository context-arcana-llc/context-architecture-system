# CAS one-time setup. Installs the secret-scanning git hooks.
# Run from the repo root:  .\setup.ps1

$ErrorActionPreference = "Stop"

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Error: Git is not installed." -ForegroundColor Red
    Write-Host "Install Git first: https://git-scm.com/downloads"
    exit 1
}

if (-not (Test-Path ".git")) {
    Write-Host "Error: This doesn't look like a Git repository." -ForegroundColor Red
    Write-Host "Run this script from the root of your CAS folder, after cloning or running 'git init'."
    exit 1
}

Write-Host "Configuring git to use .githooks/..."
git config core.hooksPath .githooks

Write-Host ""
Write-Host "Setup complete." -ForegroundColor Green
Write-Host "  - The secret scanner will run before every commit and push."
Write-Host "  - On Windows, hooks run under Git Bash automatically (no chmod needed)."
Write-Host "  - Next: open CONTEXT.md and start filling it in."
Write-Host "  - Then copy SETUP_PROMPT.md into your AI assistant to activate."
