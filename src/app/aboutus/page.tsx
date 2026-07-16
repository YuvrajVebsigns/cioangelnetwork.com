'use client';

import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <main className="about-us-page">
      <section className="social-media-section">
        <div className="social-media-container">
          <div className="social-media-header">
            <span className="social-media-badge">ABOUT CIO ANGEL NETWORK</span>
          </div>

          <div className="social-media-layout">
            <article className="social-media-content">
              <h2>About Us</h2>

              <h3>The CIO Angel Network (CAN)</h3>

              <p className="social-media-highlight">
                <strong>CIO ANGEL NETWORK (CAN)</strong> is a flagship initiative of
                <strong> CORE Media</strong>. Founded in January 2015, CAN is a unique angel
                investment network focused on accelerating seed-stage technology and
                technology-enabled startups through funding support, mentoring and customer
                discovery.
              </p>

              <p>
                CAN operates through its Mumbai and Delhi chapters and brings together some of
                India&apos;s most experienced Chief Information Officers (CIOs), Chief Technology
                Officers (CTOs), technology leaders and business executives. The network is
                dedicated to identifying high-potential startups and helping them scale through
                strategic guidance, industry expertise and investment.
              </p>

              <p>
                The primary objective of CAN is to invest in promising seed-stage companies. While
                members collaboratively evaluate startup opportunities, every investor independently
                decides whether or not to participate in an investment. This model provides founders
                with access to experienced decision-makers while maintaining investment autonomy.
              </p>

              <p>
                Beyond funding, CAN provides startups with an invaluable opportunity to establish
                long-term relationships with leading CIOs and technology executives. These
                relationships often result in business partnerships, enterprise customer
                introductions, strategic mentorship and market validation in addition to investment
                opportunities.
              </p>

              <p>
                CAN members possess extensive expertise across technology, enterprise
                transformation, business strategy, digital innovation, cybersecurity, operations and
                leadership. Their collective experience enables startups to receive practical advice
                that significantly improves their chances of long-term success.
              </p>

              <p>
                Unlike a traditional investment fund, CIO Angel Network functions as a collaborative
                network of independent investors who work together in screening, evaluating,
                mentoring and supporting innovative startups while making individual investment
                decisions.
              </p>

              <h3 className="social-media-subheading">Investor&apos;s Speak</h3>

              <p>
                Besides capital, the close mentoring engagement provided by CIO Angel Network
                members cannot simply be purchased. CAN&apos;s network of mentors, investors and
                CIOs represents one of the strongest technology leadership communities in the ICT
                industry.
              </p>

              <p>
                Investor members include distinguished leaders such as{' '}
                <strong>Manish Choksi</strong>, President – Home Improvement, International & IT,
                Asian Paints Limited; <strong>Srinivas Tata</strong>, CIO at Adani Ports & SEZ;{' '}
                <strong>Subodh Dubey</strong>, Experienced Business-Oriented CIO;{' '}
                <strong>Shailesh Joshi</strong>, Head Corporate IT & CIO, Godrej Group;{' '}
                <strong>Bharat Banka</strong>, Former CEO, Aditya Birla PE;{' '}
                <strong>Suneel Aradhye</strong>, Group CIO, RPG Enterprises;{' '}
                <strong>Ganesh S. Iyer</strong>, Strategy & Business Leader; and{' '}
                <strong>Anthony Thomas</strong>, Former CIO, Vodafone, among many other respected
                industry leaders.
              </p>

              <h3 className="social-media-subheading">Investor Member Quotes</h3>

              <blockquote className="about-quote">
                “CIOs and CTOs possess the expertise to evaluate startup innovation, technology,
                leadership capability and ecosystem readiness. CAN is uniquely positioned to mentor
                startups and help ensure the success of their products and services.”
                <footer>
                  <strong>— N. Jayantha Prabhu</strong>
                  <span>CTO, Essar Group & Founder Member, CIO Angel Network</span>
                </footer>
              </blockquote>

              <blockquote className="about-quote">
                “CAN is a win-win platform for technology startups to benefit from the experience
                and expertise of CIOs while helping CIOs discover innovative solutions that can
                transform their organizations.”
                <footer>
                  <strong>— Kalpana Maniar</strong>
                  <span>President & CIO, Edelweiss Financial Services Ltd.</span>
                </footer>
              </blockquote>

              <blockquote className="about-quote">
                “CIOs have mastered evaluating innovative technology from both business and
                technical perspectives. CAN provides startups access to the collective wisdom of
                India&apos;s leading CIOs.”
                <footer>
                  <strong>— Daya Prakash</strong>
                  <span>Former CIO, LG Electronics & CEO, ADP Infosystems</span>
                </footer>
              </blockquote>

              <blockquote className="about-quote">
                “CIOs with multi-industry experience are uniquely positioned to evaluate IT products
                and services because they understand what truly works inside enterprises.”
                <footer>
                  <strong>— Venkat Iyer</strong>
                  <span>CIO, Large Manufacturing Organization</span>
                </footer>
              </blockquote>

              <blockquote className="about-quote">
                “It is inspiring to witness innovative ideas from energetic entrepreneurs. As a CIO,
                CAN allows me to stay closely connected with the technology innovation ecosystem.”
                <footer>
                  <strong>— Jagdish Belwal</strong>
                  <span>CIO, Tata Motors</span>
                </footer>
              </blockquote>

              <blockquote className="about-quote">
                “Once startups begin scaling, they need experienced navigators. For enterprise use
                cases, no one is better positioned than CIOs. CAN provides that bridge.”
                <footer>
                  <strong>— Arun Gupta</strong>
                  <span>Former CIO, Advisor & Mentor</span>
                </footer>
              </blockquote>

              <blockquote className="about-quote">
                “The idea behind CAN emerged from the rapid disruption created by startups. CIOs are
                uniquely qualified to mentor them because they represent the largest buyers of
                enterprise technology.”
                <footer>
                  <strong>— Pankaj Agrawal</strong>
                  <span>Senior Advisor, Deloitte | Former CIO & CISO</span>
                </footer>
              </blockquote>

              <blockquote className="about-quote">
                “With most startups operating in the technology space, CIOs possess the knowledge
                and professional networks necessary to mentor entrepreneurs and help them succeed.”
                <footer>
                  <strong>— Sunil Gupta</strong>
                  <span>Executive Director & President, Netmagic</span>
                </footer>
              </blockquote>

              <blockquote className="about-quote">
                “CAN is a unique community of angel investors with extensive experience in
                enterprise technology. It bridges the gap between innovative products and real
                enterprise business needs.”
                <footer>
                  <strong>— Advisor to Grant Thornton</strong>
                  <span>Technology & Risk Consulting | Board Mentor</span>
                </footer>
              </blockquote>

              <div className="social-media-back">
                <Link href="/" className="social-media-back-btn">
                  ← Back
                </Link>
              </div>
            </article>

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
                Connect with our team to learn more about CIO Angel Network, startup funding,
                investor membership and mentoring opportunities.
              </p>

              <div className="valuation-enquiry-points">
                <div className="valuation-enquiry-point">
                  <span aria-hidden="true">01</span>
                  <p>Learn more about CIO Angel Network initiatives.</p>
                </div>

                <div className="valuation-enquiry-point">
                  <span aria-hidden="true">02</span>
                  <p>Explore startup funding and mentoring opportunities.</p>
                </div>

                <div className="valuation-enquiry-point">
                  <span aria-hidden="true">03</span>
                  <p>Connect with experienced CIOs and angel investors.</p>
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
      </section>
    </main>
  );
}
