/**
 * ============================================================
 * data.js — Données centralisées du site
 * ============================================================
 *
 * Ce module exporte toutes les données statiques du portfolio.
 * Compatible CRA / Vite : utilise export ES6, pas window.
 * ============================================================
 */

// ── Projets du portfolio ──────────────────────────────────────
// imgKey correspond au nom du fichier image dans /src/images/
export const projects = [
  {
    imgKey : 'fresh-food',
    title  : 'Fresh Food',
    desc   : 'Site de vente de produits frais en ligne',
    tech   : 'Site réalisé avec PHP et MySQL',
  },
  {
    imgKey : 'restaurant-japonais',
    title  : 'Restaurant Akira',
    desc   : 'Site de vente de produits frais en ligne',
    tech   : 'Site réalisé avec WordPress',
  },
  {
    imgKey : 'espace-bien-etre',
    title  : 'Espace bien-être',
    desc   : 'Site de vente de produits frais en ligne',
    tech   : 'Site réalisé avec LARAVEL',
  },
  {
    imgKey : 'seo',
    title  : 'SEO',
    desc   : "Amélioration du référencement d'un site e-commerce",
    tech   : 'Utilisation des outils SEO',
  },
  {
    imgKey : 'coder',
    title  : "Création d'une API",
    desc   : "Création d'une API RESTFULL publique",
    tech   : 'PHP - SYMFONY',
  },
  {
    imgKey : 'screens',
    title  : "Maquette d'un site web",
    desc   : "Création du prototype d'un site",
    tech   : 'Réalisé avec FIGMA',
  },
];

// ── Services proposés ─────────────────────────────────────────
export const services = [
  {
    icon  : '✏️',
    title : 'UX Design',
    desc  : "L'UX Design est une discipline qui consiste à concevoir des produits "
          + "(sites web, applications mobiles, logiciels, objets connectés, etc.) "
          + "en plaçant l'utilisateur au centre des préoccupations. L'objectif est "
          + "de rendre l'expérience utilisateur la plus fluide et agréable possible.",
  },
  {
    icon  : '</>',
    title : 'Développement web',
    desc  : 'Le développement de sites web consiste à créer des sites internet '
          + 'en utilisant des langages de programmation (HTML, CSS, JavaScript, '
          + 'PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).',
  },
  {
    icon  : '🔍',
    title : 'Référencement',
    desc  : "Le référencement naturel (SEO) est une technique qui consiste à "
          + "optimiser un site web pour le faire remonter dans les résultats des "
          + "moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est "
          + "d'attirer un maximum de visiteurs qualifiés sur le site.",
  },
];

// ── Compétences techniques ────────────────────────────────────
export const skills = [
  { label: 'HTML5',      percent: 90, cssClass: 'html5'      },
  { label: 'CSS3',       percent: 80, cssClass: 'css3'        },
  { label: 'JAVASCRIPT', percent: 70, cssClass: 'javascript'  },
  { label: 'PHP',        percent: 60, cssClass: 'php'         },
  { label: 'REACT',      percent: 50, cssClass: 'react'       },
];

// ── Coordonnées de contact ────────────────────────────────────
export const contact = {
  name    : 'John Doe',
  address : '40 rue Laure Diebold',
  city    : '69009 Lyon, France',
  phone   : '10 20 30 40 50',
  email   : 'john.doe@gmail.com',
  mapSrc  : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!'
          + '1d2782.564!2d4.8046!3d45.7768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!'
          + '4f13.1!3m3!1m2!1s0x47f4ea4b6c4b8f5f%3A0x0!'
          + '2s40+Rue+Laure+Diebold%2C+69009+Lyon!5e0!3m2!1sfr!2sfr!4v1620000000000',
};

// ── Liens de navigation ───────────────────────────────────────
export const navLinks = [
  { path: '/',                 label: 'HOME'             },
  { path: '/services',         label: 'SERVICES'         },
  { path: '/portfolio',        label: 'PORTFOLIO'        },
  { path: '/contact',          label: 'CONTACT'          },
  { path: '/mentions-legales', label: 'MENTIONS LÉGALES' },
];
