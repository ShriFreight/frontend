"use client";

// Equirectangular projection over a 1000×500 viewport.
const W = 1000;
const H = 500;
const project = (lat: number, lng: number) => ({
  x: ((lng + 180) / 360) * W,
  y: ((90 - lat) / 180) * H,
});

type Hub = {
  name: string;
  lat: number;
  lng: number;
  primary?: boolean;
};

const HUBS: Hub[] = [
  { name: "Kolkata", lat: 22.57, lng: 88.36, primary: true },
  { name: "Mumbai", lat: 19.08, lng: 72.88 },
  { name: "Dubai", lat: 25.2, lng: 55.27 },
  { name: "Frankfurt", lat: 50.11, lng: 8.68 },
  { name: "London", lat: 51.51, lng: -0.13 },
  { name: "New York", lat: 40.71, lng: -74.01 },
  { name: "Los Angeles", lat: 34.05, lng: -118.24 },
  { name: "Singapore", lat: 1.35, lng: 103.82 },
  { name: "Shanghai", lat: 31.23, lng: 121.47 },
  { name: "Sydney", lat: -33.87, lng: 151.21 },
];

// Cached projected coordinates.
const points = HUBS.map((h) => ({ ...h, ...project(h.lat, h.lng) }));
const origin = points.find((p) => p.primary)!;

// Build a great-circle-ish arc — quadratic Bezier curving upward.
function arcPath(
  ox: number,
  oy: number,
  dx: number,
  dy: number,
) {
  const mx = (ox + dx) / 2;
  const my = Math.min(oy, dy) - Math.abs(dx - ox) * 0.25 - 30;
  return `M ${ox.toFixed(1)} ${oy.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(
    1,
  )} ${dx.toFixed(1)} ${dy.toFixed(1)}`;
}

export default function GlobalReach() {
  const arcs = points
    .filter((p) => !p.primary)
    .map((p, i) => ({
      key: p.name,
      d: arcPath(origin.x, origin.y, p.x, p.y),
      delay: i * 0.35,
      duration: 2.2 + (i % 3) * 0.4,
    }));

  return (
    <div className="relative overflow-hidden rounded-3xl border border-ink-900/5 bg-gradient-to-b from-white to-brand-50/40 p-5 shadow-soft sm:p-7">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
            Global Reach
          </p>
          <p className="font-display mt-1 text-lg font-semibold text-ink-900 sm:text-xl">
            Active trade lanes from Kolkata
          </p>
        </div>
        <span className="flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-800">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
          </span>
          Live · {points.length - 1} hubs
        </span>
      </div>

      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl bg-[#f6fbf9] ring-1 ring-brand-800/5">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="World map with active trade lanes from Kolkata"
        >
          <defs>
            {/* dot grid pattern */}
            <pattern
              id="gr-dots"
              x="0"
              y="0"
              width="14"
              height="14"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.4" cy="1.4" r="1.1" fill="#0f5045" opacity="0.18" />
            </pattern>

            {/* arc gradient */}
            <linearGradient id="gr-arc" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0f5045" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0f5045" stopOpacity="0" />
            </linearGradient>

            {/* arc draw-in animation */}
            <style>{`
              @keyframes drawArc {
                0% { stroke-dashoffset: 1400; opacity: 0; }
                30% { opacity: 1; }
                100% { stroke-dashoffset: 0; opacity: 1; }
              }
              @keyframes flowDash {
                from { stroke-dashoffset: 0; }
                to { stroke-dashoffset: -40; }
              }
              @keyframes pulseRing {
                0% { r: 6; opacity: 0.55; }
                100% { r: 26; opacity: 0; }
              }
              .gr-arc-path { animation: drawArc 1.6s cubic-bezier(.6,.1,.2,1) both; }
              .gr-arc-flow { animation: flowDash 2s linear infinite; }
              .gr-pulse-1 { animation: pulseRing 2.4s ease-out infinite; }
              .gr-pulse-2 { animation: pulseRing 2.4s ease-out 1.2s infinite; }
            `}</style>
          </defs>

          {/* dotted backdrop */}
          <rect width={W} height={H} fill="url(#gr-dots)" />

          {/* faint horizontal latitude reference + equator */}
          {[125, 250, 375].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2={W}
              y2={y}
              stroke="#0f5045"
              strokeOpacity={y === 250 ? 0.22 : 0.08}
              strokeDasharray={y === 250 ? "1 6" : "1 12"}
              strokeWidth="1.4"
            />
          ))}

          {/* faint vertical meridian lines */}
          {[200, 400, 600, 800].map((x) => (
            <line
              key={x}
              x1={x}
              y1="0"
              x2={x}
              y2={H}
              stroke="#0f5045"
              strokeOpacity="0.06"
              strokeDasharray="1 12"
              strokeWidth="1.4"
            />
          ))}

          {/* stylized globe halo behind origin */}
          <circle
            cx={origin.x}
            cy={origin.y}
            r="140"
            fill="none"
            stroke="#10b981"
            strokeOpacity="0.08"
            strokeDasharray="2 6"
          />
          <circle
            cx={origin.x}
            cy={origin.y}
            r="220"
            fill="none"
            stroke="#10b981"
            strokeOpacity="0.05"
            strokeDasharray="2 6"
          />

          {/* arcs */}
          {arcs.map((a, i) => (
            <g key={a.key}>
              {/* base arc (drawn-in) */}
              <path
                d={a.d}
                fill="none"
                stroke="url(#gr-arc)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="1400"
                className="gr-arc-path"
                style={{ animationDelay: `${a.delay}s` }}
              />
              {/* flowing dashes on top */}
              <path
                d={a.d}
                fill="none"
                stroke="#0f5045"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeOpacity="0.45"
                strokeDasharray="2 10"
                className="gr-arc-flow"
                style={{ animationDelay: `${a.delay}s` }}
              />
              {/* moving package dot */}
              <circle r="3.5" fill="#10b981">
                <animateMotion
                  dur={`${a.duration}s`}
                  repeatCount="indefinite"
                  begin={`${a.delay}s`}
                  path={a.d}
                  rotate="auto"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur={`${a.duration}s`}
                  begin={`${a.delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}

          {/* hubs */}
          {points.map((p) => (
            <g key={p.name}>
              {p.primary ? (
                <>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="6"
                    fill="#10b981"
                    opacity="0.4"
                    className="gr-pulse-1"
                  />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="6"
                    fill="#10b981"
                    opacity="0.4"
                    className="gr-pulse-2"
                  />
                </>
              ) : null}
              <circle
                cx={p.x}
                cy={p.y}
                r={p.primary ? 7 : 4.5}
                fill={p.primary ? "#0f5045" : "#0f5045"}
                stroke="#ffffff"
                strokeWidth="2.2"
              />
              {p.primary && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="2.2"
                  fill="#10b981"
                />
              )}
              <text
                x={p.x + 10}
                y={p.y - 9}
                fontSize="13"
                fontWeight={p.primary ? 700 : 500}
                fill="#0c4339"
                style={{
                  paintOrder: "stroke",
                  stroke: "rgba(255,255,255,0.9)",
                  strokeWidth: 3,
                }}
              >
                {p.name}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* legend chips */}
      <div className="mt-5 grid grid-cols-2 gap-2 text-[12px] sm:grid-cols-3 lg:grid-cols-5">
        {points.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-brand-800/5"
          >
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${
                p.primary ? "bg-brand-900" : "bg-accent-500"
              }`}
            >
              {p.primary && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-900/40" />
              )}
            </span>
            <span className="font-medium text-ink-700">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
