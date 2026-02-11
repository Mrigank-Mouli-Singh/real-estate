export default function ContactHero() {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="relative w-[1440px] h-[625px]">

        {/* TEXT BLOCK */}
        <div className="absolute left-[80px] top-[205px]">
          <h1 className="font-DM Serif Display font-normal text-[70px] leading-[70px] text-black">
            Contact Us
          </h1>

          <p className="font-manrope font-medium text-[32px] leading-[32px] text-black/50 mt-[40px] max-w-[701px]">
            Get in touch with our team for expert guidance and personalized real estate support.
            We’re here to help you make confident, well-informed decisions.
          </p>
        </div>

        {/* ILLUSTRATION */}
        <img
          src="/images/contact-illustration.png"
          alt="Customer support illustration"
          className="absolute top-[144px] left-[932px] w-[428px] h-[428px] object-contain"
        />

      </div>
    </section>
  );
}
