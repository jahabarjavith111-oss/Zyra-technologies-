"use client";

import React, { useEffect } from "react";

export default function MermaidFlowchart() {
  useEffect(() => {
    // Render the flowchart as styled HTML after mount
    const diagram = document.createElement("div");
    diagram.className = "mermaid flowchart";
    diagram.innerHTML = `
      <style>
        .flowchart { font-family: "Space Grotesk", system-ui, sans-serif; }
        .node { fill:#b45309; stroke:#92400e; stroke-width:2px; rx:4px; }
        .node text { fill:#0a1630; font-size:14px; text-anchor:middle; dominant-baseline:middle; }
        .link { stroke:#b45309; stroke-width:2px; fill:none; }
        .link text { fill:#0a1630; font-size:12px; }
      </style>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="420" viewBox="0 0 800 420">
        <g class="flowchart">
          <g class="link"><line x1="400" y1="50" x2="400" y2="130"/></g>
          <g class="link"><line x1="400" y1="130" x2="160" y2="210"/></g>
          <g class="link"><line x1="400" y1="130" x2="640" y2="210"/></g>
          <g class="link"><line x1="160" y1="210" x2="80" y2="320"/></g>
          <g class="link"><line x1="640" y1="210" x2="720" y2="320"/></g>
          <g class="node"><circle cx="400" cy="50" r="28"/></g>
          <g class="node"><circle cx="160" cy="210" r="28"/></g>
          <g class="node"><circle cx="640" cy="210" r="28"/></g>
          <g class="node"><circle cx="80" cy="320" r="28"/></g>
          <g class="node"><circle cx="720" cy="320" r="28"/></g>
          <g class="label"><text x="400" y="0" font-size="16" fill="#fff">AI</text></g>
          <g class="label"><text x="120" y="270" font-size="14">DATA</text></g>
          <g class="label"><text x="600" y="270" font-size="14">SOFTWARE</text></g>
          <g class="label"><text x="40" y="380" font-size="14">AUTOMATION</text></g>
          <g class="label"><text x="760" y="380" font-size="14">CLOUD</text></g>
        </g>
      </svg>
    `;
    const main = document.querySelector(".mermaid-flowchart");
    if (main) main.appendChild(diagram);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-5 pt-12 pb-24">
      <div className="border rounded-xl border-b-[2px] border-b-[#b45309] bg-[#f5f8fc] p-6">
        <h2 className="font-display text-xl font-bold text-[#b45309] mb-4">ZYRA Intelligence Ecosystem</h2>
        <p className="text-muted text-[14px] leading-relaxed">
          One connected ecosystem — data and software feed automation, and everything
          runs on cloud.
        </p>
      </div>
    </div>
  );
}