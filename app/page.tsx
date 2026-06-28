import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Accolades } from "@/components/site/accolades";
import { About } from "@/components/site/about";
import { Problems } from "@/components/site/problems";
import { Method } from "@/components/site/method";
import { Programs } from "@/components/site/programs";
import { Results } from "@/components/site/results";
import { Community } from "@/components/site/community";
import { Testimonials } from "@/components/site/testimonials";
import { FreeGift } from "@/components/site/free-gift";
import { CTA } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";
import { ChatWidget } from "@/components/site/chat-widget";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Accolades />
      <About />
      <Problems />
      <Method />
      <Programs />
      <Results />
      <Community />
      <Testimonials />
      <FreeGift />
      <CTA />
      <Footer />
      <ChatWidget />
    </main>
  );
}
