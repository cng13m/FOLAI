import { Navbar } from "@/components/landing/navbar";
import { AnimatedBackground } from "@/components/landing/animated-background";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { ProductPreviewSection } from "@/components/landing/product-preview-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { Footer } from "@/components/landing/footer";

export function LandingPage() {
  return (
    <main className="relative overflow-hidden bg-transparent text-white">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <IndustriesSection />
      <FeaturesSection />
      <BenefitsSection />
      <ProductPreviewSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
