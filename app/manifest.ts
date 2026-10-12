import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ZYRA Technologies — Engineering Intelligence. Building What's Next.",
    short_name: "ZYRA",
    description:
      "ZYRA Technologies is a software company in Trichy, India building AI systems, enterprise software, data, cloud, cybersecurity solutions and the ZELDA women safety app.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f8fc",
    theme_color: "#0a1630",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
