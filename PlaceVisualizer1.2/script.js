// Jotun color dictionary
const JOTUN_COLORS = {
    "1519": { name: "Vanilla Latte 1519", hex: "#D2C3B1" },
    "6236": { name: "Darjeeling 6236", hex: "#3E5548" },
    "9918": { name: "Classic White 9918", hex: "#F3F4F6" },
    "1622": { name: "Refined 1622", hex: "#E4DED6" },
    "8470": { name: "Smooth Stone 8470", hex: "#B9B1A7" },
};

// Translation dictionary for Arabic and English
const translations = {
    ar: {
        title: 'محاكي ألوان الغرف - من الداخل',
        subheader: 'مترية • عرض من داخل الغرفة',
        settingsTitle: 'الإعدادات',
        labelWidth: 'العرض (م)',
        labelLength: 'الطول (م)',
        labelHeight: 'الارتفاع (م)',
        wall1: 'الحائط الأمامي',
        wall2: 'الحائط الخلفي',
        wall3: 'الحائط الأيسر',
        wall4: 'الحائط الأيمن',
        examplesTitle: 'أمثلة سريعة (انقر للإدراج):',
        lightingTitle: 'درجة حرارة الإضاءة (كلفن):',
        furnitureTitle: 'إضافة الأثاث:',
        furnitureNote: '💡 <strong>تحريك الأثاث:</strong> اضغط واسحب على أي قطعة أثاث لتحريكها • انقر مرتين لإعادة الموقع الافتراضي',
        bed: 'سرير',
        wardrobe: 'دولاب',
        dresser: 'تسريحة',
        carpet: 'سجادة',
        tvStand: 'مكتبة تليفزيون',
        nightstand: 'طاولة سرير',
        chair: 'كرسي',
        mirror: 'مرآة',
        lamp: 'مصباح طاولة',
        plant: 'نبات',
        reset: 'إعادة الضبط',
        swatchFront: 'أمامي',
        swatchBack: 'خلفي',
        swatchLeft: 'أيسر',
        swatchRight: 'أيمن',
        footerNote: '💡 اكتب كود جوتن (مثال: 1519 أو 6236) أو HEX مباشرة (مثل #C9B7A6).',
        unknown: 'غير معروف',
        currentLighting: 'الإضاءة الحالية:',
        placeholderColor: 'أدخل كود جوتن أو HEX'
    },
    en: {
        title: 'Bedroom Color Visualizer - Interior View',
        subheader: 'Metric • Inside view',
        settingsTitle: 'Settings',
        labelWidth: 'Width (m)',
        labelLength: 'Length (m)',
        labelHeight: 'Height (m)',
        wall1: 'Front Wall',
        wall2: 'Back Wall',
        wall3: 'Left Wall',
        wall4: 'Right Wall',
        examplesTitle: 'Quick examples (click to insert):',
        lightingTitle: 'Lighting temperature (Kelvin):',
        furnitureTitle: 'Add furniture:',
        furnitureNote: '💡 <strong>Moving furniture:</strong> click and drag any piece to move • double-click to reset position',
        bed: 'Bed',
        wardrobe: 'Wardrobe',
        dresser: 'Dresser',
        carpet: 'Carpet',
        tvStand: 'TV Stand',
        nightstand: 'Nightstand',
        chair: 'Chair',
        mirror: 'Mirror',
        lamp: 'Table Lamp',
        plant: 'Plant',
        reset: 'Reset',
        swatchFront: 'Front',
        swatchBack: 'Back',
        swatchLeft: 'Left',
        swatchRight: 'Right',
        footerNote: '💡 Enter a Jotun code (e.g., 1519 or 6236) or HEX directly (e.g., #C9B7A6).',
        unknown: 'Unknown',
        currentLighting: 'Current lighting:',
        placeholderColor: 'Enter a Jotun code or HEX'
    }
};

// Current language (default Arabic)
let currentLanguage = 'ar';

// Update all translatable UI elements based on currentLanguage
function updateLanguageUI() {
    // Title and header
    const titleEl = document.getElementById('title');
    if (titleEl) titleEl.textContent = translations[currentLanguage].title;
    const subheaderEl = document.getElementById('subheader');
    if (subheaderEl) subheaderEl.textContent = translations[currentLanguage].subheader;
    document.title = translations[currentLanguage].title;
    // Settings title
    const settingsTitleEl = document.getElementById('settings-title');
    if (settingsTitleEl) settingsTitleEl.textContent = translations[currentLanguage].settingsTitle;
    // Dimension labels
    const lw = document.getElementById('label-width');
    if (lw) lw.textContent = translations[currentLanguage].labelWidth;
    const ll = document.getElementById('label-length');
    if (ll) ll.textContent = translations[currentLanguage].labelLength;
    const lh = document.getElementById('label-height');
    if (lh) lh.textContent = translations[currentLanguage].labelHeight;
    // Wall names
    const wall1Name = document.getElementById('label-wall1-name');
    if (wall1Name) wall1Name.textContent = translations[currentLanguage].wall1;
    const wall2Name = document.getElementById('label-wall2-name');
    if (wall2Name) wall2Name.textContent = translations[currentLanguage].wall2;
    const wall3Name = document.getElementById('label-wall3-name');
    if (wall3Name) wall3Name.textContent = translations[currentLanguage].wall3;
    const wall4Name = document.getElementById('label-wall4-name');
    if (wall4Name) wall4Name.textContent = translations[currentLanguage].wall4;
    // Examples title
    const examplesTitleEl = document.getElementById('examples-title');
    if (examplesTitleEl) examplesTitleEl.textContent = translations[currentLanguage].examplesTitle;
    // Lighting title
    const lightingTitleEl = document.getElementById('lighting-title');
    if (lightingTitleEl) lightingTitleEl.textContent = translations[currentLanguage].lightingTitle;
    // Furniture title
    const furnitureTitleEl = document.getElementById('furniture-title');
    if (furnitureTitleEl) furnitureTitleEl.textContent = translations[currentLanguage].furnitureTitle;
    // Furniture note
    const furnitureNoteEl = document.getElementById('furniture-note');
    if (furnitureNoteEl) furnitureNoteEl.innerHTML = translations[currentLanguage].furnitureNote;
    // Furniture labels
    const ids = ['bed','wardrobe','dresser','carpet','tvStand','nightstand','chair','mirror','lamp','plant'];
    ids.forEach(id => {
        const el = document.getElementById(`label-${id}`);
        if (el) el.textContent = translations[currentLanguage][id];
    });
    // Reset button
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) resetBtn.textContent = translations[currentLanguage].reset;
    // Swatch labels
    const swatch1Label = document.getElementById('swatch1-label');
    if (swatch1Label) swatch1Label.textContent = translations[currentLanguage].swatchFront;
    const swatch2Label = document.getElementById('swatch2-label');
    if (swatch2Label) swatch2Label.textContent = translations[currentLanguage].swatchBack;
    const swatch3Label = document.getElementById('swatch3-label');
    if (swatch3Label) swatch3Label.textContent = translations[currentLanguage].swatchLeft;
    const swatch4Label = document.getElementById('swatch4-label');
    if (swatch4Label) swatch4Label.textContent = translations[currentLanguage].swatchRight;
    // Footer note
    const footerNote = document.getElementById('footer-note');
    if (footerNote) footerNote.innerHTML = translations[currentLanguage].footerNote;
    // Placeholder for color inputs
    ['wall1','wall2','wall3','wall4'].forEach(id => {
        const input = document.getElementById(id);
        if (input) input.placeholder = translations[currentLanguage].placeholderColor;
    });
    // Update lighting text if exists
    if (document.getElementById('current-lighting')) {
        setupLighting(currentLighting);
    }
}

