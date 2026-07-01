import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Challenges from "./components/Challenges";
import Services from "./components/Services";
import Capabilities from "./components/Capabilities";
import Stats from "./components/Stats";
import Process from "./components/Process";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Challenges />
        <Services />
        <Capabilities />
        <Stats />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
