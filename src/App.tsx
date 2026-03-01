import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./components/Layout/ScrollToTop";

/**
 * Root Application Component.
 * Sets up the routing infrastructure, global providers (like Helmet for SEO),
 * and defines the high-level layout structure including Header and Footer.
 *
 * @returns {JSX.Element} The rendered React application.
 */
function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>BalloonTec - Indie Software Developers</title>
      </Helmet>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Products />} />
              <Route
                path="/productos/billete-seguro"
                element={<ProductDetail />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
