// Load CV data dynamically
function loadCVData() {
    // Wait for data.js to be loaded
    if (typeof cvData === 'undefined') {
        console.warn('cvData not found. Retrying...');
        setTimeout(loadCVData, 100);
        return;
    }

    // Update name in headline - separate firstname and lastname
    const headlineFirstname = document.querySelector('.headline-firstname');
    const headlineLastname = document.querySelector('.headline-lastname');
    if (cvData.personal.name) {
        const nameParts = cvData.personal.name.split(' ');
        const firstname = nameParts[0]; // "Tristan"
        const lastname = nameParts.slice(1).join(' '); // "Roman--Gouin"
        
        if (headlineFirstname) {
            headlineFirstname.textContent = firstname;
        }
        if (headlineLastname) {
            headlineLastname.textContent = lastname;
        }
    }

    // Update subheadline
    const subheadline = document.querySelector('.subheadline');
    if (subheadline && cvData.personal.title) {
        subheadline.textContent = `${cvData.personal.title} — Étudiant en 2e année de BUT Informatique`;
    }

    // Update logo text with initials (T-R-G)
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
        logoText.textContent = 'TRG';
    }

    // Update about section
    const aboutText = document.querySelector('.about-text');
    if (aboutText && cvData.about) {
        aboutText.textContent = cvData.about;
    }

    // Update projects section
    const projectsGrid = document.querySelector('#projects-grid');
    if (projectsGrid && cvData.projects) {
        projectsGrid.innerHTML = cvData.projects.map(project => `
            <div class="work-item">
                ${project.image ? `<div class="project-image-container"><img src="${project.image}" alt="${project.title}" class="project-image"></div>` : '<div class="project-image-container" style="display: none;"></div>'}
                <div class="work-item-content">
                    <h3 class="work-title">${project.title}</h3>
                    <p class="work-description">${project.description}</p>
                    ${project.technologies ? `<p class="work-tech"><strong>Technologies :</strong> ${project.technologies.join(', ')}</p>` : ''}
                    ${project.codeUrl ? `<a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" class="btn-code">Voir le code</a>` : ''}
                </div>
            </div>
        `).join('');
    }
    
    // Update skills section
    const skillsGrid = document.querySelector('#skills-grid');
    if (skillsGrid && cvData.skills) {
        skillsGrid.innerHTML = Object.entries(cvData.skills).map(([category, skills]) => `
            <div class="skill-category">
                <h3 class="skill-title">${category}</h3>
                <ul class="skill-list">
                    ${skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }
    
    // Update education section
    const educationGrid = document.querySelector('#education-grid');
    if (educationGrid && cvData.education) {
        educationGrid.innerHTML = cvData.education.map(edu => `
            <div class="education-item">
                <h3 class="education-degree">${edu.degree}</h3>
                <p class="education-school">${edu.school}</p>
                <p class="education-date">${edu.period}</p>
            </div>
        `).join('');
    }


    // Update contact section
    const contactContent = document.querySelector('.contact-content');
    if (contactContent && cvData.personal) {
        let contactHTML = '<div class="contact-info">';
        
        if (cvData.personal.email) {
            contactHTML += `<p class="contact-item"><strong>Email :</strong> <a href="mailto:${cvData.personal.email}" class="contact-link">${cvData.personal.email}</a></p>`;
        }
        
        if (cvData.personal.address) {
            contactHTML += `<p class="contact-item"><strong>Adresse :</strong> ${cvData.personal.address}</p>`;
        }
        
        contactHTML += '</div>';
        
        // Add social links with logos
        let logosHTML = '<div class="contact-links">';
        
        if (cvData.personal.github) {
            logosHTML += `<a href="${cvData.personal.github}" target="_blank" rel="noopener noreferrer" class="contact-logo" title="GitHub"><img src="images/github.png" alt="GitHub" class="logo-icon"></a>`;
        }
        
        if (cvData.personal.email) {
            logosHTML += `<a href="mailto:${cvData.personal.email}" class="contact-logo" title="Gmail"><img src="images/gmail.png" alt="Gmail" class="logo-icon"></a>`;
        }
        
        if (cvData.personal.linkedin) {
            logosHTML += `<a href="${cvData.personal.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-logo" title="LinkedIn"><img src="images/linkedin.png" alt="LinkedIn" class="logo-icon"></a>`;
        }
        
        logosHTML += '</div>';
        
        contactContent.innerHTML = contactHTML + logosHTML;
    }

    // Update footer clients
    const clients = document.querySelector('.clients');
    if (clients && cvData.clients && cvData.clients.length > 0) {
        clients.innerHTML = cvData.clients.map(client => 
            `<span class="client-name">${client.toUpperCase()}</span>`
        ).join('');
    } else if (clients) {
        // Masquer le footer si pas de clients
        clients.parentElement.parentElement.style.display = 'none';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCVData();
    
    // Smooth scroll for navigation links
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

    // Get in touch button scroll to contact
    const btnPrimary = document.querySelector('.btn-primary');
    if (btnPrimary) {
        btnPrimary.addEventListener('click', function() {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Download Resume button
    const btnResume = document.querySelector('.btn-resume');
    if (btnResume) {
        btnResume.addEventListener('click', function() {
            // Chemin vers le CV PDF
            const resumePath = 'Minimalist CV Resume.pdf';
            const link = document.createElement('a');
            link.href = resumePath;
            link.download = 'CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    
    // Load data first, then initialize tabs
    setTimeout(() => {
        // Ensure data is loaded
        if (typeof cvData !== 'undefined') {
            // Update projects, skills, education tabs content
            loadCVData();
        }
        initializeAnimations();
        // Initialize tabs functionality after a small delay to ensure DOM is ready
        initializeTabs();
    }, 150);
});

// Tabs functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length === 0) {
        console.warn('Tab buttons not found');
        return;
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetTab = this.getAttribute('data-tab');
            if (!targetTab) return;
            
            // Remove active class from all buttons and contents
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const targetContent = document.getElementById(`${targetTab}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
            } else {
                console.warn(`Content for tab ${targetTab} not found`);
            }
        });
    });
    
    console.log(`Initialized ${tabButtons.length} tab buttons`);
}

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
    }
    
    lastScroll = currentScroll;
});

// Fade in animation on scroll
function initializeAnimations() {
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

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

