(() => {
    "use strict";

    // =========================================================================
    // KONFIGURASI & 10 LEVEL
    // =========================================================================
    const PIXELS_PER_METER = 18;
    const GROUND_Y = 396;
    const GRAVITY = 1980;
    const JUMP_VELOCITY = -760;
    const RAMP_VELOCITY = -950;
    const MAX_HEARTS = 3;
    const STORAGE_KEY = "moto_dash_records_v2";

    const STAGES = [
        {
            id: 0,
            shortName: "Kota Pagi",
            name: "Level 1: Jalan Kota Pagi",
            difficulty: "Pemula",
            biome: "city",
            lengthMeters: 750,
            baseSpeed: 390,
            minSpeed: 210,
            maxSpeed: 520,
            nitroSpeed: 740,
            spawnMinGap: 390,
            spawnMaxGap: 580,
            skyTop: "#1d4ed8",
            skyBottom: "#93c5fd",
            sunColor: "#fde047",
            mountainFar: "#3b82f6",
            mountainNear: "#1e3a8a",
            roadColor: "#334155",
            curbA: "#e2e8f0",
            curbB: "#ef4444",
            nightMode: false,
            hazardWeights: [
                { type: "cone", weight: 52 },
                { type: "barrier", weight: 16 },
                { type: "oil", weight: 14 },
                { type: "ramp", weight: 18 },
            ],
        },
        {
            id: 1,
            shortName: "Perumahan",
            name: "Level 2: Komplek Perumahan",
            difficulty: "Mudah",
            biome: "hills",
            lengthMeters: 900,
            baseSpeed: 410,
            minSpeed: 220,
            maxSpeed: 545,
            nitroSpeed: 770,
            spawnMinGap: 370,
            spawnMaxGap: 550,
            skyTop: "#0284c7",
            skyBottom: "#bae6fd",
            sunColor: "#fef08a",
            mountainFar: "#16a34a",
            mountainNear: "#14532d",
            roadColor: "#3f3f46",
            curbA: "#f8fafc",
            curbB: "#f97316",
            nightMode: false,
            hazardWeights: [
                { type: "cone", weight: 40 },
                { type: "barrier", weight: 20 },
                { type: "oil", weight: 20 },
                { type: "tire", weight: 6 },
                { type: "ramp", weight: 14 },
            ],
        },
        {
            id: 2,
            shortName: "Jalan Raya",
            name: "Level 3: Jalan Raya Siang",
            difficulty: "Mudah+",
            biome: "city",
            lengthMeters: 1100,
            baseSpeed: 430,
            minSpeed: 230,
            maxSpeed: 575,
            nitroSpeed: 800,
            spawnMinGap: 350,
            spawnMaxGap: 530,
            skyTop: "#2563eb",
            skyBottom: "#bfdbfe",
            sunColor: "#fde047",
            mountainFar: "#60a5fa",
            mountainNear: "#1e40af",
            roadColor: "#334155",
            curbA: "#e2e8f0",
            curbB: "#dc2626",
            nightMode: false,
            hazardWeights: [
                { type: "cone", weight: 34 },
                { type: "barrier", weight: 24 },
                { type: "oil", weight: 18 },
                { type: "tire", weight: 10 },
                { type: "ramp", weight: 14 },
            ],
        },
        {
            id: 3,
            shortName: "Pelabuhan",
            name: "Level 4: Jembatan Pelabuhan",
            difficulty: "Sedang",
            biome: "city",
            lengthMeters: 1250,
            baseSpeed: 450,
            minSpeed: 235,
            maxSpeed: 600,
            nitroSpeed: 825,
            spawnMinGap: 335,
            spawnMaxGap: 515,
            skyTop: "#0f766e",
            skyBottom: "#99f6e4",
            sunColor: "#fef08a",
            mountainFar: "#0d9488",
            mountainNear: "#134e4a",
            roadColor: "#1e293b",
            curbA: "#fef08a",
            curbB: "#0284c7",
            nightMode: false,
            hazardWeights: [
                { type: "cone", weight: 30 },
                { type: "barrier", weight: 24 },
                { type: "oil", weight: 18 },
                { type: "tire", weight: 15 },
                { type: "ramp", weight: 13 },
            ],
        },
        {
            id: 4,
            shortName: "Lembah Senja",
            name: "Level 5: Lembah Senja",
            difficulty: "Sedang",
            biome: "hills",
            lengthMeters: 1450,
            baseSpeed: 470,
            minSpeed: 245,
            maxSpeed: 625,
            nitroSpeed: 850,
            spawnMinGap: 320,
            spawnMaxGap: 500,
            skyTop: "#4c1d95",
            skyBottom: "#fb923c",
            sunColor: "#fdba74",
            mountainFar: "#7c2d12",
            mountainNear: "#431407",
            roadColor: "#292524",
            curbA: "#fde68a",
            curbB: "#ea580c",
            nightMode: false,
            hazardWeights: [
                { type: "cone", weight: 28 },
                { type: "barrier", weight: 26 },
                { type: "oil", weight: 18 },
                { type: "tire", weight: 16 },
                { type: "ramp", weight: 12 },
            ],
        },
        {
            id: 5,
            shortName: "Jalur Gurun",
            name: "Level 6: Jalur Gurun Panas",
            difficulty: "Sedang+",
            biome: "desert",
            lengthMeters: 1650,
            baseSpeed: 485,
            minSpeed: 250,
            maxSpeed: 645,
            nitroSpeed: 870,
            spawnMinGap: 310,
            spawnMaxGap: 485,
            skyTop: "#b45309",
            skyBottom: "#fde68a",
            sunColor: "#fffbeb",
            mountainFar: "#d97706",
            mountainNear: "#92400e",
            roadColor: "#44403c",
            curbA: "#fed7aa",
            curbB: "#b91c1c",
            nightMode: false,
            hazardWeights: [
                { type: "cone", weight: 25 },
                { type: "barrier", weight: 26 },
                { type: "oil", weight: 18 },
                { type: "tire", weight: 19 },
                { type: "ramp", weight: 12 },
            ],
        },
        {
            id: 6,
            shortName: "Bukit Petang",
            name: "Level 7: Bukit Petang",
            difficulty: "Sulit",
            biome: "hills",
            lengthMeters: 1850,
            baseSpeed: 500,
            minSpeed: 260,
            maxSpeed: 665,
            nitroSpeed: 890,
            spawnMinGap: 295,
            spawnMaxGap: 470,
            skyTop: "#312e81",
            skyBottom: "#f43f5e",
            sunColor: "#fda4af",
            mountainFar: "#4c1d95",
            mountainNear: "#1e1b4b",
            roadColor: "#27272a",
            curbA: "#fda4af",
            curbB: "#881337",
            nightMode: false,
            hazardWeights: [
                { type: "cone", weight: 24 },
                { type: "barrier", weight: 28 },
                { type: "oil", weight: 17 },
                { type: "tire", weight: 20 },
                { type: "ramp", weight: 11 },
            ],
        },
        {
            id: 7,
            shortName: "Kota Malam",
            name: "Level 8: Kota Neon Malam",
            difficulty: "Sulit",
            biome: "city",
            lengthMeters: 2050,
            baseSpeed: 515,
            minSpeed: 265,
            maxSpeed: 685,
            nitroSpeed: 915,
            spawnMinGap: 285,
            spawnMaxGap: 455,
            skyTop: "#020617",
            skyBottom: "#1e1b4b",
            sunColor: "#e2e8f0",
            mountainFar: "#1e293b",
            mountainNear: "#0f172a",
            roadColor: "#1e293b",
            curbA: "#22d3ee",
            curbB: "#0f172a",
            nightMode: true,
            hazardWeights: [
                { type: "cone", weight: 22 },
                { type: "barrier", weight: 29 },
                { type: "oil", weight: 17 },
                { type: "tire", weight: 22 },
                { type: "ramp", weight: 10 },
            ],
        },
        {
            id: 8,
            shortName: "Gunung Badai",
            name: "Level 9: Pegunungan Badai",
            difficulty: "Ekstrem",
            biome: "hills",
            lengthMeters: 2300,
            baseSpeed: 530,
            minSpeed: 270,
            maxSpeed: 705,
            nitroSpeed: 935,
            spawnMinGap: 275,
            spawnMaxGap: 440,
            skyTop: "#090d16",
            skyBottom: "#334155",
            sunColor: "#cbd5e1",
            mountainFar: "#1e293b",
            mountainNear: "#020617",
            roadColor: "#18181b",
            curbA: "#facc15",
            curbB: "#09090b",
            nightMode: true,
            hazardWeights: [
                { type: "cone", weight: 20 },
                { type: "barrier", weight: 30 },
                { type: "oil", weight: 18 },
                { type: "tire", weight: 22 },
                { type: "ramp", weight: 10 },
            ],
        },
        {
            id: 9,
            shortName: "Sirkuit Final",
            name: "Level 10: Sirkuit Juara Final",
            difficulty: "Master",
            biome: "city",
            lengthMeters: 2600,
            baseSpeed: 550,
            minSpeed: 280,
            maxSpeed: 730,
            nitroSpeed: 960,
            spawnMinGap: 265,
            spawnMaxGap: 425,
            skyTop: "#090314",
            skyBottom: "#3b0764",
            sunColor: "#f0abfc",
            mountainFar: "#2e1065",
            mountainNear: "#090314",
            roadColor: "#171717",
            curbA: "#f43f5e",
            curbB: "#fbbf24",
            nightMode: true,
            hazardWeights: [
                { type: "cone", weight: 18 },
                { type: "barrier", weight: 31 },
                { type: "oil", weight: 17 },
                { type: "tire", weight: 24 },
                { type: "ramp", weight: 10 },
            ],
        },
    ];

    // =========================================================================
    // DOM ELEMENTS
    // =========================================================================
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const heartsDisplay = document.getElementById("heartsDisplay");
    const scoreDisplay = document.getElementById("scoreDisplay");
    const speedDisplay = document.getElementById("speedDisplay");
    const nitroBar = document.getElementById("nitroBar");
    const stageTag = document.getElementById("stageTag");
    const progressFill = document.getElementById("progressFill");
    const progressBikeIcon = document.getElementById("progressBikeIcon");
    const distanceDisplay = document.getElementById("distanceDisplay");
    const bestRecordText = document.getElementById("bestRecordText");

    const startOverlay = document.getElementById("startOverlay");
    const pauseOverlay = document.getElementById("pauseOverlay");
    const gameOverOverlay = document.getElementById("gameOverOverlay");
    const winOverlay = document.getElementById("winOverlay");

    const gameOverStats = document.getElementById("gameOverStats");
    const winTitle = document.getElementById("winTitle");
    const winStats = document.getElementById("winStats");

    const soundBtn = document.getElementById("soundBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const startBtn = document.getElementById("startBtn");
    const resumeBtn = document.getElementById("resumeBtn");
    const restartPauseBtn = document.getElementById("restartPauseBtn");
    const menuPauseBtn = document.getElementById("menuPauseBtn");
    const retryBtn = document.getElementById("retryBtn");
    const menuOverBtn = document.getElementById("menuOverBtn");
    const nextStageBtn = document.getElementById("nextStageBtn");
    const replayWinBtn = document.getElementById("replayWinBtn");
    const menuWinBtn = document.getElementById("menuWinBtn");

    const levelGrid = document.getElementById("levelGrid");
    const selectedLevelInfo = document.getElementById("selectedLevelInfo");

    // =========================================================================
    // AUDIO SYNTHESIZER (WEB AUDIO API)
    // =========================================================================
    class SoundEngine {
        constructor() {
            this.ctx = null;
            this.muted = false;
            this.engineOsc = null;
            this.engineGain = null;
        }

        ensureContext() {
            if (this.muted) return null;
            if (!this.ctx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtx) return null;
                this.ctx = new AudioCtx();
            }
            if (this.ctx.state === "suspended") {
                this.ctx.resume().catch(() => {});
            }
            return this.ctx;
        }

        startEngine() {
            const ac = this.ensureContext();
            if (!ac || this.engineOsc) return;
            this.engineOsc = ac.createOscillator();
            this.engineGain = ac.createGain();
            this.engineOsc.type = "sawtooth";
            this.engineOsc.frequency.value = 55;
            this.engineGain.gain.value = 0.025;
            this.engineOsc.connect(this.engineGain);
            this.engineGain.connect(ac.destination);
            this.engineOsc.start();
        }

        updateEngine(speedRatio, active) {
            if (!this.engineOsc || !this.engineGain || !this.ctx) return;
            const now = this.ctx.currentTime;
            if (this.muted || !active) {
                this.engineGain.gain.setTargetAtTime(0, now, 0.05);
                return;
            }
            const freq = 48 + speedRatio * 75;
            this.engineOsc.frequency.setTargetAtTime(freq, now, 0.05);
            this.engineGain.gain.setTargetAtTime(0.024 + speedRatio * 0.014, now, 0.05);
        }

        playTone(freqStart, freqEnd, duration, type = "sine", volume = 0.12) {
            const ac = this.ensureContext();
            if (!ac) return;
            const now = ac.currentTime;
            const osc = ac.createOscillator();
            const gain = ac.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freqStart, now);
            osc.frequency.exponentialRampToValueAtTime(Math.max(20, freqEnd), now + duration);
            gain.gain.setValueAtTime(volume, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
            osc.connect(gain);
            gain.connect(ac.destination);
            osc.start(now);
            osc.stop(now + duration);
        }

        jump() {
            this.playTone(220, 520, 0.16, "triangle", 0.14);
        }

        ramp() {
            this.playTone(260, 820, 0.28, "sawtooth", 0.11);
        }

        coin() {
            this.playTone(880, 1320, 0.12, "sine", 0.11);
        }

        nitroPickup() {
            this.playTone(440, 1080, 0.22, "triangle", 0.12);
        }

        heal() {
            this.playTone(523, 784, 0.2, "sine", 0.12);
        }

        hit() {
            this.playTone(170, 48, 0.26, "sawtooth", 0.18);
        }

        slip() {
            this.playTone(300, 120, 0.22, "square", 0.08);
        }

        win() {
            const notes = [523.25, 659.25, 783.99, 1046.5];
            notes.forEach((n, idx) => {
                setTimeout(() => this.playTone(n, n * 1.03, 0.2, "triangle", 0.13), idx * 100);
            });
        }
    }

    const sound = new SoundEngine();

    // =========================================================================
    // GAME STATE
    // =========================================================================
    const input = {
        gas: false,
        brake: false,
        nitro: false,
        jumpBufferedTimer: 0,
    };

    const state = {
        mode: "menu", // menu | playing | paused | gameover | finishing | win
        selectedStage: 0,
        worldDistancePx: 0,
        speed: 0,
        score: 0,
        hearts: MAX_HEARTS,
        nitro: 55, // 0..100
        nitroActive: false,
        elapsedTime: 0,
        invulnTimer: 0,
        oilTimer: 0,
        shakeTimer: 0,
        wheelAngle: 0,
        nextSpawnDistancePx: 500,
        finishLineWorldPx: 0,
        finishCelebrationTimer: 0,

        bike: {
            x: 185,
            groundOffset: 0, // <= 0 means in the air
            vy: 0,
            coyoteTimer: 0,
            tilt: 0,
            wheelie: 0,
        },

        obstacles: [],
        pickups: [],
        particles: [],
        floatingTexts: [],
        confetti: [],
        stars: Array.from({ length: 48 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * 230 + 12,
            r: Math.random() * 1.8 + 0.7,
            twinkle: Math.random() * Math.PI * 2,
        })),
    };

    // =========================================================================
    // STORAGE HELPERS & LEVEL GRID
    // =========================================================================
    function loadSaveData() {
        try {
            const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
            return {
                unlockedLevel: Math.max(0, Math.min(STAGES.length - 1, Number(parsed.unlockedLevel) || 0)),
                records: parsed.records || {},
            };
        } catch {
            return { unlockedLevel: 0, records: {} };
        }
    }

    function saveProgressAndRecord(stageId, score, timeSec) {
        const data = loadSaveData();
        const prev = data.records[stageId];
        const isBetter =
            !prev ||
            score > prev.score ||
            (score === prev.score && timeSec < prev.time);
        if (isBetter) {
            data.records[stageId] = { score, time: Number(timeSec.toFixed(1)) };
        }
        if (stageId + 1 > data.unlockedLevel && stageId + 1 < STAGES.length) {
            data.unlockedLevel = stageId + 1;
        }
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch {
            // ignore storage quota errors
        }
        return isBetter;
    }

    function refreshMenuRecord() {
        const data = loadSaveData();
        const level = STAGES[state.selectedStage];
        const rec = data.records[state.selectedStage];
        selectedLevelInfo.textContent = `${level.name} (${level.lengthMeters} m · ${level.difficulty})`;
        bestRecordText.textContent = rec
            ? `Rekor: ${rec.score} poin · ${rec.time.toFixed(1)} dtk`
            : "Rekor: Belum ada";
        startBtn.textContent = `MULAI LEVEL ${state.selectedStage + 1}`;
    }

    function renderLevelGrid() {
        const data = loadSaveData();
        if (state.selectedStage > data.unlockedLevel) {
            state.selectedStage = data.unlockedLevel;
        }
        levelGrid.innerHTML = "";

        STAGES.forEach((lvl, idx) => {
            const unlocked = idx <= data.unlockedLevel;
            const cleared = Boolean(data.records[idx]);
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "level-btn";
            if (idx === state.selectedStage) btn.classList.add("selected");
            if (cleared) btn.classList.add("cleared");
            btn.disabled = !unlocked;

            const statusIcon = cleared ? "✅" : unlocked ? "🔓" : "🔒";
            btn.innerHTML = `
                <span class="level-status">${statusIcon}</span>
                <strong>Lv. ${idx + 1}</strong>
                <span>${lvl.shortName}</span>
            `;

            if (unlocked) {
                btn.addEventListener("click", () => {
                    state.selectedStage = idx;
                    renderLevelGrid();
                    refreshMenuRecord();
                });
            }
            levelGrid.appendChild(btn);
        });

        refreshMenuRecord();
    }

    // =========================================================================
    // OVERLAY & HUD MANAGEMENT
    // =========================================================================
    function showOverlay(overlayEl) {
        [startOverlay, pauseOverlay, gameOverOverlay, winOverlay].forEach((el) => {
            el.classList.toggle("active", el === overlayEl);
        });
    }

    function updateHUD() {
        const stage = STAGES[state.selectedStage];
        const distMeters = Math.min(
            stage.lengthMeters,
            Math.floor(state.worldDistancePx / PIXELS_PER_METER)
        );
        const pct = Math.min(100, (distMeters / stage.lengthMeters) * 100);
        const kmh = Math.round((state.speed / 5.5));

        heartsDisplay.textContent =
            "❤️".repeat(Math.max(0, state.hearts)) +
            "🖤".repeat(Math.max(0, MAX_HEARTS - state.hearts));
        scoreDisplay.textContent = Math.floor(state.score).toString();
        speedDisplay.textContent = `${kmh} km/j`;
        nitroBar.style.width = `${Math.max(0, Math.min(100, state.nitro))}%`;

        stageTag.textContent = stage.name;
        distanceDisplay.textContent = `${distMeters} / ${stage.lengthMeters} m`;
        progressFill.style.width = `${pct}%`;
        progressBikeIcon.style.left = `${pct}%`;
    }

    // =========================================================================
    // STAGE INITIALIZATION
    // =========================================================================
    function startStage(stageIndex) {
        state.selectedStage = stageIndex;
        const stage = STAGES[stageIndex];

        state.mode = "playing";
        state.worldDistancePx = 0;
        state.speed = stage.baseSpeed * 0.7;
        state.score = 0;
        state.hearts = MAX_HEARTS;
        state.nitro = 55;
        state.nitroActive = false;
        state.elapsedTime = 0;
        state.invulnTimer = 0;
        state.oilTimer = 0;
        state.shakeTimer = 0;
        state.wheelAngle = 0;
        state.finishLineWorldPx = stage.lengthMeters * PIXELS_PER_METER;
        state.nextSpawnDistancePx = 560;
        state.finishCelebrationTimer = 0;

        state.bike = {
            x: 185,
            groundOffset: 0,
            vy: 0,
            coyoteTimer: 0,
            tilt: 0,
            wheelie: 0,
        };

        state.obstacles = [];
        state.pickups = [];
        state.particles = [];
        state.floatingTexts = [];
        state.confetti = [];
        resetInput();

        sound.startEngine();
        showOverlay(null);
        updateHUD();
    }

    function resetInput() {
        input.gas = false;
        input.brake = false;
        input.nitro = false;
        input.jumpBufferedTimer = 0;
        document.querySelectorAll(".ctrl-btn.pressed").forEach((el) => el.classList.remove("pressed"));
    }

    window.addEventListener("blur", resetInput);

    // =========================================================================
    // SPAWNING OBSTACLES & PICKUPS
    // =========================================================================
    function pickWeightedHazard(weights) {
        const total = weights.reduce((acc, item) => acc + item.weight, 0);
        let roll = Math.random() * total;
        for (const item of weights) {
            roll -= item.weight;
            if (roll <= 0) return item.type;
        }
        return weights[0].type;
    }

    function spawnWorldSlice(stage) {
        // Beri ruang bersih menjelang garis finish (45 meter terakhir)
        const safeStopPx = state.finishLineWorldPx - 45 * PIXELS_PER_METER;
        if (state.nextSpawnDistancePx >= safeStopPx) return;

        const spawnWorldX = state.nextSpawnDistancePx;
        const screenX = state.bike.x + (spawnWorldX - state.worldDistancePx);
        const type = pickWeightedHazard(stage.hazardWeights);

        let obstacle = null;
        if (type === "cone") {
            obstacle = { type: "cone", x: screenX, w: 30, h: 42, hit: false };
        } else if (type === "barrier") {
            obstacle = { type: "barrier", x: screenX, w: 54, h: 56, hit: false };
        } else if (type === "oil") {
            obstacle = { type: "oil", x: screenX, w: 72, h: 10, hit: false };
        } else if (type === "tire") {
            obstacle = {
                type: "tire",
                x: screenX + 80,
                w: 42,
                h: 42,
                extraSpeed: 115 + stage.id * 25,
                spin: 0,
                hit: false,
            };
        } else if (type === "ramp") {
            obstacle = { type: "ramp", x: screenX, w: 78, h: 34, hit: false };
        }

        if (obstacle) {
            state.obstacles.push(obstacle);

            // Spawn pickups secara adil (koin di atas rintangan/tanjakan atau di jalur aman)
            const rollPickup = Math.random();
            if (type === "ramp") {
                for (let i = 0; i < 3; i++) {
                    state.pickups.push({
                        type: "coin",
                        x: screenX + 120 + i * 52,
                        y: GROUND_Y - 125 - i * 24,
                        r: 13,
                        collected: false,
                    });
                }
            } else if (rollPickup < 0.55) {
                const arcHeight = type === "oil" || type === "barrier" ? 112 : 95;
                state.pickups.push({
                    type: "coin",
                    x: screenX + obstacle.w * 0.5,
                    y: GROUND_Y - arcHeight,
                    r: 13,
                    collected: false,
                });
            } else if (rollPickup < 0.72) {
                state.pickups.push({
                    type: "nitro",
                    x: screenX + 145,
                    y: GROUND_Y - 46,
                    r: 15,
                    collected: false,
                });
            } else if (rollPickup < 0.8 && state.hearts < MAX_HEARTS) {
                state.pickups.push({
                    type: "wrench",
                    x: screenX + 150,
                    y: GROUND_Y - 52,
                    r: 15,
                    collected: false,
                });
            }
        }

        const speedFactor = Math.max(1, state.speed / stage.baseSpeed);
        const gap =
            (stage.spawnMinGap + Math.random() * (stage.spawnMaxGap - stage.spawnMinGap)) *
            (0.92 + 0.16 * speedFactor);
        state.nextSpawnDistancePx += gap + (type === "ramp" ? 160 : 0);
    }

    // =========================================================================
    // PARTICLES & FLOATING TEXT
    // =========================================================================
    function addFloatingText(text, x, y, color = "#fde047") {
        state.floatingTexts.push({
            text,
            x,
            y,
            vy: -55,
            life: 0.9,
            maxLife: 0.9,
            color,
        });
    }

    function spawnParticles(x, y, count, color, speedSpread = 160) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = 40 + Math.random() * speedSpread;
            state.particles.push({
                x,
                y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd - 40,
                size: 2.5 + Math.random() * 4,
                life: 0.35 + Math.random() * 0.35,
                maxLife: 0.7,
                color,
            });
        }
    }

    function spawnConfetti() {
        const colors = ["#ef4444", "#fbbf24", "#22c55e", "#38bdf8", "#a855f7", "#f97316"];
        for (let i = 0; i < 85; i++) {
            state.confetti.push({
                x: Math.random() * canvas.width,
                y: -20 - Math.random() * 200,
                vx: (Math.random() - 0.5) * 180,
                vy: 140 + Math.random() * 210,
                w: 6 + Math.random() * 6,
                h: 4 + Math.random() * 5,
                rot: Math.random() * Math.PI * 2,
                vRot: (Math.random() - 0.5) * 8,
                color: colors[i % colors.length],
            });
        }
    }

    // =========================================================================
    // INPUT & CONTROLS
    // =========================================================================
    function triggerJump() {
        input.jumpBufferedTimer = 0.12;
    }

    window.addEventListener("keydown", (e) => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
            e.preventDefault();
        }

        if (e.code === "ArrowRight" || e.code === "KeyD") input.gas = true;
        if (e.code === "ArrowLeft" || e.code === "KeyA") input.brake = true;
        if (e.code === "ShiftLeft" || e.code === "ShiftRight" || e.code === "KeyN") {
            input.nitro = true;
        }
        if ((e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") && !e.repeat) {
            if (state.mode === "playing") triggerJump();
        }
        if ((e.code === "KeyP" || e.code === "Escape") && !e.repeat) {
            togglePause();
        }
    });

    window.addEventListener("keyup", (e) => {
        if (e.code === "ArrowRight" || e.code === "KeyD") input.gas = false;
        if (e.code === "ArrowLeft" || e.code === "KeyA") input.brake = false;
        if (e.code === "ShiftLeft" || e.code === "ShiftRight" || e.code === "KeyN") {
            input.nitro = false;
        }
    });

    function bindHoldButton(btnId, onChange) {
        const el = document.getElementById(btnId);
        const press = (e) => {
            e.preventDefault();
            el.classList.add("pressed");
            onChange(true);
        };
        const release = (e) => {
            e.preventDefault();
            el.classList.remove("pressed");
            onChange(false);
        };
        el.addEventListener("pointerdown", press);
        el.addEventListener("pointerup", release);
        el.addEventListener("pointerleave", release);
        el.addEventListener("pointercancel", release);
    }

    bindHoldButton("btnGas", (v) => (input.gas = v));
    bindHoldButton("btnBrake", (v) => (input.brake = v));
    bindHoldButton("btnNitro", (v) => (input.nitro = v));

    const btnJump = document.getElementById("btnJump");
    btnJump.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        btnJump.classList.add("pressed");
        if (state.mode === "playing") triggerJump();
    });
    const releaseJump = () => btnJump.classList.remove("pressed");
    btnJump.addEventListener("pointerup", releaseJump);
    btnJump.addEventListener("pointerleave", releaseJump);
    btnJump.addEventListener("pointercancel", releaseJump);

    function togglePause() {
        if (state.mode === "playing") {
            state.mode = "paused";
            sound.updateEngine(0, false);
            showOverlay(pauseOverlay);
        } else if (state.mode === "paused") {
            state.mode = "playing";
            showOverlay(null);
        }
    }

    soundBtn.addEventListener("click", () => {
        sound.muted = !sound.muted;
        soundBtn.textContent = sound.muted ? "🔇" : "🔊";
        if (sound.muted) sound.updateEngine(0, false);
    });

    pauseBtn.addEventListener("click", togglePause);
    startBtn.addEventListener("click", () => startStage(state.selectedStage));
    resumeBtn.addEventListener("click", togglePause);
    restartPauseBtn.addEventListener("click", () => startStage(state.selectedStage));
    retryBtn.addEventListener("click", () => startStage(state.selectedStage));
    replayWinBtn.addEventListener("click", () => startStage(state.selectedStage));

    function goToMenu() {
        state.mode = "menu";
        sound.updateEngine(0, false);
        renderLevelGrid();
        showOverlay(startOverlay);
    }

    menuPauseBtn.addEventListener("click", goToMenu);
    menuOverBtn.addEventListener("click", goToMenu);
    menuWinBtn.addEventListener("click", goToMenu);

    nextStageBtn.addEventListener("click", () => {
        const nextIdx = state.selectedStage + 1 < STAGES.length ? state.selectedStage + 1 : 0;
        state.selectedStage = nextIdx;
        startStage(nextIdx);
    });

    // =========================================================================
    // UPDATE LOOP
    // =========================================================================
    function update(dt) {
        if (state.mode === "finishing") {
            updateFinishing(dt);
            return;
        }
        if (state.mode !== "playing") return;

        const stage = STAGES[state.selectedStage];
        state.elapsedTime += dt;

        if (state.invulnTimer > 0) state.invulnTimer = Math.max(0, state.invulnTimer - dt);
        if (state.oilTimer > 0) state.oilTimer = Math.max(0, state.oilTimer - dt);
        if (state.shakeTimer > 0) state.shakeTimer = Math.max(0, state.shakeTimer - dt);

        // Nitro logic
        if (input.nitro && state.nitro > 1) {
            state.nitroActive = true;
            state.nitro = Math.max(0, state.nitro - 36 * dt);
        } else {
            state.nitroActive = false;
            state.nitro = Math.min(100, state.nitro + 5.5 * dt);
        }

        // Target speed calculation
        let targetSpeed = stage.baseSpeed;
        if (state.nitroActive) {
            targetSpeed = stage.nitroSpeed;
        } else if (input.gas && !input.brake) {
            targetSpeed = stage.maxSpeed;
        } else if (input.brake && !input.gas) {
            targetSpeed = stage.minSpeed;
        }

        if (state.oilTimer > 0) {
            targetSpeed *= 0.58;
        }

        const accelRate = state.nitroActive ? 920 : 520;
        if (state.speed < targetSpeed) {
            state.speed = Math.min(targetSpeed, state.speed + accelRate * dt);
        } else {
            state.speed = Math.max(targetSpeed, state.speed - 620 * dt);
        }

        // Bike horizontal screen positioning (juice)
        const targetBikeX = state.nitroActive ? 225 : input.gas ? 200 : input.brake ? 160 : 185;
        state.bike.x += (targetBikeX - state.bike.x) * Math.min(1, dt * 6);

        // Advance world
        const dx = state.speed * dt;
        state.worldDistancePx += dx;
        state.wheelAngle += dx / 21;
        state.score += (dx / PIXELS_PER_METER) * (state.nitroActive ? 2.2 : 1.2);

        // Jump & Gravity
        const onGround = state.bike.groundOffset >= -0.5;
        if (onGround) {
            state.bike.coyoteTimer = 0.09;
        } else {
            state.bike.coyoteTimer = Math.max(0, state.bike.coyoteTimer - dt);
        }

        if (input.jumpBufferedTimer > 0) {
            input.jumpBufferedTimer = Math.max(0, input.jumpBufferedTimer - dt);
            if (state.bike.coyoteTimer > 0) {
                state.bike.vy = JUMP_VELOCITY;
                state.bike.groundOffset = -2;
                state.bike.coyoteTimer = 0;
                input.jumpBufferedTimer = 0;
                sound.jump();
                spawnParticles(state.bike.x - 24, GROUND_Y - 4, 7, "#cbd5e1", 90);
            }
        }

        state.bike.vy += GRAVITY * dt;
        state.bike.groundOffset += state.bike.vy * dt;
        if (state.bike.groundOffset >= 0) {
            if (state.bike.vy > 360) {
                spawnParticles(state.bike.x, GROUND_Y - 3, 6, "#94a3b8", 80);
            }
            state.bike.groundOffset = 0;
            state.bike.vy = 0;
        }

        // Bike pitch / wheelie
        let targetTilt = 0;
        if (state.bike.groundOffset < -2) {
            targetTilt = Math.max(-0.34, Math.min(0.28, state.bike.vy * 0.00045));
        } else if (state.oilTimer > 0) {
            targetTilt = Math.sin(state.elapsedTime * 28) * 0.14;
        } else if (state.nitroActive) {
            targetTilt = -0.14;
        } else if (input.gas) {
            targetTilt = -0.05;
        } else if (input.brake) {
            targetTilt = 0.07;
        }
        state.bike.tilt += (targetTilt - state.bike.tilt) * Math.min(1, dt * 12);

        // Exhaust / nitro particles
        if (state.bike.groundOffset >= -4 && Math.random() < (state.nitroActive ? 0.9 : 0.35)) {
            state.particles.push({
                x: state.bike.x - 44,
                y: GROUND_Y + state.bike.groundOffset - 18,
                vx: -state.speed * 0.45 - Math.random() * 50,
                vy: (Math.random() - 0.5) * 25 - 10,
                size: state.nitroActive ? 5 + Math.random() * 4 : 3 + Math.random() * 3,
                life: state.nitroActive ? 0.26 : 0.32,
                maxLife: 0.32,
                color: state.nitroActive
                    ? Math.random() < 0.5
                        ? "#22d3ee"
                        : "#3b82f6"
                    : "rgba(203, 213, 225, 0.7)",
            });
        }

        // Spawn upcoming obstacles if within lookahead
        while (state.nextSpawnDistancePx < state.worldDistancePx + 1150) {
            spawnWorldSlice(stage);
        }

        // Bike hitbox (forgiving AABB)
        const bikeBox = {
            left: state.bike.x - 30,
            right: state.bike.x + 30,
            top: GROUND_Y + state.bike.groundOffset - 48,
            bottom: GROUND_Y + state.bike.groundOffset - 4,
        };

        // Update obstacles & check collisions
        for (const obs of state.obstacles) {
            const obsMove = obs.type === "tire" ? (state.speed + obs.extraSpeed) * dt : dx;
            obs.x -= obsMove;
            if (obs.type === "tire") {
                obs.spin -= obsMove / 21;
            }

            if (obs.hit) continue;

            const obsBox = {
                left: obs.x + 5,
                right: obs.x + obs.w - 5,
                top: GROUND_Y - obs.h + 4,
                bottom: GROUND_Y,
            };

            const overlaps =
                bikeBox.right > obsBox.left &&
                bikeBox.left < obsBox.right &&
                bikeBox.bottom > obsBox.top &&
                bikeBox.top < obsBox.bottom;

            if (overlaps) {
                if (obs.type === "ramp") {
                    obs.hit = true;
                    state.bike.vy = RAMP_VELOCITY;
                    state.bike.groundOffset = -6;
                    state.speed = Math.min(stage.nitroSpeed, state.speed + 140);
                    state.score += 50;
                    sound.ramp();
                    addFloatingText("+50 LOMPATAN!", state.bike.x, GROUND_Y - 90, "#38bdf8");
                    spawnParticles(obs.x + obs.w, GROUND_Y - obs.h, 12, "#fbbf24", 180);
                } else if (obs.type === "oil") {
                    obs.hit = true;
                    if (!state.nitroActive) {
                        state.oilTimer = 1.1;
                        sound.slip();
                        addFloatingText("LICIN!", state.bike.x, GROUND_Y - 75, "#facc15");
                    }
                } else if (state.nitroActive && (obs.type === "cone" || obs.type === "tire")) {
                    obs.hit = true;
                    state.score += 75;
                    sound.coin();
                    addFloatingText("+75 TABRAK NITRO!", obs.x, GROUND_Y - 70, "#22d3ee");
                    spawnParticles(obs.x + obs.w * 0.5, GROUND_Y - obs.h * 0.5, 16, "#22d3ee", 240);
                } else if (state.invulnTimer <= 0) {
                    obs.hit = true;
                    handleCrash();
                }
            } else if (!obs.passed && obs.x + obs.w < bikeBox.left) {
                obs.passed = true;
                if (obs.type !== "ramp") {
                    state.score += 20;
                }
            }
        }
        state.obstacles = state.obstacles.filter((o) => o.x + o.w > -120);

        // Update pickups
        for (const p of state.pickups) {
            p.x -= dx;
            if (p.collected) continue;
            const cx = state.bike.x;
            const cy = GROUND_Y + state.bike.groundOffset - 28;
            const distSq = (p.x - cx) ** 2 + (p.y - cy) ** 2;
            if (distSq < (p.r + 30) ** 2) {
                p.collected = true;
                if (p.type === "coin") {
                    state.score += 50;
                    state.nitro = Math.min(100, state.nitro + 8);
                    sound.coin();
                    addFloatingText("+50", p.x, p.y - 12, "#fbbf24");
                    spawnParticles(p.x, p.y, 8, "#fbbf24", 120);
                } else if (p.type === "nitro") {
                    state.score += 30;
                    state.nitro = Math.min(100, state.nitro + 42);
                    sound.nitroPickup();
                    addFloatingText("NITRO +42%", p.x, p.y - 12, "#22d3ee");
                    spawnParticles(p.x, p.y, 12, "#22d3ee", 160);
                } else if (p.type === "wrench") {
                    if (state.hearts < MAX_HEARTS) {
                        state.hearts += 1;
                        addFloatingText("+1 NYAWA!", p.x, p.y - 12, "#4ade80");
                    } else {
                        state.score += 100;
                        addFloatingText("+100 BONUS!", p.x, p.y - 12, "#4ade80");
                    }
                    sound.heal();
                    spawnParticles(p.x, p.y, 12, "#4ade80", 140);
                }
            }
        }
        state.pickups = state.pickups.filter((p) => !p.collected && p.x > -80);

        updateEffects(dt);

        // Check Finish Line!
        if (state.worldDistancePx >= state.finishLineWorldPx) {
            triggerFinish();
        }

        const speedRatio = Math.max(0, (state.speed - stage.minSpeed) / (stage.nitroSpeed - stage.minSpeed));
        sound.updateEngine(speedRatio, true);
        updateHUD();
    }

    function updateEffects(dt) {
        for (const pt of state.particles) {
            pt.x += pt.vx * dt;
            pt.y += pt.vy * dt;
            pt.vy += 260 * dt;
            pt.life -= dt;
        }
        state.particles = state.particles.filter((pt) => pt.life > 0);

        for (const ft of state.floatingTexts) {
            ft.y += ft.vy * dt;
            ft.life -= dt;
        }
        state.floatingTexts = state.floatingTexts.filter((ft) => ft.life > 0);

        for (const c of state.confetti) {
            c.x += c.vx * dt;
            c.y += c.vy * dt;
            c.rot += c.vRot * dt;
        }
        state.confetti = state.confetti.filter((c) => c.y < canvas.height + 30);
    }

    function handleCrash() {
        state.hearts -= 1;
        state.invulnTimer = 1.4;
        state.shakeTimer = 0.3;
        state.speed = Math.max(180, state.speed * 0.55);
        sound.hit();
        spawnParticles(state.bike.x + 15, GROUND_Y + state.bike.groundOffset - 22, 18, "#ef4444", 220);
        addFloatingText("AWAS!", state.bike.x, GROUND_Y - 82, "#ef4444");

        if (state.hearts <= 0) {
            state.mode = "gameover";
            sound.updateEngine(0, false);
            const stage = STAGES[state.selectedStage];
            const meters = Math.floor(state.worldDistancePx / PIXELS_PER_METER);
            gameOverStats.textContent = `Jarak ditempuh: ${meters} / ${stage.lengthMeters} m · Skor akhir: ${Math.floor(state.score)}`;
            updateHUD();
            showOverlay(gameOverOverlay);
        }
    }

    function triggerFinish() {
        state.mode = "finishing";
        state.finishCelebrationTimer = 1.35;
        state.score += 300 + state.hearts * 100;
        sound.updateEngine(0, false);
        sound.win();
        spawnConfetti();
        updateHUD();
    }

    function updateFinishing(dt) {
        state.finishCelebrationTimer -= dt;
        const dx = 280 * dt;
        state.worldDistancePx += dx;
        state.wheelAngle += dx / 21;
        state.bike.groundOffset = Math.min(0, state.bike.groundOffset);
        state.bike.tilt += (-0.12 - state.bike.tilt) * Math.min(1, dt * 6);
        updateEffects(dt);

        if (state.finishCelebrationTimer <= 0) {
            state.mode = "win";
            const stage = STAGES[state.selectedStage];
            const finalScore = Math.floor(state.score);
            const isNewRecord = saveProgressAndRecord(stage.id, finalScore, state.elapsedTime);
            const isFinalLevel = state.selectedStage === STAGES.length - 1;

            winTitle.textContent = isFinalLevel
                ? "🏆 Semua 10 Level Tamat!"
                : `Level ${state.selectedStage + 1} Lolos!`;
            winStats.textContent = `${stage.name} · Waktu: ${state.elapsedTime.toFixed(1)} dtk · Skor: ${finalScore}${
                isNewRecord ? " · Rekor Baru!" : ""
            }`;
            nextStageBtn.textContent = isFinalLevel
                ? "Ulang dari Level 1"
                : `Lanjut Level ${state.selectedStage + 2} →`;
            showOverlay(winOverlay);
        }
    }

    // =========================================================================
    // RENDERING
    // =========================================================================
    function render() {
        const stage = STAGES[state.selectedStage];
        ctx.save();

        if (state.shakeTimer > 0) {
            const mag = (state.shakeTimer / 0.3) * 7;
            ctx.translate((Math.random() - 0.5) * mag * 2, (Math.random() - 0.5) * mag * 2);
        }

        drawSkyAndBackdrop(stage);
        drawRoad(stage);
        drawFinishArch();
        drawPickups();
        drawObstacles();
        drawMotorbike(stage);
        drawParticles();
        drawFloatingTexts();
        drawConfetti();

        ctx.restore();
    }

    function drawSkyAndBackdrop(stage) {
        const skyGrad = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
        skyGrad.addColorStop(0, stage.skyTop);
        skyGrad.addColorStop(1, stage.skyBottom);
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, canvas.width, GROUND_Y);

        if (stage.nightMode) {
            for (const s of state.stars) {
                const alpha = 0.45 + 0.5 * Math.sin(state.elapsedTime * 2.4 + s.twinkle);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Sun / Moon
        ctx.fillStyle = stage.sunColor;
        ctx.beginPath();
        ctx.arc(790, 92, stage.nightMode ? 32 : 44, 0, Math.PI * 2);
        ctx.fill();

        // Far mountains (parallax 0.12)
        const farOffset = (state.worldDistancePx * 0.12) % 320;
        ctx.fillStyle = stage.mountainFar;
        ctx.beginPath();
        ctx.moveTo(0, GROUND_Y);
        for (let x = -320; x <= canvas.width + 320; x += 160) {
            const px = x - farOffset;
            ctx.lineTo(px + 80, 230 + ((Math.abs(x) / 160) % 2) * 35);
            ctx.lineTo(px + 160, GROUND_Y);
        }
        ctx.closePath();
        ctx.fill();

        // Near skyline / hills / desert (parallax 0.28)
        const nearOffset = (state.worldDistancePx * 0.28) % 240;
        ctx.fillStyle = stage.mountainNear;
        for (let x = -240; x <= canvas.width + 240; x += 120) {
            const bx = x - nearOffset;
            if (stage.biome === "city") {
                const bh = 90 + ((Math.abs(Math.round(x / 120)) * 37) % 85);
                ctx.fillRect(bx, GROUND_Y - bh, 96, bh);
                if (stage.nightMode) {
                    ctx.fillStyle = "rgba(250, 204, 21, 0.55)";
                    for (let wy = GROUND_Y - bh + 14; wy < GROUND_Y - 22; wy += 22) {
                        ctx.fillRect(bx + 16, wy, 12, 10);
                        ctx.fillRect(bx + 44, wy, 12, 10);
                        ctx.fillRect(bx + 68, wy, 12, 10);
                    }
                    ctx.fillStyle = stage.mountainNear;
                }
            } else if (stage.biome === "desert") {
                // Sand dunes & cactus silhouettes
                ctx.beginPath();
                ctx.arc(bx + 60, GROUND_Y, 64, Math.PI, 0);
                ctx.fill();
                ctx.fillRect(bx + 24, GROUND_Y - 76, 10, 44);
                ctx.fillRect(bx + 14, GROUND_Y - 62, 10, 7);
                ctx.fillRect(bx + 14, GROUND_Y - 72, 7, 14);
                ctx.fillRect(bx + 34, GROUND_Y - 56, 10, 7);
                ctx.fillRect(bx + 37, GROUND_Y - 68, 7, 16);
            } else {
                // Pine silhouettes for hills biome
                ctx.beginPath();
                ctx.moveTo(bx, GROUND_Y);
                ctx.lineTo(bx + 60, GROUND_Y - 125);
                ctx.lineTo(bx + 120, GROUND_Y);
                ctx.closePath();
                ctx.fill();
            }
        }

        // Streetlights (parallax 0.65)
        const poleSpacing = 260;
        const poleOffset = (state.worldDistancePx * 0.65) % poleSpacing;
        for (let x = -poleSpacing; x <= canvas.width + poleSpacing; x += poleSpacing) {
            const px = x - poleOffset;
            ctx.fillStyle = "#475569";
            ctx.fillRect(px, GROUND_Y - 115, 5, 115);
            ctx.fillRect(px, GROUND_Y - 115, 22, 4);
            if (stage.nightMode) {
                ctx.fillStyle = "rgba(253, 224, 71, 0.22)";
                ctx.beginPath();
                ctx.moveTo(px + 20, GROUND_Y - 111);
                ctx.lineTo(px - 22, GROUND_Y);
                ctx.lineTo(px + 62, GROUND_Y);
                ctx.closePath();
                ctx.fill();
            }
        }
    }

    function drawRoad(stage) {
        // Curb strip
        const curbW = 44;
        const curbOffset = state.worldDistancePx % (curbW * 2);
        for (let x = -curbW * 2; x < canvas.width + curbW * 2; x += curbW) {
            const idx = Math.floor((x + curbOffset) / curbW);
            ctx.fillStyle = Math.abs(idx) % 2 === 0 ? stage.curbA : stage.curbB;
            ctx.fillRect(x - (curbOffset % curbW), GROUND_Y - 6, curbW + 1, 8);
        }

        // Asphalt
        ctx.fillStyle = stage.roadColor;
        ctx.fillRect(0, GROUND_Y + 2, canvas.width, canvas.height - GROUND_Y);

        // Dashed lane line
        const dashPeriod = 90;
        const dashOffset = state.worldDistancePx % dashPeriod;
        ctx.fillStyle = "rgba(248, 250, 252, 0.65)";
        for (let x = -dashPeriod; x < canvas.width + dashPeriod; x += dashPeriod) {
            ctx.fillRect(x - dashOffset, GROUND_Y + 46, 48, 6);
        }
    }

    function drawFinishArch() {
        const screenX = state.bike.x + (state.finishLineWorldPx - state.worldDistancePx);
        if (screenX < -160 || screenX > canvas.width + 180) return;

        // Pillars
        ctx.fillStyle = "#e2e8f0";
        ctx.fillRect(screenX - 8, GROUND_Y - 175, 14, 175);
        ctx.fillRect(screenX + 86, GROUND_Y - 175, 14, 175);

        // Banner
        ctx.fillStyle = "#111827";
        ctx.fillRect(screenX - 18, GROUND_Y - 190, 128, 44);
        ctx.strokeStyle = "#fbbf24";
        ctx.lineWidth = 3;
        ctx.strokeRect(screenX - 18, GROUND_Y - 190, 128, 44);

        // Checkered strips
        const cell = 8;
        for (let row = 0; row < 2; row++) {
            for (let col = 0; col < 16; col++) {
                ctx.fillStyle = (row + col) % 2 === 0 ? "#ffffff" : "#0f172a";
                ctx.fillRect(screenX - 18 + col * cell, GROUND_Y - 190 + row * cell, cell, cell);
            }
        }

        ctx.fillStyle = "#fbbf24";
        ctx.font = "900 18px 'Segoe UI', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("FINISH", screenX + 46, GROUND_Y - 153);

        // Ground checkered line
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 3; c++) {
                ctx.fillStyle = (r + c) % 2 === 0 ? "#ffffff" : "#0f172a";
                ctx.fillRect(screenX + c * 10, GROUND_Y + 4 + r * 15, 10, 15);
            }
        }
    }

    function drawObstacles() {
        for (const obs of state.obstacles) {
            if (obs.type === "cone") {
                // Base
                ctx.fillStyle = "#ea580c";
                ctx.fillRect(obs.x, GROUND_Y - 7, obs.w, 7);
                // Cone triangle
                ctx.beginPath();
                ctx.moveTo(obs.x + 4, GROUND_Y - 7);
                ctx.lineTo(obs.x + obs.w / 2, GROUND_Y - obs.h);
                ctx.lineTo(obs.x + obs.w - 4, GROUND_Y - 7);
                ctx.closePath();
                ctx.fillStyle = "#f97316";
                ctx.fill();
                // Reflective stripe
                ctx.fillStyle = "#f8fafc";
                ctx.beginPath();
                ctx.moveTo(obs.x + 9, GROUND_Y - 18);
                ctx.lineTo(obs.x + obs.w - 9, GROUND_Y - 18);
                ctx.lineTo(obs.x + obs.w - 11, GROUND_Y - 26);
                ctx.lineTo(obs.x + 11, GROUND_Y - 26);
                ctx.closePath();
                ctx.fill();
            } else if (obs.type === "barrier") {
                // Legs
                ctx.fillStyle = "#64748b";
                ctx.fillRect(obs.x + 6, GROUND_Y - 28, 6, 28);
                ctx.fillRect(obs.x + obs.w - 12, GROUND_Y - 28, 6, 28);
                // Striped board
                ctx.fillStyle = "#ef4444";
                ctx.fillRect(obs.x, GROUND_Y - obs.h, obs.w, 24);
                ctx.fillStyle = "#f8fafc";
                ctx.fillRect(obs.x + 10, GROUND_Y - obs.h, 11, 24);
                ctx.fillRect(obs.x + 33, GROUND_Y - obs.h, 11, 24);
            } else if (obs.type === "oil") {
                ctx.fillStyle = "rgba(15, 23, 42, 0.92)";
                ctx.beginPath();
                ctx.ellipse(obs.x + obs.w / 2, GROUND_Y + 4, obs.w / 2, 7, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "rgba(168, 85, 247, 0.45)";
                ctx.lineWidth = 2;
                ctx.stroke();
            } else if (obs.type === "tire") {
                const cx = obs.x + obs.w / 2;
                const cy = GROUND_Y - obs.h / 2;
                const r = obs.w / 2;
                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(obs.spin);
                ctx.fillStyle = "#0f172a";
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "#94a3b8";
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.48, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "#334155";
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(-r * 0.48, 0);
                ctx.lineTo(r * 0.48, 0);
                ctx.moveTo(0, -r * 0.48);
                ctx.lineTo(0, r * 0.48);
                ctx.stroke();
                ctx.restore();
            } else if (obs.type === "ramp") {
                ctx.beginPath();
                ctx.moveTo(obs.x, GROUND_Y);
                ctx.lineTo(obs.x + obs.w, GROUND_Y);
                ctx.lineTo(obs.x + obs.w, GROUND_Y - obs.h);
                ctx.closePath();
                ctx.fillStyle = "#facc15";
                ctx.fill();
                ctx.strokeStyle = "#0f172a";
                ctx.lineWidth = 3;
                ctx.stroke();
                // Arrow on ramp
                ctx.fillStyle = "#0f172a";
                ctx.font = "900 13px sans-serif";
                ctx.fillText("▲", obs.x + obs.w - 22, GROUND_Y - 7);
            }
        }
    }

    function drawPickups() {
        for (const p of state.pickups) {
            const bob = Math.sin(state.elapsedTime * 5 + p.x * 0.05) * 4;
            const py = p.y + bob;

            if (p.type === "coin") {
                ctx.fillStyle = "#fbbf24";
                ctx.beginPath();
                ctx.arc(p.x, py, p.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "#fef08a";
                ctx.lineWidth = 2.5;
                ctx.stroke();
                ctx.fillStyle = "#92400e";
                ctx.font = "bold 12px sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("$", p.x, py + 4);
            } else if (p.type === "nitro") {
                ctx.fillStyle = "#06b6d4";
                ctx.fillRect(p.x - 10, py - 14, 20, 28);
                ctx.fillStyle = "#e0f2fe";
                ctx.fillRect(p.x - 5, py - 19, 10, 5);
                ctx.fillStyle = "#0f172a";
                ctx.font = "bold 11px sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("N2", p.x, py + 4);
            } else if (p.type === "wrench") {
                ctx.fillStyle = "#22c55e";
                ctx.beginPath();
                ctx.arc(p.x, py, p.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "#ffffff";
                ctx.font = "bold 15px sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("+", p.x, py + 5);
            }
        }
    }

    function drawMotorbike(stage) {
        if (state.invulnTimer > 0 && Math.floor(state.invulnTimer * 14) % 2 === 0) {
            return;
        }

        const bx = state.bike.x;
        const by = GROUND_Y + state.bike.groundOffset;

        // Ground shadow
        const shadowScale = Math.max(0.35, 1 + state.bike.groundOffset / 240);
        ctx.fillStyle = `rgba(0, 0, 0, ${(0.36 * shadowScale).toFixed(2)})`;
        ctx.beginPath();
        ctx.ellipse(bx, GROUND_Y + 3, 44 * shadowScale, 7 * shadowScale, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.translate(bx, by - 18);
        ctx.rotate(state.bike.tilt);

        // Nitro energy aura
        if (state.nitroActive) {
            ctx.strokeStyle = "rgba(34, 211, 238, 0.75)";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.ellipse(2, -10, 54, 34, 0, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Night headlight cone
        if (stage.nightMode) {
            const beamGrad = ctx.createLinearGradient(34, -18, 280, 10);
            beamGrad.addColorStop(0, "rgba(254, 240, 138, 0.48)");
            beamGrad.addColorStop(1, "rgba(254, 240, 138, 0)");
            ctx.fillStyle = beamGrad;
            ctx.beginPath();
            ctx.moveTo(34, -18);
            ctx.lineTo(290, -52);
            ctx.lineTo(290, 32);
            ctx.closePath();
            ctx.fill();
        }

        // Wheels
        drawWheel(-26, 2, 16, state.wheelAngle);
        drawWheel(28, 2, 16, state.wheelAngle);

        // Exhaust pipe
        ctx.fillStyle = "#94a3b8";
        ctx.beginPath();
        ctx.moveTo(-10, -2);
        ctx.lineTo(-42, -9);
        ctx.lineTo(-40, -15);
        ctx.lineTo(-8, -8);
        ctx.closePath();
        ctx.fill();

        // Swingarm & Front fork
        ctx.strokeStyle = "#cbd5e1";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-26, 2);
        ctx.lineTo(-4, -12);
        ctx.moveTo(28, 2);
        ctx.lineTo(14, -28);
        ctx.stroke();

        // Engine block
        ctx.fillStyle = "#475569";
        ctx.fillRect(-10, -18, 20, 16);

        // Main sporty fairing / body
        ctx.fillStyle = "#ff5722";
        ctx.beginPath();
        ctx.moveTo(-30, -18);
        ctx.lineTo(-8, -28);
        ctx.lineTo(20, -28);
        ctx.lineTo(35, -16);
        ctx.lineTo(12, -12);
        ctx.lineTo(-18, -12);
        ctx.closePath();
        ctx.fill();

        // Windshield
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath();
        ctx.moveTo(18, -28);
        ctx.lineTo(29, -36);
        ctx.lineTo(32, -24);
        ctx.closePath();
        ctx.fill();

        // Headlight
        ctx.fillStyle = "#fef08a";
        ctx.beginPath();
        ctx.arc(34, -18, 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Rider torso + legs
        ctx.strokeStyle = "#1e293b";
        ctx.lineWidth = 7;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(-12, -24);
        ctx.lineTo(-2, -11);
        ctx.lineTo(4, 1);
        ctx.stroke();

        ctx.strokeStyle = "#0f172a";
        ctx.lineWidth = 9;
        ctx.beginPath();
        ctx.moveTo(-12, -25);
        ctx.lineTo(2, -40);
        ctx.stroke();

        // Rider arm to handlebar
        ctx.strokeStyle = "#f97316";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, -38);
        ctx.lineTo(16, -28);
        ctx.stroke();

        // Helmet
        ctx.fillStyle = "#f8fafc";
        ctx.beginPath();
        ctx.arc(6, -49, 10.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#0284c7";
        ctx.beginPath();
        ctx.arc(10, -49, 6.5, -0.5, 0.7);
        ctx.lineTo(10, -49);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    function drawWheel(x, y, radius, angle) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        ctx.fillStyle = "#0f172a";
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#94a3b8";
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.56, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#1e293b";
        ctx.lineWidth = 2.5;
        for (let i = 0; i < 3; i++) {
            const a = (i * Math.PI) / 3;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * -radius * 0.52, Math.sin(a) * -radius * 0.52);
            ctx.lineTo(Math.cos(a) * radius * 0.52, Math.sin(a) * radius * 0.52);
            ctx.stroke();
        }
        ctx.restore();
    }

    function drawParticles() {
        for (const pt of state.particles) {
            ctx.globalAlpha = Math.max(0, pt.life / pt.maxLife);
            ctx.fillStyle = pt.color;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }

    function drawFloatingTexts() {
        for (const ft of state.floatingTexts) {
            ctx.globalAlpha = Math.max(0, ft.life / ft.maxLife);
            ctx.fillStyle = ft.color;
            ctx.font = "800 15px 'Segoe UI', sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(ft.text, ft.x, ft.y);
        }
        ctx.globalAlpha = 1;
    }

    function drawConfetti() {
        for (const c of state.confetti) {
            ctx.save();
            ctx.translate(c.x, c.y);
            ctx.rotate(c.rot);
            ctx.fillStyle = c.color;
            ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
            ctx.restore();
        }
    }

    // =========================================================================
    // MAIN RAF LOOP
    // =========================================================================
    let lastTime = performance.now();
    function frame(now) {
        const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
        lastTime = now;

        update(dt);
        render();
        requestAnimationFrame(frame);
    }

    renderLevelGrid();
    updateHUD();
    requestAnimationFrame(frame);
})();
