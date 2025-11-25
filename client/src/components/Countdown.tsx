import { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  /** ISO8601 like '2025-12-03T18:00:00+09:00' */
  targetISO: string;
  className?: string;
  /** Optional heading shown above counters */
  heading?: string;
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown({ targetISO, className, heading }: CountdownProps) {
  const target = useMemo(() => new Date(targetISO), [targetISO]);
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const ms = Math.max(0, target.getTime() - now.getTime());
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  const isToday = days === 0 && totalSeconds > 0;
  const isPast = totalSeconds === 0;

  return (
    <div className={className}>
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {heading && (
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            {heading}
          </h2>
        )}

        {/* Status text */}
        <div className="text-lg md:text-xl font-medium text-gray-700">
          {isPast ? (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white">
              <span className="h-2 w-2 rounded-full bg-[var(--yellow)] animate-pulse" />
              イベントは本日開催中／終了しました
            </span>
          ) : isToday ? (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--turquoise)] text-white">
              <span className="h-2 w-2 rounded-full bg-white animate-ping" />
              本日開催！開始まであと少し
            </span>
          ) : null}
        </div>

        {/* Counters */}
        {!isPast && (
          <div className="grid grid-cols-4 gap-3 md:gap-5 place-items-center">
            {[{
              label: "日",
              value: days.toString(),
            }, {
              label: "時間",
              value: pad(hours),
            }, {
              label: "分",
              value: pad(minutes),
            }, {
              label: "秒",
              value: pad(seconds),
            }].map((item, i) => (
              <div key={i} className="w-full">
                <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
                  {/* subtle top glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-transparent" />

                  <div className="px-3 md:px-5 py-4 md:py-6">
                    <div className="text-4xl md:text-6xl font-extrabold tracking-tighter tabular-nums bg-clip-text text-transparent bg-gradient-to-br from-[var(--turquoise)] via-[var(--pink)] to-[var(--orange)]">
                      {item.value}
                    </div>
                    <div className="mt-1 text-xs md:text-sm font-semibold text-gray-600">
                      {item.label}
                    </div>
                  </div>

                  {/* decorative border shimmer */}
                  <div className="pointer-events-none absolute -inset-[1px] rounded-2xl [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude] bg-[linear-gradient(135deg,rgba(0,0,0,0.15),transparent_40%),linear-gradient(90deg,rgba(20,184,166,0.35),rgba(244,114,182,0.35),rgba(251,146,60,0.35))] p-[1px]" />
                </div>
              </div>
            ))}
          </div>
        )}

        
      </div>
    </div>
  );
}

export default Countdown;
