import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact — ZYRA Technologies",
  description: "Start a project with ZYRA. We reply within 2 business days.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Intelligent"
        desc="Have a problem worth solving? Tell us about it — we reply within 2 business days."
      />
      <Contact />
    </main>
  );
}
