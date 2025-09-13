'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  text: string;
  path: string;
  icon: string;
  overflow?: boolean;
}

interface MoreButtonProps {
  items: NavItem[];
}

export default function MoreButton({ items }: MoreButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1"
      >
        <i className="fa fa-bars"></i>
        <span>More</span>
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border">
            <div className="py-1">
              {items.map((item) => (
                <Link
                  key={item.text}
                  href={item.path}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <i className={`fa ${item.icon} mr-2`}></i>
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
