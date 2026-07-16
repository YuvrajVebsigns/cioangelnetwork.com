'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const heroSlides = [
  // {
  //   image: '/assets/home/hero.png',
  //   alt: 'CIO Angel Network hero banner',
  // },
  {
    image: '/assets/home/hero1.png',
    alt: 'CIO Angel Network investment banner',
  },
  {
    image: '/assets/home/hero2.png',
    alt: 'CIO Angel Network startup banner',
  },
  {
    image: '/assets/home/hero3.png',
    alt: 'CIO Angel Network leadership banner',
  },
  {
    image: '/assets/home/hero4.png',
    alt: 'CIO Angel Network community banner',
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
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="hero-swiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.image}>
            <div className="hero-slide">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="hero-image"
              />

              <div className="hero-overlay" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
