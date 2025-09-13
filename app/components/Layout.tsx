'use client';

import { useState } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal';
import MoreButton from './MoreButton';

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

  const overflowItems = navItems.filter((item) => item.overflow);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="pb-20 text-xl max-w-4xl m-auto flex-grow">
        {showContactModal && (
          <ContactModal onClose={() => setShowContactModal(false)} />
        )}

        <header>
          <nav className="navbar fixed top-0 left-0 right-0 pl-5 pr-5 h-12 flex justify-between bg-white shadow-navbar md:shadow-none md:relative z-10">
            {navItems.map((navItem) => (
              <Link
                key={navItem.text}
                href={navItem.path}
                className={`pt-2 text-gray-800 hover:text-blue-600 transition-colors ${navItem.overflow ? 'hidden md:block' : ''}`}
              >
                <i className={`fa ${navItem.icon} mr-1`}></i> {navItem.text}
              </Link>
            ))}
            <div className="pt-2 md:hidden">
              <MoreButton items={overflowItems} />
            </div>
          </nav>
        </header>

        <main className="px-3 mt-16">
          {children}
        </main>
      </div>

      <footer className="bg-gray-700 text-white flex justify-around p-4">
        <div className="flex flex-col">
          <div className="text-xl font-bold">Navigate</div>
          {navItems.map((navItem) => (
            <Link
              key={navItem.text}
              href={navItem.path}
              className="pt-2"
            >
              {navItem.text}
            </Link>
          ))}
        </div>

        <button
          className="text-xl font-bold"
          onClick={() => setShowContactModal(true)}
        >
          Contact Max!
        </button>

        <div className="flex flex-col">
          <div className="text-xl font-bold">Links</div>
          <a href="https://linkedin.com/in/max-paulus-1b456aa8">
            <i className="text-xl fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/maxpaulus43">
            <i className="text-xl fab fa-github"></i>
          </a>
          <a href="mailto:maxpaulus43@gmail.com">
            <i className="text-xl fa fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
