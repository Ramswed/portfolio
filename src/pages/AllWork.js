import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getProjectsByIds } from "../data/projects";
import OptimizedImage from "../components/OptimizedImage";

const AllWork = () => {
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

  const category1Row1 = getProjectsByIds([3, 7]);
  const category1Row2 = getProjectsByIds([8, 4]);

  const category2Projects = getProjectsByIds([13, 10]);

  const category3Projects = getProjectsByIds([1, 2, 6]);

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
                <OptimizedImage
                  src={project.image}
                  webp={project.imageWebp}
                  alt={project.title}
                  loading="lazy"
                />
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
        "projects-grid projects-grid-ascii",
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
