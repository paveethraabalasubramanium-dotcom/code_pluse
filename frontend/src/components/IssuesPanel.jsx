export default function IssuesPanel({ issues }) {
  if (!issues?.length) return <p>No issues found 🎉</p>;

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Issues</h3>
      <ul>
        {issues.map((issue, i) => (
          <li key={i}>
            [{issue.type}] {issue.message} (Line {issue.line})
          </li>
        ))}
      </ul>
    </div>
  );
}