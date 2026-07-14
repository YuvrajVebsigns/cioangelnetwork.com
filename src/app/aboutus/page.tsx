'use client';

import Link from 'next/link';

export default function AboutUsPage() {
  // heroContentRef removed (not used)

  return (
    <>
      <section className="social-media-section" style={{ padding: '40px 24px' }}>
        <div className="social-media-content">
          <h2>About Us</h2>

          <h3>The CIO Angel Network (CAN)</h3>

          <p className="social-media-highlight">
            <strong>CIO ANGEL NETWORK (CAN)</strong> is a flagship initiative of
            <strong> CORE Media</strong>. Founded in January 2015, CAN is a unique angel investment
            network focused on accelerating seed-stage technology and technology-enabled startups
            through funding support, mentoring, and customer discovery.
          </p>

          <p>
            CAN operates through its Mumbai and Delhi chapters and brings together some of
            India&apos;s most experienced Chief Information Officers (CIOs), Chief Technology
            Officers (CTOs), technology leaders, and business executives. The network is dedicated
            to identifying high-potential startups and helping them scale through strategic
            guidance, industry expertise, and investment.
          </p>

          <p>
            The primary objective of CAN is to invest in promising seed-stage companies. While
            members collaboratively evaluate startup opportunities, every investor independently
            decides whether or not to participate in an investment. This model provides founders
            with access to experienced decision-makers while maintaining investment autonomy.
          </p>

          <p>
            Beyond funding, CAN provides startups with an invaluable opportunity to establish
            long-term relationships with leading CIOs and technology executives. These relationships
            often result in business partnerships, enterprise customer introductions, strategic
            mentorship, and market validation in addition to investment opportunities.
          </p>

          <p>
            CAN members possess extensive expertise across technology, enterprise transformation,
            business strategy, digital innovation, cybersecurity, operations, and leadership. Their
            collective experience enables startups to receive practical advice that significantly
            improves their chances of long-term success.
          </p>

          <p>
            Unlike a traditional investment fund, CIO Angel Network functions as a collaborative
            network of independent investors who work together in screening, evaluating, mentoring,
            and supporting innovative startups while making individual investment decisions.
          </p>

          <h3 style={{ marginTop: '50px' }}>Investor&apos;s Speak</h3>

          <p>
            Besides capital, the close mentoring engagement provided by CIO Angel Network members
            cannot simply be purchased. CAN&apos;s network of mentors, investors, and CIOs
            represents one of the strongest technology leadership communities in the ICT industry.
          </p>

          <p>
            Investor members include distinguished leaders such as <strong>Manish Choksi</strong>,
            President – Home Improvement, International & IT, Asian Paints Limited;
            <strong> Srinivas Tata</strong>, CIO at Adani Ports & SEZ;
            <strong> Subodh Dubey</strong>, Experienced Business-Oriented CIO;
            <strong> Shailesh Joshi</strong>, Head Corporate IT & CIO, Godrej Group;
            <strong> Bharat Banka</strong>, Former CEO, Aditya Birla PE;
            <strong> Suneel Aradhye</strong>, Group CIO, RPG Enterprises;
            <strong> Ganesh S. Iyer</strong>, Strategy & Business Leader; and
            <strong> Anthony Thomas</strong>, Former CIO, Vodafone, among many other respected
            industry leaders.
          </p>

          <h3 style={{ marginTop: '50px' }}>Investor Member Quotes</h3>

          <blockquote className="about-quote">
            “CIOs and CTOs possess the expertise to evaluate startup innovation, technology,
            leadership capability, and ecosystem readiness. CAN is uniquely positioned to mentor
            startups and help ensure the success of their products and services.”
            <br />
            <br />
            <strong>— N. Jayantha Prabhu</strong>
            <br />
            CTO, Essar Group & Founder Member, CIO Angel Network
          </blockquote>

          <blockquote className="about-quote">
            “CAN is a win-win platform for technology startups to benefit from the experience and
            expertise of CIOs while helping CIOs discover innovative solutions that can transform
            their organizations.”
            <br />
            <br />
            <strong>— Kalpana Maniar</strong>
            <br />
            President & CIO, Edelweiss Financial Services Ltd.
          </blockquote>

          <blockquote className="about-quote">
            “CIOs have mastered evaluating innovative technology from both business and technical
            perspectives. CAN provides startups access to the collective wisdom of India&apos;s
            leading CIOs.”
            <br />
            <br />
            <strong>— Daya Prakash</strong>
            <br />
            Former CIO, LG Electronics & CEO, ADP Infosystems
          </blockquote>

          <blockquote className="about-quote">
            “CIOs with multi-industry experience are uniquely positioned to evaluate IT products and
            services because they understand what truly works inside enterprises.”
            <br />
            <br />
            <strong>— Venkat Iyer</strong>
            <br />
            CIO, Large Manufacturing Organization
          </blockquote>

          <blockquote className="about-quote">
            “It is inspiring to witness innovative ideas from energetic entrepreneurs. As a CIO, CAN
            allows me to stay closely connected with the technology innovation ecosystem.”
            <br />
            <br />
            <strong>— Jagdish Belwal</strong>
            <br />
            CIO, Tata Motors
          </blockquote>

          <blockquote className="about-quote">
            “Once startups begin scaling, they need experienced navigators. For enterprise use
            cases, no one is better positioned than CIOs. CAN provides that bridge.”
            <br />
            <br />
            <strong>— Arun Gupta</strong>
            <br />
            Former CIO, Advisor & Mentor
          </blockquote>

          <blockquote className="about-quote">
            “The idea behind CAN emerged from the rapid disruption created by startups. CIOs are
            uniquely qualified to mentor them because they represent the largest buyers of
            enterprise technology.”
            <br />
            <br />
            <strong>— Pankaj Agrawal</strong>
            <br />
            Senior Advisor, Deloitte | Former CIO & CISO
          </blockquote>

          <blockquote className="about-quote">
            “With most startups operating in the technology space, CIOs possess the knowledge and
            professional networks necessary to mentor entrepreneurs and help them succeed.”
            <br />
            <br />
            <strong>— Sunil Gupta</strong>
            <br />
            Executive Director & President, Netmagic
          </blockquote>

          <blockquote className="about-quote">
            “CAN is a unique community of angel investors with extensive experience in enterprise
            technology. It bridges the gap between innovative products and real enterprise business
            needs.”
            <br />
            <br />
            <strong>— Advisor to Grant Thornton</strong>
            <br />
            Technology & Risk Consulting | Board Mentor
          </blockquote>

          <div className="social-media-back">
            <Link href="/" className="social-media-back-btn">
              ← Back
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
