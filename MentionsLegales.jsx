/**
 * ============================================================
 * pages/MentionsLegales.jsx — Mentions légales
 * ============================================================
 *
 * Accordion Bootstrap 5 natif via attributs data-bs-*.
 * Bootstrap JS gère l'animation et le comportement exclusif.
 *
 * Structure Bootstrap :
 *   <PageTitle />
 *   .container
 *     .accordion#accordionMentions
 *       .accordion-item  × 3
 *         .accordion-header
 *           .accordion-button (data-bs-toggle="collapse")
 *         .accordion-collapse.collapse
 *           .accordion-body
 * ============================================================
 */

import React from 'react';
import { PageTitle } from '../components/SharedComponents';

// ─── Panneau d'accordion individuel ──────────────────────────
// Props :
//   id       {string}  — identifiant unique (ex. "acc-0")
//   parentId {string}  — id du conteneur (pour fermer les autres)
//   title    {string}  — libellé de l'en-tête
//   children {ReactNode} — contenu du corps
function AccordionPanel({ id, parentId, title, children }) {
  return (
    <div className="accordion-item">

      <h2 className="accordion-header">
        {/*
          .accordion-button.collapsed → fermé par défaut
          data-bs-toggle / data-bs-target → Bootstrap JS
          data-bs-parent → ferme les autres panneaux
        */}
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
        >
          {title}
        </button>
      </h2>

      {/*
        .accordion-collapse.collapse → masqué par défaut
        data-bs-parent → référence le conteneur parent pour le comportement exclusif
      */}
      <div
        id={id}
        className="accordion-collapse collapse"
        data-bs-parent={`#${parentId}`}
      >
        <div className="accordion-body">
          {children}
        </div>
      </div>

    </div>
  );
}

export default function MentionsLegales() {

  const accordionId = 'accordionMentions';

  return (
    <>
      <PageTitle title="Mentions légales" />

      <div className="container my-5">
        <div className="accordion" id={accordionId}>

          {/* ── Panneau 1 : Éditeur du site ── */}
          <AccordionPanel id="acc-0" parentId={accordionId} title="Editeur du site">
            <h3 className="h6 fw-bold mb-3">John Doe</h3>
            <p className="mb-1">
              <i className="bi bi-house me-2 text-primary"></i>
              40 rue Laure Diebold
            </p>
            <p className="mb-1">
              <i className="bi bi-geo-alt me-2 text-primary"></i>
              69009 Lyon, France
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone me-2 text-primary"></i>
              10 20 30 40 50
            </p>
            <p className="mb-0">
              <i className="bi bi-envelope me-2 text-primary"></i>
              john.doe@gmail.com
            </p>
          </AccordionPanel>

          {/* ── Panneau 2 : Hébergeur ── */}
          <AccordionPanel id="acc-1" parentId={accordionId} title="Hébergeur">
            <h3 className="h6 fw-bold mb-2">alwaysdata</h3>
            <p className="mb-1">
              <i className="bi bi-building me-2 text-primary"></i>
              91 Rue du Faubourg Saint-Honoré, 75008 Paris
            </p>
            <p className="mb-0">
              <i className="bi bi-globe me-2 text-primary"></i>
              <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                www.alwaysdata.com
              </a>
            </p>
          </AccordionPanel>

          {/* ── Panneau 3 : Crédits ── */}
          <AccordionPanel id="acc-2" parentId={accordionId} title="Crédits">
            <h3 className="h6 fw-bold mb-3">Crédits</h3>
            <p>
              Ce site a été réalisé par John Doe, étudiant au{' '}
              <a href="#" target="_blank" rel="noopener noreferrer">
                Centre Européen de formation
              </a>.
            </p>
            <p>
              <em>
                Les images sont libres de droits, obtenues sur{' '}
                <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
                  Pixabay
                </a>.
              </em>
            </p>
            <p className="mb-0">
              <em>
                Favicon fournie par{' '}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Freepik - Flaticon
                </a>.
              </em>
            </p>
          </AccordionPanel>

        </div>
      </div>
    </>
  );
}
