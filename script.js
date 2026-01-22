// Coffee menu data
const menuItems = [
    {
        id: 1,
        name: "Espresso",
        price: 3.50,
        description: "Strong and bold shot of pure espresso",
        emoji: "☕"
    },
    {
        id: 2,
        name: "Cappuccino",
        price: 4.50,
        description: "Espresso with steamed milk and foam",
        emoji: "🥛"
    },
    {
        id: 3,
        name: "Latte",
        price: 4.75,
        description: "Smooth espresso with lots of steamed milk",
        emoji: "☕"
    },
    {
        id: 4,
        name: "Mocha",
        price: 5.25,
        description: "Espresso, steamed milk, and chocolate",
        emoji: "🍫"
    },
    {
        id: 5,
        name: "Americano",
        price: 3.75,
        description: "Espresso shots with hot water",
        emoji: "💧"
    },
    {
        id: 6,
        name: "Macchiato",
        price: 4.25,
        description: "Espresso marked with a small amount of milk",
        emoji: "☕"
    },
    {
        id: 7,
        name: "Flat White",
        price: 5.00,
        description: "Espresso with microfoam steamed milk",
        emoji: "🤍"
    },
    {
        id: 8,
        name: "Cold Brew",
        price: 4.00,
        description: "Smooth and refreshing cold coffee",
        emoji: "🧊"
    }
];

// Shopping cart
let cart = [];

// Load menu on page load
document.addEventListener('DOMContentLoaded', function() {
    loadMenu();
    loadCart();
});

// Load menu items
function loadMenu() {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    menuItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.className = 'menu-item';
        menuItemDiv.innerHTML = `
            <div class="menu-item-image">${item.emoji}</div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p class="menu-item-price">$${item.price.toFixed(2)}</p>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-controls">
                    <input type="number" id="qty-${item.id}" min="1" value="1" class="quantity-input">
                    <button class="btn btn-primary" onclick="addToCart(${item.id})">Add</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItemDiv);
    });
}

// Add item to cart
function addToCart(itemId) {
    const quantityInput = document.getElementById(`qty-${itemId}`);
    const quantity = parseInt(quantityInput.value) || 1;
    const item = menuItems.find(i => i.id === itemId);

    if (!item) return;

    const existingItem = cart.find(c => c.id === itemId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity
        });
    }

    saveCart();
    loadCart();
    quantityInput.value = 1;
    alert(`${item.name} added to cart!`);
}

// Load cart display
function loadCart() {
    const cartBody = document.getElementById('cartBody');
    cartBody.innerHTML = '';

    let total = 0;

    if (cart.length === 0) {
        cartBody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 20px;">Your cart is empty</td></tr>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" 
                           onchange="updateQuantity(${item.id}, this.value)" 
                           style="width: 60px; padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="btn btn-danger" onclick="removeFromCart(${item.id})">Remove</button></td>
            `;
            cartBody.appendChild(row);
        });
    }

    document.getElementById('totalPrice').textContent = total.toFixed(2);
}

// Update quantity
function updateQuantity(itemId, newQuantity) {
    const quantity = parseInt(newQuantity);
    if (quantity < 1) {
        removeFromCart(itemId);
        return;
    }

    const item = cart.find(c => c.id === itemId);
    if (item) {
        item.quantity = quantity;
        saveCart();
        loadCart();
    }
}

// Remove from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    loadCart();
}

// Clear cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        loadCart();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('coffeeShopCart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('coffeeShopCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Send order to Python backend
    fetch('http://localhost:5000/api/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: cart,
            total: total
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(`Order placed successfully! Order ID: ${data.order_id}\nTotal: $${total.toFixed(2)}`);
        cart = [];
        saveCart();
        loadCart();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to place order. Please try again.');
    });
}

// Load cart on page load
loadCartFromStorage();
loadCart();
