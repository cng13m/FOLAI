import { AnimatedBackground } from "@/components/landing/animated-background";
import { BrandsSection } from "@/components/landing/brands-section";
import { FeaturePanelsSection } from "@/components/landing/feature-panels-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { IndustriesSection } from "@/components/landing/industries-section";
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
          <HowItWorksSection />
          <ReasonsSection />
          <FeaturePanelsSection />
          <IndustriesSection />
          <BrandsSection />
          <FinalCtaSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
