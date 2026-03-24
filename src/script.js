function loadCVData() {
    if (typeof cvData === 'undefined') {
        console.warn('cvData introuvable. Nouvelle tentative…');
        setTimeout(loadCVData, 100);
        return;
    }

    const headlineFirstname = document.querySelector('.headline-firstname');
    const headlineLastname = document.querySelector('.headline-lastname');
    if (cvData.personal.name) {
        const nameParts = cvData.personal.name.split(' ');
        const firstname = nameParts[0];
        const lastname = nameParts.slice(1).join(' ');

        if (headlineFirstname) {
            headlineFirstname.textContent = firstname;
        }
        if (headlineLastname) {
            headlineLastname.textContent = lastname;
        }
    }

    const subheadline = document.querySelector('.subheadline');
    if (subheadline && cvData.personal.title) {
        subheadline.textContent = `${cvData.personal.title}, Étudiant en 2e année de BUT Informatique`;
    }

    const logoText = document.querySelector('.logo-text');
    if (logoText) {
        logoText.textContent = 'TRG';
    }

    const aboutText = document.querySelector('.about-text');
    if (aboutText && cvData.about) {
        aboutText.textContent = cvData.about;
    }

    const projectsGrid = document.querySelector('#projects-grid');
    if (projectsGrid && cvData.projects) {
        projectsGrid.innerHTML = cvData.projects.map(project => `
            <div class="work-item">
                ${project.image ? `<div class="project-image-container"><img src="${project.image}" alt="${project.title}" class="project-image"></div>` : '<div class="project-image-container" style="display: none;"></div>'}
                <div class="work-item-content">
                    <h3 class="work-title">${project.title}</h3>
                    <p class="work-description">${project.description}</p>
                    ${project.timeTaken ? `<p class="work-meta"><strong>Durée :</strong> ${project.timeTaken}</p>` : ''}
                    ${project.languages ? `<p class="work-meta"><strong>Langages :</strong> ${Array.isArray(project.languages) ? project.languages.join(', ') : project.languages}</p>` : ''}
                    ${project.technologies ? `<p class="work-tech"><strong>Technologies :</strong> ${project.technologies.join(', ')}</p>` : ''}
                    <div class="work-actions">
                        ${project.slug ? `<a href="project.html?project=${project.slug}" class="btn-code">Voir le projet</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

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

    const contactContent = document.querySelector('.contact-content');
    if (contactContent && cvData.personal) {
        let contactHTML = '<div class="contact-info">';

        if (cvData.personal.email) {
            contactHTML += `<p class="contact-item"><strong>Contactez-moi sur mes réseaux</strong></p>`;
        }

        contactHTML += '</div>';

        let logosHTML = '<div class="contact-links">';

        if (cvData.personal.github) {
            logosHTML += `<a href="${cvData.personal.github}" target="_blank" rel="noopener noreferrer" class="contact-logo" title="GitHub"><img src="public/images/github.png" alt="GitHub" class="logo-icon"></a>`;
        }

        if (cvData.personal.email) {
            logosHTML += `<a href="mailto:${cvData.personal.email}" class="contact-logo" title="Gmail"><img src="public/images/gmail.png" alt="Gmail" class="logo-icon"></a>`;
        }

        if (cvData.personal.linkedin) {
            logosHTML += `<a href="${cvData.personal.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-logo" title="LinkedIn"><img src="public/images/linkedin.png" alt="LinkedIn" class="logo-icon"></a>`;
        }

        logosHTML += '</div>';

        contactContent.innerHTML = contactHTML + logosHTML;
    }

    const clients = document.querySelector('.clients');
    if (clients && cvData.clients && cvData.clients.length > 0) {
        clients.innerHTML = cvData.clients.map(client =>
            `<span class="client-name">${client.toUpperCase()}</span>`
        ).join('');
    } else if (clients) {
        clients.parentElement.parentElement.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadCVData();
    initializeContactMailtoForm();

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

    const btnResume = document.querySelector('.btn-resume');
    if (btnResume) {
        btnResume.addEventListener('click', function() {
            const resumePath = 'public/CV Tristan Roman-Gouin.pdf';
            const link = document.createElement('a');
            link.href = resumePath;
            link.download = 'CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    setTimeout(() => {
        if (typeof cvData !== 'undefined') {
            loadCVData();
            renderProjectDetailPage();
        }
        initializeAnimations();
        initializeTabs();
    }, 150);
});

function initializeContactMailtoForm() {
    const form = document.getElementById('contact-mailto-form');
    if (!form || typeof cvData === 'undefined' || !cvData.personal || !cvData.personal.email) {
        return;
    }

    const recipientEmail = cvData.personal.email;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('contact-name')?.value?.trim() || '';
        const email = document.getElementById('contact-email')?.value?.trim() || '';
        const subject = document.getElementById('contact-subject')?.value?.trim() || '';
        const message = document.getElementById('contact-message')?.value?.trim() || '';

        const finalSubject = subject || 'Prise de contact';
        const body = [
            `Message pour : ${recipientEmail}`,
            '',
            `Nom : ${name}`,
            `Email : ${email}`,
            '',
            message
        ].join('\n');

        const mailtoUrl = `mailto:${recipientEmail}?cc=${encodeURIComponent(email)}&subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    });
}

function renderProjectDetailPage() {
    const detailContainer = document.querySelector('#project-detail');
    if (!detailContainer || typeof cvData === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('project');

    if (!slug) {
        detailContainer.innerHTML = '<p class="work-description">Projet introuvable. Revenez à la liste pour sélectionner un projet.</p>';
        return;
    }

    const project = cvData.projects.find(p => p.slug === slug);
    if (!project) {
        detailContainer.innerHTML = '<p class="work-description">Ce projet n\'existe pas. Revenez à la liste pour sélectionner un projet valide.</p>';
        return;
    }

    const languagesText = project.languages
        ? (Array.isArray(project.languages) ? project.languages.join(', ') : project.languages)
        : 'Non renseigné';
    const technologiesText = project.technologies && project.technologies.length
        ? project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')
        : '<span class="tag tag-muted">Aucune technologie listée</span>';
    const timeTakenText = project.timeTaken || 'Non renseigné';
    const contextText = project.context || 'Non renseigné';

    detailContainer.innerHTML = `
        <div class="project-detail-card">
            ${project.image ? `<div class="project-detail-image"><img src="${project.image}" alt="${project.title}" /></div>` : ''}
            <div class="project-detail-body">
                <h1 class="project-detail-title">${project.title}</h1>
                <p class="project-detail-description">${project.description}</p>
                <div class="project-context">
                    <h3 class="project-subtitle">Contexte</h3>
                    <p>${contextText}</p>
                </div>
                <div class="project-meta">
                    <p class="project-meta-item"><strong>Durée :</strong> ${timeTakenText}</p>
                    <p class="project-meta-item"><strong>Langages :</strong> ${languagesText}</p>
                </div>
                <div class="detail-tags">
                    ${technologiesText}
                </div>
                <div class="project-detail-actions">
                    ${project.codeUrl ? `<a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" class="btn-code">Voir le code</a>` : `<span class="work-meta">Code non disponible</span>`}
                    <a href="index.html#portfolio" class="btn-code">Retour au portfolio</a>
                </div>
            </div>
        </div>
    `;
}

function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');

    if (tabButtons.length === 0) {
        console.warn('Boutons d’onglets introuvables.');
        return;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const targetTab = this.getAttribute('data-tab');
            if (!targetTab) return;

            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            this.classList.add('active');

            const targetContent = document.getElementById(`${targetTab}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
            } else {
                console.warn(`Contenu d’onglet introuvable : ${targetTab}`);
            }
        });
    });
}

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (!header) return;
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
    }
});

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
