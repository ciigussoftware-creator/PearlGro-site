const strokeMuted = "rgba(143,166,154,0.4)";
const strokeGlow = "rgba(47,229,140,0.55)";
const labelFill = "rgba(143,166,154,0.75)";

export default function RainwaterDiagram() {
  return (
    <svg
      viewBox="0 0 460 340"
      className="w-full"
      role="img"
      aria-label="Diagram showing rainfall collected from the greenhouse roof, stored in a tank, filtered, then delivered to crop rows through drip irrigation"
    >
      <text
        x="210"
        y="14"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="8"
        letterSpacing="1.2"
        fill={labelFill}
      >
        RAINFALL
      </text>
      {[130, 170, 210, 250, 290].map((x) => (
        <path
          key={x}
          d={`M${x},22 L${x - 8},40`}
          stroke={strokeMuted}
          strokeWidth="1"
          strokeLinecap="round"
          markerEnd="url(#rain-arrow)"
        />
      ))}
      <defs>
        <marker
          id="rain-arrow"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill={strokeMuted} />
        </marker>
      </defs>

      <path
        d="M60,72 Q210,26 360,72"
        stroke={strokeGlow}
        strokeWidth="1.25"
        fill="none"
      />
      <line x1="60" y1="72" x2="360" y2="72" stroke={strokeMuted} strokeWidth="1" />
      <text
        x="210"
        y="94"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="7"
        letterSpacing="1.1"
        fill={labelFill}
      >
        GREENHOUSE ROOF
      </text>

      <path
        d="M80,72 L80,168"
        stroke={strokeGlow}
        strokeWidth="1.5"
        strokeDasharray="6 6"
        className="animate-flow"
      />
      <rect
        x="55"
        y="168"
        width="50"
        height="72"
        rx="6"
        stroke={strokeMuted}
        strokeWidth="1"
        fill="rgba(47,229,140,0.04)"
      />
      <text
        x="80"
        y="238"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="6.5"
        letterSpacing="1"
        fill={labelFill}
      >
        STORAGE
      </text>
      <text
        x="80"
        y="248"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="6.5"
        letterSpacing="1"
        fill={labelFill}
      >
        TANK
      </text>

      <path
        d="M105,204 L195,204"
        stroke={strokeGlow}
        strokeWidth="1.5"
        strokeDasharray="6 6"
        className="animate-flow"
      />
      <path
        d="M200,190 L214,204 L200,218 L186,204 Z"
        stroke={strokeMuted}
        strokeWidth="1"
        fill="rgba(47,229,140,0.04)"
      />
      <text
        x="200"
        y="176"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="6.5"
        letterSpacing="1"
        fill={labelFill}
      >
        FILTRATION
      </text>

      <path
        d="M200,218 L200,270"
        stroke={strokeGlow}
        strokeWidth="1.5"
        strokeDasharray="6 6"
        className="animate-flow"
      />
      <line x1="100" y1="270" x2="380" y2="270" stroke={strokeMuted} strokeWidth="1" />
      <text
        x="240"
        y="260"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="6.5"
        letterSpacing="1"
        fill={labelFill}
      >
        DRIP IRRIGATION
      </text>

      {[120, 165, 210, 255, 300, 345].map((x) => (
        <path
          key={x}
          d={`M${x},270 L${x},288 M${x - 6},296 L${x},288 L${x + 6},296`}
          stroke={strokeMuted}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
      ))}
      <text
        x="240"
        y="316"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="6.5"
        letterSpacing="1"
        fill={labelFill}
      >
        CROP ROWS
      </text>
    </svg>
  );
}
