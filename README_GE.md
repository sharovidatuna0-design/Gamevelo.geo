# Gamevelo - Georgian PS5 Gaming Store

## Georgian Localization & Public Access Setup

### ✅ Complete Georgian Integration
- **Currency**: All prices now in Georgian Lari (ლარი)
- **Conversion Rate**: 1 USD = 2.7 GEL used for pricing
- **Backend**: Flask API configured for public access (0.0.0.0:5000)

### 🚀 To Make Site Publicly Accessible

#### Option 1: Local Network Access (Same WiFi)
1. Find your computer's IP address:
   ```powershell
   ipconfig /all
   ```
   Look for "IPv4 Address" (usually 192.168.x.x)

2. Others can access using:
   ```
   http://YOUR_IP:5000
   ```

#### Option 2: Public Internet Access with ngrok
1. Install ngrok: https://ngrok.com/download
2. Run ngrok to expose your server:
   ```powershell
   ngrok http 5000
   ```
3. ngrok will give you a public URL (e.g., https://abc123.ngrok.io)
4. Share this URL with others to access remotely

#### Option 3: .GE Domain Hosting
1. **Register .ge Domain**:
   - Register at: https://www.whois.ge/ or contact Georgian registrar
   - Domain costs ~10-20 GEL/year

2. **Hosting Options**:
   - **Option A - VPS Hosting** (recommended):
     - Host providers with .ge support: Silknet, DataLine, or international VPS (DigitalOcean, Linode, etc.)
     - Cost: 50-200 GEL/month
     - Deploy Flask app to VPS
   
   - **Option B - Free Hosting** (limited):
     - Vercel, Netlify (frontend only, API needs separate hosting)
     - Heroku (free tier removed, but alternatives exist)

3. **DNS Setup**:
   - Point your .ge domain to your server's IP in DNS settings
   - Update API calls in script.js from `localhost:5000` to `yourdomain.ge`

### 📝 Current Configuration

**Frontend Files**:
- `welcome.html` - Landing page with game suggestions
- `index.html` - Store page with games and cart
- `welcome-styles.css`, `welcome-script.js` - Landing page styling
- `styles.css`, `script.js` - Store page styling

**Backend**:
- `app.py` - Flask API for checkout processing
- `requirements.txt` - Python dependencies
- `orders.json` - Stores order history

### 🔧 Running Locally

1. Install dependencies:
   ```powershell
   pip install -r requirements.txt
   ```

2. Start Flask server (listens on all interfaces):
   ```powershell
   python app.py
   ```
   Server runs on `http://0.0.0.0:5000`

3. Open in browser:
   - Local: `http://localhost:5000`
   - Local Network: `http://192.168.x.x:5000` (replace with your IP)

### 💳 Purchase Processing
- All prices in Georgian Lari (ლარი)
- Purchase orders saved to `orders.json`
- Each purchase gets unique Order ID (ORD-YYYYMMDDHHMMSS format)

### 📞 Support for .GE Domain Registration
Contact Georgian domain registrars:
- **Registry**: https://www.whois.ge/
- **Popular Registrars**: 
  - Silknet
  - Caucasus Online
  - DataLine
  - TLD.GE

---
**Made with ❤️ for Georgian Gamers** 🇬🇪🎮
