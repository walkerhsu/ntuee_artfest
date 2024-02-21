import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // get the current location

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 
  // if pathname is changed, scroll to the top of the page

  return null;
}