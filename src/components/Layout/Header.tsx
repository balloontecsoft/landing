import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion.create ? motion.create(Link) : (motion as any)(Link);

/**
 * Global Header Component.
 * Contains the main navigation and branding for the BalloonTec website.
 * Features a sticky transparent blur effect and Framer Motion micro-interactions.
 *
 * @returns {JSX.Element} The header component.
 */
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <MotionLink
          to="/"
          aria-label="Ir a la página de inicio de BalloonTec"
          whileHover={{ scale: 1.02 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
        >
          <img
            src="/BalloonTec_logo.webp"
            alt="Logotipo de BalloonTec"
            className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
          />
          <span className="text-2xl font-black tracking-tighter uppercase font-['Roboto'] hidden sm:block text-black">
            BalloonTec
          </span>
        </MotionLink>
        <nav aria-label="Navegación principal">
          <ul className="flex space-x-8 text-sm font-semibold tracking-wide uppercase">
            <motion.li
              whileHover={{ scale: 1.02, opacity: 0.8 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <Link
                to="/"
                className="text-gray-500 transition-colors duration-200"
              >
                Inicio
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.02, opacity: 0.8 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <Link
                to="/productos"
                className="text-gray-500 transition-colors duration-200"
              >
                Productos
              </Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
