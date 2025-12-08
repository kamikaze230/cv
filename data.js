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
            image: "images/Mazeio.png",
            codeUrl: "https://github.com/kamikaze230/Mazeio"
        },
        {
            title: "Sirtet",
            description: "Un Tetris™ en Java créé en 3 jours utilisant la méthodologie agile.",
            technologies: ["Java", "Agile"],
            image: "images/Sirtet.png",
            codeUrl: "https://github.com/kamikaze230/Sirtet"
        },
        {
            title: "Kamibot",
            description: "Projet personnel fait pour comprendre l'utilisation de l'API de Discord tout en gardant une base solide en Python.",
            technologies: ["Python", "Discord API"],
            image: "images/KamiBot.png",
            codeUrl: "https://github.com/kamikaze230/KamiBot"
        },
        {
            title: "Projet d'Échange d'adolescents",
            description: "Projet visant à lier deux étudiants de différentes écoles en fonction de critères tels que l'alimentation, les loisirs, etc. L'objectif est de favoriser les échanges en tenant compte des préférences et habitudes de chacun.",
            technologies: ["Java", "IHM"],
            image: "images/Gest-ado.png",
            codeUrl: "https://github.com/kamikaze230/gestion-Adolescent"
        },
        {
            title: "SAÉ2.04",
            description: "Projet de base de données réalisé dans le cadre du cursus BUT Informatique, mettant en pratique les concepts de modélisation et de gestion de données.",
            technologies: ["Base de données", "SQL"],
            image: "images/Olympic_flag.png",
            codeUrl: "https://github.com/kamikaze230/SA-2.04"
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
