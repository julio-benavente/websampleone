import CallToAction from "./home/CallToAction";
import FAQSection from "./home/FAQSection";
import HeroSection from "./home/HeroSection";
import ServicesSections from "./home/ServicesSection";
import TeamSection from "./home/TeamSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSections />
      <CallToAction />
      <FAQSection />
      <TeamSection />
    </main>
  );
}
