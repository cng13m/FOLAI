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

      <div className="relative z-10 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[2rem] border border-black/5 bg-[#0b0b0c] shadow-[0_40px_120px_rgba(17,17,17,0.18)] sm:rounded-[2.5rem]">
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
