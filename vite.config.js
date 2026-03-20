/**
 * vite.config.js — Configuration Vite
 * ============================================================
 *
 * @vitejs/plugin-react : active le support JSX + Fast Refresh.
 *
 * ── historyApiFallback ──────────────────────────────────────
 * INDISPENSABLE pour React Router avec BrowserRouter.
 *
 * Sans cette option :
 *   Recharger la page sur /portfolio → Vite cherche un fichier
 *   /portfolio sur le disque → HTTP 404.
 *
 * Avec cette option :
 *   Toutes les URLs sans fichier correspondant → index.html
 *   React Router lit l'URL et affiche le bon composant.
 * ============================================================
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
    open: true,          // Ouvre le navigateur automatiquement
    historyApiFallback: true, // Redirige toutes les routes → index.html
  },
});
