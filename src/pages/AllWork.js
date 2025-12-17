import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import asciiartImage from "../assets/images/asciiart/asciiart.png";
import groupieImage from "../assets/images/groupietracker/groupie .png";
import pocketmeImage from "../assets/images/pocket.png";
import flintImage from "../assets/images/flint.png";
import cuistotImage from "../assets/images/cuistot.png";
import forumImage from "../assets/images/forum/forum.png";
import photoboothImage from "../assets/images/photobooth.png";
import musebarImage from "../assets/images/musebar.png";
import dreamImage from "../assets/images/dream.png";
import snsmImage from "../assets/images/snsm/snsm.png";
import vestiaImage from "../assets/images/vestia.png";

const AllWork = () => {
  const projects = [
    {
      id: 1,
      title: "Ascii Convertisseur",
      category: "Site Web, illustration",
      hasImage: true,
      image: asciiartImage,
    },
    {
      id: 2,
      title: "Groupie Tracker",
      category: "Ui/ux, Site Web",
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
      category: "Robotique, Arduino",
      hasImage: true,
      image: flintImage,
    },
    {
      id: 5,
      title: "Cuistots Sauvages",
      category: "Identité de marque, illustration",
      hasImage: true,
      image: cuistotImage,
    },
    {
      id: 6,
      title: "Forum",
      category: "Site Web, communauté",
      hasImage: true,
      image: forumImage,
    },
    {
      id: 7,
      title: "Photobooth",
      category: "Site web, illustration",
      hasImage: true,
      image: photoboothImage,
    },
    {
      id: 8,
      title: "Muse Bar",
      category: "Site Vitrine, ui/ux",
      hasImage: true,
      image: musebarImage,
    },
    {
      id: 9,
      title: "Dream Catcher",
      category: "Application mobile, IA",
      hasImage: true,
      image: dreamImage,
    },
    {
      id: 10,
      title: "Badge SNSM Rouen",
      category: "Illustration",
      hasImage: true,
      image: snsmImage,
    },
    {
      id: 11,
      title: "Vestia",
      category: "Application mobile, illustration",
      hasImage: true,
      image: vestiaImage,
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

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            className="project-card"
            variants={itemVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
            }}
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

      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <p className="cta-text">Vous voulez discuter d'un projet? :)</p>
        <motion.a
          href="/contact"
          className="cta-button"
          whileHover={{
            y: -2,
            transition: { duration: 0.3 },
          }}
        >
          Contactez-moi
        </motion.a>
      </motion.div>
    </main>
  );
};

export default AllWork;
