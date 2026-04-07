// ===== Menu Data (from nebula.lua) =====
const MENU_DATA = {
    self: {
        label: "Self",
        subCategories: {
            Player: [
                { type: "button", label: "Revive", desc: "Attempt to revive your ped (native)." },
                { type: "button", label: "Heal", desc: "Set health to max." },
                { type: "button", label: "Give Armor", desc: "Set armor to max." },
                { type: "checkbox", label: "God Mode", desc: "Toggle invincibility.", checked: false },
                { type: "checkbox", label: "Invisible", desc: "Toggle invisibility.", checked: false },
                { type: "checkbox", label: "No Ragdoll", desc: "Prevent ragdoll.", checked: false },
                { type: "checkbox", label: "No Clip", desc: "Fly through walls.", checked: false },
                { type: "checkbox", label: "Super Jump", desc: "Jump higher than normal.", checked: false },
                { type: "checkbox", label: "Fast Run", desc: "Run faster than normal.", checked: false },
                { type: "checkbox", label: "Anti-Headshot", desc: "Prevent headshot damage.", checked: false },
                { type: "checkbox", label: "Freecam", desc: "Free camera movement.", checked: false },
                { type: "checkbox", label: "Carry Vehicle (E)", desc: "Pick up vehicles.", checked: false },
                { type: "checkbox", label: "RPG Eyes", desc: "Shoot RPGs from eyes.", checked: false },
                { type: "button", label: "Open Nearest Inventory", desc: "Open closest inventory." },
                { type: "button", label: "Unlock Nearby Cars", desc: "Unlock all nearby vehicles." },
                { type: "button", label: "Framework Revive", desc: "Revive via framework." },
                { type: "button", label: "Suicide", desc: "Kill yourself." },
                { type: "checkbox", label: "One Punch", desc: "Kill with one punch.", checked: false },
            ]
        }
    },
    server: {
        label: "Server",
        subCategories: {
            List: [
                { type: "checkbox", label: "[1] Player_42", desc: "Select player.", checked: false },
                { type: "checkbox", label: "[2] xNoob99x", desc: "Select player.", checked: false },
                { type: "checkbox", label: "[3] Admin_Steve", desc: "Select player.", checked: false },
                { type: "checkbox", label: "[4] DarkRider77", desc: "Select player.", checked: false },
                { type: "checkbox", label: "[5] NightOwl_22", desc: "Select player.", checked: false },
            ],
            Actions: [
                { type: "button", label: "Teleport to Player", desc: "Teleport to selected player." },
                { type: "button", label: "Spectate Player", desc: "Spectate selected player." },
                { type: "button", label: "Attach to Player", desc: "Attach entity to player." },
                { type: "button", label: "Crash Player", desc: "Crash selected player." },
                { type: "button", label: "Cage Player", desc: "Cage selected player." },
            ]
        }
    },
    weapon: {
        label: "Weapon",
        subCategories: {
            Spawner: [
                { type: "button", label: "Give Weapon (Type name)", desc: "Type weapon name to spawn." },
                { type: "button", label: "Give All Weapons", desc: "Give every weapon." },
                { type: "button", label: "Remove All Weapons", desc: "Remove all weapons." },
                { type: "divider", label: "Categories" },
                { type: "scrollable", label: "Melee", desc: "Scroll: knife, bat, machete..." },
                { type: "scrollable", label: "Handguns", desc: "Scroll: pistol, revolver..." },
                { type: "scrollable", label: "SMGs", desc: "Scroll: micro smg, smg..." },
                { type: "scrollable", label: "Assault Rifles", desc: "Scroll: carbine, AK..." },
                { type: "scrollable", label: "Snipers", desc: "Scroll: sniper, heavy sniper..." },
                { type: "scrollable", label: "Heavy", desc: "Scroll: RPG, minigun..." },
            ],
            Combat: [
                { type: "checkbox", label: "Infinite Ammo", desc: "Never run out of ammo.", checked: false },
                { type: "checkbox", label: "Anti-Headshot", desc: "Block headshot damage.", checked: false },
                { type: "checkbox", label: "No Recoil", desc: "Remove weapon recoil.", checked: false },
                { type: "checkbox", label: "Rapid Fire", desc: "Increase fire rate.", checked: false },
            ]
        }
    },
    vehicle: {
        label: "Vehicle",
        subCategories: {
            Spawner: [
                { type: "checkbox", label: "Teleport Into", desc: "Teleport into spawned vehicle.", checked: false },
                { type: "checkbox", label: "Delete Previous", desc: "Delete previous vehicle on spawn.", checked: false },
                { type: "divider", label: "Vehicles" },
                { type: "button", label: "Custom Model", desc: "Type model name to spawn." },
                { type: "scrollable", label: "Compacts", desc: "asbo, blista, panto..." },
                { type: "scrollable", label: "Sedans", desc: "schafter, tailgater..." },
                { type: "scrollable", label: "SUVs", desc: "baller, toros..." },
                { type: "scrollable", label: "Coupes", desc: "zion, sentinel..." },
                { type: "scrollable", label: "Sports", desc: "elegy, jester..." },
                { type: "scrollable", label: "Super", desc: "adder, zentorno..." },
            ],
            Options: [
                { type: "button", label: "Repair Vehicle", desc: "Fix current vehicle." },
                { type: "button", label: "Max Performance", desc: "Upgrade all performance." },
                { type: "button", label: "Delete Current Vehicle", desc: "Delete vehicle you're in." },
                { type: "checkbox", label: "Vehicle God Mode", desc: "Vehicle cannot be damaged.", checked: false },
                { type: "checkbox", label: "Speed Boost", desc: "Boost vehicle speed.", checked: false },
                { type: "checkbox", label: "Seat Shuffle", desc: "Prevent seat shuffling.", checked: false },
            ]
        }
    },
    teleports: {
        label: "Teleports",
        subCategories: {
            Locations: [
                { type: "button", label: "FIB Building", desc: "Teleport to FIB." },
                { type: "button", label: "Airport", desc: "Teleport to LS Airport." },
                { type: "button", label: "Military Base", desc: "Teleport to Fort Zancudo." },
                { type: "button", label: "Mount Chiliad", desc: "Teleport to Mt Chiliad peak." },
                { type: "button", label: "Maze Bank Tower", desc: "Teleport to top of Maze Bank." },
                { type: "button", label: "Waypoint", desc: "Teleport to map waypoint." },
            ]
        }
    },
    visuals: {
        label: "Visuals",
        subCategories: {
            Overlay: [
                { type: "checkbox", label: "Keybind Overlay", desc: "Show active keybinds on screen.", checked: false },
                { type: "checkbox", label: "Console", desc: "Show console panel beside the menu.", checked: false },
                { type: "checkbox", label: "Performance HUD", desc: "Show FPS, frame time, entity count.", checked: false },
            ]
        }
    },
    bypasses: {
        label: "Bypasses",
        subCategories: {
            "AC Scanner": [
                { type: "button", label: "Scan for Anti-Cheats", desc: "Scan all server resources for known AC." },
                { type: "checkbox", label: "Auto-Bypass on Detection", desc: "Automatically load bypass when AC detected.", checked: true },
                { type: "divider", label: "Manual Bypasses" },
                { type: "button", label: "Bypass Electron AC", desc: "Load Electron bypass." },
                { type: "button", label: "Bypass FiveGuard", desc: "Load FiveGuard bypass." },
                { type: "button", label: "Bypass Anticheese", desc: "Load Anticheese bypass." },
            ]
        }
    },
    settings: {
        label: "Settings",
        subCategories: {
            Interface: [
                { type: "scrollable", label: "Theme", desc: "Blue, Pink, Red, White, Dark, Purple, Dark 2" },
                { type: "scrollable", label: "Menu Position X", desc: "Left, Center, Right" },
                { type: "slider", label: "Max Items Visible", desc: "5 - 15 items" },
                { type: "button", label: "Rebind Menu Key", desc: "Change the key to open menu." },
                { type: "checkbox", label: "Console", desc: "Show console panel.", checked: false },
                { type: "checkbox", label: "Performance HUD", desc: "Show perf overlay.", checked: false },
            ],
            Keybinds: [
                { type: "button", label: "Bind: God Mode", desc: "Set hotkey for God Mode." },
                { type: "button", label: "Bind: No Clip", desc: "Set hotkey for No Clip." },
                { type: "button", label: "Bind: Invisible", desc: "Set hotkey for Invisible." },
                { type: "button", label: "Bind: Freecam", desc: "Set hotkey for Freecam." },
                { type: "button", label: "Clear All Binds", desc: "Remove all keybinds." },
            ],
            Config: [
                { type: "button", label: "Save Config", desc: "Save current settings to file." },
                { type: "button", label: "Load Config", desc: "Load saved settings." },
                { type: "button", label: "Reset Config", desc: "Reset to default settings." },
            ]
        }
    }
};

