import React from "react";
import { Helmet } from "react-helmet-async";
import ProductHero from "../components/Product/ProductHero";
import ProductBenefits from "../components/Product/ProductBenefits";
import ProductFAQ from "../components/Product/ProductFAQ";
import ProductBetaForm from "../components/Product/ProductBetaForm";

/**
 * Main Product Detail Page component.
 * Acts as a container for SEO metadata and modular product sections.
 * Optimized for SEO and accessibility.
 *
 * @returns {JSX.Element} The composed Product Detail page.
 */
const ProductDetail: React.FC = () => {
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
    <div className="bg-white text-black selection:bg-brand-accent selection:text-white">
      <Helmet>
        <title>Billete Seguro | Verifica billetes al instante</title>
        <meta
          name="description"
          content="Escanea y verifica si tus billetes pertenecen a las series reportadas. 100% offline, gratis y privado."
        />
        <meta property="og:title" content="Billete Seguro | BalloonTec" />
        <meta
          property="og:description"
          content="Protege tu negocio. Verifica billetes de la Serie B y más, sin internet."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
      </Helmet>

      <ProductHero
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <ProductBenefits />

      <ProductFAQ />

      <ProductBetaForm />
    </div>
  );
};

export default ProductDetail;
