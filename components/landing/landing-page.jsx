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

      <div className="relative z-10">
        <div className="min-h-screen w-full bg-[#0b0b0c]">
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
