/**
 * ============================================================
 * App.jsx — Composant racine avec React Router v6
 * ============================================================
 *
 * Utilise React Router v6 (BrowserRouter + Routes + Route).
 * Plus besoin de gérer manuellement history.pushState ou
 * window.location : React Router s'en charge entièrement.
 *
 * Structure :
 *   <BrowserRouter>         → fournit le contexte de routing
 *     <Nav />               → navigation persistante
 *     <main.page-transition>→ contenu animé (re-monté à chaque route)
 *       <Routes>
 *         <Route path="/" element={<Home />} />
 *         <Route path="/services" ... />
 *         ...
 *     <Footer />            → footer persistant
 *
 * React Router v6 :
 *   - <Routes>    : remplace <Switch> de v5
 *   - <Route>     : déclare une route
 *   - useNavigate : remplace useHistory de v5
 *   - useLocation : accès au path courant
 * ============================================================
 */

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// ── Composants partagés ──────────────────────────────────────
import Nav     from './components/Nav';
import Footer  from './components/Footer';

// ── Pages ────────────────────────────────────────────────────
import Home           from './pages/Home';
import Services       from './pages/Services';
import Portfolio      from './pages/Portfolio';
import Contact        from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';

/**
 * <AppContent />
 * ──────────────────────────────────────────────────────────
 * Composant interne qui contient le layout et les routes.
 * Séparé de <App /> pour pouvoir utiliser useLocation
 * (les hooks React Router ne fonctionnent qu'à l'intérieur
 * de <BrowserRouter>).
 */
function AppContent() {

  // useLocation retourne l'objet location courant.
  // location.pathname est utilisé comme clé de <main> pour
  // forcer le re-montage et relancer l'animation CSS.
  const location = useLocation();

  return (
    <>
      {/* Navigation Bootstrap sticky — persistante entre les pages */}
      <Nav />

      {/*
        <main> avec key={location.pathname} :
        React re-monte ce composant à chaque changement de route,
        relançant ainsi l'animation CSS .page-transition (custom.css).
      */}
      {/*
        flex-grow-1 (Bootstrap) + flex:1 (custom.css) :
        <main> occupe tout l'espace vertical disponible entre
        la navbar et le footer, même quand le contenu est court.
        Résultat : footer toujours collé en bas de la fenêtre.
      */}
      <main
        key={location.pathname}
        className="page-transition flex-grow-1"
        role="main"
      >
        {/*
          <Routes> : conteneur des routes React Router v6.
          Seule la <Route> dont le path correspond à l'URL
          actuelle sera rendue.
        */}
        <Routes>
          {/* Route d'accueil */}
          <Route path="/"                 element={<Home />}            />

          {/* Route services */}
          <Route path="/services"         element={<Services />}        />

          {/* Route portfolio */}
          <Route path="/portfolio"        element={<Portfolio />}       />

          {/* Route contact */}
          <Route path="/contact"          element={<Contact />}         />

          {/* Route mentions légales */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />

          {/*
            Route fallback : toute URL inconnue → accueil.
            path="*" capture tout ce qui ne correspond à aucune route.
          */}
          <Route path="*"                 element={<Home />}            />
        </Routes>
      </main>

      {/* Footer Bootstrap 3 colonnes — persistant */}
      <Footer />
    </>
  );
}

/**
 * <App />
 * ──────────────────────────────────────────────────────────
 * Composant racine exporté.
 * Enveloppe tout dans <BrowserRouter> qui fournit le contexte
 * de routing à tous les composants enfants.
 */
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
