var cvData = {
    personal: {
        name: "Tristan Roman--Gouin",
        title: "Développeur",
        email: "romangouintristan@gmail.com",
        address: "887 avenue de dunkerque batiment E3 appartement 311",
        phone: "",
        github: "https://github.com/kamikaze230",
        linkedin: "https://www.linkedin.com/in/tristan-roman-gouin-7311a536b/",
        behance: ""
    },

    presentation: {
        profile: "Étudiant en 2e année de BUT Informatique à l'Université de Lille, je m'oriente vers le développement logiciel (back-end, API, applications web et jeux). J'aime les projets concrets où l'on livre un produit testable et documenté.",
        professionalInterests: [
            "Développement Java / Java EE et API REST",
            "Applications web et jeux (Canvas, TypeScript)",
            "Bases de données et modélisation SQL",
            "Déploiement, documentation technique et travail en équipe agile"
        ],
        orientation: {
            internship: "Recherche d'un stage en développement pour appliquer mes compétences sur des projets réels (API, web, qualité logicielle).",
            studies: "Ouvert à une poursuite d'études (licence pro ou école d'ingénieur) selon les opportunités après le BUT.",
            career: "Métier envisagé : développeur back-end ou full-stack, avec un intérêt pour les projets collaboratifs et la maintenance logicielle."
        }
    },

    projects: [
        {
            title: "Fold'em up",
            slug: "shoot-em-up-ts",
            description: "Shoot'em up multijoueur en TypeScript avec rendu Canvas et communication temps réel.",
            image: "public/images/game_logo.png",
            codeUrl: "https://github.com/kamikaze230/fold-emup",
            timeTaken: "2 mois",
            languages: ["TypeScript"],
            technologies: ["TypeScript", "Canvas", "Socket.io", "Docker"],
            context: "Projet de fin de module visant à produire un jeu multijoueur jouable en réseau, avec une architecture client/serveur et une expérience fluide côté joueur.",
            framework: "SAÉ / projet de module (équipe de 3)",
            teamMode: "Travail en groupe (3 personnes)",
            objectives: [
                "Créer un jeu 2D type shoot'em up jouable en multijoueur",
                "Mettre en place une boucle temps réel (inputs, physique, snapshots)",
                "Déployer une stack complète (client, serveur, base) avec Docker"
            ],
            role: "Développement gameplay côté client, participation à la gestion des rooms Socket.io, tests et intégration continue avec l'équipe.",
            results: [
                "Jeu multijoueur fonctionnel avec salons par code et synchronisation des parties",
                "Pipeline CI/CD et déploiement cloud (Google Cloud Run + MongoDB Atlas)",
                "Documentation d'installation et diagrammes de séquence WebSocket"
            ],
            illustrations: [
                { type: "image", src: "public/images/game_logo.png", label: "Logo du jeu" },
                { type: "link", url: "https://github.com/kamikaze230/fold-emup", label: "Dépôt GitHub" }
            ],
            hardSkills: [
                { name: "Programmation TypeScript", situation: "Implémentation du rendu Canvas, des collisions et de la logique de jeu." },
                { name: "Développement web temps réel", situation: "Utilisation de Socket.io pour synchroniser les joueurs et l'état de la partie." },
                { name: "Outils et déploiement", situation: "Docker Compose, CI/CD et hébergement cloud pour tester le jeu en conditions réelles." }
            ],
            softSkills: [
                { name: "Travail en équipe", situation: "Répartition des rôles (client, serveur, rooms) et revues de code en groupe." },
                { name: "Organisation", situation: "Planification par issues et livraisons incrémentales sur 2 mois." },
                { name: "Résolution de problèmes", situation: "Refonte de la gestion des rooms après migration pour stabiliser les fins de partie." }
            ],
            reflection: {
                learned: "Comment structurer un projet temps réel, optimiser le trafic réseau (inputs uniquement si changement) et industrialiser un déploiement.",
                difficulties: "La gestion des rooms est devenue complexe après la migration ; nous avons simplifié le code socket pour retrouver un flux d'actions cohérent.",
                skillsDeveloped: "TypeScript avancé, architecture client/serveur, DevOps léger (Docker, CI/CD) et communication technique en équipe.",
                wouldDoDifferently: "Concevoir le module « rooms » dès le départ plutôt qu'après la logique de jeu, pour limiter la dette technique."
            }
        },
        {
            title: "Déploiement d'une application (Matrix)",
            slug: "deploiement-application",
            description: "Procédures de déploiement Synapse + Element pour une messagerie Matrix sécurisée.",
            image: "public/images/Element.png",
            codeUrl: "https://github.com/kamikaze230/Proc-dures-de-d-ploiement-Matrix",
            timeTaken: "1 mois",
            languages: ["N/A"],
            technologies: ["Matrix", "Synapse", "PostgreSQL", "nginx", "Element Web"],
            context: "SAÉ S3.03 : répondre à un besoin d'entreprise de communication synchrone/asynchrone, chiffrée E2E, accessible web/desktop/mobile via Matrix.",
            framework: "SAÉ S3.03 - Déploiement",
            teamMode: "Travail en groupe (avec Dimitri Kaimakliotis)",
            objectives: [
                "Déployer Synapse avec PostgreSQL et reverse proxy HTTPS",
                "Rédiger des procédures reproductibles (VM, SSH, firewall, DNS)",
                "Valider l'accès clients (Element Web) et la remise en marche après incident"
            ],
            role: "Rédaction et exécution des procédures (VM, Synapse, nginx), tests de validation et documentation du runbook.",
            results: [
                "Suite de 10 procédures techniques réutilisables",
                "Stack Matrix opérationnelle (1:1, groupe, forum) avec chiffrement E2E",
                "Runbook de diagnostic (services, logs, curl)"
            ],
            illustrations: [
                { type: "image", src: "public/images/Element.png", label: "Client Element Web" },
                { type: "link", url: "https://github.com/kamikaze230/Proc-dures-de-d-ploiement-Matrix", label: "Procédures sur GitHub" }
            ],
            hardSkills: [
                { name: "Déploiement et administration", situation: "Installation Synapse, PostgreSQL, nginx et configuration DNS." },
                { name: "Sécurité réseau", situation: "SSH, firewall, HTTPS et bonnes pratiques de sauvegarde." },
                { name: "Documentation technique", situation: "Procédures pas-à-pas avec validations et dépannage." }
            ],
            softSkills: [
                { name: "Communication", situation: "Documentation claire pour qu'un autre membre puisse reprendre le déploiement." },
                { name: "Adaptabilité", situation: "Ajustement des procédures selon l'architecture centralisée puis séparée (annexe)." }
            ],
            reflection: {
                learned: "Déployer une solution open source complexe et la documenter pour qu'elle soit maintenable par l'équipe.",
                difficulties: "Nombreuses dépendances (réseau, DNS, certificats) ; la checklist de fin de procédure a été essentielle.",
                skillsDeveloped: "Sysadmin de base, Matrix/Synapse et rédaction technique.",
                wouldDoDifferently: "Tester chaque procédure sur une VM vierge avant de valider la suivante."
            }
        },
        {
            title: "Mazeio",
            slug: "mazeio",
            description: "Générateur et explorateur de labyrinthe en Java (SOLID, patrons de conception, IHM).",
            image: "public/images/Mazeio.png",
            codeUrl: "https://github.com/kamikaze230/Mazeio",
            timeTaken: "1 mois et demi",
            languages: ["Java"],
            technologies: ["Java", "SOLID", "Patrons de conception", "IHM"],
            context: "Projet académique demandant un labyrinthe fonctionnel avec fonctionnalités imposées et une part d'originalité.",
            framework: "Projet de cours - POO / conception",
            teamMode: "Travail en groupe",
            objectives: [
                "Implémenter un labyrinthe jouable avec exigences imposées",
                "Appliquer SOLID et des patrons de conception",
                "Ajouter des fonctionnalités originales via une IHM Java"
            ],
            role: "Conception des modules, implémentation de parties du labyrinthe et de l'interface graphique.",
            results: [
                "Application Java livrée avec parcours de labyrinthe fonctionnel",
                "Architecture découpée (génération, règles, affichage)",
                "Éléments originaux intégrés au cahier des charges"
            ],
            illustrations: [
                { type: "image", src: "public/images/Mazeio.png", label: "Capture du projet" },
                { type: "link", url: "https://github.com/kamikaze230/Mazeio", label: "Code source" }
            ],
            hardSkills: [
                { name: "Programmation Java", situation: "Modularisation du code et IHM." },
                { name: "Patrons de conception", situation: "Application de patrons pour séparer génération, logique et vue." }
            ],
            softSkills: [
                { name: "Travail en équipe", situation: "Répartition des packages et intégration continue du code." },
                { name: "Rigueur", situation: "Respect des principes SOLID demandés à l'évaluation." }
            ],
            reflection: {
                learned: "Structurer un projet Java autour de la conception plutôt que du « tout dans le main ».",
                difficulties: "Faire coexister exigences imposées et créativité sans casser l'architecture.",
                skillsDeveloped: "POO avancée, patrons et travail en équipe sur un dépôt partagé.",
                wouldDoDifferently: "Poser l'architecture par interfaces dès la première semaine."
            }
        },
        {
            title: "Ecodrop",
            slug: "ecodrop",
            description: "API REST Java EE pour la gestion de déchets, points de collecte et dépôts utilisateurs.",
            codeUrl: "https://github.com/kamikaze230/EcoDrop",
            timeTaken: "2 mois",
            languages: ["Java"],
            technologies: ["Java EE", "API REST", "PostgreSQL", "Docker"],
            context: "SAÉ REST : concevoir une API complète autour d'un service de collecte de déchets (EcoDrop), avec règles métier, sécurisation et tests.",
            framework: "SAÉ S4 - API REST",
            teamMode: "Travail en groupe",
            objectives: [
                "Modéliser et exposer une API REST (CRUD, statuts, statistiques)",
                "Appliquer les règles métier (poids, saturation, types de déchets)",
                "Sécuriser l'API (tokens, rôles USER/ADMIN)"
            ],
            role: "Développement des endpoints, DAO JDBC, logique métier des dépôts et participation aux tests Bruno.",
            results: [
                "API REST documentée avec plus de 30 scénarios de tests",
                "Gestion des rôles et authentification par token",
                "Déploiement reproductible via Docker sur Windows et Debian"
            ],
            illustrations: [
                { type: "link", url: "https://github.com/kamikaze230/EcoDrop", label: "Dépôt GitHub et documentation API" }
            ],
            hardSkills: [
                { name: "Développement Java EE", situation: "Servlet principal, routage HTTP et couches DAO/DTO." },
                { name: "API REST", situation: "Conception des ressources, codes HTTP et formats JSON/XML." },
                { name: "Bases de données", situation: "Schéma PostgreSQL, requêtes et contraintes métier." }
            ],
            softSkills: [
                { name: "Rigueur", situation: "Respect des spécifications REST et couverture des cas d'erreur." },
                { name: "Autonomie", situation: "Prise en main de Docker et compilation Tomcat pour livrer un environnement testable." }
            ],
            reflection: {
                learned: "Cycle complet d'une API professionnelle : modèle de données, sécurité, tests et déploiement.",
                difficulties: "Coordination des règles métier (saturation, types refusés) avec une base déjà peuplée pour les tests.",
                skillsDeveloped: "Java EE, REST, PostgreSQL et culture de tests API (collection Bruno).",
                wouldDoDifferently: "Automatiser plus tôt les tests d'intégration dans la CI pour détecter les régressions métier."
            }
        },
        {
            title: "Sirtet",
            slug: "sirtet",
            description: "Tetris en Java réalisé en 3 jours en méthodologie agile.",
            image: "public/images/Sirtet.png",
            codeUrl: "https://github.com/kamikaze230/Sirtet",
            timeTaken: "3 jours",
            languages: ["Java"],
            technologies: ["Java", "Agile"],
            context: "Première semaine de la 2e année : livrer un jeu en Java avec la méthodologie agile.",
            framework: "Projet court - agile",
            teamMode: "Travail en groupe",
            objectives: ["Produire un Tetris jouable en 3 jours", "Appliquer Scrum (sprints courts, priorisation)"],
            role: "Développement de la logique de jeu et participation aux daily/sprint reviews.",
            results: ["Jeu Tetris fonctionnel livré dans les délais", "Backlog priorisé (MVP puis améliorations)"],
            illustrations: [
                { type: "image", src: "public/images/Sirtet.png", label: "Capture Sirtet" },
                { type: "link", url: "https://github.com/kamikaze230/Sirtet", label: "GitHub" }
            ],
            hardSkills: [
                { name: "Java", situation: "Boucle de jeu, grille et gestion des pièces." },
                { name: "Méthodologie agile", situation: "Itérations de 1 jour avec objectifs clairs." }
            ],
            softSkills: [
                { name: "Gestion du temps", situation: "Livraison en 3 jours avec périmètre réduit au MVP." },
                { name: "Communication", situation: "Synchronisation rapide en équipe sur les priorités." }
            ],
            reflection: {
                learned: "Découper un jeu en user stories et livrer un noyau jouable vite.",
                difficulties: "Temps très court : il a fallu couper des fonctionnalités non essentielles.",
                skillsDeveloped: "Agile appliqué sous pression et développement Java orienté MVP.",
                wouldDoDifferently: "Préparer un squelette de projet la veille pour gagner du temps le jour J."
            }
        },
        {
            title: "Projet d'Échange d'adolescents",
            slug: "projet-echange-adolescents",
            description: "Application JavaFX pour apparier des élèves selon leurs critères.",
            image: "public/images/Gest-ado.png",
            codeUrl: "https://github.com/kamikaze230/gestion-Adolescent",
            timeTaken: "1 mois",
            languages: ["Java"],
            technologies: ["Java", "JavaFX", "IHM"],
            context: "Projet visant à mettre en relation des élèves de différentes écoles selon alimentation, loisirs et habitudes.",
            framework: "Projet de cours - IHM",
            teamMode: "Travail en groupe",
            objectives: ["Apprendre JavaFX", "Implémenter un algorithme d'appariement", "Proposer une IHM claire"],
            role: "Développement de l'interface et de la logique d'appariement.",
            results: ["Application capable de proposer des binômes cohérents", "IHM JavaFX fonctionnelle"],
            illustrations: [
                { type: "image", src: "public/images/Gest-ado.png", label: "Interface" },
                { type: "link", url: "https://github.com/kamikaze230/gestion-Adolescent", label: "Code" }
            ],
            hardSkills: [
                { name: "IHM JavaFX", situation: "Écrans, événements et liaison avec le modèle." },
                { name: "Algorithmie", situation: "Critères de matching entre profils élèves." }
            ],
            softSkills: [
                { name: "Écoute des besoins", situation: "Traduction du sujet métier en critères techniques." }
            ],
            reflection: {
                learned: "Lier interface graphique et règles métier dans un projet Java desktop.",
                difficulties: "Gérer la complexité des critères sans surcharger l'interface.",
                skillsDeveloped: "JavaFX et modélisation de données utilisateurs.",
                wouldDoDifferently: "Prototyper l'IHM en papier avant de coder les écrans."
            }
        },
        {
            title: "BDD Jeux Olympiques",
            slug: "sae-2-04",
            description: "Modélisation, requêtes et analyse de données JO sur PostgreSQL.",
            image: "public/images/Olympic_flag.png",
            codeUrl: "https://github.com/kamikaze230/SA-2.04",
            timeTaken: "3 semaines",
            languages: ["SQL"],
            technologies: ["PostgreSQL", "SQL", "Modélisation"],
            context: "SAÉ 2.04 : construire une base sur les Jeux Olympiques, interroger et analyser les données.",
            framework: "SAÉ 2.04",
            teamMode: "Travail en groupe",
            objectives: ["Modéliser le schéma relationnel", "Peupler et interroger PostgreSQL", "Produire une analyse métier"],
            role: "Modélisation, requêtes SQL et rédaction de l'analyse.",
            results: ["Base PostgreSQL opérationnelle", "Requêtes d'analyse sur les JO", "Livrable documenté"],
            illustrations: [
                { type: "image", src: "public/images/Olympic_flag.png", label: "Thème Jeux Olympiques" },
                { type: "link", url: "https://github.com/kamikaze230/SA-2.04", label: "Dépôt" }
            ],
            hardSkills: [
                { name: "Bases de données", situation: "Schéma, clés, requêtes complexes et agrégations." },
                { name: "SQL / PostgreSQL", situation: "Extraction et analyse de jeux de données réels." }
            ],
            softSkills: [
                { name: "Esprit de synthèse", situation: "Transformer des données brutes en conclusions lisibles." }
            ],
            reflection: {
                learned: "Passer de la modélisation à l'analyse via SQL.",
                difficulties: "Normalisation du schéma sans perdre la lisibilité des requêtes.",
                skillsDeveloped: "PostgreSQL et culture données.",
                wouldDoDifferently: "Valider le MCD avec des cas de requêtes types avant l'implémentation."
            }
        },
        {
            title: "Kamibot",
            slug: "kamibot",
            description: "Bot Discord en Python pour découvrir l'API (commandes, événements).",
            image: "public/images/KamiBot.png",
            codeUrl: "https://github.com/kamikaze230/KamiBot",
            timeTaken: "~2 semaines",
            languages: ["Python"],
            technologies: ["Python", "Discord API"],
            context: "Projet personnel pour comprendre l'API Discord et automatiser des actions simples.",
            framework: "Projet personnel",
            teamMode: "Individuel",
            objectives: ["Créer un bot réactif aux commandes", "Explorer intents, modération basique"],
            role: "Développeur unique - conception et code Python.",
            results: ["Bot fonctionnel sur un serveur de test", "Base de commandes et gestion d'événements"],
            illustrations: [
                { type: "image", src: "public/images/KamiBot.png", label: "Projet Kamibot" },
                { type: "link", url: "https://github.com/kamikaze230/KamiBot", label: "GitHub" }
            ],
            hardSkills: [
                { name: "Python", situation: "Structure du bot et appels API." },
                { name: "API Discord", situation: "Intents, commandes slash ou texte, événements." }
            ],
            softSkills: [
                { name: "Autonomie", situation: "Projet mené seul, hors cadre cours." },
                { name: "Curiosité", situation: "Expérimentation libre sans note imposée." }
            ],
            reflection: {
                learned: "Bases d'une API tierce et cycle dev/test sur un bot live.",
                difficulties: "Code exploratoire peu structuré (projet d'apprentissage).",
                skillsDeveloped: "Python et intégration API.",
                wouldDoDifferently: "Refactoriser en modules dès le début si le bot devait être maintenu."
            }
        }
    ],

    skills: {
        "Compétence Technique": [
            "Java / Java EE / API REST",
            "TypeScript / Canvas / Web temps réel",
            "SQL / PostgreSQL",
            "Python",
            "Git / Docker / CI-CD"
        ],
        "Soft Skills": [
            "Travail en équipe",
            "Communication technique",
            "Autonomie",
            "Gestion du temps",
            "Rigueur et documentation"
        ]
    },

    education: [
        {
            degree: "2e année de BUT Informatique",
            school: "Université de Lille",
            period: "2024 - Actuellement"
        },
        {
            degree: "Bac Général options mathématiques/NSI",
            school: "Lycée Jean Prouvé",
            period: "2020 - 2023"
        }
    ],

    languages: [
        { name: "Anglais", level: "Niveau B2" }
    ],

    passions: [
        "Jeux vidéo",
        "Création de contenu",
        "Développement de bot Discord"
    ],

    clients: []
};

if (typeof window !== 'undefined') {
    window.cvData = cvData;
}