// Change language
function setLanguage(lang) {
    currentLanguage = lang;
    updateLanguageUI();
}

// Parse color input
function parseColor(input) {
    const raw = (input || "").trim().toLowerCase();
    if (!raw) return { hex: null, label: "" };

    // Check if it's a valid HEX
    const hexMatch = raw.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (hexMatch) {
        return { hex: normalizeHex(raw), label: raw.toUpperCase() };
    }

    // Check Jotun dictionary
    const code = raw.replace(/[^0-9]/g, "");
    if (code && JOTUN_COLORS[code]) {
        return { hex: normalizeHex(JOTUN_COLORS[code].hex), label: JOTUN_COLORS[code].name };
    }

    return { hex: null, label: translations[currentLanguage].unknown };
}

function normalizeHex(h) {
    let hex = h.trim();
    if (!hex.startsWith("#")) hex = `#${hex}`;
    if (/^#[0-9a-f]{3}$/i.test(hex)) {
        const r = hex[1], g = hex[2], b = hex[3];
        hex = `#${r}${r}${g}${g}${b}${b}`;
    }
    return hex.toUpperCase();
}

// Convert Kelvin temperature to RGB color (improved accuracy)
function kelvinToRGB(kelvin) {
    // Clamp kelvin to realistic range
    kelvin = Math.max(1000, Math.min(40000, kelvin));

    let temp = kelvin / 100;
    let red, green, blue;

    // More accurate color temperature conversion using improved algorithm
    if (temp <= 66) {
        red = 255;
        green = temp <= 19 ? 0 : 99.4708025861 * Math.log(temp - 10) - 161.1195681661;
        blue = temp >= 66 ? 255 : temp <= 19 ? 0 : 138.5177312231 * Math.log(temp - 10) - 305.0447927307;
    } else {
        red = 329.698727446 * Math.pow(temp - 60, -0.1332047592);
        green = 288.1221695283 * Math.pow(temp - 60, -0.0755148492);
        blue = 255;
    }

    // Clamp values
    red = Math.max(0, Math.min(255, red));
    green = Math.max(0, Math.min(255, green));
    blue = Math.max(0, Math.min(255, blue));

    // Apply gamma correction for more realistic appearance
    const gamma = 2.2;
    red = Math.pow(red / 255, 1 / gamma);
    green = Math.pow(green / 255, 1 / gamma);
    blue = Math.pow(blue / 255, 1 / gamma);

    // Apply additional correction for more realistic lighting
    if (kelvin < 3000) {
        // Warm lights - enhance red/orange
        red = Math.min(1, red * 1.1);
        green = green * 0.9;
        blue = blue * 0.7;
    } else if (kelvin > 7000) {
        // Cool lights - enhance blue
        red = red * 0.9;
        green = green * 0.95;
        blue = Math.min(1, blue * 1.05);
    }

    return {
        r: red,
        g: green,
        b: blue
    };
}

