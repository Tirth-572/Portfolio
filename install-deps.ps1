# Install frontend + backend deps (fixes common Windows SSL errors)
$ErrorActionPreference = "Stop"
$root = $PSScriptRoot

Write-Host "Using Node with system CA certificates..." -ForegroundColor Cyan
$env:NODE_OPTIONS = "--use-system-ca"

function Install-Folder($name, $path) {
    Write-Host "`nInstalling $name..." -ForegroundColor Yellow
    Set-Location $path
    if (Test-Path "node_modules") {
        try {
            npm install
        } catch {
            Write-Host "Retrying after cleanup..." -ForegroundColor Yellow
            Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
            npm install
        }
    } else {
        npm install
    }
    if ($LASTEXITCODE -ne 0) {
        Write-Host "SSL retry: strict-ssl disabled for this install only..." -ForegroundColor Yellow
        npm install --strict-ssl=false
    }
    Set-Location $root
}

Install-Folder "backend" "$root\backend"
Install-Folder "frontend" "$root\frontend"

if (-not (Test-Path "$root\node_modules\concurrently")) {
    Write-Host "`nInstalling root (concurrently)..." -ForegroundColor Yellow
    Set-Location $root
    npm install
}

Write-Host "`nDone! Run: npm run dev" -ForegroundColor Green
