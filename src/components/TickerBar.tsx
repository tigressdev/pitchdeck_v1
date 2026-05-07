import { TICKER_ITEMS } from '../data';

export function TickerBar() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="border-y border-gray-100 bg-gray-50 py-3 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-6 font-mono text-xs text-gray-400">
            <span className="h-1 w-1 rounded-full bg-emerald-500/70 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
