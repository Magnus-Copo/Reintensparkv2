# Network Access Setup Guide

## 🌐 Accessing the Dev Server from Other Devices

Your Next.js development server is configured to accept connections from other devices on your network.

### Your Network Addresses

Access the server from these URLs:
- **Local**: http://localhost:3000
- **Wi-Fi Network**: http://10.20.176.132:3000
- **Ethernet**: http://192.168.56.1:3000

### Quick Start

1. **Configure Windows Firewall** (one-time setup):
   ```powershell
   # Run as Administrator
   .\configure-firewall.ps1
   ```

2. **Start the development server**:
   ```powershell
   .\start-dev.ps1
   ```
   Or manually:
   ```powershell
   npm run dev
   ```

### Troubleshooting

#### Can't access from other laptops?

**1. Check Windows Firewall**
Run as Administrator:
```powershell
# Check if rule exists
Get-NetFirewallRule -DisplayName "Next.js Development Server - Port 3000"

# If not exists, run:
.\configure-firewall.ps1
```

**2. Verify server is running**
The dev server should show:
```
▲ Next.js 16.0.10
- Local:        http://localhost:3000
- Network:      http://0.0.0.0:3000
```

**3. Check network connectivity**
From another laptop on the same network, ping your server:
```bash
# Replace with your actual IP
ping 10.20.176.132
```

**4. Verify network type**
- Open Windows Settings → Network & Internet
- Ensure your network is set to "Private" (not "Public")
- Public networks block most incoming connections

**5. Check antivirus/security software**
Some antivirus software may block incoming connections. Temporarily disable or add an exception for Node.js.

**6. Ensure both devices are on the same network**
- Check that the other laptop is connected to the same Wi-Fi network
- If using VPN, it may interfere with local network access

### Manual Firewall Configuration

If the script doesn't work, manually configure Windows Firewall:

1. Open Windows Defender Firewall with Advanced Security
2. Click "Inbound Rules" → "New Rule"
3. Rule Type: Port
4. Protocol: TCP, Specific local ports: 3000
5. Action: Allow the connection
6. Profile: Check all (Domain, Private, Public)
7. Name: Next.js Development Server - Port 3000

### Network Configuration Details

The following has been configured in `next.config.ts`:
- `allowedDevOrigins`: Allows connections from all private network IP ranges
  - `192.168.*.*` (most home/office networks)
  - `10.*.*.*` (corporate networks)
  - `172.16.*.*` (some networks)

The development server script (`package.json`) uses:
- `-H 0.0.0.0`: Binds to all network interfaces

### Alternative: Use IP Address Directly

If you know the other laptop's IP address, you can add it specifically:

Edit `next.config.ts`:
```typescript
allowedDevOrigins: ['192.168.1.100', '192.168.1.101'], // Add specific IPs
```

### Security Note

⚠️ **Important**: The wildcard network configurations are for development only. Never deploy these settings to production. The firewall rule and network binding should be disabled when not actively developing.

To remove the firewall rule:
```powershell
Remove-NetFirewallRule -DisplayName "Next.js Development Server - Port 3000"
```
