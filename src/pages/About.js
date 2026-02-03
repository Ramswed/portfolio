import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";
import cvPdf from "../assets/images/CV.pdf";
import cmoiImage from "../assets/images/pp/cmoi.png";
import cmoiImageWebp from "../assets/images/pp/cmoi.webp";

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

  return (
    <main className="main">
      <motion.section
        className="about-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="about-hero" variants={itemVariants}>
          <motion.div
            className="team-member"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="member-image-wrapper">
              <div className="member-image">
                <OptimizedImage
                  src={cmoiImage}
                  webp={cmoiImageWebp}
                  alt="Manon Leroux"
                />
              </div>
            </div>
            <h2 className="member-name">Manon Leroux</h2>
            <p className="member-role">Développeuse Full-Stack / Graphiste</p>
          </motion.div>
        </motion.div>

        <motion.div className="about-content" variants={itemVariants}>
          <div className="section-header">
            <span className="section-number">01</span>
            <p className="section-label">qui je suis</p>
          </div>
          <div className="content-wrapper">
            <p className="about-description">
              Future développeuse full-stack de 21 ans, je crée des projets qui
              allient esthétique et fonctionnalité
            </p>
            <p className="about-text">
              Je passe mon temps à créer des outils et gadgets qui répondent à
              mes besoins. Maintenant, j'ai envie de mettre cette créativité au
              service d'autres personnes et de transformer leurs idées en
              solutions concrètes et personnalisées.
            </p>
          </div>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div className="journey-section" variants={itemVariants}>
          <div className="section-header">
            <span className="section-number">02</span>
            <p className="section-label">mon parcours</p>
          </div>
          <div className="content-wrapper">
            <p className="journey-description">
              De la création graphique à la programmation...
            </p>
            <div className="timeline">
              <motion.div
                className="timeline-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="timeline-year">2022-2025</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">DNMADE</h4>
                  <p className="timeline-subtitle">
                    Bac+3 - Identités Visuelles fixes, animées et interactives
                  </p>
                  <p className="timeline-text">
                    Formation complète en conception d'identité visuelle
                    (logotypes, packaging, signalétiques), image de
                    communication et illustrations multiples. Ateliers de
                    sérigraphie, gravure, photographie, infographie et découpage
                    numérique. L'interactivité m'a passionnée dès le début —
                    j'ai alors décidé de passer à la programmation pour explorer
                    cette dimension de manière plus approfondie.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="timeline-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="timeline-year">2024-2025</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">BTS Cybersécurité</h4>
                  <p className="timeline-subtitle">Première année validée</p>
                  <p className="timeline-text">
                    Formation en parallèle de la fin de mon DNMADE. J'ai
                    découvert les bases de la sécurité informatique, l'analyse
                    des vulnérabilités et la protection des systèmes. Cette
                    expérience m'a appris que le partage et la collaboration
                    sont essentiels pour moi — je préfère apprendre et créer
                    dans un environnement d'équipe plutôt qu'en solo.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="timeline-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="timeline-year">Mai 2025</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">Zone01</h4>
                  <p className="timeline-subtitle">
                    Développeuse full-stack (RNCP DevOps) - Cursus en cours
                  </p>
                  <p className="timeline-text">
                    Formation full-stack basée sur la résolution de projets en
                    mode agile et collaboratif. Apprentissage de multiples
                    langages (JavaScript, Go, Rust, C, C++, Python...) à travers
                    plus de 55 projets. Après 18 mois de cursus général,
                    possibilité de spécialisation en IA, DevOps, UX/UI ou
                    développement mobile/web. Formation en alternance sur 3 ans.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div className="skills-section" variants={itemVariants}>
          <div className="section-header">
            <span className="section-number">03</span>
            <p className="section-label">mes compétences techniques</p>
          </div>
          <div className="skills-grid">
            <motion.div
              className="skill-category"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <h3 className="skill-title">Langages</h3>
              <div className="skill-items">
                <span className="skill-tag">Bash</span>
                <span className="skill-tag">GO</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Dart</span>
              </div>
            </motion.div>
            <motion.div
              className="skill-category"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <h3 className="skill-title">Frameworks</h3>
              <div className="skill-items">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Flutter</span>
              </div>
            </motion.div>
            <motion.div
              className="skill-category"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <h3 className="skill-title">Design</h3>
              <div className="skill-items">
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Adobe Creative Suite</span>
                <span className="skill-tag">Canva</span>
                <span className="skill-tag">Affinity</span>
              </div>
            </motion.div>
          </div>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div className="specialties-section" variants={itemVariants}>
          <div className="section-header">
            <span className="section-number">04</span>
            <p className="section-label">mes spécialités</p>
          </div>
          <p className="specialties-description">
            Ce qui me passionne et me motive au quotidien
          </p>
          <div className="specialties-grid">
            <motion.div
              className="specialty-item"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="specialty-number">01</div>
              <h3 className="specialty-title">Développement Full-Stack</h3>
              <p className="specialty-text">
                Front-end et back-end pour des applications complètes
              </p>
            </motion.div>
            <motion.div
              className="specialty-item"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="specialty-number">02</div>
              <h3 className="specialty-title">Design d'Interface</h3>
              <p className="specialty-text">
                Création d'interfaces utilisateur intuitives et esthétiques
              </p>
            </motion.div>
            <motion.div
              className="specialty-item"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="specialty-number">03</div>
              <h3 className="specialty-title">Expérience Utilisateur</h3>
              <p className="specialty-text">
                Optimisation de l'UX pour une meilleure expérience
              </p>
            </motion.div>
            <motion.div
              className="specialty-item"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="specialty-number">04</div>
              <h3 className="specialty-title">
                Intégration Design/Développement
              </h3>
              <p className="specialty-text">
                Faire le pont entre design et code, transformer des concepts
                visuels en interfaces fonctionnelles
              </p>
            </motion.div>
            <motion.div
              className="specialty-item"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="specialty-number">05</div>
              <h3 className="specialty-title">Technologies Émergentes</h3>
              <p className="specialty-text">
                Veille technologique constante, particulièrement l'intelligence
                artificielle
              </p>
            </motion.div>
            <motion.div
              className="specialty-item"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="specialty-number">06</div>
              <h3 className="specialty-title">Résolution de Problèmes</h3>
              <p className="specialty-text">
                Approche créative pour des solutions innovantes
              </p>
            </motion.div>
          </div>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div className="looking-section" variants={itemVariants}>
          <div className="section-header">
            <span className="section-number">05</span>
            <p className="section-label">ce que je cherche</p>
          </div>
          <div className="content-wrapper">
            <p className="looking-description">
              Une alternance en développement full-stack
            </p>
            <p className="looking-text">
              Je recherche une alternance sur 2 ans, mais pas n'importe
              laquelle. Je ne cherche pas juste un contrat pour valider mon
              diplôme — je veux une vraie expérience où je pourrai contribuer et
              apprendre.
            </p>
            <p className="looking-text">
              Je m'adapte très vite et j'ai envie de mettre mes compétences au
              service de projets concrets. Mon profil hybride
              design/développement et ma curiosité pour les technologies
              émergentes me permettent d'apporter une vision créative aux
              projets techniques.
            </p>
          </div>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div className="passions-section" variants={itemVariants}>
          <div className="section-header">
            <span className="section-number">06</span>
            <p className="section-label">au-delà du code</p>
          </div>
          <p className="passions-description">
            Ma créativité ne s'arrête pas au code
          </p>
          <div className="passions-grid">
            <motion.div
              className="passion-card"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <div className="passion-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h4 className="passion-title">Créativité visuelle</h4>
              <p className="passion-text">
                Illustration, dessin, animations 2D — ma créativité nourrit mon
                travail de développement et m'aide à créer des interfaces plus
                abouties visuellement.
              </p>
            </motion.div>

            <motion.div
              className="passion-card"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <div className="passion-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h4 className="passion-title">Robotique</h4>
              <p className="passion-text">
                Formation autodidacte explorant la rencontre entre le code et le
                monde physique pour enrichir ma vision des applications
                interactives.
              </p>
            </motion.div>

            <motion.div
              className="passion-card"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <div className="passion-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h4 className="passion-title">Hybridation</h4>
              <p className="passion-text">
                La rencontre entre créativité et technique me permet d'aborder
                chaque projet avec une vision unique, alliant design et
                développement.
              </p>
            </motion.div>
          </div>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div className="social-section" variants={itemVariants}>
          <div className="section-header">
            <span className="section-number">07</span>
            <p className="section-label">me contacter</p>
          </div>
          <div className="social-links-grid">
            <motion.a
              href="https://github.com/Ramswed"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-item"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <span className="social-link-label">GitHub</span>
              <span className="social-link-url">github.com/Ramswed</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/manon-leroux-6785a8259"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-item"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <span className="social-link-label">LinkedIn</span>
              <span className="social-link-url">manon-leroux</span>
            </motion.a>
            <motion.a
              href="mailto:manonlrx48@gmail.com"
              className="social-link-item"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <span className="social-link-label">Email</span>
              <span className="social-link-url">manonlrx48@gmail.com</span>
            </motion.a>
          </div>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div className="cv-section" variants={itemVariants}>
          <div className="section-header">
            <span className="section-number">08</span>
            <p className="section-label">mon cv</p>
          </div>
          <div className="content-wrapper">
            <motion.a
              href={cvPdf}
              download="CV_Manon_Leroux.pdf"
              className="cv-download-button"
              whileHover={{
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cv-download-icon"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Télécharger mon CV</span>
            </motion.a>
          </div>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div className="cta-section" variants={itemVariants}>
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
      </motion.section>
    </main>
  );
};

export default About;
