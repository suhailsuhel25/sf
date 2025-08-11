import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Category from "./components/Category";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-red-50 min-h-screen font-[Poppins] relative">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Category />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