// Get lighting description
function getLightingDescription(kelvin) {
    if (currentLanguage === 'ar') {
        if (kelvin <= 1200) return 'شموع/نار';
        if (kelvin <= 1500) return 'مصباح زيتي';
        if (kelvin <= 1700) return 'مصباح غاز';
        if (kelvin <= 2000) return 'مصباح تنجستن';
        if (kelvin <= 2500) return 'مصباح هالوجين';
        if (kelvin <= 2700) return 'مصباح LED دافئ';
        if (kelvin <= 3000) return 'مصباح LED أبيض دافئ';
        if (kelvin <= 3500) return 'مصباح فلورسنت دافئ';
        if (kelvin <= 4000) return 'ضوء طبيعي غروب';
        if (kelvin <= 4500) return 'ضوء طبيعي صباح';
        if (kelvin <= 5000) return 'ضوء طبيعي ظهر';
        if (kelvin <= 5500) return 'ضوء نهار محايد';
        if (kelvin <= 6000) return 'ضوء نهار بارد';
        if (kelvin <= 6500) return 'ضوء سماء صافية';
        if (kelvin <= 7000) return 'ضوء سماء زاهية';
        if (kelvin <= 8000) return 'ضوء سماء غائمة';
        if (kelvin <= 9000) return 'ضوء سماء زرقاء';
        if (kelvin <= 10000) return 'ضوء سماء زرقاء شديدة';
        return 'ضوء أزرق شديد';
    } else {
        if (kelvin <= 1200) return 'Candle/Fire';
        if (kelvin <= 1500) return 'Oil lamp';
        if (kelvin <= 1700) return 'Gas lamp';
        if (kelvin <= 2000) return 'Tungsten lamp';
        if (kelvin <= 2500) return 'Halogen lamp';
        if (kelvin <= 2700) return 'Warm LED light';
        if (kelvin <= 3000) return 'Warm white LED';
        if (kelvin <= 3500) return 'Warm fluorescent';
        if (kelvin <= 4000) return 'Evening natural light';
        if (kelvin <= 4500) return 'Morning natural light';
        if (kelvin <= 5000) return 'Noon natural light';
        if (kelvin <= 5500) return 'Neutral daylight';
        if (kelvin <= 6000) return 'Cool daylight';
        if (kelvin <= 6500) return 'Clear sky light';
        if (kelvin <= 7000) return 'Bright sky light';
        if (kelvin <= 8000) return 'Cloudy sky light';
        if (kelvin <= 9000) return 'Blue sky light';
        if (kelvin <= 10000) return 'Deep blue sky light';
        return 'Intense blue light';
    }
}

// Three.js scene setup
let scene, camera, renderer, controls;
let roomObjects = {};
let currentLighting = 3000; // Default lighting temperature
let lights = {}; // Store lighting objects
let furnitureObjects = {}; // Store furniture objects
let furnitureState = {
    bed: true,
    wardrobe: true,
    dresser: false,
    carpet: false,
    tvStand: false,
    nightstand: false,
    chair: false,
    mirror: false,
    lamp: false,
    plant: false
};

// Furniture movement system
let isDragging = false;
let selectedFurniture = null;
let dragPlane = new THREE.Plane();
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let furniturePositions = {}; // Store custom positions
let snapGrid = 0.2; // 20cm grid for snapping

function init() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Camera - positioned inside the room
    const container = document.getElementById('canvas-container');
    camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.set(0, 1.6, 0); // Eye level inside room

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.shadowMap.enabled = false; // Disable shadows
    container.appendChild(renderer.domElement);

    // Controls - restricted to inside the room
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 3;
    controls.minDistance = 0.1;
    controls.maxPolarAngle = Math.PI;
    controls.minPolarAngle = 0;
    controls.enablePan = false; // Disable panning to keep camera inside

    // Initialize lighting system
    setupLighting(currentLighting);

    updateRoom();
    animate();
}

function setupLighting(kelvin) {
    // Remove existing lights
    Object.values(lights).forEach(light => {
        if (light) scene.remove(light);
    });
    lights = {};

    const rgb = kelvinToRGB(kelvin);
    const color = new THREE.Color(rgb.r, rgb.g, rgb.b);

    // Adjust intensity based on temperature
    let ambientIntensity, directionalIntensity, pointIntensity;

    if (kelvin <= 3000) {
        // Warm lights - softer, more ambient
        ambientIntensity = 0.7;
        directionalIntensity = 0.3;
        pointIntensity = 0.4;
    } else if (kelvin <= 5000) {
        // Neutral lights - balanced
        ambientIntensity = 0.6;
        directionalIntensity = 0.4;
        pointIntensity = 0.3;
    } else {
        // Cool lights - brighter, more direct
        ambientIntensity = 0.5;
        directionalIntensity = 0.5;
        pointIntensity = 0.2;
    }

    // Ambient light
    const ambientLight = new THREE.AmbientLight(color, ambientIntensity);
    scene.add(ambientLight);
    lights.ambient = ambientLight;

    // Directional light from above
    const directionalLight = new THREE.DirectionalLight(color, directionalIntensity);
    directionalLight.position.set(0, 4, 0);
    directionalLight.castShadow = false;
    scene.add(directionalLight);
    lights.directional = directionalLight;

    // Point light for additional illumination
    const pointLight = new THREE.PointLight(color, pointIntensity, 8);
    pointLight.position.set(0, 2, 0);
    scene.add(pointLight);
    lights.point = pointLight;

            // Update UI with translated label
            const lightingEl = document.getElementById('current-lighting');
            if (lightingEl) {
                lightingEl.textContent = `${translations[currentLanguage].currentLighting} ${kelvin}K (${getLightingDescription(kelvin)})`;
            }

    // Update button states
    document.querySelectorAll('.lighting-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.temp) === kelvin) {
            btn.classList.add('active');
        }
    });
}

// Snap position to grid
function snapToGrid(position) {
    return {
        x: Math.round(position.x / snapGrid) * snapGrid,
        z: Math.round(position.z / snapGrid) * snapGrid
    };
}

// Check if position is within room bounds
function isWithinBounds(position, width, length) {
    const margin = 0.3;
    return position.x >= -width / 2 + margin &&
        position.x <= width / 2 - margin &&
        position.z >= -length / 2 + margin &&
        position.z <= length / 2 - margin;
}

