
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Home/Hero.jsx';
import Properties from '../components/Home/Properties.jsx';
import Stats from '../components/Home/Stats.jsx';
import MaterialSupply from '../components/Home/MaterialSupply.jsx';
import WhyChoose from '../components/Home/WhyChoose.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FCFF]">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="properties" className="py-16 md:py-24">
          <Properties />
        </section>

        <section id="stats" className="py-12">
          <Stats />
        </section>

        <section id="materials" className="py-16 md:py-24">
          <MaterialSupply />
        </section>

        <section id="about" className="py-16 md:py-24">
          <WhyChoose />
        </section>
      </main>
      
    </div>
  );
};

export default Home;
