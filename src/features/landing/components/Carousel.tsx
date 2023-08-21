/* eslint-disable react/no-array-index-key */
import React from 'react';

import styles from '@/styles/features/landing/sections/Carousel.module.scss';
import useCarousel from '../hooks/useCarousel';

const SLIDES = [
  '/assets/image/desktop/STAYY-private-accommodations-01.webp',
  '/assets/image/desktop/STAYY-private-accommodations-02.webp',
  '/assets/image/desktop/STAYY-private-accommodations-03.webp',
  '/assets/image/desktop/STAYY-private-accommodations-04.webp',
  '/assets/image/desktop/STAYY-private-accommodations-05.webp',
  '/assets/image/desktop/STAYY-private-accommodations-06.webp',
  '/assets/image/desktop/STAYY-private-accommodations-07.webp',
  '/assets/image/desktop/STAYY-private-accommodations-08.webp',
  '/assets/image/desktop/STAYY-private-accommodations-09.webp',
  '/assets/image/desktop/STAYY-private-accommodations-10.webp',
  '/assets/image/desktop/STAYY-private-accommodations-11.webp',
  '/assets/image/desktop/STAYY-private-accommodations-12.webp',
];

export default function ImageCarousel() {
  const index = useCarousel(SLIDES.length);

  return (
    <div className={styles.carousel}>
      {SLIDES.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt="STAYY private accommodations"
          className={`${styles.carousel__image} ${
            index === idx ? styles['carousel__image--active'] : ''
          }`}
        />
      ))}
    </div>
  );
}
