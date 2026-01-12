import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import asciiartImage from "../assets/images/asciiart/asciiart.png";
import groupieImage from "../assets/images/groupietracker/groupie .png";
import pocketmeImage from "../assets/images/pocket/pocket.png";
import flintImage from "../assets/images/flint/flint.png";
import forumImage from "../assets/images/forum/forum.png";
import photoboothImage from "../assets/images/photokab/photobooth.png";
import musebarImage from "../assets/images/musebar.png";
import snsmImage from "../assets/images/snsm/snsm.png";
import horschampImage from "../assets/images/horschamps/horschamp.png";

const AllWork = () => {
  const projects = [
    {
      id: 1,
      title: "Ascii Convertisseur",
      category: "Site Web",
      hasImage: true,
      image: asciiartImage,
    },
    {
      id: 2,
      title: "Groupie Tracker",
      category: "Site Web",
      hasImage: true,
      image: groupieImage,
    },
    {
      id: 3,
      title: "Pocket-me",
      category: "Application mobile",
      hasImage: true,
      image: pocketmeImage,
    },
    {
      id: 4,
      title: "Capitaine Flint",
      category: "Robotique",
      hasImage: true,
      image: flintImage,
    },
    {
      id: 6,
      title: "Forum",
      category: "Site Web, Forum",
      hasImage: true,
      image: forumImage,
    },
    {
      id: 7,
      title: "PhotoKabine",
      category: "Application mobile",
      hasImage: true,
      image: photoboothImage,
    },
    {
      id: 8,
      title: "Muse Bar",
      category: "Site Web",
      hasImage: true,
      image: musebarImage,
    },
    {
      id: 10,
      title: "Badge SNSM Rouen",
      category: "Illustration",
      hasImage: true,
      image: snsmImage,
    },
    {
      id: 13,
      title: "Hors-champ",
      category: "Sérigraphie",
      hasImage: true,
      image: horschampImage,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const category1Order = [3, 7, 8, 4]; // Ordre spécifique
  const category1Projects = category1Order
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  const category1Row1 = category1Projects.slice(0, 2); // Pocket-me, PhotoKabine (2 projets)
  const category1Row2 = category1Projects.slice(2); // Muse Bar, Capitaine Flint (2 projets)

  const category2Order = [13, 10]; // Ordre spécifique
  const category2Projects = category2Order
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean); // Hors-champ, Badge SNSM Rouen

  const category3Projects = projects.filter((p) => [1, 2, 6].includes(p.id)); // Ascii Convertisseur, Groupie Tracker, Forum

  const renderProjectsGrid = (projectsList, className = "projects-grid") => (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projectsList.map((project) => (
        <motion.article
          key={project.id}
          className="project-card"
          variants={itemVariants}
        >
          <Link to={`/project/${project.id}`} className="project-link">
            {project.hasImage && (
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            <h2 className="project-title">{project.title}</h2>
            <p className="project-category">{project.category}</p>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );

  return (
    <main className="main">
      <motion.h1
        className="main-title"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Mes projets
      </motion.h1>

      {renderProjectsGrid(category1Row1, "projects-grid")}
      {renderProjectsGrid(category1Row2, "projects-grid projects-grid-3cols")}

      <motion.h2
        className="category-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        identités visuelles & illustrations
      </motion.h2>
      {renderProjectsGrid(category2Projects)}

      <motion.h2
        className="category-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        projets d'école
      </motion.h2>
      {renderProjectsGrid(
        category3Projects,
        "projects-grid projects-grid-ascii"
      )}

      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <p className="cta-text">Vous voulez discuter d'un projet? :)</p>
        <motion.div
          whileHover={{
            y: -2,
            transition: { duration: 0.3 },
          }}
        >
          <Link to="/contact" className="cta-button">
            Contactez-moi
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default AllWork;
