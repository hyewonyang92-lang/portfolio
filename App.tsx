import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
        <Navbar />
        <div className="wrap">
          <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </main>
          
          <footer className="py-12 border-t border-gray-100">
            <div className="text-[10px] uppercase tracking-widest text-gray-400 text-center">
              <p>© 2026 Yang Hyewon · UI/UX Designer</p>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;