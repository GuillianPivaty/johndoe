/**
 * ============================================================
 * pages/Home.jsx — Page d'accueil
 * ============================================================
 *
 * Sections :
 *   1. Hero plein écran (custom.css)
 *   2. À propos + Compétences (Bootstrap .card + .progress)
 *
 * Utilise useNavigate (React Router) pour le bouton CTA.
 * Importe les images directement (CRA/Vite gère le bundling).
 * ============================================================
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { skills } from '../data';

// ── Import des images (CRA/Vite les copie dans le build) ─────
import heroBg    from '../images/hero-bg.jpg';
import aboutImg  from '../images/john-doe-about.jpg';

// ─── Composant : <SkillBar /> ─────────────────────────────────
// Barre de progression Bootstrap .progress.
// Props : label, percent, cssClass
function SkillBar({ label, percent, cssClass }) {
  return (
    <div className="mb-3">
      {/* Label + pourcentage sur la même ligne */}
      <div className="d-flex justify-content-between mb-1">
        <small className="fw-semibold text-dark">{label}</small>
        <small className="text-muted">{percent}%</small>
      </div>
      {/*
        .progress        → conteneur gris Bootstrap
        .progress-bar    → barre colorée Bootstrap
        Les couleurs (html5, css3…) sont définies dans custom.css
      */}
      <div className="progress" style={{ height: '8px' }}>
        <div
          className={`progress-bar skill-bar-fill ${cssClass}`}
          role="progressbar"
          style={{ width: `${percent}%` }}
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

// ─── Page d'accueil ───────────────────────────────────────────
export default function Home() {

  // useNavigate → React Router v6 pour naviguer programmatiquement
  const navigate = useNavigate();

  return (
    <>
      {/* ══ 1. HERO PLEIN ÉCRAN ══ */}
      <section className="hero-full">
        {/* Image de fond */}
        <img className="hero-bg" src={heroBg} alt="Développeur devant ses écrans" />
        {/* Overlay sombre pour la lisibilité */}
        <div className="hero-overlay" />
        {/* Texte centré */}
        <div className="hero-text">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          {/* Bouton Bootstrap .btn-danger → navigue vers /portfolio */}
          <button
            className="btn btn-danger mt-4 px-4 py-2 fw-semibold"
            onClick={() => {
              navigate('/portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* ══ 2. À PROPOS + COMPÉTENCES ══ */}
      <div className="container my-5">
        {/* .card Bootstrap avec ombre légère */}
        <div className="card shadow-sm p-4">
          <div className="row g-4">

            {/* Colonne gauche : À propos */}
            <div className="col-lg-6">
              <h2 className="fw-bold pb-2 border-bottom border-primary mb-3">
                A propos
              </h2>
              {/* Photo — importée en haut du fichier */}
              <img
                src={aboutImg}
                alt="John Doe au travail"
                className="img-fluid rounded mb-3"
                style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
              />
              <p className="text-muted small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex delectus
                reiciendis impedit aut iure enim placeat? Natus, neque at?
              </p>
              <p className="text-muted small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex delectus
                reiciendis impedit aut iure enim placeat? Natus, neque at?
              </p>
              <p className="text-muted small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex delectus
                reiciendis impedit aut iure enim placeat? Natus, neque at?
              </p>
            </div>

            {/* Colonne droite : compétences */}
            <div className="col-lg-6">
              <h2 className="fw-bold pb-2 border-bottom border-primary mb-3">
                Mes compétences
              </h2>
              {/* Barres générées depuis data.skills */}
              {skills.map((skill) => (
                <SkillBar
                  key={skill.label}
                  label={skill.label}
                  percent={skill.percent}
                  cssClass={skill.cssClass}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
