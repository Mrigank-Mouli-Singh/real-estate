import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Process from "../components/Process.jsx";
import Services from "../components/Services.jsx";
import Testimonials from "../components/Testimonials.jsx";

const Service = () => {
  return (
    <div className="min-h-screen bg-[#f8fcff] flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Services />
        <Process />
        <Testimonials />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Service;
