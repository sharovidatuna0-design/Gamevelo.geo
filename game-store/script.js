// Games Database with Real Famous PS5 Games
const gamesData = [
    {
        id: 1,
        title: "Arc Raider",
        category: "adventure",
        price: 99.99,
        originalPrice: 180,
        discount: 45,
        rating: "★★★★★",
        description: "Join the thrilling adventure of Arc Raider as you explore mysterious worlds and uncover hidden secrets.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1808500/04baafaf64a5aa5f46ecda5d71889a4848dc0628/header.jpg?t=1764755475"
    },
    {
        id: 2,
        title: "Elden Ring",
        category: "rpg",
        price: 89.99,
        originalPrice: 162,
        discount: 20,
        rating: "★★★★★",
        description: "Rise, Tarnished, and let grace guide you in this vast and dangerous realm.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg"
    },
    {
        id: 3,
        title: "God of War Ragnarök",
        category: "adventure",
        price: 68.99,
        originalPrice: 96,
        discount: 28,
        rating: "★★★★★",
        description: "Experience the epic conclusion of Kratos' story in this stunning Norse adventure.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2322010/capsule_616x353.jpg"
    },
    {
        id: 4,
        title: "Grand Theft Auto V",
        category: "action",
        price: 54,
        originalPrice: 81,
        discount: 33,
        rating: "★★★★★",
        description: "The most successful entertainment product of all time. Experience the ultimate sandbox.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/capsule_616x353.jpg"
    },
    {
        id: 5,
        title: "The Witcher 3: Wild Hunt",
        category: "rpg",
        price: 76,
        originalPrice: 108,
        discount: 30,
        rating: "★★★★★",
        description: "Embark on a monster-slaying adventure in this richly detailed fantasy world.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/capsule_616x353.jpg"
    },
    {
        id: 6,
        title: "Sekiro: Shadows Die Twice",
        category: "action",
        price: 75,
        originalPrice: 108,
        discount: 30,
        rating: "★★★★★",
        description: "A brutal action RPG where you become a master ninja seeking vengeance in Sengoku Japan.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/814380/capsule_616x353.jpg"
    },
    {
        id: 7,
        title: "Dark Souls III",
        category: "action",
        price: 55,
        originalPrice: 108,
        discount: 49,
        rating: "★★★★★",
        description: "Challenge yourself in an epic dark fantasy adventure of unparalleled depth.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/374320/capsule_616x353.jpg"
    },
    {
        id: 8,
        title: "Cyberpunk 2077",
        category: "rpg",
        price: 39.99,
        originalPrice: 57,
        discount: 30,
        rating: "★★★★☆",
        description: "Become a legendary mercenary and make your mark in Night City.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/capsule_616x353.jpg"
    },
    {
        id: 9,
        title: "Skyrim",
        category: "rpg",
        price: 20,
        originalPrice: 30,
        discount: 33,
        rating: "★★★★★",
        description: "Experience the legendary fantasy adventure that defined a generation.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/72850/capsule_616x353.jpg"
    },
    {
        id: 10,
        title: "Fallout 4",
        category: "rpg",
        price: 30,
        originalPrice: 42,
        discount: 28,
        rating: "★★★★☆",
        description: "Emerge from the vault and explore a retro-futuristic wasteland.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/377160/capsule_616x353.jpg"
    },
    {
        id: 11,
        title: "Monster Hunter Rise",
        category: "action",
        price: 25,
        originalPrice: 35,
        discount: 29,
        rating: "★★★★★",
        description: "Lead the charge against fearsome monsters with enhanced gameplay and epic hunts.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1446780/capsule_616x353.jpg"
    },
    {
        id: 12,
        title: "Black Myth: Wukong",
        category: "action",
        price: 108,
        originalPrice: 162,
        discount: 33,
        rating: "★★★★★",
        description: "An epic action-adventure based on the classic Chinese tale Journey to the West.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg?t=1760601605"
    },
    {
        id: 13,
        title: "Hollow Knight",
        category: "adventure",
        price: 29,
        originalPrice: 41,
        discount: 29,
        rating: "★★★★★",
        description: "Descend into a dark, haunting kingdom filled with secrets and challenges.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/capsule_616x353.jpg"
    },
    {
        id: 14,
        title: "Hades",
        category: "adventure",
        price: 48,
        originalPrice: 68,
        discount: 29,
        rating: "★★★★★",
        description: "Escape the underworld in this award-winning roguelike dungeon crawler.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1145360/capsule_616x353.jpg"
    },
    {
        id: 15,
        title: "Dishonored 2",
        category: "adventure",
        price: 75,
        originalPrice: 108,
        discount: 30,
        rating: "★★★★★",
        description: "Play as either Corvo or Emily in this stealth masterpiece.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/403640/capsule_616x353.jpg"
    },
    {
        id: 16,
        title: "Death Stranding",
        category: "adventure",
        price: 95,
        originalPrice: 135,
        discount: 29,
        rating: "★★★★☆",
        description: "Connect a fragmented America and experience a unique cinematic adventure.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1190460/capsule_616x353.jpg"
    }
];