function addFurniture(width, length, height) {
    // Remove existing furniture
    Object.values(furnitureObjects).forEach(obj => {
        if (obj) scene.remove(obj);
    });
    furnitureObjects = {};

    // Bed (already exists, just control visibility)
    if (furnitureState.bed && roomObjects.bedFrame) {
        roomObjects.bedFrame.visible = true;
        roomObjects.mattress.visible = true;
        roomObjects.leftPillow.visible = true;
        roomObjects.rightPillow.visible = true;
    } else if (roomObjects.bedFrame) {
        roomObjects.bedFrame.visible = false;
        roomObjects.mattress.visible = false;
        roomObjects.leftPillow.visible = false;
        roomObjects.rightPillow.visible = false;
    }

    // Wardrobe (already exists, just control visibility)
    if (furnitureState.wardrobe && roomObjects.wardrobe) {
        roomObjects.wardrobe.visible = true;
        roomObjects.leftDoor.visible = true;
        roomObjects.rightDoor.visible = true;
        roomObjects.leftHandle.visible = true;
        roomObjects.rightHandle.visible = true;
        roomObjects.topTrim.visible = true;
        roomObjects.baseTrim.visible = true;
        roomObjects.separation.visible = true;
    } else if (roomObjects.wardrobe) {
        roomObjects.wardrobe.visible = false;
        roomObjects.leftDoor.visible = false;
        roomObjects.rightDoor.visible = false;
        roomObjects.leftHandle.visible = false;
        roomObjects.rightHandle.visible = false;
        roomObjects.topTrim.visible = false;
        roomObjects.baseTrim.visible = false;
        roomObjects.separation.visible = false;
    }

    // Dresser (تسريحة)
    if (furnitureState.dresser) {
        const dresserWidth = Math.min(1.2, width * 0.25);
        const dresserHeight = 0.8;
        const dresserDepth = 0.5;

        const dresserGeometry = new THREE.BoxGeometry(dresserWidth, dresserHeight, dresserDepth);
        const dresserMaterial = new THREE.MeshStandardMaterial({
            color: 0xF5E6D3,
            roughness: 0.8
        });
        const dresser = new THREE.Mesh(dresserGeometry, dresserMaterial);

        // Use custom position or default
        const defaultPos = { x: -width * 0.3, z: -length * 0.3 };
        const customPos = furniturePositions.dresser || defaultPos;
        const snappedPos = snapToGrid(customPos);

        dresser.position.set(snappedPos.x, dresserHeight / 2, snappedPos.z);
        dresser.userData = { type: 'dresser', width: dresserWidth, height: dresserHeight, depth: dresserDepth };
        scene.add(dresser);
        furnitureObjects.dresser = dresser;

        // Dresser mirror
        const mirrorGeometry = new THREE.PlaneGeometry(dresserWidth * 0.8, dresserHeight * 0.6);
        const mirrorMaterial = new THREE.MeshStandardMaterial({
            color: 0xE0E0E0,
            metalness: 0.9,
            roughness: 0.1
        });
        const mirror = new THREE.Mesh(mirrorGeometry, mirrorMaterial);
        mirror.position.set(snappedPos.x, dresserHeight + 0.3, snappedPos.z);
        mirror.rotation.y = Math.PI * 0.1;
        mirror.userData = { type: 'dresserMirror', parent: 'dresser' };
        scene.add(mirror);
        furnitureObjects.dresserMirror = mirror;
    }

    // Carpet (سجادة)
    if (furnitureState.carpet) {
        const carpetWidth = width * 0.7;
        const carpetLength = length * 0.6;
        const carpetGeometry = new THREE.PlaneGeometry(carpetWidth, carpetLength);
        const carpetMaterial = new THREE.MeshStandardMaterial({
            color: 0x8B4513,
            roughness: 0.9
        });
        const carpet = new THREE.Mesh(carpetGeometry, carpetMaterial);
        carpet.rotation.x = -Math.PI / 2;
        carpet.position.y = 0.01;
        carpet.userData = { type: 'carpet', width: carpetWidth, height: 0.01, depth: carpetLength };
        scene.add(carpet);
        furnitureObjects.carpet = carpet;
    }

    // TV Stand (مكتبة تليفزيون)
    if (furnitureState.tvStand) {
        const tvStandWidth = Math.min(1.5, width * 0.3);
        const tvStandHeight = 0.6;
        const tvStandDepth = 0.4;

        const tvStandGeometry = new THREE.BoxGeometry(tvStandWidth, tvStandHeight, tvStandDepth);
        const tvStandMaterial = new THREE.MeshStandardMaterial({
            color: 0x2F2F2F,
            roughness: 0.7
        });
        const tvStand = new THREE.Mesh(tvStandGeometry, tvStandMaterial);

        // Use custom position or default
        const defaultPos = { x: width * 0.3, z: -length * 0.3 };
        const customPos = furniturePositions.tvStand || defaultPos;
        const snappedPos = snapToGrid(customPos);

        tvStand.position.set(snappedPos.x, tvStandHeight / 2, snappedPos.z);
        tvStand.userData = { type: 'tvStand', width: tvStandWidth, height: tvStandHeight, depth: tvStandDepth };
        scene.add(tvStand);
        furnitureObjects.tvStand = tvStand;

        // TV
        const tvGeometry = new THREE.BoxGeometry(tvStandWidth * 0.9, 0.4, 0.05);
        const tvMaterial = new THREE.MeshStandardMaterial({
            color: 0x1A1A1A,
            roughness: 0.3
        });
        const tv = new THREE.Mesh(tvGeometry, tvMaterial);
        tv.position.set(snappedPos.x, tvStandHeight + 0.2, snappedPos.z);
        tv.userData = { type: 'tv', parent: 'tvStand' };
        scene.add(tv);
        furnitureObjects.tv = tv;
    }

    // Nightstand (طاولة سرير)
    if (furnitureState.nightstand) {
        const nightstandSize = 0.4;
        const nightstandGeometry = new THREE.BoxGeometry(nightstandSize, 0.5, nightstandSize);
        const nightstandMaterial = new THREE.MeshStandardMaterial({
            color: 0xF5E6D3,
            roughness: 0.8
        });
        const nightstand = new THREE.Mesh(nightstandGeometry, nightstandMaterial);

        // Position at front wall level (same as bed front)
        const bedZ = -length / 2 + (Math.min(2.2, length * 0.6)) / 2 + Math.max(0.15, length * 0.05);
        const defaultPos = { x: -width * 0.25, z: bedZ };
        const customPos = furniturePositions.nightstand || defaultPos;
        const snappedPos = snapToGrid(customPos);

        nightstand.position.set(snappedPos.x, 0.25, snappedPos.z);
        nightstand.userData = { type: 'nightstand', width: nightstandSize, height: 0.5, depth: nightstandSize };
        scene.add(nightstand);
        furnitureObjects.nightstand = nightstand;
    }

    // Chair (كرسي)
    if (furnitureState.chair) {
        const chairWidth = 0.6;
        const chairHeight = 0.9;
        const chairDepth = 0.6;

        // Use custom position or default
        const defaultPos = { x: 0, z: length * 0.2 };
        const customPos = furniturePositions.chair || defaultPos;
        const snappedPos = snapToGrid(customPos);

        // Chair seat
        const seatGeometry = new THREE.BoxGeometry(chairWidth, 0.1, chairDepth);
        const chairMaterial = new THREE.MeshStandardMaterial({
            color: 0x8B4513,
            roughness: 0.8
        });
        const seat = new THREE.Mesh(seatGeometry, chairMaterial);
        seat.position.set(snappedPos.x, 0.45, snappedPos.z);
        seat.userData = { type: 'chair', width: chairWidth, height: chairHeight, depth: chairDepth };
        scene.add(seat);
        furnitureObjects.chairSeat = seat;

        // Chair back
        const backGeometry = new THREE.BoxGeometry(chairWidth, chairHeight, 0.05);
        const back = new THREE.Mesh(backGeometry, chairMaterial);
        back.position.set(snappedPos.x, chairHeight / 2, snappedPos.z + chairDepth / 2);
        back.userData = { type: 'chairBack', parent: 'chair' };
        scene.add(back);
        furnitureObjects.chairBack = back;
    }

    // Mirror (مرآة)
    if (furnitureState.mirror) {
        const mirrorWidth = 0.8;
        const mirrorHeight = 1.2;
        const mirrorGeometry = new THREE.PlaneGeometry(mirrorWidth, mirrorHeight);
        const mirrorMaterial = new THREE.MeshStandardMaterial({
            color: 0xE0E0E0,
            metalness: 0.9,
            roughness: 0.1
        });
        const mirror = new THREE.Mesh(mirrorGeometry, mirrorMaterial);
        mirror.position.set(width * 0.35, mirrorHeight / 2, 0);
        mirror.rotation.y = -Math.PI / 2;
        mirror.userData = { type: 'wallMirror', width: mirrorWidth, height: mirrorHeight, depth: 0.05 };
        scene.add(mirror);
        furnitureObjects.wallMirror = mirror;

        // Mirror frame
        const frameGeometry = new THREE.BoxGeometry(mirrorWidth + 0.1, mirrorHeight + 0.1, 0.05);
        const frameMaterial = new THREE.MeshStandardMaterial({
            color: 0x8B7355,
            roughness: 0.6
        });
        const frame = new THREE.Mesh(frameGeometry, frameMaterial);
        frame.position.set(width * 0.35, mirrorHeight / 2, 0);
        frame.rotation.y = -Math.PI / 2;
        scene.add(frame);
        furnitureObjects.mirrorFrame = frame;
    }

    // Table Lamps (مصابيح طاولة) - Left and Right
    if (furnitureState.lamp) {
        const bedZ = -length / 2 + (Math.min(2.2, length * 0.6)) / 2 + Math.max(0.15, length * 0.05);
        const bedWidth = Math.min(1.6, width * 0.35);

        // Left Lamp
        const leftLampBaseGeometry = new THREE.CylinderGeometry(0.08, 0.12, 0.25, 8);
        const lampMaterial = new THREE.MeshStandardMaterial({
            color: 0x2F2F2F,
            roughness: 0.3
        });
        const leftLampBase = new THREE.Mesh(leftLampBaseGeometry, lampMaterial);
        leftLampBase.position.set(-bedWidth * 0.4, 0.6, bedZ);
        leftLampBase.userData = { type: 'leftLamp', width: 0.16, height: 0.25, depth: 0.16 };
        scene.add(leftLampBase);
        furnitureObjects.leftLampBase = leftLampBase;

        const leftLampShadeGeometry = new THREE.ConeGeometry(0.15, 0.25, 8);
        const shadeMaterial = new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            roughness: 0.9
        });
        const leftLampShade = new THREE.Mesh(leftLampShadeGeometry, shadeMaterial);
        leftLampShade.position.set(-bedWidth * 0.4, 0.75, bedZ);
        scene.add(leftLampShade);
        furnitureObjects.leftLampShade = leftLampShade;

        // Right Lamp
        const rightLampBase = new THREE.Mesh(leftLampBaseGeometry, lampMaterial);
        rightLampBase.position.set(bedWidth * 0.4, 0.6, bedZ);
        rightLampBase.userData = { type: 'rightLamp', width: 0.16, height: 0.25, depth: 0.16 };
        scene.add(rightLampBase);
        furnitureObjects.rightLampBase = rightLampBase;

        const rightLampShade = new THREE.Mesh(leftLampShadeGeometry, shadeMaterial);
        rightLampShade.position.set(bedWidth * 0.4, 0.75, bedZ);
        scene.add(rightLampShade);
        furnitureObjects.rightLampShade = rightLampShade;
    }

    // Plant (نبات)
    if (furnitureState.plant) {
        // Plant pot
        const potGeometry = new THREE.CylinderGeometry(0.15, 0.12, 0.2, 8);
        const potMaterial = new THREE.MeshStandardMaterial({
            color: 0x8B4513,
            roughness: 0.8
        });
        const pot = new THREE.Mesh(potGeometry, potMaterial);
        pot.position.set(width * 0.3, 0.1, length * 0.2);
        pot.userData = { type: 'plant', width: 0.3, height: 0.45, depth: 0.3 };
        scene.add(pot);
        furnitureObjects.plantPot = pot;

        // Plant leaves
        const leavesGeometry = new THREE.SphereGeometry(0.25, 8, 6);
        const leavesMaterial = new THREE.MeshStandardMaterial({
            color: 0x228B22,
            roughness: 0.9
        });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.set(width * 0.3, 0.35, length * 0.2);
        scene.add(leaves);
        furnitureObjects.plantLeaves = leaves;
    }
}

