import { useEffect, useState, RefObject } from 'react';

interface UseInViewOptions {
  once?: boolean;
  amount?: number;
}

export function useInView(
  ref: RefObject<Element>,
  { once = false, amount = 0 }: UseInViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        
        if (inView) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold: amount,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, once, amount]);

  return isInView;
}
