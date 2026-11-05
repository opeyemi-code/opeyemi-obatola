import Navbar from "./components/layout/Navbar";
import About from "./components/section/About";
import Contact from "./components/section/Contact";
import Education from "./components/section/Education";
import Experience from "./components/section/Experience";
import Footer from "./components/layout/Footer";
import Hero from "./components/section/Hero";
import Projects from "./components/section/Projects";
import Skills from "./components/section/Skills";

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