function onMouseDown(event) {
    event.preventDefault();

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // Check for furniture intersection
    const furnitureMeshes = Object.values(furnitureObjects).filter(obj => obj && obj.userData && obj.userData.type);
    const intersects = raycaster.intersectObjects(furnitureMeshes);

    if (intersects.length > 0) {
        selectedFurniture = intersects[0].object;
        isDragging = true;

        // Set drag plane
        dragPlane.setFromNormalAndCoplanarPoint(
            camera.getWorldDirection(new THREE.Vector3()),
            selectedFurniture.position
        );

        // Disable camera controls
        controls.enabled = false;
    }
}

function onMouseMove(event) {
    if (!isDragging || !selectedFurniture) return;

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersection = new THREE.Vector3();
    raycaster.ray.intersectPlane(dragPlane, intersection);

    // Snap to grid
    const snappedPos = snapToGrid(intersection);

    // Check bounds
    const width = parseFloat(document.getElementById('width').value);
    const length = parseFloat(document.getElementById('length').value);

    if (isWithinBounds(snappedPos, width, length)) {
        selectedFurniture.position.x = snappedPos.x;
        selectedFurniture.position.z = snappedPos.z;

        // Update stored position
        const furnitureType = selectedFurniture.userData.type;
        furniturePositions[furnitureType] = { x: snappedPos.x, z: snappedPos.z };

        // Move related objects (like TV with TV stand)
        if (selectedFurniture.userData.parent) {
            const parentType = selectedFurniture.userData.parent;
            furniturePositions[parentType] = { x: snappedPos.x, z: snappedPos.z };
        }

        // Move child objects
        Object.values(furnitureObjects).forEach(obj => {
            if (obj && obj.userData && obj.userData.parent === furnitureType) {
                obj.position.x = snappedPos.x;
                obj.position.z = snappedPos.z;
            }
        });
    }
}

