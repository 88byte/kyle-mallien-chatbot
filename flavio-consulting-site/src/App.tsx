import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Challenges from "./components/Challenges";
import Services from "./components/Services";
import Capabilities from "./components/Capabilities";
import Process from "./components/Process";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";

export default function App() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <Work />
        <Services />
        <Capabilities />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
