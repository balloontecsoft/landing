import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/**
 * Validation schema for the contact form.
 */
const schema = yup
  .object({
    name: yup
      .string()
      .required("El nombre es requerido")
      .min(2, "El nombre debe tener al menos 2 caracteres"),
    email: yup
      .string()
      .required("El correo es requerido")
      .email("El correo no es válido"),
    message: yup
      .string()
      .required("El mensaje es requerido")
      .min(10, "El mensaje debe tener al menos 10 caracteres"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

/**
 * Global Footer Component.
 * Contains the contact form and copyright information.
 * Refactored to use react-hook-form + yup for strict validation.
 *
 * @returns {JSX.Element} The footer component.
 */
const Footer: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus("idle");
      const response = await fetch("https://formspree.io/f/mwvnjynw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
  };

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
            onSubmit={handleSubmit(onSubmit)}
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
                placeholder="Nombre completo"
                title="Solo letras permitidas"
                className={`w-full bg-transparent border-b py-3 px-5 text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-accent transition-colors rounded-sm ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 ml-5">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Correo electrónico"
                className={`w-full bg-transparent border-b py-3 px-5 text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-accent transition-colors rounded-sm ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-5">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Mensaje
              </label>
              <textarea
                id="message"
                placeholder="¿Cómo podemos ayudarte?"
                rows={4}
                className={`w-full bg-transparent border-b py-3 px-5 text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-accent transition-colors resize-none rounded-sm ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                {...register("message")}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1 ml-5">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="self-start px-8 py-3 bg-black text-white text-sm font-semibold tracking-wide uppercase hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>

              {submitStatus === "success" && (
                <p className="text-emerald-600 text-sm font-medium">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-sm font-medium">
                  Hubo un error al enviar el mensaje. Por favor, inténtalo de
                  nuevo.
                </p>
              )}
            </div>
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
