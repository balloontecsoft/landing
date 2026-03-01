import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Home Page Component.
 * Acts as the primary landing entry point representing BalloonTec's core branding.
 * Utilizes Framer Motion for premium entering animations.
 *
 * @returns {JSX.Element} The home page view.
 */
const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
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
  };

  return (
    <main className="bg-white selection:bg-black selection:text-white">
      {/* Minimalist Hero Section */}
      <section
        aria-labelledby="home-hero-heading"
        className="min-h-[75vh] flex flex-col justify-center items-center text-center px-6 pt-20 pb-32"
      >
        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            id="home-hero-heading"
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black leading-[1.05]"
          >
            Construyendo <span className="text-gray-400">soluciones</span> para{" "}
            <span className="bg-linear-to-r from-red-500 via-amber-500 to-emerald-600 bg-clip-text text-transparent">
              Bolivia
            </span>
            .
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Somos un equipo independiente de desarrolladores creando software
            ágil y accesible para resolver problemas reales de nuestra
            comunidad.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-8">
            <Link
              to="/productos"
              className="inline-flex items-center justify-center px-10 py-5 bg-black text-white text-lg font-medium tracking-wide transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-300/50"
            >
              Ver nuestros productos
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Very clean divider/spacer before footer */}
      <div className="h-32 bg-gray-50/50" aria-hidden="true"></div>
    </main>
  );
};

export default Home;
