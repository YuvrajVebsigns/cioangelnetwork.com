'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function PresidentMessagePage() {
  return (
    <section className="president-section">
      <div className="president-container">
        <div className="president-header">
          <span className="president-badge">PRESIDENT MESSAGE</span>

          <h1>
            Message From Our <span>President</span>
          </h1>

          <p>
            Inspiring innovation, empowering entrepreneurs, and building the future of technology
            through meaningful collaboration.
          </p>
        </div>

        <div className="president-layout">
          <div className="president-card">
            <div className="president-quote">
              <h2>
                &quot;We believe that as long as we are investing in start-ups, let&apos;s think BIG
                for all opportunities.&quot;
              </h2>
            </div>

            <div className="president-content">
              <p>
                Our goal is to be the first prime source of funding for Technology Entrepreneurs at
                the <strong>Seed Stage</strong>. Today, angel investments have evolved into a far
                more structured process with rigorous due diligence, strategic mentoring, and
                long-term value creation.
              </p>

              <p>
                We strive to activate technology start-ups within the enterprise buyer community by
                connecting visionary entrepreneurs with experienced CIOs, technology leaders, and
                investors who understand innovation and enterprise transformation.
              </p>

              <div className="president-profile">
                <div className="profile-image">
                  <Image
                    src="/assets/team/Anoop-Mathur.png"
                    alt="Anoop Mathur"
                    fill
                    sizes="180px"
                    className="profile-photo"
                  />
                </div>

                <div className="profile-info">
                  <h3>Anoop Mathur</h3>
                  <span>Founder, CIO Angel Network (CAN)</span>
                </div>
              </div>

              <p>
                At CAN, we work closely with CIO Angels through a detailed evaluation process that
                helps identify scalable technologies capable of delivering exponential returns on
                investment. Every opportunity is carefully assessed to ensure long-term business
                value for entrepreneurs as well as investors.
              </p>

              <p>
                We facilitate founders, thinkers, and innovators step-by-step, activity-by-activity,
                by bringing together business expertise, strategic guidance, mentorship, and funding
                support to build sustainable growth-focused ventures.
              </p>

              <p>
                CAN&apos;s mission is to create wealth for its investor members by leveraging the
                cumulative multiplier effect of a powerful technology leadership network.
              </p>

              <div className="president-ending">
                <h2>&quot;Until we enjoy an Exit, we angel investors are just Donors.&quot;</h2>
              </div>
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
              Connect with our team to discuss startup investment, funding requirements, business
              growth and opportunities within the CIO Angel Network.
            </p>

            <div className="valuation-enquiry-points">
              <div className="valuation-enquiry-point">
                <span aria-hidden="true">01</span>

                <p>Understand your startup&apos;s investment readiness.</p>
              </div>

              <div className="valuation-enquiry-point">
                <span aria-hidden="true">02</span>

                <p>Explore strategic mentoring and funding opportunities.</p>
              </div>

              <div className="valuation-enquiry-point">
                <span aria-hidden="true">03</span>

                <p>Connect with experienced CIOs, CXOs and angel investors.</p>
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

        <br />

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

        <div className="president-back">
          <Link href="/" className="president-btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
