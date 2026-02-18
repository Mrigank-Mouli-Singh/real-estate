import Hero from "../components/Home/Hero.jsx";
import Properties from "../components/Home/Properties.jsx";
import Stats from "../components/Home/Stats.jsx";
import MaterialSupply from "../components/Home/MaterialSupply.jsx";
import WhyChoose from "../components/Home/WhyChoose.jsx";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FCFF]">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="properties" className="py-8 pb-2 md:py-18">
          <Properties />
        </section>

        <section id="stats" className="">
          <Stats />
        </section>

        <section id="materials" className="py-16 md:py-24">
          <MaterialSupply />
        </section>

        <section id="about" className="py-10 pt-0 md:py-0 md:pb-20">
          <WhyChoose />
        </section>
      </main>
    </div>
  );
};

export default Home;
