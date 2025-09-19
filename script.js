 
        // Property data
        const properties = [
            {
                id: 1,
                title: "Modern Luxury Villa",
                location: "Beverly Hills, CA",
                price: "$2,500,000",
                beds: 5,
                baths: 4,
                sqft: "4,500",
                type: "luxury",
                category: "residential"
            },
            {
                id: 2,
                title: "Downtown Penthouse",
                location: "Manhattan, NY",
                price: "$1,850,000",
                beds: 3,
                baths: 3,
                sqft: "3,200",
                type: "luxury",
                category: "residential"
            },
            {
                id: 3,
                title: "Waterfront Estate",
                location: "Malibu, CA",
                price: "$3,200,000",
                beds: 6,
                baths: 5,
                sqft: "6,800",
                type: "luxury",
                category: "residential"
            },
            {
                id: 4,
                title: "Contemporary Townhouse",
                location: "SoHo, NY",
                price: "$1,450,000",
                beds: 4,
                baths: 3,
                sqft: "2,800",
                type: "residential",
                category: "residential"
            },
            {
                id: 5,
                title: "Mountain View Retreat",
                location: "Aspen, CO",
                price: "$2,100,000",
                beds: 4,
                baths: 4,
                sqft: "3,900",
                type: "luxury",
                category: "residential"
            },
            {
                id: 6,
                title: "Historic Mansion",
                location: "Boston, MA",
                price: "$4,200,000",
                beds: 7,
                baths: 6,
                sqft: "8,200",
                type: "luxury",
                category: "residential"
            },
            {
                id: 7,
                title: "Modern Office Building",
                location: "Downtown Chicago",
                price: "$8,500,000",
                beds: 0,
                baths: 20,
                sqft: "45,000",
                type: "commercial",
                category: "commercial"
            },
            {
                id: 8,
                title: "Retail Shopping Center",
                location: "Miami, FL",
                price: "$12,300,000",
                beds: 0,
                baths: 15,
                sqft: "78,000",
                type: "commercial",
                category: "commercial"
            },
            {
                id: 9,
                title: "Investment Apartment Complex",
                location: "Austin, TX",
                price: "$6,800,000",
                beds: 48,
                baths: 48,
                sqft: "65,000",
                type: "investment",
                category: "investment"
            },
            {
                id: 10,
                title: "Luxury Condo Building",
                location: "San Francisco, CA",
                price: "$15,500,000",
                beds: 24,
                baths: 36,
                sqft: "85,000",
                type: "investment",
                category: "investment"
            }
        ];

        let currentFilter = 'all';

        // Page navigation
        function showPage(pageName) {
            // Hide all pages
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.remove('active');
            });

            // Show selected page
            document.getElementById(pageName + '-page').classList.add('active');

            // Update navigation
            document.querySelectorAll('.nav-item a').forEach(link => {
                link.classList.remove('active');
            });
            document.getElementById('nav-' + pageName).classList.add('active');

            // Close mobile menu
            document.getElementById('navMenu').classList.remove('active');

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Load properties if properties page
            if (pageName === 'properties') {
                loadProperties();
            }
        }

        // Load and display properties
        function loadProperties() {
            const grid = document.getElementById('propertiesGrid');
            grid.innerHTML = '';

            const filteredProperties = currentFilter === 'all' 
                ? properties 
                : properties.filter(prop => prop.type === currentFilter || prop.category === currentFilter);

            filteredProperties.forEach((property, index) => {
                const card = createPropertyCard(property);
                card.style.animationDelay = `${index * 0.1}s`;
                grid.appendChild(card);
            });
        }

        // Create property card element
        function createPropertyCard(property) {
            const card = document.createElement('div');
            card.className = 'property-card';
            card.style.animation = 'fadeInUp 0.6s ease-out forwards';
            card.style.opacity = '0';

            const bedsDisplay = property.beds > 0 ? `🛏️ ${property.beds} Beds` : '';
            const bathsDisplay = property.baths > 0 ? `🚿 ${property.baths} Baths` : `🚿 ${property.baths} Restrooms`;

            card.innerHTML = `
                <div class="property-image">
                    <div class="price-tag">${property.price}</div>
                </div>
                <div class="property-info">
                    <h3>${property.title}</h3>
                    <p style="color: #7f8c8d; margin-bottom: 1rem;">📍 ${property.location}</p>
                    <div class="property-features">
                        ${bedsDisplay ? `<div class="feature">${bedsDisplay}</div>` : ''}
                        <div class="feature">${bathsDisplay}</div>
                        <div class="feature">📐 ${property.sqft} sq ft</div>
                    </div>
                    <div style="margin-top: 1rem;">
                        <span style="background: #3498db; color: white; padding: 0.3rem 1rem; border-radius: 15px; font-size: 0.8rem; text-transform: uppercase;">${property.type}</span>
                    </div>
                </div>
            `;

            card.addEventListener('click', function() {
                showPropertyDetails(property);
            });

            return card;
        }

        // Property filter functionality
        function filterProperties(type) {
            currentFilter = type;

            // Update filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            // Reload properties with filter
            loadProperties();
        }

        // Property details modal (simplified)
        function showPropertyDetails(property) {
            alert(`Property Details:\n\nTitle: ${property.title}\nLocation: ${property.location}\nPrice: ${property.price}\nType: ${property.type}\n\nContact us for more information!`);
        }

        // Mobile menu toggle
        document.getElementById('mobileMenu').addEventListener('click', function() {
            document.getElementById('navMenu').classList.toggle('active');
        });

        // Header background change on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        });

        // Form submission
        document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const formData = new FormData(this);
                    const data = Object.fromEntries(formData);
                    
                    if (!data.name || !data.email) {
                        alert('Please fill in all required fields.');
                        return;
                    }

                    const submitBtn = this.querySelector('.submit-btn');
                    const originalText = submitBtn.textContent;
                    
                    submitBtn.textContent = 'Sending...';
                    submitBtn.style.background = '#95a5a6';
                    submitBtn.disabled = true;

                    setTimeout(() => {
                        submitBtn.textContent = 'Message Sent!';
                        submitBtn.style.background = '#27ae60';
                        this.reset();
                        
                        setTimeout(() => {
                            submitBtn.textContent = originalText;
                            submitBtn.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
                            submitBtn.disabled = false;
                        }, 2000);
                    }, 1500);
                });
            }
        });

        // Stats counter animation
        function animateStats() {
            const stats = document.querySelectorAll('.stat h3');
            stats.forEach(stat => {
                const originalText = stat.textContent;
                const number = parseInt(originalText);
                if (isNaN(number)) return;

                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        clearInterval(timer);
                        stat.textContent = originalText;
                    } else {
                        const suffix = originalText.includes('+') ? '+' : 
                                     originalText.includes('%') ? '%' : 
                                     originalText.includes('M') ? 'M' : '';
                        stat.textContent = Math.floor(current) + suffix;
                    }
                }, 50);
            });
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Load properties on initial load
            loadProperties();
            
            // Trigger stats animation when visible
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateStats();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            const statsElements = document.querySelectorAll('.stats');
            statsElements.forEach(stats => observer.observe(stats));

            // Add page transition effects
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease-in-out';
                document.body.style.opacity = '1';
            }, 100);
        });

        // Advanced interactions
        document.addEventListener('DOMContentLoaded', function() {
            // Property card hover effects
            document.addEventListener('mouseover', function(e) {
                if (e.target.closest('.property-card')) {
                    const card = e.target.closest('.property-card');
                    card.style.transform = 'translateY(-15px) scale(1.02)';
                }
            });

            document.addEventListener('mouseout', function(e) {
                if (e.target.closest('.property-card')) {
                    const card = e.target.closest('.property-card');
                    card.style.transform = 'translateY(0) scale(1)';
                }
            });

            // Service card hover effects
            document.addEventListener('mouseover', function(e) {
                if (e.target.closest('.service-card')) {
                    const card = e.target.closest('.service-card');
                    card.style.transform = 'translateY(-10px) rotateY(3deg)';
                    card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                }
            });

            document.addEventListener('mouseout', function(e) {
                if (e.target.closest('.service-card')) {
                    const card = e.target.closest('.service-card');
                    card.style.transform = 'translateY(0) rotateY(0deg)';
                    card.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                }
            });

            // Parallax effect for hero
            window.addEventListener('scroll', function() {
                const hero = document.querySelector('.hero');
                const heroContent = document.querySelector('.hero-content');
                const scrolled = window.pageYOffset;
                
                if (hero && document.getElementById('home-page').classList.contains('active')) {
                    if (scrolled < hero.offsetHeight) {
                        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                        if (heroContent) {
                            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                        }
                    }
                }
            });
        });

        // Initialize mobile menu
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.style.display = 'none';
            
            function checkMobile() {
                if (window.innerWidth <= 768) {
                    mobileMenu.style.display = 'flex';
                } else {
                    mobileMenu.style.display = 'none';
                    document.getElementById('navMenu').classList.remove('active');
                }
            }
            
            checkMobile();
            window.addEventListener('resize', checkMobile);
        });

        // Smooth page transitions
        function smoothPageTransition(callback) {
            document.body.style.opacity = '0.8';
            setTimeout(() => {
                callback();
                document.body.style.opacity = '1';
            }, 200);
        }

        // Enhanced showPage function with transition
        const originalShowPage = showPage;
        showPage = function(pageName) {
            smoothPageTransition(() => {
                originalShowPage(pageName);
            });
        };

function moveSlide(button, direction) {
  const slider = button.closest(".slider");
  const slides = slider.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  let index = parseInt(slider.getAttribute("data-index")) || 0;

  index += direction;
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;

  slides.style.transform = `translateX(-${index * 100}%)`;
  slider.setAttribute("data-index", index);
}

