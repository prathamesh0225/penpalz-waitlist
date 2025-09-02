import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#perks', title: 'Perks' },
    { href: '#how-it-works', title: 'How It Works' },
    { href: '#timeline', title: 'Timeline' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full ">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-white">
            Penpalz
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-2 md:flex border px-5 py-2 rounded-full border-white/10 bg-brand-dark/80 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a
            href="#waitlist-form"
            className="hidden rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0D1117] md:block"

          >
            Join Waitlist
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-40 transform bg-brand-dark transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto flex h-full flex-col justify-center px-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-6 top-[26px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {link.title}
              </a>
            ))}
            <a
              href="#waitlist-form"
              className="mt-8 w-full max-w-xs rounded-lg bg-brand-teal px-5 py-3 text-center text-lg font-semibold text-brand-dark"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;