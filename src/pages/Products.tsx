import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Products Page Component.
 * Displays a list of available BalloonTec applications with staggered entrance animations.
 *
 * @returns {JSX.Element} The products list page.
 */
const Products: React.FC = () => {
  return (
    <main className="bg-white min-h-[80vh] px-6 py-20">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-24">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black">
            Nuestros <br /> Productos
          </h1>
        </header>

        {/* Product Grid */}
        <motion.section
          aria-label="Catálogo de productos"
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Billete Seguro Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring" as const,
                  stiffness: 100,
                  damping: 20,
                },
              },
            }}
          >
            <Link
              to="/productos/billete-seguro"
              className="group block border border-gray-100 hover:border-gray-300 p-8 md:p-12 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-100 bg-white h-full"
            >
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  {/* Product Logo / Icon */}
                  <div className="w-24 h-24 bg-gray-50 border border-gray-100 p-4 mb-6 shadow-sm flex items-center justify-center">
                    <img
                      src="/icon_original.png"
                      alt="Billete Seguro Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-black mb-4 group-hover:underline decoration-2 underline-offset-4">
                    Billete Seguro
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    Verifica billetes al instante usando tu cámara y detecta
                    billetes falsificados con precisión.
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-gray-50">
                  <span className="inline-flex items-center text-black font-semibold uppercase tracking-widest text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Ver detalles
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Upcoming Apps Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring" as const,
                  stiffness: 100,
                  damping: 20,
                },
              },
            }}
            className="flex flex-col h-full items-center justify-center border-2 border-dashed border-gray-200 bg-gray-50/50 p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-400">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-400 mb-2">
              Más aplicaciones
            </h3>
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
              Próximamente
            </p>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
};

export default Products;
