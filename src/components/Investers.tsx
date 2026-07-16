'use client';

import Image from 'next/image';
import Link from 'next/link';

type InvestmentIcon = {
  title: string;
  image: string;
};

const topIcons: InvestmentIcon[] = [
  { title: 'Video', image: '/assets/investors/video.jpg' },
  { title: 'Cloud', image: '/assets/investors/cloud.jpg' },
  {
    title: 'Entertainment',
    image: '/assets/investors/entertainment.jpg',
  },
  { title: 'Social', image: '/assets/investors/social.jpg' },
  { title: 'Analytics', image: '/assets/investors/analytics.jpg' },
  { title: 'Mobile', image: '/assets/investors/mobile.jpg' },
  { title: 'Health', image: '/assets/investors/health.jpg' },
  {
    title: 'Hospitality',
    image: '/assets/investors/hospitality.jpg',
  },
];

const bottomIcons: InvestmentIcon[] = [
  { title: 'Security', image: '/assets/investors/security.jpg' },
  {
    title: 'E-Commerce',
    image: '/assets/investors/ecommerce.jpg',
  },
  { title: 'Search', image: '/assets/investors/search.jpg' },
  { title: 'Payments', image: '/assets/investors/payments.jpg' },
  { title: 'Location', image: '/assets/investors/location.jpg' },
  { title: 'Gaming', image: '/assets/investors/gaming.jpg' },
  { title: 'Media', image: '/assets/investors/media.jpg' },
  {
    title: 'Enterprise',
    image: '/assets/investors/enterprise.jpg',
  },
];

function InvestmentIconItem({ title, image }: InvestmentIcon) {
  return (
    <div className="icon-circle">
      <Image src={image} alt={`${title} investment category`} width={52} height={52} />

      <span>{title}</span>
    </div>
  );
}

export default function InvestmentSection() {
  return (
    <section className="investment-section">
      <div className="investment-container">
        <div className="icon-row">
          {topIcons.map((item) => (
            <InvestmentIconItem key={item.title} title={item.title} image={item.image} />
          ))}
        </div>

        <div className="middle-row">
          <InvestmentIconItem title="Big Data" image="/assets/investors/big-data.jpg" />

          <div className="center-content">
            <h2>
              Discover Investment
              <br />
              Opportunities with CIO Angels!
            </h2>

            <Link href="/contact" className="connect-btn">
              <span>Connect with Investors</span>
            </Link>
          </div>

          <InvestmentIconItem title="Logistics" image="/assets/investors/logistics.jpg" />
        </div>

        <div className="icon-row">
          {bottomIcons.map((item) => (
            <InvestmentIconItem key={item.title} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
