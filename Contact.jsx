/**
 * ============================================================
 * pages/Contact.jsx — Page de contact
 * ============================================================
 *
 * Formulaire React contrôlé (useState) + validation.
 * Feedback via .alert Bootstrap (success / danger).
 * Carte Google Maps responsive (.map-wrapper de custom.css).
 *
 * Structure Bootstrap :
 *   <PageTitle />
 *   .container
 *     .card.shadow-sm
 *       .row.g-4
 *         .col-lg-6 → formulaire (.form-control Bootstrap)
 *         .col-lg-6 → coordonnées + Google Maps
 * ============================================================
 */

import React, { useState } from 'react';
import { PageTitle } from '../components/SharedComponents';
import { contact } from '../data';

export default function Contact() {

  // ── État du formulaire contrôlé (controlled component) ────
  const [form, setForm] = useState({
    nom: '', email: '', tel: '', sujet: '', message: '',
  });

  // null | { type: 'success' | 'error', text: string }
  const [feedback, setFeedback] = useState(null);

  /**
   * handleChange(e)
   * Met à jour uniquement le champ modifié via son attribut name.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Efface le feedback dès que l'utilisateur recommence à taper
    if (feedback) setFeedback(null);
  };

  /**
   * handleSubmit(e)
   * Valide les champs, affiche un .alert Bootstrap et réinitialise.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // ── Règles de validation ──
    const errors = [];
    if (!form.nom.trim())   errors.push('Le nom est obligatoire.');
    if (!form.email.trim()) errors.push("L'email est obligatoire.");
    if (form.email && !form.email.includes('@'))
                            errors.push("L'email n'est pas valide.");
    if (!form.sujet.trim()) errors.push('Le sujet est obligatoire.');
    if (!form.message.trim()) errors.push('Le message est obligatoire.');

    if (errors.length > 0) {
      // Affiche les erreurs dans un .alert-danger Bootstrap
      setFeedback({ type: 'error', text: errors.join(' — ') });
      return;
    }

    // ── Succès (en production : fetch('/api/contact', {...}) ici) ──
    setFeedback({
      type: 'success',
      text: `✅ Message envoyé ! Merci ${form.nom}, nous vous répondrons sous 48h.`,
    });
    // Réinitialise tous les champs du formulaire
    setForm({ nom: '', email: '', tel: '', sujet: '', message: '' });
  };

  return (
    <>
      <PageTitle
        title="Contact"
        subtitle="Pour me contacter en vue d'un entretien ou d'une future collaboration,<br>merci de remplir le formulaire de contact."
      />

      <div className="container mb-5">
        <div className="card shadow-sm p-4">
          <div className="row g-4">

            {/* ── Colonne gauche : formulaire Bootstrap ── */}
            <div className="col-lg-6">
              <h2 className="h4 fw-bold pb-2 border-bottom border-primary mb-4">
                Formulaire de contact
              </h2>

              {/* noValidate : désactive la validation HTML5 native */}
              <form onSubmit={handleSubmit} noValidate>

                {/* Champ Nom — .form-control Bootstrap */}
                <div className="mb-3">
                  <input
                    type="text"
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="form-control"
                    autoComplete="name"
                  />
                </div>

                {/* Champ Email */}
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Votre adresse email"
                    className="form-control"
                    autoComplete="email"
                  />
                </div>

                {/* Champ Téléphone (optionnel) */}
                <div className="mb-3">
                  <input
                    type="tel"
                    name="tel"
                    value={form.tel}
                    onChange={handleChange}
                    placeholder="Votre numéro de téléphone"
                    className="form-control"
                    autoComplete="tel"
                  />
                </div>

                {/* Champ Sujet */}
                <div className="mb-3">
                  <input
                    type="text"
                    name="sujet"
                    value={form.sujet}
                    onChange={handleChange}
                    placeholder="Sujet"
                    className="form-control"
                  />
                </div>

                {/* Champ Message — textarea Bootstrap */}
                <div className="mb-3">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    className="form-control"
                    rows={7}
                  />
                </div>

                {/* Bouton d'envoi Bootstrap */}
                <button type="submit" className="btn btn-primary px-4">
                  Envoyer
                </button>

                {/*
                  Feedback Bootstrap .alert
                  .alert-success → vert Bootstrap (succès)
                  .alert-danger  → rouge Bootstrap (erreurs)
                */}
                {feedback && (
                  <div
                    className={`alert mt-3 ${
                      feedback.type === 'success'
                        ? 'alert-success'
                        : 'alert-danger'
                    }`}
                    role="alert"
                  >
                    {feedback.text}
                  </div>
                )}

              </form>
            </div>

            {/* ── Colonne droite : coordonnées + carte ── */}
            <div className="col-lg-6">
              <h2 className="h4 fw-bold pb-2 border-bottom border-primary mb-4">
                Mes coordonnées
              </h2>

              {/* Infos avec icônes Bootstrap Icons */}
              <h3 className="h5 fw-bold mb-3">{contact.name}</h3>
              <p className="mb-1">
                <i className="bi bi-house me-2 text-primary"></i>
                {contact.address}
              </p>
              <p className="mb-1">
                <i className="bi bi-geo-alt me-2 text-primary"></i>
                {contact.city}
              </p>
              <p className="mb-1">
                <i className="bi bi-telephone me-2 text-primary"></i>
                {contact.phone}
              </p>
              <p className="mb-3">
                <i className="bi bi-envelope me-2 text-primary"></i>
                {contact.email}
              </p>

              {/* Google Maps — .map-wrapper défini dans custom.css */}
              <div className="map-wrapper">
                <iframe
                  title={`Localisation ${contact.name}`}
                  src={contact.mapSrc}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
