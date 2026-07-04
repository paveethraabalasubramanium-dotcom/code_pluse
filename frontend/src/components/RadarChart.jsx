import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

export default function RadarChartView({ scores }) {
  const data = [
    { subject: "Bug", value: scores.bugScore },
    { subject: "Logic", value: scores.logicScore },
    { subject: "Performance", value: scores.performanceScore },
    { subject: "Maintainability", value: scores.maintainabilityScore },
  ];

  return (
    <div style={{ width: 400, height: 300 }}>
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}