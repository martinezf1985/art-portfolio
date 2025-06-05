// src/components/NavBar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: "Fotos", to: "/" },
    { label: "Obras", to: "/art" },
    { label: "Actor", to: "/actor" },
    { label: "Contacto", to: "/contact" },
  ];

  return (
    <nav className="flex justify-center gap-8 text-lg font-medium text-violet-300">
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
    </nav>
  );
};

export default NavBar;
