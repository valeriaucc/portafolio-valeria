import LoadingScreen from "./components/layout/LoadingScreen";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/ui/CustomCursor";
import ParticleField from "./components/ui/ParticleField";
import ScrollProgress from "./components/ui/ScrollProgress";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";
import Testimonials from "./components/sections/Testimonials";
import Terminal from "./components/sections/Terminal";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <ParticleField />
      <CustomCursor />
      <ScrollProgress />
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Testimonials />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
