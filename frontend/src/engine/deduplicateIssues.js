export function deduplicateIssues(issues = []) {
  const seen = new Set();

  return issues.filter((issue) => {
    const key = `${issue.rule}-${issue.line}-${issue.message}`;

    if (seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}