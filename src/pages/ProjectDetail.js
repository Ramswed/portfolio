import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../data/projects";
import OptimizedImage from "../components/OptimizedImage";
import usePageMeta from "../usePageMeta";
import {
  createContainerVariants,
  createItemVariants,
  createTitleVariants,
} from "../utils/motionVariants";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [lightboxMedia, setLightboxMedia] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && lightboxMedia) {
        setLightboxMedia(null);
      }
    };
    const trapFocus = (e) => {
      if (e.key === "Tab" && lightboxMedia) {
        e.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    if (!lightboxMedia) {
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("keydown", trapFocus);
        document.body.style.overflow = "unset";
      };
    }

    const previouslyFocusedElement = document.activeElement;
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", trapFocus);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", trapFocus);
      document.body.style.overflow = "unset";
      if (previouslyFocusedElement instanceof HTMLElement) {
        previouslyFocusedElement.focus();
      }
    };
  }, [lightboxMedia]);

  const project = getProjectById(projectId);

  usePageMeta(
    project
      ? {
          title: `${project.title} | Manon Leroux`,
          description: project.description,
          path: `/project/${projectId}`,
          image: project.image,
        }
      : {
          title: "Projet non trouve | Manon Leroux",
          description:
            "Le projet demande est introuvable. Explorez les autres projets du portfolio de Manon Leroux.",
          path: `/project/${projectId}`,
        }
  );

  if (!project) {
    return (
      <main className="project-detail">
        <div className="project-container">
          <h1>Projet non trouvé</h1>
          <Link to="/all-work" className="back-link">
            ← Retour aux projets
          </Link>
        </div>
      </main>
    );
  }

  const containerVariants = createContainerVariants(0.1);
  const itemVariants = createItemVariants(20, 0.6);
  const titleVariants = createTitleVariants(30, 0.8);

  return (
    <main className="project-detail">
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
          <OptimizedImage
            src={project.image}
            webp={project.imageWebp}
            alt={project.title}
            width={1600}
            height={1000}
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
              const mediaItem =
                typeof media === "string"
                  ? { src: media, autoplay: false }
                  : media;
              const mediaSrc = mediaItem.src;
              const mediaPoster = mediaItem.poster;

              const isVideo =
                typeof mediaSrc === "string" &&
                (mediaSrc.includes(".mp4") ||
                  mediaSrc.includes(".mov") ||
                  mediaSrc.includes(".webm"));
              const effectivePoster = isVideo ? mediaPoster || project.image : undefined;

              const hasPoster = Boolean(effectivePoster);
              const shouldAutoplay = false;
              const showInlineControls = !hasPoster;

              const isGif =
                typeof mediaSrc === "string" && mediaSrc.includes(".gif");

              return (
                <motion.div
                  key={`${project.id}-media-${index}-${mediaSrc}`}
                  className="process-image"
                  variants={itemVariants}
                >
                  {isVideo ? (
                    <>
                      <video
                        src={mediaSrc}
                        poster={effectivePoster}
                        controls={showInlineControls}
                        controlsList={
                          showInlineControls ? "nodownload" : undefined
                        }
                        autoPlay={shouldAutoplay}
                        loop={shouldAutoplay}
                        muted={shouldAutoplay}
                        playsInline={shouldAutoplay}
                        preload={
                          hasPoster ? "none" : shouldAutoplay ? "auto" : "metadata"
                        }
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        draggable="false"
                        onClick={() => {
                          if (hasPoster) {
                            setLightboxMedia({
                              src: mediaSrc,
                              type: "video",
                              poster: effectivePoster,
                            });
                          }
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                          pointerEvents: "auto",
                          cursor: hasPoster ? "pointer" : "default",
                        }}
                      >
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>
                      {hasPoster && (
                        <span
                          className="video-hint-badge"
                          aria-hidden="true"
                          title="Vidéo - cliquer pour lire"
                        >
                          ▶
                        </span>
                      )}
                    </>
                  ) : (
                    <img
                      src={mediaSrc}
                      alt={`${project.title} - ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      onClick={() =>
                        setLightboxMedia({
                          src: mediaSrc,
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
              {project.features.map((feature) => (
                <motion.div
                  key={`${project.id}-feature-${feature}`}
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
              {project.technologies.map((tech) => (
                <motion.span
                  key={`${project.id}-tech-${tech}`}
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
                    key={`${project.id}-collab-${collaborator.name}`}
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

      <AnimatePresence>
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
              role="dialog"
              aria-modal="true"
              aria-label={`Aperçu de ${project.title}`}
            >
              <button
                className="lightbox-close"
                onClick={() => setLightboxMedia(null)}
                aria-label="Fermer"
                ref={closeButtonRef}
              >
                ×
              </button>
              {lightboxMedia.type === "video" ? (
                <video
                  src={lightboxMedia.src}
                  poster={lightboxMedia.poster}
                  controls
                  controlsList="nodownload"
                  autoPlay
                  preload="metadata"
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
                  decoding="async"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  draggable="false"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProjectDetail;
