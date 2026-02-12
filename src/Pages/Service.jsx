import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import Process from "../components/Process.jsx";
import Services from "../components/Services.jsx";
import Testimonials from "../components/Testimonials.jsx";


const Service  = () => {
  return (
    <div className="min-h-screen bg-[#f8fcff]">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Service;
