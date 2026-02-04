// Mod Data using the available images in the folder
const mods = [
    {
        id: 1,
        title: "Advanced Graphics Overhaul",
        category: "visual",
        image: "mods1.jpg",
        description: "Enhance your VR experience with ultra-realistic shaders and textures. This mod completely revamps the lighting engine, adds volumetric fog, and improves reflection quality.",
        downloads: "15.4K",
        author: "GraphicsMaster",
        date: "2025-01-15",
        tags: ["#visual", "#shader", "#4k"],
        features: [
            "Real-time ray tracing support for compatible GPUs",
            "Enhanced volumetric lighting and fog effects",
            "High-resolution shadow maps and ambient occlusion"
        ]
    },
    {
        id: 2,
        title: "Physics Engine V2",
        category: "gameplay",
        image: "mods2.jpg",
        description: "More realistic object interactions and ragdoll physics. Collisions are now calculated with higher precision, and weight distribution is simulated for all interactable objects.",
        downloads: "8.2K",
        author: "PhysicsDev",
        date: "2025-02-01",
        tags: ["#physics", "#gameplay", "#realism"],
        features: [
            "Advanced ragdoll physics for all avatars",
            "Precise object collision detection",
            "Realistic weight and inertia simulation"
        ]
    },
    {
        id: 3,
        title: "Character Customizer Pro",
        category: "tools",
        image: "mods3.jpg",
        description: "Unlimited customization options for your avatar. Adjust bone scaling, mix and match clothing assets, and save unlimited presets for quick switching.",
        downloads: "12K",
        author: "AvatarCreator",
        date: "2025-01-20",
        tags: ["#avatar", "#customization", "#tools"],
        features: [
            "Detailed bone scaling slider system",
            "Layered clothing system with color picker",
            "Save and share avatar presets via codes"
        ]
    },
    {
        id: 4,
        title: "Night Mode City",
        category: "visual",
        image: "mods4.jpg",
        description: "Transform the city into a neon-filled cyberpunk atmosphere. All street lights are dynamic, and rain reflections are enhanced for a moody aesthetic.",
        downloads: "5.6K",
        author: "CyberArtist",
        date: "2025-02-10",
        tags: ["#visual", "#cyberpunk", "#lighting"],
        features: [
            "Dynamic neon lighting system",
            "Procedural cyberpunk weather effects",
            "Custom skybox with holographic ads"
        ]
    },
    {
        id: 5,
        title: "Flight System",
        category: "gameplay",
        image: "mods5.jpg",
        description: "Explore the skies with new flight mechanics. Adds wingsuit capabilities and jetpacks with customizable thrust controls.",
        downloads: "9.1K",
        author: "SkyWalker",
        date: "2025-01-05",
        tags: ["#gameplay", "#flight", "#mechanics"],
        features: [
            "Fully controllable jetpack mechanics",
            "Wingsuit physics for gliding",
            "Aerial combat capabilities support"
        ]
    },
    {
        id: 6,
        title: "Inventory Manager",
        category: "tools",
        image: "mods6.jpg",
        description: "Manage your inventory faster and more efficiently. Adds sorting, searching, and favorites functionality to the standard inventory menu.",
        downloads: "22K",
        author: "ToolSmith",
        date: "2024-12-30",
        tags: ["#tools", "#inventory", "#management"],
        features: [
            "Smart sorting and filtering options",
            "Quick-search bar for items",
            "Unlimited favorites and folders"
        ]
    },
    {
        id: 7,
        title: "HD Texture Pack",
        category: "visual",
        image: "mods7.jpg",
        description: "4K resolution textures for all surfaces. Replaces all base game textures with AI-upscaled high-definition variants.",
        downloads: "18K",
        author: "TexturePro",
        date: "2025-01-25",
        tags: ["#visual", "#textures", "#hd"],
        features: [
            "AI-upscaled 4K textures",
            "Optimized compression for performance",
            "Detailed normal and specular maps"
        ]
    },
    {
        id: 8,
        title: "Social Emotes Pack",
        category: "gameplay",
        image: "mods8.jpg",
        description: "50+ new emotes to interact with your friends. Includes dances, gestures, and interactive dual-person emotes.",
        downloads: "30K",
        author: "SocialBee",
        date: "2025-02-05",
        tags: ["#gameplay", "#social", "#emotes"],
        features: [
            "50+ unique motion-captured emotes",
            "Interactive 2-player synchronized emotes",
            "Custom emote wheel UI"
        ]
    },
    {
        id: 9,
        title: "Voice Changer FX",
        category: "tools",
        image: "mods9.webp",
        description: "Real-time voice effects and modulation. Choose from robot, alien, echo, and pitch shift effects instantly.",
        downloads: "11K",
        author: "AudioWizard",
        date: "2025-01-10",
        tags: ["#tools", "#audio", "#voice"],
        features: [
            "Real-time low latency processing",
            "12 preset voice effects",
            "Custom pitch and formant sliders"
        ]
    },
    {
        id: 10,
        title: "Realistic Weather",
        category: "visual",
        image: "mods10.jpg",
        description: "Adds dynamic rain, snow, and wind effects. Weather patterns change procedurally and affect visibility and audio.",
        downloads: "7.5K",
        author: "StormChaser",
        date: "2025-02-08",
        tags: ["#visual", "#weather", "#immersion"],
        features: [
            "Procedural weather generation system",
            "Dynamic rain and snow particles",
            "Wind physics affecting trees and cloth"
        ]
    },
    {
        id: 11,
        title: "Weapon Balance Patch",
        category: "gameplay",
        image: "mods11.webp",
        description: "Balances weapon damage and recoil. Tweaks the meta to ensure fair play in competitive game modes.",
        downloads: "4K",
        author: "CombatDev",
        date: "2025-01-18",
        tags: ["#gameplay", "#balance", "#combat"],
        features: [
            "Revised damage values for all weapons",
            "Adjusted recoil patterns for realism",
            "Balanced fire rates and reload times"
        ]
    },
    {
        id: 12,
        title: "Performance Booster",
        category: "tools",
        image: "mods12.jpg",
        description: "Boost your FPS and reduce lag. Optimizes memory usage and reduces draw calls for smoother performance on lower-end hardware.",
        downloads: "45K",
        author: "Optimizer",
        date: "2024-12-25",
        tags: ["#tools", "#performance", "#fps"],
        features: [
            "Aggressive occlusion culling",
            "Memory garbage collection optimization",
            "Texture streaming improvements"
        ]
    },
    {
        id: 14,
        title: "Cyber Limb Assets",
        category: "visual",
        image: "mods14.jpg",
        description: "Futuristic prosthetic limbs for your avatar. Fully rigged and ready to attach to any humanoid avatar base.",
        downloads: "6.3K",
        author: "CyberDoc",
        date: "2025-01-22",
        tags: ["#visual", "#assets", "#cyber"],
        features: [
            "High-quality sci-fi limb models",
            "Emissive textures with color control",
            "Easy drag-and-drop installation"
        ]
    },
    {
        id: 15,
        title: "Vehicle Pack",
        category: "gameplay",
        image: "mods15.jpg",
        description: "New drivable vehicles and race tracks. Includes sports cars, hoverbikes, and off-road buggies.",
        downloads: "9.8K",
        author: "RacerX",
        date: "2025-02-03",
        tags: ["#gameplay", "#vehicles", "#driving"],
        features: [
            "5 new drivable vehicle types",
            "Custom physics for drift and grip",
            "3 new race track maps included"
        ]
    },
    {
        id: 16,
        title: "UI Redesign",
        category: "tools",
        image: "mods16.jpg",
        description: "Make the user interface modern and minimalist. Cleans up the HUD and menus for a more immersive experience.",
        downloads: "14K",
        author: "DesignerOne",
        date: "2025-01-12",
        tags: ["#tools", "#ui", "#interface"],
        features: [
            "Minimalist HUD overlay",
            "Modern menu transparency effects",
            "Customizable color themes"
        ]
    },
    {
        id: 17,
        title: "Magic Spells",
        category: "gameplay",
        image: "mods17.jpg",
        description: "Ability to cast spells with hand gestures. Draw runes in the air to summon fireballs, shields, and healing lights.",
        downloads: "10K",
        author: "MageSupreme",
        date: "2025-01-28",
        tags: ["#gameplay", "#magic", "#spells"],
        features: [
            "Gesture-based spell casting system",
            "10+ unique elemental spells",
            "Visual particle effects for magic"
        ]
    },
    {
        id: 18,
        title: "Anime Shader",
        category: "visual",
        image: "mods18.jpg",
        description: "Give the world an anime-style look. Adds cell-shading and outlines to characters and environments.",
        downloads: "25K",
        author: "AnimeFan",
        date: "2025-02-06",
        tags: ["#visual", "#anime", "#shader"],
        features: [
            "Adjustable toon outline thickness",
            "Customizable cell shading ramps",
            "Works on avatars and world objects"
        ]
    },
    {
        id: 19,
        title: "Server Admin Tools",
        category: "tools",
        image: "mods19.jpg",
        description: "Advanced permissions for server management. Kick, ban, and mute users with ease, plus logging features.",
        downloads: "3.2K",
        author: "AdminPro",
        date: "2025-01-08",
        tags: ["#tools", "#admin", "#server"],
        features: [
            "Comprehensive user management UI",
            "Chat and activity logging system",
            "Automated moderation rules"
        ]
    },
    {
        id: 20,
        title: "Underwater World",
        category: "visual",
        image: "mods20.webp",
        description: "Breathtaking atmosphere for underwater exploration. Adds swimming mechanics and underwater visual effects.",
        downloads: "5.1K",
        author: "DeepDiver",
        date: "2025-02-11",
        tags: ["#visual", "#underwater", "#world"],
        features: [
            "Realistic underwater fog and caustics",
            "Swimming locomotion system",
            "Underwater sound ambience"
        ]
    }
];

