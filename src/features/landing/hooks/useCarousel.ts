import { useEffect, useState } from 'react';

const CAROUSEL_TIMEOUT = 5000;

export default function useCarousel(slideCount: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevSlide) => (prevSlide + 1) % slideCount);
    }, CAROUSEL_TIMEOUT);

    return () => {
      clearInterval(interval);
    };
  }, [slideCount ]);

  return index;
}
