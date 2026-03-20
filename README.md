# Portfolio John Doe

Portfolio multi-pages
---

Le projet consiste à créer et de rendre fonctionnel le site internet d’un futur
développeur Web, comme vous : John DOE.
Il termine sa formation de développeur web au CEF et souhaite pouvoir se présenter sur le
marché de l’emploi.
Les contenus textuels qui vous sont présentés peuvent être modifiés et personnalisés selon vos
besoins. Toutefois, la charte graphique doit être respectée.
Des maquettes vous sont fournies, ainsi qu’un dossier avec des images libres de droits, issues
du site de Pixabay.
Vous pouvez remplacer certaines images par les vôtres, comme la photo de la section « à
propos » et les maquettes de vos réalisations.
Le site doit être travaillé pour le SEO.
Le code doit être valide au regard des normes du W3C

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

```css
body, #root { display: flex; flex-direction: column; min-height: 100vh; }
main        { flex: 1 0 auto; }    /* Grandit pour remplir l'espace */
footer      { flex-shrink: 0; }    /* Ne rétrécit jamais */
```


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
