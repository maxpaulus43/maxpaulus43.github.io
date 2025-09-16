'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal';

interface NavItem {
  text: string;
  path: string;
  icon: string;
  overflow?: boolean;
}

const navItems: NavItem[] = [
  { text: "Home", path: "/", icon: "fa-home" },
  { text: "Work", path: "/portfolio", icon: "fa fa-folder-open" },
  { text: "Blog", path: "/blog", icon: "fa-book" },
  { text: "Now", path: "/now", icon: "fa-clock", overflow: true },
];

interface LayoutProps {
  children: React.ReactNode;
  showContactModal?: boolean;
  onContactModalClose?: () => void;
  onContactClick?: () => void;
}

export default function Layout({ children, showContactModal = false, onContactModalClose, onContactClick }: LayoutProps) {
  const [internalShowContactModal, setInternalShowContactModal] = useState(false);

  const isModalOpen = showContactModal || internalShowContactModal;

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      setInternalShowContactModal(true);
    }
  };

  const handleModalClose = () => {
    if (onContactModalClose) {
      onContactModalClose();
    } else {
      setInternalShowContactModal(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Geometric background */}
      <div className="geometric-bg"></div>

      <div className="pb-20 text-lg md:text-xl max-w-4xl m-auto flex-grow">
        {isModalOpen && (
          <ContactModal onClose={handleModalClose} />
        )}

        <header>
          <nav className="navbar fixed top-0 left-0 right-0 px-3 md:px-5 h-16 flex justify-between bg-black/80 backdrop-blur-sm border-b border-gray-800 md:shadow-none md:relative z-10">
            {navItems.map((navItem) => (
              <Link
                key={navItem.text}
                href={navItem.path}
                className={`pt-3 text-white hover:text-cyan-400 transition-colors font-medium`}
              >
                {navItem.text}
              </Link>
            ))}
          </nav>
        </header>

        <main className="px-2 md:px-3 mt-16">
          {children}
        </main>
      </div>

      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-700 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,212,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-row justify-center lg:justify-around">

            {/* Navigation Section - Hidden on mobile since nav bar is fixed */}
            <div className="space-y-6 hidden md:block">
              <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                <i className="fas fa-compass text-lg"></i>
                Navigate
              </h3>
              <div className="space-y-3">
                {navItems.map((navItem) => (
                  <Link
                    key={navItem.text}
                    href={navItem.path}
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 group py-2"
                  >
                    <i className={`fas ${navItem.icon} text-sm w-4 text-center group-hover:scale-110 transition-transform`}></i>
                    <span className="group-hover:translate-x-1 transition-transform">{navItem.text}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                <i className="fas fa-share-nodes text-lg"></i>
                Connect
              </h3>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/max-paulus-1b456aa8"
                  className="flex items-center gap-4 p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-cyan-400 hover:bg-gray-800 transition-all duration-300 group"
                  aria-label="LinkedIn Profile"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="fab fa-linkedin-in text-white"></i>
                  </div>
                  <div className="flex-1">
                    <span className="text-white font-medium">LinkedIn</span>
                    <p className="text-gray-400 text-sm">Professional network</p>
                  </div>
                  <i className="fas fa-arrow-right text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"></i>
                </a>

                <a
                  href="https://github.com/maxpaulus43"
                  className="flex items-center gap-4 p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-cyan-400 hover:bg-gray-800 transition-all duration-300 group"
                  aria-label="GitHub Profile"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="fab fa-github text-white"></i>
                  </div>
                  <div className="flex-1">
                    <span className="text-white font-medium">GitHub</span>
                    <p className="text-gray-400 text-sm">Code repositories</p>
                  </div>
                  <i className="fas fa-arrow-right text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"></i>
                </a>

                <a
                  href="mailto:maxpaulus43@gmail.com"
                  className="flex items-center gap-4 p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-cyan-400 hover:bg-gray-800 transition-all duration-300 group"
                  aria-label="Email Contact"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="fas fa-envelope text-black"></i>
                  </div>
                  <div className="flex-1">
                    <span className="text-white font-medium">Email</span>
                    <p className="text-gray-400 text-sm">Direct contact</p>
                  </div>
                  <i className="fas fa-arrow-right text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center sm:text-left">
                &copy; 2025 Max Paulus. Built with passion
              </p>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>Next.js</span>
                <span>•</span>
                <span>Tailwind CSS</span>
                <span>•</span>
                <span>Deployed on Github Pages</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
