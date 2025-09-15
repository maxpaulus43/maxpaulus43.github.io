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

      <footer className="bg-black border-t border-gray-800 text-white flex flex-col md:flex-row justify-around p-4 md:p-6 gap-4 md:gap-0">
        <div className="flex flex-col">
          <div className="text-xl font-bold text-cyan-400 mb-2">Navigate</div>
          {navItems.map((navItem) => (
            <Link
              key={navItem.text}
              href={navItem.path}
              className="pt-1 hover:text-cyan-400 transition-colors"
            >
              {navItem.text}
            </Link>
          ))}
        </div>

        <button
          className="text-xl font-bold hover:text-cyan-400 transition-colors"
          onClick={handleContactClick}
        >
          Contact Max!
        </button>

        <div className="flex flex-col">
          <div className="text-xl font-bold text-cyan-400 mb-2">Connect</div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/max-paulus-1b456aa8" className="hover:text-cyan-400 transition-colors">
              <i className="text-2xl fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/maxpaulus43" className="hover:text-cyan-400 transition-colors">
              <i className="text-2xl fab fa-github"></i>
            </a>
            <a href="mailto:maxpaulus43@gmail.com" className="hover:text-cyan-400 transition-colors">
              <i className="text-2xl fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
