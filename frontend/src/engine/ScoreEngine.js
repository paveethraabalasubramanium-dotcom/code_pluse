import { normalizeIssues } from "./issueNormalizer.js";
import { deduplicateIssues } from "./deduplicateIssues.js";

const severityWeight = {
  CRITICAL: 20,
  HIGH: 15,
  MEDIUM: 8,
  LOW: 3
};

const BASE_SCORE = 100;

function calculateScore(issues = []) {
  let score = BASE_SCORE;

  for (const issue of issues) {
    const weight = severityWeight[issue.severity] ?? 0;
    score -= weight;
  }

  return Math.max(0, score);
}

export function scoreEngine({ issues = [] }) {

  // 1. safe normalization
  const normalized = normalizeIssues(Array.isArray(issues) ? issues : []);

  // 2. deduplication
  const uniqueIssues = deduplicateIssues(normalized);

  // 3. split safely
  const bugIssues = uniqueIssues.filter(i => i.type === "BUG");
  const logicIssues = uniqueIssues.filter(i => i.type === "LOGIC");
  const perfIssues = uniqueIssues.filter(i => i.type === "PERFORMANCE");
  const maintainIssues = uniqueIssues.filter(i => i.type === "MAINTAINABILITY");

  // 4. scores
  const bugScore = calculateScore(bugIssues);
  const logicScore = calculateScore(logicIssues);
  const performanceScore = calculateScore(perfIssues);
  const maintainabilityScore = calculateScore(maintainIssues);

  // 5. weighted overall (IMPORTANT FIX)
  const overallScore = Math.round(
    (bugScore * 0.30) +
    (logicScore * 0.40) +
    (performanceScore * 0.15) +
    (maintainabilityScore * 0.15)
  );

  return {
    bugScore,
    logicScore,
    performanceScore,
    maintainabilityScore,
    overallScore
  };
}