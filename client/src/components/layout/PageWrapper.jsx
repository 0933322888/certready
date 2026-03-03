export default function PageWrapper({ children, className = '' }) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <main className="flex-1 pt-16">
        {children}
      </main>
    </div>
  );
}
