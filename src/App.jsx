import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Service from "./Pages/Service.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";

// function Home() {
//   return <h1 className="p-20 text-4xl">Home Page</h1>;
// }

// function About() {
//   return <h1 className="p-20 text-4xl">About Page</h1>;
// }

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
