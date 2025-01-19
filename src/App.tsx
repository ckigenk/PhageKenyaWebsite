import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Committee } from './pages/Committee';
import { Publications } from './pages/Publications';
import { Opportunities } from './pages/Opportunities';
import { Labs } from './pages/Labs';
import { ContactUs } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;