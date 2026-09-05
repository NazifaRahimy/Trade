export default function TradingIllustration() {
  return (
    <svg
      viewBox="0 0 1200 350"
      className="absolute bottom-0 left-0 w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="coinTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>

        <linearGradient id="coinSide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* waves */}
      <path
        d="M0 310 C120 240 250 340 400 260 C550 180 700 280 850 220 C980 170 1100 210 1200 150"
        stroke="#2563eb"
        strokeWidth="4"
        fill="none"
        opacity="0.6"
      />

      <path
        d="M0 340 C150 280 320 330 500 260 C700 180 920 260 1200 180"
        stroke="#1d4ed8"
        strokeWidth="8"
        fill="none"
        opacity="0.4"
      />

      {/* candlesticks */}
      {[520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000].map(
        (x, i) => (
          <g key={x} opacity="0.35">
            <line x1={x} y1={160 - i * 5} x2={x} y2={250} stroke="#60a5fa" />
            <rect
              x={x - 7}
              y={190 - i * 5}
              width="14"
              height="40"
              fill="#3b82f6"
            />
          </g>
        ),
      )}

      {/* chart line */}
      <path
        d="M120 280
           L280 250
           L420 255
           L560 200
           L690 215
           L830 140
           L980 170
           L1140 55"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="5"
        filter="url(#glow)"
      />

      {/* area under line */}
      <path
        d="M120 280
           L280 250
           L420 255
           L560 200
           L690 215
           L830 140
           L980 170
           L1140 55
           L1140 350
           L120 350 Z"
        fill="url(#chartFill)"
      />

      {/* points */}
      {[
        [280, 250],
        [420, 255],
        [560, 200],
        [690, 215],
        [830, 140],
        [980, 170],
        [1140, 55],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="8"
          fill="#67e8f9"
          filter="url(#glow)"
        />
      ))}

      {/* arrow */}
      <path
        d="M1120 70 L1140 55 L1125 35"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="5"
        filter="url(#glow)"
      />

      {/* coin function repeated */}

      {/* coin 1 */}
      <g transform="translate(520 250)">
        <ellipse rx="55" ry="15" fill="url(#coinTop)" />
        <rect x="-55" y="0" width="110" height="30" fill="url(#coinSide)" />
        <ellipse cx="0" cy="30" rx="55" ry="15" fill="#1e3a8a" />
      </g>

      {/* coin 2 */}
      <g transform="translate(700 210)">
        <ellipse rx="70" ry="18" fill="url(#coinTop)" />
        <rect x="-70" y="0" width="140" height="45" fill="url(#coinSide)" />
        <ellipse cx="0" cy="45" rx="70" ry="18" fill="#1e3a8a" />
      </g>

      {/* coin 3 */}
      <g transform="translate(900 170)">
        <ellipse rx="85" ry="22" fill="url(#coinTop)" />
        <rect x="-85" y="0" width="170" height="60" fill="url(#coinSide)" />
        <ellipse cx="0" cy="60" rx="85" ry="22" fill="#1e3a8a" />
      </g>

      {/* coin 4 */}
      <g transform="translate(1080 120)">
        <ellipse rx="105" ry="28" fill="url(#coinTop)" />
        <rect x="-105" y="0" width="210" height="85" fill="url(#coinSide)" />
        <ellipse cx="0" cy="85" rx="105" ry="28" fill="#1e3a8a" />
      </g>
    </svg>
  );
}
