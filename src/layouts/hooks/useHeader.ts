import { useEffect, useRef, useState } from 'react';

const HEADER_SENSITIVITY = 5;
const HEADER_HEIGHT = 74;

export default function useHeader() {
  const prevScrolledBy = useRef(0);
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // window.scrollY will return how much the window has shifted from its previous position,
      // meaning window.scrollY will the scrolled pixel counts.
      const currScrolledBy = window.scrollY;
      const pixelsScrolled = Math.abs(currScrolledBy - prevScrolledBy.current);

      // If the scrolled pixels are greater that HEADER_SENSITIVITY, translate the header by some amount.
      if (pixelsScrolled > HEADER_SENSITIVITY) {
        // On scrolling down, set the translation value to the min(HEADER_HEIGHT, previous scrolled by value).
        if (currScrolledBy > prevScrolledBy.current)
          setTranslate(Math.min(HEADER_HEIGHT, prevScrolledBy.current));
        // On scrolling up, set the translation value to 0.
        else setTranslate(0);
      }
      prevScrolledBy.current = currScrolledBy;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ translate]);

  return {
    translate: -translate,
  };
}