// Shopping Cart
let cart = [];
let currentFilter = 'all';

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    loadGames();
    setupNavigation();
    loadCartFromStorage();
    updateCartCount();
});

// Load Games
function loadGames() {
    displayFeaturedGames();
    displayAllGames();
}

// Display Featured Games
function displayFeaturedGames() {
    const featured = gamesData.slice(0, 4);
    const featuredGrid = document.getElementById('featuredGames');
    
    featuredGrid.innerHTML = featured.map(game => createGameCardHTML(game)).join('');
}

// Display All Games
function displayAllGames(filter = 'all') {
    const filtered = filter === 'all' ? gamesData : gamesData.filter(game => game.category === filter);
    const gamesGrid = document.getElementById('gamesGrid');
    
    gamesGrid.innerHTML = filtered.map(game => createGameCardHTML(game)).join('');
}

// Create Game Card HTML
function createGameCardHTML(game) {
    const priceDisplay = game.originalPrice ? 
        `<div class="game-price">${game.price}ლ <span class="original-price">${game.originalPrice}ლ</span> <span class="discount-badge">-${game.discount}%</span></div>` :
        `<div class="game-price">${game.price === 0 ? 'FREE' : game.price + 'ლ'}</div>`;
    
    return `
        <div class="game-card">
            <div class="game-image">
                <img src="${game.image}" alt="${game.title}" onerror="this.src='https://via.placeholder.com/300x200?text=${game.title}'">
            </div>
            <div class="game-content">
                <div class="game-title">${game.title}</div>
                <span class="game-category">${game.category.toUpperCase()}</span>
                <p class="game-description">${game.description}</p>
                <div class="game-rating">${game.rating}</div>
                ${priceDisplay}
                <div class="game-footer">
                    <button class="btn-buy" onclick="addToCart(${game.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

// Filter Games
function filterGames(category) {
    currentFilter = category;
    displayAllGames(category);

    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Add to Cart
function addToCart(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    const existingItem = cart.find(item => item.id === gameId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...game,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartCount();
    showNotification(`${game.title} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Update Cart Display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 20px;">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-name">
                    <strong>${item.title}</strong>
                    <br>
                    <small>Quantity: ${item.quantity}</small>
                </div>
                <div class="cart-item-price">${(item.price * item.quantity).toFixed(0)}ლ</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = total.toFixed(0) + 'ლ';
}

// Remove from Cart
function removeFromCart(gameId) {
    cart = cart.filter(item => item.id !== gameId);
    saveCartToStorage();
    updateCartCount();
    updateCartDisplay();
}

// Open Cart Modal
function openCart() {
    updateCartDisplay();
    document.getElementById('cartModal').classList.add('show');
}

// Close Cart Modal
function closeCart() {
    document.getElementById('cartModal').classList.remove('show');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Save cart and total to localStorage
    localStorage.setItem('checkoutCart', JSON.stringify(cart));
    localStorage.setItem('checkoutTotal', total);

    // Redirect to payment page
    window.location.href = 'payment.html';
}

// Save Cart to Storage
function saveCartToStorage() {
    localStorage.setItem('gameStoreCart', JSON.stringify(cart));
}

// Load Cart from Storage
function loadCartFromStorage() {
    const saved = localStorage.getItem('gameStoreCart');
    if (saved) {
        cart = JSON.parse(saved);
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Setup Navigation
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.querySelector('.cart-icon').addEventListener('click', openCart);
}

// Handle Contact Form
function handleContactSubmit(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    e.target.reset();
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
