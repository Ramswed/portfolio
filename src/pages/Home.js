import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import asciiartImage from "../assets/images/asciiart/asciiart.png";
import flintImage from "../assets/images/flint.png";
import forumImage from "../assets/images/forum.png";
import musebarImage from "../assets/images/musebar.png";
import patronImage from "../assets/images/patrondumuse.png";

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  const featuredProjects = [
    {
      id: 6,
      title: "Forum",
      category: "Site Web, communauté",
      hasImage: true,
      image: forumImage,
    },
    {
      id: 8,
      title: "Muse Bar",
      category: "Site Vitrine, ui/ux",
      hasImage: true,
      image: musebarImage,
    },
    {
      id: 1,
      title: "Ascii Convertisseur",
      category: "Site Web, illustration",
      hasImage: true,
      image: asciiartImage,
    },
    {
      id: 4,
      title: "Capitaine Flint",
      category: "Robotique, Arduino",
      hasImage: true,
      image: flintImage,
    },
  ];

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
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      style={{ scale }}
                    />
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
            BALLBALABBABLLBABLALLALABLALBLALBALBALBALBLABLABLABLABLALL
            BABLABLALBALALBALBALBALBABLALBALLALALBALBABLABALALBALBALBALLBALA
            LBALBLBALALLBAALBLALBA mais en gros ici je vais faire une petite
            description de ce que je fais et de ce que je suis capable de faire.
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
        <div className="testimonials-gallery">
          <div className="testimonial-content">
            <p className="testimonial-quote">
              Manon est parfaite rien à redire donnez lui son diplôme tout de
              suite (Oui jsp quoi dire j'ai pas eu son retour pour l'instant
              peut être qu'il trouve ça claqué......C'est pour ça que je le
              floute aussi mdr)
            </p>
            <p className="testimonial-author">
              Hugo,{" "}
              <Link to="/all-work" className="testimonial-link">
                <em>Patron du Muse bar.</em>
              </Link>
            </p>
          </div>
          <div className="testimonial-image">
            <img src={patronImage} alt="Hugo, patron du Muse Bar" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <p className="cta-text">Vous voulez discuter d'un projet? :)</p>
        <motion.a href="/contact" className="cta-button">
          Contactez-moi
        </motion.a>
      </motion.div>
    </main>
  );
};

export default Home;
