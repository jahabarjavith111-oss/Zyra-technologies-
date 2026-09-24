import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Capabilities from "@/components/Capabilities";
import Intelligence from "@/components/Intelligence";
import MermaidFlowchart from "@/components/MermaidFlowchart";
import Products from "@/components/Products";
import Solutions from "@/components/Solutions";
import TechWall from "@/components/TechWall";
import About from "@/components/About";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Leadership from "@/components/Leadership";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Capabilities />
      <Intelligence />
      <MermaidFlowchart />
      <Products />
      <Solutions />
      <TechWall />
      <About />
      <Process />
      <Work />
      <Leadership />
      <Careers />
      <Contact />
    </main>
  );
}
