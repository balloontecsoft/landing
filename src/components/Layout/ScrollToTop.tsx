import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component.
 * Listens for route changes and automatically scrolls the window to the top.
 * Essential for Single Page Applications (SPAs) to mimic traditional page navigation behavior.
 *
 * @returns {null} Renderless component.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
