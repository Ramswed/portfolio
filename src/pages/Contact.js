import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error(
          "EmailJS n'est pas configuré. Veuillez créer un fichier .env avec vos clés (voir .env.example)"
        );
      }

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "Non spécifiée",
          message: formData.message,
          to_name: "Manon Leroux",
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200 || result.text === "OK") {
        setSubmitStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div
              className={`form-group ${
                focusedField === "name" || formData.name ? "focused" : ""
              }`}
            >
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
                required
                disabled={isSubmitting}
              />
              <label htmlFor="name" className="form-label">
                Nom
              </label>
            </div>
            <div
              className={`form-group ${
                focusedField === "company" || formData.company ? "focused" : ""
              }`}
            >
              <input
                type="text"
                id="company"
                name="company"
                className="form-input"
                value={formData.company}
                onChange={handleInputChange}
                onFocus={() => handleFocus("company")}
                onBlur={handleBlur}
                disabled={isSubmitting}
              />
              <label htmlFor="company" className="form-label">
                Entreprise
              </label>
            </div>
            <div
              className={`form-group ${
                focusedField === "email" || formData.email ? "focused" : ""
              }`}
            >
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                required
                disabled={isSubmitting}
              />
              <label htmlFor="email" className="form-label">
                Adresse email
              </label>
            </div>
            <div
              className={`form-group ${
                focusedField === "message" || formData.message ? "focused" : ""
              }`}
            >
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                required
                disabled={isSubmitting}
              ></textarea>
              <label htmlFor="message" className="form-label">
                Message
              </label>
            </div>

            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`form-message ${
                    submitStatus === "success" ? "success" : "error"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <span>
                      ✓ Message envoyé avec succès ! Je vous répondrai bientôt.
                    </span>
                  ) : (
                    <span>
                      ✗ Erreur lors de l'envoi. Veuillez réessayer ou m'envoyer
                      un email directement à{" "}
                      <a href="mailto:ramswed.pro@gmail.com">
                        ramswed.pro@gmail.com
                      </a>
                    </span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              className="form-submit"
              disabled={isSubmitting}
              whileHover={
                !isSubmitting
                  ? {
                      transition: { duration: 0.3 },
                    }
                  : {}
              }
            >
              <span>{isSubmitting ? "Envoi en cours..." : "Envoyer"}</span>
              {!isSubmitting && (
                <svg
                  className="submit-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              )}
              {isSubmitting && <div className="submit-loader"></div>}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Contact;
