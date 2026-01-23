# Start Next.js development server with network access
# This script ensures the server is accessible from other devices on the network

Write-Host "Starting Next.js development server..." -ForegroundColor Cyan
Write-Host ""

# Get all network IP addresses
$ipAddresses = Get-NetIPAddress -AddressFamily IPv4 | 
    Where-Object { $_.IPAddress -notlike "127.*" -and $_.InterfaceAlias -notlike "*Loopback*" } |
    Select-Object -ExpandProperty IPAddress

Write-Host "Your server will be accessible at:" -ForegroundColor Green
Write-Host "  http://localhost:3000" -ForegroundColor Yellow
foreach ($ip in $ipAddresses) {
    Write-Host "  http://${ip}:3000" -ForegroundColor Yellow
}
Write-Host ""
Write-Host "Note: If you cannot access from other devices, run:" -ForegroundColor Cyan
Write-Host "  .\configure-firewall.ps1" -ForegroundColor White
Write-Host "  (requires Administrator privileges)" -ForegroundColor Gray
Write-Host ""
Write-Host "Starting server..." -ForegroundColor Cyan
Write-Host ""

# Start the dev server
npm run dev
