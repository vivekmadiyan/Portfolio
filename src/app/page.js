import Experience from "./components/Experience";
import HomeSection from "./components/HomeSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <main>
        <HomeSection />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
