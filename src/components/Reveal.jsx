import useInView from '../hooks/useInView';

// Wrapper that fades/slides its content in when scrolled into view.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag ref={ref} className={`reveal ${inView ? 'show' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
