export default function InfoBox({ title, items }) {
  return (
    <div className="bg-surface-2 border border-accent/30 rounded-xl p-5 my-6">
      <div className="flex items-start space-x-3 mb-3">
        <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h4 className="font-semibold text-accent text-lg">{title}</h4>
      </div>
      <ul className="space-y-2 ml-8">
        {items.map((item, index) => (
          <li key={index} className="text-text-primary text-sm leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
