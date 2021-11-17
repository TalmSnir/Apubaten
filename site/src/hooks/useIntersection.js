import { useState, useEffect } from 'react';

export default function useIntersection(
  ref,
  options = { root: document.body, rootMargin: '0px', threshold: 0 }
) {
  const [isIntersected, setIsIntersected] = useState(false);
  useEffect(() => {
    const target = ref.current;
    if (target == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersected(entry.isIntersecting),
      options
    );

    observer.observe(target);
    return () => {
      if (target == null) return;
      observer.unobserve(target);
    };
  }, [ref.current, options]);

  return isIntersected;
}
