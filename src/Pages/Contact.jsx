import ContactHero from "../components/ContactHero";
import ContactSection from "../components/ContactSection";
import TalkDirect from "../components/TalkDirect";

export default function Contact() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen pt-20">
      <ContactHero />
      <ContactSection />
      <TalkDirect />
    </main>
  );
}
