import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="contact-form-section" variants={itemVariants}>
          <div className="contact-intro">
            <h2 className="contact-title">Salut !</h2>
            <p className="contact-subtitle">
              Parlez-moi de votre projet - <em>ou</em> - envoyez-moi un
              <strong>
                <a href="mailto:ramswed.pro@gmail.com" className="email-link">
                  {" "}
                  mail :)
                </a>
              </strong>
            </p>
          </div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="name" className="form-label">
                Nom
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="company"
                name="company"
                className="form-input"
                value={formData.company}
                onChange={handleInputChange}
              />
              <label htmlFor="company" className="form-label">
                Entreprise
              </label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="email" className="form-label">
                Adresse email
              </label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <label htmlFor="message" className="form-label">
                Message
              </label>
            </div>
            <motion.button
              type="submit"
              className="form-submit"
              whileHover={{
                y: -2,
                transition: { duration: 0.3 },
              }}
            >
              <span>Envoyer</span>
              <div className="submit-icon"></div>
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Contact;
