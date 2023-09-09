import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/Pages/HomePage";
import About from "./features/Pages/About";
import Contact from "./features/Pages/Contact";
import Limousine from "./features/Pages/Limousine";
import TourByLuxuryBus from "./features/Pages/TourByLuxuryBus";
import PassengerTransport from "./features/Pages/PassengerTransport";
import SchoolTransportation from "./features/Pages/SchoolTransportation";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/limousine-service" element={<Limousine />} />
      <Route exact path="/tour-by-luxury-bus" element={<TourByLuxuryBus />} />
      <Route exact path="/passenger-transportation" element={<PassengerTransport />} />
      <Route exact path="/school-transportation" element={<SchoolTransportation />} />
    </Routes>
  );
}

export default App;