// ===== Render Menu Items =====
function renderMenuItems(container, items, hoveredIdx) {
    container.innerHTML = '';
    items.forEach((item, i) => {
        const el = document.createElement('div');
        el.className = 'menu-item' + (i === hoveredIdx ? ' hovered' : '') + (item.type === 'divider' ? ' divider-item' : '');

        if (item.type === 'divider') {
            el.innerHTML = `<span class="item-divider-label">${item.label}</span>`;
        } else if (item.type === 'checkbox') {
            const on = item.checked ? ' on' : '';
            el.innerHTML = `<span>${item.label}</span><span class="toggle-pill${on}"></span>`;
            el.addEventListener('click', () => {
                item.checked = !item.checked;
                renderMenuItems(container, items, i);
            });
        } else if (item.type === 'button') {
            el.innerHTML = `<span>${item.label}</span><span class="item-type">action</span>`;
            el.addEventListener('click', () => {
                el.style.background = 'rgba(79, 110, 247, 0.2)';
                setTimeout(() => { el.style.background = ''; }, 300);
            });
        } else if (item.type === 'scrollable') {
            el.innerHTML = `<span>${item.label}</span><span class="item-type">scroll</span>`;
        } else if (item.type === 'slider') {
            el.innerHTML = `<span>${item.label}</span><span class="item-type">slider</span>`;
        }

        // Tooltip on hover
        if (item.desc && item.type !== 'divider') {
            el.title = item.desc;
        }

        container.appendChild(el);
    });
}

