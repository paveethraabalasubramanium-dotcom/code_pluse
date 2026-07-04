export default function ToggleSwitch({ enabled, setEnabled }) {
  return (
    <div style={{ marginTop: 20 }}>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Hide Issues" : "Show Issues"}
      </button>
    </div>
  );
}