import React from "react";

function getColor(score) {
  if (score >= 90) return "#22c55e";
  if (score >= 60) return "#facc15";
  return "#ef4444";
}

function Circle({ label, value }) {
  return (
    <div style={{
      width: 140,
      height: 140,
      borderRadius: "50%",
      border: `8px solid ${getColor(value)}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#111827",
      transition: "0.3s"
    }}>
      <div style={{ fontSize: 14, opacity: 0.7 }}>{label}</div>
      <div style={{ fontSize: 30, fontWeight: "bold" }}>{value}</div>
    </div>
  );
}

export default function ScoreCards({ scores }) {
  if (!scores) return null;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20,
      marginTop: 20
    }}>
      <Circle label="Bug" value={scores.bugScore} />
      <Circle label="Logic" value={scores.logicScore} />
      <Circle label="Performance" value={scores.performanceScore} />
      <Circle label="Maintain" value={scores.maintainabilityScore} />
    </div>
  );
}