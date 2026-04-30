document.addEventListener('DOMContentLoaded', () => {
    // GSAP INITIALIZATION
    gsap.registerPlugin(ScrollTrigger);

    // CURSOR GLOW
    const glow = document.getElementById('cursor-glow');
    document.addEventListener('mousemove', (e) => {
        gsap.to(glow, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.6,
            ease: 'power2.out'
        });
    });

    // HERO ENTRANCE
    const heroTl = gsap.timeline();
    heroTl.to('.word', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out'
    }).to('.hero-sub', {
        opacity: 1,
        duration: 0.8
    }, '-=0.5').to('.hero-actions', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, '-=0.5');

    // SCROLL REVEALS
    gsap.utils.toArray('.stagger-reveal').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // PARALLAX EFFECT
    gsap.utils.toArray('.parallax').forEach(el => {
        const speed = el.dataset.speed || 0.05;
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            y: (i, target) => -ScrollTrigger.maxScroll(window) * speed
        });
    });

    // DOT GRID ANIMATION LOGIC (Inspired by MotionGrid)
    class DotGrid {
        constructor(containerId, frames, duration = 300) {
            this.container = document.getElementById(containerId);
            this.frames = frames;
            this.duration = duration;
            this.currentIndex = 0;
            this.dots = [];
            this.init();
        }

        init() {
            if (!this.container) return;
            // Create 25 dots (5x5)
            for (let i = 0; i < 25; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                this.container.appendChild(dot);
                this.dots.push(dot);
            }
            this.animate();
        }

        animate() {
            setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.frames.length;
                const activeIndices = this.frames[this.currentIndex];
                
                this.dots.forEach((dot, i) => {
                    if (activeIndices.includes(i)) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }, this.duration);
        }
    }

    // FRAMES (Coordinate to Index conversion: y * 5 + x)
    const searchingFrames = [
        [6, 7, 8, 11, 12, 13],
        [7, 8, 9, 12, 13, 14],
        [12, 13, 14, 17, 18, 19],
        [11, 12, 13, 16, 17, 18],
        [6, 7, 8, 11, 12, 13]
    ];

    const syncingFrames = [
        [2, 7, 12, 17, 22],
        [7, 12, 17, 22],
        [12, 17, 22],
        [17, 22],
        [22],
        [],
        [2],
        [2, 7],
        [2, 7, 12],
        [2, 7, 12, 17]
    ];

    const initializingFrames = [
        [12],
        [7, 11, 13, 17],
        [2, 6, 8, 10, 14, 16, 18, 22],
        [1, 3, 5, 9, 15, 19, 21, 23],
        [0, 4, 20, 24],
        []
    ];

    new DotGrid('grid-voice', initializingFrames, 400);
    new DotGrid('grid-search', searchingFrames, 300);
    new DotGrid('grid-security', syncingFrames, 200);

    // COMMAND BAR LOGIC
    const barInput = document.getElementById('agent-input');
    const barResult = document.getElementById('bar-result');
    const responseText = document.getElementById('agent-response');

    const responses = {
        'speed': 'Neural Ingress Protocol: sub-500ms processing.',
        'privacy': 'Encrypted Synapse Architecture: AES-256 E2E.',
        'bloom': 'Project Genesis: MemoryOS is an open-protocol neural expansion project built specifically for the Bloomathon initiative.',
        'pulse': 'Network Pulse: Analyzing relationship decay...',
        'features': 'Current Protocol Support: Neural Ingress (Voice), Cognitive Retrieval (Search), and Encrypted Synapse (Vault). Roadmap: Automatic LinkedIn Graph Sync.',
        'default': 'Synchronizing with Neural Vault... Query the protocol for speed, privacy, pulse, or features.'
    };

    barInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = barInput.value.toLowerCase();
            barResult.classList.remove('hidden');
            
            let found = false;
            for (let key in responses) {
                if (query.includes(key)) {
                    responseText.innerText = responses[key];
                    found = true;
                    break;
                }
            }
            if (!found) responseText.innerText = responses['default'];
            
            gsap.from(barResult, { y: 20, opacity: 0, duration: 0.4 });
            barInput.value = '';
        }
    });

    // Keyboard shortcut (Cmd+K)
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            barInput.focus();
        }
    });
});
