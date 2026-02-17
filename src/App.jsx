import { Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Service from "./Pages/Service";
import Navbar from "./components/Navbar";
import Footer from "./components/common/Footer";
import Home from "./Pages/Home";


import Contact from "./pages/Contact";
import Service from "./Pages/Service.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";

import "./App.css";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
