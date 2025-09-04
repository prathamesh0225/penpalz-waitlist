import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"; // remove if not using react-router

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 border-t border-white/10">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white">Penpalz</h3>
          <p className="mt-2 text-sm text-gray-500">
            Find your accountability partner. Build, grow, and win—together.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:items-center space-y-3 md:space-y-2">
          <h4 className="text-white font-semibold">Quick Links</h4>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link to="/#perks" className="hover:text-brand-teal transition">
              Perks
            </Link>
            <Link to="/#how-it-works" className="hover:text-brand-teal transition">
              How It Works
            </Link>
            <Link to="/#waitlist-form" className="hover:text-brand-teal transition">
              Join Waitlist
            </Link>
            <Link to="/privacy" className="hover:text-brand-teal transition">
              Privacy Policy
            </Link>
          </nav>
        </div>

        {/* Socials */}
        <div className="flex flex-col md:items-end space-y-3">
          <h4 className="text-white font-semibold">Connect With Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal transition"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-white/10 mt-2 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Penpalz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
