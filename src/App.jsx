import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function Home() { return <h1 className="p-20 text-4xl">Home Page</h1>; }
function Services() { return <h1 className="p-20 text-4xl">Services Page</h1>; }
function About() { return <h1 className="p-20 text-4xl">About Page</h1>; }

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
