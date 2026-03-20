/**
 * ============================================================
 * components/Nav.jsx — Barre de navigation Bootstrap
 * ============================================================
 *
 * Navbar Bootstrap 5 sticky avec collapse mobile natif.
 * Utilise React Router v6 (useLocation, useNavigate).
 *
 * Structure Bootstrap :
 *   <nav.navbar.navbar-expand-lg.navbar-jd.sticky-top>
 *     .navbar-brand       → logo
 *     .navbar-toggler     → hamburger Bootstrap JS
 *     .navbar-collapse    → liens desktop
 *       .navbar-nav
 *         .nav-link       → chaque lien
 *
 * Props : aucune (lit le path via useLocation)
 * ============================================================
 */

import React, { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navLinks } from '../data';

export default function Nav() {

  const navigate  = useNavigate();   // Hook React Router pour naviguer
  const location  = useLocation();   // Hook React Router pour le path actuel
  const currentPath = location.pathname;

  /**
   * handleClick(path, e)
   * Navigue vers le chemin via React Router et ferme le menu Bootstrap.
   */
  const handleClick = useCallback((path, e) => {
    e.preventDefault();

    // ── Ferme le collapse Bootstrap mobile ──
    // Bootstrap expose l'instance via bootstrap.Collapse
    const collapseEl = document.getElementById('navbarContent');
    if (collapseEl && window.bootstrap) {
      const bsCollapse = window.bootstrap.Collapse.getInstance(collapseEl);
      if (bsCollapse) bsCollapse.hide();
    }

    // React Router gère la navigation (pas de rechargement de page)
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    /*
     * .navbar-jd     → couleur sombre définie dans custom.css
     * .sticky-top    → reste en haut lors du scroll (Bootstrap)
     * .navbar-expand-lg → collapse sous lg (< 992px)
     */
    <nav className="navbar navbar-expand-lg navbar-jd sticky-top">
      <div className="container-fluid px-4">

        {/* Logo */}
        <a
          className="navbar-brand"
          href="/"
          onClick={(e) => handleClick('/', e)}
        >
          JOHN DOE
        </a>

        {/*
          Bouton hamburger Bootstrap
          data-bs-toggle / data-bs-target → gérés par Bootstrap JS
        */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Basculer la navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens de navigation — dépliables sur mobile */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto gap-lg-3">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <a
                  className={`nav-link${currentPath === link.path ? ' active' : ''}`}
                  href={link.path}
                  onClick={(e) => handleClick(link.path, e)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}
