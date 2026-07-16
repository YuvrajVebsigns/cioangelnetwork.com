'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function MembershipPage() {
  return (
    <section className="membership-section">
      <div className="membership-container">
        <div className="membership-heading">
          <span className="membership-badge">MEMBERSHIP</span>

          <h1>
            CIO Angel Network <span>Membership</span>
          </h1>
        </div>

        <div className="membership-layout">
          <div className="membership-left">
            <div className="membership-intro">
              <p>
                Membership in <strong>CIO Angel Network (CAN)</strong> is a privilege that is
                extended on a periodic basis to individual CIO investors (&quot;Members&quot;) and
                is subject to periodic renewal.
              </p>

              <p>
                CAN is the first members-only network in India specifically created to finance
                early-stage and startup businesses by technology professionals.
              </p>

              <p>
                Decisions regarding approval or denial of membership to any applicant shall be
                governed by the Founding Angels. All decisions are final and are not subject to
                appeal.
              </p>
            </div>

            <div className="membership-grid">
              <article className="membership-card">
                <h3>Individual CIO Members</h3>

                <div className="membership-fee">
                  <span>One Time Registration Fee</span>
                  <strong>₹25,000</strong>
                </div>

                <div className="membership-fee">
                  <span>Annual Fee</span>
                  <strong>₹25,000</strong>
                </div>
              </article>

              <article className="membership-card">
                <h3>Individual Non CIO Members</h3>

                <div className="membership-fee">
                  <span>One Time Registration Fee</span>
                  <strong>₹25,000</strong>
                </div>

                <div className="membership-fee">
                  <span>Annual Fee</span>
                  <strong>₹50,000</strong>
                </div>
              </article>

              <article className="membership-card">
                <h3>Family Offices</h3>

                <div className="membership-fee">
                  <span>One Time Registration Fee</span>
                  <strong>₹25,000</strong>
                </div>

                <div className="membership-fee">
                  <span>Annual Fee</span>
                  <strong>₹100,000</strong>
                </div>
              </article>

              <article className="membership-card">
                <h3>Institutional Members</h3>

                <div className="membership-fee">
                  <span>One Time Registration Fee</span>
                  <strong>₹25,000</strong>
                </div>

                <div className="membership-fee">
                  <span>Annual Fee</span>
                  <strong>₹300,000</strong>
                </div>
              </article>
            </div>

            <div className="membership-status">
              <h2>Membership Status</h2>

              <div className="status-grid">
                <div className="status-card open">
                  <h3>Mumbai</h3>
                  <span>Open</span>
                </div>

                <div className="status-card open">
                  <h3>Delhi</h3>
                  <span>Open</span>
                </div>

                <div className="status-card upcoming">
                  <h3>Bangalore</h3>
                  <span>Opening in 2016</span>
                </div>
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
              Connect with our team to discuss CIO Angel Network membership, registration fees,
              eligibility and membership availability.
            </p>

            <div className="valuation-enquiry-points">
              <div className="valuation-enquiry-point">
                <span aria-hidden="true">01</span>
                <p>Understand the available membership categories.</p>
              </div>

              <div className="valuation-enquiry-point">
                <span aria-hidden="true">02</span>
                <p>Learn about registration and annual membership fees.</p>
              </div>

              <div className="valuation-enquiry-point">
                <span aria-hidden="true">03</span>
                <p>Check membership availability for your city.</p>
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
    </section>
  );
}
