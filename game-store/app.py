from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import json
import os

app = Flask(__name__)
CORS(app)

# File to store orders
ORDERS_FILE = 'orders.json'

def load_orders():
    if os.path.exists(ORDERS_FILE):
        with open(ORDERS_FILE, 'r') as f:
            return json.load(f)
    return []

def save_orders(orders):
    with open(ORDERS_FILE, 'w') as f:
        json.dump(orders, f, indent=2)

@app.route('/api/checkout', methods=['POST'])
def checkout():
    """Handle checkout and process purchase"""
    try:
        data = request.json
        
        if not data or 'cart' not in data:
            return jsonify({'success': False, 'message': 'Invalid cart data'}), 400
        
        cart = data.get('cart', [])
        customer_email = data.get('email', 'guest@gamevelo.com')
        
        if not cart:
            return jsonify({'success': False, 'message': 'Cart is empty'}), 400
        
        # Calculate total
        total = sum(item.get('price', 0) * item.get('quantity', 1) for item in cart)
        
        # Create order
        order = {
            'order_id': f"ORD-{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'customer_email': customer_email,
            'cart': cart,
            'total': round(total, 2),
            'status': 'completed',
            'payment_method': data.get('payment_method', 'credit_card')
        }
        
        # Save order
        orders = load_orders()
        orders.append(order)
        save_orders(orders)
        
        return jsonify({
            'success': True,
            'message': 'Purchase successful!',
            'order_id': order['order_id'],
            'total': order['total'],
            'currency': 'GEL',
            'order': order
        }), 200
    
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/orders', methods=['GET'])
def get_orders():
    """Get all orders"""
    try:
        orders = load_orders()
        return jsonify({'success': True, 'orders': orders}), 200
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/orders/<order_id>', methods=['GET'])
def get_order(order_id):
    """Get specific order by ID"""
    try:
        orders = load_orders()
        order = next((o for o in orders if o['order_id'] == order_id), None)
        
        if not order:
            return jsonify({'success': False, 'message': 'Order not found'}), 404
        
        return jsonify({'success': True, 'order': order}), 200
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'ok', 'message': 'Gamevelo API is running'}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
