import React from "react";
import { motion, type Variants } from "framer-motion";

/**
 * Props for the ProductHero component.
 */
interface ProductHeroProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

/**
 * Renders the hero section for the Product Detail page.
 * Includes the product icon, main value proposition, and the primary Call to Action.
 * Utilizes Framer Motion for staggered entrance animations.
 *
 * @param {ProductHeroProps} props - The animation variants for the container and items.
 * @returns {JSX.Element} The animated hero section component.
 */
const ProductHero: React.FC<ProductHeroProps> = ({
  containerVariants,
  itemVariants,
}) => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="px-6 pt-24 pb-32 border-b border-gray-100 overflow-hidden"
    >
      <motion.div
        className="container mx-auto max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="w-24 h-24 mx-auto mb-10 overflow-hidden border border-gray-100 p-2 shadow-sm rounded-2xl"
        >
          <img
            src="/icon_original.png"
            alt="Ícono de la aplicación Billete Seguro"
            className="w-full h-full object-contain"
            loading="eager"
          />
        </motion.div>

        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-8"
        >
          Protege tu negocio de los billetes robados
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-500 mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          Verifica billetes al instante usando tu cámara y nuestra base de datos
          actualizada.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <motion.a
            href="https://github.com/balloontecsoft/billete-seguro-downloads/releases/download/v1.1.1/billete-seguro-v1.1.1.apk"
            aria-label="Descargar el archivo APK de Billete Seguro gratis"
            className="inline-flex items-center justify-center px-12 py-5 bg-brand-accent text-white text-lg font-bold tracking-wide uppercase shadow-2xl shadow-brand-accent/30 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            Descargar APK Gratis
          </motion.a>
          <p className="text-sm font-medium text-gray-400 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Diseñada con los datos oficiales de series invalidadas por el Banco
            Central de Bolivia (BCB).
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductHero;
