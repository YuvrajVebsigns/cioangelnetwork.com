'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function WhyCanPage() {
  return (
    <section className="why-can-section">
      <div className="why-can-container">
        <div className="why-can-hero">
          <span className="why-can-badge">WHY CAN</span>

          <h1>
            Invest In <span>People</span>, Not Markets
          </h1>

          <p>
            Imagine access to one of the largest networks of technology leaders, CIOs and CXOs
            dedicated to helping entrepreneurs build successful, scalable businesses.
          </p>
        </div>

        <div className="why-can-content">
          <div className="why-can-card">
            <h2>Why CAN?</h2>

            <p>
              Imagine access to the greatest goldmine of technology professionals designed to give
              entrepreneurs the tools, relationships, and mentorship required to accomplish
              ambitious goals. We believe one of the most important success factors for founders is
              access to high-quality angel investors who contribute far more than capital.
            </p>

            <p>
              Through CAN&apos;s extensive CXO network, portfolio companies gain specialized
              knowledge covering technology, enterprise sales, operations, cybersecurity,
              leadership, product strategy, and business growth.
            </p>

            <p>
              As an early-stage technology company, founders work tirelessly to transform ideas into
              high-growth businesses. However, they cannot build successful companies alone. Whether
              they require guidance on refining their business model, connecting with enterprise
              clients, identifying strategic suppliers, or understanding the investment ecosystem,
              CAN provides the support necessary for sustainable growth.
            </p>

            <p>
              Strong idea velocity comes from continuous mentoring, industry expertise, practical
              feedback, and strategic relationships. CAN members help entrepreneurs understand the
              language of scale, sustainable growth, enterprise selling, and investor readiness.
            </p>
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
              Connect with our team to discuss startup valuation, investment readiness, fundraising
              requirements and growth opportunities.
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
      </div>

      <br />
      {/* BOTTOM CONTENT */}

      <div className="deal-bottom-section">
        <div className="deal-bottom-container">
          <p className="deal-bottom-text">
            Entrepreneur&apos;s passionate desire to succeed is not enough to achieve success; it
            needs to be coupled with capital. Spending too much or raising very little capital both
            can end up with running out of money and lead to premature death of an idea.
          </p>

          <Link href="/survival-of-the-richest" className="talk-btn">
            <span>Learn more</span>

            <div className="talk-btn-icon">
              <ArrowUpRight size={18} />
            </div>
          </Link>
        </div>
      </div>
      <div className="president-back">
        <Link href="/" className="president-btn">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
