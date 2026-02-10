import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ActionButtons from "@/components/ActionButtons";
import VideoSection from "@/components/VideoSection";
import BienalBanner from "@/components/BienalBanner";
import BienalCTA from "@/components/BienalCTA";
import AboutSection from "@/components/AboutSection";
import PoetrySection from "@/components/PoetrySection";
import PremiacaoSection from "@/components/PremiacaoSection";
import KitsSection from "@/components/KitsSection";
import InscricaoForm from "@/components/InscricaoForm";
import QuemSomos from "@/components/QuemSomos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="inicio">
        <HeroSection />
        <ActionButtons />
      </div>
      <VideoSection />
      <BienalBanner />
      <BienalCTA />
      <div id="sobre">
        <AboutSection />
      </div>
      <PoetrySection />
      <div id="premiacao">
        <PremiacaoSection />
      </div>
      <div id="kits">
        <KitsSection />
      </div>
      <div id="inscricao">
        <InscricaoForm />
      </div>
      <QuemSomos />
      <div id="contato">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
