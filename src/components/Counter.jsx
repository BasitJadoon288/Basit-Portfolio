import { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

// Counts from 0 up to `target` once visible.
export default function Counter({ target }) {
  const [ref, inView] = useInView();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    let current = 0;
    const id = setInterval(() => {
      current += 1;
      setValue(current);
      if (current >= target) clearInterval(id);
    }, 220);

    return () => clearInterval(id);
  }, [inView, target]);

  return <b ref={ref}>{value}+</b>;
}
