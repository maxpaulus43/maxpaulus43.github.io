'use client';

import { useState } from 'react';
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

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Geometric background */}
      <div className="geometric-bg"></div>

      <div className="pb-20 text-xl max-w-4xl m-auto flex-grow">
        {showContactModal && (
          <ContactModal onClose={() => setShowContactModal(false)} />
        )}

        <header>
          <nav className="navbar fixed top-0 left-0 right-0 pl-5 pr-5 h-16 flex justify-between bg-black/80 backdrop-blur-sm border-b border-gray-800 md:shadow-none md:relative z-10">
            {navItems.map((navItem) => (
              <Link
                key={navItem.text}
                href={navItem.path}
                className={`pt-3 text-white hover:text-cyan-400 transition-colors font-medium`}
              >
                <i className={`fa ${navItem.icon} mr-2`}></i> {navItem.text}
              </Link>
            ))}
          </nav>
        </header>

        <main className="px-3 mt-16">
          {children}
        </main>
      </div>

      <footer className="bg-black border-t border-gray-800 text-white flex justify-around p-6">
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
          onClick={() => setShowContactModal(true)}
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
