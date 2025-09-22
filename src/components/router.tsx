import { HospitalPage } from './hospital-page';
import { PharmacyPage } from './pharmacy-page';
import { LabsPage } from './labs-page';
import { Footer } from './footer';
import { useNavigation } from './navigation-context';

// Main homepage components
import { HeroSection } from './hero-section';
import { SpecificationsSection } from './specifications-section';
import { FeaturesShowcase } from './features-showcase';
import { AboutMindspireSection } from './about-mindspire-section';
import { TestimonialsSection } from './testimonials-section';
import { IntegrationsSection } from './integrations-section';
import { PricingSection } from './pricing-section';
import { DemoCTASection } from './demo-cta-section';
import { ContactSection } from './contact-section';

function HomePage() {
  return (
    <>
      <div className="relative z-10">
        <HeroSection />
        <SpecificationsSection />
        <FeaturesShowcase />
        <AboutMindspireSection />
        <TestimonialsSection />
        <IntegrationsSection />
        <PricingSection />
        <DemoCTASection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export function Router() {
  const { currentPath } = useNavigation();

  switch (currentPath) {
    case '/hospital':
      return <HospitalPage />;
    case '/pharmacy':
      return <PharmacyPage />;
    case '/labs':
      return <LabsPage />;
    default:
      return <HomePage />;
  }
}