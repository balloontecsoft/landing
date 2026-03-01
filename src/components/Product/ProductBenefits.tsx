import React from "react";

/**
 * Renders the benefits grid for the Product Detail page.
 * Highlights key value propositions such as offline capability, privacy, and speed.
 *
 * @returns {JSX.Element} The benefits section component.
 */
const ProductBenefits: React.FC = () => {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="px-6 py-24 bg-gray-50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Visually hidden heading for a11y */}
        <h2 id="benefits-heading" className="sr-only">
          Beneficios de la aplicación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Block 1 */}
          <article className="border-l-4 border-black pl-6">
            <h3 className="text-2xl font-bold mb-4">100% Offline</h3>
            <p className="text-gray-600 leading-relaxed">
              No gastes tus megas en el mercado. Todo funciona de manera
              imperceptible sin conexión activa.
            </p>
          </article>

          {/* Block 2 */}
          <article className="border-l-4 border-black pl-6">
            <h3 className="text-2xl font-bold mb-4">Privacidad Total</h3>
            <p className="text-gray-600 leading-relaxed">
              Todo se procesa en tu celular. No recolectamos información ni la
              enviamos a terceros.
            </p>
          </article>

          {/* Block 3 */}
          <article className="border-l-4 border-black pl-6">
            <h3 className="text-2xl font-bold mb-4">Rápido y Seguro</h3>
            <p className="text-gray-600 leading-relaxed">
              Detección instantánea con solo apuntar a la serie del billete
              utilizando algoritmos optimizados.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
