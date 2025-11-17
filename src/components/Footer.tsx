import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-violet-300">
              FERDINAN MARTINS
            </span>
            <p className="text-sm text-gray-400 mt-1">Actor & Artista Visual</p>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 gap-4">
            <li>
              <Link to="/" className="hover:text-violet-300 transition-colors">
                Fotos
              </Link>
            </li>
            <li>
              <Link to="/art" className="hover:text-violet-300 transition-colors">
                Obras
              </Link>
            </li>
            <li>
              <Link to="/actor" className="hover:text-violet-300 transition-colors">
                Actor
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-violet-300 transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <span className="mb-2 sm:mb-0">
            © {currentYear} Ferdinan Martins. Todos los derechos reservados.
          </span>
          <div className="flex gap-4">
            <a
              href="mailto:f.h.martinez99@gmail.com"
              className="hover:text-violet-300 transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
