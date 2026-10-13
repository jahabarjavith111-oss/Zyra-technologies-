"use client";

import React, { useEffect } from "react";

export default function MermaidFlowchart() {
  useEffect(() => {
    const diagram = document.createElement("div");
    diagram.className = "mermaid flowchart";
    diagram.innerHTML = `
      <style>
        .flowchart { font-family: "Space Grotesk", system-ui, sans-serif; }
        .node { fill:#b45309; stroke:#92400e; stroke-width:2px; rx:4px; }
        .node text { fill:#0a1630; font-size:14px; text-anchor:middle; dominant-baseline:middle; }
        .link { stroke:#b45309; stroke-width:2px; fill:none; }
        .label text { fill:#0a1630; font-size:13px; font-weight:600; text-anchor:middle; dominant-baseline:middle; }
        .sublabel text { fill:#64748b; font-size:11px; text-anchor:middle; dominant-baseline:middle; }
      </style>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="460" viewBox="0 0 800 460">
        <g class="flowchart">
          <!-- Links -->
          <g class="link"><line x1="400" y1="78" x2="400" y2="142"/></g>
          <g class="link"><line x1="400" y1="210" x2="160" y2="274"/></g>
          <g class="link"><line x1="400" y1="210" x2="640" y2="274"/></g>
          <g class="link"><line x1="160" y1="334" x2="80" y2="398"/></g>
          <g class="link"><line x1="640" y1="334" x2="720" y2="398"/></g>

          <!-- Nodes (circles) -->
          <g class="node"><circle cx="400" cy="50" r="28"/></g>
          <g class="node"><circle cx="400" cy="170" r="40"/></g>
          <g class="node"><circle cx="160" cy="300" r="28"/></g>
          <g class="node"><circle cx="640" cy="300" r="28"/></g>
          <g class="node"><circle cx="80" cy="380" r="28"/></g>
          <g class="node"><circle cx="720" cy="380" r="28"/></g>

          <!-- Main labels inside circles -->
          <g class="label"><text x="400" y="55" font-size="14" fill="#fff">AI</text></g>
          <g class="label"><text x="400" y="175" font-size="16" fill="#fff">CORE</text></g>
          <g class="label"><text x="160" y="305" font-size="13" fill="#fff">DATA</text></g>
          <g class="label"><text x="640" y="305" font-size="13" fill="#fff">SOFTWARE</text></g>
          <g class="label"><text x="80" y="385" font-size="12" fill="#fff">AUTOMATION</text></g>
          <g class="label"><text x="720" y="385" font-size="13" fill="#fff">CLOUD</text></g>

          <!-- Sub-labels below each node -->
          <g class="sublabel"><text x="400" y="100" font-size="11">Models · Agents · Reasoning</text></g>
          <g class="sublabel"><text x="160" y="350" font-size="11">Platforms · Analytics</text></g>
          <g class="sublabel"><text x="640" y="350" font-size="11">Apps · APIs · Systems</text></g>
          <g class="sublabel"><text x="80" y="430" font-size="11">Workflows · Orchestration</text></g>
          <g class="sublabel"><text x="720" y="430" font-size="11">Scale · Reliability · Delivery</text></g>
        </g>
      </svg>
    `;
    const main = document.querySelector(".mermaid-flowchart");
    if (main) main.appendChild(diagram);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-5 pt-12 pb-24">
      <div className="mermaid-flowchart" />
    </div>
  );
}