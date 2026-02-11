import ContactForm from "./ContactForm";
import MapSection from "./MapSection";
import OfficeHours from "./OfficeHours";

export default function ContactSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-[80px] py-24 grid grid-cols-2 gap-20">
      <ContactForm />
      <div>
        <MapSection />
        <OfficeHours />
      </div>
    </section>
  );
}
