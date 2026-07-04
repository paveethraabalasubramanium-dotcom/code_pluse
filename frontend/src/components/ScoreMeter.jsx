export default function ScoreMeter({ score }) {
  const color =
    score > 80 ? "green" :
    score > 60 ? "orange" : "red";

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>Overall Score</h3>

      <div style={{
        width: "300px",
        height: "30px",
        background: "#eee",
        borderRadius: 20,
        overflow: "hidden"
      }}>
        <div
          style={{
            width: `${score}%`,
            height: "100%",
            background: color,
            transition: "0.5s"
          }}
        />
      </div>

      <h2>{score}/100</h2>
    </div>
  );
}