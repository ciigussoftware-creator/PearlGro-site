const strokeMuted = "rgba(143,166,154,0.4)";
const strokeGlow = "rgba(47,229,140,0.55)";
const labelFill = "rgba(143,166,154,0.75)";

export default function SolarDiagram() {
  return (
    <svg
      viewBox="0 0 460 340"
      className="w-full"
      role="img"
      aria-label="Diagram showing sunlight captured by a ground-mounted solar array, converted by an inverter, and powering the greenhouse's LED arrays, climate control, and monitoring systems"
    >
      <circle
        cx="72"
        cy="56"
        r="16"
        stroke={strokeMuted}
        strokeWidth="1"
        fill="rgba(47,229,140,0.04)"
      />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 72 + Math.cos(angle) * 22;
        const y1 = 56 + Math.sin(angle) * 22;
        const x2 = 72 + Math.cos(angle) * 28;
        const y2 = 56 + Math.sin(angle) * 28;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={strokeMuted}
            strokeWidth="1"
            strokeLinecap="round"
          />
        );
      })}
      <text
        x="72"
        y="102"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="7"
        letterSpacing="1"
        fill={labelFill}
      >
        SUN
      </text>

      <path
        d="M72,80 L72,150 L110,220"
        stroke={strokeMuted}
        strokeWidth="1"
        fill="none"
      />

      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={40 + i * 36}
          y="240"
          width="28"
          height="46"
          rx="2"
          transform={`skewY(-8 ${40 + i * 36} 240)`}
          stroke={strokeGlow}
          strokeWidth="1"
          fill="rgba(47,229,140,0.05)"
        />
      ))}
      <text
        x="110"
        y="308"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="6.5"
        letterSpacing="1"
        fill={labelFill}
      >
        SOLAR ARRAY
      </text>
      <text
        x="110"
        y="318"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="6.5"
        letterSpacing="1"
        fill={labelFill}
      >
        (GROUND-MOUNTED)
      </text>

      <path
        d="M182,255 L216,220"
        stroke={strokeGlow}
        strokeWidth="1.5"
        strokeDasharray="6 6"
        className="animate-flow"
      />
      <rect
        x="216"
        y="196"
        width="44"
        height="30"
        rx="4"
        stroke={strokeMuted}
        strokeWidth="1"
        fill="rgba(47,229,140,0.04)"
      />
      <text
        x="238"
        y="240"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="6.5"
        letterSpacing="1"
        fill={labelFill}
      >
        INVERTER
      </text>

      <path
        d="M260,208 L320,150"
        stroke={strokeGlow}
        strokeWidth="1.5"
        strokeDasharray="6 6"
        className="animate-flow"
      />

      <path
        d="M320,150 L370,90 L420,150 L420,200 L320,200 Z"
        stroke={strokeMuted}
        strokeWidth="1"
        fill="rgba(47,229,140,0.04)"
      />
      <text
        x="370"
        y="70"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="7"
        letterSpacing="1"
        fill={labelFill}
      >
        GREENHOUSE
      </text>

      <line x1="330" y1="215" x2="330" y2="260" stroke={strokeMuted} strokeWidth="1" />
      <circle cx="330" cy="215" r="3" fill={strokeGlow} />
      <text
        x="330"
        y="278"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="6.5"
        letterSpacing="1"
        fill={labelFill}
      >
        LED ARRAYS
      </text>

      <line x1="370" y1="215" x2="370" y2="260" stroke={strokeMuted} strokeWidth="1" />
      <circle cx="370" cy="215" r="3" fill={strokeGlow} />
      <text
        x="370"
        y="278"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="6.5"
        letterSpacing="1"
        fill={labelFill}
      >
        CLIMATE CONTROL
      </text>

      <line x1="410" y1="215" x2="410" y2="260" stroke={strokeMuted} strokeWidth="1" />
      <circle cx="410" cy="215" r="3" fill={strokeGlow} />
      <text
        x="410"
        y="278"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="6.5"
        letterSpacing="1"
        fill={labelFill}
      >
        MONITORING
      </text>
    </svg>
  );
}
