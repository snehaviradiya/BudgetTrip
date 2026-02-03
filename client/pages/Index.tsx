import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import BudgetPlansSection from "@/components/BudgetPlansSection";
import TravelTipsSection from "@/components/TravelTipsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <BudgetPlansSection />
      <TravelTipsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
