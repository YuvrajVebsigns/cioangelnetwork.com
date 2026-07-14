'use client';

import Link from 'next/link';
import Image from 'next/image';

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
              the <strong>Seed Stage</strong>. Today, angel investments have evolved into a far more
              structured process with rigorous due diligence, strategic mentoring, and long-term
              value creation.
            </p>

            <p>
              We strive to activate technology start-ups within the enterprise buyer community by
              connecting visionary entrepreneurs with experienced CIOs, technology leaders, and
              investors who understand innovation and enterprise transformation.
            </p>

            <div className="president-profile">
              <div
                className="profile-image"
                style={{
                  position: 'relative',
                  width: '180px',
                  height: '180px',
                }}
              >
                <Image
                  src="/assets/team/Anoop-Mathur.png"
                  alt="Anoop Mathur"
                  fill
                  style={{
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
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
              investment. Every opportunity is carefully assessed to ensure long-term business value
              for entrepreneurs as well as investors.
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

        <div className="president-back">
          <Link href="/" className="president-btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
