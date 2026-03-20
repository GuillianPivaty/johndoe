# Portfolio John Doe — React + Bootstrap 5 (v7)

Portfolio multi-pages en **React 18 + JSX + Bootstrap 5**, bundlé avec **Vite**.

Corrections v7 :
- ✅ Footer correctement positionné en bas sur les pages courtes
- ✅ Menu hamburger ne se superpose plus au hero/bannière sur mobile et tablette

---

## Installation et lancement

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## Structure du projet

```
portfolio-johndoe/
│
├── index.html               ← À LA RACINE (obligatoire pour Vite)
├── vite.config.js           ← historyApiFallback pour React Router
├── package.json
│
├── public/                  ← Assets statiques (favicon, etc.)
│
└── src/
    ├── main.jsx             ← Point d'entrée React 18 (createRoot)
    ├── App.jsx              ← BrowserRouter + Routes + Nav + Footer
    ├── data.js              ← Données centralisées
    ├── custom.css           ← Surcharges Bootstrap
    │
    ├── images/              ← 9 images importées dans les composants
    │
    ├── components/
    │   ├── Nav.jsx          ← Navbar Bootstrap + React Router
    │   ├── Footer.jsx       ← Footer 3 colonnes
    │   └── SharedComponents.jsx  ← Banner + PageTitle
    │
    └── pages/
        ├── Home.jsx
        ├── Services.jsx
        ├── Portfolio.jsx
        ├── Contact.jsx
        └── MentionsLegales.jsx
```

---

## Corrections CSS appliquées

### Footer toujours en bas (sticky footer)

```css
body, #root { display: flex; flex-direction: column; min-height: 100vh; }
main        { flex: 1 0 auto; }    /* Grandit pour remplir l'espace */
footer      { flex-shrink: 0; }    /* Ne rétrécit jamais */
```

### Menu hamburger ne se superpose plus au hero

```css
@media (max-width: 991.98px) {
  .navbar-jd .navbar-collapse {
    position: static;   /* Dans le flux normal → repousse le contenu */
    background-color: var(--jd-dark);
  }
  .navbar-jd > .container-fluid {
    flex-wrap: wrap;    /* Le collapse passe à la ligne sous la navbar */
  }
}
```
