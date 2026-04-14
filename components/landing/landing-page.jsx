import { AnimatedBackground } from "@/components/landing/animated-background";
import { FeaturePanelsSection } from "@/components/landing/feature-panels-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { Navbar } from "@/components/landing/navbar";
import { ReasonsSection } from "@/components/landing/reasons-section";

export function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <AnimatedBackground />

      <div className="relative z-10 px-0 py-0">
        <div className="mx-auto min-h-screen max-w-none overflow-hidden rounded-none border-0 bg-[#0b0b0c] shadow-none">
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
