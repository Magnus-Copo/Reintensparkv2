# Configure Windows Firewall to allow Next.js dev server connections
# Run this script as Administrator

$ruleName = "Next.js Development Server - Port 3000"
$port = 3000

# Check if rule already exists
$existingRule = Get-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue

if ($existingRule) {
    Write-Host "Firewall rule already exists. Updating..." -ForegroundColor Yellow
    Remove-NetFirewallRule -DisplayName $ruleName
}

# Create new firewall rule
New-NetFirewallRule -DisplayName $ruleName `
    -Direction Inbound `
    -Protocol TCP `
    -LocalPort $port `
    -Action Allow `
    -Profile Domain,Private,Public `
    -Enabled True

Write-Host "Firewall rule created successfully!" -ForegroundColor Green
Write-Host "Port $port is now open for inbound connections." -ForegroundColor Green
Write-Host ""
Write-Host "Your server should now be accessible from other devices at:" -ForegroundColor Cyan
Write-Host "  http://<your-ip>:$port" -ForegroundColor Cyan
Write-Host ""
Write-Host "To find your IP address, run: ipconfig" -ForegroundColor Yellow
