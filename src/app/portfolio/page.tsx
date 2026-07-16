'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';

const portfolioCompanies = [
  {
    name: 'InstaSafe',
    image: '/assets/home/instasafe.jpg',
    website: 'https://instasafe.com',
  },
  {
    name: 'Anakage',
    image: '/assets/home/anakage.jpg',
    website: 'https://www.anakage.in/',
  },
  {
    name: 'PayTunes',
    image: '/assets/home/paytune.jpg',
    website: 'https://www.paytunes.in/paytunes/front',
  },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-container">
          <div className="portfolio-layout">
            <div className="portfolio-companies-area">
              <div className="portfolio-section-heading">
                <div className="portfolio-heading-icon">
                  <BriefcaseBusiness size={25} aria-hidden="true" />
                </div>

                <div>
                  <span>Backed by experience</span>
                  <h2>Our Portfolio Companies</h2>
                </div>
              </div>

              <p className="portfolio-introduction">
                We partner with ambitious founders who are building innovative, scalable and
                enterprise-focused technology solutions.
              </p>

              <div className="portfolio-grid">
                {portfolioCompanies.map((company, index) => {
                  const hasWebsite = company.website.startsWith('http');

                  return (
                    <article className="portfolio-card" key={company.name}>
                      <span className="portfolio-card-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div className="portfolio-logo-wrapper">
                        <Image
                          src={company.image}
                          alt={`${company.name} logo`}
                          width={240}
                          height={100}
                          className="portfolio-logo"
                        />
                      </div>

                      <div className="portfolio-card-footer">
                        <h3>{company.name}</h3>

                        {hasWebsite ? (
                          <Link
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${company.name} website`}
                          >
                            <ArrowUpRight size={19} aria-hidden="true" />
                          </Link>
                        ) : (
                          <span
                            className="portfolio-link-disabled"
                            aria-label={`${company.name} website coming soon`}
                            title="Website coming soon"
                          >
                            <ArrowUpRight size={19} aria-hidden="true" />
                          </span>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <aside className="valuation-enquiry-panel">
              <div className="valuation-enquiry-heading">
                <span className="valuation-enquiry-icon" aria-hidden="true">
                  ↗
                </span>

                <div className="valuation-enquiry-title">
                  <span className="valuation-enquiry-label">Need assistance?</span>
                  <h2>Quick Enquiry</h2>
                </div>
              </div>

              <p className="valuation-enquiry-description">
                Connect with our team to discuss investment opportunities, portfolio companies,
                startup funding and strategic mentoring.
              </p>

              <div className="valuation-enquiry-points">
                <div className="valuation-enquiry-point">
                  <span aria-hidden="true">01</span>

                  <p>Explore investment and portfolio opportunities.</p>
                </div>

                <div className="valuation-enquiry-point">
                  <span aria-hidden="true">02</span>

                  <p>Understand the CIO Angel Network investment process.</p>
                </div>

                <div className="valuation-enquiry-point">
                  <span aria-hidden="true">03</span>

                  <p>Connect with experienced CIOs, investors and mentors.</p>
                </div>
              </div>

              <Link href="/contact" className="valuation-enquiry-btn">
                <span>Send an Enquiry</span>

                <span className="valuation-enquiry-btn-icon" aria-hidden="true">
                  →
                </span>
              </Link>

              <p className="valuation-enquiry-note">
                You will be redirected to the contact section below.
              </p>
            </aside>
          </div>

          <div className="portfolio-back">
            <Link href="/">← Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
