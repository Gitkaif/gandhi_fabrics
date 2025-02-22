import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Branding from './pages/services/Branding';
import SocialMedia from './pages/services/SocialMedia';
import Design from './pages/services/Design';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/design" element={<Design />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;