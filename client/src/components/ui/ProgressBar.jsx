export default function ProgressBar({ 
  value, 
  max = 100, 
  className = '',
  showLabel = true 
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-text-muted">Progress</span>
          <span className="text-sm font-medium text-accent">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="w-full bg-surface-2 rounded-full h-2 overflow-hidden">
        <div
          className="bg-accent h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
