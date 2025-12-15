// Données du CV - Tristan Roman--Gouin
const cvData = {
    personal: {
        name: "Tristan Roman--Gouin",
        title: "Informaticien",
        email: "romangouintristan@gmail.com",
        address: "887 avenue de dunkerque batiment E3 appartement 311",
        phone: "",
        github: "https://github.com/kamikaze230",
        linkedin: "https://www.linkedin.com/in/tristan-roman-gouin-7311a536b/",
        behance: ""
    },
    about: "Étudiant en BUT Informatique, passionné par le développement (Java, Python, SQL), motivé à appliquer mes compétences dans des projets concrets et collaboratifs.",
    
    projects: [
        {
            title: "Mazeio",
            description: "Un projet de construction d'un labyrinthe en Java pour apprendre les principes SOLID et utiliser des patrons de conception.",
            technologies: ["Java", "SOLID", "Patrons de conception", "IHM"],
            languages: ["Java"],
            timeTaken: "2 semaines",
            slug: "mazeio",
            context: "Projet nous demandant de créer un labyrinthe fonctionnel implémentant différentes fonctionnalités demandées. Le projet demandait également d'ajouter des éléments originaux supplémentaires.",
            image: "images/Mazeio.png",
            codeUrl: "https://github.com/kamikaze230/Mazeio"
        },
        {
            title: "Sirtet",
            description: "Un Tetris™ en Java créé en 3 jours utilisant la méthodologie agile.",
            technologies: ["Java", "Agile"],
            languages: ["Java"],
            timeTaken: "3 jours",
            slug: "sirtet",
            context: "Projet créé durant la première semaine de ma deuxième année de BUT. La seule consigne était de créer un jeu en utilisant la méthodologie agile.",
            image: "images/Sirtet.png",
            codeUrl: "https://github.com/kamikaze230/Sirtet"
        },
        {
            title: "Kamibot",
            description: "Projet personnel fait pour comprendre l'utilisation de l'API de Discord tout en gardant une base solide en Python.",
            technologies: ["Python", "Discord API"],
            languages: ["Python"],
            timeTaken: "1 semaine (évolutif)",
            slug: "kamibot",
            context: "Bot Discord développé pour explorer l’API (intents, commandes, événements) et structurer une base Python prête pour des fonctionnalités de modération et d’automatisation. Disclaimer : le code du projet n'a pas pour but d'être utilisé et donc est mal structuré.",
            image: "images/KamiBot.png",
            codeUrl: "https://github.com/kamikaze230/KamiBot"
        },
        {
            title: "Projet d'Échange d'adolescents",
            description: "Projet ayant pour but principal de nous apprendre l'IHM avec du javafx.",
            technologies: ["Java", "IHM"],
            languages: ["Java"],
            timeTaken: "2 semaines",
            slug: "projet-echange-adolescents",
            context: "Projet visant à lier deux étudiants de différentes écoles en fonction de critères tels que l'alimentation, les loisirs, etc. L'objectif est de favoriser les échanges en tenant compte des préférences et habitudes de chacun.",
            image: "images/Gest-ado.png",
            codeUrl: "https://github.com/kamikaze230/gestion-Adolescent"
        },
        {
            title: "SAÉ2.04",
            description: "Projet de base de données réalisé dans le cadre du cursus BUT Informatique, mettant en pratique les concepts de modélisation et de gestion de données.",
            technologies: ["Base de données", "SQL"],
            languages: ["SQL"],
            timeTaken: "3 semaines",
            slug: "sae-2-04",
            context: "Projet consistant à récupérer des données dans une base PostgreSQL et à en faire une analyse. Notre base des donnée se centrait sur les Jeux Olympiques.",
            image: "images/Olympic_flag.png",
            codeUrl: "https://github.com/kamikaze230/SA-2.04"
        },
        {
            title: "Déploiement d’une application",
            description: "Projet en cours",
            technologies: ["Matrix", "Synapse", "Clients web/mobile/desktop"],
            languages: ["N/A"],
            timeTaken: "En cours",
            slug: "deploiement-application",
            context: "Déploiement d’une solution Matrix (Synapse + clients) pour des échanges 1:1, groupe ou forum, synchrones et asynchrones, chiffrés de bout en bout et accessibles web/desktop/mobile."
        }
    ],
    
    skills: {
        "Langages de programmation": [
            "Java",
            "JavaScript",
            "Python",
            "C",
            "SQL",
            "HTML/CSS"
        ],
        "Gestion de projet": [
            "Gestion de projet avec Scrum",
            "Utilisation de Git"
        ],
        "Savoir-être": [
            "Patience",
            "Rigueur"
        ]
    },
    
    education: [
        {
            degree: "2e année de BUT Informatique",
            school: "Université de Lille",
            period: "2024 – Actuellement"
        },
        {
            degree: "Bac Général options mathématiques/NSI",
            school: "Lycée Jean Prouvé",
            period: "2020 – 2023"
        }
    ],
    
    languages: [
        {
            name: "Anglais",
            level: "Niveau B2"
        }
    ],
    
    passions: [
        "Jeux vidéo",
        "Création de contenu",
        "Développement de bot Discord"
    ],
    
    clients: []
};
