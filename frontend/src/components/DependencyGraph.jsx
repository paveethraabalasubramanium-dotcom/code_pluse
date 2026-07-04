import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function DependencyGraph({ code }) {
  const ref = useRef();

  useEffect(() => {
    const nodes = [
      { id: "main" },
      { id: "function" },
      { id: "console" }
    ];

    const links = [
      { source: "main", target: "function" },
      { source: "function", target: "console" }
    ];

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 400;
    const height = 300;

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .style("stroke", "#999");

    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 10)
      .style("fill", "steelblue");

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });

  }, [code]);

  return (
    <svg ref={ref} width={400} height={300}></svg>
  );
}