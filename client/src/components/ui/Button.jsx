export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  const baseClasses = 'font-medium rounded-xl transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed box-border';
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90 shadow-glow hover:shadow-glow-hover border-2 border-transparent',
    secondary: 'bg-surface-2 text-text-primary border-2 border-border hover:bg-surface hover:border-accent',
    outline: 'bg-transparent text-accent border-2 border-accent hover:bg-accent/10',
    danger: 'bg-danger text-white hover:bg-danger/90 border-2 border-transparent',
    ghost: 'bg-transparent text-text-muted hover:text-text-primary hover:bg-surface border-2 border-transparent',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
