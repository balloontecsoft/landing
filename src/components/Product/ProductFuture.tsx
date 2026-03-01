import React from "react";

/**
 * Combined Future and Community Section.
 * Contains both the Google Play Beta waitlist form and the TikTok community engagement link,
 * presented side-by-side for desktop and stacked for mobile.
 *
 * @returns {JSX.Element} The composed section.
 */
const ProductFuture: React.FC = () => {
  return (
    <section
      aria-labelledby="future-heading"
      className="relative px-6 py-24 bg-gray-50 overflow-hidden isolate"
    >
      {/* Background Blobs for shared section aesthetics */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#4285F4]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#34A853]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-6000"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            id="future-heading"
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          >
            Próximamente
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Estamos trabajando para brindarte una buena herramienta tecnológica.
            Únete a nuestra beta oficial o danos tu feedback directo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Card 1: Google Play Beta Form */}
          <div className="flex-1 bg-white/70 backdrop-blur-xl border border-white/50 p-8 md:p-12 shadow-2xl rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex justify-start mb-6">
                <div className="w-16 h-16 bg-white border border-gray-100/50 rounded-2xl shadow-xl flex items-center justify-center p-3">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path fill="none" d="M0,0h40v40H0V0z"></path>
                    <g>
                      <path
                        d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z"
                        fill="#EA4335"
                      ></path>
                      <path
                        d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z"
                        fill="#FBBC04"
                      ></path>
                      <path
                        d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z"
                        fill="#34A853"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Lanzamiento en{" "}
                <span className="text-[#4285F4]">Play Store</span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Por emergencias lanzamos la app como APK. Si deseas probar la
                versión oficial (Beta) en la Play Store de Google y ayudarnos a
                testear, déjanos tu correo. Requerimos al menos 20 testers.
              </p>
            </div>

            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="flex flex-col sm:flex-row w-full gap-3 mt-auto"
            >
              <label htmlFor="beta-email" className="sr-only">
                Correo electrónico Beta
              </label>
              <input
                type="email"
                id="beta-email"
                name="email"
                required
                placeholder="Ingresa tu correo"
                className="grow bg-white/50 border-b-2 border-gray-300/50 py-3 px-4 text-black placeholder:text-gray-500 focus:outline-none focus:border-black focus:bg-white transition-all rounded-t-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white font-bold tracking-wider hover:bg-gray-800 transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded-sm shadow-xl shadow-black/10 shrink-0"
              >
                Notificarme
              </button>
            </form>
          </div>

          {/* Card 2: TikTok Community */}
          <div className="flex-1 bg-black text-white p-8 md:p-12 shadow-2xl rounded-3xl flex flex-col justify-between selection:bg-white selection:text-black">
            <div>
              <div className="flex justify-start mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-md shadow-2xl flex items-center justify-center p-1">
                  <svg
                    className="w-14 h-14 rounded-xl overflow-hidden"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="TikTok"
                  >
                    <g>
                      <path fill="#000" d="M0 0h48v48H0z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M29.93 8.94A7.82 7.82 0 0 1 29.68 7h-5.56v22.1a4.6 4.6 0 1 1-3.14-4.38v-5.96A10.42 10.42 0 0 0 9.13 29.1c0 5.77 4.65 10.44 10.4 10.44 5.66 0 10.27-4.54 10.4-10.2V18.03a13.2 13.2 0 0 0 7.5 2.33v-5.59a7.75 7.75 0 0 1-7.5-5.83Z"
                        fill="#25F4EE"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M31.38 10.4a7.82 7.82 0 0 1-.25-1.94h-5.56v22.1a4.6 4.6 0 1 1-3.14-4.38v-5.96a10.42 10.42 0 0 0-11.85 10.34c0 5.77 4.65 10.44 10.4 10.44 5.66 0 10.27-4.54 10.4-10.2V19.49a13.2 13.2 0 0 0 7.5 2.32v-5.58a7.75 7.75 0 0 1-7.5-5.84Z"
                        fill="#fff"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M29.82 8.46a7.77 7.77 0 0 0 2.9 4.71 7.75 7.75 0 0 1-1.59-4.71h-1.31Zm7.6 7.63v4.27a13.2 13.2 0 0 1-7.5-2.33v11.31a10.42 10.42 0 0 1-10.4 10.2c-2.5 0-4.8-.89-6.59-2.37 1.9 2.34 4.8 3.83 8.05 3.83 5.66 0 10.27-4.55 10.4-10.2V19.49a13.2 13.2 0 0 0 7.5 2.32v-5.58c-.5 0-.99-.05-1.46-.14Zm-16.44 4.02v4.61a4.6 4.6 0 0 0-3.9 8.29 4.6 4.6 0 0 1 5.35-6.83V20.2c-.48-.06-.96-.1-1.45-.1Z"
                        fill="#FE2C55"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Construimos Contigo
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Lanzaremos actualizaciones de la aplicación periódicamente según
                vayamos recibiendo comentarios de mejora en nuestra cuenta
                oficial de TikTok. ¡Tu opinión es nuestra prioridad, únete al
                desarrollo!
              </p>
            </div>

            <div className="mt-auto">
              <a
                href="https://www.tiktok.com/@balloon.tec?_r=1&_t=ZS-94Kx9nICWXg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar TikTok oficial"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black font-bold tracking-wide hover:bg-gray-200 transition-colors shadow-2xl rounded-sm"
              >
                Ver en TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFuture;
