export default function KeyTermCard({ term, definition }) {
  return (
    <div className="border-l-4 border-accent-warm bg-surface-2 rounded-r-lg p-4 my-4">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-accent-warm mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-accent-warm mb-1">{term}</h4>
          <p className="text-text-primary text-sm leading-relaxed">{definition}</p>
        </div>
      </div>
    </div>
  );
}
