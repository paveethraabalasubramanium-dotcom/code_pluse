import React from "react";

export default function DeadCodePanel({ dead }) {
  return (
    <div>
      <h2>Dead Code</h2>

      {dead.length === 0 ? (
        <p>No dead code detected</p>
      ) : (
        dead.map((item, i) => (
          <div key={i} style={{ color: "red" }}>
            ⚠ {item}
          </div>
        ))
      )}
    </div>
  );
}