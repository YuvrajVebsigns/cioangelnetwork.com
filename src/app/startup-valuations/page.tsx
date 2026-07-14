'use client';

import Link from 'next/link';

export default function StartupValuationsPage() {
  return (
    <main className="startup-valuations-page">
      <section className="startup-valuations-section">
        <div className="startup-valuations-container">
          <header className="startup-heading">
            <span className="startup-badge">Startup Valuations</span>

            <h1>
              Understanding <span>Start-up Valuations</span>
            </h1>

            <p>
              Valuation is more than just a number. It forms the foundation of investment decisions,
              equity ownership, fundraising strategy and long-term business growth.
            </p>
          </header>

          <div className="startup-valuations-layout">
            <article className="valuation-card">
              <div className="valuation-card-heading">
                <span className="valuation-card-number">01</span>

                <div>
                  <span className="valuation-card-label">Valuation Insights</span>

                  <h2>Understanding Start-up Valuations</h2>
                </div>
              </div>

              <div className="valuation-card-content">
                <p>
                  Start-up valuations are difficult because there is no single formula that
                  accurately determines what a young company is worth. Unlike established businesses
                  with predictable revenue and assets, start-ups are valued on future potential,
                  innovation, market opportunity and the capabilities of the founding team.
                </p>

                <p>
                  Entrepreneurs are naturally optimistic and passionate about their ventures, often
                  placing high expectations on company valuation. However, valuation forms the basis
                  of investor return on investment, making it one of the most important and
                  challenging topics during fundraising discussions.
                </p>

                <p>
                  Both entrepreneurs and angel investors carefully evaluate how much equity will be
                  exchanged for capital. A higher valuation does not automatically represent greater
                  success. Seed-stage investments should be driven by the amount of capital required
                  to achieve the company&apos;s next meaningful milestone.
                </p>

                <blockquote className="valuation-quote">
                  A strong valuation balances the founder&apos;s ambition with market realities,
                  capital requirements and future growth potential.
                </blockquote>

                <p>
                  Both overfunding and underfunding can negatively affect a startup. Businesses that
                  become cash-flow positive early generally have stronger negotiating power, while
                  companies with high burn rates often face greater valuation pressure.
                </p>

                <p>
                  Unrealistic valuation expectations remain one of the biggest obstacles between
                  founders and investors. Inflated valuations can result in future down rounds when
                  ambitious growth targets are not achieved, potentially diluting founder ownership
                  and reducing investor confidence.
                </p>

                <p>
                  Entrepreneurs should focus on securing the right amount of capital from the right
                  investors rather than simply maximizing valuation. Strategic investors may also
                  provide mentorship, market access, business relationships and long-term guidance.
                </p>

                <p>
                  Low valuations can create problems as well. When founders accept a valuation that
                  is too low, they may surrender more equity than necessary. Founders should remain
                  optimistic about their vision while staying realistic about financial projections
                  and capital requirements.
                </p>

                <p>
                  Angel investors understand that startups with insufficient funding may struggle
                  before reaching their next milestone. Experienced investors therefore encourage
                  entrepreneurs to revisit financial plans and raise an appropriate amount of
                  capital.
                </p>

                <p>
                  Angel capital is generally patient capital. Its valuation approach considers
                  market opportunity, founder capability, customer traction, industry sector,
                  competitive advantage, financial planning and capital requirements.
                </p>

                <p>
                  Ultimately, valuing a seed-stage startup is not an exact science. It combines
                  business fundamentals, investor experience, market sentiment, founder potential,
                  negotiation and long-term vision.
                </p>

                <div className="valuation-highlight">
                  <strong>Valuation of a seed-stage start-up is an educated estimate.</strong>
                </div>
              </div>
            </article>

            <aside className="valuation-enquiry-panel">
              <div className="valuation-enquiry-heading">
                <span className="valuation-enquiry-icon" aria-hidden="true">
                  ↗
                </span>

                <div>
                  <span className="valuation-enquiry-label">Need assistance?</span>

                  <h2>Quick Enquiry</h2>
                </div>
              </div>

              <p className="valuation-enquiry-description">
                Connect with our team to discuss startup valuation, investment readiness,
                fundraising requirements and growth opportunities.
              </p>

              <div className="valuation-enquiry-points">
                <div className="valuation-enquiry-point">
                  <span aria-hidden="true">01</span>
                  <p>Understand your startup&apos;s investment readiness.</p>
                </div>

                <div className="valuation-enquiry-point">
                  <span aria-hidden="true">02</span>
                  <p>Evaluate realistic capital and equity requirements.</p>
                </div>

                <div className="valuation-enquiry-point">
                  <span aria-hidden="true">03</span>
                  <p>Connect with the CIO Angel Network community.</p>
                </div>
              </div>

              <Link href="#contact-section" className="valuation-enquiry-btn">
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
        </div>
      </section>

      <section className="startup-contact-section">
        <div className="startup-contact-content">
          <span className="startup-contact-label">Connect with CIO Angel Network</span>

          <h2>
            Looking for the Right
            <span> Start-up Valuation?</span>
          </h2>

          <p>
            Whether you are preparing for your first angel round or refining your fundraising
            strategy, our investor community can help you understand valuation, capital
            requirements, investment readiness and long-term growth planning.
          </p>

          <div className="startup-contact-actions">
            <Link href="#contact-section" className="startup-contact-btn">
              <span>Contact Our Team</span>

              <span className="startup-contact-arrow" aria-hidden="true">
                →
              </span>
            </Link>

            <Link href="/join" className="startup-secondary-btn">
              Join CIO Angel Network
            </Link>
          </div>
        </div>
      </section>

      <div className="startup-back">
        <Link href="/" className="startup-back-btn">
          <span aria-hidden="true">←</span>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
