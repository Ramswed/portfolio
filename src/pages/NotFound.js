import React from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../usePageMeta";

const NotFound = () => {
  usePageMeta({
    title: "Page introuvable | Manon Leroux",
    description:
      "La page demandee n'existe pas ou a ete deplacee. Retournez au portfolio de Manon Leroux.",
    path: "/404",
  });

  return (
    <main className="main">
      <section className="project-detail">
        <div className="project-container">
          <h1>Page introuvable</h1>
          <p>Le contenu que vous cherchez n'existe pas.</p>
          <Link to="/all-work" className="back-link">
            ← Retour aux projets
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
