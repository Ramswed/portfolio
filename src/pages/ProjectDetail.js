import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import asciiartImage from "../assets/images/asciiart/asciiart.png";
import ascii1Image from "../assets/images/asciiart/ascii1.png";
import ascii2Image from "../assets/images/asciiart/ascii2.png";
import groupieImage from "../assets/images/groupietracker/groupie .png";
import groupie1Image from "../assets/images/groupietracker/groupie1.png";
import groupie2Image from "../assets/images/groupietracker/groupie2.png";
import groupie3Image from "../assets/images/groupietracker/groupie3.png";
import groupie4Image from "../assets/images/groupietracker/groupie4.png";
import pocketmeImage from "../assets/images/pocket.png";
import flintImage from "../assets/images/flint.png";
import cuistotImage from "../assets/images/cuistot.png";
import forumImage from "../assets/images/forum/forum.png";
import forum1Image from "../assets/images/forum/forum1.png";
import forum2Image from "../assets/images/forum/forum2.png";
import forum3Image from "../assets/images/forum/forum3.png";
import apercuGif from "../assets/images/forum/aperçu.gif";
import photoboothImage from "../assets/images/photobooth.png";
import musebarImage from "../assets/images/musebar.png";
import musebar1Image from "../assets/images/musebar/1haut de page.png";
import musebar2Image from "../assets/images/musebar/2carte.png";
import musebar3Image from "../assets/images/musebar/3notre histoire.png";
import musebar4Image from "../assets/images/musebar/4privatiser.png";
import dreamImage from "../assets/images/dream.png";
import snsmImage from "../assets/images/snsm/snsm.png";
import snsm1Image from "../assets/images/snsm/snsm00001.png";
import snsm2Image from "../assets/images/snsm/snsm00002.png";
import snsm3Image from "../assets/images/snsm/snsm00003.png";
import vestiaImage from "../assets/images/vestia.png";

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projects = [
    {
      id: 1,
      title: "Ascii Convertisseur",
      category: "Site Web, illustration",
      hasImage: true,
      image: asciiartImage,
      additionalImages: [ascii1Image, ascii2Image],
      year: "2025",
      discipline: "Site Web, illustration",
      sector: "Éducation / Outils",
      description:
        "PROJET D'ÉCOLE - Mon tout premier projet web, un serveur de conversion ASCII art",
      longDescription:
        "Mon tout premier projet en programmation web : un serveur HTTP en Go qui convertit du texte en art ASCII. Au-delà des consignes scolaires, j'ai voulu transformer cet outil simple (et franchement inutile aujourd'hui) en quelque chose de plus personnel. J'ai ajouté un thème street-art humoristique et créé des illustrations numériques 2D sur Procreate pour donner une identité visuelle unique au projet.",
      features: [
        "Conversion texte vers ASCII art avec 3 polices (standard, shadow, thinkertoy)",
        "Export des résultats en TXT et HTML",
        "Copie dans le presse-papiers",
        "Gestion complète des codes de statut HTTP (200, 400, 404, 500)",
      ],
      technologies: ["Go", "HTML Templates", "HTTP Server", "Procreate", "CSS"],
      collaborators: [{ name: "Konixy", github: "https://github.com/Konixy" }],
      github: "https://github.com/Ramswed/convertisseurAscii",
      concept:
        "Transformer un projet scolaire basique en quelque chose de personnel et amusant. Alors que les consignes demandaient un convertisseur ASCII fonctionnel, j'ai voulu aller plus loin en créant une expérience visuelle unique avec un thème street-art/humoristique (j'adore ''Lascars'' de Eldiablo, vous connaissez ?) et des illustrations originales. Parce qu'un outil inutile peut quand même être fun à utiliser.",
      process:
        "Développement du serveur HTTP en Go avec uniquement les packages standards, implémentation de l'algorithme de conversion ASCII caractère par caractère, création des templates HTML et du formulaire POST. Pour le côté créatif : conception du thème street-art, création d'illustrations numériques 2D sur Procreate, ajout des fonctionnalités d'export (TXT, HTML) et de copie. Respect strict des consignes (codes HTTP, structure, bonnes pratiques) tout en ajoutant ma touche personnelle.",
      results:
        "Mon premier projet web. Un serveur complet avec gestion d'erreurs appropriée, une interface visuelle unique avec illustrations originales, et surtout une expérience qui montre qu'on peut s'amuser même avec un projet simple. Le projet m'a permis de découvrir le développement web.",
    },
    {
      id: 2,
      title: "Groupie Tracker",
      category: "Ui/ux, Site Web",
      hasImage: true,
      image: groupieImage,
      additionalImages: [
        groupie1Image,
        groupie2Image,
        groupie3Image,
        groupie4Image,
      ],
      year: "2025",
      discipline: "Ui/ux, Site Web",
      sector: "Musique / Social",
      description:
        "PROJET D'ÉCOLE - Application web moderne pour explorer et suivre des artistes de musique et leurs concerts",
      longDescription:
        "Projet de cours : application web complète pour explorer des artistes de musique et localiser leurs concerts. Architecture backend Go et frontend Svelte avec une volonté forte de créer quelque chose de moderne. Ce projet m'a fait découvrir l'importance de l'expérience utilisateur et m'a initiée au travail collaboratif via Git (branches, merges, workflow d'équipe).",
      features: [
        "Carousel d'artistes avec recherche avancée",
        "Carte interactive des concerts avec géolocalisation",
        "Interface scroll-snap avec 3 sections",
        "Cache intelligent pour optimiser les requêtes",
      ],
      technologies: ["Go", "Svelte", "TypeScript", "Vite", "Docker Compose"],
      collaborators: [{ name: "Konixy", github: "https://github.com/Konixy" }],
      github: "https://github.com/Ramswed/groupieTracker",
      website: "https://groupie-tracker.konixy.fr/",
      concept:
        "Créer une expérience utilisateur moderne et immersive pour découvrir des artistes et localiser leurs concerts. Au-delà des consignes techniques, j'ai voulu comprendre ce qui rend une interface agréable à utiliser. Ce projet a été ma première vraie prise de conscience de l'importance de l'UX dans le développement web.",
      process:
        "Développement de l'API REST en Go avec cache de coordonnées géographiques, création de l'interface Svelte avec typographies personnalisées et animations fluides. Apprentissage du travail collaboratif : gestion des branches Git, merges, résolution de conflits, et organisation du workflow en équipe. Découverte de l'importance de penser l'expérience utilisateur dès la conception.",
      results:
        "Une application complète et déployée, accessible en ligne. L'interface scroll-snap offre une navigation fluide entre les sections, la carte interactive permet de visualiser facilement les concerts, et le cache optimise les performances. Le projet est en ligne et fonctionnel.",
    },
    {
      id: 3,
      title: "Pocket-me",
      category: "Application mobile",
      hasImage: true,
      image: pocketmeImage,
      year: "2025",
      discipline: "Application mobile",
      sector: "Mobile / Utilitaires",
      description: "!!!⚙️!!! En cours de développement",
      longDescription: "...",
      features: ["...", "...", "...", "..."],
      technologies: ["...", "...", "...", "..."],
      concept: "...",
      process: "...",
      results: "...",
    },
    {
      id: 4,
      title: "Capitaine Flint",
      category: "Robotique, Arduino",
      hasImage: true,
      image: flintImage,
      year: "2025 - 20??",
      discipline: "Robotique, Arduino",
      sector: "Robotique / Psychologie",
      description:
        "!!!⚙️!!! Perroquet robot articulé. En cours de développement (là je cherche à imprimer le squelette, donc projet en pause (ça coûte un peu bcp cher))",
      longDescription:
        "Projet de perroquet robot très articulé où chaque os peut bouger grâce à des articulations rotoïdes sphériques. L'objectif est de créer des mouvements réalistes et fluides pour un robot perroquet interactif.",
      features: [
        "Articulations rotoïdes sphériques",
        "Programmation des mouvements fluides",
        "Intégration des servomoteurs",
        "Développement du système de contrôle",
      ],
      technologies: [
        "Arduino",
        "C++",
        "Électronique",
        "Mécanique",
        "Servomoteurs",
      ],
      concept:
        "Créer un perroquet robot articulé (et interactif par la suite) avec des mouvements réalistes et fluides grâce à des articulations rotoïdes sphériques pour chaque os.\n Au delà du coté technique, j'essaie d'approfondir ma connaissance sur la théorie de la vallée de l'étrange (ou uncanny valley). \n Si vous voulez plus de détails vous pouvez consulter la documentation liée, sinon j'ai mis un graphique qui résume la théorie juste en dessous.",
      process:
        "Conception mécanique des articulations, programmation des mouvements fluides, intégration des servomoteurs, développement du système de contrôle.",
      results: "...",
    },
    {
      id: 5,
      title: "Cuistots Sauvages",
      category: "Identité de marque, illustration",
      hasImage: true,
      image: cuistotImage,
      year: "2023 - 2024",
      discipline: "...",
      sector: "Culinaire / Événementiel",
      description: "!!!⚙️!!! En cours de développement",
      longDescription: "...",
      features: ["...", "...", "...", "..."],
      technologies: ["...", "...", "...", "..."],
      concept: "...",
      process: "...",
      results: "...",
    },
    {
      id: 6,
      title: "Forum",
      category: "Site Web, communauté",
      hasImage: true,
      image: forumImage,
      year: "2025",
      discipline: "Site Web, communauté",
      sector: "Communauté / Nostalgie",
      description: "PROJET D'ÉCOLE - Forum pour les fans de Windows 95",
      additionalImages: [forum1Image, forum2Image, forum3Image, apercuGif],
      longDescription:
        "Forum web communautaire dédié à la passion pour Windows 95. Les utilisateurs peuvent s'inscrire, créer des posts et commentaires, liker/disliker les contenus, et filtrer par catégories. Interface nostalgique avec l'esthétique Windows 95 pour une expérience immersive.",
      features: [
        "Système d'authentification avec cookies",
        "Posts et commentaires avec catégories",
        "Système de likes/dislikes",
        "Filtrage par catégories et posts likés",
      ],
      technologies: [
        "Go",
        "SQLite3",
        "HTML/CSS/JavaScript",
        "Docker",
        "nginx",
        "bcrypt/UUID",
      ],
      collaborators: [
        { name: "Konixy", github: "https://github.com/Konixy" },
        { name: "VergneElliot", github: "https://github.com/VergneElliot" },
      ],
      github: "https://github.com/Ramswed/windows95fanatiksForum",
      concept:
        "Le but de ce projet était de créer un forum tout simplement. Les consignes de l'école m'ont laissé la liberté d'en faire un projet fun!! C'est un peu une caricature des anciens forums ''niches'' qui existent sur le web.",
      process:
        "Développement backend en Go avec SQLite3. Ma mission était de reproduire à l'identique l'interface de Windows 95. Ensuite, on a implémenté le système d'authentification et les fonctionnalités communautaires, puis conteneurisé avec Docker.",
      results:
        "Forum fonctionnel avec l'interface EMBLÉMATIQUE de Windows 95, système d'authentification sécurisé, et communauté (factice malheureusement) active de passionnés.",
    },
    {
      id: 7,
      title: "Photobooth",
      category: "Site web, illustration",
      hasImage: true,
      image: photoboothImage,
      year: "20??",
      discipline: "...",
      sector: "...",
      description: "!!!⚙️!!! En cours de développement.",
      longDescription: "...",
      features: ["...", "...", "...", "..."],
      technologies: ["...", "...", "...", "..."],
      concept: "...",
      process: "...",
      results: "...",
    },
    {
      id: 8,
      title: "Muse Bar",
      category: "Site Vitrine, ui/ux",
      hasImage: true,
      image: musebarImage,
      additionalImages: [
        musebar1Image,
        musebar2Image,
        musebar3Image,
        musebar4Image,
      ],
      year: "2025",
      discipline: "Site Vitrine, ui/ux",
      sector: "Service & Restauration",
      description: "Site web vitrine pour le Muse Bar, un bar Rouennais",
      longDescription:
        "Site web vitrine moderne pour le Muse Bar, un bar simple et sympa avec une touche soignée, situé dans le centre historique de Rouen. Le site reflète l'identité du bar : « Pas de concept », juste un bar classique où tout est pensé avec soin. Design moderne où les couleurs du logo ressortent avec certains éléments du logo intégrés. Interface qui permet de découvrir l'histoire du bar, la carte (bières normandes, cocktails classiques et création, vin, softs maison), le processus de privatisation de la cave, les horaires, la localisation, les avis et les coordonnées.",
      features: [
        "Découvrir l'histoire du bar",
        "Voir la carte complète",
        "Connaître le processus de privatisation de la cave",
        "Localiser le bar sur une carte interactive",
      ],
      technologies: [
        "HTML5",
        "CSS3 (Variables CSS, Animations @keyframes, Media queries, Flexbox/Grid)",
        "JavaScript ES6+ (Vanilla)",
        "Architecture modulaire (fragments HTML via fetch)",
      ],
      github: "https://github.com/Ramswed/MuseBar",
      website: "https://musebar.fr/",
      concept:
        "Créer un site web vitrine qui capture l'esprit authentique du Muse Bar : un bar simple et sympa avec une touche soignée. Le design moderne met en valeur les couleurs et éléments du logo, reflétant l'identité du bar où « le concept c'est : pas de concept ». Une expérience digitale qui guide les visiteurs pour découvrir l'histoire, la carte, la localisation et toutes les informations pratiques du bar.",
      process:
        "Premier projet web : rencontre avec le client pour définir les besoins, création de maquettes à la main, puis développement en HTML5/CSS3/JavaScript vanilla avec architecture modulaire. Projet réalisé en une semaine, parallèlement aux cours.",
      results:
        "Site web complet et fonctionnel (v1.0) accessible sur musebar.fr. Le projet a été livré avec succès et rencontre une excellente réception de la part du client. Le site répond parfaitement aux objectifs initiaux en reflétant l'identité authentique du bar tout en offrant une expérience utilisateur simple et efficace. Tous les objectifs ont été atteints avec une solution qui capture l'essence du Muse Bar et répond à l'ensemble des besoins identifiés lors de la phase de conception.",
    },
    {
      id: 9,
      title: "Dream Catcher",
      category: "Application mobile, IA",
      hasImage: true,
      image: dreamImage,
      year: "2025 - 20??",
      discipline: "Application mobile, IA",
      sector: "Bien-être / Mobile",
      description: "En cours de développement, promis je me dépèche !!",
      longDescription: "...",
      features: ["...", "...", "...", "..."],
      technologies: ["...", "...", "...", "..."],
      concept: "...",
      process: "...",
      results: "...",
    },
    {
      id: 10,
      title: "Badge SNSM Rouen",
      category: "Illustration",
      hasImage: true,
      image: snsmImage,
      additionalImages: [snsm1Image, snsm2Image, snsm3Image],
      year: "2025",
      discipline: "Illustration",
      sector: "Bénévolat / Sécurité",
      description:
        "Badge commémoratif bénévole pour la promotion SNSM 2024/2025",
      longDescription:
        "Projet bénévole : création d'un badge commémoratif pour la promotion 2024/2025 de la SNSM de Rouen. Cette équipe de nouveaux sauveteurs en mer voulait un badge qui concrétise leur fin de formation, en mettant en image une expérience forte qu'ils ont vécue tous ensemble, inspirée d'un souvenir commun d'un jour de leur formation.",
      features: [
        "Design commémoratif personnalisé",
        "Représentation d'un souvenir commun de formation",
        "Éléments symboliques de la SNSM",
        "Identité visuelle de la promotion",
        "Plusieurs versions proposées",
      ],
      technologies: ["Adobe Illustrator", "Design vectoriel", "Illustration"],
      concept:
        "Créer un badge qui matérialise visuellement une expérience collective forte. L'objectif était de transformer un souvenir commun de formation en un objet commémoratif qui symbolise leur parcours et leur cohésion d'équipe. Un projet bénévole pour honorer leur engagement dans le sauvetage en mer.",
      process:
        "Échange avec l'équipe pour comprendre leur souvenir commun et identifier les éléments obligatoires à intégrer. Collaboration sur les couleurs et les emplacements des éléments pour créer plusieurs versions. L'équipe a finalement choisi la version 2, qui capturait le mieux l'essence de leur expérience partagée.",
      results:
        "Badge commémoratif finalisé et validé par l'équipe, qui matérialise leur expérience de formation. Un objet symbolique qui représente leur cohésion et leur parcours commun, créé bénévolement pour célébrer leur engagement dans le sauvetage en mer.",
    },
    {
      id: 11,
      title: "Visualisation de neurones",
      category: "Science",
      hasImage: true,
      image: vestiaImage,
      year: "2026",
      discipline: "Science",
      sector: "Science",
      description: "...",
      longDescription: "...",
      features: ["...", "...", "...", "..."],
      technologies: ["...", "...", "...", "..."],
      concept: "...",
      process: "...",
      results: "...",
    },
  ];

  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-container">
          <h1>Projet non trouvé</h1>
          <Link to="/all-work" className="back-link">
            ← Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="project-detail">
      <div className="project-container">
        <motion.div
          className="project-header"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="project-nav" variants={itemVariants}>
            <Link to="/all-work" className="back-link">
              ← Retour aux projets
            </Link>
          </motion.div>

          <motion.div className="project-hero" variants={titleVariants}>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.description}</p>
          </motion.div>

          <motion.div className="project-meta" variants={itemVariants}>
            <div className="meta-grid">
              <div className="meta-item">
                <span className="meta-label">Année</span>
                <span className="meta-value">{project.year}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Discipline</span>
                <span className="meta-value">{project.discipline}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Secteur</span>
                <span className="meta-value">{project.sector}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="project-hero-image"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <img src={project.image} alt={project.title} className="hero-image" />
        </motion.div>

        <motion.section
          className="project-section concept-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="section-content" variants={itemVariants}>
            <h2 className="section-title">Concept</h2>
            <p className="section-text">{project.concept}</p>
          </motion.div>
        </motion.section>

        {project.additionalImages && project.additionalImages.length > 0 && (
          <motion.div
            className="project-process-images"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {project.additionalImages.map((image, index) => (
              <motion.div
                key={index}
                className="process-image"
                variants={itemVariants}
              >
                <img src={image} alt={`${project.title} - ${index + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.section
          className="project-section process-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="section-content" variants={itemVariants}>
            <h2 className="section-title">Processus</h2>
            <p className="section-text">{project.process}</p>
          </motion.div>
        </motion.section>

        <motion.section
          className="project-section results-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="section-content" variants={itemVariants}>
            <h2 className="section-title">Résultats</h2>
            <p className="section-text">{project.results}</p>
          </motion.div>
        </motion.section>

        <motion.section
          className="project-section features-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="section-content" variants={itemVariants}>
            <h2 className="section-title">Fonctionnalités</h2>
            <div className="features-grid">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-item"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="feature-icon"></div>
                  <span className="feature-text">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="project-section tech-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="section-content" variants={itemVariants}>
            <h2 className="section-title">Technologies</h2>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="tech-tag"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {project.collaborators && project.collaborators.length > 0 && (
          <motion.section
            className="project-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="section-content" variants={itemVariants}>
              <h2 className="section-title">Collaborateurs</h2>
              <div className="collaborators-list">
                {project.collaborators.map((collaborator, index) => (
                  <motion.a
                    key={index}
                    href={collaborator.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="collaborator-link"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <span className="collaborator-name">
                      @{collaborator.name}
                    </span>
                    <span className="collaborator-github">GitHub</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.section>
        )}

        {project.website && (
          <motion.section
            className="project-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="section-content" variants={itemVariants}>
              <h2 className="section-title">Site Web</h2>
              <motion.a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="collaborator-link"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <span className="collaborator-name">Visiter le site</span>
                <span className="collaborator-github">→</span>
              </motion.a>
            </motion.div>
          </motion.section>
        )}

        {project.github && (
          <motion.section
            className="project-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="section-content" variants={itemVariants}>
              <h2 className="section-title">Code Source</h2>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="collaborator-link"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <span className="collaborator-name">Voir sur GitHub</span>
                <span className="collaborator-github">→</span>
              </motion.a>
            </motion.div>
          </motion.section>
        )}

        <motion.section
          className="project-section navigation-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="section-content" variants={itemVariants}>
            <div className="project-navigation">
              <Link to="/all-work" className="nav-button">
                Voir tous les projets
              </Link>
              <Link to="/contact" className="nav-button primary">
                Discuter de ce projet
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectDetail;
