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

      <div className="relative z-10 px-2 py-2 sm:px-3 sm:py-3 lg:px-4 lg:py-4">
        <div className="mx-auto max-w-[1720px] overflow-hidden rounded-[1.6rem] border border-black/5 bg-[#0b0b0c] shadow-[0_40px_120px_rgba(17,17,17,0.18)] sm:rounded-[2rem]">
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
