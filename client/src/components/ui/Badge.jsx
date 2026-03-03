export default function Badge({ 
  children, 
  variant = 'default',
  className = '' 
}) {
  const variants = {
    default: 'bg-surface-2 text-text-primary border border-border',
    accent: 'bg-accent/20 text-accent border border-accent/30',
    warm: 'bg-accent-warm/20 text-accent-warm border border-accent-warm/30',
    success: 'bg-success/20 text-success border border-success/30',
    danger: 'bg-danger/20 text-danger border border-danger/30',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
