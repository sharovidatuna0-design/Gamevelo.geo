// Welcome Page Script
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupAnimations();
});

// Setup Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Scroll to Features
function scrollToFeatures() {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Setup Animations
function setupAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.feature-card, .highlight, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth Scroll Behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect on scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const parallaxElements = document.querySelectorAll('.welcome-hero');
    
    parallaxElements.forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.5}px)`;
    });
});

// Mouse move effect for floating cards
const floatingCards = document.querySelectorAll('.float-card');
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    floatingCards.forEach((card, index) => {
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        card.style.transform = `translate(${moveX}px, ${moveY + (index * 15)}px)`;
    });
});

// Game suggestions data with real game images
const gameSuggestions = {
    action: {
        title: "⚡️ ACTION",
        games: [
            { name: "Black Myth Wu Kong", price: "90ლ", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg?t=1760601605" },
            { name: "Sekiro: Shadows Die Twice", price: "75ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/capsule_184x69.jpg" },
            { name: "GTA V", price: "54ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_184x69.jpg" },
            { name: "Dark Souls III", price: "55ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/capsule_184x69.jpg" },
            { name: "Monster Hunter Rise", price: "25ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/capsule_184x69.jpg" }
        ]
    },
    rpg: {
        title: "᳚️ RPG",
        games: [
            { name: "Elden Ring", price: "80ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/capsule_184x69.jpg" },
            { name: "The Witcher 3", price: "76ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/capsule_184x69.jpg" },
            { name: "Cyberpunk 2077", price: "39ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_184x69.jpg" },
            { name: "Skyrim", price: "20ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/72850/capsule_184x69.jpg" },
            { name: "Fallout 4", price: "30ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/capsule_184x69.jpg" },
            { name: "Arc Raider", price: "99ლ", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1808500/04baafaf64a5aa5f46ecda5d71889a4848dc0628/header.jpg?t=1764755475" }
        ]
    },
    adventure: {
        title: "🗗️ ADVENTURE",
        games: [
            { name: "God of War Ragnarök", price: "68.99ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/capsule_184x69.jpg" },
            { name: "Hollow Knight", price: "29ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/capsule_184x69.jpg" },
            { name: "Hades", price: "48ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/capsule_184x69.jpg" },
            { name: "Dishonored 2", price: "75ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/403640/capsule_184x69.jpg" },
            { name: "Death Stranding", price: "149ლ", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1190460/capsule_184x69.jpg" }
        ]
    }
};

// Show Game Suggestion
function showGameSuggestion(category) {
    const modal = document.getElementById('suggestionModal');
    const suggestion = gameSuggestions[category];
    
    if (!suggestion) return;
    
    document.getElementById('suggestionTitle').textContent = suggestion.title;
    
    const gamesHTML = suggestion.games.map(game => `
        <div class="suggestion-game">
            <img src="${game.image}" alt="${game.name}" class="suggestion-game-image" onerror="this.src='https://via.placeholder.com/184x69?text=${game.name}'">
            <div class="suggestion-game-info">
                <div class="suggestion-game-title">${game.name}</div>
                <div class="suggestion-game-price">${game.price}</div>
            </div>
        </div>
    `).join('');
    
    document.getElementById('suggestionGames').innerHTML = gamesHTML;
    modal.classList.add('show');
}

// Close Suggestion Modal
function closeSuggestion() {
    document.getElementById('suggestionModal').classList.remove('show');
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSuggestion();
    }
});

// Close modal on outside click
document.getElementById('suggestionModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'suggestionModal') {
        closeSuggestion();
    }
});
