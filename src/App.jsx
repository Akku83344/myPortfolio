import Lenis from "@studio-freight/lenis";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1,
      touchMultiplier: 1.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-16">
        <Hero />
        <About />
        <Technologies />
        <Experience/>
        <Projects />
        <Contact />
        <Navbar />
      </div>
    </div>
  );
};

export default App;
