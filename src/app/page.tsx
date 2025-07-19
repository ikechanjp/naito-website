import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { MouseStarDust } from "@/components/ui/shooting-stars";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <MouseStarDust />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
