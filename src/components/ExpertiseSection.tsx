'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const dealStats = [
  {
    label: 'Deal',
    value: '4',
  },
  {
    label: 'Commitments',
    value: '2.5 Cr Oversubscribed',
  },
  {
    label: 'No. of Investors',
    value: '49',
  },
];

export default function AboutUsSection() {
  const sectionRef = useScrollAnimation<HTMLElement>({
    animationClass: 'animate-fade-in-up',
    initialTransform: 'translateY(40px)',
  });

  return (
    <section ref={sectionRef} className="deal-corner-section">
      <div className="deal-corner-container">
        {/* LEFT INTRODUCTION PANEL */}

        <aside className="deal-intro-panel">
          <h2 className="deal-intro-title">
            Welcome to CIO Angel
            <br />
            Network!
          </h2>

          <p>CAN was founded and commenced its operations in January 2015.</p>

          <p>
            CAN is a new Angel Network, an initiative by Anoop Mathur. Its two chapters – Mumbai and
            Delhi – are focused on Technology &amp; Technology enabled deals.
          </p>

          <p>
            CAN&apos;s mission is to accelerate seed-stage start-ups through fundraising support and
            customer discovery.
          </p>
        </aside>

        {/* RIGHT DEAL CONTENT */}

        <div className="deal-main-content">
          <div className="deal-heading-row">
            <h2 className="deal-corner-title">Deal Corner</h2>

            <Link href="/portfolio-companies" className="deal-portfolio-link">
              See all portfolio companies here
            </Link>
          </div>

          <div className="deal-card">
            <div className="deal-card-main">
              <div className="deal-video-wrapper">
                <iframe
                  className="deal-video"
                  src="https://www.youtube.com/embed/o4LM01aE1PQ"
                  title="CIO Angel Network Deal Corner"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="deal-description">
                <p>
                  Welcome to our startup deals corner made possible by our angel and institutional
                  investors who have extended their connections for our startups to grow their
                  business.
                </p>

                <p>
                  These services are critical in the success of the startups as they provide them
                  access to a diverse array of clients instantly.
                </p>
              </div>
            </div>

            <div className="deal-stats-bar">
              <div className="deal-progress">
                <div className="deal-progress-ring">
                  <span>100%</span>
                </div>
              </div>

              <div className="deal-stats">
                {dealStats.map((stat) => (
                  <div key={stat.label} className="deal-stat-item">
                    <span className="deal-stat-label">{stat.label}</span>

                    <strong className="deal-stat-value">{stat.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CONTENT */}

      <div className="deal-bottom-section">
        <div className="deal-bottom-container">
          <p className="deal-bottom-text">
            Entrepreneur&apos;s passionate desire to succeed is not enough to achieve success; it
            needs to be coupled with capital. Spending too much or raising very little capital both
            can end up with running out of money and lead to premature death of an idea.
          </p>

          <Link href="/about-us" className="deal-learn-more-btn">
            <span>Learn More</span>
            <span className="deal-learn-more-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
