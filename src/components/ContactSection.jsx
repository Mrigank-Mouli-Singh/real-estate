import ContactForm from "./ContactForm";
import MapSection from "./MapSection";
import OfficeHours from "./OfficeHours";

export default function ContactSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-[80px] py-12 lg:pt-12 lg:pb-24">
      {/* Mobile: Flex column with Map/Hours on top (order-1)
        Desktop: Grid with 2 columns and form on the left 
      */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* MAP & HOURS - On mobile, this appears first */}
        <div className="flex flex-col gap-10 order-1 lg:order-2">
          <MapSection />
          <OfficeHours />
        </div>

        {/* CONTACT FORM - On mobile, this appears below the map */}
        <div className="order-2 lg:order-1" id="contact-form">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}