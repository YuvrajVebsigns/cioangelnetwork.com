'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const heroSlides = [
  {
    image: '/assets/home/img3.jpg',
    title: 'Hey',
    subtitle: 'Empowering Startups with Smart Investments',
  },
];

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop
        speed={900}
        autoplay={false}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="hero-image"
              />

              <div className="hero-overlay"></div>

              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <button>Explore More</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
