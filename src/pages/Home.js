import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { getProjectsByIds } from "../data/projects";
import OptimizedImage from "../components/OptimizedImage";
import usePageMeta from "../usePageMeta";
import {
  createContainerVariants,
  createItemVariants,
  createTitleVariants,
} from "../utils/motionVariants";
import patronImage from "../assets/images/patrondumuse.png";
import patronImageWebp from "../assets/images/patrondumuse.webp";
import vagImage from "../assets/images/vag.png";
import vagImageWebp from "../assets/images/vag.webp";

const MotionLink = motion(Link);

const Home = () => {
  usePageMeta({
    title: "Manon Leroux | Portfolio",
    description:
      "Portfolio de Manon Leroux, développeuse full-stack et designer. Découvrez une sélection de projets web, mobile et créatifs.",
    path: "/",
  });

  const containerRef = useRef(null);
  const projectsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 40,
    restDelta: 0.001,
  });

  const easedProgress = useTransform(smoothProgress, (value) => {
    return 1 - Math.pow(1 - value, 2);
  });

  const scale = useTransform(easedProgress, [0, 1], [1.3, 1.02]);

  const featuredProjects = getProjectsByIds([8, 3, 7, 1]);

  const containerVariants = createContainerVariants(0.1);
  const itemVariants = createItemVariants(30, 0.6);
  const titleVariants = createTitleVariants(20, 0.8);

  return (
    <main className="main" ref={containerRef}>
      <motion.h1
        className="home-title"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="title-line" variants={titleVariants}>
          Bienvenue sur mon portfolio
        </motion.span>
      </motion.h1>

      <motion.div
        ref={projectsRef}
        className="featured-projects"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="project-row" variants={containerVariants}>
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              className="project-card"
              variants={itemVariants}
            >
              <Link to={`/project/${project.id}`} className="project-link">
                {project.hasImage && (
                  <div className="project-image">
                    <motion.div style={{ scale }}>
                      <OptimizedImage
                        src={project.image}
                        webp={project.imageWebp}
                        alt={project.title}
                        width={1600}
                        height={1000}
                        loading="lazy"
                      />
                    </motion.div>
                  </div>
                )}
                <h2 className="project-title">{project.title}</h2>
                <p className="project-category">{project.category}</p>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="values-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="values-content">
          <p className="asterisk">＊</p>
          <p className="values-text">
            Bonjour, je suis Manon ! ☺︎ <br />
            J'aime transformer des idées en choses concrètes, jolies et
            interactives. Je passe autant de temps à réfléchir à l'esthétique
            qu'à la manière dont on interagit avec une interface. Je code, je
            design, j'expérimente, avec l'envie de rendre les concepts plus
            vivants, plus clairs et plus agréables à utiliser.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="testimonials-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <OptimizedImage
          src={vagImage}
          webp={vagImageWebp}
          alt="Banniere decorative de la section temoignage"
          className="testimonials-banner"
          loading="lazy"
        />
        <div className="testimonial-content">
          <p className="testimonial-quote">
            "Dès le départ, Manon a capté l'esprit du Muse Bar et a su traduire
            nos idées en un site clair et agréable à naviguer. On retrouve dans
            chaque détail notre identité, sans que ça paraisse forcé ou trop
            travaillé. C'est un site simple & pratique à utiliser."
          </p>
          <p className="testimonial-author">
            Hugo,{" "}
            <Link to="/project/8" className="testimonial-link">
              <em>Muse bar.</em>
            </Link>
          </p>
        </div>
        <div className="testimonial-image">
          <OptimizedImage
            src={patronImage}
            webp={patronImageWebp}
            alt="Hugo, patron du Muse Bar"
            width={500}
            height={700}
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <p className="cta-text">Vous voulez discuter d'un projet? ✌︎︎</p>
        <MotionLink
          to="/contact"
          className="cta-button"
          whileHover={{
            transition: { duration: 0.3 },
          }}
        >
          Contactez-moi
        </MotionLink>
      </motion.div>
    </main>
  );
};

export default Home;
