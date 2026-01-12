
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (path: string) => 
    `text-sm font-semibold tracking-widest uppercase transition-colors hover:text-gray-400 ${
      location.pathname === path ? 'text-black' : 'text-gray-500'
    }`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-gray-100' : 'bg-transparent py-8'
    }`}>
      <div className="wrap flex justify-between items-center">
        <Link to="/" className="block">
          {/* Logo Image - Replace src with your actual logo file path */}
          <img 
            src="https://placehold.co/200x50/000000/FFFFFF?text=PORTFOLIO" 
            alt="UI/UX Portfolio Logo" 
            className="h-6 md:h-8 w-auto object-contain"
          />
        </Link>
        <div className="space-x-8 md:space-x-12">
          <Link to="/work" className={linkClass('/work')}>Work</Link>
          <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
