'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

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

        <div className="startup-app-layout">
          <div className="startup-app-left">
            <div className="startup-app-card">
              <p>
                CAN has established an efficient process for entrepreneurs to raise capital. For
                startups that attract the interest of CAN investor members, the next steps,
                including documentation, due diligence and term sheet discussions, will be managed
                by the CAN Secretariat.
              </p>

              <p>
                As an entrepreneur, please submit your information deck along with supporting
                documents for review by CAN investor members. Kindly include the following
                information in your presentation.
              </p>

              <div className="application-grid">
                {applicationSteps.map((item, index) => (
                  <div className="application-item" key={item}>
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

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@core-mediagroup.com&su=Enquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="startup-email-btn"
                >
                  bindia@cioangelnetwork.com
                </a>
              </div>
            </div>
            <br />
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
              Connect with our team to understand the startup application process, documentation
              requirements, investor readiness and pitch deck submission.
            </p>

            <div className="valuation-enquiry-points">
              <div className="valuation-enquiry-point">
                <span aria-hidden="true">01</span>
                <p>Understand the CAN startup application process.</p>
              </div>

              <div className="valuation-enquiry-point">
                <span aria-hidden="true">02</span>
                <p>Prepare your pitch deck and supporting documents.</p>
              </div>

              <div className="valuation-enquiry-point">
                <span aria-hidden="true">03</span>
                <p>Connect with the CAN Secretariat for application guidance.</p>
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
        {/* BOTTOM CONTENT */}

        <div className="deal-bottom-section">
          <div className="deal-bottom-container">
            <p className="deal-bottom-text">
              Entrepreneur&apos;s passionate desire to succeed is not enough to achieve success; it
              needs to be coupled with capital. Spending too much or raising very little capital
              both can end up with running out of money and lead to premature death of an idea.
            </p>

            <Link href="/survival-of-the-richest" className="talk-btn">
              <span>Learn more</span>

              <div className="talk-btn-icon">
                <ArrowUpRight size={18} />
              </div>
            </Link>
          </div>
        </div>
        <br />

        <Link href="/" className="startup-back-btn">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
