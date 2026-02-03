import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../data/projects";

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

  const project = getProjectById(projectId);

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
          <img
            src={project.image}
            alt={project.title}
            className="hero-image"
            loading="eager"
          />
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
                typeof media === "string" &&
                (media.includes(".mp4") ||
                  media.includes(".mov") ||
                  media.includes(".webm"));

              const isAutoPlayVideo =
                typeof media === "string" &&
                (media.includes("horschampsvid.") || media.includes("apercu."));

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
