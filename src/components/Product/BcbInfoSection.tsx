import React from "react";
import { motion } from "framer-motion";
import corte10 from "../../assets/corte10.jpg";
import corte20 from "../../assets/corte20.jpg";
import corte50 from "../../assets/corte50.jpg";

/**
 * Legal Information and BCB Official Images Section.
 * Enforces liability waivers according to Bolivian legislation and displays visual references.
 *
 * @returns {JSX.Element} The BCB Info Section component.
 */
const BcbInfoSection: React.FC = () => {
  return (
    <section
      aria-labelledby="bcb-legal-heading"
      className="px-6 py-24 bg-white border-t border-gray-100"
    >
      <div className="container mx-auto max-w-5xl">
        {/* A. Caja de Aviso Legal */}
        <div className="mb-20 bg-amber-50 border-l-4 border-amber-500 p-6 md:p-8 rounded-r-lg shadow-sm">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              {/* Alert Warning Icon */}
              <svg
                className="w-8 h-8 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div>
              <h3
                id="bcb-legal-heading"
                className="text-lg font-bold text-amber-900 mb-2 uppercase tracking-wide"
              >
                Aviso Legal y Exención de Responsabilidad
              </h3>
              <p className="text-amber-800/90 leading-relaxed font-medium md:text-lg text-justify text-sm">
                'Billete Seguro' es una herramienta tecnológica de referencia
                basada en reconocimiento óptico (OCR) y NO tiene afiliación
                oficial con el Banco Central de Bolivia (BCB). En cumplimiento
                de la Ley N° 453 y el Código Civil Boliviano, se advierte al
                usuario que el sistema puede presentar márgenes de error por
                factores externos (iluminación, calidad de cámara, desgaste del
                billete). BalloonTec no asume responsabilidad civil, penal ni
                administrativa por daños económicos, falsos positivos o la
                aceptación de billetes invalidados. El usuario asume total
                responsabilidad al utilizar esta aplicación y debe realizar la
                verificación manual obligatoria contrastando con la información
                oficial del BCB.
              </p>
            </div>
          </div>
        </div>

        {/* B. Galería de Imágenes Oficiales (BCB) */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Guía Visual del BCB
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Cortes de billetes y series observadas oficialmente. Utiliza esta
              referencia visual para la verificación manual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center shadow-sm"
            >
              <img
                src={corte10}
                alt="Corte de 10 Bolivianos serie observada"
                loading="lazy"
                className="w-full h-auto object-contain rounded-lg mb-4"
              />
              <span className="font-bold text-gray-700 tracking-wide">
                10 Bolivianos
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center shadow-sm"
            >
              <img
                src={corte20}
                alt="Corte de 20 Bolivianos serie observada"
                loading="lazy"
                className="w-full h-auto object-contain rounded-lg mb-4"
              />
              <span className="font-bold text-gray-700 tracking-wide">
                20 Bolivianos
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center shadow-sm"
            >
              <img
                src={corte50}
                alt="Corte de 50 Bolivianos serie observada"
                loading="lazy"
                className="w-full h-auto object-contain rounded-lg mb-4"
              />
              <span className="font-bold text-gray-700 tracking-wide">
                50 Bolivianos
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BcbInfoSection;
