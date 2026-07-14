'use client';

import Link from 'next/link';

const applicationSteps = [
  'Basic Information - Company & Team',
  'Product & IP Basics',
  'Market Opportunity & Competition',
  'Financial Data & Metrics',
  'Fund Utilisation',
  'Key Documents, Testimonials & Customers',
  'Funding Ask, Valuation & Exit Strategy',
];

export default function StartupApplicationPage() {
  return (
    <section className="startup-app-section">
      <div className="startup-app-container">
        <div className="startup-app-header">
          <span className="startup-app-badge">START-UP APPLICATION</span>

          <h1>
            Startup <span>Applications</span>
          </h1>

          <h3>&quot;Got an ingenious idea, need funding?&quot;</h3>
        </div>

        <div className="startup-app-card">
          <p>
            CAN has established an efficient process for entrepreneurs to raise capital. For
            startups that attract the interest of CAN investor members, the next steps including
            documentation, due diligence, and term sheet discussions will be managed by the CAN
            Secretariat.
          </p>

          <p>
            As an entrepreneur, please submit your information deck along with supporting documents
            for review by CAN investor members. Kindly include the following information in your
            presentation.
          </p>

          <div className="application-grid">
            {applicationSteps.map((item, index) => (
              <div className="application-item" key={index}>
                <div className="application-number">{String(index + 1).padStart(2, '0')}</div>

                <div className="application-content">
                  <h4>{item}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="startup-email-box">
            <h3>Submit Your Pitch Deck</h3>

            <p>Email your startup presentation and supporting documents to</p>

            <a href="mailto:bindia@cioangelnetwork.com" className="startup-email-btn">
              bindia@cioangelnetwork.com
            </a>
          </div>
        </div>

        <div className="startup-back">
          <Link href="/" className="startup-back-btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
