// ===== LUXURY LANDING PAGE - JavaScript =====
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Cursor Glow Effect =====
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }
    
    // ===== Reveal Animations =====
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => revealObserver.observe(el));
    
    // ===== Smooth Scroll for Navigation =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // ===== Parallax Effect on Hero =====
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (hero && heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });
    
    // ===== Counter Animation =====
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.innerText.replace(/[^0-9]/g, '');
                const suffix = counter.innerText.replace(/[0-9]/g, '');
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.innerText = Math.floor(current) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target + suffix;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
    
    // ===== Seats Badge Animation =====
    const seatsBadge = document.querySelector('.seats-badge');
    let isVisible = true;
    
    setInterval(() => {
        if (seatsBadge) {
            seatsBadge.style.transform = isVisible ? 'scale(0.95)' : 'scale(1)';
            isVisible = !isVisible;
        }
    }, 500);
    
    // ===== Hide/Show Seats Badge on Scroll =====
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (seatsBadge) {
            if (currentScroll > lastScroll && currentScroll > 300) {
                seatsBadge.style.transform = 'translateY(-150%)';
            } else {
                seatsBadge.style.transform = 'translateY(0)';
            }
        }
        
        lastScroll = currentScroll;
    });
    
    // ===== WhatsApp Button Pulse on Pricing Section =====
    const pricingSection = document.querySelector('.pricing-section');
    const whatsappFloat = document.querySelector('.whatsapp-float');
    
    const pricingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && whatsappFloat) {
                whatsappFloat.classList.add('extra-pulse');
            } else if (whatsappFloat) {
                whatsappFloat.classList.remove('extra-pulse');
            }
        });
    }, { threshold: 0.3 });
    
    if (pricingSection) {
        pricingObserver.observe(pricingSection);
    }
    
    // ===== Typing Effect for Hero Title =====
    // Optional: Uncomment to enable
    /*
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    */
    
    // ===== Card Hover 3D Effect =====
    const cards = document.querySelectorAll('.content-card, .target-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ===== Scroll Progress Indicator =====
    const createScrollProgress = () => {
        const progress = document.createElement('div');
        progress.style.cssText = `
            position: fixed;
            top: 0;
            right: 0;
            width: 3px;
            height: 0%;
            background: linear-gradient(to bottom, #c9a227, #dbb84d);
            z-index: 9999;
            transition: height 0.1s ease;
        `;
        document.body.appendChild(progress);
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progress.style.height = scrollPercent + '%';
        });
    };
    
    createScrollProgress();
    
    // ===== Timeline Scroll Animation =====
    const timelineContainer = document.querySelector('.timeline-container');
    const progressFill = document.querySelector('.progress-fill');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineContainer && progressFill) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start timeline animation when section is visible
                    window.addEventListener('scroll', updateTimeline);
                }
            });
        }, { threshold: 0.1 });
        
        timelineObserver.observe(timelineContainer);
        
        function updateTimeline() {
            const containerRect = timelineContainer.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerHeight = containerRect.height;
            const windowHeight = window.innerHeight;
            
            // Calculate progress based on scroll position within timeline
            let progress = 0;
            if (containerTop < windowHeight * 0.5) {
                progress = Math.min(100, Math.max(0, 
                    ((windowHeight * 0.5 - containerTop) / containerHeight) * 100
                ));
            }
            
            progressFill.style.height = progress + '%';
            
            // Activate timeline items based on scroll
            timelineItems.forEach((item, index) => {
                const itemRect = item.getBoundingClientRect();
                if (itemRect.top < windowHeight * 0.6) {
                    item.classList.add('active');
                }
            });
        }
    }
    
    // ===== Countdown Timer (Optional) =====
    // Add urgency with a countdown timer
    const createCountdown = () => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 3); // 3 days from now
        
        const countdownEl = document.createElement('div');
        countdownEl.className = 'countdown-timer';
        countdownEl.style.cssText = `
            position: fixed;
            top: 80px;
            left: 20px;
            background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
            color: #f59e0b;
            padding: 15px 20px;
            border-radius: 15px;
            font-size: 14px;
            font-weight: 600;
            z-index: 999;
            border: 1px solid rgba(245, 158, 11, 0.3);
            display: none;
        `;
        document.body.appendChild(countdownEl);
        
        const updateCountdown = () => {
            const now = new Date();
            const diff = targetDate - now;
            
            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                
                countdownEl.innerHTML = `⏰ العرض ينتهي في: ${days}d ${hours}h ${minutes}m`;
                countdownEl.style.display = 'block';
            } else {
                countdownEl.style.display = 'none';
            }
        };
        
        // Disabled by default - uncomment to enable
        // updateCountdown();
        // setInterval(updateCountdown, 60000);
    };
    
    // createCountdown(); // Uncomment to enable countdown
    
    console.log('🚀 Landing page scripts loaded successfully!');
});

// ===== Certificate Modal Functions =====
function openCertificate() {
    document.getElementById('certificateModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCertificate() {
    document.getElementById('certificateModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCertificate();
    }
});

// ===== Add Extra Pulse Animation =====
const style = document.createElement('style');
style.textContent = `
    .whatsapp-float.extra-pulse {
        animation: extra-pulse 0.5s ease-in-out infinite alternate !important;
    }
    
    @keyframes extra-pulse {
        from {
            transform: scale(1);
            box-shadow: 0 10px 40px rgba(0,0,0,0.2), 0 0 20px rgba(37, 211, 102, 0.5);
        }
        to {
            transform: scale(1.15);
            box-shadow: 0 10px 40px rgba(0,0,0,0.2), 0 0 50px rgba(37, 211, 102, 0.9);
        }
    }
`;
document.head.appendChild(style);
