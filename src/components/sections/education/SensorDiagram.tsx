const strokeMuted = "rgba(143,166,154,0.4)";
const strokeGlow = "rgba(47,229,140,0.55)";
const labelFill = "rgba(143,166,154,0.75)";

const gridColumns = [40, 88, 136, 184, 232, 280];
const gridRows = [42, 96, 150, 204];

const activeNodes = [
  { x: 88, y: 96 },
  { x: 232, y: 42 },
  { x: 136, y: 204 },
  { x: 184, y: 150 },
];

const hub = { x: 160, y: 120 };

function isActiveNode(x: number, y: number) {
  return activeNodes.some((node) => node.x === x && node.y === y);
}

export default function SensorDiagram() {
  return (
    <svg
      viewBox="0 0 320 240"
      className="h-full w-full"
      role="img"
      aria-label="Diagram of a field of IoT sensors feeding a central hub, with active sensor nodes pulsing along their connection lines"
    >
      {gridRows.map((y) => (
        <line
          key={`row-${y}`}
          x1="24"
          y1={y}
          x2="296"
          y2={y}
          stroke={strokeMuted}
          strokeWidth="1"
          strokeDasharray="2 4"
        />
      ))}

      {gridRows.map((y) =>
        gridColumns.map((x) => {
          if (isActiveNode(x, y)) return null;
          return (
            <g key={`pole-${x}-${y}`}>
              <line
                x1={x}
                y1={y}
                x2={x}
                y2={y - 10}
                stroke={strokeMuted}
                strokeWidth="1"
              />
              <circle
                cx={x}
                cy={y - 12}
                r="2.5"
                stroke={strokeMuted}
                strokeWidth="1"
                fill="none"
              />
            </g>
          );
        }),
      )}

      {activeNodes.map((node) => (
        <line
          key={`link-${node.x}-${node.y}`}
          x1={hub.x}
          y1={hub.y}
          x2={node.x}
          y2={node.y}
          stroke={strokeMuted}
          strokeWidth="1"
          strokeDasharray="3 4"
        />
      ))}

      {activeNodes.map((node) => (
        <g key={`node-${node.x}-${node.y}`}>
          <circle
            cx={node.x}
            cy={node.y}
            r="9"
            stroke={strokeGlow}
            strokeWidth="1.25"
            fill="none"
            className="animate-pulse-ring"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          <circle cx={node.x} cy={node.y} r="3" fill={strokeGlow} />
        </g>
      ))}

      <circle
        cx={hub.x}
        cy={hub.y}
        r="22"
        stroke={strokeGlow}
        strokeWidth="1.25"
        fill="rgba(47,229,140,0.06)"
      />
      <text
        x={hub.x}
        y={hub.y + 3}
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
        y="232"
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
