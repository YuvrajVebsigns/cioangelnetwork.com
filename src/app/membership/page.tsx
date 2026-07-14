'use client';

import Link from 'next/link';

export default function MembershipPage() {
  return (
    <section className="membership-section">
      <div className="membership-container">
        <div className="membership-heading">
          <span className="membership-badge">MEMBERSHIP</span>

          <h1>
            Join the <span>CIO Angel Network</span>
          </h1>

          <p>
            Membership in CIO Angel Network (CAN) is a privilege extended to selected technology
            leaders, investors and institutions committed towards building the startup ecosystem.
          </p>
        </div>

        <div className="membership-intro">
          <p>
            Membership in <strong>CIO Angel Network (CAN)</strong> is granted on a periodic basis
            and is subject to renewal. CAN is India&apos;s first exclusive members-only angel
            network created specifically to finance early-stage and technology startups. Membership
            approvals are solely governed by the Founding Angels, and all decisions are final.
          </p>
        </div>

        <div className="membership-grid">
          <div className="membership-card">
            <h3>Individual CIO</h3>

            <div className="price">
              ₹25,000
              <span>One Time Registration</span>
            </div>

            <p>Annual Fee</p>

            <h4>₹25,000</h4>
          </div>

          <div className="membership-card">
            <h3>Individual Non CIO</h3>

            <div className="price">
              ₹25,000
              <span>One Time Registration</span>
            </div>

            <p>Annual Fee</p>

            <h4>₹50,000</h4>
          </div>

          <div className="membership-card">
            <h3>Family Offices</h3>

            <div className="price">
              ₹25,000
              <span>One Time Registration</span>
            </div>

            <p>Annual Fee</p>

            <h4>₹100,000</h4>
          </div>

          <div className="membership-card">
            <h3>Institutional</h3>

            <div className="price">
              ₹25,000
              <span>One Time Registration</span>
            </div>

            <p>Annual Fee</p>

            <h4>₹300,000</h4>
          </div>
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
              <span>Opening Soon</span>
            </div>
          </div>
        </div>

        <div className="membership-form">
          <h2>Quick Enquiry</h2>

          <form>
            <div className="form-grid">
              <input type="text" placeholder="Full Name *" />

              <input type="text" placeholder="Company *" />

              <input type="tel" placeholder="Phone *" />

              <input type="email" placeholder="Email *" />
            </div>

            <textarea rows={6} placeholder="Message *"></textarea>

            <button type="submit">Send Enquiry</button>
          </form>
        </div>

        <div className="membership-cta">
          <p>
            Entrepreneur&apos;s passionate desire to succeed is not enough to achieve success. It
            must be supported with the right capital at the right time. Raising too much or too
            little funding can both become obstacles to long-term growth.
          </p>

          <Link href="/startup-valuations">Learn More →</Link>
        </div>
      </div>
    </section>
  );
}
