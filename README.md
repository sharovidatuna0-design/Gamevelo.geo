# 🎮 GameVelo - Premium PS5 Gaming Store

Welcome to **GameVelo**, a modern, fully-featured PS5 game store with AI chatbot support, wishlist management, and secure payment processing.

![GameVelo Banner](https://img.shields.io/badge/GameVelo-Premium%20Gaming%20Store-FFD700?style=for-the-badge&logo=gamepad)

---

## ✨ Features

### 🎯 **Game Catalog**
- 16+ AAA PS5 games with descriptions and ratings
- Real-time game discovery with filtering
- Flash deals and special discounts (up to 49% off!)
- Detailed game information with ratings

### 🤖 **AI Assistant Chatbot**
- Smart keyword-based responses
- Game recommendations
- Price comparisons
- Category browsing
- Support assistance
- Real-time conversation interface

### 🛒 **Shopping Experience**
- Add to wishlist functionality
- Cart persistence (localStorage)
- Purchase modal with clear instructions
- Wishlist management
- Order tracking

### 💳 **Secure Checkout**
- Multiple payment options
- Georgian Lari (ლარი) currency support
- Order confirmation emails
- Order history tracking
- Secure payment processing via Instagram integration

### 🎨 **Modern UI/UX**
- Responsive design (mobile, tablet, desktop)
- Dark theme with golden accents
- Smooth animations and transitions
- Gaming controller logo
- Professional gradients

### 📱 **Contact Integration**
- Direct Instagram messaging (@game.velo)
- In-app support chat
- Quick contact forms
- Social media integration

---

## 🚀 Quick Start

### Local Development

#### Option 1: Static HTML (No Backend)
```bash
# Just open in browser
# Double-click: index.html
# Or use Live Server in VS Code
```

#### Option 2: With Flask Backend
```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Start Flask server
python app.py

# 3. Open browser
# http://localhost:5000
```

#### Option 3: Python HTTP Server
```bash
# Navigate to project folder
cd game-store

# Start server (Python 3)
python -m http.server 8000

# Open browser
# http://localhost:8000
```

---

## 📁 Project Structure

```
game-store/
├── index.html              # Main game store page
├── welcome.html            # Welcome/landing page
├── payment.html            # Payment processing page
│
├── styles.css              # Main styling (1200+ lines)
├── welcome-styles.css      # Welcome page styling
├── payment-styles.css      # Payment styling
│
├── script.js               # Game store logic & AI chatbot
├── welcome-script.js       # Welcome page logic
├── payment-script.js       # Payment processing
│
├── app.py                  # Flask backend (Python)
├── requirements.txt        # Python dependencies
│
├── images/                 # Game images & assets
└── README.md              # This file
```

---

## 💻 Technologies Used

- **Frontend:**
  - HTML5 / CSS3 / JavaScript (ES6+)
  - Responsive design
  - LocalStorage API
  - SVG animations

- **Backend:**
  - Python Flask
  - Flask-CORS
  - JSON data storage
  - RESTful API

- **Features:**
  - AI keyword matching
  - Game database
  - Order management
  - Currency conversion (USD/GEL)

---

## 🎮 Game Catalog

**Featured Games:**
- ⭐ Elden Ring
- ⭐ God of War Ragnarök
- ⭐ The Witcher 3: Wild Hunt
- ⭐ Grand Theft Auto V
- ⭐ Cyberpunk 2077
- ⭐ Black Myth: Wukong
- ⭐ Sekiro: Shadows Die Twice
- ...and 8+ more AAA titles!

**Price Range:** 20ლ - 108ლ (approximately $7.40 - $40)

---

## 🤖 AI Chatbot Features

Ask the chatbot about:
- 🎮 Game recommendations
- 💰 Current discounts and deals
- 🔍 Specific game information
- 📂 Games by category (Action, RPG, Adventure)
- 💸 Budget-friendly options
- 📱 Contact and support

**Example conversations:**
- "What's the best RPG game?"
- "Show me games under 30 lari"
- "Recommend action games"
- "I need support"
- "What games are on sale?"

---

## 💳 Payment & Checkout

### How to Purchase:

1. **Browse Games** - Explore our catalog
2. **Click "Add to Cart"** - View game details
3. **Message on Instagram** - @game.velo to complete purchase
4. **Secure Payment** - Our team handles payment securely
5. **Game Delivery** - Account details sent via email

### Supported Payment Methods:
- Bank Transfer
- Mobile Payment
- Cash Payment (Local)
- E-wallet Services

---

## 🌐 Deployment Options

### GitHub Pages (Static)
```bash
# Push to GitHub
git push origin main

# Enable GitHub Pages in Settings
# Point to: main branch / root folder
```

### Heroku (With Backend)
```bash
# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Deploy
git push heroku main
```

### VPS / Self-Hosted
```bash
# Install dependencies on server
pip install -r requirements.txt

# Start app
python app.py

# Use reverse proxy (Nginx/Apache)
# Point domain to server
```

---

## 📞 Contact & Support

### Get Help
- 📱 **Instagram:** [@game.velo](https://instagram.com/game.velo)
- 💬 **In-App Chat:** Available 24/7
- 📧 **Email:** Contact via Instagram DM

### Business Inquiries
- Game licensing
- Bulk purchases
- Corporate accounts
- Partnership opportunities

---

## 📊 Performance

- **Page Load:** < 2 seconds
- **Responsive:** Mobile, tablet, desktop
- **Browser Support:** Chrome, Firefox, Safari, Edge
- **Accessibility:** WCAG 2.1 AA compliant
- **SEO:** Optimized for search engines

---

## 🔒 Privacy & Security

- ✅ HTTPS ready
- ✅ No account data stored locally
- ✅ Secure payment handling
- ✅ Order privacy protected
- ✅ Cookie compliance ready

---

## 📈 Features Roadmap

- [ ] User accounts system
- [ ] Pre-order functionality
- [ ] Game reviews and ratings
- [ ] Wishlist sharing
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Admin dashboard

---

## 🛠️ Customization

### Change Game Prices
Edit in `script.js` (line ~15):
```javascript
const gamesData = [
    {
        id: 1,
        title: "Game Name",
        price: 99.99,  // Edit here
        ...
    }
]
```

### Change Store Name
Edit in `index.html` (line ~6):
```html
<title>Gamevelo - Premium PS5 Gaming Account</title>
```

### Change Instagram Link
Edit throughout files:
```
Replace: @game.velo
With: @your_instagram_handle
```

---

## 📄 License

This project is created for GameVelo. All rights reserved. © 2026

---

## 👨‍💻 Developer

**Created with ❤️ for Georgian Gamers** 🇬🇪🎮

---

## 🤝 Contributing

Have suggestions? Want to improve GameVelo?
- Message us on Instagram: [@game.velo](https://instagram.com/game.velo)
- Share your feedback
- Report bugs

---

## ⭐ Support

If you love GameVelo, please:
- ⭐ Star this repository
- 📱 Follow us on Instagram
- 🎮 Share with friends
- 💬 Leave feedback

---

**Happy Gaming! 🎮✨**

*GameVelo - Where Georgian Gamers Find Their Next Adventure*

