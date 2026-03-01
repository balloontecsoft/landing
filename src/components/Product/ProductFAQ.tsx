import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Interface representing a single FAQ item.
 */
interface FAQData {
  question: string;
  answer: string;
}

const faqs: FAQData[] = [
  {
    question: "¿Necesita conexión a internet para funcionar?",
    answer:
      "No. Billete Seguro es 100% offline. Todo el análisis se hace directamente en tu celular, por lo que no gastarás tus megas y podrás usarla en cualquier mercado o trufi.",
  },
  {
    question: "¿Se guardan las fotos de mi cámara o mis datos?",
    answer:
      "Absolutamente no. Tu privacidad es intocable. La aplicación no guarda fotos, no graba video y no tiene acceso a tus datos personales. El análisis es instantáneo y local.",
  },
  {
    question: "¿Por qué la aplicación es totalmente gratis?",
    answer:
      "Somos un equipo de desarrolladores independientes de Bolivia. Construimos esta herramienta para brindar seguridad y tranquilidad a nuestra comunidad frente a la incertidumbre de los billetes reportados.",
  },
  {
    question: "¿En qué teléfonos funciona la aplicación?",
    answer:
      "Billete Seguro está diseñada exclusivamente para dispositivos Android. Es compatible con la gran mayoría de teléfonos actuales (requiere Android 6.0 o superior) y solo necesitas que tu cámara funcione correctamente para escanear las series.",
  },
];

/**
 * Individual FAQ accordion item handling its own open/close state.
 * Leverages Framer Motion's AnimatePresence for smooth height transitions.
 *
 * @param {FAQData} props - The question and answer to display.
 * @returns {JSX.Element} The interactive FAQ item.
 */
const FAQItem: React.FC<FAQData> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border-b border-gray-200 py-6 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm"
      >
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-accent transition-colors">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="ml-4 shrink-0 text-gray-400 group-hover:text-brand-accent"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600 leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

/**
 * Renders the FAQ section containing a dynamic list of FAQItems.
 *
 * @returns {JSX.Element} The complete FAQ section component.
 */
const ProductFAQ: React.FC = () => {
  return (
    <section
      aria-labelledby="faq-heading"
      className="px-6 py-24 bg-white border-t border-gray-100"
    >
      <div className="container mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="text-4xl font-black mb-12 text-center tracking-tight"
        >
          Preguntas Frecuentes
        </h2>
        <div className="bg-white">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFAQ;
