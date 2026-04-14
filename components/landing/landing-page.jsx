import { AnimatedBackground } from "@/components/landing/animated-background";
import { FeaturePanelsSection } from "@/components/landing/feature-panels-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { Navbar } from "@/components/landing/navbar";
import { ReasonsSection } from "@/components/landing/reasons-section";

export function LandingPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-transparent text-white antialiased">
      <AnimatedBackground />

      <div className="relative z-10 px-2 py-2 sm:px-3 sm:py-3 lg:px-4 lg:py-4">
        <div className="mx-auto min-h-[calc(100vh-1rem)] max-w-[1600px] overflow-hidden rounded-[2rem] border border-white/8 bg-[#0b0b0c] shadow-[0_40px_140px_rgba(0,0,0,0.38)]">
          <Navbar />
          <HeroSection />
          <ReasonsSection />
          <FeaturePanelsSection />
          <FinalCtaSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
