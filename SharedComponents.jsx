/**
 * ============================================================
 * components/Banner.jsx — Bannière image décorative
 * ============================================================
 *
 * Utilisée sur toutes les pages intérieures.
 * Props :
 *   src {string} — URL ou import de l'image
 * ============================================================
 */

import React from 'react';

export function Banner({ src }) {
  return (
    <div className="banner">
      <img src={src} alt="Bannière décorative" />
    </div>
  );
}

/**
 * ============================================================
 * components/PageTitle.jsx — Titre centré + séparateur bleu
 * ============================================================
 *
 * Props :
 *   title    {string}  — titre h1
 *   subtitle {string}  — sous-titre optionnel (accepte du HTML via dangerouslySetInnerHTML)
 * ============================================================
 */
export function PageTitle({ title, subtitle }) {
  return (
    <>
      <div className="text-center py-4 px-3">
        <h1 className="fw-bold">{title}</h1>
        {subtitle && (
          <p
            className="text-muted"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
      </div>
      {/* Séparateur bleu — défini dans custom.css */}
      <div className="title-line"></div>
    </>
  );
}
