import React from "react";

/**
 * Renders the Beta subscription form for the Product Detail page.
 * Captures user emails for early access notification.
 *
 * @returns {JSX.Element} The beta waitlist form component.
 */
const ProductBetaForm: React.FC = () => {
  return (
    <section aria-labelledby="beta-heading" className="px-6 py-32 bg-gray-50">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="bg-white border-2 border-gray-100 p-10 md:p-16 shadow-2xl">
          <h2 id="beta-heading" className="text-3xl font-bold mb-6">
            Próximamente en Google Play
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Por las emergencias de seguridad actuales hemos lanzado la app
            directamente como APK. Si deseas probar la versión oficial (Beta) en
            la Play Store, ingresa tu correo (requerimos al menos 20 testers).
          </p>

          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4"
          >
            <label htmlFor="beta-email" className="sr-only">
              Correo electrónico para acceso Beta
            </label>
            <input
              type="email"
              id="beta-email"
              name="email"
              required
              placeholder="Ingresa tu correo"
              className="grow border-b-2 border-gray-200 py-4 px-2 text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black text-white font-bold tracking-wider hover:bg-gray-800 transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Notificarme
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductBetaForm;
