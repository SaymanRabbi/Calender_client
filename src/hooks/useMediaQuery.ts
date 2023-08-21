import { useState, useEffect, useCallback } from 'react';

export default function useMediaQuery(breakpoint: number) {
  const [breakpointReached, setBreakpointReached] = useState(false);
  const [calculated, setCaluculated] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) setBreakpointReached(true);
    else setBreakpointReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${breakpoint}px)`);
    media.addEventListener('change', updateTarget);

    // For initial render when the window resize has not started yet.
    if (media.matches) setBreakpointReached(true);

    setCaluculated(true);

    return () => media.removeEventListener('change', updateTarget);
  }, [breakpoint, updateTarget]);

  return { breakpointReached, calculated };
}
