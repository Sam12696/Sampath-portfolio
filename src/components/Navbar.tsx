
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Experience', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
  ];

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 backdrop-blur-md border-b border-white/5'
          : 'py-5'
      }`}
      style={{ backgroundColor: isScrolled ? 'rgba(10,13,26,0.92)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          >
            <span className="text-foreground">SN</span>
            <span className="cyan-text">.</span>
            <span className="text-foreground">ARCHITECT</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center outline-button text-sm"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
          >
            Contact Me
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out transform md:hidden`}
        style={{
          backgroundColor: 'hsl(231 47% 7%)',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-muted-foreground hover:cyan-text transition-colors"
              onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); scrollTo(link.href); }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="outline-button mt-4"
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); scrollTo('#contact'); }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
