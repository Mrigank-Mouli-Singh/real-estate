import { useState } from "react";
import "./App.css";
import Service from "./Pages/Service.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="text-center py-20">
              Welcome to the Real Estate App
            </div>
          }
        />
        <Route path="/services" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
