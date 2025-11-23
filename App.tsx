import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ScrollToTop />
        
        <footer className="bg-white border-t border-gray-100 py-6 text-center">
            <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Karthikeyan S. All rights reserved.
            </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
