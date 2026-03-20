/**
 * ============================================================
 * pages/Services.jsx — Page "Mon offre de services"
 * ============================================================
 *
 * Affiche 3 cartes Bootstrap générées depuis data.services.
 *
 * Structure Bootstrap :
 *   <Banner />
 *   <PageTitle />
 *   .container
 *     .row.row-cols-1.row-cols-md-2.row-cols-lg-3.g-4
 *       .col > .card.h-100
 * ============================================================
 */

import React from 'react';
import { services } from '../data';
import { Banner, PageTitle } from '../components/SharedComponents';
import bannerImg from '../images/banner.jpg';

// ─── Carte de service individuelle ───────────────────────────
function ServiceCard({ icon, title, desc }) {
  return (
    <div className="col">
      <div className="card h-100 text-center border shadow-sm">
        <div className="card-body py-4 px-3">
          {/* Icône — emoji ou symbole texte */}
          <div className="fs-1 text-primary mb-3" aria-hidden="true">
            {icon}
          </div>
          <h3 className="card-title h5 fw-bold mb-3">{title}</h3>
          <p className="card-text text-muted small">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <Banner src={bannerImg} />
      <PageTitle
        title="Mon offre de services"
        subtitle="Voici les prestations sur lesquelles je peux intervenir"
      />

      <div className="container my-5">
        {/*
          row-cols-1     → 1 colonne mobile
          row-cols-md-2  → 2 colonnes tablette
          row-cols-lg-3  → 3 colonnes desktop
        */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
}
