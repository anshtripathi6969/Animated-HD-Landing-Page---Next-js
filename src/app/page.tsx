import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductDemo } from "@/components/ProductDemo";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { HorizontalScroll } from "@/components/HorizontalScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neon-cyan selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <HorizontalScroll />
      <ProductDemo />
      <Stats />
      <Footer />
    </main>
  );
}
