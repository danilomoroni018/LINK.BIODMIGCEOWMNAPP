// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Add click tracking for analytics
    const actionButtons = document.querySelectorAll('.action-btn');
    const socialButtons = document.querySelectorAll('.social-btn');
    
    // Track action button clicks
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Track click (you can replace with your analytics)
            const buttonText = this.querySelector('span').textContent;
            console.log('Action button clicked:', buttonText);
            
            // Special tracking for different button types
            if (this.classList.contains('primary')) {
                console.log('WasteMeNot website clicked - redirecting to landing page');
            } else if (this.classList.contains('podcast')) {
                console.log('Podcast clicked - redirecting to podcast page');
            } else if (this.classList.contains('blog')) {
                console.log('Blog clicked - redirecting to blog');
            } else if (this.classList.contains('about')) {
                console.log('About clicked - redirecting to about page');
            } else if (this.classList.contains('contact')) {
                console.log('Email contact clicked - opening email client');
            } else if (this.classList.contains('whatsapp')) {
                console.log('WhatsApp clicked - opening WhatsApp');
            }
        });
    });
    
    // Track social media button clicks
    socialButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Track social media clicks
            const buttonText = this.querySelector('span').textContent;
            console.log('Social media clicked:', buttonText);
            
            // Special tracking for each social platform
            if (this.classList.contains('linkedin')) {
                console.log('LinkedIn profile clicked');
            } else if (this.classList.contains('twitter')) {
                console.log('Twitter profile clicked');
            } else if (this.classList.contains('instagram')) {
                console.log('Instagram profile clicked');
            } else if (this.classList.contains('youtube')) {
                console.log('YouTube channel clicked');
            }
        });
    });
    
    // Add smooth hover effects
    const allButtons = [...actionButtons, ...socialButtons];
    allButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('body');
        const speed = scrolled * 0.5;
        
        parallax.style.transform = `translateY(${speed}px)`;
    });
    
    // Add loading animation for profile elements
    const profileImage = document.querySelector('.profile-image');
    const name = document.querySelector('.name');
    const role = document.querySelector('.role');
    
    // Stagger the animations
    setTimeout(() => {
        if (profileImage) {
            profileImage.style.opacity = '1';
            profileImage.style.transform = 'scale(1)';
        }
    }, 100);
    
    setTimeout(() => {
        if (name) {
            name.style.opacity = '1';
            name.style.transform = 'translateY(0)';
        }
    }, 300);
    
    setTimeout(() => {
        if (role) {
            role.style.opacity = '1';
            role.style.transform = 'translateY(0)';
        }
    }, 500);
    
    // Add typing effect to name (optional)
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Initialize typing effect after a delay (optional)
    setTimeout(() => {
        if (name) {
            const originalText = name.textContent;
            typeWriter(name, originalText, 100);
        }
    }, 800);
    
    // Add theme toggle functionality (optional)
    function createThemeToggle() {
        const toggle = document.createElement('button');
        toggle.innerHTML = '🌙';
        toggle.className = 'theme-toggle';
        toggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 20px;
            cursor: pointer;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            z-index: 1000;
        `;
        
        toggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            this.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
        });
        
        document.body.appendChild(toggle);
    }
    
    // Uncomment the line below to enable theme toggle
    // createThemeToggle();
    
    // Add click sound effect (optional)
    function playClickSound() {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
        audio.volume = 0.1;
        audio.play().catch(() => {}); // Ignore errors if audio fails
    }
    
    // Add sound to button clicks
    allButtons.forEach(button => {
        button.addEventListener('click', playClickSound);
    });
    
    // Add viewport animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all buttons
    allButtons.forEach(button => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        button.style.transition = 'all 0.6s ease';
        observer.observe(button);
    });
    
    // Add custom cursor for better UX
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    // Show custom cursor on desktop
    if (window.innerWidth > 768) {
        cursor.style.display = 'block';
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });
        
        allButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.background = 'rgba(255, 255, 255, 1)';
            });
            
            button.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'rgba(255, 255, 255, 0.8)';
            });
        });
    }
    
    // Add profile image hover effect
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) {
        profilePhoto.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        profilePhoto.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add banner hover effect
    const infoBanner = document.querySelector('.info-banner');
    if (infoBanner) {
        infoBanner.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        infoBanner.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Add mobile touch feedback
    if ('ontouchstart' in window) {
        allButtons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            button.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }
});

// Add service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
} 