function onMouseUp(event) {
    if (isDragging) {
        isDragging = false;
        selectedFurniture = null;
        controls.enabled = true;
    }
}

function onDoubleClick(event) {
    event.preventDefault();

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // Check for furniture intersection
    const furnitureMeshes = Object.values(furnitureObjects).filter(obj => obj && obj.userData && obj.userData.type);
    const intersects = raycaster.intersectObjects(furnitureMeshes);

    if (intersects.length > 0) {
        const furniture = intersects[0].object;
        const furnitureType = furniture.userData.type;

        // Reset position to default
        delete furniturePositions[furnitureType];
        updateRoom();
    }
}

function updateRoom() {
    // Clear existing room objects
    Object.values(roomObjects).forEach(obj => {
        if (obj) scene.remove(obj);
    });
    roomObjects = {};

    const width = parseFloat(document.getElementById('width').value);
    const length = parseFloat(document.getElementById('length').value);
    const height = parseFloat(document.getElementById('height').value);

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(width, length);
    const floorMaterial = new THREE.MeshStandardMaterial({
        color: 0xdddddd,
        roughness: 0.8
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = false;
    scene.add(floor);
    roomObjects.floor = floor;

    // Ceiling
    const ceilingGeometry = new THREE.PlaneGeometry(width, length);
    const ceilingMaterial = new THREE.MeshStandardMaterial({
        color: 0xf5f5f5,
        roughness: 0.9
    });
    const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
    ceiling.rotation.x = -Math.PI / 2;
    ceiling.position.y = height;
    ceiling.receiveShadow = false;
    scene.add(ceiling);
    roomObjects.ceiling = ceiling;

    // Walls - normals face inward
    const wallInputs = ['wall1', 'wall2', 'wall3', 'wall4'];
    const wallConfigs = [
        { width: width, height: height, position: [0, height / 2, -length / 2], rotation: [0, 0, 0] }, // Front
        { width: width, height: height, position: [0, height / 2, length / 2], rotation: [0, Math.PI, 0] }, // Back
        { width: length, height: height, position: [-width / 2, height / 2, 0], rotation: [0, Math.PI / 2, 0] }, // Left
        { width: length, height: height, position: [width / 2, height / 2, 0], rotation: [0, -Math.PI / 2, 0] } // Right
    ];

    // Add wooden wardrobe at back wall - scaled based on room size
    const wardrobeWidth = Math.min(width - 0.3, 2.5); // Max 2.5m width, with margin
    const wardrobeDepth = Math.min(0.5, length * 0.15); // Proportional to room length
    const wardrobeHeight = height - 0.1;

    // Wardrobe body
    const wardrobeGeometry = new THREE.BoxGeometry(wardrobeWidth, wardrobeHeight, wardrobeDepth);
    const wardrobeMaterial = new THREE.MeshStandardMaterial({
        color: 0xF5E6D3, // Light cream wood color
        roughness: 0.8
    });
    const wardrobe = new THREE.Mesh(wardrobeGeometry, wardrobeMaterial);
    wardrobe.position.set(0, wardrobeHeight / 2, length / 2 - wardrobeDepth / 2);
    wardrobe.receiveShadow = false;
    wardrobe.castShadow = false;
    scene.add(wardrobe);
    roomObjects.wardrobe = wardrobe;

    // Wardrobe doors with handles
    const doorWidth = wardrobeWidth / 2 - 0.02;
    const doorGeometry = new THREE.BoxGeometry(doorWidth, wardrobeHeight - 0.1, 0.02);
    const doorMaterial = new THREE.MeshStandardMaterial({
        color: 0xF5E6D3, // Same color as wardrobe body
        roughness: 0.7
    });

    // Left door
    const leftDoor = new THREE.Mesh(doorGeometry, doorMaterial);
    leftDoor.position.set(-doorWidth / 2 - 0.01, wardrobeHeight / 2, length / 2 - 0.01);
    leftDoor.receiveShadow = false;
    leftDoor.castShadow = false;
    scene.add(leftDoor);
    roomObjects.leftDoor = leftDoor;

    // Right door
    const rightDoor = new THREE.Mesh(doorGeometry, doorMaterial);
    rightDoor.position.set(doorWidth / 2 + 0.01, wardrobeHeight / 2, length / 2 - 0.01);
    rightDoor.receiveShadow = false;
    rightDoor.castShadow = false;
    scene.add(rightDoor);
    roomObjects.rightDoor = rightDoor;

    // Door handles
    const handleGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.15, 8);
    const handleMaterial = new THREE.MeshStandardMaterial({
        color: 0x8B7355, // Dark wood color for handles
        roughness: 0.3,
        metalness: 0.1
    });

    // Left door handle
    const leftHandle = new THREE.Mesh(handleGeometry, handleMaterial);
    leftHandle.rotation.z = Math.PI / 2;
    leftHandle.position.set(-doorWidth / 2 - 0.05, wardrobeHeight / 2, length / 2 - 0.02);
    leftHandle.receiveShadow = false;
    leftHandle.castShadow = false;
    scene.add(leftHandle);
    roomObjects.leftHandle = leftHandle;

    // Right door handle
    const rightHandle = new THREE.Mesh(handleGeometry, handleMaterial);
    rightHandle.rotation.z = Math.PI / 2;
    rightHandle.position.set(doorWidth / 2 + 0.05, wardrobeHeight / 2, length / 2 - 0.02);
    rightHandle.receiveShadow = false;
    rightHandle.castShadow = false;
    scene.add(rightHandle);
    roomObjects.rightHandle = rightHandle;

    // Wardrobe top trim
    const trimGeometry = new THREE.BoxGeometry(wardrobeWidth + 0.05, 0.08, wardrobeDepth + 0.05);
    const trimMaterial = new THREE.MeshStandardMaterial({
        color: 0x8B7355, // Darker wood for trim
        roughness: 0.6
    });
    const topTrim = new THREE.Mesh(trimGeometry, trimMaterial);
    topTrim.position.set(0, wardrobeHeight + 0.04, length / 2 - wardrobeDepth / 2);
    topTrim.receiveShadow = false;
    topTrim.castShadow = false;
    scene.add(topTrim);
    roomObjects.topTrim = topTrim;

    // Wardrobe base trim
    const baseTrimGeometry = new THREE.BoxGeometry(wardrobeWidth + 0.05, 0.08, wardrobeDepth + 0.05);
    const baseTrim = new THREE.Mesh(baseTrimGeometry, trimMaterial);
    baseTrim.position.set(0, 0.04, length / 2 - wardrobeDepth / 2);
    baseTrim.receiveShadow = false;
    baseTrim.castShadow = false;
    scene.add(baseTrim);
    roomObjects.baseTrim = baseTrim;

    // Door separation line
    const separationGeometry = new THREE.BoxGeometry(0.02, wardrobeHeight - 0.1, 0.01);
    const separationMaterial = new THREE.MeshStandardMaterial({
        color: 0x8B7355, // Dark wood for separation
        roughness: 0.5
    });
    const separation = new THREE.Mesh(separationGeometry, separationMaterial);
    separation.position.set(0, wardrobeHeight / 2, length / 2 - 0.005);
    separation.receiveShadow = false;
    separation.castShadow = false;
    scene.add(separation);
    roomObjects.separation = separation;

    // Add bed at front wall - scaled based on room size
    const bedWidth = Math.min(1.6, width * 0.35); // Proportional to room width
    const bedLength = Math.min(2.2, length * 0.6); // Proportional to room length
    const bedHeight = 0.4;

    // Bed frame - positioned intelligently based on room size
    const bedFrameGeometry = new THREE.BoxGeometry(bedWidth, bedHeight, bedLength);
    const bedFrameMaterial = new THREE.MeshStandardMaterial({
        color: 0xF5E6D3, // Same light cream wood color as wardrobe
        roughness: 0.8
    });
    const bedFrame = new THREE.Mesh(bedFrameGeometry, bedFrameMaterial);

    // Position bed intelligently - center it but leave space for walking
    const bedDistanceFromWall = Math.max(0.15, length * 0.05); // At least 15cm from wall
    const bedZ = -length / 2 + bedLength / 2 + bedDistanceFromWall;
    bedFrame.position.set(0, bedHeight / 2, bedZ);
    bedFrame.receiveShadow = false;
    bedFrame.castShadow = false;
    scene.add(bedFrame);
    roomObjects.bedFrame = bedFrame;

    // Bed mattress
    const mattressGeometry = new THREE.BoxGeometry(bedWidth - 0.05, 0.15, bedLength - 0.05);
    const mattressMaterial = new THREE.MeshStandardMaterial({
        color: 0xF5F5DC, // Beige mattress color
        roughness: 0.9
    });
    const mattress = new THREE.Mesh(mattressGeometry, mattressMaterial);
    mattress.position.set(0, bedHeight + 0.075, bedZ);
    mattress.receiveShadow = false;
    mattress.castShadow = false;
    scene.add(mattress);
    roomObjects.mattress = mattress;

    // Bed pillows
    const pillowGeometry = new THREE.BoxGeometry(0.3, 0.08, 0.5);
    const pillowMaterial = new THREE.MeshStandardMaterial({
        color: 0xFFFFFF, // White pillows
        roughness: 0.8
    });

    // Left pillow
    const leftPillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
    leftPillow.position.set(-bedWidth * 0.2, bedHeight + 0.15, bedZ - bedLength * 0.3);
    leftPillow.receiveShadow = false;
    leftPillow.castShadow = false;
    scene.add(leftPillow);
    roomObjects.leftPillow = leftPillow;

    // Right pillow
    const rightPillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
    rightPillow.position.set(bedWidth * 0.2, bedHeight + 0.15, bedZ - bedLength * 0.3);
    rightPillow.receiveShadow = false;
    rightPillow.castShadow = false;
    scene.add(rightPillow);
    roomObjects.rightPillow = rightPillow;

    wallInputs.forEach((wallId, index) => {
        const input = document.getElementById(wallId);
        const colorInfo = parseColor(input.value);

        if (colorInfo.hex) {
            const config = wallConfigs[index];
            const wallGeometry = new THREE.PlaneGeometry(config.width, config.height);
            const wallMaterial = new THREE.MeshStandardMaterial({
                color: colorInfo.hex,
                roughness: 0.7
            });
            const wall = new THREE.Mesh(wallGeometry, wallMaterial);
            wall.position.set(...config.position);
            wall.rotation.set(...config.rotation);
            wall.receiveShadow = false;
            wall.castShadow = false;
            scene.add(wall);
            roomObjects[wallId] = wall;
        }

        // Update UI
        updateWallUI(wallId, colorInfo);
    });

    // Add furniture based on state
    addFurniture(width, length, height);

    // Keep camera inside room bounds
    const maxX = (width / 2) - 0.3;
    const maxZ = (length / 2) - 0.3;
    const currentPos = camera.position;

    currentPos.x = Math.max(-maxX, Math.min(maxX, currentPos.x));
    currentPos.z = Math.max(-maxZ, Math.min(maxZ, currentPos.z));
    currentPos.y = Math.max(0.1, Math.min(height - 0.1, currentPos.y));

    camera.position.copy(currentPos);
    controls.target.set(0, height * 0.5, 0);
    controls.update();
}

function updateWallUI(wallId, colorInfo) {
    const container = document.getElementById(wallId + '-container');
    const preview = document.getElementById(wallId + '-preview');
    const hint = document.getElementById(wallId + '-hint');
    const swatch = document.getElementById('swatch' + wallId.slice(-1));
    const swatchHex = document.getElementById('swatch' + wallId.slice(-1) + '-hex');

    if (colorInfo.hex) {
        container.classList.remove('error');
        preview.style.background = colorInfo.hex;
        hint.textContent = colorInfo.label;
        swatch.style.background = colorInfo.hex;
        swatchHex.textContent = colorInfo.hex;
    } else {
        container.classList.add('error');
        preview.style.background = 'repeating-conic-gradient(#eee 0% 25%, #fff 0% 50%) 50% / 10px 10px';
        hint.textContent = colorInfo.label;
        swatch.style.background = 'repeating-conic-gradient(#eee 0% 25%, #fff 0% 50%) 50% / 10px 10px';
        swatchHex.textContent = '—';
    }
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function handleResize() {
    const container = document.getElementById('canvas-container');
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    init();
    // Apply initial language translations
    updateLanguageUI();
    // Set up language switcher
    const langSelector = document.getElementById('lang-switcher');
    if (langSelector) {
        langSelector.value = currentLanguage;
        langSelector.addEventListener('change', function () {
            setLanguage(this.value);
        });
    }

    // Input listeners
    ['width', 'length', 'height'].forEach(id => {
        document.getElementById(id).addEventListener('input', updateRoom);
    });

    ['wall1', 'wall2', 'wall3', 'wall4'].forEach(id => {
        document.getElementById(id).addEventListener('input', updateRoom);
    });

    // Example buttons
    document.querySelectorAll('.example-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const color = this.dataset.color;
            const wallInputs = ['wall1', 'wall2', 'wall3', 'wall4'];
            const states = wallInputs.map(id => document.getElementById(id).value);
            const firstEmpty = states.findIndex(s => !s || s === "#FFFFFF");
            const targetId = firstEmpty >= 0 ? wallInputs[firstEmpty] : wallInputs[0];
            document.getElementById(targetId).value = color;
            updateRoom();
        });
    });

    // Lighting buttons
    document.querySelectorAll('.lighting-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const temp = parseInt(this.dataset.temp);
            currentLighting = temp;
            setupLighting(temp);
        });
    });

    // Furniture checkboxes
    document.querySelectorAll('.furniture-checkbox input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const furnitureType = this.id.replace('furniture-', '');
            furnitureState[furnitureType] = this.checked;
            updateRoom();
        });
    });

    // Furniture movement events
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('dblclick', onDoubleClick);

    // Reset button
    document.getElementById('reset-btn').addEventListener('click', function () {
        document.getElementById('width').value = 4.0;
        document.getElementById('length').value = 3.0;
        document.getElementById('height').value = 2.8;
        document.getElementById('wall1').value = '#8ba888';
        document.getElementById('wall2').value = '6236';
        document.getElementById('wall3').value = '#d9d3c7';
        document.getElementById('wall4').value = '#d9d3c7';
        currentLighting = 3000;
        setupLighting(currentLighting);

        // Reset furniture state and positions
        furnitureState = {
            bed: true,
            wardrobe: true,
            dresser: false,
            carpet: false,
            tvStand: false,
            nightstand: false,
            chair: false,
            mirror: false,
            lamp: false,
            plant: false
        };
        furniturePositions = {}; // Reset custom positions

        // Update checkboxes
        document.getElementById('furniture-bed').checked = true;
        document.getElementById('furniture-wardrobe').checked = true;
        document.getElementById('furniture-dresser').checked = false;
        document.getElementById('furniture-carpet').checked = false;
        document.getElementById('furniture-tv-stand').checked = false;
        document.getElementById('furniture-nightstand').checked = false;
        document.getElementById('furniture-chair').checked = false;
        document.getElementById('furniture-mirror').checked = false;
        document.getElementById('furniture-lamp').checked = false;
        document.getElementById('furniture-plant').checked = false;

        updateRoom();
    });

    // Window resize
    window.addEventListener('resize', handleResize);
});