from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import json
import os
from pathlib import Path

app = Flask(__name__)
CORS(app)

# Database file for storing orders
ORDERS_FILE = 'orders.json'

# Helper functions
def load_orders():
    """Load orders from JSON file"""
    if os.path.exists(ORDERS_FILE):
        with open(ORDERS_FILE, 'r') as f:
            return json.load(f)
    return []

def save_orders(orders):
    """Save orders to JSON file"""
    with open(ORDERS_FILE, 'w') as f:
        json.dump(orders, f, indent=2)

def generate_order_id():
    """Generate a unique order ID"""
    orders = load_orders()
    if orders:
        last_id = int(orders[-1]['order_id'].replace('ORD', ''))
        return f"ORD{last_id + 1:05d}"
    return "ORD00001"

# Routes

@app.route('/', methods=['GET'])
def home():
    """Home route"""
    return jsonify({
        'message': 'Coffee Shop API',
        'version': '1.0',
        'endpoints': {
            'POST /api/order': 'Place a new order',
            'GET /api/orders': 'Get all orders',
            'GET /api/orders/<order_id>': 'Get specific order',
            'GET /api/menu': 'Get menu items',
            'GET /api/statistics': 'Get shop statistics'
        }
    })

@app.route('/api/order', methods=['POST'])
def create_order():
    """Create a new order"""
    try:
        data = request.json
        items = data.get('items', [])
        total = data.get('total', 0)

        if not items:
            return jsonify({'error': 'No items in order'}), 400

        # Generate order ID
        order_id = generate_order_id()

        # Create order object
        order = {
            'order_id': order_id,
            'items': items,
            'total': round(total, 2),
            'timestamp': datetime.now().isoformat(),
            'status': 'pending'
        }

        # Save order
        orders = load_orders()
        orders.append(order)
        save_orders(orders)

        return jsonify({
            'success': True,
            'order_id': order_id,
            'message': 'Order placed successfully',
            'order': order
        }), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/orders', methods=['GET'])
def get_orders():
    """Get all orders"""
    try:
        orders = load_orders()
        return jsonify({
            'success': True,
            'total_orders': len(orders),
            'orders': orders
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/orders/<order_id>', methods=['GET'])
def get_order(order_id):
    """Get specific order"""
    try:
        orders = load_orders()
        order = next((o for o in orders if o['order_id'] == order_id), None)

        if not order:
            return jsonify({'error': 'Order not found'}), 404

        return jsonify({
            'success': True,
            'order': order
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/menu', methods=['GET'])
def get_menu():
    """Get menu items"""
    menu = [
        {'id': 1, 'name': 'Espresso', 'price': 3.50, 'description': 'Strong and bold shot of pure espresso'},
        {'id': 2, 'name': 'Cappuccino', 'price': 4.50, 'description': 'Espresso with steamed milk and foam'},
        {'id': 3, 'name': 'Latte', 'price': 4.75, 'description': 'Smooth espresso with lots of steamed milk'},
        {'id': 4, 'name': 'Mocha', 'price': 5.25, 'description': 'Espresso, steamed milk, and chocolate'},
        {'id': 5, 'name': 'Americano', 'price': 3.75, 'description': 'Espresso shots with hot water'},
        {'id': 6, 'name': 'Macchiato', 'price': 4.25, 'description': 'Espresso marked with a small amount of milk'},
        {'id': 7, 'name': 'Flat White', 'price': 5.00, 'description': 'Espresso with microfoam steamed milk'},
        {'id': 8, 'name': 'Cold Brew', 'price': 4.00, 'description': 'Smooth and refreshing cold coffee'}
    ]
    return jsonify({'success': True, 'menu': menu}), 200

@app.route('/api/statistics', methods=['GET'])
def get_statistics():
    """Get shop statistics"""
    try:
        orders = load_orders()
        total_orders = len(orders)
        total_revenue = sum(order['total'] for order in orders)
        avg_order_value = total_revenue / total_orders if total_orders > 0 else 0

        # Count items sold
        item_counts = {}
        for order in orders:
            for item in order['items']:
                item_name = item['name']
                item_counts[item_name] = item_counts.get(item_name, 0) + item['quantity']

        return jsonify({
            'success': True,
            'total_orders': total_orders,
            'total_revenue': round(total_revenue, 2),
            'average_order_value': round(avg_order_value, 2),
            'items_sold': item_counts
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/orders/<order_id>', methods=['PUT'])
def update_order_status(order_id):
    """Update order status"""
    try:
        data = request.json
        new_status = data.get('status', 'pending')

        orders = load_orders()
        order = next((o for o in orders if o['order_id'] == order_id), None)

        if not order:
            return jsonify({'error': 'Order not found'}), 404

        order['status'] = new_status
        save_orders(orders)

        return jsonify({
            'success': True,
            'message': f'Order status updated to {new_status}',
            'order': order
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Error handlers
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Endpoint not found'}), 404

@app.errorhandler(500)
def server_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    # Create orders.json if it doesn't exist
    if not os.path.exists(ORDERS_FILE):
        save_orders([])
    
    print("Starting Coffee Shop API Server...")
    print("Visit http://localhost:5000 to see available endpoints")
    app.run(debug=True, host='localhost', port=5000)
