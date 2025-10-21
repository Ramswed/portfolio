import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
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
      <motion.section
        className="about-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="team-section" variants={itemVariants}>
          <motion.article
            className="team-member"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="member-image"></div>
            <h2 className="member-name">Manon Leroux</h2>
            <p className="member-role">Développeuse Full-Stack / Graphiste</p>
          </motion.article>
        </motion.div>

        <motion.div className="about-content" variants={itemVariants}>
          <p className="section-label">qui je suis</p>
          <p className="about-description">
            Développeuse full-stack passionnée par le design et la création de
            projets interactifs
          </p>
          <p className="about-text">
            "descrption de ce que je fais et de ce que je suis capable de
            faire."
          </p>
        </motion.div>

        <motion.div className="journey-section" variants={itemVariants}>
          <p className="section-label">mon parcours</p>
          <p className="journey-description">
            Diplômée d'un DNMADE en graphisme, je combine créativité et
            technique
          </p>
          <p className="journey-text">
            Mon parcours en design graphique m'a donné une vision créative que
            j'applique maintenant au développement web. Cette double compétence
            me permet de créer des interfaces à la fois belles et
            fonctionnelles.
          </p>
        </motion.div>

        <motion.div className="skills-section" variants={itemVariants}>
          <p className="section-label">mes compétences techniques</p>
          <div className="skills-grid">
            <motion.div
              className="skill-category"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="skill-title">Langages</h3>
              <p className="skill-items">Bash • GO • HTML • CSS • JavaScript</p>
            </motion.div>
            <motion.div
              className="skill-category"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="skill-title">Frameworks</h3>
              <p className="skill-items">React • Node.js</p>
            </motion.div>
            <motion.div
              className="skill-category"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="skill-title">Design</h3>
              <p className="skill-items">
                Figma • Adobe Creative Suite • Canva
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="specialties-section" variants={itemVariants}>
          <p className="section-label">mes spécialités</p>
          <p className="specialties-description">
            Ce qui me passionne et me motive au quotidien
          </p>
          <div className="specialties-grid">
            <motion.div
              className="specialty-item"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <h3 className="specialty-title">Développement Full-Stack</h3>
              <p className="specialty-text">
                Front-end et back-end pour des applications complètes
              </p>
            </motion.div>
            <motion.div
              className="specialty-item"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <h3 className="specialty-title">Design d'Interface</h3>
              <p className="specialty-text">
                Création d'interfaces utilisateur intuitives et esthétiques
              </p>
            </motion.div>
            <motion.div
              className="specialty-item"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <h3 className="specialty-title">Expérience Utilisateur</h3>
              <p className="specialty-text">
                Optimisation de l'UX pour une meilleure expérience
              </p>
            </motion.div>
            <motion.div
              className="specialty-item"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <h3 className="specialty-title">
                Intégration Design/Développement
              </h3>
              <p className="specialty-text">
                Bridging the gap entre créativité et technique
              </p>
            </motion.div>
            <motion.div
              className="specialty-item"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <h3 className="specialty-title">Technologies Émergentes</h3>
              <p className="specialty-text">
                Veille technologique et adoption des nouvelles tendances
              </p>
            </motion.div>
            <motion.div
              className="specialty-item"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <h3 className="specialty-title">Résolution de Problèmes</h3>
              <p className="specialty-text">
                Approche créative pour des solutions innovantes
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="cta-section" variants={itemVariants}>
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
      </motion.section>
    </main>
  );
};

export default About;
