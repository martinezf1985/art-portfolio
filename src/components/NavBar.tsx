import React, { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Contact', href: '#' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-violet-900 dark:bg-black text-white shadow-sm">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
          {/* Reemplaza con tu logo */}
          <img src="/logo.svg" alt="Logo" className="h-8" />
          <span className="text-2xl font-semibold">TuMarca</span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div
          className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-menu"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 px-3 rounded-sm hover:underline hover:text-violet-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
