export default function Card({ 
  children, 
  className = '',
  hover = false,
  onClick 
}) {
  const hoverClasses = hover 
    ? 'hover:-translate-y-1 hover:shadow-glow-hover cursor-pointer transition-all duration-200 ease-out' 
    : '';

  return (
    <div
      onClick={onClick}
      className={`bg-surface border border-border rounded-xl p-6 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
