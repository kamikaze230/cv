function renderList(items, className = 'detail-list') {
    if (!items || !items.length) return '<p class="work-meta">Non renseigné</p>';
    return `<ul class="${className}">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function renderIllustrations(items) {
    if (!items || !items.length) return '<p class="work-meta">Aucune illustration</p>';
    return `<div class="illustrations-row">
        ${items.map(item => {
            if (item.type === 'image' && item.src) {
                return `<figure class="illustration-thumb">
                    <img src="${item.src}" alt="${item.label || ''}" />
                    ${item.label ? `<figcaption>${item.label}</figcaption>` : ''}
                </figure>`;
            }
            if (item.type === 'link' && item.url) {
                return `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-code">${item.label || 'Voir le lien'}</a>`;
            }
            return '';
        }).join('')}
    </div>`;
}

function renderSkillsGrid(skills, groupTitle) {
    if (!skills || !skills.length) return '';
    return `
        <p class="skills-group-title">${groupTitle}</p>
        ${skills.map(s => `
            <div class="skill-card">
                <p class="skill-card-title">${s.name}</p>
                <p class="skill-card-text">${s.situation}</p>
            </div>
        `).join('')}
    `;
}

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

    const presentationContent = document.querySelector('#presentation-content');
    if (presentationContent && cvData.presentation) {
        const pres = cvData.presentation;
        const interestsHtml = (pres.professionalInterests || []).length
            ? renderList(pres.professionalInterests, 'presentation-highlights')
            : '';
        const orient = pres.orientation || {};

        presentationContent.innerHTML = `
            <div class="presentation-card">
                <h3 class="presentation-subtitle">Profil</h3>
                <p class="presentation-text">${pres.profile || ''}</p>
                <h3 class="presentation-subtitle">Centres d'intérêt professionnels</h3>
                ${interestsHtml}
                <h3 class="presentation-subtitle">Orientation</h3>
                <div class="orientation-grid">
                    ${orient.internship ? `<p class="presentation-text"><strong>Stage :</strong> ${orient.internship}</p>` : ''}
                    ${orient.studies ? `<p class="presentation-text"><strong>Poursuite d'études :</strong> ${orient.studies}</p>` : ''}
                    ${orient.career ? `<p class="presentation-text"><strong>Métier envisagé :</strong> ${orient.career}</p>` : ''}
                </div>
            </div>
        `;
    }

    const projectsGrid = document.querySelector('#projects-grid');
    if (projectsGrid && cvData.projects) {
        projectsGrid.innerHTML = cvData.projects.map(project => `
            <div class="work-item">
                ${project.image ? `<div class="project-image-container"><img src="${project.image}" alt="${project.title}" class="project-image"></div>` : '<div class="project-image-container" style="display: none;"></div>'}
                <div class="work-item-content">
                    <h3 class="work-title">${project.title}</h3>
                    <p class="work-description">${project.description}</p>
                    ${project.framework ? `<p class="work-meta"><strong>Cadre :</strong> ${project.framework}</p>` : ''}
                    ${project.teamMode ? `<p class="work-meta"><strong>Modalité :</strong> ${project.teamMode}</p>` : ''}
                    ${project.role ? `<p class="work-meta"><strong>Mon rôle :</strong> ${project.role}</p>` : ''}
                    ${project.timeTaken ? `<p class="work-meta"><strong>Durée :</strong> ${project.timeTaken}</p>` : ''}
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
        detailContainer.innerHTML = '<p class="project-empty">Projet introuvable. <a href="index.html#portfolio">Retour au portfolio</a></p>';
        return;
    }

    const project = cvData.projects.find(p => p.slug === slug);
    if (!project) {
        detailContainer.innerHTML = '<p class="project-empty">Ce projet n\'existe pas. <a href="index.html#portfolio">Retour au portfolio</a></p>';
        return;
    }

    document.title = `${project.title} - Tristan Roman-Gouin`;

    const tagsHtml = (project.technologies || [])
        .map(tech => `<span class="project-tag">${tech}</span>`)
        .join('');
    const reflection = project.reflection || {};

    detailContainer.innerHTML = `
        <div class="project-page">
            <a href="index.html#portfolio" class="project-back">← Retour au portfolio</a>

            <header class="project-hero">
                <div class="project-hero-media">
                    ${project.image
                        ? `<img src="${project.image}" alt="${project.title}" />`
                        : '<div class="project-hero-placeholder"></div>'}
                </div>
                <div class="project-hero-content">
                    ${project.framework ? `<span class="project-framework-badge">${project.framework}</span>` : ''}
                    <h1 class="project-hero-title">${project.title}</h1>
                    <p class="project-hero-lead">${project.description}</p>
                    <div class="project-meta-pills">
                        ${project.teamMode ? `<span class="meta-pill"><strong>Modalité</strong> ${project.teamMode}</span>` : ''}
                        ${project.timeTaken ? `<span class="meta-pill"><strong>Durée</strong> ${project.timeTaken}</span>` : ''}
                    </div>
                    ${tagsHtml ? `<div class="project-tags">${tagsHtml}</div>` : ''}
                    <div class="project-hero-actions">
                        ${project.codeUrl ? `<a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" class="btn-code">Voir le code</a>` : ''}
                    </div>
                </div>
            </header>

            <div class="project-sections">
                <section class="project-panel">
                    <div class="project-panel-header">
                        <span class="panel-number">01</span>
                        <h2 class="project-panel-title">Présentation du projet</h2>
                    </div>
                    <div class="project-panel-body">
                        <div class="project-field">
                            <h3>Contexte</h3>
                            <p>${project.context || 'Non renseigné'}</p>
                        </div>
                        <div class="project-field-grid">
                            <div class="project-field">
                                <h3>Objectifs</h3>
                                ${renderList(project.objectives, 'project-list')}
                            </div>
                            <div class="project-field">
                                <h3>Résultats obtenus</h3>
                                ${renderList(project.results, 'project-list')}
                            </div>
                        </div>
                        <div class="project-field">
                            <h3>Mon rôle</h3>
                            <p>${project.role || 'Non renseigné'}</p>
                        </div>
                        <div class="project-field">
                            <h3>Illustrations</h3>
                            ${renderIllustrations(project.illustrations)}
                        </div>
                    </div>
                </section>

                <section class="project-panel">
                    <div class="project-panel-header">
                        <span class="panel-number">02</span>
                        <h2 class="project-panel-title">Compétences mises en avant</h2>
                    </div>
                    <div class="project-panel-body">
                        <div class="skills-grid-page">
                            ${renderSkillsGrid(project.hardSkills, 'Compétences techniques')}
                            ${renderSkillsGrid(project.softSkills, 'Compétences transversales')}
                        </div>
                    </div>
                </section>

                <section class="project-panel">
                    <div class="project-panel-header">
                        <span class="panel-number">03</span>
                        <h2 class="project-panel-title">Analyse réflexive</h2>
                    </div>
                    <div class="project-panel-body">
                        <div class="reflection-grid">
                            <div class="reflection-card">
                                <h3>Ce que j'ai appris</h3>
                                <p>${reflection.learned || 'Non renseigné'}</p>
                            </div>
                            <div class="reflection-card">
                                <h3>Difficultés & solutions</h3>
                                <p>${reflection.difficulties || 'Non renseigné'}</p>
                            </div>
                            <div class="reflection-card">
                                <h3>Compétences développées</h3>
                                <p>${reflection.skillsDeveloped || 'Non renseigné'}</p>
                            </div>
                            <div class="reflection-card">
                                <h3>À faire différemment</h3>
                                <p>${reflection.wouldDoDifferently || 'Non renseigné'}</p>
                            </div>
                        </div>
                    </div>
                </section>
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
