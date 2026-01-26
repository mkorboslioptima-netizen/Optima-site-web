import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";

/* Pages */
import HomeOne from "./pages/HomeOne";
import Homefive from "./pages/HomeFive";
import About from "./pages/About";
import Services from "./pages/Services";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Horoquartz from "./pages/Horoquartz";
import Cart from "./pages/Cart";
import CourseDetails from "./pages/CourseDetails";
import Faq from "./pages/Faq";
import Teams from "./pages/Teams";
import Blogs from "./pages/Blogs";
import Checkout from "./pages/Checkout";
import Notfound from "./pages/Notfound";

export default function App() {
  const location = useLocation();
  const lenisRef = useRef(null);

  /* INIT LENIS */
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.0,
      lerp: 0.1, // ⭐ clé de la fluidité (0.1 = scroll fluide)
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  /* AOS */
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  /* SCROLL TOP */
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homefive/>} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project-details" element={<ProjectDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/course-details" element={<CourseDetails />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/horoquartz" element={<Horoquartz />} />
    </Routes>
  );
}
