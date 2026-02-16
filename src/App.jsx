import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Service from "./pages/Service";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}


export default App;
