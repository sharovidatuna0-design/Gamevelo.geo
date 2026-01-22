# Gamevelo - PS5 Gaming Platform 🎮

**Premium PS5 Gaming Platform with Professional Payment Processing**

---

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Setup & Run

1. **Navigate to project directory**
   ```powershell
   cd "c:\Users\PCZONE.GE\Documents\NewProject\game-store"
   ```

2. **Install Python dependencies**
   ```powershell
   pip install -r requirements.txt
   ```

3. **Start the Flask backend**
   ```powershell
   python app.py
   ```
   
   The API will be available at:
   - Local: `http://localhost:5000`
   - Network: `http://0.0.0.0:5000` (all interfaces)

4. **Open the store in your browser**
   ```
   http://localhost:5000/index.html
   ```

---

## 📱 Features

### Homepage (welcome.html)
- Professional dark-themed landing page
- Rotating Gamevelo logo (mysterious gaming aesthetic)
- Game suggestions by category (ACTION, RPG, ADVENTURE)
- Real Steam game images (616x353px HD quality)
- Navigation to main store

### Game Store (index.html)
- **Hero Section**: Glowing "GAMEVELO" title with animations
- **16 AAA Games** with real Steam images
- **Black Friday Deals**: 20-33% discounts on all games
- **Shopping Cart**: Persistent storage with localStorage
- **Georgian Currency**: All prices in Lari (ლარი)
- **Responsive Design**: Works on mobile, tablet, desktop

### Payment Page (payment.html) ✨ NEW
- Professional payment form with bank details fields
- Secure aesthetic with lock icons and trust badges
- Order summary with itemized cart display
- Real-time input validation and formatting
- Card number spacing (XXXX XXXX XXXX XXXX)
- Expiry date formatting (MM/YY)
- CVV validation
- Success confirmation page with order ID

---

## 💳 Payment Flow

1. **User clicks "Checkout"** → Cart modal shows total
2. **Clicks "Complete Purchase"** → Redirected to payment.html
3. **Enters payment details**:
   - Cardholder name
   - Email address
   - Card number (16 digits)
   - Expiry date (MM/YY)
   - CVV (3-4 digits)
   - Billing address
4. **Clicks "Pay [Amount]ლ"** → Order is created
5. **Success page** shows order ID and confirmation

---

## 🌍 Publishing Options

### Option 1: Local Network Access (Best for Testing)
Already configured! Access from any device on your network:
```
http://YOUR_IP_ADDRESS:5000
```

To find your IP:
```powershell
ipconfig
```
Look for "IPv4 Address" (usually 192.168.x.x)

**Example**: `http://192.168.1.100:5000`

### Option 2: ngrok (Free Public URL)
1. Download ngrok: https://ngrok.com/download
2. Run:
   ```powershell
   ngrok http 5000
   ```
3. Share the public URL provided (e.g., `https://abc123.ngrok.io`)

### Option 3: Cloud Hosting (.ge Domain)
**Coming Soon**: Instructions for deploying to Georgian hosting provider

---

## 📁 Project Structure

```
game-store/
├── index.html              # Main store page
├── welcome.html            # Landing page
├── payment.html            # NEW: Payment form page
├── styles.css              # Store styling
├── payment-styles.css      # NEW: Payment page styling
├── welcome-styles.css      # Welcome page styling
├── script.js               # Store functionality
├── payment-script.js       # NEW: Payment form handling
├── welcome-script.js       # Welcome page functionality
├── app.py                  # Flask backend API
├── requirements.txt        # Python dependencies
├── orders.json             # Order history
└── README.md               # This file
```

---

## 🎨 Design System

**Colors**:
- Primary Blue: `#58a6ff`
- Secondary Blue: `#79c0ff`
- Dark Background: `#0d1117`, `#161b22`
- Light Text: `#c9d1d9`
- Secondary Text: `#8b949e`
- Accent Red (Discounts): `#ff4444` → `#cc0000`

**Typography**:
- Headings: Space Grotesk
- Body: Inter

**Effects**:
- Glass-morphism: `backdrop-filter: blur(20px)`
- Animations: Glowing text, floating logos, pulsing badges

---

## 💰 Pricing

All prices are in Georgian Lari (ლარი). Current exchange rate: 1 USD ≈ 2.7 GEL

**Games with Black Friday Deals** (20-33% off):
- Elden Ring: 130ლ (was 162ლ) - 20% off
- God of War: 100ლ (was 135ლ) - 26% off
- GTA V: 54ლ (was 81ლ) - 33% off
- The Witcher 3: 76ლ (was 108ლ) - 30% off
- And 12 more premium titles...

---

## 🔧 API Endpoints

### POST /api/checkout
Processes a purchase order.
```json
{
  "cart": [...],
  "email": "customer@email.com",
  "payment_method": "credit_card"
}
```

Response:
```json
{
  "success": true,
  "order_id": "ORD-20251202120000",
  "total": 325.50,
  "currency": "GEL"
}
```

### GET /api/orders
Returns all orders (for admin panel).

### GET /api/health
Health check endpoint.

---

## ⚙️ Configuration

### Change API URL (for production)
In `payment-script.js`, update the order processing URL if needed:
```javascript
// Change from: 'http://localhost:5000/api/checkout'
// To your production domain
```

### Update Payment Validation
Payment form validation is in `payment-script.js`:
- Card number: Must be 16 digits
- Expiry: Must be MM/YY format and not expired
- CVV: Must be 3-4 digits

---

## 📝 Notes

- **Payment Processing**: The payment form validates input but doesn't process actual payments yet. Ready for Stripe/PayPal integration.
- **Order Storage**: Orders are saved to `orders.json` file
- **Cart Persistence**: Uses browser `localStorage` so cart survives page refresh
- **CORS Enabled**: API accepts requests from any origin

---

## 🚨 Troubleshooting

**"Cannot GET /index.html"**
- Make sure Flask is running: `python app.py`
- Check you're accessing the correct port (5000)

**Payment page won't load cart**
- Clear browser cache and localStorage
- Make sure checkout redirects properly to payment.html

**API errors on checkout**
- Verify Flask server is running
- Check browser console (F12) for detailed error messages
- Ensure firewall isn't blocking port 5000

**Images not loading**
- Check internet connection (images load from Steam CDN)
- Verify SSL/HTTPS if using production domain

---

## 📞 Support

For issues or questions:
1. Check browser console (F12) for errors
2. Review Flask terminal for API errors
3. Clear browser cache and localStorage

---

## 📜 License

Gamevelo © 2025. All rights reserved.

---

**Last Updated**: December 2024
**Status**: ✅ Ready for Public Testing

**Next Steps**:
- [ ] Deploy to .ge domain
- [ ] Integrate Stripe/PayPal payment processing
- [ ] Add user accounts and order history
- [ ] Add game library/downloads section
- [ ] Implement referral system
