# Coffee Shop Web Application

A complete coffee shop ordering system built with HTML, CSS, JavaScript, and Python Flask backend.

## Features

- 🎨 Modern and responsive UI design
- ☕ 8 different coffee options
- 🛒 Shopping cart functionality
- 💾 Local storage for cart persistence
- 📦 Order management system
- 📊 Shop statistics
- 🔄 Real-time order tracking

## Project Structure

```
NewProject/
├── index.html           # Main HTML file
├── styles.css           # Styling
├── script.js            # Frontend JavaScript
├── app.py               # Python Flask backend
├── requirements.txt     # Python dependencies
├── orders.json          # Orders database (created at runtime)
└── README.md            # This file
```

## Installation & Setup

### Prerequisites
- Python 3.7+
- Modern web browser
- Node.js (optional, for static server)

### Step 1: Install Python Dependencies

```bash
pip install -r requirements.txt
```

### Step 2: Run the Flask Backend

```bash
python app.py
```

The backend will start at: `http://localhost:5000`

### Step 3: Open the Frontend

Open `index.html` in your web browser or serve it with a local server:

```bash
# Using Python
python -m http.server 8000

# Then visit: http://localhost:8000
```

## How to Use

1. **Browse Menu**: Scroll to the "Menu" section to see available coffee options
2. **Add to Cart**: Select quantity and click "Add" button
3. **View Cart**: Go to "Cart" section to review your order
4. **Modify Cart**: Change quantities or remove items
5. **Checkout**: Click "Checkout" to place your order
6. **Confirmation**: You'll receive an order ID and confirmation

## API Endpoints

### Create Order
```
POST /api/order
Content-Type: application/json

{
  "items": [
    {"id": 1, "name": "Espresso", "price": 3.50, "quantity": 2}
  ],
  "total": 7.00
}

Response: { "order_id": "ORD00001", "success": true }
```

### Get All Orders
```
GET /api/orders
Response: { "total_orders": 5, "orders": [...] }
```

### Get Specific Order
```
GET /api/orders/ORD00001
Response: { "success": true, "order": {...} }
```

### Get Menu
```
GET /api/menu
Response: { "success": true, "menu": [...] }
```

### Get Statistics
```
GET /api/statistics
Response: { "total_orders": 5, "total_revenue": 25.00, ... }
```

### Update Order Status
```
PUT /api/orders/ORD00001
Content-Type: application/json

{ "status": "completed" }
```

## Coffee Menu

| Coffee | Price | Description |
|--------|-------|-------------|
| Espresso | $3.50 | Strong and bold shot of pure espresso |
| Cappuccino | $4.50 | Espresso with steamed milk and foam |
| Latte | $4.75 | Smooth espresso with lots of steamed milk |
| Mocha | $5.25 | Espresso, steamed milk, and chocolate |
| Americano | $3.75 | Espresso shots with hot water |
| Macchiato | $4.25 | Espresso marked with a small amount of milk |
| Flat White | $5.00 | Espresso with microfoam steamed milk |
| Cold Brew | $4.00 | Smooth and refreshing cold coffee |

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Python 3, Flask, Flask-CORS
- **Storage**: JSON file-based database
- **Storage (Frontend)**: Browser LocalStorage

## Features Overview

### Frontend
- Responsive design that works on all devices
- Smooth scrolling navigation
- Interactive menu with add to cart
- Real-time cart updates
- Local storage persistence

### Backend
- RESTful API with CORS support
- Order management system
- Statistics tracking
- JSON-based data persistence
- Error handling and validation

## Troubleshooting

### "Connection refused" error
- Make sure Flask server is running: `python app.py`
- Verify it's running on localhost:5000

### Cart not persisting
- Check if LocalStorage is enabled in your browser
- Clear browser cache if having issues

### Port already in use
- Change the port in `app.py`: `app.run(..., port=5001)`
- Update the fetch URL in `script.js` accordingly

## Future Enhancements

- User authentication and login
- Payment integration
- Real-time order tracking
- Email notifications
- Admin dashboard
- Database integration (SQLite/PostgreSQL)
- Mobile app version

## License

This project is open source and available for educational purposes.

## Support

For issues or questions, please refer to the code comments or create an issue.

---

Enjoy your Coffee Shop Application! ☕
