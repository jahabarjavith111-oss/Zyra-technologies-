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
        .label text { fill:#0a1630; font-size:13px; font-weight:600; text-anchor:middle; dominant-baseline:middle; }
      </style>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="420" viewBox="0 0 800 420">
        <g class="flowchart">
          <!-- Links -->
          <g class="link"><line x1="400" y1="78" x2="400" y2="142"/></g>
          <g class="link"><line x1="340" y1="238" x2="188" y2="302"/></g>
          <g class="link"><line x1="460" y1="238" x2="612" y2="302"/></g>
          <g class="link"><line x1="120" y1="238" x2="40" y2="302"/></g>
          <g class="link"><line x1="680" y1="238" x2="760" y2="302"/></g>

          <!-- Nodes (circles) -->
          <g class="node"><circle cx="400" cy="50" r="28"/></g>
          <g class="node"><circle cx="400" cy="170" r="40"/></g>
          <g class="node"><circle cx="160" cy="260" r="28"/></g>
          <g class="node"><circle cx="640" cy="260" r="28"/></g>
          <g class="node"><circle cx="80" cy="340" r="28"/></g>
          <g class="node"><circle cx="720" cy="340" r="28"/></g>

          <!-- Labels inside circles -->
          <g class="label"><text x="400" y="55" font-size="14" fill="#fff">AI</text></g>
          <g class="label"><text x="400" y="175" font-size="16" fill="#fff">CORE</text></g>
          <g class="label"><text x="160" y="265" font-size="13" fill="#fff">DATA</text></g>
          <g class="label"><text x="640" y="265" font-size="13" fill="#fff">SOFTWARE</text></g>
          <g class="label"><text x="80" y="345" font-size="12" fill="#fff">AUTOMATION</text></g>
          <g class="label"><text x="720" y="345" font-size="13" fill="#fff">CLOUD</text></g>
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
        <div className="mermaid-flowchart mt-6" />
      </div>
    </div>
  );
}