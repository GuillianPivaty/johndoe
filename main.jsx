/**
 * ============================================================
 * main.jsx — Point d'entrée React 18 (convention Vite)
 * ============================================================
 *
 * Monte le composant racine <App /> dans le div #root
 * défini dans public/index.html.
 *
 * React 18 : utilise createRoot() (concurrent mode).
 * React.StrictMode : active les avertissements en développement.
 * ============================================================
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ── Import des styles ─────────────────────────────────────────
// Bootstrap CSS — chargé depuis node_modules via npm
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap Icons — icônes vectorielles
import 'bootstrap-icons/font/bootstrap-icons.css';

// Bootstrap JS — nécessaire pour Navbar collapse et Accordion
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Surcharges et styles personnalisés (hero, navbar sombre, etc.)
import './custom.css';

// ── Montage de l'application ──────────────────────────────────
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // StrictMode : double rendu en développement pour détecter
  // les effets de bord non idempotents (désactivé en production)
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