// ===== Render Sub-Categories =====
function renderSubCats(container, subCatNames, activeIdx, onClick) {
    container.innerHTML = '';
    subCatNames.forEach((name, i) => {
        const btn = document.createElement('button');
        btn.className = 'menu-sub-cat' + (i === activeIdx ? ' active' : '');
        btn.textContent = name;
        btn.addEventListener('click', () => onClick(i));
        container.appendChild(btn);
    });
}

// ===== Initialize a menu instance =====
function initMenu(menuEl, isDemo) {
    const catBtns = menuEl.querySelectorAll('.menu-cat');
    const itemsContainer = menuEl.querySelector('.menu-items') || menuEl.querySelector('#menuItems') || menuEl.querySelector('#demoMenuItems');
    const subCatsContainer = isDemo ? document.getElementById('demoSubCats') : null;
    const pathEl = isDemo ? document.getElementById('demoPath') : menuEl.querySelector('.menu-path');
    const countEl = isDemo ? document.getElementById('demoCount') : menuEl.querySelector('.menu-count');

    let currentCat = 'self';
    let currentSubIdx = 0;

    function getSubCatNames(catKey) {
        return Object.keys(MENU_DATA[catKey].subCategories);
    }

    function getItems(catKey, subIdx) {
        const names = getSubCatNames(catKey);
        return MENU_DATA[catKey].subCategories[names[subIdx]] || [];
    }

    function update() {
        const items = getItems(currentCat, currentSubIdx);
        const subNames = getSubCatNames(currentCat);
        renderMenuItems(itemsContainer, items, 0);

        if (subCatsContainer) {
            renderSubCats(subCatsContainer, subNames, currentSubIdx, (idx) => {
                currentSubIdx = idx;
                update();
            });
        }

        if (pathEl) {
            pathEl.textContent = `Native > ${MENU_DATA[currentCat].label} > ${subNames[currentSubIdx]}`;
        }
        if (countEl) {
            countEl.textContent = `1 / ${items.filter(i => i.type !== 'divider').length}`;
        }

        // Update active cat button
        catBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.cat === currentCat);
        });
    }

    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentCat = btn.dataset.cat;
            currentSubIdx = 0;
            update();
        });
    });

    update();
}

// ===== Navbar scroll =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Counter Animation =====
function animateCounters() {
    document.querySelectorAll('.metric-val').forEach(el => {
        const target = +el.dataset.target;
        const duration = 2000;
        const start = performance.now();
        function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(target * eased);
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    });
}

const heroObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) { animateCounters(); heroObs.disconnect(); }
    });
}, { threshold: 0.3 });
const heroEl = document.querySelector('.hero');
if (heroEl) heroObs.observe(heroEl);

// ===== Scroll Reveal =====
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.feat-card, .demo-info-card, .price-card, .faq-item').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    revealObs.observe(el);
});

// ===== FAQ =====
document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!wasActive) item.classList.add('active');
    });
});

// ===== Smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ===== Active nav link =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
});

// ===== Mobile toggle =====
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinksEl = document.querySelector('.nav-links');
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        const isOpen = navLinksEl.style.display === 'flex';
        navLinksEl.style.display = isOpen ? '' : 'flex';
        if (!isOpen) {
            navLinksEl.style.flexDirection = 'column';
            navLinksEl.style.position = 'absolute';
            navLinksEl.style.top = '100%';
            navLinksEl.style.left = '0';
            navLinksEl.style.right = '0';
            navLinksEl.style.background = 'rgba(6, 6, 11, 0.98)';
            navLinksEl.style.padding = '16px 24px';
            navLinksEl.style.gap = '8px';
            navLinksEl.style.borderBottom = '1px solid var(--border)';
            navLinksEl.style.backdropFilter = 'blur(20px)';
        }
    });
}

// ===== Init Menus =====
document.addEventListener('DOMContentLoaded', () => {
    const heroMenu = document.getElementById('heroMenu');
    const demoMenu = document.getElementById('demoMenu');
    if (heroMenu) initMenu(heroMenu, false);
    if (demoMenu) initMenu(demoMenu, true);
});
