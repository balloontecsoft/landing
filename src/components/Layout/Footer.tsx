import React from "react";
import { Link } from "react-router-dom";

/**
 * Global Footer Component.
 * Contains the contact form and copyright information.
 *
 * @returns {JSX.Element} The footer component.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Contact Form Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">
            Contáctanos
          </h2>
          <p className="text-gray-500 mb-8 max-w-md">
            ¿Tienes un problema que necesita una solución de software?
            Escríbenos. Solo respondemos a consultas serias.
          </p>

          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="flex flex-col gap-6 w-full max-w-lg"
          >
            {/* Security Note: inputs strictly limited to text/email, no file uploads */}
            <div>
              <label htmlFor="name" className="sr-only">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Nombre completo"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
                title="Solo letras permitidas"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Correo electrónico"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="¿Cómo podemos ayudarte?"
                rows={4}
                className="w-full bg-transparent border-b border-gray-300 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 self-start px-8 py-3 bg-black text-white text-sm font-semibold tracking-wide uppercase hover:bg-gray-800 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-gray-100 pt-8">
          <p>
            &copy; {new Date().getFullYear()} BalloonTec. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {/* Prominent link to Privacy Policy as requested */}
            <Link
              to="#"
              className="hover:text-black transition-colors underline decoration-gray-300 underline-offset-4"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
