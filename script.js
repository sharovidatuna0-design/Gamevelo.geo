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
    displayFlashDeals();
    displayAllGames();
}

// Display Flash Deals
function displayFlashDeals() {
    const dealsGames = gamesData.filter(g => g.discount >= 25).sort((a, b) => b.discount - a.discount);
    const carouselDiv = document.getElementById('flashDealsCarousel');
    
    carouselDiv.innerHTML = dealsGames.map(game => `
        <div class="flash-deal-card">
            <div class="flash-deal-image">
                <img src="${game.image}" alt="${game.title}" onerror="this.src='https://via.placeholder.com/280x180?text=${game.title}'">
            </div>
            <div class="flash-deal-content">
                <div class="flash-deal-title">${game.title}</div>
                <div class="flash-deal-price-info">
                    <span class="flash-deal-current">${game.price}ლ</span>
                    <span class="flash-deal-original">${game.originalPrice}ლ</span>
                    <span class="flash-deal-discount">-${game.discount}%</span>
                </div>
                <button class="flash-deal-button" onclick="addToCart(${game.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
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
        `<div class="game-price">${game.price}ლ <span class="original-price">${game.originalPrice}ლ</span> <span class="discount-badge ${getBadgeClass(game)}">${getBadgeText(game)}</span></div>` :
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

// Get badge text based on discount percentage
function getBadgeText(game) {
    if (game.discount >= 40) {
        return '🔥 FLASH SALE';
    } else if (game.discount >= 30) {
        return '⭐ LIMITED';
    } else if (game.rating === '★★★★★' && game.discount >= 25) {
        return '🏆 BESTSELLER';
    } else {
        return `-${game.discount}%`;
    }
}

// Get badge CSS class based on discount type
function getBadgeClass(game) {
    if (game.discount >= 40) {
        return 'badge-flash-sale';
    } else if (game.discount >= 30) {
        return 'badge-limited-offer';
    } else if (game.rating === '★★★★★' && game.discount >= 25) {
        return 'badge-bestseller';
    } else {
        return '';
    }
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

// Add to Cart - Show Purchase Modal
function addToCart(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    showPurchaseModal(game);
}

// Show Purchase Modal
function showPurchaseModal(game) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('purchaseModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'purchaseModal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;
        document.body.appendChild(modal);
    }

    // Create modal content
    const content = `
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 15px; padding: 40px; max-width: 500px; width: 90%; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5); border: 2px solid #FFD700; text-align: center;">
            <button onclick="closePurchaseModal()" style="position: absolute; top: 15px; right: 15px; background: none; border: none; color: #FFD700; font-size: 28px; cursor: pointer;">×</button>
            
            <div style="margin-bottom: 20px;">
                <img src="${game.image}" alt="${game.title}" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 10px; border: 2px solid #FFD700;">
            </div>
            
            <h2 style="color: #FFD700; margin-bottom: 10px; font-size: 28px;">${game.title}</h2>
            <p style="color: #4facfe; font-size: 24px; margin-bottom: 20px; font-weight: bold;">${game.price}ლ</p>
            <p style="color: #ccc; margin-bottom: 30px; font-size: 14px; line-height: 1.6;">${game.description}</p>
            
            <div style="background: rgba(255, 215, 0, 0.1); border-left: 4px solid #FFD700; padding: 15px; margin: 20px 0; border-radius: 5px; text-align: left;">
                <p style="color: #FFD700; margin: 0; font-weight: bold;">📱 How to Purchase</p>
                <p style="color: #ccc; margin: 10px 0 0 0; font-size: 13px;">Contact us on Instagram @game.velo to complete your purchase. Our team will assist you with payment and delivery.</p>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 25px;">
                <a href="https://www.instagram.com/game.velo/" target="_blank" style="flex: 1; background: linear-gradient(135deg, #FD5949 0%, #D6249F 100%); color: white; padding: 12px; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; text-decoration: none; font-size: 14px; transition: transform 0.2s;">
                    📲 Message on Instagram
                </a>
                <button onclick="addGameToWishlist(${game.id}); closePurchaseModal();" style="flex: 1; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 12px; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 14px; transition: transform 0.2s;">
                    ❤️ Add to Wishlist
                </button>
            </div>
            
            <button onclick="closePurchaseModal()" style="width: 100%; margin-top: 10px; background: rgba(255, 215, 0, 0.2); color: #FFD700; padding: 10px; border: 1px solid #FFD700; border-radius: 8px; cursor: pointer; font-weight: bold;">
                Close
            </button>
        </div>
    `;
    
    modal.innerHTML = content;
    modal.style.display = 'flex';
    
    // Close modal on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closePurchaseModal();
        }
    });
}

// Close Purchase Modal
function closePurchaseModal() {
    const modal = document.getElementById('purchaseModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Add to Wishlist
function addGameToWishlist(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    let wishlist = JSON.parse(localStorage.getItem('gameWishlist') || '[]');
    
    if (!wishlist.find(item => item.id === gameId)) {
        wishlist.push(game);
        localStorage.setItem('gameWishlist', JSON.stringify(wishlist));
        showNotification(`${game.title} added to wishlist! 💕`);
    } else {
        showNotification(`${game.title} is already in your wishlist!`);
    }
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

// AI Assistant Function
function sendAIMessage() {
    const inputField = document.getElementById('aiInput');
    const messagesContainer = document.getElementById('aiMessages');
    const userMessage = inputField.value.trim();
    
    if (!userMessage) return;
    
    // Display user message
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'ai-message user-message';
    userMsgDiv.innerHTML = '<p>' + escapeHtml(userMessage) + '</p><span class="message-icon">👤</span>';
    messagesContainer.appendChild(userMsgDiv);
    
    // Clear input
    inputField.value = '';
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Generate AI response
    setTimeout(() => {
        let aiResponse = generateAIResponse(userMessage.toLowerCase());
        
        const botMsgDiv = document.createElement('div');
        botMsgDiv.className = 'ai-message bot-message';
        botMsgDiv.innerHTML = '<span class="message-icon">🤖</span><p>' + aiResponse + '</p>';
        messagesContainer.appendChild(botMsgDiv);
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 600);
}

function generateAIResponse(message) {
    // Game recommendations with prices
    if (message.includes('recommend') || message.includes('suggest') || message.includes('best game')) {
        const randomGames = gamesData.sort(() => Math.random() - 0.5).slice(0, 3);
        const gamesList = randomGames.map(g => `${g.title} (${g.price}ლ)`).join(', ');
        return "🎮 I'd love to recommend: " + gamesList + ". These are all amazing games with excellent reviews! Would you like more info about any of them?";
    }
    
    // Discount/pricing questions
    if (message.includes('discount') || message.includes('price') || message.includes('sale') || message.includes('cheaper')) {
        const discountedGames = gamesData.filter(g => g.discount >= 30).sort((a, b) => b.discount - a.discount).slice(0, 5);
        const dealsText = discountedGames.map(g => `${g.title}: ${g.price}ლ (was ${g.originalPrice}ლ, -${g.discount}%)`).join(' | ');
        return "💰 Great timing! We have fantastic deals right now:\n" + dealsText + "\n\nAll these games are 30%+ off. Check them out!";
    }
    
    // Cheapest games
    if (message.includes('cheap') || message.includes('budget') || message.includes('affordable')) {
        const cheapest = gamesData.sort((a, b) => a.price - b.price).slice(0, 4);
        const cheapList = cheapest.map(g => `${g.title}: only ${g.price}ლ`).join(' | ');
        return "💸 Looking for budget-friendly options? Here are our most affordable games:\n" + cheapList + "\n\nGreat value for money!";
    }
    
    // Most expensive
    if (message.includes('expensive') || message.includes('premium') || message.includes('best quality')) {
        const premium = gamesData.sort((a, b) => b.price - a.price).slice(0, 3);
        const premiumList = premium.map(g => `${g.title}: ${g.price}ლ`).join(' | ');
        return "👑 Our premium collection includes:\n" + premiumList + "\n\nThese are the finest games available!";
    }
    
    // Account/support questions
    if (message.includes('account') || message.includes('support') || message.includes('help') || message.includes('problem')) {
        return "📧 Need support? We're here to help! Message us on Instagram @game.velo and our team will assist you within 24 hours. What's the issue?";
    }
    
    // Search functionality
    if (message.includes('find') || message.includes('search') || message.includes('looking for')) {
        return "🔍 I can definitely help you find the perfect game! What are you looking for? Tell me:\n• A specific game\n• A genre (adventure, action, rpg)\n• A price range\n• A game type\n\nJust ask!";
    }
    
    // Category questions with prices
    if (message.includes('adventure')) {
        const adventureGames = gamesData.filter(g => g.category === 'adventure').slice(0, 4);
        const adventureList = adventureGames.map(g => `${g.title} (${g.price}ლ)`).join(', ');
        return "🗺️ Adventure Games we have:\n" + adventureList + "\n\nAll amazing titles! Would you like to add any to your cart?";
    }
    
    if (message.includes('action')) {
        const actionGames = gamesData.filter(g => g.category === 'action').slice(0, 4);
        const actionList = actionGames.map(g => `${g.title} (${g.price}ლ)`).join(', ');
        return "⚔️ Action Games we have:\n" + actionList + "\n\nThese are intense and thrilling! Interested in any?";
    }
    
    if (message.includes('rpg')) {
        const rpgGames = gamesData.filter(g => g.category === 'rpg').slice(0, 4);
        const rpgList = rpgGames.map(g => `${g.title} (${g.price}ლ)`).join(', ');
        return "🐉 RPG Games we have:\n" + rpgList + "\n\nEpic stories and adventures await!";
    }
    
    // Contact options
    if (message.includes('contact') || message.includes('instagram') || message.includes('message')) {
        return "📱 Happy to help! Connect with us on Instagram @game.velo for:\n• Questions\n• Support\n• Feedback\n• Special requests\n\nWe respond quickly!";
    }
    
    // Greeting
    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
        return "👋 Hey there! Welcome to GameVelo! 🎮 I'm your AI assistant and I'm excited to help you find amazing PS5 games at great prices. You can ask me about:\n• Specific games & their prices\n• Recommendations\n• Current deals\n• Game genres\n\nWhat would you like to know?";
    }
    
    // Cart/checkout
    if (message.includes('cart') || message.includes('checkout') || message.includes('buy')) {
        return "🛒 It's easy to shop with us!\n1. Click 'Add to Cart' on any game\n2. Click the cart icon to review your order\n3. Click 'Checkout' to proceed\n\nReady to buy something?";
    }
    
    // Rating/review
    if (message.includes('rating') || message.includes('review') || message.includes('quality')) {
        return "⭐ All our games are carefully selected for quality!\n• Most have 5★ ratings\n• Based on real player feedback\n• Only premium titles\n\nBrowse our collection to see the ratings!";
    }
    
    // How much / Total price
    if (message.includes('how much') || message.includes('total') || message.includes('cost')) {
        return "💵 The price depends on which games you're interested in!\nOur prices range from " + Math.min(...gamesData.map(g => g.price)) + "ლ to " + Math.max(...gamesData.map(g => g.price)) + "ლ.\n\nWhat games are you looking at?";
    }
    
    // Default response
    return "🎯 Great question! I'm here to help you find games, check prices, get deals, and make purchases. Try asking me about:\n• Game recommendations\n• Current discounts\n• Prices\n• Specific genres\n• Or just chat!\n\nWhat can I help with?";
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Allow Enter key to send message
document.addEventListener('DOMContentLoaded', function() {
    const aiInput = document.getElementById('aiInput');
    if (aiInput) {
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendAIMessage();
            }
        });
    }
});
