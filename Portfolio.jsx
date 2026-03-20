/**
 * ============================================================
 * pages/Portfolio.jsx — Page portfolio
 * ============================================================
 *
 * Grille Bootstrap 3×2 de cartes projet.
 * Les images sont importées statiquement (CRA/Vite).
 *
 * Structure Bootstrap :
 *   <Banner />
 *   <PageTitle />
 *   .container
 *     .row.row-cols-1.row-cols-md-2.row-cols-lg-3.g-4
 *       .col > .card.h-100
 *         img.portfolio-card-img  (custom.css : hauteur fixe)
 *         .card-body
 *         .card-footer
 * ============================================================
 */

import React from 'react';
import { projects } from '../data';
import { Banner, PageTitle } from '../components/SharedComponents';

// ── Import de toutes les images de projets ───────────────────
// CRA/Vite copient ces fichiers dans le build et retournent
// leur URL finale (avec hash de cache-busting).
import bannerImg      from '../images/banner.jpg';
import freshFood      from '../images/fresh-food.jpg';
import restaurant     from '../images/restaurant-japonais.jpg';
import espaceBienEtre from '../images/espace-bien-etre.jpg';
import seoImg         from '../images/seo.jpg';
import coderImg       from '../images/coder.jpg';
import screensImg     from '../images/screens.jpg';

// Table de correspondance imgKey → import
const imageMap = {
  'fresh-food'         : freshFood,
  'restaurant-japonais': restaurant,
  'espace-bien-etre'   : espaceBienEtre,
  'seo'                : seoImg,
  'coder'              : coderImg,
  'screens'            : screensImg,
};

// ─── Carte projet individuelle ────────────────────────────────
function ProjectCard({ imgKey, title, desc, tech }) {
  return (
    <div className="col">
      {/* .card.h-100 → hauteur uniforme dans la ligne */}
      <div className="card h-100 shadow-sm d-flex flex-column">

        {/*
          Image du projet
          .portfolio-card-img → custom.css : height:185px, object-fit:cover
        */}
        <img
          src={imageMap[imgKey]}
          alt={`Aperçu : ${title}`}
          className="portfolio-card-img"
          loading="lazy"
        />

        {/* Corps de la carte */}
        <div className="card-body text-center d-flex flex-column flex-grow-1">
          <h3 className="card-title h5 fw-bold mb-2">{title}</h3>
          <p className="card-text text-muted small flex-grow-1">{desc}</p>
          {/* .mt-auto pousse le bouton vers le bas */}
          <div className="mt-auto pt-2">
            <a href="#" className="btn btn-primary btn-sm px-4">
              Voir le site
            </a>
          </div>
        </div>

        {/* Pied de carte : technologie */}
        <div className="card-footer text-center text-muted small">
          {tech}
        </div>

      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <>
      <Banner src={bannerImg} />
      <PageTitle
        title="Portfolio"
        subtitle="Voici quelques-unes de mes réalisations."
      />

      <div className="container mb-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.imgKey}
              imgKey={project.imgKey}
              title={project.title}
              desc={project.desc}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </>
  );
}
