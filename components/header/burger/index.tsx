'use client';

import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ExternalLink } from '../../link';

interface BurgerMenuProps {
  menuItems: INavItem[];
  className?: string;
}

export default function BurgerMenu({ menuItems, className }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="relative z-50 w-12 h-12 flex items-center justify-center focus:ring-2 focus:ring-(--eva-gold) rounded-md cursor-pointer"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-(--foreground) rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-[9px]' : 'rotate-0 translate-y-0'
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-(--foreground) rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-(--foreground) rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-[9px]' : 'rotate-0 translate-y-0'
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Slide-in Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-(--background) shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="p-6 border-b border-(--foreground)/30">
            <h2 className="text-xl font-cardo font-bold text-(--foreground)">Navigation</h2>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-4">
              {menuItems.map((item, index) => (
                <li key={`burger-${String(index)}`}>
                  <a href={item.href}>
                    <p className="p-4 text-xl">{item.label}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
