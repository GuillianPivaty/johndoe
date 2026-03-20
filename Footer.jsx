/**
 * ============================================================
 * components/Footer.jsx — Pied de page Bootstrap 3 colonnes
 * ============================================================
 *
 * Structure Bootstrap :
 *   <footer.footer-jd>
 *     .container
 *       .row.g-4
 *         .col-lg-4.col-md-6  → coordonnées + réseaux sociaux
 *         .col-lg-4.col-md-6  → liens utiles
 *         .col-lg-4           → dernières réalisations
 * ============================================================
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { navLinks, projects } from '../data';

// Labels français pour les liens de navigation
const labelsFr = {
  '/'                 : 'Accueil',
  '/services'         : 'Services',
  '/portfolio'        : 'Portfolio',
  '/contact'          : 'Me contacter',
  '/mentions-legales' : 'Mentions légales',
};

export default function Footer() {

  const navigate = useNavigate();

  const handleClick = (path, e) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-jd">
      <div className="container">
        <div className="row g-4">

          {/* Colonne 1 : coordonnées */}
          <div className="col-lg-4 col-md-6">
            <h5>John Doe</h5>
            <p>
              40 rue Laure Diebold<br />
              69009 Lyon, France<br />
              10 20 30 40 50<br />
              john.doe@gmail.com
            </p>
            <div className="footer-social mt-3">
              <a href="#" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" title="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : liens utiles */}
          <div className="col-lg-4 col-md-6">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              {navLinks.map((link) => (
                <li key={link.path} className="mb-2">
                  <a
                    href={link.path}
                    onClick={(e) => handleClick(link.path, e)}
                  >
                    {labelsFr[link.path]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : dernières réalisations */}
          <div className="col-lg-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              {projects.map((p) => (
                <li key={p.imgKey} className="mb-2">
                  <a
                    href="/portfolio"
                    onClick={(e) => handleClick('/portfolio', e)}
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
