'use client';

import Link from 'next/link';

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

        <div className="why-can-card">
          <h2>Why CAN?</h2>

          <p>
            Imagine access to the greatest goldmine of technology professionals designed to give
            entrepreneurs the tools, relationships, and mentorship required to accomplish ambitious
            goals. We believe one of the most important success factors for founders is access to
            high-quality angel investors who contribute far more than capital.
          </p>

          <p>
            Through CAN&apos;s extensive CXO network, portfolio companies gain specialized knowledge
            covering technology, enterprise sales, operations, cybersecurity, leadership, product
            strategy, and business growth.
          </p>

          <p>
            As an early-stage technology company, founders work tirelessly to transform ideas into
            high-growth businesses. However, they cannot build successful companies alone. Whether
            they require guidance on refining their business model, connecting with enterprise
            clients, identifying strategic suppliers, or understanding the investment ecosystem, CAN
            provides the support necessary for sustainable growth.
          </p>

          <p>
            Strong idea velocity comes from continuous mentoring, industry expertise, practical
            feedback, and strategic relationships. CAN members help entrepreneurs understand the
            language of scale, sustainable growth, enterprise selling, and investor readiness.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>🤝 Mentorship</h3>
            <p>Guidance from experienced CIOs, CTOs and enterprise leaders.</p>
          </div>

          <div className="feature-card">
            <h3>💰 Smart Capital</h3>
            <p>Funding supported by strategic mentoring and business experience.</p>
          </div>

          <div className="feature-card">
            <h3>🌐 Enterprise Network</h3>
            <p>Access to customers, partners, suppliers and industry experts.</p>
          </div>

          <div className="feature-card">
            <h3>📈 Scale Faster</h3>
            <p>Learn how successful companies achieve sustainable growth.</p>
          </div>
        </div>

        <div className="cta-card">
          <h2>Apply for CAN Pitching Opportunity</h2>

          <p>
            Join CAN and connect with experienced technology leaders who can help transform your
            startup into a scalable enterprise.
          </p>

          <Link href="/start-up-application" className="cta-btn">
            Apply Now
          </Link>
        </div>

        <div className="enquiry-card">
          <h2>Quick Enquiry</h2>

          <form className="enquiry-form">
            <div className="form-grid">
              <input type="text" placeholder="Full Name *" />

              <input type="text" placeholder="Company *" />

              <input type="tel" placeholder="Phone *" />

              <input type="email" placeholder="Email *" />
            </div>

            <textarea rows={6} placeholder="Message *" />

            <button type="submit">Submit Enquiry</button>
          </form>
        </div>

        <div className="highlight-box">
          <h2>Entrepreneur Success</h2>

          <p>
            Entrepreneur&apos;s passionate desire to succeed is not enough to achieve success—it
            must be supported by the right capital, mentorship, and strategic guidance. Raising too
            much or too little funding can both result in failure before reaching product-market
            fit.
          </p>

          <Link href="/" className="learn-btn">
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
}
