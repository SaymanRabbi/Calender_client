import React, { useState } from 'react';

import type { Image } from '@/types';

import styles from '@/styles/features/property/PropertyCarousel.module.scss';

type Props = {
  images: Image[];
};
export default function PropertyImageCarousel({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles['carousel-container']}>
      <div className={styles['carousel-container__active-image']}>
        <div
          style={{ backgroundImage: `url(${images[activeIndex].img_src})` }}
        />
      </div>
      <div
        className={
          styles['carousel-container__inactive-image-container--outer']
        }
      >
        <div
          className={
            styles['carousel-container__inactive-image-container--inner']
          }
        >
          {images.map((img, index) => (
            <button
              key={img.img_id}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              <div style={{ backgroundImage: `url(${img.img_src})` }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
