import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Fotos", to: "/" },
    { label: "Obras", to: "/art" },
    { label: "Actor", to: "/actor" },
    { label: "Contacto", to: "/contact" },
  ];

  // Cerrar menú cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen]);

  return (
    <nav className="relative">
      {/* Menú desktop */}
      <div className="hidden md:flex justify-center gap-8 text-lg font-medium text-violet-300">
        {navItems.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={`hover:text-white transition-all duration-300 ${
              location.pathname === to
                ? "text-white underline underline-offset-4"
                : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Botón hamburguesa móvil */}
      <button
        className="md:hidden absolute right-0 top-0 text-violet-300 hover:text-white transition-colors p-2"
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpen(!isMenuOpen);
        }}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
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

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-lg font-medium text-violet-300 bg-black/90 rounded-lg p-4 shadow-lg">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`hover:text-white transition-all duration-300 py-2 ${
                location.pathname === to
                  ? "text-white underline underline-offset-4"
                  : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
