import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Navbar from "./components/Navbar";
import Footer from "./components/common/Footer";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import "./App.css";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
