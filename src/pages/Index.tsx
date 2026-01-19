import { MainLayout } from "@/layouts/MainLayout";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