// DOM Elements
const modsGrid = document.getElementById('modsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

// Modal Elements
const modal = document.getElementById('modModal');
const closeModalBtn = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalAuthor = document.getElementById('modalAuthor');
const modalDate = document.getElementById('modalDate');
const modalDownloads = document.getElementById('modalDownloads');
const modalCategory = document.getElementById('modalCategory');
const modalTags = document.getElementById('modalTags');
const modalFeatures = document.getElementById('modalFeatures');
const modalDownloadLink = document.getElementById('modalDownloadLink');
const loaderDownloadBtn = document.getElementById('loaderDownloadBtn');

// Download Link
const DOWNLOAD_LINK = "https://www.dropbox.com/scl/fi/sqjbd6jbwybgyvsvk0tqd/ChillOutLoader.exe?rlkey=u9ytwd05es91w93017nno6ts4&st=zsol6yku&dl=1";

if (loaderDownloadBtn) {
    loaderDownloadBtn.href = DOWNLOAD_LINK;
}

// Online Counter Logic
function updateOnlineCount() {
    const counterElement = document.getElementById('online-counter');
    // Generate random number between 90 and 110
    const count = Math.floor(Math.random() * (110 - 90 + 1)) + 90;
    counterElement.textContent = count;
}

// Update count every 3 seconds
setInterval(updateOnlineCount, 3000);
updateOnlineCount(); // Initial call

// Mouse Trail Effect
document.addEventListener('mousemove', function (e) {
    const bubble = document.createElement('div');
    bubble.className = 'mouse-trail';
    bubble.style.left = e.pageX + 'px';
    bubble.style.top = e.pageY + 'px';

    // Randomize size slightly
    const size = Math.random() * 8 + 4;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    document.body.appendChild(bubble);

    // Remove after animation
    setTimeout(() => {
        bubble.remove();
    }, 1000);
});

// Modal Logic
function openModal(mod) {
    modalTitle.textContent = mod.title;
    modalImage.src = mod.image;
    modalImage.alt = mod.title;
    modalDescription.textContent = mod.description;
    modalAuthor.textContent = mod.author;
    modalDate.textContent = mod.date;
    modalDownloads.textContent = mod.downloads;
    modalCategory.textContent = getCategoryName(mod.category);

    // Tags
    modalTags.innerHTML = mod.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Features
    modalFeatures.innerHTML = mod.features.map(feature => `<li><i class="fas fa-check-circle text-blue"></i> ${feature}</li>`).join('');

    // Download Link
    modalDownloadLink.href = "#mod-loader";

    // Show Modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event Listeners for Modal
closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal when clicking download/redirect
modalDownloadLink.addEventListener('click', () => {
    closeModal();
});

// Render Mods Function
function renderMods(category = 'all', searchTerm = '') {
    modsGrid.innerHTML = '';

    const filteredMods = mods.filter(mod => {
        const matchesCategory = category === 'all' || mod.category === category;
        const matchesSearch = mod.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mod.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredMods.length === 0) {
        modsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">No mods found matching your criteria.</div>';
        return;
    }

    filteredMods.forEach(mod => {
        const modCard = document.createElement('div');
        modCard.className = 'mod-card';

        // Generate tags HTML
        const tagsHtml = mod.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        modCard.innerHTML = `
            <div class="mod-image">
                <img src="${mod.image}" alt="${mod.title}">
                <div class="mod-badges">
                    <span class="badge-category">${getCategoryName(mod.category)}</span>
                    <span class="badge-downloads">${mod.downloads}</span>
                </div>
            </div>
            <div class="mod-content">
                <h3 class="mod-title">${mod.title}</h3>
                <p class="mod-desc">${mod.description}</p>
                <div class="mod-tags">
                    ${tagsHtml}
                </div>
                <div class="mod-meta">
                    <span class="mod-author">${mod.author}</span>
                    <span class="mod-date">${mod.date}</span>
                </div>
                <div class="mod-actions">
                    <a href="${DOWNLOAD_LINK}" class="btn-download">Download</a>
                    <button class="btn-details" onclick="openModalById(${mod.id})">Details</button>
                </div>
            </div>
        `;
        modsGrid.appendChild(modCard);
    });
}

// Global helper to find mod by ID and open modal (needed for inline onclick)
window.openModalById = function (id) {
    const mod = mods.find(m => m.id === id);
    if (mod) {
        openModal(mod);
    }
};

function getCategoryName(cat) {
    const names = {
        'visual': 'Visual',
        'gameplay': 'Gameplay',
        'tools': 'Tools'
    };
    return names[cat] || cat;
}

// Filter Event Listeners
let currentCategory = 'all';

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked
        btn.classList.add('active');
        // Update category and render
        currentCategory = btn.getAttribute('data-filter');
        renderMods(currentCategory, searchInput.value);
    });
});

// Search Event Listener
searchInput.addEventListener('input', (e) => {
    renderMods(currentCategory, e.target.value);
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderMods();
});

