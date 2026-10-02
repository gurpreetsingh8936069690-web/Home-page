import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element enters the viewport
 * Triggers once and adds the animation class smoothly.
 */
export function useInView(options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(() => {
    return typeof window !== 'undefined' && !('IntersectionObserver' in window);
  });

  useEffect(() => {
    const element = ref.current;
    if (!element || isInView) return;

    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options, isInView]);

  return [ref, isInView];
}
