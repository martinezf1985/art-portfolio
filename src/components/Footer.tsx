import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-violet-900 text-white dark:bg-black m-4 rounded-lg shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            {/* Reemplaza el src con tu logo */}
            <img src="/logo.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              TuMarca
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium dark:text-gray-400 sm:mb-0">
            {['About', 'Privacy Policy', 'Licensing', 'Contact'].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">
          © {new Date().getFullYear()} <a href="/" className="hover:underline text-white">TuMarca™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
