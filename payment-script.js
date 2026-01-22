// Payment Page Script

// Load order data when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadOrderData();
    formatCardInputs();
});

// Format card inputs with spaces and validation
function formatCardInputs() {
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryInput = document.getElementById('expiryDate');
    const cvvInput = document.getElementById('cvv');

    // Card number formatting (add spaces every 4 digits)
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formattedValue;
    });

    // Expiry date formatting (MM/YY)
    expiryInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        e.target.value = value;
    });

    // CVV only numbers
    cvvInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');
    });
}

// Load cart and total from localStorage
function loadOrderData() {
    const cart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
    const total = localStorage.getItem('checkoutTotal') || 0;

    // Display order items
    const orderItemsContainer = document.getElementById('orderItems');
    orderItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p style="color: #8b949e;">No items in cart</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'order-item';
            itemElement.innerHTML = `
                <span class="item-name">${item.title}</span>
                <span>
                    <span class="item-quantity">x${item.quantity}</span>
                    <span class="item-price">${(item.price * item.quantity).toLocaleString()}ლ</span>
                </span>
            `;
            orderItemsContainer.appendChild(itemElement);
        });
    }

    // Display total
    const totalAmount = parseFloat(total);
    document.getElementById('orderTotal').textContent = totalAmount.toLocaleString() + 'ლ';
    document.getElementById('payAmount').textContent = totalAmount.toLocaleString() + 'ლ';
}

// Process payment form
function processPayment(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        cardholderName: document.getElementById('cardholderName').value,
        email: document.getElementById('email').value,
        cardNumber: document.getElementById('cardNumber').value.replace(/\s/g, ''),
        expiryDate: document.getElementById('expiryDate').value,
        cvv: document.getElementById('cvv').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        postalCode: document.getElementById('postalCode').value,
        country: document.getElementById('country').value,
        cart: JSON.parse(localStorage.getItem('checkoutCart')) || [],
        total: parseFloat(localStorage.getItem('checkoutTotal')) || 0,
        timestamp: new Date().toISOString()
    };

    // Basic validation
    if (!validatePaymentForm(formData)) {
        return;
    }

    // Show loading state
    const payBtn = document.getElementById('payBtn');
    const originalText = payBtn.innerHTML;
    payBtn.disabled = true;
    payBtn.innerHTML = '<span>Processing...</span>';

    // Simulate payment processing
    setTimeout(() => {
        // Save order to localStorage (for demo purposes)
        const orders = JSON.parse(localStorage.getItem('gameveloOrders')) || [];
        const orderId = 'ORD-' + new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
        
        formData.orderId = orderId;
        formData.status = 'completed';
        orders.push(formData);
        
        localStorage.setItem('gameveloOrders', JSON.stringify(orders));

        // Clear cart
        localStorage.removeItem('checkoutCart');
        localStorage.removeItem('checkoutTotal');

        // Show success message
        showSuccessPage(orderId, formData.total);

        // Reset button
        payBtn.disabled = false;
        payBtn.innerHTML = originalText;
    }, 1500);
}

// Validate payment form
function validatePaymentForm(formData) {
    // Check cardholder name
    if (!formData.cardholderName.trim()) {
        alert('Please enter cardholder name');
        return false;
    }

    // Check email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Check card number (basic check)
    if (formData.cardNumber.length !== 16) {
        alert('Please enter a valid 16-digit card number');
        return false;
    }

    // Check expiry date
    if (!formData.expiryDate.match(/^\d{2}\/\d{2}$/)) {
        alert('Please enter expiry date in MM/YY format');
        return false;
    }

    // Check expiry is not in the past
    const [month, year] = formData.expiryDate.split('/');
    const expiryDate = new Date(2000 + parseInt(year), parseInt(month));
    if (expiryDate < new Date()) {
        alert('Card has expired. Please use a valid card.');
        return false;
    }

    // Check CVV
    if (formData.cvv.length < 3 || formData.cvv.length > 4) {
        alert('Please enter a valid CVV (3-4 digits)');
        return false;
    }

    // Check address fields
    if (!formData.address.trim() || !formData.city.trim() || !formData.postalCode.trim()) {
        alert('Please fill in all address fields');
        return false;
    }

    return true;
}

// Show success page
function showSuccessPage(orderId, total) {
    document.body.innerHTML = `
        <div style="
            min-height: 100vh;
            background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            font-family: 'Inter', sans-serif;
        ">
            <div style="
                text-align: center;
                background: rgba(22, 27, 34, 0.7);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(88, 166, 255, 0.2);
                border-radius: 16px;
                padding: 60px 40px;
                max-width: 500px;
                width: 100%;
            ">
                <div style="
                    font-size: 80px;
                    margin-bottom: 20px;
                    animation: bounceIn 0.6s ease-out;
                ">✅</div>
                <h1 style="
                    font-size: 2rem;
                    color: #79c0ff;
                    margin-bottom: 10px;
                ">Payment Successful!</h1>
                <p style="
                    color: #8b949e;
                    font-size: 1rem;
                    margin-bottom: 30px;
                    line-height: 1.6;
                ">
                    Thank you for your purchase on Gamevelo.<br>
                    Your games are ready to download.
                </p>
                
                <div style="
                    background: rgba(88, 166, 255, 0.1);
                    border: 1px solid rgba(88, 166, 255, 0.2);
                    border-radius: 8px;
                    padding: 20px;
                    margin-bottom: 30px;
                    text-align: left;
                ">
                    <p style="color: #8b949e; font-size: 0.9rem; margin: 10px 0;">
                        <strong style="color: #c9d1d9;">Order ID:</strong><br>
                        <code style="color: #58a6ff; font-family: monospace;">${orderId}</code>
                    </p>
                    <p style="color: #8b949e; font-size: 0.9rem; margin: 10px 0;">
                        <strong style="color: #c9d1d9;">Amount Paid:</strong><br>
                        <span style="color: #79c0ff; font-size: 1.2rem; font-weight: 700;">${total.toLocaleString()}ლ</span>
                    </p>
                </div>

                <p style="
                    color: #8b949e;
                    font-size: 0.9rem;
                    margin-bottom: 30px;
                ">
                    A confirmation email has been sent to your registered email address.
                </p>

                <a href="index.html" style="
                    display: inline-block;
                    background: linear-gradient(135deg, #58a6ff 0%, #79c0ff 100%);
                    color: #0d1117;
                    padding: 14px 40px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    border: none;
                    font-size: 0.95rem;
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(88, 166, 255, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    Back to Store
                </a>
            </div>
        </div>

        <style>
            @keyframes bounceIn {
                from {
                    opacity: 0;
                    transform: scale(0.5);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        </style>
    `;
}

// Cancel payment
function cancelPayment() {
    if (confirm('Are you sure you want to cancel this payment?')) {
        window.location.href = 'index.html#cart';
    }
}
