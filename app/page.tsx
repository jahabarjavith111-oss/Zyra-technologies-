import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Capabilities from "@/components/Capabilities";
import Intelligence from "@/components/Intelligence";
import Products from "@/components/Products";
import Solutions from "@/components/Solutions";
import TechWall from "@/components/TechWall";
import About from "@/components/About";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Leadership from "@/components/Leadership";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { HOME_FAQS } from "@/lib/faqs";
import { faqSchema } from "@/lib/seo";

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Hero />
      <Intro />
      <Capabilities />
      <Intelligence />
      <Products />
      <Solutions />
      <TechWall />
      <About />
      <Process />
      <Work />
      <Leadership />
      <Careers />
      <FaqSection items={HOME_FAQS} title="ZyraTec — frequently asked questions" />
      <Contact />
    </main>
  );
}
