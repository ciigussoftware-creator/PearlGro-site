const strokeMuted = "rgba(143,166,154,0.4)";
const strokeGlow = "rgba(47,229,140,0.55)";
const labelFill = "rgba(143,166,154,0.75)";

const nodes = [
  { x: 70, y: 60 },
  { x: 250, y: 40 },
  { x: 60, y: 190 },
  { x: 250, y: 200 },
];

export default function SensorDiagram() {
  return (
    <svg
      viewBox="0 0 320 240"
      className="h-full w-full"
      role="img"
      aria-label="Diagram of a central hub connected to a network of IoT sensors"
    >
      {nodes.map((node) => (
        <line
          key={`${node.x}-${node.y}`}
          x1="160"
          y1="120"
          x2={node.x}
          y2={node.y}
          stroke={strokeMuted}
          strokeWidth="1"
        />
      ))}
      {nodes.map((node) => (
        <circle
          key={`dot-${node.x}-${node.y}`}
          cx={node.x}
          cy={node.y}
          r="3"
          fill={strokeGlow}
        />
      ))}
      <circle
        cx="160"
        cy="120"
        r="26"
        stroke={strokeGlow}
        strokeWidth="1.25"
        fill="rgba(47,229,140,0.06)"
      />
      <text
        x="160"
        y="123"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="8"
        letterSpacing="1"
        fill={strokeGlow}
      >
        HUB
      </text>
      <text
        x="160"
        y="228"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="9"
        letterSpacing="1.4"
        fill={labelFill}
      >
        IOT SENSOR NETWORK
      </text>
    </svg>
  );
}
