import React, { useState, useEffect } from "react";
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
import pocketmeImage from "../assets/images/pocket/pocket.png";
import pocketencoursImage from "../assets/images/pocket/pocketencours.png";
import flintImage from "../assets/images/flint/flint.png";
import uncannyvalleyImage from "../assets/images/flint/uncannyvalley.jpg";
import flintBrouillonImage from "../assets/images/flint/brouillon.png";
import forumImage from "../assets/images/forum/forum.png";
import forum1Image from "../assets/images/forum/forum1.png";
import forum2Image from "../assets/images/forum/forum2.png";
import forum3Image from "../assets/images/forum/forum3.png";
import apercuMp4 from "../assets/images/forum/apercu.mp4";
import photoboothImage from "../assets/images/photokab/photobooth.png";
import photokabOuiImage from "../assets/images/photokab/oui.png";
import photokabTimelaps from "../assets/images/photokab/timelaps.mp4";
import photokabKabin1Image from "../assets/images/photokab/kabin1.png";
import photokabKabin2Image from "../assets/images/photokab/kabin2.png";
import photokabKabin3Image from "../assets/images/photokab/kabin3.png";
import photokabApercuuMp4 from "../assets/images/photokab/aperçuu.mp4";
import musebarImage from "../assets/images/musebar.png";
import musebar1Image from "../assets/images/musebar/1haut de page.png";
import musebar2Image from "../assets/images/musebar/2carte.png";
import musebar3Image from "../assets/images/musebar/3notre histoire.png";
import musebar4Image from "../assets/images/musebar/4privatiser.png";
import snsmImage from "../assets/images/snsm/snsm.png";
import snsm1Image from "../assets/images/snsm/snsm00001.png";
import snsm2Image from "../assets/images/snsm/snsm00002.png";
import snsm3Image from "../assets/images/snsm/snsm00003.png";
import horschampImage from "../assets/images/horschamps/horschamp.png";
import horschamps1Image from "../assets/images/horschamps/horschamps1.png";
import horschampsvid from "../assets/images/horschamps/horschampsvid.mp4";
import horschampsvid2 from "../assets/images/horschamps/horschampsvid2.mp4";
import horschampsvid3 from "../assets/images/horschamps/horschampsvid3.mp4";
import visuHC1 from "../assets/images/horschamps/visuHC1.png";
import visuHC2 from "../assets/images/horschamps/visuHC2.png";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [lightboxMedia, setLightboxMedia] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && lightboxMedia) {
        setLightboxMedia(null);
      }
    };

    if (lightboxMedia) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [lightboxMedia]);

  const projects = [
    {
      id: 1,
      title: "Ascii Convertisseur",
      category: "Site Web, illustration",
      hasImage: true,
      image: asciiartImage,
      additionalImages: [ascii1Image, ascii2Image],
      year: "2025",
      discipline: "Site Web",
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
        "Transformer un projet scolaire basique en quelque chose de personnel et amusant. Alors que les consignes demandaient un convertisseur ASCII fonctionnel, j'ai voulu aller plus loin en créant une expérience visuelle unique avec un thème street-art/humoristique (un peu à la  Eldiablo, dans '' Lascars'') et des illustrations originales. Parce qu'un outil inutile peut quand même être fun à utiliser.",
      process:
        "Développement du serveur HTTP en Go avec uniquement les packages standards, implémentation de l'algorithme de conversion ASCII caractère par caractère, création des templates HTML et du formulaire POST. Pour le côté créatif : conception du thème street-art, création d'illustrations numériques 2D sur Procreate, ajout des fonctionnalités d'export (TXT, HTML) et de copie. Respect strict des consignes (codes HTTP, structure, bonnes pratiques) tout en ajoutant ma touche personnelle.",
      results:
        "Mon premier projet web. Un serveur complet avec gestion d'erreurs appropriée, une interface visuelle unique avec illustrations originales, et surtout une expérience qui montre qu'on peut s'amuser même avec un projet simple. Le projet m'a permis de découvrir le développement web.",
    },
    {
      id: 2,
      title: "Groupie Tracker",
      category: "Site Web",
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
        "Créer une expérience utilisateur moderne et immersive pour découvrir des artistes et localiser leurs concerts. Au-delà des consignes techniques, j'ai voulu comprendre ce qui rend une interface agréable à utiliser.",
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
      additionalImages: [pocketencoursImage],
      year: "2025 – 20??",
      discipline: "Application mobile",
      sector: "Mobile / Utilitaire",
      description:
        "Application mobile utilitaire — projet en cours de développement.",
      longDescription:
        "Pocket Me est une application mobile pensée comme un espace de stockage personnel intelligent, permettant de centraliser l'ensemble de ses cartes (physiques ou dématérialisées) ainsi que ses documents administratifs. L'application vise à simplifier la gestion du quotidien en proposant une alternative claire, organisée et sécurisée au stockage dispersé des cartes et documents.\n\nL'interface s'articule autour de deux espaces principaux : une page « Poche », dédiée aux cartes (cartes de transport, cartes professionnelles, cartes diverses), et une page « Classeur », dédiée aux documents (PDF ou autres formats). L'ambition du projet est de proposer un outil à la fois pratique, élégant et modulable, pensé pour s'adapter à des usages concrets de la vie réelle.",
      features: [
        "Stockage centralisé de cartes",
        "Stockage de documents (PDF et autres formats)",
        "Organisation par dossiers personnalisés",
        "Sélection ciblée de cartes et documents",
        "Génération automatique d'un PDF à partir d'un dossier",
        "Pensée pour des usages administratifs concrets (logement, travail, démarches)",
      ],
      technologies: ["React Native", "Firebase"],
      collaborators: [
        {
          name: "EmpireStrikesBack",
          github: "https://github.com/EmpireStrikesBack",
        },
      ],
      concept:
        "Pocket Me est une application mobile pensée comme un espace de stockage personnel intelligent, permettant de centraliser l'ensemble de ses cartes (physiques ou dématérialisées) ainsi que ses documents administratifs. L'application vise à simplifier la gestion du quotidien en proposant une alternative claire, organisée et sécurisée au stockage dispersé des cartes et documents.\n\nL'interface s'articule autour de deux espaces principaux : une page « Poche », dédiée aux cartes, et une page « Classeur », dédiée aux documents. L'ambition du projet est de proposer un outil à la fois pratique, élégant et modulable, pensé pour s'adapter à des usages concrets de la vie réelle!!!",
      process:
        "Le projet est actuellement en phase de conception et de développement progressif. Le travail se concentre sur la réflexion UX/UI, l'architecture de l'application et la définition des usages prioritaires. Une attention particulière est portée à la clarté de la navigation, à l'organisation des contenus et à la création d'un système de dossiers flexible, capable de répondre à différents contextes administratifs ou personnels. Les fonctionnalités et l'expérience sont développées de manière itérative afin de garder une forte cohérence entre utilité, simplicité et design.",
      results:
        "À ce stade, Pocket Me prend la forme d'une application mobile fonctionnelle en cours d'évolution, avec une structure claire et une logique d'organisation déjà définie. Le projet est destiné à évoluer vers une solution complète de centralisation et de génération de documents, tout en restant simple d'usage.",
    },
    {
      id: 4,
      title: "Capitaine Flint",
      category: "Robotique",
      hasImage: true,
      image: flintImage,
      additionalImages: [flintBrouillonImage, uncannyvalleyImage],
      year: "2025 – 20??",
      discipline: "Robotique, Arduino",
      sector: "Robotique / Psychologie",
      description:
        "Animatronics et robotique expérimentale — projet en cours de création.",
      longDescription:
        "Ce projet consiste en la création d'un perroquet animatronique visant à reproduire les mouvements naturels d'un perroquet réel, tout en explorant la frontière entre le vivant et l'artificiel. L'objectif n'est pas de tendre vers un réalisme total, mais d'atteindre un équilibre volontairement ambigu, jouant avec l'effet d'uncanny valley : cette zone de trouble où un objet semble presque vivant, sans l'être totalement.\n\nLe projet assume cette tension en choisissant une esthétique squelettique et mécanique, éloignée de l'imitation réaliste d'un oiseau, afin de créer une présence étrange mais assumée. Le mouvement devient alors le principal vecteur de vie, plus que l'apparence.\n\nDans une seconde phase, l'animatronic est pensé pour évoluer vers un objet robotique interactif, intégrant des comportements programmés et des réponses inspirées de l'intelligence artificielle, renforçant encore cette impression de présence semi-vivante.",
      features: [
        "Animatronic articulé",
        "Reproduction expressive des mouvements d'un perroquet",
        "Exploration de l'uncanny valley par le mouvement",
        "Interactions vocales (réponses, répétitions)",
        "Comportements aléatoires programmés",
      ],
      technologies: [
        "Scan 3D",
        "Impression 3D",
        "Servomoteurs et mécanismes animatroniques",
        "Arduino",
        "Programmation embarquée",
      ],
      concept:
        "Ce projet consiste en la création d'un perroquet animatronique visant à reproduire les mouvements naturels d'un perroquet réel, tout en explorant la frontière entre le vivant et l'artificiel. L'objectif n'est pas de tendre vers un réalisme total, mais d'atteindre un équilibre volontairement ambigu, jouant avec l'effet d'uncanny valley : cette zone de trouble où un objet semble presque vivant, sans l'être totalement.\n\nLe projet assume cette tension en choisissant une esthétique squelettique et mécanique, éloignée de l'imitation réaliste d'un oiseau, afin de créer une présence étrange mais assumée. Le mouvement devient alors le principal vecteur de vie, plus que l'apparence.\n\nDans une seconde phase, l'animatronic est pensé pour évoluer vers un objet robotique interactif, intégrant des comportements programmés et des réponses inspirées de l'intelligence artificielle, renforçant encore cette impression de présence semi-vivante.",
      process:
        "Le travail débute par une phase de sculpture en argile, permettant d'explorer les volumes et les proportions du perroquet. (j'en suis ici actuellement ☺ ) Cette sculpture est destinée à être scannée en 3D, puis imprimée, afin de constituer une structure modulaire servant de base à la mécanique interne.\n\nLa conception mécanique vise à reproduire des mouvements crédibles et expressifs, tout en conservant une lecture visible de la structure, pour éviter un réalisme trop lisse. La dernière phase portera sur l'intégration de l'électronique et de la programmation (Arduino), afin de piloter les mouvements, les comportements et les futures interactions.",
      results:
        "Le projet est actuellement en cours de fabrication, à un stade de recherche formelle et mécanique. Les premières formes sculptées servent de base à une réflexion globale sur la présence, le mouvement et la perception du vivant artificiel.\n\nLe résultat visé est un perroquet animatronique à la présence troublante mais maîtrisée, suscitant curiosité, amusement et léger malaise, sans chercher à tromper totalement le spectateur.",
    },
    {
      id: 6,
      title: "Windows 95 Fanatics",
      category: "Site Web, forum",
      hasImage: true,
      image: forumImage,
      year: "2025",
      discipline: "Site Web, forum",
      sector: "Communauté / Nostalgie",
      description: "PROJET D'ÉCOLE - Forum pour les fans de Windows 95",
      additionalImages: [forum1Image, forum2Image, forum3Image, apercuMp4],
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
      title: "PhotoKabine",
      category: "Application mobile",
      hasImage: true,
      image: photoboothImage,
      additionalImages: [
        photokabOuiImage,
        photokabTimelaps,
        photokabApercuuMp4,
        photokabKabin1Image,
      ],
      year: "2026",
      discipline: "Application mobile",
      sector: "Mobile / Design",
      description: "Une app iOS qui recrée l'expérience des cabines photos.",
      longDescription:
        "PhotoKabine, c'est un photobooth dans ma poche. L'app me plonge directement dans une vraie cabine photo avec un rideau animé sur lequel je peux cliquer pour « entrer » dedans. Une fois à l'intérieur, je choisis mon format : 1, 2, 4 ou 6 photos, exactement comme dans les photobooths classiques.\n\nAprès avoir pris mes photos, elles s'assemblent automatiquement dans une mise en page style photobooth/Polaroid, avec un joli filtre sépia pour cet aspect rétro qui fait tout son charme. Mes créations sont ensuite sauvegardées dans un album intégré à l'app (avec la date et l'heure), et je peux les télécharger sur mon téléphone tout en gardant le style photobooth.\n\nLe but ? Recréer cette ambiance nostalgique des cabines photos, mais sur mon iPhone, avec un design soigné et une expérience immersive.",
      features: [
        "Assemblage auto style photobooth",
        "Album intégré avec date et heure",
        "Téléchargement dans l'album du téléphone",
      ],
      technologies: ["Flutter", "Dart", "iOS", "Procreate"],
      concept:
        "Défi personnel : découvrir Flutter et Dart de zéro en deux jours et créer une app mobile orientée illustration. Je n'avais jamais touché à Flutter avant, donc j'ai dû tout apprendre sur le tas. J'ai aussi créé tous les visuels pour garder une cohérence entre le design et le code.\n\nAu-delà du défi technique, je voulais surtout créer quelque chose de fun et immersif.",
      process:
        "Deux jours intensifs à explorer Flutter sans aucune base. J'ai commencé par comprendre comment fonctionnent les widgets, puis j'ai enchaîné sur la gestion d'état, la navigation, l'accès à la caméra... Tout ça en parallèle de la création des visuels. Évidemment, je me suis aidée de l'IA pour avoir une base de projet, puis je l'ai utilisé comme une documentation. L'outil cursor m'a permis de débuger plus vite et de peaufiner le projet. (Sinon en 2 jours, sans connaissance du framework, c'est impossible!)",
      results:
        "Une app fonctionnelle, avec les fonctionnalités prévues. Ce n'est pas parfait (il y a quelques optimisations à faire niveau performance et quelques détails graphiques à améliorer), mais le défi est relevé !\n\nPour la suite, j'aimerais ajouter des bruitages pour renforcer l'immersion, corriger les petits bugs visuels et améliorer les performances. Mais j'ai volontairement figé le projet à la fin des deux jours pour respecter le cadre du défi.",
      github: "https://github.com/Ramswed/photoKabine",
    },
    {
      id: 8,
      title: "Muse Bar",
      category: "Site Web",
      hasImage: true,
      image: musebarImage,
      additionalImages: [
        musebar1Image,
        musebar2Image,
        musebar3Image,
        musebar4Image,
      ],
      year: "2025",
      discipline: "Site Web, Vitrine",
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
        "Premier VRAI projet web : rencontre avec le client pour définir les besoins, création de maquettes à la main, puis développement en HTML5/CSS3/JavaScript vanilla avec architecture modulaire. Projet réalisé en une semaine, parallèlement aux cours.",
      results:
        "Site web complet et fonctionnel (v1.0) accessible sur musebar.fr. Le projet a été livré avec succès et rencontre une excellente réception de la part du client. Le site répond parfaitement aux objectifs initiaux en reflétant l'identité authentique du bar tout en offrant une expérience utilisateur simple et efficace. Tous les objectifs ont été atteints avec une solution qui capture l'essence du Muse Bar et répond à l'ensemble des besoins identifiés lors de la phase de conception.",
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
      id: 13,
      title: "Hors-champ",
      category: "Sérigraphie",
      hasImage: true,
      image: horschampImage,
      additionalImages: [
        horschamps1Image,
        horschampsvid3,
        horschampsvid2,
        horschampsvid,
      ],
      year: "2024",
      discipline: "Sérigraphie",
      sector: "Illustration · Jeunesse",
      description: "Sérigraphie illustrée.",
      longDescription:
        "Hors Champ est un projet d'illustration expérimentale autour d'un renard évoluant dans un univers forestier naïf. Pensé à l'origine comme une simple illustration d'entraînement pour l'illustration jeunesse, le projet a évolué vers une exploration de la sérigraphie et du support imprimé. L'image devient un objet à manipuler, jouant avec le hors-champ, le pliage et la narration visuelle.\n\nLe résultat est une sérigraphie imprimée en noir, présentée sous la forme d'une page pliable et dépliable. L'objet final propose une courte narration visuelle autour des choix d'aventure du renard, révélée par la manipulation du support.",
      features: [
        "Illustration narrative",
        "Sérigraphie artisanale",
        "Support pliable et manipulable",
        "Dépliage interactif",
        "Déclinaisons colorées exploratoires",
      ],
      technologies: ["Machine de sérigraphie", "Procreate", "Adobe Photoshop"],
      concept:
        "Hors Champ est un projet d'illustration expérimentale autour d'un renard évoluant dans un univers forestier naïf. Pensé à l'origine comme une simple illustration d'entraînement pour l'illustration jeunesse, le projet a évolué vers une exploration de la sérigraphie et du support imprimé. L'image devient un objet à manipuler, jouant avec le hors-champ, le pliage et la narration visuelle.",
      process:
        "Le projet débute par une illustration réalisée pour le plaisir et l'expérimentation graphique. L'envie de découvrir la sérigraphie a ensuite orienté le travail vers l'adaptation de l'image à ce procédé d'impression. Plusieurs variantes colorées ont été produites en amont pour anticiper un rendu en sérigraphie multi-couleurs. L'illustration a également été pensée pour être découpée et pliée, afin de créer un système de dépliage narratif.",
      results:
        "Une sérigraphie en noir sur une page pliable. En dépliant le support, on découvre une histoire autour d'une promenade d'un renard. (C'était surtout un prétexte pour sérigraphier !!)",
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
          <img src={project.image} alt={project.title} className="hero-image" loading="eager" />
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
            {project.additionalImages.map((media, index) => {
              const isVideo =
                media === horschampsvid ||
                media === horschampsvid2 ||
                media === horschampsvid3 ||
                media === photokabTimelaps ||
                media === photokabApercuuMp4 ||
                (typeof media === "string" &&
                  (media.includes(".mp4") ||
                    media.includes(".mov") ||
                    media.includes(".webm")));

              const isAutoPlayVideo =
                media === horschampsvid || media === apercuMp4;

              let posterImage = undefined;
              if (media === horschampsvid3) {
                posterImage = visuHC1;
              } else if (media === horschampsvid2) {
                posterImage = visuHC2;
              } else if (media === photokabTimelaps) {
                posterImage = photokabKabin2Image;
              } else if (media === photokabApercuuMp4) {
                posterImage = photokabKabin3Image;
              }

              const isGif = typeof media === "string" && media.includes(".gif");

              return (
                <motion.div
                  key={index}
                  className="process-image"
                  variants={itemVariants}
                >
                  {isVideo ? (
                    <video
                      src={media}
                      controls={!isAutoPlayVideo}
                      controlsList={!isAutoPlayVideo ? "nodownload" : undefined}
                      autoPlay={isAutoPlayVideo}
                      loop={isAutoPlayVideo}
                      muted={isAutoPlayVideo}
                      playsInline={isAutoPlayVideo}
                      poster={posterImage}
                      onPause={(e) => {
                        if (isAutoPlayVideo) {
                          e.target.play();
                        }
                      }}
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      draggable="false"
                      onClick={() => {
                        if (!isAutoPlayVideo) {
                          setLightboxMedia({ src: media, type: "video" });
                        }
                      }}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                        pointerEvents: isAutoPlayVideo ? "none" : "auto",
                        cursor: isAutoPlayVideo ? "default" : "pointer",
                      }}
                    >
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  ) : (
                    <img
                      src={media}
                      alt={`${project.title} - ${index + 1}`}
                      loading="lazy"
                      onClick={() =>
                        setLightboxMedia({
                          src: media,
                          type: isGif ? "gif" : "image",
                        })
                      }
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      draggable="false"
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </motion.div>
              );
            })}
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

      {lightboxMedia && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxMedia(null)}
        >
          <motion.div
            className="lightbox-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setLightboxMedia(null)}
              aria-label="Fermer"
            >
              ×
            </button>
            {lightboxMedia.type === "video" ? (
              <video
                src={lightboxMedia.src}
                controls
                controlsList="nodownload"
                autoPlay
                className="lightbox-video"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                draggable="false"
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            ) : (
              <img
                src={lightboxMedia.src}
                alt={`${project.title} - Vue agrandie`}
                className="lightbox-image"
                loading="eager"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                draggable="false"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectDetail;
