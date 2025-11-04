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
import forumImage from "../assets/images/forum.png";
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
      year: "2023 - 2024",
      discipline: "Site Web, illustration",
      sector: "Éducation / Outils",
      description: "Serveur web de conversion ASCII art avec thème street-art",
      longDescription:
        "Serveur web en Go permettant de convertir du texte en art ASCII avec différents banners (shadow, standard, thinkertoy). Interface web avec thème humoristique street-art, offrant une expérience utilisateur unique pour créer des œuvres ASCII artistiques.",
      features: [
        "Conversion texte vers ASCII art",
        "Trois banners disponibles (shadow, standard, thinkertoy)",
        "Interface web avec thème street-art",
        "Gestion des erreurs HTTP appropriées",
      ],
      technologies: ["Go", "HTML Templates", "HTTP Server", "ASCII Art"],
      collaborators: [{ name: "Konixy", github: "https://github.com/Konixy" }],
      concept:
        "Créer un serveur web humoristique sur le thème du street-art pour convertir du texte en art ASCII, en explorant la frontière entre technologie et art visuel.",
      process:
        "Développement du serveur HTTP en Go, création des templates HTML, implémentation des algorithmes de conversion ASCII, ajout du thème street-art humoristique, gestion des codes de statut HTTP.",
      results:
        "Serveur web fonctionnel avec interface street-art, permettant la conversion de texte en art ASCII avec trois styles différents et une expérience utilisateur engageante.",
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
      year: "2023 - 2024",
      discipline: "Ui/ux, Site Web",
      sector: "Musique / Social",
      description:
        "Application web moderne pour explorer et suivre des artistes de musique et leurs concerts",
      longDescription:
        "Application web moderne pour explorer et suivre des artistes de musique et leurs concerts. Architecture complète avec backend Go et frontend Svelte, offrant une expérience immersive pour découvrir des artistes et localiser leurs concerts sur une carte interactive.",
      features: [
        "Carousel d'artistes avec recherche avancée",
        "Carte interactive des concerts avec géolocalisation",
        "Interface scroll-snap avec 3 sections",
        "Cache intelligent pour optimiser les requêtes",
      ],
      technologies: ["Go", "Svelte", "TypeScript", "Vite", "Docker Compose"],
      collaborators: [{ name: "Konixy", github: "https://github.com/Konixy" }],
      concept:
        "Créer une expérience immersive pour découvrir des artistes et localiser leurs concerts sur une carte interactive avec une interface moderne et des animations fluides.",
      process:
        "Développement de l'API REST en Go avec cache de coordonnées géographiques, création de l'interface Svelte avec typographies personnalisées, implémentation de la navigation par scroll avec indicateurs visuels.",
      results:
        "Application fonctionnelle avec architecture complète, interface moderne et responsive, et système de cache intelligent pour optimiser les performances.",
    },
    {
      id: 3,
      title: "Pocket-me",
      category: "Application mobile",
      hasImage: true,
      image: pocketmeImage,
      year: "2023 - 2024",
      discipline: "Application mobile",
      sector: "Mobile / Social",
      description: "Application mobile sociale",
      longDescription:
        "Application mobile sociale permettant de connecter les utilisateurs et de partager des moments.",
      features: [
        "Interface utilisateur intuitive",
        "Fonctionnalités sociales",
        "Design moderne",
        "Expérience utilisateur optimisée",
      ],
      technologies: ["React Native", "Mobile", "UI/UX"],
      concept:
        "Créer une application mobile sociale qui connecte les utilisateurs et facilite le partage d'expériences.",
      process:
        "Conception de l'interface utilisateur, développement des fonctionnalités sociales, intégration des technologies mobiles, tests et optimisations.",
      results:
        "Application mobile fonctionnelle avec interface moderne et expérience utilisateur optimisée pour connecter les utilisateurs.",
    },
    {
      id: 4,
      title: "Capitaine Flint",
      category: "Robotique, Arduino",
      hasImage: true,
      image: flintImage,
      year: "2023 - 2024",
      discipline: "Robotique, Arduino",
      sector: "Robotique / Éducation",
      description: "Perroquet robot articulé avec mouvements réalistes",
      longDescription:
        "Projet de perroquet robot très articulé où chaque os peut bouger grâce à des articulations rotoïdes sphériques. L'objectif est de créer des mouvements réalistes et fluides pour un robot perroquet interactif.",
      features: [
        "Articulations rotoïdes sphériques",
        "Mouvements réalistes et fluides",
        "Structure modulaire par os",
        "Contrôle précis des articulations",
      ],
      technologies: [
        "Arduino",
        "C++",
        "Électronique",
        "Mécanique",
        "Servomoteurs",
      ],
      concept:
        "Créer un perroquet robot très articulé avec des mouvements réalistes et fluides grâce à des articulations rotoïdes sphériques pour chaque os.",
      process:
        "Conception mécanique des articulations, programmation des mouvements fluides, intégration des servomoteurs, développement du système de contrôle.",
      results:
        "Robot perroquet en cours de développement avec structure articulée avancée pour des mouvements réalistes.",
    },
    {
      id: 5,
      title: "Cuistots Sauvages",
      category: "Identité de marque, illustration",
      hasImage: true,
      image: cuistotImage,
      year: "2023 - 2024",
      discipline: "Identité de marque, illustration",
      sector: "Culinaire / Événementiel",
      description: "Identité visuelle pour un événement de cuisine villageoise",
      longDescription:
        "Création complète de l'identité visuelle pour un événement de cuisine dans un village. L'objectif est de créer un moment de partage et d'apprentissage culinaire où les gens se retrouvent pour cuisiner ensemble et passer un bon moment. Toute l'identité visuelle a été conçue pour cet événement communautaire.",
      features: [
        "Logo design pour l'événement",
        "Charte graphique complète",
        "Supports de communication",
        "Identité visuelle événementielle",
      ],
      technologies: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Design graphique",
        "Branding",
      ],
      concept:
        "Créer une identité visuelle chaleureuse et accueillante pour un événement de cuisine villageoise qui rassemble les gens autour du partage et de l'apprentissage culinaire.",
      process:
        "Analyse du concept d'événement, création du logo, développement de la charte graphique, conception des supports de communication pour l'événement.",
      results:
        "Identité visuelle complète et cohérente qui capture l'esprit communautaire et chaleureux de l'événement de cuisine villageoise.",
    },
    {
      id: 6,
      title: "Forum",
      category: "Site Web, communauté",
      hasImage: true,
      image: forumImage,
      year: "2023 - 2024",
      discipline: "Site Web, communauté",
      sector: "Communauté / Nostalgie",
      description: "Forum communautaire sur le thème Windows 95",
      longDescription:
        "Forum web communautaire dédié à la passion pour Windows 95. Les utilisateurs peuvent s'inscrire, créer des posts et commentaires, liker/disliker les contenus, et filtrer par catégories. Interface nostalgique avec l'esthétique Windows 95 pour une expérience immersive.",
      features: [
        "Système d'authentification avec cookies",
        "Posts et commentaires avec catégories",
        "Système de likes/dislikes",
        "Filtrage par catégories et posts likés",
      ],
      technologies: ["Go", "SQLite", "HTML", "CSS", "Docker", "bcrypt"],
      collaborators: [
        { name: "Konixy", github: "https://github.com/Konixy" },
        { name: "VergneElliot", github: "https://github.com/VergneElliot" },
      ],
      concept:
        "Créer un forum communautaire nostalgique sur le thème Windows 95 où les passionnés peuvent partager leur amour pour ce système d'exploitation emblématique.",
      process:
        "Développement backend en Go avec SQLite, création de l'interface nostalgique Windows 95, implémentation du système d'authentification et des fonctionnalités communautaires, conteneurisation avec Docker.",
      results:
        "Forum fonctionnel avec interface nostalgique Windows 95, système d'authentification sécurisé, et communauté active de passionnés.",
    },
    {
      id: 7,
      title: "Photobooth",
      category: "Site web, illustration",
      hasImage: true,
      image: photoboothImage,
      year: "2023 - 2024",
      discipline: "Site web, illustration",
      sector: "Événementiel / Photo",
      description: "Photobooth avec histoire et limitation quotidienne",
      longDescription:
        "Application web de photobooth avec une histoire immersive où les utilisateurs ne peuvent prendre qu'une photo par jour. Le projet combine créativité et contrainte temporelle pour créer une expérience unique et mémorable.",
      features: [
        "Système de limitation quotidienne",
        "Histoire immersive",
        "Interface de photobooth",
        "Expérience narrative",
      ],
      technologies: ["React", "WebRTC", "Canvas API", "Base de données"],
      concept:
        "Créer un photobooth avec une histoire où la limitation d'une photo par jour ajoute de la valeur et de l'anticipation à l'expérience utilisateur.",
      process:
        "Développement du concept narratif, création de l'interface de photobooth, implémentation du système de limitation quotidienne, intégration de l'histoire.",
      results:
        "Projet en cours de développement avec concept innovant combinant photobooth et storytelling.",
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
        "Font Awesome 6.0.0",
        "Google Fonts (Playfair Display, Poppins, Funnel Display)",
        "Architecture modulaire (fragments HTML via fetch)",
      ],
      github: "https://github.com/Ramswed/MuseBar",
      website: "https://musebar.fr",
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
      year: "2023 - 2024",
      discipline: "Application mobile, IA",
      sector: "Bien-être / Mobile",
      description: "Application mobile de suivi de rêves avec IA",
      longDescription:
        "Application mobile innovante utilisant l'intelligence artificielle pour analyser et interpréter les rêves. Le projet combine technologie et bien-être pour créer une expérience unique de découverte de soi.",
      features: [
        "Journal de rêves",
        "Analyse IA",
        "Communauté",
        "Statistiques personnelles",
      ],
      technologies: ["React Native", "Python", "Machine Learning", "Firebase"],
      concept:
        "Explorer le monde mystérieux des rêves grâce à la technologie, en offrant des outils d'analyse et une communauté de partage pour mieux comprendre ses rêves.",
      process:
        "Développement du concept d'analyse IA, création de l'interface mobile, implémentation du système de communauté, intégration des fonctionnalités de bien-être.",
      results:
        "Projet en cours de développement avec concept innovant combinant IA et bien-être pour l'analyse des rêves.",
    },
    {
      id: 10,
      title: "Badge SNSM Rouen",
      category: "Illustration",
      hasImage: true,
      image: snsmImage,
      additionalImages: [snsm1Image, snsm2Image, snsm3Image],
      year: "2023 - 2024",
      discipline: "Illustration",
      sector: "Bénévolat / Sécurité",
      description: "Badge pour la promotion SNSM 2024/2025",
      longDescription:
        "Création d'un badge pour la promotion SNSM 2024/2025 basé sur leur expérience de formation et leurs meilleurs souvenirs. Projet bénévole pour les sauveteurs en mer, visant à célébrer leur parcours et leur engagement.",
      features: [
        "Design commémoratif",
        "Représentation de l'expérience de formation",
        "Éléments des meilleurs souvenirs",
        "Identité visuelle de la promotion",
      ],
      technologies: ["Adobe Illustrator", "Design vectoriel", "Illustration"],
      concept:
        "Créer un badge commémoratif qui capture l'essence de l'expérience de formation et les meilleurs souvenirs de la promotion SNSM 2024/2025, en tant que projet bénévole pour les sauveteurs en mer.",
      process:
        "Analyse des expériences de formation, collecte des meilleurs souvenirs, conception du badge commémoratif, intégration des éléments symboliques de la SNSM.",
      results:
        "Badge commémoratif créé bénévolement pour célébrer la promotion SNSM 2024/2025 et honorer leur engagement dans le sauvetage en mer.",
    },
    {
      id: 11,
      title: "Vestia",
      category: "Application mobile, illustration",
      hasImage: true,
      image: vestiaImage,
      year: "2023 - 2024",
      discipline: "Application mobile, illustration",
      sector: "Mode / Mobile",
      description: "Application météo conseillant sur la tenue vestimentaire",
      longDescription:
        "Application météo qui conseille sur la tenue vestimentaire en fonction des variations météorologiques. Projet collaboratif avec développement backend par [@Phiphilio](https://github.com/Phiphilio) et design UX/UI par Manon Leroux.",
      features: [
        "Conseils vestimentaires basés sur la météo",
        "Interface utilisateur intuitive",
        "Design UX/UI personnalisé",
        "Recommandations adaptatives",
      ],
      technologies: [
        "React Native",
        "UX/UI Design",
        "Illustration",
        "API météo",
      ],
      collaborators: [
        { name: "Phiphilio", github: "https://github.com/Phiphilio" },
      ],
      concept:
        "Créer une application qui combine données météorologiques et conseils vestimentaires pour aider les utilisateurs à s'habiller de manière appropriée selon les conditions météo.",
      process:
        "Collaboration avec le développeur backend, conception de l'interface utilisateur, création du design UX/UI, intégration des conseils vestimentaires basés sur la météo.",
      results:
        "Application fonctionnelle avec interface utilisateur soignée, offrant des conseils vestimentaires personnalisés selon les conditions météorologiques.",
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
              ← All work
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
